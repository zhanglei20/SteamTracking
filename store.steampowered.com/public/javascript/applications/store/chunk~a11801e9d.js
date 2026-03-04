/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9206],
  {
    21895: (e) => {
      e.exports = {
        Root: "_1kIuUssJvopWbHik1IKMG6",
        "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
        "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
        Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
        Icon: "cngAYeP7ZvFo2pT_v3-xO",
      };
    },
    38878: (e) => {
      e.exports = {
        "Variant-default": "_1fNVqPb5rhUOTSV5nEBHdl",
        "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
        "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
        "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
        Focusable: "_1cd-wdIp5lIWsydAxII-vY",
        "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
        "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
        ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
        Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
        Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
        Disabled: "_2I6xXve3oCxh8fra7SWTnq",
        "Size-1": "_2e1xlPghh48rkP13ydQOPb",
        "Size-2": "B7HtDxiiORArIRcBR9kVB",
      };
    },
    48093: (e) => {
      e.exports = {
        ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
        ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
      };
    },
    53011: (e) => {
      e.exports = {
        SegmentedControlBox: "_3tuJ3SHrhBu16Q7GZBtKyt",
        Indicator: "_2OvUYpkiij1e7K-4vW8i9W",
        SegmentedControl: "_3XFGk1-WmLNC9KlGi7IYtN",
        Item: "_2aNlsjcdOdHOtP8uACA3bM",
        "Size-1": "_2Y43gK-c1jI0x35n45iZ0",
        "Size-3": "_3ohjaEz8PkzSzIrIZKEdt9",
        "Variant-default": "_3hD10Qy5141ZEY503SxZkd",
        "Variant-inset": "_1FRhoIifZWCKbnl4jrnmG2",
      };
    },
    16619: (e) => {
      e.exports = {
        Color: "_2Vc3a-PM4tOhJcD72NEq1U",
        IconSizeDefault: "_20lX82QaoUw-iHboSsmZBI",
        "IconSize-1": "_1zRMg9IjPqEIAejKQDDLYW",
        "IconSize-2": "_3dn_hJnXYKfl38rjqz4y91",
        "IconSize-3": "_2aoIykgGddbEHeCGgMR79l",
        "IconSize-4": "_1Ypu_MleveHHMyLy8PVNy",
        "IconSize-5": "e8vp9esm_uAhUEdfq5zjr",
        "IconSize-6": "hXAsxCohKrk8qBq6Enfgt",
        "IconSize-7": "_5TifSVb5dMP2wAaHIDqM_",
        "IconSize-8": "_32KP-QSJpecoxuWZfWkqmy",
        "IconSize-9": "_3TcYJ4xwprVIVhcdzwF17m",
        HitSlop: "_1tiFDvBjIAQRZDbVwz8k2u",
      };
    },
    57757: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => d });
      var o = n(7850),
        r = n(53971),
        i = n(40704);
      function s(e) {
        return (0, o.jsx)(i.I, {
          ...e,
          viewBoxSize: 16,
          children: (0, o.jsx)("path", {
            d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
            fill: "currentColor",
          }),
        });
      }
      var l = n(21895),
        c = n(64238),
        a = n.n(c);
      function d(e) {
        const {
            checked: t,
            onChange: n,
            disabled: i,
            children: c,
            ref: d,
            variant: p = "default",
            ...h
          } = e,
          x = "indeterminate" === t,
          g = x ? f : s,
          v = () => {
            n && n(!!x || !t);
          };
        return (0, o.jsxs)(r.s, {
          ref: d,
          role: "checkbox",
          "aria-checked": x ? "mixed" : t,
          "data-state": u(t),
          className: a()(l.Root, l[`Variant-${p}`]),
          onClick: v,
          tabIndex: 0,
          onKeyDown: (e) => {
            " " === e.key && (v(), e.preventDefault(), e.stopPropagation());
          },
          cursor: "default",
          ...h,
          children: [
            (0, o.jsx)("div", {
              className: l.Checkbox,
              children: t && (0, o.jsx)(g, { className: l.Icon }),
            }),
            c,
          ],
        });
      }
      function u(e) {
        return "indeterminate" === e ? e : e ? "checked" : "unchecked";
      }
      function f(e) {
        return (0, o.jsx)("svg", {
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, o.jsx)("path", {
            d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
            fill: "currentColor",
          }),
        });
      }
    },
    61023: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => u });
      var o = n(7850),
        r = n(64238),
        i = n.n(r),
        s = n(38878),
        l = n(90534),
        c = n(53971),
        a = n(75659),
        d = n(41324);
      function u(e) {
        const {
            children: t,
            beforeContent: n,
            afterContent: r,
            hasValue: u,
            ...f
          } = e,
          p = (function (e) {
            const {
                variant: t = "default",
                size: n = "2",
                radius: o,
                focusable: r = !0,
                hoverable: l = !0,
                clickable: c = !0,
                disabled: u,
                className: f,
                ...p
              } = e,
              h = "underline" === t ? "none" : o;
            return (0, d.mz)(
              {
                ...p,
                radius: h,
                className: i()(
                  s.ControlBox,
                  r && !u && s.Focusable,
                  l && !u && s.Hoverable,
                  c && !u && s.Clickable,
                  u && s.Disabled,
                  s[`Variant-${t}`],
                  s[`Size-${n}`],
                  f,
                ),
              },
              a.h,
            );
          })(f);
        return (0, o.jsxs)(c.s, {
          ...p,
          align: "center",
          "data-has-value": !!u,
          children: [
            n && (0, o.jsx)(c.s, { paddingRight: "2", children: n }),
            (0, o.jsx)(l.az, { flexGrow: "1", minWidth: "0", children: t }),
            r && (0, o.jsx)(c.s, { paddingLeft: "2", children: r }),
          ],
        });
      }
    },
    95013: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => x, T: () => h });
      var o = n(7850),
        r = n(90626),
        i = n(73788),
        s = n(28505),
        l = n(90534),
        c = n(80797),
        a = n(48093);
      const d = Object.assign(
        function (e) {
          const { render: t, ...n } = e;
          return (0, c.Q)(
            t,
            (0, o.jsx)(l.az, {
              radius: "sm",
              background: "dull-8",
              className: a.ListBox,
            }),
            { role: "listbox", ...n },
          );
        },
        {
          Option: function (e) {
            const {
                selected: t,
                focused: n,
                label: r = null,
                render: i,
                disabled: s,
                ...d
              } = e,
              u = t ? "true" : "false",
              f = n ? "true" : void 0;
            return (0, c.Q)(
              i,
              (0, o.jsx)(l.az, {
                "data-selected": u,
                "data-focused": f,
                "aria-disabled": s,
                className: a.ListBoxOption,
                paddingY: "2",
                paddingX: "3",
              }),
              { role: "option", ...d },
              { selected: t, focused: n, disabled: s },
            );
          },
        },
      );
      var u = n(94621);
      n(8871);
      (0, r.createContext)(null);
      function f(e) {
        const { gutter: t = 0, placement: n } = e,
          o = [],
          r = n && "object" == typeof n;
        return (
          r && n.offset
            ? o.push((0, u.cY)(n.offset))
            : (r && void 0 !== n.offset) || o.push((0, u.cY)(2)),
          r && n.flip
            ? o.push((0, u.UU)(n.flip))
            : (r && void 0 !== n.flip) || o.push((0, u.UU)()),
          r && n.shift
            ? o.push((0, u.BN)(n.shift))
            : (r && void 0 !== n.shift) || o.push((0, u.BN)()),
          o.push(
            (0, u.Ej)({
              apply: (n) => {
                const { rects: o, elements: r, availableHeight: i } = n,
                  s =
                    "number" == typeof t
                      ? i - t + "px"
                      : `calc( ${i}px - var(--spacing-${t}) )`,
                  l = { maxHeight: s, boxSizing: "border-box", zIndex: "1" };
                switch ((e.scroll && (l.overflowY = "auto"), e.width)) {
                  case "target":
                    l.width = `${o.reference.width}px`;
                    break;
                  case "content":
                    l.width = `${o.floating.width}px`;
                    break;
                  case "dropdown": {
                    let e = o.reference.width;
                    o.floating.width > e && e < 200 && (e = o.floating.width),
                      (l.width = `${e}px`);
                  }
                }
                "function" == typeof e.width &&
                  (l.width = e.width({
                    unContentWidth: o.floating.width,
                    unTargetWidth: o.reference.width,
                  })),
                  Object.assign(r.floating.style, l),
                  r.floating.style.setProperty("--popover-max-height", s);
              },
            }),
          ),
          o
        );
      }
      const p = (0, r.createContext)(null);
      function h(e) {
        const {
          open: t,
          onOpenChange: n,
          activeIndex: o,
          setActiveIndex: l,
          selectedIndex: c,
          setSelectedIndex: a,
          interactions: d = {},
          role: u,
          placement: p,
        } = e;
        let h = t;
        const x = (0, i.we)({
            open: h,
            onOpenChange: n,
            middleware: f(e),
            whileElementsMounted: s.ll,
            placement: p && "object" == typeof p ? p.initial : p,
          }),
          g = (0, i.kp)(x.context, { enabled: !!d.click }),
          v = (0, i.iQ)(x.context, { enabled: !!d.focus }),
          I = (0, i.s9)(x.context),
          m = (0, r.useRef)([]),
          b = (0, i.C1)(x.context, {
            listRef: m,
            activeIndex: o,
            selectedIndex: c,
            onNavigate: l,
            virtual: !!d.virtualItemFocus,
            loop: !0,
            focusItemOnOpen: !1,
          }),
          w = (0, r.useRef)([]),
          j = (0, r.useRef)(!1),
          S = (0, i.lY)(x.context, {
            enabled: !!d.typeahead,
            listRef: w,
            activeIndex: o,
            selectedIndex: c,
            onMatch: h ? l : a,
            onTypingChange: (e) => (j.current = e),
          }),
          L = (0, i.It)(x.context, { role: u }),
          {
            getFloatingProps: C,
            getReferenceProps: z,
            getItemProps: _,
          } = (0, i.bv)([L, g, v, I, b, S]);
        return {
          floating: x,
          getFloatingProps: C,
          getReferenceProps: z,
          getItemProps: _,
          open: h,
          activeIndex: o,
          selectedIndex: c,
          setSelectedIndex: a,
          elementsRef: m,
          labelsRef: w,
          typingRef: j,
          initialFocus: d.virtualItemFocus ? -1 : void 0,
        };
      }
      const x = {
        Root: function (e) {
          const { children: t, state: n } = e;
          return (0, o.jsx)(p.Provider, { value: n, children: t });
        },
        Anchor: function (e) {
          const { children: t } = e,
            n = r.Children.only(t),
            o = (0, r.useContext)(p),
            s = (0, i.SV)([o?.floating.refs.setReference, n?.props.ref]);
          if (!n) return null;
          if (!o)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: l, ...c } = n.props;
          return (0, r.cloneElement)(n, { ref: s, ...o.getReferenceProps(c) });
        },
        Positioner: function (e) {
          const { children: t, render: n, ref: s } = e,
            l = (0, r.useContext)(p),
            c = (0, i.SV)([s, l?.floating.refs.setFloating]);
          return l
            ? l.open
              ? (0, o.jsx)(i.s3, {
                  context: l.floating.context,
                  initialFocus: l.initialFocus,
                  returnFocus: !1,
                  children: (0, o.jsx)(d, {
                    ref: c,
                    style: l.floating.floatingStyles,
                    ...l.getFloatingProps(),
                    render: n,
                    children: (0, o.jsx)(i.ph, {
                      elementsRef: l.elementsRef,
                      labelsRef: l.labelsRef,
                      children: t,
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        },
        Item: function (e) {
          const {
              children: t,
              label: n,
              selected: s,
              onSelect: l,
              ref: c,
              disabled: a,
              ...u
            } = e,
            f = (0, r.useContext)(p),
            { ref: h, index: x } = (0, i.rm)({ label: n }),
            g = (0, i.SV)([c, h]);
          if (!f)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const v = x === f.activeIndex,
            I = x === f.selectedIndex || !!s;
          return (0, o.jsx)(d.Option, {
            ref: g,
            selected: I,
            focused: v,
            role: "option",
            tabIndex: v ? 0 : -1,
            ...f.getItemProps({
              onClick: a ? void 0 : l,
              onKeyDown: (e) => {
                a ||
                  ("Enter" !== e.key &&
                    (" " !== e.key || f.typingRef.current)) ||
                  (l(e), e.preventDefault(), e.stopPropagation());
              },
              active: v,
              selected: I,
              disabled: a,
              ...u,
            }),
            children: t,
          });
        },
      };
    },
    86632: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => p });
      var o = n(7850),
        r = n(90626),
        i = n(61023),
        s = n(90534),
        l = n(81393),
        c = n(64238),
        a = n.n(c),
        d = n(53011),
        u = n(53971);
      const f = (0, r.createContext)(null);
      function p(e) {
        const { options: t, getOptionLabel: n = (e) => e, ...r } = e;
        return (0, o.jsx)(p.Root, {
          ...r,
          children: t.map((e) =>
            (0, o.jsx)(p.Item, { value: e, children: n(e) }, e),
          ),
        });
      }
      function h(e) {
        return (0, o.jsx)(s.az, { className: d.Indicator, radius: e.radius });
      }
      function x(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : n & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
      }
      (p.Item = function (e) {
        const { value: t, children: n } = e,
          i = (0, r.useContext)(f),
          [s, l] = (0, r.useState)(),
          { register: c, unregister: p } = i || {};
        if (
          ((0, r.useEffect)(
            () => (s && c && p ? (c(s, t), () => p(s, t)) : () => {}),
            [c, p, t, s],
          ),
          !i)
        )
          return null;
        const { value: h, onValueChange: x, radius: g, size: v } = i,
          I = t === h,
          m = I ? void 0 : () => x(t),
          b = void 0 === n ? t : n;
        return (0, o.jsx)(u.s, {
          justify: "center",
          align: "center",
          radius: g,
          ref: l,
          onClick: m,
          "data-selected": I ? "true" : "false",
          className: a()(d.Item, v && d[`Size-${v}`]),
          children: b,
        });
      }),
        (p.Root = function (e) {
          const {
              variant: t = "default",
              radius: n,
              size: s,
              children: c,
              value: u,
              onValueChange: p,
            } = e,
            [g, v] = (0, r.useState)({}),
            I = (0, r.useCallback)((e, t) => v((n) => ({ ...n, [t]: e })), []),
            m = (0, r.useCallback)(
              (e, t) =>
                v((n) => {
                  const o = { ...n };
                  return o[t] === e && delete o[t], o;
                }),
              [],
            ),
            b = (0, r.useMemo)(
              () => ({
                value: u,
                onValueChange: p,
                register: I,
                unregister: m,
                radius: n,
                size: s,
              }),
              [u, p, I, m, n, s],
            );
          return (0, o.jsx)(i.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: t,
            radius: n,
            size: s,
            className: a()(d.SegmentedControlBox, d[`Variant-${t}`]),
            tabIndex: 0,
            onKeyDown: (e) => {
              let t = 0;
              switch (e.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  t = 1;
                  break;
                case "ArrowLeft":
                  t = -1;
              }
              if (t) {
                const n = Array.from(Object.values(g)).sort(x);
                let o;
                if (null === u) o = t > 0 ? 0 : n.length - 1;
                else {
                  const e = g[u],
                    r = n.findIndex((t) => t === e);
                  (0, l.wT)(
                    "number" == typeof r,
                    "Could not find current segmented value position",
                  ),
                    (o = r + t);
                }
                const r = n[o < 0 ? n.length + o : o % n.length],
                  i = Object.keys(g).find((e) => g[e] === r);
                "string" != typeof i
                  ? console.error("Could not find next segmeneted value")
                  : (p(i), e.stopPropagation(), e.preventDefault());
              }
            },
            children: (0, o.jsx)(f.Provider, {
              value: b,
              children: (0, o.jsxs)("div", {
                className: d.SegmentedControl,
                children: [c, null !== u && (0, o.jsx)(h, { radius: n })],
              }),
            }),
          });
        });
    },
    40704: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => l });
      var o = n(7850),
        r = n(41324),
        i = n(75659),
        s = n(16619);
      function l(e) {
        const { viewBoxSize: t = 20, ...n } = e,
          i = n.size ? void 0 : s.IconSizeDefault;
        return (0, o.jsx)("svg", {
          viewBox: `0 0 ${t} ${t}`,
          ...(0, r.mz)({ className: i, ...n }, c),
        });
      }
      const c = [
        ...i.L,
        { prop: "size", responsive: !0, className: (e) => s[`IconSize-${e}`] },
        {
          prop: "color",
          className: s.Color,
          cssProperty: (e) => ["--icon-color", (0, r.Fd)(e)],
        },
        {
          prop: "hitSlop",
          className: s.HitSlop,
          cssProperty: (e) => [
            "--hit-slop-custom",
            "string" == typeof e ? e : "",
          ],
        },
        i.h.find(({ prop: e }) => "cursor" === e),
      ];
    },
    77914: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => i });
      var o = n(7850),
        r = n(40704);
      function i(e) {
        return (0, o.jsx)(r.I, {
          ...e,
          viewBoxSize: 12,
          children: (0, o.jsx)("path", {
            d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
            fill: "currentColor",
          }),
        });
      }
    },
    80797: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => i });
      var o = n(90626);
      function r(e, t, n) {
        return "function" == typeof e ? e(t, n) : o.cloneElement(e, t);
      }
      function i(e, t, n, o) {
        return r(e || t, n, o);
      }
    },
    82477: (e, t, n) => {
      "use strict";
      n.d(t, { Cg: () => p, pZ: () => x, vg: () => h });
      var o = n(7850),
        r = n(90626),
        i = n(738),
        s = n(61859),
        l = n(78327),
        c = n(97436),
        a = n(72034),
        d = n(28240),
        u = n(51706);
      function f(e) {
        return (0, o.jsx)(i.x_, {
          onEscKeypress: e.closeModal,
          bDisableBackgroundDismiss: !0,
          children: (0, o.jsx)(g, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        });
      }
      function p(e) {
        const { redirectURL: t = window.location.href } = e;
        return (0, o.jsx)(u.EN, {
          active: !0,
          children: (0, o.jsx)(f, { redirectURL: t }),
        });
      }
      function h() {
        (0, i.pg)(
          (0, o.jsx)(f, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, s.we)("#Login_SignInTitle") },
        );
      }
      function x(e, t) {
        (0, i.pg)(
          (0, o.jsx)(f, { ownerWin: window, redirectURL: e, guestOption: t }),
          window,
          { strTitle: (0, s.we)("#Login_SignInTitle") },
        );
      }
      function g(e) {
        const { redirectURL: t, guestOption: n } = e,
          [i] = (0, r.useState)(
            new a.D(l.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [s, u] = (0, r.useState)(!1);
        return (0, o.jsx)("div", {
          children: s
            ? (0, o.jsx)(c.Fn, {})
            : (0, o.jsx)(c.YN, {
                autoFocus: !0,
                transport: i,
                platform: 2,
                onComplete: (e) => {
                  e == d.wI.k_PrimaryDomainFail
                    ? u(!0)
                    : window.location.assign(t);
                },
                redirectUrl: t,
                theme: "modal",
                children: n && (0, o.jsx)(c.Mk, { redirectURL: t }),
              }),
        });
      }
    },
  },
]);
