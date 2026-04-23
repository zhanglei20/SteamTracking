function _(_, _, _, _) {
  let _ = _;
  typeof _ == "number"
    ? (_ = {
        nDigitsAfterDecimal: _,
        bUseBinary1K: _ || _ === void 0,
        bValueIsInBytes: !_,
        bValueIsRate: _,
        nMinimumDigitsAfterDecimal: 0,
      })
    : (_ = {
        nDigitsAfterDecimal: 2,
        bUseBinary1K: !0,
        bValueIsInBytes: !0,
        bValueIsRate: !1,
        nMinimumDigitsAfterDecimal: 0,
        ..._,
      });
  let _ = _.bUseBinary1K ? 1024 : 1e3,
    _ = _ * _,
    _ = _ * _,
    _ = _ * _,
    _ = "",
    _;
  _ > _
    ? ((_ = _ / _), (_ = "Tera"))
    : _ > _
      ? ((_ = _ / _), (_ = "Giga"))
      : _ > _
        ? ((_ = _ / _), (_ = "Mega"))
        : _ > _
          ? ((_ = _ / _), (_ = "Kilo"))
          : (_ = _);
  let _ =
    "#" +
    _ +
    (_.bValueIsInBytes ? "bytes" : "bits") +
    (_.bValueIsRate ? "_PerSecond" : "");
  return _(
    _,
    _.toLocaleString(_.GetPreferredLocales(), {
      minimumFractionDigits: _.nMinimumDigitsAfterDecimal,
      maximumFractionDigits: _.nDigitsAfterDecimal,
    }),
  );
}
export { _ };
