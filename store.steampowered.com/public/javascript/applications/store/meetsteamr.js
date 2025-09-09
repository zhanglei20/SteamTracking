/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8620],
  {
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    29645: (e) => {
      e.exports = {
        Ctn: "_35KiKa7cq-3mn4lChNW67c",
        EventName: "e-36dCsEtoK52wg6Qx1iq",
        AtendeeSearchRow: "_1KbfPGq52sl-NB4ku90gN3",
        AtendeeListButtonRow: "_2JLogmiR30ClrphBajhwYK",
        BackToListIcon: "_3bl-GtsF8LkmzsRFkqjeCz",
        AttendeeRow: "_35gHo_M6tBBUOL8PWGEmA9",
        DisplayAllDaysCtn: "_3bvF759mojZQZv_TGXaM5Q",
        DisplayDaysCtn: "_1b8sKAzr4LILvJyl7fkRrL",
        DateName: "_32Ut51xzdWXCL6OOaz4vY2",
        DisplayDaySessions: "_32v8UGu0FfxnCHtltxqiEV",
        NotToday: "_1PB1JESsJ8abJrTzTqOVBk",
        DisplayDaySessionsRow: "_3DhIykQH8p8dQb2VOZg4-L",
        DisplaySession: "_27ybiS1mMlsYotyoQGVmI_",
        Header: "_1jOgBHcEXg1l6kSowBxwn6",
        SessionName: "vl9qom9droT0L3xZs2JhG",
        SessionTime: "PG1xFNh9UdoEjEvvw22V5",
        CapacityCtn: "_2jxcROaKoRgZCIKUHALVRH",
        CapacityBarMax: "_2Kd3cw8fPPyzDXTWBxltj7",
        CapacityBarCurrent: "_3jKSoLI8ytiyq9ELWTJNVY",
        Full: "_27_ZZ6xz-L8KC1u6uQmDz",
        SetCapacityButton: "_1BPqndgvTdc3n4fPDlcvAQ",
        SetCapacityInput: "QnMJIDEn4Rz26VtL1RdUu",
      };
    },
    15588: (e) => {
      e.exports = {
        Ctn: "_3cmUbcgdPxM7o5hl986RgB",
        User: "_3E6Usl36asxUFK3vPKa7Us",
        EventName: "_2GHTaky49GZrPLyiOgKWB7",
        SessionInfo: "Kk38rrvnYm3-E2jJMahSH",
        SessionName: "_2uJvCA4FncHONmSI37VVyw",
        SessionTime: "_2vYmHfXJIHj2eCv8NsiqZv",
        RegisteredUsers: "HLiipgmnfEQ2O-9WritfU",
        CheckedIn: "_17S0ayInAou4_ptPoMguR0",
        GuestTitle: "_2fMFlfbH8xUEtW28kSLf5-",
        GuestEmail: "Tm-tj9XNHRPGqdqqNiTEp",
        DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
      };
    },
    20019: (e, t, n) => {
      "use strict";
      function a(e) {
        switch (e) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      n.d(t, { U: () => a });
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => h, KM: () => S, KT: () => y });
      var a = n(41735),
        s = n.n(a),
        r = n(58632),
        i = n.n(r),
        o = n(90626),
        l = n(20194),
        c = n(75233),
        u = n(17720),
        m = n(68797),
        d = n(78327),
        p = n(56545),
        g = n(37735),
        E = n(23809);
      const _ = "nicknames";
      function S(e) {
        const t = (0, E.KV)(),
          { data: n, isLoading: a } = (0, l.I)({
            queryKey: [_],
            queryFn: async () => {
              const e = new Map();
              if (d.iA.logged_in) {
                const n = p.w.Init(g.dN),
                  a = (await g.xt.GetNicknameList(t, n)).Body().toObject();
                a?.nicknames &&
                  a.nicknames.length > 0 &&
                  a.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const f = new (i())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, d.yK)()
                  ? d.TS.COMMUNITY_BASE_URL
                  : d.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  a = await s().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(a).strErrorMsg}`;
                return [a.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  a = await s().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(a).strErrorMsg}`;
                const r = new Map();
                return (
                  a.data.userinfos.forEach((e) =>
                    r.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => r.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        v = "avatarandpersonas";
      function y(e) {
        const { data: t, isLoading: n } = (0, l.I)({
          queryKey: [v, e],
          queryFn: () => f.load(e),
        });
        return [t, n];
      }
      function h(e) {
        const t = (0, c.jE)(),
          { data: n, isLoading: a } = (0, l.I)({
            queryKey: [v, e],
            queryFn: async () => {
              const n = await f.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [v, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          s = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return a ? null : s;
      }
    },
    8905: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var a = n(90626),
        s = n(17720),
        r = n(27144),
        i = n(15736),
        o = n(78327);
      function l(e) {
        const { accountID: t, bHideWhenNotAvailable: n, bHideName: l } = e,
          [c] = (0, r.KT)(t),
          u = (0, r.KM)(t),
          m = a.useMemo(() => s.b.InitFromAccountID(t), [t]),
          d = `${o.TS.COMMUNITY_BASE_URL}profiles/${m.ConvertTo64BitString()}`;
        return a.createElement(
          a.Fragment,
          null,
          Boolean(!c)
            ? a.createElement(
                a.Fragment,
                null,
                Boolean(!n) && a.createElement("span", null, t),
              )
            : a.createElement(
                "a",
                { href: d },
                a.createElement("img", {
                  className: i.SmallAvatar,
                  src: c.avatar_url,
                  "data-miniprofile": "s" + m.ConvertTo64BitString(),
                }),
                Boolean(!l) &&
                  a.createElement(
                    "span",
                    null,
                    u ? `${u} (${c.persona_name})` : c.persona_name,
                  ),
              ),
        );
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { qx: () => g });
      var a = n(10981),
        s = n(61859),
        r = n(12155),
        i = n(90626),
        o = n(52038),
        l = n(95695),
        c = n(84811),
        u = n(64734),
        m = n(65946),
        d = n(26408);
      function p(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: a,
            toggleMinimized: s,
            className: r,
            children: p,
            elAdditionalButtons: g,
          } = e,
          _ = (0, m.q3)(() => a());
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            {
              className: (0, o.A)(
                r,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            i.createElement(
              "div",
              {
                className: (0, o.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && i.createElement(d.o, { tooltip: n }),
            ),
            i.createElement(
              "div",
              { className: u.SectionTitleButtons },
              g,
              i.createElement(E, { bIsMinimized: _, fnToggleMinimize: s }),
            ),
          ),
          !_ && i.createElement(c.tH, null, p),
        );
      }
      function g(e) {
        const [t, n] = i.useState(Boolean(e.bStartMinimized));
        return i.createElement(
          p,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function E(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return i.createElement(
          a.$n,
          { "data-tooltip-text": (0, s.we)(o), onClick: n },
          e.bIsMinimized
            ? i.createElement(r.hz4, null)
            : i.createElement(r.Xjb, null),
        );
      }
    },
    57912: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => me, default: () => de });
      var a = n(90626),
        s = n(43527),
        r = n(92757),
        i = n(82715),
        o = n(22837),
        l = n(2160),
        c = n(8527),
        u = n(60746),
        m = n(6379),
        d = n(30756),
        p = n(92557),
        g = n(22797),
        E = n(61859),
        _ = n(43068);
      function S(e) {
        const { gid: t } = (0, r.g)(),
          [n, s] = (0, a.useState)(!0);
        if (
          (a.useEffect(() => {
            n &&
              (m.O3.Init(), Promise.all([u.KN.InitGlobal()]).then(() => s(!1)));
          }, [n]),
          n)
        )
          return a.createElement(g.t, {
            string: (0, E.we)("#Loading"),
            position: "center",
          });
        const S = m.O3.GetClanEventModel(t);
        return S
          ? a.createElement(
              i.tH,
              null,
              !S.BIsUnlistedEvent() &&
                a.createElement(
                  "div",
                  null,
                  "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                ),
              a.createElement(p.jA, {
                lang: (0, o.sf)(c.TS.LANGUAGE),
                event: S,
                adminPanel:
                  c.TS.EREALM === l.TU.k_ESteamRealmChina
                    ? a.createElement(_.P, { eventModel: S })
                    : a.createElement(d.g, {
                        eventModel: S,
                        bSupportsSticky: !0,
                      }),
              }),
            )
          : null;
      }
      var f = n(51614),
        v = n(41735),
        y = n.n(v),
        h = n(62216),
        M = n(44165),
        T = n(30470),
        w = n(24484);
      function N(e, t, n) {
        for (const a of e)
          if (a.group_id === t) {
            const e = a.sessions.find((e) => e.id === n);
            if (e) return { group: a, session: e };
          }
        return { group: null, session: null };
      }
      function C(e, t) {
        const n = (0, M.f1)(),
          [s] = (0, a.useState)(() =>
            (0, w.Tc)("registrations", "application_config")
              .map((e) => ((e.userReg = JSON.parse(e.jsondata)), e))
              .sort((t, n) => {
                const a = N(
                    e.jsondata.meet_steam_groups,
                    t.group_id,
                    t.session_id,
                  ),
                  s = N(e.jsondata.meet_steam_groups, n.group_id, n.session_id);
                return (
                  (s?.session?.rtime_start || 0) -
                  (a?.session?.rtime_start || 0)
                );
              })
              .map((t) => {
                const a = N(
                  e.jsondata.meet_steam_groups,
                  t.group_id,
                  t.session_id,
                );
                return (
                  (t.relativeToToday = (function (e, t) {
                    if (!e) return "past";
                    const n = (0, h.Sk)(e),
                      a = (0, h.Ue)(e.rtime_start, n),
                      s = void 0 !== t ? new Date(1e3 * t) : new Date(),
                      r = new Date(s.getFullYear(), s.getMonth(), s.getDate()),
                      i = new Date(
                        s.getFullYear(),
                        s.getMonth(),
                        s.getDate() + 1,
                      );
                    return a >= r && a < i
                      ? "today"
                      : a < r
                        ? "past"
                        : "future";
                  })(a?.session, n)),
                  (t.rtSesssionTime = a.session.rtime_start),
                  t
                );
              }),
          ),
          r = t?.trim().toLowerCase() || "";
        return (0, a.useMemo)(
          () =>
            s.filter(
              (e) =>
                !r.length ||
                e.userReg.name?.toLowerCase().includes(r) ||
                e.userReg.company?.toLowerCase().includes(r) ||
                e.userReg.guest_names?.find((e) =>
                  e.toLowerCase().includes(r),
                ) ||
                e.userReg.email_override?.toLowerCase().includes(r),
            ),
          [s, t],
        );
      }
      function D(e, t) {
        return (0, a.useMemo)(
          () =>
            e.reduce(
              (e, t) => (
                e[t.relativeToToday] || (e[t.relativeToToday] = []),
                e[t.relativeToToday].push(t),
                e
              ),
              { today: [], past: [], future: [] },
            ),
          [e, t],
        );
      }
      var A = n(38390),
        k = n(27144),
        b = n(10981),
        R = n(71298),
        L = n(95034),
        I = n(8905),
        B = n(78395),
        U = n(21869),
        G = n(48479),
        F = n(52038),
        x = n(91675),
        H = n(84933),
        $ = n(15588),
        z = n.n($),
        j = n(29233);
      function O(e) {
        const [t] = (0, L.QD)("gid"),
          n = (0, A.RR)(t),
          s = (0, o.sf)(T.TS.LANGUAGE);
        return n
          ? a.createElement(
              "div",
              { className: z().Ctn },
              a.createElement(
                "div",
                { className: z().EventName },
                a.createElement("h2", null, n.GetNameWithFallback(s)),
                a.createElement(
                  "a",
                  {
                    href: `${T.TS.STORE_BASE_URL}meetsteam/${t}`,
                    target: "_blank",
                  },
                  "See Event Details",
                ),
              ),
              a.createElement(K, { eventModel: n }),
            )
          : a.createElement(g.t, { string: (0, E.we)("#Loading") });
      }
      function K(e) {
        const { eventModel: t } = e,
          n = D(C(t)),
          [s] = (0, L.QD)("accountid"),
          r = (0, M.f1)();
        return a.createElement(
          "div",
          null,
          a.createElement(
            "div",
            { className: z().User },
            a.createElement(I.p, { accountID: s }),
          ),
          a.createElement(q, {
            eventModel: t,
            rgUserRegs: n.today,
            strTitle: "Today " + (0, x.$z)(r),
          }),
          a.createElement(q, {
            eventModel: t,
            rgUserRegs: n.future,
            bHideIfEmpty: !0,
            strTitle: "Future",
          }),
          a.createElement(q, {
            eventModel: t,
            rgUserRegs: n.past,
            bHideIfEmpty: !0,
            strTitle: "Past",
          }),
        );
      }
      function q(e) {
        const {
          eventModel: t,
          rgUserRegs: n,
          bHideIfEmpty: s,
          strTitle: r,
        } = e;
        return 0 == n.length && s
          ? null
          : a.createElement(
              G.qx,
              { title: `${r} (${n.length})`, bStartMinimized: s },
              Boolean(!n || 0 == n.length)
                ? a.createElement("div", null, s ? "" : "No registrations")
                : a.createElement(
                    "div",
                    null,
                    n
                      .sort((e, t) => e.rtSesssionTime - t.rtSesssionTime)
                      .map((e) =>
                        a.createElement(Q, {
                          key: `${e.group_id}_${e.session_id}`,
                          eventModel: t,
                          reg: e,
                        }),
                      ),
                  ),
            );
      }
      function P(e) {
        const { desc: t } = e,
          [n, s] = (0, a.useState)(!1),
          r = (0, a.useCallback)(() => s((e) => !e), []);
        return a.createElement(
          "div",
          {
            className: (0, F.A)({
              [z().DescriptionWrapper]: !0,
              [z().Expanded]: n,
            }),
            onClick: r,
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
          },
          t,
        );
      }
      function Q(e) {
        const { reg: t, eventModel: n } = e,
          s = new j.b2(t.steamid).GetAccountID(),
          [r] = (0, k.KT)(t.userReg.accountid),
          [o, l] = (0, a.useState)(!0),
          [c, u] = (0, a.useState)([]),
          [m, d] = (0, a.useState)(!1),
          p = t.userReg,
          { group: g, session: E } = N(
            n.jsondata.meet_steam_groups,
            t.group_id,
            t.session_id,
          ),
          [_, S, v] = (0, H.uD)(),
          h =
            ((M = n.GID),
            (w = s),
            (C = t.group_id),
            (D = t.session_id),
            (0, f.n)({
              mutationFn: async ({ bIncludeSelf: e, rgGuests: t }) => {
                const n = new FormData();
                n.append("sessionid", T.TS.SESSIONID),
                  n.append("gid", M),
                  n.append("accountid", "" + w),
                  n.append("meetsteam_group_id", "" + C),
                  n.append("meetsteam_session_id", "" + D),
                  n.append("include_self", "" + (e ? 1 : 0)),
                  t?.length && n.append("guests", t.join("|"));
                const a = `${T.TS.STORE_BASE_URL}meetsteam/ajaxupdateattendance`,
                  s = await y().post(a, n, { withCredentials: !0 });
                return 1 == s?.data?.success;
              },
            }));
        var M, w, C, D;
        const A = new Set(
            t.guests_attendance?.length > 0
              ? t.guests_attendance.split("|")
              : [],
          ),
          R = t.attendance_count > A.size,
          L = (e, t, n, s) =>
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "span",
                { className: z().GuestTitle },
                e,
                ":",
                " ",
              ),
              t,
              n &&
                a.createElement(
                  a.Fragment,
                  null,
                  " ",
                  a.createElement(
                    "span",
                    { className: z().GuestEmail },
                    "(",
                    n,
                    ")",
                  ),
                ),
              a.createElement(
                a.Fragment,
                null,
                " ",
                "-",
                a.createElement(
                  "span",
                  null,
                  s ? "✅ checked in" : "☐ not checked in",
                ),
              ),
            );
        return a.createElement(
          "div",
          null,
          a.createElement(V, { group: g, session: E }),
          Boolean(m)
            ? a.createElement(
                "div",
                { className: z().CheckedIn },
                "Attendee has been checked in",
              )
            : a.createElement(
                "div",
                { className: z().RegisteredUsers },
                a.createElement(b.Yh, {
                  label: a.createElement(
                    a.Fragment,
                    null,
                    L(
                      "Attendee",
                      p.name || r.persona_name,
                      p.email_override,
                      R,
                    ),
                  ),
                  checked: o,
                  onChange: l,
                }),
                Boolean(p.guest_names?.length > 0) &&
                  a.createElement(
                    a.Fragment,
                    null,
                    p.guest_names.map((e) =>
                      a.createElement(b.Yh, {
                        key: t.group_id + "_" + t.session_id + "_" + e,
                        label: a.createElement(
                          a.Fragment,
                          null,
                          L("Guest", e, void 0, A.has(e)),
                        ),
                        checked: c.includes(e),
                        onChange: (t) => {
                          u((n) =>
                            t
                              ? n.includes(e)
                                ? n
                                : [...n, e]
                              : n.filter((t) => t !== e),
                          );
                        },
                      }),
                    ),
                  ),
                a.createElement(
                  b.jn,
                  { onClick: S },
                  "Check in selected people",
                ),
              ),
          a.createElement(
            U.E,
            { active: _ },
            a.createElement(
              i.tH,
              null,
              a.createElement(J, {
                closeModal: v,
                bIncludeSelf: o,
                rgGuestsAttending: c,
                fnMarkAttendance: h,
                fnOnSuccess: () => d(!0),
              }),
            ),
          ),
        );
      }
      function J(e) {
        const {
            closeModal: t,
            bIncludeSelf: n,
            rgGuestsAttending: s,
            fnMarkAttendance: r,
            fnOnSuccess: i,
          } = e,
          o = (0, R.vs)();
        return o.bLoading
          ? a.createElement(R.Hh, {
              state: o,
              strDialogTitle: (0, E.we)("#Saving"),
              closeModal: t,
            })
          : a.createElement(
              B.o0,
              {
                onCancel: t,
                strTitle: (0, E.we)("#Button_Submit"),
                bAllowFullSize: !0,
                onOK: async () => {
                  o.fnSetLoading(!0),
                    r
                      .mutateAsync({ bIncludeSelf: n, rgGuests: s })
                      .then((e) => {
                        e
                          ? (i(),
                            o.fnSetStrSuccess(
                              "Success! This person has been checked in.",
                            ))
                          : o.fnSetStrError(
                              (0, E.we)("#Login_Error_Network_Description"),
                            );
                      })
                      .catch(() =>
                        o.fnSetStrError(
                          (0, E.we)("#Login_Error_Network_Description"),
                        ),
                      );
                },
              },
              "Mark as checked in?",
            );
      }
      function V(e) {
        const { session: t, group: n } = e,
          {
            sDisplayTimeZone: s,
            rtime_start: r,
            rtime_end: i,
          } = (0, h._t)(e.session),
          o = (0, h.rF)(r, s),
          l = (0, h.Mr)(r, i, s);
        return t && n
          ? a.createElement(
              "div",
              { className: z().SessionInfo },
              a.createElement(
                "div",
                { className: z().SessionName },
                n.localized_session_title[0],
              ),
              a.createElement(
                "div",
                { className: z().SessionTime },
                o,
                " @ ",
                a.createElement("b", null, l),
              ),
              a.createElement(
                "div",
                null,
                a.createElement(P, {
                  desc: `Description: ${n.localized_session_description[0] || ""}`,
                }),
              ),
              "dev" == T.TS.WEB_UNIVERSE &&
                a.createElement(
                  "div",
                  null,
                  "Rtime Start (Dev only): ",
                  t.rtime_start,
                ),
            )
          : a.createElement("div", null, "Session Infomrmation Missing");
      }
      var W = n(97058),
        Y = n(29645),
        Z = n.n(Y),
        X = n(12155),
        ee = n(14771),
        te = n(78327);
      function ne(e) {
        const t = new Date(e.getTime());
        return t.setHours(0, 0, 0, 0), t;
      }
      function ae(e) {
        const [t] = (0, L.QD)("gid"),
          n = (0, A.RR)(t),
          s = (0, o.sf)(T.TS.LANGUAGE),
          [r, i] = (0, a.useState)("");
        return n
          ? a.createElement(
              "div",
              { className: Z().Ctn },
              a.createElement(
                "div",
                { className: Z().EventName },
                a.createElement("h1", null, n.GetNameWithFallback(s)),
                a.createElement(
                  "a",
                  {
                    href: `${T.TS.STORE_BASE_URL}meetsteam/${t}`,
                    target: "_blank",
                  },
                  "See Event Details",
                ),
              ),
              a.createElement(ie, { eventModel: n }),
              a.createElement(
                "div",
                { className: Z().AtendeeSearchRow },
                a.createElement(b.pd, {
                  type: "text",
                  label: "Search for an attendee",
                  value: r,
                  bShowClearAction: !0,
                  onChange: (e) => i(e.currentTarget.value || ""),
                  placeholder: "Type name or partner or email address",
                }),
              ),
              a.createElement(se, {
                eventModel: n,
                strSearch: r.toLowerCase(),
              }),
            )
          : a.createElement(g.t, { string: (0, E.we)("#Loading") });
      }
      function se(e) {
        const { eventModel: t, strSearch: n } = e,
          s = C(t, n),
          [r, i] = (0, a.useState)(null),
          [o, l] = (0, a.useMemo)(() => {
            const e = new Map();
            return (
              s.forEach((t) => {
                [t.userReg.name, ...(t.userReg.guest_names || [])].forEach(
                  (n) => {
                    const a = n.toLowerCase();
                    e.has(a) ? e.get(a).push(t) : e.set(a, [t]);
                  },
                );
              }),
              [e, Array.from(e.keys()).sort()]
            );
          }, [s]);
        return (
          a.useEffect(() => {
            i(null);
          }, [n]),
          a.createElement(
            "div",
            null,
            a.createElement("h3", null, "Attendees"),
            Boolean(r)
              ? a.createElement(re, {
                  eventModel: t,
                  rgSelected: r,
                  strSearch: n,
                  onCleanSelection: () => i(null),
                })
              : a.createElement(
                  a.Fragment,
                  null,
                  l
                    .filter((e) => !n || e.includes(n))
                    .map((e) =>
                      a.createElement(
                        "div",
                        { key: e, className: Z().AttendeeRow },
                        a.createElement(
                          b.$n,
                          { onClick: () => i(o.get(e.toLowerCase())) },
                          e,
                        ),
                      ),
                    ),
                ),
          )
        );
      }
      function re(e) {
        const {
            eventModel: t,
            rgSelected: n,
            strSearch: s,
            onCleanSelection: r,
          } = e,
          i = (0, M.f1)(),
          o = D(n, s);
        return a.createElement(
          "div",
          null,
          a.createElement(
            "div",
            { className: Z().AtendeeListButtonRow },
            a.createElement(
              b.$n,
              { onClick: r },
              a.createElement(X.uMb, { className: Z().BackToListIcon }),
              "Back to full list",
            ),
          ),
          a.createElement(q, {
            eventModel: t,
            rgUserRegs: o.today,
            strTitle: "Today " + (0, E.$z)(i),
          }),
          a.createElement(q, {
            eventModel: t,
            rgUserRegs: o.future,
            bHideIfEmpty: !0,
            strTitle: "Future",
          }),
          a.createElement(q, {
            eventModel: t,
            rgUserRegs: o.past,
            bHideIfEmpty: !0,
            strTitle: "Past",
          }),
        );
      }
      function ie(e) {
        const { eventModel: t } = e,
          n = (0, M.s4)(),
          [s, r] = a.useState(!1),
          { rgGroupedSessions: i, bMoreSessions: o } = a.useMemo(() => {
            const e = t?.jsondata?.meet_steam_groups?.flatMap((e) =>
                e.sessions.map((t) => {
                  const n = (0, h.Sk)(t),
                    a = (0, h.Ue)(t.rtime_start, n);
                  return { group: e, session: t, displayDate: a };
                }),
              ),
              a = e?.filter((e) => s || ne(e.displayDate) >= ne(n)),
              r = s || (e && e.length > a.length);
            var i;
            return {
              rgGroupedSessions:
                ((i = (e) => ne(e.displayDate)),
                (a ?? []).reduce((e, t) => {
                  const n = i(t),
                    a = Math.floor(n.getTime() / 1e3),
                    s = e.get(a) || [];
                  return e.set(a, [...s, t]), e;
                }, new Map())),
              bMoreSessions: r,
            };
          }, [t?.jsondata?.meet_steam_groups, n, s]),
          l = a.useMemo(() => {
            const e = (0, te.Tc)("registrations", "application_config");
            if (e && "object" == typeof e)
              return e.reduce((e, t) => {
                const n = `${t.group_id}_${t.session_id}`,
                  a = e.get(n) ?? [];
                return a.push(t), e.set(n, a), e;
              }, new Map());
          }, []);
        if (!l || (0 == i.size && !o)) return;
        const c =
            Array.from(i.keys()).reduce(
              (e, t) => (null == e || (1e3 * t > n.getTime() && t < e) ? t : e),
              void 0,
            ) ?? 0,
          u = Array.from(i.keys()).some((e) =>
            (0, ee.JD)(n, new Date(1e3 * e)),
          );
        return a.createElement(
          "div",
          { className: Z().DisplayAllDaysCtn },
          o &&
            a.createElement(b.Yh, {
              label: "Show past events",
              checked: s,
              onChange: r,
            }),
          a.createElement(
            "div",
            { className: Z().DisplayDaysCtn },
            Array.from(i.keys()).map((e) =>
              a.createElement(oe, {
                key: e,
                eventModel: t,
                date: new Date(1e3 * e),
                sessionsAndGroups: i.get(e),
                rgRegistrationInfo: l,
                isToday: (0, ee.JD)(
                  u ? n : new Date(1e3 * c),
                  new Date(1e3 * e),
                ),
              }),
            ),
          ),
        );
      }
      function oe(e) {
        const {
          eventModel: t,
          date: n,
          sessionsAndGroups: s,
          rgRegistrationInfo: r,
          isToday: i,
        } = e;
        return a.createElement(
          "div",
          { className: (0, F.A)(Z().DisplayDaySessions, !i && Z().NotToday) },
          a.createElement("div", { className: Z().DateName }, (0, E.$w)(n)),
          a.createElement(
            "div",
            { className: Z().DisplayDaySessionsRow },
            s.map((e) =>
              a.createElement(le, {
                key: `${e.group.group_id}_${e.session.id}`,
                eventModel: t,
                date: n,
                registrations:
                  r.get(`${e.group.group_id}_${e.session.id}`) ?? [],
                group: e.group,
                session: e.session,
              }),
            ),
          ),
        );
      }
      function le(e) {
        const {
            eventModel: t,
            date: n,
            group: s,
            session: r,
            registrations: l,
          } = e,
          c = (0, o.sf)(T.TS.LANGUAGE),
          u = (0, M.s4)(),
          { sDisplayTimeZone: m, rtime_start: d } = (0, h._t)(r),
          p = (0, h.us)(d, m),
          g = l.reduce((e, t) => e + (t.guests_registered ?? 0), 0),
          E = l.reduce(
            (e, t) =>
              e +
              (t.rt_attendance_marked > 0 && t.guests_registered
                ? t.guests_registered
                : 0),
            0,
          ),
          [_, S, v] = (0, H.uD)(),
          w =
            ((N = t.GID),
            (C = s.group_id),
            (D = r.id),
            (0, f.n)({
              mutationFn: async ({ nCapacity: e }) => {
                const t = new FormData();
                t.append("sessionid", T.TS.SESSIONID),
                  t.append("gid", N),
                  t.append("meetsteam_group_id", "" + C),
                  t.append("meetsteam_session_id", "" + D),
                  t.append("capacity", "" + e);
                const n = `${T.TS.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`,
                  a = await y().post(n, t, { withCredentials: !0 });
                return 1 == a?.data?.success;
              },
            }));
        var N, C, D;
        return a.createElement(
          "div",
          { className: Z().DisplaySession },
          a.createElement(
            "div",
            { className: Z().Header },
            a.createElement(
              "div",
              { className: Z().SessionName },
              s.localized_session_title[c] ?? s.localized_session_title[0],
            ),
            a.createElement("div", { className: Z().SessionTime }, p),
          ),
          a.createElement(ue, {
            title: "Registered:",
            nCount: g,
            nCapacity: r.max_capacity,
          }),
          a.createElement(ue, {
            title: "Checked in:",
            nCount: E,
            nCapacity: r.max_capacity,
          }),
          ne(n) >= ne(u) &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                b.$n,
                { className: (0, F.A)(Z().SetCapacityButton), onClick: S },
                "Update capacity...",
              ),
              a.createElement(
                U.E,
                { active: _ },
                a.createElement(
                  i.tH,
                  null,
                  a.createElement(ce, {
                    closeModal: v,
                    nCapacity: r.max_capacity ?? 0,
                    fnUpdateCapacity: w,
                    fnOnSuccess: () => window.location.reload(),
                  }),
                ),
              ),
            ),
        );
      }
      function ce(e) {
        const {
            closeModal: t,
            nCapacity: n,
            fnUpdateCapacity: s,
            fnOnSuccess: r,
          } = e,
          [i, o] = a.useState(n.toString()),
          l = (0, R.vs)();
        return l.bLoading
          ? a.createElement(R.Hh, {
              state: l,
              strDialogTitle: (0, E.we)("#Saving"),
              closeModal: t,
            })
          : a.createElement(
              B.o0,
              {
                onCancel: t,
                strTitle: (0, E.we)("Update Capacity"),
                bAllowFullSize: !0,
                onOK: async () => {
                  l.fnSetLoading(!0);
                  const e = Number.isNaN(Number.parseInt(i))
                    ? void 0
                    : Number.parseInt(i);
                  s.mutateAsync({ nCapacity: e })
                    .then((e) => {
                      e
                        ? (r(), l.fnSetStrSuccess("Max capacity updated."))
                        : l.fnSetStrError(
                            (0, E.we)("#Login_Error_Network_Description"),
                          );
                    })
                    .catch(() =>
                      l.fnSetStrError(
                        (0, E.we)("#Login_Error_Network_Description"),
                      ),
                    );
                },
              },
              a.createElement(b.pd, {
                className: Z().SetCapacityInput,
                label: "New capacity",
                type: "text",
                autoComplete: "off",
                value: i,
                onChange: (e) => o(e.currentTarget.value),
              }),
            );
      }
      function ue(e) {
        const { title: t, nCount: n, nCapacity: s } = e,
          r = n >= s,
          i = Math.min((n / s) * 100, 100),
          o = n > 0 ? `${i}%` : "0%";
        return a.createElement(
          "div",
          { className: Z().CapacityCtn },
          a.createElement("span", null, t, " ", n, " / ", s),
          a.createElement(
            "div",
            { className: Z().CapacityBarMax },
            a.createElement("div", {
              className: (0, F.A)(Z().CapacityBarCurrent, r ? Z().Full : ""),
              style: { width: o },
            }),
          ),
        );
      }
      const me = {
        MeetSteamAttendance: () => `${s.B.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${s.B.MeetSteamRoute()}:gid(\\d+)`,
        MeetSteamAttendeeList: () => `${s.B.MeetSteamRoute()}attendeelist`,
      };
      function de(e) {
        return a.createElement(
          r.dO,
          null,
          a.createElement(r.qh, {
            path: me.MeetSteamAttendance(),
            render: (e) => a.createElement(O, { ...e }),
          }),
          a.createElement(r.qh, {
            path: me.MeetSteamAttendeeList(),
            render: (e) => a.createElement(ae, { ...e }),
          }),
          a.createElement(r.qh, {
            path: me.MeetSteamEvent(),
            render: (e) => a.createElement(S, { ...e }),
          }),
          a.createElement(r.qh, null, a.createElement(W.a, null)),
        );
      }
    },
  },
]);
