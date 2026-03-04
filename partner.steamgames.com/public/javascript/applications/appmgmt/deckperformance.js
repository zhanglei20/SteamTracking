/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [906],
  {
    74303: (e) => {
      e.exports = {
        SectionTitle: "VM14UGwmk4Ng_GDgIOldV",
        Row: "_2db7mqsWVB9uITzObYYyl_",
        Pruned: "_2-QYplON9ZYDL8F7UCPKkn",
        CapsuleImg: "_8kkOBQP9vZs4Sc5e-D6Nx",
        Column: "_1r2iOIGkkE_H-dtyZl9UIA",
        TopSection: "_2nKNyFzGZRK6V4byOFHBxY",
        ActionsCtn: "_2jqGLvwK_rnnuqv5Bhw7D4",
        AppealWordsCtn: "_3B_85IU-BWQ7IsZ1IvtON4",
        GameInfo: "_3FTQ3un50thBT-7xji_vdf",
        Title: "_1Y3gQeVyRPx26BMlVqCC90",
        Desc: "_1ICOQoKc9Yus7L-CxMdL5i",
        StoreTags: "_3eS-zxfXPqFdoQWy6KV0Yl",
        RowNumber: "_1HUphXBGHaXuM6Vt-_xH_j",
        FilterTagCnt: "-HWZKyvQQSbeyYiwDC76A",
        TagFilterBar: "sNv3-Ibnicq6cU_RV724_",
      };
    },
    45037: (e) => {
      e.exports = {
        PerformanceContainer: "_29pWRqlLzXWmdfm9jQotLf",
        Restricted: "_1ZGMis_I03-gAR4xeaJcka",
        FeedbackContainer: "_2e_AjtgYgeY8hjzF3Goou9",
        FrameRateContainer: "_3AvjWe0En0PozNr2uWq1r0",
        DescriptionContainer: "_4HW1z_vZiwa5tVKechGQK",
        DescriptionSection: "JRDwuzkZKRnaByXxb-DG7",
        PerformanceSectionTitle: "_29hxZjsck3IZwVGYrTjqX_",
        FrameRateValue: "Ea6FTud7MSP13e5WFg5YS",
        DataSource: "_1bBvFabMPO5kz8MeUiKwi1",
        FeedbackAgree: "Pr_M36YkNFA-weFm4NdGx",
      };
    },
    12916: (e) => {
      e.exports = {
        EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
        EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
        EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
        EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
        TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
        EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
        DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
        PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
        TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
        InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
        TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
        TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
        TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
        EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
        EndRound: "jwuNowbLB28M6nkqFkF_C",
        VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
        VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
        EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
        DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
      };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    11314: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => o });
      var n = i(1839),
        s = i(62059),
        a = i(36058),
        r = i(55241),
        l = i(5608),
        o = (0, n.gu)({
          chartName: "BarChart",
          GraphicalChild: s.y,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            { axisType: "xAxis", AxisComp: a.W },
            { axisType: "yAxis", AxisComp: r.h },
          ],
          formatAxisMap: l.pr,
        });
    },
    51155: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => g, L: () => _ });
      var n = i(7850),
        s = i(90626),
        a = i(77411),
        r = i(16021),
        l = i(39020),
        o = i(16676),
        c = i(99637),
        d = i(22797),
        u = i(48479),
        m = i(4434),
        p = i(61859),
        h = i(74303),
        f = i(30470);
      const _ = {
        include_basic_info: !0,
        include_assets: !0,
        include_tag_count: 10,
        include_release: !0,
      };
      function g(e) {
        const {
            rgOrderedAppIDs: t,
            fnSetFilteredAppID: i,
            rgNotToPruneList: a,
            pageid: l,
          } = e,
          [h, f] = s.useState(!0),
          g = (0, m.m)("OptInAppReviewFilter");
        s.useEffect(() => {
          r.A.Get()
            .QueueMultipleAppRequests(t?.slice(0, 100) || [], _)
            .then(() => {
              r.A.Get()
                .QueueMultipleAppRequests(t?.slice(100) || [], _)
                .then(() => {
                  f(!1);
                });
            });
        }, [g.token.reason, l, t]);
        const [v, A] = s.useState(new Set()),
          [T, j] = s.useState(""),
          [S, b] = s.useState(0),
          [y, w] = s.useState(!1),
          [C, I] = s.useState(0);
        return (
          s.useEffect(() => {
            const e = T?.trim().length > 2,
              n = T?.toLocaleLowerCase(),
              s = Array.from(v),
              l = new Set(a || []);
            if (t.length > 0 && (v.size > 0 || e || S || C)) {
              const a = t
                .filter((t) => {
                  if (e) {
                    const e = r.A.Get().GetApp(t);
                    return (
                      e?.GetName()?.toLocaleLowerCase().indexOf(n) >= 0 ||
                      e
                        ?.GetDeveloperNames()
                        ?.some((e) => e.toLocaleLowerCase().indexOf(n) >= 0) ||
                      e
                        ?.GetPublisherNames()
                        ?.some((e) => e.toLocaleLowerCase().indexOf(n) >= 0) ||
                      e
                        ?.GetFranchiseNames()
                        ?.some((e) => e.toLocaleLowerCase().indexOf(n) >= 0) ||
                      e
                        ?.GetShortDescription()
                        ?.toLocaleLowerCase()
                        .indexOf(n) >= 0
                    );
                  }
                  return !0;
                })
                .filter((e) => {
                  if (s.length > 0) {
                    const t = r.A.Get().GetApp(e);
                    return s.every((e) => t?.GetTagIDs().includes(e));
                  }
                  return !0;
                })
                .filter((e) => {
                  if (S > 0) {
                    const t = r.A.Get().GetApp(e);
                    return (
                      t &&
                      (t?.BIsComingSoon() ||
                        t?.GetOriginalReleaseDateRTime() > S)
                    );
                  }
                  return !0;
                })
                .filter((e) => !(y && l.size > 0) || !l.has(e));
              g.token.reason || i(a);
            }
          }, [y, g.token.reason, i, C, S, a, t, v, T]),
          (0, n.jsx)(u.qx, {
            title: "Filter Options",
            bStartMinimized: !0,
            children: Boolean(h)
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(o.JU, {
                      children: (0, p.we)("#EventCalendar_UniversalSearch"),
                    }),
                    (0, n.jsx)(d.t, {
                      size: "small",
                      string: `Loading ${t?.length || 0} Apps`,
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(o.pd, {
                      type: "text",
                      label: (0, p.we)("#EventCalendar_UniversalSearch"),
                      placeholder: "search by app name, description",
                      value: T,
                      onChange: (e) => {
                        j(e.target.value), I(1);
                      },
                    }),
                    (0, n.jsx)(x, {
                      setFilterTagIDs: v,
                      fnUpdateSetFilterTagIDs: (e) => {
                        A(e), I(1);
                      },
                      rgAppIDs: t,
                      bLoading: h,
                    }),
                    (0, n.jsx)(c.K, {
                      strDescription: "Filter to games Released After:",
                      strDescToolTip:
                        "Allow us to review upcoming games and games that have released (or released into Early Access) after a point. This is useful when re-running a previously pruned event in a new year.",
                      nEarliestTime: 0,
                      fnGetTimeToUpdate: () => S,
                      fnSetTimeToUpdate: (e) => {
                        b(e), I(1);
                      },
                    }),
                    Boolean(a?.length > 0) &&
                      (0, n.jsx)(o.Yh, {
                        checked: y,
                        onChange: (e) => {
                          w(e), I(1);
                        },
                        tooltip:
                          "This is a filter we only want to use in pruning that is done after we have notified partners about their inclusion. So if we communicated with a partner about the event, we don't want to be able to filter them out during a second round of pruning",
                        label:
                          "Filter out previously emailed apps from pruning",
                      }),
                  ],
                }),
          })
        );
      }
      function x(e) {
        const {
            setFilterTagIDs: t,
            fnUpdateSetFilterTagIDs: i,
            rgAppIDs: c,
            bLoading: d,
          } = e,
          u = s.useMemo(
            () =>
              d
                ? []
                : (function (e) {
                    const t = new Map();
                    return (
                      e.forEach((e) => {
                        const i = r.A.Get().GetApp(e);
                        i?.GetTagIDs().forEach((e) => {
                          t.has(e)
                            ? (t.get(e).count += 1)
                            : t.set(e, { tagid: e, count: 1 });
                        });
                      }),
                      Array.from(t.values())
                    );
                  })(c).sort((e, t) => (e.count < t.count ? 1 : -1)),
            [c, d],
          ),
          { data: m } = (0, l.Fv)(f.TS.LANGUAGE),
          p = s.useMemo(
            () => u.map((e) => ({ label: m && m[e.tagid], value: e })),
            [m, u],
          );
        return (0, n.jsxs)("div", {
          className: h.TagFilterBar,
          children: [
            (0, n.jsx)(o.JU, { children: "Filter by Tag:" }),
            (0, n.jsx)(a.Ay, {
              isSearchable: !0,
              isLoading: d,
              isMulti: !0,
              isClearable: !0,
              value: p.filter((e) => t.has(e.value.tagid)),
              options: p,
              styles: { option: (e) => ({ ...e, color: "#444444" }) },
              formatOptionLabel: (e) => (0, n.jsx)(v, { tagCount: e.value }),
              onChange: (e) => {
                i(new Set(e?.map((e) => e.value.tagid)));
              },
            }),
          ],
        });
      }
      function v(e) {
        const { tagCount: t } = e;
        return (
          ((0, l.MB)(t.tagid, f.TS.LANGUAGE) || "tagid: " + t.tagid) +
          " (count: " +
          t.count +
          ")"
        );
      }
    },
    15898: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => S });
      var n = i(7850),
        s = i(90626),
        a = i(84811),
        r = i(45037),
        l = i(55263),
        o = i(51155),
        c = i(78327),
        d = i(69235),
        u = i(11314),
        m = i(36058),
        p = i(55241),
        h = i(85010),
        f = i(62059),
        _ = i(94075),
        g = i(56854),
        x = i(49953),
        v = i(76549),
        A = i(12618),
        T = i(6083),
        j = i(67361);
      function S(e) {
        const { dataprops: t } = e;
        return Boolean(c.iA.is_support) && (t?.framerate || t?.feedback)
          ? (0, n.jsx)(a.tH, {
              children: (0, n.jsxs)("div", {
                className: r.PerformanceContainer,
                children: [
                  (0, n.jsxs)("h1", {
                    children: [
                      "Steam Deck Compatibility",
                      (0, n.jsx)("span", {
                        className: r.Restricted,
                        children: "(VO)",
                      }),
                    ],
                  }),
                  Boolean(t?.framerate) &&
                    (0, n.jsx)(y, {
                      appId: e.appId,
                      frameRateData: t.framerate,
                    }),
                  Boolean(t?.feedback) &&
                    (0, n.jsx)(b, { appId: e.appId, feedbackData: t.feedback }),
                ],
              }),
            })
          : null;
      }
      function b(e) {
        const { feedbackData: t } = e;
        if (!t || !t.daily?.length)
          return (0, n.jsx)("div", {
            className: r.FrameRateContainer,
            children: (0, n.jsxs)("div", {
              className: r.DescriptionContainer,
              children: [
                (0, n.jsx)("div", {
                  className: r.PerformanceSectionTitle,
                  children: "Steam Deck Verified - Customer Feedback",
                }),
                (0, n.jsx)("div", { children: "No data available" }),
              ],
            }),
          });
        const i = Number(t.total.agree) + Number(t.total.disagree),
          s = (Number(t.total.agree) / i) * 100;
        return (0, n.jsxs)("div", {
          className: r.FeedbackContainer,
          children: [
            (0, n.jsxs)("div", {
              className: r.DescriptionContainer,
              children: [
                (0, n.jsx)("div", {
                  className: r.PerformanceSectionTitle,
                  children: "Steam Deck Verified - Customer Feedback",
                }),
                (0, n.jsxs)("div", {
                  className: r.FeedbackAgree,
                  children: [
                    (0, n.jsxs)("span", { children: [s.toFixed(0), "%"] }),
                    " of respondents agree that this game should be Verified",
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    "This data is based on ",
                    (0, T.D)(i),
                    " reports over the past 30 days",
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: r.DescriptionSection,
                  children: [
                    "Customers who ",
                    (0, n.jsx)("b", { children: "did not agree" }),
                    " with the game's ",
                    (0, n.jsx)("b", { children: "Verified" }),
                    " status offered the following reasons as to why they did not agree",
                  ],
                }),
              ],
            }),
            (0, n.jsx)(d.u, {
              width: "100%",
              minWidth: 600,
              height: 300,
              children: (0, n.jsxs)(u.E, {
                style: { width: "100%", fontSize: "16px" },
                data: t.daily.sort((e, t) => e.date - t.date),
                children: [
                  (0, n.jsx)(m.W, {
                    dataKey: "date",
                    tickFormatter: w,
                    stroke: "white",
                  }),
                  (0, n.jsx)(p.h, { stroke: "white" }),
                  (0, n.jsx)(h.m, { labelFormatter: w }),
                  [
                    {
                      fill: "#ffc82c",
                      key: "disagree_performance",
                      name: "Performance",
                    },
                    {
                      fill: "#59bf40",
                      key: "disagree_legibility",
                      name: "Legibility",
                    },
                    {
                      fill: "#1a9fff",
                      key: "disagree_stability",
                      name: "Stability",
                    },
                    { fill: "#ad66bb", key: "disagree_input", name: "Input" },
                    { fill: "#dcdedf", key: "disagree_other", name: "Other" },
                  ].map((e) =>
                    (0, n.jsx)(
                      f.y,
                      {
                        shape: (0, n.jsx)(C, { fill: e.fill }),
                        fill: e.fill,
                        dataKey: e.key,
                        stackId: "day",
                        name: e.name,
                      },
                      e.key,
                    ),
                  ),
                  (0, n.jsx)(_.s, {}),
                ],
              }),
            }),
          ],
        });
      }
      function y(e) {
        const { appId: t, frameRateData: i } = e,
          [a, c] = (0, l.t7)(t, o.L),
          u = s.useMemo(() => {
            let e = [];
            return (
              i?.frame_rate_clusters.length > 0 &&
                i?.frame_rate_clusters[0]?.daily_frame_rates?.map((t) => {
                  const i = parseInt("" + t.mean_frame_rate),
                    n = parseInt("" + t.mean_frame_rate_stddev);
                  e.push({ date: t.date, mean: i, range: [i + n, i - n] });
                }),
              e
            );
          }, [i]);
        if (!i || !i.frame_rate_clusters?.length)
          return (0, n.jsx)("div", {
            className: r.FrameRateContainer,
            children: (0, n.jsxs)("div", {
              className: r.DescriptionContainer,
              children: [
                (0, n.jsx)("div", {
                  className: r.PerformanceSectionTitle,
                  children: "Average Steam Deck Framerate",
                }),
                (0, n.jsx)("div", { children: "No data available" }),
              ],
            }),
          });
        const f = i.frame_rate_clusters[0],
          _ = Number(f.mean_frame_rate).toFixed(0);
        return (0, n.jsxs)("div", {
          className: r.FrameRateContainer,
          children: [
            (0, n.jsxs)("div", {
              className: r.DescriptionContainer,
              children: [
                (0, n.jsx)("div", {
                  className: r.PerformanceSectionTitle,
                  children: "Average Steam Deck Framerate",
                }),
                (0, n.jsxs)("div", {
                  children: [
                    "The average framerate for ",
                    a?.GetName() ?? "this game",
                    " is ",
                    (0, n.jsxs)("span", {
                      className: r.FrameRateValue,
                      children: [_, " fps"],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: r.DescriptionSection,
                  children: [
                    "This data is based on ",
                    (0, T.D)(Number(f.report_count ?? 0)),
                    " frame rate reports across ",
                    f.report_days,
                    " days",
                  ],
                }),
              ],
            }),
            (0, n.jsx)(d.u, {
              width: "100%",
              minWidth: 600,
              height: 300,
              children: (0, n.jsxs)(g.X, {
                style: { width: "100%", fontSize: "16px", color: "blue" },
                data: u,
                children: [
                  (0, n.jsx)(x.d, { strokeDasharray: "3 3", color: "red" }),
                  (0, n.jsx)(m.W, {
                    dataKey: "date",
                    tickFormatter: w,
                    stroke: "white",
                  }),
                  (0, n.jsx)(p.h, { stroke: "white" }),
                  (0, n.jsx)(h.m, { labelFormatter: w }),
                  (0, n.jsx)(v.N, {
                    type: "natural",
                    dataKey: "mean",
                    name: "average",
                    stroke: "#4477EE",
                  }),
                  (0, n.jsx)(A.G, {
                    type: "monotone",
                    dataKey: "range",
                    fill: "#cccccc",
                    connectNulls: !0,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function w(e) {
        return (0, j._l)(e);
      }
      const C = (e) => {
        const { fill: t, x: i, y: s, width: a, height: r } = e;
        return (0, n.jsx)("rect", { x: i, y: s, width: a, height: r, fill: t });
      };
    },
    55263: (e, t, i) => {
      "use strict";
      i.d(t, {
        G6: () => o,
        Gg: () => u,
        MS: () => h,
        Ow: () => d,
        gF: () => f,
        t7: () => c,
        zX: () => p,
      });
      var n = i(41735),
        s = i.n(n),
        a = i(90626),
        r = i(73745),
        l = i(16021);
      function o(e, t, i, n) {
        const o = (0, a.useRef)(void 0),
          c = (0, a.useRef)(void 0),
          d = (0, r.CH)();
        o.current = e;
        const [u, m] = (0, a.useState)(void 0),
          {
            include_assets: p,
            include_release: h,
            include_platforms: f,
            include_all_purchase_options: _,
            include_screenshots: g,
            include_trailers: x,
            include_ratings: v,
            include_tag_count: A,
            include_reviews: T,
            include_basic_info: j,
            include_supported_languages: S,
            include_full_description: b,
            include_included_items: y,
            include_assets_without_overrides: w,
            apply_user_filters: C,
            include_links: I,
          } = i;
        if (
          ((0, a.useEffect)(() => {
            const i = {
              include_assets: p,
              include_release: h,
              include_platforms: f,
              include_all_purchase_options: _,
              include_screenshots: g,
              include_trailers: x,
              include_ratings: v,
              include_tag_count: A,
              include_reviews: T,
              include_basic_info: j,
              include_supported_languages: S,
              include_full_description: b,
              include_included_items: y,
              include_assets_without_overrides: w,
              apply_user_filters: C,
              include_links: I,
            };
            let a = null;
            return (
              !e ||
                e < 0 ||
                l.A.Get().BHasStoreItem(e, t, i) ||
                (void 0 !== u && n && n == c.current) ||
                (n !== c.current && (m(void 0), (c.current = n)),
                (a = s().CancelToken.source()),
                l.A.Get()
                  .QueueStoreItemRequest(e, t, i)
                  .then((t) => {
                    a?.token.reason || o.current !== e || m(1 == t), d();
                  })),
              () => a?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, n, u, p, h, f, _, g, x, v, A, T, j, S, b, y, w, C, I, d]),
          !e)
        )
          return [null, 2];
        if (!1 === u) return [void 0, 2];
        if (l.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!l.A.Get().BHasStoreItem(e, t, i)) return [void 0, 1];
        const k = l.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return k ? [k, 3] : [null, 2];
      }
      function c(e, t, i) {
        return o(e, 0, t, i);
      }
      function d(e, t, i) {
        return o(e, 2, t, i);
      }
      function u(e, t, i) {
        return o(e, 1, t, i);
      }
      function m(e, t, i, n) {
        const o = (0, r.CH)(),
          {
            include_assets: c,
            include_release: d,
            include_platforms: u,
            include_all_purchase_options: m,
            include_screenshots: p,
            include_trailers: h,
            include_ratings: f,
            include_tag_count: _,
            include_reviews: g,
            include_basic_info: x,
            include_supported_languages: v,
            include_full_description: A,
            include_included_items: T,
            include_assets_without_overrides: j,
            apply_user_filters: S,
            include_links: b,
          } = i;
        if (
          ((0, a.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const i = {
                include_assets: c,
                include_release: d,
                include_platforms: u,
                include_all_purchase_options: m,
                include_screenshots: p,
                include_trailers: h,
                include_ratings: f,
                include_tag_count: _,
                include_reviews: g,
                include_basic_info: x,
                include_supported_languages: v,
                include_full_description: A,
                include_included_items: T,
                include_assets_without_overrides: j,
                apply_user_filters: S,
                include_links: b,
              },
              n = e.filter(
                (e) =>
                  !(
                    l.A.Get().BHasStoreItem(e, t, i) ||
                    l.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == n.length) return;
            const a = s().CancelToken.source(),
              r = n.map((e) => l.A.Get().QueueStoreItemRequest(e, t, i));
            return (
              Promise.all(r).then(() => {
                a.token.reason || o();
              }),
              () => a.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, n, o, c, d, u, m, p, h, f, _, g, x, v, A, T, j, S, b]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              l.A.Get().BHasStoreItem(e, t, i) ||
              l.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          l.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function p(e, t, i) {
        return m(e, 0, t, i);
      }
      function h(e, t, i) {
        return m(e, 2, t, i);
      }
      function f(e, t, i) {
        return m(e, 1, t, i);
      }
    },
    99637: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => A });
      var n = i(7850),
        s = i(90626),
        a = i(92298),
        r = i.n(a),
        l = i(44894),
        o = i(44165),
        c = i(95695),
        d = i.n(c),
        u = i(52038),
        m = i(61859),
        p = i(32754),
        h = i(12916),
        f = i.n(h),
        _ = i(87937),
        g = i.n(_);
      const x = "hh:mm a",
        v = "HH:mm";
      function A(e) {
        const {
          nLatestTime: t,
          nEarliestTime: i,
          fnGetTimeToUpdate: a,
          onError: c,
          strAlsoShowTimeZone: h,
          disabled: _,
          bNoDefaultDate: A,
          className: b,
          strDescToolTip: y,
          strDescription: w,
          bShowTimeZone: C,
          strInvalidDateTimeLocalizedMsg: I,
          fnIsValidDateTime: k,
          bWeekdaysOnly: D,
          fnSetTimeToUpdate: N,
          bForce24HourFormat: G,
        } = e;
        let F =
          (function () {
            const e = g()("2025-01-14T13:00:00");
            return e.format("LT").toLowerCase().includes("13");
          })() || G
            ? v
            : x;
        const B = a(),
          [E, L] = s.useState(B > 0 ? g()(1e3 * B) : null),
          [M, R] = s.useState(),
          [P, z] = s.useState(),
          O = (function (e, t, i, n, a) {
            const r = n && n(),
              l = t && !j(t).isValid(),
              o = e && !S(e).isValid();
            let c = null;
            (o || l || "string" == typeof r || !1 === r) &&
              ((c = (0, m.we)(
                i || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              o
                ? (c = (0, m.we)("#DateTimePicker_Time_CannotParse"))
                : l
                  ? (c = (0, m.we)("#DateTimePicker_Date_CannotParse"))
                  : "string" == typeof r && (c = r));
            return (
              s.useEffect(() => {
                a && a(c);
              }, [c, a]),
              c
            );
          })(M, P, I, k, c),
          V = !c && O;
        let W, Y;
        if (t && i && t == i && i > o.HD.GetTimeNowWithOverride()) {
          const e = g().unix(i);
          (W = {
            hours: { max: e.hour(), min: e.hour(), step: 0 },
            minutes: { max: e.minute(), min: e.minute(), step: 0 },
            seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
            milliseconds: { max: 0, min: 0, step: 0 },
          }),
            (F = v);
        }
        B || !i || A || (Y = g().unix(i));
        const U = g().tz.guess(),
          H = g().unix(B).tz(U),
          Z = !!h && U != h && g().unix(B).tz(h),
          {
            fnOnInput: q,
            fnOnInputBlur: Q,
            fnOnChange: K,
          } = T(
            j,
            (e) => {
              if (_) return;
              z(null);
              const t = a(),
                i = g().unix(t || o.HD.GetTimeNowWithOverride());
              (e = e.clone()).hour(i.hour()),
                e.minute(i.minute()),
                e.second(0),
                N(e.unix()),
                L(e);
            },
            z,
          ),
          {
            fnOnInput: J,
            fnOnInputBlur: X,
            fnOnChange: $,
          } = T(
            S,
            (e) => {
              if (_) return;
              R(null);
              let t = a(),
                n = 0;
              if (t) {
                const i = g().unix(t);
                (e = e.clone()).year(i.year()),
                  e.month(i.month()),
                  e.date(i.date()),
                  (n = e.unix());
              } else {
                n =
                  g().unix(i).hour(0).second(0).minutes(0).unix() +
                  3600 * e.hour() +
                  60 * e.minutes();
              }
              N(n), L(g().unix(n));
            },
            R,
          );
        return (0, n.jsxs)("div", {
          className: (0, u.A)(f().EventTimeSection, b),
          children: [
            (0, n.jsxs)("div", {
              className: (0, u.A)(f().EventTimeTitle, "DialogLabel"),
              children: [
                (0, n.jsx)(p.he, {
                  toolTipContent: y,
                  direction: "top",
                  children: Boolean(w) && (0, n.jsx)("span", { children: w }),
                }),
                V &&
                  (0, n.jsxs)("span", {
                    className: f().DateErrorCtn,
                    children: [(0, n.jsx)("img", { src: l.A }), V],
                  }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: d().FlexRowContainer,
              children: [
                (0, n.jsxs)("div", {
                  className: (0, u.A)(d().InputBorder, f().TimeBlock),
                  children: [
                    (0, n.jsx)(r(), {
                      onChange: K,
                      timeFormat: !1,
                      value: null != P ? P : E,
                      isValidDate: (e) =>
                        !_ &&
                        (function (e, t, i, n) {
                          const s = g().unix(e).hour(0).seconds(0).minute(0);
                          let a = n.unix() >= s.unix();
                          if (a && t && t >= e) {
                            const e = g()
                              .unix(t)
                              .hour(23)
                              .minute(59)
                              .seconds(59);
                            a = n.unix() <= e.unix();
                          }
                          a &&
                            i &&
                            ((0 != n.weekday() && 6 != n.weekday()) ||
                              (a = !1));
                          return a;
                        })(i, t, D, e),
                      initialValue: Y,
                      inputProps: {
                        placeholder: (0, m.we)("#DateTimePicker_Enter_Date"),
                        className: (0, u.A)(
                          f().DateWidth,
                          "DialogInput",
                          "DialogTextInputBase",
                        ),
                        disabled: _,
                        onChange: (e) => q(e.currentTarget.value),
                        onBlur: (e) => Q(e.currentTarget.value),
                      },
                    }),
                    !!Z &&
                      (0, n.jsx)("div", {
                        className: f().PacificTimeHint,
                        children: Z.format("L"),
                      }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: (0, u.A)(d().InputBorder, f().TimeBlock),
                  children: [
                    (0, n.jsx)(r(), {
                      onChange: $,
                      dateFormat: !1,
                      timeFormat: F,
                      timeConstraints: W,
                      value: null != M ? M : E,
                      inputProps: {
                        placeholder: (0, m.we)("#DateTimePicker_Enter_Time"),
                        className: (0, u.A)(
                          f().TimeWidth,
                          "DialogInput",
                          "DialogTextInputBase",
                        ),
                        disabled: _,
                        onChange: (e) => J(e.currentTarget.value),
                        onBlur: (e) => X(e.currentTarget.value),
                      },
                    }),
                    !!Z &&
                      (0, n.jsx)("div", {
                        className: f().PacificTimeHint,
                        children: Z.format("LT"),
                      }),
                  ],
                }),
                C &&
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("div", {
                        className: f().TimeZone,
                        children: H.zoneAbbr(),
                      }),
                      !!Z &&
                        (0, n.jsx)("div", {
                          className: f().TimeZone,
                          children: Z.zoneAbbr(),
                        }),
                    ],
                  }),
              ],
            }),
            Boolean(W) &&
              (0, n.jsx)("div", {
                children: (0, m.we)("#DateTimePicker_DateTime_Fixed"),
              }),
          ],
        });
      }
      function T(e, t, i) {
        const [n, a] = s.useState(!1);
        return {
          fnOnInput: (e) => {
            i(e), a(!0);
          },
          fnOnInputBlur: (i) => {
            if (n) {
              const n = e(i);
              n.isValid() && t(n);
            }
            a(!1);
          },
          fnOnChange: (i) => {
            if (!n)
              if ("string" == typeof i) {
                const n = e(i);
                n.isValid() && t(n);
              } else t(i);
          },
        };
      }
      function j(e) {
        return g()(
          e,
          (function () {
            const e = g()("2025-01-14").format("L").split(/[-/.]/),
              t = e.indexOf("14");
            return e.indexOf("01") < t;
          })()
            ? "M/D/YYYY"
            : "D/M/YYYY",
          !1,
        );
      }
      function S(e) {
        return g()(e, [x, v], !1);
      }
    },
    48479: (e, t, i) => {
      "use strict";
      i.d(t, { AQ: () => h, pn: () => _, qx: () => f });
      var n = i(7850),
        s = i(16676),
        a = i(61859),
        r = i(12155),
        l = i(90626),
        o = i(52038),
        c = i(95695),
        d = i(84811),
        u = i(64734),
        m = i(65946),
        p = i(26408);
      function h(e) {
        const {
            title: t,
            tooltip: i,
            getMinimized: s,
            toggleMinimized: a,
            className: r,
            children: l,
            elAdditionalButtons: h,
          } = e,
          f = (0, m.q3)(() => s());
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: (0, o.A)(
                r,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, n.jsxs)("div", {
                  className: (0, o.A)(
                    c.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(i) && (0, n.jsx)(p.o, { tooltip: i })],
                }),
                (0, n.jsxs)("div", {
                  className: u.SectionTitleButtons,
                  children: [
                    h,
                    (0, n.jsx)(_, { bIsMinimized: f, fnToggleMinimize: a }),
                  ],
                }),
              ],
            }),
            !f && (0, n.jsx)(d.tH, { children: l }),
          ],
        });
      }
      function f(e) {
        const [t, i] = l.useState(Boolean(e.bStartMinimized));
        return (0, n.jsx)(h, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => i(!t),
          children: e.children,
        });
      }
      function _(e) {
        const { bIsMinimized: t, fnToggleMinimize: i } = e,
          l = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, n.jsx)(s.$n, {
          "data-tooltip-text": (0, a.we)(l),
          onClick: i,
          children: e.bIsMinimized
            ? (0, n.jsx)(r.hz4, {})
            : (0, n.jsx)(r.Xjb, {}),
        });
      }
    },
    44894: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
