/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1402],
  {
    12443: (e) => {
      e.exports = {
        AppSocialLinksCtn: "_1wKUEA0cYqeUELXMe3Tp6T",
        AppSocialLinks: "YMmXzjieZthpAehitId4M",
        AppSocialLinkIcon: "OlwlyAPTdpJ7OieZmqzhc",
        AppSocialLinkWithText: "_3BKcmMK-HSkKmQqRCx9HdA",
        AppSocialText: "bJf5nxr6o9SG4mWXm7qz-",
      };
    },
    28194: (e) => {
      e.exports = { Ctn: "_2ZSkHhlXwxpsIInroemxBn" };
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => a,
        Gg: () => d,
        Ow: () => o,
        YM: () => f,
        mZ: () => _,
        t7: () => u,
        zX: () => p,
      });
      var r = n(41735),
        c = n.n(r),
        i = n(90626),
        l = n(73745),
        s = n(82097);
      function a(e, t, n, r) {
        const a = (0, i.useRef)(),
          u = (0, i.useRef)(void 0),
          o = (0, l.CH)();
        a.current = e;
        const [d, _] = (0, i.useState)(void 0),
          {
            include_assets: m,
            include_release: p,
            include_platforms: f,
            include_all_purchase_options: E,
            include_screenshots: k,
            include_trailers: g,
            include_ratings: S,
            include_tag_count: h,
            include_reviews: v,
            include_basic_info: A,
            include_supported_languages: I,
            include_full_description: y,
            include_included_items: T,
            include_assets_without_overrides: G,
            apply_user_filters: b,
            include_links: w,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            const n = {
              include_assets: m,
              include_release: p,
              include_platforms: f,
              include_all_purchase_options: E,
              include_screenshots: k,
              include_trailers: g,
              include_ratings: S,
              include_tag_count: h,
              include_reviews: v,
              include_basic_info: A,
              include_supported_languages: I,
              include_full_description: y,
              include_included_items: T,
              include_assets_without_overrides: G,
              apply_user_filters: b,
              include_links: w,
            };
            let i = null;
            return (
              !e ||
                e < 0 ||
                s.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && r && r == u.current) ||
                (r !== u.current && (_(void 0), (u.current = r)),
                (i = c().CancelToken.source()),
                s.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    i?.token.reason || a.current !== e || _(1 == t), o();
                  })),
              () => i?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, r, d, m, p, f, E, k, g, S, h, v, A, I, y, T, G, b, w, o]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (s.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!s.A.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const x = s.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return x ? [x, 3] : [null, 2];
      }
      function u(e, t, n) {
        return a(e, 0, t, n);
      }
      function o(e, t, n) {
        return a(e, 2, t, n);
      }
      function d(e, t, n) {
        return a(e, 1, t, n);
      }
      function _(e, t, n) {
        const [r, c] = a(e, t, n);
        let i;
        1 != r?.GetStoreItemType() ||
          r.GetAssets()?.GetHeaderURL() ||
          1 != r?.GetIncludedAppIDs().length ||
          (i = r.GetIncludedAppIDs()[0]);
        const [l, s] = u(i, n);
        return i && l?.BIsVisible() ? [l, s] : [r, c];
      }
      function m(e, t, n, r) {
        const a = (0, l.CH)(),
          {
            include_assets: u,
            include_release: o,
            include_platforms: d,
            include_all_purchase_options: _,
            include_screenshots: m,
            include_trailers: p,
            include_ratings: f,
            include_tag_count: E,
            include_reviews: k,
            include_basic_info: g,
            include_supported_languages: S,
            include_full_description: h,
            include_included_items: v,
            include_assets_without_overrides: A,
            apply_user_filters: I,
            include_links: y,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: u,
                include_release: o,
                include_platforms: d,
                include_all_purchase_options: _,
                include_screenshots: m,
                include_trailers: p,
                include_ratings: f,
                include_tag_count: E,
                include_reviews: k,
                include_basic_info: g,
                include_supported_languages: S,
                include_full_description: h,
                include_included_items: v,
                include_assets_without_overrides: A,
                apply_user_filters: I,
                include_links: y,
              },
              r = e.filter(
                (e) =>
                  !(
                    s.A.Get().BHasStoreItem(e, t, n) ||
                    s.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == r.length) return;
            const i = c().CancelToken.source(),
              l = r.map((e) => s.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(l).then(() => {
                i.token.reason || a();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, r, a, u, o, d, _, m, p, f, E, k, g, S, h, v, A, I, y]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              s.A.Get().BHasStoreItem(e, t, n) ||
              s.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          s.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function p(e, t, n) {
        return m(e, 0, t, n);
      }
      function f() {
        i.useEffect(
          () => (
            s.A.Get().SetReturnUnavailableItems(!0),
            () => s.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    18663: (e, t, n) => {
      "use strict";
      n.d(t, { D1: () => h, lS: () => E, lz: () => S, nK: () => g });
      var r = n(90626),
        c = n(55263),
        i = n(95695),
        l = n.n(i),
        s = n(12155),
        a = n(52038),
        u = n(61859),
        o = n(61336),
        d = n(78327),
        _ = n(32754),
        m = n(12443),
        p = n.n(m);
      function f(e) {
        switch (e) {
          case "discord_server":
            return 5;
          case "youtube":
            return 1;
          case "facebook":
            return 2;
          case "twitter":
            return 3;
          case "twitch":
            return 4;
          case "reddit":
            return 10;
          case "instagram":
            return 11;
          case "tumblr":
            return 12;
          case "qq":
            return 6;
          case "qqlink":
            return 18;
          case "bilibili":
            return 8;
          case "weibo":
            return 9;
          case "wechat":
            return 17;
          case "tieba":
            return 13;
          case "tiktok":
            return 14;
          case "douyin":
            return 19;
          case "bluesky":
            return 20;
          case "mastodon":
            return 21;
          case "threads":
            return 22;
          case "vk":
            return 7;
          case "telegram":
            return 15;
          case "linkedin":
            return 16;
        }
        return 0;
      }
      function E(e) {
        const { appid: t } = e;
        return r.createElement(
          "div",
          { className: p().AppSocialLinksCtn },
          r.createElement(k, { appid: t }),
        );
      }
      function k(e) {
        const { appid: t } = e,
          [n] = (0, c.t7)(t, { include_basic_info: !0, include_links: !0 });
        if (!n) return null;
        const i = n.GetLinks();
        return i && 0 != i.length && d.TS.IMG_URL
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "div",
                {
                  className: (0, a.A)(
                    l().EventEditorTextTitle,
                    "EventEditorTextTitle",
                  ),
                },
                (0, u.we)("#EventDisplay_SocialTitle"),
              ),
              r.createElement(h, { id: "" + t, rgSocialMedia: i }),
            )
          : null;
      }
      function g(e) {
        return (0, r.useMemo)(
          () =>
            e
              ? e.map((e) => {
                  const t = { link_type: f(e.type) };
                  return (
                    6 == t.link_type || 17 == t.link_type
                      ? (t.text = e.link)
                      : (t.url = e.link),
                    t
                  );
                })
              : [],
          [e],
        );
      }
      function S(e) {
        const { gidClanEvent: t, rgSocial: n } = e,
          c = g(n);
        return c && 0 != c.length && d.TS.IMG_URL
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "div",
                {
                  className: (0, a.A)(
                    l().EventEditorTextTitle,
                    "EventEditorTextTitle",
                  ),
                },
                (0, u.we)("#EventDisplay_Sale_SocialTitle"),
              ),
              r.createElement(h, { id: t, rgSocialMedia: c }),
            )
          : null;
      }
      function h(e) {
        const { id: t, rgSocialMedia: n, className: c } = e;
        return r.createElement(
          "div",
          { className: (0, a.A)(p().AppSocialLinks, c) },
          n.map((e) =>
            e.url
              ? r.createElement(v, {
                  key: "app_social_link_" + t + "_" + e.link_type,
                  social: e,
                })
              : r.createElement(A, {
                  key:
                    "app_social_text_" + t + "_" + e.link_type + "_" + e.text,
                  social: e,
                }),
          ),
        );
      }
      function v(e) {
        const { social: t } = e;
        return r.createElement(
          "a",
          {
            href: (0, o.NT)(t.url),
            target: d.TS.IN_CLIENT ? void 0 : "_blank",
            rel: "noopener noreferrer",
          },
          r.createElement(
            _.he,
            { toolTipContent: t.url },
            r.createElement(I, { social: t }),
          ),
        );
      }
      function A(e) {
        const { social: t } = e;
        return r.createElement(
          "div",
          { className: p().AppSocialLinkWithText },
          r.createElement(
            _.he,
            { toolTipContent: t.text },
            r.createElement(I, { social: t }),
          ),
          r.createElement("div", { className: p().AppSocialText }, t.text),
        );
      }
      function I(e) {
        const { social: t } = e;
        return r.createElement(y, {
          linkType: t.link_type,
          className: p().AppSocialLinkIcon,
        });
      }
      function y(e) {
        const { linkType: t, ...n } = e;
        switch (t) {
          case 1:
            return r.createElement(s.agV, { ...n });
          case 2:
            return r.createElement(s.ZnA, { ...n });
          case 3:
            return r.createElement(s.oy, { ...n });
          case 4:
            return r.createElement(s.ofN, { ...n });
          case 5:
            return r.createElement(s.Bki, { ...n });
          case 6:
          case 18:
            return r.createElement(s.$vK, { ...n });
          case 7:
            return r.createElement(s.OSJ, { ...n });
          case 8:
            return r.createElement(s.nm_, { ...n });
          case 9:
            return r.createElement(s.tIO, { ...n });
          case 10:
            return r.createElement(s.Vt2, { ...n });
          case 11:
            return r.createElement(s.Vgk, { ...n });
          case 12:
            return r.createElement(s.VSd, { ...n });
          case 13:
            return r.createElement(s.ccb, { ...n });
          case 14:
            return r.createElement(s.rNt, { ...n });
          case 15:
            return r.createElement(s.g$j, { ...n });
          case 16:
            return r.createElement(s.BQz, { ...n });
          case 17:
            return r.createElement(s.jdP, { ...n });
          case 19:
            return r.createElement(s.bKN, { ...n });
          case 20:
            return r.createElement(s.sDU, { ...n });
          case 21:
            return r.createElement(s.MbF, { ...n });
          case 22:
            return r.createElement(s.emH, { ...n });
          case 23:
          case 0:
            return "invalid social media type";
        }
      }
    },
    44899: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var r = n(90626),
        c = n(18663),
        i = n(28194),
        l = n.n(i);
      function s(e) {
        const { clanAccountID: t, items: n } = e,
          i = (0, c.nK)(n);
        return i
          ? r.createElement(c.D1, {
              id: "social_" + t,
              rgSocialMedia: i,
              className: l().Ctn,
            })
          : null;
      }
    },
  },
]);
