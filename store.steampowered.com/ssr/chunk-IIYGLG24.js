const CLSTAMP = 9632766;

import { d as i } from "./chunk-FXSFSLC6.js";
import { a as c } from "./chunk-QUNX7DJD.js";
import { a as v } from "./chunk-3I3KBY56.js";
import { d as a } from "./chunk-BDMPFFNE.js";
var o = a(v());
function b(r, t) {
  return i(
    (e) => {
      if (!e) return;
      let n = t(e.ownerDocument.defaultView, (s) => {
        r(s[0]);
      });
      return n.observe(e), () => n.unobserve(e);
    },
    [r, t],
  );
}
function f(r) {
  let t = o.useCallback(
    (e, n) =>
      e.ResizeObserver
        ? new e.ResizeObserver(n)
        : (c(!1, "ResizeObserver is not available"),
          { observe: () => {}, unobserve: () => {}, disconnect: () => {} }),
    [],
  );
  return b(r, t);
}
function l(r, t) {
  let e = o.useCallback((n, s) => new n.IntersectionObserver(s, t), [t]);
  return b(r, e);
}
function R(r, ...t) {
  let e = r.ownerDocument.defaultView,
    n = new e.IntersectionObserver(...t);
  return n.observe(r), n;
}
export { f as a, l as b, R as c };
