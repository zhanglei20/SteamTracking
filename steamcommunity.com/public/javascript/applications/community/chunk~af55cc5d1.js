/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5955],
  {
    4796: (e, t, r) => {
      r.d(t, {
        Ao: () => B,
        TB: () => h,
        W$: () => y,
        Yp: () => f,
        _5: () => I,
        ac: () => g,
      });
      var n = r(34629),
        i = r(41735),
        a = r.n(i),
        s = r(14947),
        o = r(90626),
        l = r(17720),
        c = r(81393),
        m = r(78327),
        u = r(8092),
        d = r(26161),
        p = r(60746);
      class _ {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, s.Gn)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, s.h5)(() => {
              let e = (0, m.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(e) {
          (0, s.h5)(() => {
            this.ValidateClanConfig(e) &&
              e.forEach((e) => {
                this.InternalSetupValue(e);
              });
          });
        }
        ValidateClanConfig(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanAccountID &&
            ("number" == typeof t[0].appid ||
              "string" == typeof t[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, c.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, c.wT)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const t of e) this.InternalSetupValue(t);
        }
        InternalSetupValue(e) {
          const t = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new l.b(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : 0,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            curator_title: e.curator_title,
            curator_description: e.curator_description,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, t),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                t,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(e) {
          if (
            (this.LazyInit(),
            "string" == typeof e && (e = parseInt(e)),
            (0, c.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(e))
            return this.m_mapAppIDToClanInfo.get(e);
          let t = "appid_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForAppID(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForAppID(e) {
          const t =
            m.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let r = null;
          try {
            r = (await a().get(t, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return r
            ? (this.InternalSetupValue(r), this.m_mapAppIDToClanInfo.get(e))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "storevanity_" + (null == e ? void 0 : e.toLocaleLowerCase());
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForIdentifier(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(e) {
          const t =
            m.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let r = await a().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  null == e ? void 0 : e.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const t =
            m.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let r = await a().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let r = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = l.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const r =
            m.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let n = await a().get(r, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(n.data),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              )
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return l.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, c.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = u.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            m.TS.COMMUNITY_BASE_URL +
            (r.vanity_url
              ? "groups/" + r.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, n.Cg)([s.sH], _.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, n.Cg)([s.sH], _.prototype, "m_mapVanityToClanInfo", void 0),
        (0, n.Cg)([s.sH], _.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, n.Cg)([s.XI], _.prototype, "RegisterClanData", null),
        (0, n.Cg)([s.XI], _.prototype, "InternalSetupValue", null);
      const g = new _();
      function h(e) {
        const [t, r] = (0, o.useState)(
            e ? g.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [n, i] = (0, o.useState)(!!e && !g.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, o.useEffect)(() => {
            if (e)
              if (g.BHasClanInfoLoadedByAccountID(e))
                r(g.GetClanInfoByClanAccountID(e)), i(!1);
              else {
                i(!0);
                const t = l.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                g.LoadClanInfoForClanSteamID(t)
                  .then((e) => {
                    r(null != e ? e : void 0), i(!1);
                  })
                  .catch((t) =>
                    console.error(`Failed to load clan info ${e}`, t),
                  );
              }
            else r(void 0), i(!1);
          }, [e]),
          [n, t]
        );
      }
      function y(e) {
        const [t, r] = (0, o.useState)(g.GetOGGClanInfo(e));
        return (
          (0, o.useEffect)(() => {
            t || g.LoadOGGClanInfoForGroupVanity(e).then(r);
          }, [t, e]),
          t
        );
      }
      function f(e) {
        const t = e.BIsOGGEvent(),
          r = p.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        if (t) return { bVisible: !1 };
        if (36 == e.GetEventType()) return { bVisible: !1 };
        if (e.BHasSaleEnabled()) return { bVisible: !0 };
        if (
          e.jsondata.clone_from_event_gid &&
          e.jsondata.clone_from_sale_enabled
        )
          return { bVisible: !0 };
        if (e.clanSteamID.GetAccountID() == (0, d.H)()) return { bVisible: !1 };
        const n = u.pF.GetCreatorHome(e.clanSteamID);
        return n && n.BHasClanAccountFlagSet(32)
          ? { bVisible: !0 }
          : r
            ? { bVisible: !0, bValveOnly: !0 }
            : { bVisible: !1 };
      }
      function I(e) {
        const t = e.BIsOGGEvent(),
          r = p.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        return t
          ? e.BHasSaleEnabled()
            ? { bVisible: !0 }
            : 1 == m.TS.EUNIVERSE
              ? { bVisible: !1 }
              : r && 14 == e.GetEventType()
                ? { bVisible: !0, bValveOnly: !0 }
                : { bVisible: !1 }
          : { bVisible: !1 };
      }
      function B(e) {
        const t = e.BIsOGGEvent(),
          r = p.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        return t || 36 != e.GetEventType()
          ? { bVisible: !1 }
          : e.BHasSaleEnabled()
            ? { bVisible: !0 }
            : e.clanSteamID.GetAccountID() == (0, d.H)()
              ? { bVisible: !1 }
              : r
                ? { bVisible: !0, bValveOnly: !0 }
                : { bVisible: !1 };
      }
      window.g_ClanStore = g;
    },
    8092: (e, t, r) => {
      r.d(t, {
        mD: () => H,
        ie: () => N,
        A2: () => W,
        zt: () => q,
        pF: () => O,
        FV: () => V,
        $$: () => k,
      });
      var n,
        i = r(34629),
        a = r(56545),
        s = r(80613),
        o = r.n(s),
        l = r(89068);
      class c extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appid || l.Sg(c.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  linkname: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  json: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = l.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class m extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.clan_account_id || l.Sg(m.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = l.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class u extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || l.Sg(u.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  link: { n: 2, c },
                  remove: {
                    n: 3,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = l.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class d extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || l.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = l.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.links || l.Sg(_.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { links: { n: 1, c, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = l.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.clan_account_ids || l.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = l.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.results || l.Sg(h.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { results: { n: 1, c: m, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = l.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.partnerid || l.Sg(y.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  partnerid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = l.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.results || l.Sg(f.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { results: { n: 1, c: I, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class I extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.clan_accountid || l.Sg(I.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readString,
                    bw: l.gp.writeRepeatedString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = l.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, t) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, a.I8)(u, t),
            d,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, a.I8)(p, t),
              _,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, a.I8)(g, t),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, a.I8)(y, t),
              f,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(n || (n = {}));
      var B,
        b = r(36003);
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || l.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  clanid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  link_url: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  link_text: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  blurb: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                  time_recommended: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  comment_count: {
                    n: 7,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  upvote_count: {
                    n: 8,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  accountid_creator: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  recommendation_state: {
                    n: 10,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  received_compensation: {
                    n: 11,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  received_for_free: {
                    n: 12,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = l.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_RecommendedApp";
        }
      }
      class v extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.listid || l.Sg(v.M()),
            s.Message.initialize(this, e, 0, -1, [10, 12, 13, 14], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  listid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  title: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  blurb: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  link: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  list_state: { n: 5, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  sort_order: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_created: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_updated: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accountid: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  apps: { n: 10, c: S, r: !0, q: !0 },
                  list_type: { n: 11, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  title_localization: { n: 12, c: b.O2, r: !0, q: !0 },
                  blurb_localization: { n: 13, c: b.O2, r: !0, q: !0 },
                  link_localization: { n: 14, c: b.O2, r: !0, q: !0 },
                  sale_clan_steamid: {
                    n: 15,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  sale_clan_event_gid: {
                    n: 16,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  list_jsondata: {
                    n: 17,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  clan_account_id: {
                    n: 18,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = l.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_ListDetails";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.recommended_app || l.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  recommended_app: { n: 1, c: w },
                  blurb: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  sort_order: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = l.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_ListDetails_ListItem";
        }
      }
      class C extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || l.Sg(C.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  list_state: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  start: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  count: { n: 4, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  return_total_only: {
                    n: 5,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  return_metadata_only: {
                    n: 6,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  max_apps: { n: 7, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  sale_clan_event_gid: {
                    n: 8,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = l.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetLists_Request";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.list_details || l.Sg(M.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  list_details: { n: 1, c: v, r: !0, q: !0 },
                  total: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = l.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetLists_Response";
        }
      }
      class T extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || l.Sg(T.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  listid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetListDetails_Request";
        }
      }
      class A extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.list_details || l.Sg(A.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = { proto: A, fields: { list_details: { n: 1, c: v } } }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = l.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetListDetails_Response";
        }
      }
      !(function (e) {
        (e.GetLists = function (e, t) {
          return e.SendMsg("StoreCuration.GetLists#1", (0, a.I8)(C, t), M, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetListDetails = function (e, t) {
            return e.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, a.I8)(T, t),
              A,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(B || (B = {}));
      var G = r(88942),
        D = r(41735),
        L = r.n(D),
        z = r(14947),
        R = r(78327);
      class F {
        constructor(e) {
          (this.m_appidList = new Array()),
            (this.m_strName = ""),
            (this.m_strAvatarURLFullSize = ""),
            (this.m_strTagLineLoc = ""),
            (this.m_nFollowers = 0),
            (this.m_strVanity = ""),
            (this.m_webLink = void 0),
            (this.m_linkedEvent = void 0),
            (this.m_mapListInfo = new Map()),
            (this.m_bIsLoaded = !1),
            (this.m_bIsHidden = !1),
            (this.m_clanAccountFlags = 0),
            (0, z.Gn)(this),
            (this.m_clanSteamID = e);
        }
        Initialize(e) {
          var t, r;
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags =
              null !== (t = e.clan_account_flags) && void 0 !== t ? t : 0),
            (this.m_linkedEvent = e.linked_event),
            (this.m_mapListInfo = new Map(
              Object.entries(
                null !== (r = e.list_info) && void 0 !== r ? r : {},
              ),
            )),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(8 & this.m_clanAccountFlags);
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  R.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  R.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return R.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            R.TS.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        GetLinkedEventGID() {
          return this.m_linkedEvent;
        }
        GetListInfo() {
          return this.m_mapListInfo;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([2, 8], !0));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let r = R.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            n = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (n |= e) : (n &= ~e);
            }),
            n == this.m_clanAccountFlags)
          )
            return;
          let i = new Array();
          1 & n && i.push(1),
            8 & n && i.push(8),
            2 & n && i.push(2),
            4 & n && i.push(4),
            16 & n && i.push(16),
            32 & n && i.push(32),
            64 & n && i.push(64);
          let a = new FormData();
          a.append("sessionid", R.TS.SESSIONID),
            a.append("clan_account_id", this.GetClanAccountID().toString()),
            a.append("accountflags", JSON.stringify(i));
          let s = await L().post(r, a);
          s &&
            200 == s.status &&
            1 == s.data.success &&
            (this.m_clanAccountFlags = n);
        }
      }
      (0, i.Cg)([z.sH], F.prototype, "m_appidList", void 0),
        (0, i.Cg)([z.sH], F.prototype, "m_nFollowers", void 0),
        (0, i.Cg)([z.sH], F.prototype, "m_clanAccountFlags", void 0);
      var U = r(96059),
        E = r(17720);
      class P {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (this.m_serviceTransport = void 0),
            (0, z.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const e = (0, R.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                const t = Number(e.creator_clan_id),
                  r = E.b.InitFromClanID(t),
                  n = new F(r);
                n.Initialize(e),
                  (n.m_promise = P.GetAsPromise(n)),
                  this.m_mapClanToCreatorHome.set(t, n);
              });
            const t = (0, R.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        GetServiceTransport() {
          if (!this.m_serviceTransport) {
            const e = (0, R.Tc)("loyalty_webapi_token", "application_config"),
              t = new U.D(R.TS.WEBAPI_BASE_URL, e || void 0);
            this.m_serviceTransport = t.GetServiceTransport();
          }
          return this.m_serviceTransport;
        }
        static async GetAsPromise(e) {
          return e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
              t[0].clan_account_id > 0 &&
              "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        async LoadCreatorHome(e, t = !1, r) {
          if (
            (this.LazyInit(),
            t || !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let t = new F(e);
            (t.m_promise = this.InternalCreatorHome(t, r)),
              await t.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let r = { get_appids: !0, l: R.TS.LANGUAGE, origin: self.origin },
            n =
              R.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            i = await L().get(n, { params: r, cancelToken: t && t.token });
          return e.Initialize(i.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let r = { appid: e },
              n = R.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              i = await L().get(n, {
                params: r,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, r) {
          let n = `${R.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            i = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: R.TS.COUNTRY,
              l: R.TS.LANGUAGE,
              origin: self.origin,
            },
            a = new Array();
          const s = await L().get(n, { params: i, cancelToken: r.token });
          return (
            s.data.curators &&
              (0, z.h5)(() => {
                s.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = E.b.InitFromClanID(e.creator_clan_id),
                      r = new F(t);
                    r.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
                  }
                  a.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            a
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, i.Cg)([z.sH], P.prototype, "m_mapClanToCreatorHome", void 0),
        (0, i.Cg)([z.sH], P.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, i.Cg)([z.XI], P.prototype, "LazyInit", null);
      const O = new P();
      window.g_CreatorHomeStore = O;
      class j {
        constructor() {
          (this.m_mapListToTitle = new Map()),
            (this.m_mapListToSubtitle = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (0, z.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const e = (0, R.Tc)(
              "creator_home_list_titles",
              "application_config",
            );
            if (this.ValidateCreatorHomeTitles(e))
              for (const [t, { title: r, description: n }] of Object.entries(
                null != e ? e : {},
              ))
                r &&
                  (this.m_mapListToTitle.set(t, r),
                  n && this.m_mapListToSubtitle.set(t, n));
            this.m_bLoadedFromConfig = !0;
          }
        }
        ValidateCreatorHomeTitles(e) {
          return null != e && "object" == typeof e && !Array.isArray(e);
        }
        GetListTitle(e) {
          return this.LazyInit(), this.m_mapListToTitle.get(e);
        }
        GetListSubtitle(e) {
          return this.LazyInit(), this.m_mapListToSubtitle.get(e);
        }
      }
      (0, i.Cg)([z.sH], j.prototype, "m_mapListToTitle", void 0),
        (0, i.Cg)([z.sH], j.prototype, "m_mapListToSubtitle", void 0),
        (0, i.Cg)([z.XI], j.prototype, "LazyInit", null);
      const q = new j();
      function W(e) {
        const t = E.b.InitFromClanID(e);
        return {
          queryKey: ["CreatorHome", e],
          initialData: () => O.GetCreatorHome(t),
          queryFn: async () => {
            const t = E.b.InitFromClanID(e);
            return await O.LoadCreatorHome(t, !0);
          },
        };
      }
      function V(e) {
        const { data: t, isFetching: r, refetch: n } = (0, G.I)(W(e));
        return { creatorHome: t, isFetching: r, refetch: n };
      }
      function H(e) {
        return {
          queryKey: ["GetCreatorHomeGetAllListsQuery", e],
          queryFn: async () => {
            const t = O.GetServiceTransport(),
              r = a.w.Init(C);
            r
              .Body()
              .set_steamid(
                new E.b(e, R.TS.EUNIVERSE, 7, 0).ConvertTo64BitString(),
              ),
              r.Body().set_count(100);
            const n = await B.GetLists(t, r);
            return n.BSuccess() ? n.Body().list_details() : null;
          },
          enabled: e > 0,
        };
      }
      function k(e) {
        const { data: t, isFetching: r, refetch: n } = (0, G.I)(H(e));
        return { lists: t, isFetching: r, refetch: n };
      }
      function N(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetListsDetailsQuery", e, t],
          queryFn: async () => {
            var r;
            const n = O.GetServiceTransport(),
              i = a.w.Init(T);
            i
              .Body()
              .set_steamid(
                new E.b(e, R.TS.EUNIVERSE, 7, 0).ConvertTo64BitString(),
              ),
              i.Body().set_listid(t);
            const s = await B.GetListDetails(n, i);
            return s.BSuccess() &&
              null !== (r = s.Body().list_details()) &&
              void 0 !== r
              ? r
              : null;
          },
          enabled: e > 0,
        };
      }
      window.g_CreatorHomeListTitleStore = q;
    },
    60746: (e, t, r) => {
      r.d(t, { KN: () => B, Nh: () => _, Ec: () => b });
      var n = r(34629),
        i = r(41735),
        a = r.n(i),
        s = r(14947),
        o = r(56545),
        l = r(37403),
        c = r(6144),
        m = r(6419),
        u = r(78327),
        d = r(68797);
      class p {
        constructor(e) {
          (this.m_setShownEvents = new Set()),
            (this.m_setReadEvents = new Set()),
            (this.m_rgPendingUpload = []),
            (this.m_schUpload = new c.LU()),
            (this.m_bUploading = !1),
            (this.m_CMInterface = e);
        }
        MarkEventShown(e, t, r) {
          let n = this.MakeKey(e, r);
          if (this.m_setShownEvents.has(n)) return !1;
          this.m_setShownEvents.add(n);
          let i = new l.kZ();
          return (
            i.set_event_gid(e),
            i.set_clanid(t),
            i.set_display_location(r),
            i.set_mark_shown(!0),
            this.QueueForUpload(i),
            !0
          );
        }
        MarkEventRead(e, t, r) {
          let n = this.MakeKey(e, r);
          if (this.m_setReadEvents.has(n)) return !1;
          this.m_setReadEvents.add(n);
          let i = new l.kZ();
          return (
            i.set_event_gid(e),
            i.set_clanid(t),
            i.set_display_location(r),
            i.set_mark_read(!0),
            this.QueueForUpload(i),
            !0
          );
        }
        MakeKey(e, t) {
          return `${e}_${t}`;
        }
        QueueForUpload(e) {
          this.m_rgPendingUpload.push(e), this.ScheduleUpload();
        }
        ScheduleUpload() {
          this.m_bUploading ||
            (this.m_rgPendingUpload.length >= 30
              ? this.UploadPendingData()
              : this.m_schUpload.IsScheduled() ||
                this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
        async Flush() {
          if (!this.m_bUploading) return this.UploadPendingData();
        }
        async UploadPendingData() {
          if (this.m_bUploading) return;
          this.m_schUpload.Cancel();
          let e = this.m_rgPendingUpload.splice(0, 30);
          if (0 == e.length) return;
          let t = !1;
          if (this.m_CMInterface) {
            let r = o.w.Init(l.wS);
            for (let t of e) r.Body().add_markings(t);
            this.m_bUploading = !0;
            let n = await l.BE.MarkPartnerEventsForUser(
              this.m_CMInterface.GetServiceTransport(),
              r,
            );
            (this.m_bUploading = !1), (t = 1 == n.GetEResult());
          } else {
            if (!u.iA.logged_in) return;
            let r = e.map((e) => e.toObject()),
              n = (0, u.xv)() + "actions/ajaxmarkpartnerevents";
            const i = new FormData();
            i.append("sessionid", u.TS.SESSIONID),
              i.append("request", JSON.stringify(r));
            try {
              t =
                1 ==
                (await a().post(n, i, { withCredentials: !0 })).data.success;
            } catch (e) {
              let t = (0, d.H)(e);
              console.error(
                "CPartnerEventUserTracking.UploadPendingData error " +
                  t.strErrorMsg,
                t,
              );
            }
          }
          t
            ? this.m_rgPendingUpload.length > 0 && this.ScheduleUpload()
            : (console.log(
                "Saving news event state failed. Will try again soon!",
              ),
              (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(e)),
              this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
      }
      (0, n.Cg)([m.o], p.prototype, "UploadPendingData", null);
      var _,
        g = r(17720),
        h = r(81393),
        y = r(90626),
        f = r(26161);
      class I {
        constructor(e) {
          (this.clanid = void 0),
            (this.appid = 0),
            (this.can_edit = !1),
            (this.owns_app = !1),
            (this.follows_app = !1),
            (this.support_user = !1),
            (this.valve_admin = !1),
            (this.limited_user = !1),
            (this.event_ignored = new Array()),
            (this.event_followed = new Array()),
            (this.event_followed_flags = new Array()),
            (0, s.Gn)(this),
            (this.clanid = e);
        }
      }
      (0, n.Cg)([s.sH], I.prototype, "clanid", void 0),
        (0, n.Cg)([s.sH], I.prototype, "appid", void 0),
        (0, n.Cg)([s.sH], I.prototype, "can_edit", void 0),
        (0, n.Cg)([s.sH], I.prototype, "owns_app", void 0),
        (0, n.Cg)([s.sH], I.prototype, "follows_app", void 0),
        (0, n.Cg)([s.sH], I.prototype, "support_user", void 0),
        (0, n.Cg)([s.sH], I.prototype, "valve_admin", void 0),
        (0, n.Cg)([s.sH], I.prototype, "limited_user", void 0),
        (0, n.Cg)([s.sH], I.prototype, "event_ignored", void 0),
        (0, n.Cg)([s.sH], I.prototype, "event_followed", void 0),
        (0, n.Cg)([s.sH], I.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(_ || (_ = {}));
      class B {
        constructor() {
          (this.m_mapClanToUserPermissions = new Map()),
            (this.m_mapAnnounceGIDToVote = new Map()),
            (this.m_setReadEventGIDs = new Set()),
            (this.m_tracker = void 0),
            (this.m_cm = void 0),
            (this.m_bIsPresentationMode = (0, u.Bu)()),
            (0, s.Gn)(this);
        }
        static Get() {
          return (
            (0, h.wT)(
              !!B.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            B.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!B.s_EventUserStore;
        }
        static async InitGlobal(e) {
          if (!B.s_EventUserStore) {
            const t = new B();
            await t.Init(e),
              (B.s_EventUserStore = t),
              "dev" == u.TS.WEB_UNIVERSE && (window.g_EventUserStore = t);
          }
        }
        static BIsInited() {
          return Boolean(B.s_EventUserStore);
        }
        async Init(e) {
          (this.m_cm = e), (this.m_tracker = new p(e));
          const t = (0, u.Fd)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(t) &&
            ((0, s.h5)(() => {
              t.forEach((e) => {
                let t = new I(e.clanid),
                  r = { result: t, promise: B.RemapToPromise(t), bLoaded: !0 };
                this.CopyFromResponseToTrack(r, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, r);
              });
            }),
            ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let r = (0, u.Fd)("uservotes", "application_config");
          r &&
            (0, s.h5)(() => {
              r.forEach((e) => {
                let t = !!e.voted_up || (!e.voted_down && void 0);
                this.m_mapAnnounceGIDToVote.set(e.clanAnnouncementGID, t);
              });
            });
        }
        GetTracker() {
          return this.m_tracker;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanid &&
            "number" == typeof t[0].appid
          );
        }
        RecordEventShown(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            this.m_tracker.MarkEventShown(
              e.GID,
              e.clanSteamID.GetAccountID(),
              t,
            );
        }
        RecordEventRead(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            (this.HasEventBeenRead(e.GID) ||
              (this.SetEventAsRead(e.GID),
              this.m_tracker.MarkEventRead(
                e.GID,
                e.clanSteamID.GetAccountID(),
                t,
              )));
        }
        SetEventAsRead(e) {
          this.m_setReadEventGIDs.add(e);
        }
        HasEventBeenRead(e) {
          return this.m_setReadEventGIDs.has(e);
        }
        static async RemapToPromise(e) {
          return e;
        }
        BIsUserLoggedIn() {
          return u.iA.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return (
            this.m_mapClanToUserPermissions.has(e) &&
            this.m_mapClanToUserPermissions.get(e).bLoaded
          );
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new I(0);
          const t = e.GetAccountID();
          this.m_mapClanToUserPermissions.has(t) ||
            this.LoadSingleAppEventPermissions(e);
          return this.m_mapClanToUserPermissions.get(t).result;
        }
        BFollowsEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_followed.indexOf(t)
          );
        }
        BFollowsEventAndNotifiedBy(e, t, r) {
          let n = this.GetPartnerEventPermissions(e),
            i = n.event_followed.indexOf(t);
          return -1 !== i && (n.event_followed_flags[i] & r) == r;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        async LoadSingleAppEventPermissions(e) {
          let t = e.GetAccountID(),
            r = this.m_mapClanToUserPermissions.get(t);
          return (
            r ||
              ((r = {
                promise: this.InternalLoadSingleAppEventPermissions(e),
                result: new I(t),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(t, r)),
            r.promise
          );
        }
        CopyFromResponseToTrack(e, t) {
          var r, n, i, a;
          (e.result.appid = null !== (r = t.appid) && void 0 !== r ? r : 0),
            (e.result.can_edit = !!t.can_edit),
            (e.result.clanid = t.appid),
            (e.result.event_followed =
              null !== (n = t.event_followed) && void 0 !== n ? n : []),
            (e.result.event_ignored =
              null !== (i = t.event_ignored) && void 0 !== i ? i : []),
            (e.result.event_followed_flags =
              null !== (a = t.event_followed_flags) && void 0 !== a ? a : []),
            (e.result.follows_app = !!t.follows_app),
            (e.result.owns_app = !!t.owns_app),
            (e.result.limited_user = !!t.limited_user),
            (t.support_user || t.valve_admin) && this.m_bIsPresentationMode
              ? ((e.result.can_edit = !0),
                (e.result.support_user = !1),
                (e.result.valve_admin = !1))
              : ((e.result.support_user = !!t.support_user),
                (e.result.valve_admin = !!t.valve_admin)),
            (e.bLoaded = !0);
        }
        async InternalLoadSingleAppEventPermissions(e) {
          let t = null,
            r = e.GetAccountID(),
            n = !Boolean(u.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(r)) {
            let t = new I(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(r, {
              result: t,
              promise: B.RemapToPromise(t),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(u.iA.logged_in)) {
              let i =
                  u.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                s = {};
              if (
                ("partnerweb" == (0, u.yK)()
                  ? ((i =
                      u.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() }))
                  : "store" == (0, u.yK)() &&
                    ((i =
                      u.TS.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() })),
                (t = await a().get(i, { params: s, withCredentials: !0 })),
                t && 1 == t.data.success)
              ) {
                let e = this.m_mapClanToUserPermissions.get(r);
                e && this.CopyFromResponseToTrack(e, t.data);
              } else
                console.error(
                  "Partner Events Failed Load:" +
                    (0, d.H)(null == t ? void 0 : t.data).strErrorMsg,
                ),
                  (n = !0);
            }
          } catch (e) {
            if (
              ((t = e.response),
              (n = !0),
              e &&
                void 0 !== e.response &&
                void 0 !== e.response.data &&
                void 0 !== e.response.data.success &&
                21 == e.response.data.success)
            );
            else {
              const t = (0, d.H)(e);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  r +
                  ": " +
                  t.strErrorMsg,
                t,
              );
            }
          } finally {
            n &&
              (0, s.h5)(() => {
                var e;
                let n = this.m_mapClanToUserPermissions.get(r);
                (n.result.appid =
                  null !== (e = null == t ? void 0 : t.data.appid) &&
                  void 0 !== e
                    ? e
                    : 0),
                  (n.result.can_edit = !1),
                  (n.result.clanid = t && t.data ? t.data.clanid : 0),
                  (n.result.event_followed = new Array()),
                  (n.result.event_ignored = new Array()),
                  (n.result.event_followed_flags = new Array()),
                  (n.result.follows_app = !1),
                  (n.result.owns_app = !1),
                  (n.result.support_user = !1),
                  (n.result.valve_admin = !1),
                  (n.result.limited_user = !1),
                  (n.bLoaded = !0);
              });
          }
          return this.m_mapClanToUserPermissions.get(r).result;
        }
        async SetFollowOrUnfollowEvent(e, t, r, n, i) {
          let o = this.GetPartnerEventPermissions(r),
            l = o.event_followed.indexOf(n),
            c = 0;
          -1 !== l &&
            ((c = o.event_followed_flags[l]), e ? (i = c & ~i) : (i |= c));
          let m = 0 == i,
            d =
              ("store" === (0, u.yK)()
                ? u.TS.STORE_BASE_URL + "events"
                : u.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  r.ConvertTo64BitString()) +
              (m ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            p = new URLSearchParams();
          p.append("sessionid", u.TS.SESSIONID),
            p.append("ignore", "" + t),
            p.append("gid", n),
            p.append("notification_flag", "" + i),
            p.append("clan_accountid", "" + r.GetAccountID());
          await a().post(d, p, { withCredentials: !0 });
          (0, s.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(r.GetAccountID()),
              a = null,
              s = null,
              o = null,
              l = null;
            m
              ? ((a = t ? e.result.event_ignored : e.result.event_followed),
                (o = t ? null : e.result.event_followed_flags))
              : t
                ? ((a = e.result.event_followed),
                  (o = e.result.event_followed_flags),
                  (s = e.result.event_ignored))
                : ((a = e.result.event_ignored),
                  (s = e.result.event_followed),
                  (l = e.result.event_followed_flags));
            let c = a.indexOf(n);
            if ((c > -1 && (a.splice(c, 1), o && o.splice(c, 1)), s)) {
              let e = s.indexOf(n);
              -1 == e ? (s.push(n), l && l.push(i)) : l && (l[e] = i);
            }
          });
        }
        async Vote(e, t, r) {
          if (!e || !e.AnnouncementGID) return !1;
          const n = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
          if (n === t) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
            (0, s.h5)(() => {
              !0 === n && e.UpdateVoteCount("up", -1),
                !1 === n && e.UpdateVoteCount("down", -1),
                !0 === t && e.UpdateVoteCount("up", 1),
                !1 === t && e.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let r = o.w.Init(l.QU);
            return (
              r.Body().set_announcementid(e.AnnouncementGID),
              r.Body().set_vote_up(!!t),
              r.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
              1 ==
                (
                  await l.BE.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    r,
                  )
                ).GetEResult()
            );
          }
          {
            const n = (0, u.yK)(),
              i =
                "community" == n || "steamtv" == n
                  ? u.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : u.TS.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID,
              s = new URLSearchParams();
            s.append("sessionid", u.TS.SESSIONID),
              s.append("voteup", t ? "1" : "0"),
              s.append("clanid", "" + e.clanSteamID.GetAccountID()),
              s.append("ajax", "1");
            const o = { withCredentials: !0, cancelToken: r.token };
            return 1 == (await a().post(i, s, o)).data.success;
          }
        }
        async LoadMyVote(e, t) {
          if (null == e ? void 0 : e.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            let r;
            if (this.m_cm) {
              let t = o.w.Init(l.$Y);
              t.Body().set_announcementid(e.AnnouncementGID);
              let n = await l.BE.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                t,
              );
              1 == n.GetEResult() &&
                (r =
                  !!n.Body().voted_up() || (!n.Body().voted_down() && void 0));
            } else {
              const n = "store" == (0, u.yK)(),
                i = n
                  ? u.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : u.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                s = { gid: n ? e.AnnouncementGID : void 0 },
                o = await a().get(i, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: s,
                });
              r = !!o.data.voted_up || (!o.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, r), r;
          }
        }
        SetVote(e, t) {
          this.m_mapAnnounceGIDToVote.set(e, t);
        }
        BHasMyVote(e) {
          return (
            !!e.AnnouncementGID &&
            this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)
          );
        }
        GetPreviouslyLoadedVote(e) {
          return e.AnnouncementGID
            ? this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID)
            : void 0;
        }
        BShowEmailEditorTab(e) {
          if (e.BHasEmailEnabled()) return !0;
          if (e.clanSteamID.GetAccountID() == (0, f.H)()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (u.UF.IS_OGG || u.UF.IS_VALVE_GROUP) && t.valve_admin;
        }
      }
      function b(e) {
        const [t, r] = (0, y.useState)(
            B.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          n = g.b.InitFromClanID(e),
          [i, a] = (0, y.useState)(B.Get().GetPartnerEventPermissions(n));
        return (
          (0, y.useEffect)(() => {
            if (!t) {
              const t = g.b.InitFromClanID(e);
              B.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  a(e), r(!0);
                });
            }
          }, [t, e]),
          i
        );
      }
      (0, n.Cg)([s.sH], B.prototype, "m_mapClanToUserPermissions", void 0),
        (0, n.Cg)([s.sH], B.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, n.Cg)([s.sH], B.prototype, "m_setReadEventGIDs", void 0),
        (0, n.Cg)([s.XI], B.prototype, "CopyFromResponseToTrack", null);
    },
    26161: (e, t, r) => {
      r.d(t, { H: () => i });
      var n = r(30470);
      const i = () => (2 === n.TS.EUNIVERSE ? 2581 : 45267781);
    },
  },
]);
