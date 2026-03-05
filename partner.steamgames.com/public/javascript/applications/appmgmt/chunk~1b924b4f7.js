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
        PackagePricingContext: "_3_niTWrZ8h834BjbLqyByP",
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
    69041: (e) => {
      e.exports = {
        Button: "_0BH1ydyFmSnUvoVK2hIc",
        "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
        Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
        "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
        "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
        "Variant-default": "RttCMpsTJp47IkzXpZYvA",
        "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
        "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
        "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
        "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
        Width: "_3sJrbUPuxxtvf7RM9OYpwU",
        MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
      };
    },
    73406: (e) => {
      e.exports = {
        Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
        LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
        "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
        "Size-2": "_4YMNfb67K5DdLQo1iUILX",
        "Size-3": "_389OPmdZoebw42_AlsUFxi",
        "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
        "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
        "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
        "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
        ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
      };
    },
    16180: (e) => {
      e.exports = {
        Option: "_3a3fNdwhCItYEc1SsUNP",
        RadioCircle: "_13ZbEe1M2PJ-21o9RTar64",
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
    29903: (e, r, n) => {
      "use strict";
      n.d(r, {
        mK: () => G,
        Gy: () => z,
        sh: () => R,
        T6: () => W,
        Oo: () => U,
      });
      var t = n(7850),
        o = n(91934),
        i = n(64238),
        s = n.n(i),
        a = n(90626),
        c = n(56011),
        l = n(65697);
      function d(e) {
        const {
            direction: r,
            ignoreHorizontal: n,
            ignoreVertical: t,
            dismissOnClick: i,
            interactionMode: s = 0,
          } = e,
          d = (0, a.useRef)(null),
          u = (0, a.useRef)(!1),
          b = (0, a.useRef)(!1),
          m = (0, a.useRef)(null),
          [S, h] = (0, a.useState)(!1),
          [p, y] = (0, a.useMemo)(
            () =>
              (function (e) {
                const [r, n] = (0, o.x)(e, "-");
                return "left" === r || "right" === r ? [void 0, r] : [r, n];
              })(r),
            [r],
          ),
          C = (0, a.useCallback)(() => {
            if (!m.current || !d.current) return;
            const e = m.current.getBoundingClientRect();
            let r = y;
            const o = m.current.matches(":dir(rtl)");
            o && ("left" === y ? (r = "right") : "right" === y && (r = "left")),
              d.current.style.setProperty("--parentWidth", `${e.width}px`),
              d.current.style.setProperty("--parentHeight", `${e.height}px`),
              n ||
                ("left" === r
                  ? p
                    ? ((d.current.style.left = "unset"),
                      (d.current.style.right =
                        document.documentElement.clientWidth - e.right + "px"))
                    : ((d.current.style.left = "unset"),
                      (d.current.style.right =
                        document.documentElement.clientWidth - e.left + "px"))
                  : "right" === r
                    ? p
                      ? ((d.current.style.left = `${e.left}px`),
                        (d.current.style.right = "unset"))
                      : ((d.current.style.left = `${e.right}px`),
                        (d.current.style.right = "unset"))
                    : void 0 === r &&
                      (o
                        ? ((d.current.style.left = "unset"),
                          (d.current.style.right =
                            document.documentElement.clientWidth -
                            e.right +
                            "px"))
                        : ((d.current.style.left = `${e.left}px`),
                          (d.current.style.right = "unset")))),
              t ||
                ("down" === p
                  ? ((d.current.style.top = `${e.bottom}px`),
                    (d.current.style.bottom = "unset"),
                    d.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - e.bottom + "px",
                    ))
                  : "up" === p
                    ? ((d.current.style.top = "unset"),
                      (d.current.style.bottom =
                        document.documentElement.clientHeight - e.top + "px"),
                      d.current.style.setProperty(
                        "--availableHeight",
                        `${e.top}px`,
                      ))
                    : void 0 === p &&
                      ((d.current.style.top = `${e.top}px`),
                      (d.current.style.bottom = "unset"),
                      d.current.style.setProperty(
                        "--availableHeight",
                        document.documentElement.clientHeight - e.top + "px",
                      )));
          }, [y, n, t, p]),
          P = (0, a.useMemo)(() => {
            if (m.current) return (0, c._f)(m.current);
          }, [m.current]);
        (0, a.useEffect)(
          () =>
            S
              ? (d.current?.showPopover(),
                P?.addEventListener("scroll", C),
                () => P?.removeEventListener("scroll", C))
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  d.current?.hidePopover(),
                () => {}),
          [S, C, P],
        );
        const g = (0, a.useCallback)(() => {
            C(), h(!0), (b.current = !0);
          }, [C]),
          _ = (0, a.useCallback)(() => {
            (b.current = !1), u.current || h(!1);
          }, []),
          f = (0, a.useCallback)(() => {
            (u.current = !0), h(!0);
          }, []),
          x = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) && f();
            },
            [f],
          ),
          D = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) && f();
            },
            [f],
          ),
          k = (0, a.useCallback)(() => {
            (u.current = !1), b.current || h(!1);
          }, []),
          v = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) && k();
            },
            [k],
          ),
          I = (0, a.useCallback)(() => {
            k(), _();
          }, [k, _]),
          E = (0, a.useCallback)(
            (e) => {
              "Enter" === e.key && (e.preventDefault(), S ? _() : g());
            },
            [_, g, S],
          ),
          T = (0, a.useCallback)(
            (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                d.current?.contains(e.relatedTarget) ||
                _();
            },
            [_],
          ),
          A = (0, a.useCallback)(
            (e) => {
              2 === s && g();
            },
            [s, g],
          ),
          j = (0, a.useCallback)(
            (e) => {
              const r =
                  e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
                n = !e.relatedTarget && !u.current;
              (r || n) && (k(), h(!1));
            },
            [k],
          ),
          F = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) &&
                (S && i ? I() : u.current && g());
            },
            [I, i, S, g],
          ),
          w = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) &&
                ("Enter" === e.key && S && i ? I() : g(),
                "Escape" === e.key && S && (I(), e.stopPropagation()));
            },
            [I, i, S, g],
          );
        let O;
        0 !== s || S
          ? 1 === s && (O = S ? _ : g)
          : (O = (e) => {
              e.preventDefault(), g();
            });
        const N = {
            "aria-expanded": S,
            role: "button",
            onMouseEnter: 0 === s ? g : void 0,
            onMouseLeave: 0 === s ? _ : void 0,
            onClick: O,
            ref: m,
            onKeyDown: E,
            onFocus: A,
            onBlur: T,
          },
          R = {
            popover: "manual",
            ref: d,
            onMouseEnter: D,
            onMouseLeave: v,
            onFocus: x,
            onBlur: j,
            onClick: F,
            onKeyDown: w,
            className: l.PopoverMenu,
          };
        return (
          (0, a.useImperativeHandle)(
            e.ref,
            () => ({ show: g, hide: _, close: I }),
            [g, _, I],
          ),
          { isShowingMenu: S, triggerProps: N, menuProps: R, closeMenu: I }
        );
      }
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (await n.e(8433).then(n.bind(n, 8433))).apply();
        }
      })();
      var u = n(7445),
        b = n(76217);
      function m(e, r) {
        return (n) => {
          e?.(n), r?.(n);
        };
      }
      function S(e) {
        const {
            direction: r,
            interactionMode: n = 0,
            ignoreHorizontal: o,
            ignoreVertical: i,
            dismissOnClick: c,
            menuTarget: l,
            className: S,
            children: h,
            renderWhenClosed: p = !0,
            ...y
          } = e,
          {
            isShowingMenu: C,
            triggerProps: P,
            menuProps: g,
            closeMenu: _,
          } = d(e),
          f = a.useRef(null),
          x = a.useRef(null);
        return (
          a.useEffect(() => {
            C
              ? x.current?.TakeFocus()
              : x.current?.BFocusWithin() && f.current?.TakeFocus();
          }, [C]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              a.cloneElement(l, {
                ...P,
                onMouseEnter: m(l.props.onMouseEnter, P.onMouseEnter),
                onMouseLeave: m(l.props.onMouseLeave, P.onMouseLeave),
                navRef: f,
              }),
              (0, t.jsx)(b.Z, {
                ...y,
                ...g,
                className: s()(g.className, S),
                navRef: x,
                onCancel: _,
                onFocusWithin: (e) => !e && _(),
                childFocusDisabled: !C,
                children: (0, t.jsx)(u.q, { children: (p || C) && h }),
              }),
            ],
          })
        );
      }
      var h = n(48174),
        p = n(87864),
        y = n(88267),
        C = n(42836),
        P = n(12155),
        g = n(52038),
        _ = n(31389),
        f = n.n(_),
        x = n(47184);
      function D(e) {
        const r = (0, t.jsx)("button", {
            className: f().PriceGuidelinesPicker,
            children: (0, t.jsx)(P.GB9, {}),
          }),
          n = a.useRef(null);
        return (0, t.jsx)(S, {
          menuTarget: r,
          direction: "down",
          interactionMode: 1,
          ref: n,
          children: (0, t.jsx)(k, { onSelect: () => n.current?.close(), ...e }),
        });
      }
      function k(e) {
        const {
            fnGetUSDPriceInCents: r,
            fnOnUpdate: n,
            strDescription: o,
            bCanSetToFree: i,
            nPackageID: s,
            onSelect: a,
            appids: c,
          } = e,
          l = (0, h.cT)(),
          d = r();
        if (!l) return null;
        const u = l.GetUSDPricePointsInCents();
        return (0, t.jsxs)("div", {
          className: f().GuidelinesPanel,
          children: [
            (0, t.jsx)("div", {
              className: f().GuidelinesDescription,
              children: o || x.g.Localize("#PricingGuideline_Default"),
            }),
            (0, t.jsxs)("div", {
              className: f().GuidelinesGrid,
              children: [
                void 0 !== i &&
                  (0, t.jsx)(
                    "div",
                    {
                      className: f().GridElement,
                      children: (0, t.jsx)(C.K, {
                        nPackageID: s,
                        strButtonOverride: x.g.Localize(
                          "#FreeOnDemand_InlineOption",
                        ),
                        appids: c,
                      }),
                    },
                    "settofree",
                  ),
                u.map((e) =>
                  (0, t.jsx)(
                    "button",
                    {
                      onClick: () => {
                        a(), n(e);
                      },
                      className: (0, g.A)({
                        [f().GridElement]: !0,
                        [f().CurrentPrice]: d == e,
                      }),
                      children: (0, p.x)(e, y.AI.k_ECurrencyCodeUSD),
                    },
                    e,
                  ),
                ),
              ],
            }),
          ],
        });
      }
      var v = n(17084),
        I = n(9554),
        E = n(16676),
        T = n(32754),
        A = n(61859),
        j = n(96434),
        F = n.n(j),
        w = n(14336);
      let O = null;
      function N(e) {
        const { packageID: r, strPriceKey: n } = e,
          {
            nPriceInCents: o,
            nPublishedPriceInCents: i,
            nProposedPriceInCents: s,
            nSuggestedPriceInCents: a,
            fnSetPrice: c,
          } = (0, v.xQ)(r, n),
          { nPriceInCents: l } = (0, v.xQ)(r, "USD"),
          d = !(!s || (i && s == i)),
          u = (0, v.d$)(r),
          b = u && G(u.rtSubmitted),
          { data: m } = (0, w.js)(u?.submitterID),
          S = m ? m.m_strPlayerName : u?.submitterID;
        return (i || d || a) && O == r + n
          ? (0, t.jsxs)("div", {
              className: F().PricePopout,
              children: [
                !!i &&
                  (0, t.jsxs)(T.he, {
                    className: F().DetailRow,
                    direction: "left",
                    toolTipContent: (0, A.we)(
                      "#PricingDashboard_CurrentPriceOnStore_ttip",
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: F().DetailLabel,
                        children: (0, A.we)(
                          "#PricingDashboard_CurrentPriceOnStore",
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: F().DetailPrice,
                        children: (0, v.Wx)(i, n).join(""),
                      }),
                      (0, t.jsx)(T.he, {
                        className: (0, g.A)(
                          F().DetailButton,
                          i == o && F().Disabled,
                        ),
                        onClick: () => c(i),
                        bDisabled: i == o,
                        toolTipContent: (0, A.we)(
                          "#PricingDashboard_UseThisOldPrice_ttip",
                        ),
                        children: (0, A.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                d &&
                  (0, t.jsxs)(T.he, {
                    className: F().DetailRow,
                    direction: "left",
                    toolTipContent: (0, A.we)(
                      "#PricingDashboard_ProposedPrice_ttip",
                      S,
                      b,
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: F().DetailLabel,
                        children: (0, A.we)("#PricingDashboard_ProposedPrice"),
                      }),
                      (0, t.jsx)("div", {
                        className: F().DetailPrice,
                        children: (0, v.Wx)(s, n).join(""),
                      }),
                      (0, t.jsx)(T.he, {
                        className: (0, g.A)(
                          F().DetailButton,
                          s == o && F().Disabled,
                        ),
                        onClick: () => c(s),
                        bDisabled: s == o,
                        toolTipContent: (0, A.we)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, A.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                !!a &&
                  (0, t.jsxs)(T.he, {
                    className: F().DetailRow,
                    direction: "left",
                    toolTipContent: (0, A.we)(
                      "#PricingDashboard_SuggestedPrice_ttip",
                      (0, v.Wx)(l, "USD").join(""),
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: F().DetailLabel,
                        children: (0, A.we)("#PricingDashboard_SuggestedPrice"),
                      }),
                      (0, t.jsx)("div", {
                        className: F().DetailPrice,
                        children: (0, v.Wx)(a, n).join(""),
                      }),
                      (0, t.jsx)(T.he, {
                        className: (0, g.A)(
                          F().DetailButton,
                          a == o && F().Disabled,
                        ),
                        onClick: () => c(a),
                        bDisabled: a == o,
                        toolTipContent: (0, A.we)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, A.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
              ],
            })
          : null;
      }
      function R(e) {
        const { cell: r, row: n } = e,
          o = n.original.packageID,
          i = r.getValue(),
          {
            nPriceInCents: s,
            nPublishedPriceInCents: c,
            nProposedPriceInCents: l,
            fnSetPrice: d,
          } = (0, v.xQ)(o, i),
          [u, b, m] = (0, v.Wx)(s, i),
          h = (0, v.Gs)(i),
          p = a.useRef(void 0),
          { strClassName: y } = M(o, i),
          C = "USD" == i,
          P = l ?? c,
          g = s != P;
        return (0, t.jsxs)("div", {
          ref: p,
          onKeyDown: I.nm,
          className: y,
          children: [
            g && (0, t.jsx)(z, { nPriceInCents: s, nSavedPriceInCents: P }),
            (0, t.jsx)("div", { className: F().PricePrefix, children: u && u }),
            (0, t.jsx)(S, {
              menuTarget: (0, t.jsx)("div", {
                className: F().EditablePrice,
                children: (0, t.jsx)(E.pd, {
                  value: b,
                  className: F().PriceInput,
                  onChange: (e) => {
                    const r = e.target.value.replace(/[^0-9]/g, "");
                    let n = Number(r || 0);
                    if (Number.isNaN(n)) return;
                    h.bWholeUnitsOnly && (n *= 100);
                    const t = 2147483647;
                    n > t && (n = t), d(n);
                  },
                  onFocus: () => {
                    O = o + i;
                  },
                }),
              }),
              direction: "up",
              interactionMode: 2,
              dismissOnClick: !0,
              renderWhenClosed: !1,
              children: (0, t.jsx)(N, { packageID: o, strPriceKey: i }),
            }),
            (0, t.jsx)("div", { className: F().PriceSuffix, children: m && m }),
            C &&
              (0, t.jsx)(L, {
                packageID: o,
                appids: n.original.appids,
                bCanSetToFree: n.original.bCanSetToFree,
              }),
            (0, t.jsx)(W, { packageID: o, strPriceKey: i }),
          ],
        });
      }
      function L(e) {
        const { packageID: r, appids: n, bCanSetToFree: o } = e,
          { fnApplyGuidelines: i } = (0, h.gC)((0, v.$i)());
        return (0, t.jsx)(D, {
          fnGetUSDPriceInCents: () => (0, v.FR)(r, "USD"),
          fnOnUpdate: (e) => i(r, e),
          strDescription: (0, A.we)(
            "#PricingDashboard_GuidelinesPickerDescription",
          ),
          nPackageID: r,
          appids: n,
          bCanSetToFree: o,
        });
      }
      function W(e) {
        const { packageID: r, strPriceKey: n } = e,
          { strPriceWarning: o, bBadPrice: i, bShowWarningIcon: s } = M(r, n);
        return s
          ? (0, t.jsx)(T.he, {
              className: F().PriceAlert,
              strTooltipClassname: F().HoverToolTip,
              toolTipContent: o,
              direction: "top",
              children: (0, t.jsx)(P.eTF, {
                color: i ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            })
          : null;
      }
      const U = 2;
      function M(e, r) {
        const {
            nPriceInCents: n,
            nPublishedPriceInCents: t,
            nProposedPriceInCents: o,
            nMinPriceInCents: i,
            nMaxPriceInCents: s,
            nMaxDiscountPercentage: c,
            nSuggestedPriceInCents: l,
          } = (0, v.xQ)(e, r),
          d = (0, v.d$)(e),
          u = "USD" == r,
          b = n != (o ?? t),
          m = n < i,
          S = !!s && n > s,
          h = !!l && n > l * U,
          p = !!l && n < l / U,
          y = !!l && n < l && !!c,
          C = !!l && n == l && !!c,
          P =
            (S && (0, A.we)("#PricingDashboard_PriceIncreaseDisallowed")) ||
            (m &&
              (0, A.we)(
                "#PricingDashboard_PriceTooLow",
                (0, v.Wx)(i, r).join(""),
              )) ||
            (h && !1) ||
            (h &&
              (0, A.we)(
                "#PricingDashboard_PriceMuchHigherThanGuidelines",
                (0, v.Wx)(l, r).join(""),
              )) ||
            (p &&
              (0, A.we)(
                "#PricingDashboard_PriceMuchLowerThanGuidelines",
                (0, v.Wx)(l, r).join(""),
              )) ||
            (y &&
              (0, A.we)(
                "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                c,
              )) ||
            (C && (0, A.we)("#PricingDashboard_PriceCheap", c)),
          _ = S || m,
          f = h || p,
          x = _ || f || y,
          D = !(b || !o || (t && o == t)),
          k = 4 == d?.eState,
          I = (0, g.A)(
            F().PriceCell,
            u && F().USD,
            b && F().ChangedLocally,
            D && F().ProposedPrice,
            k && F().ApprovedCanPublish,
            x && F().WarningPrice,
            f && F().SevereWarningPrice,
            _ && F().BadPrice,
          );
        return a.useMemo(
          () => ({
            strPriceWarning: P,
            strClassName: I,
            bBadPrice: _,
            bShowSevereWarning: f,
            bShowWarningIcon: x,
          }),
          [P, I, _, f, x],
        );
      }
      function z(e) {
        const { nPriceInCents: r, nSavedPriceInCents: n } = e;
        let o = null,
          i = null,
          s = null,
          a = null;
        if (n) {
          const e = Math.ceil((100 * (r - n)) / n),
            c = r > n;
          (s = c
            ? (0, A.we)("#PricingDashboard_PriceIncreaseBy", e + "%")
            : (0, A.we)("#PricingDashboard_PriceLowerBy", e + "%")),
            (a = (0, g.A)(F().PriceChange, c && F().PriceIncrease)),
            (i = (0, t.jsx)("div", {
              className: F().PriceChangeArrow,
              children: (0, t.jsx)(P.i3G, { angle: c ? 0 : 180 }),
            })),
            (o = e + "%");
        } else
          (o = (0, A.we)("#PricingDashboard_PriceIsNew_Short")),
            (a = (0, g.A)(F().NewPrice));
        return (0, t.jsxs)(T.he, {
          className: a,
          strTooltipClassname: F().HoverToolTip,
          toolTipContent: s,
          direction: "top",
          children: [i, o],
        });
      }
      function G(e) {
        return new Date(1e3 * e).toLocaleString(A.pf.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
    },
    53965: (e, r, n) => {
      "use strict";
      n.d(r, { $: () => p });
      var t = n(7850),
        o = n(64238),
        i = n.n(o),
        s = n(69041),
        a = n(75659),
        c = n(41324),
        l = n(73406),
        d = n(90534),
        u = n(53971);
      function b(e) {
        const {
          size: r = "3",
          loading: n = !0,
          children: o,
          color: i,
          variant: s,
          ...a
        } = e;
        return o || !n
          ? (0, t.jsxs)(d.az, {
              position: "relative",
              ...a,
              width: "fit-content",
              children: [
                (0, t.jsx)("div", {
                  "data-visibility": !n,
                  className: l.ChildContainer,
                  children: o,
                }),
                n &&
                  (0, t.jsx)(u.s, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, t.jsx)(m, { size: r, color: i, variant: s }),
                  }),
              ],
            })
          : (0, t.jsx)(m, { size: r, color: i, variant: s, ...a });
      }
      function m(e) {
        const { className: r, color: n, ...o } = (0, c.mz)(e, S);
        return (0, t.jsx)("div", {
          "data-accent-color": n,
          className: i()(r, l.Spinner),
          ...o,
        });
      }
      const S = [
        ...a.L,
        { prop: "size", responsive: !0, className: (e) => l[`Size-${e}`] },
        { prop: "variant", className: (e) => l[`Variant-${e}`] },
      ];
      const h = [
          ...a.L,
          { prop: "size", responsive: !0, className: (e) => s[`Size-${e}`] },
          { prop: "variant", className: (e) => s[`Variant-${e}`] },
          { prop: "color", dataProperty: (e) => ["accent-color", `${e}`] },
          {
            prop: "width",
            className: s.Width,
            cssProperty: "--width",
            responsive: !0,
          },
          {
            prop: "minWidth",
            className: s.MinWidth,
            cssProperty: "--min-width",
            responsive: !0,
          },
        ],
        p = function (e) {
          const {
              variant: r = "default",
              size: n = "2",
              minWidth: o = "fit-content",
              color: a,
              loading: l,
              children: d,
              onClick: u,
              icon: m,
              ...S
            } = e,
            p = l
              ? (0, t.jsx)(b, {
                  size: n,
                  color: a,
                  variant: "bright",
                  children: d,
                })
              : d,
            y = l ? void 0 : u;
          return (0, t.jsx)("button", {
            type: "button",
            ...(0, c.mz)(
              {
                ...S,
                variant: r,
                size: n,
                minWidth: o,
                color: a,
                className: i()(s.Button, m && s.Icon),
                onClick: y,
              },
              h,
            ),
            children: p,
          });
        };
    },
    87864: (e, r, n) => {
      "use strict";
      n.d(r, { x: () => s });
      var t = n(88267);
      const o = {
          [t.AI.k_ECurrencyCodeInvalid]: {},
          [t.AI.k_ECurrencyCodeUSD]: { strSymbol: "$" },
          [t.AI.k_ECurrencyCodeGBP]: { strSymbol: "£" },
          [t.AI.k_ECurrencyCodeEUR]: { strSymbol: "€" },
          [t.AI.k_ECurrencyCodeCHF]: { strSymbol: "CHF" },
          [t.AI.k_ECurrencyCodeRUB]: {
            strSymbol: "руб.",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: "",
          },
          [t.AI.k_ECurrencyCodePLN]: {
            strSymbol: "zł",
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeBRL]: {
            strSymbol: "R$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeJPY]: {
            strSymbol: "¥",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeNOK]: {
            strSymbol: "kr",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeIDR]: {
            strSymbol: "Rp",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeMYR]: { strSymbol: "RM" },
          [t.AI.k_ECurrencyCodePHP]: { strSymbol: "P" },
          [t.AI.k_ECurrencyCodeSGD]: { strSymbol: "S$" },
          [t.AI.k_ECurrencyCodeTHB]: { strSymbol: "฿" },
          [t.AI.k_ECurrencyCodeVND]: {
            strSymbol: "₫",
            bWholeUnitsOnly: !0,
            bSuffixSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeKRW]: {
            strSymbol: "₩",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeTRY]: {
            strSymbol: "TL",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeUAH]: {
            strSymbol: "₴",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeMXN]: { strSymbol: "Mex$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeCAD]: { strSymbol: "CDN$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeAUD]: { strSymbol: "A$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeNZD]: { strSymbol: "NZ$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeCNY]: { strSymbol: "¥", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeINR]: {
            strSymbol: "₹",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
          },
          [t.AI.k_ECurrencyCodeCLP]: {
            strSymbol: "CLP$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodePEN]: { strSymbol: "S/." },
          [t.AI.k_ECurrencyCodeCOP]: {
            strSymbol: "COL$",
            bSpaceForSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeZAR]: {
            strSymbol: "R",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ".",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeHKD]: { strSymbol: "HK$", bSpaceForSymbol: !0 },
          [t.AI.k_ECurrencyCodeTWD]: {
            strSymbol: "NT$",
            bWholeUnitsOnly: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeSAR]: {
            strSymbol: "SR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeAED]: {
            strSymbol: "AED",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeSEK]: {
            strSymbol: "kr",
            bSpaceForSymbol: !0,
            bSuffixSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeARS]: {
            strSymbol: "ARS$",
            bSpaceForSymbol: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeILS]: { strSymbol: "₪" },
          [t.AI.k_ECurrencyCodeBYN]: { strSymbol: "Br" },
          [t.AI.k_ECurrencyCodeKZT]: {
            strSymbol: "₸",
            bSuffixSymbol: !0,
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: " ",
          },
          [t.AI.k_ECurrencyCodeKWD]: {
            strSymbol: "KD",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeQAR]: {
            strSymbol: "QR",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeCRC]: {
            strSymbol: "₡",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeUYU]: {
            strSymbol: "$U",
            bWholeUnitsOnly: !0,
            strDecimalSymbol: ",",
            strThousandsSeparator: ".",
          },
          [t.AI.k_ECurrencyCodeBGN]: {
            strSymbol: "лв",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeHRK]: {
            strSymbol: "kn",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeCZK]: {
            strSymbol: "Kč",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeDKK]: {
            strSymbol: "kr.",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeHUF]: {
            strSymbol: "Ft",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeRON]: {
            strSymbol: "lei",
            bSuffixSymbol: !0,
            bSpaceForSymbol: !0,
          },
          [t.AI.k_ECurrencyCodeMax]: {},
        },
        i = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: t.AI.k_ECurrencyCodeInvalid,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function s(e, r) {
        const n = (function (e) {
            return { ...i, ...o[e], eCurrency: e };
          })(r),
          {
            strSymbol: t,
            bSuffixSymbol: s,
            bSpaceForSymbol: a,
            bWholeUnitsOnly: c,
            strDecimalSymbol: l,
            strThousandsSeparator: d,
          } = n,
          u = e < 0,
          b = c && e % 100 == 0;
        u && (e = -e);
        const m = [];
        for (let r = 0; r < 2; r++)
          b || m.push(e % 10), (e = Math.floor(e / 10));
        !b && l && m.push(l);
        let S = 0;
        do {
          S++ % 3 == 0 && S > 2 && d && m.push(d),
            m.push(e % 10),
            (e = Math.floor(e / 10));
        } while (e > 0);
        const h = m.reverse().join(""),
          p = a ? " " : "",
          y = u ? "-" : "";
        return s ? `${y}${h}${p}${t}` : `${y}${t}${p}${h}`;
      }
    },
    42836: (e, r, n) => {
      "use strict";
      n.d(r, { K: () => x, T: () => v });
      var t = n(7850),
        o = n(53965),
        i = n(90534),
        s = n(20187),
        a = n(90626),
        c = n(16180),
        l = n(53971);
      const d = Object.assign(
          function (e) {
            const {
              value: r,
              onValueChange: n,
              options: o,
              getOptionLabel: i,
              ...s
            } = e;
            return (0, t.jsx)(d.Root, {
              value: r,
              onValueChange: n,
              ...s,
              children: o.map((e) => {
                const r = i ? i(e) : e;
                return (0, t.jsx)(d.Option, { value: e, children: r }, r);
              }),
            });
          },
          {
            Root: function (e) {
              const { value: r, onValueChange: n, ...o } = e,
                i = (0, a.useMemo)(
                  () => ({ value: r, onValueChange: n }),
                  [r, n],
                );
              return (0, t.jsx)(u, {
                value: i,
                children: (0, t.jsx)(l.s, {
                  direction: "column",
                  gap: "2",
                  role: "radiogroup",
                  ...o,
                }),
              });
            },
            Option: function (e) {
              const { value: r, ref: n, children: o } = e,
                i = (0, a.useContext)(u);
              if (!i)
                return (
                  console.error(
                    "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
                  ),
                  null
                );
              const { value: d, onValueChange: b } = i,
                m = d === r,
                S = () => {
                  m || b(r);
                };
              return (0, t.jsxs)(l.s, {
                ref: n,
                role: "radio",
                "aria-checked": m,
                onClick: S,
                onKeyDown: (e) => {
                  " " === e.key &&
                    (S(), e.preventDefault(), e.stopPropagation());
                },
                tabIndex: m ? 0 : -1,
                cursor: "default",
                gap: "2",
                className: c.Option,
                children: [
                  (0, t.jsx)("div", { className: c.RadioCircle }),
                  (0, t.jsx)(s.EY, { children: o }),
                ],
              });
            },
          },
        ),
        u = (0, a.createContext)(null);
      var b,
        m = n(64753),
        S = n(9154),
        h = n(32754),
        p = n(24484),
        y = n(47184),
        C = n(30470);
      !(function (e) {
        (e.k_FreeToPlay = "freetoplay"), (e.k_Free = "free");
      })(b || (b = {}));
      var P = n(8527),
        g = n(51614);
      var _ = n(71298),
        f = n(47911);
      function x(e) {
        const {
            strButtonOverride: r,
            appids: n,
            nPackageID: i,
            onClick: s,
          } = e,
          a = v(),
          [c, l, d] = (0, m.uD)();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(h.Gq, {
              toolTipContent: a
                ? y.g.Localize("#FreeOnDemand_Button_ttip")
                : y.g.Localize("#FreeOnDemand_Button_disabled_ttip"),
              children: (0, t.jsx)(o.$, {
                onClick: () => {
                  s?.(), l();
                },
                children: r || y.g.Localize("#FreeOnDemand_Button"),
              }),
            }),
            (0, t.jsx)(S.EN, {
              active: c,
              children:
                a && n && 1 == n.length
                  ? (0, t.jsx)(D, {
                      closeModal: d,
                      nPackageID: i,
                      nAppID: n[0],
                    })
                  : (0, t.jsx)(k, { closeModal: d }),
            }),
          ],
        });
      }
      function D(e) {
        const { closeModal: r, nAppID: n, nPackageID: o } = e,
          [c, l] = (0, a.useState)(b.k_FreeToPlay),
          u = (function (e, r) {
            return (0, g.n)({
              mutationKey: ["settofree", r],
              mutationFn: async (n) => {
                const { displayOption: t, fnOnStoreSaveSucceed: o } = n;
                if (!e || !r) throw new Error("Invalid parameters provided");
                {
                  const r = new FormData();
                  if (
                    (r.set("sessionid", (0, p.KC)()),
                    r.set("appid", "" + e),
                    r.set(
                      "displaytext",
                      t == b.k_Free
                        ? "#PurchaseButton_Free"
                        : "#PurchaseButton_FreeToPlay",
                    ),
                    !(
                      await fetch(
                        `${P.TS.PARTNER_BASE_URL}store/ajaxupdatef2pstore`,
                        { method: "POST", credentials: "include", body: r },
                      )
                    ).ok)
                  )
                    throw new Error(
                      y.g.Localize("#FreeOnDemand_Store_Error", e),
                    );
                }
                o && o();
                {
                  const e = new FormData();
                  if (
                    (e.set("sessionid", (0, p.KC)()),
                    e.set("action", "save"),
                    e.set("billing_type", "12"),
                    !(
                      await fetch(
                        `${P.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${r}`,
                        { method: "POST", credentials: "include", body: e },
                      )
                    ).ok)
                  )
                    throw new Error(
                      y.g.Localize("#FreeOnDemand_Package_Error", r),
                    );
                }
              },
            });
          })(n, o),
          m = (0, _.vs)();
        return m.bLoading
          ? (0, t.jsx)(_.Hh, {
              state: m,
              strDialogTitle: y.g.Localize("#FreeOnDemand_Title"),
              closeModal: () => {
                window.location.replace(
                  `${C.TS.PARTNER_BASE_URL}store/packagelanding/${o}`,
                ),
                  r();
              },
            })
          : (0, t.jsxs)(S.o0, {
              strTitle: y.g.Localize("#FreeOnDemand_Title"),
              strDescription: y.g.Localize("#FreeOnDemand_Desc"),
              strOKButtonText: y.g.Localize("#FreeOnDemand_Button_Confirm"),
              onCancel: r,
              onOK: async () => {
                try {
                  m.fnSetLoading(!0),
                    m.fnSetThrobber(
                      y.g.Localize("#FreeOnDemand_Convert_Store"),
                    ),
                    await u.mutateAsync({
                      displayOption: c,
                      fnOnStoreSaveSucceed: () => {
                        m.fnSetThrobber(
                          y.g.Localize("#FreeOnDemand_Convert_Package"),
                        );
                      },
                    }),
                    m.fnSetSuccess(!0),
                    m.fnSetStrSuccess(
                      y.g.Localize("#FreeOnDemand_ConvertSuccess"),
                    );
                } catch (e) {
                  m.fnSetError(!0),
                    m.fnSetStrError(
                      e instanceof Error
                        ? e.message
                        : f.Z.Localize("#Error_ErrorCommunicatingWithNetwork"),
                    );
                }
              },
              children: [
                (0, t.jsx)("br", {}),
                (0, t.jsxs)(i.az, {
                  paddingTop: "4",
                  children: [
                    (0, t.jsx)(s.EY, {
                      size: "4",
                      children: y.g.Localize("#FreeOnDemand_Radio"),
                    }),
                    (0, t.jsx)(i.az, {
                      padding: "4",
                      background: "greyneutral-6",
                      radius: "sm",
                      children: (0, t.jsx)(d, {
                        value: c,
                        options: [b.k_FreeToPlay, b.k_Free],
                        getOptionLabel: (e) =>
                          e == b.k_Free
                            ? y.g.Localize("#FreeOnDemand_Radio_Free")
                            : y.g.Localize("#FreeOnDemand_Radio_FreeToPlay"),
                        onValueChange: l,
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
      function k(e) {
        const { closeModal: r } = e,
          n = `${C.TS.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
        return (0, t.jsxs)(S.KG, {
          strTitle: y.g.Localize("#FreeOnDemand_Title"),
          strDescription: y.g.Localize("#FreeOnDemand_Desc_NotPermitted"),
          closeModal: r,
          children: [
            (0, t.jsx)("br", {}),
            (0, t.jsx)("br", {}),
            (0, t.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              children: n,
            }),
          ],
        });
      }
      function v() {
        const [e] = (0, a.useState)(
          (0, p.Tc)("bCanSetFree", "application_config"),
        );
        return e;
      }
    },
    47184: (e, r, n) => {
      "use strict";
      n.d(r, { g: () => i });
      var t = n(42475);
      const o = {};
      (o.arabic = () => n.e(6873).then(n.t.bind(n, 46873, 19))),
        (o.brazilian = () => n.e(1365).then(n.t.bind(n, 1365, 19))),
        (o.bulgarian = () => n.e(3966).then(n.t.bind(n, 83966, 19))),
        (o.czech = () => n.e(1360).then(n.t.bind(n, 51360, 19))),
        (o.danish = () => n.e(8292).then(n.t.bind(n, 98292, 19))),
        (o.dutch = () => n.e(4993).then(n.t.bind(n, 44993, 19))),
        (o.english = () => n.e(3703).then(n.t.bind(n, 3703, 19))),
        (o.finnish = () => n.e(6376).then(n.t.bind(n, 86376, 19))),
        (o.french = () => n.e(7325).then(n.t.bind(n, 67325, 19))),
        (o.german = () => n.e(9263).then(n.t.bind(n, 69263, 19))),
        (o.greek = () => n.e(4399).then(n.t.bind(n, 14399, 19))),
        (o.hungarian = () => n.e(1706).then(n.t.bind(n, 91706, 19))),
        (o.indonesian = () => n.e(9341).then(n.t.bind(n, 69341, 19))),
        (o.italian = () => n.e(7511).then(n.t.bind(n, 97511, 19))),
        (o.japanese = () => n.e(330).then(n.t.bind(n, 40330, 19))),
        (o.koreana = () => n.e(6252).then(n.t.bind(n, 96252, 19))),
        (o.latam = () => n.e(204).then(n.t.bind(n, 90204, 19))),
        (o.norwegian = () => n.e(839).then(n.t.bind(n, 40839, 19))),
        (o.polish = () => n.e(8816).then(n.t.bind(n, 78816, 19))),
        (o.portuguese = () => n.e(8160).then(n.t.bind(n, 98160, 19))),
        (o.romanian = () => n.e(3546).then(n.t.bind(n, 73546, 19))),
        (o.russian = () => n.e(4302).then(n.t.bind(n, 84302, 19))),
        (o.schinese = () => n.e(6461).then(n.t.bind(n, 46461, 19))),
        (o.spanish = () => n.e(8167).then(n.t.bind(n, 18167, 19))),
        (o.swedish = () => n.e(2438).then(n.t.bind(n, 22438, 19))),
        (o.tchinese = () => n.e(6006).then(n.t.bind(n, 46006, 19))),
        (o.thai = () => n.e(6727).then(n.t.bind(n, 96727, 19))),
        (o.turkish = () => n.e(1639).then(n.t.bind(n, 51639, 19))),
        (o.ukrainian = () => n.e(4354).then(n.t.bind(n, 21973, 19))),
        (o.vietnamese = () => n.e(3946).then(n.t.bind(n, 53946, 19)));
      const i = (0, t.l)(async function (e) {
        if (o[e]) return o[e]();
      });
    },
  },
]);
