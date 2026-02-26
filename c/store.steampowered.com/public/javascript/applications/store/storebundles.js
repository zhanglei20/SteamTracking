(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2469],
  {
    chunkid: (module) => {
      module.exports = {
        BackgroundImageCtn: "RdHTT3nwjIakv7OZTMNqN",
        BackgroundImageBlurCtn: "_3vGQugNJFaL7JS8KhZhU2H",
      };
    },
    chunkid: (module) => {
      module.exports = {
        AppHeader: "cCoovA8rihPiT1IZ33Cr_",
        CapsuleSizer: "_2VmId746Rg7Ldjg3_0jDSl",
        TitleGroup: "_2y18Xvy_xifENXqdmY3D9y",
        SubTitle: "v_Vos0f8oAH9Im5Z1b9UU",
        Title: "_3BjnxsXuurq9OScWV1Esvf",
        SortOptions: "_2F9yRZTzjsLBM4QSoRoLsN",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Ctn: "_2P-P0Ga6blE6d10oVWleHs",
        BackgroundImageCtn: "_3LnsTSsd5CMsXXdHZVeG9S",
        BackgroundImageBlurCtn: "_1j9oLZ84RZG44SAUdeGBbz",
        BundlesList: "qidGiQP0S4nK0GXkYOxbO",
        BundleRow: "_2-2kqczzmj6KtNObGLj6x3",
        BundlesInLibrary: "T_3MrEHN9bFK4I4FQqDC8",
        Title: "_3_R7HvUJcngi4n-gCRYFkN",
        Subtitle: "_3Bvm26qCLKO-h1yHVlFGsS",
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
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { _: _, type: __webpack_require__ } = _,
          _ = (0, _._)({
            _: _,
            type: __webpack_require__,
          }),
          { data: _ } = (0, _._)(_);
        return (0, _.jsx)("div", {
          className: _().SaleItemBrowserRow,
          children: (0, _.jsx)(_._, {
            ..._,
            bShowReviewSummary: !0,
            bShowDemoButton: _.bShowDemoButton || 1 == _?.type,
            bPreferDemoStorePage: _.bPreferDemoStorePage,
          }),
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        if (!_ || !__webpack_require__) return null;
        const _ =
          (0, _._)(_, "library_hero_2x") ??
          (0, _._)(_, "library_hero") ??
          (0, _._)(_, "raw_page_background");
        return _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("div", {
                  className: _().BackgroundImageCtn,
                  children: (0, _.jsx)("img", {
                    src: _,
                    alt: __webpack_require__.name,
                  }),
                }),
                (0, _.jsx)("div", {
                  className: _().BackgroundImageBlurCtn,
                  children: (0, _.jsx)("img", {
                    src: _,
                    alt: __webpack_require__.name,
                  }),
                }),
              ],
            })
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            appid: _,
            elPageSort: __webpack_require__,
            strPageSubTitle: _,
          } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { strStoreURL: _ } = (0, _._)(_);
        return _
          ? (0, _.jsxs)("div", {
              className: _().AppHeader,
              children: [
                (0, _.jsx)("div", {
                  className: _().CapsuleSizer,
                  children: (0, _.jsx)("a", {
                    href: _,
                    children:
                      _ &&
                      (0, _.jsx)("img", {
                        src: (0, _._)(_, "header"),
                        alt: _.name || "",
                      }),
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: _().TitleGroup,
                  children: [
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().SubTitle,
                        children: _,
                      }),
                    (0, _.jsx)("a", {
                      href: _,
                      className: _().Title,
                      children: _.name || "",
                    }),
                    (0, _.jsx)(_._, {
                      _: _,
                    }),
                  ],
                }),
                Boolean(__webpack_require__) &&
                  (0, _.jsx)("div", {
                    className: _().SortOptions,
                    children: __webpack_require__,
                  }),
              ],
            })
          : null;
      }
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            match: {
              params: { appid: _ },
            },
          } = _,
          _ = Number.parseInt(_),
          [_] = (0, _._)(_, _._);
        return (
          (0, _.useEffect)(() => {
            if (_) {
              const _ = _.GetStorePageURL().replace(
                "/app/",
                "/bundlelist_old/",
              );
              _ != window.location.href &&
                window.history.replaceState({}, "", _);
            }
          }, [_]),
          (0, _.jsx)(_._, {
            method: "bundlelist",
            children: (0, _.jsx)(_._, {
              children: (0, _.jsx)(_, {
                storeItem: _,
              }),
            }),
          })
        );
      }
      function _(_) {
        const { storeItem: _ } = _,
          _ = (0, _._)(_),
          [_, _] = (0, _.useState)(_.k_BundleSort_Price),
          _ = (function (_) {
            const _ = (0, _.useMemo)(
                () => (0, _._)("bundle_list", "application_config"),
                [],
              ),
              [_] = (0, _._)(),
              _ = (0, _._)(_, _._),
              _ = (0, _.useMemo)(() => {
                if (!_ || (3 != _ && 2 != _)) return null;
                {
                  let _ = _;
                  switch (
                    (2 == _ &&
                      (_ = _.filter((_) => {
                        const _ = _._.Get().GetBundle(_);
                        return _?.BIsVisible();
                      })),
                    _)
                  ) {
                    case _.k_BundleSort_Name:
                      return [..._].sort((_, _) => {
                        const _ = _._.Get().GetBundle(_),
                          _ = _._.Get().GetBundle(_);
                        return __webpack_require__
                          .GetName()
                          .localeCompare(_.GetName());
                      });
                    case _.k_BundleSort_Price:
                      return [..._].sort((_, _) => {
                        const _ = _._.Get().GetBundle(_),
                          _ = _._.Get().GetBundle(_);
                        return (
                          __webpack_require__.GetBestPurchasePriceInCents() -
                          _.GetBestPurchasePriceInCents()
                        );
                      });
                    default:
                      return _;
                  }
                }
              }, [_, _, _]);
            if (_ && !_) {
              const _ = new Array(),
                _ = new Array(),
                _ = new Array();
              return (
                _.forEach((_) => {
                  const _ = _._.Get().GetBundle(_);
                  _.GetIncludedAppIDs().some((_) => !_._.Get().BOwnsApp(_))
                    ? _.GetBestPurchaseOption().must_purchase_as_set
                      ? __webpack_require__.push(_)
                      : _.push(_)
                    : _.push(_);
                }),
                {
                  rgOwnedBundleIDList: _,
                  rgCompleteTheSetBundleIDList: _,
                  rgMustPurchaseTogetherBundleIDList: _,
                }
              );
            }
            return null;
          })(_);
        return _ && _
          ? (0, _.jsxs)("div", {
              className: _().Ctn,
              children: [
                (0, _.jsx)(_, {
                  _: _,
                }),
                (0, _.jsxs)("div", {
                  className: (0, _._)("page_content"),
                  children: [
                    (0, _.jsx)(_, {
                      appid: _.GetAppID(),
                      elPageSort: (0, _.jsx)(_, {
                        eBundleSort: _,
                        fnSetSort: _,
                      }),
                      strPageSubTitle: (0, _._)("#BundleList_SubTitle"),
                    }),
                    _.rgCompleteTheSetBundleIDList?.length > 0 &&
                      (0, _.jsxs)("div", {
                        className: _().BundlesInLibrary,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().Title,
                            children: (0, _._)("#BundleList_CompleteTheSet"),
                          }),
                          (0, _.jsx)("div", {
                            className: _().Subtitle,
                            children: (0, _._)(
                              "#BundleList_CompleteTheSetSubtitle",
                            ),
                          }),
                          (0, _.jsx)(_, {
                            appId: _.GetAppID(),
                            bundleSort: _,
                            rgBundleIDs: _.rgCompleteTheSetBundleIDList,
                          }),
                        ],
                      }),
                    _.rgMustPurchaseTogetherBundleIDList?.length > 0 &&
                      (0, _.jsxs)("div", {
                        className: _().BundlesInLibrary,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().Title,
                            children: (0, _._)("#BundleList_MustPurchaseAsSet"),
                          }),
                          (0, _.jsx)("div", {
                            className: _().Subtitle,
                            children: (0, _._)(
                              "#BundleList_MustPurchaseAsSetSubtitle",
                            ),
                          }),
                          (0, _.jsx)(_, {
                            appId: _.GetAppID(),
                            bundleSort: _,
                            rgBundleIDs: _.rgMustPurchaseTogetherBundleIDList,
                          }),
                        ],
                      }),
                    _.rgOwnedBundleIDList?.length > 0 &&
                      (0, _.jsxs)("div", {
                        className: _().BundlesInLibrary,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().Title,
                            children: (0, _._)("#BundleList_AllInLibrary"),
                          }),
                          (0, _.jsx)("div", {
                            className: _().Subtitle,
                            children: (0, _._)(
                              "#BundleList_AllInLibrarySubtitle",
                            ),
                          }),
                          (0, _.jsx)(_, {
                            appId: _.GetAppID(),
                            bundleSort: _,
                            rgBundleIDs: _.rgOwnedBundleIDList,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          : (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
              position: "center",
            });
      }
      function _(_) {
        const { rgBundleIDs: _, bundleSort: __webpack_require__, appId: _ } = _;
        return (0, _.jsx)("div", {
          className: _().BundlesList,
          children: _.map((_) =>
            (0, _.jsx)(
              _,
              {
                bundleId: _,
                appId: _,
              },
              "bundleDisplay_" + _,
            ),
          ),
        });
      }
      function _(_) {
        const { bundleId: _, appId: __webpack_require__ } = _;
        return (0, _.jsx)("div", {
          className: _().BundleRow,
          children: (0, _.jsx)(_._, {
            _: _,
            type: "bundle",
            bShowDeckCompatibilityDialog: !1,
            bPreferAssetWithoutOverride: !1,
          }),
        });
      }
      function _(_) {
        const { eBundleSort: _, fnSetSort: __webpack_require__ } = _,
          _ = (0, _.useMemo)(
            () => [
              {
                data: _.k_BundleSort_Name,
                label: (0, _._)("#BundleList_SortBy_Name"),
              },
              {
                data: _.k_BundleSort_Price,
                label: (0, _._)("#BundleList_SortBy_Price"),
              },
            ],
            [],
          );
        return (0, _.jsx)(_._, {
          selectedOption: _,
          renderButtonValue: (_) =>
            (0, _.jsxs)("div", {
              children: [(0, _._)("#BundleList_SortBy"), " ", _],
            }),
          rgOptions: _,
          strDefaultLabel: (0, _._)("#BundleList_SortBy"),
          onChange: ({ data: _ }) => __webpack_require__(_),
        });
      }
      !(function (_) {
        (_[(_.k_BundleSort_Name = 1)] = "k_BundleSort_Name"),
          (_[(_.k_BundleSort_Price = 2)] = "k_BundleSort_Price"),
          (_[(_.k_BundleSort_Popular = 3)] = "k_BundleSort_Popular");
      })(_ || (_ = {}));
    },
  },
]);
