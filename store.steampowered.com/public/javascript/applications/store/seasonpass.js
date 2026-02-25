/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5139],
  {
    1431: (e) => {
      e.exports = {
        StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
        StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
        StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
      };
    },
    4852: (e) => {
      e.exports = {
        StoreImage: "_1XiTdhCGWl9dUCWd6Eg89o",
        StoreVideo: "_1Nwn2Vf2AjZ4McbxZX9P8V",
      };
    },
    29298: (e) => {
      e.exports = {
        SeasonPass: "oa0Mg649faNiGrRBlXZ7b",
        Description: "_3ZmgNZ5nbBbDojlnZLRkgc",
        Title: "_1PoePgbQRAy0Sbtz2Po_R7",
        Shipped: "Y4pxifDaDKS1sYR7j-35X",
        DateAndControl: "_3-5TufllBcRHGRpNEAuY5u",
        Upcoming: "lZmBeL-zQf8GORGTr4uX-",
        Status: "_2uj7WLmhl5-zIS1NE_Ig-9",
        Content: "_1Axq2b2LqJszxamtTvrnTV",
        Text: "_3zXxPvXsjZinhyyYuHArVW",
        Padding: "_26DsxbVP4TJh-d5NBcU6Qc",
        Strike: "CoE7R_RffGU0rYbU4eHwa",
        Chevron: "_1qoDole_3YKojGNDyp72EY",
      };
    },
    51899: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => W });
      var n = t(7850),
        a = t(8527),
        o = t(90626),
        i = t(38390),
        r = t(6379),
        l = t(55263),
        c = t(63369),
        p = t(8107),
        d = t(60014),
        m = t(55963),
        _ = t(1431),
        u = t.n(_);
      const h = { include_assets: !0, include_basic_info: !0 };
      function x(e) {
        const { appid: s } = e,
          [t] = (0, l.t7)(s, h),
          a = (0, d.n9)();
        return t && s
          ? (0, n.jsx)("div", {
              className: u().StoreItemCtn,
              children: (0, n.jsx)("div", {
                className: u().StoreItemRow,
                children: (0, n.jsxs)("a", {
                  href: (0, m.wJ)(t.GetStorePageURL(), a),
                  children: [
                    (0, n.jsx)("img", {
                      src: t.GetAssets().GetSmallCapsuleURL(),
                    }),
                    (0, n.jsxs)("div", {
                      className: u().StoreItemDescription,
                      children: [t.GetShortDescription(), " "],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      var S = t(32630),
        g = t(93980),
        f = t(42780),
        j = t(59952),
        v = t(12611),
        R = t(30470);
      function w() {
        const e = new URL(window.location.href),
          s = e.pathname.split("/"),
          t = s?.[2];
        e.searchParams.get("beta");
        return `${R.TS.STORE_ICON_BASE_URL}${t}/`;
      }
      var P = t(61859),
        b = t(26296),
        I = t(4852),
        A = t.n(I),
        D = t(24484),
        N = t(78327),
        G = t(79613);
      function T(e) {
        return new f.OJ(new f.R8(), 0);
      }
      function E(e) {
        const { text: s, languageOverride: t } = e,
          [a] = (0, o.useState)(
            new g.B(
              new Map([
                ...Array.from(j.W4.entries()),
                ["img", { Constructor: B, autocloses: !1 }],
              ]),
              T,
              t || 0,
            ),
          );
        return (0, n.jsx)(n.Fragment, { children: a.ParseBBCode(s, {}, !0) });
      }
      function B(e) {
        const { showErrorInfo: s } = e.context;
        let t = e?.children?.toString();
        if (
          (null == t || null == t || 0 == t.length) &&
          ((t = e?.args?.[""] || e?.args?.src),
          null == t || null == t || 0 == t.length)
        )
          return "";
        const a = (0, D.Fd)("store_page_asset_url", "application_config"),
          o = (0, D.Fd)("store_page_extra_assets_url", "application_config"),
          i = (0, D.Fd)("store_page_extra_assets_map", "application_config");
        if (a && t.startsWith(v.qR + "/")) {
          const e = t.replace(v.qR + "/", ""),
            s = i[e];
          if (s) {
            const e = [];
            let t = !1;
            for (const n of s) {
              const s = n.urlPart;
              e.push({
                url: o.replace("%s", s),
                extension: n.extension,
                alt_text: n.alt_text ?? null,
              }),
                (t = t || ["mp4", "webm"].includes(n.extension));
            }
            if (t) {
              const s = e.find((e) => "webm" === e.extension)?.url,
                t = e.find((e) => "mp4" === e.extension)?.url,
                a = e.find(
                  (e) =>
                    ".poster.webp" === e.extension ||
                    ".poster.avif" === e.extension,
                )?.url,
                o = e.find(
                  (e) =>
                    e.alt_text?.length > 0 &&
                    ("webm" === e.extension || "webm" === e.extension),
                )?.alt_text,
                i = (0, G.Wr)() || (0, G.Ae)(),
                r = (e) => {
                  const s = e.currentTarget;
                  s.paused ? s.play() : s.pause();
                };
              return (0, n.jsxs)("video", {
                className: A().StoreVideo,
                poster: a,
                "aria-label": o,
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
                onClick: r,
                children: [
                  s &&
                    !i &&
                    (0, n.jsx)("source", { src: s, type: "video/webm" }),
                  t &&
                    !N.TS.IN_CLIENT &&
                    (0, n.jsx)("source", { src: t, type: "video/mp4" }),
                ],
              });
            }
            {
              const s = e[0]?.alt_text,
                t = e[0]?.url;
              return (0, n.jsx)("img", {
                className: A().StoreImage,
                src: t,
                alt: s,
              });
            }
          }
          t = a.replace("%s", e);
        } else t = t.replace(v.qR, w()).replace("http://", "https://");
        return s
          ? (0, n.jsx)(b.i, { className: A().StoreImage, src: t })
          : (0, n.jsx)("img", {
              className: A().StoreImage,
              src: t,
              alt: (0, P.we)("#EventEditor_InsertImage_URL"),
            });
      }
      var C = t(52038),
        L = t(29298),
        k = t.n(L),
        y = t(39777),
        U = t(35380);
      function W(e) {
        const { season_pass: s } = e;
        return s && s.milestones && 0 != s.milestones.length
          ? (0, n.jsx)(S.Ay, {
              feature: "seasonpassproductpage",
              children: (0, n.jsxs)("div", {
                className:
                  "game_area_description overflow_allowed season_pass_area",
                children: [
                  (0, n.jsx)("h2", {
                    children: (0, P.we)("#SeasonPass_Header"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, P.oW)("#SeasonPass_Incomplete_Desc"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, P.oW)(
                      "#SeasonPass_Incomplete_Desc2",
                      (0, n.jsx)("a", {
                        href: `${a.TS.STORE_BASE_URL}account/emailoptout`,
                      }),
                    ),
                  }),
                  s.milestones
                    .sort((e, s) =>
                      e.shipped && s.shipped
                        ? e.rtime_complete - s.rtime_complete
                        : e.shipped
                          ? -1
                          : s.shipped
                            ? 1
                            : e.dates[e.dates.length - 1].rtime -
                              s.dates[s.dates.length - 1].rtime,
                    )
                    .map((e) =>
                      (0, n.jsx)(
                        $,
                        { baseGameAppID: s.appid, milestone: e },
                        "ms_" + e.milestone_id,
                      ),
                    ),
                ],
              }),
            })
          : null;
      }
      function $(e) {
        const { milestone: s, baseGameAppID: t } = e,
          a = s.milestone_desc?.length > 0;
        return (0, n.jsxs)("div", {
          className: k().SeasonPass,
          children: [
            (0, n.jsxs)("div", {
              className: (0, C.A)(k().Title, Boolean(s.shipped) && k().Shipped),
              children: [
                (0, n.jsxs)("span", {
                  children: [
                    Boolean(s.shipped) && "✓",
                    " ",
                    P.A0.GetTokenWithFallback(s.title),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: k().DateAndControl,
                  children: (0, n.jsx)(Z, { milestone: s }),
                }),
              ],
            }),
            a && (0, n.jsx)(O, { milestone: s, baseGameAppID: t }),
          ],
        });
      }
      function O(e) {
        const { milestone: s, baseGameAppID: t } = e,
          a = P.A0.GetTokenWithFallback(s.milestone_desc),
          o = s.appid || s.coming_soon_appid;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            Boolean(o) && (0, n.jsx)(x, { appid: o }),
            (0, n.jsxs)("div", {
              className: k().Description,
              children: [
                (0, n.jsx)(E, { text: a }),
                Boolean(s.shipped) &&
                  (0, n.jsx)(q, { milestone: s, baseGameAppID: t }),
              ],
            }),
          ],
        });
      }
      function Z(e) {
        const { milestone: s } = e;
        if (s.shipped) return (0, n.jsx)(F, { milestone: s });
        const t = s.dates[0].rtime,
          a = s.dates.filter((e, s) => 0 == s || e.rtime < t);
        return (0, n.jsx)("div", {
          className: k().Upcoming,
          children: (0, P.PP)(
            "#SeasonPass_Release_Date",
            (0, n.jsx)("br", {}),
            [...a].reverse().map((e, s) => {
              const t = (0, c.M)(e.coming_soon_display_type, e.rtime, null, !0);
              return (0, n.jsx)(
                "div",
                {
                  className: s + 1 < a.length ? k().Strike : void 0,
                  children: t,
                },
                "dd" + e.rtime + e.coming_soon_display_type,
              );
            }),
          ),
        });
      }
      function F(e) {
        const { milestone: s } = e,
          t = (0, U.$5)(s.appid),
          { data: a } = (0, y.by)(t),
          o = a?.steam_release_date || s.rtime_complete;
        return (0, n.jsx)("div", {
          className: k().Shipped,
          children: (0, P.PP)(
            "#SeasonPass_Released_Date",
            (0, n.jsx)("br", {}),
            (0, P.TW)(o),
          ),
        });
      }
      const X = {};
      function q(e) {
        const { milestone: s, baseGameAppID: t } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: k().Status,
              children: (0, P.PP)(
                s.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
              ),
            }),
            s.appid && (0, n.jsx)(V, { milestone: s }),
            Boolean(s.appid && s.event_gid) &&
              (0, n.jsx)("span", { className: k().Padding }),
            Boolean(s.event_gid) &&
              (0, n.jsx)(Y, { milestone: s, baseGameAppID: t }),
          ],
        });
      }
      function V(e) {
        const { milestone: s } = e,
          [t] = (0, l.t7)(s.appid, X);
        return (0, n.jsx)("a", {
          href: t?.GetStorePageURL() || `${a.TS.STORE_BASE_URL}app/${s.appid}`,
          children: (0, P.we)("#SeasonPass_ShowStore"),
        });
      }
      function Y(e) {
        const { milestone: s, baseGameAppID: t } = e,
          [l, c] = (0, o.useState)(!1),
          d = (0, i.RR)(s.event_gid);
        return d
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("a", {
                  href: `${a.TS.STORE_BASE_URL}news/app/${t}/view/${s.event_gid}`,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation(), c(!0);
                  },
                  children: (0, P.we)("#SeasonPass_ReadEvent"),
                }),
                Boolean(l) &&
                  (0, n.jsx)(p.N, {
                    appid: t,
                    eventModel: d,
                    announcementGID: d.AnnouncementGID,
                    closeModal: () => c(!1),
                    partnerEventStore: r.O3,
                    bShowOnlyInitialEvent: !0,
                    showAppHeader: !0,
                    trackingLocation: 3,
                  }),
              ],
            })
          : (0, n.jsx)("a", {
              href: `${a.TS.STORE_BASE_URL}news/app/${t}/view/${s.event_gid}`,
              children: (0, P.we)("#SeasonPass_ReadEvent"),
            });
      }
    },
  },
]);
