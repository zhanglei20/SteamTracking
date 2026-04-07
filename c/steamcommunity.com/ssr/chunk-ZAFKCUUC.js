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
function _(_) {
  if (_ === void 0) return console.error("Cannot GetHostname on empty URL"), "";
  let _ = new RegExp(
      "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
      "im",
    ),
    _ = _.match(_);
  return _ && _.length > 5 ? _[6].toString() : _;
}
export { _, _ };
