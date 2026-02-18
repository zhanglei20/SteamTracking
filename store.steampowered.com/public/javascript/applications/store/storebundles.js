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
        Jw: () => i,
        Xh: () => c,
        cU: () => u,
        tf: () => m,
        wl: () => d,
      });
      var n = r(22837),
        a = r(30894),
        s = r(16021),
        l = r(62792),
        o = r(78327);
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
      function i() {
        return { width: 231, height: 87 };
      }
      class u {
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
      function m(e, t, r, n, a, o) {
        const c = new Array(),
          i = new Array(),
          u = new Array(),
          m = new Array();
        if (!e || 0 == e.length) return c;
        const p = [
          l.by.k_RejectSupportedLanguage,
          l.by.k_RejectAlreadyDisplayed,
          l.by.k_RejectNoTrailer,
        ];
        for (let o of e) {
          let e = o.id,
            d = l.by.k_NotRejected;
          switch (o.item_type) {
            case "sub":
              const a = s.A.Get().GetPackage(e);
              if (1 !== a?.GetIncludedAppIDs()?.length) {
                d = B(e, t, n, !0);
                break;
              }
              e = a.GetIncludedAppIDs()[0];
            case "app":
              d = b(e, t, r, n, !0);
              break;
            case "bundle":
              d = I(e, t, n, !0);
          }
          if (
            (d == l.by.k_NotRejected
              ? ((o.rejected = l.by.k_NotRejected),
                c.push({ ...o, priority: 1 }))
              : p.includes(d)
                ? ((o.rejected = l.by.k_NotRejected), i.push(o))
                : ((o.rejected = d),
                  d == l.by.k_RejectIgnoredGame ? u.push(o) : m.push(o)),
            c.length > a)
          )
            break;
        }
        return (
          c.length < a &&
            (_(c, i, o, 2),
            c.length < o &&
              t.enforce_minimum &&
              (_(c, u, o, 3), _(c, m, o, d))),
          c
        );
      }
      function _(e, t, r, n) {
        for (let a = 0; e.length < r && a < t.length; ++a)
          e.push({ ...t[a], priority: n });
      }
      function p(e, t) {
        const r = a.Fm.Get();
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
          const t = (0, n.sf)(o.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return l.by.k_RejectSupportedLanguage;
        }
        return l.by.k_NotRejected;
      }
      function b(e, t, r, n, o) {
        const c = s.A.Get().GetApp(e);
        if (!c) return l.by.k_RejectNotLoaded;
        const i = p(c, t);
        if (i != l.by.k_NotRejected) return i;
        const u = a.Fm.Get();
        if (u.BIsGameIgnored(e)) return l.by.k_RejectIgnoredGame;
        if (u.BExcludeTagIDs(c.GetTagIDs())) return l.by.k_RejectIgnoreGameTags;
        if (u.BExcludesContentDescriptor(c.GetContentDescriptorIDs()))
          return l.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && c.BIsEarlyAccess())
          return l.by.k_RejectEarlyAccess;
        const d = c.GetAppType();
        return t.software || 6 != d
          ? t.games_already_in_library && u.BIsGameOwned(e)
            ? l.by.k_RejectInLibrary
            : t.games_not_in_library && !u.BIsGameOwned(e)
              ? l.by.k_RejectNotInLibrary
              : !t.video && [7, 8, 9].includes(d)
                ? l.by.k_RejectVideo
                : t.has_discount && !c.GetBestPurchaseOption().discount_pct
                  ? l.by.k_RejectNoDiscount
                  : "adultonly" != r &&
                      t.no_ao_content &&
                      (c.HasContentDescriptorID(3) ||
                        c.HasContentDescriptorID(4))
                    ? l.by.k_RejectAO
                    : 1 == d &&
                        t.games_already_in_library &&
                        u.BIsGameOwned(c.GetParentAppID())
                      ? l.by.k_RejectInLibrary
                      : o
                        ? (1 == d && n.BHasAppID(c.GetParentAppID())) ||
                          n.BHasAppID(e)
                          ? l.by.k_RejectAlreadyDisplayed
                          : t.has_trailer && !c.BHasTrailers(!1)
                            ? l.by.k_RejectNoTrailer
                            : y(c, t)
                        : l.by.k_NotRejected
          : l.by.k_RejectSoftware;
      }
      function g(e, t) {
        const r = a.Fm.Get();
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
        const o = s.A.Get().GetPackage(e);
        if (!o) return l.by.k_RejectNotLoaded;
        const c = p(o, t);
        if (c != l.by.k_NotRejected) return c;
        const i = g(o.GetIncludedAppIDs(), t);
        if (i != l.by.k_NotRejected) return i;
        const u = a.Fm.Get();
        return t.games_already_in_library && u.BOwnsPackage(e)
          ? l.by.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
            ? l.by.k_RejectIgnoredGame
            : n
              ? r.BHasPackageID(e)
                ? l.by.k_RejectAlreadyDisplayed
                : y(o, t)
              : l.by.k_NotRejected;
      }
      function I(e, t, r, n) {
        const a = s.A.Get().GetBundle(e);
        if (!a) return l.by.k_RejectNotLoaded;
        const o = p(a, t);
        if (o != l.by.k_NotRejected) return o;
        const c = g(a.GetIncludedAppIDs(), t);
        return c != l.by.k_NotRejected
          ? c
          : n
            ? r.BHasBundleID(e)
              ? l.by.k_RejectAlreadyDisplayed
              : y(a, t)
            : l.by.k_NotRejected;
      }
    },
    95034: (e, t, r) => {
      "use strict";
      r.d(t, {
        Bm: () => l,
        QD: () => c,
        f3: () => s,
        iV: () => u,
        ip: () => i,
        le: () => o,
      });
      var n = r(90626),
        a = r(92757);
      function s(e, t) {
        let r;
        if ("string" == typeof e) r = e;
        else if ("location" in e) r = e.location.search;
        else {
          if (!("search" in e)) return;
          r = e.search;
        }
        const n = new URLSearchParams(r.substring(1));
        if (n.has(t)) {
          const e = n.getAll(t);
          return e[e.length - 1];
        }
      }
      function l(e, t, r, n = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        if (null != r && null != r) {
          if (a.get(t) == r) return;
          a.set(t, r);
        } else {
          if (!a.has(t)) return;
          a.delete(t);
        }
        n
          ? e.replace(`?${a.toString()}`, { ...e.location.state })
          : e.push(`?${a.toString()}`);
      }
      function o(e, t, r) {
        l(e, t, r, !0);
      }
      function c(e, t) {
        const r = (0, a.W6)(),
          o = (0, a.zy)(),
          c = (0, n.useMemo)(() => {
            const r = s(o.search, e);
            return null != r && null != r
              ? null != t && null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== r)
                  : t.constructor(r)
                : r
              : t;
          }, [o.search, e, t]),
          i = (0, n.useCallback)(
            (t, n = !1) => {
              l(r, e, null != t && null != t ? String(t) : null, n);
            },
            [r, e],
          );
        return [c, i];
      }
      function i(e, t, r = !1) {
        const n = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const r = t[e];
            n.delete(e), null != r && null != r && n.append(e, r);
          }
        r
          ? e.replace(`?${n.toString()}`, { ...e.location.state })
          : e.push(`?${n.toString()}`);
      }
      function u(e, t) {
        i(e, t, !0);
      }
    },
    54847: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => i });
      var n = r(39777),
        a = r(90626),
        s = r(35380),
        l = r(41399),
        o = r(18654),
        c = r.n(o);
      function i(e) {
        const { id: t, type: r } = e,
          o = (0, s.rt)({ id: t, type: r }),
          { data: i } = (0, n.J$)(o);
        return a.createElement(
          "div",
          { className: c().SaleItemBrowserRow },
          a.createElement(l.p, {
            ...e,
            bLoadShortDescription: !0,
            bShowReviewSummary: !0,
            bShowDemoButton: e.bShowDemoButton || 1 == i?.type,
            bPreferDemoStorePage: e.bPreferDemoStorePage,
          }),
        );
      }
    },
    93135: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => j });
      var n = r(39777),
        a = r(15631),
        s = r.n(a),
        l = r(42834),
        o = r(90626);
      function c(e) {
        const { id: t } = e,
          { data: r } = (0, n.J$)(t),
          { data: a } = (0, n.lv)(t);
        if (!a || !r) return null;
        const c =
          (0, l.b0)(a, "library_hero_2x") ??
          (0, l.b0)(a, "library_hero") ??
          (0, l.b0)(a, "raw_page_background");
        return c
          ? o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                { className: s().BackgroundImageCtn },
                o.createElement("img", { src: c, alt: r.name }),
              ),
              o.createElement(
                "div",
                { className: s().BackgroundImageBlurCtn },
                o.createElement("img", { src: c, alt: r.name }),
              ),
            )
          : null;
      }
      var i = r(20433),
        u = r(3740),
        d = r(35380),
        m = r(67082),
        _ = r.n(m);
      function p(e) {
        const { appid: t, elPageSort: r, strPageSubTitle: a } = e,
          s = (0, d.$5)(t),
          { data: c } = (0, n.J$)(s),
          { data: m } = (0, n.lv)(s);
        return c
          ? o.createElement(
              "div",
              { className: _().AppHeader },
              o.createElement(
                i.u,
                { id: s, hoverClassName: _().PreviewItem },
                m &&
                  o.createElement("img", {
                    src: (0, l.b0)(m, "header"),
                    alt: c.name || "",
                  }),
              ),
              o.createElement(
                "div",
                { className: _().TitleGroup },
                a && o.createElement("div", { className: _().SubTitle }, a),
                o.createElement("div", { className: _().Title }, c.name || ""),
                o.createElement(u.N, { id: s }),
              ),
              Boolean(r) &&
                o.createElement("div", { className: _().SortOptions }, r),
            )
          : null;
      }
      var y,
        b = r(57876),
        g = r(30894),
        B = r(75279),
        I = r(16021),
        f = r(55263),
        h = r(63090),
        S = r(84811),
        k = r(54847),
        G = r(32630),
        A = r(22797),
        N = r(52038),
        w = r(61859),
        R = r(24484),
        D = r(31960),
        P = r.n(D);
      function j(e) {
        const {
            match: {
              params: { appid: t },
            },
          } = e,
          r = Number.parseInt(t),
          [n] = (0, f.t7)(r, b.Xh);
        return (
          (0, o.useEffect)(() => {
            if (n) {
              const e = n.GetStorePageURL().replace("/app/", "/bundlelist/");
              e != window.location.href &&
                window.history.replaceState({}, "", e);
            }
          }, [n]),
          o.createElement(
            G.Ay,
            { method: "bundlelist" },
            o.createElement(S.tH, null, o.createElement(L, { storeItem: n })),
          )
        );
      }
      function L(e) {
        const { storeItem: t } = e,
          r = (0, B.DJ)(t),
          [n, a] = (0, o.useState)(y.k_BundleSort_Price),
          s = (function (e) {
            const t = (0, o.useMemo)(
                () => (0, R.Tc)("bundle_list", "application_config"),
                [],
              ),
              [r] = (0, g.L2)(),
              n = (0, f.MS)(t, b.Xh),
              a = (0, o.useMemo)(() => {
                if (3 != n && 2 != n) return null;
                {
                  let r = t;
                  switch (
                    (2 == n &&
                      (r = t.filter((e) => {
                        const t = I.A.Get().GetBundle(e);
                        return t?.BIsVisible();
                      })),
                    e)
                  ) {
                    case y.k_BundleSort_Name:
                      return [...r].sort((e, t) => {
                        const r = I.A.Get().GetBundle(e),
                          n = I.A.Get().GetBundle(t);
                        return r.GetName().localeCompare(n.GetName());
                      });
                    case y.k_BundleSort_Price:
                      return [...r].sort((e, t) => {
                        const r = I.A.Get().GetBundle(e),
                          n = I.A.Get().GetBundle(t);
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
            if (a && !r) {
              const e = new Array(),
                t = new Array(),
                r = new Array();
              return (
                a.forEach((n) => {
                  const a = I.A.Get().GetBundle(n);
                  a.GetIncludedAppIDs().some((e) => !g.Fm.Get().BOwnsApp(e))
                    ? a.GetBestPurchaseOption().must_purchase_as_set
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
          })(n);
        return t && s
          ? o.createElement(
              "div",
              { className: P().Ctn },
              o.createElement(c, { id: r }),
              o.createElement(
                "div",
                { className: (0, N.A)("page_content") },
                o.createElement(p, {
                  appid: t.GetAppID(),
                  elPageSort: o.createElement(C, {
                    eBundleSort: n,
                    fnSetSort: a,
                  }),
                  strPageSubTitle: (0, w.we)("#BundleList_SubTitle"),
                }),
                s.rgCompleteTheSetBundleIDList?.length > 0 &&
                  o.createElement(
                    "div",
                    { className: P().BundlesInLibrary },
                    o.createElement(
                      "div",
                      { className: P().Title },
                      (0, w.we)("#BundleList_CompleteTheSet"),
                    ),
                    o.createElement(
                      "div",
                      { className: P().Subtitle },
                      (0, w.we)("#BundleList_CompleteTheSetSubtitle"),
                    ),
                    o.createElement(E, {
                      appId: t.GetAppID(),
                      rgBundleIDs: s.rgCompleteTheSetBundleIDList,
                    }),
                  ),
                s.rgMustPurchaseTogetherBundleIDList?.length > 0 &&
                  o.createElement(
                    "div",
                    { className: P().BundlesInLibrary },
                    o.createElement(
                      "div",
                      { className: P().Title },
                      (0, w.we)("#BundleList_MustPurchaseAsSet"),
                    ),
                    o.createElement(
                      "div",
                      { className: P().Subtitle },
                      (0, w.we)("#BundleList_MustPurchaseAsSetSubtitle"),
                    ),
                    o.createElement(E, {
                      appId: t.GetAppID(),
                      rgBundleIDs: s.rgMustPurchaseTogetherBundleIDList,
                    }),
                  ),
                s.rgOwnedBundleIDList?.length > 0 &&
                  o.createElement(
                    "div",
                    { className: P().BundlesInLibrary },
                    o.createElement(
                      "div",
                      { className: P().Title },
                      (0, w.we)("#BundleList_AllInLibrary"),
                    ),
                    o.createElement(
                      "div",
                      { className: P().Subtitle },
                      (0, w.we)("#BundleList_AllInLibrarySubtitle"),
                    ),
                    o.createElement(E, {
                      appId: t.GetAppID(),
                      rgBundleIDs: s.rgOwnedBundleIDList,
                    }),
                  ),
              ),
            )
          : o.createElement(A.t, {
              string: (0, w.we)("#Loading"),
              position: "center",
            });
      }
      function E(e) {
        const { rgBundleIDs: t, appId: r } = e;
        return o.createElement(
          "div",
          { className: P().BundlesList },
          t.map((e) =>
            o.createElement(v, {
              key: "bundleDisplay_" + e,
              bundleId: e,
              appId: r,
            }),
          ),
        );
      }
      function v(e) {
        const { bundleId: t, appId: r } = e;
        return o.createElement(
          "div",
          { className: P().BundleRow },
          o.createElement(k.p, {
            id: t,
            type: "bundle",
            bShowDeckCompatibilityDialog: !1,
            bPreferAssetWithoutOverride: !1,
          }),
        );
      }
      function C(e) {
        const { eBundleSort: t, fnSetSort: r } = e,
          n = (0, o.useMemo)(
            () => [
              {
                data: y.k_BundleSort_Name,
                label: (0, w.we)("#BundleList_SortBy_Name"),
              },
              {
                data: y.k_BundleSort_Price,
                label: (0, w.we)("#BundleList_SortBy_Price"),
              },
            ],
            [],
          );
        return o.createElement(h.ZU, {
          selectedOption: t,
          renderButtonValue: (e) =>
            o.createElement(
              "div",
              null,
              (0, w.we)("#BundleList_SortBy"),
              " ",
              e,
            ),
          rgOptions: n,
          strDefaultLabel: (0, w.we)("#BundleList_SortBy"),
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
