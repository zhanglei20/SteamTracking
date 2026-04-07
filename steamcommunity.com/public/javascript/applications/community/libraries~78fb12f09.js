/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2421],
  {
    33559: (e, t, n) => {
      n.d(t, {
        BN: () => s,
        Ej: () => a,
        UU: () => c,
        cY: () => l,
        rD: () => i,
      });
      var r = n(58015);
      function o(e, t, n) {
        let { reference: o, floating: i } = e;
        const u = (0, r.TV)(t),
          c = (0, r.Dz)(t),
          l = (0, r.sq)(c),
          s = (0, r.C0)(t),
          a = "y" === u,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          m = o[l] / 2 - i[l] / 2;
        let v;
        switch (s) {
          case "top":
            v = { x: f, y: o.y - i.height };
            break;
          case "bottom":
            v = { x: f, y: o.y + o.height };
            break;
          case "right":
            v = { x: o.x + o.width, y: d };
            break;
          case "left":
            v = { x: o.x - i.width, y: d };
            break;
          default:
            v = { x: o.x, y: o.y };
        }
        switch ((0, r.Sg)(t)) {
          case "start":
            v[c] -= m * (n && a ? -1 : 1);
            break;
          case "end":
            v[c] += m * (n && a ? -1 : 1);
        }
        return v;
      }
      const i = async (e, t, n) => {
        const {
            placement: r = "bottom",
            strategy: i = "absolute",
            middleware: u = [],
            platform: c,
          } = n,
          l = u.filter(Boolean),
          s = await (null == c.isRTL ? void 0 : c.isRTL(t));
        let a = await c.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: f, y: d } = o(a, r, s),
          m = r,
          v = {},
          p = 0;
        for (let n = 0; n < l.length; n++) {
          const { name: u, fn: g } = l[n],
            {
              x: h,
              y,
              data: b,
              reset: w,
            } = await g({
              x: f,
              y: d,
              initialPlacement: r,
              placement: m,
              strategy: i,
              middlewareData: v,
              rects: a,
              platform: c,
              elements: { reference: e, floating: t },
            });
          (f = null != h ? h : f),
            (d = null != y ? y : d),
            (v = { ...v, [u]: { ...v[u], ...b } }),
            w &&
              p <= 50 &&
              (p++,
              "object" == typeof w &&
                (w.placement && (m = w.placement),
                w.rects &&
                  (a =
                    !0 === w.rects
                      ? await c.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : w.rects),
                ({ x: f, y: d } = o(a, m, s))),
              (n = -1));
        }
        return { x: f, y: d, placement: m, strategy: i, middlewareData: v };
      };
      async function u(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: o,
            y: i,
            platform: u,
            rects: c,
            elements: l,
            strategy: s,
          } = e,
          {
            boundary: a = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: d = "floating",
            altBoundary: m = !1,
            padding: v = 0,
          } = (0, r._3)(t, e),
          p = (0, r.nI)(v),
          g = l[m ? ("floating" === d ? "reference" : "floating") : d],
          h = (0, r.B1)(
            await u.getClippingRect({
              element:
                null ==
                  (n = await (null == u.isElement ? void 0 : u.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == u.getDocumentElement
                      ? void 0
                      : u.getDocumentElement(l.floating))),
              boundary: a,
              rootBoundary: f,
              strategy: s,
            }),
          ),
          y = "floating" === d ? { ...c.floating, x: o, y: i } : c.reference,
          b = await (null == u.getOffsetParent
            ? void 0
            : u.getOffsetParent(l.floating)),
          w = ((await (null == u.isElement ? void 0 : u.isElement(b))) &&
            (await (null == u.getScale ? void 0 : u.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          x = (0, r.B1)(
            u.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: y,
                  offsetParent: b,
                  strategy: s,
                })
              : y,
          );
        return {
          top: (h.top - x.top + p.top) / w.y,
          bottom: (x.bottom - h.bottom + p.bottom) / w.y,
          left: (h.left - x.left + p.left) / w.x,
          right: (x.right - h.right + p.right) / w.x,
        };
      }
      const c = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "flip",
            options: e,
            async fn(t) {
              var n, o;
              const {
                  placement: i,
                  middlewareData: c,
                  rects: l,
                  initialPlacement: s,
                  platform: a,
                  elements: f,
                } = t,
                {
                  mainAxis: d = !0,
                  crossAxis: m = !0,
                  fallbackPlacements: v,
                  fallbackStrategy: p = "bestFit",
                  fallbackAxisSideDirection: g = "none",
                  flipAlignment: h = !0,
                  ...y
                } = (0, r._3)(e, t);
              if (null != (n = c.arrow) && n.alignmentOffset) return {};
              const b = (0, r.C0)(i),
                w = (0, r.C0)(s) === s,
                x = await (null == a.isRTL ? void 0 : a.isRTL(f.floating)),
                E = v || (w || !h ? [(0, r.bV)(s)] : (0, r.WJ)(s));
              v || "none" === g || E.push(...(0, r.lP)(s, h, g, x));
              const R = [s, ...E],
                k = await u(t, y),
                I = [];
              let C = (null == (o = c.flip) ? void 0 : o.overflows) || [];
              if ((d && I.push(k[b]), m)) {
                const e = (0, r.w7)(i, l, x);
                I.push(k[e[0]], k[e[1]]);
              }
              if (
                ((C = [...C, { placement: i, overflows: I }]),
                !I.every((e) => e <= 0))
              ) {
                var L, T;
                const e = ((null == (L = c.flip) ? void 0 : L.index) || 0) + 1,
                  t = R[e];
                if (t)
                  return {
                    data: { index: e, overflows: C },
                    reset: { placement: t },
                  };
                let n =
                  null ==
                  (T = C.filter((e) => e.overflows[0] <= 0).sort(
                    (e, t) => e.overflows[1] - t.overflows[1],
                  )[0])
                    ? void 0
                    : T.placement;
                if (!n)
                  switch (p) {
                    case "bestFit": {
                      var S;
                      const e =
                        null ==
                        (S = C.map((e) => [
                          e.placement,
                          e.overflows
                            .filter((e) => e > 0)
                            .reduce((e, t) => e + t, 0),
                        ]).sort((e, t) => e[1] - t[1])[0])
                          ? void 0
                          : S[0];
                      e && (n = e);
                      break;
                    }
                    case "initialPlacement":
                      n = s;
                  }
                if (i !== n) return { reset: { placement: n } };
              }
              return {};
            },
          }
        );
      };
      const l = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                var n, o;
                const { x: i, y: u, placement: c, middlewareData: l } = t,
                  s = await (async function (e, t) {
                    const { placement: n, platform: o, elements: i } = e,
                      u = await (null == o.isRTL
                        ? void 0
                        : o.isRTL(i.floating)),
                      c = (0, r.C0)(n),
                      l = (0, r.Sg)(n),
                      s = "y" === (0, r.TV)(n),
                      a = ["left", "top"].includes(c) ? -1 : 1,
                      f = u && s ? -1 : 1,
                      d = (0, r._3)(t, e);
                    let {
                      mainAxis: m,
                      crossAxis: v,
                      alignmentAxis: p,
                    } = "number" == typeof d
                      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: 0,
                          crossAxis: 0,
                          alignmentAxis: null,
                          ...d,
                        };
                    return (
                      l &&
                        "number" == typeof p &&
                        (v = "end" === l ? -1 * p : p),
                      s ? { x: v * f, y: m * a } : { x: m * a, y: v * f }
                    );
                  })(t, e);
                return c === (null == (n = l.offset) ? void 0 : n.placement) &&
                  null != (o = l.arrow) &&
                  o.alignmentOffset
                  ? {}
                  : { x: i + s.x, y: u + s.y, data: { ...s, placement: c } };
              },
            }
          );
        },
        s = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                const { x: n, y: o, placement: i } = t,
                  {
                    mainAxis: c = !0,
                    crossAxis: l = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...a
                  } = (0, r._3)(e, t),
                  f = { x: n, y: o },
                  d = await u(t, a),
                  m = (0, r.TV)((0, r.C0)(i)),
                  v = (0, r.PG)(m);
                let p = f[v],
                  g = f[m];
                if (c) {
                  const e = "y" === v ? "bottom" : "right",
                    t = p + d["y" === v ? "top" : "left"],
                    n = p - d[e];
                  p = (0, r.qE)(t, p, n);
                }
                if (l) {
                  const e = "y" === m ? "bottom" : "right",
                    t = g + d["y" === m ? "top" : "left"],
                    n = g - d[e];
                  g = (0, r.qE)(t, g, n);
                }
                const h = s.fn({ ...t, [v]: p, [m]: g });
                return { ...h, data: { x: h.x - n, y: h.y - o } };
              },
            }
          );
        },
        a = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                const { placement: n, rects: o, platform: i, elements: c } = t,
                  { apply: l = () => {}, ...s } = (0, r._3)(e, t),
                  a = await u(t, s),
                  f = (0, r.C0)(n),
                  d = (0, r.Sg)(n),
                  m = "y" === (0, r.TV)(n),
                  { width: v, height: p } = o.floating;
                let g, h;
                "top" === f || "bottom" === f
                  ? ((g = f),
                    (h =
                      d ===
                      ((await (null == i.isRTL ? void 0 : i.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((h = f), (g = "end" === d ? "top" : "bottom"));
                const y = p - a[g],
                  b = v - a[h],
                  w = !t.middlewareData.shift;
                let x = y,
                  E = b;
                if (m) {
                  const e = v - a.left - a.right;
                  E = d || w ? (0, r.jk)(b, e) : e;
                } else {
                  const e = p - a.top - a.bottom;
                  x = d || w ? (0, r.jk)(y, e) : e;
                }
                if (w && !d) {
                  const e = (0, r.T9)(a.left, 0),
                    t = (0, r.T9)(a.right, 0),
                    n = (0, r.T9)(a.top, 0),
                    o = (0, r.T9)(a.bottom, 0);
                  m
                    ? (E =
                        v -
                        2 *
                          (0 !== e || 0 !== t
                            ? e + t
                            : (0, r.T9)(a.left, a.right)))
                    : (x =
                        p -
                        2 *
                          (0 !== n || 0 !== o
                            ? n + o
                            : (0, r.T9)(a.top, a.bottom)));
                }
                await l({ ...t, availableWidth: E, availableHeight: x });
                const R = await i.getDimensions(c.floating);
                return v !== R.width || p !== R.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        };
    },
    28505: (e, t, n) => {
      n.d(t, {
        BN: () => w,
        Ej: () => E,
        UU: () => x,
        ll: () => b,
        rD: () => R,
      });
      var r = n(58015),
        o = n(33559),
        i = n(977);
      function u(e) {
        const t = (0, i.L9)(e);
        let n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0;
        const u = (0, i.sb)(e),
          c = u ? e.offsetWidth : n,
          l = u ? e.offsetHeight : o,
          s = (0, r.LI)(n) !== c || (0, r.LI)(o) !== l;
        return s && ((n = c), (o = l)), { width: n, height: o, $: s };
      }
      function c(e) {
        return (0, i.vq)(e) ? e : e.contextElement;
      }
      function l(e) {
        const t = c(e);
        if (!(0, i.sb)(t)) return (0, r.Jx)(1);
        const n = t.getBoundingClientRect(),
          { width: o, height: l, $: s } = u(t);
        let a = (s ? (0, r.LI)(n.width) : n.width) / o,
          f = (s ? (0, r.LI)(n.height) : n.height) / l;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (f && Number.isFinite(f)) || (f = 1),
          { x: a, y: f }
        );
      }
      const s = (0, r.Jx)(0);
      function a(e) {
        const t = (0, i.zk)(e);
        return (0, i.Tc)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : s;
      }
      function f(e, t, n, o) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const u = e.getBoundingClientRect(),
          s = c(e);
        let f = (0, r.Jx)(1);
        t && (o ? (0, i.vq)(o) && (f = l(o)) : (f = l(e)));
        const d = (function (e, t, n) {
          return (
            void 0 === t && (t = !1), !(!n || (t && n !== (0, i.zk)(e))) && t
          );
        })(s, n, o)
          ? a(s)
          : (0, r.Jx)(0);
        let m = (u.left + d.x) / f.x,
          v = (u.top + d.y) / f.y,
          p = u.width / f.x,
          g = u.height / f.y;
        if (s) {
          const e = (0, i.zk)(s),
            t = o && (0, i.vq)(o) ? (0, i.zk)(o) : o;
          let n = e.frameElement;
          for (; n && o && t !== e; ) {
            const e = l(n),
              t = n.getBoundingClientRect(),
              r = (0, i.L9)(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              u = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            (m *= e.x),
              (v *= e.y),
              (p *= e.x),
              (g *= e.y),
              (m += o),
              (v += u),
              (n = (0, i.zk)(n).frameElement);
          }
        }
        return (0, r.B1)({ width: p, height: g, x: m, y: v });
      }
      function d(e) {
        return f((0, i.ep)(e)).left + (0, i.CP)(e).scrollLeft;
      }
      function m(e, t, n) {
        let o;
        if ("viewport" === t)
          o = (function (e, t) {
            const n = (0, i.zk)(e),
              r = (0, i.ep)(e),
              o = n.visualViewport;
            let u = r.clientWidth,
              c = r.clientHeight,
              l = 0,
              s = 0;
            if (o) {
              (u = o.width), (c = o.height);
              const e = (0, i.Tc)();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: u, height: c, x: l, y: s };
          })(e, n);
        else if ("document" === t)
          o = (function (e) {
            const t = (0, i.ep)(e),
              n = (0, i.CP)(e),
              o = e.ownerDocument.body,
              u = (0, r.T9)(
                t.scrollWidth,
                t.clientWidth,
                o.scrollWidth,
                o.clientWidth,
              ),
              c = (0, r.T9)(
                t.scrollHeight,
                t.clientHeight,
                o.scrollHeight,
                o.clientHeight,
              );
            let l = -n.scrollLeft + d(e);
            const s = -n.scrollTop;
            return (
              "rtl" === (0, i.L9)(o).direction &&
                (l += (0, r.T9)(t.clientWidth, o.clientWidth) - u),
              { width: u, height: c, x: l, y: s }
            );
          })((0, i.ep)(e));
        else if ((0, i.vq)(t))
          o = (function (e, t) {
            const n = f(e, !0, "fixed" === t),
              o = n.top + e.clientTop,
              u = n.left + e.clientLeft,
              c = (0, i.sb)(e) ? l(e) : (0, r.Jx)(1);
            return {
              width: e.clientWidth * c.x,
              height: e.clientHeight * c.y,
              x: u * c.x,
              y: o * c.y,
            };
          })(t, n);
        else {
          const n = a(e);
          o = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return (0, r.B1)(o);
      }
      function v(e, t) {
        const n = (0, i.$4)(e);
        return (
          !(n === t || !(0, i.vq)(n) || (0, i.eu)(n)) &&
          ("fixed" === (0, i.L9)(n).position || v(n, t))
        );
      }
      function p(e, t, n) {
        const o = (0, i.sb)(t),
          u = (0, i.ep)(t),
          c = "fixed" === n,
          l = f(e, !0, c, t);
        let s = { scrollLeft: 0, scrollTop: 0 };
        const a = (0, r.Jx)(0);
        if (o || (!o && !c))
          if (
            (("body" !== (0, i.mq)(t) || (0, i.ZU)(u)) && (s = (0, i.CP)(t)), o)
          ) {
            const e = f(t, !0, c, t);
            (a.x = e.x + t.clientLeft), (a.y = e.y + t.clientTop);
          } else u && (a.x = d(u));
        return {
          x: l.left + s.scrollLeft - a.x,
          y: l.top + s.scrollTop - a.y,
          width: l.width,
          height: l.height,
        };
      }
      function g(e, t) {
        return (0, i.sb)(e) && "fixed" !== (0, i.L9)(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function h(e, t) {
        const n = (0, i.zk)(e);
        if (!(0, i.sb)(e)) return n;
        let r = g(e, t);
        for (; r && (0, i.Lv)(r) && "static" === (0, i.L9)(r).position; )
          r = g(r, t);
        return r &&
          ("html" === (0, i.mq)(r) ||
            ("body" === (0, i.mq)(r) &&
              "static" === (0, i.L9)(r).position &&
              !(0, i.sQ)(r)))
          ? n
          : r || (0, i.gJ)(e) || n;
      }
      const y = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { rect: t, offsetParent: n, strategy: o } = e;
          const u = (0, i.sb)(n),
            c = (0, i.ep)(n);
          if (n === c) return t;
          let s = { scrollLeft: 0, scrollTop: 0 },
            a = (0, r.Jx)(1);
          const d = (0, r.Jx)(0);
          if (
            (u || (!u && "fixed" !== o)) &&
            (("body" !== (0, i.mq)(n) || (0, i.ZU)(c)) && (s = (0, i.CP)(n)),
            (0, i.sb)(n))
          ) {
            const e = f(n);
            (a = l(n)), (d.x = e.x + n.clientLeft), (d.y = e.y + n.clientTop);
          }
          return {
            width: t.width * a.x,
            height: t.height * a.y,
            x: t.x * a.x - s.scrollLeft * a.x + d.x,
            y: t.y * a.y - s.scrollTop * a.y + d.y,
          };
        },
        getDocumentElement: i.ep,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: o, strategy: u } = e;
          const c = [
              ...("clippingAncestors" === n
                ? (function (e, t) {
                    const n = t.get(e);
                    if (n) return n;
                    let r = (0, i.v9)(e, [], !1).filter(
                        (e) => (0, i.vq)(e) && "body" !== (0, i.mq)(e),
                      ),
                      o = null;
                    const u = "fixed" === (0, i.L9)(e).position;
                    let c = u ? (0, i.$4)(e) : e;
                    for (; (0, i.vq)(c) && !(0, i.eu)(c); ) {
                      const t = (0, i.L9)(c),
                        n = (0, i.sQ)(c);
                      n || "fixed" !== t.position || (o = null),
                        (
                          u
                            ? !n && !o
                            : (!n &&
                                "static" === t.position &&
                                o &&
                                ["absolute", "fixed"].includes(o.position)) ||
                              ((0, i.ZU)(c) && !n && v(e, c))
                        )
                          ? (r = r.filter((e) => e !== c))
                          : (o = t),
                        (c = (0, i.$4)(c));
                    }
                    return t.set(e, r), r;
                  })(t, this._c)
                : [].concat(n)),
              o,
            ],
            l = c[0],
            s = c.reduce(
              (e, n) => {
                const o = m(t, n, u);
                return (
                  (e.top = (0, r.T9)(o.top, e.top)),
                  (e.right = (0, r.jk)(o.right, e.right)),
                  (e.bottom = (0, r.jk)(o.bottom, e.bottom)),
                  (e.left = (0, r.T9)(o.left, e.left)),
                  e
                );
              },
              m(t, l, u),
            );
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top,
          };
        },
        getOffsetParent: h,
        getElementRects: async function (e) {
          let { reference: t, floating: n, strategy: r } = e;
          const o = this.getOffsetParent || h,
            i = this.getDimensions;
          return {
            reference: p(t, await o(n), r),
            floating: { x: 0, y: 0, ...(await i(n)) },
          };
        },
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          const { width: t, height: n } = u(e);
          return { width: t, height: n };
        },
        getScale: l,
        isElement: i.vq,
        isRTL: function (e) {
          return "rtl" === (0, i.L9)(e).direction;
        },
      };
      function b(e, t, n, o) {
        void 0 === o && (o = {});
        const {
            ancestorScroll: u = !0,
            ancestorResize: l = !0,
            elementResize: s = "function" == typeof ResizeObserver,
            layoutShift: a = "function" == typeof IntersectionObserver,
            animationFrame: d = !1,
          } = o,
          m = c(e),
          v = u || l ? [...(m ? (0, i.v9)(m) : []), ...(0, i.v9)(t)] : [];
        v.forEach((e) => {
          u && e.addEventListener("scroll", n, { passive: !0 }),
            l && e.addEventListener("resize", n);
        });
        const p =
          m && a
            ? (function (e, t) {
                let n,
                  o = null;
                const u = (0, i.ep)(e);
                function c() {
                  clearTimeout(n), o && o.disconnect(), (o = null);
                }
                return (
                  (function i(l, s) {
                    void 0 === l && (l = !1), void 0 === s && (s = 1), c();
                    const {
                      left: a,
                      top: f,
                      width: d,
                      height: m,
                    } = e.getBoundingClientRect();
                    if ((l || t(), !d || !m)) return;
                    const v = {
                      rootMargin:
                        -(0, r.RI)(f) +
                        "px " +
                        -(0, r.RI)(u.clientWidth - (a + d)) +
                        "px " +
                        -(0, r.RI)(u.clientHeight - (f + m)) +
                        "px " +
                        -(0, r.RI)(a) +
                        "px",
                      threshold: (0, r.T9)(0, (0, r.jk)(1, s)) || 1,
                    };
                    let p = !0;
                    function g(e) {
                      const t = e[0].intersectionRatio;
                      if (t !== s) {
                        if (!p) return i();
                        t
                          ? i(!1, t)
                          : (n = setTimeout(() => {
                              i(!1, 1e-7);
                            }, 100));
                      }
                      p = !1;
                    }
                    try {
                      o = new IntersectionObserver(g, {
                        ...v,
                        root: u.ownerDocument,
                      });
                    } catch (e) {
                      o = new IntersectionObserver(g, v);
                    }
                    o.observe(e);
                  })(!0),
                  c
                );
              })(m, n)
            : null;
        let g,
          h = -1,
          y = null;
        s &&
          ((y = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === m &&
              y &&
              (y.unobserve(t),
              cancelAnimationFrame(h),
              (h = requestAnimationFrame(() => {
                y && y.observe(t);
              }))),
              n();
          })),
          m && !d && y.observe(m),
          y.observe(t));
        let b = d ? f(e) : null;
        return (
          d &&
            (function t() {
              const r = f(e);
              !b ||
                (r.x === b.x &&
                  r.y === b.y &&
                  r.width === b.width &&
                  r.height === b.height) ||
                n();
              (b = r), (g = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            v.forEach((e) => {
              u && e.removeEventListener("scroll", n),
                l && e.removeEventListener("resize", n);
            }),
              p && p(),
              y && y.disconnect(),
              (y = null),
              d && cancelAnimationFrame(g);
          }
        );
      }
      const w = o.BN,
        x = o.UU,
        E = o.Ej,
        R = (e, t, n) => {
          const r = new Map(),
            i = { platform: y, ...n },
            u = { ...i.platform, _c: r };
          return (0, o.rD)(e, t, { ...i, platform: u });
        };
    },
    94621: (e, t, n) => {
      n.d(t, {
        BN: () => v,
        Ej: () => g,
        UU: () => p,
        cY: () => m,
        we: () => d,
      });
      var r = n(28505),
        o = n(33559),
        i = n(90626),
        u = n(72739),
        c = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function l(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 !== r--; ) if (!l(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 !== r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--; ) {
            const n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !l(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function s(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function a(e, t) {
        const n = s(e);
        return Math.round(t * n) / n;
      }
      function f(e) {
        const t = i.useRef(e);
        return (
          c(() => {
            t.current = e;
          }),
          t
        );
      }
      function d(e) {
        void 0 === e && (e = {});
        const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: o = [],
            platform: d,
            elements: { reference: m, floating: v } = {},
            transform: p = !0,
            whileElementsMounted: g,
            open: h,
          } = e,
          [y, b] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [w, x] = i.useState(o);
        l(w, o) || x(o);
        const [E, R] = i.useState(null),
          [k, I] = i.useState(null),
          C = i.useCallback((e) => {
            e !== M.current && ((M.current = e), R(e));
          }, []),
          L = i.useCallback((e) => {
            e !== A.current && ((A.current = e), I(e));
          }, []),
          T = m || E,
          S = v || k,
          M = i.useRef(null),
          A = i.useRef(null),
          O = i.useRef(y),
          P = null != g,
          D = f(g),
          N = f(d),
          q = f(h),
          F = i.useCallback(() => {
            if (!M.current || !A.current) return;
            const e = { placement: t, strategy: n, middleware: w };
            N.current && (e.platform = N.current),
              (0, r.rD)(M.current, A.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== q.current };
                B.current &&
                  !l(O.current, t) &&
                  ((O.current = t),
                  u.flushSync(() => {
                    b(t);
                  }));
              });
          }, [w, t, n, N, q]);
        c(() => {
          !1 === h &&
            O.current.isPositioned &&
            ((O.current.isPositioned = !1),
            b((e) => ({ ...e, isPositioned: !1 })));
        }, [h]);
        const B = i.useRef(!1);
        c(
          () => (
            (B.current = !0),
            () => {
              B.current = !1;
            }
          ),
          [],
        ),
          c(() => {
            if ((T && (M.current = T), S && (A.current = S), T && S)) {
              if (D.current) return D.current(T, S, F);
              F();
            }
          }, [T, S, F, D, P]);
        const j = i.useMemo(
            () => ({
              reference: M,
              floating: A,
              setReference: C,
              setFloating: L,
            }),
            [C, L],
          ),
          _ = i.useMemo(() => ({ reference: T, floating: S }), [T, S]),
          U = i.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!_.floating) return e;
            const t = a(_.floating, y.x),
              r = a(_.floating, y.y);
            return p
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(s(_.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, p, _.floating, y.x, y.y]);
        return i.useMemo(
          () => ({ ...y, update: F, refs: j, elements: _, floatingStyles: U }),
          [y, F, j, _, U],
        );
      }
      const m = (e, t) => ({ ...(0, o.cY)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        g = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      n.d(t, {
        s3: () => ft,
        ph: () => ve,
        XF: () => nt,
        iB: () => qt,
        kp: () => vt,
        s9: () => yt,
        we: () => bt,
        iQ: () => wt,
        Mk: () => Oe,
        bv: () => kt,
        rm: () => pe,
        C1: () => At,
        SV: () => Y,
        It: () => Pt,
        lY: () => Dt,
      });
      var r = n(90626),
        o = n.t(r, 2),
        i = n(977);
      function u(e) {
        let t = e.activeElement;
        for (
          ;
          null !=
          (null == (n = t) || null == (n = n.shadowRoot)
            ? void 0
            : n.activeElement);
        ) {
          var n;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function c(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, i.Ng)(n)) {
          let n = t;
          for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
          }
        }
        return !1;
      }
      function l() {
        const e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform;
      }
      function s() {
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map((e) => {
                let { brand: t, version: n } = e;
                return t + "/" + n;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function a(e) {
        return (
          !(0 !== e.mozInputSource || !e.isTrusted) ||
          (m() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function f(e) {
        return (
          !s().includes("jsdom/") &&
          ((!m() && 0 === e.width && 0 === e.height) ||
            (m() &&
              1 === e.width &&
              1 === e.height &&
              0 === e.pressure &&
              0 === e.detail &&
              "mouse" === e.pointerType) ||
            (e.width < 1 &&
              e.height < 1 &&
              0 === e.pressure &&
              0 === e.detail &&
              "touch" === e.pointerType))
        );
      }
      function d() {
        return /apple/i.test(navigator.vendor);
      }
      function m() {
        const e = /android/i;
        return e.test(l()) || e.test(s());
      }
      function v(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e);
      }
      function p(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function g(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target);
      }
      function h(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const y =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function b(e) {
        return (0, i.sb)(e) && e.matches(y);
      }
      function w(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function x(e) {
        return !!e && "combobox" === e.getAttribute("role") && b(e);
      }
      var E = n(58015),
        R = n(7850),
        k = [
          "input:not([inert])",
          "select:not([inert])",
          "textarea:not([inert])",
          "a[href]:not([inert])",
          "button:not([inert])",
          "[tabindex]:not(slot):not([inert])",
          "audio[controls]:not([inert])",
          "video[controls]:not([inert])",
          '[contenteditable]:not([contenteditable="false"]):not([inert])',
          "details>summary:first-of-type:not([inert])",
          "details:not([inert])",
        ],
        I = k.join(","),
        C = "undefined" == typeof Element,
        L = C
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        T =
          !C && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        S = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        M = function (e, t, n) {
          if (S(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(I));
          return t && L.call(e, I) && r.unshift(e), (r = r.filter(n));
        },
        A = function e(t, n, r) {
          for (var o = [], i = Array.from(t); i.length; ) {
            var u = i.shift();
            if (!S(u, !1))
              if ("SLOT" === u.tagName) {
                var c = u.assignedElements(),
                  l = e(c.length ? c : u.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: u, candidates: l });
              } else {
                L.call(u, I) &&
                  r.filter(u) &&
                  (n || !t.includes(u)) &&
                  o.push(u);
                var s =
                    u.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(u)),
                  a =
                    !S(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(u));
                if (s && a) {
                  var f = e(!0 === s ? u.children : s.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, f)
                    : o.push({ scopeParent: u, candidates: f });
                } else i.unshift.apply(i, u.children);
              }
          }
          return o;
        },
        O = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        P = function (e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
              (function (e) {
                var t,
                  n =
                    null == e || null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              })(e)) &&
            !O(e)
            ? 0
            : e.tabIndex;
        },
        D = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        N = function (e) {
          return "INPUT" === e.tagName;
        },
        q = function (e) {
          return (
            (function (e) {
              return N(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || T(e),
                r = function (e) {
                  return n.querySelectorAll(
                    'input[type="radio"][name="' + e + '"]',
                  );
                };
              if (
                "undefined" != typeof window &&
                void 0 !== window.CSS &&
                "function" == typeof window.CSS.escape
              )
                t = r(window.CSS.escape(e.name));
              else
                try {
                  t = r(e.name);
                } catch (e) {
                  return (
                    console.error(
                      "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                      e.message,
                    ),
                    !1
                  );
                }
              var o = (function (e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n];
              })(t, e.form);
              return !o || o === e;
            })(e)
          );
        },
        F = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
          return 0 === n && 0 === r;
        },
        B = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = L.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (L.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return F(e);
          } else {
            if ("function" == typeof r) {
              for (var i = e; e; ) {
                var u = e.parentElement,
                  c = T(e);
                if (u && !u.shadowRoot && !0 === r(u)) return F(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : u || c === e.ownerDocument
                    ? u
                    : c.host;
              }
              e = i;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = e && T(e),
                  u = null === (t = i) || void 0 === t ? void 0 : t.host,
                  c = !1;
                if (i && i !== e)
                  for (
                    c = !!(
                      (null !== (n = u) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(u)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !c && u;
                  ) {
                    var l, s, a;
                    c = !(
                      null ===
                        (s = u =
                          null === (l = i = T(u)) || void 0 === l
                            ? void 0
                            : l.host) ||
                      void 0 === s ||
                      null === (a = s.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(u)
                    );
                  }
                return c;
              })(e)
            )
              return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
          }
          return !1;
        },
        j = function (e, t) {
          return !(
            t.disabled ||
            S(t) ||
            (function (e) {
              return N(e) && "hidden" === e.type;
            })(t) ||
            B(t, e) ||
            (function (e) {
              return (
                "DETAILS" === e.tagName &&
                Array.prototype.slice.apply(e.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })
              );
            })(t) ||
            (function (e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                for (var t = e.parentElement; t; ) {
                  if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                      var r = t.children.item(n);
                      if ("LEGEND" === r.tagName)
                        return (
                          !!L.call(t, "fieldset[disabled] *") || !r.contains(e)
                        );
                    }
                    return !0;
                  }
                  t = t.parentElement;
                }
              return !1;
            })(t)
          );
        },
        _ = function (e, t) {
          return !(q(t) || P(t) < 0 || !j(e, t));
        },
        U = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        W = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var i = !!t.scopeParent,
                u = i ? t.scopeParent : t,
                c = (function (e, t) {
                  var n = P(e);
                  return n < 0 && t && !O(e) ? 0 : n;
                })(u, i),
                l = i ? e(t.candidates) : u;
              0 === c
                ? i
                  ? n.push.apply(n, l)
                  : n.push(u)
                : r.push({
                    documentOrder: o,
                    tabIndex: c,
                    item: t,
                    isScope: i,
                    content: l,
                  });
            }),
            r
              .sort(D)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        z = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? A([e], t.includeContainer, {
                  filter: _.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: U,
                })
              : M(e, t.includeContainer, _.bind(null, t))),
            W(n)
          );
        },
        K = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== L.call(e, I) && _(t, e);
        },
        V = n(72739),
        H = n(94621);
      function Y(e) {
        const t = r.useRef(void 0),
          n = r.useCallback((t) => {
            const n = e.map((e) => {
              if (null != e) {
                if ("function" == typeof e) {
                  const n = e,
                    r = n(t);
                  return "function" == typeof r
                    ? r
                    : () => {
                        n(null);
                      };
                }
                return (
                  (e.current = t),
                  () => {
                    e.current = null;
                  }
                );
              }
            });
            return () => {
              n.forEach((e) => (null == e ? void 0 : e()));
            };
          }, e);
        return r.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (e) => {
                  t.current && (t.current(), (t.current = void 0)),
                    null != e && (t.current = n(e));
                },
          e,
        );
      }
      const J = { ...o },
        X = J.useInsertionEffect || ((e) => e());
      function $(e) {
        const t = r.useRef(() => {
          0;
        });
        return (
          X(() => {
            t.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      const G = "ArrowUp",
        Q = "ArrowDown",
        Z = "ArrowLeft",
        ee = "ArrowRight";
      function te(e, t, n) {
        return Math.floor(e / t) !== n;
      }
      function ne(e, t) {
        return t < 0 || t >= e.current.length;
      }
      function re(e, t) {
        return ie(e, { disabledIndices: t });
      }
      function oe(e, t) {
        return ie(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: t,
        });
      }
      function ie(e, t) {
        let {
          startingIndex: n = -1,
          decrement: r = !1,
          disabledIndices: o,
          amount: i = 1,
        } = void 0 === t ? {} : t;
        const u = e.current;
        let c = n;
        do {
          c += r ? -i : i;
        } while (c >= 0 && c <= u.length - 1 && ae(u, c, o));
        return c;
      }
      function ue(e, t) {
        let {
            event: n,
            orientation: r,
            loop: o,
            rtl: i,
            cols: u,
            disabledIndices: c,
            minIndex: l,
            maxIndex: s,
            prevIndex: a,
            stopEvent: f = !1,
          } = t,
          d = a;
        if (n.key === G) {
          if ((f && w(n), -1 === a)) d = s;
          else if (
            ((d = ie(e, {
              startingIndex: d,
              amount: u,
              decrement: !0,
              disabledIndices: c,
            })),
            o && (a - u < l || d < 0))
          ) {
            const e = a % u,
              t = s % u,
              n = s - (t - e);
            d = t === e ? s : t > e ? n : n - u;
          }
          ne(e, d) && (d = a);
        }
        if (
          (n.key === Q &&
            (f && w(n),
            -1 === a
              ? (d = l)
              : ((d = ie(e, {
                  startingIndex: a,
                  amount: u,
                  disabledIndices: c,
                })),
                o &&
                  a + u > s &&
                  (d = ie(e, {
                    startingIndex: (a % u) - u,
                    amount: u,
                    disabledIndices: c,
                  }))),
            ne(e, d) && (d = a)),
          "both" === r)
        ) {
          const t = (0, E.RI)(a / u);
          n.key === (i ? Z : ee) &&
            (f && w(n),
            a % u !== u - 1
              ? ((d = ie(e, { startingIndex: a, disabledIndices: c })),
                o &&
                  te(d, u, t) &&
                  (d = ie(e, {
                    startingIndex: a - (a % u) - 1,
                    disabledIndices: c,
                  })))
              : o &&
                (d = ie(e, {
                  startingIndex: a - (a % u) - 1,
                  disabledIndices: c,
                })),
            te(d, u, t) && (d = a)),
            n.key === (i ? ee : Z) &&
              (f && w(n),
              a % u !== 0
                ? ((d = ie(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: c,
                  })),
                  o &&
                    te(d, u, t) &&
                    (d = ie(e, {
                      startingIndex: a + (u - (a % u)),
                      decrement: !0,
                      disabledIndices: c,
                    })))
                : o &&
                  (d = ie(e, {
                    startingIndex: a + (u - (a % u)),
                    decrement: !0,
                    disabledIndices: c,
                  })),
              te(d, u, t) && (d = a));
          const r = (0, E.RI)(s / u) === t;
          ne(e, d) &&
            (d =
              o && r
                ? n.key === (i ? ee : Z)
                  ? s
                  : ie(e, {
                      startingIndex: a - (a % u) - 1,
                      disabledIndices: c,
                    })
                : a);
        }
        return d;
      }
      function ce(e, t, n) {
        const r = [];
        let o = 0;
        return (
          e.forEach((e, i) => {
            let { width: u, height: c } = e,
              l = !1;
            for (n && (o = 0); !l; ) {
              const e = [];
              for (let n = 0; n < u; n++)
                for (let r = 0; r < c; r++) e.push(o + n + r * t);
              (o % t) + u <= t && e.every((e) => null == r[e])
                ? (e.forEach((e) => {
                    r[e] = i;
                  }),
                  (l = !0))
                : o++;
            }
          }),
          [...r]
        );
      }
      function le(e, t, n, r, o) {
        if (-1 === e) return -1;
        const i = n.indexOf(e),
          u = t[e];
        switch (o) {
          case "tl":
            return i;
          case "tr":
            return u ? i + u.width - 1 : i;
          case "bl":
            return u ? i + (u.height - 1) * r : i;
          case "br":
            return n.lastIndexOf(e);
        }
      }
      function se(e, t) {
        return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
      }
      function ae(e, t, n) {
        if (n) return n.includes(t);
        const r = e[t];
        return (
          null == r ||
          r.hasAttribute("disabled") ||
          "true" === r.getAttribute("aria-disabled")
        );
      }
      var fe = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function de(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING ||
          n & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : n & Node.DOCUMENT_POSITION_PRECEDING ||
              n & Node.DOCUMENT_POSITION_CONTAINS
            ? 1
            : 0;
      }
      const me = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function ve(e) {
        const { children: t, elementsRef: n, labelsRef: o } = e,
          [i, u] = r.useState(() => new Set()),
          c = r.useCallback((e) => {
            u((t) => new Set(t).add(e));
          }, []),
          l = r.useCallback((e) => {
            u((t) => {
              const n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          s = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(i.keys())
                .sort(de)
                .forEach((t, n) => {
                  e.set(t, n);
                }),
              e
            );
          }, [i]);
        return (0, R.jsx)(me.Provider, {
          value: r.useMemo(
            () => ({
              register: c,
              unregister: l,
              map: s,
              elementsRef: n,
              labelsRef: o,
            }),
            [c, l, s, n, o],
          ),
          children: t,
        });
      }
      function pe(e) {
        void 0 === e && (e = {});
        const { label: t } = e,
          {
            register: n,
            unregister: o,
            map: i,
            elementsRef: u,
            labelsRef: c,
          } = r.useContext(me),
          [l, s] = r.useState(null),
          a = r.useRef(null),
          f = r.useCallback(
            (e) => {
              if (((a.current = e), null !== l && ((u.current[l] = e), c))) {
                var n;
                const r = void 0 !== t;
                c.current[l] = r
                  ? t
                  : null != (n = null == e ? void 0 : e.textContent)
                    ? n
                    : null;
              }
            },
            [l, u, c, t],
          );
        return (
          fe(() => {
            const e = a.current;
            if (e)
              return (
                n(e),
                () => {
                  o(e);
                }
              );
          }, [n, o]),
          fe(() => {
            const e = a.current ? i.get(a.current) : null;
            null != e && s(e);
          }, [i]),
          r.useMemo(() => ({ ref: f, index: null == l ? -1 : l }), [l, f])
        );
      }
      const ge = [Z, ee],
        he = [G, Q];
      let ye = !1,
        be = 0;
      const we = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + be++;
      const xe =
        J.useId ||
        function () {
          const [e, t] = r.useState(() => (ye ? we() : void 0));
          return (
            fe(() => {
              null == e && t(we());
            }, []),
            r.useEffect(() => {
              ye = !0;
            }, []),
            e
          );
        };
      function Ee() {
        const e = new Map();
        return {
          emit(t, n) {
            var r;
            null == (r = e.get(t)) || r.forEach((e) => e(n));
          },
          on(t, n) {
            e.set(t, [...(e.get(t) || []), n]);
          },
          off(t, n) {
            var r;
            e.set(
              t,
              (null == (r = e.get(t)) ? void 0 : r.filter((e) => e !== n)) ||
                [],
            );
          },
        };
      }
      const Re = r.createContext(null),
        ke = r.createContext(null),
        Ie = () => {
          var e;
          return (null == (e = r.useContext(Re)) ? void 0 : e.id) || null;
        },
        Ce = () => r.useContext(ke);
      function Le(e) {
        return "data-floating-ui-" + e;
      }
      function Te(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Se(e) {
        const t = (0, r.useRef)(e);
        return (
          fe(() => {
            t.current = e;
          }),
          t
        );
      }
      const Me = Le("safe-polygon");
      function Ae(e, t, n) {
        return n && !v(n)
          ? 0
          : "number" == typeof e
            ? e
            : null == e
              ? void 0
              : e[t];
      }
      function Oe(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: u,
            events: l,
            elements: s,
          } = e,
          {
            enabled: a = !0,
            delay: f = 0,
            handleClose: d = null,
            mouseOnly: m = !1,
            restMs: g = 0,
            move: h = !0,
          } = t,
          y = Ce(),
          b = Ie(),
          w = Se(d),
          x = Se(f),
          E = Se(n),
          R = r.useRef(),
          k = r.useRef(-1),
          I = r.useRef(),
          C = r.useRef(-1),
          L = r.useRef(!0),
          T = r.useRef(!1),
          S = r.useRef(() => {}),
          M = r.useRef(!1),
          A = r.useCallback(() => {
            var e;
            const t = null == (e = u.current.openEvent) ? void 0 : e.type;
            return (
              (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
            );
          }, [u]);
        r.useEffect(() => {
          if (a)
            return (
              l.on("openchange", e),
              () => {
                l.off("openchange", e);
              }
            );
          function e(e) {
            let { open: t } = e;
            t || (Te(k), Te(C), (L.current = !0), (M.current = !1));
          }
        }, [a, l]),
          r.useEffect(() => {
            if (!a) return;
            if (!w.current) return;
            if (!n) return;
            function e(e) {
              A() && o(!1, e, "hover");
            }
            const t = p(s.floating).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [s.floating, n, o, a, w, A]);
        const O = r.useCallback(
            function (e, t, n) {
              void 0 === t && (t = !0), void 0 === n && (n = "hover");
              const r = Ae(x.current, "close", R.current);
              r && !I.current
                ? (Te(k), (k.current = window.setTimeout(() => o(!1, e, n), r)))
                : t && (Te(k), o(!1, e, n));
            },
            [x, o],
          ),
          P = $(() => {
            S.current(), (I.current = void 0);
          }),
          D = $(() => {
            if (T.current) {
              const e = p(s.floating).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(Me),
                (T.current = !1);
            }
          }),
          N = $(
            () =>
              !!u.current.openEvent &&
              ["click", "mousedown"].includes(u.current.openEvent.type),
          );
        r.useEffect(() => {
          if (a && (0, i.vq)(s.domReference)) {
            var e;
            const o = s.domReference;
            return (
              n && o.addEventListener("mouseleave", l),
              null == (e = s.floating) || e.addEventListener("mouseleave", l),
              h && o.addEventListener("mousemove", t, { once: !0 }),
              o.addEventListener("mouseenter", t),
              o.addEventListener("mouseleave", r),
              () => {
                var e;
                n && o.removeEventListener("mouseleave", l),
                  null == (e = s.floating) ||
                    e.removeEventListener("mouseleave", l),
                  h && o.removeEventListener("mousemove", t),
                  o.removeEventListener("mouseenter", t),
                  o.removeEventListener("mouseleave", r);
              }
            );
          }
          function t(e) {
            if (
              (Te(k),
              (L.current = !1),
              (m && !v(R.current)) || (g > 0 && !Ae(x.current, "open")))
            )
              return;
            const t = Ae(x.current, "open", R.current);
            t
              ? (k.current = window.setTimeout(() => {
                  E.current || o(!0, e, "hover");
                }, t))
              : n || o(!0, e, "hover");
          }
          function r(e) {
            if (N()) return;
            S.current();
            const t = p(s.floating);
            if (
              (Te(C), (M.current = !1), w.current && u.current.floatingContext)
            ) {
              n || Te(k),
                (I.current = w.current({
                  ...u.current.floatingContext,
                  tree: y,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    D(), P(), N() || O(e, !0, "safe-polygon");
                  },
                }));
              const r = I.current;
              return (
                t.addEventListener("mousemove", r),
                void (S.current = () => {
                  t.removeEventListener("mousemove", r);
                })
              );
            }
            ("touch" !== R.current || !c(s.floating, e.relatedTarget)) && O(e);
          }
          function l(e) {
            N() ||
              (u.current.floatingContext &&
                (null == w.current ||
                  w.current({
                    ...u.current.floatingContext,
                    tree: y,
                    x: e.clientX,
                    y: e.clientY,
                    onClose() {
                      D(), P(), N() || O(e);
                    },
                  })(e)));
          }
        }, [s, a, e, m, g, h, O, P, D, o, n, E, y, x, w, u, N]),
          fe(() => {
            var e;
            if (
              a &&
              n &&
              null != (e = w.current) &&
              e.__options.blockPointerEvents &&
              A()
            ) {
              T.current = !0;
              const e = s.floating;
              if ((0, i.vq)(s.domReference) && e) {
                var t;
                const n = p(s.floating).body;
                n.setAttribute(Me, "");
                const r = s.domReference,
                  o =
                    null == y ||
                    null == (t = y.nodesRef.current.find((e) => e.id === b)) ||
                    null == (t = t.context)
                      ? void 0
                      : t.elements.floating;
                return (
                  o && (o.style.pointerEvents = ""),
                  (n.style.pointerEvents = "none"),
                  (r.style.pointerEvents = "auto"),
                  (e.style.pointerEvents = "auto"),
                  () => {
                    (n.style.pointerEvents = ""),
                      (r.style.pointerEvents = ""),
                      (e.style.pointerEvents = "");
                  }
                );
              }
            }
          }, [a, n, b, s, y, w, A]),
          fe(() => {
            n || ((R.current = void 0), (M.current = !1), P(), D());
          }, [n, P, D]),
          r.useEffect(
            () => () => {
              P(), Te(k), Te(C), D();
            },
            [a, s.domReference, P, D],
          );
        const q = r.useMemo(() => {
            function e(e) {
              R.current = e.pointerType;
            }
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                const { nativeEvent: t } = e;
                function r() {
                  L.current || E.current || o(!0, t, "hover");
                }
                (m && !v(R.current)) ||
                  n ||
                  0 === g ||
                  (M.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                  (Te(C),
                  "touch" === R.current
                    ? r()
                    : ((M.current = !0),
                      (C.current = window.setTimeout(r, g))));
              },
            };
          }, [m, o, n, E, g]),
          F = r.useMemo(
            () => ({
              onMouseEnter() {
                Te(k);
              },
              onMouseLeave(e) {
                N() || O(e.nativeEvent, !1);
              },
            }),
            [O, N],
          );
        return r.useMemo(
          () => (a ? { reference: q, floating: F } : {}),
          [a, q, F],
        );
      }
      let Pe = 0;
      function De(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = t;
        r && cancelAnimationFrame(Pe);
        const i = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? i() : (Pe = requestAnimationFrame(i));
      }
      function Ne(e, t) {
        var n;
        let r = [],
          o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
        for (; o; ) {
          const t = e.find((e) => e.id === o);
          (o = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
        }
        return r;
      }
      function qe(e, t) {
        let n = e.filter((e) => {
            var n;
            return (
              e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
            );
          }),
          r = n;
        for (; r.length; )
          (r = e.filter((e) => {
            var t;
            return null == (t = r)
              ? void 0
              : t.some((t) => {
                  var n;
                  return (
                    e.parentId === t.id &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                });
          })),
            (n = n.concat(r));
        return n;
      }
      let Fe = new WeakMap(),
        Be = new WeakSet(),
        je = {},
        _e = 0;
      const Ue = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        We = (e) => e && (e.host || We(e.parentNode)),
        ze = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = We(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function Ke(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = p(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            u = r ? "inert" : n ? "aria-hidden" : null,
            c = ze(t, e),
            l = new Set(),
            s = new Set(c),
            a = [];
          je[o] || (je[o] = new WeakMap());
          const f = je[o];
          return (
            c.forEach(function e(t) {
              t && !l.has(t) && (l.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !s.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, i.mq)(t))
                    if (l.has(t)) e(t);
                    else {
                      const e = u ? t.getAttribute(u) : null,
                        n = null !== e && "false" !== e,
                        r = Fe.get(t) || 0,
                        i = u ? r + 1 : r,
                        c = (f.get(t) || 0) + 1;
                      Fe.set(t, i),
                        f.set(t, c),
                        a.push(t),
                        1 === i && n && Be.add(t),
                        1 === c && t.setAttribute(o, ""),
                        !n && u && t.setAttribute(u, "true");
                    }
                });
            })(t),
            l.clear(),
            _e++,
            () => {
              a.forEach((e) => {
                const t = Fe.get(e) || 0,
                  n = u ? t - 1 : t,
                  r = (f.get(e) || 0) - 1;
                Fe.set(e, n),
                  f.set(e, r),
                  n || (!Be.has(e) && u && e.removeAttribute(u), Be.delete(e)),
                  r || e.removeAttribute(o);
              }),
                _e--,
                _e ||
                  ((Fe = new WeakMap()),
                  (Fe = new WeakMap()),
                  (Be = new WeakSet()),
                  (je = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const Ve = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function He(e, t) {
        const n = z(e, Ve());
        "prev" === t && n.reverse();
        const r = n.indexOf(u(p(e)));
        return n.slice(r + 1)[0];
      }
      function Ye() {
        return He(document.body, "next");
      }
      function Je() {
        return He(document.body, "prev");
      }
      function Xe(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !c(n, r);
      }
      function $e(e) {
        z(e, Ve()).forEach((e) => {
          (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
            e.setAttribute("tabindex", "-1");
        });
      }
      function Ge(e) {
        e.querySelectorAll("[data-tabindex]").forEach((e) => {
          const t = e.dataset.tabindex;
          delete e.dataset.tabindex,
            t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
        });
      }
      const Qe = {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "fixed",
          whiteSpace: "nowrap",
          width: "1px",
          top: 0,
          left: 0,
        },
        Ze = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          fe(() => {
            d() && o("button");
          }, []);
          const i = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [Le("focus-guard")]: "",
            style: Qe,
          };
          return (0, R.jsx)("span", { ...e, ...i });
        }),
        et = r.createContext(null),
        tt = Le("portal");
      function nt(e) {
        const { children: t, id: n, root: o, preserveTabOrder: u = !0 } = e,
          c = (function (e) {
            void 0 === e && (e = {});
            const { id: t, root: n } = e,
              o = xe(),
              u = rt(),
              [c, l] = r.useState(null),
              s = r.useRef(null);
            return (
              fe(
                () => () => {
                  null == c || c.remove(),
                    queueMicrotask(() => {
                      s.current = null;
                    });
                },
                [c],
              ),
              fe(() => {
                if (!o) return;
                if (s.current) return;
                const e = t ? document.getElementById(t) : null;
                if (!e) return;
                const n = document.createElement("div");
                (n.id = o),
                  n.setAttribute(tt, ""),
                  e.appendChild(n),
                  (s.current = n),
                  l(n);
              }, [t, o]),
              fe(() => {
                if (null === n) return;
                if (!o) return;
                if (s.current) return;
                let e = n || (null == u ? void 0 : u.portalNode);
                e && !(0, i.vq)(e) && (e = e.current), (e = e || document.body);
                let r = null;
                t &&
                  ((r = document.createElement("div")),
                  (r.id = t),
                  e.appendChild(r));
                const c = document.createElement("div");
                (c.id = o),
                  c.setAttribute(tt, ""),
                  (e = r || e),
                  e.appendChild(c),
                  (s.current = c),
                  l(c);
              }, [t, n, o, u]),
              c
            );
          })({ id: n, root: o }),
          [l, s] = r.useState(null),
          a = r.useRef(null),
          f = r.useRef(null),
          d = r.useRef(null),
          m = r.useRef(null),
          v = null == l ? void 0 : l.modal,
          p = null == l ? void 0 : l.open,
          g = !!l && !l.modal && l.open && u && !(!o && !c);
        return (
          r.useEffect(() => {
            if (c && u && !v)
              return (
                c.addEventListener("focusin", e, !0),
                c.addEventListener("focusout", e, !0),
                () => {
                  c.removeEventListener("focusin", e, !0),
                    c.removeEventListener("focusout", e, !0);
                }
              );
            function e(e) {
              if (c && Xe(e)) {
                ("focusin" === e.type ? Ge : $e)(c);
              }
            }
          }, [c, u, v]),
          r.useEffect(() => {
            c && (p || Ge(c));
          }, [p, c]),
          (0, R.jsxs)(et.Provider, {
            value: r.useMemo(
              () => ({
                preserveTabOrder: u,
                beforeOutsideRef: a,
                afterOutsideRef: f,
                beforeInsideRef: d,
                afterInsideRef: m,
                portalNode: c,
                setFocusManagerState: s,
              }),
              [u, c],
            ),
            children: [
              g &&
                c &&
                (0, R.jsx)(Ze, {
                  "data-type": "outside",
                  ref: a,
                  onFocus: (e) => {
                    if (Xe(e, c)) {
                      var t;
                      null == (t = d.current) || t.focus();
                    } else {
                      const e = Je() || (null == l ? void 0 : l.domReference);
                      null == e || e.focus();
                    }
                  },
                }),
              g && c && (0, R.jsx)("span", { "aria-owns": c.id, style: Qe }),
              c && V.createPortal(t, c),
              g &&
                c &&
                (0, R.jsx)(Ze, {
                  "data-type": "outside",
                  ref: f,
                  onFocus: (e) => {
                    if (Xe(e, c)) {
                      var t;
                      null == (t = m.current) || t.focus();
                    } else {
                      const t = Ye() || (null == l ? void 0 : l.domReference);
                      null == t || t.focus(),
                        (null == l ? void 0 : l.closeOnFocusOut) &&
                          (null == l ||
                            l.onOpenChange(!1, e.nativeEvent, "focus-out"));
                    }
                  },
                }),
            ],
          })
        );
      }
      const rt = () => r.useContext(et),
        ot = "data-floating-ui-focusable";
      function it(e) {
        return e
          ? e.hasAttribute(ot)
            ? e
            : e.querySelector("[" + ot + "]") || e
          : null;
      }
      function ut(e) {
        return r.useMemo(
          () => (t) => {
            e.forEach((e) => {
              e && (e.current = t);
            });
          },
          e,
        );
      }
      const ct = 20;
      let lt = [];
      function st() {
        return lt
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const at = r.forwardRef(function (e, t) {
        return (0, R.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: Qe,
        });
      });
      function ft(e) {
        const {
            context: t,
            children: n,
            disabled: o = !1,
            order: l = ["content"],
            guards: s = !0,
            initialFocus: d = 0,
            returnFocus: m = !0,
            restoreFocus: v = !1,
            modal: g = !0,
            visuallyHiddenDismiss: y = !1,
            closeOnFocusOut: b = !0,
            outsideElementsInert: E = !1,
          } = e,
          {
            open: k,
            onOpenChange: I,
            events: C,
            dataRef: L,
            elements: { domReference: T, floating: S },
          } = t,
          M = $(() => {
            var e;
            return null == (e = L.current.floatingContext) ? void 0 : e.nodeId;
          }),
          A = "number" == typeof d && d < 0,
          O = x(T) && A,
          P = Ue(),
          D = !P || s,
          N = !D || (P && E),
          q = Se(l),
          F = Se(d),
          B = Se(m),
          j = Ce(),
          _ = rt(),
          U = r.useRef(null),
          W = r.useRef(null),
          V = r.useRef(!1),
          H = r.useRef(!1),
          Y = r.useRef(-1),
          J = null != _,
          X = it(S),
          G = $(function (e) {
            return void 0 === e && (e = X), e ? z(e, Ve()) : [];
          }),
          Q = $((e) => {
            const t = G(e);
            return q.current
              .map((e) =>
                T && "reference" === e ? T : X && "floating" === e ? X : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!g) return;
          function e(e) {
            if ("Tab" === e.key) {
              c(X, u(p(X))) && 0 === G().length && !O && w(e);
              const t = Q(),
                n = h(e);
              "reference" === q.current[0] &&
                n === T &&
                (w(e), e.shiftKey ? De(t[t.length - 1]) : De(t[1])),
                "floating" === q.current[1] &&
                  n === X &&
                  e.shiftKey &&
                  (w(e), De(t[0]));
            }
          }
          const t = p(X);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, T, X, g, q, O, G, Q]),
          r.useEffect(() => {
            if (!o && S)
              return (
                S.addEventListener("focusin", e),
                () => {
                  S.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = h(e),
                n = G().indexOf(t);
              -1 !== n && (Y.current = n);
            }
          }, [o, S, G]),
          r.useEffect(() => {
            if (!o && b)
              return S && (0, i.sb)(T)
                ? (T.addEventListener("focusout", t),
                  T.addEventListener("pointerdown", e),
                  S.addEventListener("focusout", t),
                  () => {
                    T.removeEventListener("focusout", t),
                      T.removeEventListener("pointerdown", e),
                      S.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (H.current = !0),
                setTimeout(() => {
                  H.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = M(),
                  r = !(
                    c(T, t) ||
                    c(S, t) ||
                    c(t, S) ||
                    c(null == _ ? void 0 : _.portalNode, t) ||
                    (null != t && t.hasAttribute(Le("focus-guard"))) ||
                    (j &&
                      (qe(j.nodesRef.current, n).find((e) => {
                        var n, r;
                        return (
                          c(
                            null == (n = e.context)
                              ? void 0
                              : n.elements.floating,
                            t,
                          ) ||
                          c(
                            null == (r = e.context)
                              ? void 0
                              : r.elements.domReference,
                            t,
                          )
                        );
                      }) ||
                        Ne(j.nodesRef.current, n).find((e) => {
                          var n, r, o;
                          return (
                            [
                              null == (n = e.context)
                                ? void 0
                                : n.elements.floating,
                              it(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.floating,
                              ),
                            ].includes(t) ||
                            (null == (o = e.context)
                              ? void 0
                              : o.elements.domReference) === t
                          );
                        })))
                  );
                if (v && r && u(p(X)) === p(X).body) {
                  (0, i.sb)(X) && X.focus();
                  const e = Y.current,
                    t = G(),
                    n = t[e] || t[t.length - 1] || X;
                  (0, i.sb)(n) && n.focus();
                }
                (!O && g) ||
                  !t ||
                  !r ||
                  H.current ||
                  t === st() ||
                  ((V.current = !0), I(!1, e, "focus-out"));
              });
            }
          }, [o, T, S, X, g, j, _, I, b, v, G, O, M]);
        const Z = r.useRef(null),
          ee = r.useRef(null),
          te = ut([Z, null == _ ? void 0 : _.beforeInsideRef]),
          ne = ut([ee, null == _ ? void 0 : _.afterInsideRef]);
        function re(e) {
          return !o && y && g
            ? (0, R.jsx)(at, {
                ref: "start" === e ? U : W,
                onClick: (e) => I(!1, e.nativeEvent),
                children: "string" == typeof y ? y : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!S) return;
          const t = Array.from(
              (null == _ || null == (e = _.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Le("portal") + "]")) || [],
            ),
            n =
              j && !g
                ? Ne(null == j ? void 0 : j.nodesRef.current, M()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              S,
              ...t,
              ...n,
              U.current,
              W.current,
              Z.current,
              ee.current,
              null == _ ? void 0 : _.beforeOutsideRef.current,
              null == _ ? void 0 : _.afterOutsideRef.current,
              q.current.includes("reference") || O ? T : null,
            ].filter((e) => null != e),
            i = g || O ? Ke(r, !N, N) : Ke(r);
          return () => {
            i();
          };
        }, [o, T, S, g, q, _, O, D, N, j, M]),
          fe(() => {
            if (o || !(0, i.sb)(X)) return;
            const e = u(p(X));
            queueMicrotask(() => {
              const t = Q(X),
                n = F.current,
                r = ("number" == typeof n ? t[n] : n.current) || X,
                o = c(X, e);
              A || o || !k || De(r, { preventScroll: r === X });
            });
          }, [o, k, X, A, Q, F]),
          fe(() => {
            if (o || !X) return;
            let e = !1,
              t = !1;
            const n = p(X),
              r = u(n);
            let l = L.current.openEvent;
            var s;
            function d(n) {
              let { open: r, reason: o, event: i, nested: u } = n;
              if (
                (r && (l = i),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === i.type &&
                  (V.current = !0),
                "outside-press" === o)
              )
                if (u) (V.current = !1), (e = !0);
                else if (a(i) || f(i)) V.current = !1;
                else {
                  let t = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (t = !0), !1;
                    },
                  }),
                    t ? ((V.current = !1), (e = !0)) : (V.current = !0);
                }
            }
            (s = r),
              (lt = lt.filter((e) => e.isConnected)),
              s &&
                "body" !== (0, i.mq)(s) &&
                (lt.push(s), lt.length > ct && (lt = lt.slice(-ct))),
              C.on("openchange", d);
            const m = n.createElement("span");
            return (
              m.setAttribute("tabindex", "-1"),
              m.setAttribute("aria-hidden", "true"),
              Object.assign(m.style, Qe),
              J && T && T.insertAdjacentElement("afterend", m),
              () => {
                C.off("openchange", d);
                const r = u(n),
                  o =
                    c(S, r) ||
                    (j &&
                      qe(j.nodesRef.current, M()).some((e) => {
                        var t;
                        return c(
                          null == (t = e.context)
                            ? void 0
                            : t.elements.floating,
                          r,
                        );
                      }));
                (o || (l && ["click", "mousedown"].includes(l.type))) &&
                  (t = !0);
                const s =
                  "boolean" == typeof B.current
                    ? t && T
                      ? T
                      : st() || m
                    : B.current.current || m;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = Ve();
                    return K(e, t) ? e : z(e, t)[0] || e;
                  })(s);
                  B.current &&
                    !V.current &&
                    (0, i.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    m.remove();
                });
              }
            );
          }, [o, S, X, B, L, C, j, J, T, M]),
          r.useEffect(() => {
            queueMicrotask(() => {
              V.current = !1;
            });
          }, [o]),
          fe(() => {
            if (!o && _)
              return (
                _.setFocusManagerState({
                  modal: g,
                  closeOnFocusOut: b,
                  open: k,
                  onOpenChange: I,
                  domReference: T,
                }),
                () => {
                  _.setFocusManagerState(null);
                }
              );
          }, [o, _, g, k, I, b, T]),
          fe(() => {
            if (o) return;
            if (!X) return;
            if ("function" != typeof MutationObserver) return;
            if (A) return;
            const e = () => {
              const e = X.getAttribute("tabindex"),
                t = G(),
                n = u(p(S)),
                r = t.indexOf(n);
              -1 !== r && (Y.current = r),
                q.current.includes("floating") || (n !== T && 0 === t.length)
                  ? "0" !== e && X.setAttribute("tabindex", "0")
                  : "-1" !== e && X.setAttribute("tabindex", "-1");
            };
            e();
            const t = new MutationObserver(e);
            return (
              t.observe(X, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                t.disconnect();
              }
            );
          }, [o, S, X, T, q, G, A]);
        const oe = !o && D && (!g || !O) && (J || g);
        return (0, R.jsxs)(R.Fragment, {
          children: [
            oe &&
              (0, R.jsx)(Ze, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (g) {
                    const e = Q();
                    De("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != _ && _.preserveTabOrder && _.portalNode)
                    if (((V.current = !1), Xe(e, _.portalNode))) {
                      const e = Ye() || T;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = _.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !O && re("start"),
            n,
            re("end"),
            oe &&
              (0, R.jsx)(Ze, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (g) De(Q()[0]);
                  else if (null != _ && _.preserveTabOrder && _.portalNode)
                    if ((b && (V.current = !0), Xe(e, _.portalNode))) {
                      const e = Je() || T;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = _.afterOutsideRef.current) || t.focus();
                    }
                },
              }),
          ],
        });
      }
      function dt(e) {
        return (0, i.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function mt(e) {
        return b(e);
      }
      function vt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: i,
            elements: { domReference: u },
          } = e,
          {
            enabled: c = !0,
            event: l = "click",
            toggle: s = !0,
            ignoreMouse: a = !1,
            keyboardHandlers: f = !0,
            stickIfOpen: d = !0,
          } = t,
          m = r.useRef(),
          p = r.useRef(!1),
          g = r.useMemo(
            () => ({
              onPointerDown(e) {
                m.current = e.pointerType;
              },
              onMouseDown(e) {
                const t = m.current;
                0 === e.button &&
                  "click" !== l &&
                  ((v(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (i.current.openEvent &&
                      d &&
                      "mousedown" !== i.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = m.current;
                "mousedown" === l && m.current
                  ? (m.current = void 0)
                  : (v(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (i.current.openEvent &&
                      d &&
                      "click" !== i.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (m.current = void 0),
                  e.defaultPrevented ||
                    !f ||
                    dt(e) ||
                    (" " !== e.key ||
                      mt(u) ||
                      (e.preventDefault(), (p.current = !0)),
                    "Enter" === e.key && o(!n || !s, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  dt(e) ||
                  mt(u) ||
                  (" " === e.key &&
                    p.current &&
                    ((p.current = !1), o(!n || !s, e.nativeEvent, "click")));
              },
            }),
            [i, u, l, a, f, o, n, d, s],
          );
        return r.useMemo(() => (c ? { reference: g } : {}), [c, g]);
      }
      const pt = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        gt = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        ht = (e) => {
          var t, n;
          return {
            escapeKey:
              "boolean" == typeof e
                ? e
                : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress:
              "boolean" == typeof e
                ? e
                : null == (n = null == e ? void 0 : e.outsidePress) || n,
          };
        };
      function yt(e, t) {
        void 0 === t && (t = {});
        const { open: n, onOpenChange: o, elements: u, dataRef: l } = e,
          {
            enabled: s = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: m = !1,
            referencePressEvent: v = "pointerdown",
            ancestorScroll: y = !1,
            bubbles: b,
            capture: w,
          } = t,
          x = Ce(),
          E = $("function" == typeof f ? f : () => !1),
          R = "function" == typeof f ? E : f,
          k = r.useRef(!1),
          I = r.useRef(!1),
          { escapeKey: C, outsidePress: L } = ht(b),
          { escapeKey: T, outsidePress: S } = ht(w),
          M = r.useRef(!1),
          A = $((e) => {
            var t;
            if (!n || !s || !a || "Escape" !== e.key) return;
            if (M.current) return;
            const r =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              i = x ? qe(x.nodesRef.current, r) : [];
            if (!C && (e.stopPropagation(), i.length > 0)) {
              let e = !0;
              if (
                (i.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__escapeKeyBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(
              !1,
              (function (e) {
                return "nativeEvent" in e;
              })(e)
                ? e.nativeEvent
                : e,
              "escape-key",
            );
          }),
          O = $((e) => {
            var t;
            const n = () => {
              var t;
              A(e), null == (t = h(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = h(e)) || t.addEventListener("keydown", n);
          }),
          P = $((e) => {
            var t;
            const n = k.current;
            k.current = !1;
            const r = I.current;
            if (((I.current = !1), "click" === d && r)) return;
            if (n) return;
            if ("function" == typeof R && !R(e)) return;
            const s = h(e),
              a = "[" + Le("inert") + "]",
              f = p(u.floating).querySelectorAll(a);
            let m = (0, i.vq)(s) ? s : null;
            for (; m && !(0, i.eu)(m); ) {
              const e = (0, i.$4)(m);
              if ((0, i.eu)(e) || !(0, i.vq)(e)) break;
              m = e;
            }
            if (
              f.length &&
              (0, i.vq)(s) &&
              !s.matches("html,body") &&
              !c(s, u.floating) &&
              Array.from(f).every((e) => !c(m, e))
            )
              return;
            if ((0, i.sb)(s) && q) {
              const t = (0, i.eu)(s),
                n = (0, i.L9)(s),
                r = /auto|scroll/,
                o = t || r.test(n.overflowX),
                u = t || r.test(n.overflowY),
                c = o && s.clientWidth > 0 && s.scrollWidth > s.clientWidth,
                l = u && s.clientHeight > 0 && s.scrollHeight > s.clientHeight,
                a = "rtl" === n.direction,
                f =
                  l &&
                  (a
                    ? e.offsetX <= s.offsetWidth - s.clientWidth
                    : e.offsetX > s.clientWidth),
                d = c && e.offsetY > s.clientHeight;
              if (f || d) return;
            }
            const v =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              y =
                x &&
                qe(x.nodesRef.current, v).some((t) => {
                  var n;
                  return g(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (g(e, u.floating) || g(e, u.domReference) || y) return;
            const b = x ? qe(x.nodesRef.current, v) : [];
            if (b.length > 0) {
              let e = !0;
              if (
                (b.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__outsidePressBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(!1, e, "outside-press");
          }),
          D = $((e) => {
            var t;
            const n = () => {
              var t;
              P(e), null == (t = h(e)) || t.removeEventListener(d, n);
            };
            null == (t = h(e)) || t.addEventListener(d, n);
          });
        r.useEffect(() => {
          if (!n || !s) return;
          (l.current.__escapeKeyBubbles = C),
            (l.current.__outsidePressBubbles = L);
          let e = -1;
          function t(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (M.current = !0);
          }
          function c() {
            e = window.setTimeout(
              () => {
                M.current = !1;
              },
              (0, i.Tc)() ? 5 : 0,
            );
          }
          const f = p(u.floating);
          a &&
            (f.addEventListener("keydown", T ? O : A, T),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", c)),
            R && f.addEventListener(d, S ? D : P, S);
          let m = [];
          return (
            y &&
              ((0, i.vq)(u.domReference) && (m = (0, i.v9)(u.domReference)),
              (0, i.vq)(u.floating) && (m = m.concat((0, i.v9)(u.floating))),
              !(0, i.vq)(u.reference) &&
                u.reference &&
                u.reference.contextElement &&
                (m = m.concat((0, i.v9)(u.reference.contextElement)))),
            (m = m.filter((e) => {
              var t;
              return (
                e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport)
              );
            })),
            m.forEach((e) => {
              e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
              a &&
                (f.removeEventListener("keydown", T ? O : A, T),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", c)),
                R && f.removeEventListener(d, S ? D : P, S),
                m.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, u, a, R, d, n, o, y, s, C, L, A, T, O, P, S, D]),
          r.useEffect(() => {
            k.current = !1;
          }, [R, d]);
        const N = r.useMemo(
            () => ({
              onKeyDown: A,
              ...(m && {
                [pt[v]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== v && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [A, o, m, v],
          ),
          q = r.useMemo(
            () => ({
              onKeyDown: A,
              onMouseDown() {
                I.current = !0;
              },
              onMouseUp() {
                I.current = !0;
              },
              [gt[d]]: () => {
                k.current = !0;
              },
            }),
            [A, d],
          );
        return r.useMemo(
          () => (s ? { reference: N, floating: q } : {}),
          [s, N, q],
        );
      }
      function bt(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              i = xe(),
              u = r.useRef({}),
              [c] = r.useState(() => Ee()),
              l = null != Ie(),
              [s, a] = r.useState(o.reference),
              f = $((e, t, r) => {
                (u.current.openEvent = e ? t : void 0),
                  c.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: l,
                  }),
                  null == n || n(e, t, r);
              }),
              d = r.useMemo(() => ({ setPositionReference: a }), []),
              m = r.useMemo(
                () => ({
                  reference: s || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [s, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: u,
                open: t,
                onOpenChange: f,
                elements: m,
                events: c,
                floatingId: i,
                refs: d,
              }),
              [t, f, m, c, i, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || n,
          u = o.elements,
          [c, l] = r.useState(null),
          [s, a] = r.useState(null),
          f = (null == u ? void 0 : u.domReference) || c,
          d = r.useRef(null),
          m = Ce();
        fe(() => {
          f && (d.current = f);
        }, [f]);
        const v = (0, H.we)({
            ...e,
            elements: { ...u, ...(s && { reference: s }) },
          }),
          p = r.useCallback(
            (e) => {
              const t = (0, i.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), v.refs.setReference(t);
            },
            [v.refs],
          ),
          g = r.useCallback(
            (e) => {
              ((0, i.vq)(e) || null === e) && ((d.current = e), l(e)),
                ((0, i.vq)(v.refs.reference.current) ||
                  null === v.refs.reference.current ||
                  (null !== e && !(0, i.vq)(e))) &&
                  v.refs.setReference(e);
            },
            [v.refs],
          ),
          h = r.useMemo(
            () => ({
              ...v.refs,
              setReference: g,
              setPositionReference: p,
              domReference: d,
            }),
            [v.refs, g, p],
          ),
          y = r.useMemo(
            () => ({ ...v.elements, domReference: f }),
            [v.elements, f],
          ),
          b = r.useMemo(
            () => ({ ...v, ...o, refs: h, elements: y, nodeId: t }),
            [v, h, y, t, o],
          );
        return (
          fe(() => {
            o.dataRef.current.floatingContext = b;
            const e =
              null == m ? void 0 : m.nodesRef.current.find((e) => e.id === t);
            e && (e.context = b);
          }),
          r.useMemo(
            () => ({ ...v, context: b, refs: h, elements: y }),
            [v, h, y, b],
          )
        );
      }
      function wt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            events: s,
            dataRef: a,
            elements: m,
          } = e,
          { enabled: v = !0, visibleOnly: g = !0 } = t,
          y = r.useRef(!1),
          w = r.useRef(-1),
          x = r.useRef(!0);
        r.useEffect(() => {
          if (!v) return;
          const e = (0, i.zk)(m.domReference);
          function t() {
            !n &&
              (0, i.sb)(m.domReference) &&
              m.domReference === u(p(m.domReference)) &&
              (y.current = !0);
          }
          function r() {
            x.current = !0;
          }
          return (
            e.addEventListener("blur", t),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", t),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [m.domReference, n, v]),
          r.useEffect(() => {
            if (v)
              return (
                s.on("openchange", e),
                () => {
                  s.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: t } = e;
              ("reference-press" !== t && "escape-key" !== t) ||
                (y.current = !0);
            }
          }, [s, v]),
          r.useEffect(
            () => () => {
              Te(w);
            },
            [],
          );
        const E = r.useMemo(
          () => ({
            onPointerDown(e) {
              f(e.nativeEvent) || (x.current = !1);
            },
            onMouseLeave() {
              y.current = !1;
            },
            onFocus(e) {
              if (y.current) return;
              const t = h(e.nativeEvent);
              if (g && (0, i.vq)(t))
                try {
                  if (
                    d() &&
                    l().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!x.current && !b(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              y.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, i.vq)(t) &&
                  t.hasAttribute(Le("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              w.current = window.setTimeout(() => {
                var e;
                const i = u(
                  m.domReference ? m.domReference.ownerDocument : document,
                );
                (t || i !== m.domReference) &&
                  (c(
                    null == (e = a.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    i,
                  ) ||
                    c(m.domReference, i) ||
                    r ||
                    o(!1, n, "focus"));
              });
            },
          }),
          [a, m.domReference, o, g],
        );
        return r.useMemo(() => (v ? { reference: E } : {}), [v, E]);
      }
      const xt = "active",
        Et = "selected";
      function Rt(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let i = e;
        if (o && e) {
          const { [xt]: t, [Et]: n, ...r } = e;
          i = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [ot]: "" }),
          ...i,
          ...t
            .map((t) => {
              const r = t ? t[n] : null;
              return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, t) =>
                t
                  ? (Object.entries(t).forEach((t) => {
                      let [n, i] = t;
                      var u;
                      (o && [xt, Et].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof i &&
                              (null == (u = r.get(n)) || u.push(i),
                              (e[n] = function () {
                                for (
                                  var e,
                                    t = arguments.length,
                                    o = new Array(t),
                                    i = 0;
                                  i < t;
                                  i++
                                )
                                  o[i] = arguments[i];
                                return null == (e = r.get(n))
                                  ? void 0
                                  : e
                                      .map((e) => e(...o))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[n] = i));
                    }),
                    e)
                  : e,
              {},
            ),
        };
      }
      function kt(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          i = r.useCallback((t) => Rt(t, e, "reference"), t),
          u = r.useCallback((t) => Rt(t, e, "floating"), n),
          c = r.useCallback((t) => Rt(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: i,
            getFloatingProps: u,
            getItemProps: c,
          }),
          [i, u, c],
        );
      }
      const It = "Escape";
      function Ct(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n;
        }
      }
      function Lt(e, t) {
        return Ct(t, e === G || e === Q, e === Z || e === ee);
      }
      function Tt(e, t, n) {
        return (
          Ct(t, e === Q, n ? e === Z : e === ee) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function St(e, t, n) {
        return Ct(t, n ? e === Z : e === ee, e === Q);
      }
      function Mt(e, t, n, r) {
        return "both" === t || ("horizontal" === t && r && r > 1)
          ? e === It
          : Ct(t, n ? e === ee : e === Z, e === G);
      }
      function At(e, t) {
        const { open: n, onOpenChange: o, elements: l } = e,
          {
            listRef: s,
            activeIndex: d,
            onNavigate: m = () => {},
            enabled: v = !0,
            selectedIndex: g = null,
            allowEscape: h = !1,
            loop: y = !1,
            nested: b = !1,
            rtl: E = !1,
            virtual: R = !1,
            focusItemOnOpen: k = "auto",
            focusItemOnHover: I = !0,
            openOnArrowKeyDown: C = !0,
            disabledIndices: L,
            orientation: T = "vertical",
            cols: S = 1,
            scrollItemIntoView: M = !0,
            virtualItemRef: A,
            itemSizes: O,
            dense: P = !1,
          } = t;
        const D = Se(it(l.floating)),
          N = Ie(),
          q = Ce();
        fe(() => {
          e.dataRef.current.orientation = T;
        }, [e, T]);
        const F = $(() => {
            m(-1 === _.current ? null : _.current);
          }),
          B = x(l.domReference),
          j = r.useRef(k),
          _ = r.useRef(null != g ? g : -1),
          U = r.useRef(null),
          W = r.useRef(!0),
          z = r.useRef(F),
          K = r.useRef(!!l.floating),
          V = r.useRef(n),
          H = r.useRef(!1),
          Y = r.useRef(!1),
          J = Se(L),
          X = Se(n),
          G = Se(M),
          te = Se(g),
          [de, me] = r.useState(),
          [ve, pe] = r.useState(),
          ge = $(() => {
            function e(e) {
              R
                ? (me(e.id),
                  null == q || q.events.emit("virtualfocus", e),
                  A && (A.current = e))
                : De(e, { sync: H.current, preventScroll: !0 });
            }
            const t = s.current[_.current];
            t && e(t);
            (H.current ? (e) => e() : requestAnimationFrame)(() => {
              const n = s.current[_.current] || t;
              if (!n) return;
              t || e(n);
              const r = G.current;
              r &&
                ye &&
                (Y.current || !W.current) &&
                (null == n.scrollIntoView ||
                  n.scrollIntoView(
                    "boolean" == typeof r
                      ? { block: "nearest", inline: "nearest" }
                      : r,
                  ));
            });
          });
        fe(() => {
          v &&
            (n && l.floating
              ? j.current &&
                null != g &&
                ((Y.current = !0), (_.current = g), F())
              : K.current && ((_.current = -1), z.current()));
        }, [v, n, l.floating, g, F]),
          fe(() => {
            if (v && n && l.floating)
              if (null == d) {
                if (((H.current = !1), null != te.current)) return;
                if (
                  (K.current && ((_.current = -1), ge()),
                  (!V.current || !K.current) &&
                    j.current &&
                    (null != U.current ||
                      (!0 === j.current && null == U.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    if (null == s.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(t);
                      }
                      e++;
                    } else
                      (_.current =
                        null == U.current || Tt(U.current, T, E) || b
                          ? re(s, J.current)
                          : oe(s, J.current)),
                        (U.current = null),
                        F();
                  };
                  t();
                }
              } else ne(s, d) || ((_.current = d), ge(), (Y.current = !1));
          }, [v, n, l.floating, d, te, b, s, T, E, F, ge, J]),
          fe(() => {
            var e;
            if (!v || l.floating || !q || R || !K.current) return;
            const t = q.nodesRef.current,
              n =
                null == (e = t.find((e) => e.id === N)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = u(p(l.floating)),
              o = t.some((e) => e.context && c(e.context.elements.floating, r));
            n && !o && W.current && n.focus({ preventScroll: !0 });
          }, [v, l.floating, q, N, R]),
          fe(() => {
            if (v && q && R && !N)
              return (
                q.events.on("virtualfocus", e),
                () => {
                  q.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              pe(e.id), A && (A.current = e);
            }
          }, [v, q, R, N, A]),
          fe(() => {
            (z.current = F), (V.current = n), (K.current = !!l.floating);
          }),
          fe(() => {
            n || (U.current = null);
          }, [n]);
        const he = null != d,
          ye = r.useMemo(() => {
            function e(e) {
              if (!n) return;
              const t = s.current.indexOf(e);
              -1 !== t && _.current !== t && ((_.current = t), F());
            }
            return {
              onFocus(t) {
                let { currentTarget: n } = t;
                (H.current = !0), e(n);
              },
              onClick: (e) => {
                let { currentTarget: t } = e;
                return t.focus({ preventScroll: !0 });
              },
              ...(I && {
                onMouseMove(t) {
                  let { currentTarget: n } = t;
                  (H.current = !0), (Y.current = !1), e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  var n;
                  W.current &&
                    "touch" !== t &&
                    ((H.current = !0),
                    (_.current = -1),
                    F(),
                    R ||
                      null == (n = D.current) ||
                      n.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [n, D, I, s, F, R]),
          be = $((e) => {
            if (((W.current = !1), (H.current = !0), 229 === e.which)) return;
            if (!X.current && e.currentTarget === D.current) return;
            if (b && Mt(e.key, T, E, S))
              return (
                w(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, i.sb)(l.domReference) &&
                  (R
                    ? null == q || q.events.emit("virtualfocus", l.domReference)
                    : l.domReference.focus())
                )
              );
            const t = _.current,
              r = re(s, L),
              c = oe(s, L);
            if (
              (B ||
                ("Home" === e.key && (w(e), (_.current = r), F()),
                "End" === e.key && (w(e), (_.current = c), F())),
              S > 1)
            ) {
              const t =
                  O ||
                  Array.from({ length: s.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                n = ce(t, S, P),
                o = n.findIndex((e) => null != e && !ae(s.current, e, L)),
                i = n.reduce(
                  (e, t, n) => (null == t || ae(s.current, t, L) ? e : n),
                  -1,
                ),
                u =
                  n[
                    ue(
                      {
                        current: n.map((e) =>
                          null != e ? s.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: T,
                        loop: y,
                        rtl: E,
                        cols: S,
                        disabledIndices: se(
                          [
                            ...(L ||
                              s.current.map((e, t) =>
                                ae(s.current, t) ? t : void 0,
                              )),
                            void 0,
                          ],
                          n,
                        ),
                        minIndex: o,
                        maxIndex: i,
                        prevIndex: le(
                          _.current > c ? r : _.current,
                          t,
                          n,
                          S,
                          e.key === Q
                            ? "bl"
                            : e.key === (E ? Z : ee)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != u && ((_.current = u), F()), "both" === T)) return;
            }
            if (Lt(e.key, T)) {
              if (
                (w(e),
                n && !R && u(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (_.current = Tt(e.key, T, E) ? r : c), void F();
              Tt(e.key, T, E)
                ? (_.current = y
                    ? t >= c
                      ? h && t !== s.current.length
                        ? -1
                        : r
                      : ie(s, { startingIndex: t, disabledIndices: L })
                    : Math.min(
                        c,
                        ie(s, { startingIndex: t, disabledIndices: L }),
                      ))
                : (_.current = y
                    ? t <= r
                      ? h && -1 !== t
                        ? s.current.length
                        : c
                      : ie(s, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: L,
                        })
                    : Math.max(
                        r,
                        ie(s, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: L,
                        }),
                      )),
                ne(s, _.current) && (_.current = -1),
                F();
            }
          }),
          we = r.useMemo(
            () => R && n && he && { "aria-activedescendant": ve || de },
            [R, n, he, ve, de],
          ),
          xe = r.useMemo(
            () => ({
              "aria-orientation": "both" === T ? void 0 : T,
              ...(B ? {} : we),
              onKeyDown: be,
              onPointerMove() {
                W.current = !0;
              },
            }),
            [we, be, T, B],
          ),
          Ee = r.useMemo(() => {
            function e(e) {
              "auto" === k && a(e.nativeEvent) && (j.current = !0);
            }
            function t(e) {
              (j.current = k),
                "auto" === k && f(e.nativeEvent) && (j.current = !0);
            }
            return {
              ...we,
              onKeyDown(e) {
                var t;
                W.current = !1;
                const r = e.key.startsWith("Arrow"),
                  i = ["Home", "End"].includes(e.key),
                  u = r || i,
                  c =
                    null == q ||
                    null == (t = q.nodesRef.current.find((e) => e.id === N)) ||
                    null == (t = t.context) ||
                    null == (t = t.dataRef)
                      ? void 0
                      : t.current.orientation,
                  l = St(e.key, T, E),
                  a = Mt(e.key, T, E, S),
                  f = St(e.key, c, E),
                  d = Lt(e.key, T),
                  m = (b ? f : d) || "Enter" === e.key || "" === e.key.trim();
                if (R && n) {
                  const t =
                      null == q
                        ? void 0
                        : q.nodesRef.current.find((e) => null == e.parentId),
                    n =
                      q && t
                        ? (function (e, t) {
                            let n,
                              r = -1;
                            return (
                              (function t(o, i) {
                                i > r && ((n = o), (r = i)),
                                  qe(e, o).forEach((e) => {
                                    t(e.id, i + 1);
                                  });
                              })(t, 0),
                              e.find((e) => e.id === n)
                            );
                          })(q.nodesRef.current, t.id)
                        : null;
                  if (u && n && A) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (l || a) {
                      var v, p;
                      const r =
                          (null == (v = n.context)
                            ? void 0
                            : v.elements.domReference) === e.currentTarget,
                        o =
                          a && !r
                            ? null == (p = n.context)
                              ? void 0
                              : p.elements.domReference
                            : l
                              ? s.current.find(
                                  (e) => (null == e ? void 0 : e.id) === de,
                                )
                              : null;
                      o && (w(e), o.dispatchEvent(t), pe(void 0));
                    }
                    var h;
                    if ((d || i) && n.context)
                      if (
                        n.context.open &&
                        n.parentId &&
                        e.currentTarget !== n.context.elements.domReference
                      )
                        return (
                          w(e),
                          void (
                            null == (h = n.context.elements.domReference) ||
                            h.dispatchEvent(t)
                          )
                        );
                  }
                  return be(e);
                }
                if (n || C || !r) {
                  if (m) {
                    const t = Lt(e.key, c);
                    U.current = b && t ? null : e.key;
                  }
                  b
                    ? f &&
                      (w(e),
                      n
                        ? ((_.current = re(s, J.current)), F())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : d &&
                      (null != g && (_.current = g),
                      w(e),
                      !n && C ? o(!0, e.nativeEvent, "list-navigation") : be(e),
                      n && F());
                }
              },
              onFocus() {
                n && !R && ((_.current = -1), F());
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e,
            };
          }, [de, we, S, be, J, k, s, b, F, o, n, C, T, N, E, g, q, R, A]);
        return r.useMemo(
          () => (v ? { reference: Ee, floating: xe, item: ye } : {}),
          [v, Ee, xe, ye],
        );
      }
      const Ot = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function Pt(e, t) {
        var n;
        void 0 === t && (t = {});
        const { open: o, floatingId: i } = e,
          { enabled: u = !0, role: c = "dialog" } = t,
          l = null != (n = Ot.get(c)) ? n : c,
          s = xe(),
          a = null != Ie(),
          f = r.useMemo(
            () =>
              "tooltip" === l || "label" === c
                ? {
                    ["aria-" + ("label" === c ? "labelledby" : "describedby")]:
                      o ? i : void 0,
                  }
                : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                    "aria-controls": o ? i : void 0,
                    ...("listbox" === l && { role: "combobox" }),
                    ...("menu" === l && { id: s }),
                    ...("menu" === l && a && { role: "menuitem" }),
                    ...("select" === c && { "aria-autocomplete": "none" }),
                    ...("combobox" === c && { "aria-autocomplete": "list" }),
                  },
            [l, i, a, o, s, c],
          ),
          d = r.useMemo(() => {
            const e = { id: i, ...(l && { role: l }) };
            return "tooltip" === l || "label" === c
              ? e
              : { ...e, ...("menu" === l && { "aria-labelledby": s }) };
          }, [l, i, s, c]),
          m = r.useCallback(
            (e) => {
              let { active: t, selected: n } = e;
              const r = { role: "option", ...(t && { id: i + "-option" }) };
              switch (c) {
                case "select":
                  return { ...r, "aria-selected": t && n };
                case "combobox":
                  return { ...r, ...(t && { "aria-selected": !0 }) };
              }
              return {};
            },
            [i, c],
          );
        return r.useMemo(
          () => (u ? { reference: f, floating: d, item: m } : {}),
          [u, f, d, m],
        );
      }
      function Dt(e, t) {
        var n;
        const { open: o, dataRef: i } = e,
          {
            listRef: u,
            activeIndex: c,
            onMatch: l,
            onTypingChange: s,
            enabled: a = !0,
            findMatch: f = null,
            resetMs: d = 750,
            ignoreKeys: m = [],
            selectedIndex: v = null,
          } = t,
          p = r.useRef(-1),
          g = r.useRef(""),
          h = r.useRef(null != (n = null != v ? v : c) ? n : -1),
          y = r.useRef(null),
          b = $(l),
          x = $(s),
          E = Se(f),
          R = Se(m);
        fe(() => {
          o && (Te(p), (y.current = null), (g.current = ""));
        }, [o]),
          fe(() => {
            var e;
            o &&
              "" === g.current &&
              (h.current = null != (e = null != v ? v : c) ? e : -1);
          }, [o, v, c]);
        const k = $((e) => {
            e
              ? i.current.typing || ((i.current.typing = e), x(e))
              : i.current.typing && ((i.current.typing = e), x(e));
          }),
          I = $((e) => {
            function t(e, t, n) {
              const r = E.current
                ? E.current(t, n)
                : t.find(
                    (e) =>
                      0 ===
                      (null == e
                        ? void 0
                        : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())),
                  );
              return r ? e.indexOf(r) : -1;
            }
            const n = u.current;
            if (
              (g.current.length > 0 &&
                " " !== g.current[0] &&
                (-1 === t(n, n, g.current) ? k(!1) : " " === e.key && w(e)),
              null == n ||
                R.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (w(e), k(!0));
            n.every((e) => {
              var t, n;
              return (
                !e ||
                (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                  (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
              );
            }) &&
              g.current === e.key &&
              ((g.current = ""), (h.current = y.current)),
              (g.current += e.key),
              Te(p),
              (p.current = window.setTimeout(() => {
                (g.current = ""), (h.current = y.current), k(!1);
              }, d));
            const r = h.current,
              i = t(
                n,
                [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)],
                g.current,
              );
            -1 !== i
              ? (b(i), (y.current = i))
              : " " !== e.key && ((g.current = ""), k(!1));
          }),
          C = r.useMemo(() => ({ onKeyDown: I }), [I]),
          L = r.useMemo(
            () => ({
              onKeyDown: I,
              onKeyUp(e) {
                " " === e.key && k(!1);
              },
            }),
            [I, k],
          );
        return r.useMemo(
          () => (a ? { reference: C, floating: L } : {}),
          [a, C, L],
        );
      }
      function Nt(e, t) {
        const [n, r] = e;
        let o = !1;
        const i = t.length;
        for (let e = 0, u = i - 1; e < i; u = e++) {
          const [i, c] = t[e] || [0, 0],
            [l, s] = t[u] || [0, 0];
          c >= r != s >= r &&
            n <= ((l - i) * (r - c)) / (s - c) + i &&
            (o = !o);
        }
        return o;
      }
      function qt(e) {
        void 0 === e && (e = {});
        const {
          buffer: t = 0.5,
          blockPointerEvents: n = !1,
          requireIntent: r = !0,
        } = e;
        let o,
          u = !1,
          l = null,
          s = null,
          a = performance.now();
        const f = (e) => {
          let {
            x: n,
            y: f,
            placement: d,
            elements: m,
            onClose: v,
            nodeId: p,
            tree: g,
          } = e;
          return function (e) {
            function y() {
              clearTimeout(o), v();
            }
            if (
              (clearTimeout(o),
              !m.domReference ||
                !m.floating ||
                null == d ||
                null == n ||
                null == f)
            )
              return;
            const { clientX: b, clientY: w } = e,
              x = [b, w],
              E = h(e),
              R = "mouseleave" === e.type,
              k = c(m.floating, E),
              I = c(m.domReference, E),
              C = m.domReference.getBoundingClientRect(),
              L = m.floating.getBoundingClientRect(),
              T = d.split("-")[0],
              S = n > L.right - L.width / 2,
              M = f > L.bottom - L.height / 2,
              A = (function (e, t) {
                return (
                  e[0] >= t.x &&
                  e[0] <= t.x + t.width &&
                  e[1] >= t.y &&
                  e[1] <= t.y + t.height
                );
              })(x, C),
              O = L.width > C.width,
              P = L.height > C.height,
              D = (O ? C : L).left,
              N = (O ? C : L).right,
              q = (P ? C : L).top,
              F = (P ? C : L).bottom;
            if (k && ((u = !0), !R)) return;
            if ((I && (u = !1), I && !R)) return void (u = !0);
            if (
              R &&
              (0, i.vq)(e.relatedTarget) &&
              c(m.floating, e.relatedTarget)
            )
              return;
            if (
              g &&
              qe(g.nodesRef.current, p).some((e) => {
                let { context: t } = e;
                return null == t ? void 0 : t.open;
              })
            )
              return;
            if (
              ("top" === T && f >= C.bottom - 1) ||
              ("bottom" === T && f <= C.top + 1) ||
              ("left" === T && n >= C.right - 1) ||
              ("right" === T && n <= C.left + 1)
            )
              return y();
            let B = [];
            switch (T) {
              case "top":
                B = [
                  [D, C.top + 1],
                  [D, L.bottom - 1],
                  [N, L.bottom - 1],
                  [N, C.top + 1],
                ];
                break;
              case "bottom":
                B = [
                  [D, L.top + 1],
                  [D, C.bottom - 1],
                  [N, C.bottom - 1],
                  [N, L.top + 1],
                ];
                break;
              case "left":
                B = [
                  [L.right - 1, F],
                  [L.right - 1, q],
                  [C.left + 1, q],
                  [C.left + 1, F],
                ];
                break;
              case "right":
                B = [
                  [C.right - 1, F],
                  [C.right - 1, q],
                  [L.left + 1, q],
                  [L.left + 1, F],
                ];
            }
            if (!Nt([b, w], B)) {
              if (u && !A) return y();
              if (!R && r) {
                const t = (function (e, t) {
                  const n = performance.now(),
                    r = n - a;
                  if (null === l || null === s || 0 === r)
                    return (l = e), (s = t), (a = n), null;
                  const o = e - l,
                    i = t - s,
                    u = Math.sqrt(o * o + i * i);
                  return (l = e), (s = t), (a = n), u / r;
                })(e.clientX, e.clientY);
                if (null !== t && t < 0.1) return y();
              }
              Nt(
                [b, w],
                (function (e) {
                  let [n, r] = e;
                  switch (T) {
                    case "top":
                      return [
                        [O ? n + t / 2 : S ? n + 4 * t : n - 4 * t, r + t + 1],
                        [O ? n - t / 2 : S ? n + 4 * t : n - 4 * t, r + t + 1],
                        ...[
                          [L.left, S || O ? L.bottom - t : L.top],
                          [
                            L.right,
                            S ? (O ? L.bottom - t : L.top) : L.bottom - t,
                          ],
                        ],
                      ];
                    case "bottom":
                      return [
                        [O ? n + t / 2 : S ? n + 4 * t : n - 4 * t, r - t],
                        [O ? n - t / 2 : S ? n + 4 * t : n - 4 * t, r - t],
                        ...[
                          [L.left, S || O ? L.top + t : L.bottom],
                          [L.right, S ? (O ? L.top + t : L.bottom) : L.top + t],
                        ],
                      ];
                    case "left": {
                      const e = [
                          n + t + 1,
                          P ? r + t / 2 : M ? r + 4 * t : r - 4 * t,
                        ],
                        o = [
                          n + t + 1,
                          P ? r - t / 2 : M ? r + 4 * t : r - 4 * t,
                        ];
                      return [
                        ...[
                          [M || P ? L.right - t : L.left, L.top],
                          [
                            M ? (P ? L.right - t : L.left) : L.right - t,
                            L.bottom,
                          ],
                        ],
                        e,
                        o,
                      ];
                    }
                    case "right":
                      return [
                        [n - t, P ? r + t / 2 : M ? r + 4 * t : r - 4 * t],
                        [n - t, P ? r - t / 2 : M ? r + 4 * t : r - 4 * t],
                        ...[
                          [M || P ? L.left + t : L.right, L.top],
                          [
                            M ? (P ? L.left + t : L.right) : L.left + t,
                            L.bottom,
                          ],
                        ],
                      ];
                  }
                })([n, f]),
              )
                ? !u && r && (o = window.setTimeout(y, 40))
                : y();
            }
          };
        };
        return (f.__options = { blockPointerEvents: n }), f;
      }
    },
    977: (e, t, n) => {
      function r() {
        return "undefined" != typeof window;
      }
      function o(e) {
        return c(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function i(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function u(e) {
        var t;
        return null ==
          (t = (c(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function c(e) {
        return !!r() && (e instanceof Node || e instanceof i(e).Node);
      }
      function l(e) {
        return !!r() && (e instanceof Element || e instanceof i(e).Element);
      }
      function s(e) {
        return (
          !!r() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement)
        );
      }
      function a(e) {
        return (
          !(!r() || "undefined" == typeof ShadowRoot) &&
          (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot)
        );
      }
      function f(e) {
        const { overflow: t, overflowX: n, overflowY: r, display: o } = y(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function d(e) {
        return ["table", "td", "th"].includes(o(e));
      }
      function m(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function v(e) {
        const t = g(),
          n = l(e) ? y(e) : e;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!n[e] && "none" !== n[e],
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (n.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e),
          )
        );
      }
      function p(e) {
        let t = w(e);
        for (; s(t) && !h(t); ) {
          if (v(t)) return t;
          if (m(t)) return null;
          t = w(t);
        }
        return null;
      }
      function g() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function h(e) {
        return ["html", "body", "#document"].includes(o(e));
      }
      function y(e) {
        return i(e).getComputedStyle(e);
      }
      function b(e) {
        return l(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function w(e) {
        if ("html" === o(e)) return e;
        const t = e.assignedSlot || e.parentNode || (a(e) && e.host) || u(e);
        return a(t) ? t.host : t;
      }
      function x(e) {
        const t = w(e);
        return h(t)
          ? e.ownerDocument
            ? e.ownerDocument.body
            : e.body
          : s(t) && f(t)
            ? t
            : x(t);
      }
      function E(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = x(e),
          u = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          c = i(o);
        if (u) {
          const e = (function (e) {
            return e.parent && Object.getPrototypeOf(e.parent)
              ? e.frameElement
              : null;
          })(c);
          return t.concat(
            c,
            c.visualViewport || [],
            f(o) ? o : [],
            e && n ? E(e) : [],
          );
        }
        return t.concat(o, E(o, [], n));
      }
      n.d(t, {
        $4: () => w,
        CP: () => b,
        L9: () => y,
        Lv: () => d,
        Ng: () => a,
        Tc: () => g,
        ZU: () => f,
        ep: () => u,
        eu: () => h,
        gJ: () => p,
        mq: () => o,
        sQ: () => v,
        sb: () => s,
        v9: () => E,
        vq: () => l,
        zk: () => i,
      });
    },
    58015: (e, t, n) => {
      n.d(t, {
        B1: () => k,
        C0: () => d,
        Dz: () => h,
        Jx: () => c,
        LI: () => i,
        PG: () => v,
        RI: () => u,
        Sg: () => m,
        T9: () => o,
        TV: () => g,
        WJ: () => b,
        _3: () => f,
        bV: () => E,
        jk: () => r,
        lP: () => x,
        nI: () => R,
        qE: () => a,
        sq: () => p,
        w7: () => y,
      });
      const r = Math.min,
        o = Math.max,
        i = Math.round,
        u = Math.floor,
        c = (e) => ({ x: e, y: e }),
        l = { left: "right", right: "left", bottom: "top", top: "bottom" },
        s = { start: "end", end: "start" };
      function a(e, t, n) {
        return o(e, r(t, n));
      }
      function f(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function d(e) {
        return e.split("-")[0];
      }
      function m(e) {
        return e.split("-")[1];
      }
      function v(e) {
        return "x" === e ? "y" : "x";
      }
      function p(e) {
        return "y" === e ? "height" : "width";
      }
      function g(e) {
        return ["top", "bottom"].includes(d(e)) ? "y" : "x";
      }
      function h(e) {
        return v(g(e));
      }
      function y(e, t, n) {
        void 0 === n && (n = !1);
        const r = m(e),
          o = h(e),
          i = p(o);
        let u =
          "x" === o
            ? r === (n ? "end" : "start")
              ? "right"
              : "left"
            : "start" === r
              ? "bottom"
              : "top";
        return t.reference[i] > t.floating[i] && (u = E(u)), [u, E(u)];
      }
      function b(e) {
        const t = E(e);
        return [w(e), t, w(t)];
      }
      function w(e) {
        return e.replace(/start|end/g, (e) => s[e]);
      }
      function x(e, t, n, r) {
        const o = m(e);
        let i = (function (e, t, n) {
          const r = ["left", "right"],
            o = ["right", "left"],
            i = ["top", "bottom"],
            u = ["bottom", "top"];
          switch (e) {
            case "top":
            case "bottom":
              return n ? (t ? o : r) : t ? r : o;
            case "left":
            case "right":
              return t ? i : u;
            default:
              return [];
          }
        })(d(e), "start" === n, r);
        return (
          o && ((i = i.map((e) => e + "-" + o)), t && (i = i.concat(i.map(w)))),
          i
        );
      }
      function E(e) {
        return e.replace(/left|right|bottom|top/g, (e) => l[e]);
      }
      function R(e) {
        return "number" != typeof e
          ? (function (e) {
              return { top: 0, right: 0, bottom: 0, left: 0, ...e };
            })(e)
          : { top: e, right: e, bottom: e, left: e };
      }
      function k(e) {
        const { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
    },
  },
]);
