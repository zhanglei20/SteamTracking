/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [349],
  {
    85427: (e) => {
      e.exports = {
        AppHeaderCtn: "_1E99FsAAFaUjsZvZ4P5Vzl",
        AppHeaderRow: "_90TlYhcg-nmOFhraNLUeZ",
        AppName: "o1m9BbS1X5-LqjZ8B1v64",
        PageName: "_1qzjiDNpGZYKIvwBx1el1t",
        PageSubTitle: "RrvoHJVvvZtgasOhRJTbT",
        PageSection: "_2j6xq7lPsl9WaiSWYe6FXz",
        BackgroundGradient: "_2Xm3_sNhoAPpV25YOHUm8A",
        Highlight: "YkEMN4dqPVdvdufkn7yLq",
        ItemSection: "_3p4EX6xLxF9ccx1Y_jNDCa",
        HowToGet: "_3Ivasew2xNa_b5CaL7a_In",
        FreeQuestCtn: "_1deYqyFU74gu0n6WzNrTmn",
        QuestInstructions: "_1G50d530t6b5H3PiVNOPBQ",
        QuestName: "kkqhGQQsuX6fr0UUwIxXg",
        ProgressBar: "_16EW5nb2jZ7nNNJtJknVYf",
        ItemCategoryCtn: "aaosYB-OO-EJn70ocmC-J",
        CategoryName: "_1FN5OnaWAzybq4J_ozBIsY",
        SectionLine: "KJMVW9vv7xeG9RxSrn1AZ",
        PointShopLink: "v75cc6-VG2tzRr_W4eQ12",
        ItemCtn: "_1QrzyWO-Wl--rxSjTbLz5p",
        ProgressIndicationCtn: "_15b3bAwBMv-0X3I6uaac6o",
        ProgressText: "HqRb17BK0zUwRPQXbHm9x",
        ItemBackground: "_1b-IbdTr9R3ZKUWl3WIZj5",
        ImgCtn: "_3i3mybB0zixbTQe_pqH6N2",
        ImgGrey: "_3n2Ur4vZ1ojk_YPqd7iZfq",
        PageBackground: "zZIkdIHeeChogTvItWGO2",
      };
    },
    49395: (e) => {
      e.exports = { ProfileSubPageContainer: "_1npy3GFjDHZPSB66m0_INb" };
    },
    56330: (e) => {
      e.exports = {
        ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
        ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
        ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
        ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
        ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
        WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
        WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
        WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
        WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
        Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
        WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
        InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
        InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
        InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
        InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
        Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
        NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
        ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
        SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
      };
    },
    40594: (e) => {
      e.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    85215: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => U });
      var a = n(45699),
        i = n(12447),
        r = n(76217),
        s = n(37788),
        o = n(84143),
        m = n(8527),
        l = n(84518),
        c = n(60014),
        _ = n(90626),
        d = n(24484);
      var u = n(91336),
        p = n(55263),
        g = n(25706),
        I = n(31011),
        f = n(52038),
        E = n(61859),
        h = n(91675),
        v = n(73745),
        y = n(49395),
        S = n.n(y),
        C = n(85427),
        w = n.n(C),
        N = n(62490);
      function T(e) {
        const {
            oRewardDefinition: t,
            rgRewardItems: n,
            rgUserItemRewarded: i,
            rgCommunityItemDefs: l,
            bViewingOwnProfile: c,
          } = e,
          d = (0, _.useMemo)(() => {
            const e = new Set();
            null == i ||
              i.forEach((t) => {
                e.add(
                  `${t.item_definition.appid}_${t.item_definition.community_item_type}`,
                );
              });
            const t = new Set();
            n.forEach((e) => {
              t.add(`${e.appid}_${e.community_item_type}`);
            });
            const a = new Map();
            return (
              l
                .filter((e) => e.active)
                .filter((e) => t.has(`${e.appid}_${e.item_type}`))
                .sort((t, n) => {
                  const a = e.has(`${t.appid}_${t.item_type}`),
                    i = e.has(`${n.appid}_${n.item_type}`);
                  return (a && i) || (!a && !i)
                    ? n.item_type - t.item_type
                    : a
                      ? -1
                      : 1;
                })
                .forEach((t) => {
                  const n = e.has(`${t.appid}_${t.item_type}`);
                  a.has(t.item_class) || a.set(t.item_class, []),
                    a.get(t.item_class).push({ ...t, user_has_item: n });
                }),
              a
            );
          }, [n, i, l]);
        return _.createElement(
          s.YZ,
          {
            navEntryPreferPosition: o.iU.LAST,
            preferredFocus: !0,
            className: w().FreeQuestCtn,
          },
          _.createElement(
            "div",
            { className: w().HowToGet },
            (0, E.we)("#ItemCollection_ForFree_Title"),
          ),
          _.createElement(
            r.Z,
            null,
            _.createElement(
              "div",
              { className: w().QuestInstructions },
              _.createElement(
                "div",
                { className: w().QuestName },
                (0, E.we)("#ItemCollection_ForFree_Discovery"),
              ),
              _.createElement(
                "p",
                null,
                (0, h.nR)(t.rtime_start_time, t.rtime_end_time),
              ),
              _.createElement(
                "p",
                null,
                (0, E.we)("#ItemCollection_ForFree_Discovery_desc"),
                _.createElement("br", null),
                (0, E.oW)(
                  "#ItemCollection_ForFree_Discovery_desc2",
                  _.createElement(a.Ii, {
                    href: `${m.TS.STORE_BASE_URL}explore?dq=widget`,
                  }),
                ),
              ),
            ),
            Array.from(d.keys()).map((e) =>
              _.createElement(D, {
                key: "free_item_class_" + e,
                bViewingOwnProfile: c,
                nAppID: t.appid,
                itemClass: e,
                rgItems: d.get(e),
                bHideItemStore: !0,
              }),
            ),
          ),
        );
      }
      function D(e) {
        const {
            rgItems: t,
            itemClass: n,
            nAppID: a,
            bViewingOwnProfile: i,
          } = e,
          m = (0, _.useMemo)(
            () => t.filter((e) => e.user_has_item).length,
            [t],
          ),
          l = t.length ? Math.floor((100 * m) / t.length) : 0;
        return _.createElement(
          s.YZ,
          {
            navEntryPreferPosition: o.iU.LAST,
            preferredFocus: !0,
            className: (0, f.A)(w().ItemSection),
          },
          _.createElement(P, { ...e }),
          _.createElement(
            r.Z,
            { className: w().ItemCategoryCtn },
            _.createElement(
              r.Z,
              { className: w().CategoryName },
              (0, E.we)("#Sale_Section_PointShop_class_" + n),
            ),
            _.createElement("div", { className: w().SectionLine }),
            _.createElement(A, { ...e }),
          ),
          _.createElement(
            r.Z,
            { className: w().ItemCtn },
            _.createElement(
              r.Z,
              { className: w().ProgressIndicationCtn },
              _.createElement(I.A, { nPercent: l }),
              _.createElement(
                "div",
                { className: w().ProgressText },
                _.createElement(
                  "div",
                  null,
                  (0, E.we)("#ItemCollection_Collected_Item", m, t.length),
                ),
                _.createElement(
                  "div",
                  null,
                  (0, E.we)("#ItemCollection_Collected_Line"),
                ),
              ),
            ),
            t.map((e) =>
              _.createElement(M, { key: "item_" + e.item_type, item: e }),
            ),
          ),
        );
      }
      function P(e) {
        const { itemClass: t, nAppID: n } = e;
        return 2 !== t
          ? null
          : _.createElement(
              r.Z,
              { className: w().HowToGet },
              (0, E.we)("#ItemCollection_GameCards_Title"),
            );
      }
      function A(e) {
        const {
          itemClass: t,
          nAppID: n,
          bViewingOwnProfile: i,
          bHideItemStore: r,
        } = e;
        return 2 == t && i
          ? _.createElement(
              a.Ii,
              {
                href: `${m.TS.COMMUNITY_BASE_URL}my/gamecards/${n}`,
                className: w().PointShopLink,
              },
              (0, E.we)("#ItemCollection_Visit_Badge"),
            )
          : r
            ? null
            : _.createElement(
                a.Ii,
                {
                  href: `${m.TS.STORE_BASE_URL}points/shop/app/${n}`,
                  className: w().PointShopLink,
                },
                (0, E.we)("#ItemCollection_Visit"),
              );
      }
      function M(e) {
        const { item: t } = e,
          [n, a] = (0, v.OP)(),
          i = t.user_has_item || n,
          s = !i,
          o =
            (!i && 2 != t.item_class && 8 != t.item_class) || 4 == t.item_class
              ? void 0
              : t.item_image_small;
        return _.createElement(
          r.Z,
          {
            ...a,
            onFocus: a.onMouseEnter,
            onBlur: a.onMouseLeave,
            focusable: !0,
            className: w().ItemBackground,
          },
          _.createElement(g.Qc, {
            appid: t.appid,
            item_image_large: t.item_image_large,
            item_image_small: o,
            item_title: t.item_title,
            item_movie_mp4: i ? t.item_movie_mp4_small : void 0,
            item_movie_webm: i ? t.item_movie_webm_small : void 0,
            className: (0, f.A)({ [w().ImgCtn]: !0, [w().ImgGrey]: s }),
            videoClassName: w().ImgCtn,
          }),
        );
      }
      const b = { include_assets: !0 };
      function k(e) {
        const { nAppID: t } = e,
          [n] = (0, p.t7)(t, b);
        return n
          ? _.createElement(
              r.Z,
              { className: w().AppHeaderCtn },
              _.createElement(
                r.Z,
                null,
                _.createElement(
                  r.Z,
                  { className: w().AppHeaderRow },
                  _.createElement(r.Z, { className: w().AppName }, n.GetName()),
                  _.createElement(
                    r.Z,
                    { className: w().PageName },
                    (0, E.we)("#ItemCollection_Title"),
                  ),
                ),
                _.createElement(
                  r.Z,
                  null,
                  (0, E.we)("#ItemCollection_EventSubTitle"),
                ),
              ),
            )
          : null;
      }
      const U = function (e) {
        const {
            strProfileName: t,
            strSteamId: n,
            bViewingOwnProfile: a,
            rgCommunityItemDefs: s,
            rgUserCommunityItems: o,
            nAppID: p,
            rgRewardItems: g,
            rgUserItemRewarded: h,
            oRewardDefinition: v,
          } = (function () {
            const [e, t] = (0, _.useState)(() =>
              (0, d.Tc)("profile-itemcollection", "itemcollection_config"),
            );
            return e;
          })(),
          y = (0, u.A)(),
          C = (0, _.useMemo)(() => {
            const e = new Set();
            o.forEach((t) => {
              e.add(`${t.appid}_${t.item_type}`);
            });
            const t = new Set();
            null == g ||
              g.forEach((e) => {
                t.add(e.community_item_type);
              });
            const n = new Map();
            return (
              s
                .filter(
                  (e) =>
                    e.active &&
                    !e.deleted &&
                    !t.has(e.item_type) &&
                    1 != e.item_class,
                )
                .sort((t, n) => {
                  const a = e.has(`${t.appid}_${t.item_type}`),
                    i = e.has(`${n.appid}_${n.item_type}`);
                  return (a && i) || (!a && !i)
                    ? n.item_type - t.item_type
                    : a
                      ? -1
                      : 1;
                })
                .forEach((t) => {
                  n.has(t.item_class) || n.set(t.item_class, []),
                    n
                      .get(t.item_class)
                      .push({
                        ...t,
                        user_has_item: e.has(`${t.appid}_${t.item_type}`),
                      });
                }),
              n
            );
          }, [s, g, o]),
          P = (0, _.useMemo)(() => {
            if (C.has(3)) {
              const e = C.get(3).filter((e) => {
                JSON.parse(e.item_key_values);
                return e.item_movie_webm && e.item_movie_mp4;
              });
              if (e.length) return (0, N.fW)(e), e[0];
            }
            return null;
          }, [C]),
          A = (0, _.useMemo)(() => {
            let e = new Map();
            return (
              s.forEach((t) => {
                e.set(t.item_type, t);
              }),
              e
            );
          }, [s]),
          M = (0, _.useMemo)(
            () => Array.from(C.keys()).sort((e, t) => t - e),
            [C],
          ),
          [b, U, B] = _.useMemo(() => {
            const e =
                null == o
                  ? void 0
                  : o.filter((e) => {
                      const t = A.get(e.item_type);
                      return !t || (2 != t.item_class && 1 != t.item_class);
                    }),
              t = s.filter((e) => 2 != e.item_class && 1 != e.item_class),
              n = e.length || 0,
              a = t.length || 0;
            return [a ? Math.floor((100 * n) / a) : 0, a, n];
          }, [A, s, o]);
        return _.createElement(
          i.u,
          { navID: "ItemCollection", NavigationManager: y },
          _.createElement(
            c.nn,
            { feature: "itemcollections" },
            _.createElement(
              l.A,
              { appID: p },
              _.createElement(
                r.Z,
                { className: S().ProfileSubPageContainer },
                P &&
                  _.createElement(
                    "div",
                    { className: w().PageBackground },
                    _.createElement(
                      "video",
                      {
                        preload: "auto",
                        playsInline: !0,
                        muted: !0,
                        autoPlay: !0,
                        loop: !0,
                        poster: `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${p}/${P.item_image_large}`,
                      },
                      _.createElement("source", {
                        src: `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${p}/${P.item_movie_webm}`,
                        type: "video/webm",
                      }),
                      Boolean(!m.TS.IN_CLIENT) &&
                        _.createElement("source", {
                          src: `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${p}/${P.item_movie_mp4}`,
                          type: "video/mp4",
                        }),
                    ),
                  ),
                _.createElement(k, { nAppID: p }),
                _.createElement(
                  "div",
                  { className: w().PageSection },
                  _.createElement(
                    "span",
                    null,
                    (0, E.we)("#ItemCollection_Collected", B, U),
                  ),
                  _.createElement(I.z, {
                    className: w().ProgressBar,
                    animate: !0,
                    nPercent: b,
                    indeterminate: !1,
                  }),
                ),
                Boolean(v) &&
                  _.createElement(
                    "div",
                    {
                      className: (0, f.A)(
                        w().PageSection,
                        w().BackgroundGradient,
                        w().Highlight,
                      ),
                    },
                    _.createElement(T, {
                      oRewardDefinition: v,
                      bViewingOwnProfile: a,
                      rgRewardItems: g,
                      rgUserItemRewarded: h,
                      rgCommunityItemDefs: s,
                    }),
                  ),
                _.createElement(
                  "div",
                  {
                    className: (0, f.A)(
                      w().PageSection,
                      w().BackgroundGradient,
                    ),
                  },
                  _.createElement(
                    "div",
                    { className: w().HowToGet },
                    (0, E.we)("#ItemCollection_ForPoints_Title"),
                  ),
                  M.map((e) =>
                    _.createElement(D, {
                      key: "item_class_" + e,
                      nAppID: p,
                      itemClass: e,
                      rgItems: C.get(e),
                      bViewingOwnProfile: a,
                      bHideItemStore: 2 == e,
                    }),
                  ),
                ),
              ),
            ),
          ),
        );
      };
    },
    12447: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => m });
      var a = n(8871),
        i = n(90626),
        r = n(78327),
        s = n(85585),
        o = n(7445);
      function m(e) {
        const { children: t, navTreeRef: n, NavigationManager: m, ...l } = e,
          c = i.useRef(),
          _ = (0, a.Ue)(c, n);
        if ((0, r.Qn)()) {
          const e = window.__nav_tree_root;
          return i.createElement(
            s.B2,
            { ...l, navTreeRef: _, parentEmbeddedNavTree: e },
            i.createElement(o.q, null, t),
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    84518: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => m });
      var a = n(60014),
        i = n(90626),
        r = n(62093),
        s = n(30600),
        o = n(8871);
      function m(e) {
        const { appID: t, feature: n, depth: m, children: l } = e,
          c = (0, a.ru)(n, m),
          _ = (0, r.b)(),
          [d, u] = i.useState(void 0),
          p = i.useCallback(
            (e) => {
              e.isIntersecting &&
                u((e) =>
                  (null == e ? void 0 : e.appID) == t &&
                  (null == e ? void 0 : e.snr) == c
                    ? e
                    : { appID: t, snr: c },
                );
            },
            [t, c],
          );
        (0, i.useEffect)(() => {
          d && null != d.appID && _.AddImpression(d.appID, d.snr);
        }, [_, d]);
        const g = (0, s.BL)(p),
          I = t && (!d || (d.appID != t && d.snr != c)),
          f = (0, o.Ue)(l.ref, I ? g : void 0);
        return i.cloneElement(l, { ref: f });
      }
    },
    62093: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => r });
      var a = n(90626);
      const i = a.createContext({
        AddImpression: () => {
          console.log("Impression Tracking not enabled");
        },
        BIsValid: () => !1,
      });
      function r() {
        return a.useContext(i);
      }
    },
    24216: (e, t, n) => {
      "use strict";
      n.d(t, { d2: () => _ });
      var a = n(41735),
        i = n.n(a),
        r = n(90626),
        s = n(68797),
        o = n(6144),
        m = n(73745),
        l = n(78327);
      class c {
        GetItemDefForAppID(e) {
          return this.m_mapAppToDefs.get(e);
        }
        GetItemDefsChangeForEventID(e) {
          return (
            this.m_listChangeCallback.has(e) ||
              this.m_listChangeCallback.set(e, new o.lu()),
            this.m_listChangeCallback.get(e)
          );
        }
        BHasLoadedDef(e) {
          return this.m_mapPromises.has(e);
        }
        SetTestItemDefs(e, t) {
          this.m_mapAppToDefs.set(e, t),
            this.GetItemDefsChangeForEventID(e).Dispatch(t),
            this.m_mapPromises.set(e, Promise.resolve(1));
        }
        async LoadAppCommunityItems(e, t) {
          return e
            ? (this.m_mapPromises.has(e) ||
                this.m_mapPromises.set(
                  e,
                  this.InternalLoadAppCommunityItems(e, t),
                ),
              this.m_mapPromises.get(e))
            : 2;
        }
        async InternalLoadAppCommunityItems(e, t) {
          var n, a;
          let r = null;
          try {
            const o =
                l.TS.COMMUNITY_BASE_URL +
                (t
                  ? "minigame/ajaxgetgameitemdefsforeditor"
                  : "minigame/ajaxgetgameitemdefs"),
              m = {
                appid: e,
                origin: self.origin,
                l: l.TS.LANGUAGE,
                sessionid: t ? l.TS.SESSIONID : void 0,
              },
              c = await i().get(o, { params: m, withCredentials: t });
            if (
              200 == (null == c ? void 0 : c.status) &&
              1 ==
                (null === (n = null == c ? void 0 : c.data) || void 0 === n
                  ? void 0
                  : n.success) &&
              (null === (a = null == c ? void 0 : c.data) || void 0 === a
                ? void 0
                : a.item_definitions)
            )
              return (
                this.m_mapAppToDefs.set(e, c.data.item_definitions),
                this.GetItemDefsChangeForEventID(e).Dispatch(
                  c.data.item_definitions,
                ),
                1
              );
            r = (0, s.H)(c);
          } catch (e) {
            r = (0, s.H)(e);
          }
          return (
            console.error(
              "CSaleMiniGameItemDefStore.InternalLoadAppCommunityItems failed: on appid " +
                e +
                " edit? " +
                t +
                " error: " +
                (null == r ? void 0 : r.strErrorMsg),
              r,
            ),
            2
          );
        }
        static Get() {
          return (
            c.s_Singleton ||
              ((c.s_Singleton = new c()),
              c.s_Singleton.Init(),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = c.s_Singleton)),
            c.s_Singleton
          );
        }
        constructor() {
          (this.m_mapAppToDefs = new Map()),
            (this.m_mapPromises = new Map()),
            (this.m_listChangeCallback = new Map());
        }
        Init() {}
      }
      function _(e, t, n) {
        const a = (function (e, t) {
            const [n, a] = (0, r.useState)(c.Get().GetItemDefForAppID(e));
            return (
              (0, r.useEffect)(() => {
                e &&
                  !c.Get().BHasLoadedDef(e) &&
                  c.Get().LoadAppCommunityItems(e, t);
              }, [e, t]),
              (0, m.hL)(c.Get().GetItemDefsChangeForEventID(e), a),
              n
            );
          })(e, n),
          [i, s] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(() => {
            if (e && a && null == i) {
              const i = a.find(
                (a) => (n || a.active) && a.appid == e && a.item_type == t,
              );
              i && s(i);
            }
          }, [i, a, e, t, n]),
          i
        );
      }
    },
    25706: (e, t, n) => {
      "use strict";
      n.d(t, { Qc: () => c, Zx: () => d, f8: () => _ });
      var a = n(65946),
        i = n(90626),
        r = n(24216),
        s = n(22797),
        o = n(61859),
        m = n(78327),
        l = n(56330);
      function c(e) {
        const {
          appid: t,
          item_image_small: n,
          item_image_large: a,
          item_movie_mp4: r,
          item_movie_webm: s,
          item_title: o,
        } = e;
        if (
          (null == r ? void 0 : r.length) > 0 &&
          (null == s ? void 0 : s.length) > 0
        ) {
          const a = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n}`,
            o = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${s}`,
            l = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${r}`;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "video",
              {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: a,
                className: e.videoClassName,
              },
              i.createElement("source", { src: o, type: "video/webm" }),
              Boolean(!m.TS.IN_CLIENT) &&
                i.createElement("source", { src: l, type: "video/mp4" }),
            ),
          );
        }
        {
          const r = `${m.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n || a}`;
          return i.createElement("img", {
            className: e.className,
            src: r,
            alt: o,
          });
        }
      }
      function _(e) {
        const { appid: t, community_item_type: n, bForEdit: a } = e,
          m = (0, r.d2)(t, n, a),
          _ =
            m && !m.active
              ? i.createElement(
                  "div",
                  { className: l.WarningStylesBackground },
                  (0, o.we)("#Sale_Section_RewardShelf_ItemInActiveWarning"),
                )
              : void 0;
        return m
          ? i.createElement(i.Fragment, null, i.createElement(c, { ...m }), _)
          : i.createElement(s.t, {
              size: "small",
              string: (0, o.we)("#Loading"),
            });
      }
      function d(e) {
        const { section: t, rewardDef: n, language: s } = e,
          o = (0, r.d2)(n.appid, n.community_item_type),
          [l] = (0, a.q3)(() => {
            var e;
            return [
              Boolean(
                null === (e = t.rewards) || void 0 === e
                  ? void 0
                  : e.show_reward_item_name,
              ),
            ];
          });
        let c;
        switch (n.community_class) {
          case 14:
          case 15:
            c = `${m.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
            break;
          case 1:
            c = `${m.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
            break;
          case 3:
          case 8:
            c = `${m.TS.COMMUNITY_BASE_URL}my/edit/background`;
            break;
          case 13:
            c = `${m.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
            break;
          case 11:
            c = `${m.TS.COMMUNITY_BASE_URL}chat`;
        }
        return i.createElement(
          "a",
          { href: c },
          i.createElement(_, {
            appid: null == n ? void 0 : n.appid,
            community_item_type: null == n ? void 0 : n.community_item_type,
          }),
          Boolean(l) &&
            i.createElement("span", null, null == o ? void 0 : o.item_name),
        );
      }
    },
    31011: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o, z: () => s });
      var a = n(90626),
        i = n(52038),
        r = n(40594);
      function s({ nPercent: e, indeterminate: t, animate: n, className: s }) {
        return a.createElement("div", {
          className: (0, i.A)(
            r.ProgressBar,
            n && r.AnimateProgress,
            t && r.Indeterminate,
            s,
          ),
          style: { "--percent": e / 100 },
        });
      }
      const o = ({ nPercent: e, size: t = 120, strokeWidth: n = 20 }) => {
        const s = (t - n) / 2,
          o = 2 * Math.PI * s,
          m = o - (e / 100) * o,
          l = 100 == e;
        return a.createElement(
          "div",
          { className: (0, i.A)({ [r.Circular]: !0, [r.Full]: l }) },
          a.createElement(
            "svg",
            { width: t, height: t, style: { transform: "rotate(-90deg)" } },
            a.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: s,
              stroke: "#0c131d",
              strokeWidth: n,
              fill: "none",
            }),
            a.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: s,
              stroke: "#1a9fff",
              strokeWidth: n,
              fill: "none",
              strokeDasharray: o,
              strokeDashoffset: m,
              style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
            }),
          ),
        );
      };
    },
  },
]);
