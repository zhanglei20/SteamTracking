const CLSTAMP = 9528552;

import { a as t, b as u } from "./chunk-4O3O2M53.js";
import "./chunk-4RKWUYSN.js";
import "./chunk-4YBKQBLH.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-BH4YZULW.js";
import "./chunk-VN3HL2SG.js";
import "./chunk-FSH3XL2N.js";
import "./chunk-PTBYIFIV.js";
import "./chunk-DZQUBPPO.js";
import "./chunk-VNMHMF26.js";
function n(s) {
  if (
    (window.SSR?.reactRoot ||
      e({
        assetData: s,
        metadata: t(),
        loaderData: window.SSR?.loaderData ?? [],
        id: 0,
      }),
    0)
  )
    var a;
}
if (!window.SSR?.reactRoot) {
  if (!window.SSR?.clientAssets) throw "Missing SSR clientAssets";
  n(window.SSR?.clientAssets);
}
export {
  u as ClientReactInit,
  p as FetchLoader,
  g as FetchLoaders,
  m as FetchRouteData,
  C as NavigateToRoute,
  A as getPageHistoryState,
  n as onNavigate,
  w as pushPageHistoryState,
  e as replacePageHistoryState,
  h as useClientSideNavigation,
};
