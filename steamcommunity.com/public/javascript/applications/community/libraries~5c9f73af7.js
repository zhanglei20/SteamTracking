/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3359],
  {
    94621: (e, t, n) => {
      n.d(t, {
        BN: () => m,
        Ej: () => p,
        UU: () => v,
        cY: () => h,
        we: () => f,
      });
      var r = n(28505),
        o = n(33559),
        i = n(90626),
        s = n(72739),
        u = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
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
      function c(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function a(e, t) {
        const n = c(e);
        return Math.round(t * n) / n;
      }
      function d(e) {
        const t = i.useRef(e);
        return (
          u(() => {
            t.current = e;
          }),
          t
        );
      }
      function f(e) {
        void 0 === e && (e = {});
        const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: o = [],
            platform: f,
            elements: { reference: h, floating: m } = {},
            transform: v = !0,
            whileElementsMounted: p,
            open: g,
          } = e,
          [b, y] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [E, w] = i.useState(o);
        l(E, o) || w(o);
        const [x, R] = i.useState(null),
          [M, I] = i.useState(null),
          S = i.useCallback((e) => {
            e !== A.current && ((A.current = e), R(e));
          }, []),
          k = i.useCallback((e) => {
            e !== T.current && ((T.current = e), I(e));
          }, []),
          C = h || x,
          O = m || M,
          A = i.useRef(null),
          T = i.useRef(null),
          L = i.useRef(b),
          D = null != p,
          P = d(p),
          N = d(f),
          z = d(g),
          F = i.useCallback(() => {
            if (!A.current || !T.current) return;
            const e = { placement: t, strategy: n, middleware: E };
            N.current && (e.platform = N.current),
              (0, r.rD)(A.current, T.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== z.current };
                q.current &&
                  !l(L.current, t) &&
                  ((L.current = t),
                  s.flushSync(() => {
                    y(t);
                  }));
              });
          }, [E, t, n, N, z]);
        u(() => {
          !1 === g &&
            L.current.isPositioned &&
            ((L.current.isPositioned = !1),
            y((e) => ({ ...e, isPositioned: !1 })));
        }, [g]);
        const q = i.useRef(!1);
        u(
          () => (
            (q.current = !0),
            () => {
              q.current = !1;
            }
          ),
          [],
        ),
          u(() => {
            if ((C && (A.current = C), O && (T.current = O), C && O)) {
              if (P.current) return P.current(C, O, F);
              F();
            }
          }, [C, O, F, P, D]);
        const j = i.useMemo(
            () => ({
              reference: A,
              floating: T,
              setReference: S,
              setFloating: k,
            }),
            [S, k],
          ),
          _ = i.useMemo(() => ({ reference: C, floating: O }), [C, O]),
          W = i.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!_.floating) return e;
            const t = a(_.floating, b.x),
              r = a(_.floating, b.y);
            return v
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(c(_.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, v, _.floating, b.x, b.y]);
        return i.useMemo(
          () => ({ ...b, update: F, refs: j, elements: _, floatingStyles: W }),
          [b, F, j, _, W],
        );
      }
      const h = (e, t) => ({ ...(0, o.cY)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      n.d(t, {
        s3: () => dt,
        ph: () => me,
        XF: () => nt,
        iB: () => zt,
        kp: () => mt,
        s9: () => bt,
        we: () => yt,
        iQ: () => Et,
        Mk: () => Le,
        bv: () => Mt,
        rm: () => ve,
        C1: () => Tt,
        SV: () => H,
        It: () => Dt,
        lY: () => Pt,
      });
      var r = n(90626),
        o = n.t(r, 2),
        i = n(977);
      function s(e) {
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
      function u(e, t) {
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
      function c() {
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
          (h() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function d(e) {
        return (
          !c().includes("jsdom/") &&
          ((!h() && 0 === e.width && 0 === e.height) ||
            (h() &&
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
      function f() {
        return /apple/i.test(navigator.vendor);
      }
      function h() {
        const e = /android/i;
        return e.test(l()) || e.test(c());
      }
      function m(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e);
      }
      function v(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function p(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target);
      }
      function g(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const b =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function y(e) {
        return (0, i.sb)(e) && e.matches(b);
      }
      function E(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function w(e) {
        return !!e && "combobox" === e.getAttribute("role") && y(e);
      }
      var x = n(58015),
        R = n(7850),
        M = [
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
        I = M.join(","),
        S = "undefined" == typeof Element,
        k = S
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        C =
          !S && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        O = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        A = function (e, t, n) {
          if (O(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(I));
          return t && k.call(e, I) && r.unshift(e), (r = r.filter(n));
        },
        T = function e(t, n, r) {
          for (var o = [], i = Array.from(t); i.length; ) {
            var s = i.shift();
            if (!O(s, !1))
              if ("SLOT" === s.tagName) {
                var u = s.assignedElements(),
                  l = e(u.length ? u : s.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: s, candidates: l });
              } else {
                k.call(s, I) &&
                  r.filter(s) &&
                  (n || !t.includes(s)) &&
                  o.push(s);
                var c =
                    s.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(s)),
                  a =
                    !O(c, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
                if (c && a) {
                  var d = e(!0 === c ? s.children : c.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, d)
                    : o.push({ scopeParent: s, candidates: d });
                } else i.unshift.apply(i, s.children);
              }
          }
          return o;
        },
        L = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        D = function (e) {
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
            !L(e)
            ? 0
            : e.tabIndex;
        },
        P = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        N = function (e) {
          return "INPUT" === e.tagName;
        },
        z = function (e) {
          return (
            (function (e) {
              return N(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || C(e),
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
        q = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = k.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (k.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return F(e);
          } else {
            if ("function" == typeof r) {
              for (var i = e; e; ) {
                var s = e.parentElement,
                  u = C(e);
                if (s && !s.shadowRoot && !0 === r(s)) return F(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : s || u === e.ownerDocument
                    ? s
                    : u.host;
              }
              e = i;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = e && C(e),
                  s = null === (t = i) || void 0 === t ? void 0 : t.host,
                  u = !1;
                if (i && i !== e)
                  for (
                    u = !!(
                      (null !== (n = s) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(s)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !u && s;
                  ) {
                    var l, c, a;
                    u = !(
                      null ===
                        (c = s =
                          null === (l = i = C(s)) || void 0 === l
                            ? void 0
                            : l.host) ||
                      void 0 === c ||
                      null === (a = c.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(s)
                    );
                  }
                return u;
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
            O(t) ||
            (function (e) {
              return N(e) && "hidden" === e.type;
            })(t) ||
            q(t, e) ||
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
                          !!k.call(t, "fieldset[disabled] *") || !r.contains(e)
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
          return !(z(t) || D(t) < 0 || !j(e, t));
        },
        W = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        K = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var i = !!t.scopeParent,
                s = i ? t.scopeParent : t,
                u = (function (e, t) {
                  var n = D(e);
                  return n < 0 && t && !L(e) ? 0 : n;
                })(s, i),
                l = i ? e(t.candidates) : s;
              0 === u
                ? i
                  ? n.push.apply(n, l)
                  : n.push(s)
                : r.push({
                    documentOrder: o,
                    tabIndex: u,
                    item: t,
                    isScope: i,
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
        B = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? T([e], t.includeContainer, {
                  filter: _.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: W,
                })
              : A(e, t.includeContainer, _.bind(null, t))),
            K(n)
          );
        },
        U = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== k.call(e, I) && _(t, e);
        },
        V = n(72739),
        Y = n(94621);
      function H(e) {
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
      const $ = { ...o },
        X = $.useInsertionEffect || ((e) => e());
      function G(e) {
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
      const Q = "ArrowUp",
        Z = "ArrowDown",
        J = "ArrowLeft",
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
        const s = e.current;
        let u = n;
        do {
          u += r ? -i : i;
        } while (u >= 0 && u <= s.length - 1 && ae(s, u, o));
        return u;
      }
      function se(e, t) {
        let {
            event: n,
            orientation: r,
            loop: o,
            rtl: i,
            cols: s,
            disabledIndices: u,
            minIndex: l,
            maxIndex: c,
            prevIndex: a,
            stopEvent: d = !1,
          } = t,
          f = a;
        if (n.key === Q) {
          if ((d && E(n), -1 === a)) f = c;
          else if (
            ((f = ie(e, {
              startingIndex: f,
              amount: s,
              decrement: !0,
              disabledIndices: u,
            })),
            o && (a - s < l || f < 0))
          ) {
            const e = a % s,
              t = c % s,
              n = c - (t - e);
            f = t === e ? c : t > e ? n : n - s;
          }
          ne(e, f) && (f = a);
        }
        if (
          (n.key === Z &&
            (d && E(n),
            -1 === a
              ? (f = l)
              : ((f = ie(e, {
                  startingIndex: a,
                  amount: s,
                  disabledIndices: u,
                })),
                o &&
                  a + s > c &&
                  (f = ie(e, {
                    startingIndex: (a % s) - s,
                    amount: s,
                    disabledIndices: u,
                  }))),
            ne(e, f) && (f = a)),
          "both" === r)
        ) {
          const t = (0, x.RI)(a / s);
          n.key === (i ? J : ee) &&
            (d && E(n),
            a % s !== s - 1
              ? ((f = ie(e, { startingIndex: a, disabledIndices: u })),
                o &&
                  te(f, s, t) &&
                  (f = ie(e, {
                    startingIndex: a - (a % s) - 1,
                    disabledIndices: u,
                  })))
              : o &&
                (f = ie(e, {
                  startingIndex: a - (a % s) - 1,
                  disabledIndices: u,
                })),
            te(f, s, t) && (f = a)),
            n.key === (i ? ee : J) &&
              (d && E(n),
              a % s !== 0
                ? ((f = ie(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: u,
                  })),
                  o &&
                    te(f, s, t) &&
                    (f = ie(e, {
                      startingIndex: a + (s - (a % s)),
                      decrement: !0,
                      disabledIndices: u,
                    })))
                : o &&
                  (f = ie(e, {
                    startingIndex: a + (s - (a % s)),
                    decrement: !0,
                    disabledIndices: u,
                  })),
              te(f, s, t) && (f = a));
          const r = (0, x.RI)(c / s) === t;
          ne(e, f) &&
            (f =
              o && r
                ? n.key === (i ? ee : J)
                  ? c
                  : ie(e, {
                      startingIndex: a - (a % s) - 1,
                      disabledIndices: u,
                    })
                : a);
        }
        return f;
      }
      function ue(e, t, n) {
        const r = [];
        let o = 0;
        return (
          e.forEach((e, i) => {
            let { width: s, height: u } = e,
              l = !1;
            for (n && (o = 0); !l; ) {
              const e = [];
              for (let n = 0; n < s; n++)
                for (let r = 0; r < u; r++) e.push(o + n + r * t);
              (o % t) + s <= t && e.every((e) => null == r[e])
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
          s = t[e];
        switch (o) {
          case "tl":
            return i;
          case "tr":
            return s ? i + s.width - 1 : i;
          case "bl":
            return s ? i + (s.height - 1) * r : i;
          case "br":
            return n.lastIndexOf(e);
        }
      }
      function ce(e, t) {
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
      var de = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function fe(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING ||
          n & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : n & Node.DOCUMENT_POSITION_PRECEDING ||
              n & Node.DOCUMENT_POSITION_CONTAINS
            ? 1
            : 0;
      }
      const he = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function me(e) {
        const { children: t, elementsRef: n, labelsRef: o } = e,
          [i, s] = r.useState(() => new Set()),
          u = r.useCallback((e) => {
            s((t) => new Set(t).add(e));
          }, []),
          l = r.useCallback((e) => {
            s((t) => {
              const n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          c = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(i.keys())
                .sort(fe)
                .forEach((t, n) => {
                  e.set(t, n);
                }),
              e
            );
          }, [i]);
        return (0, R.jsx)(he.Provider, {
          value: r.useMemo(
            () => ({
              register: u,
              unregister: l,
              map: c,
              elementsRef: n,
              labelsRef: o,
            }),
            [u, l, c, n, o],
          ),
          children: t,
        });
      }
      function ve(e) {
        void 0 === e && (e = {});
        const { label: t } = e,
          {
            register: n,
            unregister: o,
            map: i,
            elementsRef: s,
            labelsRef: u,
          } = r.useContext(he),
          [l, c] = r.useState(null),
          a = r.useRef(null),
          d = r.useCallback(
            (e) => {
              if (((a.current = e), null !== l && ((s.current[l] = e), u))) {
                var n;
                const r = void 0 !== t;
                u.current[l] = r
                  ? t
                  : null != (n = null == e ? void 0 : e.textContent)
                    ? n
                    : null;
              }
            },
            [l, s, u, t],
          );
        return (
          de(() => {
            const e = a.current;
            if (e)
              return (
                n(e),
                () => {
                  o(e);
                }
              );
          }, [n, o]),
          de(() => {
            const e = a.current ? i.get(a.current) : null;
            null != e && c(e);
          }, [i]),
          r.useMemo(() => ({ ref: d, index: null == l ? -1 : l }), [l, d])
        );
      }
      const pe = [J, ee],
        ge = [Q, Z];
      let be = !1,
        ye = 0;
      const Ee = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + ye++;
      const we =
        $.useId ||
        function () {
          const [e, t] = r.useState(() => (be ? Ee() : void 0));
          return (
            de(() => {
              null == e && t(Ee());
            }, []),
            r.useEffect(() => {
              be = !0;
            }, []),
            e
          );
        };
      function xe() {
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
        Me = r.createContext(null),
        Ie = () => {
          var e;
          return (null == (e = r.useContext(Re)) ? void 0 : e.id) || null;
        },
        Se = () => r.useContext(Me);
      function ke(e) {
        return "data-floating-ui-" + e;
      }
      function Ce(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Oe(e) {
        const t = (0, r.useRef)(e);
        return (
          de(() => {
            t.current = e;
          }),
          t
        );
      }
      const Ae = ke("safe-polygon");
      function Te(e, t, n) {
        return n && !m(n)
          ? 0
          : "number" == typeof e
            ? e
            : null == e
              ? void 0
              : e[t];
      }
      function Le(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: s,
            events: l,
            elements: c,
          } = e,
          {
            enabled: a = !0,
            delay: d = 0,
            handleClose: f = null,
            mouseOnly: h = !1,
            restMs: p = 0,
            move: g = !0,
          } = t,
          b = Se(),
          y = Ie(),
          E = Oe(f),
          w = Oe(d),
          x = Oe(n),
          R = r.useRef(),
          M = r.useRef(-1),
          I = r.useRef(),
          S = r.useRef(-1),
          k = r.useRef(!0),
          C = r.useRef(!1),
          O = r.useRef(() => {}),
          A = r.useRef(!1),
          T = r.useCallback(() => {
            var e;
            const t = null == (e = s.current.openEvent) ? void 0 : e.type;
            return (
              (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
            );
          }, [s]);
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
            t || (Ce(M), Ce(S), (k.current = !0), (A.current = !1));
          }
        }, [a, l]),
          r.useEffect(() => {
            if (!a) return;
            if (!E.current) return;
            if (!n) return;
            function e(e) {
              T() && o(!1, e, "hover");
            }
            const t = v(c.floating).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [c.floating, n, o, a, E, T]);
        const L = r.useCallback(
            function (e, t, n) {
              void 0 === t && (t = !0), void 0 === n && (n = "hover");
              const r = Te(w.current, "close", R.current);
              r && !I.current
                ? (Ce(M), (M.current = window.setTimeout(() => o(!1, e, n), r)))
                : t && (Ce(M), o(!1, e, n));
            },
            [w, o],
          ),
          D = G(() => {
            O.current(), (I.current = void 0);
          }),
          P = G(() => {
            if (C.current) {
              const e = v(c.floating).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(Ae),
                (C.current = !1);
            }
          }),
          N = G(
            () =>
              !!s.current.openEvent &&
              ["click", "mousedown"].includes(s.current.openEvent.type),
          );
        r.useEffect(() => {
          if (a && (0, i.vq)(c.domReference)) {
            var e;
            const o = c.domReference;
            return (
              n && o.addEventListener("mouseleave", l),
              null == (e = c.floating) || e.addEventListener("mouseleave", l),
              g && o.addEventListener("mousemove", t, { once: !0 }),
              o.addEventListener("mouseenter", t),
              o.addEventListener("mouseleave", r),
              () => {
                var e;
                n && o.removeEventListener("mouseleave", l),
                  null == (e = c.floating) ||
                    e.removeEventListener("mouseleave", l),
                  g && o.removeEventListener("mousemove", t),
                  o.removeEventListener("mouseenter", t),
                  o.removeEventListener("mouseleave", r);
              }
            );
          }
          function t(e) {
            if (
              (Ce(M),
              (k.current = !1),
              (h && !m(R.current)) || (p > 0 && !Te(w.current, "open")))
            )
              return;
            const t = Te(w.current, "open", R.current);
            t
              ? (M.current = window.setTimeout(() => {
                  x.current || o(!0, e, "hover");
                }, t))
              : n || o(!0, e, "hover");
          }
          function r(e) {
            if (N()) return;
            O.current();
            const t = v(c.floating);
            if (
              (Ce(S), (A.current = !1), E.current && s.current.floatingContext)
            ) {
              n || Ce(M),
                (I.current = E.current({
                  ...s.current.floatingContext,
                  tree: b,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    P(), D(), N() || L(e, !0, "safe-polygon");
                  },
                }));
              const r = I.current;
              return (
                t.addEventListener("mousemove", r),
                void (O.current = () => {
                  t.removeEventListener("mousemove", r);
                })
              );
            }
            ("touch" !== R.current || !u(c.floating, e.relatedTarget)) && L(e);
          }
          function l(e) {
            N() ||
              (s.current.floatingContext &&
                (null == E.current ||
                  E.current({
                    ...s.current.floatingContext,
                    tree: b,
                    x: e.clientX,
                    y: e.clientY,
                    onClose() {
                      P(), D(), N() || L(e);
                    },
                  })(e)));
          }
        }, [c, a, e, h, p, g, L, D, P, o, n, x, b, w, E, s, N]),
          de(() => {
            var e;
            if (
              a &&
              n &&
              null != (e = E.current) &&
              e.__options.blockPointerEvents &&
              T()
            ) {
              C.current = !0;
              const e = c.floating;
              if ((0, i.vq)(c.domReference) && e) {
                var t;
                const n = v(c.floating).body;
                n.setAttribute(Ae, "");
                const r = c.domReference,
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
          }, [a, n, y, c, b, E, T]),
          de(() => {
            n || ((R.current = void 0), (A.current = !1), D(), P());
          }, [n, D, P]),
          r.useEffect(
            () => () => {
              D(), Ce(M), Ce(S), P();
            },
            [a, c.domReference, D, P],
          );
        const z = r.useMemo(() => {
            function e(e) {
              R.current = e.pointerType;
            }
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                const { nativeEvent: t } = e;
                function r() {
                  k.current || x.current || o(!0, t, "hover");
                }
                (h && !m(R.current)) ||
                  n ||
                  0 === p ||
                  (A.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                  (Ce(S),
                  "touch" === R.current
                    ? r()
                    : ((A.current = !0),
                      (S.current = window.setTimeout(r, p))));
              },
            };
          }, [h, o, n, x, p]),
          F = r.useMemo(
            () => ({
              onMouseEnter() {
                Ce(M);
              },
              onMouseLeave(e) {
                N() || L(e.nativeEvent, !1);
              },
            }),
            [L, N],
          );
        return r.useMemo(
          () => (a ? { reference: z, floating: F } : {}),
          [a, z, F],
        );
      }
      let De = 0;
      function Pe(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = t;
        r && cancelAnimationFrame(De);
        const i = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? i() : (De = requestAnimationFrame(i));
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
      function ze(e, t) {
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
        qe = new WeakSet(),
        je = {},
        _e = 0;
      const We = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        Ke = (e) => e && (e.host || Ke(e.parentNode)),
        Be = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = Ke(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function Ue(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = v(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            s = r ? "inert" : n ? "aria-hidden" : null,
            u = Be(t, e),
            l = new Set(),
            c = new Set(u),
            a = [];
          je[o] || (je[o] = new WeakMap());
          const d = je[o];
          return (
            u.forEach(function e(t) {
              t && !l.has(t) && (l.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !c.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, i.mq)(t))
                    if (l.has(t)) e(t);
                    else {
                      const e = s ? t.getAttribute(s) : null,
                        n = null !== e && "false" !== e,
                        r = Fe.get(t) || 0,
                        i = s ? r + 1 : r,
                        u = (d.get(t) || 0) + 1;
                      Fe.set(t, i),
                        d.set(t, u),
                        a.push(t),
                        1 === i && n && qe.add(t),
                        1 === u && t.setAttribute(o, ""),
                        !n && s && t.setAttribute(s, "true");
                    }
                });
            })(t),
            l.clear(),
            _e++,
            () => {
              a.forEach((e) => {
                const t = Fe.get(e) || 0,
                  n = s ? t - 1 : t,
                  r = (d.get(e) || 0) - 1;
                Fe.set(e, n),
                  d.set(e, r),
                  n || (!qe.has(e) && s && e.removeAttribute(s), qe.delete(e)),
                  r || e.removeAttribute(o);
              }),
                _e--,
                _e ||
                  ((Fe = new WeakMap()),
                  (Fe = new WeakMap()),
                  (qe = new WeakSet()),
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
      function Ye(e, t) {
        const n = B(e, Ve());
        "prev" === t && n.reverse();
        const r = n.indexOf(s(v(e)));
        return n.slice(r + 1)[0];
      }
      function He() {
        return Ye(document.body, "next");
      }
      function $e() {
        return Ye(document.body, "prev");
      }
      function Xe(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !u(n, r);
      }
      function Ge(e) {
        B(e, Ve()).forEach((e) => {
          (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
            e.setAttribute("tabindex", "-1");
        });
      }
      function Qe(e) {
        e.querySelectorAll("[data-tabindex]").forEach((e) => {
          const t = e.dataset.tabindex;
          delete e.dataset.tabindex,
            t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
        });
      }
      const Ze = {
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
        Je = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          de(() => {
            f() && o("button");
          }, []);
          const i = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [ke("focus-guard")]: "",
            style: Ze,
          };
          return (0, R.jsx)("span", { ...e, ...i });
        }),
        et = r.createContext(null),
        tt = ke("portal");
      function nt(e) {
        const { children: t, id: n, root: o, preserveTabOrder: s = !0 } = e,
          u = (function (e) {
            void 0 === e && (e = {});
            const { id: t, root: n } = e,
              o = we(),
              s = rt(),
              [u, l] = r.useState(null),
              c = r.useRef(null);
            return (
              de(
                () => () => {
                  null == u || u.remove(),
                    queueMicrotask(() => {
                      c.current = null;
                    });
                },
                [u],
              ),
              de(() => {
                if (!o) return;
                if (c.current) return;
                const e = t ? document.getElementById(t) : null;
                if (!e) return;
                const n = document.createElement("div");
                (n.id = o),
                  n.setAttribute(tt, ""),
                  e.appendChild(n),
                  (c.current = n),
                  l(n);
              }, [t, o]),
              de(() => {
                if (null === n) return;
                if (!o) return;
                if (c.current) return;
                let e = n || (null == s ? void 0 : s.portalNode);
                e && !(0, i.vq)(e) && (e = e.current), (e = e || document.body);
                let r = null;
                t &&
                  ((r = document.createElement("div")),
                  (r.id = t),
                  e.appendChild(r));
                const u = document.createElement("div");
                (u.id = o),
                  u.setAttribute(tt, ""),
                  (e = r || e),
                  e.appendChild(u),
                  (c.current = u),
                  l(u);
              }, [t, n, o, s]),
              u
            );
          })({ id: n, root: o }),
          [l, c] = r.useState(null),
          a = r.useRef(null),
          d = r.useRef(null),
          f = r.useRef(null),
          h = r.useRef(null),
          m = null == l ? void 0 : l.modal,
          v = null == l ? void 0 : l.open,
          p = !!l && !l.modal && l.open && s && !(!o && !u);
        return (
          r.useEffect(() => {
            if (u && s && !m)
              return (
                u.addEventListener("focusin", e, !0),
                u.addEventListener("focusout", e, !0),
                () => {
                  u.removeEventListener("focusin", e, !0),
                    u.removeEventListener("focusout", e, !0);
                }
              );
            function e(e) {
              if (u && Xe(e)) {
                ("focusin" === e.type ? Qe : Ge)(u);
              }
            }
          }, [u, s, m]),
          r.useEffect(() => {
            u && (v || Qe(u));
          }, [v, u]),
          (0, R.jsxs)(et.Provider, {
            value: r.useMemo(
              () => ({
                preserveTabOrder: s,
                beforeOutsideRef: a,
                afterOutsideRef: d,
                beforeInsideRef: f,
                afterInsideRef: h,
                portalNode: u,
                setFocusManagerState: c,
              }),
              [s, u],
            ),
            children: [
              p &&
                u &&
                (0, R.jsx)(Je, {
                  "data-type": "outside",
                  ref: a,
                  onFocus: (e) => {
                    if (Xe(e, u)) {
                      var t;
                      null == (t = f.current) || t.focus();
                    } else {
                      const e = $e() || (null == l ? void 0 : l.domReference);
                      null == e || e.focus();
                    }
                  },
                }),
              p && u && (0, R.jsx)("span", { "aria-owns": u.id, style: Ze }),
              u && V.createPortal(t, u),
              p &&
                u &&
                (0, R.jsx)(Je, {
                  "data-type": "outside",
                  ref: d,
                  onFocus: (e) => {
                    if (Xe(e, u)) {
                      var t;
                      null == (t = h.current) || t.focus();
                    } else {
                      const t = He() || (null == l ? void 0 : l.domReference);
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
      function st(e) {
        return r.useMemo(
          () => (t) => {
            e.forEach((e) => {
              e && (e.current = t);
            });
          },
          e,
        );
      }
      const ut = 20;
      let lt = [];
      function ct() {
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
          style: Ze,
        });
      });
      function dt(e) {
        const {
            context: t,
            children: n,
            disabled: o = !1,
            order: l = ["content"],
            guards: c = !0,
            initialFocus: f = 0,
            returnFocus: h = !0,
            restoreFocus: m = !1,
            modal: p = !0,
            visuallyHiddenDismiss: b = !1,
            closeOnFocusOut: y = !0,
            outsideElementsInert: x = !1,
          } = e,
          {
            open: M,
            onOpenChange: I,
            events: S,
            dataRef: k,
            elements: { domReference: C, floating: O },
          } = t,
          A = G(() => {
            var e;
            return null == (e = k.current.floatingContext) ? void 0 : e.nodeId;
          }),
          T = "number" == typeof f && f < 0,
          L = w(C) && T,
          D = We(),
          P = !D || c,
          N = !P || (D && x),
          z = Oe(l),
          F = Oe(f),
          q = Oe(h),
          j = Se(),
          _ = rt(),
          W = r.useRef(null),
          K = r.useRef(null),
          V = r.useRef(!1),
          Y = r.useRef(!1),
          H = r.useRef(-1),
          $ = null != _,
          X = it(O),
          Q = G(function (e) {
            return void 0 === e && (e = X), e ? B(e, Ve()) : [];
          }),
          Z = G((e) => {
            const t = Q(e);
            return z.current
              .map((e) =>
                C && "reference" === e ? C : X && "floating" === e ? X : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!p) return;
          function e(e) {
            if ("Tab" === e.key) {
              u(X, s(v(X))) && 0 === Q().length && !L && E(e);
              const t = Z(),
                n = g(e);
              "reference" === z.current[0] &&
                n === C &&
                (E(e), e.shiftKey ? Pe(t[t.length - 1]) : Pe(t[1])),
                "floating" === z.current[1] &&
                  n === X &&
                  e.shiftKey &&
                  (E(e), Pe(t[0]));
            }
          }
          const t = v(X);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, C, X, p, z, L, Q, Z]),
          r.useEffect(() => {
            if (!o && O)
              return (
                O.addEventListener("focusin", e),
                () => {
                  O.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = g(e),
                n = Q().indexOf(t);
              -1 !== n && (H.current = n);
            }
          }, [o, O, Q]),
          r.useEffect(() => {
            if (!o && y)
              return O && (0, i.sb)(C)
                ? (C.addEventListener("focusout", t),
                  C.addEventListener("pointerdown", e),
                  O.addEventListener("focusout", t),
                  () => {
                    C.removeEventListener("focusout", t),
                      C.removeEventListener("pointerdown", e),
                      O.removeEventListener("focusout", t);
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
                const n = A(),
                  r = !(
                    u(C, t) ||
                    u(O, t) ||
                    u(t, O) ||
                    u(null == _ ? void 0 : _.portalNode, t) ||
                    (null != t && t.hasAttribute(ke("focus-guard"))) ||
                    (j &&
                      (ze(j.nodesRef.current, n).find((e) => {
                        var n, r;
                        return (
                          u(
                            null == (n = e.context)
                              ? void 0
                              : n.elements.floating,
                            t,
                          ) ||
                          u(
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
                if (m && r && s(v(X)) === v(X).body) {
                  (0, i.sb)(X) && X.focus();
                  const e = H.current,
                    t = Q(),
                    n = t[e] || t[t.length - 1] || X;
                  (0, i.sb)(n) && n.focus();
                }
                (!L && p) ||
                  !t ||
                  !r ||
                  Y.current ||
                  t === ct() ||
                  ((V.current = !0), I(!1, e, "focus-out"));
              });
            }
          }, [o, C, O, X, p, j, _, I, y, m, Q, L, A]);
        const J = r.useRef(null),
          ee = r.useRef(null),
          te = st([J, null == _ ? void 0 : _.beforeInsideRef]),
          ne = st([ee, null == _ ? void 0 : _.afterInsideRef]);
        function re(e) {
          return !o && b && p
            ? (0, R.jsx)(at, {
                ref: "start" === e ? W : K,
                onClick: (e) => I(!1, e.nativeEvent),
                children: "string" == typeof b ? b : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!O) return;
          const t = Array.from(
              (null == _ || null == (e = _.portalNode)
                ? void 0
                : e.querySelectorAll("[" + ke("portal") + "]")) || [],
            ),
            n =
              j && !p
                ? Ne(null == j ? void 0 : j.nodesRef.current, A()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              O,
              ...t,
              ...n,
              W.current,
              K.current,
              J.current,
              ee.current,
              null == _ ? void 0 : _.beforeOutsideRef.current,
              null == _ ? void 0 : _.afterOutsideRef.current,
              z.current.includes("reference") || L ? C : null,
            ].filter((e) => null != e),
            i = p || L ? Ue(r, !N, N) : Ue(r);
          return () => {
            i();
          };
        }, [o, C, O, p, z, _, L, P, N, j, A]),
          de(() => {
            if (o || !(0, i.sb)(X)) return;
            const e = s(v(X));
            queueMicrotask(() => {
              const t = Z(X),
                n = F.current,
                r = ("number" == typeof n ? t[n] : n.current) || X,
                o = u(X, e);
              T || o || !M || Pe(r, { preventScroll: r === X });
            });
          }, [o, M, X, T, Z, F]),
          de(() => {
            if (o || !X) return;
            let e = !1,
              t = !1;
            const n = v(X),
              r = s(n);
            let l = k.current.openEvent;
            var c;
            function f(n) {
              let { open: r, reason: o, event: i, nested: s } = n;
              if (
                (r && (l = i),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === i.type &&
                  (V.current = !0),
                "outside-press" === o)
              )
                if (s) (V.current = !1), (e = !0);
                else if (a(i) || d(i)) V.current = !1;
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
            (c = r),
              (lt = lt.filter((e) => e.isConnected)),
              c &&
                "body" !== (0, i.mq)(c) &&
                (lt.push(c), lt.length > ut && (lt = lt.slice(-ut))),
              S.on("openchange", f);
            const h = n.createElement("span");
            return (
              h.setAttribute("tabindex", "-1"),
              h.setAttribute("aria-hidden", "true"),
              Object.assign(h.style, Ze),
              $ && C && C.insertAdjacentElement("afterend", h),
              () => {
                S.off("openchange", f);
                const r = s(n),
                  o =
                    u(O, r) ||
                    (j &&
                      ze(j.nodesRef.current, A()).some((e) => {
                        var t;
                        return u(
                          null == (t = e.context)
                            ? void 0
                            : t.elements.floating,
                          r,
                        );
                      }));
                (o || (l && ["click", "mousedown"].includes(l.type))) &&
                  (t = !0);
                const c =
                  "boolean" == typeof q.current
                    ? t && C
                      ? C
                      : ct() || h
                    : q.current.current || h;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = Ve();
                    return U(e, t) ? e : B(e, t)[0] || e;
                  })(c);
                  q.current &&
                    !V.current &&
                    (0, i.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    h.remove();
                });
              }
            );
          }, [o, O, X, q, k, S, j, $, C, A]),
          r.useEffect(() => {
            queueMicrotask(() => {
              V.current = !1;
            });
          }, [o]),
          de(() => {
            if (!o && _)
              return (
                _.setFocusManagerState({
                  modal: p,
                  closeOnFocusOut: y,
                  open: M,
                  onOpenChange: I,
                  domReference: C,
                }),
                () => {
                  _.setFocusManagerState(null);
                }
              );
          }, [o, _, p, M, I, y, C]),
          de(() => {
            if (o) return;
            if (!X) return;
            if ("function" != typeof MutationObserver) return;
            if (T) return;
            const e = () => {
              const e = X.getAttribute("tabindex"),
                t = Q(),
                n = s(v(O)),
                r = t.indexOf(n);
              -1 !== r && (H.current = r),
                z.current.includes("floating") || (n !== C && 0 === t.length)
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
          }, [o, O, X, C, z, Q, T]);
        const oe = !o && P && (!p || !L) && ($ || p);
        return (0, R.jsxs)(R.Fragment, {
          children: [
            oe &&
              (0, R.jsx)(Je, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (p) {
                    const e = Z();
                    Pe("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != _ && _.preserveTabOrder && _.portalNode)
                    if (((V.current = !1), Xe(e, _.portalNode))) {
                      const e = He() || C;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = _.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !L && re("start"),
            n,
            re("end"),
            oe &&
              (0, R.jsx)(Je, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (p) Pe(Z()[0]);
                  else if (null != _ && _.preserveTabOrder && _.portalNode)
                    if ((y && (V.current = !0), Xe(e, _.portalNode))) {
                      const e = $e() || C;
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
      function ft(e) {
        return (0, i.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function ht(e) {
        return y(e);
      }
      function mt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: i,
            elements: { domReference: s },
          } = e,
          {
            enabled: u = !0,
            event: l = "click",
            toggle: c = !0,
            ignoreMouse: a = !1,
            keyboardHandlers: d = !0,
            stickIfOpen: f = !0,
          } = t,
          h = r.useRef(),
          v = r.useRef(!1),
          p = r.useMemo(
            () => ({
              onPointerDown(e) {
                h.current = e.pointerType;
              },
              onMouseDown(e) {
                const t = h.current;
                0 === e.button &&
                  "click" !== l &&
                  ((m(t, !0) && a) ||
                    (!n ||
                    !c ||
                    (i.current.openEvent &&
                      f &&
                      "mousedown" !== i.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = h.current;
                "mousedown" === l && h.current
                  ? (h.current = void 0)
                  : (m(t, !0) && a) ||
                    (!n ||
                    !c ||
                    (i.current.openEvent &&
                      f &&
                      "click" !== i.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (h.current = void 0),
                  e.defaultPrevented ||
                    !d ||
                    ft(e) ||
                    (" " !== e.key ||
                      ht(s) ||
                      (e.preventDefault(), (v.current = !0)),
                    "Enter" === e.key && o(!n || !c, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !d ||
                  ft(e) ||
                  ht(s) ||
                  (" " === e.key &&
                    v.current &&
                    ((v.current = !1), o(!n || !c, e.nativeEvent, "click")));
              },
            }),
            [i, s, l, a, d, o, n, f, c],
          );
        return r.useMemo(() => (u ? { reference: p } : {}), [u, p]);
      }
      const vt = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        pt = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        gt = (e) => {
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
        const { open: n, onOpenChange: o, elements: s, dataRef: l } = e,
          {
            enabled: c = !0,
            escapeKey: a = !0,
            outsidePress: d = !0,
            outsidePressEvent: f = "pointerdown",
            referencePress: h = !1,
            referencePressEvent: m = "pointerdown",
            ancestorScroll: b = !1,
            bubbles: y,
            capture: E,
          } = t,
          w = Se(),
          x = G("function" == typeof d ? d : () => !1),
          R = "function" == typeof d ? x : d,
          M = r.useRef(!1),
          I = r.useRef(!1),
          { escapeKey: S, outsidePress: k } = gt(y),
          { escapeKey: C, outsidePress: O } = gt(E),
          A = r.useRef(!1),
          T = G((e) => {
            var t;
            if (!n || !c || !a || "Escape" !== e.key) return;
            if (A.current) return;
            const r =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              i = w ? ze(w.nodesRef.current, r) : [];
            if (!S && (e.stopPropagation(), i.length > 0)) {
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
          L = G((e) => {
            var t;
            const n = () => {
              var t;
              T(e), null == (t = g(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = g(e)) || t.addEventListener("keydown", n);
          }),
          D = G((e) => {
            var t;
            const n = M.current;
            M.current = !1;
            const r = I.current;
            if (((I.current = !1), "click" === f && r)) return;
            if (n) return;
            if ("function" == typeof R && !R(e)) return;
            const c = g(e),
              a = "[" + ke("inert") + "]",
              d = v(s.floating).querySelectorAll(a);
            let h = (0, i.vq)(c) ? c : null;
            for (; h && !(0, i.eu)(h); ) {
              const e = (0, i.$4)(h);
              if ((0, i.eu)(e) || !(0, i.vq)(e)) break;
              h = e;
            }
            if (
              d.length &&
              (0, i.vq)(c) &&
              !c.matches("html,body") &&
              !u(c, s.floating) &&
              Array.from(d).every((e) => !u(h, e))
            )
              return;
            if ((0, i.sb)(c) && z) {
              const t = (0, i.eu)(c),
                n = (0, i.L9)(c),
                r = /auto|scroll/,
                o = t || r.test(n.overflowX),
                s = t || r.test(n.overflowY),
                u = o && c.clientWidth > 0 && c.scrollWidth > c.clientWidth,
                l = s && c.clientHeight > 0 && c.scrollHeight > c.clientHeight,
                a = "rtl" === n.direction,
                d =
                  l &&
                  (a
                    ? e.offsetX <= c.offsetWidth - c.clientWidth
                    : e.offsetX > c.clientWidth),
                f = u && e.offsetY > c.clientHeight;
              if (d || f) return;
            }
            const m =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              b =
                w &&
                ze(w.nodesRef.current, m).some((t) => {
                  var n;
                  return p(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (p(e, s.floating) || p(e, s.domReference) || b) return;
            const y = w ? ze(w.nodesRef.current, m) : [];
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
              D(e), null == (t = g(e)) || t.removeEventListener(f, n);
            };
            null == (t = g(e)) || t.addEventListener(f, n);
          });
        r.useEffect(() => {
          if (!n || !c) return;
          (l.current.__escapeKeyBubbles = S),
            (l.current.__outsidePressBubbles = k);
          let e = -1;
          function t(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (A.current = !0);
          }
          function u() {
            e = window.setTimeout(
              () => {
                A.current = !1;
              },
              (0, i.Tc)() ? 5 : 0,
            );
          }
          const d = v(s.floating);
          a &&
            (d.addEventListener("keydown", C ? L : T, C),
            d.addEventListener("compositionstart", r),
            d.addEventListener("compositionend", u)),
            R && d.addEventListener(f, O ? P : D, O);
          let h = [];
          return (
            b &&
              ((0, i.vq)(s.domReference) && (h = (0, i.v9)(s.domReference)),
              (0, i.vq)(s.floating) && (h = h.concat((0, i.v9)(s.floating))),
              !(0, i.vq)(s.reference) &&
                s.reference &&
                s.reference.contextElement &&
                (h = h.concat((0, i.v9)(s.reference.contextElement)))),
            (h = h.filter((e) => {
              var t;
              return (
                e !== (null == (t = d.defaultView) ? void 0 : t.visualViewport)
              );
            })),
            h.forEach((e) => {
              e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
              a &&
                (d.removeEventListener("keydown", C ? L : T, C),
                d.removeEventListener("compositionstart", r),
                d.removeEventListener("compositionend", u)),
                R && d.removeEventListener(f, O ? P : D, O),
                h.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, s, a, R, f, n, o, b, c, S, k, T, C, L, D, O, P]),
          r.useEffect(() => {
            M.current = !1;
          }, [R, f]);
        const N = r.useMemo(
            () => ({
              onKeyDown: T,
              ...(h && {
                [vt[m]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== m && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [T, o, h, m],
          ),
          z = r.useMemo(
            () => ({
              onKeyDown: T,
              onMouseDown() {
                I.current = !0;
              },
              onMouseUp() {
                I.current = !0;
              },
              [pt[f]]: () => {
                M.current = !0;
              },
            }),
            [T, f],
          );
        return r.useMemo(
          () => (c ? { reference: N, floating: z } : {}),
          [c, N, z],
        );
      }
      function yt(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              i = we(),
              s = r.useRef({}),
              [u] = r.useState(() => xe()),
              l = null != Ie(),
              [c, a] = r.useState(o.reference),
              d = G((e, t, r) => {
                (s.current.openEvent = e ? t : void 0),
                  u.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: l,
                  }),
                  null == n || n(e, t, r);
              }),
              f = r.useMemo(() => ({ setPositionReference: a }), []),
              h = r.useMemo(
                () => ({
                  reference: c || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [c, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: s,
                open: t,
                onOpenChange: d,
                elements: h,
                events: u,
                floatingId: i,
                refs: f,
              }),
              [t, d, h, u, i, f],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || n,
          s = o.elements,
          [u, l] = r.useState(null),
          [c, a] = r.useState(null),
          d = (null == s ? void 0 : s.domReference) || u,
          f = r.useRef(null),
          h = Se();
        de(() => {
          d && (f.current = d);
        }, [d]);
        const m = (0, Y.we)({
            ...e,
            elements: { ...s, ...(c && { reference: c }) },
          }),
          v = r.useCallback(
            (e) => {
              const t = (0, i.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), m.refs.setReference(t);
            },
            [m.refs],
          ),
          p = r.useCallback(
            (e) => {
              ((0, i.vq)(e) || null === e) && ((f.current = e), l(e)),
                ((0, i.vq)(m.refs.reference.current) ||
                  null === m.refs.reference.current ||
                  (null !== e && !(0, i.vq)(e))) &&
                  m.refs.setReference(e);
            },
            [m.refs],
          ),
          g = r.useMemo(
            () => ({
              ...m.refs,
              setReference: p,
              setPositionReference: v,
              domReference: f,
            }),
            [m.refs, p, v],
          ),
          b = r.useMemo(
            () => ({ ...m.elements, domReference: d }),
            [m.elements, d],
          ),
          y = r.useMemo(
            () => ({ ...m, ...o, refs: g, elements: b, nodeId: t }),
            [m, g, b, t, o],
          );
        return (
          de(() => {
            o.dataRef.current.floatingContext = y;
            const e =
              null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = y);
          }),
          r.useMemo(
            () => ({ ...m, context: y, refs: g, elements: b }),
            [m, g, b, y],
          )
        );
      }
      function Et(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            events: c,
            dataRef: a,
            elements: h,
          } = e,
          { enabled: m = !0, visibleOnly: p = !0 } = t,
          b = r.useRef(!1),
          E = r.useRef(-1),
          w = r.useRef(!0);
        r.useEffect(() => {
          if (!m) return;
          const e = (0, i.zk)(h.domReference);
          function t() {
            !n &&
              (0, i.sb)(h.domReference) &&
              h.domReference === s(v(h.domReference)) &&
              (b.current = !0);
          }
          function r() {
            w.current = !0;
          }
          return (
            e.addEventListener("blur", t),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", t),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [h.domReference, n, m]),
          r.useEffect(() => {
            if (m)
              return (
                c.on("openchange", e),
                () => {
                  c.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: t } = e;
              ("reference-press" !== t && "escape-key" !== t) ||
                (b.current = !0);
            }
          }, [c, m]),
          r.useEffect(
            () => () => {
              Ce(E);
            },
            [],
          );
        const x = r.useMemo(
          () => ({
            onPointerDown(e) {
              d(e.nativeEvent) || (w.current = !1);
            },
            onMouseLeave() {
              b.current = !1;
            },
            onFocus(e) {
              if (b.current) return;
              const t = g(e.nativeEvent);
              if (p && (0, i.vq)(t))
                try {
                  if (
                    f() &&
                    l().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!w.current && !y(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              b.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, i.vq)(t) &&
                  t.hasAttribute(ke("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              E.current = window.setTimeout(() => {
                var e;
                const i = s(
                  h.domReference ? h.domReference.ownerDocument : document,
                );
                (t || i !== h.domReference) &&
                  (u(
                    null == (e = a.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    i,
                  ) ||
                    u(h.domReference, i) ||
                    r ||
                    o(!1, n, "focus"));
              });
            },
          }),
          [a, h.domReference, o, p],
        );
        return r.useMemo(() => (m ? { reference: x } : {}), [m, x]);
      }
      const wt = "active",
        xt = "selected";
      function Rt(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let i = e;
        if (o && e) {
          const { [wt]: t, [xt]: n, ...r } = e;
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
                      var s;
                      (o && [wt, xt].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof i &&
                              (null == (s = r.get(n)) || s.push(i),
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
      function Mt(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          i = r.useCallback((t) => Rt(t, e, "reference"), t),
          s = r.useCallback((t) => Rt(t, e, "floating"), n),
          u = r.useCallback((t) => Rt(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: i,
            getFloatingProps: s,
            getItemProps: u,
          }),
          [i, s, u],
        );
      }
      const It = "Escape";
      function St(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n;
        }
      }
      function kt(e, t) {
        return St(t, e === Q || e === Z, e === J || e === ee);
      }
      function Ct(e, t, n) {
        return (
          St(t, e === Z, n ? e === J : e === ee) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function Ot(e, t, n) {
        return St(t, n ? e === J : e === ee, e === Z);
      }
      function At(e, t, n, r) {
        return "both" === t || ("horizontal" === t && r && r > 1)
          ? e === It
          : St(t, n ? e === ee : e === J, e === Q);
      }
      function Tt(e, t) {
        const { open: n, onOpenChange: o, elements: l } = e,
          {
            listRef: c,
            activeIndex: f,
            onNavigate: h = () => {},
            enabled: m = !0,
            selectedIndex: p = null,
            allowEscape: g = !1,
            loop: b = !1,
            nested: y = !1,
            rtl: x = !1,
            virtual: R = !1,
            focusItemOnOpen: M = "auto",
            focusItemOnHover: I = !0,
            openOnArrowKeyDown: S = !0,
            disabledIndices: k,
            orientation: C = "vertical",
            cols: O = 1,
            scrollItemIntoView: A = !0,
            virtualItemRef: T,
            itemSizes: L,
            dense: D = !1,
          } = t;
        const P = Oe(it(l.floating)),
          N = Ie(),
          z = Se();
        de(() => {
          e.dataRef.current.orientation = C;
        }, [e, C]);
        const F = G(() => {
            h(-1 === _.current ? null : _.current);
          }),
          q = w(l.domReference),
          j = r.useRef(M),
          _ = r.useRef(null != p ? p : -1),
          W = r.useRef(null),
          K = r.useRef(!0),
          B = r.useRef(F),
          U = r.useRef(!!l.floating),
          V = r.useRef(n),
          Y = r.useRef(!1),
          H = r.useRef(!1),
          $ = Oe(k),
          X = Oe(n),
          Q = Oe(A),
          te = Oe(p),
          [fe, he] = r.useState(),
          [me, ve] = r.useState(),
          pe = G(() => {
            function e(e) {
              R
                ? (he(e.id),
                  null == z || z.events.emit("virtualfocus", e),
                  T && (T.current = e))
                : Pe(e, { sync: Y.current, preventScroll: !0 });
            }
            const t = c.current[_.current];
            t && e(t);
            (Y.current ? (e) => e() : requestAnimationFrame)(() => {
              const n = c.current[_.current] || t;
              if (!n) return;
              t || e(n);
              const r = Q.current;
              r &&
                be &&
                (H.current || !K.current) &&
                (null == n.scrollIntoView ||
                  n.scrollIntoView(
                    "boolean" == typeof r
                      ? { block: "nearest", inline: "nearest" }
                      : r,
                  ));
            });
          });
        de(() => {
          m &&
            (n && l.floating
              ? j.current &&
                null != p &&
                ((H.current = !0), (_.current = p), F())
              : U.current && ((_.current = -1), B.current()));
        }, [m, n, l.floating, p, F]),
          de(() => {
            if (m && n && l.floating)
              if (null == f) {
                if (((Y.current = !1), null != te.current)) return;
                if (
                  (U.current && ((_.current = -1), pe()),
                  (!V.current || !U.current) &&
                    j.current &&
                    (null != W.current ||
                      (!0 === j.current && null == W.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    if (null == c.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(t);
                      }
                      e++;
                    } else
                      (_.current =
                        null == W.current || Ct(W.current, C, x) || y
                          ? re(c, $.current)
                          : oe(c, $.current)),
                        (W.current = null),
                        F();
                  };
                  t();
                }
              } else ne(c, f) || ((_.current = f), pe(), (H.current = !1));
          }, [m, n, l.floating, f, te, y, c, C, x, F, pe, $]),
          de(() => {
            var e;
            if (!m || l.floating || !z || R || !U.current) return;
            const t = z.nodesRef.current,
              n =
                null == (e = t.find((e) => e.id === N)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = s(v(l.floating)),
              o = t.some((e) => e.context && u(e.context.elements.floating, r));
            n && !o && K.current && n.focus({ preventScroll: !0 });
          }, [m, l.floating, z, N, R]),
          de(() => {
            if (m && z && R && !N)
              return (
                z.events.on("virtualfocus", e),
                () => {
                  z.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              ve(e.id), T && (T.current = e);
            }
          }, [m, z, R, N, T]),
          de(() => {
            (B.current = F), (V.current = n), (U.current = !!l.floating);
          }),
          de(() => {
            n || (W.current = null);
          }, [n]);
        const ge = null != f,
          be = r.useMemo(() => {
            function e(e) {
              if (!n) return;
              const t = c.current.indexOf(e);
              -1 !== t && _.current !== t && ((_.current = t), F());
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
                  (Y.current = !0), (H.current = !1), e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  var n;
                  K.current &&
                    "touch" !== t &&
                    ((Y.current = !0),
                    (_.current = -1),
                    F(),
                    R ||
                      null == (n = P.current) ||
                      n.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [n, P, I, c, F, R]),
          ye = G((e) => {
            if (((K.current = !1), (Y.current = !0), 229 === e.which)) return;
            if (!X.current && e.currentTarget === P.current) return;
            if (y && At(e.key, C, x, O))
              return (
                E(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, i.sb)(l.domReference) &&
                  (R
                    ? null == z || z.events.emit("virtualfocus", l.domReference)
                    : l.domReference.focus())
                )
              );
            const t = _.current,
              r = re(c, k),
              u = oe(c, k);
            if (
              (q ||
                ("Home" === e.key && (E(e), (_.current = r), F()),
                "End" === e.key && (E(e), (_.current = u), F())),
              O > 1)
            ) {
              const t =
                  L ||
                  Array.from({ length: c.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                n = ue(t, O, D),
                o = n.findIndex((e) => null != e && !ae(c.current, e, k)),
                i = n.reduce(
                  (e, t, n) => (null == t || ae(c.current, t, k) ? e : n),
                  -1,
                ),
                s =
                  n[
                    se(
                      {
                        current: n.map((e) =>
                          null != e ? c.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: C,
                        loop: b,
                        rtl: x,
                        cols: O,
                        disabledIndices: ce(
                          [
                            ...(k ||
                              c.current.map((e, t) =>
                                ae(c.current, t) ? t : void 0,
                              )),
                            void 0,
                          ],
                          n,
                        ),
                        minIndex: o,
                        maxIndex: i,
                        prevIndex: le(
                          _.current > u ? r : _.current,
                          t,
                          n,
                          O,
                          e.key === Z
                            ? "bl"
                            : e.key === (x ? J : ee)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != s && ((_.current = s), F()), "both" === C)) return;
            }
            if (kt(e.key, C)) {
              if (
                (E(e),
                n && !R && s(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (_.current = Ct(e.key, C, x) ? r : u), void F();
              Ct(e.key, C, x)
                ? (_.current = b
                    ? t >= u
                      ? g && t !== c.current.length
                        ? -1
                        : r
                      : ie(c, { startingIndex: t, disabledIndices: k })
                    : Math.min(
                        u,
                        ie(c, { startingIndex: t, disabledIndices: k }),
                      ))
                : (_.current = b
                    ? t <= r
                      ? g && -1 !== t
                        ? c.current.length
                        : u
                      : ie(c, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: k,
                        })
                    : Math.max(
                        r,
                        ie(c, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: k,
                        }),
                      )),
                ne(c, _.current) && (_.current = -1),
                F();
            }
          }),
          Ee = r.useMemo(
            () => R && n && ge && { "aria-activedescendant": me || fe },
            [R, n, ge, me, fe],
          ),
          we = r.useMemo(
            () => ({
              "aria-orientation": "both" === C ? void 0 : C,
              ...(q ? {} : Ee),
              onKeyDown: ye,
              onPointerMove() {
                K.current = !0;
              },
            }),
            [Ee, ye, C, q],
          ),
          xe = r.useMemo(() => {
            function e(e) {
              "auto" === M && a(e.nativeEvent) && (j.current = !0);
            }
            function t(e) {
              (j.current = M),
                "auto" === M && d(e.nativeEvent) && (j.current = !0);
            }
            return {
              ...Ee,
              onKeyDown(e) {
                var t;
                K.current = !1;
                const r = e.key.startsWith("Arrow"),
                  i = ["Home", "End"].includes(e.key),
                  s = r || i,
                  u =
                    null == z ||
                    null == (t = z.nodesRef.current.find((e) => e.id === N)) ||
                    null == (t = t.context) ||
                    null == (t = t.dataRef)
                      ? void 0
                      : t.current.orientation,
                  l = Ot(e.key, C, x),
                  a = At(e.key, C, x, O),
                  d = Ot(e.key, u, x),
                  f = kt(e.key, C),
                  h = (y ? d : f) || "Enter" === e.key || "" === e.key.trim();
                if (R && n) {
                  const t =
                      null == z
                        ? void 0
                        : z.nodesRef.current.find((e) => null == e.parentId),
                    n =
                      z && t
                        ? (function (e, t) {
                            let n,
                              r = -1;
                            return (
                              (function t(o, i) {
                                i > r && ((n = o), (r = i)),
                                  ze(e, o).forEach((e) => {
                                    t(e.id, i + 1);
                                  });
                              })(t, 0),
                              e.find((e) => e.id === n)
                            );
                          })(z.nodesRef.current, t.id)
                        : null;
                  if (s && n && T) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (l || a) {
                      var m, v;
                      const r =
                          (null == (m = n.context)
                            ? void 0
                            : m.elements.domReference) === e.currentTarget,
                        o =
                          a && !r
                            ? null == (v = n.context)
                              ? void 0
                              : v.elements.domReference
                            : l
                              ? c.current.find(
                                  (e) => (null == e ? void 0 : e.id) === fe,
                                )
                              : null;
                      o && (E(e), o.dispatchEvent(t), ve(void 0));
                    }
                    var g;
                    if ((f || i) && n.context)
                      if (
                        n.context.open &&
                        n.parentId &&
                        e.currentTarget !== n.context.elements.domReference
                      )
                        return (
                          E(e),
                          void (
                            null == (g = n.context.elements.domReference) ||
                            g.dispatchEvent(t)
                          )
                        );
                  }
                  return ye(e);
                }
                if (n || S || !r) {
                  if (h) {
                    const t = kt(e.key, u);
                    W.current = y && t ? null : e.key;
                  }
                  y
                    ? d &&
                      (E(e),
                      n
                        ? ((_.current = re(c, $.current)), F())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : f &&
                      (null != p && (_.current = p),
                      E(e),
                      !n && S ? o(!0, e.nativeEvent, "list-navigation") : ye(e),
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
          }, [fe, Ee, O, ye, $, M, c, y, F, o, n, S, C, N, x, p, z, R, T]);
        return r.useMemo(
          () => (m ? { reference: xe, floating: we, item: be } : {}),
          [m, xe, we, be],
        );
      }
      const Lt = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function Dt(e, t) {
        var n;
        void 0 === t && (t = {});
        const { open: o, floatingId: i } = e,
          { enabled: s = !0, role: u = "dialog" } = t,
          l = null != (n = Lt.get(u)) ? n : u,
          c = we(),
          a = null != Ie(),
          d = r.useMemo(
            () =>
              "tooltip" === l || "label" === u
                ? {
                    ["aria-" + ("label" === u ? "labelledby" : "describedby")]:
                      o ? i : void 0,
                  }
                : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                    "aria-controls": o ? i : void 0,
                    ...("listbox" === l && { role: "combobox" }),
                    ...("menu" === l && { id: c }),
                    ...("menu" === l && a && { role: "menuitem" }),
                    ...("select" === u && { "aria-autocomplete": "none" }),
                    ...("combobox" === u && { "aria-autocomplete": "list" }),
                  },
            [l, i, a, o, c, u],
          ),
          f = r.useMemo(() => {
            const e = { id: i, ...(l && { role: l }) };
            return "tooltip" === l || "label" === u
              ? e
              : { ...e, ...("menu" === l && { "aria-labelledby": c }) };
          }, [l, i, c, u]),
          h = r.useCallback(
            (e) => {
              let { active: t, selected: n } = e;
              const r = { role: "option", ...(t && { id: i + "-option" }) };
              switch (u) {
                case "select":
                  return { ...r, "aria-selected": t && n };
                case "combobox":
                  return { ...r, ...(t && { "aria-selected": !0 }) };
              }
              return {};
            },
            [i, u],
          );
        return r.useMemo(
          () => (s ? { reference: d, floating: f, item: h } : {}),
          [s, d, f, h],
        );
      }
      function Pt(e, t) {
        var n;
        const { open: o, dataRef: i } = e,
          {
            listRef: s,
            activeIndex: u,
            onMatch: l,
            onTypingChange: c,
            enabled: a = !0,
            findMatch: d = null,
            resetMs: f = 750,
            ignoreKeys: h = [],
            selectedIndex: m = null,
          } = t,
          v = r.useRef(-1),
          p = r.useRef(""),
          g = r.useRef(null != (n = null != m ? m : u) ? n : -1),
          b = r.useRef(null),
          y = G(l),
          w = G(c),
          x = Oe(d),
          R = Oe(h);
        de(() => {
          o && (Ce(v), (b.current = null), (p.current = ""));
        }, [o]),
          de(() => {
            var e;
            o &&
              "" === p.current &&
              (g.current = null != (e = null != m ? m : u) ? e : -1);
          }, [o, m, u]);
        const M = G((e) => {
            e
              ? i.current.typing || ((i.current.typing = e), w(e))
              : i.current.typing && ((i.current.typing = e), w(e));
          }),
          I = G((e) => {
            function t(e, t, n) {
              const r = x.current
                ? x.current(t, n)
                : t.find(
                    (e) =>
                      0 ===
                      (null == e
                        ? void 0
                        : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())),
                  );
              return r ? e.indexOf(r) : -1;
            }
            const n = s.current;
            if (
              (p.current.length > 0 &&
                " " !== p.current[0] &&
                (-1 === t(n, n, p.current) ? M(!1) : " " === e.key && E(e)),
              null == n ||
                R.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (E(e), M(!0));
            n.every((e) => {
              var t, n;
              return (
                !e ||
                (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                  (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
              );
            }) &&
              p.current === e.key &&
              ((p.current = ""), (g.current = b.current)),
              (p.current += e.key),
              Ce(v),
              (v.current = window.setTimeout(() => {
                (p.current = ""), (g.current = b.current), M(!1);
              }, f));
            const r = g.current,
              i = t(
                n,
                [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)],
                p.current,
              );
            -1 !== i
              ? (y(i), (b.current = i))
              : " " !== e.key && ((p.current = ""), M(!1));
          }),
          S = r.useMemo(() => ({ onKeyDown: I }), [I]),
          k = r.useMemo(
            () => ({
              onKeyDown: I,
              onKeyUp(e) {
                " " === e.key && M(!1);
              },
            }),
            [I, M],
          );
        return r.useMemo(
          () => (a ? { reference: S, floating: k } : {}),
          [a, S, k],
        );
      }
      function Nt(e, t) {
        const [n, r] = e;
        let o = !1;
        const i = t.length;
        for (let e = 0, s = i - 1; e < i; s = e++) {
          const [i, u] = t[e] || [0, 0],
            [l, c] = t[s] || [0, 0];
          u >= r != c >= r &&
            n <= ((l - i) * (r - u)) / (c - u) + i &&
            (o = !o);
        }
        return o;
      }
      function zt(e) {
        void 0 === e && (e = {});
        const {
          buffer: t = 0.5,
          blockPointerEvents: n = !1,
          requireIntent: r = !0,
        } = e;
        let o,
          s = !1,
          l = null,
          c = null,
          a = performance.now();
        const d = (e) => {
          let {
            x: n,
            y: d,
            placement: f,
            elements: h,
            onClose: m,
            nodeId: v,
            tree: p,
          } = e;
          return function (e) {
            function b() {
              clearTimeout(o), m();
            }
            if (
              (clearTimeout(o),
              !h.domReference ||
                !h.floating ||
                null == f ||
                null == n ||
                null == d)
            )
              return;
            const { clientX: y, clientY: E } = e,
              w = [y, E],
              x = g(e),
              R = "mouseleave" === e.type,
              M = u(h.floating, x),
              I = u(h.domReference, x),
              S = h.domReference.getBoundingClientRect(),
              k = h.floating.getBoundingClientRect(),
              C = f.split("-")[0],
              O = n > k.right - k.width / 2,
              A = d > k.bottom - k.height / 2,
              T = (function (e, t) {
                return (
                  e[0] >= t.x &&
                  e[0] <= t.x + t.width &&
                  e[1] >= t.y &&
                  e[1] <= t.y + t.height
                );
              })(w, S),
              L = k.width > S.width,
              D = k.height > S.height,
              P = (L ? S : k).left,
              N = (L ? S : k).right,
              z = (D ? S : k).top,
              F = (D ? S : k).bottom;
            if (M && ((s = !0), !R)) return;
            if ((I && (s = !1), I && !R)) return void (s = !0);
            if (
              R &&
              (0, i.vq)(e.relatedTarget) &&
              u(h.floating, e.relatedTarget)
            )
              return;
            if (
              p &&
              ze(p.nodesRef.current, v).some((e) => {
                let { context: t } = e;
                return null == t ? void 0 : t.open;
              })
            )
              return;
            if (
              ("top" === C && d >= S.bottom - 1) ||
              ("bottom" === C && d <= S.top + 1) ||
              ("left" === C && n >= S.right - 1) ||
              ("right" === C && n <= S.left + 1)
            )
              return b();
            let q = [];
            switch (C) {
              case "top":
                q = [
                  [P, S.top + 1],
                  [P, k.bottom - 1],
                  [N, k.bottom - 1],
                  [N, S.top + 1],
                ];
                break;
              case "bottom":
                q = [
                  [P, k.top + 1],
                  [P, S.bottom - 1],
                  [N, S.bottom - 1],
                  [N, k.top + 1],
                ];
                break;
              case "left":
                q = [
                  [k.right - 1, F],
                  [k.right - 1, z],
                  [S.left + 1, z],
                  [S.left + 1, F],
                ];
                break;
              case "right":
                q = [
                  [S.right - 1, F],
                  [S.right - 1, z],
                  [k.left + 1, z],
                  [k.left + 1, F],
                ];
            }
            if (!Nt([y, E], q)) {
              if (s && !T) return b();
              if (!R && r) {
                const t = (function (e, t) {
                  const n = performance.now(),
                    r = n - a;
                  if (null === l || null === c || 0 === r)
                    return (l = e), (c = t), (a = n), null;
                  const o = e - l,
                    i = t - c,
                    s = Math.sqrt(o * o + i * i);
                  return (l = e), (c = t), (a = n), s / r;
                })(e.clientX, e.clientY);
                if (null !== t && t < 0.1) return b();
              }
              Nt(
                [y, E],
                (function (e) {
                  let [n, r] = e;
                  switch (C) {
                    case "top":
                      return [
                        [L ? n + t / 2 : O ? n + 4 * t : n - 4 * t, r + t + 1],
                        [L ? n - t / 2 : O ? n + 4 * t : n - 4 * t, r + t + 1],
                        ...[
                          [k.left, O || L ? k.bottom - t : k.top],
                          [
                            k.right,
                            O ? (L ? k.bottom - t : k.top) : k.bottom - t,
                          ],
                        ],
                      ];
                    case "bottom":
                      return [
                        [L ? n + t / 2 : O ? n + 4 * t : n - 4 * t, r - t],
                        [L ? n - t / 2 : O ? n + 4 * t : n - 4 * t, r - t],
                        ...[
                          [k.left, O || L ? k.top + t : k.bottom],
                          [k.right, O ? (L ? k.top + t : k.bottom) : k.top + t],
                        ],
                      ];
                    case "left": {
                      const e = [
                          n + t + 1,
                          D ? r + t / 2 : A ? r + 4 * t : r - 4 * t,
                        ],
                        o = [
                          n + t + 1,
                          D ? r - t / 2 : A ? r + 4 * t : r - 4 * t,
                        ];
                      return [
                        ...[
                          [A || D ? k.right - t : k.left, k.top],
                          [
                            A ? (D ? k.right - t : k.left) : k.right - t,
                            k.bottom,
                          ],
                        ],
                        e,
                        o,
                      ];
                    }
                    case "right":
                      return [
                        [n - t, D ? r + t / 2 : A ? r + 4 * t : r - 4 * t],
                        [n - t, D ? r - t / 2 : A ? r + 4 * t : r - 4 * t],
                        ...[
                          [A || D ? k.left + t : k.right, k.top],
                          [
                            A ? (D ? k.left + t : k.right) : k.left + t,
                            k.bottom,
                          ],
                        ],
                      ];
                  }
                })([n, d]),
              )
                ? !s && r && (o = window.setTimeout(b, 40))
                : b();
            }
          };
        };
        return (d.__options = { blockPointerEvents: n }), d;
      }
    },
    92148: (e, t, n) => {
      n.d(t, { Te: () => l });
      var r = n(90626),
        o = n(72739),
        i = n(59366);
      const s =
        "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function u(e) {
        const t = r.useReducer(() => ({}), {})[1],
          n = {
            ...e,
            onChange: (n, r) => {
              var i;
              r ? (0, o.flushSync)(t) : t(),
                null == (i = e.onChange) || i.call(e, n, r);
            },
          },
          [u] = r.useState(() => new i.YV(n));
        return (
          u.setOptions(n),
          s(() => u._didMount(), []),
          s(() => u._willUpdate()),
          u
        );
      }
      function l(e) {
        return u({
          observeElementRect: i.T6,
          observeElementOffset: i.AO,
          scrollToFn: i.Ox,
          ...e,
        });
      }
    },
    59366: (e, t, n) => {
      function r(e, t, n) {
        let r,
          o = n.initialDeps ?? [];
        function i() {
          var i, s, u, l;
          let c;
          n.key &&
            (null == (i = n.debug) ? void 0 : i.call(n)) &&
            (c = Date.now());
          const a = e();
          if (!(a.length !== o.length || a.some((e, t) => o[t] !== e)))
            return r;
          let d;
          if (
            ((o = a),
            n.key &&
              (null == (s = n.debug) ? void 0 : s.call(n)) &&
              (d = Date.now()),
            (r = t(...a)),
            n.key && (null == (u = n.debug) ? void 0 : u.call(n)))
          ) {
            const e = Math.round(100 * (Date.now() - c)) / 100,
              t = Math.round(100 * (Date.now() - d)) / 100,
              r = t / 16,
              o = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return (
            null == (l = null == n ? void 0 : n.onChange) || l.call(n, r), r
          );
        }
        return (
          (i.updateDeps = (e) => {
            o = e;
          }),
          i
        );
      }
      function o(e, t) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (t ? `: ${t}` : ""));
        return e;
      }
      n.d(t, {
        YV: () => v,
        Ox: () => m,
        ZO: () => h,
        AO: () => f,
        T6: () => c,
      });
      const i = (e, t, n) => {
          let r;
          return function (...o) {
            e.clearTimeout(r), (r = e.setTimeout(() => t.apply(this, o), n));
          };
        },
        s = (e) => {
          const { offsetWidth: t, offsetHeight: n } = e;
          return { width: t, height: n };
        },
        u = (e) => e,
        l = (e) => {
          const t = Math.max(e.startIndex - e.overscan, 0),
            n = Math.min(e.endIndex + e.overscan, e.count - 1),
            r = [];
          for (let e = t; e <= n; e++) r.push(e);
          return r;
        },
        c = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const r = e.targetWindow;
          if (!r) return;
          const o = (e) => {
            const { width: n, height: r } = e;
            t({ width: Math.round(n), height: Math.round(r) });
          };
          if ((o(s(n)), !r.ResizeObserver)) return () => {};
          const i = new r.ResizeObserver((t) => {
            const r = () => {
              const e = t[0];
              if (null == e ? void 0 : e.borderBoxSize) {
                const t = e.borderBoxSize[0];
                if (t)
                  return void o({ width: t.inlineSize, height: t.blockSize });
              }
              o(s(n));
            };
            e.options.useAnimationFrameWithResizeObserver
              ? requestAnimationFrame(r)
              : r();
          });
          return (
            i.observe(n, { box: "border-box" }),
            () => {
              i.unobserve(n);
            }
          );
        },
        a = { passive: !0 },
        d = "undefined" == typeof window || "onscrollend" in window,
        f = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const r = e.targetWindow;
          if (!r) return;
          let o = 0;
          const s =
              e.options.useScrollendEvent && d
                ? () => {}
                : i(
                    r,
                    () => {
                      t(o, !1);
                    },
                    e.options.isScrollingResetDelay,
                  ),
            u = (r) => () => {
              const { horizontal: i, isRtl: u } = e.options;
              (o = i ? n.scrollLeft * (u ? -1 : 1) : n.scrollTop), s(), t(o, r);
            },
            l = u(!0),
            c = u(!1);
          c(), n.addEventListener("scroll", l, a);
          const f = e.options.useScrollendEvent && d;
          return (
            f && n.addEventListener("scrollend", c, a),
            () => {
              n.removeEventListener("scroll", l),
                f && n.removeEventListener("scrollend", c);
            }
          );
        },
        h = (e, t, n) => {
          if (null == t ? void 0 : t.borderBoxSize) {
            const e = t.borderBoxSize[0];
            if (e) {
              return Math.round(
                e[n.options.horizontal ? "inlineSize" : "blockSize"],
              );
            }
          }
          return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
        },
        m = (e, { adjustments: t = 0, behavior: n }, r) => {
          var o, i;
          const s = e + t;
          null == (i = null == (o = r.scrollElement) ? void 0 : o.scrollTo) ||
            i.call(o, {
              [r.options.horizontal ? "left" : "top"]: s,
              behavior: n,
            });
        };
      class v {
        constructor(e) {
          (this.unsubs = []),
            (this.scrollElement = null),
            (this.targetWindow = null),
            (this.isScrolling = !1),
            (this.measurementsCache = []),
            (this.itemSizeCache = new Map()),
            (this.pendingMeasuredCacheIndexes = []),
            (this.scrollRect = null),
            (this.scrollOffset = null),
            (this.scrollDirection = null),
            (this.scrollAdjustments = 0),
            (this.elementsCache = new Map()),
            (this.observer = (() => {
              let e = null;
              const t = () =>
                e ||
                (this.targetWindow && this.targetWindow.ResizeObserver
                  ? (e = new this.targetWindow.ResizeObserver((e) => {
                      e.forEach((e) => {
                        const t = () => {
                          this._measureElement(e.target, e);
                        };
                        this.options.useAnimationFrameWithResizeObserver
                          ? requestAnimationFrame(t)
                          : t();
                      });
                    }))
                  : null);
              return {
                disconnect: () => {
                  var n;
                  null == (n = t()) || n.disconnect(), (e = null);
                },
                observe: (e) => {
                  var n;
                  return null == (n = t())
                    ? void 0
                    : n.observe(e, { box: "border-box" });
                },
                unobserve: (e) => {
                  var n;
                  return null == (n = t()) ? void 0 : n.unobserve(e);
                },
              };
            })()),
            (this.range = null),
            (this.setOptions = (e) => {
              Object.entries(e).forEach(([t, n]) => {
                void 0 === n && delete e[t];
              }),
                (this.options = {
                  debug: !1,
                  initialOffset: 0,
                  overscan: 1,
                  paddingStart: 0,
                  paddingEnd: 0,
                  scrollPaddingStart: 0,
                  scrollPaddingEnd: 0,
                  horizontal: !1,
                  getItemKey: u,
                  rangeExtractor: l,
                  onChange: () => {},
                  measureElement: h,
                  initialRect: { width: 0, height: 0 },
                  scrollMargin: 0,
                  gap: 0,
                  indexAttribute: "data-index",
                  initialMeasurementsCache: [],
                  lanes: 1,
                  isScrollingResetDelay: 150,
                  enabled: !0,
                  isRtl: !1,
                  useScrollendEvent: !1,
                  useAnimationFrameWithResizeObserver: !1,
                  ...e,
                });
            }),
            (this.notify = (e) => {
              var t, n;
              null == (n = (t = this.options).onChange) || n.call(t, this, e);
            }),
            (this.maybeNotify = r(
              () => (
                this.calculateRange(),
                [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ]
              ),
              (e) => {
                this.notify(e);
              },
              {
                key: !1,
                debug: () => this.options.debug,
                initialDeps: [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ],
              },
            )),
            (this.cleanup = () => {
              this.unsubs.filter(Boolean).forEach((e) => e()),
                (this.unsubs = []),
                this.observer.disconnect(),
                (this.scrollElement = null),
                (this.targetWindow = null);
            }),
            (this._didMount = () => () => {
              this.cleanup();
            }),
            (this._willUpdate = () => {
              var e;
              const t = this.options.enabled
                ? this.options.getScrollElement()
                : null;
              if (this.scrollElement !== t) {
                if ((this.cleanup(), !t)) return void this.maybeNotify();
                (this.scrollElement = t),
                  this.scrollElement && "ownerDocument" in this.scrollElement
                    ? (this.targetWindow =
                        this.scrollElement.ownerDocument.defaultView)
                    : (this.targetWindow =
                        (null == (e = this.scrollElement)
                          ? void 0
                          : e.window) ?? null),
                  this.elementsCache.forEach((e) => {
                    this.observer.observe(e);
                  }),
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0,
                  }),
                  this.unsubs.push(
                    this.options.observeElementRect(this, (e) => {
                      (this.scrollRect = e), this.maybeNotify();
                    }),
                  ),
                  this.unsubs.push(
                    this.options.observeElementOffset(this, (e, t) => {
                      (this.scrollAdjustments = 0),
                        (this.scrollDirection = t
                          ? this.getScrollOffset() < e
                            ? "forward"
                            : "backward"
                          : null),
                        (this.scrollOffset = e),
                        (this.isScrolling = t),
                        this.maybeNotify();
                    }),
                  );
              }
            }),
            (this.getSize = () =>
              this.options.enabled
                ? ((this.scrollRect =
                    this.scrollRect ?? this.options.initialRect),
                  this.scrollRect[this.options.horizontal ? "width" : "height"])
                : ((this.scrollRect = null), 0)),
            (this.getScrollOffset = () =>
              this.options.enabled
                ? ((this.scrollOffset =
                    this.scrollOffset ??
                    ("function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset)),
                  this.scrollOffset)
                : ((this.scrollOffset = null), 0)),
            (this.getFurthestMeasurement = (e, t) => {
              const n = new Map(),
                r = new Map();
              for (let o = t - 1; o >= 0; o--) {
                const t = e[o];
                if (n.has(t.lane)) continue;
                const i = r.get(t.lane);
                if (
                  (null == i || t.end > i.end
                    ? r.set(t.lane, t)
                    : t.end < i.end && n.set(t.lane, !0),
                  n.size === this.options.lanes)
                )
                  break;
              }
              return r.size === this.options.lanes
                ? Array.from(r.values()).sort((e, t) =>
                    e.end === t.end ? e.index - t.index : e.end - t.end,
                  )[0]
                : void 0;
            }),
            (this.getMeasurementOptions = r(
              () => [
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
              ],
              (e, t, n, r, o) => (
                (this.pendingMeasuredCacheIndexes = []),
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: r,
                  enabled: o,
                }
              ),
              { key: !1 },
            )),
            (this.getMeasurements = r(
              () => [this.getMeasurementOptions(), this.itemSizeCache],
              (
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: r,
                  enabled: o,
                },
                i,
              ) => {
                if (!o)
                  return (
                    (this.measurementsCache = []),
                    this.itemSizeCache.clear(),
                    []
                  );
                0 === this.measurementsCache.length &&
                  ((this.measurementsCache =
                    this.options.initialMeasurementsCache),
                  this.measurementsCache.forEach((e) => {
                    this.itemSizeCache.set(e.key, e.size);
                  }));
                const s =
                  this.pendingMeasuredCacheIndexes.length > 0
                    ? Math.min(...this.pendingMeasuredCacheIndexes)
                    : 0;
                this.pendingMeasuredCacheIndexes = [];
                const u = this.measurementsCache.slice(0, s);
                for (let o = s; o < e; o++) {
                  const e = r(o),
                    s =
                      1 === this.options.lanes
                        ? u[o - 1]
                        : this.getFurthestMeasurement(u, o),
                    l = s ? s.end + this.options.gap : t + n,
                    c = i.get(e),
                    a = "number" == typeof c ? c : this.options.estimateSize(o),
                    d = l + a,
                    f = s ? s.lane : o % this.options.lanes;
                  u[o] = {
                    index: o,
                    start: l,
                    size: a,
                    end: d,
                    key: e,
                    lane: f,
                  };
                }
                return (this.measurementsCache = u), u;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.calculateRange = r(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
                this.options.lanes,
              ],
              (e, t, n, r) =>
                (this.range =
                  e.length > 0 && t > 0
                    ? (function ({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: n,
                        lanes: r,
                      }) {
                        const o = e.length - 1,
                          i = (t) => e[t].start;
                        if (e.length <= r)
                          return { startIndex: 0, endIndex: o };
                        let s = p(0, o, i, n),
                          u = s;
                        if (1 === r) for (; u < o && e[u].end < n + t; ) u++;
                        else if (r > 1) {
                          const i = Array(r).fill(0);
                          for (; u < o && i.some((e) => e < n + t); ) {
                            const t = e[u];
                            (i[t.lane] = t.end), u++;
                          }
                          const l = Array(r).fill(n + t);
                          for (; s >= 0 && l.some((e) => e >= n); ) {
                            const t = e[s];
                            (l[t.lane] = t.start), s--;
                          }
                          (s = Math.max(0, s - (s % r))),
                            (u = Math.min(o, u + (r - 1 - (u % r))));
                        }
                        return { startIndex: s, endIndex: u };
                      })({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: n,
                        lanes: r,
                      })
                    : null),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getVirtualIndexes = r(
              () => {
                let e = null,
                  t = null;
                const n = this.calculateRange();
                return (
                  n && ((e = n.startIndex), (t = n.endIndex)),
                  this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                  [
                    this.options.rangeExtractor,
                    this.options.overscan,
                    this.options.count,
                    e,
                    t,
                  ]
                );
              },
              (e, t, n, r, o) =>
                null === r || null === o
                  ? []
                  : e({ startIndex: r, endIndex: o, overscan: t, count: n }),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.indexFromElement = (e) => {
              const t = this.options.indexAttribute,
                n = e.getAttribute(t);
              return n
                ? parseInt(n, 10)
                : (console.warn(
                    `Missing attribute name '${t}={index}' on measured element.`,
                  ),
                  -1);
            }),
            (this._measureElement = (e, t) => {
              const n = this.indexFromElement(e),
                r = this.measurementsCache[n];
              if (!r) return;
              const o = r.key,
                i = this.elementsCache.get(o);
              i !== e &&
                (i && this.observer.unobserve(i),
                this.observer.observe(e),
                this.elementsCache.set(o, e)),
                e.isConnected &&
                  this.resizeItem(n, this.options.measureElement(e, t, this));
            }),
            (this.resizeItem = (e, t) => {
              const n = this.measurementsCache[e];
              if (!n) return;
              const r = t - (this.itemSizeCache.get(n.key) ?? n.size);
              0 !== r &&
                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(n, r, this)
                  : n.start <
                    this.getScrollOffset() + this.scrollAdjustments) &&
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: (this.scrollAdjustments += r),
                    behavior: void 0,
                  }),
                this.pendingMeasuredCacheIndexes.push(n.index),
                (this.itemSizeCache = new Map(
                  this.itemSizeCache.set(n.key, t),
                )),
                this.notify(!1));
            }),
            (this.measureElement = (e) => {
              e
                ? this._measureElement(e, void 0)
                : this.elementsCache.forEach((e, t) => {
                    e.isConnected ||
                      (this.observer.unobserve(e),
                      this.elementsCache.delete(t));
                  });
            }),
            (this.getVirtualItems = r(
              () => [this.getVirtualIndexes(), this.getMeasurements()],
              (e, t) => {
                const n = [];
                for (let r = 0, o = e.length; r < o; r++) {
                  const o = t[e[r]];
                  n.push(o);
                }
                return n;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getVirtualItemForOffset = (e) => {
              const t = this.getMeasurements();
              if (0 !== t.length)
                return o(t[p(0, t.length - 1, (e) => o(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t, n = 0) => {
              const r = this.getSize(),
                o = this.getScrollOffset();
              "auto" === t && (t = e >= o + r ? "end" : "start"),
                "center" === t ? (e += (n - r) / 2) : "end" === t && (e -= r);
              const i = this.getTotalSize() + this.options.scrollMargin - r;
              return Math.max(Math.min(i, e), 0);
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              const n = this.measurementsCache[e];
              if (!n) return;
              const r = this.getSize(),
                o = this.getScrollOffset();
              if ("auto" === t)
                if (n.end >= o + r - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(n.start <= o + this.options.scrollPaddingStart))
                    return [o, t];
                  t = "start";
                }
              const i =
                "end" === t
                  ? n.end + this.options.scrollPaddingEnd
                  : n.start - this.options.scrollPaddingStart;
              return [this.getOffsetForAlignment(i, t, n.size), t];
            }),
            (this.isDynamicMode = () => this.elementsCache.size > 0),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: n } = {},
            ) => {
              "smooth" === n &&
                this.isDynamicMode() &&
                console.warn(
                  "The `smooth` scroll behavior is not fully supported with dynamic size.",
                ),
                this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                  adjustments: void 0,
                  behavior: n,
                });
            }),
            (this.scrollToIndex = (
              e,
              { align: t = "auto", behavior: n } = {},
            ) => {
              "smooth" === n &&
                this.isDynamicMode() &&
                console.warn(
                  "The `smooth` scroll behavior is not fully supported with dynamic size.",
                ),
                (e = Math.max(0, Math.min(e, this.options.count - 1)));
              let r = 0;
              const o = (t) => {
                  if (!this.targetWindow) return;
                  const r = this.getOffsetForIndex(e, t);
                  if (!r)
                    return void console.warn(
                      "Failed to get offset for index:",
                      e,
                    );
                  const [o, s] = r;
                  this._scrollToOffset(o, { adjustments: void 0, behavior: n }),
                    this.targetWindow.requestAnimationFrame(() => {
                      const t = this.getScrollOffset(),
                        n = this.getOffsetForIndex(e, s);
                      var r, o;
                      n
                        ? ((r = n[0]), (o = t), Math.abs(r - o) < 1.01 || i(s))
                        : console.warn("Failed to get offset for index:", e);
                    });
                },
                i = (t) => {
                  this.targetWindow &&
                    (r++,
                    r < 10
                      ? this.targetWindow.requestAnimationFrame(() => o(t))
                      : console.warn(
                          `Failed to scroll to index ${e} after 10 attempts.`,
                        ));
                };
              o(t);
            }),
            (this.scrollBy = (e, { behavior: t } = {}) => {
              "smooth" === t &&
                this.isDynamicMode() &&
                console.warn(
                  "The `smooth` scroll behavior is not fully supported with dynamic size.",
                ),
                this._scrollToOffset(this.getScrollOffset() + e, {
                  adjustments: void 0,
                  behavior: t,
                });
            }),
            (this.getTotalSize = () => {
              var e;
              const t = this.getMeasurements();
              let n;
              if (0 === t.length) n = this.options.paddingStart;
              else if (1 === this.options.lanes)
                n = (null == (e = t[t.length - 1]) ? void 0 : e.end) ?? 0;
              else {
                const e = Array(this.options.lanes).fill(null);
                let r = t.length - 1;
                for (; r >= 0 && e.some((e) => null === e); ) {
                  const n = t[r];
                  null === e[n.lane] && (e[n.lane] = n.end), r--;
                }
                n = Math.max(...e.filter((e) => null !== e));
              }
              return Math.max(
                n - this.options.scrollMargin + this.options.paddingEnd,
                0,
              );
            }),
            (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
              this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
            }),
            (this.measure = () => {
              (this.itemSizeCache = new Map()), this.notify(!1);
            }),
            this.setOptions(e);
        }
      }
      const p = (e, t, n, r) => {
        for (; e <= t; ) {
          const o = ((e + t) / 2) | 0,
            i = n(o);
          if (i < r) e = o + 1;
          else {
            if (!(i > r)) return o;
            t = o - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      };
    },
  },
]);
