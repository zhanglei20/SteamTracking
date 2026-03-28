var _ = _((_) => {
  "use strict";
  var _ = _();
  function _(_, _) {
    return (_ === _ && (_ !== 0 || 1 / _ === 1 / _)) || (_ !== _ && _ !== _);
  }
  var _ = typeof Object._ == "function" ? Object._ : _,
    _ = _.useState,
    _ = _.useEffect,
    _ = _.useLayoutEffect,
    _ = _.useDebugValue;
  function _(_, _) {
    var _ = _(),
      _ = _({
        inst: {
          value: _,
          getSnapshot: _,
        },
      }),
      _ = _[0].inst,
      _ = _[1];
    return (
      _(
        function () {
          (_.value = _),
            (_.getSnapshot = _),
            _(_) &&
              _({
                inst: _,
              });
        },
        [_, _, _],
      ),
      _(
        function () {
          return (
            _(_) &&
              _({
                inst: _,
              }),
            _(function () {
              _(_) &&
                _({
                  inst: _,
                });
            })
          );
        },
        [_],
      ),
      _(_),
      _
    );
  }
  function _(_) {
    var _ = _.getSnapshot;
    _ = _.value;
    try {
      var _ = _();
      return !_(_, _);
    } catch {
      return !0;
    }
  }
  function _(_, _) {
    return _();
  }
  var _ =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? _
      : _;
  _.useSyncExternalStore =
    _.useSyncExternalStore !== void 0 ? _.useSyncExternalStore : _;
});
var _ = _((_, _) => {
  "use strict";
  _.exports = _();
});
var _ = _(_());
if (!_.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!_)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var _ = _(_());
function _(_) {
  _();
}
function _(_) {
  _ || (_ = _),
    _({
      reactionScheduler: _,
    });
}
var _ = _(_());
function _(_) {
  return _(_);
}
var _ = !1;
function _() {
  return _;
}
var _ = 1e4,
  _ = 1e4,
  _ = (function () {
    function _(_) {
      var _ = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (_) {
            _ === void 0 && (_ = _),
              clearTimeout(_.sweepTimeout),
              (_.sweepTimeout = void 0);
            var _ = Date.now();
            _.registrations.forEach(function (_, _) {
              _ - _.registeredAt >= _ &&
                (_.finalize(_.value), _.registrations.delete(_));
            }),
              _.registrations.size > 0 && _.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            _.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(_.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_, _, _) {
          this.registrations.set(_, {
            value: _,
            registeredAt: Date.now(),
          }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(_.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          this.registrations.delete(_);
        },
      }),
      Object.defineProperty(_.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, _));
        },
      }),
      _
    );
  })();
var _ = typeof FinalizationRegistry < "u" ? FinalizationRegistry : _;
var _ = new _(function (_) {
  var _;
  (_ = _.reaction) === null || _ === void 0 || _.dispose(), (_.reaction = null);
});
var _ = _(_()),
  _ = function () {};
