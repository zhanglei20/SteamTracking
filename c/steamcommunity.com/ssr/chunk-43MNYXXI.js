function _(_) {
  if (_ === void 0) return console.error("Cannot GetHostname on empty URL"), "";
  let _ = new RegExp(
      "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
      "im",
    ),
    _ = _.match(_);
  return _ && _.length > 5 ? _[6].toString() : _;
}
export { _ };
