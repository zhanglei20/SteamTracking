/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1063],
  {
    56228: (e, t, r) => {
      r.d(t, { s: () => W, Q: () => O });
      var i = r(34629),
        n = r(41735),
        a = r.n(n),
        s = r(71944),
        o = r(14947),
        l = r(22837),
        c = r(56545),
        d = r(17720),
        u = r(37735),
        g = r(78327),
        m = r(17204),
        f = r(44332),
        y = r(80613),
        h = r(89068),
        _ = r(21920);
      const S = y.Message;
      class p extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.language || h.Sg(p.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  language: {
                    n: 1,
                    q: !0,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  type: {
                    n: 2,
                    q: !0,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = h.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new y.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new y.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new y.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_UpdateTextFilterDictionary_Notification";
        }
      }
      class T extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.language || h.Sg(T.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  language: {
                    n: 1,
                    q: !0,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  type: {
                    n: 2,
                    q: !0,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = h.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new y.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new y.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new y.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Request";
        }
      }
      class x extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.dictionary || h.Sg(x.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  dictionary: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = h.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new y.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new y.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new y.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Response";
        }
      }
      class B extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.language || h.Sg(B.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  language: {
                    n: 1,
                    q: !0,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  type: {
                    n: 2,
                    q: !0,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = h.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new y.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new y.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new y.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_TextFilterDictionaryChanged_Notification";
        }
      }
      class b extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.pid || h.Sg(b.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  pid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = h.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new y.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new y.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new y.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Request";
        }
      }
      class F extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.gameid || h.Sg(F.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  gameid: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = h.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new y.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new y.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new y.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Response";
        }
      }
      class w extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.gameid || h.Sg(w.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  gameid: {
                    n: 1,
                    q: !0,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  should_handle: {
                    n: 2,
                    q: !0,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = h.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new y.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new y.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new y.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
        }
      }
      var v;
      !(function (e) {
        (e.UpdateTextFilterDictionaryHandler = {
          name: "SteamEngine.UpdateTextFilterDictionary#1",
          request: p,
        }),
          (e.RegisterForUpdateTextFilterDictionary = function (t, r) {
            return null == (r = r || (0, _.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.UpdateTextFilterDictionaryHandler,
                  t,
                );
          }),
          (e.UpdateTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.UpdateTextFilterDictionary#1",
                  (0, c.I8)(p, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgUpdateTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.UpdateTextFilterDictionary#1",
                  (0, c.I8)(p, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetTextFilterDictionaryHandler = {
            name: "SteamEngine.GetTextFilterDictionary#1",
            request: T,
            response: x,
          }),
          (e.GetTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.GetTextFilterDictionary#1",
                  (0, c.I8)(T, e),
                  x,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.GetTextFilterDictionary#1",
                  (0, c.I8)(T, e),
                  x,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTextFilterDictionaryChangedHandler = {
            name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
            request: B,
          }),
          (e.RegisterForNotifyTextFilterDictionaryChanged = function (t, r) {
            return null == (r = r || (0, _.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyTextFilterDictionaryChangedHandler,
                  t,
                );
          }),
          (e.NotifyTextFilterDictionaryChanged = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                  (0, c.I8)(B, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTextFilterDictionaryChanged = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                  (0, c.I8)(B, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetGameIDForPIDHandler = {
            name: "SteamEngine.GetGameIDForPID#1",
            request: b,
            response: F,
          }),
          (e.GetGameIDForPID = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, c.I8)(b, e), F, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SendMsgGetGameIDForPID = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, c.I8)(b, e), F, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SetOverlayEscapeKeyHandlingHandler = {
            name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
            request: w,
          }),
          (e.RegisterForSetOverlayEscapeKeyHandling = function (t, r) {
            return null == (r = r || (0, _.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.SetOverlayEscapeKeyHandlingHandler,
                  t,
                );
          }),
          (e.SetOverlayEscapeKeyHandling = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.SetOverlayEscapeKeyHandling#1",
                  (0, c.I8)(w, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgSetOverlayEscapeKeyHandling = function (e, t) {
            return null == (t = t || (0, _.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.SetOverlayEscapeKeyHandling#1",
                  (0, c.I8)(w, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          });
      })(v || (v = {}));
      var I = r(42865),
        C = r(10333);
      function M() {
        return g.TS.IN_MOBILE ? g.NQ : (0, g.xv)();
      }
      const E = "(1)";
      class W {
        constructor(e) {
          (this.m_Transport = null),
            (this.m_Storage = null),
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: 3,
              bIgnoreFriends: !1,
            }),
            (this.m_mapPlayerCache = new Map()),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            (this.m_strBannedPattern = ""),
            (this.m_strCleanPattern = ""),
            (this.m_regexBannedWords = null),
            (this.m_regexCleanWords = null),
            (this.m_bShownFilterTip = !1),
            (this.m_bInitialized = !1),
            (this.m_nLoadLanguagesRetryTimeout = void 0),
            (0, o.Gn)(this);
          let t = new u.B4();
          (this.m_TextFilterPreferences = {
            eTextFilterSetting: t.text_filter_setting(),
            bIgnoreFriends: t.text_filter_ignore_friends(),
          }),
            (this.m_TextFilterWords = new u.Ey()),
            (this.m_DataAccess = e);
        }
        async Init(e = 0, t = null, r = null) {
          (this.m_bInitialized = !1),
            (this.m_WebUIServiceTransport = I.N),
            (this.m_unAccountID = e),
            (this.m_Transport = t),
            (this.m_Storage = r),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            this.InitSteamEngineLanguages(),
            await this.LoadFilter(),
            await this.LoadTextFilterPreferences(),
            await this.LoadTextFilterWords(),
            await this.RequestUpdatedSettings(),
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0);
        }
        InitSteamEngineLanguages() {
          this.m_WebUIServiceTransport.BIsValid() &&
            (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
              v.NotifyTextFilterDictionaryChangedHandler,
              this.OnTextFilterDictionaryChanged,
            ),
            this.InitSteamEngineLanguage(g.TS.LANGUAGE),
            "english" !== g.TS.LANGUAGE &&
              this.InitSteamEngineLanguage("english"));
        }
        OnTextFilterDictionaryChanged(e) {
          return (
            this.LoadLanguages().then(() => {
              this.OnFilterDataChanged();
            }),
            1
          );
        }
        InitSteamEngineLanguage(e) {
          const t = c.w.Init(p);
          t.Body().set_language(e),
            t.Body().set_type("profanity"),
            v.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            ),
            t.Body().set_type("banned"),
            v.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            );
        }
        GetSteamEngineTextFilterDictionary(e, t) {
          const r = c.w.Init(T);
          return (
            r.Body().set_language(e),
            r.Body().set_type(t),
            v.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport)
          );
        }
        GetStorageKey(e) {
          return e + "_" + this.m_unAccountID;
        }
        async LoadTextFilterPreferences() {
          if (this.m_Storage) {
            let e = await this.m_Storage.GetObject(
              this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
            );
            e && (this.m_TextFilterPreferences = e);
          }
        }
        SaveTextFilterPreferences() {
          this.m_Storage &&
            this.m_Storage.StoreObject(
              this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
              this.m_TextFilterPreferences,
            );
        }
        ObfuscateString(e) {
          try {
            const t = new TextEncoder().encode(E + e);
            return s.iI(t);
          } catch (e) {
            return "";
          }
        }
        DeobfuscateString(e) {
          try {
            const t = s.bg(e);
            let r = new TextDecoder().decode(t);
            return r.startsWith(E)
              ? ((r = r.slice(3)), r)
              : (console.log(
                  "DeobfuscateString given invalid base64 data, ignoring: " + e,
                ),
                "");
          } catch (e) {
            return "";
          }
        }
        async LoadObfuscatedString(e) {
          if (this.m_Storage) {
            let t = await this.m_Storage.GetString(this.GetStorageKey(e));
            if (t) return this.DeobfuscateString(t);
          }
          return null;
        }
        async SaveObfuscatedString(e, t) {
          this.m_Storage &&
            this.m_Storage.StoreString(
              this.GetStorageKey(e),
              this.ObfuscateString(t),
            );
        }
        async LoadTextFilterWords() {
          let e = await this.LoadObfuscatedString(
            "CTextFilterStore_TextFilterWords",
          );
          if (e)
            try {
              this.m_TextFilterWords = u.Ey.fromObject(JSON.parse(e));
            } catch (t) {
              console.warn("Error parsing cached text filter word list", e),
                (this.m_TextFilterWords = new u.Ey());
            }
        }
        SaveTextFilterWords() {
          this.SaveObfuscatedString(
            "CTextFilterStore_TextFilterWords",
            JSON.stringify(this.m_TextFilterWords.toObject()),
          );
        }
        async LoadFilter() {
          let e = await this.LoadObfuscatedString(
              "CTextFilterStore_strBannedPattern",
            ),
            t = await this.LoadObfuscatedString(
              "CTextFilterStore_strCleanPattern",
            );
          null != e && null != t && this.BRebuildFilter(e, t);
        }
        SaveFilter() {
          this.SaveObfuscatedString(
            "CTextFilterStore_strBannedPattern",
            this.m_strBannedPattern,
          ),
            this.SaveObfuscatedString(
              "CTextFilterStore_strCleanPattern",
              this.m_strCleanPattern,
            );
        }
        async RequestUpdatedSettings() {
          let e = new u.B4();
          if (0 !== this.m_unAccountID)
            try {
              if (this.m_Transport) {
                let t = c.w.Init(u.tz);
                e = (await u.xt.GetCommunityPreferences(this.m_Transport, t))
                  .Body()
                  .preferences();
              } else {
                let t = { sessionid: g.TS.SESSIONID, origin: M() };
                const r = await a().get(
                  g.TS.COMMUNITY_BASE_URL +
                    "textfilter/ajaxgetcommunitypreferences",
                  { params: t, withCredentials: !0 },
                );
                e = u.B4.fromObject(r.data.preferences);
              }
            } catch (e) {}
          if (
            (this.UpdateCommunityPreferences(e),
            e.text_filter_words_revision() !==
              this.m_TextFilterWords.text_filter_words_revision())
          ) {
            let t = new u.Ey();
            if (0 !== e.text_filter_words_revision())
              try {
                if (this.m_Transport) {
                  let e = c.w.Init(u.SC);
                  t = (await u.xt.GetTextFilterWords(this.m_Transport, e))
                    .Body()
                    .words();
                } else {
                  let e = { sessionid: g.TS.SESSIONID, origin: M() };
                  const r = await a().get(
                    g.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgettextfiltercustomwords",
                    { params: e, withCredentials: !0 },
                  );
                  t = u.Ey.fromObject(r.data.words);
                }
              } catch (e) {}
            this.UpdateTextFilterWords(t);
          }
        }
        UpdateCommunityPreferences(e) {
          var t;
          let r = !1;
          e.text_filter_setting() !==
            (null === (t = this.m_TextFilterPreferences) || void 0 === t
              ? void 0
              : t.eTextFilterSetting) &&
            ((this.m_TextFilterPreferences.eTextFilterSetting =
              e.text_filter_setting()),
            (r = !0)),
            e.text_filter_ignore_friends() !==
              this.m_TextFilterPreferences.bIgnoreFriends &&
              ((this.m_TextFilterPreferences.bIgnoreFriends =
                e.text_filter_ignore_friends()),
              (r = !0)),
            r && this.SaveTextFilterPreferences();
        }
        get TextFilterPreferences() {
          return this.m_TextFilterPreferences;
        }
        UpdateTextFilterWords(e) {
          (this.m_TextFilterWords = e), this.SaveTextFilterWords();
        }
        async LoadLanguages(e = 15) {
          (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = "");
          try {
            await this.LoadLanguage(g.TS.LANGUAGE),
              "english" !== g.TS.LANGUAGE &&
                (await this.LoadLanguage("english"));
          } catch (t) {
            this.m_nLoadLanguagesRetryTimeout &&
              ((0, f.w)(
                !this.m_nLoadLanguagesRetryTimeout,
                "Got two concurrent calls to TextFilteringStore.LoadLanguages",
              ),
              window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
              (this.m_nLoadLanguagesRetryTimeout = void 0)),
              (e = Math.min(2 * e, 3600)),
              console.warn("LoadLanguages caught", t, "retry in", e, "seconds"),
              (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(
                async () => {
                  (this.m_nLoadLanguagesRetryTimeout = void 0),
                    await this.LoadLanguages(e),
                    this.OnFilterDataChanged();
                },
                1e3 * e,
              ));
          }
        }
        async LoadLanguage(e) {
          let t = "",
            r = !1;
          if (this.m_WebUIServiceTransport.BIsValid())
            try {
              {
                const t = await this.GetSteamEngineTextFilterDictionary(
                  e,
                  "banned",
                );
                this.m_strBannedWords += t.Body().dictionary();
              }
              {
                const t = await this.GetSteamEngineTextFilterDictionary(
                  e,
                  "profanity",
                );
                this.m_strProfanityWords += t.Body().dictionary();
              }
              r = !0;
            } catch (e) {
              console.warn("LoadLanguage caught while loading from cache:", e);
            }
          if (!r) {
            t = `${g.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${M()}`;
            {
              const e = await a().get(t);
              this.m_strBannedWords += e.data;
            }
            t = `${g.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${M()}`;
            {
              const e = await a().get(t);
              this.m_strProfanityWords += e.data;
            }
          }
          t = `${g.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${M()}`;
          {
            const e = await a().get(t);
            this.m_strCleanWords += e.data;
          }
        }
        CreatePattern(e) {
          let t = e.filter(function (e) {
            return (function (e) {
              if ("" === e) return !1;
              try {
                return new RegExp("\\b(" + e + ")\\b", "ugi"), !0;
              } catch (t) {
                return (
                  console.log(
                    `'${e}' is an invalid expression, removing from text filter`,
                  ),
                  !1
                );
              }
            })(e);
          });
          return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
        }
        OnFilterDataChanged() {
          let e = new RegExp(/\s*[\r\n]+\s*/g),
            t = [],
            r = [];
          switch (this.m_TextFilterPreferences.eTextFilterSetting) {
            case 0:
            case 3:
              break;
            case 2:
              t = t.concat(this.m_strBannedWords.split(e));
              break;
            default:
              t = t.concat(
                this.m_strProfanityWords.split(e),
                this.m_strBannedWords.split(e),
              );
          }
          (t = t.concat(
            this.m_TextFilterWords.text_filter_custom_banned_words(),
          )),
            (r = this.m_strCleanWords.split(e)),
            (r = r.concat(
              this.m_TextFilterWords.text_filter_custom_clean_words(),
            ));
          let i = this.CreatePattern(t),
            n = this.CreatePattern(r);
          "" != n && (n = "^(" + n + ")$"),
            this.BRebuildFilter(i, n) && this.SaveFilter();
        }
        BRebuildFilter(e, t) {
          if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
            return !1;
          if (
            ((this.m_regexBannedWords = null),
            (this.m_strBannedPattern = e),
            "" !== e)
          )
            try {
              this.m_regexBannedWords = new RegExp(e, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter bannedwords regex"),
                (0, m.aj)().ReportError(
                  new Error(
                    `Couldn't compile textfilter bannedwords regex: ${e}`,
                  ),
                ),
                (this.m_strBannedPattern = "");
            }
          if (
            ((this.m_regexCleanWords = null),
            (this.m_strCleanPattern = t),
            "" !== t)
          )
            try {
              this.m_regexCleanWords = new RegExp(t, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter cleanwords regex"),
                (0, m.aj)().ReportError(
                  new Error(
                    `Couldn't compile textfilter cleanwords regex: ${e}`,
                  ),
                ),
                (this.m_strCleanPattern = "");
            }
          return !0;
        }
        CreateProfanityReplacement(e) {
          return "♥".repeat(e);
        }
        BHasFilter() {
          return null != this.m_regexBannedWords;
        }
        BShownFilterTip() {
          return this.m_bShownFilterTip;
        }
        SetFilterTipShown(e) {
          this.m_bShownFilterTip = e;
        }
        FilterText(e, t) {
          if (!this.m_regexBannedWords) return t;
          let r = 0;
          if ("string" == typeof e && "" !== e) {
            r = new d.b(e).GetAccountID();
          } else "number" == typeof e && (r = e);
          return !t ||
            r == this.m_unAccountID ||
            (e &&
              this.m_TextFilterPreferences.bIgnoreFriends &&
              this.m_DataAccess.BIsFriend(r))
            ? t
            : t.replace(this.m_regexBannedWords, (e) =>
                this.m_regexCleanWords && 0 == e.search(this.m_regexCleanWords)
                  ? e
                  : this.CreateProfanityReplacement(e.length),
              );
        }
      }
      let D;
      function O() {
        if (!D) {
          const e = new Set();
          let t = { sessionid: g.TS.SESSIONID, origin: M() };
          a()
            .get(g.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
              params: t,
              withCredentials: !0,
            })
            .then((t) => {
              var r, i;
              for (const n of null !==
                (i =
                  null === (r = t.data.friendslist) || void 0 === r
                    ? void 0
                    : r.friends) && void 0 !== i
                ? i
                : [])
                (0, l.S$)(n.efriendrelationship) &&
                  e.add(new d.b(n.ulfriendid).GetAccountID());
            }),
            (D = (t) => e.has(t));
        }
        return D;
      }
      (0, i.Cg)([o.sH], W.prototype, "m_TextFilterPreferences", void 0),
        (0, i.Cg)([o.sH], W.prototype, "m_mapPlayerCache", void 0),
        (0, i.Cg)([o.sH], W.prototype, "m_regexBannedWords", void 0),
        (0, i.Cg)([o.sH], W.prototype, "m_regexCleanWords", void 0),
        (0, i.Cg)([o.sH], W.prototype, "m_bInitialized", void 0),
        (0, i.Cg)([o.XI], W.prototype, "Init", null),
        (0, i.Cg)([C.o], W.prototype, "OnTextFilterDictionaryChanged", null),
        (0, i.Cg)([o.XI], W.prototype, "UpdateCommunityPreferences", null),
        (0, i.Cg)([o.XI], W.prototype, "BRebuildFilter", null);
    },
  },
]);
