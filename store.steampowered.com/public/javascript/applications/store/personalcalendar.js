/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7701],
  {
    88411: (e) => {
      e.exports = { TextInput: "_3UJsjqCfOxuT5SoqLekeha" };
    },
    91239: (e) => {
      e.exports = { Reset: "_3A_c3YHYd4YIjA8Y-olnPl" };
    },
    12241: (e) => {
      e.exports = {
        smallentrywidth: "600px",
        optionswrapwidth: "777px",
        PersonalCalendarApp: "_2HSg8AtRJl7UMJATPIsBR8",
        Refreshing: "_23e1D2r2sYeZs924yfKJo",
        PersonalCalendarSection: "_1ogG0o0tuYDOljO3JVMG4j",
        SteamLabsBanner: "_2Gzea-RDxyTWYQ_1m4AvB0",
        PersonalCalendarContainer: "_1v3eOf_69jOyKwYgOD2J2w",
        PersonalCalendarHeader: "_3CwW2Qs3urt8QcUjerZErw",
        PersonalCalendarTitle: "_1jhESJwyB5EudCwWSj1Cd9",
        PersonalCalendarDescription: "_1o94X46OlzAxrg7CHGu4Xx",
        IncludeSaturday: "_2aUgvVQfnrPXJadG5GrdcD",
        Calendar: "p6KFiyUG9MYjbErC0_SGJ",
        LinearCalendar: "_1L5MsHayIMOr5ug0cNxdxX",
        SectionHeader: "_1pxjbUKB_ugZ6rMdnTXmks",
        GameList: "_1YDn2Y6zO2xAbcwcIvI79b",
        Options: "_2LcfPsUSmeavC5MD7P-3_3",
        ResultCountSelector: "_2kL46N7kSTQrKIGU59rigN",
        Disabled: "_3rT8s7lyF7ez2ptouqnozy",
        Title: "_9umPLKYAgKsJMqw7ujTrY",
        HideOwnedSelector: "xT3lxTdADiEWewVz8DEPg",
        TagSelector: "RMzOW5KaqQvzer-NgkySs",
        AppEntry: "_3V92WeqSSAvVfpoO35PvX3",
        ShowAllButton: "_3u_Aic2wvh3p-Iz6hf36rP",
        WeekLinear: "_3eYzWPfWrCyM7r3vp9jsYG",
        LinearHeader: "_3pwknKJXwBmgVszW8WeZYQ",
        LinearDayList: "_2AGzi6yGV_B75WoMGktOG4",
        DayLinear: "_2kvCThnw9WB9GKfJ-WEA49",
        Empty: "_2Ktvtjekp2t1yiR17tO37o",
        DayTitle: "_5Cxkp65lk0ZLEkohB0UYj",
        LinearDayAppList: "_3z4JI2StYiKelmK8LLL_f5",
        LinearCalendarAppEntry: "_1vkzAJHySeGgIC6aWfk0iS",
        Week: "_1czh2W36HftecDpf7txuSp",
        Summary: "_3HXw8Pw87qqgqr1Ag5Bwde",
        DayOfWeekHeader: "RLNS069fcm-HyBmDQpQzx",
        Day: "_14ZKl5pFBqLi_U0LVFjkz4",
        CalendarAppEntry: "_13JzJBgCihXnVCM-l2MMWR",
        Blank: "_3UiDT-YpyntdDox1_Ccld6",
        Today: "rChGJxkm3sNTTmDYe7KMW",
        DateHeader: "_1i3Li2VsTuM5vu7R9eWJ2F",
        ShowMoreButton: "ez9Ld7tp9t28fRwR6VBKh",
        ShowMoreTextButton: "_3P6P3gZ5tYxntcm-ESmTbn",
        PersonalCalendarLoginPrompt: "ON8dwj0iIb2zJimIKh1q3",
        LoginButton: "_3ltxE2-EO4o2zA-ZuTNR9B",
      };
    },
    70310: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => i, G: () => c });
      var n = t(41735),
        s = t.n(n),
        r = t(78327),
        l = t(80902),
        o = t(7860);
      class i {
        static s_PersonalCalendarStore;
        static Get() {
          return (
            i.s_PersonalCalendarStore ||
              ((i.s_PersonalCalendarStore = new i()),
              i.s_PersonalCalendarStore.Init(),
              (window.g_SubscriptionStore = i.s_PersonalCalendarStore)),
            i.s_PersonalCalendarStore
          );
        }
        async GetCalendarRecommendations(e, a, t, n, s) {
          return o.L.fetchQuery(m(e, a, t, n, s));
        }
        Init() {}
      }
      function c(e, a, t, n, s) {
        return (0, l.I)(m(e, a, t, n, s));
      }
      function m(e, a, t, n, l) {
        return {
          queryKey: ["personalcalendar", e, a, t, n, l],
          queryFn: async () => {
            const o = {
                tag: e,
                daysbackward: t,
                daysforward: n,
                weekaligned: l ? 1 : 0,
                maxresults: a,
                sessionid: r.TS.SESSIONID,
              },
              i = await s().get(
                `${r.TS.STORE_BASE_URL}personalcalendar/getrecommendations`,
                { params: o, timeout: 2e4 },
              );
            return {
              appReleasesByDay: i.data.appReleasesByDay,
              dayWeekTimestamps: i.data.dayWeekTimestamps,
              maxResultCount: i.data.maxResultCount,
              userTags: i.data.userTags,
              usesWishlists: i.data.usesWishlists,
              resultMessage: i.data.resultMessage,
            };
          },
          placeholderData: (e) => e,
        };
      }
    },
    8785: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => $ });
      var n = t(55156),
        s = t(57757),
        r = t(90626),
        l = t(64238),
        o = t.n(l),
        i = t(91239);
      var c = t(61023),
        m = t(90534),
        d = t(88411);
      function u(e) {
        const { extracted: a, remaining: t } = (0, m.Ay)(e),
          {
            variant: n,
            size: s,
            beforeContent: l,
            afterContent: o,
            inputRef: i,
            ref: d,
            ...u
          } = t;
        return r.createElement(
          c.j,
          {
            ref: d,
            ...a,
            variant: n,
            size: s,
            beforeContent: l,
            afterContent: o,
            cursor: "text",
          },
          r.createElement(p, { ref: i, ...u }),
        );
      }
      function p(e) {
        const {
          value: a,
          onTextChange: t,
          onChange: n,
          className: s,
          ref: l,
          ...c
        } = e;
        return r.createElement("input", {
          ref: l,
          type: "text",
          ...c,
          className: o()(i.Reset, d.TextInput, s),
          value: a || "",
          onChange: (e) => {
            t(e.target.value), n && n(e);
          },
        });
      }
      var g = t(81393),
        y = t(95013),
        h = t(77914);
      const S = Object.assign(
          function (e) {
            const {
                suggestions: a,
                onTextChange: t,
                onSuggestionSelected: n,
                clearable: s,
                ...l
              } = e,
              o = (function (e) {
                const {
                    onTextChange: a,
                    suggestions: t,
                    onSuggestionSelected: n,
                  } = e,
                  [s, l] = (0, r.useState)(null),
                  [o, i] = (0, r.useState)(!1),
                  c = (0, r.useCallback)(
                    (e) => {
                      e ? (i(!0), l(null)) : i(!1), a(e);
                    },
                    [a],
                  );
                return {
                  activeIndex: s,
                  setActiveIndex: l,
                  open: o,
                  onOpenChange: i,
                  onTextChange: c,
                  suggestions: t,
                  onSuggestionSelected: n,
                };
              })({ onTextChange: t, suggestions: a, onSuggestionSelected: n }),
              i =
                l.value && s
                  ? r.createElement(h.g, {
                      onClick: () => o.onTextChange(""),
                      cursor: "pointer",
                      hitSlop: !0,
                    })
                  : void 0;
            return r.createElement(
              S.Root,
              { state: o },
              r.createElement(S.TextInput, { ...l, afterContent: i }),
              r.createElement(
                S.Suggestions,
                null,
                a.map((e, a) =>
                  r.createElement(S.Suggestion, { key: e + a, value: e }, e),
                ),
              ),
            );
          },
          {
            Root: function (e) {
              const { children: a, placement: t = "bottom-end", ...n } = e,
                s = (0, y.T)({
                  ...n.state,
                  width: "dropdown",
                  placement: t,
                  gutter: "4",
                  interactions: { virtualItemFocus: !0, focus: !0 },
                  role: "combobox",
                  scroll: !0,
                });
              return r.createElement(
                w.Provider,
                { value: n },
                r.createElement(y.k.Root, { state: s }, a),
              );
            },
            TextInput: function (e) {
              const {
                  state: {
                    onTextChange: a,
                    activeIndex: t,
                    onOpenChange: n,
                    setActiveIndex: s,
                    suggestions: l,
                    onSuggestionSelected: o,
                  },
                } = C("<Autocomplete.TextInput>"),
                i = (0, r.useRef)(null);
              return r.createElement(
                y.k.Anchor,
                null,
                r.createElement(u, {
                  ...e,
                  inputRef: i,
                  onTextChange: a,
                  "aria-autocomplete": "list",
                  onKeyDown: (e) => {
                    "Enter" === e.key &&
                      null !== t &&
                      l[t] &&
                      (o && o(l[t], e),
                      e.defaultPrevented || a(l[t]),
                      s(null),
                      n(!1),
                      e.preventDefault(),
                      e.stopPropagation());
                  },
                  onKeyDownCapture: (e) => {
                    ("Home" !== e.key && "End" !== e.key) ||
                      e.stopPropagation();
                  },
                  role: "combobox",
                }),
              );
            },
            Suggestions: function (e) {
              return r.createElement(y.k.Positioner, { ...e, returnFocus: !1 });
            },
            Suggestion: function (e) {
              const { value: a, children: t, ...n } = e,
                {
                  state: {
                    onTextChange: s,
                    onOpenChange: l,
                    setActiveIndex: o,
                    onSuggestionSelected: i,
                  },
                } = C("<Autocomplete.TextInput>");
              return r.createElement(
                y.k.Item,
                {
                  onSelect: (e) => {
                    i && i(a, e), e.defaultPrevented || s(a), o(null), l(!1);
                  },
                  ...n,
                },
                t,
              );
            },
          },
        ),
        w = (0, r.createContext)(null);
      function C(e) {
        const a = (0, r.useContext)(w);
        return (0, g.wT)(a, `${e} must be used within an <Autocomplete>!`), a;
      }
      var E = t(86632),
        f = t(39020),
        T = t(82477),
        P = t(46416),
        _ = t(32630),
        x = t(52038),
        D = t(61859),
        k = t(78327),
        L = t(12241),
        b = t(76217),
        I = t(30894),
        A = t(65946),
        N = t(70310);
      const W = "PC_HideOwned",
        G = "PC_HideEarlyAccess",
        H = "PC_GameCount",
        v = "PC_WishlistedDisplay";
      var Z;
      !(function (e) {
        (e[(e.Show = 0)] = "Show"),
          (e[(e.Only = 1)] = "Only"),
          (e[(e.Hide = 2)] = "Hide");
      })(Z || (Z = {}));
      const B = {
        selectedTag: 0,
        bHideOwned: "1" == localStorage.getItem(W),
        bHideEarlyAccess: "1" == localStorage.getItem(G),
        cResultsToShow: parseInt(localStorage.getItem(H) ?? "100"),
        wishlistDisplay: parseInt(localStorage.getItem(v) ?? "0"),
      };
      function R(e) {
        const { count: a } = e;
        return r.createElement(
          b.Z,
          { className: L.PersonalCalendarHeader },
          r.createElement(
            b.Z,
            { className: L.PersonalCalendarTitle },
            (0, D.we)("#PersonalCalendar_Title"),
          ),
          "number" == typeof a &&
            r.createElement(
              b.Z,
              { className: L.PersonalCalendarDescription },
              (0, D.we)("#PersonalCalendar_Description", a),
            ),
        );
      }
      function M() {
        return r.createElement(
          b.Z,
          { className: L.PersonalCalendarLoginPrompt },
          (0, D.we)("#PersonalCalendar_LoginPrompt"),
          r.createElement(
            "button",
            { onClick: T.vg, className: L.LoginButton },
            (0, D.we)("#Login_SignIn"),
          ),
        );
      }
      function O(e) {
        const {
          state: a,
          onChange: t,
          tagMap: n,
          userTags: l,
          maxResultsToShow: o,
        } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            b.Z,
            { className: L.SteamLabsBanner },
            (0, D.oW)(
              "#PersonalCalendar_SteamLabs",
              r.createElement("a", {
                href: "https://steamcommunity.com/groups/SteamLabs/discussions/19/",
              }),
            ),
          ),
          r.createElement(
            b.Z,
            { className: L.Options },
            r.createElement(z, {
              userTags: l,
              tagMap: n,
              selectedTag: a.selectedTag,
              onChange: (e) => t({ ...a, selectedTag: e }),
            }),
            r.createElement(Y, {
              count: a.cResultsToShow,
              onChange: (e) => {
                localStorage.setItem(H, e.toString()),
                  t({ ...a, cResultsToShow: e });
              },
              max: o,
            }),
            r.createElement(j, {
              wishlistDisplay: a.wishlistDisplay,
              onChange: (e) => {
                localStorage.setItem(v, e.toString()),
                  t({ ...a, wishlistDisplay: e });
              },
              disabled: !e.usesWishlists,
            }),
            r.createElement(
              b.Z,
              { className: L.HideOwnedSelector },
              r.createElement(
                s.S,
                {
                  checked: a.bHideOwned,
                  onChange: (e) => {
                    localStorage.setItem(W, e ? "1" : "0"),
                      t({ ...a, bHideOwned: e });
                  },
                },
                (0, D.we)("#PersonalCalendar_HideOwned"),
              ),
              r.createElement(
                s.S,
                {
                  checked: a.bHideEarlyAccess,
                  onChange: (e) => {
                    localStorage.setItem(G, e ? "1" : "0"),
                      t({ ...a, bHideEarlyAccess: e });
                  },
                  "data-tooltip-text": (0, D.we)(
                    "#PersonalCalendar_HideEATooltip",
                  ),
                },
                (0, D.we)("#PersonalCalendar_HideEarlyAccess"),
              ),
            ),
          ),
        );
      }
      function z(e) {
        const { userTags: a, tagMap: t, selectedTag: n, onChange: s } = e,
          [l, o] = r.useState(""),
          { tagStrings: i, tagStringMap: c } = r.useMemo(() => {
            const e = [],
              n = new Map();
            for (const [a, s] of Object.entries(t ?? {})) {
              const t = Number(a);
              e.push({ tagID: t, tagName: s }), n.set(s.toLocaleLowerCase(), t);
            }
            e.sort((e, t) => a?.indexOf(t.tagID) - a?.indexOf(e.tagID));
            return {
              tagStrings: e
                .filter((e) =>
                  e.tagName
                    .toLocaleLowerCase()
                    .startsWith(l.toLocaleLowerCase()),
                )
                .map((e) => e.tagName)
                .slice(0, 20),
              tagStringMap: n,
            };
          }, [t, a, l]);
        return r.createElement(
          b.Z,
          { className: L.TagSelector },
          r.createElement(
            b.Z,
            { className: L.Title },
            (0, D.we)("#PersonalCalendar_TagSelector"),
          ),
          r.createElement(S, {
            suggestions: i,
            onSuggestionSelected: (e) =>
              ((e) => {
                s(c?.get(e.toLocaleLowerCase()) ?? 0);
              })(e),
            value: l,
            onTextChange: (e) =>
              ((e) => {
                "" === e.trim() && n
                  ? s(0)
                  : c.has(e.toLocaleLowerCase()) &&
                    s(c.get(e.toLocaleLowerCase())),
                  o(e);
              })(e),
            clearable: !0,
            placeholder: (0, D.we)("#PersonalCalendar_TagSelector_Placeholder"),
          }),
        );
      }
      function Y(e) {
        const { count: a, onChange: t, max: n } = e,
          s = [10, 25, 50, 100, 250, 500];
        let l = [];
        n &&
          ((l = s.filter((e) => e < n)),
          l.length != s.length && l.push(n),
          l.includes(a) || (l.includes(100) ? t(100) : t(l[l.length - 1])));
        const o = l.map((e) => e.toString());
        return r.createElement(
          b.Z,
          { className: L.ResultCountSelector },
          r.createElement(
            b.Z,
            { className: L.Title },
            (0, D.we)("#PersonalCalendar_ResultCountSelector"),
          ),
          r.createElement(E.I, {
            options: o,
            value: a.toString(),
            onValueChange: (e) => t(parseInt(e)),
            radius: "sm",
          }),
        );
      }
      function j(e) {
        const { wishlistDisplay: a, onChange: t } = e,
          n = (e) => {
            switch (e) {
              case Z.Show:
                return (0, D.we)("#PersonalCalendar_WishlistShow");
              case Z.Hide:
                return (0, D.we)("#PersonalCalendar_WishlistHide");
              case Z.Only:
                return (0, D.we)("#PersonalCalendar_WishlistOnly");
            }
          },
          s = [n(Z.Show), n(Z.Hide), n(Z.Only)];
        return r.createElement(
          b.Z,
          {
            className: (0, x.A)(
              L.ResultCountSelector,
              e.disabled && L.Disabled,
            ),
            "data-tooltip-text": e.disabled
              ? (0, D.we)("#PersonalCalendar_IgnoringWishlists")
              : void 0,
          },
          r.createElement(
            b.Z,
            { className: L.Title },
            (0, D.we)("#PersonalCalendar_Wishlisted"),
          ),
          r.createElement(E.I, {
            options: s,
            value: n(a),
            onValueChange: (a) =>
              e.disabled
                ? () => {}
                : t(
                    ((e) => {
                      switch (e) {
                        case (0, D.we)("#PersonalCalendar_WishlistShow"):
                          return Z.Show;
                        case (0, D.we)("#PersonalCalendar_WishlistHide"):
                          return Z.Hide;
                        case (0, D.we)("#PersonalCalendar_WishlistOnly"):
                          return Z.Only;
                      }
                      return Z.Show;
                    })(a),
                  ),
            radius: "sm",
          }),
        );
      }
      function F(e) {
        const { games: a } = e,
          t =
            (0, A.q3)(() =>
              a?.filter((e) => !I.Fm.Get().BIsGameIgnored(e.appid)),
            ) ?? [];
        return r.createElement(
          b.Z,
          { className: L.PersonalCalendarSection },
          r.createElement(
            b.Z,
            { className: L.SectionHeader },
            (0, D.we)("#PersonalCalendar_LastMonthGames"),
          ),
          r.createElement(
            b.Z,
            { className: (0, x.A)(L.GameList, L.Month) },
            t
              .slice(0, 16)
              .map((e) =>
                r.createElement(
                  b.Z,
                  { key: e.appid, className: L.AppEntry },
                  r.createElement(P.W, {
                    capsule: { id: e.appid },
                    imageType: "header",
                    bShowEarlyAccessBanner: !0,
                    bShowIgnoreButton: !0,
                    bShowDescriptionInHover: !0,
                    bPreferAssetWithoutOverride: !1,
                  }),
                ),
              ),
          ),
        );
      }
      function K(e) {
        const { games: a } = e,
          t =
            (0, A.q3)(() =>
              a?.filter((e) => !I.Fm.Get().BIsGameIgnored(e.appid)),
            ) ?? [];
        return r.createElement(
          b.Z,
          { className: L.PersonalCalendarSection },
          r.createElement(
            b.Z,
            { className: L.SectionHeader },
            (0, D.we)("#PersonalCalendar_LastWeekGames"),
          ),
          r.createElement(
            b.Z,
            { className: (0, x.A)(L.GameList, L.Week) },
            t
              .slice(0, 12)
              .map((e) =>
                r.createElement(
                  b.Z,
                  { key: e.appid, className: L.AppEntry },
                  r.createElement(P.W, {
                    capsule: { id: e.appid },
                    imageType: "header",
                    bShowEarlyAccessBanner: !0,
                    bShowIgnoreButton: !0,
                    bShowDescriptionInHover: !0,
                    bPreferAssetWithoutOverride: !1,
                  }),
                ),
              ),
          ),
        );
      }
      function J(e) {
        const {
            dayWeekTimestamps: a,
            appReleasesByDay: t,
            todayTimestamp: n,
            includeSaturday: s,
          } = e,
          [l, o] = r.useState(9999);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            b.Z,
            {
              className: (0, x.A)(
                L.PersonalCalendarSection,
                L.Calendar,
                s && L.IncludeSaturday,
              ),
            },
            r.createElement(
              b.Z,
              { className: L.SectionHeader },
              (0, D.we)("#PersonalCalendar_Upcoming"),
            ),
            r.createElement(
              b.Z,
              { className: (0, x.A)(L.Week, s && L.IncludeSaturday) },
              a?.[0].map((e, a) =>
                0 == a
                  ? null
                  : s || 6 != a
                    ? r.createElement(q, {
                        key: `WeekHeader_${e}`,
                        timestamp: e,
                      })
                    : null,
              ),
            ),
            a.map((e, a) =>
              r.createElement(U, {
                key: `Week_${a}`,
                dayTimestamps: e,
                appReleasesByDay: t,
                todayTimestamp: n,
                maxGames: l,
                includeSaturday: s,
              }),
            ),
            9999 != l &&
              r.createElement(
                b.Z,
                { className: L.ShowAllButton, onClick: () => o(9999) },
                (0, D.we)("#PersonalCalendar_ShowAll"),
              ),
          ),
          r.createElement(
            b.Z,
            {
              className: (0, x.A)(
                L.PersonalCalendarSection,
                L.LinearCalendar,
                s && L.IncludeSaturday,
              ),
            },
            r.createElement(
              b.Z,
              { className: L.SectionHeader },
              (0, D.we)("#PersonalCalendar_Upcoming"),
            ),
            a.map((e, a) =>
              r.createElement(V, {
                key: `WeekLinear_${a}`,
                dayTimestamps: e,
                appReleasesByDay: t,
                todayTimestamp: n,
                maxGames: l,
              }),
            ),
          ),
        );
      }
      function q(e) {
        const a = new Date(1e3 * e.timestamp).toLocaleDateString(
          D.pf.GetPreferredLocales(),
          { weekday: "long" },
        );
        return r.createElement(b.Z, { className: L.DayOfWeekHeader }, a);
      }
      function U(e) {
        const [a, t] = r.useState(e.maxGames);
        if (e.todayTimestamp > Math.max(...e.dayTimestamps)) return null;
        const n = e.dayTimestamps
          ? Math.max(
              ...e.dayTimestamps.map((a) =>
                a < e.dayTimestamps[0]
                  ? 0
                  : e.appReleasesByDay[a]
                    ? e.appReleasesByDay[a].length
                    : 0,
              ),
            )
          : 0;
        return r.createElement(
          b.Z,
          {
            className: (0, x.A)(L.Week, e.includeSaturday && L.IncludeSaturday),
          },
          e.dayTimestamps.map((s, l) =>
            0 == l
              ? null
              : e.includeSaturday || 6 != l
                ? r.createElement(Q, {
                    key: s,
                    timestamp: s,
                    appsToday: e.appReleasesByDay[s],
                    firstTimestamp: e.todayTimestamp,
                    maxGames: Math.max(e.maxGames, a),
                    setMaxGames: t,
                    maxNumGamesInWeek: n,
                  })
                : null,
          ),
        );
      }
      function V(e) {
        if (e.todayTimestamp > Math.max(...e.dayTimestamps)) return null;
        const a = { month: "long", day: "numeric" },
          t = new Date(1e3 * e.dayTimestamps[0]).toLocaleDateString(
            D.pf.GetPreferredLocales(),
            a,
          ),
          n = new Date(1e3 * (e.dayTimestamps[0] + 518400)).toLocaleDateString(
            D.pf.GetPreferredLocales(),
            a,
          );
        return r.createElement(
          b.Z,
          { className: L.WeekLinear },
          r.createElement(b.Z, { className: L.LinearHeader }, t, " - ", n),
          r.createElement(
            b.Z,
            { className: L.LinearDayList },
            e.dayTimestamps?.map((a) =>
              r.createElement(X, {
                key: a,
                timestamp: a,
                appsToday: e.appReleasesByDay[a],
                firstTimestamp: e.todayTimestamp,
                maxGames: 9999,
                setMaxGames: () => null,
                maxNumGamesInWeek: 9999,
              }),
            ),
          ),
        );
      }
      function Q(e) {
        const a = new Date(1e3 * e.timestamp).toLocaleDateString(
            D.pf.GetPreferredLocales(),
            { month: "long", day: "numeric" },
          ),
          t = new Date();
        t.setHours(0, 0, 0, 0);
        const n = Math.floor(t.getTime() / 1e3) == e.timestamp,
          s = e.appsToday?.filter((e) => e.wishlisted).length,
          l = Math.max(e.maxGames, s),
          o = l == e.appsToday?.length,
          i =
            (0, A.q3)(() =>
              e.appsToday?.filter((e) => !I.Fm.Get().BIsGameIgnored(e.appid)),
            ) ?? [],
          c =
            1 == e.maxNumGamesInWeek ||
            e.appsToday?.length <= Math.floor(e.maxNumGamesInWeek / 2)
              ? "library"
              : "main";
        return r.createElement(
          b.Z,
          { className: (0, x.A)(L.Day, n && L.Today) },
          r.createElement(b.Z, { className: L.DateHeader }, a),
          r.createElement(
            b.Z,
            { className: L.GameList },
            i?.map((e, a) =>
              r.createElement(
                b.Z,
                { key: e.appid, className: L.CalendarAppEntry },
                r.createElement(P.W, {
                  capsule: { id: e.appid },
                  imageType: c,
                  nWidthMultiplier: 2,
                  bShowName: !1,
                  bHidePlatforms: !0,
                  bHidePrice: !0,
                  bShowEarlyAccessBanner: !0,
                  bShowIgnoreButton: !0,
                  bShowDescriptionInHover: !0,
                  bPreferAssetWithoutOverride: !1,
                }),
              ),
            ),
            !o &&
              l < e.appsToday?.length &&
              r.createElement(
                b.Z,
                {
                  className: L.ShowMoreButton,
                  onClick: () => e.setMaxGames(e.appsToday.length),
                },
                (0, D.we)("#PersonalCalendar_ShowMore", e.appsToday.length),
              ),
          ),
        );
      }
      function X(e) {
        const a = new Date(1e3 * e.timestamp).toLocaleDateString(
            D.pf.GetPreferredLocales(),
            { weekday: "long" },
          ),
          t = new Date();
        t.setHours(0, 0, 0, 0);
        const n = Math.floor(t.getTime() / 1e3),
          s = n == e.timestamp,
          l =
            (0, A.q3)(() =>
              e.appsToday?.filter((e) => !I.Fm.Get().BIsGameIgnored(e.appid)),
            ) ?? [];
        return e.timestamp < n
          ? null
          : r.createElement(
              b.Z,
              {
                className: (0, x.A)(
                  L.DayLinear,
                  s && L.Today,
                  !e.appsToday?.length && L.Empty,
                ),
              },
              r.createElement(b.Z, { className: L.DayTitle }, a),
              e.appsToday?.length &&
                r.createElement(
                  b.Z,
                  { className: L.LinearDayAppList },
                  l?.map((e) =>
                    r.createElement(
                      b.Z,
                      { key: e.appid, className: L.LinearCalendarAppEntry },
                      r.createElement(P.W, {
                        capsule: { id: e.appid },
                        imageType: "library",
                        nWidthMultiplier: 2,
                        bShowName: !1,
                        bHidePlatforms: !0,
                        bHidePrice: !0,
                        bHideStatusBanners: !0,
                        bShowIgnoreButton: !0,
                        bShowDescriptionInHover: !0,
                        bPreferAssetWithoutOverride: !1,
                      }),
                    ),
                  ),
                ),
            );
      }
      const $ = () => {
        const { data: e } = (0, f.Fv)(k.TS.LANGUAGE),
          [a, t] = r.useState(B),
          s = (0, N.G)(a.selectedTag, 500, 30, 60, !0),
          {
            maxResultCount: l,
            dayWeekTimestamps: o,
            appReleasesByDay: i,
            userTags: c,
            usesWishlists: m,
          } = s.data || {},
          d = new Date();
        d.setHours(0, 0, 0, 0);
        const u = Math.floor(d.getTime() / 1e3),
          p = new Date();
        p.setDate(p.getDate() - 7);
        const g = Math.floor(p.getTime() / 1e3),
          {
            appReleasesByDayFiltered: y,
            lastMonthGames: h,
            lastWeekGames: S,
            includeSaturday: w,
          } = r.useMemo(() => {
            if (!i)
              return {
                appReleasesByDayFiltered: [],
                lastMonthGames: [],
                lastWeekGames: [],
              };
            const e = o?.flat() ?? [];
            const t = (function (e, a, t, n, s) {
                const r = Object.entries(e).map(
                  ([e, r]) => (
                    (r = r.filter((e) => e.rank < a)),
                    t && (r = r.filter((e) => !e.owned)),
                    n &&
                      (r = r.filter(
                        (e) => !e.earlyaccess || e.fromearlyaccess,
                      )),
                    s != Z.Show &&
                      (r = r.filter((e) => {
                        switch (s) {
                          case Z.Hide:
                            return !e.wishlisted;
                          case Z.Only:
                            return e.wishlisted;
                        }
                      })),
                    [e, r]
                  ),
                );
                return Object.fromEntries(r);
              })(
                i,
                a.cResultsToShow,
                a.bHideOwned,
                a.bHideEarlyAccess,
                a.wishlistDisplay,
              ),
              n = e.filter((e, a) => a % 7 == 6);
            let s = 0;
            for (const e of n) e < u || (s += t[e]?.length ?? 0);
            const r = s >= 3;
            for (let a = 0; a < e.length; a += 1) {
              if (a % 7 == 0 && t[e[a]]?.length > 0) {
                const n = e[a + 1];
                a < e.length - 1 &&
                  (t[n] || (t[n] = []), t[n].push(...t[e[a]]), (t[e[a]] = []));
              }
              if (a % 7 == 6 && !r && t[e[a]]?.length > 0) {
                const n = e[a + 2];
                a < e.length - 2 &&
                  (t[n] || (t[n] = []), t[n].push(...t[e[a]]), (t[e[a]] = []));
              }
            }
            const l = [],
              c = [];
            for (const a of e)
              a <= u &&
                (a < g ? l.push(...(t?.[a] ?? [])) : c.push(...(t?.[a] ?? [])));
            return (
              l.sort((e, a) => e.rank - a.rank),
              c.sort((e, a) => e.rank - a.rank),
              {
                appReleasesByDayFiltered: t,
                lastMonthGames: l,
                lastWeekGames: c,
                includeSaturday: r,
              }
            );
          }, [
            i,
            a.cResultsToShow,
            a.bHideOwned,
            a.wishlistDisplay,
            a.bHideEarlyAccess,
            o,
            u,
            g,
          ]);
        return s.data && !k.iA.logged_in
          ? r.createElement(
              b.Z,
              { className: L.PersonalCalendarLoginPrompt },
              r.createElement(
                b.Z,
                { className: L.Text },
                (0, D.we)("#PersonalCalendar_LoginPrompt"),
              ),
              r.createElement(
                b.Z,
                { className: (0, x.A)(L.LoginButton), onClick: T.vg },
                r.createElement("span", null, (0, D.we)("#LoginButton")),
              ),
            )
          : r.createElement(
              _.Ay,
              {
                controller: "personalcalendar",
                method: "default",
                feature: "capsule",
              },
              r.createElement(
                n.Y,
                null,
                r.createElement(
                  b.Z,
                  {
                    className: (0, x.A)(
                      L.PersonalCalendarApp,
                      s.isFetching && L.Refreshing,
                    ),
                  },
                  r.createElement(
                    b.Z,
                    { className: L.PersonalCalendarContainer },
                    r.createElement(R, {
                      count: s.data ? a.cResultsToShow : void 0,
                    }),
                    !k.iA.steamid && r.createElement(M, null),
                    s.data &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(O, {
                          state: a,
                          onChange: t,
                          tagMap: e,
                          userTags: c,
                          maxResultsToShow: l,
                          usesWishlists: m,
                        }),
                        h.length > 0 &&
                          r.createElement(F, { games: h, includeSaturday: w }),
                        S.length > 0 &&
                          r.createElement(K, { games: S, includeSaturday: w }),
                        r.createElement(J, {
                          dayWeekTimestamps: o,
                          appReleasesByDay: y,
                          todayTimestamp: u,
                          includeSaturday: w,
                        }),
                      ),
                  ),
                ),
              ),
            );
      };
    },
  },
]);
