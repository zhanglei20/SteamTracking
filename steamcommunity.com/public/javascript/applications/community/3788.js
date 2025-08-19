/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3788],
  {
    94621: (e, n, t) => {
      t.d(n, { Ej: () => p, cY: () => v, we: () => d });
      var r = t(28505),
        o = t(33559),
        u = t(90626),
        c = t(72739),
        i = "undefined" != typeof document ? u.useLayoutEffect : u.useEffect;
      function l(e, n) {
        if (e === n) return !0;
        if (typeof e != typeof n) return !1;
        if ("function" == typeof e && e.toString() === n.toString()) return !0;
        let t, r, o;
        if (e && n && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((t = e.length), t !== n.length)) return !1;
            for (r = t; 0 != r--; ) if (!l(e[r], n[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (t = o.length), t !== Object.keys(n).length)
          )
            return !1;
          for (r = t; 0 != r--; )
            if (!{}.hasOwnProperty.call(n, o[r])) return !1;
          for (r = t; 0 != r--; ) {
            const t = o[r];
            if (("_owner" !== t || !e.$$typeof) && !l(e[t], n[t])) return !1;
          }
          return !0;
        }
        return e != e && n != n;
      }
      function s(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function a(e, n) {
        const t = s(e);
        return Math.round(n * t) / t;
      }
      function f(e) {
        const n = u.useRef(e);
        return (
          i(() => {
            n.current = e;
          }),
          n
        );
      }
      function d(e) {
        void 0 === e && (e = {});
        const {
            placement: n = "bottom",
            strategy: t = "absolute",
            middleware: o = [],
            platform: d,
            elements: { reference: v, floating: p } = {},
            transform: m = !0,
            whileElementsMounted: g,
            open: h,
          } = e,
          [y, b] = u.useState({
            x: 0,
            y: 0,
            strategy: t,
            placement: n,
            middlewareData: {},
            isPositioned: !1,
          }),
          [w, E] = u.useState(o);
        l(w, o) || E(o);
        const [R, x] = u.useState(null),
          [k, I] = u.useState(null),
          M = u.useCallback((e) => {
            e !== A.current && ((A.current = e), x(e));
          }, []),
          S = u.useCallback((e) => {
            e !== T.current && ((T.current = e), I(e));
          }, []),
          C = v || R,
          O = p || k,
          A = u.useRef(null),
          T = u.useRef(null),
          L = u.useRef(y),
          N = null != g,
          P = f(g),
          D = f(d),
          q = f(h),
          F = u.useCallback(() => {
            if (!A.current || !T.current) return;
            const e = { placement: n, strategy: t, middleware: w };
            D.current && (e.platform = D.current),
              (0, r.rD)(A.current, T.current, e).then((e) => {
                const n = { ...e, isPositioned: !1 !== q.current };
                K.current &&
                  !l(L.current, n) &&
                  ((L.current = n),
                  c.flushSync(() => {
                    b(n);
                  }));
              });
          }, [w, n, t, D, q]);
        i(() => {
          !1 === h &&
            L.current.isPositioned &&
            ((L.current.isPositioned = !1),
            b((e) => ({ ...e, isPositioned: !1 })));
        }, [h]);
        const K = u.useRef(!1);
        i(
          () => (
            (K.current = !0),
            () => {
              K.current = !1;
            }
          ),
          [],
        ),
          i(() => {
            if ((C && (A.current = C), O && (T.current = O), C && O)) {
              if (P.current) return P.current(C, O, F);
              F();
            }
          }, [C, O, F, P, N]);
        const j = u.useMemo(
            () => ({
              reference: A,
              floating: T,
              setReference: M,
              setFloating: S,
            }),
            [M, S],
          ),
          _ = u.useMemo(() => ({ reference: C, floating: O }), [C, O]),
          W = u.useMemo(() => {
            const e = { position: t, left: 0, top: 0 };
            if (!_.floating) return e;
            const n = a(_.floating, y.x),
              r = a(_.floating, y.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + n + "px, " + r + "px)",
                  ...(s(_.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: t, left: n, top: r };
          }, [t, m, _.floating, y.x, y.y]);
        return u.useMemo(
          () => ({ ...y, update: F, refs: j, elements: _, floatingStyles: W }),
          [y, F, j, _, W],
        );
      }
      const v = (e, n) => ({ ...(0, o.cY)(e), options: [e, n] }),
        p = (e, n) => ({ ...(0, r.Ej)(e), options: [e, n] });
    },
    73788: (e, n, t) => {
      t.d(n, {
        s3: () => rn,
        ph: () => ve,
        kp: () => cn,
        s9: () => fn,
        we: () => dn,
        iQ: () => vn,
        bv: () => hn,
        rm: () => pe,
        C1: () => kn,
        SV: () => V,
        It: () => Mn,
        lY: () => Sn,
      });
      var r = t(90626),
        o = t.t(r, 2),
        u = t(977);
      function c(e) {
        let n = e.activeElement;
        for (
          ;
          null !=
          (null == (t = n) || null == (t = t.shadowRoot)
            ? void 0
            : t.activeElement);
        ) {
          var t;
          n = n.shadowRoot.activeElement;
        }
        return n;
      }
      function i(e, n) {
        if (!e || !n) return !1;
        const t = null == n.getRootNode ? void 0 : n.getRootNode();
        if (e.contains(n)) return !0;
        if (t && (0, u.Ng)(t)) {
          let t = n;
          for (; t; ) {
            if (e === t) return !0;
            t = t.parentNode || t.host;
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
                let { brand: n, version: t } = e;
                return n + "/" + t;
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
      function p(e, n) {
        const t = ["mouse", "pen"];
        return n || t.push("", void 0), t.includes(e);
      }
      function m(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function g(e, n) {
        if (null == n) return !1;
        if ("composedPath" in e) return e.composedPath().includes(n);
        const t = e;
        return null != t.target && n.contains(t.target);
      }
      function h(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const y =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function b(e) {
        return (0, u.sb)(e) && e.matches(y);
      }
      function w(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function E(e) {
        return !!e && "combobox" === e.getAttribute("role") && b(e);
      }
      var R = t(58015),
        x = t(7850),
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
        M = "undefined" == typeof Element,
        S = M
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        C =
          !M && Element.prototype.getRootNode
            ? function (e) {
                var n;
                return null == e || null === (n = e.getRootNode) || void 0 === n
                  ? void 0
                  : n.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        O = function e(n, t) {
          var r;
          void 0 === t && (t = !0);
          var o =
            null == n || null === (r = n.getAttribute) || void 0 === r
              ? void 0
              : r.call(n, "inert");
          return "" === o || "true" === o || (t && n && e(n.parentNode));
        },
        A = function (e, n, t) {
          if (O(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(I));
          return n && S.call(e, I) && r.unshift(e), (r = r.filter(t));
        },
        T = function e(n, t, r) {
          for (var o = [], u = Array.from(n); u.length; ) {
            var c = u.shift();
            if (!O(c, !1))
              if ("SLOT" === c.tagName) {
                var i = c.assignedElements(),
                  l = e(i.length ? i : c.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: c, candidates: l });
              } else {
                S.call(c, I) &&
                  r.filter(c) &&
                  (t || !n.includes(c)) &&
                  o.push(c);
                var s =
                    c.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(c)),
                  a =
                    !O(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(c));
                if (s && a) {
                  var f = e(!0 === s ? c.children : s.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, f)
                    : o.push({ scopeParent: c, candidates: f });
                } else u.unshift.apply(u, c.children);
              }
          }
          return o;
        },
        L = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        N = function (e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
              (function (e) {
                var n,
                  t =
                    null == e || null === (n = e.getAttribute) || void 0 === n
                      ? void 0
                      : n.call(e, "contenteditable");
                return "" === t || "true" === t;
              })(e)) &&
            !L(e)
            ? 0
            : e.tabIndex;
        },
        P = function (e, n) {
          return e.tabIndex === n.tabIndex
            ? e.documentOrder - n.documentOrder
            : e.tabIndex - n.tabIndex;
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
              var n,
                t = e.form || C(e),
                r = function (e) {
                  return t.querySelectorAll(
                    'input[type="radio"][name="' + e + '"]',
                  );
                };
              if (
                "undefined" != typeof window &&
                void 0 !== window.CSS &&
                "function" == typeof window.CSS.escape
              )
                n = r(window.CSS.escape(e.name));
              else
                try {
                  n = r(e.name);
                } catch (e) {
                  return (
                    console.error(
                      "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                      e.message,
                    ),
                    !1
                  );
                }
              var o = (function (e, n) {
                for (var t = 0; t < e.length; t++)
                  if (e[t].checked && e[t].form === n) return e[t];
              })(n, e.form);
              return !o || o === e;
            })(e)
          );
        },
        F = function (e) {
          var n = e.getBoundingClientRect(),
            t = n.width,
            r = n.height;
          return 0 === t && 0 === r;
        },
        K = function (e, n) {
          var t = n.displayCheck,
            r = n.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = S.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (S.call(o, "details:not([open]) *")) return !0;
          if (t && "full" !== t && "legacy-full" !== t) {
            if ("non-zero-area" === t) return F(e);
          } else {
            if ("function" == typeof r) {
              for (var u = e; e; ) {
                var c = e.parentElement,
                  i = C(e);
                if (c && !c.shadowRoot && !0 === r(c)) return F(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : c || i === e.ownerDocument
                    ? c
                    : i.host;
              }
              e = u;
            }
            if (
              (function (e) {
                var n,
                  t,
                  r,
                  o,
                  u = e && C(e),
                  c = null === (n = u) || void 0 === n ? void 0 : n.host,
                  i = !1;
                if (u && u !== e)
                  for (
                    i = !!(
                      (null !== (t = c) &&
                        void 0 !== t &&
                        null !== (r = t.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(c)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !i && c;
                  ) {
                    var l, s, a;
                    i = !(
                      null ===
                        (s = c =
                          null === (l = u = C(c)) || void 0 === l
                            ? void 0
                            : l.host) ||
                      void 0 === s ||
                      null === (a = s.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(c)
                    );
                  }
                return i;
              })(e)
            )
              return !e.getClientRects().length;
            if ("legacy-full" !== t) return !0;
          }
          return !1;
        },
        j = function (e, n) {
          return !(
            n.disabled ||
            O(n) ||
            (function (e) {
              return D(e) && "hidden" === e.type;
            })(n) ||
            K(n, e) ||
            (function (e) {
              return (
                "DETAILS" === e.tagName &&
                Array.prototype.slice.apply(e.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })
              );
            })(n) ||
            (function (e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                for (var n = e.parentElement; n; ) {
                  if ("FIELDSET" === n.tagName && n.disabled) {
                    for (var t = 0; t < n.children.length; t++) {
                      var r = n.children.item(t);
                      if ("LEGEND" === r.tagName)
                        return (
                          !!S.call(n, "fieldset[disabled] *") || !r.contains(e)
                        );
                    }
                    return !0;
                  }
                  n = n.parentElement;
                }
              return !1;
            })(n)
          );
        },
        _ = function (e, n) {
          return !(q(n) || N(n) < 0 || !j(e, n));
        },
        W = function (e) {
          var n = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(n) || n >= 0);
        },
        U = function e(n) {
          var t = [],
            r = [];
          return (
            n.forEach(function (n, o) {
              var u = !!n.scopeParent,
                c = u ? n.scopeParent : n,
                i = (function (e, n) {
                  var t = N(e);
                  return t < 0 && n && !L(e) ? 0 : t;
                })(c, u),
                l = u ? e(n.candidates) : c;
              0 === i
                ? u
                  ? t.push.apply(t, l)
                  : t.push(c)
                : r.push({
                    documentOrder: o,
                    tabIndex: i,
                    item: n,
                    isScope: u,
                    content: l,
                  });
            }),
            r
              .sort(P)
              .reduce(function (e, n) {
                return (
                  n.isScope ? e.push.apply(e, n.content) : e.push(n.content), e
                );
              }, [])
              .concat(t)
          );
        },
        B = function (e, n) {
          var t;
          return (
            (t = (n = n || {}).getShadowRoot
              ? T([e], n.includeContainer, {
                  filter: _.bind(null, n),
                  flatten: !1,
                  getShadowRoot: n.getShadowRoot,
                  shadowRootFilter: W,
                })
              : A(e, n.includeContainer, _.bind(null, n))),
            U(t)
          );
        },
        H = function (e, n) {
          if (((n = n || {}), !e)) throw new Error("No node provided");
          return !1 !== S.call(e, I) && _(n, e);
        },
        z = (t(72739), t(94621));
      function V(e) {
        const n = r.useRef(void 0),
          t = r.useCallback((n) => {
            const t = e.map((e) => {
              if (null != e) {
                if ("function" == typeof e) {
                  const t = e,
                    r = t(n);
                  return "function" == typeof r
                    ? r
                    : () => {
                        t(null);
                      };
                }
                return (
                  (e.current = n),
                  () => {
                    e.current = null;
                  }
                );
              }
            });
            return () => {
              t.forEach((e) => (null == e ? void 0 : e()));
            };
          }, e);
        return r.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (e) => {
                  n.current && (n.current(), (n.current = void 0)),
                    null != e && (n.current = t(e));
                },
          e,
        );
      }
      const Y = { ...o },
        $ = Y.useInsertionEffect || ((e) => e());
      function X(e) {
        const n = r.useRef(() => {
          0;
        });
        return (
          $(() => {
            n.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return null == n.current ? void 0 : n.current(...t);
          }, [])
        );
      }
      const G = "ArrowUp",
        Q = "ArrowDown",
        J = "ArrowLeft",
        Z = "ArrowRight";
      function ee(e, n, t) {
        return Math.floor(e / n) !== t;
      }
      function ne(e, n) {
        return n < 0 || n >= e.current.length;
      }
      function te(e, n) {
        return oe(e, { disabledIndices: n });
      }
      function re(e, n) {
        return oe(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: n,
        });
      }
      function oe(e, n) {
        let {
          startingIndex: t = -1,
          decrement: r = !1,
          disabledIndices: o,
          amount: u = 1,
        } = void 0 === n ? {} : n;
        const c = e.current;
        let i = t;
        do {
          i += r ? -u : u;
        } while (i >= 0 && i <= c.length - 1 && se(c, i, o));
        return i;
      }
      function ue(e, n) {
        let {
            event: t,
            orientation: r,
            loop: o,
            rtl: u,
            cols: c,
            disabledIndices: i,
            minIndex: l,
            maxIndex: s,
            prevIndex: a,
            stopEvent: f = !1,
          } = n,
          d = a;
        if (t.key === G) {
          if ((f && w(t), -1 === a)) d = s;
          else if (
            ((d = oe(e, {
              startingIndex: d,
              amount: c,
              decrement: !0,
              disabledIndices: i,
            })),
            o && (a - c < l || d < 0))
          ) {
            const e = a % c,
              n = s % c,
              t = s - (n - e);
            d = n === e ? s : n > e ? t : t - c;
          }
          ne(e, d) && (d = a);
        }
        if (
          (t.key === Q &&
            (f && w(t),
            -1 === a
              ? (d = l)
              : ((d = oe(e, {
                  startingIndex: a,
                  amount: c,
                  disabledIndices: i,
                })),
                o &&
                  a + c > s &&
                  (d = oe(e, {
                    startingIndex: (a % c) - c,
                    amount: c,
                    disabledIndices: i,
                  }))),
            ne(e, d) && (d = a)),
          "both" === r)
        ) {
          const n = (0, R.RI)(a / c);
          t.key === (u ? J : Z) &&
            (f && w(t),
            a % c != c - 1
              ? ((d = oe(e, { startingIndex: a, disabledIndices: i })),
                o &&
                  ee(d, c, n) &&
                  (d = oe(e, {
                    startingIndex: a - (a % c) - 1,
                    disabledIndices: i,
                  })))
              : o &&
                (d = oe(e, {
                  startingIndex: a - (a % c) - 1,
                  disabledIndices: i,
                })),
            ee(d, c, n) && (d = a)),
            t.key === (u ? Z : J) &&
              (f && w(t),
              a % c != 0
                ? ((d = oe(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: i,
                  })),
                  o &&
                    ee(d, c, n) &&
                    (d = oe(e, {
                      startingIndex: a + (c - (a % c)),
                      decrement: !0,
                      disabledIndices: i,
                    })))
                : o &&
                  (d = oe(e, {
                    startingIndex: a + (c - (a % c)),
                    decrement: !0,
                    disabledIndices: i,
                  })),
              ee(d, c, n) && (d = a));
          const r = (0, R.RI)(s / c) === n;
          ne(e, d) &&
            (d =
              o && r
                ? t.key === (u ? Z : J)
                  ? s
                  : oe(e, {
                      startingIndex: a - (a % c) - 1,
                      disabledIndices: i,
                    })
                : a);
        }
        return d;
      }
      function ce(e, n, t) {
        const r = [];
        let o = 0;
        return (
          e.forEach((e, u) => {
            let { width: c, height: i } = e,
              l = !1;
            for (t && (o = 0); !l; ) {
              const e = [];
              for (let t = 0; t < c; t++)
                for (let r = 0; r < i; r++) e.push(o + t + r * n);
              (o % n) + c <= n && e.every((e) => null == r[e])
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
      function ie(e, n, t, r, o) {
        if (-1 === e) return -1;
        const u = t.indexOf(e),
          c = n[e];
        switch (o) {
          case "tl":
            return u;
          case "tr":
            return c ? u + c.width - 1 : u;
          case "bl":
            return c ? u + (c.height - 1) * r : u;
          case "br":
            return t.lastIndexOf(e);
        }
      }
      function le(e, n) {
        return n.flatMap((n, t) => (e.includes(n) ? [t] : []));
      }
      function se(e, n, t) {
        if (t) return t.includes(n);
        const r = e[n];
        return (
          null == r ||
          r.hasAttribute("disabled") ||
          "true" === r.getAttribute("aria-disabled")
        );
      }
      var ae = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function fe(e, n) {
        const t = e.compareDocumentPosition(n);
        return t & Node.DOCUMENT_POSITION_FOLLOWING ||
          t & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : t & Node.DOCUMENT_POSITION_PRECEDING ||
              t & Node.DOCUMENT_POSITION_CONTAINS
            ? 1
            : 0;
      }
      const de = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function ve(e) {
        const { children: n, elementsRef: t, labelsRef: o } = e,
          [u, c] = r.useState(() => new Set()),
          i = r.useCallback((e) => {
            c((n) => new Set(n).add(e));
          }, []),
          l = r.useCallback((e) => {
            c((n) => {
              const t = new Set(n);
              return t.delete(e), t;
            });
          }, []),
          s = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(u.keys())
                .sort(fe)
                .forEach((n, t) => {
                  e.set(n, t);
                }),
              e
            );
          }, [u]);
        return (0, x.jsx)(de.Provider, {
          value: r.useMemo(
            () => ({
              register: i,
              unregister: l,
              map: s,
              elementsRef: t,
              labelsRef: o,
            }),
            [i, l, s, t, o],
          ),
          children: n,
        });
      }
      function pe(e) {
        void 0 === e && (e = {});
        const { label: n } = e,
          {
            register: t,
            unregister: o,
            map: u,
            elementsRef: c,
            labelsRef: i,
          } = r.useContext(de),
          [l, s] = r.useState(null),
          a = r.useRef(null),
          f = r.useCallback(
            (e) => {
              if (((a.current = e), null !== l && ((c.current[l] = e), i))) {
                var t;
                const r = void 0 !== n;
                i.current[l] = r
                  ? n
                  : null != (t = null == e ? void 0 : e.textContent)
                    ? t
                    : null;
              }
            },
            [l, c, i, n],
          );
        return (
          ae(() => {
            const e = a.current;
            if (e)
              return (
                t(e),
                () => {
                  o(e);
                }
              );
          }, [t, o]),
          ae(() => {
            const e = a.current ? u.get(a.current) : null;
            null != e && s(e);
          }, [u]),
          r.useMemo(() => ({ ref: f, index: null == l ? -1 : l }), [l, f])
        );
      }
      const me = [J, Z],
        ge = [G, Q];
      let he = !1,
        ye = 0;
      const be = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + ye++;
      const we =
        Y.useId ||
        function () {
          const [e, n] = r.useState(() => (he ? be() : void 0));
          return (
            ae(() => {
              null == e && n(be());
            }, []),
            r.useEffect(() => {
              he = !0;
            }, []),
            e
          );
        };
      function Ee() {
        const e = new Map();
        return {
          emit(n, t) {
            var r;
            null == (r = e.get(n)) || r.forEach((e) => e(t));
          },
          on(n, t) {
            e.set(n, [...(e.get(n) || []), t]);
          },
          off(n, t) {
            var r;
            e.set(
              n,
              (null == (r = e.get(n)) ? void 0 : r.filter((e) => e !== t)) ||
                [],
            );
          },
        };
      }
      const Re = r.createContext(null),
        xe = r.createContext(null),
        ke = () => {
          var e;
          return (null == (e = r.useContext(Re)) ? void 0 : e.id) || null;
        },
        Ie = () => r.useContext(xe);
      function Me(e) {
        return "data-floating-ui-" + e;
      }
      function Se(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Ce(e) {
        const n = (0, r.useRef)(e);
        return (
          ae(() => {
            n.current = e;
          }),
          n
        );
      }
      let Oe = 0;
      function Ae(e, n) {
        void 0 === n && (n = {});
        const {
          preventScroll: t = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = n;
        r && cancelAnimationFrame(Oe);
        const u = () => (null == e ? void 0 : e.focus({ preventScroll: t }));
        o ? u() : (Oe = requestAnimationFrame(u));
      }
      function Te(e, n) {
        var t;
        let r = [],
          o = null == (t = e.find((e) => e.id === n)) ? void 0 : t.parentId;
        for (; o; ) {
          const n = e.find((e) => e.id === o);
          (o = null == n ? void 0 : n.parentId), n && (r = r.concat(n));
        }
        return r;
      }
      function Le(e, n) {
        let t = e.filter((e) => {
            var t;
            return (
              e.parentId === n && (null == (t = e.context) ? void 0 : t.open)
            );
          }),
          r = t;
        for (; r.length; )
          (r = e.filter((e) => {
            var n;
            return null == (n = r)
              ? void 0
              : n.some((n) => {
                  var t;
                  return (
                    e.parentId === n.id &&
                    (null == (t = e.context) ? void 0 : t.open)
                  );
                });
          })),
            (t = t.concat(r));
        return t;
      }
      let Ne = new WeakMap(),
        Pe = new WeakSet(),
        De = {},
        qe = 0;
      const Fe = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        Ke = (e) => e && (e.host || Ke(e.parentNode)),
        je = (e, n) =>
          n
            .map((n) => {
              if (e.contains(n)) return n;
              const t = Ke(n);
              return e.contains(t) ? t : null;
            })
            .filter((e) => null != e);
      function _e(e, n, t) {
        void 0 === n && (n = !1), void 0 === t && (t = !1);
        const r = m(e[0]).body;
        return (function (e, n, t, r) {
          const o = "data-floating-ui-inert",
            c = r ? "inert" : t ? "aria-hidden" : null,
            i = je(n, e),
            l = new Set(),
            s = new Set(i),
            a = [];
          De[o] || (De[o] = new WeakMap());
          const f = De[o];
          return (
            i.forEach(function e(n) {
              n && !l.has(n) && (l.add(n), n.parentNode && e(n.parentNode));
            }),
            (function e(n) {
              n &&
                !s.has(n) &&
                [].forEach.call(n.children, (n) => {
                  if ("script" !== (0, u.mq)(n))
                    if (l.has(n)) e(n);
                    else {
                      const e = c ? n.getAttribute(c) : null,
                        t = null !== e && "false" !== e,
                        r = Ne.get(n) || 0,
                        u = c ? r + 1 : r,
                        i = (f.get(n) || 0) + 1;
                      Ne.set(n, u),
                        f.set(n, i),
                        a.push(n),
                        1 === u && t && Pe.add(n),
                        1 === i && n.setAttribute(o, ""),
                        !t && c && n.setAttribute(c, "true");
                    }
                });
            })(n),
            l.clear(),
            qe++,
            () => {
              a.forEach((e) => {
                const n = Ne.get(e) || 0,
                  t = c ? n - 1 : n,
                  r = (f.get(e) || 0) - 1;
                Ne.set(e, t),
                  f.set(e, r),
                  t || (!Pe.has(e) && c && e.removeAttribute(c), Pe.delete(e)),
                  r || e.removeAttribute(o);
              }),
                qe--,
                qe ||
                  ((Ne = new WeakMap()),
                  (Ne = new WeakMap()),
                  (Pe = new WeakSet()),
                  (De = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, n, t);
      }
      const We = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function Ue(e, n) {
        const t = B(e, We());
        "prev" === n && t.reverse();
        const r = t.indexOf(c(m(e)));
        return t.slice(r + 1)[0];
      }
      function Be() {
        return Ue(document.body, "next");
      }
      function He() {
        return Ue(document.body, "prev");
      }
      function ze(e, n) {
        const t = n || e.currentTarget,
          r = e.relatedTarget;
        return !r || !i(t, r);
      }
      const Ve = {
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
        Ye = r.forwardRef(function (e, n) {
          const [t, o] = r.useState();
          ae(() => {
            d() && o("button");
          }, []);
          const u = {
            ref: n,
            tabIndex: 0,
            role: t,
            "aria-hidden": !t || void 0,
            [Me("focus-guard")]: "",
            style: Ve,
          };
          return (0, x.jsx)("span", { ...e, ...u });
        }),
        $e = r.createContext(null);
      const Xe = () => r.useContext($e),
        Ge = "data-floating-ui-focusable";
      function Qe(e) {
        return e
          ? e.hasAttribute(Ge)
            ? e
            : e.querySelector("[" + Ge + "]") || e
          : null;
      }
      function Je(e) {
        return r.useMemo(
          () => (n) => {
            e.forEach((e) => {
              e && (e.current = n);
            });
          },
          e,
        );
      }
      const Ze = 20;
      let en = [];
      function nn() {
        return en
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const tn = r.forwardRef(function (e, n) {
        return (0, x.jsx)("button", {
          ...e,
          type: "button",
          ref: n,
          tabIndex: -1,
          style: Ve,
        });
      });
      function rn(e) {
        const {
            context: n,
            children: t,
            disabled: o = !1,
            order: l = ["content"],
            guards: s = !0,
            initialFocus: d = 0,
            returnFocus: v = !0,
            restoreFocus: p = !1,
            modal: g = !0,
            visuallyHiddenDismiss: y = !1,
            closeOnFocusOut: b = !0,
            outsideElementsInert: R = !1,
          } = e,
          {
            open: k,
            onOpenChange: I,
            events: M,
            dataRef: S,
            elements: { domReference: C, floating: O },
          } = n,
          A = X(() => {
            var e;
            return null == (e = S.current.floatingContext) ? void 0 : e.nodeId;
          }),
          T = "number" == typeof d && d < 0,
          L = E(C) && T,
          N = Fe(),
          P = !N || s,
          D = !P || (N && R),
          q = Ce(l),
          F = Ce(d),
          K = Ce(v),
          j = Ie(),
          _ = Xe(),
          W = r.useRef(null),
          U = r.useRef(null),
          z = r.useRef(!1),
          V = r.useRef(!1),
          Y = r.useRef(-1),
          $ = null != _,
          G = Qe(O),
          Q = X(function (e) {
            return void 0 === e && (e = G), e ? B(e, We()) : [];
          }),
          J = X((e) => {
            const n = Q(e);
            return q.current
              .map((e) =>
                C && "reference" === e ? C : G && "floating" === e ? G : n,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!g) return;
          function e(e) {
            if ("Tab" === e.key) {
              i(G, c(m(G))) && 0 === Q().length && !L && w(e);
              const n = J(),
                t = h(e);
              "reference" === q.current[0] &&
                t === C &&
                (w(e), e.shiftKey ? Ae(n[n.length - 1]) : Ae(n[1])),
                "floating" === q.current[1] &&
                  t === G &&
                  e.shiftKey &&
                  (w(e), Ae(n[0]));
            }
          }
          const n = m(G);
          return (
            n.addEventListener("keydown", e),
            () => {
              n.removeEventListener("keydown", e);
            }
          );
        }, [o, C, G, g, q, L, Q, J]),
          r.useEffect(() => {
            if (!o && O)
              return (
                O.addEventListener("focusin", e),
                () => {
                  O.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const n = h(e),
                t = Q().indexOf(n);
              -1 !== t && (Y.current = t);
            }
          }, [o, O, Q]),
          r.useEffect(() => {
            if (!o && b)
              return O && (0, u.sb)(C)
                ? (C.addEventListener("focusout", n),
                  C.addEventListener("pointerdown", e),
                  O.addEventListener("focusout", n),
                  () => {
                    C.removeEventListener("focusout", n),
                      C.removeEventListener("pointerdown", e),
                      O.removeEventListener("focusout", n);
                  })
                : void 0;
            function e() {
              (V.current = !0),
                setTimeout(() => {
                  V.current = !1;
                });
            }
            function n(e) {
              const n = e.relatedTarget;
              queueMicrotask(() => {
                const t = A(),
                  r = !(
                    i(C, n) ||
                    i(O, n) ||
                    i(n, O) ||
                    i(null == _ ? void 0 : _.portalNode, n) ||
                    (null != n && n.hasAttribute(Me("focus-guard"))) ||
                    (j &&
                      (Le(j.nodesRef.current, t).find((e) => {
                        var t, r;
                        return (
                          i(
                            null == (t = e.context)
                              ? void 0
                              : t.elements.floating,
                            n,
                          ) ||
                          i(
                            null == (r = e.context)
                              ? void 0
                              : r.elements.domReference,
                            n,
                          )
                        );
                      }) ||
                        Te(j.nodesRef.current, t).find((e) => {
                          var t, r, o;
                          return (
                            [
                              null == (t = e.context)
                                ? void 0
                                : t.elements.floating,
                              Qe(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.floating,
                              ),
                            ].includes(n) ||
                            (null == (o = e.context)
                              ? void 0
                              : o.elements.domReference) === n
                          );
                        })))
                  );
                if (p && r && c(m(G)) === m(G).body) {
                  (0, u.sb)(G) && G.focus();
                  const e = Y.current,
                    n = Q(),
                    t = n[e] || n[n.length - 1] || G;
                  (0, u.sb)(t) && t.focus();
                }
                (!L && g) ||
                  !n ||
                  !r ||
                  V.current ||
                  n === nn() ||
                  ((z.current = !0), I(!1, e, "focus-out"));
              });
            }
          }, [o, C, O, G, g, j, _, I, b, p, Q, L, A]);
        const Z = r.useRef(null),
          ee = r.useRef(null),
          ne = Je([Z, null == _ ? void 0 : _.beforeInsideRef]),
          te = Je([ee, null == _ ? void 0 : _.afterInsideRef]);
        function re(e) {
          return !o && y && g
            ? (0, x.jsx)(tn, {
                ref: "start" === e ? W : U,
                onClick: (e) => I(!1, e.nativeEvent),
                children: "string" == typeof y ? y : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!O) return;
          const n = Array.from(
              (null == _ || null == (e = _.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Me("portal") + "]")) || [],
            ),
            t =
              j && !g
                ? Te(null == j ? void 0 : j.nodesRef.current, A()).map((e) => {
                    var n;
                    return null == (n = e.context)
                      ? void 0
                      : n.elements.floating;
                  })
                : [],
            r = [
              O,
              ...n,
              ...t,
              W.current,
              U.current,
              Z.current,
              ee.current,
              null == _ ? void 0 : _.beforeOutsideRef.current,
              null == _ ? void 0 : _.afterOutsideRef.current,
              q.current.includes("reference") || L ? C : null,
            ].filter((e) => null != e),
            u = g || L ? _e(r, !D, D) : _e(r);
          return () => {
            u();
          };
        }, [o, C, O, g, q, _, L, P, D, j, A]),
          ae(() => {
            if (o || !(0, u.sb)(G)) return;
            const e = c(m(G));
            queueMicrotask(() => {
              const n = J(G),
                t = F.current,
                r = ("number" == typeof t ? n[t] : t.current) || G,
                o = i(G, e);
              T || o || !k || Ae(r, { preventScroll: r === G });
            });
          }, [o, k, G, T, J, F]),
          ae(() => {
            if (o || !G) return;
            let e = !1,
              n = !1;
            const t = m(G),
              r = c(t);
            let l = S.current.openEvent;
            var s;
            function d(t) {
              let { open: r, reason: o, event: u, nested: c } = t;
              if (
                (r && (l = u),
                "escape-key" === o && (n = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === u.type &&
                  (z.current = !0),
                "outside-press" === o)
              )
                if (c) (z.current = !1), (e = !0);
                else if (a(u) || f(u)) z.current = !1;
                else {
                  let n = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (n = !0), !1;
                    },
                  }),
                    n ? ((z.current = !1), (e = !0)) : (z.current = !0);
                }
            }
            (s = r),
              (en = en.filter((e) => e.isConnected)),
              s &&
                "body" !== (0, u.mq)(s) &&
                (en.push(s), en.length > Ze && (en = en.slice(-Ze))),
              M.on("openchange", d);
            const v = t.createElement("span");
            return (
              v.setAttribute("tabindex", "-1"),
              v.setAttribute("aria-hidden", "true"),
              Object.assign(v.style, Ve),
              $ && C && C.insertAdjacentElement("afterend", v),
              () => {
                M.off("openchange", d);
                const r = c(t),
                  o =
                    i(O, r) ||
                    (j &&
                      Le(j.nodesRef.current, A()).some((e) => {
                        var n;
                        return i(
                          null == (n = e.context)
                            ? void 0
                            : n.elements.floating,
                          r,
                        );
                      }));
                (o || (l && ["click", "mousedown"].includes(l.type))) &&
                  (n = !0);
                const s =
                  "boolean" == typeof K.current
                    ? n && C
                      ? C
                      : nn() || v
                    : K.current.current || v;
                queueMicrotask(() => {
                  const n = (function (e) {
                    const n = We();
                    return H(e, n) ? e : B(e, n)[0] || e;
                  })(s);
                  K.current &&
                    !z.current &&
                    (0, u.sb)(n) &&
                    (n === r || r === t.body || o) &&
                    n.focus({ preventScroll: e }),
                    v.remove();
                });
              }
            );
          }, [o, O, G, K, S, M, j, $, C, A]),
          r.useEffect(() => {
            queueMicrotask(() => {
              z.current = !1;
            });
          }, [o]),
          ae(() => {
            if (!o && _)
              return (
                _.setFocusManagerState({
                  modal: g,
                  closeOnFocusOut: b,
                  open: k,
                  onOpenChange: I,
                  domReference: C,
                }),
                () => {
                  _.setFocusManagerState(null);
                }
              );
          }, [o, _, g, k, I, b, C]),
          ae(() => {
            if (o) return;
            if (!G) return;
            if ("function" != typeof MutationObserver) return;
            if (T) return;
            const e = () => {
              const e = G.getAttribute("tabindex"),
                n = Q(),
                t = c(m(O)),
                r = n.indexOf(t);
              -1 !== r && (Y.current = r),
                q.current.includes("floating") || (t !== C && 0 === n.length)
                  ? "0" !== e && G.setAttribute("tabindex", "0")
                  : "-1" !== e && G.setAttribute("tabindex", "-1");
            };
            e();
            const n = new MutationObserver(e);
            return (
              n.observe(G, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                n.disconnect();
              }
            );
          }, [o, O, G, C, q, Q, T]);
        const oe = !o && P && (!g || !L) && ($ || g);
        return (0, x.jsxs)(x.Fragment, {
          children: [
            oe &&
              (0, x.jsx)(Ye, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (g) {
                    const e = J();
                    Ae("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != _ && _.preserveTabOrder && _.portalNode)
                    if (((z.current = !1), ze(e, _.portalNode))) {
                      const e = Be() || C;
                      null == e || e.focus();
                    } else {
                      var n;
                      null == (n = _.beforeOutsideRef.current) || n.focus();
                    }
                },
              }),
            !L && re("start"),
            t,
            re("end"),
            oe &&
              (0, x.jsx)(Ye, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (g) Ae(J()[0]);
                  else if (null != _ && _.preserveTabOrder && _.portalNode)
                    if ((b && (z.current = !0), ze(e, _.portalNode))) {
                      const e = He() || C;
                      null == e || e.focus();
                    } else {
                      var n;
                      null == (n = _.afterOutsideRef.current) || n.focus();
                    }
                },
              }),
          ],
        });
      }
      function on(e) {
        return (0, u.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function un(e) {
        return b(e);
      }
      function cn(e, n) {
        void 0 === n && (n = {});
        const {
            open: t,
            onOpenChange: o,
            dataRef: u,
            elements: { domReference: c },
          } = e,
          {
            enabled: i = !0,
            event: l = "click",
            toggle: s = !0,
            ignoreMouse: a = !1,
            keyboardHandlers: f = !0,
            stickIfOpen: d = !0,
          } = n,
          v = r.useRef(),
          m = r.useRef(!1),
          g = r.useMemo(
            () => ({
              onPointerDown(e) {
                v.current = e.pointerType;
              },
              onMouseDown(e) {
                const n = v.current;
                0 === e.button &&
                  "click" !== l &&
                  ((p(n, !0) && a) ||
                    (!t ||
                    !s ||
                    (u.current.openEvent &&
                      d &&
                      "mousedown" !== u.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const n = v.current;
                "mousedown" === l && v.current
                  ? (v.current = void 0)
                  : (p(n, !0) && a) ||
                    (!t ||
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
                    on(e) ||
                    (" " !== e.key ||
                      un(c) ||
                      (e.preventDefault(), (m.current = !0)),
                    "Enter" === e.key && o(!t || !s, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  on(e) ||
                  un(c) ||
                  (" " === e.key &&
                    m.current &&
                    ((m.current = !1), o(!t || !s, e.nativeEvent, "click")));
              },
            }),
            [u, c, l, a, f, o, t, d, s],
          );
        return r.useMemo(() => (i ? { reference: g } : {}), [i, g]);
      }
      const ln = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        sn = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        an = (e) => {
          var n, t;
          return {
            escapeKey:
              "boolean" == typeof e
                ? e
                : null != (n = null == e ? void 0 : e.escapeKey) && n,
            outsidePress:
              "boolean" == typeof e
                ? e
                : null == (t = null == e ? void 0 : e.outsidePress) || t,
          };
        };
      function fn(e, n) {
        void 0 === n && (n = {});
        const { open: t, onOpenChange: o, elements: c, dataRef: l } = e,
          {
            enabled: s = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: v = !1,
            referencePressEvent: p = "pointerdown",
            ancestorScroll: y = !1,
            bubbles: b,
            capture: w,
          } = n,
          E = Ie(),
          R = X("function" == typeof f ? f : () => !1),
          x = "function" == typeof f ? R : f,
          k = r.useRef(!1),
          I = r.useRef(!1),
          { escapeKey: M, outsidePress: S } = an(b),
          { escapeKey: C, outsidePress: O } = an(w),
          A = r.useRef(!1),
          T = X((e) => {
            var n;
            if (!t || !s || !a || "Escape" !== e.key) return;
            if (A.current) return;
            const r =
                null == (n = l.current.floatingContext) ? void 0 : n.nodeId,
              u = E ? Le(E.nodesRef.current, r) : [];
            if (!M && (e.stopPropagation(), u.length > 0)) {
              let e = !0;
              if (
                (u.forEach((n) => {
                  var t;
                  null == (t = n.context) ||
                    !t.open ||
                    n.context.dataRef.current.__escapeKeyBubbles ||
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
          L = X((e) => {
            var n;
            const t = () => {
              var n;
              T(e), null == (n = h(e)) || n.removeEventListener("keydown", t);
            };
            null == (n = h(e)) || n.addEventListener("keydown", t);
          }),
          N = X((e) => {
            var n;
            const t = k.current;
            k.current = !1;
            const r = I.current;
            if (((I.current = !1), "click" === d && r)) return;
            if (t) return;
            if ("function" == typeof x && !x(e)) return;
            const s = h(e),
              a = "[" + Me("inert") + "]",
              f = m(c.floating).querySelectorAll(a);
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
              !i(s, c.floating) &&
              Array.from(f).every((e) => !i(v, e))
            )
              return;
            if ((0, u.sb)(s) && q) {
              const n = (0, u.eu)(s),
                t = (0, u.L9)(s),
                r = /auto|scroll/,
                o = n || r.test(t.overflowX),
                c = n || r.test(t.overflowY),
                i = o && s.clientWidth > 0 && s.scrollWidth > s.clientWidth,
                l = c && s.clientHeight > 0 && s.scrollHeight > s.clientHeight,
                a = "rtl" === t.direction,
                f =
                  l &&
                  (a
                    ? e.offsetX <= s.offsetWidth - s.clientWidth
                    : e.offsetX > s.clientWidth),
                d = i && e.offsetY > s.clientHeight;
              if (f || d) return;
            }
            const p =
                null == (n = l.current.floatingContext) ? void 0 : n.nodeId,
              y =
                E &&
                Le(E.nodesRef.current, p).some((n) => {
                  var t;
                  return g(
                    e,
                    null == (t = n.context) ? void 0 : t.elements.floating,
                  );
                });
            if (g(e, c.floating) || g(e, c.domReference) || y) return;
            const b = E ? Le(E.nodesRef.current, p) : [];
            if (b.length > 0) {
              let e = !0;
              if (
                (b.forEach((n) => {
                  var t;
                  null == (t = n.context) ||
                    !t.open ||
                    n.context.dataRef.current.__outsidePressBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(!1, e, "outside-press");
          }),
          P = X((e) => {
            var n;
            const t = () => {
              var n;
              N(e), null == (n = h(e)) || n.removeEventListener(d, t);
            };
            null == (n = h(e)) || n.addEventListener(d, t);
          });
        r.useEffect(() => {
          if (!t || !s) return;
          (l.current.__escapeKeyBubbles = M),
            (l.current.__outsidePressBubbles = S);
          let e = -1;
          function n(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (A.current = !0);
          }
          function i() {
            e = window.setTimeout(
              () => {
                A.current = !1;
              },
              (0, u.Tc)() ? 5 : 0,
            );
          }
          const f = m(c.floating);
          a &&
            (f.addEventListener("keydown", C ? L : T, C),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", i)),
            x && f.addEventListener(d, O ? P : N, O);
          let v = [];
          return (
            y &&
              ((0, u.vq)(c.domReference) && (v = (0, u.v9)(c.domReference)),
              (0, u.vq)(c.floating) && (v = v.concat((0, u.v9)(c.floating))),
              !(0, u.vq)(c.reference) &&
                c.reference &&
                c.reference.contextElement &&
                (v = v.concat((0, u.v9)(c.reference.contextElement)))),
            (v = v.filter((e) => {
              var n;
              return (
                e !== (null == (n = f.defaultView) ? void 0 : n.visualViewport)
              );
            })),
            v.forEach((e) => {
              e.addEventListener("scroll", n, { passive: !0 });
            }),
            () => {
              a &&
                (f.removeEventListener("keydown", C ? L : T, C),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", i)),
                x && f.removeEventListener(d, O ? P : N, O),
                v.forEach((e) => {
                  e.removeEventListener("scroll", n);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, c, a, x, d, t, o, y, s, M, S, T, C, L, N, O, P]),
          r.useEffect(() => {
            k.current = !1;
          }, [x, d]);
        const D = r.useMemo(
            () => ({
              onKeyDown: T,
              ...(v && {
                [ln[p]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== p && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [T, o, v, p],
          ),
          q = r.useMemo(
            () => ({
              onKeyDown: T,
              onMouseDown() {
                I.current = !0;
              },
              onMouseUp() {
                I.current = !0;
              },
              [sn[d]]: () => {
                k.current = !0;
              },
            }),
            [T, d],
          );
        return r.useMemo(
          () => (s ? { reference: D, floating: q } : {}),
          [s, D, q],
        );
      }
      function dn(e) {
        void 0 === e && (e = {});
        const { nodeId: n } = e,
          t = (function (e) {
            const { open: n = !1, onOpenChange: t, elements: o } = e,
              u = we(),
              c = r.useRef({}),
              [i] = r.useState(() => Ee()),
              l = null != ke(),
              [s, a] = r.useState(o.reference),
              f = X((e, n, r) => {
                (c.current.openEvent = e ? n : void 0),
                  i.emit("openchange", {
                    open: e,
                    event: n,
                    reason: r,
                    nested: l,
                  }),
                  null == t || t(e, n, r);
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
                dataRef: c,
                open: n,
                onOpenChange: f,
                elements: v,
                events: i,
                floatingId: u,
                refs: d,
              }),
              [n, f, v, i, u, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || t,
          c = o.elements,
          [i, l] = r.useState(null),
          [s, a] = r.useState(null),
          f = (null == c ? void 0 : c.domReference) || i,
          d = r.useRef(null),
          v = Ie();
        ae(() => {
          f && (d.current = f);
        }, [f]);
        const p = (0, z.we)({
            ...e,
            elements: { ...c, ...(s && { reference: s }) },
          }),
          m = r.useCallback(
            (e) => {
              const n = (0, u.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(n), p.refs.setReference(n);
            },
            [p.refs],
          ),
          g = r.useCallback(
            (e) => {
              ((0, u.vq)(e) || null === e) && ((d.current = e), l(e)),
                ((0, u.vq)(p.refs.reference.current) ||
                  null === p.refs.reference.current ||
                  (null !== e && !(0, u.vq)(e))) &&
                  p.refs.setReference(e);
            },
            [p.refs],
          ),
          h = r.useMemo(
            () => ({
              ...p.refs,
              setReference: g,
              setPositionReference: m,
              domReference: d,
            }),
            [p.refs, g, m],
          ),
          y = r.useMemo(
            () => ({ ...p.elements, domReference: f }),
            [p.elements, f],
          ),
          b = r.useMemo(
            () => ({ ...p, ...o, refs: h, elements: y, nodeId: n }),
            [p, h, y, n, o],
          );
        return (
          ae(() => {
            o.dataRef.current.floatingContext = b;
            const e =
              null == v ? void 0 : v.nodesRef.current.find((e) => e.id === n);
            e && (e.context = b);
          }),
          r.useMemo(
            () => ({ ...p, context: b, refs: h, elements: y }),
            [p, h, y, b],
          )
        );
      }
      function vn(e, n) {
        void 0 === n && (n = {});
        const {
            open: t,
            onOpenChange: o,
            events: s,
            dataRef: a,
            elements: v,
          } = e,
          { enabled: p = !0, visibleOnly: g = !0 } = n,
          y = r.useRef(!1),
          w = r.useRef(-1),
          E = r.useRef(!0);
        r.useEffect(() => {
          if (!p) return;
          const e = (0, u.zk)(v.domReference);
          function n() {
            !t &&
              (0, u.sb)(v.domReference) &&
              v.domReference === c(m(v.domReference)) &&
              (y.current = !0);
          }
          function r() {
            E.current = !0;
          }
          return (
            e.addEventListener("blur", n),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", n),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [v.domReference, t, p]),
          r.useEffect(() => {
            if (p)
              return (
                s.on("openchange", e),
                () => {
                  s.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: n } = e;
              ("reference-press" !== n && "escape-key" !== n) ||
                (y.current = !0);
            }
          }, [s, p]),
          r.useEffect(
            () => () => {
              Se(w);
            },
            [],
          );
        const R = r.useMemo(
          () => ({
            onPointerDown(e) {
              f(e.nativeEvent) || (E.current = !1);
            },
            onMouseLeave() {
              y.current = !1;
            },
            onFocus(e) {
              if (y.current) return;
              const n = h(e.nativeEvent);
              if (g && (0, u.vq)(n))
                try {
                  if (
                    d() &&
                    l().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!n.matches(":focus-visible")) return;
                } catch (e) {
                  if (!E.current && !b(n)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              y.current = !1;
              const n = e.relatedTarget,
                t = e.nativeEvent,
                r =
                  (0, u.vq)(n) &&
                  n.hasAttribute(Me("focus-guard")) &&
                  "outside" === n.getAttribute("data-type");
              w.current = window.setTimeout(() => {
                var e;
                const u = c(
                  v.domReference ? v.domReference.ownerDocument : document,
                );
                (n || u !== v.domReference) &&
                  (i(
                    null == (e = a.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    u,
                  ) ||
                    i(v.domReference, u) ||
                    r ||
                    o(!1, t, "focus"));
              });
            },
          }),
          [a, v.domReference, o, g],
        );
        return r.useMemo(() => (p ? { reference: R } : {}), [p, R]);
      }
      const pn = "active",
        mn = "selected";
      function gn(e, n, t) {
        const r = new Map(),
          o = "item" === t;
        let u = e;
        if (o && e) {
          const { [pn]: n, [mn]: t, ...r } = e;
          u = r;
        }
        return {
          ...("floating" === t && { tabIndex: -1, [Ge]: "" }),
          ...u,
          ...n
            .map((n) => {
              const r = n ? n[t] : null;
              return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, n) =>
                n
                  ? (Object.entries(n).forEach((n) => {
                      let [t, u] = n;
                      var c;
                      (o && [pn, mn].includes(t)) ||
                        (0 === t.indexOf("on")
                          ? (r.has(t) || r.set(t, []),
                            "function" == typeof u &&
                              (null == (c = r.get(t)) || c.push(u),
                              (e[t] = function () {
                                for (
                                  var e,
                                    n = arguments.length,
                                    o = new Array(n),
                                    u = 0;
                                  u < n;
                                  u++
                                )
                                  o[u] = arguments[u];
                                return null == (e = r.get(t))
                                  ? void 0
                                  : e
                                      .map((e) => e(...o))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[t] = u));
                    }),
                    e)
                  : e,
              {},
            ),
        };
      }
      function hn(e) {
        void 0 === e && (e = []);
        const n = e.map((e) => (null == e ? void 0 : e.reference)),
          t = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          u = r.useCallback((n) => gn(n, e, "reference"), n),
          c = r.useCallback((n) => gn(n, e, "floating"), t),
          i = r.useCallback((n) => gn(n, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: u,
            getFloatingProps: c,
            getItemProps: i,
          }),
          [u, c, i],
        );
      }
      const yn = "Escape";
      function bn(e, n, t) {
        switch (e) {
          case "vertical":
            return n;
          case "horizontal":
            return t;
          default:
            return n || t;
        }
      }
      function wn(e, n) {
        return bn(n, e === G || e === Q, e === J || e === Z);
      }
      function En(e, n, t) {
        return (
          bn(n, e === Q, t ? e === J : e === Z) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function Rn(e, n, t) {
        return bn(n, t ? e === J : e === Z, e === Q);
      }
      function xn(e, n, t, r) {
        return "both" === n || ("horizontal" === n && r && r > 1)
          ? e === yn
          : bn(n, t ? e === Z : e === J, e === G);
      }
      function kn(e, n) {
        const { open: t, onOpenChange: o, elements: l } = e,
          {
            listRef: s,
            activeIndex: d,
            onNavigate: v = () => {},
            enabled: p = !0,
            selectedIndex: g = null,
            allowEscape: h = !1,
            loop: y = !1,
            nested: b = !1,
            rtl: R = !1,
            virtual: x = !1,
            focusItemOnOpen: k = "auto",
            focusItemOnHover: I = !0,
            openOnArrowKeyDown: M = !0,
            disabledIndices: S,
            orientation: C = "vertical",
            cols: O = 1,
            scrollItemIntoView: A = !0,
            virtualItemRef: T,
            itemSizes: L,
            dense: N = !1,
          } = n;
        const P = Ce(Qe(l.floating)),
          D = ke(),
          q = Ie();
        ae(() => {
          e.dataRef.current.orientation = C;
        }, [e, C]);
        const F = X(() => {
            v(-1 === _.current ? null : _.current);
          }),
          K = E(l.domReference),
          j = r.useRef(k),
          _ = r.useRef(null != g ? g : -1),
          W = r.useRef(null),
          U = r.useRef(!0),
          B = r.useRef(F),
          H = r.useRef(!!l.floating),
          z = r.useRef(t),
          V = r.useRef(!1),
          Y = r.useRef(!1),
          $ = Ce(S),
          G = Ce(t),
          ee = Ce(A),
          fe = Ce(g),
          [de, ve] = r.useState(),
          [pe, me] = r.useState(),
          ge = X(() => {
            function e(e) {
              x
                ? (ve(e.id),
                  null == q || q.events.emit("virtualfocus", e),
                  T && (T.current = e))
                : Ae(e, { sync: V.current, preventScroll: !0 });
            }
            const n = s.current[_.current];
            n && e(n);
            (V.current ? (e) => e() : requestAnimationFrame)(() => {
              const t = s.current[_.current] || n;
              if (!t) return;
              n || e(t);
              const r = ee.current;
              r &&
                ye &&
                (Y.current || !U.current) &&
                (null == t.scrollIntoView ||
                  t.scrollIntoView(
                    "boolean" == typeof r
                      ? { block: "nearest", inline: "nearest" }
                      : r,
                  ));
            });
          });
        ae(() => {
          p &&
            (t && l.floating
              ? j.current &&
                null != g &&
                ((Y.current = !0), (_.current = g), F())
              : H.current && ((_.current = -1), B.current()));
        }, [p, t, l.floating, g, F]),
          ae(() => {
            if (p && t && l.floating)
              if (null == d) {
                if (((V.current = !1), null != fe.current)) return;
                if (
                  (H.current && ((_.current = -1), ge()),
                  (!z.current || !H.current) &&
                    j.current &&
                    (null != W.current ||
                      (!0 === j.current && null == W.current)))
                ) {
                  let e = 0;
                  const n = () => {
                    if (null == s.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(n);
                      }
                      e++;
                    } else
                      (_.current =
                        null == W.current || En(W.current, C, R) || b
                          ? te(s, $.current)
                          : re(s, $.current)),
                        (W.current = null),
                        F();
                  };
                  n();
                }
              } else ne(s, d) || ((_.current = d), ge(), (Y.current = !1));
          }, [p, t, l.floating, d, fe, b, s, C, R, F, ge, $]),
          ae(() => {
            var e;
            if (!p || l.floating || !q || x || !H.current) return;
            const n = q.nodesRef.current,
              t =
                null == (e = n.find((e) => e.id === D)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = c(m(l.floating)),
              o = n.some((e) => e.context && i(e.context.elements.floating, r));
            t && !o && U.current && t.focus({ preventScroll: !0 });
          }, [p, l.floating, q, D, x]),
          ae(() => {
            if (p && q && x && !D)
              return (
                q.events.on("virtualfocus", e),
                () => {
                  q.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              me(e.id), T && (T.current = e);
            }
          }, [p, q, x, D, T]),
          ae(() => {
            (B.current = F), (z.current = t), (H.current = !!l.floating);
          }),
          ae(() => {
            t || (W.current = null);
          }, [t]);
        const he = null != d,
          ye = r.useMemo(() => {
            function e(e) {
              if (!t) return;
              const n = s.current.indexOf(e);
              -1 !== n && _.current !== n && ((_.current = n), F());
            }
            return {
              onFocus(n) {
                let { currentTarget: t } = n;
                (V.current = !0), e(t);
              },
              onClick: (e) => {
                let { currentTarget: n } = e;
                return n.focus({ preventScroll: !0 });
              },
              ...(I && {
                onMouseMove(n) {
                  let { currentTarget: t } = n;
                  (V.current = !0), (Y.current = !1), e(t);
                },
                onPointerLeave(e) {
                  let { pointerType: n } = e;
                  var t;
                  U.current &&
                    "touch" !== n &&
                    ((V.current = !0),
                    (_.current = -1),
                    F(),
                    x ||
                      null == (t = P.current) ||
                      t.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [t, P, I, s, F, x]),
          be = X((e) => {
            if (((U.current = !1), (V.current = !0), 229 === e.which)) return;
            if (!G.current && e.currentTarget === P.current) return;
            if (b && xn(e.key, C, R, O))
              return (
                w(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, u.sb)(l.domReference) &&
                  (x
                    ? null == q || q.events.emit("virtualfocus", l.domReference)
                    : l.domReference.focus())
                )
              );
            const n = _.current,
              r = te(s, S),
              i = re(s, S);
            if (
              (K ||
                ("Home" === e.key && (w(e), (_.current = r), F()),
                "End" === e.key && (w(e), (_.current = i), F())),
              O > 1)
            ) {
              const n =
                  L ||
                  Array.from({ length: s.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                t = ce(n, O, N),
                o = t.findIndex((e) => null != e && !se(s.current, e, S)),
                u = t.reduce(
                  (e, n, t) => (null == n || se(s.current, n, S) ? e : t),
                  -1,
                ),
                c =
                  t[
                    ue(
                      {
                        current: t.map((e) =>
                          null != e ? s.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: C,
                        loop: y,
                        rtl: R,
                        cols: O,
                        disabledIndices: le(
                          [
                            ...(S ||
                              s.current.map((e, n) =>
                                se(s.current, n) ? n : void 0,
                              )),
                            void 0,
                          ],
                          t,
                        ),
                        minIndex: o,
                        maxIndex: u,
                        prevIndex: ie(
                          _.current > i ? r : _.current,
                          n,
                          t,
                          O,
                          e.key === Q
                            ? "bl"
                            : e.key === (R ? J : Z)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != c && ((_.current = c), F()), "both" === C)) return;
            }
            if (wn(e.key, C)) {
              if (
                (w(e),
                t && !x && c(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (_.current = En(e.key, C, R) ? r : i), void F();
              En(e.key, C, R)
                ? (_.current = y
                    ? n >= i
                      ? h && n !== s.current.length
                        ? -1
                        : r
                      : oe(s, { startingIndex: n, disabledIndices: S })
                    : Math.min(
                        i,
                        oe(s, { startingIndex: n, disabledIndices: S }),
                      ))
                : (_.current = y
                    ? n <= r
                      ? h && -1 !== n
                        ? s.current.length
                        : i
                      : oe(s, {
                          startingIndex: n,
                          decrement: !0,
                          disabledIndices: S,
                        })
                    : Math.max(
                        r,
                        oe(s, {
                          startingIndex: n,
                          decrement: !0,
                          disabledIndices: S,
                        }),
                      )),
                ne(s, _.current) && (_.current = -1),
                F();
            }
          }),
          we = r.useMemo(
            () => x && t && he && { "aria-activedescendant": pe || de },
            [x, t, he, pe, de],
          ),
          Ee = r.useMemo(
            () => ({
              "aria-orientation": "both" === C ? void 0 : C,
              ...(K ? {} : we),
              onKeyDown: be,
              onPointerMove() {
                U.current = !0;
              },
            }),
            [we, be, C, K],
          ),
          Re = r.useMemo(() => {
            function e(e) {
              "auto" === k && a(e.nativeEvent) && (j.current = !0);
            }
            function n(e) {
              (j.current = k),
                "auto" === k && f(e.nativeEvent) && (j.current = !0);
            }
            return {
              ...we,
              onKeyDown(e) {
                var n;
                U.current = !1;
                const r = e.key.startsWith("Arrow"),
                  u = ["Home", "End"].includes(e.key),
                  c = r || u,
                  i =
                    null == q ||
                    null == (n = q.nodesRef.current.find((e) => e.id === D)) ||
                    null == (n = n.context) ||
                    null == (n = n.dataRef)
                      ? void 0
                      : n.current.orientation,
                  l = Rn(e.key, C, R),
                  a = xn(e.key, C, R, O),
                  f = Rn(e.key, i, R),
                  d = wn(e.key, C),
                  v = (b ? f : d) || "Enter" === e.key || "" === e.key.trim();
                if (x && t) {
                  const n =
                      null == q
                        ? void 0
                        : q.nodesRef.current.find((e) => null == e.parentId),
                    t =
                      q && n
                        ? (function (e, n) {
                            let t,
                              r = -1;
                            return (
                              (function n(o, u) {
                                u > r && ((t = o), (r = u)),
                                  Le(e, o).forEach((e) => {
                                    n(e.id, u + 1);
                                  });
                              })(n, 0),
                              e.find((e) => e.id === t)
                            );
                          })(q.nodesRef.current, n.id)
                        : null;
                  if (c && t && T) {
                    const n = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (l || a) {
                      var p, m;
                      const r =
                          (null == (p = t.context)
                            ? void 0
                            : p.elements.domReference) === e.currentTarget,
                        o =
                          a && !r
                            ? null == (m = t.context)
                              ? void 0
                              : m.elements.domReference
                            : l
                              ? s.current.find(
                                  (e) => (null == e ? void 0 : e.id) === de,
                                )
                              : null;
                      o && (w(e), o.dispatchEvent(n), me(void 0));
                    }
                    var h;
                    if ((d || u) && t.context)
                      if (
                        t.context.open &&
                        t.parentId &&
                        e.currentTarget !== t.context.elements.domReference
                      )
                        return (
                          w(e),
                          void (
                            null == (h = t.context.elements.domReference) ||
                            h.dispatchEvent(n)
                          )
                        );
                  }
                  return be(e);
                }
                if (t || M || !r) {
                  if (v) {
                    const n = wn(e.key, i);
                    W.current = b && n ? null : e.key;
                  }
                  b
                    ? f &&
                      (w(e),
                      t
                        ? ((_.current = te(s, $.current)), F())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : d &&
                      (null != g && (_.current = g),
                      w(e),
                      !t && M ? o(!0, e.nativeEvent, "list-navigation") : be(e),
                      t && F());
                }
              },
              onFocus() {
                t && !x && ((_.current = -1), F());
              },
              onPointerDown: n,
              onPointerEnter: n,
              onMouseDown: e,
              onClick: e,
            };
          }, [de, we, O, be, $, k, s, b, F, o, t, M, C, D, R, g, q, x, T]);
        return r.useMemo(
          () => (p ? { reference: Re, floating: Ee, item: ye } : {}),
          [p, Re, Ee, ye],
        );
      }
      const In = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function Mn(e, n) {
        var t;
        void 0 === n && (n = {});
        const { open: o, floatingId: u } = e,
          { enabled: c = !0, role: i = "dialog" } = n,
          l = null != (t = In.get(i)) ? t : i,
          s = we(),
          a = null != ke(),
          f = r.useMemo(
            () =>
              "tooltip" === l || "label" === i
                ? {
                    ["aria-" + ("label" === i ? "labelledby" : "describedby")]:
                      o ? u : void 0,
                  }
                : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                    "aria-controls": o ? u : void 0,
                    ...("listbox" === l && { role: "combobox" }),
                    ...("menu" === l && { id: s }),
                    ...("menu" === l && a && { role: "menuitem" }),
                    ...("select" === i && { "aria-autocomplete": "none" }),
                    ...("combobox" === i && { "aria-autocomplete": "list" }),
                  },
            [l, u, a, o, s, i],
          ),
          d = r.useMemo(() => {
            const e = { id: u, ...(l && { role: l }) };
            return "tooltip" === l || "label" === i
              ? e
              : { ...e, ...("menu" === l && { "aria-labelledby": s }) };
          }, [l, u, s, i]),
          v = r.useCallback(
            (e) => {
              let { active: n, selected: t } = e;
              const r = { role: "option", ...(n && { id: u + "-option" }) };
              switch (i) {
                case "select":
                  return { ...r, "aria-selected": n && t };
                case "combobox":
                  return { ...r, ...(n && { "aria-selected": !0 }) };
              }
              return {};
            },
            [u, i],
          );
        return r.useMemo(
          () => (c ? { reference: f, floating: d, item: v } : {}),
          [c, f, d, v],
        );
      }
      function Sn(e, n) {
        var t;
        const { open: o, dataRef: u } = e,
          {
            listRef: c,
            activeIndex: i,
            onMatch: l,
            onTypingChange: s,
            enabled: a = !0,
            findMatch: f = null,
            resetMs: d = 750,
            ignoreKeys: v = [],
            selectedIndex: p = null,
          } = n,
          m = r.useRef(-1),
          g = r.useRef(""),
          h = r.useRef(null != (t = null != p ? p : i) ? t : -1),
          y = r.useRef(null),
          b = X(l),
          E = X(s),
          R = Ce(f),
          x = Ce(v);
        ae(() => {
          o && (Se(m), (y.current = null), (g.current = ""));
        }, [o]),
          ae(() => {
            var e;
            o &&
              "" === g.current &&
              (h.current = null != (e = null != p ? p : i) ? e : -1);
          }, [o, p, i]);
        const k = X((e) => {
            e
              ? u.current.typing || ((u.current.typing = e), E(e))
              : u.current.typing && ((u.current.typing = e), E(e));
          }),
          I = X((e) => {
            function n(e, n, t) {
              const r = R.current
                ? R.current(n, t)
                : n.find(
                    (e) =>
                      0 ===
                      (null == e
                        ? void 0
                        : e.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())),
                  );
              return r ? e.indexOf(r) : -1;
            }
            const t = c.current;
            if (
              (g.current.length > 0 &&
                " " !== g.current[0] &&
                (-1 === n(t, t, g.current) ? k(!1) : " " === e.key && w(e)),
              null == t ||
                x.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (w(e), k(!0));
            t.every((e) => {
              var n, t;
              return (
                !e ||
                (null == (n = e[0]) ? void 0 : n.toLocaleLowerCase()) !==
                  (null == (t = e[1]) ? void 0 : t.toLocaleLowerCase())
              );
            }) &&
              g.current === e.key &&
              ((g.current = ""), (h.current = y.current)),
              (g.current += e.key),
              Se(m),
              (m.current = window.setTimeout(() => {
                (g.current = ""), (h.current = y.current), k(!1);
              }, d));
            const r = h.current,
              u = n(
                t,
                [...t.slice((r || 0) + 1), ...t.slice(0, (r || 0) + 1)],
                g.current,
              );
            -1 !== u
              ? (b(u), (y.current = u))
              : " " !== e.key && ((g.current = ""), k(!1));
          }),
          M = r.useMemo(() => ({ onKeyDown: I }), [I]),
          S = r.useMemo(
            () => ({
              onKeyDown: I,
              onKeyUp(e) {
                " " === e.key && k(!1);
              },
            }),
            [I, k],
          );
        return r.useMemo(
          () => (a ? { reference: M, floating: S } : {}),
          [a, M, S],
        );
      }
    },
  },
]);
