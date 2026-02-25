/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5027],
  {
    97712: (e) => {
      e.exports = {
        SDRConnectionsAppCtn: "_3Vqm_VeN4ssp-Plt0sq9f-",
        SDRConnectionsAppTitle: "_1VJcGIkGXCYh0gu5XTfN8F",
        SearchParamsCtr: "_1iOSDTa4VQiMZClYcvyBqJ",
        ConnectionKindGroup: "_2nfRCSDfwq2_xoi3dB77TJ",
        AppFieldPair: "JhdeVCLD5Nn-qer67zICK",
        SubmitButtonCtn: "_1m5EkOjBrsq1TFE-Qr82zi",
        ErrorMsg: "_15kPlJ6rH5w4pXTrO43FBC",
        SearchResultsCtr: "xl0L8ayTr8Vlmddp5nsh_",
        SearchResultsTitle: "_2zXcRle-2BH9RfK4FpK91K",
        ConnectionCtr: "_33Z20EyKgVCf_gw2o-dJuM",
        ConnectionHeader: "_2Ckxnlhp2zC2AmsUxs9hA4",
        CxnSummary: "ZLIDfPw1nsKeKLQOzyQE2",
        GenericLabeledItem: "_3owUM5gBDF_RV2qXJQkvk1",
        CxnPeersCtr: "_2TCo_v6vmEUfdrfY3CtWUY",
        ConnectionClientInfo: "_29nFZnfU1pSV_mKnl52iO0",
        host_id: "_2gxSU_PX9i6fvFKON5GOU3",
        GameServerDataCenter: "gwTmZ9cblfSJQBeTcVIru",
        HostIsGameserver: "_15b6hVfpkp4nmpIuuvLB0-",
        HostIDInfo: "vm4PN6HoaCpN0n0Lf8aEI",
        CxnGenericData: "ftpouOEdAxieFE50x58Ch",
        ExpandDetailsCheckbox: "Pf2peEv8e7v8NNd8Ox_O9",
        SessionsGroupHeader: "_2PkRiRECyXwIWMFEHjLMZN",
        QualityFlowPairCtr: "_2mXRDHNOp7hGPyN9lhRXBL",
        QualityFlowPairTitle: "_2_XypEUOV9pIm-K7QPo37N",
        FlowQualityStats: "_2CrTqNU0Ug9ThuaEAR2o-0",
        RelaySessionCtr: "_3Ny56nIakjtPWa2rTo_ECO",
        CxnCloseInfo: "_19mRGkz4pJX0woMGbfouEw",
        AppFieldsCtr: "_2T7Ca6X3HgAneoHL9JkiEs",
        AppFieldsTitle: "_3R8n1GZ3T0u2DTjcj7_1N6",
        FlowSectionTitle: "a0Wxor6TYEbMVH7dLhXwO",
        FlowQualityTitle: "_12x87YD7BQ6cDje5hLvbPv",
        NumPkts: "_3gym37cGwcIsZIB8agk3XK",
        KB: "_3i190Q1NF3QOOxp6WbDzRs",
        Pct: "_1fRCeZ2Vze8SX02_f_AK9d",
        FlowPacketCounts: "_2EYOyHKrd9qJ5LIRS6u6T3",
        Spacer: "_29tRzyxxRK94Vgoj1UYbw",
        CxnGenericDataLabel: "_1NnpcKcQDkW2SVMohIW_9R",
        Histogram: "_3SrHBXySCqPbEk7w5T6loT",
        Bar: "_32eimNgIwt059yIMsrVWMf",
        Distribution: "_3guObDjcedjI4d8GUIsFPK",
        NTile: "vT8kyilnaIPZYPGPJCiO8",
        PingBreakdown: "_2jSWoWwbKYvirg5AnaXkGy",
        PingSection: "RIiaSPbcGDEbBV9OkUtmG",
        JitterSection: "_5OEqow5h9FrG38R53xBoS",
        QualityBreakdown: "_1RMOO_UtP0Xm5MO4xO8UHP",
        ClientIPInfo: "_1IW5oJMNg9Ki_RFXk2SgqJ",
      };
    },
    26193: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => T });
      var r = t(7850),
        n = t(41735),
        a = t.n(n),
        i = t(90626),
        l = t(52038),
        c = t(92757),
        o = t(16676),
        d = t(84811),
        u = t(61859),
        h = t(68797),
        m = t(78327),
        p = t(97712),
        x = t(22797),
        _ = t(91675),
        j = t(3049);
      function f(e) {
        return (0, r.jsxs)("span", {
          className: (0, l.A)(p.GenericLabeledItem, e.className),
          children: [
            (0, r.jsx)("span", {
              className: p.CxnGenericDataLabel,
              children: e.label,
            }),
            (0, r.jsx)("span", {
              className: p.CxnGenericData,
              children: e.children,
            }),
          ],
        });
      }
      function g(e) {
        const s = e.host,
          t = s.type + ":" + s.id;
        let n = "peer" == e.host_role ? "Peer" : "Client",
          a = null;
        if (s.data_center)
          (n = "Gameserver"),
            (a = (0, r.jsxs)(i.Fragment, {
              children: [
                (0, r.jsx)("span", { className: p.host_id, children: t }),
                " in ",
                (0, r.jsx)("span", {
                  className: p.GameServerDataCenter,
                  children: s.data_center,
                }),
              ],
            }));
        else if (s.steam_persona) {
          const e = m.TS.COMMUNITY_BASE_URL + "/profiles/" + s.id;
          a = (0, r.jsxs)(i.Fragment, {
            children: [
              (0, r.jsx)("span", {
                className: p.host_id,
                children: (0, r.jsx)("a", {
                  href: e,
                  children: s.steam_persona,
                }),
              }),
              " (",
              (0, r.jsx)("span", { className: p.host_id, children: t }),
              ")",
            ],
          });
        } else
          a = (0, r.jsx)(i.Fragment, {
            children: (0, r.jsx)("span", { className: p.host_id, children: t }),
          });
        return (0, r.jsxs)("div", {
          className: (0, l.A)(
            p.ConnectionClientInfo,
            s.data_center && p.HostIsGameserver,
          ),
          children: [
            (0, r.jsxs)("div", {
              className: p.HostIDAndConnectionCtr,
              children: [
                (0, r.jsx)(f, {
                  className: p.HostIDInfo,
                  label: n,
                  children: a,
                }),
                null != s.connection_id &&
                  (0, r.jsx)(f, {
                    className: p.HostConnectionID,
                    label: "ConnectionID",
                    children: s.connection_id,
                  }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: p.ClientIPInfo,
              children: [
                s.addr &&
                  (0, r.jsx)(f, {
                    className: "addr",
                    label: "IP",
                    children: s.addr,
                  }),
                s.city_name &&
                  (0, r.jsx)(f, {
                    className: "city_name",
                    label: "City",
                    children: s.city_name,
                  }),
                s.country_code &&
                  (0, r.jsx)(f, {
                    className: "country_code",
                    label: "Country",
                    children: s.country_code,
                  }),
                s.as &&
                  (0, r.jsx)(f, {
                    className: "as",
                    label: "AS",
                    children: s.as,
                  }),
              ],
            }),
          ],
        });
      }
      function C(e, s) {
        return (
          null == s && (s = 0),
          e.toLocaleString((0, j.J)(), {
            minimumFractionDigits: s,
            maximumFractionDigits: s,
          })
        );
      }
      function v(e) {
        let s = 1e30,
          t = -1e30;
        if (e && e.ping_pctile)
          for (const r in e.ping_pctile) {
            const n = parseFloat(r);
            if (n >= 5 && n <= 95) {
              const n = e.ping_pctile[r];
              n < s && (s = n), n > t && (t = n);
            }
          }
        return [s, t];
      }
      function N(e) {
        let s = 1e30;
        if (e && e.quality_pctile)
          for (const t in e.quality_pctile) {
            const r = parseFloat(t);
            if (r >= 5 && r <= 95) {
              const r = e.quality_pctile[t];
              r < s && (s = r);
            }
          }
        return s;
      }
      function y(e, s, t) {
        const n = t > 0 ? s / t : 0,
          a = (100 * n).toFixed(1) + "%";
        return (0, r.jsxs)(
          "tr",
          {
            children: [
              (0, r.jsx)("th", { className: p.Label, children: e }),
              (0, r.jsx)("td", { className: p.Pct, children: a }),
              (0, r.jsxs)("td", {
                children: [
                  (0, r.jsx)("span", {
                    className: p.Bar,
                    style: { width: 90 * n + 1 + "px" },
                  }),
                  (0, r.jsx)("span", { className: p.Num, children: C(s) }),
                ],
              }),
            ],
          },
          e,
        );
      }
      function S(e, s) {
        if (!(s > 0)) return null;
        let t = [];
        for (let r = 0; r < e.length; ++r) t.push(y(e[r][0], e[r][1], s));
        return (0, r.jsx)("table", {
          className: p.Histogram,
          children: (0, r.jsx)("tbody", { children: t }),
        });
      }
      function b(e) {
        let s = [];
        for (let t = 0; t < e.length; ++t) {
          const [n, a] = e[t];
          null != a &&
            s.push(
              (0, r.jsxs)(
                "tr",
                {
                  children: [
                    (0, r.jsxs)("th", {
                      className: p.NTile,
                      children: [n, "% <="],
                    }),
                    (0, r.jsx)("td", { className: p.Value, children: a }),
                  ],
                },
                n,
              ),
            );
        }
        return s.length
          ? (0, r.jsx)("table", {
              className: p.Distribution,
              children: (0, r.jsx)("tbody", { children: s }),
            })
          : null;
      }
      function w(e) {
        return e >= 0 ? e.toFixed(0) + "ms" : "???";
      }
      function F(e) {
        const s = function (e) {
            const s = e >= 0 ? C(e) : "?";
            return (0, r.jsx)("td", {
              className: p.NumPkts,
              children: s + " pkts",
            });
          },
          t = function (e) {
            const s = e >= 0 ? C(e) : "?";
            return (0, r.jsx)("td", { className: p.KB, children: s + "kb" });
          },
          n = function (e, s) {
            let t = "";
            return (
              s > 0 && e >= 0 && (t = ((e / s) * 100).toFixed(3) + "%"),
              (0, r.jsx)("td", { className: p.Pct, children: t })
            );
          };
        return (0, r.jsxs)("div", {
          className: (0, l.A)(p.FlowPacketCounts, p.FlowStatsSection),
          children: [
            (0, r.jsx)("div", {
              className: p.FlowSectionTitle,
              children: "Summary counters",
            }),
            (0, r.jsx)("table", {
              children: (0, r.jsxs)("tbody", {
                children: [
                  (0, r.jsxs)("tr", {
                    children: [
                      (0, r.jsx)("th", { children: "Sent" }),
                      s(e.sent_pkt),
                      t(e.sent_kb),
                      (0, r.jsx)("td", { className: p.Spacer }),
                      (0, r.jsx)("th", { children: "Dropped" }),
                      s(e.drop),
                      n(e.drop, e.recv_seq),
                    ],
                  }),
                  (0, r.jsxs)("tr", {
                    children: [
                      (0, r.jsx)("th", { children: "Recv" }),
                      s(e.recv_pkt),
                      t(e.recv_kb),
                      (0, r.jsx)("td", { className: p.Spacer }),
                      (0, r.jsx)("th", { children: "Duplicate" }),
                      s(e.dup),
                      n(e.dup, e.recv_seq),
                    ],
                  }),
                  (0, r.jsxs)("tr", {
                    children: [
                      (0, r.jsx)("th", { children: "Recv w/ seq" }),
                      s(e.recv_seq),
                      (0, r.jsx)("td", {}),
                      (0, r.jsx)("td", { className: p.Spacer }),
                      (0, r.jsx)("th", { children: "Out of order" }),
                      s(e.ooo),
                      n(e.ooo, e.recv_seq),
                    ],
                  }),
                  (0, r.jsxs)("tr", {
                    children: [
                      (0, r.jsx)("th", { children: "Summary" }),
                      (0, r.jsx)("td", {
                        colSpan: 2,
                        className: p.FlowQualityClass,
                        children: (0, r.jsx)("span", {
                          className: "flowqualityclass_" + e.quality_class,
                          children: e.quality_class,
                        }),
                      }),
                      (0, r.jsx)("td", { className: p.Spacer }),
                      (0, r.jsx)("th", { children: "Seq num lurch" }),
                      s(e.seqlurch),
                      n(e.seqlurch, e.recv_seq),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function P(e) {
        let s = null,
          t = null,
          n = 0;
        const a = e.quality_hist;
        if (a) {
          const e = [
            ["Perfect", a[100] || 0],
            [">99%", a[99] || 0],
            ["97-99%", a[97] || 0],
            ["95-97%", a[95] || 0],
            ["90-95%", a[90] || 0],
            ["75-90%", a[75] || 0],
            ["50-75%", a[50] || 0],
            ["<50%", a[1] || 0],
            ["Dead", a[0] || 0],
          ];
          for (let s = 0; s < e.length; ++s) n += e[s][1];
          s = S(e, n);
        }
        if (n <= 0) return null;
        const i = e.quality_pctile;
        if (i) {
          const e = (e) => (null == e ? void 0 : e + "%");
          t = b([
            [50, e(i[50])],
            [25, e(i[25])],
            [5, e(i[5])],
            [2, e(i[2])],
          ]);
        }
        const l = C(n) + " measurement intervals";
        return (0, r.jsxs)("div", {
          className: p.QualityBreakdown,
          children: [
            (0, r.jsx)("div", {
              className: p.FlowSectionTitle,
              children: "Quality interval breakdown",
            }),
            (0, r.jsx)("div", { className: p.numSamples, children: l }),
            s,
            t,
          ],
        });
      }
      function k(e) {
        let s = null;
        const t = e.ping_hist;
        let n = 0;
        if (t) {
          const e = [
            [0, t[25] || 0],
            [25, t[50] || 0],
            [50, t[75] || 0],
            [75, t[100] || 0],
            [100, t[125] || 0],
            [125, t[150] || 0],
            [150, t[200] || 0],
            [200, t[300] || 0],
            [300, t.max || 0],
          ];
          let a,
            i = 0;
          for (let s = 0; s < e.length; ++s)
            e[s][1] > 0 && (null == a && (a = s), (i = s + 1), (n += e[s][1]));
          if (n > 0) {
            (a = Math.max(0, a - 2)), (i = Math.min(e.length, i + 2));
            let t = [];
            for (let s = a; s < i; ++s) {
              let r,
                [l, c] = e[s];
              s == a && 0 == c && (l = 0),
                (r =
                  s + 1 >= e.length || (s + 1 >= i && 0 == c)
                    ? w(l) + "+"
                    : l + "-" + w(e[s + 1][0])),
                t.push(y(r, c, n));
            }
            s = (0, r.jsx)("table", {
              className: p.Histogram,
              children: (0, r.jsx)("tbody", { children: t }),
            });
          }
        }
        let a = null;
        const i = e.ping_pctile;
        if (i) {
          const e = (e) => (null == e ? void 0 : w(e));
          a = b([
            [5, e(i[5])],
            [50, e(i[50])],
            [75, e(i[75])],
            [95, e(i[95])],
            [98, e(i[98])],
          ]);
        }
        let l = null,
          c = 0;
        const o = e.jitter_hist;
        if (o) {
          const e = [
            ["<1ms", o[0] || 0],
            ["1-2ms", o[1] || 0],
            ["2-5ms", o[2] || 0],
            ["5-10ms", o[5] || 0],
            ["10-20ms", o[10] || 0],
            ["20ms+", o[20] || 0],
          ];
          for (let s = 0; s < e.length; ++s) c += e[s][1];
          l = S(e, c);
        }
        if (!s && !a && !l) return null;
        const d = C(n) + " samples",
          u = C(c) + " samples";
        return (0, r.jsxs)("div", {
          className: p.PingBreakdown,
          children: [
            (0, r.jsxs)("div", {
              className: p.PingSection,
              children: [
                (0, r.jsx)("div", {
                  className: p.FlowSectionTitle,
                  children: "Round Trip Latency",
                }),
                (0, r.jsx)("div", { className: p.NumSamples, children: d }),
                s,
                a,
              ],
            }),
            (0, r.jsxs)("div", {
              className: p.JitterSection,
              children: [
                (0, r.jsx)("div", {
                  className: p.FlowSectionTitle,
                  children: "Jitter",
                }),
                (0, r.jsx)("div", { className: p.NumSamples, children: u }),
                l,
              ],
            }),
          ],
        });
      }
      function E(e) {
        const s = e.flow;
        return (0, r.jsxs)("div", {
          className: p.FlowQualityStats,
          children: [
            (0, r.jsx)("div", {
              className: p.FlowQualityTitle,
              children: e.title,
            }),
            s
              ? (0, r.jsxs)(i.Fragment, { children: [F(s), P(s), k(s)] })
              : (0, r.jsx)("div", {
                  className: p.NoFlowDataAvailable,
                  children: "(No data available)",
                }),
          ],
        });
      }
      function R(e) {
        const s = e.sess,
          t = e.cxn;
        let n = null,
          a = null;
        if (s.client_front || s.router_front) {
          const e =
            "ded" == t.kind
              ? "Front side statistics reported by client"
              : "Front side statistics reported by player";
          n = (0, r.jsxs)("div", {
            className: p.QualityFlowPairCtr,
            children: [
              (0, r.jsx)(E, { title: e, flow: s.client_front }),
              (0, r.jsx)(E, {
                title: "Front side statistics reported by relay",
                flow: s.router_front,
              }),
            ],
          });
        }
        return (
          (s.router_back || s.gameserver_back) &&
            (a = (0, r.jsxs)("div", {
              className: p.QualityFlowPairCtr,
              children: [
                (0, r.jsx)(E, {
                  title: "Back side statistics reported by relay",
                  flow: s.router_back,
                }),
                (0, r.jsx)(E, {
                  title: "Back side statistics reported by gameserver",
                  flow: s.gameserver_back,
                }),
              ],
            })),
          (0, r.jsxs)("div", {
            className: p.RelaySessionCtr,
            children: [
              (0, r.jsxs)("div", {
                className: p.RelayInfoCtr,
                children: [
                  (0, r.jsx)(f, {
                    label: "Relay address",
                    children: s.client.relay_addr,
                  }),
                  (0, r.jsx)(f, {
                    label: "Relay POP",
                    children: s.client.relay_cluster,
                  }),
                  (0, r.jsx)(f, {
                    label: "Active",
                    children: (0, _.R2)(s.active_time),
                  }),
                ],
              }),
              n,
              a,
            ],
          })
        );
      }
      function I(e) {
        const s = e.cxn,
          t = s.client,
          n = s.peer,
          a = s.client_e2e,
          l = s.peer_e2e,
          [c, d] = i.useState(!1),
          h = (function (e) {
            if (!e || !e.length) return null;
            let s = e[0];
            for (let t = 1; t < e.length; ++t) {
              const r = e[t];
              (r.primary > s.primary ||
                (r.primary == s.primary && r.active_time > s.active_time)) &&
                (s = r);
            }
            return s;
          })(s.client_sessions);
        let m = null,
          x = null,
          j = null,
          C = null,
          y = null,
          S = null,
          b = null,
          w = [];
        if (h) {
          n &&
            h.client.connection_id == n.connection_id &&
            (!t || (h.client.connection_id, t.connection_id));
          if (h.start_time && h.duration) {
            const e = new Date(1e3 * h.start_time),
              s = new Date(1e3 * (h.start_time + h.duration)),
              t = u.pf.GetPreferredLocales(),
              n = e.toLocaleString(t, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              a = e.toLocaleString(t, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              i = s.toLocaleString(t, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              }),
              l = (0, _.R2)(h.duration);
            m = (0, r.jsxs)("span", {
              className: p.CxnTimeAndDuration,
              children: [
                (0, r.jsxs)(f, {
                  label: "Time",
                  children: [n, " ", a, "--", i],
                }),
                (0, r.jsx)(f, { label: "Duration", children: l }),
              ],
            });
          }
          if (
            (h.close_code &&
              (x = (0, r.jsxs)(f, {
                label: "Closed",
                className: p.CxnCloseInfo,
                children: [
                  h.close_type,
                  " ",
                  h.close_msg,
                  " (",
                  h.close_code,
                  ")",
                ],
              })),
            h.experience_class)
          ) {
            const e = h.class_reason ? ` (${h.class_reason})` : "";
            j = (0, r.jsxs)(f, {
              label: "Experience",
              children: [
                (0, r.jsx)("span", {
                  className: "experience_" + h.experience_class,
                  children: h.experience_class,
                }),
                e,
              ],
            });
          }
        }
        if (s.app) {
          let e = Object.keys(s.app);
          if (e.length > 0) {
            e.sort();
            let t = [];
            for (let n of e)
              t.push((0, r.jsx)(f, { label: n, children: s.app[n] }));
            C = (0, r.jsxs)("div", {
              className: p.AppFieldsCtr,
              children: [
                (0, r.jsx)("span", {
                  className: p.AppFieldsTitle,
                  children: "Application fields:",
                }),
                t,
              ],
            });
          }
        }
        if (a || l) {
          const [e, t] = v(a),
            [n, i] = v(l),
            o = Math.min(e, n),
            d = Math.max(t, i);
          if (o <= d) {
            const e =
              0.03 * o + 2 < d
                ? `${o}--${d}ms`
                : Math.floor((o + d) / 2 + 0.5) + "ms";
            y = (0, r.jsx)(f, { label: "Ping", children: e });
          }
          const u = N(a),
            h = N(l),
            m = Math.min(u, h);
          if (
            (m >= 0 &&
              m <= 100 &&
              (S = (0, r.jsx)(f, {
                label: "Packet delivery",
                children: `${m.toFixed(2)}%`,
              })),
            c)
          ) {
            const e = "End-to-end statistics reported by client",
              t =
                "ded" == s.kind
                  ? "End-to-end statistics reported by gameserver"
                  : "End-to-end statistics reported by peer";
            b = (0, r.jsxs)("div", {
              className: p.QualityFlowPairCtr,
              children: [
                (0, r.jsx)(E, { title: e, flow: a }),
                (0, r.jsx)(E, { title: t, flow: l }),
              ],
            });
          }
        }
        if (c) {
          const e = function (e) {
              let s = [...e];
              return (
                s.sort((e, s) => (s.active_time || 0) - (e.active_time || 0)), s
              );
            },
            t = s.client_sessions && s.client_sessions.length > 0,
            n = s.peer_sessions && s.peer_sessions.length > 0;
          if (t) {
            "p2p" == s.kind || n
              ? w.push(
                  (0, r.jsx)("div", {
                    className: p.SessionsGroupHeader,
                    children: "Client relay sessions",
                  }),
                )
              : w.push(
                  (0, r.jsx)("div", {
                    className: p.SessionsGroupHeader,
                    children: "Relay sessions",
                  }),
                );
            for (const t of e(s.client_sessions))
              w.push((0, r.jsx)(R, { cxn: s, sess: t, host_role: "client" }));
          }
          if (n) {
            w.push(
              (0, r.jsx)("div", {
                className: p.SessionsGroupHeader,
                children: "Peer relay sessions",
              }),
            );
            for (const t of e(s.peer_sessions))
              w.push((0, r.jsx)(R, { cxn: s, sess: t, host_role: "peer" }));
          }
        }
        return (0, r.jsxs)(
          "div",
          {
            className: p.ConnectionCtr,
            children: [
              (0, r.jsxs)("div", {
                className: p.ConnectionHeader,
                children: [
                  (0, r.jsxs)("div", {
                    className: p.CxnSummary,
                    children: [m, y, S, j, C, x],
                  }),
                  (0, r.jsx)(o.Yh, {
                    className: p.ExpandDetailsCheckbox,
                    label: "Details",
                    checked: c,
                    onChange: d,
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: p.CxnPeersCtr,
                children: [
                  (0, r.jsx)(g, { host: s.client, host_role: "client" }),
                  (0, r.jsx)(g, { host: s.peer, host_role: "peer" }),
                ],
              }),
              b,
              w,
            ],
          },
          e.key,
        );
      }
      function T(e) {
        const s = (0, c.W6)(),
          t = e.appId,
          [n, u] = i.useState(!1),
          [_, j] = i.useState(""),
          [f, g] = i.useState(void 0),
          [C, v] = i.useState(""),
          [N, y] = i.useState(""),
          [S, b] = i.useState(""),
          [w, F] = i.useState(0),
          [P, k] = i.useState(""),
          [E, R] = i.useState("");
        i.useEffect(() => {
          let e = new URLSearchParams(s.location.search);
          const r = e.get("client_id") || "",
            n = e.get("peer_id") || "",
            i = e.get("kind") || "",
            l = e.get("app_name1") || "",
            c = e.get("app_value1") || "";
          if ((v(r), y(n), b(i), k(l), R(c), !e.toString() && 0 == w)) return;
          u(!0), j(""), t > 0 && e.set("appid", "" + t);
          const o =
            m.TS.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + e.toString();
          (async () => {
            try {
              const e = await a().get(o);
              1 == e?.data?.success
                ? g(e.data.connections)
                : (console.error(
                    "sdrsessionsearch: OnPerformSearch error code  " +
                      e?.data?.success +
                      " msg: " +
                      e?.data?.msg,
                  ),
                  j(e?.data?.success + " msg: " + e?.data?.msg));
            } catch (e) {
              const s = (0, h.H)(e);
              console.error(
                "sdrsessionsearch: OnPerformSearch " + s.strErrorMsg,
                s,
              ),
                j(s.strErrorMsg);
            }
            u(!1);
          })();
        }, [t, s.location, w]);
        let T = null;
        if (void 0 !== f) {
          let e = [];
          for (const s of f) {
            const t =
              (s.client.id || "") + "-" + (s.client.connection_id || "");
            e.push((0, r.jsx)(I, { cxn: s }, t));
          }
          T = (0, r.jsxs)("div", {
            className: p.SearchResultsCtr,
            children: [
              (0, r.jsxs)("div", {
                className: p.SearchResultsTitle,
                children: ["Found ", f.length, " connection(s)"],
              }),
              e,
            ],
          });
        }
        const D = "ded" == S ? "Gameserver" : "Peer",
          M = !1,
          A = i.useId();
        return (0, r.jsx)(d.tH, {
          children: (0, r.jsxs)("div", {
            className: p.SDRConnectionsAppCtn,
            children: [
              (0, r.jsxs)("div", {
                className: p.SDRConnectionsAppTitle,
                children: [
                  (0, r.jsx)(r.Fragment, { children: "SDR Connections - " }),
                  e.appId > 0
                    ? (0, r.jsxs)(r.Fragment, { children: ["App ", e.appId] })
                    : (0, r.jsx)(r.Fragment, { children: "All apps" }),
                  (0, r.jsx)(r.Fragment, { children: " [BETA feature]" }),
                ],
              }),
              _ && (0, r.jsx)("div", { className: p.ErrMsg, children: _ }),
              (0, r.jsxs)("div", {
                className: p.SearchParamsCtr,
                children: [
                  (0, r.jsxs)("div", {
                    className: (0, l.A)(
                      "DialogInputLabelGroup",
                      p.ConnectionKindGroup,
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        id: A,
                        className: "DialogLabel",
                        children: "Connection kind",
                      }),
                      (0, r.jsxs)(o.zW, {
                        labelId: A,
                        value: S,
                        onChange: (e) => b(e),
                        children: [
                          (0, r.jsx)(o.a, { value: "", children: "Any" }),
                          (0, r.jsx)(o.a, {
                            value: "ded",
                            children: "Dedicated server",
                          }),
                          (0, r.jsx)(o.a, {
                            value: "p2p",
                            children: "Peer-to-Peer",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: p.AppFieldPair,
                    children: [
                      (0, r.jsx)(o.pd, {
                        type: "text",
                        value: C,
                        disabled: M,
                        label: "Client",
                        onChange: (e) => v(e.currentTarget.value),
                      }),
                      (0, r.jsx)(o.pd, {
                        type: "text",
                        value: N,
                        disabled: M,
                        label: D,
                        onChange: (e) => y(e.currentTarget.value),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: p.AppFieldPair,
                    children: [
                      (0, r.jsx)(o.pd, {
                        type: "text",
                        value: P,
                        disabled: M,
                        label: "App field name 1",
                        onChange: (e) => k(e.currentTarget.value),
                      }),
                      (0, r.jsx)(o.pd, {
                        type: "text",
                        value: E,
                        disabled: M,
                        label: "App field value 1",
                        onChange: (e) => R(e.currentTarget.value),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: p.SubmitButtonCtn,
                    children: (0, r.jsx)(o.jn, {
                      onClick: () => {
                        let e = new URLSearchParams();
                        C && e.set("client_id", C),
                          N && e.set("peer_id", N),
                          S && e.set("kind", S),
                          P &&
                            E &&
                            (e.set("app_name1", P), e.set("app_value1", E));
                        let t = { ...s.location };
                        (t.search = e.toString()),
                          t != s.location && s.push(t),
                          F(w + 1);
                      },
                      disabled: n,
                      children: "Search ",
                    }),
                  }),
                ],
              }),
              n && (0, r.jsx)(x.t, {}),
              T,
            ],
          }),
        });
      }
    },
    68797: (e, s, t) => {
      "use strict";
      t.d(s, { H: () => i });
      var r = t(41735),
        n = t.n(r),
        a = t(56545);
      function i(e) {
        if (n().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.w)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
  },
]);
