"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2965],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          ShoppingCartErrorModal: () => _,
          default: () => _,
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
        _ = __webpack_require__._(_);
      function _(_) {
        const { closeCart: _, lineItemIDs: _, replacedPackageIDs: _ } = _,
          _ = (0, _._)(),
          { data: _ } = (0, _._)(),
          _ = _.useMemo(
            () =>
              _.data && _ && 0 !== _.length
                ? _.data.line_items.filter((_) =>
                    __webpack_require__.includes(_.line_item_id),
                  )
                : null,
            [_, _.data],
          ),
          _ = (0, _._)(_._.STORE_BASE_URL + "cart");
        if (
          (_.useEffect(() => {
            _.isSuccess && _ && 0 === _.length && _();
          }, [_, _, _]),
          !_)
        )
          return null;
        const _ = _?.length > 0;
        return (0, _.jsxs)(_._, {
          active: !0,
          className: _().ShoppingCartModal,
          onDismiss: _,
          children: [
            (0, _.jsx)("div", {
              className: _().ShoppingCartHeader,
              children: (0, _._)(
                _ ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart",
              ),
            }),
            (0, _.jsx)(_._, {
              lineItems: _,
              cartValidation: _,
            }),
            (0, _.jsxs)(_._, {
              className: _().ShoppingCartModalBtns,
              children: [
                (0, _.jsx)(_._, {
                  onClick: _,
                  children: (0, _._)("#Cart_ContinueShopping"),
                }),
                (0, _.jsx)(_._, {
                  className: _().OpenCartBtn,
                  onClick: () => (window.location.href = _),
                  children: (0, _._)(
                    "#Cart_ViewMyCart",
                    _.data?.line_items.length,
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const { active: _, result: _, onDismiss: _ } = _;
        return (0, _.jsxs)(_._, {
          active: _,
          onDismiss: _,
          children: [
            (0, _.jsx)(_._, {
              children: (0, _._)("#Error_Generic"),
            }),
            (0, _.jsxs)("div", {
              className: _().ErrorModalContent,
              children: [
                (0, _.jsx)("div", {
                  className: _().ErrorModalMessage,
                  children: (0, _._)("#Cart_ErrorUpdating"),
                }),
                (0, _.jsx)("div", {
                  className: _().ErrorModalCode,
                  children: _ ? (0, _._)("#Cart_ErrorCode", _) : "",
                }),
                (0, _.jsx)("div", {
                  className: _().ErrorModalBottom,
                  children: (0, _.jsx)(_._, {
                    onClick: _,
                    children: (0, _._)("#Button_Close"),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
