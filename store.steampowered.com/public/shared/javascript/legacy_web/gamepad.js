/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [616],
  {
    86: (e, t, n) => {
      n.d(t, { InitializeGamepadNavigation: () => V });
      var o = n(669),
        a = n.n(o),
        s = n(638),
        i = n(614),
        r = n(389),
        c = n(548),
        l = n(605),
        u = n(993),
        d = n(355),
        g = n(117),
        b = n(356),
        h = n(364);
      function m(e, t, ...n) {
        try {
          console.assert
            ? 0 == n.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...n)
            : e || console.warn(t, ...n);
        } catch (e) {}
      }
      var _ = n(382),
        f = n.n(_);
      function p(e) {
        let t = 0;
        e.children().each(function () {
          const e = a()(this),
            n = e.css("zIndex");
          "auto" === n
            ? e.css("zIndex", 0)
            : isNaN(parseInt(n)) || (t = Math.max(t, parseInt(n)));
        });
        const n = a()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${(t || 100) + 1}; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let o,
          s,
          i = 0,
          r = 0,
          c = 0,
          l = 0;
        e.prepend(n);
        const u = (e) => {
            const t = e.GetBoundingRect(),
              o = n[0].getBoundingClientRect();
            return {
              left: t.x - o.x - 0,
              top: t.y - o.y - 0,
              height: t.height,
              width: t.width,
            };
          },
          d = (e, t) => {
            (i = t.left),
              (r = t.top),
              (c = t.height),
              (l = t.width),
              e.css({ left: i, top: r, height: c, width: l });
          },
          g = (e) => {
            if ((o && (o(), (o = void 0)), e && e.BWantsFocusRing())) {
              let t = a()("<div/>", {
                  style: "position: absolute; pointer-events: none; ",
                  class: f().FocusRing,
                }),
                g = u(e);
              d(t, g),
                n.append(t),
                (s = () =>
                  ((e, t) => {
                    if (e && e.BWantsFocusRing()) {
                      let n = u(e);
                      (n.left == i &&
                        n.top == r &&
                        n.height == c &&
                        n.width == l) ||
                        d(t, n);
                    }
                  })(e, t));
              let b = window.setInterval(s, 200),
                h = e.Tree.OnActiveStateChangedCallbacks.Register((e) => {
                  e ? t.show() : t.hide();
                });
              o = () => {
                window.clearInterval(b),
                  t.remove(),
                  (s = void 0),
                  h.Unregister();
              };
            }
          };
        return {
          OnBlur: () => g(null),
          OnFocus: (e, t) => g(t),
          OnFocusChange: (e, t, n) => g(n),
          OnForceMeasureFocusRing: () => s && s(),
        };
      }
      var S = n(724),
        w = n(67),
        E = n(448);
      function I(e) {
        return e ? Function("event", e) : null;
      }
      function L() {
        return !0;
      }
      function v(e) {
        return "BlockMovement" == e
          ? L
          : "RepeatNavigationBoundary" == e
            ? E.W7
            : e
              ? Function("detail", e)
              : null;
      }
      function R(e) {
        this.click(), e.stopPropagation();
      }
      function N(e) {
        a()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function C(e, t) {
        t ? a()(e).addClass("gpfocus") : a()(e).removeClass("gpfocus");
      }
      function A(e) {
        const t = e.currentTarget;
        if (!w.kD(t)) return !1;
        const n = e.detail.is_repeat ? 4.5 : 3.33,
          o = "smooth",
          a = t.ownerDocument,
          s = a.defaultView;
        switch (e.detail.button) {
          case S.pR.DIR_UP:
            if (s.scrollY > 3)
              return (0, b.BA)(s, { top: -s.innerHeight / n, behavior: o }), !0;
            break;
          case S.pR.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < a.body.clientWidth - 3)
              return (0, b.BA)(s, { left: s.innerWidth / n, behavior: o }), !0;
            break;
          case S.pR.DIR_DOWN:
            if (s.scrollY + s.innerHeight < a.body.clientHeight - 3)
              return (0, b.BA)(s, { top: s.innerHeight / n, behavior: o }), !0;
            break;
          case S.pR.DIR_LEFT:
            if (s.scrollX > 3)
              return (0, b.BA)(s, { left: s.innerWidth / n, behavior: o }), !0;
        }
        return !1;
      }
      var D = n(411);
      const T = !1;
      function y(e) {
        const { name: t, root: n, navState: o } = e;
        o
          ? (T && console.log(`Restore ${t} history snapshot ${(0, D.Ij)(o)}`),
            (0, D.LU)(n, o),
            n.Tree.DeferredFocus.Reset())
          : (T && console.log(`No focus state in history for ${t}`),
            n.Tree.DeferredFocus.ExecuteQueuedFocus());
      }
      function k(e, t) {
        const n = window.history.state;
        return { name: e, root: t, navState: n?.[e] };
      }
      var O;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(O || (O = {}));
      const M = new h.r();
      let U,
        B = !1,
        P = null,
        G = null,
        F = null;
      function V(e) {
        B ||
          ((P = new l.t()),
          (window.legacyWebFocusNavController = P),
          (U = new i.T(P)),
          U.RegisterForFocusChanged(P.GetDefaultContext()),
          M.Init(window),
          U.BIsGamepadInputExternallyControlled() || P.RegisterInputSource(e),
          (U.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            P.RegisterInputSource(new r.Q(window)),
          (function (e) {
            a()("html").addClass("gpnav_active");
            const t = a()("body"),
              n = e.GetDefaultContext(),
              o = e.NewGamepadNavigationTree(n, "legacy", void 0);
            a()(window).on("touchstart mousedown focus", () =>
              n.OnActivate(window),
            ),
              a()(window).on("blur", () => n.OnDeactivate(window));
            const i = p(t);
            (o.Root.m_FocusRing = i),
              o.Root.SetProperties({
                scrollIntoViewType: d.Yo.NoTransformSparseContent,
              }),
              o.SetIsEnabled(!0),
              o.OnActiveStateChangedCallbacks.Register((e) => {
                const t = o.GetLastFocusedNode();
                t?.Element && C(t.Element, e);
              }),
              (window.__nav_tree_root = o),
              (window.__virtual_keyboard_client = M),
              x.set(document.body, o.Root),
              j(document.body, o.Root),
              J(void 0, !0),
              e.RegisterGamepadNavigationTree(o, window),
              n.OnMount(window),
              window.document.hasFocus() && n.OnActivate(window);
            a()(document.body).on("vgp_onbuttondown", function (e) {
              o.OnRootButtonDown(e.originalEvent);
            }),
              (0, s.u8)(document.body, A);
            new MutationObserver(W).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (0, b.y1)(!0),
              (function (e, t) {
                if (
                  (t.Tree.DeferredFocus.SuppressFocus(),
                  window.addEventListener("popstate", () => y(k(e, t))),
                  window.history.state?.notify_focus_restore_ready)
                ) {
                  T &&
                    console.log(
                      "waiting to restore focus until focus_restore_ready is sent",
                    );
                  var n = k(e, t);
                  window.addEventListener("focus_restore_ready", function (e) {
                    T && console.log("focus_restore_ready received"),
                      window.setTimeout(function () {
                        y(n);
                      }, 100);
                  });
                } else
                  T && console.log("immediately restoring focus from history"),
                    y(k(e, t));
                !(function (e, t) {
                  t.Tree.WindowContext.FocusChangedCallbacks.Register(() => {
                    T &&
                      console.log(
                        `Recording nav state for ${e}: ${(0, D.Ij)((0, D.Ze)(t))}`,
                      ),
                      window.history.replaceState(
                        { ...window.history.state, [e]: (0, D.Ze)(t) },
                        null,
                      );
                  });
                })(e, t);
              })("legacy_web_root", o.Root),
              Object.assign(window, te),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
          })(P)),
          (B = !0);
      }
      function W(e) {
        for (const t of e) {
          const e = [],
            n = [];
          (0, w.Mr)(
            t,
            (t) => e.push(t),
            (e) => n.push(e),
          ),
            e.length && J(a()(e)),
            n.length && X(a()(n));
        }
      }
      const x = new WeakMap(),
        K = new WeakMap();
      let H = [];
      function j(e, t) {
        if (t instanceof d.Bp) {
          const n = t.GetDepth();
          H[n] || (H[n] = []), H[n].push([e, t]);
        }
        x.set(e, t);
      }
      function Y(e, t) {
        const n = K.has(e) ? K.get(e) : [];
        n.push(t), K.set(e, n);
      }
      function $(e) {
        return "jquery" in e ? x.get(e[0]) || O.Unknown : x.get(e) || O.Unknown;
      }
      function X(e) {
        e.find("*")
          .addBack()
          .each(function () {
            K.get(this)?.forEach((e) => e()),
              x.delete(this),
              K.delete(this),
              a()(this).attr("data-nav-modal") && ee();
          });
      }
      function J(e, t = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        a()(n, e)
          .addBack(n)
          .each(function () {
            var e;
            (function (e) {
              return "jquery" in e ? x.has(e[0]) : x.has(e);
            })((e = this)) || Z(e);
          }),
          (function () {
            for (let e = H.length - 1; e >= 0; e--)
              if (H[e])
                for (let [t, n] of H[e])
                  Y(t, n.Tree.RegisterNavigationItem(n, t));
            H = [];
          })();
      }
      function q(e) {
        X(a()(e)), J(a()(e));
      }
      function z(e) {
        const t = a()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          t.is(":visible") &&
          "hidden" != t.css("visibility") &&
          ((t.outerWidth() > 0 && t.outerHeight() > 0) ||
            "hidden" !== t.css("overflow"))
        );
      }
      function Z(e) {
        const t = a()(e),
          n = Q(e);
        if (n instanceof c.O || n == O.InReactTree)
          return j(e, O.InReactTree), O.InReactTree;
        const o = n.Tree;
        let i = t.data("reactNavRoot")
            ? new c.O(t.data("reactNavRoot"), n)
            : o.CreateNode(n, n.m_FocusRing),
          r = t.data("panel") || {};
        if (
          (a()(e).attr("data-nav-modal") &&
            (function (e) {
              G &&
                (m(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported.",
                ),
                ee());
              G = P.NewGamepadNavigationTree(
                P.GetDefaultContext(),
                "modal_dialog",
                void 0,
              );
              const t = p(a()("body"));
              (G.Root.m_FocusRing = t),
                G.Root.SetProperties({}),
                j(e, G.Root),
                J(e),
                (0, s.u8)(G.Root.m_element, (e) => !0),
                (F = P.RegisterGamepadNavigationTree(G, window));
            })(e),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (r.focusable = r.focusable ?? !0),
            (r.clickOnActivate = r.clickOnActivate ?? !0);
        else if ("INPUT" == e.tagName)
          switch (((r.focusable = r.focusable ?? !0), e.getAttribute("type"))) {
            case "radio":
            case "checkbox":
              r.clickOnActivate = r.clickOnActivate ?? !0;
              break;
            case "text":
            case "password":
              r.enableVirtualKeyboard = r.enableVirtualKeyboard ?? !0;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((r.focusable = r.focusable ?? !0),
            (r.enableVirtualKeyboard = r.enableVirtualKeyboard ?? !0));
        const l = r["flow-children"];
        delete r["flow-children"];
        let {
            clickOnActivate: u,
            maintainX: b,
            maintainY: h,
            enableVirtualKeyboard: _,
            preferredChild: f,
            onOKActionDescription: S,
            onCancelActionDescription: w,
            onSecondaryActionDescription: E,
            onOptionsActionDescription: L,
            onMenuActionDescription: A,
            actionDescriptionMap: D,
            onOKButton: T,
            onCancelButton: y,
            onSecondaryButton: k,
            onOptionsButton: U,
            onMenuButton: B,
            onMoveUp: V,
            onMoveRight: W,
            onMoveDown: x,
            onMoveLeft: K,
            onGamepadDirection: H,
            bFocusRingRoot: $,
            type: X,
            ...q
          } = r,
          Z = I(T),
          te = I(y),
          ne = I(k),
          oe = I(U),
          ae = I(B),
          se = I(H);
        X || (X = "Panel"),
          "PanelGroup" == X &&
            ({ onOKButtonHandler: Z, onCancelButtonHandler: te } = (function (
              e,
              t,
            ) {
              const {
                onOKButtonHandler: n,
                onCancelButtonHandler: o,
                navNode: a,
              } = e;
              return (
                (t.focusable = !1 !== t.focusable),
                {
                  onOKButtonHandler: (e) =>
                    !(
                      !a.BHasFocus() ||
                      !a.BChildTakeFocus(s.D$.GAMEPAD, e.detail.button)
                    ) ||
                    (!!n && n(e)),
                  onCancelButtonHandler: (e) =>
                    !(
                      !a.BFocusWithin() ||
                      a.BHasFocus() ||
                      !a.BTakeFocus(s.D$.GAMEPAD, e.detail.button)
                    ) ||
                    (!!o && o(e)),
                }
              );
            })(
              { onOKButtonHandler: Z, onCancelButtonHandler: te, navNode: i },
              q,
            )),
          Z && Y(t[0], (0, s.VX)(t[0], Z)),
          te && Y(t[0], (0, s.hr)(t[0], te)),
          ne && E && Y(t[0], (0, s.f)(t[0], ne)),
          oe && L && Y(t[0], (0, s.Ro)(t[0], oe)),
          ae && A && Y(t[0], (0, s.cR)(t[0], ae)),
          se && Y(t[0], (0, s.u8)(t[0], se));
        const ie = (function (e, t, n, o) {
            const a = {};
            return (
              e && (a.onMoveUp = v(e)),
              t && (a.onMoveRight = v(t)),
              n && (a.onMoveDown = v(n)),
              o && (a.onMoveLeft = v(o)),
              a
            );
          })(V, W, x, K),
          re = l ? (0, g.O)(l) : d.xj.NONE;
        re != d.xj.NONE && (q.layout = re),
          b
            ? (q.navEntryPreferPosition = d.iU.MAINTAIN_X)
            : h
              ? (q.navEntryPreferPosition = d.iU.MAINTAIN_Y)
              : f && (q.navEntryPreferPosition = d.iU.PREFERRED_CHILD),
          u &&
            (!1 !== q.focusable && (q.focusable = !0),
            t.on("vgp_onok", "firstChild" === u ? N : R),
            Y(e, () => {
              t.off("vgp_onok");
            })),
          _ &&
            (t.on("vgp_onok.vkbindings", () => M.ShowVirtualKeyboard()),
            t.on("click.vkbindings", () => M.ShowVirtualKeyboard()),
            t.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                M.HideVirtualKeyboard();
            }),
            Y(e, () => {
              t.off(".vkbindings");
            })),
          q.focusable && void 0 === t.attr("tabIndex") && t.attr("tabIndex", 0),
          q.focusable && i.FocusCallbackList.Register((t) => C(e, t)),
          $ &&
            ((i.m_FocusRing = p(t)),
            "static" == t.css("position") && t.css("position", "relative"));
        const ce = {
          fnCanTakeFocus: z,
          actionDescriptionMap: (0, s.Y3)({
            onOKActionDescription: S,
            onCancelActionDescription: w,
            onSecondaryActionDescription: E,
            onOptionsActionDescription: L,
            onMenuActionDescription: A,
            actionDescriptionMap: D,
          }),
          ...ie,
          ...q,
        };
        return i.SetProperties(ce), j(e, i), i;
      }
      function Q(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let n = $(t);
        if (n == O.Unknown)
          n = (function (e) {
            let t = !1;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                t = !0;
                break;
              case "DIV":
                if ((0, u.ko)(e) != d.xj.COLUMN) t = !0;
                else {
                  const n = (0, u.ko)(e.parentElement);
                  (n != d.xj.ROW && n != d.xj.ROW_REVERSE) || (t = !0);
                }
            }
            let n = O.NotNeeded;
            return t ? (n = Z(e)) : j(e, n), n;
          })(t);
        else if (n == O.InReactTree) return n;
        return n instanceof d.Bp ? n : Q(t);
      }
      function ee(e) {
        F && (F(), (F = null), (G = null)),
          e && a()(e).removeAttr("data-nav-modal");
      }
      const te = {
        InstrumentFocusElements: J,
        ForceUpdateFocusElements: q,
        GPNavFocusChild: function (e) {
          let t = $(e[0]);
          return (
            t instanceof d.Bp || (t = Q(e[0])),
            t instanceof d.Bp && t.BTakeFocus(s.D$.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          const t = e;
          return a()(t).attr("data-nav-modal", "true"), q(t), () => ee(t);
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? M.ShowVirtualKeyboard() : M.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const n = $(e);
          n instanceof d.Bp &&
            n.SetProperties({
              ...n.m_Properties,
              actionDescriptionMap: (0, s.Y3)(t),
            });
        },
      };
    },
    222: (e, t, n) => {
      n.d(t, { A7: () => i, Vp: () => r, n4: () => c });
      var o = n(629),
        a = n(575),
        s = n(264);
      class i {
        PostMessage(e) {}
        RegisterForMessage(e) {}
      }
      class r {
        m_fnCallback = void 0;
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          SteamClient.BrowserView.PostMessageToParent(s.T, t);
        }
        OnMessage(e, t) {
          if (e == s.T) {
            const e = JSON.parse(t);
            this.m_fnCallback(e);
          } else if ("Checkout" == e) {
            let e = JSON.parse(t);
            if ("paypal_success" == e.action)
              try {
                window.OnPayPalSuccess(e.transid);
              } catch (e) {}
            else if ("paypal_cancel" == e.action)
              try {
                window.OnPayPalCancel(e.transid);
              } catch (e) {}
          } else if ("PinnedView" == e) {
            let e = JSON.parse(t);
            try {
              window.HandleOverlayWindowPinnedView(
                1 == e.bPinned,
                1 == e.bShowPinnedView,
              );
            } catch (e) {}
          }
        }
      }
      (0, o.Cg)([a.o], r.prototype, "OnMessage", null);
      class c {
        m_postWindow;
        m_fnCallback = void 0;
        constructor(e) {
          (this.m_postWindow = e),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          this.m_postWindow.postMessage({ gamepadMessage: s.T, args: t }, "*");
        }
        OnMessage(e) {
          let t = e?.data;
          if (t && t.gamepadMessage == s.T && t.args) {
            const e = JSON.parse(t.args);
            this.m_fnCallback(e);
          }
        }
      }
      (0, o.Cg)([a.o], c.prototype, "OnMessage", null);
    },
    377: (e, t, n) => {
      n.d(t, { xr: () => o });
      const o = { x: "y", y: "x" };
    },
    808: (e, t, n) => {
      n.d(t, {
        Jc: () => c,
        LU: () => d,
        YX: () => u,
        e0: () => g,
        lu: () => i.l,
      });
      var o = n(629),
        a = n(350),
        s = n(575),
        i = n(334);
      class r {
        m_callbacks;
        m_currentValue;
        m_fnEquals;
        constructor(e, t) {
          (this.m_callbacks = new i.l()),
            (this.m_currentValue = e),
            (this.m_fnEquals = t);
        }
        Set(e) {
          if (this.m_fnEquals) {
            if (this.m_fnEquals(this.m_currentValue, e)) return;
          } else if (this.m_currentValue === e) return;
          (this.m_currentValue = e), this.m_callbacks.Dispatch(e);
        }
        get Value() {
          return this.m_currentValue;
        }
        Subscribe(e) {
          return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
        }
      }
      function c(e, t) {
        return new r(e, t);
      }
      class l {
        m_fnMap;
        m_originalSubscribableValue;
        m_mappedSubscribableValue;
        m_mappedUnsubscribe;
        m_subscriptionRefCount = 0;
        constructor(e, t, n) {
          (this.m_originalSubscribableValue = e),
            (this.m_mappedSubscribableValue = new r(t(e.Value), n)),
            (this.m_fnMap = t);
        }
        get Value() {
          return this.m_mappedSubscribableValue?.Value;
        }
        Subscribe(e) {
          0 == this.m_subscriptionRefCount++ &&
            (this.m_mappedUnsubscribe =
              this.m_originalSubscribableValue.Subscribe((e) =>
                this.m_mappedSubscribableValue.Set(this.m_fnMap(e)),
              ));
          const t = this.m_mappedSubscribableValue?.Subscribe(e);
          return {
            Unsubscribe: () => {
              t.Unsubscribe(),
                0 == --this.m_subscriptionRefCount &&
                  (this.m_mappedUnsubscribe?.Unsubscribe(),
                  (this.m_mappedUnsubscribe = void 0));
            },
          };
        }
      }
      function u(e, t, n) {
        return new l(e, t, n);
      }
      class d {
        m_schTimer;
        m_fnCallback;
        Schedule(e, t) {
          this.IsScheduled() && this.Cancel(),
            (this.m_fnCallback = t),
            (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
        }
        IsScheduled() {
          return void 0 !== this.m_schTimer;
        }
        Cancel() {
          this.m_schTimer &&
            (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
        }
        ScheduledInternal() {
          this.m_schTimer = void 0;
          const e = this.m_fnCallback;
          (this.m_fnCallback = void 0), e?.();
        }
      }
      (0, o.Cg)([s.o], d.prototype, "ScheduledInternal", null);
      class g {
        m_vecCallbacks = [];
        Push(e) {
          this.m_vecCallbacks.push(e);
        }
        PushArrayRemove(e, t) {
          this.m_vecCallbacks.push(() => a.x9(e, t));
        }
        Unregister() {
          for (const e of this.m_vecCallbacks) e();
          this.m_vecCallbacks = [];
        }
        GetUnregisterFunc() {
          return this.Unregister;
        }
      }
      (0, o.Cg)([s.o], g.prototype, "Unregister", null);
    },
    67: (e, t, n) => {
      function o(e) {
        return null != e && void 0 !== e.focus;
      }
      function a(e, t) {
        let n = 0,
          o = 0;
        return (
          t.right < e.left
            ? (n = e.left - t.right)
            : t.left > e.right && (n = t.left - e.right),
          t.bottom < e.top
            ? (o = e.top - t.bottom)
            : t.top > e.bottom && (o = t.top - e.bottom),
          Math.sqrt(n * n + o * o)
        );
      }
      function s(e) {
        return "INPUT" === e.nodeName;
      }
      function i(e, t) {
        switch (e) {
          case "TEXTAREA":
            return !0;
          case "INPUT":
            switch (t) {
              case "date":
              case "datetime-local":
              case "datetime":
              case "email":
              case "month":
              case "number":
              case "password":
              case "search":
              case "tel":
              case "text":
              case "time":
              case "url":
              case "week":
                return !0;
              default:
                return !1;
            }
          default:
            return !1;
        }
      }
      n.d(t, {
        IB: () => s,
        Mr: () => r,
        TV: () => i,
        bZ: () => a,
        kD: () => o,
      });
      function r(e, t, n) {
        if ("childList" === e.type) {
          for (let n = 0; n < e.addedNodes.length; n++) {
            const o = e.addedNodes[n];
            if (o.nodeType === Node.ELEMENT_NODE) {
              const e = o;
              e.parentElement && t(e);
            }
          }
          for (let t = 0; t < e.removedNodes.length; t++) {
            const o = e.removedNodes[t];
            o.nodeType === Node.ELEMENT_NODE && n?.(o);
          }
        }
      }
    },
    212: (e, t, n) => {
      n.d(t, { wd: () => l });
      var o = n(629),
        a = n(575);
      class s {
        async GetObject(e, t) {
          try {
            const n = await this.GetString(e);
            return n ? JSON.parse(n, t) : null;
          } catch {
            return null;
          }
        }
        async StoreObject(e, t) {
          return this.StoreString(e, JSON.stringify(t));
        }
      }
      class i extends s {
        GetString(e) {
          return Promise.resolve(localStorage.getItem(e));
        }
        StoreString(e, t) {
          return localStorage.setItem(e, t), Promise.resolve();
        }
        RemoveObject(e) {
          return localStorage.removeItem(e), Promise.resolve();
        }
      }
      var r,
        c = n(808);
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(r || (r = {}));
      class l {
        m_sName;
        m_fnIdGenerator = void 0;
        constructor(e, t) {
          (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            u.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(r.Debug, ...e);
        }
        Info(...e) {
          this.Log(r.Info, ...e);
        }
        Warning(...e) {
          this.Log(r.Warning, ...e);
        }
        Error(...e) {
          this.Log(r.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(r.Error, "Assertion failed:", ...t);
        }
        IsDebugEnabled() {
          return u.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(e, ...t) {
          const n = u.Get().IsDebugLogEnabled(this.m_sName);
          if (e == r.Debug && !n) return;
          let o = this.m_sName;
          const a = this.m_fnIdGenerator?.() ?? null;
          null != a && (o += " (" + a + ")");
          d(e, n, u.Get().IncludeBacktraceInLog, o, this.m_sName, ...t);
        }
      }
      (0, o.Cg)([a.o], l.prototype, "Debug", null),
        (0, o.Cg)([a.o], l.prototype, "Info", null),
        (0, o.Cg)([a.o], l.prototype, "Warning", null),
        (0, o.Cg)([a.o], l.prototype, "Error", null),
        (0, o.Cg)([a.o], l.prototype, "Assert", null);
      class u {
        static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
        static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
        static s_Singleton = null;
        m_Storage = null;
        m_setKnownDebugLogs = new Set();
        m_setEnabledDebugLogs = new Set();
        m_bIncludeBacktraceInLog = !1;
        m_SettingsChangedCallback = new c.lu();
        m_bLoading = !1;
        constructor() {
          (this.m_Storage = new i()), this.LoadSettings();
        }
        LogAsLogManager(...e) {
          d(
            r.Info,
            !0,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e,
          );
        }
        async LoadSettings() {
          (this.m_bLoading = !0),
            (this.m_bIncludeBacktraceInLog = !!(await this.m_Storage?.GetObject(
              u.k_IncludeBacktraceInLog_StorageKey,
            )));
          const e = await this.m_Storage?.GetObject(
            u.k_EnabledLogNames_StorageKey,
          );
          if (Array.isArray(e)) {
            this.m_setEnabledDebugLogs = new Set(e);
            for (const t of e) this.m_setKnownDebugLogs.add(t);
            this.LogAsLogManager(
              "Loaded debug enabled log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
          } else 0;
          (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
        }
        async SaveSettings() {
          await this.m_Storage?.StoreObject(
            u.k_EnabledLogNames_StorageKey,
            Array.from(this.m_setEnabledDebugLogs),
          ),
            await this.m_Storage?.StoreObject(
              u.k_IncludeBacktraceInLog_StorageKey,
              this.m_bIncludeBacktraceInLog,
            ),
            this.LogAsLogManager(
              "Saved enabled debug log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        static Get() {
          return (
            null == u.s_Singleton && (u.s_Singleton = new u()), u.s_Singleton
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_setKnownDebugLogs.values();
        }
        RegisterLogName(e) {
          this.m_setKnownDebugLogs.add(e);
        }
        IsLogName(e) {
          return this.m_setKnownDebugLogs.has(e);
        }
        IsDebugLogEnabled(e) {
          return this.m_setEnabledDebugLogs.has(e);
        }
        async ToggleDebugLogEnabled(e) {
          this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
        }
        async SetDebugLogEnabled(e, t) {
          t
            ? this.m_setEnabledDebugLogs.add(e)
            : this.m_setEnabledDebugLogs.delete(e),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        async SetAllDebugLogsEnabled(e) {
          (this.m_setEnabledDebugLogs = e
            ? new Set(this.m_setKnownDebugLogs)
            : new Set()),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        RegisterForSettingsChanges(e) {
          return this.m_SettingsChangedCallback.Register(e);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        async SetIncludeBacktraceInLog(e) {
          (this.m_bIncludeBacktraceInLog = e),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
      }
      function d(e, t, n, o, a, ...s) {
        const i = (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
              t = e.charCodeAt(n) + ((t << 5) - t);
            return [(t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
          })(a).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15))),
            ),
          ),
          c = (299 * (l = i)[0] + 587 * l[1] + 114 * l[2]) / 1e3 >= 128;
        var l;
        let u = o;
        n &&
          (u =
            (function (e) {
              switch (e) {
                case r.Debug:
                  return String.fromCodePoint(128027);
                case r.Info:
                  return String.fromCodePoint(8505);
                case r.Warning:
                  return String.fromCodePoint(9888);
                case r.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            u);
        const d =
            s.length >= 1 && "string" == typeof s[0] && s[0].includes("%c"),
          g = d && s.shift();
        let b;
        if (
          ((b = t
            ? [
                `%c${u}%c:${d ? " %c" + g : ""}`,
                `color: ${c ? "black" : "white"}; background: rgb(${i.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(d ? [""] : []),
                ...s,
              ]
            : s),
          n)
        )
          console.groupCollapsed(...b),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case r.Debug:
            case r.Info:
              console.log(...b);
              break;
            case r.Warning:
              console.warn(...b);
              break;
            case r.Error:
              console.clogerror
                ? console.clogerror(3, ...b)
                : console.error(...b);
          }
      }
      const g = () => [...u.Get().LogNames].sort(),
        b = (e, t) => {
          u.Get().IsLogName(e)
            ? u.Get().SetDebugLogEnabled(e, t)
            : console.warn(`No log named "${e}", available logs:`, g());
        };
      (window.DebugLogEnable = (...e) => e.forEach((e) => b(e, !0))),
        (window.DebugLogDisable = (...e) => e.forEach((e) => b(e, !1))),
        (window.DebugLogEnableAll = () => u.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => u.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          u.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          u.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = g),
        (window.EnableSteamConsole = (e = !0) =>
          u.Get().SetDebugLogEnabled("SteamClient", e));
    },
    444: (e, t, n) => {
      function o(e, t) {
        return null == e || null == t
          ? e === t
          : "object" == typeof e &&
              "object" == typeof t &&
              Object.keys(e).length === Object.keys(t).length &&
              Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n]);
      }
      n.d(t, { e: () => o });
    },
    982: (e, t, n) => {
      n.d(t, { TS: () => c });
      var o = n(328);
      function a() {
        return !!window.document;
      }
      let s;
      function i() {
        if (!a()) return s || (s = r()), s;
        let e = (function (e) {
          if (!a() || !window.document.cookie) return null;
          const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        })("sessionid");
        return e || (e = r()), e;
      }
      function r() {
        const e = (function () {
          let e = "";
          for (let t = 0; t < 24; t++) e += (0, o.Tg)(0, 35).toString(36);
          return e;
        })();
        return (
          (function (e, t, n, o) {
            if (!a()) return;
            o || (o = "/");
            let s = "";
            if (void 0 !== n && n) {
              const e = new Date();
              e.setTime(e.getTime() + 864e5 * n),
                (s = "; expires=" + e.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              s +
              ";path=" +
              o;
          })("sessionid", e, 0),
          e
        );
      }
      new Set();
      const c = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        AVATAR_BASE_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        CLAN_CDN_ASSET_URL: "",
        VIDEO_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        BASE_URL_SHARED_CDN: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_CHECKOUT_BASE_URL: "",
        LOGIN_BASE_URL: "",
        SUPPORT_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        STORE_ITEM_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_MOBILE_WEBVIEW: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        IN_CHROMEOS: !1,
        TESLA: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        FROM_WEB: !1,
        WEBSITE_ID: "Unknown",
        get SESSIONID() {
          return i();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_STEAMUI: !1,
        IN_GAMEPADUI: !1,
        IN_STEAMUI_SHARED_CONTEXT: !1,
        DECK_DISPLAY_MODE: !1,
        ON_DECK: !1,
        ON_STEAMOS: !1,
        IN_GAMESCOPE: !1,
        IN_LOGIN: !1,
        IN_LOGIN_REFRESH: !1,
        USE_LONGEST_LOC_STRING: !1,
        SILENT_STARTUP: !1,
        CLIENT_SESSION: 0,
      };
    },
  },
]);
