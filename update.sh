#!/bin/bash
set -euo pipefail

git_commit_message() {
	local all_changed_files
	all_changed_files=$(git status --porcelain)

	local num_files
	num_files=$(echo "${all_changed_files}" | wc -l)

	local non_c_files
	non_c_files=$(echo "${all_changed_files}" | grep -v "^.. c/" || true)

	local file_list
	file_list=$(echo "${non_c_files}" | awk '{print $2}' | xargs -r -n1 basename | sed '{:q;N;s/\n/, /g;t q}')

	echo "${num_files} files${file_list:+ | ${file_list}}"
}

php update.php "$@"

git add -A
MESSAGE=$(git_commit_message)
git commit -a -m "${MESSAGE}" || true
git push
