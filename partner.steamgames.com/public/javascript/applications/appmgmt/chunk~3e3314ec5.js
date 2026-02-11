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
        Yr: () => k,
        pV: () => l,
        uw: () => d,
        vs: () => E,
        ww: () => _,
        xi: () => o,
        zt: () => C,
      });
      var n = c(90626),
        a = c(6144),
        t = c(73745),
        s = c(78327);
      const o = "pn";
      class i {
        m_rgPackageIDs;
        m_rgPackageData;
        m_mapPackageData;
        m_rgVisiblePackageIDs = [];
        m_visiblePackageIDsCallbackList = new a.lu();
        static s_Singleton;
        static Get() {
          return (
            i.s_Singleton || ((i.s_Singleton = new i()), i.s_Singleton.Init()),
            i.s_Singleton
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
          r != decodeURIComponent(c.searchParams.get(o)) &&
            (r
              ? c.searchParams.set(o, encodeURIComponent(r))
              : c.searchParams.delete(o),
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
      }
      function u() {
        return i.Get().m_rgPackageIDs;
      }
      function C() {
        return i.Get().m_rgPackageIDs;
      }
      function d() {
        return i.Get().m_rgPackageData;
      }
      function _(e) {
        let r = i.Get().m_mapPackageData.get(e);
        return r ? r.package_name : e.toString();
      }
      function l() {
        return n.useCallback((e) => i.Get().UpdateVisiblePackageList(e), []);
      }
      function k() {
        const [e, r] = n.useState(i.Get().m_rgVisiblePackageIDs);
        return (0, t.hL)(i.Get().m_visiblePackageIDsCallbackList, r), e;
      }
      function E() {
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
        Gs: () => S,
        ww: () => ue,
        RO: () => F,
        XK: () => X,
        FR: () => v,
        oj: () => b,
        Dl: () => M,
        tn: () => Y,
        Oc: () => L,
        Y2: () => K,
        mv: () => U,
        oL: () => N,
        Ci: () => ce,
        v4: () => Z,
        _A: () => T,
        nT: () => w,
        fr: () => z,
        T_: () => Q,
        mP: () => $,
        T7: () => q,
        Zz: () => ae,
        NC: () => te,
        h4: () => ie,
        Bt: () => oe,
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
        a = c(41735),
        t = c.n(a),
        s = c(90626),
        o = c(14947),
        i = c(68797),
        u = c(6144),
        C = c(73745),
        d = c(41338),
        _ = c(78327),
        l = c(96745),
        k = c(65946),
        E = c(81393),
        y = c(29848),
        P = c(88267);
      function A(e, r, c, n, a) {
        if (!e) return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let t = null;
        for (let r of e.GetUSDPricePointsInCents())
          if (r >= c) {
            t = r;
            break;
          }
        const s = a && a < y.R.k_ERegionCodeMax;
        if ((n == P.AI.k_ECurrencyCodeUSD && !s) || !t)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        const o = e.GetRecommendPrice(t, n, a, r),
          i = e.GetRecommendPrice(t, P.AI.k_ECurrencyCodeUSD, a, r);
        if (
          ((0, E.wT)(
            o,
            `Missing requested currency guide for  ${t}/${n}/${a}/${r}`,
          ),
          (0, E.wT)(i, `Missing usd guide for  ${t}/${a}/${r}`),
          !o || !i)
        )
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let u = o.price;
        const C = i.price;
        if (C != c) {
          const e = c / C;
          (t *= e), (u = Math.ceil(u * e));
        }
        return { nSuggestedPriceInCents: u, nGuidelinesLevel: t };
      }
      var p = c(48174),
        I = c(87700),
        g = c(72255),
        h = c(87718);
      class m {
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
            m.s_Singleton || ((m.s_Singleton = new m()), m.s_Singleton.Init()),
            m.s_Singleton
          );
        }
        constructor() {
          (0, o.Gn)(this),
            "dev" == _.TS.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = new Set(),
            r = (0, _.Tc)("base_prices", "application_config");
          if (
            (("dev" != _.TS.WEB_UNIVERSE && "beta" != _.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                r,
              ),
            r)
          )
            if (this.BIsPricePayloadValid(r))
              for (let c in r) {
                const n = r[c],
                  a = parseInt(c),
                  t = new Map();
                this.m_mapPackagePrice.set(a, t);
                for (let r in n)
                  6 == r.length
                    ? (this.m_mapPackageCountryOverridePrice.has(a) ||
                        this.m_mapPackageCountryOverridePrice.set(a, new Map()),
                      this.m_mapPackageCountryOverridePrice
                        .get(a)
                        .set(r.toUpperCase(), n[r]))
                    : (e.add(r.toUpperCase()), t.set(r, n[r]));
              }
            else
              "dev" == _.TS.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const c = (0, _.Tc)("recurring_subs", "application_config");
          if (
            (("dev" != _.TS.WEB_UNIVERSE && "beta" != _.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                c,
              ),
            c)
          )
            if (Array.isArray(c))
              for (const e of c) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == _.TS.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const n = (0, _.Tc)("pending_proposals", "application_config");
          if (
            (("dev" != _.TS.WEB_UNIVERSE && "beta" != _.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                n,
              ),
            n)
          )
            if (this.BIsPendingPricePayloadValid(n))
              for (let e in n) {
                const r = n[e],
                  c = parseInt(e);
                this.m_mapPriceProposals.set(c, r);
              }
            else
              "dev" == _.TS.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          this.m_rgKnownPriceKeys = Array.from(e).sort((e, r) =>
            (0, d.kd)(f(e), f(r)),
          );
          const a = (0, _.Tc)("currency_data", "application_config");
          if (
            (("dev" != _.TS.WEB_UNIVERSE && "beta" != _.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                a,
              ),
            a)
          )
            if (this.BIsCurrencyPayloadValid(a))
              for (let e in a) {
                const r = a[e];
                this.m_mapCurrencyData.set(e, r);
              }
            else
              "dev" == _.TS.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const t = (0, _.Tc)("currency_descriptions", "application_config");
          if (
            (("dev" != _.TS.WEB_UNIVERSE && "beta" != _.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                t,
              ),
            t)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(t))
              for (let e in t) {
                const r = t[e];
                this.m_mapPriceKeyDescriptions.set(e, r);
              }
            else
              "dev" == _.TS.WEB_UNIVERSE &&
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
          return this.m_mapPackagePrice.get(e)?.get(r);
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
            const a = r[n],
              t = c[n];
            this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
              t == this.GetSavedPrice(e, a)
                ? this.m_mapLocalPackagePriceOverrides.get(e).delete(a)
                : this.m_mapLocalPackagePriceOverrides.get(e).set(a, t),
              this.GetPriceGridCellCallbackList(e, a).Dispatch(t);
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
                const a = this.GetSavedPrice(c, n);
                e.push({
                  packageID: c,
                  strPriceKey: n,
                  nPriceInCents: r,
                  nOldPriceInCents: a,
                });
              }),
            ),
            e.sort(R),
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
          this.m_mapLocalPackagePriceOverrides.forEach((n, a) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((r = !0),
              this.m_mapLocalPackagePriceOverrides.get(a).delete(e),
              this.GetPriceGridCellCallbackList(a, e).Dispatch(
                this.GetPrice(a, e),
              ),
              c.add(a));
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
            submitterID: _.iA.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: r,
          };
          for (const r of this.m_rgKnownPriceKeys)
            c.prices[r] = this.GetPrice(e, r);
          return c;
        }
        async SubmitProposalToServer(e, r, c) {
          const n = this.BuildNewPricingProposal(e, r),
            a = JSON.stringify(n.prices),
            s = (0, _.Tc)("publisherid", "application_config"),
            o =
              _.TS.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              s +
              "/" +
              e,
            u = new FormData();
          u.append("sessionid", _.TS.SESSIONID),
            u.append("partner_will_publish", r ? "1" : "0"),
            u.append("prices", a);
          let C = null;
          try {
            const r = await t().post(o, u, {
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
          const d = (0, i.H)(C);
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
          const a = (0, _.Tc)("publisherid", "application_config"),
            s =
              _.TS.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              a +
              "/" +
              e,
            o = new FormData();
          o.append("sessionid", _.TS.SESSIONID),
            o.append("proposal_key", n.proposalKey);
          let u = null;
          try {
            const a = await t().post(s, o, {
              withCredentials: !0,
              cancelToken: r?.token,
              timeout: c,
            });
            if (200 == a?.status && 1 == a.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const r of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(e).set(r, n.prices[r]),
                  this.GetPriceGridCellCallbackList(e, r).Dispatch(
                    this.GetSavedPrice(e, r),
                  );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                a.data
              );
            }
          } catch (e) {
            u = e;
          }
          const C = (0, i.H)(u);
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
          const n = (0, _.Tc)("publisherid", "application_config"),
            a =
              _.TS.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              n +
              "/" +
              e,
            s = new FormData();
          s.append("sessionid", _.TS.SESSIONID),
            s.append("proposal_key", c.proposalKey);
          let o = null;
          try {
            const c = await t().post(a, s, {
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
            o = e;
          }
          const u = (0, i.H)(o);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              u.strErrorMsg,
              u,
            ),
            o?.response?.data ?? { success: 2 }
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
            let { nMinPriceInCents: n, nMaxPriceInCents: a } = Y(e, r);
            if (c < n) return !0;
          }
          return !1;
        }
      }
      function R(e, r) {
        if (e.strPriceKey == r.strPriceKey) {
          const c = (0, l.ww)(e.packageID),
            n = (0, l.ww)(r.packageID);
          return (0, d.kd)(c, n);
        }
        return (0, d.kd)(f(e.strPriceKey), f(r.strPriceKey));
      }
      function S(e) {
        const r = e.split("_")[0];
        return m.Get().m_mapCurrencyData.get(r);
      }
      function D(e, r) {
        if (void 0 === r) return ["", "", ""];
        const c = S(r) ?? S("USD");
        let n = "";
        if ("number" == typeof e) {
          let r = e.toString();
          r.length < 3 && (r = (1 == r.length ? "0" : "") + "0" + r);
          const a = r.length - 2;
          for (let e = 0; e < a; e++) {
            const t = r.charAt(e);
            (n += t),
              e < a - 1 &&
                (a - e - 1) % 3 == 0 &&
                "-" != t &&
                (n += c.strThousandsSeparator);
          }
          c.bWholeUnitsOnly ||
            ((n += c.strDecimalSymbol), (n += r.substr(r.length - 2)));
        }
        return c.bSymbolIsPrefix
          ? [c.strSymbol + c.strSymbolAndNumberSeparator, n, ""]
          : ["", n, c.strSymbolAndNumberSeparator + c.strSymbol];
      }
      (0, n.Cg)([o.sH], m.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, n.Cg)([C.oI], m.prototype, "OverridePrice", null),
        (0, n.Cg)([o.XI], m.prototype, "UpdateOverridesPerPriceKey", null);
      const G = new Map([
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
      function f(e) {
        return G.has(e) ? G.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function v(e, r) {
        return m.Get().GetPrice(e, r);
      }
      function K(e) {
        return m.Get().GetPublishedCountryOverrides(e);
      }
      function N(e, r) {
        return m.Get().GetPublishedPriceCountryOverride(e, r);
      }
      function U(e, r) {
        return m.Get().GetPublishedPrice(e, r);
      }
      function L(e, r) {
        return m.Get().GetProposedPrice(e, r);
      }
      function M(e, r) {
        return m.Get().GetLocalOverridePrice(e, r);
      }
      function b(e) {
        const r = m.Get().m_strDisplayPriceKey;
        return D(m.Get().GetPrice(e, r), r).join("");
      }
      function B(e) {
        const [r, c] = s.useState(m.Get().m_strDisplayPriceKey);
        return (
          (0, C.hL)(m.Get().m_displayPriceKeyCallbackList, c),
          (function (e, r) {
            const [c, n] = s.useState(m.Get().GetPrice(e, r));
            return (
              (0, C.hL)(m.Get().GetPriceGridCellCallbackList(e, r), n),
              s.useEffect(() => n(m.Get().GetPrice(e, r)), [e, r]),
              D(c, r).join("")
            );
          })(e, r)
        );
      }
      function T() {
        const e = (0, l.Yr)(),
          r = (0, p.cT)(),
          c = (0, I.Bb)();
        return s.useCallback(
          () =>
            (function (e, r, c) {
              let n = 0;
              for (const a of e) {
                const e = new Array(),
                  t = new Array(),
                  s = m.Get().GetPrice(a, "USD");
                if (s && !(s <= 0)) {
                  for (const n of m.Get().m_rgKnownPriceKeys) {
                    if ("USD" == n) continue;
                    const s = m.Get().GetPrice(a, "USD"),
                      { nSuggestedPriceInCents: o, nGuidelinesLevel: i } = A(
                        r,
                        c,
                        s,
                        (0, g.ei)(n),
                        (0, h.vS)(n),
                      );
                    null !== i &&
                      m.Get().GetPrice(a, n) != o &&
                      (e.push(n), t.push(o));
                  }
                  e.length > 0 &&
                    (m.Get().OverridePricesForPackage(a, e, t), (n += 1));
                }
              }
              n > 0 && m.Get().DispatchPriceOverridesCallbacks();
            })(e, r, c),
          [e, r, c],
        );
      }
      function O(e, r) {
        const c = (0, C.CH)();
        (0, C.hL)(m.Get().GetPriceGridCellCallbackList(e, r), c);
        const n = m.Get().GetPrice(e, r),
          a = (0, p.cT)(),
          t = (0, I.Bb)();
        (0, C.hL)(m.Get().GetPriceGridCellCallbackList(e, "USD"), c);
        const o = m.Get().GetPrice(e, "USD"),
          { nSuggestedPriceInCents: i, nGuidelinesLevel: u } = A(
            a,
            t,
            o,
            (0, g.ei)(r),
            (0, h.vS)(r),
          ),
          d = s.useCallback((c) => m.Get().OverridePrice(e, r, c), [e, r]),
          _ = m.Get().GetPublishedPrice(e, r),
          l = m.Get().GetProposedPrice(e, r),
          { nMinPriceInCents: k, nMaxPriceInCents: E } = Y(e, r),
          y = m.Get().GetMinimumDiscountPrice(r),
          P = n ? Math.floor((100 * (n - y)) / n) : 90,
          R = P < Math.min(90, Math.floor((100 * (u - 50)) / u)) ? P : null;
        return s.useMemo(
          () => ({
            nPriceInCents: n,
            nProposedPriceInCents: l,
            nPublishedPriceInCents: _,
            nMinPriceInCents: k,
            nMaxPriceInCents: E,
            nMaxDiscountPercentage: R,
            nSuggestedPriceInCents: i,
            fnSetPrice: d,
          }),
          [n, l, _, k, E, R, i, d],
        );
      }
      function w(e) {
        let [r, c] = s.useState(() => m.Get().BAnyPackagePriceBelowMin(e)),
          n = s.useCallback(() => {
            let r = m.Get().BAnyPackagePriceBelowMin(e);
            c(r);
          }, [e, c]);
        return (0, C.hL)(m.Get().GetPackageOverridesCallbackList(e), n), r;
      }
      function H(e) {
        return m.Get().BAnyPackagePriceBelowMin(e);
      }
      function Y(e, r) {
        let c = m.Get();
        return {
          nMinPriceInCents: c.GetMinimumBasePrice(r),
          nMaxPriceInCents: c.m_setRecurringSubscriptions.has(e)
            ? c.GetPublishedPrice(e, r)
            : null,
        };
      }
      function V() {
        return s.useCallback((e, r, c) => {
          const n = m.Get().GetPrice(e, r);
          return (
            m.Get().OverridePrice(e, r, c),
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
        return m.Get().m_mapPriceProposals.get(e);
      }
      function Z() {
        return Array.from(m.Get().m_mapPriceProposals.values());
      }
      function F(e) {
        return m.Get().m_mapPriceProposals.get(e);
      }
      function x(e) {
        let r = !1;
        for (const c of m.Get().m_rgKnownPriceKeys) {
          let n = m.Get().GetPublishedPrice(e, c);
          r = r || (0 != n && void 0 !== n);
        }
        return r;
      }
      function J(e) {
        const r = W(e),
          c = [];
        for (const n of m.Get().m_rgKnownPriceKeys) {
          const a = r.prices[n],
            t = m.Get().GetPublishedPrice(e, n);
          a != t &&
            c.push({
              packageID: e,
              strPriceKey: n,
              nPriceInCents: a,
              nOldPriceInCents: t,
            });
        }
        return c;
      }
      function j() {
        return m.Get().m_rgKnownPriceKeys;
      }
      function X(e) {
        let r = m.Get().m_mapPriceKeyDescriptions.get(e);
        return r ? r.strDescription : "";
      }
      function $(e) {
        return s.useCallback(() => {
          m.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function Q(e) {
        return s.useCallback(() => {
          m.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function z(e) {
        return s.useCallback(() => {
          m.Get().CancelProposal(e);
        }, [e]);
      }
      function q() {
        const [e, r] = s.useState(m.Get().m_strDisplayPriceKey),
          c = m.Get().m_rgKnownPriceKeys,
          n = s.useCallback((e) => {
            r(e),
              (m.Get().m_strDisplayPriceKey = e),
              m.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: c, fnSetPriceKey: n };
      }
      function ee(e) {
        const r = (0, C.CH)();
        return (
          (0, C.hL)(m.Get().m_allPriceOverridesCallbackList, r),
          m.Get().BHasLocalPriceOverrides(e)
        );
      }
      function re(e) {
        return m.Get().BHasLocalPriceOverrides(e);
      }
      function ce() {
        const [e, r] = s.useState(() => m.Get().GetAllLocalPriceOverrides());
        return (0, C.hL)(m.Get().m_allPriceOverridesCallbackList, r), e;
      }
      function ne(e) {
        return (0, k.q3)(() => m.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function ae() {
        return s.useCallback(
          () => m.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function te() {
        return s.useCallback(() => m.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function se() {
        return m.Get().OverridePrice;
      }
      function oe() {
        return s.useCallback(
          (e, r, c) => m.Get().SubmitProposalToServer(e, r, c),
          [],
        );
      }
      function ie() {
        return s.useCallback(
          (e, r) => m.Get().PublishApprovedProposal(e, r, 6e4),
          [],
        );
      }
      function ue(e) {
        let r = [];
        const c = m.Get().m_rgKnownPriceKeys;
        for (let n of e) {
          if (x(n)) continue;
          let e = !1;
          for (const r of c) {
            if (!m.Get().BPriceKeyRequired(r)) continue;
            if (!m.Get().GetPrice(n, r)) {
              e = !0;
              break;
            }
          }
          e && r.push(n);
        }
        return r;
      }
    },
    72255: (e, r, c) => {
      c.d(r, {
        M1: () => o,
        Ug: () => i,
        ei: () => d,
        mG: () => C,
        pd: () => u,
        rt: () => s,
        t_: () => _,
      });
      var n = c(81393),
        a = c(88267),
        t = c(29848);
      function s(e) {
        switch (e?.toUpperCase()) {
          case "AE":
            return a.AI.k_ECurrencyCodeAED;
          case "AU":
            return a.AI.k_ECurrencyCodeAUD;
          case "BR":
            return a.AI.k_ECurrencyCodeBRL;
          case "CA":
            return a.AI.k_ECurrencyCodeCAD;
          case "CH":
          case "LI":
            return a.AI.k_ECurrencyCodeCHF;
          case "CL":
            return a.AI.k_ECurrencyCodeCLP;
          case "CN":
          case "XC":
            return a.AI.k_ECurrencyCodeCNY;
          case "CO":
            return a.AI.k_ECurrencyCodeCOP;
          case "CR":
            return a.AI.k_ECurrencyCodeCRC;
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
            return a.AI.k_ECurrencyCodeEUR;
          case "GB":
          case "GG":
          case "GS":
          case "IM":
          case "JE":
            return a.AI.k_ECurrencyCodeGBP;
          case "HK":
            return a.AI.k_ECurrencyCodeHKD;
          case "ID":
            return a.AI.k_ECurrencyCodeIDR;
          case "IL":
            return a.AI.k_ECurrencyCodeILS;
          case "IN":
            return a.AI.k_ECurrencyCodeINR;
          case "JP":
            return a.AI.k_ECurrencyCodeJPY;
          case "KR":
            return a.AI.k_ECurrencyCodeKRW;
          case "KW":
            return a.AI.k_ECurrencyCodeKWD;
          case "KZ":
            return a.AI.k_ECurrencyCodeKZT;
          case "MX":
            return a.AI.k_ECurrencyCodeMXN;
          case "MY":
            return a.AI.k_ECurrencyCodeMYR;
          case "NO":
            return a.AI.k_ECurrencyCodeNOK;
          case "NZ":
            return a.AI.k_ECurrencyCodeNZD;
          case "PE":
            return a.AI.k_ECurrencyCodePEN;
          case "PH":
            return a.AI.k_ECurrencyCodePHP;
          case "PL":
            return a.AI.k_ECurrencyCodePLN;
          case "QA":
            return a.AI.k_ECurrencyCodeQAR;
          case "RU":
            return a.AI.k_ECurrencyCodeRUB;
          case "SA":
            return a.AI.k_ECurrencyCodeSAR;
          case "SG":
            return a.AI.k_ECurrencyCodeSGD;
          case "TH":
            return a.AI.k_ECurrencyCodeTHB;
          case "TW":
            return a.AI.k_ECurrencyCodeTWD;
          case "UA":
            return a.AI.k_ECurrencyCodeUAH;
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
            return a.AI.k_ECurrencyCodeUSD;
          case "UY":
            return a.AI.k_ECurrencyCodeUYU;
          case "VN":
            return a.AI.k_ECurrencyCodeVND;
          case "ZA":
            return a.AI.k_ECurrencyCodeZAR;
          default:
            return (
              console.assert(!1, `Unhandled country code: ${e}`),
              a.AI.k_ECurrencyCodeUSD
            );
        }
      }
      function o(e) {
        switch (e) {
          case a.AI.k_ECurrencyCodeGBP:
            return "GBP";
          case a.AI.k_ECurrencyCodeEUR:
            return "EUR";
          case a.AI.k_ECurrencyCodeCHF:
            return "CHF";
          case a.AI.k_ECurrencyCodeRUB:
            return "RUB";
          case a.AI.k_ECurrencyCodePLN:
            return "PLN";
          case a.AI.k_ECurrencyCodeBRL:
            return "BRL";
          case a.AI.k_ECurrencyCodeJPY:
            return "JPY";
          case a.AI.k_ECurrencyCodeNOK:
            return "NOK";
          case a.AI.k_ECurrencyCodeIDR:
            return "IDR";
          case a.AI.k_ECurrencyCodeMYR:
            return "MYR";
          case a.AI.k_ECurrencyCodePHP:
            return "PHP";
          case a.AI.k_ECurrencyCodeSGD:
            return "SGD";
          case a.AI.k_ECurrencyCodeTHB:
            return "THB";
          case a.AI.k_ECurrencyCodeVND:
            return "VND";
          case a.AI.k_ECurrencyCodeKRW:
            return "KRW";
          case a.AI.k_ECurrencyCodeTRY:
            return "TRY";
          case a.AI.k_ECurrencyCodeUAH:
            return "UAH";
          case a.AI.k_ECurrencyCodeMXN:
            return "MXN";
          case a.AI.k_ECurrencyCodeCAD:
            return "CAD";
          case a.AI.k_ECurrencyCodeAUD:
            return "AUD";
          case a.AI.k_ECurrencyCodeNZD:
            return "NZD";
          case a.AI.k_ECurrencyCodeCNY:
            return "CNY";
          case a.AI.k_ECurrencyCodeINR:
            return "INR";
          case a.AI.k_ECurrencyCodeCLP:
            return "CLP";
          case a.AI.k_ECurrencyCodePEN:
            return "PEN";
          case a.AI.k_ECurrencyCodeCOP:
            return "COP";
          case a.AI.k_ECurrencyCodeZAR:
            return "ZAR";
          case a.AI.k_ECurrencyCodeHKD:
            return "HKD";
          case a.AI.k_ECurrencyCodeTWD:
            return "TWD";
          case a.AI.k_ECurrencyCodeSAR:
            return "SAR";
          case a.AI.k_ECurrencyCodeAED:
            return "AED";
          case a.AI.k_ECurrencyCodeSEK:
            return "SEK";
          case a.AI.k_ECurrencyCodeARS:
            return "ARS";
          case a.AI.k_ECurrencyCodeILS:
            return "ILS";
          case a.AI.k_ECurrencyCodeBYN:
            return "BYN";
          case a.AI.k_ECurrencyCodeKZT:
            return "KZT";
          case a.AI.k_ECurrencyCodeKWD:
            return "KWD";
          case a.AI.k_ECurrencyCodeQAR:
            return "QAR";
          case a.AI.k_ECurrencyCodeCRC:
            return "CRC";
          case a.AI.k_ECurrencyCodeUYU:
            return "UYU";
          case a.AI.k_ECurrencyCodeBGN:
            return "BGN";
          case a.AI.k_ECurrencyCodeHRK:
            return "HRK";
          case a.AI.k_ECurrencyCodeCZK:
            return "CZK";
          case a.AI.k_ECurrencyCodeDKK:
            return "DKK";
          case a.AI.k_ECurrencyCodeHUF:
            return "HUF";
          case a.AI.k_ECurrencyCodeRON:
            return "RON";
          default:
            return "USD";
        }
      }
      function i(e) {
        switch (e) {
          case a.AI.k_ECurrencyCodeUSD:
            return "US Dollar";
          case a.AI.k_ECurrencyCodeGBP:
            return "GB Pounds";
          case a.AI.k_ECurrencyCodeEUR:
            return "Euros";
          case a.AI.k_ECurrencyCodeCHF:
            return "Swiss Francs";
          case a.AI.k_ECurrencyCodeRUB:
            return "Russian Rubles";
          case a.AI.k_ECurrencyCodePLN:
            return "Polish zloty";
          case a.AI.k_ECurrencyCodeBRL:
            return "Brazilian Reals";
          case a.AI.k_ECurrencyCodeJPY:
            return "Japanese Yen";
          case a.AI.k_ECurrencyCodeNOK:
            return "Norwegian Krone";
          case a.AI.k_ECurrencyCodeIDR:
            return "Indonesian Rupiah";
          case a.AI.k_ECurrencyCodeMYR:
            return "Malaysian Ringgit";
          case a.AI.k_ECurrencyCodePHP:
            return "Philippine Peso";
          case a.AI.k_ECurrencyCodeSGD:
            return "Singapore Dollar";
          case a.AI.k_ECurrencyCodeTHB:
            return "Thai Baht";
          case a.AI.k_ECurrencyCodeVND:
            return "Vietnamese Dong";
          case a.AI.k_ECurrencyCodeKRW:
            return "Korean Won";
          case a.AI.k_ECurrencyCodeTRY:
            return "Turkish Lira";
          case a.AI.k_ECurrencyCodeUAH:
            return "Ukrainian Hryvnia";
          case a.AI.k_ECurrencyCodeMXN:
            return "Mexican Peso";
          case a.AI.k_ECurrencyCodeCAD:
            return "Canadian Dollar";
          case a.AI.k_ECurrencyCodeAUD:
            return "Australian Dollar";
          case a.AI.k_ECurrencyCodeNZD:
            return "New Zealand Dollar";
          case a.AI.k_ECurrencyCodeCNY:
            return "Chinese Yuan";
          case a.AI.k_ECurrencyCodeINR:
            return "Indian Rupee";
          case a.AI.k_ECurrencyCodeCLP:
            return "Chilean Peso";
          case a.AI.k_ECurrencyCodePEN:
            return "Peruvian Sol";
          case a.AI.k_ECurrencyCodeCOP:
            return "Colombian Peso";
          case a.AI.k_ECurrencyCodeZAR:
            return "South African Rand";
          case a.AI.k_ECurrencyCodeHKD:
            return "Hong Kong Dollar";
          case a.AI.k_ECurrencyCodeTWD:
            return "Taiwanese Dollar";
          case a.AI.k_ECurrencyCodeSAR:
            return "Saudi Arabian Riyal";
          case a.AI.k_ECurrencyCodeAED:
            return "Emirati Dirham";
          case a.AI.k_ECurrencyCodeSEK:
            return "Swedish Krona";
          case a.AI.k_ECurrencyCodeARS:
            return "Argentine Peso";
          case a.AI.k_ECurrencyCodeILS:
            return "Israeli New Shequel";
          case a.AI.k_ECurrencyCodeBYN:
            return "Belarusian Ruble";
          case a.AI.k_ECurrencyCodeKZT:
            return "Kazakhstani Tenge";
          case a.AI.k_ECurrencyCodeKWD:
            return "Kuwaiti Dinar";
          case a.AI.k_ECurrencyCodeQAR:
            return "Qatari Rial";
          case a.AI.k_ECurrencyCodeCRC:
            return "Costa Rican Colon";
          case a.AI.k_ECurrencyCodeUYU:
            return "Uruguayan Peso";
          case a.AI.k_ECurrencyCodeBGN:
            return "Bulgarian lev";
          case a.AI.k_ECurrencyCodeHRK:
            return "Croatian kuna";
          case a.AI.k_ECurrencyCodeCZK:
            return "Czech koruna";
          case a.AI.k_ECurrencyCodeDKK:
            return "Danish krone";
          case a.AI.k_ECurrencyCodeHUF:
            return "Hungarian forint";
          case a.AI.k_ECurrencyCodeRON:
            return "Romanian leu";
          default:
            return "";
        }
      }
      function u(e, r = t.R.k_ERegionCodeInvalid) {
        switch (e) {
          case a.AI.k_ECurrencyCodeGBP:
            return "gbp";
          case a.AI.k_ECurrencyCodeEUR:
            return "eur";
          case a.AI.k_ECurrencyCodeCHF:
            return "chf";
          case a.AI.k_ECurrencyCodeRUB:
            return "rub";
          case a.AI.k_ECurrencyCodePLN:
            return "pln";
          case a.AI.k_ECurrencyCodeBRL:
            return "brl";
          case a.AI.k_ECurrencyCodeJPY:
            return "jpy";
          case a.AI.k_ECurrencyCodeNOK:
            return "nok";
          case a.AI.k_ECurrencyCodeIDR:
            return "idr";
          case a.AI.k_ECurrencyCodeMYR:
            return "myr";
          case a.AI.k_ECurrencyCodePHP:
            return "php";
          case a.AI.k_ECurrencyCodeSGD:
            return "sgd";
          case a.AI.k_ECurrencyCodeTHB:
            return "thb";
          case a.AI.k_ECurrencyCodeVND:
            return "vnd";
          case a.AI.k_ECurrencyCodeKRW:
            return "krw";
          case a.AI.k_ECurrencyCodeTRY:
            return "try";
          case a.AI.k_ECurrencyCodeUAH:
            return "uah";
          case a.AI.k_ECurrencyCodeMXN:
            return "mxn";
          case a.AI.k_ECurrencyCodeCAD:
            return "cad";
          case a.AI.k_ECurrencyCodeAUD:
            return "aud";
          case a.AI.k_ECurrencyCodeNZD:
            return "nzd";
          case a.AI.k_ECurrencyCodeCNY:
            return "cny";
          case a.AI.k_ECurrencyCodeINR:
            return "inr";
          case a.AI.k_ECurrencyCodeCLP:
            return "clp";
          case a.AI.k_ECurrencyCodePEN:
            return "pen";
          case a.AI.k_ECurrencyCodeCOP:
            return "cop";
          case a.AI.k_ECurrencyCodeZAR:
            return "zar";
          case a.AI.k_ECurrencyCodeHKD:
            return "hkd";
          case a.AI.k_ECurrencyCodeTWD:
            return "twd";
          case a.AI.k_ECurrencyCodeSAR:
            return "sar";
          case a.AI.k_ECurrencyCodeAED:
            return "aed";
          case a.AI.k_ECurrencyCodeSEK:
            return "sek";
          case a.AI.k_ECurrencyCodeARS:
            return "ars";
          case a.AI.k_ECurrencyCodeILS:
            return "ils";
          case a.AI.k_ECurrencyCodeBYN:
            return "byn";
          case a.AI.k_ECurrencyCodeKZT:
            return "kzt";
          case a.AI.k_ECurrencyCodeKWD:
            return "kwd";
          case a.AI.k_ECurrencyCodeQAR:
            return "qar";
          case a.AI.k_ECurrencyCodeCRC:
            return "crc";
          case a.AI.k_ECurrencyCodeUYU:
            return "uyu";
          case a.AI.k_ECurrencyCodeBGN:
            return "bgn";
          case a.AI.k_ECurrencyCodeHRK:
            return "hrk";
          case a.AI.k_ECurrencyCodeCZK:
            return "czk";
          case a.AI.k_ECurrencyCodeDKK:
            return "dkk";
          case a.AI.k_ECurrencyCodeHUF:
            return "huf";
          case a.AI.k_ECurrencyCodeRON:
            return "ron";
          default:
            return r == t.R.k_ERegionCodeCIS
              ? "usd_cis"
              : r == t.R.k_ERegionCodeSAsia
                ? "usd_sasia"
                : r == t.R.k_ERegionCodeLATAM
                  ? "usd_latam"
                  : r == t.R.k_ERegionCodeMENA
                    ? "usd_mena"
                    : "usd";
        }
      }
      function C(e) {
        switch (e) {
          case t.R.k_ERegionCodeCIS:
            return "CIS";
          case t.R.k_ERegionCodeSAsia:
            return "SASIA";
          case t.R.k_ERegionCodeLATAM:
            return "LATAM";
          case t.R.k_ERegionCodeMENA:
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
            return a.AI.k_ECurrencyCodeUSD;
          case "GBP":
            return a.AI.k_ECurrencyCodeGBP;
          case "EUR":
            return a.AI.k_ECurrencyCodeEUR;
          case "CHF":
            return a.AI.k_ECurrencyCodeCHF;
          case "RUB":
            return a.AI.k_ECurrencyCodeRUB;
          case "PLN":
            return a.AI.k_ECurrencyCodePLN;
          case "BRL":
            return a.AI.k_ECurrencyCodeBRL;
          case "JPY":
            return a.AI.k_ECurrencyCodeJPY;
          case "NOK":
            return a.AI.k_ECurrencyCodeNOK;
          case "IDR":
            return a.AI.k_ECurrencyCodeIDR;
          case "MYR":
            return a.AI.k_ECurrencyCodeMYR;
          case "PHP":
            return a.AI.k_ECurrencyCodePHP;
          case "SGD":
            return a.AI.k_ECurrencyCodeSGD;
          case "THB":
            return a.AI.k_ECurrencyCodeTHB;
          case "VND":
            return a.AI.k_ECurrencyCodeVND;
          case "KRW":
            return a.AI.k_ECurrencyCodeKRW;
          case "TRY":
            return a.AI.k_ECurrencyCodeTRY;
          case "UAH":
            return a.AI.k_ECurrencyCodeUAH;
          case "MXN":
            return a.AI.k_ECurrencyCodeMXN;
          case "CAD":
            return a.AI.k_ECurrencyCodeCAD;
          case "AUD":
            return a.AI.k_ECurrencyCodeAUD;
          case "NZD":
            return a.AI.k_ECurrencyCodeNZD;
          case "CNY":
            return a.AI.k_ECurrencyCodeCNY;
          case "INR":
            return a.AI.k_ECurrencyCodeINR;
          case "CLP":
            return a.AI.k_ECurrencyCodeCLP;
          case "PEN":
            return a.AI.k_ECurrencyCodePEN;
          case "COP":
            return a.AI.k_ECurrencyCodeCOP;
          case "ZAR":
            return a.AI.k_ECurrencyCodeZAR;
          case "HKD":
            return a.AI.k_ECurrencyCodeHKD;
          case "TWD":
            return a.AI.k_ECurrencyCodeTWD;
          case "SAR":
            return a.AI.k_ECurrencyCodeSAR;
          case "AED":
            return a.AI.k_ECurrencyCodeAED;
          case "SEK":
            return a.AI.k_ECurrencyCodeSEK;
          case "ARS":
            return a.AI.k_ECurrencyCodeARS;
          case "ILS":
            return a.AI.k_ECurrencyCodeILS;
          case "BYN":
            return a.AI.k_ECurrencyCodeBYN;
          case "KZT":
            return a.AI.k_ECurrencyCodeKZT;
          case "KWD":
            return a.AI.k_ECurrencyCodeKWD;
          case "QAR":
            return a.AI.k_ECurrencyCodeQAR;
          case "CRC":
            return a.AI.k_ECurrencyCodeCRC;
          case "UYU":
            return a.AI.k_ECurrencyCodeUYU;
          case "BGN":
            return a.AI.k_ECurrencyCodeBGN;
          case "HRK":
            return a.AI.k_ECurrencyCodeHRK;
          case "CZK":
            return a.AI.k_ECurrencyCodeCZK;
          case "DKK":
            return a.AI.k_ECurrencyCodeDKK;
          case "HUF":
            return a.AI.k_ECurrencyCodeHUF;
          case "RON":
            return a.AI.k_ECurrencyCodeRON;
          default:
            return (
              (0, n.wT)(
                !1,
                `ASCIICurrencyCodeToECurrencyCode unexpected code ${e}`,
              ),
              a.AI.k_ECurrencyCodeInvalid
            );
        }
      }
      function _(e) {
        return `${i(d(e.toUpperCase()))} (${e})`;
      }
    },
    88267: (e, r, c) => {
      var n;
      c.d(r, { AI: () => n, X5: () => s, yv: () => t }),
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
      const a = [n.k_ECurrencyCodeTRY, n.k_ECurrencyCodeARS];
      function t() {
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
          ...t(),
          ...a,
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
      function a() {
        return [
          n.k_ERegionCodeCIS,
          n.k_ERegionCodeSAsia,
          n.k_ERegionCodeLATAM,
          n.k_ERegionCodeMENA,
        ];
      }
      c.d(r, { R: () => n, i: () => a }),
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
        bS: () => t,
        de: () => o,
        j4: () => u,
        k8: () => s,
        uF: () => i,
        vS: () => C,
      });
      var n = c(88267),
        a = c(29848);
      function t(e) {
        return n.AI.k_ECurrencyCodeUSD;
      }
      function s(e) {
        switch (e) {
          case a.R.k_ERegionCodeCIS:
            return "usd_cis";
          case a.R.k_ERegionCodeSAsia:
            return "usd_sasia";
          case a.R.k_ERegionCodeLATAM:
            return "usd_latam";
          case a.R.k_ERegionCodeMENA:
            return "usd_mena";
          default:
            return "usd_invalid";
        }
      }
      function o(e) {
        switch (e) {
          case a.R.k_ERegionCodeCIS:
            return "CIS";
          case a.R.k_ERegionCodeSAsia:
            return "SASIA";
          case a.R.k_ERegionCodeLATAM:
            return "LATAM";
          case a.R.k_ERegionCodeMENA:
            return "MENA";
          default:
            return "Invalid Region";
        }
      }
      function i(e) {
        switch (e) {
          case "CIS":
            return a.R.k_ERegionCodeCIS;
          case "SASIA":
            return a.R.k_ERegionCodeSAsia;
          case "LATAM":
            return a.R.k_ERegionCodeLATAM;
          case "MENA":
            return a.R.k_ERegionCodeMENA;
          default:
            return a.R.k_ERegionCodeInvalid;
        }
      }
      function u(e) {
        switch (e) {
          case a.R.k_ERegionCodeCIS:
            return "The Commonwealth of Independent Stats";
          case a.R.k_ERegionCodeSAsia:
            return "South Asia";
          case a.R.k_ERegionCodeLATAM:
            return "Latin America";
          case a.R.k_ERegionCodeMENA:
            return "Middle East and North Africa";
          default:
            return "Invalid Region";
        }
      }
      function C(e) {
        switch (e?.toLowerCase()) {
          case "usd_cis":
            return a.R.k_ERegionCodeCIS;
          case "usd_sasia":
            return a.R.k_ERegionCodeSAsia;
          case "usd_latam":
            return a.R.k_ERegionCodeLATAM;
          case "usd_mena":
            return a.R.k_ERegionCodeMENA;
          default:
            return a.R.k_ERegionCodeInvalid;
        }
      }
    },
    87700: (e, r, c) => {
      c.d(r, { Bb: () => o, jY: () => s });
      var n = c(90626),
        a = c(48174);
      const t = n.createContext({
        eConversionMethod: 1,
        setConversionMethod: (e) => {},
        rgAvailableConversionMethods: [],
      });
      function s(e) {
        const { eInitialConversionMethod: r } = e,
          c = (0, a.cT)(),
          [s, o] = n.useState(r || 1),
          i = n.useMemo(() => {
            const e = c ? c.GetAvailableConversionMethods() : [];
            return {
              eConversionMethod: s,
              setConversionMethod: o,
              rgAvailableConversionMethods: e,
            };
          }, [s, o, c]);
        return n.createElement(t.Provider, { value: i }, e.children);
      }
      function o() {
        return n.useContext(t).eConversionMethod;
      }
    },
    48174: (e, r, c) => {
      c.d(r, { mj: () => E, gC: () => y, cT: () => k });
      var n = c(90626),
        a = c(76501);
      class t {
        m_mapUSDPrice = new Map();
        m_mapKeyToGuidePrice = new Map();
        m_rgUSDPricePointInCents = [];
        m_setConversionMethod = new Set();
        m_setSupportedCurrencies = new Set();
        m_setSupportedRegions = new Set();
        GetKey(e, r, c, n = 1) {
          return `${e}_${r}_${c || a.Rm.k_ERegionCodeInvalid}_${n}`;
        }
        GetAvailableConversionMethods() {
          return Array.from(this.m_setConversionMethod).sort();
        }
        GetAnyPricePoint() {
          return Array.from(this.m_mapUSDPrice.get(1)?.values() || [])[0];
        }
        BIsSupportCurrencyAndOrRegion(e, r) {
          return r
            ? e == a.AI.k_ECurrencyCodeUSD && this.m_setSupportedRegions.has(r)
            : this.m_setSupportedCurrencies.has(e);
        }
        GetRecommendPrice(e, r, c, n = 1) {
          const a = this.GetKey(e, r, c, n);
          return this.m_mapKeyToGuidePrice.get(a);
        }
        GetScaledRecommendedPrice(e, r, c, n = 1) {
          let a = -1,
            t = -1;
          for (const r of this.m_mapUSDPrice.get(n).keys()) {
            const c = Math.abs(r - e);
            (-1 == a || c < t) && ((a = r), (t = c));
          }
          const s = this.m_mapUSDPrice.get(n).get(a),
            o = c
              ? s.region_prices.find((e) => e.region_code == c)
              : s.currency_prices.find((e) => e.currency_code == r),
            i = e / a;
          return {
            currency_code: o?.currency_code,
            region_code: o?.region_code,
            price: Math.ceil((o?.price || 0) * i),
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
                  a.Rm.k_ERegionCodeInvalid,
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
                      currency_code: a.AI.k_ECurrencyCodeUSD,
                      price: e.usd_price,
                      region_code: r.region_code,
                    },
                    n = this.GetKey(
                      e.usd_price,
                      a.AI.k_ECurrencyCodeUSD,
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
        o = c(24484);
      var i = c(87700),
        u = c(20194),
        C = c(81393),
        d = c(88267),
        _ = c(72255),
        l = c(29848);
      function k() {
        const e = (0, u.I)({
          queryKey: ["PricingGuideline"],
          queryFn: async () =>
            await (function () {
              let e = (0, o.Fd)("pricing_guideline", "application_config");
              if (e) return Promise.resolve(e);
              {
                const e = s.L.getQueryData(["PricingGuideline"]);
                return Promise.resolve(e ?? null);
              }
            })(),
        });
        return (0, n.useMemo)(() => (e.data ? new t(e.data) : null), [e.data]);
      }
      function E() {
        return ["PricingGuideline"];
      }
      function y(e) {
        const r = k(),
          c = (0, i.Bb)();
        return {
          fnApplyGuidelines: (0, n.useCallback)(
            (n, a) => {
              if (
                ((0, C.wT)(
                  r,
                  "Pricing Guideline Not Initialized by time conversion being triggered",
                ),
                r)
              ) {
                for (
                  let t = d.AI.k_ECurrencyCodeUSD;
                  t < d.AI.k_ECurrencyCodeMax;
                  ++t
                ) {
                  const s = r.GetRecommendPrice(a, t, void 0, c)?.price;
                  if (s && s > 0) {
                    const r = (0, _.M1)(t);
                    e(n, r, s);
                  }
                }
                for (
                  let t = l.R.k_ERegionCodeCIS;
                  t < l.R.k_ERegionCodeMax;
                  ++t
                ) {
                  const s = d.AI.k_ECurrencyCodeUSD,
                    o = r.GetRecommendPrice(a, s, t, c)?.price;
                  if (o && o > 0) {
                    const r = (0, _.pd)(s, t).toUpperCase();
                    e(n, r, o);
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
        JA: () => o,
        M1: () => a.M1,
        Rm: () => t.R,
        Ug: () => a.Ug,
        bS: () => s.bS,
        de: () => s.de,
        iy: () => i,
        j4: () => s.j4,
        k8: () => s.k8,
        pd: () => a.pd,
        t_: () => a.t_,
        uF: () => s.uF,
      });
      var n = c(88267),
        a = c(72255),
        t = c(29848),
        s = c(87718);
      const o = (0, n.yv)(),
        i = ((0, n.X5)(), (0, t.i)());
    },
  },
]);