function _(_) {
  _.reaction = new _("observer".concat(_.name), function () {
    var _;
    (_.stateVersion = Symbol()),
      (_ = _.onStoreChange) === null || _ === void 0 || _.call(_);
  });
}
function _(_, _) {
  if ((_ === void 0 && (_ = "observed"), _())) return _();
  var _ = _.default.useRef(null);
  if (!_.current) {
    var _ = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: _,
      subscribe: function (_) {
        return (
          _.unregister(_),
          (_.onStoreChange = _),
          _.reaction || (_(_), (_.stateVersion = Symbol())),
          function () {
            var _;
            (_.onStoreChange = null),
              (_ = _.reaction) === null || _ === void 0 || _.dispose(),
              (_.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return _.stateVersion;
      },
    };
    _.current = _;
  }
  var _ = _.current;
  _.reaction || (_(_), _.register(_, _, _)),
    _.default.useDebugValue(_.reaction, _),
    (0, _.useSyncExternalStore)(_.subscribe, _.getSnapshot, _);
  var _, _;
  if (
    (_.reaction.track(function () {
      try {
        _ = _();
      } catch (_) {
        _ = _;
      }
    }),
    _)
  )
    throw _;
  return _;
}
var _ = _(_());
var _ = typeof Symbol == "function" && Symbol.for,
  _ = _
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      (0, _.forwardRef)(function (_) {
        return null;
      }).$$typeof,
  _ = _
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      (0, _.memo)(function (_) {
        return null;
      }).$$typeof;
function _(_, _) {
  var _;
  if (_ && _.$$typeof === _)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (_()) return _;
  var _ = (_ = _?.forwardRef) !== null && _ !== void 0 ? _ : !1,
    _ = _,
    _ = _.displayName || _.name;
  if (
    _ &&
    _.$$typeof === _ &&
    ((_ = !0), (_ = _.render), typeof _ != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var _ = function (_, _) {
    return _(function () {
      return _(_, _);
    }, _);
  };
  return (
    (_.displayName = _.displayName),
    Object.defineProperty(_, "name", {
      value: _.name,
      writable: !0,
      configurable: !0,
    }),
    _.contextTypes && (_.contextTypes = _.contextTypes),
    _ && (_ = (0, _.forwardRef)(_)),
    (_ = (0, _.memo)(_)),
    _(_, _),
    _
  );
}
var _ = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  displayName: !0,
};
function _(_, _) {
  Object.keys(_).forEach(function (_) {
    _[_] || Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
  });
}
function _(_) {
  var _ = _.children,
    _ = _.render,
    _ = _ || _;
  return typeof _ != "function" ? null : _(_);
}
_.displayName = "Observer";
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _;
_(_.unstable_batchedUpdates);
var _ =
  (_ = _.finalizeAllImmediately) !== null && _ !== void 0 ? _ : function () {};
function _(_, _) {
  return _ === void 0 && (_ = "observed"), _(_, _);
}
var _ = _(_());
function _(_, _) {
  if (_(_, _)) return !0;
  if (typeof _ != "object" || _ === null || typeof _ != "object" || _ === null)
    return !1;
  var _ = Object.keys(_),
    _ = Object.keys(_);
  if (_.length !== _.length) return !1;
  for (var _ = 0; _ < _.length; _++)
    if (!Object.hasOwnProperty.call(_, _[_]) || !_(_[_[_]], _[_[_]])) return !1;
  return !0;
}
function _(_, _) {
  return _ === _ ? _ !== 0 || 1 / _ === 1 / _ : _ !== _ && _ !== _;
}
var _ = Symbol("patchMixins"),
  _ = Symbol("patchedDefinition");
function _(_, _) {
  var _ = (_[_] = _[_] || {}),
    _ = (_[_] = _[_] || {});
  return (_.locks = _.locks || 0), (_.methods = _.methods || []), _;
}
function _(_, _) {
  for (
    var _ = this, _ = arguments.length, _ = new Array(_ > 2 ? _ - 2 : 0), _ = 2;
    _ < _;
    _++
  )
    _[_ - 2] = arguments[_];
  _.locks++;
  try {
    var _;
    return _ != null && (_ = _.apply(this, _)), _;
  } finally {
    _.locks--,
      _.locks === 0 &&
        _.methods.forEach(function (_) {
          _.apply(_, _);
        });
  }
}
function _(_, _) {
  var _ = function () {
    for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
      _[_] = arguments[_];
    _.call.apply(_, [this, _, _].concat(_));
  };
  return _;
}
function _(_, _, _) {
  var _ = _(_, _);
  _.methods.indexOf(_) < 0 && _.methods.push(_);
  var _ = Object.getOwnPropertyDescriptor(_, _);
  if (!(_ && _[_])) {
    var _ = _[_],
      _ = _(_, _, _ ? _.enumerable : void 0, _, _);
    Object.defineProperty(_, _, _);
  }
}
function _(_, _, _, _, _) {
  var _,
    _ = _(_, _);
  return (
    (_ = {}),
    (_[_] = !0),
    (_.get = function () {
      return _;
    }),
    (_.set = function (_) {
      if (this === _) _ = _(_, _);
      else {
        var _ = _(this, _, _, _, _);
        Object.defineProperty(this, _, _);
      }
    }),
    (_.configurable = !0),
    (_.enumerable = _),
    _
  );
}
var _ = Symbol("ObserverAdministration"),
  _ = Symbol("isMobXReactObserver");
function _(_) {
  var _;
  return (_ = _[_]) != null
    ? _
    : (_[_] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: _(_.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function _(_) {
  var _ = _.prototype;
  if (_[_]) {
    var _ = _(_);
    throw new Error(
      "The provided component class (" +
        _ +
        ") has already been declared as an observer component.",
    );
  } else _[_] = !0;
  if (_.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (_.__proto__ !== _.PureComponent) {
    if (!_.shouldComponentUpdate) _.shouldComponentUpdate = _;
    else if (_.shouldComponentUpdate !== _)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var _ = _.render;
  if (typeof _ != "function") {
    var _ = _(_);
    throw new Error(
      "[mobx-react] class component (" +
        _ +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  _.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: _() ? _ : _.call(this, _),
      }),
      this.render()
    );
  };
  var _ = _.componentDidMount;
  return (
    (_.componentDidMount = function () {
      var _ = this;
      if (0) var _;
      var _ = _(this);
      return (
        (_.mounted = !0),
        _.unregister(this),
        (_.forceUpdate = function () {
          return _.forceUpdate();
        }),
        (!_.reaction || _.reactionInvalidatedBeforeMount) && _.forceUpdate(),
        _?.apply(this, arguments)
      );
    }),
    _(_, "componentWillUnmount", function () {
      var _;
      if (!_()) {
        var _ = _(this);
        (_ = _.reaction) == null || _.dispose(),
          (_.reaction = null),
          (_.forceUpdate = null),
          (_.mounted = !1),
          (_.reactionInvalidatedBeforeMount = !1);
      }
    }),
    _
  );
}
function _(_) {
  return _.displayName || _.name || "<component>";
}
function _(_) {
  var _ = _.bind(this),
    _ = _(this);
  function _() {
    _.reaction || ((_.reaction = _(_)), _.mounted || _.register(this, _, this));
    var _ = void 0,
      _ = void 0;
    if (
      (_.reaction.track(function () {
        try {
          _ = _(!1, _);
        } catch (_) {
          _ = _;
        }
      }),
      _)
    )
      throw _;
    return _;
  }
  return _;
}
function _(_) {
  return new _(_.name + ".render()", function () {
    if (!_.mounted) {
      _.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      _.forceUpdate == null || _.forceUpdate();
    } catch {
      var _;
      (_ = _.reaction) == null || _.dispose(), (_.reaction = null);
    }
  });
}
function _(_, _) {
  return (
    _() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== _ ? !0 : !_(this.props, _)
  );
}
function _(_, _) {
  if (_ && _.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    _.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, _) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, _)
      ? _(_)
      : _(_)
  );
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _)
              Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(this, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {},
    _ = Object.keys(_),
    _,
    _;
  for (_ = 0; _ < _.length; _++)
    (_ = _[_]), !(_.indexOf(_) >= 0) && (_[_] = _[_]);
  return _;
}
var _ = ["children"],
  _ = _.default.createContext({});
function _(_) {
  var _ = _.children,
    _ = _(_, _),
    _ = _.default.useContext(_),
    _ = _.default.useRef(_({}, _, _)),
    _ = _.current;
  if (0) var _;
  return _.default.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
_.displayName = "MobXProvider";
var _ = Number.parseInt(_.default.version.split(".")[0]);
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!_) throw new Error("mobx-react requires mobx to be available");
var _ = _(_(), 1),
  _ = (0, _.createContext)(void 0),
  _ = _.Provider;
function _() {
  let _ = (0, _.useContext)(_);
  if (!_)
    throw new Error("called useActiveAccount outside of ActiveAccountProvider");
  return _.useActiveAccount();
}
var _ = _(_());
var _ = _(_());
var _ = _(_());
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      _: "M16.48 35.05V29.35L16.51 29.34C13.4035 28.995 10.5086 27.5974 8.30636 25.3795C6.10411 23.1615 4.72712 20.2568 4.40423 17.1479C4.08134 14.039 4.83199 10.9133 6.53143 8.29011C8.23087 5.66691 10.7768 3.70423 13.7461 2.72822C16.7153 1.7522 19.9292 1.82163 22.8536 2.92496C25.7779 4.02829 28.2367 6.09909 29.8213 8.79322C31.4058 11.4874 32.0208 14.6426 31.564 17.7346C31.1071 20.8266 29.606 23.6692 27.31 25.79L16.48 35.05ZM10.36 15.65L15.77 21.05L25.39 11.43L23 9.04999L15.77 16.28L12.75 13.26L10.36 15.65Z",
      fill: "currentColor",
    }),
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ..._,
    children: [
      (0, _.jsx)("path", {
        _: "M14 17C15.4706 16.9968 16.9289 17.2682 18.3 17.8C16.5605 19.2553 15.269 21.1737 14.5752 23.333C13.8814 25.4922 13.8137 27.8039 14.38 30H2V29C2 25.8174 3.26428 22.7652 5.51472 20.5147C7.76515 18.2643 10.8174 17 14 17Z",
        fill: "currentColor",
      }),
      (0, _.jsx)("path", {
        _: "M10.6666 2.01118C11.6533 1.35189 12.8133 1 14 1C15.5913 1 17.1174 1.63214 18.2426 2.75736C19.3679 3.88258 20 5.4087 20 7C20 8.18669 19.6481 9.34673 18.9888 10.3334C18.3295 11.3201 17.3925 12.0892 16.2961 12.5433C15.1997 12.9974 13.9933 13.1162 12.8295 12.8847C11.6656 12.6532 10.5965 12.0818 9.75736 11.2426C8.91824 10.4035 8.3468 9.33443 8.11529 8.17054C7.88378 7.00666 8.0026 5.80026 8.45672 4.7039C8.91085 3.60754 9.67988 2.67047 10.6666 2.01118Z",
        fill: "currentColor",
      }),
      (0, _.jsx)("path", {
        _: "M32.5 27C32.5 28.2856 32.1188 29.5423 31.4046 30.6112C30.6903 31.6801 29.6752 32.5132 28.4874 33.0052C27.2997 33.4972 25.9928 33.6259 24.7319 33.3751C23.471 33.1243 22.3128 32.5052 21.4038 31.5962C20.4948 30.6872 19.8757 29.529 19.6249 28.2681C19.3741 27.0072 19.5028 25.7003 19.9948 24.5126C20.4868 23.3248 21.3199 22.3097 22.3888 21.5954C23.4577 20.8812 24.7144 20.5 26 20.5",
        stroke: "currentColor",
        strokeWidth: "3",
      }),
      (0, _.jsx)("path", {
        _: "M32.7419 20.4742L25.9919 24.3713L25.9919 16.5771L32.7419 20.4742Z",
        fill: "currentColor",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      _: "M2 7H11V12H2V7ZM2 16H11V23L16 20.9545V31H2V16ZM20 31V20.9545L25 23V16H34V31H20ZM34 12H25V7H34V12ZM22 7H14V19L18 17.3636L22 19V7Z",
    }),
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      _: "M18 17.8L4 10.05L18 2.29999L32 10.05L18 17.8ZM18 22.37L7.1 16.37L4 18.05L18 25.8L32 18.05L28.9 16.34L18 22.37ZM18 30.37L7.1 24.37L4 26.05L18 33.8L32 26.05L28.9 24.34L18 30.37Z",
      fill: "currentColor",
    }),
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
    "data-name": "Layer 1",
    viewBox: "0 0 128 128",
    _: "0px",
    _: "0px",
    ..._,
    children: (0, _.jsx)("polygon", {
      points:
        "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49",
    }),
  });
}
function _(_) {
  let { color: _ = "#FFFFFF", ..._ } = _;
  return (0, _.jsxs)("svg", {
    version: "1.1",
    _: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: _("SVGIcon_Button", "SVGIcon_X_Line", _.className),
    _: "0px",
    _: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    ..._,
    children: [
      (0, _.jsx)("line", {
        fill: "none",
        stroke: _,
        strokeWidth: "45",
        strokeMiterlimit: "10",
        _: "212",
        _: "212",
        _: "44",
        _: "44",
      }),
      (0, _.jsx)("line", {
        fill: "none",
        stroke: _,
        strokeWidth: "45",
        strokeMiterlimit: "10",
        _: "44",
        _: "212",
        _: "212",
        _: "44",
      }),
    ],
  });
}
function _(_) {
  return _()
    ? (0, _.jsxs)("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ..._,
        children: [
          (0, _.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M5.63604 19.636C7.32387 17.9482 9.61305 17 12 17C12.4664 17 12.9292 17.0362 13.3844 17.1071C13.1338 18.0289 13 18.9988 13 20C13 25.0351 16.383 29.2801 21 30.5859V31H3V26C3 23.6131 3.94821 21.3239 5.63604 19.636ZM14.7779 13.1573C13.9556 13.7068 12.9889 14 12 14C10.6739 14 9.40215 13.4732 8.46447 12.5355C7.52678 11.5979 7 10.3261 7 9C7 8.0111 7.29324 7.0444 7.84265 6.22215C8.39206 5.39991 9.17295 4.75904 10.0866 4.3806C11.0002 4.00217 12.0055 3.90315 12.9755 4.09608C13.9454 4.289 14.8363 4.76521 15.5355 5.46447C16.2348 6.16373 16.711 7.05465 16.9039 8.02455C17.0969 8.99446 16.9978 9.99979 16.6194 10.9134C16.241 11.827 15.6001 12.6079 14.7779 13.1573Z",
            fill: "currentColor",
          }),
          (0, _.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28ZM22.5 21.5V26H25.5V21.5H30V18.5H25.5V14H22.5V18.5H18V21.5H22.5Z",
            fill: "currentColor",
          }),
        ],
      })
    : (0, _.jsxs)("svg", {
        version: "1.1",
        _: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        className: "SVGIcon_Button SVGIcon_AddFriend",
        _: "0px",
        _: "0px",
        width: "256px",
        height: "256px",
        viewBox: "0 0 256 256",
        children: [
          (0, _.jsx)("g", {
            className: "friendHead",
            transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
            children: (0, _.jsx)("circle", {
              _: "86.296",
              _: "47.419",
              _: "33.526",
              fill: "currentcolor",
            }),
          }),
          (0, _.jsx)("path", {
            className: "friendBody",
            _: "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231	c-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z",
            fill: "currentColor",
          }),
          (0, _.jsx)("path", {
            className: "plusCircle",
            _: "M179.01,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.989,66.99,66.989c36.997,0,66.99-29.991,66.99-66.989 S216.008,103.892,179.01,103.892z M217.893,175.882h-33.647v33.882c0,2.762-2.239,5-5,5s-5-2.238-5-5v-33.882h-33.647 c-2.762,0-5-2.238-5-5c0-2.763,2.238-5,5-5h33.647V132.47c0-2.762,2.239-5,5-5s5,2.238,5,5v33.412h33.647c2.762,0,5,2.237,5,5 C222.893,173.643,220.654,175.882,217.893,175.882z",
            fill: "currentColor",
          }),
        ],
      });
}
function _() {
  return (0, _.jsxs)("svg", {
    version: "1.1",
    _: "Layer_4",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_FriendRequest",
    _: "0px",
    _: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, _.jsx)("g", {
        className: "friendHead",
        transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
        children: (0, _.jsx)("circle", {
          _: "85.923",
          _: "47.419",
          _: "33.526",
        }),
      }),
      (0, _.jsx)("path", {
        className: "friendBody",
        _: "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231	c-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z",
      }),
      (0, _.jsx)("path", {
        className: "friendBodyFull",
        _: "M176.504,217.922v-42.624c0-35.443-17.002-64.217-57.483-64.217H106.96h-1.017H94.898 c-40.48,0.001-57.484,28.774-57.484,64.217v42.624c0,0,0,22.197,69.544,22.197C177.521,240.121,176.504,217.922,176.504,217.922z",
      }),
      (0, _.jsx)("path", {
        className: "friendArm",
        _: "M18.167,63.833c6.53-0.734,39.348,39.127,50.007,47.647s21.327,16.686,15.16,25.353s-20.646,16.74-36.167,2.5 S-1.349,90.532,0,85.333S8.599,64.909,18.167,63.833z",
      }),
      (0, _.jsx)("path", {
        className: "redCircle",
        _: "M178.51,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.99,66.99,66.99c36.997,0,66.99-29.992,66.99-66.99 S215.508,103.892,178.51,103.892z",
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)("svg", {
    version: "1.1",
    _: "base",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Maximize",
    _: "0px",
    _: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, _.jsx)("rect", {
        _: "24",
        _: "42.167",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "18",
        strokeMiterlimit: "10",
        width: "208",
        height: "171.667",
      }),
      (0, _.jsx)("line", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "42",
        strokeMiterlimit: "10",
        _: "24",
        _: "54.01",
        _: "232",
        _: "54.01",
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)("svg", {
    version: "1.1",
    _: "base",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Minimize",
    _: "0px",
    _: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: (0, _.jsx)("line", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "18",
      strokeMiterlimit: "10",
      _: "24",
      _: "209.01",
      _: "232",
      _: "209.01",
    }),
  });
}
function _() {
  return (0, _.jsxs)("svg", {
    version: "1.1",
    _: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Restore",
    _: "0px",
    _: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, _.jsx)("polyline", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "12",
        strokeMiterlimit: "10",
        points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
      }),
      (0, _.jsx)("rect", {
        _: "24",
        _: "90.861",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "18",
        strokeMiterlimit: "10",
        width: "149",
        height: "122.973",
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)("svg", {
    version: "1.1",
    _: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Trade",
    _: "0px",
    _: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, _.jsx)("path", {
        _: "M132.025,162.943h40.246c0,0,3.219,56.879-31.303,79.599c-12.298,8.094,71.103-6.708,75.574-79.599h35.775l-60.146-74.681 L132.025,162.943z",
      }),
      (0, _.jsx)("path", {
        _: "M123.975,93.056H83.729c0,0-3.219-56.879,31.303-79.599c12.298-8.094-71.103,6.708-75.574,79.599H3.682l60.146,74.681 L123.975,93.056z",
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)("svg", {
    version: "1.1",
    _: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      overflow: "visible",
      width: "100%",
      height: "100%",
      maxWidth: "320px",
      maxHeight: "320px",
    },
    _: "0px",
    _: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, _.jsx)("g", {
        className: "base",
        children: (0, _.jsx)("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          _: "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909",
        }),
      }),
      (0, _.jsxs)("g", {
        className: "lines",
        children: [
          (0, _.jsx)("path", {
            className: "line1",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            _: "M128,68.12v137.197",
          }),
          (0, _.jsx)("path", {
            className: "line2",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            _: "M83.613,68.12 l4.035,137.197",
          }),
          (0, _.jsx)("path", {
            className: "line3",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            _: "M172.387,68.12 l-4.035,137.197",
          }),
        ],
      }),
      (0, _.jsxs)("g", {
        className: "lid",
        children: [
          (0, _.jsx)("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            _: "M27.121,38.577H228.88",
          }),
          (0, _.jsx)("path", {
            fill: "none",
            strokeWidth: "10",
            _: "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796",
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { bPending: _, bShowArm: _, className: _, ..._ } = _;
  return _({
    bSuppressAssert: !0,
  })
    ? (0, _.jsxs)("svg", {
        className: _("SVGIcon_Button", "SVGIcon_FriendIcon", _),
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ..._,
        children: [
          (0, _.jsx)("path", {
            _: "M18 17C15.6131 17 13.3239 17.9482 11.636 19.636C9.94821 21.3239 9 23.6131 9 26V31H27V26C27 23.6131 26.0518 21.3239 24.364 19.636C22.6761 17.9482 20.3869 17 18 17ZM18 14C18.9889 14 19.9556 13.7068 20.7779 13.1573C21.6001 12.6079 22.241 11.827 22.6194 10.9134C22.9978 9.99979 23.0969 8.99446 22.9039 8.02455C22.711 7.05465 22.2348 6.16373 21.5355 5.46447C20.8363 4.76521 19.9454 4.289 18.9755 4.09608C18.0055 3.90315 17.0002 4.00217 16.0866 4.3806C15.173 4.75904 14.3921 5.39991 13.8427 6.22215C13.2932 7.0444 13 8.0111 13 9C13 10.3261 13.5268 11.5979 14.4645 12.5355C15.4021 13.4732 16.6739 14 18 14Z",
            fill: "currentColor",
          }),
          (0, _.jsx)("path", {
            className: "WavingArm",
            opacity: _ ? "1" : "0",
            _: "M4.67541 11.8555C5.6007 10.8308 7.18156 10.7501 8.20635 11.6754L18.9515 21.3773L15.6007 25.0884L4.85556 15.3865C3.83077 14.4612 3.75011 12.8803 4.67541 11.8555V11.8555Z",
            fill: "currentColor",
            strokeWidth: "0",
          }),
          (0, _.jsx)("path", {
            opacity: _ ? "1" : "0",
            _: "M32.3573 11.8876C33.2626 12.93 33.1515 14.509 32.109 15.4144L23.2784 23.083L20 19.3078L28.8305 11.6392C29.873 10.7339 31.452 10.8451 32.3573 11.8876Z",
            fill: "currentColor",
            strokeWidth: "0",
          }),
        ],
      })
    : (0, _.jsxs)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        className: _(
          "SVGIcon_Button",
          "SVGIcon_FriendIcon",
          _ ? " SVGIcon_FriendIcon_Pending" : "",
          _,
        ),
        _: "0px",
        _: "0px",
        width: "256px",
        height: "256px",
        viewBox: "0 0 256 256",
        children: [
          (0, _.jsxs)("g", {
            className: "Outline",
            children: [
              (0, _.jsx)("g", {
                transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
                children: (0, _.jsx)("path", {
                  _: "M102.239,90.394c-22.556,0-40.906-18.351-40.906-40.906c0-22.556,18.35-40.906,40.906-40.906s40.906,18.35,40.906,40.906 C143.145,72.043,124.795,90.394,102.239,90.394z",
                }),
              }),
              (0, _.jsx)("path", {
                _: "M127.453,250.212c-30.208,0-52.086-4.188-65.028-12.45c-12.507-7.983-13.141-17.484-13.141-19.308v-41.781 c0-20.554,5.356-38.104,15.489-50.754c11.63-14.519,29.216-22.193,50.858-22.194h23.646c21.643,0,39.229,7.674,50.858,22.193 c10.133,12.65,15.488,30.201,15.488,50.754v41.751c0.011,2.202-0.586,8.058-6.43,14.175 c-11.164,11.687-35.301,17.613-71.732,17.613C127.458,250.212,127.458,250.212,127.453,250.212z",
              }),
              (0, _.jsx)("path", {
                className: "WavingArm",
                opacity: _ ? "1" : "0",
                _: "M87.625,170.102c-5.877,0-14.85-1.804-24.219-10.4c-8.677-7.961-20.959-20.438-30.563-31.048 c-18.766-20.732-21.125-26.658-19.522-32.832c1.463-5.64,10.288-27.077,26.729-28.926c0.429-0.048,0.867-0.072,1.303-0.072 c7.609,0,14.543,6.335,38.063,31.516c7.141,7.645,14.524,15.549,18.002,18.33l0.803,0.641c5.551,4.432,11.291,9.015,15.104,14.136 c8.477,11.383,3.634,20.705,1.158,24.185C108.034,164.692,97.995,170.102,87.625,170.102z",
              }),
            ],
          }),
          (0, _.jsxs)("g", {
            className: "foreground",
            children: [
              (0, _.jsx)("g", {
                transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
                children: (0, _.jsx)("circle", {
                  fill: "currentColor",
                  _: "102.239",
                  _: "49.488",
                  _: "33.446",
                }),
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M195.624,218.454v-41.781c0-34.743-16.666-62.948-56.347-62.948h-11.822h-0.997h-10.826 c-39.68,0.001-56.348,28.205-56.348,62.948v41.781c0,0,0,21.758,68.169,21.758C196.62,240.214,195.624,218.454,195.624,218.454z",
              }),
              (0, _.jsx)("path", {
                className: "WavingArm",
                opacity: _ ? "1" : "0",
                _: "M41.167,76.833c6.53-0.734,39.348,39.127,50.007,47.647c10.659,8.52,21.327,16.686,15.16,25.353 s-20.646,16.74-36.167,2.5 s-48.516-48.801-47.167-54S31.599,77.909,41.167,76.833z",
              }),
            ],
          }),
        ],
      });
}
function _(_) {
  let _ = _("SVGIcon_Button", "SVGIcon_SteamLogo", _ && _.className);
  return (0, _.jsxs)("svg", {
    version: "1.1",
    _: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#FFFFFF",
    _: "0px",
    _: "0px",
    viewBox: "0 0 256 256",
    ..._,
    className: _,
    children: [
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    _: "0px",
    _: "0px",
    ..._,
    children: [
      (0, _.jsx)("path", {
        _: "M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z",
        fill: "currentColor",
      }),
      (0, _.jsx)("path", {
        _: "M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z",
        fill: "currentColor",
      }),
      (0, _.jsx)("path", {
        _: "M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z",
        fill: "currentColor",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      _: "M2 4V20V24L7 20H24V4H2ZM34 12V32L29 28H12V24H28V12H34Z",
      fill: "currentColor",
    }),
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      _: "M33.78 19.22L19.22 33.78L4 18.56V4H18.56L33.78 19.22Z",
      fill: "currentColor",
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: _,
    ..._,
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    children: (0, _.jsx)("circle", {
      fill: "currentColor",
      _: "25",
      _: "25",
      _: "25",
    }),
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    viewBox: "4 1 24 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ..._,
    children: [
      (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M16.2114 23.9054C18.1701 23.9054 19.7587 25.494 19.7587 27.4527C19.7587 29.4114 18.1701 31 16.2114 31C14.2526 31 12.6641 29.4114 12.6641 27.4527C12.6641 25.494 14.2527 23.9054 16.2114 23.9054Z",
        fill: "currentColor",
      }),
      (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M7.01091 9.7964C7.11325 7.49343 8.06952 5.32707 9.69945 3.69779C11.4318 1.96544 13.7608 1 16.2108 1C18.6611 1 20.9899 1.96534 22.7222 3.69779C24.4545 5.42937 25.42 7.75911 25.42 10.2092C25.42 11.8776 24.9663 13.5012 24.109 14.9322C23.2523 16.3624 22.0178 17.5368 20.5477 18.324C20.1242 18.5512 19.761 18.8723 19.5136 19.2866C19.2654 19.7001 19.1616 20.179 19.1616 20.6579V21.3933C19.1616 21.6584 18.9457 21.8743 18.6815 21.8743H13.7404C13.4761 21.8743 13.2602 21.6584 13.2602 21.3933V20.6579C13.2602 19.1043 13.6626 17.5963 14.4611 16.2636C15.2603 14.928 16.4065 13.8673 17.7764 13.1333C18.3057 12.85 18.7488 12.4238 19.0573 11.9085C19.365 11.394 19.5178 10.8078 19.5178 10.2092C19.5178 9.32859 19.1722 8.49295 18.5496 7.87046C17.9264 7.2479 17.0914 6.90227 16.2109 6.90227C15.3303 6.90227 14.4947 7.24788 13.8722 7.87046C13.312 8.43062 12.972 9.16814 12.9131 9.9582L12.8963 10.1818C12.8774 10.4363 12.6643 10.6313 12.4091 10.6271L7.47227 10.5422C7.3377 10.5394 7.22265 10.4889 7.13086 10.3907C7.03828 10.2926 6.99482 10.1748 7.00049 10.0402L7.01104 9.79628L7.01091 9.7964Z",
        fill: "currentColor",
      }),
    ],
  });
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _.default.createContext({
    Component: _,
  });
function _(_) {
  let {
      "flow-children": _,
      onActivate: _,
      onCancel: _,
      focusClassName: _,
      focusWithinClassName: _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = _(_),
    _ = {},
    _ = _(_);
  _ != 0 && (_.layout = _),
    _ && ((_.onClick = _.onClick || _), (_.onOKButton = _.onOKButton || _)),
    _.onOKButton &&
      _.focusable === void 0 &&
      _.focusableIfEmpty === void 0 &&
      (_.focusable = !0),
    _ && (_.onCancelButton = _.onCancelButton || _);
  let { ref: _, node: _ } = _({
      ..._,
      ..._,
    }),
    _ = _();
  (_.className = (0, _.default)(_.className, "Panel", _ && "Focusable")),
    _(_, _);
  let _ = _(_, _.ref);
  (_.focusable || _.focusableIfEmpty) &&
    (!_ || !_.Tree.BUseVirtualFocus()) &&
    (_.tabIndex = _.tabIndex || 0),
    _.focusable && (_ || _.onOKButton) && (_.role ??= "button");
  let _ = (0, _.useContext)(_).Component;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _
      ? (0, _.jsx)(_, {
          ..._,
          divRef: _,
          node: _,
          focusClassName: (0, _.default)(_, "gpfocus"),
          focusWithinClassName: (0, _.default)(_, "gpfocuswithin"),
        })
      : (0, _.jsx)("div", {
          ..._,
          ref: _,
        }),
  });
}
var _ = Object.seal({
    onMoveUp: _,
    onMoveDown: _,
  }),
  _ = Object.seal({
    onMoveRight: _,
    onMoveLeft: _,
  });
function _(_, _) {
  if (_.is_repeat) return !1;
  let _ = _.GetRelativeDirection(_.button);
  return _ == 1 ? _.BFocusFirstChild(0) : _ == 2 ? _.BFocusLastChild(0) : !1;
}
var _ = _(_());
var _ = _(_());
var _ = {
  "duration-app-launch": "800ms",
  ContextMenuMouseOverlay: "b7xYZZxB5B4-",
  ContextMenuPosition: "o6fauCzG3J8-",
  contextMenu: "Sax96NMRDNg-",
  ContextMenuPopup: "BPK-2blxjIY-",
  contextMenuContents: "S4vxdXl-Tt4-",
  contextMenuItem: "_9QNF01mSnJo-",
  active: "yQed0a0UPBs-",
  MenuSectionHeader: "g0TN7BV3VaU-",
  ContextMenuSeparator: "spxW2r-GYVk-",
  NoSeparation: "KYihcox8Ecg-",
  UpperCase: "Xf9GISpIH-g-",
  SubMenu: "zdQY8o-cjDw-",
  Label: "bP5c-culAkY-",
  Arrow: "fawTG34m89A-",
  IconContainer: "jkozd0TWs0M-",
  ContextMenuHRSeparator: "_2OCJzZW0nUA-",
  ForceDesktop: "DBVmBIxYzAc-",
  PopoutSubMenu: "MVJ6mtoRVF4-",
  PopoutSubMenuItems: "_3W6Oq18b4G0-",
  BackgroundAnimation: "GwoNL1ZTklw-",
  "ItemFocusAnim-darkerGrey-nocolor": "eTNISA8QE9k-",
  "ItemFocusAnim-darkerGrey": "APLBNxVpOYk-",
  "ItemFocusAnim-darkGrey": "Cwc14DWligc-",
  "ItemFocusAnim-grey": "_1t5WKn-KhTk-",
  "ItemFocusAnim-translucent-white-10": "B6alUZ6INqk-",
  "ItemFocusAnim-translucent-white-20": "HdGAEp2riNI-",
  "ItemFocusAnimBorder-darkGrey": "y3QWzef3iZU-",
  "ItemFocusAnim-green": "KkKP9MKQwqU-",
  focusAnimation: "es5Zt6Os6IM-",
  hoverAnimation: "z6YF1K4qoj0-",
};
var _ = _(_()),
  _ = _.forwardRef((_, _) => {
    let { className: _, contextMenuStyles: _, disabled: _, ..._ } = _;
    return (0, _.jsx)("div", {
      ..._,
      ref: _,
      className: _(
        _,
        (_ || _).contextMenuItem,
        "contextMenuItem",
        _ && "disabled",
      ),
    });
  });
_.displayName = "MenuItem";
function _(_, _ = !0) {
  return function (_, _, _) {
    let _ = _.value;
    _.value = function (..._) {
      let _ = this[_ + "_DebounceProperties"];
      _ === void 0 &&
        (_ = this[_ + "_DebounceProperties"] =
          {
            hTimer: void 0,
            nPending: 0,
          }),
        _.hTimer === void 0
          ? (_ ? _.apply(this, _) : (_.nPending += 1),
            (_.hTimer = window.setInterval(() => {
              _.nPending > 0
                ? (_.apply(this, _), (_.nPending = 0))
                : (window.clearInterval(_.hTimer), (_.hTimer = void 0));
            }, _)))
          : (_.nPending += 1);
    };
  };
}
var _ = _(_());
function _(_, _) {
  return _(
    (_) => {
      if (!_) return;
      let _ = _(_.ownerDocument.defaultView, (_) => {
        _(_[0]);
      });
      return _.observe(_), () => _.unobserve(_);
    },
    [_, _],
  );
}
function _(_) {
  let _ = _.useCallback(
    (_, _) =>
      _.ResizeObserver
        ? new _.ResizeObserver(_)
        : (_(!1, "ResizeObserver is not available"),
          {
            observe: () => {},
            unobserve: () => {},
            disconnect: () => {},
          }),
    [],
  );
  return _(_, _);
}
function _(_, ..._) {
  let _ = _.ownerDocument.defaultView,
    _ = new _.IntersectionObserver(..._);
  return _.observe(_), _;
}
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_()),
  _ = _.createContext(null),
  _ = class extends _.Component {
    m_navRef = _();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        _(this.props.refInstance, this.instance);
    }
    componentDidUpdate(_) {
      _.label !== this.props.label &&
        this.context &&
        this.instance.SetLabel(this.props.label);
    }
    HideIfSubmenu() {
      return this.instance.BIsSubMenu() ? (this.instance.HideSelf(), !0) : !1;
    }
    HideMenu() {
      return (
        this.instance.BIsSubMenu()
          ? this.instance.HideSelf()
          : this.instance.Hide(),
        !0
      );
    }
    render() {
      let {
          children: _,
          className: _,
          label: _,
          onCancel: _,
          cancelText: _,
          refInstance: _,
          bForceDesktopPresentation: _,
          footer: _,
          role: _ = "menu",
          labelId: _,
          style: _ = {},
          refScrollable: _,
          ..._
        } = this.props,
        _ = this.context.styles ?? _,
        _ = _ ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !_) {
        let _ = () => {
          _ && _(), this.instance.Hide();
        };
        return (
          (_.overflowY = this.instance.BIsSubMenuVisible() ? "hidden" : void 0),
          (0, _.jsxs)(_, {
            ..._,
            className: _(
              _.contextMenuContents,
              {
                [_.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              },
              _,
            ),
            "flow-children": "column",
            onMoveLeft: this.HideIfSubmenu,
            onCancel: this.instance.BIsSubMenu() ? this.HideMenu : _,
            style: _,
            navEntryPreferPosition: 4,
            navRef: this.m_navRef,
            ref: _,
            role: _,
            "aria-labelledby": _ ? _ : void 0,
            ..._,
            children: [
              _,
              _ &&
                (0, _.jsx)("div", {
                  _: _,
                  style: {
                    display: "none",
                  },
                  children: _,
                }),
              !this.instance.BIsSubMenu() &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      className: _.Cancel,
                      onSelected: _,
                      children: _(_),
                    }),
                    _,
                  ],
                }),
              this.instance.BIsSubMenuVisible() &&
                (0, _.jsx)("div", {
                  className: _.contextMenuFade,
                  onClick: () => this.instance.HideSubMenu(),
                }),
            ],
          })
        );
      } else
        return (0, _.jsx)("div", {
          ref: _,
          style: _,
          ..._,
          className: _(
            {
              [_.contextMenuContents]: !0,
              [_.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [_.ForceDesktop]: _,
            },
            _,
          ),
          children: _,
        });
    }
  };
