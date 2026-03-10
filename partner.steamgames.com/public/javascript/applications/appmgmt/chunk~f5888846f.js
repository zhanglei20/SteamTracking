/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4829],
  {
    3577: (e, t, n) => {
      function i() {
        let e, t;
        return {
          promise: new Promise((n, i) => {
            (e = n), (t = i);
          }),
          resolve: e,
          reject: t,
        };
      }
      function r(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      n.d(t, { x0: () => i, yI: () => r });
    },
    63556: (e, t, n) => {
      n.d(t, { E: () => _, O: () => d });
      var i = n(34629),
        r = n(14947),
        s = n(65946),
        o = n(22837),
        a = n(62490),
        u = n(6419),
        l = n(78327),
        c = n(91986);
      class d {
        m_eCurLang = (0, o.sf)(l.TS.LANGUAGE);
        m_rgHasData = (0, a.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new c.l();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(e) {
          return (
            this.m_eCurLang != e &&
            ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
          );
        }
        SetHasLanguage(e) {
          e.forEach((e, t) => {
            this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
          });
        }
        BHasLanguageData(e) {
          return this.m_rgHasData[e];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(e) {
          e != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = e);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            d.s_globalSingletonStore ||
              ((d.s_globalSingletonStore = new d()),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.DUS = d.s_globalSingletonStore)),
            d.s_globalSingletonStore
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
      }
      function _() {
        return (0, s.q3)(() => d.Get().GetCurEditLanguage());
      }
      (0, i.Cg)([r.sH], d.prototype, "m_eCurLang", void 0),
        (0, i.Cg)([r.sH], d.prototype, "m_rgHasData", void 0),
        (0, i.Cg)([r.sH], d.prototype, "m_bHasLocalizationContext", void 0),
        (0, i.Cg)([u.o], d.prototype, "GetCurEditLanguage", null),
        (0, i.Cg)([u.o], d.prototype, "SetCurEditLanguage", null),
        (0, i.Cg)([r.XI.bound], d.prototype, "SetHasLanguage", null),
        (0, i.Cg)([u.o], d.prototype, "BHasLanguageData", null);
    },
    55263: (e, t, n) => {
      n.d(t, {
        G6: () => u,
        Gg: () => d,
        MS: () => m,
        Ow: () => c,
        gF: () => p,
        t7: () => l,
        zX: () => g,
      });
      var i = n(41735),
        r = n.n(i),
        s = n(90626),
        o = n(73745),
        a = n(16021);
      function u(e, t, n, i) {
        const u = (0, s.useRef)(void 0),
          l = (0, s.useRef)(void 0),
          c = (0, o.CH)();
        u.current = e;
        const [d, _] = (0, s.useState)(void 0),
          {
            include_assets: g,
            include_release: m,
            include_platforms: p,
            include_all_purchase_options: f,
            include_screenshots: h,
            include_trailers: v,
            include_ratings: w,
            include_tag_count: C,
            include_reviews: S,
            include_basic_info: b,
            include_supported_languages: L,
            include_full_description: G,
            include_included_items: H,
            include_assets_without_overrides: I,
            apply_user_filters: k,
            include_links: y,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            const n = {
              include_assets: g,
              include_release: m,
              include_platforms: p,
              include_all_purchase_options: f,
              include_screenshots: h,
              include_trailers: v,
              include_ratings: w,
              include_tag_count: C,
              include_reviews: S,
              include_basic_info: b,
              include_supported_languages: L,
              include_full_description: G,
              include_included_items: H,
              include_assets_without_overrides: I,
              apply_user_filters: k,
              include_links: y,
            };
            let s = null;
            return (
              !e ||
                e < 0 ||
                a.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && i && i == l.current) ||
                (i !== l.current && (_(void 0), (l.current = i)),
                (s = r().CancelToken.source()),
                a.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    s?.token.reason || u.current !== e || _(1 == t), c();
                  })),
              () => s?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, d, g, m, p, f, h, v, w, C, S, b, L, G, H, I, k, y, c]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (a.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!a.A.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const E = a.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return E ? [E, 3] : [null, 2];
      }
      function l(e, t, n) {
        return u(e, 0, t, n);
      }
      function c(e, t, n) {
        return u(e, 2, t, n);
      }
      function d(e, t, n) {
        return u(e, 1, t, n);
      }
      function _(e, t, n, i) {
        const u = (0, o.CH)(),
          {
            include_assets: l,
            include_release: c,
            include_platforms: d,
            include_all_purchase_options: _,
            include_screenshots: g,
            include_trailers: m,
            include_ratings: p,
            include_tag_count: f,
            include_reviews: h,
            include_basic_info: v,
            include_supported_languages: w,
            include_full_description: C,
            include_included_items: S,
            include_assets_without_overrides: b,
            apply_user_filters: L,
            include_links: G,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: l,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: _,
                include_screenshots: g,
                include_trailers: m,
                include_ratings: p,
                include_tag_count: f,
                include_reviews: h,
                include_basic_info: v,
                include_supported_languages: w,
                include_full_description: C,
                include_included_items: S,
                include_assets_without_overrides: b,
                apply_user_filters: L,
                include_links: G,
              },
              i = e.filter(
                (e) =>
                  !(
                    a.A.Get().BHasStoreItem(e, t, n) ||
                    a.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const s = r().CancelToken.source(),
              o = i.map((e) => a.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(o).then(() => {
                s.token.reason || u();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, u, l, c, d, _, g, m, p, f, h, v, w, C, S, b, L, G]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              a.A.Get().BHasStoreItem(e, t, n) ||
              a.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          a.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function g(e, t, n) {
        return _(e, 0, t, n);
      }
      function m(e, t, n) {
        return _(e, 2, t, n);
      }
      function p(e, t, n) {
        return _(e, 1, t, n);
      }
    },
    82817: (e, t, n) => {
      n.d(t, {
        EG: () => o,
        II: () => g,
        N1: () => m,
        S2: () => d,
        Uz: () => c,
        aL: () => l,
        ab: () => r,
        qR: () => s,
        zB: () => _,
      });
      var i = n(3577);
      function r(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg") || t.endsWith(".jpeg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function s(e) {
        switch (e) {
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
          console.error("ConvertMimeTypeToExtension:Unexepected mime type ", e),
          ".jpg"
        );
      }
      function o(e) {
        switch (e) {
          case 1:
            return ".jpg";
          case 2:
            return ".gif";
          case 3:
            return ".png";
          case 5:
            return ".webm";
          case 4:
            return ".mp4";
          case 7:
            return ".srt";
          case 6:
            return ".vtt";
          case 10:
            return ".webp";
        }
      }
      function a(e) {
        const t = (0, i.x0)(),
          n = new Image();
        return (
          (n.onload = () => t.resolve(n)),
          (n.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              t.resolve(void 0);
          }),
          (n.src = e),
          t.promise
        );
      }
      function u(e) {
        const t = (0, i.x0)(),
          n = document.createElement("video");
        return (
          (n.preload = "metadata"),
          n.addEventListener("loadedmetadata", () => t.resolve(n)),
          (n.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              t.resolve(void 0);
          }),
          (n.src = e),
          t.promise
        );
      }
      function l(e) {
        return e.startsWith("image/");
      }
      function c(e) {
        return e.startsWith("video/");
      }
      function d(e, t) {
        return t ? u(e) : a(e);
      }
      async function _(e, t) {
        if (t) return u(URL.createObjectURL(e));
        {
          const t = (0, i.x0)(),
            n = new FileReader();
          (n.onload = () => t.resolve(n.result ?? void 0)),
            (n.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                n.error,
              ),
                t.resolve(void 0);
            }),
            n.readAsDataURL(e);
          const r = await t.promise;
          if (!r) return;
          return a(r.toString());
        }
      }
      function g(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
      function m(e, t) {
        if (!t) return e;
        const n = new Set([
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
        for (const i of t) n.has(i.name.toLowerCase()) || (e[i.name] = i.value);
        return e;
      }
    },
  },
]);
