import { a as b } from "./chunk-PERA4MJB.js";
import { t as d, u as f, v as E, w as y, x as _ } from "./chunk-W7GN5EV7.js";
import { a as I } from "./chunk-FJ3WJMFW.js";
import { p } from "./chunk-3UC64NIE.js";
import { a as u } from "./chunk-EWNBABYZ.js";
import { e as o } from "./chunk-5WT7BLXL.js";
var h = o(u());
var O = "MKj0TKJbfZY-";
var L = "eUuYcDLWhSQ-";
var P = "dCDWhe2g-MY-";
var F = "nyxmtHd9FhE-";
var k = "bWcsWKN3D84-";
var V = "_967bv62tYlk-";
var x = "XXn-kJ7FSrw-";
var g = "ME2eMO7C1Tk-";
var w = "t-DeM6TllH4-";
var U = "ywNldZ-YzEE-";
var D = "DOnsaVcV0Is-";
var m = o(I()),
  e = o(p()),
  Z = h.memo(function (t) {
    let {
        purchaseOption: i,
        size: c = "large",
        transparentBackground: C = !1,
      } = t,
      {
        discount_pct: a = 0,
        formatted_original_price: s,
        formatted_final_price: n,
        final_price_in_cents: l,
        hide_discount_pct_for_compliance: S = !1,
        bundle_discount_pct: R,
      } = i;
    if (!n) return null;
    let N = a && !S;
    return (0, e.jsxs)(H, {
      percentage: a,
      original_price: s,
      final_price: n,
      hide_discount_pct: S,
      size: c,
      transparent: C,
      children: [
        a > 0 && (0, e.jsx)(M, { percentage: a, hide_discount_pct: S }),
        (0, e.jsx)(G, { final_price: n, original_price: N ? s : void 0 }),
      ],
    });
  });
