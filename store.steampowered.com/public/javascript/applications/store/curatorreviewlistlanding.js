/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [716],
  {
    33380: (e) => {
      e.exports = {
        VideoReviewCtn: "V6zz2NPPxfnGjAchCe56r",
        YouTubePreviewImage: "_3joL1ZVcmC-6lCOLfjuIq7",
        TwitchPlayer: "_1Q0Ym9jG7UCFeD3c9LbOSy",
      };
    },
    66272: (e) => {
      e.exports = { BreadContainer: "_3jswbLK3E0Uf47oGyc6qUG" };
    },
    70758: (e) => {
      e.exports = {
        YoutubePreviewImage: "_3bVwKmAuh70AH8XVDnyf5z",
        YoutubePlayer: "_3oXEPQSJY3yN1IVhfxeSy0",
      };
    },
    62014: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        CuratorListCtn: "_2gWFdH7drZgtMXI_JjbaEe",
        CuratorMoreCtn: "_16t3PcvDZGiwAgEfjIWfND",
        TopReviewInfo: "_3SZBzK03VjBtPI7wx3Z1Pt",
        SaleBanner: "_1wbf-cPcI2i7efNOekBbhu",
        Title: "_1MhFdjaeyR9X7HgdfjSXqG",
        Blurb: "rrcHStOnbRfOfaohgKQ55",
        VideoReviewCtn: "RojwrkrnYMOZ6Ab8k-v1r",
        YouTubePreviewImage: "eObSf_yyzMWHlRgVTfVWa",
        CuratorList: "_1VI6Grz2uioikkf0a6Tw0k",
        CuratorListGrid: "qJM6j2qrVRIXCMuuxmhQA",
        CuratorReview: "_31hoQDSYDcWbwweAx-nymb",
        CapsuleCtn: "MY9Lke1NKqCw4L796pl4u",
        YouTubeCapsule: "_1siEspisMPcFe74Nhb8Y1h",
        YouTubeCtn: "_1uz1Wrv0OB4A4PzZFy-7ze",
        YouTubeCapsuleBottomBar: "_1d9MpJzvsoRCYuymkRgyB7",
        GameImageCtn: "_220F7CEs1Z6JO8qX1VpEin",
        GameImage: "_7gTF4ahFWgDDx5lj6B81t",
        FullWidth: "_3ditFur3nylrloT3tIcfyH",
        ReviewTextSection: "_1597WAIOnVRCDEZFRnmiOg",
        GameTitle: "nl2T_2iAiLU-LBJ0Vlt1g",
        RecommendationTypeAndDate: "_2lz6uYceCiIZbZ9gceZI-p",
        Recommended: "_3v9QioBsRmE5yW7CqZmejk",
        NotRecommended: "_3iOGokAKIIBxl8O2K4ReUO",
        Informational: "_261FhJXj3ppl0_SvJBDLeL",
        ReviewDate: "HCiYl0KEiRyfIc-3K7r51",
        ReviewBlurb: "_1y_bxMLn9yOlKneJzFSPkc",
        FullReviewLink: "_3_8G-9J9Ck495Bbx1AtzXb",
        FullReviewAnchor: "_3pWCNXNZaWp_KqFU6n38sy",
        FullReviewDomain: "_2R37NZqjmxkImiPnoElHtm",
      };
    },
    22584: (e) => {
      e.exports = { BreadContainer: "GkVFIKIAijTGzfSc4BEQl" };
    },
    17083: (e, t, n) => {
      "use strict";
      n.d(t, { N_: () => f, k2: () => y });
      var a = n(92757),
        r = n(42891),
        s = n(90626),
        i = n(29248),
        o = n(58584),
        l = n(81115),
        c = n(68841);
      s.Component;
      s.Component;
      var u = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, i.yJ)(e, null, null, t) : e;
        },
        _ = function (e) {
          return e;
        },
        m = s.forwardRef;
      void 0 === m && (m = _);
      var p = m(function (e, t) {
        var n = e.innerRef,
          a = e.navigate,
          r = e.onClick,
          i = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          c = i.target,
          u = (0, o.A)({}, i, {
            onClick: function (e) {
              try {
                r && r(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), a());
            },
          });
        return (u.ref = (_ !== m && t) || n), s.createElement("a", u);
      });
      var f = m(function (e, t) {
          var n = e.component,
            r = void 0 === n ? p : n,
            f = e.replace,
            h = e.to,
            g = e.innerRef,
            y = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return s.createElement(a.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var n = e.history,
              a = d(u(h, e.location), e.location),
              l = a ? n.createHref(a) : "",
              p = (0, o.A)({}, y, {
                href: l,
                navigate: function () {
                  var t = u(h, e.location),
                    a = (0, i.AO)(e.location) === (0, i.AO)(d(t));
                  (f || a ? n.replace : n.push)(t);
                },
              });
            return (
              _ !== m ? (p.ref = t || g) : (p.innerRef = g),
              s.createElement(r, p)
            );
          });
        }),
        h = function (e) {
          return e;
        },
        g = s.forwardRef;
      void 0 === g && (g = h);
      var y = g(function (e, t) {
        var n = e["aria-current"],
          r = void 0 === n ? "page" : n,
          i = e.activeClassName,
          _ = void 0 === i ? "active" : i,
          m = e.activeStyle,
          p = e.className,
          y = e.exact,
          I = e.isActive,
          b = e.location,
          v = e.sensitive,
          A = e.strict,
          S = e.style,
          G = e.to,
          w = e.innerRef,
          j = (0, l.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return s.createElement(a.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var n = b || e.location,
            i = d(u(G, n), n),
            l = i.pathname,
            C = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            R = C
              ? (0, a.B6)(n.pathname, {
                  path: C,
                  exact: y,
                  sensitive: v,
                  strict: A,
                })
              : null,
            x = !!(I ? I(R, n) : R),
            D = "function" == typeof p ? p(x) : p,
            B = "function" == typeof S ? S(x) : S;
          x &&
            ((D = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(D, _)),
            (B = (0, o.A)({}, B, m)));
          var k = (0, o.A)(
            { "aria-current": (x && r) || null, className: D, style: B, to: i },
            j,
          );
          return (
            h !== g ? (k.ref = t || w) : (k.innerRef = w), s.createElement(f, k)
          );
        });
      });
    },
    57876: (e, t, n) => {
      "use strict";
      n.d(t, { Xh: () => l, cU: () => c, tf: () => d, wl: () => u });
      var a = n(22837),
        r = n(30894),
        s = n(16021),
        i = n(62792),
        o = n(78327);
      const l = {
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
      const u = 4;
      function d(e, t, n, a, r, o) {
        const l = new Array(),
          c = new Array(),
          d = new Array(),
          m = new Array();
        if (!e || 0 == e.length) return l;
        const p = [
          i.by.k_RejectSupportedLanguage,
          i.by.k_RejectAlreadyDisplayed,
          i.by.k_RejectNoTrailer,
        ];
        for (let o of e) {
          let e = o.id,
            u = i.by.k_NotRejected;
          switch (o.item_type) {
            case "sub":
              const r = s.A.Get().GetPackage(e);
              if (1 !== r?.GetIncludedAppIDs()?.length) {
                u = g(e, t, a, !0);
                break;
              }
              e = r.GetIncludedAppIDs()[0];
            case "app":
              u = f(e, t, n, a, !0);
              break;
            case "bundle":
              u = y(e, t, a, !0);
          }
          if (
            (u == i.by.k_NotRejected
              ? ((o.rejected = i.by.k_NotRejected),
                l.push({ ...o, priority: 1 }))
              : p.includes(u)
                ? ((o.rejected = i.by.k_NotRejected), c.push(o))
                : ((o.rejected = u),
                  u == i.by.k_RejectIgnoredGame ? d.push(o) : m.push(o)),
            l.length > r)
          )
            break;
        }
        return (
          l.length < r &&
            (_(l, c, o, 2),
            l.length < o &&
              t.enforce_minimum &&
              (_(l, d, o, 3), _(l, m, o, u))),
          l
        );
      }
      function _(e, t, n, a) {
        for (let r = 0; e.length < n && r < t.length; ++r)
          e.push({ ...t[r], priority: a });
      }
      function m(e, t) {
        const n = r.Fm.Get();
        if (t.only_current_platform && n.BHasPlatformPreferenceSet()) {
          if (
            !(
              (e.GetPlatforms()?.windows && n.BIsPreferredPlatform("win")) ||
              (e.GetPlatforms()?.mac && n.BIsPreferredPlatform("mac")) ||
              (e.GetPlatforms()?.steamos_linux &&
                n.BIsPreferredPlatform("linux"))
            )
          )
            return i.by.k_RejectWrongPlatform;
        }
        return !t.prepurchase && e.BIsComingSoon()
          ? i.by.k_RejectNoComingSoon
          : !t.virtual_reality && e.GetPlatforms()?.vr_support.vrhmd_only
            ? i.by.k_RejectNoVR
            : e.GetAllCreatorClanIDs()?.some((e) => n.BIsIgnoringCurator(e))
              ? i.by.k_RejectCreatorClan
              : i.by.k_NotRejected;
      }
      function p(e, t) {
        if (t.localized) {
          const t = (0, a.sf)(o.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return i.by.k_RejectSupportedLanguage;
        }
        return i.by.k_NotRejected;
      }
      function f(e, t, n, a, o) {
        const l = s.A.Get().GetApp(e);
        if (!l) return i.by.k_RejectNotLoaded;
        const c = m(l, t);
        if (c != i.by.k_NotRejected) return c;
        const u = r.Fm.Get();
        if (u.BIsGameIgnored(e)) return i.by.k_RejectIgnoredGame;
        if (u.BExcludeTagIDs(l.GetTagIDs())) return i.by.k_RejectIgnoreGameTags;
        if (u.BExcludesContentDescriptor(l.GetContentDescriptorIDs()))
          return i.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && l.BIsEarlyAccess())
          return i.by.k_RejectEarlyAccess;
        const d = l.GetAppType();
        return t.software || 6 != d
          ? t.games_already_in_library && u.BIsGameOwned(e)
            ? i.by.k_RejectInLibrary
            : t.games_not_in_library && !u.BIsGameOwned(e)
              ? i.by.k_RejectNotInLibrary
              : !t.video && [7, 8, 9].includes(d)
                ? i.by.k_RejectVideo
                : t.has_discount && !l.GetBestPurchaseOption().discount_pct
                  ? i.by.k_RejectNoDiscount
                  : "adultonly" != n &&
                      t.no_ao_content &&
                      (l.HasContentDescriptorID(3) ||
                        l.HasContentDescriptorID(4))
                    ? i.by.k_RejectAO
                    : 1 == d &&
                        t.games_already_in_library &&
                        u.BIsGameOwned(l.GetParentAppID())
                      ? i.by.k_RejectInLibrary
                      : o
                        ? (1 == d && a.BHasAppID(l.GetParentAppID())) ||
                          a.BHasAppID(e)
                          ? i.by.k_RejectAlreadyDisplayed
                          : t.has_trailer && !l.BHasTrailers(!1)
                            ? i.by.k_RejectNoTrailer
                            : p(l, t)
                        : i.by.k_NotRejected
          : i.by.k_RejectSoftware;
      }
      function h(e, t) {
        const n = r.Fm.Get();
        let a = !1;
        for (let t of e) {
          if (n.BIsGameIgnored(t)) return i.by.k_RejectIgnoredGame;
          n.BIsGameOwned(t) && (a = !0);
        }
        return t.games_not_in_library && a
          ? i.by.k_RejectInLibrary
          : t.games_not_in_library && !a
            ? i.by.k_RejectNotInLibrary
            : i.by.k_NotRejected;
      }
      function g(e, t, n, a) {
        const o = s.A.Get().GetPackage(e);
        if (!o) return i.by.k_RejectNotLoaded;
        const l = m(o, t);
        if (l != i.by.k_NotRejected) return l;
        const c = h(o.GetIncludedAppIDs(), t);
        if (c != i.by.k_NotRejected) return c;
        const u = r.Fm.Get();
        return t.games_already_in_library && u.BOwnsPackage(e)
          ? i.by.k_RejectInLibrary
          : u.BIsPackageIgnored(e)
            ? i.by.k_RejectIgnoredGame
            : a
              ? n.BHasPackageID(e)
                ? i.by.k_RejectAlreadyDisplayed
                : p(o, t)
              : i.by.k_NotRejected;
      }
      function y(e, t, n, a) {
        const r = s.A.Get().GetBundle(e);
        if (!r) return i.by.k_RejectNotLoaded;
        const o = m(r, t);
        if (o != i.by.k_NotRejected) return o;
        const l = h(r.GetIncludedAppIDs(), t);
        return l != i.by.k_NotRejected
          ? l
          : a
            ? n.BHasBundleID(e)
              ? i.by.k_RejectAlreadyDisplayed
              : p(r, t)
            : i.by.k_NotRejected;
      }
    },
    70995: (e, t, n) => {
      "use strict";
      n.d(t, { Lg: () => c, XU: () => d });
      const a = 20,
        r = /^.*youtube[^v]+v=(.{11}).*/,
        s = /^.*youtu\.be\/(.{11}).*/,
        i = /^.*youtube.*\/embed\/(.{11}).*/,
        o = /^.*[?&]t=([^&]+)(?:&|$)/,
        l = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
      function c(e) {
        return !!u(e);
      }
      function u(e) {
        const t = e?.length < a ? void 0 : r.exec(e) || s.exec(e) || i.exec(e);
        return t?.[1];
      }
      function d(e) {
        const t = u(e);
        if (!t) return;
        const n = (function (e) {
            const t = o.exec(e);
            return t?.[1];
          })(e),
          a = n
            ? (function (e) {
                const t = l.exec(e);
                if (!(t?.[1] || t?.[2] || t?.[3] || t?.[4])) return;
                if (t?.[4]) return parseInt(t?.[4]);
                let n = 0;
                return (
                  t?.[1] && (n += 3600 * parseInt(t[1])),
                  t?.[2] && (n += 60 * parseInt(t[2])),
                  t?.[3] && (n += parseInt(t[3])),
                  n
                );
              })(n)
            : void 0;
        return { strVideoID: t, nStartSeconds: a };
      }
    },
    36837: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => r });
      var a = n(78327);
      class r {
        m_HomeView;
        BHasHomeView() {
          return Boolean(this.m_HomeView);
        }
        GetHomeView() {
          return this.m_HomeView?.home;
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            r.s_globalSingletonStore ||
              ((r.s_globalSingletonStore = new r()),
              "dev" == a.TS.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = r.s_globalSingletonStore)),
            r.s_globalSingletonStore
          );
        }
        constructor() {
          "dev" === a.TS.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const e = (0, a.Tc)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = (0, a.Tc)(
            "home_view_setting_override",
            "application_config",
          );
          this.ValidateHomeViewDataOverride(t) &&
            this.SetHomeViewSettingOverride(t);
        }
        ValidateHomeViewData(e) {
          const t = e;
          return (
            t && "object" == typeof t.home && "object" == typeof t.main_cluster
          );
        }
        SetHomeViewSetting(e) {
          this.m_HomeView = e;
        }
        ValidateHomeViewDataOverride(e) {
          const t = e;
          return (
            t &&
            (!t.all || "object" == typeof t.all) &&
            (!t.maincap || "object" == typeof t.maincap)
          );
        }
        SetHomeViewSettingOverride(e) {
          this.m_HomeView.home = {
            ...this.m_HomeView.home,
            ...e?.all,
            ...e?.maincap,
          };
        }
      }
    },
    6626: (e, t, n) => {
      "use strict";
      n.d(t, {
        F6: () => I,
        ME: () => A,
        RA: () => v,
        cc: () => G,
        fq: () => w,
        m1: () => S,
      });
      var a = n(34629),
        r = n(41735),
        s = n.n(r),
        i = n(14947),
        o = n(90626),
        l = n(17720),
        c = n(4796),
        u = n(30894),
        d = n(6379),
        _ = n(99032),
        m = n(62490),
        p = n(81393),
        f = n(68797),
        h = n(84933),
        g = n(78327);
      function y(e) {
        e.list_jsondata && "string" == typeof e.list_jsondata
          ? (e.list_jsondata = JSON.parse(e.list_jsondata))
          : ((0, p.wT)(
              !e.list_jsondata,
              "Found unexpected ListDetails_t.list_jsondata type: " +
                typeof e.list_jsondata,
            ),
            (e.list_jsondata = {}));
      }
      const I = "0";
      function b(e, t) {
        (t.localized_flat_title = (0, m.$Y)([], 31, null)),
          (t.localized_flat_blurb = (0, m.$Y)([], 31, null)),
          (t.localized_flat_link = (0, m.$Y)([], 31, null)),
          t.title !== I && (t.localized_flat_title[e] = t.title),
          t.blurb !== I && (t.localized_flat_blurb[e] = t.blurb),
          t.link !== I && (t.localized_flat_link[e] = t.link),
          t.title_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_title[e.language] = e.localized_string);
          }),
          t.blurb_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_blurb[e.language] = e.localized_string);
          }),
          t.link_localization.forEach((e) => {
            e.localized_string?.length > 0 &&
              (t.localized_flat_link[e.language] = e.localized_string);
          });
      }
      class v {
        m_mapList = new Map();
        m_mapEventGIDToLists = new Map();
        m_mapListIDToClanAccount = new Map();
        GetListDetails(e) {
          return this.m_mapList.get(e);
        }
        GetAllSaleCurationLists(e) {
          return this.m_mapEventGIDToLists.get(e) || [];
        }
        GetClanAccountFromListID(e) {
          return this.m_mapListIDToClanAccount.get(e);
        }
        async LoadListDetails(e, t, n) {
          if (this.m_mapList.has(t)) return this.m_mapList.get(t);
          const a =
              g.TS.STORE_BASE_URL +
              "curator/" +
              e.GetAccountID() +
              "/admin/ajaxgetlistdetails",
            r = { listid: t };
          try {
            const i = await s().get(a, { params: r, cancelToken: n?.token });
            if (1 == i?.data?.success) {
              const n = { ...i.data.list_details };
              return (
                (0, p.wT)(t == n?.listid, "Wanted" + t + "but got" + n?.listid),
                y(n),
                b(i.data.curation_language, n),
                this.m_mapList.set(t, n),
                this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
                n
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(
              "CCuratorListStore.LoadListDetails: error on load: " +
                t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async LoadMyFollowedSaleCurationLists(e, t, n) {
          if (
            !g.iA.logged_in ||
            (u.Fm.Get().BIsLoaded() &&
              0 == u.Fm.Get().GetFollowedCuratorCount())
          )
            return [];
          const a = g.TS.STORE_BASE_URL + "curators/ajaxgetmycuratorsalelists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
              curator_clan_account_followed: u.Fm.Get().BIsLoaded()
                ? u.Fm.Get().GetFollowedCuratorsAccountID().join(",")
                : void 0,
            };
          return this.InternalLoadSaleCuratorLists(
            a,
            r,
            "CCuratorListStore.LoadMyFollowedSaleCurationLists",
            e,
            t,
            n,
          );
        }
        async LoadAllSaleCurationLists(e, t, n) {
          if (this.m_mapEventGIDToLists.has(t))
            return this.m_mapEventGIDToLists.get(t);
          const a = g.TS.STORE_BASE_URL + "curators/ajaxfindcuratorlists",
            r = {
              clan_account_id: e.GetAccountID(),
              clan_event_gid: t,
              origin: self.origin,
            };
          return this.InternalLoadSaleCuratorLists(
            a,
            r,
            "CCuratorListStore.LoadAllSaleCurationLists",
            e,
            t,
            n,
          );
        }
        async InternalLoadSaleCuratorLists(e, t, n, a, r, o) {
          try {
            const n = await s().get(e, { params: t, cancelToken: o?.token });
            if (1 == n?.data?.success) {
              const e = new Array();
              return (
                (0, i.h5)(() => {
                  n.data.matches &&
                    n.data.matches.forEach((t) => {
                      t.multi_detail_lists.forEach((n) => {
                        this.m_mapListIDToClanAccount.set(
                          n.listid,
                          t.clan_account_id,
                        ),
                          y(n),
                          b(t.curation_language, n),
                          this.m_mapList.set(n.listid, n),
                          e.push(n);
                      });
                    }),
                    this.m_mapEventGIDToLists.set(r, e);
                }),
                e
              );
            }
          } catch (e) {
            const t = (0, f.H)(e);
            console.error(n + ": error on load: " + t.strErrorMsg, t);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return v.s_Singleton || (v.s_Singleton = new v()), v.s_Singleton;
        }
        constructor() {
          (0, i.Gn)(this),
            "dev" == g.TS.WEB_UNIVERSE && (window.g_curatorListStore = this);
          let e = (0, g.Tc)("curatorlistdata", "application_config");
          ("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CCuratorListStore loading list payload: " + e?.length,
              e,
            ),
            this.ValidateStoreDefault(e) &&
              (0, i.h5)(() => {
                e.forEach((e) => {
                  e.multi_detail_lists.forEach((t) => {
                    y(t),
                      b(e.curation_language, t),
                      this.m_mapList.set(t.listid, t);
                  });
                });
              });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "object" == typeof t[0]
            ? "number" == typeof t[0].curation_language &&
                t[0].multi_detail_lists &&
                Array.isArray(t[0].multi_detail_lists) &&
                "string" == typeof t[0].multi_detail_lists[0].listid &&
                "number" == typeof t[0].multi_detail_lists[0].list_type &&
                "number" == typeof t[0].multi_detail_lists[0].list_state
            : t && Array.isArray(t) && 0 == t.length;
        }
      }
      function A(e, t) {
        const n = (0, h.CH)();
        return (
          (0, o.useEffect)(() => {
            if (v.Get().GetListDetails(t) || !e) return;
            const a = s().CancelToken.source();
            return (
              (async () => {
                const r = await v.Get().LoadListDetails(e, t);
                if (!a.token.reason)
                  if (r?.apps?.length) {
                    const e = [];
                    for (const t of r.apps) {
                      const n = t?.recommended_app?.appid;
                      n && e.push({ id: n, type: "game" });
                    }
                    (0, _.H2)(e, {
                      ..._.jy,
                      include_assets: !0,
                      include_release: !0,
                    }),
                      n();
                  } else console.error("Found no list data");
              })(),
              () => a.cancel("unmounting CuratorList")
            );
          }, [e, t, n]),
          v.Get().GetListDetails(t)
        );
      }
      function S(e) {
        const t = e && c.ac.GetClanInfoByClanAccountID(e),
          [n, a] = (0, o.useState)(!!t);
        return (
          (0, o.useEffect)(() => {
            if (n && e) {
              const t = l.b.InitFromClanID(e);
              c.ac.LoadClanInfoForClanSteamID(t).finally(() => {
                a(!0);
              });
            }
          }, [n, e]),
          t
        );
      }
      function G(e) {
        return Boolean(e?.sale_clan_event_gid) && Boolean(e?.sale_clan_steamid);
      }
      function w(e) {
        const t = (0, h.CH)(),
          n = G(e) ? e.sale_clan_event_gid : null,
          a = n && d.O3.GetClanEventModel(n);
        return (
          (0, o.useEffect)(() => {
            if (a || !G(e)) return;
            const r = s().CancelToken.source();
            return (
              (async () => {
                d.O3.Init(),
                  await d.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    new l.b(e.sale_clan_steamid),
                    n,
                    0,
                  ),
                  r.token.reason || t();
              })(),
              () => r.cancel("unmounting CuratorList")
            );
          }, [e, n, a, t]),
          a
        );
      }
      (0, a.Cg)([i.sH], v.prototype, "m_mapList", void 0);
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => l,
        Gg: () => d,
        MS: () => f,
        Ow: () => u,
        YM: () => h,
        mZ: () => _,
        t7: () => c,
        zX: () => p,
      });
      var a = n(41735),
        r = n.n(a),
        s = n(90626),
        i = n(84933),
        o = n(16021);
      function l(e, t, n, a) {
        const l = (0, s.useRef)(void 0),
          c = (0, s.useRef)(void 0),
          u = (0, i.CH)();
        l.current = e;
        const [d, _] = (0, s.useState)(void 0),
          {
            include_assets: m,
            include_release: p,
            include_platforms: f,
            include_all_purchase_options: h,
            include_screenshots: g,
            include_trailers: y,
            include_ratings: I,
            include_tag_count: b,
            include_reviews: v,
            include_basic_info: A,
            include_supported_languages: S,
            include_full_description: G,
            include_included_items: w,
            include_assets_without_overrides: j,
            apply_user_filters: C,
            include_links: R,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            const n = {
              include_assets: m,
              include_release: p,
              include_platforms: f,
              include_all_purchase_options: h,
              include_screenshots: g,
              include_trailers: y,
              include_ratings: I,
              include_tag_count: b,
              include_reviews: v,
              include_basic_info: A,
              include_supported_languages: S,
              include_full_description: G,
              include_included_items: w,
              include_assets_without_overrides: j,
              apply_user_filters: C,
              include_links: R,
            };
            let s = null;
            return (
              !e ||
                e < 0 ||
                o.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && a && a == c.current) ||
                (a !== c.current && (_(void 0), (c.current = a)),
                (s = r().CancelToken.source()),
                o.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    s?.token.reason || l.current !== e || _(1 == t), u();
                  })),
              () => s?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, a, d, m, p, f, h, g, y, I, b, v, A, S, G, w, j, C, R, u]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (o.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.A.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const x = o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return x ? [x, 3] : [null, 2];
      }
      function c(e, t, n) {
        return l(e, 0, t, n);
      }
      function u(e, t, n) {
        return l(e, 2, t, n);
      }
      function d(e, t, n) {
        return l(e, 1, t, n);
      }
      function _(e, t, n) {
        const [a, r] = l(e, t, n);
        let s;
        1 != a?.GetStoreItemType() ||
          a.GetAssets()?.GetHeaderURL() ||
          1 != a?.GetIncludedAppIDs().length ||
          (s = a.GetIncludedAppIDs()[0]);
        const [i, o] = c(s, n);
        return s && i?.BIsVisible() ? [i, o] : [a, r];
      }
      function m(e, t, n, a) {
        const l = (0, i.CH)(),
          {
            include_assets: c,
            include_release: u,
            include_platforms: d,
            include_all_purchase_options: _,
            include_screenshots: m,
            include_trailers: p,
            include_ratings: f,
            include_tag_count: h,
            include_reviews: g,
            include_basic_info: y,
            include_supported_languages: I,
            include_full_description: b,
            include_included_items: v,
            include_assets_without_overrides: A,
            apply_user_filters: S,
            include_links: G,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: c,
                include_release: u,
                include_platforms: d,
                include_all_purchase_options: _,
                include_screenshots: m,
                include_trailers: p,
                include_ratings: f,
                include_tag_count: h,
                include_reviews: g,
                include_basic_info: y,
                include_supported_languages: I,
                include_full_description: b,
                include_included_items: v,
                include_assets_without_overrides: A,
                apply_user_filters: S,
                include_links: G,
              },
              a = e.filter(
                (e) =>
                  !(
                    o.A.Get().BHasStoreItem(e, t, n) ||
                    o.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == a.length) return;
            const s = r().CancelToken.source(),
              i = a.map((e) => o.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(i).then(() => {
                s.token.reason || l();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, a, l, c, u, d, _, m, p, f, h, g, y, I, b, v, A, S, G]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              o.A.Get().BHasStoreItem(e, t, n) ||
              o.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function p(e, t, n) {
        return m(e, 0, t, n);
      }
      function f(e, t, n) {
        return m(e, 2, t, n);
      }
      function h() {
        s.useEffect(
          () => (
            o.A.Get().SetReturnUnavailableItems(!0),
            () => o.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    22305: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => c });
      var a = n(7850),
        r = n(66272),
        s = n(52038),
        i = n(17083),
        o = n(45699),
        l = n(76217);
      function c(e) {
        const { crumbs: t, className: n } = e;
        return t && 0 != t.length
          ? (0, a.jsxs)("div", {
              className: (0, s.A)(r.BreadContainer, n),
              children: [
                (0, a.jsx)(l.Z, {
                  className: "blockbg",
                  "flow-children": "row",
                  children: t.map((e) => {
                    const t = new Array();
                    return (
                      e.url.startsWith("http")
                        ? t.push(
                            (0, a.jsx)(
                              o.Ii,
                              { href: e.url, children: e.name },
                              "anchor_" + e.name,
                            ),
                          )
                        : t.push(
                            (0, a.jsx)(
                              i.N_,
                              { to: e.url, children: e.name },
                              "link_" + e.name,
                            ),
                          ),
                      t.push(
                        (0, a.jsx)(
                          "span",
                          { children: " > " },
                          e.name + "span",
                        ),
                      ),
                      t
                    );
                  }),
                }),
                (0, a.jsx)("div", { style: { clear: "left" } }),
              ],
            })
          : null;
      }
    },
    99032: (e, t, n) => {
      "use strict";
      n.d(t, {
        AX: () => y,
        H2: () => f,
        Li: () => g,
        S7: () => _,
        a9: () => I,
        jy: () => h,
        nt: () => p,
        sd: () => d,
        tJ: () => m,
      });
      var a = n(57876),
        r = n(62792),
        s = n(81886),
        i = n(30894),
        o = n(16021),
        l = n(78327),
        c = n(36837),
        u = n(81393);
      function d(e) {
        return o.A.Get().BIsStoreItemMissing(e.id, (0, r.SW)(e.type));
      }
      function _(e, t, n) {
        const a = new Array();
        return (
          e?.forEach((e) => a.push({ id: e, type: "game" })),
          t?.forEach((e) => a.push({ id: e, type: "sub" })),
          n?.forEach((e) => a.push({ id: e, type: "bundle" })),
          a
        );
      }
      function m(e) {
        const t = o.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return t?.GetBestPurchaseOption()?.discount_pct > 0;
      }
      function p(e) {
        if (!c.f.Get().GetHomeView()?.localized) return !0;
        const t = o.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
        return i.Fm.Get().BIsAnyLanguageEnabled(
          t.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function f(e, t, n) {
        if (!e || 0 == e.length) return [];
        const a = e.filter((e) => (0, s.fp)(e.type)).map((e) => e.id),
          r = e.filter((e) => "sub" === e.type).map((e) => e.id),
          i = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = a.filter((e) => !o.A.Get().BHasApp(e, t)),
            n = r.filter((e) => !o.A.Get().BHasApp(e, t)),
            s = i.filter((e) => !o.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || s.length > 0) &&
            (await Promise.all([
              o.A.Get().QueueMultipleAppRequests(e, t),
              o.A.Get().QueueMultiplePackageRequests(n, t),
              o.A.Get().QueueMultipleBundleRequests(s, t),
            ]));
        }
        const l = new Set();
        i?.forEach((e) => {
          const t = o.A.Get().GetBundle(e);
          t?.GetIncludedAppIDs().forEach((e) => l.add(e));
        }),
          r?.forEach((e) => {
            const t = o.A.Get().GetPackage(e);
            t?.GetIncludedAppIDs().forEach((e) => l.add(e));
          });
        const c = Array.from(l).filter((e) => !o.A.Get().BHasApp(e, t));
        if (
          (c.length > 0 && (await o.A.Get().QueueMultipleAppRequests(c, t)),
          a.forEach((e) => l.add(e)),
          n)
        ) {
          const e = Array.from(l)
            .map((e) => {
              const t = o.A.Get().GetApp(e);
              return t?.GetParentAppID()
                ? (l.add(t.GetParentAppID()), t.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((e) => !o.A.Get().BHasApp(e, t));
          e.length > 0 && (await o.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(l).filter((e) => {
          const t = o.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const h = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function g(e) {
        const t = i.Fm.Get();
        (0, u.wT)(t.BIsLoaded(), "Dynamic Store not loaded");
        const n = e?.GetAllLanguagesWithSomeSupport() || [],
          a = c.f.Get().GetHomeView()?.localized;
        return (
          !e ||
          (0 == e.GetStoreItemType() &&
            (t.BIsGameIgnored(e.GetAppID()) ||
              t.BIsGameIgnored(e.GetParentAppID()))) ||
          t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
          t.BExcludeTagIDs(e.GetTagIDs()) ||
          e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)) ||
          (a &&
            !(
              0 == n.length ||
              e.BHasSomeLanguageSupport(0) ||
              t.BIsAnyLanguageEnabled(n)
            ))
        );
      }
      async function y(e, t, n, s) {
        let c = 0,
          u = 0;
        const d = [];
        await f(e, a.Xh, t);
        for (const a of e) {
          const e = o.A.Get().GetStoreItem(a.id, (0, r.SW)(a.type));
          if (!e) {
            c++;
            continue;
          }
          const l = e
            .GetIncludedAppIDs()
            .map((e) => o.A.Get().GetApp(e))
            .filter(Boolean);
          if ((l.push(e), t)) {
            const e = new Set(l.map((e) => e.GetParentAppID()).filter(Boolean)),
              t = Array.from(e)
                .map((e) => o.A.Get().GetApp(e))
                .filter(Boolean);
            t && l.push(...t);
          }
          l.some(s || g)
            ? (u++, n && (i.Fm.Get().BIsStoreItemOwned(e) || n.push(a)))
            : d.push(a);
        }
        return (
          "dev" === l.TS.WEB_UNIVERSE &&
            0 === d.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                c +
                " failed to load, " +
                u +
                " hidden by user filter.",
            ),
          d
        );
      }
      async function I(e, t, n, a, s, l, c) {
        let u = await y(
          e,
          t,
          c,
          s
            ? (e) =>
                !e ||
                i.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                i.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : g,
        );
        const d = [];
        for (const e of u) {
          const t = o.A.Get().GetStoreItem(e.id, (0, r.SW)(e.type));
          if (!t) continue;
          const s = t?.GetIncludedAppIDsOrSelf();
          let u = !1;
          n && (u = u || s.every((e) => i.Fm.Get().BIsGameOwned(e))),
            a && (u = u || s.every((e) => i.Fm.Get().BIsGameWishlisted(e))),
            l && (u = u || s.every((e) => i.Fm.Get().BIsGameIgnored(e))),
            u ? c && c.push(e) : d.push(e);
        }
        return d;
      }
    },
    94743: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => p, r: () => m });
      var a = n(7850),
        r = n(90626),
        s = n(26296),
        i = n(12155),
        o = n(48211),
        l = n(52038),
        c = n(61859),
        u = n(70758),
        d = n.n(u),
        _ = n(61949);
      const m = (e) => {
          const t = ["maxresdefault", "mqdefault", "default"],
            [n, i] = r.useState(0);
          r.useEffect(() => i(0), [e.video]);
          const o = r.useRef(void 0);
          if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
            return (0, a.jsx)(s.o, {
              className: e.className,
              srcs: e.altImgWithFallback,
            });
          if (e.altImg)
            return (0, a.jsx)("img", { src: e.altImg, className: e.className });
          {
            const r =
                "https://img.youtube.com/vi/" + e.video + "/" + t[n] + ".jpg",
              s = () => {
                n + 1 < t.length && i(n + 1);
              },
              c = () => {
                o.current && o.current.naturalHeight < 91 && s();
              };
            return (0, a.jsx)("img", {
              ref: o,
              onLoad: c,
              onError: s,
              src: r,
              className: (0, l.A)(d().YoutubePreviewImage, e.className),
            });
          }
        },
        p = (e) => {
          const [t, n] = r.useState(!1);
          (0, o.VC)(!!e.preloadYoutubeScripts);
          const s = (0, _.Rp)("youtube");
          if (t && s)
            return (0, a.jsx)(o.N1, {
              ...e,
              classnames: (0, l.A)(d().YoutubePlayer, e.classnames),
            });
          {
            const t = (t) => {
              e.onPlayerActivated && e.onPlayerActivated(),
                n(!0),
                t.stopPropagation(),
                t.preventDefault();
            };
            return (0, a.jsxs)("div", {
              className: (0, l.A)(
                "YoutubePreviewContainer",
                d().YoutubePreviewImage,
                e.imageClassnames,
              ),
              onClick: s ? t : void 0,
              children: [
                (0, a.jsx)(m, {
                  className: "YoutubePreviewImage",
                  altImgWithFallback: e.altImgWithFallback,
                  altImg: e.altImg,
                  video: e.video,
                }),
                s &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: "YoutubePreviewPlay",
                        children: (0, a.jsx)(i.IOc, {}),
                      }),
                      (0, a.jsx)("div", {
                        className: "VideoHintText",
                        children: (0, c.we)("#EventCalendar_WatchYouTubeVideo"),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
    },
    49271: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, { CuratorReviewListContainer: () => ee, default: () => J });
      var a = n(7850),
        r = n(75844),
        s = n(90626),
        i = n(15759),
        o = n(22837),
        l = n(45699),
        c = n(12447),
        u = n(76217),
        d = n(70995),
        _ = n(38390),
        m = n(17720),
        p = n(55963),
        f = n(4434),
        h = n(41735),
        g = n.n(h),
        y = n(78327),
        I = n(68797);
      function b(e, t) {
        const [n, a] = (0, s.useState)(
            e?.BUsesContentHubForItemSource() ? new Set() : null,
          ),
          r = (0, f.m)("useFilteredAppViaContentHub");
        return (
          (0, s.useEffect)(() => {
            e?.BUsesContentHubForItemSource() &&
              !n &&
              (async function (e, t) {
                const n =
                    y.TS.STORE_BASE_URL +
                    "contenthub/ajaxfilterappsbycontenthub",
                  a = {
                    hubtype: e.GetContentHubType(),
                    category: e.GetContentHubCategory(),
                    tagid: e.GetContentHubTag(),
                    prune_list_optin_name: e.jsondata.prune_list_optin_name,
                    optin_tagid: e.jsondata.optin_tagid,
                    optin_prune_tagid: e.jsondata.optin_prune_tagid,
                    optin_only: e.jsondata.optin_only,
                    applist: t.sort().join(","),
                  };
                let r = null;
                const s = new Set();
                try {
                  const e = await g().get(n, { params: a });
                  if (1 == e?.data?.success)
                    return e.data.appids.forEach((e) => s.add(e)), s;
                  r = (0, I.H)(e);
                } catch (e) {
                  r = (0, I.H)(e);
                }
                return (
                  console.error(
                    "LoadContentHubFilteredApps failed: " + r?.strErrorMsg,
                    r,
                  ),
                  s
                );
              })(e, t).then((e) => {
                r.token.reason || a(e);
              });
          }, [n, r.token.reason, e, t]),
          n
        );
      }
      var v = n(6626),
        A = n(30894),
        S = n(16021),
        G = n(62792),
        w = n(55263),
        j = n(39020),
        C = n(39777),
        R = n(33380),
        x = n.n(R),
        D = n(12155),
        B = n(52038),
        k = n(70758);
      const L = new RegExp(
        "(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*",
      );
      function N(e) {
        const t = L.exec(e);
        return t && t.length > 1 ? t[1] : null;
      }
      function T(e) {
        const {
            posterURL: t,
            videoid: n,
            muted: r,
            autoplay: i,
            bIsClipID: o,
            time: l,
            width: c,
            height: u,
          } = e,
          [d, _] = s.useState(Boolean(t)),
          m = null != i && null != i && i;
        if (d)
          return (0, a.jsxs)("div", {
            className: (0, B.A)(
              "YoutubePreviewContainer",
              k.YoutubePreviewImage,
              e.imageClassnames,
            ),
            onClick: () => _(!1),
            children: [
              (0, a.jsx)("img", {
                className: (0, B.A)(
                  "YoutubePreviewImage",
                  k.YoutubePreviewImage,
                ),
                src:
                  t ||
                  y.TS.COMMUNITY_CDN_URL +
                    "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, a.jsx)("div", {
                className: "YoutubePreviewPlay",
                children: (0, a.jsx)(D.IOc, {}),
              }),
            ],
          });
        let p = (0, y.xv)().replace("https://", "");
        const f = p.indexOf("/");
        f >= 0 && (p = p.substring(0, f));
        let h = o
          ? `https://clips.twitch.tv/embed?clip=${n}`
          : `https://player.twitch.tv/?video=${n}`;
        return (
          (h += `&parent=${p}&autoplay=${m}&muted=${Boolean(r)}`),
          l &&
            (h += `&time=${(function (e) {
              const t = Math.floor(e / 3600);
              e -= 60 * t * 60;
              const n = Math.floor(e / 60);
              return `${t}h${n}m${(e -= n * e)}s`;
            })(l)}`),
          (0, a.jsxs)("div", {
            className: (0, B.A)("YoutubePlayer", x().TwitchPlayer),
            children: [
              (0, a.jsx)("img", {
                className: (0, B.A)(
                  "YoutubePreviewContainer",
                  k.YoutubePreviewImage,
                  e.imageClassnames,
                ),
                src:
                  y.TS.COMMUNITY_CDN_URL +
                  "public/shared/images/responsive/youtube_16x9_placeholder.gif",
              }),
              (0, a.jsx)("iframe", {
                src: h,
                allowFullScreen: !0,
                frameBorder: 0,
                width: c || 460,
                height: u || 300,
              }),
            ],
          })
        );
      }
      var E = n(706),
        P = n(99032),
        F = n(75152),
        H = n(22687),
        V = n(22797),
        O = n(10224),
        M = n(94743),
        Y = n(61859),
        U = n(61336),
        W = n(62014),
        z = n.n(W),
        q = n(22305),
        K = n(22584);
      function Z(e) {
        const { clanInfo: t } = e,
          { curator_link: n, curator_medium_avatar: r } = (0, y.Tc)(
            "curator_header",
            "application_config",
          );
        return (0, a.jsx)(u.Z, {
          className: "page_content_ctn",
          "flow-children": "column",
          autoFocus: !0,
          children: (0, a.jsx)("div", {
            className: "page_content",
            children: (0, a.jsxs)(u.Z, {
              className: "list_header_area",
              "flow-children": "row",
              children: [
                (0, a.jsx)("div", {
                  className: "curator_avatar_image",
                  children: (0, a.jsx)(l.Ii, {
                    href: n,
                    children: (0, a.jsx)("img", {
                      className: "curator_avatar",
                      src: r,
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "curator_details",
                  children: [
                    (0, a.jsx)(q.r, {
                      className: K.BreadContainer,
                      crumbs: (0, y.Tc)("breadcrumbs", "application_config"),
                    }),
                    (0, a.jsx)(l.Ii, {
                      className: "pageheader curator_name",
                      href: n,
                      children: (0, Y.we)(
                        "#SteamCurator_List_Header_List",
                        t.group_name,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var X = n(32630),
        $ = n(35380),
        Q = n(42834);
      const J = function (e) {
        return (0, a.jsx)(c.u, {
          navID: "StoreCuratorPageRoot",
          children: (0, a.jsx)(ee, { listid: e.listid }),
        });
      };
      function ee(e) {
        const t = parseInt(
            (0, y.Tc)("curator_account_id", "application_config"),
          ),
          n = (0, v.m1)(t),
          r = (0, v.ME)(n?.clanSteamID, e.listid);
        return (
          (0, j.vb)(y.TS.LANGUAGE),
          r
            ? (0, a.jsxs)(X.Ay, {
                feature: "curatorlistcapsule",
                children: [
                  (0, a.jsx)(Z, { clanInfo: n }),
                  (0, a.jsx)("div", {
                    className: "page_content_ctn grayscale",
                    children: (0, a.jsx)("div", {
                      className: "page_content",
                      children: (0, a.jsxs)("div", {
                        className: z().CuratorListCtn,
                        children: [
                          (0, a.jsx)(ae, { listDetails: r }),
                          (0, v.cc)(r)
                            ? (0, a.jsx)(te, { listDetails: r })
                            : (0, a.jsx)(ne, {
                                listDetails: r,
                                rgListItems: r.apps,
                              }),
                          (0, a.jsxs)("div", {
                            className: z().CuratorMoreCtn,
                            children: [
                              (0, a.jsx)("h2", {
                                children: (0, Y.we)(
                                  "#SteamCurator_ExploreMoreTitle",
                                ),
                              }),
                              (0, a.jsx)(l.Ii, {
                                href: n.vanity_url,
                                children: (0, Y.PP)(
                                  "#SteamCurator_MoreReviews",
                                  n.group_name,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : null
        );
      }
      function te(e) {
        const { listDetails: t } = e,
          [n, r] = (0, s.useState)(null),
          i = new m.b(t.sale_clan_steamid),
          { eventModel: o } = (0, _.B9)(
            i.GetAccountID(),
            t.sale_clan_event_gid,
          ),
          l = (0, s.useMemo)(
            () => (t.apps || []).map((e) => e.recommended_app.appid),
            [t],
          ),
          c = b(o, l);
        return (
          (0, s.useEffect)(() => {
            if (o)
              if (o.BUsesContentHubForItemSource())
                c && r(t.apps?.filter((e) => c.has(e.recommended_app?.appid)));
              else {
                const e = o.GetSaleFeaturedApps();
                r(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
              }
          }, [t, o, c]),
          (0, a.jsx)(ne, { listDetails: t, rgListItems: n })
        );
      }
      function ne(e) {
        const { listDetails: t, rgListItems: n } = e,
          [r, i] = (0, s.useState)(0),
          [o, c] = (0, s.useState)(null),
          d = (0, f.m)("CuratorAppListDisplay");
        if (
          (s.useEffect(() => {
            n &&
              (i(n?.length || 0),
              A.Fm.Get()
                .HintLoad()
                .then(() => {
                  const e = n.map((e) => e.recommended_app.appid);
                  S.A.Get()
                    .QueueMultipleAppRequests(e, P.jy)
                    .then(() => {
                      d.token.reason ||
                        c(
                          n.filter(
                            (e) =>
                              !(0, P.Li)(
                                S.A.Get().GetApp(e.recommended_app.appid),
                              ),
                          ),
                        );
                    })
                    .catch(() => {
                      d.token.reason || c([]);
                    });
                }));
          }, [n, d]),
          null == o)
        )
          return (0, a.jsx)(V.t, {
            string: (0, Y.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const _ = 1 == t.list_type;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(u.Z, {
              className: (0, B.A)(z().CuratorList, _ && z().CuratorListGrid),
              "flow-children": "grid",
              children: o.map((e, n) =>
                (0, a.jsx)(
                  re,
                  { item: e, listDetails: t, bAutoFocus: 0 == n },
                  "rec_" + e.recommended_app.appid,
                ),
              ),
            }),
            Boolean(100 > o.length) &&
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("span", {
                    children: [
                      (0, Y.Yp)("#SteamCurator_Hidden", r - o.length),
                      " ",
                    ],
                  }),
                  (0, a.jsx)(l.Ii, {
                    href: y.TS.STORE_BASE_URL + "account/preferences/",
                    children: (0, Y.we)("#SteamCurator_Setting"),
                  }),
                ],
              }),
          ],
        });
      }
      function ae(e) {
        const { listDetails: t } = e,
          n = (0, v.fq)(t),
          r = (0, y.Tc)("showlisttitle", "application_config"),
          s = (0, y.Tc)("titleareaheight", "application_config"),
          i =
            t.list_jsondata.youtube_link &&
            (0, d.XU)(t.list_jsondata.youtube_link),
          c = t.list_jsondata.youtube_link && N(t.list_jsondata.youtube_link),
          u = (0, o.sf)(y.TS.LANGUAGE),
          _ = Y.NT.GetWithFallback(t.localized_flat_title, u),
          m = Y.NT.GetWithFallback(t.localized_flat_blurb, u),
          p = Y.NT.GetWithFallback(t.localized_flat_link, u),
          f =
            n &&
            n.GetImageURL(
              (0, O.c5)() ? "product_mobile_banner" : "product_banner",
              u,
            );
        return (0, a.jsxs)("div", {
          className: z().TopReviewInfo,
          children: [
            Boolean(f) &&
              (0, a.jsx)(l.Ii, {
                href: n.GetSaleURL(),
                children: (0, a.jsx)("img", {
                  className: z().SaleBanner,
                  src: f,
                }),
              }),
            r && _ && (0, a.jsx)("div", { className: z().Title, children: _ }),
            r && m && (0, a.jsx)("div", { className: z().Blurb, children: m }),
            Boolean(s > 0) && (0, a.jsx)("div", { style: { height: s } }),
            i &&
              (0, a.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, a.jsx)(M.l, {
                  video: i.strVideoID,
                  startSeconds: i.nStartSeconds,
                  autoplay: !0,
                  autopause: !0,
                  showFullscreenBtn: !0,
                  controls: !0,
                  preloadYoutubeScripts: !0,
                  playsInline: !0,
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            Boolean(c) &&
              (0, a.jsx)("div", {
                className: z().VideoReviewCtn,
                children: (0, a.jsx)(T, {
                  videoid: c,
                  posterURL: "",
                  imageClassnames: z().YouTubePreviewImage,
                }),
              }),
            p && (0, a.jsx)(oe, { url: p }),
          ],
        });
      }
      const re = (0, r.PA)((e) => {
        const { item: t, listDetails: n, bAutoFocus: r } = e,
          i = parseInt((0, y.Tc)("curator_account_id", "application_config")),
          o = (0, v.m1)(i),
          [l] = (0, w.t7)(t?.recommended_app?.appid, {
            include_assets: !0,
            include_release: !0,
          }),
          c = (0, s.useMemo)(
            () => ({
              id: l?.GetID(),
              type: (0, G._4)(l?.GetStoreItemType(), l?.GetAppType()),
            }),
            [l],
          ),
          _ = (0, $.rt)(c);
        if (!o || !l) return null;
        const {
            appid: m,
            link_url: p,
            blurb: f,
            time_recommended: h,
            recommendation_state: g,
          } = t.recommended_app,
          I = o.is_creator_home && !o.is_ogg,
          b = n.list_jsondata.app_data?.[m],
          A = p && (0, d.XU)(p),
          S = p && N(p),
          j = f != v.F6 && f,
          C = l.BHasDemo(),
          R = b?.img_url,
          x = `curator_clanid=${o.clanAccountID}&curator_listid=${n.listid}`,
          D = l.GetStorePageURL() + "/?curator_clanid=" + o.clanAccountID;
        return (0, a.jsxs)(u.Z, {
          className: z().CuratorReview,
          autoFocus: r,
          children: [
            (0, a.jsx)("div", {
              className: z().CapsuleCtn,
              children: Boolean(A || S)
                ? (0, a.jsx)(se, {
                    strVideoID: A?.strVideoID || S,
                    nStartSeconds: A?.nStartSeconds,
                    id: _,
                    strImgOverrideUrl: R,
                    bShowDemoButton: C,
                    strExtraParams: x,
                    bTwitchVideo: Boolean(S),
                  })
                : (0, a.jsx)(H.W, {
                    imageType: "header",
                    capsule: c,
                    bShowDemoButton: C,
                    strExtraParams: x,
                    bPreferAssetWithoutOverride: !1,
                  }),
            }),
            (0, a.jsxs)("div", {
              className: z().ReviewTextSection,
              children: [
                (0, a.jsx)("a", {
                  className: z().GameTitle,
                  href: D,
                  children: l.GetName(),
                }),
                (0, a.jsxs)("div", {
                  className: z().RecommendationTypeAndDate,
                  children: [
                    (0, a.jsx)(ie, { type: g }),
                    (0, a.jsx)("div", {
                      className: z().ReviewDate,
                      children:
                        I || !Boolean(h)
                          ? (0, Y.we)(
                              "#EventModTile_ReleaseDate",
                              l.GetFormattedSteamReleaseDate(),
                            )
                          : (0, Y.$z)(h),
                    }),
                  ],
                }),
                Boolean(j) &&
                  (0, a.jsx)("div", {
                    className: z().ReviewBlurb,
                    children: (0, Y.we)("#SteamCurator_ReviewTextQuoted", j),
                  }),
                Boolean(p) && (0, a.jsx)(oe, { url: p }),
              ],
            }),
          ],
        });
      });
      function se(e) {
        const {
            strVideoID: t,
            nStartSeconds: n,
            id: r,
            strImgOverrideUrl: s,
            bShowDemoButton: i,
            strExtraParams: o,
            bTwitchVideo: l,
          } = e,
          { data: c } = (0, C.lv)(r);
        return (0, a.jsxs)("div", {
          className: z().YouTubeCapsule,
          children: [
            (0, a.jsx)("div", {
              className: z().YouTubeCtn,
              children: l
                ? (0, a.jsx)(T, {
                    videoid: t,
                    posterURL: c ? (0, Q.b0)(c, "header") : void 0,
                    imageClassnames: z().YouTubePreviewImage,
                    autoplay: !0,
                  })
                : (0, a.jsx)(M.l, {
                    video: t,
                    startSeconds: n,
                    autoplay: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                    controls: !0,
                    preloadYoutubeScripts: !0,
                    playsInline: !0,
                    imageClassnames: z().YouTubePreviewImage,
                    altImg: s,
                  }),
            }),
            (0, a.jsxs)("div", {
              className: z().YouTubeCapsuleBottomBar,
              children: [
                (0, a.jsx)("div", {
                  className: z().GameImageCtn,
                  children: (0, a.jsx)(E.Q, {
                    id: r,
                    bShowDemoButton: i,
                    nDelayShowMs: 300,
                    strExtraParams: o,
                    hoverProps: {
                      direction: "overlay-center",
                      style: { minWidth: "300px" },
                    },
                    children: (0, a.jsx)("img", {
                      className: z().GameImage,
                      src: c ? (0, Q.b0)(c, "library_capsule") : void 0,
                    }),
                  }),
                }),
                (0, a.jsx)(F.q, { id: r, strClassName: z().FullWidth }),
              ],
            }),
          ],
        });
      }
      function ie(e) {
        switch (e.type) {
          case 0:
            return (0, a.jsx)("div", {
              className: z().Recommended,
              children: (0, Y.we)("#SteamCurator_Recommended"),
            });
          case 1:
            return (0, a.jsx)("div", {
              className: z().NotRecommended,
              children: (0, Y.we)("#SteamCurator_NotRecommended"),
            });
          case 2:
            return (0, a.jsx)("div", {
              className: z().Informational,
              children: (0, Y.we)("#SteamCurator_Informational"),
            });
          default:
            return null;
        }
      }
      function oe(e) {
        let t = (0, p.OZ)(e.url);
        (0, i.p)(t) &&
          (t =
            (y.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
            y.TS.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        const n = (0, U.wm)(e.url),
          r = (0, d.Lg)(e.url);
        return (0, a.jsxs)("div", {
          className: z().FullReviewLink,
          children: [
            (0, a.jsx)(l.Ii, {
              className: z().FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
              children: (0, Y.we)(
                r
                  ? "#SteamCurator_WatchFullReview"
                  : "#SteamCurator_ReadFullReview",
              ),
            }),
            (0, a.jsx)("div", {
              className: z().FullReviewDomain,
              children: (0, Y.we)(
                "#SteamCurator_ReviewLinkHostnameBracketed",
                n,
              ),
            }),
          ],
        });
      }
    },
  },
]);
