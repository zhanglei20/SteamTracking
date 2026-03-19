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
    71298: (e, t, n) => {
      "use strict";
      n.d(t, { Hh: () => d, vs: () => c });
      var r = n(7850),
        s = n(90626),
        o = n(51706),
        i = n(56330),
        a = n(61859),
        l = n(22797);
      function c(e) {
        const [t, n] = (0, s.useState)(() => Boolean(e)),
          [r, o] = (0, s.useState)(!1),
          [i, a] = (0, s.useState)(!1),
          [l, c] = (0, s.useState)(null),
          [d, u] = (0, s.useState)(null),
          [_, S] = (0, s.useState)(null),
          [m, E] = (0, s.useState)(null),
          [h, v] = (0, s.useState)(null);
        return {
          bLoading: t,
          bError: r,
          bSuccess: i,
          strError: l,
          strSuccess: d,
          elSuccess: m,
          elError: _,
          strThrobber: h,
          fnSetLoading: n,
          fnSetError: o,
          fnSetSuccess: a,
          fnSetStrError: c,
          fnSetStrSuccess: u,
          fnSetElSuccess: E,
          fnSetElError: S,
          fnSetThrobber: v,
        };
      }
      function d(e) {
        const {
            strDialogTitle: t,
            state: n,
            closeModal: s,
            strThrobber: c,
          } = e,
          {
            bLoading: d,
            bError: u,
            bSuccess: _,
            strError: S,
            strSuccess: m,
            elSuccess: E,
            elError: h,
            strThrobber: v,
          } = n;
        return u || S || h
          ? (0, r.jsxs)(o.o0, {
              strTitle: t,
              bAlertDialog: !0,
              closeModal: s,
              className: i.SuccessErrorDialog,
              children: [
                Boolean(S) &&
                  (0, r.jsx)("div", {
                    className: i.ErrorStylesWithIcon,
                    children:
                      S || (0, a.we)("#Error_ErrorCommunicatingWithNetwork"),
                  }),
                Boolean(h) && h,
              ],
            })
          : _ || m || E
            ? (0, r.jsx)(o.o0, {
                strTitle: t,
                strDescription: m || (0, a.we)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: s,
                className: i.SuccessErrorDialog,
                children: (0, r.jsx)(r.Fragment, { children: Boolean(E) && E }),
              })
            : (0, r.jsx)(o.o0, {
                strTitle: t,
                className: i.SuccessErrorDialog,
                bProgressDialog: !0,
                closeModal: () => {},
                children: (0, r.jsx)(l.t, {
                  string: c || v || (0, a.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              });
      }
    },
    87731: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => f });
      var r = n(7850),
        s = n(90626),
        o = n(78327),
        i = n(41735),
        a = n.n(i),
        l = n(61859),
        c = n(22837),
        d = n(17720),
        u = n(80902),
        _ = n(51614),
        S = n(6379),
        m = n(84933),
        E = n(22797),
        h = n(93474),
        v = n.n(h),
        g = n(75113),
        j = n(12155),
        w = n(81393),
        x = n(32754),
        D = n(56283),
        C = n(78395),
        L = n(71298),
        I = n(21869),
        b = n(8092),
        k = n(52038),
        p = n(26408);
      function f(e) {
        const { clanAccountID: t } = e,
          n = (0, m.YR)(() => new d.b(t, o.TS.EUNIVERSE, 7, 0)),
          {
            bIsFetching: i,
            rgEventModels: c,
            fnRefetch: _,
          } = (function (e) {
            const {
              data: t,
              isFetching: n,
              refetch: r,
            } = (0, u.I)({
              queryKey: [
                "DraftAndHiddenPartnerEvents",
                e.ConvertTo64BitString(),
              ],
              queryFn: async () => {
                const t =
                    o.TS.STORE_BASE_URL +
                    "/curator/" +
                    e.GetAccountID() +
                    "/admin/ajaxgetcreatorhomeevents",
                  n = { l: o.TS.LANGUAGE },
                  r = await a()
                    .get(t, { params: n })
                    .catch(() => {}),
                  s = new Array();
                s.push(
                  ...r.data.creatorhome_event_gids.map((t) =>
                    S.MX.LoadHiddenPartnerEvent(e, t),
                  ),
                );
                return await Promise.all(s);
              },
            });
            return { bIsFetching: n, rgEventModels: t, fnRefetch: r };
          })(n),
          h = `${o.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
          { creatorHome: g, isFetching: j, refetch: w } = (0, b.FV)(t),
          C = g?.GetLinkedEventGID(),
          L = C && c?.some((e) => C == e.GID),
          I = i || j,
          k = () => {
            _(), w();
          },
          p = s.useMemo(
            () => [...(c ?? [])].sort((e, t) => t.startTime - e.startTime),
            [c],
          ),
          f = p.filter((e) => C && C == e.GID),
          H = p.filter((e) => !C || C != e.GID);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(x.he, {
              toolTipContent: (0, l.we)("#CreatorHome_EventLink_Create_ttip"),
              style: { width: "25%" },
              children: (0, r.jsx)(D.jn, {
                onClick: () => window.location.assign(h),
                children: (0, l.we)("#CreatorHome_EventLink_Create"),
              }),
            }),
            (0, r.jsx)("h4", {
              children: (0, l.we)("#CreatorHome_EventLink_Title"),
            }),
            (0, r.jsx)("p", {
              children: (0, l.we)("#CreatorHome_EventLink_Desc"),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", {
              className: v().ListsCtn,
              children: [
                !L &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("h5", {
                        children: (0, l.we)(
                          "#CreatorHome_EventLink_ActiveListTitle",
                        ),
                      }),
                      (0, r.jsx)("p", {
                        children: (0, l.we)(
                          "#CreatorHome_EventLink_BasicActive",
                        ),
                      }),
                    ],
                  }),
                I && (0, r.jsx)(E.t, {}),
                !I &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      f.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("h5", {
                              children: (0, l.we)(
                                "#CreatorHome_EventLink_ActiveListTitle",
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className: v().EntryList,
                              children: f.map((e) =>
                                (0, r.jsx)(
                                  y,
                                  {
                                    creatorHome: g,
                                    clanSteamID: n,
                                    eventModel: e,
                                    refetch: k,
                                  },
                                  e.GID,
                                ),
                              ),
                            }),
                          ],
                        }),
                      H.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("h5", {
                              children: (0, l.we)(
                                "#CreatorHome_EventLink_InactiveListTitle",
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className: v().EntryList,
                              children: H.map((e) =>
                                (0, r.jsx)(
                                  y,
                                  {
                                    creatorHome: g,
                                    clanSteamID: n,
                                    eventModel: e,
                                    refetch: k,
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
        const { clanSteamID: t, creatorHome: n, eventModel: i, refetch: d } = e,
          [u, S] = s.useState(!1),
          m = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  o.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                n = new FormData();
              n.append("sessionid", o.TS.SESSIONID), n.append("gid", e.gid);
              const r = await a().post(t, n, { withCredentials: !0 });
              return 1 == r?.data?.success;
            },
          }),
          [E, h] = s.useState(!1),
          [w, x] = s.useState(!1),
          D = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  o.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                n = new FormData();
              n.append("sessionid", o.TS.SESSIONID), n.append("gid", e.gid);
              const r = await a().post(t, n, { withCredentials: !0 });
              return 1 == r?.data?.success;
            },
          }),
          C = n?.GetLinkedEventGID(),
          L = C && C == i.GID,
          I = !L && i.BIsVisibleEvent(),
          b = `${o.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${i.GID}?redir=${window.location.href}`;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(H, {
              active: u,
              mutateAsync: () => m.mutateAsync({ clanSteamID: t, gid: i.GID }),
              onClose: (e) => {
                S(!1), e && d();
              },
              strTitle: (0, l.we)("#Button_Delete"),
              strDescription: (0, l.we)(
                "#CreatorHome_EventLink_Delete_Dialog_Desc",
              ),
              strError: (0, l.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
            }),
            (0, r.jsx)(H, {
              active: E,
              mutateAsync: () => D.mutateAsync({ clanSteamID: t, gid: i.GID }),
              onClose: (e) => {
                h(!1), e && d();
              },
              strTitle: (0, l.we)("#CreatorHome_EventLink_Select"),
              strDescription: (0, l.we)(
                "#CreatorHome_EventLink_Select_Dialog_Desc",
              ),
              strError: (0, l.we)("#CreatorHome_EventLink_Select_Dialog_Error"),
            }),
            (0, r.jsx)(H, {
              active: w,
              mutateAsync: () => D.mutateAsync({ clanSteamID: t, gid: "0" }),
              onClose: (e) => {
                x(!1), e && d();
              },
              strTitle: (0, l.we)("#CreatorHome_EventLink_Clear"),
              strDescription: (0, l.we)(
                "#CreatorHome_EventLink_Clear_Dialog_Desc",
              ),
              strError: (0, l.we)("#CreatorHome_EventLink_Clear_Dialog_Error"),
            }),
            (0, r.jsxs)("div", {
              className: (0, k.A)(v().Entry, L && v().Active),
              children: [
                (0, r.jsxs)("div", {
                  className: v().HeaderRow,
                  children: [
                    (0, r.jsx)("span", {
                      className: v().Label,
                      children: i.GetNameWithFallback((0, c.sf)(o.TS.LANGUAGE)),
                    }),
                    !i.BIsVisibleEvent() &&
                      (0, r.jsxs)("span", {
                        className: v().UnpublishedState,
                        children: [
                          (0, r.jsx)("span", {
                            children: (0, l.we)(
                              "#CreatorHome_EventLink_Unpublished",
                            ),
                          }),
                          (0, r.jsx)(p.o, {
                            tooltip: (0, l.we)(
                              "#CreatorHome_EventLink_Unpublished_ttip",
                            ),
                            small: !0,
                          }),
                        ],
                      }),
                    i.BIsVisibleEvent() &&
                      !L &&
                      (0, r.jsxs)("span", {
                        className: v().PublishedAndNotSelectedState,
                        children: [
                          (0, r.jsx)("span", {
                            children: (0, l.we)(
                              "#CreatorHome_EventLink_PublishedAndNotSelected",
                            ),
                          }),
                          (0, r.jsx)(p.o, {
                            tooltip: (0, l.we)(
                              "#CreatorHome_EventLink_PublishedAndNotSelected_ttip",
                            ),
                            small: !0,
                          }),
                        ],
                      }),
                    I
                      ? (0, r.jsx)(T, {
                          eventModel: i,
                          label: (0, l.we)("#CreatorHome_EventLink_Select"),
                          icon: (0, r.jsx)(j.FEq, {}),
                          onClick: () => h(!0),
                          tooltip: (0, l.we)(
                            "#CreatorHome_EventLink_Select_ttip",
                          ),
                        })
                      : !L &&
                        (0, r.jsxs)("div", {
                          className: v().MustPublish,
                          children: [
                            (0, l.we)("#CreatorHome_EventLink_MustPublish"),
                            (0, r.jsx)(p.o, {
                              tooltip: (0, l.we)(
                                "#CreatorHome_EventLink_MustPublish_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                    L &&
                      (0, r.jsx)(T, {
                        eventModel: i,
                        label: (0, l.we)("#CreatorHome_EventLink_Clear"),
                        icon: (0, r.jsx)(j.FEq, { filled: !0 }),
                        onClick: () => x(!0),
                        tooltip: (0, l.we)("#CreatorHome_EventLink_Clear_ttip"),
                      }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: v().ActionsRow,
                  children: [
                    (0, r.jsx)(T, {
                      eventModel: i,
                      label: (0, l.we)("#Button_Edit"),
                      icon: (0, r.jsx)(j.ffu, {}),
                      route: g.PH.k_eCommunityEdit,
                    }),
                    (0, r.jsx)(T, {
                      eventModel: i,
                      label: (0, l.we)("#Button_Preview"),
                      icon: (0, r.jsx)(j.Exy, {}),
                      route: g.PH.k_eCommunityPreviewSale,
                    }),
                    (0, r.jsx)(T, {
                      eventModel: i,
                      label: (0, l.we)("#Button_Clone"),
                      icon: (0, r.jsx)(j.rI_, {}),
                      onClick: () => window.location.assign(b),
                    }),
                    !L &&
                      (0, r.jsx)(T, {
                        eventModel: i,
                        label: (0, l.we)("#Button_Delete"),
                        icon: (0, r.jsx)(j.lMJ, {}),
                        onClick: () => S(!0),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function H(e) {
        const {
            active: t,
            mutateAsync: n,
            onClose: s,
            strTitle: o,
            strDescription: i,
            strError: a,
          } = e,
          l = (0, L.vs)();
        if (t)
          return l.bLoading
            ? (0, r.jsx)(I.E, {
                active: !0,
                children: (0, r.jsx)(L.Hh, { state: l, strDialogTitle: o }),
              })
            : (0, r.jsx)(I.E, {
                active: !0,
                children: (0, r.jsx)(C.o0, {
                  strTitle: o,
                  strDescription: i,
                  onCancel: () => s(!1),
                  bOKDisabled: l.bLoading,
                  onOK: async () => {
                    l.fnSetLoading(!0);
                    try {
                      (await n()) ? s(!0) : l.fnSetElError(a);
                    } catch (e) {
                      l.fnSetElError(a);
                    }
                  },
                }),
              });
      }
      function T(e) {
        const {
          eventModel: t,
          label: n,
          tooltip: s,
          icon: o,
          route: i,
          onClick: a,
        } = e;
        (0, w.wT)(i || a, "Must specify route or onClick");
        const l =
          a ||
          (() => {
            const e = i ? (0, g.yh)(t, null, i, "absolute") : void 0;
            window.location.assign(e);
          });
        return (0, r.jsxs)("div", {
          className: v().ManageButton,
          onClick: l,
          children: [
            (0, r.jsx)("div", { className: v().SVGIcon, children: o }),
            n,
            s && (0, r.jsx)(p.o, { tooltip: s, small: !0 }),
          ],
        });
      }
    },
  },
]);
