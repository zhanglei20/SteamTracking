/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9882],
  {
    51006: (e, t, n) => {
      n.d(t, { Vw: () => g });
      var i = n(34629),
        s = n(14947),
        o = n(22837),
        a = n(56545),
        r = n(17690),
        c = n(78327);
      class l {
        m_nLastUpdated = 0;
        m_mapLanguages = s.sH.map();
        m_appid;
        m_fetching = null;
        constructor(e) {
          this.m_appid = e;
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(e) {
          return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
        }
        Localize(e, t) {
          let n = c.TS.LANGUAGE;
          return p(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let n = c.TS.LANGUAGE;
          return u(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
      }
      function p(e, t, n, i, s) {
        if (!e.startsWith("#"))
          return (
            console.log(
              "Token doesn't start with #:",
              e,
              "appid",
              i,
              "tokens",
              t,
            ),
            ""
          );
        let o = e;
        e = e.toLowerCase();
        let a = "";
        if (
          (t && t.has(e) && (a = t.get(e)),
          !a && n && n.has(e) && (a = n.get(e)),
          a)
        )
          a = u(a, t, n, i, s);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              i,
              o,
              "Tokens:",
              t,
              "Fallback:",
              n,
            ),
          t && 1 != c.TS.EUNIVERSE)
        )
          return e;
        return a;
      }
      function u(e, t, n, i, s) {
        let o = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (o)
          for (let a of o) {
            let o = p(d(a.slice(1, -1), s), t, n, i, s);
            if (!o) return "";
            e = e.replace(a, o);
          }
        return (e = d(e, s));
      }
      function d(e, t) {
        let n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (let i of n) {
            let n = i.slice(1, -1).toLowerCase(),
              s = t.get(n);
            null == s
              ? console.log("No rich presence found for", n)
              : (e = e.replace(i, s));
          }
        return e;
      }
      var _ = n(37403),
        h = n(81393),
        f = n(6144);
      class m {
        m_CMInterface;
        m_mapAppInfo = s.sH.map();
        m_mapRichPresenceLoc = s.sH.map();
        m_cAppInfoRequestsInFlight = 0;
        m_setPendingAppInfo = new Set();
        m_PendingAppInfoPromise;
        m_PendingAppInfoResolve;
        m_CacheStorage = null;
        m_fnCallbackOnAppInfoLoaded = new f.lu();
        constructor() {
          (0, s.Gn)(this);
        }
        Init(e) {
          this.m_CMInterface = e;
        }
        BHavePendingAppInfoRequests() {
          return (
            this.m_setPendingAppInfo.size > 0 ||
            this.m_cAppInfoRequestsInFlight > 0
          );
        }
        get CMInterface() {
          return this.m_CMInterface;
        }
        RegisterCallbackOnLoad(e) {
          if (!this.BHavePendingAppInfoRequests())
            return (
              (0, h.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
              void e()
            );
          this.m_fnCallbackOnAppInfoLoaded.Register(e);
        }
        IsLoadingAppID(e) {
          return this.m_setPendingAppInfo.has(e);
        }
        GetAppInfo(e) {
          if (
            ((0, h.wT)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new r.by(e);
            this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
          }
          return this.m_mapAppInfo.get(e);
        }
        QueueAppInfoRequest(e) {
          return e
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (e) => (this.m_PendingAppInfoResolve = e),
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(e),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        async FlushPendingAppInfo() {
          const e = this.m_PendingAppInfoResolve,
            t = Array.from(this.m_setPendingAppInfo);
          (this.m_PendingAppInfoPromise = void 0),
            (this.m_PendingAppInfoResolve = void 0),
            this.m_setPendingAppInfo.clear(),
            await this.LoadAppInfoBatch(t),
            e?.();
        }
        async LoadAppInfoBatch(e) {
          this.m_cAppInfoRequestsInFlight++;
          let t = await this.LoadAppInfoBatchFromLocalCache(e);
          if (t.length) {
            console.log("Loading batch of App Info from Steam: ", t),
              await this.m_CMInterface?.WaitUntilLoggedOn();
            let e = a.w.Init(_._z);
            e.Body().set_language((0, o.sf)(c.TS.LANGUAGE));
            const n = 50;
            for (; t.length > 0; ) {
              const i = Math.min(n, t.length),
                s = t.slice(0, i);
              (t = t.slice(i)), e.Body().set_appids(s);
              const o = await _.BE.GetApps(
                this.m_CMInterface.GetServiceTransport(),
                e,
              );
              1 == o.GetEResult()
                ? this.OnGetAppsResponse(o)
                : console.error(
                    `Error when calling CommunityService.GetApps: EResult=${o.GetEResult()}, AppIDs:`,
                    s,
                  );
            }
          }
          0 == --this.m_cAppInfoRequestsInFlight &&
            0 == this.m_setPendingAppInfo.size &&
            (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
            this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
        }
        OnGetAppsResponse(e) {
          let t = [];
          for (let n of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(n.appid());
            (0, h.wT)(
              e,
              `Got AppInfo response for unrequested AppID: ${n.appid()}`,
            ),
              e &&
                ((e = new r.by(n.appid())),
                e.DeserializeFromMessage(n),
                this.m_mapAppInfo.set(n.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new r.by(t.appid());
            e.DeserializeFromAppOverview(t),
              e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        async EnsureAppInfoForAppIDs(e) {
          let t = !1;
          return (
            e.forEach((e) => {
              let n = this.m_mapAppInfo.get(e);
              n
                ? n.is_valid || (t = !0)
                : ((n = new r.by(e)),
                  this.m_mapAppInfo.set(e, n),
                  this.QueueAppInfoRequest(e),
                  (t = !0));
            }),
            t && void 0 !== this.m_PendingAppInfoPromise
              ? this.m_PendingAppInfoPromise
              : Promise.resolve()
          );
        }
        SetCacheStorage(e) {
          this.m_CacheStorage = e;
        }
        GetCacheKeyForAppID(e) {
          return "APPINFO_" + e;
        }
        async LoadAppInfoBatchFromLocalCache(e) {
          if (!this.m_CacheStorage) return e;
          console.log("Loading batch of App Info from Local Cache: ", e);
          const t = new Date(new Date().getTime() - 12096e5),
            n = async (e) => {
              const n = await this.m_CacheStorage?.GetObject(
                this.GetCacheKeyForAppID(e),
              );
              if (!n) return e;
              let i = this.m_mapAppInfo.get(e);
              return (
                (0, h.wT)(
                  i,
                  "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                ),
                i
                  ? ((i = new r.by(e)),
                    i.DeserializeFromCacheObject(n),
                    i.is_initialized
                      ? (this.m_mapAppInfo.set(e, i),
                        i.time_updated_from_server < t ? e : null)
                      : (console.warn(
                          "Failed to deserialize cached App Info: ",
                          e,
                          n,
                        ),
                        e))
                  : e
              );
            };
          let i = e.map((e) => n(e));
          return (await Promise.all(i)).filter((e) => null !== e);
        }
        async SaveAppInfoBatchToLocalCache(e) {
          if (this.m_CacheStorage) {
            console.log(
              "Saving batch of App Info to Local Cache: ",
              e.map((e) => e.appid),
            );
            for (const t of e) {
              const e = t.SerializeToCacheObject();
              e &&
                this.m_CacheStorage.StoreObject(
                  this.GetCacheKeyForAppID(t.appid),
                  e,
                );
            }
          }
        }
        Localize(e, t, n) {
          const i = this.GetRichPresenceLoc(e);
          return i
            ? i.Localize(t, n)
            : 1 != c.TS.EUNIVERSE
              ? (console.log(
                  `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
                ),
                t)
              : "";
        }
        GetRichPresenceLoc(e) {
          if (this.m_mapRichPresenceLoc.has(e.toString())) {
            let t = this.m_mapRichPresenceLoc.get(e.toString());
            return (
              t.m_nLastUpdated + 6e4 * r.IU < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new l(e);
          return (
            this.m_mapRichPresenceLoc.set(e.toString(), t),
            this.QueueRichPresenceLocRequest(t),
            t
          );
        }
        GetRichPresenceLocAsync(e) {
          let t = this.GetRichPresenceLoc(e);
          return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
        }
        OnRichPresenceLocUpdate(e, t) {
          e.m_nLastUpdated = Date.now();
          for (let n of t) {
            let t = n.language(),
              i = e.m_mapLanguages.get(t);
            i
              ? i.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (i = e.m_mapLanguages.get(t)));
            for (let e of n.tokens()) i?.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = a.w.Init(_.zQ);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(c.TS.LANGUAGE),
                    _.BE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t,
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    1 != t.GetEResult()
                      ? Promise.reject()
                      : (this.OnRichPresenceLocUpdate(
                          e,
                          t.Body().token_lists(),
                        ),
                        Promise.resolve(e))
                  ),
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      (0, i.Cg)([s.XI], m.prototype, "OnGetAppsResponse", null),
        (0, i.Cg)([s.XI], m.prototype, "OnRichPresenceLocUpdate", null);
      const g = new m();
    },
    55263: (e, t, n) => {
      n.d(t, {
        G6: () => c,
        Gg: () => u,
        MS: () => f,
        Ow: () => p,
        YM: () => m,
        mZ: () => d,
        t7: () => l,
        zX: () => h,
      });
      var i = n(41735),
        s = n.n(i),
        o = n(90626),
        a = n(84933),
        r = n(16021);
      function c(e, t, n, i) {
        const c = (0, o.useRef)(void 0),
          l = (0, o.useRef)(void 0),
          p = (0, a.CH)();
        c.current = e;
        const [u, d] = (0, o.useState)(void 0),
          {
            include_assets: _,
            include_release: h,
            include_platforms: f,
            include_all_purchase_options: m,
            include_screenshots: g,
            include_trailers: I,
            include_ratings: A,
            include_tag_count: L,
            include_reviews: G,
            include_basic_info: P,
            include_supported_languages: v,
            include_full_description: C,
            include_included_items: w,
            include_assets_without_overrides: R,
            apply_user_filters: S,
            include_links: y,
          } = n;
        if (
          ((0, o.useEffect)(() => {
            const n = {
              include_assets: _,
              include_release: h,
              include_platforms: f,
              include_all_purchase_options: m,
              include_screenshots: g,
              include_trailers: I,
              include_ratings: A,
              include_tag_count: L,
              include_reviews: G,
              include_basic_info: P,
              include_supported_languages: v,
              include_full_description: C,
              include_included_items: w,
              include_assets_without_overrides: R,
              apply_user_filters: S,
              include_links: y,
            };
            let o = null;
            return (
              !e ||
                e < 0 ||
                r.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== u && i && i == l.current) ||
                (i !== l.current && (d(void 0), (l.current = i)),
                (o = s().CancelToken.source()),
                r.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    o?.token.reason || c.current !== e || d(1 == t), p();
                  })),
              () => o?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, u, _, h, f, m, g, I, A, L, G, P, v, C, w, R, S, y, p]),
          !e)
        )
          return [null, 2];
        if (!1 === u) return [void 0, 2];
        if (r.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!r.A.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const b = r.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return b ? [b, 3] : [null, 2];
      }
      function l(e, t, n) {
        return c(e, 0, t, n);
      }
      function p(e, t, n) {
        return c(e, 2, t, n);
      }
      function u(e, t, n) {
        return c(e, 1, t, n);
      }
      function d(e, t, n) {
        const [i, s] = c(e, t, n);
        let o;
        1 != i?.GetStoreItemType() ||
          i.GetAssets()?.GetHeaderURL() ||
          1 != i?.GetIncludedAppIDs().length ||
          (o = i.GetIncludedAppIDs()[0]);
        const [a, r] = l(o, n);
        return o && a?.BIsVisible() ? [a, r] : [i, s];
      }
      function _(e, t, n, i) {
        const c = (0, a.CH)(),
          {
            include_assets: l,
            include_release: p,
            include_platforms: u,
            include_all_purchase_options: d,
            include_screenshots: _,
            include_trailers: h,
            include_ratings: f,
            include_tag_count: m,
            include_reviews: g,
            include_basic_info: I,
            include_supported_languages: A,
            include_full_description: L,
            include_included_items: G,
            include_assets_without_overrides: P,
            apply_user_filters: v,
            include_links: C,
          } = n;
        if (
          ((0, o.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: l,
                include_release: p,
                include_platforms: u,
                include_all_purchase_options: d,
                include_screenshots: _,
                include_trailers: h,
                include_ratings: f,
                include_tag_count: m,
                include_reviews: g,
                include_basic_info: I,
                include_supported_languages: A,
                include_full_description: L,
                include_included_items: G,
                include_assets_without_overrides: P,
                apply_user_filters: v,
                include_links: C,
              },
              i = e.filter(
                (e) =>
                  !(
                    r.A.Get().BHasStoreItem(e, t, n) ||
                    r.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const o = s().CancelToken.source(),
              a = i.map((e) => r.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(a).then(() => {
                o.token.reason || c();
              }),
              () => o.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, c, l, p, u, d, _, h, f, m, g, I, A, L, G, P, v, C]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              r.A.Get().BHasStoreItem(e, t, n) ||
              r.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          r.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function h(e, t, n) {
        return _(e, 0, t, n);
      }
      function f(e, t, n) {
        return _(e, 2, t, n);
      }
      function m() {
        o.useEffect(
          () => (
            r.A.Get().SetReturnUnavailableItems(!0),
            () => r.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
  },
]);
