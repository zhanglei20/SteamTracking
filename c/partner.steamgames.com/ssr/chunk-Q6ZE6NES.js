var _ = _(_(), 1);
function _(_, _, _) {
  return typeof _ == "function" ? _(_, _) : _.default.cloneElement(_, _);
}
function _(_, _, _, _) {
  return _(_ || _, _, _);
}
export { _ };
