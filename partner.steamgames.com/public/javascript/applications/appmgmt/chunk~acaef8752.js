/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [23506],
    {
      7742: (H, W, t) => {
        "use strict";
        t.d(W, { x0: () => l, yI: () => T });
        async function e(M) {
          try {
            return await M;
          } catch (O) {
            console.error(O);
            return;
          }
        }
        function l() {
          let M, O;
          return {
            promise: new Promise((w, L) => {
              (M = w), (O = L);
            }),
            resolve: M,
            reject: O,
          };
        }
        function T(M) {
          return new Promise((O) => setTimeout(O, M));
        }
      },
      28922: (H, W, t) => {
        "use strict";
        t.d(W, { s: () => P });
        var e = t(7850),
          l = t(39905),
          T = t(90626),
          M = t(43465),
          O = t(58534),
          y = t(249),
          w = t(71421),
          L = t(27828),
          E = t.n(L);
        function r(n) {
          return `rgba(${n.rgb.r}, ${n.rgb.g}, ${n.rgb.b}, ${n.rgb.a})`;
        }
        function u(n) {
          const o = parseInt(n.slice(1), 16),
            a = (o >> 16) & 255,
            g = (o >> 8) & 255,
            s = o & 255;
          return `rgba(${a}, ${g}, ${s}, 1)`;
        }
        function P(n) {
          const { color: o, onChange: a, strTitle: g, disableAlpha: s } = n,
            [p, _] = (0, T.useState)(() => o || "rgba(255, 255, 255, 1)"),
            b = (0, T.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(l.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const c = (await new window.EyeDropper().open()).sRGBHex,
                  h = u(c);
                _(h), a(h);
              } catch (d) {
                console.warn(l.Z.Localize("#Sale_EyeDropperFailed"), d);
              }
            }, [a]);
          return (0, e.jsxs)("div", {
            className: E().ColorPickerDialog,
            children: [
              !!g && (0, e.jsx)(O.JU, { children: g }),
              (0, e.jsx)(M.xk, {
                onChange: (d) => {
                  const i = r(d);
                  _(i), a(i);
                },
                color: p,
                disableAlpha: s,
                className: E().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: E().EyeDropperCtn,
                children: (0, e.jsx)(w.Gq, {
                  toolTipContent: l.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(O.$n, {
                    className: E().EyeDropperBtn,
                    onClick: b,
                    children: (0, e.jsx)(y.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
      },
      76846: (H, W, t) => {
        "use strict";
        t.d(W, { p: () => w });
        var e = t(7850),
          l = t(39905),
          T = t(90626),
          M = t(16346),
          O = t(28922);
        function y(L) {
          const {
              color: E,
              onChange: r,
              onRequestClose: u,
              disableAlpha: P,
              strTitle: n,
            } = L,
            o = (0, T.useRef)(null);
          return (
            (0, T.useEffect)(() => {
              const a = o.current?.ownerDocument ?? document,
                g = (p) => {
                  o.current && !o.current.contains(p.target) && u();
                },
                s = (p) => {
                  p.key === "Escape" && u();
                };
              return (
                a.addEventListener("pointerdown", g, !0),
                a.addEventListener("keydown", s, !0),
                () => {
                  a.removeEventListener("pointerdown", g, !0),
                    a.removeEventListener("keydown", s, !0);
                }
              );
            }, [u]),
            (0, e.jsx)("div", {
              ref: o,
              children: (0, e.jsx)(O.s, {
                color: E,
                disableAlpha: P,
                strTitle: n ?? l.Z.Localize("#Button_Color"),
                onChange: r,
              }),
            })
          );
        }
        function w() {
          return {
            openColorPicker: (0, T.useCallback)((E, r) => {
              let u = null;
              const P = () => u?.Hide();
              u = (0, M.lX)(
                (0, e.jsx)(y, {
                  color: r.color,
                  disableAlpha: r.disableAlpha,
                  strTitle: r.strTitle,
                  onChange: r.onChange,
                  onRequestClose: P,
                }),
                E,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
      },
      25279: (H, W, t) => {
        "use strict";
        t.d(W, {
          Ek: () => K,
          FZ: () => s,
          Fj: () => N,
          Hj: () => _,
          Ho: () => k,
          Kf: () => C,
          N_: () => z,
          PL: () => i,
          XY: () => oe,
          Yw: () => g,
          _d: () => b,
          cV: () => c,
          dM: () => D,
          on: () => d,
          qj: () => m,
          s4: () => ee,
          tW: () => p,
          vz: () => se,
          x: () => j,
          yu: () => Y,
        });
        var e = t(72849);
        const l = 622,
          T = 1920,
          M = 450,
          O = 800,
          y = 460,
          w = 2108,
          L = 300,
          E = 800,
          r = 300,
          u = 644,
          P = 337,
          n = 155,
          o = 433,
          a = 199,
          g = ["app_header_capsule", "app_main_capsule"],
          s = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          p = ["takeunder_art", "takeunder_mobile_art"],
          _ = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          b = ["marketingmessage_art", "marketingmessage_art_2"],
          d = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          i = ["spotlight_art_hero"],
          c = [...g, ...s, ...p, ..._, ...b, ...d, ...i],
          h = [
            "spotlight",
            "background",
            "hero",
            "email_full",
            "email_centered",
            "broadcast_left",
            "broadcast_right",
            "localized_image_group",
            "sale_section_background",
            "sale_section_title",
            "sale_overlay",
            "link_capsule",
            "product_banner_override",
            "product_mobile_banner_override",
            "schedule_track_art",
            "tab_bar_background",
            "bestofyear_banner",
            "bestofyear_banner_mobile",
            "localized_marketing_message",
            "localized_optin_banner",
            "old_spotlight_art",
            "user_poll_background",
            "localized_marketingmessage_webm",
            "localized_marketingmessage_mp4",
            "localized_subtitles",
            "localized_marketingmessage_poster",
            "localized_marketingmessage_background",
            "localized_store_app_spotlight",
            "localized_store_app_spotlight_mobile",
            "localized_email_image",
            "localized_background_art",
            "edition_comparison",
            "template_asset",
            "sale_store_capsule_header",
            "sale_store_capsule_small",
            "sale_store_capsule_main",
            "sale_store_capsule_vertical",
            ...c,
          ];
        function m(I) {
          return Array.isArray(I) ? I[0] : I;
        }
        function D(I) {
          const v = Array.isArray(I) ? I : [I];
          return Math.min(...v);
        }
        function C(I, v) {
          return v === void 0 ? m(I) : Array.isArray(I) ? I[v] : I;
        }
        const x = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD],
          A = [e.bg.iS, e.bg.dU, e.bg.CK],
          f = [e.bg.iS, e.bg.dU],
          k = [e.bg.pJ, e.bg.nn],
          j = [e.bg.pi, e.bg.k7],
          V = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD, e.bg.pJ, e.bg.nn],
          N = {
            capsule: { width: O, height: M, rgAcceptableTypes: f },
            marketingmessage_art_2_eventcapsule: {
              width: O,
              height: M,
              rgAcceptableTypes: f,
            },
            marketingmessage_art_eventcapsule: {
              width: O,
              height: M,
              rgAcceptableTypes: f,
            },
            spotlight: { width: w, height: y, rgAcceptableTypes: f },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: f,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: f,
            },
            localized_title_image: {
              width: T,
              height: l,
              rgAcceptableTypes: f,
            },
            background: { width: T, height: l, rgAcceptableTypes: f },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            email_full: { width: E, height: L, rgAcceptableTypes: f },
            email_centered: { width: u, height: r, rgAcceptableTypes: f },
            broadcast_left: {
              width: [a, n],
              height: [o, P],
              rgAcceptableTypes: f,
            },
            broadcast_right: {
              width: [a, n],
              height: [o, P],
              rgAcceptableTypes: f,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: A,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: A,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: A,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: A,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: f,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: f,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: f,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: f,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: f,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: f,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: f,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: A,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: A,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: x,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: f,
            },
            localized_marketingmessage_webm: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [e.bg.pJ],
            },
            localized_marketingmessage_mp4: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [e.bg.nn],
            },
            localized_partnerevent_webm: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [e.bg.pJ],
            },
            localized_partnerevent_mp4: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [e.bg.nn],
            },
            localized_subtitles: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: [e.bg.k7, e.bg.pi],
            },
            localized_marketingmessage_poster: {
              width: 528,
              height: 297,
              rgAcceptableTypes: [e.bg.iS, e.bg.dU],
            },
            localized_marketingmessage_background: {
              width: 570,
              height: 600,
              rgAcceptableTypes: f,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: V,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: f,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: f,
            },
            spotlight_art: { width: 306, height: 260, rgAcceptableTypes: A },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: f,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: A,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: A,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: A,
            },
            takeover_art: { width: 1850, height: 450, rgAcceptableTypes: A },
            takeover_webm_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [e.bg.pJ],
            },
            takeover_mp4_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [e.bg.nn],
            },
            takeover_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: A,
            },
            takeover_webm_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [e.bg.pJ],
            },
            takeover_mp4_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [e.bg.nn],
            },
            takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: A },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: A,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: f,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: f,
            },
          };
        function K(I, v, S, B) {
          let U = null;
          if (Array.isArray(S)) {
            if (
              ((U = S.map((R, Z) => (I === R ? Z : void 0)).filter(
                (R) => R !== void 0,
              )),
              U.length <= 0)
            )
              return !1;
          } else if (I !== S) return !1;
          if (Array.isArray(B)) {
            const R = B.map((Z, $) => (v === Z ? $ : void 0)).filter(
              (Z) => Z !== void 0,
            );
            if (R.length <= 0 || (U?.length && !R.some((Z) => U.includes(Z))))
              return !1;
          } else if (v !== B) return !1;
          return !0;
        }
        function Y(I, v, S, B) {
          const U = N[S];
          return U
            ? U.bDisableEnforceDimensions
              ? !!B
              : K(I, v, U.width, U.height)
            : !1;
        }
        function ee(I, v, S) {
          const B = N[S];
          if (!B) return !1;
          if (B.bDisableEnforceDimensions) return !0;
          if (Array.isArray(B.width)) {
            if (B.width.filter((U) => I < U).length == B.width.length)
              return !1;
          } else if (I < B.width) return !1;
          if (Array.isArray(B.height)) {
            if (B.height.filter((U) => v < U).length == B.height.length)
              return !1;
          } else if (v < B.height) return !1;
          return !0;
        }
        function oe(I) {
          const v = N[I];
          return (
            v.rgAcceptableTypes.includes(e.bg.k7) ||
            v.rgAcceptableTypes.includes(e.bg.pi)
          );
        }
        function se(I, v) {
          return v.filter((S) => z(I, S));
        }
        function z(I, v) {
          return N[v].rgAcceptableTypes.includes(I);
        }
      },
      9472: (H, W, t) => {
        "use strict";
        t.d(W, { o: () => w, q: () => L });
        var e = t(14947),
          l = t(72849),
          T = t(6658),
          M = Object.defineProperty,
          O = Object.getOwnPropertyDescriptor,
          y = (E, r, u, P) => {
            for (
              var n = P > 1 ? void 0 : P ? O(r, u) : r, o = E.length - 1, a;
              o >= 0;
              o--
            )
              (a = E[o]) && (n = (P ? a(r, u, n) : a(n)) || n);
            return P && n && M(r, u, n), n;
          };
        function w(E) {
          return E == "waiting" || E == "uploading" || E == "processing";
        }
        class L {
          m_originalSize = { width: 0, height: 0 };
          m_originalDataUrl = "";
          dataUrl = void 0;
          width = 0;
          height = 0;
          status = "pending";
          message = "";
          language = void 0;
          file;
          filename;
          uploadTime;
          fileType;
          constructor(r, u, P, n, o) {
            (0, e.Gn)(this),
              (this.file = r),
              (this.filename = u),
              (this.fileType = (0, T.yh)(u) ?? l.bg.w3),
              (this.language = P),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = o),
              (this.height = o.height),
              (this.width = o.width),
              (this.m_originalDataUrl = n),
              (this.dataUrl = n);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        y([e.sH], L.prototype, "dataUrl", 2),
          y([e.sH], L.prototype, "width", 2),
          y([e.sH], L.prototype, "height", 2),
          y([e.sH], L.prototype, "status", 2),
          y([e.sH.ref], L.prototype, "message", 2),
          y([e.sH], L.prototype, "language", 2);
      },
      64: (H, W, t) => {
        "use strict";
        t.d(W, { IS: () => a, M7: () => p, T2: () => g });
        var e = t(14947),
          l = t(25279),
          T = t(18210),
          M = t(9472),
          O = t(21254),
          y = t(51746),
          w = Object.defineProperty,
          L = Object.getOwnPropertyDescriptor,
          E = (d, i, c, h) => {
            for (
              var m = h > 1 ? void 0 : h ? L(i, c) : i, D = d.length - 1, C;
              D >= 0;
              D--
            )
              (C = d[D]) && (m = (h ? C(i, c, m) : C(m)) || m);
            return h && m && w(i, c, m), m;
          };
        const r = 960,
          u = 311,
          P = 480,
          n = 156;
        class o extends M.q {
          m_rgImageOptions;
          m_currentImageOption = void 0;
          m_currentImageOptionKey = void 0;
          constructor(i, c, h, m, D, C) {
            super(i, c, h, D, C), (0, e.Gn)(this), (this.m_rgImageOptions = m);
          }
          IsValidAssetType(i, c) {
            let h = 0,
              m = 0,
              D = !1,
              C =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some(
                  (Y) => Y.sKey == this.GetCurrentImageOption()?.sKey,
                );
            if (i) (h = i.width), (m = i.height), (D = !0);
            else if (this.GetCurrentImageOption()) {
              const Y = l.Fj[this.GetCurrentImageOption().artworkType];
              Y &&
                ((h = Y.width),
                (m = Y.height),
                (D = !Y.bDisableEnforceDimensions));
            }
            const x = this.width >= (0, l.dM)(h) && this.height >= (0, l.dM)(m),
              A = D ? (0, l.Ek)(this.width, this.height, h, m) : x,
              f = c && c != this.fileType,
              k =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, l.vz)(
                      this.fileType,
                      this.m_rgImageOptions?.map((Y) => Y.artworkType) || [],
                    ).length == 0
                  : !1,
              j = !!(0, O.t)(this.fileType);
            let V = "",
              N = !1,
              K;
            return (
              C
                ? k
                  ? (V = (0, T.we)("#ImageUpload_InvalidFileType"))
                  : f
                    ? (V = (0, T.we)(
                        "#ImageUpload_InvalidFormat",
                        (0, y.EG)(c) ?? "",
                      ))
                    : !A && !j
                      ? (V = (0, T.we)(
                          "#ImageUpload_InvalidResolution",
                          (0, l.qj)(h),
                          (0, l.qj)(m),
                        ))
                      : x
                        ? !A && j
                          ? ((V = (0, T.we)(
                              "#ImageUpload_InvalidDimensions",
                              (0, l.qj)(h),
                              (0, l.qj)(m),
                            )),
                            (N = !0))
                          : ((Array.isArray(h) && this.width != (0, l.qj)(h)) ||
                              (Array.isArray(m) &&
                                this.height != (0, l.qj)(m))) &&
                            ((K = K ?? []),
                            K.push(
                              (0, T.we)(
                                "#ImageUpload_PreferredDimension",
                                (0, l.qj)(h),
                                (0, l.qj)(m),
                              ),
                            ))
                        : (V = (0, T.we)(
                            "#ImageUpload_TooSmall",
                            (0, l.qj)(h),
                            (0, l.qj)(m),
                          ))
                : (V = (0, T.we)("#ImageUpload_InvalidFormatSelected")),
              {
                error: V,
                warnings: K,
                needsCrop: N,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BSupportsLanguages() {
            return !0;
          }
          ComputeDefaultImageOption() {
            if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0)
              return;
            const i = (0, l.vz)(
              this.fileType,
              this.m_rgImageOptions?.map((h) => h.artworkType),
            );
            let c = b(this.width, this.height, i, !1);
            if ((c === void 0 && (c = b(this.width, this.height, i, !0)), c)) {
              const h = this.m_rgImageOptions.find(
                (m) =>
                  m.artworkType == c &&
                  (!m.bEnforceDimensions ||
                    (m.width == this.width && m.height == this.height)),
              );
              if (h) return h;
            }
            return this.m_rgImageOptions[0];
          }
          get ImageOptions() {
            return this.m_rgImageOptions;
          }
          GetCurrentImageOptionKey() {
            return this.m_currentImageOptionKey;
          }
          GetCurrentImageOption() {
            return (
              this.m_currentImageOption ?? this.ComputeDefaultImageOption()
            );
          }
          SetCurrentImageOption(i) {
            (this.m_currentImageOption = i),
              (this.m_currentImageOptionKey = i?.sKey);
          }
        }
        E([e.sH], o.prototype, "m_currentImageOption", 2),
          E([e.sH], o.prototype, "m_currentImageOptionKey", 2);
        class a extends o {
          video;
          constructor(i, c, h, m, D, C, x) {
            super(i, c, h, m, D, C), (this.video = x);
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, l.s4)(
              this.video.videoWidth,
              this.video.videoHeight,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, l.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return l.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        class g extends o {
          constructor(i, c, h, m) {
            super(i, c, h, m, URL.createObjectURL(i), { width: 0, height: 0 });
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, l.XY)(i.artworkType);
          }
          FileTypeMatchesImageTypes(i) {
            return (0, l.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return l.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        function s(d) {
          const i = d.split(".").pop()?.toLocaleLowerCase();
          return i == "webm" || i == "mp4";
        }
        class p extends o {
          bCropped = !1;
          localizedImageGroupPrimaryImage;
          media;
          constructor(i, c, h, m, D, C, x, A) {
            super(i, c, h, m, D, C),
              (0, e.Gn)(this),
              (this.media = x),
              (this.localizedImageGroupPrimaryImage = A);
          }
          IsValidAssetType(i, c) {
            return (
              (c = c ?? this.localizedImageGroupPrimaryImage?.file_type),
              super.IsValidAssetType(i, c)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, l.s4)(
              this.media?.width ?? 0,
              this.media?.height ?? 0,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, l.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return l.Ho.includes(this.fileType);
          }
          GetResizeDimension() {
            return _(this.GetCurrentImageOption()?.artworkType);
          }
        }
        E([e.sH], p.prototype, "bCropped", 2);
        function _(d) {
          if (d === "background")
            return [
              { width: r, height: u },
              { width: P, height: n },
            ];
          if (d === "capsule")
            return [
              {
                width: (0, l.qj)(l.Fj[d].width) / 2,
                height: (0, l.qj)(l.Fj[d].height) / 2,
              },
            ];
          if (d === "spotlight")
            return [
              {
                width: (0, l.qj)(l.Fj[d].width) / 2,
                height: (0, l.qj)(l.Fj[d].height) / 2,
              },
            ];
        }
        function b(d, i, c, h = !1) {
          if (c) {
            for (let m of c)
              if (h ? (0, l.s4)(d, i, m) : (0, l.yu)(d, i, m)) return m;
          }
        }
      },
      38410: (H, W, t) => {
        "use strict";
        t.d(W, {
          $l: () => w,
          PD: () => u,
          Vr: () => r,
          jj: () => P,
          ss: () => y,
        });
        var e = t(32093),
          l = t(99412),
          T = t(18210),
          M = t(41735),
          O = t.n(M);
        class y {}
        function w(n, o, a) {
          const g = n.filter((s) => {
            const p = s.IsValidAssetType(o, a);
            return s.status === "pending" && !p.error && !p.needsCrop;
          });
          return (
            g.forEach((s) => {
              (s.status = "waiting"), (s.message = "");
            }),
            g
          );
        }
        async function L(n, o, a, g, s) {
          const p = w(n, a, g),
            _ = [];
          for (const b of p) {
            b.status = "uploading";
            const d = await o(b, b.filename, b.language ?? l.xPp, s);
            (b.status = d.bSuccess ? "success" : "failed"),
              (b.message =
                !d.bSuccess && d.elErrorMessage ? d.elErrorMessage : ""),
              _.push({
                bSuccess: d.bSuccess,
                image: b,
                uploadResult: d.result,
              });
          }
          return _;
        }
        async function E(n, o, a, g, s, p) {
          const _ = w(n, g, s),
            b = [];
          let d = 0;
          const i = async () => {
              for (; d < _.length; ) {
                const h = d++,
                  m = _[h];
                m.status = "uploading";
                const D = await a(m, m.filename, m.language ?? l.xPp, p);
                (m.status = D.bSuccess ? "success" : "failed"),
                  (m.message =
                    !D.bSuccess && D.elErrorMessage ? D.elErrorMessage : ""),
                  (b[h] = { image: m, uploadResult: D });
              }
            },
            c = Array.from({ length: Math.floor(o) }, () => i());
          return (
            await Promise.all(c),
            b.map((h) => ({
              bSuccess: h.uploadResult.bSuccess,
              image: h.image,
              uploadResult: h.uploadResult.result,
            }))
          );
        }
        class r extends y {
          m_cancel = void 0;
          async UploadAllImages(o, a) {
            this.m_cancel = O().CancelToken.source();
            const g = this.BGetUploadsAreInSerial() ? 1 : 4;
            let s;
            const p = this.UploadSingleImage.bind(this);
            return (
              g > 1
                ? (s = await E(
                    this.GetUploadImages(),
                    g,
                    p,
                    o,
                    a,
                    this.m_cancel.token,
                  ))
                : (s = await L(
                    this.GetUploadImages(),
                    p,
                    o,
                    a,
                    this.m_cancel.token,
                  )),
              s
            );
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, T.we)("#ImageUpload_CancelRequest"));
          }
        }
        function u(n, o, a) {
          if (((n == null || n == null) && (n = o), !a || a.length === 0))
            return n;
          for (const g of a) if (T.A0.IsELanguageValidInRealm(n, g)) return n;
          for (const g of a) if (T.A0.IsELanguageValidInRealm(o, g)) return o;
          return a.includes(e.TU.k_ESteamRealmGlobal) ? l.Bhc : l.ZLm;
        }
        function P(n, o = l.Bhc) {
          let a = n.lastIndexOf(".");
          a != -1 && (n = n.slice(0, a).toLowerCase());
          let g = null,
            s = 0;
          n.endsWith("korean") && ((g = l.Pn1), (s = 6));
          for (let _ = l.Bhc; _ < l.bP9; ++_) {
            const b = (0, l.wwZ)(_);
            if (b.length <= s) continue;
            if (n.endsWith(b) && n.length > b.length + 2) {
              const i = n[n.length - b.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(i) || ((g = _), (s = b.length));
            }
            const d = (0, l.LgB)(_);
            d.length <= s || (n.endsWith(d) && ((g = _), (s = d.length)));
          }
          const p = (_) => _.replace(/[\s_-]+$/g, "");
          return {
            language: g ?? o,
            baseFilename: s > 0 ? p(n.substring(0, n.length - s)) : n,
          };
        }
      },
      6658: (H, W, t) => {
        "use strict";
        t.d(W, { yh: () => L });
        var e = t(90626),
          l = t(72849);
        function T(E, r, u = !0) {
          const P = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            E && P.set("imw", Math.round(E).toString()),
            r && P.set("imh", Math.round(r).toString()),
            !E || !r || !u
              ? P.set("letterbox", "false")
              : P.set("letterbox", "true"),
            "?" + P.toString()
          );
        }
        const M = null;
        function O(E, r) {
          let u;
          for (let P of M)
            if (
              (u ? (u += ", ") : (u = ""),
              (u += `${E}${T(P, 0)} ${P}w`),
              P >= r)
            )
              break;
          return u;
        }
        function y(E) {
          let {
            src: r,
            orig_width: u,
            orig_height: P,
            sizes: n,
            default_width: o,
            ...a
          } = E;
          n || (n = "95vw"), o || (o = 1024);
          let g = `${r}${T(o, void 0)}`,
            s = O(r, u);
          return React.createElement("img", {
            src: g,
            srcSet: s,
            sizes: n,
            ...a,
          });
        }
        function w(E) {
          const {
            width: r,
            height: u,
            orig_width: P,
            orig_height: n,
            src: o,
            ...a
          } = E;
          let g = o + T(r, u),
            s,
            p = 6;
          if (
            (r && P && (p = Math.min(p, Math.ceil(P / r))),
            u && n && (p = Math.min(p, Math.ceil(n / u))),
            p)
          )
            for (let _ of [2, 4, 6]) {
              if (_ > p) break;
              s ? (s += ", ") : (s = ""),
                (s += `${o}${T(r && r * _, u && u * _)} ${_}x`);
            }
          return React.createElement("img", { ...a, src: g, srcSet: s });
        }
        function L(E) {
          if (
            (E.indexOf("?") > 0 && (E = E.split("?")[0]),
            E.endsWith(".jpg") || E.endsWith(".jpeg"))
          )
            return l.bg.iS;
          if (E.endsWith(".png")) return l.bg.dU;
          if (E.endsWith(".gif")) return l.bg.CK;
          if (E.endsWith(".mp4")) return l.bg.nn;
          if (E.endsWith(".webm")) return l.bg.pJ;
          if (E.endsWith(".vtt")) return l.bg.k7;
          if (E.endsWith(".srt")) return l.bg.pi;
          if (E.endsWith(".webp")) return l.bg.wD;
        }
      },
      50109: (H, W, t) => {
        "use strict";
        t.d(W, { E: () => n, O: () => P });
        var e = t(14947),
          l = t(65946),
          T = t(99412),
          M = t(41635),
          O = t(27066),
          y = t(3166),
          w = t(38585),
          L = Object.defineProperty,
          E = Object.getOwnPropertyDescriptor,
          r = (o, a, g, s) => {
            for (
              var p = s > 1 ? void 0 : s ? E(a, g) : a, _ = o.length - 1, b;
              _ >= 0;
              _--
            )
              (b = o[_]) && (p = (s ? b(a, g, p) : b(p)) || p);
            return s && p && L(a, g, p), p;
          };
        const u = class ge {
          m_eCurLang = (0, T.sfN)(y.TS.LANGUAGE);
          m_rgHasData = (0, M.$Y)([], T.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new w.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(a) {
            return this.m_eCurLang != a
              ? ((this.m_eCurLang = a), this.GetCallback().Dispatch(a), !0)
              : !1;
          }
          SetHasLanguage(a) {
            a.forEach((g, s) => {
              this.m_rgHasData[s] != g && (this.m_rgHasData[s] = g);
            });
          }
          BHasLanguageData(a) {
            return this.m_rgHasData[a];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(a) {
            a != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = a);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              ge.s_globalSingletonStore ||
                (ge.s_globalSingletonStore = new ge()),
              ge.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        r([e.sH], u.prototype, "m_eCurLang", 2),
          r([e.sH], u.prototype, "m_rgHasData", 2),
          r([e.sH], u.prototype, "m_bHasLocalizationContext", 2),
          r([O.o], u.prototype, "GetCurEditLanguage", 1),
          r([O.o], u.prototype, "SetCurEditLanguage", 1),
          r([e.XI.bound], u.prototype, "SetHasLanguage", 1),
          r([O.o], u.prototype, "BHasLanguageData", 1);
        let P = u;
        function n() {
          return (0, l.q3)(() => P.Get().GetCurEditLanguage());
        }
      },
      61266: (H, W, t) => {
        "use strict";
        t.d(W, { T: () => E, m: () => L });
        var e = t(90626),
          l = t(13018),
          T = t(60298),
          M = t(10142),
          O = t(71742),
          y = t(3166),
          w = t(14616);
        function L(P) {
          const [n, o] = (0, e.useState)(!1),
            [a] = (0, e.useState)(() => r()),
            g = (0, e.useMemo)(
              () => ({
                country: y.TS.COUNTRY,
                language: y.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, e.useEffect)(() => (o(!0), u(a)), [a]),
            n
              ? (0, e.createElement)(w.V3, {
                  context: g,
                  serviceTransportOverride: a.GetServiceTransport(),
                  children: P.children,
                })
              : null
          );
        }
        function E(P) {
          const [n] = (0, e.useState)(() => r()),
            o = (0, e.useMemo)(
              () => ({
                country: y.TS.COUNTRY,
                language: y.TS.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: P.bIncludeUnpublished,
              }),
              [P.bIncludeUnpublished],
            );
          return (0, e.createElement)(w.V3, {
            context: o,
            serviceTransportOverride: n.GetServiceTransport(),
            children: P.children,
          });
        }
        function r() {
          const P = (0, y.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (
            (0, O.wT)(!!P, "require partnerbrowse_webapi_token"),
            (0, T.p)(new l.D(y.TS.WEBAPI_BASE_URL, P))
          );
        }
        function u(P) {
          return M.A.Initialize(
            P.GetServiceTransport(),
            y.iA.is_partner_member,
          );
        }
      },
      84676: (H, W, t) => {
        "use strict";
        t.d(W, {
          G6: () => P,
          Gg: () => a,
          MS: () => _,
          Ow: () => o,
          Sq: () => E,
          eR: () => r,
          gF: () => b,
          ik: () => u,
          t7: () => n,
          zX: () => p,
        });
        var e = t(41735),
          l = t.n(e),
          T = t(90626),
          M = t(72604),
          O = t(3367),
          y = t(54963),
          w = t(10142);
        function L(i, c, h = !0) {
          const m = h
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            D = h || CStoreItemCache.Get().BHasStoreItem(i, c, m) ? i : null,
            [C, x] = P(D, c, m),
            [A, f] = useState(null),
            [k, j] = P(A, c, m);
          useEffect(() => {
            C?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              f(C.GetParentAppID());
          }, [C]);
          let V = C?.GetShortDescription()
            ? StripBBCodeTags(C.GetShortDescription())
            : "";
          (!V || V.length === 0) &&
            k &&
            (V = k?.GetShortDescription()
              ? StripBBCodeTags(k.GetShortDescription())
              : "");
          const N = x == u && (!A || j == u);
          return [V, N];
        }
        const E = 1,
          r = 2,
          u = 3;
        function P(i, c, h, m) {
          const D = (0, T.useRef)(void 0),
            C = (0, T.useRef)(void 0),
            x = (0, y.CH)();
          D.current = i;
          const [A, f] = (0, T.useState)(void 0),
            {
              include_assets: k,
              include_release: j,
              include_platforms: V,
              include_all_purchase_options: N,
              include_screenshots: K,
              include_trailers: Y,
              include_ratings: ee,
              include_tag_count: oe,
              include_reviews: se,
              include_basic_info: z,
              include_supported_languages: I,
              include_full_description: v,
              include_included_items: S,
              include_assets_without_overrides: B,
              apply_user_filters: U,
              include_links: R,
              include_extra_details: Z,
              include_optin_registration_tags: $,
            } = h;
          if (
            ((0, T.useEffect)(() => {
              const J = {
                include_assets: k,
                include_release: j,
                include_platforms: V,
                include_all_purchase_options: N,
                include_screenshots: K,
                include_trailers: Y,
                include_ratings: ee,
                include_tag_count: oe,
                include_reviews: se,
                include_basic_info: z,
                include_supported_languages: I,
                include_full_description: v,
                include_included_items: S,
                include_assets_without_overrides: B,
                apply_user_filters: U,
                include_links: R,
                include_extra_details: Z,
                include_optin_registration_tags: $,
              };
              let te = null;
              return (
                !i ||
                  i < 0 ||
                  w.A.Get().BHasStoreItem(i, c, J) ||
                  (A !== void 0 && m && m == C.current) ||
                  (m !== C.current && (f(void 0), (C.current = m)),
                  (te = l().CancelToken.source()),
                  w.A.Get()
                    .QueueStoreItemRequest(i, c, J)
                    .then((X) => {
                      !te?.token.reason && D.current === i && f(X == M.R), x();
                    })),
                () => te?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              i,
              c,
              m,
              A,
              k,
              j,
              V,
              N,
              K,
              Y,
              ee,
              oe,
              se,
              z,
              I,
              v,
              S,
              B,
              U,
              R,
              Z,
              $,
              x,
            ]),
            !i)
          )
            return [null, r];
          if (A === !1) return [void 0, r];
          if (w.A.Get().BIsStoreItemMissing(i, c)) return [void 0, r];
          if (!w.A.Get().BHasStoreItem(i, c, h)) return [void 0, E];
          const q = w.A.Get().GetStoreItemWithLegacyVisibilityCheck(i, c);
          return q ? [q, u] : [null, r];
        }
        function n(i, c, h) {
          return P(i, O.c6.qI, c, h);
        }
        function o(i, c, h) {
          return P(i, O.c6.xO, c, h);
        }
        function a(i, c, h) {
          return P(i, O.c6.RD, c, h);
        }
        function g(i, c, h) {
          const [m, D] = P(i, c, h);
          let C;
          m?.GetStoreItemType() == EStoreItemType.k_EStoreItemType_Package &&
            !m.GetAssets()?.GetHeaderURL() &&
            m?.GetIncludedAppIDs().length == 1 &&
            (C = m.GetIncludedAppIDs()[0]);
          const [x, A] = n(C, h);
          return C && x?.BIsVisible() ? [x, A] : [m, D];
        }
        function s(i, c, h, m) {
          const D = (0, y.CH)(),
            {
              include_assets: C,
              include_release: x,
              include_platforms: A,
              include_all_purchase_options: f,
              include_screenshots: k,
              include_trailers: j,
              include_ratings: V,
              include_tag_count: N,
              include_reviews: K,
              include_basic_info: Y,
              include_supported_languages: ee,
              include_full_description: oe,
              include_included_items: se,
              include_assets_without_overrides: z,
              apply_user_filters: I,
              include_links: v,
              include_extra_details: S,
              include_optin_registration_tags: B,
            } = h;
          return (
            (0, T.useEffect)(() => {
              if (!i || i.length == 0) return;
              const R = {
                  include_assets: C,
                  include_release: x,
                  include_platforms: A,
                  include_all_purchase_options: f,
                  include_screenshots: k,
                  include_trailers: j,
                  include_ratings: V,
                  include_tag_count: N,
                  include_reviews: K,
                  include_basic_info: Y,
                  include_supported_languages: ee,
                  include_full_description: oe,
                  include_included_items: se,
                  include_assets_without_overrides: z,
                  apply_user_filters: I,
                  include_links: v,
                  include_extra_details: S,
                  include_optin_registration_tags: B,
                },
                Z = i.filter(
                  (J) =>
                    !(
                      w.A.Get().BHasStoreItem(J, c, R) ||
                      w.A.Get().BIsStoreItemMissing(J, c)
                    ),
                );
              if (Z.length == 0) return;
              const $ = l().CancelToken.source(),
                q = Z.map((J) => w.A.Get().QueueStoreItemRequest(J, c, R));
              return (
                Promise.all(q).then(() => {
                  $.token.reason || D();
                }),
                () => $.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              i,
              c,
              m,
              D,
              C,
              x,
              A,
              f,
              k,
              j,
              V,
              N,
              K,
              Y,
              ee,
              oe,
              se,
              z,
              I,
              v,
              S,
              B,
            ]),
            i
              ? i.every(
                  (R) =>
                    w.A.Get().BHasStoreItem(R, c, h) ||
                    w.A.Get().BIsStoreItemMissing(R, c),
                )
                ? i.every((R) =>
                    w.A.Get().GetStoreItemWithLegacyVisibilityCheck(R, c),
                  )
                  ? u
                  : r
                : E
              : r
          );
        }
        function p(i, c, h) {
          return s(i, O.c6.qI, c, h);
        }
        function _(i, c, h) {
          return s(i, O.c6.xO, c, h);
        }
        function b(i, c, h) {
          return s(i, O.c6.RD, c, h);
        }
        function d() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      51746: (H, W, t) => {
        "use strict";
        t.d(W, {
          EG: () => O,
          II: () => P,
          N1: () => n,
          S2: () => r,
          Uz: () => E,
          aL: () => L,
          ab: () => T,
          qR: () => M,
          zB: () => u,
        });
        var e = t(7742),
          l = t(72849);
        function T(o) {
          const a = o.toLowerCase();
          if (a.endsWith(".jpg") || a.endsWith(".jpeg")) return "image/jpeg";
          if (a.endsWith(".png")) return "image/png";
          if (a.endsWith(".gif")) return "image/gif";
          if (a.endsWith(".mp4")) return "video/mp4";
          if (a.endsWith(".webm")) return "video/webm";
          if (a.endsWith(".srt")) return "text/srt";
          if (a.endsWith(".vtt")) return "text/vtt";
          if (a.endsWith(".webp")) return "image/webp";
        }
        function M(o) {
          switch (o) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              o,
            ),
            ".jpg"
          );
        }
        function O(o) {
          switch (o) {
            case l.bg.iS:
              return ".jpg";
            case l.bg.CK:
              return ".gif";
            case l.bg.dU:
              return ".png";
            case l.bg.pJ:
              return ".webm";
            case l.bg.nn:
              return ".mp4";
            case l.bg.pi:
              return ".srt";
            case l.bg.k7:
              return ".vtt";
            case l.bg.wD:
              return ".webp";
          }
        }
        function y(o) {
          const a = (0, e.x0)(),
            g = new Image();
          return (
            (g.onload = () => a.resolve(g)),
            (g.onerror = (s) => {
              console.error("LoadImage failed to load the image, details", s),
                a.resolve(void 0);
            }),
            (g.src = o),
            a.promise
          );
        }
        function w(o) {
          const a = (0, e.x0)(),
            g = document.createElement("video");
          return (
            (g.preload = "metadata"),
            g.addEventListener("loadedmetadata", () => a.resolve(g)),
            (g.onerror = (s) => {
              console.error("LoadVideo failed to load the video, details", s),
                a.resolve(void 0);
            }),
            (g.src = o),
            a.promise
          );
        }
        function L(o) {
          return o.startsWith("image/");
        }
        function E(o) {
          return o.startsWith("video/");
        }
        function r(o, a) {
          return a ? w(o) : y(o);
        }
        async function u(o, a) {
          if (a) return w(URL.createObjectURL(o));
          {
            const g = (0, e.x0)(),
              s = new FileReader();
            (s.onload = () => g.resolve(s.result ?? void 0)),
              (s.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  s.error,
                ),
                  g.resolve(void 0);
              }),
              s.readAsDataURL(o);
            const p = await g.promise;
            return p ? y(p.toString()) : void 0;
          }
        }
        function P(o) {
          return o
            ? o instanceof HTMLVideoElement
              ? { width: o.videoWidth, height: o.videoHeight }
              : { width: o.width, height: o.height }
            : { width: 0, height: 0 };
        }
        function n(o, a) {
          if (!a) return o;
          const g = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const s of a)
            g.has(s.name.toLowerCase()) || (o[s.name] = s.value);
          return o;
        }
      },
      48127: (H, W, t) => {
        "use strict";
        t.d(W, { Gr: () => se, O9: () => j });
        var e = t(7850),
          l = t(65946),
          T = t(75844),
          M = t(90626),
          O = t(99412),
          y = t(32093),
          w = t(72849),
          L = t(64),
          E = t(38410),
          r = t(50109),
          u = t(58534),
          P = t(36707),
          n = t(18210),
          o = t(95603),
          a = t(71647),
          g = t.n(a);
        function s(z) {
          const {
              onDropFiles: I,
              renderDesciption: v,
              elAdditonalButtons: S,
              elOverrideDragAndDropText: B,
            } = z,
            [U, R] = (0, o.hk)(I),
            [Z, $] = (0, o.Ss)(I, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...U,
            className: (0, P.A)(
              R ? g().DragAndDropContainerDragging : g().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!v && v(),
              (0, e.jsx)("div", {
                children: B || (0, n.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: g().ImageUploadBar,
                children: [
                  Z,
                  (0, e.jsxs)("label", {
                    onClick: $,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, n.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: g().SelectImageButton,
                        children: (0, n.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              S,
              z.children,
            ],
          });
        }
        var p = t(95695),
          _ = t.n(p),
          b = t(2801),
          d = t(88003),
          i = t(64641),
          c = t.n(i),
          h = t(36118),
          m = t(85599),
          D = t(34592),
          C = t(82734),
          x = t(21254),
          A = t(27344),
          f = t.n(A),
          k = t(9472);
        function j(z) {
          const {
              imageUploader: I,
              fnUploadComplete: v,
              elOverrideDragAndDropText: S,
              forceResolution: B,
              elAdditonalButtons: U,
              rgRealmList: R,
            } = z,
            [Z, $] = (0, l.q3)(() => [
              I.GetUploadImages(),
              r.O.Get().GetCurEditLanguage(),
            ]),
            q = M.useCallback(
              async (X) => {
                let F = Array.from(X),
                  Q = !0;
                for (let ie = 0; ie < F.length; ie++) {
                  const ne = F[ie],
                    { language: ce } = (0, E.jj)(ne?.name, $);
                  try {
                    const re = (0, E.PD)(ce, $, R);
                    (Q = await I.AddImageForLanguage(ne, re)),
                      Q ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            ie +
                            " file=" +
                            ne.name,
                        ),
                        (0, d.pg)(
                          (0, e.jsx)(b.KG, {
                            strDescription: (0, n.we)(
                              "#ImagePicker_Error",
                              ne.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (re) {
                    let de = (0, D.H)(re);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + de.strErrorMsg,
                      de,
                    ),
                      (0, d.pg)(
                        (0, e.jsx)(b.KG, {
                          strDescription: (0, n.we)(
                            "#EventError_Code",
                            de.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return Q;
              },
              [$, I, R],
            ),
            J = M.useMemo(
              () =>
                U instanceof Array
                  ? U
                  : [
                      (0, e.jsx)(
                        M.Fragment,
                        { children: U },
                        "elAdditonalButtons",
                      ),
                    ],
              [U],
            );
          (0, l.q3)(() =>
            Z.map((X) => ({ a: X.GetCurrentImageOption(), b: X.language })),
          );
          const te = async () => {
            const X = await I.UploadAllImages(B);
            v?.(X);
          };
          return (0, e.jsxs)(s, {
            onDropFiles: q,
            elAdditonalButtons: J,
            elOverrideDragAndDropText: S,
            children: [
              (0, e.jsx)(M.Fragment, {
                children: (0, e.jsx)("div", {
                  className: f().UploadPreviewCtn,
                  children: Z.map((X) =>
                    (0, e.jsx)(
                      K,
                      {
                        asset: X,
                        forceResolution: B,
                        fnOnRemove: () => I.DeleteUploadImage(X),
                        languageRealms: R,
                      },
                      "arttabupload_" + X.filename + "_" + X.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(V, { imageUploader: I, fnOnUploadImageRequested: te }),
            ],
          });
        }
        function V(z) {
          const { imageUploader: I, fnOnUploadImageRequested: v } = z,
            [S] = (0, l.q3)(() => [I.GetUploadImages()]),
            B = S.some((R) => R.status == "pending"),
            U = S.some(
              (R) =>
                R.status == "waiting" ||
                R.status == "uploading" ||
                R.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: f().UploadPreviewButtonsCtn,
            children: [
              !!S.length &&
                (0, e.jsx)(u.$n, {
                  style: { margin: "8px" },
                  onClick: v,
                  disabled: !B,
                  children: (0, n.we)("#ImageUpload_Upload"),
                }),
              !!S.length &&
                (0, e.jsx)(u.$n, {
                  style: { margin: "8px" },
                  onClick: I.ClearImages,
                  disabled: U,
                  children: (0, n.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function N(z, I, v, S, B) {
          let U = new Array();
          return (
            z.GetUploadImages().forEach((R) => {
              U.push(
                jsx(
                  K,
                  {
                    asset: R,
                    forceResolution: v,
                    forceFileType: S,
                    fnOnRemove: () => z.DeleteUploadImage(R),
                    languageRealms: B,
                  },
                  I + R.file + "_" + R.uploadTime,
                ),
              );
            }),
            U
          );
        }
        const K = (0, T.PA)(Y);
        function Y(z) {
          const I = (F) => {
              if (F instanceof L.M7) {
                F.ResetImage();
                const Q = window,
                  ie = (0, e.jsx)(x.q, {
                    ownerWin: Q,
                    uploadFile: F,
                    forceResolution: z.forceResolution,
                    fileType: z.forceFileType || w.bg.dU,
                  });
                (0, d.HT)(ie, Q, "CropModal", {
                  strTitle: (0, n.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  F.fileType,
                  JSON.stringify(F.GetCurrentImageOption()),
                );
            },
            { asset: v, fnOnRemove: S, languageRealms: B } = z,
            U = v.ImageOptions?.map((F) => {
              let Q = F?.fnGetLabelText(),
                ie;
              F.bEnforceDimensions && (Q += ` - ${F.width}x${F.height}`),
                F.bDeprecated &&
                  ((Q += ` ${(0, n.we)("#ImageUpload_Deprecated")}`),
                  (ie = (0, n.we)("#ImageUpload_Deprecated_ttip")));
              let ne;
              return (
                (v.BIsOriginalMinimumDimensions(F) &&
                  v.FileTypeMatchesImageTypes(F)) ||
                  (ne = f().ImageDimensionTooSmall),
                { label: Q, data: F, strOptionClass: ne, tooltip: ie }
              );
            }).filter((F) => !F.data.bHiddenFromDropdown),
            R = {
              pending: (0, n.we)("#ImageUpload_Pending"),
              waiting: (0, n.we)("#ImageUpload_Waiting"),
              uploading: (0, n.we)("#ImageUpload_Uploading"),
              processing: (0, n.we)("#ImageUpload_Processing"),
              success: (0, n.we)("#ImageUpload_SuccessCard"),
              failed: (0, n.we)("#ImageUpload_Failed"),
            },
            Z = v.BSupportsLanguages()
              ? se(
                  n.A0.GetLanguageListForRealms(
                    B ?? [y.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            $ = v.IsValidAssetType(z.forceResolution, z.forceFileType),
            q = v.status == "pending";
          let J = R[v.status];
          v.status == "pending" &&
            ($.needsCrop
              ? (J = (0, n.we)("#ImageUpload_NeedsCrop"))
              : $.error && (J = (0, n.we)("#ImageUpload_Invalid")));
          let te;
          const X = v.GetCurrentImageOption();
          return (
            X && (te = U?.find((F) => F.data.sKey == X.sKey)?.data),
            te || (te = U?.[0]?.data),
            (0, e.jsxs)("div", {
              className: f().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: f().UploadPreviewDelete,
                  onClick: () => S(v),
                  children: (0, e.jsx)(h.sED, {}),
                }),
                (0, e.jsx)(ee, { asset: v }),
                Z &&
                  (0, e.jsx)(u.m, {
                    strDropDownClassName: _().DropDownScroll,
                    rgOptions: Z,
                    selectedOption: v.language,
                    onChange: (F) => (v.language = F.data),
                    disabled: !q,
                  }),
                U &&
                  U?.length > 1 &&
                  (0, e.jsx)(u.m, {
                    label: v.GetImageOptionLabel(),
                    rgOptions: U,
                    selectedOption: te,
                    onChange: (F) => v.SetCurrentImageOption(F.data),
                    disabled: !q,
                  }),
                q &&
                  $.warnings?.map((F, Q) =>
                    (0, e.jsx)(
                      "div",
                      { className: f().UploadPreviewWarning, children: F },
                      `warning${Q}`,
                    ),
                  ),
                q &&
                  $.messages?.map((F, Q) =>
                    (0, e.jsx)(
                      "div",
                      { className: f().UploadPreviewMessage, children: F },
                      `message${Q}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, P.A)({
                    [_().FlexColumnContainer]: !0,
                    [f().UploadPreviewError]: v.status == "failed",
                  }),
                  children: [
                    J,
                    (0, k.o)(v.status) &&
                      (0, e.jsx)("div", {
                        className: c().FlexCenter,
                        children: (0, e.jsx)(m.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().UploadPreviewError,
                  children: v.message,
                }),
                q &&
                  $.error &&
                  (0, e.jsx)("div", {
                    className: f().UploadPreviewError,
                    children: $.error,
                  }),
                q &&
                  $.needsCrop &&
                  (0, e.jsx)(u.jn, {
                    onClick: () => I(v),
                    children: (0, n.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function ee(z) {
          const { asset: I } = z;
          return I.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: f().PreviewImgCtn,
                onClick: (v) =>
                  (0, d.pg)((0, e.jsx)(oe, { asset: I }), (0, C.uX)(v)),
                children: [
                  (0, e.jsxs)("span", {
                    className: f().PreviewImgInfo,
                    children: [I.width, " x ", I.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: I.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: f().PreviewImgCtn,
                style: { backgroundImage: `url(${I.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: f().PreviewImgInfo,
                  children: [I.width, " x ", I.height],
                }),
              });
        }
        function oe(z) {
          const { asset: I, closeModal: v } = z;
          return (0, e.jsx)(b.o0, {
            bAlertDialog: !0,
            closeModal: v,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: I.dataUrl }),
            }),
          });
        }
        function se(z) {
          const I = [],
            v = new Array();
          for (const S of z) {
            if (S == O.X51) continue;
            const B = (0, n.we)("#Language_" + (0, O.LgB)(S));
            v.push({ label: B, data: S });
          }
          return (
            v.sort((S, B) => S.label.localeCompare(B.label)),
            v.forEach((S) => I.push({ label: S.label, data: S.data })),
            v
          );
        }
      },
      43308: (H, W, t) => {
        "use strict";
        t.d(W, { K: () => p });
        var e = t(7850),
          l = t(90626),
          T = t(92298),
          M = t.n(T),
          O = t(44894),
          y = t(7582),
          w = t(95695),
          L = t.n(w),
          E = t(36707),
          r = t(18210),
          u = t(71421),
          P = t(12916),
          n = t.n(P),
          o = t(87937),
          a = t.n(o);
        const g = "hh:mm a",
          s = "HH:mm";
        function p(D) {
          const {
            nLatestTime: C,
            nEarliestTime: x,
            fnGetTimeToUpdate: A,
            onError: f,
            strAlsoShowTimeZone: k,
            disabled: j,
            bNoDefaultDate: V,
            className: N,
            strDescToolTip: K,
            strDescription: Y,
            bShowTimeZone: ee,
            strInvalidDateTimeLocalizedMsg: oe,
            fnIsValidDateTime: se,
            bWeekdaysOnly: z,
            fnSetTimeToUpdate: I,
            bForce24HourFormat: v,
            bAllowClear: S,
          } = D;
          let B = d() || v ? s : g;
          const U = A(),
            [R, Z] = l.useState(U > 0 ? a()(U * 1e3) : null),
            [$, q] = l.useState(0),
            [J, te] = l.useState(),
            [X, F] = l.useState(),
            Q = m(J, X, oe, se, f),
            ie = !f && Q;
          let ne;
          if (C && x && C == x && x > y.HD.GetTimeNowWithOverride()) {
            const G = a().unix(x);
            (ne = {
              hours: { max: G.hour(), min: G.hour(), step: 0 },
              minutes: { max: G.minute(), min: G.minute(), step: 0 },
              seconds: { max: G.seconds(), min: G.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (B = s);
          }
          let ce;
          !U && x && !V && (ce = a().unix(x));
          const re = a().tz.guess(),
            de = a().unix(U).tz(re),
            le = !!k && re != k && a().unix(U).tz(k),
            pe = (G) => {
              if (j) return;
              F(null);
              const he = A(),
                ae = a().unix(he || y.HD.GetTimeNowWithOverride());
              (G = G.clone()),
                G.hour(ae.hour()),
                G.minute(ae.minute()),
                G.second(0),
                I(G.unix()),
                Z(G);
            },
            { fnOnInput: me, fnOnInputBlur: _e, fnOnChange: fe } = _(i, pe, F),
            Pe = (G) => {
              if (j) return;
              te(null);
              let he = A(),
                ae = 0;
              if (!he)
                ae =
                  a().unix(x).hour(0).second(0).minutes(0).unix() +
                  3600 * G.hour() +
                  60 * G.minutes();
              else {
                const ue = a().unix(he);
                (G = G.clone()),
                  G.year(ue.year()),
                  G.month(ue.month()),
                  G.date(ue.date()),
                  (ae = G.unix());
              }
              I(ae), Z(a().unix(ae));
            },
            { fnOnInput: Ee, fnOnInputBlur: De, fnOnChange: Ie } = _(c, Pe, te),
            ve = () => {
              j || (I(0), Z(null), F(null), te(null), q((G) => G + 1));
            },
            Te = S && !j && U > 0;
          return (0, e.jsxs)("div", {
            className: (0, E.A)(n().EventTimeSection, N),
            children: [
              (0, e.jsxs)("div", {
                className: (0, E.A)(n().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(u.he, {
                    toolTipContent: K,
                    direction: "top",
                    children: !!Y && (0, e.jsx)("span", { children: Y }),
                  }),
                  ie &&
                    (0, e.jsxs)("span", {
                      className: n().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: O.A }), ie],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: L().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, E.A)(L().InputBorder, n().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        M(),
                        {
                          onChange: fe,
                          timeFormat: !1,
                          value: X ?? R,
                          isValidDate: (G) => !j && h(x, C, z, G),
                          initialValue: ce,
                          inputProps: {
                            placeholder: (0, r.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, E.A)(
                              n().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: j,
                            onChange: (G) => me(G.currentTarget.value),
                            onBlur: (G) => _e(G.currentTarget.value),
                          },
                        },
                        "date" + $,
                      ),
                      !!le &&
                        (0, e.jsx)("div", {
                          className: n().PacificTimeHint,
                          children: le.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, E.A)(L().InputBorder, n().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        M(),
                        {
                          onChange: Ie,
                          dateFormat: !1,
                          timeFormat: B,
                          timeConstraints: ne,
                          value: J ?? R,
                          inputProps: {
                            placeholder: (0, r.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, E.A)(
                              n().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: j,
                            onChange: (G) => Ee(G.currentTarget.value),
                            onBlur: (G) => De(G.currentTarget.value),
                          },
                        },
                        "time" + $,
                      ),
                      !!le &&
                        (0, e.jsx)("div", {
                          className: n().PacificTimeHint,
                          children: le.format("LT"),
                        }),
                    ],
                  }),
                  ee &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: n().TimeZone,
                          children: de.zoneAbbr(),
                        }),
                        !!le &&
                          (0, e.jsx)("div", {
                            className: n().TimeZone,
                            children: le.zoneAbbr(),
                          }),
                      ],
                    }),
                  Te &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: n().ClearButton,
                      onClick: ve,
                      children: (0, r.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!ne &&
                (0, e.jsx)("div", {
                  children: (0, r.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function _(D, C, x) {
          const [A, f] = l.useState(!1);
          return {
            fnOnInput: (N) => {
              x(N), f(!0);
            },
            fnOnInputBlur: (N) => {
              if (A) {
                const K = D(N);
                K.isValid() && C(K);
              }
              f(!1);
            },
            fnOnChange: (N) => {
              if (!A)
                if (typeof N == "string") {
                  const K = D(N);
                  K.isValid() && C(K);
                } else C(N);
            },
          };
        }
        function b() {
          const C = a()("2025-01-14").format("L").split(/[-/.]/),
            x = C.indexOf("14");
          return C.indexOf("01") < x;
        }
        function d() {
          return a()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function i(D) {
          return a()(D, b() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function c(D) {
          return a()(D, [g, s], !1);
        }
        function h(D, C, x, A) {
          const f = a().unix(D).hour(0).seconds(0).minute(0);
          let k = A.unix() >= f.unix();
          if (k && C && C >= D) {
            const j = a().unix(C).hour(23).minute(59).seconds(59);
            k = A.unix() <= j.unix();
          }
          return (
            k && x && (A.weekday() == 0 || A.weekday() == 6) && (k = !1), k
          );
        }
        function m(D, C, x, A, f) {
          const k = A && A(),
            j = C && !i(C).isValid(),
            V = D && !c(D).isValid(),
            N = V || j || typeof k == "string" || k === !1;
          let K = null;
          return (
            N &&
              ((K = (0, r.we)(
                x || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              V
                ? (K = (0, r.we)("#DateTimePicker_Time_CannotParse"))
                : j
                  ? (K = (0, r.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof k == "string" && (K = k)),
            l.useEffect(() => {
              f && f(K);
            }, [K, f]),
            K
          );
        }
      },
      79167: (H, W, t) => {
        "use strict";
        t.d(W, { I: () => g });
        var e = t(7850),
          l = t(90626),
          T = t(54963),
          M = t(75844),
          O = t(8323),
          y = t(18210),
          w = t(58534),
          L = t(36118),
          E = t(81315),
          r = t.n(E),
          u = t(13854),
          P = Object.defineProperty,
          n = Object.getOwnPropertyDescriptor,
          o = (s, p, _, b) => {
            for (
              var d = b > 1 ? void 0 : b ? n(p, _) : p, i = s.length - 1, c;
              i >= 0;
              i--
            )
              (c = s[i]) && (d = (b ? c(p, _, d) : c(d)) || d);
            return b && d && P(p, _, d), d;
          },
          a = ((s) => (
            (s.topleft = "topleft"),
            (s.top = "top"),
            (s.topright = "topright"),
            (s.left = "left"),
            (s.middle = "middle"),
            (s.right = "right"),
            (s.bottomleft = "bottomleft"),
            (s.bottom = "bottom"),
            (s.bottomright = "bottomright"),
            s
          ))(a || {});
        let g = class extends l.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new O.Ji();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(s) {
            super(s),
              (this.state = {
                curLeftPosPct: this.props.xPosPct,
                curTopPosPct: this.props.yPosPct,
                curRightPosPct:
                  100 - (this.props.widthPct + this.props.xPosPct),
                curBottomPosPct:
                  100 - (this.props.yPosPct + this.props.heightPct),
                curWidthPct: this.props.widthPct,
                curHeightPct: this.props.heightPct,
                EdgeDown: void 0,
                text_link_url: this.props.link_url,
                text_link_description: this.props.link_description,
                bEditingLink: !1,
                valid_link: this.validateUrl(this.props.link_url),
              }),
              (this.m_strDescription = this.props.link_description ?? ""),
              (this.m_aspectRatio =
                this.props.heightPct > 0 && this.props.widthPct > 0
                  ? this.props.widthPct / this.props.heightPct
                  : 1);
          }
          LinkRegionBoxRef(s) {
            this.m_elLinkRegionBox = s;
          }
          OnMouseDown(s, p) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (_) => {
                this.OnMouseUp(_, p);
              }),
              (this.m_fnMouseMove = (_) => {
                this.OnMouseMove(_, p);
              }),
              this.setState({ EdgeDown: p }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((s.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((s.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              )),
              s.preventDefault(),
              s.stopPropagation();
          }
          OnMouseMove(s, p) {
            if (this.state.EdgeDown !== void 0) {
              switch ((s.shiftKey && this.m_fnMouseUp(), p)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(s.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(s.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(s.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(s.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(s.clientY),
                    curLeftPosPct: this.CalcLeftEdge(s.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(s.clientY),
                    curRightPosPct: this.CalcRightEdge(s.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(s.clientX),
                    curBottomPosPct: this.CalcBottomEdge(s.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(s.clientX),
                    curBottomPosPct: this.CalcBottomEdge(s.clientY),
                  });
                  break;
                }
                case "middle": {
                  const _ = (0, u.OQ)(
                      this.CalcLeftEdge(s.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    b = 100 - (_ + this.state.curWidthPct),
                    d = (0, u.OQ)(
                      this.CalcTopEdge(s.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    i = 100 - (d + this.state.curHeightPct),
                    c = {
                      curLeftPosPct: _,
                      curRightPosPct: b,
                      curTopPosPct: d,
                      curBottomPosPct: i,
                    };
                  this.setState(c);
                  break;
                }
                default:
                  break;
              }
              s.preventDefault(), s.stopPropagation();
            }
          }
          IsValidPct(s) {
            return s >= 0 && s <= 100;
          }
          UpdateState(s) {
            let p =
                s.curTopPosPct !== void 0
                  ? s.curTopPosPct
                  : this.state.curTopPosPct,
              _ =
                s.curBottomPosPct !== void 0
                  ? s.curBottomPosPct
                  : this.state.curBottomPosPct,
              b =
                s.curLeftPosPct !== void 0
                  ? s.curLeftPosPct
                  : this.state.curLeftPosPct,
              d =
                s.curRightPosPct !== void 0
                  ? s.curRightPosPct
                  : this.state.curRightPosPct,
              i = (0, u.OQ)(
                100 - d - b,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              c = (0, u.OQ)(
                100 - _ - p,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (s.curLeftPosPct !== void 0 || s.curRightPosPct !== void 0
                ? (c = i / this.m_aspectRatio)
                : (i = c * this.m_aspectRatio)),
              s.curLeftPosPct !== void 0
                ? (b = 100 - d - i)
                : (d = 100 - (b + i)),
              s.curTopPosPct !== void 0
                ? (p = 100 - _ - c)
                : (_ = 100 - (p + c));
            const h = 100 - d - b,
              m = 100 - _ - p;
            this.IsValidPct(b) &&
              this.IsValidPct(d) &&
              this.IsValidPct(p) &&
              this.IsValidPct(_) &&
              this.IsValidPct(h) &&
              this.IsValidPct(m) &&
              this.setState({
                curLeftPosPct: b,
                curRightPosPct: d,
                curTopPosPct: p,
                curBottomPosPct: _,
              });
          }
          GetXPercent(s) {
            return this.m_rectLinkRegion
              ? ((s - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(s) {
            return this.m_rectLinkRegion
              ? ((s - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(s) {
            return (0, u.OQ)(this.GetXPercent(s), 0, 100);
          }
          CalcRightEdge(s) {
            return (0, u.OQ)(
              100 - (this.GetXPercent(s) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(s) {
            return (0, u.OQ)(this.GetYPercent(s), 0, 100);
          }
          CalcBottomEdge(s) {
            return (0, u.OQ)(
              100 - (this.GetYPercent(s) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(s, p) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({ EdgeDown: void 0 }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              }),
              this.m_listeners.Unregister();
          }
          async HandleDelete() {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          }
          OnSetLinkURLChange(s) {
            this.setState({
              text_link_url: s.target.value,
              valid_link: this.validateUrl(s.target.value),
            });
          }
          OnSetLinkDescriptionChange(s) {
            this.setState({ text_link_description: s.target.value });
          }
          validateUrl(s) {
            return s != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  s,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({ bEditingLink: !this.state.bEditingLink }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              });
          }
          OnEditLink() {
            this.setState({ bEditingLink: !this.state.bEditingLink });
          }
          render() {
            let s = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              p = r().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (p += ` ${r().EdgeDown} ` + r()[this.state.EdgeDown]),
              (0, e.jsxs)("div", {
                className: p,
                style: s,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, e.jsxs)("div", {
                    className: r().LinkRegionGridBox,
                    children: [
                      (0, e.jsx)("div", {
                        className: `${r().LinkRegionEdge} ${r().TopLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${r().LinkRegionEdge} ${r().Top}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "top");
                        },
                      }),
                      (0, e.jsx)("div", {
                        className: `${r().LinkRegionEdge} ${r().TopRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${r().LinkRegionEdge} ${r().Left}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "left");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsxs)("div", {
                        className: `${r().LinkRegionEdge} ${r().Middle}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, e.jsx)("div", {
                              className: r().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, e.jsx)(L.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, e.jsx)("div", {
                              className: r().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, e.jsx)(L.xv8, {}),
                            }),
                          (0, e.jsxs)("div", {
                            className: r().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: `${r().LinkRegionEdge} ${r().Right}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "right");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${r().LinkRegionEdge} ${r().BottomLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${r().LinkRegionEdge} ${r().Bottom}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${r().LinkRegionEdge} ${r().BottomRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, e.jsxs)("div", {
                      className: r().LinkRegionInfo,
                      children: [
                        (0, e.jsx)(w.pd, {
                          className: r().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, y.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, e.jsx)(w.pd, {
                          className: r().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, y.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, y.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, e.jsxs)("div", {
                          className: r().LinkRegionButtonContainer,
                          children: [
                            (0, e.jsxs)(w.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, y.we)("#Button_OK"), " "],
                            }),
                            (0, e.jsxs)(w.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, y.we)("#Button_Cancel")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          }
        };
        o([T.oI], g.prototype, "LinkRegionBoxRef", 1),
          o([T.oI], g.prototype, "OnMouseDown", 1),
          o([T.oI], g.prototype, "OnMouseMove", 1),
          o([T.oI], g.prototype, "OnMouseUp", 1),
          o([T.oI], g.prototype, "HandleDelete", 1),
          o([T.oI], g.prototype, "OnSetLinkURLChange", 1),
          o([T.oI], g.prototype, "OnSetLinkDescriptionChange", 1),
          o([T.oI], g.prototype, "OnSaveLink", 1),
          o([T.oI], g.prototype, "OnEditLink", 1),
          (g = o([M.PA], g));
      },
      21254: (H, W, t) => {
        "use strict";
        t.d(W, { q: () => s, t: () => _ });
        var e = t(7850),
          l = t(90626),
          T = t(25279),
          M = t(72849),
          O = t(58534),
          y = t(79167),
          w = t(2801),
          L = t(36707),
          E = t(18210),
          r = t(54963),
          u = t(50666),
          P = t.n(u),
          n = t(82734),
          o = Object.defineProperty,
          a = Object.getOwnPropertyDescriptor,
          g = (b, d, i, c) => {
            for (
              var h = c > 1 ? void 0 : c ? a(d, i) : d, m = b.length - 1, D;
              m >= 0;
              m--
            )
              (D = b[m]) && (h = (c ? D(d, i, h) : D(h)) || h);
            return c && h && o(d, i, h), h;
          };
        class s extends l.Component {
          state = {
            region: {
              xPosPct: 0,
              yPosPct: 0,
              widthPct:
                (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              heightPct:
                (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            },
          };
          async OnCrop() {
            const d = this.props.uploadFile.GetCanvasImageSource();
            d &&
              (await p(
                this.props.uploadFile,
                d,
                (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
                (this.state.region.yPosPct / 100) *
                  this.props.uploadFile.height,
                (this.state.region.widthPct / 100) *
                  this.props.uploadFile.width,
                (this.state.region.heightPct / 100) *
                  this.props.uploadFile.height,
                this.GetDestWidth(),
                this.GetDestHeight(),
                this.props.fileType,
              )),
              this.props.closeModal?.();
          }
          UpdateCrop(d, i) {
            this.setState({ region: i });
          }
          GetDestWidth() {
            const { uploadFile: d, forceResolution: i } = this.props;
            if (i) return i.width;
            const c = d.GetCurrentImageOption();
            if (!c) return 0;
            const h = T.Fj[c.artworkType].width;
            return c ? (0, T.qj)(h) : 0;
          }
          GetDestHeight() {
            const { uploadFile: d, forceResolution: i } = this.props;
            if (i) return i.width;
            const c = d.GetCurrentImageOption();
            if (!c) return 0;
            const h = T.Fj[c.artworkType].height;
            return c ? (0, T.qj)(h) : 0;
          }
          GetLargestBoxThatFits(d, i, c, h) {
            let m = c,
              D = (m * i) / Math.max(d, 1);
            return (
              D > h && ((D = h), (m = (D * d) / Math.max(i, 1))),
              { width: m, height: D }
            );
          }
          GetPreviewWindowStyle() {
            const { region: d } = this.state,
              i = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              c = i.width,
              h = i.height,
              m = 1 / Math.max(d.widthPct / 100, 1e-4),
              D = 1 / Math.max(d.heightPct / 100, 1e-4),
              C = (this.props.uploadFile.width * d.xPosPct) / 100,
              x = (this.props.uploadFile.height * d.yPosPct) / 100,
              A = (c * m) / this.props.uploadFile.width,
              f = (h * D) / this.props.uploadFile.height,
              k = -C * A,
              j = -x * f;
            return {
              width: c,
              height: h,
              backgroundPosition: `${k}px ${j}px`,
              backgroundSize: `${100 * m}% ${100 * D}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const d = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              i = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              c = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, e.jsx)(w.x_, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, e.jsxs)("div", {
                className: (0, L.A)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, e.jsx)(O.iK, {
                    children: (0, E.we)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, L.A)("DialogBodyText"),
                    children: (0, E.we)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, e.jsxs)("div", {
                    className: u.CropImage,
                    style: { width: c.width, height: c.height },
                    children: [
                      (0, e.jsx)("img", {
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        },
                        src: this.props.uploadFile.dataUrl,
                      }),
                      (0, e.jsx)(y.I, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: d,
                        heightMinPct: i,
                        widthPct: d,
                        heightPct: i,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: u.CropPreviewGroup,
                    children: [
                      (0, e.jsx)("div", {
                        className: u.CropPreviewLabel,
                        children: (0, E.we)("#ImageUpload_CropPreview"),
                      }),
                      (0, e.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(O.jn, {
                    onClick: this.OnCrop,
                    children: (0, E.we)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        g([r.oI], s.prototype, "OnCrop", 1),
          g([r.oI], s.prototype, "UpdateCrop", 1);
        async function p(b, d, i, c, h, m, D, C, x) {
          return new Promise((A, f) => {
            const k = _(x);
            if (!k) {
              f("Invalid format provided");
              return;
            }
            const j = document.createElement("canvas");
            (j.width = D),
              (j.height = C),
              j.getContext("2d")?.drawImage(d, i, c, h, m, 0, 0, D, C),
              j.toBlob((Y) => {
                const ee = j.toDataURL(k);
                if (x !== M.bg.dU && ee.startsWith("data:image/png")) {
                  f("Unable to encode into the requested file format");
                  return;
                }
                if (!Y) {
                  f("Unable to apply crop into image");
                  return;
                }
                (b.file = (0, n.pE)(Y, b.filename)),
                  (b.width = D),
                  (b.height = C),
                  (b.dataUrl = ee),
                  (b.uploadTime = Date.now()),
                  (b.bCropped = !0),
                  A();
              });
          });
        }
        function _(b) {
          switch (b) {
            case M.bg.dU:
              return "image/png";
            case M.bg.iS:
              return "image/jpeg";
          }
        }
      },
      95603: (H, W, t) => {
        "use strict";
        t.d(W, { Ss: () => O, hk: () => y });
        var e = t(7850),
          l = t(90626),
          T = t(72739),
          M = t(82734);
        function O(r, u) {
          const P = l.useRef(void 0),
            n = l.useCallback(
              (g) => {
                g.currentTarget.files.length > 0 &&
                  (r(g.currentTarget.files), (g.currentTarget.value = ""));
              },
              [r],
            ),
            o = l.useCallback(() => P.current.click(), []);
          return [
            T.createPortal(
              (0, e.jsx)("form", {
                onSubmit: L,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...u,
                  type: "file",
                  ref: P,
                  onChange: n,
                }),
              }),
              window.document.body,
            ),
            o,
          ];
        }
        function y(r) {
          const [u, P] = l.useState(!1),
            n = l.useCallback((p) => {
              ((p.dataTransfer.files && p.dataTransfer.files[0]) ||
                (p.dataTransfer.types && p.dataTransfer.types[0] == "Files")) &&
                P(!0);
            }, []),
            o = l.useCallback((p) => {
              M.NO(p) && P(!1);
            }, []),
            a = l.useCallback(() => P(!1), []),
            g = u ? L : void 0,
            s = l.useCallback(
              (p) => {
                p.dataTransfer.files?.length &&
                  (r(p.dataTransfer.files, p),
                  p.preventDefault(),
                  p.stopPropagation()),
                  P(!1);
              },
              [r],
            );
          return [
            {
              onDragEnter: n,
              onDragLeave: o,
              onDragEnd: a,
              onDragOver: g,
              onDrop: s,
            },
            u,
          ];
        }
        async function w(r, u = 1e3) {
          return await new Promise((P, n) => {
            const o = new Image();
            (o.src = r),
              (o.onload = () => P("success")),
              (o.onerror = () => P("error")),
              u > 0 && window.setTimeout(() => P("timeout"), u);
          });
        }
        function L(r) {
          r.preventDefault();
        }
        function E(r) {
          switch (r.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const u = r.name.match(/(?<=\.)[^.]+$/);
              return u ? u[0] : void 0;
          }
        }
      },
      27828: (H) => {
        H.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      71647: (H) => {
        H.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      27344: (H) => {
        H.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      12916: (H) => {
        H.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
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
      81315: (H) => {
        H.exports = {
          LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
          EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
          LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
          LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
          TopLeft: "Clgi---P85XXv25yLZwB0",
          Top: "_2Z9VyBAzofV3JvK__dECbX",
          TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
          Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
          Middle: "_1HecozzoSZfUZSci9dLkxN",
          LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
          LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
          Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
          BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
          Bottom: "sIHlK9sN2255-irERXD_V",
          BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
          topleft: "_3W096h6Ka6U7sOZVa9lXQo",
          top: "_1iRW1Msfh60zHqD-xe4EAk",
          topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
          left: "_2iBrmAEyXuaKAeZ-g-4CPF",
          right: "_15t6A4l27DY4KRL1aAUTTS",
          bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
          bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
          bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
          middle: "_1CS75ZrrDXna6xatw5ZvPR",
          LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
          DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
          LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
          LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
        };
      },
      64641: (H) => {
        H.exports = {
          v6: "_2LxgdMcpWJRjkxZKbmeEEb",
          SubText: "vg0EOhKTLB3tLvshHMr7l",
          AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
          GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
          AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
          STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
          ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
          EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
          Small: "_3M4j828iWSVEZZAkypcBi1",
          FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
          ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
          MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
          SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
          RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
        };
      },
      50666: (H) => {
        H.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
      44894: (H, W, t) => {
        "use strict";
        t.d(W, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