_(_, "contextType", _),
  _([_], _.prototype, "HideIfSubmenu", 1),
  _([_], _.prototype, "HideMenu", 1),
  (_ = _([_], _));
function _(_) {
  let _ = _.useId();
  return (0, _.jsx)(_, {
    labelId: _,
    ..._,
  });
}
var _ = class extends _.PureComponent {
  static contextType = _;
  m_ref = _.createRef();
  m_refDiv = _.createRef();
  get element() {
    return this.m_refDiv.current;
  }
  get instance() {
    return this.context.instance;
  }
  OnClick(_) {
    if (this.props.disabled) {
      this.context.callbacks?.onDisabledItemSelected &&
        this.context.callbacks.onDisabledItemSelected();
      return;
    }
    this.props.onClick && this.props.onClick(_),
      !this.props.bInteractableItem &&
        (this.props.onSelected && this.props.onSelected(_),
        this.context && this.instance.ForceHide());
  }
  OnOKButton(_) {
    this.m_refDiv.current?.click();
  }
  OnMouseEnter(_) {
    this.context.presentation == 0 && this.instance.HideSubMenu();
  }
  Focus() {
    this.m_ref.current
      ? this.m_ref.current.TakeFocus()
      : this.m_refDiv.current && this.m_refDiv.current.focus();
  }
  render() {
    let {
        onSelected: _,
        bInteractableItem: _,
        onMoveRight: _,
        ..._
      } = this.props,
      _ = this.context?.styles ?? _;
    return this.context.presentation == 1
      ? (0, _.jsx)(_, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ..._,
          className: _(
            this.props.className,
            _.contextMenuItem,
            "contextMenuItem",
            this.props.disabled && "disabled",
            this.props.selected && _.Selected,
            this.props.tone == "positive" && _.Positive,
            this.props.tone == "emphasis" && _.Emphasis,
            this.props.tone == "destructive" && _.Destructive,
          ),
          focusClassName: _.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: _,
          unselectable: this.props.unselectable,
          role: _.role ?? "menuitem",
          "aria-selected": this.props.selected,
          children: this.props.children,
        })
      : (0, _.jsx)(_, {
          ref: this.m_refDiv,
          onMouseEnter: this.OnMouseEnter,
          ..._,
          onClick: this.OnClick,
          unselectable: this.props.unselectable,
          className: this.props.className,
          role: _.role ?? "menuitem",
          "aria-selected": this.props.selected,
          children: this.props.children,
        });
  }
};
_([_], _.prototype, "OnClick", 1),
  _([_], _.prototype, "OnOKButton", 1),
  _([_], _.prototype, "OnMouseEnter", 1),
  _([_], _.prototype, "Focus", 1);
