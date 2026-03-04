/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2469],
  {
    15631: (e) => {
      e.exports = {
        BackgroundImageCtn: "RdHTT3nwjIakv7OZTMNqN",
        BackgroundImageBlurCtn: "_3vGQugNJFaL7JS8KhZhU2H",
      };
    },
    67082: (e) => {
      e.exports = {
        AppHeader: "cCoovA8rihPiT1IZ33Cr_",
        CapsuleSizer: "_2VmId746Rg7Ldjg3_0jDSl",
        TitleGroup: "_2y18Xvy_xifENXqdmY3D9y",
        SubTitle: "v_Vos0f8oAH9Im5Z1b9UU",
        Title: "_3BjnxsXuurq9OScWV1Esvf",
        Price: "_33K0Gjy94jUQFhMmqwaCH8",
        SortOptions: "_2F9yRZTzjsLBM4QSoRoLsN",
      };
    },
    31960: (e) => {
      e.exports = {
        Ctn: "_2P-P0Ga6blE6d10oVWleHs",
        BackgroundImageCtn: "_3LnsTSsd5CMsXXdHZVeG9S",
        BackgroundImageBlurCtn: "_1j9oLZ84RZG44SAUdeGBbz",
        BundlesList: "qidGiQP0S4nK0GXkYOxbO",
        BundleRow: "_2-2kqczzmj6KtNObGLj6x3",
        BundlesInLibrary: "T_3MrEHN9bFK4I4FQqDC8",
        Title: "_3_R7HvUJcngi4n-gCRYFkN",
        Subtitle: "_3Bvm26qCLKO-h1yHVlFGsS",
      };
    },
    57876: (e, t, n) => {
      "use strict";
      n.d(t, { Xh: () => u, cU: () => c, tf: () => o, wl: () => d });
      var r = n(22837),
        s = n(30894),
        i = n(16021),
        l = n(62792),
        a = n(78327);
      const u = {
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
      class c {
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
      const d = 4;
      function o(e, t, n, r, s, a) {
        const u = new Array(),
          c = new Array(),
          o = new Array(),
          p = new Array();
        if (!e || 0 == e.length) return u;
        const m = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let a of e) {
          let e = a.id,
            d = l.by.k_NotRejected;
          switch (a.item_type) {
            case "sub":
              const s = i.A.Get().GetPackage(e);
              if (1 !== s?.GetIncludedAppIDs()?.length) {
                d = h(e, t, r, !0);
                break;
              }
              e = s.GetIncludedAppIDs()[0];
            case "app":
              d = y(e, t, n, r, !0);
              break;
            case "bundle":
              d = I(e, t, r, !0);
          }
          if (
            (d == l.by.k_NotRejected
              ? ((a.rejected = l.by.k_NotRejected),
                u.push({ ...a, priority: 1 }))
              : m.includes(d)
                ? ((a.rejected = l.by.k_NotRejected), c.push(a))
                : ((a.rejected = d),
                  d == l.by.k_RejectIgnoredGame ? o.push(a) : p.push(a)),
            u.length > s)
          )
            break;
        }
        return (
          u.length < s &&
            (_(u, c, a, 2),
            u.length < a &&
              t.enforce_minimum &&
              (_(u, o, a, 3), _(u, p, a, d))),
          u
        );
      }
      function _(e, t, n, r) {
        for (let s = 0; e.length < n && s < t.length; ++s)
          e.push({ ...t[s], priority: r });
      }
      function p(e, t) {
        const n = s.Fm.Get();
        if (t.only_current_platform && n.BHasPlatformPreferenceSet()) {
          if (
            !(
              (e.GetPlatforms()?.windows && n.BIsPreferredPlatform("win")) ||
              (e.GetPlatforms()?.mac && n.BIsPreferredPlatform("mac")) ||
              (e.GetPlatforms()?.steamos_linux &&
                n.BIsPreferredPlatform("linux"))
            )
          )
            return l.by.k_RejectWrongPlatform;
        }
        return !t.prepurchase && e.BIsComingSoon()
          ? l.by.k_RejectNoComingSoon
          : !t.virtual_reality && e.GetPlatforms()?.vr_support.vrhmd_only
            ? l.by.k_RejectNoVR
            : e.GetAllCreatorClanIDs()?.some((e) => n.BIsIgnoringCurator(e))
              ? l.by.k_RejectCreatorClan
              : l.by.k_NotRejected;
      }
      function m(e, t) {
        if (t.localized) {
          const t = (0, r.sf)(a.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function y(e, t, n, r, a) {
        const u = i.A.Get().GetApp(e);
        if (!u) return l.by.k_RejectNotLoaded;
        const c = p(u, t);
        if (c != l.by.k_NotRejected) return c;
        const d = s.Fm.Get();
        if (d.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (d.BExcludeTagIDs(u.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (d.BExcludesContentDescriptor(u.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && u.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const o = u.GetAppType();
        return t.software || 6 != o
          ? t.games_already_in_library && d.BIsGameOwned(e)
            ? l.by.k_RejectInLibrary
            : t.games_not_in_library && !d.BIsGameOwned(e)
              ? l.by.k_RejectNotInLibrary
              : !t.video && [7, 8, 9].includes(o)
                ? l.by.k_RejectVideo
                : t.has_discount && !u.GetBestPurchaseOption().discount_pct
                  ? l.by.k_RejectNoDiscount
                  : "adultonly" != n &&
                      t.no_ao_content &&
                      (u.HasContentDescriptorID(3) ||
                        u.HasContentDescriptorID(4))
                    ? l.by.k_RejectAO
                    : 1 == o &&
                        t.games_already_in_library &&
                        d.BIsGameOwned(u.GetParentAppID())
                      ? l.by.k_RejectInLibrary
                      : a
                        ? (1 == o && r.BHasAppID(u.GetParentAppID())) ||
                          r.BHasAppID(e)
                          ? l.by.k_RejectAlreadyDisplayed
                          : t.has_trailer && !u.BHasTrailers(!1)
                            ? l.by.k_RejectNoTrailer
                            : m(u, t)
                        : l.by.k_NotRejected
          : l.by.k_RejectSoftware;
      }
      function b(e, t) {
        const n = s.Fm.Get();
        let r = !1;
        for (let t of e) {
          if (n.BIsGameIgnored(t)) return l.by.k_RejectIgnoredGame;
          n.BIsGameOwned(t) && (r = !0);
        }
        return t.games_not_in_library && r
          ? l.by.k_RejectInLibrary
          : t.games_not_in_library && !r
            ? l.by.k_RejectNotInLibrary
            : l.by.k_NotRejected;
      }
      function h(e, t, n, r) {
        const a = i.A.Get().GetPackage(e);
        if (!a) return l.by.k_RejectNotLoaded;
        const u = p(a, t);
        if (u != l.by.k_NotRejected) return u;
        const c = b(a.GetIncludedAppIDs(), t);
        if (c != l.by.k_NotRejected) return c;
        const d = s.Fm.Get();
        return t.games_already_in_library && d.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : d.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : r
              ? n.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : m(a, t)
              : l.by.k_NotRejected;
      }
      function I(e, t, n, r) {
        const s = i.A.Get().GetBundle(e);
        if (!s) return l.by.k_RejectNotLoaded;
        const a = p(s, t);
        if (a != l.by.k_NotRejected) return a;
        const u = b(s.GetIncludedAppIDs(), t);
        return u != l.by.k_NotRejected
          ? u
          : r
            ? n.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : m(s, t)
            : l.by.k_NotRejected;
      }
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => u,
        Gg: () => o,
        MS: () => y,
        Ow: () => d,
        YM: () => b,
        mZ: () => _,
        t7: () => c,
        zX: () => m,
      });
      var r = n(41735),
        s = n.n(r),
        i = n(90626),
        l = n(84933),
        a = n(16021);
      function u(e, t, n, r) {
        const u = (0, i.useRef)(void 0),
          c = (0, i.useRef)(void 0),
          d = (0, l.CH)();
        u.current = e;
        const [o, _] = (0, i.useState)(void 0),
          {
            include_assets: p,
            include_release: m,
            include_platforms: y,
            include_all_purchase_options: b,
            include_screenshots: h,
            include_trailers: I,
            include_ratings: f,
            include_tag_count: g,
            include_reviews: B,
            include_basic_info: S,
            include_supported_languages: j,
            include_full_description: G,
            include_included_items: k,
            include_assets_without_overrides: A,
            apply_user_filters: v,
            include_links: R,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            const n = {
              include_assets: p,
              include_release: m,
              include_platforms: y,
              include_all_purchase_options: b,
              include_screenshots: h,
              include_trailers: I,
              include_ratings: f,
              include_tag_count: g,
              include_reviews: B,
              include_basic_info: S,
              include_supported_languages: j,
              include_full_description: G,
              include_included_items: k,
              include_assets_without_overrides: A,
              apply_user_filters: v,
              include_links: R,
            };
            let i = null;
            return (
              !e ||
                e < 0 ||
                a.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== o && r && r == c.current) ||
                (r !== c.current && (_(void 0), (c.current = r)),
                (i = s().CancelToken.source()),
                a.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    i?.token.reason || u.current !== e || _(1 == t), d();
                  })),
              () => i?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, r, o, p, m, y, b, h, I, f, g, B, S, j, G, k, A, v, R, d]),
          !e)
        )
          return [null, 2];
        if (!1 === o) return [void 0, 2];
        if (a.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!a.A.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const w = a.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return w ? [w, 3] : [null, 2];
      }
      function c(e, t, n) {
        return u(e, 0, t, n);
      }
      function d(e, t, n) {
        return u(e, 2, t, n);
      }
      function o(e, t, n) {
        return u(e, 1, t, n);
      }
      function _(e, t, n) {
        const [r, s] = u(e, t, n);
        let i;
        1 != r?.GetStoreItemType() ||
          r.GetAssets()?.GetHeaderURL() ||
          1 != r?.GetIncludedAppIDs().length ||
          (i = r.GetIncludedAppIDs()[0]);
        const [l, a] = c(i, n);
        return i && l?.BIsVisible() ? [l, a] : [r, s];
      }
      function p(e, t, n, r) {
        const u = (0, l.CH)(),
          {
            include_assets: c,
            include_release: d,
            include_platforms: o,
            include_all_purchase_options: _,
            include_screenshots: p,
            include_trailers: m,
            include_ratings: y,
            include_tag_count: b,
            include_reviews: h,
            include_basic_info: I,
            include_supported_languages: f,
            include_full_description: g,
            include_included_items: B,
            include_assets_without_overrides: S,
            apply_user_filters: j,
            include_links: G,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: c,
                include_release: d,
                include_platforms: o,
                include_all_purchase_options: _,
                include_screenshots: p,
                include_trailers: m,
                include_ratings: y,
                include_tag_count: b,
                include_reviews: h,
                include_basic_info: I,
                include_supported_languages: f,
                include_full_description: g,
                include_included_items: B,
                include_assets_without_overrides: S,
                apply_user_filters: j,
                include_links: G,
              },
              r = e.filter(
                (e) =>
                  !(
                    a.A.Get().BHasStoreItem(e, t, n) ||
                    a.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == r.length) return;
            const i = s().CancelToken.source(),
              l = r.map((e) => a.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(l).then(() => {
                i.token.reason || u();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, r, u, c, d, o, _, p, m, y, b, h, I, f, g, B, S, j, G]),
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
      function m(e, t, n) {
        return p(e, 0, t, n);
      }
      function y(e, t, n) {
        return p(e, 2, t, n);
      }
      function b() {
        i.useEffect(
          () => (
            a.A.Get().SetReturnUnavailableItems(!0),
            () => a.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    54847: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => c });
      var r = n(7850),
        s = n(39777),
        i = n(35380),
        l = n(41399),
        a = n(18654),
        u = n.n(a);
      function c(e) {
        const { id: t, type: n } = e,
          a = (0, i.rt)({ id: t, type: n }),
          { data: c } = (0, s.J$)(a);
        return (0, r.jsx)("div", {
          className: u().SaleItemBrowserRow,
          children: (0, r.jsx)(l.p, {
            ...e,
            bShowReviewSummary: !0,
            bShowDemoButton: e.bShowDemoButton || 1 == c?.type,
            bPreferDemoStorePage: e.bPreferDemoStorePage,
          }),
        });
      }
    },
    93135: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => P });
      var r = n(7850),
        s = n(39777),
        i = n(15631),
        l = n.n(i),
        a = n(42834);
      function u(e) {
        const { id: t } = e,
          { data: n } = (0, s.J$)(t),
          { data: i } = (0, s.lv)(t);
        if (!i || !n) return null;
        const u =
          (0, a.b0)(i, "library_hero_2x") ??
          (0, a.b0)(i, "library_hero") ??
          (0, a.b0)(i, "raw_page_background");
        return u
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className: l().BackgroundImageCtn,
                  children: (0, r.jsx)("img", { src: u, alt: n.name }),
                }),
                (0, r.jsx)("div", {
                  className: l().BackgroundImageBlurCtn,
                  children: (0, r.jsx)("img", { src: u, alt: n.name }),
                }),
              ],
            })
          : null;
      }
      var c = n(35380),
        d = n(51078),
        o = n(3740),
        _ = n(67082),
        p = n.n(_);
      function m(e) {
        const { appid: t, elPageSort: n, strPageSubTitle: i } = e,
          l = (0, c.$5)(t),
          { data: u } = (0, s.J$)(l),
          { data: _ } = (0, s.lv)(l),
          { strStoreURL: m } = (0, d.x)(u);
        return u
          ? (0, r.jsxs)("div", {
              className: p().AppHeader,
              children: [
                (0, r.jsx)("div", {
                  className: p().CapsuleSizer,
                  children: (0, r.jsx)("a", {
                    href: m,
                    children:
                      _ &&
                      (0, r.jsx)("img", {
                        src: (0, a.b0)(_, "header"),
                        alt: u.name || "",
                      }),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: p().TitleGroup,
                  children: [
                    i &&
                      (0, r.jsx)("div", {
                        className: p().SubTitle,
                        children: i,
                      }),
                    (0, r.jsx)("a", {
                      href: m,
                      className: p().Title,
                      children: u.name || "",
                    }),
                    (0, r.jsx)("div", {
                      className: p().Price,
                      children: (0, r.jsx)(o.N, { id: l }),
                    }),
                  ],
                }),
                Boolean(n) &&
                  (0, r.jsx)("div", {
                    className: p().SortOptions,
                    children: n,
                  }),
              ],
            })
          : null;
      }
      var y,
        b = n(90626),
        h = n(57876),
        I = n(30894),
        f = n(75279),
        g = n(16021),
        B = n(55263),
        S = n(63090),
        j = n(84811),
        G = n(54847),
        k = n(32630),
        A = n(22797),
        v = n(52038),
        R = n(61859),
        w = n(24484),
        N = n(31960),
        D = n.n(N);
      function P(e) {
        const {
            match: {
              params: { appid: t },
            },
          } = e,
          n = Number.parseInt(t),
          [s] = (0, B.t7)(n, h.Xh);
        return (
          (0, b.useEffect)(() => {
            if (s) {
              const e = s
                .GetStorePageURL()
                .replace("/app/", "/bundlelist_old/");
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [s]),
          (0, r.jsx)(k.Ay, {
            method: "bundlelist",
            children: (0, r.jsx)(j.tH, {
              children: (0, r.jsx)(x, { storeItem: s }),
            }),
          })
        );
      }
      function x(e) {
        const { storeItem: t } = e,
          n = (0, f.DJ)(t),
          [s, i] = (0, b.useState)(y.k_BundleSort_Price),
          l = (function (e) {
            const t = (0, b.useMemo)(
                () => (0, w.Tc)("bundle_list", "application_config"),
                [],
              ),
              [n] = (0, I.L2)(),
              r = (0, B.MS)(t, h.Xh),
              s = (0, b.useMemo)(() => {
                if (!t || (3 != r && 2 != r)) return null;
                {
                  let n = t;
                  switch (
                    (2 == r &&
                      (n = t.filter((e) => {
                        const t = g.A.Get().GetBundle(e);
                        return t?.BIsVisible();
                      })),
                    e)
                  ) {
                    case y.k_BundleSort_Name:
                      return [...n].sort((e, t) => {
                        const n = g.A.Get().GetBundle(e),
                          r = g.A.Get().GetBundle(t);
                        return n.GetName().localeCompare(r.GetName());
                      });
                    case y.k_BundleSort_Price:
                      return [...n].sort((e, t) => {
                        const n = g.A.Get().GetBundle(e),
                          r = g.A.Get().GetBundle(t);
                        return (
                          n.GetBestPurchasePriceInCents() -
                          r.GetBestPurchasePriceInCents()
                        );
                      });
                    default:
                      return n;
                  }
                }
              }, [e, r, t]);
            if (s && !n) {
              const e = new Array(),
                t = new Array(),
                n = new Array();
              return (
                s.forEach((r) => {
                  const s = g.A.Get().GetBundle(r);
                  s.GetIncludedAppIDs().some((e) => !I.Fm.Get().BOwnsApp(e))
                    ? s.GetBestPurchaseOption().must_purchase_as_set
                      ? n.push(r)
                      : t.push(r)
                    : e.push(r);
                }),
                {
                  rgOwnedBundleIDList: e,
                  rgCompleteTheSetBundleIDList: t,
                  rgMustPurchaseTogetherBundleIDList: n,
                }
              );
            }
            return null;
          })(s);
        return t && l
          ? (0, r.jsxs)("div", {
              className: D().Ctn,
              children: [
                (0, r.jsx)(u, { id: n }),
                (0, r.jsxs)("div", {
                  className: (0, v.A)("page_content"),
                  children: [
                    (0, r.jsx)(m, {
                      appid: t.GetAppID(),
                      elPageSort: (0, r.jsx)(T, {
                        eBundleSort: s,
                        fnSetSort: i,
                      }),
                      strPageSubTitle: (0, R.we)("#BundleList_SubTitle"),
                    }),
                    l.rgCompleteTheSetBundleIDList?.length > 0 &&
                      (0, r.jsxs)("div", {
                        className: D().BundlesInLibrary,
                        children: [
                          (0, r.jsx)("div", {
                            className: D().Title,
                            children: (0, R.we)("#BundleList_CompleteTheSet"),
                          }),
                          (0, r.jsx)("div", {
                            className: D().Subtitle,
                            children: (0, R.we)(
                              "#BundleList_CompleteTheSetSubtitle",
                            ),
                          }),
                          (0, r.jsx)(L, {
                            appId: t.GetAppID(),
                            bundleSort: s,
                            rgBundleIDs: l.rgCompleteTheSetBundleIDList,
                          }),
                        ],
                      }),
                    l.rgMustPurchaseTogetherBundleIDList?.length > 0 &&
                      (0, r.jsxs)("div", {
                        className: D().BundlesInLibrary,
                        children: [
                          (0, r.jsx)("div", {
                            className: D().Title,
                            children: (0, R.we)(
                              "#BundleList_MustPurchaseAsSet",
                            ),
                          }),
                          (0, r.jsx)("div", {
                            className: D().Subtitle,
                            children: (0, R.we)(
                              "#BundleList_MustPurchaseAsSetSubtitle",
                            ),
                          }),
                          (0, r.jsx)(L, {
                            appId: t.GetAppID(),
                            bundleSort: s,
                            rgBundleIDs: l.rgMustPurchaseTogetherBundleIDList,
                          }),
                        ],
                      }),
                    l.rgOwnedBundleIDList?.length > 0 &&
                      (0, r.jsxs)("div", {
                        className: D().BundlesInLibrary,
                        children: [
                          (0, r.jsx)("div", {
                            className: D().Title,
                            children: (0, R.we)("#BundleList_AllInLibrary"),
                          }),
                          (0, r.jsx)("div", {
                            className: D().Subtitle,
                            children: (0, R.we)(
                              "#BundleList_AllInLibrarySubtitle",
                            ),
                          }),
                          (0, r.jsx)(L, {
                            appId: t.GetAppID(),
                            bundleSort: s,
                            rgBundleIDs: l.rgOwnedBundleIDList,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          : (0, r.jsx)(A.t, {
              string: (0, R.we)("#Loading"),
              position: "center",
            });
      }
      function L(e) {
        const { rgBundleIDs: t, bundleSort: n, appId: s } = e;
        return (0, r.jsx)("div", {
          className: D().BundlesList,
          children: t.map((e) =>
            (0, r.jsx)(C, { bundleId: e, appId: s }, "bundleDisplay_" + e),
          ),
        });
      }
      function C(e) {
        const { bundleId: t, appId: n } = e;
        return (0, r.jsx)("div", {
          className: D().BundleRow,
          children: (0, r.jsx)(G.p, {
            id: t,
            type: "bundle",
            bShowDeckCompatibilityDialog: !1,
            bPreferAssetWithoutOverride: !1,
          }),
        });
      }
      function T(e) {
        const { eBundleSort: t, fnSetSort: n } = e,
          s = (0, b.useMemo)(
            () => [
              {
                data: y.k_BundleSort_Name,
                label: (0, R.we)("#BundleList_SortBy_Name"),
              },
              {
                data: y.k_BundleSort_Price,
                label: (0, R.we)("#BundleList_SortBy_Price"),
              },
            ],
            [],
          );
        return (0, r.jsx)(S.ZU, {
          selectedOption: t,
          renderButtonValue: (e) =>
            (0, r.jsxs)("div", {
              children: [(0, R.we)("#BundleList_SortBy"), " ", e],
            }),
          rgOptions: s,
          strDefaultLabel: (0, R.we)("#BundleList_SortBy"),
          onChange: ({ data: e }) => n(e),
        });
      }
      !(function (e) {
        (e[(e.k_BundleSort_Name = 1)] = "k_BundleSort_Name"),
          (e[(e.k_BundleSort_Price = 2)] = "k_BundleSort_Price"),
          (e[(e.k_BundleSort_Popular = 3)] = "k_BundleSort_Popular");
      })(y || (y = {}));
    },
  },
]);
