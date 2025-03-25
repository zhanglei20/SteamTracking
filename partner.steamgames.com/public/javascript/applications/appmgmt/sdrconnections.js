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
    26193: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => F });
      var n = a(41735),
        r = a.n(n),
        s = a(90626),
        l = a(52038),
        c = a(92757),
        o = a(16676),
        i = a(84811),
        m = a(68797),
        d = a(78327),
        u = a(97712),
        p = a(22797),
        E = a(91675);
      function _(e) {
        return s.createElement(
          "span",
          { className: (0, l.A)(u.GenericLabeledItem, e.className) },
          s.createElement(
            "span",
            { className: u.CxnGenericDataLabel },
            e.label,
          ),
          s.createElement("span", { className: u.CxnGenericData }, e.children),
        );
      }
      function f(e) {
        const t = e.host,
          a = t.type + ":" + t.id;
        let n = "peer" == e.host_role ? "Peer" : "Client",
          r = null;
        if (t.data_center)
          (n = "Gameserver"),
            (r = s.createElement(
              s.Fragment,
              null,
              s.createElement("span", { className: u.host_id }, a),
              " in ",
              s.createElement(
                "span",
                { className: u.GameServerDataCenter },
                t.data_center,
              ),
            ));
        else if (t.steam_persona) {
          const e = d.TS.COMMUNITY_BASE_URL + "/profiles/" + t.id;
          r = s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "span",
              { className: u.host_id },
              s.createElement("a", { href: e }, t.steam_persona),
            ),
            " (",
            s.createElement("span", { className: u.host_id }, a),
            ")",
          );
        } else
          r = s.createElement(
            s.Fragment,
            null,
            s.createElement("span", { className: u.host_id }, a),
          );
        return s.createElement(
          "div",
          {
            className: (0, l.A)(
              u.ConnectionClientInfo,
              t.data_center && u.HostIsGameserver,
            ),
          },
          s.createElement(
            "div",
            { className: u.HostIDAndConnectionCtr },
            s.createElement(_, { className: u.HostIDInfo, label: n }, r),
            null != t.connection_id &&
              s.createElement(
                _,
                { className: u.HostConnectionID, label: "ConnectionID" },
                t.connection_id,
              ),
          ),
          s.createElement(
            "div",
            { className: u.ClientIPInfo },
            t.addr &&
              s.createElement(_, { className: "addr", label: "IP" }, t.addr),
            t.city_name &&
              s.createElement(
                _,
                { className: "city_name", label: "City" },
                t.city_name,
              ),
            t.country_code &&
              s.createElement(
                _,
                { className: "country_code", label: "Country" },
                t.country_code,
              ),
            t.as && s.createElement(_, { className: "as", label: "AS" }, t.as),
          ),
        );
      }
      function g(e, t) {
        return (
          null == t && (t = 0),
          e.toLocaleString(void 0, {
            minimumFractionDigits: t,
            maximumFractionDigits: t,
          })
        );
      }
      function C(e) {
        let t = 1e30,
          a = -1e30;
        if (e && e.ping_pctile)
          for (const n in e.ping_pctile) {
            const r = parseFloat(n);
            if (r >= 5 && r <= 95) {
              const r = e.ping_pctile[n];
              r < t && (t = r), r > a && (a = r);
            }
          }
        return [t, a];
      }
      function h(e) {
        let t = 1e30;
        if (e && e.quality_pctile)
          for (const a in e.quality_pctile) {
            const n = parseFloat(a);
            if (n >= 5 && n <= 95) {
              const n = e.quality_pctile[a];
              n < t && (t = n);
            }
          }
        return t;
      }
      function v(e, t, a) {
        const n = a > 0 ? t / a : 0,
          r = (100 * n).toFixed(1) + "%";
        return s.createElement(
          "tr",
          { key: e },
          s.createElement("th", { className: u.Label }, e),
          s.createElement("td", { className: u.Pct }, r),
          s.createElement(
            "td",
            null,
            s.createElement("span", {
              className: u.Bar,
              style: { width: 90 * n + 1 + "px" },
            }),
            s.createElement("span", { className: u.Num }, g(t)),
          ),
        );
      }
      function N(e, t) {
        if (!(t > 0)) return null;
        let a = [];
        for (let n = 0; n < e.length; ++n) a.push(v(e[n][0], e[n][1], t));
        return s.createElement(
          "table",
          { className: u.Histogram },
          s.createElement("tbody", null, a),
        );
      }
      function y(e) {
        let t = [];
        for (let a = 0; a < e.length; ++a) {
          const [n, r] = e[a];
          null != r &&
            t.push(
              s.createElement(
                "tr",
                { key: n },
                s.createElement("th", { className: u.NTile }, n, "% <="),
                s.createElement("td", { className: u.Value }, r),
              ),
            );
        }
        return t.length
          ? s.createElement(
              "table",
              { className: u.Distribution },
              s.createElement("tbody", null, t),
            )
          : null;
      }
      function S(e) {
        return e >= 0 ? e.toFixed(0) + "ms" : "???";
      }
      function b(e) {
        const t = e.flow;
        return s.createElement(
          "div",
          { className: u.FlowQualityStats },
          s.createElement("div", { className: u.FlowQualityTitle }, e.title),
          t
            ? s.createElement(
                s.Fragment,
                null,
                (function (e) {
                  const t = function (e) {
                      const t = e >= 0 ? g(e) : "?";
                      return s.createElement(
                        "td",
                        { className: u.NumPkts },
                        t + " pkts",
                      );
                    },
                    a = function (e) {
                      const t = e >= 0 ? g(e) : "?";
                      return s.createElement(
                        "td",
                        { className: u.KB },
                        t + "kb",
                      );
                    },
                    n = function (e, t) {
                      let a = "";
                      return (
                        t > 0 &&
                          e >= 0 &&
                          (a = ((e / t) * 100).toFixed(3) + "%"),
                        s.createElement("td", { className: u.Pct }, a)
                      );
                    };
                  return s.createElement(
                    "div",
                    {
                      className: (0, l.A)(
                        u.FlowPacketCounts,
                        u.FlowStatsSection,
                      ),
                    },
                    s.createElement(
                      "div",
                      { className: u.FlowSectionTitle },
                      "Summary counters",
                    ),
                    s.createElement(
                      "table",
                      null,
                      s.createElement(
                        "tbody",
                        null,
                        s.createElement(
                          "tr",
                          null,
                          s.createElement("th", null, "Sent"),
                          t(e.sent_pkt),
                          a(e.sent_kb),
                          s.createElement("td", { className: u.Spacer }),
                          s.createElement("th", null, "Dropped"),
                          t(e.drop),
                          n(e.drop, e.recv_seq),
                        ),
                        s.createElement(
                          "tr",
                          null,
                          s.createElement("th", null, "Recv"),
                          t(e.recv_pkt),
                          a(e.recv_kb),
                          s.createElement("td", { className: u.Spacer }),
                          s.createElement("th", null, "Duplicate"),
                          t(e.dup),
                          n(e.dup, e.recv_seq),
                        ),
                        s.createElement(
                          "tr",
                          null,
                          s.createElement("th", null, "Recv w/ seq"),
                          t(e.recv_seq),
                          s.createElement("td", null),
                          s.createElement("td", { className: u.Spacer }),
                          s.createElement("th", null, "Out of order"),
                          t(e.ooo),
                          n(e.ooo, e.recv_seq),
                        ),
                        s.createElement(
                          "tr",
                          null,
                          s.createElement("th", null, "Summary"),
                          s.createElement(
                            "td",
                            { colSpan: 2, className: u.FlowQualityClass },
                            s.createElement(
                              "span",
                              {
                                className:
                                  "flowqualityclass_" + e.quality_class,
                              },
                              e.quality_class,
                            ),
                          ),
                          s.createElement("td", { className: u.Spacer }),
                          s.createElement("th", null, "Seq num lurch"),
                          t(e.seqlurch),
                          n(e.seqlurch, e.recv_seq),
                        ),
                      ),
                    ),
                  );
                })(t),
                (function (e) {
                  let t = null,
                    a = null,
                    n = 0;
                  const r = e.quality_hist;
                  if (r) {
                    const e = [
                      ["Perfect", r[100] || 0],
                      [">99%", r[99] || 0],
                      ["97-99%", r[97] || 0],
                      ["95-97%", r[95] || 0],
                      ["90-95%", r[90] || 0],
                      ["75-90%", r[75] || 0],
                      ["50-75%", r[50] || 0],
                      ["<50%", r[1] || 0],
                      ["Dead", r[0] || 0],
                    ];
                    for (let t = 0; t < e.length; ++t) n += e[t][1];
                    t = N(e, n);
                  }
                  if (n <= 0) return null;
                  const l = e.quality_pctile;
                  if (l) {
                    const e = (e) => (null == e ? void 0 : e + "%");
                    a = y([
                      [50, e(l[50])],
                      [25, e(l[25])],
                      [5, e(l[5])],
                      [2, e(l[2])],
                    ]);
                  }
                  const c = g(n) + " measurement intervals";
                  return s.createElement(
                    "div",
                    { className: u.QualityBreakdown },
                    s.createElement(
                      "div",
                      { className: u.FlowSectionTitle },
                      "Quality interval breakdown",
                    ),
                    s.createElement("div", { className: u.numSamples }, c),
                    t,
                    a,
                  );
                })(t),
                (function (e) {
                  let t = null;
                  const a = e.ping_hist;
                  let n = 0;
                  if (a) {
                    const e = [
                      [0, a[25] || 0],
                      [25, a[50] || 0],
                      [50, a[75] || 0],
                      [75, a[100] || 0],
                      [100, a[125] || 0],
                      [125, a[150] || 0],
                      [150, a[200] || 0],
                      [200, a[300] || 0],
                      [300, a.max || 0],
                    ];
                    let r,
                      l = 0;
                    for (let t = 0; t < e.length; ++t)
                      e[t][1] > 0 &&
                        (null == r && (r = t), (l = t + 1), (n += e[t][1]));
                    if (n > 0) {
                      (r = Math.max(0, r - 2)), (l = Math.min(e.length, l + 2));
                      let a = [];
                      for (let t = r; t < l; ++t) {
                        let s,
                          [c, o] = e[t];
                        t == r && 0 == o && (c = 0),
                          (s =
                            t + 1 >= e.length || (t + 1 >= l && 0 == o)
                              ? S(c) + "+"
                              : c + "-" + S(e[t + 1][0])),
                          a.push(v(s, o, n));
                      }
                      t = s.createElement(
                        "table",
                        { className: u.Histogram },
                        s.createElement("tbody", null, a),
                      );
                    }
                  }
                  let r = null;
                  const l = e.ping_pctile;
                  if (l) {
                    const e = (e) => (null == e ? void 0 : S(e));
                    r = y([
                      [5, e(l[5])],
                      [50, e(l[50])],
                      [75, e(l[75])],
                      [95, e(l[95])],
                      [98, e(l[98])],
                    ]);
                  }
                  let c = null,
                    o = 0;
                  const i = e.jitter_hist;
                  if (i) {
                    const e = [
                      ["<1ms", i[0] || 0],
                      ["1-2ms", i[1] || 0],
                      ["2-5ms", i[2] || 0],
                      ["5-10ms", i[5] || 0],
                      ["10-20ms", i[10] || 0],
                      ["20ms+", i[20] || 0],
                    ];
                    for (let t = 0; t < e.length; ++t) o += e[t][1];
                    c = N(e, o);
                  }
                  if (!t && !r && !c) return null;
                  const m = g(n) + " samples",
                    d = g(o) + " samples";
                  return s.createElement(
                    "div",
                    { className: u.PingBreakdown },
                    s.createElement(
                      "div",
                      { className: u.PingSection },
                      s.createElement(
                        "div",
                        { className: u.FlowSectionTitle },
                        "Round Trip Latency",
                      ),
                      s.createElement("div", { className: u.NumSamples }, m),
                      t,
                      r,
                    ),
                    s.createElement(
                      "div",
                      { className: u.JitterSection },
                      s.createElement(
                        "div",
                        { className: u.FlowSectionTitle },
                        "Jitter",
                      ),
                      s.createElement("div", { className: u.NumSamples }, d),
                      c,
                    ),
                  );
                })(t),
              )
            : s.createElement(
                "div",
                { className: u.NoFlowDataAvailable },
                "(No data available)",
              ),
        );
      }
      function k(e) {
        const t = e.sess,
          a = e.cxn;
        let n = null,
          r = null;
        if (t.client_front || t.router_front) {
          const e =
            "ded" == a.kind
              ? "Front side statistics reported by client"
              : "Front side statistics reported by player";
          n = s.createElement(
            "div",
            { className: u.QualityFlowPairCtr },
            s.createElement(b, { title: e, flow: t.client_front }),
            s.createElement(b, {
              title: "Front side statistics reported by relay",
              flow: t.router_front,
            }),
          );
        }
        return (
          (t.router_back || t.gameserver_back) &&
            (r = s.createElement(
              "div",
              { className: u.QualityFlowPairCtr },
              s.createElement(b, {
                title: "Back side statistics reported by relay",
                flow: t.router_back,
              }),
              s.createElement(b, {
                title: "Back side statistics reported by gameserver",
                flow: t.gameserver_back,
              }),
            )),
          s.createElement(
            "div",
            { className: u.RelaySessionCtr },
            s.createElement(
              "div",
              { className: u.RelayInfoCtr },
              s.createElement(
                _,
                { label: "Relay address" },
                t.client.relay_addr,
              ),
              s.createElement(
                _,
                { label: "Relay POP" },
                t.client.relay_cluster,
              ),
              s.createElement(_, { label: "Active" }, (0, E.R2)(t.active_time)),
            ),
            n,
            r,
          )
        );
      }
      function w(e) {
        const t = e.cxn,
          a = t.client,
          n = t.peer,
          r = t.client_e2e,
          l = t.peer_e2e,
          [c, i] = s.useState(!1),
          m = (function (e) {
            if (!e || !e.length) return null;
            let t = e[0];
            for (let a = 1; a < e.length; ++a) {
              const n = e[a];
              (n.primary > t.primary ||
                (n.primary == t.primary && n.active_time > t.active_time)) &&
                (t = n);
            }
            return t;
          })(t.client_sessions);
        let d = null,
          p = null,
          g = null,
          v = null,
          N = null,
          y = null,
          S = null,
          w = [];
        if (m) {
          n &&
            m.client.connection_id == n.connection_id &&
            (!a || (m.client.connection_id, a.connection_id));
          if (m.start_time && m.duration) {
            const e = new Date(1e3 * m.start_time),
              t = new Date(1e3 * (m.start_time + m.duration)),
              a = void 0,
              n = e.toLocaleString(a, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              r = e.toLocaleString(a, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              l = t.toLocaleString(a, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              }),
              c = (0, E.R2)(m.duration);
            d = s.createElement(
              "span",
              { className: u.CxnTimeAndDuration },
              s.createElement(_, { label: "Time" }, n, " ", r, "--", l),
              s.createElement(_, { label: "Duration" }, c),
            );
          }
          if (
            (m.close_code &&
              (p = s.createElement(
                _,
                { label: "Closed", className: u.CxnCloseInfo },
                m.close_type,
                " ",
                m.close_msg,
                " (",
                m.close_code,
                ")",
              )),
            m.experience_class)
          ) {
            const e = m.class_reason ? ` (${m.class_reason})` : "";
            g = s.createElement(
              _,
              { label: "Experience" },
              s.createElement(
                "span",
                { className: "experience_" + m.experience_class },
                m.experience_class,
              ),
              e,
            );
          }
        }
        if (t.app) {
          let e = Object.keys(t.app);
          if (e.length > 0) {
            e.sort();
            let a = [];
            for (let n of e) a.push(s.createElement(_, { label: n }, t.app[n]));
            v = s.createElement(
              "div",
              { className: u.AppFieldsCtr },
              s.createElement(
                "span",
                { className: u.AppFieldsTitle },
                "Application fields:",
              ),
              a,
            );
          }
        }
        if (r || l) {
          const [e, a] = C(r),
            [n, o] = C(l),
            i = Math.min(e, n),
            m = Math.max(a, o);
          if (i <= m) {
            const e =
              0.03 * i + 2 < m
                ? `${i}--${m}ms`
                : Math.floor((i + m) / 2 + 0.5) + "ms";
            N = s.createElement(_, { label: "Ping" }, e);
          }
          const d = h(r),
            p = h(l),
            E = Math.min(d, p);
          if (
            (E >= 0 &&
              E <= 100 &&
              (y = s.createElement(
                _,
                { label: "Packet delivery" },
                `${E.toFixed(2)}%`,
              )),
            c)
          ) {
            const e = "End-to-end statistics reported by client",
              a =
                "ded" == t.kind
                  ? "End-to-end statistics reported by gameserver"
                  : "End-to-end statistics reported by peer";
            S = s.createElement(
              "div",
              { className: u.QualityFlowPairCtr },
              s.createElement(b, { title: e, flow: r }),
              s.createElement(b, { title: a, flow: l }),
            );
          }
        }
        if (c) {
          const e = function (e) {
              let t = [...e];
              return (
                t.sort((e, t) => (t.active_time || 0) - (e.active_time || 0)), t
              );
            },
            a = t.client_sessions && t.client_sessions.length > 0,
            n = t.peer_sessions && t.peer_sessions.length > 0;
          if (a) {
            "p2p" == t.kind || n
              ? w.push(
                  s.createElement(
                    "div",
                    { className: u.SessionsGroupHeader },
                    "Client relay sessions",
                  ),
                )
              : w.push(
                  s.createElement(
                    "div",
                    { className: u.SessionsGroupHeader },
                    "Relay sessions",
                  ),
                );
            for (const a of e(t.client_sessions))
              w.push(
                s.createElement(k, { cxn: t, sess: a, host_role: "client" }),
              );
          }
          if (n) {
            w.push(
              s.createElement(
                "div",
                { className: u.SessionsGroupHeader },
                "Peer relay sessions",
              ),
            );
            for (const a of e(t.peer_sessions))
              w.push(
                s.createElement(k, { cxn: t, sess: a, host_role: "peer" }),
              );
          }
        }
        return s.createElement(
          "div",
          { className: u.ConnectionCtr, key: e.key },
          s.createElement(
            "div",
            { className: u.ConnectionHeader },
            s.createElement(
              "div",
              { className: u.CxnSummary },
              d,
              N,
              y,
              g,
              v,
              p,
            ),
            s.createElement(o.Yh, {
              className: u.ExpandDetailsCheckbox,
              label: "Details",
              checked: c,
              onChange: i,
            }),
          ),
          s.createElement(
            "div",
            { className: u.CxnPeersCtr },
            s.createElement(f, { host: t.client, host_role: "client" }),
            s.createElement(f, { host: t.peer, host_role: "peer" }),
          ),
          S,
          w,
        );
      }
      function F(e) {
        const t = (0, c.W6)(),
          a = e.appId,
          [n, E] = s.useState(!1),
          [_, f] = s.useState(""),
          [g, C] = s.useState(void 0),
          [h, v] = s.useState(""),
          [N, y] = s.useState(""),
          [S, b] = s.useState(""),
          [k, F] = s.useState(0),
          [P, x] = s.useState(""),
          [R, T] = s.useState("");
        s.useEffect(() => {
          let e = new URLSearchParams(t.location.search);
          const n = e.get("client_id") || "",
            s = e.get("peer_id") || "",
            l = e.get("kind") || "",
            c = e.get("app_name1") || "",
            o = e.get("app_value1") || "";
          if ((v(n), y(s), b(l), x(c), T(o), !e.toString() && 0 == k)) return;
          E(!0), f(""), a > 0 && e.set("appid", "" + a);
          const i =
            d.TS.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + e.toString();
          (async () => {
            try {
              const e = await r().get(i);
              1 == e?.data?.success
                ? C(e.data.connections)
                : (console.error(
                    "sdrsessionsearch: OnPerformSearch error code  " +
                      e?.data?.success +
                      " msg: " +
                      e?.data?.msg,
                  ),
                  f(e?.data?.success + " msg: " + e?.data?.msg));
            } catch (e) {
              const t = (0, m.H)(e);
              console.error(
                "sdrsessionsearch: OnPerformSearch " + t.strErrorMsg,
                t,
              ),
                f(t.strErrorMsg);
            }
            E(!1);
          })();
        }, [a, t.location, k]);
        let D = null;
        if (void 0 !== g) {
          let e = [];
          for (const t of g) {
            const a =
              (t.client.id || "") + "-" + (t.client.connection_id || "");
            e.push(s.createElement(w, { key: a, cxn: t }));
          }
          D = s.createElement(
            "div",
            { className: u.SearchResultsCtr },
            s.createElement(
              "div",
              { className: u.SearchResultsTitle },
              "Found ",
              g.length,
              " connection(s)",
            ),
            e,
          );
        }
        const I = "ded" == S ? "Gameserver" : "Peer",
          M = !1;
        return s.createElement(
          i.tH,
          null,
          s.createElement(
            "div",
            { className: u.SDRConnectionsAppCtn },
            s.createElement(
              "div",
              { className: u.SDRConnectionsAppTitle },
              s.createElement(s.Fragment, null, "SDR Connections - "),
              e.appId > 0
                ? s.createElement(s.Fragment, null, "App ", e.appId)
                : s.createElement(s.Fragment, null, "All apps"),
              s.createElement(s.Fragment, null, " [BETA feature]"),
            ),
            _ && s.createElement("div", { className: u.ErrMsg }, _),
            s.createElement(
              "div",
              { className: u.SearchParamsCtr },
              s.createElement(
                "div",
                {
                  className: (0, l.A)(
                    "DialogInputLabelGroup",
                    u.ConnectionKindGroup,
                  ),
                },
                s.createElement(
                  "div",
                  { className: "DialogLabel" },
                  "Connection kind",
                ),
                s.createElement(
                  o.zW,
                  { value: S, onChange: (e) => b(e) },
                  s.createElement(o.a, { value: "" }, "Any"),
                  s.createElement(o.a, { value: "ded" }, "Dedicated server"),
                  s.createElement(o.a, { value: "p2p" }, "Peer-to-Peer"),
                ),
              ),
              s.createElement(
                "div",
                { className: u.AppFieldPair },
                s.createElement(o.pd, {
                  type: "text",
                  value: h,
                  disabled: M,
                  label: "Client",
                  onChange: (e) => v(e.currentTarget.value),
                }),
                s.createElement(o.pd, {
                  type: "text",
                  value: N,
                  disabled: M,
                  label: I,
                  onChange: (e) => y(e.currentTarget.value),
                }),
              ),
              s.createElement(
                "div",
                { className: u.AppFieldPair },
                s.createElement(o.pd, {
                  type: "text",
                  value: P,
                  disabled: M,
                  label: "App field name 1",
                  onChange: (e) => x(e.currentTarget.value),
                }),
                s.createElement(o.pd, {
                  type: "text",
                  value: R,
                  disabled: M,
                  label: "App field value 1",
                  onChange: (e) => T(e.currentTarget.value),
                }),
              ),
              s.createElement(
                "div",
                { className: u.SubmitButtonCtn },
                s.createElement(
                  o.jn,
                  {
                    onClick: () => {
                      let e = new URLSearchParams();
                      h && e.set("client_id", h),
                        N && e.set("peer_id", N),
                        S && e.set("kind", S),
                        P &&
                          R &&
                          (e.set("app_name1", P), e.set("app_value1", R));
                      let a = { ...t.location };
                      (a.search = e.toString()),
                        a != t.location && t.push(a),
                        F(k + 1);
                    },
                    disabled: n,
                  },
                  "Search ",
                ),
              ),
            ),
            n && s.createElement(p.t, null),
            D,
          ),
        );
      }
    },
    68797: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => l });
      var n = a(41735),
        r = a.n(n),
        s = a(56545);
      function l(e) {
        if (r().isCancel(e))
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
            if ("object" == typeof e && e instanceof s.w)
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