function _(_) {
  let _ = _.useContext(_).styles ?? _;
  return (0, _.jsx)("div", {
    className: _.ContextMenuSeparator,
    role: "separator",
  });
}
var _ = class extends _.PureComponent {
  static contextType = _;
  m_refItem = _.createRef();
  constructor(_) {
    super(_),
      (this.state = {
        bActive: !1,
      });
  }
  get instance() {
    return this.context.instance;
  }
  OnSubMenuMouseEnter() {
    this.instance.CancelHideSubMenuTimer();
  }
  OnSubMenuHidden() {
    this.setState({
      bActive: !1,
    }),
      this.props.bInGamepadUI &&
        this.context.presentation == 1 &&
        this.m_refItem.current &&
        this.m_refItem.current.Focus();
  }
  ShowSubMenu(_) {
    let _ = _ || this.m_refItem.current.element,
      _ = this.instance.ShowSubMenu(_, this.RenderSubMenu);
    return _
      ? (this.setState({
          bActive: !0,
        }),
        _.SetOnHideCallback(this.OnSubMenuHidden),
        !0)
      : !1;
  }
  RenderSubMenu() {
    return (0, _.jsx)(_, {
      onMouseEnter: this.OnSubMenuMouseEnter,
      label: this.props.label,
      children: this.props.children,
    });
  }
  OnMouseEnter(_) {
    this.context.presentation == 0 && this.ShowSubMenu(_.currentTarget);
  }
  OnClick(_) {
    this.OnMouseEnter(_),
      this.props.onClick && this.props.onClick(_),
      this.props.bInGamepadUI &&
        this.context.presentation == 1 &&
        this.ShowSubMenu(_.currentTarget);
  }
  render() {
    let {
        label: _,
        selectedWithin: _,
        children: _,
        className: _,
        bInGamepadUI: _,
        ..._
      } = this.props,
      _ = this.context.styles ?? _;
    return (0, _.jsxs)(_, {
      ..._,
      ref: this.m_refItem,
      onClick: this.OnClick,
      selected: _ && !this.state.bActive,
      className: _(_, _.SubMenu, this.state.bActive && _.active),
      onMouseEnter: this.OnMouseEnter,
      bInteractableItem: !0,
      onMoveRight: () => this.ShowSubMenu(),
      children: [
        (0, _.jsx)("div", {
          className: _.Label,
          children: _,
        }),
        (0, _.jsx)("div", {
          className: _.Arrow,
          children: (0, _.jsx)(_, {}),
        }),
      ],
    });
  }
};
_([_], _.prototype, "OnSubMenuMouseEnter", 1),
  _([_], _.prototype, "OnSubMenuHidden", 1),
  _([_], _.prototype, "ShowSubMenu", 1),
  _([_], _.prototype, "RenderSubMenu", 1),
  _([_], _.prototype, "OnMouseEnter", 1),
  _([_], _.prototype, "OnClick", 1);
