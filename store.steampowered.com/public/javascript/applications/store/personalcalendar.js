/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7701],
  {
    24089: (e) => {
      e.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
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
    70310: (e, a, s) => {
      "use strict";
      s.d(a, { A: () => i, G: () => c });
      var t = s(41735),
        n = s.n(t),
        r = s(78327),
        l = s(80902),
        o = s(7860);
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
        async GetCalendarRecommendations(e, a, s, t, n) {
          return o.L.fetchQuery(d(e, a, s, t, n));
        }
        Init() {}
      }
      function c(e, a, s, t, n) {
        return (0, l.I)(d(e, a, s, t, n));
      }
      function d(e, a, s, t, l) {
        return {
          queryKey: ["personalcalendar", e, a, s, t, l],
          queryFn: async () => {
            const o = {
                tag: e,
                daysbackward: s,
                daysforward: t,
                weekaligned: l ? 1 : 0,
                maxresults: a,
                sessionid: r.TS.SESSIONID,
              },
              i = await n().get(
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
    22637: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => $ });
      var t = s(7850),
        n = s(96146),
        r = s(57757),
        l = s(90626),
        o = s(64238),
        i = s.n(o),
        c = s(91239);
      var d = s(24089);
      var u = s(90534),
        m = s(61023);
      function p(e) {
        const { extracted: a, remaining: s } = (0, u.A4)(e),
          {
            value: n,
            onTextChange: r,
            onChange: l,
            radius: o,
            variant: p,
            size: h,
            beforeContent: g,
            afterContent: y,
            inputRef: x,
            ref: S,
            ...w
          } = s,
          C = {
            ...a,
            variant: p,
            size: h,
            radius: o,
            beforeContent: g,
            afterContent: y,
            ref: S,
          };
        return (0, t.jsx)(m.j, {
          cursor: "text",
          ...C,
          children: (0, t.jsx)("input", {
            ref: x,
            type: "text",
            ...w,
            className: i()(c.Reset, d.TextEntry),
            value: n || "",
            onChange: (e) => {
              r(e.target.value), l && l(e);
            },
          }),
        });
      }
      var h = s(81393),
        g = s(95013),
        y = s(77914);
      const x = Object.assign(
          function (e) {
            const {
                suggestions: a,
                onTextChange: s,
                onSuggestionSelected: n,
                clearable: r,
                ...o
              } = e,
              i = (function (e) {
                const {
                    onTextChange: a,
                    suggestions: s,
                    onSuggestionSelected: t,
                  } = e,
                  [n, r] = (0, l.useState)(null),
                  [o, i] = (0, l.useState)(!1),
                  c = (0, l.useCallback)(
                    (e) => {
                      e ? (i(!0), r(null)) : i(!1), a(e);
                    },
                    [a],
                  );
                return {
                  activeIndex: n,
                  setActiveIndex: r,
                  open: o,
                  onOpenChange: i,
                  onTextChange: c,
                  suggestions: s,
                  onSuggestionSelected: t,
                };
              })({ onTextChange: s, suggestions: a, onSuggestionSelected: n }),
              c =
                o.value && r
                  ? (0, t.jsx)(y.g, {
                      onClick: () => i.onTextChange(""),
                      cursor: "pointer",
                      hitSlop: !0,
                    })
                  : void 0;
            return (0, t.jsxs)(x.Root, {
              state: i,
              children: [
                (0, t.jsx)(x.TextInput, { ...o, afterContent: c }),
                (0, t.jsx)(x.Suggestions, {
                  children: a.map((e, a) =>
                    (0, t.jsx)(x.Suggestion, { value: e, children: e }, e + a),
                  ),
                }),
              ],
            });
          },
          {
            Root: function (e) {
              const {
                  children: a,
                  placement: s = "bottom-end",
                  popoverWidth: n = "dropdown",
                  ...r
                } = e,
                l = (0, g.T)({
                  ...r.state,
                  width: n,
                  placement: s,
                  gutter: "4",
                  interactions: { virtualItemFocus: !0, focus: !0 },
                  role: "combobox",
                  scroll: !0,
                });
              return (0, t.jsx)(S.Provider, {
                value: r,
                children: (0, t.jsx)(g.k.Root, { state: l, children: a }),
              });
            },
            TextInput: function (e) {
              const {
                  state: {
                    onTextChange: a,
                    activeIndex: s,
                    onOpenChange: n,
                    setActiveIndex: r,
                    suggestions: o,
                    onSuggestionSelected: i,
                  },
                } = w("<Autocomplete.TextInput>"),
                c = (0, l.useRef)(null);
              return (0, t.jsx)(g.k.Anchor, {
                children: (0, t.jsx)(p, {
                  ...e,
                  inputRef: c,
                  onTextChange: a,
                  "aria-autocomplete": "list",
                  onKeyDown: (e) => {
                    "Enter" === e.key &&
                      null !== s &&
                      o[s] &&
                      (i && i(o[s], e),
                      e.defaultPrevented || a(o[s]),
                      r(null),
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
              });
            },
            Suggestions: function (e) {
              return (0, t.jsx)(g.k.Positioner, { ...e, returnFocus: !1 });
            },
            Suggestion: function (e) {
              const { value: a, children: s, ...n } = e,
                {
                  state: {
                    onTextChange: r,
                    onOpenChange: l,
                    setActiveIndex: o,
                    onSuggestionSelected: i,
                  },
                } = w("<Autocomplete.TextInput>");
              return (0, t.jsx)(g.k.Item, {
                onSelect: (e) => {
                  i && i(a, e), e.defaultPrevented || r(a), o(null), l(!1);
                },
                ...n,
                children: s,
              });
            },
          },
        ),
        S = (0, l.createContext)(null);
      function w(e) {
        const a = (0, l.useContext)(S);
        return (0, h.wT)(a, `${e} must be used within an <Autocomplete>!`), a;
      }
      var C = s(86632),
        T = s(39020),
        f = s(82477),
        j = s(46416),
        _ = s(32630),
        P = s(52038),
        D = s(61859),
        L = s(78327),
        b = s(12241),
        A = s(76217),
        I = s(30894),
        W = s(65946),
        k = s(70310);
      const N = "PC_HideOwned",
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
        bHideOwned: "1" == localStorage.getItem(N),
        bHideEarlyAccess: "1" == localStorage.getItem(G),
        cResultsToShow: parseInt(localStorage.getItem(H) ?? "100"),
        wishlistDisplay: parseInt(localStorage.getItem(v) ?? "0"),
      };
      function R(e) {
        const { count: a } = e;
        return (0, t.jsxs)(A.Z, {
          className: b.PersonalCalendarHeader,
          children: [
            (0, t.jsx)(A.Z, {
              className: b.PersonalCalendarTitle,
              children: (0, D.we)("#PersonalCalendar_Title"),
            }),
            "number" == typeof a &&
              (0, t.jsx)(A.Z, {
                className: b.PersonalCalendarDescription,
                children: (0, D.we)("#PersonalCalendar_Description", a),
              }),
          ],
        });
      }
      function M() {
        return (0, t.jsxs)(A.Z, {
          className: b.PersonalCalendarLoginPrompt,
          children: [
            (0, D.we)("#PersonalCalendar_LoginPrompt"),
            (0, t.jsx)("button", {
              onClick: f.vg,
              className: b.LoginButton,
              children: (0, D.we)("#Login_SignIn"),
            }),
          ],
        });
      }
      function O(e) {
        const {
          state: a,
          onChange: s,
          tagMap: n,
          userTags: l,
          maxResultsToShow: o,
        } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(A.Z, {
              className: b.SteamLabsBanner,
              children: (0, D.oW)(
                "#PersonalCalendar_SteamLabs",
                (0, t.jsx)("a", {
                  href: "https://steamcommunity.com/groups/SteamLabs/discussions/19/",
                }),
              ),
            }),
            (0, t.jsxs)(A.Z, {
              className: b.Options,
              children: [
                (0, t.jsx)(E, {
                  userTags: l,
                  tagMap: n,
                  selectedTag: a.selectedTag,
                  onChange: (e) => s({ ...a, selectedTag: e }),
                }),
                (0, t.jsx)(z, {
                  count: a.cResultsToShow,
                  onChange: (e) => {
                    localStorage.setItem(H, e.toString()),
                      s({ ...a, cResultsToShow: e });
                  },
                  max: o,
                }),
                (0, t.jsx)(Y, {
                  wishlistDisplay: a.wishlistDisplay,
                  onChange: (e) => {
                    localStorage.setItem(v, e.toString()),
                      s({ ...a, wishlistDisplay: e });
                  },
                  disabled: !e.usesWishlists,
                }),
                (0, t.jsxs)(A.Z, {
                  className: b.HideOwnedSelector,
                  children: [
                    (0, t.jsx)(r.S, {
                      checked: a.bHideOwned,
                      onChange: (e) => {
                        localStorage.setItem(N, e ? "1" : "0"),
                          s({ ...a, bHideOwned: e });
                      },
                      children: (0, D.we)("#PersonalCalendar_HideOwned"),
                    }),
                    (0, t.jsx)(r.S, {
                      checked: a.bHideEarlyAccess,
                      onChange: (e) => {
                        localStorage.setItem(G, e ? "1" : "0"),
                          s({ ...a, bHideEarlyAccess: e });
                      },
                      "data-tooltip-text": (0, D.we)(
                        "#PersonalCalendar_HideEATooltip",
                      ),
                      children: (0, D.we)("#PersonalCalendar_HideEarlyAccess"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function E(e) {
        const { userTags: a, tagMap: s, selectedTag: n, onChange: r } = e,
          [o, i] = l.useState(""),
          { tagStrings: c, tagStringMap: d } = l.useMemo(() => {
            const e = [],
              t = new Map();
            for (const [a, n] of Object.entries(s ?? {})) {
              const s = Number(a);
              e.push({ tagID: s, tagName: n }), t.set(n.toLocaleLowerCase(), s);
            }
            e.sort((e, s) => a?.indexOf(s.tagID) - a?.indexOf(e.tagID));
            return {
              tagStrings: e
                .filter((e) =>
                  e.tagName
                    .toLocaleLowerCase()
                    .startsWith(o.toLocaleLowerCase()),
                )
                .map((e) => e.tagName)
                .slice(0, 20),
              tagStringMap: t,
            };
          }, [s, a, o]);
        return (0, t.jsxs)(A.Z, {
          className: b.TagSelector,
          children: [
            (0, t.jsx)(A.Z, {
              className: b.Title,
              children: (0, D.we)("#PersonalCalendar_TagSelector"),
            }),
            (0, t.jsx)(x, {
              suggestions: c,
              onSuggestionSelected: (e) =>
                ((e) => {
                  r(d?.get(e.toLocaleLowerCase()) ?? 0);
                })(e),
              value: o,
              onTextChange: (e) =>
                ((e) => {
                  "" === e.trim() && n
                    ? r(0)
                    : d.has(e.toLocaleLowerCase()) &&
                      r(d.get(e.toLocaleLowerCase())),
                    i(e);
                })(e),
              clearable: !0,
              placeholder: (0, D.we)(
                "#PersonalCalendar_TagSelector_Placeholder",
              ),
            }),
          ],
        });
      }
      function z(e) {
        const { count: a, onChange: s, max: n } = e,
          r = [10, 25, 50, 100, 250, 500];
        let l = [];
        n &&
          ((l = r.filter((e) => e < n)),
          l.length != r.length && l.push(n),
          l.includes(a) || (l.includes(100) ? s(100) : s(l[l.length - 1])));
        const o = l.map((e) => e.toString());
        return (0, t.jsxs)(A.Z, {
          className: b.ResultCountSelector,
          children: [
            (0, t.jsx)(A.Z, {
              className: b.Title,
              children: (0, D.we)("#PersonalCalendar_ResultCountSelector"),
            }),
            (0, t.jsx)(C.I, {
              options: o,
              value: a.toString(),
              onValueChange: (e) => s(parseInt(e)),
              radius: "sm",
            }),
          ],
        });
      }
      function Y(e) {
        const { wishlistDisplay: a, onChange: s } = e,
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
          r = [n(Z.Show), n(Z.Hide), n(Z.Only)];
        return (0, t.jsxs)(A.Z, {
          className: (0, P.A)(b.ResultCountSelector, e.disabled && b.Disabled),
          "data-tooltip-text": e.disabled
            ? (0, D.we)("#PersonalCalendar_IgnoringWishlists")
            : void 0,
          children: [
            (0, t.jsx)(A.Z, {
              className: b.Title,
              children: (0, D.we)("#PersonalCalendar_Wishlisted"),
            }),
            (0, t.jsx)(C.I, {
              options: r,
              value: n(a),
              onValueChange: (a) =>
                e.disabled
                  ? () => {}
                  : s(
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
          ],
        });
      }
      function K(e) {
        const { games: a } = e,
          s =
            (0, W.q3)(() =>
              a?.filter((e) => !I.Fm.Get().BIsGameIgnored(e.appid)),
            ) ?? [];
        return (0, t.jsxs)(A.Z, {
          className: b.PersonalCalendarSection,
          children: [
            (0, t.jsx)(A.Z, {
              className: b.SectionHeader,
              children: (0, D.we)("#PersonalCalendar_LastMonthGames"),
            }),
            (0, t.jsx)(A.Z, {
              className: (0, P.A)(b.GameList, b.Month),
              children: s
                .slice(0, 16)
                .map((e) =>
                  (0, t.jsx)(
                    A.Z,
                    {
                      className: b.AppEntry,
                      children: (0, t.jsx)(j.W, {
                        capsule: { id: e.appid },
                        imageType: "header",
                        bShowEarlyAccessBanner: !1,
                        bShowIgnoreButton: !0,
                        bShowDescriptionInHover: !0,
                        bPreferAssetWithoutOverride: !1,
                      }),
                    },
                    e.appid,
                  ),
                ),
            }),
          ],
        });
      }
      function F(e) {
        const { games: a } = e,
          s =
            (0, W.q3)(() =>
              a?.filter((e) => !I.Fm.Get().BIsGameIgnored(e.appid)),
            ) ?? [];
        return (0, t.jsxs)(A.Z, {
          className: b.PersonalCalendarSection,
          children: [
            (0, t.jsx)(A.Z, {
              className: b.SectionHeader,
              children: (0, D.we)("#PersonalCalendar_LastWeekGames"),
            }),
            (0, t.jsx)(A.Z, {
              className: (0, P.A)(b.GameList, b.Week),
              children: s
                .slice(0, 12)
                .map((e) =>
                  (0, t.jsx)(
                    A.Z,
                    {
                      className: b.AppEntry,
                      children: (0, t.jsx)(j.W, {
                        capsule: { id: e.appid },
                        imageType: "header",
                        bShowEarlyAccessBanner: !1,
                        bShowIgnoreButton: !0,
                        bShowDescriptionInHover: !0,
                        bPreferAssetWithoutOverride: !1,
                      }),
                    },
                    e.appid,
                  ),
                ),
            }),
          ],
        });
      }
      function J(e) {
        const {
            dayWeekTimestamps: a,
            appReleasesByDay: s,
            todayTimestamp: n,
            includeSaturday: r,
          } = e,
          [o, i] = l.useState(9999);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(A.Z, {
              className: (0, P.A)(
                b.PersonalCalendarSection,
                b.Calendar,
                r && b.IncludeSaturday,
              ),
              children: [
                (0, t.jsx)(A.Z, {
                  className: b.SectionHeader,
                  children: (0, D.we)("#PersonalCalendar_Upcoming"),
                }),
                (0, t.jsx)(A.Z, {
                  className: (0, P.A)(b.Week, r && b.IncludeSaturday),
                  children: a?.[0].map((e, a) =>
                    0 == a
                      ? null
                      : r || 6 != a
                        ? (0, t.jsx)(q, { timestamp: e }, `WeekHeader_${e}`)
                        : null,
                  ),
                }),
                a.map((e, a) =>
                  (0, t.jsx)(
                    U,
                    {
                      dayTimestamps: e,
                      appReleasesByDay: s,
                      todayTimestamp: n,
                      maxGames: o,
                      includeSaturday: r,
                    },
                    `Week_${a}`,
                  ),
                ),
                9999 != o &&
                  (0, t.jsx)(A.Z, {
                    className: b.ShowAllButton,
                    onClick: () => i(9999),
                    children: (0, D.we)("#PersonalCalendar_ShowAll"),
                  }),
              ],
            }),
            (0, t.jsxs)(A.Z, {
              className: (0, P.A)(
                b.PersonalCalendarSection,
                b.LinearCalendar,
                r && b.IncludeSaturday,
              ),
              children: [
                (0, t.jsx)(A.Z, {
                  className: b.SectionHeader,
                  children: (0, D.we)("#PersonalCalendar_Upcoming"),
                }),
                a.map((e, a) =>
                  (0, t.jsx)(
                    V,
                    {
                      dayTimestamps: e,
                      appReleasesByDay: s,
                      todayTimestamp: n,
                      maxGames: o,
                    },
                    `WeekLinear_${a}`,
                  ),
                ),
              ],
            }),
          ],
        });
      }
      function q(e) {
        const a = new Date(1e3 * e.timestamp).toLocaleDateString(
          D.pf.GetPreferredLocales(),
          { weekday: "long" },
        );
        return (0, t.jsx)(A.Z, { className: b.DayOfWeekHeader, children: a });
      }
      function U(e) {
        const [a, s] = l.useState(e.maxGames);
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
        return (0, t.jsx)(A.Z, {
          className: (0, P.A)(b.Week, e.includeSaturday && b.IncludeSaturday),
          children: e.dayTimestamps.map((r, l) =>
            0 == l
              ? null
              : e.includeSaturday || 6 != l
                ? (0, t.jsx)(
                    Q,
                    {
                      timestamp: r,
                      appsToday: e.appReleasesByDay[r],
                      firstTimestamp: e.todayTimestamp,
                      maxGames: Math.max(e.maxGames, a),
                      setMaxGames: s,
                      maxNumGamesInWeek: n,
                    },
                    r,
                  )
                : null,
          ),
        });
      }
      function V(e) {
        if (e.todayTimestamp > Math.max(...e.dayTimestamps)) return null;
        const a = { month: "long", day: "numeric" },
          s = new Date(1e3 * e.dayTimestamps[0]).toLocaleDateString(
            D.pf.GetPreferredLocales(),
            a,
          ),
          n = new Date(1e3 * (e.dayTimestamps[0] + 518400)).toLocaleDateString(
            D.pf.GetPreferredLocales(),
            a,
          );
        return (0, t.jsxs)(A.Z, {
          className: b.WeekLinear,
          children: [
            (0, t.jsxs)(A.Z, {
              className: b.LinearHeader,
              children: [s, " - ", n],
            }),
            (0, t.jsx)(A.Z, {
              className: b.LinearDayList,
              children: e.dayTimestamps?.map((a) =>
                (0, t.jsx)(
                  X,
                  {
                    timestamp: a,
                    appsToday: e.appReleasesByDay[a],
                    firstTimestamp: e.todayTimestamp,
                    maxGames: 9999,
                    setMaxGames: () => null,
                    maxNumGamesInWeek: 9999,
                  },
                  a,
                ),
              ),
            }),
          ],
        });
      }
      function Q(e) {
        const a = new Date(1e3 * e.timestamp).toLocaleDateString(
            D.pf.GetPreferredLocales(),
            { month: "long", day: "numeric" },
          ),
          s = new Date();
        s.setHours(0, 0, 0, 0);
        const n = Math.floor(s.getTime() / 1e3) == e.timestamp,
          r = e.appsToday?.filter((e) => e.wishlisted).length,
          l = Math.max(e.maxGames, r),
          o = l == e.appsToday?.length,
          i =
            (0, W.q3)(() =>
              e.appsToday?.filter((e) => !I.Fm.Get().BIsGameIgnored(e.appid)),
            ) ?? [],
          c =
            1 == e.maxNumGamesInWeek ||
            e.appsToday?.length <= Math.floor(e.maxNumGamesInWeek / 2)
              ? "library"
              : "main";
        return (0, t.jsxs)(A.Z, {
          className: (0, P.A)(b.Day, n && b.Today),
          children: [
            (0, t.jsx)(A.Z, { className: b.DateHeader, children: a }),
            (0, t.jsxs)(A.Z, {
              className: b.GameList,
              children: [
                i?.map((e, a) =>
                  (0, t.jsx)(
                    A.Z,
                    {
                      className: b.CalendarAppEntry,
                      children: (0, t.jsx)(j.W, {
                        capsule: { id: e.appid },
                        imageType: c,
                        nWidthMultiplier: 2,
                        bShowName: !1,
                        bHidePlatforms: !0,
                        bHidePrice: !0,
                        bShowEarlyAccessBanner: !1,
                        bShowIgnoreButton: !0,
                        bShowDescriptionInHover: !0,
                        bPreferAssetWithoutOverride: !1,
                      }),
                    },
                    e.appid,
                  ),
                ),
                !o &&
                  l < e.appsToday?.length &&
                  (0, t.jsx)(A.Z, {
                    className: b.ShowMoreButton,
                    onClick: () => e.setMaxGames(e.appsToday.length),
                    children: (0, D.we)(
                      "#PersonalCalendar_ShowMore",
                      e.appsToday.length,
                    ),
                  }),
              ],
            }),
          ],
        });
      }
      function X(e) {
        const a = new Date(1e3 * e.timestamp).toLocaleDateString(
            D.pf.GetPreferredLocales(),
            { weekday: "long" },
          ),
          s = new Date();
        s.setHours(0, 0, 0, 0);
        const n = Math.floor(s.getTime() / 1e3),
          r = n == e.timestamp,
          l =
            (0, W.q3)(() =>
              e.appsToday?.filter((e) => !I.Fm.Get().BIsGameIgnored(e.appid)),
            ) ?? [];
        return e.timestamp < n
          ? null
          : (0, t.jsxs)(A.Z, {
              className: (0, P.A)(
                b.DayLinear,
                r && b.Today,
                !e.appsToday?.length && b.Empty,
              ),
              children: [
                (0, t.jsx)(A.Z, { className: b.DayTitle, children: a }),
                e.appsToday?.length &&
                  (0, t.jsx)(A.Z, {
                    className: b.LinearDayAppList,
                    children: l?.map((e) =>
                      (0, t.jsx)(
                        A.Z,
                        {
                          className: b.LinearCalendarAppEntry,
                          children: (0, t.jsx)(j.W, {
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
                        },
                        e.appid,
                      ),
                    ),
                  }),
              ],
            });
      }
      const $ = () => {
        const { data: e } = (0, T.Fv)(L.TS.LANGUAGE),
          [a, s] = l.useState(B),
          r = (0, k.G)(a.selectedTag, 500, 30, 60, !0),
          {
            maxResultCount: o,
            dayWeekTimestamps: i,
            appReleasesByDay: c,
            userTags: d,
            usesWishlists: u,
          } = r.data || {},
          m = new Date();
        m.setHours(0, 0, 0, 0);
        const p = Math.floor(m.getTime() / 1e3),
          h = new Date();
        h.setDate(h.getDate() - 7);
        const g = Math.floor(h.getTime() / 1e3),
          {
            appReleasesByDayFiltered: y,
            lastMonthGames: x,
            lastWeekGames: S,
            includeSaturday: w,
          } = l.useMemo(() => {
            if (!c)
              return {
                appReleasesByDayFiltered: [],
                lastMonthGames: [],
                lastWeekGames: [],
              };
            const e = i?.flat() ?? [];
            const s = (function (e, a, s, t, n) {
                const r = Object.entries(e).map(
                  ([e, r]) => (
                    (r = r.filter((e) => e.rank < a)),
                    s && (r = r.filter((e) => !e.owned)),
                    t &&
                      (r = r.filter(
                        (e) => !e.earlyaccess || e.fromearlyaccess,
                      )),
                    n != Z.Show &&
                      (r = r.filter((e) => {
                        switch (n) {
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
                c,
                a.cResultsToShow,
                a.bHideOwned,
                a.bHideEarlyAccess,
                a.wishlistDisplay,
              ),
              t = e.filter((e, a) => a % 7 == 6);
            let n = 0;
            for (const e of t) e < p || (n += s[e]?.length ?? 0);
            const r = n >= 3;
            for (let a = 0; a < e.length; a += 1) {
              if (a % 7 == 0 && s[e[a]]?.length > 0) {
                const t = e[a + 1];
                a < e.length - 1 &&
                  (s[t] || (s[t] = []), s[t].push(...s[e[a]]), (s[e[a]] = []));
              }
              if (a % 7 == 6 && !r && s[e[a]]?.length > 0) {
                const t = e[a + 2];
                a < e.length - 2 &&
                  (s[t] || (s[t] = []), s[t].push(...s[e[a]]), (s[e[a]] = []));
              }
            }
            const l = [],
              o = [];
            for (const a of e)
              a <= p &&
                (a < g ? l.push(...(s?.[a] ?? [])) : o.push(...(s?.[a] ?? [])));
            return (
              l.sort((e, a) => e.rank - a.rank),
              o.sort((e, a) => e.rank - a.rank),
              {
                appReleasesByDayFiltered: s,
                lastMonthGames: l,
                lastWeekGames: o,
                includeSaturday: r,
              }
            );
          }, [
            c,
            a.cResultsToShow,
            a.bHideOwned,
            a.wishlistDisplay,
            a.bHideEarlyAccess,
            i,
            p,
            g,
          ]);
        return r.data && !L.iA.logged_in
          ? (0, t.jsxs)(A.Z, {
              className: b.PersonalCalendarLoginPrompt,
              children: [
                (0, t.jsx)(A.Z, {
                  className: b.Text,
                  children: (0, D.we)("#PersonalCalendar_LoginPrompt"),
                }),
                (0, t.jsx)(A.Z, {
                  className: (0, P.A)(b.LoginButton),
                  onClick: f.vg,
                  children: (0, t.jsx)("span", {
                    children: (0, D.we)("#LoginButton"),
                  }),
                }),
              ],
            })
          : (0, t.jsx)(_.Ay, {
              controller: "personalcalendar",
              method: "default",
              feature: "capsule",
              children: (0, t.jsx)(n.Y, {
                children: (0, t.jsx)(A.Z, {
                  className: (0, P.A)(
                    b.PersonalCalendarApp,
                    r.isFetching && b.Refreshing,
                  ),
                  children: (0, t.jsxs)(A.Z, {
                    className: b.PersonalCalendarContainer,
                    children: [
                      (0, t.jsx)(R, {
                        count: r.data ? a.cResultsToShow : void 0,
                      }),
                      !L.iA.steamid && (0, t.jsx)(M, {}),
                      r.data &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(O, {
                              state: a,
                              onChange: s,
                              tagMap: e,
                              userTags: d,
                              maxResultsToShow: o,
                              usesWishlists: u,
                            }),
                            x.length > 0 &&
                              (0, t.jsx)(K, { games: x, includeSaturday: w }),
                            S.length > 0 &&
                              (0, t.jsx)(F, { games: S, includeSaturday: w }),
                            (0, t.jsx)(J, {
                              dayWeekTimestamps: i,
                              appReleasesByDay: y,
                              todayTimestamp: p,
                              includeSaturday: w,
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            });
      };
    },
  },
]);
