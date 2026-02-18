/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7043],
  {
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
    28139: (e, r, t) => {
      "use strict";
      t.d(r, {
        mK: () => K,
        Gy: () => B,
        sh: () => U,
        T6: () => G,
        Oo: () => O,
      });
      var n = t(91934),
        o = t(64238),
        i = t.n(o),
        s = t(90626),
        l = t(56011),
        c = t(65697);
      function a(e) {
        const {
            direction: r,
            ignoreHorizontal: t,
            ignoreVertical: o,
            dismissOnClick: i,
            interactionMode: a = 0,
          } = e,
          u = (0, s.useRef)(null),
          b = (0, s.useRef)(!1),
          m = (0, s.useRef)(!1),
          d = (0, s.useRef)(null),
          [y, S] = (0, s.useState)(!1),
          [C, h] = (0, s.useMemo)(
            () =>
              (function (e) {
                const [r, t] = (0, n.x)(e, "-");
                return "left" === r || "right" === r ? [void 0, r] : [r, t];
              })(r),
            [r],
          ),
          p = (0, s.useCallback)(() => {
            if (!d.current || !u.current) return;
            const e = d.current.getBoundingClientRect();
            let r = h;
            const n = d.current.matches(":dir(rtl)");
            n && ("left" === h ? (r = "right") : "right" === h && (r = "left")),
              u.current.style.setProperty("--parentWidth", `${e.width}px`),
              u.current.style.setProperty("--parentHeight", `${e.height}px`),
              t ||
                ("left" === r
                  ? C
                    ? ((u.current.style.left = "unset"),
                      (u.current.style.right =
                        document.documentElement.clientWidth - e.right + "px"))
                    : ((u.current.style.left = "unset"),
                      (u.current.style.right =
                        document.documentElement.clientWidth - e.left + "px"))
                  : "right" === r
                    ? C
                      ? ((u.current.style.left = `${e.left}px`),
                        (u.current.style.right = "unset"))
                      : ((u.current.style.left = `${e.right}px`),
                        (u.current.style.right = "unset"))
                    : void 0 === r &&
                      (n
                        ? ((u.current.style.left = "unset"),
                          (u.current.style.right =
                            document.documentElement.clientWidth -
                            e.right +
                            "px"))
                        : ((u.current.style.left = `${e.left}px`),
                          (u.current.style.right = "unset")))),
              o ||
                ("down" === C
                  ? ((u.current.style.top = `${e.bottom}px`),
                    (u.current.style.bottom = "unset"),
                    u.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - e.bottom + "px",
                    ))
                  : "up" === C
                    ? ((u.current.style.top = "unset"),
                      (u.current.style.bottom =
                        document.documentElement.clientHeight - e.top + "px"),
                      u.current.style.setProperty(
                        "--availableHeight",
                        `${e.top}px`,
                      ))
                    : void 0 === C &&
                      ((u.current.style.top = `${e.top}px`),
                      (u.current.style.bottom = "unset"),
                      u.current.style.setProperty(
                        "--availableHeight",
                        document.documentElement.clientHeight - e.top + "px",
                      )));
          }, [h, t, o, C]),
          P = (0, s.useMemo)(() => {
            if (d.current) return (0, l._f)(d.current);
          }, [d.current]);
        (0, s.useEffect)(
          () =>
            y
              ? (u.current?.showPopover(),
                P?.addEventListener("scroll", p),
                () => P?.removeEventListener("scroll", p))
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  u.current?.hidePopover(),
                () => {}),
          [y, p, P],
        );
        const f = (0, s.useCallback)(() => {
            p(), S(!0), (m.current = !0);
          }, [p]),
          g = (0, s.useCallback)(() => {
            (m.current = !1), b.current || S(!1);
          }, []),
          E = (0, s.useCallback)(() => {
            (b.current = !0), S(!0);
          }, []),
          _ = (0, s.useCallback)(() => {
            (b.current = !1), m.current || S(!1);
          }, []),
          D = (0, s.useCallback)(() => {
            _(), g();
          }, [_, g]),
          k = (0, s.useCallback)(
            (e) => {
              "Enter" === e.key && (e.preventDefault(), y ? g() : f());
            },
            [g, f, y],
          ),
          I = (0, s.useCallback)(
            (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                u.current?.contains(e.relatedTarget) ||
                g();
            },
            [g],
          ),
          A = (0, s.useCallback)(
            (e) => {
              const r =
                  e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
                t = !e.relatedTarget && !b.current;
              (r || t) && (_(), S(!1));
            },
            [_],
          ),
          x = (0, s.useCallback)(() => {
            y && i ? D() : f();
          }, [D, i, y, f]),
          v = (0, s.useCallback)(
            (e) => {
              "Enter" === e.key && y && i ? D() : f(),
                "Escape" === e.key && y && (D(), e.stopPropagation());
            },
            [D, i, y, f],
          ),
          w = 0 === a;
        let T;
        w && !y
          ? (T = (e) => {
              e.preventDefault(), f();
            })
          : w || (T = y ? g : f);
        const N = {
            "aria-expanded": y,
            role: "button",
            onMouseEnter: w ? f : void 0,
            onMouseLeave: w ? g : void 0,
            onClick: T,
            ref: d,
            onKeyDown: k,
            onBlur: I,
          },
          F = {
            popover: "manual",
            ref: u,
            onMouseEnter: E,
            onMouseLeave: _,
            onFocus: E,
            onBlur: A,
            onClick: x,
            onKeyDown: v,
            className: c.PopoverMenu,
          };
        return {
          isShowingMenu: y,
          triggerProps: N,
          menuProps: F,
          closeMenu: D,
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
      var u = t(7445),
        b = t(76217);
      function m(e, r) {
        return (t) => {
          e?.(t), r?.(t);
        };
      }
      function d(e) {
        const {
            direction: r,
            interactionMode: t = 0,
            ignoreHorizontal: n,
            ignoreVertical: o,
            dismissOnClick: l,
            menuTarget: c,
            className: d,
            children: y,
            renderWhenClosed: S = !0,
            ...C
          } = e,
          {
            isShowingMenu: h,
            triggerProps: p,
            menuProps: P,
            closeMenu: f,
          } = a(e),
          g = s.useRef(null),
          E = s.useRef(null);
        return (
          s.useEffect(() => {
            h
              ? E.current?.TakeFocus()
              : E.current?.BFocusWithin() && g.current?.TakeFocus();
          }, [h]),
          s.createElement(
            s.Fragment,
            null,
            s.cloneElement(c, {
              ...p,
              onMouseEnter: m(c.props.onMouseEnter, p.onMouseEnter),
              onMouseLeave: m(c.props.onMouseLeave, p.onMouseLeave),
              navRef: g,
            }),
            s.createElement(
              b.Z,
              {
                ...C,
                ...P,
                className: i()(P.className, d),
                navRef: E,
                onCancel: f,
                onFocusWithin: (e) => !e && f(),
                childFocusDisabled: !h,
              },
              s.createElement(u.q, null, (S || h) && y),
            ),
          )
        );
      }
      var y = t(48174),
        S = t(87864),
        C = t(88267),
        h = t(12155),
        p = t(52038),
        P = t(31389),
        f = t.n(P),
        g = t(42475);
      const E = {};
      (E.arabic = () => t.e(6873).then(t.t.bind(t, 46873, 19))),
        (E.brazilian = () => t.e(1365).then(t.t.bind(t, 1365, 19))),
        (E.bulgarian = () => t.e(3966).then(t.t.bind(t, 83966, 19))),
        (E.czech = () => t.e(1360).then(t.t.bind(t, 51360, 19))),
        (E.danish = () => t.e(8292).then(t.t.bind(t, 98292, 19))),
        (E.dutch = () => t.e(4993).then(t.t.bind(t, 44993, 19))),
        (E.english = () => t.e(3703).then(t.t.bind(t, 3703, 19))),
        (E.finnish = () => t.e(6376).then(t.t.bind(t, 86376, 19))),
        (E.french = () => t.e(7325).then(t.t.bind(t, 67325, 19))),
        (E.german = () => t.e(9263).then(t.t.bind(t, 69263, 19))),
        (E.greek = () => t.e(4399).then(t.t.bind(t, 14399, 19))),
        (E.hungarian = () => t.e(1706).then(t.t.bind(t, 91706, 19))),
        (E.indonesian = () => t.e(9341).then(t.t.bind(t, 69341, 19))),
        (E.italian = () => t.e(7511).then(t.t.bind(t, 97511, 19))),
        (E.japanese = () => t.e(330).then(t.t.bind(t, 40330, 19))),
        (E.koreana = () => t.e(6252).then(t.t.bind(t, 96252, 19))),
        (E.latam = () => t.e(204).then(t.t.bind(t, 90204, 19))),
        (E.norwegian = () => t.e(839).then(t.t.bind(t, 40839, 19))),
        (E.polish = () => t.e(8816).then(t.t.bind(t, 78816, 19))),
        (E.portuguese = () => t.e(8160).then(t.t.bind(t, 98160, 19))),
        (E.romanian = () => t.e(3546).then(t.t.bind(t, 73546, 19))),
        (E.russian = () => t.e(4302).then(t.t.bind(t, 84302, 19))),
        (E.schinese = () => t.e(6461).then(t.t.bind(t, 46461, 19))),
        (E.spanish = () => t.e(8167).then(t.t.bind(t, 18167, 19))),
        (E.swedish = () => t.e(2438).then(t.t.bind(t, 22438, 19))),
        (E.tchinese = () => t.e(6006).then(t.t.bind(t, 46006, 19))),
        (E.thai = () => t.e(6727).then(t.t.bind(t, 96727, 19))),
        (E.turkish = () => t.e(1639).then(t.t.bind(t, 51639, 19))),
        (E.ukrainian = () => t.e(4354).then(t.t.bind(t, 21973, 19))),
        (E.vietnamese = () => t.e(3946).then(t.t.bind(t, 53946, 19)));
      const _ = (0, g.l)(async function (e) {
        if (E[e]) return E[e]();
      });
      function D(e) {
        const r = s.createElement(
          "button",
          { className: f().PriceGuidelinesPicker },
          s.createElement(h.GB9, null),
        );
        return s.createElement(
          d,
          {
            menuTarget: r,
            direction: "down",
            interactionMode: 1,
            dismissOnClick: !0,
          },
          s.createElement(k, { ...e }),
        );
      }
      function k(e) {
        const { fnGetUSDPriceInCents: r, fnOnUpdate: t, strDescription: n } = e,
          o = (0, y.cT)(),
          i = r();
        if (!o) return null;
        const l = o.GetUSDPricePointsInCents();
        return s.createElement(
          "div",
          { className: f().GuidelinesPanel },
          s.createElement(
            "div",
            { className: f().GuidelinesDescription },
            n || _.Localize("#PricingGuideline_Default"),
          ),
          s.createElement(
            "div",
            { className: f().GuidelinesGrid },
            l.map((e) =>
              s.createElement(
                "button",
                {
                  key: e,
                  onClick: () => t(e),
                  className: (0, p.A)(
                    f().GridElement,
                    i == e && f().CurrentPrice,
                  ),
                },
                (0, S.x)(e, C.AI.k_ECurrencyCodeUSD),
              ),
            ),
          ),
        );
      }
      var I = t(17084),
        A = t(9554),
        x = t(16676),
        v = t(32754),
        w = t(61859),
        T = t(96434),
        N = t.n(T),
        F = t(14336);
      let W = null;
      function R(e) {
        const { packageID: r, strPriceKey: t } = e,
          {
            nPriceInCents: n,
            nPublishedPriceInCents: o,
            nProposedPriceInCents: i,
            nSuggestedPriceInCents: l,
            fnSetPrice: c,
          } = (0, I.xQ)(r, t),
          { nPriceInCents: a } = (0, I.xQ)(r, "USD"),
          u = !(!i || (o && i == o)),
          b = (0, I.d$)(r),
          m = b && K(b.rtSubmitted),
          { data: d } = (0, F.js)(b?.submitterID),
          y = d ? d.m_strPlayerName : b?.submitterID;
        return (o || u || l) && W == r + t
          ? s.createElement(
              "div",
              { className: N().PricePopout },
              !!o &&
                s.createElement(
                  v.he,
                  {
                    className: N().DetailRow,
                    direction: "left",
                    toolTipContent: (0, w.we)(
                      "#PricingDashboard_CurrentPriceOnStore_ttip",
                    ),
                  },
                  s.createElement(
                    "div",
                    { className: N().DetailLabel },
                    (0, w.we)("#PricingDashboard_CurrentPriceOnStore"),
                  ),
                  s.createElement(
                    "div",
                    { className: N().DetailPrice },
                    (0, I.Wx)(o, t).join(""),
                  ),
                  s.createElement(
                    v.he,
                    {
                      className: (0, p.A)(
                        N().DetailButton,
                        o == n && N().Disabled,
                      ),
                      onClick: () => c(o),
                      bDisabled: o == n,
                      toolTipContent: (0, w.we)(
                        "#PricingDashboard_UseThisOldPrice_ttip",
                      ),
                    },
                    (0, w.we)("#PricingDashboard_UseThisPrice_Button"),
                  ),
                ),
              u &&
                s.createElement(
                  v.he,
                  {
                    className: N().DetailRow,
                    direction: "left",
                    toolTipContent: (0, w.we)(
                      "#PricingDashboard_ProposedPrice_ttip",
                      y,
                      m,
                    ),
                  },
                  s.createElement(
                    "div",
                    { className: N().DetailLabel },
                    (0, w.we)("#PricingDashboard_ProposedPrice"),
                  ),
                  s.createElement(
                    "div",
                    { className: N().DetailPrice },
                    (0, I.Wx)(i, t).join(""),
                  ),
                  s.createElement(
                    v.he,
                    {
                      className: (0, p.A)(
                        N().DetailButton,
                        i == n && N().Disabled,
                      ),
                      onClick: () => c(i),
                      bDisabled: i == n,
                      toolTipContent: (0, w.we)(
                        "#PricingDashboard_UseThisNewPrice_ttip",
                      ),
                    },
                    (0, w.we)("#PricingDashboard_UseThisPrice_Button"),
                  ),
                ),
              !!l &&
                s.createElement(
                  v.he,
                  {
                    className: N().DetailRow,
                    direction: "left",
                    toolTipContent: (0, w.we)(
                      "#PricingDashboard_SuggestedPrice_ttip",
                      (0, I.Wx)(a, "USD").join(""),
                    ),
                  },
                  s.createElement(
                    "div",
                    { className: N().DetailLabel },
                    (0, w.we)("#PricingDashboard_SuggestedPrice"),
                  ),
                  s.createElement(
                    "div",
                    { className: N().DetailPrice },
                    (0, I.Wx)(l, t).join(""),
                  ),
                  s.createElement(
                    v.he,
                    {
                      className: (0, p.A)(
                        N().DetailButton,
                        l == n && N().Disabled,
                      ),
                      onClick: () => c(l),
                      bDisabled: l == n,
                      toolTipContent: (0, w.we)(
                        "#PricingDashboard_UseThisNewPrice_ttip",
                      ),
                    },
                    (0, w.we)("#PricingDashboard_UseThisPrice_Button"),
                  ),
                ),
            )
          : null;
      }
      function U(e) {
        const { cell: r, row: t } = e,
          n = t.original.packageID,
          o = r.getValue(),
          {
            nPriceInCents: i,
            nPublishedPriceInCents: l,
            nProposedPriceInCents: c,
            fnSetPrice: a,
          } = (0, I.xQ)(n, o),
          [u, b, m] = (0, I.Wx)(i, o),
          y = (0, I.Gs)(o),
          S = s.useRef(void 0),
          { strClassName: C } = L(n, o),
          h = "USD" == o,
          p = c ?? l,
          P = i != p;
        return s.createElement(
          "div",
          { ref: S, onKeyDown: A.nm, className: C },
          P && s.createElement(B, { nPriceInCents: i, nSavedPriceInCents: p }),
          u && s.createElement("div", { className: N().PricePrefix }, u),
          s.createElement(
            d,
            {
              menuTarget: s.createElement(
                "div",
                { className: N().EditablePrice },
                s.createElement(x.pd, {
                  value: b,
                  className: N().PriceInput,
                  onChange: (e) => {
                    const r = e.target.value.replace(/[^0-9]/g, "");
                    let t = Number(r || 0);
                    if (Number.isNaN(t)) return;
                    y.bWholeUnitsOnly && (t *= 100);
                    const n = 2147483647;
                    t > n && (t = n), a(t);
                  },
                  onFocus: () => {
                    W = n + o;
                  },
                }),
              ),
              direction: "up",
              interactionMode: 1,
              dismissOnClick: !0,
              renderWhenClosed: !1,
            },
            s.createElement(R, { packageID: n, strPriceKey: o }),
          ),
          m && s.createElement("div", { className: N().PriceSuffix }, m),
          h && s.createElement(M, { packageID: n }),
          s.createElement(G, { packageID: n, strPriceKey: o }),
        );
      }
      function M(e) {
        const { packageID: r } = e,
          { fnApplyGuidelines: t } = (0, y.gC)((0, I.$i)());
        return s.createElement(D, {
          fnGetUSDPriceInCents: () => (0, I.FR)(r, "USD"),
          fnOnUpdate: (e) => t(r, e),
          strDescription: (0, w.we)(
            "#PricingDashboard_GuidelinesPickerDescription",
          ),
        });
      }
      function G(e) {
        const { packageID: r, strPriceKey: t } = e,
          { strPriceWarning: n, bBadPrice: o, bShowWarningIcon: i } = L(r, t);
        return i
          ? s.createElement(
              v.he,
              {
                className: N().PriceAlert,
                strTooltipClassname: N().HoverToolTip,
                toolTipContent: n,
                direction: "top",
              },
              s.createElement(h.eTF, {
                color: o ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            )
          : null;
      }
      const O = 2;
      function L(e, r) {
        const {
            nPriceInCents: t,
            nPublishedPriceInCents: n,
            nProposedPriceInCents: o,
            nMinPriceInCents: i,
            nMaxPriceInCents: l,
            nMaxDiscountPercentage: c,
            nSuggestedPriceInCents: a,
          } = (0, I.xQ)(e, r),
          u = (0, I.d$)(e),
          b = "USD" == r,
          m = t != (o ?? n),
          d = t < i,
          y = !!l && t > l,
          S = !!a && t > a * O,
          C = !!a && t < a / O,
          h = !!a && t < a && !!c,
          P = !!a && t == a && !!c,
          f =
            (y && (0, w.we)("#PricingDashboard_PriceIncreaseDisallowed")) ||
            (d &&
              (0, w.we)(
                "#PricingDashboard_PriceTooLow",
                (0, I.Wx)(i, r).join(""),
              )) ||
            (S &&
              (0, w.we)(
                "#PricingDashboard_PriceMuchHigherThanGuidelines",
                (0, I.Wx)(a, r).join(""),
              )) ||
            (C &&
              (0, w.we)(
                "#PricingDashboard_PriceMuchLowerThanGuidelines",
                (0, I.Wx)(a, r).join(""),
              )) ||
            (h &&
              (0, w.we)(
                "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                c,
              )) ||
            (P && (0, w.we)("#PricingDashboard_PriceCheap", c)),
          g = y || d,
          E = S || C,
          _ = g || E || h,
          D = !(m || !o || (n && o == n)),
          k = 4 == u?.eState,
          A = (0, p.A)(
            N().PriceCell,
            b && N().USD,
            m && N().ChangedLocally,
            D && N().ProposedPrice,
            k && N().ApprovedCanPublish,
            _ && N().WarningPrice,
            E && N().SevereWarningPrice,
            g && N().BadPrice,
          );
        return s.useMemo(
          () => ({
            strPriceWarning: f,
            strClassName: A,
            bBadPrice: g,
            bShowSevereWarning: E,
            bShowWarningIcon: _,
          }),
          [f, A, g, E, _],
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
            ? (0, w.we)("#PricingDashboard_PriceIncreaseBy", e + "%")
            : (0, w.we)("#PricingDashboard_PriceLowerBy", e + "%")),
            (l = (0, p.A)(N().PriceChange, c && N().PriceIncrease)),
            (o = s.createElement(
              "div",
              { className: N().PriceChangeArrow },
              s.createElement(h.i3G, { angle: c ? 0 : 180 }),
            )),
            (n = e + "%");
        } else
          (n = (0, w.we)("#PricingDashboard_PriceIsNew_Short")),
            (l = (0, p.A)(N().NewPrice));
        return s.createElement(
          v.he,
          {
            className: l,
            strTooltipClassname: N().HoverToolTip,
            toolTipContent: i,
            direction: "top",
          },
          o,
          n,
        );
      }
      function K(e) {
        return new Date(1e3 * e).toLocaleString(w.pf.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
    },
    87864: (e, r, t) => {
      "use strict";
      t.d(r, { x: () => s });
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
      function s(e, r) {
        const t = (function (e) {
            return { ...i, ...o[e], eCurrency: e };
          })(r),
          {
            strSymbol: n,
            bSuffixSymbol: s,
            bSpaceForSymbol: l,
            bWholeUnitsOnly: c,
            strDecimalSymbol: a,
            strThousandsSeparator: u,
          } = t,
          b = e < 0,
          m = c && e % 100 == 0;
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
          C = l ? " " : "",
          h = b ? "-" : "";
        return s ? `${h}${S}${C}${n}` : `${h}${n}${C}${S}`;
      }
    },
  },
]);
