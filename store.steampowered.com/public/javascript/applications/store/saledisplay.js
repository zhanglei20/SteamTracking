/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9236],
    {
      71698: (P, ge, a) => {
        "use strict";
        a.d(ge, { H: () => ce, s: () => ie });
        var e = a(90626),
          k = a(41623);
        let O = 0;
        function ce(Q, ee) {
          (0, e.useEffect)(() => {
            if (!(Q || ee))
              return (
                O++,
                () => {
                  --O == 0 && (0, k.s)();
                }
              );
          }, [Q, ee]);
        }
        function ie(Q) {
          const [ee, te] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const F = window.setTimeout(() => te(!0), Q);
            return () => window.clearTimeout(F);
          }, [Q]),
            ce(ee);
        }
      },
      85528: (P, ge, a) => {
        "use strict";
        a.d(ge, { Vw: () => W });
        var e = a(14947),
          k = a(99412),
          O = a(72604),
          ce = a(35038),
          ie = a(67529),
          Q = a(3166);
        class ee {
          m_nLastUpdated = 0;
          m_mapLanguages = e.sH.map();
          m_appid;
          m_fetching = null;
          constructor(l) {
            this.m_appid = l;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(l) {
            return this.m_mapLanguages.has(l)
              ? this.m_mapLanguages.get(l)
              : null;
          }
          Localize(l, g) {
            let _ = Q.TS.LANGUAGE,
              b = this.GetTokenList(_),
              Z = _ != "english" ? this.GetTokenList("english") : null;
            return te(l, b, Z, this.m_appid, g);
          }
          SubstituteParams(l, g) {
            let _ = Q.TS.LANGUAGE,
              b = this.GetTokenList(_),
              Z = _ != "english" ? this.GetTokenList("english") : null;
            return F(l, b, Z, this.m_appid, g);
          }
        }
        function te(j, l, g, _, b) {
          if (!j.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                j,
                "appid",
                _,
                "tokens",
                l,
              ),
              ""
            );
          let Z = j;
          j = j.toLowerCase();
          let A = "";
          if (
            (l && l.has(j) && (A = l.get(j)),
            !A && g && g.has(j) && (A = g.get(j)),
            A)
          )
            A = F(A, l, g, _, b);
          else if (
            ((l || g) &&
              console.log(
                "No loc found for appid",
                _,
                Z,
                "Tokens:",
                l,
                "Fallback:",
                g,
              ),
            l && Q.TS.EUNIVERSE != k.wLO)
          )
            return j;
          return A;
        }
        function F(j, l, g, _, b) {
          let Z = /{[A-za-z0-9_%#:]+}/g,
            A = j.match(Z);
          if (A)
            for (let $ of A) {
              let c = $.slice(1, -1),
                fe = m(c, b),
                qe = te(fe, l, g, _, b);
              if (!qe) return "";
              j = j.replace($, qe);
            }
          return (j = m(j, b)), j;
        }
        function m(j, l) {
          let g = /%[A-Za-z0-9_:]+%/g,
            _ = j.match(g);
          if (_)
            for (let b of _) {
              let Z = b.slice(1, -1).toLowerCase(),
                A = l.get(Z);
              A == null
                ? console.log("No rich presence found for", Z)
                : (j = j.replace(b, A));
            }
          return j;
        }
        var oe = a(72849),
          J = a(71742),
          de = a(8323),
          U = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          z = (j, l, g, _) => {
            for (
              var b = _ > 1 ? void 0 : _ ? N(l, g) : l, Z = j.length - 1, A;
              Z >= 0;
              Z--
            )
              (A = j[Z]) && (b = (_ ? A(l, g, b) : A(b)) || b);
            return _ && b && U(l, g, b), b;
          };
        function y(j) {
          return useObserver(() => W.GetAppInfo(j));
        }
        function D(j) {
          return useObserver(() => j.map((l) => W.GetAppInfo(l)));
        }
        const V = 3600 * 24 * 7 * 2;
        class L {
          m_CMInterface;
          m_mapAppInfo = e.sH.map();
          m_mapRichPresenceLoc = e.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new de.lu();
          constructor() {
            (0, e.Gn)(this);
          }
          Init(l) {
            this.m_CMInterface = l;
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
          RegisterCallbackOnLoad(l) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, J.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                l();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(l);
          }
          IsLoadingAppID(l) {
            return this.m_setPendingAppInfo.has(l);
          }
          GetAppInfo(l) {
            if (
              ((0, J.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(l))
            ) {
              let g = new ie.by(l);
              this.m_mapAppInfo.set(l, g), this.QueueAppInfoRequest(l);
            }
            return this.m_mapAppInfo.get(l);
          }
          QueueAppInfoRequest(l) {
            return l
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (g) => (this.m_PendingAppInfoResolve = g),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(l),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const l = this.m_PendingAppInfoResolve,
              g = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(g),
              l?.();
          }
          async LoadAppInfoBatch(l) {
            this.m_cAppInfoRequestsInFlight++;
            let g = await this.LoadAppInfoBatchFromLocalCache(l);
            if (g.length) {
              console.log("Loading batch of App Info from Steam: ", g),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let _ = ce.w.Init(oe._z);
              _.Body().set_language((0, k.sfN)(Q.TS.LANGUAGE));
              const b = 50;
              for (; g.length > 0; ) {
                const Z = Math.min(b, g.length),
                  A = g.slice(0, Z);
                (g = g.slice(Z)), _.Body().set_appids(A);
                const $ = await oe.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  _,
                );
                $.GetEResult() == O.R
                  ? this.OnGetAppsResponse($)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${$.GetEResult()}, AppIDs:`,
                      A,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(l) {
            let g = [];
            for (let _ of l.Body().apps()) {
              let b = this.m_mapAppInfo.get(_.appid());
              (0, J.wT)(
                b,
                `Got AppInfo response for unrequested AppID: ${_.appid()}`,
              ),
                b &&
                  ((b = new ie.by(_.appid())),
                  b.DeserializeFromMessage(_),
                  this.m_mapAppInfo.set(_.appid(), b),
                  g.push(b));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(l) {
            for (let g of l) {
              const _ = new ie.by(g.appid());
              _.DeserializeFromAppOverview(g),
                _.is_initialized && this.m_mapAppInfo.set(g.appid(), _);
            }
          }
          async EnsureAppInfoForAppIDs(l) {
            let g = !1;
            return (
              l.forEach((_) => {
                let b = this.m_mapAppInfo.get(_);
                if (b) {
                  b.is_valid || (g = !0);
                  return;
                }
                (b = new ie.by(_)),
                  this.m_mapAppInfo.set(_, b),
                  this.QueueAppInfoRequest(_),
                  (g = !0);
              }),
              g && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(l) {
            this.m_CacheStorage = l;
          }
          GetCacheKeyForAppID(l) {
            return "APPINFO_" + l;
          }
          async LoadAppInfoBatchFromLocalCache(l) {
            if (!this.m_CacheStorage) return l;
            console.log("Loading batch of App Info from Local Cache: ", l);
            const g = new Date(new Date().getTime() - V * 1e3),
              _ = async ($) => {
                const c = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID($),
                );
                if (!c) return $;
                let fe = this.m_mapAppInfo.get($);
                return (
                  (0, J.wT)(
                    fe,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  fe
                    ? ((fe = new ie.by($)),
                      fe.DeserializeFromCacheObject(c),
                      fe.is_initialized
                        ? (this.m_mapAppInfo.set($, fe),
                          fe.time_updated_from_server < g ? $ : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            $,
                            c,
                          ),
                          $))
                    : $
                );
              };
            let b = l.map(($) => _($));
            return (await Promise.all(b)).filter(($) => $ !== null);
          }
          async SaveAppInfoBatchToLocalCache(l) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                l.map((g) => g.appid),
              );
              for (const g of l) {
                const _ = g.SerializeToCacheObject();
                _ &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(g.appid),
                    _,
                  );
              }
            }
          }
          Localize(l, g, _) {
            const b = this.GetRichPresenceLoc(l);
            return b
              ? b.Localize(g, _)
              : Q.TS.EUNIVERSE != k.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${l} token ${g}, this may not have had a chance to load yet`,
                  ),
                  g)
                : "";
          }
          GetRichPresenceLoc(l) {
            if (this.m_mapRichPresenceLoc.has(l.toString())) {
              let _ = this.m_mapRichPresenceLoc.get(l.toString());
              return (
                _.m_nLastUpdated + 1e3 * 60 * ie.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(_),
                _
              );
            }
            let g = new ee(l);
            return (
              this.m_mapRichPresenceLoc.set(l.toString(), g),
              this.QueueRichPresenceLocRequest(g),
              g
            );
          }
          GetRichPresenceLocAsync(l) {
            let g = this.GetRichPresenceLoc(l);
            return g.m_nLastUpdated ? Promise.resolve(g) : g.m_fetching;
          }
          OnRichPresenceLocUpdate(l, g) {
            l.m_nLastUpdated = Date.now();
            for (let _ of g) {
              let b = _.language(),
                Z = l.m_mapLanguages.get(b);
              Z
                ? Z.clear()
                : (l.m_mapLanguages.set(b, new Map()),
                  (Z = l.m_mapLanguages.get(b)));
              for (let A of _.tokens())
                Z?.set(A.name().toLowerCase(), A.value());
            }
          }
          QueueRichPresenceLocRequest(l) {
            return (
              l.m_fetching ||
                ((l.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let g = ce.w.Init(oe.zQ);
                    return (
                      g.Body().set_appid(l.GetAppID()),
                      g.Body().set_language(Q.TS.LANGUAGE),
                      oe.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        g,
                      )
                    );
                  })
                  .then(
                    (g) => (
                      (l.m_fetching = null),
                      g.GetEResult() != O.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            l,
                            g.Body().token_lists(),
                          ),
                          Promise.resolve(l))
                    ),
                  )),
                l.m_fetching.catch(() => {
                  l.m_fetching = null;
                })),
              l.m_fetching
            );
          }
        }
        z([e.XI], L.prototype, "OnGetAppsResponse", 1),
          z([e.XI], L.prototype, "OnRichPresenceLocUpdate", 1);
        const W = new L();
      },
      50109: (P, ge, a) => {
        "use strict";
        a.d(ge, { E: () => de, O: () => J });
        var e = a(14947),
          k = a(65946),
          O = a(99412),
          ce = a(41635),
          ie = a(27066),
          Q = a(3166),
          ee = a(38585),
          te = Object.defineProperty,
          F = Object.getOwnPropertyDescriptor,
          m = (U, N, z, y) => {
            for (
              var D = y > 1 ? void 0 : y ? F(N, z) : N, V = U.length - 1, L;
              V >= 0;
              V--
            )
              (L = U[V]) && (D = (y ? L(N, z, D) : L(D)) || D);
            return y && D && te(N, z, D), D;
          };
        const oe = class Ct {
          m_eCurLang = (0, O.sfN)(Q.TS.LANGUAGE);
          m_rgHasData = (0, ce.$Y)([], O.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new ee.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(N) {
            return this.m_eCurLang != N
              ? ((this.m_eCurLang = N), this.GetCallback().Dispatch(N), !0)
              : !1;
          }
          SetHasLanguage(N) {
            N.forEach((z, y) => {
              this.m_rgHasData[y] != z && (this.m_rgHasData[y] = z);
            });
          }
          BHasLanguageData(N) {
            return this.m_rgHasData[N];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(N) {
            N != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = N);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              Ct.s_globalSingletonStore ||
                (Ct.s_globalSingletonStore = new Ct()),
              Ct.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        m([e.sH], oe.prototype, "m_eCurLang", 2),
          m([e.sH], oe.prototype, "m_rgHasData", 2),
          m([e.sH], oe.prototype, "m_bHasLocalizationContext", 2),
          m([ie.o], oe.prototype, "GetCurEditLanguage", 1),
          m([ie.o], oe.prototype, "SetCurEditLanguage", 1),
          m([e.XI.bound], oe.prototype, "SetHasLanguage", 1),
          m([ie.o], oe.prototype, "BHasLanguageData", 1);
        let J = oe;
        function de() {
          return (0, k.q3)(() => J.Get().GetCurEditLanguage());
        }
      },
      37656: (P, ge, a) => {
        "use strict";
        a.d(ge, { w: () => W });
        var e = a(41735),
          k = a.n(e),
          O = a(14947),
          ce = a(65946),
          ie = a(90626),
          Q = a(27066),
          ee = a(8323),
          te = a(30096),
          F = a(3166),
          m = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          J = (j, l, g, _) => {
            for (
              var b = _ > 1 ? void 0 : _ ? oe(l, g) : l, Z = j.length - 1, A;
              Z >= 0;
              Z--
            )
              (A = j[Z]) && (b = (_ ? A(l, g, b) : A(b)) || b);
            return _ && b && m(l, g, b), b;
          };
        const de = class Pn {
          constructor() {
            (0, O.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const l = new Pn();
            return (
              (l.giveaway_id = this.giveaway_id),
              (l.seconds_until_drawing = this.seconds_until_drawing),
              (l.rtime_start = this.rtime_start),
              (l.rtime_end = this.rtime_end),
              (l.closed = this.closed),
              (l.winner_count = this.winner_count),
              l
            );
          }
        };
        J([O.sH], de.prototype, "giveaway_id", 2),
          J([O.sH], de.prototype, "seconds_until_drawing", 2),
          J([O.sH], de.prototype, "rtime_start", 2),
          J([O.sH], de.prototype, "rtime_end", 2),
          J([O.sH], de.prototype, "closed", 2),
          J([O.sH], de.prototype, "winner_count", 2);
        let U = de;
        const N = class st {
          constructor() {
            (0, O.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(l, g) {
            return l + "_" + g;
          }
          GetInfoByInstance(l, g) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(l, g),
            );
          }
          GetNextDrawChangeCallback(l) {
            return (
              this.m_mapNextDrawChangeCallback.has(l) ||
                this.m_mapNextDrawChangeCallback.set(l, new ee.lu()),
              this.m_mapNextDrawChangeCallback.get(l)
            );
          }
          CopyToGiveaway(l, g) {
            g.closed != l.closed && (g.closed = l.closed),
              g.giveaway_id != l.giveaway_id && (g.giveaway_id = l.giveaway_id),
              g.rtime_start != l.rtime_start && (g.rtime_start = l.rtime_start),
              g.rtime_end != l.rtime_end && (g.rtime_end = l.rtime_end),
              g.winner_count != l.winner_count &&
                (g.winner_count = l.winner_count),
              g.seconds_until_drawing != l.seconds_until_drawing &&
                (g.seconds_until_drawing = l.seconds_until_drawing);
          }
          async ReloadGiveaway(l, g) {
            if (!l) return null;
            let _ = F.TS.STORE_BASE_URL + "prizes/nextdraw/" + l,
              b = null,
              Z = { origin: self.origin };
            return (
              (b = await k().get(_, { params: Z })),
              (0, O.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(l) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(l, new U()),
                  this.CopyToGiveaway(
                    b.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(l),
                  ),
                  g !== void 0)
                ) {
                  const A = this.GetKey(l, g);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(A) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      A,
                      new U(),
                    ),
                    this.CopyToGiveaway(
                      b.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(A),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(l).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(l),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(l)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              st.s_Singleton ||
                ((st.s_Singleton = new st()), st.s_Singleton.Init()),
              st.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let l = (0, F.Tc)("giveawaynextdraw", "application_config");
              if (l && l.giveaway_id) {
                let g = new U();
                this.CopyToGiveaway(l, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(l.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        J([O.sH], N.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          J([O.XI], N.prototype, "CopyToGiveaway", 1);
        let z = N;
        const y = class vn {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = vn.s_GlobalInstance),
              (vn.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(l, g) {
            if ((this.ClearRefreshInterval(), !l.closed)) {
              let _ =
                l.seconds_until_drawing <= 0 && l.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(g, _);
            }
          }
          SetupCountDown(l, g) {
            l > 0 && (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        J([Q.o], y.prototype, "ClearRefreshInterval", 1),
          J([Q.o], y.prototype, "ClearCountDown", 1),
          J([Q.o], y.prototype, "SetupRefreshDataInterval", 1),
          J([Q.o], y.prototype, "SetupCountDown", 1);
        let D = y;
        function V(j, l) {
          const g = z.Get().GetInfoByInstance(j, l.m_myInstanceNumber);
          (g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && l.ClearCountDown();
        }
        function L(j, l) {
          const g = z.Get().GetInfoByInstance(j, l.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (l.ClearCountDown(),
            z
              .Get()
              .ReloadGiveaway(j, l.m_myInstanceNumber)
              .then((_) => {
                l.SetupCountDown(_.seconds_until_drawing, () => V(j, l));
              }));
        }
        function W(j) {
          const [l] = (0, ie.useState)(new D()),
            g = (0, te.CH)();
          (0, ie.useEffect)(
            () => (
              z
                .Get()
                .ReloadGiveaway(j, l.m_myInstanceNumber)
                .then(($) => {
                  l.SetupRefreshDataInterval($, () => L(j, l)),
                    l.SetupCountDown($.seconds_until_drawing, () => V(j, l)),
                    g();
                }),
              () => {
                l.ClearRefreshInterval(), l.ClearCountDown();
              }
            ),
            [l, j, g],
          );
          const _ = z.Get().GetInfoByInstance(j, l.m_myInstanceNumber),
            [b, Z, A] = (0, ce.q3)(() => [
              _?.winner_count,
              _?.closed,
              _?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !_ || _.giveaway_id == null || !_.BStarted() || b === void 0,
            winner_count: b,
            closed: Z,
            seconds_until_drawing: A,
          };
        }
      },
      55436: (P, ge, a) => {
        "use strict";
        a.d(ge, { r: () => de, z: () => oe });
        var e = a(7850),
          k = a(90626),
          O = a(16412),
          ce = a(25792),
          ie = a(96538),
          Q = a(18210),
          ee = a(85599),
          te = a(17618),
          F = a.n(te),
          m = a(53424);
        const oe = (U) => {
            const { clanSteamID: N, fnImageSelectCallBack: z } = U,
              [y, D] = (0, k.useState)(""),
              V = (0, m.mr)(U.clanSteamID.GetAccountID()),
              L = () => U.closeModal && U.closeModal(),
              W = m.pU.GetFilteredClanImages(N, y),
              j = (l) => {
                z(l), L();
              };
            return (0, e.jsx)(ce.tH, {
              children: (0, e.jsx)(ie.x_, {
                onEscKeypress: L,
                children: (0, e.jsxs)(O.UC, {
                  children: [
                    (0, e.jsx)(O.Y9, {
                      children: (0, Q.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(O.nB, {
                      children: (0, e.jsxs)(O.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, Q.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(O.pd, {
                            placeholder: (0, Q.we)("#ClanImageChooser_Search"),
                            value: y,
                            onChange: (l) => D(l.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: te.ImagesOuterContainer,
                            children: V
                              ? (0, e.jsx)(ee.t, {
                                  size: "medium",
                                  string: (0, Q.we)("#Loading"),
                                })
                              : W.length > 0
                                ? W.map((l) =>
                                    (0, e.jsx)(
                                      J,
                                      {
                                        clanImage: l,
                                        searchStringHilight: y,
                                        fnImageClick: j,
                                      },
                                      "ci" + l.image_hash,
                                    ),
                                  )
                                : y.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, Q.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, Q.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(O.wi, {
                      children: (0, e.jsx)(O.$n, {
                        onClick: L,
                        children: (0, Q.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          J = (U) => {
            const { clanImage: N, searchStringHilight: z, fnImageClick: y } = U;
            let D = N.file_name ? N.file_name : "",
              V = de(z, D, String(N.imageid), te.Hilight);
            return (0, e.jsxs)("div", {
              className: te.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: te.Image,
                  style: { backgroundImage: `url( '${N.thumb_url}' )` },
                  onDoubleClick: () => y(N),
                }),
                (0, e.jsx)("div", {
                  className: te.ImageFilename,
                  title: D,
                  children: V,
                }),
              ],
            });
          };
        function de(U, N, z, y) {
          let D = [];
          if (U.length > 0) {
            let V = N.toLocaleLowerCase();
            for (let L = 0; L < N.length; ) {
              let W = V.indexOf(U, L);
              if (W < 0) {
                D.push(
                  (0, e.jsx)(
                    "span",
                    { children: N.substring(L) },
                    z + "_" + String(L),
                  ),
                );
                break;
              } else
                L < W &&
                  D.push(
                    (0, e.jsx)(
                      "span",
                      { children: N.substring(L, W) },
                      z + "_" + String(L),
                    ),
                  ),
                  D.push(
                    (0, e.jsx)(
                      "span",
                      { className: y, children: N.substr(W, U.length) },
                      z + "_" + String(L),
                    ),
                  ),
                  (L = W + U.length);
            }
          } else D.push((0, e.jsx)("span", { children: N }, z + "_null"));
          return D;
        }
      },
      24806: (P, ge, a) => {
        "use strict";
        a.d(ge, { Ng: () => y });
        var e = a(7850),
          k = a(75844),
          O = a(90626),
          ce = a(99412),
          ie = a(32093),
          Q = a(50109),
          ee = a(95695),
          te = a.n(ee),
          F = a(36707),
          m = a(18210),
          oe = a(92264),
          J = a(30096),
          de = a(71421),
          U = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          z = (L, W, j, l) => {
            for (
              var g = l > 1 ? void 0 : l ? N(W, j) : W, _ = L.length - 1, b;
              _ >= 0;
              _--
            )
              (b = L[_]) && (g = (l ? b(W, j, g) : b(g)) || g);
            return l && g && U(W, j, g), g;
          };
        let y = class extends O.Component {
          GenerateLanguageOptions() {
            let L = [];
            const {
              fnFilterLanguage: W,
              fnLangHasData: j,
              fnLastUpdateRTime: l,
              fnIsLangSupported: g,
            } = this.props;
            this.props.bAllowUnsetOption &&
              L.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: ce.xPp,
                    children: (0, m.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let _ = new Array();
            const b = this.props.realms || [ie.TU.k_ESteamRealmGlobal];
            for (const A of m.A0.GetLanguageListForRealms(b)) {
              if (W && !W(A)) continue;
              const $ = (0, ce.LgB)(A),
                c = (0, m.we)("#Language_" + $),
                fe = !!(g && g(A));
              _.push({ eLang: A, sLocName: c, bSupported: fe });
            }
            _.sort((A, $) =>
              A.bSupported != $.bSupported
                ? A.bSupported
                  ? -1
                  : 1
                : A.sLocName.localeCompare($.sLocName),
            );
            let Z = !1;
            for (const A of _) {
              A.bSupported != Z &&
                (L.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: te().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, m.we)(
                        A.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    A.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Z = A.bSupported));
              const $ = j && j(A.eLang),
                c = l && l(A.eLang);
              let fe = A.sLocName;
              c &&
                c !== 0 &&
                ((fe += " "),
                (fe += (0, m.we)(
                  "#Language_Last_Update",
                  (0, m.$z)(c) +
                    " @ " +
                    (0, oe.KC)(c, { bForce24HourClock: !1 }),
                ))),
                L.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: A.eLang,
                      className: (0, F.A)(
                        { [te().LanguageWithContent]: $ },
                        A.bSupported
                          ? te().SupportedLanguage
                          : te().UnsupportedLanguage,
                      ),
                      children: fe,
                    },
                    "langpicker" + A.eLang + ($ ? "_hasdata" : ""),
                  ),
                );
            }
            return L;
          }
          OnLanguageChange(L) {
            const { fnOnLanguageChanged: W, selectedLang: j } = this.props;
            let l = Number.parseInt(L.currentTarget.value);
            l != j && W && W(l);
          }
          render() {
            const { selectedLang: L, bDisabled: W, strTooltip: j } = this.props;
            let l = this.GenerateLanguageOptions();
            return (0, e.jsx)(de.he, {
              toolTipContent: j,
              children: (0, e.jsx)("select", {
                value: L,
                onChange: this.OnLanguageChange,
                disabled: W,
                children: l,
              }),
            });
          }
        };
        z([J.oI], y.prototype, "OnLanguageChange", 1), (y = z([k.PA], y));
        function D(L) {
          const [W, j] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(y, {
            selectedLang: j,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !W,
            strTooltip: W ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function V(L) {
          const { fnLangHasData: W } = L;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const j = useObserver(() => {
            const l = [];
            for (let g = k_ELanguage_English; g < k_ELanguage_MAX; ++g)
              l[g] = !!(W && W(g));
            return l;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(j), [j]),
            jsx(Fragment, {})
          );
        }
      },
      25679: (P, ge, a) => {
        "use strict";
        a.d(ge, { _: () => eo });
        var e = a(7850),
          k = a(99412),
          O = a(19298),
          ce = a(20169),
          ie = a(28604),
          Q = a(36631),
          ee = a(64387);
        function te(o) {
          const { strURL: t } = o;
          return t
            ? (0, e.jsx)("div", {
                className: ee.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var F = a(65946),
          m = a(90626),
          oe = a(73259),
          J = a(25792),
          de = a(52393),
          U = a.n(de),
          N = a(95695),
          z = a.n(N),
          y = a(36707),
          D = a(3166),
          V = a(82054),
          L = a(68266);
        function W(o) {
          const { event: t, bIsPreview: n } = o;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)(J.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, y.A)(
                    U().SaleBackground,
                    U()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    U().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: n
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    s && (0, e.jsx)("source", { src: s, type: "video/webm" }),
                    r &&
                      !D.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: r, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function j(o) {
          const { event: t, language: n, children: s, bIsPreview: r } = o,
            i = m.useRef(null),
            d = (0, L.m0)(t, "sale_header", n),
            [h] = (0, F.q3)(() => [t.jsondata.sale_sub_menu]);
          m.useEffect(() => {
            if (!d) return;
            const I = new Image();
            (I.onload = () => {
              const C = (100 * I.width) / 950 + "%";
              i.current && i.current.style.setProperty("--background-scale", C);
            }),
              (I.src = d);
          }, [d]);
          const u = t.jsondata.sale_sections?.some(
              (I) => I.section_type === "contenthubmaincarousel",
            ),
            p =
              t.jsondata.item_source_type === oe.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                u),
            f = d ? `url(${d})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              h
                ? (0, e.jsx)(V.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: h,
                    styleVariation: V.g.k_SubMenu,
                  })
                : (0, e.jsx)(te, { strURL: d }),
              (0, e.jsx)("div", {
                className: (0, y.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: p,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, y.A)(
                    U()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    U().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: t.jsondata.sale_background_color,
                  },
                  ref: i,
                  children: [
                    d && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, y.A)(
                            z().SalePageBackground,
                            z().BackgroundImage,
                            z().Blur,
                          ),
                          src: d,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, y.A)(
                            z().SalePageBackground,
                            z().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: f,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(W, { event: t, bIsPreview: r }),
                    (0, e.jsx)(e.Fragment, { children: s }),
                  ],
                }),
              }),
            ],
          });
        }
        var l = a(26589),
          g = a(39905),
          _ = a(50909),
          b = a.n(_);
        function Z(o) {
          const { eventModel: t } = o,
            { data: n } = (0, l.hM)(t.clanSteamID.GetAccountID());
          if (
            !n ||
            (!n.can_edit && !n.support_user) ||
            (0, D.yK)() == "community"
          )
            return;
          const s = t.GetAllTags(),
            r = [];
          if (
            (s.includes("hide_store") &&
              r.push(
                g.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            s.includes("mod_hide_store") &&
              n.support_user &&
              r.push(g.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              s.includes("contenthub") &&
              r.push(
                g.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && r.length == 0))
          )
            return (0, e.jsx)("div", {
              className: b().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: b().WarningText,
                      children: g.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  r.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: b().WarningText,
                      children: [
                        g.Z.LocalizePlural(
                          "#Sale_SaleEventIsHidden_Reason",
                          r.length,
                        ),
                        (0, e.jsx)("ul", {
                          children: r.map((i) =>
                            (0, e.jsx)("li", { children: i }, i),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            });
        }
        var A = a(76789),
          $ = a.n(A),
          c = a(18210);
        function fe(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, F.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: $().SalePageLogoCtn,
                  href: D.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(qe, { ...o }),
                })
              : (0, e.jsx)("div", {
                  className: (0, y.A)($().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(qe, { ...o }),
                })
            : null;
        }
        function qe(o) {
          const { eventModel: t, language: n } = o,
            s = (0, L.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var Rt = a(72865),
          _t = a(71347),
          rt = a.n(_t),
          it = a(53107);
        function Ve(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, k.sfN)(D.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, y.A)(
                  rt().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(Pe, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, y.A)(
                  rt().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((s, r) =>
                      (0, e.jsxs)(
                        m.Fragment,
                        {
                          children: [
                            (0, e.jsx)(Pe, { presentor: s, lang: n }),
                            t.length > 2 && ", ",
                          ],
                        },
                        s.url,
                      ),
                    ),
                  (0, e.jsx)(Pe, { presentor: t[t.length - 1], lang: n }),
                ),
              });
        }
        function Pe(o) {
          const { presentor: t, lang: n } = o,
            s = (0, Rt.aL)(t.url);
          return (0, e.jsx)(it.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: rt().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var Ft = a(60480),
          St = a(92757),
          Ye = a(18994),
          et = a(56412),
          Dt = a(86515),
          lt = a(39153),
          zt = a(61478);
        function jt(o) {
          const { event: t, broadcastEmbedContext: n } = o,
            s = !!t?.jsondata?.broadcast_display_wide_player,
            r = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(zt.B, {
                event: t,
                broadcastEmbedContext: n,
                bWideBroadcastDisplay: s,
                bWideBroadcastPermitChat: r,
              }),
          });
        }
        var Ht = a(85671);
        function ct(o) {
          const {
            event: t,
            fnOnChangeDayIndex: n,
            addtionalAdminButtons: s,
          } = o;
          return (0, e.jsx)(Ht.g, {
            eventModel: t,
            fnOnUpdateSaleDayIndex: n,
            addtionalAdminButtons: s,
            bSupportsSticky: !0,
          });
        }
        var Qe = a(179),
          Ue = a(50109),
          Re = a(30096),
          Et = a(98609),
          Ze = a(57673);
        const dt = new Map();
        function Wt(o, t) {
          const n = o.findIndex((s) => s.section_type === "tabs");
          if (n >= 0 && t !== void 0) {
            const s = o[n],
              r = s.tabs?.findIndex((i) => i.unique_id === t);
            if (r !== void 0 && r >= 0 && s.tabs)
              return {
                selectedTabBackgroundDef: s.tabs[r].tab_background_img_groups,
                nTabSaleSectionIndex: n,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function Kt(o, t, n) {
          const s = new Map(),
            r = new Map(),
            i = new Map();
          let d,
            h,
            u = 0;
          const { selectedTabBackgroundDef: p, nTabSaleSectionIndex: f } = Wt(
            t,
            n,
          );
          if (o?.enabled) {
            const I = o.groups?.length;
            if (
              (o.groups?.forEach((S, C) => {
                if (u >= t.length || t[u].section_type == "tabs") return;
                const B = new Array();
                for (
                  let w = 0;
                  w < (S?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++w, ++u
                ) {
                  const R = t[u].unique_id;
                  B.push(R),
                    r.set(R, S.background_id),
                    w === 0 && i.set(R, S.background_id);
                }
                if (
                  (s.set(S.background_id, {
                    nBackgroundGroupID: S.background_id,
                    sectionUniqueIDs: B,
                    nSaleSectionLastIndex: u - 1,
                    nUniqueIDNextSaleSection:
                      u < t.length && (f === void 0 || u < f)
                        ? t[u].unique_id
                        : void 0,
                  }),
                  C + 1 == I && o.last_group_until_cover_section_until_end)
                )
                  for (
                    let w = u;
                    w < t.length &&
                    (!p || !p.enabled || w < f) &&
                    !(t[w].section_type == "tabs" && p?.enabled);
                    ++w
                  ) {
                    const R = t[w].unique_id;
                    r.set(R, S.background_id);
                  }
              }),
              u < t.length && (f === void 0 || u < f) && (d = t[u].unique_id),
              p?.enabled && f !== void 0)
            ) {
              let S = f;
              const C = p.groups.length;
              for (
                p.groups.forEach((B, T) => {
                  if (S >= t.length) return;
                  const w = new Array();
                  for (
                    let M = 0;
                    M < B.num_sections && S < t.length;
                    ++M, ++S
                  ) {
                    const H = t[S],
                      ne = H.unique_id;
                    (0, Ze.bF)(n, H)
                      ? (w.push(ne),
                        r.set(ne, B.background_id),
                        M === 0 && i.set(ne, B.background_id))
                      : --M;
                  }
                  let E = S;
                  for (; E < t.length && !(0, Ze.bF)(n, t[E]); ) E += 1;
                  if (
                    (s.set(B.background_id, {
                      nBackgroundGroupID: B.background_id,
                      sectionUniqueIDs: w,
                      nSaleSectionLastIndex: S - 1,
                      nUniqueIDNextSaleSection:
                        E < t.length ? t[E].unique_id : void 0,
                    }),
                    T + 1 == C && p.last_group_until_cover_section_until_end)
                  )
                    for (let M = S; M < t.length; ++M) {
                      const H = t[M];
                      if (H.section_type == "tabs" && p?.enabled) break;
                      (0, Ze.bF)(n, H) && r.set(H.unique_id, B.background_id);
                    }
                });
                S < t.length && !(0, Ze.bF)(n, t[S]);
              )
                S++;
              S < t.length && (h = t[S].unique_id);
            }
          } else t?.length > 0 && (d = t[0].unique_id);
          return {
            mapGroupToSections: s,
            nFirstSaleSectionIDWithoutGroup: d,
            mapSectionToGroup: r,
            mapFirstSectionToGroup: i,
            selectedTabBackgroundDef: p,
            nTabSaleSectionIndex: f,
            nFirstTabSectionIDWithoutGroup: h,
          };
        }
        var pe = a(29630),
          Vt = a(68434),
          bt = a(15181),
          tt = a(41635),
          Te = a(81416);
        function yt(o, t, n, s) {
          let i = o.jsondata.sale_background_img_groups.groups.find(
            (d) => d.background_id === t.groupID,
          );
          return (
            !i &&
              s >= 0 &&
              (i = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((u) => u.unique_id == s)
                ?.tab_background_img_groups?.groups?.find(
                  (u) => u.background_id == t.groupID,
                )),
            (0, e.jsx)(
              gt,
              {
                eventModel: o,
                displayDef: i,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  i &&
                  i.randomize_section_order &&
                  n !== Te.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(Yt, {
                        clanEventGID: o.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Yt(o) {
          const { clanEventGID: t, elSaleSections: n } = o,
            [s, r] = (0, Vt.M)(`sale_section_seed_${t}`, (0, bt.m)());
          if (!n || n.length === 0) return null;
          if (n.length > 1 && s !== void 0) {
            const i = (0, bt.A)(s);
            return (0, e.jsx)(e.Fragment, { children: tt.fW(n, 0, i) });
          }
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function gt(o) {
          const {
              displayDef: t,
              children: n,
              eventModel: s,
              derivedGroupInfo: r,
            } = o,
            i = (0, Ue.E)(),
            d = m.useCallback(
              (C, B) => {
                dt.set(r.nBackgroundGroupID, B);
              },
              [r],
            ),
            h = (0, Re.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const C = (0, k.LgB)(i),
              B =
                C in t.localized_background_art
                  ? C
                  : c.A0.GetLanguageFallback(Et.TS.LANGUAGE),
              T = t.localized_background_art[B];
            T && (u = pe.zU.GenerateURLFromHashAndExt(s.clanSteamID, T));
          }
          let p = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              p += "to bottom,";
              break;
            case "left-to-right":
              p += "to right,";
              break;
            case "top-left-to-bottom-right":
              p += "to bottom right,";
              break;
            case "single-color":
              p = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((p += " " + t.background_color1),
              (p += ", " + t.background_color2),
              (p += ")"))
            : (p = null);
          const f =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            I = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            S = {
              backgroundImage: p ? `url(${u}), ${p}` : `url(${u})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: I ? t.position_setting : void 0,
              backgroundColor: f ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: h,
            style: S,
            id: "background_group_" + t.background_id,
            children: n,
          });
        }
        var wt = a(9807),
          ut = a(4720),
          Le = a(64641),
          Fe = a.n(Le),
          ze = a(85599);
        function Qt(o) {
          return typeof o == "string" || typeof o == "number"
            ? o
            : JSON.stringify(o);
        }
        class mt {
          Keyify = (t) => Qt(t);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(t) {
            return this.m_mapVisible.has(this.Keyify(t));
          }
          SortKey(t, n) {
            const s = this.m_mapVisible.get(this.Keyify(t)) || 0,
              r = this.m_mapVisible.get(this.Keyify(n)) || 0;
            return s - r;
          }
          BMarkAppVisibile(t, n) {
            const s = this.EnsureOwnerSetExists(t),
              r = this.Keyify(n);
            return (
              s.add(r),
              this.IsAlreadyVisible(n)
                ? (this.m_mapVisible.set(
                    r,
                    (this.m_mapVisible.get(r) ?? 0) + 1,
                  ),
                  !1)
                : (this.m_mapVisible.set(r, 1), !0)
            );
          }
          BMarkAppNotVisible(t, n) {
            if (!this.IsAlreadyVisible(n)) return !1;
            const s = this.EnsureOwnerSetExists(t),
              r = this.Keyify(n);
            return s.has(r) ? (this.DecrementAppVisibility(r), !0) : !1;
          }
          MarkAllAppsNotVisible(t) {
            this.m_mapOwners.has(t) &&
              (this.m_mapOwners
                .get(t)
                .forEach(this.DecrementAppVisibility.bind(this)),
              this.m_mapOwners.delete(t));
          }
          EnsureOwnerSetExists(t) {
            let n = this.m_mapOwners.get(t);
            return (
              n ||
                (this.m_mapOwners.set(t, new Set()),
                (n = this.m_mapOwners.get(t))),
              n
            );
          }
          DecrementAppVisibility(t) {
            const n = (this.m_mapVisible.get(t) ?? 0) - 1;
            n > 0 ? this.m_mapVisible.set(t, n) : this.m_mapVisible.delete(t);
          }
        }
        var Je = a(71742),
          Zt = a(53113),
          At = a(90405);
        function Jt(o, t) {
          return o
            ? t
              ? !!o.valve_admin
              : !!(o.valve_admin || o.support_user)
            : !1;
        }
        function Lt(o, t) {
          const n = !!(o && o.BIsClanAccount()),
            { data: s } = (0, l.hM)(n ? o.GetAccountID() : 0);
          return n && Jt(s, t);
        }
        function Xt(o) {
          const { clanSteamID: t, id: n } = o;
          return Lt(t, o.requireAdmin)
            ? (0, e.jsx)("div", {
                id: n,
                className: (0, y.A)(
                  o.className,
                  o.requireAdmin
                    ? N.ValveOnlyAdminBackground
                    : N.ValveOnlyBackground,
                ),
                children: o.children,
              })
            : null;
        }
        var q = a(16412),
          ue = a(96538),
          je = a(88003),
          $t = a(12932),
          Xe = a(46777),
          qt = a(77495),
          Gt = a(16346),
          en = a(61257),
          tn = a(56718),
          He = a(71421),
          nn = a(27828),
          nt = a.n(nn);
        function an(o) {
          return `rgba(${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}, ${o.rgb.a})`;
        }
        function on(o) {
          const t = parseInt(o.slice(1), 16),
            n = (t >> 16) & 255,
            s = (t >> 8) & 255,
            r = t & 255;
          return `rgba(${n}, ${s}, ${r}, 1)`;
        }
        function ht(o) {
          const { color: t, onChange: n, strTitle: s, disableAlpha: r } = o,
            [i, d] = (0, m.useState)(() => t || "rgba(255, 255, 255, 1)"),
            h = (0, m.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(g.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const f = (await new window.EyeDropper().open()).sRGBHex,
                  I = on(f);
                d(I), n(I);
              } catch (u) {
                console.warn(g.Z.Localize("#Sale_EyeDropperFailed"), u);
              }
            }, [n]);
          return (0, e.jsxs)("div", {
            className: nt().ColorPickerDialog,
            children: [
              !!s && (0, e.jsx)(q.JU, { children: s }),
              (0, e.jsx)(en.xk, {
                onChange: (u) => {
                  const p = an(u);
                  d(p), n(p);
                },
                color: i,
                disableAlpha: r,
                className: nt().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: nt().EyeDropperCtn,
                children: (0, e.jsx)(He.Gq, {
                  toolTipContent: g.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(q.$n, {
                    className: nt().EyeDropperBtn,
                    onClick: h,
                    children: (0, e.jsx)(tn.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function sn(o) {
          const {
              color: t,
              onChange: n,
              onRequestClose: s,
              disableAlpha: r,
              strTitle: i,
            } = o,
            d = (0, m.useRef)(null);
          return (
            (0, m.useEffect)(() => {
              const h = d.current?.ownerDocument ?? document,
                u = (f) => {
                  d.current && !d.current.contains(f.target) && s();
                },
                p = (f) => {
                  f.key === "Escape" && s();
                };
              return (
                h.addEventListener("pointerdown", u, !0),
                h.addEventListener("keydown", p, !0),
                () => {
                  h.removeEventListener("pointerdown", u, !0),
                    h.removeEventListener("keydown", p, !0);
                }
              );
            }, [s]),
            (0, e.jsx)("div", {
              ref: d,
              children: (0, e.jsx)(ht, {
                color: t,
                disableAlpha: r,
                strTitle: i ?? g.Z.Localize("#Button_Color"),
                onChange: n,
              }),
            })
          );
        }
        function rn() {
          return {
            openColorPicker: (0, m.useCallback)((t, n) => {
              let s = null;
              const r = () => s?.Hide();
              s = (0, Gt.lX)(
                (0, e.jsx)(sn, {
                  color: n.color,
                  disableAlpha: n.disableAlpha,
                  strTitle: n.strTitle,
                  onChange: n.onChange,
                  onRequestClose: r,
                }),
                t,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
        var ln = a(13447),
          Ge = a.n(ln),
          cn = a(32190),
          Bt = a.n(cn),
          Be = a(76559),
          Pt = a(75909),
          Ee = a(53424),
          Tt = a(72604),
          dn = a(41735),
          gn = a.n(dn),
          at = a(14947),
          Me = a(9046),
          v = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          G = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? x(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && v(t, n, r), r;
          };
        const Y = class Tn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, at.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, n, s, r) {
            let i =
                D.TS.COMMUNITY_BASE_URL +
                "gid/" +
                n.ConvertTo64BitString() +
                "/hasclanimagefile",
              d = { image_hash_and_ext: s, lang: "" + r };
            return (
              (await gn().get(i, { params: d, cancelToken: t && t.token })).data
                .success == Tt.R
            );
          }
          SetPrimaryImageForImageGroup(t, n) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != t.imageid ||
              n != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: t,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = n),
              (this.m_curLocImageGroup.localized_images = (0, tt.$Y)(
                this.m_curLocImageGroup.localized_images,
                k.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            return this.m_curLocImageGroup?.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(t, n) {
            if (this.m_curLocImageGroup) {
              let s = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[n]
                ? this.m_curLocImageGroup.localized_images[n]
                : pe.zU.GenerateURLFromHashAndExt(
                    t,
                    pe.zU.GetHashAndExt(s) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const n = this.m_curLocImageGroup.primaryImage,
              s = Be.b.InitFromClanID(n.clanAccountID),
              r = pe.zU.GetHashAndExt(n) ?? "",
              i = [];
            for (let h = k.Bhc; h < k.bP9; ++h)
              i.push(Tn.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, h));
            const d = await Promise.all(i);
            (0, at.h5)(() => {
              for (let h = k.Bhc; h < k.bP9; ++h)
                d[h] &&
                  (this.m_curLocImageGroup.localized_images[h] =
                    pe.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      Me.wI.full,
                      h,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, n, s) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = s
                ? pe.zU.GenerateURLFromHashAndExtAndLang(
                    n,
                    s,
                    Me.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, n) {
            if (!this.m_curLocImageGroup) return;
            let s = this.m_curLocImageGroup.primaryImage;
            if (s?.image_hash == t) {
              const r = Be.b.InitFromClanID(s.clanAccountID),
                i = pe.zU.GetHashAndExt(s);
              i &&
                (this.m_curLocImageGroup.localized_images[n] =
                  pe.zU.GenerateURLFromHashAndExtAndLang(
                    r,
                    i,
                    Me.wI.full,
                    n,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
            }
          }
          GetAllLocalizedGroupImages() {
            return (
              (this.m_curLocImageGroup &&
                this.m_curLocImageGroup.localized_images) ||
              []
            );
          }
          GetAllLocalizedGroupImageHashAndExts() {
            return this.GetAllLocalizedGroupImages()
              .filter(Boolean)
              .map((s) => pe.zU.GetHashAndExtFromURL(s));
          }
        };
        G([at.sH], Y.prototype, "m_curLocImageGroup", 2);
        let X = Y;
        const K = new X();
        var re = a(38410),
          Ce = a(34592),
          ye = a(75844),
          me = a(32093),
          be = a(72849),
          Oe = a(64),
          We = a(72739),
          Ke = a(82734);
        function fn(o, t) {
          const n = m.useRef(void 0),
            s = m.useCallback(
              (d) => {
                d.currentTarget.files.length > 0 &&
                  (o(d.currentTarget.files), (d.currentTarget.value = ""));
              },
              [o],
            ),
            r = m.useCallback(() => n.current.click(), []);
          return [
            We.createPortal(
              (0, e.jsx)("form", {
                onSubmit: In,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...t,
                  type: "file",
                  ref: n,
                  onChange: s,
                }),
              }),
              window.document.body,
            ),
            r,
          ];
        }
        function Mn(o) {
          const [t, n] = m.useState(!1),
            s = m.useCallback((u) => {
              ((u.dataTransfer.files && u.dataTransfer.files[0]) ||
                (u.dataTransfer.types && u.dataTransfer.types[0] == "Files")) &&
                n(!0);
            }, []),
            r = m.useCallback((u) => {
              Ke.NO(u) && n(!1);
            }, []),
            i = m.useCallback(() => n(!1), []),
            d = t ? In : void 0,
            h = m.useCallback(
              (u) => {
                u.dataTransfer.files?.length &&
                  (o(u.dataTransfer.files, u),
                  u.preventDefault(),
                  u.stopPropagation()),
                  n(!1);
              },
              [o],
            );
          return [
            {
              onDragEnter: s,
              onDragLeave: r,
              onDragEnd: i,
              onDragOver: d,
              onDrop: h,
            },
            t,
          ];
        }
        async function co(o, t = 1e3) {
          return await new Promise((n, s) => {
            const r = new Image();
            (r.src = o),
              (r.onload = () => n("success")),
              (r.onerror = () => n("error")),
              t > 0 && window.setTimeout(() => n("timeout"), t);
          });
        }
        function In(o) {
          o.preventDefault();
        }
        function go(o) {
          switch (o.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const t = o.name.match(/(?<=\.)[^.]+$/);
              return t ? t[0] : void 0;
          }
        }
        var On = a(71647),
          ot = a.n(On);
        function Nn(o) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = o,
            [i, d] = Mn(t),
            [h, u] = fn(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, y.A)(
              d ? ot().DragAndDropContainerDragging : ot().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!n && n(),
              (0, e.jsx)("div", {
                children: r || (0, c.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: ot().ImageUploadBar,
                children: [
                  h,
                  (0, e.jsxs)("label", {
                    onClick: u,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, c.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: ot().SelectImageButton,
                        children: (0, c.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              s,
              o.children,
            ],
          });
        }
        var pt = a(36118),
          kn = a(21254),
          Un = a(27344),
          _e = a.n(Un),
          Rn = a(9472);
        function Fn(o) {
          const {
              imageUploader: t,
              fnUploadComplete: n,
              elOverrideDragAndDropText: s,
              forceResolution: r,
              elAdditonalButtons: i,
              rgRealmList: d,
            } = o,
            [h, u] = (0, F.q3)(() => [
              t.GetUploadImages(),
              Ue.O.Get().GetCurEditLanguage(),
            ]),
            p = m.useCallback(
              async (S) => {
                let C = Array.from(S),
                  B = !0;
                for (let T = 0; T < C.length; T++) {
                  const w = C[T],
                    { language: E } = (0, re.jj)(w?.name, u);
                  try {
                    const R = (0, re.PD)(E, u, d);
                    (B = await t.AddImageForLanguage(w, R)),
                      B ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            T +
                            " file=" +
                            w.name,
                        ),
                        (0, je.pg)(
                          (0, e.jsx)(ue.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              w.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (R) {
                    let M = (0, Ce.H)(R);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + M.strErrorMsg,
                      M,
                    ),
                      (0, je.pg)(
                        (0, e.jsx)(ue.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            M.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return B;
              },
              [u, t, d],
            ),
            f = m.useMemo(
              () =>
                i instanceof Array
                  ? i
                  : [
                      (0, e.jsx)(
                        m.Fragment,
                        { children: i },
                        "elAdditonalButtons",
                      ),
                    ],
              [i],
            );
          (0, F.q3)(() =>
            h.map((S) => ({ a: S.GetCurrentImageOption(), b: S.language })),
          );
          const I = async () => {
            const S = await t.UploadAllImages(r);
            n?.(S);
          };
          return (0, e.jsxs)(Nn, {
            onDropFiles: p,
            elAdditonalButtons: f,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(m.Fragment, {
                children: (0, e.jsx)("div", {
                  className: _e().UploadPreviewCtn,
                  children: h.map((S) =>
                    (0, e.jsx)(
                      xn,
                      {
                        asset: S,
                        forceResolution: r,
                        fnOnRemove: () => t.DeleteUploadImage(S),
                        languageRealms: d,
                      },
                      "arttabupload_" + S.filename + "_" + S.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(zn, { imageUploader: t, fnOnUploadImageRequested: I }),
            ],
          });
        }
        function zn(o) {
          const { imageUploader: t, fnOnUploadImageRequested: n } = o,
            [s] = (0, F.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: _e().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)(q.$n, {
                  style: { margin: "8px" },
                  onClick: n,
                  disabled: !r,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)(q.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: i,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function uo(o, t, n, s, r) {
          let i = new Array();
          return (
            o.GetUploadImages().forEach((d) => {
              i.push(
                jsx(
                  xn,
                  {
                    asset: d,
                    forceResolution: n,
                    forceFileType: s,
                    fnOnRemove: () => o.DeleteUploadImage(d),
                    languageRealms: r,
                  },
                  t + d.file + "_" + d.uploadTime,
                ),
              );
            }),
            i
          );
        }
        const xn = (0, ye.PA)(Hn);
        function Hn(o) {
          const t = (C) => {
              if (C instanceof Oe.M7) {
                C.ResetImage();
                const B = window,
                  T = (0, e.jsx)(kn.q, {
                    ownerWin: B,
                    uploadFile: C,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || be.bg.dU,
                  });
                (0, je.HT)(T, B, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  C.fileType,
                  JSON.stringify(C.GetCurrentImageOption()),
                );
            },
            { asset: n, fnOnRemove: s, languageRealms: r } = o,
            i = n.ImageOptions?.map((C) => {
              let B = C?.fnGetLabelText(),
                T;
              C.bEnforceDimensions && (B += ` - ${C.width}x${C.height}`),
                C.bDeprecated &&
                  ((B += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (T = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let w;
              return (
                (n.BIsOriginalMinimumDimensions(C) &&
                  n.FileTypeMatchesImageTypes(C)) ||
                  (w = _e().ImageDimensionTooSmall),
                { label: B, data: C, strOptionClass: w, tooltip: T }
              );
            }).filter((C) => !C.data.bHiddenFromDropdown),
            d = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            h = n.BSupportsLanguages()
              ? Vn(
                  c.A0.GetLanguageListForRealms(
                    r ?? [me.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            u = n.IsValidAssetType(o.forceResolution, o.forceFileType),
            p = n.status == "pending";
          let f = d[n.status];
          n.status == "pending" &&
            (u.needsCrop
              ? (f = (0, c.we)("#ImageUpload_NeedsCrop"))
              : u.error && (f = (0, c.we)("#ImageUpload_Invalid")));
          let I;
          const S = n.GetCurrentImageOption();
          return (
            S && (I = i?.find((C) => C.data.sKey == S.sKey)?.data),
            I || (I = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: _e().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: _e().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(pt.sED, {}),
                }),
                (0, e.jsx)(Wn, { asset: n }),
                h &&
                  (0, e.jsx)(q.m, {
                    strDropDownClassName: z().DropDownScroll,
                    rgOptions: h,
                    selectedOption: n.language,
                    onChange: (C) => (n.language = C.data),
                    disabled: !p,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)(q.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: I,
                    onChange: (C) => n.SetCurrentImageOption(C.data),
                    disabled: !p,
                  }),
                p &&
                  u.warnings?.map((C, B) =>
                    (0, e.jsx)(
                      "div",
                      { className: _e().UploadPreviewWarning, children: C },
                      `warning${B}`,
                    ),
                  ),
                p &&
                  u.messages?.map((C, B) =>
                    (0, e.jsx)(
                      "div",
                      { className: _e().UploadPreviewMessage, children: C },
                      `message${B}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, y.A)({
                    [z().FlexColumnContainer]: !0,
                    [_e().UploadPreviewError]: n.status == "failed",
                  }),
                  children: [
                    f,
                    (0, Rn.o)(n.status) &&
                      (0, e.jsx)("div", {
                        className: Fe().FlexCenter,
                        children: (0, e.jsx)(ze.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: _e().UploadPreviewError,
                  children: n.message,
                }),
                p &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: _e().UploadPreviewError,
                    children: u.error,
                  }),
                p &&
                  u.needsCrop &&
                  (0, e.jsx)(q.jn, {
                    onClick: () => t(n),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function Wn(o) {
          const { asset: t } = o;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: _e().PreviewImgCtn,
                onClick: (n) =>
                  (0, je.pg)((0, e.jsx)(Kn, { asset: t }), (0, Ke.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: _e().PreviewImgInfo,
                    children: [t.width, " x ", t.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: t.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: _e().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: _e().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function Kn(o) {
          const { asset: t, closeModal: n } = o;
          return (0, e.jsx)(ue.o0, {
            bAlertDialog: !0,
            closeModal: n,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: t.dataUrl }),
            }),
          });
        }
        function Vn(o) {
          const t = [],
            n = new Array();
          for (const s of o) {
            if (s == k.X51) continue;
            const r = (0, c.we)("#Language_" + (0, k.LgB)(s));
            n.push({ label: r, data: s });
          }
          return (
            n.sort((s, r) => s.label.localeCompare(r.label)),
            n.forEach((s) => t.push({ label: s.label, data: s.data })),
            n
          );
        }
        var Mt = ((o) => (
          (o[(o.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (o[(o.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (o[(o.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (o[(o.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          o
        ))(Mt || {});
        function Cn(o, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(o)}`
            : `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetHashAndExt(o)}`;
        }
        function mo(o, t, n) {
          let s = "";
          const r = Cn(t);
          if (n == 4)
            (s = "[video webm="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (s += r),
              (s += " mp4="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (s += r),
              (s += " autoplay=true controls=false][/video]");
          else if (n == 2) s = "[img]" + r + "[/img]";
          else {
            const i = Cn(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          o.InsertText(s);
        }
        var Yn = a(55436),
          Qn = a(53732),
          Se = a.n(Qn),
          _n = a(49460);
        function Zn(o) {
          const { fnSetImageSearch: t } = o,
            n = (0, m.useRef)(null);
          return (0, e.jsx)("div", {
            className: _n.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: n,
              className: _n.SearchInput,
              type: "text",
              placeholder: (0, c.we)("#ImagePicker_Search"),
              onChange: (s) => t(s.currentTarget.value),
              onKeyDown: (s) => {
                s.key == "Escape" &&
                  (t(""), n.current && (n.current.value = ""));
              },
            }),
          });
        }
        const Jn = m.memo(function (t) {
          const {
            fileNameSearch: n,
            clanAccountID: s,
            imageInsertCallBack: r,
            fnOnExpandImage: i,
            showImageActions: d = !0,
            InternalOpenLocalizeImageGroup: h,
          } = t;
          return (0, e.jsx)(Sn, {
            clanAccountID: s,
            fileNameSearch: n,
            children: (u, p) =>
              u.map((f) =>
                (0, e.jsx)(
                  Xn,
                  {
                    clanImage: f,
                    searchStringHilight: p,
                    imageInsertCallBack: r,
                    showImageActions: d,
                    fnOnOpenLocalizedImageGroup: h,
                    OnImageClick: i,
                  },
                  f.imageid,
                ),
              ),
          });
        });
        function Sn(o) {
          const { clanAccountID: t, fileNameSearch: n, children: s } = o,
            r = (0, Ee.n9)(t),
            i = n.trim().toLowerCase() || "",
            d = Ee.pU.GetFilteredClanImagesList(r, i);
          if (d.length == 0) {
            const h = Be.b.InitFromClanID(t);
            let u = Ee.pU.GetLoadState(h);
            return u && u.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: Se().ResultNotification,
                    children:
                      i.length > 0
                        ? (0, c.we)("#ImagePicker_EmptySearch")
                        : (0, c.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : u && u.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: Se().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", u.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: Se().ResultNotification,
                      children: (0, c.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return s(d, i);
        }
        function ho(o) {
          const {
            clanAccountID: t,
            fileNameSearch: n,
            onImageSelected: s,
            selectedItem: r,
          } = o;
          return jsx(Sn, {
            clanAccountID: t,
            fileNameSearch: n,
            children: (i) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: i.map((d) =>
                  jsx(
                    qn,
                    { clanImage: d, selected: d == r, onImageSelected: s },
                    d.imageid,
                  ),
                ),
              }),
          });
        }
        function Xn(o) {
          const {
              clanImage: t,
              searchStringHilight: n,
              imageInsertCallBack: s,
              OnImageClick: r,
              showImageActions: i,
              fnOnOpenLocalizedImageGroup: d,
            } = o,
            [h, u] = m.useState(!1),
            p = () => s(t, Mt.k_eInsertFullImage),
            f = () => s(t, Mt.k_eInsertVideo),
            I = () => s(t, Mt.k_eInsertThumbnail),
            S = (le) => {
              t.url &&
                (le.dataTransfer.setData("text", t.url),
                Ee.pU.GetClanImageDragListener().forEach((xe) => {
                  let Ae = Be.b.InitFromClanID(t.clanAccountID);
                  xe(Ae, !0);
                }));
            },
            C = (le) => {
              t.url &&
                Ee.pU.GetClanImageDragListener().forEach((xe) => {
                  let Ae = Be.b.InitFromClanID(t.clanAccountID);
                  xe(Ae, !1);
                });
            },
            B = (le) => {
              (0, je.pg)(
                (0, e.jsx)(ue.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: w,
                  onCancel: E,
                  closeModal: E,
                  children: (0, e.jsxs)(m.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, c.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, Ke.uX)(le) ?? window,
              );
            },
            T = (le) => {
              console.log("ClanImageWrapper on delete error: " + le),
                (0, je.pg)(
                  (0, e.jsx)(ue.KG, {
                    strTitle: (0, c.we)("#Error_FailureNotice"),
                    strDescription: (0, c.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: le }),
                  }),
                  window,
                );
            },
            w = () => {
              u(!0);
              let le = Be.b.InitFromClanID(t.clanAccountID);
              Ee.pU
                .DeleteClanImage(le, t)
                .then((xe) => {
                  xe.success != Tt.R && T((0, Ce.H)(xe).strErrorMsg), u(!1);
                })
                .catch((xe) => {
                  T((0, Ce.H)(xe).strErrorMsg), u(!1);
                }),
                E();
            },
            E = () => {},
            R = () => {
              r && r(t);
            },
            M = t.file_name ? t.file_name : "",
            H = (0, Yn.r)(n, M, String(t.imageid), Se().Hilight),
            ne = pe.zU.BIsClanImageVideo(t),
            ae = i && !h && !ne,
            he = i && !h && !ne,
            we = i && !h && ne,
            se = i && !h && !ne;
          return (0, e.jsx)(At.K, {
            placeholderHeight: "100vh",
            className: Se().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: Se().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: Se().ImageWrapper,
                  style: {
                    backgroundImage: ne ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: S,
                  onDragEnd: C,
                  onDoubleClick: p,
                  onClick: R,
                  children: (0, e.jsx)(Dn, {
                    clanImage: t,
                    className: Se().VideoBackground,
                  }),
                }),
                ae &&
                  (0, e.jsx)("span", {
                    className: Se().Full,
                    onClick: p,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                h &&
                  (0, e.jsx)(ze.t, {
                    size: "medium",
                    className: Se().FloatingThrobber,
                  }),
                he &&
                  (0, e.jsx)("span", {
                    className: Se().Thumb,
                    onClick: I,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                se &&
                  d &&
                  (0, e.jsx)($n, {
                    bDeleting: h,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: d,
                  }),
                we &&
                  (0, e.jsx)("span", {
                    className: Se().Full,
                    onClick: f,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !h &&
                  (0, e.jsx)("span", {
                    className: Se().Delete,
                    onClick: B,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: Se().ImageWrapperFilename,
                  title: M,
                  children: H,
                }),
              ],
            }),
          });
        }
        function $n(o) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: n,
              bDeleting: s,
            } = o,
            { data: r } = (0, l.hM)(t.clanAccountID);
          return s || !r?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, y.A)(Se().Localized, z().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function Dn(o) {
          const { clanImage: t, className: n } = o;
          return pe.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: n,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == be.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function qn(o) {
          const { clanImage: t, onImageSelected: n, selected: s } = o;
          return jsxs("div", {
            className: classnames(
              styles.ClanImageGridItem,
              s && styles.Selected,
            ),
            onClick: () => n(t, !1),
            onDoubleClick: () => n(t, !0),
            title: t.file_name,
            children: [
              jsx("div", {
                className: styles.ImgCtn,
                children: ClanImageUtils.BIsClanImageVideo(t)
                  ? jsx(Dn, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function ea(o) {
          const { clanSteamID: t, closeModal: n, OnClanImageSelected: s } = o,
            r = m.useCallback(
              (h, u) => {
                s?.(h, u), n?.();
              },
              [s, n],
            ),
            [i, d] = m.useState("");
          return (0, e.jsxs)(ue.o0, {
            strTitle: (0, c.we)("#ImagePicker_Images"),
            strDescription: (0, c.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: n,
            onCancel: n,
            children: [
              (0, e.jsx)(Zn, { fnSetImageSearch: d }),
              (0, e.jsx)(Jn, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: i,
                imageInsertCallBack: r,
                showImageActions: !1,
              }),
            ],
          });
        }
        function ta(o) {
          const { clanSteamID: t, OnClanImageSelected: n } = o;
          return (0, e.jsxs)("div", {
            className: ot().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, c.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: ot().SelectImageButton,
                    children: (0, c.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (s) => {
                  (0, je.pg)(
                    (0, e.jsx)(ea, { clanSteamID: t, OnClanImageSelected: n }),
                    (0, Ke.uX)(s) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function na(o) {
          const {
              clanSteamID: t,
              rgSupportArtwork: n,
              localizedPrimaryImage: s,
              bAllowPreviousClanImageSelection: r,
              fnSetImageURL: i,
              rgRealmList: d,
            } = o,
            [h] = (0, F.q3)(() => [Ue.O.Get().GetCurEditLanguage()]),
            u = (0, Pt.zO)(t, n, s),
            p = o.uploaderOverride || u,
            [f, I] = m.useState(!1),
            S = m.useCallback(
              async (T, w) => {
                if (!f) {
                  I(!0);
                  try {
                    const { language: E } = (0, re.jj)(T.file_name ?? "", h),
                      R = (0, re.PD)(E, h, d);
                    await p.AddExistingClanImage(T, R);
                  } catch (E) {
                    let R = (0, Ce.H)(E);
                    console.error("AddExistingClanImage: " + R.strErrorMsg, R),
                      (0, je.pg)(
                        (0, e.jsx)(ue.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            R.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  I(!1);
                }
              },
              [f, p, h, d],
            ),
            C = m.useMemo(
              () =>
                r
                  ? [
                      [
                        (0, e.jsx)(
                          ta,
                          { clanSteamID: t, OnClanImageSelected: S },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [S, r, t],
            ),
            B = (T) => {
              for (const w of T) {
                const E = w.uploadResult;
                if (E?.origimagehash) {
                  const R = (0, re.PD)(E.language, h, d);
                  K.AddLocalizeImageUploaded(E.origimagehash, R);
                } else {
                  const R = Ee.pU.GetClanImageByImageHash(
                      t,
                      E?.image_hash ?? "",
                    ),
                    M = w.image.GetCurrentImageOption();
                  if (R && M) {
                    const H = (0, re.PD)(w.image.language, h, d);
                    i(M.artworkType, R, H);
                  }
                }
              }
            };
          return (0, e.jsx)(Fn, {
            ...o,
            imageUploader: p,
            rgRealmList: d,
            elAdditonalButtons: f
              ? [
                  (0, e.jsx)(
                    ze.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, c.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : C,
            fnUploadComplete: B,
          });
        }
        var vt = a(25279),
          jn = a(84676),
          aa = a(25359),
          ve = a.n(aa),
          oa = a(24806);
        function En(o) {
          const {
              clanImage: t,
              closeModal: n,
              lang: s,
              fnOnArtworkLangChange: r,
              realms: i,
              fnLangHasData: d,
            } = o,
            [h, u] = (0, m.useState)(s),
            p = Be.b.InitFromClanID(t.clanAccountID),
            f = (0, F.q3)(() =>
              pe.zU.GenerateURLFromHashAndExt(p, pe.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(ue.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, h),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, y.A)(z().FlexColumnContainer, ve().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: ve().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: ve().ArtworkPreview,
                    src: f,
                  }),
                }),
                (0, e.jsx)(oa.Ng, {
                  selectedLang: h,
                  fnLangHasData: d,
                  fnOnLanguageChanged: u,
                  realms: i,
                }),
              ],
            }),
          });
        }
        var Ot = a(56330);
        function un(o) {
          if (!o) return o;
          const t = o.lastIndexOf(".");
          return t === -1 ? o : o.substring(0, t);
        }
        var sa = a(58483),
          ra = a(82385),
          ia = a(94520),
          la = a(95174),
          ca = a(9709),
          mn = a(64868),
          da = a(44894);
        const ga =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var ua = a(11243);
        function ma(o) {
          const {
            clanSteamID: t,
            fnGetImageHash: n,
            fnLangHasData: s,
            fnOnRemoveImage: r,
          } = o;
          (0, Ee.mr)(t.GetAccountID());
          const i = m.useMemo(() => {
              let p = new Array();
              const f = c.A0.GetLanguageListForRealms([
                me.TU.k_ESteamRealmGlobal,
                me.TU.k_ESteamRealmChina,
              ]);
              for (const I of f) {
                const S = n(I);
                if (S) {
                  const C = (0, k.LgB)(I),
                    B = (0, c.we)("#Language_" + C);
                  p.push({ lang: I, strLang: C, locLang: B, imgHash: S });
                }
              }
              return (
                (p = p.sort((I, S) =>
                  I.locLang > S.locLang ? 1 : I.locLang < S.locLang ? -1 : 0,
                )),
                p
              );
            }, [n]),
            [d, h, u] = (0, mn.uD)();
          return (0, e.jsxs)("div", {
            className: ve().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: ve().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: ve().LanguageListContainer,
                children: i.map((p) =>
                  (0, e.jsx)(
                    ha,
                    { langData: p, ...o },
                    "lang_select_" + t.GetAccountID() + " " + p.strLang,
                  ),
                ),
              }),
              !!r &&
                (0, e.jsxs)(q.$n, {
                  onClick: h,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(ua.o, {
                      tooltip: (0, c.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(ue.EN, {
                active: d,
                children: (0, e.jsx)(ue.o0, {
                  strTitle: (0, c.we)("#Dialog_AreYouSure"),
                  strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: u,
                  onOK: () => {
                    for (let p = 0; p < k.bP9; p++) s && r && s(p) && r(p);
                  },
                }),
              }),
            ],
          });
        }
        function ha(o) {
          const {
              clanSteamID: t,
              langData: n,
              langOverride: s,
              fnOnLanguagePreviewChange: r,
              fnOnArtworkLangChange: i,
              fnOnRemoveImage: d,
            } = o,
            [h, u] = (0, F.q3)(() => {
              const p = Ee.pU.GetClanImageByImageHash(t, n.imgHash);
              let f = "";
              p &&
                (f = pe.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  pe.zU.GetHashAndExt(p),
                  Me.wI.full,
                  n.lang,
                ));
              let I = ve().LanguageSelectorSelected;
              return (
                s != n.lang &&
                  (I = n.imgHash
                    ? ve().LanguageSelector
                    : ve().LanguageSelectorNoData),
                [f, I]
              );
            });
          return (0, e.jsxs)("div", {
            id: n.strLang,
            className: ve().LanguageContainer,
            onClick: (p) => {
              let f = (0, k.sfN)(p.currentTarget.id);
              r(f);
            },
            children: [
              (0, e.jsx)("div", { className: u, children: n.locLang }),
              (0, e.jsxs)("span", {
                className: ve().LanguageOptions,
                children: [
                  !!h &&
                    (0, e.jsx)("a", {
                      href: h,
                      target: "_blank",
                      children: (0, e.jsx)(He.he, {
                        toolTipContent: (0, c.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: pt.YNO(),
                      }),
                    }),
                  !!i && (0, e.jsx)(pa, { ...o }),
                  !!d && (0, e.jsx)(va, { fnOnRemoveImage: d, langData: n }),
                ],
              }),
            ],
          });
        }
        function pa(o) {
          const {
              clanSteamID: t,
              langData: n,
              fnOnArtworkLangChange: s,
              fnGetImageHash: r,
              fnLangHasData: i,
              realms: d,
            } = o,
            [h, u, p] = (0, mn.uD)(),
            f = (0, F.q3)(() => {
              const I = r(n.lang);
              return (
                (0, Je.wT)(
                  !I || !I.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + I,
                ),
                Ee.pU.GetClanImageByImageHash(t, I)
              );
            });
          if (!f) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(He.he, {
                toolTipContent: (0, c.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: ga,
                  onClick: () => u(),
                }),
              }),
              (0, e.jsx)(J.tH, {
                children: (0, e.jsx)(ue.EN, {
                  active: h,
                  children: (0, e.jsx)(En, {
                    clanImage: f,
                    lang: n.lang,
                    fnOnArtworkLangChange: s,
                    fnLangHasData: i,
                    realms: d,
                    closeModal: p,
                  }),
                }),
              }),
            ],
          });
        }
        function va(o) {
          const { fnOnRemoveImage: t, langData: n } = o,
            [s, r, i] = (0, mn.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(He.he, {
                toolTipContent: (0, c.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: da.A,
                  onClick: r,
                }),
              }),
              (0, e.jsx)(J.tH, {
                children: (0, e.jsx)(ue.EN, {
                  active: s,
                  children: (0, e.jsx)(ue.o0, {
                    strTitle: (0, c.we)("#selectimage_remove_image"),
                    strDescription: (0, c.we)(
                      "#selectimage_remove_details",
                      (0, c.we)("#Language_" + (0, k.LgB)(n.lang)),
                    ),
                    onOK: () => {
                      t(n.lang);
                    },
                    closeModal: i,
                  }),
                }),
              }),
            ],
          });
        }
        var hn = a(13465),
          fa = a(21659),
          Ia = a(15496),
          De = a.n(Ia),
          xa = a(88812);
        function Ca(o) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: d,
            } = o,
            h = (0, fa.c5)(),
            u = m.useCallback(
              (E) => {
                E.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            p = d || (0, k.sfN)(D.TS.LANGUAGE),
            [f, I, S] = (0, F.q3)(() => [
              t.GetSummaryWithFallback(p),
              t.GetNameWithFallback(p),
              t.BShowLibrarySpotlightText(),
            ]);
          let C = "spotlight",
            B = Me.wI.spotlight_main;
          (t.appid == 2434320 || D.TS.EUNIVERSE == k.Rv) &&
            ((C = h
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (B = Me.wI.full));
          let T =
            (0, xa.WC)(n !== void 0 ? void 0 : t, C, p, B) ??
            (n !== void 0 ? [n] : []);
          i && T && (T = i(T));
          const w = f.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(m.Fragment, {
            children: (0, e.jsx)("div", {
              className: De().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(O.Z, {
                className: (0, y.A)(
                  De().AppDetailsSpotlightContainer,
                  De().MajorEventContainer,
                ),
                onActivate: u,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: De().MajorEventBackground,
                    children: (0, e.jsx)(hn.c, {
                      className: De().MajorEventImageBackgroundBlur,
                      rgSources: T,
                      onIncrementalError: (E, R, M) => r && r(R),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: De().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(hn.c, {
                        className: De().MajorEventImage,
                        rgSources: T,
                        onIncrementalError: (E, R, M) => r && r(R),
                      }),
                      (0, e.jsx)("div", {
                        className: De().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: De().MajoreEventImageContentContainer,
                        children:
                          S &&
                          (0, e.jsxs)("div", {
                            className: De().MajorEventContent,
                            children: [
                              (0, e.jsx)(hn.c, {
                                className: De().MajorEventSpotlightBackground,
                                rgSources: T,
                                onIncrementalError: (E, R, M) => r && r(R),
                              }),
                              (0, e.jsxs)("div", {
                                className: De().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: De().MajorEventTitle,
                                    children: I,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: De().MajorEventSummary,
                                    children: w,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: De().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var _a = a(79949),
          Ie = a.n(_a);
        function Sa(o) {
          const {
              langOverride: t,
              artworkType: n,
              fnOnLanguagePreviewChange: s,
              clanSteamID: r,
              eventModel: i,
              partnerEventStore: d,
              fnOnRemoveImage: h,
              fnOnArtworkLangChange: u,
              realms: p,
              fnLangHasData: f,
              fnGetImageHashAndExt: I,
            } = o,
            S = I(n, t),
            C = S
              ? pe.zU.GenerateURLFromHashAndExtAndLang(r, S, Me.wI.full, t)
              : "",
            [B] = (0, F.q3)(() => [wa(n, I)]);
          return B == 0
            ? (0, e.jsxs)("div", {
                className: ve().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(bn, {
                      imgURL:
                        D.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(yn, {
                      imgURL:
                        D.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(n) &&
                    (0, e.jsx)(Da, {
                      langOverride: t,
                      artworkType: n,
                      eventModel: i,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, c.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: ve().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(bn, {
                      imgURL: C,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(yn, {
                      imgURL: C,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Nt, { imgURL: C, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Nt, { imgURL: C, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Nt, { imgURL: C, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(Ea, {
                      imgURL: C,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(ba, { imgURL: C }),
                  n === "sale_overlay" && (0, e.jsx)(ya, { imgURL: C }),
                  Me.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: ca.PreviewImg,
                      src: K.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(ft, { imgURL: C }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(ft, { imgURL: C }),
                  n === "sale_logo" && (0, e.jsx)(ft, { imgURL: C }),
                  n === "bestofyear_banner" && (0, e.jsx)(ft, { imgURL: C }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(ft, { imgURL: C }),
                  (0, e.jsx)(ma, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: h,
                    fnOnArtworkLangChange: u,
                    realms: p,
                    fnLangHasData: f,
                    fnGetImageHash: (T) => un(I(n, T) ?? ""),
                  }),
                ],
              });
        }
        function po(o) {
          const { artworkType: t } = o,
            n = ArtworkTypeMap[t];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + t),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [n.width, " X ", n.height],
              }),
            ],
          });
        }
        function Da(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = vt.Fj[t],
            i = m.useMemo(
              () =>
                ja(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Nt, { lang: n, imgURL: i, event: s });
        }
        function ja(o, t) {
          const r = document.createElement("canvas");
          (r.width = 780), (r.height = 200);
          const i = r.getContext("2d"),
            d = 20;
          for (let p = 0; p < 200; p += d)
            for (let f = 0; f < 780; f += d)
              (i.fillStyle =
                (f / d + p / d) % 2 === 0 ? "#a405e3ff" : "#000000"),
                i.fillRect(f, p, d, d);
          const h = i.createLinearGradient(0, 0, 780, 0);
          h.addColorStop(0, "rgba(32,32,32,0.8)"),
            h.addColorStop(1, "rgba(60,60,60,0.8)"),
            (i.fillStyle = h),
            i.fillRect(0, 0, 780, 200);
          const u = i.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            u.addColorStop(0, "rgba(0,0,0,0)"),
            u.addColorStop(1, "rgba(0,0,0,0.6)"),
            (i.fillStyle = u),
            i.fillRect(0, 0, 780, 200),
            (i.fillStyle = "#fff"),
            (i.font = "32px Arial"),
            (i.textAlign = "center"),
            (i.textBaseline = "middle"),
            i.fillText(o, 780 / 2, 200 / 2 - 20),
            t &&
              ((i.font = "18px Arial"), i.fillText(t, 780 / 2, 200 / 2 + 25)),
            r.toDataURL("image/png")
          );
        }
        function bn(o) {
          const { imgURL: t, eventModel: n, langOverride: s } = o,
            r = (0, Ue.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(la.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function yn(o) {
          const { lang: t, eventModel: n, partnerEventStore: s } = o,
            r = (0, sa.LJ)(),
            [i, d, h, u, p] = (0, F.q3)(() => [
              n.GetNameWithFallback(t),
              n.GetDescriptionWithFallback(t),
              n.GetSubTitleWithLanguageFallback(t),
              n.type,
              n.AnnouncementGID,
            ]);
          let f = d
            ? (0, e.jsx)(ia.fh, {
                text: d || "",
                showErrorInfo: !1,
                event: n,
                languageOverride: Ue.O.Get().GetCurEditLanguage(),
              })
            : (0, c.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Ie().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Ie().ExampleSectionTitle,
                children: (0, c.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, y.A)(
                  Ie().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: Ie().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: Ie().MainImageCtn,
                      children: (0, e.jsx)("img", { src: o.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: Ie().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: Ie().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ie().TextTitle,
                            children:
                              i ||
                              (0, c.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Ie().TextSubTitle,
                            children:
                              h ||
                              (0, c.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: Ie().TextBody,
                            children: f,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              u != k.Fwr &&
                (0, e.jsxs)(m.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Ie().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Ie().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, y.A)(
                        Ie().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Ie().DetailExample2,
                        children: (0, e.jsx)(
                          ra.He,
                          {
                            event: n,
                            emoticonStore: r,
                            partnerEventStore: s,
                            headerClassnames: "editor",
                            langOverride: t,
                            bDisableBroadcastPlayer: !0,
                          },
                          p,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const Nt = (o) => {
            const [t] = (0, jn.t7)(o.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Ie().SpotlightExample,
              children: (0, e.jsx)(Ca, {
                event: o.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: o.imgURL,
                langOverride: o.lang,
              }),
            });
          },
          Ea = (o) => {
            const t = [
              (0, e.jsx)("img", { src: o.imgURL }, "img"),
              (0, e.jsx)("div", { className: ve().BroadcastPreview }, "video"),
            ];
            return (
              o.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Ie().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          ba = (o) =>
            (0, e.jsx)("div", {
              className: Ie().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          ya = (o) =>
            (0, e.jsx)("div", {
              className: Ie().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          ft = (o) =>
            (0, e.jsx)("div", {
              className: Ie().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            });
        function wa(o, t) {
          let n = 0;
          for (let s = k.Bhc; s < k.bP9; ++s)
            (t(o, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var Aa = Object.defineProperty,
          La = Object.getOwnPropertyDescriptor,
          wn = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? La(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && Aa(t, n, r), r;
          };
        const Ga =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Ba = ((o) => (
          (o[(o.k_None = 0)] = "k_None"),
          (o[(o.k_Suggested = 1)] = "k_Suggested"),
          (o[(o.k_Required = 2)] = "k_Required"),
          (o[(o.k_Requested = 3)] = "k_Requested"),
          o
        ))(Ba || {});
        function Pa(o) {
          const {
              artworkType: t,
              headerHint: n,
              appid: s,
              fnToggleMinimize: r,
              realms: i,
              eventModel: d,
              fnLangHasData: h,
              fnGetImageHashAndExt: u,
              fnSetImageURL: p,
              partnerEventStore: f,
            } = o,
            [I] = (0, jn.t7)(s, { include_assets: !0 }),
            [S, C] = (0, F.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            B = S == k.ajI;
          let T = null;
          n === 2
            ? (T = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (T = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (T = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let w = null;
          t === "capsule"
            ? B
              ? (w = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (w = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!C &&
                      (0, e.jsxs)("div", {
                        className: ve().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${D.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, c.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (w = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, c.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, c.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (w = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (w = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, c.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, c.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (w = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (w = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: z().EventElementRequired,
                              children: (0, c.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, c.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, c.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : t === "hero"
                        ? I &&
                          (w = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !I.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Ot.ErrorStylesBackground,
                                  children: (0, c.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : t === "localized_image_group" ||
                            t === "link_capsule" ||
                            t === "sale_section_title" ||
                            t === "schedule_track_art" ||
                            t === "localized_background_art"
                          ? (w = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Ga,
                                      target: D.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, c.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (w = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: z().EventElementOptional,
                                    children: (0, c.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, c.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, c.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (w = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: z().EventElementOptional,
                                      children: (0, c.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, c.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, c.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, c.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (w = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (w = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: z().EventElementOptional,
                                          children: (0, c.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (w = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: z().EventElementRequired,
                                          children: (0, c.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const E = vt.Fj[o.artworkType].width,
            R = vt.Fj[o.artworkType].height;
          return (0, e.jsxs)("div", {
            id: o.id,
            className: ve().ArtworkSelectorContainer,
            children: [
              !!o.title &&
                (0, e.jsxs)("div", {
                  className: ve().Title,
                  onDoubleClick: r,
                  children: [
                    o.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    T,
                    r &&
                      (0, e.jsx)(q.$n, {
                        onClick: r,
                        children: (0, e.jsx)(He.he, {
                          toolTipContent: (0, c.we)(
                            o.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: o.bIsMinimized
                            ? (0, e.jsx)(pt.hz4, {})
                            : (0, e.jsx)(pt.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !o.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, y.A)(ve().SelectImageBlock, ve().Tips),
                  children: [
                    w,
                    !!(E && R) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, c.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, c.PP)(
                            "#selectimage_tip1",
                            (0, vt.qj)(E),
                            (0, vt.qj)(R),
                          ),
                        ],
                      }),
                    !!o.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Ot.WarningStylesWithIcon,
                          children: o.strWarning,
                        }),
                      }),
                    o.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    o.elAdditionalControls,
                    !!o.fnRemoveAllArtwork &&
                      (0, e.jsx)(q.$n, {
                        onClick: (M) => {
                          (0, je.pg)(
                            (0, e.jsx)(Ta, {
                              fnRemoveAllArtwork: o.fnRemoveAllArtwork,
                            }),
                            (0, Ke.uX)(M) ?? window,
                          );
                        },
                        children: (0, c.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !o.bIsMinimized &&
                (0, e.jsx)(Ma, {
                  clanSteamID: o.clanSteamID,
                  title: o.title ?? "",
                  eventModel: d,
                  artworkType: o.artworkType,
                  realms: i,
                  appid: s,
                  fnGetImageHashAndExt: u,
                  fnSetImageURL: p,
                  fnLangHasData: h,
                  partnerEventStore: f,
                }),
            ],
          });
        }
        function Ta(o) {
          const { fnRemoveAllArtwork: t, closeModal: n } = o;
          return (0, e.jsx)(ue.o0, {
            strTitle: (0, c.we)("#Sale_RemoveAll"),
            strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), n?.();
            },
            onCancel: n,
          });
        }
        function Ma(o) {
          const {
              artworkType: t,
              realms: n,
              clanSteamID: s,
              fnLangHasData: r,
              fnGetImageHashAndExt: i,
              fnSetImageURL: d,
              eventModel: h,
              appid: u,
              partnerEventStore: p,
            } = o,
            f = t === "localized_image_group",
            [I, S] = m.useState((0, Ue.E)()),
            [C, B] = m.useState(new Array()),
            T = m.useCallback(
              (E, R, M) => {
                let H = [];
                C.find((ae) => ae.clanImage.imageid == E.imageid)
                  ? (H = C.map((ae) =>
                      ae.clanImage.imageid == E.imageid
                        ? { clanImage: E, lang: R }
                        : ae,
                    ))
                  : M && (H = C.concat({ clanImage: E, lang: R })),
                  B(H);
              },
              [C],
            ),
            w = m.useCallback(
              (E, R, M) => {
                (0, at.h5)(() => {
                  un(i(t, R) ?? "") == E.image_hash && d(t, null, R),
                    d(t, E, M),
                    T(E, M, !1);
                });
              },
              [i, t, d, T],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(q.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${D.TS.PARTNER_BASE_URL}admin/game/editbyappid/${u}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(kt, {
                    list: C,
                    fnOnArtworkLanguageChange: w,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, y.A)(
                        ve().SelectImageBlock,
                        ve().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Sa, {
                        eventModel: h,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (E) => {
                          E != I && S(E);
                        },
                        langOverride: I,
                        fnOnArtworkLangChange: f ? null : w,
                        artworkType: t,
                        fnOnRemoveImage: f ? null : (E) => d(t, null, E),
                        realms: n,
                        fnLangHasData: r,
                        fnGetImageHashAndExt: i,
                        partnerEventStore: p,
                      }),
                    }),
                  }),
                ],
              });
        }
        let kt = class extends m.Component {
          ShowLangChangeDialog(o, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, je.pg)(
              (0, e.jsx)(En, {
                clanImage: o,
                lang: t,
                fnOnArtworkLangChange: n,
                fnLangHasData: r,
                realms: s,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let o = new Array();
            const { list: t } = this.props;
            return (
              t.forEach((n) => {
                const { clanImage: s, lang: r } = n;
                let i = (0, c.we)("#Language_" + (0, k.LgB)(r));
                o.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: z().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping",
                            s.file_name ?? "",
                            i,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(s, r),
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + n.clanImage.imageid + "_" + r,
                  ),
                );
              }),
              o
            );
          }
          render() {
            const { list: o } = this.props;
            if (!o || o.length == 0) return (0, e.jsx)("div", {});
            let t = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: ve().UploadSuccess,
              children: t,
            });
          }
        };
        wn([Re.oI], kt.prototype, "ShowLangChangeDialog", 1),
          (kt = wn([ye.PA], kt));
        var Oa = a(6658);
        function Na(o) {
          const {
              clanSteamID: t,
              appid: n,
              eventModel: s,
              realms: r,
              loc_images: i,
              artworkType: d,
              fnLangHasData: h,
              closeModal: u,
              fnSetImageURL: p,
              partnerEventStore: f,
            } = o,
            [I, S] = (0, m.useState)(!1),
            C = (0, Pt.zO)(t, d),
            B = t.GetAccountID(),
            [T] = (0, F.q3)(() => [
              C.GetFilesToUpload().length - C.GetCompletedFiles(),
            ]);
          (0, m.useEffect)(() => {
            S(!1),
              K.ClearImageGroup(),
              i?.forEach((M, H) => {
                const ne = Be.b.InitFromClanID(B);
                if (K.GetAllLocalizedGroupImages().length == 0) {
                  const ae = M && pe.zU.GetHashFromHashAndExt(M),
                    he = ae && Ee.pU.GetClanImageByImageHash(ne, ae);
                  he && K.SetPrimaryImageForImageGroup(he, d);
                }
                K.SetLocalizedImageGroupAtLang(H, ne, M ?? null);
              }),
              S(!0);
          }, [i, B, d]);
          const w = (0, m.useCallback)(
              (M, H, ne = k.Bhc) => {
                const ae = Be.b.InitFromClanID(B),
                  he = pe.zU.GetHashAndExt(H ?? null);
                if (K.GetAllLocalizedGroupImages().length == 0) {
                  const we = he && pe.zU.GetHashFromHashAndExt(he),
                    se = we && Ee.pU.GetClanImageByImageHash(ae, we);
                  se && K.SetPrimaryImageForImageGroup(se, M);
                }
                K.SetLocalizedImageGroupAtLang(ne, ae, he);
              },
              [B],
            ),
            E = (0, m.useCallback)((M, H) => {
              const ae = K.GetLocalizedImageGroupForEdit()?.localized_images[H];
              return ae && ae.split("/").pop();
            }, []),
            R = () => {
              const M = K.GetLocalizedImageGroupForEdit();
              for (let H = k.Bhc; H < k.bP9; ++H) {
                const ne = M?.localized_images[H];
                if (ne) {
                  const ae = ne.split("/").pop() || "";
                  p(
                    d,
                    {
                      image_hash: un(ae),
                      clanAccountID: B,
                      file_type: (0, Oa.yh)(ae) ?? be.bg.w3,
                      imageid: 0,
                    },
                    H,
                  );
                } else p(d, null, H);
              }
              K.ClearImageGroup(), o.onOK ? o.onOK() : u?.();
            };
          return (0, e.jsxs)(ue.o0, {
            onCancel: u,
            closeModal: u,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, y.A)(Ot.NotTooWideModal, Ot.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: T > 0,
            onOK: R,
            strOKButtonText:
              T > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              I
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(na, {
                        clanSteamID: t,
                        rgSupportArtwork: [d],
                        fnSetImageURL: w,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: C,
                      }),
                      (0, e.jsx)(Pa, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: d,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => K.ClearImageGroup(),
                        fnSetImageURL: w,
                        fnGetImageHashAndExt: E,
                        fnLangHasData: h,
                        partnerEventStore: f,
                      }),
                    ],
                  })
                : (0, e.jsx)(ze.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
                  }),
              o.children,
            ],
          });
        }
        function ka(o) {
          const { setting: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(q.JU, {
                children: s || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(q.m, {
                strDropDownClassName: N.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "no-repeat",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var Ua = a(94381);
        function Ra(o) {
          const {
              closeModal: t,
              imgGroup: n,
              fnUpdateImageGroup: s,
              eventModel: r,
            } = o,
            { openColorPicker: i } = rn(),
            [d, h] = (0, m.useState)(() => n),
            [u, p, f, I, S, C, B, T] = (0, F.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [w] = (0, m.useState)(() => Fa(d.localized_background_art ?? {}));
          return (0, e.jsxs)(Na, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: qt.O3,
            artworkType: "localized_background_art",
            realms: B,
            loc_images: w,
            fnLangHasData: (E) => !!w[E],
            fnGetImageHash: (E, R) => w[R],
            fnSetImageURL: async (E, R, M) => {
              h((H) => {
                const ne = { ...H.localized_background_art },
                  ae = pe.zU.GetHashAndExt(R);
                return (
                  ae ? (ne[(0, k.LgB)(M)] = ae) : delete ne[(0, k.LgB)(M)],
                  { ...H, localized_background_art: ne }
                );
              });
            },
            onOK: () => {
              h((E) => (s(E), t && setTimeout(t, 1), { ...E }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Ge().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ge().ImageOptions,
                    children: [
                      (0, e.jsx)(ka, {
                        setting: u,
                        fnUpdateSetting: (E) => {
                          h(
                            E !== "no-repeat"
                              ? {
                                  ...d,
                                  repeat_setting: E,
                                  scaling_setting: "auto",
                                }
                              : { ...d, repeat_setting: E },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(za, {
                        scaling_setting: p ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (E) => h({ ...d, scaling_setting: E }),
                      }),
                      p != "cover" &&
                        (0, e.jsx)(Wa, {
                          position_settings: C,
                          fnUpdateSetting: (E) =>
                            h({ ...d, position_setting: E }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Ge().ColorOptions,
                    children: [
                      (0, e.jsx)(q.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Bt().ColorCtn,
                        children: [
                          (0, e.jsx)(q.$n, {
                            style: { backgroundColor: f },
                            onClick: (E) =>
                              i(E, {
                                color: f ?? "",
                                onChange: (R) =>
                                  h({ ...d, background_color1: R }),
                              }),
                            children: (0, c.we)(
                              f === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(q.$n, {
                            onClick: () =>
                              h({ ...d, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Ge().SwapColorsCtn,
                        children: (0, e.jsx)(q.$n, {
                          onClick: () =>
                            h({
                              ...d,
                              background_color1: I,
                              background_color2: f,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      S !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Bt().ColorCtn,
                          children: [
                            (0, e.jsx)(q.$n, {
                              style: { backgroundColor: I },
                              onClick: (E) =>
                                i(E, {
                                  color: I ?? "",
                                  onChange: (R) =>
                                    h({ ...d, background_color2: R }),
                                }),
                              children: (0, c.we)(
                                I === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(q.$n, {
                              onClick: () =>
                                h({ ...d, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(Ha, {
                        gradient: S ?? "top-to-bottom",
                        fnUpdateSetting: (E) =>
                          h({ ...d, gradient_setting: E }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(Xt, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(Ua.S, {
                  checked: !!T,
                  onChange: (E) => {
                    d.randomize_section_order = E;
                  },
                  children: (0, c.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function Fa(o) {
          const t = tt.$Y([], k.bP9, null);
          for (const n in o) {
            const s = (0, k.sfN)(n);
            s != k.xPp && (t[s] = o[n]);
          }
          return t;
        }
        function za(o) {
          const {
              scaling_setting: t,
              fnUpdateSetting: n,
              label: s,
              disable: r,
            } = o,
            i = m.useMemo(() => {
              const d = [];
              return (
                d.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                d.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                d.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                d
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(q.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(q.m, {
                strDropDownClassName: N.DropDownScroll,
                disabled: r,
                rgOptions: i,
                selectedOption: t || "cover",
                onChange: (d) => n(d.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Ha(o) {
          const { gradient: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(q.JU, {
                children: s || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(q.m, {
                strDropDownClassName: N.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "top-to-bottom",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Wa(o) {
          const { position_settings: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(q.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(q.m, {
                strDropDownClassName: N.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "unset",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Ka(o) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: n,
              fnSetBackgroundImgGroupEditMode: s,
              bShowAsValveOnly: r,
            } = o,
            [i, d] = (0, m.useState)(t.BIsBackgroundImageEnabled()),
            [h, u, p] = (0, Re.uD)(),
            f = (0, F.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, y.A)(Ge().Ctn, r && N.ValveOnlyBackground),
            children: (0, e.jsxs)(J.tH, {
              children: [
                (0, e.jsx)(q.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (I) => {
                    d(I), t.SetBackgroundImageEnabled(I);
                  },
                }),
                i
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(q.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: n,
                          onChange: s,
                        }),
                        (0, e.jsx)(q.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: f,
                          onChange: (I) =>
                            t.SetSalePageLastCoverSectionUntilEnd(I),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(q.$n, {
                          onClick: u,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(ue.EN, {
                          active: h,
                          children: (0, e.jsx)(ue.o0, {
                            strTitle: (0, c.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, c.we)(
                              "#BackgroundGroups_ClearAllSettings_Desc",
                            ),
                            bDestructiveWarning: !0,
                            onOK: () => {
                              t.ClearAllBackgroundImageGroupSettings(), d(!1);
                            },
                            closeModal: p,
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("p", {
                      children: (0, c.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${Et.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, c.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const pn = m.forwardRef(function (t, n) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: r,
              groupIndex: i,
              imgGroup: d,
              eventModel: h,
              nTabIndex: u,
            } = t,
            p = (0, Ue.E)(),
            [f, I, S, C] = (0, F.q3)(() => [
              d && s.mapGroupToSections.get(d.background_id),
              (d &&
                s.mapGroupToSections.get(d.background_id)?.sectionUniqueIDs) ??
                [],
              u != null
                ? r?.GetTabLastCoverSectionUntilEnd(u)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              u != null ? r?.GetTabGroupCount(u) : r?.GetSalePageGroupCount(),
            ]),
            B = S && i + 1 === C,
            [T, w, E] = (0, Re.uD)(),
            [R, M, H] = (0, Re.uD)();
          let ne;
          f?.nUniqueIDNextSaleSection &&
            (ne = (0, Xe.h_)(
              Q.HY,
              r.GetSaleSectionByID(f?.nUniqueIDNextSaleSection),
              p,
              h,
              f.nSaleSectionLastIndex + 1,
            ));
          let ae;
          if (f && I?.length > 1) {
            const he = I[I.length - 1];
            ae = (0, Xe.h_)(
              Q.HY,
              r?.GetSaleSectionByID(he),
              p,
              h,
              f.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)($t.qx, {
            bStartMinimized: !1,
            title: (0, c.we)(
              u != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              i + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: n,
              children: [
                (0, e.jsx)(q.$n, {
                  onClick: w,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(ue.EN, {
                  active: T,
                  children: (0, e.jsx)(Ra, {
                    imgGroup: d,
                    closeModal: E,
                    eventModel: h,
                    fnUpdateImageGroup: (he) =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, he)
                        : r.SetSalePageBackgroundGroup(i, he),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: Ge().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    I.map((he) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, Xe.h_)(
                            Q.W3,
                            r.GetSaleSectionByID(he),
                            p,
                            h,
                            r.GetSaleSectionIndexByID(he, !0),
                          ),
                        },
                        "li_" + he,
                      ),
                    ),
                    !!B &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!ae &&
                  (0, e.jsx)(q.$n, {
                    onClick: () =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, {
                            ...d,
                            num_sections: d.num_sections - 1,
                          })
                        : r.SetSalePageBackgroundGroup(i, {
                            ...d,
                            num_sections: d.num_sections - 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Reduce", ae),
                  }),
                !!ne &&
                  (0, e.jsx)(q.$n, {
                    onClick: () =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, {
                            ...d,
                            num_sections: d.num_sections + 1,
                          })
                        : r.SetSalePageBackgroundGroup(i, {
                            ...d,
                            num_sections: d.num_sections + 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Extend", ne),
                  }),
                i > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(q.$n, {
                        onClick: M,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(ue.EN, {
                        active: R,
                        children: (0, e.jsx)(ue.o0, {
                          strTitle: (0, c.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, c.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            u != null
                              ? r.RemoveTabBackgroundGroup(u, i)
                              : r.RemoveSalePageBackgroundGroup(i),
                          closeModal: H,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function Va(o) {
          const { backgroundImageEditModel: t, nTabID: n } = o;
          return (0, e.jsx)("div", {
            className: Ge().CtnEditor,
            children: (0, e.jsx)(q.$n, {
              onClick: (s) =>
                n !== void 0 && n >= 0
                  ? t?.AddTabBackgroundGroup(n)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, c.we)(
                n !== void 0 && n >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function Ya(o) {
          const {
              nTabID: t,
              nSectionUniqueID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = o,
            i = s.mapFirstSectionToGroup.get(n);
          return n == s.nFirstSaleSectionIDWithoutGroup ||
            n == s.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(Va, { backgroundImageEditModel: r, nTabID: t })
            : i
              ? (0, e.jsx)(Qa, { ...o, groupID: i })
              : null;
        }
        function Qa(o) {
          const {
              groupID: t,
              nTabID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = o,
            i =
              n && n >= 0
                ? s.selectedTabBackgroundDef.groups
                : r.GetSalePageGroupDefinition().groups,
            d = i.findIndex((T) => T.background_id === t),
            h = i[d],
            [u, p] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!u) return;
            const T = (0, je.pg)(
              (0, e.jsx)(ue.o0, {
                bAlertDialog: !0,
                closeModal: () => p(!1),
                children: (0, e.jsx)(pn, {
                  backgroundImageEditModel: r,
                  groupIndex: d,
                  imgGroup: h,
                  imgGroupDerivedMapping: s,
                  eventModel: r.GetEventModel(),
                  nTabIndex: n,
                }),
              }),
              window,
            );
            return () => {
              T.then((w) => w.Close());
            };
          }, [u, r, h, d, n, s]);
          const f = (0, F.q3)(() => dt.get(t)),
            [I, S] = (0, m.useState)(null),
            C = m.useCallback((T, w) => {
              S(w);
            }, []),
            B = (0, Re.w6)(C);
          return (0, e.jsxs)("div", {
            className: Ge().CtnEditor,
            ref: B,
            children: [
              !!(f && I && I > f) &&
                (0, e.jsx)(q.$n, {
                  onClick: (T) => p(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(pn, {
                backgroundImageEditModel: r,
                groupIndex: d,
                imgGroup: h,
                imgGroupDerivedMapping: s,
                eventModel: r.GetEventModel(),
                nTabIndex: n,
              }),
            ],
          });
        }
        var Za = a(81557),
          An = a.n(Za);
        function Ja(o) {
          const { imgGroupDerivedMapping: t } = o,
            [n, s] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!n) return;
            const f = (0, je.pg)(
              (0, e.jsx)(ue.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Ln, { ...o }),
              }),
              window,
            );
            return () => {
              f.then((I) => I.Close());
            };
          }, [n, o]);
          const r = (0, F.q3)(() => {
              const f = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (f) {
                const I = t.mapGroupToSections.get(f);
                if (I) return dt.get(I?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [i, d] = (0, m.useState)(null),
            h = m.useCallback((f, I) => {
              d(I);
            }, []),
            u = (0, Re.w6)(h),
            p = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, y.A)(Ge().CtnEditor, An().TabCtn),
            ref: u,
            children: [
              p &&
                (0, e.jsx)(q.$n, {
                  onClick: (f) => s(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Ln, { ...o }),
            ],
          });
        }
        function Ln(o) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: n,
              nTabID: s,
            } = o,
            [r, i] = (0, m.useState)(null),
            [d, h, u, p] = (0, F.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(J.tH, {
            children: [
              (0, e.jsx)(q.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: h,
                onChange: (f) => {
                  if (
                    ((0, Je.wT)(t, "edit model mising"),
                    (0, Je.wT)(s !== void 0, "tab setting missing"),
                    s !== void 0 && t)
                  ) {
                    const I = t.SetTabEnabled(s, f);
                    (0, Je.wT)(
                      !!I,
                      `Failed to create model TabID ${s}backgroundModel`,
                    ),
                      i(I);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${s}.`,
                    );
                },
              }),
              !!h &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(q.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: d,
                      onChange: (f) => t.SetTabLastCoverSectionUntilEnd(s, f),
                    }),
                    (0, e.jsx)(pn, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (u || r)?.groups[0],
                      imgGroupDerivedMapping: n,
                      eventModel: p,
                      nTabIndex: s,
                      classNameHeader: An().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var It = a(85692);
        function Xa(o) {
          const { nSectionID: t, children: n } = o,
            [s, r] = m.useState(!1),
            [i, d] = m.useState(!1);
          m.useEffect(() => {
            It.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const h = (0, F.q3)(() => It.TU.Get().GetMouseOverSectionID()),
            u = t && t == h,
            p = () => It.TU.Get().JumpToSection(t),
            f = m.useRef(null);
          return (
            (0, It.lM)((I) =>
              t != I ? !1 : (f.current?.scrollIntoView(), d(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: f,
              className: (0, y.A)({
                [U().SaleSectionLivePreview]: !0,
                [U().Hover]: !!u,
                [U().JumpedTo]: !!i,
              }),
              onAnimationEnd: () => d(!1),
              onMouseEnter: () => r(!0),
              onMouseLeave: () => r(!1),
              children: [
                s &&
                  (0, e.jsx)(He.Gq, {
                    toolTipContent: (0, c.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: U().JumpToButton,
                      onClick: p,
                      children: (0, e.jsx)(pt.ffu, {}),
                    }),
                  }),
                n,
              ],
            })
          );
        }
        var $a = a(79519),
          qa = a(20557);
        function eo(o) {
          const {
              promotionName: t,
              eventModel: n,
              bIsPreview: s,
              language: r,
              backgroundImageEditModel: i,
              addtionalAdminButtons: d,
              bDynamicallyCreatedSale: h,
            } = o,
            [u, p] = m.useState(n?.GetDayIndexFromEventStart()),
            [f, I] = m.useState(null),
            S = (0, F.q3)(() => n.jsondata.sale_header_disable_top_margin),
            C = to(n, u, (0, qa.TC)(!!s)),
            [B, T] = (0, m.useState)(!1);
          m.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !f &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, D.yK)() == "community"
            ) {
              const ne = document.getElementsByTagName("HEAD")[0],
                ae = document.createElement("style");
              (ae.innerText = (0, Zt.L$)(n.jsondata.sale_custom_css)),
                I(ae),
                ne.appendChild(ae);
            }
            const H = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Je.wT)(
                H.length <= 1,
                "Must have at most one react_landing_background",
              ),
              H.length >= 1 && (H[0].style.backgroundImage = ""),
              () => {
                f && (f.remove(), I(null));
              }
            );
          }, [n, f, s]);
          const w = n?.jsondata,
            E = m.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(D.UF.CLANACCOUNTID),
                nAppIDVOD: Number(w?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? w?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  w?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, w, r, t],
            ),
            R = (0, F.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            M = Lt(n?.clanSteamID);
          if (!n || u === void 0)
            return (0, e.jsx)("div", {
              className: Fe().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(ze.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const H =
                n.jsondata.localized_sale_logo &&
                n.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              ne = n.BUsesContentHubForItemSource(),
              ae = n
                .GetSaleSections()
                .some((ke) => ke.section_type === "contenthubtitle"),
              he = ne && ae;
            let we,
              se = !0;
            H
              ? (we = 0)
              : n.BUsesContentHubForItemSource()
                ? (we = 20)
                : n.GetEventType() == k.ajI
                  ? ((we = 0), (se = !1))
                  : (we = n.jsondata.sale_header_offset || 0);
            const le = se && n.jsondata.sale_header_offset === 530,
              Ae = !Dt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              $e = s
                ? !B && i?.BIsBackgroundImageEnabled()
                  ? Te.S.EPreviewMode_EditBackground
                  : Te.S.EPreviewMode_Enabled
                : Te.S.EPreviewMode_Disabled,
              Ne = R || n.GetEventType() != k.ajI,
              xt = ne ? ce.Yo.NoTransform : ce.Yo.NoTransformSparseContent,
              Ut = (0, y.A)(
                U().SaleOuterContainer,
                S && U().SaleOuterTopMargin,
                le && U().SaleNewSizing,
                U()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                H && U().SalePageLogoSet,
                he && U().ContentHub,
              );
            return (0, e.jsx)(J.tH, {
              children: (0, e.jsx)(ie.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(Q.Cs, {
                  location: s ? Q.HY : Q.bs,
                  children: (0, e.jsxs)(j, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    children: [
                      Ae && (0, e.jsx)(ie.Sn, {}),
                      (0, e.jsx)(Z, { eventModel: n }),
                      !!i &&
                        (Ne || M) &&
                        (0, e.jsx)(Ka, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: B,
                          fnSetBackgroundImgGroupEditMode: T,
                          bShowAsValveOnly: !Ne,
                        }),
                      (0, e.jsxs)(O.Z, {
                        style: he ? void 0 : { marginTop: `${we || 0}px` },
                        className: Ut,
                        scrollIntoViewType: xt,
                        children: [
                          (0, e.jsx)(fe, { eventModel: n, language: r }),
                          (0, e.jsx)(Ve, {
                            rgPresenters: n.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(jt, {
                            event: n,
                            broadcastEmbedContext: E,
                          }),
                          (0, e.jsx)(ao, {
                            ePreviewMode: $e,
                            event: n,
                            backgroundImageEditModel: i,
                            language: r,
                            promotionName: t,
                            nSaleDayIndex: u,
                            broadcastEmbedContext: E,
                            selectedTab: C,
                            tagSelection: C?.GetTagSelection(),
                          }),
                          !h &&
                            (0, e.jsx)(ct, {
                              event: n,
                              addtionalAdminButtons: d,
                              fnOnChangeDayIndex: (ke) => {
                                ke != u &&
                                  ((n.m_overrideCurrentDay = ke), p(ke));
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }
        }
        function to(o, t, n) {
          const [s] = (0, Qe.QD)(Ye.jD, void 0),
            [r] = (0, Qe.QD)(et.dk, void 0),
            [i] = (0, Qe.QD)(et.NV, void 0),
            d = m.useMemo(() => {
              const I = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((S) => !S.hide);
              if (I && I.length > 0) {
                let S = s > 0 ? I.find((B) => B.unique_id == s) : void 0;
                S || (S = I[0]);
                const C = S === I[0];
                return { selTab: S, bIsDefaultTab: C };
              }
            }, [o, s]),
            h = (0, et.U9)((0, et.XL)(r, i), d?.selTab.tab_tag_filter, n),
            u = h?.strParentKey,
            p = h?.strChildKey;
          return m.useMemo(() => {
            if (!d) return;
            let f;
            u && (f = { strParentKey: u, strChildKey: p });
            const I =
              o.jsondata.sale_opt_in_page_name ||
              o.jsondata.prune_list_optin_name;
            return new ut.y(d.selTab, t, d.bIsDefaultTab, f, I);
          }, [o, t, d, u, p]);
        }
        function Gn() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function no(o) {
          const {
              event: t,
              language: n,
              nSaleDayIndex: s,
              ePreviewMode: r,
              selectedTab: i,
              backgroundImageEditModel: d,
            } = o,
            [h, u] = m.useState((0, Ye.rp)()),
            p = m.useMemo(() => new mt(), []),
            f = m.useCallback(() => u((0, Ye.rp)()), []);
          m.useEffect(
            () => (
              window.addEventListener("resize", f),
              () => window.removeEventListener("resize", f)
            ),
            [f],
          ),
            m.useEffect(() => {
              let se = "";
              const le = () => {
                  const Ae = Gn();
                  if (Ae && Ae != se) {
                    const $e = document.getElementById(Ae);
                    $e && ((se = Ae), $e.scrollIntoView({ block: "start" }));
                  }
                },
                xe = setTimeout(() => le(), 150);
              return (
                window.addEventListener("hashchange", le),
                () => {
                  clearTimeout(xe),
                    window.removeEventListener("hashchange", le);
                }
              );
            }, []);
          const I = (0, St.W6)(),
            S = (se, le) => {
              (0, Qe.ip)(I, { ...(le || {}), [Ye.jD]: se.toString() });
            },
            [C, B] = (0, Qe.QD)("controller"),
            [T, w] = (0, F.q3)(() => {
              const se =
                  Ft.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                le = t.GetSaleSectionIncludingFooterSections(se);
              return [
                Kt(
                  t.jsondata.sale_background_img_groups,
                  le,
                  i && i.GetActiveTabUniqueID(),
                ),
                le,
              ];
            });
          let E = !1;
          const R = new ut.y(void 0, s),
            M = [{ elements: [], activeTab: R }];
          let H = null;
          const ne = (0, D.Qn)(),
            ae = (0, It.ty)(),
            he = m.useMemo(() => {
              const se = Gn();
              if (!se) return;
              const le = w.findIndex((xe) => xe.section_anchor === se);
              return le > -1 ? le : void 0;
            }, [w]);
          w.forEach((se, le) => {
            const xe = M[M.length - 1].activeTab;
            if (xe && !xe.ShouldShowSection(se)) return;
            const Ae = Dt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              $e = h && !Ae && !t.jsondata.content_hub_restricted_width;
            let Ne = (0, Te.I)(se, r, t, n, ne);
            if (Ne === void 0) return;
            if (!Ne)
              if ((0, wt.su)(se) && !D.iA.logged_in)
                E ||
                  ((Ne = (0, e.jsx)(wt.CC, {
                    section: se,
                    event: t,
                    language: n,
                  })),
                  (E = !0));
              else {
                const io = se.diable_tab_id_filtering
                  ? new ut.y(void 0, xe && xe.GetSaleDay())
                  : xe;
                se.section_type == "tabs" &&
                  se.tabs?.some(
                    (lo) => lo.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  M.push({ activeTab: i, elements: [] }),
                  (Ne = (0, e.jsx)($a.H, {
                    ...o,
                    section: se,
                    activeTab: io,
                    appVisibilityTracker: p,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: S,
                    expanded: $e,
                    controllerCategory: C,
                    setControllerCategory: B,
                  }));
              }
            ae &&
              (Ne = (0, e.jsx)(Xa, { nSectionID: se.unique_id, children: Ne }));
            const xt = M && M.length && M[M.length - 1];
            let Ut = (0, e.jsx)(
              ro,
              {
                section: se,
                nActiveTabID:
                  xt && xt.activeTab && xt.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: le,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: T,
                backgroundImageEditModel: d,
                bExpanded: $e,
                children: (0, e.jsx)(At._, {
                  enabled: !he || le > he,
                  children: Ne,
                }),
              },
              "SaleSectionIndex_" + se.unique_id + "_" + le,
            );
            const ke = T.mapSectionToGroup.get(se.unique_id);
            H &&
              H.groupID != ke &&
              (M[M.length - 1].elements.push(
                yt(t, H, r, i && i?.GetActiveTabUniqueID()),
              ),
              (H = null)),
              ke
                ? (H ||
                    (H = {
                      groupID: ke,
                      elSaleSections: [],
                      derivedGroupInfo: T.mapGroupToSections.get(ke),
                    }),
                  H.elSaleSections.push(Ut))
                : M[M.length - 1].elements.push(Ut);
          }),
            H &&
              (M[M.length - 1].elements.push(
                yt(t, H, r, i && i?.GetActiveTabUniqueID()),
              ),
              (H = null));
          const we = M.map((se, le) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, y.A)(
                  U().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: se.elements,
              },
              "TabSection_" + le,
            ),
          );
          return (0, e.jsx)(O.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: we,
          });
        }
        const ao = (0, St.y)(no);
        function oo(o) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: n,
            children: s,
          } = o;
          return t && n != null
            ? (0, e.jsx)(so, {
                visibility_by_door_index_state: t,
                door_index_visibility: n,
                children: s,
              })
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function so(o) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: n,
              children: s,
            } = o,
            r = (0, lt.OM)(n);
          return (t == "hide_when_open_door_index" && r) ||
            (t == "show_when_open_door_index" && !r)
            ? null
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function Bn({ children: o, onChange: t }) {
          const n = m.useRef(null);
          return (
            (0, m.useEffect)(() => {
              t(!!m.Children.toArray(o).filter(Boolean).length);
            }, [o, t]),
            o
          );
        }
        function ro(o) {
          const {
              section: t,
              saleSectionIndex: n,
              nActiveTabID: s,
              ePreviewMode: r,
              salePageBackgroundDerivedConfig: i,
              backgroundImageEditModel: d,
              bExpanded: h,
              children: u,
            } = o,
            p = t.section_anchor
              ? t.section_anchor
              : Ye.mj + (t.unique_id || n),
            f = t.section_type != "tabs",
            [I, S] = (0, m.useState)(!0);
          return I
            ? (0, e.jsx)(J.tH, {
                children: (0, e.jsx)(oo, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: f
                    ? (0, e.jsx)(O.Z, {
                        navKey: p,
                        id: p,
                        className: (0, y.A)({
                          [U().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: h,
                          [t.single_item_style || ""]: !0,
                          [U().SaleSectionBackgroundImageGroupEdit]:
                            r == Te.S.EPreviewMode_EditBackground,
                          [U().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          r === Te.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  u,
                                  (0, e.jsx)(Ya, {
                                    nSectionUniqueID: t.unique_id || n,
                                    nTabID: s,
                                    salePageBackgroundDerivedConfig: i,
                                    backgroundImageEditModel: d,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(Bn, { onChange: S, children: u }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          r === Te.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: p,
                                className: (0, y.A)({
                                  [U().SaleSectionCtn]: !0,
                                  [U().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [U().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  u,
                                  (0, e.jsx)(Ja, {
                                    backgroundImageEditModel: d,
                                    nTabID: s,
                                    imgGroupDerivedMapping: i,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(Bn, { onChange: S, children: u }),
                      }),
                }),
              })
            : null;
        }
      },
      12932: (P, ge, a) => {
        "use strict";
        a.d(ge, { qx: () => N });
        var e = a(7850),
          k = a(16412),
          O = a(18210),
          ce = a(36118),
          ie = a(90626),
          Q = a(36707),
          ee = a(95695),
          te = a.n(ee),
          F = a(25792),
          m = a(64734),
          oe = a.n(m),
          J = a(65946),
          de = a(11243);
        function U(y) {
          const {
              title: D,
              tooltip: V,
              getMinimized: L,
              toggleMinimized: W,
              className: j,
              children: l,
              elAdditionalButtons: g,
            } = y,
            _ = (0, J.q3)(() => L());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, Q.A)(
                  j,
                  m.SectionTitleHeader,
                  m.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, Q.A)(
                      ee.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [D, !!V && (0, e.jsx)(de.o, { tooltip: V })],
                  }),
                  (0, e.jsxs)("div", {
                    className: m.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)(z, { bIsMinimized: _, fnToggleMinimize: W }),
                    ],
                  }),
                ],
              }),
              !_ && (0, e.jsx)(F.tH, { children: l }),
            ],
          });
        }
        function N(y) {
          const [D, V] = ie.useState(!!y.bStartMinimized);
          return (0, e.jsx)(U, {
            ...y,
            getMinimized: () => D,
            toggleMinimized: () => V(!D),
            children: y.children,
          });
        }
        function z(y) {
          const { bIsMinimized: D, fnToggleMinimize: V } = y,
            L = D ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(k.$n, {
            "data-tooltip-text": (0, O.we)(L),
            onClick: V,
            children: y.bIsMinimized
              ? (0, e.jsx)(ce.hz4, {})
              : (0, e.jsx)(ce.Xjb, {}),
          });
        }
      },
      46636: (P, ge, a) => {
        "use strict";
        a.r(ge), a.d(ge, { default: () => y });
        var e = a(7850),
          k = a(90626),
          O = a(24660),
          ce = a(19298),
          ie = a(7967),
          Q = a(20169),
          ee = a(90405),
          te = a(36707),
          F = a(3166),
          m = a(51239);
        class oe {
          m_rgSections;
          GetSections() {
            return this.m_rgSections;
          }
          static s_singleton;
          static Get() {
            return (
              oe.s_singleton || (oe.s_singleton = new oe()), oe.s_singleton
            );
          }
          constructor() {
            this.m_rgSections = (0, F.Tc)("categories", "application_config");
          }
        }
        function J() {
          const D = oe.Get(),
            [V, L] = (0, k.useState)(D.GetSections());
          return { sections: V };
        }
        function de() {
          const { sections: D } = J(),
            V = k.useRef(null);
          return (
            k.useEffect(() => {
              V.current && V.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(ce.Z, {
              className: m.CategorySectionsCtn,
              navRef: V,
              children: D.map((L, W) =>
                (0, e.jsx)(
                  U,
                  { section: L, autoFocus: W == 0 },
                  "section" + L.name,
                ),
              ),
            })
          );
        }
        function U(D) {
          const { section: V, autoFocus: L } = D,
            W = (0, F.Qn)(),
            j = (0, e.jsxs)("div", {
              className: m.CategorySection,
              children: [
                (0, e.jsx)("span", {
                  className: m.CategorySectionName,
                  children: V.name,
                }),
                (0, e.jsx)(ie.MS, {
                  className: m.CategoriesCtn,
                  scrollDirection: "x",
                  navEntryPreferPosition: Q.iU.MAINTAIN_X,
                  navKey: "cat_section" + V.name,
                  children: V.categories.map((l, g) =>
                    (0, e.jsx)(
                      N,
                      { category: l, autoFocus: L && g === 0 },
                      "category" + l.name,
                    ),
                  ),
                }),
              ],
            });
          return W
            ? j
            : (0, e.jsx)(ee.K, { placeholderHeight: "150px", children: j });
        }
        function N(D) {
          const { category: V, autoFocus: L } = D;
          return (0, e.jsx)(ce.Z, {
            focusableIfEmpty: !0,
            autoFocus: L,
            navKey: "cat_panel" + V.name,
            children: (0, e.jsxs)(O.Ii, {
              href: F.TS.STORE_BASE_URL + V.url,
              className: (0, te.A)({
                [m.Category]: !0,
                [m.TopLevelCategory]: V.is_toplevel_genre,
              }),
              children: [
                (0, e.jsx)(z, { ...D }),
                (0, e.jsx)("div", { className: m.CategoryGradient }),
                (0, e.jsx)("span", {
                  className: m.CategoryName,
                  children: (0, e.jsx)("span", { children: V.name }),
                }),
              ],
            }),
          });
        }
        function z(D) {
          let { category: V } = D;
          return (0, e.jsx)("div", {
            className: m.GridOuter,
            children: (0, e.jsx)("div", {
              className: m.Grid,
              children: (0, e.jsx)("img", {
                src: F.TS.STORE_BASE_URL + V.image_url,
              }),
            }),
          });
        }
        const y = de;
      },
      17809: (P, ge, a) => {
        "use strict";
        a.d(ge, { d: () => Me });
        var e = a(7850),
          k = a(19367),
          O = a(90626),
          ce = a(3685),
          ie = a(85528),
          Q = a(77495),
          ee = a(18210),
          te = a(3166),
          F = a(75779),
          m = a(80902),
          oe = a(30454);
        async function J() {
          const v = await (0, oe.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!v.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return v.counts;
        }
        const de = 300 * 1e3;
        function U() {
          return ["DeckCompatCounts"];
        }
        function N() {
          return {
            queryKey: U(),
            queryFn: () => J(),
            staleTime: de,
            retry: !1,
          };
        }
        function z() {
          const { data: v } = (0, m.I)(N());
          return v;
        }
        function y(v, x) {
          switch (x) {
            case F.sd:
              return v?.playable;
            case F.V8:
              return v?.unsupported;
            default:
              return v?.verified;
          }
        }
        var D = a(70187),
          V = a(36549),
          L = a(39153),
          W = a(6878),
          j = a(99412),
          l = a(72609),
          g = a(47610),
          _ = a(18860),
          b = a(41635),
          Z = a(25792),
          A = a(85599),
          $ = a(87805);
        const c = O.Fragment;
        function fe(v) {
          const {
              reservationPackageID: x,
              depositPackageID: G,
              bIsPreview: Y,
              psuLessPackageID: X,
              strOutOfStockOverride: K,
              strDeliveryOverride: re,
              bDeliveryOverrideOnlyIfOutOfStock: Ce,
              section: ye,
            } = v,
            { data: me } = (0, g.DR)(x),
            { data: be } = (0, g.DR)(X),
            Oe = (0, O.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + x,
                  reservation_package: x,
                  deposit_package: G,
                  localized_reservation_desc: (0, b.$Y)([], j.bP9, null),
                  localized_out_of_stock_override: (0, b.$Y)(
                    [K || null],
                    j.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, b.$Y)(
                    [re || null],
                    j.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!Ce,
                  psu_less_package: X,
                },
              ],
              [x, G, K, re, Ce, X],
            );
          if (!me || (X && !be))
            return (0, e.jsx)(A.t, {
              string: (0, ee.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const We = !l.iA.logged_in || !me.account_restricted_from_purchasing,
            Ke =
              me.reservation_state == _.G.k_EPurchaseReservationState_Reserved
                ? me
                : void 0;
          return (0, e.jsxs)(Z.tH, {
            children: [
              (0, e.jsx)(O.Suspense, {
                fallback: null,
                children: (0, e.jsx)(c, {
                  bIsPreview: !!Y,
                  rgReservationDef: Oe,
                }),
              }),
              !!me.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Oe[0].unique_id,
                  children: [
                    (0, e.jsx)($.b, {
                      reservationDef: Oe[0],
                      hardwareDetail: me,
                      bPSULessModel: !1,
                      reservedHardwareDetail: Ke,
                    }),
                    We &&
                      (0, e.jsx)($.p, {
                        section: ye,
                        reservationDef: Oe[0],
                        hardwareDetail: me,
                        reservedHardwareDetail: Ke,
                      }),
                    be &&
                      be?.allow_purchase_in_country &&
                      (0, e.jsx)($.b, {
                        reservationDef: Oe[0],
                        hardwareDetail: be,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        function qe(v) {
          if (v?.bDepositRequired) {
            if (
              v.rgDepositPackageInfo &&
              v.rgDepositPackageInfo?.length > 0 &&
              v.rgDepositPackageInfo.filter((x) => x.bVisible).length == 0 &&
              v?.rgReservationPackageInfo &&
              v?.rgReservationPackageInfo?.length > 0 &&
              v?.rgReservationPackageInfo.filter((x) => x.bVisible).length == 0
            )
              return !1;
          } else if (
            v?.rgReservationPackageInfo &&
            v?.rgReservationPackageInfo?.length > 0 &&
            v?.rgReservationPackageInfo.filter((x) => x.bVisible).length == 0
          )
            return !1;
          return !0;
        }
        var Rt = a(21035),
          _t = a(72865),
          rt = a(38081),
          it = a.n(rt),
          Ve = a(36707),
          Pe = a(69596),
          Ft = a(10026),
          St = a.n(Ft),
          Ye = a(19298),
          et = a(11996),
          Dt = a(19047),
          lt = a(36118),
          zt = a(47689),
          jt = a(89926),
          Ht = a(32545),
          ct = a.n(Ht);
        function Qe(v) {
          const { appID: x, classOverride: G, styleOverride: Y } = v,
            [X, K] = (0, O.useState)(!1),
            re = (0, zt.m)("GameHoverFollowButton"),
            { elDialogElement: Ce, fnShowLogonDialog: ye } = (0, jt.l)(),
            me = (0, et.Fh)(x),
            { mutateAsync: be } = (0, Dt.L)(x, !me, void 0),
            Oe = async (We) => {
              We.preventDefault(),
                We.stopPropagation(),
                te.iA.logged_in
                  ? (K(!0), await be(), re.token.reason || K(!1))
                  : ye();
            };
          return (0, e.jsxs)(Ye.Z, {
            className: (0, Ve.A)(ct().FollowButton, G),
            onClick: Oe,
            style: Y,
            children: [
              me ? (0, e.jsx)(lt.pPV, {}) : (0, e.jsx)(lt.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, Ve.A)(
                  ct().FollowButtonText,
                  X && ct().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, ee.we)(
                  me ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              Ce,
            ],
          });
        }
        function Ue(v) {
          const { appid: x, color: G, bgcolor: Y } = v,
            X = (0, _t.n9)();
          return (0, e.jsx)(Qe, {
            appID: x,
            classOverride: (0, Ve.A)(
              it().FollowGameButtonNotTop,
              St().BBCodeFollowButton,
            ),
            styleOverride: { color: G, backgroundColor: Y },
          });
        }
        function Re(v) {
          const x = Number(v.args.appid);
          if (!x) return null;
          const G = (0, Pe.O)(v.args.color, "black"),
            Y = (0, Pe.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Ue, { appid: x, color: G, bgcolor: Y });
        }
        var Et = a(18657),
          Ze = a.n(Et),
          dt = a(63026);
        function Wt(v) {
          const { clanAccountID: x, color: G, bgcolor: Y } = v,
            [X, K] = O.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, Ve.A)(Ze().BBCodeFollowButton, X && Ze().isHovered),
            onMouseEnter: () => K(!0),
            onMouseLeave: () => K(!1),
            children: (0, e.jsx)(dt.Q, {
              nCreatorAccountID: x,
              classOverride: it().FollowGameButtonNotTop,
              styleOverride: { color: G, backgroundColor: Y },
              followType: "group",
            }),
          });
        }
        function Kt(v) {
          const { event: x } = v.context,
            G = Number(v.args.groupid) || x?.clanSteamID.GetAccountID();
          if (!G) return null;
          const Y = (0, Pe.O)(v.args.color, "black"),
            X = (0, Pe.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Wt, { clanAccountID: G, color: Y, bgcolor: X });
        }
        var pe = a(83482),
          Vt = a(44267),
          bt = a(9202),
          tt = a.n(bt),
          Te = a(29522);
        function yt(v) {
          const { appid: x, color: G, bgcolor: Y } = v,
            X = (0, _t.n9)(),
            K = (0, Te.$5)(x),
            re = (0, pe.L3)(X);
          return (0, e.jsx)("div", {
            className: tt().WishlistHoverCtn,
            children: (0, e.jsx)(Vt.E, {
              snr: re,
              id: K,
              classOverride: (0, Ve.A)(
                it().WishlistButtonNotTop,
                tt().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: G, backgroundColor: Y },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Yt(v) {
          const x = Number(v.args.appid);
          if (!x) return null;
          const G = (0, Pe.O)(v.args.color, "black"),
            Y = (0, Pe.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(yt, { appid: x, color: G, bgcolor: Y });
        }
        let gt = null;
        function wt() {
          return (
            gt == null &&
              (gt = new Map([
                ["wishlist", { Constructor: Yt, autocloses: !1 }],
                ["followgroup", { Constructor: Kt, autocloses: !1 }],
              ])),
            gt
          );
        }
        var ut = a(37656),
          Le = a(29868),
          Fe = a(24642);
        function ze(v) {
          return v < 10 ? "0" + v : v;
        }
        function Qt(v) {
          const { giveawayid: x } = v,
            G = (0, ut.w)(x),
            {
              bLoadingGiveawayInfo: Y,
              winner_count: X,
              closed: K,
              seconds_until_drawing: re,
            } = G;
          return Y
            ? null
            : (0, e.jsxs)("div", {
                className: Le.countdownCtn,
                children: [
                  !!K &&
                    (0, e.jsx)("div", {
                      className: Le.Closed,
                      children:
                        X > 0
                          ? (0, ee.we)("#Giveaway_Closed", (0, Fe.D)(X))
                          : (0, ee.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !K &&
                    (0, e.jsxs)(O.Fragment, {
                      children: [
                        re <= 0
                          ? (0, e.jsxs)("div", {
                              className: Le.Throbber,
                              children: [
                                (0, e.jsx)(A.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, ee.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Le.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Le.CountDownTime,
                                  children:
                                    ze(Math.floor(re / 60)) + ":" + ze(re % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Le.CountDownText,
                                  children: [
                                    (0, ee.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, ee.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        X > 0 &&
                          (0, e.jsxs)("div", {
                            className: Le.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Le.WinnerCount,
                                children: (0, Fe.D)(X),
                              }),
                              (0, e.jsx)("div", {
                                className: Le.WinnerText,
                                children: (0, ee.we)(
                                  "#Giveaway_Congratulation",
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var mt = a(57646);
        function Je(v) {
          const x = Number(v.args.packageid);
          return x
            ? (0, e.jsx)(mt.eF, {
                packageID: x,
                display_style: (0, mt._w)(v.args.display),
              })
            : null;
        }
        function Zt(v) {
          const x = Number(v.args.packageid),
            G = Number(v.args.compareid);
          return !x || !G
            ? null
            : (0, e.jsx)(mt.hJ, { packageID: x, compareID: G });
        }
        var At = a(88245),
          Jt = a(35702),
          Lt = a(16412),
          Xt = a(92757),
          q = a(39256),
          ue = a(4720),
          je = a(75110),
          $t = a(57810),
          Xe = a(36631),
          qt = a(79519),
          Gt = a(81416);
        function en(v) {
          const { eventModel: x, nEventBadgeID: G } = v,
            Y = (0, Jt.fy)(G);
          if (Y?.level > 0) {
            let X = Y.level;
            if (x?.BHasSaleEnabled()) {
              const K = x.GetSaleSectionsByType("badge_progress");
              if (K?.length == 1) {
                const re = K[0].badge_progress;
                if (re?.event_badgeid == G && re?.granted_by_discovery_queue) {
                  const Ce = re.levels[re.levels.length - 1].level;
                  return (0, e.jsx)(tn, {
                    eventModel: x,
                    nBadgeLevel: X,
                    nMaxLevel: Ce,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Fe.D)(X),
            });
          }
          return null;
        }
        function tn(v) {
          const { eventModel: x, nBadgeLevel: G, nMaxLevel: Y } = v,
            X = O.useMemo(() => {
              const me = x
                .GetSaleSections()
                .filter((be) => be.section_type == "discoveryqueue");
              return me?.length > 0 ? me[0] : null;
            }, [x]),
            { storePageFilter: K, eStoreDiscoveryQueueType: re } = O.useMemo(
              () => (0, je.lx)(x, X),
              [x, X],
            ),
            Ce = (0, $t.Uf)(re, K),
            ye = Math.min(G + Ce, Y);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Fe.D)(ye),
          });
        }
        function He(v) {
          const { event: x } = v.context,
            G = Number.parseInt((0, D.j$)(v.args, "eventid"));
          return te.iA.logged_in && G
            ? (0, e.jsx)(en, { nEventBadgeID: G, eventModel: x })
            : null;
        }
        function nn(v) {
          const { nDoorIndex: x, children: G } = v,
            Y = (0, L.OM)(x),
            X = (0, L.gP)(),
            [K, re] = O.useState(!1),
            [Ce, ye] = O.useState(!1),
            { elDialogElement: me, fnShowLogonDialog: be } = (0, jt.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Lt.$n, {
                disabled: Y,
                onClick: (Oe) => {
                  K ||
                    (te.iA.logged_in
                      ? (re(!0),
                        X({ iDoorIndex: x })
                          .then((We) => {
                            We || ye(!0), re(!1);
                          })
                          .catch(() => {
                            ye(!0), re(!1);
                          }))
                      : be());
                },
                children: Ce
                  ? (0, e.jsx)("div", {
                      children: (0, ee.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!K && (0, e.jsx)(A.t, { size: "small" }),
                        !!Y && (0, e.jsx)(lt.Jlk, {}),
                        G,
                      ],
                    }),
              }),
              me,
            ],
          });
        }
        function nt(v) {
          const x = Number.parseInt((0, D.j$)(v.args)) || 0;
          return x >= 0 && x < 32
            ? (0, e.jsx)(nn, { nDoorIndex: x, children: v.children })
            : null;
        }
        const an = (0, Xt.y)(qt.H);
        function on(v) {
          const x = Number.parseInt((0, D.j$)(v.args)),
            { event: G, showErrorInfo: Y } = v.context;
          if (x) {
            const X = G?.jsondata?.sale_sections?.findIndex(
              (K) => K.unique_id == x,
            );
            if (X >= 0) {
              const K = G.GetDayIndexFromEventStart();
              return (0, e.jsx)(Xe.Cs, {
                location: Y ? Xe.HY : Xe.bs,
                children: (0, e.jsx)(an, {
                  event: G,
                  section: G.jsondata.sale_sections[X],
                  activeTab: new ue.y(null, K),
                  language: v.language,
                  nSaleDayIndex: K,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: Y
                    ? Gt.S.EPreviewMode_Enabled
                    : Gt.S.EPreviewMode_Disabled,
                }),
              });
            } else if (Y)
              return (0, e.jsxs)("div", {
                className: q.ErrorDiv,
                children: ["Error could not find sale section ", x],
              });
          }
          return null;
        }
        let ht = null;
        function sn() {
          return (
            ht == null &&
              (ht = new Map([
                ...Array.from(wt().entries()),
                [
                  "itemdef",
                  {
                    Constructor: rn,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: Re, autocloses: !1 }],
                ["deckcompatcount", { Constructor: ln, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: Ge, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: Tt, autocloses: !1 }],
                ["price", { Constructor: Je, autocloses: !1 }],
                ["pricesavings", { Constructor: Zt, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: cn, autocloses: !1 }],
                ["chooseaccount", { Constructor: Be, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: He, autocloses: !1 }],
                ["optindoorquest", { Constructor: nt, autocloses: !1 }],
                ["classname", { Constructor: Pt, autocloses: !1 }],
                ["localize", { Constructor: Ee, autocloses: !1 }],
                ["salesection", { Constructor: on, autocloses: !1 }],
                ["reservationbutton", { Constructor: dn, autocloses: !1 }],
              ])),
            ht
          );
        }
        function rn(v) {
          const { event: x } = v.context,
            G = Number.parseInt((0, D.j$)(v.args, "appid")),
            Y = Number.parseInt((0, D.j$)(v.args, "itemdefid")),
            X = Number.parseInt((0, D.j$)(v.args, "maxquantity")),
            K = (0, D.j$)(v.args, "calltoaction");
          return !(0, At.gS)(G, Y, !1) || !x
            ? (0, e.jsx)(A.t, {
                size: "small",
                position: "center",
                string: (0, ee.we)("#Loading"),
              })
            : (0, e.jsx)(Rt.f, {
                language: v.language,
                clanAccountID: x.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: G, nItemDefID: Y, max_quantity: X },
                strCallToAction: K,
              });
        }
        function ln(v) {
          const x = z();
          if (!x) return (0, e.jsx)(A.t, { size: "small" });
          const G = Number.parseInt((0, D.j$)(v.args));
          return (0, e.jsx)("span", { children: (0, Fe.D)(Number(y(x, G))) });
        }
        function Ge(v) {
          const x = (0, V.jR)(te.iA.accountid, "library");
          if (!x) return (0, e.jsx)(A.t, { size: "small" });
          const G = Number.parseInt((0, D.j$)(v.args));
          let Y = x.verifiedList?.length || 0;
          switch (G) {
            case F.sd:
              Y = x.playableList?.length || 0;
              break;
            case F.V8:
              Y = x.unsupportedList?.length || 0;
              break;
            case F.YX:
              Y = x.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Fe.D)(Number(Y)) });
        }
        function cn(v) {
          const x = Number.parseInt((0, D.j$)(v.args)),
            G =
              "hide" in v.args && !!Number.parseInt((0, D.j$)(v.args, "hide"));
          return x >= 0
            ? (0, e.jsx)(Bt, { nDoorIndex: x, bHide: G, children: v.children })
            : null;
        }
        function Bt(v) {
          const { nDoorIndex: x, bHide: G, children: Y } = v,
            X = (0, L.OM)(x);
          return X == null
            ? null
            : (X && !G) || (!X && G)
              ? (0, e.jsx)(e.Fragment, { children: v.children })
              : null;
        }
        function Be(v) {
          if (te.iA.logged_in) {
            const x = Number.parseInt((0, D.j$)(v.args)),
              G = Number.parseInt((0, D.j$)(v.args, "mod"));
            if (G > 0 && x < G && te.iA.accountid % G == x) return v.children;
          }
          return null;
        }
        function Pt(v) {
          const x = (0, D.j$)(v.args);
          return x?.trim().length > 0
            ? (0, e.jsx)("div", { className: x.trim(), children: v.children })
            : (0, e.jsx)(e.Fragment, { children: v.children });
        }
        function Ee(v) {
          return (0, e.jsx)("span", {
            className: W.LocalizeBlock,
            children: (0, ee.oW)(
              v.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function Tt(v) {
          let x = (0, D.j$)(v.args);
          return x
            ? (0, e.jsx)(Qt, { giveawayid: x })
            : (0, e.jsx)(O.Fragment, {});
        }
        function dn(v) {
          const { showErrorInfo: x, event: G } = v.context,
            Y = Number.parseInt((0, D.j$)(v.args)),
            X = O.useMemo(() => {
              if (G)
                return G.jsondata.sale_sections?.find(
                  (K) =>
                    K.section_type == "vo_internal" &&
                    (K.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      K.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [G]);
          if (Y && X) {
            const K = Number.parseInt((0, D.j$)(v.args, "depositpackageid")),
              re = Number.parseInt((0, D.j$)(v.args, "psulesspackageid")),
              Ce = (0, D.j$)(v.args, "out_of_stock_override"),
              ye = (0, D.j$)(v.args, "delivery_override"),
              me = (0, D.j$)(v.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(fe, {
              section: X,
              reservationPackageID: Y,
              depositPackageID: K,
              psuLessPackageID: re,
              strOutOfStockOverride: Ce,
              strDeliveryOverride: me || ye,
              bDeliveryOverrideOnlyIfOutOfStock: !!me,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var gn = a(71698),
          at = a(94520);
        function Me(v) {
          const { bSalePage: x } = v,
            [G, Y] = O.useState(!1);
          return (
            (0, gn.H)(G, x),
            O.useEffect(() => {
              ie.Vw.Init(new ce.D(te.TS.WEBAPI_BASE_URL)), Q.O3.Init(), Y(!0);
            }, []),
            O.useEffect(() => {
              const X = (0, ee.l4)();
              X && k.locale(X);
            }, []),
            G
              ? x
                ? (0, e.jsx)(at.d3, { dictionary: sn(), children: v.children })
                : v.children
              : null
          );
        }
      },
      11811: (P, ge, a) => {
        "use strict";
        a.r(ge), a.d(ge, { default: () => y });
        var e = a(7850),
          k = a(71698),
          O = a(90626),
          ce = a(73259),
          ie = a(76559),
          Q = a(77495),
          ee = a(25679),
          te = a(64641),
          F = a.n(te),
          m = a(85599),
          oe = a(18210),
          J = a(3166),
          de = a(17809),
          U = a(85692),
          N = a(41032),
          z = a(51079);
        function y(L) {
          const { eventModel: W } = L;
          return (0, e.jsx)(de.d, {
            bSalePage: !0,
            children: (0, e.jsx)(D, { ...L, overrideEventModel: W }),
          });
        }
        function D(L) {
          const { promotionName: W, language: j, overrideEventModel: l } = L,
            [g, _] = O.useState(
              l ?? Q.O3.GetClanEventFromAnnouncementGID(J.P9.ANNOUNCEMENT_GID),
            );
          O.useEffect(() => {
            if (!l && g?.AnnouncementGID != J.P9.ANNOUNCEMENT_GID) {
              const c = new ie.b(J.UF.CLANSTEAMID);
              Q.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                c,
                J.P9.ANNOUNCEMENT_GID,
                null,
              ).then(_);
            }
          }, [g, l]);
          const Z = (0, U.D2)() ?? g,
            A = (0, U.ty)();
          if (((0, k.s)(1500), !Z))
            return (0, e.jsx)("div", {
              className: F().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(m.t, {
                size: "medium",
                string: (0, oe.we)("#Loading"),
              }),
            });
          const $ =
            (Z.visibility_state !== ce.zv.k_EEventStateVisible &&
              Z.visibility_state !== ce.zv.k_EEventStateUnlisted) ||
            A;
          return (0, e.jsx)(V, {
            eventModel: Z,
            children: (0, e.jsx)(z.oJ, {
              children: (0, e.jsx)(z.Ay, {
                curator_clanid: Z?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(ee._, {
                  promotionName: W,
                  language: j,
                  eventModel: Z,
                  bIsPreview: $,
                }),
              }),
            }),
          });
        }
        function V(L) {
          const { eventModel: W, children: j } = L,
            l = W.GetContentHubType() == "adultonly";
          return (0, e.jsx)(N.QA, {
            eAdultOnlyMediaBehavior: l ? "allowed" : "masked",
            children: j,
          });
        }
      },
      32545: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
          BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
          "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
          "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
          "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
          "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
          "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
          "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
          "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
          "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
          focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
          hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
        };
      },
      50909: (P) => {
        P.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SalePageLogoCtn: "_3Rukhd1HqXzPiBrK5hwPT-",
          BackgroundAnimation: "_1xc_h6g1jbrfqXQXHDA2eY",
          "ItemFocusAnim-darkerGrey-nocolor": "_32Qiunpe7Bq8tRMP7zANIV",
          "ItemFocusAnim-darkerGrey": "_1jLvKsCp-1NNukUKFcJBiF",
          "ItemFocusAnim-darkGreySettings": "_2oonpIg6GiNC1fFwAuTeY1",
          "ItemFocusAnim-darkGrey": "_25MzDFkbrWeDNWxcpYDDqL",
          "ItemFocusAnim-grey": "_24xCtEhvscRzLJyaNWLeUa",
          "ItemFocusAnim-translucent-white-10": "_191r_XeIDZJjVtYMrw4vZN",
          "ItemFocusAnim-translucent-white-20": "_3PT6d0B4zsV60BfrKuIA1r",
          "ItemFocusAnimBorder-darkGrey": "_1Z9KMCmIY9huHpqwfwRypj",
          "ItemFocusAnim-green": "_1WZWN5W96O7pMURRF2eleh",
          focusAnimation: "_2hRoGMM5UsM8oeV-txHPNu",
          hoverAnimation: "_1YMbPvrOkuzyOJDFmv_N8s",
        };
      },
      71347: (P) => {
        P.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (P) => {
        P.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (P) => {
        P.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      17618: (P) => {
        P.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      10026: (P) => {
        P.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (P) => {
        P.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (P) => {
        P.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      32190: (P) => {
        P.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (P) => {
        P.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (P) => {
        P.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (P) => {
        P.exports = {
          ImageWrapperContainer: "_2or51Nzh1oEwvdNjKQ1XsS",
          ImageWrapper: "_34WcpEIVKr8Z72GaesGoR4",
          VideoBackground: "_3IizOeZqT1lZaoPEmdVxG",
          ImageWrapperFilename: "_3_vYFjDjTuDvhsL10XO9BU",
          ResultNotification: "_1X95b1CVvEsEa5dfoR5Pfv",
          ErrorCode: "_-7Alg3skQ6oFTYIpKTHsI",
          Hilight: "_3lBJMYeg4_hihNl0QTX1Qi",
          ImageButton: "_2MUWDtjaZWaMDdJaQr4o5a",
          Thumb: "_3M02zvAfoMwX5XlzlvFkc3",
          Full: "_1RN-YKVciU9zYHOYX6OV0",
          Delete: "_1X87fLS_CT0g2Vu5-fClUZ",
          FloatingThrobber: "_2EHZ15YQSAK_T5SCxVobtG",
          Localized: "_3FFrtt5Of4jP9unTFjYiHs",
          ClanImageGrid: "_3J5Yc20Wkz7gjSxxWcHst",
          ClanImageGridItem: "_1vXdD6QZTKcjYoRTOAuOeX",
          Selected: "_3JVN2Ta1MlQnuMnqPo0XR8",
          ImgCtn: "_248ADrw9QzPyhcxjqlaykT",
          Name: "TzsVI0_4scOG258SCeyqz",
        };
      },
      9709: (P) => {
        P.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (P) => {
        P.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (P) => {
        P.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (P) => {
        P.exports = {
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
      25359: (P) => {
        P.exports = {
          EventEditorArtworkCtn: "_3etoSeNgIJIJoQjVvKBkdK",
          ArtworkPreview: "_1fBG8S7L5v1-Ll8UMASqW5",
          EventEditorArtworkBarContainer: "TLT1tvLtG6-1EdFGwToo1",
          EventEditorButton: "_2EbfH5kGhG6VdMYM0aSFsw",
          EventEditorInputPaneTopRow: "_3loSsH7QVVzJW4dbA_k8pH",
          EventCoverImageCtn: "vcULy1uwr1V-xetzQ3t5_",
          DragTarget: "_2qaqHaHt0FsJ5g6E50Rpbn",
          DragOnTopOfMe: "_1-0mEm0at-4Czr10kmQ82K",
          EventEditorArtworkTextCtn: "wbzVx6PSPvY3jxjmybwT7",
          EventEditorDragTargetArea: "_352Z7ynHHExwu7pbLG0mi3",
          EventEditorArtworkTitle: "_1BtkzIs3COLhdqubhPqTJa",
          EventEditorArtworkSubTitle: "_3NsjbDpfSxc8ZHhYE5TuTv",
          EventEditorArtworkResolution: "pScoegXLiCfPTrVdDHgRc",
          ReassignCtn: "_2kzxUHYwRnfLZc2qUJp54m",
          ImagePreviewContainer: "_4M__i4jyU9-VJE6K30Rat",
          NoneSet: "csDC3rD7ooQ8gGXZhh594",
          TitleSafePreview: "_2Gel5eBC4smzhCMPJN4poX",
          TitleSafeCaption: "_2oU3ulhvWy8BrTtr-wLTHL",
          LanguageSelector: "_33sdnBObDSgcIemY_8d188",
          LanguageSelectorSelected: "_35iac6gVYl3NbfLM5oGhAp",
          LanguageSelectorNoData: "_2MrExNFgrVVmzV4_XxWk7m",
          LanguageContainer: "_1GqYxNpFolOmvCXZZ5SqS9",
          LanguageOptions: "_1OF4inXEccSHpEi-94BNyB",
          LanguageListContainer: "_2NKwVWWJzUopyzUpm5K8PU",
          SelectImageContainerTopRow: "_33RDQ6gt9hW0N3baDbAfnl",
          SelectImageContainerBottomRow: "_3Mstp8zLfqhPc0yqJGve2N",
          TextTitle: "_1b_OxtjP85MZc-IlQfnnHR",
          TextSubTitle: "EqzVNygGbzsiBalSQOtWy",
          SelectImageEqualColumns: "Qz0mmjcnBMcs99N6fgVCv",
          SelectImageBlock: "X_wtWeV0nNEF-9Rz0wZRL",
          MainPreviewBlock: "_3kAV8hXf4G70C4tDE8HDjI",
          Tips: "_2jAkKq9D5KKOH2cgMu59yN",
          ExamplesCtn: "WiG3FOkzY58mDmTzVy40z",
          SelectImageExampleImg: "_3Lcquzc_EacniSS2QxdUHx",
          SelectImageLanguagesCtn: "_27huHYrHSwivfUIglfRube",
          SelectImageTitle: "lJEQ6yKHtjwXClD4NVqUY",
          ArtworkSelectorContainer: "_2dxWXru9IFUHuJgzC9_WwQ",
          Title: "_2HiqsrLG8k4zf4raXVygUP",
          SaleHeaderExampleCtn: "_2Nwi2WWTWdc4JkMEiHDFFK",
          SaleHeaderExampleCol: "_2s4zAjRHJabF47kK9uxCY6",
          BroadcastPreview: "_3NxzN3dNq98rjVdkyQ9QIH",
          AssetExampleSpotlightCtn: "_29B1UOzVRMVZSd22IyP43x",
          BackgroundConfigCtn: "_3SVRvFP-sXikNXmksKkDQ7",
          OptionCtn: "_2XnObldRTEs5T4Sswyv5Fo",
          ButtonRow: "_2W9rAanKV4V6A7Exx4sWGF",
          BackgroundColorBtn: "_2YD-avez2pqO4MJHAO5_v0",
          BackgroundColorResetBtn: "baRhk4ouyxcNfo_um5C76",
          UploadSuccess: "inXVzuN-asDe-A5jnsvvV",
          HighlightBox: "_3qTodEPOW76BNBFtgX0AUa",
        };
      },
      79949: (P) => {
        P.exports = {
          MultipleExampleContainer: "_3HrpHSdcqC7wp8s07bOS2l",
          ExampleSectionTitle: "MxxIR01BbdH_tAWmTbjoz",
          DetailPageExample: "_3Mi3a8sT7hZn6-L_TPm3gr",
          DetailExample: "TYQJH_hhcEuSRvl75g6GA",
          DetailExample2: "HQAziOChjZK2M_cKTNA8",
          MainImageCtn: "_1mRJSs13tWFRJ55fG6WrK8",
          ExampleBodyPosition: "_2wNW_eWECTcvaYU7AYXXY2",
          ExampleContentCtn: "_2bAs9Bkh1K8PYVhcLLerfA",
          TextTitle: "_3fulSVNkgCeQyqxT0FjHOp",
          TextSubTitle: "_3ThX6fPp7MJY_TrTP_RCRY",
          TextBody: "_2nG13rbAd05OnozWt7nQWL",
          SpotlightExample: "_3KsBV1q-e0ZnxgK9GdUiON",
          ExampleSpacer: "oAEZygc5smKi6PjD-981",
          BroadcastPreviewContainer: "_3aLcrZxS4I4KVtUF0BdHds",
          SaleHeaderPreviewContainer: "GORXZE3lrdjE-QiVxXceW",
        };
      },
      15496: (P) => {
        P.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          ReadMoreLink: "_2mvgc6dpEDHRJlTWhGDz7h",
          MajorEventContainer: "dVJB2r43CGIAgr-Xtt4P3",
          MajorEventImageContainer: "_1PkTBeZJVs3WI8US0zffEx",
          MajorEventImage: "_25fL1JQcG1kh_9L5danMxc",
          BottomShadow: "_1ueE9cjv0hzERo311Gr6qL",
          MajoreEventImageContentContainer: "_3mREW5LJ_7jyeol7BtXcym",
          MajorEventImageTemplate: "lQR9_4nAXfydIY7zwOzSF",
          MajorEventBackground: "_388IuJImOHcpIL9kvqJdet",
          MajorEventImageBackgroundBlur: "_3sVs6YBElnuTON_cY_6ne5",
          MajorEventHeader: "_1HL2nt3zhHJo3RkMzmD-Gb",
          PartnerEventLargeImage_Title: "bYwbk-ycz_n2JnQgyrgDx",
          EventType: "_3zVyXPaFJl95Q5qnxtDpuB",
          GameIconAndName: "IltgR1LrH0neRnKq0TLxy",
          GameIcon: "_3Dkj3XaiQV2I1d2m-RRA_L",
          MajorEventSpotlightBackground: "_1ahePoGx6gPXhapzZw2L21",
          MajorEventContent: "_2nr7NuawYs9NhC8OUkY0fK",
          MajorEventTextCtn: "Ojdg2vBD3O1oroxYVU2zB",
          MajorEventTitle: "nEBZT02OOnxIbyIl9Dk44",
          MajorEventSummary: "HPngOFPPykmeXFSxcC1Zv",
          MajorEvent_Ctn: "_2_kU7nUB6wwDu-LsbQZmNc",
          AppDetailsSpotlightContainer: "_1zDJ1bfFg-UkuAluUAoGKj",
          BackgroundAnimation: "_2zmvTGYcnxB2bhgSNFXnSi",
          "ItemFocusAnim-darkerGrey-nocolor": "_2DCLV3hUeBViGvq3yTsiQE",
          "ItemFocusAnim-darkerGrey": "_1iMoXsAEHqrsXXcoaw1SIy",
          "ItemFocusAnim-darkGreySettings": "_23bSFoV4nDLAGl_G32zEdY",
          "ItemFocusAnim-darkGrey": "_1_Uo-zxJJlBTZyvRjgeG4_",
          "ItemFocusAnim-grey": "_3AjpDoqzZuBj6F7fMiO2Q-",
          "ItemFocusAnim-translucent-white-10": "_3PpKBwmAjZpmyTB-ooDvNd",
          "ItemFocusAnim-translucent-white-20": "_2k5z_bdbdZRy3o_pIFzFBF",
          "ItemFocusAnimBorder-darkGrey": "DuzyT2w758OaPfDpfQkO6",
          "ItemFocusAnim-green": "kF7es13166bQnCHSRaw6l",
          focusAnimation: "_3lfKCkcI6nWWMWFgLOGbyh",
          hoverAnimation: "_24fZDwdgB8kUq2hGCnbx88",
        };
      },
      9202: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
          BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
          "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
          "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
          "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
          "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
          "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
          "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
          "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
          "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
          "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
          focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
          hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
        };
      },
      64734: (P) => {
        P.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      51239: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          CategorySectionsCtn: "YuXdszLjIFoat_EbTkm8U",
          CategorySection: "_2MUQ8QBrMaSxsdhqhiN6tG",
          CategorySectionName: "_2VnsyILlZj23L2UgP3ZsMm",
          CategoriesCtn: "_3yuPyNw3DpZ_ICakOPcu4u",
          Category: "_1uwcZwdwT2vRgumGDlZbtk",
          Grid: "_3anY0OeVUh2enLVFNx50N1",
          CategoryGradient: "_27LrTrejiaFAMHuA0df3qP",
          CategoryName: "_3VNsED3Ez-vqDraw_8QWsp",
          TopLevelCategory: "_2ZYjRLgkQLHW5_cstUffIp",
          BackgroundAnimation: "_10Bfh_1KHpFNk8qNyewY_F",
          "ItemFocusAnim-darkerGrey-nocolor": "_3LFS9sVPAAjvuyGeJ1peaT",
          "ItemFocusAnim-darkerGrey": "_1S59zff-jnAxDy8rr0hHlS",
          "ItemFocusAnim-darkGreySettings": "_34Uv5_hzQOvOrw1Unrblim",
          "ItemFocusAnim-darkGrey": "Hh_85_Fjw1YP9H4vzXEu_",
          "ItemFocusAnim-grey": "_2-9pWSpKgjrjUj71iLnJo7",
          "ItemFocusAnim-translucent-white-10": "W_bdqnE_ztejA8mOAYb6D",
          "ItemFocusAnim-translucent-white-20": "_2rFvANRdudDnTxPKgIBcZd",
          "ItemFocusAnimBorder-darkGrey": "_2b9hABAip8cwkuxxNVwPSw",
          "ItemFocusAnim-green": "_3Jf28OMYy3a68jmK-GOBsc",
          focusAnimation: "MlTzZ1Co7fkjpq6p2zQ0",
          hoverAnimation: "_19RLtomnrOIiHhk5GWSMdR",
        };
      },
      44894: (P, ge, a) => {
        "use strict";
        a.d(ge, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
