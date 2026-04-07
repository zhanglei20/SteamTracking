/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1784],
  {
    86679: (e, r, t) => {
      t.d(r, { JY: () => Li, sx: () => bo, gL: () => xo });
      var n = t(90626),
        i = t(42891),
        o = t(58584),
        a = t(54883);
      function u(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var l =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        c = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        s = {
          INIT: "@@redux/INIT" + c(),
          REPLACE: "@@redux/REPLACE" + c(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + c();
          },
        };
      function d(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var r = e; null !== Object.getPrototypeOf(r); )
          r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(e) === r;
      }
      function p(e, r, t) {
        var n;
        if (
          ("function" == typeof r && "function" == typeof t) ||
          ("function" == typeof t && "function" == typeof arguments[3])
        )
          throw new Error(u(0));
        if (
          ("function" == typeof r && void 0 === t && ((t = r), (r = void 0)),
          void 0 !== t)
        ) {
          if ("function" != typeof t) throw new Error(u(1));
          return t(p)(e, r);
        }
        if ("function" != typeof e) throw new Error(u(2));
        var i = e,
          o = r,
          a = [],
          c = a,
          f = !1;
        function g() {
          c === a && (c = a.slice());
        }
        function v() {
          if (f) throw new Error(u(3));
          return o;
        }
        function m(e) {
          if ("function" != typeof e) throw new Error(u(4));
          if (f) throw new Error(u(5));
          var r = !0;
          return (
            g(),
            c.push(e),
            function () {
              if (r) {
                if (f) throw new Error(u(6));
                (r = !1), g();
                var t = c.indexOf(e);
                c.splice(t, 1), (a = null);
              }
            }
          );
        }
        function b(e) {
          if (!d(e)) throw new Error(u(7));
          if (void 0 === e.type) throw new Error(u(8));
          if (f) throw new Error(u(9));
          try {
            (f = !0), (o = i(o, e));
          } finally {
            f = !1;
          }
          for (var r = (a = c), t = 0; t < r.length; t++) {
            (0, r[t])();
          }
          return e;
        }
        return (
          b({ type: s.INIT }),
          ((n = {
            dispatch: b,
            subscribe: m,
            getState: v,
            replaceReducer: function (e) {
              if ("function" != typeof e) throw new Error(u(10));
              (i = e), b({ type: s.REPLACE });
            },
          })[l] = function () {
            var e,
              r = m;
            return (
              ((e = {
                subscribe: function (e) {
                  if ("object" != typeof e || null === e)
                    throw new Error(u(11));
                  function t() {
                    e.next && e.next(v());
                  }
                  return t(), { unsubscribe: r(t) };
                },
              })[l] = function () {
                return this;
              }),
              e
            );
          }),
          n
        );
      }
      function f(e, r) {
        return function () {
          return r(e.apply(this, arguments));
        };
      }
      function g(e, r) {
        if ("function" == typeof e) return f(e, r);
        if ("object" != typeof e || null === e) throw new Error(u(16));
        var t = {};
        for (var n in e) {
          var i = e[n];
          "function" == typeof i && (t[n] = f(i, r));
        }
        return t;
      }
      function v() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
          r[t] = arguments[t];
        return 0 === r.length
          ? function (e) {
              return e;
            }
          : 1 === r.length
            ? r[0]
            : r.reduce(function (e, r) {
                return function () {
                  return e(r.apply(void 0, arguments));
                };
              });
      }
      var m = n.createContext(null);
      var b = function (e) {
          e();
        },
        h = function () {
          return b;
        };
      var y = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function I(e, r) {
        var t,
          n = y;
        function i() {
          a.onStateChange && a.onStateChange();
        }
        function o() {
          t ||
            ((t = r ? r.addNestedSub(i) : e.subscribe(i)),
            (n = (function () {
              var e = h(),
                r = null,
                t = null;
              return {
                clear: function () {
                  (r = null), (t = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = r; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], t = r; t; ) e.push(t), (t = t.next);
                  return e;
                },
                subscribe: function (e) {
                  var n = !0,
                    i = (t = { callback: e, next: null, prev: t });
                  return (
                    i.prev ? (i.prev.next = i) : (r = i),
                    function () {
                      n &&
                        null !== r &&
                        ((n = !1),
                        i.next ? (i.next.prev = i.prev) : (t = i.prev),
                        i.prev ? (i.prev.next = i.next) : (r = i.next));
                    }
                  );
                },
              };
            })()));
        }
        var a = {
          addNestedSub: function (e) {
            return o(), n.subscribe(e);
          },
          notifyNestedSubs: function () {
            n.notify();
          },
          handleChangeWrapper: i,
          isSubscribed: function () {
            return Boolean(t);
          },
          trySubscribe: o,
          tryUnsubscribe: function () {
            t && (t(), (t = void 0), n.clear(), (n = y));
          },
          getListeners: function () {
            return n;
          },
        };
        return a;
      }
      var x =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? n.useLayoutEffect
          : n.useEffect;
      const D = function (e) {
        var r = e.store,
          t = e.context,
          i = e.children,
          o = (0, n.useMemo)(
            function () {
              var e = I(r);
              return { store: r, subscription: e };
            },
            [r],
          ),
          a = (0, n.useMemo)(
            function () {
              return r.getState();
            },
            [r],
          );
        x(
          function () {
            var e = o.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              a !== r.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [o, a],
        );
        var u = t || m;
        return n.createElement(u.Provider, { value: o }, i);
      };
      var w = t(81115),
        E = t(904),
        A = t.n(E),
        C = t(44019),
        P = [
          "getDisplayName",
          "methodName",
          "renderCountProp",
          "shouldHandleStateChanges",
          "storeKey",
          "withRef",
          "forwardRef",
          "context",
        ],
        S = ["reactReduxForwardedRef"],
        N = [],
        O = [null, null];
      function R(e, r) {
        var t = e[1];
        return [r.payload, t + 1];
      }
      function B(e, r, t) {
        x(function () {
          return e.apply(void 0, r);
        }, t);
      }
      function T(e, r, t, n, i, o, a) {
        (e.current = n),
          (r.current = i),
          (t.current = !1),
          o.current && ((o.current = null), a());
      }
      function L(e, r, t, n, i, o, a, u, l, c) {
        if (e) {
          var s = !1,
            d = null,
            p = function () {
              if (!s) {
                var e,
                  t,
                  p = r.getState();
                try {
                  e = n(p, i.current);
                } catch (e) {
                  (t = e), (d = e);
                }
                t || (d = null),
                  e === o.current
                    ? a.current || l()
                    : ((o.current = e),
                      (u.current = e),
                      (a.current = !0),
                      c({ type: "STORE_UPDATED", payload: { error: t } }));
              }
            };
          (t.onStateChange = p), t.trySubscribe(), p();
          return function () {
            if (((s = !0), t.tryUnsubscribe(), (t.onStateChange = null), d))
              throw d;
          };
        }
      }
      var G = function () {
        return [null, 0];
      };
      function M(e, r) {
        void 0 === r && (r = {});
        var t = r,
          i = t.getDisplayName,
          a =
            void 0 === i
              ? function (e) {
                  return "ConnectAdvanced(" + e + ")";
                }
              : i,
          u = t.methodName,
          l = void 0 === u ? "connectAdvanced" : u,
          c = t.renderCountProp,
          s = void 0 === c ? void 0 : c,
          d = t.shouldHandleStateChanges,
          p = void 0 === d || d,
          f = t.storeKey,
          g = void 0 === f ? "store" : f,
          v = (t.withRef, t.forwardRef),
          b = void 0 !== v && v,
          h = t.context,
          y = void 0 === h ? m : h,
          x = (0, w.A)(t, P),
          D = y;
        return function (r) {
          var t = r.displayName || r.name || "Component",
            i = a(t),
            u = (0, o.A)({}, x, {
              getDisplayName: a,
              methodName: l,
              renderCountProp: s,
              shouldHandleStateChanges: p,
              storeKey: g,
              displayName: i,
              wrappedComponentName: t,
              WrappedComponent: r,
            }),
            c = x.pure;
          var d = c
            ? n.useMemo
            : function (e) {
                return e();
              };
          function f(t) {
            var i = (0, n.useMemo)(
                function () {
                  var e = t.reactReduxForwardedRef,
                    r = (0, w.A)(t, S);
                  return [t.context, e, r];
                },
                [t],
              ),
              a = i[0],
              l = i[1],
              c = i[2],
              s = (0, n.useMemo)(
                function () {
                  return a &&
                    a.Consumer &&
                    (0, C.isContextConsumer)(n.createElement(a.Consumer, null))
                    ? a
                    : D;
                },
                [a, D],
              ),
              f = (0, n.useContext)(s),
              g =
                Boolean(t.store) &&
                Boolean(t.store.getState) &&
                Boolean(t.store.dispatch);
            Boolean(f) && Boolean(f.store);
            var v = g ? t.store : f.store,
              m = (0, n.useMemo)(
                function () {
                  return (function (r) {
                    return e(r.dispatch, u);
                  })(v);
                },
                [v],
              ),
              b = (0, n.useMemo)(
                function () {
                  if (!p) return O;
                  var e = I(v, g ? null : f.subscription),
                    r = e.notifyNestedSubs.bind(e);
                  return [e, r];
                },
                [v, g, f],
              ),
              h = b[0],
              y = b[1],
              x = (0, n.useMemo)(
                function () {
                  return g ? f : (0, o.A)({}, f, { subscription: h });
                },
                [g, f, h],
              ),
              E = (0, n.useReducer)(R, N, G),
              A = E[0][0],
              P = E[1];
            if (A && A.error) throw A.error;
            var M = (0, n.useRef)(),
              _ = (0, n.useRef)(c),
              F = (0, n.useRef)(),
              W = (0, n.useRef)(!1),
              k = d(
                function () {
                  return F.current && c === _.current
                    ? F.current
                    : m(v.getState(), c);
                },
                [v, A, c],
              );
            B(T, [_, M, W, c, k, F, y]),
              B(L, [p, v, h, m, _, M, W, F, y, P], [v, h, m]);
            var U = (0, n.useMemo)(
              function () {
                return n.createElement(r, (0, o.A)({}, k, { ref: l }));
              },
              [l, r, k],
            );
            return (0, n.useMemo)(
              function () {
                return p ? n.createElement(s.Provider, { value: x }, U) : U;
              },
              [s, U, x],
            );
          }
          var v = c ? n.memo(f) : f;
          if (
            ((v.WrappedComponent = r), (v.displayName = f.displayName = i), b)
          ) {
            var m = n.forwardRef(function (e, r) {
              return n.createElement(
                v,
                (0, o.A)({}, e, { reactReduxForwardedRef: r }),
              );
            });
            return (m.displayName = i), (m.WrappedComponent = r), A()(m, r);
          }
          return A()(v, r);
        };
      }
      function _(e, r) {
        return e === r
          ? 0 !== e || 0 !== r || 1 / e == 1 / r
          : e != e && r != r;
      }
      function F(e, r) {
        if (_(e, r)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof r ||
          null === r
        )
          return !1;
        var t = Object.keys(e),
          n = Object.keys(r);
        if (t.length !== n.length) return !1;
        for (var i = 0; i < t.length; i++)
          if (
            !Object.prototype.hasOwnProperty.call(r, t[i]) ||
            !_(e[t[i]], r[t[i]])
          )
            return !1;
        return !0;
      }
      function W(e) {
        return function (r, t) {
          var n = e(r, t);
          function i() {
            return n;
          }
          return (i.dependsOnOwnProps = !1), i;
        };
      }
      function k(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function U(e, r) {
        return function (r, t) {
          t.displayName;
          var n = function (e, r) {
            return n.dependsOnOwnProps ? n.mapToProps(e, r) : n.mapToProps(e);
          };
          return (
            (n.dependsOnOwnProps = !0),
            (n.mapToProps = function (r, t) {
              (n.mapToProps = e), (n.dependsOnOwnProps = k(e));
              var i = n(r, t);
              return (
                "function" == typeof i &&
                  ((n.mapToProps = i),
                  (n.dependsOnOwnProps = k(i)),
                  (i = n(r, t))),
                i
              );
            }),
            n
          );
        };
      }
      const j = [
        function (e) {
          return "function" == typeof e ? U(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : W(function (e) {
                return { dispatch: e };
              });
        },
        function (e) {
          return e && "object" == typeof e
            ? W(function (r) {
                return (function (e, r) {
                  var t = {},
                    n = function (n) {
                      var i = e[n];
                      "function" == typeof i &&
                        (t[n] = function () {
                          return r(i.apply(void 0, arguments));
                        });
                    };
                  for (var i in e) n(i);
                  return t;
                })(e, r);
              })
            : void 0;
        },
      ];
      const H = [
        function (e) {
          return "function" == typeof e ? U(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : W(function () {
                return {};
              });
        },
      ];
      function q(e, r, t) {
        return (0, o.A)({}, t, e, r);
      }
      const V = [
        function (e) {
          return "function" == typeof e
            ? (function (e) {
                return function (r, t) {
                  t.displayName;
                  var n,
                    i = t.pure,
                    o = t.areMergedPropsEqual,
                    a = !1;
                  return function (r, t, u) {
                    var l = e(r, t, u);
                    return (
                      a ? (i && o(l, n)) || (n = l) : ((a = !0), (n = l)), n
                    );
                  };
                };
              })(e)
            : void 0;
        },
        function (e) {
          return e
            ? void 0
            : function () {
                return q;
              };
        },
      ];
      var z = [
        "initMapStateToProps",
        "initMapDispatchToProps",
        "initMergeProps",
      ];
      function Y(e, r, t, n) {
        return function (i, o) {
          return t(e(i, o), r(n, o), o);
        };
      }
      function J(e, r, t, n, i) {
        var o,
          a,
          u,
          l,
          c,
          s = i.areStatesEqual,
          d = i.areOwnPropsEqual,
          p = i.areStatePropsEqual,
          f = !1;
        function g(i, f) {
          var g,
            v,
            m = !d(f, a),
            b = !s(i, o, f, a);
          return (
            (o = i),
            (a = f),
            m && b
              ? ((u = e(o, a)),
                r.dependsOnOwnProps && (l = r(n, a)),
                (c = t(u, l, a)))
              : m
                ? (e.dependsOnOwnProps && (u = e(o, a)),
                  r.dependsOnOwnProps && (l = r(n, a)),
                  (c = t(u, l, a)))
                : b
                  ? ((g = e(o, a)),
                    (v = !p(g, u)),
                    (u = g),
                    v && (c = t(u, l, a)),
                    c)
                  : c
          );
        }
        return function (i, s) {
          return f
            ? g(i, s)
            : ((u = e((o = i), (a = s))),
              (l = r(n, a)),
              (c = t(u, l, a)),
              (f = !0),
              c);
        };
      }
      function X(e, r) {
        var t = r.initMapStateToProps,
          n = r.initMapDispatchToProps,
          i = r.initMergeProps,
          o = (0, w.A)(r, z),
          a = t(e, o),
          u = n(e, o),
          l = i(e, o);
        return (o.pure ? J : Y)(a, u, l, e, o);
      }
      var K = [
        "pure",
        "areStatesEqual",
        "areOwnPropsEqual",
        "areStatePropsEqual",
        "areMergedPropsEqual",
      ];
      function $(e, r, t) {
        for (var n = r.length - 1; n >= 0; n--) {
          var i = r[n](e);
          if (i) return i;
        }
        return function (r, n) {
          throw new Error(
            "Invalid value of type " +
              typeof e +
              " for " +
              t +
              " argument when connecting component " +
              n.wrappedComponentName +
              ".",
          );
        };
      }
      function Q(e, r) {
        return e === r;
      }
      function Z(e) {
        var r = void 0 === e ? {} : e,
          t = r.connectHOC,
          n = void 0 === t ? M : t,
          i = r.mapStateToPropsFactories,
          a = void 0 === i ? H : i,
          u = r.mapDispatchToPropsFactories,
          l = void 0 === u ? j : u,
          c = r.mergePropsFactories,
          s = void 0 === c ? V : c,
          d = r.selectorFactory,
          p = void 0 === d ? X : d;
        return function (e, r, t, i) {
          void 0 === i && (i = {});
          var u = i,
            c = u.pure,
            d = void 0 === c || c,
            f = u.areStatesEqual,
            g = void 0 === f ? Q : f,
            v = u.areOwnPropsEqual,
            m = void 0 === v ? F : v,
            b = u.areStatePropsEqual,
            h = void 0 === b ? F : b,
            y = u.areMergedPropsEqual,
            I = void 0 === y ? F : y,
            x = (0, w.A)(u, K),
            D = $(e, a, "mapStateToProps"),
            E = $(r, l, "mapDispatchToProps"),
            A = $(t, s, "mergeProps");
          return n(
            p,
            (0, o.A)(
              {
                methodName: "connect",
                getDisplayName: function (e) {
                  return "Connect(" + e + ")";
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: D,
                initMapDispatchToProps: E,
                initMergeProps: A,
                pure: d,
                areStatesEqual: g,
                areOwnPropsEqual: m,
                areStatePropsEqual: h,
                areMergedPropsEqual: I,
              },
              x,
            ),
          );
        };
      }
      const ee = Z();
      var re,
        te = t(72739);
      function ne(e, r) {
        var t = (0, n.useState)(function () {
            return { inputs: r, result: e() };
          })[0],
          i = (0, n.useRef)(!0),
          o = (0, n.useRef)(t),
          a =
            i.current ||
            Boolean(
              r &&
                o.current.inputs &&
                (function (e, r) {
                  if (e.length !== r.length) return !1;
                  for (var t = 0; t < e.length; t++)
                    if (e[t] !== r[t]) return !1;
                  return !0;
                })(r, o.current.inputs),
            )
              ? o.current
              : { inputs: r, result: e() };
        return (
          (0, n.useEffect)(
            function () {
              (i.current = !1), (o.current = a);
            },
            [a],
          ),
          a.result
        );
      }
      (re = te.unstable_batchedUpdates), (b = re);
      var ie = ne,
        oe = function (e, r) {
          return ne(function () {
            return e;
          }, r);
        },
        ae = t(68841),
        ue = function (e) {
          var r = e.top,
            t = e.right,
            n = e.bottom,
            i = e.left;
          return {
            top: r,
            right: t,
            bottom: n,
            left: i,
            width: t - i,
            height: n - r,
            x: i,
            y: r,
            center: { x: (t + i) / 2, y: (n + r) / 2 },
          };
        },
        le = function (e, r) {
          return {
            top: e.top - r.top,
            left: e.left - r.left,
            bottom: e.bottom + r.bottom,
            right: e.right + r.right,
          };
        },
        ce = function (e, r) {
          return {
            top: e.top + r.top,
            left: e.left + r.left,
            bottom: e.bottom - r.bottom,
            right: e.right - r.right,
          };
        },
        se = { top: 0, right: 0, bottom: 0, left: 0 },
        de = function (e) {
          var r = e.borderBox,
            t = e.margin,
            n = void 0 === t ? se : t,
            i = e.border,
            o = void 0 === i ? se : i,
            a = e.padding,
            u = void 0 === a ? se : a,
            l = ue(le(r, n)),
            c = ue(ce(r, o)),
            s = ue(ce(c, u));
          return {
            marginBox: l,
            borderBox: ue(r),
            paddingBox: c,
            contentBox: s,
            margin: n,
            border: o,
            padding: u,
          };
        },
        pe = function (e) {
          var r = e.slice(0, -2);
          if ("px" !== e.slice(-2)) return 0;
          var t = Number(r);
          return isNaN(t) && (0, ae.A)(!1), t;
        },
        fe = function (e, r) {
          var t,
            n,
            i = e.borderBox,
            o = e.border,
            a = e.margin,
            u = e.padding,
            l =
              ((n = r),
              {
                top: (t = i).top + n.y,
                left: t.left + n.x,
                bottom: t.bottom + n.y,
                right: t.right + n.x,
              });
          return de({ borderBox: l, border: o, margin: a, padding: u });
        },
        ge = function (e, r) {
          return (
            void 0 === r &&
              (r = { x: window.pageXOffset, y: window.pageYOffset }),
            fe(e, r)
          );
        },
        ve = function (e, r) {
          var t = {
              top: pe(r.marginTop),
              right: pe(r.marginRight),
              bottom: pe(r.marginBottom),
              left: pe(r.marginLeft),
            },
            n = {
              top: pe(r.paddingTop),
              right: pe(r.paddingRight),
              bottom: pe(r.paddingBottom),
              left: pe(r.paddingLeft),
            },
            i = {
              top: pe(r.borderTopWidth),
              right: pe(r.borderRightWidth),
              bottom: pe(r.borderBottomWidth),
              left: pe(r.borderLeftWidth),
            };
          return de({ borderBox: e, margin: t, padding: n, border: i });
        },
        me = function (e) {
          var r = e.getBoundingClientRect(),
            t = window.getComputedStyle(e);
          return ve(r, t);
        },
        be =
          Number.isNaN ||
          function (e) {
            return "number" == typeof e && e != e;
          };
      function he(e, r) {
        return e === r || !(!be(e) || !be(r));
      }
      function ye(e, r) {
        if (e.length !== r.length) return !1;
        for (var t = 0; t < e.length; t++) if (!he(e[t], r[t])) return !1;
        return !0;
      }
      const Ie = function (e, r) {
        var t;
        void 0 === r && (r = ye);
        var n,
          i = [],
          o = !1;
        return function () {
          for (var a = [], u = 0; u < arguments.length; u++)
            a[u] = arguments[u];
          return (
            (o && t === this && r(a, i)) ||
              ((n = e.apply(this, a)), (o = !0), (t = this), (i = a)),
            n
          );
        };
      };
      const xe = function (e) {
        var r = [],
          t = null,
          n = function () {
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            (r = i),
              t ||
                (t = requestAnimationFrame(function () {
                  (t = null), e.apply(void 0, r);
                }));
          };
        return (
          (n.cancel = function () {
            t && (cancelAnimationFrame(t), (t = null));
          }),
          n
        );
      };
      function De(e, r) {}
      De.bind(null, "warn"), De.bind(null, "error");
      function we() {}
      function Ee(e, r, t) {
        var n = r.map(function (r) {
          var n = (function (e, r) {
            return (0, o.A)({}, e, {}, r);
          })(t, r.options);
          return (
            e.addEventListener(r.eventName, r.fn, n),
            function () {
              e.removeEventListener(r.eventName, r.fn, n);
            }
          );
        });
        return function () {
          n.forEach(function (e) {
            e();
          });
        };
      }
      var Ae = !0,
        Ce = "Invariant failed";
      function Pe(e) {
        this.message = e;
      }
      function Se(e, r) {
        if (!e) throw new Pe(Ae ? Ce : Ce + ": " + (r || ""));
      }
      Pe.prototype.toString = function () {
        return this.message;
      };
      var Ne = (function (e) {
          function r() {
            for (
              var r, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            return (
              ((r = e.call.apply(e, [this].concat(n)) || this).callbacks =
                null),
              (r.unbind = we),
              (r.onWindowError = function (e) {
                var t = r.getCallbacks();
                t.isDragging() && t.tryAbort(),
                  e.error instanceof Pe && e.preventDefault();
              }),
              (r.getCallbacks = function () {
                if (!r.callbacks)
                  throw new Error(
                    "Unable to find AppCallbacks in <ErrorBoundary/>",
                  );
                return r.callbacks;
              }),
              (r.setCallbacks = function (e) {
                r.callbacks = e;
              }),
              r
            );
          }
          (0, i.A)(r, e);
          var t = r.prototype;
          return (
            (t.componentDidMount = function () {
              this.unbind = Ee(window, [
                { eventName: "error", fn: this.onWindowError },
              ]);
            }),
            (t.componentDidCatch = function (e) {
              if (!(e instanceof Pe)) throw e;
              this.setState({});
            }),
            (t.componentWillUnmount = function () {
              this.unbind();
            }),
            (t.render = function () {
              return this.props.children(this.setCallbacks);
            }),
            r
          );
        })(n.Component),
        Oe = function (e) {
          return e + 1;
        },
        Re = function (e, r) {
          var t = e.droppableId === r.droppableId,
            n = Oe(e.index),
            i = Oe(r.index);
          return t
            ? "\n      You have moved the item from position " +
                n +
                "\n      to position " +
                i +
                "\n    "
            : "\n    You have moved the item from position " +
                n +
                "\n    in list " +
                e.droppableId +
                "\n    to list " +
                r.droppableId +
                "\n    in position " +
                i +
                "\n  ";
        },
        Be = function (e, r, t) {
          return r.droppableId === t.droppableId
            ? "\n      The item " +
                e +
                "\n      has been combined with " +
                t.draggableId
            : "\n      The item " +
                e +
                "\n      in list " +
                r.droppableId +
                "\n      has been combined with " +
                t.draggableId +
                "\n      in list " +
                t.droppableId +
                "\n    ";
        },
        Te = function (e) {
          return (
            "\n  The item has returned to its starting position\n  of " +
            Oe(e.index) +
            "\n"
          );
        },
        Le = {
          dragHandleUsageInstructions:
            "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
          onDragStart: function (e) {
            return (
              "\n  You have lifted an item in position " +
              Oe(e.source.index) +
              "\n"
            );
          },
          onDragUpdate: function (e) {
            var r = e.destination;
            if (r) return Re(e.source, r);
            var t = e.combine;
            return t
              ? Be(e.draggableId, e.source, t)
              : "You are over an area that cannot be dropped on";
          },
          onDragEnd: function (e) {
            if ("CANCEL" === e.reason)
              return (
                "\n      Movement cancelled.\n      " + Te(e.source) + "\n    "
              );
            var r = e.destination,
              t = e.combine;
            return r
              ? "\n      You have dropped the item.\n      " +
                  Re(e.source, r) +
                  "\n    "
              : t
                ? "\n      You have dropped the item.\n      " +
                  Be(e.draggableId, e.source, t) +
                  "\n    "
                : "\n    The item has been dropped while not over a drop area.\n    " +
                  Te(e.source) +
                  "\n  ";
          },
        },
        Ge = { x: 0, y: 0 },
        Me = function (e, r) {
          return { x: e.x + r.x, y: e.y + r.y };
        },
        _e = function (e, r) {
          return { x: e.x - r.x, y: e.y - r.y };
        },
        Fe = function (e, r) {
          return e.x === r.x && e.y === r.y;
        },
        We = function (e) {
          return { x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 };
        },
        ke = function (e, r, t) {
          var n;
          return (
            void 0 === t && (t = 0),
            ((n = {})[e] = r),
            (n["x" === e ? "y" : "x"] = t),
            n
          );
        },
        Ue = function (e, r) {
          return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
        },
        je = function (e, r) {
          return Math.min.apply(
            Math,
            r.map(function (r) {
              return Ue(e, r);
            }),
          );
        },
        He = function (e) {
          return function (r) {
            return { x: e(r.x), y: e(r.y) };
          };
        },
        qe = function (e, r) {
          return {
            top: e.top + r.y,
            left: e.left + r.x,
            bottom: e.bottom + r.y,
            right: e.right + r.x,
          };
        },
        Ve = function (e) {
          return [
            { x: e.left, y: e.top },
            { x: e.right, y: e.top },
            { x: e.left, y: e.bottom },
            { x: e.right, y: e.bottom },
          ];
        },
        ze = function (e, r) {
          return r && r.shouldClipSubject
            ? (function (e, r) {
                var t = ue({
                  top: Math.max(r.top, e.top),
                  right: Math.min(r.right, e.right),
                  bottom: Math.min(r.bottom, e.bottom),
                  left: Math.max(r.left, e.left),
                });
                return t.width <= 0 || t.height <= 0 ? null : t;
              })(r.pageMarginBox, e)
            : ue(e);
        },
        Ye = function (e) {
          var r = e.page,
            t = e.withPlaceholder,
            n = e.axis,
            i = e.frame,
            a = (function (e, r) {
              return r ? qe(e, r.scroll.diff.displacement) : e;
            })(r.marginBox, i),
            u = (function (e, r, t) {
              var n;
              return t && t.increasedBy
                ? (0, o.A)(
                    {},
                    e,
                    (((n = {})[r.end] = e[r.end] + t.increasedBy[r.line]), n),
                  )
                : e;
            })(a, n, t);
          return { page: r, withPlaceholder: t, active: ze(u, i) };
        },
        Je = function (e, r) {
          e.frame || Se(!1);
          var t = e.frame,
            n = _e(r, t.scroll.initial),
            i = We(n),
            a = (0, o.A)({}, t, {
              scroll: {
                initial: t.scroll.initial,
                current: r,
                diff: { value: n, displacement: i },
                max: t.scroll.max,
              },
            }),
            u = Ye({
              page: e.subject.page,
              withPlaceholder: e.subject.withPlaceholder,
              axis: e.axis,
              frame: a,
            });
          return (0, o.A)({}, e, { frame: a, subject: u });
        };
      function Xe(e) {
        return Object.values
          ? Object.values(e)
          : Object.keys(e).map(function (r) {
              return e[r];
            });
      }
      function Ke(e, r) {
        if (e.findIndex) return e.findIndex(r);
        for (var t = 0; t < e.length; t++) if (r(e[t])) return t;
        return -1;
      }
      function $e(e, r) {
        if (e.find) return e.find(r);
        var t = Ke(e, r);
        return -1 !== t ? e[t] : void 0;
      }
      var Qe = Ie(function (e) {
          return e.reduce(function (e, r) {
            return (e[r.descriptor.id] = r), e;
          }, {});
        }),
        Ze = Ie(function (e) {
          return e.reduce(function (e, r) {
            return (e[r.descriptor.id] = r), e;
          }, {});
        }),
        er = Ie(function (e) {
          return Xe(e);
        }),
        rr = Ie(function (e) {
          return Xe(e);
        }),
        tr = Ie(function (e, r) {
          var t = rr(r)
            .filter(function (r) {
              return e === r.descriptor.droppableId;
            })
            .sort(function (e, r) {
              return e.descriptor.index - r.descriptor.index;
            });
          return t;
        });
      function nr(e) {
        return e.at && "REORDER" === e.at.type ? e.at.destination : null;
      }
      function ir(e) {
        return e.at && "COMBINE" === e.at.type ? e.at.combine : null;
      }
      var or = Ie(function (e, r) {
          return r.filter(function (r) {
            return r.descriptor.id !== e.descriptor.id;
          });
        }),
        ar = function (e, r) {
          return e.descriptor.droppableId === r.descriptor.id;
        },
        ur = { point: Ge, value: 0 },
        lr = { invisible: {}, visible: {}, all: [] },
        cr = { displaced: lr, displacedBy: ur, at: null },
        sr = function (e, r) {
          return function (t) {
            return e <= t && t <= r;
          };
        },
        dr = function (e) {
          var r = sr(e.top, e.bottom),
            t = sr(e.left, e.right);
          return function (n) {
            if (r(n.top) && r(n.bottom) && t(n.left) && t(n.right)) return !0;
            var i = r(n.top) || r(n.bottom),
              o = t(n.left) || t(n.right);
            if (i && o) return !0;
            var a = n.top < e.top && n.bottom > e.bottom,
              u = n.left < e.left && n.right > e.right;
            return !(!a || !u) || (a && o) || (u && i);
          };
        },
        pr = function (e) {
          var r = sr(e.top, e.bottom),
            t = sr(e.left, e.right);
          return function (e) {
            return r(e.top) && r(e.bottom) && t(e.left) && t(e.right);
          };
        },
        fr = {
          direction: "vertical",
          line: "y",
          crossAxisLine: "x",
          start: "top",
          end: "bottom",
          size: "height",
          crossAxisStart: "left",
          crossAxisEnd: "right",
          crossAxisSize: "width",
        },
        gr = {
          direction: "horizontal",
          line: "x",
          crossAxisLine: "y",
          start: "left",
          end: "right",
          size: "width",
          crossAxisStart: "top",
          crossAxisEnd: "bottom",
          crossAxisSize: "height",
        },
        vr = function (e) {
          var r = e.target,
            t = e.destination,
            n = e.viewport,
            i = e.withDroppableDisplacement,
            o = e.isVisibleThroughFrameFn,
            a = i
              ? (function (e, r) {
                  var t = r.frame ? r.frame.scroll.diff.displacement : Ge;
                  return qe(e, t);
                })(r, t)
              : r;
          return (
            (function (e, r, t) {
              return !!r.subject.active && t(r.subject.active)(e);
            })(a, t, o) &&
            (function (e, r, t) {
              return t(r)(e);
            })(a, n, o)
          );
        },
        mr = function (e) {
          return vr((0, o.A)({}, e, { isVisibleThroughFrameFn: dr }));
        },
        br = function (e) {
          return vr((0, o.A)({}, e, { isVisibleThroughFrameFn: pr }));
        };
      function hr(e) {
        var r = e.afterDragging,
          t = e.destination,
          n = e.displacedBy,
          i = e.viewport,
          o = e.forceShouldAnimate,
          a = e.last;
        return r.reduce(
          function (e, r) {
            var u = (function (e, r) {
                var t = e.page.marginBox,
                  n = { top: r.point.y, right: 0, bottom: 0, left: r.point.x };
                return ue(le(t, n));
              })(r, n),
              l = r.descriptor.id;
            if (
              (e.all.push(l),
              !mr({
                target: u,
                destination: t,
                viewport: i,
                withDroppableDisplacement: !0,
              }))
            )
              return (e.invisible[r.descriptor.id] = !0), e;
            var c = (function (e, r, t) {
                if ("boolean" == typeof t) return t;
                if (!r) return !0;
                var n = r.invisible,
                  i = r.visible;
                if (n[e]) return !1;
                var o = i[e];
                return !o || o.shouldAnimate;
              })(l, a, o),
              s = { draggableId: l, shouldAnimate: c };
            return (e.visible[l] = s), e;
          },
          { all: [], visible: {}, invisible: {} },
        );
      }
      function yr(e) {
        var r = e.insideDestination,
          t = e.inHomeList,
          n = e.displacedBy,
          i = e.destination,
          o = (function (e, r) {
            if (!e.length) return 0;
            var t = e[e.length - 1].descriptor.index;
            return r.inHomeList ? t : t + 1;
          })(r, { inHomeList: t });
        return {
          displaced: lr,
          displacedBy: n,
          at: {
            type: "REORDER",
            destination: { droppableId: i.descriptor.id, index: o },
          },
        };
      }
      function Ir(e) {
        var r = e.draggable,
          t = e.insideDestination,
          n = e.destination,
          i = e.viewport,
          o = e.displacedBy,
          a = e.last,
          u = e.index,
          l = e.forceShouldAnimate,
          c = ar(r, n);
        if (null == u)
          return yr({
            insideDestination: t,
            inHomeList: c,
            displacedBy: o,
            destination: n,
          });
        var s = $e(t, function (e) {
          return e.descriptor.index === u;
        });
        if (!s)
          return yr({
            insideDestination: t,
            inHomeList: c,
            displacedBy: o,
            destination: n,
          });
        var d = or(r, t),
          p = t.indexOf(s);
        return {
          displaced: hr({
            afterDragging: d.slice(p),
            destination: n,
            displacedBy: o,
            last: a,
            viewport: i.frame,
            forceShouldAnimate: l,
          }),
          displacedBy: o,
          at: {
            type: "REORDER",
            destination: { droppableId: n.descriptor.id, index: u },
          },
        };
      }
      function xr(e, r) {
        return Boolean(r.effected[e]);
      }
      var Dr = function (e) {
          var r = e.isMovingForward,
            t = e.isInHomeList,
            n = e.draggable,
            i = e.draggables,
            o = e.destination,
            a = e.insideDestination,
            u = e.previousImpact,
            l = e.viewport,
            c = e.afterCritical,
            s = u.at;
          if ((s || Se(!1), "REORDER" === s.type)) {
            var d = (function (e) {
              var r = e.isMovingForward,
                t = e.isInHomeList,
                n = e.insideDestination,
                i = e.location;
              if (!n.length) return null;
              var o = i.index,
                a = r ? o + 1 : o - 1,
                u = n[0].descriptor.index,
                l = n[n.length - 1].descriptor.index;
              return a < u || a > (t ? l : l + 1) ? null : a;
            })({
              isMovingForward: r,
              isInHomeList: t,
              location: s.destination,
              insideDestination: a,
            });
            return null == d
              ? null
              : Ir({
                  draggable: n,
                  insideDestination: a,
                  destination: o,
                  viewport: l,
                  last: u.displaced,
                  displacedBy: u.displacedBy,
                  index: d,
                });
          }
          var p = (function (e) {
            var r = e.isMovingForward,
              t = e.destination,
              n = e.draggables,
              i = e.combine,
              o = e.afterCritical;
            if (!t.isCombineEnabled) return null;
            var a = i.draggableId,
              u = n[a].descriptor.index;
            return xr(a, o) ? (r ? u : u - 1) : r ? u + 1 : u;
          })({
            isMovingForward: r,
            destination: o,
            displaced: u.displaced,
            draggables: i,
            combine: s.combine,
            afterCritical: c,
          });
          return null == p
            ? null
            : Ir({
                draggable: n,
                insideDestination: a,
                destination: o,
                viewport: l,
                last: u.displaced,
                displacedBy: u.displacedBy,
                index: p,
              });
        },
        wr = function (e) {
          var r = e.afterCritical,
            t = e.impact,
            n = e.draggables,
            i = ir(t);
          i || Se(!1);
          var o = i.draggableId,
            a = n[o].page.borderBox.center,
            u = (function (e) {
              var r = e.displaced,
                t = e.afterCritical,
                n = e.combineWith,
                i = e.displacedBy,
                o = Boolean(r.visible[n] || r.invisible[n]);
              return xr(n, t) ? (o ? Ge : We(i.point)) : o ? i.point : Ge;
            })({
              displaced: t.displaced,
              afterCritical: r,
              combineWith: o,
              displacedBy: t.displacedBy,
            });
          return Me(a, u);
        },
        Er = function (e, r) {
          return r.margin[e.start] + r.borderBox[e.size] / 2;
        },
        Ar = function (e, r, t) {
          return (
            r[e.crossAxisStart] +
            t.margin[e.crossAxisStart] +
            t.borderBox[e.crossAxisSize] / 2
          );
        },
        Cr = function (e) {
          var r = e.axis,
            t = e.moveRelativeTo,
            n = e.isMoving;
          return ke(
            r.line,
            t.marginBox[r.end] + Er(r, n),
            Ar(r, t.marginBox, n),
          );
        },
        Pr = function (e) {
          var r = e.axis,
            t = e.moveRelativeTo,
            n = e.isMoving;
          return ke(
            r.line,
            t.marginBox[r.start] -
              (function (e, r) {
                return r.margin[e.end] + r.borderBox[e.size] / 2;
              })(r, n),
            Ar(r, t.marginBox, n),
          );
        },
        Sr = function (e) {
          var r = e.impact,
            t = e.draggable,
            n = e.draggables,
            i = e.droppable,
            o = e.afterCritical,
            a = tr(i.descriptor.id, n),
            u = t.page,
            l = i.axis;
          if (!a.length)
            return (function (e) {
              var r = e.axis,
                t = e.moveInto,
                n = e.isMoving;
              return ke(
                r.line,
                t.contentBox[r.start] + Er(r, n),
                Ar(r, t.contentBox, n),
              );
            })({ axis: l, moveInto: i.page, isMoving: u });
          var c = r.displaced,
            s = r.displacedBy,
            d = c.all[0];
          if (d) {
            var p = n[d];
            if (xr(d, o))
              return Pr({ axis: l, moveRelativeTo: p.page, isMoving: u });
            var f = fe(p.page, s.point);
            return Pr({ axis: l, moveRelativeTo: f, isMoving: u });
          }
          var g = a[a.length - 1];
          if (g.descriptor.id === t.descriptor.id) return u.borderBox.center;
          if (xr(g.descriptor.id, o)) {
            var v = fe(g.page, We(o.displacedBy.point));
            return Cr({ axis: l, moveRelativeTo: v, isMoving: u });
          }
          return Cr({ axis: l, moveRelativeTo: g.page, isMoving: u });
        },
        Nr = function (e, r) {
          var t = e.frame;
          return t ? Me(r, t.scroll.diff.displacement) : r;
        },
        Or = function (e) {
          var r = (function (e) {
              var r = e.impact,
                t = e.draggable,
                n = e.droppable,
                i = e.draggables,
                o = e.afterCritical,
                a = t.page.borderBox.center,
                u = r.at;
              return n && u
                ? "REORDER" === u.type
                  ? Sr({
                      impact: r,
                      draggable: t,
                      draggables: i,
                      droppable: n,
                      afterCritical: o,
                    })
                  : wr({ impact: r, draggables: i, afterCritical: o })
                : a;
            })(e),
            t = e.droppable;
          return t ? Nr(t, r) : r;
        },
        Rr = function (e, r) {
          var t = _e(r, e.scroll.initial),
            n = We(t);
          return {
            frame: ue({
              top: r.y,
              bottom: r.y + e.frame.height,
              left: r.x,
              right: r.x + e.frame.width,
            }),
            scroll: {
              initial: e.scroll.initial,
              max: e.scroll.max,
              current: r,
              diff: { value: t, displacement: n },
            },
          };
        };
      function Br(e, r) {
        return e.map(function (e) {
          return r[e];
        });
      }
      var Tr = function (e) {
          var r = e.pageBorderBoxCenter,
            t = e.draggable,
            n = (function (e, r) {
              return Me(e.scroll.diff.displacement, r);
            })(e.viewport, r),
            i = _e(n, t.page.borderBox.center);
          return Me(t.client.borderBox.center, i);
        },
        Lr = function (e) {
          var r = e.draggable,
            t = e.destination,
            n = e.newPageBorderBoxCenter,
            i = e.viewport,
            a = e.withDroppableDisplacement,
            u = e.onlyOnMainAxis,
            l = void 0 !== u && u,
            c = _e(n, r.page.borderBox.center),
            s = {
              target: qe(r.page.borderBox, c),
              destination: t,
              withDroppableDisplacement: a,
              viewport: i,
            };
          return l
            ? (function (e) {
                return vr(
                  (0, o.A)({}, e, {
                    isVisibleThroughFrameFn:
                      ((r = e.destination.axis),
                      function (e) {
                        var t = sr(e.top, e.bottom),
                          n = sr(e.left, e.right);
                        return function (e) {
                          return r === fr
                            ? t(e.top) && t(e.bottom)
                            : n(e.left) && n(e.right);
                        };
                      }),
                  }),
                );
                var r;
              })(s)
            : br(s);
        },
        Gr = function (e) {
          var r = e.isMovingForward,
            t = e.draggable,
            n = e.destination,
            i = e.draggables,
            a = e.previousImpact,
            u = e.viewport,
            l = e.previousPageBorderBoxCenter,
            c = e.previousClientSelection,
            s = e.afterCritical;
          if (!n.isEnabled) return null;
          var d = tr(n.descriptor.id, i),
            p = ar(t, n),
            f =
              (function (e) {
                var r = e.isMovingForward,
                  t = e.draggable,
                  n = e.destination,
                  i = e.insideDestination,
                  a = e.previousImpact;
                if (!n.isCombineEnabled) return null;
                if (!nr(a)) return null;
                function u(e) {
                  var r = {
                    type: "COMBINE",
                    combine: { draggableId: e, droppableId: n.descriptor.id },
                  };
                  return (0, o.A)({}, a, { at: r });
                }
                var l = a.displaced.all,
                  c = l.length ? l[0] : null;
                if (r) return c ? u(c) : null;
                var s = or(t, i);
                if (!c)
                  return s.length ? u(s[s.length - 1].descriptor.id) : null;
                var d = Ke(s, function (e) {
                  return e.descriptor.id === c;
                });
                -1 === d && Se(!1);
                var p = d - 1;
                return p < 0 ? null : u(s[p].descriptor.id);
              })({
                isMovingForward: r,
                draggable: t,
                destination: n,
                insideDestination: d,
                previousImpact: a,
              }) ||
              Dr({
                isMovingForward: r,
                isInHomeList: p,
                draggable: t,
                draggables: i,
                destination: n,
                insideDestination: d,
                previousImpact: a,
                viewport: u,
                afterCritical: s,
              });
          if (!f) return null;
          var g = Or({
            impact: f,
            draggable: t,
            droppable: n,
            draggables: i,
            afterCritical: s,
          });
          if (
            Lr({
              draggable: t,
              destination: n,
              newPageBorderBoxCenter: g,
              viewport: u.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
          )
            return {
              clientSelection: Tr({
                pageBorderBoxCenter: g,
                draggable: t,
                viewport: u,
              }),
              impact: f,
              scrollJumpRequest: null,
            };
          var v = _e(g, l),
            m = (function (e) {
              var r = e.impact,
                t = e.viewport,
                n = e.destination,
                i = e.draggables,
                a = e.maxScrollChange,
                u = Rr(t, Me(t.scroll.current, a)),
                l = n.frame ? Je(n, Me(n.frame.scroll.current, a)) : n,
                c = r.displaced,
                s = hr({
                  afterDragging: Br(c.all, i),
                  destination: n,
                  displacedBy: r.displacedBy,
                  viewport: u.frame,
                  last: c,
                  forceShouldAnimate: !1,
                }),
                d = hr({
                  afterDragging: Br(c.all, i),
                  destination: l,
                  displacedBy: r.displacedBy,
                  viewport: t.frame,
                  last: c,
                  forceShouldAnimate: !1,
                }),
                p = {},
                f = {},
                g = [c, s, d];
              return (
                c.all.forEach(function (e) {
                  var r = (function (e, r) {
                    for (var t = 0; t < r.length; t++) {
                      var n = r[t].visible[e];
                      if (n) return n;
                    }
                    return null;
                  })(e, g);
                  r ? (f[e] = r) : (p[e] = !0);
                }),
                (0, o.A)({}, r, {
                  displaced: { all: c.all, invisible: p, visible: f },
                })
              );
            })({
              impact: f,
              viewport: u,
              destination: n,
              draggables: i,
              maxScrollChange: v,
            });
          return { clientSelection: c, impact: m, scrollJumpRequest: v };
        },
        Mr = function (e) {
          var r = e.subject.active;
          return r || Se(!1), r;
        },
        _r = function (e, r) {
          var t = e.page.borderBox.center;
          return xr(e.descriptor.id, r) ? _e(t, r.displacedBy.point) : t;
        },
        Fr = function (e, r) {
          var t = e.page.borderBox;
          return xr(e.descriptor.id, r) ? qe(t, We(r.displacedBy.point)) : t;
        },
        Wr = Ie(function (e, r) {
          var t = r[e.line];
          return { value: t, point: ke(e.line, t) };
        }),
        kr = function (e, r) {
          return (0, o.A)({}, e, {
            scroll: (0, o.A)({}, e.scroll, { max: r }),
          });
        },
        Ur = function (e, r, t) {
          var n = e.frame;
          ar(r, e) && Se(!1), e.subject.withPlaceholder && Se(!1);
          var i = Wr(e.axis, r.displaceBy).point,
            a = (function (e, r, t) {
              var n = e.axis;
              if ("virtual" === e.descriptor.mode) return ke(n.line, r[n.line]);
              var i = e.subject.page.contentBox[n.size],
                o =
                  tr(e.descriptor.id, t).reduce(function (e, r) {
                    return e + r.client.marginBox[n.size];
                  }, 0) +
                  r[n.line] -
                  i;
              return o <= 0 ? null : ke(n.line, o);
            })(e, i, t),
            u = {
              placeholderSize: i,
              increasedBy: a,
              oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
            };
          if (!n) {
            var l = Ye({
              page: e.subject.page,
              withPlaceholder: u,
              axis: e.axis,
              frame: e.frame,
            });
            return (0, o.A)({}, e, { subject: l });
          }
          var c = a ? Me(n.scroll.max, a) : n.scroll.max,
            s = kr(n, c),
            d = Ye({
              page: e.subject.page,
              withPlaceholder: u,
              axis: e.axis,
              frame: s,
            });
          return (0, o.A)({}, e, { subject: d, frame: s });
        },
        jr = function (e) {
          var r = e.isMovingForward,
            t = e.previousPageBorderBoxCenter,
            n = e.draggable,
            i = e.isOver,
            o = e.draggables,
            a = e.droppables,
            u = e.viewport,
            l = e.afterCritical,
            c = (function (e) {
              var r = e.isMovingForward,
                t = e.pageBorderBoxCenter,
                n = e.source,
                i = e.droppables,
                o = e.viewport,
                a = n.subject.active;
              if (!a) return null;
              var u = n.axis,
                l = sr(a[u.start], a[u.end]),
                c = er(i)
                  .filter(function (e) {
                    return e !== n;
                  })
                  .filter(function (e) {
                    return e.isEnabled;
                  })
                  .filter(function (e) {
                    return Boolean(e.subject.active);
                  })
                  .filter(function (e) {
                    return dr(o.frame)(Mr(e));
                  })
                  .filter(function (e) {
                    var t = Mr(e);
                    return r
                      ? a[u.crossAxisEnd] < t[u.crossAxisEnd]
                      : t[u.crossAxisStart] < a[u.crossAxisStart];
                  })
                  .filter(function (e) {
                    var r = Mr(e),
                      t = sr(r[u.start], r[u.end]);
                    return (
                      l(r[u.start]) ||
                      l(r[u.end]) ||
                      t(a[u.start]) ||
                      t(a[u.end])
                    );
                  })
                  .sort(function (e, t) {
                    var n = Mr(e)[u.crossAxisStart],
                      i = Mr(t)[u.crossAxisStart];
                    return r ? n - i : i - n;
                  })
                  .filter(function (e, r, t) {
                    return (
                      Mr(e)[u.crossAxisStart] === Mr(t[0])[u.crossAxisStart]
                    );
                  });
              if (!c.length) return null;
              if (1 === c.length) return c[0];
              var s = c.filter(function (e) {
                return sr(Mr(e)[u.start], Mr(e)[u.end])(t[u.line]);
              });
              return 1 === s.length
                ? s[0]
                : s.length > 1
                  ? s.sort(function (e, r) {
                      return Mr(e)[u.start] - Mr(r)[u.start];
                    })[0]
                  : c.sort(function (e, r) {
                      var n = je(t, Ve(Mr(e))),
                        i = je(t, Ve(Mr(r)));
                      return n !== i ? n - i : Mr(e)[u.start] - Mr(r)[u.start];
                    })[0];
            })({
              isMovingForward: r,
              pageBorderBoxCenter: t,
              source: i,
              droppables: a,
              viewport: u,
            });
          if (!c) return null;
          var s = tr(c.descriptor.id, o),
            d = (function (e) {
              var r = e.pageBorderBoxCenter,
                t = e.viewport,
                n = e.destination,
                i = e.insideDestination,
                o = e.afterCritical,
                a = i
                  .filter(function (e) {
                    return br({
                      target: Fr(e, o),
                      destination: n,
                      viewport: t.frame,
                      withDroppableDisplacement: !0,
                    });
                  })
                  .sort(function (e, t) {
                    var i = Ue(r, Nr(n, _r(e, o))),
                      a = Ue(r, Nr(n, _r(t, o)));
                    return i < a
                      ? -1
                      : a < i
                        ? 1
                        : e.descriptor.index - t.descriptor.index;
                  });
              return a[0] || null;
            })({
              pageBorderBoxCenter: t,
              viewport: u,
              destination: c,
              insideDestination: s,
              afterCritical: l,
            }),
            p = (function (e) {
              var r = e.previousPageBorderBoxCenter,
                t = e.moveRelativeTo,
                n = e.insideDestination,
                i = e.draggable,
                o = e.draggables,
                a = e.destination,
                u = e.viewport,
                l = e.afterCritical;
              if (!t) {
                if (n.length) return null;
                var c = {
                    displaced: lr,
                    displacedBy: ur,
                    at: {
                      type: "REORDER",
                      destination: { droppableId: a.descriptor.id, index: 0 },
                    },
                  },
                  s = Or({
                    impact: c,
                    draggable: i,
                    droppable: a,
                    draggables: o,
                    afterCritical: l,
                  }),
                  d = ar(i, a) ? a : Ur(a, i, o);
                return Lr({
                  draggable: i,
                  destination: d,
                  newPageBorderBoxCenter: s,
                  viewport: u.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0,
                })
                  ? c
                  : null;
              }
              var p,
                f = Boolean(
                  r[a.axis.line] <= t.page.borderBox.center[a.axis.line],
                ),
                g =
                  ((p = t.descriptor.index),
                  t.descriptor.id === i.descriptor.id || f ? p : p + 1),
                v = Wr(a.axis, i.displaceBy);
              return Ir({
                draggable: i,
                insideDestination: n,
                destination: a,
                viewport: u,
                displacedBy: v,
                last: lr,
                index: g,
              });
            })({
              previousPageBorderBoxCenter: t,
              destination: c,
              draggable: n,
              draggables: o,
              moveRelativeTo: d,
              insideDestination: s,
              viewport: u,
              afterCritical: l,
            });
          if (!p) return null;
          var f = Or({
            impact: p,
            draggable: n,
            droppable: c,
            draggables: o,
            afterCritical: l,
          });
          return {
            clientSelection: Tr({
              pageBorderBoxCenter: f,
              draggable: n,
              viewport: u,
            }),
            impact: p,
            scrollJumpRequest: null,
          };
        },
        Hr = function (e) {
          var r = e.at;
          return r
            ? "REORDER" === r.type
              ? r.destination.droppableId
              : r.combine.droppableId
            : null;
        },
        qr = function (e) {
          var r = e.state,
            t = e.type,
            n = (function (e, r) {
              var t = Hr(e);
              return t ? r[t] : null;
            })(r.impact, r.dimensions.droppables),
            i = Boolean(n),
            o = r.dimensions.droppables[r.critical.droppable.id],
            a = n || o,
            u = a.axis.direction,
            l =
              ("vertical" === u && ("MOVE_UP" === t || "MOVE_DOWN" === t)) ||
              ("horizontal" === u && ("MOVE_LEFT" === t || "MOVE_RIGHT" === t));
          if (l && !i) return null;
          var c = "MOVE_DOWN" === t || "MOVE_RIGHT" === t,
            s = r.dimensions.draggables[r.critical.draggable.id],
            d = r.current.page.borderBoxCenter,
            p = r.dimensions,
            f = p.draggables,
            g = p.droppables;
          return l
            ? Gr({
                isMovingForward: c,
                previousPageBorderBoxCenter: d,
                draggable: s,
                destination: a,
                draggables: f,
                viewport: r.viewport,
                previousClientSelection: r.current.client.selection,
                previousImpact: r.impact,
                afterCritical: r.afterCritical,
              })
            : jr({
                isMovingForward: c,
                previousPageBorderBoxCenter: d,
                draggable: s,
                isOver: a,
                draggables: f,
                droppables: g,
                viewport: r.viewport,
                afterCritical: r.afterCritical,
              });
        };
      function Vr(e) {
        return "DRAGGING" === e.phase || "COLLECTING" === e.phase;
      }
      function zr(e) {
        var r = sr(e.top, e.bottom),
          t = sr(e.left, e.right);
        return function (e) {
          return r(e.y) && t(e.x);
        };
      }
      function Yr(e) {
        var r = e.pageBorderBox,
          t = e.draggable,
          n = e.droppables,
          i = er(n).filter(function (e) {
            if (!e.isEnabled) return !1;
            var t,
              n,
              i = e.subject.active;
            if (!i) return !1;
            if (
              ((n = i),
              !(
                (t = r).left < n.right &&
                t.right > n.left &&
                t.top < n.bottom &&
                t.bottom > n.top
              ))
            )
              return !1;
            if (zr(i)(r.center)) return !0;
            var o = e.axis,
              a = i.center[o.crossAxisLine],
              u = r[o.crossAxisStart],
              l = r[o.crossAxisEnd],
              c = sr(i[o.crossAxisStart], i[o.crossAxisEnd]),
              s = c(u),
              d = c(l);
            return (!s && !d) || (s ? u < a : l > a);
          });
        return i.length
          ? 1 === i.length
            ? i[0].descriptor.id
            : (function (e) {
                var r = e.pageBorderBox,
                  t = e.draggable,
                  n = e.candidates,
                  i = t.page.borderBox.center,
                  o = n
                    .map(function (e) {
                      var t = e.axis,
                        n = ke(
                          e.axis.line,
                          r.center[t.line],
                          e.page.borderBox.center[t.crossAxisLine],
                        );
                      return { id: e.descriptor.id, distance: Ue(i, n) };
                    })
                    .sort(function (e, r) {
                      return r.distance - e.distance;
                    });
                return o[0] ? o[0].id : null;
              })({ pageBorderBox: r, draggable: t, candidates: i })
          : null;
      }
      var Jr = function (e, r) {
        return ue(qe(e, r));
      };
      function Xr(e) {
        var r = e.displaced,
          t = e.id;
        return Boolean(r.visible[t] || r.invisible[t]);
      }
      var Kr = function (e) {
          var r = e.pageOffset,
            t = e.draggable,
            n = e.draggables,
            i = e.droppables,
            o = e.previousImpact,
            a = e.viewport,
            u = e.afterCritical,
            l = Jr(t.page.borderBox, r),
            c = Yr({ pageBorderBox: l, draggable: t, droppables: i });
          if (!c) return cr;
          var s = i[c],
            d = tr(s.descriptor.id, n),
            p = (function (e, r) {
              var t = e.frame;
              return t ? Jr(r, t.scroll.diff.value) : r;
            })(s, l);
          return (
            (function (e) {
              var r = e.draggable,
                t = e.pageBorderBoxWithDroppableScroll,
                n = e.previousImpact,
                i = e.destination,
                o = e.insideDestination,
                a = e.afterCritical;
              if (!i.isCombineEnabled) return null;
              var u = i.axis,
                l = Wr(i.axis, r.displaceBy),
                c = l.value,
                s = t[u.start],
                d = t[u.end],
                p = $e(or(r, o), function (e) {
                  var r = e.descriptor.id,
                    t = e.page.borderBox,
                    i = t[u.size] / 4,
                    o = xr(r, a),
                    l = Xr({ displaced: n.displaced, id: r });
                  return o
                    ? l
                      ? d > t[u.start] + i && d < t[u.end] - i
                      : s > t[u.start] - c + i && s < t[u.end] - c - i
                    : l
                      ? d > t[u.start] + c + i && d < t[u.end] + c - i
                      : s > t[u.start] + i && s < t[u.end] - i;
                });
              return p
                ? {
                    displacedBy: l,
                    displaced: n.displaced,
                    at: {
                      type: "COMBINE",
                      combine: {
                        draggableId: p.descriptor.id,
                        droppableId: i.descriptor.id,
                      },
                    },
                  }
                : null;
            })({
              pageBorderBoxWithDroppableScroll: p,
              draggable: t,
              previousImpact: o,
              destination: s,
              insideDestination: d,
              afterCritical: u,
            }) ||
            (function (e) {
              var r = e.pageBorderBoxWithDroppableScroll,
                t = e.draggable,
                n = e.destination,
                i = e.insideDestination,
                o = e.last,
                a = e.viewport,
                u = e.afterCritical,
                l = n.axis,
                c = Wr(n.axis, t.displaceBy),
                s = c.value,
                d = r[l.start],
                p = r[l.end],
                f = (function (e) {
                  var r = e.draggable,
                    t = e.closest,
                    n = e.inHomeList;
                  return t
                    ? n && t.descriptor.index > r.descriptor.index
                      ? t.descriptor.index - 1
                      : t.descriptor.index
                    : null;
                })({
                  draggable: t,
                  closest: $e(or(t, i), function (e) {
                    var r = e.descriptor.id,
                      t = e.page.borderBox.center[l.line],
                      n = xr(r, u),
                      i = Xr({ displaced: o, id: r });
                    return n
                      ? i
                        ? p <= t
                        : d < t - s
                      : i
                        ? p <= t + s
                        : d < t;
                  }),
                  inHomeList: ar(t, n),
                });
              return Ir({
                draggable: t,
                insideDestination: i,
                destination: n,
                viewport: a,
                last: o,
                displacedBy: c,
                index: f,
              });
            })({
              pageBorderBoxWithDroppableScroll: p,
              draggable: t,
              destination: s,
              insideDestination: d,
              last: o.displaced,
              viewport: a,
              afterCritical: u,
            })
          );
        },
        $r = function (e, r) {
          var t;
          return (0, o.A)({}, e, (((t = {})[r.descriptor.id] = r), t));
        },
        Qr = function (e) {
          var r = e.previousImpact,
            t = e.impact,
            n = e.droppables,
            i = Hr(r),
            a = Hr(t);
          if (!i) return n;
          if (i === a) return n;
          var u = n[i];
          if (!u.subject.withPlaceholder) return n;
          var l = (function (e) {
            var r = e.subject.withPlaceholder;
            r || Se(!1);
            var t = e.frame;
            if (!t) {
              var n = Ye({
                page: e.subject.page,
                axis: e.axis,
                frame: null,
                withPlaceholder: null,
              });
              return (0, o.A)({}, e, { subject: n });
            }
            var i = r.oldFrameMaxScroll;
            i || Se(!1);
            var a = kr(t, i),
              u = Ye({
                page: e.subject.page,
                axis: e.axis,
                frame: a,
                withPlaceholder: null,
              });
            return (0, o.A)({}, e, { subject: u, frame: a });
          })(u);
          return $r(n, l);
        },
        Zr = function (e) {
          var r = e.state,
            t = e.clientSelection,
            n = e.dimensions,
            i = e.viewport,
            a = e.impact,
            u = e.scrollJumpRequest,
            l = i || r.viewport,
            c = n || r.dimensions,
            s = t || r.current.client.selection,
            d = _e(s, r.initial.client.selection),
            p = {
              offset: d,
              selection: s,
              borderBoxCenter: Me(r.initial.client.borderBoxCenter, d),
            },
            f = {
              selection: Me(p.selection, l.scroll.current),
              borderBoxCenter: Me(p.borderBoxCenter, l.scroll.current),
              offset: Me(p.offset, l.scroll.diff.value),
            },
            g = { client: p, page: f };
          if ("COLLECTING" === r.phase)
            return (0, o.A)({ phase: "COLLECTING" }, r, {
              dimensions: c,
              viewport: l,
              current: g,
            });
          var v = c.draggables[r.critical.draggable.id],
            m =
              a ||
              Kr({
                pageOffset: f.offset,
                draggable: v,
                draggables: c.draggables,
                droppables: c.droppables,
                previousImpact: r.impact,
                viewport: l,
                afterCritical: r.afterCritical,
              }),
            b = (function (e) {
              var r = e.draggable,
                t = e.draggables,
                n = e.droppables,
                i = e.previousImpact,
                o = e.impact,
                a = Qr({ previousImpact: i, impact: o, droppables: n }),
                u = Hr(o);
              if (!u) return a;
              var l = n[u];
              if (ar(r, l)) return a;
              if (l.subject.withPlaceholder) return a;
              var c = Ur(l, r, t);
              return $r(a, c);
            })({
              draggable: v,
              impact: m,
              previousImpact: r.impact,
              draggables: c.draggables,
              droppables: c.droppables,
            });
          return (0, o.A)({}, r, {
            current: g,
            dimensions: { draggables: c.draggables, droppables: b },
            impact: m,
            viewport: l,
            scrollJumpRequest: u || null,
            forceShouldAnimate: !u && null,
          });
        };
      var et = function (e) {
          var r = e.impact,
            t = e.viewport,
            n = e.draggables,
            i = e.destination,
            a = e.forceShouldAnimate,
            u = r.displaced,
            l = (function (e, r) {
              return e.map(function (e) {
                return r[e];
              });
            })(u.all, n),
            c = hr({
              afterDragging: l,
              destination: i,
              displacedBy: r.displacedBy,
              viewport: t.frame,
              forceShouldAnimate: a,
              last: u,
            });
          return (0, o.A)({}, r, { displaced: c });
        },
        rt = function (e) {
          var r = e.impact,
            t = e.draggable,
            n = e.droppable,
            i = e.draggables,
            o = e.viewport,
            a = e.afterCritical,
            u = Or({
              impact: r,
              draggable: t,
              draggables: i,
              droppable: n,
              afterCritical: a,
            });
          return Tr({ pageBorderBoxCenter: u, draggable: t, viewport: o });
        },
        tt = function (e) {
          var r = e.state,
            t = e.dimensions,
            n = e.viewport;
          "SNAP" !== r.movementMode && Se(!1);
          var i = r.impact,
            o = n || r.viewport,
            a = t || r.dimensions,
            u = a.draggables,
            l = a.droppables,
            c = u[r.critical.draggable.id],
            s = Hr(i);
          s || Se(!1);
          var d = l[s],
            p = et({ impact: i, viewport: o, destination: d, draggables: u }),
            f = rt({
              impact: p,
              draggable: c,
              droppable: d,
              draggables: u,
              viewport: o,
              afterCritical: r.afterCritical,
            });
          return Zr({
            impact: p,
            clientSelection: f,
            state: r,
            dimensions: a,
            viewport: o,
          });
        },
        nt = function (e) {
          var r = e.draggable,
            t = e.home,
            n = e.draggables,
            i = e.viewport,
            o = Wr(t.axis, r.displaceBy),
            a = tr(t.descriptor.id, n),
            u = a.indexOf(r);
          -1 === u && Se(!1);
          var l,
            c = a.slice(u + 1),
            s = c.reduce(function (e, r) {
              return (e[r.descriptor.id] = !0), e;
            }, {}),
            d = {
              inVirtualList: "virtual" === t.descriptor.mode,
              displacedBy: o,
              effected: s,
            };
          return {
            impact: {
              displaced: hr({
                afterDragging: c,
                destination: t,
                displacedBy: o,
                last: null,
                viewport: i.frame,
                forceShouldAnimate: !1,
              }),
              displacedBy: o,
              at: {
                type: "REORDER",
                destination:
                  ((l = r.descriptor),
                  { index: l.index, droppableId: l.droppableId }),
              },
            },
            afterCritical: d,
          };
        },
        it = function (e) {
          0;
        },
        ot = function (e) {
          0;
        },
        at = function (e) {
          var r = e.additions,
            t = e.updatedDroppables,
            n = e.viewport,
            i = n.scroll.diff.value;
          return r.map(function (e) {
            var r = e.descriptor.droppableId,
              a = (function (e) {
                var r = e.frame;
                return r || Se(!1), r;
              })(t[r]),
              u = a.scroll.diff.value,
              l = (function (e) {
                var r = e.draggable,
                  t = e.offset,
                  n = e.initialWindowScroll,
                  i = fe(r.client, t),
                  a = ge(i, n);
                return (0, o.A)({}, r, {
                  placeholder: (0, o.A)({}, r.placeholder, { client: i }),
                  client: i,
                  page: a,
                });
              })({
                draggable: e,
                offset: Me(i, u),
                initialWindowScroll: n.scroll.initial,
              });
            return l;
          });
        },
        ut = function (e) {
          return "SNAP" === e.movementMode;
        },
        lt = function (e, r, t) {
          var n = (function (e, r) {
            return {
              draggables: e.draggables,
              droppables: $r(e.droppables, r),
            };
          })(e.dimensions, r);
          return !ut(e) || t
            ? Zr({ state: e, dimensions: n })
            : tt({ state: e, dimensions: n });
        };
      function ct(e) {
        return e.isDragging && "SNAP" === e.movementMode
          ? (0, o.A)({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
          : e;
      }
      var st = { phase: "IDLE", completed: null, shouldFlush: !1 },
        dt = function (e, r) {
          if ((void 0 === e && (e = st), "FLUSH" === r.type))
            return (0, o.A)({}, st, { shouldFlush: !0 });
          if ("INITIAL_PUBLISH" === r.type) {
            "IDLE" !== e.phase && Se(!1);
            var t = r.payload,
              n = t.critical,
              i = t.clientSelection,
              a = t.viewport,
              u = t.dimensions,
              l = t.movementMode,
              c = u.draggables[n.draggable.id],
              s = u.droppables[n.droppable.id],
              d = {
                selection: i,
                borderBoxCenter: c.client.borderBox.center,
                offset: Ge,
              },
              p = {
                client: d,
                page: {
                  selection: Me(d.selection, a.scroll.initial),
                  borderBoxCenter: Me(d.selection, a.scroll.initial),
                  offset: Me(d.selection, a.scroll.diff.value),
                },
              },
              f = er(u.droppables).every(function (e) {
                return !e.isFixedOnPage;
              }),
              g = nt({
                draggable: c,
                home: s,
                draggables: u.draggables,
                viewport: a,
              }),
              v = g.impact;
            return {
              phase: "DRAGGING",
              isDragging: !0,
              critical: n,
              movementMode: l,
              dimensions: u,
              initial: p,
              current: p,
              isWindowScrollAllowed: f,
              impact: v,
              afterCritical: g.afterCritical,
              onLiftImpact: v,
              viewport: a,
              scrollJumpRequest: null,
              forceShouldAnimate: null,
            };
          }
          if ("COLLECTION_STARTING" === r.type)
            return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase
              ? e
              : ("DRAGGING" !== e.phase && Se(!1),
                (0, o.A)({ phase: "COLLECTING" }, e, { phase: "COLLECTING" }));
          if ("PUBLISH_WHILE_DRAGGING" === r.type)
            return (
              "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && Se(!1),
              (function (e) {
                var r = e.state,
                  t = e.published;
                it();
                var n = t.modified.map(function (e) {
                    var t = r.dimensions.droppables[e.droppableId];
                    return Je(t, e.scroll);
                  }),
                  i = (0, o.A)({}, r.dimensions.droppables, {}, Qe(n)),
                  a = Ze(
                    at({
                      additions: t.additions,
                      updatedDroppables: i,
                      viewport: r.viewport,
                    }),
                  ),
                  u = (0, o.A)({}, r.dimensions.draggables, {}, a);
                t.removals.forEach(function (e) {
                  delete u[e];
                });
                var l = { droppables: i, draggables: u },
                  c = Hr(r.impact),
                  s = c ? l.droppables[c] : null,
                  d = l.draggables[r.critical.draggable.id],
                  p = l.droppables[r.critical.droppable.id],
                  f = nt({
                    draggable: d,
                    home: p,
                    draggables: u,
                    viewport: r.viewport,
                  }),
                  g = f.impact,
                  v = f.afterCritical,
                  m = s && s.isCombineEnabled ? r.impact : g,
                  b = Kr({
                    pageOffset: r.current.page.offset,
                    draggable: l.draggables[r.critical.draggable.id],
                    draggables: l.draggables,
                    droppables: l.droppables,
                    previousImpact: m,
                    viewport: r.viewport,
                    afterCritical: v,
                  });
                ot();
                var h = (0, o.A)({ phase: "DRAGGING" }, r, {
                  phase: "DRAGGING",
                  impact: b,
                  onLiftImpact: g,
                  dimensions: l,
                  afterCritical: v,
                  forceShouldAnimate: !1,
                });
                return "COLLECTING" === r.phase
                  ? h
                  : (0, o.A)({ phase: "DROP_PENDING" }, h, {
                      phase: "DROP_PENDING",
                      reason: r.reason,
                      isWaiting: !1,
                    });
              })({ state: e, published: r.payload })
            );
          if ("MOVE" === r.type) {
            if ("DROP_PENDING" === e.phase) return e;
            Vr(e) || Se(!1);
            var m = r.payload.client;
            return Fe(m, e.current.client.selection)
              ? e
              : Zr({
                  state: e,
                  clientSelection: m,
                  impact: ut(e) ? e.impact : null,
                });
          }
          if ("UPDATE_DROPPABLE_SCROLL" === r.type) {
            if ("DROP_PENDING" === e.phase) return ct(e);
            if ("COLLECTING" === e.phase) return ct(e);
            Vr(e) || Se(!1);
            var b = r.payload,
              h = b.id,
              y = b.newScroll,
              I = e.dimensions.droppables[h];
            if (!I) return e;
            var x = Je(I, y);
            return lt(e, x, !1);
          }
          if ("UPDATE_DROPPABLE_IS_ENABLED" === r.type) {
            if ("DROP_PENDING" === e.phase) return e;
            Vr(e) || Se(!1);
            var D = r.payload,
              w = D.id,
              E = D.isEnabled,
              A = e.dimensions.droppables[w];
            A || Se(!1), A.isEnabled === E && Se(!1);
            var C = (0, o.A)({}, A, { isEnabled: E });
            return lt(e, C, !0);
          }
          if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === r.type) {
            if ("DROP_PENDING" === e.phase) return e;
            Vr(e) || Se(!1);
            var P = r.payload,
              S = P.id,
              N = P.isCombineEnabled,
              O = e.dimensions.droppables[S];
            O || Se(!1), O.isCombineEnabled === N && Se(!1);
            var R = (0, o.A)({}, O, { isCombineEnabled: N });
            return lt(e, R, !0);
          }
          if ("MOVE_BY_WINDOW_SCROLL" === r.type) {
            if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase)
              return e;
            Vr(e) || Se(!1), e.isWindowScrollAllowed || Se(!1);
            var B = r.payload.newScroll;
            if (Fe(e.viewport.scroll.current, B)) return ct(e);
            var T = Rr(e.viewport, B);
            return ut(e)
              ? tt({ state: e, viewport: T })
              : Zr({ state: e, viewport: T });
          }
          if ("UPDATE_VIEWPORT_MAX_SCROLL" === r.type) {
            if (!Vr(e)) return e;
            var L = r.payload.maxScroll;
            if (Fe(L, e.viewport.scroll.max)) return e;
            var G = (0, o.A)({}, e.viewport, {
              scroll: (0, o.A)({}, e.viewport.scroll, { max: L }),
            });
            return (0, o.A)({ phase: "DRAGGING" }, e, { viewport: G });
          }
          if (
            "MOVE_UP" === r.type ||
            "MOVE_DOWN" === r.type ||
            "MOVE_LEFT" === r.type ||
            "MOVE_RIGHT" === r.type
          ) {
            if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase)
              return e;
            "DRAGGING" !== e.phase && Se(!1);
            var M = qr({ state: e, type: r.type });
            return M
              ? Zr({
                  state: e,
                  impact: M.impact,
                  clientSelection: M.clientSelection,
                  scrollJumpRequest: M.scrollJumpRequest,
                })
              : e;
          }
          if ("DROP_PENDING" === r.type) {
            var _ = r.payload.reason;
            return (
              "COLLECTING" !== e.phase && Se(!1),
              (0, o.A)({ phase: "DROP_PENDING" }, e, {
                phase: "DROP_PENDING",
                isWaiting: !0,
                reason: _,
              })
            );
          }
          if ("DROP_ANIMATE" === r.type) {
            var F = r.payload,
              W = F.completed,
              k = F.dropDuration,
              U = F.newHomeClientOffset;
            return (
              "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && Se(!1),
              {
                phase: "DROP_ANIMATING",
                completed: W,
                dropDuration: k,
                newHomeClientOffset: U,
                dimensions: e.dimensions,
              }
            );
          }
          return "DROP_COMPLETE" === r.type
            ? { phase: "IDLE", completed: r.payload.completed, shouldFlush: !1 }
            : e;
        },
        pt = function (e) {
          return { type: "LIFT", payload: e };
        },
        ft = function (e) {
          return { type: "PUBLISH_WHILE_DRAGGING", payload: e };
        },
        gt = function () {
          return { type: "COLLECTION_STARTING", payload: null };
        },
        vt = function (e) {
          return { type: "UPDATE_DROPPABLE_SCROLL", payload: e };
        },
        mt = function (e) {
          return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e };
        },
        bt = function (e) {
          return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e };
        },
        ht = function (e) {
          return { type: "MOVE", payload: e };
        },
        yt = function () {
          return { type: "MOVE_UP", payload: null };
        },
        It = function () {
          return { type: "MOVE_DOWN", payload: null };
        },
        xt = function () {
          return { type: "MOVE_RIGHT", payload: null };
        },
        Dt = function () {
          return { type: "MOVE_LEFT", payload: null };
        },
        wt = function () {
          return { type: "FLUSH", payload: null };
        },
        Et = function (e) {
          return { type: "DROP_COMPLETE", payload: e };
        },
        At = function (e) {
          return { type: "DROP", payload: e };
        },
        Ct = function () {
          return { type: "DROP_ANIMATION_FINISHED", payload: null };
        };
      var Pt = "cubic-bezier(.2,1,.1,1)",
        St = { drop: 0, combining: 0.7 },
        Nt = { drop: 0.75 },
        Ot = 0.2 + "s " + "cubic-bezier(0.2, 0, 0, 1)",
        Rt = {
          fluid: "opacity " + Ot,
          snap: "transform " + Ot + ", opacity " + Ot,
          drop: function (e) {
            var r = e + "s " + Pt;
            return "transform " + r + ", opacity " + r;
          },
          outOfTheWay: "transform " + Ot,
          placeholder: "height " + Ot + ", width " + Ot + ", margin " + Ot,
        },
        Bt = function (e) {
          return Fe(e, Ge) ? null : "translate(" + e.x + "px, " + e.y + "px)";
        },
        Tt = Bt,
        Lt = function (e, r) {
          var t = Bt(e);
          return t ? (r ? t + " scale(" + Nt.drop + ")" : t) : null;
        },
        Gt = 0.33,
        Mt = 0.55,
        _t = Mt - Gt,
        Ft = function (e) {
          var r = e.getState,
            t = e.dispatch;
          return function (e) {
            return function (n) {
              if ("DROP" === n.type) {
                var i = r(),
                  a = n.payload.reason;
                if ("COLLECTING" !== i.phase) {
                  if ("IDLE" !== i.phase) {
                    "DROP_PENDING" === i.phase && i.isWaiting && Se(!1),
                      "DRAGGING" !== i.phase &&
                        "DROP_PENDING" !== i.phase &&
                        Se(!1);
                    var u = i.critical,
                      l = i.dimensions,
                      c = l.draggables[i.critical.draggable.id],
                      s = (function (e) {
                        var r = e.draggables,
                          t = e.reason,
                          n = e.lastImpact,
                          i = e.home,
                          a = e.viewport,
                          u = e.onLiftImpact;
                        return n.at && "DROP" === t
                          ? "REORDER" === n.at.type
                            ? { impact: n, didDropInsideDroppable: !0 }
                            : {
                                impact: (0, o.A)({}, n, { displaced: lr }),
                                didDropInsideDroppable: !0,
                              }
                          : {
                              impact: et({
                                draggables: r,
                                impact: u,
                                destination: i,
                                viewport: a,
                                forceShouldAnimate: !0,
                              }),
                              didDropInsideDroppable: !1,
                            };
                      })({
                        reason: a,
                        lastImpact: i.impact,
                        afterCritical: i.afterCritical,
                        onLiftImpact: i.onLiftImpact,
                        home: i.dimensions.droppables[i.critical.droppable.id],
                        viewport: i.viewport,
                        draggables: i.dimensions.draggables,
                      }),
                      d = s.impact,
                      p = s.didDropInsideDroppable,
                      f = p ? nr(d) : null,
                      g = p ? ir(d) : null,
                      v = {
                        index: u.draggable.index,
                        droppableId: u.droppable.id,
                      },
                      m = {
                        draggableId: c.descriptor.id,
                        type: c.descriptor.type,
                        source: v,
                        reason: a,
                        mode: i.movementMode,
                        destination: f,
                        combine: g,
                      },
                      b = (function (e) {
                        var r = e.impact,
                          t = e.draggable,
                          n = e.dimensions,
                          i = e.viewport,
                          o = e.afterCritical,
                          a = n.draggables,
                          u = n.droppables,
                          l = Hr(r),
                          c = l ? u[l] : null,
                          s = u[t.descriptor.droppableId],
                          d = rt({
                            impact: r,
                            draggable: t,
                            draggables: a,
                            afterCritical: o,
                            droppable: c || s,
                            viewport: i,
                          });
                        return _e(d, t.client.borderBox.center);
                      })({
                        impact: d,
                        draggable: c,
                        dimensions: l,
                        viewport: i.viewport,
                        afterCritical: i.afterCritical,
                      }),
                      h = {
                        critical: i.critical,
                        afterCritical: i.afterCritical,
                        result: m,
                        impact: d,
                      };
                    if (!Fe(i.current.client.offset, b) || Boolean(m.combine)) {
                      var y = (function (e) {
                        var r = e.current,
                          t = e.destination,
                          n = e.reason,
                          i = Ue(r, t);
                        if (i <= 0) return Gt;
                        if (i >= 1500) return Mt;
                        var o = Gt + _t * (i / 1500);
                        return Number(
                          ("CANCEL" === n ? 0.6 * o : o).toFixed(2),
                        );
                      })({
                        current: i.current.client.offset,
                        destination: b,
                        reason: a,
                      });
                      t(
                        (function (e) {
                          return { type: "DROP_ANIMATE", payload: e };
                        })({
                          newHomeClientOffset: b,
                          dropDuration: y,
                          completed: h,
                        }),
                      );
                    } else t(Et({ completed: h }));
                  }
                } else
                  t(
                    (function (e) {
                      return { type: "DROP_PENDING", payload: e };
                    })({ reason: a }),
                  );
              } else e(n);
            };
          };
        },
        Wt = function (e) {
          return { x: e.pageXOffset, y: e.pageYOffset };
        };
      function kt(e) {
        var r = e.onWindowScroll;
        var t = xe(function () {
            r(Wt());
          }),
          n = (function (e) {
            return {
              eventName: "scroll",
              options: { passive: !0, capture: !1 },
              fn: function (r) {
                (r.target !== window && r.target !== window.document) || e();
              },
            };
          })(t),
          i = we;
        function o() {
          return i !== we;
        }
        return {
          start: function () {
            o() && Se(!1), (i = Ee(window, [n]));
          },
          stop: function () {
            o() || Se(!1), t.cancel(), i(), (i = we);
          },
          isActive: o,
        };
      }
      var Ut = function (e) {
          var r = kt({
            onWindowScroll: function (r) {
              e.dispatch({
                type: "MOVE_BY_WINDOW_SCROLL",
                payload: { newScroll: r },
              });
            },
          });
          return function (e) {
            return function (t) {
              r.isActive() || "INITIAL_PUBLISH" !== t.type || r.start(),
                r.isActive() &&
                  (function (e) {
                    return (
                      "DROP_COMPLETE" === e.type ||
                      "DROP_ANIMATE" === e.type ||
                      "FLUSH" === e.type
                    );
                  })(t) &&
                  r.stop(),
                e(t);
            };
          };
        },
        jt = function () {
          var e = [];
          return {
            add: function (r) {
              var t = setTimeout(function () {
                  return (function (r) {
                    var t = Ke(e, function (e) {
                      return e.timerId === r;
                    });
                    -1 === t && Se(!1), e.splice(t, 1)[0].callback();
                  })(t);
                }),
                n = { timerId: t, callback: r };
              e.push(n);
            },
            flush: function () {
              if (e.length) {
                var r = [].concat(e);
                (e.length = 0),
                  r.forEach(function (e) {
                    clearTimeout(e.timerId), e.callback();
                  });
              }
            },
          };
        },
        Ht = function (e, r) {
          it(), r(), ot();
        },
        qt = function (e, r) {
          return {
            draggableId: e.draggable.id,
            type: e.droppable.type,
            source: { droppableId: e.droppable.id, index: e.draggable.index },
            mode: r,
          };
        },
        Vt = function (e, r, t, n) {
          if (e) {
            var i = (function (e) {
              var r = !1,
                t = !1,
                n = setTimeout(function () {
                  t = !0;
                }),
                i = function (i) {
                  r || t || ((r = !0), e(i), clearTimeout(n));
                };
              return (
                (i.wasCalled = function () {
                  return r;
                }),
                i
              );
            })(t);
            e(r, { announce: i }), i.wasCalled() || t(n(r));
          } else t(n(r));
        },
        zt = function (e, r) {
          var t = (function (e, r) {
            var t = jt(),
              n = null,
              i = function (t) {
                n || Se(!1),
                  (n = null),
                  Ht(0, function () {
                    return Vt(e().onDragEnd, t, r, Le.onDragEnd);
                  });
              };
            return {
              beforeCapture: function (r, t) {
                n && Se(!1),
                  Ht(0, function () {
                    var n = e().onBeforeCapture;
                    n && n({ draggableId: r, mode: t });
                  });
              },
              beforeStart: function (r, t) {
                n && Se(!1),
                  Ht(0, function () {
                    var n = e().onBeforeDragStart;
                    n && n(qt(r, t));
                  });
              },
              start: function (i, o) {
                n && Se(!1);
                var a = qt(i, o);
                (n = {
                  mode: o,
                  lastCritical: i,
                  lastLocation: a.source,
                  lastCombine: null,
                }),
                  t.add(function () {
                    Ht(0, function () {
                      return Vt(e().onDragStart, a, r, Le.onDragStart);
                    });
                  });
              },
              update: function (i, a) {
                var u = nr(a),
                  l = ir(a);
                n || Se(!1);
                var c = !(function (e, r) {
                  if (e === r) return !0;
                  var t =
                      e.draggable.id === r.draggable.id &&
                      e.draggable.droppableId === r.draggable.droppableId &&
                      e.draggable.type === r.draggable.type &&
                      e.draggable.index === r.draggable.index,
                    n =
                      e.droppable.id === r.droppable.id &&
                      e.droppable.type === r.droppable.type;
                  return t && n;
                })(i, n.lastCritical);
                c && (n.lastCritical = i);
                var s,
                  d,
                  p =
                    ((d = u),
                    !(
                      (null == (s = n.lastLocation) && null == d) ||
                      (null != s &&
                        null != d &&
                        s.droppableId === d.droppableId &&
                        s.index === d.index)
                    ));
                p && (n.lastLocation = u);
                var f = !(function (e, r) {
                  return (
                    (null == e && null == r) ||
                    (null != e &&
                      null != r &&
                      e.draggableId === r.draggableId &&
                      e.droppableId === r.droppableId)
                  );
                })(n.lastCombine, l);
                if ((f && (n.lastCombine = l), c || p || f)) {
                  var g = (0, o.A)({}, qt(i, n.mode), {
                    combine: l,
                    destination: u,
                  });
                  t.add(function () {
                    Ht(0, function () {
                      return Vt(e().onDragUpdate, g, r, Le.onDragUpdate);
                    });
                  });
                }
              },
              flush: function () {
                n || Se(!1), t.flush();
              },
              drop: i,
              abort: function () {
                if (n) {
                  var e = (0, o.A)({}, qt(n.lastCritical, n.mode), {
                    combine: null,
                    destination: null,
                    reason: "CANCEL",
                  });
                  i(e);
                }
              },
            };
          })(e, r);
          return function (e) {
            return function (r) {
              return function (n) {
                if ("BEFORE_INITIAL_CAPTURE" !== n.type) {
                  if ("INITIAL_PUBLISH" === n.type) {
                    var i = n.payload.critical;
                    return (
                      t.beforeStart(i, n.payload.movementMode),
                      r(n),
                      void t.start(i, n.payload.movementMode)
                    );
                  }
                  if ("DROP_COMPLETE" === n.type) {
                    var o = n.payload.completed.result;
                    return t.flush(), r(n), void t.drop(o);
                  }
                  if ((r(n), "FLUSH" !== n.type)) {
                    var a = e.getState();
                    "DRAGGING" === a.phase && t.update(a.critical, a.impact);
                  } else t.abort();
                } else
                  t.beforeCapture(
                    n.payload.draggableId,
                    n.payload.movementMode,
                  );
              };
            };
          };
        },
        Yt = function (e) {
          return function (r) {
            return function (t) {
              if ("DROP_ANIMATION_FINISHED" === t.type) {
                var n = e.getState();
                "DROP_ANIMATING" !== n.phase && Se(!1),
                  e.dispatch(Et({ completed: n.completed }));
              } else r(t);
            };
          };
        },
        Jt = function (e) {
          var r = null,
            t = null;
          return function (n) {
            return function (i) {
              if (
                (("FLUSH" !== i.type &&
                  "DROP_COMPLETE" !== i.type &&
                  "DROP_ANIMATION_FINISHED" !== i.type) ||
                  (t && (cancelAnimationFrame(t), (t = null)),
                  r && (r(), (r = null))),
                n(i),
                "DROP_ANIMATE" === i.type)
              ) {
                var o = {
                  eventName: "scroll",
                  options: { capture: !0, passive: !1, once: !0 },
                  fn: function () {
                    "DROP_ANIMATING" === e.getState().phase &&
                      e.dispatch({
                        type: "DROP_ANIMATION_FINISHED",
                        payload: null,
                      });
                  },
                };
                t = requestAnimationFrame(function () {
                  (t = null), (r = Ee(window, [o]));
                });
              }
            };
          };
        },
        Xt = function (e) {
          return function (r) {
            return function (t) {
              if ((r(t), "PUBLISH_WHILE_DRAGGING" === t.type)) {
                var n = e.getState();
                "DROP_PENDING" === n.phase &&
                  (n.isWaiting || e.dispatch(At({ reason: n.reason })));
              }
            };
          };
        },
        Kt = v,
        $t = function (e) {
          var r,
            t = e.dimensionMarshal,
            n = e.focusMarshal,
            i = e.styleMarshal,
            o = e.getResponders,
            l = e.announce,
            c = e.autoScroller;
          return p(
            dt,
            Kt(
              (function () {
                for (
                  var e = arguments.length, r = new Array(e), t = 0;
                  t < e;
                  t++
                )
                  r[t] = arguments[t];
                return function (e) {
                  return function () {
                    var t = e.apply(void 0, arguments),
                      n = function () {
                        throw new Error(u(15));
                      },
                      i = {
                        getState: t.getState,
                        dispatch: function () {
                          return n.apply(void 0, arguments);
                        },
                      },
                      o = r.map(function (e) {
                        return e(i);
                      });
                    return (
                      (n = v.apply(void 0, o)(t.dispatch)),
                      (0, a.A)((0, a.A)({}, t), {}, { dispatch: n })
                    );
                  };
                };
              })(
                ((r = i),
                function () {
                  return function (e) {
                    return function (t) {
                      "INITIAL_PUBLISH" === t.type && r.dragging(),
                        "DROP_ANIMATE" === t.type &&
                          r.dropping(t.payload.completed.result.reason),
                        ("FLUSH" !== t.type && "DROP_COMPLETE" !== t.type) ||
                          r.resting(),
                        e(t);
                    };
                  };
                }),
                (function (e) {
                  return function () {
                    return function (r) {
                      return function (t) {
                        ("DROP_COMPLETE" !== t.type &&
                          "FLUSH" !== t.type &&
                          "DROP_ANIMATE" !== t.type) ||
                          e.stopPublishing(),
                          r(t);
                      };
                    };
                  };
                })(t),
                (function (e) {
                  return function (r) {
                    var t = r.getState,
                      n = r.dispatch;
                    return function (r) {
                      return function (i) {
                        if ("LIFT" === i.type) {
                          var o = i.payload,
                            a = o.id,
                            u = o.clientSelection,
                            l = o.movementMode,
                            c = t();
                          "DROP_ANIMATING" === c.phase &&
                            n(Et({ completed: c.completed })),
                            "IDLE" !== t().phase && Se(!1),
                            n(wt()),
                            n({
                              type: "BEFORE_INITIAL_CAPTURE",
                              payload: { draggableId: a, movementMode: l },
                            });
                          var s = {
                              draggableId: a,
                              scrollOptions: {
                                shouldPublishImmediately: "SNAP" === l,
                              },
                            },
                            d = e.startPublishing(s),
                            p = d.critical,
                            f = d.dimensions,
                            g = d.viewport;
                          n({
                            type: "INITIAL_PUBLISH",
                            payload: {
                              critical: p,
                              dimensions: f,
                              clientSelection: u,
                              movementMode: l,
                              viewport: g,
                            },
                          });
                        } else r(i);
                      };
                    };
                  };
                })(t),
                Ft,
                Yt,
                Jt,
                Xt,
                (function (e) {
                  return function (r) {
                    return function (t) {
                      return function (n) {
                        if (
                          (function (e) {
                            return (
                              "DROP_COMPLETE" === e.type ||
                              "DROP_ANIMATE" === e.type ||
                              "FLUSH" === e.type
                            );
                          })(n)
                        )
                          return e.stop(), void t(n);
                        if ("INITIAL_PUBLISH" === n.type) {
                          t(n);
                          var i = r.getState();
                          return (
                            "DRAGGING" !== i.phase && Se(!1), void e.start(i)
                          );
                        }
                        t(n), e.scroll(r.getState());
                      };
                    };
                  };
                })(c),
                Ut,
                (function (e) {
                  var r = !1;
                  return function () {
                    return function (t) {
                      return function (n) {
                        if ("INITIAL_PUBLISH" === n.type)
                          return (
                            (r = !0),
                            e.tryRecordFocus(n.payload.critical.draggable.id),
                            t(n),
                            void e.tryRestoreFocusRecorded()
                          );
                        if ((t(n), r)) {
                          if ("FLUSH" === n.type)
                            return (r = !1), void e.tryRestoreFocusRecorded();
                          if ("DROP_COMPLETE" === n.type) {
                            r = !1;
                            var i = n.payload.completed.result;
                            i.combine &&
                              e.tryShiftRecord(
                                i.draggableId,
                                i.combine.draggableId,
                              ),
                              e.tryRestoreFocusRecorded();
                          }
                        }
                      };
                    };
                  };
                })(n),
                zt(o, l),
              ),
            ),
          );
        };
      var Qt = function (e) {
          var r = e.scrollHeight,
            t = e.scrollWidth,
            n = e.height,
            i = e.width,
            o = _e({ x: t, y: r }, { x: i, y: n });
          return { x: Math.max(0, o.x), y: Math.max(0, o.y) };
        },
        Zt = function (e) {
          var r = e.document.documentElement;
          return r || Se(!1), r;
        },
        en = function (e) {
          var r = Zt(e);
          return Qt({
            scrollHeight: r.scrollHeight,
            scrollWidth: r.scrollWidth,
            width: r.clientWidth,
            height: r.clientHeight,
          });
        },
        rn = function (e) {
          var r = e.windowToUse,
            t = e.critical,
            n = e.scrollOptions,
            i = e.registry;
          it();
          var o = (function (e) {
              var r = Wt(e),
                t = en(e),
                n = r.y,
                i = r.x,
                o = Zt(e),
                a = o.clientWidth,
                u = o.clientHeight;
              return {
                frame: ue({ top: n, left: i, right: i + a, bottom: n + u }),
                scroll: {
                  initial: r,
                  current: r,
                  max: t,
                  diff: { value: Ge, displacement: Ge },
                },
              };
            })(r),
            a = o.scroll.current,
            u = t.droppable,
            l = i.droppable.getAllByType(u.type).map(function (e) {
              return e.callbacks.getDimensionAndWatchScroll(a, n);
            }),
            c = i.draggable.getAllByType(t.draggable.type).map(function (e) {
              return e.getDimension(a);
            }),
            s = { draggables: Ze(c), droppables: Qe(l) };
          return ot(), { dimensions: s, critical: t, viewport: o };
        };
      function tn(e, r, t) {
        return (
          t.descriptor.id !== r.id &&
          t.descriptor.type === r.type &&
          "virtual" ===
            e.droppable.getById(t.descriptor.droppableId).descriptor.mode
        );
      }
      var nn,
        on,
        an = function (e, r, t) {
          var n = null,
            i = (function (e) {
              var r = e.registry,
                t = e.callbacks,
                n = { additions: {}, removals: {}, modified: {} },
                i = null,
                o = function () {
                  i ||
                    (t.collectionStarting(),
                    (i = requestAnimationFrame(function () {
                      (i = null), it();
                      var e = n,
                        o = e.additions,
                        a = e.removals,
                        u = e.modified,
                        l = Object.keys(o)
                          .map(function (e) {
                            return r.draggable.getById(e).getDimension(Ge);
                          })
                          .sort(function (e, r) {
                            return e.descriptor.index - r.descriptor.index;
                          }),
                        c = Object.keys(u).map(function (e) {
                          return {
                            droppableId: e,
                            scroll: r.droppable
                              .getById(e)
                              .callbacks.getScrollWhileDragging(),
                          };
                        }),
                        s = {
                          additions: l,
                          removals: Object.keys(a),
                          modified: c,
                        };
                      (n = { additions: {}, removals: {}, modified: {} }),
                        ot(),
                        t.publish(s);
                    })));
                };
              return {
                add: function (e) {
                  var r = e.descriptor.id;
                  (n.additions[r] = e),
                    (n.modified[e.descriptor.droppableId] = !0),
                    n.removals[r] && delete n.removals[r],
                    o();
                },
                remove: function (e) {
                  var r = e.descriptor;
                  (n.removals[r.id] = !0),
                    (n.modified[r.droppableId] = !0),
                    n.additions[r.id] && delete n.additions[r.id],
                    o();
                },
                stop: function () {
                  i &&
                    (cancelAnimationFrame(i),
                    (i = null),
                    (n = { additions: {}, removals: {}, modified: {} }));
                },
              };
            })({
              callbacks: {
                publish: t.publishWhileDragging,
                collectionStarting: t.collectionStarting,
              },
              registry: r,
            }),
            o = function (e) {
              n || Se(!1);
              var t = n.critical.draggable;
              "ADDITION" === e.type && tn(r, t, e.value) && i.add(e.value),
                "REMOVAL" === e.type && tn(r, t, e.value) && i.remove(e.value);
            },
            a = {
              updateDroppableIsEnabled: function (e, i) {
                r.droppable.exists(e) || Se(!1),
                  n && t.updateDroppableIsEnabled({ id: e, isEnabled: i });
              },
              updateDroppableIsCombineEnabled: function (e, i) {
                n &&
                  (r.droppable.exists(e) || Se(!1),
                  t.updateDroppableIsCombineEnabled({
                    id: e,
                    isCombineEnabled: i,
                  }));
              },
              scrollDroppable: function (e, t) {
                n && r.droppable.getById(e).callbacks.scroll(t);
              },
              updateDroppableScroll: function (e, i) {
                n &&
                  (r.droppable.exists(e) || Se(!1),
                  t.updateDroppableScroll({ id: e, newScroll: i }));
              },
              startPublishing: function (t) {
                n && Se(!1);
                var i = r.draggable.getById(t.draggableId),
                  a = r.droppable.getById(i.descriptor.droppableId),
                  u = { draggable: i.descriptor, droppable: a.descriptor },
                  l = r.subscribe(o);
                return (
                  (n = { critical: u, unsubscribe: l }),
                  rn({
                    windowToUse: e,
                    critical: u,
                    registry: r,
                    scrollOptions: t.scrollOptions,
                  })
                );
              },
              stopPublishing: function () {
                if (n) {
                  i.stop();
                  var e = n.critical.droppable;
                  r.droppable.getAllByType(e.type).forEach(function (e) {
                    return e.callbacks.dragStopped();
                  }),
                    n.unsubscribe(),
                    (n = null);
                }
              },
            };
          return a;
        },
        un = function (e, r) {
          return (
            "IDLE" === e.phase ||
            ("DROP_ANIMATING" === e.phase &&
              e.completed.result.draggableId !== r &&
              "DROP" === e.completed.result.reason)
          );
        },
        ln = function (e) {
          window.scrollBy(e.x, e.y);
        },
        cn = Ie(function (e) {
          return er(e).filter(function (e) {
            return !!e.isEnabled && !!e.frame;
          });
        }),
        sn = function (e) {
          var r = e.center,
            t = e.destination,
            n = e.droppables;
          if (t) {
            var i = n[t];
            return i.frame ? i : null;
          }
          var o = (function (e, r) {
            var t = $e(cn(r), function (r) {
              return r.frame || Se(!1), zr(r.frame.pageMarginBox)(e);
            });
            return t;
          })(r, n);
          return o;
        },
        dn = 0.25,
        pn = 0.05,
        fn = 28,
        gn = function (e) {
          return Math.pow(e, 2);
        },
        vn = { stopDampeningAt: 1200, accelerateAt: 360 },
        mn = function (e) {
          var r = e.startOfRange,
            t = e.endOfRange,
            n = e.current,
            i = t - r;
          return 0 === i ? 0 : (n - r) / i;
        },
        bn = vn.accelerateAt,
        hn = vn.stopDampeningAt,
        yn = function (e) {
          var r = e.distanceToEdge,
            t = e.thresholds,
            n = e.dragStartTime,
            i = e.shouldUseTimeDampening,
            o = (function (e, r) {
              if (e > r.startScrollingFrom) return 0;
              if (e <= r.maxScrollValueAt) return fn;
              if (e === r.startScrollingFrom) return 1;
              var t = mn({
                  startOfRange: r.maxScrollValueAt,
                  endOfRange: r.startScrollingFrom,
                  current: e,
                }),
                n = fn * gn(1 - t);
              return Math.ceil(n);
            })(r, t);
          return 0 === o
            ? 0
            : i
              ? Math.max(
                  (function (e, r) {
                    var t = r,
                      n = hn,
                      i = Date.now() - t;
                    if (i >= hn) return e;
                    if (i < bn) return 1;
                    var o = mn({ startOfRange: bn, endOfRange: n, current: i }),
                      a = e * gn(o);
                    return Math.ceil(a);
                  })(o, n),
                  1,
                )
              : o;
        },
        In = function (e) {
          var r = e.container,
            t = e.distanceToEdges,
            n = e.dragStartTime,
            i = e.axis,
            o = e.shouldUseTimeDampening,
            a = (function (e, r) {
              return {
                startScrollingFrom: e[r.size] * dn,
                maxScrollValueAt: e[r.size] * pn,
              };
            })(r, i);
          return t[i.end] < t[i.start]
            ? yn({
                distanceToEdge: t[i.end],
                thresholds: a,
                dragStartTime: n,
                shouldUseTimeDampening: o,
              })
            : -1 *
                yn({
                  distanceToEdge: t[i.start],
                  thresholds: a,
                  dragStartTime: n,
                  shouldUseTimeDampening: o,
                });
        },
        xn = He(function (e) {
          return 0 === e ? 0 : e;
        }),
        Dn = function (e) {
          var r = e.dragStartTime,
            t = e.container,
            n = e.subject,
            i = e.center,
            o = e.shouldUseTimeDampening,
            a = {
              top: i.y - t.top,
              right: t.right - i.x,
              bottom: t.bottom - i.y,
              left: i.x - t.left,
            },
            u = In({
              container: t,
              distanceToEdges: a,
              dragStartTime: r,
              axis: fr,
              shouldUseTimeDampening: o,
            }),
            l = In({
              container: t,
              distanceToEdges: a,
              dragStartTime: r,
              axis: gr,
              shouldUseTimeDampening: o,
            }),
            c = xn({ x: l, y: u });
          if (Fe(c, Ge)) return null;
          var s = (function (e) {
            var r = e.container,
              t = e.subject,
              n = e.proposedScroll,
              i = t.height > r.height,
              o = t.width > r.width;
            return o || i
              ? o && i
                ? null
                : { x: o ? 0 : n.x, y: i ? 0 : n.y }
              : n;
          })({ container: t, subject: n, proposedScroll: c });
          return s ? (Fe(s, Ge) ? null : s) : null;
        },
        wn = He(function (e) {
          return 0 === e ? 0 : e > 0 ? 1 : -1;
        }),
        En =
          ((nn = function (e, r) {
            return e < 0 ? e : e > r ? e - r : 0;
          }),
          function (e) {
            var r = e.current,
              t = e.max,
              n = e.change,
              i = Me(r, n),
              o = { x: nn(i.x, t.x), y: nn(i.y, t.y) };
            return Fe(o, Ge) ? null : o;
          }),
        An = function (e) {
          var r = e.max,
            t = e.current,
            n = e.change,
            i = { x: Math.max(t.x, r.x), y: Math.max(t.y, r.y) },
            o = wn(n),
            a = En({ max: i, current: t, change: o });
          return !a || (0 !== o.x && 0 === a.x) || (0 !== o.y && 0 === a.y);
        },
        Cn = function (e, r) {
          return An({
            current: e.scroll.current,
            max: e.scroll.max,
            change: r,
          });
        },
        Pn = function (e, r) {
          var t = e.frame;
          return (
            !!t &&
            An({ current: t.scroll.current, max: t.scroll.max, change: r })
          );
        },
        Sn = function (e) {
          var r = e.state,
            t = e.dragStartTime,
            n = e.shouldUseTimeDampening,
            i = e.scrollWindow,
            o = e.scrollDroppable,
            a = r.current.page.borderBoxCenter,
            u = r.dimensions.draggables[r.critical.draggable.id].page.marginBox;
          if (r.isWindowScrollAllowed) {
            var l = (function (e) {
              var r = e.viewport,
                t = e.subject,
                n = e.center,
                i = e.dragStartTime,
                o = e.shouldUseTimeDampening,
                a = Dn({
                  dragStartTime: i,
                  container: r.frame,
                  subject: t,
                  center: n,
                  shouldUseTimeDampening: o,
                });
              return a && Cn(r, a) ? a : null;
            })({
              dragStartTime: t,
              viewport: r.viewport,
              subject: u,
              center: a,
              shouldUseTimeDampening: n,
            });
            if (l) return void i(l);
          }
          var c = sn({
            center: a,
            destination: Hr(r.impact),
            droppables: r.dimensions.droppables,
          });
          if (c) {
            var s = (function (e) {
              var r = e.droppable,
                t = e.subject,
                n = e.center,
                i = e.dragStartTime,
                o = e.shouldUseTimeDampening,
                a = r.frame;
              if (!a) return null;
              var u = Dn({
                dragStartTime: i,
                container: a.pageMarginBox,
                subject: t,
                center: n,
                shouldUseTimeDampening: o,
              });
              return u && Pn(r, u) ? u : null;
            })({
              dragStartTime: t,
              droppable: c,
              subject: u,
              center: a,
              shouldUseTimeDampening: n,
            });
            s && o(c.descriptor.id, s);
          }
        },
        Nn = function (e) {
          var r = e.move,
            t = e.scrollDroppable,
            n = e.scrollWindow,
            i = function (e, r) {
              if (!Pn(e, r)) return r;
              var n = (function (e, r) {
                var t = e.frame;
                return t && Pn(e, r)
                  ? En({
                      current: t.scroll.current,
                      max: t.scroll.max,
                      change: r,
                    })
                  : null;
              })(e, r);
              if (!n) return t(e.descriptor.id, r), null;
              var i = _e(r, n);
              return t(e.descriptor.id, i), _e(r, i);
            },
            o = function (e, r, t) {
              if (!e) return t;
              if (!Cn(r, t)) return t;
              var i = (function (e, r) {
                if (!Cn(e, r)) return null;
                var t = e.scroll.max,
                  n = e.scroll.current;
                return En({ current: n, max: t, change: r });
              })(r, t);
              if (!i) return n(t), null;
              var o = _e(t, i);
              return n(o), _e(t, o);
            };
          return function (e) {
            var t = e.scrollJumpRequest;
            if (t) {
              var n = Hr(e.impact);
              n || Se(!1);
              var a = i(e.dimensions.droppables[n], t);
              if (a) {
                var u = e.viewport,
                  l = o(e.isWindowScrollAllowed, u, a);
                l &&
                  (function (e, t) {
                    var n = Me(e.current.client.selection, t);
                    r({ client: n });
                  })(e, l);
              }
            }
          };
        },
        On = function (e) {
          var r = e.scrollDroppable,
            t = e.scrollWindow,
            n = e.move,
            i = (function (e) {
              var r = e.scrollWindow,
                t = e.scrollDroppable,
                n = xe(r),
                i = xe(t),
                o = null,
                a = function (e) {
                  o || Se(!1);
                  var r = o,
                    t = r.shouldUseTimeDampening,
                    a = r.dragStartTime;
                  Sn({
                    state: e,
                    scrollWindow: n,
                    scrollDroppable: i,
                    dragStartTime: a,
                    shouldUseTimeDampening: t,
                  });
                };
              return {
                start: function (e) {
                  it(), o && Se(!1);
                  var r = Date.now(),
                    t = !1,
                    n = function () {
                      t = !0;
                    };
                  Sn({
                    state: e,
                    dragStartTime: 0,
                    shouldUseTimeDampening: !1,
                    scrollWindow: n,
                    scrollDroppable: n,
                  }),
                    (o = { dragStartTime: r, shouldUseTimeDampening: t }),
                    ot(),
                    t && a(e);
                },
                stop: function () {
                  o && (n.cancel(), i.cancel(), (o = null));
                },
                scroll: a,
              };
            })({ scrollWindow: t, scrollDroppable: r }),
            o = Nn({ move: n, scrollWindow: t, scrollDroppable: r });
          return {
            scroll: function (e) {
              "DRAGGING" === e.phase &&
                ("FLUID" !== e.movementMode
                  ? e.scrollJumpRequest && o(e)
                  : i.scroll(e));
            },
            start: i.start,
            stop: i.stop,
          };
        },
        Rn = "data-rbd",
        Bn = {
          base: (on = Rn + "-drag-handle"),
          draggableId: on + "-draggable-id",
          contextId: on + "-context-id",
        },
        Tn = (function () {
          var e = Rn + "-draggable";
          return { base: e, contextId: e + "-context-id", id: e + "-id" };
        })(),
        Ln = (function () {
          var e = Rn + "-droppable";
          return { base: e, contextId: e + "-context-id", id: e + "-id" };
        })(),
        Gn = { contextId: Rn + "-scroll-container-context-id" },
        Mn = function (e, r) {
          return e
            .map(function (e) {
              var t = e.styles[r];
              return t ? e.selector + " { " + t + " }" : "";
            })
            .join(" ");
        },
        _n = function (e) {
          var r,
            t,
            n,
            i =
              ((r = e),
              function (e) {
                return "[" + e + '="' + r + '"]';
              }),
            o =
              ((t = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    "),
              {
                selector: i(Bn.contextId),
                styles: {
                  always:
                    "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                  resting: t,
                  dragging: "pointer-events: none;",
                  dropAnimating: t,
                },
              }),
            a = [
              ((n = "\n      transition: " + Rt.outOfTheWay + ";\n    "),
              {
                selector: i(Tn.contextId),
                styles: { dragging: n, dropAnimating: n, userCancel: n },
              }),
              o,
              {
                selector: i(Ln.contextId),
                styles: { always: "overflow-anchor: none;" },
              },
              {
                selector: "body, :host",
                styles: {
                  dragging:
                    "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ",
                },
              },
            ];
          return {
            always: Mn(a, "always"),
            resting: Mn(a, "resting"),
            dragging: Mn(a, "dragging"),
            dropAnimating: Mn(a, "dropAnimating"),
            userCancel: Mn(a, "userCancel"),
          };
        },
        Fn =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? n.useLayoutEffect
            : n.useEffect,
        Wn = function (e) {
          var r = e || document.querySelector("head");
          return r || Se(!1), r;
        },
        kn = function (e) {
          var r = document.createElement("style");
          return e && r.setAttribute("nonce", e), (r.type = "text/css"), r;
        };
      function Un(e) {
        return (e.composedPath && e.composedPath()[0]) || e.target;
      }
      function jn(e, r, t) {
        var n,
          i = e && e.getRootNode(),
          o = i && i.querySelectorAll ? i : document,
          a = $e(
            ((n = o.querySelectorAll(r)), Array.prototype.slice.call(n)),
            t,
          );
        return !a && o.host ? jn(o.host, r, t) : a;
      }
      var Hn = function (e) {
        return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
      };
      function qn(e) {
        return e instanceof Hn(e).HTMLElement;
      }
      function Vn(e, r, t) {
        var n = jn(t, "[" + Bn.contextId + '="' + e + '"]', function (e) {
          return e.getAttribute(Bn.draggableId) === r;
        });
        return n && qn(n) ? n : null;
      }
      function zn() {
        var e = { draggables: {}, droppables: {} },
          r = [];
        function t(e) {
          r.length &&
            r.forEach(function (r) {
              return r(e);
            });
        }
        function n(r) {
          return e.draggables[r] || null;
        }
        function i(r) {
          return e.droppables[r] || null;
        }
        return {
          draggable: {
            register: function (r) {
              (e.draggables[r.descriptor.id] = r),
                t({ type: "ADDITION", value: r });
            },
            update: function (r, t) {
              var n = e.draggables[t.descriptor.id];
              n &&
                n.uniqueId === r.uniqueId &&
                (delete e.draggables[t.descriptor.id],
                (e.draggables[r.descriptor.id] = r));
            },
            unregister: function (r) {
              var i = r.descriptor.id,
                o = n(i);
              o &&
                r.uniqueId === o.uniqueId &&
                (delete e.draggables[i], t({ type: "REMOVAL", value: r }));
            },
            getById: function (e) {
              var r = n(e);
              return r || Se(!1), r;
            },
            findById: n,
            exists: function (e) {
              return Boolean(n(e));
            },
            getAllByType: function (r) {
              return Xe(e.draggables).filter(function (e) {
                return e.descriptor.type === r;
              });
            },
          },
          droppable: {
            register: function (r) {
              e.droppables[r.descriptor.id] = r;
            },
            unregister: function (r) {
              var t = i(r.descriptor.id);
              t &&
                r.uniqueId === t.uniqueId &&
                delete e.droppables[r.descriptor.id];
            },
            getById: function (e) {
              var r = i(e);
              return r || Se(!1), r;
            },
            findById: i,
            exists: function (e) {
              return Boolean(i(e));
            },
            getAllByType: function (r) {
              return Xe(e.droppables).filter(function (e) {
                return e.descriptor.type === r;
              });
            },
          },
          subscribe: function (e) {
            return (
              r.push(e),
              function () {
                var t = r.indexOf(e);
                -1 !== t && r.splice(t, 1);
              }
            );
          },
          clean: function () {
            (e.draggables = {}), (e.droppables = {}), (r.length = 0);
          },
        };
      }
      var Yn = n.createContext(null),
        Jn = function () {
          var e = document.body;
          return e || Se(!1), e;
        },
        Xn = {
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          border: "0",
          padding: "0",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          "clip-path": "inset(100%)",
        },
        Kn = function (e) {
          return "rbd-announcement-" + e;
        };
      var $n = 0,
        Qn = { separator: "::" };
      function Zn(e, r) {
        return (
          void 0 === r && (r = Qn),
          ie(
            function () {
              return "" + e + r.separator + $n++;
            },
            [r.separator, e],
          )
        );
      }
      var ei = n.createContext(null);
      function ri(e) {
        0;
      }
      function ti(e, r) {
        ri();
      }
      function ni(e) {
        var r = (0, n.useRef)(e);
        return (
          (0, n.useEffect)(function () {
            r.current = e;
          }),
          r
        );
      }
      var ii,
        oi = (((ii = {})[13] = !0), (ii[9] = !0), ii),
        ai = function (e) {
          oi[e.keyCode] && e.preventDefault();
        },
        ui = (function () {
          var e = "visibilitychange";
          return "undefined" == typeof document
            ? e
            : $e([e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], function (e) {
                return "on" + e in document;
              }) || e;
        })();
      var li,
        ci = { type: "IDLE" };
      function si(e) {
        var r = e.cancel,
          t = e.completed,
          n = e.getPhase,
          i = e.setPhase;
        return [
          {
            eventName: "mousemove",
            fn: function (e) {
              var r = e.button,
                t = e.clientX,
                o = e.clientY;
              if (0 === r) {
                var a = { x: t, y: o },
                  u = n();
                if ("DRAGGING" === u.type)
                  return e.preventDefault(), void u.actions.move(a);
                "PENDING" !== u.type && Se(!1);
                var l = u.point;
                if (
                  ((c = l),
                  (s = a),
                  Math.abs(s.x - c.x) >= 5 || Math.abs(s.y - c.y) >= 5)
                ) {
                  var c, s;
                  e.preventDefault();
                  var d = u.actions.fluidLift(a);
                  i({ type: "DRAGGING", actions: d });
                }
              }
            },
          },
          {
            eventName: "mouseup",
            fn: function (e) {
              var i = n();
              "DRAGGING" === i.type
                ? (e.preventDefault(),
                  i.actions.drop({ shouldBlockNextClick: !0 }),
                  t())
                : r();
            },
          },
          {
            eventName: "mousedown",
            fn: function (e) {
              "DRAGGING" === n().type && e.preventDefault(), r();
            },
          },
          {
            eventName: "keydown",
            fn: function (e) {
              if ("PENDING" !== n().type)
                return 27 === e.keyCode
                  ? (e.preventDefault(), void r())
                  : void ai(e);
              r();
            },
          },
          { eventName: "resize", fn: r },
          {
            eventName: "scroll",
            options: { passive: !0, capture: !1 },
            fn: function () {
              "PENDING" === n().type && r();
            },
          },
          {
            eventName: "webkitmouseforcedown",
            fn: function (e) {
              var t = n();
              "IDLE" === t.type && Se(!1),
                t.actions.shouldRespectForcePress() ? r() : e.preventDefault();
            },
          },
          { eventName: ui, fn: r },
        ];
      }
      function di() {}
      var pi =
        (((li = {})[34] = !0), (li[33] = !0), (li[36] = !0), (li[35] = !0), li);
      function fi(e, r) {
        function t() {
          r(), e.cancel();
        }
        return [
          {
            eventName: "keydown",
            fn: function (n) {
              return 27 === n.keyCode
                ? (n.preventDefault(), void t())
                : 32 === n.keyCode
                  ? (n.preventDefault(), r(), void e.drop())
                  : 40 === n.keyCode
                    ? (n.preventDefault(), void e.moveDown())
                    : 38 === n.keyCode
                      ? (n.preventDefault(), void e.moveUp())
                      : 39 === n.keyCode
                        ? (n.preventDefault(), void e.moveRight())
                        : 37 === n.keyCode
                          ? (n.preventDefault(), void e.moveLeft())
                          : void (pi[n.keyCode] ? n.preventDefault() : ai(n));
            },
          },
          { eventName: "mousedown", fn: t },
          { eventName: "mouseup", fn: t },
          { eventName: "click", fn: t },
          { eventName: "touchstart", fn: t },
          { eventName: "resize", fn: t },
          { eventName: "wheel", fn: t, options: { passive: !0 } },
          { eventName: ui, fn: t },
        ];
      }
      var gi = { type: "IDLE" };
      var vi = {
        input: !0,
        button: !0,
        textarea: !0,
        select: !0,
        option: !0,
        optgroup: !0,
        video: !0,
        audio: !0,
      };
      function mi(e, r) {
        if (null == r) return !1;
        if (Boolean(vi[r.tagName.toLowerCase()])) return !0;
        var t = r.getAttribute("contenteditable");
        return "true" === t || "" === t || (r !== e && mi(e, r.parentElement));
      }
      function bi(e, r) {
        var t = Un(r);
        return !!qn(t) && mi(e, t);
      }
      var hi = function (e) {
        return ue(e.getBoundingClientRect()).center;
      };
      var yi = (function () {
        var e = "matches";
        return "undefined" == typeof document
          ? e
          : $e([e, "msMatchesSelector", "webkitMatchesSelector"], function (e) {
              return e in Element.prototype;
            }) || e;
      })();
      function Ii(e, r) {
        return null == e ? null : e[yi](r) ? e : Ii(e.parentElement, r);
      }
      function xi(e, r) {
        return e.closest ? e.closest(r) : Ii(e, r);
      }
      function Di(e, r) {
        if (!e || e === document || e === window) return null;
        var t = xi(e, r);
        return t || Di(e.getRootNode().host, r);
      }
      function wi(e, r) {
        var t = Un(r);
        if (
          !(function (e) {
            return e instanceof Hn(e).Element;
          })(t)
        )
          return null;
        var n = (function (e) {
            return "[" + Bn.contextId + '="' + e + '"]';
          })(e),
          i = Di(t, n);
        return i && qn(i) ? i : null;
      }
      function Ei(e) {
        e.preventDefault();
      }
      function Ai(e) {
        var r = e.expected,
          t = e.phase,
          n = e.isLockActive;
        e.shouldWarn;
        return !!n() && r === t;
      }
      function Ci(e) {
        var r = e.lockAPI,
          t = e.store,
          n = e.registry,
          i = e.draggableId;
        if (r.isClaimed()) return !1;
        var o = n.draggable.findById(i);
        return !!o && !!o.options.isEnabled && !!un(t.getState(), i);
      }
      function Pi(e) {
        var r = e.lockAPI,
          t = e.contextId,
          n = e.store,
          i = e.registry,
          a = e.draggableId,
          u = e.forceSensorStop,
          l = e.sourceEvent;
        if (!Ci({ lockAPI: r, store: n, registry: i, draggableId: a }))
          return null;
        var c,
          s,
          d = i.draggable.getById(a),
          p = (function (e, r, t) {
            var n = jn(t, "[" + Tn.contextId + '="' + e + '"]', function (e) {
              return e.getAttribute(Tn.id) === r;
            });
            return n && qn(n) ? n : null;
          })(
            t,
            d.descriptor.id,
            ((s = (c = l) && c.composedPath && c.composedPath()[0]) &&
              s.getRootNode()) ||
              document,
          );
        if (!p) return null;
        if (l && !d.options.canDragInteractiveElements && bi(p, l)) return null;
        var f = r.claim(u || we),
          g = "PRE_DRAG";
        function v() {
          return d.options.shouldRespectForcePress;
        }
        function m() {
          return r.isActive(f);
        }
        var b = function (e, r) {
          Ai({ expected: e, phase: g, isLockActive: m, shouldWarn: !0 }) &&
            n.dispatch(r());
        }.bind(null, "DRAGGING");
        function h(e) {
          function t() {
            r.release(), (g = "COMPLETED");
          }
          function i(r, i) {
            if (
              (void 0 === i && (i = { shouldBlockNextClick: !1 }),
              e.cleanup(),
              i.shouldBlockNextClick)
            ) {
              var o = Ee(window, [
                {
                  eventName: "click",
                  fn: Ei,
                  options: { once: !0, passive: !1, capture: !0 },
                },
              ]);
              setTimeout(o);
            }
            t(), n.dispatch(At({ reason: r }));
          }
          return (
            "PRE_DRAG" !== g && (t(), "PRE_DRAG" !== g && Se(!1)),
            n.dispatch(pt(e.liftActionArgs)),
            (g = "DRAGGING"),
            (0, o.A)(
              {
                isActive: function () {
                  return Ai({
                    expected: "DRAGGING",
                    phase: g,
                    isLockActive: m,
                    shouldWarn: !1,
                  });
                },
                shouldRespectForcePress: v,
                drop: function (e) {
                  return i("DROP", e);
                },
                cancel: function (e) {
                  return i("CANCEL", e);
                },
              },
              e.actions,
            )
          );
        }
        return {
          isActive: function () {
            return Ai({
              expected: "PRE_DRAG",
              phase: g,
              isLockActive: m,
              shouldWarn: !1,
            });
          },
          shouldRespectForcePress: v,
          fluidLift: function (e) {
            var r = xe(function (e) {
                b(function () {
                  return ht({ client: e });
                });
              }),
              t = h({
                liftActionArgs: {
                  id: a,
                  clientSelection: e,
                  movementMode: "FLUID",
                },
                cleanup: function () {
                  return r.cancel();
                },
                actions: { move: r },
              });
            return (0, o.A)({}, t, { move: r });
          },
          snapLift: function () {
            var e = {
              moveUp: function () {
                return b(yt);
              },
              moveRight: function () {
                return b(xt);
              },
              moveDown: function () {
                return b(It);
              },
              moveLeft: function () {
                return b(Dt);
              },
            };
            return h({
              liftActionArgs: {
                id: a,
                clientSelection: hi(p),
                movementMode: "SNAP",
              },
              cleanup: we,
              actions: e,
            });
          },
          abort: function () {
            Ai({
              expected: "PRE_DRAG",
              phase: g,
              isLockActive: m,
              shouldWarn: !0,
            }) && r.release();
          },
        };
      }
      var Si = [
        function (e) {
          var r = (0, n.useRef)(ci),
            t = (0, n.useRef)(we),
            i = ie(
              function () {
                return {
                  eventName: "mousedown",
                  fn: function (r) {
                    if (
                      !r.defaultPrevented &&
                      0 === r.button &&
                      !(r.ctrlKey || r.metaKey || r.shiftKey || r.altKey)
                    ) {
                      var n = e.findClosestDraggableId(r);
                      if (n) {
                        var i = e.tryGetLock(n, u, { sourceEvent: r });
                        if (i) {
                          r.preventDefault();
                          var o = { x: r.clientX, y: r.clientY };
                          t.current(), s(i, o);
                        }
                      }
                    }
                  },
                };
              },
              [e],
            ),
            o = ie(
              function () {
                return {
                  eventName: "webkitmouseforcewillbegin",
                  fn: function (r) {
                    if (!r.defaultPrevented) {
                      var t = e.findClosestDraggableId(r);
                      if (t) {
                        var n = e.findOptionsForDraggable(t);
                        n &&
                          (n.shouldRespectForcePress ||
                            (e.canGetLock(t) && r.preventDefault()));
                      }
                    }
                  },
                };
              },
              [e],
            ),
            a = oe(
              function () {
                t.current = Ee(e.getWindow(), [o, i], {
                  passive: !1,
                  capture: !0,
                });
              },
              [e, o, i],
            ),
            u = oe(
              function () {
                "IDLE" !== r.current.type &&
                  ((r.current = ci), t.current(), a());
              },
              [a],
            ),
            l = oe(
              function () {
                var e = r.current;
                u(),
                  "DRAGGING" === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  "PENDING" === e.type && e.actions.abort();
              },
              [u],
            ),
            c = oe(
              function () {
                var n = si({
                  cancel: l,
                  completed: u,
                  getPhase: function () {
                    return r.current;
                  },
                  setPhase: function (e) {
                    r.current = e;
                  },
                });
                t.current = Ee(e.getWindow(), n, { capture: !0, passive: !1 });
              },
              [e, l, u],
            ),
            s = oe(
              function (e, t) {
                "IDLE" !== r.current.type && Se(!1),
                  (r.current = { type: "PENDING", point: t, actions: e }),
                  c();
              },
              [c],
            );
          Fn(
            function () {
              return (
                a(),
                function () {
                  t.current();
                }
              );
            },
            [a],
          );
        },
        function (e) {
          var r = (0, n.useRef)(di),
            t = ie(
              function () {
                return {
                  eventName: "keydown",
                  fn: function (t) {
                    if (!t.defaultPrevented && 32 === t.keyCode) {
                      var n = e.findClosestDraggableId(t);
                      if (n) {
                        var o = e.tryGetLock(n, l, { sourceEvent: t });
                        if (o) {
                          t.preventDefault();
                          var a = !0,
                            u = o.snapLift();
                          r.current(),
                            (r.current = Ee(e.getWindow(), fi(u, l), {
                              capture: !0,
                              passive: !1,
                            }));
                        }
                      }
                    }
                    function l() {
                      a || Se(!1), (a = !1), r.current(), i();
                    }
                  },
                };
              },
              [e],
            ),
            i = oe(
              function () {
                r.current = Ee(e.getWindow(), [t], {
                  passive: !1,
                  capture: !0,
                });
              },
              [e, t],
            );
          Fn(
            function () {
              return (
                i(),
                function () {
                  r.current();
                }
              );
            },
            [i],
          );
        },
        function (e) {
          var r = (0, n.useRef)(gi),
            t = (0, n.useRef)(we),
            i = oe(function () {
              return r.current;
            }, []),
            o = oe(function (e) {
              r.current = e;
            }, []),
            a = ie(
              function () {
                return {
                  eventName: "touchstart",
                  fn: function (r) {
                    if (!r.defaultPrevented) {
                      var n = e.findClosestDraggableId(r);
                      if (n) {
                        var i = e.tryGetLock(n, l, { sourceEvent: r });
                        if (i) {
                          var o = r.touches[0],
                            a = { x: o.clientX, y: o.clientY };
                          t.current(), p(i, a);
                        }
                      }
                    }
                  },
                };
              },
              [e],
            ),
            u = oe(
              function () {
                t.current = Ee(e.getWindow(), [a], {
                  capture: !0,
                  passive: !1,
                });
              },
              [e, a],
            ),
            l = oe(
              function () {
                var e = r.current;
                "IDLE" !== e.type &&
                  ("PENDING" === e.type && clearTimeout(e.longPressTimerId),
                  o(gi),
                  t.current(),
                  u());
              },
              [u, o],
            ),
            c = oe(
              function () {
                var e = r.current;
                l(),
                  "DRAGGING" === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  "PENDING" === e.type && e.actions.abort();
              },
              [l],
            ),
            s = oe(
              function () {
                var r = { capture: !0, passive: !1 },
                  n = { cancel: c, completed: l, getPhase: i },
                  o = Ee(
                    e.getWindow(),
                    (function (e) {
                      var r = e.cancel,
                        t = e.completed,
                        n = e.getPhase;
                      return [
                        {
                          eventName: "touchmove",
                          options: { capture: !1 },
                          fn: function (e) {
                            var t = n();
                            if ("DRAGGING" === t.type) {
                              t.hasMoved = !0;
                              var i = e.touches[0],
                                o = { x: i.clientX, y: i.clientY };
                              e.preventDefault(), t.actions.move(o);
                            } else r();
                          },
                        },
                        {
                          eventName: "touchend",
                          fn: function (e) {
                            var i = n();
                            "DRAGGING" === i.type
                              ? (e.preventDefault(),
                                i.actions.drop({ shouldBlockNextClick: !0 }),
                                t())
                              : r();
                          },
                        },
                        {
                          eventName: "touchcancel",
                          fn: function (e) {
                            "DRAGGING" === n().type
                              ? (e.preventDefault(), r())
                              : r();
                          },
                        },
                        {
                          eventName: "touchforcechange",
                          fn: function (e) {
                            var t = n();
                            "IDLE" === t.type && Se(!1);
                            var i = e.touches[0];
                            if (i && i.force >= 0.15) {
                              var o = t.actions.shouldRespectForcePress();
                              if ("PENDING" !== t.type)
                                return o
                                  ? t.hasMoved
                                    ? void e.preventDefault()
                                    : void r()
                                  : void e.preventDefault();
                              o && r();
                            }
                          },
                        },
                        { eventName: ui, fn: r },
                      ];
                    })(n),
                    r,
                  ),
                  a = Ee(
                    e.getWindow(),
                    (function (e) {
                      var r = e.cancel,
                        t = e.getPhase;
                      return [
                        { eventName: "orientationchange", fn: r },
                        { eventName: "resize", fn: r },
                        {
                          eventName: "contextmenu",
                          fn: function (e) {
                            e.preventDefault();
                          },
                        },
                        {
                          eventName: "keydown",
                          fn: function (e) {
                            "DRAGGING" === t().type
                              ? (27 === e.keyCode && e.preventDefault(), r())
                              : r();
                          },
                        },
                        { eventName: ui, fn: r },
                      ];
                    })(n),
                    r,
                  );
                t.current = function () {
                  o(), a();
                };
              },
              [e, c, i, l],
            ),
            d = oe(
              function () {
                var e = i();
                "PENDING" !== e.type && Se(!1);
                var r = e.actions.fluidLift(e.point);
                o({ type: "DRAGGING", actions: r, hasMoved: !1 });
              },
              [i, o],
            ),
            p = oe(
              function (e, r) {
                "IDLE" !== i().type && Se(!1);
                var t = setTimeout(d, 120);
                o({
                  type: "PENDING",
                  point: r,
                  actions: e,
                  longPressTimerId: t,
                }),
                  s();
              },
              [s, i, o, d],
            );
          Fn(
            function () {
              return (
                u(),
                function () {
                  t.current();
                  var e = i();
                  "PENDING" === e.type &&
                    (clearTimeout(e.longPressTimerId), o(gi));
                }
              );
            },
            [i, u, o],
          ),
            Fn(
              function () {
                return Ee(e.getWindow(), [
                  {
                    eventName: "touchmove",
                    fn: function () {},
                    options: { capture: !1, passive: !1 },
                  },
                ]);
              },
              [e],
            );
        },
      ];
      function Ni(e) {
        var r = e.contextId,
          t = e.store,
          i = e.registry,
          o = e.customSensors,
          a = e.enableDefaultSensors,
          u = e.windowToUse,
          l = [].concat(a ? Si : [], o || []),
          c = (0, n.useState)(function () {
            return (function () {
              var e = null;
              function r() {
                e || Se(!1), (e = null);
              }
              return {
                isClaimed: function () {
                  return Boolean(e);
                },
                isActive: function (r) {
                  return r === e;
                },
                claim: function (r) {
                  e && Se(!1);
                  var t = { abandon: r };
                  return (e = t), t;
                },
                release: r,
                tryAbandon: function () {
                  e && (e.abandon(), r());
                },
              };
            })();
          })[0],
          s = oe(
            function (e, r) {
              e.isDragging && !r.isDragging && c.tryAbandon();
            },
            [c],
          );
        Fn(
          function () {
            var e = t.getState();
            return t.subscribe(function () {
              var r = t.getState();
              s(e, r), (e = r);
            });
          },
          [c, t, s],
        ),
          Fn(
            function () {
              return c.tryAbandon;
            },
            [c.tryAbandon],
          );
        var d = oe(
            function (e) {
              return Ci({ lockAPI: c, registry: i, store: t, draggableId: e });
            },
            [c, i, t],
          ),
          p = oe(
            function (e, n, o) {
              return Pi({
                lockAPI: c,
                registry: i,
                contextId: r,
                store: t,
                draggableId: e,
                forceSensorStop: n,
                sourceEvent: o && o.sourceEvent ? o.sourceEvent : null,
              });
            },
            [r, c, i, t],
          ),
          f = oe(
            function (e) {
              return (function (e, r) {
                var t = wi(e, r);
                return t ? t.getAttribute(Bn.draggableId) : null;
              })(r, e);
            },
            [r],
          ),
          g = oe(
            function (e) {
              var r = i.draggable.findById(e);
              return r ? r.options : null;
            },
            [i.draggable],
          ),
          v = oe(
            function () {
              c.isClaimed() &&
                (c.tryAbandon(),
                "IDLE" !== t.getState().phase && t.dispatch(wt()));
            },
            [c, t],
          ),
          m = oe(c.isClaimed, [c]),
          b = oe(
            function () {
              return u;
            },
            [u],
          ),
          h = ie(
            function () {
              return {
                canGetLock: d,
                tryGetLock: p,
                findClosestDraggableId: f,
                findOptionsForDraggable: g,
                tryReleaseLock: v,
                isLockClaimed: m,
                getWindow: b,
              };
            },
            [d, p, f, g, v, m, b],
          );
        ri();
        for (var y = 0; y < l.length; y++) l[y](h);
      }
      var Oi = function (e) {
        return {
          onBeforeCapture: e.onBeforeCapture,
          onBeforeDragStart: e.onBeforeDragStart,
          onDragStart: e.onDragStart,
          onDragEnd: e.onDragEnd,
          onDragUpdate: e.onDragUpdate,
        };
      };
      function Ri(e) {
        return e.current || Se(!1), e.current;
      }
      function Bi(e) {
        var r = e.contextId,
          t = e.setCallbacks,
          i = e.sensors,
          a = e.nonce,
          u = e.dragHandleUsageInstructions,
          l = (0, n.useRef)(null),
          [c, s] = n.useState(),
          d = n.useMemo(
            function () {
              return c ? c.ownerDocument.defaultView : window;
            },
            [c],
          );
        ti();
        var p = ni(e),
          f = oe(
            function () {
              return Oi(p.current);
            },
            [p],
          ),
          v = (function (e) {
            var r = ie(
                function () {
                  return Kn(e);
                },
                [e],
              ),
              t = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(
                function () {
                  var e = document.createElement("div");
                  return (
                    (t.current = e),
                    (e.id = r),
                    e.setAttribute("aria-live", "assertive"),
                    e.setAttribute("aria-atomic", "true"),
                    (0, o.A)(e.style, Xn),
                    Jn().appendChild(e),
                    function () {
                      setTimeout(function () {
                        var r = Jn();
                        r.contains(e) && r.removeChild(e),
                          e === t.current && (t.current = null);
                      });
                    }
                  );
                },
                [r],
              ),
              oe(function (e) {
                var r = t.current;
                r && (r.textContent = e);
              }, [])
            );
          })(r),
          m = (function (e) {
            var r = e.contextId,
              t = e.text,
              i = Zn("hidden-text", { separator: "-" }),
              o = ie(
                function () {
                  return (
                    "rbd-hidden-text-" +
                    (e = { contextId: r, uniqueId: i }).contextId +
                    "-" +
                    e.uniqueId
                  );
                  var e;
                },
                [i, r],
              );
            return (
              (0, n.useEffect)(
                function () {
                  var e = document.createElement("div");
                  return (
                    (e.id = o),
                    (e.textContent = t),
                    (e.style.display = "none"),
                    Jn().appendChild(e),
                    function () {
                      var r = Jn();
                      r.contains(e) && r.removeChild(e);
                    }
                  );
                },
                [o, t],
              ),
              o
            );
          })({ contextId: r, text: u }),
          b = (function (e, r, t) {
            var i = ie(
                function () {
                  return _n(e);
                },
                [e],
              ),
              o = (0, n.useRef)(null),
              a = (0, n.useRef)(null),
              u = oe(
                Ie(function (e) {
                  var r = a.current;
                  r || Se(!1), (r.textContent = e);
                }),
                [],
              ),
              l = oe(function (e) {
                var r = o.current;
                r || Se(!1), (r.textContent = e);
              }, []);
            Fn(
              function () {
                (o.current || a.current) && Se(!1);
                var n = kn(r),
                  c = kn(r);
                (o.current = n),
                  (a.current = c),
                  n.setAttribute(Rn + "-always", e),
                  c.setAttribute(Rn + "-dynamic", e);
                var s = Wn(t);
                return (
                  s.appendChild(n),
                  s.appendChild(c),
                  l(i.always),
                  u(i.resting),
                  function () {
                    var e = function (e) {
                      var r = e.current;
                      r || Se(!1), s.removeChild(r), (e.current = null);
                    };
                    e(o), e(a);
                  }
                );
              },
              [r, l, u, i.always, i.resting, e, t],
            );
            var c = oe(
                function () {
                  return u(i.dragging);
                },
                [u, i.dragging],
              ),
              s = oe(
                function (e) {
                  u("DROP" !== e ? i.userCancel : i.dropAnimating);
                },
                [u, i.dropAnimating, i.userCancel],
              ),
              d = oe(
                function () {
                  a.current && u(i.resting);
                },
                [u, i.resting],
              );
            return ie(
              function () {
                return { dragging: c, dropping: s, resting: d };
              },
              [c, s, d],
            );
          })(r, a, e.stylesInsertionPoint),
          h = oe(function (e) {
            Ri(l).dispatch(e);
          }, []),
          y = ie(
            function () {
              return g(
                {
                  publishWhileDragging: ft,
                  updateDroppableScroll: vt,
                  updateDroppableIsEnabled: mt,
                  updateDroppableIsCombineEnabled: bt,
                  collectionStarting: gt,
                },
                h,
              );
            },
            [h],
          ),
          I = (function () {
            var e = ie(zn, []);
            return (
              (0, n.useEffect)(
                function () {
                  return function () {
                    requestAnimationFrame(e.clean);
                  };
                },
                [e],
              ),
              e
            );
          })(),
          x = ie(
            function () {
              return an(d, I, y);
            },
            [d, I, y],
          ),
          w = ie(
            function () {
              return On(
                (0, o.A)(
                  { scrollWindow: ln, scrollDroppable: x.scrollDroppable },
                  g({ move: ht }, h),
                ),
              );
            },
            [x.scrollDroppable, h],
          ),
          E = (function (e) {
            var r = (0, n.useRef)({}),
              t = (0, n.useRef)(null),
              i = (0, n.useRef)(null),
              o = (0, n.useRef)(!1),
              a = oe(function (e, t) {
                var n = { id: e, focus: t };
                return (
                  (r.current[e] = n),
                  function () {
                    var t = r.current;
                    t[e] !== n && delete t[e];
                  }
                );
              }, []),
              u = oe(
                function (r) {
                  var t = Vn(e, r);
                  t && t !== document.activeElement && t.focus();
                },
                [e],
              ),
              l = oe(function (e, r) {
                t.current === e && (t.current = r);
              }, []),
              c = oe(
                function () {
                  i.current ||
                    (o.current &&
                      (i.current = requestAnimationFrame(function () {
                        i.current = null;
                        var e = t.current;
                        e && u(e);
                      })));
                },
                [u],
              ),
              s = oe(function (e) {
                t.current = null;
                var r = document.activeElement;
                r && r.getAttribute(Bn.draggableId) === e && (t.current = e);
              }, []);
            return (
              Fn(function () {
                return (
                  (o.current = !0),
                  function () {
                    o.current = !1;
                    var e = i.current;
                    e && cancelAnimationFrame(e);
                  }
                );
              }, []),
              ie(
                function () {
                  return {
                    register: a,
                    tryRecordFocus: s,
                    tryRestoreFocusRecorded: c,
                    tryShiftRecord: l,
                  };
                },
                [a, s, c, l],
              )
            );
          })(r),
          A = ie(
            function () {
              return $t({
                announce: v,
                autoScroller: w,
                dimensionMarshal: x,
                focusMarshal: E,
                getResponders: f,
                styleMarshal: b,
              });
            },
            [v, w, x, E, f, b],
          );
        c && (l.current = A);
        var C = oe(function () {
            var e = Ri(l);
            "IDLE" !== e.getState().phase && e.dispatch(wt());
          }, []),
          P = oe(function () {
            var e = Ri(l).getState();
            return e.isDragging || "DROP_ANIMATING" === e.phase;
          }, []);
        t(
          ie(
            function () {
              return { isDragging: P, tryAbort: C };
            },
            [P, C],
          ),
        );
        var S = oe(function (e) {
            return un(Ri(l).getState(), e);
          }, []),
          N = oe(function () {
            return Vr(Ri(l).getState());
          }, []),
          O = ie(
            function () {
              return {
                marshal: x,
                focus: E,
                contextId: r,
                canLift: S,
                isMovementAllowed: N,
                dragHandleUsageInstructionsId: m,
                registry: I,
              };
            },
            [r, x, m, E, S, N, I],
          );
        return (
          Ni({
            contextId: r,
            store: A,
            registry: I,
            customSensors: i,
            enableDefaultSensors: !1 !== e.enableDefaultSensors,
            windowToUse: d,
          }),
          (0, n.useEffect)(
            function () {
              return C;
            },
            [C],
          ),
          n.createElement(
            ei.Provider,
            { value: O },
            n.createElement("div", { ref: s }),
            c && n.createElement(D, { context: Yn, store: A }, e.children),
          )
        );
      }
      var Ti = 0;
      function Li(e) {
        var r = ie(function () {
            return "" + Ti++;
          }, []),
          t = e.dragHandleUsageInstructions || Le.dragHandleUsageInstructions;
        return n.createElement(Ne, null, function (i) {
          return n.createElement(
            Bi,
            {
              nonce: e.nonce,
              contextId: r,
              setCallbacks: i,
              dragHandleUsageInstructions: t,
              enableDefaultSensors: e.enableDefaultSensors,
              sensors: e.sensors,
              onBeforeCapture: e.onBeforeCapture,
              onBeforeDragStart: e.onBeforeDragStart,
              onDragStart: e.onDragStart,
              onDragUpdate: e.onDragUpdate,
              onDragEnd: e.onDragEnd,
              stylesInsertionPoint: e.stylesInsertionPoint,
            },
            e.children,
          );
        });
      }
      var Gi = function (e) {
          return function (r) {
            return e === r;
          };
        },
        Mi = Gi("scroll"),
        _i = Gi("auto"),
        Fi =
          (Gi("visible"),
          function (e, r) {
            return r(e.overflowX) || r(e.overflowY);
          }),
        Wi = function (e) {
          var r = e.ownerDocument.defaultView.getComputedStyle(e),
            t = { overflowX: r.overflowX, overflowY: r.overflowY };
          return Fi(t, Mi) || Fi(t, _i);
        },
        ki = function e(r) {
          return null == r ||
            r === document.body ||
            r === document.documentElement
            ? null
            : Wi(r)
              ? r
              : e(r.parentElement);
        },
        Ui = function (e) {
          return { x: e.scrollLeft, y: e.scrollTop };
        },
        ji = function e(r) {
          return (
            !!r &&
            ("fixed" ===
              r.ownerDocument.defaultView.getComputedStyle(r).position ||
              e(r.parentElement))
          );
        },
        Hi = function (e) {
          var r = e.ref,
            t = e.descriptor,
            n = e.env,
            i = e.windowScroll,
            o = e.direction,
            a = e.isDropDisabled,
            u = e.isCombineEnabled,
            l = e.shouldClipSubject,
            c = n.closestScrollable,
            s = (function (e, r) {
              var t = me(e);
              if (!r) return t;
              if (e !== r) return t;
              var n = t.paddingBox.top - r.scrollTop,
                i = t.paddingBox.left - r.scrollLeft,
                o = n + r.scrollHeight,
                a = i + r.scrollWidth,
                u = le({ top: n, right: a, bottom: o, left: i }, t.border);
              return de({
                borderBox: u,
                margin: t.margin,
                border: t.border,
                padding: t.padding,
              });
            })(r, c),
            d = ge(s, i),
            p = (function () {
              if (!c) return null;
              var e = me(c),
                r = {
                  scrollHeight: c.scrollHeight,
                  scrollWidth: c.scrollWidth,
                };
              return {
                client: e,
                page: ge(e, i),
                scroll: Ui(c),
                scrollSize: r,
                shouldClipSubject: l,
              };
            })(),
            f = (function (e) {
              var r = e.descriptor,
                t = e.isEnabled,
                n = e.isCombineEnabled,
                i = e.isFixedOnPage,
                o = e.direction,
                a = e.client,
                u = e.page,
                l = e.closest,
                c = (function () {
                  if (!l) return null;
                  var e = l.scrollSize,
                    r = l.client,
                    t = Qt({
                      scrollHeight: e.scrollHeight,
                      scrollWidth: e.scrollWidth,
                      height: r.paddingBox.height,
                      width: r.paddingBox.width,
                    });
                  return {
                    pageMarginBox: l.page.marginBox,
                    frameClient: r,
                    scrollSize: e,
                    shouldClipSubject: l.shouldClipSubject,
                    scroll: {
                      initial: l.scroll,
                      current: l.scroll,
                      max: t,
                      diff: { value: Ge, displacement: Ge },
                    },
                  };
                })(),
                s = "vertical" === o ? fr : gr;
              return {
                descriptor: r,
                isCombineEnabled: n,
                isFixedOnPage: i,
                axis: s,
                isEnabled: t,
                client: a,
                page: u,
                frame: c,
                subject: Ye({
                  page: u,
                  withPlaceholder: null,
                  axis: s,
                  frame: c,
                }),
              };
            })({
              descriptor: t,
              isEnabled: !a,
              isCombineEnabled: u,
              isFixedOnPage: n.isFixedOnPage,
              direction: o,
              client: s,
              page: d,
              closest: p,
            });
          return f;
        },
        qi = { passive: !1 },
        Vi = { passive: !0 },
        zi = function (e) {
          return e.shouldPublishImmediately ? qi : Vi;
        };
      function Yi(e) {
        var r = (0, n.useContext)(e);
        return r || Se(!1), r;
      }
      var Ji = function (e) {
        return (e && e.env.closestScrollable) || null;
      };
      function Xi(e) {
        var r = (0, n.useRef)(null),
          t = Yi(ei),
          i = Zn("droppable"),
          o = t.registry,
          a = t.marshal,
          u = ni(e),
          l = ie(
            function () {
              return { id: e.droppableId, type: e.type, mode: e.mode };
            },
            [e.droppableId, e.mode, e.type],
          ),
          c = (0, n.useRef)(l),
          s = ie(
            function () {
              return Ie(function (e, t) {
                r.current || Se(!1);
                var n = { x: e, y: t };
                a.updateDroppableScroll(l.id, n);
              });
            },
            [l.id, a],
          ),
          d = oe(function () {
            var e = r.current;
            return e && e.env.closestScrollable
              ? Ui(e.env.closestScrollable)
              : Ge;
          }, []),
          p = oe(
            function () {
              var e = d();
              s(e.x, e.y);
            },
            [d, s],
          ),
          f = ie(
            function () {
              return xe(p);
            },
            [p],
          ),
          g = oe(
            function () {
              var e = r.current,
                t = Ji(e);
              (e && t) || Se(!1),
                e.scrollOptions.shouldPublishImmediately ? p() : f();
            },
            [f, p],
          ),
          v = oe(
            function (e, n) {
              r.current && Se(!1);
              var i = u.current,
                o = i.getDroppableRef();
              o || Se(!1);
              var a = (function (e) {
                  return { closestScrollable: ki(e), isFixedOnPage: ji(e) };
                })(o),
                c = { ref: o, descriptor: l, env: a, scrollOptions: n };
              r.current = c;
              var s = Hi({
                  ref: o,
                  descriptor: l,
                  env: a,
                  windowScroll: e,
                  direction: i.direction,
                  isDropDisabled: i.isDropDisabled,
                  isCombineEnabled: i.isCombineEnabled,
                  shouldClipSubject: !i.ignoreContainerClipping,
                }),
                d = a.closestScrollable;
              return (
                d &&
                  (d.setAttribute(Gn.contextId, t.contextId),
                  d.addEventListener("scroll", g, zi(c.scrollOptions))),
                s
              );
            },
            [t.contextId, l, g, u],
          ),
          m = oe(function () {
            var e = r.current,
              t = Ji(e);
            return (e && t) || Se(!1), Ui(t);
          }, []),
          b = oe(
            function () {
              var e = r.current;
              e || Se(!1);
              var t = Ji(e);
              (r.current = null),
                t &&
                  (f.cancel(),
                  t.removeAttribute(Gn.contextId),
                  t.removeEventListener("scroll", g, zi(e.scrollOptions)));
            },
            [g, f],
          ),
          h = oe(function (e) {
            var t = r.current;
            t || Se(!1);
            var n = Ji(t);
            n || Se(!1), (n.scrollTop += e.y), (n.scrollLeft += e.x);
          }, []),
          y = ie(
            function () {
              return {
                getDimensionAndWatchScroll: v,
                getScrollWhileDragging: m,
                dragStopped: b,
                scroll: h,
              };
            },
            [b, v, m, h],
          ),
          I = ie(
            function () {
              return { uniqueId: i, descriptor: l, callbacks: y };
            },
            [y, l, i],
          );
        Fn(
          function () {
            return (
              (c.current = I.descriptor),
              o.droppable.register(I),
              function () {
                r.current && b(), o.droppable.unregister(I);
              }
            );
          },
          [y, l, b, I, a, o.droppable],
        ),
          Fn(
            function () {
              r.current &&
                a.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
            },
            [e.isDropDisabled, a],
          ),
          Fn(
            function () {
              r.current &&
                a.updateDroppableIsCombineEnabled(
                  c.current.id,
                  e.isCombineEnabled,
                );
            },
            [e.isCombineEnabled, a],
          );
      }
      function Ki() {}
      var $i = {
          width: 0,
          height: 0,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        Qi = function (e) {
          var r = e.isAnimatingOpenOnMount,
            t = e.placeholder,
            n = e.animate,
            i = (function (e) {
              var r = e.isAnimatingOpenOnMount,
                t = e.placeholder,
                n = e.animate;
              return r || "close" === n
                ? $i
                : {
                    height: t.client.borderBox.height,
                    width: t.client.borderBox.width,
                    margin: t.client.margin,
                  };
            })({ isAnimatingOpenOnMount: r, placeholder: t, animate: n });
          return {
            display: t.display,
            boxSizing: "border-box",
            width: i.width,
            height: i.height,
            marginTop: i.margin.top,
            marginRight: i.margin.right,
            marginBottom: i.margin.bottom,
            marginLeft: i.margin.left,
            flexShrink: "0",
            flexGrow: "0",
            pointerEvents: "none",
            transition: "none" !== n ? Rt.placeholder : null,
          };
        };
      var Zi = n.memo(function (e) {
          var r = (0, n.useRef)(null),
            t = oe(function () {
              r.current && (clearTimeout(r.current), (r.current = null));
            }, []),
            i = e.animate,
            o = e.onTransitionEnd,
            a = e.onClose,
            u = e.contextId,
            l = (0, n.useState)("open" === e.animate),
            c = l[0],
            s = l[1];
          (0, n.useEffect)(
            function () {
              return c
                ? "open" !== i
                  ? (t(), s(!1), Ki)
                  : r.current
                    ? Ki
                    : ((r.current = setTimeout(function () {
                        (r.current = null), s(!1);
                      })),
                      t)
                : Ki;
            },
            [i, c, t],
          );
          var d = oe(
              function (e) {
                "height" === e.propertyName && (o(), "close" === i && a());
              },
              [i, a, o],
            ),
            p = Qi({
              isAnimatingOpenOnMount: c,
              animate: e.animate,
              placeholder: e.placeholder,
            });
          return n.createElement(e.placeholder.tagName, {
            style: p,
            "data-rbd-placeholder-context-id": u,
            onTransitionEnd: d,
            ref: e.innerRef,
          });
        }),
        eo = n.createContext(null);
      var ro = (function (e) {
          function r() {
            for (
              var r, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            return (
              ((r = e.call.apply(e, [this].concat(n)) || this).state = {
                isVisible: Boolean(r.props.on),
                data: r.props.on,
                animate: r.props.shouldAnimate && r.props.on ? "open" : "none",
              }),
              (r.onClose = function () {
                "close" === r.state.animate && r.setState({ isVisible: !1 });
              }),
              r
            );
          }
          return (
            (0, i.A)(r, e),
            (r.getDerivedStateFromProps = function (e, r) {
              return e.shouldAnimate
                ? e.on
                  ? { isVisible: !0, data: e.on, animate: "open" }
                  : r.isVisible
                    ? { isVisible: !0, data: r.data, animate: "close" }
                    : { isVisible: !1, animate: "close", data: null }
                : { isVisible: Boolean(e.on), data: e.on, animate: "none" };
            }),
            (r.prototype.render = function () {
              if (!this.state.isVisible) return null;
              var e = {
                onClose: this.onClose,
                data: this.state.data,
                animate: this.state.animate,
              };
              return this.props.children(e);
            }),
            r
          );
        })(n.PureComponent),
        to = 5e3,
        no = 4500,
        io = function (e, r) {
          return r ? Rt.drop(r.duration) : e ? Rt.snap : Rt.fluid;
        },
        oo = function (e, r) {
          return e ? (r ? St.drop : St.combining) : null;
        };
      function ao(e) {
        return "DRAGGING" === e.type
          ? (function (e) {
              var r = e.dimension.client,
                t = e.offset,
                n = e.combineWith,
                i = e.dropping,
                o = Boolean(n),
                a = (function (e) {
                  return null != e.forceShouldAnimate
                    ? e.forceShouldAnimate
                    : "SNAP" === e.mode;
                })(e),
                u = Boolean(i),
                l = u ? Lt(t, o) : Tt(t);
              return {
                position: "fixed",
                top: r.marginBox.top,
                left: r.marginBox.left,
                boxSizing: "border-box",
                width: r.borderBox.width,
                height: r.borderBox.height,
                transition: io(a, i),
                transform: l,
                opacity: oo(o, u),
                zIndex: u ? no : to,
                pointerEvents: "none",
              };
            })(e)
          : {
              transform: Tt((r = e).offset),
              transition: r.shouldAnimateDisplacement ? null : "none",
            };
        var r;
      }
      function uo(e) {
        var r = Zn("draggable"),
          t = e.descriptor,
          i = e.registry,
          o = e.getDraggableRef,
          a = e.canDragInteractiveElements,
          u = e.shouldRespectForcePress,
          l = e.isEnabled,
          c = ie(
            function () {
              return {
                canDragInteractiveElements: a,
                shouldRespectForcePress: u,
                isEnabled: l,
              };
            },
            [a, l, u],
          ),
          s = oe(
            function (e) {
              var r = o();
              return (
                r || Se(!1),
                (function (e, r, t) {
                  void 0 === t && (t = Ge);
                  var n = window.getComputedStyle(r),
                    i = r.getBoundingClientRect(),
                    o = ve(i, n),
                    a = ge(o, t);
                  return {
                    descriptor: e,
                    placeholder: {
                      client: o,
                      tagName: r.tagName.toLowerCase(),
                      display: n.display,
                    },
                    displaceBy: { x: o.marginBox.width, y: o.marginBox.height },
                    client: o,
                    page: a,
                  };
                })(t, r, e)
              );
            },
            [t, o],
          ),
          d = ie(
            function () {
              return {
                uniqueId: r,
                descriptor: t,
                options: c,
                getDimension: s,
              };
            },
            [t, s, c, r],
          ),
          p = (0, n.useRef)(d),
          f = (0, n.useRef)(!0);
        Fn(
          function () {
            return (
              i.draggable.register(p.current),
              function () {
                return i.draggable.unregister(p.current);
              }
            );
          },
          [i.draggable],
        ),
          Fn(
            function () {
              if (f.current) f.current = !1;
              else {
                var e = p.current;
                (p.current = d), i.draggable.update(d, e);
              }
            },
            [d, i.draggable],
          );
      }
      function lo(e, r, t) {
        ti();
      }
      function co(e) {
        e.preventDefault();
      }
      var so = function (e, r) {
          return e === r;
        },
        po = function (e) {
          var r = e.combine,
            t = e.destination;
          return t ? t.droppableId : r ? r.droppableId : null;
        };
      function fo(e) {
        return {
          isDragging: !1,
          isDropAnimating: !1,
          isClone: !1,
          dropAnimation: null,
          mode: null,
          draggingOver: null,
          combineTargetFor: e,
          combineWith: null,
        };
      }
      var go = {
        mapped: {
          type: "SECONDARY",
          offset: Ge,
          combineTargetFor: null,
          shouldAnimateDisplacement: !0,
          snapshot: fo(null),
        },
      };
      var vo = ee(
        function () {
          var e,
            r,
            t,
            n =
              ((e = Ie(function (e, r) {
                return { x: e, y: r };
              })),
              (r = Ie(function (e, r, t, n, i) {
                return {
                  isDragging: !0,
                  isClone: r,
                  isDropAnimating: Boolean(i),
                  dropAnimation: i,
                  mode: e,
                  draggingOver: t,
                  combineWith: n,
                  combineTargetFor: null,
                };
              })),
              (t = Ie(function (e, t, n, i, o, a, u) {
                return {
                  mapped: {
                    type: "DRAGGING",
                    dropping: null,
                    draggingOver: o,
                    combineWith: a,
                    mode: t,
                    offset: e,
                    dimension: n,
                    forceShouldAnimate: u,
                    snapshot: r(t, i, o, a, null),
                  },
                };
              })),
              function (n, i) {
                if (n.isDragging) {
                  if (n.critical.draggable.id !== i.draggableId) return null;
                  var o = n.current.client.offset,
                    a = n.dimensions.draggables[i.draggableId],
                    u = Hr(n.impact),
                    l =
                      (s = n.impact).at && "COMBINE" === s.at.type
                        ? s.at.combine.draggableId
                        : null,
                    c = n.forceShouldAnimate;
                  return t(e(o.x, o.y), n.movementMode, a, i.isClone, u, l, c);
                }
                var s;
                if ("DROP_ANIMATING" === n.phase) {
                  var d = n.completed;
                  if (d.result.draggableId !== i.draggableId) return null;
                  var p = i.isClone,
                    f = n.dimensions.draggables[i.draggableId],
                    g = d.result,
                    v = g.mode,
                    m = po(g),
                    b = (function (e) {
                      return e.combine ? e.combine.draggableId : null;
                    })(g),
                    h = {
                      duration: n.dropDuration,
                      curve: Pt,
                      moveTo: n.newHomeClientOffset,
                      opacity: b ? St.drop : null,
                      scale: b ? Nt.drop : null,
                    };
                  return {
                    mapped: {
                      type: "DRAGGING",
                      offset: n.newHomeClientOffset,
                      dimension: f,
                      dropping: h,
                      draggingOver: m,
                      combineWith: b,
                      mode: v,
                      forceShouldAnimate: null,
                      snapshot: r(v, p, m, b, h),
                    },
                  };
                }
                return null;
              }),
            i = (function () {
              var e = Ie(function (e, r) {
                  return { x: e, y: r };
                }),
                r = Ie(fo),
                t = Ie(function (e, t, n) {
                  return (
                    void 0 === t && (t = null),
                    {
                      mapped: {
                        type: "SECONDARY",
                        offset: e,
                        combineTargetFor: t,
                        shouldAnimateDisplacement: n,
                        snapshot: r(t),
                      },
                    }
                  );
                }),
                n = function (e) {
                  return e ? t(Ge, e, !0) : null;
                },
                i = function (r, i, o, a) {
                  var u = o.displaced.visible[r],
                    l = Boolean(a.inVirtualList && a.effected[r]),
                    c = ir(o),
                    s = c && c.draggableId === r ? i : null;
                  if (!u) {
                    if (!l) return n(s);
                    if (o.displaced.invisible[r]) return null;
                    var d = We(a.displacedBy.point),
                      p = e(d.x, d.y);
                    return t(p, s, !0);
                  }
                  if (l) return n(s);
                  var f = o.displacedBy.point,
                    g = e(f.x, f.y);
                  return t(g, s, u.shouldAnimate);
                };
              return function (e, r) {
                if (e.isDragging)
                  return e.critical.draggable.id === r.draggableId
                    ? null
                    : i(
                        r.draggableId,
                        e.critical.draggable.id,
                        e.impact,
                        e.afterCritical,
                      );
                if ("DROP_ANIMATING" === e.phase) {
                  var t = e.completed;
                  return t.result.draggableId === r.draggableId
                    ? null
                    : i(
                        r.draggableId,
                        t.result.draggableId,
                        t.impact,
                        t.afterCritical,
                      );
                }
                return null;
              };
            })();
          return function (e, r) {
            return n(e, r) || i(e, r) || go;
          };
        },
        { dropAnimationFinished: Ct },
        null,
        { context: Yn, pure: !0, areStatePropsEqual: so },
      )(function (e) {
        var r = (0, n.useRef)(null),
          t = oe(function (e) {
            r.current = e;
          }, []),
          i = oe(function () {
            return r.current;
          }, []),
          o = Yi(ei),
          a = o.contextId,
          u = o.dragHandleUsageInstructionsId,
          l = o.registry,
          c = Yi(eo),
          s = c.type,
          d = c.droppableId,
          p = ie(
            function () {
              return {
                id: e.draggableId,
                index: e.index,
                type: s,
                droppableId: d,
              };
            },
            [e.draggableId, e.index, s, d],
          ),
          f = e.children,
          g = e.draggableId,
          v = e.isEnabled,
          m = e.shouldRespectForcePress,
          b = e.canDragInteractiveElements,
          h = e.isClone,
          y = e.mapped,
          I = e.dropAnimationFinished;
        lo(),
          ri(),
          h ||
            uo(
              ie(
                function () {
                  return {
                    descriptor: p,
                    registry: l,
                    getDraggableRef: i,
                    canDragInteractiveElements: b,
                    shouldRespectForcePress: m,
                    isEnabled: v,
                  };
                },
                [p, l, i, b, m, v],
              ),
            );
        var x = ie(
            function () {
              return v
                ? {
                    tabIndex: 0,
                    role: "button",
                    "aria-describedby": u,
                    "data-rbd-drag-handle-draggable-id": g,
                    "data-rbd-drag-handle-context-id": a,
                    draggable: !1,
                    onDragStart: co,
                  }
                : null;
            },
            [a, u, g, v],
          ),
          D = oe(
            function (e) {
              "DRAGGING" === y.type &&
                y.dropping &&
                "transform" === e.propertyName &&
                I();
            },
            [I, y],
          ),
          w = ie(
            function () {
              var e = ao(y),
                r = "DRAGGING" === y.type && y.dropping ? D : null;
              return {
                innerRef: t,
                draggableProps: {
                  "data-rbd-draggable-context-id": a,
                  "data-rbd-draggable-id": g,
                  style: e,
                  onTransitionEnd: r,
                },
                dragHandleProps: x,
              };
            },
            [a, x, g, y, D, t],
          ),
          E = ie(
            function () {
              return {
                draggableId: p.id,
                type: p.type,
                source: { index: p.index, droppableId: p.droppableId },
              };
            },
            [p.droppableId, p.id, p.index, p.type],
          );
        return f(w, y.snapshot, E);
      });
      function mo(e) {
        return Yi(eo).isUsingCloneFor !== e.draggableId || e.isClone
          ? n.createElement(vo, e)
          : null;
      }
      function bo(e) {
        var r = "boolean" != typeof e.isDragDisabled || !e.isDragDisabled,
          t = Boolean(e.disableInteractiveElementBlocking),
          i = Boolean(e.shouldRespectForcePress);
        return n.createElement(
          mo,
          (0, o.A)({}, e, {
            isClone: !1,
            isEnabled: r,
            canDragInteractiveElements: t,
            shouldRespectForcePress: i,
          }),
        );
      }
      var ho = function (e, r) {
          return e === r.droppable.type;
        },
        yo = function (e, r) {
          return r.draggables[e.draggable.id];
        };
      var Io = {
          mode: "standard",
          type: "DEFAULT",
          direction: "vertical",
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          renderClone: null,
          getContainerForClone: function () {
            return document.body || Se(!1), document.body;
          },
        },
        xo = ee(
          function () {
            var e = {
                placeholder: null,
                shouldAnimatePlaceholder: !0,
                snapshot: {
                  isDraggingOver: !1,
                  draggingOverWith: null,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !1,
                },
                useClone: null,
              },
              r = (0, o.A)({}, e, { shouldAnimatePlaceholder: !1 }),
              t = Ie(function (e) {
                return {
                  draggableId: e.id,
                  type: e.type,
                  source: { index: e.index, droppableId: e.droppableId },
                };
              }),
              n = Ie(function (n, i, o, a, u, l) {
                var c = u.descriptor.id;
                if (u.descriptor.droppableId === n) {
                  var s = l ? { render: l, dragging: t(u.descriptor) } : null,
                    d = {
                      isDraggingOver: o,
                      draggingOverWith: o ? c : null,
                      draggingFromThisWith: c,
                      isUsingPlaceholder: !0,
                    };
                  return {
                    placeholder: u.placeholder,
                    shouldAnimatePlaceholder: !1,
                    snapshot: d,
                    useClone: s,
                  };
                }
                if (!i) return r;
                if (!a) return e;
                var p = {
                  isDraggingOver: o,
                  draggingOverWith: c,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !0,
                };
                return {
                  placeholder: u.placeholder,
                  shouldAnimatePlaceholder: !0,
                  snapshot: p,
                  useClone: null,
                };
              });
            return function (t, i) {
              var o = i.droppableId,
                a = i.type,
                u = !i.isDropDisabled,
                l = i.renderClone;
              if (t.isDragging) {
                var c = t.critical;
                if (!ho(a, c)) return r;
                var s = yo(c, t.dimensions),
                  d = Hr(t.impact) === o;
                return n(o, u, d, d, s, l);
              }
              if ("DROP_ANIMATING" === t.phase) {
                var p = t.completed;
                if (!ho(a, p.critical)) return r;
                var f = yo(p.critical, t.dimensions);
                return n(o, u, po(p.result) === o, Hr(p.impact) === o, f, l);
              }
              if ("IDLE" === t.phase && t.completed && !t.shouldFlush) {
                var g = t.completed;
                if (!ho(a, g.critical)) return r;
                var v = Hr(g.impact) === o,
                  m = Boolean(g.impact.at && "COMBINE" === g.impact.at.type),
                  b = g.critical.droppable.id === o;
                return v ? (m ? e : r) : b ? e : r;
              }
              return r;
            };
          },
          {
            updateViewportMaxScroll: function (e) {
              return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e };
            },
          },
          null,
          { context: Yn, pure: !0, areStatePropsEqual: so },
        )(function (e) {
          var r = (0, n.useContext)(ei);
          r || Se(!1);
          var t = r.contextId,
            i = r.isMovementAllowed,
            o = (0, n.useRef)(null),
            a = (0, n.useRef)(null),
            u = e.children,
            l = e.droppableId,
            c = e.type,
            s = e.mode,
            d = e.direction,
            p = e.ignoreContainerClipping,
            f = e.isDropDisabled,
            g = e.isCombineEnabled,
            v = e.snapshot,
            m = e.useClone,
            b = e.updateViewportMaxScroll,
            h = e.getContainerForClone,
            y = oe(function () {
              return o.current;
            }, []),
            I = oe(function (e) {
              o.current = e;
            }, []),
            x =
              (oe(function () {
                return a.current;
              }, []),
              oe(function (e) {
                a.current = e;
              }, []));
          ti();
          var D = oe(
            function () {
              var e;
              i() &&
                b({
                  maxScroll: en(
                    (null == (e = o.current)
                      ? void 0
                      : e.ownerDocument.defaultView) || window,
                  ),
                });
            },
            [i, b],
          );
          Xi({
            droppableId: l,
            type: c,
            mode: s,
            direction: d,
            isDropDisabled: f,
            isCombineEnabled: g,
            ignoreContainerClipping: p,
            getDroppableRef: y,
          });
          var w = n.createElement(
              ro,
              { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
              function (e) {
                var r = e.onClose,
                  i = e.data,
                  o = e.animate;
                return n.createElement(Zi, {
                  placeholder: i,
                  onClose: r,
                  innerRef: x,
                  animate: o,
                  contextId: t,
                  onTransitionEnd: D,
                });
              },
            ),
            E = ie(
              function () {
                return {
                  innerRef: I,
                  placeholder: w,
                  droppableProps: {
                    "data-rbd-droppable-id": l,
                    "data-rbd-droppable-context-id": t,
                  },
                };
              },
              [t, l, w, I],
            ),
            A = m ? m.dragging.draggableId : null,
            C = ie(
              function () {
                return { droppableId: l, type: c, isUsingCloneFor: A };
              },
              [l, A, c],
            );
          return n.createElement(
            eo.Provider,
            { value: C },
            u(E, v),
            (function () {
              if (!m) return null;
              var e = m.dragging,
                r = m.render,
                t = n.createElement(
                  mo,
                  {
                    draggableId: e.draggableId,
                    index: e.source.index,
                    isClone: !0,
                    isEnabled: !0,
                    shouldRespectForcePress: !1,
                    canDragInteractiveElements: !0,
                  },
                  function (t, n) {
                    return r(t, n, e);
                  },
                );
              return te.createPortal(t, h());
            })(),
          );
        });
      xo.defaultProps = Io;
    },
    59671: (e, r) => {
      var t = 60103,
        n = 60106,
        i = 60107,
        o = 60108,
        a = 60114,
        u = 60109,
        l = 60110,
        c = 60112,
        s = 60113,
        d = 60120,
        p = 60115,
        f = 60116,
        g = 60121,
        v = 60122,
        m = 60117,
        b = 60129,
        h = 60131;
      /** @license React v17.0.2
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ if ("function" == typeof Symbol && Symbol.for) {
        var y = Symbol.for;
        (t = y("react.element")),
          (n = y("react.portal")),
          (i = y("react.fragment")),
          (o = y("react.strict_mode")),
          (a = y("react.profiler")),
          (u = y("react.provider")),
          (l = y("react.context")),
          (c = y("react.forward_ref")),
          (s = y("react.suspense")),
          (d = y("react.suspense_list")),
          (p = y("react.memo")),
          (f = y("react.lazy")),
          (g = y("react.block")),
          (v = y("react.server.block")),
          (m = y("react.fundamental")),
          (b = y("react.debug_trace_mode")),
          (h = y("react.legacy_hidden"));
      }
      function I(e) {
        if ("object" == typeof e && null !== e) {
          var r = e.$$typeof;
          switch (r) {
            case t:
              switch ((e = e.type)) {
                case i:
                case a:
                case o:
                case s:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case c:
                    case f:
                    case p:
                    case u:
                      return e;
                    default:
                      return r;
                  }
              }
            case n:
              return r;
          }
        }
      }
      r.isContextConsumer = function (e) {
        return I(e) === l;
      };
    },
    44019: (e, r, t) => {
      e.exports = t(59671);
    },
    55635: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(53144);
      function i(e, r, t) {
        return (
          (r = (0, n.A)(r)) in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
    },
    54883: (e, r, t) => {
      t.d(r, { A: () => o });
      var n = t(55635);
      function i(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function o(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? i(Object(t), !0).forEach(function (r) {
                (0, n.A)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : i(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
        }
        return e;
      }
    },
    53144: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(11052);
      function i(e) {
        var r = (function (e, r) {
          if ("object" != (0, n.A)(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var i = t.call(e, r || "default");
            if ("object" != (0, n.A)(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(e);
        })(e, "string");
        return "symbol" == (0, n.A)(r) ? r : r + "";
      }
    },
    11052: (e, r, t) => {
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      t.d(r, { A: () => n });
    },
  },
]);
