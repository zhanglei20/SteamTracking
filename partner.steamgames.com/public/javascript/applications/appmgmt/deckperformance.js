/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [906],
  {
    7878: (e) => {
      e.exports = {
        PerformanceContainer: "_3SS4MYcpRbsOo9iGYIYFTr",
        FeedbackContainer: "_3cVL8Lt1OMroMTVCMlr_1o",
        FrameRateContainer: "_3iH3NPfTuZEgKkeMZSIHMN",
        DescriptionContainer: "_1XOEGQOlJQVwkWxEVhS-U2",
        DescriptionSection: "_1C4uPBMaD8hewNntz_uA3F",
        PerformanceSectionTitle: "_3RgwExAFwWbutDA-nZwOCK",
        DescriptionDetails: "nL0dzsDcGMBJXrt6KYm5N",
        FrameRateValue: "_2B6juattDAX-hilEh3Rt_B",
        DescriptionEmphasis: "ina27Iss3Cu6uQV6muq16",
        FeedbackAgree: "_1hAFmIlqGPHT1w7at0haFP",
        Percentage: "_37Q42KiUq40QU4jHr7ABSq",
        Beta: "_2tlJ__d3Y6cO8vwDClUB_C",
        FeedbackSummaryTable: "IjK2dzEOTlknwfRiGZs_-",
        FeedbackPerformance: "_1w05HAsWlfzr6UkMnXzd7F",
        FeedbackLegibility: "_2X08Zf_f23vHyJAxwwf-TO",
        FeedbackStability: "Mqd_gJMUlMmJ4UMXHVew_",
        FeedbackInput: "O_CUn7Mt_mLUBjBALiV7I",
        FeedbackOther: "_2qfV7V9Hcm-IbWZ2jMulQX",
        FeedbackTableHeader: "_2RNTmni7sGrUo6vvhW9r9l",
        FeedbackChartContainer: "_2h_JKiy1-oqTL5oobp5fGl",
      };
    },
    67406: (e, a, t) => {
      "use strict";
      t.d(a, { E: () => l });
      var r = t(98403),
        i = t(20283),
        n = t(90150),
        s = t(73077),
        c = t(12260),
        l = (0, r.gu)({
          chartName: "BarChart",
          GraphicalChild: i.y,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            { axisType: "xAxis", AxisComp: n.W },
            { axisType: "yAxis", AxisComp: s.h },
          ],
          formatAxisMap: c.pr,
        });
    },
    11577: (e, a, t) => {
      "use strict";
      t.d(a, { m: () => o });
      var r = t(90626),
        i = t(96059),
        n = t(16021),
        s = t(81393),
        c = t(78327),
        l = t(63664);
      function o(e) {
        const [a, t] = (0, r.useState)(!1),
          [o] = (0, r.useState)(() =>
            (function () {
              const e = (0, c.Tc)(
                "partnerbrowse_webapi_token",
                "application_config",
              );
              (0, s.wT)(Boolean(e), "require partnerbrowse_webapi_token");
              const a = new i.D(c.TS.WEBAPI_BASE_URL, e);
              ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: Initializing CStoreItemCache with access token",
                  e,
                );
              return a;
            })(),
          ),
          d = (0, r.useMemo)(
            () => ({
              country: c.TS.COUNTRY,
              language: c.TS.LANGUAGE,
              bUsePartnerAPI: !0,
            }),
            [],
          );
        return (
          (0, r.useEffect)(
            () => (
              t(!0),
              (function (e) {
                return n.A.Initialize(
                  e.GetServiceTransport(),
                  c.iA.is_partner_member,
                );
              })(o)
            ),
            [o],
          ),
          a
            ? (0, r.createElement)(l.V3, {
                context: d,
                serviceTransportOverride: o.GetServiceTransport(),
                children: e.children,
              })
            : null
        );
      }
    },
    55263: (e, a, t) => {
      "use strict";
      t.d(a, {
        G6: () => _,
        Gg: () => h,
        MS: () => x,
        Ow: () => p,
        Sq: () => d,
        eR: () => u,
        gF: () => S,
        ik: () => m,
        t7: () => f,
        zX: () => b,
      });
      var r = t(41735),
        i = t.n(r),
        n = t(90626),
        s = t(37085),
        c = t(96171),
        l = t(73745),
        o = t(16021);
      const d = 1,
        u = 2,
        m = 3;
      function _(e, a, t, r) {
        const c = (0, n.useRef)(void 0),
          _ = (0, n.useRef)(void 0),
          f = (0, l.CH)();
        c.current = e;
        const [p, h] = (0, n.useState)(void 0),
          {
            include_assets: g,
            include_release: b,
            include_platforms: x,
            include_all_purchase_options: S,
            include_screenshots: k,
            include_trailers: v,
            include_ratings: y,
            include_tag_count: j,
            include_reviews: G,
            include_basic_info: P,
            include_supported_languages: F,
            include_full_description: N,
            include_included_items: I,
            include_assets_without_overrides: C,
            apply_user_filters: L,
            include_links: A,
          } = t;
        if (
          ((0, n.useEffect)(() => {
            const t = {
              include_assets: g,
              include_release: b,
              include_platforms: x,
              include_all_purchase_options: S,
              include_screenshots: k,
              include_trailers: v,
              include_ratings: y,
              include_tag_count: j,
              include_reviews: G,
              include_basic_info: P,
              include_supported_languages: F,
              include_full_description: N,
              include_included_items: I,
              include_assets_without_overrides: C,
              apply_user_filters: L,
              include_links: A,
            };
            let n = null;
            return (
              !e ||
                e < 0 ||
                o.A.Get().BHasStoreItem(e, a, t) ||
                (void 0 !== p && r && r == _.current) ||
                (r !== _.current && (h(void 0), (_.current = r)),
                (n = i().CancelToken.source()),
                o.A.Get()
                  .QueueStoreItemRequest(e, a, t)
                  .then((a) => {
                    n?.token.reason || c.current !== e || h(a == s.R), f();
                  })),
              () => n?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, a, r, p, g, b, x, S, k, v, y, j, G, P, F, N, I, C, L, A, f]),
          !e)
        )
          return [null, u];
        if (!1 === p) return [void 0, u];
        if (o.A.Get().BIsStoreItemMissing(e, a)) return [void 0, u];
        if (!o.A.Get().BHasStoreItem(e, a, t)) return [void 0, d];
        const T = o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, a);
        return T ? [T, m] : [null, u];
      }
      function f(e, a, t) {
        return _(e, c.c6.qI, a, t);
      }
      function p(e, a, t) {
        return _(e, c.c6.xO, a, t);
      }
      function h(e, a, t) {
        return _(e, c.c6.RD, a, t);
      }
      function g(e, a, t, r) {
        const s = (0, l.CH)(),
          {
            include_assets: c,
            include_release: _,
            include_platforms: f,
            include_all_purchase_options: p,
            include_screenshots: h,
            include_trailers: g,
            include_ratings: b,
            include_tag_count: x,
            include_reviews: S,
            include_basic_info: k,
            include_supported_languages: v,
            include_full_description: y,
            include_included_items: j,
            include_assets_without_overrides: G,
            apply_user_filters: P,
            include_links: F,
          } = t;
        if (
          ((0, n.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const t = {
                include_assets: c,
                include_release: _,
                include_platforms: f,
                include_all_purchase_options: p,
                include_screenshots: h,
                include_trailers: g,
                include_ratings: b,
                include_tag_count: x,
                include_reviews: S,
                include_basic_info: k,
                include_supported_languages: v,
                include_full_description: y,
                include_included_items: j,
                include_assets_without_overrides: G,
                apply_user_filters: P,
                include_links: F,
              },
              r = e.filter(
                (e) =>
                  !(
                    o.A.Get().BHasStoreItem(e, a, t) ||
                    o.A.Get().BIsStoreItemMissing(e, a)
                  ),
              );
            if (0 == r.length) return;
            const n = i().CancelToken.source(),
              l = r.map((e) => o.A.Get().QueueStoreItemRequest(e, a, t));
            return (
              Promise.all(l).then(() => {
                n.token.reason || s();
              }),
              () => n.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, a, r, s, c, _, f, p, h, g, b, x, S, k, v, y, j, G, P, F]),
          !e)
        )
          return u;
        if (
          !e.every(
            (e) =>
              o.A.Get().BHasStoreItem(e, a, t) ||
              o.A.Get().BIsStoreItemMissing(e, a),
          )
        )
          return d;
        return e.every((e) =>
          o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, a),
        )
          ? m
          : u;
      }
      function b(e, a, t) {
        return g(e, c.c6.qI, a, t);
      }
      function x(e, a, t) {
        return g(e, c.c6.xO, a, t);
      }
      function S(e, a, t) {
        return g(e, c.c6.RD, a, t);
      }
    },
    42103: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { HardwarePerformance: () => j, default: () => y });
      var r = t(7850),
        i = t(90626),
        n = t(7878),
        s = t(55263),
        c = t(32671),
        l = t(67406),
        o = t(90150),
        d = t(73077),
        u = t(30230),
        m = t(20283),
        _ = t(75620),
        f = t(61141),
        p = t(58661),
        h = t(90865),
        g = t(6083),
        b = t(67361),
        x = t(11577),
        S = t(52038),
        k = t(26408),
        v = t(47911);
      function y(e) {
        const { dataprops: a, appId: t } = e;
        return a?.framerate || a?.feedback
          ? (0, r.jsx)(x.m, {
              children: (0, r.jsx)(j, { appId: t, dataprops: a }),
            })
          : (0, r.jsx)(r.Fragment, {});
      }
      function j(e) {
        const { dataprops: a } = e;
        return a?.framerate || a?.feedback
          ? (0, r.jsxs)("div", {
              className: n.PerformanceContainer,
              children: [
                Boolean(a?.framerate) &&
                  (0, r.jsx)(P, {
                    appId: Number(e.appId),
                    frameRateData: a.framerate,
                  }),
                Boolean(a?.feedback) &&
                  (0, r.jsx)(G, {
                    appId: Number(e.appId),
                    feedbackData: a.feedback,
                  }),
              ],
            })
          : (0, r.jsx)(r.Fragment, {});
      }
      function G(e) {
        const { feedbackData: a } = e;
        if (!a || !a.daily?.length)
          return (0, r.jsx)("div", {
            className: n.FrameRateContainer,
            children: (0, r.jsxs)("div", {
              className: n.DescriptionContainer,
              children: [
                (0, r.jsx)("div", {
                  className: n.PerformanceSectionTitle,
                  children: v.Z.Localize(
                    "#GamePerformanceStats_CustomerFeedback",
                  ),
                }),
                (0, r.jsx)("div", {
                  children: v.Z.Localize("#GamePerformanceStats_NoData"),
                }),
              ],
            }),
          });
        const t = [
            {
              fill: "#ffc82c",
              key: "disagree_performance",
              name: v.Z.Localize("#GamePerformanceStats_Performance"),
            },
            {
              fill: "#59bf40",
              key: "disagree_legibility",
              name: v.Z.Localize("#GamePerformanceStats_Legibility"),
            },
            {
              fill: "#1a9fff",
              key: "disagree_stability",
              name: v.Z.Localize("#GamePerformanceStats_Stability"),
            },
            {
              fill: "#ad66bb",
              key: "disagree_input",
              name: v.Z.Localize("#GamePerformanceStats_Input"),
            },
            {
              fill: "#dcdedf",
              key: "disagree_other",
              name: v.Z.Localize("#GamePerformanceStats_Other"),
            },
          ],
          i = Number(a.total?.agree) + Number(a.total?.disagree),
          s = (Number(a.total?.agree) / i) * 100,
          f = [...a.daily];
        return (0, r.jsxs)("div", {
          className: n.FeedbackContainer,
          children: [
            (0, r.jsxs)("div", {
              className: n.DescriptionContainer,
              children: [
                (0, r.jsx)("div", {
                  className: n.PerformanceSectionTitle,
                  children: v.Z.Localize(
                    "#GamePerformanceStats_CustomerFeedback",
                  ),
                }),
                (0, r.jsx)(N, { nAgreePercent: s }),
                (0, r.jsx)("div", {
                  children: v.Z.Localize(
                    "#GamePerformanceStats_NumberOfReports",
                    (0, g.D)(i),
                    a.daily.length,
                  ),
                }),
                (0, r.jsx)("div", {
                  className: n.DescriptionSection,
                  children: v.Z.LocalizeReact(
                    "#GamePerformanceStats_WhyDisagree",
                    (0, r.jsx)("span", {
                      children: v.Z.Localize(
                        "#GamePerformanceStats_DidNotAgree",
                      ),
                    }),
                    (0, r.jsx)("span", {
                      children: v.Z.Localize(
                        "#SteamDeckVerified_Category_Verified",
                      ),
                    }),
                  ),
                }),
                (0, r.jsx)(I, { feedback: a }),
              ],
            }),
            (0, r.jsx)(c.u, {
              width: "100%",
              minWidth: 600,
              minHeight: 300,
              className: n.FeedbackChartContainer,
              children: (0, r.jsxs)(l.E, {
                margin: { top: 25, left: 0, right: 0, bottom: 0 },
                data: f.sort((e, a) => e.date - a.date),
                children: [
                  (0, r.jsx)(o.W, {
                    dataKey: "date",
                    tickFormatter: F,
                    stroke: "white",
                  }),
                  (0, r.jsx)(d.h, {
                    stroke: "white",
                    domain: [() => 0, (e) => Math.max(e, 20)],
                  }),
                  (0, r.jsx)(u.m, { labelFormatter: F }),
                  t.map((e) =>
                    (0, r.jsx)(
                      m.y,
                      {
                        shape: (0, r.jsx)(C, { fill: e.fill }),
                        fill: e.fill,
                        dataKey: e.key,
                        stackId: "day",
                        name: e.name,
                      },
                      e.key,
                    ),
                  ),
                  (0, r.jsx)(_.s, {}),
                ],
              }),
            }),
          ],
        });
      }
      function P(e) {
        const { appId: a, frameRateData: t } = e,
          [l, m] = (0, s.t7)(a, {
            include_basic_info: !0,
            include_assets: !0,
            include_tag_count: 10,
            include_release: !0,
          }),
          _ = i.useMemo(() => {
            let e = [];
            return (
              t?.frame_rate_clusters &&
                t?.frame_rate_clusters.length > 0 &&
                t.frame_rate_clusters[0].daily_frame_rates?.map((a) => {
                  const t = parseInt("" + a.mean_frame_rate),
                    r = parseInt("" + a.mean_frame_rate_stddev);
                  return e.push({
                    date: a.date,
                    mean: t,
                    range: [t + r, t - r],
                  });
                }),
              e.sort((e, a) => e.date - a.date)
            );
          }, [t]);
        if (!t || !t.frame_rate_clusters?.length)
          return (0, r.jsx)("div", {
            className: n.FrameRateContainer,
            children: (0, r.jsxs)("div", {
              className: n.DescriptionContainer,
              children: [
                (0, r.jsx)("div", {
                  className: n.PerformanceSectionTitle,
                  children: v.Z.Localize(
                    "#GamePerformanceStats_AverageFrameRate_Title",
                  ),
                }),
                (0, r.jsx)("div", {
                  children: v.Z.Localize("#GamePerformanceStats_NoData"),
                }),
              ],
            }),
          });
        const g = t.frame_rate_clusters[0],
          b = Number(g.mean_frame_rate).toFixed(0),
          x = (0, r.jsx)("span", {
            className: n.FrameRateValue,
            children: v.Z.Localize("#GamePerformanceStats_FPS", b),
          }),
          S = l?.GetName()
            ? v.Z.LocalizeReact(
                "#GamePerformanceStats_AverageFrameRate",
                l.GetName(),
                x,
              )
            : v.Z.LocalizeReact(
                "#GamePerformanceStats_AverageFrameRate_ThisGame",
                x,
              );
        return (0, r.jsxs)("div", {
          className: n.FrameRateContainer,
          children: [
            (0, r.jsxs)("div", {
              className: n.DescriptionContainer,
              children: [
                (0, r.jsxs)("div", {
                  className: n.PerformanceSectionTitle,
                  children: [
                    v.Z.Localize(
                      "#GamePerformanceStats_AverageFrameRate_Title",
                    ),
                    (0, r.jsx)("span", {
                      className: n.Beta,
                      children: v.Z.Localize("#NewToolTitleSuffix_Beta"),
                    }),
                  ],
                }),
                (0, r.jsx)("div", { children: S }),
                (0, r.jsx)("div", {
                  className: n.DescriptionSection,
                  children: v.Z.Localize(
                    "#GamePerformanceStats_FrameRateDataBasedOn",
                    g.report_days,
                  ),
                }),
                (0, r.jsx)("div", {
                  className: n.DescriptionSection,
                  children: v.Z.Localize(
                    "#GamePerformanceStats_FrameRateMoreInfo",
                  ),
                }),
              ],
            }),
            (0, r.jsx)(c.u, {
              width: "100%",
              minWidth: 600,
              height: 300,
              children: (0, r.jsxs)(f.X, {
                margin: { top: 25, left: 0, right: 0, bottom: 0 },
                data: _,
                children: [
                  (0, r.jsx)(p.d, { strokeDasharray: "3 3", color: "red" }),
                  (0, r.jsx)(o.W, {
                    dataKey: "date",
                    tickFormatter: F,
                    stroke: "white",
                  }),
                  (0, r.jsx)(d.h, { stroke: "white" }),
                  (0, r.jsx)(u.m, { labelFormatter: F }),
                  (0, r.jsx)(h.N, {
                    type: "natural",
                    dataKey: "mean",
                    name: "average",
                    stroke: "#4477EE",
                  }),
                  !1,
                ],
              }),
            }),
          ],
        });
      }
      function F(e) {
        return (0, b._l)(e);
      }
      function N(e) {
        const { nAgreePercent: a } = e;
        return (0, r.jsxs)("div", {
          className: n.FeedbackAgree,
          children: [
            v.Z.LocalizeReact(
              "#GamePerformanceStats_Feedback_Agree",
              (0, r.jsx)("span", {
                className: (0, S.A)(n.Percentage, n.DescriptionEmphasis),
                children: v.Z.LocalizeReact(
                  "#GamePerformanceStats_Feedback_AgreePercentage",
                  a.toFixed(0),
                ),
              }),
              (0, r.jsx)("span", {
                children: v.Z.Localize("#SteamDeckVerified_Category_Verified"),
              }),
            ),
            (0, r.jsx)(k.o, {
              tooltip: (0, r.jsx)("div", {
                children: v.Z.Localize(
                  "#GamePerformanceStats_Feedback_PercentageTooltip",
                ),
              }),
            }),
          ],
        });
      }
      function I(e) {
        const { feedback: a } = e;
        let t = new Array(
          {
            display: v.Z.Localize("#GamePerformanceStats_Input"),
            value: a.total.disagree_input,
            class: n.FeedbackInput,
          },
          {
            display: v.Z.Localize("#GamePerformanceStats_Legibility"),
            value: a.total.disagree_legibility,
            class: n.FeedbackLegibility,
          },
          {
            display: v.Z.Localize("#GamePerformanceStats_Performance"),
            value: a.total.disagree_performance,
            class: n.FeedbackPerformance,
          },
          {
            display: v.Z.Localize("#GamePerformanceStats_Stability"),
            value: a.total.disagree_stability,
            class: n.FeedbackStability,
          },
          {
            display: v.Z.Localize("#GamePerformanceStats_Other"),
            value: a.total.disagree_other,
            class: n.FeedbackOther,
          },
        );
        return (
          t.sort((e, a) =>
            e.class == n.FeedbackOther ? 1 : a.value - e.value,
          ),
          (0, r.jsxs)("div", {
            className: n.FeedbackSummaryTable,
            children: [
              (0, r.jsx)("div", {
                className: n.FeedbackTableHeader,
                children: v.Z.Localize("#GamePerformance_Reason"),
              }),
              (0, r.jsx)("div", {
                className: n.FeedbackTableHeader,
                children: v.Z.Localize("#GamePerformance_NumResponses"),
              }),
              t.map((e, a) =>
                (0, r.jsxs)(
                  i.Fragment,
                  {
                    children: [
                      (0, r.jsx)("div", {
                        className: e.class,
                        children: e.display,
                      }),
                      (0, r.jsx)("div", { children: e.value }),
                    ],
                  },
                  "reason_" + a,
                ),
              ),
            ],
          })
        );
      }
      const C = (e) => {
        const { fill: a, x: t, y: i, width: n, height: s } = e;
        return (0, r.jsx)("rect", { x: t, y: i, width: n, height: s, fill: a });
      };
    },
  },
]);
