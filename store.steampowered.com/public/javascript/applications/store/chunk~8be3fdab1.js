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
        d = i(94636),
        c = i(39777),
        p = i(7338),
        u = i(75233),
        m = i(90626),
        h = i(18654),
        _ = i.n(h),
        x = i(90421);
      function j(e) {
        const { id: t } = e;
        return t ? (0, s.jsx)(S, { id: t }) : null;
      }
      function S(e) {
        const { id: t } = e,
          i = (function (e) {
            const [t, i] = (0, m.useState)(void 0),
              { data: s } = (0, c.J$)(e),
              { data: a } = (0, c.xz)(e),
              n = (0, u.jE)(),
              o = (0, p.eG)();
            return (
              (0, m.useEffect)(() => {
                if (s)
                  if (a && a.length > 0) i(a);
                  else if (s.related_items?.parent_appid) {
                    const e = { appid: s.related_items?.parent_appid };
                    (async () => {
                      const t = await n.fetchQuery((0, c.Ec)(o, e));
                      t && t.length > 0 && i(t);
                    })();
                  }
              }, [o, n, s, a]),
              t
            );
          })(t);
        return i
          ? (0, s.jsx)("div", {
              className: _().StoreSaleWidgetTags,
              children: i
                .slice(0, 10)
                .map((e) =>
                  (0, s.jsx)(
                    x.p,
                    { tagid: e.tagid, className: _().AppTag },
                    "tag_" + e.tagid,
                  ),
                ),
            })
          : null;
      }
      var f = i(24267),
        g = i(42834),
        v = i(52541),
        b = i(58918),
        w = i(61859),
        C = i(706);
      const N = 6;
      function y(e) {
        const { id: t, bHideInLibraryApps: i } = e,
          { data: a } = (0, c.J$)(t),
          [n, o] = m.useState(null),
          l = 2 == a?.item_type,
          { data: r } = (0, b.$Y)();
        if (
          (m.useEffect(() => {
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
        const d = n.length;
        let p = (0, w.Yp)("#Sale_ContentPreview", d);
        if (l && a) {
          const e = a.included_appids?.length || 0;
          e != d &&
            (p = (0, w.we)("#Sale_Bundle_CompletePartialSet", e - d, e));
        }
        return (0, s.jsxs)("div", {
          className: _().BundleContentPreview,
          children: [
            (0, s.jsxs)("div", {
              className: _().ContentsCount,
              children: [
                l &&
                  (0, s.jsx)("span", {
                    className: _().BundleTag,
                    children: (0, w.we)("#AppType_bundle"),
                  }),
                p,
              ],
            }),
            (0, s.jsx)("div", {
              className: _().PreviewCtn,
              children: n
                .slice(0, N)
                .map((e) => (0, s.jsx)(B, { id: e }, `preview${(0, v.ER)(e)}`)),
            }),
          ],
        });
      }
      function B(e) {
        const { id: t } = e,
          { data: i } = (0, c.f2)(t),
          { data: a } = (0, c.U2)(t);
        if (!i || !a) return null;
        const n = (0, g.b0)(i, "small_capsule");
        return (0, s.jsx)(C.Q, {
          id: t,
          className: _().PreviewItem,
          hoverProps: { direction: "right", style: { minWidth: "350px" } },
          children: (0, s.jsx)("img", {
            src: n,
            className: _().PreviewImg,
            loading: "lazy",
            alt: a.name || "",
          }),
        });
      }
      var P = i(12424),
        W = i(3740),
        A = i(80696),
        k = i(62349),
        D = i(5309),
        O = i(30020),
        R = i(14987),
        T = i(60014),
        E = i(35380),
        H = i(91822),
        I = i(96006),
        L = i(94191),
        F = i(94095),
        Q = i(72860),
        U = i(70300),
        J = i(73371),
        M = i.n(J),
        $ = i(54492),
        z = i(52038),
        G = i(78327);
      function Y(e) {
        const {
            id: t,
            type: i,
            bShowDemoButton: p,
            bPreferDemoStorePage: u,
            bHidePrice: h,
            bUseSubscriptionLayout: x,
            bHidePlatforms: S,
            bHideContainedApps: g,
            bAllowTwoLinesForHeader: w,
            bShowReviewSummary: C,
            bShowDeckCompatibilityDialog: N,
            bAutoFocus: B,
            fnOnClickOverride: D,
            bIsMarketingMessage: J,
            bPreferAssetWithoutOverride: Y,
          } = e,
          V = (0, E.zl)(t, i),
          [X, ee] = (0, m.useState)(!1),
          te = (0, T.n9)(),
          { data: ie } = (0, c.U2)(V),
          { data: se } = (0, c.Q_)(V),
          { data: ae } = (0, c.by)(V),
          { data: ne } = (0, b.$Y)(),
          oe = (0, R._)(V),
          le = (0, m.useRef)(null),
          [re, de] = (0, m.useState)(!1),
          ce = (0, G.Qn)();
        (0, m.useEffect)(() => {
          le.current && de(le.current.offsetWidth < 370);
        }, [le]);
        const pe = (0, m.useMemo)(
            () => (u && ie && (0, k.J)(ie) ? { appid: (0, k.S)(ie)[0] } : V),
            [u, V, ie],
          ),
          { strStoreURL: ue, snr: me } = (0, l.x)(ie, u);
        if (!ie) return null;
        const he = ie.included_appids?.length || 0,
          _e = ie.included_appids?.filter((e) => ne?.has(e))?.length || 0,
          xe = 2 == ie.item_type && Boolean(se?.must_purchase_as_set),
          je = Boolean(!g && he > 1),
          Se = 1 == ie.item_type && 1 == he,
          fe = 0 == ie.item_type || Se,
          ge = Se && ie.appid,
          ve = ie.name || "",
          be = (0, O.Nq)(ae, se),
          we = ce || !ae?.is_coming_soon || be;
        return (0, s.jsxs)(n.Z, {
          className: (0, z.A)({
            [_().StoreSaleWidgetOuterContainer]: !0,
            [_().AllowTwoLineHeader]: w,
            StoreSaleWidgetOuterContainer: !0,
          }),
          "flow-children": "grid",
          navEntryPreferPosition: o.iU.PREFERRED_CHILD,
          autoFocus: B,
          navKey: "preview_widget_" + (0, v.ER)(V),
          children: [
            (0, s.jsx)(U.oj, {
              appid: fe && "appid" in V ? V.appid : void 0,
              children: (0, s.jsxs)(a.ml, {
                onClick: J ? D : void 0,
                className: (0, z.A)({
                  [_().StoreSaleWidgetContainer]: !0,
                  [_().SaleItemDefaultCapsuleDisplay]: !0,
                  [_().MarketingMessage]: J,
                }),
                ...(0, Q.S)(ie, te, ce, Boolean(u), void 0, D),
                preferredFocus: je,
                children: [
                  (0, s.jsx)("div", {
                    className: (0, z.A)(_().StoreSaleWidgetHalfLeft),
                    children: (0, s.jsx)(K, {
                      id: pe,
                      strURL: ue,
                      children: (0, s.jsxs)("div", {
                        className: _().StoreSaleWidgetImage,
                        children: [
                          (0, s.jsx)(L.V, { appids: oe }),
                          (0, s.jsx)(r.a, {
                            id: V,
                            imageType: "header",
                            bPreferAssetWithoutOverride: Y,
                          }),
                          (0, s.jsx)($.J, { id: V }),
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
                    className: (0, z.A)({
                      [_().StoreSaleWidgetRight]: !0,
                      [_().Bundle]: je,
                    }),
                    children: [
                      Boolean(fe && !D) &&
                        (0, s.jsx)(d.E, {
                          id: V,
                          classOverride: (0, z.A)(
                            M().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: me,
                        }),
                      (0, s.jsx)("div", {
                        className: _().TitleCtn,
                        children: (0, s.jsx)("a", {
                          href: D ? void 0 : ue,
                          target: G.TS.IN_CLIENT ? void 0 : "_blank",
                          onClick: D,
                          children: (0, s.jsx)("div", {
                            className: (0, z.A)(
                              _().StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle",
                            ),
                            children: ve,
                          }),
                        }),
                      }),
                      !je && (0, s.jsx)(j, { id: V }),
                      (0, s.jsxs)("div", {
                        className: _().WidgetReleaseDateAndPlatformCtn,
                        ref: le,
                        children: [
                          fe && (0, s.jsx)(Z, { id: V }),
                          !je &&
                            !S &&
                            V &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(I.Q, {
                                  id: V,
                                  bMinimizePlatforms: re,
                                }),
                                Boolean(N && 0 == ie.item_type) &&
                                  (0, s.jsx)(H.kk, {
                                    className: _().DeckCompatIcon,
                                    id: V,
                                  }),
                              ],
                            }),
                        ],
                      }),
                      !je &&
                        C &&
                        V &&
                        (0, s.jsx)("div", {
                          className: _().ReviewScores,
                          children: (0, s.jsx)(f.J, { id: V }),
                        }),
                      je &&
                        V &&
                        (0, s.jsx)(y, {
                          id: V,
                          bHideInLibraryApps:
                            !xe && 2 == ie.item_type && _e < he,
                        }),
                      Boolean(fe) && (0, s.jsx)(q, { id: V }),
                      Boolean(!D)
                        ? (0, s.jsx)(s.Fragment, {
                            children:
                              x && fe && ge
                                ? (0, s.jsx)(P.E, {
                                    appid: ge,
                                    bIsMuted: Boolean(X),
                                  })
                                : (0, s.jsx)(F.w, {
                                    id: V,
                                    bShowDemoButton: p,
                                    bHidePrice: h,
                                    bHideWishlistButton: we,
                                    bShowDeckCompatibilityDialog: N,
                                  }),
                          })
                        : (0, s.jsx)("div", {
                            className: _().StoreActionWidgetContainer,
                            children: (0, s.jsx)("div", {
                              className:
                                _().StoreSalePriceActionWidgetContainer,
                              children: (0, s.jsx)(W.N, { id: V }),
                            }),
                          }),
                      (0, s.jsx)("div", {
                        className: _().StoreSaleWidgetBgTint,
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
                className: _().RecommendationReason,
                children: e.strReason,
              }),
          ],
        });
      }
      function K(e) {
        const { id: t, strURL: i, children: a } = e;
        return "appid" in t
          ? (0, s.jsxs)(C.Q, { id: t, children: [a, " "] })
          : (0, s.jsx)("a", { href: i, children: a });
      }
      function Z(e) {
        const { id: t } = e,
          { data: i } = (0, c.by)(t);
        return i
          ? (0, s.jsx)("div", {
              className: _().StoreSaleWidgetRelease,
              children: (0, D.CC)(i),
            })
          : null;
      }
      function q(e) {
        const { id: t } = e,
          { data: i } = (0, c.U2)(t),
          { data: a } = (0, c.Q_)(t),
          { data: n } = (0, c.wl)(t),
          { data: o } = (0, b.$Y)();
        if (!(i && n && n.short_description && o)) return null;
        const l = a?.discount_pct || 0,
          r = i.included_appids?.length || 0,
          d = i.included_appids?.filter((e) => o?.has(e))?.length || 0;
        let p = n.short_description;
        const u = 1 == i.item_type && 1 == r,
          m = 2 == i.item_type && Boolean(a?.must_purchase_as_set);
        return (
          (2 == i.item_type || (1 == i.item_type && !u)) &&
            (p =
              !m && d > 0 && d < r
                ? (0, w.we)("#Sale_Bundle_CompletePartialSet", d, r)
                : l > 0
                  ? (0, w.we)("#Sale_BundleSave_WithDiscount", l, r)
                  : (0, w.we)("#Sale_BundleSave", r)),
          (0, s.jsx)("div", {
            className: (0, z.A)(
              _().StoreSaleWidgetShortDesc,
              "StoreSaleWidgetShortDesc",
            ),
            children: Boolean(p.startsWith("#") && -1 == p.indexOf(" "))
              ? (0, s.jsx)("span", {
                  className: _().LocalizationSpan,
                  children: (0, w.oW)(
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
