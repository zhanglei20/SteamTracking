/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2687],
  {
    33924: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
        OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
        OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
        OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
        OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
        OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
        OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
        MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
        HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
        OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
        OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
        UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
        OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
        PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
        EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
        EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
        EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
        HorizontalEvent: "_1ruRSreC31IK4kUGUcSRDK",
        HorizontalSummary: "_2bTWamVtbFnHovwqhlrxiV",
        HorizontalTitle: "B9-wlbaW3NhZ3FQPArnkW",
        HorizontalDescriptionCtn: "_3CQtWw7qMAWImOwd8J5xHi",
        HorizontalDescription: "_2hPZwxDYhaY3SllhjeFqb_",
        AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
        CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
        AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
        AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
        AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
      };
    },
    91291: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
        TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
        TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
        Reason: "_2h0GKAYcXRP10ryZHFn79d",
        StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
      };
    },
    20433: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => m, u: () => h });
      var n = a(7850),
        s = a(90626),
        r = a(45699),
        o = a(55963),
        i = a(60014),
        l = a(49411),
        d = a(61336),
        c = a(52541),
        u = a(8527);
      a(78327);
      function p(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function m(e) {
        const {
            id: t,
            hoverClassName: a,
            fnGetIDOverride: r,
            fnHoverState: o,
            children: i,
          } = e,
          l = s.useRef(null),
          d = s.useCallback(
            (e) => {
              const a = p(t);
              a &&
                (o && o(!0),
                window.GameHover &&
                  window.GameHover(r ? r() : l.current, e, "global_hover", {
                    type: a,
                    id: (0, c.G$)(t).id,
                    v6: 1,
                  }));
            },
            [o, r, t],
          ),
          u = s.useCallback(
            (e) => {
              p(t) &&
                (o && e.relatedTarget && o(!1),
                window.HideGameHover &&
                  window.HideGameHover(r ? r() : l.current, e, "global_hover"));
            },
            [t, o, r],
          );
        return (0, n.jsx)("div", {
          ref: l,
          className: a,
          onMouseEnter: d,
          onMouseLeave: u,
          onFocus: d,
          onBlur: u,
          children: i,
        });
      }
      function h(e) {
        const {
            id: t,
            strExtraParams: a,
            fnOnClickOverride: s,
            strOverrideURL: h,
          } = e,
          b = (0, i.n9)(),
          x = (0, l.w)(),
          _ = (0, d.NT)(
            h ||
              (t && "creatorid" in t
                ? (0, o.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, c.G$))(t).id}${a ? `?${a}` : ""}`,
                    b,
                    x,
                  )
                : (0, o.It)(
                    `${u.TS.STORE_BASE_URL}${p(t)}/${((0, c.G$))(t).id}${a ? `?${a}` : ""}`,
                    b,
                    x,
                  )),
          );
        return (0, n.jsx)(m, {
          ...e,
          children: (0, n.jsx)(r.Ii, {
            className: e.className,
            href: s ? void 0 : _,
            target: u.TS.IN_CLIENT || s ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: s,
            children: e.children,
          }),
        });
      }
    },
    75152: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => h });
      var n = a(7850),
        s = a(99171),
        r = a(39777),
        o = a(90626),
        i = a(43976),
        l = a(18654),
        d = a.n(l),
        c = a(96006),
        u = a(3740),
        p = a(14326),
        m = a(52038);
      function h(e) {
        const {
            id: t,
            bShowAsMuted: a,
            bHidePrice: s,
            bShowInLibraryInsteadOfPrice: l,
            bHidePlatforms: h,
            strClassName: _,
            creatorAccountID: f,
            bShowName: v,
            onlyOneDiscountPct: S,
            bShowAddToCart: w,
            bShowWishlistButton: I,
          } = e,
          C = (0, o.useRef)(null),
          [j, D] = (0, o.useState)(!1),
          { data: P } = (0, r.J$)(t);
        if (
          ((0, o.useEffect)(() => {
            C.current && D(C.current.offsetWidth < 370);
          }, [C]),
          !t || !("appid" in t || "bundleid" in t || "packageid" in t))
        )
          return null;
        const A = Boolean(I && 0 == P?.item_type),
          g = Boolean(!f && !w && !A && h && s);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            !g &&
              (0, n.jsxs)("div", {
                ref: C,
                className: (0, m.A)(
                  d().CapsuleBottomBar,
                  "CapsuleBottomBar",
                  a && d().Muted,
                  _,
                ),
                children: [
                  f && (0, n.jsx)(x, { creatorAccountID: f, ...e }),
                  w &&
                    (0, n.jsx)(i.h, {
                      id: t,
                      className: (0, m.A)(
                        d().MaxActionButtonWidth,
                        d().AddToCartButton,
                      ),
                    }),
                  A &&
                    "appid" in t &&
                    (0, n.jsx)(p.r, {
                      appid: t.appid,
                      className: (0, m.A)(
                        d().MaxActionButtonWidth,
                        d().AddToWishlistButton,
                      ),
                    }),
                  !h && (0, n.jsx)(c.Q, { id: t, bMinimizePlatforms: j }),
                  !s &&
                    (0, n.jsx)("span", {
                      className: d().BottomBarPriceInfo,
                      children: (0, n.jsx)(u.N, {
                        id: t,
                        bShowInLibrary: l,
                        onlyOneDiscountPct: S,
                      }),
                    }),
                ],
              }),
            v && (0, n.jsx)(b, { id: t }),
          ],
        });
      }
      function b(e) {
        const { id: t } = e,
          { data: a } = (0, r.J$)(t);
        return a?.name
          ? (0, n.jsx)("div", { className: d().CapsuleName, children: a.name })
          : null;
      }
      function x(e) {
        const { creatorAccountID: t, bShowAsMuted: a, strClassName: i } = e,
          l = (0, o.useMemo)(() => ({ creatorid: t }), [t]),
          { data: c } = (0, r.J$)(l),
          { data: u } = (0, r.lv)(l);
        if (!c) return null;
        const p = (0, s.t)(u?.clan_avatar, "Medium"),
          h = c.name || "";
        return (0, n.jsxs)("div", {
          className: (0, m.A)(d().BottomCreatorRow, a && d().Muted, i),
          children: [
            (0, n.jsx)("img", {
              className: (0, m.A)(d().CreatorLogo),
              src: p,
              alt: h,
            }),
            (0, n.jsx)("span", { className: d().CreatorName, children: h }),
          ],
        });
      }
    },
    22687: (e, t, a) => {
      "use strict";
      a.d(t, { W: () => $, J: () => k });
      var n = a(7850),
        s = a(45699),
        r = a(76217),
        o = a(23310),
        i = a(706),
        l = a(20433);
      var d = a(78588),
        c = a(12424),
        u = a(75152),
        p = a(42834),
        m = a(80696),
        h = a(39777),
        b = a(14987),
        x = a(60014),
        _ = a(58918),
        f = a(90626),
        v = a(35380),
        S = a(55963),
        w = a(33924),
        I = a(18654),
        C = a.n(I),
        j = a(94191),
        D = a(72860),
        P = a(70300),
        A = a(54492),
        g = a(49411),
        N = a(52038),
        T = a(61859),
        E = a(61336),
        y = a(78327),
        H = a(91291),
        B = a.n(H),
        M = a(90421),
        O = a(5309),
        W = a(71420);
      const k = "capsule_index_";
      function $(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: s,
            index: l,
            navKey: d,
            bHideStoreHover: c,
            onlyOneDiscountPct: u,
            bPreferDemoStorePage: p,
            bShowEarlyAccessBanner: m,
          } = e,
          [b, x] = f.useState(!1),
          _ = (0, v.rt)(t),
          { data: S } = (0, h.J$)(_),
          w = (0, v.$5)(a ? S?.related_items?.parent_appid : void 0),
          { data: I } = (0, h.J$)(w);
        if (!S || !_) return null;
        const j = !!I && !!w,
          D = (0, n.jsx)(R, {
            ...e,
            strExtraParams: e.strExtraParams,
            id: _,
            bIsHovered: b,
            bHasParentAppToDisplay: j,
            onlyOneDiscountPct: u,
            bShowEarlyAccessBanner: m,
          });
        return (0, n.jsxs)(r.Z, {
          className: (0, N.A)({
            [C().OuterCapsuleContainer]: !0,
            [k + l]: 0 == l,
          }),
          navEntryPreferPosition: o.iU.PREFERRED_CHILD,
          navKey: d,
          children: [
            (0, n.jsxs)(P.oj, {
              appid: S.appid,
              children: [
                Boolean(c)
                  ? (0, n.jsx)("div", {
                      onMouseEnter: () => x(!0),
                      onMouseLeave: () => x(!1),
                      children: D,
                    })
                  : (0, n.jsx)(i.Q, {
                      className: C().CapsuleContainer,
                      id: _,
                      elElementToAppend: e.elElementToAppendToHover,
                      bShowDemoButton: e.bShowDemoButton,
                      bPreferDemoStorePage: e.bPreferDemoStorePage,
                      bShowDeckCompatibilityDialog:
                        e.bShowDeckCompatibilityDialog,
                      bHidePrice: e.bHidePrice,
                      bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                      strExtraParams: e.strExtraParams,
                      nCreatorAccountID: e.creatorAccountID,
                      nWidthMultiplier: e.nWidthMultiplier,
                      bShowIgnoreButton: e.bShowIgnoreButton,
                      bShowDescription: e.bShowDescriptionInHover,
                      children: D,
                    }),
                Boolean(s) && (0, n.jsx)(n.Fragment, { children: s }),
              ],
            }),
            j &&
              (0, n.jsx)(L, {
                strExtraParams: e.strExtraParams,
                parentID: w,
                parentStoreItemDefaultInfo: I,
                childAppType: S.type,
                bPreferDemoStorePage: Boolean(p),
              }),
          ],
        });
      }
      function L(e) {
        const {
            strExtraParams: t,
            parentID: a,
            parentStoreItemDefaultInfo: r,
            childAppType: o,
            bPreferDemoStorePage: i,
          } = e,
          d = (0, x.n9)(),
          c = (0, y.Qn)(),
          { data: u } = (0, h.lv)(a);
        return u
          ? (0, n.jsx)(s.ml, {
              className: C().CapsuleParentInfo,
              ...(0, D.S)(r, d, c, i, t),
              children: (0, n.jsxs)(P.oj, {
                appid: r.appid,
                children: [
                  (0, n.jsx)("div", {
                    className: C().ParentType,
                    children: (0, T.we)(
                      11 == o
                        ? "#SalePage_ParentApp_SoundTrack"
                        : "#SalePage_ParentApp_DLC",
                    ),
                  }),
                  (0, n.jsx)(l.u, {
                    id: a,
                    strExtraParams: t,
                    children: (0, n.jsx)("img", {
                      loading: "lazy",
                      className: w.AppCapsuleImage,
                      alt: r.name || "",
                      src: (0, p.b0)(u, "small_capsule"),
                      width: 231,
                      height: 87,
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      function R(e) {
        const {
            id: t,
            bHideStatusBanners: a,
            strExtraParams: r,
            index: o,
            imageType: i,
            bHasParentAppToDisplay: l,
            bIsHovered: c,
            strDoubleCapsuleMessage: u,
            bPreferDemoStorePage: p,
            bShowEarlyAccessBanner: _,
            bPreferAssetWithoutOverride: f,
          } = e,
          v = (0, x.n9)(),
          w = (0, g.w)(),
          I = (0, b._)(t),
          { data: C } = (0, h.J$)(t);
        if (!C) return null;
        const D = (0, E.NT)(
          (0, S.It)(`${(0, W._)(C, p)}${r ? `?${r}` : ""}`, v, w),
        );
        let P;
        const T = !!u;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: (0, N.A)({ [B().TwoWidthCtn]: T }),
              children: [
                (0, n.jsxs)(s.Ii, {
                  href: P ? void 0 : D,
                  style: { display: "block", cursor: "pointer" },
                  className: (0, N.A)({ [B().TwoWidthCapsule]: T }),
                  preferredFocus: l,
                  onClick: P,
                  children: [
                    (0, n.jsx)(j.V, {
                      appids: I,
                      hide_status_banners: a,
                      show_early_access: e.bShowEarlyAccessBanner,
                    }),
                    "none" != i &&
                      (0, n.jsx)(d.a, {
                        imageType: i,
                        id: t,
                        bPreferAssetWithoutOverride: f,
                      }),
                    (0, n.jsx)(A.J, { id: t }),
                    (0, n.jsx)(m.m, { id: t, active: c, bIsHoverMode: !0 }),
                  ],
                }),
                T &&
                  (0, n.jsx)(F, {
                    id: t,
                    strDoubleCapsuleMessage: u,
                    index: o,
                  }),
              ],
            }),
            (0, n.jsx)(J, { ...e }),
          ],
        });
      }
      function F(e) {
        const { id: t, strDoubleCapsuleMessage: a, index: s } = e,
          { data: r } = (0, h.by)(t),
          { data: o } = (0, h.xz)(t);
        return (0, n.jsxs)("div", {
          className: (0, N.A)(B().TwoWidthSideInfo, "TwoWidthSideInfo"),
          children: [
            (0, n.jsx)("div", { className: B().Reason, children: a }),
            (0, n.jsx)("div", {
              className: B().StoreSaleItemRelease,
              children: (0, n.jsx)("span", { children: r ? (0, O.CC)(r) : "" }),
            }),
            (0, n.jsx)(M.n, {
              bHideTitle: !0,
              rgTagIDs: o?.map((e) => e.tagid) || [],
              instanceNum: s,
            }),
          ],
        });
      }
      function J(e) {
        const {
            id: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: s,
            bUseSubscriptionLayout: r,
            elElementToAppendToHover: o,
            bHidePrice: i,
            bHidePlatforms: l,
            creatorAccountID: d,
            bIsHovered: p,
            onlyOneDiscountPct: m,
            strDoubleCapsuleMessage: b,
          } = e,
          { data: x } = (0, h.J$)(t),
          { bIsOwned: f } = (0, _.ZJ)(t),
          v = f && !s;
        if (r && x && 0 == x.item_type && x.appid)
          return (0, n.jsx)(c.E, { appid: x.appid, bIsMuted: p });
        if (o) return null;
        const S = Boolean(f && a),
          w = Boolean(v);
        return (0, n.jsx)(u.q, {
          id: t,
          bShowAsMuted: w,
          bHidePrice: i,
          bShowInLibraryInsteadOfPrice: S,
          bHidePlatforms: l,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: m,
          bShowWishlistButton: Boolean(b),
        });
      }
    },
    14326: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => I, r: () => w });
      var n = a(7850),
        s = a(39777),
        r = a(60014),
        o = a(58918),
        i = a(17376),
        l = a(79969),
        d = a(90626),
        c = a(35380),
        u = a(55963),
        p = a(18654),
        m = a.n(p),
        h = a(39700),
        b = a(12155),
        x = a(32754),
        _ = a(52038),
        f = a(61859),
        v = a(78327),
        S = a(84547);
      function w(e) {
        const { appid: t, className: a, bTextMode: r } = e,
          o = (0, c.$5)(t),
          { data: i } = (0, s.J$)(o),
          { data: l } = (0, s.by)(o);
        return (0, n.jsx)(I, {
          appid: t,
          bIsFree: Boolean(i?.is_free),
          bIsComingSoon: Boolean(l?.is_coming_soon),
          bTextMode: r,
          className: a,
        });
      }
      function I(e) {
        const [t, a] = d.useState(!1),
          s = (0, r.n9)(),
          {
            appid: p,
            bIsFree: w,
            bIsComingSoon: I,
            className: j,
            bTextMode: D,
          } = e,
          P = (0, c.$5)(p),
          { bIsOwned: A } = (0, o.ZJ)(P),
          g = (0, i.bB)(p),
          { mutateAsync: N } = (0, l.s)(p, !g, (0, u.L3)(s)),
          { elDialogElement: T, fnShowLogonDialog: E } = (0, S.E)();
        if (A || (!I && w))
          return w ? (0, n.jsx)(C, { possibleDemoAppID: p }) : null;
        let y = null;
        return (
          t && !D
            ? (y = (0, n.jsx)(h.k, { size: 18 }))
            : g
              ? g && (y = D ? (0, f.we)("#OnWishlist") : (0, n.jsx)(b.qnF, {}))
              : (y = D
                  ? (0, f.we)("#wishlist_add_to_wishlist")
                  : (0, n.jsx)(b.T4m, {})),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(x.he, {
                toolTipContent: (0, f.we)("#AddToWishlist_ttip"),
                children: (0, n.jsx)("div", {
                  className: (0, _.A)(m().WishList, j),
                  onClick: async () => {
                    v.iA.logged_in ? t || (a(!0), await N(), a(!1)) : E();
                  },
                  children: y,
                }),
              }),
              T,
            ],
          })
        );
      }
      function C(e) {
        const { possibleDemoAppID: t, className: a } = e,
          r = (0, c.$5)(t),
          { data: o } = (0, s.J$)(r);
        return o
          ? (1 != o.type && 12 != o.type) || !o.related_items?.parent_appid
            ? null
            : (0, n.jsx)(j, {
                parentAppID: o.related_items?.parent_appid,
                className: a,
              })
          : null;
      }
      function j(e) {
        const { parentAppID: t, className: a } = e,
          r = (0, c.$5)(t),
          { data: o } = (0, s.J$)(r),
          { data: i } = (0, s.by)(r);
        return o && i
          ? (0, n.jsx)(I, {
              appid: t,
              bIsComingSoon: Boolean(i.is_coming_soon),
              bIsFree: Boolean(o.is_free),
              className: a,
            })
          : null;
      }
    },
  },
]);
