(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [721],
  {
    chunkid: (module) => {
      module.exports = {
        MoreDots: "_2YpW8SafRsHDfQIUT2DzUP",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PriceCell: "_1sKIcxV1HaEWCa1x_sSuVT",
        PricePrefix: "gPcNwuh4LJPmwRZrAbrA5",
        PriceSuffix: "_3AEJb3AH01qQaG89JOYAh4",
        EditablePrice: "pm5xM6Dyy-9XY0g9TpjX1",
        PriceInput: "_1PcwXjG-2t5JOJuL7yhOYG",
        USD: "_1C7qRJ6YdGWEwEK4QsMRUX",
        ProposedPrice: "rVkmDwpTOXR4DqdBdbiPf",
        ApprovedCanPublish: "_1JBd8mxmIpyOChqhkSKSUg",
        ChangedLocally: "_5mvGWs3IDSRLfxvHx8wig",
        WarningPrice: "_1Qd5uW_BK8PBDJiDBjDCPN",
        SevereWarningPrice: "_1o6zP8gegcka6hdQA2lJjv",
        BadPrice: "_18aiu0HZznAMnGQfWExtTm",
        PriceChange: "w-K7qF60ELXWtEjymcY68",
        NewPrice: "_3sgbtvMYimrD0kSs3VCoPx",
        PriceAlert: "_2eadUvk4zK7FL9FFvy3Gd2",
        PriceChangeArrow: "_1z0l2rhYAxXf6M_tgnczgZ",
        PriceIncrease: "_2jQyP7o7hbWM4EhAkKLAks",
        PricePopout: "_1AoyzK2lSPVwQJoIYEjFbR",
        DetailRow: "_3P_fJH02fBcdGM2etenWu7",
        DetailLabel: "_3RXb3FOdpsOt-aVMvfnb6W",
        DetailPrice: "_2k3CVLd6A1QAixKOkfGx6P",
        DetailButton: "_3ILP7OdXtGjDaSvJqI81RV",
        Disabled: "_3mZHsQVQB8w84OblleAq68",
        HoverToolTip: "_36qS74l1tXSXwGdyfIFQ-G",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PriceGuidelinesPicker: "_2skmsPR7jCBo5xHN2v_E6A",
        GuidelinesPanel: "_29sQa7P4ANi-KFpS_lkroj",
        GuidelinesDescription: "_3poXK_qmmnRcHLvBGFqi8h",
        GuidelinesGrid: "_1Kz7R_x889mAnYo3uORnzL",
        GridElement: "_1r_b9RJn1Ca6KSjtSm7RPF",
        CurrentPrice: "_3wZdsoh1-V6RQ2rsPkj-ga",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PopoverMenu: "_2i2FUBZKGyiP5Sb6tuASpO",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._("price-grid-cell-popout-elements");
      function _(_) {
        let { hoverKey: _, className: __webpack_require__, renderHover: _ } = _,
          _ = (0, _._)(_().MoreDots, __webpack_require__),
          _ = _.useRef(void 0),
          _ = _.useCallback(() => {
            _.HideElement(_.current.ownerDocument, _);
          }, [_]);
        return _.createElement(
          "div",
          {
            ref: _,
            tabIndex: -1,
            className: _,
            onFocus: (_) => {
              _.target.focus();
              let _ = _.createElement(
                _._,
                {
                  target: _.current,
                  direction: "top",
                  bEnablePointerEvents: !0,
                  nBodyDistance: 0,
                  onClick: _,
                },
                _(),
              );
              _.ShowElement(_.current.ownerDocument, _, _);
            },
            onBlur: () => {
              _.HideElement(_.current.ownerDocument, _, 100);
            },
          },
          _.createElement(_.faJ, null),
        );
      }
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            direction: _,
            ignoreHorizontal: __webpack_require__,
            ignoreVertical: _,
            dismissOnClick: _,
            interactionMode: _ = 0,
          } = _,
          _ = (0, _.useRef)(null),
          _ = (0, _.useRef)(!1),
          _ = (0, _.useRef)(!1),
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useMemo)(
            () =>
              (function (_) {
                const [_, __webpack_require__] = (0, _._)(_, "-");
                return "left" === _ || "right" === _
                  ? [void 0, _]
                  : [_, __webpack_require__];
              })(_),
            [_],
          ),
          _ = (0, _.useCallback)(() => {
            if (!_.current || !_.current) return;
            const _ = _.current.getBoundingClientRect();
            let _ = _;
            const _ = _.current.matches(":dir(rtl)");
            _ && ("left" === _ ? (_ = "right") : "right" === _ && (_ = "left")),
              _.current.style.setProperty("--parentWidth", `${_.width}px`),
              _.current.style.setProperty("--parentHeight", `${_.height}px`),
              __webpack_require__ ||
                ("left" === _
                  ? _
                    ? ((_.current.style.left = "unset"),
                      (_.current.style.right =
                        document.documentElement.clientWidth - _.right + "px"))
                    : ((_.current.style.left = "unset"),
                      (_.current.style.right =
                        document.documentElement.clientWidth - _.left + "px"))
                  : "right" === _
                    ? _
                      ? ((_.current.style.left = `${_.left}px`),
                        (_.current.style.right = "unset"))
                      : ((_.current.style.left = `${_.right}px`),
                        (_.current.style.right = "unset"))
                    : void 0 === _ &&
                      (_
                        ? ((_.current.style.left = "unset"),
                          (_.current.style.right =
                            document.documentElement.clientWidth -
                            _.right +
                            "px"))
                        : ((_.current.style.left = `${_.left}px`),
                          (_.current.style.right = "unset")))),
              _ ||
                ("down" === _
                  ? ((_.current.style.top = `${_.bottom}px`),
                    (_.current.style.bottom = "unset"),
                    _.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - _.bottom + "px",
                    ))
                  : "up" === _
                    ? ((_.current.style.top = "unset"),
                      (_.current.style.bottom =
                        document.documentElement.clientHeight - _.top + "px"),
                      _.current.style.setProperty(
                        "--availableHeight",
                        `${_.top}px`,
                      ))
                    : void 0 === _ &&
                      ((_.current.style.top = `${_.top}px`),
                      (_.current.style.bottom = "unset"),
                      _.current.style.setProperty(
                        "--availableHeight",
                        document.documentElement.clientHeight - _.top + "px",
                      )));
          }, [_, __webpack_require__, _, _]),
          _ = (0, _.useMemo)(() => {
            if (_.current) return (0, _._)(_.current);
          }, [_.current]);
        (0, _.useEffect)(
          () =>
            _
              ? (_.current?.showPopover(),
                _?.addEventListener("scroll", _),
                () => _?.removeEventListener("scroll", _))
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  _.current?.hidePopover(),
                () => {}),
          [_, _, _],
        );
        const _ = (0, _.useCallback)(() => {
            _(), _(!0), (_.current = !0);
          }, [_]),
          _ = (0, _.useCallback)(() => {
            (_.current = !1), _.current || _(!1);
          }, []),
          _ = (0, _.useCallback)(() => {
            (_.current = !0), _(!0);
          }, []),
          _ = (0, _.useCallback)(() => {
            (_.current = !1), _.current || _(!1);
          }, []),
          _ = (0, _.useCallback)(() => {
            _(), _();
          }, [_, _]),
          _ = (0, _.useCallback)(
            (_) => {
              "Enter" === _.key && (_.preventDefault(), _ ? _() : _());
            },
            [_, _, _],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              _.currentTarget.contains(_.relatedTarget) ||
                _.current?.contains(_.relatedTarget) ||
                _();
            },
            [_],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              const _ =
                  _.relatedTarget && !_.currentTarget.contains(_.relatedTarget),
                _ = !_.relatedTarget && !_.current;
              (_ || _) && (_(), _(!1));
            },
            [_],
          ),
          _ = (0, _.useCallback)(() => {
            _ && _ ? _() : _();
          }, [_, _, _, _]),
          _ = (0, _.useCallback)(
            (_) => {
              "Enter" === _.key && _ && _ ? _() : _(),
                "Escape" === _.key && _ && (_(), _.stopPropagation());
            },
            [_, _, _, _],
          ),
          _ = 0 === _;
        let _;
        _ && !_
          ? (_ = (_) => {
              _.preventDefault(), _();
            })
          : _ || (_ = _ ? _ : _);
        const _ = {
            "aria-expanded": _,
            role: "button",
            onMouseEnter: _ ? _ : void 0,
            onMouseLeave: _ ? _ : void 0,
            onClick: _,
            ref: _,
            onKeyDown: _,
            onBlur: _,
          },
          _ = {
            popover: "manual",
            ref: _,
            onMouseEnter: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
            onClick: _,
            onKeyDown: _,
            className: _.PopoverMenu,
          };
        return {
          isShowingMenu: _,
          triggerProps: _,
          menuProps: _,
          closeMenu: _,
        };
      }
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (
            await __webpack_require__
              ._("chunkid")
              .then(__webpack_require__.bind(__webpack_require__, "chunkid"))
          ).apply();
        }
      })();
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return (_) => {
          _?.(_), _?.(_);
        };
      }
      function _(_) {
        const {
            direction: _,
            interactionMode: __webpack_require__ = 0,
            ignoreHorizontal: _,
            ignoreVertical: _,
            dismissOnClick: _,
            menuTarget: _,
            className: _,
            children: _,
            renderWhenClosed: _ = !0,
            ..._
          } = _,
          {
            isShowingMenu: _,
            triggerProps: _,
            menuProps: _,
            closeMenu: _,
          } = _(_),
          _ = _.useRef(null),
          _ = _.useRef(null);
        return (
          _.useEffect(() => {
            _
              ? _.current?.TakeFocus()
              : _.current?.BFocusWithin() && _.current?.TakeFocus();
          }, [_]),
          _.createElement(
            _.Fragment,
            null,
            _.cloneElement(_, {
              ..._,
              onMouseEnter: _(_.props.onMouseEnter, _.onMouseEnter),
              onMouseLeave: _(_.props.onMouseLeave, _.onMouseLeave),
              navRef: _,
            }),
            _.createElement(
              _._,
              {
                ..._,
                ..._,
                className: _()(_.className, _),
                navRef: _,
                onCancel: _,
                onFocusWithin: (_) => !_ && _(),
                childFocusDisabled: !_,
              },
              _.createElement(_._, null, (_ || _) && _),
            ),
          )
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      const _ = {};
      (_.arabic = () =>
        __webpack_require__
          ._("chunkid")
          .then(__webpack_require__._.bind(__webpack_require__, 46873, 19))),
        (_.brazilian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 1365, 19))),
        (_.bulgarian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 83966, 19))),
        (_.czech = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 51360, 19))),
        (_.danish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 98292, 19))),
        (_.dutch = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 44993, 19))),
        (_.english = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 3703, 19))),
        (_.finnish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 86376, 19))),
        (_.french = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 67325, 19))),
        (_.german = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 69263, 19))),
        (_.greek = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 14399, 19))),
        (_.hungarian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 91706, 19))),
        (_.indonesian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 69341, 19))),
        (_.italian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 97511, 19))),
        (_.japanese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 40330, 19))),
        (_.koreana = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 96252, 19))),
        (_.latam = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 90204, 19))),
        (_.norwegian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 40839, 19))),
        (_.polish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 78816, 19))),
        (_.portuguese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 98160, 19))),
        (_.romanian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 73546, 19))),
        (_.russian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 84302, 19))),
        (_.schinese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 46461, 19))),
        (_.spanish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 18167, 19))),
        (_.swedish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 22438, 19))),
        (_.tchinese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 46006, 19))),
        (_.thai = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 96727, 19))),
        (_.turkish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 51639, 19))),
        (_.ukrainian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 21973, 19))),
        (_.vietnamese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 53946, 19)));
      const _ = (0, _._)(async function (_) {
        if (_[_]) return _[_]();
      });
      function _(_) {
        const _ = _.createElement(
          "button",
          {
            className: _().PriceGuidelinesPicker,
          },
          _.createElement(_.GB9, null),
        );
        return _.createElement(
          _,
          {
            menuTarget: _,
            direction: "down",
            interactionMode: 1,
            dismissOnClick: !0,
          },
          _.createElement(_, {
            ..._,
          }),
        );
      }
      function _(_) {
        const {
            fnGetUSDPriceInCents: _,
            fnOnUpdate: __webpack_require__,
            strDescription: _,
          } = _,
          _ = (0, _._)(),
          _ = _();
        if (!_) return null;
        const _ = _.GetUSDPricePointsInCents();
        return _.createElement(
          "div",
          {
            className: _().GuidelinesPanel,
          },
          _.createElement(
            "div",
            {
              className: _().GuidelinesDescription,
            },
            _ || _.Localize("#PricingGuideline_Default"),
          ),
          _.createElement(
            "div",
            {
              className: _().GuidelinesGrid,
            },
            _.map((_) =>
              _.createElement(
                "button",
                {
                  key: _,
                  onClick: () => __webpack_require__(_),
                  className: (0, _._)(
                    _().GridElement,
                    _ == _ && _().CurrentPrice,
                  ),
                },
                (0, _._)(_, _._.k_ECurrencyCodeUSD),
              ),
            ),
          ),
        );
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
        _ = __webpack_require__._(_);
      function _(_) {
        const { cell: _, row: __webpack_require__ } = _,
          _ = __webpack_require__.original.packageID,
          _ = _.getValue(),
          {
            nPriceInCents: _,
            nPublishedPriceInCents: _,
            nProposedPriceInCents: _,
            fnSetPrice: _,
          } = (0, _._)(_, _),
          [_, _, _] = (0, _._)(_, _),
          _ = (0, _._)(_),
          _ = _.useRef(void 0),
          _ = _ + _,
          { strClassName: _ } = _(_, _),
          _ = "USD" == _,
          _ = _ ?? _,
          _ = _ != _;
        return _.createElement(
          "div",
          {
            ref: _,
            onKeyDown: _._,
            className: _,
          },
          _ &&
            _.createElement(_, {
              nPriceInCents: _,
              nSavedPriceInCents: _,
            }),
          _ &&
            _.createElement(
              "div",
              {
                className: _().PricePrefix,
              },
              _,
            ),
          _.createElement(
            "div",
            {
              className: _().EditablePrice,
            },
            _.createElement(_._, {
              value: _,
              className: _().PriceInput,
              onChange: (_) => {
                const _ = _.target.value.replace(/[^0-9]/g, "");
                let _ = Number(_ || 0);
                if (Number.isNaN(_)) return;
                _.bWholeUnitsOnly && (_ *= 100);
                const _ = 2147483647;
                _ > _ && (_ = _), _(_);
              },
              onFocus: (_) => {
                _.target.select(),
                  _._.ShowElement(
                    _.current.ownerDocument,
                    _.createElement(
                      _._,
                      {
                        target: _.current,
                        direction: "top",
                        bEnablePointerEvents: !0,
                        nBodyDistance: 0,
                      },
                      _.createElement(_, {
                        key: _,
                        packageID: _,
                        strPriceKey: _,
                      }),
                    ),
                    _,
                  );
              },
              onBlur: () => {
                window.setTimeout(
                  () =>
                    _.current && _._.HideElement(_.current.ownerDocument, _),
                  500,
                );
              },
            }),
          ),
          _ &&
            _.createElement(
              "div",
              {
                className: _().PriceSuffix,
              },
              _,
            ),
          _ &&
            _.createElement(_, {
              packageID: _,
            }),
          _.createElement(_, {
            packageID: _,
            strPriceKey: _,
          }),
        );
      }
      function _(_) {
        const { packageID: _ } = _,
          { fnApplyGuidelines: __webpack_require__ } = (0, _._)((0, _._)());
        return _.createElement(_, {
          fnGetUSDPriceInCents: () => (0, _._)(_, "USD"),
          fnOnUpdate: (_) => __webpack_require__(_, _),
          strDescription: (0, _._)(
            "#PricingDashboard_GuidelinesPickerDescription",
          ),
        });
      }
      function _(_) {
        const { packageID: _, strPriceKey: __webpack_require__ } = _,
          {
            strPriceWarning: _,
            bBadPrice: _,
            bShowWarningIcon: _,
          } = _(_, __webpack_require__);
        return _
          ? _.createElement(
              _._,
              {
                className: _().PriceAlert,
                strTooltipClassname: _().HoverToolTip,
                toolTipContent: _,
                direction: "top",
              },
              _.createElement(_.eTF, {
                color: _ ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            )
          : null;
      }
      const _ = 2;
      function _(_, _) {
        const {
            nPriceInCents: __webpack_require__,
            nPublishedPriceInCents: _,
            nProposedPriceInCents: _,
            nMinPriceInCents: _,
            nMaxPriceInCents: _,
            nMaxDiscountPercentage: _,
            nSuggestedPriceInCents: _,
          } = (0, _._)(_, _),
          _ = (0, _._)(_),
          _ = "USD" == _,
          _ = __webpack_require__ != (_ ?? _),
          _ = __webpack_require__ < _,
          _ = !!_ && __webpack_require__ > _,
          _ = !!_ && __webpack_require__ > _ * _,
          _ = !!_ && __webpack_require__ < _ / _,
          _ = !!_ && __webpack_require__ < _ && !!_,
          _ =
            (_ && (0, _._)("#PricingDashboard_PriceIncreaseDisallowed")) ||
            (_ &&
              (0, _._)(
                "#PricingDashboard_PriceTooLow",
                (0, _._)(_, _).join(""),
              )) ||
            (_ &&
              (0, _._)(
                "#PricingDashboard_PriceMuchHigherThanGuidelines",
                (0, _._)(_, _).join(""),
              )) ||
            (_ &&
              (0, _._)(
                "#PricingDashboard_PriceMuchLowerThanGuidelines",
                (0, _._)(_, _).join(""),
              )) ||
            (_ &&
              (0, _._)(
                "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                _,
              )),
          _ = _ || _,
          _ = _ || _,
          _ = _ || _ || _,
          _ = !(_ || !_ || (_ && _ == _)),
          _ = 4 == _?.eState,
          _ = (0, _._)(
            _().PriceCell,
            _ && _().USD,
            _ && _().ChangedLocally,
            _ && _().ProposedPrice,
            _ && _().ApprovedCanPublish,
            _ && _().WarningPrice,
            _ && _().SevereWarningPrice,
            _ && _().BadPrice,
          );
        return _.useMemo(
          () => ({
            strPriceWarning: _,
            strClassName: _,
            bBadPrice: _,
            bShowSevereWarning: _,
            bShowWarningIcon: _,
          }),
          [_, _, _, _, _],
        );
      }
      function _(_) {
        const { nPriceInCents: _, nSavedPriceInCents: __webpack_require__ } = _;
        let _ = null,
          _ = null,
          _ = null,
          _ = null;
        if (__webpack_require__) {
          const _ = Math.ceil(
              (100 * (_ - __webpack_require__)) / __webpack_require__,
            ),
            _ = _ > __webpack_require__;
          (_ = _
            ? (0, _._)("#PricingDashboard_PriceIncreaseBy", _ + "%")
            : (0, _._)("#PricingDashboard_PriceLowerBy", _ + "%")),
            (_ = (0, _._)(_().PriceChange, _ && _().PriceIncrease)),
            (_ = _.createElement(
              "div",
              {
                className: _().PriceChangeArrow,
              },
              _.createElement(_.i3G, {
                angle: _ ? 0 : 180,
              }),
            )),
            (_ = _ + "%");
        } else
          (_ = (0, _._)("#PricingDashboard_PriceIsNew_Short")),
            (_ = (0, _._)(_().NewPrice));
        return _.createElement(
          _._,
          {
            className: _,
            strTooltipClassname: _().HoverToolTip,
            toolTipContent: _,
            direction: "top",
          },
          _,
          _,
        );
      }
      function _(_) {
        return new Date(1e3 * _).toLocaleString(_._.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
      function _(_) {
        const { packageID: _, strPriceKey: __webpack_require__ } = _,
          {
            nPriceInCents: _,
            nPublishedPriceInCents: _,
            nProposedPriceInCents: _,
            nSuggestedPriceInCents: _,
            fnSetPrice: _,
          } = (0, _._)(_, __webpack_require__),
          { nPriceInCents: _ } = (0, _._)(_, "USD"),
          _ = !(!_ || (_ && _ == _)),
          _ = (0, _._)(_),
          _ = _ && _(_.rtSubmitted),
          _ = (0, _._)(_?.submitterID),
          _ = _ ? _.m_strPlayerName : _?.submitterID;
        return _.createElement(
          "div",
          {
            className: _().PricePopout,
          },
          !!_ &&
            _.createElement(
              _._,
              {
                className: _().DetailRow,
                direction: "left",
                toolTipContent: (0, _._)(
                  "#PricingDashboard_CurrentPriceOnStore_ttip",
                ),
              },
              _.createElement(
                "div",
                {
                  className: _().DetailLabel,
                },
                (0, _._)("#PricingDashboard_CurrentPriceOnStore"),
              ),
              _.createElement(
                "div",
                {
                  className: _().DetailPrice,
                },
                (0, _._)(_, __webpack_require__).join(""),
              ),
              _.createElement(
                _._,
                {
                  className: (0, _._)(_().DetailButton, _ == _ && _().Disabled),
                  onClick: () => _(_),
                  bDisabled: _ == _,
                  toolTipContent: (0, _._)(
                    "#PricingDashboard_UseThisOldPrice_ttip",
                  ),
                },
                (0, _._)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          _ &&
            _.createElement(
              _._,
              {
                className: _().DetailRow,
                direction: "left",
                toolTipContent: (0, _._)(
                  "#PricingDashboard_ProposedPrice_ttip",
                  _,
                  _,
                ),
              },
              _.createElement(
                "div",
                {
                  className: _().DetailLabel,
                },
                (0, _._)("#PricingDashboard_ProposedPrice"),
              ),
              _.createElement(
                "div",
                {
                  className: _().DetailPrice,
                },
                (0, _._)(_, __webpack_require__).join(""),
              ),
              _.createElement(
                _._,
                {
                  className: (0, _._)(_().DetailButton, _ == _ && _().Disabled),
                  onClick: () => _(_),
                  bDisabled: _ == _,
                  toolTipContent: (0, _._)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, _._)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          !!_ &&
            _.createElement(
              _._,
              {
                className: _().DetailRow,
                direction: "left",
                toolTipContent: (0, _._)(
                  "#PricingDashboard_SuggestedPrice_ttip",
                  (0, _._)(_, "USD").join(""),
                ),
              },
              _.createElement(
                "div",
                {
                  className: _().DetailLabel,
                },
                (0, _._)("#PricingDashboard_SuggestedPrice"),
              ),
              _.createElement(
                "div",
                {
                  className: _().DetailPrice,
                },
                (0, _._)(_, __webpack_require__).join(""),
              ),
              _.createElement(
                _._,
                {
                  className: (0, _._)(_().DetailButton, _ == _ && _().Disabled),
                  onClick: () => _(_),
                  bDisabled: _ == _,
                  toolTipContent: (0, _._)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, _._)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = {
          [_._.k_ECurrencyCodeInvalid]: {},
          [_._.k_ECurrencyCodeUSD]: {
            strSymbol: "$",
          },
          [_._.k_ECurrencyCodeGBP]: {
            strSymbol: "£",
          },
          [_._.k_ECurrencyCodeEUR]: {
            strSymbol: "€",
          },
          [_._.k_ECurrencyCodeCHF]: {
            strSymbol: "CHF",
          },
          [_._.k_ECurrencyCodeRUB]: {
            strSymbol: "руб.",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: "",
          },
          [_._.k_ECurrencyCodePLN]: {
            strSymbol: "zł",
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeBRL]: {
            strSymbol: "R$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeJPY]: {
            strSymbol: "¥",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeNOK]: {
            strSymbol: "kr",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeIDR]: {
            strSymbol: "Rp",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeMYR]: {
            strSymbol: "RM",
          },
          [_._.k_ECurrencyCodePHP]: {
            strSymbol: "P",
          },
          [_._.k_ECurrencyCodeSGD]: {
            strSymbol: "S$",
          },
          [_._.k_ECurrencyCodeTHB]: {
            strSymbol: "฿",
          },
          [_._.k_ECurrencyCodeVND]: {
            strSymbol: "₫",
            bWholeUnitsOnly: !0,
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeKRW]: {
            strSymbol: "₩",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeTRY]: {
            strSymbol: "TL",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeUAH]: {
            strSymbol: "₴",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeMXN]: {
            strSymbol: "Mex$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeCAD]: {
            strSymbol: "CDN$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeAUD]: {
            strSymbol: "A$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeNZD]: {
            strSymbol: "NZ$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeCNY]: {
            strSymbol: "¥",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeINR]: {
            strSymbol: "₹",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
          },
          [_._.k_ECurrencyCodeCLP]: {
            strSymbol: "CLP$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodePEN]: {
            strSymbol: "S/.",
          },
          [_._.k_ECurrencyCodeCOP]: {
            strSymbol: "COL$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeZAR]: {
            strSymbol: "R",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeHKD]: {
            strSymbol: "HK$",
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeTWD]: {
            strSymbol: "NT$",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeSAR]: {
            strSymbol: "SR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeAED]: {
            strSymbol: "AED",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeSEK]: {
            strSymbol: "kr",
            bSpaceForSymbol: !0,
            bSuffixSymbol: !0,
          },
          [_._.k_ECurrencyCodeARS]: {
            strSymbol: "ARS$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeILS]: {
            strSymbol: "₪",
          },
          [_._.k_ECurrencyCodeBYN]: {
            strSymbol: "Br",
          },
          [_._.k_ECurrencyCodeKZT]: {
            strSymbol: "₸",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [_._.k_ECurrencyCodeKWD]: {
            strSymbol: "KD",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeQAR]: {
            strSymbol: "QR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeCRC]: {
            strSymbol: "₡",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeUYU]: {
            strSymbol: "$U",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [_._.k_ECurrencyCodeBGN]: {
            strSymbol: "лв",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeHRK]: {
            strSymbol: "kn",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeCZK]: {
            strSymbol: "Kč",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeDKK]: {
            strSymbol: "kr.",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeHUF]: {
            strSymbol: "Ft",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeRON]: {
            strSymbol: "lei",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [_._.k_ECurrencyCodeMax]: {},
        },
        _ = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: _._.k_ECurrencyCodeInvalid,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function _(_, _) {
        const _ = (function (_) {
            return {
              ..._,
              ..._[_],
              eCurrency: _,
            };
          })(_),
          {
            strSymbol: _,
            bSuffixSymbol: _,
            bSpaceForSymbol: _,
            bWholeUnitsOnly: _,
            strDecimalSymbol: _,
            strThousandsSeparator: _,
          } = _,
          _ = _ < 0,
          _ = _ && _ % 100 == 0;
        _ && (_ = -_);
        const _ = [];
        for (let _ = 0; _ < 2; _++)
          _ || _.push(_ % 10), (_ = Math.floor(_ / 10));
        !_ && _ && _.push(_);
        let _ = 0;
        do {
          _++ % 3 == 0 && _ > 2 && _ && _.push(_),
            _.push(_ % 10),
            (_ = Math.floor(_ / 10));
        } while (_ > 0);
        const _ = _.reverse().join(""),
          _ = _ ? " " : "",
          _ = _ ? "-" : "";
        return _ ? `${_}${_}${_}${_}` : `${_}${_}${_}${_}`;
      }
    },
  },
]);
