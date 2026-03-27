/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3912],
  {
    85274: (e) => {
      e.exports = { MoreDots: "_2YpW8SafRsHDfQIUT2DzUP" };
    },
    14578: (e) => {
      e.exports = {
        DashboardPage: "fIACD2DrXOfPgZ6liaz8B",
        DashTitle: "_3GHz1lE76l_ye03FVZIvgV",
        FeedbackLinkCtn: "_5ZCWmtTzUDQzZXxIFLcJV",
        FeedbackLink: "_24sFT4JkcUPwf83Xisqf8S",
        Throbber: "TigTTJlvb1clyomjKsIBB",
        ErrorMessage: "_3_i0aP__RVwi1gJ__9YGNW",
        ButtonGroup: "WBwvg-Enwb-imQG96DiIT",
        Instructions: "_1mz7G9y8aBLOijzO3pLvAb",
      };
    },
    12917: (e) => {
      e.exports = {
        ProposalState: "_2Nd7LF--awWj2FO3O38Q4w",
        StateText: "_3POGYMAOwtuQfvsv42OXjV",
        ProposalStateKey: "_2Gw9ij-kw4HpOxG8diPOus",
        NoProposalsInFlight: "_1cDvzWJuU6haVGL7Z1WH-9",
        NeedsReview: "iEo6Irsly_5PaIVdrTyqo",
        AutoPublish: "_3I1P9wlHAcJOWgXZSLOP1E",
        PartnerWillPublish: "_1BiCvGXIG2jVfTmfWVnI3v",
        ApprovedCanPublish: "_2IXtgCjbz_IKB0I-Tv-Srl",
      };
    },
    18715: (e) => {
      e.exports = {
        ToolbarInfo: "_1bPMNcsgqa-akKYfelwilP",
        Visible: "CLKT9CFoyEByzdSrgSzE2",
        ChangeCount: "_1fN8w-ElZiiZadq4F6P5wa",
        Buttons: "_1krNhBmPJ7AUIp1iDga0kZ",
        Button: "_2JjzuIkHTgXpX-jui_X86Y",
        SaveButton: "_16sHrIsuZRMMARr_H1gSdR",
        NavigationWarning: "_3lm-HapxTM6gKnYv9iTdLb",
        PricePreviewWarning: "IxZAjD6UWfP6qIUU-JIsp",
        SeeDetailsSection: "_36-JCOAm-RV4rsa1HaZ6hW",
        SeeDetailsButton: "_4aHIWNtAHpL3bTZwenwHu",
        PriceOverrideSummaryList: "_3Y8X4CF7L7ZC8hcC2hifte",
        OldPriceCtn: "_2UeXRoaw5cyxoKiX1z-UPr",
        NewPriceCtn: "_1m40GB0ETh3SuJZ2LE2sfV",
        PriceOverrideSummary: "_30js1WCUw1w9H1D5b7C6MM",
        PackageName: "IcOXTFPlAJBUR4q-zhkFy",
        OldPrice: "_1lyzsqwRX3rG1Mf9tox1wP",
        NewPrice: "nEEX41c5gybgdvLW6zvqS",
        Currency: "_3EgiMInHUeD5E64oBAlcGh",
        PricePrefix: "_2suSE-R__jkqEnC0uhKab2",
        PriceSuffix: "_3uRmhNxxanVPbMW-mXvDF-",
        ChangeArrow: "_3Pb94yxnhDGCL9T-Ro78tD",
        SaveDialogBody: "_2bTmcbLVmzj6utxsIMOxye",
        SaveDialogBodyText: "_3Ohx3u827GiwnZx2UU4z-M",
        AutoPublishCheckBox: "_2tKL7PU3207ZNtgoGUwiFJ",
        RadioButtons: "_3lsh2Yw2Hmc3kamU1eJyJJ",
        PublishError: "k_qc0NeY8sBathGlH4yet",
        PublishWarning: "_3uUgrMwDoXiX2PEyRHiF9g",
        PublishErrorDialog: "_381pEpkUlOe9X-z-1msxGm",
        HoverToolTip: "_1yXHpORUurTNRsHpzalvwp",
        PriceChangeSaveWarning: "_2lTJ7-iyFOMpIaZ-p6yDvd",
        PriceChangeSaveWarningArrow: "B3-IB6jhKQuhRCYOH9Zd5",
      };
    },
    95582: (e, i, r) => {
      "use strict";
      r.d(i, { i: () => P });
      var n = r(7850),
        a = r(83800),
        s = r(17084),
        o = r(9154),
        t = r(61859),
        l = r(78327),
        c = r(14578),
        d = r.n(c),
        u = r(47184);
      function P(e) {
        const { closeModal: i, fnOnApply: r, singlePackage: c } = e,
          P = (0, s._A)();
        return (0, n.jsxs)(o.o0, {
          closeModal: i,
          bAlertDialog: !0,
          strTitle: u.g.Localize("#PricingDashboard_ApplyConversion_Method"),
          onOK: () => {
            P(), r && r();
          },
          strOKButtonText: c
            ? (0, t.we)("#PricingDashboard_ApplyGuidelines_Button_Single")
            : (0, t.we)("#PricingDashboard_ApplyGuidelines_Button"),
          children: [
            (0, n.jsx)("div", {
              className: d().Instructions,
              children: u.g.Localize(
                "#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions",
              ),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("a", {
              href: l.TS.PARTNER_BASE_URL + "doc/store/pricing#5",
              target: "_blank",
              children: (0, t.we)("#PricingDashboard_ApplyGuidelines_Link"),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("br", {}),
            !c &&
              (0, n.jsx)("div", {
                className: d().Instructions,
                children: (0, t.we)(
                  "#PricingDashboard_ApplyGuidelines_Instructions2",
                ),
              }),
            (0, n.jsx)("div", {
              className: d().Instructions,
              children: (0, t.we)(
                "#PricingDashboard_ApplyGuidelines_Assurance",
              ),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)(a.J, { bHideTour: !0 }),
          ],
        });
      }
    },
    61311: (e, i, r) => {
      "use strict";
      r.d(i, { t: () => _ });
      var n = r(7850),
        a = r(96745),
        s = r(17084),
        o = r(90626),
        t = r(16676),
        l = r(12155),
        c = r(32754),
        d = r(52038),
        u = r(61859),
        P = r(10754),
        h = r(18715),
        g = r.n(h);
      function _(e) {
        const { rgLocalPriceOverrides: i } = e,
          [r, a] = o.useState(i.length < 9);
        return (0, n.jsx)("div", {
          className: g().SeeDetailsSection,
          children: r
            ? (0, n.jsx)("div", {
                className: g().PriceOverrideSummaryList,
                children: i.map((e) =>
                  (0, n.jsx)(
                    b,
                    { override: e },
                    `${e.packageID}_${e.strPriceKey}`,
                  ),
                ),
              })
            : (0, n.jsx)(t.$n, {
                onClick: () => a(!0),
                className: g().SeeDetailsButton,
                children: (0, u.we)("#PackageGrid_SeePendingChanges"),
              }),
        });
      }
      function b(e) {
        const { override: i } = e,
          {
            packageID: r,
            strPriceKey: o,
            nPriceInCents: t,
            nOldPriceInCents: u,
          } = i,
          h = (0, a.ww)(r),
          [_, b, v] = (0, s.Wx)(u, o),
          [x, p, D] = (0, s.Wx)(t, o),
          w = (0, s.XK)(o),
          { nMinPriceInCents: j, nMaxPriceInCents: m } = (0, s.tn)(r, o),
          C = t < j || (!!m && t > m);
        return (0, n.jsxs)("div", {
          className: (0, d.A)(g().PriceOverrideSummary),
          children: [
            (0, n.jsx)(c.he, {
              toolTipContent: w,
              direction: "top",
              className: g().Currency,
              strTooltipClassname: g().HoverToolTip,
              children: o,
            }),
            (0, n.jsx)(c.he, {
              toolTipContent: `${r}: ${h}`,
              direction: "overlay",
              className: g().PackageName,
              strTooltipClassname: g().HoverToolTip,
              children: h,
            }),
            C
              ? (0, n.jsx)(P.T6, { packageID: r, strPriceKey: o })
              : (0, n.jsx)(P.Gy, { nPriceInCents: t, nSavedPriceInCents: u }),
            (0, n.jsxs)("div", {
              className: g().OldPriceCtn,
              children: [
                (0, n.jsx)("div", { className: g().PricePrefix, children: _ }),
                (0, n.jsx)("span", { className: g().OldPrice, children: b }),
                (0, n.jsx)("div", { className: g().PriceSuffix, children: v }),
              ],
            }),
            (0, n.jsx)("span", {
              className: g().ChangeArrow,
              children: (0, n.jsx)(l.i3G, { angle: 90 }),
            }),
            (0, n.jsxs)("div", {
              className: g().NewPriceCtn,
              children: [
                (0, n.jsx)("div", { className: g().PricePrefix, children: _ }),
                (0, n.jsx)("span", { className: g().NewPrice, children: p }),
                (0, n.jsx)("div", { className: g().PriceSuffix, children: v }),
              ],
            }),
          ],
        });
      }
    },
    74267: (e, i, r) => {
      "use strict";
      r.d(i, { O: () => P });
      var n = r(7850),
        a = r(90626),
        s = r(85274),
        o = r.n(s),
        t = r(12155),
        l = r(52038),
        c = r(49771),
        d = r(6336);
      const u = new c.MX("price-grid-cell-popout-elements");
      function P(e) {
        let { hoverKey: i, className: r, renderHover: s } = e,
          c = (0, l.A)(o().MoreDots, r),
          P = a.useRef(void 0),
          h = a.useCallback(() => {
            u.HideElement(P.current.ownerDocument, i);
          }, [i]);
        return (0, n.jsx)("div", {
          ref: P,
          tabIndex: -1,
          className: c,
          onFocus: (e) => {
            e.target.focus();
            let r = (0, n.jsx)(d.g, {
              target: P.current,
              direction: "top",
              bEnablePointerEvents: !0,
              nBodyDistance: 0,
              onClick: h,
              children: s(),
            });
            u.ShowElement(P.current.ownerDocument, r, i);
          },
          onBlur: () => {
            u.HideElement(P.current.ownerDocument, i, 100);
          },
          children: (0, n.jsx)(t.faJ, {}),
        });
      }
    },
    86762: (e, i, r) => {
      "use strict";
      r.d(i, { m: () => O });
      var n,
        a,
        s = r(7850),
        o = r(17084),
        t = r(10754),
        l = r(41103),
        c = r(61859),
        d = r(52038),
        u = r(32754),
        P = r(74267),
        h = r(12917),
        g = r.n(h),
        _ = r(90626),
        b = r(9154),
        v = r(22797),
        x = r(51272),
        p = r(18715),
        D = r.n(p),
        w = r(48996),
        j = r(44165),
        m = r(87924),
        C = r(61311);
      function f(e) {
        const { closeModal: i, packageID: r } = e,
          t = (0, o.FX)(r),
          l = t.some((e) => e.nPriceInCents > e.nOldPriceInCents),
          d = (function (e, i) {
            let [r, n] = _.useState(void 0);
            const s = (0, w.zq)(),
              o = (0, j.P_)(60);
            if (
              (_.useEffect(() => {
                i &&
                  (n(void 0),
                  s([e], void 0, 6e4).then(async (e) => {
                    n(e);
                  }));
              }, [i, e, n, s]),
              !i)
            )
              return a.OK;
            if (null == r) return a.Loading;
            if (1 != r) return a.FailedToLoad;
            const t = (0, w.qN)(e);
            return t.every((e) => e.rtStartDate > o + m.nu || e.rtEndDate < o)
              ? a.OK
              : a.RequiresCooldown;
          })(r, l),
          { fnPublish: u, ePublishState: P } = (function (e) {
            const i = (0, o.h4)(),
              [r, a] = _.useState(n.Idle);
            let s = _.useCallback(async () => {
              a(n.Loading);
              1 == (await i(e)).success ? a(n.OK) : a(n.Failed);
            }, [a, i, e]);
            return { fnPublish: s, ePublishState: r };
          })(r);
        let h;
        if (d == a.FailedToLoad)
          h = (0, c.oW)(
            "#PricingDashboard_PriceProposal_Publish_FailedToLoad",
            (0, s.jsx)("div", {}),
            (0, s.jsx)("div", {}),
          );
        else if (d == a.RequiresCooldown) {
          let e = (0, s.jsx)(x.uU, {
            href: "https://partner.steamgames.com/doc/store/pricing",
          });
          h = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                children: (0, c.we)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError1",
                ),
              }),
              (0, s.jsx)("div", {
                children: (0, c.oW)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError2",
                  e,
                ),
              }),
              (0, s.jsx)("div", {
                children: (0, c.we)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError3",
                ),
              }),
              (0, s.jsx)("div", {
                children: (0, s.jsxs)("ol", {
                  children: [
                    (0, s.jsx)("li", {
                      children: (0, c.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownError3a",
                      ),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, c.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownError3b",
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        } else
          P == n.Failed &&
            (h = (0, c.oW)(
              "#PricingDashboard_PriceProposal_Publish_FailedToPublish",
              (0, s.jsx)("div", {}),
              (0, s.jsx)("div", {}),
            ));
        if (h) {
          let e = (0, c.we)("#PricingDashboard_PriceProposal_Publish_Title");
          return (
            d == a.RequiresCooldown &&
              (e = (0, c.we)(
                "#PricingDashboard_PriceProposal_Publish_CantPublishTitle",
              )),
            (0, s.jsx)(b.o0, {
              strTitle: e,
              bAlertDialog: !0,
              onOK: i,
              onCancel: i,
              closeModal: i,
              children: (0, s.jsx)("div", {
                className: D().PublishErrorDialog,
                children: h,
              }),
            })
          );
        }
        let g = d == a.Loading || P == n.Loading;
        return (0, s.jsxs)(b.o0, {
          strTitle: (0, c.we)("#PricingDashboard_PriceProposal_Publish_Title"),
          bAlertDialog: !1,
          strOKButtonText: (0, c.we)(
            "#PricingDashboard_PriceProposal_Publish_Button",
          ),
          bOKDisabled: g,
          bCancelDisabled: g,
          bDestructiveWarning: !0,
          onOK: u,
          onCancel: i,
          closeModal: i,
          children: [
            g && (0, s.jsx)(v.t, { position: "center" }),
            !g &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, c.Yp)(
                    "#PricingDashboard_PriceProposal_Publish_Explanation",
                    t.length,
                  ),
                  l &&
                    (0, s.jsx)("div", {
                      className: D().PublishWarning,
                      children: (0, c.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownWarning",
                      ),
                    }),
                  (0, s.jsx)(C.t, { rgLocalPriceOverrides: t }),
                ],
              }),
          ],
        });
      }
      !(function (e) {
        (e[(e.Idle = 0)] = "Idle"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.OK = 2)] = "OK"),
          (e[(e.Failed = 3)] = "Failed");
      })(n || (n = {})),
        (function (e) {
          (e[(e.Idle = 0)] = "Idle"),
            (e[(e.Loading = 1)] = "Loading"),
            (e[(e.OK = 2)] = "OK"),
            (e[(e.FailedToLoad = 3)] = "FailedToLoad"),
            (e[(e.RequiresCooldown = 4)] = "RequiresCooldown");
        })(a || (a = {}));
      var S = r(64753),
        N = r(16676),
        I = r(96434),
        T = r.n(I);
      function O(e) {
        const { packageID: i, bShowCancel: r } = e,
          n = (0, o.XB)(i),
          a = (0, o.d$)(i),
          h = a && (0, t.mK)(a.rtSubmitted),
          [_, b] = (0, l.Hl)(a?.submitterID),
          v = b ? b.persona_name : a?.submitterID;
        let x = "PackageMore_" + i,
          p = null,
          D = null,
          w = null;
        n
          ? ((p = g().NeedsReview),
            (w = (0, c.we)("#PricingDashboard_PriceProposal_NeedsReview_ttip")),
            (D = (0, c.we)("#PricingDashboard_PriceProposal_NeedsReview")))
          : 1 == a?.eState && a.bPartnerWillPublish
            ? ((p = g().PartnerWillPublish),
              (w = (0, c.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip",
                v,
                h,
              )),
              (D = (0, c.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish",
              )))
            : 1 != a?.eState || a.bPartnerWillPublish
              ? 4 == a?.eState
                ? ((p = g().ApprovedCanPublish),
                  (w = (0, c.we)(
                    "#PricingDashboard_PriceProposal_Approved_ttip",
                  )),
                  (D = (0, s.jsx)(k, { packageID: i })))
                : ((p = g().NoProposalsInFlight),
                  (w = (0, c.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight_ttip",
                  )),
                  (D = (0, c.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight",
                  )))
              : ((p = g().AutoPublish),
                (w = (0, c.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip",
                  v,
                  h,
                )),
                (D = (0, s.jsxs)("div", {
                  children: [
                    (0, c.we)(
                      "#PricingDashboard_PriceProposal_WaitingForReview",
                    ),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("span", {
                      children: (0, c.we)(
                        "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish",
                      ),
                    }),
                  ],
                })));
        let j = r && (n || !!a);
        return (0, s.jsxs)("div", {
          className: (0, d.A)(g().ProposalState, p),
          children: [
            (0, s.jsxs)(u.he, {
              toolTipContent: w,
              className: g().StateText,
              children: [
                (0, s.jsx)("div", { className: g().ProposalStateKey }),
                D,
              ],
            }),
            j &&
              (0, s.jsx)(P.O, {
                hoverKey: x,
                className: g().PackageMore,
                renderHover: () => (0, s.jsx)(y, { packageID: i }),
              }),
          ],
        });
      }
      function k(e) {
        const { packageID: i } = e,
          [r, n, a] = (0, S.uD)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(N.jn, {
              onClick: n,
              children: (0, c.we)(
                "#PricingDashboard_PriceProposal_PublishDialog_Button",
              ),
            }),
            (0, s.jsx)(b.EN, {
              active: r,
              children: (0, s.jsx)(f, { packageID: i, closeModal: a }),
            }),
          ],
        });
      }
      function y(e) {
        const { packageID: i } = e,
          r = (0, o.XB)(i);
        let n = (0, o.T_)(i);
        const a = (0, o.d$)(i);
        let t = (0, o.fr)(i);
        return (0, s.jsx)("div", {
          className: T().PricePopout,
          children: (0, s.jsxs)("div", {
            className: T().DetailRow,
            children: [
              r &&
                (0, s.jsx)("div", {
                  className: T().DetailLabel,
                  onClick: n,
                  children: (0, c.we)("#PricingDashboard_RevertAllPackage"),
                }),
              !!a &&
                (0, s.jsx)("div", {
                  className: T().DetailLabel,
                  onClick: t,
                  children: (0, c.we)("#PricingDashboard_CancelPriceProposal"),
                }),
            ],
          }),
        });
      }
    },
    40818: (e, i, r) => {
      "use strict";
      r.d(i, { Zg: () => O, BL: () => N, cK: () => I });
      var n = r(7850),
        a = r(64753),
        s = r(48996),
        o = r(96745),
        t = r(17084),
        l = r(90626),
        c = r(44165),
        d = r(16676),
        u = r(9154),
        P = r(738),
        h = r(12155),
        g = r(22797),
        _ = r(51272),
        b = r(4434),
        v = r(52038),
        x = r(56011),
        p = r(61859),
        D = r(14771),
        w = r(61311);
      function j(e) {
        const { closeModal: i } = e,
          r = (0, t.Ci)(),
          a = (0, t.NC)();
        return (0, n.jsxs)(u.o0, {
          strTitle: (0, p.we)("#PackageGrid_DiscardChangesTitle"),
          strOKButtonText: (0, p.we)("#PackageGrid_DiscardChangesButton"),
          onOK: a,
          bDestructiveWarning: !0,
          closeModal: i,
          children: [
            (0, p.Yp)("#PricingDashboard_DiscardChangesExplanation", r.length),
            (0, n.jsx)(w.t, { rgLocalPriceOverrides: r }),
          ],
        });
      }
      var m = r(18715),
        C = r.n(m);
      const f = 30,
        S = 40;
      function N(e) {
        const { bReloadPageOnSave: i } = e,
          r = (0, t.Ci)();
        let s = r?.length ?? 0,
          o = s > 0;
        const [l, c, P] = (0, a.uD)(),
          [h, g, _] = (0, a.uD)();
        return (0, n.jsxs)("div", {
          className: (0, v.A)(C().ToolbarInfo, o && C().Visible),
          children: [
            (0, n.jsx)("div", {
              className: C().ChangeCount,
              children: (0, p.Yp)("#PackageGrid_PendingChangeCount", s),
            }),
            (0, n.jsxs)("div", {
              className: C().Buttons,
              children: [
                (0, n.jsx)(d.$n, {
                  onClick: c,
                  disabled: 0 == s,
                  className: (0, v.A)(C().Button, C().SaveButton),
                  children: (0, p.we)("#PackageGrid_SaveChangesDialogButton"),
                }),
                (0, n.jsx)(u.EN, {
                  active: l,
                  children: (0, n.jsx)(O, {
                    closeModal: P,
                    bReloadPageOnSave: i,
                  }),
                }),
                (0, n.jsx)(d.$n, {
                  className: C().Button,
                  onClick: g,
                  children: (0, p.we)(
                    "#PackageGrid_DiscardChangesDialogButton",
                  ),
                }),
                (0, n.jsx)(u.EN, {
                  active: h,
                  children: (0, n.jsx)(j, { closeModal: _ }),
                }),
              ],
            }),
          ],
        });
      }
      function I() {
        return l.useCallback(
          (e, i) =>
            (0, P.pg)((0, n.jsx)(O, { strContinueUrl: i }), (0, x.uX)(e)),
          [],
        );
      }
      function T(e) {
        return e
          .filter((e) => e.nPriceInCents > e.nOldPriceInCents)
          .map((e) => e.packageID);
      }
      function O(e) {
        const { closeModal: i, strContinueUrl: r, bReloadPageOnSave: a } = e,
          h = (0, t.Ci)(),
          g = (0, t.NC)(),
          [b, v] = l.useState(void 0),
          x = (function (e) {
            let [i, r] = l.useState(void 0);
            const n = (0, s.zq)(),
              a = (0, c.P_)(60);
            return (
              l.useEffect(() => {
                r(void 0);
                let i = T(e);
                i.length > 0
                  ? n(i, void 0, 6e4).then((e) => {
                      r(e);
                    })
                  : r(1);
              }, [r, e, n]),
              l.useMemo(() => {
                if (void 0 === i) return null;
                if (1 != i) return { days: 0, loadFailed: !0 };
                let r = Number.MAX_SAFE_INTEGER,
                  n = T(e);
                for (let e of n) {
                  const i = (0, s.qN)(e);
                  for (const e of i) {
                    if (e.rtStartDate < a) continue;
                    let i = Math.floor((e.rtStartDate - a) / D.Kp.PerDay);
                    r = Math.min(r, i);
                  }
                }
                return { days: r, loadFailed: !1 };
              }, [i, a, e])
            );
          })(h);
        if (!x) return null;
        const j = !!r,
          m = (0, p.we)(
            j
              ? "#PackageGrid_NavigationWarning_Title"
              : "#PricingDashboard_SavePricesTitle",
          ),
          f = (0, p.Yp)("#PricingDashboard_SavePricesExplanation", h.length);
        if (x.loadFailed)
          return (0, n.jsx)(u.o0, {
            strTitle: m,
            bAlertDialog: !0,
            onOK: i,
            onCancel: i,
            closeModal: i,
            children: (0, n.jsx)("div", {
              className: C().PublishErrorDialog,
              children: (0, p.oW)(
                "#PricingDashboard_SavePrices_FailedToLoad",
                (0, n.jsx)("div", {}),
                (0, n.jsx)("div", {}),
              ),
            }),
          });
        let S = !1,
          N = !1,
          I = !1,
          O = new Set();
        for (const e of h) {
          const { nMinPriceInCents: i, nMaxPriceInCents: r } = (0, t.tn)(
            e.packageID,
            e.strPriceKey,
          );
          (S = S || e.nPriceInCents < i),
            (N = N || (!!r && e.nPriceInCents > r)),
            (I = I || e.nPriceInCents > e.nOldPriceInCents),
            O.add(e.packageID);
        }
        let W,
          A = (0, t.ww)(O);
        if (A.length > 0) {
          let e = A.map((e) => (0, o.ww)(e));
          W = (0, p.we)("#PricingDashboad_RequiredPrices", e.join(", "));
        }
        const E = S || N,
          M = E || void 0 === b || 0 != A.length,
          F = (e) => {
            r
              ? (window.location.href = r)
              : a && !e && window.location.reload();
          },
          K = () => {
            void 0 !== b
              ? (e.closeModal(),
                (0, P.pg)(
                  (0, n.jsx)(B, { bAutoPublish: b, fnOnSuccess: F }),
                  window,
                ))
              : console.error(
                  "Pricing:SaveChangesDialog auto publish undefined",
                );
          };
        let R = (0, n.jsx)(_.uU, {
          href: "https://partner.steamgames.com/doc/store/pricing",
        });
        return (0, n.jsx)(u.eV, {
          title: m,
          onOK: K,
          onCancel: e.closeModal,
          bDestructiveWarning: j,
          closeModal: i,
          children: (0, n.jsxs)(d.nB, {
            className: C().SaveDialogBody,
            children: [
              (0, n.jsxs)(d.a3, {
                className: C().SaveDialogBodyText,
                children: [
                  j &&
                    (0, n.jsx)("div", {
                      className: C().NavigationWarning,
                      children: (0, p.we)("#PackageGrid_NavigationWarning"),
                    }),
                  f,
                  E &&
                    (0, n.jsxs)("div", {
                      className: C().PricePreviewWarning,
                      children: [
                        " ",
                        (0, p.oW)("#PricingDashboard_PreviewWarning", R),
                        " ",
                      ],
                    }),
                  W &&
                    (0, n.jsxs)("div", {
                      className: C().PricePreviewWarning,
                      children: [" ", W, " "],
                    }),
                  (0, n.jsx)(w.t, { rgLocalPriceOverrides: h }),
                  (0, n.jsx)(k, { priceIncrease: I, nextDiscount: x.days }),
                  (0, n.jsx)(y, {
                    value: b,
                    onChange: v,
                    nextDiscount: x.days,
                  }),
                ],
              }),
              (0, n.jsx)(d.wi, {
                children: j
                  ? (0, n.jsx)(d.VQ, {
                      strOKText: (0, p.we)("#Button_Save"),
                      onOK: K,
                      bOKDisabled: M,
                      strUpdateText: (0, p.we)(
                        "#PackageGrid_NavigateWithoutSavingButton",
                      ),
                      onUpdate: () => {
                        g(), e.closeModal(), F(!0);
                      },
                      onCancel: e.closeModal,
                    })
                  : (0, n.jsx)(d.CB, {
                      strOKText: (0, p.we)("#Button_Save"),
                      onOK: K,
                      bOKDisabled: M,
                      onCancel: e.closeModal,
                    }),
              }),
            ],
          }),
        });
      }
      function k(e) {
        let i,
          { priceIncrease: r, nextDiscount: a } = e;
        return r
          ? ((i =
              a < f
                ? (0, p.we)(
                    "#PricingDashboard_SavePrice_FutureDiscountTooSoon",
                    f,
                  )
                : a < S
                  ? (0, p.we)(
                      "#PricingDashboard_SavePrice_FutureDiscountSoon",
                      a,
                      f,
                    )
                  : (0, p.we)(
                      "#PricingDashboard_SavePrice_CooldownWarning",
                      f,
                    )),
            (0, n.jsxs)("div", {
              className: C().PriceChangeSaveWarning,
              children: [
                (0, n.jsx)("div", {
                  className: C().PriceChangeSaveWarningArrow,
                  children: (0, n.jsx)(h.i3G, { angle: 0 }),
                }),
                (0, n.jsxs)("div", {
                  className: C().HigherPriceWarning,
                  children: [" ", i, " "],
                }),
              ],
            }))
          : null;
      }
      function y(e) {
        let { value: i, onChange: r } = e,
          a = e.nextDiscount <= f;
        return (0, n.jsxs)("div", {
          className: C().AutoPublishCheckBox,
          children: [
            (0, n.jsx)(d.Od, {
              className: C().RadioButtons,
              checked: !1 === i,
              onChange: () => r(!1),
              label: (0, p.we)("#PricingDashboard_AutoPublish_Disabled"),
            }),
            (0, n.jsx)(d.Od, {
              className: C().RadioButtons,
              checked: !0 === i,
              disabled: a,
              onChange: () => r(!0),
              label: (0, p.we)("#PricingDashboard_AutoPublish_Enabled"),
            }),
          ],
        });
      }
      function B(e) {
        const { closeModal: i, bAutoPublish: r, fnOnSuccess: a } = e,
          s = (0, t.Ci)(),
          o = (0, t.Bt)(),
          c = (0, b.m)("SaveProgressDialog"),
          [d, P] = l.useState(0),
          [h, _] = l.useState(null),
          v = !r;
        return (
          l.useEffect(() => {
            (async () => {
              const e = Array.from(new Set(s.map((e) => e.packageID)));
              for (let i = 0; i < e.length; i++) {
                P(i);
                const r = e[i],
                  n = await o(r, v, c);
                if (c.token.reason) return;
                if (1 != n.success)
                  return void _(
                    n.msg ?? (0, p.we)("#PricingDashboard_SavePricesError"),
                  );
              }
              P(e.length), a(), i();
            })();
          }, []),
          (0, n.jsx)(u.o0, {
            strTitle: (0, p.we)("#PackageGrid_SaveInProgress"),
            bAlertDialog: !!h,
            strOKButtonText: h
              ? (0, p.we)("#Button_Close")
              : (0, p.we)("#Button_OK"),
            onOK: h ? i : a,
            onCancel: () => {
              c.cancel("cancelled by user");
            },
            closeModal: i,
            bDestructiveWarning: !0,
            children:
              h ??
              (0, n.jsx)(g.t, {
                position: "center",
                string: (0, p.we)("#PricingDashboard_Progress", d),
              }),
          })
        );
      }
    },
    83800: (e, i, r) => {
      "use strict";
      r.d(i, { J: () => o });
      var n = r(7850),
        a = r(90626);
      const s = a.lazy(() =>
          Promise.all([r.e(4781), r.e(1194)]).then(r.bind(r, 58813)),
        ),
        o = s
          ? function (e) {
              return (0, n.jsx)(a.Suspense, {
                fallback: null,
                children: (0, n.jsx)(s, { ...e }),
              });
            }
          : (e) => null;
    },
    4434: (e, i, r) => {
      "use strict";
      r.d(i, { m: () => o });
      var n = r(41735),
        a = r.n(n),
        s = r(90626);
      function o(e) {
        const i = s.useRef(a().CancelToken.source());
        return (
          s.useEffect(() => {
            const r = i.current;
            return () => r.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          i.current
        );
      }
    },
  },
]);
