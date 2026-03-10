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
                `${r.TS.STORE_BASE_URL}personalcalendarold/getrecommendations`,
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
      s.r(a), s.d(a, { default: () => ee });
      var t = s(7850),
        n = s(96146),
        r = s(57757),
        l = s(90626),
        o = s(64238),
        i = s.n(o),
        c = s(91239);
      var d = s(24089);
      var u = s(90534),
        m = s(61023),
        p = s(77914),
        h = s(8871);
      function g(e) {
        const { extracted: a, remaining: s } = (0, u.A4)(e),
          {
            value: n,
            onTextChange: r,
            onTextClear: o,
            clearable: g,
            onChange: y,
            radius: x,
            variant: S,
            size: w,
            beforeContent: C,
            afterContent: f,
            inputRef: T,
            ref: j,
            disabled: _,
            ...P
          } = s,
          D = {
            ...a,
            variant: S,
            size: w,
            radius: x,
            beforeContent: C,
            afterContent:
              n && g
                ? (0, t.jsx)(p.g, {
                    onClick: () => {
                      r(""), o && o();
                    },
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : f,
            ref: j,
            disabled: _,
          },
          L = (0, l.useRef)(null);
        return (0, t.jsx)(m.j, {
          cursor: "text",
          ...D,
          onClick: (e) => {
            L.current && e.target !== L.current && L.current.focus();
          },
          children: (0, t.jsx)("input", {
            ref: (0, h.Ue)(T, L),
            type: "text",
            ...P,
            "aria-disabled": _,
            readOnly: _,
            className: i()(c.Reset, d.TextEntry),
            value: n || "",
            onChange: (e) => {
              _ || (r(e.target.value), y && y(e));
            },
          }),
        });
      }
      var y = s(81393),
        x = s(95013);
      const S = Object.assign(
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
                  ? (0, t.jsx)(p.g, {
                      onClick: () => i.onTextChange(""),
                      cursor: "pointer",
                      hitSlop: !0,
                    })
                  : void 0;
            return (0, t.jsxs)(S.Root, {
              state: i,
              children: [
                (0, t.jsx)(S.TextInput, { ...o, afterContent: c }),
                (0, t.jsx)(S.Suggestions, {
                  children: a.map((e, a) =>
                    (0, t.jsx)(S.Suggestion, { value: e, children: e }, e + a),
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
                l = (0, x.T)({
                  ...r.state,
                  width: n,
                  placement: s,
                  gutter: "4",
                  interactions: { virtualItemFocus: !0, focus: !0 },
                  role: "combobox",
                  scroll: !0,
                });
              return (0, t.jsx)(w.Provider, {
                value: r,
                children: (0, t.jsx)(x.k.Root, { state: l, children: a }),
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
                } = C("<Autocomplete.TextInput>"),
                c = (0, l.useRef)(null);
              return (0, t.jsx)(x.k.Anchor, {
                children: (0, t.jsx)(g, {
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
              return (0, t.jsx)(x.k.Positioner, { ...e, returnFocus: !1 });
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
                } = C("<Autocomplete.TextInput>");
              return (0, t.jsx)(x.k.Item, {
                onSelect: (e) => {
                  i && i(a, e), e.defaultPrevented || r(a), o(null), l(!1);
                },
                ...n,
                children: s,
              });
            },
          },
        ),
        w = (0, l.createContext)(null);
      function C(e) {
        const a = (0, l.useContext)(w);
        return (0, y.wT)(a, `${e} must be used within an <Autocomplete>!`), a;
      }
      var f = s(86632),
        T = s(39020),
        j = s(82477),
        _ = s(22687),
        P = s(32630),
        D = s(52038),
        L = s(61859),
        b = s(78327),
        A = s(12241),
        k = s(76217),
        I = s(30894),
        W = s(65946),
        N = s(70310);
      const G = "PC_HideOwned",
        H = "PC_HideEarlyAccess",
        v = "PC_GameCount",
        Z = "PC_WishlistedDisplay";
      var R;
      !(function (e) {
        (e[(e.Show = 0)] = "Show"),
          (e[(e.Only = 1)] = "Only"),
          (e[(e.Hide = 2)] = "Hide");
      })(R || (R = {}));
      const B = {
        selectedTag: 0,
        bHideOwned: "1" == localStorage.getItem(G),
        bHideEarlyAccess: "1" == localStorage.getItem(H),
        cResultsToShow: parseInt(localStorage.getItem(v) ?? "100"),
        wishlistDisplay: parseInt(localStorage.getItem(Z) ?? "0"),
      };
      function M(e) {
        const { count: a } = e;
        return (0, t.jsxs)(k.Z, {
          className: A.PersonalCalendarHeader,
          children: [
            (0, t.jsx)(k.Z, {
              className: A.PersonalCalendarTitle,
              children: (0, L.we)("#PersonalCalendar_Title"),
            }),
            "number" == typeof a &&
              (0, t.jsx)(k.Z, {
                className: A.PersonalCalendarDescription,
                children: (0, L.we)("#PersonalCalendar_Description", a),
              }),
          ],
        });
      }
      function O() {
        return (0, t.jsxs)(k.Z, {
          className: A.PersonalCalendarLoginPrompt,
          children: [
            (0, L.we)("#PersonalCalendar_LoginPrompt"),
            (0, t.jsx)("button", {
              onClick: j.vg,
              className: A.LoginButton,
              children: (0, L.we)("#Login_SignIn"),
            }),
          ],
        });
      }
      function E(e) {
        const {
          state: a,
          onChange: s,
          tagMap: n,
          userTags: l,
          maxResultsToShow: o,
        } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(k.Z, {
              className: A.SteamLabsBanner,
              children: (0, L.oW)(
                "#PersonalCalendar_SteamLabs",
                (0, t.jsx)("a", {
                  href: "https://steamcommunity.com/groups/SteamLabs/discussions/19/",
                }),
              ),
            }),
            (0, t.jsxs)(k.Z, {
              className: A.Options,
              children: [
                (0, t.jsx)(z, {
                  userTags: l,
                  tagMap: n,
                  selectedTag: a.selectedTag,
                  onChange: (e) => s({ ...a, selectedTag: e }),
                }),
                (0, t.jsx)(Y, {
                  count: a.cResultsToShow,
                  onChange: (e) => {
                    localStorage.setItem(v, e.toString()),
                      s({ ...a, cResultsToShow: e });
                  },
                  max: o,
                }),
                (0, t.jsx)(K, {
                  wishlistDisplay: a.wishlistDisplay,
                  onChange: (e) => {
                    localStorage.setItem(Z, e.toString()),
                      s({ ...a, wishlistDisplay: e });
                  },
                  disabled: !e.usesWishlists,
                }),
                (0, t.jsxs)(k.Z, {
                  className: A.HideOwnedSelector,
                  children: [
                    (0, t.jsx)(r.S, {
                      checked: a.bHideOwned,
                      onChange: (e) => {
                        localStorage.setItem(G, e ? "1" : "0"),
                          s({ ...a, bHideOwned: e });
                      },
                      children: (0, L.we)("#PersonalCalendar_HideOwned"),
                    }),
                    (0, t.jsx)(r.S, {
                      checked: a.bHideEarlyAccess,
                      onChange: (e) => {
                        localStorage.setItem(H, e ? "1" : "0"),
                          s({ ...a, bHideEarlyAccess: e });
                      },
                      "data-tooltip-text": (0, L.we)(
                        "#PersonalCalendar_HideEATooltip",
                      ),
                      children: (0, L.we)("#PersonalCalendar_HideEarlyAccess"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function z(e) {
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
        return (0, t.jsxs)(k.Z, {
          className: A.TagSelector,
          children: [
            (0, t.jsx)(k.Z, {
              className: A.Title,
              children: (0, L.we)("#PersonalCalendar_TagSelector"),
            }),
            (0, t.jsx)(S, {
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
              placeholder: (0, L.we)(
                "#PersonalCalendar_TagSelector_Placeholder",
              ),
            }),
          ],
        });
      }
      function Y(e) {
        const { count: a, onChange: s, max: n } = e,
          r = [10, 25, 50, 100, 250, 500];
        let l = [];
        n &&
          ((l = r.filter((e) => e < n)),
          l.length != r.length && l.push(n),
          l.includes(a) || (l.includes(100) ? s(100) : s(l[l.length - 1])));
        const o = l.map((e) => e.toString());
        return (0, t.jsxs)(k.Z, {
          className: A.ResultCountSelector,
          children: [
            (0, t.jsx)(k.Z, {
              className: A.Title,
              children: (0, L.we)("#PersonalCalendar_ResultCountSelector"),
            }),
            (0, t.jsx)(f.I, {
              options: o,
              value: a.toString(),
              onValueChange: (e) => s(parseInt(e)),
              radius: "sm",
            }),
          ],
        });
      }
      function K(e) {
        const { wishlistDisplay: a, onChange: s } = e,
          n = (e) => {
            switch (e) {
              case R.Show:
                return (0, L.we)("#PersonalCalendar_WishlistShow");
              case R.Hide:
                return (0, L.we)("#PersonalCalendar_WishlistHide");
              case R.Only:
                return (0, L.we)("#PersonalCalendar_WishlistOnly");
            }
          },
          r = [n(R.Show), n(R.Hide), n(R.Only)];
        return (0, t.jsxs)(k.Z, {
          className: (0, D.A)(A.ResultCountSelector, e.disabled && A.Disabled),
          "data-tooltip-text": e.disabled
            ? (0, L.we)("#PersonalCalendar_IgnoringWishlists")
            : void 0,
          children: [
            (0, t.jsx)(k.Z, {
              className: A.Title,
              children: (0, L.we)("#PersonalCalendar_Wishlisted"),
            }),
            (0, t.jsx)(f.I, {
              options: r,
              value: n(a),
              onValueChange: (a) =>
                e.disabled
                  ? () => {}
                  : s(
                      ((e) => {
                        switch (e) {
                          case (0, L.we)("#PersonalCalendar_WishlistShow"):
                            return R.Show;
                          case (0, L.we)("#PersonalCalendar_WishlistHide"):
                            return R.Hide;
                          case (0, L.we)("#PersonalCalendar_WishlistOnly"):
                            return R.Only;
                        }
                        return R.Show;
                      })(a),
                    ),
              radius: "sm",
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
        return (0, t.jsx)(P.Ay, {
          controller: "personalcalendar",
          method: "default",
          feature: "lastmonth",
          children: (0, t.jsxs)(k.Z, {
            className: A.PersonalCalendarSection,
            children: [
              (0, t.jsx)(k.Z, {
                className: A.SectionHeader,
                children: (0, L.we)("#PersonalCalendar_LastMonthGames"),
              }),
              (0, t.jsx)(k.Z, {
                className: (0, D.A)(A.GameList, A.Month),
                children: s
                  .slice(0, 16)
                  .map((e) =>
                    (0, t.jsx)(
                      k.Z,
                      {
                        className: A.AppEntry,
                        children: (0, t.jsx)(_.W, {
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
          }),
        });
      }
      function J(e) {
        const { games: a } = e,
          s =
            (0, W.q3)(() =>
              a?.filter((e) => !I.Fm.Get().BIsGameIgnored(e.appid)),
            ) ?? [];
        return (0, t.jsx)(P.Ay, {
          controller: "personalcalendar",
          method: "default",
          feature: "lastweek",
          children: (0, t.jsxs)(k.Z, {
            className: A.PersonalCalendarSection,
            children: [
              (0, t.jsx)(k.Z, {
                className: A.SectionHeader,
                children: (0, L.we)("#PersonalCalendar_LastWeekGames"),
              }),
              (0, t.jsx)(k.Z, {
                className: (0, D.A)(A.GameList, A.Week),
                children: s
                  .slice(0, 12)
                  .map((e) =>
                    (0, t.jsx)(
                      k.Z,
                      {
                        className: A.AppEntry,
                        children: (0, t.jsx)(_.W, {
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
          }),
        });
      }
      function q(e) {
        const {
            dayWeekTimestamps: a,
            appReleasesByDay: s,
            todayTimestamp: n,
            includeSaturday: r,
          } = e,
          [o, i] = l.useState(9999);
        return (0, t.jsxs)(P.Ay, {
          controller: "personalcalendar",
          method: "default",
          feature: "calendar",
          children: [
            (0, t.jsxs)(k.Z, {
              className: (0, D.A)(
                A.PersonalCalendarSection,
                A.Calendar,
                r && A.IncludeSaturday,
              ),
              children: [
                (0, t.jsx)(k.Z, {
                  className: A.SectionHeader,
                  children: (0, L.we)("#PersonalCalendar_Upcoming"),
                }),
                (0, t.jsx)(k.Z, {
                  className: (0, D.A)(A.Week, r && A.IncludeSaturday),
                  children: a?.[0].map((e, a) =>
                    0 == a
                      ? null
                      : r || 6 != a
                        ? (0, t.jsx)(U, { timestamp: e }, `WeekHeader_${e}`)
                        : null,
                  ),
                }),
                a.map((e, a) =>
                  (0, t.jsx)(
                    V,
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
                  (0, t.jsx)(k.Z, {
                    className: A.ShowAllButton,
                    onClick: () => i(9999),
                    children: (0, L.we)("#PersonalCalendar_ShowAll"),
                  }),
              ],
            }),
            (0, t.jsxs)(k.Z, {
              className: (0, D.A)(
                A.PersonalCalendarSection,
                A.LinearCalendar,
                r && A.IncludeSaturday,
              ),
              children: [
                (0, t.jsx)(k.Z, {
                  className: A.SectionHeader,
                  children: (0, L.we)("#PersonalCalendar_Upcoming"),
                }),
                a.map((e, a) =>
                  (0, t.jsx)(
                    Q,
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
      function U(e) {
        const a = new Date(1e3 * e.timestamp).toLocaleDateString(
          L.pf.GetPreferredLocales(),
          { weekday: "long" },
        );
        return (0, t.jsx)(k.Z, { className: A.DayOfWeekHeader, children: a });
      }
      function V(e) {
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
        return (0, t.jsx)(k.Z, {
          className: (0, D.A)(A.Week, e.includeSaturday && A.IncludeSaturday),
          children: e.dayTimestamps.map((r, l) =>
            0 == l
              ? null
              : e.includeSaturday || 6 != l
                ? (0, t.jsx)(
                    X,
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
      function Q(e) {
        if (e.todayTimestamp > Math.max(...e.dayTimestamps)) return null;
        const a = { month: "long", day: "numeric" },
          s = new Date(1e3 * e.dayTimestamps[0]).toLocaleDateString(
            L.pf.GetPreferredLocales(),
            a,
          ),
          n = new Date(1e3 * (e.dayTimestamps[0] + 518400)).toLocaleDateString(
            L.pf.GetPreferredLocales(),
            a,
          );
        return (0, t.jsxs)(k.Z, {
          className: A.WeekLinear,
          children: [
            (0, t.jsxs)(k.Z, {
              className: A.LinearHeader,
              children: [s, " - ", n],
            }),
            (0, t.jsx)(k.Z, {
              className: A.LinearDayList,
              children: e.dayTimestamps?.map((a) =>
                (0, t.jsx)(
                  $,
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
      function X(e) {
        const a = new Date(1e3 * e.timestamp).toLocaleDateString(
            L.pf.GetPreferredLocales(),
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
        return (0, t.jsxs)(k.Z, {
          className: (0, D.A)(A.Day, n && A.Today),
          children: [
            (0, t.jsx)(k.Z, { className: A.DateHeader, children: a }),
            (0, t.jsxs)(k.Z, {
              className: A.GameList,
              children: [
                i?.map((e, a) =>
                  (0, t.jsx)(
                    k.Z,
                    {
                      className: A.CalendarAppEntry,
                      children: (0, t.jsx)(_.W, {
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
                  (0, t.jsx)(k.Z, {
                    className: A.ShowMoreButton,
                    onClick: () => e.setMaxGames(e.appsToday.length),
                    children: (0, L.we)(
                      "#PersonalCalendar_ShowMore",
                      e.appsToday.length,
                    ),
                  }),
              ],
            }),
          ],
        });
      }
      function $(e) {
        const a = new Date(1e3 * e.timestamp).toLocaleDateString(
            L.pf.GetPreferredLocales(),
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
          : (0, t.jsxs)(k.Z, {
              className: (0, D.A)(
                A.DayLinear,
                r && A.Today,
                !e.appsToday?.length && A.Empty,
              ),
              children: [
                (0, t.jsx)(k.Z, { className: A.DayTitle, children: a }),
                e.appsToday?.length &&
                  (0, t.jsx)(k.Z, {
                    className: A.LinearDayAppList,
                    children: l?.map((e) =>
                      (0, t.jsx)(
                        k.Z,
                        {
                          className: A.LinearCalendarAppEntry,
                          children: (0, t.jsx)(_.W, {
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
      const ee = () => {
        const { data: e } = (0, T.Fv)(b.TS.LANGUAGE),
          [a, s] = l.useState(B),
          r = (0, N.G)(a.selectedTag, 500, 30, 60, !0),
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
                    n != R.Show &&
                      (r = r.filter((e) => {
                        switch (n) {
                          case R.Hide:
                            return !e.wishlisted;
                          case R.Only:
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
        return r.data && !b.iA.logged_in
          ? (0, t.jsxs)(k.Z, {
              className: A.PersonalCalendarLoginPrompt,
              children: [
                (0, t.jsx)(k.Z, {
                  className: A.Text,
                  children: (0, L.we)("#PersonalCalendar_LoginPrompt"),
                }),
                (0, t.jsx)(k.Z, {
                  className: (0, D.A)(A.LoginButton),
                  onClick: j.vg,
                  children: (0, t.jsx)("span", {
                    children: (0, L.we)("#LoginButton"),
                  }),
                }),
              ],
            })
          : (0, t.jsx)(n.Y, {
              children: (0, t.jsx)(k.Z, {
                className: (0, D.A)(
                  A.PersonalCalendarApp,
                  r.isFetching && A.Refreshing,
                ),
                children: (0, t.jsxs)(k.Z, {
                  className: A.PersonalCalendarContainer,
                  children: [
                    (0, t.jsx)(M, {
                      count: r.data ? a.cResultsToShow : void 0,
                    }),
                    !b.iA.steamid && (0, t.jsx)(O, {}),
                    r.data &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(E, {
                            state: a,
                            onChange: s,
                            tagMap: e,
                            userTags: d,
                            maxResultsToShow: o,
                            usesWishlists: u,
                          }),
                          x.length > 0 &&
                            (0, t.jsx)(F, { games: x, includeSaturday: w }),
                          S.length > 0 &&
                            (0, t.jsx)(J, { games: S, includeSaturday: w }),
                          (0, t.jsx)(q, {
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
            });
      };
    },
  },
]);
