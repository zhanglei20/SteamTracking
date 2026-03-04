/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4922],
  {
    73371: (e) => {
      e.exports = {
        WishlistButtonNotTop: "NLpQmAPIbG71U6eWdaOa1",
        FollowGameButtonNotTop: "T3A9t1mjAR00ljJGlBapl",
      };
    },
    41399: (e, t, i) => {
      "use strict";
      i.d(t, { p: () => Y });
      var s = i(7850),
        a = i(45699),
        n = i(76217),
        o = i(23310),
        l = i(51078),
        r = i(78588),
        d = i(39777),
        c = i(7338),
        p = i(75233),
        u = i(90626),
        m = i(18654),
        h = i.n(m),
        _ = i(90421);
      function x(e) {
        const { id: t } = e;
        return t ? (0, s.jsx)(j, { id: t }) : null;
      }
      function j(e) {
        const { id: t } = e,
          i = (function (e) {
            const [t, i] = (0, u.useState)(void 0),
              { data: s } = (0, d.J$)(e),
              { data: a } = (0, d.xz)(e),
              n = (0, p.jE)(),
              o = (0, c.eG)();
            return (
              (0, u.useEffect)(() => {
                if (s)
                  if (a && a.length > 0) i(a);
                  else if (s.related_items?.parent_appid) {
                    const e = { appid: s.related_items?.parent_appid };
                    (async () => {
                      const t = await n.fetchQuery((0, d.Ec)(o, e));
                      t && t.length > 0 && i(t);
                    })();
                  }
              }, [o, n, s, a]),
              t
            );
          })(t);
        return i
          ? (0, s.jsx)("div", {
              className: h().StoreSaleWidgetTags,
              children: i
                .slice(0, 10)
                .map((e) =>
                  (0, s.jsx)(
                    _.p,
                    { tagid: e.tagid, className: h().AppTag },
                    "tag_" + e.tagid,
                  ),
                ),
            })
          : null;
      }
      var S = i(42834),
        f = i(52541),
        g = i(58918),
        v = i(61859),
        b = i(706);
      const w = 6;
      function C(e) {
        const { id: t, bHideInLibraryApps: i } = e,
          { data: a } = (0, d.J$)(t),
          [n, o] = u.useState(null),
          l = 2 == a?.item_type,
          { data: r } = (0, g.$Y)();
        if (
          (u.useEffect(() => {
            a &&
              (1 == a.item_type || 2 == a.item_type
                ? o(
                    (a.included_appids || [])
                      .filter((e) => !l || !i || !r?.has(e))
                      .map((e) => ({ appid: e })),
                  )
                : console.error(
                    "ContentsPreviewList unexpected store item type: ",
                    a.item_type,
                  ));
          }, [a, i, l, r]),
          !n || 0 == n.length)
        )
          return null;
        const c = n.length;
        let p = (0, v.Yp)("#Sale_ContentPreview", c);
        if (l && a) {
          const e = a.included_appids?.length || 0;
          e != c &&
            (p = (0, v.we)("#Sale_Bundle_CompletePartialSet", e - c, e));
        }
        return (0, s.jsxs)("div", {
          className: h().BundleContentPreview,
          children: [
            (0, s.jsxs)("div", {
              className: h().ContentsCount,
              children: [
                l &&
                  (0, s.jsx)("span", {
                    className: h().BundleTag,
                    children: (0, v.we)("#AppType_bundle"),
                  }),
                p,
              ],
            }),
            (0, s.jsx)("div", {
              className: h().PreviewCtn,
              children: n
                .slice(0, w)
                .map((e) => (0, s.jsx)(N, { id: e }, `preview${(0, f.ER)(e)}`)),
            }),
          ],
        });
      }
      function N(e) {
        const { id: t } = e,
          { data: i } = (0, d.f2)(t),
          { data: a } = (0, d.U2)(t);
        if (!i || !a) return null;
        const n = (0, S.b0)(i, "small_capsule");
        return (0, s.jsx)(b.Q, {
          id: t,
          className: h().PreviewItem,
          hoverProps: { direction: "right", style: { minWidth: "350px" } },
          children: (0, s.jsx)("img", {
            src: n,
            className: h().PreviewImg,
            loading: "lazy",
            alt: a.name || "",
          }),
        });
      }
      var y = i(3740),
        B = i(62349),
        P = i(5309),
        W = i(30020),
        A = i(80696),
        k = i(14987),
        D = i(60014),
        O = i(35380),
        R = i(91822),
        T = i(73371),
        E = i.n(T),
        H = i(52038),
        I = i(78327),
        L = i(54492),
        F = i(72237),
        Q = i(70300),
        U = i(12424),
        J = i(72860),
        M = i(88961),
        $ = i(94095),
        z = i(94636),
        G = i(24267);
      function Y(e) {
        const {
            id: t,
            type: i,
            bShowDemoButton: c,
            bPreferDemoStorePage: p,
            bHidePrice: m,
            bUseSubscriptionLayout: _,
            bHidePlatforms: j,
            bHideContainedApps: S,
            bAllowTwoLinesForHeader: v,
            bShowReviewSummary: b,
            bShowDeckCompatibilityDialog: w,
            bAutoFocus: N,
            fnOnClickOverride: P,
            bIsMarketingMessage: T,
            bPreferAssetWithoutOverride: Y,
          } = e,
          V = (0, O.zl)(t, i),
          [X, ee] = (0, u.useState)(!1),
          te = (0, D.n9)(),
          { data: ie } = (0, d.U2)(V),
          { data: se } = (0, d.Q_)(V),
          { data: ae } = (0, d.by)(V),
          { data: ne } = (0, g.$Y)(),
          oe = (0, k._)(V),
          le = (0, u.useRef)(null),
          [re, de] = (0, u.useState)(!1),
          ce = (0, I.Qn)();
        (0, u.useEffect)(() => {
          le.current && de(le.current.offsetWidth < 370);
        }, [le]);
        const pe = (0, u.useMemo)(
            () => (p && ie && (0, B.J)(ie) ? { appid: (0, B.S)(ie)[0] } : V),
            [p, V, ie],
          ),
          { strStoreURL: ue, snr: me } = (0, l.x)(ie, p);
        if (!ie) return null;
        const he = ie.included_appids?.length || 0,
          _e = ie.included_appids?.filter((e) => ne?.has(e))?.length || 0,
          xe = 2 == ie.item_type && Boolean(se?.must_purchase_as_set),
          je = Boolean(!S && he > 1),
          Se = 1 == ie.item_type && 1 == he,
          fe = 0 == ie.item_type || Se,
          ge = Se && ie.appid,
          ve = ie.name || "",
          be = (0, W.Nq)(ae, se),
          we = ce || !ae?.is_coming_soon || be;
        return (0, s.jsxs)(n.Z, {
          className: (0, H.A)({
            [h().StoreSaleWidgetOuterContainer]: !0,
            [h().AllowTwoLineHeader]: v,
            StoreSaleWidgetOuterContainer: !0,
          }),
          "flow-children": "grid",
          navEntryPreferPosition: o.iU.PREFERRED_CHILD,
          autoFocus: N,
          navKey: "preview_widget_" + (0, f.ER)(V),
          children: [
            (0, s.jsx)(Q.oj, {
              appid: fe && "appid" in V ? V.appid : void 0,
              children: (0, s.jsxs)(a.ml, {
                onClick: T ? P : void 0,
                className: (0, H.A)({
                  [h().StoreSaleWidgetContainer]: !0,
                  [h().SaleItemDefaultCapsuleDisplay]: !0,
                  [h().MarketingMessage]: T,
                }),
                ...(0, J.S)(ie, te, ce, Boolean(p), void 0, P),
                preferredFocus: je,
                children: [
                  (0, s.jsx)("div", {
                    className: (0, H.A)(h().StoreSaleWidgetHalfLeft),
                    children: (0, s.jsx)(K, {
                      id: pe,
                      strURL: ue,
                      children: (0, s.jsxs)("div", {
                        className: h().StoreSaleWidgetImage,
                        children: [
                          (0, s.jsx)(M.V, { appids: oe }),
                          (0, s.jsx)(r.a, {
                            id: V,
                            imageType: "header",
                            bPreferAssetWithoutOverride: Y,
                          }),
                          (0, s.jsx)(L.J, { id: V }),
                          (0, s.jsx)(A.m, {
                            id: V,
                            active: V && X,
                            bIsHoverMode: !0,
                            bGrowOnHover: !0,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: (0, H.A)({
                      [h().StoreSaleWidgetRight]: !0,
                      [h().Bundle]: je,
                    }),
                    children: [
                      Boolean(fe && !P) &&
                        (0, s.jsx)(z.E, {
                          id: V,
                          classOverride: (0, H.A)(
                            E().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: me,
                        }),
                      (0, s.jsx)("div", {
                        className: h().TitleCtn,
                        children: (0, s.jsx)("a", {
                          href: P ? void 0 : ue,
                          target: I.TS.IN_CLIENT ? void 0 : "_blank",
                          onClick: P,
                          children: (0, s.jsx)("div", {
                            className: (0, H.A)(
                              h().StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle",
                            ),
                            children: ve,
                          }),
                        }),
                      }),
                      !je && (0, s.jsx)(x, { id: V }),
                      (0, s.jsxs)("div", {
                        className: h().WidgetReleaseDateAndPlatformCtn,
                        ref: le,
                        children: [
                          fe && (0, s.jsx)(Z, { id: V }),
                          !je &&
                            !j &&
                            V &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(F.Q, {
                                  id: V,
                                  bMinimizePlatforms: re,
                                }),
                                Boolean(w && 0 == ie.item_type) &&
                                  (0, s.jsx)(R.kk, {
                                    className: h().DeckCompatIcon,
                                    id: V,
                                  }),
                              ],
                            }),
                        ],
                      }),
                      !je &&
                        b &&
                        V &&
                        (0, s.jsx)("div", {
                          className: h().ReviewScores,
                          children: (0, s.jsx)(G.J, { id: V }),
                        }),
                      je &&
                        V &&
                        (0, s.jsx)(C, {
                          id: V,
                          bHideInLibraryApps:
                            !xe && 2 == ie.item_type && _e < he,
                        }),
                      Boolean(fe) && (0, s.jsx)(q, { id: V }),
                      Boolean(!P)
                        ? (0, s.jsx)(s.Fragment, {
                            children:
                              _ && fe && ge
                                ? (0, s.jsx)(U.E, {
                                    appid: ge,
                                    bIsMuted: Boolean(X),
                                  })
                                : (0, s.jsx)($.w, {
                                    id: V,
                                    bShowDemoButton: c,
                                    bHidePrice: m,
                                    bHideWishlistButton: we,
                                    bShowDeckCompatibilityDialog: w,
                                  }),
                          })
                        : (0, s.jsx)("div", {
                            className: h().StoreActionWidgetContainer,
                            children: (0, s.jsx)("div", {
                              className:
                                h().StoreSalePriceActionWidgetContainer,
                              children: (0, s.jsx)(y.N, { id: V }),
                            }),
                          }),
                      (0, s.jsx)("div", {
                        className: h().StoreSaleWidgetBgTint,
                        children: (0, s.jsx)(r.a, {
                          id: V,
                          bPreferAssetWithoutOverride: Y,
                          imageType: "header",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Boolean(e.strReason && e.strReason.length > 0) &&
              (0, s.jsx)("div", {
                className: h().RecommendationReason,
                children: e.strReason,
              }),
          ],
        });
      }
      function K(e) {
        const { id: t, strURL: i, children: a } = e;
        return "appid" in t
          ? (0, s.jsxs)(b.Q, { id: t, children: [a, " "] })
          : (0, s.jsx)("a", { href: i, children: a });
      }
      function Z(e) {
        const { id: t } = e,
          { data: i } = (0, d.by)(t);
        return i
          ? (0, s.jsx)("div", {
              className: h().StoreSaleWidgetRelease,
              children: (0, P.CC)(i),
            })
          : null;
      }
      function q(e) {
        const { id: t } = e,
          { data: i } = (0, d.U2)(t),
          { data: a } = (0, d.Q_)(t),
          { data: n } = (0, d.wl)(t),
          { data: o } = (0, g.$Y)();
        if (!(i && n && n.short_description && o)) return null;
        const l = a?.discount_pct || 0,
          r = i.included_appids?.length || 0,
          c = i.included_appids?.filter((e) => o?.has(e))?.length || 0;
        let p = n.short_description;
        const u = 1 == i.item_type && 1 == r,
          m = 2 == i.item_type && Boolean(a?.must_purchase_as_set);
        return (
          (2 == i.item_type || (1 == i.item_type && !u)) &&
            (p =
              !m && c > 0 && c < r
                ? (0, v.we)("#Sale_Bundle_CompletePartialSet", c, r)
                : l > 0
                  ? (0, v.we)("#Sale_BundleSave_WithDiscount", l, r)
                  : (0, v.we)("#Sale_BundleSave", r)),
          (0, s.jsx)("div", {
            className: (0, H.A)(
              h().StoreSaleWidgetShortDesc,
              "StoreSaleWidgetShortDesc",
            ),
            children: Boolean(p.startsWith("#") && -1 == p.indexOf(" "))
              ? (0, s.jsx)("span", {
                  className: h().LocalizationSpan,
                  children: (0, v.oW)(
                    p,
                    (0, s.jsx)("i", {}),
                    (0, s.jsx)("i", {}),
                    (0, s.jsx)("i", {}),
                    (0, s.jsx)("i", {}),
                  ),
                })
              : p,
          })
        );
      }
    },
    94095: (e, t, i) => {
      "use strict";
      i.d(t, { w: () => j });
      var s = i(7850),
        a = i(81886),
        n = i(40807),
        o = i(3740),
        l = i(39777),
        r = i(58918),
        d = i(54906),
        c = i(43976),
        p = i(18654),
        u = i.n(p),
        m = i(26408),
        h = i(52038),
        _ = i(61859),
        x = i(91675);
      function j(e) {
        const {
            id: t,
            bShowDemoButton: i,
            bShowPurchaseOptionsButton: p,
            fnOnPurchaseOptionsClick: j,
            bHidePrice: f,
            bShowDeckCompatibilityDialog: g,
            className: v,
            bShowCartButton: b,
          } = e,
          { data: w } = (0, l.J$)(t),
          { data: C } = (0, l.by)(t),
          { data: N } = (0, l.Q_)(t),
          { bIsOwned: y } = (0, r.ZJ)(t);
        if (!w) return null;
        const B =
            (1 === w.type && !C?.is_coming_soon) ||
            (w.related_items?.demo_appid &&
              w.related_items?.demo_appid.length > 0),
          P = (0, a.vm)(w.type),
          W = i && P && B;
        let A = null;
        if (!y && N?.is_free_to_keep && N?.free_to_keep_ends) {
          const e = N.free_to_keep_ends,
            t = (0, _.we)(
              "#Sale_default_label_Free_Promo_Description_Short",
              (0, _.$z)(e) + " @ " + (0, x.KC)(e, { bForce24HourClock: !1 }),
            );
          A = (0, s.jsxs)("div", {
            className: u().PurchaseOptionDetails,
            children: [
              t,
              (0, s.jsx)(m.o, {
                tooltip: (0, _.we)(
                  "#Sale_default_Tooltip_Free_Promo_Limitation",
                ),
              }),
            ],
          });
        }
        return (0, s.jsxs)("div", {
          className: (0, h.A)(u().StoreActionWidgetContainer, v),
          children: [
            A,
            (0, s.jsxs)("div", {
              className: u().StoreSalePriceActionWidgetContainer,
              children: [
                Boolean(W) && (0, s.jsx)(n.j, { id: t, className: u().Action }),
                Boolean(!f) &&
                  1 !== w.type &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      Boolean(p && !w.is_free) &&
                        (0, s.jsx)(S, { fnOnPurchaseOptionsClick: j }),
                      Boolean(b && !w.is_free) &&
                        (0, s.jsx)(c.h, { id: t, className: "CartBtn" }),
                    ],
                  }),
                Boolean(!f) && (0, s.jsx)(o.N, { id: t }),
                Boolean(g) && (0, s.jsx)(d.Q8, { id: t }),
              ],
            }),
          ],
        });
      }
      function S(e) {
        return (0, s.jsx)("div", {
          className: u().Action,
          onClick: e.fnOnPurchaseOptionsClick,
          children: (0, s.jsx)("span", {
            children: (0, _.we)(
              "#EventDisplay_CallToAction_ShowPurchaseOptions_Button",
            ),
          }),
        });
      }
    },
  },
]);
