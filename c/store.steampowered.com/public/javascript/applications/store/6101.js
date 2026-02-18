(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6101],
  {
    chunkid: (module) => {
      module.exports = {
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
    chunkid: (module) => {
      module.exports = {
        Loading: "_24C5lxFpKz_kHyuT-8GJKK",
        LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
        Small: "_2FPxEVbkMdVDAw1TLfl_B5",
        Medium: "_2FfWbZHeiT3_nRXH-pI7av",
        Large: "_30IMocjbXd0leP4E5U2Yrx",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
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
      function _() {
        return {
          width: 231,
          height: 87,
        };
      }
      class _ {
        m_setAlreadyAdded = new Set();
        Reset() {
          this.m_setAlreadyAdded = new Set();
        }
        BHasAppID(_) {
          return this.m_setAlreadyAdded.has("a" + _);
        }
        BHasPackageID(_) {
          return this.m_setAlreadyAdded.has("s" + _);
        }
        BHasBundleID(_) {
          return this.m_setAlreadyAdded.has("b" + _);
        }
        BHasStoreItemKey(_) {
          return this.m_setAlreadyAdded.has(
            this.ConvertStoreItemKeyToUniqueKey(_),
          );
        }
        AddStoreItemKey(_) {
          this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(_));
        }
        ConvertStoreItemKeyToUniqueKey(_) {
          switch (_.item_type) {
            default:
            case "app":
              return "a" + _._;
            case "sub":
              return "s" + _._;
            case "bundle":
              return "b" + _._;
          }
        }
      }
      const _ = 4;
      function _(_, _, _, _, _, _) {
        const _ = new Array(),
          _ = new Array(),
          _ = new Array(),
          _ = new Array();
        if (!_ || 0 == _.length) return _;
        const _ = [
          _._.k_RejectSupportedLanguage,
          _._.k_RejectAlreadyDisplayed,
          _._.k_RejectNoTrailer,
        ];
        for (let _ of _) {
          let _ = _._,
            _ = _._.k_NotRejected;
          switch (_.item_type) {
            case "sub":
              const _ = _._.Get().GetPackage(_);
              if (1 !== _?.GetIncludedAppIDs()?.length) {
                _ = _(_, _, _, !0);
                break;
              }
              _ = _.GetIncludedAppIDs()[0];
            case "app":
              _ = _(_, _, _, _, !0);
              break;
            case "bundle":
              _ = _(_, _, _, !0);
          }
          if (
            (_ == _._.k_NotRejected
              ? ((_.rejected = _._.k_NotRejected),
                _.push({
                  ..._,
                  priority: 1,
                }))
              : _.includes(_)
                ? ((_.rejected = _._.k_NotRejected), _.push(_))
                : ((_.rejected = _),
                  _ == _._.k_RejectIgnoredGame ? _.push(_) : _.push(_)),
            _.length > _)
          )
            break;
        }
        return (
          _.length < _ &&
            (_(_, _, _, 2),
            _.length < _ &&
              _.enforce_minimum &&
              (_(_, _, _, 3), _(_, _, _, _))),
          _
        );
      }
      function _(_, _, _, _) {
        for (let _ = 0; _.length < _ && _ < _.length; ++_)
          _.push({
            ..._[_],
            priority: _,
          });
      }
      function _(_, _) {
        const _ = _._.Get();
        if (
          _.only_current_platform &&
          __webpack_require__.BHasPlatformPreferenceSet()
        ) {
          if (
            !(
              (_.GetPlatforms()?.windows &&
                __webpack_require__.BIsPreferredPlatform("win")) ||
              (_.GetPlatforms()?.mac &&
                __webpack_require__.BIsPreferredPlatform("mac")) ||
              (_.GetPlatforms()?.steamos_linux &&
                __webpack_require__.BIsPreferredPlatform("linux"))
            )
          )
            return _._.k_RejectWrongPlatform;
        }
        return !_.prepurchase && _.BIsComingSoon()
          ? _._.k_RejectNoComingSoon
          : !_.virtual_reality && _.GetPlatforms()?.vr_support.vrhmd_only
            ? _._.k_RejectNoVR
            : _.GetAllCreatorClanIDs()?.some((_) =>
                  __webpack_require__.BIsIgnoringCurator(_),
                )
              ? _._.k_RejectCreatorClan
              : _._.k_NotRejected;
      }
      function _(_, _) {
        if (_.localized) {
          const _ = (0, _._)(_._.LANGUAGE);
          if (!_.GetAllLanguagesWithSomeSupport()?.includes(_))
            return _._.k_RejectSupportedLanguage;
        }
        return _._.k_NotRejected;
      }
      function _(_, _, _, _, _) {
        const _ = _._.Get().GetApp(_);
        if (!_) return _._.k_RejectNotLoaded;
        const _ = _(_, _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _._.Get();
        if (_.BIsGameIgnored(_)) return _._.k_RejectIgnoredGame;
        if (_.BExcludeTagIDs(_.GetTagIDs())) return _._.k_RejectIgnoreGameTags;
        if (_.BExcludesContentDescriptor(_.GetContentDescriptorIDs()))
          return _._.k_RejectIgnoreContentDescriptors;
        if (!_.early_access && _.BIsEarlyAccess())
          return _._.k_RejectEarlyAccess;
        const _ = _.GetAppType();
        return _.software || 6 != _
          ? _.games_already_in_library && _.BIsGameOwned(_)
            ? _._.k_RejectInLibrary
            : _.games_not_in_library && !_.BIsGameOwned(_)
              ? _._.k_RejectNotInLibrary
              : !_.video && [7, 8, 9].includes(_)
                ? _._.k_RejectVideo
                : _.has_discount && !_.GetBestPurchaseOption().discount_pct
                  ? _._.k_RejectNoDiscount
                  : "adultonly" != _ &&
                      _.no_ao_content &&
                      (_.HasContentDescriptorID(3) ||
                        _.HasContentDescriptorID(4))
                    ? _._.k_RejectAO
                    : 1 == _ &&
                        _.games_already_in_library &&
                        _.BIsGameOwned(_.GetParentAppID())
                      ? _._.k_RejectInLibrary
                      : _
                        ? (1 == _ && _.BHasAppID(_.GetParentAppID())) ||
                          _.BHasAppID(_)
                          ? _._.k_RejectAlreadyDisplayed
                          : _.has_trailer && !_.BHasTrailers(!1)
                            ? _._.k_RejectNoTrailer
                            : _(_, _)
                        : _._.k_NotRejected
          : _._.k_RejectSoftware;
      }
      function _(_, _) {
        const _ = _._.Get();
        let _ = !1;
        for (let _ of _) {
          if (__webpack_require__.BIsGameIgnored(_))
            return _._.k_RejectIgnoredGame;
          __webpack_require__.BIsGameOwned(_) && (_ = !0);
        }
        return _.games_not_in_library && _
          ? _._.k_RejectInLibrary
          : _.games_not_in_library && !_
            ? _._.k_RejectNotInLibrary
            : _._.k_NotRejected;
      }
      function _(_, _, _, _) {
        const _ = _._.Get().GetPackage(_);
        if (!_) return _._.k_RejectNotLoaded;
        const _ = _(_, _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _(_.GetIncludedAppIDs(), _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _._.Get();
        return _.games_already_in_library && _.BOwnsPackage(_)
          ? _._.k_RejectInLibrary
          : _.BIsPackageIgnored(_)
            ? _._.k_RejectIgnoredGame
            : _
              ? __webpack_require__.BHasPackageID(_)
                ? _._.k_RejectAlreadyDisplayed
                : _(_, _)
              : _._.k_NotRejected;
      }
      function _(_, _, _, _) {
        const _ = _._.Get().GetBundle(_);
        if (!_) return _._.k_RejectNotLoaded;
        const _ = _(_, _);
        if (_ != _._.k_NotRejected) return _;
        const _ = _(_.GetIncludedAppIDs(), _);
        return _ != _._.k_NotRejected
          ? _
          : _
            ? __webpack_require__.BHasBundleID(_)
              ? _._.k_RejectAlreadyDisplayed
              : _(_, _)
            : _._.k_NotRejected;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      class _ {
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
            _.s_globalSingletonStore ||
              ((_.s_globalSingletonStore = new _()),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_HomeViewSetting = _.s_globalSingletonStore)),
            _.s_globalSingletonStore
          );
        }
        constructor() {
          "dev" === _._.WEB_UNIVERSE && (window.g_HomeViewStore = this);
          const _ = (0, _._)("home_view_setting", "application_config");
          this.ValidateHomeViewData(_) && this.SetHomeViewSetting(_);
          const _ = (0, _._)(
            "home_view_setting_override",
            "application_config",
          );
          this.ValidateHomeViewDataOverride(_) &&
            this.SetHomeViewSettingOverride(_);
        }
        ValidateHomeViewData(_) {
          const _ = _;
          return (
            _ && "object" == typeof _.home && "object" == typeof _.main_cluster
          );
        }
        SetHomeViewSetting(_) {
          this.m_HomeView = _;
        }
        ValidateHomeViewDataOverride(_) {
          const _ = _;
          return (
            _ &&
            (!_.all || "object" == typeof _.all) &&
            (!_.maincap || "object" == typeof _.maincap)
          );
        }
        SetHomeViewSettingOverride(_) {
          this.m_HomeView.home = {
            ...this.m_HomeView.home,
            ..._?.all,
            ..._?.maincap,
          };
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _, _) {
        return {
          strId: "section-" + _,
          strSectionLabel: _,
          rtSectionStart: _,
          rtSectionEnd: _,
          bIsFutureSection: _ >= _,
          nRenderedHeight: 2500,
          nTopOffset: 0,
        };
      }
      class _ {
        m_nForwardStuckCount = 0;
        m_nBackwardStuckCount = 0;
        m_mapCalendarAppsByID = new Map();
        m_mapCalendarClansByID = new Map();
        m_mapCalendarEventsByGid = new Map();
        m_rgSortedCalendarEvents = new Array();
        m_visibilityStore;
        m_currentView = _._.box(null);
        m_bFinishedSearchingForward = !1;
        m_bFinishedSearchingBackward = !1;
        m_rgCalendarSections = [];
        m_rgFutureSections = [];
        m_dtInitTime;
        m_forwardRequestInFlight;
        m_backwardRequestInFlight;
        m_key;
        m_collectionMetaData = void 0;
        constructor(_, _) {
          (0, _._)(this),
            (this.m_key = _),
            (this.m_visibilityStore = new _._(_)),
            _._.Get().HintLoad();
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
            this.GetCollectionID() === _._.Featured ||
              (this.BIsGlobalCalendar() && !_._.accountid),
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
        BEventMatchCalendarSingleSource(_) {
          return (
            (this.BIsSingleAppCalendar() && this.m_key.appids[0] == _.appid) ||
            (this.BIsSingleGroupCalendar() &&
              this.m_key.clanaccountids[0] == _.clanid)
          );
        }
        BIsSingleSourceMuted() {
          return (
            !!this.BIsSingleSourceCalendar() &&
            (this.BIsSingleAppCalendar()
              ? _._.Get().BIsMutedAppID(this.GetSingleAppID())
              : _._.Get().BIsMutedClanID(this.GetSingleGroupID()))
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
        SetCollectionMetaData(_) {
          this.m_collectionMetaData = _;
        }
        GetCollectionMetaData() {
          return this.m_collectionMetaData;
        }
        BHasCollectionMetaData() {
          return Boolean(this.m_collectionMetaData);
        }
        ValidateCollectionMetadata(_) {
          const _ = _;
          return (
            _ &&
            "object" == typeof _ &&
            _.clanid &&
            "number" == typeof _.clanid &&
            _.clan_event_gid &&
            "string" == typeof _.clan_event_gid
          );
        }
        SetFilteredView(_, _) {
          const _ = this.m_currentView.get();
          _ && __webpack_require__.dispose();
          const _ = this.BIsSingleSourceMuted(),
            _ = new _(
              () => this.m_rgSortedCalendarEvents,
              this.LoadAdditionalEvents,
              this.BHitEventHorizon,
              _,
              _,
              _,
            );
          this.m_currentView.set(_);
        }
        BIsFilteredViewEmpty() {
          return !!this.m_currentView.get()?.BIsViewEmpty();
        }
        GetCalendarItemsInTimeRange(_, _) {
          const _ = this.m_currentView.get();
          return _
            ? __webpack_require__.GetCalendarItemsInTimeRange(_, _)
            : (console.error("calendar view not yet initialized"),
              {
                rgCalendarItems: [],
                bIsComplete: !1,
              });
        }
        GetActiveEventsAt(_) {
          const _ = this.m_currentView.get();
          return _
            ? _.GetActiveEventsAt(_)
            : (console.error("calendar view not yet initialized"), []);
        }
        GetCurrentlyLoadedEventCount(_, _) {
          return this.m_currentView.get()?.GetCurrentlyLoadedEventCount(_, _);
        }
        GetCurrentlyLoadedItemsForStats() {
          return this.m_currentView.get()?.GetCurrentlyLoadedEvents() || [];
        }
        GetCalendarSections(_) {
          return _ ? this.m_rgFutureSections : this.m_rgCalendarSections;
        }
        GetStoreInitializationTimestamp() {
          return (
            this.m_dtInitTime ||
              (this.m_dtInitTime = _._.GetTimeNowWithOverrideAsDate()),
            this.m_dtInitTime
          );
        }
        InitCalendarSections() {
          const _ = this.GetStoreInitializationTimestamp(),
            _ = [],
            _ = _.getTime() / 1e3;
          _.push(_(_, (0, _._)("#EventCalendar_FutureEventsHeader"), _));
          const _ = new Date(_);
          _.setHours(0, 0, 0, 1);
          let _ = _.getTime() / 1e3;
          _.push(_(_, (0, _._)("#Time_Today"), _, _)),
            _.setDate(_.getDate() - 1);
          let _ = _;
          (_ = _.getTime() / 1e3),
            _.push(_(_, (0, _._)("#Time_Yesterday"), _, _));
          const _ =
              this.m_rgSortedCalendarEvents[
                this.m_rgSortedCalendarEvents.length - 1
              ],
            _ = _ ? _.start_time : _;
          let _ = _ > _;
          for (let _ = 0; _ < 5 && !_; _++)
            _.setDate(_.getDate() - 1),
              (_ = _),
              (_ = _.getTime() / 1e3),
              _.push(_(_, (0, _._)(_), _, _)),
              (_ = _ > _);
          const _ = new Date(_);
          let _ = _;
          for (; _.getMonth() == _.getMonth() && 1 != _.getDate() && !_; ) {
            _.setDate(_.getDate() - 7);
            const _ = _.getTime() / 1e3;
            _.push(_(_, (0, _._)(_ - 1), _, _)), (_ = _ > _), (_ = _);
          }
          const _ = new Date(_);
          _.setHours(0, 0, 0, 1), _.setDate(1);
          let _ = _;
          for (let _ = 1; !_; _++) {
            const _ = new Date(_);
            _.setMonth(_.getMonth() - _, 1);
            const _ = _.getTime() / 1e3;
            _.push(_(_, (0, _._)(_), _, _)), (_ = _ > _), (_ = _);
          }
          this.m_rgCalendarSections.length > _.length
            ? this.m_rgCalendarSections.splice(
                _.length,
                this.m_rgCalendarSections.length,
              )
            : _.splice(this.m_rgCalendarSections.length, _.length).forEach(
                (_) => this.m_rgCalendarSections.push(_),
              );
        }
        InitFutureCalendarSections() {
          const _ = this.GetStoreInitializationTimestamp(),
            _ = [];
          let _;
          this.m_key.rtCalendarEnd && (_ = this.m_key.rtCalendarEnd);
          const _ =
            this.m_rgSortedCalendarEvents.length > 0 &&
            this.m_rgSortedCalendarEvents[0];
          _ && (_ = _.start_time), _ || (_ = _.getTime() / 1e3);
          const _ = _.getTime() / 1e3,
            _ = new Date(_);
          _.setHours(24, 0, 0, 0);
          let _ = _.getTime() / 1e3;
          _.push(
            _(
              _,
              (0, _._)(
                this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
              ),
              _,
              _,
            ),
          );
          let _ = _ <= _,
            _ = _;
          _.setDate(_.getDate() + 1),
            (_ = _.getTime() / 1e3),
            _ || _.push(_(_, (0, _._)("#Time_Tomorrow"), _, _)),
            (_ = _ <= _);
          const _ = 6 - _()(_).weekday();
          for (let _ = 2; _ <= _ && !_; _++) {
            _ = _;
            const _ = (0, _._)(_);
            _.setDate(_.getDate() + 1),
              (_ = _.getTime() / 1e3),
              _.push(_(_, _, _, _)),
              (_ = _ <= _);
          }
          if (this.m_key.bSectionByDay)
            for (; !_; ) {
              _ = _;
              const _ = (0, _._)(_);
              _.setDate(_.getDate() + 1),
                (_ = _.getTime() / 1e3),
                _.push(_(_, _, _, _)),
                (_ = _ <= _);
            }
          else {
            const _ = new Date(_);
            let _ = _;
            const _ = _()(_).daysInMonth();
            if (_.getMonth() == _.getMonth() && _.getDate() != _ && !_) {
              _.setDate(_.getDate() + 7);
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)("#EventCalendar_NextWeek"), _, _)),
                (_ = _ <= _),
                (_ = _);
            }
            const _ = new Date(_);
            let _;
            if (
              (_.setMonth(_.getMonth() + 1),
              _.setDate(1),
              _.setHours(0, 0, 0, 0),
              _ < _ && !_)
            ) {
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)("#EventCalendar_LaterThisMonth"), _, _)),
                (_ = _ <= _),
                (_ = _);
            } else _ = _;
            for (let _ = 2; !_; _++) {
              const _ = new Date(_);
              _.setMonth(_.getMonth() + _);
              const _ = _.getTime() / 1e3;
              _.push(_(_, (0, _._)(_), _, _)), (_ = _ <= _), (_ = _);
            }
          }
          this.m_rgFutureSections.length > _.length
            ? this.m_rgFutureSections.splice(
                _.length,
                this.m_rgFutureSections.length,
              )
            : _.splice(this.m_rgFutureSections.length, _.length).forEach((_) =>
                this.m_rgFutureSections.push(_),
              );
        }
        async RegisterCalendarEventsAndModels(_) {
          await _._.Get().HintLoad(),
            (0, _._)(() => {
              this.RegisterCalendarApps(_.apps),
                this.RegisterCalendarClans(_.clans),
                this.RegisterCalendarEvents(_.documents),
                _._.RegisterClanEvents(_.events),
                this.RegisterReadEvents(_.events_read),
                this.RegisterEventVotes(_.event_votes),
                _.forwardComplete && (this.m_bFinishedSearchingForward = !0),
                _.backwardComplete && (this.m_bFinishedSearchingBackward = !0),
                this.InitCalendarSections(),
                this.InitFutureCalendarSections(),
                this.SetCollectionMetaData(
                  this.ValidateCollectionMetadata(_.metadatainfo)
                    ? _.metadatainfo
                    : null,
                );
            });
        }
        RegisterCalendarApps(_) {
          if (_)
            for (const _ of _) {
              if (this.m_mapCalendarAppsByID.has(_.appid)) continue;
              const _ = new _._();
              (_.appid = _.appid),
                (_.source = _.source),
                (_.playtime = _.playtime),
                (_.last_played = _.last_played),
                (_.wishlist_added = _.wishlist_added),
                this.m_mapCalendarAppsByID.set(_.appid, _),
                _.hidden &&
                  this.m_visibilityStore.SetAppVisibility(_.appid, !1);
            }
        }
        RegisterCalendarClans(_) {
          if (_)
            for (const _ of _)
              if (!this.m_mapCalendarClansByID.has(_.clanid)) {
                const _ = new _._();
                (_.clanid = _.clanid),
                  (_.source = _.source),
                  this.m_mapCalendarClansByID.set(_.clanid, _),
                  _.hidden &&
                    this.m_visibilityStore.SetClanVisibility(_.clanid, !1);
              }
        }
        RegisterReadEvents(_) {
          if (!_) return;
          const _ = _._.Get();
          for (const _ of _) _.SetEventAsRead(_);
        }
        RegisterEventVotes(_) {
          if (!_) return;
          const _ = _._.Get();
          for (const _ of _) {
            const _ = void 0 === _.vote ? void 0 : Boolean(_.vote);
            _.SetVote(_._, _);
          }
        }
        RegisterCalendarEvents(_) {
          if (_) {
            let _ = !1;
            for (const _ of _)
              this.BInternalInsertCalendarEventItem(_) && (_ = !0);
            _ && this.RebuildSortedCalendarEventList();
          }
        }
        BHitEventHorizon(_) {
          return "forward" == _
            ? this.m_bFinishedSearchingForward
            : this.m_bFinishedSearchingBackward;
        }
        GetTimeEdgeForDirection(_, _ = void 0) {
          return "forward" === _
            ? this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[0].start_time
              : _
            : this.m_rgSortedCalendarEvents.length > 0
              ? this.m_rgSortedCalendarEvents[
                  this.m_rgSortedCalendarEvents.length - 1
                ].start_time
              : _;
        }
        UpdateStuckCounters(_, _) {
          const _ =
              "forward" === _
                ? this.m_bFinishedSearchingForward
                : this.m_bFinishedSearchingBackward,
            _ = this.GetTimeEdgeForDirection(_, void 0);
          return _ || _ !== _
            ? ("forward" == _
                ? (this.m_nForwardStuckCount = 0)
                : (this.m_nBackwardStuckCount = 0),
              !1)
            : ("forward" == _
                ? this.m_nForwardStuckCount++
                : this.m_nBackwardStuckCount++,
              !0);
        }
        GetRequestInFlight(_) {
          return "forward" === _
            ? this.m_forwardRequestInFlight
            : this.m_backwardRequestInFlight;
        }
        SetRequestInFlight(_, _) {
          (0, _._)(
            !_ || !this.GetRequestInFlight(_),
            "Already have a request in flight for",
            _,
          ),
            "forward" === _
              ? (this.m_forwardRequestInFlight = _)
              : (this.m_backwardRequestInFlight = _);
        }
        async LoadAdditionalEvents(_, _) {
          if (this.BHitEventHorizon(_)) return 1;
          let _ = this.GetRequestInFlight(_);
          if (_) return _;
          const _ =
              _._.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/",
            _ =
              "forward" === _
                ? this.m_nForwardStuckCount
                : this.m_nBackwardStuckCount,
            _ = _ < 3 ? _ : 0,
            _ = _ >= 3 ? 1 : 0,
            _ = ("dev" === _._.WEB_UNIVERSE ? 50 : 250) + 50 * _,
            _ = this.GetTimeEdgeForDirection(_, _._.GetTimeNowWithOverride()),
            _ = {
              minTime: 0,
              maxTime: 0,
              ascending: !0,
              maxResults: _,
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
          "forward" === _
            ? ((_.minTime = Math.floor(_ + _)), (_.ascending = !0))
            : ((_.maxTime = Math.floor(_ - _)), (_.ascending = !1));
          return (
            (_ = _()
              .get(_, {
                params: _,
                cancelToken: _ ? _.token : void 0,
                withCredentials: !0,
              })
              .then(async (_) => {
                if ((this.SetRequestInFlight(_, null), 1 == _.data.success)) {
                  if (
                    (await this.RegisterCalendarEventsAndModels(_.data),
                    this.UpdateStuckCounters(_, _))
                  )
                    return this.LoadAdditionalEvents(_, _);
                } else
                  console.error(
                    "LoadAdditionalEvents was not successful: Msg" + _.data.msg,
                  );
                return _.data.success;
              })
              .catch((_) => {
                this.SetRequestInFlight(_, null);
                let _ = (0, _._)(_);
                return (
                  console.error(
                    "LoadAdditionalEvents hit error " + _.strErrorMsg,
                    _,
                  ),
                  "forward" == _
                    ? (this.m_bFinishedSearchingForward = !0)
                    : (this.m_bFinishedSearchingBackward = !0),
                  2
                );
              })),
            this.SetRequestInFlight(_, _),
            _
          );
        }
        BInternalInsertCalendarEventItem(_) {
          if (!_.unique_id)
            return (
              (0, _._)(
                !1,
                "Attmpted to register a calendar event item with an invalid unique id!",
              ),
              !1
            );
          if (this.m_mapCalendarEventsByGid.has(_.unique_id)) return !1;
          const _ = this.m_mapCalendarAppsByID.get(_.appid),
            _ = this.m_mapCalendarClansByID.get(_.clanid);
          if (!_ && !_)
            return console.log("No AppInfo or ClanInfo For: ", _), !1;
          const _ = new _._();
          return (
            (_.clanid = _.clanid),
            (_.unique_id = _.unique_id),
            (_.event_type = _.event_type),
            (_.appid = _.appid),
            (_.start_time = _.start_time),
            (_.score = _.score),
            (_.appInfo = _),
            (_.clanInfo = _),
            this.m_rgSortedCalendarEvents.push(_),
            this.m_mapCalendarEventsByGid.set(_.unique_id, _),
            !0
          );
        }
        GetCalendarAppInfoForAppID(_) {
          return this.m_mapCalendarAppsByID.get(_);
        }
        RebuildSortedCalendarEventList() {
          const _ = this.m_rgSortedCalendarEvents.slice();
          this.m_rgSortedCalendarEvents = _.sort(
            (_, _) => _.start_time - _.start_time,
          );
        }
        async UpdateEventBlockFromCalendarEvent(_, _) {
          let _ = _.appInfo ? _.appid : void 0,
            _ = _.clanInfo ? _.clanInfo.clanid : void 0;
          null != _ || null != _
            ? (await _._.Get().UpdateCommunitionSetting(_, _, _),
              _._.RecordAppInteractionEvent(_, _._.k_eMuted))
            : (0, _._)(
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
      (0, _._)([_._], _.prototype, "m_mapCalendarAppsByID", void 0),
        (0, _._)([_._], _.prototype, "m_mapCalendarClansByID", void 0),
        (0, _._)([_._], _.prototype, "m_mapCalendarEventsByGid", void 0),
        (0, _._)([_._], _.prototype, "m_rgSortedCalendarEvents", void 0),
        (0, _._)([_._], _.prototype, "m_bFinishedSearchingForward", void 0),
        (0, _._)([_._], _.prototype, "m_bFinishedSearchingBackward", void 0),
        (0, _._)([_._], _.prototype, "m_rgCalendarSections", void 0),
        (0, _._)([_._], _.prototype, "m_rgFutureSections", void 0),
        (0, _._)([_._], _.prototype, "m_collectionMetaData", void 0),
        (0, _._)([_._], _.prototype, "InitCalendarSections", null),
        (0, _._)([_._], _.prototype, "InitFutureCalendarSections", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarEventsAndModels", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarApps", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarClans", null),
        (0, _._)([_._], _.prototype, "RegisterReadEvents", null),
        (0, _._)([_._], _.prototype, "RegisterEventVotes", null),
        (0, _._)([_._], _.prototype, "RegisterCalendarEvents", null),
        (0, _._)([_._], _.prototype, "BHitEventHorizon", null),
        (0, _._)([_._.bound], _.prototype, "LoadAdditionalEvents", null),
        (0, _._)([_._], _.prototype, "UpdateEventBlockFromCalendarEvent", null);
      class _ {
        m_rgLoadedEventsBox = _._.box([]);
        m_lastLoadLatch = null;
        m_fnGetUnfilteredEvents;
        m_fnLoadAdditionalEvents;
        m_fnBHitEventHorizon;
        m_fnBIsEventInView;
        m_bSkipStorePreferenceCheck;
        m_bAllowMutedAndIgnoredSources;
        m_rgAutorunDisposer;
        constructor(_, _, _, _, _, _) {
          (0, _._)(this),
            (this.m_fnGetUnfilteredEvents = _),
            (this.m_fnLoadAdditionalEvents = _),
            (this.m_fnBHitEventHorizon = _),
            (this.m_fnBIsEventInView = _),
            (this.m_bSkipStorePreferenceCheck = _),
            (this.m_bAllowMutedAndIgnoredSources = _),
            (this.m_rgAutorunDisposer = (0, _._)(async () => {
              const _ = this.viewFilteredEvents.slice();
              if (!this.m_bSkipStorePreferenceCheck) {
                const _ = Array.from(
                  new Set(_.map((_) => _.appid).filter(Boolean)),
                ).sort();
                if (
                  ((this.m_lastLoadLatch = _),
                  await _._.Get().QueueMultipleAppRequests(_, {
                    ..._._,
                    include_assets: !0,
                  }),
                  this.m_lastLoadLatch != _)
                )
                  return;
                this.m_lastLoadLatch = null;
              }
              this.m_rgLoadedEventsBox.set(_);
            }));
        }
        dispose() {
          this.m_rgAutorunDisposer();
        }
        get viewFilteredEvents() {
          return this.m_fnGetUnfilteredEvents().filter((_) =>
            this.m_fnBIsEventInView(_),
          );
        }
        get filteredAndCheckedEvents() {
          return this.m_rgLoadedEventsBox.get().filter((_) => {
            if (_.appid) {
              if (
                !this.m_bAllowMutedAndIgnoredSources &&
                (_._.Get().BIsMutedAppID(_.appid) ||
                  _._.Get().BIsGameIgnored(_.appid))
              )
                return !1;
              if (
                !this.m_bSkipStorePreferenceCheck &&
                (0, _._)(_._.Get().GetApp(_.appid))
              )
                return !1;
            } else if (
              !this.m_bAllowMutedAndIgnoredSources &&
              (_._.Get().BIsMutedClanID(_.clanid) ||
                _._.Get().BIsIgnoringCurator(_._.InitFromClanID(_.clanid)))
            )
              return !1;
            return !0;
          });
        }
        BIsCompleteThroughTime(_, _) {
          if (this.m_fnBHitEventHorizon(_)) return !0;
          const _ = this.m_fnGetUnfilteredEvents();
          return "forward" === _
            ? _ && _.length > 0 && _[0].start_time > _
            : _.length > 0 && _[_.length - 1].start_time < _;
        }
        async EnsureRangeIsLoaded(_, _) {
          for (
            let _ = 0;
            _ < 100 && !this.BIsCompleteThroughTime("forward", _);
            _++
          )
            await this.m_fnLoadAdditionalEvents("forward");
          for (
            let _ = 0;
            _ < 100 && !this.BIsCompleteThroughTime("backward", _);
            _++
          )
            await this.m_fnLoadAdditionalEvents("backward");
        }
        GetCalendarItemsInTimeRange(_, _) {
          this.EnsureRangeIsLoaded(_, _);
          const _ = this.filteredAndCheckedEvents.filter(
              (_) => _.start_time >= _ && (!_ || _.start_time < _),
            ),
            _ = this.BIsCompleteThroughTime("forward", _),
            _ = this.BIsCompleteThroughTime("backward", _);
          return {
            rgCalendarItems: _,
            bIsComplete: _ && _,
          };
        }
        GetCurrentlyLoadedEvents() {
          return this.filteredAndCheckedEvents;
        }
        GetCurrentlyLoadedEventCount(_, _) {
          let _ = 0;
          this.filteredAndCheckedEvents.forEach((_) => {
            _.start_time >= _ && (!_ || _.start_time < _) && _++;
          });
          const _ = this.BIsCompleteThroughTime("forward", _),
            _ = this.BIsCompleteThroughTime("backward", _);
          return {
            nCount: _,
            bIsComplete: _ && _,
          };
        }
        BIsViewEmpty() {
          return this.filteredAndCheckedEvents.length > 0;
        }
        GetActiveEventsAt(_) {
          return this.filteredAndCheckedEvents
            .map((_) => _._.GetClanEventModel(_.unique_id))
            .filter((_) => {
              if (_) {
                const _ = _.endTime || _.startTime + 3600;
                return _ >= _.startTime && _ < _;
              }
              return !1;
            });
        }
      }
      (0, _._)([_._.struct], _.prototype, "viewFilteredEvents", null),
        (0, _._)([_._.struct], _.prototype, "filteredAndCheckedEvents", null);
      const _ = _._.box(null),
        _ = new Map();
      function _(_, _) {
        let _ = "";
        return (
          _.appids &&
            _.appids.length > 0 &&
            (_ += "appids:" + _.appids.sort().join(",")),
          _.clanaccountids &&
            _.clanaccountids.length > 0 &&
            (_ += "clanids:" + _.clanaccountids.sort().join(",")),
          _.collectionid && (_ += "collection:" + _.collectionid),
          _.saleid && (_ += "sale:" + _.saleid),
          _.bSectionByDay && (_ += "_sectionbyday"),
          _.rtCalendarEnd && (_ += "_end:" + _.rtCalendarEnd),
          _.rgTags &&
            _.rgTags.length > 0 &&
            (_ += "_tags:" + _.rgTags.slice().sort().join(",")),
          _.hubtype &&
            (_ +=
              "_hubtype:" +
              _.hubtype +
              "_" +
              _.category_or_language +
              "_" +
              _.tag_name),
          _.get() !== _ && (_.set(_), _.has(_) || _.set(_, new _(_, _))),
          _
        );
      }
      function _() {
        return null == _.get() && _({}), _.get(_.get());
      }
      function _() {
        return null !== _.get();
      }
      window.g_EventCalendarMap = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_.Default = "default"),
          (_.Upcoming = "upcoming"),
          (_.Featured = "featured"),
          (_.Press = "press"),
          (_.Steam = "steam"),
          (_.Halloween = "halloween"),
          (_.Dev_Sales = "sales"),
          (_.Dev_All = "all"),
          (_.Dev_AssociatedPress = "associated_press");
      })(_ || (_ = {}));
      const _ = new Map();
      function _(_) {
        return (
          0 == _.size &&
            (function () {
              const _ = (0, _._)();
              _.set(_.Default, {
                _: _.Default,
                strUrl: `${_}/`,
                strName: (0, _._)("#EventCalendar_NewsChannel_YourNews"),
                strSubtitle: (0, _._)(
                  "#EventCalendar_NewsChannel_Personalized",
                ),
                strHeaderTitle: (0, _._)(
                  "#EventCalendar_NewsChannel_YourNews_HeaderTitle",
                ),
              }),
                _.set(_.Upcoming, {
                  _: _.Upcoming,
                  strUrl: `${_}/?upcoming=1`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Upcoming"),
                  strShortName: (0, _._)(
                    "#EventCalendar_NewsChannel_UpcomingShort",
                  ),
                  strSubtitle: (0, _._)(
                    "#EventCalendar_NewsChannel_Personalized",
                  ),
                }),
                _.set(_.Featured, {
                  _: _.Featured,
                  strUrl: `${_}/collection/featured/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Featured"),
                  strSubtitle: (0, _._)(
                    "#EventCalendar_NewsChannel_TopSellers",
                  ),
                  strHeaderTitle: (0, _._)(
                    "#EventCalendar_NewsChannel_Featured_HeaderTitle",
                  ),
                }),
                _.set(_.Press, {
                  _: _.Press,
                  strUrl: `${_}/collection/press/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Press"),
                  strHeaderTitle: (0, _._)(
                    "#EventCalendar_Collection_News_Title",
                  ),
                  strHeaderSubtitle: (0, _._)(
                    "#EventCalendar_Collection_News_Subtitle",
                  ),
                }),
                _.set(_.Steam, {
                  _: _.Steam,
                  strUrl: `${_}/collection/steam/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Steam"),
                  strSubtitle: (0, _._)(
                    "#EventCalendar_NewsChannel_SteamSubtitle",
                  ),
                  strHeaderTitle: (0, _._)(
                    "#EventCalendar_NewsChannel_Steam_HeaderTitle",
                  ),
                }),
                _.set(_.Halloween, {
                  _: _.Halloween,
                  strUrl: `${_}/collection/halloween/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_Halloween"),
                  strSubtitle: (0, _._)(
                    "#EventCalendar_NewsChannel_HalloweenSubtitle",
                  ),
                  strHeaderTitle: (0, _._)(
                    "#EventCalendar_Collection_Halloween_Title",
                  ),
                  strHeaderSubtitle: (0, _._)(
                    "#EventCalendar_Collection_Halloween_Subtitle",
                  ),
                }),
                _.set(_.Dev_Sales, {
                  _: _.Dev_Sales,
                  strUrl: `${_}/collection/sales/`,
                  strName: (0, _._)("#EventCalendar_NewsChannel_AllSales"),
                }),
                _._.is_support &&
                  (_.set(_.Dev_All, {
                    _: _.Dev_All,
                    strUrl: `${_}/collection/all/`,
                    strName: (0, _._)("#EventCalendar_NewsChannel_All"),
                    bIsValveOnly: !0,
                  }),
                  _.set(_.Dev_AssociatedPress, {
                    _: _.Dev_AssociatedPress,
                    strUrl: `${_}/collection/associated_press/`,
                    strName: (0, _._)(
                      "#EventCalendar_NewsChannel_AssociatedPress",
                    ),
                    bIsValveOnly: !0,
                  }));
            })(),
          _.get(_)
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_mapBlockedAppIds = new Map();
        m_mapBlockedClanIds = new Map();
        static s_globalSingletonStore;
        static Get() {
          return (
            _.s_globalSingletonStore ||
              ((_.s_globalSingletonStore = new _()),
              _.s_globalSingletonStore.Init()),
            _.s_globalSingletonStore
          );
        }
        GetMutedSourceCount() {
          return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
        }
        Init() {
          const _ = (0, _._)("mutedcomminfo", "application_config");
          this.ValidateStoreDefault(_) &&
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CMutedCommunicationStore loading bundles payload: " +
                  JSON.stringify(_),
              ),
            _.appids &&
              _.appids.forEach((_) => this.m_mapBlockedAppIds.set(_, !0)),
            _.clanids &&
              _.clanids.forEach((_) => this.m_mapBlockedClanIds.set(_, !0)));
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !(!_ || "object" != typeof _) &&
            ((Array.isArray(_.appids) && _.appids.length > 0) ||
              (Array.isArray(_.clanids) && _.clanids.length > 0))
          );
        }
        BIsEventBlocked(_) {
          return _.appid
            ? this.m_mapBlockedAppIds.has(_.appid)
            : !!_.clanInfo && this.m_mapBlockedClanIds.has(_.clanInfo.clanid);
        }
        BIsMutedAppID(_) {
          return this.m_mapBlockedAppIds.has(_);
        }
        BIsMutedClanID(_) {
          return this.m_mapBlockedClanIds.has(_);
        }
        async UpdateCommunitionSetting(_, _, _) {
          const _ = _._.STORE_BASE_URL + "account/optoutappcommunication/",
            _ = new FormData();
          if (
            (_.append("sessionid", _._.SESSIONID),
            _.append("allowCommunication", _ ? "1" : "0"),
            _)
          ) {
            if (
              (!_ && this.m_mapBlockedAppIds.has(_)) ||
              (_ && !this.m_mapBlockedAppIds.has(_))
            )
              return !0;
            _
              ? this.m_mapBlockedAppIds.delete(_)
              : this.m_mapBlockedAppIds.set(_, !0),
              _.append("appId", _.toString());
          } else {
            if (!_)
              return (
                (0, _._)(
                  !1,
                  "BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
                ),
                !1
              );
            if (
              (!_ && this.m_mapBlockedClanIds.has(_)) ||
              (_ && !this.m_mapBlockedClanIds.has(_))
            )
              return !0;
            _
              ? this.m_mapBlockedClanIds.delete(_)
              : this.m_mapBlockedClanIds.set(_, !0),
              _.append("clanId", __webpack_require__.toString());
          }
          try {
            return 1 == (await _().post(_, _)).data.success;
          } catch (_) {
            return (
              console.error(
                "Blocking app id hit error " + (0, _._)(_).strErrorMsg,
              ),
              !1
            );
          }
        }
      }
      (0, _._)([_._], _.prototype, "m_mapBlockedAppIds", void 0),
        (0, _._)([_._], _.prototype, "m_mapBlockedClanIds", void 0);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { children: _, ...__webpack_require__ } = _,
          _ = _.useRef(null);
        return _.createElement(
          _._,
          {
            nodeRef: _,
            ...__webpack_require__,
          },
          _.children(_),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
        const { closeModal: _ } = _;
        return _.createElement(_._, {
          strTitle: (0, _._)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_Title",
          ),
          strDescription: (0, _._)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_Description",
          ),
          strOKButtonText: (0, _._)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton",
          ),
          strCancelButtonText: (0, _._)(
            "#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton",
          ),
          onOK: () => {
            (0, _._)().m_visibilityStore.SetGameSourceAllowed(
              _._.k_ECurator,
              !0,
            ),
              _();
          },
          onCancel: () => {
            (0,
            _._)().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(
              !0,
            ),
              _();
          },
        });
      });
      function _(_) {
        _ ||
          ((0, _._)() &&
            ((0,
            _._)().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
              (0, _._)().m_visibilityStore.BIsGameSourceAllowed(
                _._.k_ECurator,
              ) ||
              (0, _._)(_.createElement(_, null), window)));
      }
      function _() {
        return (
          !!_._.Get().BIsUserLoggedIn() ||
          ((0, _._)(
            _.createElement(_._, {
              strTitle: (0, _._)("#EventDisplay_Share_NotLoggedIn"),
              strDescription: (0, _._)(
                "#EventDisplay_Share_NotLoggedIn_Description",
              ),
              strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
              onOK: () => (0, _._)(),
            }),
            window,
          ),
          !1)
        );
      }
      function _(_) {
        const _ = _._.InitFromClanID(_),
          _ = _._.Get().GetPartnerEventPermissions(_);
        return (
          !_ ||
          !_.limited_user ||
          ((0, _._)(_.createElement(_._, null), window), !1)
        );
      }
      async function _(_) {
        if (_() && _(_)) {
          let _ = _._.InitFromClanID(_),
            _ = _._.Get().BIsFollowingCurator(_);
          await _._.Get().UpdateFollowOrIgnoreCurator(_, !0, !_), _(_);
        }
      }
      const _ = (_) => {
          const {
            className: _,
            bIgnored: __webpack_require__,
            bApplyingFollowing: _,
            bFollowing: _,
            onFollowClick: _,
            followType: _,
          } = _;
          if (!_._.bIsFollowingEnabled) return null;
          let _ = null;
          switch (_) {
            case "app":
              _ = (0, _._)("#text_store_follow_desc");
              break;
            case "creatorhome":
              _ = (0, _._)("#CreatorHome_Follow_tooltip");
              break;
            case "steamcurator":
              _ = (0, _._)("#steam_curator_follow_ttip");
              break;
            case "group":
              _ = (0, _._)("#steam_group_follow_ttip");
          }
          return _
            ? _.createElement(
                _._,
                {
                  toolTipContent: __webpack_require__ || _ ? void 0 : _,
                },
                _.createElement(
                  _._,
                  {
                    className: (0, _._)(
                      _.Button,
                      _.FollowButton,
                      "FollowButton",
                      _,
                      _ ? "Followed" : "",
                    ),
                    onClick: _,
                  },
                  _ &&
                    _.createElement(_._, {
                      size: 15,
                    }),
                  !_ &&
                    (_ || __webpack_require__) &&
                    _.createElement(_.Jlk, null),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_.FollowBtnText, "FollowBtnText"),
                    },
                    !_ &&
                      (_
                        ? (0, _._)("#Button_Followed")
                        : __webpack_require__
                          ? (0, _._)("#Button_Ignored")
                          : (0, _._)("#Button_Follow")),
                  ),
                ),
              )
            : (console.error("CommonFollowButton unexpected type", _), null);
        },
        _ = (_) => {
          const { followType: _ } = _,
            [__webpack_require__, _] = _.useState(!1),
            { clanAccountID: _, className: _ } = _,
            _ = _._.InitFromClanID(_),
            [_, _] = (0, _._)(_),
            _ = (0, _._)(() => _._.Get().BIsFollowingCurator(_)),
            _ = (0, _._)(() => !_ && _._.Get().BIsIgnoringCurator(_));
          return _.createElement(_, {
            className: _,
            bIgnored: _,
            bFollowing: _,
            bApplyingFollowing: __webpack_require__,
            onFollowClick: () => {
              const { clanAccountID: _ } = _;
              _() &&
                _(_) &&
                (_(!0),
                (() => {
                  const { clanAccountID: _, creatorID: __webpack_require__ } =
                      _,
                    _ = _._.InitFromClanID(_),
                    _ = _._.Get().BIsFollowingCurator(_),
                    _ = !_ && _._.Get().BIsIgnoringCurator(_);
                  _._.Get()
                    .UpdateFollowOrIgnoreCurator(_, !_, !(_ || _))
                    .then((_) => {
                      if (__webpack_require__) {
                        let _ = _._.GetCreatorHomeByID(__webpack_require__);
                        _ || _.AdjustFollower(_ ? -1 : 1);
                      }
                      _(!1);
                    })
                    .then(() => {
                      _(_);
                    })
                    .catch((_) => {
                      _(!1);
                      let _ = (0, _._)(_);
                      console.error(
                        "CuratorFollowButton hit error: " + _.strErrorMsg,
                        _,
                      );
                    });
                })());
            },
            followType:
              _ ?? (_?.is_creator_home ? "creatorhome" : "steamcurator"),
          });
        },
        _ = (_) => {
          const [_, __webpack_require__] = _.useState(!1),
            { appid: _, className: _ } = _,
            _ = _._.Get().BFollowsApp(_),
            _ = !_ && _._.Get().BIsGameIgnored(_);
          return _.createElement(_, {
            className: _,
            bIgnored: _,
            bFollowing: _,
            bApplyingFollowing: _,
            onFollowClick: () => {
              _() &&
                (__webpack_require__(!0),
                (() => {
                  const { appid: _ } = _,
                    _ = _._.Get().BFollowsApp(_),
                    _ = !_ && _._.Get().BIsGameIgnored(_);
                  _._.Get()
                    .UpdateFollowingApp(_, !(_ || _))
                    .then(() => {
                      __webpack_require__(!1);
                    })
                    .catch((_) => {
                      __webpack_require__(!1);
                      const _ = (0, _._)(_);
                      console.error(
                        "AppFollowButton hit error: " + _.strErrorMsg,
                        _,
                      );
                    });
                })());
            },
            followType: "app",
          });
        };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "DEBUG_UseNewGameHover";
      function _() {
        return window.sessionStorage?.getItem(_) || "default";
      }
      window.SetHoverPresentation = function (_) {
        window.sessionStorage.setItem(_, _);
      };
      const _ = 2e3;
      function _(_, _, _, _) {
        const _ = [];
        if (1 == _.length) {
          const _ = _._.Get().GetApp(_[0]),
            _ = _?.GetMicroTrailer(_);
          _ &&
            _ &&
            _.push({
              rctImage: _.createElement(_._, {
                _: {
                  appid: _.GetID(),
                },
                active: !0,
              }),
              nDurationMs: 5500,
            });
          _.GetScreenshots(_)
            .slice(0, 10)
            .forEach((_, _) => {
              _.push({
                rctImage: _.createElement("img", {
                  key: _,
                  className: _().FullDivImage,
                  loading: "lazy",
                  src: _,
                  alt: "screenshot " + (_ + 1),
                }),
                nDurationMs: _,
              });
            });
        }
        if (0 == _.length)
          for (const _ of _) {
            const _ = _._.Get().GetApp(_),
              _ = _?.GetAssets()?.GetMainCapsuleURL();
            _ &&
              _.push({
                rctImage: _.createElement("img", {
                  key: "fallback",
                  className: _().FullDivImage,
                  loading: "lazy",
                  src: _,
                  alt: _.GetName(),
                }),
                nDurationMs: _,
              });
          }
        _.length > 0
          ? (_(_), __webpack_require__(!0))
          : ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
            console.error(
              "DEV ONLY OUTPUT: GameHoverImages for id/type no images: (might be not age safe screenshots)",
              (0, _._)(_),
            );
      }
      function _(_) {
        const { info: _ } = _,
          _ = (0, _.useRef)({
            include_assets: !0,
            include_trailers: !0,
            include_screenshots: !0,
          }),
          [_, _] = (0, _._)(_._, (0, _._)(_.type), _.current),
          _ = (0, _.useRef)(_),
          [_, _] = (0, _.useState)([]),
          _ = (0, _.useRef)(0),
          _ = (0, _._)(),
          [_] = _.useState(new _._()),
          _ = (0, _._)(),
          _ = (0, _.useCallback)(
            (_ = !1) => {
              if ((_ && (_.current = 0), _?.length > 0)) {
                const _ = _[_.current].nDurationMs;
                _.Schedule(_, () => {
                  const _ = _.current;
                  (_.current = (_.current + 1) % _.length),
                    _ != _.current && (_(), _());
                });
              }
            },
            [_, _, _],
          );
        return (
          (0, _.useEffect)(
            () => (
              !_ || (_ && 0 != _.length && _.current === _)
                ? 2 == _ && 0 == _.length
                  ? _([
                      {
                        rctImage: _.createElement("img", {
                          key: "default",
                          className: _().FullDivImage,
                          loading: "lazy",
                          src: (0, _._)(_._),
                          alt: "default",
                        }),
                        nDurationMs: _,
                      },
                    ])
                  : _?.length && _()
                : ((_.current = _),
                  2 == _.GetStoreItemType() || 1 == _.GetStoreItemType()
                    ? ((0, _._)(
                        _.GetIncludedAppIDs().length > 0,
                        "expected included apps " +
                          _.GetID() +
                          " " +
                          _.GetStoreItemType(),
                      ),
                      _._.Get()
                        .QueueMultipleAppRequests(_.GetIncludedAppIDs(), {
                          include_assets: !0,
                        })
                        .then(() => _(_.GetIncludedAppIDs(), _, _, _)))
                    : 1 == _.GetAppType() &&
                        _.GetParentAppID() &&
                        !_.GetAllTrailers().BHasTrailers(_)
                      ? _._.Get()
                          .QueueAppRequest(_.GetParentAppID(), _.current)
                          .then(() =>
                            (function (_, _, _, _, _) {
                              const _ = [],
                                _ = _._.Get().GetApp(_),
                                _ = _?.GetMicroTrailer(_);
                              _ &&
                                _ &&
                                _.push({
                                  rctImage: _.createElement(_._, {
                                    _: {
                                      appid: _.GetID(),
                                    },
                                    active: !0,
                                  }),
                                  nDurationMs: 5500,
                                });
                              const _ = _._.Get().GetApp(_).GetScreenshots(_);
                              _.slice(0, 10).forEach((_, _) => {
                                _.push({
                                  rctImage: _.createElement("img", {
                                    key: _,
                                    className: _().FullDivImage,
                                    loading: "lazy",
                                    src: _,
                                    alt: "screenshot " + (_ + 1),
                                  }),
                                  nDurationMs: _,
                                });
                              }),
                                10 - _.length > 0 &&
                                  _.GetScreenshots(_)
                                    .slice(0, 10)
                                    .forEach((_, _) => {
                                      _.push({
                                        rctImage: _.createElement("img", {
                                          key: _,
                                          className: _().FullDivImage,
                                          loading: "lazy",
                                          src: _,
                                          alt: "screenshot " + (_ + 1),
                                        }),
                                        nDurationMs: _,
                                      });
                                    }),
                                _.length > 0
                                  ? (__webpack_require__(_), _(!0))
                                  : ("dev" != _._.WEB_UNIVERSE &&
                                      "beta" != _._.WEB_UNIVERSE) ||
                                    console.error(
                                      "DEV ONLY OUTPUT: Demo GameHoverImages for id/type no images: (might be not age safe screenshots)",
                                      _,
                                      _,
                                    );
                            })(_.GetID(), _.GetParentAppID(), _, _, _),
                          )
                      : _([_.GetID()], _, _, _)),
              () => _.Cancel()
            ),
            [_, _, _, _, _, _, _],
          ),
          _.createElement(
            "div",
            {
              className: _().TrailerCtn,
            },
            _?.map((_, _) =>
              _.createElement(
                "div",
                {
                  key: "e-" + _ + "-" + _._ + "_" + _.type,
                  className: (0, _._)(
                    _().FullDivImage,
                    _ != _.current && _().Transparent,
                  ),
                },
                _.rctImage,
              ),
            ),
          )
        );
      }
      function _(_) {
        const { rgTagIDs: _ } = _;
        return _.createElement(
          "div",
          {
            className: _().TagRow,
          },
          _.createElement(
            "div",
            {
              className: _().Tags,
            },
            _.map((_) =>
              _.createElement(_._, {
                key: "tag_" + _,
                tagid: _,
                className: _().Tag,
              }),
            ),
          ),
        );
      }
      const _ = (0, _._)(function (_) {
        const { appID: _, snr: __webpack_require__, classOverride: _ } = _,
          [_] = (0, _._)(_, {}),
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)("GameHoverIgnoreButton"),
          _ = _ && _._.Get().BIsGameIgnored(_);
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().IgnoreButton, _),
            onClick: async (_) => {
              _.preventDefault(),
                _.stopPropagation(),
                _._.logged_in
                  ? (_(!0),
                    await _._.Get().UpdateAppIgnore(_, !_, __webpack_require__),
                    _.token.reason || _(!1))
                  : (0, _._)();
            },
          },
          _.createElement(_.NtH, null),
          _.createElement(
            "div",
            {
              className: (0, _._)(
                _().IgnoreButtonText,
                _ && _().IgnoreLoadingText,
              ),
            },
            (0, _._)(_ ? "#Sale_RemoveFromIgnored" : "#Sale_Ignore"),
          ),
        );
      });
      function _(_) {
        const {
            appID: _,
            classOverride: __webpack_require__,
            styleOverride: _,
          } = _,
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)("GameHoverIgnoreButton"),
          _ = (0, _._)(() => _ && _._.Get().BIsFollowingCurator(_));
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().IgnoreButton, __webpack_require__),
            onClick: async (_) => {
              _.preventDefault(),
                _.stopPropagation(),
                _._.logged_in
                  ? (_(!0),
                    await _._.Get().UpdateFollowingApp(_, !_),
                    _.token.reason || _(!1))
                  : (0, _._)();
            },
            style: _,
          },
          _ ? _.createElement(_.pPV, null) : _.createElement(_.c9e, null),
          _.createElement(
            "div",
            {
              className: (0, _._)(
                _().IgnoreButtonText,
                _ && _().IgnoreLoadingText,
                "FollowGameButton",
              ),
            },
            (0, _._)(_ ? "#Sale_StopFollowingGame" : "#Sale_FollowGame"),
          ),
        );
      }
      function _(_) {
        const {
            nCreatorAccountID: _,
            classOverride: __webpack_require__,
            styleOverride: _,
            followType: _,
          } = _,
          [_, _] = (0, _._)(_),
          { creatorHome: _ } = (0, _._)(_);
        return _.createElement(
          "div",
          {
            className: (0, _._)(
              _().GameHoverCreatorFollowButtonCtn,
              __webpack_require__,
            ),
            style: _,
          },
          _.createElement(
            "a",
            {
              href: _?.GetCreatorHomeURL("developer"),
            },
            _.createElement("img", {
              src: _ ? (0, _._)(null, "medium") : _.avatar_medium_url,
            }),
          ),
          _.createElement(_._, {
            clanAccountID: _,
            followType: _,
          }),
        );
      }
      function _(_) {
        const {
            info: _,
            displayInfo: __webpack_require__,
            name: _,
            strStoreUrl: _,
            elElementToAppend: _,
            bShowDemoButton: _,
            bHideBottomHalf: _,
            bHidePrice: _,
            bShowDeckCompatibilityDialog: _,
            bUseSubscriptionLayout: _,
            nCreatorAccountID: _,
            bPreventNavigation: _,
            bShowDescription: _,
          } = _,
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(""),
          _ = (0, _._)(_),
          [_] = (0, _._)(_._, (0, _._)(_.type), {
            include_release: !0,
            include_platforms: !0,
            include_reviews: !0,
            include_tag_count: 20,
          }),
          [_] = (0, _._)(
            __webpack_require__._,
            (0, _._)(__webpack_require__.type),
            {
              include_assets: !0,
            },
          ),
          _ = !_ && !_ && !_,
          _ = 0 == _?.GetStoreItemType();
        return _.createElement(
          "div",
          {
            className: _().BottomShelf,
            style: {
              transform: _ && _ ? _ : "",
            },
            onMouseEnter: () => _(!0),
            onFocus: () => _(!0),
            onMouseLeave: () => _(!1),
            onBlur: () => _(!1),
          },
          _.createElement(
            "a",
            {
              href: _ ? void 0 : _,
              className: _().Midline,
            },
            Boolean(_) &&
              _.createElement(
                "div",
                {
                  className: _().CapsuleImageAnchorPoint,
                },
                _.createElement(
                  "div",
                  {
                    className: (0, _._)(
                      _().CapsuleImageCtn,
                      _().WithCornerShine,
                    ),
                  },
                  _.createElement("img", {
                    loading: "lazy",
                    src: _?.GetAssets().GetHeaderURL(),
                    alt: _?.GetName(),
                  }),
                ),
              ),
            Boolean(!_ && !_) &&
              _.createElement(
                "div",
                {
                  className: _().Price,
                },
                _.createElement(_._, {
                  _: _,
                  onlyOneDiscountPct: !0,
                }),
              ),
          ),
          _.createElement(
            "div",
            {
              className: _().BottomShelfOffScreen,
              ref: (_) => _(`translateY( -${_?.clientHeight || 0}px )`),
            },
            _.createElement(
              "div",
              {
                className: _().TextContent,
              },
              _.createElement(
                "a",
                {
                  href: _ ? null : _,
                },
                _.createElement(
                  "div",
                  {
                    className: _().GameTitle,
                  },
                  _?.GetName() || _,
                ),
              ),
              _ &&
                _.createElement(
                  "div",
                  {
                    className: _().ShortDescription,
                  },
                  _?.GetShortDescription(),
                ),
              Boolean(_) &&
                _.createElement(_, {
                  rgTagIDs: _.GetTagIDs(),
                }),
              Boolean(!_ && _) &&
                _.createElement(_._, {
                  _: _,
                }),
              Boolean(!_ && _) &&
                _.createElement(
                  "div",
                  {
                    className: _().ReviewsAndRelease,
                  },
                  _.createElement(_._, {
                    _: _,
                    strClassName: _().PlatformDisplay,
                  }),
                  Boolean(_?.GetFormattedSteamReleaseDate()) &&
                    _.createElement(
                      "div",
                      {
                        className: _().ReleaseDate,
                      },
                      _?.GetFormattedSteamReleaseDate(),
                    ),
                ),
              _ &&
                _.createElement(_._, {
                  _: _,
                  className: _().DemoButton,
                }),
              Boolean(_ && _) &&
                _.createElement(_._, {
                  _: _,
                }),
              Boolean(_) && _,
              Boolean(_ && _) &&
                _.createElement(_._, {
                  appid: _._,
                  bIsMuted: !1,
                }),
              _ &&
                _.createElement(_, {
                  nCreatorAccountID: _,
                }),
            ),
          ),
        );
      }
      const _ = (0, _._)(function (_) {
        _.useEffect(() => {
          _._.Get().HintLoad();
        }, []);
        const {
            info: _,
            displayInfo: __webpack_require__,
            strStoreUrl: _,
            bHideBottomHalf: _,
            bShowDeckCompatibilityDialog: _,
            bShowWishlistButton: _ = !0,
            bShowIgnoreButton: _ = !1,
          } = _,
          _ = (0, _._)(__webpack_require__._);
        let _;
        return (
          _.overrideNavigation && (_ = (_) => _.overrideNavigation()),
          _.createElement(
            "div",
            {
              className: (0, _._)(
                _().GameHoverCapsuleCtn,
                _().InGameHover,
                _ && _().UseHidingBottomHalf,
              ),
              onClick: _,
            },
            _.createElement(
              "a",
              {
                href: _ ? null : _,
                className: _().TrailerAnchorStoreLink,
              },
              Boolean(_ && !_ && !_) &&
                _.createElement(_._, {
                  _: _,
                  snr: _.strSNR,
                }),
              Boolean(_ && !_ && !_) &&
                _.createElement(_, {
                  appID: __webpack_require__._,
                  snr: _.strSNR,
                }),
              _.createElement(_, {
                info: __webpack_require__,
              }),
            ),
            _.createElement(_, {
              ..._,
              bPreventNavigation: Boolean(_),
            }),
          )
        );
      });
      function _(_) {
        return _
          ? "appid" in _
            ? {
                type: "game",
                _: _.appid,
              }
            : "bundleid" in _
              ? {
                  type: "bundle",
                  _: _.bundleid,
                }
              : "packageid" in _
                ? {
                    type: "sub",
                    _: _.packageid,
                  }
                : {
                    type: "game",
                    _: _._,
                  }
          : {
              type: "game",
              _: _._,
            };
      }
      function _(_) {
        return "appid" in _
          ? {
              _: _.appid,
            }
          : "packageid" in _
            ? {
                type: "sub",
                _: _.packageid,
              }
            : "bundleid" in _
              ? {
                  type: "bundle",
                  _: _.bundleid,
                }
              : void (0, _._)(
                  !1,
                  `unhandled item id type: ${JSON.stringify(_)}`,
                );
      }
      const _ = 150;
      function _(_) {
        const {
            item: _,
            name: __webpack_require__,
            bPreventNavigation: _,
            elElementToAppend: _,
            bShowDemoButton: _,
            bPreferDemoStorePage: _,
            bHidePrice: _,
            bUseSubscriptionLayout: _,
            strExtraParams: _,
            children: _,
            nCreatorAccountID: _,
            nWidthMultiplier: _,
            bShowDeckCompatibilityDialog: _,
            bShowWishlistButton: _ = !0,
            bShowIgnoreButton: _ = !1,
            bShowDescription: _ = !1,
            ..._
          } = _,
          [_] = (0, _._)(_._, (0, _._)(_.type), {}),
          _ = (0, _._)(),
          _ = (0, _._)(_),
          _ = (0, _._)(),
          _ = (0, _._)();
        if (!_ && !__webpack_require__) return null;
        if (_) return _.createElement(_.Fragment, null, _.children);
        let _ = {
          _: _._,
          type: _.type,
        };
        1 == _?.GetStoreItemType() &&
          1 == _?.GetIncludedAppIDs().length &&
          (_ = {
            _: _.GetIncludedAppIDs()[0],
            type: "game",
          });
        const _ = "hiding" == _(),
          _ =
            _ || !_
              ? null
              : (0, _._)(`${_?.GetStorePageURL(_)}${_ ? `?${_}` : ""}`, _, _),
          _ = {
            info: _,
            displayInfo: _,
            name: __webpack_require__,
            bPreventNavigation: _,
            strStoreUrl: _,
            elElementToAppend: _,
            bShowDemoButton: _,
            bShowDeckCompatibilityDialog: _,
            bHideBottomHalf: _,
            bHidePrice: _,
            bUseSubscriptionLayout: _,
            strSNR: _,
            nCreatorAccountID: _,
            bShowWishlistButton: _,
            bShowIgnoreButton: _,
            bShowDescription: _,
          },
          _ = _.createElement(_, {
            ..._,
          }),
          _ = _
            ? _.createElement(
                "a",
                {
                  href: _,
                },
                _,
              )
            : _;
        return _.createElement(
          _,
          {
            hoverContent: _,
            nWidthMultiplier: _,
            ..._,
          },
          _,
        );
      }
      function _(_) {
        const { hoverProps: _, children: __webpack_require__ } = _,
          _ = _.useCallback((_) => _?.focus(), []);
        return _.createElement(
          _._,
          {
            ..._,
          },
          _.createElement(
            _._,
            {
              timeout: 500,
              _: !0,
              appear: !0,
              classNames: {
                appearActive: _().Opening,
                enterDone: _().Open,
              },
            },
            (_) =>
              _.createElement(
                "div",
                {
                  ref: (0, _._)(_, _),
                  className: _().HoverContentTransition,
                  tabIndex: -1,
                },
                __webpack_require__,
              ),
          ),
        );
      }
      function _(_) {
        const {
            hoverContent: _,
            hoverProps: __webpack_require__,
            nDelayShowMs: _,
            nWidthMultiplier: _,
            children: _,
            className: _,
          } = _,
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = !_ && !_,
          [_, _] = _.useState(!1),
          [_, _] = _.useState(void 0);
        return _.createElement(
          "div",
          {
            "data-key": "hover div",
            className: (0, _._)(_().ItemHoverSource, _),
            onMouseEnter: (_) => {
              _(!0), _(_.currentTarget);
            },
            onMouseLeave: () => _(!1),
            onTouchStart: () => _(!1),
            onKeyDown: (_) => {
              27 == _.keyCode &&
                (_(!1), _.preventDefault(), _.stopPropagation());
            },
          },
          _ &&
            _.createElement(
              _,
              {
                visible: _,
                target: _,
                nDelayShowMs: _,
                nWidthMultiplier: _,
                hoverProps: __webpack_require__,
              },
              _,
            ),
          _.createElement(_._, null, _),
        );
      }
      function _(_) {
        const {
            hoverProps: _,
            nDelayShowMs: __webpack_require__ = _,
            nWidthMultiplier: _ = 1.15,
            target: _,
            visible: _,
            children: _,
          } = _,
          [_, _] = _.useState(_),
          { targetElement: _ = _?.ownerDocument.body } = (0, _._)();
        if (
          (_.useEffect(() => {
            if (_) {
              if (__webpack_require__) {
                const _ = window.setTimeout(() => _(!0), __webpack_require__);
                return () => window.clearTimeout(_);
              }
              _(!0);
            } else _(!1);
          }, [_]),
          _.useEffect(() => {
            if (!_) return;
            const _ = _.ownerDocument.defaultView,
              _ = _.scrollY,
              _ = () => {
                Math.abs(_.scrollY - _) > 50 && _(!1);
              };
            return (
              window.addEventListener("scroll", _),
              () => window.removeEventListener("scroll", _)
            );
          }, [_, _?.ownerDocument.defaultView]),
          !_ || !_ || !_)
        )
          return null;
        const _ = _.clientWidth < 200 ? "8px" : "10px",
          _ = {
            direction: "overlay-center",
            bEnablePointerEvents: !0,
            ..._,
            style: {
              zIndex: 98,
              width: _.clientWidth * _,
              fontSize: _,
              minHeight: "hiding" == _() ? void 0 : 300,
              height:
                "hiding" == _() ? 1.15 * _.clientWidth * (125 / 184) : void 0,
              ..._?.style,
            },
            target: _,
          };
        return _.createPortal(
          _.createElement(
            _,
            {
              hoverProps: _,
            },
            _.createElement(_._, null, _),
          ),
          _,
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
        let _ = _._.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
        return _.createElement(
          _._,
          {
            strTitle: (0, _._)("#Informational_Message"),
            onCancel: _.closeModal,
            onOK: _.closeModal,
            bAlertDialog: !0,
          },
          _.createElement(
            "div",
            null,
            (0, _._)(
              _.strTokenOverride || "#User_LimitedAccount",
              _.createElement(
                "a",
                {
                  href: _,
                  target: _._.IN_CLIENT ? void 0 : "_blank",
                },
                (0, _._)("#User_LimitedAccount_UrlInfo"),
              ),
            ),
          ),
        );
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _._.Get().BIsStoreItemMissing(_._, (0, _._)(_.type));
      }
      function _(_, _, _) {
        const _ = new Array();
        return (
          _?.forEach((_) =>
            _.push({
              _: _,
              type: "game",
            }),
          ),
          _?.forEach((_) =>
            _.push({
              _: _,
              type: "sub",
            }),
          ),
          __webpack_require__?.forEach((_) =>
            _.push({
              _: _,
              type: "bundle",
            }),
          ),
          _
        );
      }
      function _(_) {
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return _?.GetBestPurchaseOption()?.discount_pct > 0;
      }
      function _(_) {
        if (!_._.Get().GetHomeView()?.localized) return !0;
        const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
        return _._.Get().BIsAnyLanguageEnabled(
          _.GetAllLanguagesWithSomeSupport(),
        );
      }
      async function _(_, _, _) {
        if (!_ || 0 == _.length) return [];
        const _ = _.filter((_) => (0, _._)(_.type)).map((_) => _._),
          _ = _.filter((_) => "sub" === _.type).map((_) => _._),
          _ = _.filter((_) => "bundle" === _.type).map((_) => _._);
        {
          const _ = _.filter((_) => !_._.Get().BHasApp(_, _)),
            _ = _.filter((_) => !_._.Get().BHasApp(_, _)),
            _ = _.filter((_) => !_._.Get().BHasApp(_, _));
          (_.length > 0 || _.length > 0 || _.length > 0) &&
            (await Promise.all([
              _._.Get().QueueMultipleAppRequests(_, _),
              _._.Get().QueueMultiplePackageRequests(_, _),
              _._.Get().QueueMultipleBundleRequests(_, _),
            ]));
        }
        const _ = new Set();
        _?.forEach((_) => {
          const _ = _._.Get().GetBundle(_);
          _?.GetIncludedAppIDs().forEach((_) => _.add(_));
        }),
          _?.forEach((_) => {
            const _ = _._.Get().GetPackage(_);
            _?.GetIncludedAppIDs().forEach((_) => _.add(_));
          });
        const _ = Array.from(_).filter((_) => !_._.Get().BHasApp(_, _));
        if (
          (_.length > 0 && (await _._.Get().QueueMultipleAppRequests(_, _)),
          _.forEach((_) => _.add(_)),
          _)
        ) {
          const _ = Array.from(_)
            .map((_) => {
              const _ = _._.Get().GetApp(_);
              return _?.GetParentAppID()
                ? (_.add(_.GetParentAppID()), _.GetParentAppID())
                : null;
            })
            .filter(Boolean)
            .filter((_) => !_._.Get().BHasApp(_, _));
          _.length > 0 && (await _._.Get().QueueMultipleAppRequests(_, _));
        }
        return Array.from(_).filter((_) => {
          const _ = _._.Get().GetApp(_);
          return _ && !_.GetParentAppID();
        });
      }
      const _ = {
        include_tag_count: 20,
        include_basic_info: !0,
        include_supported_languages: !0,
      };
      function _(_) {
        const _ = _._.Get();
        (0, _._)(_.BIsLoaded(), "Dynamic Store not loaded");
        const _ = _?.GetAllLanguagesWithSomeSupport() || [],
          _ = _._.Get().GetHomeView()?.localized;
        return (
          !_ ||
          (0 == _.GetStoreItemType() &&
            (_.BIsGameIgnored(_.GetAppID()) ||
              _.BIsGameIgnored(_.GetParentAppID()))) ||
          _.BExcludesContentDescriptor(_.GetContentDescriptorIDs()) ||
          _.BExcludeTagIDs(_.GetTagIDs()) ||
          _.GetAllCreatorClanIDs().some((_) => _.BIsIgnoringCurator(_)) ||
          (_ &&
            !(
              0 == _.length ||
              _.BHasSomeLanguageSupport(0) ||
              _.BIsAnyLanguageEnabled(_)
            ))
        );
      }
      async function _(_, _, _, _) {
        let _ = 0,
          _ = 0;
        const _ = [];
        await _(_, _._, _);
        for (const _ of _) {
          const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
          if (!_) {
            _++;
            continue;
          }
          const _ = _.GetIncludedAppIDs()
            .map((_) => _._.Get().GetApp(_))
            .filter(Boolean);
          if ((_.push(_), _)) {
            const _ = new Set(_.map((_) => _.GetParentAppID()).filter(Boolean)),
              _ = Array.from(_)
                .map((_) => _._.Get().GetApp(_))
                .filter(Boolean);
            _ && _.push(..._);
          }
          _.some(_ || _)
            ? (_++,
              _ &&
                (_._.Get().BIsStoreItemOwned(_) || __webpack_require__.push(_)))
            : _.push(_);
        }
        return (
          "dev" === _._.WEB_UNIVERSE &&
            0 === _.length &&
            console.log(
              "ApplyStorePreferenceFilters: " +
                _ +
                " failed to load, " +
                _ +
                " hidden by user filter.",
            ),
          _
        );
      }
      async function _(_, _, _, _, _, _, _) {
        let _ = await _(
          _,
          _,
          _,
          _
            ? (_) =>
                !_ ||
                _._.Get().BExcludesContentDescriptor(
                  _.GetContentDescriptorIDs(),
                ) ||
                _._.Get().BExcludeTagIDs(_.GetTagIDs())
            : _,
        );
        const _ = [];
        for (const _ of _) {
          const _ = _._.Get().GetStoreItem(_._, (0, _._)(_.type));
          if (!_) continue;
          const _ = _?.GetIncludedAppIDsOrSelf();
          let _ = !1;
          _ && (_ = _ || _.every((_) => _._.Get().BIsGameOwned(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameWishlisted(_))),
            _ && (_ = _ || _.every((_) => _._.Get().BIsGameIgnored(_))),
            _ ? _ && _.push(_) : _.push(_);
        }
        return _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { size: _, color: __webpack_require__, trackColor: _ } = _,
          _ = {
            borderColor: _,
            borderLeftColor: __webpack_require__,
          };
        if ("number" == typeof _) {
          const _ = `${_}px`;
          (_.width = _),
            (_.height = _),
            (_.minHeight = _),
            (_.minWidth = _),
            (_.borderWidth = _ / 10 + "px");
        }
        return _.createElement("div", {
          className: (0, _._)(
            _.Loading,
            "small" == _ && _.Small,
            ("medium" == _ || !_) && _.Medium,
            "large" == _ && _.Large,
          ),
          style: _,
        });
      }
    },
  },
]);
