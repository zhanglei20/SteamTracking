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
    95582: (e, a, t) => {
      "use strict";
      t.d(a, { i: () => u });
      var n = t(83800),
        r = t(17084),
        i = t(90626),
        l = t(9154),
        o = t(61859),
        c = t(78327),
        s = t(14578),
        d = t.n(s);
      function u(e) {
        const { closeModal: a, fnOnApply: t } = e,
          s = (0, r._A)();
        return i.createElement(
          l.o0,
          {
            closeModal: a,
            bAlertDialog: !0,
            strTitle: (0, o.we)("#PricingDashboard_ApplyGuidelines_Header"),
            onOK: () => {
              s(), t && t();
            },
            strOKButtonText: (0, o.we)(
              "#PricingDashboard_ApplyGuidelines_Button",
            ),
          },
          i.createElement(
            "div",
            { className: d().Instructions },
            (0, o.we)("#PricingDashboard_ApplyGuidelines_Instructions"),
          ),
          i.createElement(
            "div",
            { className: d().Instructions },
            (0, o.we)("#PricingDashboard_ApplyGuidelines_Instructions2"),
          ),
          i.createElement("br", null),
          i.createElement("br", null),
          i.createElement(
            "a",
            {
              href: c.TS.PARTNER_BASE_URL + "doc/store/pricing#5",
              target: "_blank",
            },
            (0, o.we)("#PricingDashboard_ApplyGuidelines_Link"),
          ),
          i.createElement(
            "div",
            { className: d().Instructions },
            (0, o.we)("#PricingDashboard_ApplyGuidelines_Assurance"),
          ),
          i.createElement(n.J, null),
        );
      }
    },
    61311: (e, a, t) => {
      "use strict";
      t.d(a, { t: () => m });
      var n = t(96745),
        r = t(17084),
        i = t(90626),
        l = t(16676),
        o = t(12155),
        c = t(32754),
        s = t(52038),
        d = t(61859),
        u = t(28139),
        P = t(18715),
        g = t.n(P);
      function m(e) {
        const { rgLocalPriceOverrides: a } = e,
          [t, n] = i.useState(a.length < 9);
        return i.createElement(
          "div",
          { className: g().SeeDetailsSection },
          t
            ? i.createElement(
                "div",
                { className: g().PriceOverrideSummaryList },
                a.map((e) =>
                  i.createElement(_, {
                    key: `${e.packageID}_${e.strPriceKey}`,
                    override: e,
                  }),
                ),
              )
            : i.createElement(
                l.$n,
                { onClick: () => n(!0), className: g().SeeDetailsButton },
                (0, d.we)("#PackageGrid_SeePendingChanges"),
              ),
        );
      }
      function _(e) {
        const { override: a } = e,
          {
            packageID: t,
            strPriceKey: l,
            nPriceInCents: d,
            nOldPriceInCents: P,
          } = a,
          m = (0, n.ww)(t),
          [_, h, b] = (0, r.Wx)(P, l),
          [v, E, p] = (0, r.Wx)(d, l),
          D = (0, r.XK)(l),
          { nMinPriceInCents: w, nMaxPriceInCents: C } = (0, r.tn)(t, l),
          f = d < w || (!!C && d > C);
        return i.createElement(
          "div",
          { className: (0, s.A)(g().PriceOverrideSummary) },
          i.createElement(
            c.he,
            {
              toolTipContent: D,
              direction: "top",
              className: g().Currency,
              strTooltipClassname: g().HoverToolTip,
            },
            l,
          ),
          i.createElement(
            c.he,
            {
              toolTipContent: `${t}: ${m}`,
              direction: "overlay",
              className: g().PackageName,
              strTooltipClassname: g().HoverToolTip,
            },
            m,
          ),
          f
            ? i.createElement(u.T6, { packageID: t, strPriceKey: l })
            : i.createElement(u.Gy, {
                nPriceInCents: d,
                nSavedPriceInCents: P,
              }),
          i.createElement(
            "div",
            { className: g().OldPriceCtn },
            i.createElement("div", { className: g().PricePrefix }, _),
            i.createElement("span", { className: g().OldPrice }, h),
            i.createElement("div", { className: g().PriceSuffix }, b),
          ),
          i.createElement(
            "span",
            { className: g().ChangeArrow },
            i.createElement(o.i3G, { angle: 90 }),
          ),
          i.createElement(
            "div",
            { className: g().NewPriceCtn },
            i.createElement("div", { className: g().PricePrefix }, _),
            i.createElement("span", { className: g().NewPrice }, E),
            i.createElement("div", { className: g().PriceSuffix }, b),
          ),
        );
      }
    },
    74267: (e, a, t) => {
      "use strict";
      t.d(a, { O: () => u });
      var n = t(90626),
        r = t(85274),
        i = t.n(r),
        l = t(12155),
        o = t(52038),
        c = t(49771),
        s = t(6336);
      const d = new c.MX("price-grid-cell-popout-elements");
      function u(e) {
        let { hoverKey: a, className: t, renderHover: r } = e,
          c = (0, o.A)(i().MoreDots, t),
          u = n.useRef(void 0),
          P = n.useCallback(() => {
            d.HideElement(u.current.ownerDocument, a);
          }, [a]);
        return n.createElement(
          "div",
          {
            ref: u,
            tabIndex: -1,
            className: c,
            onFocus: (e) => {
              e.target.focus();
              let t = n.createElement(
                s.g,
                {
                  target: u.current,
                  direction: "top",
                  bEnablePointerEvents: !0,
                  nBodyDistance: 0,
                  onClick: P,
                },
                r(),
              );
              d.ShowElement(u.current.ownerDocument, t, a);
            },
            onBlur: () => {
              d.HideElement(u.current.ownerDocument, a, 100);
            },
          },
          n.createElement(l.faJ, null),
        );
      }
    },
    86762: (e, a, t) => {
      "use strict";
      t.d(a, { m: () => T });
      var n,
        r,
        i = t(90626),
        l = t(17084),
        o = t(28139),
        c = t(41103),
        s = t(61859),
        d = t(52038),
        u = t(32754),
        P = t(74267),
        g = t(12917),
        m = t.n(g),
        _ = t(9154),
        h = t(22797),
        b = t(51272),
        v = t(18715),
        E = t.n(v),
        p = t(48996),
        D = t(44165),
        w = t(87924),
        C = t(61311);
      function f(e) {
        const { closeModal: a, packageID: t } = e,
          o = (0, l.FX)(t),
          c = o.some((e) => e.nPriceInCents > e.nOldPriceInCents),
          d = (function (e, a) {
            let [t, n] = i.useState(void 0);
            const l = (0, p.zq)(),
              o = (0, D.P_)(60);
            if (
              (i.useEffect(() => {
                a &&
                  (n(void 0),
                  l([e], void 0, 6e4).then(async (e) => {
                    n(e);
                  }));
              }, [a, e, n, l]),
              !a)
            )
              return r.OK;
            if (null == t) return r.Loading;
            if (1 != t) return r.FailedToLoad;
            const c = (0, p.qN)(e);
            return c.every((e) => e.rtStartDate > o + w.nu || e.rtEndDate < o)
              ? r.OK
              : r.RequiresCooldown;
          })(t, c),
          { fnPublish: u, ePublishState: P } = (function (e) {
            const a = (0, l.h4)(),
              [t, r] = i.useState(n.Idle);
            let o = i.useCallback(async () => {
              r(n.Loading);
              1 == (await a(e)).success ? r(n.OK) : r(n.Failed);
            }, [r, a, e]);
            return { fnPublish: o, ePublishState: t };
          })(t);
        let g;
        if (d == r.FailedToLoad)
          g = (0, s.oW)(
            "#PricingDashboard_PriceProposal_Publish_FailedToLoad",
            i.createElement("div", null),
            i.createElement("div", null),
          );
        else if (d == r.RequiresCooldown) {
          let e = i.createElement(b.uU, {
            href: "https://partner.steamgames.com/doc/store/pricing",
          });
          g = i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              null,
              (0, s.we)(
                "#PricingDashboard_PriceProposal_Publish_CooldownError1",
              ),
            ),
            i.createElement(
              "div",
              null,
              (0, s.oW)(
                "#PricingDashboard_PriceProposal_Publish_CooldownError2",
                e,
              ),
            ),
            i.createElement(
              "div",
              null,
              (0, s.we)(
                "#PricingDashboard_PriceProposal_Publish_CooldownError3",
              ),
            ),
            i.createElement(
              "div",
              null,
              i.createElement(
                "ol",
                null,
                i.createElement(
                  "li",
                  null,
                  (0, s.we)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError3a",
                  ),
                ),
                i.createElement(
                  "li",
                  null,
                  (0, s.we)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError3b",
                  ),
                ),
              ),
            ),
          );
        } else
          P == n.Failed &&
            (g = (0, s.oW)(
              "#PricingDashboard_PriceProposal_Publish_FailedToPublish",
              i.createElement("div", null),
              i.createElement("div", null),
            ));
        if (g) {
          let e = (0, s.we)("#PricingDashboard_PriceProposal_Publish_Title");
          return (
            d == r.RequiresCooldown &&
              (e = (0, s.we)(
                "#PricingDashboard_PriceProposal_Publish_CantPublishTitle",
              )),
            i.createElement(
              _.o0,
              {
                strTitle: e,
                bAlertDialog: !0,
                onOK: a,
                onCancel: a,
                closeModal: a,
              },
              i.createElement("div", { className: E().PublishErrorDialog }, g),
            )
          );
        }
        let m = d == r.Loading || P == n.Loading;
        return i.createElement(
          _.o0,
          {
            strTitle: (0, s.we)(
              "#PricingDashboard_PriceProposal_Publish_Title",
            ),
            bAlertDialog: !1,
            strOKButtonText: (0, s.we)(
              "#PricingDashboard_PriceProposal_Publish_Button",
            ),
            bOKDisabled: m,
            bCancelDisabled: m,
            bDestructiveWarning: !0,
            onOK: u,
            onCancel: a,
            closeModal: a,
          },
          m && i.createElement(h.t, { position: "center" }),
          !m &&
            i.createElement(
              i.Fragment,
              null,
              (0, s.Yp)(
                "#PricingDashboard_PriceProposal_Publish_Explanation",
                o.length,
              ),
              c &&
                i.createElement(
                  "div",
                  { className: E().PublishWarning },
                  (0, s.we)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownWarning",
                  ),
                ),
              i.createElement(C.t, { rgLocalPriceOverrides: o }),
            ),
        );
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
        })(r || (r = {}));
      var N = t(64753),
        S = t(16676),
        I = t(96434),
        O = t.n(I);
      function T(e) {
        const { packageID: a, bShowCancel: t } = e,
          n = (0, l.XB)(a),
          r = (0, l.d$)(a),
          g = r && (0, o.mK)(r.rtSubmitted),
          [_, h] = (0, c.Hl)(r?.submitterID),
          b = h ? h.persona_name : r?.submitterID;
        let v = "PackageMore_" + a,
          E = null,
          p = null,
          D = null;
        n
          ? ((E = m().NeedsReview),
            (D = (0, s.we)("#PricingDashboard_PriceProposal_NeedsReview_ttip")),
            (p = (0, s.we)("#PricingDashboard_PriceProposal_NeedsReview")))
          : 1 == r?.eState && r.bPartnerWillPublish
            ? ((E = m().PartnerWillPublish),
              (D = (0, s.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip",
                b,
                g,
              )),
              (p = (0, s.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish",
              )))
            : 1 != r?.eState || r.bPartnerWillPublish
              ? 4 == r?.eState
                ? ((E = m().ApprovedCanPublish),
                  (D = (0, s.we)(
                    "#PricingDashboard_PriceProposal_Approved_ttip",
                  )),
                  (p = i.createElement(k, { packageID: a })))
                : ((E = m().NoProposalsInFlight),
                  (D = (0, s.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight_ttip",
                  )),
                  (p = (0, s.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight",
                  )))
              : ((E = m().AutoPublish),
                (D = (0, s.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip",
                  b,
                  g,
                )),
                (p = i.createElement(
                  "div",
                  null,
                  (0, s.we)("#PricingDashboard_PriceProposal_WaitingForReview"),
                  i.createElement("br", null),
                  i.createElement(
                    "span",
                    null,
                    (0, s.we)(
                      "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish",
                    ),
                  ),
                )));
        let w = t && (n || !!r);
        return i.createElement(
          "div",
          { className: (0, d.A)(m().ProposalState, E) },
          i.createElement(
            u.he,
            { toolTipContent: D, className: m().StateText },
            i.createElement("div", { className: m().ProposalStateKey }),
            p,
          ),
          w &&
            i.createElement(P.O, {
              hoverKey: v,
              className: m().PackageMore,
              renderHover: () => i.createElement(y, { packageID: a }),
            }),
        );
      }
      function k(e) {
        const { packageID: a } = e,
          [t, n, r] = (0, N.uD)();
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            S.jn,
            { onClick: n },
            (0, s.we)("#PricingDashboard_PriceProposal_PublishDialog_Button"),
          ),
          i.createElement(
            _.EN,
            { active: t },
            i.createElement(f, { packageID: a }),
          ),
        );
      }
      function y(e) {
        const { packageID: a } = e,
          t = (0, l.XB)(a);
        let n = (0, l.T_)(a);
        const r = (0, l.d$)(a);
        let o = (0, l.fr)(a);
        return i.createElement(
          "div",
          { className: O().PricePopout },
          i.createElement(
            "div",
            { className: O().DetailRow },
            t &&
              i.createElement(
                "div",
                { className: O().DetailLabel, onClick: n },
                (0, s.we)("#PricingDashboard_RevertAllPackage"),
              ),
            !!r &&
              i.createElement(
                "div",
                { className: O().DetailLabel, onClick: o },
                (0, s.we)("#PricingDashboard_CancelPriceProposal"),
              ),
          ),
        );
      }
    },
    40818: (e, a, t) => {
      "use strict";
      t.d(a, { Zg: () => T, BL: () => S, cK: () => I });
      var n = t(64753),
        r = t(48996),
        i = t(96745),
        l = t(17084),
        o = t(90626),
        c = t(44165),
        s = t(16676),
        d = t(9154),
        u = t(738),
        P = t(12155),
        g = t(22797),
        m = t(51272),
        _ = t(4434),
        h = t(52038),
        b = t(56011),
        v = t(61859),
        E = t(14771),
        p = t(61311);
      function D(e) {
        const { closeModal: a } = e,
          t = (0, l.Ci)(),
          n = (0, l.NC)();
        return o.createElement(
          d.o0,
          {
            strTitle: (0, v.we)("#PackageGrid_DiscardChangesTitle"),
            strOKButtonText: (0, v.we)("#PackageGrid_DiscardChangesButton"),
            onOK: n,
            bDestructiveWarning: !0,
            closeModal: a,
          },
          (0, v.Yp)("#PricingDashboard_DiscardChangesExplanation", t.length),
          o.createElement(p.t, { rgLocalPriceOverrides: t }),
        );
      }
      var w = t(18715),
        C = t.n(w);
      const f = 30,
        N = 40;
      function S(e) {
        const { bReloadPageOnSave: a } = e,
          t = (0, l.Ci)();
        let r = t?.length ?? 0,
          i = r > 0;
        const [c, u, P] = (0, n.uD)(),
          [g, m, _] = (0, n.uD)();
        return o.createElement(
          "div",
          { className: (0, h.A)(C().ToolbarInfo, i && C().Visible) },
          o.createElement(
            "div",
            { className: C().ChangeCount },
            (0, v.Yp)("#PackageGrid_PendingChangeCount", r),
          ),
          o.createElement(
            "div",
            { className: C().Buttons },
            o.createElement(
              s.$n,
              {
                onClick: u,
                disabled: 0 == r,
                className: (0, h.A)(C().Button, C().SaveButton),
              },
              (0, v.we)("#PackageGrid_SaveChangesDialogButton"),
            ),
            o.createElement(
              d.EN,
              { active: c },
              o.createElement(T, { closeModal: P, bReloadPageOnSave: a }),
            ),
            o.createElement(
              s.$n,
              { className: C().Button, onClick: m },
              (0, v.we)("#PackageGrid_DiscardChangesDialogButton"),
            ),
            o.createElement(
              d.EN,
              { active: g },
              o.createElement(D, { closeModal: _ }),
            ),
          ),
        );
      }
      function I() {
        return o.useCallback(
          (e, a) =>
            (0, u.pg)(o.createElement(T, { strContinueUrl: a }), (0, b.uX)(e)),
          [],
        );
      }
      function O(e) {
        return e
          .filter((e) => e.nPriceInCents > e.nOldPriceInCents)
          .map((e) => e.packageID);
      }
      function T(e) {
        const { closeModal: a, strContinueUrl: t, bReloadPageOnSave: n } = e,
          P = (0, l.Ci)(),
          g = (0, l.NC)(),
          [_, h] = o.useState(void 0),
          b = (function (e) {
            let [a, t] = o.useState(void 0);
            const n = (0, r.zq)(),
              i = (0, c.P_)(60);
            return (
              o.useEffect(() => {
                t(void 0);
                let a = O(e);
                a.length > 0
                  ? n(a, void 0, 6e4).then((e) => {
                      t(e);
                    })
                  : t(1);
              }, [t, e, n]),
              o.useMemo(() => {
                if (void 0 === a) return null;
                if (1 != a) return { days: 0, loadFailed: !0 };
                let t = Number.MAX_SAFE_INTEGER,
                  n = O(e);
                for (let e of n) {
                  const a = (0, r.qN)(e);
                  for (const e of a) {
                    if (e.rtStartDate < i) continue;
                    let a = Math.floor((e.rtStartDate - i) / E.Kp.PerDay);
                    t = Math.min(t, a);
                  }
                }
                return { days: t, loadFailed: !1 };
              }, [a, i, e])
            );
          })(P);
        if (!b) return null;
        const D = !!t,
          w = (0, v.we)(
            D
              ? "#PackageGrid_NavigationWarning_Title"
              : "#PricingDashboard_SavePricesTitle",
          ),
          f = (0, v.Yp)("#PricingDashboard_SavePricesExplanation", P.length);
        if (b.loadFailed)
          return o.createElement(
            d.o0,
            {
              strTitle: w,
              bAlertDialog: !0,
              onOK: a,
              onCancel: a,
              closeModal: a,
            },
            o.createElement(
              "div",
              { className: C().PublishErrorDialog },
              (0, v.oW)(
                "#PricingDashboard_SavePrices_FailedToLoad",
                o.createElement("div", null),
                o.createElement("div", null),
              ),
            ),
          );
        let N = !1,
          S = !1,
          I = !1,
          T = new Set();
        for (const e of P) {
          const { nMinPriceInCents: a, nMaxPriceInCents: t } = (0, l.tn)(
            e.packageID,
            e.strPriceKey,
          );
          (N = N || e.nPriceInCents < a),
            (S = S || (!!t && e.nPriceInCents > t)),
            (I = I || e.nPriceInCents > e.nOldPriceInCents),
            T.add(e.packageID);
        }
        let W,
          A = (0, l.ww)(T);
        if (A.length > 0) {
          let e = A.map((e) => (0, i.ww)(e));
          W = (0, v.we)("#PricingDashboad_RequiredPrices", e.join(", "));
        }
        const x = N || S,
          F = x || void 0 === _ || 0 != A.length,
          K = (e) => {
            t
              ? (window.location.href = t)
              : n && !e && window.location.reload();
          },
          M = () => {
            void 0 !== _
              ? (e.closeModal(),
                (0, u.pg)(
                  o.createElement(B, { bAutoPublish: _, fnOnSuccess: K }),
                  window,
                ))
              : console.error(
                  "Pricing:SaveChangesDialog auto publish undefined",
                );
          };
        let R = o.createElement(m.uU, {
          href: "https://partner.steamgames.com/doc/store/pricing",
        });
        return o.createElement(
          d.eV,
          {
            title: w,
            onOK: M,
            onCancel: e.closeModal,
            bDestructiveWarning: D,
            closeModal: a,
          },
          o.createElement(
            s.nB,
            { className: C().SaveDialogBody },
            o.createElement(
              s.a3,
              { className: C().SaveDialogBodyText },
              D &&
                o.createElement(
                  "div",
                  { className: C().NavigationWarning },
                  (0, v.we)("#PackageGrid_NavigationWarning"),
                ),
              f,
              x &&
                o.createElement(
                  "div",
                  { className: C().PricePreviewWarning },
                  " ",
                  (0, v.oW)("#PricingDashboard_PreviewWarning", R),
                  " ",
                ),
              W &&
                o.createElement(
                  "div",
                  { className: C().PricePreviewWarning },
                  " ",
                  W,
                  " ",
                ),
              o.createElement(p.t, { rgLocalPriceOverrides: P }),
              o.createElement(k, { priceIncrease: I, nextDiscount: b.days }),
              o.createElement(y, {
                value: _,
                onChange: h,
                nextDiscount: b.days,
              }),
            ),
            o.createElement(
              s.wi,
              null,
              D
                ? o.createElement(s.VQ, {
                    strOKText: (0, v.we)("#Button_Save"),
                    onOK: M,
                    bOKDisabled: F,
                    strUpdateText: (0, v.we)(
                      "#PackageGrid_NavigateWithoutSavingButton",
                    ),
                    onUpdate: () => {
                      g(), e.closeModal(), K(!0);
                    },
                    onCancel: e.closeModal,
                  })
                : o.createElement(s.CB, {
                    strOKText: (0, v.we)("#Button_Save"),
                    onOK: M,
                    bOKDisabled: F,
                    onCancel: e.closeModal,
                  }),
            ),
          ),
        );
      }
      function k(e) {
        let a,
          { priceIncrease: t, nextDiscount: n } = e;
        return t
          ? ((a =
              n < f
                ? (0, v.we)(
                    "#PricingDashboard_SavePrice_FutureDiscountTooSoon",
                    f,
                  )
                : n < N
                  ? (0, v.we)(
                      "#PricingDashboard_SavePrice_FutureDiscountSoon",
                      n,
                      f,
                    )
                  : (0, v.we)(
                      "#PricingDashboard_SavePrice_CooldownWarning",
                      f,
                    )),
            o.createElement(
              "div",
              { className: C().PriceChangeSaveWarning },
              o.createElement(
                "div",
                { className: C().PriceChangeSaveWarningArrow },
                o.createElement(P.i3G, { angle: 0 }),
              ),
              o.createElement(
                "div",
                { className: C().HigherPriceWarning },
                " ",
                a,
                " ",
              ),
            ))
          : null;
      }
      function y(e) {
        let { value: a, onChange: t } = e,
          n = e.nextDiscount <= f;
        return o.createElement(
          "div",
          { className: C().AutoPublishCheckBox },
          o.createElement(s.Od, {
            className: C().RadioButtons,
            checked: !1 === a,
            onChange: () => t(!1),
            label: (0, v.we)("#PricingDashboard_AutoPublish_Disabled"),
          }),
          o.createElement(s.Od, {
            className: C().RadioButtons,
            checked: !0 === a,
            disabled: n,
            onChange: () => t(!0),
            label: (0, v.we)("#PricingDashboard_AutoPublish_Enabled"),
          }),
        );
      }
      function B(e) {
        const { closeModal: a, bAutoPublish: t, fnOnSuccess: n } = e,
          r = (0, l.Ci)(),
          i = (0, l.Bt)(),
          c = (0, _.m)("SaveProgressDialog"),
          [s, u] = o.useState(0),
          [P, m] = o.useState(null),
          h = !t;
        return (
          o.useEffect(() => {
            (async () => {
              const e = Array.from(new Set(r.map((e) => e.packageID)));
              for (let a = 0; a < e.length; a++) {
                u(a);
                const t = e[a],
                  n = await i(t, h, c);
                if (c.token.reason) return;
                if (1 != n.success)
                  return void m(
                    n.msg ?? (0, v.we)("#PricingDashboard_SavePricesError"),
                  );
              }
              u(e.length), n(), a();
            })();
          }, []),
          o.createElement(
            d.o0,
            {
              strTitle: (0, v.we)("#PackageGrid_SaveInProgress"),
              bAlertDialog: !!P,
              strOKButtonText: P
                ? (0, v.we)("#Button_Close")
                : (0, v.we)("#Button_OK"),
              onOK: P ? a : n,
              onCancel: () => {
                c.cancel("cancelled by user");
              },
              closeModal: a,
              bDestructiveWarning: !0,
            },
            P ??
              o.createElement(g.t, {
                position: "center",
                string: (0, v.we)("#PricingDashboard_Progress", s),
              }),
          )
        );
      }
    },
    83800: (e, a, t) => {
      "use strict";
      t.d(a, { J: () => n });
      t(90626);
      const n = (e) => null;
    },
  },
]);
