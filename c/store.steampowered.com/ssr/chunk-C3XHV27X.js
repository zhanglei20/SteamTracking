import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _(_());
function _(_, _) {
  _ != null &&
    (typeof _ == "function" ? _(_) : "current" in _ && (_.current = _));
}
function _(..._) {
  return _.useCallback((_) => {
    for (let _ of _) _(_, _);
  }, _);
}
function _(..._) {
  if (!(!_ || _.length === 0))
    return _.length === 1
      ? _[0]
      : (_) =>
          _.forEach((_) => {
            if (_) typeof _ == "function" ? _(_) : (_.current = _);
            else return;
          });
}
function _(_, _) {
  let _ = _.useRef(void 0);
  return _.useCallback((_) => {
    _.current && _.current(), (_.current = _(_));
  }, _);
}
function _(_) {
  let _ = _.useRef(null),
    _ = _(_, _);
  return {
    refWithValue: _,
    refForElement: _,
  };
}
function _(_, _) {
  let _ = _.useRef(!1);
  _.useLayoutEffect(
    () => () => {
      _.current && _(_, void 0);
    },
    [_],
  ),
    _.useLayoutEffect(() => {
      (_ || _.current) && (_(_, _), (_.current = !!_));
    }, [_, _]);
}
function _() {
  let [, _] = _.useState(0);
  return _.useCallback(() => _((_) => _ + 1), []);
}
function _(_, _, _) {
  return _(
    (_) => {
      if (!(!_ || !_))
        return _.addEventListener(_, _, _), () => _.removeEventListener(_, _);
    },
    [_, _],
  );
}
function _(_, _, _, _) {
  _.useEffect(() => {
    if (!(!_ || !_))
      return _.addEventListener(_, _, _), () => _.removeEventListener(_, _, _);
  }, [_, _, _]);
}
function _(_, _, _, _) {
  return _(
    _,
    "message",
    function (_) {
      _.includes(_.data) && _(this, _);
    },
    _,
  );
}
function _(_, _) {
  _.useLayoutEffect(() => {
    if (!_ || !_) return;
    let _ = _.Register(_);
    return () => _.Unregister();
  }, [_, _]);
}
function _(_) {
  let [_, _] = _.useState(_?.Value);
  return (
    _.useEffect(() => {
      if (_ == null) return;
      let _ = _.Subscribe(_);
      return _(_.Value), _?.Unsubscribe;
    }, [_]),
    _
  );
}
function _(_, _) {
  let [_, _] = _.useState(_);
  return (
    _.useEffect(() => {
      if (_) {
        _(!0);
        return;
      } else {
        let _ = window.setTimeout(() => _(!1), _);
        return () => window.clearTimeout(_);
      }
    }, [_, _]),
    _
  );
}
function _(_, _) {
  return _(_, _) || _;
}
function _(_ = !1) {
  let [_, _] = _.useState(_),
    _ = _.useCallback(() => _(!0), []),
    _ = _.useCallback(() => _(!1), []);
  return [_, _, _];
}
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || "",
      _ = _(_, ..._),
      _ = (_ >= 1 && _ <= _.length ? _[_ - 1] : null)
        ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
        : _;
    _.push(_);
  }
  return _.push(_.slice(_)), _.createElement(_.Fragment, null, ..._);
}
function _(_) {
  return _ != null && _.focus !== void 0;
}
function _(_, _) {
  let _ = _;
  for (; _; ) {
    if (
      (_.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (_ = _.parentNode.host),
      _ == _)
    )
      return !0;
    _ = _.parentElement;
  }
  return !1;
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function _(_, _) {
  return {
    top: _.screenTop + _.top,
    bottom: _.screenTop + _.bottom,
    left: _.screenLeft + _.left,
    right: _.screenLeft + _.right,
  };
}
function _(_) {
  let _ = 1,
    _ = _;
  for (; _ != null && _.tagName != "HTML"; ) {
    let _ = getComputedStyle(_);
    if (_.zoom) {
      let _ = Number.parseFloat(_.zoom);
      isNaN(_) || (_ *= _);
    }
    _ = _.parentElement;
  }
  return _;
}
function _(_) {
  let _;
  return (
    _ && _(_.currentTarget) && (_ = _.currentTarget.ownerDocument.defaultView),
    _
  );
}
function _(_) {
  let _;
  return _ && (_ = _.ownerDocument.defaultView), _;
}
function _(_) {
  return _.nodeName === "INPUT";
}
function _(_, _) {
  switch (_) {
    case "TEXTAREA":
      return !0;
    case "INPUT":
      switch (_) {
        case "date":
        case "datetime-local":
        case "datetime":
        case "email":
        case "month":
        case "number":
        case "password":
        case "search":
        case "tel":
        case "text":
        case "time":
        case "url":
        case "week":
          return !0;
        default:
          return !1;
      }
    default:
      return !1;
  }
}
function _(_, _) {
  let _ = _?.parentElement;
  for (; _; ) {
    if (_(_)) {
      if (!_ || _ == "x") {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowX == "scroll" ||
          _.overflowX == "auto" ||
          _.position == "fixed"
        )
          break;
      }
      if (!_ || _ == "y") {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowY == "scroll" ||
          _.overflowY == "auto" ||
          _.position == "fixed"
        )
          break;
      }
    }
    _ = _.parentElement;
  }
  return _(_) ? _ : null;
}
function _(_, _) {
  let _ = [],
    _ = _;
  for (; (_ = _(_, _)); ) _.push(_);
  return _;
}
function _(_, _) {
  let _ = _;
  for (; _; ) {
    if (_(_)) return _;
    _ = _.parentElement;
  }
}
function _() {
  return _(document);
}
function _(_) {
  let _ = {};
  return (
    _.querySelectorAll('link[rel="stylesheet"]').forEach((_) => {
      _[_.href] = _;
    }),
    _
  );
}
function _(_, _) {
  _(_.document, _, !0);
}
function _(_, _, _) {
  let _ = Object.assign({}, _),
    _ = _.getElementsByTagName("head")[0],
    _ = _.getElementsByTagName("link"),
    _ = _.length;
  for (let _ = 0; _ < _; ++_) {
    let _ = _[_];
    _[_.href] ? delete _[_.href] : _ && _.parentNode?.removeChild(_);
  }
  let _ = [];
  for (let _ in _) {
    let _ = _[_],
      _ = _.createElement("link");
    for (let _ = 0; _ < _.attributes.length; _++) {
      let _ = _.attributes.item(_);
      _.setAttribute(_.name, _.value);
    }
    _.push(_);
  }
  return _.prepend(..._), _;
}
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
};
