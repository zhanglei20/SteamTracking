#!/bin/bash

# Copyright © 2024 Valve Corporation
# Copyright © 2021-2024 Collabora Ltd.
#
# SPDX-License-Identifier: MIT
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission notice shall be included
# in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
# IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
# CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
# TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
# SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# verbose
#set -x

set -e
set -o pipefail
set -u
shopt -s nullglob

me="$(readlink -f "$0")"
here="${me%/*}"
me="${me##*/}"

log () {
    echo "${me}[$$]: $*" >&2 || :
}

undo_steamrt () {
    # Undo the LD_LIBRARY_PATH Steam Runtime environment, if in use
    case "${STEAM_RUNTIME-}" in
        (/*)
            ;;
        (*)
            return
            ;;
    esac

    local default_path="/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games"
    unset LD_LIBRARY_PATH

    # Try not to fall back to the default_path if we don't have to
    case ":$PATH:" in
        (*:$STEAM_RUNTIME*)
            export PATH="$default_path"
            ;;
    esac

    case "${STEAM_ZENITY-}" in
        ($STEAM_RUNTIME/*)
            unset STEAM_ZENITY
            ;;
    esac

    unset STEAM_RUNTIME

    if [ -n "${SYSTEM_LD_LIBRARY_PATH+set}" ]; then
        export LD_LIBRARY_PATH="$SYSTEM_LD_LIBRARY_PATH"
    fi

    if [ -n "${SYSTEM_PATH+set}" ]; then
        export PATH="$SYSTEM_PATH"
    fi

    # Removing the Steam Runtime from the PATH might have eliminated our
    # ability to run zenity via PATH search, if the host system doesn't
    # have it
    if [ "${STEAM_ZENITY-}" = zenity ] && ! command -v zenity >/dev/null; then
        unset STEAM_ZENITY
    fi
}

# see sysexits.h
EX_SOFTWARE () {
    exit 70
}
EX_USAGE () {
    exit 64
}

extract_archive() {
    local uncompressed_size=""
    local dialog="${STEAM_ZENITY-}"

    if [ -x ~/.steam/root/steam-dialog ]; then
        dialog="$HOME/.steam/root/steam-dialog"
    fi

    case "$2" in
    *.gz)
        uncompressed_size=$(gzip --list "$2" | sed -n -e "s/.*[[:space:]]\+[0-9]\+[[:space:]]\+\([0-9]\+\)[[:space:]].*$/\1/p" || true)
        ;;
    *.xz)
        uncompressed_size=$(xz --robot --list "$2" | awk '/totals/ {print $5; exit}' || true)
        ;;
    esac
    # The above may fail if the archive is corrupted
    if [[ "$uncompressed_size" -eq 0 ]]; then
        uncompressed_size=250000000
    fi
    if [ -n "$uncompressed_size" ]; then
        # Choose the blocking factor (counting in 512-byte blocks) so that
        # we process slightly more than 1% of the file per record, for a
        # total of 98 or fewer records (it's better for our progress bar
        # to stop slightly short than to overshoot), and emit a checkpoint
        # once per record.
        BF=$((uncompressed_size / $((512 * 98)) + 1))
        if [ -n "${dialog-}" ]; then
            # Intentionally not expanding $TAR_CHECKPOINT:
            # shellcheck disable=SC2016
            tar --blocking-factor="${BF}" --checkpoint=1 --checkpoint-action='exec=echo "$TAR_CHECKPOINT" || true' -xf "$2" -C "$3" \
                | ( "${dialog}" --progress --auto-close --no-cancel --width 400 --text="$1" || true ) >&2
        else
            # shellcheck disable=SC2016
            tar --blocking-factor="${BF}" --checkpoint=1 --checkpoint-action='exec=echo "$TAR_CHECKPOINT%" || true' -xf "$2" -C "$3" >&2
        fi
    else
        echo "$1"
        tar -xf "$2" -C "$3"
    fi
}

bootstrap () {
    local unpack_dir="$1"
    local steamrt="$2"
    local subdir="$3"
    local validate="$4"

    case "$steamrt" in
        (.)
            log "--runtime with --unpack-dir must not start with a dot"
            EX_USAGE
            ;;

        ("")
            log "--runtime with --unpack-dir must be non-empty"
            EX_USAGE
            ;;

        (*/*)
            log "--runtime with --unpack-dir must be a single path component"
            EX_USAGE
            ;;
    esac

    # :? to make sure we error out if unpack_dir is somehow empty
    local tarball="${unpack_dir:?}/$steamrt.tar.xz"
    local target="${unpack_dir:?}/$steamrt"
    local reference="${unpack_dir:?}/$steamrt.VERSIONS.txt"
    local available="${unpack_dir:?}/$steamrt/VERSIONS.txt"
    local tmpdir="${unpack_dir:?}/$steamrt.new"

    if ! [ -e "$reference" ]; then
        reference="${unpack_dir:?}/$steamrt.version.txt"
    fi

    local ref_content
    # Apparently transferring these files through the Steam bootstrap
    # converts LF to CRLF line endings, so undo that
    ref_content="$(sed -e 's/\r//' < "$reference")"

    if [ -e "$available" ] && [ "$ref_content" = "$(sed -e 's/\r//' < "$available" || true)" ]; then
        # Runtime is unpacked and up to date, use it as-is
        return 0
    fi

    rm -fr "$tmpdir"
    mkdir "$tmpdir"

    log "Extracting $tarball to $tmpdir"
    if ! extract_archive "Unpacking Steam Linux Runtime container" "$tarball" "$tmpdir"; then
        EX_SOFTWARE
    fi

    # Allow the tarball to unpack to either SteamLinuxRuntime_sniper/ or
    # steam-linux-runtime-sniper/, for example. We don't use
    # tar --strip-components=1 in case it's a non-GNU tar.
    if [ -d "$tmpdir/$subdir" ] && ! [ -e "$tmpdir/$steamrt" ]; then
        mv "${tmpdir:?}/${subdir:?}" "${tmpdir:?}/${steamrt:?}"
    fi

    if [ "$ref_content" != "$(sed -e 's/\r//' < "$tmpdir/$steamrt/VERSIONS.txt" || true)" ]; then
        log "$tarball contained unexpected VERSIONS.txt: $tmpdir/$steamrt/VERSIONS.txt should match $reference"
        diff -Nu --strip-trailing-cr "$reference" "$tmpdir/$steamrt/VERSIONS.txt" >&2 || true
        EX_SOFTWARE
    fi

    if [ -n "$validate" ] && ! "$tmpdir/$steamrt/pressure-vessel/bin/pv-verify" --quiet; then
        log "$tarball content verification failed"
        EX_SOFTWARE
    fi

    rm -f "$available"
    rm -fr "${target:?}"
    mv "${tmpdir:?}/$steamrt" "$unpack_dir"
    rmdir "$tmpdir"
}

