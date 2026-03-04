/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1997],
  {
    12618: (t, e, r) => {
      r.d(e, { G: () => B });
      var n,
        i = r(90626),
        o = r(90018),
        a = r(57487),
        l = r(3316),
        c = r.n(l),
        s = r(82544),
        u = r.n(s),
        f = r(64609),
        p = r.n(f),
        y = r(27367),
        h = r.n(y),
        d = r(58782),
        m = r.n(d),
        v = r(68428),
        b = r(17891),
        g = r(49891),
        O = r(94816),
        x = r(1036),
        w = r(91038),
        P = r(10438),
        A = r(50247),
        j = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
        E = ["key"];
      function S(t) {
        return (
          (S =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          S(t)
        );
      }
      function k(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          D.apply(this, arguments)
        );
      }
      function z(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function N(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? z(Object(r), !0).forEach(function (e) {
                _(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : z(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function T(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, M(n.key), n);
        }
      }
      function C(t, e, r) {
        return (
          (e = R(e)),
          (function (t, e) {
            if (e && ("object" === S(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            I()
              ? Reflect.construct(e, r || [], R(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function I() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (I = function () {
          return !!t;
        })();
      }
      function R(t) {
        return (
          (R = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          R(t)
        );
      }
      function W(t, e) {
        return (
          (W = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          W(t, e)
        );
      }
      function _(t, e, r) {
        return (
          (e = M(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function M(t) {
        var e = (function (t, e) {
          if ("object" != S(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != S(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == S(e) ? e : e + "";
      }
      var B = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return (
            _((t = C(this, e, [].concat(n))), "state", {
              isAnimationFinished: !0,
            }),
            _(t, "id", (0, w.NF)("recharts-area-")),
            _(t, "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), c()(e) && e();
            }),
            _(t, "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), c()(e) && e();
            }),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && W(t, e);
          })(e, t),
          (r = e),
          (l = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      curBaseLine: t.baseLine,
                      prevPoints: e.curPoints,
                      prevBaseLine: e.curBaseLine,
                    }
                  : t.points !== e.curPoints || t.baseLine !== e.curBaseLine
                    ? { curPoints: t.points, curBaseLine: t.baseLine }
                    : null;
              },
            },
          ]),
          (n = [
            {
              key: "renderDots",
              value: function (t, r, n) {
                var o = this.props.isAnimationActive,
                  a = this.state.isAnimationFinished;
                if (o && !a) return null;
                var l = this.props,
                  c = l.dot,
                  s = l.points,
                  u = l.dataKey,
                  f = (0, A.J9)(this.props, !1),
                  p = (0, A.J9)(c, !0),
                  y = s.map(function (t, r) {
                    var n = N(
                      N(N({ key: "dot-".concat(r), r: 3 }, f), p),
                      {},
                      {
                        index: r,
                        cx: t.x,
                        cy: t.y,
                        dataKey: u,
                        value: t.value,
                        payload: t.payload,
                        points: s,
                      },
                    );
                    return e.renderDotItem(c, n);
                  }),
                  h = {
                    clipPath: t
                      ? "url(#clipPath-".concat(r ? "" : "dots-").concat(n, ")")
                      : null,
                  };
                return i.createElement(
                  g.W,
                  D({ className: "recharts-area-dots" }, h),
                  y,
                );
              },
            },
            {
              key: "renderHorizontalRect",
              value: function (t) {
                var e = this.props,
                  r = e.baseLine,
                  n = e.points,
                  o = e.strokeWidth,
                  a = n[0].x,
                  l = n[n.length - 1].x,
                  c = t * Math.abs(a - l),
                  s = u()(
                    n.map(function (t) {
                      return t.y || 0;
                    }),
                  );
                return (
                  (0, w.Et)(r) && "number" == typeof r
                    ? (s = Math.max(r, s))
                    : r &&
                      Array.isArray(r) &&
                      r.length &&
                      (s = Math.max(
                        u()(
                          r.map(function (t) {
                            return t.y || 0;
                          }),
                        ),
                        s,
                      )),
                  (0, w.Et)(s)
                    ? i.createElement("rect", {
                        x: a < l ? a : a - c,
                        y: 0,
                        width: c,
                        height: Math.floor(
                          s + (o ? parseInt("".concat(o), 10) : 1),
                        ),
                      })
                    : null
                );
              },
            },
            {
              key: "renderVerticalRect",
              value: function (t) {
                var e = this.props,
                  r = e.baseLine,
                  n = e.points,
                  o = e.strokeWidth,
                  a = n[0].y,
                  l = n[n.length - 1].y,
                  c = t * Math.abs(a - l),
                  s = u()(
                    n.map(function (t) {
                      return t.x || 0;
                    }),
                  );
                return (
                  (0, w.Et)(r) && "number" == typeof r
                    ? (s = Math.max(r, s))
                    : r &&
                      Array.isArray(r) &&
                      r.length &&
                      (s = Math.max(
                        u()(
                          r.map(function (t) {
                            return t.x || 0;
                          }),
                        ),
                        s,
                      )),
                  (0, w.Et)(s)
                    ? i.createElement("rect", {
                        x: 0,
                        y: a < l ? a : a - c,
                        width: s + (o ? parseInt("".concat(o), 10) : 1),
                        height: Math.floor(c),
                      })
                    : null
                );
              },
            },
            {
              key: "renderClipRect",
              value: function (t) {
                return "vertical" === this.props.layout
                  ? this.renderVerticalRect(t)
                  : this.renderHorizontalRect(t);
              },
            },
            {
              key: "renderAreaStatically",
              value: function (t, e, r, n) {
                var o = this.props,
                  a = o.layout,
                  l = o.type,
                  c = o.stroke,
                  s = o.connectNulls,
                  u = o.isRange,
                  f = (o.ref, k(o, j));
                return i.createElement(
                  g.W,
                  { clipPath: r ? "url(#clipPath-".concat(n, ")") : null },
                  i.createElement(
                    v.I,
                    D({}, (0, A.J9)(f, !0), {
                      points: t,
                      connectNulls: s,
                      type: l,
                      baseLine: e,
                      layout: a,
                      stroke: "none",
                      className: "recharts-area-area",
                    }),
                  ),
                  "none" !== c &&
                    i.createElement(
                      v.I,
                      D({}, (0, A.J9)(this.props, !1), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: l,
                        connectNulls: s,
                        fill: "none",
                        points: t,
                      }),
                    ),
                  "none" !== c &&
                    u &&
                    i.createElement(
                      v.I,
                      D({}, (0, A.J9)(this.props, !1), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: l,
                        connectNulls: s,
                        fill: "none",
                        points: e,
                      }),
                    ),
                );
              },
            },
            {
              key: "renderAreaWithAnimation",
              value: function (t, e) {
                var r = this,
                  n = this.props,
                  o = n.points,
                  l = n.baseLine,
                  c = n.isAnimationActive,
                  s = n.animationBegin,
                  u = n.animationDuration,
                  f = n.animationEasing,
                  y = n.animationId,
                  d = this.state,
                  m = d.prevPoints,
                  v = d.prevBaseLine;
                return i.createElement(
                  a.Ay,
                  {
                    begin: s,
                    duration: u,
                    isActive: c,
                    easing: f,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(y),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (n) {
                    var a = n.t;
                    if (m) {
                      var c,
                        s = m.length / o.length,
                        u = o.map(function (t, e) {
                          var r = Math.floor(e * s);
                          if (m[r]) {
                            var n = m[r],
                              i = (0, w.Dj)(n.x, t.x),
                              o = (0, w.Dj)(n.y, t.y);
                            return N(N({}, t), {}, { x: i(a), y: o(a) });
                          }
                          return t;
                        });
                      return (
                        (c =
                          (0, w.Et)(l) && "number" == typeof l
                            ? (0, w.Dj)(v, l)(a)
                            : p()(l) || h()(l)
                              ? (0, w.Dj)(v, 0)(a)
                              : l.map(function (t, e) {
                                  var r = Math.floor(e * s);
                                  if (v[r]) {
                                    var n = v[r],
                                      i = (0, w.Dj)(n.x, t.x),
                                      o = (0, w.Dj)(n.y, t.y);
                                    return N(
                                      N({}, t),
                                      {},
                                      { x: i(a), y: o(a) },
                                    );
                                  }
                                  return t;
                                })),
                        r.renderAreaStatically(u, c, t, e)
                      );
                    }
                    return i.createElement(
                      g.W,
                      null,
                      i.createElement(
                        "defs",
                        null,
                        i.createElement(
                          "clipPath",
                          { id: "animationClipPath-".concat(e) },
                          r.renderClipRect(a),
                        ),
                      ),
                      i.createElement(
                        g.W,
                        { clipPath: "url(#animationClipPath-".concat(e, ")") },
                        r.renderAreaStatically(o, l, t, e),
                      ),
                    );
                  },
                );
              },
            },
            {
              key: "renderArea",
              value: function (t, e) {
                var r = this.props,
                  n = r.points,
                  i = r.baseLine,
                  o = r.isAnimationActive,
                  a = this.state,
                  l = a.prevPoints,
                  c = a.prevBaseLine,
                  s = a.totalLength;
                return o &&
                  n &&
                  n.length &&
                  ((!l && s > 0) || !m()(l, n) || !m()(c, i))
                  ? this.renderAreaWithAnimation(t, e)
                  : this.renderAreaStatically(n, i, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  r = e.hide,
                  n = e.dot,
                  a = e.points,
                  l = e.className,
                  c = e.top,
                  s = e.left,
                  u = e.xAxis,
                  f = e.yAxis,
                  y = e.width,
                  h = e.height,
                  d = e.isAnimationActive,
                  m = e.id;
                if (r || !a || !a.length) return null;
                var v = this.state.isAnimationFinished,
                  b = 1 === a.length,
                  x = (0, o.A)("recharts-area", l),
                  w = u && u.allowDataOverflow,
                  P = f && f.allowDataOverflow,
                  j = w || P,
                  E = p()(m) ? this.id : m,
                  S =
                    null !== (t = (0, A.J9)(n, !1)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = S.r,
                  D = void 0 === k ? 3 : k,
                  z = S.strokeWidth,
                  N = void 0 === z ? 2 : z,
                  T = ((0, A.sT)(n) ? n : {}).clipDot,
                  C = void 0 === T || T,
                  I = 2 * D + N;
                return i.createElement(
                  g.W,
                  { className: x },
                  w || P
                    ? i.createElement(
                        "defs",
                        null,
                        i.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(E) },
                          i.createElement("rect", {
                            x: w ? s : s - y / 2,
                            y: P ? c : c - h / 2,
                            width: w ? y : 2 * y,
                            height: P ? h : 2 * h,
                          }),
                        ),
                        !C &&
                          i.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(E) },
                            i.createElement("rect", {
                              x: s - I / 2,
                              y: c - I / 2,
                              width: y + I,
                              height: h + I,
                            }),
                          ),
                      )
                    : null,
                  b ? null : this.renderArea(j, E),
                  (n || b) && this.renderDots(j, C, E),
                  (!d || v) && O.Z.renderCallByParent(this.props, a),
                );
              },
            },
          ]) && T(r.prototype, n),
          l && T(r, l),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, l;
      })(i.PureComponent);
      (n = B),
        _(B, "displayName", "Area"),
        _(B, "defaultProps", {
          stroke: "#3182bd",
          fill: "#3182bd",
          fillOpacity: 0.6,
          xAxisId: 0,
          yAxisId: 0,
          legendType: "line",
          connectNulls: !1,
          points: [],
          dot: !1,
          activeDot: !0,
          hide: !1,
          isAnimationActive: !x.m.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        _(B, "getBaseValue", function (t, e, r, n) {
          var i = t.layout,
            o = t.baseValue,
            a = e.props.baseValue,
            l = null != a ? a : o;
          if ((0, w.Et)(l) && "number" == typeof l) return l;
          var c = "horizontal" === i ? n : r,
            s = c.scale.domain();
          if ("number" === c.type) {
            var u = Math.max(s[0], s[1]),
              f = Math.min(s[0], s[1]);
            return "dataMin" === l
              ? f
              : "dataMax" === l || u < 0
                ? u
                : Math.max(Math.min(s[0], s[1]), 0);
          }
          return "dataMin" === l ? s[0] : "dataMax" === l ? s[1] : s[0];
        }),
        _(B, "getComposedData", function (t) {
          var e,
            r = t.props,
            i = t.item,
            o = t.xAxis,
            a = t.yAxis,
            l = t.xAxisTicks,
            c = t.yAxisTicks,
            s = t.bandSize,
            u = t.dataKey,
            f = t.stackedData,
            p = t.dataStartIndex,
            y = t.displayedData,
            h = t.offset,
            d = r.layout,
            m = f && f.length,
            v = n.getBaseValue(r, i, o, a),
            b = "horizontal" === d,
            g = !1,
            O = y.map(function (t, e) {
              var r;
              m
                ? (r = f[p + e])
                : ((r = (0, P.kr)(t, u)),
                  Array.isArray(r) ? (g = !0) : (r = [v, r]));
              var n = null == r[1] || (m && null == (0, P.kr)(t, u));
              return b
                ? {
                    x: (0, P.nb)({
                      axis: o,
                      ticks: l,
                      bandSize: s,
                      entry: t,
                      index: e,
                    }),
                    y: n ? null : a.scale(r[1]),
                    value: r,
                    payload: t,
                  }
                : {
                    x: n ? null : o.scale(r[1]),
                    y: (0, P.nb)({
                      axis: a,
                      ticks: c,
                      bandSize: s,
                      entry: t,
                      index: e,
                    }),
                    value: r,
                    payload: t,
                  };
            });
          return (
            (e =
              m || g
                ? O.map(function (t) {
                    var e = Array.isArray(t.value) ? t.value[0] : null;
                    return b
                      ? {
                          x: t.x,
                          y: null != e && null != t.y ? a.scale(e) : null,
                        }
                      : { x: null != e ? o.scale(e) : null, y: t.y };
                  })
                : b
                  ? a.scale(v)
                  : o.scale(v)),
            N({ points: O, baseLine: e, layout: d, isRange: g }, h)
          );
        }),
        _(B, "renderDotItem", function (t, e) {
          var r;
          if (i.isValidElement(t)) r = i.cloneElement(t, e);
          else if (c()(t)) r = t(e);
          else {
            var n = (0, o.A)(
                "recharts-area-dot",
                "boolean" != typeof t ? t.className : "",
              ),
              a = e.key,
              l = k(e, E);
            r = i.createElement(b.c, D({}, l, { key: a, className: n }));
          }
          return r;
        });
    },
    49953: (t, e, r) => {
      r.d(e, { d: () => z });
      var n = r(90626),
        i = r(3316),
        o = r.n(i),
        a = r(97380),
        l = r(91038),
        c = r(50247),
        s = r(10438),
        u = r(25655),
        f = r(38475),
        p = r(58847),
        y = ["x1", "y1", "x2", "y2", "key"],
        h = ["offset"];
      function d(t) {
        return (
          (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          d(t)
        );
      }
      function m(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(r), !0).forEach(function (e) {
                b(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function b(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != d(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != d(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == d(n) ? n : n + "") in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          g.apply(this, arguments)
        );
      }
      function O(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      var x = function (t) {
        var e = t.fill;
        if (!e || "none" === e) return null;
        var r = t.fillOpacity,
          i = t.x,
          o = t.y,
          a = t.width,
          l = t.height,
          c = t.ry;
        return n.createElement("rect", {
          x: i,
          y: o,
          ry: c,
          width: a,
          height: l,
          stroke: "none",
          fill: e,
          fillOpacity: r,
          className: "recharts-cartesian-grid-bg",
        });
      };
      function w(t, e) {
        var r;
        if (n.isValidElement(t)) r = n.cloneElement(t, e);
        else if (o()(t)) r = t(e);
        else {
          var i = e.x1,
            a = e.y1,
            l = e.x2,
            s = e.y2,
            u = e.key,
            f = O(e, y),
            p = (0, c.J9)(f, !1),
            d = (p.offset, O(p, h));
          r = n.createElement(
            "line",
            g({}, d, { x1: i, y1: a, x2: l, y2: s, fill: "none", key: u }),
          );
        }
        return r;
      }
      function P(t) {
        var e = t.x,
          r = t.width,
          i = t.horizontal,
          o = void 0 === i || i,
          a = t.horizontalPoints;
        if (!o || !a || !a.length) return null;
        var l = a.map(function (n, i) {
          var a = v(
            v({}, t),
            {},
            {
              x1: e,
              y1: n,
              x2: e + r,
              y2: n,
              key: "line-".concat(i),
              index: i,
            },
          );
          return w(o, a);
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-grid-horizontal" },
          l,
        );
      }
      function A(t) {
        var e = t.y,
          r = t.height,
          i = t.vertical,
          o = void 0 === i || i,
          a = t.verticalPoints;
        if (!o || !a || !a.length) return null;
        var l = a.map(function (n, i) {
          var a = v(
            v({}, t),
            {},
            {
              x1: n,
              y1: e,
              x2: n,
              y2: e + r,
              key: "line-".concat(i),
              index: i,
            },
          );
          return w(o, a);
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-grid-vertical" },
          l,
        );
      }
      function j(t) {
        var e = t.horizontalFill,
          r = t.fillOpacity,
          i = t.x,
          o = t.y,
          a = t.width,
          l = t.height,
          c = t.horizontalPoints,
          s = t.horizontal;
        if (!(void 0 === s || s) || !e || !e.length) return null;
        var u = c
          .map(function (t) {
            return Math.round(t + o - o);
          })
          .sort(function (t, e) {
            return t - e;
          });
        o !== u[0] && u.unshift(0);
        var f = u.map(function (t, c) {
          var s = !u[c + 1] ? o + l - t : u[c + 1] - t;
          if (s <= 0) return null;
          var f = c % e.length;
          return n.createElement("rect", {
            key: "react-".concat(c),
            y: t,
            x: i,
            height: s,
            width: a,
            stroke: "none",
            fill: e[f],
            fillOpacity: r,
            className: "recharts-cartesian-grid-bg",
          });
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-gridstripes-horizontal" },
          f,
        );
      }
      function E(t) {
        var e = t.vertical,
          r = void 0 === e || e,
          i = t.verticalFill,
          o = t.fillOpacity,
          a = t.x,
          l = t.y,
          c = t.width,
          s = t.height,
          u = t.verticalPoints;
        if (!r || !i || !i.length) return null;
        var f = u
          .map(function (t) {
            return Math.round(t + a - a);
          })
          .sort(function (t, e) {
            return t - e;
          });
        a !== f[0] && f.unshift(0);
        var p = f.map(function (t, e) {
          var r = !f[e + 1] ? a + c - t : f[e + 1] - t;
          if (r <= 0) return null;
          var u = e % i.length;
          return n.createElement("rect", {
            key: "react-".concat(e),
            x: t,
            y: l,
            width: r,
            height: s,
            stroke: "none",
            fill: i[u],
            fillOpacity: o,
            className: "recharts-cartesian-grid-bg",
          });
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-gridstripes-vertical" },
          p,
        );
      }
      var S = function (t, e) {
          var r = t.xAxis,
            n = t.width,
            i = t.height,
            o = t.offset;
          return (0, s.PW)(
            (0, u.f)(
              v(
                v(v({}, f.u.defaultProps), r),
                {},
                {
                  ticks: (0, s.Rh)(r, !0),
                  viewBox: { x: 0, y: 0, width: n, height: i },
                },
              ),
            ),
            o.left,
            o.left + o.width,
            e,
          );
        },
        k = function (t, e) {
          var r = t.yAxis,
            n = t.width,
            i = t.height,
            o = t.offset;
          return (0, s.PW)(
            (0, u.f)(
              v(
                v(v({}, f.u.defaultProps), r),
                {},
                {
                  ticks: (0, s.Rh)(r, !0),
                  viewBox: { x: 0, y: 0, width: n, height: i },
                },
              ),
            ),
            o.top,
            o.top + o.height,
            e,
          );
        },
        D = {
          horizontal: !0,
          vertical: !0,
          horizontalPoints: [],
          verticalPoints: [],
          stroke: "#ccc",
          fill: "none",
          verticalFill: [],
          horizontalFill: [],
        };
      function z(t) {
        var e,
          r,
          i,
          c,
          s,
          u,
          f = (0, p.yi)(),
          y = (0, p.rY)(),
          h = (0, p.hj)(),
          m = v(
            v({}, t),
            {},
            {
              stroke: null !== (e = t.stroke) && void 0 !== e ? e : D.stroke,
              fill: null !== (r = t.fill) && void 0 !== r ? r : D.fill,
              horizontal:
                null !== (i = t.horizontal) && void 0 !== i ? i : D.horizontal,
              horizontalFill:
                null !== (c = t.horizontalFill) && void 0 !== c
                  ? c
                  : D.horizontalFill,
              vertical:
                null !== (s = t.vertical) && void 0 !== s ? s : D.vertical,
              verticalFill:
                null !== (u = t.verticalFill) && void 0 !== u
                  ? u
                  : D.verticalFill,
              x: (0, l.Et)(t.x) ? t.x : h.left,
              y: (0, l.Et)(t.y) ? t.y : h.top,
              width: (0, l.Et)(t.width) ? t.width : h.width,
              height: (0, l.Et)(t.height) ? t.height : h.height,
            },
          ),
          b = m.x,
          O = m.y,
          w = m.width,
          z = m.height,
          N = m.syncWithTicks,
          T = m.horizontalValues,
          C = m.verticalValues,
          I = (0, p.pj)(),
          R = (0, p.$G)();
        if (
          !(0, l.Et)(w) ||
          w <= 0 ||
          !(0, l.Et)(z) ||
          z <= 0 ||
          !(0, l.Et)(b) ||
          b !== +b ||
          !(0, l.Et)(O) ||
          O !== +O
        )
          return null;
        var W = m.verticalCoordinatesGenerator || S,
          _ = m.horizontalCoordinatesGenerator || k,
          M = m.horizontalPoints,
          B = m.verticalPoints;
        if ((!M || !M.length) && o()(_)) {
          var F = T && T.length,
            K = _(
              {
                yAxis: R ? v(v({}, R), {}, { ticks: F ? T : R.ticks }) : void 0,
                width: f,
                height: y,
                offset: h,
              },
              !!F || N,
            );
          (0, a.R)(
            Array.isArray(K),
            "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
              d(K),
              "]",
            ),
          ),
            Array.isArray(K) && (M = K);
        }
        if ((!B || !B.length) && o()(W)) {
          var L = C && C.length,
            H = W(
              {
                xAxis: I ? v(v({}, I), {}, { ticks: L ? C : I.ticks }) : void 0,
                width: f,
                height: y,
                offset: h,
              },
              !!L || N,
            );
          (0, a.R)(
            Array.isArray(H),
            "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
              d(H),
              "]",
            ),
          ),
            Array.isArray(H) && (B = H);
        }
        return n.createElement(
          "g",
          { className: "recharts-cartesian-grid" },
          n.createElement(x, {
            fill: m.fill,
            fillOpacity: m.fillOpacity,
            x: m.x,
            y: m.y,
            width: m.width,
            height: m.height,
            ry: m.ry,
          }),
          n.createElement(
            P,
            g({}, m, { offset: h, horizontalPoints: M, xAxis: I, yAxis: R }),
          ),
          n.createElement(
            A,
            g({}, m, { offset: h, verticalPoints: B, xAxis: I, yAxis: R }),
          ),
          n.createElement(j, g({}, m, { horizontalPoints: M })),
          n.createElement(E, g({}, m, { verticalPoints: B })),
        );
      }
      z.displayName = "CartesianGrid";
    },
    56854: (t, e, r) => {
      r.d(e, { X: () => rt });
      var n = r(1839),
        i = r(12618),
        o = r(62059),
        a = r(76549),
        l = r(90626),
        c = r(57487),
        s = r(64609),
        u = r.n(s),
        f = r(58782),
        p = r.n(f),
        y = r(3316),
        h = r.n(y),
        d = r(90018),
        m = r(49891),
        v = r(94816),
        b = r(50247),
        g = r(1036);
      function O(t) {
        return (
          (O =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          O(t)
        );
      }
      function x(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, S(n.key), n);
        }
      }
      function w(t, e, r) {
        return (
          (e = A(e)),
          (function (t, e) {
            if (e && ("object" === O(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            P()
              ? Reflect.construct(e, r || [], A(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function P() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (P = function () {
          return !!t;
        })();
      }
      function A(t) {
        return (
          (A = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          A(t)
        );
      }
      function j(t, e) {
        return (
          (j = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          j(t, e)
        );
      }
      function E(t, e, r) {
        return (
          (e = S(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function S(t) {
        var e = (function (t, e) {
          if ("object" != O(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != O(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == O(e) ? e : e + "";
      }
      var k = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            w(this, e, arguments)
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && j(t, e);
          })(e, t),
          (r = e),
          (n = [
            {
              key: "render",
              value: function () {
                return null;
              },
            },
          ]) && x(r.prototype, n),
          i && x(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, i;
      })(l.Component);
      E(k, "displayName", "ZAxis"),
        E(k, "defaultProps", {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var D = r(68428),
        z = r(82780),
        N = r(49404),
        T = r(91038),
        C = r(10438),
        I = r(62426),
        R = r(59098),
        W = r(17798),
        _ = ["option", "isActive"];
      function M() {
        return (
          (M = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          M.apply(this, arguments)
        );
      }
      function B(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function F(t) {
        var e = t.option,
          r = t.isActive,
          n = B(t, _);
        return "string" == typeof e
          ? l.createElement(
              W.yp,
              M(
                {
                  option: l.createElement(R.i, M({ type: e }, n)),
                  isActive: r,
                  shapeType: "symbols",
                },
                n,
              ),
            )
          : l.createElement(
              W.yp,
              M({ option: e, isActive: r, shapeType: "symbols" }, n),
            );
      }
      function K(t) {
        return (
          (K =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          K(t)
        );
      }
      function L() {
        return (
          (L = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          L.apply(this, arguments)
        );
      }
      function H(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function V(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? H(Object(r), !0).forEach(function (e) {
                q(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : H(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function J(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, U(n.key), n);
        }
      }
      function G(t, e, r) {
        return (
          (e = X(e)),
          (function (t, e) {
            if (e && ("object" === K(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(
            t,
            Z()
              ? Reflect.construct(e, r || [], X(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function Z() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Z = function () {
          return !!t;
        })();
      }
      function X(t) {
        return (
          (X = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          X(t)
        );
      }
      function $(t, e) {
        return (
          ($ = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          $(t, e)
        );
      }
      function q(t, e, r) {
        return (
          (e = U(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function U(t) {
        var e = (function (t, e) {
          if ("object" != K(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != K(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == K(e) ? e : e + "";
      }
      var Y = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return (
            q((t = G(this, e, [].concat(n))), "state", {
              isAnimationFinished: !1,
            }),
            q(t, "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 });
            }),
            q(t, "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 });
            }),
            q(t, "id", (0, T.NF)("recharts-scatter-")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && $(t, e);
          })(e, t),
          (r = e),
          (i = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      prevPoints: e.curPoints,
                    }
                  : t.points !== e.curPoints
                    ? { curPoints: t.points }
                    : null;
              },
            },
          ]),
          (n = [
            {
              key: "renderSymbolsStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  n = r.shape,
                  i = r.activeShape,
                  o = r.activeIndex,
                  a = (0, b.J9)(this.props, !1);
                return t.map(function (t, r) {
                  var c = o === r,
                    s = c ? i : n,
                    u = V(V({}, a), t);
                  return l.createElement(
                    m.W,
                    L(
                      {
                        className: "recharts-scatter-symbol",
                        key: "symbol-"
                          .concat(null == t ? void 0 : t.cx, "-")
                          .concat(null == t ? void 0 : t.cy, "-")
                          .concat(null == t ? void 0 : t.size, "-")
                          .concat(r),
                      },
                      (0, I.XC)(e.props, t, r),
                      { role: "img" },
                    ),
                    l.createElement(
                      F,
                      L(
                        { option: s, isActive: c, key: "symbol-".concat(r) },
                        u,
                      ),
                    ),
                  );
                });
              },
            },
            {
              key: "renderSymbolsWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.points,
                  n = e.isAnimationActive,
                  i = e.animationBegin,
                  o = e.animationDuration,
                  a = e.animationEasing,
                  s = e.animationId,
                  u = this.state.prevPoints;
                return l.createElement(
                  c.Ay,
                  {
                    begin: i,
                    duration: o,
                    isActive: n,
                    easing: a,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(s),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (e) {
                    var n = e.t,
                      i = r.map(function (t, e) {
                        var r = u && u[e];
                        if (r) {
                          var i = (0, T.Dj)(r.cx, t.cx),
                            o = (0, T.Dj)(r.cy, t.cy),
                            a = (0, T.Dj)(r.size, t.size);
                          return V(
                            V({}, t),
                            {},
                            { cx: i(n), cy: o(n), size: a(n) },
                          );
                        }
                        var l = (0, T.Dj)(0, t.size);
                        return V(V({}, t), {}, { size: l(n) });
                      });
                    return l.createElement(
                      m.W,
                      null,
                      t.renderSymbolsStatically(i),
                    );
                  },
                );
              },
            },
            {
              key: "renderSymbols",
              value: function () {
                var t = this.props,
                  e = t.points,
                  r = t.isAnimationActive,
                  n = this.state.prevPoints;
                return !(r && e && e.length) || (n && p()(n, e))
                  ? this.renderSymbolsStatically(e)
                  : this.renderSymbolsWithAnimation();
              },
            },
            {
              key: "renderErrorBar",
              value: function () {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var t = this.props,
                  e = t.points,
                  r = t.xAxis,
                  n = t.yAxis,
                  i = t.children,
                  o = (0, b.aS)(i, z.u);
                return o
                  ? o.map(function (t, i) {
                      var o = t.props,
                        a = o.direction,
                        c = o.dataKey;
                      return l.cloneElement(t, {
                        key: "".concat(a, "-").concat(c, "-").concat(e[i]),
                        data: e,
                        xAxis: r,
                        yAxis: n,
                        layout: "x" === a ? "vertical" : "horizontal",
                        dataPointFormatter: function (t, e) {
                          return {
                            x: t.cx,
                            y: t.cy,
                            value: "x" === a ? +t.node.x : +t.node.y,
                            errorVal: (0, C.kr)(t, e),
                          };
                        },
                      });
                    })
                  : null;
              },
            },
            {
              key: "renderLine",
              value: function () {
                var t,
                  e,
                  r = this.props,
                  n = r.points,
                  i = r.line,
                  o = r.lineType,
                  a = r.lineJointType,
                  c = (0, b.J9)(this.props, !1),
                  s = (0, b.J9)(i, !1);
                if ("joint" === o)
                  t = n.map(function (t) {
                    return { x: t.cx, y: t.cy };
                  });
                else if ("fitting" === o) {
                  var u = (0, T.jG)(n),
                    f = u.xmin,
                    p = u.xmax,
                    y = u.a,
                    d = u.b,
                    v = function (t) {
                      return y * t + d;
                    };
                  t = [
                    { x: f, y: v(f) },
                    { x: p, y: v(p) },
                  ];
                }
                var g = V(
                  V(V({}, c), {}, { fill: "none", stroke: c && c.fill }, s),
                  {},
                  { points: t },
                );
                return (
                  (e = l.isValidElement(i)
                    ? l.cloneElement(i, g)
                    : h()(i)
                      ? i(g)
                      : l.createElement(D.I, L({}, g, { type: a }))),
                  l.createElement(
                    m.W,
                    {
                      className: "recharts-scatter-line",
                      key: "recharts-scatter-line",
                    },
                    e,
                  )
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.hide,
                  r = t.points,
                  n = t.line,
                  i = t.className,
                  o = t.xAxis,
                  a = t.yAxis,
                  c = t.left,
                  s = t.top,
                  f = t.width,
                  p = t.height,
                  y = t.id,
                  h = t.isAnimationActive;
                if (e || !r || !r.length) return null;
                var b = this.state.isAnimationFinished,
                  g = (0, d.A)("recharts-scatter", i),
                  O = o && o.allowDataOverflow,
                  x = a && a.allowDataOverflow,
                  w = O || x,
                  P = u()(y) ? this.id : y;
                return l.createElement(
                  m.W,
                  {
                    className: g,
                    clipPath: w ? "url(#clipPath-".concat(P, ")") : null,
                  },
                  O || x
                    ? l.createElement(
                        "defs",
                        null,
                        l.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(P) },
                          l.createElement("rect", {
                            x: O ? c : c - f / 2,
                            y: x ? s : s - p / 2,
                            width: O ? f : 2 * f,
                            height: x ? p : 2 * p,
                          }),
                        ),
                      )
                    : null,
                  n && this.renderLine(),
                  this.renderErrorBar(),
                  l.createElement(
                    m.W,
                    { key: "recharts-scatter-symbols" },
                    this.renderSymbols(),
                  ),
                  (!h || b) && v.Z.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && J(r.prototype, n),
          i && J(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, i;
      })(l.PureComponent);
      q(Y, "displayName", "Scatter"),
        q(Y, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          legendType: "circle",
          lineType: "joint",
          lineJointType: "linear",
          data: [],
          shape: "circle",
          hide: !1,
          isAnimationActive: !g.m.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "linear",
        }),
        q(Y, "getComposedData", function (t) {
          var e = t.xAxis,
            r = t.yAxis,
            n = t.zAxis,
            i = t.item,
            o = t.displayedData,
            a = t.xAxisTicks,
            l = t.yAxisTicks,
            c = t.offset,
            s = i.props.tooltipType,
            f = (0, b.aS)(i.props.children, N.f),
            p = u()(e.dataKey) ? i.props.dataKey : e.dataKey,
            y = u()(r.dataKey) ? i.props.dataKey : r.dataKey,
            h = n && n.dataKey,
            d = n ? n.range : k.defaultProps.range,
            m = d && d[0],
            v = e.scale.bandwidth ? e.scale.bandwidth() : 0,
            g = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            O = o.map(function (t, o) {
              var c = (0, C.kr)(t, p),
                d = (0, C.kr)(t, y),
                b = (!u()(h) && (0, C.kr)(t, h)) || "-",
                O = [
                  {
                    name: u()(e.dataKey) ? i.props.name : e.name || e.dataKey,
                    unit: e.unit || "",
                    value: c,
                    payload: t,
                    dataKey: p,
                    type: s,
                  },
                  {
                    name: u()(r.dataKey) ? i.props.name : r.name || r.dataKey,
                    unit: r.unit || "",
                    value: d,
                    payload: t,
                    dataKey: y,
                    type: s,
                  },
                ];
              "-" !== b &&
                O.push({
                  name: n.name || n.dataKey,
                  unit: n.unit || "",
                  value: b,
                  payload: t,
                  dataKey: h,
                  type: s,
                });
              var x = (0, C.nb)({
                  axis: e,
                  ticks: a,
                  bandSize: v,
                  entry: t,
                  index: o,
                  dataKey: p,
                }),
                w = (0, C.nb)({
                  axis: r,
                  ticks: l,
                  bandSize: g,
                  entry: t,
                  index: o,
                  dataKey: y,
                }),
                P = "-" !== b ? n.scale(b) : m,
                A = Math.sqrt(Math.max(P, 0) / Math.PI);
              return V(
                V({}, t),
                {},
                {
                  cx: x,
                  cy: w,
                  x: x - A,
                  y: w - A,
                  xAxis: e,
                  yAxis: r,
                  zAxis: n,
                  width: 2 * A,
                  height: 2 * A,
                  size: P,
                  node: { x: c, y: d, z: b },
                  tooltipPayload: O,
                  tooltipPosition: { x, y: w },
                  payload: t,
                },
                f && f[o] && f[o].props,
              );
            });
          return V({ points: O }, c);
        });
      var Q = r(36058),
        tt = r(55241),
        et = r(5608),
        rt = (0, n.gu)({
          chartName: "ComposedChart",
          GraphicalChild: [a.N, i.G, o.y, Y],
          axisComponents: [
            { axisType: "xAxis", AxisComp: Q.W },
            { axisType: "yAxis", AxisComp: tt.h },
            { axisType: "zAxis", AxisComp: k },
          ],
          formatAxisMap: et.pr,
        });
    },
    69235: (t, e, r) => {
      r.d(e, { u: () => m });
      var n = r(90018),
        i = r(90626),
        o = r(51504),
        a = r.n(o),
        l = r(91038),
        c = r(97380),
        s = r(50247);
      function u(t) {
        return (
          (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          u(t)
        );
      }
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                y(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function y(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != u(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != u(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == u(n) ? n : n + "") in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function h(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                i,
                o,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((o = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = o.call(r)).done) &&
                    (l.push(n.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return d(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return d(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var m = (0, i.forwardRef)(function (t, e) {
        var r = t.aspect,
          o = t.initialDimension,
          u = void 0 === o ? { width: -1, height: -1 } : o,
          f = t.width,
          y = void 0 === f ? "100%" : f,
          d = t.height,
          m = void 0 === d ? "100%" : d,
          v = t.minWidth,
          b = void 0 === v ? 0 : v,
          g = t.minHeight,
          O = t.maxHeight,
          x = t.children,
          w = t.debounce,
          P = void 0 === w ? 0 : w,
          A = t.id,
          j = t.className,
          E = t.onResize,
          S = t.style,
          k = void 0 === S ? {} : S,
          D = (0, i.useRef)(null),
          z = (0, i.useRef)();
        (z.current = E),
          (0, i.useImperativeHandle)(e, function () {
            return Object.defineProperty(D.current, "current", {
              get: function () {
                return (
                  console.warn(
                    "The usage of ref.current.current is deprecated and will no longer be supported.",
                  ),
                  D.current
                );
              },
              configurable: !0,
            });
          });
        var N = h(
            (0, i.useState)({
              containerWidth: u.width,
              containerHeight: u.height,
            }),
            2,
          ),
          T = N[0],
          C = N[1],
          I = (0, i.useCallback)(function (t, e) {
            C(function (r) {
              var n = Math.round(t),
                i = Math.round(e);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []);
        (0, i.useEffect)(
          function () {
            var t = function (t) {
              var e,
                r = t[0].contentRect,
                n = r.width,
                i = r.height;
              I(n, i),
                null === (e = z.current) || void 0 === e || e.call(z, n, i);
            };
            P > 0 && (t = a()(t, P, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              r = D.current.getBoundingClientRect(),
              n = r.width,
              i = r.height;
            return (
              I(n, i),
              e.observe(D.current),
              function () {
                e.disconnect();
              }
            );
          },
          [I, P],
        );
        var R = (0, i.useMemo)(
          function () {
            var t = T.containerWidth,
              e = T.containerHeight;
            if (t < 0 || e < 0) return null;
            (0, c.R)(
              (0, l._3)(y) || (0, l._3)(m),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              y,
              m,
            ),
              (0, c.R)(
                !r || r > 0,
                "The aspect(%s) must be greater than zero.",
                r,
              );
            var n = (0, l._3)(y) ? t : y,
              o = (0, l._3)(m) ? e : m;
            r &&
              r > 0 &&
              (n ? (o = n / r) : o && (n = o * r), O && o > O && (o = O)),
              (0, c.R)(
                n > 0 || o > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                n,
                o,
                y,
                m,
                b,
                g,
                r,
              );
            var a = !Array.isArray(x) && (0, s.Mn)(x.type).endsWith("Chart");
            return i.Children.map(x, function (t) {
              return i.isValidElement(t)
                ? (0, i.cloneElement)(
                    t,
                    p(
                      { width: n, height: o },
                      a
                        ? {
                            style: p(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: o,
                                maxWidth: n,
                              },
                              t.props.style,
                            ),
                          }
                        : {},
                    ),
                  )
                : t;
            });
          },
          [r, x, m, O, g, b, T, y],
        );
        return i.createElement(
          "div",
          {
            id: A ? "".concat(A) : void 0,
            className: (0, n.A)("recharts-responsive-container", j),
            style: p(
              p({}, k),
              {},
              { width: y, height: m, minWidth: b, minHeight: g, maxHeight: O },
            ),
            ref: D,
          },
          R,
        );
      });
    },
  },
]);