function G(r) {
  let { final_price: t, original_price: i } = r;
  return i
    ? (0, e.jsxs)("div", {
        className: (0, m.default)(g, w),
        children: [
          (0, e.jsx)("div", { className: U, children: i }),
          (0, e.jsx)("div", { className: D, children: t }),
        ],
      })
    : (0, e.jsx)("div", {
        className: g,
        children: (0, e.jsx)("div", { className: D, children: t }),
      });
}
function M(r) {
  let { percentage: t, hide_discount_pct: i } = r;
  return i
    ? (0, e.jsx)("div", {
        className: (0, m.default)(k, V),
        children: (0, e.jsx)(z, {}),
      })
    : (0, e.jsx)("div", {
        className: (0, m.default)(k),
        children: (0, e.jsxs)("div", { className: x, children: ["-", t, "%"] }),
      });
}
function H(r) {
  let {
      percentage: t,
      original_price: i,
      final_price: c,
      hide_discount_pct: C,
      size: a,
      transparent: s,
      children: n,
    } = r,
    l = {};
  return (
    t &&
      ((l.role = "link"),
      C
        ? (l["aria-label"] = b.Localize("#Discount_ARIA_Label_SpecialPrice", c))
        : (l["aria-label"] = b.Localize("#Discount_ARIA_Label", t, i, c))),
    (0, e.jsx)("div", {
      ...l,
      className: (0, m.default)(
        O,
        s && L,
        a == "large" && P,
        a == "inline" && F,
      ),
      children: n,
    })
  );
}
function z() {
  return (0, e.jsx)("svg", {
    width: "26",
    height: "26",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 26 26",
    fill: "none",
    children: (0, e.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.5133 4.65595C15.8046 6.36468 17.0366 9.2803 19.4284 9.28035C20.446 9.28035 21.0261 8.76331 21.2519 8.56209C21.2963 8.5225 21.327 8.49513 21.3447 8.48633C22.4018 7.42917 22.4024 5.71423 21.3441 4.65595C20.2817 3.59714 18.5699 3.59936 17.5133 4.65595ZM18.5553 7.44735C17.4045 6.30173 19.1522 4.54882 20.301 5.69597V5.69586C20.7836 6.18159 20.783 6.96269 20.301 7.44422C19.8189 7.92684 19.0348 7.92415 18.5553 7.44735ZM0.583974 13.873L14.455 0L24.4165 1.583L26 11.5449L12.1289 25.416C11.7368 25.805 11.2252 26 10.7156 26C10.2065 26 9.69489 25.805 9.30552 25.416L0.583974 16.6976C0.194954 16.305 0 15.7933 0 15.2843C0 14.7742 0.194948 14.2625 0.583974 13.873ZM9.26632 17.5853L8.88665 17.965C8.62416 18.2274 8.43667 18.5227 8.32418 18.8509C8.21403 19.1766 8.19645 19.5106 8.27145 19.8528C8.34879 20.1926 8.53979 20.5148 8.84446 20.8195C9.14445 21.1195 9.46318 21.307 9.80066 21.382C10.1428 21.457 10.4756 21.4382 10.7991 21.3257C11.1272 21.2132 11.4225 21.0257 11.6849 20.7633L12.0646 20.3836C12.3271 20.1211 12.5146 19.8281 12.6271 19.5047C12.7419 19.179 12.7618 18.8473 12.6868 18.5099C12.6142 18.17 12.4255 17.8478 12.1209 17.5431C11.8209 17.2431 11.4986 17.0545 11.1541 16.9771C10.8143 16.8998 10.4791 16.9162 10.1487 17.0263C9.82293 17.1365 9.5288 17.3228 9.26632 17.5853ZM9.6038 18.6821L9.98347 18.3024C10.2014 18.0845 10.4487 17.9427 10.7252 17.8771C11.0065 17.8115 11.2701 17.9017 11.5162 18.1478C11.7693 18.4009 11.8584 18.6634 11.7834 18.9352C11.7107 19.2047 11.5654 19.4485 11.3475 19.6664L10.9678 20.0461C10.7498 20.2641 10.5026 20.4082 10.226 20.4785C9.95417 20.5488 9.6952 20.4609 9.44912 20.2148C9.19601 19.9617 9.10344 19.6981 9.1714 19.4239C9.24171 19.1473 9.38584 18.9001 9.6038 18.6821ZM9.80066 9.87944L9.421 10.2591C9.15851 10.5216 8.97102 10.8169 8.85853 11.145C8.74837 11.4708 8.7308 11.8047 8.80579 12.1469C8.88313 12.4867 9.07414 12.809 9.37881 13.1136C9.6788 13.4136 9.99753 13.6011 10.335 13.6761C10.6772 13.7511 11.01 13.7324 11.3334 13.6199C11.6615 13.5074 11.9568 13.3199 12.2193 13.0574L12.599 12.6777C12.8614 12.4152 13.0489 12.1223 13.1614 11.7989C13.2763 11.4731 13.2962 11.1415 13.2212 10.804C13.1485 10.4642 12.9599 10.1419 12.6552 9.83725C12.3552 9.53727 12.033 9.34861 11.6885 9.27127C11.3486 9.19393 11.0135 9.21033 10.683 9.32048C10.3573 9.43063 10.0632 9.61695 9.80066 9.87944ZM10.1381 10.9763L10.5178 10.5966C10.7358 10.3786 10.983 10.2368 11.2596 10.1712C11.5408 10.1056 11.8045 10.1958 12.0506 10.4419C12.3037 10.695 12.3927 10.9575 12.3177 11.2294C12.2451 11.4989 12.0998 11.7426 11.8818 11.9606L11.5021 12.3403C11.2842 12.5582 11.0369 12.7023 10.7604 12.7726C10.4885 12.843 10.2295 12.7551 9.98347 12.509C9.73036 12.2559 9.63778 11.9922 9.70575 11.718C9.77606 11.4415 9.92019 11.1942 10.1381 10.9763ZM16.3675 13.7464L4.21814 15.9963L5.01966 16.7978L17.169 14.5479L16.3675 13.7464Z",
    }),
  });
}
var W = o(u());
var v = o(p()),
  le = W.default.createContext({
    bForceShowCompatInfo: !1,
    bSteamOS: !1,
    bSteamDeck: !1,
  });
var me = { 1: y, 2: E, 3: f, 0: _ },
  ce = { 0: _, 1: y, 2: d };
var se = {
  3: "#DeckVerified_CategoryLabel_Verified",
  2: "#DeckVerified_CategoryLabel_Playable",
  1: "#DeckVerified_CategoryLabel_Unsupported",
  0: "#DeckVerified_CategoryLabel_Unknown",
};
var pe = {
  2: "#SteamOS_CategoryLabel_Compatible",
  1: "#SteamOS_CategoryLabel_Unsupported",
  0: "#SteamOS_CategoryLabel_Unknown",
};
var Ce = {
  3: "#DeckVerified_FilterLabel_Verified",
  2: "#DeckVerified_FilterLabel_Verified_Playable",
  0: "#DeckVerified_FilterLabel_Verified_Playable_Unknown",
  1: "#DeckVerified_FilterLabel_AllGames",
};
var Se = {
  3: "#DeckVerified_FilterDescription_Verified",
  2: "#DeckVerified_FilterDescription_Verified_Playable",
  0: "#DeckVerified_FilterDescription_Verified_Playable_Unknown",
  1: "#DeckVerified_FilterDescription_AllGames",
};
var ye = {
  2: "#SteamOS_FilterLabel_Compatible",
  0: "#SteamOS_FilterLabel_Compatible_Unknown",
  1: "#SteamOS_FilterLabel_AllGames",
};
var _e = {
  2: "#SteamOS_FilterDescription_Compatible",
  0: "#SteamOS_FilterDescription_Compatible_Unknown",
  1: "#SteamOS_FilterDescription_AllGames",
};
export { Z as a };
