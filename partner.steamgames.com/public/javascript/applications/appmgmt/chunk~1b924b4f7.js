/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7043],
  {
    96434: (e) => {
      e.exports = {
        PriceCell: "_1sKIcxV1HaEWCa1x_sSuVT",
        PricePrefix: "gPcNwuh4LJPmwRZrAbrA5",
        PriceSuffix: "_3AEJb3AH01qQaG89JOYAh4",
        PackagePricingContext: "_3_niTWrZ8h834BjbLqyByP",
        EditablePrice: "pm5xM6Dyy-9XY0g9TpjX1",
        PriceInput: "_1PcwXjG-2t5JOJuL7yhOYG",
        USD: "_1C7qRJ6YdGWEwEK4QsMRUX",
        ProposedPrice: "rVkmDwpTOXR4DqdBdbiPf",
        ApprovedCanPublish: "_1JBd8mxmIpyOChqhkSKSUg",
        ChangedLocally: "_5mvGWs3IDSRLfxvHx8wig",
        WarningPrice: "_1Qd5uW_BK8PBDJiDBjDCPN",
        SevereWarningPrice: "_1o6zP8gegcka6hdQA2lJjv",
        BadPrice: "_18aiu0HZznAMnGQfWExtTm",
        PriceChange: "w-K7qF60ELXWtEjymcY68",
        NewPrice: "_3sgbtvMYimrD0kSs3VCoPx",
        PriceAlert: "_2eadUvk4zK7FL9FFvy3Gd2",
        PriceChangeArrow: "_1z0l2rhYAxXf6M_tgnczgZ",
        PriceIncrease: "_2jQyP7o7hbWM4EhAkKLAks",
        PricePopout: "_1AoyzK2lSPVwQJoIYEjFbR",
        DetailRow: "_3P_fJH02fBcdGM2etenWu7",
        DetailLabel: "_3RXb3FOdpsOt-aVMvfnb6W",
        DetailPrice: "_2k3CVLd6A1QAixKOkfGx6P",
        DetailButton: "_3ILP7OdXtGjDaSvJqI81RV",
        Disabled: "_3mZHsQVQB8w84OblleAq68",
        HoverToolTip: "_36qS74l1tXSXwGdyfIFQ-G",
      };
    },
    16180: (e) => {
      e.exports = {
        Option: "_3a3fNdwhCItYEc1SsUNP",
        RadioCircle: "_13ZbEe1M2PJ-21o9RTar64",
      };
    },
    65274: (e) => {
      e.exports = {
        Text: "f6hU22EA7Z8peFWZVBJU",
        Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
        "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
        "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
        "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
        "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
        "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
        "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
        "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
        "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
        "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
        TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
        TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
        LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
        WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
      };
    },
    31389: (e) => {
      e.exports = {
        PriceGuidelinesPicker: "_2skmsPR7jCBo5xHN2v_E6A",
        SelectionIndicator: "krnfTfrwAOa14We87yU4k",
        GuidelinesPanel: "_29sQa7P4ANi-KFpS_lkroj",
        GuidelinesDescription: "_3poXK_qmmnRcHLvBGFqi8h",
        GuidelinesGrid: "_1Kz7R_x889mAnYo3uORnzL",
        GridElement: "_1r_b9RJn1Ca6KSjtSm7RPF",
        CurrentPrice: "_3wZdsoh1-V6RQ2rsPkj-ga",
      };
    },
    65697: (e) => {
      e.exports = { PopoverMenu: "_2i2FUBZKGyiP5Sb6tuASpO" };
    },
    10754: (e, r, n) => {
      "use strict";
      n.d(r, {
        mK: () => E,
        Gy: () => T,
        sh: () => f,
        T6: () => x,
        Oo: () => D,
      });
      var t = n(7850),
        o = n(13578),
        i = n(48174),
        s = n(82314),
        a = n(17084),
        c = n(9554),
        l = n(90626),
        u = n(16676),
        d = n(12155),
        b = n(32754),
        m = n(52038),
        h = n(61859),
        S = n(47184),
        p = n(96434),
        y = n.n(p),
        C = n(14336);
      let g = null;
      function P(e) {
        const { packageID: r, strPriceKey: n } = e,
          {
            nPriceInCents: o,
            nPublishedPriceInCents: i,
            nProposedPriceInCents: s,
            nSuggestedPriceInCents: c,
            fnSetPrice: l,
          } = (0, a.xQ)(r, n),
          { nPriceInCents: u } = (0, a.xQ)(r, "USD"),
          d = !(!s || (i && s == i)),
          p = (0, a.d$)(r),
          P = p && E(p.rtSubmitted),
          { data: f } = (0, C.js)(p?.submitterID),
          _ = f ? f.m_strPlayerName : p?.submitterID;
        return (i || d || c) && g == r + n
          ? (0, t.jsxs)("div", {
              className: y().PricePopout,
              children: [
                !!i &&
                  (0, t.jsxs)(b.he, {
                    className: y().DetailRow,
                    direction: "left",
                    toolTipContent: (0, h.we)(
                      "#PricingDashboard_CurrentPriceOnStore_ttip",
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: y().DetailLabel,
                        children: (0, h.we)(
                          "#PricingDashboard_CurrentPriceOnStore",
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: y().DetailPrice,
                        children: (0, a.Wx)(i, n).join(""),
                      }),
                      (0, t.jsx)(b.he, {
                        className: (0, m.A)(
                          y().DetailButton,
                          i == o && y().Disabled,
                        ),
                        onClick: () => l(i),
                        bDisabled: i == o,
                        toolTipContent: (0, h.we)(
                          "#PricingDashboard_UseThisOldPrice_ttip",
                        ),
                        children: (0, h.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                d &&
                  (0, t.jsxs)(b.he, {
                    className: y().DetailRow,
                    direction: "left",
                    toolTipContent: (0, h.we)(
                      "#PricingDashboard_ProposedPrice_ttip",
                      _,
                      P,
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: y().DetailLabel,
                        children: (0, h.we)("#PricingDashboard_ProposedPrice"),
                      }),
                      (0, t.jsx)("div", {
                        className: y().DetailPrice,
                        children: (0, a.Wx)(s, n).join(""),
                      }),
                      (0, t.jsx)(b.he, {
                        className: (0, m.A)(
                          y().DetailButton,
                          s == o && y().Disabled,
                        ),
                        onClick: () => l(s),
                        bDisabled: s == o,
                        toolTipContent: (0, h.we)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, h.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                !!c &&
                  (0, t.jsxs)(b.he, {
                    className: y().DetailRow,
                    direction: "left",
                    toolTipContent: S.g.Localize(
                      "#PricingDashboard_Method_SuggestedPrice_ttip",
                      (0, a.Wx)(u, "USD").join(""),
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: y().DetailLabel,
                        children: S.g.Localize(
                          "#PricingDashboard_Method_SuggestedPrice",
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: y().DetailPrice,
                        children: (0, a.Wx)(c, n).join(""),
                      }),
                      (0, t.jsx)(b.he, {
                        className: (0, m.A)(
                          y().DetailButton,
                          c == o && y().Disabled,
                        ),
                        onClick: () => l(c),
                        bDisabled: c == o,
                        toolTipContent: (0, h.we)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, h.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
              ],
            })
          : null;
      }
      function f(e) {
        const { cell: r, row: n } = e,
          i = n.original.packageID,
          s = r.getValue(),
          {
            nPriceInCents: d,
            nPublishedPriceInCents: b,
            nProposedPriceInCents: m,
            fnSetPrice: h,
          } = (0, a.xQ)(i, s),
          [S, p, C] = (0, a.Wx)(d, s),
          f = (0, a.Gs)(s),
          D = l.useRef(void 0),
          { strClassName: E } = k(i, s),
          I = "USD" == s,
          v = m ?? b,
          A = d != v;
        return (0, t.jsxs)("div", {
          ref: D,
          onKeyDown: c.nm,
          className: E,
          children: [
            A && (0, t.jsx)(T, { nPriceInCents: d, nSavedPriceInCents: v }),
            (0, t.jsx)("div", { className: y().PricePrefix, children: S && S }),
            (0, t.jsx)(o.n, {
              menuTarget: (0, t.jsx)("div", {
                className: y().EditablePrice,
                children: (0, t.jsx)(u.pd, {
                  value: p,
                  className: y().PriceInput,
                  onChange: (e) => {
                    const r = e.target.value.replace(/[^0-9]/g, "");
                    let n = Number(r || 0);
                    if (Number.isNaN(n)) return;
                    f.bWholeUnitsOnly && (n *= 100);
                    const t = 2147483647;
                    n > t && (n = t), h(n);
                  },
                  onFocus: () => {
                    g = i + s;
                  },
                }),
              }),
              direction: "up",
              interactionMode: 2,
              dismissOnClick: !0,
              renderWhenClosed: !1,
              children: (0, t.jsx)(P, { packageID: i, strPriceKey: s }),
            }),
            (0, t.jsx)("div", { className: y().PriceSuffix, children: C && C }),
            I &&
              (0, t.jsx)(_, {
                packageID: i,
                appids: n.original.appids,
                bCanSetToFree: n.original.bCanSetToFree,
              }),
            (0, t.jsx)(x, { packageID: i, strPriceKey: s }),
          ],
        });
      }
      function _(e) {
        const { packageID: r, appids: n, bCanSetToFree: o } = e,
          { fnApplyGuidelines: c } = (0, i.gC)((0, a.$i)());
        return (0, t.jsx)(s.x, {
          fnGetUSDPriceInCents: () => (0, a.FR)(r, "USD"),
          fnOnUpdate: (e) => c(r, e),
          strDescription: S.g.Localize(
            "#PricingDashboard_GuidelinesPickerDescription_New",
          ),
          nPackageID: r,
          appids: n,
          bCanSetToFree: o,
        });
      }
      function x(e) {
        const { packageID: r, strPriceKey: n } = e,
          { strPriceWarning: o, bBadPrice: i, bShowWarningIcon: s } = k(r, n);
        return s
          ? (0, t.jsx)(b.he, {
              className: y().PriceAlert,
              strTooltipClassname: y().HoverToolTip,
              toolTipContent: o,
              direction: "top",
              children: (0, t.jsx)(d.eTF, {
                color: i ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            })
          : null;
      }
      const D = 2;
      function k(e, r) {
        const {
            nPriceInCents: n,
            nPublishedPriceInCents: t,
            nProposedPriceInCents: o,
            nMinPriceInCents: i,
            nMaxPriceInCents: s,
            nMaxDiscountPercentage: c,
            nSuggestedPriceInCents: u,
          } = (0, a.xQ)(e, r),
          d = (0, a.d$)(e),
          b = "USD" == r,
          S = n != (o ?? t),
          p = n < i,
          C = !!s && n > s,
          g = !!u && n > u * D,
          P = !!u && n < u / D,
          f = !!u && n < u && !!c,
          _ = !!u && n == u && !!c,
          x =
            (C && (0, h.we)("#PricingDashboard_PriceIncreaseDisallowed")) ||
            (p &&
              (0, h.we)(
                "#PricingDashboard_PriceTooLow",
                (0, a.Wx)(i, r).join(""),
              )) ||
            (g &&
              (0, h.we)(
                "#PricingDashboard_PriceMuchHigherThanMethod",
                (0, a.Wx)(u, r).join(""),
              )) ||
            (g && !1) ||
            (P &&
              (0, h.we)(
                "#PricingDashboard_PriceMuchLowerThanMethod",
                (0, a.Wx)(u, r).join(""),
              )) ||
            (P && !1) ||
            (f &&
              (0, h.we)(
                "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                c,
              )) ||
            (_ && (0, h.we)("#PricingDashboard_PriceCheap", c)),
          k = C || p,
          T = g || P,
          E = k || T || f,
          I = !(S || !o || (t && o == t)),
          v = 4 == d?.eState,
          A = (0, m.A)(
            y().PriceCell,
            b && y().USD,
            S && y().ChangedLocally,
            I && y().ProposedPrice,
            v && y().ApprovedCanPublish,
            E && y().WarningPrice,
            T && y().SevereWarningPrice,
            k && y().BadPrice,
          );
        return l.useMemo(
          () => ({
            strPriceWarning: x,
            strClassName: A,
            bBadPrice: k,
            bShowSevereWarning: T,
            bShowWarningIcon: E,
          }),
          [x, A, k, T, E],
        );
      }
      function T(e) {
        const { nPriceInCents: r, nSavedPriceInCents: n } = e;
        let o = null,
          i = null,
          s = null,
          a = null;
        if (n) {
          const e = Math.ceil((100 * (r - n)) / n),
            c = r > n;
          (s = c
            ? (0, h.we)("#PricingDashboard_PriceIncreaseBy", e + "%")
            : (0, h.we)("#PricingDashboard_PriceLowerBy", e + "%")),
            (a = (0, m.A)(y().PriceChange, c && y().PriceIncrease)),
            (i = (0, t.jsx)("div", {
              className: y().PriceChangeArrow,
              children: (0, t.jsx)(d.i3G, { angle: c ? 0 : 180 }),
            })),
            (o = e + "%");
        } else
          (o = (0, h.we)("#PricingDashboard_PriceIsNew_Short")),
            (a = (0, m.A)(y().NewPrice));
        return (0, t.jsxs)(b.he, {
          className: a,
          strTooltipClassname: y().HoverToolTip,
          toolTipContent: s,
          direction: "top",
          children: [i, o],
        });
      }
      function E(e) {
        return new Date(1e3 * e).toLocaleString(h.pf.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
    },
    80797: (e, r, n) => {
      "use strict";
      n.d(r, { Q: () => i });
      var t = n(90626);
      function o(e, r, n) {
        return "function" == typeof e ? e(r, n) : t.cloneElement(e, r);
      }
      function i(e, r, n, t) {
        return o(e || r, n, t);
      }
    },
    20187: (e, r, n) => {
      "use strict";
      n.d(r, { Ae: () => d, EY: () => l, U6: () => u });
      var t = n(7850),
        o = n(41324),
        i = n(75659),
        s = n(64238),
        a = n.n(s),
        c = n(65274);
      function l(e) {
        const { as: r = "span", ref: n, className: i, ...s } = e,
          l = r;
        return (0, t.jsx)(l, {
          ref: n,
          ...(0, o.mz)({ ...s, className: a()(c.Text, i) }, d),
        });
      }
      const u = [
          {
            prop: "weight",
            responsive: !0,
            className: c.TextWeight,
            cssProperty: (e) => ["--text-weight", `var(--font-weight-${e})`],
          },
          {
            prop: "align",
            responsive: !0,
            className: c.TextAlign,
            cssProperty: "--text-align",
          },
          {
            prop: "color",
            cssProperty: (e, r) => [
              "--text-color",
              (0, o.To)(e, r.contrast ?? "body"),
            ],
          },
          {
            prop: "contrast",
            cssProperty: (e, r) => [
              "--text-color",
              (0, o.To)(r.color ?? "text-body", e),
            ],
          },
          { prop: "truncate", className: c.Truncate },
          {
            prop: "lineClamp",
            responsive: !0,
            className: c.LineClamp,
            cssProperty: "--line-clamp",
          },
          {
            prop: "whiteSpace",
            className: c.WhiteSpace,
            cssProperty: "--white-space",
          },
        ],
        d = [
          ...u,
          ...i.L,
          {
            prop: "size",
            responsive: !0,
            className: (e) => c[`TextSize-${e}`],
          },
        ];
    },
    87864: (e, r, n) => {
      "use strict";
      n.d(r, { x: () => s });
      var t = n(88267);
      const o = {
          [t.AI.k_ECurrencyCodeInvalid]: {},
          [t.AI.k_ECurrencyCodeUSD]: { strSymbol: "$" },
          [t.AI.k_ECurrencyCodeGBP]: { strSymbol: "£" },
          [t.AI.k_ECurrencyCodeEUR]: { strSymbol: "€" },
          [t.AI.k_ECurrencyCodeCHF]: { strSymbol: "CHF" },
          [t.AI.k_ECurrencyCodeRUB]: {
            strSymbol: "руб.",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: "",
          },
          [t.AI.k_ECurrencyCodePLN]: {
            strSymbol: "zł",
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeBRL]: {
            strSymbol: "R$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeJPY]: {
            strSymbol: "¥",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeNOK]: {
            strSymbol: "kr",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeIDR]: {
            strSymbol: "Rp",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeMYR]: { strSymbol: "RM" },
          [t.AI.k_ECurrencyCodePHP]: { strSymbol: "P" },
          [t.AI.k_ECurrencyCodeSGD]: { strSymbol: "S$" },
          [t.AI.k_ECurrencyCodeTHB]: { strSymbol: "฿" },
          [t.AI.k_ECurrencyCodeVND]: {
            strSymbol: "₫",
            bWholeUnitsOnly: !0,
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeKRW]: {
            strSymbol: "₩",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeTRY]: {
            strSymbol: "TL",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeUAH]: {
            strSymbol: "₴",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeMXN]: { strSymbol: "Mex$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeCAD]: { strSymbol: "CDN$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeAUD]: { strSymbol: "A$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeNZD]: { strSymbol: "NZ$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeCNY]: { strSymbol: "¥", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeINR]: {
            strSymbol: "₹",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
          },
          [t.AI.k_ECurrencyCodeCLP]: {
            strSymbol: "CLP$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodePEN]: { strSymbol: "S/." },
          [t.AI.k_ECurrencyCodeCOP]: {
            strSymbol: "COL$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeZAR]: {
            strSymbol: "R",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeHKD]: { strSymbol: "HK$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeTWD]: {
            strSymbol: "NT$",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeSAR]: {
            strSymbol: "SR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeAED]: {
            strSymbol: "AED",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeSEK]: {
            strSymbol: "kr",
            bSpaceForSymbol: !0,
            bSuffixSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeARS]: {
            strSymbol: "ARS$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeILS]: { strSymbol: "₪" },
          [t.AI.k_ECurrencyCodeBYN]: { strSymbol: "Br" },
          [t.AI.k_ECurrencyCodeKZT]: {
            strSymbol: "₸",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeKWD]: {
            strSymbol: "KD",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeQAR]: {
            strSymbol: "QR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeCRC]: {
            strSymbol: "₡",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeUYU]: {
            strSymbol: "$U",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeBGN]: {
            strSymbol: "лв",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeHRK]: {
            strSymbol: "kn",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeCZK]: {
            strSymbol: "Kč",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeDKK]: {
            strSymbol: "kr.",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeHUF]: {
            strSymbol: "Ft",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeRON]: {
            strSymbol: "lei",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeMax]: {},
        },
        i = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: t.AI.k_ECurrencyCodeInvalid,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function s(e, r) {
        const n = (function (e) {
            return { ...i, ...o[e], eCurrency: e };
          })(r),
          {
            strSymbol: t,
            bSuffixSymbol: s,
            bSpaceForSymbol: a,
            bWholeUnitsOnly: c,
            strDecimalSymbol: l,
            strThousandsSeparator: u,
          } = n,
          d = e < 0,
          b = c && e % 100 == 0;
        d && (e = -e);
        const m = [];
        for (let r = 0; r < 2; r++)
          b || m.push(e % 10), (e = Math.floor(e / 10));
        !b && l && m.push(l);
        let h = 0;
        do {
          h++ % 3 == 0 && h > 2 && u && m.push(u),
            m.push(e % 10),
            (e = Math.floor(e / 10));
        } while (e > 0);
        const S = m.reverse().join(""),
          p = a ? " " : "",
          y = d ? "-" : "";
        return s ? `${y}${S}${p}${t}` : `${y}${t}${p}${S}`;
      }
    },
    13578: (e, r, n) => {
      "use strict";
      n.d(r, { n: () => h });
      var t = n(7850),
        o = n(91934),
        i = n(64238),
        s = n.n(i),
        a = n(90626),
        c = n(56011),
        l = n(65697);
      function u(e) {
        const {
            direction: r,
            ignoreHorizontal: n,
            ignoreVertical: t,
            dismissOnClick: i,
            interactionMode: s = 0,
          } = e,
          u = (0, a.useRef)(null),
          d = (0, a.useRef)(!1),
          b = (0, a.useRef)(!1),
          m = (0, a.useRef)(null),
          [h, S] = (0, a.useState)(!1),
          [p, y] = (0, a.useMemo)(
            () =>
              (function (e) {
                const [r, n] = (0, o.x)(e, "-");
                return "left" === r || "right" === r ? [void 0, r] : [r, n];
              })(r),
            [r],
          ),
          C = (0, a.useCallback)(() => {
            if (!m.current || !u.current) return;
            const e = m.current.getBoundingClientRect(),
              r = u.current.getBoundingClientRect();
            let o = y;
            const i = m.current.matches(":dir(rtl)");
            i && ("left" === y ? (o = "right") : "right" === y && (o = "left")),
              u.current.style.setProperty("--parentWidth", `${e.width}px`),
              u.current.style.setProperty("--parentHeight", `${e.height}px`);
            let s = 0;
            if (!n) {
              if (r.width) {
                if ("left" === o) {
                  s = (p ? e.right : e.left) - r.width;
                }
                if ("right" === o) {
                  const n = p ? e.left : e.right;
                  s = document.documentElement.clientWidth - (n + r.width);
                }
                void 0 === o &&
                  (s = i
                    ? e.right - r.width
                    : document.documentElement.clientWidth -
                      (e.left + r.width)),
                  (s = Math.min(s, 0));
              }
              "left" === o
                ? p
                  ? ((u.current.style.left = "unset"),
                    (u.current.style.right = `${document.documentElement.clientWidth - e.right + s}px`))
                  : ((u.current.style.left = "unset"),
                    (u.current.style.right = `${document.documentElement.clientWidth - e.left + s}px`))
                : "right" === o
                  ? p
                    ? ((u.current.style.left = `${e.left + s}px`),
                      (u.current.style.right = "unset"))
                    : ((u.current.style.left = `${e.right + s}px`),
                      (u.current.style.right = "unset"))
                  : void 0 === o &&
                    (i
                      ? ((u.current.style.left = "unset"),
                        (u.current.style.right = `${document.documentElement.clientWidth - e.right + s}px`))
                      : ((u.current.style.left = `${e.left + s}px`),
                        (u.current.style.right = "unset")));
            }
            t ||
              ("down" === p
                ? ((u.current.style.top = `${e.bottom}px`),
                  (u.current.style.bottom = "unset"),
                  u.current.style.setProperty(
                    "--availableHeight",
                    document.documentElement.clientHeight - e.bottom + "px",
                  ))
                : "up" === p
                  ? ((u.current.style.top = "unset"),
                    (u.current.style.bottom =
                      document.documentElement.clientHeight - e.top + "px"),
                    u.current.style.setProperty(
                      "--availableHeight",
                      `${e.top}px`,
                    ))
                  : void 0 === p &&
                    ((u.current.style.top = `${e.top}px`),
                    (u.current.style.bottom = "unset"),
                    u.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - e.top + "px",
                    )));
          }, [y, n, t, p]),
          g = (0, a.useMemo)(() => {
            if (m.current) return (0, c._f)(m.current);
          }, [m.current]);
        (0, a.useEffect)(
          () =>
            h
              ? (u.current?.showPopover(),
                C(),
                g?.addEventListener("scroll", C),
                window.addEventListener("scroll", C),
                () => {
                  g?.removeEventListener("scroll", C),
                    window.addEventListener("scroll", C);
                })
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  u.current?.hidePopover(),
                () => {}),
          [h, C, g],
        );
        const P = (0, a.useCallback)(() => {
            C(), S(!0), (b.current = !0);
          }, [C]),
          f = (0, a.useCallback)(() => {
            (b.current = !1), d.current || S(!1);
          }, []),
          _ = (0, a.useCallback)(() => {
            (d.current = !0), S(!0);
          }, []),
          x = (0, a.useCallback)(
            (e) => {
              u.current?.contains(e.target) && _();
            },
            [_],
          ),
          D = (0, a.useCallback)(
            (e) => {
              u.current?.contains(e.target) && _();
            },
            [_],
          ),
          k = (0, a.useCallback)(() => {
            (d.current = !1), b.current || S(!1);
          }, []),
          T = (0, a.useCallback)(
            (e) => {
              u.current?.contains(e.target) && k();
            },
            [k],
          ),
          E = (0, a.useCallback)(() => {
            k(), f();
          }, [k, f]),
          I = (0, a.useCallback)(
            (e) => {
              "Enter" === e.key && (e.preventDefault(), h ? f() : P());
            },
            [f, P, h],
          ),
          v = (0, a.useCallback)(
            (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                u.current?.contains(e.relatedTarget) ||
                f();
            },
            [f],
          ),
          A = (0, a.useCallback)(
            (e) => {
              2 === s && P();
            },
            [s, P],
          ),
          w = (0, a.useCallback)(
            (e) => {
              const r =
                  e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
                n = !e.relatedTarget && !d.current;
              (r || n) && (k(), S(!1));
            },
            [k],
          ),
          j = (0, a.useCallback)(
            (e) => {
              u.current?.contains(e.target) &&
                (h && i ? E() : d.current && P());
            },
            [E, i, h, P],
          ),
          F = (0, a.useCallback)(
            (e) => {
              u.current?.contains(e.target) &&
                ("Enter" === e.key && h && i ? E() : P(),
                "Escape" === e.key && h && (E(), e.stopPropagation()));
            },
            [E, i, h, P],
          );
        let N;
        0 !== s || h
          ? 1 === s && (N = h ? f : P)
          : (N = (e) => {
              e.preventDefault(), P();
            });
        const O = {
            "aria-expanded": h,
            role: "button",
            onMouseEnter: 0 === s ? P : void 0,
            onMouseLeave: 0 === s ? f : void 0,
            onClick: N,
            ref: m,
            onKeyDown: I,
            onFocus: A,
            onBlur: v,
          },
          R = {
            popover: "manual",
            ref: u,
            onMouseEnter: D,
            onMouseLeave: T,
            onFocus: x,
            onBlur: w,
            onClick: j,
            onKeyDown: F,
            className: l.PopoverMenu,
          };
        return (
          (0, a.useImperativeHandle)(
            e.ref,
            () => ({ show: P, hide: f, close: E }),
            [P, f, E],
          ),
          { isShowingMenu: h, triggerProps: O, menuProps: R, closeMenu: E }
        );
      }
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (await n.e(8433).then(n.bind(n, 8433))).apply();
        }
      })();
      var d = n(7445),
        b = n(76217);
      function m(e, r) {
        return (n) => {
          e?.(n), r?.(n);
        };
      }
      function h(e) {
        const {
            direction: r,
            interactionMode: n = 0,
            ignoreHorizontal: o,
            ignoreVertical: i,
            dismissOnClick: c,
            menuTarget: l,
            className: h,
            children: S,
            renderWhenClosed: p = !0,
            ...y
          } = e,
          {
            isShowingMenu: C,
            triggerProps: g,
            menuProps: P,
            closeMenu: f,
          } = u(e),
          _ = a.useRef(null),
          x = a.useRef(null);
        return (
          a.useEffect(() => {
            C
              ? x.current?.TakeFocus()
              : x.current?.BFocusWithin() && _.current?.TakeFocus();
          }, [C]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              a.cloneElement(l, {
                ...g,
                onMouseEnter: m(l.props.onMouseEnter, g.onMouseEnter),
                onMouseLeave: m(l.props.onMouseLeave, g.onMouseLeave),
                navRef: _,
              }),
              (0, t.jsx)(b.Z, {
                ...y,
                ...P,
                className: s()(P.className, h),
                navRef: x,
                onCancel: f,
                onFocusWithin: (e) => !e && f(),
                childFocusDisabled: !C,
                children: (0, t.jsx)(d.q, { children: (p || C) && S }),
              }),
            ],
          })
        );
      }
    },
    42836: (e, r, n) => {
      "use strict";
      n.d(r, { K: () => k, T: () => I });
      var t = n(7850),
        o = n(53965),
        i = n(90534),
        s = n(20187),
        a = n(90626),
        c = n(16180),
        l = n(53971),
        u = n(80797);
      function d(e) {
        const { children: r, ...n } = e;
        return (0, t.jsxs)(l.s, {
          cursor: "default",
          gap: "2",
          className: c.Option,
          ...n,
          children: [
            (0, t.jsx)("div", { className: c.RadioCircle }),
            (0, t.jsx)(s.EY, { children: r }),
          ],
        });
      }
      const b = Object.assign(
          function (e) {
            const {
              value: r,
              onValueChange: n,
              options: o,
              getOptionLabel: i,
              ...s
            } = e;
            return (0, t.jsx)(b.Root, {
              value: r,
              onValueChange: n,
              ...s,
              children: o.map((e) => {
                const r = i ? i(e) : e;
                return (0, t.jsx)(b.Option, { value: e, children: r }, r);
              }),
            });
          },
          {
            Root: function (e) {
              const { value: r, onValueChange: n, render: o, ...i } = e,
                s = (0, a.useRef)(null),
                c = (0, a.useCallback)((e, r) => {
                  if (!s.current) return;
                  const n = [...s.current.querySelectorAll("[data-radio-id]")];
                  if (0 !== n.length)
                    for (let t = 0; t < n.length; t++) {
                      const o = n[t];
                      if (!o.dataset.radioId) continue;
                      if (o.dataset.radioId === e) {
                        const e = n[(t + r + n.length) % n.length];
                        e.click(), e.focus();
                      }
                    }
                }, []),
                d = (0, a.useCallback)((e) => c(e, 1), [c]),
                b = (0, a.useCallback)((e) => c(e, -1), [c]),
                h = (0, a.useMemo)(
                  () => ({
                    value: r,
                    onValueChange: n,
                    onSelectNext: d,
                    onSelectPrev: b,
                  }),
                  [r, n, d, b],
                ),
                S = { role: "radiogroup", ref: s, ...i },
                p = (0, t.jsx)(l.s, {
                  direction: "column",
                  gap: "2",
                  role: "radiogroup",
                  ...i,
                }),
                y = (0, u.Q)(o, p, S);
              return (0, t.jsx)(m, { value: h, children: y });
            },
            Option: function (e) {
              const { value: r, ref: n, children: o, render: i } = e,
                s = (0, a.useContext)(m),
                c = (0, a.useId)();
              if (!s)
                return (
                  console.error(
                    "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
                  ),
                  null
                );
              const {
                  value: l,
                  onValueChange: b,
                  onSelectNext: h,
                  onSelectPrev: S,
                } = s,
                p = l === r,
                y = () => {
                  p || b(r);
                },
                C = {
                  role: "radio",
                  "aria-checked": p,
                  "data-radio-id": c,
                  onClick: y,
                  onKeyDown: (e) => {
                    switch (e.key) {
                      case " ":
                        y(), e.preventDefault(), e.stopPropagation();
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        h(c), e.preventDefault(), e.stopPropagation();
                        break;
                      case "ArrowLeft":
                      case "ArrowUp":
                        S(c), e.preventDefault(), e.stopPropagation();
                    }
                  },
                  tabIndex: p ? 0 : -1,
                  ref: n,
                  children: o,
                },
                g = (0, t.jsx)(d, {});
              return (0, u.Q)(i, g, C, { bSelected: p });
            },
          },
        ),
        m = (0, a.createContext)(null);
      var h,
        S = n(64753),
        p = n(9154),
        y = n(32754),
        C = n(24484),
        g = n(47184),
        P = n(30470);
      !(function (e) {
        (e.k_FreeToPlay = "freetoplay"), (e.k_Free = "free");
      })(h || (h = {}));
      var f = n(8527),
        _ = n(51614);
      var x = n(71298),
        D = n(47911);
      function k(e) {
        const {
            strButtonOverride: r,
            appids: n,
            nPackageID: i,
            onClick: s,
          } = e,
          a = I(),
          [c, l, u] = (0, S.uD)();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(y.Gq, {
              toolTipContent: a
                ? g.g.Localize("#FreeOnDemand_Button_ttip")
                : g.g.Localize("#FreeOnDemand_Button_disabled_ttip"),
              children: (0, t.jsx)(o.$, {
                onClick: () => {
                  s?.(), l();
                },
                color: "dull",
                children: r || g.g.Localize("#FreeOnDemand_Button"),
              }),
            }),
            (0, t.jsx)(p.EN, {
              active: c,
              children:
                a && n && 1 == n.length
                  ? (0, t.jsx)(T, {
                      closeModal: u,
                      nPackageID: i,
                      nAppID: n[0],
                    })
                  : (0, t.jsx)(E, { closeModal: u }),
            }),
          ],
        });
      }
      function T(e) {
        const { closeModal: r, nAppID: n, nPackageID: o } = e,
          [c, l] = (0, a.useState)(h.k_FreeToPlay),
          u = (function (e, r) {
            return (0, _.n)({
              mutationKey: ["settofree", r],
              mutationFn: async (n) => {
                const { displayOption: t, fnOnStoreSaveSucceed: o } = n;
                if (!e || !r) throw new Error("Invalid parameters provided");
                {
                  const r = new FormData();
                  if (
                    (r.set("sessionid", (0, C.KC)()),
                    r.set("appid", "" + e),
                    r.set(
                      "displaytext",
                      t == h.k_Free
                        ? "#PurchaseButton_Free"
                        : "#PurchaseButton_FreeToPlay",
                    ),
                    !(
                      await fetch(
                        `${f.TS.PARTNER_BASE_URL}store/ajaxupdatef2pstore`,
                        { method: "POST", credentials: "include", body: r },
                      )
                    ).ok)
                  )
                    throw new Error(
                      g.g.Localize("#FreeOnDemand_Store_Error", e),
                    );
                }
                o && o();
                {
                  const e = new FormData();
                  if (
                    (e.set("sessionid", (0, C.KC)()),
                    e.set("action", "save"),
                    e.set("billing_type", "12"),
                    !(
                      await fetch(
                        `${f.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${r}`,
                        { method: "POST", credentials: "include", body: e },
                      )
                    ).ok)
                  )
                    throw new Error(
                      g.g.Localize("#FreeOnDemand_Package_Error", r),
                    );
                }
              },
            });
          })(n, o),
          d = (0, x.vs)();
        return d.bLoading
          ? (0, t.jsx)(x.Hh, {
              state: d,
              strDialogTitle: g.g.Localize("#FreeOnDemand_Title"),
              closeModal: () => {
                window.location.replace(
                  `${P.TS.PARTNER_BASE_URL}store/packagelanding/${o}`,
                ),
                  r();
              },
            })
          : (0, t.jsxs)(p.o0, {
              strTitle: g.g.Localize("#FreeOnDemand_Title"),
              strDescription: g.g.Localize("#FreeOnDemand_Desc"),
              strOKButtonText: g.g.Localize("#FreeOnDemand_Button_Confirm"),
              onCancel: r,
              onOK: async () => {
                try {
                  d.fnSetLoading(!0),
                    d.fnSetThrobber(
                      g.g.Localize("#FreeOnDemand_Convert_Store"),
                    ),
                    await u.mutateAsync({
                      displayOption: c,
                      fnOnStoreSaveSucceed: () => {
                        d.fnSetThrobber(
                          g.g.Localize("#FreeOnDemand_Convert_Package"),
                        );
                      },
                    }),
                    d.fnSetSuccess(!0),
                    d.fnSetStrSuccess(
                      g.g.Localize("#FreeOnDemand_ConvertSuccess"),
                    );
                } catch (e) {
                  d.fnSetError(!0),
                    d.fnSetStrError(
                      e instanceof Error
                        ? e.message
                        : D.Z.Localize("#Error_ErrorCommunicatingWithNetwork"),
                    );
                }
              },
              children: [
                (0, t.jsx)("br", {}),
                (0, t.jsxs)(i.az, {
                  paddingTop: "4",
                  children: [
                    (0, t.jsx)(s.EY, {
                      size: "4",
                      children: g.g.Localize("#FreeOnDemand_Radio"),
                    }),
                    (0, t.jsx)(i.az, {
                      padding: "4",
                      background: "greyneutral-6",
                      radius: "sm",
                      children: (0, t.jsx)(b, {
                        value: c,
                        options: [h.k_FreeToPlay, h.k_Free],
                        getOptionLabel: (e) =>
                          e == h.k_Free
                            ? g.g.Localize("#FreeOnDemand_Radio_Free")
                            : g.g.Localize("#FreeOnDemand_Radio_FreeToPlay"),
                        onValueChange: l,
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
      function E(e) {
        const { closeModal: r } = e,
          n = `${P.TS.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
        return (0, t.jsxs)(p.KG, {
          strTitle: g.g.Localize("#FreeOnDemand_Title"),
          strDescription: g.g.Localize("#FreeOnDemand_Desc_NotPermitted"),
          closeModal: r,
          children: [
            (0, t.jsx)("br", {}),
            (0, t.jsx)("br", {}),
            (0, t.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              children: n,
            }),
          ],
        });
      }
      function I() {
        const [e] = (0, a.useState)(
          (0, C.Tc)("bCanSetFree", "application_config"),
        );
        return e;
      }
    },
    82314: (e, r, n) => {
      "use strict";
      n.d(r, { e: () => C, x: () => y });
      var t = n(7850),
        o = n(87864),
        i = n(88267),
        s = n(13578),
        a = n(48174),
        c = n(42836),
        l = n(12155),
        u = n(52038),
        d = n(31389),
        b = n.n(d),
        m = n(90626),
        h = n(47184),
        S = n(53965),
        p = n(32754);
      function y(e) {
        const r = (0, t.jsx)("button", {
          className: b().PriceGuidelinesPicker,
          children: (0, t.jsx)(l.GB9, {}),
        });
        return (0, t.jsx)(g, { menuTarget: r, ...e });
      }
      function C(e) {
        const { strButton: r, strTooltip: n } = e,
          o = (0, t.jsxs)(S.$, {
            onClick: () => {},
            children: [
              (0, t.jsx)(p.Gq, {
                toolTipContent: n,
                children: (0, t.jsx)("span", { children: r }),
              }),
              (0, t.jsx)("div", {
                className: (0, u.A)(
                  b().SelectionIndicator,
                  "DialogDropDown_Arrow",
                ),
                children: (0, t.jsx)(l.GB9, {}),
              }),
            ],
          });
        return (0, t.jsx)(g, { menuTarget: o, ...e });
      }
      function g(e) {
        const { menuTarget: r } = e,
          n = m.useRef(null);
        return (0, t.jsx)(s.n, {
          menuTarget: r,
          direction: "down",
          interactionMode: 1,
          ref: n,
          children: (0, t.jsx)(P, { onSelect: () => n.current?.close(), ...e }),
        });
      }
      function P(e) {
        const {
            fnGetUSDPriceInCents: r,
            fnOnUpdate: n,
            strDescription: s,
            bCanSetToFree: l,
            nPackageID: d,
            onSelect: m,
            appids: S,
          } = e,
          p = (0, a.cT)(),
          y = r();
        if (!p) return null;
        const C = p.GetUSDPricePointsInCents();
        return (0, t.jsxs)("div", {
          className: b().GuidelinesPanel,
          children: [
            (0, t.jsx)("div", {
              className: b().GuidelinesDescription,
              children: s || h.g.Localize("#PricingGuideline_Default"),
            }),
            (0, t.jsxs)("div", {
              className: b().GuidelinesGrid,
              children: [
                void 0 !== l &&
                  (0, t.jsx)(
                    "div",
                    {
                      className: b().GridElement,
                      children: (0, t.jsx)(c.K, {
                        nPackageID: d,
                        strButtonOverride: h.g.Localize(
                          "#FreeOnDemand_InlineOption",
                        ),
                        appids: S,
                      }),
                    },
                    "settofree",
                  ),
                C.map((e) =>
                  (0, t.jsx)(
                    "button",
                    {
                      onClick: () => {
                        m(), n(e);
                      },
                      className: (0, u.A)({
                        [b().GridElement]: !0,
                        [b().CurrentPrice]: y == e,
                      }),
                      children: (0, o.x)(e, i.AI.k_ECurrencyCodeUSD),
                    },
                    e,
                  ),
                ),
              ],
            }),
          ],
        });
      }
    },
    47184: (e, r, n) => {
      "use strict";
      n.d(r, { g: () => i });
      var t = n(48891);
      const o = {};
      (o.arabic = () => n.e(6873).then(n.t.bind(n, 46873, 19))),
        (o.brazilian = () => n.e(1365).then(n.t.bind(n, 1365, 19))),
        (o.bulgarian = () => n.e(3966).then(n.t.bind(n, 83966, 19))),
        (o.czech = () => n.e(1360).then(n.t.bind(n, 51360, 19))),
        (o.danish = () => n.e(8292).then(n.t.bind(n, 98292, 19))),
        (o.dutch = () => n.e(4993).then(n.t.bind(n, 44993, 19))),
        (o.english = () => n.e(3703).then(n.t.bind(n, 3703, 19))),
        (o.finnish = () => n.e(6376).then(n.t.bind(n, 86376, 19))),
        (o.french = () => n.e(7325).then(n.t.bind(n, 67325, 19))),
        (o.german = () => n.e(9263).then(n.t.bind(n, 69263, 19))),
        (o.greek = () => n.e(4399).then(n.t.bind(n, 14399, 19))),
        (o.hungarian = () => n.e(1706).then(n.t.bind(n, 91706, 19))),
        (o.indonesian = () => n.e(9341).then(n.t.bind(n, 69341, 19))),
        (o.italian = () => n.e(7511).then(n.t.bind(n, 97511, 19))),
        (o.japanese = () => n.e(330).then(n.t.bind(n, 40330, 19))),
        (o.koreana = () => n.e(6252).then(n.t.bind(n, 96252, 19))),
        (o.latam = () => n.e(204).then(n.t.bind(n, 90204, 19))),
        (o.norwegian = () => n.e(839).then(n.t.bind(n, 40839, 19))),
        (o.polish = () => n.e(8816).then(n.t.bind(n, 78816, 19))),
        (o.portuguese = () => n.e(8160).then(n.t.bind(n, 98160, 19))),
        (o.romanian = () => n.e(3546).then(n.t.bind(n, 73546, 19))),
        (o.russian = () => n.e(4302).then(n.t.bind(n, 84302, 19))),
        (o.schinese = () => n.e(6461).then(n.t.bind(n, 46461, 19))),
        (o.spanish = () => n.e(8167).then(n.t.bind(n, 18167, 19))),
        (o.swedish = () => n.e(2438).then(n.t.bind(n, 22438, 19))),
        (o.tchinese = () => n.e(6006).then(n.t.bind(n, 46006, 19))),
        (o.thai = () => n.e(6727).then(n.t.bind(n, 96727, 19))),
        (o.turkish = () => n.e(1639).then(n.t.bind(n, 51639, 19))),
        (o.ukrainian = () => n.e(4354).then(n.t.bind(n, 21973, 19))),
        (o.vietnamese = () => n.e(3946).then(n.t.bind(n, 53946, 19)));
      const i = (0, t.l)(async function (e) {
        if (o[e]) return o[e]();
      });
    },
  },
]);
