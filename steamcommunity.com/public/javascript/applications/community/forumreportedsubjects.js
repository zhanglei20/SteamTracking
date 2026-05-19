/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [892],
  {
    30253: (e) => {
      e.exports = {
        FloatingSubjectListCtn: "_2Z4y2kIderxN4_alSJYYh8",
        SplitHeader: "_2B88BA7YbropfCtjJdn1yD",
        PopoutButton: "_3cujMozXvwTlTehPQtPJ7F",
        ReportedSubjectRow: "_32u0ZJiVZP0gaSLs5sdhUy",
        FlagIcon: "_2DMl8RTVaYtsJarLDt3hqF",
        ValveOnlyFlag: "-K7dp4xj1MBriG1APh1f4",
        SupervisorFlag: "_32OXEg2kS_2-BTKOec40kP",
      };
    },
    10378: (e, t, o) => {
      "use strict";
      o.r(t),
        o.d(t, {
          default: () => b,
          readAdditionalDataFromForumPost: () => k,
          useCommentThread: () => y,
        });
      var s = o(7850),
        n = o(90182),
        r = o(28395),
        l = o(56545),
        a = o(34410),
        d = o(37226),
        i = o(15993),
        c = o(34214),
        u = o(88942),
        _ = o(23809),
        m = o(22797),
        v = o(78327),
        j = o(30253),
        f = o(90626),
        g = o(12155),
        h = o(52038);
      function b(e) {
        var t, o;
        const l = "floatingforumreportedsubjectslist",
          d = (0, n.kZ)(a.lN, e.gidTopic),
          [i, c] = (0, f.useState)(() => void 0 !== localStorage[l]);
        if (
          ((0, f.useMemo)(() => {
            var e, t;
            null ===
              (t =
                null === (e = d.data) || void 0 === e ? void 0 : e.subjects) ||
              void 0 === t ||
              t.sort(p);
          }, [null === (t = d.data) || void 0 === t ? void 0 : t.subjects]),
          !d.isSuccess ||
            !(null === (o = d.data) || void 0 === o ? void 0 : o.subjects) ||
            0 === d.data.subjects.length)
        )
          return null;
        let u = 0;
        return (0, s.jsx)("div", {
          className: i ? j.FloatingSubjectListCtn : "",
          children: (0, s.jsx)("div", {
            className: "rightbox",
            children: (0, s.jsxs)("div", {
              className: "content",
              children: [
                (0, s.jsx)("div", {
                  className: "rightbox_list_header",
                  children: (0, s.jsxs)("span", {
                    className: j.SplitHeader,
                    children: [
                      r.T.Localize("#reportedsubjectlist_header"),
                      " ",
                      (0, s.jsx)("button", {
                        className: j.PopoutButton,
                        onClick: () => {
                          i
                            ? localStorage.removeItem(l)
                            : localStorage.setItem(l, "1"),
                            c(!i);
                        },
                        children: (0, s.jsx)(g.YNO, {}),
                      }),
                    ],
                  }),
                }),
                d.isError &&
                  (0, s.jsx)("div", {
                    className: "moderatorToolLink",
                    children: "Error",
                  }),
                d.isLoading && (0, s.jsx)(m.t, {}),
                d.isSuccess &&
                  (0, s.jsx)("div", {
                    style: { maxHeight: "20em", overflowY: "scroll" },
                    children: d.data.subjects.map((e) => {
                      var t, o;
                      return (
                        null ===
                          (o =
                            null === (t = e.additional_subject_data) ||
                            void 0 === t
                              ? void 0
                              : t.data) || void 0 === o
                          ? void 0
                          : o.length
                      )
                        ? (0, s.jsx)(S, { subject: e }, e.subject_id)
                        : (0, s.jsx)(
                            "div",
                            {
                              className: (0, h.A)(
                                "moderatorToolLink",
                                j.ReportedSubjectRow,
                              ),
                              children: "Bug - inform Valve",
                            },
                            "bad-" + u++,
                          );
                    }),
                  }),
              ],
            }),
          }),
        });
      }
      function p(e, t) {
        const o =
          e.unresolved_dispute_count + e.unresolved_report_count > 0 ? 1 : 0;
        return (
          (t.unresolved_dispute_count + t.unresolved_report_count > 0 ? 1 : 0) -
            o ||
          t.required_moderator_level - e.required_moderator_level ||
          (function (e, t) {
            if (e.length !== t.length) return e.length - t.length;
            for (let o = 0; o < e.length; o++) {
              const s = e.charCodeAt(o),
                n = t.charCodeAt(o);
              if (s !== n) return s - n;
            }
            return 0;
          })(e.subject_id, t.subject_id)
        );
      }
      function x(e) {
        for (;;) {
          const t = e.indexOf("[/quote]");
          if (-1 === t) break;
          e = e.slice(t + 8);
        }
        return e.slice(0, 35);
      }
      function S(e) {
        var t, o;
        const { subject: n } = e,
          r = k(e.subject),
          l = y(r.clanSteamId, d.Bv, r.forumId, n.subject_group_id);
        let a = null;
        if (("0" === n.subject_id && (a = "Topic"), null === a && l.isSuccess))
          for (const e of null !== (t = l.data.comments) && void 0 !== t
            ? t
            : [])
            if (e.gidcomment === n.subject_id) {
              a = x(e.text);
              break;
            }
        if (null === a && l.isSuccess)
          for (const e of null !== (o = l.data.deleted_comments) && void 0 !== o
            ? o
            : [])
            if (e.gidcomment === n.subject_id) {
              a = x(e.text);
              break;
            }
        null === a && (a = "[Comment]");
        const c =
            "0" === n.subject_id
              ? `#forum_op_${n.subject_group_id}`
              : `#c${n.subject_id}`,
          u = n.unresolved_dispute_count > 0 || n.unresolved_report_count > 0,
          _ = n.required_moderator_level === i.PV,
          m = n.required_moderator_level === i.lp;
        return (0, s.jsx)("div", {
          className: (0, h.A)("moderatorToolLink", j.ReportedSubjectRow),
          children: (0, s.jsxs)("a", {
            href: c,
            children: [
              u &&
                !_ &&
                !m &&
                (0, s.jsx)("img", {
                  className: j.FlagIcon,
                  src: `${v.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                }),
              !u &&
                (0, s.jsx)("span", { className: j.FlagIcon, children: " " }),
              u &&
                _ &&
                (0, s.jsx)("span", {
                  className: (0, h.A)(j.FlagIcon, j.ValveOnlyFlag),
                  children: "VO",
                }),
              u &&
                m &&
                (0, s.jsx)("span", {
                  className: (0, h.A)(j.FlagIcon, j.SupervisorFlag),
                  children: "▲",
                }),
              " ",
              a,
            ],
          }),
        });
      }
      function y(e, t, o, s) {
        const n = (0, _.KV)();
        return (0, u.I)({
          queryKey: ["comment_thread", e, t, o, s],
          queryFn: async () => {
            const r = l.w.Init(c.ZP);
            r.Body().set_steamid(e),
              r.Body().set_comment_thread_type(t),
              r.Body().set_gidfeature(o),
              r.Body().set_gidfeature2(s),
              r.Body().set_include_deleted(!0),
              r.Body().set_oldest_first(!0);
            return (await c.BE.GetCommentThread(n, r)).Body().toObject();
          },
        });
      }
      function k(e) {
        var t, o;
        let s = "",
          n = "";
        if (!e.additional_subject_data) return null;
        for (const r of null !==
          (o =
            null === (t = e.additional_subject_data) || void 0 === t
              ? void 0
              : t.data) && void 0 !== o
          ? o
          : [])
          "clanSteamId" === r.key
            ? (s = r.value)
            : "forumId" === r.key
              ? (n = r.value)
              : console.error(
                  `Unknown additional data key ${r.key} in forum post.`,
                );
        if ("" == s)
          return console.error("Missing clanSteamId in additional data."), null;
        if ("" == n)
          return console.error("Missing forumId in additional data."), null;
        return { clanSteamId: s, forumId: n };
      }
    },
    37226: (e, t, o) => {
      "use strict";
      o.d(t, { Bv: () => n, Dq: () => s, Yd: () => r });
      const s = 5,
        n = 7,
        r = 10;
    },
  },
]);
