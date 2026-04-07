var _ = _(_(), 1);
var _ = "_9fpFHkyl3os-";
var _ = "iRapBRRENfU-";
var _ = "WlnQdqsCe5s-";
var _ = "HDXo8DVlUxI-";
var _ = "Y0BqhPMsT9c-";
var _ = "V-LvlBLm8Ec-";
var _ = "fUANDUOQZKI-";
var _ = "z6pKAodZuZk-";
var _ = "oVHBLGiJz-M-";
var _ = _(_(), 1);
function _(_) {
  let { _: _ = "div", ref: _, ..._ } = _,
    _ = _(
      {
        ..._,
        className: (0, _.default)(_.className, _),
      },
      _,
    ),
    _ = !_.disabled && !!_.onClick;
  return (0, _.jsx)(_, {
    focusable: _,
    children: (0, _.jsx)(_, {
      ref: _,
      ..._,
    }),
  });
}
var _ = [
  ..._,
  {
    prop: "direction",
    responsive: !0,
    className: _,
    cssProperty: "--direction",
  },
  {
    prop: "justify",
    responsive: !0,
    className: _,
    cssProperty: (_) => ["--justify", _(_)],
  },
  {
    prop: "align",
    responsive: !0,
    className: _,
    cssProperty: "--align",
  },
  {
    prop: "gap",
    responsive: !0,
    className: _,
    cssProperty: (_) => ["--gap", `var(--spacing-${_})`],
  },
  {
    prop: "gapX",
    responsive: !0,
    className: _,
    cssProperty: (_) => ["--gap-x", `var(--spacing-${_})`],
  },
  {
    prop: "gapY",
    responsive: !0,
    className: _,
    cssProperty: (_) => ["--gap-y", `var(--spacing-${_})`],
  },
  {
    prop: "wrap",
    responsive: !0,
    className: _,
    cssProperty: "--wrap",
  },
  {
    prop: "inline",
    responsive: !0,
    className: _,
  },
];
function _(_) {
  return /^(between|around|evenly)$/.test(_) ? `space-${_}` : _;
}
var _ = _(_(), 1);
var _ = {};
_(_, {
  Button: () => _,
  Icon: () => _,
  MinWidth: () => _,
  "Size-1": () => _,
  "Size-2": () => _,
  "Size-3": () => _,
  "Variant-default": () => _,
  "Variant-ghost": () => _,
  "Variant-inverted": () => _,
  "Variant-outline": () => _,
  "Variant-vibrant": () => _,
  Width: () => _,
  default: () => _,
});
var _ = "krQEbDRNCFg-";
var _ = "eAUu1dfYhY4-";
var _ = "wM4CKvSeUvQ-";
var _ = "Thio3V0imwc-";
var _ = "BDB70va3s7Q-";
var _ = "_0DdgBbU2bPk-";
var _ = "xgdYv2N2DL0-";
var _ = "_7P8JRbq-SlA-";
var _ = "_00yXGTmxZZc-";
var _ = "WtPsF-bmIEM-";
var _ = "OG8iH-W7xM0-";
var _ = "_2RWLTCLE-0s-";
var _ = {
  Button: "krQEbDRNCFg-",
  "Size-1": "eAUu1dfYhY4-",
  Icon: "wM4CKvSeUvQ-",
  "Size-2": "Thio3V0imwc-",
  "Size-3": "BDB70va3s7Q-",
  "Variant-default": "_0DdgBbU2bPk-",
  "Variant-inverted": "xgdYv2N2DL0-",
  "Variant-outline": "_7P8JRbq-SlA-",
  "Variant-ghost": "_00yXGTmxZZc-",
  "Variant-vibrant": "WtPsF-bmIEM-",
  Width: "OG8iH-W7xM0-",
  MinWidth: "_2RWLTCLE-0s-",
};
var _ = "ykNywW4cg64-";
function _() {
  return _;
}
var _ = {};
_(_, {
  ChildContainer: () => _,
  LoadingSpinnerAmin: () => _,
  "Size-1": () => _,
  "Size-2": () => _,
  "Size-3": () => _,
  "Size-4": () => _,
  "Size-5": () => _,
  Spinner: () => _,
  "Variant-bright": () => _,
  "Variant-solid": () => _,
  default: () => _,
});
var _ = "ACrWf5j7E-0-";
var _ = "U22zlbIZu1U-";
var _ = "oxVXOpRmRus-";
var _ = "_3S7Mbdfs6-I-";
var _ = "TZ7XzJAqyQM-";
var _ = "Hk-gANeEZh4-";
var _ = "hUCypSLcrVE-";
var _ = "nP2jrRq8bd4-";
var _ = "S365ReL0Reo-";
var _ = "_0vdvMPYVPfc-";
var _ = {
  Spinner: "ACrWf5j7E-0-",
  LoadingSpinnerAmin: "U22zlbIZu1U-",
  "Size-1": "oxVXOpRmRus-",
  "Size-2": "_3S7Mbdfs6-I-",
  "Size-3": "TZ7XzJAqyQM-",
  "Size-4": "Hk-gANeEZh4-",
  "Size-5": "hUCypSLcrVE-",
  "Variant-solid": "nP2jrRq8bd4-",
  "Variant-bright": "S365ReL0Reo-",
  ChildContainer: "_0vdvMPYVPfc-",
};
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let {
    size: _ = "3",
    loading: _ = !0,
    children: _,
    color: _,
    variant: _,
    ..._
  } = _;
  return _ || !_
    ? (0, _.jsxs)(_, {
        position: "relative",
        ..._,
        width: "fit-content",
        children: [
          (0, _.jsx)("div", {
            "data-visibility": !_,
            className: _,
            children: _,
          }),
          _ &&
            (0, _.jsx)(_, {
              position: "absolute",
              inset: "0",
              justify: "center",
              align: "center",
              children: (0, _.jsx)(_, {
                size: _,
                color: _,
                variant: _,
              }),
            }),
        ],
      })
    : (0, _.jsx)(_, {
        size: _,
        color: _,
        variant: _,
        ..._,
      });
}
function _(_) {
  let { className: _, color: _, ..._ } = _(_, _);
  return (0, _.jsx)("div", {
    "data-accent-color": _,
    className: (0, _.default)(_, _),
    ..._,
  });
}
var _ = [
  ..._,
  {
    prop: "size",
    responsive: !0,
    className: (_) => _[`Size-${_}`],
  },
  {
    prop: "variant",
    className: (_) => _[`Variant-${_}`],
  },
];
var _ = _(_(), 1);
function _(_) {
  let {
      variant: _ = "default",
      size: _ = "2",
      minWidth: _ = "fit-content",
      color: _,
      loading: _,
      children: _,
      onClick: _,
      icon: _,
      gamepadFocusable: _ = !0,
      ..._
    } = _,
    _ = _
      ? (0, _.jsx)(_, {
          size: _,
          color: _,
          variant: "bright",
          children: _,
        })
      : _,
    _ = _ ? void 0 : _,
    _ = _ && _.IN_GAMEPADUI ? _ : "button";
  return (0, _.jsx)(_, {
    type: "button",
    ..._(
      {
        ..._,
        variant: _,
        size: _,
        minWidth: _,
        color: _,
        className: (0, _.default)(_, _ && _),
        onClick: _,
      },
      _,
    ),
    children: _,
  });
}
function _(_) {
  let {
      variant: _ = "default",
      size: _ = "2",
      minWidth: _ = "fit-content",
      disabled: _,
      icon: _,
      gamepadFocusable: _ = !0,
      ..._
    } = _,
    _ = _ ? _ : void 0,
    _ = _ && _.IN_GAMEPADUI ? _ : "a";
  return (0, _.jsx)(_, {
    ..._(
      {
        onClick: _,
        ..._,
        variant: _,
        size: _,
        minWidth: _,
        className: (0, _.default)(_, _ && _, _()),
      },
      _,
    ),
  });
}
function _(_) {
  _.preventDefault();
}
var _ = [
  ..._,
  {
    prop: "size",
    responsive: !0,
    className: (_) => _[`Size-${_}`],
  },
  {
    prop: "variant",
    className: (_) => _[`Variant-${_}`],
  },
  {
    prop: "color",
    dataProperty: (_) => ["accent-color", `${_}`],
  },
  {
    prop: "width",
    className: _,
    cssProperty: "--width",
    responsive: !0,
  },
  {
    prop: "minWidth",
    className: _,
    cssProperty: "--min-width",
    responsive: !0,
  },
];
var _ = _,
  _ = _;
export { _, _, _, _ };
