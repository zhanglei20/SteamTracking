/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3056],
  {
    17083: (e, t, n) => {
      n.d(t, { N_: () => p, k2: () => b });
      var r = n(92757),
        o = n(42891),
        u = n(90626),
        i = n(29248),
        c = n(58584),
        l = n(81115),
        s = n(68841);
      u.Component;
      u.Component;
      var a = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        f = function (e, t) {
          return "string" == typeof e ? (0, i.yJ)(e, null, null, t) : e;
        },
        d = function (e) {
          return e;
        },
        v = u.forwardRef;
      void 0 === v && (v = d);
      var m = v(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          o = e.onClick,
          i = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
          s = i.target,
          a = (0, c.A)({}, i, {
            onClick: function (e) {
              try {
                o && o(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (s && "_self" !== s) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (a.ref = (d !== v && t) || n), u.createElement("a", a);
      });
      var p = v(function (e, t) {
          var n = e.component,
            o = void 0 === n ? m : n,
            p = e.replace,
            g = e.to,
            h = e.innerRef,
            b = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
          return u.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, s.A)(!1);
            var n = e.history,
              r = f(a(g, e.location), e.location),
              l = r ? n.createHref(r) : "",
              m = (0, c.A)({}, b, {
                href: l,
                navigate: function () {
                  var t = a(g, e.location),
                    r = (0, i.AO)(e.location) === (0, i.AO)(f(t));
                  (p || r ? n.replace : n.push)(t);
                },
              });
            return (
              d !== v ? (m.ref = t || h) : (m.innerRef = h),
              u.createElement(o, m)
            );
          });
        }),
        g = function (e) {
          return e;
        },
        h = u.forwardRef;
      void 0 === h && (h = g);
      var b = h(function (e, t) {
        var n = e["aria-current"],
          o = void 0 === n ? "page" : n,
          i = e.activeClassName,
          d = void 0 === i ? "active" : i,
          v = e.activeStyle,
          m = e.className,
          b = e.exact,
          y = e.isActive,
          E = e.location,
          R = e.sensitive,
          w = e.strict,
          x = e.style,
          k = e.to,
          I = e.innerRef,
          C = (0, l.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return u.createElement(r.XZ.Consumer, null, function (e) {
          e || (0, s.A)(!1);
          var n = E || e.location,
            i = f(a(k, n), n),
            l = i.pathname,
            M = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            S = M
              ? (0, r.B6)(n.pathname, {
                  path: M,
                  exact: b,
                  sensitive: R,
                  strict: w,
                })
              : null,
            A = !!(y ? y(S, n) : S),
            O = "function" == typeof m ? m(A) : m,
            L = "function" == typeof x ? x(A) : x;
          A &&
            ((O = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(O, d)),
            (L = (0, c.A)({}, L, v)));
          var T = (0, c.A)(
            { "aria-current": (A && o) || null, className: O, style: L, to: i },
            C,
          );
          return (
            g !== h ? (T.ref = t || I) : (T.innerRef = I), u.createElement(p, T)
          );
        });
      });
    },
    94621: (e, t, n) => {
      n.d(t, {
        BN: () => m,
        Ej: () => g,
        UU: () => p,
        cY: () => v,
        we: () => d,
      });
      var r = n(28505),
        o = n(33559),
        u = n(90626),
        i = n(72739),
        c = "undefined" != typeof document ? u.useLayoutEffect : u.useEffect;
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
        const t = u.useRef(e);
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
            elements: { reference: v, floating: m } = {},
            transform: p = !0,
            whileElementsMounted: g,
            open: h,
          } = e,
          [b, y] = u.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [E, R] = u.useState(o);
        l(E, o) || R(o);
        const [w, x] = u.useState(null),
          [k, I] = u.useState(null),
          C = u.useCallback((e) => {
            e !== O.current && ((O.current = e), x(e));
          }, []),
          M = u.useCallback((e) => {
            e !== L.current && ((L.current = e), I(e));
          }, []),
          S = v || w,
          A = m || k,
          O = u.useRef(null),
          L = u.useRef(null),
          T = u.useRef(b),
          N = null != g,
          P = f(g),
          D = f(d),
          q = f(h),
          F = u.useCallback(() => {
            if (!O.current || !L.current) return;
            const e = { placement: t, strategy: n, middleware: E };
            D.current && (e.platform = D.current),
              (0, r.rD)(O.current, L.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== q.current };
                K.current &&
                  !l(T.current, t) &&
                  ((T.current = t),
                  i.flushSync(() => {
                    y(t);
                  }));
              });
          }, [E, t, n, D, q]);
        c(() => {
          !1 === h &&
            T.current.isPositioned &&
            ((T.current.isPositioned = !1),
            y((e) => ({ ...e, isPositioned: !1 })));
        }, [h]);
        const K = u.useRef(!1);
        c(
          () => (
            (K.current = !0),
            () => {
              K.current = !1;
            }
          ),
          [],
        ),
          c(() => {
            if ((S && (O.current = S), A && (L.current = A), S && A)) {
              if (P.current) return P.current(S, A, F);
              F();
            }
          }, [S, A, F, P, N]);
        const _ = u.useMemo(
            () => ({
              reference: O,
              floating: L,
              setReference: C,
              setFloating: M,
            }),
            [C, M],
          ),
          j = u.useMemo(() => ({ reference: S, floating: A }), [S, A]),
          B = u.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!j.floating) return e;
            const t = a(j.floating, b.x),
              r = a(j.floating, b.y);
            return p
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(s(j.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, p, j.floating, b.x, b.y]);
        return u.useMemo(
          () => ({ ...b, update: F, refs: _, elements: j, floatingStyles: B }),
          [b, F, _, j, B],
        );
      }
      const v = (e, t) => ({ ...(0, o.cY)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        g = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      n.d(t, {
        s3: () => ft,
        ph: () => me,
        XF: () => nt,
        iB: () => qt,
        kp: () => mt,
        s9: () => bt,
        we: () => yt,
        iQ: () => Et,
        Mk: () => Te,
        bv: () => kt,
        rm: () => pe,
        C1: () => Lt,
        SV: () => z,
        It: () => Nt,
        lY: () => Pt,
      });
      var r = n(90626),
        o = n.t(r, 2),
        u = n(977);
      function i(e) {
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
        if (n && (0, u.Ng)(n)) {
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
          (v() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function f(e) {
        return (
          !s().includes("jsdom/") &&
          ((!v() && 0 === e.width && 0 === e.height) ||
            (v() &&
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
      function v() {
        const e = /android/i;
        return e.test(l()) || e.test(s());
      }
      function m(e, t) {
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
      const b =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function y(e) {
        return (0, u.sb)(e) && e.matches(b);
      }
      function E(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function R(e) {
        return !!e && "combobox" === e.getAttribute("role") && y(e);
      }
      var w = n(58015),
        x = n(7850),
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
        M = C
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        S =
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
        A = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        O = function (e, t, n) {
          if (A(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(I));
          return t && M.call(e, I) && r.unshift(e), (r = r.filter(n));
        },
        L = function e(t, n, r) {
          for (var o = [], u = Array.from(t); u.length; ) {
            var i = u.shift();
            if (!A(i, !1))
              if ("SLOT" === i.tagName) {
                var c = i.assignedElements(),
                  l = e(c.length ? c : i.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: i, candidates: l });
              } else {
                M.call(i, I) &&
                  r.filter(i) &&
                  (n || !t.includes(i)) &&
                  o.push(i);
                var s =
                    i.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(i)),
                  a =
                    !A(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
                if (s && a) {
                  var f = e(!0 === s ? i.children : s.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, f)
                    : o.push({ scopeParent: i, candidates: f });
                } else u.unshift.apply(u, i.children);
              }
          }
          return o;
        },
        T = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        N = function (e) {
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
            !T(e)
            ? 0
            : e.tabIndex;
        },
        P = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        D = function (e) {
          return "INPUT" === e.tagName;
        },
        q = function (e) {
          return (
            (function (e) {
              return D(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || S(e),
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
        K = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = M.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (M.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return F(e);
          } else {
            if ("function" == typeof r) {
              for (var u = e; e; ) {
                var i = e.parentElement,
                  c = S(e);
                if (i && !i.shadowRoot && !0 === r(i)) return F(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : i || c === e.ownerDocument
                    ? i
                    : c.host;
              }
              e = u;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  u = e && S(e),
                  i = null === (t = u) || void 0 === t ? void 0 : t.host,
                  c = !1;
                if (u && u !== e)
                  for (
                    c = !!(
                      (null !== (n = i) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(i)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !c && i;
                  ) {
                    var l, s, a;
                    c = !(
                      null ===
                        (s = i =
                          null === (l = u = S(i)) || void 0 === l
                            ? void 0
                            : l.host) ||
                      void 0 === s ||
                      null === (a = s.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(i)
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
        _ = function (e, t) {
          return !(
            t.disabled ||
            A(t) ||
            (function (e) {
              return D(e) && "hidden" === e.type;
            })(t) ||
            K(t, e) ||
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
                          !!M.call(t, "fieldset[disabled] *") || !r.contains(e)
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
        j = function (e, t) {
          return !(q(t) || N(t) < 0 || !_(e, t));
        },
        B = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        U = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var u = !!t.scopeParent,
                i = u ? t.scopeParent : t,
                c = (function (e, t) {
                  var n = N(e);
                  return n < 0 && t && !T(e) ? 0 : n;
                })(i, u),
                l = u ? e(t.candidates) : i;
              0 === c
                ? u
                  ? n.push.apply(n, l)
                  : n.push(i)
                : r.push({
                    documentOrder: o,
                    tabIndex: c,
                    item: t,
                    isScope: u,
                    content: l,
                  });
            }),
            r
              .sort(P)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        W = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? L([e], t.includeContainer, {
                  filter: j.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: B,
                })
              : O(e, t.includeContainer, j.bind(null, t))),
            U(n)
          );
        },
        H = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== M.call(e, I) && j(t, e);
        },
        X = n(72739),
        Y = n(94621);
      function z(e) {
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
      const V = { ...o },
        $ = V.useInsertionEffect || ((e) => e());
      function G(e) {
        const t = r.useRef(() => {
          0;
        });
        return (
          $(() => {
            t.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      const Z = "ArrowUp",
        J = "ArrowDown",
        Q = "ArrowLeft",
        ee = "ArrowRight";
      function te(e, t, n) {
        return Math.floor(e / t) !== n;
      }
      function ne(e, t) {
        return t < 0 || t >= e.current.length;
      }
      function re(e, t) {
        return ue(e, { disabledIndices: t });
      }
      function oe(e, t) {
        return ue(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: t,
        });
      }
      function ue(e, t) {
        let {
          startingIndex: n = -1,
          decrement: r = !1,
          disabledIndices: o,
          amount: u = 1,
        } = void 0 === t ? {} : t;
        const i = e.current;
        let c = n;
        do {
          c += r ? -u : u;
        } while (c >= 0 && c <= i.length - 1 && ae(i, c, o));
        return c;
      }
      function ie(e, t) {
        let {
            event: n,
            orientation: r,
            loop: o,
            rtl: u,
            cols: i,
            disabledIndices: c,
            minIndex: l,
            maxIndex: s,
            prevIndex: a,
            stopEvent: f = !1,
          } = t,
          d = a;
        if (n.key === Z) {
          if ((f && E(n), -1 === a)) d = s;
          else if (
            ((d = ue(e, {
              startingIndex: d,
              amount: i,
              decrement: !0,
              disabledIndices: c,
            })),
            o && (a - i < l || d < 0))
          ) {
            const e = a % i,
              t = s % i,
              n = s - (t - e);
            d = t === e ? s : t > e ? n : n - i;
          }
          ne(e, d) && (d = a);
        }
        if (
          (n.key === J &&
            (f && E(n),
            -1 === a
              ? (d = l)
              : ((d = ue(e, {
                  startingIndex: a,
                  amount: i,
                  disabledIndices: c,
                })),
                o &&
                  a + i > s &&
                  (d = ue(e, {
                    startingIndex: (a % i) - i,
                    amount: i,
                    disabledIndices: c,
                  }))),
            ne(e, d) && (d = a)),
          "both" === r)
        ) {
          const t = (0, w.RI)(a / i);
          n.key === (u ? Q : ee) &&
            (f && E(n),
            a % i !== i - 1
              ? ((d = ue(e, { startingIndex: a, disabledIndices: c })),
                o &&
                  te(d, i, t) &&
                  (d = ue(e, {
                    startingIndex: a - (a % i) - 1,
                    disabledIndices: c,
                  })))
              : o &&
                (d = ue(e, {
                  startingIndex: a - (a % i) - 1,
                  disabledIndices: c,
                })),
            te(d, i, t) && (d = a)),
            n.key === (u ? ee : Q) &&
              (f && E(n),
              a % i !== 0
                ? ((d = ue(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: c,
                  })),
                  o &&
                    te(d, i, t) &&
                    (d = ue(e, {
                      startingIndex: a + (i - (a % i)),
                      decrement: !0,
                      disabledIndices: c,
                    })))
                : o &&
                  (d = ue(e, {
                    startingIndex: a + (i - (a % i)),
                    decrement: !0,
                    disabledIndices: c,
                  })),
              te(d, i, t) && (d = a));
          const r = (0, w.RI)(s / i) === t;
          ne(e, d) &&
            (d =
              o && r
                ? n.key === (u ? ee : Q)
                  ? s
                  : ue(e, {
                      startingIndex: a - (a % i) - 1,
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
          e.forEach((e, u) => {
            let { width: i, height: c } = e,
              l = !1;
            for (n && (o = 0); !l; ) {
              const e = [];
              for (let n = 0; n < i; n++)
                for (let r = 0; r < c; r++) e.push(o + n + r * t);
              (o % t) + i <= t && e.every((e) => null == r[e])
                ? (e.forEach((e) => {
                    r[e] = u;
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
        const u = n.indexOf(e),
          i = t[e];
        switch (o) {
          case "tl":
            return u;
          case "tr":
            return i ? u + i.width - 1 : u;
          case "bl":
            return i ? u + (i.height - 1) * r : u;
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
      const ve = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function me(e) {
        const { children: t, elementsRef: n, labelsRef: o } = e,
          [u, i] = r.useState(() => new Set()),
          c = r.useCallback((e) => {
            i((t) => new Set(t).add(e));
          }, []),
          l = r.useCallback((e) => {
            i((t) => {
              const n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          s = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(u.keys())
                .sort(de)
                .forEach((t, n) => {
                  e.set(t, n);
                }),
              e
            );
          }, [u]);
        return (0, x.jsx)(ve.Provider, {
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
            map: u,
            elementsRef: i,
            labelsRef: c,
          } = r.useContext(ve),
          [l, s] = r.useState(null),
          a = r.useRef(null),
          f = r.useCallback(
            (e) => {
              if (((a.current = e), null !== l && ((i.current[l] = e), c))) {
                var n;
                const r = void 0 !== t;
                c.current[l] = r
                  ? t
                  : null != (n = null == e ? void 0 : e.textContent)
                    ? n
                    : null;
              }
            },
            [l, i, c, t],
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
            const e = a.current ? u.get(a.current) : null;
            null != e && s(e);
          }, [u]),
          r.useMemo(() => ({ ref: f, index: null == l ? -1 : l }), [l, f])
        );
      }
      const ge = [Q, ee],
        he = [Z, J];
      let be = !1,
        ye = 0;
      const Ee = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + ye++;
      const Re =
        V.useId ||
        function () {
          const [e, t] = r.useState(() => (be ? Ee() : void 0));
          return (
            fe(() => {
              null == e && t(Ee());
            }, []),
            r.useEffect(() => {
              be = !0;
            }, []),
            e
          );
        };
      function we() {
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
      const xe = r.createContext(null),
        ke = r.createContext(null),
        Ie = () => {
          var e;
          return (null == (e = r.useContext(xe)) ? void 0 : e.id) || null;
        },
        Ce = () => r.useContext(ke);
      function Me(e) {
        return "data-floating-ui-" + e;
      }
      function Se(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Ae(e) {
        const t = (0, r.useRef)(e);
        return (
          fe(() => {
            t.current = e;
          }),
          t
        );
      }
      const Oe = Me("safe-polygon");
      function Le(e, t, n) {
        return n && !m(n)
          ? 0
          : "number" == typeof e
            ? e
            : null == e
              ? void 0
              : e[t];
      }
      function Te(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: i,
            events: l,
            elements: s,
          } = e,
          {
            enabled: a = !0,
            delay: f = 0,
            handleClose: d = null,
            mouseOnly: v = !1,
            restMs: g = 0,
            move: h = !0,
          } = t,
          b = Ce(),
          y = Ie(),
          E = Ae(d),
          R = Ae(f),
          w = Ae(n),
          x = r.useRef(),
          k = r.useRef(-1),
          I = r.useRef(),
          C = r.useRef(-1),
          M = r.useRef(!0),
          S = r.useRef(!1),
          A = r.useRef(() => {}),
          O = r.useRef(!1),
          L = r.useCallback(() => {
            var e;
            const t = null == (e = i.current.openEvent) ? void 0 : e.type;
            return (
              (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
            );
          }, [i]);
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
            t || (Se(k), Se(C), (M.current = !0), (O.current = !1));
          }
        }, [a, l]),
          r.useEffect(() => {
            if (!a) return;
            if (!E.current) return;
            if (!n) return;
            function e(e) {
              L() && o(!1, e, "hover");
            }
            const t = p(s.floating).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [s.floating, n, o, a, E, L]);
        const T = r.useCallback(
            function (e, t, n) {
              void 0 === t && (t = !0), void 0 === n && (n = "hover");
              const r = Le(R.current, "close", x.current);
              r && !I.current
                ? (Se(k), (k.current = window.setTimeout(() => o(!1, e, n), r)))
                : t && (Se(k), o(!1, e, n));
            },
            [R, o],
          ),
          N = G(() => {
            A.current(), (I.current = void 0);
          }),
          P = G(() => {
            if (S.current) {
              const e = p(s.floating).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(Oe),
                (S.current = !1);
            }
          }),
          D = G(
            () =>
              !!i.current.openEvent &&
              ["click", "mousedown"].includes(i.current.openEvent.type),
          );
        r.useEffect(() => {
          if (a && (0, u.vq)(s.domReference)) {
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
              (Se(k),
              (M.current = !1),
              (v && !m(x.current)) || (g > 0 && !Le(R.current, "open")))
            )
              return;
            const t = Le(R.current, "open", x.current);
            t
              ? (k.current = window.setTimeout(() => {
                  w.current || o(!0, e, "hover");
                }, t))
              : n || o(!0, e, "hover");
          }
          function r(e) {
            if (D()) return;
            A.current();
            const t = p(s.floating);
            if (
              (Se(C), (O.current = !1), E.current && i.current.floatingContext)
            ) {
              n || Se(k),
                (I.current = E.current({
                  ...i.current.floatingContext,
                  tree: b,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    P(), N(), D() || T(e, !0, "safe-polygon");
                  },
                }));
              const r = I.current;
              return (
                t.addEventListener("mousemove", r),
                void (A.current = () => {
                  t.removeEventListener("mousemove", r);
                })
              );
            }
            ("touch" !== x.current || !c(s.floating, e.relatedTarget)) && T(e);
          }
          function l(e) {
            D() ||
              (i.current.floatingContext &&
                (null == E.current ||
                  E.current({
                    ...i.current.floatingContext,
                    tree: b,
                    x: e.clientX,
                    y: e.clientY,
                    onClose() {
                      P(), N(), D() || T(e);
                    },
                  })(e)));
          }
        }, [s, a, e, v, g, h, T, N, P, o, n, w, b, R, E, i, D]),
          fe(() => {
            var e;
            if (
              a &&
              n &&
              null != (e = E.current) &&
              e.__options.blockPointerEvents &&
              L()
            ) {
              S.current = !0;
              const e = s.floating;
              if ((0, u.vq)(s.domReference) && e) {
                var t;
                const n = p(s.floating).body;
                n.setAttribute(Oe, "");
                const r = s.domReference,
                  o =
                    null == b ||
                    null == (t = b.nodesRef.current.find((e) => e.id === y)) ||
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
          }, [a, n, y, s, b, E, L]),
          fe(() => {
            n || ((x.current = void 0), (O.current = !1), N(), P());
          }, [n, N, P]),
          r.useEffect(
            () => () => {
              N(), Se(k), Se(C), P();
            },
            [a, s.domReference, N, P],
          );
        const q = r.useMemo(() => {
            function e(e) {
              x.current = e.pointerType;
            }
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                const { nativeEvent: t } = e;
                function r() {
                  M.current || w.current || o(!0, t, "hover");
                }
                (v && !m(x.current)) ||
                  n ||
                  0 === g ||
                  (O.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                  (Se(C),
                  "touch" === x.current
                    ? r()
                    : ((O.current = !0),
                      (C.current = window.setTimeout(r, g))));
              },
            };
          }, [v, o, n, w, g]),
          F = r.useMemo(
            () => ({
              onMouseEnter() {
                Se(k);
              },
              onMouseLeave(e) {
                D() || T(e.nativeEvent, !1);
              },
            }),
            [T, D],
          );
        return r.useMemo(
          () => (a ? { reference: q, floating: F } : {}),
          [a, q, F],
        );
      }
      let Ne = 0;
      function Pe(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = t;
        r && cancelAnimationFrame(Ne);
        const u = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? u() : (Ne = requestAnimationFrame(u));
      }
      function De(e, t) {
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
        Ke = new WeakSet(),
        _e = {},
        je = 0;
      const Be = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        Ue = (e) => e && (e.host || Ue(e.parentNode)),
        We = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = Ue(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function He(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = p(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            i = r ? "inert" : n ? "aria-hidden" : null,
            c = We(t, e),
            l = new Set(),
            s = new Set(c),
            a = [];
          _e[o] || (_e[o] = new WeakMap());
          const f = _e[o];
          return (
            c.forEach(function e(t) {
              t && !l.has(t) && (l.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !s.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, u.mq)(t))
                    if (l.has(t)) e(t);
                    else {
                      const e = i ? t.getAttribute(i) : null,
                        n = null !== e && "false" !== e,
                        r = Fe.get(t) || 0,
                        u = i ? r + 1 : r,
                        c = (f.get(t) || 0) + 1;
                      Fe.set(t, u),
                        f.set(t, c),
                        a.push(t),
                        1 === u && n && Ke.add(t),
                        1 === c && t.setAttribute(o, ""),
                        !n && i && t.setAttribute(i, "true");
                    }
                });
            })(t),
            l.clear(),
            je++,
            () => {
              a.forEach((e) => {
                const t = Fe.get(e) || 0,
                  n = i ? t - 1 : t,
                  r = (f.get(e) || 0) - 1;
                Fe.set(e, n),
                  f.set(e, r),
                  n || (!Ke.has(e) && i && e.removeAttribute(i), Ke.delete(e)),
                  r || e.removeAttribute(o);
              }),
                je--,
                je ||
                  ((Fe = new WeakMap()),
                  (Fe = new WeakMap()),
                  (Ke = new WeakSet()),
                  (_e = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const Xe = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function Ye(e, t) {
        const n = W(e, Xe());
        "prev" === t && n.reverse();
        const r = n.indexOf(i(p(e)));
        return n.slice(r + 1)[0];
      }
      function ze() {
        return Ye(document.body, "next");
      }
      function Ve() {
        return Ye(document.body, "prev");
      }
      function $e(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !c(n, r);
      }
      function Ge(e) {
        W(e, Xe()).forEach((e) => {
          (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
            e.setAttribute("tabindex", "-1");
        });
      }
      function Ze(e) {
        e.querySelectorAll("[data-tabindex]").forEach((e) => {
          const t = e.dataset.tabindex;
          delete e.dataset.tabindex,
            t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
        });
      }
      const Je = {
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
        Qe = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          fe(() => {
            d() && o("button");
          }, []);
          const u = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [Me("focus-guard")]: "",
            style: Je,
          };
          return (0, x.jsx)("span", { ...e, ...u });
        }),
        et = r.createContext(null),
        tt = Me("portal");
      function nt(e) {
        const { children: t, id: n, root: o, preserveTabOrder: i = !0 } = e,
          c = (function (e) {
            void 0 === e && (e = {});
            const { id: t, root: n } = e,
              o = Re(),
              i = rt(),
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
                let e = n || (null == i ? void 0 : i.portalNode);
                e && !(0, u.vq)(e) && (e = e.current), (e = e || document.body);
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
              }, [t, n, o, i]),
              c
            );
          })({ id: n, root: o }),
          [l, s] = r.useState(null),
          a = r.useRef(null),
          f = r.useRef(null),
          d = r.useRef(null),
          v = r.useRef(null),
          m = null == l ? void 0 : l.modal,
          p = null == l ? void 0 : l.open,
          g = !!l && !l.modal && l.open && i && !(!o && !c);
        return (
          r.useEffect(() => {
            if (c && i && !m)
              return (
                c.addEventListener("focusin", e, !0),
                c.addEventListener("focusout", e, !0),
                () => {
                  c.removeEventListener("focusin", e, !0),
                    c.removeEventListener("focusout", e, !0);
                }
              );
            function e(e) {
              if (c && $e(e)) {
                ("focusin" === e.type ? Ze : Ge)(c);
              }
            }
          }, [c, i, m]),
          r.useEffect(() => {
            c && (p || Ze(c));
          }, [p, c]),
          (0, x.jsxs)(et.Provider, {
            value: r.useMemo(
              () => ({
                preserveTabOrder: i,
                beforeOutsideRef: a,
                afterOutsideRef: f,
                beforeInsideRef: d,
                afterInsideRef: v,
                portalNode: c,
                setFocusManagerState: s,
              }),
              [i, c],
            ),
            children: [
              g &&
                c &&
                (0, x.jsx)(Qe, {
                  "data-type": "outside",
                  ref: a,
                  onFocus: (e) => {
                    if ($e(e, c)) {
                      var t;
                      null == (t = d.current) || t.focus();
                    } else {
                      const e = Ve() || (null == l ? void 0 : l.domReference);
                      null == e || e.focus();
                    }
                  },
                }),
              g && c && (0, x.jsx)("span", { "aria-owns": c.id, style: Je }),
              c && X.createPortal(t, c),
              g &&
                c &&
                (0, x.jsx)(Qe, {
                  "data-type": "outside",
                  ref: f,
                  onFocus: (e) => {
                    if ($e(e, c)) {
                      var t;
                      null == (t = v.current) || t.focus();
                    } else {
                      const t = ze() || (null == l ? void 0 : l.domReference);
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
      function ut(e) {
        return e
          ? e.hasAttribute(ot)
            ? e
            : e.querySelector("[" + ot + "]") || e
          : null;
      }
      function it(e) {
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
        return (0, x.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: Je,
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
            returnFocus: v = !0,
            restoreFocus: m = !1,
            modal: g = !0,
            visuallyHiddenDismiss: b = !1,
            closeOnFocusOut: y = !0,
            outsideElementsInert: w = !1,
          } = e,
          {
            open: k,
            onOpenChange: I,
            events: C,
            dataRef: M,
            elements: { domReference: S, floating: A },
          } = t,
          O = G(() => {
            var e;
            return null == (e = M.current.floatingContext) ? void 0 : e.nodeId;
          }),
          L = "number" == typeof d && d < 0,
          T = R(S) && L,
          N = Be(),
          P = !N || s,
          D = !P || (N && w),
          q = Ae(l),
          F = Ae(d),
          K = Ae(v),
          _ = Ce(),
          j = rt(),
          B = r.useRef(null),
          U = r.useRef(null),
          X = r.useRef(!1),
          Y = r.useRef(!1),
          z = r.useRef(-1),
          V = null != j,
          $ = ut(A),
          Z = G(function (e) {
            return void 0 === e && (e = $), e ? W(e, Xe()) : [];
          }),
          J = G((e) => {
            const t = Z(e);
            return q.current
              .map((e) =>
                S && "reference" === e ? S : $ && "floating" === e ? $ : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!g) return;
          function e(e) {
            if ("Tab" === e.key) {
              c($, i(p($))) && 0 === Z().length && !T && E(e);
              const t = J(),
                n = h(e);
              "reference" === q.current[0] &&
                n === S &&
                (E(e), e.shiftKey ? Pe(t[t.length - 1]) : Pe(t[1])),
                "floating" === q.current[1] &&
                  n === $ &&
                  e.shiftKey &&
                  (E(e), Pe(t[0]));
            }
          }
          const t = p($);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, S, $, g, q, T, Z, J]),
          r.useEffect(() => {
            if (!o && A)
              return (
                A.addEventListener("focusin", e),
                () => {
                  A.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = h(e),
                n = Z().indexOf(t);
              -1 !== n && (z.current = n);
            }
          }, [o, A, Z]),
          r.useEffect(() => {
            if (!o && y)
              return A && (0, u.sb)(S)
                ? (S.addEventListener("focusout", t),
                  S.addEventListener("pointerdown", e),
                  A.addEventListener("focusout", t),
                  () => {
                    S.removeEventListener("focusout", t),
                      S.removeEventListener("pointerdown", e),
                      A.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (Y.current = !0),
                setTimeout(() => {
                  Y.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = O(),
                  r = !(
                    c(S, t) ||
                    c(A, t) ||
                    c(t, A) ||
                    c(null == j ? void 0 : j.portalNode, t) ||
                    (null != t && t.hasAttribute(Me("focus-guard"))) ||
                    (_ &&
                      (qe(_.nodesRef.current, n).find((e) => {
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
                        De(_.nodesRef.current, n).find((e) => {
                          var n, r, o;
                          return (
                            [
                              null == (n = e.context)
                                ? void 0
                                : n.elements.floating,
                              ut(
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
                if (m && r && i(p($)) === p($).body) {
                  (0, u.sb)($) && $.focus();
                  const e = z.current,
                    t = Z(),
                    n = t[e] || t[t.length - 1] || $;
                  (0, u.sb)(n) && n.focus();
                }
                (!T && g) ||
                  !t ||
                  !r ||
                  Y.current ||
                  t === st() ||
                  ((X.current = !0), I(!1, e, "focus-out"));
              });
            }
          }, [o, S, A, $, g, _, j, I, y, m, Z, T, O]);
        const Q = r.useRef(null),
          ee = r.useRef(null),
          te = it([Q, null == j ? void 0 : j.beforeInsideRef]),
          ne = it([ee, null == j ? void 0 : j.afterInsideRef]);
        function re(e) {
          return !o && b && g
            ? (0, x.jsx)(at, {
                ref: "start" === e ? B : U,
                onClick: (e) => I(!1, e.nativeEvent),
                children: "string" == typeof b ? b : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!A) return;
          const t = Array.from(
              (null == j || null == (e = j.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Me("portal") + "]")) || [],
            ),
            n =
              _ && !g
                ? De(null == _ ? void 0 : _.nodesRef.current, O()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              A,
              ...t,
              ...n,
              B.current,
              U.current,
              Q.current,
              ee.current,
              null == j ? void 0 : j.beforeOutsideRef.current,
              null == j ? void 0 : j.afterOutsideRef.current,
              q.current.includes("reference") || T ? S : null,
            ].filter((e) => null != e),
            u = g || T ? He(r, !D, D) : He(r);
          return () => {
            u();
          };
        }, [o, S, A, g, q, j, T, P, D, _, O]),
          fe(() => {
            if (o || !(0, u.sb)($)) return;
            const e = i(p($));
            queueMicrotask(() => {
              const t = J($),
                n = F.current,
                r = ("number" == typeof n ? t[n] : n.current) || $,
                o = c($, e);
              L || o || !k || Pe(r, { preventScroll: r === $ });
            });
          }, [o, k, $, L, J, F]),
          fe(() => {
            if (o || !$) return;
            let e = !1,
              t = !1;
            const n = p($),
              r = i(n);
            let l = M.current.openEvent;
            var s;
            function d(n) {
              let { open: r, reason: o, event: u, nested: i } = n;
              if (
                (r && (l = u),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === u.type &&
                  (X.current = !0),
                "outside-press" === o)
              )
                if (i) (X.current = !1), (e = !0);
                else if (a(u) || f(u)) X.current = !1;
                else {
                  let t = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (t = !0), !1;
                    },
                  }),
                    t ? ((X.current = !1), (e = !0)) : (X.current = !0);
                }
            }
            (s = r),
              (lt = lt.filter((e) => e.isConnected)),
              s &&
                "body" !== (0, u.mq)(s) &&
                (lt.push(s), lt.length > ct && (lt = lt.slice(-ct))),
              C.on("openchange", d);
            const v = n.createElement("span");
            return (
              v.setAttribute("tabindex", "-1"),
              v.setAttribute("aria-hidden", "true"),
              Object.assign(v.style, Je),
              V && S && S.insertAdjacentElement("afterend", v),
              () => {
                C.off("openchange", d);
                const r = i(n),
                  o =
                    c(A, r) ||
                    (_ &&
                      qe(_.nodesRef.current, O()).some((e) => {
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
                  "boolean" == typeof K.current
                    ? t && S
                      ? S
                      : st() || v
                    : K.current.current || v;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = Xe();
                    return H(e, t) ? e : W(e, t)[0] || e;
                  })(s);
                  K.current &&
                    !X.current &&
                    (0, u.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    v.remove();
                });
              }
            );
          }, [o, A, $, K, M, C, _, V, S, O]),
          r.useEffect(() => {
            queueMicrotask(() => {
              X.current = !1;
            });
          }, [o]),
          fe(() => {
            if (!o && j)
              return (
                j.setFocusManagerState({
                  modal: g,
                  closeOnFocusOut: y,
                  open: k,
                  onOpenChange: I,
                  domReference: S,
                }),
                () => {
                  j.setFocusManagerState(null);
                }
              );
          }, [o, j, g, k, I, y, S]),
          fe(() => {
            if (o) return;
            if (!$) return;
            if ("function" != typeof MutationObserver) return;
            if (L) return;
            const e = () => {
              const e = $.getAttribute("tabindex"),
                t = Z(),
                n = i(p(A)),
                r = t.indexOf(n);
              -1 !== r && (z.current = r),
                q.current.includes("floating") || (n !== S && 0 === t.length)
                  ? "0" !== e && $.setAttribute("tabindex", "0")
                  : "-1" !== e && $.setAttribute("tabindex", "-1");
            };
            e();
            const t = new MutationObserver(e);
            return (
              t.observe($, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                t.disconnect();
              }
            );
          }, [o, A, $, S, q, Z, L]);
        const oe = !o && P && (!g || !T) && (V || g);
        return (0, x.jsxs)(x.Fragment, {
          children: [
            oe &&
              (0, x.jsx)(Qe, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (g) {
                    const e = J();
                    Pe("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != j && j.preserveTabOrder && j.portalNode)
                    if (((X.current = !1), $e(e, j.portalNode))) {
                      const e = ze() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = j.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !T && re("start"),
            n,
            re("end"),
            oe &&
              (0, x.jsx)(Qe, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (g) Pe(J()[0]);
                  else if (null != j && j.preserveTabOrder && j.portalNode)
                    if ((y && (X.current = !0), $e(e, j.portalNode))) {
                      const e = Ve() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = j.afterOutsideRef.current) || t.focus();
                    }
                },
              }),
          ],
        });
      }
      function dt(e) {
        return (0, u.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function vt(e) {
        return y(e);
      }
      function mt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: u,
            elements: { domReference: i },
          } = e,
          {
            enabled: c = !0,
            event: l = "click",
            toggle: s = !0,
            ignoreMouse: a = !1,
            keyboardHandlers: f = !0,
            stickIfOpen: d = !0,
          } = t,
          v = r.useRef(),
          p = r.useRef(!1),
          g = r.useMemo(
            () => ({
              onPointerDown(e) {
                v.current = e.pointerType;
              },
              onMouseDown(e) {
                const t = v.current;
                0 === e.button &&
                  "click" !== l &&
                  ((m(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (u.current.openEvent &&
                      d &&
                      "mousedown" !== u.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = v.current;
                "mousedown" === l && v.current
                  ? (v.current = void 0)
                  : (m(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (u.current.openEvent &&
                      d &&
                      "click" !== u.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (v.current = void 0),
                  e.defaultPrevented ||
                    !f ||
                    dt(e) ||
                    (" " !== e.key ||
                      vt(i) ||
                      (e.preventDefault(), (p.current = !0)),
                    "Enter" === e.key && o(!n || !s, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  dt(e) ||
                  vt(i) ||
                  (" " === e.key &&
                    p.current &&
                    ((p.current = !1), o(!n || !s, e.nativeEvent, "click")));
              },
            }),
            [u, i, l, a, f, o, n, d, s],
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
      function bt(e, t) {
        void 0 === t && (t = {});
        const { open: n, onOpenChange: o, elements: i, dataRef: l } = e,
          {
            enabled: s = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: v = !1,
            referencePressEvent: m = "pointerdown",
            ancestorScroll: b = !1,
            bubbles: y,
            capture: E,
          } = t,
          R = Ce(),
          w = G("function" == typeof f ? f : () => !1),
          x = "function" == typeof f ? w : f,
          k = r.useRef(!1),
          I = r.useRef(!1),
          { escapeKey: C, outsidePress: M } = ht(y),
          { escapeKey: S, outsidePress: A } = ht(E),
          O = r.useRef(!1),
          L = G((e) => {
            var t;
            if (!n || !s || !a || "Escape" !== e.key) return;
            if (O.current) return;
            const r =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              u = R ? qe(R.nodesRef.current, r) : [];
            if (!C && (e.stopPropagation(), u.length > 0)) {
              let e = !0;
              if (
                (u.forEach((t) => {
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
          T = G((e) => {
            var t;
            const n = () => {
              var t;
              L(e), null == (t = h(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = h(e)) || t.addEventListener("keydown", n);
          }),
          N = G((e) => {
            var t;
            const n = k.current;
            k.current = !1;
            const r = I.current;
            if (((I.current = !1), "click" === d && r)) return;
            if (n) return;
            if ("function" == typeof x && !x(e)) return;
            const s = h(e),
              a = "[" + Me("inert") + "]",
              f = p(i.floating).querySelectorAll(a);
            let v = (0, u.vq)(s) ? s : null;
            for (; v && !(0, u.eu)(v); ) {
              const e = (0, u.$4)(v);
              if ((0, u.eu)(e) || !(0, u.vq)(e)) break;
              v = e;
            }
            if (
              f.length &&
              (0, u.vq)(s) &&
              !s.matches("html,body") &&
              !c(s, i.floating) &&
              Array.from(f).every((e) => !c(v, e))
            )
              return;
            if ((0, u.sb)(s) && q) {
              const t = (0, u.eu)(s),
                n = (0, u.L9)(s),
                r = /auto|scroll/,
                o = t || r.test(n.overflowX),
                i = t || r.test(n.overflowY),
                c = o && s.clientWidth > 0 && s.scrollWidth > s.clientWidth,
                l = i && s.clientHeight > 0 && s.scrollHeight > s.clientHeight,
                a = "rtl" === n.direction,
                f =
                  l &&
                  (a
                    ? e.offsetX <= s.offsetWidth - s.clientWidth
                    : e.offsetX > s.clientWidth),
                d = c && e.offsetY > s.clientHeight;
              if (f || d) return;
            }
            const m =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              b =
                R &&
                qe(R.nodesRef.current, m).some((t) => {
                  var n;
                  return g(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (g(e, i.floating) || g(e, i.domReference) || b) return;
            const y = R ? qe(R.nodesRef.current, m) : [];
            if (y.length > 0) {
              let e = !0;
              if (
                (y.forEach((t) => {
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
          P = G((e) => {
            var t;
            const n = () => {
              var t;
              N(e), null == (t = h(e)) || t.removeEventListener(d, n);
            };
            null == (t = h(e)) || t.addEventListener(d, n);
          });
        r.useEffect(() => {
          if (!n || !s) return;
          (l.current.__escapeKeyBubbles = C),
            (l.current.__outsidePressBubbles = M);
          let e = -1;
          function t(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (O.current = !0);
          }
          function c() {
            e = window.setTimeout(
              () => {
                O.current = !1;
              },
              (0, u.Tc)() ? 5 : 0,
            );
          }
          const f = p(i.floating);
          a &&
            (f.addEventListener("keydown", S ? T : L, S),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", c)),
            x && f.addEventListener(d, A ? P : N, A);
          let v = [];
          return (
            b &&
              ((0, u.vq)(i.domReference) && (v = (0, u.v9)(i.domReference)),
              (0, u.vq)(i.floating) && (v = v.concat((0, u.v9)(i.floating))),
              !(0, u.vq)(i.reference) &&
                i.reference &&
                i.reference.contextElement &&
                (v = v.concat((0, u.v9)(i.reference.contextElement)))),
            (v = v.filter((e) => {
              var t;
              return (
                e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport)
              );
            })),
            v.forEach((e) => {
              e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
              a &&
                (f.removeEventListener("keydown", S ? T : L, S),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", c)),
                x && f.removeEventListener(d, A ? P : N, A),
                v.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, i, a, x, d, n, o, b, s, C, M, L, S, T, N, A, P]),
          r.useEffect(() => {
            k.current = !1;
          }, [x, d]);
        const D = r.useMemo(
            () => ({
              onKeyDown: L,
              ...(v && {
                [pt[m]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== m && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [L, o, v, m],
          ),
          q = r.useMemo(
            () => ({
              onKeyDown: L,
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
            [L, d],
          );
        return r.useMemo(
          () => (s ? { reference: D, floating: q } : {}),
          [s, D, q],
        );
      }
      function yt(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              u = Re(),
              i = r.useRef({}),
              [c] = r.useState(() => we()),
              l = null != Ie(),
              [s, a] = r.useState(o.reference),
              f = G((e, t, r) => {
                (i.current.openEvent = e ? t : void 0),
                  c.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: l,
                  }),
                  null == n || n(e, t, r);
              }),
              d = r.useMemo(() => ({ setPositionReference: a }), []),
              v = r.useMemo(
                () => ({
                  reference: s || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [s, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: i,
                open: t,
                onOpenChange: f,
                elements: v,
                events: c,
                floatingId: u,
                refs: d,
              }),
              [t, f, v, c, u, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || n,
          i = o.elements,
          [c, l] = r.useState(null),
          [s, a] = r.useState(null),
          f = (null == i ? void 0 : i.domReference) || c,
          d = r.useRef(null),
          v = Ce();
        fe(() => {
          f && (d.current = f);
        }, [f]);
        const m = (0, Y.we)({
            ...e,
            elements: { ...i, ...(s && { reference: s }) },
          }),
          p = r.useCallback(
            (e) => {
              const t = (0, u.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), m.refs.setReference(t);
            },
            [m.refs],
          ),
          g = r.useCallback(
            (e) => {
              ((0, u.vq)(e) || null === e) && ((d.current = e), l(e)),
                ((0, u.vq)(m.refs.reference.current) ||
                  null === m.refs.reference.current ||
                  (null !== e && !(0, u.vq)(e))) &&
                  m.refs.setReference(e);
            },
            [m.refs],
          ),
          h = r.useMemo(
            () => ({
              ...m.refs,
              setReference: g,
              setPositionReference: p,
              domReference: d,
            }),
            [m.refs, g, p],
          ),
          b = r.useMemo(
            () => ({ ...m.elements, domReference: f }),
            [m.elements, f],
          ),
          y = r.useMemo(
            () => ({ ...m, ...o, refs: h, elements: b, nodeId: t }),
            [m, h, b, t, o],
          );
        return (
          fe(() => {
            o.dataRef.current.floatingContext = y;
            const e =
              null == v ? void 0 : v.nodesRef.current.find((e) => e.id === t);
            e && (e.context = y);
          }),
          r.useMemo(
            () => ({ ...m, context: y, refs: h, elements: b }),
            [m, h, b, y],
          )
        );
      }
      function Et(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            events: s,
            dataRef: a,
            elements: v,
          } = e,
          { enabled: m = !0, visibleOnly: g = !0 } = t,
          b = r.useRef(!1),
          E = r.useRef(-1),
          R = r.useRef(!0);
        r.useEffect(() => {
          if (!m) return;
          const e = (0, u.zk)(v.domReference);
          function t() {
            !n &&
              (0, u.sb)(v.domReference) &&
              v.domReference === i(p(v.domReference)) &&
              (b.current = !0);
          }
          function r() {
            R.current = !0;
          }
          return (
            e.addEventListener("blur", t),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", t),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [v.domReference, n, m]),
          r.useEffect(() => {
            if (m)
              return (
                s.on("openchange", e),
                () => {
                  s.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: t } = e;
              ("reference-press" !== t && "escape-key" !== t) ||
                (b.current = !0);
            }
          }, [s, m]),
          r.useEffect(
            () => () => {
              Se(E);
            },
            [],
          );
        const w = r.useMemo(
          () => ({
            onPointerDown(e) {
              f(e.nativeEvent) || (R.current = !1);
            },
            onMouseLeave() {
              b.current = !1;
            },
            onFocus(e) {
              if (b.current) return;
              const t = h(e.nativeEvent);
              if (g && (0, u.vq)(t))
                try {
                  if (
                    d() &&
                    l().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!R.current && !y(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              b.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, u.vq)(t) &&
                  t.hasAttribute(Me("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              E.current = window.setTimeout(() => {
                var e;
                const u = i(
                  v.domReference ? v.domReference.ownerDocument : document,
                );
                (t || u !== v.domReference) &&
                  (c(
                    null == (e = a.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    u,
                  ) ||
                    c(v.domReference, u) ||
                    r ||
                    o(!1, n, "focus"));
              });
            },
          }),
          [a, v.domReference, o, g],
        );
        return r.useMemo(() => (m ? { reference: w } : {}), [m, w]);
      }
      const Rt = "active",
        wt = "selected";
      function xt(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let u = e;
        if (o && e) {
          const { [Rt]: t, [wt]: n, ...r } = e;
          u = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [ot]: "" }),
          ...u,
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
                      let [n, u] = t;
                      var i;
                      (o && [Rt, wt].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof u &&
                              (null == (i = r.get(n)) || i.push(u),
                              (e[n] = function () {
                                for (
                                  var e,
                                    t = arguments.length,
                                    o = new Array(t),
                                    u = 0;
                                  u < t;
                                  u++
                                )
                                  o[u] = arguments[u];
                                return null == (e = r.get(n))
                                  ? void 0
                                  : e
                                      .map((e) => e(...o))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[n] = u));
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
          u = r.useCallback((t) => xt(t, e, "reference"), t),
          i = r.useCallback((t) => xt(t, e, "floating"), n),
          c = r.useCallback((t) => xt(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: u,
            getFloatingProps: i,
            getItemProps: c,
          }),
          [u, i, c],
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
      function Mt(e, t) {
        return Ct(t, e === Z || e === J, e === Q || e === ee);
      }
      function St(e, t, n) {
        return (
          Ct(t, e === J, n ? e === Q : e === ee) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function At(e, t, n) {
        return Ct(t, n ? e === Q : e === ee, e === J);
      }
      function Ot(e, t, n, r) {
        return "both" === t || ("horizontal" === t && r && r > 1)
          ? e === It
          : Ct(t, n ? e === ee : e === Q, e === Z);
      }
      function Lt(e, t) {
        const { open: n, onOpenChange: o, elements: l } = e,
          {
            listRef: s,
            activeIndex: d,
            onNavigate: v = () => {},
            enabled: m = !0,
            selectedIndex: g = null,
            allowEscape: h = !1,
            loop: b = !1,
            nested: y = !1,
            rtl: w = !1,
            virtual: x = !1,
            focusItemOnOpen: k = "auto",
            focusItemOnHover: I = !0,
            openOnArrowKeyDown: C = !0,
            disabledIndices: M,
            orientation: S = "vertical",
            cols: A = 1,
            scrollItemIntoView: O = !0,
            virtualItemRef: L,
            itemSizes: T,
            dense: N = !1,
          } = t;
        const P = Ae(ut(l.floating)),
          D = Ie(),
          q = Ce();
        fe(() => {
          e.dataRef.current.orientation = S;
        }, [e, S]);
        const F = G(() => {
            v(-1 === j.current ? null : j.current);
          }),
          K = R(l.domReference),
          _ = r.useRef(k),
          j = r.useRef(null != g ? g : -1),
          B = r.useRef(null),
          U = r.useRef(!0),
          W = r.useRef(F),
          H = r.useRef(!!l.floating),
          X = r.useRef(n),
          Y = r.useRef(!1),
          z = r.useRef(!1),
          V = Ae(M),
          $ = Ae(n),
          Z = Ae(O),
          te = Ae(g),
          [de, ve] = r.useState(),
          [me, pe] = r.useState(),
          ge = G(() => {
            function e(e) {
              x
                ? (ve(e.id),
                  null == q || q.events.emit("virtualfocus", e),
                  L && (L.current = e))
                : Pe(e, { sync: Y.current, preventScroll: !0 });
            }
            const t = s.current[j.current];
            t && e(t);
            (Y.current ? (e) => e() : requestAnimationFrame)(() => {
              const n = s.current[j.current] || t;
              if (!n) return;
              t || e(n);
              const r = Z.current;
              r &&
                be &&
                (z.current || !U.current) &&
                (null == n.scrollIntoView ||
                  n.scrollIntoView(
                    "boolean" == typeof r
                      ? { block: "nearest", inline: "nearest" }
                      : r,
                  ));
            });
          });
        fe(() => {
          m &&
            (n && l.floating
              ? _.current &&
                null != g &&
                ((z.current = !0), (j.current = g), F())
              : H.current && ((j.current = -1), W.current()));
        }, [m, n, l.floating, g, F]),
          fe(() => {
            if (m && n && l.floating)
              if (null == d) {
                if (((Y.current = !1), null != te.current)) return;
                if (
                  (H.current && ((j.current = -1), ge()),
                  (!X.current || !H.current) &&
                    _.current &&
                    (null != B.current ||
                      (!0 === _.current && null == B.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    if (null == s.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(t);
                      }
                      e++;
                    } else
                      (j.current =
                        null == B.current || St(B.current, S, w) || y
                          ? re(s, V.current)
                          : oe(s, V.current)),
                        (B.current = null),
                        F();
                  };
                  t();
                }
              } else ne(s, d) || ((j.current = d), ge(), (z.current = !1));
          }, [m, n, l.floating, d, te, y, s, S, w, F, ge, V]),
          fe(() => {
            var e;
            if (!m || l.floating || !q || x || !H.current) return;
            const t = q.nodesRef.current,
              n =
                null == (e = t.find((e) => e.id === D)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = i(p(l.floating)),
              o = t.some((e) => e.context && c(e.context.elements.floating, r));
            n && !o && U.current && n.focus({ preventScroll: !0 });
          }, [m, l.floating, q, D, x]),
          fe(() => {
            if (m && q && x && !D)
              return (
                q.events.on("virtualfocus", e),
                () => {
                  q.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              pe(e.id), L && (L.current = e);
            }
          }, [m, q, x, D, L]),
          fe(() => {
            (W.current = F), (X.current = n), (H.current = !!l.floating);
          }),
          fe(() => {
            n || (B.current = null);
          }, [n]);
        const he = null != d,
          be = r.useMemo(() => {
            function e(e) {
              if (!n) return;
              const t = s.current.indexOf(e);
              -1 !== t && j.current !== t && ((j.current = t), F());
            }
            return {
              onFocus(t) {
                let { currentTarget: n } = t;
                (Y.current = !0), e(n);
              },
              onClick: (e) => {
                let { currentTarget: t } = e;
                return t.focus({ preventScroll: !0 });
              },
              ...(I && {
                onMouseMove(t) {
                  let { currentTarget: n } = t;
                  (Y.current = !0), (z.current = !1), e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  var n;
                  U.current &&
                    "touch" !== t &&
                    ((Y.current = !0),
                    (j.current = -1),
                    F(),
                    x ||
                      null == (n = P.current) ||
                      n.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [n, P, I, s, F, x]),
          ye = G((e) => {
            if (((U.current = !1), (Y.current = !0), 229 === e.which)) return;
            if (!$.current && e.currentTarget === P.current) return;
            if (y && Ot(e.key, S, w, A))
              return (
                E(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, u.sb)(l.domReference) &&
                  (x
                    ? null == q || q.events.emit("virtualfocus", l.domReference)
                    : l.domReference.focus())
                )
              );
            const t = j.current,
              r = re(s, M),
              c = oe(s, M);
            if (
              (K ||
                ("Home" === e.key && (E(e), (j.current = r), F()),
                "End" === e.key && (E(e), (j.current = c), F())),
              A > 1)
            ) {
              const t =
                  T ||
                  Array.from({ length: s.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                n = ce(t, A, N),
                o = n.findIndex((e) => null != e && !ae(s.current, e, M)),
                u = n.reduce(
                  (e, t, n) => (null == t || ae(s.current, t, M) ? e : n),
                  -1,
                ),
                i =
                  n[
                    ie(
                      {
                        current: n.map((e) =>
                          null != e ? s.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: S,
                        loop: b,
                        rtl: w,
                        cols: A,
                        disabledIndices: se(
                          [
                            ...(M ||
                              s.current.map((e, t) =>
                                ae(s.current, t) ? t : void 0,
                              )),
                            void 0,
                          ],
                          n,
                        ),
                        minIndex: o,
                        maxIndex: u,
                        prevIndex: le(
                          j.current > c ? r : j.current,
                          t,
                          n,
                          A,
                          e.key === J
                            ? "bl"
                            : e.key === (w ? Q : ee)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != i && ((j.current = i), F()), "both" === S)) return;
            }
            if (Mt(e.key, S)) {
              if (
                (E(e),
                n && !x && i(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (j.current = St(e.key, S, w) ? r : c), void F();
              St(e.key, S, w)
                ? (j.current = b
                    ? t >= c
                      ? h && t !== s.current.length
                        ? -1
                        : r
                      : ue(s, { startingIndex: t, disabledIndices: M })
                    : Math.min(
                        c,
                        ue(s, { startingIndex: t, disabledIndices: M }),
                      ))
                : (j.current = b
                    ? t <= r
                      ? h && -1 !== t
                        ? s.current.length
                        : c
                      : ue(s, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: M,
                        })
                    : Math.max(
                        r,
                        ue(s, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: M,
                        }),
                      )),
                ne(s, j.current) && (j.current = -1),
                F();
            }
          }),
          Ee = r.useMemo(
            () => x && n && he && { "aria-activedescendant": me || de },
            [x, n, he, me, de],
          ),
          Re = r.useMemo(
            () => ({
              "aria-orientation": "both" === S ? void 0 : S,
              ...(K ? {} : Ee),
              onKeyDown: ye,
              onPointerMove() {
                U.current = !0;
              },
            }),
            [Ee, ye, S, K],
          ),
          we = r.useMemo(() => {
            function e(e) {
              "auto" === k && a(e.nativeEvent) && (_.current = !0);
            }
            function t(e) {
              (_.current = k),
                "auto" === k && f(e.nativeEvent) && (_.current = !0);
            }
            return {
              ...Ee,
              onKeyDown(e) {
                var t;
                U.current = !1;
                const r = e.key.startsWith("Arrow"),
                  u = ["Home", "End"].includes(e.key),
                  i = r || u,
                  c =
                    null == q ||
                    null == (t = q.nodesRef.current.find((e) => e.id === D)) ||
                    null == (t = t.context) ||
                    null == (t = t.dataRef)
                      ? void 0
                      : t.current.orientation,
                  l = At(e.key, S, w),
                  a = Ot(e.key, S, w, A),
                  f = At(e.key, c, w),
                  d = Mt(e.key, S),
                  v = (y ? f : d) || "Enter" === e.key || "" === e.key.trim();
                if (x && n) {
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
                              (function t(o, u) {
                                u > r && ((n = o), (r = u)),
                                  qe(e, o).forEach((e) => {
                                    t(e.id, u + 1);
                                  });
                              })(t, 0),
                              e.find((e) => e.id === n)
                            );
                          })(q.nodesRef.current, t.id)
                        : null;
                  if (i && n && L) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (l || a) {
                      var m, p;
                      const r =
                          (null == (m = n.context)
                            ? void 0
                            : m.elements.domReference) === e.currentTarget,
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
                      o && (E(e), o.dispatchEvent(t), pe(void 0));
                    }
                    var h;
                    if ((d || u) && n.context)
                      if (
                        n.context.open &&
                        n.parentId &&
                        e.currentTarget !== n.context.elements.domReference
                      )
                        return (
                          E(e),
                          void (
                            null == (h = n.context.elements.domReference) ||
                            h.dispatchEvent(t)
                          )
                        );
                  }
                  return ye(e);
                }
                if (n || C || !r) {
                  if (v) {
                    const t = Mt(e.key, c);
                    B.current = y && t ? null : e.key;
                  }
                  y
                    ? f &&
                      (E(e),
                      n
                        ? ((j.current = re(s, V.current)), F())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : d &&
                      (null != g && (j.current = g),
                      E(e),
                      !n && C ? o(!0, e.nativeEvent, "list-navigation") : ye(e),
                      n && F());
                }
              },
              onFocus() {
                n && !x && ((j.current = -1), F());
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e,
            };
          }, [de, Ee, A, ye, V, k, s, y, F, o, n, C, S, D, w, g, q, x, L]);
        return r.useMemo(
          () => (m ? { reference: we, floating: Re, item: be } : {}),
          [m, we, Re, be],
        );
      }
      const Tt = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function Nt(e, t) {
        var n;
        void 0 === t && (t = {});
        const { open: o, floatingId: u } = e,
          { enabled: i = !0, role: c = "dialog" } = t,
          l = null != (n = Tt.get(c)) ? n : c,
          s = Re(),
          a = null != Ie(),
          f = r.useMemo(
            () =>
              "tooltip" === l || "label" === c
                ? {
                    ["aria-" + ("label" === c ? "labelledby" : "describedby")]:
                      o ? u : void 0,
                  }
                : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                    "aria-controls": o ? u : void 0,
                    ...("listbox" === l && { role: "combobox" }),
                    ...("menu" === l && { id: s }),
                    ...("menu" === l && a && { role: "menuitem" }),
                    ...("select" === c && { "aria-autocomplete": "none" }),
                    ...("combobox" === c && { "aria-autocomplete": "list" }),
                  },
            [l, u, a, o, s, c],
          ),
          d = r.useMemo(() => {
            const e = { id: u, ...(l && { role: l }) };
            return "tooltip" === l || "label" === c
              ? e
              : { ...e, ...("menu" === l && { "aria-labelledby": s }) };
          }, [l, u, s, c]),
          v = r.useCallback(
            (e) => {
              let { active: t, selected: n } = e;
              const r = { role: "option", ...(t && { id: u + "-option" }) };
              switch (c) {
                case "select":
                  return { ...r, "aria-selected": t && n };
                case "combobox":
                  return { ...r, ...(t && { "aria-selected": !0 }) };
              }
              return {};
            },
            [u, c],
          );
        return r.useMemo(
          () => (i ? { reference: f, floating: d, item: v } : {}),
          [i, f, d, v],
        );
      }
      function Pt(e, t) {
        var n;
        const { open: o, dataRef: u } = e,
          {
            listRef: i,
            activeIndex: c,
            onMatch: l,
            onTypingChange: s,
            enabled: a = !0,
            findMatch: f = null,
            resetMs: d = 750,
            ignoreKeys: v = [],
            selectedIndex: m = null,
          } = t,
          p = r.useRef(-1),
          g = r.useRef(""),
          h = r.useRef(null != (n = null != m ? m : c) ? n : -1),
          b = r.useRef(null),
          y = G(l),
          R = G(s),
          w = Ae(f),
          x = Ae(v);
        fe(() => {
          o && (Se(p), (b.current = null), (g.current = ""));
        }, [o]),
          fe(() => {
            var e;
            o &&
              "" === g.current &&
              (h.current = null != (e = null != m ? m : c) ? e : -1);
          }, [o, m, c]);
        const k = G((e) => {
            e
              ? u.current.typing || ((u.current.typing = e), R(e))
              : u.current.typing && ((u.current.typing = e), R(e));
          }),
          I = G((e) => {
            function t(e, t, n) {
              const r = w.current
                ? w.current(t, n)
                : t.find(
                    (e) =>
                      0 ===
                      (null == e
                        ? void 0
                        : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())),
                  );
              return r ? e.indexOf(r) : -1;
            }
            const n = i.current;
            if (
              (g.current.length > 0 &&
                " " !== g.current[0] &&
                (-1 === t(n, n, g.current) ? k(!1) : " " === e.key && E(e)),
              null == n ||
                x.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (E(e), k(!0));
            n.every((e) => {
              var t, n;
              return (
                !e ||
                (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                  (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
              );
            }) &&
              g.current === e.key &&
              ((g.current = ""), (h.current = b.current)),
              (g.current += e.key),
              Se(p),
              (p.current = window.setTimeout(() => {
                (g.current = ""), (h.current = b.current), k(!1);
              }, d));
            const r = h.current,
              u = t(
                n,
                [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)],
                g.current,
              );
            -1 !== u
              ? (y(u), (b.current = u))
              : " " !== e.key && ((g.current = ""), k(!1));
          }),
          C = r.useMemo(() => ({ onKeyDown: I }), [I]),
          M = r.useMemo(
            () => ({
              onKeyDown: I,
              onKeyUp(e) {
                " " === e.key && k(!1);
              },
            }),
            [I, k],
          );
        return r.useMemo(
          () => (a ? { reference: C, floating: M } : {}),
          [a, C, M],
        );
      }
      function Dt(e, t) {
        const [n, r] = e;
        let o = !1;
        const u = t.length;
        for (let e = 0, i = u - 1; e < u; i = e++) {
          const [u, c] = t[e] || [0, 0],
            [l, s] = t[i] || [0, 0];
          c >= r != s >= r &&
            n <= ((l - u) * (r - c)) / (s - c) + u &&
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
          i = !1,
          l = null,
          s = null,
          a = performance.now();
        const f = (e) => {
          let {
            x: n,
            y: f,
            placement: d,
            elements: v,
            onClose: m,
            nodeId: p,
            tree: g,
          } = e;
          return function (e) {
            function b() {
              clearTimeout(o), m();
            }
            if (
              (clearTimeout(o),
              !v.domReference ||
                !v.floating ||
                null == d ||
                null == n ||
                null == f)
            )
              return;
            const { clientX: y, clientY: E } = e,
              R = [y, E],
              w = h(e),
              x = "mouseleave" === e.type,
              k = c(v.floating, w),
              I = c(v.domReference, w),
              C = v.domReference.getBoundingClientRect(),
              M = v.floating.getBoundingClientRect(),
              S = d.split("-")[0],
              A = n > M.right - M.width / 2,
              O = f > M.bottom - M.height / 2,
              L = (function (e, t) {
                return (
                  e[0] >= t.x &&
                  e[0] <= t.x + t.width &&
                  e[1] >= t.y &&
                  e[1] <= t.y + t.height
                );
              })(R, C),
              T = M.width > C.width,
              N = M.height > C.height,
              P = (T ? C : M).left,
              D = (T ? C : M).right,
              q = (N ? C : M).top,
              F = (N ? C : M).bottom;
            if (k && ((i = !0), !x)) return;
            if ((I && (i = !1), I && !x)) return void (i = !0);
            if (
              x &&
              (0, u.vq)(e.relatedTarget) &&
              c(v.floating, e.relatedTarget)
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
              ("top" === S && f >= C.bottom - 1) ||
              ("bottom" === S && f <= C.top + 1) ||
              ("left" === S && n >= C.right - 1) ||
              ("right" === S && n <= C.left + 1)
            )
              return b();
            let K = [];
            switch (S) {
              case "top":
                K = [
                  [P, C.top + 1],
                  [P, M.bottom - 1],
                  [D, M.bottom - 1],
                  [D, C.top + 1],
                ];
                break;
              case "bottom":
                K = [
                  [P, M.top + 1],
                  [P, C.bottom - 1],
                  [D, C.bottom - 1],
                  [D, M.top + 1],
                ];
                break;
              case "left":
                K = [
                  [M.right - 1, F],
                  [M.right - 1, q],
                  [C.left + 1, q],
                  [C.left + 1, F],
                ];
                break;
              case "right":
                K = [
                  [C.right - 1, F],
                  [C.right - 1, q],
                  [M.left + 1, q],
                  [M.left + 1, F],
                ];
            }
            if (!Dt([y, E], K)) {
              if (i && !L) return b();
              if (!x && r) {
                const t = (function (e, t) {
                  const n = performance.now(),
                    r = n - a;
                  if (null === l || null === s || 0 === r)
                    return (l = e), (s = t), (a = n), null;
                  const o = e - l,
                    u = t - s,
                    i = Math.sqrt(o * o + u * u);
                  return (l = e), (s = t), (a = n), i / r;
                })(e.clientX, e.clientY);
                if (null !== t && t < 0.1) return b();
              }
              Dt(
                [y, E],
                (function (e) {
                  let [n, r] = e;
                  switch (S) {
                    case "top":
                      return [
                        [T ? n + t / 2 : A ? n + 4 * t : n - 4 * t, r + t + 1],
                        [T ? n - t / 2 : A ? n + 4 * t : n - 4 * t, r + t + 1],
                        ...[
                          [M.left, A || T ? M.bottom - t : M.top],
                          [
                            M.right,
                            A ? (T ? M.bottom - t : M.top) : M.bottom - t,
                          ],
                        ],
                      ];
                    case "bottom":
                      return [
                        [T ? n + t / 2 : A ? n + 4 * t : n - 4 * t, r - t],
                        [T ? n - t / 2 : A ? n + 4 * t : n - 4 * t, r - t],
                        ...[
                          [M.left, A || T ? M.top + t : M.bottom],
                          [M.right, A ? (T ? M.top + t : M.bottom) : M.top + t],
                        ],
                      ];
                    case "left": {
                      const e = [
                          n + t + 1,
                          N ? r + t / 2 : O ? r + 4 * t : r - 4 * t,
                        ],
                        o = [
                          n + t + 1,
                          N ? r - t / 2 : O ? r + 4 * t : r - 4 * t,
                        ];
                      return [
                        ...[
                          [O || N ? M.right - t : M.left, M.top],
                          [
                            O ? (N ? M.right - t : M.left) : M.right - t,
                            M.bottom,
                          ],
                        ],
                        e,
                        o,
                      ];
                    }
                    case "right":
                      return [
                        [n - t, N ? r + t / 2 : O ? r + 4 * t : r - 4 * t],
                        [n - t, N ? r - t / 2 : O ? r + 4 * t : r - 4 * t],
                        ...[
                          [O || N ? M.left + t : M.right, M.top],
                          [
                            O ? (N ? M.left + t : M.right) : M.left + t,
                            M.bottom,
                          ],
                        ],
                      ];
                  }
                })([n, f]),
              )
                ? !i && r && (o = window.setTimeout(b, 40))
                : b();
            }
          };
        };
        return (f.__options = { blockPointerEvents: n }), f;
      }
    },
  },
]);
