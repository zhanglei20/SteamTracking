const CLSTAMP = 9745740;

import { a as l, c as u } from "./chunk-K5ZUJZBX.js";
import { a as f } from "./chunk-U3KEEKNR.js";
import { e as c } from "./chunk-34BLD55L.js";
var a = function () {
  return null;
};
var e = c(f());
function R(n) {
  let { queryClient: t = s, steamUI: r } = n;
  e.useEffect(() => {
    t == s &&
      t.setDefaultOptions({
        ...o,
        queries: { ...o.queries, networkMode: r ? "offlineFirst" : void 0 },
        mutations: { ...o.mutations, networkMode: r ? "offlineFirst" : void 0 },
      });
  }, [t, r]);
  let i = n.children;
  return (
    n.debug &&
      (i = [
        ...e.Children.toArray(i),
        e.createElement(a, { key: "ReactQueryDevtools" }),
      ]),
    e.createElement(u, { client: t }, i)
  );
}
var o = { queries: { staleTime: 1 / 0 } },
  s = new l({ defaultOptions: o });
export { a, R as b };
