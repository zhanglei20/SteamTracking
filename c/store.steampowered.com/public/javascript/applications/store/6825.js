"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6825],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
      function _(_) {
        if (_) {
          if ("appid" in _) return "app";
          if ("bundleid" in _) return "bundle";
          if ("packageid" in _) return "sub";
        }
      }
      function _(_) {
        const {
            _: _,
            hoverClassName: __webpack_require__,
            fnGetIDOverride: _,
            fnHoverState: _,
            children: _,
          } = _,
          _ = _.useRef(null),
          _ = _.useCallback(
            (_) => {
              const _ = _(_);
              _ &&
                (_ && _(!0),
                window.GameHover &&
                  window.GameHover(_ ? _() : _.current, _, "global_hover", {
                    type: _,
                    _: (0, _._)(_)._,
                    _: 1,
                  }));
            },
            [_, _, _],
          ),
          _ = _.useCallback(
            (_) => {
              _(_) &&
                (_ && _.relatedTarget && _(!1),
                window.HideGameHover &&
                  window.HideGameHover(_ ? _() : _.current, _, "global_hover"));
            },
            [_, _, _],
          );
        return (0, _.jsx)("div", {
          ref: _,
          className: __webpack_require__,
          onMouseEnter: _,
          onMouseLeave: _,
          onFocus: _,
          onBlur: _,
          children: _,
        });
      }
      function _(_) {
        const {
            _: _,
            strExtraParams: __webpack_require__,
            fnOnClickOverride: _,
            strOverrideURL: _,
          } = _,
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)(
            _ ||
              (_ && "creatorid" in _
                ? (0, _._)(
                    `${_._.STORE_BASE_URL}curator/${((0, _._))(_)._}${__webpack_require__ ? `?${__webpack_require__}` : ""}`,
                    _,
                    _,
                  )
                : (0, _._)(
                    `${_._.STORE_BASE_URL}${_(_)}/${((0, _._))(_)._}${__webpack_require__ ? `?${__webpack_require__}` : ""}`,
                    _,
                    _,
                  )),
          );
        return (0, _.jsx)(_, {
          ..._,
          children: (0, _.jsx)(_._, {
            className: _.className,
            href: _ ? void 0 : _,
            target: _._.IN_CLIENT || _ ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: _,
            children: _.children,
          }),
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
      __webpack_require__._(module_exports, {
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { appid: _, className: __webpack_require__, bTextMode: _ } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return (0, _.jsx)(_, {
          appid: _,
          bIsFree: Boolean(_?.is_free),
          bIsComingSoon: Boolean(_?.is_coming_soon),
          bTextMode: _,
          className: __webpack_require__,
        });
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(!1),
          _ = (0, _._)(),
          {
            appid: _,
            bIsFree: _,
            bIsComingSoon: _,
            className: _,
            bTextMode: _,
          } = _,
          _ = (0, _._)(_),
          { bIsOwned: _ } = (0, _._)(_),
          _ = (0, _._)(_),
          { mutateAsync: _ } = (0, _._)(_, !_, (0, _._)(_)),
          { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)();
        if (_ || (!_ && _))
          return _
            ? (0, _.jsx)(_, {
                possibleDemoAppID: _,
              })
            : null;
        let _ = null;
        return (
          _ && !_
            ? (_ = (0, _.jsx)(_._, {
                size: 18,
              }))
            : _
              ? _ && (_ = _ ? (0, _._)("#OnWishlist") : (0, _.jsx)(_.qnF, {}))
              : (_ = _
                  ? (0, _._)("#wishlist_add_to_wishlist")
                  : (0, _.jsx)(_.T4m, {})),
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#AddToWishlist_ttip"),
                children: (0, _.jsx)("div", {
                  className: (0, _._)(_().WishList, _),
                  onClick: async () => {
                    _._.logged_in
                      ? _ ||
                        (__webpack_require__(!0),
                        await _(),
                        __webpack_require__(!1))
                      : _();
                  },
                  children: _,
                }),
              }),
              _,
            ],
          })
        );
      }
      function _(_) {
        const { possibleDemoAppID: _, className: __webpack_require__ } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _
          ? (1 != _.type && 12 != _.type) || !_.related_items?.parent_appid
            ? null
            : (0, _.jsx)(_, {
                parentAppID: _.related_items?.parent_appid,
                className: __webpack_require__,
              })
          : null;
      }
      function _(_) {
        const { parentAppID: _, className: __webpack_require__ } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _ && _
          ? (0, _.jsx)(_, {
              appid: _,
              bIsComingSoon: Boolean(_.is_coming_soon),
              bIsFree: Boolean(_.is_free),
              className: __webpack_require__,
            })
          : null;
      }
    },
  },
]);
