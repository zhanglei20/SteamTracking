/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    15392: (e) => {
      e.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    40594: (e) => {
      e.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    71109: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        Y: "_1FD7rgQVEqkzjDjzYa-1BC",
      };
    },
    14336: (e, t, r) => {
      "use strict";
      r.d(t, { mK: () => y, DW: () => g, js: () => _, tb: () => w });
      var i = r(90626),
        n = r(80902),
        a = r(54806),
        s = r(23809),
        o = r(44654),
        l = r(10622),
        c = r(17720),
        d = r(37735),
        m = r(58632),
        u = r.n(m);
      function p(e, t) {
        return new (u())(
          async (t) => {
            const r = [...t],
              i = await d.xt.GetPlayerLinkDetails(e, { steamids: r }),
              n = new Map();
            return (
              i
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  n.set(t.public_data.steamid, t);
                }),
              r.map((e) => n.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function _(e) {
        const t = (0, s.KV)(),
          r = i.useContext(h);
        return (0, n.I)(y(r, t, e));
      }
      function g(e) {
        const t = (0, s.KV)(),
          r = i.useContext(h);
        return (0, a.E)({ queries: e.map((e) => y(r, t, e)) });
      }
      const h = i.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const r = await (function (e) {
            return (b ??= p(e));
          })(t).load(c.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let r = new l.Z(e);
            const i = t?.public_data,
              n = t?.private_data;
            (r.m_bInitialized = !!t),
              (r.m_ePersonaState = n?.persona_state ?? 0),
              (r.m_strAvatarHash = i?.sha_digest_avatar
                ? (0, o.Kx)(i.sha_digest_avatar)
                : l.dV),
              (r.m_strPlayerName = i?.persona_name ?? e.ConvertTo64BitString()),
              (r.m_strAccountName = n?.account_name),
              n?.persona_state_flags &&
                (r.m_unPersonaStateFlags = n?.persona_state_flags);
            n?.game_id && (r.m_gameid = n?.game_id);
            n?.game_server_ip_address &&
              (r.m_unGameServerIP = n?.game_server_ip_address);
            n?.lobby_steam_id && (r.m_game_lobby_id = n?.lobby_steam_id);
            n?.game_extra_info && (r.m_strGameExtraInfo = n?.game_extra_info);
            i?.profile_url && (r.m_strProfileURL = i.profile_url);
            return r;
          })(c.b.InitFromAccountID(e), r);
        },
      });
      function w() {
        return i.useContext(h);
      }
      function y(e, t, r) {
        const i = "string" == typeof r ? new c.b(r).GetAccountID() : r;
        return {
          queryKey: ["PlayerSummary", i],
          queryFn: () => e.loadPersonaState(i, t),
          enabled: !!i,
        };
      }
      let b;
    },
    93973: (e, t, r) => {
      "use strict";
      r.d(t, {
        CC: () => b,
        Oz: () => y,
        Qt: () => B,
        lu: () => f,
        ns: () => S,
        os: () => v,
      });
      var i = r(34629),
        n = r(56545),
        a = r(72034),
        s = r(17645),
        o = r(81393),
        l = r(78327),
        c = r(90626),
        d = r(68797),
        m = r(6144),
        u = r(84933),
        p = r(14947),
        _ = r(58222),
        g = r(23809),
        h = r(80902);
      class w {
        m_claimState = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        m_claimedFreeItemDef;
        m_rtNextClaimTime;
        m_claimTimer;
        m_SteamInterface = null;
        m_canClaimPromise = null;
        m_claimPromise = null;
        m_claimStateChangeCallback = new m.lu();
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
          const t = n.w.Init(_.fp);
          t.Body().set_communityitemid(e.communityitemid),
            t.Body().set_appid(e.appid),
            t.Body().set_activate(!0);
          const r = await _.uy.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            t,
          );
          return (
            1 != r.GetEResult() &&
              console.error(
                `Error when calling QuestService.ActivateProfileModifierItem: EResult=${r.GetEResult()}`,
              ),
            r.GetEResult()
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
          (0, o.wT)(
            l.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const e = n.w.Init(s.c3);
          e.Body().set_language(l.TS.LANGUAGE);
          let t = null;
          try {
            const r = await s.Qm.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == r.GetEResult())
              return (
                (this.m_claimedFreeItemDef = Boolean(
                  r.Body().reward_item()?.defid(),
                )
                  ? r.Body().reward_item()?.toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: !!r.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    (r.Body().next_claim_time() ?? 0) > 0
                      ? r.Body().next_claim_time()
                      : void 0,
                }),
                (this.m_rtNextClaimTime = r.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                this.m_claimState
              );
            t = (0, d.H)(r);
          } catch (e) {
            t = (0, d.H)(e);
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
                (0, p.HO)(this.m_testNextClaimFakeResponse),
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
          (0, o.wT)(
            l.iA.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, o.wT)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const e = n.w.Init(s.wt);
          e.Body().set_language(l.TS.LANGUAGE);
          let t = null;
          try {
            const r = await s.Qm.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              e,
            );
            if (1 == r.GetEResult())
              return (
                (this.m_claimedFreeItemDef =
                  r.Body().reward_item()?.toObject() ?? {}),
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
                    (r.Body().next_claim_time() ?? 0) > 0
                      ? r.Body().next_claim_time()
                      : void 0,
                }),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = r.Body().next_claim_time()),
                this.SetClaimTimer(),
                this.m_claimState
              );
            if (29 == r.GetEResult())
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            t = (0, d.H)(r);
          } catch (e) {
            t = (0, d.H)(e);
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
          const r = Math.max(0, Math.min(1, t.getTime() - e));
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
            r > 3e5 ? r / 2 : r,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            w.s_Singleton ||
              ((w.s_Singleton = new w()),
              w.s_Singleton.Init(),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = w.s_Singleton)),
            w.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const e = (0, l.Tc)("loyalty_webapi_token", "application_config");
          (0, o.wT)(
            e,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new a.D(l.TS.WEBAPI_BASE_URL, e));
        }
      }
      function y() {
        const [e, t] = (0, c.useState)(w.Get().GetClaimItemState()),
          [r, i] = (0, c.useState)(!0);
        return (
          (0, c.useEffect)(() => {
            w.Get()
              .LoadCanUserClaimItem()
              .then(t)
              .finally(() => i(!1));
          }, []),
          (0, u.hL)(w.Get().GetClaimStateChangeCallback(), t),
          { ...e, bLoading: r }
        );
      }
      function b() {
        return { fnClaimItem: w.Get().UserClaimItem };
      }
      function f() {
        return { fnSetClaimState: w.Get().TEST_OverrideClaimState };
      }
      async function S(e) {
        return w.Get().ActivateProfileModifier(e);
      }
      function B(e, t, r) {
        const i = (0, g.KV)();
        return (0, h.I)({
          queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${r}`],
          queryFn: async () =>
            (async function (e, t, r, i) {
              const a = n.w.Init(s.R4);
              return (
                a.Body().set_sale_def_type(t),
                a.Body().set_language(r),
                a.Body().set_include_community_item_def(i),
                (await s.Qm.GetCurrentDefinition(e, a)).Body().toObject()
              );
            })(i, e, t, r),
          staleTime: 1 / 0,
        });
      }
      function v(e, t, r, i) {
        const a = (0, g.KV)();
        return (0, h.I)({
          queryKey: [`GetClaimedSaleRewards_${e}_${t}_${r}_${i}`],
          queryFn: async () =>
            (async function (e, t, r, i) {
              const a = n.w.Init(s.Ju);
              return (
                a.Body().set_sale_def_type(t),
                a.Body().set_language(r),
                a.Body().set_include_community_item_def(i),
                (await s.Qm.GetClaimedSaleRewards(e, a)).Body().toObject()
              );
            })(a, e, t, r),
          staleTime: 1 / 0,
        });
      }
      (0, i.Cg)([u.oI], w.prototype, "TEST_OverrideClaimState", null),
        (0, i.Cg)([u.oI], w.prototype, "UserClaimItem", null);
    },
    69409: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => p });
      var i = r(7850),
        n = r(90626),
        a = r(22837),
        s = r(38390),
        o = r(52038),
        l = r(61859),
        c = r(61336),
        d = r(78327),
        m = r(15392),
        u = r(27666);
      function p(e) {
        const { gidEvent: t } = e,
          r = (0, s.RR)(t),
          [p, _] = (0, n.useMemo)(() => {
            if (
              r?.jsondata?.localized_sale_product_banner?.length > 0 &&
              r?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, a.sf)(d.TS.LANGUAGE),
                t = l.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_banner,
                  e,
                ),
                i = l.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && i?.length > 0)
                return [
                  u.z.GenerateURLFromHashAndExt(r.clanSteamID, t),
                  u.z.GenerateURLFromHashAndExt(r.clanSteamID, i),
                ];
            }
            return [null, null];
          }, [r]);
        return p?.length > 0 && _?.length > 0
          ? (0, i.jsxs)("a", {
              href: (0, c.k2)(r.GetSaleURL()),
              className: m.Link,
              children: [
                (0, i.jsx)("img", {
                  src: p,
                  className: (0, o.A)(m.Banner, m.Big),
                }),
                (0, i.jsx)("img", {
                  src: _,
                  className: (0, o.A)(m.Banner, m.Mobile),
                }),
              ],
            })
          : null;
      }
    },
    96236: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => c });
      var i = r(34629),
        n = r(7850),
        a = r(90626),
        s = r(84933),
        o = r(60383),
        l = r(76217);
      class c extends a.Component {
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
          let r = 0,
            i = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((r = e.width), (i = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: r,
            nPrevRenderHeight: i,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: t,
              holdGampadFocus: r,
              onRender: i,
              style: a,
              mode: s,
              ...c
            } = this.props,
            d = this.state.bRenderChildren;
          let m = a;
          if (!d) {
            const r = this.state.nPrevRenderWidth || e,
              i = this.state.nPrevRenderHeight || t;
            (void 0 === i && void 0 === r) ||
              (m = { ...a, minHeight: i, minWidth: r });
          }
          const u = this.BLoadAndUnload() ? "repeated" : "once";
          let p = (0, n.jsx)(o.J, {
            ref: this.m_refContainer,
            style: m,
            ...c,
            onVisibilityChange: this.OnVisibilityChange,
            trigger: u,
            children: d && this.props.children,
          });
          return (
            r && (p = (0, n.jsx)(l.Z, { focusableIfEmpty: !0, children: p })), p
          );
        }
      }
      (0, i.Cg)([s.oI], c.prototype, "OnVisibilityChange", null);
    },
    5907: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Ee });
      var i = r(90626),
        n = r(7850),
        a = r(45699),
        s = r(76217),
        o = r(37788),
        l = r(23310),
        c = r(23809),
        d = r(62093),
        m = r(60014),
        u = r(13871),
        p = r(30894),
        _ = r(93973),
        g = r(16021),
        h = r(55263),
        w = r(12155),
        y = r(32630),
        b = r(4434),
        f = r(52038),
        S = r(61859),
        B = r(60778),
        v = r(25489),
        C = r(44691),
        I = r(78327),
        x = r(39199),
        R = r(40594);
      const M = ({ nPercent: e, size: t = 120, strokeWidth: r = 20 }) => {
        const i = (t - r) / 2,
          a = 2 * Math.PI * i,
          s = a - (e / 100) * a,
          o = 100 == e;
        return (0, n.jsx)("div", {
          className: (0, f.A)({ [R.Circular]: !0, [R.Full]: o }),
          children: (0, n.jsxs)("svg", {
            width: t,
            height: t,
            style: { transform: "rotate(-90deg)" },
            children: [
              (0, n.jsx)("circle", {
                cx: t / 2,
                cy: t / 2,
                r: i,
                stroke: "#0c131d",
                strokeWidth: r,
                fill: "none",
              }),
              (0, n.jsx)("circle", {
                cx: t / 2,
                cy: t / 2,
                r: i,
                stroke: "#1a9fff",
                strokeWidth: r,
                fill: "none",
                strokeDasharray: a,
                strokeDashoffset: s,
                style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
              }),
            ],
          }),
        });
      };
      var j,
        D = r(22797),
        T = r(10224),
        A = r(60779),
        N = r(92834),
        F = r(3740),
        z = r(44986),
        U = r(32754),
        q = r(61336),
        G = r(20713),
        W = r(40807),
        P = r(80902),
        Q = r(1035),
        O = r(34181),
        L = r(17720),
        k = r(4796),
        E = r(8092),
        H = r(75279),
        V = r(706),
        K = r(56545),
        Z = r(80613),
        $ = r.n(Z),
        Y = r(89068);
      class X extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.recommendationid || Y.Sg(X.M()),
            Z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: Y.qM.readString,
                    bw: Y.gp.writeString,
                  },
                  voted_up: { n: 3, br: Y.qM.readBool, bw: Y.gp.writeBool },
                  is_public: { n: 4, br: Y.qM.readBool, bw: Y.gp.writeBool },
                  language: { n: 5, br: Y.qM.readString, bw: Y.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  saved_hardware_id: {
                    n: 10,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = Y.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class J extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), Z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class ee extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.saved_hardware_id || Y.Sg(ee.M()),
            Z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  saved_hardware_id: {
                    n: 1,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = Y.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Request";
        }
      }
      class te extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.num_backfilled || Y.Sg(te.M()),
            Z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  num_backfilled: {
                    n: 1,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = Y.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Response";
        }
      }
      class re extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.reaction_type || Y.Sg(re.M()),
            Z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  count: { n: 2, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = Y.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class ie extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.id || Y.Sg(ie.M()),
            Z.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  id: { n: 1, br: Y.qM.readEnum, bw: Y.gp.writeEnum },
                  ranges: { n: 2, c: ne, r: !0, q: !0 },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = Y.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag";
        }
      }
      class ne extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.start || Y.Sg(ne.M()),
            Z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  start: { n: 1, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                  end: { n: 2, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = Y.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag_Range";
        }
      }
      class ae extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.recommendationid || Y.Sg(ae.M()),
            Z.Message.initialize(this, e, 0, -1, [27, 40, 54], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                  appid: { n: 3, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                  review: { n: 4, br: Y.qM.readString, bw: Y.gp.writeString },
                  time_created: {
                    n: 5,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: Y.qM.readFloat, bw: Y.gp.writeFloat },
                  language: {
                    n: 10,
                    br: Y.qM.readString,
                    bw: Y.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: Y.qM.readBool, bw: Y.gp.writeBool },
                  is_public: { n: 13, br: Y.qM.readBool, bw: Y.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: Y.qM.readEnum,
                    bw: Y.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: Y.qM.readString,
                    bw: Y.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: Y.qM.readEnum,
                    pbr: Y.qM.readPackedEnum,
                    bw: Y.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: Y.qM.readFloat,
                    bw: Y.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: Y.qM.readString,
                    bw: Y.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: Y.qM.readInt32,
                    bw: Y.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: Y.qM.readInt32,
                    bw: Y.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: Y.qM.readInt32,
                    bw: Y.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: Y.qM.readInt32,
                    bw: Y.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: Y.qM.readInt32,
                    bw: Y.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: Y.qM.readEnum,
                    bw: Y.gp.writeEnum,
                  },
                  refunded: { n: 38, br: Y.qM.readBool, bw: Y.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: Y.qM.readInt32,
                    bw: Y.gp.writeInt32,
                  },
                  reactions: { n: 40, c: re, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: Y.qM.readString,
                    bw: Y.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: Y.qM.readBool,
                    bw: Y.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: Y.qM.readString,
                    bw: Y.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: Y.qM.readInt32,
                    bw: Y.gp.writeInt32,
                  },
                  is_bot_review_pct: {
                    n: 50,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  positivity_pct: {
                    n: 51,
                    br: Y.qM.readUint32,
                    bw: Y.gp.writeUint32,
                  },
                  tags_with_ranges: { n: 54, c: ie, r: !0, q: !0 },
                  saved_hardware_id: {
                    n: 56,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                  hardware_cluster_id: {
                    n: 57,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = Y.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class se extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.appid || Y.Sg(se.M()),
            Z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  appid: { n: 1, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = Y.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class oe extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.accountids_recommended || Y.Sg(oe.M()),
            Z.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: Y.qM.readUint32,
                    pbr: Y.qM.readPackedUint32,
                    bw: Y.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: Y.qM.readUint32,
                    pbr: Y.qM.readPackedUint32,
                    bw: Y.gp.writeRepeatedUint32,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = Y.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class le extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.requests || Y.Sg(le.M()),
            Z.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: { requests: { n: 1, c: ce, r: !0, q: !0 } },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = Y.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class ce extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.steamid || Y.Sg(ce.M()),
            Z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  steamid: {
                    n: 1,
                    br: Y.qM.readUint64String,
                    bw: Y.gp.writeUint64String,
                  },
                  appid: { n: 2, br: Y.qM.readUint32, bw: Y.gp.writeUint32 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = Y.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class de extends Z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.recommendations || Y.Sg(de.M()),
            Z.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { recommendations: { n: 1, c: ae, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = Y.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return Y.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return Y.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new ($().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Y.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new ($().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Y.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new ($().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (e) {
        (e.Update = function (e, t) {
          return e.SendMsg("UserReviews.Update#1", (0, K.I8)(X, t), J, {
            ePrivilege: 3,
          });
        }),
          (e.BackfillSavedHardware = function (e, t) {
            return e.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, K.I8)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.GetFriendsRecommendedApp = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, K.I8)(se, t),
              oe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, K.I8)(le, t),
              de,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(j || (j = {}));
      var me = r(41735),
        ue = r.n(me),
        pe = r(3734);
      class _e {
        static async LoadFriendsRecommendedApp(e, t) {
          const r = K.w.Init(se);
          r.Body().set_appid(t);
          const i = await j.GetFriendsRecommendedApp(e, r),
            n = i.GetEResult();
          if (1 == n) return i.Body().toObject();
          throw `Error ${n} failed to call GetFriendsRecommendedApp ${t}`;
        }
        static async LoadStoreRelevanceData(e) {
          let t = { appid: e },
            r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const i = (
            await ue().get(
              `${I.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: t, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            i &&
              1 == i.success &&
              (i.results.similar_played_apps &&
                (r.arrSimilarPlayedApps = i.results.similar_played_apps.map(
                  (e) => ({
                    appid: e.appid,
                    playtimeForever: e.playtime_forever,
                  }),
                )),
              i.results.recommended_by_ir && (r.bRecommendedByIR = !0)),
            r
          );
        }
      }
      var ge = r(57834),
        he = r.n(ge),
        we = r(14336),
        ye = r(26505),
        be = r(6083);
      const fe = new B.wd("AppRelevance").Debug;
      function Se(e) {
        const {
            appID: t,
            bShowAvatars: r,
            storeItem: a,
            bHideDescription: s,
            bShowCuratorInfo: o,
            bShowCreatorInfo: l,
          } = e,
          d = (0, ye.Nd)(t),
          m = (function (e) {
            const t = (0, c.KV)();
            return (0, P.I)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
              queryFn: () => _e.LoadFriendsRecommendedApp(t, e),
              enabled: I.iA.logged_in,
            });
          })(t),
          u = (function (e) {
            return (0, P.I)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", e],
              queryFn: () => _e.LoadStoreRelevanceData(e),
              enabled: I.iA.logged_in,
            });
          })(t),
          _ = (function () {
            const { data: e } = (0, pe.PG)("App Relevance Store Top Sellers", {
              sort: 11,
              start: 0,
              count: 100,
            });
            return e;
          })(),
          h = (0, P.I)({
            queryKey: ["SimilarPlayedAppsLoad", t],
            queryFn: () =>
              g.A.Get().QueueMultipleAppRequests(
                u.data.arrSimilarPlayedApps?.map((e) => e.appid),
                { include_basic_info: !0, include_assets: !0 },
              ),
            enabled: u.isSuccess,
          }),
          w = (function (e, t) {
            const r = (0, i.useMemo)(
              () => p.Fm.Get().GetRecommendingCuratorsForApp(e) || [],
              [e],
            );
            return (0, P.I)({
              queryKey: ["RecommendingCurators", e],
              queryFn: () =>
                Promise.all(
                  r?.map((e) => k.ac.LoadClanInfoForClanAccountID(e)),
                ),
              enabled: !!t && r && r.length > 0,
            });
          })(t, o),
          y = (0, i.useMemo)(() => {
            let e = [];
            return (
              a &&
                ((e = e.concat(
                  a
                    .GetAllFranchiseCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "franchise" })),
                )),
                (e = e.concat(
                  a
                    .GetAllDeveloperCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "developer" })),
                )),
                (e = e.concat(
                  a
                    .GetAllPublisherCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "publisher" })),
                )),
                (e = e.filter((e) =>
                  p.Fm.Get().BIsFollowingCurator(e.nAccountID),
                ))),
              e
            );
          }, [a]),
          b = (0, P.I)({
            queryKey: ["FollowedCreators", t],
            queryFn: () =>
              k.ac
                .LoadClanInfoForClanAccountID(y[0].nAccountID)
                .then((e) => ({ clanInfo: e, type: y[0].type })),
            enabled: !!l && y && y.length > 0,
          }),
          B = (0, P.I)({
            queryKey: ["PlayerSummaries", t, r],
            queryFn: async () => {
              let e = [],
                t = [],
                i = [];
              const n = r ? 10 : 1;
              for (
                let t = 0;
                t < m.data.accountids_recommended?.length && t < n;
                t++
              ) {
                const r = L.b.InitFromAccountID(
                  m.data.accountids_recommended[t],
                );
                e.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < d.data.in_wishlist?.length && e < n; e++) {
                const r = new L.b(d.data.in_wishlist[e].steamid);
                t.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < d.data.owns?.length && e < n; e++) {
                const t = new L.b(d.data.owns[e].steamid);
                i.push(t.ConvertTo64BitString());
              }
              return {
                rgRecommendedFriends: e,
                rgWishlistFriends: t,
                rgOwnedFriends: i,
              };
            },
            enabled: m.isSuccess && d.isSuccess,
          });
        if (
          !_ ||
          h.isLoading ||
          u.isLoading ||
          m.isLoading ||
          d.isLoading ||
          w.isLoading ||
          b.isLoading ||
          B.isLoading
        )
          return (0, n.jsx)(D.t, { size: "medium", position: "center" });
        let v = [];
        u.isSuccess &&
          u.data.arrSimilarPlayedApps &&
          u.data.arrSimilarPlayedApps.forEach((e) => {
            const r = g.A.Get().GetApp(e.appid);
            r
              ? v.push(
                  (0, n.jsx)(
                    Ce,
                    { lifetimePlaytime: e.playtimeForever, storeItem: r },
                    e.appid,
                  ),
                )
              : console.error("Failed to load store data ", t);
          });
        const C = _.GetItemIDs().findIndex((e) => e.appid === t),
          x = u.data?.bRecommendedByIR,
          R = v.length > 0,
          M = d.data?.owns?.length,
          j = d.data?.in_wishlist?.length,
          T = m.data?.accountids_recommended?.length;
        let A = 0;
        return (
          M > 0 && A++,
          j > 0 && A++,
          T > 0 && A++,
          x && A++,
          C >= 0 && A++,
          v.length > 0 && A++,
          o && w?.data?.length > 0 && A++,
          l && Boolean(b.data) && A++,
          fe(
            "FriendsOwned: ",
            M,
            " FriendsWishlisted: ",
            j,
            "cRecommended: ",
            T,
          ),
          (0, n.jsxs)(n.Fragment, {
            children: [
              A > 0 &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: he().WhyRelevant,
                      children: (0, S.we)("#DiscoveryQueue_WhyRelevant"),
                    }),
                    (0, n.jsxs)("div", {
                      role: "list",
                      className: he().RelevantCtn,
                      children: [
                        R &&
                          (0, n.jsx)(je, {
                            header: (0, S.we)("#DiscoveryQueue_SimilarGames"),
                            children: (0, n.jsx)("div", {
                              className: he().ReleventSimilarAppsCtn,
                              children: v,
                            }),
                          }),
                        o &&
                          w?.data?.length > 0 &&
                          (0, n.jsx)(je, {
                            header: (0, S.we)(
                              "#ContentHub_Recommendation_Curators",
                            ),
                            children: (0, n.jsx)("div", {
                              className: (0, f.A)(
                                he().ReleventSimilarAppsCtn,
                                he().RecommendingCuratorsCtn,
                              ),
                              children: w.data
                                .filter(Boolean)
                                .map((e) =>
                                  (0, n.jsx)(
                                    ve,
                                    { curator: e },
                                    "curator_" + e.clanAccountID,
                                  ),
                                ),
                            }),
                          }),
                        l &&
                          Boolean(b.data) &&
                          (0, n.jsx)(Be, { creatorInfo: b.data }),
                        C >= 0 &&
                          (0, n.jsx)(je, {
                            header: (0, S.um)(
                              "#DiscoveryQueue_TopSellers",
                              (0, be.D)(C + 1),
                              (0, n.jsx)("span", {
                                className: he().RelevantTextBold,
                              }),
                            ),
                          }),
                        x &&
                          !R &&
                          (0, n.jsx)(je, {
                            header: (0, S.we)(
                              "#DiscoveryQueue_RecommendedByIR",
                            ),
                          }),
                        (0, n.jsx)(Ie, {
                          bShowAvatars: r,
                          count: m.data?.accountids_recommended?.length,
                          locToken: "#DiscoveryQueue_FriendsRecommended",
                          arrSteamIDs: B.data?.rgRecommendedFriends,
                        }),
                        (0, n.jsx)(Ie, {
                          bShowAvatars: r,
                          count: d.data?.owns?.length,
                          locToken: "#DiscoveryQueue_FriendsOwned",
                          arrSteamIDs: B.data?.rgOwnedFriends,
                        }),
                        (0, n.jsx)(Ie, {
                          bShowAvatars: r,
                          count: d.data?.in_wishlist?.length,
                          locToken: "#DiscoveryQueue_FriendsWishlisted",
                          arrSteamIDs: B.data?.rgWishlistFriends,
                        }),
                      ],
                    }),
                  ],
                }),
              s && 0 != A
                ? (0, n.jsx)("div", { "aria-label": a.GetShortDescription() })
                : (0, n.jsx)("div", {
                    className: (0, f.A)(he().AppDescription, A && he().Divider),
                    children: a.GetShortDescription(),
                  }),
            ],
          })
        );
      }
      function Be(e) {
        const { creatorInfo: t } = e;
        if (!t) return null;
        let r;
        switch (t.type) {
          case "publisher":
            r = "#ContentHub_Recommendation_FollowedPublisher";
            break;
          case "developer":
            r = "#ContentHub_Recommendation_FollowedDeveloper";
            break;
          case "franchise":
            r = "#ContentHub_Recommendation_FollowedFranchise";
        }
        return r
          ? (0, n.jsx)(je, {
              header: (0, S.PP)(
                r,
                (0, n.jsx)("span", {
                  className: he().RelevantTextBold,
                  children: t.clanInfo?.group_name,
                }),
              ),
            })
          : null;
      }
      function ve(e) {
        const { curator: t } = e,
          { creatorHome: r } = (0, E.FV)(t?.clanAccountID);
        return t && r
          ? (0, n.jsx)(a.Ii, {
              href: r.GetCreatorHomeURL(null),
              children: (0, n.jsx)("img", { src: t.avatar_medium_url }),
            })
          : null;
      }
      function Ce(e) {
        const { lifetimePlaytime: t, storeItem: r } = e,
          i = (0, H.DJ)(r);
        return (0, n.jsx)("div", {
          className: he().SimilarAppCtn,
          children: (0, n.jsx)(V.Q, {
            id: i,
            bHidePrice: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: { minWidth: "320px", zIndex: 5e3 },
            },
            children: (0, n.jsx)("img", {
              className: he().SimilarAppImg,
              alt: r.GetName(),
              src: r.GetAssets().GetSmallCapsuleURL(),
            }),
          }),
        });
      }
      function Ie(e) {
        const { arrSteamIDs: t, count: r, locToken: i, bShowAvatars: a } = e;
        return r
          ? 1 != r || a
            ? (0, n.jsx)(je, {
                header: (0, S.um)(
                  i,
                  r,
                  (0, n.jsx)("span", { className: he().RelevantTextBold }),
                ),
                children:
                  a &&
                  t.length > 0 &&
                  (0, n.jsx)("div", {
                    className: he().FriendAvatarsCtn,
                    children:
                      1 == r
                        ? (0, n.jsx)(Me, { steamid: t[0] })
                        : (0, n.jsx)(Re, { arrSteamIDs: t }),
                  }),
              })
            : (0, n.jsx)(je, {
                header: (0, S.PP)(
                  i + "_Single",
                  (0, n.jsx)(xe, { steamid: t[0] }),
                ),
              })
          : null;
      }
      function xe(e) {
        const { steamid: t } = e,
          { data: r } = (0, we.js)(t);
        return r && r.m_bInitialized
          ? (0, n.jsx)("span", {
              "data-miniprofile": "s" + r.m_steamid.ConvertTo64BitString(),
              className: he().RelevantTextBold,
              children: r.m_strPlayerName,
            })
          : null;
      }
      function Re(e) {
        const { arrSteamIDs: t } = e,
          r = (0, we.DW)(t);
        return (0, n.jsx)(n.Fragment, {
          children: r.map(
            ({ data: e }) =>
              e &&
              (0, n.jsx)(
                Q.i8,
                {
                  "data-miniprofile": "s" + e.m_steamid.ConvertTo64BitString(),
                  persona: e,
                  size: "Small",
                  statusPosition: "right",
                },
                e.m_steamid.ConvertTo64BitString(),
              ),
          ),
        });
      }
      function Me(e) {
        const { steamid: t } = e,
          { data: r } = (0, we.js)(t);
        return r
          ? (0, n.jsxs)(s.Z, {
              className: he().FriendBlockCtn,
              "data-miniprofile": "s" + t,
              children: [
                (0, n.jsx)(Q.i8, {
                  persona: r,
                  size: "Small",
                  statusPosition: "right",
                }),
                (0, n.jsx)(O.D, {
                  className: he().PersonaStatus,
                  persona: r,
                  eFriendRelationship: 3,
                  bIsSelf: !1,
                  strNickname: null,
                  bParenthesizeNicknames: !1,
                  bCompactView: !1,
                  bNoMask: !0,
                }),
              ],
            })
          : null;
      }
      function je(e) {
        const { children: t, header: r } = e;
        return (0, n.jsxs)("div", {
          className: he().RelevantItem,
          children: [
            (0, n.jsx)("div", {
              className: he().RelevantCheck,
              children: (0, n.jsx)(w.Jlk, {}),
            }),
            (0, n.jsxs)("div", {
              className: he().RelevantColumn,
              children: [
                (0, n.jsx)("div", {
                  className: he().ReleventText,
                  children: r,
                }),
                t,
              ],
            }),
          ],
        });
      }
      var De = r(60338),
        Te = r(24267),
        Ae = r(35380);
      new B.wd("DiscoveryQueueApp").Debug;
      function Ne(e) {
        const {
            appID: t,
            nItemHeight: r,
            nItemWidth: a,
            selected: o,
            fnFocused: l,
            eStoreDiscoveryQueueType: c,
            storePageFilter: d,
            bPreferDemoStorePage: m,
            elVideo: p,
            elDetails: _,
            appAriaIDs: g,
          } = e,
          [w] = (0, h.t7)(t, De.Gy),
          y = (0, I.Qn)(),
          b = (0, u.R7)(),
          B = b?.ownerWindow || window,
          v = Fe(w, c, d, m),
          { bIsIgnored: C, fnUpdateIgnored: x } = (0, De.TK)(t),
          { bIsWishlisted: R, fnUpdateWishlist: M } = (0, De.u4)(t),
          j = i.useRef(void 0);
        if (
          (i.useEffect(() => {
            o && j.current && j.current.focus({ preventScroll: !0 });
          }, [o]),
          !w)
        )
          return console.warn("Error: missing store item for appid ", t), null;
        const D = { width: a || void 0, height: r || void 0 };
        return (0, n.jsxs)(s.Z, {
          "aria-labelledby": (0, N.q)(
            g.nameId,
            g.tagsId,
            g.reviewId,
            g.relevanceId,
            g.buttonsId,
          ),
          ref: j,
          style: D,
          className: (0, f.A)(he().DiscoveryQueueApp, o && he().Selected),
          onOptionsActionDescription: R
            ? (0, S.we)("#DiscoveryQueue_RemoveFromWishlist")
            : (0, S.we)("#DiscoveryQueue_AddToWishlist"),
          onOptionsButton: M,
          onOKActionDescription: (0, S.we)("#DiscoveryQueue_ViewStorePage"),
          onOKButton: () => {
            B.location.href = v;
          },
          onSecondaryActionDescription: C
            ? (0, S.we)("#DiscoveryQueue_Undo")
            : (0, S.we)("#DiscoveryQueue_IgnoreLink"),
          onSecondaryButton: x,
          fnScrollIntoViewHandler: () => (l(), !0),
          children: [
            (0, n.jsx)("div", {
              className: (0, f.A)(he().IgnoredCtn, C && he().Active),
              children: (0, n.jsxs)("div", {
                className: (0, f.A)(he().IgnoredInfo, C && he().Active),
                children: [
                  (0, n.jsx)("div", {
                    className: he().IgnoredTitle,
                    children: (0, S.we)("#DiscoveryQueue_Ignored"),
                  }),
                  (0, n.jsx)("div", {
                    className: he().IgnoredDescription,
                    children: (0, S.we)("#DiscoveryQueue_IgnoredConfirmation"),
                  }),
                  (0, n.jsxs)(s.Z, {
                    className: (0, f.A)(
                      he().QueueButton,
                      he().UndoIgnoreButton,
                    ),
                    onClick: x,
                    children: [
                      y &&
                        (0, n.jsx)(z.$m, {
                          button: G.g4.X,
                          type: z.wt.Light,
                          size: z.xY.Medium,
                        }),
                      (0, S.we)("#DiscoveryQueue_Undo"),
                    ],
                  }),
                ],
              }),
            }),
            p,
            _,
          ],
        });
      }
      function Fe(e, t, r, n) {
        const a = (0, m.n9)();
        return i.useMemo(() => {
          if (!e) return;
          const i = (0, x.Bk)(r),
            s = t >= 0 ? "?inqueue=" + t + (r ? "_" + i : "") : "",
            o = (0, m.bV)(a, e.GetStorePageURL(n) + s);
          return (0, q.NT)(o);
        }, [n, t, a, e, r]);
      }
      function ze(e) {
        const {
            appID: t,
            bShowMinimizedDisplay: r,
            eStoreDiscoveryQueueType: i,
            storePageFilter: a,
            bPreferDemoStorePage: o,
            appAriaIDs: l,
          } = e,
          [c] = (0, h.t7)(t, De.Gy),
          d = (0, Ae.$5)(t),
          { bIsIgnored: m, fnUpdateIgnored: u } = (0, De.TK)(t),
          { bIsWishlisted: p, fnUpdateWishlist: _ } = (0, De.u4)(t),
          g = Fe(c, i, a, o),
          y = (0, I.Qn)(),
          b = y;
        if (!c) return;
        const B = c.GetAssets().GetLibraryCapsuleURL(),
          v = c.GetAssets().GetHeaderURL();
        return (0, n.jsxs)(s.Z, {
          className: he().AppDetailsCtn,
          children: [
            (0, n.jsxs)("div", {
              className: he().AppDetailsCtnTop,
              children: [
                B &&
                  (0, n.jsxs)("a", {
                    className: (0, f.A)(he().CapsuleLink),
                    href: g,
                    children: [
                      (0, n.jsx)("img", {
                        className: he().AppLibraryHero,
                        src: B,
                      }),
                      v &&
                        (0, n.jsx)("img", {
                          className: he().AppHeader,
                          src: v,
                        }),
                    ],
                  }),
                (0, n.jsxs)("div", {
                  id: l.nameId,
                  className: he().RightColumn,
                  children: [
                    (0, n.jsx)("a", {
                      className: (0, f.A)(he().AppName),
                      href: g,
                      children: c.GetName(),
                    }),
                    (0, n.jsx)(F.N, { bSingleLineMode: !0, id: d }),
                  ],
                }),
                (0, n.jsx)(Ue, {
                  rgTagIDs: c.GetTagIDs(),
                  ariaLabelID: l.tagsId,
                }),
                (0, n.jsx)("div", {
                  className: he().AppReviews,
                  id: l.reviewId,
                  children: (0, n.jsx)(Te.J, {
                    bShowTooltip: !0,
                    bTruncateTotalReviews: r,
                    id: d,
                  }),
                }),
                (0, n.jsx)("div", {
                  id: l.relevanceId,
                  className: he().AppRelevanceCtn,
                  children: (0, n.jsx)(Se, {
                    bHideDescription: y,
                    bShowAvatars: !r,
                    storeItem: c,
                    appID: t,
                  }),
                }),
              ],
            }),
            !y &&
              (0, n.jsx)("div", {
                className: he().AppActionButtonsCtn,
                children: (0, n.jsx)("div", {
                  id: l.buttonsId,
                  className: he().AppActionJustButtonsCtn,
                  children: (0, n.jsxs)("div", {
                    className: he().ButtonsRowWrap,
                    children: [
                      c.BHasDemo() &&
                        (0, n.jsx)(W.j, {
                          id: d,
                          className: (0, f.A)(
                            he().QueueButton,
                            he().Primary,
                            he().Launch,
                          ),
                        }),
                      (0, n.jsxs)("a", {
                        className: (0, f.A)(he().QueueButton, he().Primary),
                        href: g,
                        children: [
                          b &&
                            (0, n.jsx)(z.$m, {
                              button: G.g4.Y,
                              type: z.wt.Light,
                              size: z.xY.Medium,
                              additionalClassName: he().YGlyph,
                            }),
                          " ",
                          (0, S.we)("#DiscoveryQueue_ViewStorePage"),
                        ],
                      }),
                      (0, n.jsx)(U.he, {
                        toolTipContent: p
                          ? (0, S.we)("#RemoveFromWishlist_ttip")
                          : (0, S.we)("#AddToWishlist_ttip"),
                        children: (0, n.jsxs)(s.Z, {
                          "aria-label": p
                            ? (0, S.we)("#Sale_RemoveFromWishlist")
                            : (0, S.we)("#Sale_AddToWishlist"),
                          focusable: !0,
                          className: (0, f.A)(
                            he().QueueButton,
                            p && he().Active,
                          ),
                          onClick: _,
                          children: [
                            b &&
                              (0, n.jsx)(z.$m, {
                                button: G.g4.Y,
                                type: z.wt.Light,
                                size: z.xY.Medium,
                                additionalClassName: he().YGlyph,
                              }),
                            p ? (0, n.jsx)(w.qnF, {}) : (0, n.jsx)(w.T4m, {}),
                          ],
                        }),
                      }),
                      (0, n.jsx)(U.he, {
                        toolTipContent: (0, S.we)(
                          "#SaleTrailerCarousel_IgnoreLink_ttip",
                        ),
                        children: (0, n.jsx)(s.Z, {
                          "aria-label": (0, S.we)("#DiscoveryQueue_IgnoreLink"),
                          focusable: !0,
                          className: (0, f.A)(
                            he().QueueButton,
                            m && he().Active,
                          ),
                          onClick: u,
                          children: (0, n.jsx)(w.NtH, {}),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
          ],
        });
      }
      function Ue(e) {
        const { rgTagIDs: t, ariaLabelID: r } = e,
          i = [...(0, De.W3)(t)].slice(0, 8);
        return (0, n.jsx)("div", {
          id: r,
          role: "list",
          className: he().AppTagsCtn,
          children: i.map((e) =>
            (0, n.jsx)(A.Fz, { className: he().TagEntry, tagID: e }, e),
          ),
        });
      }
      var qe = r(60884),
        Ge = r(90511),
        We = r(17376);
      const Pe = new B.wd("DiscoveryQueueWizard").Debug,
        Qe = 1,
        Oe = 1400,
        Le = "discoveryqueue2022";
      async function ke(e, t, r, i) {
        let n = [],
          a = !1;
        try {
          const { appids: s, exhausted: o } = await x.aI
            .Get()
            .GetDiscoveryQueueAppsOfType(e, t, i);
          (n = [...s]),
            (a = o),
            r && -1 === n.findIndex((e) => e === r) && n.unshift(r),
            await g.A.Get().QueueMultipleAppRequests(n, { ...De.Gy, ...Ge.LB });
        } catch (e) {
          console.error("Failed getting discovery queue apps", e);
        }
        return { appids: n, exhausted: a };
      }
      function Ee(e) {
        const [t, r] = i.useState(!1),
          a = (0, c.KV)();
        return (
          (0, i.useEffect)(() => {
            x.aI.Init(a), r(!0);
          }, [a]),
          t ? (0, n.jsx)(He, { ...e }) : null
        );
      }
      function He(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            includeAppID: o,
            storePageFilter: c,
            bPreferDemoStorePage: _,
            bShowAOAutoPlayWarning: g,
          } = e,
          [h, B] = i.useState(0),
          [R, M] = i.useState(void 0),
          [j, D] = i.useState(0),
          A = (0, u.R7)(),
          N = A?.ownerWindow || window,
          F = (0, m.ru)(Le),
          [z, U] = i.useState(0),
          G = (0, d.b)();
        (0, C.E)("ArrowLeft", () => O(!1), !0, !0),
          (0, C.E)("Left", () => O(!1), !0, !0),
          (0, C.E)("ArrowRight", () => O(!0), !0, !0),
          (0, C.E)("Right", () => O(!0), !0, !0),
          (0, C.E)("Escape", () => r?.(), !0, !0),
          (0, C.E)("Esc", () => r?.(), !0, !0);
        const W = i.useMemo(() => Boolean(N.innerWidth < Oe), [N]),
          { fnGetDiscoveryQueue: P, rgAppIDs: Q } = (function (e, t, r) {
            const [n, a] = i.useState([]),
              s = (0, b.m)("DiscoveryQueueWizard"),
              o = async (i) => {
                let { appids: o } = await ke(e, !i, i && r, t);
                if (i && !o.length) {
                  let { appids: r } = await ke(e, !0, void 0, t);
                  o = r;
                }
                if (!s?.token?.reason) {
                  const e = [...(n ?? []), ...o, Qe];
                  a(e);
                }
                Pe("Loaded new discovery queue apps: ", o);
              };
            return { fnGetDiscoveryQueue: o, rgAppIDs: n };
          })(t, c, o);
        i.useEffect(() => {
          P(!0), p.Fm.Get().HintLoad();
        }, []),
          i.useEffect(() => {
            const e = Q[h];
            e != R && (e && e != Qe && G.AddImpression(e, F), M(e));
          }, [G, h, R, Q, F]);
        const O = (e) => {
          const t = v.OQ(h + (e ? 1 : -1), 0, Q.length - 1);
          t != h &&
            (B(t), Pe("New selected index: ", t, " Prev selected index: ", h));
        };
        i.useEffect(() => {
          Q?.length &&
            Q[h] !== Qe &&
            (U((e) => e + 1),
            x.aI
              .Get()
              .SkipDiscoveryQueueItem(Q[h], t, c)
              .then(() => U((e) => e - 1)));
        }, [t, h, Q, c]),
          i.useEffect(() => {
            Q.length != j &&
              (D(Q.length), Q.length > j && Q[h] == Qe && B(h + 1));
          }, [j, h, Q]);
        const [L] = i.useState(new Map()),
          k = (0, x.WX)(t, c),
          E = !(0, T.c5)() && h > 0,
          H = !(0, T.c5)() && h < Q.length - 1,
          {
            refContainer: V,
            bIsDragging: K,
            nDragOffset: Z,
            nDragSelectedOffsetIndex: $,
            handleTouchStart: Y,
            handleTouchMove: X,
            handleTouchEnd: J,
          } = (function (e, t) {
            const r = i.useRef(null),
              [n, a] = i.useState(0),
              [s, o] = i.useState(!1),
              [l, c] = i.useState(0),
              d = i.useRef(0),
              m = 50,
              u = (e) => {
                o(!0), (d.current = e.touches[0].clientX), a(0), c(0);
              },
              p = (e) => {
                if (!s) return;
                const t = e.touches[0].clientX - d.current;
                a(t), c(n > m ? 1 : n < -m ? -1 : 0);
              },
              _ = () => {
                s &&
                  (o(!1),
                  n > m
                    ? e((e) => Math.max(e - 1, 0))
                    : n < -m && e((e) => Math.min(e + 1, t - 1)),
                  a(0),
                  c(0));
              };
            return {
              refContainer: r,
              bIsDragging: s,
              nDragOffset: n,
              nDragSelectedOffsetIndex: l,
              handleTouchStart: u,
              handleTouchMove: p,
              handleTouchEnd: _,
            };
          })((e) => B(e), Q.length),
          ee = (e) => v.W(h + e, Q) && (v.LA(e, -1, 1) || K),
          te = (0, m.aL)(I.TS.STORE_BASE_URL + "explore?dq=widget"),
          re = Q[h] !== Qe,
          { nQueueStart: ie, nCount: ne } = (function (e, t) {
            let r = 0;
            for (let i = 0; i < e; i++) t[i] == Qe && (r = i + 1);
            let i = 0;
            for (let r = e; r < t.length; r++) {
              if (t[r] == Qe) {
                i = r;
                break;
              }
              r == t.length - 1 && (i = t.length);
            }
            const n = i - r;
            return { nQueueStart: r, nQueueEnd: i, nCount: n };
          })(h, Q);
        return (0, n.jsx)(y.Ay, {
          feature: Le,
          children: (0, n.jsx)(s.Z, {
            role: "dialog",
            focusable: !1,
            "flow-children": "column",
            className: he().DiscoveryQueueCarouselCtn,
            navEntryPreferPosition: l.iU.LAST,
            onCancelButton: () => r?.(),
            onCancelActionDescription: (0, S.we)("#Button_Close"),
            children: (0, n.jsxs)("div", {
              className: he().DiscoveryQueueWrapper,
              onClick: (e) => {
                e.target == e.currentTarget && (r?.(), e.stopPropagation());
              },
              children: [
                k.length > 0 &&
                  (0, n.jsx)(s.Z, {
                    "flow-children": "row",
                    className: he().DiscoveryQueueName,
                    children: k,
                  }),
                (0, n.jsxs)(s.Z, {
                  "flow-children": "row",
                  className: he().TopBarCtn,
                  children: [
                    (0, n.jsx)(s.Z, {
                      className: he().LearnMore,
                      children: (0, S.oW)(
                        "#DiscoveryQueue_LearnMore_Default",
                        (0, n.jsx)(a.Ii, {
                          className: he().LearnMoreLink,
                          href: (0, q.NT)(te),
                        }),
                      ),
                    }),
                    (0, n.jsx)(s.Z, {
                      className: he().ControlsCtn,
                      children: (0, n.jsx)(s.Z, {
                        focusable: !0,
                        className: he().QueueButton,
                        onClick: r,
                        "aria-label": (0, S.we)("#Button_Close"),
                        onActivate: () => r && r(),
                        children: (0, n.jsx)(w.X, {}),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(s.Z, {
                  role: "button",
                  "aria-label": (0, S.we)("#Carousel_Next"),
                  onClick: () => O(!1),
                  className: (0, f.A)(
                    he().QueueNavArrow,
                    he().LeftArrow,
                    E && he().Enable,
                  ),
                  children: (0, n.jsx)(w.l8x, { angle: 180 }),
                }),
                (0, n.jsx)(s.Z, {
                  role: "button",
                  "aria-label": (0, S.we)("#Carousel_Prev"),
                  onClick: () => O(!0),
                  className: (0, f.A)(
                    he().QueueNavArrow,
                    he().RightArrow,
                    H && he().Enable,
                  ),
                  children: (0, n.jsx)(w.l8x, { angle: 0 }),
                }),
                (0, n.jsx)(s.Z, {
                  ref: V,
                  className: he().DiscoveryQueueItemsCtn,
                  focusable: !1,
                  onTouchStart: Y,
                  onTouchMove: X,
                  onTouchEnd: J,
                  children: [-2, -1, 0, 1, 2].map((e) =>
                    (0, n.jsx)(
                      "div",
                      {
                        className: (0, f.A)({
                          [he().DiscoveryQueueItemPositioner]: !0,
                          [he().Dragging]: K,
                          [he().InRange]: ee(e),
                          [he().FarLeft]: -2 == e,
                          [he().Left]: -1 == e,
                          [he().Current]: 0 == e,
                          [he().Right]: 1 == e,
                          [he().FarRight]: 2 == e,
                          [he().Selected]: e + $ == 0,
                        }),
                        style: { "--dragOffsetX": `${Z}px` },
                        children:
                          ee(e) &&
                          (0, n.jsx)(Ve, {
                            eStoreDiscoveryQueueType: t,
                            storePageFilter: c,
                            rgAppIDs: Q,
                            index: h + e,
                            bShowMinimizedDisplay: W,
                            selectedIndex: h,
                            bPreferDemoStorePage: Boolean(_),
                            mapViewedAppCount: L,
                            fnCloseModal: r,
                            fnLoadNextQueue: () => P(!1),
                            fnAdvance: O,
                            bSkipAppRequestPending: Boolean(0 != z),
                            showAOAutoPlayWarning: Boolean(g),
                          }),
                      },
                      h + e,
                    ),
                  ),
                }),
                (0, n.jsx)(qe.A, {
                  className: (0, f.A)(!re && he().ProgressHidden),
                  showPriorAsActive: !0,
                  count: ne,
                  selectedIndex: h - ie,
                }),
              ],
            }),
          }),
        });
      }
      function Ve(e) {
        const {
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            rgAppIDs: a,
            index: s,
            bShowMinimizedDisplay: o,
            selectedIndex: l,
            bPreferDemoStorePage: c,
            mapViewedAppCount: d,
            fnCloseModal: m,
            fnLoadNextQueue: u,
            fnAdvance: p,
            bSkipAppRequestPending: _,
            showAOAutoPlayWarning: g,
          } = e,
          [h, w] = i.useState(!1),
          y = {
            nameId: i.useId(),
            tagsId: i.useId(),
            reviewId: i.useId(),
            relevanceId: i.useId(),
            buttonsId: i.useId(),
          },
          b = () => {
            l != s && p(s > l);
          },
          f = l === s,
          S = i.useRef(f);
        if (
          (i.useEffect(() => {
            const e = S.current;
            if (((S.current = f), e && !f)) {
              w(!0);
              const e = setTimeout(() => w(!1), 500);
              return () => {
                clearTimeout(e);
              };
            }
          }, [f]),
          a[s] == Qe)
        ) {
          let n = 0;
          for (let e = s - 1; e >= 0; e--) a[e] == Qe && (n += 1);
          let o = 0;
          for (let e = s - 1; e >= 0 && a[e] !== Qe; e--) o++;
          return (
            d.has(n) ||
              d.set(n, x.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(t, r)),
            (0, i.createElement)(Ke, {
              ...e,
              key: l,
              selected: f,
              lastCard: l == a.length - 1,
              fnLoadNextQueue: u,
              fnCloseModal: m,
              summaryCardIndex: n,
              eStoreDiscoveryQueueType: t,
              viewedAppCount: (d.get(n) || 0) + o,
              fnFocused: b,
              fnAdvance: () => p(!0),
              bSkipAppRequestPending: _,
            })
          );
        }
        const B = f || S.current || h;
        return (0, n.jsx)(Ne, {
          appAriaIDs: y,
          eStoreDiscoveryQueueType: t,
          storePageFilter: r,
          selected: f,
          appID: a[s],
          bPreferDemoStorePage: c,
          fnFocused: b,
          elVideo: (0, n.jsx)(De.y3, {
            appID: a[s],
            focused: B,
            showAOAutoPlayWarning: g,
          }),
          elDetails: (0, n.jsx)(ze, {
            appID: a[s],
            bShowMinimizedDisplay: o,
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            bPreferDemoStorePage: c,
            appAriaIDs: y,
          }),
        });
      }
      function Ke(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            summaryCardIndex: a,
            lastCard: o,
            selected: l,
            fnLoadNextQueue: c,
            storePageFilter: d,
            fnDisplaySummaryReward: u,
            viewedAppCount: g,
            fnFocused: h,
            fnAdvance: w,
            bSkipAppRequestPending: y,
          } = e,
          [B, v] = i.useState(!1),
          C = (0, I.Qn)(),
          R = (0, _.Qt)(2, I.TS.LANGUAGE, !1),
          [M, j] = i.useState(0),
          [D, T] = i.useState(0),
          { data: A } = (0, We.F0)();
        i.useEffect(() => {
          l &&
            !B &&
            A &&
            p.Fm.Get()
              .HintLoad()
              .then(() => {
                x.aI
                  .Get()
                  .LoadSkippedApps(t, d)
                  .then((e) => {
                    j(e.reduce((e, t) => (A.has(t) ? e + 1 : e), 0)),
                      T(
                        e.reduce(
                          (e, t) => (p.Fm.Get().BIsGameIgnored(t) ? e + 1 : e),
                          0,
                        ),
                      ),
                      v(!0);
                  });
              });
        }, [B, t, l, d, A]);
        const [N, F] = i.useState(!1),
          z = (0, x.IH)(t, d),
          U = (0, b.m)("DiscoveryQueueSummary"),
          G = async () => {
            o ? N || (F(!0), await c(), U?.token?.reason || F(!1)) : w();
          };
        return (0, n.jsxs)(Ze, {
          selected: l,
          fnFocused: h,
          fnOnContinue: G,
          fnCloseModal: r,
          bLoaded: B,
          children: [
            (0, n.jsxs)("div", {
              className: he().SummaryContentCtn,
              children: [
                (0, n.jsx)("div", {
                  className: he().SummaryTitle,
                  children: (0, S.we)("#DiscoveryQueue_SummaryTitle"),
                }),
                !z &&
                  l &&
                  R.data?.definition &&
                  (0, n.jsx)(Ye, {
                    bSkipAppRequestPending: y,
                    summaryCardIdx: a,
                  }),
                (0, n.jsx)("div", {
                  className: he().YourStats,
                  children: (0, S.we)("#DiscoveryQueue_YourStats"),
                }),
                (0, n.jsxs)(s.Z, {
                  "flow-children": "row",
                  className: he().SummaryGrid,
                  children: [
                    (0, n.jsxs)("div", {
                      className: he().GridItem,
                      children: [
                        (0, n.jsx)("div", {
                          className: he().GridTitle,
                          children: (0, S.we)("#DiscoveryQueue_ViewedCaps"),
                        }),
                        (0, n.jsx)("div", {
                          className: he().GridNumber,
                          children: (0, be.D)(g),
                        }),
                        (0, n.jsx)("div", {
                          className: he().GridSubTitle,
                          children: (0, S.we)("#DiscoveryQueue_Titles"),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: he().GridItem,
                      children: [
                        (0, n.jsx)("div", {
                          className: he().GridTitle,
                          children: (0, S.we)("#DiscoveryQueue_WishlistedCaps"),
                        }),
                        (0, n.jsx)("div", {
                          className: he().GridNumber,
                          children: (0, be.D)(M),
                        }),
                        (0, n.jsx)(m.Fh, {
                          className: (0, f.A)(he().GridSubTitle, he().TextLink),
                          href: (0, q.NT)(I.TS.STORE_BASE_URL + "wishlist"),
                          children: (0, S.we)("#DiscoveryQueue_ViewWishlist"),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: he().GridItem,
                      children: [
                        (0, n.jsx)("div", {
                          className: he().GridTitle,
                          children: (0, S.we)("#DiscoveryQueue_IgnoredCaps"),
                        }),
                        (0, n.jsx)("div", {
                          className: he().GridNumber,
                          children: (0, be.D)(D),
                        }),
                        (0, n.jsx)(m.Fh, {
                          className: (0, f.A)(he().GridSubTitle, he().TextLink),
                          href: (0, q.NT)(
                            I.TS.STORE_BASE_URL + "account/notinterested",
                          ),
                          children: (0, S.we)("#DiscoveryQueue_ViewIgnored"),
                        }),
                      ],
                    }),
                  ],
                }),
                !C &&
                  (0, n.jsxs)(s.Z, {
                    className: he().SummaryActionButtonsCtn,
                    children: [
                      (0, n.jsx)(s.Z, {
                        className: (0, f.A)(he().QueueButton, he().Wide),
                        onClick: r,
                        children: (0, S.we)("#ActionButtonLabelDone"),
                      }),
                      !z &&
                        (0, n.jsx)(s.Z, {
                          className: (0, f.A)(
                            N && he().Disabled,
                            he().QueueButton,
                            he().Primary,
                            he().Wide,
                          ),
                          onClick: G,
                          children: N
                            ? (0, S.we)("#Loading")
                            : (0, S.we)("#Button_Continue"),
                        }),
                    ],
                  }),
              ],
            }),
            Boolean(!z) &&
              (0, n.jsx)(n.Fragment, { children: Boolean(u) && u(a + 1) }),
          ],
        });
      }
      function Ze(e) {
        const {
            children: t,
            selected: r,
            fnOnContinue: a,
            fnCloseModal: s,
            fnFocused: l,
            bLoaded: c,
          } = e,
          d = (0, m.aL)(I.TS.STORE_BASE_URL + "wishlist"),
          p = (0, u.R7)(),
          _ = p?.ownerWindow || window,
          g = i.useRef(void 0);
        return (
          i.useEffect(() => {
            r && g.current && g.current.focus({ preventScroll: !0 });
          }, [r]),
          (0, n.jsx)(o.YZ, {
            ref: g,
            "aria-live": "polite",
            className: (0, f.A)(
              he().SummaryCtn,
              he().DiscoveryQueueApp,
              r && he().Selected,
            ),
            onOptionsActionDescription: (0, S.we)(
              "#DiscoveryQueue_ViewWishlist",
            ),
            onOptionsButton: () => {
              _.location.href = (0, q.NT)(d);
            },
            onOKActionDescription: (0, S.we)("#Button_Continue"),
            onOKButton: () => {
              a();
            },
            onCancelActionDescription: (0, S.we)("#ActionButtonLabelDone"),
            onCancelButton: () => s && s(),
            fnScrollIntoViewHandler: () => (l(), !0),
            children: c
              ? t
              : (0, n.jsx)(D.t, {
                  className: he().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          })
        );
      }
      function $e() {
        return (0, n.jsx)(s.Z, {
          className: he().SaleRewardsCtn,
          children: (0, n.jsx)(D.t, { size: "large", position: "center" }),
        });
      }
      function Ye(e) {
        const { bSkipAppRequestPending: t, summaryCardIdx: r } = e;
        return t ? (0, n.jsx)($e, {}) : (0, n.jsx)(Xe, { summaryCardIdx: r });
      }
      function Xe(e) {
        const { summaryCardIdx: t } = e,
          r = (0, _.os)(2, I.TS.LANGUAGE, !1, t.toString()),
          [i] = (0, h.t7)(r?.data?.current_def?.appid, {}),
          a = (0, I.Qn)();
        if (!r?.data?.current_def || !i?.GetName().length)
          return (0, n.jsx)($e, {});
        const o = r.data.num_items_earned,
          l = r.data.current_def.num_items_per_def,
          c = l - o,
          d = (o / l) * 100;
        return (0, n.jsxs)(s.Z, {
          className: he().SaleRewardsCtn,
          children: [
            (0, n.jsx)(M, { nPercent: d, size: 70, strokeWidth: 12 }),
            (0, n.jsxs)(s.Z, {
              className: he().RewardStatusCtn,
              children: [
                (0, n.jsx)("div", {
                  className: he().SaleRewardAppTitle,
                  children: (0, S.we)(
                    "#DiscoveryQueue_SaleStatus_Title" + (c ? "" : "_Complete"),
                    (0, be.D)(o),
                    i.GetName(),
                  ),
                }),
                c > 0 &&
                  (0, n.jsx)("div", {
                    className: he().SaleRewardAppTitle,
                    children: (0, S.we)(
                      "#DiscoveryQueue_SaleStatus_Desc",
                      (0, be.D)(c),
                      i.GetName(),
                    ),
                  }),
                !a &&
                  (0, n.jsx)("a", {
                    href: (0, q.NT)(
                      I.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                    ),
                    children: (0, S.we)("#DiscoveryQueue_SaleStatus_Link"),
                  }),
              ],
            }),
          ],
        });
      }
    },
    47554: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => w });
      var i = r(7850),
        n = r(90626),
        a = r(12447),
        s = r(76217),
        o = r(39199),
        l = r(55263),
        c = r(95034),
        d = r(12155),
        m = r(26749),
        u = r(61859),
        p = r(71109),
        _ = r.n(p),
        g = r(78327),
        h = r(90511);
      function w(e) {
        const { appID: t } = e,
          r = (0, m.G)(),
          [p] = (0, c.QD)("inqueue", "0"),
          [w, y] = (0, n.useState)(!1),
          [b] = (0, l.t7)(t, { include_assets: !0 }),
          f = n.useRef(void 0);
        n.useEffect(() => f.current?.Activate(!0), []);
        const S = (0, g.Qn)(),
          { eStoreDiscoveryQueueType: B, storePageFilter: v } =
            n.useMemo(() => {
              if (p?.length > 0) {
                const e = p.split("_"),
                  t = Number(e[0]);
                let r;
                return (
                  e.length > 1 && (r = (0, o.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: r }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [p]),
          { showDiscoveryQueue: C } = (0, h.GV)(B, {
            includeAppID: t,
            storePageFilter: v,
          }),
          I = n.useCallback(() => {
            y(!0);
          }, []),
          x = (0, o.WX)(B, v);
        return r && b
          ? w
            ? null
            : (0, i.jsx)(a.u, {
                navTreeRef: f,
                navID: "DiscoveryQueueAppWidget",
                children: (0, i.jsxs)(s.Z, {
                  focusable: !0,
                  className: _().DiscoveryQueueWidgetCtn,
                  onSecondaryButton: I,
                  onOKButton: C,
                  onOKActionDescription: (0, u.we)(
                    "#DiscoveryQueue_ResumeWizard",
                  ),
                  onSecondaryActionDescription: (0, u.we)("#Button_Close"),
                  children: [
                    (0, i.jsxs)("div", {
                      onClick: C,
                      className: _().WidgetText,
                      children: [
                        (0, i.jsx)(d.mcU, {}),
                        (0, u.we)("#DiscoveryQueue_ResumeWizard"),
                        x?.length > 0 && ": " + x,
                      ],
                    }),
                    !S &&
                      (0, i.jsx)("div", {
                        className: _().CloseButton,
                        onClick: I,
                        children: (0, i.jsx)(d.X, {}),
                      }),
                  ],
                }),
              })
          : null;
      }
    },
    6804: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      var i = r(7850),
        n = r(12447),
        a = r(96236),
        s = r(38405);
      function o() {
        return (0, i.jsx)(a.K, {
          placeholderHeight: "200px",
          rootMargin: "0px 0px 100% 0px",
          children: (0, i.jsx)(n.u, {
            navID: "DiscoveryQueueWidget",
            children: (0, i.jsx)(s.g, { eStoreDiscoveryQueueType: 0 }),
          }),
        });
      }
    },
    25054: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => u });
      var i = r(7850),
        n = r(90626),
        a = r(61859),
        s = r(26749),
        o = r(76217),
        l = r(78327),
        c = r(51706),
        d = r(738),
        m = r(90511);
      function u(e) {
        const t = (0, s.G)(),
          { showDiscoveryQueue: r } = (0, m.GV)(0),
          u = n.useCallback(() => {
            l.iA.logged_in
              ? r()
              : (0, d.pg)(
                  (0, i.jsx)(c.KG, {
                    onOK: () => {
                      window.location.href = `${l.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, a.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, a.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, a.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, [r]);
        return t
          ? (0, i.jsx)(o.Z, {
              children: (0, i.jsx)("a", {
                onClick: u,
                className: "experiment-button",
                children: (0, a.we)("#DiscoveryQueue_OpenWizard"),
              }),
            })
          : (0, i.jsx)("div", {
              className: "experiment-button-placeholder",
              children: " ",
            });
      }
    },
  },
]);
