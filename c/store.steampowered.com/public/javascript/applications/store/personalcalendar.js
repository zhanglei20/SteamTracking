(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7701],
  {
    chunkid: (module) => {
      module.exports = {
        TextEntry: "_1vE-LsK6l_D_5yjbywZV1p",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Reset: "_3A_c3YHYd4YIjA8Y-olnPl",
      };
    },
    chunkid: (module) => {
      module.exports = {
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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        static s_PersonalCalendarStore;
        static Get() {
          return (
            _.s_PersonalCalendarStore ||
              ((_.s_PersonalCalendarStore = new _()),
              _.s_PersonalCalendarStore.Init(),
              (window.g_SubscriptionStore = _.s_PersonalCalendarStore)),
            _.s_PersonalCalendarStore
          );
        }
        async GetCalendarRecommendations(_, _, _, _, _) {
          return _._.fetchQuery(_(_, _, _, _, _));
        }
        Init() {}
      }
      function _(_, _, _, _, _) {
        return (0, _._)(_(_, _, _, _, _));
      }
      function _(_, _, _, _, _) {
        return {
          queryKey: ["personalcalendar", _, _, _, _, _],
          queryFn: async () => {
            const _ = {
                tag: _,
                daysbackward: _,
                daysforward: _,
                weekaligned: _ ? 1 : 0,
                maxresults: _,
                sessionid: _._.SESSIONID,
              },
              _ = await _().get(
                `${_._.STORE_BASE_URL}personalcalendar/getrecommendations`,
                {
                  params: _,
                  timeout: 2e4,
                },
              );
            return {
              appReleasesByDay: _.data.appReleasesByDay,
              dayWeekTimestamps: _.data.dayWeekTimestamps,
              maxResultCount: _.data.maxResultCount,
              userTags: _.data.userTags,
              usesWishlists: _.data.usesWishlists,
              resultMessage: _.data.resultMessage,
            };
          },
          placeholderData: (_) => _,
        };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { extracted: _, remaining: __webpack_require__ } = (0, _._)(_),
          {
            value: _,
            onTextChange: _,
            onChange: _,
            radius: _,
            variant: _,
            size: _,
            beforeContent: _,
            afterContent: _,
            inputRef: _,
            ref: _,
            ..._
          } = __webpack_require__,
          _ = {
            ..._,
            variant: _,
            size: _,
            radius: _,
            beforeContent: _,
            afterContent: _,
            ref: _,
          };
        return (0, _.jsx)(_._, {
          cursor: "text",
          ..._,
          children: (0, _.jsx)("input", {
            ref: _,
            type: "text",
            ..._,
            className: _()(_.Reset, _.TextEntry),
            value: _ || "",
            onChange: (_) => {
              _(_.target.value), _ && _(_);
            },
          }),
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = Object.assign(
          function (_) {
            const {
                suggestions: _,
                onTextChange: __webpack_require__,
                onSuggestionSelected: _,
                clearable: _,
                ..._
              } = _,
              _ = (function (_) {
                const {
                    onTextChange: _,
                    suggestions: __webpack_require__,
                    onSuggestionSelected: _,
                  } = _,
                  [_, _] = (0, _.useState)(null),
                  [_, _] = (0, _.useState)(!1),
                  _ = (0, _.useCallback)(
                    (_) => {
                      _ ? (_(!0), _(null)) : _(!1), _(_);
                    },
                    [_],
                  );
                return {
                  activeIndex: _,
                  setActiveIndex: _,
                  open: _,
                  onOpenChange: _,
                  onTextChange: _,
                  suggestions: __webpack_require__,
                  onSuggestionSelected: _,
                };
              })({
                onTextChange: __webpack_require__,
                suggestions: _,
                onSuggestionSelected: _,
              }),
              _ =
                _.value && _
                  ? (0, _.jsx)(_._, {
                      onClick: () => _.onTextChange(""),
                      cursor: "pointer",
                      hitSlop: !0,
                    })
                  : void 0;
            return (0, _.jsxs)(_.Root, {
              state: _,
              children: [
                (0, _.jsx)(_.TextInput, {
                  ..._,
                  afterContent: _,
                }),
                (0, _.jsx)(_.Suggestions, {
                  children: _.map((_, _) =>
                    (0, _.jsx)(
                      _.Suggestion,
                      {
                        value: _,
                        children: _,
                      },
                      _ + _,
                    ),
                  ),
                }),
              ],
            });
          },
          {
            Root: function (_) {
              const {
                  children: _,
                  placement: __webpack_require__ = "bottom-end",
                  popoverWidth: _ = "dropdown",
                  ..._
                } = _,
                _ = (0, _._)({
                  ..._.state,
                  width: _,
                  placement: __webpack_require__,
                  gutter: "4",
                  interactions: {
                    virtualItemFocus: !0,
                    focus: !0,
                  },
                  role: "combobox",
                  scroll: !0,
                });
              return (0, _.jsx)(_.Provider, {
                value: _,
                children: (0, _.jsx)(_._.Root, {
                  state: _,
                  children: _,
                }),
              });
            },
            TextInput: function (_) {
              const {
                  state: {
                    onTextChange: _,
                    activeIndex: __webpack_require__,
                    onOpenChange: _,
                    setActiveIndex: _,
                    suggestions: _,
                    onSuggestionSelected: _,
                  },
                } = _("<Autocomplete.TextInput>"),
                _ = (0, _.useRef)(null);
              return (0, _.jsx)(_._.Anchor, {
                children: (0, _.jsx)(_, {
                  ..._,
                  inputRef: _,
                  onTextChange: _,
                  "aria-autocomplete": "list",
                  onKeyDown: (_) => {
                    "Enter" === _.key &&
                      null !== __webpack_require__ &&
                      _[__webpack_require__] &&
                      (_ && _(_[__webpack_require__], _),
                      _.defaultPrevented || _(_[__webpack_require__]),
                      _(null),
                      _(!1),
                      _.preventDefault(),
                      _.stopPropagation());
                  },
                  onKeyDownCapture: (_) => {
                    ("Home" !== _.key && "End" !== _.key) ||
                      _.stopPropagation();
                  },
                  role: "combobox",
                }),
              });
            },
            Suggestions: function (_) {
              return (0, _.jsx)(_._.Positioner, {
                ..._,
                returnFocus: !1,
              });
            },
            Suggestion: function (_) {
              const { value: _, children: __webpack_require__, ..._ } = _,
                {
                  state: {
                    onTextChange: _,
                    onOpenChange: _,
                    setActiveIndex: _,
                    onSuggestionSelected: _,
                  },
                } = _("<Autocomplete.TextInput>");
              return (0, _.jsx)(_._.Item, {
                onSelect: (_) => {
                  _ && _(_, _), _.defaultPrevented || _(_), _(null), _(!1);
                },
                ..._,
                children: __webpack_require__,
              });
            },
          },
        ),
        _ = (0, _.createContext)(null);
      function _(_) {
        const _ = (0, _.useContext)(_);
        return (0, _._)(_, `${_} must be used within an <Autocomplete>!`), _;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "PC_HideOwned",
        _ = "PC_HideEarlyAccess",
        _ = "PC_GameCount",
        _ = "PC_WishlistedDisplay";
      var _;
      !(function (_) {
        (_[(_.Show = 0)] = "Show"),
          (_[(_.Only = 1)] = "Only"),
          (_[(_.Hide = 2)] = "Hide");
      })(_ || (_ = {}));
      const _ = {
        selectedTag: 0,
        bHideOwned: "1" == localStorage.getItem(_),
        bHideEarlyAccess: "1" == localStorage.getItem(_),
        cResultsToShow: parseInt(localStorage.getItem(_) ?? "100"),
        wishlistDisplay: parseInt(localStorage.getItem(_) ?? "0"),
      };
      function _(_) {
        const { count: _ } = _;
        return (0, _.jsxs)(_._, {
          className: _.PersonalCalendarHeader,
          children: [
            (0, _.jsx)(_._, {
              className: _.PersonalCalendarTitle,
              children: (0, _._)("#PersonalCalendar_Title"),
            }),
            "number" == typeof _ &&
              (0, _.jsx)(_._, {
                className: _.PersonalCalendarDescription,
                children: (0, _._)("#PersonalCalendar_Description", _),
              }),
          ],
        });
      }
      function _() {
        return (0, _.jsxs)(_._, {
          className: _.PersonalCalendarLoginPrompt,
          children: [
            (0, _._)("#PersonalCalendar_LoginPrompt"),
            (0, _.jsx)("button", {
              onClick: _._,
              className: _.LoginButton,
              children: (0, _._)("#Login_SignIn"),
            }),
          ],
        });
      }
      function _(_) {
        const {
          state: _,
          onChange: __webpack_require__,
          tagMap: _,
          userTags: _,
          maxResultsToShow: _,
        } = _;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_._, {
              className: _.SteamLabsBanner,
              children: (0, _._)(
                "#PersonalCalendar_SteamLabs",
                (0, _.jsx)("a", {
                  href: "https://steamcommunity.com/groups/SteamLabs/discussions/19/",
                }),
              ),
            }),
            (0, _.jsxs)(_._, {
              className: _.Options,
              children: [
                (0, _.jsx)(_, {
                  userTags: _,
                  tagMap: _,
                  selectedTag: _.selectedTag,
                  onChange: (_) =>
                    __webpack_require__({
                      ..._,
                      selectedTag: _,
                    }),
                }),
                (0, _.jsx)(_, {
                  count: _.cResultsToShow,
                  onChange: (_) => {
                    localStorage.setItem(_, _.toString()),
                      __webpack_require__({
                        ..._,
                        cResultsToShow: _,
                      });
                  },
                  max: _,
                }),
                (0, _.jsx)(_, {
                  wishlistDisplay: _.wishlistDisplay,
                  onChange: (_) => {
                    localStorage.setItem(_, _.toString()),
                      __webpack_require__({
                        ..._,
                        wishlistDisplay: _,
                      });
                  },
                  disabled: !_.usesWishlists,
                }),
                (0, _.jsxs)(_._, {
                  className: _.HideOwnedSelector,
                  children: [
                    (0, _.jsx)(_._, {
                      checked: _.bHideOwned,
                      onChange: (_) => {
                        localStorage.setItem(_, _ ? "1" : "0"),
                          __webpack_require__({
                            ..._,
                            bHideOwned: _,
                          });
                      },
                      children: (0, _._)("#PersonalCalendar_HideOwned"),
                    }),
                    (0, _.jsx)(_._, {
                      checked: _.bHideEarlyAccess,
                      onChange: (_) => {
                        localStorage.setItem(_, _ ? "1" : "0"),
                          __webpack_require__({
                            ..._,
                            bHideEarlyAccess: _,
                          });
                      },
                      "data-tooltip-text": (0, _._)(
                        "#PersonalCalendar_HideEATooltip",
                      ),
                      children: (0, _._)("#PersonalCalendar_HideEarlyAccess"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const {
            userTags: _,
            tagMap: __webpack_require__,
            selectedTag: _,
            onChange: _,
          } = _,
          [_, _] = _.useState(""),
          { tagStrings: _, tagStringMap: _ } = _.useMemo(() => {
            const _ = [],
              _ = new Map();
            for (const [_, _] of Object.entries(__webpack_require__ ?? {})) {
              const _ = Number(_);
              _.push({
                tagID: _,
                tagName: _,
              }),
                _.set(_.toLocaleLowerCase(), _);
            }
            _.sort((_, _) => _?.indexOf(_.tagID) - _?.indexOf(_.tagID));
            return {
              tagStrings: _.filter((_) =>
                _.tagName.toLocaleLowerCase().startsWith(_.toLocaleLowerCase()),
              )
                .map((_) => _.tagName)
                .slice(0, 20),
              tagStringMap: _,
            };
          }, [__webpack_require__, _, _]);
        return (0, _.jsxs)(_._, {
          className: _.TagSelector,
          children: [
            (0, _.jsx)(_._, {
              className: _.Title,
              children: (0, _._)("#PersonalCalendar_TagSelector"),
            }),
            (0, _.jsx)(_, {
              suggestions: _,
              onSuggestionSelected: (_) =>
                ((_) => {
                  _(_?.get(_.toLocaleLowerCase()) ?? 0);
                })(_),
              value: _,
              onTextChange: (_) =>
                ((_) => {
                  "" === _.trim() && _
                    ? _(0)
                    : _.has(_.toLocaleLowerCase()) &&
                      _(_.get(_.toLocaleLowerCase())),
                    _(_);
                })(_),
              clearable: !0,
              placeholder: (0, _._)(
                "#PersonalCalendar_TagSelector_Placeholder",
              ),
            }),
          ],
        });
      }
      function _(_) {
        const { count: _, onChange: __webpack_require__, max: _ } = _,
          _ = [10, 25, 50, 100, 250, 500];
        let _ = [];
        _ &&
          ((_ = _.filter((_) => _ < _)),
          _.length != _.length && _.push(_),
          _.includes(_) ||
            (_.includes(100)
              ? __webpack_require__("chunkid")
              : __webpack_require__(_[_.length - 1])));
        const _ = _.map((_) => _.toString());
        return (0, _.jsxs)(_._, {
          className: _.ResultCountSelector,
          children: [
            (0, _.jsx)(_._, {
              className: _.Title,
              children: (0, _._)("#PersonalCalendar_ResultCountSelector"),
            }),
            (0, _.jsx)(_._, {
              options: _,
              value: _.toString(),
              onValueChange: (_) => __webpack_require__(parseInt(_)),
              radius: "sm",
            }),
          ],
        });
      }
      function _(_) {
        const { wishlistDisplay: _, onChange: __webpack_require__ } = _,
          _ = (_) => {
            switch (_) {
              case _.Show:
                return (0, _._)("#PersonalCalendar_WishlistShow");
              case _.Hide:
                return (0, _._)("#PersonalCalendar_WishlistHide");
              case _.Only:
                return (0, _._)("#PersonalCalendar_WishlistOnly");
            }
          },
          _ = [_(_.Show), _(_.Hide), _(_.Only)];
        return (0, _.jsxs)(_._, {
          className: (0, _._)(_.ResultCountSelector, _.disabled && _.Disabled),
          "data-tooltip-text": _.disabled
            ? (0, _._)("#PersonalCalendar_IgnoringWishlists")
            : void 0,
          children: [
            (0, _.jsx)(_._, {
              className: _.Title,
              children: (0, _._)("#PersonalCalendar_Wishlisted"),
            }),
            (0, _.jsx)(_._, {
              options: _,
              value: _(_),
              onValueChange: (_) =>
                _.disabled
                  ? () => {}
                  : __webpack_require__(
                      ((_) => {
                        switch (_) {
                          case (0, _._)("#PersonalCalendar_WishlistShow"):
                            return _.Show;
                          case (0, _._)("#PersonalCalendar_WishlistHide"):
                            return _.Hide;
                          case (0, _._)("#PersonalCalendar_WishlistOnly"):
                            return _.Only;
                        }
                        return _.Show;
                      })(_),
                    ),
              radius: "sm",
            }),
          ],
        });
      }
      function _(_) {
        const { games: _ } = _,
          _ =
            (0, _._)(() =>
              _?.filter((_) => !_._.Get().BIsGameIgnored(_.appid)),
            ) ?? [];
        return (0, _.jsxs)(_._, {
          className: _.PersonalCalendarSection,
          children: [
            (0, _.jsx)(_._, {
              className: _.SectionHeader,
              children: (0, _._)("#PersonalCalendar_LastMonthGames"),
            }),
            (0, _.jsx)(_._, {
              className: (0, _._)(_.GameList, _.Month),
              children: __webpack_require__.slice(0, 16).map((_) =>
                (0, _.jsx)(
                  _._,
                  {
                    className: _.AppEntry,
                    children: (0, _.jsx)(_._, {
                      capsule: {
                        _: _.appid,
                      },
                      imageType: "header",
                      bShowEarlyAccessBanner: !1,
                      bShowIgnoreButton: !0,
                      bShowDescriptionInHover: !0,
                      bPreferAssetWithoutOverride: !1,
                    }),
                  },
                  _.appid,
                ),
              ),
            }),
          ],
        });
      }
      function _(_) {
        const { games: _ } = _,
          _ =
            (0, _._)(() =>
              _?.filter((_) => !_._.Get().BIsGameIgnored(_.appid)),
            ) ?? [];
        return (0, _.jsxs)(_._, {
          className: _.PersonalCalendarSection,
          children: [
            (0, _.jsx)(_._, {
              className: _.SectionHeader,
              children: (0, _._)("#PersonalCalendar_LastWeekGames"),
            }),
            (0, _.jsx)(_._, {
              className: (0, _._)(_.GameList, _.Week),
              children: __webpack_require__.slice(0, 12).map((_) =>
                (0, _.jsx)(
                  _._,
                  {
                    className: _.AppEntry,
                    children: (0, _.jsx)(_._, {
                      capsule: {
                        _: _.appid,
                      },
                      imageType: "header",
                      bShowEarlyAccessBanner: !1,
                      bShowIgnoreButton: !0,
                      bShowDescriptionInHover: !0,
                      bPreferAssetWithoutOverride: !1,
                    }),
                  },
                  _.appid,
                ),
              ),
            }),
          ],
        });
      }
      function _(_) {
        const {
            dayWeekTimestamps: _,
            appReleasesByDay: __webpack_require__,
            todayTimestamp: _,
            includeSaturday: _,
          } = _,
          [_, _] = _.useState(9999);
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(_._, {
              className: (0, _._)(
                _.PersonalCalendarSection,
                _.Calendar,
                _ && _.IncludeSaturday,
              ),
              children: [
                (0, _.jsx)(_._, {
                  className: _.SectionHeader,
                  children: (0, _._)("#PersonalCalendar_Upcoming"),
                }),
                (0, _.jsx)(_._, {
                  className: (0, _._)(_.Week, _ && _.IncludeSaturday),
                  children: _?.[0].map((_, _) =>
                    0 == _
                      ? null
                      : _ || 6 != _
                        ? (0, _.jsx)(
                            _,
                            {
                              timestamp: _,
                            },
                            `WeekHeader_${_}`,
                          )
                        : null,
                  ),
                }),
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      dayTimestamps: _,
                      appReleasesByDay: __webpack_require__,
                      todayTimestamp: _,
                      maxGames: _,
                      includeSaturday: _,
                    },
                    `Week_${_}`,
                  ),
                ),
                9999 != _ &&
                  (0, _.jsx)(_._, {
                    className: _.ShowAllButton,
                    onClick: () => _(9999),
                    children: (0, _._)("#PersonalCalendar_ShowAll"),
                  }),
              ],
            }),
            (0, _.jsxs)(_._, {
              className: (0, _._)(
                _.PersonalCalendarSection,
                _.LinearCalendar,
                _ && _.IncludeSaturday,
              ),
              children: [
                (0, _.jsx)(_._, {
                  className: _.SectionHeader,
                  children: (0, _._)("#PersonalCalendar_Upcoming"),
                }),
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      dayTimestamps: _,
                      appReleasesByDay: __webpack_require__,
                      todayTimestamp: _,
                      maxGames: _,
                    },
                    `WeekLinear_${_}`,
                  ),
                ),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const _ = new Date(1e3 * _.timestamp).toLocaleDateString(
          _._.GetPreferredLocales(),
          {
            weekday: "long",
          },
        );
        return (0, _.jsx)(_._, {
          className: _.DayOfWeekHeader,
          children: _,
        });
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(_.maxGames);
        if (_.todayTimestamp > Math.max(..._.dayTimestamps)) return null;
        const _ = _.dayTimestamps
          ? Math.max(
              ..._.dayTimestamps.map((_) =>
                _ < _.dayTimestamps[0]
                  ? 0
                  : _.appReleasesByDay[_]
                    ? _.appReleasesByDay[_].length
                    : 0,
              ),
            )
          : 0;
        return (0, _.jsx)(_._, {
          className: (0, _._)(_.Week, _.includeSaturday && _.IncludeSaturday),
          children: _.dayTimestamps.map((_, _) =>
            0 == _
              ? null
              : _.includeSaturday || 6 != _
                ? (0, _.jsx)(
                    _,
                    {
                      timestamp: _,
                      appsToday: _.appReleasesByDay[_],
                      firstTimestamp: _.todayTimestamp,
                      maxGames: Math.max(_.maxGames, _),
                      setMaxGames: __webpack_require__,
                      maxNumGamesInWeek: _,
                    },
                    _,
                  )
                : null,
          ),
        });
      }
      function _(_) {
        if (_.todayTimestamp > Math.max(..._.dayTimestamps)) return null;
        const _ = {
            month: "long",
            day: "numeric",
          },
          _ = new Date(1e3 * _.dayTimestamps[0]).toLocaleDateString(
            _._.GetPreferredLocales(),
            _,
          ),
          _ = new Date(1e3 * (_.dayTimestamps[0] + 518400)).toLocaleDateString(
            _._.GetPreferredLocales(),
            _,
          );
        return (0, _.jsxs)(_._, {
          className: _.WeekLinear,
          children: [
            (0, _.jsxs)(_._, {
              className: _.LinearHeader,
              children: [_, " - ", _],
            }),
            (0, _.jsx)(_._, {
              className: _.LinearDayList,
              children: _.dayTimestamps?.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    timestamp: _,
                    appsToday: _.appReleasesByDay[_],
                    firstTimestamp: _.todayTimestamp,
                    maxGames: 9999,
                    setMaxGames: () => null,
                    maxNumGamesInWeek: 9999,
                  },
                  _,
                ),
              ),
            }),
          ],
        });
      }
      function _(_) {
        const _ = new Date(1e3 * _.timestamp).toLocaleDateString(
            _._.GetPreferredLocales(),
            {
              month: "long",
              day: "numeric",
            },
          ),
          _ = new Date();
        __webpack_require__.setHours(0, 0, 0, 0);
        const _ =
            Math.floor(__webpack_require__.getTime() / 1e3) == _.timestamp,
          _ = _.appsToday?.filter((_) => _.wishlisted).length,
          _ = Math.max(_.maxGames, _),
          _ = _ == _.appsToday?.length,
          _ =
            (0, _._)(() =>
              _.appsToday?.filter((_) => !_._.Get().BIsGameIgnored(_.appid)),
            ) ?? [],
          _ =
            1 == _.maxNumGamesInWeek ||
            _.appsToday?.length <= Math.floor(_.maxNumGamesInWeek / 2)
              ? "library"
              : "main";
        return (0, _.jsxs)(_._, {
          className: (0, _._)(_.Day, _ && _.Today),
          children: [
            (0, _.jsx)(_._, {
              className: _.DateHeader,
              children: _,
            }),
            (0, _.jsxs)(_._, {
              className: _.GameList,
              children: [
                _?.map((_, _) =>
                  (0, _.jsx)(
                    _._,
                    {
                      className: _.CalendarAppEntry,
                      children: (0, _.jsx)(_._, {
                        capsule: {
                          _: _.appid,
                        },
                        imageType: _,
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
                    _.appid,
                  ),
                ),
                !_ &&
                  _ < _.appsToday?.length &&
                  (0, _.jsx)(_._, {
                    className: _.ShowMoreButton,
                    onClick: () => _.setMaxGames(_.appsToday.length),
                    children: (0, _._)(
                      "#PersonalCalendar_ShowMore",
                      _.appsToday.length,
                    ),
                  }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const _ = new Date(1e3 * _.timestamp).toLocaleDateString(
            _._.GetPreferredLocales(),
            {
              weekday: "long",
            },
          ),
          _ = new Date();
        __webpack_require__.setHours(0, 0, 0, 0);
        const _ = Math.floor(__webpack_require__.getTime() / 1e3),
          _ = _ == _.timestamp,
          _ =
            (0, _._)(() =>
              _.appsToday?.filter((_) => !_._.Get().BIsGameIgnored(_.appid)),
            ) ?? [];
        return _.timestamp < _
          ? null
          : (0, _.jsxs)(_._, {
              className: (0, _._)(
                _.DayLinear,
                _ && _.Today,
                !_.appsToday?.length && _.Empty,
              ),
              children: [
                (0, _.jsx)(_._, {
                  className: _.DayTitle,
                  children: _,
                }),
                _.appsToday?.length &&
                  (0, _.jsx)(_._, {
                    className: _.LinearDayAppList,
                    children: _?.map((_) =>
                      (0, _.jsx)(
                        _._,
                        {
                          className: _.LinearCalendarAppEntry,
                          children: (0, _.jsx)(_._, {
                            capsule: {
                              _: _.appid,
                            },
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
                        _.appid,
                      ),
                    ),
                  }),
              ],
            });
      }
      const _ = () => {
        const { data: _ } = (0, _._)(_._.LANGUAGE),
          [_, __webpack_require__] = _.useState(_),
          _ = (0, _._)(_.selectedTag, 500, 30, 60, !0),
          {
            maxResultCount: _,
            dayWeekTimestamps: _,
            appReleasesByDay: _,
            userTags: _,
            usesWishlists: _,
          } = _.data || {},
          _ = new Date();
        _.setHours(0, 0, 0, 0);
        const _ = Math.floor(_.getTime() / 1e3),
          _ = new Date();
        _.setDate(_.getDate() - 7);
        const _ = Math.floor(_.getTime() / 1e3),
          {
            appReleasesByDayFiltered: _,
            lastMonthGames: _,
            lastWeekGames: _,
            includeSaturday: _,
          } = _.useMemo(() => {
            if (!_)
              return {
                appReleasesByDayFiltered: [],
                lastMonthGames: [],
                lastWeekGames: [],
              };
            const _ = _?.flat() ?? [];
            const _ = (function (_, _, _, _, _) {
                const _ = Object.entries(_).map(
                  ([_, _]) => (
                    (_ = _.filter((_) => _.rank < _)),
                    _ && (_ = _.filter((_) => !_.owned)),
                    _ &&
                      (_ = _.filter(
                        (_) => !_.earlyaccess || _.fromearlyaccess,
                      )),
                    _ != _.Show &&
                      (_ = _.filter((_) => {
                        switch (_) {
                          case _.Hide:
                            return !_.wishlisted;
                          case _.Only:
                            return _.wishlisted;
                        }
                      })),
                    [_, _]
                  ),
                );
                return Object.fromEntries(_);
              })(
                _,
                _.cResultsToShow,
                _.bHideOwned,
                _.bHideEarlyAccess,
                _.wishlistDisplay,
              ),
              _ = _.filter((_, _) => _ % 7 == 6);
            let _ = 0;
            for (const _ of _) _ < _ || (_ += _[_]?.length ?? 0);
            const _ = _ >= 3;
            for (let _ = 0; _ < _.length; _ += 1) {
              if (_ % 7 == 0 && _[_[_]]?.length > 0) {
                const _ = _[_ + 1];
                _ < _.length - 1 &&
                  (_[_] || (_[_] = []), _[_].push(..._[_[_]]), (_[_[_]] = []));
              }
              if (_ % 7 == 6 && !_ && _[_[_]]?.length > 0) {
                const _ = _[_ + 2];
                _ < _.length - 2 &&
                  (_[_] || (_[_] = []), _[_].push(..._[_[_]]), (_[_[_]] = []));
              }
            }
            const _ = [],
              _ = [];
            for (const _ of _)
              _ <= _ &&
                (_ < _ ? _.push(...(_?.[_] ?? [])) : _.push(...(_?.[_] ?? [])));
            return (
              _.sort((_, _) => _.rank - _.rank),
              _.sort((_, _) => _.rank - _.rank),
              {
                appReleasesByDayFiltered: _,
                lastMonthGames: _,
                lastWeekGames: _,
                includeSaturday: _,
              }
            );
          }, [
            _,
            _.cResultsToShow,
            _.bHideOwned,
            _.wishlistDisplay,
            _.bHideEarlyAccess,
            _,
            _,
            _,
          ]);
        return _.data && !_._.logged_in
          ? (0, _.jsxs)(_._, {
              className: _.PersonalCalendarLoginPrompt,
              children: [
                (0, _.jsx)(_._, {
                  className: _.Text,
                  children: (0, _._)("#PersonalCalendar_LoginPrompt"),
                }),
                (0, _.jsx)(_._, {
                  className: (0, _._)(_.LoginButton),
                  onClick: _._,
                  children: (0, _.jsx)("span", {
                    children: (0, _._)("#LoginButton"),
                  }),
                }),
              ],
            })
          : (0, _.jsx)(_._, {
              controller: "personalcalendar",
              method: "default",
              feature: "capsule",
              children: (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  className: (0, _._)(
                    _.PersonalCalendarApp,
                    _.isFetching && _.Refreshing,
                  ),
                  children: (0, _.jsxs)(_._, {
                    className: _.PersonalCalendarContainer,
                    children: [
                      (0, _.jsx)(_, {
                        count: _.data ? _.cResultsToShow : void 0,
                      }),
                      !_._.steamid && (0, _.jsx)(_, {}),
                      _.data &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(_, {
                              state: _,
                              onChange: __webpack_require__,
                              tagMap: _,
                              userTags: _,
                              maxResultsToShow: _,
                              usesWishlists: _,
                            }),
                            _.length > 0 &&
                              (0, _.jsx)(_, {
                                games: _,
                                includeSaturday: _,
                              }),
                            _.length > 0 &&
                              (0, _.jsx)(_, {
                                games: _,
                                includeSaturday: _,
                              }),
                            (0, _.jsx)(_, {
                              dayWeekTimestamps: _,
                              appReleasesByDay: _,
                              todayTimestamp: _,
                              includeSaturday: _,
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
