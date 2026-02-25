"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5714],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _: () => _,
        _: () => _,
      });
      var _,
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
      !(function (_) {
        (_.k_eView = "view"),
          (_.k_eViewWebSiteHub = "websitehub"),
          (_.k_eCommunityView = "communityview"),
          (_.k_eCommunityEdit = "edit"),
          (_.k_eCommunityEditBroadcast = "editBroadcast"),
          (_.k_eCommunityAdminPage = "admin"),
          (_.k_eCommunityPublish = "publish"),
          (_.k_eCommunityMigrate = "migrate"),
          (_.k_eCommunityPreview = "preview"),
          (_.k_eCommunityPreviewSale = "previewsale"),
          (_.k_eCommunityAnnouncementHub = "community_announcehub"),
          (_.k_eStoreView = "storeview"),
          (_.k_eStoreNewsHub = "newshub"),
          (_.k_eStoreOwnerPage = "store"),
          (_.k_eStoreSalePage = "sale"),
          (_.k_eStoreUsersNewsHub = "usernewshub");
      })(_ || (_ = {}));
      const _ =
        /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
      function _(_, _) {
        if (!_) return !1;
        const _ = "store" === (0, _._)(),
          _ = (function (_) {
            const _ = _.match(_);
            return _?.[1];
          })(window.location.href),
          _ = _ && "news" == _,
          _ = 36 == _.GetEventType(),
          _ = "community" === (0, _._)(),
          _ = _.appid ? "games" : "groups",
          _ =
            _ &&
            _ == _ &&
            ((_.appid && _.appid === _._.APPID) ||
              (!_.appid && _.clanSteamID.GetAccountID() === _._.CLANACCOUNTID));
        switch (_) {
          case _.k_eView:
            return _ || _;
          case _.k_eCommunityView:
          case _.k_eCommunityEdit:
          case _.k_eCommunityEditBroadcast:
          case _.k_eCommunityPublish:
          case _.k_eCommunityMigrate:
          case _.k_eCommunityPreview:
          case _.k_eCommunityPreviewSale:
          case _.k_eCommunityAnnouncementHub:
            return _;
          case _.k_eCommunityAdminPage:
            return !_ && _;
          case _.k_eViewWebSiteHub:
            return _ || _;
          case _.k_eStoreView:
          case _.k_eStoreNewsHub:
          case _.k_eStoreOwnerPage:
          case _.k_eStoreUsersNewsHub:
            return _;
          case _.k_eStoreSalePage:
            return !1;
          default:
            return (0, _._)(!1, "Unknown route specified for link: " + _), !1;
        }
      }
      function _(_) {
        const _ =
          _._.COMMUNITY_BASE_URL +
          "gid/" +
          _.clanSteamID.ConvertTo64BitString() +
          "/announcements/share/" +
          _.AnnouncementGID;
        return {
          strFacebookUrl: _ + "?site=facebook&t=" + Math.random(),
          strTwitterUrl: _ + "?site=twitter",
          strRedditUrl: _ + "?site=reddit",
        };
      }
      function _(_) {
        return _(_, _.k_eStoreSalePage, "absolute");
      }
      function _(_) {
        return _(_, _.k_eStoreView, "absolute");
      }
      function _(_, _, _) {
        if (_)
          return (
            (_ ? "/games/" + _._.VANITY_ID : "/groups/" + _._.VANITY_ID) + "/"
          );
        const _ = _ ? "ogg/" + _ : "gid/" + _.ConvertTo64BitString();
        return _._.COMMUNITY_BASE_URL + _ + "/";
      }
      function _() {
        return "news";
      }
      function _(_, _, _) {
        const [_] = (0, _._)(_?.appid, {
          include_basic_info: !0,
        });
        if (_) return _(_, _, _, _);
      }
      function _(_, _, _, _) {
        const _ = "relative" === _,
          _ = "community" === (0, _._)(),
          _ = _ ? "/" : _._.STORE_BASE_URL,
          _ = _(_.appid, _.clanSteamID, _);
        _ === _.k_eView
          ? (_ = _ ? _.k_eCommunityView : _.k_eStoreView)
          : _ === _.k_eViewWebSiteHub &&
            (_ = _ ? _.k_eCommunityAnnouncementHub : _.k_eStoreNewsHub);
        const _ = _.GID ? _.GID : "",
          _ = _.AnnouncementGID ? _.AnnouncementGID : "",
          _ =
            _.BIsOGGEvent() &&
            _.appid &&
            _ &&
            _.BHasSaleUpdateLandingPageVanity(),
          _ = 36 == _.GetEventType();
        switch (_) {
          case _.k_eCommunityPublish:
            return (
              _ +
              (_.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + _
                : "partnerevents/publish/" + _ + "?tab=publishing")
            );
          case _.k_eCommunityEdit:
            return (
              _ +
              (_.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + _
                : "partnerevents/edit/" + _)
            );
          case _.k_eCommunityEditBroadcast:
            return (
              _ +
              (_.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + _
                : "partnerevents/edit/" + _) +
              "?tab=broadcast"
            );
          case _.k_eCommunityMigrate:
            return _ + "partnerevents/migrate_announcement/" + _;
          case _.k_eCommunityPreview:
            return _
              ? _ + "partnerevents/previewsale/" + _
              : _ +
                  (_.bOldAnnouncement
                    ? "partnerevents/preview_old_announcement/" + _
                    : "partnerevents/preview/" + _);
          case _.k_eCommunityPreviewSale:
            return _ + "partnerevents/previewsale/" + _;
          case _.k_eCommunityAdminPage:
            return _
              ? `${_}curator/${_.clanSteamID.GetAccountID()}/admin/creatorhome_link`
              : _ + "partnerevents";
          case _.k_eCommunityAnnouncementHub:
            return _ + "announcements";
          case _.k_eStoreNewsHub:
            return (
              _ +
              `news/${_.appid ? `app/${_.appid}` : `group/${_.clanSteamID.GetAccountID()}`}`
            );
          case _.k_eStoreOwnerPage:
            return (
              _ +
              (_.appid
                ? "app/" + _.appid
                : "curator/" + _.clanSteamID.GetAccountID())
            );
          case _.k_eStoreSalePage:
            return _.jsondata.bSaleEnabled
              ? _.clanSteamID.GetAccountID() == _._
                ? `${_}charts/topnewreleases/${_.jsondata.sale_vanity_id}`
                : _.clanSteamID.GetAccountID() == _._
                  ? `${_}charts/bestofyear/${_.jsondata.sale_vanity_id}`
                  : _
                    ? `${_.GetStorePageURL()}/${_.GetSaleUpdateLandingPageVanity()}`
                    : _
                      ? `${_}curator/${_.clanSteamID.GetAccountID()}`
                      : _ +
                        (_.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath
                          ? "sale/"
                          : "curator/" +
                            _.clanSteamID.GetAccountID() +
                            "/sale/") +
                        _.jsondata.sale_vanity_id
              : _;
          case _.k_eCommunityView:
            return _ + "announcements/detail/" + _;
          case _.k_eStoreView:
            if (_.clanSteamID.GetAccountID() == (0, _._)())
              return `${_._.STORE_BASE_URL}meetsteam/${_}`;
            if (_)
              return `${_.GetStorePageURL()}/${_.GetSaleUpdateLandingPageVanity()}`;
            if (_) return `${_}curator/${_.clanSteamID.GetAccountID()}`;
            return `${_}news/${_.appid ? `app/${_.appid}` : `group/${_.clanSteamID.GetAccountID()}`}/${_.bOldAnnouncement ? `old_view/${_}` : `view/${_}`}`;
          case _.k_eStoreUsersNewsHub:
            return `${_}news/`;
          default:
            return (0, _._)(!1, "Unknown route specified for link"), "";
        }
      }
      function _(_, _, _) {
        return _(
          _,
          _,
          "forceAbsolute" === _ || !_(_, _) ? "absolute" : "relative",
        );
      }
      function _(_, _, _, _) {
        return _(
          _,
          _,
          _,
          "forceAbsolute" === _ || !_(_, _) ? "absolute" : "relative",
        );
      }
      function _(_) {
        const { eventModel: _, route: __webpack_require__, bPopup: _ = !0 } = _,
          _ = _(__webpack_require__, _),
          _ = _(_, __webpack_require__, _ ? "relative" : "absolute");
        return (
          _.useEffect(() => {
            _ ? window.open(_) : window.location.assign(_);
          }, [_, _]),
          _
            ? (0, _.jsx)(_._, {
                push: !0,
                _: _,
              })
            : null
        );
      }
      function _(_, _, _) {
        const _ = _(_, _, !1);
        return "admin" === _ ? _ + "partnerevents" : "";
      }
      function _(_) {
        const { eventModel: _, preferredFocus: __webpack_require__ } = _,
          { bCanUseLink: _ } = _.useContext(_._),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = _ && _(_.route, _),
          _ = _(_, _.route, _ ? "relative" : "absolute"),
          _ = !_ && _ ? (0, _._)(_) : _,
          _ = _ || !_ ? _ : (0, _._)(_, _);
        return _
          ? _
            ? (0, _.jsx)(_._, {
                style: _.style,
                className: _.className,
                href: _.createHref({
                  pathname: _,
                }),
                onClick: (_) => {
                  _.onClick?.(_), _.push(_), _.preventDefault();
                },
                preferredFocus: __webpack_require__,
                children: _.children,
              })
            : (0, _.jsx)(_._, {
                href: _,
                style: _.style,
                className: _.className,
                onClick: _.onClick,
                preferredFocus: __webpack_require__,
                children: _.children,
              })
          : null;
      }
    },
  },
]);
