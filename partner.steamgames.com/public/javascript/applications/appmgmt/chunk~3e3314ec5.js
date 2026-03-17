/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9246],
  {
    96745: (e, r, c) => {
      c.d(r, {
        OM: () => u,
        Sm: () => k,
        Yr: () => E,
        pV: () => _,
        uw: () => d,
        vs: () => y,
        ww: () => l,
        xi: () => i,
        zt: () => C,
      });
      var n = c(90626),
        t = c(6144),
        a = c(73745),
        s = c(78327);
      const i = "pn";
      class o {
        m_rgPackageIDs;
        m_rgPackageData;
        m_mapPackageData;
        m_rgVisiblePackageIDs = [];
        m_visiblePackageIDsCallbackList = new t.lu();
        static s_Singleton;
        static Get() {
          return (
            o.s_Singleton || ((o.s_Singleton = new o()), o.s_Singleton.Init()),
            o.s_Singleton
          );
        }
        constructor() {
          "dev" == s.TS.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let e = (0, s.Tc)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, s.Tc)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != s.TS.WEB_UNIVERSE && "beta" != s.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != s.TS.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(e) {
          const r = e
              .getState()
              .columnFilters.find((e) => "packageName" === e.id)?.value,
            c = new URL(window.location.href);
          r != decodeURIComponent(c.searchParams.get(i)) &&
            (r
              ? c.searchParams.set(i, encodeURIComponent(r))
              : c.searchParams.delete(i),
            window.history.replaceState({}, "", c.toString()));
        }
        UpdateVisiblePackageList(e) {
          const r = e.getVisibleRows().filter((e) => !e.getCanExpand());
          (this.m_rgVisiblePackageIDs = []),
            r.forEach((e) =>
              this.m_rgVisiblePackageIDs.push(e.original.packageID),
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            ),
            this.UpdatePackageNameSearchState(e);
        }
        SetVisiblePackageList(e) {
          (this.m_rgVisiblePackageIDs = [...e]),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            );
        }
      }
      function u() {
        return o.Get().m_rgPackageIDs;
      }
      function C() {
        return o.Get().m_rgPackageIDs;
      }
      function d() {
        return o.Get().m_rgPackageData;
      }
      function l(e) {
        let r = o.Get().m_mapPackageData.get(e);
        return r ? r.package_name : e.toString();
      }
      function _() {
        return n.useCallback((e) => o.Get().UpdateVisiblePackageList(e), []);
      }
      function k(e) {
        o.Get().SetVisiblePackageList(e);
      }
      function E() {
        const [e, r] = n.useState(o.Get().m_rgVisiblePackageIDs);
        return (0, a.hL)(o.Get().m_visiblePackageIDsCallbackList, r), e;
      }
      function y() {
        return n.useMemo(
          () => (0, s.Tc)("publisherid", "application_config"),
          [],
        );
      }
    },
    17084: (e, r, c) => {
      c.d(r, {
        iy: () => re,
        Y5: () => H,
        $i: () => se,
        Wx: () => D,
        Gs: () => R,
        ww: () => ue,
        RO: () => Z,
        XK: () => X,
        FR: () => v,
        oj: () => M,
        Dl: () => U,
        tn: () => Y,
        Oc: () => L,
        Y2: () => K,
        mv: () => b,
        oL: () => N,
        Ci: () => ce,
        v4: () => F,
        _A: () => T,
        nT: () => w,
        fr: () => z,
        T_: () => Q,
        mP: () => $,
        T7: () => q,
        Zz: () => te,
        NC: () => ae,
        h4: () => oe,
        Bt: () => ie,
        hm: () => V,
        fZ: () => B,
        XB: () => ee,
        U3: () => j,
        YB: () => ne,
        d$: () => W,
        FX: () => J,
        xQ: () => O,
      });
      var n = c(34629),
        t = c(41735),
        a = c.n(t),
        s = c(90626),
        i = c(14947),
        o = c(68797),
        u = c(6144),
        C = c(73745),
        d = c(41338),
        l = c(78327),
        _ = c(96745),
        k = c(65946),
        E = c(81393),
        y = c(29848),
        P = c(88267);
      function A(e, r, c, n, t) {
        if (!e) return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let a = null;
        for (let r of e.GetUSDPricePointsInCents())
          if (r >= c) {
            a = r;
            break;
          }
        const s = t && t < y.R.k_ERegionCodeMax;
        if ((n == P.AI.k_ECurrencyCodeUSD && !s) || !a)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        const i = e.GetRecommendPrice(a, n, t, r),
          o = e.GetRecommendPrice(a, P.AI.k_ECurrencyCodeUSD, void 0, r);
        if (
          ((0, E.wT)(
            i,
            `Missing requested currency guide for  ${a}/${n}/${t}/${r}`,
          ),
          (0, E.wT)(o, `Missing usd guide for  ${a}/${t}/${r}`),
          !i || !o)
        )
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let u = i.price;
        const C = o.price;
        if (C != c) {
          const e = c / C;
          (a *= e), (u = Math.ceil(u * e));
        }
        return { nSuggestedPriceInCents: u, nGuidelinesLevel: a };
      }
      var p = c(48174),
        I = c(87700),
        g = c(72255),
        m = c(87718);
      class h {
        m_mapPackagePrice = new Map();
        m_mapPackageCountryOverridePrice = new Map();
        m_setRecurringSubscriptions = new Set();
        m_mapPriceProposals = new Map();
        m_mapLocalPackagePriceOverrides = new Map();
        m_mapPriceGridCellCallbackList = new Map();
        m_mapPackageOverridesCallbackList = new Map();
        m_allPriceOverridesCallbackList = new u.lu();
        m_mapOverridesPerPriceKey = new Map();
        m_mapCurrencyData = new Map();
        m_mapPriceKeyDescriptions = new Map();
        m_rgKnownPriceKeys;
        m_strDisplayPriceKey = "USD";
        m_displayPriceKeyCallbackList = new u.lu();
        static s_Singleton;
        static Get() {
          return (
            h.s_Singleton || ((h.s_Singleton = new h()), h.s_Singleton.Init()),
            h.s_Singleton
          );
        }
        constructor() {
          (0, i.Gn)(this),
            "dev" == l.TS.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = (0, l.Tc)("base_prices", "application_config");
          if (
            (("dev" != l.TS.WEB_UNIVERSE && "beta" != l.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                e,
              ),
            e)
          )
            if (this.BIsPricePayloadValid(e))
              for (let r in e) {
                const c = e[r],
                  n = parseInt(r),
                  t = new Map();
                this.m_mapPackagePrice.set(n, t);
                for (let e in c)
                  (0, g.IG)(e)
                    ? (this.m_mapPackageCountryOverridePrice.has(n) ||
                        this.m_mapPackageCountryOverridePrice.set(n, new Map()),
                      this.m_mapPackageCountryOverridePrice
                        .get(n)
                        .set(e.toUpperCase(), c[e]))
                    : t.set(e, c[e]);
              }
            else
              "dev" == l.TS.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const r = (0, l.Tc)("recurring_subs", "application_config");
          if (
            (("dev" != l.TS.WEB_UNIVERSE && "beta" != l.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                r,
              ),
            r)
          )
            if (Array.isArray(r))
              for (const e of r) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == l.TS.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const c = (0, l.Tc)("pending_proposals", "application_config");
          if (
            (("dev" != l.TS.WEB_UNIVERSE && "beta" != l.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                c,
              ),
            c)
          )
            if (this.BIsPendingPricePayloadValid(c))
              for (let e in c) {
                const r = c[e],
                  n = parseInt(e);
                this.m_mapPriceProposals.set(n, r);
              }
            else
              "dev" == l.TS.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const n = (0, l.Tc)("valid_price_keys", "application_config");
          ("dev" != l.TS.WEB_UNIVERSE && "beta" != l.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackagePricingStore loading valid price keys: ",
              n,
            ),
            n &&
              (this.BIsPriceKeyValid(n)
                ? (this.m_rgKnownPriceKeys = n.sort((e, r) =>
                    (0, d.kd)(G(e), G(r)),
                  ))
                : "dev" == l.TS.WEB_UNIVERSE &&
                  console.error("Invalid price keys"));
          const t = (0, l.Tc)("currency_data", "application_config");
          if (
            (("dev" != l.TS.WEB_UNIVERSE && "beta" != l.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                t,
              ),
            t)
          )
            if (this.BIsCurrencyPayloadValid(t))
              for (let e in t) {
                const r = t[e];
                this.m_mapCurrencyData.set(e, r);
              }
            else
              "dev" == l.TS.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const a = (0, l.Tc)("currency_descriptions", "application_config");
          if (
            (("dev" != l.TS.WEB_UNIVERSE && "beta" != l.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                a,
              ),
            a)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(a))
              for (let e in a) {
                const r = a[e];
                this.m_mapPriceKeyDescriptions.set(e, r);
              }
            else
              "dev" == l.TS.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            if (isNaN(parseInt(e))) return !1;
            const c = r[e];
            if (!c || "object" != typeof c) return !1;
            for (let e in c)
              if ("string" != typeof e || "number" != typeof c[e]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            if (isNaN(parseInt(e))) return !1;
            const c = r[e];
            if (
              !c ||
              "object" != typeof c ||
              c.packageID !== parseInt(e) ||
              "object" != typeof c.prices
            )
              return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            const c = r[e];
            if (!c || "object" != typeof c || c.strCode != e) return !1;
          }
          return !0;
        }
        BIsPriceKeyValid(e) {
          const r = e;
          if (!r || !Array.isArray(r)) return !1;
          for (let e in r) if ("string" != typeof e) return !1;
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(e) {
          const r = e;
          if (!r || "object" != typeof r) return !1;
          for (let e in r) {
            const c = r[e];
            if (
              !c ||
              "object" != typeof c ||
              void 0 === c.bRequired ||
              void 0 === c.strDescription
            )
              return !1;
          }
          return !0;
        }
        BPriceKeyRequired(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.bRequired ?? !1;
        }
        GetMinimumBasePrice(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.nLowestBase || 0;
        }
        GetMinimumDiscountPrice(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.nLowestDiscount || 0;
        }
        GetPublishedCountryOverrides(e) {
          return this.m_mapPackageCountryOverridePrice.has(e)
            ? Array.from(this.m_mapPackageCountryOverridePrice.get(e).keys())
            : [];
        }
        GetPublishedPriceCountryOverride(e, r) {
          return this.m_mapPackageCountryOverridePrice.get(e).get(r);
        }
        GetPublishedPrice(e, r) {
          return (0, g.IG)(r)
            ? this.m_mapPackageCountryOverridePrice.get(e)?.get(r)
            : this.m_mapPackagePrice.get(e)?.get(r);
        }
        GetProposedPrice(e, r) {
          return this.m_mapPriceProposals.get(e)?.prices[r];
        }
        GetSavedPrice(e, r) {
          return this.GetProposedPrice(e, r) ?? this.GetPublishedPrice(e, r);
        }
        GetPrice(e, r) {
          return this.GetLocalOverridePrice(e, r) ?? this.GetSavedPrice(e, r);
        }
        GetLocalOverridePrice(e, r) {
          return this.m_mapLocalPackagePriceOverrides.get(e)?.get(r);
        }
        GetPriceGridCellCallbackList(e, r) {
          if (!e || !r) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const c = this.m_mapPriceGridCellCallbackList.get(e);
          return c.has(r) || c.set(r, new u.lu()), c.get(r);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let r = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            r ||
              ((r = new u.lu()),
              this.m_mapPackageOverridesCallbackList.set(e, r)),
            r
          );
        }
        OverridePrice(e, r, c) {
          c != this.GetPrice(e, r) &&
            (this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
            c == this.GetSavedPrice(e, r)
              ? this.m_mapLocalPackagePriceOverrides.get(e).delete(r)
              : this.m_mapLocalPackagePriceOverrides.get(e).set(r, c),
            this.GetPriceGridCellCallbackList(e, r).Dispatch(c),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(e, r, c, n) {
          (0, E.wT)(
            r.length == c.length,
            `price list size doesn't match ${r.length} != ${c.length}`,
          );
          for (let n = 0; n < r.length; ++n) {
            const t = r[n],
              a = c[n];
            this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
              a == this.GetSavedPrice(e, t)
                ? this.m_mapLocalPackagePriceOverrides.get(e).delete(t)
                : this.m_mapLocalPackagePriceOverrides.get(e).set(t, a),
              this.GetPriceGridCellCallbackList(e, t).Dispatch(a);
          }
          this.GetPackageOverridesCallbackList(e).Dispatch(),
            n && this.DispatchPriceOverridesCallbacks();
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides(),
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(e) {
          return this.m_mapLocalPackagePriceOverrides.get(e)?.size > 0;
        }
        GetAllLocalPriceOverrides() {
          const e = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((r, c) =>
              r.forEach((r, n) => {
                const t = this.GetSavedPrice(c, n);
                e.push({
                  packageID: c,
                  strPriceKey: n,
                  nPriceInCents: r,
                  nOldPriceInCents: t,
                });
              }),
            ),
            e.sort(S),
            e
          );
        }
        BHasLocalPriceOverride(e, r) {
          let c = this.m_mapLocalPackagePriceOverrides.get(e);
          return !!c && c.has(r);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((e, r) => {
              e.forEach((e, r) => {
                let c = this.m_mapOverridesPerPriceKey.get(r);
                c || (c = 0), c++, this.m_mapOverridesPerPriceKey.set(r, c);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const e = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let r = new Set();
          for (const c of e) {
            const { packageID: e, strPriceKey: n } = c;
            this.GetPriceGridCellCallbackList(e, n).Dispatch(
              this.GetPrice(e, n),
            ),
              r.add(e);
          }
          for (const e of r) this.GetPackageOverridesCallbackList(e).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(e) {
          let r = !1,
            c = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((n, t) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((r = !0),
              this.m_mapLocalPackagePriceOverrides.get(t).delete(e),
              this.GetPriceGridCellCallbackList(t, e).Dispatch(
                this.GetPrice(t, e),
              ),
              c.add(t));
          });
          for (const e of c) this.GetPackageOverridesCallbackList(e).Dispatch();
          r && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(e) {
          this.m_mapLocalPackagePriceOverrides.get(e)?.forEach((r, c) => {
            this.GetPriceGridCellCallbackList(e, c).Dispatch(
              this.GetSavedPrice(e, c),
            );
          }),
            this.m_mapLocalPackagePriceOverrides.delete(e),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(e, r) {
          const c = {
            packageID: e,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: l.iA.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: r,
          };
          for (const r of this.m_rgKnownPriceKeys)
            c.prices[r] = this.GetPrice(e, r);
          const n = this.m_mapPackageCountryOverridePrice.get(e);
          if (n) for (const r of n.keys()) c.prices[r] = this.GetPrice(e, r);
          return c;
        }
        async SubmitProposalToServer(e, r, c) {
          const n = this.BuildNewPricingProposal(e, r),
            t = JSON.stringify(n.prices),
            s = (0, l.Tc)("publisherid", "application_config"),
            i =
              l.TS.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              s +
              "/" +
              e,
            u = new FormData();
          u.append("sessionid", l.TS.SESSIONID),
            u.append("partner_will_publish", r ? "1" : "0"),
            u.append("prices", t);
          let C = null;
          try {
            const r = await a().post(i, u, {
              withCredentials: !0,
              cancelToken: c?.token,
            });
            if (
              200 == r?.status &&
              1 == r.data?.success &&
              0 != r.data.eState
            ) {
              if (3 == r.data.eState) {
                this.m_mapPriceProposals.delete(e);
                for (const r of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.has(e) ||
                    this.m_mapPackagePrice.set(e, new Map()),
                    this.m_mapPackagePrice.get(e).set(r, n.prices[r]);
              } else
                (n.eState = r.data.eState),
                  (n.proposalKey = r.data.proposalKey),
                  this.m_mapPriceProposals.set(e, n);
              return this.DiscardLocalPriceOverridesForPackage(e), r.data;
            }
          } catch (e) {
            C = e;
          }
          const d = (0, o.H)(C);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              d.strErrorMsg,
              d,
            ),
            C?.response?.data ?? { success: 2 }
          );
        }
        async PublishApprovedProposal(e, r, c = 0) {
          const n = this.m_mapPriceProposals.get(e);
          if (4 != n?.eState || !n?.proposalKey) return { success: 8 };
          const t = (0, l.Tc)("publisherid", "application_config"),
            s =
              l.TS.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              t +
              "/" +
              e,
            i = new FormData();
          i.append("sessionid", l.TS.SESSIONID),
            i.append("proposal_key", n.proposalKey);
          let u = null;
          try {
            const t = await a().post(s, i, {
              withCredentials: !0,
              cancelToken: r?.token,
              timeout: c,
            });
            if (200 == t?.status && 1 == t.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const r of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(e).set(r, n.prices[r]),
                  this.GetPriceGridCellCallbackList(e, r).Dispatch(
                    this.GetSavedPrice(e, r),
                  );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                t.data
              );
            }
          } catch (e) {
            u = e;
          }
          const C = (0, o.H)(u);
          return (
            console.error(
              "CPackagePricingStore.PublishApprovedProposal: failed",
              C.strErrorMsg,
              C,
            ),
            u?.response?.data ?? { success: 2 }
          );
        }
        async CancelProposal(e, r) {
          const c = this.m_mapPriceProposals.get(e);
          if (!c?.proposalKey) return { success: 8 };
          const n = (0, l.Tc)("publisherid", "application_config"),
            t =
              l.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              n +
              "/" +
              e,
            s = new FormData();
          s.append("sessionid", l.TS.SESSIONID),
            s.append("proposal_key", c.proposalKey);
          let i = null;
          try {
            const c = await a().post(t, s, {
              withCredentials: !0,
              cancelToken: r?.token,
            });
            if (200 == c?.status && 1 == c.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const r of this.m_rgKnownPriceKeys)
                this.GetPriceGridCellCallbackList(e, r).Dispatch(
                  this.GetSavedPrice(e, r),
                );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                c.data
              );
            }
          } catch (e) {
            i = e;
          }
          const u = (0, o.H)(i);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              u.strErrorMsg,
              u,
            ),
            i?.response?.data ?? { success: 2 }
          );
        }
        GetLocalOverrideCountForPriceKey(e) {
          return this.m_mapOverridesPerPriceKey.get(e) ?? 0;
        }
        BAnyPackagePriceBelowMin(e) {
          if (!e) return !1;
          for (let r of this.m_rgKnownPriceKeys) {
            let c = this.GetPrice(e, r);
            if (void 0 === c) continue;
            let { nMinPriceInCents: n, nMaxPriceInCents: t } = Y(e, r);
            if (c < n) return !0;
          }
          return !1;
        }
      }
      function S(e, r) {
        if (e.strPriceKey == r.strPriceKey) {
          const c = (0, _.ww)(e.packageID),
            n = (0, _.ww)(r.packageID);
          return (0, d.kd)(c, n);
        }
        return (0, d.kd)(G(e.strPriceKey), G(r.strPriceKey));
      }
      function R(e) {
        const r = e.split("_")[0];
        return h.Get().m_mapCurrencyData.get(r);
      }
      function D(e, r) {
        if (void 0 === r) return ["", "", ""];
        const c = R(r) ?? R("USD");
        let n = "";
        if ("number" == typeof e) {
          let r = e.toString();
          r.length < 3 && (r = (1 == r.length ? "0" : "") + "0" + r);
          const t = r.length - 2;
          for (let e = 0; e < t; e++) {
            const a = r.charAt(e);
            (n += a),
              e < t - 1 &&
                (t - e - 1) % 3 == 0 &&
                "-" != a &&
                (n += c.strThousandsSeparator);
          }
          c.bWholeUnitsOnly ||
            ((n += c.strDecimalSymbol), (n += r.substr(r.length - 2)));
        }
        return c.bSymbolIsPrefix
          ? [c.strSymbol + c.strSymbolAndNumberSeparator, n, ""]
          : ["", n, c.strSymbolAndNumberSeparator + c.strSymbol];
      }
      (0, n.Cg)([i.sH], h.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, n.Cg)([C.oI], h.prototype, "OverridePrice", null),
        (0, n.Cg)([i.XI], h.prototype, "UpdateOverridesPerPriceKey", null);
      const f = new Map([
        ["USD", "@1"],
        ["CNY", "@2"],
        ["EUR", "@3"],
        ["GBP", "@4"],
        ["CAD", "@5"],
        ["AUD", "@6"],
        ["JPY", "@7"],
        ["KRW", "@8"],
        ["RUB", "@9"],
      ]);
      function G(e) {
        return f.has(e) ? f.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function v(e, r) {
        return h.Get().GetPrice(e, r);
      }
      function K(e) {
        return h.Get().GetPublishedCountryOverrides(e);
      }
      function N(e, r) {
        return h.Get().GetPublishedPriceCountryOverride(e, r);
      }
      function b(e, r) {
        return h.Get().GetPublishedPrice(e, r);
      }
      function L(e, r) {
        return h.Get().GetProposedPrice(e, r);
      }
      function U(e, r) {
        return h.Get().GetLocalOverridePrice(e, r);
      }
      function M(e) {
        const r = h.Get().m_strDisplayPriceKey;
        return D(h.Get().GetPrice(e, r), r).join("");
      }
      function B(e) {
        const [r, c] = s.useState(h.Get().m_strDisplayPriceKey);
        return (
          (0, C.hL)(h.Get().m_displayPriceKeyCallbackList, c),
          (function (e, r) {
            const [c, n] = s.useState(h.Get().GetPrice(e, r));
            return (
              (0, C.hL)(h.Get().GetPriceGridCellCallbackList(e, r), n),
              s.useEffect(() => n(h.Get().GetPrice(e, r)), [e, r]),
              D(c, r).join("")
            );
          })(e, r)
        );
      }
      function T() {
        const e = (0, _.Yr)(),
          r = (0, p.cT)(),
          c = (0, I.Bb)();
        return s.useCallback(
          () =>
            (function (e, r, c) {
              let n = 0;
              for (const t of e) {
                const e = new Array(),
                  a = new Array(),
                  s = h.Get().GetPrice(t, "USD");
                if (s && !(s <= 0)) {
                  for (const n of h.Get().m_rgKnownPriceKeys) {
                    if ("USD" == n) continue;
                    const s = h.Get().GetPrice(t, "USD"),
                      { nSuggestedPriceInCents: i, nGuidelinesLevel: o } = A(
                        r,
                        c,
                        s,
                        (0, g.ei)(n),
                        (0, m.vS)(n),
                      );
                    null !== o &&
                      h.Get().GetPrice(t, n) != i &&
                      (e.push(n), a.push(i));
                  }
                  e.length > 0 &&
                    (h.Get().OverridePricesForPackage(t, e, a), (n += 1));
                }
              }
              n > 0 && h.Get().DispatchPriceOverridesCallbacks();
            })(e, r, c),
          [e, r, c],
        );
      }
      function O(e, r) {
        const c = (0, C.CH)();
        (0, C.hL)(h.Get().GetPriceGridCellCallbackList(e, r), c);
        const n = h.Get().GetPrice(e, r),
          t = (0, p.cT)(),
          a = (0, I.Bb)();
        (0, C.hL)(h.Get().GetPriceGridCellCallbackList(e, "USD"), c);
        const i = h.Get().GetPrice(e, "USD"),
          { nSuggestedPriceInCents: o, nGuidelinesLevel: u } = A(
            t,
            a,
            i,
            (0, g.ei)(r),
            (0, m.vS)(r),
          ),
          d = s.useCallback((c) => h.Get().OverridePrice(e, r, c), [e, r]),
          l = h.Get().GetPublishedPrice(e, r),
          _ = h.Get().GetProposedPrice(e, r),
          { nMinPriceInCents: k, nMaxPriceInCents: E } = Y(e, r),
          y = h.Get().GetMinimumDiscountPrice(r),
          P = n ? Math.floor((100 * (n - y)) / n) : 90,
          S = P < Math.min(90, Math.floor((100 * (u - 50)) / u)) ? P : null;
        return s.useMemo(
          () => ({
            nPriceInCents: n,
            nProposedPriceInCents: _,
            nPublishedPriceInCents: l,
            nMinPriceInCents: k,
            nMaxPriceInCents: E,
            nMaxDiscountPercentage: S,
            nSuggestedPriceInCents: o,
            fnSetPrice: d,
          }),
          [n, _, l, k, E, S, o, d],
        );
      }
      function w(e) {
        let [r, c] = s.useState(() => h.Get().BAnyPackagePriceBelowMin(e)),
          n = s.useCallback(() => {
            let r = h.Get().BAnyPackagePriceBelowMin(e);
            c(r);
          }, [e, c]);
        return (0, C.hL)(h.Get().GetPackageOverridesCallbackList(e), n), r;
      }
      function H(e) {
        return h.Get().BAnyPackagePriceBelowMin(e);
      }
      function Y(e, r) {
        let c = h.Get();
        return {
          nMinPriceInCents: c.GetMinimumBasePrice(r),
          nMaxPriceInCents: c.m_setRecurringSubscriptions.has(e)
            ? c.GetPublishedPrice(e, r)
            : null,
        };
      }
      function V() {
        return s.useCallback((e, r, c) => {
          const n = h.Get().GetPrice(e, r);
          return (
            h.Get().OverridePrice(e, r, c),
            n == c
              ? null
              : {
                  packageID: e,
                  strPriceKey: r,
                  nPriceInCents: c,
                  nOldPriceInCents: n,
                }
          );
        }, []);
      }
      function W(e) {
        const r = (0, C.CH)();
        return (
          (0, C.hL)(h.Get().GetPriceGridCellCallbackList(e, "USD"), r),
          h.Get().m_mapPriceProposals.get(e)
        );
      }
      function F() {
        return Array.from(h.Get().m_mapPriceProposals.values());
      }
      function Z(e) {
        return h.Get().m_mapPriceProposals.get(e);
      }
      function x(e) {
        let r = !1;
        for (const c of h.Get().m_rgKnownPriceKeys) {
          let n = h.Get().GetPublishedPrice(e, c);
          r = r || (0 != n && void 0 !== n);
        }
        return r;
      }
      function J(e) {
        const r = W(e),
          c = [];
        for (const n of h.Get().m_rgKnownPriceKeys) {
          const t = r.prices[n],
            a = h.Get().GetPublishedPrice(e, n);
          t != a &&
            c.push({
              packageID: e,
              strPriceKey: n,
              nPriceInCents: t,
              nOldPriceInCents: a,
            });
        }
        return c;
      }
      function j() {
        return h.Get().m_rgKnownPriceKeys;
      }
      function X(e) {
        let r = h.Get().m_mapPriceKeyDescriptions.get(e);
        return r ? r.strDescription : "";
      }
      function $(e) {
        return s.useCallback(() => {
          h.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function Q(e) {
        return s.useCallback(() => {
          h.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function z(e) {
        return s.useCallback(() => {
          h.Get().CancelProposal(e);
        }, [e]);
      }
      function q() {
        const [e, r] = s.useState(h.Get().m_strDisplayPriceKey),
          c = h.Get().m_rgKnownPriceKeys,
          n = s.useCallback((e) => {
            r(e),
              (h.Get().m_strDisplayPriceKey = e),
              h.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: c, fnSetPriceKey: n };
      }
      function ee(e) {
        const r = (0, C.CH)();
        return (
          (0, C.hL)(h.Get().m_allPriceOverridesCallbackList, r),
          h.Get().BHasLocalPriceOverrides(e)
        );
      }
      function re(e) {
        return h.Get().BHasLocalPriceOverrides(e);
      }
      function ce() {
        const [e, r] = s.useState(() => h.Get().GetAllLocalPriceOverrides());
        return (0, C.hL)(h.Get().m_allPriceOverridesCallbackList, r), e;
      }
      function ne(e) {
        return (0, k.q3)(() => h.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function te() {
        return s.useCallback(
          () => h.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function ae() {
        return s.useCallback(() => h.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function se() {
        return h.Get().OverridePrice;
      }
      function ie() {
        return s.useCallback(
          (e, r, c) => h.Get().SubmitProposalToServer(e, r, c),
          [],
        );
      }
      function oe() {
        return s.useCallback(
          (e, r) => h.Get().PublishApprovedProposal(e, r, 6e4),
          [],
        );
      }
      function ue(e) {
        let r = [];
        const c = h.Get().m_rgKnownPriceKeys;
        for (let n of e) {
          if (x(n)) continue;
          let e = !1;
          for (const r of c) {
            if (!h.Get().BPriceKeyRequired(r)) continue;
            if (!h.Get().GetPrice(n, r)) {
              e = !0;
              break;
            }
          }
          e && r.push(n);
        }
        return r;
      }
    },
    9554: (e, r, c) => {
      c.d(r, { es: () => a, nm: () => d });
      var n = c(56011),
        t = c(61859);
      function a(e, r) {
        const c = (0, t.we)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          n = (0, t.we)("#PackageGrid_NoBaseGameFoundForPackage"),
          a = e.original.appName,
          s = r.original.appName,
          i = a == c,
          o = a == n,
          u = !i && !o,
          C = s == c,
          d = s == n,
          l = !C && !d;
        if (u && l) return a.localeCompare(s);
        if (u || l) return u ? -1 : 1;
        if (i == C && o == d) {
          const c = e.original.packageName,
            n = r.original.packageName;
          return c && n
            ? c.localeCompare(n)
            : c || n
              ? c
                ? -1
                : 1
              : e.original.packageID - r.original.packageID;
        }
        return i ? -1 : 1;
      }
      const s = (e) => e.nextElementSibling,
        i = (e) => e.previousElementSibling,
        o = (e, r) => {
          const c = e.getAttribute("data-table-column-id"),
            n = e.parentElement;
          let t = n && r(n);
          for (; c && t; ) {
            for (const e of Array.from(t.children))
              if (c == e.getAttribute("data-table-column-id")) return e;
            t = r(t);
          }
          return null;
        },
        u = new Map([
          [38, (e) => o(e, i)],
          [39, s],
          [40, (e) => o(e, s)],
          [37, i],
          [9, (e) => o(e, s)],
          [13, (e) => o(e, s)],
        ]);
      function C(e) {
        const r = Array.prototype.slice.call(e.children).reverse();
        for (; r.length > 0; ) {
          const e = r.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          r.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function d(e) {
        let r = u.get(e.keyCode);
        if ((9 === e.keyCode && e.shiftKey && (r = (e) => o(e, i)), !r)) return;
        var c;
        let t = r(
          ((c = e.currentTarget),
          (0, n.Kf)(c, (e) => null != e.getAttribute("data-table-column-id"))),
        );
        for (; t; ) {
          const c = C(t);
          if (c) return c.focus(), void e.preventDefault();
          t = r(t);
        }
      }
    },
    70986: (e, r, c) => {
      c.d(r, { M: () => t, o: () => n });
      const n = "America/Los_Angeles";
      function t(e) {
        const r = c(87937).unix(e).tz(n);
        return (
          r.seconds(0),
          r.minutes(0),
          r.hours(10),
          r.unix() < e && r.hours(34),
          r.unix()
        );
      }
    },
    72255: (e, r, c) => {
      c.d(r, {
        IG: () => l,
        M1: () => i,
        Ug: () => o,
        ei: () => d,
        gM: () => _,
        mG: () => C,
        pd: () => u,
        rt: () => s,
        t_: () => k,
      });
      var n = c(81393),
        t = c(88267),
        a = c(29848);
      function s(e) {
        switch (e?.toUpperCase()) {
          case "AE":
            return t.AI.k_ECurrencyCodeAED;
          case "AU":
            return t.AI.k_ECurrencyCodeAUD;
          case "BR":
            return t.AI.k_ECurrencyCodeBRL;
          case "CA":
            return t.AI.k_ECurrencyCodeCAD;
          case "CH":
          case "LI":
            return t.AI.k_ECurrencyCodeCHF;
          case "CL":
            return t.AI.k_ECurrencyCodeCLP;
          case "CN":
          case "XC":
            return t.AI.k_ECurrencyCodeCNY;
          case "CO":
            return t.AI.k_ECurrencyCodeCOP;
          case "CR":
            return t.AI.k_ECurrencyCodeCRC;
          case "AD":
          case "AL":
          case "AT":
          case "AX":
          case "BA":
          case "BE":
          case "BG":
          case "CY":
          case "CZ":
          case "DE":
          case "DK":
          case "EE":
          case "ES":
          case "FI":
          case "FO":
          case "FR":
          case "GF":
          case "GI":
          case "GP":
          case "GR":
          case "HR":
          case "HU":
          case "IE":
          case "IT":
          case "LT":
          case "LU":
          case "LV":
          case "MC":
          case "ME":
          case "MK":
          case "MQ":
          case "MT":
          case "NC":
          case "NL":
          case "PF":
          case "PT":
          case "RE":
          case "RO":
          case "RS":
          case "SE":
          case "SI":
          case "SJ":
          case "SK":
          case "SM":
          case "VA":
            return t.AI.k_ECurrencyCodeEUR;
          case "GB":
          case "GG":
          case "GS":
          case "IM":
          case "JE":
            return t.AI.k_ECurrencyCodeGBP;
          case "HK":
            return t.AI.k_ECurrencyCodeHKD;
          case "ID":
            return t.AI.k_ECurrencyCodeIDR;
          case "IL":
            return t.AI.k_ECurrencyCodeILS;
          case "IN":
            return t.AI.k_ECurrencyCodeINR;
          case "JP":
            return t.AI.k_ECurrencyCodeJPY;
          case "KR":
            return t.AI.k_ECurrencyCodeKRW;
          case "KW":
            return t.AI.k_ECurrencyCodeKWD;
          case "KZ":
            return t.AI.k_ECurrencyCodeKZT;
          case "MX":
            return t.AI.k_ECurrencyCodeMXN;
          case "MY":
            return t.AI.k_ECurrencyCodeMYR;
          case "NO":
            return t.AI.k_ECurrencyCodeNOK;
          case "NZ":
            return t.AI.k_ECurrencyCodeNZD;
          case "PE":
            return t.AI.k_ECurrencyCodePEN;
          case "PH":
            return t.AI.k_ECurrencyCodePHP;
          case "PL":
            return t.AI.k_ECurrencyCodePLN;
          case "QA":
            return t.AI.k_ECurrencyCodeQAR;
          case "RU":
            return t.AI.k_ECurrencyCodeRUB;
          case "SA":
            return t.AI.k_ECurrencyCodeSAR;
          case "SG":
            return t.AI.k_ECurrencyCodeSGD;
          case "TH":
            return t.AI.k_ECurrencyCodeTHB;
          case "TW":
            return t.AI.k_ECurrencyCodeTWD;
          case "UA":
            return t.AI.k_ECurrencyCodeUAH;
          case "AF":
          case "AG":
          case "AI":
          case "AM":
          case "AN":
          case "AO":
          case "AQ":
          case "AR":
          case "AS":
          case "AW":
          case "AZ":
          case "BB":
          case "BD":
          case "BF":
          case "BH":
          case "BI":
          case "BJ":
          case "BM":
          case "BN":
          case "BO":
          case "BS":
          case "BT":
          case "BV":
          case "BW":
          case "BY":
          case "BZ":
          case "CC":
          case "CD":
          case "CF":
          case "CG":
          case "CI":
          case "CK":
          case "CM":
          case "CV":
          case "CX":
          case "DJ":
          case "DM":
          case "DO":
          case "DZ":
          case "EC":
          case "EG":
          case "EH":
          case "ER":
          case "ET":
          case "FJ":
          case "FK":
          case "FM":
          case "GA":
          case "GD":
          case "GE":
          case "GH":
          case "GL":
          case "GM":
          case "GN":
          case "GQ":
          case "GT":
          case "GU":
          case "GW":
          case "GY":
          case "HM":
          case "HN":
          case "HT":
          case "IO":
          case "IQ":
          case "IS":
          case "JM":
          case "JO":
          case "KE":
          case "KG":
          case "KH":
          case "KI":
          case "KM":
          case "KN":
          case "KY":
          case "LA":
          case "LB":
          case "LC":
          case "LK":
          case "LR":
          case "LS":
          case "LY":
          case "MA":
          case "MD":
          case "MG":
          case "MH":
          case "ML":
          case "MM":
          case "MN":
          case "MO":
          case "MP":
          case "MR":
          case "MS":
          case "MU":
          case "MV":
          case "MW":
          case "MZ":
          case "NA":
          case "NE":
          case "NF":
          case "NG":
          case "NI":
          case "NP":
          case "NR":
          case "NU":
          case "OM":
          case "PA":
          case "PG":
          case "PK":
          case "PM":
          case "PN":
          case "PR":
          case "PS":
          case "PW":
          case "PY":
          case "RW":
          case "SB":
          case "SC":
          case "SD":
          case "SH":
          case "SL":
          case "SN":
          case "SO":
          case "SR":
          case "ST":
          case "SV":
          case "SY":
          case "SZ":
          case "TC":
          case "TD":
          case "TF":
          case "TG":
          case "TJ":
          case "TK":
          case "TL":
          case "TM":
          case "TN":
          case "TO":
          case "TR":
          case "TT":
          case "TV":
          case "TZ":
          case "UG":
          case "UM":
          case "US":
          case "UZ":
          case "VC":
          case "VE":
          case "VG":
          case "VI":
          case "VU":
          case "WF":
          case "WS":
          case "YE":
          case "YT":
          case "ZM":
          case "ZW":
            return t.AI.k_ECurrencyCodeUSD;
          case "UY":
            return t.AI.k_ECurrencyCodeUYU;
          case "VN":
            return t.AI.k_ECurrencyCodeVND;
          case "ZA":
            return t.AI.k_ECurrencyCodeZAR;
          default:
            return (
              console.assert(!1, `Unhandled country code: ${e}`),
              t.AI.k_ECurrencyCodeUSD
            );
        }
      }
      function i(e) {
        switch (e) {
          case t.AI.k_ECurrencyCodeGBP:
            return "GBP";
          case t.AI.k_ECurrencyCodeEUR:
            return "EUR";
          case t.AI.k_ECurrencyCodeCHF:
            return "CHF";
          case t.AI.k_ECurrencyCodeRUB:
            return "RUB";
          case t.AI.k_ECurrencyCodePLN:
            return "PLN";
          case t.AI.k_ECurrencyCodeBRL:
            return "BRL";
          case t.AI.k_ECurrencyCodeJPY:
            return "JPY";
          case t.AI.k_ECurrencyCodeNOK:
            return "NOK";
          case t.AI.k_ECurrencyCodeIDR:
            return "IDR";
          case t.AI.k_ECurrencyCodeMYR:
            return "MYR";
          case t.AI.k_ECurrencyCodePHP:
            return "PHP";
          case t.AI.k_ECurrencyCodeSGD:
            return "SGD";
          case t.AI.k_ECurrencyCodeTHB:
            return "THB";
          case t.AI.k_ECurrencyCodeVND:
            return "VND";
          case t.AI.k_ECurrencyCodeKRW:
            return "KRW";
          case t.AI.k_ECurrencyCodeTRY:
            return "TRY";
          case t.AI.k_ECurrencyCodeUAH:
            return "UAH";
          case t.AI.k_ECurrencyCodeMXN:
            return "MXN";
          case t.AI.k_ECurrencyCodeCAD:
            return "CAD";
          case t.AI.k_ECurrencyCodeAUD:
            return "AUD";
          case t.AI.k_ECurrencyCodeNZD:
            return "NZD";
          case t.AI.k_ECurrencyCodeCNY:
            return "CNY";
          case t.AI.k_ECurrencyCodeINR:
            return "INR";
          case t.AI.k_ECurrencyCodeCLP:
            return "CLP";
          case t.AI.k_ECurrencyCodePEN:
            return "PEN";
          case t.AI.k_ECurrencyCodeCOP:
            return "COP";
          case t.AI.k_ECurrencyCodeZAR:
            return "ZAR";
          case t.AI.k_ECurrencyCodeHKD:
            return "HKD";
          case t.AI.k_ECurrencyCodeTWD:
            return "TWD";
          case t.AI.k_ECurrencyCodeSAR:
            return "SAR";
          case t.AI.k_ECurrencyCodeAED:
            return "AED";
          case t.AI.k_ECurrencyCodeSEK:
            return "SEK";
          case t.AI.k_ECurrencyCodeARS:
            return "ARS";
          case t.AI.k_ECurrencyCodeILS:
            return "ILS";
          case t.AI.k_ECurrencyCodeBYN:
            return "BYN";
          case t.AI.k_ECurrencyCodeKZT:
            return "KZT";
          case t.AI.k_ECurrencyCodeKWD:
            return "KWD";
          case t.AI.k_ECurrencyCodeQAR:
            return "QAR";
          case t.AI.k_ECurrencyCodeCRC:
            return "CRC";
          case t.AI.k_ECurrencyCodeUYU:
            return "UYU";
          case t.AI.k_ECurrencyCodeBGN:
            return "BGN";
          case t.AI.k_ECurrencyCodeHRK:
            return "HRK";
          case t.AI.k_ECurrencyCodeCZK:
            return "CZK";
          case t.AI.k_ECurrencyCodeDKK:
            return "DKK";
          case t.AI.k_ECurrencyCodeHUF:
            return "HUF";
          case t.AI.k_ECurrencyCodeRON:
            return "RON";
          default:
            return "USD";
        }
      }
      function o(e) {
        switch (e) {
          case t.AI.k_ECurrencyCodeUSD:
            return "US Dollar";
          case t.AI.k_ECurrencyCodeGBP:
            return "GB Pounds";
          case t.AI.k_ECurrencyCodeEUR:
            return "Euros";
          case t.AI.k_ECurrencyCodeCHF:
            return "Swiss Francs";
          case t.AI.k_ECurrencyCodeRUB:
            return "Russian Rubles";
          case t.AI.k_ECurrencyCodePLN:
            return "Polish zloty";
          case t.AI.k_ECurrencyCodeBRL:
            return "Brazilian Reals";
          case t.AI.k_ECurrencyCodeJPY:
            return "Japanese Yen";
          case t.AI.k_ECurrencyCodeNOK:
            return "Norwegian Krone";
          case t.AI.k_ECurrencyCodeIDR:
            return "Indonesian Rupiah";
          case t.AI.k_ECurrencyCodeMYR:
            return "Malaysian Ringgit";
          case t.AI.k_ECurrencyCodePHP:
            return "Philippine Peso";
          case t.AI.k_ECurrencyCodeSGD:
            return "Singapore Dollar";
          case t.AI.k_ECurrencyCodeTHB:
            return "Thai Baht";
          case t.AI.k_ECurrencyCodeVND:
            return "Vietnamese Dong";
          case t.AI.k_ECurrencyCodeKRW:
            return "Korean Won";
          case t.AI.k_ECurrencyCodeTRY:
            return "Turkish Lira";
          case t.AI.k_ECurrencyCodeUAH:
            return "Ukrainian Hryvnia";
          case t.AI.k_ECurrencyCodeMXN:
            return "Mexican Peso";
          case t.AI.k_ECurrencyCodeCAD:
            return "Canadian Dollar";
          case t.AI.k_ECurrencyCodeAUD:
            return "Australian Dollar";
          case t.AI.k_ECurrencyCodeNZD:
            return "New Zealand Dollar";
          case t.AI.k_ECurrencyCodeCNY:
            return "Chinese Yuan";
          case t.AI.k_ECurrencyCodeINR:
            return "Indian Rupee";
          case t.AI.k_ECurrencyCodeCLP:
            return "Chilean Peso";
          case t.AI.k_ECurrencyCodePEN:
            return "Peruvian Sol";
          case t.AI.k_ECurrencyCodeCOP:
            return "Colombian Peso";
          case t.AI.k_ECurrencyCodeZAR:
            return "South African Rand";
          case t.AI.k_ECurrencyCodeHKD:
            return "Hong Kong Dollar";
          case t.AI.k_ECurrencyCodeTWD:
            return "Taiwanese Dollar";
          case t.AI.k_ECurrencyCodeSAR:
            return "Saudi Arabian Riyal";
          case t.AI.k_ECurrencyCodeAED:
            return "Emirati Dirham";
          case t.AI.k_ECurrencyCodeSEK:
            return "Swedish Krona";
          case t.AI.k_ECurrencyCodeARS:
            return "Argentine Peso";
          case t.AI.k_ECurrencyCodeILS:
            return "Israeli New Shequel";
          case t.AI.k_ECurrencyCodeBYN:
            return "Belarusian Ruble";
          case t.AI.k_ECurrencyCodeKZT:
            return "Kazakhstani Tenge";
          case t.AI.k_ECurrencyCodeKWD:
            return "Kuwaiti Dinar";
          case t.AI.k_ECurrencyCodeQAR:
            return "Qatari Rial";
          case t.AI.k_ECurrencyCodeCRC:
            return "Costa Rican Colon";
          case t.AI.k_ECurrencyCodeUYU:
            return "Uruguayan Peso";
          case t.AI.k_ECurrencyCodeBGN:
            return "Bulgarian lev";
          case t.AI.k_ECurrencyCodeHRK:
            return "Croatian kuna";
          case t.AI.k_ECurrencyCodeCZK:
            return "Czech koruna";
          case t.AI.k_ECurrencyCodeDKK:
            return "Danish krone";
          case t.AI.k_ECurrencyCodeHUF:
            return "Hungarian forint";
          case t.AI.k_ECurrencyCodeRON:
            return "Romanian leu";
          default:
            return "";
        }
      }
      function u(e, r = a.R.k_ERegionCodeInvalid) {
        switch (e) {
          case t.AI.k_ECurrencyCodeGBP:
            return "gbp";
          case t.AI.k_ECurrencyCodeEUR:
            return "eur";
          case t.AI.k_ECurrencyCodeCHF:
            return "chf";
          case t.AI.k_ECurrencyCodeRUB:
            return "rub";
          case t.AI.k_ECurrencyCodePLN:
            return "pln";
          case t.AI.k_ECurrencyCodeBRL:
            return "brl";
          case t.AI.k_ECurrencyCodeJPY:
            return "jpy";
          case t.AI.k_ECurrencyCodeNOK:
            return "nok";
          case t.AI.k_ECurrencyCodeIDR:
            return "idr";
          case t.AI.k_ECurrencyCodeMYR:
            return "myr";
          case t.AI.k_ECurrencyCodePHP:
            return "php";
          case t.AI.k_ECurrencyCodeSGD:
            return "sgd";
          case t.AI.k_ECurrencyCodeTHB:
            return "thb";
          case t.AI.k_ECurrencyCodeVND:
            return "vnd";
          case t.AI.k_ECurrencyCodeKRW:
            return "krw";
          case t.AI.k_ECurrencyCodeTRY:
            return "try";
          case t.AI.k_ECurrencyCodeUAH:
            return "uah";
          case t.AI.k_ECurrencyCodeMXN:
            return "mxn";
          case t.AI.k_ECurrencyCodeCAD:
            return "cad";
          case t.AI.k_ECurrencyCodeAUD:
            return "aud";
          case t.AI.k_ECurrencyCodeNZD:
            return "nzd";
          case t.AI.k_ECurrencyCodeCNY:
            return "cny";
          case t.AI.k_ECurrencyCodeINR:
            return "inr";
          case t.AI.k_ECurrencyCodeCLP:
            return "clp";
          case t.AI.k_ECurrencyCodePEN:
            return "pen";
          case t.AI.k_ECurrencyCodeCOP:
            return "cop";
          case t.AI.k_ECurrencyCodeZAR:
            return "zar";
          case t.AI.k_ECurrencyCodeHKD:
            return "hkd";
          case t.AI.k_ECurrencyCodeTWD:
            return "twd";
          case t.AI.k_ECurrencyCodeSAR:
            return "sar";
          case t.AI.k_ECurrencyCodeAED:
            return "aed";
          case t.AI.k_ECurrencyCodeSEK:
            return "sek";
          case t.AI.k_ECurrencyCodeARS:
            return "ars";
          case t.AI.k_ECurrencyCodeILS:
            return "ils";
          case t.AI.k_ECurrencyCodeBYN:
            return "byn";
          case t.AI.k_ECurrencyCodeKZT:
            return "kzt";
          case t.AI.k_ECurrencyCodeKWD:
            return "kwd";
          case t.AI.k_ECurrencyCodeQAR:
            return "qar";
          case t.AI.k_ECurrencyCodeCRC:
            return "crc";
          case t.AI.k_ECurrencyCodeUYU:
            return "uyu";
          case t.AI.k_ECurrencyCodeBGN:
            return "bgn";
          case t.AI.k_ECurrencyCodeHRK:
            return "hrk";
          case t.AI.k_ECurrencyCodeCZK:
            return "czk";
          case t.AI.k_ECurrencyCodeDKK:
            return "dkk";
          case t.AI.k_ECurrencyCodeHUF:
            return "huf";
          case t.AI.k_ECurrencyCodeRON:
            return "ron";
          default:
            return r == a.R.k_ERegionCodeCIS
              ? "usd_cis"
              : r == a.R.k_ERegionCodeSAsia
                ? "usd_sasia"
                : r == a.R.k_ERegionCodeLATAM
                  ? "usd_latam"
                  : r == a.R.k_ERegionCodeMENA
                    ? "usd_mena"
                    : "usd";
        }
      }
      function C(e) {
        switch (e) {
          case a.R.k_ERegionCodeCIS:
            return "CIS";
          case a.R.k_ERegionCodeSAsia:
            return "SASIA";
          case a.R.k_ERegionCodeLATAM:
            return "LATAM";
          case a.R.k_ERegionCodeMENA:
            return "MENA";
        }
        return "Unknown";
      }
      function d(e) {
        switch (e) {
          case "USD":
          case "USD_CIS":
          case "USD_MENA":
          case "USD_LATAM":
          case "USD_SASIA":
            return t.AI.k_ECurrencyCodeUSD;
          case "GBP":
            return t.AI.k_ECurrencyCodeGBP;
          case "EUR":
            return t.AI.k_ECurrencyCodeEUR;
          case "CHF":
            return t.AI.k_ECurrencyCodeCHF;
          case "RUB":
            return t.AI.k_ECurrencyCodeRUB;
          case "PLN":
            return t.AI.k_ECurrencyCodePLN;
          case "BRL":
            return t.AI.k_ECurrencyCodeBRL;
          case "JPY":
            return t.AI.k_ECurrencyCodeJPY;
          case "NOK":
            return t.AI.k_ECurrencyCodeNOK;
          case "IDR":
            return t.AI.k_ECurrencyCodeIDR;
          case "MYR":
            return t.AI.k_ECurrencyCodeMYR;
          case "PHP":
            return t.AI.k_ECurrencyCodePHP;
          case "SGD":
            return t.AI.k_ECurrencyCodeSGD;
          case "THB":
            return t.AI.k_ECurrencyCodeTHB;
          case "VND":
            return t.AI.k_ECurrencyCodeVND;
          case "KRW":
            return t.AI.k_ECurrencyCodeKRW;
          case "TRY":
            return t.AI.k_ECurrencyCodeTRY;
          case "UAH":
            return t.AI.k_ECurrencyCodeUAH;
          case "MXN":
            return t.AI.k_ECurrencyCodeMXN;
          case "CAD":
            return t.AI.k_ECurrencyCodeCAD;
          case "AUD":
            return t.AI.k_ECurrencyCodeAUD;
          case "NZD":
            return t.AI.k_ECurrencyCodeNZD;
          case "CNY":
            return t.AI.k_ECurrencyCodeCNY;
          case "INR":
            return t.AI.k_ECurrencyCodeINR;
          case "CLP":
            return t.AI.k_ECurrencyCodeCLP;
          case "PEN":
            return t.AI.k_ECurrencyCodePEN;
          case "COP":
            return t.AI.k_ECurrencyCodeCOP;
          case "ZAR":
            return t.AI.k_ECurrencyCodeZAR;
          case "HKD":
            return t.AI.k_ECurrencyCodeHKD;
          case "TWD":
            return t.AI.k_ECurrencyCodeTWD;
          case "SAR":
            return t.AI.k_ECurrencyCodeSAR;
          case "AED":
            return t.AI.k_ECurrencyCodeAED;
          case "SEK":
            return t.AI.k_ECurrencyCodeSEK;
          case "ARS":
            return t.AI.k_ECurrencyCodeARS;
          case "ILS":
            return t.AI.k_ECurrencyCodeILS;
          case "BYN":
            return t.AI.k_ECurrencyCodeBYN;
          case "KZT":
            return t.AI.k_ECurrencyCodeKZT;
          case "KWD":
            return t.AI.k_ECurrencyCodeKWD;
          case "QAR":
            return t.AI.k_ECurrencyCodeQAR;
          case "CRC":
            return t.AI.k_ECurrencyCodeCRC;
          case "UYU":
            return t.AI.k_ECurrencyCodeUYU;
          case "BGN":
            return t.AI.k_ECurrencyCodeBGN;
          case "HRK":
            return t.AI.k_ECurrencyCodeHRK;
          case "CZK":
            return t.AI.k_ECurrencyCodeCZK;
          case "DKK":
            return t.AI.k_ECurrencyCodeDKK;
          case "HUF":
            return t.AI.k_ECurrencyCodeHUF;
          case "RON":
            return t.AI.k_ECurrencyCodeRON;
          default:
            return l(e)
              ? d(e.substring(0, 3))
              : Number.isInteger(Number(e))
                ? Number(e)
                : ((0, n.wT)(
                    !1,
                    `ASCIICurrencyCodeToECurrencyCode unexpected code ${e}`,
                  ),
                  t.AI.k_ECurrencyCodeInvalid);
        }
      }
      function l(e) {
        return 6 == e.length;
      }
      function _(e) {
        return {
          eCurrencyCode: d(e.slice(0, 3)),
          strCountryCode: e.slice(4, 6),
        };
      }
      function k(e) {
        return `${o(d(e.toUpperCase()))} (${e})`;
      }
    },
    88267: (e, r, c) => {
      var n;
      c.d(r, { AI: () => n, X5: () => s, yv: () => a }),
        (function (e) {
          (e[(e.k_ECurrencyCodeInvalid = 0)] = "k_ECurrencyCodeInvalid"),
            (e[(e.k_ECurrencyCodeUSD = 1)] = "k_ECurrencyCodeUSD"),
            (e[(e.k_ECurrencyCodeGBP = 2)] = "k_ECurrencyCodeGBP"),
            (e[(e.k_ECurrencyCodeEUR = 3)] = "k_ECurrencyCodeEUR"),
            (e[(e.k_ECurrencyCodeCHF = 4)] = "k_ECurrencyCodeCHF"),
            (e[(e.k_ECurrencyCodeRUB = 5)] = "k_ECurrencyCodeRUB"),
            (e[(e.k_ECurrencyCodePLN = 6)] = "k_ECurrencyCodePLN"),
            (e[(e.k_ECurrencyCodeBRL = 7)] = "k_ECurrencyCodeBRL"),
            (e[(e.k_ECurrencyCodeJPY = 8)] = "k_ECurrencyCodeJPY"),
            (e[(e.k_ECurrencyCodeNOK = 9)] = "k_ECurrencyCodeNOK"),
            (e[(e.k_ECurrencyCodeIDR = 10)] = "k_ECurrencyCodeIDR"),
            (e[(e.k_ECurrencyCodeMYR = 11)] = "k_ECurrencyCodeMYR"),
            (e[(e.k_ECurrencyCodePHP = 12)] = "k_ECurrencyCodePHP"),
            (e[(e.k_ECurrencyCodeSGD = 13)] = "k_ECurrencyCodeSGD"),
            (e[(e.k_ECurrencyCodeTHB = 14)] = "k_ECurrencyCodeTHB"),
            (e[(e.k_ECurrencyCodeVND = 15)] = "k_ECurrencyCodeVND"),
            (e[(e.k_ECurrencyCodeKRW = 16)] = "k_ECurrencyCodeKRW"),
            (e[(e.k_ECurrencyCodeTRY = 17)] = "k_ECurrencyCodeTRY"),
            (e[(e.k_ECurrencyCodeUAH = 18)] = "k_ECurrencyCodeUAH"),
            (e[(e.k_ECurrencyCodeMXN = 19)] = "k_ECurrencyCodeMXN"),
            (e[(e.k_ECurrencyCodeCAD = 20)] = "k_ECurrencyCodeCAD"),
            (e[(e.k_ECurrencyCodeAUD = 21)] = "k_ECurrencyCodeAUD"),
            (e[(e.k_ECurrencyCodeNZD = 22)] = "k_ECurrencyCodeNZD"),
            (e[(e.k_ECurrencyCodeCNY = 23)] = "k_ECurrencyCodeCNY"),
            (e[(e.k_ECurrencyCodeINR = 24)] = "k_ECurrencyCodeINR"),
            (e[(e.k_ECurrencyCodeCLP = 25)] = "k_ECurrencyCodeCLP"),
            (e[(e.k_ECurrencyCodePEN = 26)] = "k_ECurrencyCodePEN"),
            (e[(e.k_ECurrencyCodeCOP = 27)] = "k_ECurrencyCodeCOP"),
            (e[(e.k_ECurrencyCodeZAR = 28)] = "k_ECurrencyCodeZAR"),
            (e[(e.k_ECurrencyCodeHKD = 29)] = "k_ECurrencyCodeHKD"),
            (e[(e.k_ECurrencyCodeTWD = 30)] = "k_ECurrencyCodeTWD"),
            (e[(e.k_ECurrencyCodeSAR = 31)] = "k_ECurrencyCodeSAR"),
            (e[(e.k_ECurrencyCodeAED = 32)] = "k_ECurrencyCodeAED"),
            (e[(e.k_ECurrencyCodeSEK = 33)] = "k_ECurrencyCodeSEK"),
            (e[(e.k_ECurrencyCodeARS = 34)] = "k_ECurrencyCodeARS"),
            (e[(e.k_ECurrencyCodeILS = 35)] = "k_ECurrencyCodeILS"),
            (e[(e.k_ECurrencyCodeBYN = 36)] = "k_ECurrencyCodeBYN"),
            (e[(e.k_ECurrencyCodeKZT = 37)] = "k_ECurrencyCodeKZT"),
            (e[(e.k_ECurrencyCodeKWD = 38)] = "k_ECurrencyCodeKWD"),
            (e[(e.k_ECurrencyCodeQAR = 39)] = "k_ECurrencyCodeQAR"),
            (e[(e.k_ECurrencyCodeCRC = 40)] = "k_ECurrencyCodeCRC"),
            (e[(e.k_ECurrencyCodeUYU = 41)] = "k_ECurrencyCodeUYU"),
            (e[(e.k_ECurrencyCodeBGN = 42)] = "k_ECurrencyCodeBGN"),
            (e[(e.k_ECurrencyCodeHRK = 43)] = "k_ECurrencyCodeHRK"),
            (e[(e.k_ECurrencyCodeCZK = 44)] = "k_ECurrencyCodeCZK"),
            (e[(e.k_ECurrencyCodeDKK = 45)] = "k_ECurrencyCodeDKK"),
            (e[(e.k_ECurrencyCodeHUF = 46)] = "k_ECurrencyCodeHUF"),
            (e[(e.k_ECurrencyCodeRON = 47)] = "k_ECurrencyCodeRON"),
            (e[(e.k_ECurrencyCodeMax = 48)] = "k_ECurrencyCodeMax");
        })(n || (n = {}));
      const t = [n.k_ECurrencyCodeTRY, n.k_ECurrencyCodeARS];
      function a() {
        return [
          n.k_ECurrencyCodeUSD,
          n.k_ECurrencyCodeGBP,
          n.k_ECurrencyCodeEUR,
          n.k_ECurrencyCodeCHF,
          n.k_ECurrencyCodeRUB,
          n.k_ECurrencyCodePLN,
          n.k_ECurrencyCodeBRL,
          n.k_ECurrencyCodeJPY,
          n.k_ECurrencyCodeNOK,
          n.k_ECurrencyCodeIDR,
          n.k_ECurrencyCodeMYR,
          n.k_ECurrencyCodePHP,
          n.k_ECurrencyCodeSGD,
          n.k_ECurrencyCodeTHB,
          n.k_ECurrencyCodeVND,
          n.k_ECurrencyCodeKRW,
          n.k_ECurrencyCodeUAH,
          n.k_ECurrencyCodeMXN,
          n.k_ECurrencyCodeCAD,
          n.k_ECurrencyCodeAUD,
          n.k_ECurrencyCodeNZD,
          n.k_ECurrencyCodeCNY,
          n.k_ECurrencyCodeINR,
          n.k_ECurrencyCodeCLP,
          n.k_ECurrencyCodePEN,
          n.k_ECurrencyCodeCOP,
          n.k_ECurrencyCodeZAR,
          n.k_ECurrencyCodeHKD,
          n.k_ECurrencyCodeTWD,
          n.k_ECurrencyCodeSAR,
          n.k_ECurrencyCodeAED,
          n.k_ECurrencyCodeILS,
          n.k_ECurrencyCodeKZT,
          n.k_ECurrencyCodeKWD,
          n.k_ECurrencyCodeQAR,
          n.k_ECurrencyCodeCRC,
          n.k_ECurrencyCodeUYU,
        ];
      }
      function s() {
        return [
          ...a(),
          ...t,
          n.k_ECurrencyCodeSEK,
          n.k_ECurrencyCodeBGN,
          n.k_ECurrencyCodeHRK,
          n.k_ECurrencyCodeCZK,
          n.k_ECurrencyCodeDKK,
          n.k_ECurrencyCodeHUF,
          n.k_ECurrencyCodeRON,
        ];
      }
    },
    29848: (e, r, c) => {
      var n;
      function t() {
        return [
          n.k_ERegionCodeCIS,
          n.k_ERegionCodeSAsia,
          n.k_ERegionCodeLATAM,
          n.k_ERegionCodeMENA,
        ];
      }
      c.d(r, { R: () => n, i: () => t }),
        (function (e) {
          (e[(e.k_ERegionCodeInvalid = 0)] = "k_ERegionCodeInvalid"),
            (e[(e.k_ERegionCodeCIS = 1)] = "k_ERegionCodeCIS"),
            (e[(e.k_ERegionCodeSAsia = 2)] = "k_ERegionCodeSAsia"),
            (e[(e.k_ERegionCodeLATAM = 3)] = "k_ERegionCodeLATAM"),
            (e[(e.k_ERegionCodeMENA = 4)] = "k_ERegionCodeMENA"),
            (e[(e.k_ERegionCodeMax = 5)] = "k_ERegionCodeMax");
        })(n || (n = {}));
    },
    87718: (e, r, c) => {
      c.d(r, {
        bS: () => a,
        de: () => i,
        j4: () => u,
        k8: () => s,
        uF: () => o,
        vS: () => C,
      });
      var n = c(88267),
        t = c(29848);
      function a(e) {
        return n.AI.k_ECurrencyCodeUSD;
      }
      function s(e) {
        switch (e) {
          case t.R.k_ERegionCodeCIS:
            return "usd_cis";
          case t.R.k_ERegionCodeSAsia:
            return "usd_sasia";
          case t.R.k_ERegionCodeLATAM:
            return "usd_latam";
          case t.R.k_ERegionCodeMENA:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function i(e) {
        switch (e) {
          case t.R.k_ERegionCodeCIS:
            return "CIS";
          case t.R.k_ERegionCodeSAsia:
            return "SASIA";
          case t.R.k_ERegionCodeLATAM:
            return "LATAM";
          case t.R.k_ERegionCodeMENA:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function o(e) {
        switch (e) {
          case "CIS":
            return t.R.k_ERegionCodeCIS;
          case "SASIA":
            return t.R.k_ERegionCodeSAsia;
          case "LATAM":
            return t.R.k_ERegionCodeLATAM;
          case "MENA":
            return t.R.k_ERegionCodeMENA;
          default:
            return t.R.k_ERegionCodeInvalid;
        }
      }
      function u(e) {
        switch (e) {
          case t.R.k_ERegionCodeCIS:
            return "The Commonwealth of Independent Stats";
          case t.R.k_ERegionCodeSAsia:
            return "South Asia";
          case t.R.k_ERegionCodeLATAM:
            return "Latin America";
          case t.R.k_ERegionCodeMENA:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      function C(e) {
        switch (e?.toLowerCase()) {
          case "usd_cis":
            return t.R.k_ERegionCodeCIS;
          case "usd_sasia":
            return t.R.k_ERegionCodeSAsia;
          case "usd_latam":
            return t.R.k_ERegionCodeLATAM;
          case "usd_mena":
            return t.R.k_ERegionCodeMENA;
          default:
            return t.R.k_ERegionCodeInvalid;
        }
      }
    },
    87700: (e, r, c) => {
      c.d(r, { Bb: () => o, jY: () => i });
      var n = c(7850),
        t = c(90626),
        a = c(48174);
      const s = t.createContext({
        eConversionMethod: 1,
        setConversionMethod: (e) => {},
        rgAvailableConversionMethods: [],
      });
      function i(e) {
        const { eInitialConversionMethod: r } = e,
          c = (0, a.cT)(),
          [i, o] = t.useState(r || 1),
          u = t.useMemo(() => {
            const e = c ? c.GetAvailableConversionMethods() : [];
            return {
              eConversionMethod: i,
              setConversionMethod: o,
              rgAvailableConversionMethods: e,
            };
          }, [i, o, c]);
        return (0, n.jsx)(s.Provider, { value: u, children: e.children });
      }
      function o() {
        return t.useContext(s).eConversionMethod;
      }
    },
    48174: (e, r, c) => {
      c.d(r, { mj: () => E, gC: () => y, cT: () => k });
      var n = c(90626),
        t = c(76501);
      class a {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        m_setConversionMethod = new Set();
        m_setSupportedCurrencies = new Set();
        m_setSupportedRegions = new Set();
        GetKey(e, r, c, n = 1) {
          return `${e}_${r}_${c || t.Rm.k_ERegionCodeInvalid}_${n}`;
        }
        GetAvailableConversionMethods() {
          return Array.from(this.m_setConversionMethod).sort();
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(1)?.values() || [])[0];
        }
        BIsSupportCurrencyAndOrRegion(e, r) {
          return r
            ? e == t.AI.k_ECurrencyCodeUSD && this.m_setSupportedRegions.has(r)
            : this.m_setSupportedCurrencies.has(e);
        }
        GetRecommendPrice(e, r, c, n = 1) {
          const t = this.GetKey(e, r, c, n);
          return this.m_mapKeyToGuidePrice.get(t);
        }
        GetScaledRecommendedPrice(e, r, c, n = 1) {
          let t = -1,
            a = -1;
          for (const r of this.m_mapUSDPrice.get(n).keys()) {
            const c = Math.abs(r - e);
            (-1 == t || c < a) && ((t = r), (a = c));
          }
          const s = this.m_mapUSDPrice.get(n).get(t),
            i = c
              ? s.region_prices.find((e) => e.region_code == c)
              : s.currency_prices.find((e) => e.currency_code == r),
            o = e / t;
          return {
            currency_code: i?.currency_code,
            region_code: i?.region_code,
            price: Math.ceil((i?.price || 0) * o),
          };
        }
        GetUSDPricePointsInCents() {
          return this.m_rgUSDPricePointInCents;
        }
        constructor(e) {
          let r = new Set();
          e.forEach((e) => {
            const c = e.convert_method ?? 1;
            this.m_setConversionMethod.add(c),
              this.m_mapUSDPrice.has(c) || this.m_mapUSDPrice.set(c, new Map());
            this.m_mapUSDPrice.get(c).set(e.usd_price, e),
              r.add(e.usd_price),
              e.currency_prices.forEach((r) => {
                const c = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  t.Rm.k_ERegionCodeInvalid,
                  e.convert_method || 1,
                );
                this.m_mapKeyToGuidePrice.set(c, r),
                  this.m_setSupportedCurrencies.add(r.currency_code);
              }),
              e.region_prices.forEach((r) => {
                const c = this.GetKey(
                  e.usd_price,
                  r.currency_code,
                  r.region_code,
                  e.convert_method || 1,
                );
                if (
                  (this.m_mapKeyToGuidePrice.set(c, r),
                  this.m_setSupportedRegions.add(r.region_code),
                  this.m_setConversionMethod.has(3))
                ) {
                  const c = {
                      currency_code: t.AI.k_ECurrencyCodeUSD,
                      price: e.usd_price,
                      region_code: r.region_code,
                    },
                    n = this.GetKey(
                      e.usd_price,
                      t.AI.k_ECurrencyCodeUSD,
                      r.region_code,
                      3,
                    );
                  this.m_mapKeyToGuidePrice.set(n, c);
                }
              });
          }),
            (this.m_rgUSDPricePointInCents = Array.from(r.keys()));
        }
      }
      var s = c(7860),
        i = c(24484);
      var o = c(87700),
        u = c(20194),
        C = c(81393),
        d = c(88267),
        l = c(72255),
        _ = c(29848);
      function k() {
        const e = (0, u.I)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let e = (0, i.Fd)("pricing_guideline", "application_config");
              if (e) return Promise.resolve(e);
              {
                const e = s.L.getQueryData(["PricingGuideline"]);
                return Promise.resolve(e ?? null);
              }
            })(),
        });
        return (0, n.useMemo)(() => (e.data ? new a(e.data) : null), [e.data]);
      }
      function E() {
        return ["PricingGuideline"];
      }
      function y(e) {
        const r = k(),
          c = (0, o.Bb)();
        return {
          fnApplyGuidelines: (0, n.useCallback)(
            (n, t) => {
              if (
                ((0, C.wT)(
                  r,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                r)
              ) {
                for (
                  let a = d.AI.k_ECurrencyCodeUSD;
                  a < d.AI.k_ECurrencyCodeMax;
                  ++a
                ) {
                  const s = r.GetRecommendPrice(t, a, void 0, c)?.price;
                  if (s && s > 0) {
                    const r = (0, l.M1)(a);
                    e(n, r, s);
                  }
                }
                for (
                  let a = _.R.k_ERegionCodeCIS;
                  a < _.R.k_ERegionCodeMax;
                  ++a
                ) {
                  const s = d.AI.k_ECurrencyCodeUSD,
                    i = r.GetRecommendPrice(t, s, a, c)?.price;
                  if (i && i > 0) {
                    const r = (0, l.pd)(s, a).toUpperCase();
                    e(n, r, i);
                  }
                }
              }
            },
            [c, e, r],
          ),
        };
      }
    },
    76501: (e, r, c) => {
      c.d(r, {
        AI: () => n.AI,
        JA: () => i,
        M1: () => t.M1,
        Rm: () => a.R,
        Ug: () => t.Ug,
        bS: () => s.bS,
        de: () => s.de,
        iy: () => o,
        j4: () => s.j4,
        k8: () => s.k8,
        pd: () => t.pd,
        t_: () => t.t_,
        uF: () => s.uF,
      });
      var n = c(88267),
        t = c(72255),
        a = c(29848),
        s = c(87718);
      const i = (0, n.yv)(),
        o = ((0, n.X5)(), (0, a.i)());
    },
  },
]);