var _ = class extends _.Component {
  m_elMenu = void 0;
  m_cReenteranceGuard = 1;
  m_mutationObserver;
  constructor(_) {
    super(_),
      (this.state = {
        ready: !1,
        menuLeft: void 0,
        menuTop: void 0,
        menuRight: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      }),
      (this.m_mutationObserver = new MutationObserver(this.OnMenuMutation));
  }
  get parentWin() {
    return (
      this.props.element?.ownerDocument.defaultView || this.props.parentWin
    );
  }
  BindMenuElement(_) {
    this.props.instance.SetElement(_),
      this.m_elMenu &&
        (this.m_mutationObserver.disconnect(),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          this.m_elMenu.ownerDocument.defaultView?.removeEventListener(
            "resize",
            this.OnWindowResize,
          )),
      _ &&
        (this.m_mutationObserver.observe(_, {
          childList: !0,
          subtree: !0,
        }),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          _.ownerDocument.defaultView?.addEventListener(
            "resize",
            this.OnWindowResize,
          )),
      (this.m_elMenu = _ || void 0),
      _.IN_CLIENT && this.props.popup && this.m_elMenu
        ? this.m_elMenu.ownerDocument.fonts.ready.then(() => {
            this.PositionMenu();
          })
        : this.PositionMenu(),
      this.state.ready ||
        (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
        this.setState(
          {
            ready: !0,
          },
          () => {
            this.props.options?.bSkipFocusWhenReady || this.TakeFocus();
          },
        ));
  }
  OnMenuMutation(_, _) {
    this.PositionMenu();
  }
  OnWindowResize() {
    this.PositionMenu();
  }
  OnBlur(_) {
    if (
      !(_.relatedTarget && _(_.currentTarget, _.relatedTarget)) &&
      !(
        _.relatedTarget &&
        this.props.instance.BIsElementInMenuHierarchy(_.relatedTarget)
      ) &&
      !this.props.instance.BIsSubMenuVisible() &&
      this.state.ready &&
      this.props.instance.visible
    ) {
      let _ = _() ? 150 : 0;
      this.props.instance.OnCancel(_);
    }
  }
  OnKeyDown(_) {
    _.keyCode == 27 &&
      this.state.ready &&
      (this.props.instance.Hide(), _.preventDefault(), _.stopPropagation());
  }
  componentDidUpdate() {
    this.m_cReenteranceGuard-- > 0
      ? this.PositionMenu()
      : (this.m_cReenteranceGuard = 2);
  }
  TakeFocus() {
    if (
      this.m_elMenu &&
      this.state.ready &&
      this.props.instance.visible &&
      (this.props.popup ||
        !_(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
    ) {
      let _ = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
      _ && _.focus ? _.focus() : this.m_elMenu.focus();
    }
  }
  PositionMenu(_ = !1) {
    let _ = this.props.options,
      _ = this.m_elMenu,
      _ = this.props.element;
    if (!_) return;
    let _ = this.props.popup != null,
      _ = this.parentWin;
    if (!_ || (_ && _.getComputedStyle(_).display === "none")) return;
    let _ = this.props.clientX,
      _ = this.props.clientY,
      _ = 0,
      _ = 0,
      _ = _.innerWidth,
      _ = _.innerHeight,
      _ = _?.getBoundingClientRect();
    if (_)
      if (
        (!_.bScreenCoordinates &&
          _ !== void 0 &&
          _ !== void 0 &&
          ((_ += _.screenLeft), (_ += _.screenTop)),
        _ && (_ = _(_, _)),
        _.targetMonitor)
      )
        (_ = _.targetMonitor.nScreenLeft),
          (_ = _.targetMonitor.nScreenTop),
          (_ = _.targetMonitor.nScreenWidth),
          (_ = _.targetMonitor.nScreenHeight);
      else {
        let _ = _.screen,
          _ = 0,
          _ = 0;
        _.availLeft && (_ = _.availLeft),
          _.availTop && (_ = _.availTop),
          (_ = _),
          (_ = _),
          (_ = _.availWidth),
          (_ = _.availHeight);
      }
    (_.bOverlapHorizontal || _.bOverlapVertical) && (_ = _ = void 0);
    let _ = _.getBoundingClientRect(),
      _ = {
        menuLeft: void 0,
        menuRight: void 0,
        menuTop: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      },
      _ = _ ?? _.left,
      _ = _ ?? _.right,
      _ = _.width;
    _.bMatchWidth && ((_ = _ - _), (_.menuWidth = _)),
      _.bGrowToElementWidth && (_.menuMinWidth = Math.max(_, _ - _));
    let _ = (_.bOverlapHorizontal ? _ : _) - _ - _,
      _ = _ > 0,
      _ = _ + _ - (_.bOverlapHorizontal ? _ : _) - _,
      _ = _ > 0,
      _ = _.bPreferPopLeft;
    _?.matches(":dir(rtl)") && (_ = !_);
    let _ = (_ || !_) && _;
    !_ &&
      !_ &&
      ((_ = _ > _),
      _.bFitToWindow && ((_ += (_ ? _ : _) - 8), (_.menuWidth = _))),
      _
        ? (_.menuRight = _ - (_.bOverlapHorizontal ? _ : _))
        : (_.menuLeft = _.bOverlapHorizontal ? _ : _);
    let _ = _ ?? _.top,
      _ = _ ?? _.bottom,
      _ = _.scrollHeight;
    _.bMatchHeight && ((_ = _ - _), (_.menuHeight = _));
    let _ = (_.bOverlapVertical ? _ : _) - _ - _,
      _ = _ > 0,
      _ = _ + _ - (_.bOverlapVertical ? _ : _) - _,
      _ = _ > 0,
      _ = (_.bPreferPopTop || !_) && _ && !_.bDisablePopTop;
    if (!_ && !_) {
      let _ =
        _.bShiftToFitWindow !== void 0
          ? _.bShiftToFitWindow
          : !!_.bFitToWindow && !_.bOverlapHorizontal;
      (_ = _ > _ && !_.bDisablePopTop),
        _ && (_ ? (_.menuTop = 4) : (_.menuBottom = 4)),
        _.bFitToWindow &&
          (_ ? (_ = Math.min(_, _ - 8)) : (_ += _ ? _ : _),
          (_.menuHeight = _ - 8));
    }
    _.menuBottom === void 0 &&
      _.menuTop === void 0 &&
      (_
        ? (_.menuBottom = _ - (_.bOverlapVertical ? _ : _))
        : (_.menuTop = _.bOverlapVertical ? _ : _)),
      _
        ? (_.menuHeight || (_.menuHeight = _.height),
          _.menuWidth || (_.menuWidth = _.width),
          _.menuBottom &&
            !_.menuTop &&
            ((_.menuTop = _ - _.menuBottom - _.menuHeight),
            (_.menuBottom = void 0)),
          _.menuRight &&
            !_.menuLeft &&
            ((_.menuLeft = _ - _.menuRight - _.menuWidth),
            (_.menuRight = void 0)))
        : _.getComputedStyle(_).position != "fixed" &&
          (_.menuLeft && (_.menuLeft += _.scrollX),
          _.menuTop && (_.menuTop += _.scrollY),
          _.menuBottom &&
            (_.menuBottom +=
              _.document.body.clientHeight - _.scrollY - _.innerHeight),
          _.menuRight &&
            (_.menuRight +=
              _.document.body.clientWidth - _.scrollX - _.innerWidth)),
      (_ ||
        _.menuLeft !== this.state.menuLeft ||
        _.menuRight !== this.state.menuRight ||
        _.menuTop !== this.state.menuTop ||
        _.menuBottom !== this.state.menuBottom ||
        _.menuWidth !== this.state.menuWidth ||
        _.menuHeight !== this.state.menuHeight) &&
        this.setState(_);
  }
  PositionPopupWindow() {
    if (
      !(
        this.state.menuLeft !== void 0 &&
        this.state.menuTop !== void 0 &&
        this.state.menuWidth !== void 0 &&
        this.state.menuHeight !== void 0
      )
    )
      return;
    let _ = this.props.popup?.window,
      _ = this.props.options;
    if (_.bScreenCoordinates) {
      let _ =
        _.targetMonitor?.flScaleToTargetMonitor ??
        this.parentWin?.devicePixelRatio;
      _?.SteamClient.Window.MoveTo(
        this.state.menuLeft,
        this.state.menuTop,
        _ ?? !0,
      ),
        _?.SteamClient.Window.ResizeTo(
          this.state.menuWidth,
          this.state.menuHeight,
          _ ?? !0,
        );
      return;
    }
    this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((_) => {
      let _ = this.state.menuLeft - this.parentWin.screenX,
        _ = this.state.menuTop - this.parentWin.screenY;
      try {
        _?.SteamClient.Window.PositionWindowRelative(
          _,
          _,
          _,
          this.state.menuWidth,
          this.state.menuHeight,
        );
      } catch (_) {
        console.error(_);
      }
    });
  }
  render() {
    let _ = {
      visibility: this.state.ready ? "visible" : "hidden",
    };
    this.props.options.flElementZoom &&
      this.props.options.flElementZoom > 0 &&
      (_.zoom = this.props.options.flElementZoom),
      this.props.popup
        ? (this.PositionPopupWindow(),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = Math.floor(this.state.menuMinWidth)))
        : (this.state.menuTop !== void 0
            ? (_.top = this.state.menuTop)
            : this.state.menuBottom !== void 0 &&
              (_.bottom = this.state.menuBottom),
          this.state.menuLeft !== void 0
            ? (_.left = this.state.menuLeft)
            : this.state.menuRight !== void 0 &&
              (_.right = this.state.menuRight),
          this.state.menuHeight !== void 0 &&
            (_.height = this.state.menuHeight),
          this.state.menuWidth !== void 0 && (_.width = this.state.menuWidth),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = this.state.menuMinWidth));
    let _ = this.props.options.strClassName || _.contextMenu;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (_ += " visible"),
      this.props.instance.visible && this.state.ready && (_ += " ready"),
      (_ += " " + _.ContextMenuPosition),
      this.props.options.bStandalone && (_ += " " + _.Standalone),
      (0, _.jsx)("div", {
        className: _,
        ref: this.BindMenuElement,
        style: _,
        onBlur: this.OnBlur,
        onKeyDown: this.OnKeyDown,
        tabIndex: 0,
        children: this.props.children,
      })
    );
  }
};
_([_], _.prototype, "BindMenuElement", 1),
  _([_, _(100)], _.prototype, "OnMenuMutation", 1),
  _([_], _.prototype, "OnWindowResize", 1),
  _([_], _.prototype, "OnBlur", 1),
  _([_], _.prototype, "OnKeyDown", 1),
  (_ = _([_], _));
