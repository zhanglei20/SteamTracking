/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [385],
  {
    91970: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        strMediumWidth: "800px",
        strMaxMobileWidth: "600px",
        MediaContainer: "-ap7mXqcxyhrxn5-5EaM8",
        MediaContainerMM: "_1XVJzaNLt0tgl6Pq5QI2tK",
        ScreenshotThumbnailRow: "COp9MkmgXCc5Y3ytJM70W",
        HilightGrid: "_28DkEkOjvTWfq0sU8m_i32",
        MainMediaCtn: "FATLceF4ncP8L8QnrQTXV",
        VideoThumbnail: "h0pphNa_Fdu4JUevL5V9y",
        ScreenshotDisplayCtn: "_20YpaGv3V_QArQyy15zAJc",
        MainCapsuleWithHover: "_30BxsjSFrUWCBKntWK9hPg",
        MainCapsule: "_2UuNsdHxhT9la27J_j3BFs",
        AppDetails: "ETHkFxrlPF1znTFXFtjtK",
        GameName: "udhKC-bUdlotRKphK3Fn2",
        ShortDesc: "_2e5PhNJqb68XISttHxdVF2",
        ThumbnialClickable: "_3B8X2c5pBF96hapgz03tC4",
        ThumbnailCtn: "rE40TQ86G7cjVETvUYZm3",
        videoPlaying: "_3D99vg3-OLr6XsvxrtzhZa",
        VideoPlayButton: "_2sJlIVAVWZ2I2iA6IO4pOv",
        VideoLargeContainer: "_3mzKCP4FLx7fUVeKrhZ1nn",
        VideoPopupContainers: "_2LqAoKcZgpOtpoj5_URVNJ",
        VideoLarge: "_3zPl6O67BYIiFOlq7FxlJP",
      };
    },
    2921: (e, a, t) => {
      "use strict";
      t.d(a, { PE: () => O, qP: () => E, Yg: () => F });
      var n = t(7850),
        s = t(76217),
        i = t(86927),
        r = t(42834),
        l = t(52471),
        o = t(39777),
        c = t(52541),
        d = t(38535),
        u = t(90626),
        h = t(92834),
        m = t(1078),
        g = t(12155),
        p = t(52038),
        x = t(78327),
        f = t(51706),
        v = t(46253),
        _ = t(22797),
        j = t(44433),
        b = t(91970),
        C = t.n(b),
        y = t(18654),
        T = t.n(y),
        M = t(32754),
        N = t(61859),
        P = t(30470),
        S = t(24484);
      function A(e) {
        const { id: a } = e,
          { data: t } = (0, o.J$)(a),
          s = (0, u.useMemo)(() => {
            if (!t) return [];
            const e =
              t.categories?.supported_player_categoryids?.slice(0, 1) || [];
            return (
              t.categories?.feature_categoryids?.forEach((a) => e.push(a)),
              t.categories?.controller_categoryids?.forEach((a) => e.push(a)),
              t.categories?.supported_player_categoryids
                ?.slice(1)
                .forEach((a) => e.push(a)),
              e
            );
          }, [t]);
        return s && 0 != s.length
          ? (0, n.jsx)("div", {
              className: (0, p.A)(T().SaleTagBlockCtn, "SaleTagBlockCtn"),
              children: Boolean(s?.length > 0)
                ? (0, n.jsx)("div", {
                    className: (0, p.A)(T().TagBox, T().Categories),
                    children: s.map((e) =>
                      (0, n.jsx)(V, { categoryID: e }, "cat_" + e),
                    ),
                  })
                : (0, n.jsx)("div", { children: (0, N.we)("#Broadcast_None") }),
            })
          : null;
      }
      class B {
        m_rgCategories;
        constructor() {
          this.m_rgCategories = (0, S.Tc)(
            "feature_categories",
            "application_config",
          );
        }
        static g_Self = null;
        static Get() {
          return B.g_Self || (B.g_Self = new B()), B.g_Self;
        }
      }
      function V(e) {
        const { categoryID: a } = e,
          t = B.Get().m_rgCategories.find((e) => e.categoryid == a);
        return t
          ? (0, n.jsx)("div", {
              className: T().Category,
              children: (0, n.jsx)(M.he, {
                toolTipContent: t.name,
                children: (0, n.jsx)("div", {
                  className: T().CategoryIcon,
                  style: {
                    background: `url(${P.TS.STORE_CDN_URL}/public/images/${t.image_path}) no-repeat center center/cover`,
                  },
                }),
              }),
            })
          : null;
      }
      var k = t(90421);
      function F(e) {
        const { id: a, bPopOutTrailerPlayback: t } = e,
          { data: s } = (0, o.Yo)(a),
          { data: i } = (0, o.j4)(a),
          { data: r } = (0, o.J$)(a),
          [l, c] = (0, u.useState)(!1),
          [h, m] = (0, u.useState)(!1),
          g = (0, d.dy)(),
          x = s?.highlights?.filter((e) => !g || e.all_ages),
          f = x && x?.length > 0 ? x[0] : void 0,
          v = u.useCallback(() => {
            f && (t ? m(!0) : c((e) => !e));
          }, [f, t]);
        if (!r)
          return (0, n.jsx)("div", {
            className: (0, p.A)(C().HilightGrid, C().MediaContainer),
            children: (0, n.jsx)(_.t, { size: "medium" }),
          });
        const j = f
          ? (0, n.jsx)(D, { trailer: f, bPlayVideo: l, fnTogglePlayTrailer: v })
          : null;
        return f ||
          (i && i.all_ages_screenshots && i.all_ages_screenshots.length > 0)
          ? (0, n.jsxs)("div", {
              className: (0, p.A)(C().HilightGrid, C().MediaContainer),
              children: [
                (0, n.jsx)(I, {
                  elFeaturedInCenter: j,
                  storeItemScreenshots: i,
                  trailer: f,
                  id: a,
                  name: r.name || "",
                }),
                Boolean(t)
                  ? (0, n.jsx)(O, {
                      id: a,
                      bShowModal: h,
                      hideModal: () => m(!1),
                    })
                  : (0, n.jsx)(L, {
                      name: r.name || "",
                      trailer: f,
                      bPlayVideo: l,
                      fnTogglePlayTrailer: v,
                      bControls: !0,
                    }),
              ],
            })
          : null;
      }
      function E(e) {
        const {
            id: a,
            fnOnClickButton: t,
            bLowBandwidthMode: s,
            bUseAssetWithoutOverride: i,
          } = e,
          { data: r } = (0, o.j4)(a),
          { data: c } = (0, o.J$)(a),
          { data: d } = (0, o.Yo)(a),
          u = (0, l.kB)(a);
        return void 0 !== !d && r && c
          ? (0, n.jsx)("div", {
              className: (0, p.A)(C().HilightGrid, C().MediaContainerMM),
              children: (0, n.jsx)(I, {
                id: a,
                elFeaturedInCenter: (0, n.jsx)(w, {
                  id: a,
                  bUseAssetWithoutOverride: Boolean(i),
                  fnOnClickButton: t,
                }),
                trailer: u && u.length > 0 ? u[0] : void 0,
                storeItemScreenshots: r,
                featureElementclassName: C().MainImage,
                bUseTrailerAsFirstThumb: !s,
                bNoScreenShotModals: !0,
                name: c.name || "",
              }),
            })
          : (0, n.jsx)("div", {
              className: (0, p.A)(C().HilightGrid, C().MediaContainerMM),
              children: (0, n.jsx)(_.t, { size: "medium" }),
            });
      }
      function I(e) {
        const {
            elFeaturedInCenter: a,
            id: t,
            name: s,
            trailer: i,
            storeItemScreenshots: l,
            featureElementclassName: o,
            bUseTrailerAsFirstThumb: h,
            bNoScreenShotModals: g,
          } = e,
          [x, f] = u.useState(void 0),
          [v, _] = (0, m.XC)(),
          j = (0, d.dy)(),
          b = (0, u.useRef)(null),
          [y, T] = (0, u.useState)(0);
        if (!t) return null;
        const M = a || (void 0 !== x && -1 !== x) ? x : 0,
          N = new Array(),
          P = new Array();
        h &&
          i &&
          (N.push(
            (0, n.jsx)(
              D,
              {
                trailer: i,
                bPlayVideo: !1,
                fnTogglePlayTrailer: () => {},
                onMouseEnter: () => f(0),
                onMouseLeave: () => {
                  const e = b.current;
                  e && T(e.currentTime);
                },
              },
              "trail_thumb_",
            ),
          ),
          P.push(
            (0, n.jsx)(
              L,
              {
                ref: b,
                name: s,
                trailer: i,
                bControls: !1,
                bPlayVideo: !0,
                startTime: y,
                fnTogglePlayTrailer: () => {},
              },
              "trail_inline",
            ),
          ));
        const S = (
          j ? l?.all_ages_screenshots : l?.mature_content_screenshots
        )?.filter(Boolean);
        if (
          (S?.forEach((e, t) => {
            if ((a || t > 0) && N.length < 3) {
              const a = (0, r.bu)(e, "thumb"),
                s = (0, r.bu)(e, "full"),
                i = N.length;
              N.push(
                (0, n.jsx)(
                  "div",
                  {
                    className: (0, p.A)({
                      [C().ThumbnailCtn]: !0,
                      [C().ThumbnialClickable]: !g,
                    }),
                    children: (0, n.jsx)("img", {
                      src: a,
                      onClick: g
                        ? void 0
                        : () => {
                            const e = [...(S || [])];
                            if (e.length > 0) {
                              for (let a = 0; a < t; ++a) {
                                const a = e.shift();
                                a && e.push(a);
                              }
                              v(e.map((e) => (0, r.bu)(e, "full")));
                            }
                          },
                      onMouseEnter: () => f(i),
                    }),
                  },
                  t + "_small_" + a,
                ),
              ),
                P.push(
                  (0, n.jsx)(
                    "div",
                    {
                      className: C().ScreenshotDisplayCtn,
                      children: (0, n.jsx)("img", { src: s }),
                    },
                    t + "_big_" + a,
                  ),
                );
            }
          }),
          !(a || (P && 0 != P.length)))
        )
          return null;
        const A = N.slice(0, 3),
          B = Array.from({ length: Math.max(0, 3 - A.length) });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            _,
            (0, n.jsx)("div", {
              className: o || C().MainMediaCtn,
              children: Boolean(a && (-1 === M || void 0 === M))
                ? (0, n.jsx)(n.Fragment, { children: a })
                : (0, n.jsx)(n.Fragment, { children: void 0 !== M && P[M] }),
            }),
            Boolean(A.length > 0) &&
              (0, n.jsxs)("div", {
                className: C().ScreenshotThumbnailRow,
                onMouseLeave: () => f(-1),
                children: [
                  A,
                  B.map((e, a) =>
                    (0, n.jsx)(
                      "div",
                      { className: C().ThumbnailCtn },
                      `app_${(0, c.ER)(t)}_${a}`,
                    ),
                  ),
                ],
              }),
          ],
        });
      }
      function L(e) {
        const {
          ref: a,
          name: t,
          trailer: s,
          bControls: i,
          bPlayVideo: r,
          fnTogglePlayTrailer: o,
          startTime: c,
        } = e;
        if (
          ((0, u.useEffect)(() => {
            const e = a?.current;
            if (null != c && c > 0 && e) {
              const a = () => {
                e.currentTime = c || 0;
              };
              return (
                e.addEventListener("loadedmetadata", a),
                () => {
                  e.removeEventListener("loadedmetadata", a);
                }
              );
            }
          }, [a, c]),
          !s)
        )
          return null;
        let d = (0, p.A)(C().VideoLargeContainer, r && C().videoPlaying);
        return (0, n.jsxs)("div", {
          className: d,
          onClick: o,
          children: [
            (0, n.jsx)(v.h, {
              name: t,
              trailerCategory: s.trailer_category,
              trailerDisplay: 1,
              mouseOver: !1,
            }),
            Boolean(r && s.microtrailer) &&
              (0, n.jsx)("video", {
                className: C().VideoLarge,
                ref: a,
                controls: i,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: null != c && c > 0 ? void 0 : s.screenshot_full,
                children: s.microtrailer?.map((e) =>
                  x.TS.IN_CLIENT && "video/mp4" == e.type
                    ? null
                    : (0, n.jsx)(
                        "source",
                        { src: (0, l.M4)(s, e.filename || ""), type: e.type },
                        e.filename,
                      ),
                ),
              }),
            i &&
              (0, n.jsx)("div", {
                onClick: o,
                children: (0, n.jsx)(g.sED, {}),
              }),
          ],
        });
      }
      function O(e) {
        const { id: a, bShowModal: t, trailerBaseID: s, hideModal: i } = e,
          { data: r } = (0, o.J$)(a),
          c = (0, l.kB)(a),
          d = (0, u.useMemo)(() => {
            if (c && 0 != c.length) {
              if (s) {
                const e = c.find((e) => e.trailer_base_id == s);
                if (e) return e;
              }
              return c[0];
            }
          }, [c, s]),
          m = u.useId(),
          g = u.useId();
        if (!d || !d.adaptive_trailers) return null;
        const { rgDashTrailers: p, rgHlsTrailers: x } = (0, l.hg)(d);
        return 0 == p?.length
          ? null
          : (0, n.jsx)(f.EN, {
              active: t,
              children: (0, n.jsxs)(f.eV, {
                "aria-labelledby": (0, h.q)(m, g),
                bAllowFullSize: !0,
                bOKDisabled: !0,
                closeModal: i,
                children: [
                  (0, n.jsx)("div", {
                    className: C().VideoPopupContainers,
                    children: (0, n.jsx)(j.P, {
                      dashManifests: p || [],
                      hlsManifest: (x.length > 0 && x?.[0]) || "",
                      screenshot: (0, l.hl)(d),
                      altText: d.trailer_name,
                      muteWhenAutoplayBlocked: !0,
                    }),
                  }),
                  (0, n.jsx)("div", {
                    id: m,
                    style: { display: "none" },
                    children: r?.name || "",
                  }),
                  (0, n.jsx)("div", {
                    id: g,
                    style: { display: "none" },
                    children: d.trailer_name,
                  }),
                ],
              }),
            });
      }
      function D(e) {
        const {
          trailer: a,
          fnTogglePlayTrailer: t,
          bPlayVideo: s,
          onMouseEnter: i,
          onMouseLeave: r,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, p.A)({
            [C().VideoThumbnail]: !s,
            [C().videoPlaying]: s,
            [C().ThumbnailCtn]: !0,
          }),
          onClick: t,
          onMouseEnter: i,
          onMouseLeave: r,
          children: [
            (0, n.jsx)("img", { src: (0, l.hl)(a) }),
            (0, n.jsx)("div", {
              className: C().VideoPlayButton,
              children: (0, n.jsx)(g.jGG, {}),
            }),
          ],
        });
      }
      function w(e) {
        const { id: a, fnOnClickButton: t, bUseAssetWithoutOverride: l } = e,
          [c, d] = (0, i.OP)(),
          { data: u } = (0, o.lv)(a, l),
          { data: h } = (0, o.J$)(a),
          { data: m } = (0, o.wl)(a),
          { data: g } = (0, o.xz)(a);
        if (!u || !m || !h) return null;
        const x = (0, r.b0)(u, "main_capsule");
        return (0, n.jsxs)(s.Z, {
          focusable: !0,
          noFocusRing: !0,
          className: C().MainCapsuleWithHover,
          ...d,
          onActivate: t,
          children: [
            (0, n.jsx)("img", { className: C().MainCapsule, src: x }),
            (0, n.jsxs)("div", {
              className: C().AppDetails,
              children: [
                (0, n.jsx)("div", {
                  className: (0, p.A)(C().GameName),
                  children: h.name || "",
                }),
                (0, n.jsxs)("div", {
                  className: C().ShortDesc,
                  children: [m.short_description, " "],
                }),
                (0, n.jsx)(k.n, {
                  rgTagIDs: g ? g.slice(0, 10).map((e) => e.tagid || 0) : [],
                  instanceNum: 0,
                  bLargeText: !0,
                  bHideTitle: !0,
                  bNoStoreLinks: !0,
                }),
                (0, n.jsx)(A, { id: a }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
