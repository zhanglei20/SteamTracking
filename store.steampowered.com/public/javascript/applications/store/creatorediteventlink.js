/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3687],
  {
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
    93474: (e) => {
      e.exports = {
        ListsCtn: "tBftQdkNwMsCS3Jnef1UH",
        EntryList: "_2XXQSmtLL-udq2lLiHeB6Q",
        Entry: "_1Cd1TJ4SgK5DkDNbI-USUL",
        Active: "bYXdHZaVexq93H1xDBGqm",
        Label: "dI3ijAItl10LuKeR9XCdK",
        UnpublishedState: "_1tt9jL7Dj8I6_LezFi2Zgv",
        PublishedAndNotSelectedState: "_2XhRaA3elALg0OQnynUZu4",
        SelectedSVG: "_3Niy5UbG2M3zTi6wUY2jda",
        HeaderRow: "_2PLSeE9RayjVbZKYqcszIq",
        ManageButton: "_2F5-HSU7JNjiVuDm_h_I4D",
        MustPublish: "oUfRC_JxvbarFSmiUwBCn",
        ActionsRow: "_27NYV-vucABpZz6K_oGGgu",
        SVGIcon: "_3jIkQOyf1K28G5lxJiiDkV",
      };
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => c,
        Gg: () => d,
        MS: () => h,
        Ow: () => u,
        YM: () => v,
        mZ: () => _,
        t7: () => a,
        zX: () => S,
      });
      var s = n(41735),
        r = n.n(s),
        i = n(90626),
        o = n(84933),
        l = n(16021);
      function c(e, t, n, s) {
        const c = (0, i.useRef)(void 0),
          a = (0, i.useRef)(void 0),
          u = (0, o.CH)();
        c.current = e;
        const [d, _] = (0, i.useState)(void 0),
          {
            include_assets: m,
            include_release: S,
            include_platforms: h,
            include_all_purchase_options: v,
            include_screenshots: g,
            include_trailers: E,
            include_ratings: f,
            include_tag_count: p,
            include_reviews: I,
            include_basic_info: w,
            include_supported_languages: j,
            include_full_description: C,
            include_included_items: b,
            include_assets_without_overrides: k,
            apply_user_filters: D,
            include_links: L,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            const n = {
              include_assets: m,
              include_release: S,
              include_platforms: h,
              include_all_purchase_options: v,
              include_screenshots: g,
              include_trailers: E,
              include_ratings: f,
              include_tag_count: p,
              include_reviews: I,
              include_basic_info: w,
              include_supported_languages: j,
              include_full_description: C,
              include_included_items: b,
              include_assets_without_overrides: k,
              apply_user_filters: D,
              include_links: L,
            };
            let i = null;
            return (
              !e ||
                e < 0 ||
                l.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && s && s == a.current) ||
                (s !== a.current && (_(void 0), (a.current = s)),
                (i = r().CancelToken.source()),
                l.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    i?.token.reason || c.current !== e || _(1 == t), u();
                  })),
              () => i?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, s, d, m, S, h, v, g, E, f, p, I, w, j, C, b, k, D, L, u]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (l.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!l.A.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const x = l.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return x ? [x, 3] : [null, 2];
      }
      function a(e, t, n) {
        return c(e, 0, t, n);
      }
      function u(e, t, n) {
        return c(e, 2, t, n);
      }
      function d(e, t, n) {
        return c(e, 1, t, n);
      }
      function _(e, t, n) {
        const [s, r] = c(e, t, n);
        let i;
        1 != s?.GetStoreItemType() ||
          s.GetAssets()?.GetHeaderURL() ||
          1 != s?.GetIncludedAppIDs().length ||
          (i = s.GetIncludedAppIDs()[0]);
        const [o, l] = a(i, n);
        return i && o?.BIsVisible() ? [o, l] : [s, r];
      }
      function m(e, t, n, s) {
        const c = (0, o.CH)(),
          {
            include_assets: a,
            include_release: u,
            include_platforms: d,
            include_all_purchase_options: _,
            include_screenshots: m,
            include_trailers: S,
            include_ratings: h,
            include_tag_count: v,
            include_reviews: g,
            include_basic_info: E,
            include_supported_languages: f,
            include_full_description: p,
            include_included_items: I,
            include_assets_without_overrides: w,
            apply_user_filters: j,
            include_links: C,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: a,
                include_release: u,
                include_platforms: d,
                include_all_purchase_options: _,
                include_screenshots: m,
                include_trailers: S,
                include_ratings: h,
                include_tag_count: v,
                include_reviews: g,
                include_basic_info: E,
                include_supported_languages: f,
                include_full_description: p,
                include_included_items: I,
                include_assets_without_overrides: w,
                apply_user_filters: j,
                include_links: C,
              },
              s = e.filter(
                (e) =>
                  !(
                    l.A.Get().BHasStoreItem(e, t, n) ||
                    l.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == s.length) return;
            const i = r().CancelToken.source(),
              o = s.map((e) => l.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(o).then(() => {
                i.token.reason || c();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, s, c, a, u, d, _, m, S, h, v, g, E, f, p, I, w, j, C]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              l.A.Get().BHasStoreItem(e, t, n) ||
              l.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          l.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function S(e, t, n) {
        return m(e, 0, t, n);
      }
      function h(e, t, n) {
        return m(e, 2, t, n);
      }
      function v() {
        i.useEffect(
          () => (
            l.A.Get().SetReturnUnavailableItems(!0),
            () => l.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    71298: (e, t, n) => {
      "use strict";
      n.d(t, { Hh: () => u, vs: () => a });
      var s = n(7850),
        r = n(90626),
        i = n(51706),
        o = n(56330),
        l = n(61859),
        c = n(22797);
      function a(e) {
        const [t, n] = (0, r.useState)(() => Boolean(e)),
          [s, i] = (0, r.useState)(!1),
          [o, l] = (0, r.useState)(!1),
          [c, a] = (0, r.useState)(null),
          [u, d] = (0, r.useState)(null),
          [_, m] = (0, r.useState)(null),
          [S, h] = (0, r.useState)(null),
          [v, g] = (0, r.useState)(null);
        return {
          bLoading: t,
          bError: s,
          bSuccess: o,
          strError: c,
          strSuccess: u,
          elSuccess: S,
          elError: _,
          strThrobber: v,
          fnSetLoading: n,
          fnSetError: i,
          fnSetSuccess: l,
          fnSetStrError: a,
          fnSetStrSuccess: d,
          fnSetElSuccess: h,
          fnSetElError: m,
          fnSetThrobber: g,
        };
      }
      function u(e) {
        const {
            strDialogTitle: t,
            state: n,
            closeModal: r,
            strThrobber: a,
          } = e,
          {
            bLoading: u,
            bError: d,
            bSuccess: _,
            strError: m,
            strSuccess: S,
            elSuccess: h,
            elError: v,
            strThrobber: g,
          } = n;
        return d || m || v
          ? (0, s.jsxs)(i.o0, {
              strTitle: t,
              bAlertDialog: !0,
              closeModal: r,
              className: o.SuccessErrorDialog,
              children: [
                Boolean(m) &&
                  (0, s.jsx)("div", {
                    className: o.ErrorStylesWithIcon,
                    children:
                      m || (0, l.we)("#Error_ErrorCommunicatingWithNetwork"),
                  }),
                Boolean(v) && v,
              ],
            })
          : _ || S || h
            ? (0, s.jsx)(i.o0, {
                strTitle: t,
                strDescription: S || (0, l.we)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: r,
                className: o.SuccessErrorDialog,
                children: (0, s.jsx)(s.Fragment, { children: Boolean(h) && h }),
              })
            : (0, s.jsx)(i.o0, {
                strTitle: t,
                className: o.SuccessErrorDialog,
                bProgressDialog: !0,
                closeModal: () => {},
                children: (0, s.jsx)(c.t, {
                  string: a || g || (0, l.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              });
      }
    },
    87731: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => x });
      var s = n(7850),
        r = n(90626),
        i = n(78327),
        o = n(41735),
        l = n.n(o),
        c = n(61859),
        a = n(22837),
        u = n(17720),
        d = n(80902),
        _ = n(51614),
        m = n(6379),
        S = n(84933),
        h = n(22797),
        v = n(93474),
        g = n.n(v),
        E = n(75113),
        f = n(12155),
        p = n(81393),
        I = n(32754),
        w = n(53835),
        j = n(78395),
        C = n(71298),
        b = n(21869),
        k = n(8092),
        D = n(52038),
        L = n(26408);
      function x(e) {
        const { clanAccountID: t } = e,
          n = (0, S.YR)(() => new u.b(t, i.TS.EUNIVERSE, 7, 0)),
          {
            bIsFetching: o,
            rgEventModels: a,
            fnRefetch: _,
          } = (function (e) {
            const {
              data: t,
              isFetching: n,
              refetch: s,
            } = (0, d.I)({
              queryKey: [
                "DraftAndHiddenPartnerEvents",
                e.ConvertTo64BitString(),
              ],
              queryFn: async () => {
                const t =
                    i.TS.STORE_BASE_URL +
                    "/curator/" +
                    e.GetAccountID() +
                    "/admin/ajaxgetcreatorhomeevents",
                  n = { l: i.TS.LANGUAGE },
                  s = await l()
                    .get(t, { params: n })
                    .catch(() => {}),
                  r = new Array();
                r.push(
                  ...s.data.creatorhome_event_gids.map((t) =>
                    m.MX.LoadHiddenPartnerEvent(e, t),
                  ),
                );
                return await Promise.all(r);
              },
            });
            return { bIsFetching: n, rgEventModels: t, fnRefetch: s };
          })(n),
          v = `${i.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
          { creatorHome: E, isFetching: f, refetch: p } = (0, k.FV)(t),
          j = E?.GetLinkedEventGID(),
          C = j && a?.some((e) => j == e.GID),
          b = o || f,
          D = () => {
            _(), p();
          },
          L = r.useMemo(
            () => [...(a ?? [])].sort((e, t) => t.startTime - e.startTime),
            [a],
          ),
          x = L.filter((e) => j && j == e.GID),
          A = L.filter((e) => !j || j != e.GID);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(I.he, {
              toolTipContent: (0, c.we)("#CreatorHome_EventLink_Create_ttip"),
              style: { width: "25%" },
              children: (0, s.jsx)(w.jn, {
                onClick: () => window.location.assign(v),
                children: (0, c.we)("#CreatorHome_EventLink_Create"),
              }),
            }),
            (0, s.jsx)("h4", {
              children: (0, c.we)("#CreatorHome_EventLink_Title"),
            }),
            (0, s.jsx)("p", {
              children: (0, c.we)("#CreatorHome_EventLink_Desc"),
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsxs)("div", {
              className: g().ListsCtn,
              children: [
                !C &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("h5", {
                        children: (0, c.we)(
                          "#CreatorHome_EventLink_ActiveListTitle",
                        ),
                      }),
                      (0, s.jsx)("p", {
                        children: (0, c.we)(
                          "#CreatorHome_EventLink_BasicActive",
                        ),
                      }),
                    ],
                  }),
                b && (0, s.jsx)(h.t, {}),
                !b &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      x.length > 0 &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("h5", {
                              children: (0, c.we)(
                                "#CreatorHome_EventLink_ActiveListTitle",
                              ),
                            }),
                            (0, s.jsx)("div", {
                              className: g().EntryList,
                              children: x.map((e) =>
                                (0, s.jsx)(
                                  y,
                                  {
                                    creatorHome: E,
                                    clanSteamID: n,
                                    eventModel: e,
                                    refetch: D,
                                  },
                                  e.GID,
                                ),
                              ),
                            }),
                          ],
                        }),
                      A.length > 0 &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("h5", {
                              children: (0, c.we)(
                                "#CreatorHome_EventLink_InactiveListTitle",
                              ),
                            }),
                            (0, s.jsx)("div", {
                              className: g().EntryList,
                              children: A.map((e) =>
                                (0, s.jsx)(
                                  y,
                                  {
                                    creatorHome: E,
                                    clanSteamID: n,
                                    eventModel: e,
                                    refetch: D,
                                  },
                                  e.GID,
                                ),
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function y(e) {
        const { clanSteamID: t, creatorHome: n, eventModel: o, refetch: u } = e,
          [d, m] = r.useState(!1),
          S = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  i.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                n = new FormData();
              n.append("sessionid", i.TS.SESSIONID), n.append("gid", e.gid);
              const s = await l().post(t, n, { withCredentials: !0 });
              return 1 == s?.data?.success;
            },
          }),
          [h, v] = r.useState(!1),
          [p, I] = r.useState(!1),
          w = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  i.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                n = new FormData();
              n.append("sessionid", i.TS.SESSIONID), n.append("gid", e.gid);
              const s = await l().post(t, n, { withCredentials: !0 });
              return 1 == s?.data?.success;
            },
          }),
          j = n?.GetLinkedEventGID(),
          C = j && j == o.GID,
          b = !C && o.BIsVisibleEvent(),
          k = `${i.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${o.GID}?redir=${window.location.href}`;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(A, {
              active: d,
              mutateAsync: () => S.mutateAsync({ clanSteamID: t, gid: o.GID }),
              onClose: (e) => {
                m(!1), e && u();
              },
              strTitle: (0, c.we)("#Button_Delete"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Delete_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
            }),
            (0, s.jsx)(A, {
              active: h,
              mutateAsync: () => w.mutateAsync({ clanSteamID: t, gid: o.GID }),
              onClose: (e) => {
                v(!1), e && u();
              },
              strTitle: (0, c.we)("#CreatorHome_EventLink_Select"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Select_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Select_Dialog_Error"),
            }),
            (0, s.jsx)(A, {
              active: p,
              mutateAsync: () => w.mutateAsync({ clanSteamID: t, gid: "0" }),
              onClose: (e) => {
                I(!1), e && u();
              },
              strTitle: (0, c.we)("#CreatorHome_EventLink_Clear"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Clear_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Clear_Dialog_Error"),
            }),
            (0, s.jsxs)("div", {
              className: (0, D.A)(g().Entry, C && g().Active),
              children: [
                (0, s.jsxs)("div", {
                  className: g().HeaderRow,
                  children: [
                    (0, s.jsx)("span", {
                      className: g().Label,
                      children: o.GetNameWithFallback((0, a.sf)(i.TS.LANGUAGE)),
                    }),
                    !o.BIsVisibleEvent() &&
                      (0, s.jsxs)("span", {
                        className: g().UnpublishedState,
                        children: [
                          (0, s.jsx)("span", {
                            children: (0, c.we)(
                              "#CreatorHome_EventLink_Unpublished",
                            ),
                          }),
                          (0, s.jsx)(L.o, {
                            tooltip: (0, c.we)(
                              "#CreatorHome_EventLink_Unpublished_ttip",
                            ),
                            small: !0,
                          }),
                        ],
                      }),
                    o.BIsVisibleEvent() &&
                      !C &&
                      (0, s.jsxs)("span", {
                        className: g().PublishedAndNotSelectedState,
                        children: [
                          (0, s.jsx)("span", {
                            children: (0, c.we)(
                              "#CreatorHome_EventLink_PublishedAndNotSelected",
                            ),
                          }),
                          (0, s.jsx)(L.o, {
                            tooltip: (0, c.we)(
                              "#CreatorHome_EventLink_PublishedAndNotSelected_ttip",
                            ),
                            small: !0,
                          }),
                        ],
                      }),
                    b
                      ? (0, s.jsx)(H, {
                          eventModel: o,
                          label: (0, c.we)("#CreatorHome_EventLink_Select"),
                          icon: (0, s.jsx)(f.FEq, {}),
                          onClick: () => v(!0),
                          tooltip: (0, c.we)(
                            "#CreatorHome_EventLink_Select_ttip",
                          ),
                        })
                      : !C &&
                        (0, s.jsxs)("div", {
                          className: g().MustPublish,
                          children: [
                            (0, c.we)("#CreatorHome_EventLink_MustPublish"),
                            (0, s.jsx)(L.o, {
                              tooltip: (0, c.we)(
                                "#CreatorHome_EventLink_MustPublish_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                    C &&
                      (0, s.jsx)(H, {
                        eventModel: o,
                        label: (0, c.we)("#CreatorHome_EventLink_Clear"),
                        icon: (0, s.jsx)(f.FEq, { filled: !0 }),
                        onClick: () => I(!0),
                        tooltip: (0, c.we)("#CreatorHome_EventLink_Clear_ttip"),
                      }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: g().ActionsRow,
                  children: [
                    (0, s.jsx)(H, {
                      eventModel: o,
                      label: (0, c.we)("#Button_Edit"),
                      icon: (0, s.jsx)(f.ffu, {}),
                      route: E.PH.k_eCommunityEdit,
                    }),
                    (0, s.jsx)(H, {
                      eventModel: o,
                      label: (0, c.we)("#Button_Preview"),
                      icon: (0, s.jsx)(f.Exy, {}),
                      route: E.PH.k_eCommunityPreviewSale,
                    }),
                    (0, s.jsx)(H, {
                      eventModel: o,
                      label: (0, c.we)("#Button_Clone"),
                      icon: (0, s.jsx)(f.rI_, {}),
                      onClick: () => window.location.assign(k),
                    }),
                    !C &&
                      (0, s.jsx)(H, {
                        eventModel: o,
                        label: (0, c.we)("#Button_Delete"),
                        icon: (0, s.jsx)(f.lMJ, {}),
                        onClick: () => m(!0),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function A(e) {
        const {
            active: t,
            mutateAsync: n,
            onClose: r,
            strTitle: i,
            strDescription: o,
            strError: l,
          } = e,
          c = (0, C.vs)();
        if (t)
          return c.bLoading
            ? (0, s.jsx)(b.E, {
                active: !0,
                children: (0, s.jsx)(C.Hh, { state: c, strDialogTitle: i }),
              })
            : (0, s.jsx)(b.E, {
                active: !0,
                children: (0, s.jsx)(j.o0, {
                  strTitle: i,
                  strDescription: o,
                  onCancel: () => r(!1),
                  bOKDisabled: c.bLoading,
                  onOK: async () => {
                    c.fnSetLoading(!0);
                    try {
                      (await n()) ? r(!0) : c.fnSetElError(l);
                    } catch (e) {
                      c.fnSetElError(l);
                    }
                  },
                }),
              });
      }
      function H(e) {
        const {
          eventModel: t,
          label: n,
          tooltip: r,
          icon: i,
          route: o,
          onClick: l,
        } = e;
        (0, p.wT)(o || l, "Must specify route or onClick");
        const c =
          l ||
          (() => {
            const e = o ? (0, E.yh)(t, null, o, "absolute") : void 0;
            window.location.assign(e);
          });
        return (0, s.jsxs)("div", {
          className: g().ManageButton,
          onClick: c,
          children: [
            (0, s.jsx)("div", { className: g().SVGIcon, children: i }),
            n,
            r && (0, s.jsx)(L.o, { tooltip: r, small: !0 }),
          ],
        });
      }
    },
  },
]);