function _(_) {
  return (0, _.jsx)("div", {
    className: _.ContextMenuMouseOverlay,
  });
}
function _(_, _) {
  let _ = _.createEvent("HTMLEvents");
  _.initEvent("change", !0, !1), _.dispatchEvent(_);
}
function _(_) {
  let _ = [],
    _ = _(_),
    _ = _.getSelection(),
    _ = _ && _.rangeCount > 0 && _.toString().length > 0,
    _ = _.target,
    _ = !1,
    _ = _.clientY,
    _ = _.clientX;
  if (
    (_ &&
      "tagName" in _ &&
      (_.tagName == "INPUT" || _.tagName == "TEXTAREA") &&
      (_ = !0),
    _.IN_CLIENT && _ && _(_, "Browser.GetSpellingSuggestions"))
  ) {
    let [_, ..._] = _.SteamClient.Browser.GetSpellingSuggestions(),
      _ = _;
    _ &&
      _.forEach((_, _) => {
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                _.setRangeText(_),
                  _(_, _.document),
                  _.setSelectionRange(_.selectionEnd, _.selectionEnd),
                  _.focus();
              },
              className: _.NoSeparation,
              children: _,
            },
            `spelling_${_}_${_}`,
          ),
        );
      }),
      _ &&
        _(_, "Browser.AddWordToDictionary") &&
        ((_ = _.trim()),
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => _.SteamClient.Browser.AddWordToDictionary(_),
              children: _(
                "#ContextMenu_AddToDictionary",
                _.length < 30 ? _ : _.substring(0, 30) + "...",
              ),
            },
            `addtodictionary_${_}`,
          ),
        ));
  }
  if (
    ((_.document.queryCommandEnabled("cut") || (_ && _)) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand("cut");
            },
            children: _("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (_.document.queryCommandEnabled("copy") || _) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand("copy");
            },
            className: _.NoSeparation,
            children: _("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    _.IN_CLIENT &&
      _ &&
      _(_, "Browser.Paste") &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.focus(), _.SteamClient.Browser.Paste();
            },
            className: _.NoSeparation,
            children: _("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    _.IN_CLIENT && _.DEV_MODE)
  ) {
    let _ = [];
    _(_, "Browser.OpenDevTools") &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.focus(), _.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      _(_, "Browser.InspectElement") &&
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                _.focus(), _.SteamClient.Browser.InspectElement(_, _);
              },
              className: _.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      _.length > 0 &&
        (_.push((0, _.jsx)(_, {}, "devtools-separator")), _.push(..._));
  }
  if (_.length)
    _(
      (0, _.jsx)(_, {
        children: _,
      }),
      _,
      {
        bRootContextMenu: !0,
      },
    );
  else {
    if (_.shiftKey) return;
    _.preventDefault(), _.stopPropagation();
  }
}
var _ = "EnableContextMenuBlurDelay3";
function _() {
  return (window.localStorage && window.localStorage.getItem(_)) === "true";
}
var _ = class _ {
  static s_nNextKeyValue = 1;
  m_nKey = null;
  m_ContextMenuManager;
  m_bVisible = !1;
  m_fnTakeFocus;
  m_element;
  m_rctElement;
  m_rctLabel = void 0;
  m_popupContextMenu;
  m_timerHideMenu = 0;
  m_options;
  m_position;
  m_submenu;
  m_parentInstance;
  m_elSubmenuItem = null;
  m_timerHideSubMenu = 0;
  m_fnOnHideCallback;
  constructor(_, _) {
    _(this), (this.m_ContextMenuManager = _), (this.m_rctElement = _);
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey == null &&
        ((this.m_nKey = _.s_nNextKeyValue), _.s_nNextKeyValue++),
      this.m_nKey
    );
  }
  SetElement(_) {
    this.m_element = _;
  }
  SetPopup(_) {
    this.m_popupContextMenu = _;
  }
  get ReactElement() {
    return this.m_rctElement;
  }
  get label() {
    return this.m_rctLabel;
  }
  get submenu() {
    return this.m_submenu;
  }
  get visible() {
    return this.m_bVisible;
  }
  get options() {
    return this.m_options;
  }
  get position() {
    return this.m_position;
  }
  SetOnHideCallback(_) {
    this.m_fnOnHideCallback = _;
  }
  Show() {
    this.CancelHideMenuTimer(),
      (this.m_bVisible = !0),
      this.m_ContextMenuManager.ShowMenu(this);
  }
  OnCancel(_ = 0) {
    this.options?.onCancel && this.options.onCancel(), this.Hide(_);
  }
  Hide(_ = 0) {
    _ > 0
      ? (this.m_timerHideMenu = window.setTimeout(() => {
          (this.m_timerHideMenu = 0), this.InternalHide();
        }, _))
      : this.InternalHide();
  }
  CancelHideMenuTimer() {
    this.m_timerHideMenu > 0 &&
      (clearTimeout(this.m_timerHideMenu), (this.m_timerHideMenu = 0));
  }
  SetPosition(_, _, _) {
    (this.m_options = {
      ...this.m_options,
      ..._,
    }),
      (this.m_position.clientX = _),
      (this.m_position.clientY = _),
      (this.m_position.options = this.m_options);
  }
  ForceHide() {
    this.InternalHide();
  }
  HideIfNotInFocus() {
    !this.BHasFocus() && !this.BIsFocusInChildHierarchy() && this.Hide();
  }
  InternalHide() {
    this.CancelHideMenuTimer(),
      this.m_bVisible &&
        ((this.m_bVisible = !1),
        this.InternalHideSubMenu(),
        this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
        this.m_ContextMenuManager.HideMenu(this));
  }
  SetTakeFocus(_) {
    this.m_fnTakeFocus = _;
  }
  ShowSubMenu(_, _) {
    return this.m_elSubmenuItem == _
      ? (this.CancelHideSubMenuTimer(), this.m_submenu?.TakeFocus(), null)
      : (this.InternalHideSubMenu(),
        (this.m_elSubmenuItem = _),
        (this.m_submenu = new _(this, _(), _, this.m_options.bForcePopup)),
        this.m_submenu.Show(),
        this.m_submenu);
  }
  CancelHideSubMenuTimer() {
    this.m_timerHideSubMenu > 0 &&
      (clearTimeout(this.m_timerHideSubMenu), (this.m_timerHideSubMenu = 0));
  }
  HideSubMenu() {
    if (!this.m_submenu) {
      this.CancelHideSubMenuTimer();
      return;
    }
    if (this.m_timerHideSubMenu > 0) return;
    let _ = 150;
    this.m_timerHideSubMenu = window.setTimeout(() => {
      this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0);
    }, _);
  }
  OnSubMenuDismissed(_) {
    this.m_submenu == _ && this.InternalHideSubMenu();
  }
  HideSelf() {
    this.m_parentInstance
      ? this.m_parentInstance.OnSubMenuDismissed(this)
      : this.InternalHide();
  }
  InternalHideSubMenu() {
    this.CancelHideSubMenuTimer(),
      this.m_submenu &&
        (this.m_submenu.m_element &&
          this.BIsFocusInChildHierarchy() &&
          this.TakeFocus(1),
        (this.m_elSubmenuItem = null),
        this.m_submenu.InternalHide(),
        (this.m_submenu = void 0));
  }
  TakeFocus(_ = 1) {
    this.m_popupContextMenu && this.m_popupContextMenu.Focus(_),
      this.m_fnTakeFocus && this.m_fnTakeFocus();
  }
  BInternalElementInParentHierarchy(_) {
    return (
      this.m_parentInstance != null &&
      (this.m_parentInstance.BIsChildElement(_) ||
        this.m_parentInstance.BInternalElementInParentHierarchy(_))
    );
  }
  BInternalElementInChildHierarchy(_) {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BIsChildElement(_) ||
        this.m_submenu.BInternalElementInChildHierarchy(_))
    );
  }
  BIsChildElement(_) {
    return this.m_element
      ? _(this.m_element, _)
      : _(this.m_popupContextMenu?.root_element, _);
  }
  BHasFocus() {
    return this.m_popupContextMenu
      ? this.m_popupContextMenu.focused
      : _(this.m_element, this.m_element?.ownerDocument.activeElement);
  }
  BIsFocusInChildHierarchy() {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BHasFocus() || this.m_submenu.BIsFocusInChildHierarchy())
    );
  }
  BIsElementInMenuHierarchy(_) {
    return (
      this.BInternalElementInParentHierarchy(_) ||
      this.BInternalElementInChildHierarchy(_)
    );
  }
  BIsSubMenuVisible() {
    return !!this.m_submenu;
  }
  SetLabel(_) {
    this.m_rctLabel = _;
  }
};
_([_], _.prototype, "m_bVisible", 2), _([_.ref], _.prototype, "m_rctLabel", 2);
var _ = _,
  _ = class extends _ {
    constructor(_, _, _, _, _, _) {
      super(_, _),
        (this.m_options = _ || {}),
        (this.m_position = {
          element: _,
          clientX: _,
          clientY: _,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
        });
    }
    Show() {
      super.Show();
    }
    Hide(_ = 0) {
      super.Hide(_);
    }
    ForceHide() {
      super.ForceHide();
    }
    BIsSubMenu() {
      return !1;
    }
  },
  _ = class extends _ {
    constructor(_, _, _, _) {
      super(_.Manager, _),
        (this.m_parentInstance = _),
        (this.m_options = {
          bOverlapVertical: !0,
          strClassName: _.options.strClassName,
          bFitToWindow: _.options.bFitToWindow,
          bShiftToFitWindow: _.options.bShiftToFitWindow,
          bForcePopup: _,
        }),
        (this.m_position = {
          element: _,
          clientX: void 0,
          clientY: void 0,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
          bSubmenu: !0,
        });
    }
    Hide() {
      this.m_popupContextMenu
        ? window.setTimeout(() => {
            this.m_parentInstance?.HideIfNotInFocus();
          }, 10)
        : this.m_parentInstance?.Hide();
    }
    ForceHide() {
      this.m_parentInstance?.ForceHide();
    }
    BIsSubMenu() {
      return !0;
    }
  };
