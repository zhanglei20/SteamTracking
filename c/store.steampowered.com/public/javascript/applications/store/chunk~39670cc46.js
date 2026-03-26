"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [807],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__._(_);
      function _(_, _) {
        return new (_())(
          async (_) => {
            const _ = [..._],
              _ = await _._.GetPlayerLinkDetails(_, {
                steamids: _,
              }),
              _ = new Map();
            return (
              _.Body()
                .accounts()
                .forEach((_) => {
                  const _ = _.toObject();
                  _.set(_.public_data.steamid, _);
                }),
              __webpack_require__.map((_) => _.get(_) ?? null)
            );
          },
          {
            maxBatchSize: 100,
            cache: !1,
            ..._,
          },
        );
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = _.useContext(_);
        return (0, _._)(_(_, _, _));
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = _.useContext(_);
        return (0, _._)({
          queries: _.map((_) => _(_, _, _)),
        });
      }
      const _ = _.createContext({
        loadPersonaState: async (_, _) => {
          if (null == _) return null;
          const _ = await (function (_) {
            return (_ ??= _(_));
          })(_).load(_._.InitFromAccountID(_).ConvertTo64BitString());
          return (function (_, _) {
            let _ = new _._(_);
            const _ = _?.public_data,
              _ = _?.private_data;
            (_.m_bInitialized = !!_),
              (_.m_ePersonaState = _?.persona_state ?? 0),
              (_.m_strAvatarHash = _?.sha_digest_avatar
                ? (0, _._)(_.sha_digest_avatar)
                : _._),
              (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
              (_.m_strAccountName = _?.account_name),
              _?.persona_state_flags &&
                (_.m_unPersonaStateFlags = _?.persona_state_flags);
            _?.game_id && (_.m_gameid = _?.game_id);
            _?.game_server_ip_address &&
              (_.m_unGameServerIP = _?.game_server_ip_address);
            _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id);
            _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info);
            _?.profile_url && (_.m_strProfileURL = _.profile_url);
            return _;
          })(_._.InitFromAccountID(_), _);
        },
      });
      function _() {
        return _.useContext(_);
      }
      function _(_, _, _) {
        const _ = "string" == typeof _ ? new _._(_).GetAccountID() : _;
        return {
          queryKey: ["PlayerSummary", _],
          queryFn: () => _.loadPersonaState(_, _),
          enabled: !!_,
        };
      }
      let _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_claimState = {
          bCanClaimNewItem: !1,
          bAlreadyClaimedCurrentItem: !1,
        };
        m_claimedFreeItemDef;
        m_rtNextClaimTime;
        m_claimTimer;
        m_SteamInterface = null;
        m_canClaimPromise = null;
        m_claimPromise = null;
        m_claimStateChangeCallback = new _._();
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
        TEST_OverrideClaimState(_) {
          (this.m_bInTestMode = !0),
            (this.m_canClaimPromise = null),
            (this.m_claimPromise = null),
            _.bCanClaimNewItem
              ? (this.m_testNextClaimFakeResponse = {
                  bAlreadyClaimedCurrentItem: !0,
                  bCanClaimNewItem: !1,
                  rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                  appid: 2243810,
                  community_item_type: 2,
                  community_item_class: 11,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = _),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        async ActivateProfileModifier(_) {
          const _ = _._.Init(_._);
          _.Body().set_communityitemid(_.communityitemid),
            _.Body().set_appid(_.appid),
            _.Body().set_activate(!0);
          const _ = await _._.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            _,
          );
          return (
            1 != __webpack_require__.GetEResult() &&
              console.error(
                `Error when calling QuestService.ActivateProfileModifierItem: EResult=${__webpack_require__.GetEResult()}`,
              ),
            __webpack_require__.GetEResult()
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
          (0, _._)(
            _._.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const _ = _._.Init(_._);
          _.Body().set_language(_._.LANGUAGE);
          let _ = null;
          try {
            const _ = await _._.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              _,
            );
            if (1 == __webpack_require__.GetEResult())
              return (
                (this.m_claimedFreeItemDef = Boolean(
                  __webpack_require__.Body().reward_item()?.defid(),
                )
                  ? __webpack_require__.Body().reward_item()?.toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: !!__webpack_require__.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    (__webpack_require__.Body().next_claim_time() ?? 0) > 0
                      ? __webpack_require__.Body().next_claim_time()
                      : void 0,
                }),
                (this.m_rtNextClaimTime = __webpack_require__
                  .Body()
                  .next_claim_time()),
                this.SetClaimTimer(),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                this.m_claimState
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalLoadCanUserClaimItem failed: error: " +
                _?.strErrorMsg,
              _,
            ),
            {
              bCanClaimNewItem: !1,
              bAlreadyClaimedCurrentItem: !1,
            }
          );
        }
        async UserClaimItem() {
          return (
            this.m_testNextClaimFakeResponse &&
              (console.log(
                "CSaleItemClaimableRewardsStore - testing, pretending claim action succeeded",
                (0, _._)(this.m_testNextClaimFakeResponse),
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
          (0, _._)(
            _._.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, _._)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const _ = _._.Init(_._);
          _.Body().set_language(_._.LANGUAGE);
          let _ = null;
          try {
            const _ = await _._.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              _,
            );
            if (1 == __webpack_require__.GetEResult())
              return (
                (this.m_claimedFreeItemDef =
                  __webpack_require__.Body().reward_item()?.toObject() ?? {}),
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
                    (__webpack_require__.Body().next_claim_time() ?? 0) > 0
                      ? __webpack_require__.Body().next_claim_time()
                      : void 0,
                }),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = __webpack_require__
                  .Body()
                  .next_claim_time()),
                this.SetClaimTimer(),
                this.m_claimState
              );
            if (29 == __webpack_require__.GetEResult())
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalUserClaimItem failed: error: " +
                _?.strErrorMsg,
              _,
            ),
            {
              bCanClaimNewItem: !1,
              bAlreadyClaimedCurrentItem: !1,
            }
          );
        }
        SetClaimTimer() {
          if (this.m_claimTimer) return;
          if (!this.m_rtNextClaimTime) return;
          const _ = Date.now();
          let _ = new Date(1e3 * this.m_rtNextClaimTime);
          const _ = Math.max(0, Math.min(1, _.getTime() - _));
          this.m_claimTimer = window.setTimeout(
            () => {
              (this.m_claimTimer = void 0),
                Date.now() > _.getTime()
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
            _ > 3e5 ? _ / 2 : _,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const _ = (0, _._)("loyalty_webapi_token", "application_config");
          (0, _._)(
            _,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new _._(_._.WEBAPI_BASE_URL, _));
        }
      }
      function _() {
        const [_, _] = (0, _.useState)(_.Get().GetClaimItemState()),
          [__webpack_require__, _] = (0, _.useState)(!0);
        return (
          (0, _.useEffect)(() => {
            _.Get()
              .LoadCanUserClaimItem()
              .then(_)
              .finally(() => _(!1));
          }, []),
          (0, _._)(_.Get().GetClaimStateChangeCallback(), _),
          {
            ..._,
            bLoading: __webpack_require__,
          }
        );
      }
      function _() {
        return {
          fnClaimItem: _.Get().UserClaimItem,
        };
      }
      function _() {
        return {
          fnSetClaimState: _.Get().TEST_OverrideClaimState,
        };
      }
      async function _(_) {
        return _.Get().ActivateProfileModifier(_);
      }
      function _(_, _, _) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: [`SaleRewardsGetDefinition_${_}_${_}_${_}`],
          queryFn: async () =>
            (async function (_, _, _, _) {
              const _ = _._.Init(_._);
              return (
                _.Body().set_sale_def_type(_),
                _.Body().set_language(_),
                _.Body().set_include_community_item_def(_),
                (await _._.GetCurrentDefinition(_, _)).Body().toObject()
              );
            })(_, _, _, _),
          staleTime: 1 / 0,
        });
      }
      function _(_, _, _, _) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: [`GetClaimedSaleRewards_${_}_${_}_${_}_${_}`],
          queryFn: async () =>
            (async function (_, _, _, _) {
              const _ = _._.Init(_._);
              return (
                _.Body().set_sale_def_type(_),
                _.Body().set_language(_),
                _.Body().set_include_community_item_def(_),
                (await _._.GetClaimedSaleRewards(_, _)).Body().toObject()
              );
            })(_, _, _, _),
          staleTime: 1 / 0,
        });
      }
      (0, _._)([_._], _.prototype, "TEST_OverrideClaimState", null),
        (0, _._)([_._], _.prototype, "UserClaimItem", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        static s_VODStore;
        m_mapAppToVOD = new Map();
        GetVODForAppID(_) {
          return this.m_mapAppToVOD.get(_);
        }
        async LoadVODForAppID(_, _) {
          if (this.m_mapAppToVOD.has(_)) return this.m_mapAppToVOD.get(_);
          const _ = _._.STORE_BASE_URL + "video/details/" + _ + "/0",
            _ = {};
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _ ? _.token : void 0,
            });
            if (_ && _.token.reason) return null;
            if (
              _ &&
              200 == _.status &&
              _.data &&
              (1 == _.data.success || "ready" == _.data.success)
            ) {
              let _ = (0, _._)({
                appid: _,
                video_url: _.data.video_url,
                bookmark: _.data.bookmark,
              });
              return (
                _.data.bookmark
                  ? _._.Get().SetBookmarkForApp(_, _.data.bookmark)
                  : _._.Get().InitializeBookmarkForApp(_),
                this.m_mapAppToVOD.set(_, _),
                _
              );
            }
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              "CVideoOnDemandStore:LoadVODForAppID: Failed " + _.strErrorMsg,
              _,
            );
          }
          return null;
        }
        static Get() {
          return (
            _.s_VODStore || ((_.s_VODStore = new _()), _.s_VODStore.Init()),
            _.s_VODStore
          );
        }
        Init() {}
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.video_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  video_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  client_cellid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.video_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  video_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  video_url: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.encryption_key || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  encryption_key: {
                    _: 1,
                    _: _._.readBytes,
                    _: _._.writeBytes,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.app_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  app_id: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  client_cellid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.app_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  app_id: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  opf_settings: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.app_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  app_id: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  playback_position_in_seconds: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  video_track_id: {
                    _: 3,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  audio_track_id: {
                    _: 4,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  timedtext_track_id: {
                    _: 5,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  last_modified: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  hide_from_watch_history: {
                    _: 7,
                    _: !1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  hide_from_library: {
                    _: 8,
                    _: !1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "VideoBookmark";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.bookmarks || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  bookmarks: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appids || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appids: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
                  },
                  updated_since: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.bookmarks || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  bookmarks: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      !(function (_) {
        (_.ClientGetVideoURL = function (_, _) {
          return _.SendMsg("Video.ClientGetVideoURL#1", (0, _._)(_, _), _, {
            ePrivilege: 1,
          });
        }),
          (_.SetVideoBookmark = function (_, _) {
            return _.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetVideoBookmarks = function (_, _) {
            return _.SendMsg("Video.GetVideoBookmarks#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          });
      })(_ || (_ = {})),
        (function (_) {
          _.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: _,
          };
        })(_ || (_ = {})),
        (function (_) {
          _.ClientGetOPFSettings = function (_, _) {
            return _.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          };
        })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        static s_VODStore;
        m_transport = null;
        m_mapBookmarks = new Map();
        SetBookmarkForApp(_, _) {
          this.ValidateBookmarkData(_)
            ? this.m_mapBookmarks.set(_, _.fromObject(_))
            : this.InitializeBookmarkForApp(_);
        }
        ValidateBookmarkData(_) {
          const _ = _;
          return (
            "object" == typeof _ &&
            Number.isInteger(_.playback_position_in_seconds) &&
            Number.isInteger(_.app_id)
          );
        }
        InitializeBookmarkForApp(_) {
          if (!this.m_mapBookmarks.has(_)) {
            let _ = {
              app_id: _,
              playback_position_in_seconds: 0,
              video_track_id: "0",
              audio_track_id: "0",
              timedtext_track_id: "0",
              hide_from_watch_history: !1,
              hide_from_library: !1,
            };
            this.m_mapBookmarks.set(_, new _(_));
          }
        }
        GetBookmarkPlayTimeInSeconds(_) {
          let _ = this.m_mapBookmarks.get(_);
          if (_) {
            let _ = _.playback_position_in_seconds();
            if (Number.isInteger(_)) return _;
          }
          return 0;
        }
        async SendBookMarkedTimeToServer(_, _, _, _, _) {
          if (!_._.logged_in) return;
          if (!this.m_transport)
            return void console.warn(
              "CVideoBookmarkStore:SetBookMark no auth token / transport",
            );
          const _ = _._.Init(_);
          let _ = this.m_mapBookmarks.get(_);
          if (_) {
            let _ = !1;
            _.app_id() != _ && ((_ = !0), _.set_app_id(_)),
              _.playback_position_in_seconds() != _ &&
                ((_ = !0), _.set_playback_position_in_seconds(_)),
              (_ = _ || "0"),
              _.video_track_id() != _ && (_.set_video_track_id(_), (_ = !0)),
              (_ = _ || "0"),
              _.audio_track_id() != _ && (_.set_audio_track_id(_), (_ = !0)),
              (_ = _ || "0") != _.timedtext_track_id() &&
                (_.set_timedtext_track_id(_), (_ = !0)),
              _ &&
                (_.Body().add_bookmarks(_),
                _.SetVideoBookmark(this.m_transport, _));
          }
        }
        static Get() {
          return (
            _.s_VODStore || ((_.s_VODStore = new _()), _.s_VODStore.Init()),
            _.s_VODStore
          );
        }
        Init() {
          _._.logged_in && this.LoadWatchVideoOAuthToken();
        }
        async LoadWatchVideoOAuthToken() {
          const _ =
              "community" == (0, _._)()
                ? _._.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                : _._.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
            _ = {};
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
            });
            if (
              _ &&
              200 == _.status &&
              _.data &&
              1 == _.data.success &&
              _.data.webapi_token
            )
              return void (this.m_transport = new _._(
                _._.WEBAPI_BASE_URL,
                _.data.webapi_token,
              ).GetServiceTransport());
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                _.strErrorMsg,
              _,
            );
          }
        }
      }
      class _ {
        m_appid;
        constructor(_) {
          this.m_appid = _;
        }
        async SetBookmark(_, _, _, _) {
          _._.logged_in &&
            _.Get().SendBookMarkedTimeToServer(
              this.m_appid,
              Math.floor(_),
              _,
              _,
              _,
            );
        }
        GetBeginPlaytime() {
          return _._.logged_in
            ? _.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
            : 0;
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = _.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(_) {
          let _ = this.state.bRenderChildren;
          if (_ == _) return;
          if (_ && !this.BLoadAndUnload()) return;
          let _ = 0,
            _ = 0;
          if (this.m_refContainer.current) {
            const _ = this.m_refContainer.current.GetBoundingClientRect();
            _ && ((_ = _.width), (_ = _.height));
          }
          this.setState({
            bRenderChildren: _,
            nPrevRenderWidth: _,
            nPrevRenderHeight: _,
          }),
            _ && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: _,
              placeholderHeight: _,
              holdGampadFocus: __webpack_require__,
              onRender: _,
              style: _,
              mode: _,
              ..._
            } = this.props,
            _ = this.state.bRenderChildren;
          let _ = _;
          if (!_) {
            const _ = this.state.nPrevRenderWidth || _,
              _ = this.state.nPrevRenderHeight || _;
            (void 0 === _ && void 0 === _) ||
              (_ = {
                ..._,
                minHeight: _,
                minWidth: _,
              });
          }
          const _ = this.BLoadAndUnload() ? "repeated" : "once";
          let _ = (0, _.jsx)(_._, {
            ref: this.m_refContainer,
            style: _,
            ..._,
            onVisibilityChange: this.OnVisibilityChange,
            trigger: _,
            children: _ && this.props.children,
          });
          return (
            _ &&
              (_ = (0, _.jsx)(_._, {
                focusableIfEmpty: !0,
                children: _,
              })),
            _
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnVisibilityChange", null);
    },
  },
]);
