var _ = _(_(), 1);
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    viewBoxSize: 16,
    children: (0, _.jsx)("path", {
      _: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
      fill: "currentColor",
    }),
  });
}
var _ = {};
_(_, {
  Checkbox: () => _,
  Disabled: () => _,
  Icon: () => _,
  Root: () => _,
  "Variant-dark": () => _,
  "Variant-light": () => _,
  default: () => _,
});
var _ = "V4koQHiHveU-";
var _ = "kSQKQUywwFM-";
var _ = "WQ65XubCb-o-";
var _ = "odvdvvi2aNY-";
var _ = "ueZFI-S1E78-";
var _ = "EbWPXWfblAU-";
var _ = {
  Root: "V4koQHiHveU-",
  "Variant-light": "kSQKQUywwFM-",
  "Variant-dark": "WQ65XubCb-o-",
  Disabled: "odvdvvi2aNY-",
  Checkbox: "ueZFI-S1E78-",
  Icon: "EbWPXWfblAU-",
};
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let {
      checked: _,
      onChange: _,
      disabled: _,
      children: _,
      ref: _,
      variant: _ = "default",
      ..._
    } = _,
    _ = _ === "indeterminate",
    _ = _ ? _ : _,
    _ = () => {
      _ || (_ && _(_ ? !0 : !_));
    },
    _ = (_) => {
      _ || (_.key === " " && (_(), _.preventDefault(), _.stopPropagation()));
    };
  return (0, _.jsxs)(_, {
    ref: _,
    role: "checkbox",
    "aria-checked": _ ? "mixed" : _,
    "data-state": _(_),
    className: (0, _.default)(_, _[`Variant-${_}`], _ && _),
    onClick: _,
    tabIndex: 0,
    onKeyDown: _,
    cursor: "default",
    "aria-disabled": _,
    ..._,
    children: [
      (0, _.jsx)("div", {
        className: _,
        children:
          _ &&
          (0, _.jsx)(_, {
            className: _,
          }),
      }),
      _,
    ],
  });
}
function _(_) {
  return _ === "indeterminate" ? _ : _ ? "checked" : "unchecked";
}
function _(_) {
  return (0, _.jsx)("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, _.jsx)("path", {
      _: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
      fill: "currentColor",
    }),
  });
}
export { _ };
