/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [807],
  {
    14336: (e, t, i) => {
      i.d(t, { mK: () => g, DW: () => h, js: () => p, tb: () => B });
      var r = i(90626),
        a = i(80902),
        s = i(54806),
        n = i(23809),
        m = i(44654),
        o = i(10622),
        l = i(17720),
        c = i(37735),
        d = i(58632),
        _ = i.n(d);
      function u(e, t) {
        return new (_())(
          async (t) => {
            const i = [...t],
              r = await c.xt.GetPlayerLinkDetails(e, { steamids: i }),
              a = new Map();
            return (
              r
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  a.set(t.public_data.steamid, t);
                }),
              i.map((e) => a.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function p(e) {
        const t = (0, n.KV)(),
          i = r.useContext(y);
        return (0, a.I)(g(i, t, e));
      }
      function h(e) {
        const t = (0, n.KV)(),
          i = r.useContext(y);
        return (0, s.E)({ queries: e.map((e) => g(i, t, e)) });
      }
      const y = r.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const i = await (function (e) {
            return (b ??= u(e));
          })(t).load(l.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let i = new o.Z(e);
            const r = t?.public_data,
              a = t?.private_data;
            (i.m_bInitialized = !!t),
              (i.m_ePersonaState = a?.persona_state ?? 0),
              (i.m_strAvatarHash = r?.sha_digest_avatar
                ? (0, m.Kx)(r.sha_digest_avatar)
                : o.dV),
              (i.m_strPlayerName = r?.persona_name ?? e.ConvertTo64BitString()),
              (i.m_strAccountName = a?.account_name),
              a?.persona_state_flags &&
                (i.m_unPersonaStateFlags = a?.persona_state_flags);
            a?.game_id && (i.m_gameid = a?.game_id);
            a?.game_server_ip_address &&
              (i.m_unGameServerIP = a?.game_server_ip_address);
            a?.lobby_steam_id && (i.m_game_lobby_id = a?.lobby_steam_id);
            a?.game_extra_info && (i.m_strGameExtraInfo = a?.game_extra_info);
            r?.profile_url && (i.m_strProfileURL = r.profile_url);
            return i;
          })(l.b.InitFromAccountID(e), i);
        },
      });
      function B() {
        return r.useContext(y);
      }
      function g(e, t, i) {
        const r = "string" == typeof i ? new l.b(i).GetAccountID() : i;
        return {
          queryKey: ["PlayerSummary", r],
          queryFn: () => e.loadPersonaState(r, t),
          enabled: !!r,
        };
      }
      let b;
    },
    93973: (e, t, i) => {
      i.d(t, {
        CC: () => b,
        Oz: () => g,
        Qt: () => S,
        lu: () => f,
        ns: () => C,
        os: () => w,
      });
      var r = i(34629),
        a = i(56545),
        s = i(72034),
        n = i(17645),
        m = i(81393),
        o = i(78327),
        l = i(90626),
        c = i(68797),
        d = i(6144),
        _ = i(84933),
        u = i(14947),
        p = i(58222),
        h = i(23809),
        y = i(80902);
      class B {
        m_claimState = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        m_claimedFreeItemDef;
        m_rtNextClaimTime;
        m_claimTimer;
        m_SteamInterface = null;
        m_canClaimPromise = null;
        m_claimPromise = null;
        m_claimStateChangeCallback = new d.lu();
        m_testNextClaimFakeResponse = null;
        m_bInTestMode = !1;
        GetClaimItemState() {
          return this.m_claimState;
        }
        GetClaimStateChangeCallback() {
          return this.m_claimStateChangeCallback;
        }
        GetClaimedSaleRewardItemDef() {
          return this.m_claimedFreeItemDef;
        }
        GetNextClaimTime() {
          if (!this.m_rtNextClaimTime) return null;
          return new Date(1e3 * this.m_rtNextClaimTime);
        }
        TEST_OverrideClaimState(e) {
          (this.m_bInTestMode = !0),
            (this.m_canClaimPromise = null),
            (this.m_claimPromise = null),
            e.bCanClaimNewItem
              ? (this.m_testNextClaimFakeResponse = {
                  bAlreadyClaimedCurrentItem: !0,
                  bCanClaimNewItem: !1,
                  rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                  appid: 2243810,
                  community_item_type: 2,
                  community_item_class: 11,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = e),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        async ActivateProfileModifier(e) {
          const t = a.w.Init(p.fp);
          t.Body().set_communityitemid(e.communityitemid),
            t.Body().set_appid(e.appid),
            t.Body().set_activate(!0);
          const i = await p.uy.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            t,
          );
          return (
            1 != i.GetEResult() &&
              console.error(
                `Error when calling QuestService.ActivateProfileModifierItem: EResult=${i.GetEResult()}`,
              ),
            i.GetEResult()
          );
        }
        async LoadCanUserClaimItem() {
          return this.m_bInTestMode
            ? this.m_claimState
            : (this.m_canClaimPromise ||
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
              this.m_canClaimPromise);
        }
        async InternalLoadCanUserClaimItem() {
          (0, m.wT)(
            o.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const e = a.w.Init(n.c3);
          e.Body().set_language(o.TS.LANGUAGE);
          let t = null;
          try {
            const i = await n.Qm.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == i.GetEResult())
              return (
                (this.m_claimedFreeItemDef = Boolean(
                  i.Body().reward_item()?.defid(),
                )
                  ? i.Body().reward_item()?.toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: !!i.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    (i.Body().next_claim_time() ?? 0) > 0
                      ? i.Body().next_claim_time()
                      : void 0,
                }),
                (this.m_rtNextClaimTime = i.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                this.m_claimState
              );
            t = (0, c.H)(i);
          } catch (e) {
            t = (0, c.H)(e);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalLoadCanUserClaimItem failed: error: " +
                t?.strErrorMsg,
              t,
            ),
            { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
          );
        }
        async UserClaimItem() {
          return (
            this.m_testNextClaimFakeResponse &&
              (console.log(
                "CSaleItemClaimableRewardsStore - testing, pretending claim action succeeded",
                (0, u.HO)(this.m_testNextClaimFakeResponse),
              ),
              (this.m_claimState = this.m_testNextClaimFakeResponse),
              this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
              (this.m_rtNextClaimTime = this.m_claimState.rtNextClaimTime),
              this.SetClaimTimer(),
              (this.m_testNextClaimFakeResponse = null)),
            this.m_bInTestMode
              ? this.m_claimState
              : (this.m_claimPromise ||
                  (this.m_claimPromise = this.InternalUserClaimItem()),
                this.m_claimPromise)
          );
        }
        async InternalUserClaimItem() {
          (0, m.wT)(
            o.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, m.wT)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const e = a.w.Init(n.wt);
          e.Body().set_language(o.TS.LANGUAGE);
          let t = null;
          try {
            const i = await n.Qm.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == i.GetEResult())
              return (
                (this.m_claimedFreeItemDef =
                  i.Body().reward_item()?.toObject() ?? {}),
                (this.m_claimState = {
                  bCanClaimNewItem: !1,
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef.community_item_class,
                  rtNextClaimTime:
                    (i.Body().next_claim_time() ?? 0) > 0
                      ? i.Body().next_claim_time()
                      : void 0,
                }),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = i.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.m_claimState
              );
            if (29 == i.GetEResult())
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            t = (0, c.H)(i);
          } catch (e) {
            t = (0, c.H)(e);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalUserClaimItem failed: error: " +
                t?.strErrorMsg,
              t,
            ),
            { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 }
          );
        }
        SetClaimTimer() {
          if (this.m_claimTimer) return;
          if (!this.m_rtNextClaimTime) return;
          const e = Date.now();
          let t = new Date(1e3 * this.m_rtNextClaimTime);
          const i = Math.max(0, Math.min(1, t.getTime() - e));
          this.m_claimTimer = window.setTimeout(
            () => {
              (this.m_claimTimer = void 0),
                Date.now() > t.getTime()
                  ? ((this.m_canClaimPromise = null),
                    (this.m_claimPromise = null),
                    (this.m_claimedFreeItemDef = null),
                    (this.m_claimState = {
                      bCanClaimNewItem: !0,
                      bAlreadyClaimedCurrentItem: !1,
                      rtNextClaimTime: void 0,
                    }),
                    this.GetClaimStateChangeCallback().Dispatch(
                      this.m_claimState,
                    ))
                  : this.SetClaimTimer();
            },
            i > 3e5 ? i / 2 : i,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            B.s_Singleton ||
              ((B.s_Singleton = new B()),
              B.s_Singleton.Init(),
              "dev" == o.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = B.s_Singleton)),
            B.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, o.Tc)("loyalty_webapi_token", "application_config");
          (0, m.wT)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new s.D(o.TS.WEBAPI_BASE_URL, e));
        }
      }
      function g() {
        const [e, t] = (0, l.useState)(B.Get().GetClaimItemState()),
          [i, r] = (0, l.useState)(!0);
        return (
          (0, l.useEffect)(() => {
            B.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => r(!1));
          }, []),
          (0, _.hL)(B.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: i }
        );
      }
      function b() {
        return { fnClaimItem: B.Get().UserClaimItem };
      }
      function f() {
        return { fnSetClaimState: B.Get().TEST_OverrideClaimState };
      }
      async function C(e) {
        return B.Get().ActivateProfileModifier(e);
      }
      function S(e, t, i) {
        const r = (0, h.KV)();
        return (0, y.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${i}`],
          queryFn: async () =>
            (async function (e, t, i, r) {
              const s = a.w.Init(n.R4);
              return (
                s.Body().set_sale_def_type(t),
                s.Body().set_language(i),
                s.Body().set_include_community_item_def(r),
                (await n.Qm.GetCurrentDefinition(e, s)).Body().toObject()
              );
            })(r, e, t, i),
          staleTime: 1 / 0,
        });
      }
      function w(e, t, i, r) {
        const s = (0, h.KV)();
        return (0, y.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${i}_${r}`],
          queryFn: async () =>
            (async function (e, t, i, r) {
              const s = a.w.Init(n.Ju);
              return (
                s.Body().set_sale_def_type(t),
                s.Body().set_language(i),
                s.Body().set_include_community_item_def(r),
                (await n.Qm.GetClaimedSaleRewards(e, s)).Body().toObject()
              );
            })(s, e, t, i),
          staleTime: 1 / 0,
        });
      }
      (0, r.Cg)([_.oI], B.prototype, "TEST_OverrideClaimState", null),
        (0, r.Cg)([_.oI], B.prototype, "UserClaimItem", null);
    },
    6469: (e, t, i) => {
      i.d(t, { K: () => l });
      var r = i(41735),
        a = i.n(r),
        s = i(14947),
        n = i(68797),
        m = i(78327),
        o = i(43882);
      class l {
        static s_VODStore;
        m_mapAppToVOD = new Map();
        GetVODForAppID(e) {
          return this.m_mapAppToVOD.get(e);
        }
        async LoadVODForAppID(e, t) {
          if (this.m_mapAppToVOD.has(e)) return this.m_mapAppToVOD.get(e);
          const i = m.TS.STORE_BASE_URL + "video/details/" + e + "/0",
            r = {};
          try {
            let n = await a().get(i, {
              params: r,
              withCredentials: !0,
              cancelToken: t ? t.token : void 0,
            });
            if (t && t.token.reason) return null;
            if (
              n &&
              200 == n.status &&
              n.data &&
              (1 == n.data.success || "ready" == n.data.success)
            ) {
              let t = (0, s.sH)({
                appid: e,
                video_url: n.data.video_url,
                bookmark: n.data.bookmark,
              });
              return (
                n.data.bookmark
                  ? o.t.Get().SetBookmarkForApp(e, n.data.bookmark)
                  : o.t.Get().InitializeBookmarkForApp(e),
                this.m_mapAppToVOD.set(e, t),
                t
              );
            }
          } catch (e) {
            let t = (0, n.H)(e);
            console.error(
              "CVideoOnDemandStore:LoadVODForAppID: Failed " + t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        static Get() {
          return (
            l.s_VODStore || ((l.s_VODStore = new l()), l.s_VODStore.Init()),
            l.s_VODStore
          );
        }
        Init() {}
      }
    },
    43882: (e, t, i) => {
      i.d(t, { M: () => M, t: () => k });
      var r,
        a,
        s,
        n = i(41735),
        m = i.n(n),
        o = i(56545),
        l = i(72034),
        c = i(80613),
        d = i.n(c),
        _ = i(89068);
      class u extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.video_id || _.Sg(u.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  video_id: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  client_cellid: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = _.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            i = new u();
          return u.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class p extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.video_id || _.Sg(p.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  video_id: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  video_url: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = _.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            i = new p();
          return p.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class h extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.encryption_key || _.Sg(h.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  encryption_key: {
                    n: 1,
                    br: _.qM.readBytes,
                    bw: _.gp.writeBytes,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = _.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            i = new h();
          return h.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class y extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.app_id || _.Sg(y.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  app_id: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  client_cellid: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = _.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            i = new y();
          return y.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class B extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.app_id || _.Sg(B.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  app_id: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  opf_settings: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = _.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            i = new B();
          return B.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class g extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.app_id || _.Sg(g.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  app_id: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  playback_position_in_seconds: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  video_track_id: {
                    n: 3,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  audio_track_id: {
                    n: 4,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  timedtext_track_id: {
                    n: 5,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  last_modified: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  hide_from_watch_history: {
                    n: 7,
                    d: !1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  hide_from_library: {
                    n: 8,
                    d: !1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = _.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            i = new g();
          return g.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "VideoBookmark";
        }
      }
      class b extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.bookmarks || _.Sg(b.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { bookmarks: { n: 1, c: g, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = _.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            i = new b();
          return b.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class f extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appids || _.Sg(f.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  updated_since: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = _.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            i = new f();
          return f.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class C extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.bookmarks || _.Sg(C.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { bookmarks: { n: 1, c: g, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = _.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            i = new C();
          return C.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      !(function (e) {
        (e.ClientGetVideoURL = function (e, t) {
          return e.SendMsg("Video.ClientGetVideoURL#1", (0, o.I8)(u, t), p, {
            ePrivilege: 1,
          });
        }),
          (e.SetVideoBookmark = function (e, t) {
            return e.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, o.I8)(b, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetVideoBookmarks = function (e, t) {
            return e.SendMsg("Video.GetVideoBookmarks#1", (0, o.I8)(f, t), C, {
              ePrivilege: 1,
            });
          });
      })(r || (r = {})),
        (function (e) {
          e.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: h,
          };
        })(a || (a = {})),
        (function (e) {
          e.ClientGetOPFSettings = function (e, t) {
            return e.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, o.I8)(y, t),
              B,
              { ePrivilege: 1 },
            );
          };
        })(s || (s = {}));
      var S = i(68797),
        w = i(78327);
      class k {
        static s_VODStore;
        m_LoadingOAuth = null;
        m_transport;
        m_mapBookmarks = new Map();
        SetBookmarkForApp(e, t) {
          this.ValidateBookmarkData(t)
            ? this.m_mapBookmarks.set(e, g.fromObject(t))
            : this.InitializeBookmarkForApp(e);
        }
        ValidateBookmarkData(e) {
          const t = e;
          return (
            "object" == typeof t &&
            Number.isInteger(t.playback_position_in_seconds) &&
            Number.isInteger(t.app_id)
          );
        }
        InitializeBookmarkForApp(e) {
          if (!this.m_mapBookmarks.has(e)) {
            let t = {
              app_id: e,
              playback_position_in_seconds: 0,
              video_track_id: "0",
              audio_track_id: "0",
              timedtext_track_id: "0",
              hide_from_watch_history: !1,
              hide_from_library: !1,
            };
            this.m_mapBookmarks.set(e, new g(t));
          }
        }
        GetBookmarkPlayTimeInSeconds(e) {
          if (this.m_mapBookmarks.has(e)) {
            let t = this.m_mapBookmarks.get(e).playback_position_in_seconds();
            if (Number.isInteger(t)) return t;
          }
          return 0;
        }
        async SendBookMarkedTimeToServer(e, t, i, a, s) {
          if (!w.iA.logged_in) return;
          if (
            !this.m_transport &&
            (await this.m_LoadingOAuth, !this.m_transport)
          )
            return void console.warn(
              "CVideoBookmarkStore:SetBookMark no auth token / transport",
            );
          const n = o.w.Init(b);
          if (this.m_mapBookmarks.has(e)) {
            let m = this.m_mapBookmarks.get(e),
              o = !1;
            m.app_id() != e && ((o = !0), m.set_app_id(e)),
              m.playback_position_in_seconds() != t &&
                ((o = !0), m.set_playback_position_in_seconds(t)),
              (i = i || "0"),
              m.video_track_id() != i && (m.set_video_track_id(i), (o = !0)),
              (a = a || "0"),
              m.audio_track_id() != a && (m.set_audio_track_id(a), (o = !0)),
              (s = s || "0") != m.timedtext_track_id() &&
                (m.set_timedtext_track_id(s), (o = !0)),
              o &&
                (n.Body().add_bookmarks(m),
                r.SetVideoBookmark(this.m_transport, n));
          }
        }
        static Get() {
          return (
            k.s_VODStore || ((k.s_VODStore = new k()), k.s_VODStore.Init()),
            k.s_VODStore
          );
        }
        Init() {
          w.iA.logged_in && this.LoadWatchVideoOAuthToken();
        }
        async LoadWatchVideoOAuthToken() {
          const e =
              "community" == (0, w.yK)()
                ? w.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                : w.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
            t = {};
          try {
            let i = await m().get(e, { params: t, withCredentials: !0 });
            if (
              i &&
              200 == i.status &&
              i.data &&
              1 == i.data.success &&
              i.data.webapi_token
            )
              return (
                (this.m_transport = new l.D(
                  w.TS.WEBAPI_BASE_URL,
                  i.data.webapi_token,
                ).GetServiceTransport()),
                this.m_transport
              );
          } catch (e) {
            let t = (0, S.H)(e);
            console.error(
              "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                t.strErrorMsg,
              t,
            );
          }
          return null;
        }
      }
      class M {
        m_appid;
        constructor(e) {
          this.m_appid = e;
        }
        async SetBookmark(e, t, i, r) {
          w.iA.logged_in &&
            k
              .Get()
              .SendBookMarkedTimeToServer(this.m_appid, Math.floor(e), t, i, r);
        }
        GetBeginPlaytime() {
          return w.iA.logged_in
            ? k.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
            : 0;
        }
      }
    },
    96236: (e, t, i) => {
      i.d(t, { K: () => o });
      var r = i(34629),
        a = i(90626),
        s = i(84933),
        n = i(60383),
        m = i(76217);
      class o extends a.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = a.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let i = 0,
            r = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((i = e.width), (r = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: i,
            nPrevRenderHeight: r,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: t,
              holdGampadFocus: i,
              onRender: r,
              style: s,
              mode: o,
              ...l
            } = this.props,
            c = this.state.bRenderChildren;
          let d = s;
          if (!c) {
            const i = this.state.nPrevRenderWidth || e,
              r = this.state.nPrevRenderHeight || t;
            (void 0 === r && void 0 === i) ||
              (d = { ...s, minHeight: r, minWidth: i });
          }
          const _ = this.BLoadAndUnload() ? "repeated" : "once";
          let u = a.createElement(
            n.J,
            {
              ref: this.m_refContainer,
              style: d,
              ...l,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: _,
            },
            c && this.props.children,
          );
          return (
            i && (u = a.createElement(m.Z, { focusableIfEmpty: !0 }, u)), u
          );
        }
      }
      (0, r.Cg)([s.oI], o.prototype, "OnVisibilityChange", null);
    },
  },
]);
