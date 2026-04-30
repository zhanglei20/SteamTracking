function _(_) {
  return _.COMMUNITY_BASE_URL + "linkfilter/?u=" + encodeURIComponent(_);
}
function _(_, _) {
  if (_.startsWith("steam://") || _.startsWith("/")) return !1;
  let _ = _(_).toLowerCase(),
    _ = _(_.COMMUNITY_BASE_URL).toLowerCase(),
    _ = _(_.STORE_BASE_URL).toLowerCase(),
    _ = _(_.HELP_BASE_URL).toLowerCase(),
    _ = "support.steampowered.com",
    _ = "www.dota2.com",
    _ = _(_.PARTNER_BASE_URL || "").toLowerCase();
  return (
    _ !== _ &&
    _ !== _ &&
    _ !== _ &&
    _ !== _ &&
    _ !== _ &&
    _ !== _ &&
    (!_ || _.filter((_) => _ == _).length == 0)
  );
}
var _ = !0,
  _ = "Invariant failed";
function _(_, _) {
  if (!_) {
    if (_) throw new Error(_);
    var _ = typeof _ == "function" ? _() : _,
      _ = _ ? "".concat(_, ": ").concat(_) : _;
    throw new Error(_);
  }
}
export { _, _, _ };
