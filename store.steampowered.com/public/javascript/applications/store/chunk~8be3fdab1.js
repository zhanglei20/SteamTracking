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
    6866: (e, t, i) => {
      "use strict";
      i.d(t, { Pm: () => u, d$: () => m, tB: () => p });
      var s = i(7850),
        n = i(15759),
        a = i(55963),
        o = i(32754),
        l = i(61336),
        r = i(78327),
        d = i(45699);
      function c(e, t) {
        return (0, n.p)(
          e,
          (function (e) {
            if (!e) return;
            let t = e?.jsondata?.read_more_link
              ? (0, l.wm)(e.jsondata.read_more_link).toLocaleLowerCase()
              : void 0;
            return t ? [t] : void 0;
          })(t),
        );
      }
      function p(e, t) {
        return e
          ? (e = c(e, t)
              ? (r.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                (0, n.E)(e)
              : (0, l.NT)(e))
          : "";
      }
      function u(e, t, i) {
        let n = e;
        return (
          n.toLowerCase().startsWith("http") || (n = "http://" + n),
          (0, s.jsx)(m, { url: n, event: t, children: i || e })
        );
      }
      const m = (e) => {
        const { url: t, event: i, className: r, style: c } = e;
        let u,
          m = (0, a.OZ)(t);
        (m = p(m, i)), (0, n.p)(m) && (u = "noopener nofollow");
        const h =
          "string" == typeof e.children &&
          e.children.length > 0 &&
          t &&
          !t.startsWith("steam://")
            ? (0, l.Qz)(t)
            : void 0;
        return (0, s.jsx)(o.Gq, {
          toolTipContent: h,
          direction: "top",
          children: (0, s.jsx)(d.Ii, {
            className: r,
            href: m,
            rel: u,
            id: e.id,
            style: c,
            children: e.children,
          }),
        });
      };
    },
    41399: (e, t, i) => {
      "use strict";
      i.d(t, { p: () => V });
      var s = i(7850),
        n = i(45699),
        a = i(76217),
        o = i(23310),
        l = i(78588),
        r = i(39777),
        d = i(7338),
        c = i(75233),
        p = i(90626),
        u = i(18654),
        m = i.n(u),
        h = i(99956);
      function _(e) {
        const { id: t } = e;
        return t ? (0, s.jsx)(j, { id: t }) : null;
      }
      function j(e) {
        const { id: t } = e,
          i = (function (e) {
            const [t, i] = (0, p.useState)(void 0),
              { data: s } = (0, r.J$)(e),
              { data: n } = (0, r.xz)(e),
              a = (0, c.jE)(),
              o = (0, d.eG)();
            return (
              (0, p.useEffect)(() => {
                if (s)
                  if (n && n.length > 0) i(n);
                  else if (s.related_items?.parent_appid) {
                    const e = { appid: s.related_items?.parent_appid };
                    (async () => {
                      const t = await a.fetchQuery((0, r.Ec)(o, e));
                      t && t.length > 0 && i(t);
                    })();
                  }
              }, [o, a, s, n]),
              t
            );
          })(t);
        return i
          ? (0, s.jsx)("div", {
              className: m().StoreSaleWidgetTags,
              children: i
                .slice(0, 10)
                .map((e) =>
                  (0, s.jsx)(
                    h.p,
                    { tagid: e.tagid, className: m().AppTag },
                    "tag_" + e.tagid,
                  ),
                ),
            })
          : null;
      }
      var x = i(42834),
        f = i(52541),
        S = i(58918),
        g = i(61859),
        v = i(706);
      const w = 6;
      function b(e) {
        const { id: t, bHideInLibraryApps: i } = e,
          { data: n } = (0, r.J$)(t),
          [a, o] = p.useState(null),
          l = 2 == n?.item_type,
          { data: d } = (0, S.$Y)();
        if (
          (p.useEffect(() => {
            n &&
              (1 == n.item_type || 2 == n.item_type
                ? o(
                    (n.included_appids || [])
                      .filter((e) => !l || !i || !d?.has(e))
                      .map((e) => ({ appid: e })),
                  )
                : console.error(
                    "ContentsPreviewList unexpected store item type: ",
                    n.item_type,
                  ));
          }, [n, i, l, d]),
          !a || 0 == a.length)
        )
          return null;
        const c = a.length;
        let u = (0, g.Yp)("#Sale_ContentPreview", c);
        if (l && n) {
          const e = n.included_appids?.length || 0;
          e != c &&
            (u = (0, g.we)("#Sale_Bundle_CompletePartialSet", e - c, e));
        }
        return (0, s.jsxs)("div", {
          className: m().BundleContentPreview,
          children: [
            (0, s.jsxs)("div", {
              className: m().ContentsCount,
              children: [
                l &&
                  (0, s.jsx)("span", {
                    className: m().BundleTag,
                    children: (0, g.we)("#AppType_bundle"),
                  }),
                u,
              ],
            }),
            (0, s.jsx)("div", {
              className: m().PreviewCtn,
              children: a
                .slice(0, w)
                .map((e) => (0, s.jsx)(N, { id: e }, `preview${(0, f.ER)(e)}`)),
            }),
          ],
        });
      }
      function N(e) {
        const { id: t } = e,
          { data: i } = (0, r.f2)(t),
          { data: n } = (0, r.U2)(t);
        if (!i || !n) return null;
        const a = (0, x.b0)(i, "small_capsule");
        return (0, s.jsx)(v.Q, {
          id: t,
          className: m().PreviewItem,
          hoverProps: { direction: "right", style: { minWidth: "350px" } },
          children: (0, s.jsx)("img", {
            src: a,
            className: m().PreviewImg,
            loading: "lazy",
            alt: n.name || "",
          }),
        });
      }
      var C = i(3740),
        y = i(62349),
        B = i(5309),
        P = i(30020),
        W = i(71420),
        A = i(80696),
        k = i(14987),
        T = i(60014),
        D = i(6866),
        O = i(35380),
        I = i(91822),
        E = i(55963),
        L = i(73371),
        R = i.n(L),
        H = i(52038),
        F = i(78327),
        Q = i(79613),
        $ = i(49411),
        J = i(54492),
        M = i(72237),
        z = i(70300),
        G = i(12424),
        U = i(72860),
        Y = i(88961),
        Z = i(94095),
        q = i(94636),
        K = i(24267);
      function V(e) {
        const {
            id: t,
            type: i,
            bShowDemoButton: d,
            bPreferDemoStorePage: c,
            bHidePrice: u,
            bUseSubscriptionLayout: h,
            bHidePlatforms: j,
            bHideContainedApps: x,
            bAllowTwoLinesForHeader: g,
            bShowReviewSummary: w,
            bShowDeckCompatibilityDialog: N,
            bAutoFocus: B,
            fnOnClickOverride: L,
            bIsMarketingMessage: V,
            bPreferAssetWithoutOverride: te,
          } = e,
          ie = (0, O.zl)(t, i),
          [se, ne] = (0, p.useState)(!1),
          ae = (0, T.n9)(),
          oe = (0, $.w)(),
          { data: le } = (0, r.U2)(ie),
          { data: re } = (0, r.Q_)(ie),
          { data: de } = (0, r.by)(ie),
          { data: ce } = (0, S.$Y)(),
          pe = (0, k._)(ie),
          ue = (0, p.useRef)(null),
          [me, he] = (0, p.useState)(!1),
          _e = (0, F.Qn)();
        (0, p.useEffect)(() => {
          ue.current && he(ue.current.offsetWidth < 370);
        }, [ue]);
        const je = (0, p.useMemo)(
            () => (c && le && (0, y.J)(le) ? { appid: (0, y.S)(le)[0] } : ie),
            [c, ie, le],
          ),
          xe = (0, D.tB)((0, W._)(le, c));
        if (!le) return null;
        const fe = le.included_appids?.length || 0,
          Se = le.included_appids?.filter((e) => ce?.has(e))?.length || 0,
          ge = 2 == le.item_type && Boolean(re?.must_purchase_as_set),
          ve = (0, E.L3)(ae),
          we = Boolean(!x && fe > 1),
          be = 1 == le.item_type && 1 == fe,
          Ne = 0 == le.item_type || be,
          Ce = be && le.appid,
          ye = (0, E.It)(xe, ae, oe),
          Be = ((0, Q.Ae)(), le.name || ""),
          Pe = (0, P.Nq)(de, re),
          We = _e || !de?.is_coming_soon || Pe;
        return (0, s.jsxs)(a.Z, {
          className: (0, H.A)({
            [m().StoreSaleWidgetOuterContainer]: !0,
            [m().AllowTwoLineHeader]: g,
            StoreSaleWidgetOuterContainer: !0,
          }),
          "flow-children": "grid",
          navEntryPreferPosition: o.iU.PREFERRED_CHILD,
          autoFocus: B,
          navKey: "preview_widget_" + (0, f.ER)(ie),
          children: [
            (0, s.jsx)(z.oj, {
              appid: Ne && "appid" in ie ? ie.appid : void 0,
              children: (0, s.jsxs)(n.ml, {
                onClick: V ? L : void 0,
                className: (0, H.A)({
                  [m().StoreSaleWidgetContainer]: !0,
                  [m().SaleItemDefaultCapsuleDisplay]: !0,
                  [m().MarketingMessage]: V,
                }),
                ...(0, U.S)(le, ae, _e, Boolean(c), void 0, L),
                preferredFocus: we,
                children: [
                  (0, s.jsx)("div", {
                    className: (0, H.A)(m().StoreSaleWidgetHalfLeft),
                    children: (0, s.jsx)(v.Q, {
                      id: 0 == le.item_type ? je : void 0,
                      children: (0, s.jsxs)("div", {
                        className: m().StoreSaleWidgetImage,
                        children: [
                          (0, s.jsx)(Y.V, { appids: pe }),
                          (0, s.jsx)(l.a, {
                            id: ie,
                            imageType: "header",
                            bPreferAssetWithoutOverride: te,
                          }),
                          (0, s.jsx)(J.J, { id: ie }),
                          (0, s.jsx)(A.m, {
                            id: ie,
                            active: ie && se,
                            bIsHoverMode: !0,
                            bGrowOnHover: !0,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: (0, H.A)({
                      [m().StoreSaleWidgetRight]: !0,
                      [m().Bundle]: we,
                    }),
                    children: [
                      Boolean(Ne && !L) &&
                        (0, s.jsx)(q.E, {
                          id: ie,
                          classOverride: (0, H.A)(
                            R().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: ve,
                        }),
                      (0, s.jsx)("div", {
                        className: m().TitleCtn,
                        children: (0, s.jsx)("a", {
                          href: L ? void 0 : ye,
                          target: F.TS.IN_CLIENT ? void 0 : "_blank",
                          onClick: L,
                          children: (0, s.jsx)("div", {
                            className: (0, H.A)(
                              m().StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle",
                            ),
                            children: Be,
                          }),
                        }),
                      }),
                      !we && (0, s.jsx)(_, { id: ie }),
                      (0, s.jsxs)("div", {
                        className: m().WidgetReleaseDateAndPlatformCtn,
                        ref: ue,
                        children: [
                          Ne && (0, s.jsx)(X, { id: ie }),
                          !we &&
                            !j &&
                            ie &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(M.Q, {
                                  id: ie,
                                  bMinimizePlatforms: me,
                                }),
                                Boolean(N && 0 == le.item_type) &&
                                  (0, s.jsx)(I.kk, {
                                    className: m().DeckCompatIcon,
                                    id: ie,
                                  }),
                              ],
                            }),
                        ],
                      }),
                      !we &&
                        w &&
                        ie &&
                        (0, s.jsx)("div", {
                          className: m().ReviewScores,
                          children: (0, s.jsx)(K.J, { id: ie }),
                        }),
                      we &&
                        ie &&
                        (0, s.jsx)(b, {
                          id: ie,
                          bHideInLibraryApps:
                            !ge && 2 == le.item_type && Se < fe,
                        }),
                      Boolean(Ne) && (0, s.jsx)(ee, { id: ie }),
                      Boolean(!L)
                        ? (0, s.jsx)(s.Fragment, {
                            children:
                              h && Ne && Ce
                                ? (0, s.jsx)(G.E, {
                                    appid: Ce,
                                    bIsMuted: Boolean(se),
                                  })
                                : (0, s.jsx)(Z.w, {
                                    id: ie,
                                    bShowDemoButton: d,
                                    bHidePrice: u,
                                    bHideWishlistButton: We,
                                    bShowDeckCompatibilityDialog: N,
                                  }),
                          })
                        : (0, s.jsx)("div", {
                            className: m().StoreActionWidgetContainer,
                            children: (0, s.jsx)("div", {
                              className:
                                m().StoreSalePriceActionWidgetContainer,
                              children: (0, s.jsx)(C.N, { id: ie }),
                            }),
                          }),
                      (0, s.jsx)("div", {
                        className: m().StoreSaleWidgetBgTint,
                        children: (0, s.jsx)(l.a, {
                          id: ie,
                          bPreferAssetWithoutOverride: te,
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
                className: m().RecommendationReason,
                children: e.strReason,
              }),
          ],
        });
      }
      function X(e) {
        const { id: t } = e,
          { data: i } = (0, r.by)(t);
        return i
          ? (0, s.jsx)("div", {
              className: m().StoreSaleWidgetRelease,
              children: (0, B.CC)(i),
            })
          : null;
      }
      function ee(e) {
        const { id: t } = e,
          { data: i } = (0, r.U2)(t),
          { data: n } = (0, r.Q_)(t),
          { data: a } = (0, r.wl)(t),
          { data: o } = (0, S.$Y)();
        if (!(i && a && a.short_description && o)) return null;
        const l = n?.discount_pct || 0,
          d = i.included_appids?.length || 0,
          c = i.included_appids?.filter((e) => o?.has(e))?.length || 0;
        let p = a.short_description;
        const u = 1 == i.item_type && 1 == d,
          h = 2 == i.item_type && Boolean(n?.must_purchase_as_set);
        return (
          (2 == i.item_type || (1 == i.item_type && !u)) &&
            (p =
              !h && c > 0 && c < d
                ? (0, g.we)("#Sale_Bundle_CompletePartialSet", c, d)
                : l > 0
                  ? (0, g.we)("#Sale_BundleSave_WithDiscount", l, d)
                  : (0, g.we)("#Sale_BundleSave", d)),
          (0, s.jsx)("div", {
            className: (0, H.A)(
              m().StoreSaleWidgetShortDesc,
              "StoreSaleWidgetShortDesc",
            ),
            children: Boolean(p.startsWith("#") && -1 == p.indexOf(" "))
              ? (0, s.jsx)("span", {
                  className: m().LocalizationSpan,
                  children: (0, g.oW)(
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
      i.d(t, { w: () => x });
      var s = i(7850),
        n = i(81886),
        a = i(40807),
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
        j = i(91675);
      function x(e) {
        const {
            id: t,
            bShowDemoButton: i,
            bShowPurchaseOptionsButton: p,
            fnOnPurchaseOptionsClick: x,
            bHidePrice: S,
            bShowDeckCompatibilityDialog: g,
            className: v,
            bShowCartButton: w,
          } = e,
          { data: b } = (0, l.J$)(t),
          { data: N } = (0, l.by)(t),
          { data: C } = (0, l.Q_)(t),
          { bIsOwned: y } = (0, r.ZJ)(t);
        if (!b) return null;
        const B =
            (1 === b.type && !N?.is_coming_soon) ||
            (b.related_items?.demo_appid &&
              b.related_items?.demo_appid.length > 0),
          P = (0, n.vm)(b.type),
          W = i && P && B;
        let A = null;
        if (!y && C?.is_free_to_keep && C?.free_to_keep_ends) {
          const e = C.free_to_keep_ends,
            t = (0, _.we)(
              "#Sale_default_label_Free_Promo_Description_Short",
              (0, _.$z)(e) + " @ " + (0, j.KC)(e, { bForce24HourClock: !1 }),
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
                Boolean(W) && (0, s.jsx)(a.j, { id: t, className: u().Action }),
                Boolean(!S) &&
                  1 !== b.type &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      Boolean(p && !b.is_free) &&
                        (0, s.jsx)(f, { fnOnPurchaseOptionsClick: x }),
                      Boolean(w && !b.is_free) &&
                        (0, s.jsx)(c.h, { id: t, className: "CartBtn" }),
                    ],
                  }),
                Boolean(!S) && (0, s.jsx)(o.N, { id: t }),
                Boolean(g) && (0, s.jsx)(d.Q8, { id: t }),
              ],
            }),
          ],
        });
      }
      function f(e) {
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
