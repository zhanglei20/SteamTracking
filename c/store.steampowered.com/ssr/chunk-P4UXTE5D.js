import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _(_()),
  _ = _.default.forwardRef(function (_, _) {
    let {
        onExplicitFocusLevelChanged: _,
        onOKButton: _,
        onCancelButton: _,
        navRef: _,
        focusable: _,
        ..._
      } = _,
      _ = _.default.useRef(null),
      { fnOnOKButton: _, fnOnCancelButton: _ } = _({
        navRefPanel: _,
        onOKButton: _,
        onCancelButton: _,
        onExplicitFocusLevelChanged: _,
      }),
      _ = _(_, _);
    return (0, _.jsx)(_, {
      ..._,
      onOKButton: _,
      onCancelButton: _,
      navRef: _,
      ref: _,
      focusable: _ !== !1,
    });
  });
var _ = _.default.forwardRef(function (_, _) {
  let { onOKButton: _, onCancelButton: _, navRef: _, focusable: _, ..._ } = _,
    _ = _.default.useRef(null),
    _ = _.default.useRef(null),
    _ = _.default.useCallback((_, _) => _.FocusVisibleChild(), []),
    { fnOnOKButton: _, fnOnCancelButton: _ } = _({
      navRefPanel: _,
      onOKButton: _,
      onCancelButton: _,
      fnFocusChildren: _,
    }),
    _ = _(_, _),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    ..._,
    onOKButton: (_) => _?.(_),
    onCancelButton: _,
    navRef: _,
    ref: _,
    focusable: _ !== !1,
  });
});
function _(_) {
  let {
    navRefPanel: _,
    onOKButton: _,
    onCancelButton: _,
    onExplicitFocusLevelChanged: _,
    fnFocusChildren: _,
  } = _;
  _ = _ ?? _;
  let _ = _.default.useCallback(
      (_) => {
        let _ = _.current;
        return _?.BHasFocus() && _(_, _.detail.button)
          ? (_ && _(!0), !0)
          : _
            ? _(_)
            : !1;
      },
      [_, _, _, _],
    ),
    _ = _.default.useCallback(
      (_) => {
        let _ = _.current;
        return _?.BFocusWithin() &&
          !_.BHasFocus() &&
          _.TakeFocus(_.detail.button)
          ? (_ && _(!1), !0)
          : _
            ? _(_)
            : !1;
      },
      [_, _, _],
    );
  return {
    fnOnOKButton: _,
    fnOnCancelButton: _,
  };
}
function _(_, _) {
  return _.ChildTakeFocus(_);
}
export { _ };
