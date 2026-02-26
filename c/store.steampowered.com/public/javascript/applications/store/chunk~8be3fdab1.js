(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4922],
  {
    chunkid: (module) => {
      module.exports = {
        WishlistButtonNotTop: "NLpQmAPIbG71U6eWdaOa1",
        FollowGameButtonNotTop: "T3A9t1mjAR00ljJGlBapl",
      };
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _ } = _;
        return _
          ? (0, _.jsx)(_, {
              _: _,
            })
          : null;
      }
      function _(_) {
        const { _: _ } = _,
          _ = (function (_) {
            const [_, _] = (0, _.useState)(void 0),
              { data: _ } = (0, _._)(_),
              { data: _ } = (0, _._)(_),
              _ = (0, _._)(),
              _ = (0, _._)();
            return (
              (0, _.useEffect)(() => {
                if (_)
                  if (_ && _.length > 0) __webpack_require__(_);
                  else if (_.related_items?.parent_appid) {
                    const _ = {
                      appid: _.related_items?.parent_appid,
                    };
                    (async () => {
                      const _ = await _.fetchQuery((0, _._)(_, _));
                      _ && _.length > 0 && __webpack_require__(_);
                    })();
                  }
              }, [_, _, _, _]),
              _
            );
          })(_);
        return _
          ? (0, _.jsx)("div", {
              className: _().StoreSaleWidgetTags,
              children: __webpack_require__.slice(0, 10).map((_) =>
                (0, _.jsx)(
                  _._,
                  {
                    tagid: _.tagid,
                    className: _().AppTag,
                  },
                  "tag_" + _.tagid,
                ),
              ),
            })
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 6;
      function _(_) {
        const { _: _, bHideInLibraryApps: __webpack_require__ } = _,
          { data: _ } = (0, _._)(_),
          [_, _] = _.useState(null),
          _ = 2 == _?.item_type,
          { data: _ } = (0, _._)();
        if (
          (_.useEffect(() => {
            _ &&
              (1 == _.item_type || 2 == _.item_type
                ? _(
                    (_.included_appids || [])
                      .filter((_) => !_ || !__webpack_require__ || !_?.has(_))
                      .map((_) => ({
                        appid: _,
                      })),
                  )
                : console.error(
                    "ContentsPreviewList unexpected store item type: ",
                    _.item_type,
                  ));
          }, [_, __webpack_require__, _, _]),
          !_ || 0 == _.length)
        )
          return null;
        const _ = _.length;
        let _ = (0, _._)("#Sale_ContentPreview", _);
        if (_ && _) {
          const _ = _.included_appids?.length || 0;
          _ != _ && (_ = (0, _._)("#Sale_Bundle_CompletePartialSet", _ - _, _));
        }
        return (0, _.jsxs)("div", {
          className: _().BundleContentPreview,
          children: [
            (0, _.jsxs)("div", {
              className: _().ContentsCount,
              children: [
                _ &&
                  (0, _.jsx)("span", {
                    className: _().BundleTag,
                    children: (0, _._)("#AppType_bundle"),
                  }),
                _,
              ],
            }),
            (0, _.jsx)("div", {
              className: _().PreviewCtn,
              children: _.slice(0, _).map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    _: _,
                  },
                  `preview${(0, _._)(_)}`,
                ),
              ),
            }),
          ],
        });
      }
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        if (!__webpack_require__ || !_) return null;
        const _ = (0, _._)(__webpack_require__, "small_capsule");
        return (0, _.jsx)(_._, {
          _: _,
          className: _().PreviewItem,
          hoverProps: {
            direction: "right",
            style: {
              minWidth: "350px",
            },
          },
          children: (0, _.jsx)("img", {
            src: _,
            className: _().PreviewImg,
            loading: "lazy",
            alt: _.name || "",
          }),
        });
      }
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            _: _,
            type: __webpack_require__,
            bShowDemoButton: _,
            bPreferDemoStorePage: _,
            bHidePrice: _,
            bUseSubscriptionLayout: _,
            bHidePlatforms: _,
            bHideContainedApps: _,
            bAllowTwoLinesForHeader: _,
            bShowReviewSummary: _,
            bShowDeckCompatibilityDialog: _,
            bAutoFocus: _,
            fnOnClickOverride: _,
            bIsMarketingMessage: _,
            bPreferAssetWithoutOverride: _,
          } = _,
          _ = (0, _._)(_, __webpack_require__),
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)(),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(),
          _ = (0, _._)(_),
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)();
        (0, _.useEffect)(() => {
          _.current && _(_.current.offsetWidth < 370);
        }, [_]);
        const _ = (0, _.useMemo)(
            () =>
              _ && _ && (0, _._)(_)
                ? {
                    appid: (0, _._)(_)[0],
                  }
                : _,
            [_, _, _],
          ),
          { strStoreURL: _, snr: _ } = (0, _._)(_, _);
        if (!_) return null;
        const _ = _.included_appids?.length || 0,
          _ = _.included_appids?.filter((_) => _?.has(_))?.length || 0,
          _ = 2 == _.item_type && Boolean(_?.must_purchase_as_set),
          _ = Boolean(!_ && _ > 1),
          _ = 1 == _.item_type && 1 == _,
          _ = 0 == _.item_type || _,
          _ = _ && _.appid,
          _ = _.name || "",
          _ = (0, _._)(_, _),
          _ = _ || !_?.is_coming_soon || _;
        return (0, _.jsxs)(_._, {
          className: (0, _._)({
            [_().StoreSaleWidgetOuterContainer]: !0,
            [_().AllowTwoLineHeader]: _,
            StoreSaleWidgetOuterContainer: !0,
          }),
          "flow-children": "grid",
          navEntryPreferPosition: _._.PREFERRED_CHILD,
          autoFocus: _,
          navKey: "preview_widget_" + (0, _._)(_),
          children: [
            (0, _.jsx)(_._, {
              appid: _ && "appid" in _ ? _.appid : void 0,
              children: (0, _.jsxs)(_._, {
                onClick: _ ? _ : void 0,
                className: (0, _._)({
                  [_().StoreSaleWidgetContainer]: !0,
                  [_().SaleItemDefaultCapsuleDisplay]: !0,
                  [_().MarketingMessage]: _,
                }),
                ...(0, _._)(_, _, _, Boolean(_), void 0, _),
                preferredFocus: _,
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(_().StoreSaleWidgetHalfLeft),
                    children: (0, _.jsx)(_, {
                      _: _,
                      strURL: _,
                      children: (0, _.jsxs)("div", {
                        className: _().StoreSaleWidgetImage,
                        children: [
                          (0, _.jsx)(_._, {
                            appids: _,
                          }),
                          (0, _.jsx)(_._, {
                            _: _,
                            imageType: "header",
                            bPreferAssetWithoutOverride: _,
                          }),
                          (0, _.jsx)(_._, {
                            _: _,
                          }),
                          (0, _.jsx)(_._, {
                            _: _,
                            active: _ && _,
                            bIsHoverMode: !0,
                            bGrowOnHover: !0,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)({
                      [_().StoreSaleWidgetRight]: !0,
                      [_().Bundle]: _,
                    }),
                    children: [
                      Boolean(_ && !_) &&
                        (0, _.jsx)(_._, {
                          _: _,
                          classOverride: (0, _._)(
                            _().WishlistButtonNotTop,
                            "WishlistButton",
                          ),
                          snr: _,
                        }),
                      (0, _.jsx)("div", {
                        className: _().TitleCtn,
                        children: (0, _.jsx)("a", {
                          href: _ ? void 0 : _,
                          target: _._.IN_CLIENT ? void 0 : "_blank",
                          onClick: _,
                          children: (0, _.jsx)("div", {
                            className: (0, _._)(
                              _().StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle",
                            ),
                            children: _,
                          }),
                        }),
                      }),
                      !_ &&
                        (0, _.jsx)(_, {
                          _: _,
                        }),
                      (0, _.jsxs)("div", {
                        className: _().WidgetReleaseDateAndPlatformCtn,
                        ref: _,
                        children: [
                          _ &&
                            (0, _.jsx)(_, {
                              _: _,
                            }),
                          !_ &&
                            !_ &&
                            _ &&
                            (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)(_._, {
                                  _: _,
                                  bMinimizePlatforms: _,
                                }),
                                Boolean(_ && 0 == _.item_type) &&
                                  (0, _.jsx)(_._, {
                                    className: _().DeckCompatIcon,
                                    _: _,
                                  }),
                              ],
                            }),
                        ],
                      }),
                      !_ &&
                        _ &&
                        _ &&
                        (0, _.jsx)("div", {
                          className: _().ReviewScores,
                          children: (0, _.jsx)(_._, {
                            _: _,
                          }),
                        }),
                      _ &&
                        _ &&
                        (0, _.jsx)(_, {
                          _: _,
                          bHideInLibraryApps: !_ && 2 == _.item_type && _ < _,
                        }),
                      Boolean(_) &&
                        (0, _.jsx)(_, {
                          _: _,
                        }),
                      Boolean(!_)
                        ? (0, _.jsx)(_.Fragment, {
                            children:
                              _ && _ && _
                                ? (0, _.jsx)(_._, {
                                    appid: _,
                                    bIsMuted: Boolean(_),
                                  })
                                : (0, _.jsx)(_._, {
                                    _: _,
                                    bShowDemoButton: _,
                                    bHidePrice: _,
                                    bHideWishlistButton: _,
                                    bShowDeckCompatibilityDialog: _,
                                  }),
                          })
                        : (0, _.jsx)("div", {
                            className: _().StoreActionWidgetContainer,
                            children: (0, _.jsx)("div", {
                              className:
                                _().StoreSalePriceActionWidgetContainer,
                              children: (0, _.jsx)(_._, {
                                _: _,
                              }),
                            }),
                          }),
                      (0, _.jsx)("div", {
                        className: _().StoreSaleWidgetBgTint,
                        children: (0, _.jsx)(_._, {
                          _: _,
                          bPreferAssetWithoutOverride: _,
                          imageType: "header",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Boolean(_.strReason && _.strReason.length > 0) &&
              (0, _.jsx)("div", {
                className: _().RecommendationReason,
                children: _.strReason,
              }),
          ],
        });
      }
      function _(_) {
        const { _: _, strURL: __webpack_require__, children: _ } = _;
        return "appid" in _
          ? (0, _.jsxs)(_._, {
              _: _,
              children: [_, " "],
            })
          : (0, _.jsx)("a", {
              href: __webpack_require__,
              children: _,
            });
      }
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_);
        return __webpack_require__
          ? (0, _.jsx)("div", {
              className: _().StoreSaleWidgetRelease,
              children: (0, _._)(__webpack_require__),
            })
          : null;
      }
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)();
        if (!(__webpack_require__ && _ && _.short_description && _))
          return null;
        const _ = _?.discount_pct || 0,
          _ = __webpack_require__.included_appids?.length || 0,
          _ =
            __webpack_require__.included_appids?.filter((_) => _?.has(_))
              ?.length || 0;
        let _ = _.short_description;
        const _ = 1 == __webpack_require__.item_type && 1 == _,
          _ =
            2 == __webpack_require__.item_type &&
            Boolean(_?.must_purchase_as_set);
        return (
          (2 == __webpack_require__.item_type ||
            (1 == __webpack_require__.item_type && !_)) &&
            (_ =
              !_ && _ > 0 && _ < _
                ? (0, _._)("#Sale_Bundle_CompletePartialSet", _, _)
                : _ > 0
                  ? (0, _._)("#Sale_BundleSave_WithDiscount", _, _)
                  : (0, _._)("#Sale_BundleSave", _)),
          (0, _.jsx)("div", {
            className: (0, _._)(
              _().StoreSaleWidgetShortDesc,
              "StoreSaleWidgetShortDesc",
            ),
            children: Boolean(_.startsWith("#") && -1 == _.indexOf(" "))
              ? (0, _.jsx)("span", {
                  className: _().LocalizationSpan,
                  children: (0, _._)(
                    _,
                    (0, _.jsx)("i", {}),
                    (0, _.jsx)("i", {}),
                    (0, _.jsx)("i", {}),
                    (0, _.jsx)("i", {}),
                  ),
                })
              : _,
          })
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            _: _,
            bShowDemoButton: __webpack_require__,
            bShowPurchaseOptionsButton: _,
            fnOnPurchaseOptionsClick: _,
            bHidePrice: _,
            bShowDeckCompatibilityDialog: _,
            className: _,
            bShowCartButton: _,
          } = _,
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { bIsOwned: _ } = (0, _._)(_);
        if (!_) return null;
        const _ =
            (1 === _.type && !_?.is_coming_soon) ||
            (_.related_items?.demo_appid &&
              _.related_items?.demo_appid.length > 0),
          _ = (0, _._)(_.type),
          _ = __webpack_require__ && _ && _;
        let _ = null;
        if (!_ && _?.is_free_to_keep && _?.free_to_keep_ends) {
          const _ = _.free_to_keep_ends,
            _ = (0, _._)(
              "#Sale_default_label_Free_Promo_Description_Short",
              (0, _._)(_) +
                " @ " +
                (0, _._)(_, {
                  bForce24HourClock: !1,
                }),
            );
          _ = (0, _.jsxs)("div", {
            className: _().PurchaseOptionDetails,
            children: [
              _,
              (0, _.jsx)(_._, {
                tooltip: (0, _._)(
                  "#Sale_default_Tooltip_Free_Promo_Limitation",
                ),
              }),
            ],
          });
        }
        return (0, _.jsxs)("div", {
          className: (0, _._)(_().StoreActionWidgetContainer, _),
          children: [
            _,
            (0, _.jsxs)("div", {
              className: _().StoreSalePriceActionWidgetContainer,
              children: [
                Boolean(_) &&
                  (0, _.jsx)(_._, {
                    _: _,
                    className: _().Action,
                  }),
                Boolean(!_) &&
                  1 !== _.type &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      Boolean(_ && !_.is_free) &&
                        (0, _.jsx)(_, {
                          fnOnPurchaseOptionsClick: _,
                        }),
                      Boolean(_ && !_.is_free) &&
                        (0, _.jsx)(_._, {
                          _: _,
                          className: "CartBtn",
                        }),
                    ],
                  }),
                Boolean(!_) &&
                  (0, _.jsx)(_._, {
                    _: _,
                  }),
                Boolean(_) &&
                  (0, _.jsx)(_._, {
                    _: _,
                  }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        return (0, _.jsx)("div", {
          className: _().Action,
          onClick: _.fnOnPurchaseOptionsClick,
          children: (0, _.jsx)("span", {
            children: (0, _._)(
              "#EventDisplay_CallToAction_ShowPurchaseOptions_Button",
            ),
          }),
        });
      }
    },
  },
]);