RUNTIME=steam-runtime-steamrt-amd64

usage () {
    local status="${1:-64}"     # EX_USAGE by default

    if [ "${status}" -gt 0 ]; then
        exec >&2
    fi

    cat << EOF
Usage: $me [OPTIONS...] [--] [COMMAND [ARGUMENTS]]

Bootstrap a container-based Steam Linux Runtime and run COMMAND in it.
If no COMMAND, just write the entry point to standard output and exit.

Options:
--runtime=NAME                          Use NAME in filenames instead of
                                        $RUNTIME
--try-runtime=OTHER_DIRECTORY           Try to use OTHER_DIRECTORY instead of
                                        unpacking DIRECTORY/$RUNTIME.tar.xz
--unpack-dir=DIRECTORY                  Unpack DIRECTORY/$RUNTIME.tar.xz
                                        into DIRECTORY/$RUNTIME
                                        (default: $here)
--validate                              Check runtime integrity
EOF
    exit "$status"
}

main () {
    local entry_point=
    local getopt_temp="help"
    local runtime="$RUNTIME"
    local try_runtime=
    local unpack_dir="$here"
    local validate=

    getopt_temp="$getopt_temp,runtime:"
    getopt_temp="$getopt_temp,try-runtime:"
    getopt_temp="$getopt_temp,unpack-dir:"
    getopt_temp="$getopt_temp,validate"
    getopt_temp="$(getopt -o '' --long "$getopt_temp" -n "$me" -- "$@")"
    eval "set -- $getopt_temp"
    unset getopt_temp

    while [ "$#" -gt 0 ]
    do
        case "$1" in
            (--help)
                usage 0
                ;;

            (--runtime)
                runtime="$2"
                shift 2
                ;;

            (--try-runtime)
                try_runtime="$2"
                shift 2
                ;;

            (--unpack-dir)
                if ! [ -d "$2" ]; then
                    log "'$2' is not a directory"
                    usage
                fi
                unpack_dir="$(readlink -f "$2")"
                shift 2
                ;;

            (--validate)
                validate=1
                shift
                ;;

            (--)
                shift
                break
                ;;

            (-*)
                log "unknown option: $1"
                usage
                ;;

            (*)
                break
                ;;
        esac
    done

    if [ -n "$try_runtime" ] \
        && cmp -s "$try_runtime/VERSIONS.txt" "$unpack_dir/$runtime.VERSIONS.txt" \
        && { [ -z "$validate" ] || "$try_runtime/pressure-vessel/bin/pv-verify" --quiet; }
    then
        rm -fr "${unpack_dir:?}/$runtime"
        entry_point="$try_runtime/_v2-entry-point"
    else
        bootstrap "$unpack_dir" "$runtime" "$RUNTIME" "$validate"
        entry_point="$unpack_dir/$runtime/_v2-entry-point"
    fi

    if [ "$#" -gt 0 ]; then
        exec "$entry_point" -- "$@"
    else
        echo "$entry_point"
        return 0
    fi
}

undo_steamrt
main "$@"

# vim:set sw=4 sts=4 et:
