/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1054],
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
    75152: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => d });
      var n = a(99171),
        r = a(39777),
        o = a(90626),
        s = a(43976),
        l = a(18654),
        i = a.n(l),
        c = a(72237),
        m = a(3740),
        p = a(14326),
        u = a(52038);
      function d(e) {
        const {
            id: t,
            bShowAsMuted: a,
            bHidePrice: n,
            bShowInLibraryInsteadOfPrice: l,
            bHidePlatforms: d,
            strClassName: h,
            creatorAccountID: _,
            bShowName: S,
            onlyOneDiscountPct: f,
            bShowAddToCart: v,
            bShowWishlistButton: w,
          } = e,
          A = (0, o.useRef)(null),
          [I, P] = (0, o.useState)(!1),
          { data: D } = (0, r.J$)(t);
        if (
          ((0, o.useEffect)(() => {
            A.current && P(A.current.offsetWidth < 370);
          }, [A]),
          !t || !("appid" in t || "bundleid" in t || "packageid" in t))
        )
          return null;
        const C = Boolean(w && 0 == D?.item_type),
          g = Boolean(!_ && !v && !C && d && n);
        return o.createElement(
          o.Fragment,
          null,
          !g &&
            o.createElement(
              "div",
              {
                ref: A,
                className: (0, u.A)(
                  i().CapsuleBottomBar,
                  "CapsuleBottomBar",
                  a && i().Muted,
                  h,
                ),
              },
              _ && o.createElement(E, { creatorAccountID: _, ...e }),
              v &&
                o.createElement(s.h, {
                  id: t,
                  className: (0, u.A)(
                    i().MaxActionButtonWidth,
                    i().AddToCartButton,
                  ),
                }),
              C &&
                "appid" in t &&
                o.createElement(p.r, {
                  appid: t.appid,
                  className: (0, u.A)(
                    i().MaxActionButtonWidth,
                    i().AddToWishlistButton,
                  ),
                }),
              !d && o.createElement(c.Q, { id: t, bMinimizePlatforms: I }),
              !n &&
                o.createElement(
                  "span",
                  { className: i().BottomBarPriceInfo },
                  o.createElement(m.N, {
                    id: t,
                    bShowInLibrary: l,
                    onlyOneDiscountPct: f,
                  }),
                ),
            ),
          S && o.createElement(b, { id: t }),
        );
      }
      function b(e) {
        const { id: t } = e,
          { data: a } = (0, r.J$)(t);
        return a?.name
          ? o.createElement("div", { className: i().CapsuleName }, a.name)
          : null;
      }
      function E(e) {
        const { creatorAccountID: t, bShowAsMuted: a, strClassName: s } = e,
          l = (0, o.useMemo)(() => ({ creatorid: t }), [t]),
          { data: c } = (0, r.J$)(l),
          { data: m } = (0, r.lv)(l);
        if (!c) return null;
        const p = (0, n.t)(m?.clan_avatar, "Medium"),
          d = c.name || "";
        return o.createElement(
          "div",
          { className: (0, u.A)(i().BottomCreatorRow, a && i().Muted, s) },
          o.createElement("img", {
            className: (0, u.A)(i().CreatorLogo),
            src: p,
            alt: d,
          }),
          o.createElement("span", { className: i().CreatorName }, d),
        );
      }
    },
    46416: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => G, W: () => L });
      var n = a(45699),
        r = a(76217),
        o = a(23310),
        s = a(78588),
        l = a(39777),
        i = a(14987),
        c = a(60014),
        m = a(58918),
        p = a(90626),
        u = a(57876),
        d = a(35380),
        b = a(55963),
        E = a(62792),
        h = a(55263),
        _ = a(33924),
        S = a(26101),
        f = a(75152),
        v = a(80696),
        w = a(18654),
        A = a.n(w),
        I = a(88961),
        P = a(72860),
        D = a(70300),
        C = a(47235),
        g = a(20433),
        y = a(54492),
        N = a(49411),
        T = a(52038),
        B = a(61859),
        H = a(61336),
        W = a(78327),
        M = a(91291),
        x = a.n(M),
        O = a(99956),
        k = a(75279);
      const G = "capsule_index_";
      function L(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: n,
            index: s,
            navKey: l,
            bHideStoreHover: i,
            onlyOneDiscountPct: c,
            bPreferDemoStorePage: m,
            bShowEarlyAccessBanner: d,
          } = e,
          [b, _] = p.useState(!1),
          [f] = (0, h.G6)(t.id, (0, E.SW)(t.type), u.Xh),
          [v] = (0, h.t7)(a ? f?.GetParentAppID() : void 0, u.Xh);
        if (!f) return null;
        const w = Boolean(v),
          I = p.createElement(J, {
            ...e,
            strExtraParams: e.strExtraParams,
            info: t,
            bIsHovered: b,
            bHasParentAppToDisplay: w,
            onlyOneDiscountPct: c,
            bShowEarlyAccessBanner: d,
          });
        return p.createElement(
          r.Z,
          {
            className: (0, T.A)({
              [A().OuterCapsuleContainer]: !0,
              [G + s]: 0 == s,
            }),
            navEntryPreferPosition: o.iU.PREFERRED_CHILD,
            navKey: l,
          },
          p.createElement(
            D.oj,
            { appid: f.GetAppID() },
            Boolean(i)
              ? p.createElement(
                  "div",
                  { onMouseEnter: () => _(!0), onMouseLeave: () => _(!1) },
                  I,
                )
              : p.createElement(
                  S.Qf,
                  {
                    className: A().CapsuleContainer,
                    item: t,
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
                  },
                  I,
                ),
            Boolean(n) && p.createElement(p.Fragment, null, n),
          ),
          w &&
            p.createElement(F, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: v,
              childAppType: f.GetAppType(),
              bPreferDemoStorePage: m,
            }),
        );
      }
      function F(e) {
        const {
            strExtraParams: t,
            parentStoreItem: a,
            childAppType: r,
            bPreferDemoStorePage: o,
          } = e,
          s = (0, k.DJ)(a),
          { data: i } = (0, l.J$)(s),
          m = (0, c.n9)(),
          d = (0, W.Qn)();
        return i
          ? p.createElement(
              n.ml,
              { className: A().CapsuleParentInfo, ...(0, P.S)(i, m, d, o, t) },
              p.createElement(
                D.oj,
                { appid: a.GetAppID() },
                p.createElement(
                  "div",
                  { className: A().ParentType },
                  (0, B.we)(
                    11 == r
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC",
                  ),
                ),
                p.createElement(
                  g.u,
                  { id: s, strExtraParams: t },
                  p.createElement("img", {
                    loading: "lazy",
                    className: _.AppCapsuleImage,
                    alt: a.GetName(),
                    src: a.GetAssets().GetSmallCapsuleURL(),
                    ...(0, u.Jw)(),
                  }),
                ),
              ),
            )
          : null;
      }
      function J(e) {
        const {
            info: t,
            bHideStatusBanners: a,
            strExtraParams: r,
            index: o,
            imageType: l,
            bHasParentAppToDisplay: m,
            bIsHovered: _,
            strDoubleCapsuleMessage: S,
            bPreferDemoStorePage: f,
            bShowEarlyAccessBanner: w,
            bPreferAssetWithoutOverride: A,
          } = e,
          [P] = (0, h.G6)(t.id, (0, E.SW)(t.type), u.Xh),
          D = (0, d.rt)(t),
          C = (0, c.n9)(),
          g = (0, N.w)(),
          B = (0, i._)(D);
        if (!P) return null;
        const W = (0, H.NT)(
          (0, b.It)(`${P.GetStorePageURL(f)}${r ? `?${r}` : ""}`, C, g),
        );
        let M;
        "overrideNavigation" in t &&
          (M = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const k = Boolean(S);
        return p.createElement(
          p.Fragment,
          null,
          p.createElement(
            "div",
            { className: (0, T.A)({ [x().TwoWidthCtn]: k }) },
            p.createElement(
              n.Ii,
              {
                href: M ? void 0 : W,
                style: { display: "block", cursor: "pointer" },
                className: (0, T.A)({ [x().TwoWidthCapsule]: k }),
                preferredFocus: m,
                onClick: M,
              },
              p.createElement(I.V, {
                appids: B,
                hide_status_banners: a,
                show_early_access: e.bShowEarlyAccessBanner,
              }),
              "none" != l &&
                p.createElement(s.a, {
                  imageType: l,
                  id: D,
                  bPreferAssetWithoutOverride: A,
                }),
              p.createElement(y.J, { id: D }),
              p.createElement(v.m, { id: D, active: _, bIsHoverMode: !0 }),
            ),
            k &&
              p.createElement(
                "div",
                {
                  className: (0, T.A)(x().TwoWidthSideInfo, "TwoWidthSideInfo"),
                },
                p.createElement("div", { className: x().Reason }, S),
                p.createElement(
                  "div",
                  { className: x().StoreSaleItemRelease },
                  p.createElement(
                    "span",
                    null,
                    P.GetFormattedSteamReleaseDate(),
                  ),
                ),
                p.createElement(O.n, {
                  bHideTitle: !0,
                  rgTagIDs: P.GetTagIDs(),
                  instanceNum: o,
                }),
              ),
          ),
          p.createElement(R, { ...e }),
        );
      }
      function R(e) {
        const {
            info: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: n,
            bUseSubscriptionLayout: r,
            elElementToAppendToHover: o,
            bHidePrice: s,
            bHidePlatforms: i,
            creatorAccountID: c,
            bIsHovered: u,
            onlyOneDiscountPct: b,
            strDoubleCapsuleMessage: E,
          } = e,
          h = (0, d.rt)(t),
          { data: _ } = (0, l.J$)(h),
          { bIsOwned: S } = (0, m.ZJ)(h),
          v = S && !n;
        if (r && _ && 0 == _.item_type && _.appid)
          return p.createElement(C.E, { appid: _.appid, bIsMuted: u });
        if (o) return null;
        const w = Boolean(S && a),
          A = Boolean(v);
        return p.createElement(f.q, {
          id: h,
          bShowAsMuted: A,
          bHidePrice: s,
          bShowInLibraryInsteadOfPrice: w,
          bHidePlatforms: i,
          creatorAccountID: c,
          bShowName: e.bShowName,
          onlyOneDiscountPct: b,
          bShowWishlistButton: Boolean(E),
        });
      }
    },
    14326: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => w, r: () => v });
      var n = a(39777),
        r = a(60014),
        o = a(58918),
        s = a(17376),
        l = a(79969),
        i = a(90626),
        c = a(35380),
        m = a(55963),
        p = a(18654),
        u = a.n(p),
        d = a(39700),
        b = a(12155),
        E = a(32754),
        h = a(52038),
        _ = a(61859),
        S = a(78327),
        f = a(88680);
      function v(e) {
        const { appid: t, className: a, bTextMode: r } = e,
          o = (0, c.$5)(t),
          { data: s } = (0, n.J$)(o),
          { data: l } = (0, n.by)(o);
        return i.createElement(w, {
          appid: t,
          bIsFree: Boolean(s?.is_free),
          bIsComingSoon: Boolean(l?.is_coming_soon),
          bTextMode: r,
          className: a,
        });
      }
      function w(e) {
        const [t, a] = i.useState(!1),
          n = (0, r.n9)(),
          {
            appid: p,
            bIsFree: v,
            bIsComingSoon: w,
            className: I,
            bTextMode: P,
          } = e,
          D = (0, c.$5)(p),
          { bIsOwned: C } = (0, o.ZJ)(D),
          g = (0, s.bB)(p),
          { mutateAsync: y } = (0, l.s)(p, !g, (0, m.L3)(n)),
          { elDialogElement: N, fnShowLogonDialog: T } = (0, f.l)();
        if (C || (!w && v))
          return v ? i.createElement(A, { possibleDemoAppID: p }) : null;
        let B = null;
        return (
          t && !P
            ? (B = i.createElement(d.k, { size: 18 }))
            : g
              ? g &&
                (B = P
                  ? (0, _.we)("#OnWishlist")
                  : i.createElement(b.qnF, null))
              : (B = P
                  ? (0, _.we)("#wishlist_add_to_wishlist")
                  : i.createElement(b.T4m, null)),
          i.createElement(
            i.Fragment,
            null,
            i.createElement(
              E.he,
              { toolTipContent: (0, _.we)("#AddToWishlist_ttip") },
              i.createElement(
                "div",
                {
                  className: (0, h.A)(u().WishList, I),
                  onClick: async () => {
                    S.iA.logged_in ? t || (a(!0), await y(), a(!1)) : T();
                  },
                },
                B,
              ),
            ),
            N,
          )
        );
      }
      function A(e) {
        const { possibleDemoAppID: t, className: a } = e,
          r = (0, c.$5)(t),
          { data: o } = (0, n.J$)(r);
        return o
          ? (1 != o.type && 12 != o.type) || !o.related_items?.parent_appid
            ? null
            : i.createElement(I, {
                parentAppID: o.related_items?.parent_appid,
                className: a,
              })
          : null;
      }
      function I(e) {
        const { parentAppID: t, className: a } = e,
          r = (0, c.$5)(t),
          { data: o } = (0, n.J$)(r),
          { data: s } = (0, n.by)(r);
        return o && s
          ? i.createElement(w, {
              appid: t,
              bIsComingSoon: Boolean(s.is_coming_soon),
              bIsFree: Boolean(o.is_free),
              className: a,
            })
          : null;
      }
    },
    61855: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        a.p +
        "images/applications/store/defaultappheader.png?v=valveisgoodatcaching";
    },
  },
]);
