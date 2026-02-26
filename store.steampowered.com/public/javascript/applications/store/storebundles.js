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
    57876: (e, t, r) => {
      "use strict";
      r.d(t, {
        Jw: () => o,
        Xh: () => i,
        cU: () => c,
        tf: () => _,
        wl: () => u,
      });
      var n = r(22837),
        s = r(30894),
        a = r(16021),
        l = r(62792),
        d = r(78327);
      const i = {
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
      function o() {
        return { width: 231, height: 87 };
      }
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
      const u = 4;
      function _(e, t, r, n, s, d) {
        const i = new Array(),
          o = new Array(),
          c = new Array(),
          _ = new Array();
        if (!e || 0 == e.length) return i;
        const m = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let d of e) {
          let e = d.id,
            u = l.by.k_NotRejected;
          switch (d.item_type) {
            case "sub":
              const s = a.A.Get().GetPackage(e);
              if (1 !== s?.GetIncludedAppIDs()?.length) {
                u = B(e, t, n, !0);
                break;
              }
              e = s.GetIncludedAppIDs()[0];
            case "app":
              u = b(e, t, r, n, !0);
              break;
            case "bundle":
              u = I(e, t, n, !0);
          }
          if (
            (u == l.by.k_NotRejected
              ? ((d.rejected = l.by.k_NotRejected),
                i.push({ ...d, priority: 1 }))
              : m.includes(u)
                ? ((d.rejected = l.by.k_NotRejected), o.push(d))
                : ((d.rejected = u),
                  u == l.by.k_RejectIgnoredGame ? c.push(d) : _.push(d)),
            i.length > s)
          )
            break;
        }
        return (
          i.length < s &&
            (p(i, o, d, 2),
            i.length < d &&
              t.enforce_minimum &&
              (p(i, c, d, 3), p(i, _, d, u))),
          i
        );
      }
      function p(e, t, r, n) {
        for (let s = 0; e.length < r && s < t.length; ++s)
          e.push({ ...t[s], priority: n });
      }
      function m(e, t) {
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
            return l.by.k_RejectWrongPlatform;
        }
        return !t.prepurchase && e.BIsComingSoon()
          ? l.by.k_RejectNoComingSoon
          : !t.virtual_reality && e.GetPlatforms()?.vr_support.vrhmd_only
            ? l.by.k_RejectNoVR
            : e.GetAllCreatorClanIDs()?.some((e) => r.BIsIgnoringCurator(e))
              ? l.by.k_RejectCreatorClan
              : l.by.k_NotRejected;
      }
      function y(e, t) {
        if (t.localized) {
          const t = (0, n.sf)(d.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function b(e, t, r, n, d) {
        const i = a.A.Get().GetApp(e);
        if (!i) return l.by.k_RejectNotLoaded;
        const o = m(i, t);
        if (o != l.by.k_NotRejected) return o;
        const c = s.Fm.Get();
        if (c.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (c.BExcludeTagIDs(i.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (c.BExcludesContentDescriptor(i.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && i.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const u = i.GetAppType();
        return t.software || 6 != u
          ? t.games_already_in_library && c.BIsGameOwned(e)
            ? l.by.k_RejectInLibrary
            : t.games_not_in_library && !c.BIsGameOwned(e)
              ? l.by.k_RejectNotInLibrary
              : !t.video && [7, 8, 9].includes(u)
                ? l.by.k_RejectVideo
                : t.has_discount && !i.GetBestPurchaseOption().discount_pct
                  ? l.by.k_RejectNoDiscount
                  : "adultonly" != r &&
                      t.no_ao_content &&
                      (i.HasContentDescriptorID(3) ||
                        i.HasContentDescriptorID(4))
                    ? l.by.k_RejectAO
                    : 1 == u &&
                        t.games_already_in_library &&
                        c.BIsGameOwned(i.GetParentAppID())
                      ? l.by.k_RejectInLibrary
                      : d
                        ? (1 == u && n.BHasAppID(i.GetParentAppID())) ||
                          n.BHasAppID(e)
                          ? l.by.k_RejectAlreadyDisplayed
                          : t.has_trailer && !i.BHasTrailers(!1)
                            ? l.by.k_RejectNoTrailer
                            : y(i, t)
                        : l.by.k_NotRejected
          : l.by.k_RejectSoftware;
      }
      function h(e, t) {
        const r = s.Fm.Get();
        let n = !1;
        for (let t of e) {
          if (r.BIsGameIgnored(t)) return l.by.k_RejectIgnoredGame;
          r.BIsGameOwned(t) && (n = !0);
        }
        return t.games_not_in_library && n
          ? l.by.k_RejectInLibrary
          : t.games_not_in_library && !n
            ? l.by.k_RejectNotInLibrary
            : l.by.k_NotRejected;
      }
      function B(e, t, r, n) {
        const d = a.A.Get().GetPackage(e);
        if (!d) return l.by.k_RejectNotLoaded;
        const i = m(d, t);
        if (i != l.by.k_NotRejected) return i;
        const o = h(d.GetIncludedAppIDs(), t);
        if (o != l.by.k_NotRejected) return o;
        const c = s.Fm.Get();
        return t.games_already_in_library && c.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : c.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : n
              ? r.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : y(d, t)
              : l.by.k_NotRejected;
      }
      function I(e, t, r, n) {
        const s = a.A.Get().GetBundle(e);
        if (!s) return l.by.k_RejectNotLoaded;
        const d = m(s, t);
        if (d != l.by.k_NotRejected) return d;
        const i = h(s.GetIncludedAppIDs(), t);
        return i != l.by.k_NotRejected
          ? i
          : n
            ? r.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : y(s, t)
            : l.by.k_NotRejected;
      }
    },
    54847: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => o });
      var n = r(7850),
        s = r(39777),
        a = r(35380),
        l = r(41399),
        d = r(18654),
        i = r.n(d);
      function o(e) {
        const { id: t, type: r } = e,
          d = (0, a.rt)({ id: t, type: r }),
          { data: o } = (0, s.J$)(d);
        return (0, n.jsx)("div", {
          className: i().SaleItemBrowserRow,
          children: (0, n.jsx)(l.p, {
            ...e,
            bShowReviewSummary: !0,
            bShowDemoButton: e.bShowDemoButton || 1 == o?.type,
            bPreferDemoStorePage: e.bPreferDemoStorePage,
          }),
        });
      }
    },
    93135: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => L });
      var n = r(7850),
        s = r(39777),
        a = r(15631),
        l = r.n(a),
        d = r(42834);
      function i(e) {
        const { id: t } = e,
          { data: r } = (0, s.J$)(t),
          { data: a } = (0, s.lv)(t);
        if (!a || !r) return null;
        const i =
          (0, d.b0)(a, "library_hero_2x") ??
          (0, d.b0)(a, "library_hero") ??
          (0, d.b0)(a, "raw_page_background");
        return i
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("div", {
                  className: l().BackgroundImageCtn,
                  children: (0, n.jsx)("img", { src: i, alt: r.name }),
                }),
                (0, n.jsx)("div", {
                  className: l().BackgroundImageBlurCtn,
                  children: (0, n.jsx)("img", { src: i, alt: r.name }),
                }),
              ],
            })
          : null;
      }
      var o = r(35380),
        c = r(51078),
        u = r(3740),
        _ = r(67082),
        p = r.n(_);
      function m(e) {
        const { appid: t, elPageSort: r, strPageSubTitle: a } = e,
          l = (0, o.$5)(t),
          { data: i } = (0, s.J$)(l),
          { data: _ } = (0, s.lv)(l),
          { strStoreURL: m } = (0, c.x)(i);
        return i
          ? (0, n.jsxs)("div", {
              className: p().AppHeader,
              children: [
                (0, n.jsx)("div", {
                  className: p().CapsuleSizer,
                  children: (0, n.jsx)("a", {
                    href: m,
                    children:
                      _ &&
                      (0, n.jsx)("img", {
                        src: (0, d.b0)(_, "header"),
                        alt: i.name || "",
                      }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: p().TitleGroup,
                  children: [
                    a &&
                      (0, n.jsx)("div", {
                        className: p().SubTitle,
                        children: a,
                      }),
                    (0, n.jsx)("a", {
                      href: m,
                      className: p().Title,
                      children: i.name || "",
                    }),
                    (0, n.jsx)(u.N, { id: l }),
                  ],
                }),
                Boolean(r) &&
                  (0, n.jsx)("div", {
                    className: p().SortOptions,
                    children: r,
                  }),
              ],
            })
          : null;
      }
      var y,
        b = r(90626),
        h = r(57876),
        B = r(30894),
        I = r(75279),
        g = r(16021),
        j = r(55263),
        f = r(63090),
        S = r(84811),
        k = r(54847),
        G = r(32630),
        A = r(22797),
        N = r(52038),
        R = r(61859),
        w = r(24484),
        D = r(31960),
        x = r.n(D);
      function L(e) {
        const {
            match: {
              params: { appid: t },
            },
          } = e,
          r = Number.parseInt(t),
          [s] = (0, j.t7)(r, h.Xh);
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
          (0, n.jsx)(G.Ay, {
            method: "bundlelist",
            children: (0, n.jsx)(S.tH, {
              children: (0, n.jsx)(P, { storeItem: s }),
            }),
          })
        );
      }
      function P(e) {
        const { storeItem: t } = e,
          r = (0, I.DJ)(t),
          [s, a] = (0, b.useState)(y.k_BundleSort_Price),
          l = (function (e) {
            const t = (0, b.useMemo)(
                () => (0, w.Tc)("bundle_list", "application_config"),
                [],
              ),
              [r] = (0, B.L2)(),
              n = (0, j.MS)(t, h.Xh),
              s = (0, b.useMemo)(() => {
                if (!t || (3 != n && 2 != n)) return null;
                {
                  let r = t;
                  switch (
                    (2 == n &&
                      (r = t.filter((e) => {
                        const t = g.A.Get().GetBundle(e);
                        return t?.BIsVisible();
                      })),
                    e)
                  ) {
                    case y.k_BundleSort_Name:
                      return [...r].sort((e, t) => {
                        const r = g.A.Get().GetBundle(e),
                          n = g.A.Get().GetBundle(t);
                        return r.GetName().localeCompare(n.GetName());
                      });
                    case y.k_BundleSort_Price:
                      return [...r].sort((e, t) => {
                        const r = g.A.Get().GetBundle(e),
                          n = g.A.Get().GetBundle(t);
                        return (
                          r.GetBestPurchasePriceInCents() -
                          n.GetBestPurchasePriceInCents()
                        );
                      });
                    default:
                      return r;
                  }
                }
              }, [e, n, t]);
            if (s && !r) {
              const e = new Array(),
                t = new Array(),
                r = new Array();
              return (
                s.forEach((n) => {
                  const s = g.A.Get().GetBundle(n);
                  s.GetIncludedAppIDs().some((e) => !B.Fm.Get().BOwnsApp(e))
                    ? s.GetBestPurchaseOption().must_purchase_as_set
                      ? r.push(n)
                      : t.push(n)
                    : e.push(n);
                }),
                {
                  rgOwnedBundleIDList: e,
                  rgCompleteTheSetBundleIDList: t,
                  rgMustPurchaseTogetherBundleIDList: r,
                }
              );
            }
            return null;
          })(s);
        return t && l
          ? (0, n.jsxs)("div", {
              className: x().Ctn,
              children: [
                (0, n.jsx)(i, { id: r }),
                (0, n.jsxs)("div", {
                  className: (0, N.A)("page_content"),
                  children: [
                    (0, n.jsx)(m, {
                      appid: t.GetAppID(),
                      elPageSort: (0, n.jsx)(T, {
                        eBundleSort: s,
                        fnSetSort: a,
                      }),
                      strPageSubTitle: (0, R.we)("#BundleList_SubTitle"),
                    }),
                    l.rgCompleteTheSetBundleIDList?.length > 0 &&
                      (0, n.jsxs)("div", {
                        className: x().BundlesInLibrary,
                        children: [
                          (0, n.jsx)("div", {
                            className: x().Title,
                            children: (0, R.we)("#BundleList_CompleteTheSet"),
                          }),
                          (0, n.jsx)("div", {
                            className: x().Subtitle,
                            children: (0, R.we)(
                              "#BundleList_CompleteTheSetSubtitle",
                            ),
                          }),
                          (0, n.jsx)(v, {
                            appId: t.GetAppID(),
                            bundleSort: s,
                            rgBundleIDs: l.rgCompleteTheSetBundleIDList,
                          }),
                        ],
                      }),
                    l.rgMustPurchaseTogetherBundleIDList?.length > 0 &&
                      (0, n.jsxs)("div", {
                        className: x().BundlesInLibrary,
                        children: [
                          (0, n.jsx)("div", {
                            className: x().Title,
                            children: (0, R.we)(
                              "#BundleList_MustPurchaseAsSet",
                            ),
                          }),
                          (0, n.jsx)("div", {
                            className: x().Subtitle,
                            children: (0, R.we)(
                              "#BundleList_MustPurchaseAsSetSubtitle",
                            ),
                          }),
                          (0, n.jsx)(v, {
                            appId: t.GetAppID(),
                            bundleSort: s,
                            rgBundleIDs: l.rgMustPurchaseTogetherBundleIDList,
                          }),
                        ],
                      }),
                    l.rgOwnedBundleIDList?.length > 0 &&
                      (0, n.jsxs)("div", {
                        className: x().BundlesInLibrary,
                        children: [
                          (0, n.jsx)("div", {
                            className: x().Title,
                            children: (0, R.we)("#BundleList_AllInLibrary"),
                          }),
                          (0, n.jsx)("div", {
                            className: x().Subtitle,
                            children: (0, R.we)(
                              "#BundleList_AllInLibrarySubtitle",
                            ),
                          }),
                          (0, n.jsx)(v, {
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
          : (0, n.jsx)(A.t, {
              string: (0, R.we)("#Loading"),
              position: "center",
            });
      }
      function v(e) {
        const { rgBundleIDs: t, bundleSort: r, appId: s } = e;
        return (0, n.jsx)("div", {
          className: x().BundlesList,
          children: t.map((e) =>
            (0, n.jsx)(C, { bundleId: e, appId: s }, "bundleDisplay_" + e),
          ),
        });
      }
      function C(e) {
        const { bundleId: t, appId: r } = e;
        return (0, n.jsx)("div", {
          className: x().BundleRow,
          children: (0, n.jsx)(k.p, {
            id: t,
            type: "bundle",
            bShowDeckCompatibilityDialog: !1,
            bPreferAssetWithoutOverride: !1,
          }),
        });
      }
      function T(e) {
        const { eBundleSort: t, fnSetSort: r } = e,
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
        return (0, n.jsx)(f.ZU, {
          selectedOption: t,
          renderButtonValue: (e) =>
            (0, n.jsxs)("div", {
              children: [(0, R.we)("#BundleList_SortBy"), " ", e],
            }),
          rgOptions: s,
          strDefaultLabel: (0, R.we)("#BundleList_SortBy"),
          onChange: ({ data: e }) => r(e),
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
