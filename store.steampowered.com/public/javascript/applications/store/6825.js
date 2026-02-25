/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6825],
  {
    20433: (e, t, r) => {
      r.d(t, { j: () => y, u: () => p });
      var n = r(7850),
        s = r(90626),
        a = r(45699),
        o = r(55963),
        i = r(60014),
        c = r(49411),
        d = r(61336),
        l = r(52541),
        u = r(8527);
      r(78327);
      function _(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function y(e) {
        const {
            id: t,
            hoverClassName: r,
            fnGetIDOverride: a,
            fnHoverState: o,
            children: i,
          } = e,
          c = s.useRef(null),
          d = s.useCallback(
            (e) => {
              const r = _(t);
              r &&
                (o && o(!0),
                window.GameHover &&
                  window.GameHover(a ? a() : c.current, e, "global_hover", {
                    type: r,
                    id: (0, l.G$)(t).id,
                    v6: 1,
                  }));
            },
            [o, a, t],
          ),
          u = s.useCallback(
            (e) => {
              _(t) &&
                (o && e.relatedTarget && o(!1),
                window.HideGameHover &&
                  window.HideGameHover(a ? a() : c.current, e, "global_hover"));
            },
            [t, o, a],
          );
        return (0, n.jsx)("div", {
          ref: c,
          className: r,
          onMouseEnter: d,
          onMouseLeave: u,
          onFocus: d,
          onBlur: u,
          children: i,
        });
      }
      function p(e) {
        const {
            id: t,
            strExtraParams: r,
            fnOnClickOverride: s,
            strOverrideURL: p,
          } = e,
          b = (0, i.n9)(),
          m = (0, c.w)(),
          f = (0, d.NT)(
            p ||
              (t && "creatorid" in t
                ? (0, o.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, l.G$))(t).id}${r ? `?${r}` : ""}`,
                    b,
                    m,
                  )
                : (0, o.It)(
                    `${u.TS.STORE_BASE_URL}${_(t)}/${((0, l.G$))(t).id}${r ? `?${r}` : ""}`,
                    b,
                    m,
                  )),
          );
        return (0, n.jsx)(y, {
          ...e,
          children: (0, n.jsx)(a.Ii, {
            className: e.className,
            href: s ? void 0 : f,
            target: u.TS.IN_CLIENT || s ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: s,
            children: e.children,
          }),
        });
      }
    },
    57876: (e, t, r) => {
      r.d(t, {
        Jw: () => d,
        Xh: () => c,
        cU: () => l,
        tf: () => _,
        wl: () => u,
      });
      var n = r(22837),
        s = r(30894),
        a = r(16021),
        o = r(62792),
        i = r(78327);
      const c = {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_tag_count: 20,
        include_basic_info: !0,
        include_trailers: !0,
        include_reviews: !0,
        include_screenshots: !0,
        include_supported_languages: !0,
      };
      function d() {
        return { width: 231, height: 87 };
      }
      class l {
        m_setAlreadyAdded = new Set();
        Reset() {
          this.m_setAlreadyAdded = new Set();
        }
        BHasAppID(e) {
          return this.m_setAlreadyAdded.has("a" + e);
        }
        BHasPackageID(e) {
          return this.m_setAlreadyAdded.has("s" + e);
        }
        BHasBundleID(e) {
          return this.m_setAlreadyAdded.has("b" + e);
        }
        BHasStoreItemKey(e) {
          return this.m_setAlreadyAdded.has(
            this.ConvertStoreItemKeyToUniqueKey(e),
          );
        }
        AddStoreItemKey(e) {
          this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(e));
        }
        ConvertStoreItemKeyToUniqueKey(e) {
          switch (e.item_type) {
            default:
            case "app":
              return "a" + e.id;
            case "sub":
              return "s" + e.id;
            case "bundle":
              return "b" + e.id;
          }
        }
      }
      const u = 4;
      function _(e, t, r, n, s, i) {
        const c = new Array(),
          d = new Array(),
          l = new Array(),
          _ = new Array();
        if (!e || 0 == e.length) return c;
        const p = [
          o.by.k_RejectSupportedLanguage,
          o.by.k_RejectAlreadyDisplayed,
          o.by.k_RejectNoTrailer,
        ];
        for (let i of e) {
          let e = i.id,
            u = o.by.k_NotRejected;
          switch (i.item_type) {
            case "sub":
              const s = a.A.Get().GetPackage(e);
              if (1 !== s?.GetIncludedAppIDs()?.length) {
                u = I(e, t, n, !0);
                break;
              }
              e = s.GetIncludedAppIDs()[0];
            case "app":
              u = m(e, t, r, n, !0);
              break;
            case "bundle":
              u = k(e, t, n, !0);
          }
          if (
            (u == o.by.k_NotRejected
              ? ((i.rejected = o.by.k_NotRejected),
                c.push({ ...i, priority: 1 }))
              : p.includes(u)
                ? ((i.rejected = o.by.k_NotRejected), d.push(i))
                : ((i.rejected = u),
                  u == o.by.k_RejectIgnoredGame ? l.push(i) : _.push(i)),
            c.length > s)
          )
            break;
        }
        return (
          c.length < s &&
            (y(c, d, i, 2),
            c.length < i &&
              t.enforce_minimum &&
              (y(c, l, i, 3), y(c, _, i, u))),
          c
        );
      }
      function y(e, t, r, n) {
        for (let s = 0; e.length < r && s < t.length; ++s)
          e.push({ ...t[s], priority: n });
      }
      function p(e, t) {
        const r = s.Fm.Get();
        if (t.only_current_platform && r.BHasPlatformPreferenceSet()) {
          if (
            !(
              (e.GetPlatforms()?.windows && r.BIsPreferredPlatform("win")) ||
              (e.GetPlatforms()?.mac && r.BIsPreferredPlatform("mac")) ||
              (e.GetPlatforms()?.steamos_linux &&
                r.BIsPreferredPlatform("linux"))
            )
          )
            return o.by.k_RejectWrongPlatform;
        }
        return !t.prepurchase && e.BIsComingSoon()
          ? o.by.k_RejectNoComingSoon
          : !t.virtual_reality && e.GetPlatforms()?.vr_support.vrhmd_only
            ? o.by.k_RejectNoVR
            : e.GetAllCreatorClanIDs()?.some((e) => r.BIsIgnoringCurator(e))
              ? o.by.k_RejectCreatorClan
              : o.by.k_NotRejected;
      }
      function b(e, t) {
        if (t.localized) {
          const t = (0, n.sf)(i.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return o.by.k_RejectSupportedLanguage;
        }
        return o.by.k_NotRejected;
      }
      function m(e, t, r, n, i) {
        const c = a.A.Get().GetApp(e);
        if (!c) return o.by.k_RejectNotLoaded;
        const d = p(c, t);
        if (d != o.by.k_NotRejected) return d;
        const l = s.Fm.Get();
        if (l.BIsGameIgnored(e)) return o.by.k_RejectIgnoredGame;
        if (l.BExcludeTagIDs(c.GetTagIDs())) return o.by.k_RejectIgnoreGameTags;
        if (l.BExcludesContentDescriptor(c.GetContentDescriptorIDs()))
          return o.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && c.BIsEarlyAccess())
          return o.by.k_RejectEarlyAccess;
        const u = c.GetAppType();
        return t.software || 6 != u
          ? t.games_already_in_library && l.BIsGameOwned(e)
            ? o.by.k_RejectInLibrary
            : t.games_not_in_library && !l.BIsGameOwned(e)
              ? o.by.k_RejectNotInLibrary
              : !t.video && [7, 8, 9].includes(u)
                ? o.by.k_RejectVideo
                : t.has_discount && !c.GetBestPurchaseOption().discount_pct
                  ? o.by.k_RejectNoDiscount
                  : "adultonly" != r &&
                      t.no_ao_content &&
                      (c.HasContentDescriptorID(3) ||
                        c.HasContentDescriptorID(4))
                    ? o.by.k_RejectAO
                    : 1 == u &&
                        t.games_already_in_library &&
                        l.BIsGameOwned(c.GetParentAppID())
                      ? o.by.k_RejectInLibrary
                      : i
                        ? (1 == u && n.BHasAppID(c.GetParentAppID())) ||
                          n.BHasAppID(e)
                          ? o.by.k_RejectAlreadyDisplayed
                          : t.has_trailer && !c.BHasTrailers(!1)
                            ? o.by.k_RejectNoTrailer
                            : b(c, t)
                        : o.by.k_NotRejected
          : o.by.k_RejectSoftware;
      }
      function f(e, t) {
        const r = s.Fm.Get();
        let n = !1;
        for (let t of e) {
          if (r.BIsGameIgnored(t)) return o.by.k_RejectIgnoredGame;
          r.BIsGameOwned(t) && (n = !0);
        }
        return t.games_not_in_library && n
          ? o.by.k_RejectInLibrary
          : t.games_not_in_library && !n
            ? o.by.k_RejectNotInLibrary
            : o.by.k_NotRejected;
      }
      function I(e, t, r, n) {
        const i = a.A.Get().GetPackage(e);
        if (!i) return o.by.k_RejectNotLoaded;
        const c = p(i, t);
        if (c != o.by.k_NotRejected) return c;
        const d = f(i.GetIncludedAppIDs(), t);
        if (d != o.by.k_NotRejected) return d;
        const l = s.Fm.Get();
        return t.games_already_in_library && l.BOwnsPackage(e)
          ? o.by.k_RejectInLibrary
          : l.BIsPackageIgnored(e)
            ? o.by.k_RejectIgnoredGame
            : n
              ? r.BHasPackageID(e)
                ? o.by.k_RejectAlreadyDisplayed
                : b(i, t)
              : o.by.k_NotRejected;
      }
      function k(e, t, r, n) {
        const s = a.A.Get().GetBundle(e);
        if (!s) return o.by.k_RejectNotLoaded;
        const i = p(s, t);
        if (i != o.by.k_NotRejected) return i;
        const c = f(s.GetIncludedAppIDs(), t);
        return c != o.by.k_NotRejected
          ? c
          : n
            ? r.BHasBundleID(e)
              ? o.by.k_RejectAlreadyDisplayed
              : b(s, t)
            : o.by.k_NotRejected;
      }
    },
    14326: (e, t, r) => {
      r.d(t, { _: () => h, r: () => g });
      var n = r(7850),
        s = r(39777),
        a = r(60014),
        o = r(58918),
        i = r(17376),
        c = r(79969),
        d = r(90626),
        l = r(35380),
        u = r(55963),
        _ = r(18654),
        y = r.n(_),
        p = r(39700),
        b = r(12155),
        m = r(32754),
        f = r(52038),
        I = r(61859),
        k = r(78327),
        j = r(88680);
      function g(e) {
        const { appid: t, className: r, bTextMode: a } = e,
          o = (0, l.$5)(t),
          { data: i } = (0, s.J$)(o),
          { data: c } = (0, s.by)(o);
        return (0, n.jsx)(h, {
          appid: t,
          bIsFree: Boolean(i?.is_free),
          bIsComingSoon: Boolean(c?.is_coming_soon),
          bTextMode: a,
          className: r,
        });
      }
      function h(e) {
        const [t, r] = d.useState(!1),
          s = (0, a.n9)(),
          {
            appid: _,
            bIsFree: g,
            bIsComingSoon: h,
            className: R,
            bTextMode: G,
          } = e,
          w = (0, l.$5)(_),
          { bIsOwned: N } = (0, o.ZJ)(w),
          B = (0, i.bB)(_),
          { mutateAsync: D } = (0, c.s)(_, !B, (0, u.L3)(s)),
          { elDialogElement: S, fnShowLogonDialog: v } = (0, j.l)();
        if (N || (!h && g))
          return g ? (0, n.jsx)(A, { possibleDemoAppID: _ }) : null;
        let C = null;
        return (
          t && !G
            ? (C = (0, n.jsx)(p.k, { size: 18 }))
            : B
              ? B && (C = G ? (0, I.we)("#OnWishlist") : (0, n.jsx)(b.qnF, {}))
              : (C = G
                  ? (0, I.we)("#wishlist_add_to_wishlist")
                  : (0, n.jsx)(b.T4m, {})),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(m.he, {
                toolTipContent: (0, I.we)("#AddToWishlist_ttip"),
                children: (0, n.jsx)("div", {
                  className: (0, f.A)(y().WishList, R),
                  onClick: async () => {
                    k.iA.logged_in ? t || (r(!0), await D(), r(!1)) : v();
                  },
                  children: C,
                }),
              }),
              S,
            ],
          })
        );
      }
      function A(e) {
        const { possibleDemoAppID: t, className: r } = e,
          a = (0, l.$5)(t),
          { data: o } = (0, s.J$)(a);
        return o
          ? (1 != o.type && 12 != o.type) || !o.related_items?.parent_appid
            ? null
            : (0, n.jsx)(R, {
                parentAppID: o.related_items?.parent_appid,
                className: r,
              })
          : null;
      }
      function R(e) {
        const { parentAppID: t, className: r } = e,
          a = (0, l.$5)(t),
          { data: o } = (0, s.J$)(a),
          { data: i } = (0, s.by)(a);
        return o && i
          ? (0, n.jsx)(h, {
              appid: t,
              bIsComingSoon: Boolean(i.is_coming_soon),
              bIsFree: Boolean(o.is_free),
              className: r,
            })
          : null;
      }
    },
  },
]);
