/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [721],
  {
    85274: (e) => {
      e.exports = { MoreDots: "_2YpW8SafRsHDfQIUT2DzUP" };
    },
    96434: (e) => {
      e.exports = {
        PriceCell: "_1sKIcxV1HaEWCa1x_sSuVT",
        PricePrefix: "gPcNwuh4LJPmwRZrAbrA5",
        PriceSuffix: "_3AEJb3AH01qQaG89JOYAh4",
        EditablePrice: "pm5xM6Dyy-9XY0g9TpjX1",
        PriceInput: "_1PcwXjG-2t5JOJuL7yhOYG",
        USD: "_1C7qRJ6YdGWEwEK4QsMRUX",
        ProposedPrice: "rVkmDwpTOXR4DqdBdbiPf",
        ApprovedCanPublish: "_1JBd8mxmIpyOChqhkSKSUg",
        ChangedLocally: "_5mvGWs3IDSRLfxvHx8wig",
        WarningPrice: "_1Qd5uW_BK8PBDJiDBjDCPN",
        SevereWarningPrice: "_1o6zP8gegcka6hdQA2lJjv",
        BadPrice: "_18aiu0HZznAMnGQfWExtTm",
        PriceChange: "w-K7qF60ELXWtEjymcY68",
        NewPrice: "_3sgbtvMYimrD0kSs3VCoPx",
        PriceAlert: "_2eadUvk4zK7FL9FFvy3Gd2",
        PriceChangeArrow: "_1z0l2rhYAxXf6M_tgnczgZ",
        PriceIncrease: "_2jQyP7o7hbWM4EhAkKLAks",
        PricePopout: "_1AoyzK2lSPVwQJoIYEjFbR",
        DetailRow: "_3P_fJH02fBcdGM2etenWu7",
        DetailLabel: "_3RXb3FOdpsOt-aVMvfnb6W",
        DetailPrice: "_2k3CVLd6A1QAixKOkfGx6P",
        DetailButton: "_3ILP7OdXtGjDaSvJqI81RV",
        Disabled: "_3mZHsQVQB8w84OblleAq68",
        HoverToolTip: "_36qS74l1tXSXwGdyfIFQ-G",
      };
    },
    31389: (e) => {
      e.exports = {
        PriceGuidelinesPicker: "_2skmsPR7jCBo5xHN2v_E6A",
        GuidelinesPanel: "_29sQa7P4ANi-KFpS_lkroj",
        GuidelinesDescription: "_3poXK_qmmnRcHLvBGFqi8h",
        GuidelinesGrid: "_1Kz7R_x889mAnYo3uORnzL",
        GridElement: "_1r_b9RJn1Ca6KSjtSm7RPF",
        CurrentPrice: "_3wZdsoh1-V6RQ2rsPkj-ga",
      };
    },
    65697: (e) => {
      e.exports = { PopoverMenu: "_2i2FUBZKGyiP5Sb6tuASpO" };
    },
    74267: (e, r, t) => {
      "use strict";
      t.d(r, { L: () => u, O: () => b });
      var n = t(90626),
        o = t(85274),
        i = t.n(o),
        l = t(12155),
        c = t(52038),
        s = t(49771),
        a = t(6336);
      const u = new s.MX("price-grid-cell-popout-elements");
      function b(e) {
        let { hoverKey: r, className: t, renderHover: o } = e,
          s = (0, c.A)(i().MoreDots, t),
          b = n.useRef(void 0),
          m = n.useCallback(() => {
            u.HideElement(b.current.ownerDocument, r);
          }, [r]);
        return n.createElement(
          "div",
          {
            ref: b,
            tabIndex: -1,
            className: s,
            onFocus: (e) => {
              e.target.focus();
              let t = n.createElement(
                a.g,
                {
                  target: b.current,
                  direction: "top",
                  bEnablePointerEvents: !0,
                  nBodyDistance: 0,
                  onClick: m,
                },
                o(),
              );
              u.ShowElement(b.current.ownerDocument, t, r);
            },
            onBlur: () => {
              u.HideElement(b.current.ownerDocument, r, 100);
            },
          },
          n.createElement(l.faJ, null),
        );
      }
    },
    40917: (e, r, t) => {
      "use strict";
      t.d(r, {
        mK: () => H,
        Gy: () => B,
        sh: () => U,
        T6: () => G,
        Oo: () => L,
      });
      var n = t(48174),
        o = t(87864),
        i = t(88267),
        l = t(91934),
        c = t(64238),
        s = t.n(c),
        a = t(90626),
        u = t(56011),
        b = t(65697);
      function m(e) {
        const {
            direction: r,
            ignoreHorizontal: t,
            ignoreVertical: n,
            dismissOnClick: o,
            interactionMode: i = 0,
          } = e,
          c = (0, a.useRef)(null),
          s = (0, a.useRef)(!1),
          m = (0, a.useRef)(!1),
          d = (0, a.useRef)(null),
          [y, S] = (0, a.useState)(!1),
          [C, h] = (0, a.useMemo)(
            () =>
              (function (e) {
                const [r, t] = (0, l.x)(e, "-");
                return "left" === r || "right" === r ? [void 0, r] : [r, t];
              })(r),
            [r],
          ),
          p = (0, a.useCallback)(() => {
            if (!d.current || !c.current) return;
            const e = d.current.getBoundingClientRect();
            let r = h;
            const o = d.current.matches(":dir(rtl)");
            o && ("left" === h ? (r = "right") : "right" === h && (r = "left")),
              c.current.style.setProperty("--parentWidth", `${e.width}px`),
              c.current.style.setProperty("--parentHeight", `${e.height}px`),
              t ||
                ("left" === r
                  ? C
                    ? ((c.current.style.left = "unset"),
                      (c.current.style.right =
                        document.documentElement.clientWidth - e.right + "px"))
                    : ((c.current.style.left = "unset"),
                      (c.current.style.right =
                        document.documentElement.clientWidth - e.left + "px"))
                  : "right" === r
                    ? C
                      ? ((c.current.style.left = `${e.left}px`),
                        (c.current.style.right = "unset"))
                      : ((c.current.style.left = `${e.right}px`),
                        (c.current.style.right = "unset"))
                    : void 0 === r &&
                      (o
                        ? ((c.current.style.left = "unset"),
                          (c.current.style.right =
                            document.documentElement.clientWidth -
                            e.right +
                            "px"))
                        : ((c.current.style.left = `${e.left}px`),
                          (c.current.style.right = "unset")))),
              n ||
                ("down" === C
                  ? ((c.current.style.top = `${e.bottom}px`),
                    (c.current.style.bottom = "unset"),
                    c.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - e.bottom + "px",
                    ))
                  : "up" === C
                    ? ((c.current.style.top = "unset"),
                      (c.current.style.bottom =
                        document.documentElement.clientHeight - e.top + "px"),
                      c.current.style.setProperty(
                        "--availableHeight",
                        `${e.top}px`,
                      ))
                    : void 0 === C &&
                      ((c.current.style.top = `${e.top}px`),
                      (c.current.style.bottom = "unset"),
                      c.current.style.setProperty(
                        "--availableHeight",
                        document.documentElement.clientHeight - e.top + "px",
                      )));
          }, [h, t, n, C]),
          P = (0, a.useMemo)(() => {
            if (d.current) return (0, u._f)(d.current);
          }, [d.current]);
        (0, a.useEffect)(
          () =>
            y
              ? (c.current?.showPopover(),
                P?.addEventListener("scroll", p),
                () => P?.removeEventListener("scroll", p))
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  c.current?.hidePopover(),
                () => {}),
          [y, p, P],
        );
        const E = (0, a.useCallback)(() => {
            p(), S(!0), (m.current = !0);
          }, [p]),
          f = (0, a.useCallback)(() => {
            (m.current = !1), s.current || S(!1);
          }, []),
          g = (0, a.useCallback)(() => {
            (s.current = !0), S(!0);
          }, []),
          D = (0, a.useCallback)(() => {
            (s.current = !1), m.current || S(!1);
          }, []),
          _ = (0, a.useCallback)(() => {
            D(), f();
          }, [D, f]),
          k = (0, a.useCallback)(
            (e) => {
              "Enter" === e.key && (e.preventDefault(), y ? f() : E());
            },
            [f, E, y],
          ),
          I = (0, a.useCallback)(
            (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                c.current?.contains(e.relatedTarget) ||
                f();
            },
            [f],
          ),
          A = (0, a.useCallback)(
            (e) => {
              const r =
                  e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
                t = !e.relatedTarget && !s.current;
              (r || t) && (D(), S(!1));
            },
            [D],
          ),
          w = (0, a.useCallback)(() => {
            y && o ? _() : E();
          }, [_, o, y, E]),
          v = (0, a.useCallback)(
            (e) => {
              "Enter" === e.key && y && o ? _() : E(),
                "Escape" === e.key && y && (_(), e.stopPropagation());
            },
            [_, o, y, E],
          ),
          x = 0 === i;
        let T;
        x && !y
          ? (T = (e) => {
              e.preventDefault(), E();
            })
          : x || (T = y ? f : E);
        const N = {
            "aria-expanded": y,
            role: "button",
            onMouseEnter: x ? E : void 0,
            onMouseLeave: x ? f : void 0,
            onClick: T,
            ref: d,
            onKeyDown: k,
            onBlur: I,
          },
          F = {
            popover: "manual",
            ref: c,
            onMouseEnter: g,
            onMouseLeave: D,
            onFocus: g,
            onBlur: A,
            onClick: w,
            onKeyDown: v,
            className: b.PopoverMenu,
          };
        return {
          isShowingMenu: y,
          triggerProps: N,
          menuProps: F,
          closeMenu: _,
        };
      }
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (await t.e(8433).then(t.bind(t, 8433))).apply();
        }
      })();
      var d = t(7445),
        y = t(76217);
      function S(e, r) {
        return (t) => {
          e?.(t), r?.(t);
        };
      }
      function C(e) {
        const {
            direction: r,
            interactionMode: t = 0,
            ignoreHorizontal: n,
            ignoreVertical: o,
            dismissOnClick: i,
            menuTarget: l,
            className: c,
            children: u,
            renderWhenClosed: b = !0,
            ...C
          } = e,
          {
            isShowingMenu: h,
            triggerProps: p,
            menuProps: P,
            closeMenu: E,
          } = m(e),
          f = a.useRef(null),
          g = a.useRef(null);
        return (
          a.useEffect(() => {
            h
              ? g.current?.TakeFocus()
              : g.current?.BFocusWithin() && f.current?.TakeFocus();
          }, [h]),
          a.createElement(
            a.Fragment,
            null,
            a.cloneElement(l, {
              ...p,
              onMouseEnter: S(l.props.onMouseEnter, p.onMouseEnter),
              onMouseLeave: S(l.props.onMouseLeave, p.onMouseLeave),
              navRef: f,
            }),
            a.createElement(
              y.Z,
              {
                ...C,
                ...P,
                className: s()(P.className, c),
                navRef: g,
                onCancel: E,
                onFocusWithin: (e) => !e && E(),
                childFocusDisabled: !h,
              },
              a.createElement(d.q, null, (b || h) && u),
            ),
          )
        );
      }
      var h = t(12155),
        p = t(52038),
        P = t(31389),
        E = t.n(P),
        f = t(42475);
      const g = {};
      (g.arabic = () => t.e(6873).then(t.t.bind(t, 46873, 19))),
        (g.brazilian = () => t.e(1365).then(t.t.bind(t, 1365, 19))),
        (g.bulgarian = () => t.e(3966).then(t.t.bind(t, 83966, 19))),
        (g.czech = () => t.e(1360).then(t.t.bind(t, 51360, 19))),
        (g.danish = () => t.e(8292).then(t.t.bind(t, 98292, 19))),
        (g.dutch = () => t.e(4993).then(t.t.bind(t, 44993, 19))),
        (g.english = () => t.e(3703).then(t.t.bind(t, 3703, 19))),
        (g.finnish = () => t.e(6376).then(t.t.bind(t, 86376, 19))),
        (g.french = () => t.e(7325).then(t.t.bind(t, 67325, 19))),
        (g.german = () => t.e(9263).then(t.t.bind(t, 69263, 19))),
        (g.greek = () => t.e(4399).then(t.t.bind(t, 14399, 19))),
        (g.hungarian = () => t.e(1706).then(t.t.bind(t, 91706, 19))),
        (g.indonesian = () => t.e(9341).then(t.t.bind(t, 69341, 19))),
        (g.italian = () => t.e(7511).then(t.t.bind(t, 97511, 19))),
        (g.japanese = () => t.e(330).then(t.t.bind(t, 40330, 19))),
        (g.koreana = () => t.e(6252).then(t.t.bind(t, 96252, 19))),
        (g.latam = () => t.e(204).then(t.t.bind(t, 90204, 19))),
        (g.norwegian = () => t.e(839).then(t.t.bind(t, 40839, 19))),
        (g.polish = () => t.e(8816).then(t.t.bind(t, 78816, 19))),
        (g.portuguese = () => t.e(8160).then(t.t.bind(t, 98160, 19))),
        (g.romanian = () => t.e(3546).then(t.t.bind(t, 73546, 19))),
        (g.russian = () => t.e(4302).then(t.t.bind(t, 84302, 19))),
        (g.schinese = () => t.e(6461).then(t.t.bind(t, 46461, 19))),
        (g.spanish = () => t.e(8167).then(t.t.bind(t, 18167, 19))),
        (g.swedish = () => t.e(2438).then(t.t.bind(t, 22438, 19))),
        (g.tchinese = () => t.e(6006).then(t.t.bind(t, 46006, 19))),
        (g.thai = () => t.e(6727).then(t.t.bind(t, 96727, 19))),
        (g.turkish = () => t.e(1639).then(t.t.bind(t, 51639, 19))),
        (g.ukrainian = () => t.e(4354).then(t.t.bind(t, 21973, 19))),
        (g.vietnamese = () => t.e(3946).then(t.t.bind(t, 53946, 19)));
      const D = (0, f.l)(async function (e) {
        if (g[e]) return g[e]();
      });
      function _(e) {
        const r = a.createElement(
          "button",
          { className: E().PriceGuidelinesPicker },
          a.createElement(h.GB9, null),
        );
        return a.createElement(
          C,
          {
            menuTarget: r,
            direction: "down",
            interactionMode: 1,
            dismissOnClick: !0,
          },
          a.createElement(k, { ...e }),
        );
      }
      function k(e) {
        const { fnGetUSDPriceInCents: r, fnOnUpdate: t, strDescription: l } = e,
          c = (0, n.cT)(),
          s = r();
        if (!c) return null;
        const u = c.GetUSDPricePointsInCents();
        return a.createElement(
          "div",
          { className: E().GuidelinesPanel },
          a.createElement(
            "div",
            { className: E().GuidelinesDescription },
            l || D.Localize("#PricingGuideline_Default"),
          ),
          a.createElement(
            "div",
            { className: E().GuidelinesGrid },
            u.map((e) =>
              a.createElement(
                "button",
                {
                  key: e,
                  onClick: () => t(e),
                  className: (0, p.A)(
                    E().GridElement,
                    s == e && E().CurrentPrice,
                  ),
                },
                (0, o.x)(e, i.AI.k_ECurrencyCodeUSD),
              ),
            ),
          ),
        );
      }
      var I = t(17084),
        A = t(9554),
        w = t(6336),
        v = t(14336),
        x = t(16676),
        T = t(32754),
        N = t(61859),
        F = t(74267),
        R = t(96434),
        W = t.n(R);
      function U(e) {
        const { cell: r, row: t } = e,
          n = t.original.packageID,
          o = r.getValue(),
          {
            nPriceInCents: i,
            nPublishedPriceInCents: l,
            nProposedPriceInCents: c,
            fnSetPrice: s,
          } = (0, I.xQ)(n, o),
          [u, b, m] = (0, I.Wx)(i, o),
          d = (0, I.Gs)(o),
          y = a.useRef(void 0),
          S = n + o,
          { strClassName: C } = O(n, o),
          h = "USD" == o,
          p = c ?? l,
          P = i != p;
        return a.createElement(
          "div",
          { ref: y, onKeyDown: A.nm, className: C },
          P && a.createElement(B, { nPriceInCents: i, nSavedPriceInCents: p }),
          u && a.createElement("div", { className: W().PricePrefix }, u),
          a.createElement(
            "div",
            { className: W().EditablePrice },
            a.createElement(x.pd, {
              value: b,
              className: W().PriceInput,
              onChange: (e) => {
                const r = e.target.value.replace(/[^0-9]/g, "");
                let t = Number(r || 0);
                if (Number.isNaN(t)) return;
                d.bWholeUnitsOnly && (t *= 100);
                const n = 2147483647;
                t > n && (t = n), s(t);
              },
              onFocus: (e) => {
                e.target.select(),
                  F.L.ShowElement(
                    y.current.ownerDocument,
                    a.createElement(
                      w.g,
                      {
                        target: y.current,
                        direction: "top",
                        bEnablePointerEvents: !0,
                        nBodyDistance: 0,
                      },
                      a.createElement(K, {
                        key: S,
                        packageID: n,
                        strPriceKey: o,
                      }),
                    ),
                    S,
                  );
              },
              onBlur: () => {
                window.setTimeout(
                  () =>
                    y.current && F.L.HideElement(y.current.ownerDocument, S),
                  500,
                );
              },
            }),
          ),
          m && a.createElement("div", { className: W().PriceSuffix }, m),
          h && a.createElement(M, { packageID: n }),
          a.createElement(G, { packageID: n, strPriceKey: o }),
        );
      }
      function M(e) {
        const { packageID: r } = e,
          { fnApplyGuidelines: t } = (0, n.gC)((0, I.$i)());
        return a.createElement(_, {
          fnGetUSDPriceInCents: () => (0, I.FR)(r, "USD"),
          fnOnUpdate: (e) => t(r, e),
          strDescription: (0, N.we)(
            "#PricingDashboard_GuidelinesPickerDescription",
          ),
        });
      }
      function G(e) {
        const { packageID: r, strPriceKey: t } = e,
          { strPriceWarning: n, bBadPrice: o, bShowWarningIcon: i } = O(r, t);
        return i
          ? a.createElement(
              T.he,
              {
                className: W().PriceAlert,
                strTooltipClassname: W().HoverToolTip,
                toolTipContent: n,
                direction: "top",
              },
              a.createElement(h.eTF, {
                color: o ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            )
          : null;
      }
      const L = 2;
      function O(e, r) {
        const {
            nPriceInCents: t,
            nPublishedPriceInCents: n,
            nProposedPriceInCents: o,
            nMinPriceInCents: i,
            nMaxPriceInCents: l,
            nMaxDiscountPercentage: c,
            nSuggestedPriceInCents: s,
          } = (0, I.xQ)(e, r),
          u = (0, I.d$)(e),
          b = "USD" == r,
          m = t != (o ?? n),
          d = t < i,
          y = !!l && t > l,
          S = !!s && t > s * L,
          C = !!s && t < s / L,
          h = !!s && t < s && !!c,
          P =
            (y && (0, N.we)("#PricingDashboard_PriceIncreaseDisallowed")) ||
            (d &&
              (0, N.we)(
                "#PricingDashboard_PriceTooLow",
                (0, I.Wx)(i, r).join(""),
              )) ||
            (S &&
              (0, N.we)(
                "#PricingDashboard_PriceMuchHigherThanGuidelines",
                (0, I.Wx)(s, r).join(""),
              )) ||
            (C &&
              (0, N.we)(
                "#PricingDashboard_PriceMuchLowerThanGuidelines",
                (0, I.Wx)(s, r).join(""),
              )) ||
            (h &&
              (0, N.we)(
                "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                c,
              )),
          E = y || d,
          f = S || C,
          g = E || f || h,
          D = !(m || !o || (n && o == n)),
          _ = 4 == u?.eState,
          k = (0, p.A)(
            W().PriceCell,
            b && W().USD,
            m && W().ChangedLocally,
            D && W().ProposedPrice,
            _ && W().ApprovedCanPublish,
            g && W().WarningPrice,
            f && W().SevereWarningPrice,
            E && W().BadPrice,
          );
        return a.useMemo(
          () => ({
            strPriceWarning: P,
            strClassName: k,
            bBadPrice: E,
            bShowSevereWarning: f,
            bShowWarningIcon: g,
          }),
          [P, k, E, f, g],
        );
      }
      function B(e) {
        const { nPriceInCents: r, nSavedPriceInCents: t } = e;
        let n = null,
          o = null,
          i = null,
          l = null;
        if (t) {
          const e = Math.ceil((100 * (r - t)) / t),
            c = r > t;
          (i = c
            ? (0, N.we)("#PricingDashboard_PriceIncreaseBy", e + "%")
            : (0, N.we)("#PricingDashboard_PriceLowerBy", e + "%")),
            (l = (0, p.A)(W().PriceChange, c && W().PriceIncrease)),
            (o = a.createElement(
              "div",
              { className: W().PriceChangeArrow },
              a.createElement(h.i3G, { angle: c ? 0 : 180 }),
            )),
            (n = e + "%");
        } else
          (n = (0, N.we)("#PricingDashboard_PriceIsNew_Short")),
            (l = (0, p.A)(W().NewPrice));
        return a.createElement(
          T.he,
          {
            className: l,
            strTooltipClassname: W().HoverToolTip,
            toolTipContent: i,
            direction: "top",
          },
          o,
          n,
        );
      }
      function H(e) {
        return new Date(1e3 * e).toLocaleString(N.pf.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
      function K(e) {
        const { packageID: r, strPriceKey: t } = e,
          {
            nPriceInCents: n,
            nPublishedPriceInCents: o,
            nProposedPriceInCents: i,
            nSuggestedPriceInCents: l,
            fnSetPrice: c,
          } = (0, I.xQ)(r, t),
          { nPriceInCents: s } = (0, I.xQ)(r, "USD"),
          u = !(!i || (o && i == o)),
          b = (0, I.d$)(r),
          m = b && H(b.rtSubmitted),
          d = (0, v.z0)(b?.submitterID),
          y = d ? d.m_strPlayerName : b?.submitterID;
        return a.createElement(
          "div",
          { className: W().PricePopout },
          !!o &&
            a.createElement(
              T.he,
              {
                className: W().DetailRow,
                direction: "left",
                toolTipContent: (0, N.we)(
                  "#PricingDashboard_CurrentPriceOnStore_ttip",
                ),
              },
              a.createElement(
                "div",
                { className: W().DetailLabel },
                (0, N.we)("#PricingDashboard_CurrentPriceOnStore"),
              ),
              a.createElement(
                "div",
                { className: W().DetailPrice },
                (0, I.Wx)(o, t).join(""),
              ),
              a.createElement(
                T.he,
                {
                  className: (0, p.A)(W().DetailButton, o == n && W().Disabled),
                  onClick: () => c(o),
                  bDisabled: o == n,
                  toolTipContent: (0, N.we)(
                    "#PricingDashboard_UseThisOldPrice_ttip",
                  ),
                },
                (0, N.we)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          u &&
            a.createElement(
              T.he,
              {
                className: W().DetailRow,
                direction: "left",
                toolTipContent: (0, N.we)(
                  "#PricingDashboard_ProposedPrice_ttip",
                  y,
                  m,
                ),
              },
              a.createElement(
                "div",
                { className: W().DetailLabel },
                (0, N.we)("#PricingDashboard_ProposedPrice"),
              ),
              a.createElement(
                "div",
                { className: W().DetailPrice },
                (0, I.Wx)(i, t).join(""),
              ),
              a.createElement(
                T.he,
                {
                  className: (0, p.A)(W().DetailButton, i == n && W().Disabled),
                  onClick: () => c(i),
                  bDisabled: i == n,
                  toolTipContent: (0, N.we)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, N.we)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
          !!l &&
            a.createElement(
              T.he,
              {
                className: W().DetailRow,
                direction: "left",
                toolTipContent: (0, N.we)(
                  "#PricingDashboard_SuggestedPrice_ttip",
                  (0, I.Wx)(s, "USD").join(""),
                ),
              },
              a.createElement(
                "div",
                { className: W().DetailLabel },
                (0, N.we)("#PricingDashboard_SuggestedPrice"),
              ),
              a.createElement(
                "div",
                { className: W().DetailPrice },
                (0, I.Wx)(l, t).join(""),
              ),
              a.createElement(
                T.he,
                {
                  className: (0, p.A)(W().DetailButton, l == n && W().Disabled),
                  onClick: () => c(l),
                  bDisabled: l == n,
                  toolTipContent: (0, N.we)(
                    "#PricingDashboard_UseThisNewPrice_ttip",
                  ),
                },
                (0, N.we)("#PricingDashboard_UseThisPrice_Button"),
              ),
            ),
        );
      }
    },
    87864: (e, r, t) => {
      "use strict";
      t.d(r, { x: () => l });
      var n = t(88267);
      const o = {
          [n.AI.k_ECurrencyCodeInvalid]: {},
          [n.AI.k_ECurrencyCodeUSD]: { strSymbol: "$" },
          [n.AI.k_ECurrencyCodeGBP]: { strSymbol: "£" },
          [n.AI.k_ECurrencyCodeEUR]: { strSymbol: "€" },
          [n.AI.k_ECurrencyCodeCHF]: { strSymbol: "CHF" },
          [n.AI.k_ECurrencyCodeRUB]: {
            strSymbol: "руб.",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: "",
          },
          [n.AI.k_ECurrencyCodePLN]: {
            strSymbol: "zł",
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [n.AI.k_ECurrencyCodeBRL]: {
            strSymbol: "R$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [n.AI.k_ECurrencyCodeJPY]: {
            strSymbol: "¥",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeNOK]: {
            strSymbol: "kr",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [n.AI.k_ECurrencyCodeIDR]: {
            strSymbol: "Rp",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [n.AI.k_ECurrencyCodeMYR]: { strSymbol: "RM" },
          [n.AI.k_ECurrencyCodePHP]: { strSymbol: "P" },
          [n.AI.k_ECurrencyCodeSGD]: { strSymbol: "S$" },
          [n.AI.k_ECurrencyCodeTHB]: { strSymbol: "฿" },
          [n.AI.k_ECurrencyCodeVND]: {
            strSymbol: "₫",
            bWholeUnitsOnly: !0,
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [n.AI.k_ECurrencyCodeKRW]: {
            strSymbol: "₩",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeTRY]: {
            strSymbol: "TL",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [n.AI.k_ECurrencyCodeUAH]: {
            strSymbol: "₴",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [n.AI.k_ECurrencyCodeMXN]: { strSymbol: "Mex$", bSpaceForSymbol: !0 },
          [n.AI.k_ECurrencyCodeCAD]: { strSymbol: "CDN$", bSpaceForSymbol: !0 },
          [n.AI.k_ECurrencyCodeAUD]: { strSymbol: "A$", bSpaceForSymbol: !0 },
          [n.AI.k_ECurrencyCodeNZD]: { strSymbol: "NZ$", bSpaceForSymbol: !0 },
          [n.AI.k_ECurrencyCodeCNY]: { strSymbol: "¥", bSpaceForSymbol: !0 },
          [n.AI.k_ECurrencyCodeINR]: {
            strSymbol: "₹",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
          },
          [n.AI.k_ECurrencyCodeCLP]: {
            strSymbol: "CLP$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [n.AI.k_ECurrencyCodePEN]: { strSymbol: "S/." },
          [n.AI.k_ECurrencyCodeCOP]: {
            strSymbol: "COL$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [n.AI.k_ECurrencyCodeZAR]: {
            strSymbol: "R",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [n.AI.k_ECurrencyCodeHKD]: { strSymbol: "HK$", bSpaceForSymbol: !0 },
          [n.AI.k_ECurrencyCodeTWD]: {
            strSymbol: "NT$",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeSAR]: {
            strSymbol: "SR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeAED]: {
            strSymbol: "AED",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeSEK]: {
            strSymbol: "kr",
            bSpaceForSymbol: !0,
            bSuffixSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeARS]: {
            strSymbol: "ARS$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [n.AI.k_ECurrencyCodeILS]: { strSymbol: "₪" },
          [n.AI.k_ECurrencyCodeBYN]: { strSymbol: "Br" },
          [n.AI.k_ECurrencyCodeKZT]: {
            strSymbol: "₸",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [n.AI.k_ECurrencyCodeKWD]: {
            strSymbol: "KD",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeQAR]: {
            strSymbol: "QR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeCRC]: {
            strSymbol: "₡",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [n.AI.k_ECurrencyCodeUYU]: {
            strSymbol: "$U",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [n.AI.k_ECurrencyCodeBGN]: {
            strSymbol: "лв",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeHRK]: {
            strSymbol: "kn",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeCZK]: {
            strSymbol: "Kč",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeDKK]: {
            strSymbol: "kr.",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeHUF]: {
            strSymbol: "Ft",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeRON]: {
            strSymbol: "lei",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [n.AI.k_ECurrencyCodeMax]: {},
        },
        i = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: n.AI.k_ECurrencyCodeInvalid,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function l(e, r) {
        const t = (function (e) {
            return { ...i, ...o[e], eCurrency: e };
          })(r),
          {
            strSymbol: n,
            bSuffixSymbol: l,
            bSpaceForSymbol: c,
            bWholeUnitsOnly: s,
            strDecimalSymbol: a,
            strThousandsSeparator: u,
          } = t,
          b = e < 0,
          m = s && e % 100 == 0;
        b && (e = -e);
        const d = [];
        for (let r = 0; r < 2; r++)
          m || d.push(e % 10), (e = Math.floor(e / 10));
        !m && a && d.push(a);
        let y = 0;
        do {
          y++ % 3 == 0 && y > 2 && u && d.push(u),
            d.push(e % 10),
            (e = Math.floor(e / 10));
        } while (e > 0);
        const S = d.reverse().join(""),
          C = c ? " " : "",
          h = b ? "-" : "";
        return l ? `${h}${S}${C}${n}` : `${h}${n}${C}${S}`;
      }
    },
  },
]);