var _ = class {
  m_callbacksMenusChanged = new _();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(_, _, _, _, _) {
    let _ = new _(this, _, _, _, _, _);
    return (
      _?.bCreateHidden &&
        (this.m_setHiddenMenus.add(_), this.m_callbacksMenusChanged.Dispatch()),
      _
    );
  }
  get OnMenusChanged() {
    return this.m_callbacksMenusChanged;
  }
  HideActiveMenu() {
    this.m_ActiveMenu?.options.bRetainOnHide
      ? this.m_setHiddenMenus.add(this.m_ActiveMenu)
      : this.m_rgActiveSubmenus.length && (this.m_rgActiveSubmenus = []),
      (this.m_ActiveMenu = void 0);
  }
  get ActiveMenu() {
    return this.m_ActiveMenu;
  }
  GetVisibleMenus() {
    return this.m_ActiveMenu
      ? [this.m_ActiveMenu, ...this.m_rgActiveSubmenus]
      : [];
  }
  GetHiddenMenus() {
    return Array.from(this.m_setHiddenMenus);
  }
  GetAllMenus() {
    let _;
    return (
      this.m_ActiveMenu
        ? (_ = [
            this.m_ActiveMenu,
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ])
        : (_ = [
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ]),
      _.sort((_, _) => _.key - _.key)
    );
  }
  BShouldRenderMouseOverlay() {
    return this.m_ActiveMenu && !this.m_ActiveMenu.options.bDisableMouseOverlay;
  }
  ShowMenu(_) {
    if (_.BIsSubMenu()) this.m_rgActiveSubmenus.push(_);
    else {
      if (_ == this.m_ActiveMenu) return;
      this.m_ActiveMenu &&
        (this.m_ActiveMenu.options.bRetainOnHide &&
          this.m_setHiddenMenus.add(this.m_ActiveMenu),
        this.m_ActiveMenu.Hide()),
        (this.m_ActiveMenu = _),
        this.m_setHiddenMenus.delete(_);
    }
    this.m_callbacksMenusChanged.Dispatch();
  }
  HideMenu(_) {
    _.BIsSubMenu()
      ? _(this.m_rgActiveSubmenus, _) && this.m_callbacksMenusChanged.Dispatch()
      : (_(_ == this.m_ActiveMenu, "Call to hide inactive menu"),
        _ == this.m_ActiveMenu &&
          (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
  }
  ReleaseHiddenMenu(_) {
    this.m_setHiddenMenus.delete(_);
  }
};
var _ = class {
    m_mapManagers = new WeakMap();
    GetContextMenuManagerFromWindow(_) {
      let _ = _?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(_);
    }
    GetContextMenuManager(_) {
      let _ = this.m_mapManagers.get(_);
      if (!_) {
        let _ = _;
        for (; !_ && _.opener; )
          (_ = _.opener), (_ = this.m_mapManagers.get(_));
      }
      return _ || ((_ = new _()), this.m_mapManagers.set(_, _)), _;
    }
    SetMenuManager(_, _) {
      _(
        this.m_mapManagers.get(_) === void 0 || !_ || _ == window,
        `Stomping CContextMenuManager for ${_.document.title}!`,
      ),
        this.m_mapManagers.set(_, _);
    }
    RegisterChildWindow(_, _) {
      return (
        this.m_mapManagers.set(_, this.GetContextMenuManager(_)),
        () => this.m_mapManagers.delete(_)
      );
    }
  },
  _ = new _();
function _(_, _, _) {
  let _,
    _,
    _,
    _ = _;
  if (_?.preventDefault && _?.stopPropagation) {
    if (_.shiftKey || (_.altKey && !_?.bRootContextMenu)) return null;
    _.preventDefault(),
      _.stopPropagation(),
      (_ = _.currentTarget),
      (_ = _.clientX),
      (_ = _.clientY);
  } else _ = _;
  let _ = _.GetContextMenuManagerFromWindow(_).CreateContextMenuInstance(
    _,
    _,
    _,
    _,
    _,
  );
  return _.Show(), _?.bCreateHidden && _.Hide(), _;
}
var _ = _(_());
var _ = _(_());
function _(_) {
  let { direction: _, ..._ } = _;
  switch (_) {
    case "up":
      return (0, _.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ..._,
        children: (0, _.jsx)("path", {
          _: "M17.98 10.23L3.20996 25H32.75L17.98 10.23Z",
          fill: "currentColor",
        }),
      });
    case "down":
      return (0, _.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ..._,
        children: (0, _.jsx)("path", {
          _: "M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z",
          fill: "currentColor",
        }),
      });
    case "left":
      return (0, _.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ..._,
        children: (0, _.jsx)("path", {
          _: "M9.82497 18.385L24.595 3.61499L24.595 33.155L9.82497 18.385Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, _.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ..._,
        children: (0, _.jsx)("path", {
          _: "M26.135 18.385L11.365 33.155L11.365 3.61503L26.135 18.385Z",
          fill: "currentColor",
        }),
      });
  }
}
function _(_) {
  let { direction: _, ..._ } = _;
  switch (_) {
    case "up":
      return (0, _.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ..._,
        children: (0, _.jsx)("path", {
          fill: "currentColor",
          _: "M31 15.6394L18.0204 3L5 15.6394L8.60376 19.1432L18.0204 10.0076L27.4166 19.1432L31 15.6394ZM27.3962 33L18.0204 23.8644L8.62412 33L5 29.4962L18.0204 16.8568L31 29.4962L27.3962 33Z",
        }),
      });
    case "down":
      return (0, _.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ..._,
        children: (0, _.jsx)("path", {
          fill: "currentColor",
          _: "M31 20.3606L18.0204 33L5 20.3606L8.60376 16.8568L18.0204 25.9924L27.4166 16.8568L31 20.3606ZM27.3962 3L18.0204 12.1356L8.62412 3L5 6.50379L18.0204 19.1432L31 6.50379L27.3962 3Z",
        }),
      });
    case "left":
      return (0, _.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ..._,
        children: (0, _.jsx)("path", {
          _: "M14.23 30.75L1.45996 18L14.23 5.20999L17.77 8.74999L8.53996 18L17.77 27.23L14.23 30.75ZM31.77 27.21L22.54 18L31.77 8.76999L28.23 5.20999L15.46 18L28.23 30.75L31.77 27.21Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, _.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ..._,
        children: (0, _.jsx)("path", {
          _: "M19 30.75L31.77 18L19 5.20999L15.46 8.74999L24.69 18L15.46 27.23L19 30.75ZM1.46002 27.21L10.69 18L1.46002 8.76999L5.00002 5.20999L17.77 18L5.00002 30.75L1.46002 27.21Z",
          fill: "currentColor",
        }),
      });
  }
}
function _(_) {
  return (0, _.jsx)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ..._,
    children: (0, _.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      _: "M31.7 15.2077C31.703 12.5623 30.94 9.97259 29.5032 7.75136C28.0664 5.53014 26.0172 3.77242 23.6031 2.69048C21.189 1.60855 18.5133 1.24869 15.8992 1.65436C13.2851 2.06002 10.8443 3.21387 8.87163 4.97655C6.89899 6.73922 5.47888 9.03532 4.78281 11.5875C4.08673 14.1397 4.14447 16.8389 4.94905 19.359C5.75363 21.8791 7.27063 24.1124 9.31684 25.7891C11.363 27.4658 13.8509 28.5142 16.48 28.8077V34.5077L27.31 25.2477C28.6947 23.9675 29.7996 22.4147 30.5551 20.6869C31.3106 18.959 31.7004 17.0935 31.7 15.2077ZM15.3 7.06885L16.3075 16.9577H20.1309L21.1039 7.06885H15.3ZM20.6927 22.0125C20.6927 23.3774 19.5862 24.4838 18.2213 24.4838C16.8564 24.4838 15.7499 23.3774 15.7499 22.0125C15.7499 20.6475 16.8564 19.5411 18.2213 19.5411C19.5862 19.5411 20.6927 20.6475 20.6927 22.0125Z",
      fill: "currentColor",
    }),
  });
}
function _(_) {
  let { alert: _, urgent: _, ..._ } = _;
  return _
    ? (0, _.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ..._,
        children: [
          (0, _.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            _: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
          }),
          (0, _.jsx)("path", {
            fill: "#FFC82C",
            _: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
          }),
        ],
      })
    : _
      ? (0, _.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ..._,
          children: [
            (0, _.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              _: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
            }),
            (0, _.jsx)("path", {
              fill: "#1A9FFF",
              _: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
            }),
          ],
        })
      : (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ..._,
          children: (0, _.jsxs)("g", {
            className: "SVGIcon_Notification",
            children: [
              (0, _.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z",
                fill: "currentColor",
              }),
              (0, _.jsx)("path", {
                className: "SVGIcon_Notification_Uvula",
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z",
                fill: "currentColor",
              }),
            ],
          }),
        });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      _: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
      fill: "currentColor",
    }),
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ..._,
    children: [
      (0, _.jsx)("path", {
        _: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
        fill: "currentColor",
      }),
      (0, _.jsx)("path", {
        _: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
        fill: "currentColor",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, _.jsx)("path", {
      _: "M5 0H3C1.34315 0 0 1.34315 0 3V16C0 17.6569 1.34315 19 3 19H5V0Z",
      fill: "white",
    }),
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, _.jsx)("path", {
      _: "M0 0H2C3.65685 0 5 1.34315 5 3V16C5 17.6569 3.65685 19 2 19H0V0Z",
      fill: "white",
    }),
  });
}
var _ = _(_());
var _ = _(_());
function _(_) {
  return function (_) {
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        ..._,
      }),
    });
  };
}
var _ = class _ extends _.Component {
  state = {};
  constructor(_) {
    super(_), (this.state.lastErrorKey = _.errorKey);
  }
  static sm_ErrorReportingStore;
  static InstallErrorReportingStore(_) {
    this.sm_ErrorReportingStore = _;
  }
  componentDidCatch(_, _) {
    let _ = _.sm_ErrorReportingStore;
    _
      ? _.ReportError(_, {
          strComponentStack: _.componentStack || void 0,
        }).then(
          (_) =>
            _ &&
            this.setState({
              identifierHash: _.identifierHash,
            }),
        )
      : console.warn(
          "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
        ),
      this.setState({
        error: {
          error: _,
          info: _,
        },
        lastErrorKey: this.props.errorKey,
      });
  }
  Reset() {
    this.setState({
      error: void 0,
    });
  }
  render() {
    let { children: _, fallback: _, errorKey: _ } = this.props,
      { error: _, identifierHash: _, lastErrorKey: _ } = this.state;
    return _ && _ == _
      ? _ !== void 0
        ? typeof _ == "function"
          ? _(_.error)
          : _
        : _.sm_ErrorReportingStore && _.sm_ErrorReportingStore.reporting_enabled
          ? (0, _.jsx)(_, {
              error: _,
              identifierHash: _,
              store: _.sm_ErrorReportingStore,
              onRefresh: this.Reset,
            })
          : (0, _.jsx)(_, {
              error: _,
              onDismiss: this.Reset,
            })
      : _ || null;
  }
};
_([_], _.prototype, "Reset", 1);
var _ = _,
  _ = ({ error: _, onDismiss: _ }) => {
    let _ = _.error ? _.error.stack : "Stack missing",
      _ = _.info ? _.info.componentStack : "",
      _ = (_.error && _.error.message) || "unknown error";
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: ['Error: "', _, '"'],
        }),
        "   ",
        (0, _.jsx)("span", {
          style: {
            textDecoration: "underline",
            cursor: "pointer",
          },
          onClick: _,
          children: "(x) Dismiss",
        }),
        (0, _.jsx)("br", {}),
        (0, _.jsx)(_, {
          children: _,
        }),
        (0, _.jsxs)(_, {
          children: ["The error occurred while rendering:", _],
        }),
      ],
    });
  },
  _ = (_) => {
    let { error: _, onRefresh: _, identifierHash: _, store: _ } = _,
      _ = (_.error && _.error.message) || "unknown error",
      _ = `${_.product}_${_.version}_${_}`;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [
            "Something went wrong while displaying this content. ",
            (0, _.jsx)("span", {
              style: {
                textDecoration: "underline",
                cursor: "pointer",
              },
              onClick: _,
              children: "Refresh",
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          children: ["Error Reference: ", _],
        }),
        (0, _.jsx)(_, {
          children: _,
        }),
      ],
    });
  },
  _ = ({ children: _ }) =>
    (0, _.jsx)("div", {
      style: {
        overflow: "auto",
        marginLeft: "15px",
        color: "white",
        fontSize: "16px",
        userSelect: "auto",
        backgroundColor: "black",
      },
      className: "ErrorBoundary",
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)("h1", {
      style: {
        fontSize: "20px",
        display: "inline-block",
        marginTop: "15px",
        userSelect: "auto",
      },
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)("pre", {
      style: {
        marginTop: "15px",
        opacity: 0.7,
        userSelect: "auto",
      },
      children: _,
    });
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
