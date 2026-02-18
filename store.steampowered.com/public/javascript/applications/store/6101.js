/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6101],
  {
    56524: (e) => {
      e.exports = {
        DevSummaryCtn: "_1k0S-tUF_ENycLJ7PWqbzS",
        LargeFormat: "_1090TwnnSh07Rya_5ss37E",
        CreatorDescCtn: "_3nKoQbWM1xYxsCfDoImGQ-",
        SmallFormat: "_18tLexJfL4tGNabZ9Ywvlm",
        MinimalDisplay: "ROZPQ29NfT-_S-vY5rMJp",
        DevSummaryWidgetCtn: "A2B2VZqisd8LEU7zknWqk",
        DevSummaryContent: "_23xa4AVp7kYtbslOOB8xly",
        DevSummaryBackground: "_1TsqAyLSPMv7JrgVI6Jpnv",
        AvatarLink: "_1N0rYLgFmHTfQng24QRoEh",
        Avatar: "_3JepbxeEa0I4l8TnG9DeT5",
        CreatorTitleCtn: "_2T8Ub04W0G2L6_3692y23L",
        CreatorNameName: "_8196lUGpYeVntSAwJq-64",
        CreatorTagline: "NX5WeT2qHbZGaVykMxMA2",
        Title: "_37vyVYzsOKNDlPWnQ5zcMF",
        Followers: "_2ZpFi_vScMetinFMtGp2WE",
        FollowerCount: "_3cARehxbzcQp_dC3sKo3QH",
        SocialFollowersCtn: "BT3Bjo-dSXZV11Cqy_Awo",
        FollowBtnCtn: "_2artmqqQS2Rl8YMsi1nV-U",
        FollowButton: "_1HwWXjF06mJ9sG_9KXlgA-",
        FollowBtnText: "_1a5djsChaeoZViyFSGNom5",
        SocialContainer: "_1o1Ds-OdAZcjo18bw9QiEH",
        SocialImg: "_2v_K1-p6KHigjcjV3HlHsV",
        SocialLink: "_3eCVbMRawBIqtu1HpE7qJR",
        CuratorHoverCtn: "_30j_Rriv37jV9sEvTdi8Kw",
        MembersListLink: "_3DO0NUX-db2kVZWScbJetR",
      };
    },
    37999: (e) => {
      e.exports = {
        Loading: "_24C5lxFpKz_kHyuT-8GJKK",
        LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
        Small: "_2FPxEVbkMdVDAw1TLfl_B5",
        Medium: "_2FfWbZHeiT3_nRXH-pI7av",
        Large: "_30IMocjbXd0leP4E5U2Yrx",
      };
    },
    57876: (e, t, n) => {
      "use strict";
      n.d(t, {
        Jw: () => d,
        Xh: () => l,
        cU: () => c,
        tf: () => m,
        wl: () => u,
      });
      var r = n(22837),
        a = n(30894),
        o = n(16021),
        i = n(62792),
        s = n(78327);
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
      function d() {
        return { width: 231, height: 87 };
      }
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
      function m(e, t, n, r, a, s) {
        const l = new Array(),
          d = new Array(),
          c = new Array(),
          m = new Array();
        if (!e || 0 == e.length) return l;
        const h = [
          i.by.k_RejectSupportedLanguage,
          i.by.k_RejectAlreadyDisplayed,
          i.by.k_RejectNoTrailer,
        ];
        for (let s of e) {
          let e = s.id,
            u = i.by.k_NotRejected;
          switch (s.item_type) {
            case "sub":
              const a = o.A.Get().GetPackage(e);
              if (1 !== a?.GetIncludedAppIDs()?.length) {
                u = y(e, t, r, !0);
                break;
              }
              e = a.GetIncludedAppIDs()[0];
            case "app":
              u = _(e, t, n, r, !0);
              break;
            case "bundle":
              u = S(e, t, r, !0);
          }
          if (
            (u == i.by.k_NotRejected
              ? ((s.rejected = i.by.k_NotRejected),
                l.push({ ...s, priority: 1 }))
              : h.includes(u)
                ? ((s.rejected = i.by.k_NotRejected), d.push(s))
                : ((s.rejected = u),
                  u == i.by.k_RejectIgnoredGame ? c.push(s) : m.push(s)),
            l.length > a)
          )
            break;
        }
        return (
          l.length < a &&
            (p(l, d, s, 2),
            l.length < s &&
              t.enforce_minimum &&
              (p(l, c, s, 3), p(l, m, s, u))),
          l
        );
      }
      function p(e, t, n, r) {
        for (let a = 0; e.length < n && a < t.length; ++a)
          e.push({ ...t[a], priority: r });
      }
      function h(e, t) {
        const n = a.Fm.Get();
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
      function g(e, t) {
        if (t.localized) {
          const t = (0, r.sf)(s.TS.LANGUAGE);
          if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
            return i.by.k_RejectSupportedLanguage;
        }
        return i.by.k_NotRejected;
      }
      function _(e, t, n, r, s) {
        const l = o.A.Get().GetApp(e);
        if (!l) return i.by.k_RejectNotLoaded;
        const d = h(l, t);
        if (d != i.by.k_NotRejected) return d;
        const c = a.Fm.Get();
        if (c.BIsGameIgnored(e)) return i.by.k_RejectIgnoredGame;
        if (c.BExcludeTagIDs(l.GetTagIDs())) return i.by.k_RejectIgnoreGameTags;
        if (c.BExcludesContentDescriptor(l.GetContentDescriptorIDs()))
          return i.by.k_RejectIgnoreContentDescriptors;
        if (!t.early_access && l.BIsEarlyAccess())
          return i.by.k_RejectEarlyAccess;
        const u = l.GetAppType();
        return t.software || 6 != u
          ? t.games_already_in_library && c.BIsGameOwned(e)
            ? i.by.k_RejectInLibrary
            : t.games_not_in_library && !c.BIsGameOwned(e)
              ? i.by.k_RejectNotInLibrary
              : !t.video && [7, 8, 9].includes(u)
                ? i.by.k_RejectVideo
                : t.has_discount && !l.GetBestPurchaseOption().discount_pct
                  ? i.by.k_RejectNoDiscount
                  : "adultonly" != n &&
                      t.no_ao_content &&
                      (l.HasContentDescriptorID(3) ||
                        l.HasContentDescriptorID(4))
                    ? i.by.k_RejectAO
                    : 1 == u &&
                        t.games_already_in_library &&
                        c.BIsGameOwned(l.GetParentAppID())
                      ? i.by.k_RejectInLibrary
                      : s
                        ? (1 == u && r.BHasAppID(l.GetParentAppID())) ||
                          r.BHasAppID(e)
                          ? i.by.k_RejectAlreadyDisplayed
                          : t.has_trailer && !l.BHasTrailers(!1)
                            ? i.by.k_RejectNoTrailer
                            : g(l, t)
                        : i.by.k_NotRejected
          : i.by.k_RejectSoftware;
      }
      function I(e, t) {
        const n = a.Fm.Get();
        let r = !1;
        for (let t of e) {
          if (n.BIsGameIgnored(t)) return i.by.k_RejectIgnoredGame;
          n.BIsGameOwned(t) && (r = !0);
        }
        return t.games_not_in_library && r
          ? i.by.k_RejectInLibrary
          : t.games_not_in_library && !r
            ? i.by.k_RejectNotInLibrary
            : i.by.k_NotRejected;
      }
      function y(e, t, n, r) {
        const s = o.A.Get().GetPackage(e);
        if (!s) return i.by.k_RejectNotLoaded;
        const l = h(s, t);
        if (l != i.by.k_NotRejected) return l;
        const d = I(s.GetIncludedAppIDs(), t);
        if (d != i.by.k_NotRejected) return d;
        const c = a.Fm.Get();
        return t.games_already_in_library && c.BOwnsPackage(e)
          ? i.by.k_RejectInLibrary
          : c.BIsPackageIgnored(e)
            ? i.by.k_RejectIgnoredGame
            : r
              ? n.BHasPackageID(e)
                ? i.by.k_RejectAlreadyDisplayed
                : g(s, t)
              : i.by.k_NotRejected;
      }
      function S(e, t, n, r) {
        const a = o.A.Get().GetBundle(e);
        if (!a) return i.by.k_RejectNotLoaded;
        const s = h(a, t);
        if (s != i.by.k_NotRejected) return s;
        const l = I(a.GetIncludedAppIDs(), t);
        return l != i.by.k_NotRejected
          ? l
          : r
            ? n.BHasBundleID(e)
              ? i.by.k_RejectAlreadyDisplayed
              : g(a, t)
            : i.by.k_NotRejected;
      }
    },
    36837: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => a });
      var r = n(78327);
      class a {
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
            a.s_globalSingletonStore ||
              ((a.s_globalSingletonStore = new a()),
              "dev" == r.TS.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = a.s_globalSingletonStore)),
            a.s_globalSingletonStore
          );
        }
        constructor() {
          "dev" === r.TS.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const e = (0, r.Tc)("home_view_setting", "application_config");
          this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
          const t = (0, r.Tc)(
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
    95886: (e, t, n) => {
      "use strict";
      n.d(t, { Zr: () => T, dP: () => N, v0: () => F });
      var r = n(34629),
        a = n(41735),
        o = n.n(a),
        i = n(14947),
        s = n(19367),
        l = n.n(s),
        d = n(47822),
        c = n(17720),
        u = n(60746),
        m = n(6379),
        p = n(16021),
        h = n(99032),
        g = n(81393),
        _ = n(68797),
        I = n(6419),
        y = n(61859),
        S = n(78327),
        f = n(30894),
        w = n(81477),
        C = n(46910),
        v = n(67540),
        E = n(44165),
        A = n(1059);
      function G(e, t, n, r) {
        return {
          strId: "section-" + t,
          strSectionLabel: t,
          rtSectionStart: n,
          rtSectionEnd: r,
          bIsFutureSection: n >= e,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class b {
        m_nForwardStuckCount = 0;
        m_nBackwardStuckCount = 0;
        m_mapCalendarAppsByID = new Map();
        m_mapCalendarClansByID = new Map();
        m_mapCalendarEventsByGid = new Map();
        m_rgSortedCalendarEvents = new Array();
        m_visibilityStore;
        m_currentView = i.sH.box(null);
        m_bFinishedSearchingForward = !1;
        m_bFinishedSearchingBackward = !1;
        m_rgCalendarSections = [];
        m_rgFutureSections = [];
        m_dtInitTime;
        m_forwardRequestInFlight;
        m_backwardRequestInFlight;
        m_key;
        m_collectionMetaData = void 0;
        constructor(e, t) {
          (0, i.Gn)(this),
            (this.m_key = e),
            (this.m_visibilityStore = new C.vJ(t)),
            f.Fm.Get().HintLoad();
        }
        GetNumEventsLoaded() {
          return this.m_mapCalendarEventsByGid.size;
        }
        BIsGlobalCalendar() {
          return !(
            this.m_key.appids ||
            this.m_key.clanaccountids ||
            this.m_key.collectionid ||
            this.m_key.saleid
          );
        }
        BIsShowingFeaturedFeed() {
          return Boolean(
            this.GetCollectionID() === v.g.Featured ||
              (this.BIsGlobalCalendar() && !S.iA.accountid),
          );
        }
        BIsSingleSourceCalendar() {
          return Boolean(
            this.BIsSingleGroupCalendar()
              ? !this.BIsSingleAppCalendar()
              : this.BIsSingleAppCalendar(),
          );
        }
        GetKey() {
          return this.m_key;
        }
        BEventMatchCalendarSingleSource(e) {
          return (
            (this.BIsSingleAppCalendar() && this.m_key.appids[0] == e.appid) ||
            (this.BIsSingleGroupCalendar() &&
              this.m_key.clanaccountids[0] == e.clanid)
          );
        }
        BIsSingleSourceMuted() {
          return (
            !!this.BIsSingleSourceCalendar() &&
            (this.BIsSingleAppCalendar()
              ? A.S.Get().BIsMutedAppID(this.GetSingleAppID())
              : A.S.Get().BIsMutedClanID(this.GetSingleGroupID()))
          );
        }
        BIsSingleGroupCalendar() {
          return Boolean(
            this.m_key.clanaccountids && 1 == this.m_key.clanaccountids.length,
          );
        }
        GetSingleGroupID() {
          return this.m_key.clanaccountids[0];
        }
        BIsSingleAppCalendar() {
          return Boolean(this.m_key.appids && 1 == this.m_key.appids.length);
        }
        GetSingleAppID() {
          return this.m_key.appids[0];
        }
        BIsCollectionCalendar() {
          return !!this.m_key.collectionid;
        }
        GetCollectionID() {
          return this.m_key.collectionid;
        }
        BIsSaleCalendar() {
          return !!this.m_key.saleid;
        }
        GetSaleID() {
          return this.m_key.saleid;
        }
        BIsCalendarEndTimeSet() {
          return !!this.m_key.rtCalendarEnd;
        }
        GetCalendarEndTime() {
          return this.m_key.rtCalendarEnd;
        }
        SetCollectionMetaData(e) {
          this.m_collectionMetaData = e;
        }
        GetCollectionMetaData() {
          return this.m_collectionMetaData;
        }
        BHasCollectionMetaData() {
          return Boolean(this.m_collectionMetaData);
        }
        ValidateCollectionMetadata(e) {
          const t = e;
          return (
            t &&
            "object" == typeof t &&
            t.clanid &&
            "number" == typeof t.clanid &&
            t.clan_event_gid &&
            "string" == typeof t.clan_event_gid
          );
        }
        SetFilteredView(e, t) {
          const n = this.m_currentView.get();
          n && n.dispose();
          const r = this.BIsSingleSourceMuted(),
            a = new B(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              e,
              t,
              r,
            );
          this.m_currentView.set(a);
        }
        BIsFilteredViewEmpty() {
          return !!this.m_currentView.get()?.BIsViewEmpty();
        }
        GetCalendarItemsInTimeRange(e, t) {
          const n = this.m_currentView.get();
          return n
            ? n.GetCalendarItemsInTimeRange(e, t)
            : (console.error("calendar view not yet initialized"),
              { rgCalendarItems: [], bIsComplete: !1 });
        }
        GetActiveEventsAt(e) {
          const t = this.m_currentView.get();
          return t
            ? t.GetActiveEventsAt(e)
            : (console.error("calendar view not yet initialized"), []);
        }
        GetCurrentlyLoadedEventCount(e, t) {
          return this.m_currentView.get()?.GetCurrentlyLoadedEventCount(e, t);
        }
        GetCurrentlyLoadedItemsForStats() {
          return this.m_currentView.get()?.GetCurrentlyLoadedEvents() || [];
        }
        GetCalendarSections(e) {
          return e ? this.m_rgFutureSections : this.m_rgCalendarSections;
        }
        GetStoreInitializationTimestamp() {
          return (
            this.m_dtInitTime ||
              (this.m_dtInitTime = E.HD.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [],
            n = e.getTime() / 1e3;
          t.push(G(n, (0, y.we)("#EventCalendar_FutureEventsHeader"), n));
          const r = new Date(e);
          r.setHours(0, 0, 0, 1);
          let a = r.getTime() / 1e3;
          t.push(G(n, (0, y.we)("#Time_Today"), a, n)),
            r.setDate(r.getDate() - 1);
          let o = a;
          (a = r.getTime() / 1e3),
            t.push(G(n, (0, y.we)("#Time_Yesterday"), a, o));
          const i =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            s = i ? i.start_time : n;
          let l = s > a;
          for (let e = 0; e < 5 && !l; e++)
            r.setDate(r.getDate() - 1),
              (o = a),
              (a = r.getTime() / 1e3),
              t.push(G(n, (0, y.cc)(r), a, o)),
              (l = s > a);
          const d = new Date(r);
          let c = a;
          for (; d.getMonth() == e.getMonth() && 1 != d.getDate() && !l; ) {
            d.setDate(d.getDate() - 7);
            const e = d.getTime() / 1e3;
            t.push(G(n, (0, y.lQ)(c - 1), e, c)), (l = s > e), (c = e);
          }
          const u = new Date(e);
          u.setHours(0, 0, 0, 1), u.setDate(1);
          let m = c;
          for (let r = 1; !l; r++) {
            const a = new Date(u);
            a.setMonth(e.getMonth() - r, 1);
            const o = a.getTime() / 1e3;
            t.push(G(n, (0, y.lQ)(o), o, m)), (l = s > o), (m = o);
          }
          this.m_rgCalendarSections.length > t.length
            ? this.m_rgCalendarSections.splice(
                t.length,
                this.m_rgCalendarSections.length,
              )
            : t
                .splice(this.m_rgCalendarSections.length, t.length)
                .forEach((e) => this.m_rgCalendarSections.push(e));
        }
        InitFutureCalendarSections() {
          const e = this.GetStoreInitializationTimestamp(),
            t = [];
          let n;
          this.m_key.rtCalendarEnd && (n = this.m_key.rtCalendarEnd);
          const r =
            this.m_rgSortedCalendarEvents.length > 0 &&
            this.m_rgSortedCalendarEvents[0];
          r && (n = r.start_time), n || (n = e.getTime() / 1e3);
          const a = e.getTime() / 1e3,
            o = new Date(e);
          o.setHours(24, 0, 0, 0);
          let i = o.getTime() / 1e3;
          t.push(
            G(
              a,
              (0, y.we)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
              ),
              a,
              i,
            ),
          );
          let s = n <= i,
            d = i;
          o.setDate(o.getDate() + 1),
            (i = o.getTime() / 1e3),
            s || t.push(G(a, (0, y.we)("#Time_Tomorrow"), d, i)),
            (s = n <= i);
          const c = 6 - l()(e).weekday();
          for (let e = 2; e <= c && !s; e++) {
            d = i;
            const e = (0, y.cc)(o);
            o.setDate(o.getDate() + 1),
              (i = o.getTime() / 1e3),
              t.push(G(a, e, d, i)),
              (s = n <= i);
          }
          if (this.m_key.bSectionByDay)
            for (; !s; ) {
              d = i;
              const e = (0, y.$w)(o);
              o.setDate(o.getDate() + 1),
                (i = o.getTime() / 1e3),
                t.push(G(a, e, d, i)),
                (s = n <= i);
            }
          else {
            const r = new Date(o);
            let d = i;
            const c = l()(e).daysInMonth();
            if (r.getMonth() == e.getMonth() && r.getDate() != c && !s) {
              r.setDate(r.getDate() + 7);
              const e = r.getTime() / 1e3;
              t.push(G(a, (0, y.we)("#EventCalendar_NextWeek"), d, e)),
                (s = n <= e),
                (d = e);
            }
            const u = new Date(e);
            let m;
            if (
              (u.setMonth(u.getMonth() + 1),
              u.setDate(1),
              u.setHours(0, 0, 0, 0),
              r < u && !s)
            ) {
              const e = u.getTime() / 1e3;
              t.push(G(a, (0, y.we)("#EventCalendar_LaterThisMonth"), d, e)),
                (s = n <= e),
                (m = e);
            } else m = d;
            for (let r = 2; !s; r++) {
              const o = new Date(u);
              o.setMonth(e.getMonth() + r);
              const i = o.getTime() / 1e3;
              t.push(G(a, (0, y.lQ)(m), m, i)), (s = n <= i), (m = i);
            }
          }
          this.m_rgFutureSections.length > t.length
            ? this.m_rgFutureSections.splice(
                t.length,
                this.m_rgFutureSections.length,
              )
            : t
                .splice(this.m_rgFutureSections.length, t.length)
                .forEach((e) => this.m_rgFutureSections.push(e));
        }
        async RegisterCalendarEventsAndModels(e) {
          await f.Fm.Get().HintLoad(),
            (0, i.h5)(() => {
              this.RegisterCalendarApps(e.apps),
                this.RegisterCalendarClans(e.clans),
                this.RegisterCalendarEvents(e.documents),
                m.O3.RegisterClanEvents(e.events),
                this.RegisterReadEvents(e.events_read),
                this.RegisterEventVotes(e.event_votes),
                e.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                e.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
                this.InitCalendarSections(),
                this.InitFutureCalendarSections(),
                this.SetCollectionMetaData(
                  this.ValidateCollectionMetadata(e.metadatainfo)
                    ? e.metadatainfo
                    : null,
                );
            });
        }
        RegisterCalendarApps(e) {
          if (e)
            for (const t of e) {
              if (this.m_mapCalendarAppsByID.has(t.appid)) continue;
              const e = new d.dF();
              (e.appid = t.appid),
                (e.source = t.source),
                (e.playtime = t.playtime),
                (e.last_played = t.last_played),
                (e.wishlist_added = t.wishlist_added),
                this.m_mapCalendarAppsByID.set(t.appid, e),
                t.hidden &&
                  this.m_visibilityStore.SetAppVisibility(t.appid, !1);
            }
        }
        RegisterCalendarClans(e) {
          if (e)
            for (const t of e)
              if (!this.m_mapCalendarClansByID.has(t.clanid)) {
                const e = new d.w2();
                (e.clanid = t.clanid),
                  (e.source = t.source),
                  this.m_mapCalendarClansByID.set(t.clanid, e),
                  t.hidden &&
                    this.m_visibilityStore.SetClanVisibility(t.clanid, !1);
              }
        }
        RegisterReadEvents(e) {
          if (!e) return;
          const t = u.KN.Get();
          for (const n of e) t.SetEventAsRead(n);
        }
        RegisterEventVotes(e) {
          if (!e) return;
          const t = u.KN.Get();
          for (const n of e) {
            const e = void 0 === n.vote ? void 0 : Boolean(n.vote);
            t.SetVote(n.id, e);
          }
        }
        RegisterCalendarEvents(e) {
          if (e) {
            let t = !1;
            for (const n of e)
              this.BInternalInsertCalendarEventItem(n) && (t = !0);
            t && this.RebuildSortedCalendarEventList();
          }
        }
        BHitEventHorizon(e) {
          return "forward" == e
            ? this.m_bFinishedSearchingForward
            : this.m_bFinishedSearchingBackward;
        }
        GetTimeEdgeForDirection(e, t = void 0) {
          return "forward" === e
            ? this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[0].start_time
              : t
            : this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[
                  this.m_rgSortedCalendarEvents.length - 1
                ].start_time
              : t;
        }
        UpdateStuckCounters(e, t) {
          const n =
              "forward" === e
                ? this.m_bFinishedSearchingForward
                : this.m_bFinishedSearchingBackward,
            r = this.GetTimeEdgeForDirection(e, void 0);
          return n || r !== t
            ? ("forward" == e
                ? (this.m_nForwardStuckCount = 0)
                : (this.m_nBackwardStuckCount = 0),
              !1)
            : ("forward" == e
                ? this.m_nForwardStuckCount++
                : this.m_nBackwardStuckCount++,
              !0);
        }
        GetRequestInFlight(e) {
          return "forward" === e
            ? this.m_forwardRequestInFlight
            : this.m_backwardRequestInFlight;
        }
        SetRequestInFlight(e, t) {
          (0, g.wT)(
            !t || !this.GetRequestInFlight(e),
            "Already have a request in flight for",
            e,
          ),
            "forward" === e
              ? (this.m_forwardRequestInFlight = t)
              : (this.m_backwardRequestInFlight = t);
        }
        async LoadAdditionalEvents(e, t) {
          if (this.BHitEventHorizon(e)) return 1;
          let n = this.GetRequestInFlight(e);
          if (n) return n;
          const r =
              S.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
            a =
              "forward" === e
                ? this.m_nForwardStuckCount
                : this.m_nBackwardStuckCount,
            i = a < 3 ? a : 0,
            s = a >= 3 ? 1 : 0,
            l = ("dev" === S.TS.WEB_UNIVERSE ? 50 : 250) + 50 * i,
            d = this.GetTimeEdgeForDirection(e, E.HD.GetTimeNowWithOverride()),
            c = {
              minTime: 0,
              maxTime: 0,
              ascending: !0,
              maxResults: l,
              populateEvents: 15,
              appTypes: this.m_visibilityStore.GetGameSources().join(","),
              eventTypes: Array.from(
                this.m_visibilityStore.enabledEventTypeSet,
              ).join(","),
              appIdFilter: Boolean(
                this.m_key.appids && this.m_key.appids.length > 0,
              )
                ? this.m_key.appids.sort().join(",")
                : void 0,
              clanIdFilter: Boolean(
                this.m_key.clanaccountids &&
                  this.m_key.clanaccountids.length > 0,
              )
                ? this.m_key.clanaccountids.sort().join(",")
                : void 0,
              collectionID: this.m_key.collectionid,
              saleID: this.m_key.saleid,
              hubtype: this.m_key.hubtype,
              category_or_language: this.m_key.category_or_language,
              tag_name: this.m_key.tag_name,
              tags: this.m_key.rgTags
                ? this.m_key.rgTags.slice().sort().join(",")
                : void 0,
            };
          "forward" === e
            ? ((c.minTime = Math.floor(d + s)), (c.ascending = !0))
            : ((c.maxTime = Math.floor(d - s)), (c.ascending = !1));
          return (
            (n = o()
              .get(r, {
                params: c,
                cancelToken: t ? t.token : void 0,
                withCredentials: !0,
              })
              .then(async (n) => {
                if ((this.SetRequestInFlight(e, null), 1 == n.data.success)) {
                  if (
                    (await this.RegisterCalendarEventsAndModels(n.data),
                    this.UpdateStuckCounters(e, d))
                  )
                    return this.LoadAdditionalEvents(e, t);
                } else
                  console.error(
                    "LoadAdditionalEvents was not successful: Msg" + n.data.msg,
                  );
                return n.data.success;
              })
              .catch((t) => {
                this.SetRequestInFlight(e, null);
                let n = (0, _.H)(t);
                return (
                  console.error(
                    "LoadAdditionalEvents hit error " + n.strErrorMsg,
                    n,
                  ),
                  "forward" == e
                    ? (this.m_bFinishedSearchingForward = !0)
                    : (this.m_bFinishedSearchingBackward = !0),
                  2
                );
              })),
            this.SetRequestInFlight(e, n),
            n
          );
        }
        BInternalInsertCalendarEventItem(e) {
          if (!e.unique_id)
            return (
              (0, g.wT)(
                !1,
                "Attmpted to register a calendar event item with an invalid unique id!",
              ),
              !1
            );
          if (this.m_mapCalendarEventsByGid.has(e.unique_id)) return !1;
          const t = this.m_mapCalendarAppsByID.get(e.appid),
            n = this.m_mapCalendarClansByID.get(e.clanid);
          if (!t && !n)
            return console.log("No AppInfo or ClanInfo For: ", e), !1;
          const r = new d.NK();
          return (
            (r.clanid = e.clanid),
            (r.unique_id = e.unique_id),
            (r.event_type = e.event_type),
            (r.appid = e.appid),
            (r.start_time = e.start_time),
            (r.score = e.score),
            (r.appInfo = t),
            (r.clanInfo = n),
            this.m_rgSortedCalendarEvents.push(r),
            this.m_mapCalendarEventsByGid.set(r.unique_id, r),
            !0
          );
        }
        GetCalendarAppInfoForAppID(e) {
          return this.m_mapCalendarAppsByID.get(e);
        }
        RebuildSortedCalendarEventList() {
          const e = this.m_rgSortedCalendarEvents.slice();
          this.m_rgSortedCalendarEvents = e.sort(
            (e, t) => t.start_time - e.start_time,
          );
        }
        async UpdateEventBlockFromCalendarEvent(e, t) {
          let n = e.appInfo ? e.appid : void 0,
            r = e.clanInfo ? e.clanInfo.clanid : void 0;
          null != n || null != r
            ? (await A.S.Get().UpdateCommunitionSetting(t, n, r),
              w.V.RecordAppInteractionEvent(n, w.E.k_eMuted))
            : (0, g.wT)(
                !1,
                "Both clan id and account id are missing, cannot change communication status",
              );
        }
        GetAllClans() {
          return Array.from(this.m_mapCalendarClansByID.keys());
        }
        GetAllApps() {
          return Array.from(this.m_mapCalendarAppsByID.keys());
        }
      }
      (0, r.Cg)([i.sH], b.prototype, "m_mapCalendarAppsByID", void 0),
        (0, r.Cg)([i.sH], b.prototype, "m_mapCalendarClansByID", void 0),
        (0, r.Cg)([i.sH], b.prototype, "m_mapCalendarEventsByGid", void 0),
        (0, r.Cg)([i.sH], b.prototype, "m_rgSortedCalendarEvents", void 0),
        (0, r.Cg)([i.sH], b.prototype, "m_bFinishedSearchingForward", void 0),
        (0, r.Cg)([i.sH], b.prototype, "m_bFinishedSearchingBackward", void 0),
        (0, r.Cg)([i.sH], b.prototype, "m_rgCalendarSections", void 0),
        (0, r.Cg)([i.sH], b.prototype, "m_rgFutureSections", void 0),
        (0, r.Cg)([i.sH], b.prototype, "m_collectionMetaData", void 0),
        (0, r.Cg)([i.XI], b.prototype, "InitCalendarSections", null),
        (0, r.Cg)([i.XI], b.prototype, "InitFutureCalendarSections", null),
        (0, r.Cg)([i.XI], b.prototype, "RegisterCalendarEventsAndModels", null),
        (0, r.Cg)([i.XI], b.prototype, "RegisterCalendarApps", null),
        (0, r.Cg)([i.XI], b.prototype, "RegisterCalendarClans", null),
        (0, r.Cg)([i.XI], b.prototype, "RegisterReadEvents", null),
        (0, r.Cg)([i.XI], b.prototype, "RegisterEventVotes", null),
        (0, r.Cg)([i.XI], b.prototype, "RegisterCalendarEvents", null),
        (0, r.Cg)([I.o], b.prototype, "BHitEventHorizon", null),
        (0, r.Cg)([i.XI.bound], b.prototype, "LoadAdditionalEvents", null),
        (0, r.Cg)(
          [i.XI],
          b.prototype,
          "UpdateEventBlockFromCalendarEvent",
          null,
        );
      class B {
        m_rgLoadedEventsBox = i.sH.box([]);
        m_lastLoadLatch = null;
        m_fnGetUnfilteredEvents;
        m_fnLoadAdditionalEvents;
        m_fnBHitEventHorizon;
        m_fnBIsEventInView;
        m_bSkipStorePreferenceCheck;
        m_bAllowMutedAndIgnoredSources;
        m_rgAutorunDisposer;
        constructor(e, t, n, r, a, o) {
          (0, i.Gn)(this),
            (this.m_fnGetUnfilteredEvents = e),
            (this.m_fnLoadAdditionalEvents = t),
            (this.m_fnBHitEventHorizon = n),
            (this.m_fnBIsEventInView = r),
            (this.m_bSkipStorePreferenceCheck = a),
            (this.m_bAllowMutedAndIgnoredSources = o),
            (this.m_rgAutorunDisposer = (0, i.fm)(async () => {
              const e = this.viewFilteredEvents.slice();
              if (!this.m_bSkipStorePreferenceCheck) {
                const t = Array.from(
                  new Set(e.map((e) => e.appid).filter(Boolean)),
                ).sort();
                if (
                  ((this.m_lastLoadLatch = e),
                  await p.A.Get().QueueMultipleAppRequests(t, {
                    ...h.jy,
                    include_assets: !0,
                  }),
                  this.m_lastLoadLatch != e)
                )
                  return;
                this.m_lastLoadLatch = null;
              }
              this.m_rgLoadedEventsBox.set(e);
            }));
        }
        dispose() {
          this.m_rgAutorunDisposer();
        }
        get viewFilteredEvents() {
          return this.m_fnGetUnfilteredEvents().filter((e) =>
            this.m_fnBIsEventInView(e),
          );
        }
        get filteredAndCheckedEvents() {
          return this.m_rgLoadedEventsBox.get().filter((e) => {
            if (e.appid) {
              if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (A.S.Get().BIsMutedAppID(e.appid) ||
                  f.Fm.Get().BIsGameIgnored(e.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                (0, h.Li)(p.A.Get().GetApp(e.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (A.S.Get().BIsMutedClanID(e.clanid) ||
                f.Fm.Get().BIsIgnoringCurator(c.b.InitFromClanID(e.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(e, t) {
          if (this.m_fnBHitEventHorizon(e)) return !0;
          const n = this.m_fnGetUnfilteredEvents();
          return "forward" === e
            ? t && n.length > 0 && n[0].start_time > t
            : n.length > 0 && n[n.length - 1].start_time < t;
        }
        async EnsureRangeIsLoaded(e, t) {
          for (
            let e = 0;
            e < 100 && !this.BIsCompleteThroughTime("forward", t);
            e++
          )
            await this.m_fnLoadAdditionalEvents("forward");
          for (
            let t = 0;
            t < 100 && !this.BIsCompleteThroughTime("backward", e);
            t++
          )
            await this.m_fnLoadAdditionalEvents("backward");
        }
        GetCalendarItemsInTimeRange(e, t) {
          this.EnsureRangeIsLoaded(e, t);
          const n = this.filteredAndCheckedEvents.filter(
              (n) => n.start_time >= e && (!t || n.start_time < t),
            ),
            r = this.BIsCompleteThroughTime("forward", t),
            a = this.BIsCompleteThroughTime("backward", e);
          return { rgCalendarItems: n, bIsComplete: r && a };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(e, t) {
          let n = 0;
          this.filteredAndCheckedEvents.forEach((r) => {
            r.start_time >= e && (!t || r.start_time < t) && n++;
          });
          const r = this.BIsCompleteThroughTime("forward", t),
            a = this.BIsCompleteThroughTime("backward", e);
          return { nCount: n, bIsComplete: r && a };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(e) {
          return this.filteredAndCheckedEvents
            .map((e) => m.O3.GetClanEventModel(e.unique_id))
            .filter((t) => {
              if (t) {
                const n = t.endTime || t.startTime + 3600;
                return e >= t.startTime && e < n;
              }
              return !1;
            });
        }
      }
      (0, r.Cg)([i.EW.struct], B.prototype, "viewFilteredEvents", null),
        (0, r.Cg)([i.EW.struct], B.prototype, "filteredAndCheckedEvents", null);
      const D = i.sH.box(null),
        k = new Map();
      function T(e, t) {
        let n = "";
        return (
          e.appids &&
            e.appids.length > 0 &&
            (n += "appids:" + e.appids.sort().join(",")),
          e.clanaccountids &&
            e.clanaccountids.length > 0 &&
            (n += "clanids:" + e.clanaccountids.sort().join(",")),
          e.collectionid && (n += "collection:" + e.collectionid),
          e.saleid && (n += "sale:" + e.saleid),
          e.bSectionByDay && (n += "_sectionbyday"),
          e.rtCalendarEnd && (n += "_end:" + e.rtCalendarEnd),
          e.rgTags &&
            e.rgTags.length > 0 &&
            (n += "_tags:" + e.rgTags.slice().sort().join(",")),
          e.hubtype &&
            (n +=
              "_hubtype:" +
              e.hubtype +
              "_" +
              e.category_or_language +
              "_" +
              e.tag_name),
          D.get() !== n && (D.set(n), k.has(n) || k.set(n, new b(e, t))),
          n
        );
      }
      function F() {
        return null == D.get() && T({}), k.get(D.get());
      }
      function N() {
        return null !== D.get();
      }
      window.g_EventCalendarMap = k;
    },
    67540: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => l, g: () => r });
      var r,
        a = n(75113),
        o = n(61859),
        i = n(78327);
      !(function (e) {
        (e.Default = "default"),
          (e.Upcoming = "upcoming"),
          (e.Featured = "featured"),
          (e.Press = "press"),
          (e.Steam = "steam"),
          (e.Halloween = "halloween"),
          (e.Dev_Sales = "sales"),
          (e.Dev_All = "all"),
          (e.Dev_AssociatedPress = "associated_press");
      })(r || (r = {}));
      const s = new Map();
      function l(e) {
        return (
          0 == s.size &&
            (function () {
              const e = (0, a.LJ)();
              s.set(r.Default, {
                id: r.Default,
                strUrl: `${e}/`,
                strName: (0, o.we)("#EventCalendar_NewsChannel_YourNews"),
                strSubtitle: (0, o.we)(
                  "#EventCalendar_NewsChannel_Personalized",
                ),
                strHeaderTitle: (0, o.we)(
                  "#EventCalendar_NewsChannel_YourNews_HeaderTitle",
                ),
              }),
                s.set(r.Upcoming, {
                  id: r.Upcoming,
                  strUrl: `${e}/?upcoming=1`,
                  strName: (0, o.we)("#EventCalendar_NewsChannel_Upcoming"),
                  strShortName: (0, o.we)(
                    "#EventCalendar_NewsChannel_UpcomingShort",
                  ),
                  strSubtitle: (0, o.we)(
                    "#EventCalendar_NewsChannel_Personalized",
                  ),
                }),
                s.set(r.Featured, {
                  id: r.Featured,
                  strUrl: `${e}/collection/featured/`,
                  strName: (0, o.we)("#EventCalendar_NewsChannel_Featured"),
                  strSubtitle: (0, o.we)(
                    "#EventCalendar_NewsChannel_TopSellers",
                  ),
                  strHeaderTitle: (0, o.we)(
                    "#EventCalendar_NewsChannel_Featured_HeaderTitle",
                  ),
                }),
                s.set(r.Press, {
                  id: r.Press,
                  strUrl: `${e}/collection/press/`,
                  strName: (0, o.we)("#EventCalendar_NewsChannel_Press"),
                  strHeaderTitle: (0, o.we)(
                    "#EventCalendar_Collection_News_Title",
                  ),
                  strHeaderSubtitle: (0, o.we)(
                    "#EventCalendar_Collection_News_Subtitle",
                  ),
                }),
                s.set(r.Steam, {
                  id: r.Steam,
                  strUrl: `${e}/collection/steam/`,
                  strName: (0, o.we)("#EventCalendar_NewsChannel_Steam"),
                  strSubtitle: (0, o.we)(
                    "#EventCalendar_NewsChannel_SteamSubtitle",
                  ),
                  strHeaderTitle: (0, o.we)(
                    "#EventCalendar_NewsChannel_Steam_HeaderTitle",
                  ),
                }),
                s.set(r.Halloween, {
                  id: r.Halloween,
                  strUrl: `${e}/collection/halloween/`,
                  strName: (0, o.we)("#EventCalendar_NewsChannel_Halloween"),
                  strSubtitle: (0, o.we)(
                    "#EventCalendar_NewsChannel_HalloweenSubtitle",
                  ),
                  strHeaderTitle: (0, o.we)(
                    "#EventCalendar_Collection_Halloween_Title",
                  ),
                  strHeaderSubtitle: (0, o.we)(
                    "#EventCalendar_Collection_Halloween_Subtitle",
                  ),
                }),
                s.set(r.Dev_Sales, {
                  id: r.Dev_Sales,
                  strUrl: `${e}/collection/sales/`,
                  strName: (0, o.we)("#EventCalendar_NewsChannel_AllSales"),
                }),
                i.iA.is_support &&
                  (s.set(r.Dev_All, {
                    id: r.Dev_All,
                    strUrl: `${e}/collection/all/`,
                    strName: (0, o.we)("#EventCalendar_NewsChannel_All"),
                    bIsValveOnly: !0,
                  }),
                  s.set(r.Dev_AssociatedPress, {
                    id: r.Dev_AssociatedPress,
                    strUrl: `${e}/collection/associated_press/`,
                    strName: (0, o.we)(
                      "#EventCalendar_NewsChannel_AssociatedPress",
                    ),
                    bIsValveOnly: !0,
                  }));
            })(),
          s.get(e)
        );
      }
    },
    1059: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => c });
      var r = n(34629),
        a = n(41735),
        o = n.n(a),
        i = n(14947),
        s = n(81393),
        l = n(68797),
        d = n(78327);
      class c {
        constructor() {
          (0, i.Gn)(this);
        }
        m_mapBlockedAppIds = new Map();
        m_mapBlockedClanIds = new Map();
        static s_globalSingletonStore;
        static Get() {
          return (
            c.s_globalSingletonStore ||
              ((c.s_globalSingletonStore = new c()),
              c.s_globalSingletonStore.Init()),
            c.s_globalSingletonStore
          );
        }
        GetMutedSourceCount() {
          return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
        }
        Init() {
          const e = (0, d.Tc)("mutedcomminfo", "application_config");
          this.ValidateStoreDefault(e) &&
            (("dev" != d.TS.WEB_UNIVERSE && "beta" != d.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CMutedCommunicationStore loading bundles payload: " +
                  JSON.stringify(e),
              ),
            e.appids &&
              e.appids.forEach((e) => this.m_mapBlockedAppIds.set(e, !0)),
            e.clanids &&
              e.clanids.forEach((e) => this.m_mapBlockedClanIds.set(e, !0)));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            ((Array.isArray(t.appids) && t.appids.length > 0) ||
              (Array.isArray(t.clanids) && t.clanids.length > 0))
          );
        }
        BIsEventBlocked(e) {
          return e.appid
            ? this.m_mapBlockedAppIds.has(e.appid)
            : !!e.clanInfo && this.m_mapBlockedClanIds.has(e.clanInfo.clanid);
        }
        BIsMutedAppID(e) {
          return this.m_mapBlockedAppIds.has(e);
        }
        BIsMutedClanID(e) {
          return this.m_mapBlockedClanIds.has(e);
        }
        async UpdateCommunitionSetting(e, t, n) {
          const r = d.TS.STORE_BASE_URL + "account/optoutappcommunication/",
            a = new FormData();
          if (
            (a.append("sessionid", d.TS.SESSIONID),
            a.append("allowCommunication", e ? "1" : "0"),
            t)
          ) {
            if (
              (!e && this.m_mapBlockedAppIds.has(t)) ||
              (e && !this.m_mapBlockedAppIds.has(t))
            )
              return !0;
            e
              ? this.m_mapBlockedAppIds.delete(t)
              : this.m_mapBlockedAppIds.set(t, !0),
              a.append("appId", t.toString());
          } else {
            if (!n)
              return (
                (0, s.wT)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            if (
              (!e && this.m_mapBlockedClanIds.has(n)) ||
              (e && !this.m_mapBlockedClanIds.has(n))
            )
              return !0;
            e
              ? this.m_mapBlockedClanIds.delete(n)
              : this.m_mapBlockedClanIds.set(n, !0),
              a.append("clanId", n.toString());
          }
          try {
            return 1 == (await o().post(r, a)).data.success;
          } catch (e) {
            return (
              console.error(
                "Blocking app id hit error " + (0, l.H)(e).strErrorMsg,
              ),
              !1
            );
          }
        }
      }
      (0, r.Cg)([i.sH], c.prototype, "m_mapBlockedAppIds", void 0),
        (0, r.Cg)([i.sH], c.prototype, "m_mapBlockedClanIds", void 0);
    },
    10050: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => o });
      var r = n(90626),
        a = n(90740);
      function o(e) {
        const { children: t, ...n } = e,
          o = r.useRef(null);
        return r.createElement(a.A, { nodeRef: o, ...n }, e.children(o));
      }
    },
    48838: (e, t, n) => {
      "use strict";
      n.d(t, { cI: () => T, do: () => H, of: () => N });
      var r = n(45699),
        a = n(75844),
        o = n(65946),
        i = n(90626),
        s = n(17720),
        l = n(8092),
        d = n(30894),
        c = n(95886),
        u = n(46910),
        m = n(44165),
        p = n(60746),
        h = n(39700),
        g = n(12155),
        _ = n(68797),
        I = n(52038),
        y = n(61859),
        S = n(51706),
        f = n(738),
        w = n(32754),
        C = n(56524),
        v = n(86090),
        E = n(95695),
        A = n(82477),
        G = n(4796);
      const b = (0, a.PA)((e) => {
        const { closeModal: t } = e;
        return i.createElement(S.o0, {
          strTitle: (0, y.we)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_Title",
          ),
          strDescription: (0, y.we)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_Description",
          ),
          strOKButtonText: (0, y.we)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton",
          ),
          strCancelButtonText: (0, y.we)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton",
          ),
          onOK: () => {
            (0, c.v0)().m_visibilityStore.SetGameSourceAllowed(
              u.FD.k_ECurator,
              !0,
            ),
              t();
          },
          onCancel: () => {
            (0,
            c.v0)().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(
              !0,
            ),
              t();
          },
        });
      });
      function B(e) {
        e ||
          ((0, c.dP)() &&
            ((0,
            c.v0)().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
              (0, c.v0)().m_visibilityStore.BIsGameSourceAllowed(
                u.FD.k_ECurator,
              ) ||
              (0, f.pg)(i.createElement(b, null), window)));
      }
      function D() {
        return (
          !!p.KN.Get().BIsUserLoggedIn() ||
          ((0, f.pg)(
            i.createElement(S.o0, {
              strTitle: (0, y.we)("#EventDisplay_Share_NotLoggedIn"),
              strDescription: (0, y.we)(
                "#EventDisplay_Share_NotLoggedIn_Description",
              ),
              strOKButtonText: (0, y.we)("#MobileLogin_SignIn"),
              onOK: () => (0, A.vg)(),
            }),
            window,
          ),
          !1)
        );
      }
      function k(e) {
        const t = s.b.InitFromClanID(e),
          n = p.KN.Get().GetPartnerEventPermissions(t);
        return (
          !n ||
          !n.limited_user ||
          ((0, f.pg)(i.createElement(v.g, null), window), !1)
        );
      }
      async function T(e) {
        if (D() && k(e)) {
          let t = s.b.InitFromClanID(e),
            n = d.Fm.Get().BIsFollowingCurator(t);
          await d.Fm.Get().UpdateFollowOrIgnoreCurator(t, !0, !n), B(n);
        }
      }
      const F = (e) => {
          const {
            className: t,
            bIgnored: n,
            bApplyingFollowing: a,
            bFollowing: o,
            onFollowClick: s,
            followType: l,
          } = e;
          if (!m.HD.bIsFollowingEnabled) return null;
          let d = null;
          switch (l) {
            case "app":
              d = (0, y.we)("#text_store_follow_desc");
              break;
            case "creatorhome":
              d = (0, y.we)("#CreatorHome_Follow_tooltip");
              break;
            case "steamcurator":
              d = (0, y.we)("#steam_curator_follow_ttip");
              break;
            case "group":
              d = (0, y.we)("#steam_group_follow_ttip");
          }
          return d
            ? i.createElement(
                w.Gq,
                { toolTipContent: n || o ? void 0 : d },
                i.createElement(
                  r.ml,
                  {
                    className: (0, I.A)(
                      E.Button,
                      C.FollowButton,
                      "FollowButton",
                      t,
                      o ? "Followed" : "",
                    ),
                    onClick: s,
                  },
                  a && i.createElement(h.k, { size: 15 }),
                  !a && (o || n) && i.createElement(g.Jlk, null),
                  i.createElement(
                    "div",
                    { className: (0, I.A)(C.FollowBtnText, "FollowBtnText") },
                    !a &&
                      (o
                        ? (0, y.we)("#Button_Followed")
                        : n
                          ? (0, y.we)("#Button_Ignored")
                          : (0, y.we)("#Button_Follow")),
                  ),
                ),
              )
            : (console.error("CommonFollowButton unexpected type", l), null);
        },
        N = (e) => {
          const { followType: t } = e,
            [n, r] = i.useState(!1),
            { clanAccountID: a, className: c } = e,
            u = s.b.InitFromClanID(a),
            [m, p] = (0, G.TB)(a),
            h = (0, o.q3)(() => d.Fm.Get().BIsFollowingCurator(u)),
            g = (0, o.q3)(() => !h && d.Fm.Get().BIsIgnoringCurator(u));
          return i.createElement(F, {
            className: c,
            bIgnored: g,
            bFollowing: h,
            bApplyingFollowing: n,
            onFollowClick: () => {
              const { clanAccountID: t } = e;
              D() &&
                k(t) &&
                (r(!0),
                (() => {
                  const { clanAccountID: t, creatorID: n } = e,
                    a = s.b.InitFromClanID(t),
                    o = d.Fm.Get().BIsFollowingCurator(a),
                    i = !o && d.Fm.Get().BIsIgnoringCurator(a);
                  d.Fm.Get()
                    .UpdateFollowOrIgnoreCurator(a, !i, !(i || o))
                    .then((e) => {
                      if (n) {
                        let e = l.pF.GetCreatorHomeByID(n);
                        i || e.AdjustFollower(o ? -1 : 1);
                      }
                      r(!1);
                    })
                    .then(() => {
                      B(o);
                    })
                    .catch((e) => {
                      r(!1);
                      let t = (0, _.H)(e);
                      console.error(
                        "CuratorFollowButton hit error: " + t.strErrorMsg,
                        t,
                      );
                    });
                })());
            },
            followType:
              t ?? (p?.is_creator_home ? "creatorhome" : "steamcurator"),
          });
        },
        H = (e) => {
          const [t, n] = i.useState(!1),
            { appid: r, className: a } = e,
            o = d.Fm.Get().BFollowsApp(r),
            s = !o && d.Fm.Get().BIsGameIgnored(r);
          return i.createElement(F, {
            className: a,
            bIgnored: s,
            bFollowing: o,
            bApplyingFollowing: t,
            onFollowClick: () => {
              D() &&
                (n(!0),
                (() => {
                  const { appid: t } = e,
                    r = d.Fm.Get().BFollowsApp(t),
                    a = !r && d.Fm.Get().BIsGameIgnored(t);
                  d.Fm.Get()
                    .UpdateFollowingApp(t, !(a || r))
                    .then(() => {
                      n(!1);
                    })
                    .catch((e) => {
                      n(!1);
                      const t = (0, _.H)(e);
                      console.error(
                        "AppFollowButton hit error: " + t.strErrorMsg,
                        t,
                      );
                    });
                })());
            },
            followType: "app",
          });
        };
    },
    26101: (e, t, n) => {
      "use strict";
      n.d(t, {
        Q3: () => oe,
        Qf: () => ue,
        SZ: () => de,
        gi: () => ae,
        hr: () => le,
      });
      var r = n(3740),
        a = n(40807),
        o = n(80696),
        i = n(60014),
        s = n(38535),
        l = n(14947),
        d = n(75844),
        c = n(65946),
        u = n(90626),
        m = n(72739),
        p = n(61855),
        h = n(35380),
        g = n(17690),
        _ = n(6336),
        I = n(85044),
        y = n(55963),
        S = n(4796),
        f = n(8092),
        w = n(30894),
        C = n(16021),
        v = n(62792),
        E = n(55263),
        A = n(54906),
        G = n(84811),
        b = n(48838),
        B = n(72237),
        D = n(99956),
        k = n(47235),
        T = n(12155),
        F = n(32754),
        N = n(4434),
        H = n(81393),
        R = n(6144),
        M = n(52038),
        L = n(61859),
        P = n(84933),
        V = n(78327),
        U = n(10050),
        j = n(49411),
        O = n(10224),
        x = n(83284),
        W = n.n(x),
        q = n(82477),
        z = n(18654),
        K = n.n(z),
        Q = n(8527),
        X = n(52050),
        J = n(28045);
      const Y = "DEBUG_UseNewGameHover";
      function $() {
        return window.sessionStorage?.getItem(Y) || "default";
      }
      window.SetHoverPresentation = function (e) {
        window.sessionStorage.setItem(Y, e);
      };
      const Z = 2e3;
      function ee(e, t, n, r) {
        const a = [];
        if (1 == e.length) {
          const t = C.A.Get().GetApp(e[0]),
            n = t?.GetMicroTrailer(r);
          t &&
            n &&
            a.push({
              rctImage: u.createElement(o.m, {
                id: { appid: t.GetID() },
                active: !0,
              }),
              nDurationMs: 5500,
            });
          t.GetScreenshots(r)
            .slice(0, 10)
            .forEach((e, t) => {
              a.push({
                rctImage: u.createElement("img", {
                  key: e,
                  className: W().FullDivImage,
                  loading: "lazy",
                  src: e,
                  alt: "screenshot " + (t + 1),
                }),
                nDurationMs: Z,
              });
            });
        }
        if (0 == a.length)
          for (const t of e) {
            const e = C.A.Get().GetApp(t),
              n = e?.GetAssets()?.GetMainCapsuleURL();
            n &&
              a.push({
                rctImage: u.createElement("img", {
                  key: "fallback",
                  className: W().FullDivImage,
                  loading: "lazy",
                  src: n,
                  alt: e.GetName(),
                }),
                nDurationMs: Z,
              });
          }
        a.length > 0
          ? (t(a), n(!0))
          : ("dev" != V.TS.WEB_UNIVERSE && "beta" != V.TS.WEB_UNIVERSE) ||
            console.error(
              "DEV ONLY OUTPUT: GameHoverImages for id/type no images: (might be not age safe screenshots)",
              (0, l.HO)(e),
            );
      }
      function te(e) {
        const { info: t } = e,
          n = (0, u.useRef)({
            include_assets: !0,
            include_trailers: !0,
            include_screenshots: !0,
          }),
          [r, a] = (0, E.G6)(t.id, (0, v.SW)(t.type), n.current),
          i = (0, u.useRef)(r),
          [l, d] = (0, u.useState)([]),
          c = (0, u.useRef)(0),
          m = (0, P.CH)(),
          [h] = u.useState(new R.LU()),
          g = (0, s.dy)(),
          _ = (0, u.useCallback)(
            (e = !1) => {
              if ((e && (c.current = 0), l?.length > 0)) {
                const e = l[c.current].nDurationMs;
                h.Schedule(e, () => {
                  const e = c.current;
                  (c.current = (c.current + 1) % l.length),
                    e != c.current && (_(), m());
                });
              }
            },
            [l, h, m],
          );
        return (
          (0, u.useEffect)(
            () => (
              !r || (l && 0 != l.length && i.current === r)
                ? 2 == a && 0 == l.length
                  ? d([
                      {
                        rctImage: u.createElement("img", {
                          key: "default",
                          className: W().FullDivImage,
                          loading: "lazy",
                          src: (0, Q.YJ)(p.A),
                          alt: "default",
                        }),
                        nDurationMs: Z,
                      },
                    ])
                  : l?.length && _()
                : ((i.current = r),
                  2 == r.GetStoreItemType() || 1 == r.GetStoreItemType()
                    ? ((0, H.wT)(
                        r.GetIncludedAppIDs().length > 0,
                        "expected included apps " +
                          r.GetID() +
                          " " +
                          r.GetStoreItemType(),
                      ),
                      C.A.Get()
                        .QueueMultipleAppRequests(r.GetIncludedAppIDs(), {
                          include_assets: !0,
                        })
                        .then(() => ee(r.GetIncludedAppIDs(), d, _, g)))
                    : 1 == r.GetAppType() &&
                        r.GetParentAppID() &&
                        !r.GetAllTrailers().BHasTrailers(g)
                      ? C.A.Get()
                          .QueueAppRequest(r.GetParentAppID(), n.current)
                          .then(() =>
                            (function (e, t, n, r, a) {
                              const i = [],
                                s = C.A.Get().GetApp(t),
                                l = s?.GetMicroTrailer(a);
                              s &&
                                l &&
                                i.push({
                                  rctImage: u.createElement(o.m, {
                                    id: { appid: s.GetID() },
                                    active: !0,
                                  }),
                                  nDurationMs: 5500,
                                });
                              const d = C.A.Get().GetApp(e).GetScreenshots(a);
                              d.slice(0, 10).forEach((e, t) => {
                                i.push({
                                  rctImage: u.createElement("img", {
                                    key: e,
                                    className: W().FullDivImage,
                                    loading: "lazy",
                                    src: e,
                                    alt: "screenshot " + (t + 1),
                                  }),
                                  nDurationMs: Z,
                                });
                              }),
                                10 - d.length > 0 &&
                                  s
                                    .GetScreenshots(a)
                                    .slice(0, 10)
                                    .forEach((e, t) => {
                                      i.push({
                                        rctImage: u.createElement("img", {
                                          key: e,
                                          className: W().FullDivImage,
                                          loading: "lazy",
                                          src: e,
                                          alt: "screenshot " + (t + 1),
                                        }),
                                        nDurationMs: Z,
                                      });
                                    }),
                                i.length > 0
                                  ? (n(i), r(!0))
                                  : ("dev" != V.TS.WEB_UNIVERSE &&
                                      "beta" != V.TS.WEB_UNIVERSE) ||
                                    console.error(
                                      "DEV ONLY OUTPUT: Demo GameHoverImages for id/type no images: (might be not age safe screenshots)",
                                      e,
                                      t,
                                    );
                            })(r.GetID(), r.GetParentAppID(), d, _, g),
                          )
                      : ee([r.GetID()], d, _, g)),
              () => h.Cancel()
            ),
            [l, r, a, h, _, i, g],
          ),
          u.createElement(
            "div",
            { className: W().TrailerCtn },
            l?.map((e, n) =>
              u.createElement(
                "div",
                {
                  key: "e-" + n + "-" + t.id + "_" + t.type,
                  className: (0, M.A)(
                    W().FullDivImage,
                    n != c.current && W().Transparent,
                  ),
                },
                e.rctImage,
              ),
            ),
          )
        );
      }
      function ne(e) {
        const { rgTagIDs: t } = e;
        return u.createElement(
          "div",
          { className: W().TagRow },
          u.createElement(
            "div",
            { className: W().Tags },
            t.map((e) =>
              u.createElement(D.p, {
                key: "tag_" + e,
                tagid: e,
                className: W().Tag,
              }),
            ),
          ),
        );
      }
      const re = (0, d.PA)(function (e) {
        const { appID: t, snr: n, classOverride: r } = e,
          [a] = (0, E.t7)(t, {}),
          [o, i] = (0, u.useState)(!1),
          s = (0, N.m)("GameHoverIgnoreButton"),
          l = t && w.Fm.Get().BIsGameIgnored(t);
        return u.createElement(
          "div",
          {
            className: (0, M.A)(W().IgnoreButton, r),
            onClick: async (e) => {
              e.preventDefault(),
                e.stopPropagation(),
                V.iA.logged_in
                  ? (i(!0),
                    await w.Fm.Get().UpdateAppIgnore(t, !l, n),
                    s.token.reason || i(!1))
                  : (0, q.vg)();
            },
          },
          u.createElement(T.NtH, null),
          u.createElement(
            "div",
            {
              className: (0, M.A)(
                W().IgnoreButtonText,
                o && W().IgnoreLoadingText,
              ),
            },
            (0, L.we)(l ? "#Sale_RemoveFromIgnored" : "#Sale_Ignore"),
          ),
        );
      });
      function ae(e) {
        const { appID: t, classOverride: n, styleOverride: r } = e,
          [a, o] = (0, u.useState)(!1),
          i = (0, N.m)("GameHoverIgnoreButton"),
          s = (0, c.q3)(() => t && w.Fm.Get().BIsFollowingCurator(t));
        return u.createElement(
          "div",
          {
            className: (0, M.A)(W().IgnoreButton, n),
            onClick: async (e) => {
              e.preventDefault(),
                e.stopPropagation(),
                V.iA.logged_in
                  ? (o(!0),
                    await w.Fm.Get().UpdateFollowingApp(t, !s),
                    i.token.reason || o(!1))
                  : (0, q.vg)();
            },
            style: r,
          },
          s ? u.createElement(T.pPV, null) : u.createElement(T.c9e, null),
          u.createElement(
            "div",
            {
              className: (0, M.A)(
                W().IgnoreButtonText,
                a && W().IgnoreLoadingText,
                "FollowGameButton",
              ),
            },
            (0, L.we)(s ? "#Sale_StopFollowingGame" : "#Sale_FollowGame"),
          ),
        );
      }
      function oe(e) {
        const {
            nCreatorAccountID: t,
            classOverride: n,
            styleOverride: r,
            followType: a,
          } = e,
          [o, i] = (0, S.TB)(t),
          { creatorHome: s } = (0, f.FV)(t);
        return u.createElement(
          "div",
          {
            className: (0, M.A)(W().GameHoverCreatorFollowButtonCtn, n),
            style: r,
          },
          u.createElement(
            "a",
            { href: s?.GetCreatorHomeURL("developer") },
            u.createElement("img", {
              src: o ? (0, I.t)(null, "medium") : i.avatar_medium_url,
            }),
          ),
          u.createElement(b.of, { clanAccountID: t, followType: a }),
        );
      }
      function ie(e) {
        const {
            info: t,
            displayInfo: n,
            name: o,
            strStoreUrl: i,
            elElementToAppend: s,
            bShowDemoButton: l,
            bHideBottomHalf: d,
            bHidePrice: c,
            bShowDeckCompatibilityDialog: m,
            bUseSubscriptionLayout: p,
            nCreatorAccountID: g,
            bPreventNavigation: _,
            bShowDescription: I,
          } = e,
          [y, S] = (0, u.useState)(!1),
          [f, w] = (0, u.useState)(""),
          C = (0, h.rt)(t),
          [G] = (0, E.G6)(t.id, (0, v.SW)(t.type), {
            include_release: !0,
            include_platforms: !0,
            include_reviews: !0,
            include_tag_count: 20,
          }),
          [b] = (0, E.G6)(n.id, (0, v.SW)(n.type), { include_assets: !0 }),
          D = !p && !l && !s,
          T = 0 == G?.GetStoreItemType();
        return u.createElement(
          "div",
          {
            className: W().BottomShelf,
            style: { transform: d && y ? f : "" },
            onMouseEnter: () => S(!0),
            onFocus: () => S(!0),
            onMouseLeave: () => S(!1),
            onBlur: () => S(!1),
          },
          u.createElement(
            "a",
            { href: _ ? void 0 : i, className: W().Midline },
            Boolean(b) &&
              u.createElement(
                "div",
                { className: W().CapsuleImageAnchorPoint },
                u.createElement(
                  "div",
                  {
                    className: (0, M.A)(
                      W().CapsuleImageCtn,
                      W().WithCornerShine,
                    ),
                  },
                  u.createElement("img", {
                    loading: "lazy",
                    src: b?.GetAssets().GetHeaderURL(),
                    alt: G?.GetName(),
                  }),
                ),
              ),
            Boolean(!c && !p) &&
              u.createElement(
                "div",
                { className: W().Price },
                u.createElement(r.N, { id: C, onlyOneDiscountPct: !0 }),
              ),
          ),
          u.createElement(
            "div",
            {
              className: W().BottomShelfOffScreen,
              ref: (e) => w(`translateY( -${e?.clientHeight || 0}px )`),
            },
            u.createElement(
              "div",
              { className: W().TextContent },
              u.createElement(
                "a",
                { href: _ ? null : i },
                u.createElement(
                  "div",
                  { className: W().GameTitle },
                  G?.GetName() || o,
                ),
              ),
              I &&
                u.createElement(
                  "div",
                  { className: W().ShortDescription },
                  G?.GetShortDescription(),
                ),
              Boolean(G) && u.createElement(ne, { rgTagIDs: G.GetTagIDs() }),
              Boolean(!m && G) && u.createElement(X.J, { id: C }),
              Boolean(!m && D) &&
                u.createElement(
                  "div",
                  { className: W().ReviewsAndRelease },
                  u.createElement(B.Q, {
                    id: C,
                    strClassName: W().PlatformDisplay,
                  }),
                  Boolean(G?.GetFormattedSteamReleaseDate()) &&
                    u.createElement(
                      "div",
                      { className: W().ReleaseDate },
                      G?.GetFormattedSteamReleaseDate(),
                    ),
                ),
              l && u.createElement(a.j, { id: C, className: W().DemoButton }),
              Boolean(m && T) && u.createElement(A.Q8, { id: C }),
              Boolean(s) && s,
              Boolean(p && T) &&
                u.createElement(k.E, { appid: t.id, bIsMuted: !1 }),
              g && u.createElement(oe, { nCreatorAccountID: g }),
            ),
          ),
        );
      }
      const se = (0, d.PA)(function (e) {
        u.useEffect(() => {
          w.Fm.Get().HintLoad();
        }, []);
        const {
            info: t,
            displayInfo: n,
            strStoreUrl: r,
            bHideBottomHalf: a,
            bShowDeckCompatibilityDialog: o,
            bShowWishlistButton: i = !0,
            bShowIgnoreButton: s = !1,
          } = e,
          l = (0, h.$5)(n.id);
        let d;
        return (
          t.overrideNavigation && (d = (e) => t.overrideNavigation()),
          u.createElement(
            "div",
            {
              className: (0, M.A)(
                W().GameHoverCapsuleCtn,
                K().InGameHover,
                a && W().UseHidingBottomHalf,
              ),
              onClick: d,
            },
            u.createElement(
              "a",
              { href: d ? null : r, className: W().TrailerAnchorStoreLink },
              Boolean(i && !o && !d) &&
                u.createElement(J.E, { id: l, snr: e.strSNR }),
              Boolean(s && !o && !d) &&
                u.createElement(re, { appID: n.id, snr: e.strSNR }),
              u.createElement(te, { info: n }),
            ),
            u.createElement(ie, { ...e, bPreventNavigation: Boolean(d) }),
          )
        );
      });
      function le(e) {
        return e
          ? "appid" in e
            ? { type: "game", id: e.appid }
            : "bundleid" in e
              ? { type: "bundle", id: e.bundleid }
              : "packageid" in e
                ? { type: "sub", id: e.packageid }
                : { type: "game", id: g.sc }
          : { type: "game", id: g.sc };
      }
      function de(e) {
        return "appid" in e
          ? { id: e.appid }
          : "packageid" in e
            ? { type: "sub", id: e.packageid }
            : "bundleid" in e
              ? { type: "bundle", id: e.bundleid }
              : void (0, H.wT)(
                  !1,
                  `unhandled item id type: ${JSON.stringify(e)}`,
                );
      }
      const ce = 150;
      function ue(e) {
        const {
            item: t,
            name: n,
            bPreventNavigation: r,
            elElementToAppend: a,
            bShowDemoButton: o,
            bPreferDemoStorePage: s,
            bHidePrice: l,
            bUseSubscriptionLayout: d,
            strExtraParams: c,
            children: m,
            nCreatorAccountID: p,
            nWidthMultiplier: h,
            bShowDeckCompatibilityDialog: g,
            bShowWishlistButton: _ = !0,
            bShowIgnoreButton: I = !1,
            bShowDescription: S = !1,
            ...f
          } = e,
          [w] = (0, E.G6)(t.id, (0, v.SW)(t.type), {}),
          C = (0, i.n9)(),
          A = (0, y.L3)(C),
          G = (0, V.Qn)(),
          b = (0, j.w)();
        if (!w && !n) return null;
        if (G) return u.createElement(u.Fragment, null, e.children);
        let B = { id: t.id, type: t.type };
        1 == w?.GetStoreItemType() &&
          1 == w?.GetIncludedAppIDs().length &&
          (B = { id: w.GetIncludedAppIDs()[0], type: "game" });
        const D = "hiding" == $(),
          k =
            r || !w
              ? null
              : (0, y.It)(`${w?.GetStorePageURL(s)}${c ? `?${c}` : ""}`, C, b),
          T = {
            info: t,
            displayInfo: B,
            name: n,
            bPreventNavigation: r,
            strStoreUrl: k,
            elElementToAppend: a,
            bShowDemoButton: o,
            bShowDeckCompatibilityDialog: g,
            bHideBottomHalf: D,
            bHidePrice: l,
            bUseSubscriptionLayout: d,
            strSNR: A,
            nCreatorAccountID: p,
            bShowWishlistButton: _,
            bShowIgnoreButton: I,
            bShowDescription: S,
          },
          F = u.createElement(se, { ...T }),
          N = k ? u.createElement("a", { href: k }, m) : m;
        return u.createElement(
          pe,
          { hoverContent: F, nWidthMultiplier: h, ...f },
          N,
        );
      }
      function me(e) {
        const { hoverProps: t, children: n } = e,
          r = u.useCallback((e) => e?.focus(), []);
        return u.createElement(
          _.g,
          { ...t },
          u.createElement(
            U.M,
            {
              timeout: 500,
              in: !0,
              appear: !0,
              classNames: { appearActive: W().Opening, enterDone: W().Open },
            },
            (e) =>
              u.createElement(
                "div",
                {
                  ref: (0, P.XB)(e, r),
                  className: W().HoverContentTransition,
                  tabIndex: -1,
                },
                n,
              ),
          ),
        );
      }
      function pe(e) {
        const {
            hoverContent: t,
            hoverProps: n,
            nDelayShowMs: r,
            nWidthMultiplier: a,
            children: o,
            className: i,
          } = e,
          s = (0, V.Qn)(),
          l = (0, O.zI)(),
          d = !s && !l,
          [c, m] = u.useState(!1),
          [p, h] = u.useState(void 0);
        return u.createElement(
          "div",
          {
            "data-key": "hover div",
            className: (0, M.A)(W().ItemHoverSource, i),
            onMouseEnter: (e) => {
              m(!0), h(e.currentTarget);
            },
            onMouseLeave: () => m(!1),
            onTouchStart: () => m(!1),
            onKeyDown: (e) => {
              27 == e.keyCode &&
                (m(!1), e.preventDefault(), e.stopPropagation());
            },
          },
          d &&
            u.createElement(
              he,
              {
                visible: c,
                target: p,
                nDelayShowMs: r,
                nWidthMultiplier: a,
                hoverProps: n,
              },
              t,
            ),
          u.createElement(G.tH, null, o),
        );
      }
      function he(e) {
        const {
            hoverProps: t,
            nDelayShowMs: n = ce,
            nWidthMultiplier: r = 1.15,
            target: a,
            visible: o,
            children: i,
          } = e,
          [s, l] = u.useState(o),
          { targetElement: d = a?.ownerDocument.body } = (0, F.gK)();
        if (
          (u.useEffect(() => {
            if (o) {
              if (n) {
                const e = window.setTimeout(() => l(!0), n);
                return () => window.clearTimeout(e);
              }
              l(!0);
            } else l(!1);
          }, [o]),
          u.useEffect(() => {
            if (!s) return;
            const e = a.ownerDocument.defaultView,
              t = e.scrollY,
              n = () => {
                Math.abs(e.scrollY - t) > 50 && l(!1);
              };
            return (
              window.addEventListener("scroll", n),
              () => window.removeEventListener("scroll", n)
            );
          }, [s, a?.ownerDocument.defaultView]),
          !a || !i || !s)
        )
          return null;
        const c = a.clientWidth < 200 ? "8px" : "10px",
          p = {
            direction: "overlay-center",
            bEnablePointerEvents: !0,
            ...t,
            style: {
              zIndex: 98,
              width: a.clientWidth * r,
              fontSize: c,
              minHeight: "hiding" == $() ? void 0 : 300,
              height:
                "hiding" == $() ? 1.15 * a.clientWidth * (125 / 184) : void 0,
              ...t?.style,
            },
            target: a,
          };
        return m.createPortal(
          u.createElement(
            me,
            { hoverProps: p },
            u.createElement(G.tH, null, i),
          ),
          d,
        );
      }
    },
    86090: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => s });
      var r = n(90626),
        a = n(51706),
        o = n(61859),
        i = n(78327);
      const s = (e) => {
        let t = i.TS.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
        return r.createElement(
          a.o0,
          {
            strTitle: (0, o.we)("#Informational_Message"),
            onCancel: e.closeModal,
            onOK: e.closeModal,
            bAlertDialog: !0,
          },
          r.createElement(
            "div",
            null,
            (0, o.PP)(
              e.strTokenOverride || "#User_LimitedAccount",
              r.createElement(
                "a",
                { href: t, target: i.TS.IN_CLIENT ? void 0 : "_blank" },
                (0, o.we)("#User_LimitedAccount_UrlInfo"),
              ),
            ),
          ),
        );
      };
    },
    99032: (e, t, n) => {
      "use strict";
      n.d(t, {
        AX: () => y,
        H2: () => g,
        Li: () => I,
        S7: () => m,
        a9: () => S,
        jy: () => _,
        nt: () => h,
        sd: () => u,
        tJ: () => p,
      });
      var r = n(57876),
        a = n(62792),
        o = n(81886),
        i = n(30894),
        s = n(16021),
        l = n(78327),
        d = n(36837),
        c = n(81393);
      function u(e) {
        return s.A.Get().BIsStoreItemMissing(e.id, (0, a.SW)(e.type));
      }
      function m(e, t, n) {
        const r = new Array();
        return (
          e?.forEach((e) => r.push({ id: e, type: "game" })),
          t?.forEach((e) => r.push({ id: e, type: "sub" })),
          n?.forEach((e) => r.push({ id: e, type: "bundle" })),
          r
        );
      }
      function p(e) {
        const t = s.A.Get().GetStoreItem(e.id, (0, a.SW)(e.type));
        return t?.GetBestPurchaseOption()?.discount_pct > 0;
      }
      function h(e) {
        if (!d.f.Get().GetHomeView()?.localized) return !0;
        const t = s.A.Get().GetStoreItem(e.id, (0, a.SW)(e.type));
        return i.Fm.Get().BIsAnyLanguageEnabled(
          t.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function g(e, t, n) {
        if (!e || 0 == e.length) return [];
        const r = e.filter((e) => (0, o.fp)(e.type)).map((e) => e.id),
          a = e.filter((e) => "sub" === e.type).map((e) => e.id),
          i = e.filter((e) => "bundle" === e.type).map((e) => e.id);
        {
          const e = r.filter((e) => !s.A.Get().BHasApp(e, t)),
            n = a.filter((e) => !s.A.Get().BHasApp(e, t)),
            o = i.filter((e) => !s.A.Get().BHasApp(e, t));
          (e.length > 0 || n.length > 0 || o.length > 0) &&
            (await Promise.all([
              s.A.Get().QueueMultipleAppRequests(e, t),
              s.A.Get().QueueMultiplePackageRequests(n, t),
              s.A.Get().QueueMultipleBundleRequests(o, t),
            ]));
        }
        const l = new Set();
        i?.forEach((e) => {
          const t = s.A.Get().GetBundle(e);
          t?.GetIncludedAppIDs().forEach((e) => l.add(e));
        }),
          a?.forEach((e) => {
            const t = s.A.Get().GetPackage(e);
            t?.GetIncludedAppIDs().forEach((e) => l.add(e));
          });
        const d = Array.from(l).filter((e) => !s.A.Get().BHasApp(e, t));
        if (
          (d.length > 0 && (await s.A.Get().QueueMultipleAppRequests(d, t)),
          r.forEach((e) => l.add(e)),
          n)
        ) {
          const e = Array.from(l)
            .map((e) => {
              const t = s.A.Get().GetApp(e);
              return t?.GetParentAppID()
                ? (l.add(t.GetParentAppID()), t.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((e) => !s.A.Get().BHasApp(e, t));
          e.length > 0 && (await s.A.Get().QueueMultipleAppRequests(e, t));
        }
        return Array.from(l).filter((e) => {
          const t = s.A.Get().GetApp(e);
          return t && !t.GetParentAppID();
        });
      }
      const _ = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function I(e) {
        const t = i.Fm.Get();
        (0, c.wT)(t.BIsLoaded(), "Dynamic Store not loaded");
        const n = e?.GetAllLanguagesWithSomeSupport() || [],
          r = d.f.Get().GetHomeView()?.localized;
        return (
          !e ||
          (0 == e.GetStoreItemType() &&
            (t.BIsGameIgnored(e.GetAppID()) ||
              t.BIsGameIgnored(e.GetParentAppID()))) ||
          t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
          t.BExcludeTagIDs(e.GetTagIDs()) ||
          e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)) ||
          (r &&
            !(
              0 == n.length ||
              e.BHasSomeLanguageSupport(0) ||
              t.BIsAnyLanguageEnabled(n)
            ))
        );
      }
      async function y(e, t, n, o) {
        let d = 0,
          c = 0;
        const u = [];
        await g(e, r.Xh, t);
        for (const r of e) {
          const e = s.A.Get().GetStoreItem(r.id, (0, a.SW)(r.type));
          if (!e) {
            d++;
            continue;
          }
          const l = e
            .GetIncludedAppIDs()
            .map((e) => s.A.Get().GetApp(e))
            .filter(Boolean);
          if ((l.push(e), t)) {
            const e = new Set(l.map((e) => e.GetParentAppID()).filter(Boolean)),
              t = Array.from(e)
                .map((e) => s.A.Get().GetApp(e))
                .filter(Boolean);
            t && l.push(...t);
          }
          l.some(o || I)
            ? (c++, n && (i.Fm.Get().BIsStoreItemOwned(e) || n.push(r)))
            : u.push(r);
        }
        return (
          "dev" === l.TS.WEB_UNIVERSE &&
            0 === u.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                d +
                " failed to load, " +
                c +
                " hidden by user filter.",
            ),
          u
        );
      }
      async function S(e, t, n, r, o, l, d) {
        let c = await y(
          e,
          t,
          d,
          o
            ? (e) =>
                !e ||
                i.Fm.Get().BExcludesContentDescriptor(
                  e.GetContentDescriptorIDs(),
                ) ||
                i.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
            : I,
        );
        const u = [];
        for (const e of c) {
          const t = s.A.Get().GetStoreItem(e.id, (0, a.SW)(e.type));
          if (!t) continue;
          const o = t?.GetIncludedAppIDsOrSelf();
          let c = !1;
          n && (c = c || o.every((e) => i.Fm.Get().BIsGameOwned(e))),
            r && (c = c || o.every((e) => i.Fm.Get().BIsGameWishlisted(e))),
            l && (c = c || o.every((e) => i.Fm.Get().BIsGameIgnored(e))),
            c ? d && d.push(e) : u.push(e);
        }
        return u;
      }
    },
    39700: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => i });
      var r = n(90626),
        a = n(52038),
        o = n(37999);
      function i(e) {
        const { size: t, color: n, trackColor: i } = e,
          s = { borderColor: i, borderLeftColor: n };
        if ("number" == typeof t) {
          const e = `${t}px`;
          (s.width = e),
            (s.height = e),
            (s.minHeight = e),
            (s.minWidth = e),
            (s.borderWidth = t / 10 + "px");
        }
        return r.createElement("div", {
          className: (0, a.A)(
            o.Loading,
            "small" == t && o.Small,
            ("medium" == t || !t) && o.Medium,
            "large" == t && o.Large,
          ),
          style: s,
        });
      }
    },
  },
]);
