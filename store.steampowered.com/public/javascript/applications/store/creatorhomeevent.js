/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [83276],
    {
      71698: (U, ge, a) => {
        "use strict";
        a.d(ge, { H: () => le, s: () => ae });
        var e = a(90626),
          R = a(41623);
        let L = 0;
        function le(W, q) {
          (0, e.useEffect)(() => {
            if (!(W || q))
              return (
                L++,
                () => {
                  --L == 0 && (0, R.s)();
                }
              );
          }, [W, q]);
        }
        function ae(W) {
          const [q, ee] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const z = window.setTimeout(() => ee(!0), W);
            return () => window.clearTimeout(z);
          }, [W]),
            le(q);
        }
      },
      85528: (U, ge, a) => {
        "use strict";
        a.d(ge, { Vw: () => Y });
        var e = a(14947),
          R = a(99412),
          L = a(72604),
          le = a(35038),
          ae = a(67529),
          W = a(3166);
        class q {
          m_nLastUpdated = 0;
          m_mapLanguages = e.sH.map();
          m_appid;
          m_fetching = null;
          constructor(c) {
            this.m_appid = c;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(c) {
            return this.m_mapLanguages.has(c)
              ? this.m_mapLanguages.get(c)
              : null;
          }
          Localize(c, g) {
            let C = W.TS.LANGUAGE,
              b = this.GetTokenList(C),
              Z = C != "english" ? this.GetTokenList("english") : null;
            return ee(c, b, Z, this.m_appid, g);
          }
          SubstituteParams(c, g) {
            let C = W.TS.LANGUAGE,
              b = this.GetTokenList(C),
              Z = C != "english" ? this.GetTokenList("english") : null;
            return z(c, b, Z, this.m_appid, g);
          }
        }
        function ee(S, c, g, C, b) {
          if (!S.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                S,
                "appid",
                C,
                "tokens",
                c,
              ),
              ""
            );
          let Z = S;
          S = S.toLowerCase();
          let B = "";
          if (
            (c && c.has(S) && (B = c.get(S)),
            !B && g && g.has(S) && (B = g.get(S)),
            B)
          )
            B = z(B, c, g, C, b);
          else if (
            ((c || g) &&
              console.log(
                "No loc found for appid",
                C,
                Z,
                "Tokens:",
                c,
                "Fallback:",
                g,
              ),
            c && W.TS.EUNIVERSE != R.wLO)
          )
            return S;
          return B;
        }
        function z(S, c, g, C, b) {
          let Z = /{[A-za-z0-9_%#:]+}/g,
            B = S.match(Z);
          if (B)
            for (let X of B) {
              let l = X.slice(1, -1),
                fe = h(l, b),
                qe = ee(fe, c, g, C, b);
              if (!qe) return "";
              S = S.replace(X, qe);
            }
          return (S = h(S, b)), S;
        }
        function h(S, c) {
          let g = /%[A-Za-z0-9_:]+%/g,
            C = S.match(g);
          if (C)
            for (let b of C) {
              let Z = b.slice(1, -1).toLowerCase(),
                B = c.get(Z);
              B == null
                ? console.log("No rich presence found for", Z)
                : (S = S.replace(b, B));
            }
          return S;
        }
        var oe = a(72849),
          Q = a(71742),
          ce = a(8323),
          y = Object.defineProperty,
          T = Object.getOwnPropertyDescriptor,
          F = (S, c, g, C) => {
            for (
              var b = C > 1 ? void 0 : C ? T(c, g) : c, Z = S.length - 1, B;
              Z >= 0;
              Z--
            )
              (B = S[Z]) && (b = (C ? B(c, g, b) : B(b)) || b);
            return C && b && y(c, g, b), b;
          };
        function w(S) {
          return useObserver(() => Y.GetAppInfo(S));
        }
        function j(S) {
          return useObserver(() => S.map((c) => Y.GetAppInfo(c)));
        }
        const se = 3600 * 24 * 7 * 2;
        class k {
          m_CMInterface;
          m_mapAppInfo = e.sH.map();
          m_mapRichPresenceLoc = e.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new ce.lu();
          constructor() {
            (0, e.Gn)(this);
          }
          Init(c) {
            this.m_CMInterface = c;
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
          RegisterCallbackOnLoad(c) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, Q.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                c();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(c);
          }
          IsLoadingAppID(c) {
            return this.m_setPendingAppInfo.has(c);
          }
          GetAppInfo(c) {
            if (
              ((0, Q.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(c))
            ) {
              let g = new ae.by(c);
              this.m_mapAppInfo.set(c, g), this.QueueAppInfoRequest(c);
            }
            return this.m_mapAppInfo.get(c);
          }
          QueueAppInfoRequest(c) {
            return c
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (g) => (this.m_PendingAppInfoResolve = g),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(c),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const c = this.m_PendingAppInfoResolve,
              g = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(g),
              c?.();
          }
          async LoadAppInfoBatch(c) {
            this.m_cAppInfoRequestsInFlight++;
            let g = await this.LoadAppInfoBatchFromLocalCache(c);
            if (g.length) {
              console.log("Loading batch of App Info from Steam: ", g),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let C = le.w.Init(oe._z);
              C.Body().set_language((0, R.sfN)(W.TS.LANGUAGE));
              const b = 50;
              for (; g.length > 0; ) {
                const Z = Math.min(b, g.length),
                  B = g.slice(0, Z);
                (g = g.slice(Z)), C.Body().set_appids(B);
                const X = await oe.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  C,
                );
                X.GetEResult() == L.R
                  ? this.OnGetAppsResponse(X)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${X.GetEResult()}, AppIDs:`,
                      B,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(c) {
            let g = [];
            for (let C of c.Body().apps()) {
              let b = this.m_mapAppInfo.get(C.appid());
              (0, Q.wT)(
                b,
                `Got AppInfo response for unrequested AppID: ${C.appid()}`,
              ),
                b &&
                  ((b = new ae.by(C.appid())),
                  b.DeserializeFromMessage(C),
                  this.m_mapAppInfo.set(C.appid(), b),
                  g.push(b));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(c) {
            for (let g of c) {
              const C = new ae.by(g.appid());
              C.DeserializeFromAppOverview(g),
                C.is_initialized && this.m_mapAppInfo.set(g.appid(), C);
            }
          }
          async EnsureAppInfoForAppIDs(c) {
            let g = !1;
            return (
              c.forEach((C) => {
                let b = this.m_mapAppInfo.get(C);
                if (b) {
                  b.is_valid || (g = !0);
                  return;
                }
                (b = new ae.by(C)),
                  this.m_mapAppInfo.set(C, b),
                  this.QueueAppInfoRequest(C),
                  (g = !0);
              }),
              g && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(c) {
            this.m_CacheStorage = c;
          }
          GetCacheKeyForAppID(c) {
            return "APPINFO_" + c;
          }
          async LoadAppInfoBatchFromLocalCache(c) {
            if (!this.m_CacheStorage) return c;
            console.log("Loading batch of App Info from Local Cache: ", c);
            const g = new Date(new Date().getTime() - se * 1e3),
              C = async (X) => {
                const l = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(X),
                );
                if (!l) return X;
                let fe = this.m_mapAppInfo.get(X);
                return (
                  (0, Q.wT)(
                    fe,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  fe
                    ? ((fe = new ae.by(X)),
                      fe.DeserializeFromCacheObject(l),
                      fe.is_initialized
                        ? (this.m_mapAppInfo.set(X, fe),
                          fe.time_updated_from_server < g ? X : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            X,
                            l,
                          ),
                          X))
                    : X
                );
              };
            let b = c.map((X) => C(X));
            return (await Promise.all(b)).filter((X) => X !== null);
          }
          async SaveAppInfoBatchToLocalCache(c) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                c.map((g) => g.appid),
              );
              for (const g of c) {
                const C = g.SerializeToCacheObject();
                C &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(g.appid),
                    C,
                  );
              }
            }
          }
          Localize(c, g, C) {
            const b = this.GetRichPresenceLoc(c);
            return b
              ? b.Localize(g, C)
              : W.TS.EUNIVERSE != R.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${c} token ${g}, this may not have had a chance to load yet`,
                  ),
                  g)
                : "";
          }
          GetRichPresenceLoc(c) {
            if (this.m_mapRichPresenceLoc.has(c.toString())) {
              let C = this.m_mapRichPresenceLoc.get(c.toString());
              return (
                C.m_nLastUpdated + 1e3 * 60 * ae.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(C),
                C
              );
            }
            let g = new q(c);
            return (
              this.m_mapRichPresenceLoc.set(c.toString(), g),
              this.QueueRichPresenceLocRequest(g),
              g
            );
          }
          GetRichPresenceLocAsync(c) {
            let g = this.GetRichPresenceLoc(c);
            return g.m_nLastUpdated ? Promise.resolve(g) : g.m_fetching;
          }
          OnRichPresenceLocUpdate(c, g) {
            c.m_nLastUpdated = Date.now();
            for (let C of g) {
              let b = C.language(),
                Z = c.m_mapLanguages.get(b);
              Z
                ? Z.clear()
                : (c.m_mapLanguages.set(b, new Map()),
                  (Z = c.m_mapLanguages.get(b)));
              for (let B of C.tokens())
                Z?.set(B.name().toLowerCase(), B.value());
            }
          }
          QueueRichPresenceLocRequest(c) {
            return (
              c.m_fetching ||
                ((c.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let g = le.w.Init(oe.zQ);
                    return (
                      g.Body().set_appid(c.GetAppID()),
                      g.Body().set_language(W.TS.LANGUAGE),
                      oe.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        g,
                      )
                    );
                  })
                  .then(
                    (g) => (
                      (c.m_fetching = null),
                      g.GetEResult() != L.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            c,
                            g.Body().token_lists(),
                          ),
                          Promise.resolve(c))
                    ),
                  )),
                c.m_fetching.catch(() => {
                  c.m_fetching = null;
                })),
              c.m_fetching
            );
          }
        }
        F([e.XI], k.prototype, "OnGetAppsResponse", 1),
          F([e.XI], k.prototype, "OnRichPresenceLocUpdate", 1);
        const Y = new k();
      },
      50109: (U, ge, a) => {
        "use strict";
        a.d(ge, { E: () => ce, O: () => Q });
        var e = a(14947),
          R = a(65946),
          L = a(99412),
          le = a(41635),
          ae = a(27066),
          W = a(3166),
          q = a(38585),
          ee = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          h = (y, T, F, w) => {
            for (
              var j = w > 1 ? void 0 : w ? z(T, F) : T, se = y.length - 1, k;
              se >= 0;
              se--
            )
              (k = y[se]) && (j = (w ? k(T, F, j) : k(j)) || j);
            return w && j && ee(T, F, j), j;
          };
        const oe = class xt {
          m_eCurLang = (0, L.sfN)(W.TS.LANGUAGE);
          m_rgHasData = (0, le.$Y)([], L.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new q.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(T) {
            return this.m_eCurLang != T
              ? ((this.m_eCurLang = T), this.GetCallback().Dispatch(T), !0)
              : !1;
          }
          SetHasLanguage(T) {
            T.forEach((F, w) => {
              this.m_rgHasData[w] != F && (this.m_rgHasData[w] = F);
            });
          }
          BHasLanguageData(T) {
            return this.m_rgHasData[T];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(T) {
            T != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = T);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              xt.s_globalSingletonStore ||
                (xt.s_globalSingletonStore = new xt()),
              xt.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        h([e.sH], oe.prototype, "m_eCurLang", 2),
          h([e.sH], oe.prototype, "m_rgHasData", 2),
          h([e.sH], oe.prototype, "m_bHasLocalizationContext", 2),
          h([ae.o], oe.prototype, "GetCurEditLanguage", 1),
          h([ae.o], oe.prototype, "SetCurEditLanguage", 1),
          h([e.XI.bound], oe.prototype, "SetHasLanguage", 1),
          h([ae.o], oe.prototype, "BHasLanguageData", 1);
        let Q = oe;
        function ce() {
          return (0, R.q3)(() => Q.Get().GetCurEditLanguage());
        }
      },
      37656: (U, ge, a) => {
        "use strict";
        a.d(ge, { w: () => Y });
        var e = a(41735),
          R = a.n(e),
          L = a(14947),
          le = a(65946),
          ae = a(90626),
          W = a(27066),
          q = a(8323),
          ee = a(30096),
          z = a(3166),
          h = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          Q = (S, c, g, C) => {
            for (
              var b = C > 1 ? void 0 : C ? oe(c, g) : c, Z = S.length - 1, B;
              Z >= 0;
              Z--
            )
              (B = S[Z]) && (b = (C ? B(c, g, b) : B(b)) || b);
            return C && b && h(c, g, b), b;
          };
        const ce = class Gn {
          constructor() {
            (0, L.Gn)(this);
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
            const c = new Gn();
            return (
              (c.giveaway_id = this.giveaway_id),
              (c.seconds_until_drawing = this.seconds_until_drawing),
              (c.rtime_start = this.rtime_start),
              (c.rtime_end = this.rtime_end),
              (c.closed = this.closed),
              (c.winner_count = this.winner_count),
              c
            );
          }
        };
        Q([L.sH], ce.prototype, "giveaway_id", 2),
          Q([L.sH], ce.prototype, "seconds_until_drawing", 2),
          Q([L.sH], ce.prototype, "rtime_start", 2),
          Q([L.sH], ce.prototype, "rtime_end", 2),
          Q([L.sH], ce.prototype, "closed", 2),
          Q([L.sH], ce.prototype, "winner_count", 2);
        let y = ce;
        const T = class st {
          constructor() {
            (0, L.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(c, g) {
            return c + "_" + g;
          }
          GetInfoByInstance(c, g) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(c, g),
            );
          }
          GetNextDrawChangeCallback(c) {
            return (
              this.m_mapNextDrawChangeCallback.has(c) ||
                this.m_mapNextDrawChangeCallback.set(c, new q.lu()),
              this.m_mapNextDrawChangeCallback.get(c)
            );
          }
          CopyToGiveaway(c, g) {
            g.closed != c.closed && (g.closed = c.closed),
              g.giveaway_id != c.giveaway_id && (g.giveaway_id = c.giveaway_id),
              g.rtime_start != c.rtime_start && (g.rtime_start = c.rtime_start),
              g.rtime_end != c.rtime_end && (g.rtime_end = c.rtime_end),
              g.winner_count != c.winner_count &&
                (g.winner_count = c.winner_count),
              g.seconds_until_drawing != c.seconds_until_drawing &&
                (g.seconds_until_drawing = c.seconds_until_drawing);
          }
          async ReloadGiveaway(c, g) {
            if (!c) return null;
            let C = z.TS.STORE_BASE_URL + "prizes/nextdraw/" + c,
              b = null,
              Z = { origin: self.origin };
            return (
              (b = await R().get(C, { params: Z })),
              (0, L.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(c) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(c, new y()),
                  this.CopyToGiveaway(
                    b.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(c),
                  ),
                  g !== void 0)
                ) {
                  const B = this.GetKey(c, g);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(B) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      B,
                      new y(),
                    ),
                    this.CopyToGiveaway(
                      b.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(B),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(c).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(c),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(c)
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
              let c = (0, z.Tc)("giveawaynextdraw", "application_config");
              if (c && c.giveaway_id) {
                let g = new y();
                this.CopyToGiveaway(c, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(c.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        Q([L.sH], T.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          Q([L.XI], T.prototype, "CopyToGiveaway", 1);
        let F = T;
        const w = class vn {
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
          SetupRefreshDataInterval(c, g) {
            if ((this.ClearRefreshInterval(), !c.closed)) {
              let C =
                c.seconds_until_drawing <= 0 && c.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(g, C);
            }
          }
          SetupCountDown(c, g) {
            c > 0 && (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        Q([W.o], w.prototype, "ClearRefreshInterval", 1),
          Q([W.o], w.prototype, "ClearCountDown", 1),
          Q([W.o], w.prototype, "SetupRefreshDataInterval", 1),
          Q([W.o], w.prototype, "SetupCountDown", 1);
        let j = w;
        function se(S, c) {
          const g = F.Get().GetInfoByInstance(S, c.m_myInstanceNumber);
          (g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && c.ClearCountDown();
        }
        function k(S, c) {
          const g = F.Get().GetInfoByInstance(S, c.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (c.ClearCountDown(),
            F.Get()
              .ReloadGiveaway(S, c.m_myInstanceNumber)
              .then((C) => {
                c.SetupCountDown(C.seconds_until_drawing, () => se(S, c));
              }));
        }
        function Y(S) {
          const [c] = (0, ae.useState)(new j()),
            g = (0, ee.CH)();
          (0, ae.useEffect)(
            () => (
              F.Get()
                .ReloadGiveaway(S, c.m_myInstanceNumber)
                .then((X) => {
                  c.SetupRefreshDataInterval(X, () => k(S, c)),
                    c.SetupCountDown(X.seconds_until_drawing, () => se(S, c)),
                    g();
                }),
              () => {
                c.ClearRefreshInterval(), c.ClearCountDown();
              }
            ),
            [c, S, g],
          );
          const C = F.Get().GetInfoByInstance(S, c.m_myInstanceNumber),
            [b, Z, B] = (0, le.q3)(() => [
              C?.winner_count,
              C?.closed,
              C?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !C || C.giveaway_id == null || !C.BStarted() || b === void 0,
            winner_count: b,
            closed: Z,
            seconds_until_drawing: B,
          };
        }
      },
      21042: (U, ge, a) => {
        "use strict";
        a.d(ge, { Sm: () => q, U: () => ae, r3: () => z });
        var e = a(99412),
          R = a(72609),
          L = a(73259),
          le = a(76559);
        function ae(h, oe, Q, ce) {
          const y = new L.lh();
          return (
            (y.type = oe),
            (y.clanSteamID = new le.b(h, R.TS.EUNIVERSE, e.P3F, 0)),
            (y.GID = "fakeevent_" + W++),
            (y.visibility_state = L.zv.k_EEventStateUnlisted),
            (y.visibilityStartTime = ce - 1),
            (y.jsondata.bSaleEnabled = !0),
            (y.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (y.jsondata.sale_vanity_id = Q),
            (y.jsondata.sale_header_offset = 0),
            (y.jsondata.sale_header_disable_top_margin = !1),
            y
          );
        }
        let W = 1234;
        function q(h, oe) {
          return {
            unique_id: W++,
            capsules: [],
            events: [],
            links: [],
            section_type: h,
            localized_label: [],
            default_label: oe,
          };
        }
        const ee = "socialcontent_";
        function z() {
          return {
            platforms: [
              { label: L.Zf.Steam, checked: !0 },
              { label: L.Zf.Facebook, checked: !0 },
              { label: L.Zf.Twitter, checked: !0 },
              { label: L.Zf.Reddit, checked: !0 },
            ],
            doorsEnabled: !1,
            content_options: [
              {
                unique_id: ee + Math.floor(Math.random() * 1e6),
                door: void 0,
                twitter_card: L.jR.SummaryLargeImage,
                localized_option_fields: {
                  localized_header: [],
                  title: [],
                  description: [],
                  image: [],
                },
              },
            ],
          };
        }
      },
      55436: (U, ge, a) => {
        "use strict";
        a.d(ge, { r: () => ce, z: () => oe });
        var e = a(7850),
          R = a(90626),
          L = a(16412),
          le = a(25792),
          ae = a(96538),
          W = a(18210),
          q = a(85599),
          ee = a(17618),
          z = a.n(ee),
          h = a(53424);
        const oe = (y) => {
            const { clanSteamID: T, fnImageSelectCallBack: F } = y,
              [w, j] = (0, R.useState)(""),
              se = (0, h.mr)(y.clanSteamID.GetAccountID()),
              k = () => y.closeModal && y.closeModal(),
              Y = h.pU.GetFilteredClanImages(T, w),
              S = (c) => {
                F(c), k();
              };
            return (0, e.jsx)(le.tH, {
              children: (0, e.jsx)(ae.x_, {
                onEscKeypress: k,
                children: (0, e.jsxs)(L.UC, {
                  children: [
                    (0, e.jsx)(L.Y9, {
                      children: (0, W.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(L.nB, {
                      children: (0, e.jsxs)(L.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, W.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(L.pd, {
                            placeholder: (0, W.we)("#ClanImageChooser_Search"),
                            value: w,
                            onChange: (c) => j(c.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: ee.ImagesOuterContainer,
                            children: se
                              ? (0, e.jsx)(q.t, {
                                  size: "medium",
                                  string: (0, W.we)("#Loading"),
                                })
                              : Y.length > 0
                                ? Y.map((c) =>
                                    (0, e.jsx)(
                                      Q,
                                      {
                                        clanImage: c,
                                        searchStringHilight: w,
                                        fnImageClick: S,
                                      },
                                      "ci" + c.image_hash,
                                    ),
                                  )
                                : w.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, W.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, W.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(L.wi, {
                      children: (0, e.jsx)(L.$n, {
                        onClick: k,
                        children: (0, W.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          Q = (y) => {
            const { clanImage: T, searchStringHilight: F, fnImageClick: w } = y;
            let j = T.file_name ? T.file_name : "",
              se = ce(F, j, String(T.imageid), ee.Hilight);
            return (0, e.jsxs)("div", {
              className: ee.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: ee.Image,
                  style: { backgroundImage: `url( '${T.thumb_url}' )` },
                  onDoubleClick: () => w(T),
                }),
                (0, e.jsx)("div", {
                  className: ee.ImageFilename,
                  title: j,
                  children: se,
                }),
              ],
            });
          };
        function ce(y, T, F, w) {
          let j = [];
          if (y.length > 0) {
            let se = T.toLocaleLowerCase();
            for (let k = 0; k < T.length; ) {
              let Y = se.indexOf(y, k);
              if (Y < 0) {
                j.push(
                  (0, e.jsx)(
                    "span",
                    { children: T.substring(k) },
                    F + "_" + String(k),
                  ),
                );
                break;
              } else
                k < Y &&
                  j.push(
                    (0, e.jsx)(
                      "span",
                      { children: T.substring(k, Y) },
                      F + "_" + String(k),
                    ),
                  ),
                  j.push(
                    (0, e.jsx)(
                      "span",
                      { className: w, children: T.substr(Y, y.length) },
                      F + "_" + String(k),
                    ),
                  ),
                  (k = Y + y.length);
            }
          } else j.push((0, e.jsx)("span", { children: T }, F + "_null"));
          return j;
        }
      },
      24806: (U, ge, a) => {
        "use strict";
        a.d(ge, { Ng: () => w });
        var e = a(7850),
          R = a(75844),
          L = a(90626),
          le = a(99412),
          ae = a(32093),
          W = a(50109),
          q = a(95695),
          ee = a.n(q),
          z = a(36707),
          h = a(18210),
          oe = a(92264),
          Q = a(30096),
          ce = a(71421),
          y = Object.defineProperty,
          T = Object.getOwnPropertyDescriptor,
          F = (k, Y, S, c) => {
            for (
              var g = c > 1 ? void 0 : c ? T(Y, S) : Y, C = k.length - 1, b;
              C >= 0;
              C--
            )
              (b = k[C]) && (g = (c ? b(Y, S, g) : b(g)) || g);
            return c && g && y(Y, S, g), g;
          };
        let w = class extends L.Component {
          GenerateLanguageOptions() {
            let k = [];
            const {
              fnFilterLanguage: Y,
              fnLangHasData: S,
              fnLastUpdateRTime: c,
              fnIsLangSupported: g,
            } = this.props;
            this.props.bAllowUnsetOption &&
              k.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: le.xPp,
                    children: (0, h.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let C = new Array();
            const b = this.props.realms || [ae.TU.k_ESteamRealmGlobal];
            for (const B of h.A0.GetLanguageListForRealms(b)) {
              if (Y && !Y(B)) continue;
              const X = (0, le.LgB)(B),
                l = (0, h.we)("#Language_" + X),
                fe = !!(g && g(B));
              C.push({ eLang: B, sLocName: l, bSupported: fe });
            }
            C.sort((B, X) =>
              B.bSupported != X.bSupported
                ? B.bSupported
                  ? -1
                  : 1
                : B.sLocName.localeCompare(X.sLocName),
            );
            let Z = !1;
            for (const B of C) {
              B.bSupported != Z &&
                (k.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: ee().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, h.we)(
                        B.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    B.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Z = B.bSupported));
              const X = S && S(B.eLang),
                l = c && c(B.eLang);
              let fe = B.sLocName;
              l &&
                l !== 0 &&
                ((fe += " "),
                (fe += (0, h.we)(
                  "#Language_Last_Update",
                  (0, h.$z)(l) +
                    " @ " +
                    (0, oe.KC)(l, { bForce24HourClock: !1 }),
                ))),
                k.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: B.eLang,
                      className: (0, z.A)(
                        { [ee().LanguageWithContent]: X },
                        B.bSupported
                          ? ee().SupportedLanguage
                          : ee().UnsupportedLanguage,
                      ),
                      children: fe,
                    },
                    "langpicker" + B.eLang + (X ? "_hasdata" : ""),
                  ),
                );
            }
            return k;
          }
          OnLanguageChange(k) {
            const { fnOnLanguageChanged: Y, selectedLang: S } = this.props;
            let c = Number.parseInt(k.currentTarget.value);
            c != S && Y && Y(c);
          }
          render() {
            const { selectedLang: k, bDisabled: Y, strTooltip: S } = this.props;
            let c = this.GenerateLanguageOptions();
            return (0, e.jsx)(ce.he, {
              toolTipContent: S,
              children: (0, e.jsx)("select", {
                value: k,
                onChange: this.OnLanguageChange,
                disabled: Y,
                children: c,
              }),
            });
          }
        };
        F([Q.oI], w.prototype, "OnLanguageChange", 1), (w = F([R.PA], w));
        function j(k) {
          const [Y, S] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(w, {
            selectedLang: S,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !Y,
            strTooltip: Y ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function se(k) {
          const { fnLangHasData: Y } = k;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const S = useObserver(() => {
            const c = [];
            for (let g = k_ELanguage_English; g < k_ELanguage_MAX; ++g)
              c[g] = !!(Y && Y(g));
            return c;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(S), [S]),
            jsx(Fragment, {})
          );
        }
      },
      25679: (U, ge, a) => {
        "use strict";
        a.d(ge, { _: () => eo });
        var e = a(7850),
          R = a(99412),
          L = a(19298),
          le = a(20169),
          ae = a(28604),
          W = a(36631),
          q = a(64387);
        function ee(o) {
          const { strURL: t } = o;
          return t
            ? (0, e.jsx)("div", {
                className: q.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var z = a(65946),
          h = a(90626),
          oe = a(73259),
          Q = a(25792),
          ce = a(52393),
          y = a.n(ce),
          T = a(95695),
          F = a.n(T),
          w = a(36707),
          j = a(3166),
          se = a(82054),
          k = a(68266);
        function Y(o) {
          const { event: t, bIsPreview: n } = o;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)(Q.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, w.A)(
                    y().SaleBackground,
                    y()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    y().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: n
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    s && (0, e.jsx)("source", { src: s, type: "video/webm" }),
                    r &&
                      !j.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: r, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function S(o) {
          const { event: t, language: n, children: s, bIsPreview: r } = o,
            i = h.useRef(null),
            d = (0, k.m0)(t, "sale_header", n),
            [m] = (0, z.q3)(() => [t.jsondata.sale_sub_menu]);
          h.useEffect(() => {
            if (!d) return;
            const I = new Image();
            (I.onload = () => {
              const x = (100 * I.width) / 950 + "%";
              i.current && i.current.style.setProperty("--background-scale", x);
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
              m
                ? (0, e.jsx)(se.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: m,
                    styleVariation: se.g.k_SubMenu,
                  })
                : (0, e.jsx)(ee, { strURL: d }),
              (0, e.jsx)("div", {
                className: (0, w.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: p,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, w.A)(
                    y()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    y().SaleBackground,
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
                          className: (0, w.A)(
                            F().SalePageBackground,
                            F().BackgroundImage,
                            F().Blur,
                          ),
                          src: d,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, w.A)(
                            F().SalePageBackground,
                            F().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: f,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(Y, { event: t, bIsPreview: r }),
                    (0, e.jsx)(e.Fragment, { children: s }),
                  ],
                }),
              }),
            ],
          });
        }
        var c = a(26589),
          g = a(39905),
          C = a(50909),
          b = a.n(C);
        function Z(o) {
          const { eventModel: t } = o,
            { data: n } = (0, c.hM)(t.clanSteamID.GetAccountID());
          if (
            !n ||
            (!n.can_edit && !n.support_user) ||
            (0, j.yK)() == "community"
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
        var B = a(76789),
          X = a.n(B),
          l = a(18210);
        function fe(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, z.q3)(() => [
              t.jsondata.sale_logo_url,
              l.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: X().SalePageLogoCtn,
                  href: j.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(qe, { ...o }),
                })
              : (0, e.jsx)("div", {
                  className: (0, w.A)(X().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(qe, { ...o }),
                })
            : null;
        }
        function qe(o) {
          const { eventModel: t, language: n } = o,
            s = (0, k.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var Nt = a(72865),
          Ct = a(71347),
          rt = a.n(Ct),
          it = a(53107);
        function Ve(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, R.sfN)(j.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, w.A)(
                  rt().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(Ge, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, w.A)(
                  rt().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((s, r) =>
                      (0, e.jsxs)(
                        h.Fragment,
                        {
                          children: [
                            (0, e.jsx)(Ge, { presentor: s, lang: n }),
                            t.length > 2 && ", ",
                          ],
                        },
                        s.url,
                      ),
                    ),
                  (0, e.jsx)(Ge, { presentor: t[t.length - 1], lang: n }),
                ),
              });
        }
        function Ge(o) {
          const { presentor: t, lang: n } = o,
            s = (0, Nt.aL)(t.url);
          return (0, e.jsx)(it.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: rt().PresenterLabel,
            children: l.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var Ft = a(60480),
          Dt = a(92757),
          Qe = a(18994),
          et = a(56412),
          Et = a(86515),
          lt = a(39153),
          zt = a(61478);
        function St(o) {
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
        var Ye = a(179),
          Re = a(50109),
          Ne = a(30096),
          bt = a(98609),
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
            m,
            u = 0;
          const { selectedTabBackgroundDef: p, nTabSaleSectionIndex: f } = Wt(
            t,
            n,
          );
          if (o?.enabled) {
            const I = o.groups?.length;
            if (
              (o.groups?.forEach((D, x) => {
                if (u >= t.length || t[u].section_type == "tabs") return;
                const G = new Array();
                for (
                  let A = 0;
                  A < (D?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++A, ++u
                ) {
                  const N = t[u].unique_id;
                  G.push(N),
                    r.set(N, D.background_id),
                    A === 0 && i.set(N, D.background_id);
                }
                if (
                  (s.set(D.background_id, {
                    nBackgroundGroupID: D.background_id,
                    sectionUniqueIDs: G,
                    nSaleSectionLastIndex: u - 1,
                    nUniqueIDNextSaleSection:
                      u < t.length && (f === void 0 || u < f)
                        ? t[u].unique_id
                        : void 0,
                  }),
                  x + 1 == I && o.last_group_until_cover_section_until_end)
                )
                  for (
                    let A = u;
                    A < t.length &&
                    (!p || !p.enabled || A < f) &&
                    !(t[A].section_type == "tabs" && p?.enabled);
                    ++A
                  ) {
                    const N = t[A].unique_id;
                    r.set(N, D.background_id);
                  }
              }),
              u < t.length && (f === void 0 || u < f) && (d = t[u].unique_id),
              p?.enabled && f !== void 0)
            ) {
              let D = f;
              const x = p.groups.length;
              for (
                p.groups.forEach((G, M) => {
                  if (D >= t.length) return;
                  const A = new Array();
                  for (
                    let O = 0;
                    O < G.num_sections && D < t.length;
                    ++O, ++D
                  ) {
                    const H = t[D],
                      te = H.unique_id;
                    (0, Ze.bF)(n, H)
                      ? (A.push(te),
                        r.set(te, G.background_id),
                        O === 0 && i.set(te, G.background_id))
                      : --O;
                  }
                  let E = D;
                  for (; E < t.length && !(0, Ze.bF)(n, t[E]); ) E += 1;
                  if (
                    (s.set(G.background_id, {
                      nBackgroundGroupID: G.background_id,
                      sectionUniqueIDs: A,
                      nSaleSectionLastIndex: D - 1,
                      nUniqueIDNextSaleSection:
                        E < t.length ? t[E].unique_id : void 0,
                    }),
                    M + 1 == x && p.last_group_until_cover_section_until_end)
                  )
                    for (let O = D; O < t.length; ++O) {
                      const H = t[O];
                      if (H.section_type == "tabs" && p?.enabled) break;
                      (0, Ze.bF)(n, H) && r.set(H.unique_id, G.background_id);
                    }
                });
                D < t.length && !(0, Ze.bF)(n, t[D]);
              )
                D++;
              D < t.length && (m = t[D].unique_id);
            }
          } else t?.length > 0 && (d = t[0].unique_id);
          return {
            mapGroupToSections: s,
            nFirstSaleSectionIDWithoutGroup: d,
            mapSectionToGroup: r,
            mapFirstSectionToGroup: i,
            selectedTabBackgroundDef: p,
            nTabSaleSectionIndex: f,
            nFirstTabSectionIDWithoutGroup: m,
          };
        }
        var pe = a(29630),
          Vt = a(68434),
          jt = a(15181),
          tt = a(41635),
          Te = a(81416);
        function wt(o, t, n, s) {
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
                    ? (0, e.jsx)(Qt, {
                        clanEventGID: o.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Qt(o) {
          const { clanEventGID: t, elSaleSections: n } = o,
            [s, r] = (0, Vt.M)(`sale_section_seed_${t}`, (0, jt.m)());
          if (!n || n.length === 0) return null;
          if (n.length > 1 && s !== void 0) {
            const i = (0, jt.A)(s);
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
            i = (0, Re.E)(),
            d = h.useCallback(
              (x, G) => {
                dt.set(r.nBackgroundGroupID, G);
              },
              [r],
            ),
            m = (0, Ne.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const x = (0, R.LgB)(i),
              G =
                x in t.localized_background_art
                  ? x
                  : l.A0.GetLanguageFallback(bt.TS.LANGUAGE),
              M = t.localized_background_art[G];
            M && (u = pe.zU.GenerateURLFromHashAndExt(s.clanSteamID, M));
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
            D = {
              backgroundImage: p ? `url(${u}), ${p}` : `url(${u})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: I ? t.position_setting : void 0,
              backgroundColor: f ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: m,
            style: D,
            id: "background_group_" + t.background_id,
            children: n,
          });
        }
        var At = a(9807),
          ut = a(4720),
          Le = a(64641),
          Fe = a.n(Le),
          ze = a(85599);
        function Yt(o) {
          return typeof o == "string" || typeof o == "number"
            ? o
            : JSON.stringify(o);
        }
        class mt {
          Keyify = (t) => Yt(t);
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
          yt = a(90405);
        function Jt(o, t) {
          return o
            ? t
              ? !!o.valve_admin
              : !!(o.valve_admin || o.support_user)
            : !1;
        }
        function Lt(o, t) {
          const n = !!(o && o.BIsClanAccount()),
            { data: s } = (0, c.hM)(n ? o.GetAccountID() : 0);
          return n && Jt(s, t);
        }
        function Xt(o) {
          const { clanSteamID: t, id: n } = o;
          return Lt(t, o.requireAdmin)
            ? (0, e.jsx)("div", {
                id: n,
                className: (0, w.A)(
                  o.className,
                  o.requireAdmin
                    ? T.ValveOnlyAdminBackground
                    : T.ValveOnlyBackground,
                ),
                children: o.children,
              })
            : null;
        }
        var $ = a(16412),
          ue = a(96538),
          Se = a(88003),
          $t = a(12932),
          Xe = a(46777),
          qt = a(77495),
          Bt = a(16346),
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
            [i, d] = (0, h.useState)(() => t || "rgba(255, 255, 255, 1)"),
            m = (0, h.useCallback)(async () => {
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
              !!s && (0, e.jsx)($.JU, { children: s }),
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
                  children: (0, e.jsx)($.$n, {
                    className: nt().EyeDropperBtn,
                    onClick: m,
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
            d = (0, h.useRef)(null);
          return (
            (0, h.useEffect)(() => {
              const m = d.current?.ownerDocument ?? document,
                u = (f) => {
                  d.current && !d.current.contains(f.target) && s();
                },
                p = (f) => {
                  f.key === "Escape" && s();
                };
              return (
                m.addEventListener("pointerdown", u, !0),
                m.addEventListener("keydown", p, !0),
                () => {
                  m.removeEventListener("pointerdown", u, !0),
                    m.removeEventListener("keydown", p, !0);
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
            openColorPicker: (0, h.useCallback)((t, n) => {
              let s = null;
              const r = () => s?.Hide();
              s = (0, Bt.lX)(
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
          Be = a.n(ln),
          cn = a(32190),
          Pt = a.n(cn),
          Pe = a(76559),
          Gt = a(75909),
          be = a(53424),
          Tt = a(72604),
          dn = a(41735),
          gn = a.n(dn),
          at = a(14947),
          Me = a(9046),
          v = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          P = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? _(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && v(t, n, r), r;
          };
        const V = class Tn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, at.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, n, s, r) {
            let i =
                j.TS.COMMUNITY_BASE_URL +
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
                R.bP9,
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
              s = Pe.b.InitFromClanID(n.clanAccountID),
              r = pe.zU.GetHashAndExt(n) ?? "",
              i = [];
            for (let m = R.Bhc; m < R.bP9; ++m)
              i.push(Tn.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, m));
            const d = await Promise.all(i);
            (0, at.h5)(() => {
              for (let m = R.Bhc; m < R.bP9; ++m)
                d[m] &&
                  (this.m_curLocImageGroup.localized_images[m] =
                    pe.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      Me.wI.full,
                      m,
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
              const r = Pe.b.InitFromClanID(s.clanAccountID),
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
        P([at.sH], V.prototype, "m_curLocImageGroup", 2);
        let J = V;
        const K = new J();
        var ie = a(38410),
          xe = a(34592),
          we = a(75844),
          me = a(32093),
          je = a(72849),
          Oe = a(64),
          We = a(72739),
          Ke = a(82734);
        function fn(o, t) {
          const n = h.useRef(void 0),
            s = h.useCallback(
              (d) => {
                d.currentTarget.files.length > 0 &&
                  (o(d.currentTarget.files), (d.currentTarget.value = ""));
              },
              [o],
            ),
            r = h.useCallback(() => n.current.click(), []);
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
          const [t, n] = h.useState(!1),
            s = h.useCallback((u) => {
              ((u.dataTransfer.files && u.dataTransfer.files[0]) ||
                (u.dataTransfer.types && u.dataTransfer.types[0] == "Files")) &&
                n(!0);
            }, []),
            r = h.useCallback((u) => {
              Ke.NO(u) && n(!1);
            }, []),
            i = h.useCallback(() => n(!1), []),
            d = t ? In : void 0,
            m = h.useCallback(
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
              onDrop: m,
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
        function Un(o) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = o,
            [i, d] = Mn(t),
            [m, u] = fn(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, w.A)(
              d ? ot().DragAndDropContainerDragging : ot().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!n && n(),
              (0, e.jsx)("div", {
                children: r || (0, l.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: ot().ImageUploadBar,
                children: [
                  m,
                  (0, e.jsxs)("label", {
                    onClick: u,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, l.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: ot().SelectImageButton,
                        children: (0, l.we)("#selectimage_select_file"),
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
          Rn = a(27344),
          Ce = a.n(Rn),
          Nn = a(9472);
        function Fn(o) {
          const {
              imageUploader: t,
              fnUploadComplete: n,
              elOverrideDragAndDropText: s,
              forceResolution: r,
              elAdditonalButtons: i,
              rgRealmList: d,
            } = o,
            [m, u] = (0, z.q3)(() => [
              t.GetUploadImages(),
              Re.O.Get().GetCurEditLanguage(),
            ]),
            p = h.useCallback(
              async (D) => {
                let x = Array.from(D),
                  G = !0;
                for (let M = 0; M < x.length; M++) {
                  const A = x[M],
                    { language: E } = (0, ie.jj)(A?.name, u);
                  try {
                    const N = (0, ie.PD)(E, u, d);
                    (G = await t.AddImageForLanguage(A, N)),
                      G ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            M +
                            " file=" +
                            A.name,
                        ),
                        (0, Se.pg)(
                          (0, e.jsx)(ue.KG, {
                            strDescription: (0, l.we)(
                              "#ImagePicker_Error",
                              A.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (N) {
                    let O = (0, xe.H)(N);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + O.strErrorMsg,
                      O,
                    ),
                      (0, Se.pg)(
                        (0, e.jsx)(ue.KG, {
                          strDescription: (0, l.we)(
                            "#EventError_Code",
                            O.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return G;
              },
              [u, t, d],
            ),
            f = h.useMemo(
              () =>
                i instanceof Array
                  ? i
                  : [
                      (0, e.jsx)(
                        h.Fragment,
                        { children: i },
                        "elAdditonalButtons",
                      ),
                    ],
              [i],
            );
          (0, z.q3)(() =>
            m.map((D) => ({ a: D.GetCurrentImageOption(), b: D.language })),
          );
          const I = async () => {
            const D = await t.UploadAllImages(r);
            n?.(D);
          };
          return (0, e.jsxs)(Un, {
            onDropFiles: p,
            elAdditonalButtons: f,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(h.Fragment, {
                children: (0, e.jsx)("div", {
                  className: Ce().UploadPreviewCtn,
                  children: m.map((D) =>
                    (0, e.jsx)(
                      _n,
                      {
                        asset: D,
                        forceResolution: r,
                        fnOnRemove: () => t.DeleteUploadImage(D),
                        languageRealms: d,
                      },
                      "arttabupload_" + D.filename + "_" + D.uploadTime,
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
            [s] = (0, z.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: Ce().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)($.$n, {
                  style: { margin: "8px" },
                  onClick: n,
                  disabled: !r,
                  children: (0, l.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)($.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: i,
                  children: (0, l.we)("#ImageUpload_Clear"),
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
                  _n,
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
        const _n = (0, we.PA)(Hn);
        function Hn(o) {
          const t = (x) => {
              if (x instanceof Oe.M7) {
                x.ResetImage();
                const G = window,
                  M = (0, e.jsx)(kn.q, {
                    ownerWin: G,
                    uploadFile: x,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || je.bg.dU,
                  });
                (0, Se.HT)(M, G, "CropModal", {
                  strTitle: (0, l.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  x.fileType,
                  JSON.stringify(x.GetCurrentImageOption()),
                );
            },
            { asset: n, fnOnRemove: s, languageRealms: r } = o,
            i = n.ImageOptions?.map((x) => {
              let G = x?.fnGetLabelText(),
                M;
              x.bEnforceDimensions && (G += ` - ${x.width}x${x.height}`),
                x.bDeprecated &&
                  ((G += ` ${(0, l.we)("#ImageUpload_Deprecated")}`),
                  (M = (0, l.we)("#ImageUpload_Deprecated_ttip")));
              let A;
              return (
                (n.BIsOriginalMinimumDimensions(x) &&
                  n.FileTypeMatchesImageTypes(x)) ||
                  (A = Ce().ImageDimensionTooSmall),
                { label: G, data: x, strOptionClass: A, tooltip: M }
              );
            }).filter((x) => !x.data.bHiddenFromDropdown),
            d = {
              pending: (0, l.we)("#ImageUpload_Pending"),
              waiting: (0, l.we)("#ImageUpload_Waiting"),
              uploading: (0, l.we)("#ImageUpload_Uploading"),
              processing: (0, l.we)("#ImageUpload_Processing"),
              success: (0, l.we)("#ImageUpload_SuccessCard"),
              failed: (0, l.we)("#ImageUpload_Failed"),
            },
            m = n.BSupportsLanguages()
              ? Vn(
                  l.A0.GetLanguageListForRealms(
                    r ?? [me.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            u = n.IsValidAssetType(o.forceResolution, o.forceFileType),
            p = n.status == "pending";
          let f = d[n.status];
          n.status == "pending" &&
            (u.needsCrop
              ? (f = (0, l.we)("#ImageUpload_NeedsCrop"))
              : u.error && (f = (0, l.we)("#ImageUpload_Invalid")));
          let I;
          const D = n.GetCurrentImageOption();
          return (
            D && (I = i?.find((x) => x.data.sKey == D.sKey)?.data),
            I || (I = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: Ce().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: Ce().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(pt.sED, {}),
                }),
                (0, e.jsx)(Wn, { asset: n }),
                m &&
                  (0, e.jsx)($.m, {
                    strDropDownClassName: F().DropDownScroll,
                    rgOptions: m,
                    selectedOption: n.language,
                    onChange: (x) => (n.language = x.data),
                    disabled: !p,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)($.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: I,
                    onChange: (x) => n.SetCurrentImageOption(x.data),
                    disabled: !p,
                  }),
                p &&
                  u.warnings?.map((x, G) =>
                    (0, e.jsx)(
                      "div",
                      { className: Ce().UploadPreviewWarning, children: x },
                      `warning${G}`,
                    ),
                  ),
                p &&
                  u.messages?.map((x, G) =>
                    (0, e.jsx)(
                      "div",
                      { className: Ce().UploadPreviewMessage, children: x },
                      `message${G}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, w.A)({
                    [F().FlexColumnContainer]: !0,
                    [Ce().UploadPreviewError]: n.status == "failed",
                  }),
                  children: [
                    f,
                    (0, Nn.o)(n.status) &&
                      (0, e.jsx)("div", {
                        className: Fe().FlexCenter,
                        children: (0, e.jsx)(ze.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Ce().UploadPreviewError,
                  children: n.message,
                }),
                p &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: Ce().UploadPreviewError,
                    children: u.error,
                  }),
                p &&
                  u.needsCrop &&
                  (0, e.jsx)($.jn, {
                    onClick: () => t(n),
                    children: (0, l.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function Wn(o) {
          const { asset: t } = o;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: Ce().PreviewImgCtn,
                onClick: (n) =>
                  (0, Se.pg)((0, e.jsx)(Kn, { asset: t }), (0, Ke.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: Ce().PreviewImgInfo,
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
                className: Ce().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: Ce().PreviewImgInfo,
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
            if (s == R.X51) continue;
            const r = (0, l.we)("#Language_" + (0, R.LgB)(s));
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
        function xn(o, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(o)}`
            : `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetHashAndExt(o)}`;
        }
        function mo(o, t, n) {
          let s = "";
          const r = xn(t);
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
            const i = xn(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          o.InsertText(s);
        }
        var Qn = a(55436),
          Yn = a(53732),
          De = a.n(Yn),
          Cn = a(49460);
        function Zn(o) {
          const { fnSetImageSearch: t } = o,
            n = (0, h.useRef)(null);
          return (0, e.jsx)("div", {
            className: Cn.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: n,
              className: Cn.SearchInput,
              type: "text",
              placeholder: (0, l.we)("#ImagePicker_Search"),
              onChange: (s) => t(s.currentTarget.value),
              onKeyDown: (s) => {
                s.key == "Escape" &&
                  (t(""), n.current && (n.current.value = ""));
              },
            }),
          });
        }
        const Jn = h.memo(function (t) {
          const {
            fileNameSearch: n,
            clanAccountID: s,
            imageInsertCallBack: r,
            fnOnExpandImage: i,
            showImageActions: d = !0,
            InternalOpenLocalizeImageGroup: m,
          } = t;
          return (0, e.jsx)(Dn, {
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
                    fnOnOpenLocalizedImageGroup: m,
                    OnImageClick: i,
                  },
                  f.imageid,
                ),
              ),
          });
        });
        function Dn(o) {
          const { clanAccountID: t, fileNameSearch: n, children: s } = o,
            r = (0, be.n9)(t),
            i = n.trim().toLowerCase() || "",
            d = be.pU.GetFilteredClanImagesList(r, i);
          if (d.length == 0) {
            const m = Pe.b.InitFromClanID(t);
            let u = be.pU.GetLoadState(m);
            return u && u.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: De().ResultNotification,
                    children:
                      i.length > 0
                        ? (0, l.we)("#ImagePicker_EmptySearch")
                        : (0, l.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : u && u.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: De().ErrorCode,
                      children: (0, l.we)("#ImagePicker_Error", u.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: De().ResultNotification,
                      children: (0, l.we)("#Loading"),
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
          return jsx(Dn, {
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
            [m, u] = h.useState(!1),
            p = () => s(t, Mt.k_eInsertFullImage),
            f = () => s(t, Mt.k_eInsertVideo),
            I = () => s(t, Mt.k_eInsertThumbnail),
            D = (de) => {
              t.url &&
                (de.dataTransfer.setData("text", t.url),
                be.pU.GetClanImageDragListener().forEach((_e) => {
                  let ye = Pe.b.InitFromClanID(t.clanAccountID);
                  _e(ye, !0);
                }));
            },
            x = (de) => {
              t.url &&
                be.pU.GetClanImageDragListener().forEach((_e) => {
                  let ye = Pe.b.InitFromClanID(t.clanAccountID);
                  _e(ye, !1);
                });
            },
            G = (de) => {
              (0, Se.pg)(
                (0, e.jsx)(ue.o0, {
                  strTitle: (0, l.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: A,
                  onCancel: E,
                  closeModal: E,
                  children: (0, e.jsxs)(h.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, l.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, l.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, Ke.uX)(de) ?? window,
              );
            },
            M = (de) => {
              console.log("ClanImageWrapper on delete error: " + de),
                (0, Se.pg)(
                  (0, e.jsx)(ue.KG, {
                    strTitle: (0, l.we)("#Error_FailureNotice"),
                    strDescription: (0, l.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: de }),
                  }),
                  window,
                );
            },
            A = () => {
              u(!0);
              let de = Pe.b.InitFromClanID(t.clanAccountID);
              be.pU
                .DeleteClanImage(de, t)
                .then((_e) => {
                  _e.success != Tt.R && M((0, xe.H)(_e).strErrorMsg), u(!1);
                })
                .catch((_e) => {
                  M((0, xe.H)(_e).strErrorMsg), u(!1);
                }),
                E();
            },
            E = () => {},
            N = () => {
              r && r(t);
            },
            O = t.file_name ? t.file_name : "",
            H = (0, Qn.r)(n, O, String(t.imageid), De().Hilight),
            te = pe.zU.BIsClanImageVideo(t),
            ne = i && !m && !te,
            he = i && !m && !te,
            Ae = i && !m && te,
            re = i && !m && !te;
          return (0, e.jsx)(yt.K, {
            placeholderHeight: "100vh",
            className: De().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: De().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: De().ImageWrapper,
                  style: {
                    backgroundImage: te ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: D,
                  onDragEnd: x,
                  onDoubleClick: p,
                  onClick: N,
                  children: (0, e.jsx)(En, {
                    clanImage: t,
                    className: De().VideoBackground,
                  }),
                }),
                ne &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: p,
                    children: (0, l.we)("#ImagePicker_FullSize"),
                  }),
                m &&
                  (0, e.jsx)(ze.t, {
                    size: "medium",
                    className: De().FloatingThrobber,
                  }),
                he &&
                  (0, e.jsx)("span", {
                    className: De().Thumb,
                    onClick: I,
                    children: (0, l.we)("#ImagePicker_Thumbnail"),
                  }),
                re &&
                  d &&
                  (0, e.jsx)($n, {
                    bDeleting: m,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: d,
                  }),
                Ae &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: f,
                    children: (0, l.we)("#ImagePicker_Video"),
                  }),
                !m &&
                  (0, e.jsx)("span", {
                    className: De().Delete,
                    onClick: G,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: De().ImageWrapperFilename,
                  title: O,
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
            { data: r } = (0, c.hM)(t.clanAccountID);
          return s || !r?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, w.A)(De().Localized, F().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, l.we)("#ImagePicker_Localized"),
              });
        }
        function En(o) {
          const { clanImage: t, className: n } = o;
          return pe.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: n,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == je.bg.nn ? "mp4" : "webm"),
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
                  ? jsx(En, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function ea(o) {
          const { clanSteamID: t, closeModal: n, OnClanImageSelected: s } = o,
            r = h.useCallback(
              (m, u) => {
                s?.(m, u), n?.();
              },
              [s, n],
            ),
            [i, d] = h.useState("");
          return (0, e.jsxs)(ue.o0, {
            strTitle: (0, l.we)("#ImagePicker_Images"),
            strDescription: (0, l.we)("#ImagePicker_DoubleClickToSelect"),
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
                    children: [(0, l.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: ot().SelectImageButton,
                    children: (0, l.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (s) => {
                  (0, Se.pg)(
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
            [m] = (0, z.q3)(() => [Re.O.Get().GetCurEditLanguage()]),
            u = (0, Gt.zO)(t, n, s),
            p = o.uploaderOverride || u,
            [f, I] = h.useState(!1),
            D = h.useCallback(
              async (M, A) => {
                if (!f) {
                  I(!0);
                  try {
                    const { language: E } = (0, ie.jj)(M.file_name ?? "", m),
                      N = (0, ie.PD)(E, m, d);
                    await p.AddExistingClanImage(M, N);
                  } catch (E) {
                    let N = (0, xe.H)(E);
                    console.error("AddExistingClanImage: " + N.strErrorMsg, N),
                      (0, Se.pg)(
                        (0, e.jsx)(ue.KG, {
                          strDescription: (0, l.we)(
                            "#EventError_Code",
                            N.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  I(!1);
                }
              },
              [f, p, m, d],
            ),
            x = h.useMemo(
              () =>
                r
                  ? [
                      [
                        (0, e.jsx)(
                          ta,
                          { clanSteamID: t, OnClanImageSelected: D },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [D, r, t],
            ),
            G = (M) => {
              for (const A of M) {
                const E = A.uploadResult;
                if (E?.origimagehash) {
                  const N = (0, ie.PD)(E.language, m, d);
                  K.AddLocalizeImageUploaded(E.origimagehash, N);
                } else {
                  const N = be.pU.GetClanImageByImageHash(
                      t,
                      E?.image_hash ?? "",
                    ),
                    O = A.image.GetCurrentImageOption();
                  if (N && O) {
                    const H = (0, ie.PD)(A.image.language, m, d);
                    i(O.artworkType, N, H);
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
                      string: (0, l.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : x,
            fnUploadComplete: G,
          });
        }
        var vt = a(25279),
          Sn = a(84676),
          aa = a(25359),
          ve = a.n(aa),
          oa = a(24806);
        function bn(o) {
          const {
              clanImage: t,
              closeModal: n,
              lang: s,
              fnOnArtworkLangChange: r,
              realms: i,
              fnLangHasData: d,
            } = o,
            [m, u] = (0, h.useState)(s),
            p = Pe.b.InitFromClanID(t.clanAccountID),
            f = (0, z.q3)(() =>
              pe.zU.GenerateURLFromHashAndExt(p, pe.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(ue.o0, {
            strTitle: (0, l.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, l.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, m),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, w.A)(F().FlexColumnContainer, ve().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: ve().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: ve().ArtworkPreview,
                    src: f,
                  }),
                }),
                (0, e.jsx)(oa.Ng, {
                  selectedLang: m,
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
          (0, be.mr)(t.GetAccountID());
          const i = h.useMemo(() => {
              let p = new Array();
              const f = l.A0.GetLanguageListForRealms([
                me.TU.k_ESteamRealmGlobal,
                me.TU.k_ESteamRealmChina,
              ]);
              for (const I of f) {
                const D = n(I);
                if (D) {
                  const x = (0, R.LgB)(I),
                    G = (0, l.we)("#Language_" + x);
                  p.push({ lang: I, strLang: x, locLang: G, imgHash: D });
                }
              }
              return (
                (p = p.sort((I, D) =>
                  I.locLang > D.locLang ? 1 : I.locLang < D.locLang ? -1 : 0,
                )),
                p
              );
            }, [n]),
            [d, m, u] = (0, mn.uD)();
          return (0, e.jsxs)("div", {
            className: ve().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: ve().SelectImageTitle,
                children: (0, l.we)("#selectimage_uploaded_languages"),
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
                (0, e.jsxs)($.$n, {
                  onClick: m,
                  children: [
                    (0, l.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(ua.o, {
                      tooltip: (0, l.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(ue.EN, {
                active: d,
                children: (0, e.jsx)(ue.o0, {
                  strTitle: (0, l.we)("#Dialog_AreYouSure"),
                  strDescription: (0, l.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: u,
                  onOK: () => {
                    for (let p = 0; p < R.bP9; p++) s && r && s(p) && r(p);
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
            [m, u] = (0, z.q3)(() => {
              const p = be.pU.GetClanImageByImageHash(t, n.imgHash);
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
              let f = (0, R.sfN)(p.currentTarget.id);
              r(f);
            },
            children: [
              (0, e.jsx)("div", { className: u, children: n.locLang }),
              (0, e.jsxs)("span", {
                className: ve().LanguageOptions,
                children: [
                  !!m &&
                    (0, e.jsx)("a", {
                      href: m,
                      target: "_blank",
                      children: (0, e.jsx)(He.he, {
                        toolTipContent: (0, l.we)(
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
            [m, u, p] = (0, mn.uD)(),
            f = (0, z.q3)(() => {
              const I = r(n.lang);
              return (
                (0, Je.wT)(
                  !I || !I.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + I,
                ),
                be.pU.GetClanImageByImageHash(t, I)
              );
            });
          if (!f) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(He.he, {
                toolTipContent: (0, l.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: ga,
                  onClick: () => u(),
                }),
              }),
              (0, e.jsx)(Q.tH, {
                children: (0, e.jsx)(ue.EN, {
                  active: m,
                  children: (0, e.jsx)(bn, {
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
                toolTipContent: (0, l.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: da.A,
                  onClick: r,
                }),
              }),
              (0, e.jsx)(Q.tH, {
                children: (0, e.jsx)(ue.EN, {
                  active: s,
                  children: (0, e.jsx)(ue.o0, {
                    strTitle: (0, l.we)("#selectimage_remove_image"),
                    strDescription: (0, l.we)(
                      "#selectimage_remove_details",
                      (0, l.we)("#Language_" + (0, R.LgB)(n.lang)),
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
          Ee = a.n(Ia),
          _a = a(88812);
        function xa(o) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: d,
            } = o,
            m = (0, fa.c5)(),
            u = h.useCallback(
              (E) => {
                E.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            p = d || (0, R.sfN)(j.TS.LANGUAGE),
            [f, I, D] = (0, z.q3)(() => [
              t.GetSummaryWithFallback(p),
              t.GetNameWithFallback(p),
              t.BShowLibrarySpotlightText(),
            ]);
          let x = "spotlight",
            G = Me.wI.spotlight_main;
          (t.appid == 2434320 || j.TS.EUNIVERSE == R.Rv) &&
            ((x = m
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (G = Me.wI.full));
          let M =
            (0, _a.WC)(n !== void 0 ? void 0 : t, x, p, G) ??
            (n !== void 0 ? [n] : []);
          i && M && (M = i(M));
          const A = f.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(h.Fragment, {
            children: (0, e.jsx)("div", {
              className: Ee().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(L.Z, {
                className: (0, w.A)(
                  Ee().AppDetailsSpotlightContainer,
                  Ee().MajorEventContainer,
                ),
                onActivate: u,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: Ee().MajorEventBackground,
                    children: (0, e.jsx)(hn.c, {
                      className: Ee().MajorEventImageBackgroundBlur,
                      rgSources: M,
                      onIncrementalError: (E, N, O) => r && r(N),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: Ee().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(hn.c, {
                        className: Ee().MajorEventImage,
                        rgSources: M,
                        onIncrementalError: (E, N, O) => r && r(N),
                      }),
                      (0, e.jsx)("div", {
                        className: Ee().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: Ee().MajoreEventImageContentContainer,
                        children:
                          D &&
                          (0, e.jsxs)("div", {
                            className: Ee().MajorEventContent,
                            children: [
                              (0, e.jsx)(hn.c, {
                                className: Ee().MajorEventSpotlightBackground,
                                rgSources: M,
                                onIncrementalError: (E, N, O) => r && r(N),
                              }),
                              (0, e.jsxs)("div", {
                                className: Ee().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Ee().MajorEventTitle,
                                    children: I,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Ee().MajorEventSummary,
                                    children: A,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: Ee().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Ca = a(79949),
          Ie = a.n(Ca);
        function Da(o) {
          const {
              langOverride: t,
              artworkType: n,
              fnOnLanguagePreviewChange: s,
              clanSteamID: r,
              eventModel: i,
              partnerEventStore: d,
              fnOnRemoveImage: m,
              fnOnArtworkLangChange: u,
              realms: p,
              fnLangHasData: f,
              fnGetImageHashAndExt: I,
            } = o,
            D = I(n, t),
            x = D
              ? pe.zU.GenerateURLFromHashAndExtAndLang(r, D, Me.wI.full, t)
              : "",
            [G] = (0, z.q3)(() => [Aa(n, I)]);
          return G == 0
            ? (0, e.jsxs)("div", {
                className: ve().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(jn, {
                      imgURL:
                        j.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(wn, {
                      imgURL:
                        j.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(n) &&
                    (0, e.jsx)(Ea, {
                      langOverride: t,
                      artworkType: n,
                      eventModel: i,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, l.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: ve().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(jn, {
                      imgURL: x,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(wn, {
                      imgURL: x,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Ut, { imgURL: x, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Ut, { imgURL: x, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Ut, { imgURL: x, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(ba, {
                      imgURL: x,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(ja, { imgURL: x }),
                  n === "sale_overlay" && (0, e.jsx)(wa, { imgURL: x }),
                  Me.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: ca.PreviewImg,
                      src: K.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(ft, { imgURL: x }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(ft, { imgURL: x }),
                  n === "sale_logo" && (0, e.jsx)(ft, { imgURL: x }),
                  n === "bestofyear_banner" && (0, e.jsx)(ft, { imgURL: x }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(ft, { imgURL: x }),
                  (0, e.jsx)(ma, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: m,
                    fnOnArtworkLangChange: u,
                    realms: p,
                    fnLangHasData: f,
                    fnGetImageHash: (M) => un(I(n, M) ?? ""),
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
        function Ea(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = vt.Fj[t],
            i = h.useMemo(
              () =>
                Sa(
                  (0, l.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Ut, { lang: n, imgURL: i, event: s });
        }
        function Sa(o, t) {
          const r = document.createElement("canvas");
          (r.width = 780), (r.height = 200);
          const i = r.getContext("2d"),
            d = 20;
          for (let p = 0; p < 200; p += d)
            for (let f = 0; f < 780; f += d)
              (i.fillStyle =
                (f / d + p / d) % 2 === 0 ? "#a405e3ff" : "#000000"),
                i.fillRect(f, p, d, d);
          const m = i.createLinearGradient(0, 0, 780, 0);
          m.addColorStop(0, "rgba(32,32,32,0.8)"),
            m.addColorStop(1, "rgba(60,60,60,0.8)"),
            (i.fillStyle = m),
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
        function jn(o) {
          const { imgURL: t, eventModel: n, langOverride: s } = o,
            r = (0, Re.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(la.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function wn(o) {
          const { lang: t, eventModel: n, partnerEventStore: s } = o,
            r = (0, sa.LJ)(),
            [i, d, m, u, p] = (0, z.q3)(() => [
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
                languageOverride: Re.O.Get().GetCurEditLanguage(),
              })
            : (0, l.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Ie().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Ie().ExampleSectionTitle,
                children: (0, l.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, w.A)(
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
                              (0, l.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Ie().TextSubTitle,
                            children:
                              m ||
                              (0, l.we)("#selectimage_display_event_subtitle"),
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
              u != R.Fwr &&
                (0, e.jsxs)(h.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Ie().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Ie().ExampleSectionTitle,
                      children: (0, l.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, w.A)(
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
        const Ut = (o) => {
            const [t] = (0, Sn.t7)(o.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Ie().SpotlightExample,
              children: (0, e.jsx)(xa, {
                event: o.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: o.imgURL,
                langOverride: o.lang,
              }),
            });
          },
          ba = (o) => {
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
          ja = (o) =>
            (0, e.jsx)("div", {
              className: Ie().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          wa = (o) =>
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
        function Aa(o, t) {
          let n = 0;
          for (let s = R.Bhc; s < R.bP9; ++s)
            (t(o, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var ya = Object.defineProperty,
          La = Object.getOwnPropertyDescriptor,
          An = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? La(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && ya(t, n, r), r;
          };
        const Ba =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Pa = ((o) => (
          (o[(o.k_None = 0)] = "k_None"),
          (o[(o.k_Suggested = 1)] = "k_Suggested"),
          (o[(o.k_Required = 2)] = "k_Required"),
          (o[(o.k_Requested = 3)] = "k_Requested"),
          o
        ))(Pa || {});
        function Ga(o) {
          const {
              artworkType: t,
              headerHint: n,
              appid: s,
              fnToggleMinimize: r,
              realms: i,
              eventModel: d,
              fnLangHasData: m,
              fnGetImageHashAndExt: u,
              fnSetImageURL: p,
              partnerEventStore: f,
            } = o,
            [I] = (0, Sn.t7)(s, { include_assets: !0 }),
            [D, x] = (0, z.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            G = D == R.ajI;
          let M = null;
          n === 2
            ? (M = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, l.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (M = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, l.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (M = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, l.we)("#EventEditor_Requested"),
                }));
          let A = null;
          t === "capsule"
            ? G
              ? (A = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (A = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!x &&
                      (0, e.jsxs)("div", {
                        className: ve().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, l.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${j.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, l.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (A = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, l.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, l.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (A = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (A = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, l.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, l.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (A = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, l.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (A = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: F().EventElementRequired,
                              children: (0, l.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, l.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, l.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, l.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, l.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, l.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, l.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, l.we)(
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
                          (A = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, l.we)("#selectimage_tip_hero_1"),
                              }),
                              !I.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Ot.ErrorStylesBackground,
                                  children: (0, l.we)(
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
                          ? (A = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, l.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, l.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Ba,
                                      target: j.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, l.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (A = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: F().EventElementOptional,
                                    children: (0, l.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, l.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, l.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (A = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: F().EventElementOptional,
                                      children: (0, l.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, l.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, l.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, l.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (A = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, l.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, l.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, l.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, l.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (A = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: F().EventElementOptional,
                                          children: (0, l.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, l.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, l.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (A = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: F().EventElementRequired,
                                          children: (0, l.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, l.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, l.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const E = vt.Fj[o.artworkType].width,
            N = vt.Fj[o.artworkType].height;
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
                    M,
                    r &&
                      (0, e.jsx)($.$n, {
                        onClick: r,
                        children: (0, e.jsx)(He.he, {
                          toolTipContent: (0, l.we)(
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
                  className: (0, w.A)(ve().SelectImageBlock, ve().Tips),
                  children: [
                    A,
                    !!(E && N) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, l.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, l.PP)(
                            "#selectimage_tip1",
                            (0, vt.qj)(E),
                            (0, vt.qj)(N),
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
                      (0, e.jsx)($.$n, {
                        onClick: (O) => {
                          (0, Se.pg)(
                            (0, e.jsx)(Ta, {
                              fnRemoveAllArtwork: o.fnRemoveAllArtwork,
                            }),
                            (0, Ke.uX)(O) ?? window,
                          );
                        },
                        children: (0, l.we)("#Sale_RemoveAll"),
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
                  fnLangHasData: m,
                  partnerEventStore: f,
                }),
            ],
          });
        }
        function Ta(o) {
          const { fnRemoveAllArtwork: t, closeModal: n } = o;
          return (0, e.jsx)(ue.o0, {
            strTitle: (0, l.we)("#Sale_RemoveAll"),
            strDescription: (0, l.we)("#ImageUpload_DeleteAll_Confirm"),
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
              eventModel: m,
              appid: u,
              partnerEventStore: p,
            } = o,
            f = t === "localized_image_group",
            [I, D] = h.useState((0, Re.E)()),
            [x, G] = h.useState(new Array()),
            M = h.useCallback(
              (E, N, O) => {
                let H = [];
                x.find((ne) => ne.clanImage.imageid == E.imageid)
                  ? (H = x.map((ne) =>
                      ne.clanImage.imageid == E.imageid
                        ? { clanImage: E, lang: N }
                        : ne,
                    ))
                  : O && (H = x.concat({ clanImage: E, lang: N })),
                  G(H);
              },
              [x],
            ),
            A = h.useCallback(
              (E, N, O) => {
                (0, at.h5)(() => {
                  un(i(t, N) ?? "") == E.image_hash && d(t, null, N),
                    d(t, E, O),
                    M(E, O, !1);
                });
              },
              [i, t, d, M],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)($.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${j.TS.PARTNER_BASE_URL}admin/game/editbyappid/${u}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, l.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(kt, {
                    list: x,
                    fnOnArtworkLanguageChange: A,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, w.A)(
                        ve().SelectImageBlock,
                        ve().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Da, {
                        eventModel: m,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (E) => {
                          E != I && D(E);
                        },
                        langOverride: I,
                        fnOnArtworkLangChange: f ? null : A,
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
        let kt = class extends h.Component {
          ShowLangChangeDialog(o, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, Se.pg)(
              (0, e.jsx)(bn, {
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
                let i = (0, l.we)("#Language_" + (0, R.LgB)(r));
                o.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: F().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, l.we)(
                            "#ImageUpload_Success_Mapping",
                            s.file_name ?? "",
                            i,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(s, r),
                          children: (0, l.we)(
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
        An([Ne.oI], kt.prototype, "ShowLangChangeDialog", 1),
          (kt = An([we.PA], kt));
        var Oa = a(6658);
        function Ua(o) {
          const {
              clanSteamID: t,
              appid: n,
              eventModel: s,
              realms: r,
              loc_images: i,
              artworkType: d,
              fnLangHasData: m,
              closeModal: u,
              fnSetImageURL: p,
              partnerEventStore: f,
            } = o,
            [I, D] = (0, h.useState)(!1),
            x = (0, Gt.zO)(t, d),
            G = t.GetAccountID(),
            [M] = (0, z.q3)(() => [
              x.GetFilesToUpload().length - x.GetCompletedFiles(),
            ]);
          (0, h.useEffect)(() => {
            D(!1),
              K.ClearImageGroup(),
              i?.forEach((O, H) => {
                const te = Pe.b.InitFromClanID(G);
                if (K.GetAllLocalizedGroupImages().length == 0) {
                  const ne = O && pe.zU.GetHashFromHashAndExt(O),
                    he = ne && be.pU.GetClanImageByImageHash(te, ne);
                  he && K.SetPrimaryImageForImageGroup(he, d);
                }
                K.SetLocalizedImageGroupAtLang(H, te, O ?? null);
              }),
              D(!0);
          }, [i, G, d]);
          const A = (0, h.useCallback)(
              (O, H, te = R.Bhc) => {
                const ne = Pe.b.InitFromClanID(G),
                  he = pe.zU.GetHashAndExt(H ?? null);
                if (K.GetAllLocalizedGroupImages().length == 0) {
                  const Ae = he && pe.zU.GetHashFromHashAndExt(he),
                    re = Ae && be.pU.GetClanImageByImageHash(ne, Ae);
                  re && K.SetPrimaryImageForImageGroup(re, O);
                }
                K.SetLocalizedImageGroupAtLang(te, ne, he);
              },
              [G],
            ),
            E = (0, h.useCallback)((O, H) => {
              const ne = K.GetLocalizedImageGroupForEdit()?.localized_images[H];
              return ne && ne.split("/").pop();
            }, []),
            N = () => {
              const O = K.GetLocalizedImageGroupForEdit();
              for (let H = R.Bhc; H < R.bP9; ++H) {
                const te = O?.localized_images[H];
                if (te) {
                  const ne = te.split("/").pop() || "";
                  p(
                    d,
                    {
                      image_hash: un(ne),
                      clanAccountID: G,
                      file_type: (0, Oa.yh)(ne) ?? je.bg.w3,
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
            className: (0, w.A)(Ot.NotTooWideModal, Ot.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, l.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: M > 0,
            onOK: N,
            strOKButtonText:
              M > 0 ? (0, l.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              I
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(na, {
                        clanSteamID: t,
                        rgSupportArtwork: [d],
                        fnSetImageURL: A,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: x,
                      }),
                      (0, e.jsx)(Ga, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: d,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => K.ClearImageGroup(),
                        fnSetImageURL: A,
                        fnGetImageHashAndExt: E,
                        fnLangHasData: m,
                        partnerEventStore: f,
                      }),
                    ],
                  })
                : (0, e.jsx)(ze.t, {
                    size: "medium",
                    position: "center",
                    string: (0, l.we)("#Loading"),
                  }),
              o.children,
            ],
          });
        }
        function ka(o) {
          const { setting: t, fnUpdateSetting: n, label: s } = o,
            r = h.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, l.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: T.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "no-repeat",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var Ra = a(94381);
        function Na(o) {
          const {
              closeModal: t,
              imgGroup: n,
              fnUpdateImageGroup: s,
              eventModel: r,
            } = o,
            { openColorPicker: i } = rn(),
            [d, m] = (0, h.useState)(() => n),
            [u, p, f, I, D, x, G, M] = (0, z.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [A] = (0, h.useState)(() => Fa(d.localized_background_art ?? {}));
          return (0, e.jsxs)(Ua, {
            strLocalizedTitle: (0, l.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, l.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: qt.O3,
            artworkType: "localized_background_art",
            realms: G,
            loc_images: A,
            fnLangHasData: (E) => !!A[E],
            fnGetImageHash: (E, N) => A[N],
            fnSetImageURL: async (E, N, O) => {
              m((H) => {
                const te = { ...H.localized_background_art },
                  ne = pe.zU.GetHashAndExt(N);
                return (
                  ne ? (te[(0, R.LgB)(O)] = ne) : delete te[(0, R.LgB)(O)],
                  { ...H, localized_background_art: te }
                );
              });
            },
            onOK: () => {
              m((E) => (s(E), t && setTimeout(t, 1), { ...E }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Be().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Be().ImageOptions,
                    children: [
                      (0, e.jsx)(ka, {
                        setting: u,
                        fnUpdateSetting: (E) => {
                          m(
                            E !== "no-repeat"
                              ? {
                                  ...d,
                                  repeat_setting: E,
                                  scaling_setting: "auto",
                                }
                              : { ...d, repeat_setting: E },
                          );
                        },
                        label: (0, l.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(za, {
                        scaling_setting: p ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (E) => m({ ...d, scaling_setting: E }),
                      }),
                      p != "cover" &&
                        (0, e.jsx)(Wa, {
                          position_settings: x,
                          fnUpdateSetting: (E) =>
                            m({ ...d, position_setting: E }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Be().ColorOptions,
                    children: [
                      (0, e.jsx)($.JU, {
                        children: (0, l.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Pt().ColorCtn,
                        children: [
                          (0, e.jsx)($.$n, {
                            style: { backgroundColor: f },
                            onClick: (E) =>
                              i(E, {
                                color: f ?? "",
                                onChange: (N) =>
                                  m({ ...d, background_color1: N }),
                              }),
                            children: (0, l.we)(
                              f === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)($.$n, {
                            onClick: () =>
                              m({ ...d, background_color1: void 0 }),
                            children: (0, l.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Be().SwapColorsCtn,
                        children: (0, e.jsx)($.$n, {
                          onClick: () =>
                            m({
                              ...d,
                              background_color1: I,
                              background_color2: f,
                            }),
                          children: (0, l.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      D !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Pt().ColorCtn,
                          children: [
                            (0, e.jsx)($.$n, {
                              style: { backgroundColor: I },
                              onClick: (E) =>
                                i(E, {
                                  color: I ?? "",
                                  onChange: (N) =>
                                    m({ ...d, background_color2: N }),
                                }),
                              children: (0, l.we)(
                                I === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)($.$n, {
                              onClick: () =>
                                m({ ...d, background_color2: void 0 }),
                              children: (0, l.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(Ha, {
                        gradient: D ?? "top-to-bottom",
                        fnUpdateSetting: (E) =>
                          m({ ...d, gradient_setting: E }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(Xt, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(Ra.S, {
                  checked: !!M,
                  onChange: (E) => {
                    d.randomize_section_order = E;
                  },
                  children: (0, l.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function Fa(o) {
          const t = tt.$Y([], R.bP9, null);
          for (const n in o) {
            const s = (0, R.sfN)(n);
            s != R.xPp && (t[s] = o[n]);
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
            i = h.useMemo(() => {
              const d = [];
              return (
                d.push({
                  label: (0, l.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                d.push({
                  label: (0, l.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                d.push({
                  label: (0, l.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                d
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, l.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: T.DropDownScroll,
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
            r = h.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, l.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: T.DropDownScroll,
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
            r = h.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, l.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: T.DropDownScroll,
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
            [i, d] = (0, h.useState)(t.BIsBackgroundImageEnabled()),
            [m, u, p] = (0, Ne.uD)(),
            f = (0, z.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, w.A)(Be().Ctn, r && T.ValveOnlyBackground),
            children: (0, e.jsxs)(Q.tH, {
              children: [
                (0, e.jsx)($.Yh, {
                  label: (0, l.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (I) => {
                    d(I), t.SetBackgroundImageEnabled(I);
                  },
                }),
                i
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)($.Yh, {
                          label: (0, l.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, l.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: n,
                          onChange: s,
                        }),
                        (0, e.jsx)($.Yh, {
                          label: (0, l.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, l.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: f,
                          onChange: (I) =>
                            t.SetSalePageLastCoverSectionUntilEnd(I),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)($.$n, {
                          onClick: u,
                          children: (0, l.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(ue.EN, {
                          active: m,
                          children: (0, e.jsx)(ue.o0, {
                            strTitle: (0, l.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, l.we)(
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
                      children: (0, l.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${bt.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, l.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const pn = h.forwardRef(function (t, n) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: r,
              groupIndex: i,
              imgGroup: d,
              eventModel: m,
              nTabIndex: u,
            } = t,
            p = (0, Re.E)(),
            [f, I, D, x] = (0, z.q3)(() => [
              d && s.mapGroupToSections.get(d.background_id),
              (d &&
                s.mapGroupToSections.get(d.background_id)?.sectionUniqueIDs) ??
                [],
              u != null
                ? r?.GetTabLastCoverSectionUntilEnd(u)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              u != null ? r?.GetTabGroupCount(u) : r?.GetSalePageGroupCount(),
            ]),
            G = D && i + 1 === x,
            [M, A, E] = (0, Ne.uD)(),
            [N, O, H] = (0, Ne.uD)();
          let te;
          f?.nUniqueIDNextSaleSection &&
            (te = (0, Xe.h_)(
              W.HY,
              r.GetSaleSectionByID(f?.nUniqueIDNextSaleSection),
              p,
              m,
              f.nSaleSectionLastIndex + 1,
            ));
          let ne;
          if (f && I?.length > 1) {
            const he = I[I.length - 1];
            ne = (0, Xe.h_)(
              W.HY,
              r?.GetSaleSectionByID(he),
              p,
              m,
              f.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)($t.qx, {
            bStartMinimized: !1,
            title: (0, l.we)(
              u != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              i + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: n,
              children: [
                (0, e.jsx)($.$n, {
                  onClick: A,
                  children: (0, l.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(ue.EN, {
                  active: M,
                  children: (0, e.jsx)(Na, {
                    imgGroup: d,
                    closeModal: E,
                    eventModel: m,
                    fnUpdateImageGroup: (he) =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, he)
                        : r.SetSalePageBackgroundGroup(i, he),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: Be().EditorTitle,
                  children: (0, l.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    I.map((he) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, Xe.h_)(
                            W.W3,
                            r.GetSaleSectionByID(he),
                            p,
                            m,
                            r.GetSaleSectionIndexByID(he, !0),
                          ),
                        },
                        "li_" + he,
                      ),
                    ),
                    !!G &&
                      (0, e.jsx)("li", {
                        children: (0, l.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!ne &&
                  (0, e.jsx)($.$n, {
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
                    children: (0, l.we)("#BackgroundGroups_Reduce", ne),
                  }),
                !!te &&
                  (0, e.jsx)($.$n, {
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
                    children: (0, l.we)("#BackgroundGroups_Extend", te),
                  }),
                i > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)($.$n, {
                        onClick: O,
                        children: (0, l.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(ue.EN, {
                        active: N,
                        children: (0, e.jsx)(ue.o0, {
                          strTitle: (0, l.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, l.we)(
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
            className: Be().CtnEditor,
            children: (0, e.jsx)($.$n, {
              onClick: (s) =>
                n !== void 0 && n >= 0
                  ? t?.AddTabBackgroundGroup(n)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, l.we)(
                n !== void 0 && n >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function Qa(o) {
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
              ? (0, e.jsx)(Ya, { ...o, groupID: i })
              : null;
        }
        function Ya(o) {
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
            d = i.findIndex((M) => M.background_id === t),
            m = i[d],
            [u, p] = (0, h.useState)(!1);
          (0, h.useEffect)(() => {
            if (!u) return;
            const M = (0, Se.pg)(
              (0, e.jsx)(ue.o0, {
                bAlertDialog: !0,
                closeModal: () => p(!1),
                children: (0, e.jsx)(pn, {
                  backgroundImageEditModel: r,
                  groupIndex: d,
                  imgGroup: m,
                  imgGroupDerivedMapping: s,
                  eventModel: r.GetEventModel(),
                  nTabIndex: n,
                }),
              }),
              window,
            );
            return () => {
              M.then((A) => A.Close());
            };
          }, [u, r, m, d, n, s]);
          const f = (0, z.q3)(() => dt.get(t)),
            [I, D] = (0, h.useState)(null),
            x = h.useCallback((M, A) => {
              D(A);
            }, []),
            G = (0, Ne.w6)(x);
          return (0, e.jsxs)("div", {
            className: Be().CtnEditor,
            ref: G,
            children: [
              !!(f && I && I > f) &&
                (0, e.jsx)($.$n, {
                  onClick: (M) => p(!0),
                  children: (0, l.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(pn, {
                backgroundImageEditModel: r,
                groupIndex: d,
                imgGroup: m,
                imgGroupDerivedMapping: s,
                eventModel: r.GetEventModel(),
                nTabIndex: n,
              }),
            ],
          });
        }
        var Za = a(81557),
          yn = a.n(Za);
        function Ja(o) {
          const { imgGroupDerivedMapping: t } = o,
            [n, s] = (0, h.useState)(!1);
          (0, h.useEffect)(() => {
            if (!n) return;
            const f = (0, Se.pg)(
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
          const r = (0, z.q3)(() => {
              const f = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (f) {
                const I = t.mapGroupToSections.get(f);
                if (I) return dt.get(I?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [i, d] = (0, h.useState)(null),
            m = h.useCallback((f, I) => {
              d(I);
            }, []),
            u = (0, Ne.w6)(m),
            p = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, w.A)(Be().CtnEditor, yn().TabCtn),
            ref: u,
            children: [
              p &&
                (0, e.jsx)($.$n, {
                  onClick: (f) => s(!0),
                  children: (0, l.we)("#BackgroundGroups_EditBackgroundGroup"),
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
            [r, i] = (0, h.useState)(null),
            [d, m, u, p] = (0, z.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(Q.tH, {
            children: [
              (0, e.jsx)($.Yh, {
                label: (0, l.we)("#BackgroundGroups_TaSetting"),
                checked: m,
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
              !!m &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)($.Yh, {
                      label: (0, l.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, l.we)(
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
                      classNameHeader: yn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var It = a(85692);
        function Xa(o) {
          const { nSectionID: t, children: n } = o,
            [s, r] = h.useState(!1),
            [i, d] = h.useState(!1);
          h.useEffect(() => {
            It.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const m = (0, z.q3)(() => It.TU.Get().GetMouseOverSectionID()),
            u = t && t == m,
            p = () => It.TU.Get().JumpToSection(t),
            f = h.useRef(null);
          return (
            (0, It.lM)((I) =>
              t != I ? !1 : (f.current?.scrollIntoView(), d(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: f,
              className: (0, w.A)({
                [y().SaleSectionLivePreview]: !0,
                [y().Hover]: !!u,
                [y().JumpedTo]: !!i,
              }),
              onAnimationEnd: () => d(!1),
              onMouseEnter: () => r(!0),
              onMouseLeave: () => r(!1),
              children: [
                s &&
                  (0, e.jsx)(He.Gq, {
                    toolTipContent: (0, l.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: y().JumpToButton,
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
              bDynamicallyCreatedSale: m,
            } = o,
            [u, p] = h.useState(n?.GetDayIndexFromEventStart()),
            [f, I] = h.useState(null),
            D = (0, z.q3)(() => n.jsondata.sale_header_disable_top_margin),
            x = to(n, u, (0, qa.TC)(!!s)),
            [G, M] = (0, h.useState)(!1);
          h.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !f &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, j.yK)() == "community"
            ) {
              const te = document.getElementsByTagName("HEAD")[0],
                ne = document.createElement("style");
              (ne.innerText = (0, Zt.L$)(n.jsondata.sale_custom_css)),
                I(ne),
                te.appendChild(ne);
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
          const A = n?.jsondata,
            E = h.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(j.UF.CLANACCOUNTID),
                nAppIDVOD: Number(A?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? A?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  A?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, A, r, t],
            ),
            N = (0, z.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            O = Lt(n?.clanSteamID);
          if (!n || u === void 0)
            return (0, e.jsx)("div", {
              className: Fe().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(ze.t, {
                size: "medium",
                string: (0, l.we)("#Loading"),
              }),
            });
          {
            const H =
                n.jsondata.localized_sale_logo &&
                n.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              te = n.BUsesContentHubForItemSource(),
              ne = n
                .GetSaleSections()
                .some((ke) => ke.section_type === "contenthubtitle"),
              he = te && ne;
            let Ae,
              re = !0;
            H
              ? (Ae = 0)
              : n.BUsesContentHubForItemSource()
                ? (Ae = 20)
                : n.GetEventType() == R.ajI
                  ? ((Ae = 0), (re = !1))
                  : (Ae = n.jsondata.sale_header_offset || 0);
            const de = re && n.jsondata.sale_header_offset === 530,
              ye = !Et.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              $e = s
                ? !G && i?.BIsBackgroundImageEnabled()
                  ? Te.S.EPreviewMode_EditBackground
                  : Te.S.EPreviewMode_Enabled
                : Te.S.EPreviewMode_Disabled,
              Ue = N || n.GetEventType() != R.ajI,
              _t = te ? le.Yo.NoTransform : le.Yo.NoTransformSparseContent,
              Rt = (0, w.A)(
                y().SaleOuterContainer,
                D && y().SaleOuterTopMargin,
                de && y().SaleNewSizing,
                y()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                H && y().SalePageLogoSet,
                he && y().ContentHub,
              );
            return (0, e.jsx)(Q.tH, {
              children: (0, e.jsx)(ae.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(W.Cs, {
                  location: s ? W.HY : W.bs,
                  children: (0, e.jsxs)(S, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    children: [
                      ye && (0, e.jsx)(ae.Sn, {}),
                      (0, e.jsx)(Z, { eventModel: n }),
                      !!i &&
                        (Ue || O) &&
                        (0, e.jsx)(Ka, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: G,
                          fnSetBackgroundImgGroupEditMode: M,
                          bShowAsValveOnly: !Ue,
                        }),
                      (0, e.jsxs)(L.Z, {
                        style: he ? void 0 : { marginTop: `${Ae || 0}px` },
                        className: Rt,
                        scrollIntoViewType: _t,
                        children: [
                          (0, e.jsx)(fe, { eventModel: n, language: r }),
                          (0, e.jsx)(Ve, {
                            rgPresenters: n.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(St, {
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
                            selectedTab: x,
                            tagSelection: x?.GetTagSelection(),
                          }),
                          !m &&
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
          const [s] = (0, Ye.QD)(Qe.jD, void 0),
            [r] = (0, Ye.QD)(et.dk, void 0),
            [i] = (0, Ye.QD)(et.NV, void 0),
            d = h.useMemo(() => {
              const I = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((D) => !D.hide);
              if (I && I.length > 0) {
                let D = s > 0 ? I.find((G) => G.unique_id == s) : void 0;
                D || (D = I[0]);
                const x = D === I[0];
                return { selTab: D, bIsDefaultTab: x };
              }
            }, [o, s]),
            m = (0, et.U9)((0, et.XL)(r, i), d?.selTab.tab_tag_filter, n),
            u = m?.strParentKey,
            p = m?.strChildKey;
          return h.useMemo(() => {
            if (!d) return;
            let f;
            u && (f = { strParentKey: u, strChildKey: p });
            const I =
              o.jsondata.sale_opt_in_page_name ||
              o.jsondata.prune_list_optin_name;
            return new ut.y(d.selTab, t, d.bIsDefaultTab, f, I);
          }, [o, t, d, u, p]);
        }
        function Bn() {
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
            [m, u] = h.useState((0, Qe.rp)()),
            p = h.useMemo(() => new mt(), []),
            f = h.useCallback(() => u((0, Qe.rp)()), []);
          h.useEffect(
            () => (
              window.addEventListener("resize", f),
              () => window.removeEventListener("resize", f)
            ),
            [f],
          ),
            h.useEffect(() => {
              let re = "";
              const de = () => {
                  const ye = Bn();
                  if (ye && ye != re) {
                    const $e = document.getElementById(ye);
                    $e && ((re = ye), $e.scrollIntoView({ block: "start" }));
                  }
                },
                _e = setTimeout(() => de(), 150);
              return (
                window.addEventListener("hashchange", de),
                () => {
                  clearTimeout(_e),
                    window.removeEventListener("hashchange", de);
                }
              );
            }, []);
          const I = (0, Dt.W6)(),
            D = (re, de) => {
              (0, Ye.ip)(I, { ...(de || {}), [Qe.jD]: re.toString() });
            },
            [x, G] = (0, Ye.QD)("controller"),
            [M, A] = (0, z.q3)(() => {
              const re =
                  Ft.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                de = t.GetSaleSectionIncludingFooterSections(re);
              return [
                Kt(
                  t.jsondata.sale_background_img_groups,
                  de,
                  i && i.GetActiveTabUniqueID(),
                ),
                de,
              ];
            });
          let E = !1;
          const N = new ut.y(void 0, s),
            O = [{ elements: [], activeTab: N }];
          let H = null;
          const te = (0, j.Qn)(),
            ne = (0, It.ty)(),
            he = h.useMemo(() => {
              const re = Bn();
              if (!re) return;
              const de = A.findIndex((_e) => _e.section_anchor === re);
              return de > -1 ? de : void 0;
            }, [A]);
          A.forEach((re, de) => {
            const _e = O[O.length - 1].activeTab;
            if (_e && !_e.ShouldShowSection(re)) return;
            const ye = Et.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              $e = m && !ye && !t.jsondata.content_hub_restricted_width;
            let Ue = (0, Te.I)(re, r, t, n, te);
            if (Ue === void 0) return;
            if (!Ue)
              if ((0, At.su)(re) && !j.iA.logged_in)
                E ||
                  ((Ue = (0, e.jsx)(At.CC, {
                    section: re,
                    event: t,
                    language: n,
                  })),
                  (E = !0));
              else {
                const io = re.diable_tab_id_filtering
                  ? new ut.y(void 0, _e && _e.GetSaleDay())
                  : _e;
                re.section_type == "tabs" &&
                  re.tabs?.some(
                    (lo) => lo.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  O.push({ activeTab: i, elements: [] }),
                  (Ue = (0, e.jsx)($a.H, {
                    ...o,
                    section: re,
                    activeTab: io,
                    appVisibilityTracker: p,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: D,
                    expanded: $e,
                    controllerCategory: x,
                    setControllerCategory: G,
                  }));
              }
            ne &&
              (Ue = (0, e.jsx)(Xa, { nSectionID: re.unique_id, children: Ue }));
            const _t = O && O.length && O[O.length - 1];
            let Rt = (0, e.jsx)(
              ro,
              {
                section: re,
                nActiveTabID:
                  _t && _t.activeTab && _t.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: de,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: M,
                backgroundImageEditModel: d,
                bExpanded: $e,
                children: (0, e.jsx)(yt._, {
                  enabled: !he || de > he,
                  children: Ue,
                }),
              },
              "SaleSectionIndex_" + re.unique_id + "_" + de,
            );
            const ke = M.mapSectionToGroup.get(re.unique_id);
            H &&
              H.groupID != ke &&
              (O[O.length - 1].elements.push(
                wt(t, H, r, i && i?.GetActiveTabUniqueID()),
              ),
              (H = null)),
              ke
                ? (H ||
                    (H = {
                      groupID: ke,
                      elSaleSections: [],
                      derivedGroupInfo: M.mapGroupToSections.get(ke),
                    }),
                  H.elSaleSections.push(Rt))
                : O[O.length - 1].elements.push(Rt);
          }),
            H &&
              (O[O.length - 1].elements.push(
                wt(t, H, r, i && i?.GetActiveTabUniqueID()),
              ),
              (H = null));
          const Ae = O.map((re, de) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, w.A)(
                  y().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: re.elements,
              },
              "TabSection_" + de,
            ),
          );
          return (0, e.jsx)(L.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Ae,
          });
        }
        const ao = (0, Dt.y)(no);
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
        function Pn({ children: o, onChange: t }) {
          const n = h.useRef(null);
          return (
            (0, h.useEffect)(() => {
              t(!!h.Children.toArray(o).filter(Boolean).length);
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
              bExpanded: m,
              children: u,
            } = o,
            p = t.section_anchor
              ? t.section_anchor
              : Qe.mj + (t.unique_id || n),
            f = t.section_type != "tabs",
            [I, D] = (0, h.useState)(!0);
          return I
            ? (0, e.jsx)(Q.tH, {
                children: (0, e.jsx)(oo, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: f
                    ? (0, e.jsx)(L.Z, {
                        navKey: p,
                        id: p,
                        className: (0, w.A)({
                          [y().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: m,
                          [t.single_item_style || ""]: !0,
                          [y().SaleSectionBackgroundImageGroupEdit]:
                            r == Te.S.EPreviewMode_EditBackground,
                          [y().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          r === Te.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  u,
                                  (0, e.jsx)(Qa, {
                                    nSectionUniqueID: t.unique_id || n,
                                    nTabID: s,
                                    salePageBackgroundDerivedConfig: i,
                                    backgroundImageEditModel: d,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(Pn, { onChange: D, children: u }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          r === Te.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: p,
                                className: (0, w.A)({
                                  [y().SaleSectionCtn]: !0,
                                  [y().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [y().NoTopPadding]: t.collapse_header_space,
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
                            : (0, e.jsx)(Pn, { onChange: D, children: u }),
                      }),
                }),
              })
            : null;
        }
      },
      12932: (U, ge, a) => {
        "use strict";
        a.d(ge, { qx: () => T });
        var e = a(7850),
          R = a(16412),
          L = a(18210),
          le = a(36118),
          ae = a(90626),
          W = a(36707),
          q = a(95695),
          ee = a.n(q),
          z = a(25792),
          h = a(64734),
          oe = a.n(h),
          Q = a(65946),
          ce = a(11243);
        function y(w) {
          const {
              title: j,
              tooltip: se,
              getMinimized: k,
              toggleMinimized: Y,
              className: S,
              children: c,
              elAdditionalButtons: g,
            } = w,
            C = (0, Q.q3)(() => k());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, W.A)(
                  S,
                  h.SectionTitleHeader,
                  h.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, W.A)(
                      q.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [j, !!se && (0, e.jsx)(ce.o, { tooltip: se })],
                  }),
                  (0, e.jsxs)("div", {
                    className: h.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)(F, { bIsMinimized: C, fnToggleMinimize: Y }),
                    ],
                  }),
                ],
              }),
              !C && (0, e.jsx)(z.tH, { children: c }),
            ],
          });
        }
        function T(w) {
          const [j, se] = ae.useState(!!w.bStartMinimized);
          return (0, e.jsx)(y, {
            ...w,
            getMinimized: () => j,
            toggleMinimized: () => se(!j),
            children: w.children,
          });
        }
        function F(w) {
          const { bIsMinimized: j, fnToggleMinimize: se } = w,
            k = j ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(R.$n, {
            "data-tooltip-text": (0, L.we)(k),
            onClick: se,
            children: w.bIsMinimized
              ? (0, e.jsx)(le.hz4, {})
              : (0, e.jsx)(le.Xjb, {}),
          });
        }
      },
      29462: (U, ge, a) => {
        "use strict";
        a.r(ge), a.d(ge, { default: () => oe });
        var e = a(7850),
          R = a(90626),
          L = a(3166),
          le = a(99412),
          ae = a(77495),
          W = a(85599),
          q = a(11811),
          ee = a(179),
          z = a(7582),
          h = a(21042);
        function oe(Q) {
          const { clanAccountID: ce, gidEvent: y } = Q;
          let { eventModel: T, bLoading: F } = (0, ae.dB)(ce, y);
          const w = (0, le.sfN)(L.TS.LANGUAGE),
            [j] = (0, ee.QD)("livepreview");
          return (
            j && (T = (0, h.U)(ce, le.ajI, "creatorhome_fake", (0, z.sB)())),
            R.useEffect(() => {
              if (!F && !T) {
                const se = new URL(window.location.href);
                se.searchParams.set("v1", "1"),
                  window.location.replace(se.toString());
              }
            }, [F, T]),
            T
              ? (0, e.jsx)(q.default, {
                  eventModel: T,
                  promotionName: `creatorhome_${y}`,
                  language: w,
                })
              : (0, e.jsx)(W.t, {})
          );
        }
      },
      17809: (U, ge, a) => {
        "use strict";
        a.d(ge, { d: () => Me });
        var e = a(7850),
          R = a(19367),
          L = a(90626),
          le = a(3685),
          ae = a(85528),
          W = a(77495),
          q = a(18210),
          ee = a(3166),
          z = a(75779),
          h = a(80902),
          oe = a(30454);
        async function Q() {
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
        const ce = 300 * 1e3;
        function y() {
          return ["DeckCompatCounts"];
        }
        function T() {
          return {
            queryKey: y(),
            queryFn: () => Q(),
            staleTime: ce,
            retry: !1,
          };
        }
        function F() {
          const { data: v } = (0, h.I)(T());
          return v;
        }
        function w(v, _) {
          switch (_) {
            case z.sd:
              return v?.playable;
            case z.V8:
              return v?.unsupported;
            default:
              return v?.verified;
          }
        }
        var j = a(70187),
          se = a(36549),
          k = a(39153),
          Y = a(6878),
          S = a(99412),
          c = a(72609),
          g = a(47610),
          C = a(18860),
          b = a(41635),
          Z = a(25792),
          B = a(85599),
          X = a(87805);
        const l = L.Fragment;
        function fe(v) {
          const {
              reservationPackageID: _,
              depositPackageID: P,
              bIsPreview: V,
              psuLessPackageID: J,
              strOutOfStockOverride: K,
              strDeliveryOverride: ie,
              bDeliveryOverrideOnlyIfOutOfStock: xe,
              section: we,
            } = v,
            { data: me } = (0, g.DR)(_),
            { data: je } = (0, g.DR)(J),
            Oe = (0, L.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + _,
                  reservation_package: _,
                  deposit_package: P,
                  localized_reservation_desc: (0, b.$Y)([], S.bP9, null),
                  localized_out_of_stock_override: (0, b.$Y)(
                    [K || null],
                    S.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, b.$Y)(
                    [ie || null],
                    S.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!xe,
                  psu_less_package: J,
                },
              ],
              [_, P, K, ie, xe, J],
            );
          if (!me || (J && !je))
            return (0, e.jsx)(B.t, {
              string: (0, q.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const We = !c.iA.logged_in || !me.account_restricted_from_purchasing,
            Ke =
              me.reservation_state == C.G.k_EPurchaseReservationState_Reserved
                ? me
                : void 0;
          return (0, e.jsxs)(Z.tH, {
            children: [
              (0, e.jsx)(L.Suspense, {
                fallback: null,
                children: (0, e.jsx)(l, {
                  bIsPreview: !!V,
                  rgReservationDef: Oe,
                }),
              }),
              !!me.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Oe[0].unique_id,
                  children: [
                    (0, e.jsx)(X.b, {
                      reservationDef: Oe[0],
                      hardwareDetail: me,
                      bPSULessModel: !1,
                      reservedHardwareDetail: Ke,
                    }),
                    We &&
                      (0, e.jsx)(X.p, {
                        section: we,
                        reservationDef: Oe[0],
                        hardwareDetail: me,
                        reservedHardwareDetail: Ke,
                      }),
                    je &&
                      je?.allow_purchase_in_country &&
                      (0, e.jsx)(X.b, {
                        reservationDef: Oe[0],
                        hardwareDetail: je,
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
              v.rgDepositPackageInfo.filter((_) => _.bVisible).length == 0 &&
              v?.rgReservationPackageInfo &&
              v?.rgReservationPackageInfo?.length > 0 &&
              v?.rgReservationPackageInfo.filter((_) => _.bVisible).length == 0
            )
              return !1;
          } else if (
            v?.rgReservationPackageInfo &&
            v?.rgReservationPackageInfo?.length > 0 &&
            v?.rgReservationPackageInfo.filter((_) => _.bVisible).length == 0
          )
            return !1;
          return !0;
        }
        var Nt = a(21035),
          Ct = a(72865),
          rt = a(38081),
          it = a.n(rt),
          Ve = a(36707),
          Ge = a(69596),
          Ft = a(10026),
          Dt = a.n(Ft),
          Qe = a(19298),
          et = a(11996),
          Et = a(19047),
          lt = a(36118),
          zt = a(47689),
          St = a(89926),
          Ht = a(32545),
          ct = a.n(Ht);
        function Ye(v) {
          const { appID: _, classOverride: P, styleOverride: V } = v,
            [J, K] = (0, L.useState)(!1),
            ie = (0, zt.m)("GameHoverFollowButton"),
            { elDialogElement: xe, fnShowLogonDialog: we } = (0, St.l)(),
            me = (0, et.Fh)(_),
            { mutateAsync: je } = (0, Et.L)(_, !me, void 0),
            Oe = async (We) => {
              We.preventDefault(),
                We.stopPropagation(),
                ee.iA.logged_in
                  ? (K(!0), await je(), ie.token.reason || K(!1))
                  : we();
            };
          return (0, e.jsxs)(Qe.Z, {
            className: (0, Ve.A)(ct().FollowButton, P),
            onClick: Oe,
            style: V,
            children: [
              me ? (0, e.jsx)(lt.pPV, {}) : (0, e.jsx)(lt.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, Ve.A)(
                  ct().FollowButtonText,
                  J && ct().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, q.we)(
                  me ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              xe,
            ],
          });
        }
        function Re(v) {
          const { appid: _, color: P, bgcolor: V } = v,
            J = (0, Ct.n9)();
          return (0, e.jsx)(Ye, {
            appID: _,
            classOverride: (0, Ve.A)(
              it().FollowGameButtonNotTop,
              Dt().BBCodeFollowButton,
            ),
            styleOverride: { color: P, backgroundColor: V },
          });
        }
        function Ne(v) {
          const _ = Number(v.args.appid);
          if (!_) return null;
          const P = (0, Ge.O)(v.args.color, "black"),
            V = (0, Ge.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Re, { appid: _, color: P, bgcolor: V });
        }
        var bt = a(18657),
          Ze = a.n(bt),
          dt = a(63026);
        function Wt(v) {
          const { clanAccountID: _, color: P, bgcolor: V } = v,
            [J, K] = L.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, Ve.A)(Ze().BBCodeFollowButton, J && Ze().isHovered),
            onMouseEnter: () => K(!0),
            onMouseLeave: () => K(!1),
            children: (0, e.jsx)(dt.Q, {
              nCreatorAccountID: _,
              classOverride: it().FollowGameButtonNotTop,
              styleOverride: { color: P, backgroundColor: V },
              followType: "group",
            }),
          });
        }
        function Kt(v) {
          const { event: _ } = v.context,
            P = Number(v.args.groupid) || _?.clanSteamID.GetAccountID();
          if (!P) return null;
          const V = (0, Ge.O)(v.args.color, "black"),
            J = (0, Ge.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Wt, { clanAccountID: P, color: V, bgcolor: J });
        }
        var pe = a(83482),
          Vt = a(44267),
          jt = a(9202),
          tt = a.n(jt),
          Te = a(29522);
        function wt(v) {
          const { appid: _, color: P, bgcolor: V } = v,
            J = (0, Ct.n9)(),
            K = (0, Te.$5)(_),
            ie = (0, pe.L3)(J);
          return (0, e.jsx)("div", {
            className: tt().WishlistHoverCtn,
            children: (0, e.jsx)(Vt.E, {
              snr: ie,
              id: K,
              classOverride: (0, Ve.A)(
                it().WishlistButtonNotTop,
                tt().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: P, backgroundColor: V },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Qt(v) {
          const _ = Number(v.args.appid);
          if (!_) return null;
          const P = (0, Ge.O)(v.args.color, "black"),
            V = (0, Ge.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(wt, { appid: _, color: P, bgcolor: V });
        }
        let gt = null;
        function At() {
          return (
            gt == null &&
              (gt = new Map([
                ["wishlist", { Constructor: Qt, autocloses: !1 }],
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
        function Yt(v) {
          const { giveawayid: _ } = v,
            P = (0, ut.w)(_),
            {
              bLoadingGiveawayInfo: V,
              winner_count: J,
              closed: K,
              seconds_until_drawing: ie,
            } = P;
          return V
            ? null
            : (0, e.jsxs)("div", {
                className: Le.countdownCtn,
                children: [
                  !!K &&
                    (0, e.jsx)("div", {
                      className: Le.Closed,
                      children:
                        J > 0
                          ? (0, q.we)("#Giveaway_Closed", (0, Fe.D)(J))
                          : (0, q.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !K &&
                    (0, e.jsxs)(L.Fragment, {
                      children: [
                        ie <= 0
                          ? (0, e.jsxs)("div", {
                              className: Le.Throbber,
                              children: [
                                (0, e.jsx)(B.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, q.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Le.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Le.CountDownTime,
                                  children:
                                    ze(Math.floor(ie / 60)) + ":" + ze(ie % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Le.CountDownText,
                                  children: [
                                    (0, q.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, q.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        J > 0 &&
                          (0, e.jsxs)("div", {
                            className: Le.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Le.WinnerCount,
                                children: (0, Fe.D)(J),
                              }),
                              (0, e.jsx)("div", {
                                className: Le.WinnerText,
                                children: (0, q.we)("#Giveaway_Congratulation"),
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
          const _ = Number(v.args.packageid);
          return _
            ? (0, e.jsx)(mt.eF, {
                packageID: _,
                display_style: (0, mt._w)(v.args.display),
              })
            : null;
        }
        function Zt(v) {
          const _ = Number(v.args.packageid),
            P = Number(v.args.compareid);
          return !_ || !P
            ? null
            : (0, e.jsx)(mt.hJ, { packageID: _, compareID: P });
        }
        var yt = a(88245),
          Jt = a(35702),
          Lt = a(16412),
          Xt = a(92757),
          $ = a(39256),
          ue = a(4720),
          Se = a(75110),
          $t = a(57810),
          Xe = a(36631),
          qt = a(79519),
          Bt = a(81416);
        function en(v) {
          const { eventModel: _, nEventBadgeID: P } = v,
            V = (0, Jt.fy)(P);
          if (V?.level > 0) {
            let J = V.level;
            if (_?.BHasSaleEnabled()) {
              const K = _.GetSaleSectionsByType("badge_progress");
              if (K?.length == 1) {
                const ie = K[0].badge_progress;
                if (ie?.event_badgeid == P && ie?.granted_by_discovery_queue) {
                  const xe = ie.levels[ie.levels.length - 1].level;
                  return (0, e.jsx)(tn, {
                    eventModel: _,
                    nBadgeLevel: J,
                    nMaxLevel: xe,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Fe.D)(J),
            });
          }
          return null;
        }
        function tn(v) {
          const { eventModel: _, nBadgeLevel: P, nMaxLevel: V } = v,
            J = L.useMemo(() => {
              const me = _.GetSaleSections().filter(
                (je) => je.section_type == "discoveryqueue",
              );
              return me?.length > 0 ? me[0] : null;
            }, [_]),
            { storePageFilter: K, eStoreDiscoveryQueueType: ie } = L.useMemo(
              () => (0, Se.lx)(_, J),
              [_, J],
            ),
            xe = (0, $t.Uf)(ie, K),
            we = Math.min(P + xe, V);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Fe.D)(we),
          });
        }
        function He(v) {
          const { event: _ } = v.context,
            P = Number.parseInt((0, j.j$)(v.args, "eventid"));
          return ee.iA.logged_in && P
            ? (0, e.jsx)(en, { nEventBadgeID: P, eventModel: _ })
            : null;
        }
        function nn(v) {
          const { nDoorIndex: _, children: P } = v,
            V = (0, k.OM)(_),
            J = (0, k.gP)(),
            [K, ie] = L.useState(!1),
            [xe, we] = L.useState(!1),
            { elDialogElement: me, fnShowLogonDialog: je } = (0, St.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Lt.$n, {
                disabled: V,
                onClick: (Oe) => {
                  K ||
                    (ee.iA.logged_in
                      ? (ie(!0),
                        J({ iDoorIndex: _ })
                          .then((We) => {
                            We || we(!0), ie(!1);
                          })
                          .catch(() => {
                            we(!0), ie(!1);
                          }))
                      : je());
                },
                children: xe
                  ? (0, e.jsx)("div", {
                      children: (0, q.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!K && (0, e.jsx)(B.t, { size: "small" }),
                        !!V && (0, e.jsx)(lt.Jlk, {}),
                        P,
                      ],
                    }),
              }),
              me,
            ],
          });
        }
        function nt(v) {
          const _ = Number.parseInt((0, j.j$)(v.args)) || 0;
          return _ >= 0 && _ < 32
            ? (0, e.jsx)(nn, { nDoorIndex: _, children: v.children })
            : null;
        }
        const an = (0, Xt.y)(qt.H);
        function on(v) {
          const _ = Number.parseInt((0, j.j$)(v.args)),
            { event: P, showErrorInfo: V } = v.context;
          if (_) {
            const J = P?.jsondata?.sale_sections?.findIndex(
              (K) => K.unique_id == _,
            );
            if (J >= 0) {
              const K = P.GetDayIndexFromEventStart();
              return (0, e.jsx)(Xe.Cs, {
                location: V ? Xe.HY : Xe.bs,
                children: (0, e.jsx)(an, {
                  event: P,
                  section: P.jsondata.sale_sections[J],
                  activeTab: new ue.y(null, K),
                  language: v.language,
                  nSaleDayIndex: K,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: V
                    ? Bt.S.EPreviewMode_Enabled
                    : Bt.S.EPreviewMode_Disabled,
                }),
              });
            } else if (V)
              return (0, e.jsxs)("div", {
                className: $.ErrorDiv,
                children: ["Error could not find sale section ", _],
              });
          }
          return null;
        }
        let ht = null;
        function sn() {
          return (
            ht == null &&
              (ht = new Map([
                ...Array.from(At().entries()),
                [
                  "itemdef",
                  {
                    Constructor: rn,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: Ne, autocloses: !1 }],
                ["deckcompatcount", { Constructor: ln, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: Be, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: Tt, autocloses: !1 }],
                ["price", { Constructor: Je, autocloses: !1 }],
                ["pricesavings", { Constructor: Zt, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: cn, autocloses: !1 }],
                ["chooseaccount", { Constructor: Pe, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: He, autocloses: !1 }],
                ["optindoorquest", { Constructor: nt, autocloses: !1 }],
                ["classname", { Constructor: Gt, autocloses: !1 }],
                ["localize", { Constructor: be, autocloses: !1 }],
                ["salesection", { Constructor: on, autocloses: !1 }],
                ["reservationbutton", { Constructor: dn, autocloses: !1 }],
              ])),
            ht
          );
        }
        function rn(v) {
          const { event: _ } = v.context,
            P = Number.parseInt((0, j.j$)(v.args, "appid")),
            V = Number.parseInt((0, j.j$)(v.args, "itemdefid")),
            J = Number.parseInt((0, j.j$)(v.args, "maxquantity")),
            K = (0, j.j$)(v.args, "calltoaction");
          return !(0, yt.gS)(P, V, !1) || !_
            ? (0, e.jsx)(B.t, {
                size: "small",
                position: "center",
                string: (0, q.we)("#Loading"),
              })
            : (0, e.jsx)(Nt.f, {
                language: v.language,
                clanAccountID: _.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: P, nItemDefID: V, max_quantity: J },
                strCallToAction: K,
              });
        }
        function ln(v) {
          const _ = F();
          if (!_) return (0, e.jsx)(B.t, { size: "small" });
          const P = Number.parseInt((0, j.j$)(v.args));
          return (0, e.jsx)("span", { children: (0, Fe.D)(Number(w(_, P))) });
        }
        function Be(v) {
          const _ = (0, se.jR)(ee.iA.accountid, "library");
          if (!_) return (0, e.jsx)(B.t, { size: "small" });
          const P = Number.parseInt((0, j.j$)(v.args));
          let V = _.verifiedList?.length || 0;
          switch (P) {
            case z.sd:
              V = _.playableList?.length || 0;
              break;
            case z.V8:
              V = _.unsupportedList?.length || 0;
              break;
            case z.YX:
              V = _.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Fe.D)(Number(V)) });
        }
        function cn(v) {
          const _ = Number.parseInt((0, j.j$)(v.args)),
            P =
              "hide" in v.args && !!Number.parseInt((0, j.j$)(v.args, "hide"));
          return _ >= 0
            ? (0, e.jsx)(Pt, { nDoorIndex: _, bHide: P, children: v.children })
            : null;
        }
        function Pt(v) {
          const { nDoorIndex: _, bHide: P, children: V } = v,
            J = (0, k.OM)(_);
          return J == null
            ? null
            : (J && !P) || (!J && P)
              ? (0, e.jsx)(e.Fragment, { children: v.children })
              : null;
        }
        function Pe(v) {
          if (ee.iA.logged_in) {
            const _ = Number.parseInt((0, j.j$)(v.args)),
              P = Number.parseInt((0, j.j$)(v.args, "mod"));
            if (P > 0 && _ < P && ee.iA.accountid % P == _) return v.children;
          }
          return null;
        }
        function Gt(v) {
          const _ = (0, j.j$)(v.args);
          return _?.trim().length > 0
            ? (0, e.jsx)("div", { className: _.trim(), children: v.children })
            : (0, e.jsx)(e.Fragment, { children: v.children });
        }
        function be(v) {
          return (0, e.jsx)("span", {
            className: Y.LocalizeBlock,
            children: (0, q.oW)(
              v.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function Tt(v) {
          let _ = (0, j.j$)(v.args);
          return _
            ? (0, e.jsx)(Yt, { giveawayid: _ })
            : (0, e.jsx)(L.Fragment, {});
        }
        function dn(v) {
          const { showErrorInfo: _, event: P } = v.context,
            V = Number.parseInt((0, j.j$)(v.args)),
            J = L.useMemo(() => {
              if (P)
                return P.jsondata.sale_sections?.find(
                  (K) =>
                    K.section_type == "vo_internal" &&
                    (K.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      K.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [P]);
          if (V && J) {
            const K = Number.parseInt((0, j.j$)(v.args, "depositpackageid")),
              ie = Number.parseInt((0, j.j$)(v.args, "psulesspackageid")),
              xe = (0, j.j$)(v.args, "out_of_stock_override"),
              we = (0, j.j$)(v.args, "delivery_override"),
              me = (0, j.j$)(v.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(fe, {
              section: J,
              reservationPackageID: V,
              depositPackageID: K,
              psuLessPackageID: ie,
              strOutOfStockOverride: xe,
              strDeliveryOverride: me || we,
              bDeliveryOverrideOnlyIfOutOfStock: !!me,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var gn = a(71698),
          at = a(94520);
        function Me(v) {
          const { bSalePage: _ } = v,
            [P, V] = L.useState(!1);
          return (
            (0, gn.H)(P, _),
            L.useEffect(() => {
              ae.Vw.Init(new le.D(ee.TS.WEBAPI_BASE_URL)), W.O3.Init(), V(!0);
            }, []),
            L.useEffect(() => {
              const J = (0, q.l4)();
              J && R.locale(J);
            }, []),
            P
              ? _
                ? (0, e.jsx)(at.d3, { dictionary: sn(), children: v.children })
                : v.children
              : null
          );
        }
      },
      11811: (U, ge, a) => {
        "use strict";
        a.r(ge), a.d(ge, { default: () => w });
        var e = a(7850),
          R = a(71698),
          L = a(90626),
          le = a(73259),
          ae = a(76559),
          W = a(77495),
          q = a(25679),
          ee = a(64641),
          z = a.n(ee),
          h = a(85599),
          oe = a(18210),
          Q = a(3166),
          ce = a(17809),
          y = a(85692),
          T = a(41032),
          F = a(51079);
        function w(k) {
          const { eventModel: Y } = k;
          return (0, e.jsx)(ce.d, {
            bSalePage: !0,
            children: (0, e.jsx)(j, { ...k, overrideEventModel: Y }),
          });
        }
        function j(k) {
          const { promotionName: Y, language: S, overrideEventModel: c } = k,
            [g, C] = L.useState(
              c ?? W.O3.GetClanEventFromAnnouncementGID(Q.P9.ANNOUNCEMENT_GID),
            );
          L.useEffect(() => {
            if (!c && g?.AnnouncementGID != Q.P9.ANNOUNCEMENT_GID) {
              const l = new ae.b(Q.UF.CLANSTEAMID);
              W.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                l,
                Q.P9.ANNOUNCEMENT_GID,
                null,
              ).then(C);
            }
          }, [g, c]);
          const Z = (0, y.D2)() ?? g,
            B = (0, y.ty)();
          if (((0, R.s)(1500), !Z))
            return (0, e.jsx)("div", {
              className: z().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(h.t, {
                size: "medium",
                string: (0, oe.we)("#Loading"),
              }),
            });
          const X =
            (Z.visibility_state !== le.zv.k_EEventStateVisible &&
              Z.visibility_state !== le.zv.k_EEventStateUnlisted) ||
            B;
          return (0, e.jsx)(se, {
            eventModel: Z,
            children: (0, e.jsx)(F.oJ, {
              children: (0, e.jsx)(F.Ay, {
                curator_clanid: Z?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(q._, {
                  promotionName: Y,
                  language: S,
                  eventModel: Z,
                  bIsPreview: X,
                }),
              }),
            }),
          });
        }
        function se(k) {
          const { eventModel: Y, children: S } = k,
            c = Y.GetContentHubType() == "adultonly";
          return (0, e.jsx)(T.QA, {
            eAdultOnlyMediaBehavior: c ? "allowed" : "masked",
            children: S,
          });
        }
      },
      32545: (U) => {
        U.exports = {
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
      50909: (U) => {
        U.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (U) => {
        U.exports = {
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
      71347: (U) => {
        U.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (U) => {
        U.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (U) => {
        U.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      17618: (U) => {
        U.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      10026: (U) => {
        U.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (U) => {
        U.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (U) => {
        U.exports = {
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
      32190: (U) => {
        U.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (U) => {
        U.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (U) => {
        U.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (U) => {
        U.exports = {
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
      9709: (U) => {
        U.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (U) => {
        U.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (U) => {
        U.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (U) => {
        U.exports = {
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
      25359: (U) => {
        U.exports = {
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
      79949: (U) => {
        U.exports = {
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
      15496: (U) => {
        U.exports = {
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
      9202: (U) => {
        U.exports = {
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
      64734: (U) => {
        U.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      44894: (U, ge, a) => {
        "use strict";
        a.d(ge, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
