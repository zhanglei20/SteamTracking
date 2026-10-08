/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [57333, 38843],
    {
      98001: (j, ce, i) => {
        "use strict";
        i.d(ce, { v: () => Q });
        var t = i(72609);
        function m(X) {
          const { appid: H, profileUrl: k, dlc: K } = X,
            R = k
              ? `${k}/achievements/${H}`
              : `${Config.COMMUNITY_BASE_URL}achievements/${H}`;
          return K !== void 0 ? `${R}?dlc=${K}` : R;
        }
        function Q(X) {
          const { appid: H, profileUrl: k } = X;
          return k
            ? `${k}/stats/${H}/achievements/`
            : `${t.TS.COMMUNITY_BASE_URL}stats/${H}/achievements/`;
        }
      },
      84909: (j, ce, i) => {
        "use strict";
        i.d(ce, { AM: () => me, Pr: () => C });
        var t = i(7850),
          m = i(90626),
          Q = i(73788),
          X = i(8083),
          H = i(94621),
          k = i(18938),
          K = i(24660),
          R = i(38566),
          M = i(54130),
          T = i(71742),
          V = i(64238),
          q = i.n(V),
          Z = i(3877),
          de = i(3166),
          ne = i(28020);
        const N = (0, m.createContext)(null);
        function L(J) {
          const { children: oe, ...$ } = J,
            re = te($);
          return (0, t.jsx)(N.Provider, { value: re, children: oe });
        }
        function se(J) {
          const { children: oe } = J,
            $ = m.Children.only(oe),
            re = (0, m.useContext)(N);
          return $
            ? re
              ? (0, m.cloneElement)($, {
                  ...re.getReferenceProps($.props),
                  ref: (0, k.XB)($.props.ref, re.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function U(J) {
          const { children: oe, className: $, ref: re, label: ae } = J,
            ge = (0, m.useContext)(N),
            Ie = (0, Q.SV)([re, ge?.floating.refs.setFloating]);
          if (!ge)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!ge.open) return null;
          let Tt = m.Children.only(oe),
            Nt = m.Fragment;
          return (
            Tt.type == me.FocusManager &&
              ((Tt = m.Children.only(Tt.props.children)), (Nt = ie)),
            (0, t.jsx)(Nt, {
              children: (0, t.jsx)(ne.HF, {
                presentation: ge.presentation,
                sizing: ge.sizing,
                floatingRef: Ie,
                floatingProps: ge.getFloatingProps(),
                floatingStyles: ge.floating.floatingStyles,
                referenceElement: ge.floating.elements.domReference,
                className: q()((0, Z.T)(), $),
                label: ae,
                children: Tt,
              }),
            })
          );
        }
        function ie(J) {
          return (0, de.Qn)()
            ? (0, t.jsx)(_, { ...J })
            : (0, t.jsx)(xe, { ...J });
        }
        function _(J) {
          const { children: oe } = J,
            $ = (0, m.useContext)(N);
          (0, T.wT)(
            !!$,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const re = () => $.floating.context.onOpenChange(!1),
            ae = m.useRef(void 0);
          return (
            (0, K.O7)(ae, !0, !0),
            (0, t.jsx)(R.D6, {
              navID: "Popover",
              onCancelButton: re,
              modal: !0,
              navTreeRef: ae,
              children: (0, t.jsx)("div", {
                style: { display: "contents" },
                children: (0, t.jsx)(M.q, { children: oe }),
              }),
            })
          );
        }
        function xe(J) {
          const { children: oe } = J,
            $ = (0, m.useContext)(N);
          return (
            (0, T.wT)(
              !!$,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, t.jsx)(Q.s3, {
              context: $.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: oe,
            })
          );
        }
        function te(J) {
          const {
            open: oe,
            interactions: $ = {},
            width: re,
            maxHeight: ae,
            gutter: ge,
            scroll: Ie,
          } = J;
          let Tt = oe;
          const Nt = (0, ne.Pr)(J.presentation),
            G = C(J, Tt, Nt),
            ve = { enabled: !!$.click },
            mn = typeof $.click == "function" ? $.click(ve) : ve,
            qn = (0, Q.kp)(G.context, mn),
            Gt = { enabled: !!$.focus },
            _n = typeof $.focus == "function" ? $.focus(Gt) : Gt,
            es = (0, Q.iQ)(G.context, _n),
            Kn = { handleClose: (0, Q.iB)() },
            cs = typeof $.hover == "function" ? $.hover(Kn) : Kn,
            E = (0, Q.Mk)(G.context, { enabled: !!$.hover, ...cs }),
            Yt = (0, Q.s9)(G.context),
            { getFloatingProps: St, getReferenceProps: pr } = (0, Q.bv)([
              qn,
              es,
              E,
              Yt,
            ]);
          return {
            floating: G,
            getFloatingProps: St,
            getReferenceProps: pr,
            open: Tt,
            presentation: Nt,
            sizing: { width: re, maxHeight: ae, gutter: ge, scroll: Ie },
          };
        }
        function C(J, oe, $) {
          const { onOpenChange: re, placement: ae } = J,
            ge = $ === "anchor";
          return (0, Q.we)({
            open: oe,
            onOpenChange: re,
            middleware: ge ? ue(J) : [],
            whileElementsMounted: ge ? X.ll : void 0,
            placement: ae && typeof ae == "object" ? ae.initial : ae,
            strategy: "fixed",
            platform: {
              ...X.iD,
              getOffsetParent: (Ie) => Ie?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function ue(J) {
          const { gutter: oe = 0, placement: $ } = J,
            re = [],
            ae = $ && typeof $ == "object";
          return (
            ae && $.offset
              ? re.push((0, H.cY)($.offset))
              : (!ae || $.offset === void 0) && re.push((0, H.cY)(2)),
            ae && $.flip
              ? re.push((0, H.UU)($.flip))
              : (!ae || $.flip === void 0) && re.push((0, H.UU)()),
            ae && $.shift
              ? re.push((0, H.BN)($.shift))
              : (!ae || $.shift === void 0) && re.push((0, H.BN)()),
            re.push(
              (0, H.Ej)({
                apply: (ge) => {
                  const { rects: Ie, elements: Tt, availableHeight: Nt } = ge,
                    G = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((J.scroll && (G.overflowY = "auto"), J.width)) {
                    case "target": {
                      G.width = `${Ie.reference.width}px`;
                      break;
                    }
                    case "content": {
                      G.width = `${Ie.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let mn = Ie.reference.width;
                      Ie.floating.width > mn &&
                        mn < 200 &&
                        (mn = Ie.floating.width),
                        (G.width = `${mn}px`);
                    }
                  }
                  typeof J.width == "function" &&
                    (G.width = J.width({
                      unContentWidth: Ie.floating.width,
                      unTargetWidth: Ie.reference.width,
                    }));
                  const ve =
                    typeof oe == "number" ? `${oe}px` : `var(--spacing-${oe})`;
                  typeof J.maxHeight == "function"
                    ? (G.maxHeight = J.maxHeight({
                        unAvailableHeight: Nt,
                        gutter: ve,
                      }))
                    : typeof J.maxHeight == "number"
                      ? (G.maxHeight = `min( calc( ${Nt}px - ${ve} ), ${J.maxHeight}px )`)
                      : typeof oe == "number"
                        ? (G.maxHeight = `${Nt - oe}px`)
                        : (G.maxHeight = `calc( ${Nt}px - var(--spacing-${oe}) )`),
                    Object.assign(Tt.floating.style, G),
                    Tt.floating.style.setProperty(
                      "--popover-max-height",
                      G.maxHeight,
                    );
                },
              }),
            ),
            re
          );
        }
        const me = { Root: L, Anchor: se, Positioner: U, FocusManager: ie };
      },
      12204: (j, ce, i) => {
        "use strict";
        i.d(ce, { V: () => X });
        var t = i(7850),
          m = i(31857);
        const Q = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function X(H) {
          const { direction: k = "down" } = H,
            K = Q[k];
          return (0, t.jsx)(m.I, {
            ...H,
            viewBox: 20,
            children: (0, t.jsx)("path", {
              transform: K,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      95994: (j, ce, i) => {
        "use strict";
        i.d(ce, { x: () => T });
        var t = i(7850),
          m = i(70182),
          Q = i(64238),
          X = i.n(Q),
          H = i(8928),
          k = i(69289),
          K = i(75180),
          R = i.n(K),
          M = i(3166);
        function T(q) {
          const {
              as: Z = "div",
              ref: de,
              focusable: ne,
              navProps: N,
              ...L
            } = q,
            se = (0, M.Qn)(),
            U = (0, k.mz)({ ...L, className: X()(K.Grid, q.className) }, V),
            ie = ne ?? N?.focusable ?? !!L.onClick,
            _ = (0, t.jsx)(Z, { ref: de, ...U });
          return se
            ? (0, t.jsx)(m.J, {
                "flow-children": "grid",
                ...(N || {}),
                focusable: ie,
                children: _,
              })
            : _;
        }
        const V = [
          ...H.h,
          {
            prop: "display",
            responsive: !0,
            className: K.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: K.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: K.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: K.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: K.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: K.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: K.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: K.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: K.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: K.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: K.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: K.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: K.Gap,
            cssProperty: (q) => ["--grid-gap", `var(--spacing-${q})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: K.Gap,
            cssProperty: (q) => ["--grid-gap-x", `var(--spacing-${q})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: K.Gap,
            cssProperty: (q) => ["--grid-gap-y", `var(--spacing-${q})`],
          },
        ];
      },
      57152: (j, ce, i) => {
        "use strict";
        i.d(ce, { D: () => Z });
        var t = i(7850),
          m = i(39049),
          Q = i(8928),
          X = i(15252),
          H = i(69289),
          k = i(90626);
        function K(N) {
          const { depth: L } = useContext(R);
          return jsx(R.Provider, {
            value: { depth: L + 1 },
            children: jsx(Box, { ...N }),
          });
        }
        const R = k.createContext({ depth: 0 });
        function M() {
          return (0, k.useContext)(R).depth;
        }
        var T = i(3877),
          V = i(64238),
          q = i.n(V);
        function Z(N) {
          const { level: L = "auto", className: se, color: U } = N,
            ie = M(),
            _ = ne(L, ie);
          return (0, t.jsx)(_, {
            ...(0, H.mz)(
              { ...N, className: q()((0, T.T)(), m.Heading, se) },
              de,
            ),
          });
        }
        const de = [
          ...X.U6,
          ...Q.L,
          {
            prop: "size",
            responsive: !0,
            className: (N) => m[`HeadingSize-${N}`],
          },
        ];
        function ne(N, L) {
          if (N === "auto" && L === 0) return "h1";
          const se = N === "auto" ? L.toString() : N;
          return /^[1-6]$/.test(se)
            ? "h" + se
            : N === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${se}".`,
                ),
                "h1");
        }
      },
      79014: (j, ce, i) => {
        "use strict";
        i.d(ce, { A: () => Q, i: () => m });
        var t = i(90626);
        function m(X, ...H) {
          const k = [],
            K = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let R = 0,
            M;
          for (; (M = K.exec(X)); ) {
            (R += M[0].length), k.push(M[1]);
            const T = parseInt(M[2]),
              V = M[3] || "",
              q = m(V, ...H),
              de = (T >= 1 && T <= H.length ? H[T - 1] : null)
                ? t.cloneElement(H[T - 1], {}, V ? q : null)
                : V;
            k.push(de);
          }
          return k.push(X.substr(R)), t.createElement(t.Fragment, null, ...k);
        }
        function Q(X, H = ["b", "i", "br"]) {
          const k = H.join("|"),
            K = [],
            R = new RegExp(
              `(?<before>.*?)<(?<tagname>${k})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let M = 0,
            T;
          for (; (T = R.exec(X)); ) {
            if (!T.groups) continue;
            if (!T.groups?.endtag) {
              const ne = T.groups.before.length + T.groups.tagname.length + 2;
              (M += ne), (R.lastIndex = T.index + ne), K.push(T.groups.before);
              const N = T[2],
                L = t.createElement(N);
              K.push(L);
              continue;
            }
            (M += T[0].length), K.push(T.groups.before);
            const V = T.groups.tagname,
              q = T.groups.contents || "";
            let Z = null;
            q && (Z = Q(q, H));
            const de = t.createElement(V, {}, Z);
            K.push(de);
          }
          return K.push(X.slice(M)), t.createElement(t.Fragment, null, ...K);
        }
      },
      76962: (j, ce, i) => {
        "use strict";
        i.d(ce, { y: () => V });
        var t = i(7850),
          m = i(24660),
          Q = i(38566),
          X = i(54130),
          H = i(64238),
          k = i.n(H),
          K = i(90626),
          R = i(3166),
          M = i(88208),
          T = i.n(M);
        const V = Object.assign(q, { Root: Z, Content: ne });
        function q(N) {
          const { children: L, className: se, ...U } = N;
          return (0, t.jsx)(V.Root, {
            ...U,
            children: (0, t.jsx)(V.Content, { className: se, children: L }),
          });
        }
        function Z(N) {
          const {
              onClose: L,
              className: se,
              navID: U,
              children: ie,
              allowScrollBehind: _,
              ...xe
            } = N,
            [te, C] = K.useState(!1),
            ue = K.useCallback((J) => {
              J &&
                (J.showModal(),
                J.ownerDocument.defaultView &&
                  C(
                    J.ownerDocument.body.scrollHeight >
                      J.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            me = K.useCallback(
              (J) => {
                J.target == J.currentTarget && L("backdropclick");
              },
              [L],
            );
          return (0, t.jsx)(de, {
            navID: U ?? "ModalDialog",
            onClose: L,
            children: (0, t.jsx)("dialog", {
              ref: ue,
              className: k()(M.ModalDialog, !_ && te && M.PreventScroll, se),
              onClose: () => L("onclose"),
              onClick: me,
              ...xe,
              children: (0, t.jsx)(X.q, { children: ie }),
            }),
          });
        }
        function de(N) {
          const { navID: L, onClose: se, children: U } = N,
            ie = K.useCallback(() => se("cancelbutton"), [se]),
            _ = K.useRef(void 0);
          return (
            (0, m.O7)(_, !0, !0),
            (0, R.Qn)()
              ? (0, t.jsx)(Q.D6, {
                  navID: L ?? "ModalDialog",
                  onCancelButton: ie,
                  modal: !0,
                  navTreeRef: _,
                  children: U,
                })
              : (0, t.jsx)(t.Fragment, { children: U })
          );
        }
        function ne(N) {
          const { className: L, children: se } = N;
          return (0, t.jsx)("div", {
            className: k()(M.ModalDialogContent, L),
            onClick: (U) => U.stopPropagation(),
            children: se,
          });
        }
      },
      47604: (j, ce, i) => {
        "use strict";
        i.d(ce, { s: () => M });
        var t = i(7850),
          m = i(19298),
          Q = i(64238),
          X = i.n(Q),
          H = i(36118),
          k = i(76962),
          K = i(5598),
          R = i.n(K);
        function M(T) {
          const {
            onClose: V,
            className: q,
            navID: Z,
            children: de,
            strTitle: ne,
            wideMode: N,
            ...L
          } = T;
          return (0, t.jsx)(k.y, {
            onClose: V,
            navID: Z ?? "SimpleModalDialog",
            ...L,
            children: (0, t.jsxs)("div", {
              className: X()(q, R().SimpleModalDialog, N && R().WideMode),
              children: [
                " ",
                (0, t.jsxs)(m.Z, {
                  className: R().SimpleModalDialogHeader,
                  children: [
                    ne &&
                      (0, t.jsx)("h2", {
                        className: R().SimpleModalDialogTitle,
                        children: ne,
                      }),
                    (0, t.jsx)("button", {
                      onClick: (se) => (V("xclick"), se.preventDefault(), !1),
                      className: R().XButton,
                      children: (0, t.jsx)(H.tmm, {}),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: R().SimpleModalContentCtn,
                  children: de,
                }),
              ],
            }),
          });
        }
      },
      27990: (j, ce, i) => {
        "use strict";
        i.d(ce, { W4: () => K, h$: () => M });
        var t = i(7850),
          m = i(90626),
          Q = i(72609),
          X = i(38340);
        function H(T, V) {
          return {
            store_page_asset_url: `${Q.TS.BASE_URL_SHARED_CDN}store_item_assets/steam/apps/${T}/%s?t=${V}`,
          };
        }
        const k = m.createContext({ store_page_asset_url: "" });
        function K(T) {
          const V =
            T.store_page_asset_url !== void 0
              ? { store_page_asset_url: T.store_page_asset_url }
              : H(T.appid, T.app_last_modified);
          return (0, t.jsx)(k.Provider, { value: V, children: T.children });
        }
        const R = () => m.useContext(k);
        function M() {
          const { store_page_asset_url: T } = R();
          return m.useCallback(
            (V) => {
              if (V)
                if (V.startsWith(X.qR + "/")) {
                  const q = V.replace(X.qR + "/", "");
                  return T.replace("%s", q);
                } else return V;
            },
            [T],
          );
        }
      },
      45497: (j, ce, i) => {
        "use strict";
        i.d(ce, { n: () => _ });
        var t = i(7850),
          m = i(29950),
          Q = i(33770),
          X = i(7487),
          H = i(99412),
          k = i(24660),
          K = i(90626),
          R = i(70187),
          M = i(39239),
          T = i(53113),
          V = i(3166),
          q = i(94162),
          Z = i(27990),
          de = i(33001),
          ne = i.n(de);
        function N(te) {
          return new X.OJ(new X.R8());
        }
        function L(te) {
          const C = new Map([
            ...Array.from(R.W4.entries()),
            ["img", { Constructor: xe, autocloses: !1 }],
            ["sup", { Constructor: se, autocloses: !1 }],
            [
              "h6",
              { Constructor: U, autocloses: !1, skipFollowingNewline: !0 },
            ],
          ]);
          return te && C.set("url", { Constructor: ie, autocloses: !1 }), C;
        }
        function se(te) {
          return (0, t.jsx)("sup", { children: te.children });
        }
        function U(te) {
          return (0, t.jsx)("h6", { children: te.children });
        }
        function ie(te) {
          let C = (0, m.J)(R.j$(te.args));
          return (
            !C &&
              typeof te.children == "string" &&
              (0, T.DZ)(te.children) &&
              (C = (0, m.J)(te.children)),
            C
              ? (0, t.jsx)(k.Ii, { href: C, children: te.children })
              : te.children || ""
          );
        }
        function _(te) {
          const { text: C, languageOverride: ue, bBypassLinkFilter: me } = te,
            [J] = (0, K.useState)(new Q.B(L(me), N, ue || H.Bhc));
          return (0, t.jsx)("div", {
            className: ne().StorePageBBCode,
            children: J.ParseBBCode(C, {}, !0),
          });
        }
        function xe(te) {
          const { showErrorInfo: C } = te.context,
            ue = (0, Z.h$)(),
            me = te.args.alt ?? "";
          if (!!te.args.mp4 || te.args.webm) {
            const oe = ue(te.args.webm),
              $ = ue(te.args.mp4),
              re = ue(te.args.poster),
              ae = (0, q.Wr)() || (0, q.Ae)(),
              ge = (Ie) => {
                const Tt = Ie.currentTarget;
                Tt.paused ? Tt.play() : Tt.pause();
              };
            return (0, t.jsxs)("video", {
              className: ne().StoreVideo,
              poster: re,
              "aria-label": me,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              onClick: ge,
              children: [
                oe &&
                  !ae &&
                  (0, t.jsx)("source", { src: oe, type: "video/webm" }),
                $ &&
                  !V.TS.IN_CLIENT &&
                  (0, t.jsx)("source", { src: $, type: "video/mp4" }),
              ],
            });
          } else {
            const oe = ue(te.args.src);
            return C
              ? (0, t.jsx)(M.i, { className: ne().StoreImage, src: oe })
              : (0, t.jsx)("img", {
                  className: ne().StoreImage,
                  src: oe,
                  alt: me,
                });
          }
        }
      },
      21079: (j, ce, i) => {
        "use strict";
        i.d(ce, {
          Dk: () => de,
          Mu: () => L,
          Y8: () => se,
          ws: () => ne,
          zo: () => N,
        });
        var t = i(72604),
          m = i(35038),
          Q = i(83153),
          X = i(9682),
          H = i(41735),
          k = i.n(H),
          K = i(80902),
          R = i(75233),
          M = i(68312),
          T = i(77187),
          V = i(3166),
          q = i(90626);
        function Z(_) {
          return ["AppRelevanceStore", "FriendsRecommended", _];
        }
        function de(_) {
          const xe = (0, M.KV)();
          return (0, K.I)({
            queryKey: Z(_),
            queryFn: () => U(xe, _),
            enabled: V.iA.logged_in,
          });
        }
        function ne() {
          const _ = (0, R.jE)();
          return q.useCallback(
            (xe, te) => {
              _.setQueryData(Z(xe), te);
            },
            [_],
          );
        }
        function N(_) {
          return (0, K.I)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", _],
            queryFn: () => ie(_),
            enabled: V.iA.logged_in,
          });
        }
        function L() {
          return (0, T.PG)("App Relevance Store Top Sellers", {
            sort: Q.Dq.Rm,
            start: 0,
            count: 100,
          });
        }
        function se() {
          const { data: _ } = L();
          return _;
        }
        async function U(_, xe) {
          const te = m.w.Init(X.KV);
          te.Body().set_appid(xe);
          const C = await X.YK.GetFriendsRecommendedApp(_, te),
            ue = C.GetEResult();
          if (ue == t.R) return C.Body().toObject();
          throw `Error ${ue} failed to call GetFriendsRecommendedApp ${xe}`;
        }
        async function ie(_) {
          let xe = { appid: _ },
            te = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const ue = (
            await k().get(
              `${V.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: xe, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            ue &&
              ue.success == t.R &&
              (ue.results.similar_played_apps &&
                (te.arrSimilarPlayedApps = ue.results.similar_played_apps.map(
                  (me) => ({
                    appid: me.appid,
                    playtimeForever: me.playtime_forever,
                  }),
                )),
              ue.results.recommended_by_ir && (te.bRecommendedByIR = !0)),
            te
          );
        }
      },
      25509: (j, ce, i) => {
        "use strict";
        i.d(ce, { k: () => K });
        var t = i(14947),
          m = i(98609),
          Q = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          H = (R, M, T, V) => {
            for (
              var q = V > 1 ? void 0 : V ? X(M, T) : M, Z = R.length - 1, de;
              Z >= 0;
              Z--
            )
              (de = R[Z]) && (q = (V ? de(M, T, q) : de(q)) || q);
            return V && q && Q(M, T, q), q;
          };
        class k {
          m_ItemDefinition = null;
          m_ItemKV = null;
          constructor(M, T) {
            (0, t.Gn)(this), this.LoadItemDefinition(M, T);
          }
          LoadItemDefinition(M, T) {
            M
              ? (this.m_ItemDefinition = {
                  item_type: M.item_type,
                  item_class: M.item_class,
                  item_description: M.item_description,
                  editor_accountid: M.editor_accountid,
                  deleted: M.deleted,
                  active: M.active,
                  appid: M.appid,
                  item_image_composed: M.item_image_composed,
                  item_image_large: M.item_image_large,
                  item_image_small: M.item_image_small,
                  item_key_values: M.item_key_values,
                  item_movie_mp4: M.item_movie_mp4,
                  item_movie_mp4_small: M.item_movie_mp4_small,
                  item_internal_name: M.item_name,
                  item_series: M.item_series,
                  item_movie_webm: M.item_movie_webm,
                  item_movie_webm_small: M.item_movie_webm_small,
                  item_image_composed_foil: M.item_image_composed_foil,
                  item_last_changed: M.item_last_changed,
                  broadcast_channel_id: M.broadcast_channel_id,
                })
              : (this.m_ItemDefinition = T),
              (this.m_ItemKV = JSON.parse(
                this.m_ItemDefinition.item_key_values,
              ));
          }
          get AppID() {
            return this.m_ItemDefinition.appid;
          }
          get BIsActive() {
            return this.m_ItemDefinition.active;
          }
          get ItemID() {
            return this.m_ItemDefinition.item_type;
          }
          get BIsDeleted() {
            return this.m_ItemDefinition.deleted;
          }
          get ItemClass() {
            return this.m_ItemDefinition.item_class;
          }
          get CommunityItemDef() {
            return this.m_ItemDefinition;
          }
        }
        H([t.sH], k.prototype, "m_ItemDefinition", 2),
          H([t.sH], k.prototype, "m_ItemKV", 2);
        function K(R, M) {
          return `${m.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${R}/${M}`;
        }
      },
      63547: (j, ce, i) => {
        "use strict";
        i.d(ce, { QW: () => ne, VZ: () => de, g: () => q, kF: () => V });
        var t = i(72604),
          m = i(35038),
          Q = i(55051),
          X = i(72609),
          H = i(80902),
          k = i(75233),
          K = i(51614),
          R = i(90626),
          M = i(68312);
        const T = "PlaytestInvites";
        function V() {
          const N = (0, M.KV)();
          return (0, H.I)({
            queryKey: [T],
            queryFn: async () => {
              const L = m.w.Init(Q.rX),
                se = await Q.BX.GetInvites(N, L);
              if (se.GetEResult() != t.R)
                throw new Error(
                  `Error from usePlaytestInvite: ${se.GetEResult()} ${se.GetErrorMessage()}`,
                );
              return se.Body()?.toObject().invites ?? [];
            },
          });
        }
        function q(N) {
          const L = (0, M.KV)(),
            se = (0, k.jE)();
          return (0, K.n)({
            mutationFn: async (U) => {
              const ie = m.w.Init(Q.q);
              ie.Body().add_invite_ids(N),
                ie.Body().set_status(U.bAccept ? Q.b1.T5 : Q.b1.eh);
              const _ = await Q.BX.UpdateInvites(L, ie);
              if (_.GetEResult() != t.R)
                throw {
                  result: _.GetEResult(),
                  message: `Error from UpdatePlaytestInvite: ${_.GetErrorMessage()} ( ${_.GetEResult()} )`,
                };
            },
            onSuccess: (U, ie) => {
              se.setQueryData([T], (_) =>
                _.map((xe) =>
                  xe.invite_id === N
                    ? { ...xe, status: ie.bAccept ? Q.b1.T5 : Q.b1.eh }
                    : xe,
                ),
              );
            },
            onError: () => {
              se.invalidateQueries({ queryKey: [T] });
            },
          });
        }
        function Z(N) {
          return ["PlaytestUserStatus", N];
        }
        function de(N) {
          const L = (0, M.KV)();
          return (0, H.I)({
            queryKey: Z(N),
            queryFn: async () => {
              if (X.iA.logged_in) {
                const se = m.w.Init(Q.eW);
                N && se.Body().set_appid(N);
                const U = await Q.BX.GetUserStatus(L, se);
                if (U.GetEResult() != t.R)
                  throw new Error(
                    `Error from usePlaytestUserStatus: ${U.GetEResult()} ${U.GetErrorMessage()}`,
                  );
                return U.Body()?.toObject().results ?? [];
              } else return [];
            },
            staleTime: 600 * 1e3,
          });
        }
        function ne() {
          const N = (0, k.jE)();
          return R.useCallback(
            (L, se) => {
              N.setQueryData(Z(L), se);
            },
            [N],
          );
        }
      },
      90114: (j, ce, i) => {
        "use strict";
        i.r(ce),
          i.d(ce, {
            OpenInDesktopClient: () => M,
            default: () => V,
            useOpenWebInSteamClient: () => T,
          });
        var t = i(7850),
          m = i(90626),
          Q = i(25792),
          X = i(97824),
          H = i.n(X),
          k = i(3166),
          K = i(97996),
          R = i(18210);
        const M = (0, Q.Nr)(function (Z) {
          const { fnOpenInSteamClient: de } = T();
          return (0, t.jsx)("div", {
            className: X.OpenInBannerContainer,
            children: (0, t.jsxs)("div", {
              className: X.OpenInBannerContent,
              children: [
                (0, t.jsx)("div", {
                  className: X.BannerButtonContainer,
                  children: (0, t.jsx)("div", {
                    onClick: de,
                    className: X.BannerButton,
                    children: (0, R.we)(
                      "#OpenInDesktopAppBanner_OpenAppButton",
                    ),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: X.BannerMessage,
                  children: (0, t.jsxs)("div", {
                    className: X.BannerTitle,
                    children: [
                      (0, t.jsx)("b", {
                        children: (0, R.we)(
                          "#OpenInDesktopAppBanner_NotSignedIn",
                        ),
                      }),
                      (0, t.jsx)("br", {}),
                      (0, R.we)("#OpenInDesktopAppBanner_Body"),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
        function T() {
          return {
            fnOpenInSteamClient: m.useCallback(() => {
              let Z = `${(0, k.yl)()}//openurl/`;
              const de = (0, K.VY)("browserid");
              if (de) {
                const ne = new URL(window.location.href),
                  N = new URLSearchParams(ne.search);
                N.set("utm_bid", de),
                  (Z += ne.origin + ne.pathname + "?" + N.toString() + ne.hash);
              } else Z += window.location.href;
              window.location.href = Z;
            }, []),
          };
        }
        const V = M;
      },
      62038: (j, ce, i) => {
        "use strict";
        i.r(ce),
          i.d(ce, {
            AccessibilityFeatureDisplay: () => ne,
            AccessibilityFeaturesFromCategories: () => de,
            AccessibilityIcon: () => N,
          });
        var t = i(7850),
          m = i(90626),
          Q = i(18210),
          X = i(3166),
          H = i(63404),
          k = i.n(H),
          K = i(24660),
          R = i(99412);
        const M = {
            bAccessibilityDifficultyLevels:
              "#Accessibility_Feature_AdjustableDifficulty",
            bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
            bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
            bAccessibilityBackgroundVolumeControls:
              "#Accessibility_Feature_CustomVolumeControls",
            bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
            bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
            bAccessibilityResizableUI:
              "#Accessibility_Feature_AdjustableTextSize",
            bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
            bAccessibilityColorAlternatives:
              "#Accessibility_Feature_ColorAlternatives",
            bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
            bAccessibilityKeyboardOnlyOption:
              "#Accessibility_Feature_KeyboardOnlyOption",
            bAccessibilityMouseOnlyOption:
              "#Accessibility_Feature_MouseOnlyOption",
            bAccessibilityTouchOnlyOption:
              "#Accessibility_Feature_TouchOnlyOption",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "#Accessibility_Feature_WithoutQuickTimeEvents",
            bAccessibilityChatTexttoSpeech:
              "#Accessibility_Feature_TextToSpeech",
            bAccessibilityChatSpeechtoText:
              "#Accessibility_Feature_SpeechToText",
            bAccessibilityPlayableAtYourOwnPace:
              "#Accessibility_Feature_PlayableAtYourOwnPace",
            bAccessibilityPlayableWithoutVision:
              "#Accessibility_Feature_PlayableWithoutVision",
            bAccessibilityContrastControls:
              "#Accessibility_Feature_ContrastControls",
          },
          T = {
            bAccessibilityDifficultyLevels: "adjustable_difficulty",
            bAccessibilitySaveAnytime: "save_anytime",
            bAccessibilityNarratedMenus: "narrated_game_menus",
            bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
            bAccessibilityStereoSound: "stereo_sound",
            bAccessibilitySurroundSound: "surround_sound",
            bAccessibilityResizableUI: "adjustable_text_size",
            bAccessibilitySubtitles: "subtitle_options",
            bAccessibilityColorAlternatives: "color_alternatives",
            bAccessibilityCameraComfort: "camera_comfort",
            bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
            bAccessibilityMouseOnlyOption: "mouse_only_option",
            bAccessibilityTouchOnlyOption: "touch_only_option",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "playable_without_timed_input",
            bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
            bAccessibilityChatSpeechtoText: "chat_speech_to_text",
            bAccessibilityPlayableAtYourOwnPace: "playable_at_your_own_pace",
            bAccessibilityPlayableWithoutVision: "playable_without_vision",
            bAccessibilityContrastControls: "contrast_controls",
          };
        var V = ((U) => (
          (U.Gameplay = "gameplay"),
          (U.Visual = "visual"),
          (U.Audio = "audio"),
          (U.Input = "input"),
          U
        ))(V || {});
        const q = {
            bAccessibilityDifficultyLevels: "gameplay",
            bAccessibilitySaveAnytime: "gameplay",
            bAccessibilityNarratedMenus: "audio",
            bAccessibilityBackgroundVolumeControls: "audio",
            bAccessibilityStereoSound: "audio",
            bAccessibilitySurroundSound: "audio",
            bAccessibilityResizableUI: "visual",
            bAccessibilitySubtitles: "visual",
            bAccessibilityColorAlternatives: "visual",
            bAccessibilityCameraComfort: "visual",
            bAccessibilityPlayableWithoutVision: "visual",
            bAccessibilityContrastControls: "visual",
            bAccessibilityKeyboardOnlyOption: "input",
            bAccessibilityMouseOnlyOption: "input",
            bAccessibilityTouchOnlyOption: "input",
            bAccessibilityPlayableWithoutQuicktimeEvents: "input",
            bAccessibilityChatTexttoSpeech: "input",
            bAccessibilityChatSpeechtoText: "input",
            bAccessibilityPlayableAtYourOwnPace: "input",
          },
          Z = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function de(U) {
          return {
            bAccessibilityResizableUI: U.includes(R.mWc),
            bAccessibilitySubtitles: U.includes(R.sCr),
            bAccessibilityColorAlternatives: U.includes(R.eEM),
            bAccessibilityCameraComfort: U.includes(R.YAh),
            bAccessibilityBackgroundVolumeControls: U.includes(R.Tby),
            bAccessibilityStereoSound: U.includes(R.a2r),
            bAccessibilitySurroundSound: U.includes(R.Obu),
            bAccessibilityNarratedMenus: U.includes(R.C0f),
            bAccessibilityChatSpeechtoText: U.includes(R.FpT),
            bAccessibilityChatTexttoSpeech: U.includes(R.r_E),
            bAccessibilityPlayableWithoutQuicktimeEvents: U.includes(R.eY9),
            bAccessibilityKeyboardOnlyOption: U.includes(R.TQL),
            bAccessibilityMouseOnlyOption: U.includes(R.beA),
            bAccessibilityTouchOnlyOption: U.includes(R.Pw_),
            bAccessibilityDifficultyLevels: U.includes(R.j2d),
            bAccessibilitySaveAnytime: U.includes(R.Rnx),
            bAccessibilityPlayableAtYourOwnPace: U.includes(R.eAR),
            bAccessibilityPlayableWithoutVision: U.includes(R.tIg),
            bAccessibilityContrastControls: U.includes(R.vVO),
          };
        }
        function ne(U) {
          const [ie, _] = (0, m.useState)(U.initialOpen ?? !1),
            xe = m.useId(),
            te = Object.entries(U.features)
              .filter(([me, J]) => J)
              .map(([me]) => me);
          if (te.length === 0) return null;
          const C = {};
          te.forEach((me) => {
            const J = q[me];
            (C[J] ??= []), C[J].push(me);
          });
          const ue = Object.keys(C).length > 1;
          return (0, t.jsxs)("details", {
            className: k().Details,
            open: ie,
            onToggle: (me) => _(me.currentTarget.open),
            children: [
              (0, t.jsxs)(K.f_, {
                className: k().Summary,
                children: [
                  (0, t.jsx)("div", {
                    className: k().ImageContainer,
                    children: (0, t.jsx)(N, {
                      className: k().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, t.jsxs)("span", {
                    className: k().FeatureNameContainer,
                    id: xe,
                    children: [
                      (0, t.jsx)("span", {
                        className: k().FeatureName,
                        children: ie
                          ? (0, Q.we)("#AccessibilityFeatures")
                          : (0, Q.we)(
                              "#AccessibilityFeaturesWithCount",
                              te.length,
                            ),
                      }),
                      (0, t.jsx)("a", {
                        className: k().InfoLink,
                        href: `${X.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("ul", {
                className: k().FeatureList,
                "aria-labelledby": xe,
                children: [
                  ue &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        C.gameplay &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "gameplay",
                              features: C.gameplay,
                              open: ie,
                            }),
                          }),
                        C.visual &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "visual",
                              features: C.visual,
                              open: ie,
                            }),
                          }),
                        C.audio &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "audio",
                              features: C.audio,
                              open: ie,
                            }),
                          }),
                        C.input &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "input",
                              features: C.input,
                              open: ie,
                            }),
                          }),
                      ],
                    }),
                  !ue &&
                    te.map((me) =>
                      (0, t.jsx)(
                        "li",
                        { children: (0, t.jsx)(se, { feature: me, open: ie }) },
                        me,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function N(U) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ...U,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
                fillRule: "evenodd",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
                fillRule: "evenodd",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
                fillRule: "evenodd",
              }),
            ],
          });
        }
        function L(U) {
          const ie = m.useId();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", {
                className: k().GroupLabel,
                id: ie,
                children: (0, Q.we)(Z[U.group]),
              }),
              (0, t.jsx)("ul", {
                className: k().FeatureGroupItems,
                "aria-labelledby": ie,
                children: U.features.map((_) =>
                  (0, t.jsx)(
                    "li",
                    { children: (0, t.jsx)(se, { feature: _, open: U.open }) },
                    _,
                  ),
                ),
              }),
            ],
          });
        }
        function se(U) {
          return (0, t.jsx)(K.Ii, {
            href: `${X.TS.STORE_BASE_URL}category/${T[U.feature]}`,
            className: k().InfoRow,
            focusable: U.open,
            children: (0, t.jsx)("span", {
              className: k().FeatureNameContainer,
              children: (0, t.jsx)("span", {
                className: k().FeatureName,
                children: (0, Q.we)(M[U.feature]),
              }),
            }),
          });
        }
      },
      61711: (j, ce, i) => {
        "use strict";
        i.r(ce), i.d(ce, { default: () => q });
        var t = i(7850),
          m = i(54130),
          Q = i(19298),
          X = i(20169),
          H = i(97525),
          k = i(18210),
          K = i(3166),
          R = i(1205),
          M = i.n(R),
          T = i(94502),
          V = i(36707);
        function q(Z) {
          const {
              title: de,
              navKey: ne,
              seeAllLink: N,
              appIDs: L,
              sortOrder: se,
              scorePenaltyIfOwned: U,
              capsuleSize: ie,
              bFullWidth: _,
            } = Z,
            xe = (0, K.Qn)(),
            { bShowSeeMoreHint: te, panelProps: C } = (0, H.i)(N);
          return (0, t.jsx)(Q.Z, {
            className: (0, V.A)(M().StoreItemsCarousel, _ && M().FullWidth),
            navEntryPreferPosition: X.iU.PREFERRED_CHILD,
            ...C,
            children: (0, t.jsxs)(m.q, {
              children: [
                (0, t.jsxs)("div", {
                  className: M().Header,
                  children: [
                    (0, t.jsx)("div", { className: M().Title, children: de }),
                    !xe && (0, t.jsx)(T.H, { url: N }),
                    xe &&
                      (0, t.jsx)(H.o, {
                        label: (0, k.we)("#StoreApp_SeeAll"),
                        shown: te,
                      }),
                  ],
                }),
                (0, t.jsx)(Q.Z, {
                  preferredFocus: !0,
                  children: (0, t.jsx)(T._, {
                    navKey: ne,
                    classes: M().StorePageCarousel,
                    appIDs: L,
                    maxItemCount: 4,
                    sortOrder: se,
                    scorePenaltyIfOwned: U,
                    capsuleSize: ie,
                  }),
                }),
              ],
            }),
          });
        }
      },
      94502: (j, ce, i) => {
        "use strict";
        i.d(ce, { H: () => C, _: () => _ });
        var t = i(7850),
          m = i(24660),
          Q = i(78192),
          X = i(90626),
          H = i(24805),
          k = i(18994),
          K = i(19619),
          R = i(10142),
          M = i(10349),
          T = i(84676),
          V = i(36707),
          q = i(18210),
          Z = i(3166),
          de = i(68538),
          ne = i(96117),
          N = i(89524),
          L = i.n(N);
        const se = -1,
          U = parseInt(L().strScrollSnapCarouselItemHeight),
          ie = 250;
        function _(ue) {
          const {
              navKey: me,
              classes: J,
              appIDs: oe,
              sortOrder: $,
              scorePenaltyIfOwned: re,
              capsuleSize: ae,
              maxItemCount: ge,
              mapAppToCreatorClan: Ie,
              strFeatureFirstAppMsg: Tt,
              setNumberVisibleItems: Nt,
            } = ue,
            G = (0, k.a4)(910),
            ve = (0, Z.Qn)(),
            [mn, qn] = (0, K.L2)(),
            [Gt, _n] = X.useState(oe),
            es = (0, T.zX)(oe, H.Xh),
            [Kn, cs] = X.useState(null);
          X.useEffect(() => {
            if (es == T.Sq) return;
            const Yt = oe.filter(
              (St) => !R.A.Get().BIsStoreItemMissing(St, Q.c6.qI),
            );
            if (Tt && G && !ve && Yt.length > 0 && Yt[0] == oe[0]) {
              const St = [Yt[0], se, ...Yt.slice(1)];
              _n(St), cs(Tt), Nt?.(St.length);
            } else _n(Yt), Nt?.(Yt.length);
          }, [oe, ve, G, es, Nt, Tt]);
          const E = ve;
          return (0, t.jsx)(de.F, {
            className: (0, V.A)(J, {
              SaleSectionCarousel: !0,
              [L().Carousel]: !0,
            }),
            visibleElements: ge,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderHeight: U,
            lazyRenderPlaceholderWidth: ie,
            gap: 12,
            hideArrows: !1,
            screenIsWide: G,
            navKey: me,
            bForceSimpleCarousel: E,
            children: te(qn, Gt, $ ?? "none", re ?? 3).map((Yt, St) =>
              (0, t.jsx)(
                xe,
                {
                  appID: Yt,
                  size: ae,
                  creatorClanAccountID: Ie?.get(Yt),
                  strFeaturingMsg: St == 0 && Kn ? Kn : void 0,
                },
                Yt,
              ),
            ),
          });
        }
        function xe(ue) {
          const {
              appID: me,
              size: J,
              creatorClanAccountID: oe,
              strFeaturingMsg: $,
            } = ue,
            [re] = (0, T.G6)(me, Q.c6.qI, H.Xh);
          if (me == se)
            return (0, t.jsx)("div", {
              className: (0, V.A)({
                [L().Capsule]: !0,
                [L().Small]: J == "small",
              }),
            });
          if (!re)
            return (0, t.jsx)("div", {
              className: (0, V.A)(L().Capsule, L().Placeholder),
            });
          const ae = (0, M._4)(re.GetStoreItemType(), re.GetAppType()),
            ge = { id: re.GetID(), type: ae },
            Ie = !!$;
          return (0, t.jsx)("div", {
            className: (0, V.A)({
              [L().Capsule]: !0,
              [L().TwoWide]: Ie,
              [L().Small]: J == "small",
            }),
            children: (0, t.jsx)(ne.W, {
              capsule: ge,
              imageType: "header",
              bHidePlatforms: !0,
              bHideStoreHover: Ie,
              creatorAccountID: oe,
              strDoubleCapsuleMessage: Ie ? (0, q.we)($) : void 0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function te(ue, me, J, oe) {
          const $ = X.useMemo(
              () => me.filter((ae) => !ue.BIsGameIgnored(ae)),
              [me, ue],
            ),
            re = X.useMemo(
              () => Array.from({ length: $.length }, () => Math.random()),
              [$.length],
            );
          return J == "shuffle"
            ? $.map((ae, ge) => {
                const Ie =
                  (ue.BIsGameOwned(ae) ? oe : 0) +
                  (Math.sqrt(ge) + 2) * re[ge] +
                  Math.sqrt(ge);
                return { id: ae, score: Ie };
              })
                .sort((ae, ge) => ae.score - ge.score)
                .map((ae) => ae.id)
            : J == "scored"
              ? $.map((ae, ge) => ({
                  id: ae,
                  score: ue.BIsGameOwned(ae) ? oe + ge : ge,
                }))
                  .sort((ae, ge) => ae.score - ge.score)
                  .map((ae) => ae.id)
              : $;
        }
        function C(ue) {
          const { url: me } = ue;
          return me
            ? (0, t.jsx)(m.Ii, {
                href: me,
                className: (0, V.A)(
                  L().SeeAllLink,
                  "btnv6_grey_black btn_medium",
                ),
                children: (0, t.jsx)("span", {
                  children: (0, q.we)("#StoreApp_SeeAll"),
                }),
              })
            : void 0;
        }
      },
      96648: (j, ce, i) => {
        "use strict";
        i.r(ce),
          i.d(ce, {
            AppGameInterestCacheInit: () => Vo,
            AppStoreBrowseCacheInit: () => Qo,
            default: () => Fh,
          });
        var t = i(7850),
          m = i(90626),
          Q = i(65329),
          X = i(72849),
          H = i(7582),
          k = i(53025),
          K = i(71157),
          R = i(90537),
          M = i(24660),
          T = i(19298),
          V = i(20169),
          q = i(95174),
          Z = i(39905),
          de = i(77495),
          ne = i(12037),
          N = i(36118),
          L = i(18210);
        function se(s) {
          return (0, t.jsxs)("div", {
            className: ne.LatestUpdateButtonCtn,
            children: [
              (0, t.jsx)("div", {
                className: ne.LatestUpdateIcon,
                children: (0, t.jsx)(N.UTF, { role: "presentation" }),
              }),
              (0, t.jsx)(M.ml, {
                className: ne.LatestUpdateButton,
                onClick: s.onClick,
                children: Z.Z.Localize(
                  "#EventBrowse_LatestUpdateTime_Button",
                  (0, L._l)(s.nUpdateTime),
                ),
              }),
            ],
          });
        }
        function U(s) {
          const { nUpdateTime: e, announcementGID: n, onClick: r } = s,
            a = n ? de.O3.GetClanEventFromAnnouncementGID(n) : null,
            o = q.u;
          return (0, t.jsxs)("div", {
            className: ne.Container,
            children: [
              (0, t.jsxs)("h2", {
                children: [
                  (0, L.we)("#EventBrowse_LastUpdateDate", (0, L._l)(e)),
                  (0, t.jsx)(M.ml, {
                    className: ne.SectionButton,
                    onClick: (c) => {
                      r?.(), c.stopPropagation(), c.preventDefault();
                    },
                    children: (0, L.we)("#EventBrowse_MoreEventsBtn"),
                  }),
                ],
              }),
              !!a &&
                (0, t.jsx)(T.Z, {
                  className: ne.EventsSummariesCtn,
                  "flow-children": "column",
                  navEntryPreferPosition: V.iU.PREFERRED_CHILD,
                  children: (0, t.jsx)(o, {
                    event: a,
                    onClick: (c) => {
                      r?.(), c.stopPropagation(), c.preventDefault();
                    },
                  }),
                }),
            ],
          });
        }
        var ie = i(54130),
          _ = i(56492),
          xe = i(33902),
          te = i(71568),
          C = i(3166);
        const ue = 500;
        function me(s) {
          const {
              strClassName: e,
              rgEvents: n,
              fnEventShowModal: r,
              elPostRowElement: a,
              bViewAllShowInfiniteScroll: o,
              nSummaryMaxLength: c,
            } = s,
            d = (0, xe.d)(),
            u = (0, te.R7)(),
            g = (0, C.Qn)();
          let f = 2,
            h = ue + 1;
          return (
            u.ownerWindow.window
              ? (h = u.ownerWindow.window.innerWidth)
              : d.viewportWidth && (h = d.viewportWidth.value),
            (f = h <= ue ? 1 : 2),
            n && n.length == 0 && !a
              ? null
              : (0, t.jsxs)(T.Z, {
                  className: e,
                  "flow-children": "row",
                  children: [
                    !!n &&
                      n.length > 0 &&
                      (0, t.jsx)("div", {
                        className: ne.Container,
                        children: (0, t.jsxs)(ie.q, {
                          children: [
                            (0, t.jsxs)("h2", {
                              children: [
                                Z.Z.Localize("#EventBrowse_RecentEvents"),
                                !g &&
                                  !!n &&
                                  (0, t.jsx)(t.Fragment, {
                                    children:
                                      o && r
                                        ? (0, t.jsx)(M.ml, {
                                            className: ne.SectionButton,
                                            onClick: () => r(n[0]),
                                            children: Z.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          })
                                        : (0, t.jsx)(_.tj, {
                                            eventModel: n[0],
                                            route: _.PH.k_eViewWebSiteHub,
                                            className: ne.SectionButton,
                                            children: Z.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          }),
                                  }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: ne.EventsSummariesCtn,
                              children: n.slice(0, f).map((x) => {
                                const v =
                                  r && !(0, _.sY)()
                                    ? (I) => {
                                        r(x),
                                          I.stopPropagation(),
                                          I.preventDefault();
                                      }
                                    : void 0;
                                return (0, t.jsx)(
                                  q.u,
                                  {
                                    event: x,
                                    onClick: v,
                                    nSummaryMaxLength: c,
                                  },
                                  x.GID,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                    a,
                  ],
                })
          );
        }
        var J = i(49984),
          oe = i(19188),
          $ = i(96538),
          re = i(30096);
        function ae(s) {
          const {
              trackingLocation: e,
              strClassName: n,
              bViewAllShowInfiniteScroll: r,
            } = s,
            [a, o, c] = (0, re.uD)(),
            [d, u] = (0, m.useState)(null),
            [g, f] = (0, m.useState)(void 0),
            h = (0, R.Y)(),
            x = (0, m.useCallback)(() => {
              u(null), c();
            }, [c]),
            v = (0, m.useCallback)(
              (je) => {
                e &&
                  je &&
                  je.BIsPartnerEvent() &&
                  h.MarkEventRead(je.GID, je.clanSteamID.GetAccountID(), e) &&
                  h.Flush(),
                  u(je),
                  f(void 0),
                  o();
              },
              [e, h, o],
            ),
            { last_update_event: I, rgEvents: B } = ge({
              ...s,
              fnEventShowModal: v,
            }),
            A = (0, m.useCallback)(() => {
              const {
                event_gid: je,
                announcement_gid: sn,
                clan_account_id: Kt,
              } = I;
              e && je && h.MarkEventRead(je, Kt, e) && h.Flush(),
                f(sn),
                u(null),
                o();
            }, [I, o, h, e]);
          (0, m.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (je, sn) => {
                f(sn), u(null), f(sn), o();
              }),
              () => {
                window.fnPartnerEvent_ShowInfiniteScroll &&
                  delete window.fnPartnerEvent_ShowInfiniteScroll;
              }
            ),
            [o],
          );
          const S = (0, C.Qn)(),
            z = !!I && !!I.rtime,
            Y =
              z && !!I.announcement_gid && (!B || B.length == 0)
                ? I.announcement_gid
                : void 0;
          let W;
          return (
            z && Y
              ? (W = (0, t.jsx)(U, {
                  nUpdateTime: I.rtime,
                  announcementGID: Y,
                  onClick: A,
                }))
              : z &&
                !Y &&
                !S &&
                (W = (0, t.jsx)(se, { nUpdateTime: I.rtime, onClick: A })),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)($.EN, {
                  active: a,
                  children: (0, t.jsx)(Tt, {
                    ...s,
                    announcementGID: g || d?.AnnouncementGID,
                    eventModel: d,
                    closeModal: x,
                  }),
                }),
                (0, t.jsx)(me, {
                  elPostRowElement: W,
                  rgEvents: B,
                  fnEventShowModal: v,
                  bViewAllShowInfiniteScroll: r,
                  strClassName: n,
                }),
              ],
            })
          );
        }
        function ge(s) {
          const {
              appid: e,
              event_customization: n,
              partnerEventStore: r,
              trackingLocation: a,
              fnEventShowModal: o,
            } = s,
            [c, d] = (0, m.useState)(null),
            [u, g] = (0, m.useState)(null),
            f = (0, R.Y)(),
            [h] = (0, K.Q)("emgid", void 0),
            [x] = (0, K.Q)("announce_gid", void 0);
          return (
            (0, m.useEffect)(() => {
              const v = (0, J.v)("EventWebRowEmbed");
              let I = !1;
              if (Ie(v)) {
                (I = v.bPreLoaded), d(v.last_update_event);
                const B = [];
                v.announcementGIDList.forEach((A) => {
                  const S = de.O3.GetClanEventFromAnnouncementGID(A);
                  S && B.push(S);
                }),
                  g(B);
              }
              I ||
                (async () => {
                  const A = await r.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    e,
                    0,
                    2,
                    n,
                  );
                  g(A),
                    a &&
                      A &&
                      A.length > 0 &&
                      (A.filter((S) => S.BIsPartnerEvent()).forEach((S) =>
                        f.MarkEventShown(
                          S.GID,
                          S.clanSteamID.GetAccountID(),
                          a,
                        ),
                      ),
                      f.Flush());
                })();
            }, [e, n, o, r, f, a]),
            (0, m.useEffect)(() => {
              if (u != null && (h || x)) {
                const v = u.find((I) => I.GID === h || I.AnnouncementGID == x);
                v
                  ? o(v)
                  : (async () => {
                      const B = h
                        ? await r.LoadPartnerEventFromClanEventGID(e, h, 0)
                        : await r.LoadPartnerEventFromAnnoucementGID(e, x, 0);
                      B && g([...u, B]);
                    })();
              }
            }, [h, x, u, o, g, r, e]),
            { last_update_event: c, rgEvents: u }
          );
        }
        function Ie(s) {
          const e = s;
          return e && typeof e == "object"
            ? e.bPreLoaded !== void 0 &&
                typeof e.bPreLoaded == "boolean" &&
                Array.isArray(e.announcementGIDList)
            : !1;
        }
        function Tt(s) {
          const {
              appid: e,
              partnerEventStore: n,
              trackingLocation: r,
              announcementGID: a,
              eventModel: o,
              closeModal: c,
            } = s,
            d = (0, C.Qn)();
          return (0, t.jsx)(oe.N, {
            className: d ? void 0 : ne.StoreHeaderAdjust,
            eventClassName: d ? ne.GamePadUIWidthAdjust : void 0,
            appid: e,
            trackingLocation: r,
            announcementGID: a,
            partnerEventStore: n,
            eventModel: o ?? void 0,
            closeModal: c,
          });
        }
        function Nt(s) {
          const e = (0, H.s4)(),
            n = new Date(e.setUTCHours(0, 0, 0, 0) - 4320 * 60 * 60 * 1e3),
            r = Math.floor(n.getTime() / 1e3),
            { appid: a } = s;
          return (0, t.jsx)(ae, {
            appid: a,
            partnerEventStore: k.$.Get(),
            event_customization: {
              rtime_oldestevent: r,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [Q.G$._C],
            },
            strClassName: "early_access_announcements",
            trackingLocation: X.Tc.j$,
          });
        }
        var G = i(99412),
          ve = i(64868),
          mn = i(41735),
          qn = i.n(mn),
          Gt = i(29522),
          _n = i(58483),
          es = i(82385),
          Kn = i(29245),
          cs = i(27284),
          E = i(40358),
          Yt = i(18057),
          St = i(6019);
        function pr(s) {
          const e = (0, m.useRef)(null),
            n = (0, _n.LJ)(),
            r = Number(s.appID),
            a = (0, Gt.$5)(r),
            { data: o } = (0, E.J$)(a),
            [c, d] = (0, m.useState)(null);
          (0, m.useEffect)(
            () => (
              (async () => {
                const I = qn().CancelToken.source();
                e.current = I.cancel;
                const B = {
                    exclude_tags: ["steam_game_festival_artist_statement"],
                    require_tags: ["steam_game_festival_broadcast"],
                  },
                  A = await de.O3.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    r,
                    0,
                    1,
                    B,
                  );
                I.token.reason || (A.length > 0 && d(A[0]));
              })(),
              () => {
                e.current && e.current("DemoAndQuickPitch: Unmounting");
              }
            ),
            [r],
          );
          const [u, g, f] = (0, ve.uD)(),
            h = c ? c.GetNameWithFallback((0, G.sfN)(C.TS.LANGUAGE)) : null,
            x = c ? c.BHasEventEnded() : !0;
          return !o ||
            !o.related_items?.demo_appid ||
            o.related_items?.demo_appid.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className: St.TileContainer,
                    children: [
                      (0, t.jsxs)("div", {
                        className: St.TileTitleContainer,
                        children: [
                          (0, t.jsxs)("div", {
                            className: St.TileTitleInnerContainer,
                            children: [
                              (0, t.jsx)("div", {
                                className: St.TileTitle,
                                children: (0, L.we)(
                                  "#Sale_DownloadDemo",
                                  o.name || "",
                                ),
                              }),
                              (0, t.jsx)(Kn.Q, { id: a }),
                            ],
                          }),
                          (0, t.jsx)(cs.j, {
                            id: a,
                            className: St.TileActionButton,
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: St.TileActionContainer,
                        children:
                          c &&
                          h &&
                          (0, t.jsxs)("div", {
                            className: St.TileActionInnerContainer,
                            children: [
                              x
                                ? (0, t.jsx)("h1", {
                                    children: (0, L.we)(
                                      "#EventBrowse_RecentUpdates",
                                    ),
                                  })
                                : (0, t.jsx)("h1", {
                                    children: (0, L.we)(
                                      "#EventCalendar_TuneIn",
                                    ),
                                  }),
                              (0, t.jsxs)("div", {
                                className: St.TileActionInner,
                                onClick: g,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: St.TileActionInnerTitle,
                                    children: h,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: St.TileActionInnerText,
                                    children: (0, t.jsx)(Yt.K4, {
                                      dateAndTime:
                                        c.GetStartTimeAndDateUnixSeconds(),
                                      bSingleLine: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, t.jsx)($.EN, {
                    active: u,
                    children: (0, t.jsx)(es.AD, {
                      initialEvent: c,
                      bShowOnlyInitialEvent: !1,
                      partnerEventStore: de.O3,
                      emoticonStore: n,
                      showAppHeader: !0,
                      closeModal: f,
                    }),
                  }),
                ],
              });
        }
        var Ns = i(20076),
          Jo = i(84750),
          D = i(36707),
          Xo = i(27510),
          Dt = i.n(Xo),
          Fe = i(56718),
          ds = i(53906);
        const wh = new Jo.cE();
        var Ds = ((s) => (
          (s[(s.EPurchaseNoticeType_ControllerRequired = 0)] =
            "EPurchaseNoticeType_ControllerRequired"),
          (s[(s.EPurchaseNoticeType_VRRequired = 1)] =
            "EPurchaseNoticeType_VRRequired"),
          (s[(s.EPurchaseNoticeType_VRSupported = 2)] =
            "EPurchaseNoticeType_VRSupported"),
          s
        ))(Ds || {});
        function Ho(s) {
          const { appid: e, type: n } = s;
          switch (n) {
            case 0:
              return (0, t.jsx)(qo, { appid: e, controllerType: ds.Oh });
            case 1:
              return (0, t.jsx)(_o, {});
            default:
              return (0, t.jsx)(el, {});
          }
        }
        function qo(s) {
          return (0, t.jsxs)("div", {
            className: (0, D.A)(Dt().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, D.A)(Dt().PurchaseNoticeImageContainer),
                children: (0, t.jsx)(Fe.xIk, {
                  type: "xbox",
                  className: (0, D.A)(Dt().PurchaseNoticeImage, Dt().Tilt),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(Dt().PurchaseNoticeLabel),
                children: (0, L.we)("#PurchaseNotice_ControllerRequired"),
              }),
            ],
          });
        }
        function _o(s) {
          return (0, t.jsxs)("div", {
            className: (0, D.A)(Dt().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, D.A)(Dt().PurchaseNoticeImageContainer),
                children: (0, t.jsx)(Fe.oqe, {
                  className: (0, D.A)(Dt().PurchaseNoticeImage, Dt().VROnly),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(Dt().PurchaseNoticeLabel),
                children: (0, L.we)("#PurchaseNotice_VRRequired"),
              }),
            ],
          });
        }
        function el(s) {
          return (0, t.jsxs)("div", {
            className: (0, D.A)(Dt().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, D.A)(
                  Dt().PurchaseNoticeImageContainer,
                  Dt().VRSupported,
                ),
                children: (0, t.jsx)(Fe.Kkn, {
                  className: (0, D.A)(
                    Dt().PurchaseNoticeImage,
                    Dt().VRSupported,
                  ),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(Dt().PurchaseNoticeLabel),
                children: (0, L.we)("#PurchaseNotice_VRSupported"),
              }),
            ],
          });
        }
        const fr = Ho;
        var Ei = i(97525),
          tl = i(24805),
          Pi = i(813),
          Mi = i(60480),
          Ti = ((s) => (
            (s[(s.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (s[(s.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            s
          ))(Ti || {}),
          nl = i(10142),
          Si = i(84676),
          Li = i(72147),
          sl = i(51249),
          Pe = i.n(sl),
          Oi = i(94502);
        function rl(s) {
          const {
              clanID: e,
              title: n,
              seeAllLink: r,
              appIDs: a,
              rgAppIDToCreatorIDs: o,
              rgAllCreatorClanIDs: c,
              strFeatureFirstAppMsg: d,
              bFullWidth: u,
            } = s,
            g = (0, Si.zX)(a, tl.Xh),
            f = (0, m.useMemo)(() => {
              const x = new Map(
                Object.entries(o).map(([v, I]) => [Number(v), I]),
              );
              if (g != Si.Sq && e == Ti.k_CreatorHomeAll) {
                const v = new Set(c);
                a.forEach((I) => {
                  if (!x.has(I)) {
                    const B = nl.A.Get().GetApp(I);
                    B &&
                      B.GetAllCreatorClanIDs()?.some((A) =>
                        v.has(A) ? (x.set(I, A), !0) : !1,
                      );
                  }
                });
              }
              return x;
            }, [o, g, e, c, a]),
            h = "developer";
          return a.length > 0
            ? (0, t.jsx)(il, {
                creatorHomeType: h,
                clanID: e,
                titleOverride: n,
                seeAllLink: r,
                appIDs: a,
                mapAppIDsToCreatorClanID: f,
                strFeatureFirstAppMsg: d,
                bFullWidth: u,
              })
            : (0, t.jsx)(al, { creatorHomeType: h, clanID: e, bFullWidth: u });
        }
        function il(s) {
          const {
              creatorHomeType: e,
              clanID: n,
              titleOverride: r,
              seeAllLink: a,
              appIDs: o,
              mapAppIDsToCreatorClanID: c,
              strFeatureFirstAppMsg: d,
              bFullWidth: u,
            } = s,
            g = (0, C.Qn)(),
            [f, h] = (0, Pi.TB)(n),
            { creatorHome: x } = (0, Mi.FV)(n),
            v = x?.GetCreatorHomeURL(e),
            [I, B] = m.useState(void 0),
            { bShowSeeMoreHint: A, panelProps: S } = (0, Ei.i)(a);
          if (!x) return;
          const z = !g && (d ? I == 1 : I <= 2) && h;
          return (0, t.jsx)(T.Z, {
            className: (0, D.A)(
              Pe().CreatorHomeWithItems,
              z ? Pe().WithFollowBtn : "",
              u && Pe().FullWidth,
            ),
            navEntryPreferPosition: V.iU.PREFERRED_CHILD,
            ...S,
            children: (0, t.jsxs)(ie.q, {
              children: [
                h?.creator_page_bg_url &&
                  (0, t.jsx)("div", {
                    className: Pe().Background,
                    style: { backgroundImage: `url(${h.creator_page_bg_url})` },
                  }),
                (0, t.jsxs)(T.Z, {
                  className: Pe().Header,
                  "flow-children": "row",
                  children: [
                    (0, t.jsxs)("div", {
                      className: Pe().ClanInfoRow,
                      children: [
                        !!h &&
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)(M.Ii, {
                              href: v,
                              focusable: v !== a,
                              children: (0, t.jsx)("img", {
                                className: Pe().ClanAvatarImage,
                                src: x.GetAvatarURLFullSize(),
                              }),
                            }),
                          }),
                        (0, t.jsx)("img", {
                          className: Pe().AvatarBackground,
                          src: x.GetAvatarURLFullSize(),
                        }),
                        (0, t.jsx)("div", {
                          className: Pe().ClanName,
                          children: (0, t.jsx)("a", {
                            href: v,
                            children: r || x.GetName(),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: Pe().ButtonContainer,
                      children: [
                        !!(!z && h && !g) &&
                          (0, t.jsx)(Li.of, {
                            className: Pe().CarouselFollowButton,
                            clanAccountID: n,
                          }),
                        !g && (0, t.jsx)(Oi.H, { url: a }),
                        g &&
                          (0, t.jsx)(Ei.o, {
                            label: (0, L.we)("#StoreApp_SeeAll"),
                            shown: A,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)(T.Z, {
                  className: (0, D.A)(
                    Pe().CarouselContentsRow,
                    z && Pe().WithFollowSection,
                  ),
                  preferredFocus: !0,
                  children: [
                    (0, t.jsx)(Oi._, {
                      navKey: "store_page_" + e,
                      classes: Pe().Carousel,
                      appIDs: o,
                      maxItemCount: z ? I : 4,
                      mapAppToCreatorClan: c,
                      strFeatureFirstAppMsg: d,
                      setNumberVisibleItems: B,
                    }),
                    z &&
                      (0, t.jsx)("div", {
                        className: Pe().CarouselFollowSection,
                        children: (0, t.jsx)(Ai, {
                          clanID: n,
                          creatorName: x.GetName(),
                          creatorUrl: v,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function al(s) {
          const { creatorHomeType: e, clanID: n, bFullWidth: r } = s,
            [a, o] = (0, Pi.TB)(n),
            { creatorHome: c } = (0, Mi.FV)(n),
            d = c?.GetCreatorHomeURL(e);
          if (c)
            return (0, t.jsxs)("div", {
              className: (0, D.A)(
                Pe().CreatorHomeWithoutItems,
                r && Pe().FullWidth,
              ),
              children: [
                o?.creator_page_bg_url &&
                  (0, t.jsx)("div", {
                    className: Pe().Background,
                    style: { backgroundImage: `url(${o.creator_page_bg_url})` },
                  }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("a", {
                    href: d,
                    children: (0, t.jsx)("img", {
                      className: Pe().ClanAvatarImage,
                      src: c.GetAvatarURLFullSize(),
                    }),
                  }),
                }),
                (0, t.jsx)(Ai, {
                  clanID: n,
                  creatorName: c.GetName(),
                  creatorUrl: d,
                }),
              ],
            });
        }
        function Ai(s) {
          const { clanID: e, creatorName: n, creatorUrl: r } = s;
          return (0, t.jsxs)("div", {
            className: Pe().ClanInfoColumn,
            children: [
              (0, t.jsx)("div", {
                className: Pe().ClanFollowTitle,
                children: (0, t.jsx)("a", {
                  href: r,
                  children: (0, L.we)("#StoreApp_FollowCreator", n),
                }),
              }),
              (0, t.jsx)("div", {
                className: Pe().ClanFollowSubtitle,
                children: (0, L.we)("#StoreApp_FollowCreatorSubtitle"),
              }),
              (0, t.jsx)("div", {
                className: Pe().ClanFollowButtonContainer,
                children: (0, t.jsx)(Li.of, {
                  className: Pe().FollowButton,
                  clanAccountID: e,
                }),
              }),
            ],
          });
        }
        var us = i(14947),
          Fs = i(12997),
          hr = i(64271),
          ol = i(65946),
          ll = Object.defineProperty,
          cl = Object.getOwnPropertyDescriptor,
          Ws = (s, e, n, r) => {
            for (
              var a = r > 1 ? void 0 : r ? cl(e, n) : e, o = s.length - 1, c;
              o >= 0;
              o--
            )
              (c = s[o]) && (a = (r ? c(e, n, a) : c(a)) || a);
            return r && a && ll(e, n, a), a;
          };
        function dl(s) {
          let {
              id: e,
              dashManifests: n,
              hlsManifest: r,
              screenshot: a,
              title: o,
              category: c,
              statsURL: d,
            } = s,
            u = ml(),
            [g, f, h, x] = (0, ol.q3)(() => [
              !u.BPlayTrailer(e),
              u.BAutoplayEnabled(),
              u.GetPlayerVolume(),
              u.BAudioMuted(),
            ]),
            v = (0, m.useCallback)(() => {
              u.FireTrailerPlaybackEnded();
            }, [u]);
          return ul(g)
            ? (0, t.jsx)(Fs.v, {
                autoplayEnabled: f,
                setAutoplayEnabled: u.GetSetAutoplayEnabled(),
                playerVolume: h,
                setPlayerVolume: u.GetSetPlayerVolume(),
                audioMuted: x,
                setAudioMuted: u.GetSetAudioMuted(),
                children: (0, t.jsx)(hr.P, {
                  dashManifests: n,
                  hlsManifest: r,
                  screenshot: a,
                  forcePause: g,
                  onPlaybackEnd: v,
                  altText: o,
                  title: o,
                  category: c,
                  statsURL: d,
                }),
              })
            : null;
        }
        function ul(s) {
          let e = m.useRef(!1);
          return s || (e.current = !0), e.current;
        }
        class ms {
          m_mapTrailerPlay = new Map();
          m_fnOnTrailerEnd;
          m_bAutoplayEnabled = !1;
          m_fnSetAutoplayEnabled;
          m_flPlayerVolume = 1;
          m_fnSetPlayerVolume;
          m_bAudioMuted = !0;
          m_fnSetAudioMuted;
          constructor() {
            (0, us.Gn)(this);
          }
          InitAutoplayMethods(e, n) {
            (this.m_bAutoplayEnabled = e), (this.m_fnSetAutoplayEnabled = n);
          }
          InitPlayerVolumeMethods(e, n) {
            (this.m_flPlayerVolume = e / 100),
              (this.m_fnSetPlayerVolume = (r) => {
                (r = r * 100), n(r);
              });
          }
          InitAudioMutedMethods(e, n) {
            (this.m_bAudioMuted = e), (this.m_fnSetAudioMuted = n);
          }
          UpdateAutoplay(e) {
            this.m_bAutoplayEnabled = e;
          }
          UpdateVolume(e) {
            this.m_flPlayerVolume = e / 100;
          }
          UpdateMuted(e) {
            this.m_bAudioMuted = e;
          }
          BAutoplayEnabled() {
            return this.m_bAutoplayEnabled;
          }
          GetSetAutoplayEnabled() {
            return this.m_fnSetAutoplayEnabled;
          }
          GetPlayerVolume() {
            return this.m_flPlayerVolume;
          }
          GetSetPlayerVolume() {
            return this.m_fnSetPlayerVolume;
          }
          BAudioMuted() {
            return this.m_bAudioMuted;
          }
          GetSetAudioMuted() {
            return this.m_fnSetAudioMuted;
          }
          SetTrailerState(e, n) {
            this.m_mapTrailerPlay.set(e, n);
          }
          SetTrailerEndCallback(e) {
            this.m_fnOnTrailerEnd = e;
          }
          FireTrailerPlaybackEnded() {
            this.m_fnOnTrailerEnd && this.m_fnOnTrailerEnd();
          }
          BPlayTrailer(e) {
            let n = this.m_mapTrailerPlay.get(e);
            return n === void 0 ? !1 : n;
          }
        }
        Ws([us.sH], ms.prototype, "m_mapTrailerPlay", 2),
          Ws([us.sH], ms.prototype, "m_bAutoplayEnabled", 2),
          Ws([us.sH], ms.prototype, "m_flPlayerVolume", 2),
          Ws([us.sH], ms.prototype, "m_bAudioMuted", 2);
        let ws = null;
        function ml() {
          return (
            ws ||
              ((ws = new ms()),
              window.dispatchEvent(
                new CustomEvent("valve_gamehighlighttrailers_ready", {
                  detail: ws,
                }),
              )),
            ws
          );
        }
        var yr = i(67705),
          Fn = i(51079),
          ye = i(17479),
          Gn = i(71421);
        function gn(s) {
          const e = s.strSecondaryCategory
              ? `${C.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}%2C${s.strSecondaryCategory}`
              : `${C.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}`,
            n = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  className: (0, D.A)(
                    ye.ImgSection,
                    s.bHightlightRow && ye.HighlightRow,
                    s.bHighlightGPRequired && ye.GamepadRequired,
                  ),
                  children: s.tagImage,
                }),
                (0, t.jsxs)("div", {
                  className: (0, D.A)(
                    ye.LocSection,
                    s.bHighlightText && ye.HighlightText,
                    s.bHightlightRow && ye.HighlightRow,
                    s.bHighlightGPRequired && ye.GamepadRequired,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, D.A)(
                        ye.LocString,
                        s.bHighlightText && ye.HighlightText,
                        s.bHightlightRow && ye.HighlightRow,
                        s.bHighlightGPRequired && ye.GamepadRequired,
                        s.bPersonalized && ye.Personalized,
                      ),
                      children: (0, L.we)(s.strLocalizationToken),
                    }),
                    s.strTooltipString &&
                      (0, t.jsx)(Gn.he, {
                        toolTipContent: (0, L.we)(s.strTooltipString),
                        className: ye.ToolTipContainer,
                        children: (0, t.jsx)("span", {
                          className: ye.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return s.strCategory
            ? (0, t.jsx)("a", { href: e, className: ye.InfoRow, children: n })
            : (0, t.jsx)("div", { className: ye.InfoRow, children: n });
        }
        function Rh(s) {
          return jsx("div", {
            className: styles.PreviewContainer,
            children: jsx(zi, { bPreview: !0, ...s }),
          });
        }
        function gl(s) {
          return (0, t.jsx)(t.Fragment, {
            children:
              (s.bPartialXboxControllerSupport ||
                s.bFullXboxControllerSupport) &&
              (0, t.jsx)("div", {
                className: ye.StoreSidebarContainer,
                children: (0, t.jsx)(zi, { ...s }),
              }),
          });
        }
        function pl() {
          return (0, t.jsx)(gn, {
            tagImage: (0, t.jsx)(Fe.Moo, {
              className: (0, D.A)(ye.Tilt, ye.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function fl() {
          return (0, t.jsxs)("div", {
            className: (0, D.A)(ye.PurchaseNoticeContainer),
            children: [
              (0, t.jsx)(Fe.Kz1, {
                className: (0, D.A)(ye.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(ye.PurchaseNoticeLabel),
                children: (0, L.we)(
                  "#Store_ControllerSupport_GamepadPreferred",
                ),
              }),
            ],
          });
        }
        function hl(s) {
          const { bNoKeyboardSupport: e, bGamepadPreferred: n } = s;
          return (0, t.jsxs)("div", {
            className: (0, D.A)(ye.NoticeContainer),
            children: [e && (0, t.jsx)(pl, {}), n && !e && (0, t.jsx)(fl, {})],
          });
        }
        function zi(s) {
          const {
            bControllerSupportWizardComplete: e,
            bPS4ControllerSupport: n,
            bPS5ControllerSupport: r,
            bPS4ControllerBTSupport: a,
            bPS5ControllerBTSupport: o,
            bFullXboxControllerSupport: c,
            bPartialXboxControllerSupport: d,
            bSteamInputAPISupport: u,
            bHasOther: g,
            bHasPS4: f,
            bHasPS5: h,
            bHasXbox: x,
            bPreview: v,
          } = s;
          let I = [];
          if (n && r && a && o) {
            const B = (0, t.jsx)(Fe.pcV, {
                className: ye.SmallerSVG,
                controllerType: ds._X,
                partial: !c,
                role: "presentation",
              }),
              A = f || h;
            I.push(
              (0, t.jsx)(
                gn,
                {
                  tagImage: B,
                  strLocalizationToken: A
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: A,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (n) {
              const B = (0, t.jsx)(Fe.pcV, {
                className: ye.SmallerSVG,
                controllerType: ds._X,
                partial: !c,
                role: "presentation",
              });
              a
                ? I.push(
                    (0, t.jsx)(
                      gn,
                      {
                        tagImage: B,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: f,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : I.push(
                    (0, t.jsx)(
                      gn,
                      {
                        tagImage: B,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: f,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (r) {
              const B = (0, t.jsx)(Fe.pcV, {
                className: ye.SmallerSVG,
                controllerType: ds.HD,
                partial: !c,
                role: "presentation",
              });
              o
                ? I.push(
                    (0, t.jsx)(
                      gn,
                      {
                        tagImage: B,
                        strLocalizationToken: h
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: h,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : I.push(
                    (0, t.jsx)(
                      gn,
                      {
                        tagImage: B,
                        strLocalizationToken: h
                          ? "#Store_ControllerSupport_PS5_USB_Personalized"
                          : "#Store_ControllerSupport_PS5_USB",
                        bPersonalized: h,
                        strCategory: "57",
                      },
                      "5",
                    ),
                  );
            }
          }
          return (0, t.jsx)(t.Fragment, {
            children:
              (d || c) &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: ye.ControllerSupportLevelString,
                    children: (0, L.we)(
                      c
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, t.jsx)(gn, {
                    tagImage: (0, t.jsx)(Fe.pcV, {
                      className: ye.SmallerSVG,
                      controllerType: ds.Oh,
                      partial: !c,
                      role: "presentation",
                    }),
                    strLocalizationToken: x
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: x,
                    strCategory: "18",
                  }),
                  I,
                  u &&
                    (0, t.jsx)(gn, {
                      tagImage: (0, t.jsx)(Fe.kdM, {
                        className: ye.BiggerSVG,
                        bGreyOutRightSide: !c,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!v && !e) || (!u && g && !x)) &&
                    (0, t.jsx)(gn, {
                      tagImage: (0, t.jsx)(Fe.vet, {
                        className: ye.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        g || f || h
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: g || f || h,
                    }),
                  (0, t.jsx)(hl, { ...s }),
                ],
              }),
          });
        }
        const Ni = gl;
        var Di = i(61711),
          yl = i(45156),
          xl = i(399),
          be = i.n(xl),
          Rs = i(98609),
          vl = i(92442),
          Qt = i(72865),
          xr = i(37901);
        const pe = {};
        (pe.arabic = () => i.e(70667).then(i.t.bind(i, 70667, 19))),
          (pe.brazilian = () => i.e(58167).then(i.t.bind(i, 58167, 19))),
          (pe.bulgarian = () => i.e(75936).then(i.t.bind(i, 75936, 19))),
          (pe.czech = () => i.e(67478).then(i.t.bind(i, 67478, 19))),
          (pe.danish = () => i.e(77178).then(i.t.bind(i, 77178, 19))),
          (pe.dutch = () => i.e(62063).then(i.t.bind(i, 62063, 19))),
          (pe.english = () => i.e(91253).then(i.t.bind(i, 91253, 19))),
          (pe.finnish = () => i.e(66690).then(i.t.bind(i, 66690, 19))),
          (pe.french = () => i.e(32763).then(i.t.bind(i, 32763, 19))),
          (pe.german = () => i.e(82937).then(i.t.bind(i, 82937, 19))),
          (pe.greek = () => i.e(36501).then(i.t.bind(i, 36501, 19))),
          (pe.hungarian = () => i.e(41812).then(i.t.bind(i, 41812, 19))),
          (pe.indonesian = () => i.e(35383).then(i.t.bind(i, 35383, 19))),
          (pe.italian = () => i.e(48149).then(i.t.bind(i, 48149, 19))),
          (pe.japanese = () => i.e(89876).then(i.t.bind(i, 89876, 19))),
          (pe.koreana = () => i.e(21470).then(i.t.bind(i, 99089, 19))),
          (pe.latam = () => i.e(69206).then(i.t.bind(i, 69206, 19))),
          (pe.malay = () => i.e(74357).then(i.t.bind(i, 74357, 19))),
          (pe.norwegian = () => i.e(94025).then(i.t.bind(i, 94025, 19))),
          (pe.polish = () => i.e(92494).then(i.t.bind(i, 92494, 19))),
          (pe.portuguese = () => i.e(23862).then(i.t.bind(i, 1481, 19))),
          (pe.romanian = () => i.e(48824).then(i.t.bind(i, 48824, 19))),
          (pe.russian = () => i.e(50208).then(i.t.bind(i, 50208, 19))),
          (pe.sc_schinese = () => i.e(63354).then(i.t.bind(i, 63354, 19))),
          (pe.schinese = () => i.e(63875).then(i.t.bind(i, 63875, 19))),
          (pe.spanish = () => i.e(34053).then(i.t.bind(i, 34053, 19))),
          (pe.swedish = () => i.e(38804).then(i.t.bind(i, 38804, 19))),
          (pe.tchinese = () => i.e(48688).then(i.t.bind(i, 48688, 19))),
          (pe.thai = () => i.e(79173).then(i.t.bind(i, 79173, 19))),
          (pe.turkish = () => i.e(75629).then(i.t.bind(i, 75629, 19))),
          (pe.ukrainian = () => i.e(22319).then(i.t.bind(i, 22319, 19))),
          (pe.vietnamese = () => i.e(33844).then(i.t.bind(i, 33844, 19)));
        async function jl(s) {
          if (pe[s]) return pe[s]();
        }
        const p = (0, xr.l)(jl),
          bl = new Map([
            [2379780, { strInternalAppName: "Balatro", strBannerType: "bus" }],
            [
              413150,
              { strInternalAppName: "StardewValley", strBannerType: "farmer" },
            ],
            [
              1086940,
              { strInternalAppName: "BaldursGate3", strBannerType: "knight" },
            ],
            [
              1091500,
              { strInternalAppName: "Cyberpunk2077", strBannerType: "robot" },
            ],
            [
              1245620,
              { strInternalAppName: "EldenRing", strBannerType: "campfire" },
            ],
            [
              1794680,
              {
                strInternalAppName: "VampireSurvivors",
                strBannerType: "zombies",
              },
            ],
            [
              1174180,
              {
                strInternalAppName: "RedDeadRedemption2",
                strBannerType: "campfire",
              },
            ],
            [
              990080,
              { strInternalAppName: "HogwartsLegacy", strBannerType: "family" },
            ],
            [1942280, { strInternalAppName: "Brotato", strBannerType: "bus" }],
            [
              1868140,
              { strInternalAppName: "DaveTheDiver", strBannerType: "beach" },
            ],
            [
              1145360,
              { strInternalAppName: "Hades", strBannerType: "campfire" },
            ],
            [
              292030,
              { strInternalAppName: "TheWitcher3", strBannerType: "campfire" },
            ],
            [
              646570,
              { strInternalAppName: "SlayTheSpire", strBannerType: "city" },
            ],
            [
              2344520,
              { strInternalAppName: "Diablo4", strBannerType: "knight" },
            ],
            [
              1145350,
              { strInternalAppName: "Hades2", strBannerType: "campfire" },
            ],
            [
              250900,
              {
                strInternalAppName: "TheBindingOfIsaacRebirth",
                strBannerType: "busstop",
              },
            ],
            [
              377160,
              { strInternalAppName: "Fallout4", strBannerType: "apocalypse" },
            ],
            [
              2321470,
              {
                strInternalAppName: "DeepRockGalacticSurvivor",
                strBannerType: "miner",
              },
            ],
            [
              367520,
              { strInternalAppName: "HollowKnight", strBannerType: "miner" },
            ],
            [
              1030300,
              {
                strInternalAppName: "HollowKnightSilksong",
                strBannerType: "knight",
              },
            ],
            [
              2767030,
              { strInternalAppName: "MarvelRivals", strBannerType: "porch" },
            ],
            [
              2679460,
              {
                strInternalAppName: "MetaphorReFantazio",
                strBannerType: "bed",
              },
            ],
            [
              1313140,
              { strInternalAppName: "CultOfTheLamb", strBannerType: "city" },
            ],
            [
              275850,
              { strInternalAppName: "NoMansSky", strBannerType: "astronaut" },
            ],
            [
              2694490,
              { strInternalAppName: "PathOfExile2", strBannerType: "knight" },
            ],
            [
              1687950,
              { strInternalAppName: "Persona5Royal", strBannerType: "anime" },
            ],
            [
              582010,
              {
                strInternalAppName: "MonsterHunterWorld",
                strBannerType: "campfire",
              },
            ],
            [
              2142790,
              {
                strInternalAppName: "FieldsOfMistria",
                strBannerType: "farmer",
              },
            ],
            [
              553850,
              { strInternalAppName: "HELLDIVERS2", strBannerType: "porch" },
            ],
            [
              1623730,
              { strInternalAppName: "Palworld", strBannerType: "woodsman" },
            ],
            [588650, { strInternalAppName: "DeadCells", strBannerType: "bus" }],
            [
              1903340,
              {
                strInternalAppName: "ClairObscurExpedition33",
                strBannerType: "campfire",
              },
            ],
            [
              2993780,
              { strInternalAppName: "FantasyLifei", strBannerType: "woodsman" },
            ],
            [
              2623190,
              { strInternalAppName: "Oblivion", strBannerType: "knight" },
            ],
            [
              230410,
              { strInternalAppName: "Warframe", strBannerType: "robot" },
            ],
            [
              1551360,
              { strInternalAppName: "ForzaHorizon5", strBannerType: "car" },
            ],
            [
              976730,
              {
                strInternalAppName: "HaloMasterChiefCollection",
                strBannerType: "robot",
              },
            ],
            [12210, { strInternalAppName: "GTAIV", strBannerType: "car" }],
            [1562430, { strInternalAppName: "Dredge", strBannerType: "beach" }],
            [
              1446780,
              {
                strInternalAppName: "MonsterHunterRise",
                strBannerType: "campfire",
              },
            ],
            [
              3164500,
              { strInternalAppName: "Schedule1", strBannerType: "city" },
            ],
            [
              1817070,
              {
                strInternalAppName: "SpiderManRemastered",
                strBannerType: "superhero",
              },
            ],
            [
              105600,
              { strInternalAppName: "Terraria", strBannerType: "miner" },
            ],
            [
              1293830,
              { strInternalAppName: "ForzaHorizon4", strBannerType: "car" },
            ],
            [3527290, { strInternalAppName: "Peak", strBannerType: "porch" }],
            [
              2161700,
              { strInternalAppName: "Persona3Reload", strBannerType: "anime" },
            ],
            [
              1850570,
              {
                strInternalAppName: "DeathStranding",
                strBannerType: "busstop",
              },
            ],
            [
              2552430,
              { strInternalAppName: "KingdomHearts", strBannerType: "family" },
            ],
            [
              504230,
              { strInternalAppName: "Celeste", strBannerType: "adventurer" },
            ],
            [
              632470,
              { strInternalAppName: "DiscoElysium", strBannerType: "city" },
            ],
            [
              227300,
              {
                strInternalAppName: "EuroTruckSimulator2",
                strBannerType: "car",
              },
            ],
            [
              3405340,
              { strInternalAppName: "Megabonk", strBannerType: "zombies" },
            ],
            [
              2062430,
              { strInternalAppName: "BallxPit", strBannerType: "city" },
            ],
            [
              2592160,
              { strInternalAppName: "Dispatch", strBannerType: "superhero" },
            ],
            [
              1771300,
              {
                strInternalAppName: "KingdomComeDeliverance2",
                strBannerType: "knight",
              },
            ],
            [3241660, { strInternalAppName: "REPO", strBannerType: "porch" }],
            [
              1984270,
              {
                strInternalAppName: "DigimonStoryTimeStranger",
                strBannerType: "anime",
              },
            ],
            [2878980, { strInternalAppName: "NBA2K25", strBannerType: "city" }],
            [
              108600,
              {
                strInternalAppName: "ProjectZomboid",
                strBannerType: "zombies",
              },
            ],
            [
              381210,
              {
                strInternalAppName: "DeadByDaylight",
                strBannerType: "zombies",
              },
            ],
            [
              1401590,
              {
                strInternalAppName: "DisneyDreamlightValley",
                strBannerType: "family",
              },
            ],
            [
              892970,
              { strInternalAppName: "Valheim", strBannerType: "knight" },
            ],
          ]),
          Bl = new Map([
            ["adventurer", { className: be().Adventurer }],
            ["anime", { className: be().Anime }],
            ["apocalypse", { className: be().Apocalypse }],
            ["astronaut", { className: be().Astronaut }],
            ["beach", { className: be().Beach }],
            ["bed", { className: be().Bed }],
            ["bus", { className: be().Bus }],
            ["busstop", { className: be().BusStop }],
            ["campfire", { className: be().Campfire }],
            ["car", { className: be().Car }],
            ["city", { className: be().City }],
            ["family", { className: be().Family }],
            ["farmer", { className: be().Farmer }],
            ["knight", { className: be().Knight }],
            ["miner", { className: be().Miner }],
            ["porch", { className: be().Porch }],
            ["robot", { className: be().Robot }],
            ["superhero", { className: be().Superhero }],
            ["woodsman", { className: be().Woodsman }],
            ["zombies", { className: be().Zombies }],
          ]);
        function Il(s) {
          return bl.get(s);
        }
        function El(s) {
          return Bl.get(s);
        }
        function Uh(s) {
          const { appid: e } = s,
            { data: n } = useStoreItemDefaultInfo({ appid: e }),
            r = useIsSteamDeckForSaleInUserCountry();
          return !n || !n.name || !r
            ? null
            : jsx(Fi, { appid: e, app_name: n.name });
        }
        function Fi(s) {
          const { appid: e } = s,
            n = Il(e);
          return n ? (0, t.jsx)(Pl, { appBannerDef: n, ...s }) : null;
        }
        function Pl(s) {
          const { appid: e, appBannerDef: n, app_name: r } = s,
            a = El(n.strBannerType),
            o = (0, Qt.aL)(
              Rs.TS.STORE_BASE_URL +
                `app/${vl.wy}?deckapp=${e}&utm_source=topplayed_app_banner&utm_campaign=${e}`,
              "topplayed_app_banner",
              e,
            );
          return a
            ? (0, t.jsxs)("div", {
                className: be().BannerWrapper,
                children: [
                  (0, t.jsxs)("div", {
                    className: be().BannerTitle,
                    children: [
                      (0, t.jsx)("div", { className: be().DeckLogo }),
                      p.Localize("#DeckTopPlayedAppBanner_Title"),
                    ],
                  }),
                  (0, t.jsx)("a", {
                    href: o,
                    className: (0, D.A)(be().TopPlayedBannerCtn, a.className),
                    children: (0, t.jsxs)("div", {
                      className: be().BannerRightContent,
                      children: [
                        (0, t.jsx)("div", {
                          className: be().BannerHeader,
                          children: p.Localize(
                            "#DeckTopPlayedAppBanner_Header",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: be().BannerGameText,
                          children: p.LocalizeReact(
                            "#DeckTopPlayedAppBanner_GameText",
                            (0, t.jsx)("span", { children: r }),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (console.warn(`No banner type found for ${n.strBannerType}`),
              null);
        }
        var Wi = i(17809),
          Ml = i(41032),
          gs = i(21721),
          Wn = i(27894),
          Tl = i(94846),
          Yn = i.n(Tl),
          vr = i(48357),
          Sl = i(64774);
        function Ll(s) {
          const { appid: e } = s,
            n = (0, Gt.$5)(e),
            { data: r } = (0, E.lv)(n),
            { data: a } = (0, E.J$)(n),
            o = (0, Wn.n)(a);
          return !r || !a
            ? null
            : (0, t.jsxs)(T.Z, {
                focusable: !0,
                className: Yn().ParentWidgetContainer,
                onActivate: () => {
                  window.location.href = o;
                },
                children: [
                  (0, t.jsx)("div", {
                    className: (0, D.A)(Yn().ParentCapsuleImageContainer),
                    children: (0, t.jsx)("a", {
                      href: o,
                      children: (0, t.jsx)("img", {
                        className: Yn().ParentCapsuleImage,
                        src: (0, gs.b0)(r, "small_capsule"),
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: Yn().AppDetails,
                    children: [
                      (0, t.jsx)("a", {
                        className: (0, D.A)(Yn().GameName),
                        href: o,
                        children: a.name,
                      }),
                      (0, t.jsxs)("div", {
                        className: Yn().PriceContainer,
                        children: [
                          (0, t.jsx)(vr.NF, { id: n }),
                          (0, t.jsx)(Sl.r, {
                            appid: e,
                            className: Yn().AddToWishlistButton,
                            bTextMode: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        }
        var Se = i(19813),
          jr = i(64415),
          Ol = i(90405);
        function wi(s, e) {
          return (0, m.useMemo)(() => {
            let r = [],
              a = new Map();
            for (let o of s)
              if (
                (o.featured &&
                  (r.push({ type: "trailer", key: `t_${o.id}`, data: o }),
                  a.set(o.id, !0)),
                r.length >= 2)
              )
                break;
            for (let o of e)
              r.push({ type: "screenshot", key: `s_${o.name}`, data: o });
            for (let o of s)
              a.has(o.id) ||
                r.push({ type: "trailer", key: `t_${o.id}`, data: o });
            return r;
          }, [s, e]);
        }
        var Wt = i(31382),
          Al = i(52951),
          ts = i(47045),
          F = i(72609),
          O = i(68031),
          b = i(15252),
          le = i(60351);
        function Us(s) {
          const { id: e, bSelfPurchaseOption: n, bHideNewTag: r } = s,
            { data: a } = (0, E.J$)(e);
          return a
            ? (0, t.jsx)(vr.NF, {
                id: e,
                bPurchaseOptionDisplay: !0,
                bHidePrePurchase: !0,
                bSelfPurchaseOption: n,
                bHideNewTag: r,
              })
            : null;
        }
        var rn = i(42993),
          pn = i(75233),
          an = i(80902),
          ps = i(51614),
          fs = i(57589);
        const hs = new fs.wd("GameInterest");
        function ns(s, e) {
          return ["GameInterest", s, e];
        }
        function zl(s, e, n, r) {
          s.setQueryData(ns(e, n), r);
        }
        function Nl(s) {
          const e = (0, pn.jE)(),
            n = (0, rn.LH)();
          return (
            m.useEffect(() => {
              const { appid: r, userInterest: a, markReady: o } = s;
              zl(e, n, r, a), o();
            }, [e, n, s]),
            null
          );
        }
        function ys(s) {
          const e = (0, rn.LH)();
          return (0, an.I)({
            queryKey: ns(e, s),
            enabled: !!e,
            queryFn: async () => {
              throw (
                (hs.Info(
                  "Fetching user game interest from the back end for ",
                  s,
                ),
                new Error("Fetching user game interest is not yet supported"))
              );
            },
          });
        }
        function br(s, e, n) {
          const r = (0, pn.jE)(),
            a = (0, Qt.ru)(),
            o = (0, rn.LH)();
          return (0, ps.n)({
            mutationKey: [e, ...ns(o, s)],
            mutationFn: async (c) => {
              hs.Info(`Mutating ${s} for ${e}`, c);
              const d = new FormData();
              d.set("sessionid", (0, C.KC)()),
                d.set("appid", s.toString()),
                d.set("snr", a);
              const { url: u, new_interest: g } = n(c, d);
              hs.Info(" new interest before backend call", g),
                r.setQueryData(ns(o, s), g);
              try {
                const f = await fetch(u, { method: "POST", body: d });
                return f.ok
                  ? !0
                  : (hs.Info(`request to ${e} ${s} failed with ${f}`, c), !1);
              } catch (f) {
                return hs.Info(`request to ${e} ${s} failed with ${f}`, c), !1;
              }
            },
            onSuccess: (c, d) => {
              c || r.setQueryData(ns(o, s), d.old_interest);
            },
            onError: (c, d, u) => {
              r.setQueryData(ns(o, s), d.old_interest);
            },
          });
        }
        function Ri(s) {
          return br(s, "wishlist", (e, n) => {
            const { wishlist: r, old_interest: a } = e,
              o = { ...a, wishlist: r },
              c = r
                ? `${C.TS.STORE_BASE_URL}api/addtowishlist`
                : `${C.TS.STORE_BASE_URL}api/removefromwishlist`;
            return { new_interest: o, url: c };
          });
        }
        function Dl(s) {
          return br(s, "ignore", (e, n) => {
            const { ignored: r, ignored_reason: a, old_interest: o } = e,
              c = { ...o, ignored: r, ignored_reason: a };
            r && a !== void 0
              ? n.set("ignore_reason", a.toString())
              : n.set("remove", "1");
            const d = `${C.TS.STORE_BASE_URL}recommended/ignorerecommendation/`;
            return { new_interest: c, url: d };
          });
        }
        function Fl(s) {
          return br(s, "follow", (e, n) => {
            const { following: r, old_interest: a } = e,
              o = { ...a, following: r };
            r || n.set("unfollow", "1");
            const c = `${C.TS.STORE_BASE_URL}explore/followgame/`;
            return { new_interest: o, url: c };
          });
        }
        var Ui = i(20525);
        function Wl(s) {
          let { trailers: e, screenshots: n, appid: r } = s;
          return (0, t.jsx)(Wt.QY, {
            supportsFullscreen: !1,
            supportsTheater: !0,
            children: (0, t.jsx)(Ul, {
              children: (0, t.jsx)(wl, {
                trailers: e,
                screenshots: n,
                appid: r,
              }),
            }),
          });
        }
        function wl(s) {
          let { trailers: e, screenshots: n, appid: r } = s,
            a = (0, Wt.ri)(),
            o = a?.strMode == "theater",
            c = (0, Wt.Dy)(a, "theater"),
            d = (0, Wt.Dy)(a, "none"),
            u = (0, Al.tw)(),
            [g, f] = Cl(o, d),
            h = wi(e, n);
          Rl(h);
          const x = m.useCallback(
            (B) => {
              a.refTheater && a.refTheater(B);
            },
            [a],
          );
          if ((m.use(ts.n.Ready()), h.length == 0)) return null;
          let v = h.map((B, A) =>
              B.type == "screenshot"
                ? (0, t.jsx)(
                    Kl,
                    { autoFocus: A == 0, screenshot: B.data },
                    B.key,
                  )
                : B.type == "trailer"
                  ? (0, t.jsx)(
                      Gl,
                      { autoFocus: A == 0, trailer: B.data },
                      B.key,
                    )
                  : null,
            ),
            I = o ? "" : ts.n.Localize("#TrailerPlayer_FullScreen_Tooltip");
          return (0, t.jsx)("div", {
            ref: x,
            className: Se.TheaterDialog,
            popover: "manual",
            children: (0, t.jsx)("div", {
              className: Se.FocusRingClip,
              children: (0, t.jsx)(ie.q, {
                rootClassName: Se.FocusRingRoot,
                disableFocusRing: o,
                children: (0, t.jsxs)(T.Z, {
                  ref: u.ref,
                  navRef: u.navRef,
                  className: Se.GamepadCarousel,
                  "flow-children": "row",
                  navEntryPreferPosition: V.iU.MAINTAIN_X,
                  onOptionsActionDescription: I,
                  onOptionsButton: c,
                  onCancelButton: o ? d : void 0,
                  onGamepadDirection: g,
                  onFocusWithin: f,
                  children: [
                    r && (0, t.jsx)(Hl, { appid: r, fnExitTheaterMode: d }),
                    v,
                  ],
                }),
              }),
            }),
          });
        }
        function Rl(s) {
          let e = s.length;
          (0, m.useLayoutEffect)(() => {
            if (e < 1) return;
            document
              .querySelectorAll(".gamehighlight_gamepadskeleton")
              .forEach((r) => r.remove());
          }, [e]);
        }
        function Ul(s) {
          let { children: e } = s,
            n = (0, m.useCallback)(() => {}, []),
            [r, a] = (0, m.useState)(!0);
          return (0, t.jsx)(Fs.v, {
            autoplayEnabled: !1,
            setAutoplayEnabled: n,
            playerVolume: 1,
            setPlayerVolume: n,
            audioMuted: r,
            setAudioMuted: a,
            children: e,
          });
        }
        function Cl(s, e) {
          let n = (0, m.useCallback)(
            (a) => {
              s && !a && e();
            },
            [s, e],
          );
          return [(0, m.useCallback)((a) => !!s, [s]), n];
        }
        function Kl(s) {
          let { screenshot: e, autoFocus: n } = s,
            r = (0, D.A)(Se.CarouselItem, Se.Screenshot);
          return (0, t.jsx)(T.Z, {
            className: r,
            autoFocus: n,
            focusable: !0,
            onOKActionDescription: "",
            children: (0, t.jsx)("img", { src: e.full, alt: e.altText }),
          });
        }
        function Gl(s) {
          let { trailer: e, autoFocus: n } = s;
          return e.dashManifests
            ? (0, t.jsx)(Jl, { trailer: e, autoFocus: n })
            : (0, t.jsx)(Yl, { trailer: e, autoFocus: n });
        }
        function Yl(s) {
          let { trailer: e, autoFocus: n } = s,
            r = (0, m.useRef)(null),
            [a, o] = kl(),
            c = (0, re.Ue)(r, o),
            [d, u] = Vl(r),
            g = Ql(d),
            f = $l(r),
            h = (0, m.useCallback)(
              (A) => {
                let S = r.current;
                if (A.detail.button == jr.pR.TRIGGER_LEFT && S) {
                  (S.currentTime = Math.max(0, S.currentTime - 10)),
                    A.preventDefault(),
                    A.stopPropagation();
                  return;
                }
                if (A.detail.button == jr.pR.TRIGGER_RIGHT && S) {
                  (S.currentTime = Math.min(S.duration, S.currentTime + 10)),
                    A.preventDefault(),
                    A.stopPropagation();
                  return;
                }
              },
              [r],
            );
          if (!e.webmMax) return null;
          let x = e.poster || "",
            v = a.bMuted
              ? ts.n.Localize("#TrailerPlayer_Unmute_Tooltip")
              : ts.n.Localize("#TrailerPlayer_Mute_Tooltip"),
            I = a.bPaused
              ? ts.n.Localize("#TrailerPlayer_Play_Tooltip")
              : ts.n.Localize("#TrailerPlayer_Pause_Tooltip"),
            B = (0, D.A)(Se.CarouselItem, Se.SingleFileTrailer);
          return (0, t.jsx)(T.Z, {
            className: B,
            onActivate: u,
            onOKActionDescription: I,
            ...g,
            onSecondaryButton: f,
            onSecondaryActionDescription: v,
            onButtonDown: h,
            autoFocus: n,
            children: (0, t.jsx)("video", {
              ref: c,
              controls: !0,
              muted: !0,
              disablePictureInPicture: !0,
              controlsList: "nodownload",
              playsInline: !0,
              preload: "none",
              poster: x,
              children: (0, t.jsx)("source", {
                src: e.webmMax,
                type: "video/webm",
              }),
            }),
          });
        }
        function kl() {
          let [s, e] = (0, m.useState)({ bPaused: !0, bMuted: !0 }),
            n = (0, re.QS)(
              (r) => {
                if (!r) return () => {};
                let a = () => {
                    e((u) => ({ ...u, bMuted: r.muted }));
                  },
                  o = () => {
                    e((u) => ({ ...u, bPaused: !1 }));
                  },
                  c = () => {
                    e((u) => ({ ...u, bPaused: !0 }));
                  };
                return (
                  r.addEventListener("volumechange", a),
                  r.addEventListener("play", o),
                  r.addEventListener("pause", c),
                  () => {
                    r.removeEventListener("volumechange", a),
                      r.removeEventListener("play", o),
                      r.removeEventListener("pause", c);
                  }
                );
              },
              [e],
            );
          return [s, n];
        }
        function Vl(s) {
          let e = (0, m.useRef)(!1),
            n = (0, m.useRef)(null),
            r = (0, m.useCallback)(
              (o) => {
                let c = s.current;
                if (c && ((e.current = o), !n.current)) {
                  if (!o) {
                    c.paused || c.pause();
                    return;
                  }
                  (n.current = c.play()),
                    n.current
                      .then(() => {
                        !e.current && s.current && s.current.pause(),
                          (n.current = null);
                      })
                      .catch(() => {
                        n.current = null;
                      });
                }
              },
              [s],
            ),
            a = (0, m.useCallback)(() => {
              let o = s.current;
              o && r(o.paused);
            }, [r, s]);
          return [r, a];
        }
        function Ql(s) {
          let e = (0, m.useCallback)(() => s(!0), [s]),
            n = (0, m.useCallback)(() => s(!1), [s]);
          return { onGamepadFocus: e, onGamepadBlur: n };
        }
        function $l(s) {
          return (0, m.useCallback)(() => {
            let n = s.current;
            n && (n.muted = !n.muted);
          }, [s]);
        }
        function Zl(s) {
          const { poster: e, bVideoReady: n } = s;
          return e
            ? (0, t.jsxs)("div", {
                className: (0, D.A)(Se.StillPoster, n && Se.VideoStarted),
                children: [
                  (0, t.jsx)("img", {
                    className: (0, D.A)(Se.Poster),
                    src: e,
                    alt: "",
                  }),
                  (0, t.jsx)(Ui.ud, { className: Se.Icon }),
                ],
              })
            : null;
        }
        function Jl(s) {
          let { trailer: e, autoFocus: n } = s,
            [r, a] = (0, m.useState)(!1),
            [o, c] = (0, m.useState)(!1),
            [d, u] = (0, re.TP)();
          const g = m.useCallback(() => {
            a(!0);
          }, []);
          let f,
            h = (0, D.A)(Se.CarouselItem, Se.DashTrailer);
          return (0, t.jsxs)(T.Z, {
            ref: u,
            className: h,
            onFocusWithin: c,
            autoFocus: n,
            children: [
              (0, t.jsx)(Zl, { poster: e.poster, bVideoReady: r }),
              (0, t.jsx)(Ol.K, {
                mode: "JustLoad",
                horizontal: !0,
                holdGamepadFocus: !0,
                children: (0, t.jsx)(hr.P, {
                  dashManifests: e.dashManifests,
                  hlsManifest: e.hlsManifest,
                  screenshot: e.poster,
                  altText: e.title,
                  forcePause: !o || !d,
                  onPlaybackEnd: f,
                  onPlaybackStart: g,
                  title: e.title,
                  category: e.category,
                  statsURL: e.statsURL,
                }),
              }),
            ],
          });
        }
        function Xl(s, e) {
          return F.TS.STORE_ITEM_BASE_URL + s.replace("${FILENAME}", e);
        }
        function Hl(s) {
          const { appid: e, fnExitTheaterMode: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.wl)({ appid: e }),
            { data: o } = (0, E.lv)({ appid: e }),
            { data: c } = ys(e),
            { mutateAsync: d } = Ri(e),
            u = !!c?.wishlist,
            g = !c?.owned,
            f = m.useCallback(() => {
              c && d({ wishlist: !c.wishlist, old_interest: c });
            }, [d, c]);
          let h, x;
          g &&
            c &&
            ((h = Z.Z.Localize(
              u ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
            )),
            (x = f));
          const v = m.useCallback(() => {
            window.postMessage({ method: "FocusPurchaseOptions" });
          }, []);
          if (!o) return null;
          let I = (0, D.A)(Se.CarouselItem, Se.TitleCard);
          return (0, t.jsx)(T.Z, {
            className: I,
            onActivate: v,
            onSecondaryActionDescription: h,
            onSecondaryButton: x,
            onOptionsActionDescription: null,
            onOptionsButton: () => {},
            onFocus: n,
            children: (0, t.jsxs)(O.s, {
              position: "absolute",
              inset: "0 0 0 0",
              direction: "column",
              overflow: "hidden",
              children: [
                (0, t.jsx)("img", {
                  className: Se.Header,
                  src: Xl(o.asset_url_format, o.header),
                  alt: "",
                }),
                (0, t.jsxs)(O.s, {
                  className: Se.Bottom,
                  flexGrow: "1",
                  flexShrink: "1",
                  direction: "column",
                  overflow: "hidden",
                  padding: "3",
                  paddingTop: "2",
                  children: [
                    (0, t.jsx)(O.s, {
                      flexGrow: "0",
                      flexShrink: "0",
                      children: (0, t.jsx)(b.EY, {
                        contrast: "title",
                        weight: "heavy",
                        size: { initial: "2", md: "4", lg: "6" },
                        children: r?.name,
                      }),
                    }),
                    (0, t.jsx)(le.az, {
                      flexGrow: "1",
                      overflow: "hidden",
                      children: (0, t.jsx)(b.EY, {
                        size: { initial: "1", md: "2", lg: "4" },
                        lineClamp: 7,
                        contrast: "body",
                        children: a?.short_description,
                      }),
                    }),
                    r?.best_purchase_option &&
                      (0, t.jsxs)(O.s, {
                        className: Se.BottomRow,
                        flexGrow: "0",
                        flexShrink: "0",
                        children: [
                          (0, t.jsx)(Us, { id: { appid: e }, bHideNewTag: !0 }),
                          g &&
                            (0, t.jsxs)(O.s, {
                              className: Se.WishlistButton,
                              children: [
                                u
                                  ? (0, t.jsx)(N.qnF, {
                                      className: Se.StarIcon,
                                    })
                                  : (0, t.jsx)(N.T4m, {
                                      className: Se.StarIcon,
                                    }),
                                (0, t.jsx)(Fe.xwO, {
                                  button: "X",
                                  className: Se.ButtonIcon,
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        var Me = i(20338),
          ss = i(84456),
          Ci = i(7817),
          xs = i(71742);
        function ql() {
          let s = document.cookie.match(
            /(^|; )bGameHighlightAutoplayDisabled=([^;]*)/,
          );
          return !(s && s[2] == "true");
        }
        function _l(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let n = s ? "false" : "true";
          document.cookie = `bGameHighlightAutoplayDisabled=${n}; expires=${e.toUTCString()};path=/`;
        }
        function ec() {
          let s = document.cookie.match(
              /(^|; )flGameHighlightPlayerVolume=([^;]*)/,
            ),
            e = s && s[2] ? parseFloat(s[2]) : 80;
          return e < 0 ? 0 : e > 100 ? 100 : e;
        }
        function tc(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10),
            (document.cookie = `flGameHighlightPlayerVolume=${s}; expires=${e.toUTCString()};path=/`);
        }
        function nc() {
          let s = document.cookie.match(
            /(^|; )bGameHighlightAudioEnabled=([^;]*)/,
          );
          return s && s[2] == "true";
        }
        function sc(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let n = s ? "true" : "false";
          document.cookie = `bGameHighlightAudioEnabled=${n}; expires=${e.toUTCString()};path=/`;
        }
        function rc(s) {
          let { children: e } = s,
            [n, r] = (0, m.useState)(ql),
            a = (0, m.useCallback)((h) => {
              _l(h), r(h);
            }, []),
            [o, c] = (0, m.useState)(ec),
            d = (0, m.useCallback)((h) => {
              (h = h * 100), tc(h), c(h);
            }, []),
            [u, g] = (0, m.useState)(nc),
            f = (0, m.useCallback)((h) => {
              sc(!h), g(!h);
            }, []);
          return (0, t.jsx)(Fs.v, {
            autoplayEnabled: n,
            setAutoplayEnabled: a,
            playerVolume: o / 100,
            setPlayerVolume: d,
            audioMuted: !u,
            setAudioMuted: f,
            children: e,
          });
        }
        function ic() {
          return (0, Fs.F)().m_bAutoplayEnabled ?? !1;
        }
        const Ki = (0, m.createContext)(void 0);
        function ac(s) {
          let { orderedItems: e, children: n } = s,
            r = ic(),
            [a, o] = (0, m.useState)(() => lc(e, r)),
            c = (0, m.useMemo)(() => {
              if (e.length == 0)
                return {
                  strActiveID: "",
                  strActiveType: "",
                  strPreviousID: "",
                  strNextID: "",
                  fnSetActive: o,
                };
              let d = e.findIndex((h) => h.key == a);
              d = d || 0;
              let u = e[d].type,
                g = Br("previous", e, d, r),
                f = Br("next", e, d, r);
              return {
                strActiveID: a,
                strActiveType: u,
                strPreviousID: g,
                strNextID: f,
                fnSetActive: o,
              };
            }, [a, o, e, r]);
          return (0, t.jsx)(Ki.Provider, { value: c, children: n });
        }
        function on() {
          let s = (0, m.useContext)(Ki);
          return (
            (0, xs.wT)(
              s != null,
              "useHighlightContext used outside of HighlightContextProvider",
            ),
            s
          );
        }
        function Gi(s) {
          let e = on();
          return s == e.strActiveID;
        }
        function oc(s) {
          let e = on();
          return s == e.strNextID;
        }
        function lc(s, e) {
          return (
            (0, xs.wT)(s.length > 0, "Unexpected length"),
            s[0].type == "trailer" && !e ? Br("next", s, 0, e) : s[0].key
          );
        }
        function Br(s, e, n, r) {
          (0, xs.wT)(e.length > 0, "Unexpected length");
          let a = n;
          do
            if (
              (s == "next"
                ? (a = (a + 1) % e.length)
                : (a = (a - 1 + e.length) % e.length),
              e[a].type != "trailer" || r)
            )
              break;
          while (a != n);
          return e[a].key;
        }
        var wt = i(69131),
          vs = i(13854);
        function cc(s) {
          let { items: e } = s,
            {
              refStrip: n,
              refTrack: r,
              refThumb: a,
              fnRegisterItemElement: o,
            } = dc(),
            d = (0, Wt.ri)()?.strMode == "theater";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, D.A)(wt.StripSkeleton, d && wt.TheaterMode),
                children: [
                  (0, t.jsx)("div", { className: wt.Items }),
                  (0, t.jsx)("div", { className: wt.Scrollbar }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: (0, D.A)(wt.Strip, d && wt.TheaterMode),
                children: [
                  (0, t.jsx)(uc, {
                    refStrip: n,
                    items: e,
                    registerItemElement: o,
                  }),
                  (0, t.jsx)(pc, { refTrack: r, refThumb: a }),
                ],
              }),
            ],
          });
        }
        function dc() {
          let s = on(),
            e = (0, m.useRef)(null),
            n = (0, m.useRef)(null),
            r = (0, m.useRef)(null),
            a = (0, m.useRef)(null),
            o = (0, m.useRef)(void 0);
          o.current || (o.current = new Map()),
            (0, m.useEffect)(() => {
              const u = r.current,
                g = n.current,
                f = e.current;
              if (!u || !g || !f) return;
              let h = f.matches(":dir(rtl)"),
                x = () => {
                  a.current ||
                    (a.current = requestAnimationFrame(() => {
                      a.current = null;
                      let v = g.getBoundingClientRect(),
                        I = u.getBoundingClientRect(),
                        B = v.width - I.width,
                        A = f.scrollWidth - f.clientWidth,
                        S;
                      h
                        ? (S = (0, vs.Fu)(f.scrollLeft, -A, 0, -B, 0))
                        : (S = (0, vs.Fu)(f.scrollLeft, 0, A, 0, B)),
                        (u.style.transform = `translateX( ${S}px )`);
                    }));
                };
              return (
                f.addEventListener("scroll", x, { passive: !0 }),
                () => {
                  f.removeEventListener("scroll", x),
                    a.current && cancelAnimationFrame(a.current);
                }
              );
            }, []),
            (0, m.useEffect)(() => {
              const u = r.current,
                g = n.current,
                f = e.current;
              if (!u || !g || !f) return;
              let h = null,
                x = f.matches(":dir(rtl)"),
                v = (A) => {
                  if (!h) return;
                  let S = A.clientX - h.nInitialClientX,
                    z = (0, vs.OQ)(h.nInitialPosition + S, 0, h.nTrackWidth),
                    w = (0, vs.Fu)(z, 0, h.nTrackWidth, 0, h.nScrollWidth);
                  x && (w = -(h.nScrollWidth - w)),
                    f.scrollTo({ left: w, behavior: "auto" });
                },
                I = (A) => {
                  g.setPointerCapture(A.pointerId);
                  let S = g.getBoundingClientRect(),
                    z = u.getBoundingClientRect(),
                    w = S.width - z.width,
                    Y = f.scrollWidth - f.clientWidth,
                    W = Math.max(z.left - S.left, 0),
                    je = A.clientX;
                  A.target != u &&
                    ((W = A.clientX - S.left),
                    (W -= Math.floor(z.width / 2)),
                    (W = (0, vs.OQ)(W, 0, w))),
                    (h = {
                      nInitialPosition: W,
                      nInitialClientX: je,
                      nTrackWidth: w,
                      nScrollWidth: Y,
                    }),
                    (document.body.style.userSelect = "none"),
                    v(A);
                },
                B = (A) => {
                  (h = null), (document.body.style.userSelect = "");
                };
              return (
                g.addEventListener("pointerdown", I),
                g.addEventListener("pointermove", v),
                g.addEventListener("lostpointercapture", B),
                () => {
                  g.removeEventListener("pointerdown", I),
                    g.removeEventListener("pointermove", v),
                    g.removeEventListener("lostpointercapture", B);
                }
              );
            }, []);
          let c = s.strActiveID;
          (0, m.useEffect)(() => {
            let u = o.current.get(c);
            if (!u) return;
            const g = e.current;
            if (!g) return;
            let f = g.getBoundingClientRect(),
              h = u.getBoundingClientRect();
            if (h.left < f.left || h.right > f.right) {
              let x = h.left - f.left + g.scrollLeft;
              g.scrollTo({ left: x, behavior: "smooth" });
            }
          }, [c]);
          let d = (0, m.useCallback)(
            (u, g) => {
              g ? o.current.set(u, g) : o.current.delete(u);
            },
            [o],
          );
          return {
            refStrip: e,
            refTrack: n,
            refThumb: r,
            fnRegisterItemElement: d,
          };
        }
        function uc(s) {
          let { refStrip: e, items: n, registerItemElement: r } = s,
            a = mc(),
            o = n.map((c) =>
              (0, t.jsx)(gc, { item: c, registerItemElement: r }, c.key),
            );
          return (0, t.jsx)("div", {
            ref: e,
            className: wt.StripItems,
            onKeyDown: a,
            tabIndex: 0,
            children: o,
          });
        }
        function mc() {
          let s = on();
          return (0, m.useCallback)(
            (n) => {
              n.repeat ||
                (n.code == "ArrowLeft"
                  ? (n.currentTarget.matches(":dir(rtl)")
                      ? s.strNextID && s.fnSetActive(s.strNextID)
                      : s.strPreviousID && s.fnSetActive(s.strPreviousID),
                    n.preventDefault())
                  : n.code == "ArrowRight" &&
                    (n.currentTarget.matches(":dir(rtl)")
                      ? s.strPreviousID && s.fnSetActive(s.strPreviousID)
                      : s.strNextID && s.fnSetActive(s.strNextID),
                    n.preventDefault()));
            },
            [s],
          );
        }
        function gc(s) {
          let { item: e, registerItemElement: n } = s,
            r = on(),
            a = e.key == r.strActiveID,
            o = () => r.fnSetActive(e.key),
            c = e.key,
            d = (0, m.useCallback)((f) => n(c, f), [c, n]),
            u = e.data.thumbnail ? e.data.thumbnail : "",
            g = (0, D.A)(wt.Item, a && wt.Active);
          return (0, t.jsxs)("div", {
            ref: d,
            className: g,
            onClick: o,
            children: [
              !!u && (0, t.jsx)("img", { src: u, alt: "" }),
              e.type == "trailer" &&
                (0, t.jsx)("div", {
                  className: wt.PlayIcon,
                  children: (0, t.jsx)(Ui.ud, {}),
                }),
            ],
          });
        }
        function pc(s) {
          let { refTrack: e, refThumb: n } = s,
            r = on(),
            a = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
            o = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
          return (0, t.jsxs)("div", {
            className: wt.StripScrollbar,
            children: [
              (0, t.jsx)("div", {
                className: wt.Arrow,
                onClick: a,
                children: (0, t.jsx)(Cs, { direction: "left" }),
              }),
              (0, t.jsx)("div", {
                ref: e,
                className: wt.Track,
                children: (0, t.jsx)("div", { ref: n, className: wt.Thumb }),
              }),
              (0, t.jsx)("div", {
                className: wt.Arrow,
                onClick: o,
                children: (0, t.jsx)(Cs, { direction: "right" }),
              }),
            ],
          });
        }
        function Cs(s) {
          let { direction: e } = s;
          return e == "right"
            ? (0, t.jsx)("svg", {
                viewBox: "0 0 49 79",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, t.jsx)("path", {
                  d: "M8.81647 0L48 39.5005L8.81647 79L0 70.1124L30.3671 39.4995L0 8.88756L8.81647 0Z",
                  fill: "currentColor",
                }),
              })
            : (0, t.jsx)("svg", {
                viewBox: "0 0 49 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, t.jsx)("path", {
                  d: "M39.3427 79.6279L0.159182 40.1274L39.3427 0.627931L48.1592 9.51549L17.7921 40.1284L48.1592 70.7404L39.3427 79.6279Z",
                  fill: "currentColor",
                }),
              });
        }
        var Yi = i(82734),
          fc = i(95396),
          Ks = i(86048);
        const hc = 5e3;
        function yc(s) {
          let { appName: e, trailers: n, screenshots: r } = s,
            a = xc(),
            o = wi(n, r);
          return (
            vc(o),
            o.length == 0
              ? null
              : (0, t.jsx)(Wt.QY, {
                  supportsTheater: !a,
                  supportsFullscreen: (0, Yi.tg)(),
                  children: (0, t.jsx)(rc, {
                    children: (0, t.jsx)(ac, {
                      orderedItems: o,
                      children: (0, t.jsxs)(bc, {
                        children: [
                          (0, t.jsx)(Ic, { appName: e, items: o }),
                          (0, t.jsx)(cc, { items: o }),
                        ],
                      }),
                    }),
                  }),
                })
          );
        }
        function xc() {
          return (
            (0, fc.$)(`(max-width: ${Me.storeNarrowResponsiveWidth})`) ||
            F.TS.IN_MOBILE_WEBVIEW
          );
        }
        function vc(s) {
          let e = s.length;
          (0, m.useLayoutEffect)(() => {
            if (e < 1) return;
            document
              .querySelectorAll(".gamehighlight_desktopskeleton")
              .forEach((r) => r.remove());
          }, [e]);
        }
        const ki = (0, m.createContext)(!1);
        function jc() {
          return (0, m.useContext)(ki);
        }
        function bc(s) {
          let { children: e } = s,
            [n, r] = (0, m.useState)(!1),
            a = (0, m.useCallback)((u) => r(u.isIntersecting), []),
            o = (0, re.BL)(a),
            { refRoot: c } = Bc(n),
            d = (0, re.Ue)(o, c);
          return (0, t.jsx)(ki.Provider, {
            value: n,
            children: (0, t.jsx)("div", { ref: d, children: e }),
          });
        }
        function Bc(s) {
          let e = (0, m.useRef)(null),
            n = (0, m.useRef)(0),
            r = (0, m.useRef)(!1),
            a = (0, m.useRef)(s),
            o = on(),
            c = (0, m.useRef)(o);
          c.current = o;
          let u = ((0, Wt.ri)()?.strMode ?? "none") != "none",
            g = (0, m.useRef)(u);
          g.current = u;
          let f = (0, m.useCallback)(() => {
              if (
                !c.current ||
                c.current.strActiveType != "screenshot" ||
                n.current ||
                r.current ||
                g.current ||
                !a.current
              )
                return;
              let v = () => {
                (n.current = 0), c.current.fnSetActive(c.current.strNextID);
              };
              n.current = window.setTimeout(v, hc);
            }, []),
            h = (0, m.useCallback)(() => {
              n.current && (window.clearTimeout(n.current), (n.current = 0));
            }, []),
            x = o.strActiveID;
          return (
            (0, m.useEffect)(() => {
              f();
            }, [x]),
            (0, m.useEffect)(() => {
              u ? h() : f();
            }, [u]),
            (0, m.useEffect)(() => {
              const v = e.current;
              if (!v) return;
              let I = () => {
                  document.visibilityState == "visible" ? f() : h();
                },
                B = () => {
                  (r.current = !0), h();
                },
                A = () => {
                  (r.current = !1), f();
                };
              return (
                v.addEventListener("pointerenter", B),
                v.addEventListener("pointerleave", A),
                document.addEventListener("visibilitychange", I),
                () => {
                  v.removeEventListener("pointerenter", B),
                    v.removeEventListener("pointerleave", A),
                    document.addEventListener("visibilitychange", I);
                }
              );
            }, []),
            (0, m.useEffect)(() => {
              (a.current = s), s ? f() : h();
            }, [s, f, h]),
            { refRoot: e }
          );
        }
        function Ic(s) {
          let { appName: e, items: n } = s,
            r = on(),
            a = Sc(),
            o = (0, Wt.ri)(),
            c = o?.strMode == "theater",
            [d, u] = Lc(),
            [g, f] = (0, Ks.Rb)(),
            h = g ? r.strActiveID : "",
            x = Pc(r),
            v = (0, re.Ue)(o?.refTheater, x),
            I = n.map((S) =>
              S.type == "screenshot"
                ? (0, t.jsx)(
                    Oc,
                    { id: S.key, screenshot: S.data, focus: S.key == h },
                    S.key,
                  )
                : S.type == "trailer"
                  ? (0, t.jsx)(
                      Ac,
                      { id: S.key, trailer: S.data, focus: S.key == h },
                      S.key,
                    )
                  : null,
            ),
            B = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
            A = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Ec, {
                ref: v,
                className: Me.TheaterDialog,
                ...f,
                children: (0, t.jsxs)("div", {
                  className: Me.TheaterModeFrame,
                  children: [
                    (0, t.jsx)(Mc, { appName: e }),
                    (0, t.jsxs)("div", {
                      ref: o?.refFullscreen,
                      className: Me.ItemViewArea,
                      ...u,
                      onKeyDown: a,
                      tabIndex: 0,
                      children: [
                        I,
                        (0, t.jsx)("div", {
                          className: (0, D.A)(
                            Me.FullscreenArrow,
                            d && Me.Visible,
                            Me.Previous,
                          ),
                          onClick: B,
                          "data-keepcontrols": !0,
                          children: (0, t.jsx)(Cs, { direction: "left" }),
                        }),
                        (0, t.jsx)("div", {
                          className: (0, D.A)(
                            Me.FullscreenArrow,
                            d && Me.Visible,
                            Me.Next,
                          ),
                          onClick: A,
                          "data-keepcontrols": !0,
                          children: (0, t.jsx)(Cs, { direction: "right" }),
                        }),
                      ],
                    }),
                    (0, t.jsx)(Tc, { items: n, activeItem: r.strActiveID }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(Me.SkeletonViewArea, c && Me.TheaterMode),
              }),
            ],
          });
        }
        function Ec(s) {
          let { ref: e, children: n, ...r } = s,
            a = (0, Wt.ri)(),
            o = a?.strMode,
            c = (0, Wt.Dy)(a, "none"),
            d = (0, m.useCallback)(
              (u) => {
                u.target === u.currentTarget && c();
              },
              [c],
            );
          return (
            (0, m.useEffect)(() => {
              if (o != "theater") return;
              let u = (g) => {
                g.key == "Escape" && !g.repeat && c();
              };
              return (
                window.addEventListener("keydown", u),
                () => window.removeEventListener("keydown", u)
              );
            }, [o, c]),
            (0, t.jsx)("div", {
              ref: e,
              ...r,
              popover: "manual",
              onClick: d,
              children: n,
            })
          );
        }
        function Pc(s) {
          let e = (0, m.useCallback)(
            (n) => {
              n == "left" && s.strNextID
                ? s.fnSetActive(s.strNextID)
                : n == "right" &&
                  s.strPreviousID &&
                  s.fnSetActive(s.strPreviousID);
            },
            [s],
          );
          return (0, Ks.zO)(e);
        }
        function Mc(s) {
          let { appName: e } = s,
            n = (0, Wt.ri)(),
            r = (0, Wt.Dy)(n, "none");
          return (0, t.jsxs)("div", {
            className: Me.TheaterModeHeader,
            children: [
              (0, t.jsx)("div", {
                className: Me.Center,
                children: (0, L.we)("#GameHighlight_Theater_Header", e),
              }),
              (0, t.jsx)("div", {
                className: Me.Right,
                children: (0, t.jsx)(N.tmm, { onClick: r }),
              }),
            ],
          });
        }
        function Tc(s) {
          let { items: e, activeItem: n } = s,
            r = e.findIndex((o) => n && o.key == n),
            a = "";
          return (
            r >= 0 &&
              (a = (0, L.we)(
                "#GameHighlight_Theater_ItemCount",
                r + 1,
                e.length,
              )),
            (0, t.jsx)("div", {
              className: Me.TheaterModeFooter,
              children: a.length > 0 && (0, t.jsx)("div", { children: a }),
            })
          );
        }
        function Sc() {
          let s = on();
          return (0, m.useCallback)(
            (n) => {
              n.repeat ||
                s.strActiveType == "trailer" ||
                (n.code == "ArrowLeft"
                  ? (n.currentTarget.matches(":dir(rtl)")
                      ? s.strNextID && s.fnSetActive(s.strNextID)
                      : s.strPreviousID && s.fnSetActive(s.strPreviousID),
                    n.preventDefault())
                  : n.code == "ArrowRight" &&
                    (n.currentTarget.matches(":dir(rtl)")
                      ? s.strPreviousID && s.fnSetActive(s.strPreviousID)
                      : s.strNextID && s.fnSetActive(s.strNextID),
                    n.preventDefault()));
            },
            [s],
          );
        }
        function Lc() {
          let [s, e] = (0, ss.if)(),
            n = (0, m.useRef)({ element: void 0, bKeepControls: !1 }),
            r = (0, m.useCallback)(
              (g) => {
                if (g.target == n.current.element) return;
                let f = (0, ss.Ae)(g);
                n.current = { element: g.target, bKeepControls: f };
              },
              [n],
            ),
            a = (0, m.useCallback)(
              (g) => {
                if (n.current.bKeepControls) {
                  e(!0, 0);
                  return;
                }
                e(!0, g);
              },
              [n, e],
            ),
            o = (0, m.useCallback)(
              (g) => {
                g.pointerType != "touch" && (r(g), a((0, ss.Av)(g)));
              },
              [a, r],
            ),
            c = (0, m.useCallback)(
              (g) => {
                g.pointerType != "touch" && (r(g), a((0, ss.Av)(g)));
              },
              [r, a],
            ),
            d = (0, m.useCallback)(
              (g) => {
                g.pointerType != "touch" &&
                  ((n.current = { element: void 0, bKeepControls: !1 }),
                  a((0, ss.Ug)()));
              },
              [n, a],
            ),
            u = (0, m.useCallback)(
              (g) => {
                a((0, ss.Av)(g));
              },
              [a],
            );
          return [
            s,
            {
              onPointerEnter: o,
              onPointerMove: c,
              onPointerLeave: d,
              onPointerDown: u,
            },
          ];
        }
        function Oc(s) {
          let { id: e, screenshot: n, focus: r } = s,
            a = Gi(e),
            o = oc(e),
            c = Vi(a || o),
            d = (0, Wt.ri)(),
            u = (0, Wt.Dy)(d, "theater"),
            g = !d?.strMode || d.strMode == "none",
            f = (0, Ks.b$)(r);
          if (!c) return null;
          let h = (0, D.A)(
              Me.ViewedItem,
              a && Me.Active,
              Me.Screenshot,
              g && Me.PageEmbedded,
            ),
            x = n.full,
            v = g ? u : void 0;
          return (0, t.jsxs)("div", {
            ref: f,
            className: h,
            onClick: v,
            tabIndex: 0,
            children: [
              (0, t.jsx)("img", { src: x, alt: n.altText }),
              (0, t.jsxs)("div", {
                className: Me.Controls,
                children: [
                  d?.bSupportsTheater && (0, t.jsx)(Ci.tS, {}),
                  d?.bSupportsFullscreen && (0, t.jsx)(Ci.Wc, {}),
                ],
              }),
            ],
          });
        }
        function Ac(s) {
          let { id: e, trailer: n, focus: r } = s,
            a = Gi(e),
            o = Vi(a),
            [c, d] = (0, re.TP)(),
            u = jc(),
            g = on(),
            f = (0, m.useCallback)(() => g.fnSetActive(g.strNextID), [g]);
          if (!o) return null;
          let h = (0, D.A)(Me.ViewedItem, a && Me.Active, Me.Trailer);
          return (0, t.jsx)(Wt.vG, {
            drop: !(0, Yi.tg)(),
            children: (0, t.jsx)("div", {
              ref: d,
              className: h,
              children: (0, t.jsx)(hr.P, {
                dashManifests: n.dashManifests,
                hlsManifest: n.hlsManifest,
                screenshot: n.poster,
                altText: n.title,
                forcePause: !a || !c || !u,
                onPlaybackEnd: f,
                title: n.title,
                category: n.category,
                statsURL: n.statsURL,
                focus: r,
              }),
            }),
          });
        }
        function Vi(s) {
          let e = (0, m.useRef)(!1);
          return s && (e.current = !0), e.current;
        }
        var kn = i(55051),
          kt = i(26356),
          zc = i(46477),
          Nc = i(6046),
          Dc = i(35111),
          fn = i.n(Dc),
          Vn = i(41944);
        function Fc(s) {
          const { appID: e, results: n, appName: r, tab: a = kt.ZJ } = s,
            o = (0, C.Qn)();
          let c;
          a == kt.JR
            ? (c = (0, L.we)(
                "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
              ))
            : a == kt.c9
              ? (c = (0, L.we)(
                  "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
                ))
              : a == kt.bY
                ? (c = (0, L.we)(
                    "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
                  ))
                : (c = o
                    ? (0, L.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
                      )
                    : (0, L.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
                      ));
          const d = m.useId();
          return n
            ? (0, t.jsxs)("div", {
                className: fn().BannerContainer,
                role: "group",
                "aria-labelledby": d,
                children: [
                  (0, t.jsx)("div", {
                    className: fn().BannerHeader,
                    id: d,
                    children: c,
                  }),
                  (0, t.jsx)(Qi, { ...s }),
                ],
              })
            : null;
        }
        function Qi(s) {
          const {
              appID: e,
              results: n,
              appName: r,
              tab: a = kt.ZJ,
              className: o,
            } = s,
            c = (0, C.Qn)();
          let d, u;
          if (
            (a == kt.c9
              ? ((d = (0, t.jsx)(Vn.aw, {
                  category: n.steamos_resolved_category,
                })),
                (u = (0, t.jsx)(Wc, { category: n.steamos_resolved_category })))
              : a == kt.JR
                ? ((d = (0, t.jsx)(Vn.Ez, {
                    category: n.machine_resolved_category,
                  })),
                  (u = (0, t.jsx)(Ir, {
                    category: n.machine_resolved_category,
                  })))
                : a == kt.bY
                  ? ((d = (0, t.jsx)(Vn.Ez, {
                      category: n.frame_resolved_category,
                    })),
                    (u = (0, t.jsx)(Ir, {
                      category: n.frame_resolved_category,
                    })))
                  : ((d = (0, t.jsx)(Vn.Ez, { category: n.resolved_category })),
                    (u = (0, t.jsx)(Ir, { category: n.resolved_category }))),
            !n)
          )
            return null;
          const g = n?.steam_deck_blog_url && a != kt.bY;
          return (0, t.jsxs)("div", {
            className: (0, D.A)(
              c ? fn().BannerContent : fn().BannerContentDesktop,
              o,
            ),
            children: [
              (0, t.jsxs)("div", { children: [d, u] }),
              (0, t.jsx)(wc, {
                results: n,
                learnMore: (0, L.we)(
                  "#SteamDeckVerified_Store_CompatSection_LearnMore",
                ),
                appName: r || "",
                eStartingTab: a,
              }),
              g && (0, t.jsx)("div", { className: fn().Divider }),
              g &&
                (0, t.jsx)(Vn.Tz, {
                  url: n.steam_deck_blog_url,
                  containerClass: fn().DeveloperComments_Anchor,
                  bIncludeIcon: !0,
                }),
            ],
          });
        }
        function Ir(s) {
          const { category: e } = s;
          return (0, t.jsx)("span", {
            className: fn().CompatibilityDetailRatingDescription,
            children: (0, L.we)((0, Vn.Dy)(e)),
          });
        }
        function Wc(s) {
          const { category: e } = s;
          return (0, t.jsx)("span", {
            className: fn().CompatibilityDetailRatingDescription,
            children: (0, L.we)((0, Vn.wW)(e)),
          });
        }
        function wc(s) {
          const {
              results: e,
              learnMore: n,
              appName: r,
              eStartingTab: a = kt.ZJ,
            } = s,
            [o, c] = (0, m.useState)(!1);
          let d = m.useCallback(
            (f) => {
              const h = (0, zc.D)();
              h && h.AddEvent(kn.Xm.gS), c(!0);
            },
            [c],
          );
          const u = () => {
            c(!1);
          };
          let g = {
            onOKButton: void 0,
            onOKActionDescription: null,
            onCancelActionDescription: Z.Z.Localize("#Button_Close"),
            onCancelButton: () => c(!1),
          };
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(M.Ii, {
                className: fn().LearnMore,
                onClick: d,
                children: n,
              }),
              (0, t.jsx)($.mt, {
                active: o,
                onDismiss: u,
                modalClassName: "DeckVerifiedModalDialog",
                children: (0, t.jsx)(ie.q, {
                  children: (0, t.jsx)(Nc.Ay, {
                    results: e,
                    buttonProps: g,
                    appName: r,
                    eStartingTab: a,
                  }),
                }),
              }),
            ],
          });
        }
        const Rc = Fc;
        var Uc = i(4880),
          en = i(72604),
          Er = i(66243),
          Cc = i(47604),
          Kc = i(64238),
          Qn = i.n(Kc),
          Be = i(45931),
          Rt = i(37520),
          zt = i(46146),
          Te = i(35038),
          ln = i(19982),
          Xt = i(68312);
        const wn = "0",
          $i = "-1",
          js = "wishlistcategories";
        function Zi(s, e, n) {
          return [js, s, e, n];
        }
        function Ji(s, e, n, r) {
          return {
            queryKey: Zi(e, !n || n === "0" ? "" : n, r),
            queryFn: () => Gc(s, e, n, r),
            staleTime: 600 * 1e3,
          };
        }
        async function Gc(s, e, n, r) {
          if (!e || (n != e && !r)) return [];
          let a = [];
          if (r) {
            const o = Te.w.Init(ln.Y);
            o.Body().set_steamid(e),
              o.Body().set_share_token(r),
              (a =
                (await ln.FQ.GetSharedWishlistCategories(s, o))
                  .Body()
                  .toObject().categories ?? []);
          } else {
            const o = Te.w.Init(ln.tP);
            a =
              (await ln.FQ.GetWishlistCategories(s, o)).Body().toObject()
                .categories ?? [];
          }
          return Sr(a);
        }
        function Gs(s, e) {
          const n = (0, rn.LH)(),
            r = (0, Xt.KV)();
          return (0, an.I)(Ji(r, s, n, e));
        }
        function Yc(s, e) {
          const n = (0, rn.LH)(),
            r = (0, Xt.KV)(),
            a = m.useCallback((o) => new Map(o.map((c) => [c.id, c])), []);
          return (0, an.I)({ ...Ji(r, s, n, e), select: a });
        }
        const Pr = "wishlistappidcategories";
        function Mr(s, e) {
          return [Pr, s, e];
        }
        function kc(s, e, n) {
          return {
            queryKey: Mr(e, n),
            queryFn: async () => {
              const r = Te.w.Init(ln.vu);
              r.Body().set_appid(n);
              const a = await ln.FQ.GetItemCategories(s, r);
              return a.BSuccess()
                ? Sr(a.Body().toObject().categories ?? [])
                : [];
            },
            staleTime: 600 * 1e3,
          };
        }
        function Tr(s, e) {
          const n = (0, Xt.KV)();
          return (0, an.I)(kc(n, s, e));
        }
        function Xi(s) {
          const e = (0, Xt.KV)(),
            n = (0, pn.jE)();
          return (0, ps.n)({
            mutationFn: async (r) => {
              const a = Te.w.Init(ln.Vh);
              a.Body().set_appid(r.appid),
                a.Body().set_category_name(r.categoryName),
                a.Body().set_categoryid(r.categoryID);
              const o = await ln.FQ.AddWishlistItemCategory(e, a);
              let c = { eresult: o.GetEResult() };
              return (
                o.BSuccess() &&
                  (c.category = {
                    id: o.Body().categoryid(),
                    name: o.Body().name(),
                    cItems: o.Body().item_count(),
                    bNotificationOptIn: !!o.Body().notification_opt_in(),
                  }),
                c
              );
            },
            onSuccess(r, a) {
              n.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", s],
                exact: !1,
              }),
                n.invalidateQueries({ queryKey: [js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: Mr(s, a.appid) });
            },
          });
        }
        function Hi(s) {
          const e = (0, Xt.KV)(),
            n = (0, pn.jE)();
          return (0, ps.n)({
            mutationFn: async (r) => {
              const a = Te.w.Init(ln.sF);
              return (
                a.Body().set_appid(r.appid),
                a.Body().set_categoryid(r.categoryID),
                (await ln.FQ.RemoveWishlistItemCategory(e, a)).GetEResult()
              );
            },
            onSuccess(r, a) {
              n.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", s],
                exact: !1,
              }),
                n.invalidateQueries({ queryKey: [js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: Mr(s, a.appid) });
            },
          });
        }
        function Ch(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async (r) => {
              const a = CProtoBufMsg.Init(
                CWishlist_RenameWishlistCategory_Request,
              );
              return (
                a.Body().set_categoryid(r.categoryID),
                a.Body().set_name(r.name),
                {
                  eresult: (
                    await WishlistService.RenameWishlistCategory(e, a)
                  ).GetEResult(),
                }
              );
            },
            onSuccess() {
              n.invalidateQueries({ queryKey: [js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: [Pr, s], exact: !1 });
            },
          });
        }
        const qi = 256;
        function Kh(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async (r) => {
              const a = {
                eresult: k_EResultOK,
                rgAppIDsUpdated: [],
                rgAppIDsFailed: [],
              };
              if (r.rgAppIDs.length === 0 || (!r.categoryID && !r.categoryName))
                return (a.eresult = k_EResultInvalidParam), a;
              let o = r.categoryID;
              for (let c = 0; c < r.rgAppIDs.length; c += qi) {
                const d = r.rgAppIDs.slice(c, c + qi),
                  u = CProtoBufMsg.Init(
                    CWishlist_SetWishlistItemCategoryBulk_Request,
                  );
                for (const h of d) u.Body().add_appids(h);
                o && o !== wn
                  ? u.Body().set_categoryid(o)
                  : u.Body().set_category_name(r.categoryName),
                  u.Body().set_remove(!!r.bRemove);
                const g = await WishlistService.SetWishlistItemCategoryBulk(
                  e,
                  u,
                );
                if (!g.BSuccess()) {
                  (a.eresult = g.GetEResult()),
                    a.rgAppIDsFailed.push(...r.rgAppIDs.slice(c));
                  break;
                }
                const f = g.Body().toObject();
                a.rgAppIDsUpdated.push(...(f.appids_updated ?? [])),
                  a.rgAppIDsFailed.push(...(f.appids_failed ?? [])),
                  !a.category &&
                    f.category &&
                    ((a.category = Sr([f.category])[0]),
                    (o = o ?? a.category?.id));
              }
              return a;
            },
            onSuccess(r) {
              r.rgAppIDsUpdated.length !== 0 &&
                (n.invalidateQueries({
                  queryKey: ["WishlistSortedFiltered", s],
                  exact: !1,
                }),
                n.invalidateQueries({ queryKey: [js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: [Pr, s], exact: !1 }));
            },
          });
        }
        const Ys = "wishlist_recent_categories";
        function _i(s) {
          return {
            queryKey: [Ys],
            queryFn: async () => (await s.GetObject(Ys)) ?? [],
            staleTime: 3600 * 1e3,
          };
        }
        function ea() {
          const s = (0, Xt.rX)();
          return (0, an.I)(_i(s));
        }
        function ta() {
          const s = (0, Xt.rX)(),
            e = (0, pn.jE)();
          return (0, ps.n)({
            mutationFn: async (n) => {
              const r = (await e.ensureQueryData(_i(s))) ?? [],
                a = Array.from(new Set([...n.rgCategoryIDs, r])).slice(0, 3);
              return await s.StoreObject(Ys, a), a;
            },
            onSuccess: async (n) => {
              e.setQueryData([Ys], n);
            },
          });
        }
        function Sr(s) {
          return (
            s.map((n) => ({
              id: n.categoryid,
              name: n.name,
              cItems: n.item_count ?? 0,
              bNotificationOptIn: !!n.notification_opt_in,
            })) ?? []
          ).sort((n, r) =>
            n.cItems !== r.cItems
              ? r.cItems - n.cItems
              : n.name.localeCompare(r.name),
          );
        }
        function na(s) {
          const { data: e } = Gs(s);
          return m.useMemo(() => {
            let n = [
              {
                id: wn,
                name: (0, Be.g)("#Wishlist_Categories_Suggested_Birthday"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: wn,
                name: (0, Be.g)("#Wishlist_Categories_Suggested_Recommended"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: wn,
                name: (0, Be.g)("#Wishlist_Categories_Suggested_Discount"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
            ];
            for (const r of e ?? [])
              n = n.filter(
                (a) =>
                  a.name.toLocaleLowerCase() !== r.name.toLocaleLowerCase(),
              );
            return n;
          }, [e]);
        }
        function Gh(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient(),
            r = Zi(s, s, void 0);
          return useMutation({
            mutationFn: async (a) => {
              const o = await Vc(e, a);
              if (o !== k_EResultOK)
                throw new Error(
                  `SetWishlistCategoryNotifications returned EResult ${o}`,
                );
            },
            onMutate: async (a) => {
              await n.cancelQueries({ queryKey: r }),
                n.setQueryData(r, (o) => {
                  if (!o) return a;
                  const c = new Map(a.map((d) => [d.id, d]));
                  return o.map((d) => c.get(d.id) ?? { ...d });
                });
            },
            onError: () => n.invalidateQueries({ queryKey: r }),
          });
        }
        async function Vc(s, e) {
          if (e.length === 0) return k_EResultInvalidParam;
          const n = CProtoBufMsg.Init(
            CWishlist_SetWishlistCategoryNotifications_Request,
          );
          for (const a of e) {
            const o =
              new CWishlist_SetWishlistCategoryNotifications_Request_CategorySettings();
            o.set_categoryid(a.id),
              o.set_notification_opt_in(a.bNotificationOptIn),
              n.Body().add_categories(o);
          }
          return (
            await WishlistService.SetWishlistCategoryNotifications(s, n)
          ).GetEResult();
        }
        const Qc = parseInt(zt.wishlistCategoryMaxDisplayChars);
        var Lr = ((s) => (
          (s[(s.k_ECategoryButtonAction_None = 0)] =
            "k_ECategoryButtonAction_None"),
          (s[(s.k_ECategoryButtonAction_Filter = 1)] =
            "k_ECategoryButtonAction_Filter"),
          (s[(s.k_ECategoryButtonAction_Add = 2)] =
            "k_ECategoryButtonAction_Add"),
          (s[(s.k_ECategoryButtonAction_Remove = 3)] =
            "k_ECategoryButtonAction_Remove"),
          (s[(s.k_ECategoryButtonAction_Select = 4)] =
            "k_ECategoryButtonAction_Select"),
          s
        ))(Lr || {});
        function bs(s) {
          const {
              rgCategories: e,
              header: n,
              onClick: r,
              eAction: a,
              bMultiline: o,
              bShowEmptyLabel: c,
              bShowAllButton: d,
              containerClassName: u,
              size: g,
              bShowCounts: f,
            } = s,
            h = m.useRef(null),
            x = a !== 3 && a !== 0;
          let v = [],
            I = !1;
          for (const A of e) {
            A.bSelected && (I = !0);
            const S = A.id === wn ? A.name : A.id,
              z = (0, t.jsx)(
                sa,
                {
                  category: A,
                  selected: x && !!A.bSelected,
                  onClick: r ? () => r(A.name, A.id) : void 0,
                  eAction: a ?? 0,
                  bShowCount: f,
                },
                S,
              );
            v.push(z);
          }
          const B = (0, Be.g)("#Wishlist_Controls_Categories_All");
          return (
            m.useEffect(() => {
              h.current?.Node().BFocusWithin() &&
                h.current.Node().ForceMeasureFocusRing();
            }, [e]),
            (0, t.jsxs)(T.Z, {
              className: Qn()(zt.CategoriesCtn, u),
              scrollIntoViewWhenChildFocused: !0,
              children: [
                n !== null &&
                  (0, t.jsx)("span", {
                    className: zt.CategoryListHeader,
                    children:
                      n ?? (0, Be.g)("#Wishlist_Controls_Categories_Header"),
                  }),
                (0, t.jsxs)(T.Z, {
                  className: Qn()(
                    zt.CategoryList,
                    o && zt.Multiline,
                    g === "small" && zt.Small,
                    g === "default" && zt.ForceDefaultSize,
                  ),
                  "flow-children": o ? "grid" : "row",
                  focusableIfEmpty: e.length > 0,
                  navRef: h,
                  children: [
                    d &&
                      (0, t.jsx)(sa, {
                        category: {
                          cItems: 0,
                          id: $i,
                          name: B,
                          bNotificationOptIn: !1,
                        },
                        selected: !I,
                        onClick: () => r && r(B, $i),
                        onOKActionDescription: (0, Be.g)(
                          "#Wishlist_Gamepad_Filter_Clear_Category",
                        ),
                      }),
                    v,
                    !e.length &&
                      c &&
                      (0, t.jsx)("div", {
                        className: zt.CategoryListHeader,
                        children: (0, Be.g)("#Wishlist_Categories_None"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function sa(s) {
          const {
              category: e,
              selected: n,
              className: r,
              onOKActionDescription: a,
              onClick: o,
              eAction: c,
              bShowCount: d,
            } = s,
            u = c === 3,
            g = c === 1,
            f = e.name.length >= Qc;
          let h = a;
          g && !h
            ? (h = (0, Be.g)("#Wishlist_Gamepad_Filter_Category"))
            : c === 2 && !h
              ? (h = (0, Be.g)("#Wishlist_Gamepad_Add_Category"))
              : c === 3 &&
                !h &&
                (h = (0, Be.g)("#Wishlist_Gamepad_Removecategory"));
          const x = {
              onOKActionDescription: h,
              onOKButton: () => o && o(),
              focusClassName: zt.Focused,
            },
            v = !!o;
          let I;
          return (
            f
              ? (I = e.name)
              : u && v
                ? (I = (0, Be.g)(
                    "#Wishlist_Controls_Categories_Remove_Tooltip",
                  ))
                : g &&
                  v &&
                  (I = (0, Be.g)(
                    "#Wishlist_Controls_Categories_Filter_Tooltip",
                  )),
            (0, t.jsx)(Gn.Gq, {
              toolTipContent: I,
              usePointerEvents: !0,
              children: (0, t.jsxs)(M.fu, {
                className: Qn()(
                  zt.CategoryBtn,
                  u && zt.Removable,
                  n && zt.Selected,
                  !v && zt.NotActionable,
                  r,
                ),
                onClick: o,
                ...x,
                children: [
                  (0, t.jsx)("span", {
                    className: zt.CategoryName,
                    children: e.name,
                  }),
                  d &&
                    e.cItems > 0 &&
                    (0, t.jsxs)("span", { children: ["(", e.cItems, ")"] }),
                  u && (0, t.jsx)(N.i6V, {}),
                ],
              }),
            })
          );
        }
        function $c(s) {
          const { categoryCount: e, onClick: n, bSimulateHover: r } = s;
          return (0, t.jsx)(Gn.Gq, {
            toolTipContent: (0, Be.g)("#Wishlist_Controls_Categories_Manage"),
            usePointerEvents: !0,
            children: (0, t.jsx)(M.fu, {
              className: Qn()(
                zt.CategoryBtn,
                zt.CategorySettingsBtn,
                r && zt.Focused,
              ),
              onClick: n,
              children: e > 0 ? (0, t.jsx)(N.vmx, {}) : (0, t.jsx)(N.FWt, {}),
            }),
          });
        }
        const ra = 16;
        function ia(s) {
          const {
              appid: e,
              steamid: n,
              onClose: r,
              filteredCategoryIDs: a,
              onAdvanced: o,
            } = s,
            [c, d] = m.useState([]),
            u = ta(),
            { data: g } = (0, E.J$)({ appid: e }),
            f =
              g && g.name && g.visible
                ? (0, Be.g)("#Wishlist_Controls_Categories_Manageitem", g?.name)
                : (0, Be.g)("#Wishlist_Controls_Categories_Manage"),
            { data: h } = Gs(n),
            x = !!o && !!h && h.length > 0,
            v = m.useCallback(() => {
              u.mutate({ rgCategoryIDs: c.reverse() }), r();
            }, [u, c, r]),
            I = (B) => {
              a && a.has(B) && v();
            };
          return (0, t.jsx)(Cc.s, {
            onClose: v,
            strTitle: f,
            navID: "AddWishlistCategoryDialog",
            className: Rt.DialogContent,
            children: (0, t.jsxs)(T.Z, {
              "flow-children": "column",
              children: [
                (0, t.jsx)(Jc, {
                  appid: e,
                  steamid: n,
                  onCategoryAdd: (B) => d([...c, B].slice(-3)),
                  onCategoryRemove: I,
                }),
                (0, t.jsxs)(T.Z, {
                  className: Rt.Buttons,
                  children: [
                    x &&
                      (0, t.jsx)(Er.Oh, {
                        onClick: o,
                        children: (0, Be.g)(
                          "#Wishlist_Categories_Dialog_Advanced",
                        ),
                      }),
                    (0, t.jsx)(Er.n9, {
                      onClick: v,
                      children: Z.Z.Localize("#Button_Done"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Zc(s, e, n, r) {
          const { data: a } = Tr(n, e),
            { data: o } = ea(),
            c = (d, u) => {
              const g = new Set(u);
              return [
                ...u.map((h) => d.find((x) => x.id === h)).filter((h) => !!h),
                ...d.filter((h) => !g.has(h.id)),
              ];
            };
          return m.useMemo(() => {
            if (!a) return [];
            const d = new Set(a?.map((x) => x.id) ?? []),
              u = s.filter((x) => !d.has(x.id));
            if (!r || r.length === 0)
              return c(
                u.filter((x) => x.cItems > 0),
                o ?? [],
              );
            const g = r.toLocaleLowerCase();
            let f = !1,
              h = u.filter((x) => {
                let v = x.name.toLocaleLowerCase();
                return f || (f = v === g), v.indexOf(g) > -1;
              });
            return (
              (h = c(h, [])),
              f ||
                h.unshift({
                  id: wn,
                  name: r,
                  cItems: 0,
                  bNotificationOptIn: !1,
                }),
              h
            );
          }, [a, o, s, r]);
        }
        function Jc(s) {
          const {
              appid: e,
              steamid: n,
              onCategoryAdd: r,
              onCategoryRemove: a,
            } = s,
            [o, c] = m.useState(""),
            [d, u] = m.useState(void 0),
            g = Gs(n);
          m.useEffect(() => {
            !d && g.data && u(g.data);
          }, [g.data, d]);
          const f = Xi(n),
            h = async (Y, W) => {
              if (!Y || e === 0) return;
              const je = await f.mutateAsync({
                appid: e,
                categoryName: Y,
                categoryID: W ?? wn,
              });
              je.eresult === en.R &&
                je.category?.id &&
                (r(je.category.id),
                d &&
                  !d.some((sn) => sn.id === je.category.id) &&
                  u((sn) => [...sn, je.category]));
            },
            x = Hi(n),
            v = (Y) => {
              e !== 0 && (x.mutate({ appid: e, categoryID: Y }), a(Y));
            },
            I = (Y) => {
              Y.stopPropagation(),
                Y.preventDefault(),
                !(!o || o.length === 0) && (c(""), h(o));
            },
            { data: B } = Tr(n, e),
            A = na(n),
            S = A.length > 0,
            z = Zc(d ?? [], e, n, o),
            w = (0, C.Qn)();
          return (0, t.jsxs)(T.Z, {
            className: Rt.CategorySelectorCtn,
            "flow-children": "column",
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: Rt.ListHeader,
                    children: (0, Be.g)(
                      "#Wishlist_Controls_Categories_Header_Current",
                    ),
                  }),
                  (0, t.jsx)(bs, {
                    rgCategories: B ?? [],
                    header: null,
                    eAction: Lr.k_ECategoryButtonAction_Remove,
                    onClick: (Y, W) => v(W),
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: Rt.DialogCategoryCtn,
                  }),
                  !!B && B.length >= ra && (0, t.jsx)(Xc, {}),
                ],
              }),
              (0, t.jsxs)("form", {
                className: Rt.SearchForm,
                onSubmit: I,
                children: [
                  (0, t.jsx)(M.BA, {
                    autoFocus: !0,
                    value: o,
                    className: Rt.SearchInput,
                    type: "search",
                    placeholder: (0, Be.g)(
                      "#Wishlist_Categories_Dialog_Search",
                    ),
                    onChange: (Y) => c(Y.target.value),
                    onOKActionDescription:
                      o.length > 0
                        ? (0, Be.g)("#Wishlist_Categories_Dialog_Add")
                        : null,
                    maxLength: 500,
                  }),
                  !w &&
                    (0, t.jsx)("div", {
                      className: Qn()(
                        Rt.AddCategoryBtnCtn,
                        o.length > 0 && Rt.Visible,
                      ),
                      children: (0, t.jsx)(Er.Oh, {
                        onClick: I,
                        children: (0, Be.g)("#Wishlist_Categories_Dialog_Add"),
                      }),
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: Rt.ListHeader,
                    children: (0, Be.g)(
                      "#Wishlist_Controls_Categories_Header_Other",
                    ),
                  }),
                  (0, t.jsx)(bs, {
                    rgCategories: z,
                    onClick: h,
                    header: null,
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: Rt.DialogCategoryCtn,
                    eAction: Lr.k_ECategoryButtonAction_Add,
                  }),
                ],
              }),
              S &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: Rt.ListHeader,
                      children: (0, Be.g)(
                        "#Wishlist_Controls_Categories_Header_Suggested",
                      ),
                    }),
                    (0, t.jsx)(bs, {
                      rgCategories: A,
                      onClick: h,
                      header: null,
                      bMultiline: !0,
                      containerClassName: Qn()(
                        Rt.DialogCategoryCtn,
                        Rt.Suggested,
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function Xc() {
          return (0, t.jsx)("div", {
            className: Rt.MaxCategoriesMessage,
            children: (0, Be.g)("#Wishlist_Categories_Max_Per_App_Reached", ra),
          });
        }
        var Or = i(31518);
        function aa(s, e) {
          if (!s.current) return;
          const n = s.current.closest(".queue_menu_flyout");
          n &&
            (e
              ? n.classList.add("force_expand")
              : n.classList.remove("force_expand"));
        }
        function Hc(s) {
          const { appid: e } = s,
            n = (0, rn.LH)(),
            [r, a] = m.useState(void 0),
            [o, c] = m.useState(!1),
            d = m.useRef(null),
            [u, g] = (0, Ks.OP)(),
            { data: f } = Yc(n),
            { data: h } = Gs(n),
            x = na(n),
            { data: v } = ea(),
            { data: I } = Tr(n, e),
            B = Xi(n),
            A = Hi(n),
            S = ta(),
            z = async (Kt, _t) => {
              if (!r) return;
              const gr = _t ? r.find((De) => De.id === _t) : void 0;
              if (gr?.bSelected)
                A.mutate({ appid: e, categoryID: gr.id }),
                  a(
                    r.map((De) =>
                      De.id === _t
                        ? {
                            ...De,
                            bSelected: !1,
                            cItems: Math.max(0, De.cItems - 1),
                          }
                        : De,
                    ),
                  );
              else if (Kt) {
                const De = await B.mutateAsync({
                  appid: e,
                  categoryName: Kt,
                  categoryID: _t ?? wn,
                });
                if (De.eresult === en.R && De.category?.id) {
                  const $o = { ...De.category, bSelected: !0 };
                  a(
                    (Wh) => Wh?.map((Zo) => (Zo.name === Kt ? $o : Zo)) ?? [$o],
                  ),
                    S.mutate({ rgCategoryIDs: [De.category.id] });
                }
              }
            },
            w = (Kt) => {
              Kt.stopPropagation(), Kt.preventDefault(), aa(d, !0), c(!0);
            },
            Y = () => {
              c(!1), aa(d, !1), a(void 0);
            },
            W = 6;
          if (
            (m.useEffect(() => {
              if (r || !f || !h || !I || !v || !x) return;
              let Kt = new Set(I.map((De) => De.id) ?? []),
                _t = I.map((De) => ({ ...De, bSelected: !0 }));
              const gr = v.map((De) => f.get(De)).filter((De) => !!De);
              for (const De of [...gr, ...h]) {
                if (_t.length >= W) break;
                Kt.has(De.id) || (_t.push(De), Kt.add(De.id));
              }
              _t.length < W &&
                (_t = [..._t, ...(x?.slice(0, W - _t.length) ?? [])]),
                a(_t);
            }, [r, h, f, v, I, x]),
            !r || r.length === 0)
          )
            return null;
          const je = r.filter((Kt) => !Kt.bSelected),
            sn = r.filter((Kt) => Kt.bSelected);
          return (0, t.jsxs)("div", {
            className: Or.CategoriesMenuOption,
            ref: d,
            children: [
              (0, t.jsxs)(M.ml, {
                className: Or.HeaderCtn,
                ...g,
                onClick: w,
                children: [
                  (0, t.jsx)("div", {
                    className: Or.Label,
                    children: (0, L.we)("#Wishlist_QuickAdd_Header"),
                  }),
                  (0, t.jsx)($c, {
                    categoryCount: I?.length ?? 0,
                    bSimulateHover: u,
                    onClick: () => {},
                  }),
                ],
              }),
              sn.length > 0 &&
                (0, t.jsx)(bs, {
                  rgCategories: sn,
                  header: null,
                  onClick: z,
                  bMultiline: !0,
                }),
              je.length > 0 &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, L.we)(
                        "#Wishlist_QuickAdd_RecentAndSuggested",
                      ),
                    }),
                    (0, t.jsx)(bs, {
                      rgCategories: je,
                      header: null,
                      onClick: z,
                      bMultiline: !0,
                    }),
                  ],
                }),
              o && (0, t.jsx)(ia, { appid: e, steamid: n, onClose: Y }),
            ],
          });
        }
        var ee = i(78192),
          Bs = i(24179),
          oa = i(79882),
          la = i(63547),
          qc = i(68094);
        function Ar(s) {
          return s.packageid
            ? { packageid: s.packageid }
            : { bundleid: s.bundleid };
        }
        function _c(s) {
          return (0, qc.ER)(Ar(s));
        }
        var zr = i(49147);
        function Is() {
          const s = (0, Xt.KV)(),
            e = F.iA.accountid;
          return (0, an.I)(ed(s, e));
        }
        function ed(s, e) {
          return {
            queryKey: ca(e),
            queryFn: async () => {
              if (!e) return new Set();
              const n = await td(s, e);
              return new Set(n);
            },
            placeholderData: new Set(),
            staleTime: 600 * 1e3,
          };
        }
        function ca(s) {
          return ["AccountActiveLicenses", s ?? 0];
        }
        async function td(s, e) {
          throw new zr.x(en.Sq, "Not implemented");
        }
        function da() {
          const s = (0, pn.jE)(),
            e = F.iA.accountid;
          return m.useCallback(
            (n) => {
              s.setQueryData(ca(e), () => new Set(n));
            },
            [s, e],
          );
        }
        function nd(s, e) {
          return !s?.appid ||
            s.type === ee.uE._i ||
            !e ||
            !e.included_appids?.length ||
            !e.included_types?.length
            ? !1
            : e.included_appids.length > 1 &&
                !e.included_appids.includes(s.appid) &&
                e.included_types.every((n) => n === ee.uE._i);
        }
        function ua(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            n = e?.included_items?.included_packages;
          return m.useMemo(() => {
            const r = new Set();
            for (const a of n || []) a.id && nd(e, a) && r.add(a.id);
            return r;
          }, [e, n]);
        }
        function sd(s) {
          const { data: e } = (0, E.is)({ appid: s }),
            n = ua(s),
            r = e?.purchase_options;
          return m.useMemo(() => {
            if (r)
              return r
                .filter((a) => a.packageid && n.has(a.packageid))
                .sort(
                  (a, o) =>
                    Number(a.final_price_in_cents || 0) -
                    Number(o.final_price_in_cents || 0),
                );
          }, [r, n]);
        }
        var rs = i(67529);
        const hn = m.createContext({ appid: rs.sc, nOptions: 0 }),
          ma = m.createContext({ ShowConfirmDialog: () => {} });
        var rd = i(1880),
          id = i(15568);
        function ad(s) {
          const {
            active: e,
            onOK: n,
            closeModal: r,
            bCloseOnOK: a,
            children: o,
            ...c
          } = s;
          if (!e) return null;
          const d =
            (typeof c.strTitle == "string" && c.strTitle) ||
            (0, L.we)("#Steam_Platform");
          return (0, t.jsx)(id.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: d,
            children: (0, t.jsx)(rd.o0, {
              ...c,
              onCancel: r,
              onOK: () => {
                n(), a && r();
              },
              children: o,
            }),
          });
        }
        function od(s) {
          const { bCloseOnOK: e = !0, children: n, ...r } = s,
            [a, o, c] = (0, re.uD)();
          return [
            (0, t.jsx)(ad, {
              active: a,
              bCloseOnOK: e,
              closeModal: c,
              ...r,
              children: n,
            }),
            o,
            c,
          ];
        }
        function ld(s) {
          const [e, n] = m.useState(""),
            [r, a] = m.useState(""),
            [o, c] = od({
              bCloseOnOK: !0,
              bAlertDialog: !0,
              onOK: () => {},
              strTitle: e,
              strDescription: r,
            }),
            d = m.useCallback(
              (g, f) => {
                n(g), a(f), c();
              },
              [c],
            ),
            u = m.useMemo(() => ({ ShowConfirmDialog: d }), [d]);
          return (0, t.jsxs)(ma.Provider, {
            value: u,
            children: [s.children, o],
          });
        }
        var cd = i(21763),
          $n = i.n(cd),
          dd = i(62452);
        const ud = (s) => (0, t.jsx)(dd.u, { icon: !0, ...s }),
          Yh = (s) => jsx(ButtonLinkBase, { icon: !0, ...s });
        var Le = i(8892),
          md = i(80755);
        function Nr(s) {
          const { color: e, onClick: n, strIconTitle: r, children: a } = s,
            o = (c) => {
              c.stopPropagation(), n && n(c);
            };
          return r
            ? (0, t.jsx)(ud, {
                color: e,
                onClick: o,
                title: r,
                width: "36px",
                minWidth: "36px",
                children: a,
              })
            : (0, t.jsx)(Le.$, { color: e, onClick: o, children: a });
        }
        function gd(s) {
          const {
              onActivate: e,
              onOKActionDescription: n,
              onSecondaryButton: r,
              onSecondaryActionDescription: a,
              price: o,
              okIcon: c,
            } = s,
            d = !1;
          return o || n || (d && a)
            ? (0, t.jsxs)(O.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "stretch",
                justify: "end",
                gap: "2",
                children: [
                  o,
                  d &&
                    a &&
                    (0, t.jsx)(Nr, { onClick: r, children: (0, md.gh)(a) }),
                  n &&
                    (c
                      ? (0, t.jsx)(Nr, {
                          color: "storegreen",
                          onClick: e,
                          strIconTitle: n,
                          children: c,
                        })
                      : (0, t.jsx)(Nr, {
                          color: "storegreen",
                          onClick: e,
                          children: n,
                        })),
                ],
              })
            : null;
        }
        function kh(s) {
          const { option: e } = s,
            n = e.type == "item" && !!e.data.is_edition,
            r = e.type == "item" && e.data.package_group;
          return jsx(Fragment, { children: !1 });
        }
        function yn(s) {
          const {
              className: e,
              option: n,
              color: r = "blue",
              allowSingleLine: a,
              allowTwoColumn: o,
              price: c,
              okIcon: d,
              children: u,
              ...g
            } = s,
            { nOptions: f } = m.useContext(hn),
            h = f == 1;
          return (0, t.jsx)(ie.q, {
            rootClassName: $n().FocusRing,
            children: (0, t.jsxs)(T.Z, {
              className: (0, D.A)(
                $n().PurchaseOption,
                r == "green" && $n().Green,
                a && $n().AllowSingleLine,
                o && $n().AllowTwoColumn,
                h && $n().OnlyChild,
              ),
              focusable: !0,
              ...g,
              children: [
                h &&
                  o &&
                  (0, t.jsx)("div", {
                    className: $n().LeftColumn,
                    children: u,
                  }),
                !(h && o) && u,
                (0, t.jsx)(gd, { ...g, price: c, okIcon: d }),
                !1,
              ],
            }),
          });
        }
        var ga = i(13977),
          pd = i(13620);
        function Dr(s) {
          const e = (0, Qt.Gd)();
          return m.useCallback(() => {
            s.packageid
              ? window.AddItemToCart(s.packageid, void 0, e)
              : s.bundleid && window.AddItemToCart(void 0, s.bundleid, e);
          }, [e, s.packageid, s.bundleid]);
        }
        function ks(s, e) {
          return m.useCallback(() => {
            (0, ga.o)(s, e);
          }, [s, e]);
        }
        function fd(s, e) {
          return m.useCallback(() => {
            (0, ga.M)(s, e);
          }, [s, e]);
        }
        function Vs(s) {
          const { data: e } = (0, E.J$)(s),
            { ShowConfirmDialog: n } = m.useContext(ma),
            { data: r = new Set() } = Is(),
            a = da(),
            o = (0, pd.S)(s);
          return m.useCallback(() => {
            o.mutateAsync().then(([d, u]) => {
              let g,
                f = e?.name || "";
              if (d != en.R)
                g = p.Localize(
                  "#AppPage_PurchaseOption_AddToLibraryError",
                  f,
                  d,
                );
              else {
                g = p.Localize("#AppPage_PurchaseOption_AddedToLibrary", f);
                for (let h of u.packageids_added || []) r.add(h);
                a(Array.from(r));
              }
              n(f, g);
            });
          }, [o, n, e?.name, r, a]);
        }
        var Rn = i(57152);
        function hd(s) {
          const { id: e, bPrepurchase: n } = s,
            { data: r } = (0, E.J$)(e);
          return r
            ? n
              ? p.Localize("#AppPage_Prepurchase", r.name)
              : r.name
            : null;
        }
        function xn(s) {
          const { id: e, title: n, bPrepurchase: r = !1, children: a } = s;
          return (0, t.jsxs)(Rn.D, {
            size: "4",
            weight: "heavy",
            children: [n || (0, t.jsx)(hd, { id: e, bPrepurchase: r }), a],
          });
        }
        function vn(s) {
          const { children: e } = s;
          return (0, t.jsx)(O.s, {
            direction: "column",
            flexGrow: "1",
            gap: "2",
            overflow: "hidden",
            children: e,
          });
        }
        function yd(s) {
          const { option: e } = s,
            n = { appid: e.appid },
            { data: r } = (0, E.J$)(n),
            a = Vs(n),
            o = (0, Bs.$Y)(),
            c = e.bStandalone,
            d = o.data?.has(e.appid),
            u = fd(e.appid, r?.name ?? ""),
            g = (0, Wn.n)(r),
            f = m.useCallback(() => {
              g && (window.location.href = g);
            }, [g]);
          return r
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(yn, {
                  color: "green",
                  allowSingleLine: !e.label,
                  allowTwoColumn: !!e.label,
                  option: e,
                  onActivate: u,
                  onOKActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_Download",
                  ),
                  onSecondaryButton: c ? f : void 0,
                  onSecondaryActionDescription: c
                    ? p.Localize("#AppPage_PurchaseOption_MoreInfo")
                    : void 0,
                  onOptionsButton: d ? void 0 : a,
                  onOptionsActionDescription: d
                    ? void 0
                    : p.Localize("#AppPage_PurchaseOption_AddToLibrary"),
                  children: [
                    (0, t.jsx)(xn, {
                      title: p.Localize(
                        "#AppPage_PurchaseOption_DownloadDemo",
                        r.name,
                      ),
                    }),
                    (0, t.jsx)(vn, {
                      children: (0, t.jsx)(b.EY, { children: e.label }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var jn = i(44983),
          Lt = i(16114);
        function xd(s) {
          const { option: e } = s,
            n = m.useContext(hn),
            { data: r } = (0, E.J$)({ appid: n.appid }),
            a = ks(n.appid, r?.name ?? ""),
            o = (0, jn._2)(),
            c =
              r &&
              r.free_weekend &&
              (r.free_weekend.start_time || 0) <= o &&
              (r.free_weekend.end_time || 0) > o;
          return r
            ? (0, t.jsxs)(yn, {
                option: e,
                color: "green",
                allowSingleLine: !0,
                onActivate: a,
                onOKActionDescription: p.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, t.jsx)(xn, {
                    title: p.Localize("#AppPage_PurchaseOption_Play", r.name),
                  }),
                  (0, t.jsxs)(vn, {
                    children: [
                      !c &&
                        (0, t.jsx)(b.EY, {
                          children: p.Localize(
                            r.type == ee.uE.ue
                              ? "#AppPage_PurchaseOption_FreeDemo"
                              : "#AppPage_PurchaseOption_FreeToPlay",
                          ),
                        }),
                      c &&
                        (0, t.jsx)(b.EY, {
                          children: p.Localize(
                            "#AppPage_PurchaseOption_FreeWeekend",
                            (0, Lt.TW)(r.free_weekend.end_time, {
                              weekday: void 0,
                              year: void 0,
                              hour: "numeric",
                              minute: "numeric",
                            }),
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        }
        var pa = i(7487),
          vd = i(52574),
          jd = i(91937),
          bd = i(49144),
          Bd = i(33770),
          Id = i(59443),
          fa = i(51596),
          Qs = i(43434);
        function ha(s) {
          const { text: e, onURLDetected: n } = s,
            r = m.useCallback(
              (o) => {
                let c = (0, fa.P)(o.args) ?? (0, fa.P)(o.args, "href");
                return (
                  (0, Qs.p)(c) && (c = (0, Qs.E)(c)), n && n(c), (0, Id._r)(o)
                );
              },
              [n],
            );
          return m
            .useMemo(() => {
              const o = (d) => new pa.OJ(new pa.R8()),
                c = { ...vd.L, ...bd.I, ...jd.F, url: { Constructor: r } };
              return new Bd.B(c, o, C.TS.LANGUAGE);
            }, [r])
            .ParseBBCode(e, void 0);
        }
        var ya = i(34360),
          Ed = i(16346),
          Pd = i(59869),
          Fr = i.n(Pd);
        function Md(s) {
          const { option: e } = s,
            n = Dr(e),
            r = e.packageid
              ? { packageid: e.packageid }
              : { bundleid: e.bundleid };
          return (0, t.jsxs)(ya.kt, {
            className: Fr().MenuItem,
            onSelected: n,
            children: [
              (0, t.jsx)("div", {
                className: Fr().Name,
                children: e.purchase_option_name,
              }),
              (0, t.jsx)("div", {
                className: Fr().Price,
                children: (0, t.jsx)(vr.AO, { id: r, purchaseOption: e }),
              }),
            ],
          });
        }
        function Td(s) {
          const { option: e } = s;
          return (0, t.jsx)(ya.tz, {
            label: e.data.package_group.dropdown_title,
            children: e.data.items.map((n) =>
              (0, t.jsx)(Md, { option: n }, n.packageid ?? n.bundleid),
            ),
          });
        }
        function Sd(s) {
          if (s.data.package_group.name == "subscriptions") return !0;
          for (let e of s.data.items)
            if (!e.recurrence_info?.packageid) return !1;
          return !0;
        }
        function Ld(s) {
          const { option: e } = s,
            { appid: n } = m.useContext(hn),
            { data: r } = (0, E.J$)({ appid: n }),
            a = e.data.package_group,
            [o, c] = m.useState(""),
            d = (0, Qt.aL)(o),
            u = m.useCallback(() => {
              o && (window.location.href = d);
            }, [o, d]),
            g = m.useCallback(
              (f) => {
                (0, Ed.lX)((0, t.jsx)(Td, { option: e }), f);
              },
              [e],
            );
          return (0, t.jsxs)(yn, {
            option: e,
            allowTwoColumn: !0,
            onActivate: g,
            onSecondaryButton: o ? u : void 0,
            onSecondaryActionDescription: o
              ? p.Localize("#AppPage_PurchaseOption_MoreInfo")
              : void 0,
            children: [
              (0, t.jsx)(xn, {
                title:
                  a.dropdown_title ||
                  p.Localize("#AppPage_Dropdown_DefaultTitle", r?.name),
              }),
              (0, t.jsxs)(vn, {
                children: [
                  a.dropdown_description_bbcode &&
                    (0, t.jsx)(b.EY, {
                      size: "2",
                      children: (0, t.jsx)(ha, {
                        text: a.dropdown_description_bbcode,
                        onURLDetected: c,
                      }),
                    }),
                  !a.dropdown_description_bbcode &&
                    Sd(e) &&
                    (0, t.jsx)(b.EY, {
                      size: "2",
                      children: p.Localize(
                        "#AppPage_Dropdown_DefaultDescription_Subscription",
                      ),
                    }),
                ],
              }),
              (0, t.jsx)(O.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "end",
                justify: "end",
                gap: "2",
                children: (0, t.jsx)(Le.$, {
                  color: "greyneutral",
                  variant: "dark",
                  children: p.Localize("#AppPage_PurchaseOption_ViewOptions"),
                }),
              }),
            ],
          });
        }
        var xa = i(79014);
        function Od(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.lv)({ appid: e });
          if (!n || !r) return null;
          const a = (0, gs.b0)(r, "community_icon");
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !1,
              (0, t.jsx)(b.EY, {
                children: (0, xa.i)(
                  p.Localize(
                    "#AppPage_PurchaseOption_IncludedWithMasterSub",
                    n.name,
                  ),
                  (0, t.jsx)("b", {}),
                ),
              }),
            ],
          });
        }
        function Ad(s) {
          const { option: e, appidMasterSub: n } = s,
            r = m.useContext(hn),
            { data: a } = (0, E.J$)({ appid: r.appid }),
            o = ks(r.appid, a?.name ?? "");
          return a
            ? (0, t.jsxs)(yn, {
                option: e,
                color: "green",
                onActivate: o,
                onOKActionDescription: p.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, t.jsx)(xn, {
                    title: p.Localize("#AppPage_PurchaseOption_Play", a.name),
                  }),
                  (0, t.jsxs)(vn, {
                    children: [
                      !n &&
                        (0, t.jsx)(b.EY, {
                          children: p.Localize(
                            "#AppPage_PurchaseOption_Play_Description",
                            a.name,
                          ),
                        }),
                      n && (0, t.jsx)(Od, { appid: n }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function zd(s) {
          const { option: e, appidPlaytest: n, bIsOpen: r } = s,
            { data: a } = (0, E.J$)({ appid: n }),
            { data: o } = (0, E.by)({ appid: n }),
            { data: c } = (0, la.VZ)(n);
          if (!a || !o || !c) return null;
          const d = c?.[0]?.status || kn.EX.Rw;
          console.log(c, d);
          let u, g, f;
          switch (d) {
            case kn.EX.Rw:
              (u = "#AppPage_PurchaseOption_JoinPlaytest"),
                r
                  ? (o.steam_release_date || G.TQt) < (0, jn._2)()
                    ? (g = "#AppPage_PurchaseOption_Playtest_Open")
                    : (g = "#AppPage_PurchaseOption_Playtest_Open_Unreleased")
                  : (g = "#AppPage_PurchaseOption_JoinPlaytest_Description");
              break;
            case kn.EX.OT:
              (u = "#AppPage_PurchaseOption_JoinPlaytest"),
                (g = "#AppPage_PurchaseOption_JoinPlaytest_InvitePending");
              break;
            case kn.EX.IS:
              (u = "#AppPage_PurchaseOption_JoinPlaytest"),
                (g = "#AppPage_PurchaseOption_JoinPlaytest_InvitedByFriend");
              break;
            case kn.EX.m7:
              (o.steam_release_date || G.TQt) < (0, jn._2)()
                ? ((u = "#AppPage_PurchaseOption_Playtest_Accepted_Title"),
                  (g = "#AppPage_PurchaseOption_Playtest_Accepted"))
                : (o.is_preload,
                  (u =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable_Title"),
                  (g =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable"));
              break;
            default:
              (0, xs.wT)(!1, `Unknown playtest status ${d}`);
          }
          return (
            f && F.iA.logged_in,
            u && g
              ? (0, t.jsxs)(yn, {
                  option: e,
                  onActivate: f,
                  children: [
                    (0, t.jsx)(xn, { title: p.Localize(u, a.name) }),
                    (0, t.jsx)(vn, {
                      children: (0, t.jsx)(b.EY, { children: p.Localize(g) }),
                    }),
                  ],
                })
              : null
          );
        }
        var Nd = i(18574),
          cn = i.n(Nd);
        function Dd(s) {
          const { option: e } = s,
            n = { appid: e.appid },
            { data: r } = (0, E.J$)(n),
            a = (0, Wn.n)(r),
            o = m.useCallback(() => {
              a && (window.location.href = a);
            }, [a]);
          return r
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(yn, {
                  option: e,
                  onActivate: o,
                  onOKActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_MoreInfo",
                  ),
                  children: [
                    (0, t.jsx)(xn, { title: e.title }),
                    (0, t.jsx)(vn, {
                      children: (0, t.jsx)(b.EY, {
                        size: "2",
                        children: e.description,
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function Fd(s) {
          const { discount: e } = s;
          (0, ve.bB)({ msInterval: 1e3 });
          const n = (0, jn._2)();
          if (e.discount_end_date <= n) return null;
          const r = Math.max(e.discount_end_date - n, 0),
            a = e.discount_description,
            o = p.Localize(a, (0, Lt.R2)(r));
          return o == a
            ? null
            : (0, t.jsx)(b.EY, { contrast: "body", size: "2", children: o });
        }
        function Wd(s) {
          const { option: e } = s;
          return !e || !e.discount_pct || e.hide_discount_pct_for_compliance
            ? null
            : F.iA.country_code == "PL"
              ? (0, t.jsx)(b.EY, {
                  size: "2",
                  children: p.Localize("#AppPage_Discount_Last30"),
                })
              : null;
        }
        function wd(s) {
          const { option: e, discount: n } = s,
            r = m.useContext(hn),
            { data: a } = (0, E.J$)({ appid: r.appid }),
            { data: o } = (0, E.J$)({ appid: n.master_sub_appid || rs.sc });
          if (!a || !o || e.discount_pct <= 0) return null;
          const c = n.discount_description,
            d = p.Localize(c, "", e.discount_pct || 0, o.name, a.name);
          return c == d
            ? null
            : (0, t.jsx)(b.EY, { contrast: "body", size: "2", children: d });
        }
        function Rd(s) {
          const { option: e } = s;
          if (!e) return null;
          if (e.is_free_to_keep && e.free_to_keep_ends)
            return (0, t.jsx)(b.EY, {
              contrast: "body",
              size: "2",
              children: p.Localize(
                "#AppPage_PurchaseOption_FreeToKeepDescription",
                (0, Lt.TW)(e.free_to_keep_ends, {
                  weekday: void 0,
                  year: void 0,
                  hour: "numeric",
                  minute: "numeric",
                }),
              ),
            });
          if (!e?.active_discounts?.length) return null;
          const n = (0, jn._2)(),
            r = e.active_discounts.reduce((o, c) =>
              c.discount_end_date != G.TQt &&
              (!o ||
                (c.discount_end_date > n &&
                  c.discount_end_date < o.discount_end_date))
                ? c
                : o,
            );
          let a = "";
          if (r.discount_end_date == G.TQt)
            a = (0, t.jsx)(wd, { option: e, discount: r });
          else if (
            r.discount_end_date != G.TQt &&
            r.discount_end_date - n > 2880 * 60
          ) {
            const o = r.discount_description + "_date";
            (a = p.Localize(
              o,
              (0, Lt.TW)(r.discount_end_date, {
                weekday: void 0,
                year: void 0,
              }),
            )),
              a == o && (a = null);
          } else return (0, t.jsx)(Fd, { discount: r });
          return a
            ? (0, t.jsx)(b.EY, { contrast: "body", size: "2", children: a })
            : null;
        }
        function Wr(s) {
          const { option: e } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Rd, { option: e }),
              (0, t.jsx)(Wd, { option: e }),
            ],
          });
        }
        var wr = i(74107),
          Ud = i(58123),
          $s = i.n(Ud);
        function Rr(s) {
          const { id: e, bSelfPurchaseOption: n } = s,
            { data: r } = (0, E.Q_)(e),
            { data: a } = (0, E.J$)(e);
          if (!a) return null;
          const o = n && a.item_type == ee.c6.RD ? a.self_purchase_option : r;
          return !o?.hide_discount_pct_for_compliance || o.discount_pct <= 0
            ? null
            : (0, t.jsx)("table", {
                className: $s().SaleTechPriceGrid,
                children: (0, t.jsxs)("tbody", {
                  children: [
                    (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", {
                          children: wr.F5.Localize("#PriceGrid_NormalPrice"),
                        }),
                        (0, t.jsx)("th", {
                          children: wr.F5.Localize("#PriceGrid_RecentPrice"),
                        }),
                        (0, t.jsx)("th", {
                          children: wr.F5.Localize("#PriceGrid_CurrentPrice"),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("td", {
                          className: $s().OriginalPrice,
                          children: o.formatted_original_price,
                        }),
                        (0, t.jsx)("td", {
                          className: $s().LowestRecentPrice,
                          children: o.formatted_lowest_recent_price,
                        }),
                        (0, t.jsx)("td", {
                          className: $s().FinalPrice,
                          children: o.formatted_final_price,
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        var va = i(81055),
          Cd = i(54652),
          Kd = i.n(Cd);
        function Ur(s) {
          const { id: e } = s,
            { data: n } = (0, E.J$)(e),
            { data: r } = (0, E.by)(e),
            { data: a } = (0, E.Q_)(e),
            { data: o } = (0, Bs.$Y)();
          if (!n || !r || !a || !o) return null;
          const c = "bundleid" in e && !a.must_purchase_as_set,
            d = r?.is_coming_soon && !!r?.advance_access_date;
          let u = null,
            g,
            f;
          if (c)
            (n.included_appids?.filter((x) => !o.has(x)) || []).length > 0 &&
              ((g = "slate-12"),
              (f = "blue-8"),
              (u = p.Localize(
                "#AppPage_PurchaseOption_CompleteYourCollection",
              )));
          else if (d) {
            const h = (0, Lt.TW)(r.advance_access_date, {
              weekday: void 0,
              month: "short",
              day: "numeric",
              year: void 0,
            });
            (g = "slate-12"),
              (f = "blue-8"),
              (u = p.Localize("#AppPage_AdvanceAccess_Banner", h));
          }
          return u
            ? (0, t.jsx)(O.s, {
                className: Kd().PurchaseOptionBanner,
                paddingX: "1",
                background: f,
                children: (0, t.jsx)(b.EY, {
                  size: "1",
                  color: g,
                  contrast: "title",
                  whiteSpace: "nowrap",
                  truncate: !0,
                  children: u,
                }),
              })
            : null;
        }
        var Gd = i(76962),
          ja = i(8928),
          Cr = i(69289),
          ba = i(89611);
        function tn(s) {
          const e = (0, Cr.mz)({ ...s, className: s.className }, Yd);
          return (0, t.jsx)("img", { ...e });
        }
        const Yd = [
          ...ja.h,
          {
            prop: "objectFit",
            className: ba.ObjectFit,
            cssProperty: "--object-fit",
          },
          {
            prop: "objectPosition",
            className: ba.ObjectPosition,
            cssProperty: "--object-position",
          },
        ];
        function Zs(s, e) {
          return F.TS.STORE_ITEM_BASE_URL + s.replace("${FILENAME}", e);
        }
        function kd(s) {
          const { closeModal: e } = s,
            n = m.useContext(hn),
            { data: r } = (0, E.J$)({ appid: n.appid }),
            { data: a } = (0, E.lv)({ appid: n.appid });
          return (0, t.jsxs)(O.s, {
            direction: "column",
            height: "90vh",
            overflow: "hidden",
            align: "center",
            gap: "2",
            children: [
              (0, t.jsx)(le.az, {
                aspectRatio: "748 / 896",
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "90%",
                overflow: "hidden",
                children:
                  r &&
                  a &&
                  (0, t.jsx)(tn, {
                    width: "100%",
                    src: Zs(a.asset_url_format, a.edition_comparison),
                    alt: r.name,
                  }),
              }),
              (0, t.jsx)(le.az, {
                flexGrow: "0",
                flexShrink: "0",
                children: (0, t.jsx)(Le.$, {
                  onClick: e,
                  children: Z.Z.Localize("#Button_Close"),
                }),
              }),
            ],
          });
        }
        const Js = new fs.wd("PurchaseOptions");
        function Ba(s) {
          const { id: e } = s,
            { data: n } = (0, E.J$)(e);
          return n?.purchase_description_bbcode
            ? (0, t.jsx)("div", {
                children: (0, t.jsx)(ha, {
                  text: n.purchase_description_bbcode,
                }),
              })
            : null;
        }
        function Ia(s) {
          const { id: e } = s,
            { data: n } = (0, E.by)(e),
            { data: r } = Is();
          if (
            !n ||
            !n.advance_access_date ||
            !n.steam_release_date ||
            !r ||
            !n.is_coming_soon
          )
            return null;
          const a = "packageid" in e && r.has(e.packageid),
            o = (0, jn._2)(),
            c = (0, Lt.IH)(n.advance_access_date - o),
            d = (0, Lt.IH)(n.steam_release_date - n.advance_access_date);
          let u;
          return (
            o > n.advance_access_date
              ? (u = a
                  ? "#AppPage_AdvanceAccess_Now_Owned"
                  : "#AppPage_AdvanceAccess_Now")
              : (u = a
                  ? "#AppPage_AdvanceAccess_Starts_Owned"
                  : "#AppPage_AdvanceAccess_Starts"),
            u
              ? (0, t.jsx)(b.EY, {
                  size: "2",
                  color: "blue-10",
                  children: p.Localize(u, c, d),
                })
              : null
          );
        }
        function Vd(s) {
          const { id: e, option: n } = s,
            r = m.useContext(hn),
            { data: a } = (0, E.J$)(e),
            { data: o } = (0, E.J$)({ appid: r.appid }),
            { data: c } = (0, E.by)(e),
            { data: d } = Is(),
            u = Vs(e),
            g = ks(r.appid, o?.name ?? "");
          if (!a || !o || !d) return null;
          const f = "packageid" in e && d.has(e.packageid);
          Js.Debug(a);
          let h = a.self_purchase_option?.packageid
              ? a.self_purchase_option
              : a.best_purchase_option,
            x = p.Localize("#AppPage_PurchaseOption_GetFreeToKeep", o.name);
          const v = f && h?.is_free_to_keep;
          let I = v ? g : u,
            B = p.Localize(
              v
                ? "#AppPage_PurchaseOption_PlayNow"
                : "#AppPage_PurchaseOption_AddToLibrary",
            );
          return (
            Js.Debug(e, h, a),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Ur, { id: e }),
                (0, t.jsxs)(yn, {
                  option: n,
                  onActivate: I,
                  onOKActionDescription: B,
                  price: (0, t.jsx)(Us, {
                    id: e,
                    bSelfPurchaseOption: !!a.self_purchase_option?.packageid,
                  }),
                  children: [
                    (0, t.jsx)(xn, {
                      id: e,
                      title: x,
                      bPrepurchase: (0, va.Nq)(c, h),
                    }),
                    f &&
                      (0, t.jsx)(b.EY, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: p.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, t.jsxs)(vn, {
                      children: [
                        (0, t.jsx)(Rr, {
                          id: e,
                          bSelfPurchaseOption:
                            !!a.self_purchase_option?.packageid,
                        }),
                        (0, t.jsx)(Ia, { id: e }),
                        (0, t.jsx)(Wr, { option: h }),
                        (0, t.jsx)(Ba, { id: e }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Qd(s) {
          const { id: e, option: n } = s,
            r = m.useContext(hn),
            { data: a } = (0, E.J$)(e),
            { data: o } = (0, E.J$)({ appid: r.appid }),
            { data: c } = (0, E.by)(e),
            { data: d } = Is(),
            u = Vs(e),
            g = Dr(n.data),
            [f, h, x] = (0, ve.uD)(!1);
          if (!a || !o) return null;
          Js.Debug(a);
          let v = a.self_purchase_option?.packageid
            ? a.self_purchase_option
            : a.best_purchase_option;
          if (v?.is_free_to_keep) return (0, t.jsx)(Vd, { ...s });
          const I =
              n.bAvailableForFree &&
              n.data.packageid &&
              !d?.has(n.data.packageid),
            B = "packageid" in e && !!d?.has(e.packageid);
          let A, S;
          n.data.is_edition &&
            ((A = h),
            (S = p.Localize("#AppPage_PurchaseOption_CompareEditions")));
          let z, w;
          return (
            I &&
              ((z = u),
              (w = p.Localize("#AppPage_PurchaseOption_AddToLibrary"))),
            Js.Debug(e, v, a),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Ur, { id: e }),
                (0, t.jsxs)(yn, {
                  option: n,
                  allowTwoColumn: !0,
                  onActivate: g,
                  onOKActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: A,
                  onSecondaryActionDescription: S,
                  onOptionsButton: z,
                  onOptionsActionDescription: w,
                  price: (0, t.jsx)(Us, {
                    id: e,
                    bSelfPurchaseOption: !!a.self_purchase_option?.packageid,
                  }),
                  okIcon: (0, t.jsx)(Fe.JBW, { width: "24", height: "24" }),
                  children: [
                    (0, t.jsx)(xn, { id: e, bPrepurchase: (0, va.Nq)(c, v) }),
                    B &&
                      (0, t.jsx)(b.EY, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: p.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, t.jsxs)(vn, {
                      children: [
                        (0, t.jsx)(Rr, {
                          id: e,
                          bSelfPurchaseOption:
                            !!a.self_purchase_option?.packageid,
                        }),
                        (0, t.jsx)(Ia, { id: e }),
                        (0, t.jsx)(Wr, { option: v }),
                        (0, t.jsx)(Ba, { id: e }),
                      ],
                    }),
                  ],
                }),
                f &&
                  n.data.is_edition &&
                  (0, t.jsx)(Gd.y.Root, {
                    onClose: x,
                    children: (0, t.jsx)(kd, { closeModal: x }),
                  }),
              ],
            })
          );
        }
        var $d = i(95036),
          Es = i.n($d),
          Xs = i(43135);
        const Zd = new fs.wd("PurchaseOptions");
        function Jd(s) {
          const { id: e, option: n } = s,
            { data: r } = (0, E.J$)(e),
            { data: a } = (0, E.lv)(e),
            { data: o } = (0, Bs.$Y)(),
            c = Dr(n.data),
            d = (0, Wn.n)(r),
            u = m.useCallback(() => {
              d && (window.location.href = d);
            }, [d]);
          if (!r || !o) return console.warn("Not ready", e, r, a, o), null;
          const g = r.included_appids?.length || 0,
            f = r.included_appids?.filter((B) => !o.has(B)) || [],
            h = r.included_appids?.filter((B) => o.has(B)) || [];
          let x = f.length,
            I =
              g != f.length
                ? "#AppPage_BuyThisBundle_Partial"
                : "#AppPage_BuyThisBundle";
          return (
            f.length == 0 &&
              ((I = "#AppPage_CollectionComplete"),
              (x = r.included_appids?.length || 0)),
            Zd.Debug(e, r.best_purchase_option, r),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Ur, { id: e }),
                (0, t.jsxs)(yn, {
                  option: n,
                  onActivate: c,
                  onOKActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: u,
                  onSecondaryActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_BundleInfo",
                  ),
                  price: (0, t.jsx)(Us, { id: e, bSelfPurchaseOption: !0 }),
                  okIcon: (0, t.jsx)(Fe.JBW, { width: "24", height: "24" }),
                  children: [
                    (0, t.jsx)(xn, {
                      id: e,
                      children: (0, t.jsxs)(b.EY, {
                        size: "3",
                        color: "blue-8",
                        children: [
                          " ",
                          p.Localize("#AppPage_PurchaseOption_Bundle"),
                        ],
                      }),
                    }),
                    (0, t.jsxs)(vn, {
                      children: [
                        (0, t.jsx)(Rr, { id: e, bSelfPurchaseOption: !0 }),
                        (0, t.jsxs)(O.s, {
                          direction: "column",
                          flexGrow: "1",
                          flexShrink: "1",
                          overflow: "hidden",
                          gap: "1",
                          children: [
                            (0, t.jsx)(Wr, { option: r.best_purchase_option }),
                            (0, t.jsxs)(O.s, {
                              direction: "column",
                              flexGrow: "1",
                              overflow: "hidden",
                              children: [
                                (0, t.jsx)(b.EY, {
                                  size: "2",
                                  children: p.LocalizePlural(
                                    I,
                                    x,
                                    r.best_purchase_option?.discount_pct ||
                                      r.best_purchase_option
                                        ?.bundle_discount_pct ||
                                      0,
                                  ),
                                }),
                                (0, t.jsx)(Hd, {
                                  apps: [...f, ...h],
                                  setOwnedApps: o,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Vh(s) {
          const { rgAppids: e } = s;
          return e.length == 0
            ? null
            : jsx("div", {
                className: styles.AppImages,
                children: e?.map((n) => jsx(Xd, { appid: n }, n)),
              });
        }
        function Xd(s) {
          const { appid: e } = s,
            { data: n } = useStoreItemDefaultInfo({ appid: e }),
            { data: r } = useStoreItemAssets({ appid: e });
          if (!n || !r) return console.warn("Not ready", e), null;
          const a = r && StoreAssetURL(r, "small_capsule");
          return jsx(Fragment, { children: jsx("img", { src: a, alt: "" }) });
        }
        function Hd(s) {
          const { apps: e, setOwnedApps: n } = s,
            r = 6,
            [a, o] = m.useState(e.length > r + 1 ? r : e.length),
            c = m.useRef(null),
            d = (0, re.wY)((g) => {
              if (c.current) {
                const f = g.contentRect,
                  h = c.current?.getBoundingClientRect();
                let x = f.height,
                  v = 0;
                for (let I of g.target.children) {
                  if (I.tagName != "LI") continue;
                  const B = I.getBoundingClientRect();
                  if (
                    (v != e.length - 1 && B.height < x - h.height) ||
                    (v == e.length - 1 && B.height < x)
                  )
                    v++, (x -= B.height);
                  else break;
                }
                a != v && o(v),
                  (c.current.style.opacity = v == e.length ? "0" : "1");
              }
            });
          if (e.length == 0 || a == 0) return null;
          const u = e.length - a;
          return (0, t.jsxs)("ul", {
            className: Es().AppList,
            ref: d,
            children: [
              e
                .slice(0, a)
                .map((g) => (0, t.jsx)(qd, { appid: g, bOwned: n.has(g) }, g)),
              (0, t.jsx)(b.EY, {
                ref: c,
                size: "2",
                children: p.LocalizePlural("#AppPage_AdditionalItem", u),
              }),
            ],
          });
        }
        function qd(s) {
          const { appid: e, bOwned: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.lv)({ appid: e }),
            o = (0, Gt.h0)({ appid: e }),
            { data: c } = (0, E.lv)(o);
          if (!r) return null;
          const d =
            (a && (0, gs.b0)(a, "community_icon")) ||
            (c && (0, gs.b0)(c, "community_icon"));
          return (0, t.jsxs)("li", {
            className: Es().BundleApp,
            children: [
              (0, t.jsx)("div", {
                className: Es().AppIcon,
                children: d && (0, t.jsx)("img", { src: d, alt: "" }),
              }),
              (0, t.jsxs)("div", {
                className: Es().AppText,
                children: [
                  (0, t.jsx)(b.EY, {
                    size: "2",
                    contrast: n ? "description" : "subtitle",
                    lineClamp: n ? 1 : 2,
                    children: r.name,
                  }),
                  n &&
                    (0, t.jsx)(b.EY, {
                      size: "1",
                      weight: "heavy",
                      color: "storegreen-10",
                      className: Es().InLibrary,
                      children: (0, Xs.eI)("in_library"),
                    }),
                ],
              }),
            ],
          });
        }
        var Ot = i(86336),
          Kr = i(24809),
          _d = i(23413),
          eu = i.n(_d);
        function Ea(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return (0, t.jsx)(Wn.p, {
            storeItem: n,
            children: (0, t.jsx)(Ot.W, { size: "2", children: n?.name }),
          });
        }
        function tu(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return n
            ? (0, t.jsx)("li", { children: (0, t.jsx)(Ea, { appid: e }) })
            : null;
        }
        function Pa(s) {
          const {
            appid: e,
            strLocTagTitle: n,
            strLocTagBody: r,
            rgAppidParent: a,
            color: o,
          } = s;
          return (0, t.jsx)(Kr.k, {
            children: (0, t.jsxs)(O.s, {
              background: o,
              direction: "column",
              padding: "3",
              children: [
                (0, t.jsx)(Rn.D, { size: "5", children: p.Localize(n) }),
                a.length == 1 &&
                  (0, t.jsx)(b.EY, {
                    children: p.LocalizeReact(
                      r,
                      (0, t.jsx)(Ea, { appid: a[0] }),
                    ),
                  }),
                a.length > 1 &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(b.EY, {
                        children: p.Localize("#AppPage_DLCWarning_OneOf"),
                      }),
                      (0, t.jsx)("ul", {
                        className: eu().AppList,
                        children: a.map((c) => (0, t.jsx)(tu, { appid: c }, c)),
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function nu(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n ||
            n.type != ee.uE.Ov ||
            !n.related_items?.parent_appid ||
            n.related_items.parent_appid == rs.sc
            ? null
            : (0, t.jsx)(Pa, {
                appid: e,
                strLocTagTitle: "#AppPage_DLCWarning_Title_Soundtrack",
                strLocTagBody: "#AppPage_DLCWarning_Soundtrack",
                rgAppidParent: [n.related_items.parent_appid],
                color: "crimson-7",
              });
        }
        function su(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n || n.type != ee.uE._i || !n.related_items?.parent_appid
            ? null
            : (0, t.jsx)(ru, {
                appid: e,
                appidParent: n.related_items.parent_appid,
              });
        }
        function ru(s) {
          const { appid: e, appidParent: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.J$)({ appid: n });
          if (!r || !a || r.type != ee.uE._i) return null;
          const c =
              a && a.type == ee.uE.Sv
                ? "#AppPage_DLCWarning_Software"
                : "#AppPage_DLCWarning",
            d = r.related_items?.dlc_parent_appids?.length
              ? r.related_items?.dlc_parent_appids
              : [n];
          return (0, t.jsx)(Pa, {
            appid: e,
            strLocTagTitle: "#AppPage_DLCWarning_Title",
            strLocTagBody: c,
            rgAppidParent: d,
            color: "purple-7",
          });
        }
        function iu(s) {
          const { appid: e } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(nu, { appid: e }),
              (0, t.jsx)(su, { appid: e }),
            ],
          });
        }
        var au = i(3348),
          Gr = i(47875),
          ou = i(25792),
          lu = i(90114),
          cu = i(56680),
          du = i.n(cu);
        const Yr = (0, ou.Nr)(function (e) {
          const {
              appid: n,
              bAllowRemove: r,
              children: a,
              color: o,
              width: c,
            } = e,
            d = (0, rn.LH)(),
            { data: u } = ys(n),
            g = Ri(n),
            [f, h, x] = (0, re.uD)();
          (0, m.use)(Z.Z.Ready());
          const v = !!d;
          if (v && !u) return null;
          const I = v && !!u?.wishlist;
          if (I && !r) return null;
          const B = () => {
              g.mutateAsync({ wishlist: !I, old_interest: u });
            },
            A = I ? "#RemoveFromWishlist_ttip" : "#AddToWishlist_ttip",
            S = I ? "#Wishlisted" : "#AddToYourWishlist";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Gn.Gq, {
                toolTipContent: Z.Z.Localize(A),
                children: (0, t.jsx)(Le.$, {
                  color: o,
                  width: c,
                  onClick: v ? B : h,
                  children: a ? a(I) : Z.Z.Localize(S),
                }),
              }),
              !v && (0, t.jsx)(uu, { active: f, closeModal: x }),
            ],
          });
        });
        function uu(s) {
          const { active: e, closeModal: n } = s,
            { fnOpenInSteamClient: r } = (0, lu.useOpenWebInSteamClient)();
          return (
            (0, m.use)(p.Ready()),
            (0, t.jsx)($.EN, {
              active: e,
              children: (0, t.jsxs)($.o0, {
                strTitle: p.Localize("#OpenInDesktopAppBanner_NotSignedIn"),
                className: du().WishlistModalOverride,
                strDescription: p.Localize("#Wishlist_NotSignedIn"),
                closeModal: n,
                bAlertDialog: !0,
                children: [
                  (0, t.jsxs)(O.s, {
                    direction: "row",
                    gap: "4",
                    paddingTop: "4",
                    paddingBottom: "4",
                    children: [
                      (0, t.jsx)(Le.$, {
                        onClick: r,
                        children: p.Localize(
                          "#OpenInDesktopAppBanner_OpenAppButton",
                        ),
                      }),
                      (0, t.jsx)(Le.$, {
                        color: "dull",
                        onClick: Gr.l,
                        children: Z.Z.Localize("#Login_SignIn"),
                      }),
                    ],
                  }),
                  (0, t.jsx)(b.EY, {
                    children: (0, L.oW)(
                      Z.Z.Localize("#GotSteam_NeedSteam"),
                      (0, t.jsx)(Ot.Y, {
                        href: `${Rs.TS.STORE_BASE_URL}about`,
                      }),
                    ),
                  }),
                ],
              }),
            })
          );
        }
        var mu = i(97393),
          Hs = i.n(mu);
        function Ma(s) {
          const { id: e } = s,
            { data: n } = (0, E.qI)(e);
          if (!n) return null;
          const r = [];
          return (
            n.windows &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: Hs().PlatformIcon,
                    children: (0, t.jsx)(N.eJJ, {}),
                  },
                  "windows",
                ),
              ),
            n.mac &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: Hs().PlatformIcon,
                    children: (0, t.jsx)(N.kPc, {}),
                  },
                  "mac",
                ),
              ),
            n.steamos_linux &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: Hs().PlatformIcon,
                    children: (0, t.jsx)(N.Qte, {}),
                  },
                  "steamos",
                ),
              ),
            r.length == 0
              ? null
              : (0, t.jsx)("div", {
                  className: Hs().PlatformIcons,
                  children: r,
                })
          );
        }
        var gu = i(77774),
          Zn = i.n(gu);
        function pu(s, e) {
          if (e) return "#AppPage_ComingSoon_UnlocksIn_Software";
          switch (s) {
            case ee.uE.Wz:
              return "#AppPage_ComingSoon_UnlocksIn_Video";
            case ee.uE.gQ:
              return "#AppPage_ComingSoon_UnlocksIn_Series";
            case ee.uE._i:
              return "#AppPage_ComingSoon_UnlocksIn_DLC";
            default:
              return "#AppPage_ComingSoon_UnlocksIn";
          }
        }
        function fu(s, e) {
          return e
            ? s.custom_release_date_message
              ? s.custom_release_date_message
              : s.steam_release_date
                ? (0, Lt.$z)(s.steam_release_date)
                : ""
            : "";
        }
        function hu(s, e, n) {
          return s ? s != "date_full" : e ? !0 : !n;
        }
        function yu(s) {
          const {
              appid: e,
              bHasPrePurchaseSub: n,
              bGetsSoftwareTreatment: r,
              bShowReleaseDateIfComingSoon: a,
              strOffsitePrice: o,
              preload: c,
            } = s,
            { data: d } = (0, E.J$)({ appid: e }),
            { data: u } = (0, E.by)({ appid: e }),
            g = (0, au.VM)(u);
          if (!d || !u) return null;
          const f = u.coming_soon_display,
            h = u.steam_release_date,
            x = !!h && h < (0, jn._2)(),
            v = f == "text_comingsoon" || f == "text_tba",
            I = f != "text_comingsoon",
            B = d.type == ee.uE._i,
            A = f ? g : fu(u, a),
            S = !!A,
            z = n && !v && S,
            w = !x && !!h && !hu(f, u.custom_release_date_message, a);
          return (0, t.jsxs)(Kr.k, {
            children: [
              (0, t.jsxs)(O.s, {
                direction: "row",
                className: Zn().ComingSoon,
                children: [
                  (0, t.jsxs)(O.s, {
                    direction: "column",
                    className: Zn().Content,
                    children: [
                      x &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(Rn.D, {
                              size: "5",
                              children: p.Localize("#AppPage_ComingSoon_Title"),
                            }),
                            (0, t.jsx)(b.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: p.Localize(
                                "#AppPage_ComingSoon_ReleaseDatePassed",
                              ),
                            }),
                          ],
                        }),
                      !x &&
                        z &&
                        (0, t.jsx)(Rn.D, {
                          size: "5",
                          children: p.Localize(
                            "#AppPage_ComingSoon_ReleasesOn",
                            A,
                          ),
                        }),
                      !x &&
                        !z &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(b.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: p.Localize(
                                B
                                  ? "#AppPage_ComingSoon_NotYetAvailable_DLC"
                                  : "#AppPage_ComingSoon_NotYetAvailable",
                              ),
                            }),
                            S &&
                              (0, t.jsxs)(Rn.D, {
                                size: "5",
                                children: [
                                  I &&
                                    `${p.Localize("#AppPage_ComingSoon_IntendedRelease")}: `,
                                  A,
                                ],
                              }),
                          ],
                        }),
                      w &&
                        (0, t.jsx)(b.EY, {
                          size: "2",
                          children: p.Localize(
                            pu(d.type, r),
                            (0, Lt.Hq)(h - (0, jn._2)(), {
                              eSuffix: Lt.a8.None,
                            }),
                          ),
                        }),
                      o &&
                        (0, t.jsx)(b.EY, {
                          size: "3",
                          weight: "heavy",
                          className: Zn().OffsitePrice,
                          children: o,
                        }),
                    ],
                  }),
                  !n && (0, t.jsx)(xu, { appid: e }),
                ],
              }),
              c && (0, t.jsx)(vu, { appid: e, preload: c }),
            ],
          });
        }
        function xu(s) {
          const { appid: e } = s,
            { data: n } = ys(e);
          if (!n) return null;
          const r = n.wishlist;
          return (0, t.jsxs)(O.s, {
            direction: "column",
            className: Zn().Reminder,
            children: [
              (0, t.jsxs)(O.s, {
                direction: "column",
                className: Zn().Note,
                children: [
                  r &&
                    (0, t.jsx)(b.EY, {
                      size: "2",
                      children: p.Localize(
                        "#AppPage_ComingSoon_WishlistReminder_On",
                      ),
                    }),
                  !r &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(b.EY, {
                          size: "2",
                          children: p.Localize(
                            "#AppPage_ComingSoon_WishlistPrompt",
                          ),
                        }),
                        (0, t.jsx)(b.EY, {
                          size: "2",
                          children: p.Localize(
                            "#AppPage_ComingSoon_WishlistReminder",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              r &&
                (0, t.jsx)(Ot.Y, {
                  href: `${C.TS.STORE_BASE_URL}wishlist/`,
                  children: p.Localize("#AppPage_ComingSoon_ViewWishlist"),
                }),
              !r && (0, t.jsx)(Yr, { appid: e, color: "storegreen" }),
            ],
          });
        }
        function vu(s) {
          const { appid: e, preload: n } = s,
            { subidFreeOnDemand: r, bOwnedPermanent: a } = n,
            { data: o } = (0, E.J$)({ appid: e }),
            c = (0, rn.LH)(),
            d = o?.free_weekend?.appid ?? e,
            u = ks(d, o?.name ?? "");
          if (!o) return null;
          const g = !!c && !!r && !a;
          return (0, t.jsxs)(O.s, {
            direction: "column",
            className: Zn().Preload,
            children: [
              (0, t.jsx)(Ma, { id: { appid: e } }),
              (0, t.jsx)(Rn.D, {
                size: "5",
                children: p.Localize(
                  "#AppPage_ComingSoon_PreloadTitle",
                  o.name,
                ),
              }),
              (0, t.jsxs)(O.s, {
                direction: "row",
                className: Zn().PreloadActions,
                children: [
                  (0, t.jsx)(Le.$, {
                    onClick: u,
                    children: p.Localize("#AppPage_ComingSoon_PreloadButton"),
                  }),
                  g && (0, t.jsx)(ju, { subid: r }),
                ],
              }),
            ],
          });
        }
        function ju(s) {
          const e = Vs({ packageid: s.subid });
          return (0, t.jsx)(Le.$, {
            color: "greyneutral",
            onClick: e,
            children: p.Localize("#AppPage_ComingSoon_AddToLibrary"),
          });
        }
        const Ht = new fs.wd("PurchaseOptions"),
          Ta = !1;
        function bu(s) {
          const {
              appid: e,
              rgOwnedApps: n,
              rgOwnedPackages: r,
              playtestStatus: a,
              rgFreePackagesAvailable: o,
              strAccountTypeDescription: c,
              comingSoon: d,
            } = s,
            u = (0, Bs._7)(!0),
            g = da(),
            f = (0, la.QW)(),
            [h, x] = m.useState(!1);
          return (
            m.useEffect(() => {
              Ht.Debug("Initializing PurchaseOptions"),
                Ht.Debug("rgOwnedApps", n),
                Ht.Debug("rgActiveLicenses", r),
                Ht.Debug("playtestStatus", a),
                Ht.Debug("rgFreePackagesAvailable", o),
                Ht.Debug("strAccountTypeDescription", c),
                u(n),
                g(r),
                Ta && a && f(a.appid, a),
                x(!0);
            }, [e, r, n, a, u, g, f, o, c]),
            m.use(p.Ready()),
            m.use(Z.Z.Ready()),
            h
              ? (0, t.jsx)(m.Suspense, {
                  children: (0, t.jsx)(Iu, {
                    appid: e,
                    rgPackagesAvailableForFree: o,
                    strAccountTypeDescription: c,
                    comingSoon: d,
                  }),
                })
              : null
          );
        }
        function Bu(s, e, n) {
          const { data: r } = (0, E.J$)({ appid: s }),
            { data: a } = (0, E.is)({ appid: s }),
            { data: o } = (0, Bs.$Y)(),
            c = ua(s),
            d = a?.purchase_options;
          return (
            Ht.Debug(d),
            m.useMemo(() => {
              if (!r || !d || !o) return null;
              const g = r.is_free && !r.is_free_temporarily,
                f = (0, jn._2)(),
                h =
                  r.free_weekend &&
                  (r.free_weekend.start_time || 0) <= f &&
                  (r.free_weekend.end_time || 0) > f,
                x = new Set(e),
                v = [];
              if (!g)
                if (o.has(s)) v.push({ type: "play" });
                else {
                  const Y = (a.purchase_options || [])
                    .map((W) => W.free_with_master_sub_appid)
                    .filter((W) => !!W);
                  Ht.Debug(Y);
                  for (const W of Y)
                    if (W && o.has(W)) {
                      v.push({ type: "play", appidMasterSub: W });
                      break;
                    }
                }
              if (Ta) {
                const Y = r.related_items?.playtests || [];
                if (Y.length > 0)
                  for (const W of Y)
                    W &&
                      v.push({
                        type: "playtest",
                        appidPlaytest: W.appid,
                        bIsOpen: !!W.is_open,
                      });
              }
              const I = new Set(),
                B = new Set(
                  (r.related_items?.standalone_demos || []).map((Y) => Y.appid),
                );
              for (let Y of r.related_items?.demos?.filter(
                (W) => W.show_above_purchase,
              ) || [])
                I.has(Y.appid) ||
                  (v.push({
                    type: "demo",
                    appid: Y.appid,
                    label: Y.label,
                    bStandalone: B.has(Y.appid),
                  }),
                  I.add(Y.appid));
              (g || h) && v.push({ type: "free" });
              const A = new Map();
              for (let Y of a.package_groups || [])
                A.set(Y.name, { id: Y.name, package_group: Y, items: [] });
              let S = !!r.related_items?.related_f2p;
              const z = new Set(
                d.map((Y) => Y.free_to_keep_base_package).filter((Y) => !!Y),
              );
              for (let Y of d)
                Y.is_free_license &&
                  !Y.package_group &&
                  (v.push({
                    type: "item",
                    data: Y,
                    bAvailableForFree: !!Y.packageid && x.has(Y.packageid),
                  }),
                  z.add(Y.packageid));
              let w;
              for (let Y of d)
                if (
                  !z.has(Y.packageid) &&
                  !(Y.packageid && c.has(Y.packageid))
                ) {
                  if (S && !Y.is_edition && r.related_items) {
                    const W = r.related_items.related_f2p;
                    v.push({
                      type: "related",
                      appid: W.appid,
                      title: W.header_text,
                      description: W.description_text,
                    }),
                      (S = !1);
                  }
                  Y.package_group !== w?.id &&
                    (Y.package_group
                      ? ((w = A.get(Y.package_group)),
                        w?.package_group.display_type == ee.aq.V &&
                          v.push({ type: "dropdown", data: w }))
                      : (w = void 0)),
                    w && w?.package_group.display_type == ee.aq.V
                      ? w.items.push(Y)
                      : v.push({
                          type: "item",
                          data: Y,
                          bAvailableForFree:
                            !!Y.packageid && x.has(Y.packageid),
                        });
                }
              return Ht.Debug(A), v;
            }, [s, r, a, d, o, e, c])
          );
        }
        function Iu(s) {
          const {
              appid: e,
              rgPackagesAvailableForFree: n,
              strAccountTypeDescription: r,
              comingSoon: a,
            } = s,
            { data: o } = (0, E.J$)({ appid: e }),
            c = Bu(e, n, r),
            d = m.useRef(null),
            u = m.useCallback((g) => {
              g.data?.method == "FocusPurchaseOptions" &&
                (d.current?.NavTree().Activate(),
                d.current?.TakeFocus(jr.pR.OK));
            }, []);
          return (
            m.useEffect(
              () => (
                window.addEventListener("message", u),
                () => window.removeEventListener("message", u)
              ),
              [u],
            ),
            !o || !c
              ? (Ht.Warning("Not ready", e), null)
              : (Ht.Debug(o),
                Ht.Debug(c),
                (0, t.jsx)(hn.Provider, {
                  value: { appid: e, nOptions: c.length },
                  children: (0, t.jsx)(ld, {
                    children: (0, t.jsxs)(T.Z, {
                      className: cn().PurchaseOptionDisplay,
                      navEntryPreferPosition: V.iU.PREFERRED_CHILD,
                      navRef: d,
                      children: [
                        a && (0, t.jsx)(yu, { appid: e, ...a }),
                        (0, t.jsx)(iu, { appid: e }),
                        c.length > 0 &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Kr.k, {
                                children: (0, t.jsx)(b.EY, {
                                  size: "3",
                                  contrast: "title",
                                  weight: "heavy",
                                  children: p.Localize(
                                    "#AppPage_PurchaseOptions_Title",
                                  ),
                                }),
                              }),
                              c.length > 2 && (0, t.jsx)(Eu, { options: c }),
                              c.length <= 2 &&
                                (0, t.jsxs)(T.Z, {
                                  className: (0, D.A)(
                                    cn().PurchaseOptionCarouselWrapper,
                                    c.length <= 2 && cn().NoCarousel,
                                    c.length == 1 && cn().Single,
                                  ),
                                  preferredFocus: !0,
                                  children: [
                                    c.length <= 2 &&
                                      (0, t.jsx)(kr, { option: c[0] }),
                                    c.length == 2 &&
                                      (0, t.jsx)(kr, { option: c[1] }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }))
          );
        }
        function kr(s) {
          const { option: e } = s;
          let n = null;
          switch (e.type) {
            case "item":
              e.data.packageid
                ? (n = (0, t.jsx)(Qd, { id: Ar(e.data), option: e }))
                : (n = (0, t.jsx)(Jd, { id: Ar(e.data), option: e }));
              break;
            case "dropdown":
              n = (0, t.jsx)(Ld, { option: e });
              break;
            case "demo":
              n = (0, t.jsx)(yd, { option: e });
              break;
            case "free":
              n = (0, t.jsx)(xd, { option: e });
              break;
            case "play":
              n = (0, t.jsx)(Ad, {
                option: e,
                appidMasterSub: e.appidMasterSub,
              });
              break;
            case "playtest":
              n = (0, t.jsx)(zd, {
                option: e,
                appidPlaytest: e.appidPlaytest,
                bIsOpen: e.bIsOpen,
              });
              break;
            case "related":
              n = (0, t.jsx)(Dd, { option: e });
              break;
            default:
          }
          return n
            ? (0, t.jsx)("div", {
                className: cn().PurchaseOptionWrapper,
                children: n,
              })
            : null;
        }
        function Eu(s) {
          const { options: e } = s,
            n = "purchase_options",
            [r, a] = (0, oa.Eh)(n),
            o = 0.96,
            c = 256,
            d = 8,
            u = parseInt(cn().CarouselPaddingTop),
            g = parseInt(cn().CarouselPaddingBottom),
            f = m.useCallback(
              (v, I, B, A) => {
                const S = e[v];
                return (0, t.jsx)("div", {
                  style: { width: I, height: B },
                  children: (0, t.jsx)(kr, { option: S }),
                });
              },
              [e],
            ),
            h = m.useCallback(() => c, [c]),
            x = m.useCallback(
              (v) => {
                const I = e[v];
                switch (I.type) {
                  case "item":
                    return _c(I.data);
                  case "dropdown":
                    return "dropdown_package_group_" + I.data.id;
                  case "demo":
                    return "demo_" + I.appid;
                  case "free":
                    return "free";
                  case "playtest":
                    return "playtest_" + I.appidPlaytest;
                  case "play":
                    return "play_" + I.appidMasterSub;
                  case "related":
                    return "related_" + I.appid;
                  default:
                    return (
                      (0, xs.wT)(!1, "Unknown purchase option type", I.type),
                      "unknown"
                    );
                }
              },
              [e],
            );
          return e.length == 0
            ? null
            : (0, t.jsx)(T.Z, {
                className: (0, D.A)(
                  cn().PurchaseOptionCarouselWrapper,
                  r != 0 && cn().NotLeft,
                ),
                preferredFocus: !0,
                children: (0, t.jsx)(oa.jy, {
                  name: n,
                  "aria-label": p.Localize("#AppPage_PurchaseOptions_Title"),
                  className: (0, D.A)(
                    cn().PurchaseOptionsCarousel,
                    "PurchaseOptions",
                  ),
                  focusedColumn: r,
                  setFocusedColumn: a,
                  nNumItems: e.length,
                  nHeight: c / o + u + g,
                  nItemHeight: c / o,
                  nItemMarginX: d,
                  fnGetColumnWidth: h,
                  fnGetId: x,
                  fnItemRenderer: f,
                  scrollToAlignment: "center",
                }),
              });
        }
        var Ut = i(78365),
          Jn = i(24642);
        const Pu = 0,
          Mu = 1,
          Tu = 2,
          Su = 3,
          Lu = 4,
          Ou = 5;
        var Vr = i(95242),
          Au = i(91405),
          Sa = i(9843);
        const zu = m.lazy(() =>
          Promise.all([i.e(53080), i.e(56925), i.e(39233), i.e(24102)]).then(
            i.bind(i, 75850),
          ),
        );
        function Qr(s) {
          const { rgPackageIDs: e, strButtonToken: n } = s,
            [r, a] = m.useState(void 0),
            o = e.map((x) => ({ packageid: x })),
            { mutate: c, isPending: d } = (0, Au.w)(o),
            { data: u } = (0, Sa.UI)(),
            g =
              u !== void 0 &&
              e.length > 0 &&
              e.every((x) => (0, Sa.lb)(u, x, void 0)),
            f = m.useCallback(() => a(void 0), []),
            h = m.useCallback(() => {
              c(void 0, { onSuccess: (x) => a(x) });
            }, [c]);
          return e.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  r &&
                    (0, t.jsx)(m.Suspense, {
                      children: (0, t.jsx)(zu, {
                        lineItemIDs: r,
                        closeCart: f,
                      }),
                    }),
                  g
                    ? (0, t.jsx)(Le.v, {
                        navProps: { preferredFocus: !0 },
                        color: "storegreen",
                        focusable: !0,
                        href: `${F.TS.STORE_BASE_URL}cart/`,
                        children: Be.d.Localize("#AddToCartButton_InCart"),
                      })
                    : (0, t.jsx)(Le.$, {
                        navProps: { preferredFocus: !0 },
                        color: "storegreen",
                        disabled: d,
                        onClick: h,
                        children: p.Localize(n),
                      }),
                ],
              });
        }
        var qs = i(95994);
        const Nu = "17px";
        function La(s) {
          const {
            overhang: e = Nu,
            marginTop: n,
            marginBottom: r,
            buttonBarContents: a,
            children: o,
          } = s;
          return (0, t.jsxs)(qs.x, {
            columns: "1fr",
            rows: `auto ${e}`,
            marginTop: n,
            marginBottom: r,
            children: [o, (0, t.jsx)(Du, { children: a })],
          });
        }
        function Du(s) {
          const { children: e } = s;
          return (0, t.jsx)(O.s, {
            marginX: "4",
            alignSelf: "end",
            justify: "end",
            gap: "1",
            zIndex: "1",
            gridColumn: "1",
            gridRow: "1 / -1",
            navProps: { navEntryPreferPosition: V.iU.PREFERRED_CHILD },
            children: e,
          });
        }
        var Fu = i(26666),
          Xn = i.n(Fu);
        const Wu = 6,
          wu = 5,
          Ru = 135;
        function Uu(s) {
          const { appid: e, rgOptions: n } = s;
          return (0, t.jsx)(t.Fragment, {
            children: n.map((r) =>
              (0, t.jsx)(Cu, { appid: e, option: r }, r.packageid),
            ),
          });
        }
        function Cu(s) {
          const { appid: e, option: n } = s,
            r = n.packageid,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E.J$)({ packageid: r }),
            { data: c } = Is(),
            d = m.useMemo(() => {
              const h = new Map();
              for (const x of a?.included_items?.included_apps || [])
                x.id && h.set(x.id, x);
              return (o?.included_appids || [])
                .map((x) => h.get(x))
                .filter((x) => !!x);
            }, [a, o]);
          if (!o) return null;
          const u = !!c?.has(r),
            g = !!o.purchase_description_bbcode,
            f = d.slice(0, Wu);
          return (0, t.jsx)(La, {
            marginBottom: "4",
            buttonBarContents: (0, t.jsx)(Ku, { pkg: o, option: n }),
            children: (0, t.jsxs)(le.az, {
              position: "relative",
              gridRow: "1",
              gridColumn: "1",
              padding: "4",
              paddingTop: "2",
              paddingBottom: "5",
              radius: "md",
              className: Xn().PackBody,
              children: [
                u &&
                  (0, t.jsx)(O.s, {
                    align: "center",
                    gap: "1",
                    position: "absolute",
                    inset: "-8px auto auto 6px",
                    paddingX: "1",
                    className: Xn().PackInLibrary,
                    children: (0, Xs.eI)("in_library"),
                  }),
                (0, t.jsxs)(O.s, {
                  justify: "between",
                  align: "center",
                  children: [
                    (0, t.jsx)(b.EY, {
                      size: "5",
                      children: p.Localize(
                        "#AppPage_Dropdown_DefaultTitle",
                        n.purchase_option_name || o.name || "",
                      ),
                    }),
                    (0, t.jsx)(le.az, {
                      marginBottom: "1",
                      children: (0, t.jsx)(Ma, { id: { packageid: r } }),
                    }),
                  ],
                }),
                !g && d.length > 1 && (0, t.jsx)(Gu, { rgApps: d }),
                f.length > 1 &&
                  (0, t.jsx)(le.az, {
                    position: "relative",
                    padding: "2",
                    className: Xn().PackCapsulesCtn,
                    children: (0, t.jsx)(le.az, {
                      className: (0, D.A)(
                        Xn().PackCapsules,
                        f.length >= wu && Xn().PackCapsulesCollapsed,
                      ),
                      children: f.map((h, x) =>
                        (0, t.jsx)(Yu, { appid: h.id, zIndex: 10 - x }, h.id),
                      ),
                    }),
                  }),
              ],
            }),
          });
        }
        function Ku(s) {
          const { pkg: e, option: n } = s,
            r = m.useMemo(() => [n.packageid], [n.packageid]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Oa, {
                children: (0, t.jsx)(Le.v, {
                  focusable: !0,
                  href: (0, Gr._)(e),
                  children: p.Localize("#AppPage_PurchaseOption_MoreInfo"),
                }),
              }),
              (0, t.jsxs)(Oa, {
                children: [
                  (0, t.jsx)(Vr.z, { purchaseOption: n }),
                  (0, t.jsx)(Qr, {
                    rgPackageIDs: r,
                    strButtonToken: "#AppPage_PurchaseOption_AddToCart",
                  }),
                ],
              }),
            ],
          });
        }
        function Oa(s) {
          const { children: e } = s;
          return (0, t.jsx)(O.s, {
            align: "center",
            gap: "1",
            zIndex: "1",
            className: Xn().PackActionGroup,
            children: e,
          });
        }
        function Gu(s) {
          const { rgApps: e } = s,
            [n, r] = m.useState(!1),
            a = m.useCallback(() => r((u) => !u), []),
            o = m.useMemo(() => {
              let u = 0,
                g = 0;
              for (const f of e) {
                const h = (f.name || "").length;
                if (g > 0 && u + h >= Ru) break;
                (u += h), g++;
              }
              return g;
            }, [e]),
            c = o < e.length,
            d = c && !n ? e.slice(0, o) : e;
          return (0, t.jsx)(T.Z, {
            children: (0, t.jsxs)(b.EY, {
              size: "2",
              marginY: "2",
              children: [
                (0, t.jsx)("b", {
                  children: p.LocalizePlural(
                    "#AppPage_DLCPack_IncludesItems",
                    e.length,
                    (0, Jn.D)(e.length),
                  ),
                }),
                " ",
                d.map((u, g) =>
                  (0, t.jsxs)(
                    m.Fragment,
                    {
                      children: [
                        g > 0 && ", ",
                        (0, t.jsx)(Ot.Y, {
                          href: (0, Gr._)(u),
                          whiteSpace: "nowrap",
                          children: u.name,
                        }),
                      ],
                    },
                    u.id,
                  ),
                ),
                c && (n ? " " : "\u2026 "),
                c &&
                  (0, t.jsx)(Ot.W, {
                    onClick: a,
                    children: p.Localize(
                      n
                        ? "#AppPage_DLCPack_ShowLess"
                        : "#AppPage_DLCPack_ShowMore",
                    ),
                  }),
              ],
            }),
          });
        }
        function Yu(s) {
          const { appid: e, zIndex: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.lv)({ appid: e }),
            o =
              a?.asset_url_format && a.small_capsule
                ? Zs(a.asset_url_format, a.small_capsule)
                : void 0;
          return o
            ? (0, t.jsx)(le.az, {
                position: "relative",
                display: "inline-block",
                height: "45px",
                width: "120px",
                overflow: "hidden",
                className: Xn().PackCapsule,
                style: { zIndex: n },
                children: (0, t.jsx)(tn, {
                  height: "100%",
                  width: "100%",
                  src: o,
                  alt: r?.name || "",
                }),
              })
            : null;
        }
        var ku = i(16071),
          Ct = i.n(ku);
        const _s = 5;
        function Vu(s) {
          switch (s) {
            case Mu:
              return "#AppPage_DLC_Highlight_New";
            case Tu:
              return "#AppPage_DLC_Highlight_ComingSoon";
            case Su:
              return "#AppPage_DLC_Highlight_PlayerFavorite";
            case Lu:
              return "#AppPage_DLC_Highlight_Recommended";
            case Ou:
              return "#AppPage_DLC_Highlight_RecommendedForNewPlayers";
            default:
              return null;
          }
        }
        function Qu(s) {
          switch (s) {
            case "in_cart":
              return Ct().FlagInCart;
            case "in_library":
              return Ct().FlagInLibrary;
            case "on_wishlist":
              return Ct().FlagOnWishlist;
            case "ignored":
            case "excluded_by_preferences":
              return Ct().FlagIgnored;
          }
        }
        function $u(s) {
          const {
              appid: e,
              rgRows: n,
              nDlcBrowseCount: r,
              nNumDLCExcludedByPreferences: a,
              addAllToCart: o,
            } = s,
            [c, d] = m.useState(!1),
            u = m.useCallback(() => d(!0), []),
            { data: g } = (0, E.J$)({ appid: e }),
            f = sd(e);
          if (!g || (n.length == 0 && a == 0 && !f?.length)) return null;
          m.use(p.Ready()), m.use(Be.d.Ready());
          const h = g.type == ee.uE.Sv,
            x = !c && n.length > _s,
            v = x ? n.slice(0, _s) : n;
          return (0, t.jsx)(m.Suspense, {
            children: (0, t.jsxs)(O.s, {
              direction: "column",
              gap: "4",
              marginY: "5",
              children: [
                (0, t.jsxs)(Ut.YZ, {
                  "flow-children": "column",
                  children: [
                    (0, t.jsxs)(O.s, {
                      direction: "row",
                      justify: "between",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, t.jsx)(b.EY, {
                          size: "3",
                          contrast: "title",
                          weight: "heavy",
                          children: p.Localize(
                            h
                              ? "#AppPage_DLC_Header_Software"
                              : "#AppPage_DLC_Header",
                          ),
                        }),
                        r > 0 &&
                          (0, t.jsx)(Ot.Y, {
                            size: "2",
                            href: `${F.TS.STORE_BASE_URL}dlc/${e}/`,
                            children: p.Localize(
                              "#AppPage_DLC_BrowseAll",
                              (0, Jn.D)(r),
                            ),
                          }),
                      ],
                    }),
                    a > 0 &&
                      (0, t.jsx)(le.az, {
                        padding: "1",
                        paddingStart: "0",
                        marginBottom: "1",
                        children: (0, t.jsx)(b.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          children: (0, ve.xh)(
                            p.LocalizePlural(
                              "#AppPage_DLC_ExcludedByPreferences",
                              a,
                            ),
                            (0, t.jsx)(Ot.Y, {
                              href: `${F.TS.STORE_BASE_URL}account/preferences/`,
                            }),
                          ),
                        }),
                      }),
                    v.map((I, B) =>
                      (0, t.jsx)(Zu, { row: I, bRevealed: B >= _s }, I.appid),
                    ),
                    x &&
                      (0, t.jsxs)(O.s, {
                        direction: "row",
                        justify: "between",
                        align: "center",
                        marginTop: "1",
                        className: Ct().Footer,
                        children: [
                          (0, t.jsx)(Le.$, {
                            onClick: u,
                            children: p.Localize("#AppPage_DLC_SeeAll"),
                          }),
                          (0, t.jsx)(b.EY, {
                            size: "2",
                            color: "greyneutral-11",
                            children: p.Localize(
                              "#AppPage_DLC_ShowingResults",
                              "1",
                              (0, Jn.D)(_s),
                              (0, Jn.D)(r),
                            ),
                          }),
                        ],
                      }),
                    !x &&
                      n.length < r &&
                      (0, t.jsx)(le.az, {
                        marginTop: "1",
                        children: (0, t.jsx)(b.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          className: Ct().PartialList,
                          children: p.Localize(
                            "#AppPage_DLC_ShowingPartialList",
                            (0, Jn.D)(n.length),
                            (0, Jn.D)(r),
                          ),
                        }),
                      }),
                  ],
                }),
                !x &&
                  o &&
                  (0, t.jsxs)(O.s, {
                    direction: "row",
                    justify: "between",
                    align: "center",
                    gap: "2",
                    marginTop: "2",
                    padding: "2",
                    className: Ct().AddAllToCart,
                    children: [
                      (0, t.jsx)(b.EY, {
                        size: "3",
                        weight: "heavy",
                        children: o.strTotalPrice,
                      }),
                      (0, t.jsx)(Qr, {
                        rgPackageIDs: o.rgPackageIDs,
                        strButtonToken: "#AppPage_DLC_BuyAll",
                      }),
                    ],
                  }),
                !!f?.length && (0, t.jsx)(Uu, { appid: e, rgOptions: f }),
              ],
            }),
          });
        }
        function Zu(s) {
          const { bRevealed: e } = s,
            { appid: n, packageid: r, nHighlightReason: a } = s.row,
            { data: o } = (0, E.J$)({ appid: n }),
            { data: c } = (0, E.mr)(r ? { packageid: r } : void 0),
            d = a !== Pu,
            { data: u } = (0, E.lv)(d ? { appid: n } : void 0),
            g = (0, Xs.qz)({ appid: n });
          if (!o) return null;
          const f = Vu(a),
            h =
              u?.asset_url_format && u.small_capsule
                ? Zs(u.asset_url_format, u.small_capsule)
                : void 0;
          return (0, t.jsxs)(Wn.p, {
            storeItem: o,
            className: (0, D.A)(
              Ct().Row,
              d && Ct().Highlight,
              e && Ct().Revealed,
            ),
            children: [
              d &&
                h &&
                (0, t.jsx)(tn, {
                  maxHeight: "87px",
                  flexGrow: "0",
                  src: h,
                  alt: o.name,
                }),
              (0, t.jsxs)(O.s, {
                direction: "column",
                align: "start",
                gap: "1",
                paddingEnd: "1",
                className: Ct().Name,
                children: [
                  g &&
                    (0, t.jsx)(b.EY, {
                      size: "1",
                      marginBottom: "1",
                      className: (0, D.A)(Ct().Pill, Qu(g)),
                      children: (0, Xs.eI)(g),
                    }),
                  f &&
                    (0, t.jsx)(b.EY, {
                      size: "1",
                      className: (0, D.A)(Ct().Pill, Ct().HighlightReason),
                      children: p.Localize(f),
                    }),
                  (0, t.jsx)(b.EY, { size: "3", children: o.name }),
                ],
              }),
              (0, t.jsxs)(le.az, {
                flexShrink: "0",
                textAlign: "end",
                className: Ct().Price,
                children: [
                  o.is_free &&
                    (0, t.jsx)(b.EY, {
                      size: "4",
                      children: p.Localize("#AppPage_DLC_Free"),
                    }),
                  !o.is_free &&
                    c &&
                    (0, t.jsx)(Vr.z, { purchaseOption: c, size: "inline" }),
                  !o.is_free &&
                    !c &&
                    (0, t.jsx)(b.EY, {
                      size: "4",
                      children: p.Localize("#AppPage_DLC_NoPrice"),
                    }),
                ],
              }),
            ],
          });
        }
        var Ju = i(72723),
          bn = i.n(Ju);
        function Xu(s) {
          const {
              thisDLC: e,
              rgDependencies: n,
              rgPackageIDsToAdd: r,
              strTotalPrice: a,
            } = s,
            o = n.length == 1,
            { data: c } = (0, E.J$)({ appid: e.appid }),
            { data: d } = (0, E.J$)(o ? { appid: n[0].appid } : void 0);
          if (!c || n.length == 0 || (o && !d)) return null;
          m.use(p.Ready()), m.use(Be.d.Ready());
          const u = n[0].bRequired,
            g = o
              ? p.Localize(
                  u
                    ? "#AppPage_DLCDependency_RequiredTitle"
                    : "#AppPage_DLCDependency_RecommendedTitle",
                )
              : null,
            f = o
              ? p.Localize(
                  u
                    ? "#AppPage_DLCDependency_RequiredDesc"
                    : "#AppPage_DLCDependency_RecommendedDesc",
                  c.name || "",
                  d.name || "",
                )
              : p.Localize("#AppPage_DLCDependency_MultipleDesc", c.name || "");
          return (0, t.jsx)(m.Suspense, {
            children: (0, t.jsx)(La, {
              marginTop: "5",
              marginBottom: "5",
              buttonBarContents: (0, t.jsx)(Hu, {
                rgPackageIDs: r,
                strTotalPrice: a,
              }),
              children: (0, t.jsxs)(Ut.YZ, {
                "flow-children": "column",
                className: bn().Body,
                children: [
                  g &&
                    (0, t.jsx)(b.EY, {
                      size: "6",
                      contrast: "title",
                      marginBottom: "2",
                      children: g,
                    }),
                  (0, t.jsx)(b.EY, {
                    size: "3",
                    children: (0, ve.xh)(
                      f,
                      (0, t.jsx)("b", {}),
                      (0, t.jsx)("b", {}),
                    ),
                  }),
                  (0, t.jsxs)(T.Z, {
                    "flow-children": "row",
                    className: bn().Capsules,
                    children: [
                      (0, t.jsx)(Aa, {
                        appid: e.appid,
                        packageid: e.packageid,
                        strCallout: p.Localize(
                          "#AppPage_DLCDependency_ThisDLC",
                        ),
                      }),
                      n.map((h) =>
                        (0, t.jsxs)(
                          m.Fragment,
                          {
                            children: [
                              (0, t.jsx)(le.az, {
                                "aria-hidden": !0,
                                className: bn().Separator,
                                children: "+",
                              }),
                              (0, t.jsx)(Aa, {
                                appid: h.appid,
                                packageid: h.packageid,
                                strCallout: p.Localize(
                                  h.bRequired
                                    ? "#AppPage_DLCDependency_RequiredTab"
                                    : "#AppPage_DLCDependency_RecommendedTab",
                                ),
                              }),
                            ],
                          },
                          h.appid,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function Hu(s) {
          const { rgPackageIDs: e, strTotalPrice: n } = s;
          return (0, t.jsxs)(O.s, {
            align: "center",
            gap: "1",
            className: bn().ActionGroup,
            children: [
              (0, t.jsx)(b.EY, {
                size: "3",
                className: bn().Total,
                children: n,
              }),
              (0, t.jsx)(Qr, {
                rgPackageIDs: e,
                strButtonToken: "#AppPage_DLCDependency_AddAllToCart",
              }),
            ],
          });
        }
        function Aa(s) {
          const { appid: e, packageid: n, strCallout: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E.lv)({ appid: e }),
            { data: c } = (0, E.mr)(n ? { packageid: n } : void 0);
          if (!a) return null;
          const d =
            o?.asset_url_format && o.small_capsule
              ? Zs(o.asset_url_format, o.small_capsule)
              : void 0;
          return (0, t.jsxs)(T.Z, {
            "flow-children": "column",
            className: bn().Item,
            children: [
              (0, t.jsx)(O.s, {
                justify: "center",
                position: "absolute",
                inset: "-16px 0 auto 0",
                className: bn().CalloutRow,
                children: (0, t.jsx)(b.EY, {
                  size: "1",
                  contrast: "title",
                  className: bn().Callout,
                  children: r,
                }),
              }),
              (0, t.jsxs)(Wn.p, {
                storeItem: a,
                className: bn().Link,
                children: [
                  d &&
                    (0, t.jsx)(tn, {
                      display: "block",
                      width: "100%",
                      src: d,
                      alt: a.name || "",
                    }),
                  (0, t.jsxs)(le.az, {
                    children: [
                      a.is_free &&
                        (0, t.jsx)(b.EY, {
                          size: "3",
                          children: p.Localize("#AppPage_DLC_Free"),
                        }),
                      !a.is_free &&
                        c &&
                        (0, t.jsx)(Vr.z, { purchaseOption: c, size: "inline" }),
                      !a.is_free &&
                        !c &&
                        (0, t.jsx)(b.EY, {
                          size: "3",
                          children: p.Localize("#AppPage_DLC_NoPrice"),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var za = i(96253),
          qu = i(48205),
          qt = i.n(qu),
          _u = i(21690);
        function em(s) {
          const {
              appid: e,
              oTags: n,
              oCreatorLinks: r,
              reviewSummaryRecent: a,
              strIdForReviewSummary: o,
            } = s,
            c = new Map();
          for (const [u, g] of Object.entries(n)) c.set(u, g);
          const d = new Map();
          for (const [u, g] of Object.entries(r)) d.set(u, g);
          return (
            m.useLayoutEffect(() => {
              const u = document.querySelector("#summaryBarTop");
              u && (u.style.height = "unset");
            }, []),
            m.use(p.Ready()),
            (0, t.jsx)(m.Suspense, {
              children: (0, t.jsxs)(T.Z, {
                className: qt().SummaryBarTop,
                "flow-children": "grid",
                navEntryPreferPosition: V.iU.MAINTAIN_X,
                resetNavOnEntry: !0,
                children: [
                  (0, t.jsx)(im, {
                    appid: e,
                    recent: a,
                    strIdForReviewSummary: o,
                  }),
                  (0, t.jsx)(tm, { appid: e }),
                  (0, t.jsx)(rm, { appid: e, mapTags: c }),
                  (0, t.jsx)(am, { appid: e, mapCreatorLinks: d }),
                ],
              }),
            })
          );
        }
        function er(s) {
          const { children: e } = s;
          return (0, t.jsx)("div", {
            className: qt().Title,
            children: (0, t.jsx)(b.EY, { contrast: "title", children: e }),
          });
        }
        function tm(s) {
          const { appid: e } = s,
            n = m.useMemo(
              () => (0, C.Tc)("hardwarecompatibility", "application_config"),
              [],
            ),
            {
              bSteamDeck: r,
              bSteamOS: a,
              bSteamMachine: o,
              bSteamFrame: c,
            } = (0, _u.Ec)(),
            [d, u] = m.useMemo(
              () =>
                o
                  ? [
                      kt.JR,
                      p.Localize("#AppPage_SummaryBar_SteamMachineCompat"),
                    ]
                  : c
                    ? [
                        kt.bY,
                        p.Localize("#AppPage_SummaryBar_SteamFrameCompat"),
                      ]
                    : a && !r
                      ? [kt.c9, p.Localize("#AppPage_SummaryBar_SteamOSCompat")]
                      : [
                          kt.ZJ,
                          p.Localize("#AppPage_SummaryBar_SteamDeckCompat"),
                        ],
              [r, a, o, c],
            );
          return n
            ? (0, t.jsxs)(T.Z, {
                className: (0, D.A)(
                  qt().SummaryBarSection,
                  qt().SteamDeckCompat,
                ),
                children: [
                  (0, t.jsx)(er, { children: u }),
                  (0, t.jsx)(Qi, {
                    className: qt().SteamDeckCompatContent,
                    appID: e,
                    results: n,
                    tab: d,
                  }),
                ],
              })
            : null;
        }
        function nm(s) {
          const e = s.Element?.getBoundingClientRect(),
            n = s.m_Parent?.Element?.getBoundingClientRect();
          return !e || !n ? !1 : e.bottom <= n.bottom;
        }
        function sm(s) {
          const { tag: e } = s,
            n = (0, Qt.aL)(
              F.TS.STORE_BASE_URL + `tags/${(0, za.ut)(F.TS.LANGUAGE)}/${e}`,
            );
          return (0, t.jsx)(M.Ii, {
            className: qt().Tag,
            href: n,
            fnCanTakeFocus: nm,
            children: (0, t.jsx)(le.az, {
              background: "blue-5",
              paddingX: "1",
              paddingY: "0",
              children: (0, t.jsx)(b.EY, { color: "blue-8", children: e }),
            }),
          });
        }
        function rm(s) {
          const { appid: e, mapTags: n } = s;
          return (0, t.jsxs)(Ut.YZ, {
            className: (0, D.A)(qt().SummaryBarSection, qt().UserTags),
            focusable: !0,
            children: [
              (0, t.jsx)(er, {
                children: p.Localize("#AppPage_SummaryBar_UserTags"),
              }),
              (0, t.jsx)(T.Z, {
                className: qt().Tags,
                children: Array.from(n.entries()).map(([r, a]) =>
                  (0, t.jsx)(sm, { tag: r }, r),
                ),
              }),
            ],
          });
        }
        function Na(s) {
          const {
            label: e,
            reviewScoreDescription: n,
            percentage: r,
            count: a,
          } = s;
          return !e || !n || r == null || !a
            ? null
            : (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(b.EY, {
                    contrast: "body",
                    children: p.Localize(e),
                  }),
                  " ",
                  (0, t.jsx)(b.EY, { color: "blue-8", children: n }),
                  " ",
                  (0, t.jsxs)(b.EY, {
                    contrast: "body",
                    children: [
                      "(",
                      p.Localize("#AppPage_ReviewStats", r, (0, Jn.D)(a)),
                      ")",
                    ],
                  }),
                ],
              });
        }
        function im(s) {
          const { appid: e, recent: n, strIdForReviewSummary: r } = s,
            { data: a } = (0, E.ik)({ appid: e }),
            o = m.useCallback(() => {
              window.MoveFocusToId(r);
            }, [r]);
          return !a || !a.summary_filtered?.review_count
            ? null
            : (0, t.jsxs)(T.Z, {
                className: qt().SummaryBarSection,
                onActivate: o,
                children: [
                  (0, t.jsx)(er, {
                    children: p.Localize("#AppPage_SummaryBar_UserReviews"),
                  }),
                  (0, t.jsx)(Na, {
                    label: "#AppPage_Reviews_AllTime",
                    reviewScoreDescription:
                      a.summary_filtered?.review_score_label,
                    percentage: a.summary_filtered.percent_positive,
                    count: a.summary_filtered.review_count,
                  }),
                  n &&
                    (0, t.jsx)(Na, {
                      label: "#AppPage_Reviews_Recent",
                      reviewScoreDescription: n.description,
                      percentage: n.percentage,
                      count: n.count,
                    }),
                ],
              });
        }
        function am(s) {
          const { appid: e, mapCreatorLinks: n } = s,
            { data: r } = (0, E.wl)({ appid: e }),
            { data: a } = (0, E.by)({ appid: e }),
            { data: o } = (0, E._F)({ appid: e }),
            c = o?.links_and_info?.manufacturers?.map((d) => ({ name: d }));
          return r
            ? (0, t.jsxs)(Ut.YZ, {
                className: (0, D.A)(qt().SummaryBarSection, qt().GameInfo),
                children: [
                  (0, t.jsx)(er, {
                    children: p.Localize("#AppPage_SummaryBar_GameInfo"),
                  }),
                  (0, t.jsx)("table", {
                    children: (0, t.jsxs)("tbody", {
                      children: [
                        (0, t.jsx)($r, {
                          label: "#AppPage_SummaryBar_Developer",
                          strType: "developer",
                          rgCreators: r.developers,
                          mapCreatorLinks: n,
                        }),
                        (0, t.jsx)($r, {
                          label: "#AppPage_SummaryBar_Publisher",
                          strType: "publisher",
                          rgCreators: r.publishers,
                          mapCreatorLinks: n,
                        }),
                        (0, t.jsx)($r, {
                          label: "#AppPage_SummaryBar_Manufacturer",
                          strType: "manufacturer",
                          rgCreators: c,
                        }),
                        a?.steam_release_date &&
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)(b.EY, {
                                  contrast: "body",
                                  children: p.Localize(
                                    "#AppPage_SummaryBar_ReleaseDate",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)(b.EY, {
                                  contrast: "body",
                                  children: (0, Lt._l)(a?.steam_release_date, {
                                    fullmonthname: !1,
                                    bUseRelativeNames: !1,
                                    bIncludeDayName: !1,
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        }
        function om(s) {
          const { creator: e, strType: n, mapCreatorLinks: r } = s,
            a = (0, Qt.aL)(r?.get(e.name)),
            o = (0, Qt.aL)(
              F.TS.STORE_BASE_URL +
                `search/?${n}=${encodeURIComponent(e.name)}`,
            ),
            c = a || o;
          return (0, t.jsx)(M.Ii, {
            href: c,
            children: (0, t.jsx)(b.EY, {
              color: "blue-8",
              whiteSpace: "nowrap",
              children: e.name,
            }),
          });
        }
        function $r(s) {
          const { label: e, strType: n, rgCreators: r, mapCreatorLinks: a } = s,
            o = 4;
          return !r || r.length == 0
            ? null
            : (0, t.jsxs)("tr", {
                children: [
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(b.EY, {
                      contrast: "body",
                      children: p.Localize(e),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(T.Z, {
                      children: (0, t.jsxs)(b.EY, {
                        contrast: "body",
                        lineClamp: 3,
                        children: [
                          r
                            .slice(0, o)
                            .map((c, d) =>
                              (0, t.jsxs)(
                                m.Fragment,
                                {
                                  children: [
                                    d != 0 &&
                                      (0, t.jsx)("span", { children: ", " }),
                                    (0, t.jsx)(om, {
                                      strType: n,
                                      creator: c,
                                      mapCreatorLinks: a,
                                    }),
                                  ],
                                },
                                c.creator_clan_account_id || c.name,
                              ),
                            ),
                          r.length > o &&
                            (0, t.jsx)("span", {
                              children: p.Localize(
                                "#AppPage_SummaryBar_AndMore",
                                r.length - 4,
                              ),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
        }
        function lm(s) {
          const e = (0, pn.jE)();
          return (
            m.useEffect(() => {
              const { rgPayloads: n, markReady: r } = s;
              for (let a of n || [])
                for (let o of a.rgStoreItems || [])
                  (0, E.vB)(e, o, a.dataRequestStoreItems);
              r();
            }, [e, s]),
            null
          );
        }
        var Ps = i(45497),
          cm = i(9246),
          Da = i.n(cm),
          dm = i(2259),
          um = i(8611),
          nn = i.n(um);
        function Zr(s) {
          const { children: e, className: n } = s,
            {
              setExpanded: r,
              refContents: a,
              bCollapsible: o,
              refPanel: c,
              bExpanded: d,
              bCollapsed: u,
            } = Wa(),
            g = m.useCallback(() => {
              r(!d);
            }, [d, r]);
          return (0, t.jsx)(T.Z, {
            ref: c,
            className: (0, D.A)(nn().AutoCollapsePanel, n),
            focusableIfEmpty: !0,
            onActivate: o ? g : void 0,
            children: (0, t.jsxs)(
              T.Z,
              {
                focusable: o,
                children: [
                  (0, t.jsx)("div", {
                    ref: a,
                    className: (0, D.A)(
                      nn().Contents,
                      u && nn().Collapsed,
                      d && nn().Expanded,
                    ),
                    children: e,
                  }),
                  o &&
                    (0, t.jsx)("div", {
                      className: nn().ReadMore,
                      children: p.Localize(
                        d ? "#btn_read_less" : "#btn_read_more",
                      ),
                    }),
                ],
              },
              u ? "collapsed" : "expanded",
            ),
          });
        }
        function Fa(s) {
          const { children: e, className: n } = s,
            {
              setExpanded: r,
              refContents: a,
              bCollapsible: o,
              refPanel: c,
              bExpanded: d,
              bCollapsed: u,
            } = Wa(),
            g = m.useCallback(
              (h) => {
                h && r(!0);
              },
              [r],
            ),
            f = m.useCallback(() => {
              r(!1);
            }, [r]);
          return (0, t.jsxs)(Ut.YZ, {
            ref: c,
            className: (0, D.A)(nn().AutoCollapsePanel, n),
            onExplicitFocusLevelChanged: o ? g : void 0,
            children: [
              (0, t.jsx)("div", {
                ref: a,
                className: (0, D.A)(
                  nn().Contents,
                  u && nn().Collapsed,
                  d && nn().Expanded,
                ),
                children: e,
              }),
              o &&
                !d &&
                (0, t.jsx)("div", {
                  className: nn().ReadMore,
                  children: p.Localize("#btn_read_more"),
                }),
              o &&
                d &&
                (0, t.jsx)(T.Z, {
                  className: nn().ReadMore,
                  onActivate: f,
                  children: p.Localize("#btn_read_less"),
                }),
            ],
          });
        }
        function Wa() {
          const [s, e] = m.useState(!1),
            [n, r] = m.useState(!1),
            a = m.useRef(null),
            o = m.useRef(!1),
            c = m.useCallback(
              (f) => {
                s || r(f.target.scrollHeight > f.target.clientHeight);
              },
              [s],
            ),
            d = (0, dm.wY)(c),
            u = n && !s;
          return (
            m.useLayoutEffect(() => {
              o.current &&
                !s &&
                a.current?.scrollIntoView({ block: "nearest" }),
                (o.current = !1);
            }, [s]),
            {
              setExpanded: m.useCallback(
                (f) => {
                  e(f), f || (o.current = !0);
                },
                [e, o],
              ),
              refContents: d,
              refPanel: a,
              bCollapsed: u,
              bExpanded: s,
              bCollapsible: n,
            }
          );
        }
        function mm(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.LM)({ appid: e });
          return (
            m.use(p.Ready()),
            !n || n.type == null || !r
              ? null
              : (0, t.jsxs)(Zr, {
                  className: Da().AboutThisGame,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("h2", {
                      className: Da().Header,
                      children: p.Localize(
                        p.GetAppTypeLocKey("#About_This", n.type),
                      ),
                    }),
                    (0, t.jsx)(Ps.n, { text: r }),
                  ],
                })
          );
        }
        var gm = i(11512),
          pm = i(38404),
          Vt = i.n(pm);
        const fm = {
          1: "date_full",
          2: "date_month",
          3: "date_quarter",
          4: "date_year",
        };
        function hm(s) {
          const e = s.release_from_early_access_date,
            n = fm[s.release_from_early_access_style];
          return !e || !n ? "" : (0, gm.M)(n, e);
        }
        function ym(s) {
          const { appid: e, staleUpdate: n, bIsAppEditor: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E.by)({ appid: e }),
            { data: c } = (0, E._F)({ appid: e }),
            [d, u] = m.useState(!1),
            g = m.useCallback(() => u((B) => !B), []);
          if ((m.use(p.Ready()), !a || !o)) return null;
          const f = a.type == ee.uE.Sv,
            h = !!o.is_coming_soon,
            x = hm(o);
          let v = "#AppPage_EarlyAccess_Header",
            I = "#AppPage_EarlyAccess_BannerDesc";
          return (
            h
              ? ((v = "#AppPage_EarlyAccess_Header_Soon"),
                (I = "#AppPage_EarlyAccess_BannerDesc_Soon"))
              : f &&
                ((v = "#AppPage_EarlyAccess_Header_Software"),
                (I = "#AppPage_EarlyAccess_BannerDesc_Software")),
            (0, t.jsxs)(Ut.YZ, {
              className: Vt().EarlyAccess,
              "flow-children": "column",
              children: [
                !!x &&
                  (0, t.jsx)("div", {
                    className: Vt().LeavingEarlyAccess,
                    children: p.Localize("#AppPage_EarlyAccess_LeaveWhen", x),
                  }),
                (0, t.jsxs)(T.Z, {
                  className: Vt().Banner,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("h2", {
                      className: Vt().Title,
                      children: p.Localize(v),
                    }),
                    (0, t.jsx)("p", {
                      className: Vt().Desc,
                      children: p.Localize(I),
                    }),
                    (0, t.jsx)(Ot.W, {
                      onClick: g,
                      children: p.Localize(
                        d
                          ? "#AppPage_EarlyAccess_ShowLess"
                          : "#AppPage_EarlyAccess_ShowMore",
                      ),
                    }),
                    d &&
                      (0, t.jsx)(xm, {
                        earlyAccess: c?.early_access,
                        staleUpdate: n,
                        bIsAppEditor: r,
                        bSoftware: f,
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function xm(s) {
          const {
              earlyAccess: e,
              staleUpdate: n,
              bIsAppEditor: r,
              bSoftware: a,
            } = s,
            o = `${F.TS.STORE_BASE_URL}earlyaccessfaq/`,
            c = !!e?.description_bbcode;
          let d;
          c
            ? (d = [
                {
                  text: e?.description_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_WhatDevsSay",
                },
              ])
            : (d = [
                {
                  text: e?.why_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_Why",
                },
                {
                  text: e?.how_long_bbcode,
                  tokenHeader: a
                    ? "#AppPage_EarlyAccess_HowLong_Software"
                    : "#AppPage_EarlyAccess_HowLong",
                },
                {
                  text: e?.full_version_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_FullVersion",
                },
                {
                  text: e?.current_state_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_CurrentState",
                },
                {
                  text: e?.pricing_bbcode,
                  tokenHeader: a
                    ? "#AppPage_EarlyAccess_Pricing_Software"
                    : "#AppPage_EarlyAccess_Pricing",
                },
                {
                  text: e?.community_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_Community",
                },
              ]);
          const u = d.some((g) => !!g.text);
          return (0, t.jsxs)(T.Z, {
            className: Vt().Details,
            "flow-children": "column",
            children: [
              (0, t.jsxs)("p", {
                className: Vt().Warn,
                children: [
                  p.Localize(
                    a
                      ? "#AppPage_EarlyAccess_Warn_Software"
                      : "#AppPage_EarlyAccess_Warn",
                  ),
                  " ",
                  (0, t.jsx)(M.Ii, {
                    className: Vt().Link,
                    href: o,
                    children: p.Localize("#AppPage_EarlyAccess_LearnMore"),
                  }),
                ],
              }),
              !!n && (0, t.jsx)(jm, { staleUpdate: n, bIsAppEditor: r }),
              u &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    !c &&
                      (0, t.jsx)("div", {
                        className: Vt().DevsSay,
                        children: p.Localize(
                          "#AppPage_EarlyAccess_WhatDevsSay",
                        ),
                      }),
                    d.map((g, f) =>
                      (0, t.jsx)(
                        vm,
                        { text: g.text, tokenHeader: g.tokenHeader },
                        f,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function vm(s) {
          const { text: e, tokenHeader: n } = s;
          return e
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("h3", {
                    className: Vt().Question,
                    children: p.Localize(n),
                  }),
                  (0, t.jsx)("div", {
                    className: Vt().Answer,
                    children: (0, ve.xh)(
                      p.Localize("#AppPage_EarlyAccess_Quote"),
                      (0, t.jsx)(Ps.n, { text: e }),
                    ),
                  }),
                ],
              })
            : null;
        }
        function jm(s) {
          const { staleUpdate: e, bIsAppEditor: n } = s,
            { nMonthsAgo: r, bNoUpdatesEverPublished: a } = e;
          let o;
          if (!r && a) o = p.Localize("#AppPage_EarlyAccess_NoUpdates");
          else if (r && r > 24) {
            const c = Math.floor(r / 12);
            o = p.LocalizePlural("#AppPage_EarlyAccess_StaleYears", c);
          } else o = p.LocalizePlural("#AppPage_EarlyAccess_StaleMonths", r);
          return (0, t.jsxs)("div", {
            className: Vt().Stale,
            children: [
              o,
              " ",
              p.Localize("#AppPage_EarlyAccess_StaleWarning2"),
              n &&
                (0, t.jsx)("div", {
                  className: Vt().StaleDevs,
                  children: (0, ve.xh)(
                    p.Localize("#AppPage_EarlyAccess_StaleDevs"),
                    (0, t.jsx)(M.Ii, {
                      className: Vt().Link,
                      href: `${F.TS.PARTNER_BASE_URL}doc/store/earlyaccess#update_notice`,
                    }),
                  ),
                }),
            ],
          });
        }
        var bm = i(14844),
          Jr = i.n(bm);
        function Bm(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e });
          m.use(p.Ready());
          const r = n?.section;
          return r?.length
            ? (0, t.jsx)("div", {
                className: Jr().PageSections,
                children: r.map((a, o) => (0, t.jsx)(Im, { section: a }, o)),
              })
            : null;
        }
        function Im(s) {
          const { label: e, content_bbcode: n, banner: r } = s.section;
          return (0, t.jsxs)(Zr, {
            className: Jr().PageSection,
            "flow-children": "column",
            children: [
              e && (0, t.jsx)("h2", { className: Jr().Header, children: e }),
              n && (0, t.jsx)(Ps.n, { text: n }),
            ],
          });
        }
        var Em = i(45200),
          Pm = i.n(Em);
        function Mm(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e });
          return (
            m.use(p.Ready()),
            n?.legal_notice_bbcode
              ? (0, t.jsx)(Fa, {
                  className: Pm().LegalNotice,
                  children: (0, t.jsx)(Ps.n, {
                    text: n.legal_notice_bbcode,
                    bBypassLinkFilter: !0,
                  }),
                })
              : null
          );
        }
        function Tm(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = n?.press_review;
          return r?.length
            ? (m.use(p.Ready()),
              (0, t.jsx)(le.az, {
                width: "616px",
                maxWidth: "100%",
                marginTop: "5",
                children: (0, t.jsxs)(Ut.YZ, {
                  children: [
                    (0, t.jsx)(Rn.D, {
                      level: "2",
                      size: "2",
                      weight: "heavy",
                      contrast: "title",
                      children: p.Localize("#AppPage_PressReviews_Header"),
                    }),
                    r.map((a, o) => (0, t.jsx)(Sm, { review: a }, o)),
                  ],
                }),
              }))
            : null;
        }
        function Sm(s) {
          const { quote: e, score: n, site: r, url: a } = s.review;
          let o = e;
          e && r && (o = p.Localize("#AppPage_PressReviews_Quote", e));
          let c = r;
          r &&
            a &&
            (c = (0, t.jsx)(Ot.Y, { href: a, color: "blue-8", children: r }));
          let d = c;
          return (
            n && r
              ? (d = p.LocalizeReact("#AppPage_PressReviews_Attribution", n, c))
              : n && (d = n),
            (0, t.jsxs)(le.az, {
              marginBottom: "3",
              children: [
                o && (0, t.jsx)(b.EY, { as: "div", size: "2", children: o }),
                d && (0, t.jsx)(b.EY, { as: "div", size: "2", children: d }),
              ],
            })
          );
        }
        function wa(s) {
          const { strHeading: e, strIntro: n, strBody: r } = s;
          return (0, t.jsx)(le.az, {
            maxWidth: "100%",
            marginTop: "5",
            children: (0, t.jsxs)(Zr, {
              children: [
                (0, t.jsx)(Rn.D, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children: e,
                }),
                (0, t.jsx)(b.EY, {
                  as: "p",
                  size: "3",
                  marginTop: "3",
                  children: n,
                }),
                (0, t.jsx)(b.EY, {
                  as: "p",
                  size: "3",
                  whiteSpace: "pre-line",
                  style: { fontStyle: "italic" },
                  children: r,
                }),
              ],
            }),
          });
        }
        function Lm(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = n?.content_survey_ai_notes;
          return r
            ? (m.use(p.Ready()),
              (0, t.jsx)(wa, {
                strHeading: p.Localize("#AppPage_AIDisclosure_Header"),
                strIntro: p.Localize("#AppPage_AIDisclosure_Intro"),
                strBody: r,
              }))
            : null;
        }
        var dn = i(32093),
          Bn = i(18735);
        const Om = null,
          Xr = [
            {
              descid: Bn.ED,
              parentDescID: 0,
              strNameToken: "#ContentDescriptor_GeneralMatureContent",
              strUserDescToken:
                "#ContentDescriptor_GeneralMatureContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Bn.M,
              parentDescID: Bn.ED,
              strNameToken: "#ContentDescriptor_FrequentViolenceOrGore",
              strUserDescToken:
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Bn.mx,
              parentDescID: Bn.ED,
              strNameToken: "#ContentDescriptor_NudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_NudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Bn.T4,
              parentDescID: Bn.mx,
              strNameToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
            {
              descid: Bn.u7,
              parentDescID: Bn.T4,
              strNameToken: "#ContentDescriptor_AdultOnlySexualContent",
              strUserDescToken:
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
          ];
        function Qh() {
          return Xr;
        }
        function Hr(s) {
          return Xr.find((e) => e.descid === s);
        }
        function $h(s) {
          return s.some((e) => Hr(e)?.bAdultsOnly);
        }
        function Ra(s, e) {
          return !s.bAdultsOnly || !Om.includes(e);
        }
        function Zh(s, e) {
          return e.some((n) => {
            const r = Hr(n);
            return r && !Ra(r, s);
          });
        }
        function Am(s) {
          return Xr.filter((e) => !Ra(e, s)).map((e) => e.descid);
        }
        function Jh(s, e) {
          return [...new Set([...s, ...Am(e)])].sort((r, a) => r - a);
        }
        function zm(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.x2)({ appid: e }),
            a = n?.content_descriptorids;
          if (
            !n ||
            n.type == null ||
            !a?.length ||
            r === void 0 ||
            (0, dn.nA)(C.TS.EREALM)
          )
            return null;
          m.use(p.Ready()), m.use(Z.Z.Ready());
          let o = r?.content_survey_notes;
          if (!o) {
            const c = [];
            for (const d of a) {
              const u = Hr(d);
              u?.bCustomerFacing && c.push(Z.Z.Localize(u.strNameToken));
            }
            o = p.Localize(
              p.GetAppTypeLocKey("#AppPage_MatureContent_Descriptors", n.type),
              c.join(", "),
            );
          }
          return (0, t.jsx)(wa, {
            strHeading: p.Localize("#AppPage_MatureContent_Header"),
            strIntro: p.Localize("#AppPage_AgeGate_DescriptorNotes"),
            strBody: o,
          });
        }
        var Ua = i(62038),
          Nm = i(55367),
          Oe = i.n(Nm),
          Ca = i(83321),
          qr = i(7967),
          _r = i(32994),
          Dm = i(3471),
          Ee = i.n(Dm);
        function Ms(s) {
          return Ka(s)
            ? (0, L.we)("#Language_" + (0, G.LgB)(s.elanguage))
            : Ga(s)
              ? (0, L.we)("#language_ext_" + (0, G.c6v)(s.eadditionallanguage))
              : (0, L.we)("#language_selection_none");
        }
        function Fm(s) {
          if (!s) return [];
          const e = [];
          for (let n = 0; n < s.length; n++)
            s[s.length - n - 1] == "1" && e.push(n);
          return e;
        }
        function Wm(s) {
          if (!s) return [];
          const e = [],
            n = BigInt(s);
          for (let r = G.Bhc; r < G.bP9; r++)
            (n >> BigInt(r)) & BigInt(1) && e.push(r);
          return e;
        }
        function Ka(s) {
          return s.elanguage != null && s.elanguage != -1;
        }
        function Ga(s) {
          return s.eadditionallanguage != null && s.eadditionallanguage != -1;
        }
        function wm(s, e) {
          let n;
          if (!s || !e?.length)
            return {
              rgSorted: [],
              nForceVisible: 0,
              firstPreferredLanguage: n,
            };
          const r = [],
            a = [
              s.preferences?.primary_language ?? G.Bhc,
              ...Wm(s.preferences?.secondary_languages),
            ].filter((g) => g != null),
            o = new Set();
          for (const g of a) {
            const f = e.findIndex((h) => h.elanguage == g);
            f != -1 &&
              (r.push({ ...e[f], preferred: !0 }),
              o.add(g),
              n || (n = { ...e[f], preferred: !0 }));
          }
          const c = Fm(s.preferences?.additional_languages),
            d = new Set();
          for (const g of c) {
            const f = e.findIndex((h) => h.eadditionallanguage == g);
            f != -1 && (r.push({ ...e[f], preferred: !0 }), d.add(g));
          }
          const u = r.length;
          for (const g of e)
            if (Ka(g)) {
              if (o.has(g.elanguage)) continue;
              r.push({ ...g, preferred: !1 }), o.add(g.elanguage);
            } else if (Ga(g)) {
              if (d.has(g.elanguage)) continue;
              r.push({ ...g, preferred: !1 }), d.add(g.eadditionallanguage);
            }
          return { rgSorted: r, nForceVisible: u, firstPreferredLanguage: n };
        }
        function Rm(s) {
          const { appid: e, initialOpen: n } = s,
            [r, a] = (0, m.useState)(n ?? !1),
            { data: o } = (0, E.Zx)({ appid: e }),
            { data: c } = (0, E.J$)({ appid: e }),
            { data: d } = (0, _r.lI)(),
            [u, g] = (0, m.useState)(!1),
            f = (0, Ca.LT)("md"),
            h = m.useId(),
            {
              rgSorted: x,
              nForceVisible: v,
              firstPreferredLanguage: I,
            } = m.useMemo(() => wm(d, o ?? []), [d, o]);
          if (!x.length || !c || c.type == ee.uE.Ov) return null;
          const B = c.type == ee.uE.Wz || c.type == ee.uE.gQ,
            A = f ? Ee().CheckColumn : Ee().IconColumn,
            S = f ? Cm : Km;
          return (0, t.jsxs)(M.fF, {
            className: Ee().Details,
            focusableIfEmpty: !0,
            open: r,
            onToggle: (z) => a(z.currentTarget.open),
            children: [
              (0, t.jsxs)(
                M.f_,
                {
                  className: Ee().Summary,
                  children: [
                    (0, t.jsx)("div", {
                      className: Ee().ImageContainer,
                      children: (0, t.jsx)(N.vCk, { className: Ee().Image }),
                    }),
                    (0, t.jsxs)("div", {
                      className: Ee().TextBox,
                      children: [
                        (0, t.jsx)(b.EY, {
                          color: "blue-8",
                          children: p.Localize(
                            "#languages_supported",
                            x.length,
                          ),
                        }),
                        !r && (0, t.jsx)(Um, { language: I }),
                      ],
                    }),
                    r &&
                      (0, t.jsx)("div", {
                        className: Ee().Open,
                        children: "-",
                      }),
                    !r &&
                      (0, t.jsx)("div", {
                        className: Ee().Closed,
                        children: "+",
                      }),
                  ],
                },
                r ? "open" : "closed",
              ),
              (0, t.jsxs)(qr.Qg, {
                className: Ee().LanguageGrid,
                focusable: r,
                children: [
                  !f &&
                    (0, t.jsxs)("div", {
                      className: Ee().Legend,
                      children: [
                        (0, t.jsx)(b.EY, {
                          color: "greyneutral-11",
                          children: p.Localize("#language_header_subtitles"),
                        }),
                        (0, t.jsx)("div", {
                          className: Ee().LegendIconContainer,
                          children: (0, t.jsx)(N._b5, {
                            className: Ee().LegendIcon,
                          }),
                        }),
                        (0, t.jsx)(b.EY, {
                          color: "greyneutral-11",
                          children: p.Localize(
                            "#language_header_full_audio_short",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: Ee().LegendIconContainer,
                          children: (0, t.jsx)(N.fSs, {
                            className: Ee().LegendIcon,
                          }),
                        }),
                      ],
                    }),
                  (0, t.jsxs)("table", {
                    className: Ee().LanguageTable,
                    children: [
                      (0, t.jsxs)("colgroup", {
                        children: [
                          (0, t.jsx)("col", { className: Ee().LanguageName }),
                          (0, t.jsx)("col", { className: A }),
                          (0, t.jsx)("col", { className: A }),
                          f && (0, t.jsx)("col", { className: A }),
                        ],
                      }),
                      f &&
                        (0, t.jsx)("thead", {
                          children: (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("th", {}),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(b.EY, {
                                  color: "greyneutral-11",
                                  children: p.Localize(
                                    B
                                      ? "#language_header_interface_video"
                                      : "#language_header_interface",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(b.EY, {
                                  color: "greyneutral-11",
                                  children: p.Localize(
                                    "#language_header_subtitles",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(b.EY, {
                                  color: "greyneutral-11",
                                  children: p.Localize(
                                    "#language_header_full_audio",
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                      (0, t.jsx)("tbody", {
                        children: x.map((z, w) =>
                          (0, t.jsx)(S, { language: z }, w),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Um(s) {
          const { language: e } = s,
            { data: n } = (0, _r.lI)();
          if (!n) return null;
          if (!e || (!e.supported && !e.subtitles && !e.full_audio)) {
            let r = n.preferences?.primary_language ?? G.Bhc;
            return (
              (r == G.xPp || r >= G.bP9) && (r = G.Bhc),
              (0, t.jsx)(b.EY, {
                color: "blue-8",
                children: (0, L.we)("#Language_" + (0, G.LgB)(r)),
              })
            );
          } else {
            let r;
            return (
              e.full_audio
                ? e.subtitles
                  ? (r = "#language_supported_subtitles_audio")
                  : (r = "#language_supported_audio")
                : e.subtitles
                  ? (r = "#language_supported_subtitles")
                  : (r = "#language_supported_interface"),
              (0, t.jsx)(b.EY, {
                color: "storegreen-7",
                children: p.Localize(r, Ms(e)),
              })
            );
          }
        }
        function Cm(s) {
          const { language: e } = s,
            n = (0, Ca.LT)("md");
          return !e.supported && !e.full_audio && !e.subtitles
            ? (0, t.jsxs)("tr", {
                className: (0, D.A)(e.preferred && Ee().Preferred),
                children: [
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(b.EY, {
                      color: e.preferred ? "storegreen-7" : "blue-8",
                      children: Ms(e),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    colSpan: 3,
                    children: p.Localize("#language_not_supported"),
                  }),
                ],
              })
            : (0, t.jsxs)("tr", {
                className: (0, D.A)(e.preferred && Ee().Preferred),
                children: [
                  (0, t.jsx)("td", { className: Ee().Name, children: Ms(e) }),
                  (0, t.jsx)("td", {
                    children:
                      (e.supported &&
                        (0, t.jsx)("span", { children: "\u2714" })) ||
                      (0, t.jsx)(t.Fragment, {}),
                  }),
                  (0, t.jsx)("td", {
                    children:
                      (e.subtitles &&
                        (0, t.jsx)("span", { children: "\u2714" })) ||
                      (0, t.jsx)(t.Fragment, {}),
                  }),
                  (0, t.jsx)("td", {
                    children:
                      (e.full_audio &&
                        (0, t.jsx)("span", { children: "\u2714" })) ||
                      (0, t.jsx)(t.Fragment, {}),
                  }),
                ],
              });
        }
        function Km(s) {
          const { language: e } = s;
          return !e.supported && !e.full_audio && !e.subtitles
            ? (0, t.jsx)("tr", {
                className: (0, D.A)(e.preferred && Ee().Preferred),
                children: (0, t.jsx)("td", {
                  colSpan: 3,
                  children: p.Localize("#language_not_supported_inline", Ms(e)),
                }),
              })
            : (0, t.jsxs)("tr", {
                className: (0, D.A)(e.preferred && Ee().Preferred),
                children: [
                  (0, t.jsx)("td", { className: Ee().Name, children: Ms(e) }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {
                      className: Ee().SmallIcon,
                      children:
                        (e.subtitles && (0, t.jsx)(N._b5, {})) ||
                        (0, t.jsx)(t.Fragment, {}),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {
                      className: Ee().SmallIcon,
                      children:
                        (e.full_audio && (0, t.jsx)(N.fSs, {})) ||
                        (0, t.jsx)(t.Fragment, {}),
                    }),
                  }),
                ],
              });
        }
        function tr(s) {
          return (0, t.jsx)(le.az, {
            marginBottom: "2",
            children: (0, t.jsx)(b.EY, {
              contrast: "title",
              size: "2",
              weight: "heavy",
              style: { letterSpacing: "0.5px" },
              children: s.text,
            }),
          });
        }
        function Gm(s) {
          const { appid: e, rgCategories: n, controllersUsed: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E._F)({ appid: e }),
            c = m.useMemo(() => {
              const x = new Set(a?.categories?.feature_categoryids ?? []);
              return (
                a?.categories?.supported_player_categoryids?.forEach((v) =>
                  x.add(v),
                ),
                a?.categories?.controller_categoryids?.forEach((v) => x.add(v)),
                x
              );
            }, [a]),
            { data: d } = (0, E.is)({ appid: e }),
            g =
              d?.purchase_options?.find(
                (x) =>
                  x.free_with_master_sub_appid &&
                  x.free_with_master_sub_appid != rs.sc,
              )?.free_with_master_sub_appid ?? rs.sc;
          if (
            (m.use(p.Ready()),
            m.use(Z.Z.Ready()),
            !a || a.type == null || a?.type == ee.uE.Hk || !o)
          )
            return null;
          const f = n.filter((x) => c.has(x.categoryid ?? 0));
          if (a.type == ee.uE.Ov && f.length == 0) return null;
          const { vetted: h } = o;
          return (0, t.jsxs)(Ut.YZ, {
            className: Oe().CategorySection,
            "flow-children": "column",
            children: [
              (0, t.jsx)(tr, { text: p.Localize("#AppPage_Features") }),
              (0, t.jsxs)(b.EY, {
                color: "blue-8",
                size: "2",
                children: [
                  f.length > 0 &&
                    (0, t.jsx)(t.Fragment, {
                      children: (0, t.jsx)(T.Z, {
                        className: Oe().CategoryLinks,
                        "flow-children": "column",
                        children: f.map((x, v) =>
                          (0, t.jsx)(Vm, { category: x }, v),
                        ),
                      }),
                    }),
                  !h && (0, t.jsx)($m, { appid: e }),
                  (0, t.jsx)(Ua.AccessibilityFeatureDisplay, {
                    features: (0, Ua.AccessibilityFeaturesFromCategories)(
                      a?.categories?.feature_categoryids ?? [],
                    ),
                  }),
                  (0, t.jsx)(Rm, { appid: e }),
                  (0, t.jsx)(Ni, { ...Zm(e, c, r, o) }),
                  (0, t.jsxs)(b.EY, {
                    color: "gold-11",
                    children: [
                      (0, t.jsx)(Xm, { extraDetails: o }),
                      (0, t.jsx)(ng, { extraDetails: o }),
                      (0, t.jsx)(qm, { extraDetails: o }),
                      (0, t.jsx)(Ya, { eulas: o.eula ?? [] }),
                      g != rs.sc && (0, t.jsx)(_m, { appid: g }),
                      (0, t.jsx)(tg, { extraDetails: o }),
                      (0, t.jsx)(sg, { extraDetails: o }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Ym(s) {
          switch (s.categoryid) {
            case G.Wmb:
            case G.q0f:
              return "category1=" + s.categoryid;
            case G.PBc:
              return "vrsupport=401";
            case G.zWR:
              return "vrsupport=402";
            default:
              return "category2=" + s.categoryid;
          }
        }
        function km(s) {
          return (
            s == G.Y5S ||
            s == G.mv5 ||
            (s >= G.KH9 && s <= G.fui) ||
            (s >= G.mWc && s <= G.vVO)
          );
        }
        function Vm(s) {
          const { category: e } = s,
            n = (0, Qt.aL)(`${C.TS.STORE_BASE_URL}search/?${Ym(e)}`);
          return km(e.categoryid)
            ? null
            : (0, t.jsxs)(M.Ii, {
                href: n,
                className: (0, D.A)(Oe().SearchLink),
                children: [
                  (0, t.jsx)("div", {
                    className: Oe().IconContainer,
                    children: (0, t.jsx)("img", {
                      className: Oe().Icon,
                      src: `${C.TS.IMG_URL}/${e.image_path}`,
                      alt: "",
                    }),
                  }),
                  (0, t.jsx)(b.EY, {
                    className: Oe().FeatureString,
                    marginLeft: "2",
                    children: p.Localize(e.display_name),
                  }),
                ],
              });
        }
        const Qm = 60;
        function $m(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.by)({ appid: e });
          if (!n || C.TS.EREALM == dn.TU.k_ESteamRealmChina) return null;
          const a = r?.steam_release_date ?? 0,
            o = a != 0 && Date.now() / 1e3 - a < 86400 * Qm;
          let c, d;
          switch (n.type) {
            case ee.uE.HT:
              (c = o
                ? "#feature_learning_about_game"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_game");
              break;
            case ee.uE.Sv:
              (c = o
                ? "#feature_learning_about_software"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_software");
              break;
            case ee.uE._i:
              (c = o
                ? "#feature_learning_about_dlc"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_dlc");
              break;
            case ee.uE.RA:
              (c = o
                ? "#feature_learning_about_mod"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_mod");
              break;
          }
          if (!c || !d) return null;
          const u = `${C.TS.IMG_URL}v6/ico/${o ? "ico_learning_about_game.png" : "ico_info.png"}`;
          return (0, t.jsxs)(T.Z, {
            className: Oe().LearningAbout,
            children: [
              (0, t.jsx)("div", {
                className: Oe().IconContainer,
                children: (0, t.jsx)("img", {
                  className: Oe().Icon,
                  src: u,
                  alt: "",
                }),
              }),
              (0, t.jsxs)(b.EY, {
                className: Oe().FeatureString,
                marginLeft: "2",
                children: [p.Localize(c), " "],
              }),
            ],
          });
        }
        function Zm(s, e, n, r) {
          const {
              controller_wizard_complete: a,
              no_mouse_keyboard_support: o,
            } = r,
            c =
              !!n.has_any_controller &&
              !n.has_ps4_controller &&
              !n.has_ps5_controller &&
              !n.has_xbox_controller;
          return {
            unAppID: s,
            bFullXboxControllerSupport: e.has(G.mv5),
            bPartialXboxControllerSupport: e.has(G.Y5S),
            bPS4ControllerSupport: e.has(G.KH9),
            bPS4ControllerBTSupport: e.has(G.wFw),
            bPS5ControllerSupport: e.has(G.wFw),
            bPS5ControllerBTSupport: e.has(G.lDg),
            bSteamInputAPISupport: e.has(G.R2g),
            bNoKeyboardSupport: o,
            bGamepadPreferred: e.has(G.fui),
            bControllerSupportWizardComplete: a,
            bHasXbox: !!n.has_xbox_controller,
            bHasPS4: !!n.has_ps4_controller,
            bHasPS5: !!n.has_ps5_controller,
            bHasOther: c,
          };
        }
        function Jm(s) {
          const { activationLimit: e } = s;
          return e
            ? e == "Unlimited"
              ? (0, t.jsx)("div", {
                  className: Oe().ActivationLimit,
                  children: p.Localize(
                    "#feature_machine_activation_limit_unlimited",
                  ),
                })
              : (0, t.jsx)("div", {
                  className: Oe().ActivationLimit,
                  children: p.Localize("#feature_machine_activation_limit", e),
                })
            : null;
        }
        function Xm(s) {
          const { extraDetails: e } = s,
            { drm_third_party_type: n, drm_activation_limit: r } = e;
          return n
            ? (0, t.jsx)("div", {
                className: Oe().ThirdPartyNotice,
                children: (0, t.jsxs)(b.EY, {
                  children: [
                    p.Localize("#feature_third_party_drm", n),
                    (0, t.jsx)(Jm, { activationLimit: r }),
                  ],
                }),
              })
            : null;
        }
        function Hm(s) {
          return s == "secureboot_tpm2"
            ? p.Localize(
                "#feature_anticheat_bootprotection_secureboottpm2_desc",
              )
            : "";
        }
        function qm(s) {
          const { extraDetails: e } = s,
            { anticheat: n } = e;
          if (!n) return null;
          const {
            kernel_mode: r,
            boot_protection: a,
            uninstall_completely: o,
            name: c,
            boot_protection_name: d,
          } = n;
          return (0, t.jsxs)("div", {
            className: (0, D.A)(Oe().ThirdPartyNotice, Oe().Anticheat),
            children: [
              (0, t.jsx)(b.EY, {
                children: p.Localize(
                  r
                    ? "#feature_includes_kernel_anti_cheat"
                    : "#feature_includes_non_kernel_anti_cheat",
                ),
              }),
              (0, t.jsxs)(b.EY, {
                color: "bronze-12",
                children: [
                  c,
                  r &&
                    !o &&
                    (0, t.jsx)(b.EY, {
                      children: p.Localize(
                        "#feature_anti_cheat_requires_manual_removal",
                      ),
                    }),
                ],
              }),
              a &&
                (0, t.jsxs)(b.EY, {
                  children: [
                    p.Localize("#feature_anticheat_bootprotection"),
                    (0, t.jsx)("div", {
                      className: Oe().BootProtectionName,
                      children: Hm(d),
                    }),
                  ],
                }),
            ],
          });
        }
        function _m(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n || !n.name
            ? null
            : (0, t.jsx)(eg, {
                appid: e,
                title: p.Localize("#feature_master_sub_app_eula", n.name),
              });
        }
        function eg(s) {
          const { appid: e, title: n } = s,
            { data: r } = (0, E._F)({ appid: e });
          return r ? (0, t.jsx)(Ya, { eulas: r.eula ?? [], title: n }) : null;
        }
        function Ya(s) {
          const { eulas: e, title: n } = s;
          if (!e?.length) return null;
          const r = n || p.Localize("#feature_third_party_eula");
          return (0, t.jsxs)("div", {
            className: (0, D.A)(Oe().ThirdPartyNotice, Oe().Eulas),
            children: [
              (0, t.jsxs)(b.EY, { children: [r, " "] }),
              e.map((a, o) =>
                (0, t.jsx)(
                  M.Ii,
                  {
                    className: Oe().Link,
                    href: a.url,
                    children: (0, t.jsx)(b.EY, {
                      color: "bronze-12",
                      children: a.name,
                    }),
                  },
                  o,
                ),
              ),
            ],
          });
        }
        function tg(s) {
          return s.extraDetails.refund_checks_ea_playtime
            ? (0, t.jsx)("div", {
                className: Oe().ThirdPartyNotice,
                children: (0, t.jsx)(b.EY, {
                  children: p.Localize("#feature_third_party_refund_playtime"),
                }),
              })
            : null;
        }
        function ng(s) {
          const { extraDetails: e } = s,
            {
              user_account_third_party: n,
              user_account_third_party_link_to_steam: r,
            } = e;
          return n
            ? (0, t.jsx)("div", {
                className: (0, D.A)(
                  Oe().ThirdPartyNotice,
                  Oe().ThirdPartyAccount,
                ),
                children: (0, t.jsxs)(b.EY, {
                  children: [
                    p.Localize("#feature_external_account_service", n),
                    !!r &&
                      (0, t.jsx)(t.Fragment, {
                        children: p.Localize(
                          "#feature_external_account_service_canlink",
                        ),
                      }),
                  ],
                }),
              })
            : null;
        }
        function sg(s) {
          const { extraDetails: e } = s,
            { ai_generation_service: n } = e;
          return !n || !n.name
            ? null
            : (0, t.jsx)("div", {
                className: Oe().ThirdPartyNotice,
                children: (0, t.jsx)(b.EY, {
                  children: (0, xa.i)(
                    p.Localize(
                      "#feature_ai_generated_content_external_account_service",
                      n.name,
                    ),
                    (0, t.jsx)(M.Ii, { href: n.url }),
                  ),
                }),
              });
        }
        var rg = i(76985),
          $t = i.n(rg),
          nr = i(48473);
        function ig(s) {
          const { appid: e, tracks: n, metadata: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            [o, c] = m.useState(n[0]?.discNumber ?? 1),
            d = m.useMemo(() => {
              let u = new Map();
              for (const g of n ?? [])
                u.has(g.discNumber)
                  ? u.get(g.discNumber)?.tracks.push(g)
                  : u.set(g.discNumber, {
                      discNumber: g.discNumber,
                      tracks: [g],
                    });
              return u;
            }, [n]);
          return !a || a.type == null || !n?.length
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)(Ut.YZ, {
                    className: $t().TrackListContainer,
                    "flow-children": "column",
                    children: [
                      d.size > 1 &&
                        (0, t.jsx)(T.Z, {
                          "flow-children": "row",
                          className: $t().DiscTabs,
                          children: Array.from(d.values()).map((u) =>
                            (0, t.jsx)(
                              Le.$,
                              {
                                variant:
                                  u.discNumber == o ? "inverted" : void 0,
                                onClick: () => c(u.discNumber),
                                children: p.Localize(
                                  "#music_disc_tab",
                                  u.discNumber,
                                ),
                              },
                              u.discNumber,
                            ),
                          ),
                        }),
                      (0, t.jsx)(qr.Qg, {
                        className: $t().TrackList,
                        children: (0, t.jsx)(ag, { tracks: d.get(o).tracks }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(Ut.YZ, {
                    className: $t().MetadataContainer,
                    "flow-children": "column",
                    children: (0, t.jsx)(qr.Qg, {
                      className: $t().Metadata,
                      children: (0, t.jsx)(dg, { metadata: r }),
                    }),
                  }),
                ],
              });
        }
        function ag(s) {
          const { tracks: e } = s;
          return (0, t.jsx)(b.EY, {
            color: "greyneutral-12",
            children: (0, t.jsxs)("table", {
              className: $t().TrackTable,
              children: [
                (0, t.jsxs)("colgroup", {
                  children: [
                    (0, t.jsx)("col", { className: $t().Number }),
                    (0, t.jsx)("col", { className: $t().Name }),
                    (0, t.jsx)("col", { className: $t().Length }),
                  ],
                }),
                (0, t.jsx)("tbody", {
                  children: e.map((n, r) =>
                    (0, t.jsx)(og, { track: n, odd: r % 2 != 0 }, r),
                  ),
                }),
              ],
            }),
          });
        }
        function og(s) {
          const { track: e, odd: n } = s;
          return (0, t.jsxs)("tr", {
            className: (0, D.A)(n && $t().Odd),
            children: [
              (0, t.jsx)("td", { children: e.trackNumber }),
              (0, t.jsx)("td", { children: lg(e) }),
              (0, t.jsx)("td", { className: $t().Length, children: cg(e) }),
            ],
          });
        }
        function lg(s) {
          if (!s.originalName || !s.originalNameLanguage)
            return s.internationalName;
          const e = L.pf.GetELanguageFallbackOrder()[0] ?? G.Bhc;
          return (0, G.wwZ)(e) == s.originalNameLanguage
            ? (0, nr.EK)(s.originalName)
            : p.Localize(
                "#music_localized_track_name",
                (0, nr.EK)(s.internationalName),
                (0, nr.EK)(s.originalName),
              );
        }
        function cg(s) {
          return p.Localize(
            "#music_album_track_duration",
            s.lengthMinutes,
            s.lengthSeconds.toString().padStart(2, "0"),
          );
        }
        function dg(s) {
          const { metadata: e } = s;
          return e
            ? (0, t.jsxs)(O.s, {
                direction: "column",
                className: $t().Credits,
                marginTop: "4",
                children: [
                  (0, t.jsx)(b.EY, {
                    size: "5",
                    weight: "heavy",
                    children: p.Localize("#music_album_metadata"),
                  }),
                  (0, t.jsx)(qs.x, {
                    columns: "max-content max-content",
                    gapX: "2",
                    margin: "2",
                    children: e.map((n) =>
                      (0, t.jsx)(ug, { metadata: n }, n.field),
                    ),
                  }),
                ],
              })
            : null;
        }
        function ka(s, e) {
          return s.find((n) => n.language == e);
        }
        function ug(s) {
          const { metadata: e } = s;
          if (!e || !e.values?.length) return null;
          const { field: n, values: r } = e,
            a = "#music_album_metadata_key_" + n,
            o = L.pf.GetELanguageFallbackOrder()[0] ?? G.Bhc,
            c = ka(r, o) || ka(r, G.Bhc);
          return c
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(b.EY, {
                    className: $t().CreditName,
                    children: p.Localize(a),
                  }),
                  (0, t.jsx)(b.EY, { children: (0, nr.EK)(c.value) }),
                ],
              })
            : null;
        }
        var sr = i(84909),
          Hn = i(43462),
          mg = i(19218),
          ei = i.n(mg);
        const gg = new fs.wd("InterestButtons");
        function pg(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n || n.type == null
            ? null
            : (0, t.jsx)(T.Z, {
                className: ei().ButtonRow,
                "flow-children": "column",
                children: (0, t.jsxs)(O.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, t.jsx)(vg, { appid: e }),
                    (0, t.jsxs)(O.s, {
                      direction: "row",
                      width: "100%",
                      gap: "1",
                      children: [
                        (0, t.jsx)(fg, { appid: e }),
                        (0, t.jsx)(hg, { appid: e }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function ti(s) {
          const { options: e, children: n } = s;
          return (0, t.jsxs)("span", {
            className: ei().WidestChildContainer,
            children: [
              e.map((r, a) =>
                (0, t.jsx)("span", { className: ei().Hidden, children: r }, a),
              ),
              (0, t.jsx)("span", { children: n }),
            ],
          });
        }
        function Va() {
          return (0, t.jsx)(le.az, {
            width: "16px",
            marginRight: "1",
            marginTop: "1",
            children: (0, t.jsx)(Fe.MGO, {}),
          });
        }
        function fg(s) {
          const { appid: e } = s,
            { data: n } = ys(e),
            r = Fl(e);
          if (!n) return null;
          const { following: a = !1 } = n,
            o = (u) => {
              r.mutateAsync({ following: u, old_interest: n });
            },
            c = p.Localize("#button_follow"),
            d = (0, t.jsxs)(O.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, t.jsx)(Va, {}), p.Localize("#button_follow_undo")],
            });
          return (0, t.jsx)(le.az, {
            flexGrow: "1",
            children: (0, t.jsxs)(Le.$, {
              color: "greyneutral",
              onClick: () => o(!a),
              width: "100%",
              children: [
                (0, t.jsx)(le.az, {
                  children: a ? (0, t.jsx)(N.c9e, {}) : (0, t.jsx)(N.pPV, {}),
                }),
                (0, t.jsx)(ti, { options: [c, d], children: a ? d : c }),
              ],
            }),
          });
        }
        function hg(s) {
          const { appid: e } = s,
            { data: n } = ys(e),
            r = Dl(e),
            [a, o] = m.useState(!1);
          if (!n) return null;
          const { ignored: c = !1, ignored_reason: d } = n,
            u = !!c && (d ?? !1),
            g = (v, I) => {
              gg.Info("ignoring", v, I),
                r.mutateAsync({
                  ignored: v,
                  ignored_reason: I,
                  old_interest: n,
                });
            },
            f = (v) => {
              g(v !== !1, v === !1 ? void 0 : v), o(!1);
            },
            h = p.Localize("#button_ignore"),
            x = (0, t.jsxs)(O.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, t.jsx)(Va, {}), p.Localize("#button_ignore_undo")],
            });
          return (0, t.jsx)(le.az, {
            flexGrow: "1",
            children: (0, t.jsxs)(sr.AM.Root, {
              open: a,
              onOpenChange: o,
              children: [
                (0, t.jsx)(sr.AM.Anchor, {
                  children: (0, t.jsx)(Le.$, {
                    color: "greyneutral",
                    onClick: () => o(!a),
                    width: "100%",
                    children: (0, t.jsx)(ti, {
                      options: [h, x],
                      children: c ? x : h,
                    }),
                  }),
                }),
                (0, t.jsx)(sr.AM.Positioner, {
                  children: (0, t.jsx)(sr.AM.FocusManager, {
                    children: (0, t.jsx)(le.az, {
                      border: "1",
                      borderColor: "blue-7",
                      background: "greyneutral-4",
                      elevation: "1",
                      padding: "1",
                      children: (0, t.jsx)(ie.q, {
                        children: (0, t.jsxs)(O.s, {
                          direction: "column",
                          children: [
                            (0, t.jsx)(ni, {
                              type: Hn.RI.$m,
                              currentType: u,
                              select: f,
                            }),
                            (0, t.jsx)(ni, {
                              type: Hn.RI.yK,
                              currentType: u,
                              select: f,
                            }),
                            (0, t.jsx)(ni, {
                              type: !1,
                              currentType: u,
                              select: f,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function yg(s) {
          switch (s) {
            default:
            case !1:
              return "#ignore_reason_none_header";
            case Hn.RI.$m:
              return "#ignore_reason_generic_header";
            case Hn.RI.yK:
              return "#ignore_reason_otherstore_header";
          }
        }
        function xg(s) {
          switch (s) {
            default:
            case !1:
              return "#ignore_reason_none_desc";
            case Hn.RI.$m:
              return "#ignore_reason_generic_desc";
            case Hn.RI.yK:
              return "#ignore_reason_otherstore_desc";
          }
        }
        function ni(s) {
          const { type: e, currentType: n, select: r } = s;
          return (0, t.jsx)(T.Z, {
            focusable: !0,
            onActivate: () => r(e),
            autoFocus: n == Hn.RI.$m,
            children: (0, t.jsxs)(O.s, {
              direction: "row",
              padding: "2",
              maxWidth: "275px",
              gap: "2",
              children: [
                (0, t.jsx)(le.az, {
                  minWidth: "16px",
                  maxWidth: "16px",
                  children:
                    e === n &&
                    (0, t.jsx)(b.EY, { children: (0, t.jsx)(Fe.MGO, {}) }),
                }),
                (0, t.jsxs)(O.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, t.jsx)(b.EY, {
                      color: "greyneutral-12",
                      weight: "heavy",
                      children: p.Localize(yg(e)),
                    }),
                    (0, t.jsx)(b.EY, {
                      color: "greyneutral-11",
                      children: p.Localize(xg(e)),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function vg(s) {
          const { appid: e } = s,
            [n, r] = m.useState(!1),
            a = (0, rn.LH)(),
            o = (0, t.jsxs)(O.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, t.jsx)(le.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, t.jsx)(N.T4m, {}),
                }),
                p.Localize("#button_wishlist"),
              ],
            }),
            c = (0, t.jsxs)(O.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, t.jsx)(le.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, t.jsx)(N.qnF, {}),
                }),
                p.Localize("#button_wishlist_undo"),
              ],
            });
          return (0, t.jsx)(le.az, {
            children: (0, t.jsxs)(T.Z, {
              onSecondaryButton: () => r(!0),
              onSecondaryActionDescription: p.Localize(
                "#wishlist_manage_categories",
              ),
              children: [
                (0, t.jsx)(Yr, {
                  appid: e,
                  bAllowRemove: !0,
                  width: "100%",
                  children: (d) =>
                    (0, t.jsx)(ti, { options: [o, c], children: d ? c : o }),
                }),
                n &&
                  (0, t.jsx)(ia, {
                    appid: e,
                    steamid: a,
                    onClose: () => r(!1),
                  }),
              ],
            }),
          });
        }
        var jg = i(60993),
          rr = i.n(jg),
          ir = i(21079),
          si = i(58612),
          bg = i(20125),
          Bg = i(9094),
          Qa = i(74679),
          Ig = i(20117);
        function Ts(s, e) {
          return (s || []).map((n) => ({
            accountid: Ig.b2.ToAccountID(n.steamid),
            nMinutesPlayedRecent: n.minutes_played || 0,
            nMinutesPlayedForever: n.minutes_played_forever || 0,
            bInGame: e,
          }));
        }
        function $a(s) {
          return Ts(s.in_wishlist, !1);
        }
        function Za(s, e) {
          const n = Ts(s.in_game, !0).concat(
            Ts(s.played_recently, !1),
            Ts(s.played_ever, !1),
            Ts(s.owns, !1),
          );
          return e ? n.filter((r) => r.nMinutesPlayedForever > 0) : n;
        }
        function Eg(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            { data: n } = (0, si.Nd)(s);
          return m.useMemo(
            () =>
              !e || !n
                ? null
                : {
                    rgFriendsThatOwn: Za(n, !!e.is_free),
                    rgFriendsThatWant: $a(n),
                  },
            [e, n],
          );
        }
        var Pg = i(35675),
          Ss = i(60001);
        async function Mg(s, e) {
          const n = (0, bg.Am)(F.TS.STORE_BASE_URL, e, F.iA.country_code),
            o = (await (await fetch(n)).json()).rgCurations[s] || {};
          return Object.entries(o).map((c) => ({
            clan_accountid: Number(c[0]),
            recommendation: c[1],
          }));
        }
        function Tg(s) {
          return (0, an.I)({
            queryKey: ["UserCurations" + F.iA.accountid],
            queryFn: async () => Mg(s, F.iA.accountid),
            enabled: !!F.iA.accountid,
          });
        }
        function Sg(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            { data: n } = (0, E.wl)({ appid: s }),
            { data: r } = (0, E.xz)({ appid: s }),
            { data: a } = (0, E.ik)({ appid: s }),
            { data: o } = (0, E.Zx)({ appid: s }),
            { data: c } = (0, ir.Dk)(s),
            { data: d } = (0, Qa.yt)(),
            { data: u } = (0, ir.zo)(s),
            { data: g } = (0, ir.Mu)(),
            { data: f } = (0, si.Nd)(s),
            { data: h } = (0, _r.lI)(),
            { data: x } = (0, Bg.nU)(F.iA.steamid),
            { data: v } = (0, Pg.Gw)(),
            { data: I } = Tg(s);
          return m.useMemo(() => {
            if (
              !e ||
              !n ||
              !r ||
              !a ||
              !o ||
              !c ||
              !d ||
              !u ||
              !g ||
              !f ||
              !h ||
              !x ||
              !v ||
              !I
            )
              return null;
            const B = { appid: s };
            (B.nCurrentUserPlaytimeMins =
              f.your_info?.minutes_played_forever || 0),
              (B.bCurrentUserOwns = !!f.your_info?.owned),
              (B.bFromInteractiveRecommender = u.bRecommendedByIR),
              B.bCurrentUserOwns ||
                ((B.rgSimilarApps = u.arrSimilarPlayedApps || []),
                B.rgSimilarApps?.length == 0 &&
                  (B.rgMatchingTagsPlayed =
                    d.filter((W) => r?.find((je) => je.tagid == W.tagid)) ||
                    []));
            let A =
              (h.preferences?.review_score_preference == kn.Wf.Yy &&
                a.summary_unfiltered) ||
              a.summary_filtered;
            const S = A?.review_score || ee.j6.sZ;
            if (
              ((B.bPositiveReviews = S > ee.j6.lo),
              (B.bNegativeReviews = S > ee.j6.sZ && S < ee.j6.hc),
              (B.eReviewScore = S),
              (B.strReviewScoreLabel = A?.review_score_label),
              e.type != ee.uE.Hk && e.type != ee.uE.Ov)
            ) {
              let W = h.preferences?.primary_language;
              (W === void 0 || W == G.xPp) && (W = (0, G.sfN)(F.TS.LANGUAGE)),
                (B.bUserLanguageSupported = !!o.find(
                  (je) => je.elanguage == W,
                ));
            } else B.bUserLanguageSupported = !0;
            const w = g.GetItems().findIndex((W) => W.GetAppID() == s);
            w != -1 && (w < 25 ? (B.bTopSeller = !0) : (B.bPopular = !0));
            const Y = !!x.items.find((W) => W.appid == s);
            return (
              (B.bWishlisted = Y),
              (B.rgExcludedTags =
                h.tag_preferences?.tags_to_exclude?.filter((W) =>
                  r?.find((je) => je.tagid == W.tagid),
                ) || []),
              (B.rgPublishersFollowed = n.publishers?.filter(
                (W) =>
                  W.creator_clan_account_id &&
                  v?.get(W.creator_clan_account_id)?.is_creator,
              )),
              (B.rgDevelopersFollowed = n.developers?.filter(
                (W) =>
                  W.creator_clan_account_id &&
                  v?.get(W.creator_clan_account_id)?.is_creator,
              )),
              (B.rgFranchisesFollowed = n.franchises?.filter(
                (W) =>
                  W.creator_clan_account_id &&
                  v?.get(W.creator_clan_account_id)?.is_creator,
              )),
              (B.rgPublishersFollowed = B.rgPublishersFollowed?.filter(
                (W) =>
                  !B.rgDevelopersFollowed?.find(
                    (je) =>
                      je.creator_clan_account_id == W.creator_clan_account_id,
                  ),
              )),
              (B.rgCuratorsPositive = I.filter(
                (W) => W.recommendation == Ss.tV.$D,
              ).map((W) => W.clan_accountid)),
              (B.rgCuratorsNegative = I.filter(
                (W) => W.recommendation == Ss.tV.qP,
              ).map((W) => W.clan_accountid)),
              (B.rgFriendsRecommended = c.accountids_recommended || []),
              (B.rgFriendsDisrecommended = c.accountids_not_recommended || []),
              (B.rgFriendsWishlisted = $a(f).map((W) => W.accountid)),
              (B.rgFriendsOwned = Za(f, !!e.is_free).map((W) => W.accountid)),
              B
            );
          }, [s, n, I, v, f, c, g, e, r, d, a, h, u, o, x]);
        }
        function ar(s, e = !1) {
          return (s / 60).toFixed(e || s < 1200 ? 1 : 0);
        }
        var Lg = i(13290),
          Un = i.n(Lg),
          un = ((s) => (
            (s[(s.Info = 0)] = "Info"),
            (s[(s.Positive = 1)] = "Positive"),
            (s[(s.Negative = 2)] = "Negative"),
            s
          ))(un || {});
        function is(s) {
          const { type: e, description: n, children: r } = s;
          let a = (0, t.jsx)(Fe.$$j, {});
          return (
            e == 1
              ? (a = (0, t.jsx)(Fe.MGO, { className: Un().Positive }))
              : e == 2 && (a = (0, t.jsx)(N.tmm, { className: Un().Negative })),
            (0, t.jsxs)("div", {
              className: Un().Reason,
              children: [
                (0, t.jsxs)("div", {
                  className: Un().TopLine,
                  children: [
                    (0, t.jsx)("div", { className: Un().Icon, children: a }),
                    (0, t.jsx)("div", {
                      className: Un().Description,
                      children: n,
                    }),
                  ],
                }),
                r &&
                  (0, t.jsx)("div", {
                    className: Un().Additional,
                    children: r,
                  }),
                (0, t.jsx)("div", { className: Un().Divider }),
              ],
            })
          );
        }
        function ri(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(is, { type: 0, description: e, children: n });
        }
        function Ls(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(is, { type: 1, description: e, children: n });
        }
        function Ja(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(is, { type: 2, description: e, children: n });
        }
        var Og = i(2699),
          Ag = i.n(Og);
        function Xa(s) {
          const { children: e } = s;
          return (0, t.jsx)(T.Z, { className: Ag().AvatarList, children: e });
        }
        var Os = i(85978),
          As = i(93191),
          ii = i(30986),
          zg = i(77614),
          or = i.n(zg);
        function Ha(s) {
          const e = (0, rn.LH)(),
            { data: n } = (0, Os.jn)(e);
          return (0, As.n)(n, e) + `/friendsthatplay/${s}`;
        }
        function qa(s) {
          const { accountid: e, reviewAppId: n, bShowName: r, friend: a } = s,
            o = (0, Os.jn)(e);
          if (!o.data || !o.data.public_data) return null;
          const c =
              n && o.data ? `${(0, As.n)(o.data)}/recommended/${n}` : void 0,
            d = o.data.public_data.persona_name;
          return (0, t.jsxs)(M.Ii, {
            className: or().FriendAvatarLink,
            href: c || (0, As.n)(o.data),
            "data-miniprofile": e,
            children: [
              (0, t.jsx)(ii.wm, { playerLinkDetails: o.data, alt: d }),
              r &&
                d &&
                (0, t.jsxs)("div", {
                  className: or().Details,
                  children: [
                    (0, t.jsx)("div", { className: or().Name, children: d }),
                    a && (0, t.jsx)(Ng, { friend: a }),
                  ],
                }),
            ],
          });
        }
        function Ng(s) {
          const { friend: e } = s;
          let n;
          return (
            e.bInGame
              ? (n = p.Localize("#AppPage_FriendOwnership_NowPlaying"))
              : e.nMinutesPlayedRecent > 0 &&
                (n = p.Localize(
                  "#AppPage_FriendOwnership_PlayedHours",
                  ar(e.nMinutesPlayedRecent, !0),
                )),
            n
              ? (0, t.jsx)("div", { className: or().Playtime, children: n })
              : null
          );
        }
        function Dg(s) {
          const { accountid: e, appid: n, bLinkToReview: r } = s;
          return (0, t.jsx)(qa, { accountid: e, reviewAppId: r ? n : void 0 });
        }
        function Fg(s) {
          const { rgFriends: e, appid: n, bLinkToReview: r } = s;
          return (0, t.jsx)(Xa, {
            children: e.map((a) =>
              (0, t.jsx)(Dg, { accountid: a, appid: n, bLinkToReview: r }, a),
            ),
          });
        }
        function lr(s) {
          const {
              type: e,
              appid: n,
              strLocTag: r,
              rgFriends: a,
              nMax: o = 5,
              bLinkToReview: c,
            } = s,
            d = Ha(n);
          if (!a || a.length == 0) return null;
          let u = (0, ve.xh)(
            p.LocalizePlural(r, a.length),
            (0, t.jsx)(M.Ii, { href: d }),
          );
          return (0, t.jsx)(is, {
            type: e,
            description: u,
            children: (0, t.jsx)(Fg, {
              rgFriends: a.slice(0, o),
              appid: n,
              bLinkToReview: c,
            }),
          });
        }
        var Wg = i(55483);
        function wg(s) {
          const { url: e, avatarUrl: n, alt: r } = s;
          return (0, t.jsx)(Gn.he, {
            toolTipContent: r,
            children: (0, t.jsx)(M.Ii, {
              href: e,
              children: (0, t.jsx)(ii.Ul, { avatarURL: n, alt: r }),
            }),
          });
        }
        function Rg(s) {
          const { accountid: e, appid: n, fnURLGenerator: r } = s,
            a = (0, Wg.TB)(e);
          if (!a.data) return null;
          const o = r(a.data, n);
          return (0, t.jsx)(wg, {
            url: o,
            avatarUrl: a.data.avatar_full_url,
            alt: a.data.group_name,
          });
        }
        function Ug(s) {
          const { rgCurators: e, appid: n, fnURLGenerator: r } = s;
          return (0, t.jsx)(Xa, {
            children: e.map((a) =>
              (0, t.jsx)(Rg, { accountid: a, appid: n, fnURLGenerator: r }, a),
            ),
          });
        }
        function ai(s) {
          const {
              type: e,
              fnURLGenerator: n,
              appid: r,
              strLocTag: a,
              rgCurators: o,
              nMax: c = 6,
            } = s,
            d = (0, Qt.aL)(
              F.TS.STORE_BASE_URL + `curators/mycuratorsreviewing/?appid=${r}`,
            );
          if (!o || o.length == 0) return null;
          let u = (0, ve.xh)(p.Localize(a), (0, t.jsx)(M.Ii, { href: d }));
          return (0, t.jsx)(is, {
            type: e,
            description: u,
            children: (0, t.jsx)(Ug, {
              rgCurators: o.slice(0, c),
              appid: r,
              fnURLGenerator: n,
            }),
          });
        }
        var Cg = i(57102),
          _a = i.n(Cg);
        function Kg(s) {
          const { tag: e } = s;
          return (0, t.jsx)(M.Ii, {
            className: _a().Tag,
            href: `${F.TS.STORE_BASE_URL}tags/${(0, G.wwZ)((0, G.sfN)(F.TS.LANGUAGE))}/${e.name}`,
            children: e.name,
          });
        }
        function eo(s) {
          const { rgTags: e } = s;
          return e.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: _a().TagList,
                children: e.map((n) => (0, t.jsx)(Kg, { tag: n }, n.tagid)),
              });
        }
        var Gg = i(54629),
          cr = i.n(Gg),
          Yg = i(80702);
        function kg(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.lv)({ appid: e });
          if (!n || !r) return null;
          const a = (0, gs.b0)(r, "community_icon");
          return (0, t.jsx)(Yg.Q, {
            id: { appid: e },
            bPreventNavigation: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: { minWidth: "320px", zIndex: 5e3 },
            },
            children: (0, t.jsxs)(Wn.p, {
              className: cr().AppIconAndName,
              storeItem: n,
              children: [
                (0, t.jsx)("div", {
                  className: cr().AppIcon,
                  children: a && (0, t.jsx)("img", { src: a, alt: "" }),
                }),
                (0, t.jsx)("div", {
                  className: cr().AppName,
                  children: n.name,
                }),
              ],
            }),
          });
        }
        function Vg(s) {
          const { rgApps: e } = s;
          return e.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: cr().AppList,
                children: e.map((n) =>
                  (0, t.jsx)(kg, { appid: n.appid }, n.appid),
                ),
              });
        }
        function Qg(s) {
          const { appid: e, friendsRecommended: n, recommendedTags: r } = s,
            [a, o] = m.useState(!1),
            c = (0, ir.ws)(),
            d = (0, Qa.Fx)();
          return (
            m.useEffect(() => {
              c(e, n), d(r), o(!0);
            }, [e, n, r, c, d]),
            m.use(p.Ready()),
            m.use(Z.Z.Ready()),
            a
              ? (0, t.jsx)(m.Suspense, {
                  children: (0, t.jsx)(Zg, { appid: e }),
                })
              : null
          );
        }
        function to(s, e) {
          const { data: n } = (0, E.J$)({ appid: e.appid });
          return p.GetAppTypePluralLocKey(s, n?.type || ee.uE.HT);
        }
        function $g(s, e) {
          const { data: n } = (0, E.J$)({ appid: e.appid });
          return p.GetAppTypeLocKey(s, n?.type || ee.uE.HT);
        }
        function oi(s, e) {
          const n = $g(s, e);
          return p.Localize(n);
        }
        function Zg(s) {
          const { appid: e } = s,
            n = Sg(e);
          return n
            ? (0, t.jsxs)(Ut.YZ, {
                className: rr().RecommendationReasonsDisplay,
                navEntryPreferPosition: V.iU.PREFERRED_CHILD,
                children: [
                  (0, t.jsx)(Jg, { reasons: n }),
                  (0, t.jsx)(Xg, { reasons: n }),
                  (0, t.jsx)(_g, { reasons: n }),
                  (0, t.jsx)(ep, { reasons: n }),
                  (0, t.jsx)(tp, { reasons: n }),
                  (0, t.jsx)(sp, { reasons: n }),
                  (0, t.jsx)(np, { reasons: n }),
                  (0, t.jsx)(rp, { reasons: n }),
                  (0, t.jsx)(ip, { reasons: n }),
                  (0, t.jsx)(cp, { reasons: n }),
                  (0, t.jsx)(dp, { reasons: n }),
                  (0, t.jsx)(up, { reasons: n }),
                  (0, t.jsx)(mp, { reasons: n }),
                  (0, t.jsx)(gp, { reasons: n }),
                  (0, t.jsx)(pp, { reasons: n }),
                  (0, t.jsx)(fp, { reasons: n }),
                  (0, t.jsx)(hp, { reasons: n }),
                  (0, t.jsx)(yp, { reasons: n }),
                ],
              })
            : null;
        }
        function Jg(s) {
          const { reasons: e } = s,
            n = oi("#AppPage_RecommendationReason_Header", e);
          return (0, t.jsx)(tr, { text: n });
        }
        function Xg(s) {
          const { reasons: e } = s;
          if (e.nCurrentUserPlaytimeMins > 0) {
            const n = ar(e.nCurrentUserPlaytimeMins);
            return (0, t.jsx)(ri, {
              description: p.Localize(
                "#AppPage_RecommendationReason_Playtime",
                n,
              ),
            });
          } else if (e.bCurrentUserOwns)
            return (0, t.jsx)(ri, {
              description: p.Localize(
                "#AppPage_RecommendationReason_InLibrary",
              ),
            });
          return null;
        }
        function Hg(s) {
          const { reasons: e } = s,
            n = oi("#AppPage_RecommendationReason_MatchingApps", e);
          return (0, t.jsx)(Ls, {
            description: n,
            children: (0, t.jsx)(Vg, { rgApps: e.rgSimilarApps }),
          });
        }
        function qg(s) {
          const { reasons: e } = s,
            n = oi("#AppPage_RecommendationReason_MatchingTags", e);
          return (0, t.jsx)(Ls, {
            description: n,
            children: (0, t.jsx)(eo, { rgTags: e.rgMatchingTagsPlayed }),
          });
        }
        function _g(s) {
          const { reasons: e } = s;
          return e.rgSimilarApps && e.rgSimilarApps.length > 0
            ? (0, t.jsx)(Hg, { reasons: e })
            : e.rgMatchingTagsPlayed && e.rgMatchingTagsPlayed.length > 0
              ? (0, t.jsx)(qg, { reasons: e })
              : null;
        }
        function ep(s) {
          const { reasons: e } = s;
          return e.bFromInteractiveRecommender
            ? (0, t.jsx)(Ls, {
                description: p.Localize(
                  "#AppPage_RecommendationReason_FromInteractiveRecommender",
                ),
              })
            : null;
        }
        function tp(s) {
          const { reasons: e } = s;
          return e.bPositiveReviews || e.bNegativeReviews
            ? (0, t.jsx)(is, {
                type: e.bPositiveReviews ? un.Positive : un.Negative,
                description: (0, ve.xh)(
                  p.Localize(
                    "#AppPage_RecommendationReason_UserReviews",
                    e.strReviewScoreLabel,
                  ),
                  (0, t.jsx)("span", {
                    className: (0, D.A)(
                      rr().ReviewScore,
                      e.bPositiveReviews ? rr().Positive : rr().Negative,
                    ),
                  }),
                ),
              })
            : null;
        }
        function np(s) {
          const { reasons: e } = s;
          return !e.bTopSeller && !e.bPopular
            ? null
            : (0, t.jsx)(Ls, {
                description: p.Localize(
                  e.bTopSeller
                    ? "#AppPage_RecommendationReason_TopSeller"
                    : "#AppPage_RecommendationReason_Popular",
                ),
              });
        }
        function sp(s) {
          const { reasons: e } = s;
          return e.bUserLanguageSupported
            ? null
            : (0, t.jsx)(Ja, {
                description: (0, ve.xh)(
                  p.Localize(
                    "#AppPage_RecommendationReason_LanguageUnsupported",
                  ),
                  (0, t.jsx)(M.Ii, {
                    href: `${F.TS.STORE_BASE_URL}account/languagepreferences/`,
                  }),
                ),
              });
        }
        function rp(s) {
          const { reasons: e } = s,
            n = (0, Qt.aL)(F.TS.STORE_BASE_URL + "wishlist");
          return e.bWishlisted
            ? (0, t.jsx)(Ls, {
                description: (0, ve.xh)(
                  p.Localize("#AppPage_RecommendationReason_Wishlisted"),
                  (0, t.jsx)(M.Ii, { href: n }),
                ),
              })
            : null;
        }
        function ip(s) {
          const { reasons: e } = s;
          return !e.rgExcludedTags || e.rgExcludedTags.length == 0
            ? null
            : (0, t.jsx)(Ja, {
                description: (0, ve.xh)(
                  p.Localize("#AppPage_RecommendationReason_ExcludedTags"),
                  (0, t.jsx)(M.Ii, {
                    href: `${F.TS.STORE_BASE_URL}account/preferences`,
                  }),
                ),
                children: (0, t.jsx)(eo, { rgTags: e.rgExcludedTags }),
              });
        }
        function ap(s, e) {
          return s.vanity_url
            ? `${F.TS.STORE_BASE_URL}${e}/${s.vanity_url}`
            : `${F.TS.STORE_BASE_URL}curator/${s.clanAccountID}`;
        }
        function op(s, e, n) {
          return `${ap(s, e)}?appid=${n}`;
        }
        function lp(s) {
          return s.vanity_url
            ? `${F.TS.COMMUNITY_BASE_URL}groups/${s.vanity_url}`
            : `${F.TS.COMMUNITY_BASE_URL}gid/${s.clanSteamID?.ConvertTo64BitString()}`;
        }
        function no(s, e) {
          return `${lp(s)}/curation/app/${e}`;
        }
        function li(s) {
          const { reasons: e, type: n, strLocTag: r, rgCreators: a } = s;
          if (!a || a.length == 0) return null;
          const o = (c, d) => op(c, n, d);
          return (0, t.jsx)(ai, {
            appid: e.appid,
            type: un.Positive,
            fnURLGenerator: o,
            strLocTag: r,
            rgCurators: a.map((c) => c.creator_clan_account_id),
          });
        }
        function cp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(li, {
            reasons: e,
            type: "developer",
            strLocTag: "#AppPage_RecommendationReason_FollowedDeveloper",
            rgCreators: e?.rgDevelopersFollowed,
          });
        }
        function dp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(li, {
            reasons: e,
            type: "publisher",
            strLocTag: "#AppPage_RecommendationReason_FollowedPublisher",
            rgCreators: e?.rgPublishersFollowed,
          });
        }
        function up(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(li, {
            reasons: e,
            type: "franchise",
            strLocTag: "#AppPage_RecommendationReason_FollowedFranchise",
            rgCreators: e?.rgFranchisesFollowed,
          });
        }
        function mp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ai, {
            appid: e.appid,
            type: un.Positive,
            fnURLGenerator: no,
            strLocTag: "#AppPage_RecommendationReason_CuratorRecommended",
            rgCurators: e.rgCuratorsPositive,
          });
        }
        function gp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ai, {
            appid: e.appid,
            type: un.Negative,
            fnURLGenerator: no,
            strLocTag: "#AppPage_RecommendationReason_CuratorDisrecommended",
            rgCurators: e.rgCuratorsNegative,
          });
        }
        function pp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(lr, {
            appid: e.appid,
            type: un.Positive,
            strLocTag: "#AppPage_RecommendationReason_FriendsRecommended",
            rgFriends: e.rgFriendsRecommended,
            bLinkToReview: !0,
          });
        }
        function fp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(lr, {
            appid: e.appid,
            type: un.Negative,
            strLocTag: "#AppPage_RecommendationReason_FriendsDisrecommended",
            rgFriends: e.rgFriendsDisrecommended,
            bLinkToReview: !0,
          });
        }
        function hp(s) {
          const { reasons: e } = s,
            n = to("#AppPage_RecommendationReason_FriendsWishlisted", e);
          return (0, t.jsx)(lr, {
            appid: e.appid,
            type: un.Info,
            strLocTag: n,
            rgFriends: e.rgFriendsWishlisted,
          });
        }
        function yp(s) {
          const { reasons: e } = s,
            n = to("#AppPage_RecommendationReason_FriendsOwned", e);
          return (0, t.jsx)(lr, {
            appid: e.appid,
            type: un.Info,
            strLocTag: n,
            rgFriends: e.rgFriendsOwned,
          });
        }
        var xp = i(16836),
          ci = i.n(xp);
        const vp = 6,
          jp = 2;
        function bp(s) {
          const { appid: e, bCanShowOwners: n } = s,
            r = Eg(e),
            { data: a } = (0, E.J$)({ appid: e }),
            o = r?.rgFriendsThatWant || [],
            c = n ? r?.rgFriendsThatOwn || [] : [];
          if (o.length == 0 && c.length == 0) return null;
          m.use(p.Ready());
          const d = a?.type || ee.uE.HT;
          return (0, t.jsxs)(Ut.YZ, {
            className: ci().FriendOwnership,
            "flow-children": "column",
            children: [
              o.length > 0 &&
                (0, t.jsx)(so, {
                  appid: e,
                  strLocTag: p.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsWishlisted",
                    d,
                  ),
                  rgFriends: o,
                  bShowNames: o.length <= jp,
                  bShowPlaytime: !1,
                }),
              c.length > 0 &&
                (0, t.jsx)(so, {
                  appid: e,
                  strLocTag: p.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsOwned",
                    d,
                  ),
                  rgFriends: c,
                  bShowNames: !0,
                  bShowPlaytime: !0,
                }),
            ],
          });
        }
        function so(s) {
          const {
              appid: e,
              strLocTag: n,
              rgFriends: r,
              bShowNames: a,
              bShowPlaytime: o,
            } = s,
            c = Ha(e),
            d = (0, ve.xh)(
              p.LocalizePlural(n, r.length),
              (0, t.jsx)(M.Ii, { href: c }),
            );
          return (0, t.jsx)(ri, {
            description: d,
            children: (0, t.jsx)(T.Z, {
              className: (0, D.A)(ci().FriendList, a && ci().WithNames),
              "flow-children": a ? "grid" : "row",
              children: r
                .slice(0, vp)
                .map((u) =>
                  (0, t.jsx)(
                    qa,
                    {
                      accountid: u.accountid,
                      bShowName: a,
                      friend: o ? u : void 0,
                    },
                    u.accountid,
                  ),
                ),
            }),
          });
        }
        var Bp = i(35413),
          Ip = i(78747),
          At = i.n(Ip);
        function dr(s) {
          if (!s || !/^https?:/.test(s)) return;
          if (!(0, Qs.p)(s)) return s;
          const e = (0, Qs.E)(s);
          return C.TS.IN_CLIENT ? "steam://openurl_external/" + e : e;
        }
        function Ep(s) {
          const { curator: e, recommendation: n } = s,
            r = oo(n.link_url),
            a = dr(n.link_url),
            o = !!r?.iframe || !!r?.image;
          return (0, t.jsxs)("div", {
            className: At().Container,
            children: [
              (0, t.jsx)("h2", {
                children: p.Localize("#AppPage_Curator_Title"),
              }),
              (0, t.jsxs)(Ut.YZ, {
                "flow-children": "row",
                className: At().Review,
                children: [
                  o &&
                    (0, t.jsxs)(O.s, {
                      direction: "column",
                      className: At().Video,
                      gap: "1",
                      align: "center",
                      children: [
                        r.iframe &&
                          (0, t.jsx)("iframe", {
                            src: r.iframe,
                            frameBorder: "0",
                            allowFullScreen: !0,
                            title: "referring_curator_video_embed",
                          }),
                        r.image &&
                          (0, t.jsxs)(M.Ii, {
                            href: a,
                            className: At().VideoThumbnail,
                            children: [
                              (0, t.jsx)("img", {
                                src: r.image,
                                alt: p.Localize(
                                  "#AppPage_Curator_VideoThumbnail",
                                ),
                              }),
                              (0, t.jsx)("div", {
                                className: At().PlayOverlay,
                                children: (0, t.jsx)(Fe.jGG, {}),
                              }),
                            ],
                          }),
                        (0, t.jsx)(ro, { ...s }),
                      ],
                    }),
                  (0, t.jsx)("div", {
                    className: (0, D.A)(At().DetailRight, !o && At().NoVideo),
                    children: (0, t.jsx)("div", {
                      className: At().Blurb,
                      children: (0, t.jsxs)(O.s, {
                        direction: "column",
                        gap: "1",
                        children: [
                          (0, t.jsxs)(O.s, {
                            direction: "row",
                            gap: "1",
                            children: [
                              (0, t.jsx)("div", {
                                className: At().Avatar,
                                children: (0, t.jsx)("img", {
                                  src: (0, Bp.t)(e.avatar_sha, "full"),
                                  alt: "",
                                }),
                              }),
                              (0, t.jsxs)(O.s, {
                                direction: "column",
                                flexGrow: "1",
                                children: [
                                  (0, t.jsx)(Pp, {
                                    state: n.recommendation_state,
                                  }),
                                  (0, t.jsx)(b.EY, {
                                    size: "2",
                                    color: "greyneutral-11",
                                    children: (0, t.jsxs)(O.s, {
                                      direction: "row",
                                      gap: "1",
                                      children: [
                                        (0, ve.xh)(
                                          p.Localize(
                                            "#AppPage_Curator_By",
                                            e.name,
                                          ),
                                          (0, t.jsx)(M.Ii, { href: e.link }),
                                        ),
                                        (0, Lt.$z)(n.time_recommended, {
                                          month: "long",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)(O.s, {
                                direction: "row",
                                children: [
                                  !!n.received_for_free &&
                                    (0, t.jsx)(io, {
                                      strToolTip: p.Localize(
                                        "#AppPage_Curator_ReceivedForFree",
                                      ),
                                      strIcon: "icon_free.png",
                                    }),
                                  !!n.received_compensation &&
                                    (0, t.jsx)(io, {
                                      strToolTip: p.Localize(
                                        "#AppPage_Curator_ReceivedCompensation",
                                      ),
                                      strIcon: "icon_compensation.png",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)(Mp, { strBlurb: n.blurb }),
                          !o &&
                            (0, t.jsx)(O.s, {
                              direction: "row",
                              children: (0, t.jsx)(ro, { ...s }),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function ro(s) {
          const { recommendation: e, curator_preferences: n } = s,
            r = oo(e.link_url),
            a = dr(e.link_url),
            o = dr(n?.discussion_url),
            c = !!r?.iframe || !!r?.image;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              a &&
                (0, t.jsx)(ao, {
                  strURL: a,
                  bPlayIcon: c,
                  strText: p.Localize(
                    c
                      ? "#AppPage_Curator_WatchFullReview"
                      : "#AppPage_Curator_ReadFullReview",
                  ),
                }),
              o &&
                (0, t.jsx)(ao, {
                  strURL: o,
                  strText: p.Localize("#AppPage_Curator_Discuss"),
                }),
            ],
          });
        }
        function io(s) {
          const { strToolTip: e, strIcon: n } = s;
          return (0, t.jsx)(Gn.he, {
            toolTipContent: e,
            children: (0, t.jsx)("div", {
              className: At().CuratorReceived,
              children: (0, t.jsx)("img", {
                src: `${C.TS.IMG_URL}/curators/${n}`,
                alt: "",
              }),
            }),
          });
        }
        function Pp(s) {
          switch (s.state) {
            case Ss.tV.$D:
              return (0, t.jsx)("span", {
                className: (0, D.A)(At().ReviewTitle, At().Recommended),
                children: p.Localize("#AppPage_Curator_Recommended"),
              });
            case Ss.tV.qP:
              return (0, t.jsx)("span", {
                className: (0, D.A)(At().ReviewTitle, At().NotRecommended),
                children: p.Localize("#AppPage_Curator_NotRecommended"),
              });
            case Ss.tV.y8:
              return (0, t.jsx)("span", {
                className: (0, D.A)(At().ReviewTitle, At().Informational),
                children: p.Localize("#AppPage_Curator_Informational"),
              });
            default:
              return null;
          }
        }
        function Mp(s) {
          const e = (s.strBlurb ?? "").split(`
`);
          return e.length == 0
            ? null
            : ((e[0] = p.Localize("#AppPage_Curator_QuoteLeft") + e[0].trim()),
              (e[e.length - 1] =
                e[e.length - 1].trim() +
                p.Localize("#AppPage_Curator_QuoteRight")),
              (0, t.jsx)(b.EY, {
                className: At().BlurbText,
                children: e.map((n, r) =>
                  (0, t.jsx)("div", { children: n }, r),
                ),
              }));
        }
        function ao(s) {
          const { strURL: e, strText: n, bPlayIcon: r } = s;
          return (0, t.jsx)(Gn.he, {
            toolTipContent: e,
            children: (0, t.jsx)(M.Ii, {
              className: (0, D.A)(
                "btnv6_blue_hoverfade",
                "btn_small_thin",
                At().ActionButton,
              ),
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, t.jsxs)("span", {
                children: [
                  r &&
                    (0, t.jsx)("span", {
                      className: At().PlayIcon,
                      children: (0, t.jsx)(Fe.jGG, {}),
                    }),
                  n,
                ],
              }),
            }),
          });
        }
        function oo(s) {
          if (!s) return;
          const e = [
            [
              /(?:youtube\.com|youtu\.be)\/(?:watch)?(?:\?v=)?([a-zA-Z0-9_-]+)/,
              { image: "https://img.youtube.com/vi/%s/mqdefault.jpg" },
            ],
            [
              /nicovideo\.jp\/watch\/([sm0-9]+)/,
              { iframe: "https://embed.nicovideo.jp/watch/%s" },
            ],
            [
              /escapistmagazine\.com\/videos\/view\/.+\/([0-9]+)/,
              { iframe: "https://www.escapistmagazine.com/videos/embed/%s" },
            ],
            [
              /youku\.com\/v_show\/id_([0-9A-z=]+)/,
              { iframe: "https://player.youku.com/embed/%s" },
            ],
            [
              /bilibili\.com\/video\/av([0-9]+)/,
              {
                iframe:
                  "https://www.bilibili.com/blackboard/player.html?aid=%s",
              },
            ],
          ];
          for (const [n, r] of e) {
            const a = s.match(n);
            if (a)
              return {
                iframe: r.iframe?.replace("%s", a[1]),
                image: r.image?.replace("%s", a[1]),
              };
          }
        }
        const fe = {};
        (fe.arabic = () => i.e(3143).then(i.t.bind(i, 3143, 19))),
          (fe.brazilian = () => i.e(38043).then(i.t.bind(i, 38043, 19))),
          (fe.bulgarian = () => i.e(60308).then(i.t.bind(i, 60308, 19))),
          (fe.czech = () => i.e(99922).then(i.t.bind(i, 99922, 19))),
          (fe.danish = () => i.e(32134).then(i.t.bind(i, 32134, 19))),
          (fe.dutch = () => i.e(47899).then(i.t.bind(i, 47899, 19))),
          (fe.english = () => i.e(31513).then(i.t.bind(i, 31513, 19))),
          (fe.finnish = () => i.e(86910).then(i.t.bind(i, 86910, 19))),
          (fe.french = () => i.e(67007).then(i.t.bind(i, 67007, 19))),
          (fe.german = () => i.e(84597).then(i.t.bind(i, 84597, 19))),
          (fe.greek = () => i.e(79169).then(i.t.bind(i, 79169, 19))),
          (fe.hungarian = () => i.e(28968).then(i.t.bind(i, 28968, 19))),
          (fe.indonesian = () => i.e(17427).then(i.t.bind(i, 17427, 19))),
          (fe.italian = () => i.e(65521).then(i.t.bind(i, 65521, 19))),
          (fe.japanese = () => i.e(49560).then(i.t.bind(i, 49560, 19))),
          (fe.koreana = () => i.e(68858).then(i.t.bind(i, 68858, 19))),
          (fe.latam = () => i.e(73682).then(i.t.bind(i, 73682, 19))),
          (fe.malay = () => i.e(20073).then(i.t.bind(i, 20073, 19))),
          (fe.norwegian = () => i.e(93341).then(i.t.bind(i, 93341, 19))),
          (fe.polish = () => i.e(48634).then(i.t.bind(i, 48634, 19))),
          (fe.portuguese = () => i.e(64794).then(i.t.bind(i, 64794, 19))),
          (fe.romanian = () => i.e(3380).then(i.t.bind(i, 3380, 19))),
          (fe.russian = () => i.e(37940).then(i.t.bind(i, 37940, 19))),
          (fe.sc_schinese = () => i.e(72910).then(i.t.bind(i, 72910, 19))),
          (fe.schinese = () => i.e(3431).then(i.t.bind(i, 3431, 19))),
          (fe.spanish = () => i.e(12737).then(i.t.bind(i, 12737, 19))),
          (fe.swedish = () => i.e(83504).then(i.t.bind(i, 61123, 19))),
          (fe.tchinese = () => i.e(25804).then(i.t.bind(i, 25804, 19))),
          (fe.thai = () => i.e(25401).then(i.t.bind(i, 25401, 19))),
          (fe.turkish = () => i.e(2593).then(i.t.bind(i, 2593, 19))),
          (fe.ukrainian = () => i.e(94219).then(i.t.bind(i, 94219, 19))),
          (fe.vietnamese = () => i.e(95784).then(i.t.bind(i, 95784, 19)));
        async function Tp(s) {
          if (fe[s]) return fe[s]();
        }
        const Ft = (0, xr.l)(Tp);
        var Sp = i(66575),
          Zt = i.n(Sp);
        const Xh = 0,
          lo = 1,
          co = 2,
          Lp = 3,
          uo = 4;
        var P = i(80613),
          y = i.n(P),
          l = i(75245);
        const Hh = 0,
          Op = 1,
          Ap = 2,
          zp = 3,
          Np = 4,
          Dp = 5,
          Fp = 6,
          Wp = 7,
          wp = 8,
          Rp = 9,
          Up = 10,
          Cp = 11,
          Kp = 12,
          Gp = 13,
          Yp = 14,
          kp = 15,
          Vp = 16,
          Qp = 17,
          $p = 18,
          Zp = 19,
          qh = 0,
          Jp = 1,
          Xp = 2,
          Hp = 3,
          qp = 4,
          _p = 5,
          e0 = 6,
          t0 = 7,
          n0 = 8,
          s0 = 9;
        function _h(s) {
          return "unknown ERatingAgency ( " + s + " )";
        }
        function ey(s) {
          return "unknown EAppRatingSource ( " + s + " )";
        }
        function ty(s) {
          return "unknown ERatingDescriptorImage ( " + s + " )";
        }
        class We extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.descriptors || l.Sg(We.M()),
              P.Message.initialize(this, e, 0, -1, [1, 2, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    descriptors: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                    official_id: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    esrb_online_music_not_rated: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    esrb_online_interactions_not_rated: {
                      n: 5,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    descriptor_images: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = l.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(We.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new We();
            return We.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(We.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(We.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRatingAuxData";
          }
        }
        class we extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.rating_agency || l.Sg(we.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    rating: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    source: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    banned: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                    required_age: {
                      n: 5,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    use_age_gate: {
                      n: 6,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    aux_data: { n: 7, c: We },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = l.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(we.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new we();
            return we.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(we.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(we.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRating";
          }
        }
        function ny(s) {
          return "unknown EContentSurveyMatureTag ( " + s + " )";
        }
        class Ae extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.elanguage || l.Sg(Ae.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                    text: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = l.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ae.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ae();
            return Ae.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ae.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ae.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyLocalizedText";
          }
        }
        class ze extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.customer_notes || l.Sg(ze.M()),
              P.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    customer_notes: { n: 1, c: Ae, r: !0, q: !0 },
                    customer_notes_ai: { n: 2, c: Ae, r: !0, q: !0 },
                    mature_tags: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                    has_mature_content: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    ai_external_service_name: {
                      n: 5,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    ai_external_service_url: {
                      n: 6,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = l.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ze.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ze();
            return ze.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ze.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ze.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyDisclosure";
          }
        }
        const sy = 1,
          ry = 2,
          iy = 3,
          ay = 4,
          oy = 5,
          ly = 6,
          cy = 7,
          dy = 8,
          uy = 9,
          my = 10,
          gy = 11,
          py = 12,
          fy = 13,
          hy = 14,
          yy = 15,
          xy = 16,
          vy = 17,
          jy = 18,
          by = 19,
          By = 20,
          Iy = 21,
          Ey = 22,
          Py = 23,
          My = 24,
          Ty = 25,
          Sy = 26,
          Ly = 27,
          Oy = 28,
          Ay = 29,
          zy = 30,
          Ny = 31,
          Dy = 32,
          Fy = 33,
          Wy = 34,
          wy = 35,
          Ry = 36,
          Uy = 37,
          Cy = 38,
          Ky = 39,
          Gy = 40,
          Yy = 41,
          ky = 42,
          Vy = 43,
          Qy = 44,
          $y = 45,
          Zy = 46,
          Jy = 47,
          Xy = 48,
          Hy = 49,
          qy = 50,
          r0 = 60,
          i0 = 61,
          a0 = 62,
          o0 = 63,
          l0 = 64,
          _y = 80,
          ex = 81,
          tx = 82,
          nx = 83,
          sx = 90,
          rx = 91,
          ix = 95;
        function ax(s) {
          return "unknown EPriceConversionMethod ( " + s + " )";
        }
        function ox(s) {
          return "unknown EProtoBillingType ( " + s + " )";
        }
        function lx(s) {
          return "unknown EProtoActivationCode ( " + s + " )";
        }
        function cx(s) {
          return "unknown EProtoProposalState ( " + s + " )";
        }
        function dx(s) {
          return "unknown EContentDescriptorSurveyState ( " + s + " )";
        }
        function ux(s) {
          return "unknown ERatingQuestionaireCategory ( " + s + " )";
        }
        function mx(s) {
          return "unknown EGeneratedGameRatingVersion ( " + s + " )";
        }
        function gx(s) {
          return "unknown EGameContentCategory ( " + s + " )";
        }
        function px(s) {
          return "unknown EContentSurveySection ( " + s + " )";
        }
        function fx(s) {
          return "unknown EContentSurveySource ( " + s + " )";
        }
        function hx(s) {
          return "unknown EContentSurveyChildAppType ( " + s + " )";
        }
        function yx(s) {
          return "unknown EContentSurveyInheritAction ( " + s + " )";
        }
        function xx(s) {
          return "unknown EGeneratedAIContentType ( " + s + " )";
        }
        class Mt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Mt.prototype.method || l.Sg(Mt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    method: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = l.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Mt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Mt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Mt();
            return Mt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Mt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Mt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductInfo_ForceEmitPriceConversion";
          }
        }
        class Re extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.survey_section || l.Sg(Re.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    survey_section: {
                      n: 1,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    time_reviewed: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    accountid_reviewer: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = l.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Re.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Re();
            return Re.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Re.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Re.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SurveySectionReviewed";
          }
        }
        class Ue extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.content_category || l.Sg(Ue.M()),
              P.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    content_category: {
                      n: 1,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    questionaire_categories: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = l.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ue.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ue();
            return Ue.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ue.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ue.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameContent";
          }
        }
        class Ce extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.rating_agency || l.Sg(Ce.M()),
              P.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    rating: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    required_age: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    descriptors: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                    banned: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = l.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ce.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ce();
            return Ce.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ce.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ce.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRating";
          }
        }
        class Ke extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.timestamp_generated || l.Sg(Ke.M()),
              P.Message.initialize(this, e, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    timestamp_generated: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    generated_version: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    ratings: { n: 3, c: Ce, r: !0, q: !0 },
                    content_categories: { n: 4, c: Ue, r: !0, q: !0 },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = l.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ke.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ke();
            return Ke.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ke.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ke.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRatings";
          }
        }
        class Ge extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.desc_code_generated || l.Sg(Ge.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    desc_code_generated: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_copyright_infringement_guarantee: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_content_moderation_strategy: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    external_service_name: {
                      n: 4,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    external_service_url: {
                      n: 5,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_external_service_how_content_available_to_players: {
                      n: 6,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_external_service_monetization: {
                      n: 7,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = l.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ge.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ge();
            return Ge.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ge.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ge.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AIContentSurvey";
          }
        }
        class Ye extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.disclosure || l.Sg(Ye.M()),
              P.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    disclosure: { n: 1, c: ze },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = l.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ye.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ye();
            return Ye.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ye.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ye.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyAuxData";
          }
        }
        class ke extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.id || l.Sg(ke.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    id: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = l.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ke.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ke();
            return ke.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ke.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ke.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptor";
          }
        }
        class Ve extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.surveyid || l.Sg(Ve.M()),
              P.Message.initialize(this, e, 0, -1, [3, 11, 14, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    state: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    descriptors: { n: 3, c: ke, r: !0, q: !0 },
                    timestamp_started: {
                      n: 4,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 5,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    timestamp_finished: {
                      n: 6,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    accountid: {
                      n: 7,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    developer_notes: {
                      n: 8,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    keyvalues: {
                      n: 9,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    ratings: { n: 10, c: Ke },
                    categories: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                    ai_survey: { n: 12, c: Ge },
                    internal_notes: {
                      n: 13,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    all_ratings: { n: 14, c: we, r: !0, q: !0 },
                    sections_reviewed: { n: 15, c: Re, r: !0, q: !0 },
                    disclosure: { n: 16, c: ze },
                    inherited_surveyid: {
                      n: 17,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    started_from_scratch: {
                      n: 18,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    survey_aux_data: { n: 19, c: Ye },
                    source: { n: 20, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    flags: {
                      n: 21,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = l.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ve.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ve();
            return Ve.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ve.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ve.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptorSurvey";
          }
        }
        class Qe extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.appid || l.Sg(Qe.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = l.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Qe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Qe();
            return Qe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Qe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Qe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetActiveSurvey_Request";
          }
        }
        class $e extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.appid || l.Sg($e.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = l.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT($e.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new $e();
            return $e.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj($e.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0($e.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetWorkingSurvey_Request";
          }
        }
        class Ne extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.surveyid || l.Sg(Ne.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    survey: { n: 2, c: Ve },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = l.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ne.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ne();
            return Ne.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ne.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ne.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetSurvey_Response";
          }
        }
        var mo;
        ((s) => {
          function e(r, a, o) {
            return r.SendMsg(
              "AppContentDescriptor.GetActiveSurvey#1",
              (0, Te.I8)(Qe, a, o),
              Ne,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          s.GetActiveSurvey = e;
          function n(r, a, o) {
            return r.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, Te.I8)($e, a, o),
              Ne,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          s.GetWorkingSurvey = n;
        })(mo || (mo = {}));
        const c0 = new Map([
            [Op, "esrb"],
            [Ap, "pegi"],
            [zp, "bbfc"],
            [Np, "usk"],
            [Dp, "oflc"],
            [Fp, "nzoflc"],
            [Wp, "cero"],
            [wp, "kgrb"],
            [Rp, "gmedia"],
            [Up, "dejus"],
            [Cp, "mda"],
            [Kp, "fpb"],
            [Gp, "csrr"],
            [Yp, "crl"],
            [kp, "agcom"],
            [Vp, "igrs"],
            [Qp, "steam_germany"],
            [$p, "steam_australia"],
            [Zp, "cadpa"],
          ]),
          d0 = "crl",
          u0 = "dejus",
          m0 = "0",
          g0 = "pending";
        function p0(s) {
          return c0.get(s) ?? "";
        }
        function f0(s) {
          return s ? Ft.Localize("#GameRating_Agency_" + s.toUpperCase()) : "";
        }
        function h0(s, e) {
          return !s || !e
            ? ""
            : Ft.Localize("#GameRating_Rating_" + s + "_" + e);
        }
        function y0(s) {
          return Ft.Localize("#GameRating_RARSText_" + s);
        }
        const di = new Map([
          [
            Jp,
            {
              strFile: "love",
              strToken: "#GameRating_DescriptorImage_CERO_Love",
            },
          ],
          [
            Xp,
            {
              strFile: "sexual_content",
              strToken: "#GameRating_DescriptorImage_CERO_SexualContent",
            },
          ],
          [
            Hp,
            {
              strFile: "violence",
              strToken: "#GameRating_DescriptorImage_CERO_Violence",
            },
          ],
          [
            qp,
            {
              strFile: "horror",
              strToken: "#GameRating_DescriptorImage_CERO_Horror",
            },
          ],
          [
            _p,
            {
              strFile: "drinking_smoking",
              strToken: "#GameRating_DescriptorImage_CERO_DrinkingSmoking",
            },
          ],
          [
            e0,
            {
              strFile: "gambling",
              strToken: "#GameRating_DescriptorImage_CERO_Gambling",
            },
          ],
          [
            t0,
            {
              strFile: "crime",
              strToken: "#GameRating_DescriptorImage_CERO_Crime",
            },
          ],
          [
            n0,
            {
              strFile: "drugs",
              strToken: "#GameRating_DescriptorImage_CERO_Drugs",
            },
          ],
          [
            s0,
            {
              strFile: "language",
              strToken: "#GameRating_DescriptorImage_CERO_Language",
            },
          ],
        ]);
        function x0(s) {
          const e = di.get(s);
          if (e)
            return {
              strURL: `${F.TS.STORE_CDN_URL}public/shared/images/game_ratings/CERO/descriptors/${e.strFile}.png`,
              strAlt: Ft.Localize(e.strToken),
            };
        }
        function vx(s) {
          const e = di.get(s);
          if (e)
            return `[img]${Config.MEDIA_CDN_URL}store/Ratings/CERO/${e.strFile}.png[/img]`;
        }
        function jx(s) {
          const e = [];
          for (const n of s) {
            const r = n.toLowerCase();
            for (const [a, o] of di)
              if (r.includes(`cero/${o.strFile}.png`)) {
                e.push(a);
                break;
              }
          }
          return e;
        }
        const v0 = new Map([
          [lo, "#GameRating_ContentCategoryDescriptor_60"],
          [co, "#GameRating_ContentCategoryDescriptor_61"],
          [uo, "#GameRating_ContentCategoryDescriptor_62"],
          [Lp, "#GameRating_ContentCategoryDescriptor_63"],
        ]);
        function go(s) {
          return s
            .map((e) => v0.get(e))
            .filter((e) => e !== void 0)
            .map((e) => Ft.Localize(e));
        }
        const j0 = new Map([
          ["in-game purchases", lo],
          ["in-game purchases (includes random items)", co],
          ["users interact", uo],
        ]);
        function b0(s) {
          const e = [];
          for (const n of s) {
            const r = n.trim();
            if (!r) continue;
            const a = j0.get(r.toLowerCase()),
              o = a !== void 0 ? go([a])[0] : r;
            e.includes(o) || e.push(o);
          }
          return e;
        }
        const B0 = new Map([
          [r0, "#GameRating_ContentCategoryDescriptor_60"],
          [i0, "#GameRating_ContentCategoryDescriptor_61"],
          [a0, "#GameRating_ContentCategoryDescriptor_62"],
          [o0, "#GameRating_ContentCategoryDescriptor_63"],
          [l0, "#GameRating_ContentCategoryDescriptor_64"],
        ]);
        function bx(s) {
          const e = [];
          for (const n of s)
            if (
              n.content_category ===
              EGameContentCategory.k_EGameContentCategory_InteractiveElements
            )
              for (const r of n.questionaire_categories ?? []) {
                const a = B0.get(r);
                a && e.push(GameRatingLocalization.Localize(a));
              }
          return e;
        }
        function I0(s) {
          const { rating: e } = s,
            { strType: n, strRating: r } = e;
          if (r === g0)
            return (0, t.jsxs)("div", {
              className: (0, D.A)(Zt().GameRating, "GameRating"),
              children: [
                (0, t.jsx)(O.s, {
                  direction: "row",
                  justify: "between",
                  className: Zt().Title,
                  children: Ft.Localize("#GameRating_Pending"),
                }),
                (0, t.jsx)(po, { strType: n }),
              ],
            });
          const a = n === d0 ? [y0(r)] : e.rgDescriptors,
            o = e.bOnlineMusicNotRated || e.bOnlineInteractionsNotRated;
          return (0, t.jsxs)(O.s, {
            direction: "column",
            gap: "3",
            className: Zt().GameRating,
            children: [
              n === u0
                ? e.nRequiredAge > 0 &&
                  (0, t.jsx)(b.EY, {
                    size: "3",
                    contrast: "title",
                    className: (0, D.A)(Zt().RequiredAge, "RequiredAge"),
                    children: Ft.Localize(
                      "#GameRating_Age_DEJUS",
                      e.nRequiredAge,
                    ),
                  })
                : e.bBanned && (0, t.jsx)(E0, {}),
              !e.bBanned &&
                (0, t.jsxs)(O.s, {
                  direction: "row",
                  gap: "3",
                  className: Zt().Details,
                  children: [
                    (0, t.jsx)("div", {
                      className: Zt().Icon,
                      children: (0, t.jsx)(P0, { rating: e }),
                    }),
                    (0, t.jsxs)(O.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        a.length > 0 &&
                          (0, t.jsx)(b.EY, {
                            as: "p",
                            contrast: "body",
                            className: Zt().DescriptorText,
                            children: a.join(`
`),
                          }),
                        (0, t.jsx)(M0, { rating: e }),
                        o &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              e.bOnlineMusicNotRated &&
                                (0, t.jsx)(b.EY, {
                                  as: "p",
                                  contrast: "body",
                                  className: Zt().DescriptorText,
                                  children: Ft.Localize(
                                    "#GameRating_OnlineMusicNotice",
                                  ),
                                }),
                              e.bOnlineInteractionsNotRated &&
                                (0, t.jsx)(b.EY, {
                                  as: "p",
                                  contrast: "body",
                                  className: Zt().DescriptorText,
                                  children: Ft.Localize(
                                    "#GameRating_OnlineInteractionsNotice",
                                  ),
                                }),
                            ],
                          }),
                        (0, t.jsx)(T0, { rating: e }),
                      ],
                    }),
                  ],
                }),
              (0, t.jsx)(po, { strType: n }),
            ],
          });
        }
        function E0() {
          return (0, t.jsx)(O.s, {
            direction: "row",
            justify: "between",
            className: Zt().Title,
            children: Ft.LocalizeReact(
              "#GameRating_ContentClassification",
              (0, t.jsx)("span", {
                className: Zt().Banned,
                children: Ft.Localize("#GameRating_Banned"),
              }),
            ),
          });
        }
        function P0(s) {
          const {
            strType: e,
            strRating: n,
            strImageURL: r,
            strImageTarget: a,
          } = s.rating;
          if (n === m0)
            return (0, t.jsx)("div", {
              className: Zt().AllAges,
              children: Ft.Localize("#GameRating_AllAges"),
            });
          if (!r) return null;
          const o = h0(e, n);
          return a
            ? (0, t.jsx)(M.Ii, {
                href: a,
                onOKActionDescription: o,
                children: (0, t.jsx)(tn, { src: r, alt: o }),
              })
            : (0, t.jsx)(tn, { src: r, alt: o });
        }
        function M0(s) {
          const e = (s.rating.rgDescriptorImages ?? [])
            .map((n) => x0(n))
            .filter((n) => n !== void 0);
          return e.length === 0
            ? null
            : (0, t.jsx)(O.s, {
                direction: "column",
                align: "start",
                gap: "1",
                children: e.map((n, r) =>
                  (0, t.jsx)(
                    tn,
                    { src: n.strURL, alt: n.strAlt, title: n.strAlt },
                    r,
                  ),
                ),
              });
        }
        function T0(s) {
          const {
              rgRatingInteractiveElements: e,
              rgSurveyInteractiveElements: n,
            } = s.rating,
            r = e.length > 0,
            a = r ? e : n;
          return a.length === 0
            ? null
            : (0, t.jsxs)(le.az, {
                children: [
                  (0, t.jsx)(b.EY, {
                    as: "p",
                    contrast: "note",
                    children: Ft.Localize(
                      r
                        ? "#GameRating_InteractiveElements_Title"
                        : "#GameRating_ContentCategory_InteractiveElements",
                    ),
                  }),
                  (0, t.jsx)(b.EY, {
                    as: "p",
                    contrast: "body",
                    className: Zt().DescriptorText,
                    children: a.join(Ft.Localize("#GameRating_ListDelimiter")),
                  }),
                ],
              });
        }
        function po(s) {
          const e = f0(s.strType);
          return e
            ? (0, t.jsx)(b.EY, {
                contrast: "body",
                size: "2",
                className: "Agency",
                children: Ft.Localize("#GameRating_RatingBy", e),
              })
            : null;
        }
        function S0(s) {
          return {
            strType: s.type || (s.agency !== void 0 ? p0(s.agency) : ""),
            strRating: s.rating ?? "",
            bBanned: !!s.banned,
            nRequiredAge: s.required_age ?? 0,
            rgDescriptors: s.descriptors ?? [],
            rgDescriptorImages: s.descriptor_images ?? [],
            bOnlineMusicNotRated: !!s.esrb_online_music_not_rated,
            bOnlineInteractionsNotRated: !!s.esrb_online_interactions_not_rated,
            rgRatingInteractiveElements: b0(
              (s.interactive_elements ?? "").split(/[\r\n,]+/),
            ),
            rgSurveyInteractiveElements: go(
              s.survey_interactive_elements ?? [],
            ),
            strImageURL: L0(s),
            strImageTarget: s.image_target || void 0,
          };
        }
        function L0(s) {
          if (s.image_url)
            return `${F.TS.STORE_CDN_URL}${s.image_url}?${s.image_target ? "v=3" : "v=2"}`;
        }
        function O0(s) {
          const { data: e } = (0, E.x2)({ appid: s.appid });
          return (
            m.use(Ft.Ready()),
            e?.rating ? (0, t.jsx)(I0, { rating: S0(e) }) : null
          );
        }
        var ui = i(98001);
        function A0(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            n = (0, Gt.AP)(s),
            { data: r } = (0, si.Nd)(n),
            a = r?.your_info;
          if (!a?.owned || !a.minutes_played_forever) return null;
          const o = !!e?.categories?.feature_categoryids?.includes(G.Vb8);
          return {
            nMinutesForever: a.minutes_played_forever,
            nMinutesLastTwoWeeks: a.minutes_played ?? 0,
            bShowStatsLinks: o && !(0, dn.nA)(F.TS.EREALM),
            nSteamworksAppid: n,
          };
        }
        function z0(s) {
          const {
              nMinutesForever: e,
              nMinutesLastTwoWeeks: n,
              bShowStatsLinks: r,
              nSteamworksAppid: a,
            } = s.stats,
            { data: o } = (0, Os.jn)(F.iA.steamid);
          m.use(p.Ready());
          const c = `${(0, As.n)(o, F.iA.steamid)}/stats/appid/${a}`,
            d = (0, ui.v)({ appid: a });
          return (0, t.jsxs)(O.s, {
            direction: "column",
            children: [
              (0, t.jsxs)(b.EY, {
                size: "3",
                color: "slate-11",
                children: [
                  n > 0 &&
                    `${p.Localize("#AppPage_MyActivity_HoursLastTwoWeeks", ar(n))} / `,
                  p.Localize("#AppPage_MyActivity_HoursOnRecord", ar(e)),
                ],
              }),
              r &&
                (0, t.jsxs)(O.s, {
                  gap: "2",
                  children: [
                    (0, t.jsx)(Ot.Y, {
                      size: "3",
                      color: "blue-8",
                      href: c,
                      children: p.Localize("#AppPage_MyActivity_ViewStats"),
                    }),
                    (0, t.jsx)(Ot.Y, {
                      size: "3",
                      color: "blue-8",
                      href: d,
                      children: p.Localize(
                        "#AppPage_MyActivity_ViewGlobalStats",
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        var N0 = i(80974),
          ur = i.n(N0);
        function D0(s) {
          return ((0, dn.nA)(F.TS.EREALM) ? "steamchina://" : "steam://") + s;
        }
        function F0(s) {
          const {
              appid: e,
              bOwned: n,
              masterSub: r,
              timedTrial: a,
              playAppid: o,
            } = s,
            { data: c } = (0, E.J$)({ appid: e }),
            d = A0(e);
          if (!c || (!n && !d)) return null;
          m.use(p.Ready());
          const u = c.type == ee.uE.Hk,
            g = !!a && a.nSecondsRemaining == 0 && !!r?.subscription,
            f = n && !u && !g;
          return (0, t.jsxs)(O.s, {
            direction: "column",
            paddingX: "5",
            paddingY: "3",
            background: "greyneutral-2 80%",
            children: [
              n && r && (0, t.jsx)(w0, { masterSub: r, bTrial: !!a }),
              n && !r && (0, t.jsx)(W0, { strAppName: c.name ?? "" }),
              n && g && (0, t.jsx)(U0, { subscription: r.subscription }),
              f &&
                (0, t.jsx)(R0, {
                  strAppName: c.name ?? "",
                  masterSub: r,
                  timedTrial: a,
                }),
              (0, t.jsxs)(T.Z, {
                className: ur().Actions,
                "flow-children": "row",
                children: [
                  f &&
                    o !== null &&
                    (0, t.jsx)(C0, { appid: o, eType: c.type }),
                  f &&
                    !!a &&
                    (0, t.jsx)(K0, { nSecondsRemaining: a.nSecondsRemaining }),
                  !!d && (0, t.jsx)(z0, { stats: d }),
                ],
              }),
            ],
          });
        }
        function fo() {
          return (0, t.jsxs)(O.s, {
            className: ur().InLibraryFlag,
            gap: "1",
            flexShrink: "0",
            align: "center",
            height: "18px",
            paddingX: "1",
            background: "storegreen-10",
            children: [
              (0, t.jsx)(Fe.wpD, { className: ur().InLibrarySVG }),
              (0, t.jsx)(b.EY, {
                size: "1",
                color: "slate-1",
                children: p.Localize("#AppPage_Owned_InLibraryFlag"),
              }),
            ],
          });
        }
        function W0(s) {
          const { strAppName: e } = s;
          return (0, t.jsxs)(O.s, {
            gap: "2",
            justify: "between",
            paddingBottom: "3",
            className: ur().InLibraryRow,
            children: [
              (0, t.jsx)(b.EY, {
                size: "4",
                color: "storegreen-10",
                children: p.Localize("#AppPage_Owned_AlreadyInLibrary", e),
              }),
              (0, t.jsx)(fo, {}),
            ],
          });
        }
        function w0(s) {
          const { masterSub: e, bTrial: n } = s,
            { strPackageName: r, subscription: a } = e,
            o = n
              ? "#AppPage_Owned_MasterSubTrialHeader"
              : "#AppPage_Owned_MasterSubHeader";
          return (0, t.jsxs)(O.s, {
            align: "center",
            gap: "2",
            children: [
              a?.strBadgeImage
                ? (0, t.jsx)(O.s, {
                    background: "blue-7",
                    justify: "center",
                    align: "center",
                    paddingY: "1",
                    paddingLeft: "2",
                    paddingRight: "5",
                    children: (0, t.jsx)(tn, {
                      src: a.strBadgeImage,
                      alt: "",
                      height: "18px",
                    }),
                  })
                : (0, t.jsx)(fo, {}),
              (0, t.jsx)(le.az, {
                flexGrow: "0",
                children: (0, t.jsx)(b.EY, {
                  size: "4",
                  color: "storegreen-10",
                  children: p.Localize(o, r),
                }),
              }),
              !!a &&
                (0, t.jsx)(le.az, {
                  flexShrink: "0",
                  children: (0, t.jsx)(Ot.Y, {
                    href: a.strInfoURL,
                    size: "2",
                    color: "text-light",
                    underline: "always",
                    children: p.Localize(
                      "#AppPage_Owned_MasterSubBrowse",
                      a.strName,
                    ),
                  }),
                }),
            ],
          });
        }
        function R0(s) {
          const { strAppName: e, masterSub: n, timedTrial: r } = s,
            a = n?.subscription;
          let o = null;
          if (r) {
            const c = (0, Lt.Hq)(r.nSecondsAllowed, { eSuffix: Lt.a8.None });
            a
              ? (o = (0, ve.xh)(
                  p.Localize("#AppPage_Owned_TrialWithMasterSub", c, a.strName),
                  (0, t.jsx)(Ot.Y, { href: a.strInfoURL }),
                ))
              : (o = p.Localize("#AppPage_Owned_TrialFree", e, c));
          } else
            a &&
              (o = (0, ve.xh)(
                p.Localize("#AppPage_Owned_MasterSubDesc", a.strName),
                (0, t.jsx)(Ot.Y, { href: a.strInfoURL }),
              ));
          return o
            ? (0, t.jsx)(b.EY, { size: "3", marginTop: "3", children: o })
            : null;
        }
        function U0(s) {
          const { subscription: e } = s;
          return (0, t.jsx)(b.EY, {
            size: "3",
            marginTop: "3",
            children: (0, ve.xh)(
              p.Localize("#AppPage_Owned_TrialEnded", e.strName),
              (0, t.jsx)(Ot.Y, { href: e.strInfoURL }),
            ),
          });
        }
        function C0(s) {
          const { appid: e, eType: n } = s;
          let r = "#AppPage_Owned_Play";
          return (
            n == ee.uE.Sv
              ? (r = "#AppPage_Owned_Use")
              : n == ee.uE.Wz
                ? (r = "#AppPage_Owned_Watch")
                : n == ee.uE.Ov && (r = "#AppPage_Owned_PlayMusic"),
            (0, t.jsx)(Le.v, {
              focusable: !0,
              color: "blue",
              href: D0(`launch/${e}/Dialog`),
              children: p.Localize(r),
            })
          );
        }
        function K0(s) {
          const { nSecondsRemaining: e } = s;
          return e <= 0
            ? null
            : (0, t.jsx)(b.EY, {
                size: "4",
                color: "text-light",
                children: (0, Lt.Hq)(e, { eSuffix: Lt.a8.Remaining }),
              });
        }
        var G0 = i(9682);
        function ho(s, e) {
          return ["OwnReview", s, e];
        }
        function Y0(s) {
          const e = (0, Xt.KV)(),
            n = (0, Gt.AP)(s),
            r = k0(e, F.iA.steamid, n);
          return (0, an.I)(r);
        }
        function k0(s, e, n) {
          return {
            queryKey: ho(e, n),
            queryFn: async () => {
              const r = await G0.YK.GetIndividualRecommendations(s, {
                requests: [{ steamid: e, appid: n }],
              });
              if (r.GetEResult() == en.p) return null;
              if (r.GetEResult() != en.R)
                throw new zr.x(
                  r.GetEResult(),
                  "Error from GetIndividualRecommendations",
                );
              return r.Body().recommendations()[0]?.toObject() ?? null;
            },
            staleTime: 1 / 0,
          };
        }
        function V0(s) {
          const e = (0, pn.jE)(),
            n = (0, Gt.AP)(s);
          return m.useCallback(
            (r) => {
              e.setQueryData(ho(F.iA.steamid, n), r);
            },
            [e, n],
          );
        }
        var Q0 = i(85743),
          mi = i(28794),
          $0 = i(57581),
          Z0 = i(15751),
          yo = i.n(Z0),
          J0 = i(6876),
          gi = i.n(J0);
        function X0(s) {
          const { review: e, eAppType: n, nSteamworksAppid: r, onEdit: a } = s,
            { data: o } = (0, Os.jn)(F.iA.steamid);
          m.use(p.Ready());
          const c = (0, Q0.Fi)((0, As.n)(o, F.iA.steamid), r),
            d = e.is_public
              ? "#AppPage_OwnReview_PostedPublic"
              : "#AppPage_OwnReview_PostedFriendsOnly";
          return (0, t.jsxs)(O.s, {
            direction: "column",
            padding: "4",
            borderColor: "greyneutral-9 50%",
            children: [
              (0, t.jsx)(H0, { review: e, eAppType: n }),
              (0, t.jsxs)(O.s, {
                direction: "column",
                background: "greyneutral-11 14%",
                children: [
                  (0, t.jsx)(_0, { review: e }),
                  (0, t.jsxs)(O.s, {
                    direction: "column",
                    gap: "3",
                    padding: "3",
                    children: [
                      (0, t.jsxs)(O.s, {
                        gap: "3",
                        align: "center",
                        children: [
                          (0, t.jsx)(q0, { bPositive: !!e.voted_up }),
                          (0, t.jsx)(le.az, {
                            flexGrow: "1",
                            children: (0, t.jsx)(b.EY, {
                              size: "3",
                              color: "slate-11",
                              children: p.Localize(d),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)(ef, { review: e }),
                      (0, t.jsxs)(O.s, {
                        gap: "2",
                        justify: "end",
                        children: [
                          (0, t.jsx)(Le.$, {
                            focusable: !0,
                            color: "blue",
                            onClick: a,
                            children: p.Localize("#AppPage_OwnReview_Edit"),
                          }),
                          (0, t.jsx)(Le.v, {
                            focusable: !0,
                            color: "blue",
                            href: c,
                            children: p.Localize("#AppPage_OwnReview_View"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function H0(s) {
          const { review: e, eAppType: n } = s,
            r = p.GetAppTypeLocKey(
              "#AppPage_OwnReview_Reviewed",
              n ?? ee.uE.HT,
            ),
            a = (0, Lt._l)(e.time_created ?? 0, { fullmonthname: !0 });
          return (0, t.jsxs)(b.EY, {
            size: "5",
            weight: "medium",
            color: "text-light",
            contrast: "title",
            marginBottom: "2",
            children: [
              p.Localize(r, a),
              !!e.time_updated &&
                ` (${p.Localize("#AppPage_OwnReview_Updated", (0, Lt._l)(e.time_updated, { fullmonthname: !0 }))})`,
            ],
          });
        }
        function q0(s) {
          const { bPositive: e } = s;
          return (0, t.jsx)("div", {
            className: (0, D.A)(gi().ThumbIcon, !e && gi().Down),
            children: (0, t.jsx)(N.twC, {}),
          });
        }
        function _0(s) {
          const { review: e } = s,
            n = e.votes_up ?? 0,
            r = e.comment_count ?? 0;
          return !n && !r
            ? null
            : (0, t.jsxs)(O.s, {
                gap: "3",
                align: "center",
                paddingX: "4",
                paddingY: "2",
                background: "greyneutral-9 50%",
                children: [
                  n > 0 &&
                    (0, t.jsx)(b.EY, {
                      size: "3",
                      children: p.LocalizePlural(
                        "#AppPage_OwnReview_HelpfulCount",
                        n,
                      ),
                    }),
                  r > 0 &&
                    (0, t.jsxs)(O.s, {
                      gap: "1",
                      align: "center",
                      children: [
                        (0, t.jsx)(b.EY, { size: "3", children: r }),
                        (0, t.jsx)(N.MwB, { className: gi().CommentIcon }),
                      ],
                    }),
                ],
              });
        }
        function ef(s) {
          const { review: e } = s,
            [n, r] = m.useState(!1),
            a = m.useCallback(() => r(!0), []);
          if (!e.developer_response) return null;
          m.use(mi.c.Ready());
          const o = (0, Lt._l)(e.time_developer_responded ?? 0, {
            fullmonthname: !0,
            bUseRelativeNames: !1,
          });
          return (0, t.jsxs)(O.s, {
            direction: "column",
            gap: "2",
            children: [
              (0, t.jsxs)(O.s, {
                gap: "2",
                align: "center",
                wrap: "wrap",
                children: [
                  (0, t.jsx)(b.EY, {
                    size: "3",
                    color: "slate-11",
                    children: mi.c.Localize(
                      "#Review_OfficialDeveloperResponseExistsDate",
                      o,
                    ),
                  }),
                  !n &&
                    (0, t.jsx)(Le.$, {
                      focusable: !0,
                      size: "1",
                      variant: "ghost",
                      color: "blue",
                      onClick: a,
                      children: mi.c.Localize(
                        "#Review_OfficialDeveloperResponse_View",
                      ),
                    }),
                ],
              }),
              n &&
                (0, t.jsx)(le.az, {
                  padding: "3",
                  background: "greyneutral-9 50%",
                  className: (0, D.A)(yo().BBCodeContent, yo().Community),
                  children: (0, t.jsx)($0.J, {
                    text: e.developer_response,
                    bBeWary: !0,
                  }),
                }),
            ],
          });
        }
        var tf = i(3877),
          nf = i(24089);
        function sf() {
          return nf.TextEntry;
        }
        var rf = i(86946),
          af = i(80549);
        function of(s) {
          const {
              rows: e = 3,
              resize: n = "none",
              ref: r,
              value: a,
              onTextChange: o,
              onChange: c,
              disabled: d,
              variant: u,
              ...g
            } = s,
            f = (B) => {
              d || (o(B.target.value), c && c(B));
            },
            h = (0, af.f)("TextArea", u),
            x = (0, C.Qn)(),
            v = (0, rf.w)({
              ...g,
              className: Qn()((0, tf.T)(), sf()),
              style: { resize: n },
              cursor: "text",
              disabled: d,
              variant: h,
            }),
            I = x ? M.dO : "textarea";
          return (0, t.jsx)(I, {
            ref: r,
            ...v,
            value: a || "",
            onChange: f,
            rows: e,
            readOnly: d,
            "aria-disabled": d,
          });
        }
        var lf = i(12204),
          pi = i(94381),
          xo = i(8833);
        function cf(s) {
          const { orientation: e = "horizontal", size: n = "1", ...r } = s;
          return (0, t.jsx)("div", {
            role: "separator",
            "aria-orientation": e,
            ...(0, Cr.mz)({ ...r, size: n, className: xo.Separator }, df),
          });
        }
        const df = [
          ...ja.L,
          { prop: "size", className: (s) => xo[`Size-${s}`], responsive: !0 },
          {
            prop: "color",
            cssProperty: (s) => ["--separator-color", (0, Cr.w7)(s)],
          },
        ];
        var vo = i(28361),
          fi = i(16412);
        function uf(s, e) {
          const n = (0, Gt.AP)(s),
            r = (0, Qt.ru)("recommend-game");
          return (0, ps.n)({
            mutationFn: (a) => (e ? pf(e, a) : gf(s, n, a, r)),
            onSuccess: () => {
              window.location.reload();
            },
          });
        }
        function mf(s) {
          function e(r) {
            return typeof r == "boolean" || r === void 0 || r === null
              ? r
                ? "1"
                : "0"
              : String(r);
          }
          const n = new FormData();
          return (
            Object.entries(s).forEach(([r, a]) => {
              if (Array.isArray(a)) for (const o of a) n.append(r + "[]", e(o));
              else n.append(r, e(a));
            }),
            n
          );
        }
        async function gf(s, e, n, r) {
          const a = await jo(`${F.TS.STORE_BASE_URL}friends/recommendgame`, {
            appid: s,
            steamworksappid: e,
            comment: n.review ?? "",
            rated_up: n.voted_up,
            is_public: n.is_public,
            language: n.language ?? "",
            received_compensation: n.received_compensation,
            disable_comments: n.comments_disabled,
            sessionid: (0, C.KC)(),
            hide_in_steam_china: !(0, dn.nA)(F.TS.EREALM),
            saved_hardware_id: n.saved_hardware_id,
            snr: r,
          });
          if (!a.success) throw new Error(a.strError ?? "");
        }
        async function pf(s, e) {
          if (
            (
              await jo(`${F.TS.STORE_BASE_URL}userreviews/update/${s}`, {
                review_text: e.review ?? "",
                voted_up: e.voted_up,
                is_public: e.is_public,
                language: e.language ?? "",
                received_compensation: e.received_compensation,
                comments_disabled: e.comments_disabled,
                saved_hardware_id: e.saved_hardware_id,
                sessionid: (0, C.KC)(),
              })
            ).success != en.R
          )
            throw new Error("");
        }
        async function jo(s, e) {
          const n = mf(e);
          return await (
            await fetch(s, { method: "POST", body: n, credentials: "include" })
          )
            .json()
            .catch(() => ({}));
        }
        function Bx(s) {
          return "unknown EValveIndexComponent ( " + s + " )";
        }
        function Ix(s) {
          return "unknown EFramePromoSerialRedemptionSource ( " + s + " )";
        }
        class Ze extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.serial_number || l.Sg(Ze.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = l.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ze.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ze();
            return Ze.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ze.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ze.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Request";
          }
        }
        class Je extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.accountid || l.Sg(Je.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    accountid: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    registration_complete: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = l.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Je.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Je();
            return Je.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Je.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Je.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Accounts";
          }
        }
        class Xe extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.accounts || l.Sg(Xe.M()),
              P.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: { accounts: { n: 1, c: Je, r: !0, q: !0 } },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = l.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Xe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Xe();
            return Xe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Xe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Xe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Response";
          }
        }
        class He extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.serial_number || l.Sg(He.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = l.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(He.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new He();
            return He.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(He.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(He.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamController_Request";
          }
        }
        class In extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return In.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new In();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new In();
            return In.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return In.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              In.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamController_Response";
          }
        }
        class qe extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.serial_number || l.Sg(qe.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = l.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(qe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new qe();
            return qe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(qe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(qe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_CompleteSteamControllerRegistration_Request";
          }
        }
        class En extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return En.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new En();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new En();
            return En.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return En.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              En.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_CompleteSteamControllerRegistration_Response";
          }
        }
        class _e extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.appidorname || l.Sg(_e.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    appidorname: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    templatename: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = l.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(_e.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new _e();
            return _e.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(_e.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(_e.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_ControllerConfig";
          }
        }
        class et extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.serial_number || l.Sg(et.M()),
              P.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    configurations: { n: 4, c: _e, r: !0, q: !0 },
                    controller_type: {
                      n: 5,
                      d: 2,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                    only_for_this_serial: {
                      n: 6,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = l.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(et.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new et();
            return et.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(et.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(et.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_Request";
          }
        }
        class Pn extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Pn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Pn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Pn();
            return Pn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Pn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Pn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_Response";
          }
        }
        class tt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.serial_number || l.Sg(tt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    appidorname: {
                      n: 4,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_type: {
                      n: 5,
                      d: 2,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                    only_for_this_serial: {
                      n: 6,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = l.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(tt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new tt();
            return tt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(tt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(tt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_Request";
          }
        }
        class nt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.appidorname || l.Sg(nt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    appidorname: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    templatename: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    serial_number: {
                      n: 4,
                      d: "",
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    autosave: {
                      n: 5,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = l.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(nt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new nt();
            return nt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(nt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(nt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_ControllerConfig";
          }
        }
        class st extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.configurations || l.Sg(st.M()),
              P.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: { configurations: { n: 1, c: nt, r: !0, q: !0 } },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = l.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(st.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new st();
            return st.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(st.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(st.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_Response";
          }
        }
        class rt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.serial_number || l.Sg(rt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = l.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(rt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new rt();
            return rt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(rt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(rt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_DeRegisterSteamController_Request";
          }
        }
        class Mn extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Mn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Mn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Mn();
            return Mn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Mn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Mn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_DeRegisterSteamController_Response";
          }
        }
        class it extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.serial_number || l.Sg(it.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = l.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(it.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new it();
            return it.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(it.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(it.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SetPersonalizationFile_Request";
          }
        }
        class Tn extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Tn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Tn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Tn();
            return Tn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Tn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Tn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SetPersonalizationFile_Response";
          }
        }
        class at extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.serial_number || l.Sg(at.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = l.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(at.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new at();
            return at.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(at.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(at.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetPersonalizationFile_Request";
          }
        }
        class ot extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.publishedfileid || l.Sg(ot.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    publishedfileid: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = l.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ot.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ot();
            return ot.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ot.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ot.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetPersonalizationFile_Response";
          }
        }
        class lt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.product_name || l.Sg(lt.M()),
              P.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    product_name: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    values: { n: 2, c: ct, r: !0, q: !0 },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = l.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(lt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new lt();
            return lt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(lt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(lt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Request";
          }
        }
        class ct extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.key || l.Sg(ct.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    key: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    value: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = l.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ct.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ct();
            return ct.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ct.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ct.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Request_Pair";
          }
        }
        class dt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.values || l.Sg(dt.M()),
              P.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    values: { n: 1, c: ut, r: !0, q: !0 },
                    components: { n: 2, c: mt, r: !0, q: !0 },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = l.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(dt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new dt();
            return dt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(dt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(dt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response";
          }
        }
        class ut extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.key || l.Sg(ut.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    key: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    value: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = l.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ut.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ut();
            return ut.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ut.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ut.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response_Pair";
          }
        }
        class mt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.name || l.Sg(mt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    name: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    image: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    value: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = l.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(mt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new mt();
            return mt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(mt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(mt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response_ComponentDisplay";
          }
        }
        class gt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.serial_number || l.Sg(gt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    manufacturer_serial_number: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    component_code: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    component_type: {
                      n: 4,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    estimated_time_registered: {
                      n: 5,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = l.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(gt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new gt();
            return gt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(gt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(gt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterValveIndexComponent_Request";
          }
        }
        class Sn extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Sn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Sn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Sn();
            return Sn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Sn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Sn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterValveIndexComponent_Response";
          }
        }
        class pt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.serial_number || l.Sg(pt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = l.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(pt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new pt();
            return pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(pt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(pt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSteamDeckComponents_Request";
          }
        }
        class ft extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.json_components || l.Sg(ft.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    json_components: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = l.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ft.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ft();
            return ft.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ft.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ft.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSteamDeckComponents_Response";
          }
        }
        class ht extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.friendly_name || l.Sg(ht.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    friendly_name: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    system_info: { n: 2, c: Q.Lu },
                    backfill_user_reviews: {
                      n: 3,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = l.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ht.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ht();
            return ht.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ht.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ht.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SaveHardware_Request";
          }
        }
        class yt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.hardware_id || l.Sg(yt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = l.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(yt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new yt();
            return yt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(yt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(yt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SaveHardware_Response";
          }
        }
        class xt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.hardware_id || l.Sg(xt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    friendly_name: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    timestamp_created: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    hardware_cluster_id: {
                      n: 4,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    system_info: { n: 5, c: Q.Lu },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = l.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(xt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new xt();
            return xt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(xt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(xt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SavedHardware_Details";
          }
        }
        class vt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vt.prototype.steamid || l.Sg(vt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: l.qM.readFixed64String,
                      bw: l.gp.writeFixed64String,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = l.w0(vt.M())), vt.sm_mbf;
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(vt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(vt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new vt();
            return vt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(vt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(vt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSavedHardwareList_Request";
          }
        }
        class jt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.saved_hardware || l.Sg(jt.M()),
              P.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: { saved_hardware: { n: 1, c: xt, r: !0, q: !0 } },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = l.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(jt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new jt();
            return jt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(jt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(jt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSavedHardwareList_Response";
          }
        }
        class bt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.hardware_id || l.Sg(bt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    delete_hardware: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    friendly_name_update: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = l.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(bt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new bt();
            return bt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(bt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(bt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_ManageSavedHardware_Request";
          }
        }
        class Ln extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ln.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Ln();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ln();
            return Ln.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ln.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ln.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_ManageSavedHardware_Response";
          }
        }
        class Bt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Bt.prototype.serial_number || l.Sg(Bt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    machine_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = l.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Bt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Bt();
            return Bt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Bt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Bt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamMachine_Request";
          }
        }
        class On extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return On.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new On();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new On();
            return On.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return On.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              On.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamMachine_Response";
          }
        }
        class It extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.controllers || l.Sg(It.M()),
              P.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: { controllers: { n: 1, c: Et, r: !0, q: !0 } },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = l.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(It.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new It();
            return It.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(It.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(It.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Request";
          }
        }
        class Et extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.serial_number || l.Sg(Et.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = l.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Et.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Et();
            return Et.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Et.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Et.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Request_Controller";
          }
        }
        class An extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return An.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new An();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new An();
            return An.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return An.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              An.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Response";
          }
        }
        class Pt extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pt.prototype.serial || l.Sg(Pt.M()),
              P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    serial: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    component_serial: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = l.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Pt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Pt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Pt();
            return Pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Pt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Pt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Request";
          }
        }
        class zn extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), P.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return zn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new zn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new zn();
            return zn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return zn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              zn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Response";
          }
        }
        var hi;
        ((s) => {
          function e(S, z, w) {
            return S.SendMsg(
              "AccountHardware.RegisterSteamController#1",
              (0, Te.I8)(He, z, w),
              In,
              { ePrivilege: 1 },
            );
          }
          s.RegisterSteamController = e;
          function n(S, z, w) {
            return S.SendMsg(
              "AccountHardware.CompleteSteamControllerRegistration#1",
              (0, Te.I8)(qe, z, w),
              En,
              { ePrivilege: 1 },
            );
          }
          s.CompleteSteamControllerRegistration = n;
          function r(S, z, w) {
            return S.SendMsg(
              "AccountHardware.QueryAccountsRegisteredToController#1",
              (0, Te.I8)(Ze, z, w),
              Xe,
              { ePrivilege: 1 },
            );
          }
          s.QueryAccountsRegisteredToController = r;
          function a(S, z, w) {
            return S.SendMsg(
              "AccountHardware.UpdateControllerUsageReport#1",
              (0, Te.I8)(It, z, w),
              An,
              { ePrivilege: 1 },
            );
          }
          s.UpdateControllerUsageReport = a;
          function o(S, z, w) {
            return S.SendMsg(
              "AccountHardware.SetDesiredControllerConfigForApp#1",
              (0, Te.I8)(et, z, w),
              Pn,
              { ePrivilege: 1 },
            );
          }
          s.SetDesiredControllerConfigForApp = o;
          function c(S, z, w) {
            return S.SendMsg(
              "AccountHardware.GetDesiredControllerConfigForApp#1",
              (0, Te.I8)(tt, z, w),
              st,
              { ePrivilege: 1 },
            );
          }
          s.GetDesiredControllerConfigForApp = c;
          function d(S, z, w) {
            return S.SendMsg(
              "AccountHardware.DeRegisterSteamController#1",
              (0, Te.I8)(rt, z, w),
              Mn,
              { ePrivilege: 1 },
            );
          }
          s.DeRegisterSteamController = d;
          function u(S, z, w) {
            return S.SendMsg(
              "AccountHardware.SetControllerPersonalizationFile#1",
              (0, Te.I8)(it, z, w),
              Tn,
              { ePrivilege: 1 },
            );
          }
          s.SetControllerPersonalizationFile = u;
          function g(S, z, w) {
            return S.SendMsg(
              "AccountHardware.GetControllerPersonalizationFile#1",
              (0, Te.I8)(at, z, w),
              ot,
              { ePrivilege: 1 },
            );
          }
          s.GetControllerPersonalizationFile = g;
          function f(S, z, w) {
            return S.SendMsg(
              "AccountHardware.VRCompatibilityCheck#1",
              (0, Te.I8)(lt, z, w),
              dt,
              { ePrivilege: 0 },
            );
          }
          s.VRCompatibilityCheck = f;
          function h(S, z, w) {
            return S.SendMsg(
              "AccountHardware.RegisterValveIndexComponent#1",
              (0, Te.I8)(gt, z, w),
              Sn,
              { ePrivilege: 1 },
            );
          }
          s.RegisterValveIndexComponent = h;
          function x(S, z, w) {
            return S.SendMsg(
              "AccountHardware.GetSteamDeckComponents#1",
              (0, Te.I8)(pt, z, w),
              ft,
              { ePrivilege: 1 },
            );
          }
          s.GetSteamDeckComponents = x;
          function v(S, z, w) {
            return S.SendMsg(
              "AccountHardware.SaveHardware#1",
              (0, Te.I8)(ht, z, w),
              yt,
              { ePrivilege: 1 },
            );
          }
          s.SaveHardware = v;
          function I(S, z, w) {
            return S.SendMsg(
              "AccountHardware.ManageSavedHardware#1",
              (0, Te.I8)(bt, z, w),
              Ln,
              { ePrivilege: 1 },
            );
          }
          s.ManageSavedHardware = I;
          function B(S, z, w) {
            return S.SendMsg(
              "AccountHardware.GetSavedHardwareList#1",
              (0, Te.I8)(vt, z, w),
              jt,
              { ePrivilege: 1 },
            );
          }
          s.GetSavedHardwareList = B;
          function A(S, z, w) {
            return S.SendMsg(
              "AccountHardware.RegisterSteamMachine#1",
              (0, Te.I8)(Bt, z, w),
              On,
              { ePrivilege: 1 },
            );
          }
          s.RegisterSteamMachine = A;
        })(hi || (hi = {}));
        var bo;
        ((s) => {
          function e(n, r, a) {
            return n.SendMsg(
              "AccountHardwarePromotions.RedeemFramePromoPackage#1",
              (0, Te.I8)(Pt, r, a),
              zn,
              { ePrivilege: 1 },
            );
          }
          s.RedeemFramePromoPackage = e;
        })(bo || (bo = {}));
        var Bo = i(44930),
          ff = i(94162);
        function Io(s) {
          return ["SavedHardware", s];
        }
        function hf(s) {
          const e = (0, Xt.KV)();
          return (0, an.I)(yf(e, F.iA.steamid, s));
        }
        function yf(s, e, n) {
          return {
            queryKey: Io(e),
            queryFn: async () => {
              const r = await hi.GetSavedHardwareList(s, { steamid: e });
              if (!r.BSuccess())
                throw new zr.x(
                  r.GetEResult(),
                  "Error from GetSavedHardwareList",
                );
              return r.Body().toObject().saved_hardware ?? [];
            },
            enabled: n,
            staleTime: 300 * 1e3,
          };
        }
        const xf = 1770934110;
        function vf() {
          const s = (0, pn.jE)(),
            e = jf();
          m.useEffect(() => {
            if (e)
              return SteamClient.BrowserView.RegisterForMessageFromParent(
                (r) => {
                  r == "OnCloseSaveHardwareDialog" &&
                    s.invalidateQueries({ queryKey: Io(F.iA.steamid) });
                },
              ).unregister;
          }, [s, e]);
          const n = m.useCallback(() => {
            SteamClient.BrowserView.PostMessageToParent(
              "ShowSavedHardwareDialog",
              "",
            );
          }, []);
          return e ? n : void 0;
        }
        function jf() {
          if (
            !(0, Bo.Dp)("BrowserView.PostMessageToParent") ||
            !(0, Bo.Dp)("BrowserView.RegisterForMessageFromParent")
          )
            return !1;
          const s = (0, ff.MP)();
          return s == 0 || s >= xf;
        }
        var bf = i(74049),
          Eo = i.n(bf);
        const Bf = "6862-8119-C23E-EA7B",
          If = 8e3,
          Ef = za.Nb.filter((s) => s != "sc_schinese" && s != "arabic");
        function Pf(s) {
          const { appid: e, review: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, Os.jn)(F.iA.steamid),
            [o, c] = m.useState(() => Of(n)),
            [d, u] = m.useState(""),
            g = uf(e, n?.recommendationid),
            f = g.mutate,
            h = m.useCallback((z) => {
              c((w) => ({ ...w, ...z }));
            }, []),
            x = m.useCallback((z) => h({ review: z }), [h]),
            v = r?.name ?? "",
            I = m.useCallback(() => {
              if (!o.review?.trim()) {
                u(p.Localize("#AppPage_WriteReview_ErrorNoText"));
                return;
              }
              if (o.voted_up === void 0) {
                u(p.Localize("#AppPage_WriteReview_ErrorNoRating", v));
                return;
              }
              u(""), f(o);
            }, [o, f, v]);
          if (!r) return null;
          m.use(p.Ready()), m.use(Z.Z.Ready());
          const B = !!n,
            A = r.type ?? ee.uE.HT,
            S = g.error
              ? g.error.message ||
                p.Localize("#AppPage_WriteReview_ErrorPosting")
              : "";
          return (0, t.jsx)(Ut.YZ, {
            navEntryPreferPosition: V.iU.PREFERRED_CHILD,
            children: (0, t.jsxs)(O.s, {
              direction: "column",
              gap: "3",
              padding: "4",
              borderColor: "greyneutral-9 50%",
              children: [
                (0, t.jsx)(Mf, { strAppName: v, eAppType: A, bUpdate: B }),
                (0, t.jsxs)(O.s, {
                  gap: "3",
                  children: [
                    !!a &&
                      (0, t.jsx)(ii.wm, {
                        playerLinkDetails: a,
                        size: "MediumLarge",
                        statusPosition: "border",
                        alt: "",
                      }),
                    (0, t.jsxs)(O.s, {
                      direction: "column",
                      gap: "3",
                      flexGrow: "1",
                      navProps: { preferredFocus: !0 },
                      children: [
                        (!!d || !!S) &&
                          (0, t.jsx)(b.EY, {
                            size: "3",
                            color: "red-10",
                            children: d || S,
                          }),
                        (0, t.jsx)(of, {
                          value: o.review ?? "",
                          onTextChange: x,
                          placeholder: p.Localize(
                            "#AppPage_WriteReview_Placeholder",
                          ),
                          rows: 4,
                          maxLength: If,
                        }),
                        (0, t.jsx)(Tf, {
                          review: o,
                          bFreeApp: !!r.is_free,
                          UpdateForm: h,
                        }),
                        (0, t.jsx)(Lf, {
                          bVotedUp: o.voted_up,
                          eAppType: A,
                          bUpdate: B,
                          bPosting: g.isPending,
                          UpdateForm: h,
                          OnSubmit: I,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Mf(s) {
          const { strAppName: e, eAppType: n, bUpdate: r } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(b.EY, {
                size: "5",
                color: "blue-11",
                children: p.Localize(
                  r
                    ? "#AppPage_WriteReview_TitleUpdate"
                    : "#AppPage_WriteReview_Title",
                  e,
                ),
              }),
              (0, t.jsx)(b.EY, {
                size: "3",
                color: "greyneutral-11",
                children: (0, ve.xh)(
                  p.Localize(
                    p.GetAppTypeLocKey("#AppPage_WriteReview_Desc", n),
                  ),
                  (0, t.jsx)(Ot.Y, {
                    underline: "always",
                    color: "blue-8",
                    href: `${F.TS.HELP_BASE_URL}faqs/view/${Bf}`,
                  }),
                ),
              }),
              (0, dn.nA)(F.TS.EREALM) &&
                (0, t.jsx)(b.EY, {
                  size: "3",
                  color: "brown-10",
                  children: p.Localize("#AppPage_WriteReview_ChinaDisclaimer"),
                }),
            ],
          });
        }
        function Tf(s) {
          const { review: e, bFreeApp: n, UpdateForm: r } = s,
            [a, o] = m.useState(!1),
            c = m.useCallback(() => o((B) => !B), []),
            d = m.useCallback((B) => r({ is_public: B.data }), [r]),
            u = m.useCallback((B) => r({ language: B.data }), [r]),
            g = m.useCallback((B) => r({ comments_disabled: !B }), [r]),
            f = m.useCallback((B) => r({ received_compensation: B }), [r]),
            h = p.Localize("#AppPage_WriteReview_Visibility"),
            x = p.Localize("#AppPage_WriteReview_Language"),
            v = [
              {
                label: p.Localize("#AppPage_WriteReview_VisibilityPublic"),
                data: !0,
              },
              {
                label: p.Localize("#AppPage_WriteReview_VisibilityFriends"),
                data: !1,
              },
            ],
            I = Ef.map((B) => ({ label: (0, vo.$A)(B), data: B }));
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Le.$, {
                variant: "basic",
                color: "greyneutral",
                width: "100%",
                focusable: !0,
                onClick: c,
                children: (0, t.jsxs)(O.s, {
                  justify: "between",
                  align: "center",
                  width: "100%",
                  children: [
                    p.Localize("#AppPage_WriteReview_Settings"),
                    (0, t.jsx)(lf.V, { direction: a ? "up" : "down" }),
                  ],
                }),
              }),
              a &&
                (0, t.jsxs)(O.s, {
                  direction: "column",
                  gap: "2",
                  children: [
                    (0, t.jsxs)(O.s, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, t.jsx)(b.EY, { size: "3", children: h }),
                        F.iA.is_limited
                          ? (0, t.jsx)(b.EY, {
                              size: "3",
                              color: "greyneutral-11",
                              children: p.Localize(
                                "#AppPage_WriteReview_VisibilityLimited",
                              ),
                            })
                          : (0, t.jsx)(le.az, {
                              width: "50%",
                              children: (0, t.jsx)(fi.ZU, {
                                controlled: !0,
                                rgOptions: v,
                                selectedOption: !!e.is_public,
                                onChange: d,
                                menuLabel: h,
                              }),
                            }),
                      ],
                    }),
                    !(0, dn.nA)(F.TS.EREALM) &&
                      (0, t.jsxs)(O.s, {
                        justify: "between",
                        align: "center",
                        gap: "2",
                        children: [
                          (0, t.jsx)(b.EY, { size: "3", children: x }),
                          (0, t.jsx)(le.az, {
                            width: "50%",
                            children: (0, t.jsx)(fi.ZU, {
                              controlled: !0,
                              rgOptions: I,
                              selectedOption: e.language,
                              onChange: u,
                              menuLabel: x,
                              strDefaultLabel: (0, vo.$A)(e.language ?? ""),
                            }),
                          }),
                        ],
                      }),
                    (0, t.jsx)(pi.S, {
                      checked: !e.comments_disabled,
                      onChange: g,
                      children: (0, t.jsx)(b.EY, {
                        size: "3",
                        children: p.Localize(
                          "#AppPage_WriteReview_AllowComments",
                        ),
                      }),
                    }),
                    (0, t.jsx)(Sf, {
                      strSavedHardwareID: e.saved_hardware_id,
                      UpdateForm: r,
                    }),
                    !n &&
                      (0, t.jsx)(pi.S, {
                        checked: !!e.received_compensation,
                        onChange: f,
                        children: (0, t.jsx)(b.EY, {
                          size: "3",
                          children: p.Localize(
                            "#AppPage_WriteReview_ReceivedFree",
                          ),
                        }),
                      }),
                    (0, t.jsx)(cf, { color: "greyneutral-9 50%", size: "4" }),
                  ],
                }),
            ],
          });
        }
        function Sf(s) {
          const { strSavedHardwareID: e, UpdateForm: n } = s,
            [r, a] = m.useState(!!e),
            { data: o, isPending: c } = hf(r),
            d = vf(),
            u = m.useCallback(
              (v) => {
                a(v), v || n({ saved_hardware_id: void 0 });
              },
              [n],
            ),
            g = m.useCallback((v) => n({ saved_hardware_id: v.data }), [n]),
            f = o?.[0]?.hardware_id;
          m.useEffect(() => {
            r && !e && f && n({ saved_hardware_id: f });
          }, [r, e, f, n]);
          const h = p.Localize("#AppPage_WriteReview_PCSpecs"),
            x = (o ?? []).map((v) => ({
              label: v.friendly_name ?? "",
              data: v.hardware_id ?? "",
            }));
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(pi.S, {
                checked: r,
                onChange: u,
                children: (0, t.jsx)(b.EY, {
                  size: "3",
                  children: p.Localize("#AppPage_WriteReview_AttachHardware"),
                }),
              }),
              r &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(O.s, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, t.jsx)(b.EY, { size: "3", children: h }),
                        (0, t.jsx)(le.az, {
                          width: "50%",
                          children: (0, t.jsx)(fi.ZU, {
                            controlled: !0,
                            disabled: !x.length,
                            rgOptions: x,
                            selectedOption: e,
                            onChange: g,
                            menuLabel: h,
                            strDefaultLabel: c
                              ? Z.Z.Localize("#Loading")
                              : p.Localize("#AppPage_WriteReview_PCSpecsNone"),
                          }),
                        }),
                      ],
                    }),
                    !!d &&
                      (0, t.jsx)(O.s, {
                        justify: "end",
                        children: (0, t.jsx)(Le.$, {
                          focusable: !0,
                          variant: "basic",
                          color: "greyneutral",
                          onClick: d,
                          children: p.Localize("#AppPage_WriteReview_AddPC"),
                        }),
                      }),
                  ],
                }),
            ],
          });
        }
        function Lf(s) {
          const {
              bVotedUp: e,
              eAppType: n,
              bUpdate: r,
              bPosting: a,
              UpdateForm: o,
              OnSubmit: c,
            } = s,
            d = m.useCallback(() => o({ voted_up: !0 }), [o]),
            u = m.useCallback(() => o({ voted_up: !1 }), [o]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(O.s, {
                direction: "column",
                gap: "2",
                children: [
                  (0, t.jsx)(b.EY, {
                    size: "4",
                    children: p.Localize(
                      p.GetAppTypeLocKey("#AppPage_WriteReview_Recommend", n),
                    ),
                  }),
                  (0, t.jsxs)(O.s, {
                    gap: "2",
                    children: [
                      (0, t.jsx)(Po, {
                        bThumbsUp: !0,
                        bSelected: e === !0,
                        onSelect: d,
                      }),
                      (0, t.jsx)(Po, {
                        bThumbsUp: !1,
                        bSelected: e === !1,
                        onSelect: u,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(O.s, {
                justify: "end",
                children: (0, t.jsx)(Le.$, {
                  focusable: !0,
                  color: "blue",
                  loading: a,
                  onClick: c,
                  children: p.Localize(
                    r
                      ? "#AppPage_WriteReview_Update"
                      : "#AppPage_WriteReview_Post",
                  ),
                }),
              }),
            ],
          });
        }
        function Po(s) {
          const { bThumbsUp: e, bSelected: n, onSelect: r } = s;
          return (0, t.jsx)(Le.$, {
            focusable: !0,
            variant: "basic",
            color: n ? "blue" : "greyneutral",
            onClick: r,
            children: (0, t.jsxs)(O.s, {
              direction: "row",
              gap: "1",
              align: "center",
              children: [
                (0, t.jsx)(N.twC, {
                  className: (0, D.A)(
                    Eo().VerdictIcon,
                    !e && Eo().VerdictIconDown,
                  ),
                }),
                (0, t.jsx)(b.EY, {
                  size: "4",
                  contrast: "title",
                  children: p.Localize(
                    e
                      ? "#AppPage_WriteReview_RecommendYes"
                      : "#AppPage_WriteReview_RecommendNo",
                  ),
                }),
              ],
            }),
          });
        }
        function Of(s) {
          const e = (0, dn.nA)(F.TS.EREALM);
          return s
            ? {
                ...s,
                language: e || !s.language ? Mo() : s.language,
                comments_disabled: s.comments_disabled || e,
                is_public: s.is_public && !F.iA.is_limited,
              }
            : {
                is_public: !F.iA.is_limited,
                language: Mo(),
                comments_disabled: e,
              };
        }
        function Mo() {
          return (0, dn.nA)(F.TS.EREALM)
            ? "schinese"
            : F.TS.LANGUAGE == "korean"
              ? "koreana"
              : F.TS.LANGUAGE;
        }
        function Af(s) {
          const { appid: e, ownReview: n } = s,
            r = V0(e),
            [a, o] = m.useState(!1);
          return (
            m.useEffect(() => {
              r(n), o(!0);
            }, [n, r]),
            a ? (0, t.jsx)(zf, { appid: e }) : null
          );
        }
        function zf(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = Y0(e),
            a = (0, Gt.AP)(e),
            [o, c] = m.useState(!1),
            d = m.useCallback(() => c(!0), []);
          return n
            ? (0, t.jsx)(O.s, {
                direction: "column",
                paddingX: "5",
                paddingY: "3",
                background: "greyneutral-2 80%",
                children:
                  r && !o
                    ? (0, t.jsx)(X0, {
                        review: r,
                        eAppType: n.type,
                        nSteamworksAppid: a,
                        onEdit: d,
                      })
                    : (0, t.jsx)(Pf, { appid: e, review: r ?? null }),
              })
            : null;
        }
        var Nf = i(27990),
          Df = i(48338),
          Ff = i.n(Df),
          Wf = i(75995),
          Nn = i.n(Wf);
        const To = {
          2023: Nn().Year2023,
          2024: Nn().Year2024,
          2025: Nn().Year2025,
        };
        function wf(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = (n?.steam_award ?? [])
              .filter((a) => !!a.localization?.title && !!To[a.award_year])
              .sort((a, o) => o.award_year - a.award_year);
          return r.length
            ? (0, t.jsx)(O.s, {
                direction: "column",
                gap: "4",
                children: r.map((a) =>
                  (0, t.jsx)(Rf, { award: a }, `${a.award_year}_${a.voteid}`),
                ),
              })
            : null;
        }
        function Rf(s) {
          const { award: e } = s,
            n = e.award_year,
            r = (0, Qt.aL)(`${F.TS.STORE_BASE_URL}steamawards/${n}/`);
          return (0, t.jsxs)(M.Ii, {
            className: (0, D.A)(Nn().Banner, To[n]),
            href: r,
            children: [
              (0, t.jsxs)("div", {
                className: Nn().Titles,
                children: [
                  (0, t.jsx)("span", {
                    className: Nn().AwardsTitle,
                    children: p.Localize("#AppPage_SteamAwards_Title"),
                  }),
                  (0, t.jsx)("span", { className: Nn().Year, children: n }),
                ],
              }),
              (0, t.jsx)("div", {
                className: Nn().Winner,
                children: p.Localize("#AppPage_SteamAwards_Winner"),
              }),
              (0, t.jsx)("div", {
                className: Nn().Category,
                children: e.localization.title,
              }),
            ],
          });
        }
        var Uf = i(72390),
          as = i.n(Uf);
        function Cf(s) {
          const { appid: e } = s,
            { metacritic: n, app: r, bShow: a, nScore: o } = So(e);
          return (
            m.use(p.Ready()),
            !a || !r
              ? null
              : (0, t.jsxs)(O.s, {
                  align: "start",
                  paddingY: "2",
                  direction: "row",
                  children: [
                    (0, t.jsx)(O.s, {
                      className: (0, D.A)(
                        as().Score,
                        o > 0 ? Kf(o, r.type) : as().Low,
                      ),
                      width: "50px",
                      height: "50px",
                      flexShrink: "0",
                      align: "center",
                      justify: "center",
                      children: o > 0 ? o : "NA",
                    }),
                    (0, t.jsxs)(O.s, {
                      direction: "column",
                      paddingLeft: "2",
                      children: [
                        (0, t.jsx)(Yf, {}),
                        o > 0
                          ? n?.url && (0, t.jsx)(Gf, { url: n.url })
                          : (0, t.jsx)(b.EY, {
                              size: "2",
                              children: p.Localize(
                                "#AppPage_Metacritic_NotReviewed",
                              ),
                            }),
                      ],
                    }),
                  ],
                })
          );
        }
        function So(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            { data: n } = (0, E._F)({ appid: s }),
            r = e?.type === ee.uE.ue ? e.related_items?.parent_appid : void 0,
            { data: a } = (0, E._F)(r ? { appid: r } : void 0);
          if (!e) return { bShow: !1, nScore: 0 };
          const o = n?.metacritic,
            c = (r ? a?.metacritic?.score : o?.score) ?? 0;
          return {
            metacritic: o,
            app: e,
            nScore: c,
            bShow: !!o?.always_show || c > 0,
          };
        }
        function Kf(s, e) {
          const n = e === ee.uE.Wz || e === ee.uE.gQ,
            r = n ? 61 : 75,
            a = n ? 40 : 50;
          return s >= r ? as().High : s >= a ? as().Medium : as().Low;
        }
        function Gf(s) {
          const { url: e } = s;
          return (0, t.jsxs)(Ot.Y, {
            size: "2",
            color: "blue-8",
            href: C.TS.IN_CLIENT ? `steam://openurl/${e}` : e,
            target: C.TS.IN_CLIENT ? void 0 : "_blank",
            children: [
              p.Localize("#AppPage_Metacritic_ReadCriticReviews"),
              (0, t.jsx)("span", {
                className: as().ExternalIcon,
                children: (0, t.jsx)(N.GrD, {}),
              }),
            ],
          });
        }
        function Yf(s) {
          return (0, t.jsxs)(O.s, {
            direction: "row",
            gap: "1",
            align: "center",
            children: [
              (0, t.jsx)(tn, {
                src: `${C.TS.IMG_URL}v6/mc_logo_no_text.png`,
                alt: "",
                width: "24px",
                height: "24px",
                flexShrink: "0",
              }),
              (0, t.jsx)(b.EY, {
                size: "7",
                weight: "heavy",
                contrast: "title",
                children: "metacritic",
              }),
            ],
          });
        }
        function kf(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            { bShow: r } = So(e);
          m.use(p.Ready());
          const a =
              n?.partner_awards_bbcode && n.partner_awards_bbcode.length > 0,
            o = n?.steam_award && n.steam_award.length > 0;
          return (
            console.log("Rendering steam awards", s),
            !a && !o && !r
              ? null
              : (0, t.jsxs)(Fa, {
                  className: Ff().StoreAwards,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)(tr, {
                      text: p.Localize("#AppPage_Awards_Header"),
                    }),
                    (0, t.jsx)(Cf, { appid: e }),
                    (0, t.jsx)(wf, { appid: e }),
                    n?.partner_awards_bbcode &&
                      (0, t.jsx)(Ps.n, { text: n.partner_awards_bbcode }),
                  ],
                })
          );
        }
        var mr = i(23386),
          Lo = i(25509),
          Vf = i(30452),
          Oo = i.n(Vf),
          Qf = i(94255),
          Jt = i.n(Qf);
        function yi(s) {
          const {
              title: e,
              link_text: n,
              url: r,
              linkType: a = "inline",
              children: o,
              total_count: c,
              link_footer: d,
              block_footer: u,
            } = s,
            g = (0, C.Qn)(),
            f = g
              ? (0, t.jsx)(b.EY, {
                  contrast: "title",
                  size: "2",
                  weight: "heavy",
                  style: { letterSpacing: "0.5px" },
                  children: e,
                })
              : (0, t.jsx)(b.EY, {
                  contrast: "body",
                  size: "2",
                  weight: "regular",
                  children: e,
                }),
            h = a == "inline" ? Jt().InlineLink : Jt().OverlayLink;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Jf, { title: e, link_text: n ?? xi(c), url: r }),
              (0, t.jsx)("div", {
                className: "noOpinionatedGlobalStyles",
                children: (0, t.jsxs)(O.s, {
                  direction: "column",
                  gap: "2",
                  className: Jt().ShopLink,
                  children: [
                    (0, t.jsx)(M.Ii, {
                      className: (0, D.A)(h, Jt().Link),
                      "flow-children": "column",
                      focusClassName: Jt().ShowLink,
                      focusable: !0,
                      href: r,
                      "aria-label": xi(c),
                      children: (0, t.jsxs)(O.s, {
                        direction: "column",
                        gap: g ? "1" : "2",
                        children: [
                          f,
                          (0, t.jsxs)(qs.x, {
                            autoFlow: "column",
                            autoColumns: "1fr",
                            gap: "2",
                            alignItems: "center",
                            justifyContent: "center",
                            className: Jt().Items,
                            children: [o, (0, t.jsx)(Zf, { total_count: c })],
                          }),
                          n &&
                            (0, t.jsx)("div", {
                              className: Jt().ActivateLabel,
                              children: (0, t.jsx)(le.az, {
                                background: "blue-8",
                                padding: "2",
                                radius: "sm",
                                children: (0, t.jsx)(b.EY, {
                                  size: "2",
                                  contrast: "title",
                                  children: n,
                                }),
                              }),
                            }),
                          d,
                        ],
                      }),
                    }),
                    u,
                  ],
                }),
              }),
            ],
          });
        }
        function $f(s) {
          return s == null
            ? p.Localize("#ShopLink_ViewAll_NoCount_Narrow")
            : s >= 1e3
              ? p.Localize(
                  "#ShopLink_ViewAll_NarrowThousands",
                  (s / 1e3).toFixed(),
                )
              : p.Localize("#ShopLink_ViewAll_NarrowUnderThousand", s);
        }
        function xi(s) {
          return s == null
            ? p.Localize("#ShopLink_ViewAll_NoCount")
            : s >= 1e3
              ? p.Localize(
                  "#ShopLink_ViewAll_WideThousands",
                  (s / 1e3).toFixed(),
                )
              : p.Localize("#ShopLink_ViewAll_WideUnderThousand", s);
        }
        function Zf(s) {
          const { total_count: e } = s;
          return (0, t.jsx)(qs.x, {
            className: Jt().AllText,
            height: "100%",
            background: "greyneutral-5",
            children: (0, t.jsxs)(le.az, {
              alignSelf: "center",
              textAlign: "center",
              justifySelf: "center",
              children: [
                (0, t.jsx)(b.EY, {
                  contrast: "description",
                  className: Jt().Wide,
                  children: xi(e),
                }),
                (0, t.jsx)(b.EY, {
                  contrast: "description",
                  className: Jt().Narrow,
                  children: $f(e),
                }),
              ],
            }),
          });
        }
        function Jf(s) {
          const { title: e, link_text: n, url: r } = s;
          return (0, t.jsx)("a", {
            href: r,
            className: Jt().ResponsiveLink,
            children: (0, t.jsxs)(O.s, {
              direction: "row",
              background: "blue-3",
              padding: "2",
              align: "center",
              children: [
                (0, t.jsxs)(b.EY, {
                  contrast: "subtitle",
                  className: Jt().Text,
                  children: [e, " - ", n],
                }),
                (0, t.jsx)(b.EY, {
                  contrast: "subtitle",
                  className: Jt().Arrow,
                  children: (0, t.jsx)(Fe.cLJ, { direction: "right" }),
                }),
              ],
            }),
          });
        }
        function Xf(s, e) {
          switch (e.item_class) {
            case mr.sU:
            case mr.zs:
              return `${Rs.TS.COMMUNITY_CDN_URL}economy/profilebackground/items/${s}/${e.image_large}?size=320x200`;
            case mr.Tl:
              return (0, Lo.k)(s, e.image_small);
            default:
              return (0, Lo.k)(s, e.image_large);
          }
        }
        function Hf(s) {
          const { appid: e, items: n, total_count: r, shop_url: a } = s;
          return (
            m.use(p.Ready()),
            n?.length
              ? (0, t.jsx)(yi, {
                  title: p.Localize("#AppPage_PointsShop_Header"),
                  url: a,
                  total_count: r,
                  children: n.map((o) =>
                    (0, t.jsx)(
                      le.az,
                      {
                        alignSelf: "center",
                        children: (0, t.jsx)(tn, {
                          className: (0, D.A)(
                            Oo().ItemImage,
                            o.item_class == mr.sU && Oo().ProfileBackground,
                          ),
                          src: Xf(e, o),
                          alt: o.title,
                        }),
                      },
                      o.defid,
                    ),
                  ),
                })
              : null
          );
        }
        var qf = i(30820),
          vi = i.n(qf);
        const Ao = 256;
        function _f(s) {
          const e = `${Rs.TS.COMMUNITY_CDN_URL}economy/image/${s}/${Ao}fx${Ao}f`;
          return { src: e, srcSet: `${e} 1x, ${e}dpx2x 2x` };
        }
        function eh(s) {
          const { items: e, shop_url: n } = s;
          return (
            m.use(p.Ready()),
            e?.length
              ? (0, t.jsx)(yi, {
                  title: p.Localize("#AppPage_ItemShop_Header"),
                  link_text: p.Localize("#AppPage_ItemShop_ShopAll"),
                  url: n,
                  linkType: "overlay",
                  children: e.map((r) =>
                    (0, t.jsxs)(
                      le.az,
                      {
                        className: vi().Item,
                        textAlign: "center",
                        children: [
                          (0, t.jsx)(tn, {
                            className: vi().ItemImage,
                            ..._f(r.icon_url),
                            alt: r.name,
                          }),
                          (0, t.jsx)(b.EY, {
                            size: "2",
                            weight: "heavy",
                            className: vi().Price,
                            children: r.price,
                          }),
                        ],
                      },
                      r.itemdefid,
                    ),
                  ),
                })
              : null
          );
        }
        const zo = "steamQueryPersist";
        function Ex(s) {
          return s.meta?.[zo];
        }
        const No = m.createContext(void 0),
          Px = No.Provider;
        function Do(s) {
          const { area: e, maxAgeSeconds: n, meta: r, ...a } = s,
            o = m.useContext(No),
            c = m.useMemo(() => Fo(r, e, n), [r, e, n]);
          return (0, an.I)({ ...a, meta: c, persister: o?.GetPersister(e) });
        }
        function Fo(s, e, n) {
          return { ...s, [zo]: { area: e, maxAgeSeconds: n } };
        }
        async function Mx(s, e) {
          const { area: n, maxAgeSeconds: r, meta: a, ...o } = e,
            c = { ...o, meta: Fo(a, n, r), staleTime: 0 },
            d = s.getQueryState(o.queryKey);
          d &&
            d.fetchStatus !== "idle" &&
            (await s.fetchQuery(c).catch(() => {})),
            await s.fetchQuery(c);
        }
        const th = Date.now();
        function Tx(s) {
          return s > 0 && s < th;
        }
        var Wo = i(27386);
        const zs = 0;
        function ji(s, ...e) {
          return ["achievements", s, ...e];
        }
        const nh = (s) => ji(s, "schema");
        function wo(s, e) {
          if (!(e === void 0 || e === ""))
            return `${F.TS.BASE_URL_SHARED_CDN}community_assets/images/apps/${s}/${e}`;
        }
        async function sh(s, e, n) {
          const r = await Wo.xtC.GetGameAchievements(s, {
            appid: e,
            language: n,
          });
          if (r.GetEResult() === en.p)
            return {
              appid: e,
              language: n,
              groups: [],
              schema_hash: 0,
              schema_version: 0,
            };
          if (r.GetEResult() !== en.R)
            throw (
              (console.error(
                "Received error from GetGameAchievements",
                r.GetEResult(),
              ),
              new Error(`Error from GetGameAchievements: ${r.GetEResult()}`))
            );
          const a = {};
          a[zs] = {
            id: zs,
            archived: !1,
            developeronly: !1,
            ispublic: !0,
            dlcappid: 0,
            order: -1,
            achievements: [],
          };
          const o = r.Body().groups().toString();
          r
            .Body()
            .groups()
            .forEach((u) => {
              const g = u.groupid();
              a[g] = {
                id: g,
                name: u.localized_name(),
                archived: u.archived() ?? !1,
                ispublic: u.ispublic() ?? !0,
                developeronly: u.developeronly() ?? !1,
                dlcappid: u.dlcappid() ?? 0,
                order: u.order() ?? 0,
                achievements: [],
              };
            }),
            r
              .Body()
              .toObject()
              ?.achievements?.forEach((u) => {
                const g = u.groupid ?? zs;
                a[g].achievements.push({
                  internal_key: u.internal_key ?? 0,
                  api_name: u.internal_name ?? "",
                  name: u.localized_name,
                  description: u.localized_desc,
                  hidden: u.hidden ?? !1,
                  archived: u.archived ?? !1,
                  icon_achieved: wo(e, u.icon),
                  icon_unachieved: wo(e, u.icon_gray),
                  groupid: u.groupid ?? zs,
                  min_progress: u.min_progress_int ?? u.min_progress_float,
                  max_progress: u.max_progress_int ?? u.max_progress_float,
                });
              });
          const c = Object.values(a)
            .filter((u) => u.achievements.length > 0)
            .sort((u, g) => u.order - g.order);
          return {
            appid: e,
            language: n,
            groups: c,
            schema_hash: r.Body()?.schema_hash() ?? 0,
            schema_version: r.Body()?.schema_version() ?? 0,
          };
        }
        const rh = (s) => ji(s, "globalpercentages");
        async function ih(s, e) {
          const n = await Wo.xtC.GetGlobalAchievementPercentages(s, {
            appid: e,
          });
          if (n.GetEResult() === en.p) return { percentages: {} };
          if (n.GetEResult() !== en.R)
            throw (
              (console.error(
                "Received error from GetGlobalAchievementPercentages",
                n.GetEResult(),
              ),
              new Error(
                `Error from GetGlobalAchievementPercentages: ${n.GetEResult()}`,
              ))
            );
          return {
            percentages: n
              .Body()
              .achievements()
              .reduce((a, o) => {
                const c = o.internal_key();
                return (
                  c === void 0 || (a[c] = o.player_percent_unlocked() ?? 0.1), a
                );
              }, {}),
          };
        }
        function Sx(s, e) {
          return ji(s, "user_achievements", e);
        }
        function bi(s, e, n, r) {
          const a = (n?.achievements() ?? []).reduce((c, d) => {
              const u = d.internal_key();
              return (
                (c[u] = {
                  internal_key: u,
                  unlocked: d.unlocked(),
                  unlock_time: d.unlock_time(),
                  progress: d.progress_int() ?? d.progress_float(),
                }),
                c
              );
            }, {}),
            o = (n?.groups() ?? []).reduce((c, d) => {
              const u = d.groupid(),
                g = d.is_completed(),
                f = d.time_completed();
              return (
                (c[u] = {
                  groupid: u,
                  is_achievable: d.is_achievable(),
                  completed_achievements: d.completed_achievements() ?? 0,
                  is_completed: g === void 0 ? !1 : g,
                  time_completed: f || void 0,
                }),
                c
              );
            }, {});
          return {
            appid: s,
            steamid: e,
            achievements: a,
            groups: o,
            schema_hash: r,
          };
        }
        function Lx(s, e) {
          if (!s) return e;
          const n = { ...s.groups };
          for (const r of Object.values(e.groups)) {
            const a = s.groups[r.groupid];
            n[r.groupid] = {
              ...r,
              is_completed: (a?.is_completed ?? !1) || r.is_completed,
              time_completed: a?.time_completed ?? r.time_completed,
            };
          }
          return {
            ...s,
            achievements: { ...s.achievements, ...e.achievements },
            groups: n,
          };
        }
        class ah extends Error {
          constructor() {
            super("GetUserAchievements: server unreachable");
          }
        }
        function oh(s) {
          const e = s.Hdr().transport_error();
          return e === k_ETransportError_RequestNotSent ||
            e === k_ETransportError_ResponseNotReceived
            ? !0
            : s.GetEResult() === k_EResultNoConnection ||
                s.GetEResult() === k_EResultTimeout;
        }
        async function Ox(s, e, n) {
          if (n == "" || n == "0") return bi(e, n, void 0, 0);
          const r = await PlayerService.GetUserAchievements(s, {
            appid: e,
            steamid: n,
          });
          if (
            r.GetEResult() === k_EResultAccessDenied ||
            r.GetEResult() === k_EResultAccountNotFound
          )
            return bi(e, n, void 0, 0);
          if (oh(r)) throw new ah();
          if (r.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from GetUserAchievements",
                r.GetEResult(),
              ),
              new Error(`Error from GetUserAchievements: ${r.GetEResult()}`))
            );
          return bi(e, n, r.Body(), r.Body()?.schema_hash() ?? 0);
        }
        const he = {};
        (he.arabic = () => i.e(94507).then(i.t.bind(i, 94507, 19))),
          (he.brazilian = () => i.e(29815).then(i.t.bind(i, 29815, 19))),
          (he.bulgarian = () => i.e(79200).then(i.t.bind(i, 79200, 19))),
          (he.czech = () => i.e(81142).then(i.t.bind(i, 81142, 19))),
          (he.danish = () => i.e(42394).then(i.t.bind(i, 42394, 19))),
          (he.dutch = () => i.e(80559).then(i.t.bind(i, 80559, 19))),
          (he.english = () => i.e(92885).then(i.t.bind(i, 92885, 19))),
          (he.finnish = () => i.e(22754).then(i.t.bind(i, 22754, 19))),
          (he.french = () => i.e(89627).then(i.t.bind(i, 89627, 19))),
          (he.german = () => i.e(8281).then(i.t.bind(i, 8281, 19))),
          (he.greek = () => i.e(53749).then(i.t.bind(i, 53749, 19))),
          (he.hungarian = () => i.e(88180).then(i.t.bind(i, 88180, 19))),
          (he.indonesian = () => i.e(13303).then(i.t.bind(i, 13303, 19))),
          (he.italian = () => i.e(28757).then(i.t.bind(i, 28757, 19))),
          (he.japanese = () => i.e(88468).then(i.t.bind(i, 88468, 19))),
          (he.koreana = () => i.e(82558).then(i.t.bind(i, 82558, 19))),
          (he.latam = () => i.e(3894).then(i.t.bind(i, 3894, 19))),
          (he.malay = () => i.e(35957).then(i.t.bind(i, 35957, 19))),
          (he.norwegian = () => i.e(43081).then(i.t.bind(i, 43081, 19))),
          (he.polish = () => i.e(63822).then(i.t.bind(i, 63822, 19))),
          (he.portuguese = () => i.e(16470).then(i.t.bind(i, 16470, 19))),
          (he.romanian = () => i.e(46488).then(i.t.bind(i, 46488, 19))),
          (he.russian = () => i.e(50272).then(i.t.bind(i, 50272, 19))),
          (he.sc_schinese = () => i.e(88794).then(i.t.bind(i, 88794, 19))),
          (he.schinese = () => i.e(15171).then(i.t.bind(i, 15171, 19))),
          (he.spanish = () => i.e(34341).then(i.t.bind(i, 34341, 19))),
          (he.swedish = () => i.e(61844).then(i.t.bind(i, 61844, 19))),
          (he.tchinese = () => i.e(71088).then(i.t.bind(i, 71088, 19))),
          (he.thai = () => i.e(49829).then(i.t.bind(i, 49829, 19))),
          (he.turkish = () => i.e(95917).then(i.t.bind(i, 95917, 19))),
          (he.ukrainian = () => i.e(15151).then(i.t.bind(i, 15151, 19))),
          (he.vietnamese = () => i.e(53460).then(i.t.bind(i, 53460, 19)));
        async function lh(s) {
          if (he[s]) return he[s]();
        }
        const Ro = (0, xr.l)(lh);
        function ch(s) {
          return {
            ...s,
            groups: s.groups.map((e) =>
              e.id === zs
                ? { ...e, name: Ro.Localize("#Achievements_Set_BaseGame") }
                : e,
            ),
          };
        }
        function Uo(s, e) {
          return {
            queryKey: nh(e),
            queryFn: async () => {
              const n = F.TS.LANGUAGE;
              return sh(s, e, n);
            },
            select: ch,
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function Co(s) {
          const e = (0, Xt.KV)();
          return Do(Uo(e, s));
        }
        function dh(s, e) {
          return {
            queryKey: rh(e),
            queryFn: async () => ih(s, e),
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function Bi(s) {
          const e = (0, Xt.KV)();
          return Do(dh(e, s));
        }
        function Ax(s, e) {
          const { data: n } = Bi(s);
          if (n) return n.percentages[e] ?? void 0;
        }
        function Ii(s, e, n) {
          return {
            queryKey: GetUserAchievementsQueryKey(e, n),
            queryFn: async () => GetUserAchievements(s, e, n),
            staleTime: 600 * 1e3,
            area: "achievements",
          };
        }
        function Ko(s, e, n) {
          const { fnFetchLocalUserAchievements: r } = useAchievementsHost(),
            a = !!r && !!e && n.error instanceof ServerUnreachableError,
            o = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                s,
                "local_user_achievements",
                e,
                n.errorUpdatedAt,
              ),
              queryFn: async () => (await r(s, e)) ?? null,
              enabled: a,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
            }),
            c = a ? o.data : void 0,
            d = o.dataUpdatedAt;
          return useMemo(
            () =>
              c
                ? {
                    ...n,
                    data: MergeLocalUserAchievements(n.data, c),
                    dataUpdatedAt: Math.max(n.dataUpdatedAt, d),
                  }
                : n,
            [n, c, d],
          );
        }
        function zx(s, e) {
          const n = useActiveServiceTransport(),
            r = usePersistedQuery(Ii(n, s, e));
          return Ko(s, e, r);
        }
        function Nx(s, e) {
          const n = useActiveServiceTransport(),
            r = Co(s),
            a = Bi(s),
            o = usePersistedQuery({ ...Ii(n, s, e ?? ""), enabled: !!e }),
            c = Ko(s, e ?? "", o),
            d = !!e,
            u = r.data,
            g = d ? c.data : void 0,
            f = u != null && (!d || g !== void 0),
            h = () => (f ? GetAchievementsSummary(u, a.data, g) : void 0),
            x = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                s,
                "summary",
                e ?? "",
                r.dataUpdatedAt,
                a.dataUpdatedAt,
                d ? c.dataUpdatedAt : 0,
              ),
              queryFn: () => {
                const z = h();
                if (z === void 0)
                  throw new Error("No achievements schema to summarize");
                return z;
              },
              initialData: h,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: f,
            }),
            v = d ? [r, c] : [r],
            I = v.find((z) => z.data === void 0),
            B = I?.isPending ?? !1,
            A = v.find((z) => z.isError),
            S = I ? void 0 : x.data;
          return {
            isPending: B,
            isError: !B && S === void 0,
            error: A?.error ?? null,
            data: S,
          };
        }
        async function Dx(s, e, n, r) {
          await FetchPersistedQuery(s, Ii(e, n, r));
        }
        async function Fx(s, e, n) {
          await FetchPersistedQuery(s, Uo(e, n));
        }
        var uh = i(93237),
          Dn = i.n(uh);
        const mh = 10;
        function gh(s) {
          return s === void 0 ? !1 : s <= mh;
        }
        function Wx(s) {
          return (s?.groups_achievable?.total ?? 0) != 0;
        }
        function ph(s, e) {
          return s.achievements.some(
            (n) =>
              (!s.archived && !n.archived) ||
              e?.achievements[n.internal_key]?.unlocked == !0,
          );
        }
        function wx(s, e) {
          if (Array.isArray(s))
            return (
              s.length > 1 ||
              (s.length == 1 && s[0] !== k_DefaultAchievementGroup)
            );
          {
            const n = s.groups.filter((r) => ph(r, e));
            return (
              n.length > 1 ||
              (n.length == 1 && n[0].id !== k_DefaultAchievementGroup)
            );
          }
        }
        function Rx(s, e) {
          return new Intl.DateTimeFormat(GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hourCycle: e ? "h23" : void 0,
          }).format(new Date(s * 1e3));
        }
        function Ux(s, e) {
          const n = e > 0 ? s / e : 0,
            r = n.toLocaleString(GetPreferredLocales(), {
              style: "percent",
              maximumFractionDigits: e > 100 ? 1 : 0,
            });
          return { percentUnlocked: n, percentUnlockedStr: r };
        }
        function Cx(s) {
          return ((s ?? 0) / 100).toLocaleString(GetPreferredLocales(), {
            style: "percent",
            maximumFractionDigits: 1,
            minimumFractionDigits: 1,
          });
        }
        function Kx(s) {
          return s >= 17891964e-1;
        }
        function fh(s) {
          if (s !== void 0)
            return { "--icon-size": s == "fill" ? "100%" : `${s}px` };
        }
        function hh(s) {
          const {
              imgURL: e,
              glow: n,
              pauseAnimation: r,
              hidden: a,
              alt: o,
              hideNativeTooltip: c = !1,
              className: d,
              size: u,
              ...g
            } = s,
            [f, h] = m.useState(!1),
            x = m.useCallback((B) => {
              B &&
                (B.complete
                  ? h(!0)
                  : (B.onload = () => {
                      h(!0);
                    }));
            }, []),
            v = n && (a || f),
            I = fh(u);
          return (0, t.jsxs)("div", {
            className: (0, D.A)(
              Dn().AchievementIconWrapper,
              d,
              r && Dn().RareAchievementNoAnimation,
            ),
            style: I,
            ...g,
            children: [
              v &&
                (0, t.jsx)("div", {
                  className: Dn().RareAchievementIconGlowContainerRoot,
                  children: (0, t.jsx)("div", {
                    className: Dn().RareAchievementIconGlowContainer,
                    children: (0, t.jsx)("div", {
                      className: Dn().RareAchievementIconGlow,
                    }),
                  }),
                }),
              a
                ? (0, t.jsx)("div", {
                    className: (0, D.A)(Dn().HiddenLabel, v && Dn().IconGlow),
                    children: "?",
                  })
                : (0, t.jsx)("img", {
                    ref: x,
                    className: (0, D.A)(Dn().Icon, v && Dn().IconGlow),
                    src: e == "" ? void 0 : e,
                    loading: "lazy",
                    alt: o,
                    title: c ? void 0 : o,
                  }),
            ],
          });
        }
        function Go(s) {
          const {
              achievement: e,
              globalUnlockPercentage: n,
              unlocked: r,
              forceVisible: a = !1,
              hidden: o,
              ...c
            } = s,
            d = o ?? (r ? !1 : !a && e.hidden),
            u = (r ? e.icon_achieved : e.icon_unachieved) ?? "",
            g = r && gh(n),
            f = d ? Ro.Localize("#AchievementSpoilerName") : (e.name ?? " ");
          return (0, t.jsx)(hh, {
            hidden: d,
            imgURL: u,
            glow: g,
            alt: f,
            ...c,
          });
        }
        function Gx(s) {
          const {
              hidden: e,
              forceVisible: n,
              size: r,
              className: a,
              style: o,
              unlocked: c,
              ...d
            } = s,
            { appid: u, achievement: g, progress: f } = d,
            h = useGlobalAchievementPercentage(u, g.internal_key);
          return jsx(AchievementToolTip, {
            ...d,
            children: jsx(Go, {
              achievement: g,
              globalUnlockPercentage: h,
              unlocked: c ?? f?.unlocked ?? !1,
              hidden: e,
              forceVisible: n,
              size: r,
              className: a,
              style: o,
              hideNativeTooltip: !0,
            }),
          });
        }
        function yh(s, e) {
          const { data: n } = Co(s);
          if (!n || e) return;
          const r = new Set();
          let a = 0;
          const o = [];
          for (const c of n.groups) {
            const d = c.achievements.filter((u) => !u.archived);
            if (!(!d || !d?.length || c.archived)) {
              if (e) {
                if (c.dlcappid != e) continue;
              } else if (c.dlcappid) {
                r.add(c.dlcappid);
                continue;
              }
              o.push(...d), a++;
            }
          }
          if (o?.length)
            return { achievements: o, nDLCCount: 0, nGroupCount: 1 };
        }
        function xh(s) {
          const { appid: e, dlcappid: n, iconCount: r = 4 } = s;
          m.use(p.Ready());
          const a = yh(e, n),
            o = Bi(e),
            c = (0, C.Qn)();
          if (!a || o.isPending) return null;
          const { achievements: d, nDLCCount: u, nGroupCount: g } = a,
            h = d
              .sort((z, w) => {
                if (!z.hidden && w.hidden) return -1;
                if (z.hidden && !w.hidden) return 1;
                const Y = o?.data?.percentages?.[z.internal_key] ?? 0;
                return (o?.data?.percentages?.[w.internal_key] ?? 0) - Y;
              })
              .slice(0, r),
            x = Array(r - h.length).fill(void 0),
            v = (0, ui.v)({ appid: e, dlc: n }),
            I = (0, ui.v)({ appid: e, dlc: "all" }),
            B =
              u == 0 || !c
                ? null
                : (0, t.jsx)(b.EY, {
                    color: "plum-8",
                    size: "2",
                    children: p.Localize("#AppPage_Achievements_DLCCount", u),
                  }),
            A =
              u == 0 || c
                ? null
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      g > 1 &&
                        (0, t.jsx)(Ot.Y, {
                          size: "2",
                          contrast: "title",
                          href: v,
                          children: p.Localize(
                            "#AppPage_Achievements_GroupCount",
                            g,
                          ),
                        }),
                      (0, t.jsx)(Ot.Y, {
                        size: "2",
                        color: "plum-8",
                        href: I,
                        children: p.Localize(
                          "#AppPage_Achievements_DLCCount",
                          u,
                        ),
                      }),
                    ],
                  }),
            S =
              g <= 1 || !c
                ? void 0
                : p.Localize("#AppPage_Achievements_GroupCount", g);
          return (0, t.jsxs)(yi, {
            title: p.Localize(
              c
                ? "#AppPage_Achievements_Header"
                : "#AppPage_Achievements_Header_Desktop",
            ),
            link_text: S,
            total_count: d?.length,
            url: v,
            link_footer: B,
            block_footer: A,
            children: [
              x.map((z, w) => (0, t.jsx)(le.az, {}, w)),
              h.map((z, w) =>
                (0, t.jsx)(
                  Go,
                  { achievement: z, unlocked: !z.hidden, size: "fill" },
                  z.api_name,
                ),
              ),
            ],
          });
        }
        var vh = i(73644),
          jh = i(4515),
          bh = i(35177),
          Cn = i.n(bh);
        const Bh = 30,
          Ih = [
            {
              eType: ee.xY.kT,
              strPath: "quickref",
              strLabel: "#AppPage_LinksAndInfo_QuickRef",
            },
            {
              eType: ee.xY._b,
              strPath: "manual",
              strLabel: "#AppPage_LinksAndInfo_Manual",
            },
            {
              eType: ee.xY.cb,
              strPath: "warranty",
              strLabel: "#AppPage_LinksAndInfo_Warranty",
            },
          ];
        function Eh(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E._F)({ appid: e }),
            { data: a } = (0, E.bg)({ appid: e }),
            { data: o } = (0, E.is)({ appid: e }),
            c = (0, Gt.AP)(e);
          if ((m.use(p.Ready()), !n)) return null;
          const d = F.TS.EREALM === dn.TU.k_ESteamRealmChina;
          return (0, t.jsxs)(Ut.YZ, {
            className: Cn().LinksAndInfo,
            children: [
              (0, t.jsx)(tr, {
                text: p.Localize("#AppPage_LinksAndInfo_Header"),
              }),
              (0, t.jsx)(os, {
                url: `${F.TS.COMMUNITY_BASE_URL}app/${e}`,
                label: "#AppPage_LinksAndInfo_CommunityHub",
              }),
              (!d || Yo(n)) &&
                (0, t.jsx)(Ph, {
                  children: (0, t.jsx)(Mh, {
                    appid: e,
                    steamworksAppID: c,
                    app: n,
                    bSteamChina: d,
                    links: r?.links_and_info,
                    rgSocialLinks: a,
                    bRequiresShipping: !!o?.purchase_options?.some(
                      (u) => u.requires_shipping,
                    ),
                  }),
                }),
            ],
          });
        }
        function Ph(s) {
          const [e, n] = m.useState(!1),
            r = m.useCallback(() => n((a) => !a), []);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(T.Z, {
                className: "responsive_banner_link",
                onActivate: r,
                "aria-expanded": e,
                children: [
                  (0, t.jsx)("div", {
                    className: "responsive_banner_link_title",
                    children: p.Localize("#AppPage_LinksAndInfo_MoreLinks"),
                  }),
                  (0, t.jsx)("div", {
                    className: e ? "expand_section expanded" : "expand_section",
                  }),
                ],
              }),
              e &&
                (0, t.jsx)("div", {
                  className: Cn().MoreLinks,
                  children: s.children,
                }),
            ],
          });
        }
        function Yo(s) {
          return s.type != ee.uE.RA && s.type != ee.uE.ue && s.type != ee.uE.FS;
        }
        function Mh(s) {
          const {
              appid: e,
              steamworksAppID: n,
              app: r,
              bSteamChina: a,
              links: o,
              rgSocialLinks: c,
              bRequiresShipping: d,
            } = s,
            u = !!r.categories?.feature_categoryids?.includes(Bh);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !a &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    d &&
                      (0, t.jsx)(os, {
                        url: `${F.TS.STORE_BASE_URL}hardware_order_terms`,
                        label: "#AppPage_LinksAndInfo_HardwareOrderTerms",
                        bStoreNav: !0,
                      }),
                    (0, t.jsx)(ls, {
                      url: o?.website,
                      label: p.Localize("#AppPage_LinksAndInfo_Website"),
                    }),
                    c?.map((g) =>
                      (0, t.jsx)(
                        Sh,
                        { social: g },
                        `${g.link_type}_${g.url ?? g.text}`,
                      ),
                    ),
                    Ih.filter((g) =>
                      o?.available_documents?.includes(g.eType),
                    ).map((g) =>
                      (0, t.jsx)(
                        Th,
                        {
                          url: `${F.TS.STORE_BASE_URL}${g.strPath}/${e}`,
                          label: g.strLabel,
                        },
                        g.eType,
                      ),
                    ),
                    (0, t.jsx)(ls, {
                      url: o?.online_manual_url,
                      label: p.Localize("#AppPage_LinksAndInfo_Manual"),
                    }),
                    (0, t.jsx)(ls, {
                      url: o?.health_warning_url,
                      label: p.Localize("#AppPage_LinksAndInfo_HealthWarning"),
                    }),
                    (0, t.jsx)(ls, {
                      url: o?.privacy_policy_url,
                      label: p.Localize("#AppPage_LinksAndInfo_PrivacyPolicy"),
                    }),
                    (0, t.jsx)(ls, {
                      url: o?.stats_url,
                      label: p.Localize("#AppPage_LinksAndInfo_Stats"),
                    }),
                  ],
                }),
              Yo(r) &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(os, {
                      url: `${F.TS.STORE_BASE_URL}newshub/?appids=${e}`,
                      label: "#AppPage_LinksAndInfo_UpdateHistory",
                      bStoreNav: !0,
                    }),
                    (0, t.jsx)(os, {
                      url: `${F.TS.STORE_BASE_URL}newshub/app/${e}`,
                      label: "#AppPage_LinksAndInfo_News",
                      bStoreNav: !0,
                    }),
                  ],
                }),
              !a &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    u &&
                      (0, t.jsx)(os, {
                        url: `${F.TS.COMMUNITY_BASE_URL}app/${n}/workshop/`,
                        label: "#AppPage_LinksAndInfo_Workshop",
                      }),
                    r.name &&
                      (0, t.jsx)(os, {
                        url: `${F.TS.COMMUNITY_BASE_URL}actions/Search?T=ClanAccount&K=${encodeURIComponent(r.name)}`,
                        label: "#AppPage_LinksAndInfo_CommunityGroups",
                      }),
                  ],
                }),
            ],
          });
        }
        function os(s) {
          const { url: e, label: n, bStoreNav: r } = s,
            a = (0, Qt.aL)(r ? e : void 0);
          return (0, t.jsx)(M.Ii, {
            className: Cn().LinkRow,
            href: a || e,
            children: (0, t.jsx)(b.EY, {
              color: "blue-8",
              children: p.Localize(n),
            }),
          });
        }
        function Th(s) {
          const { url: e, label: n } = s;
          return (0, t.jsxs)(M.Ii, {
            className: Cn().LinkRow,
            href: F.TS.IN_CLIENT ? `steam://openurl_external/${e}` : e,
            target: F.TS.IN_CLIENT ? void 0 : "_blank",
            children: [
              (0, t.jsx)(b.EY, { color: "blue-8", children: p.Localize(n) }),
              (0, t.jsx)(ko, {}),
            ],
          });
        }
        function ls(s) {
          const { url: e, label: n, children: r } = s,
            a = dr(e);
          return a
            ? (0, t.jsxs)(M.Ii, {
                className: Cn().LinkRow,
                href: a,
                target: F.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: [
                  r,
                  (0, t.jsx)(b.EY, { color: "blue-8", children: n }),
                  (0, t.jsx)(ko, {}),
                ],
              })
            : null;
        }
        function Sh(s) {
          const { social: e } = s,
            n = e.link_type ?? ee.jL.I0,
            r = (0, jh.X)(n);
          if (!r) return null;
          const a = (0, L.we)(`#StoreAdmin_SocialMedia_Type_${r}`),
            o = (0, t.jsx)(vh.k6, { linkType: n, className: Cn().SocialIcon });
          return e.url
            ? (0, t.jsx)(ls, { url: e.url, label: a, children: o })
            : (0, t.jsxs)("div", {
                className: Cn().LinkRow,
                children: [
                  o,
                  (0, t.jsx)(b.EY, {
                    contrast: "body",
                    children: `${a} ${e.text ?? ""}`,
                  }),
                ],
              });
        }
        function ko() {
          return (0, t.jsx)("span", {
            className: Cn().ExternalIcon,
            children: (0, t.jsx)(N.GrD, {}),
          });
        }
        const Lh = m.lazy(() => i.e(85139).then(i.bind(i, 64193))),
          Oh = m.lazy(async () => ({
            default: (await i.e(85139).then(i.bind(i, 64193)))
              .SeasonPassDisplayFromStoreBrowse,
          })),
          Ah = m.lazy(() =>
            Promise.all([
              i.e(36597),
              i.e(87937),
              i.e(28792),
              i.e(56589),
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(36786),
              i.e(55050),
              i.e(60480),
              i.e(60839),
              i.e(14632),
              i.e(5858),
              i.e(90914),
              i.e(54409),
              i.e(73810),
              i.e(96032),
              i.e(92705),
              i.e(9438),
              i.e(49928),
              i.e(49968),
              i.e(34004),
              i.e(11095),
              i.e(65050),
              i.e(50762),
              i.e(23027),
            ]).then(i.bind(i, 98144)),
          ),
          zh = m.lazy(() =>
            Promise.all([
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(60480),
              i.e(60839),
              i.e(5858),
              i.e(90914),
              i.e(96032),
              i.e(92705),
              i.e(65050),
              i.e(58612),
              i.e(93125),
              i.e(89672),
            ]).then(i.bind(i, 66825)),
          ),
          Nh = m.lazy(() =>
            Promise.all([
              i.e(36597),
              i.e(56589),
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(36786),
              i.e(55050),
              i.e(60480),
              i.e(60839),
              i.e(14632),
              i.e(54409),
              i.e(73810),
              i.e(49968),
              i.e(34004),
              i.e(11095),
              i.e(14867),
              i.e(8319),
              i.e(10177),
              i.e(68396),
            ]).then(i.bind(i, 2422)),
          ),
          Dh = m.lazy(async () => ({
            default: (await Promise.resolve().then(i.bind(i, 62038)))
              .AccessibilityFeatureDisplay,
          }));
        function Fh(s) {
          const { appid: e } = s,
            n = (0, yr.Fd)("store_page_asset_url", "application_config");
          return (0, t.jsx)(Nf.W4, {
            store_page_asset_url: n,
            children: (0, t.jsx)(Qo, {
              children: (0, t.jsx)(Vo, {
                children: (0, t.jsxs)(Ml.QA, {
                  eAdultOnlyMediaBehavior: "allowed",
                  children: [
                    (0, t.jsx)(Ns.X, {
                      config: {
                        "events-row": () =>
                          (0, t.jsx)(Wi.d, {
                            children: (0, t.jsx)(Nt, { appid: e }),
                          }),
                        "deck-topplayed-banner": (r) =>
                          (0, t.jsx)(Fi, { ...r }),
                        "steamawardsvote-embed": () =>
                          (0, t.jsx)(Ah, { appID: e }),
                        "demo-and-quick-pitch": () =>
                          (0, t.jsx)(Wi.d, {
                            children: (0, t.jsx)(pr, { appID: e }),
                          }),
                        "deck-verified-results": (r) =>
                          (0, t.jsx)(Rc, {
                            appID: e,
                            results: (0, yr.Tc)(
                              "hardwarecompatibility",
                              "application_config",
                            ),
                            appName: (0, yr.Tc)(
                              "appname",
                              "application_config",
                            ),
                            ...r,
                          }),
                        "gamehighlight-trailer": (r) =>
                          (0, t.jsx)(dl, { ...r }),
                        "gamehighlight-gamepadcarousel": (r) =>
                          (0, t.jsx)(Wl, { ...r }),
                        "gamehighlight-desktopcarousel": (r) =>
                          (0, t.jsx)(yc, { ...r }),
                        "discovery-queue-app-widget": () =>
                          (0, t.jsx)(zh, { appID: e }),
                        "game-notice-controller-required": () =>
                          (0, t.jsx)(fr, {
                            appid: e,
                            type: Ds.EPurchaseNoticeType_ControllerRequired,
                          }),
                        "game-notice-vr-required": () =>
                          (0, t.jsx)(fr, {
                            type: Ds.EPurchaseNoticeType_VRRequired,
                          }),
                        "game-notice-vr-supported": () =>
                          (0, t.jsx)(fr, {
                            type: Ds.EPurchaseNoticeType_VRSupported,
                          }),
                        "season-pass-display": (r) => (0, t.jsx)(Lh, { ...r }),
                        "season-pass-display-gamepad": () =>
                          (0, t.jsx)(Oh, { appid: e }),
                        "storeitems-carousel": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "recommended",
                            children: (0, t.jsx)(Di.default, { ...r }),
                          }),
                        "storeitems-carousel-dlc": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "dlc",
                            children: (0, t.jsx)(Di.default, { ...r }),
                          }),
                        "creatorhome-carousel": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "creator",
                            children: (0, t.jsx)(rl, { ...r }),
                          }),
                        parentappwidget: (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: r.feature,
                            children: (0, t.jsx)(Ll, { appid: r.appid }),
                          }),
                        appreviews: (r) => (0, t.jsx)(Uc.l, { ...r }),
                        "wishlist-item-categories": (r) =>
                          (0, t.jsx)(Hc, { ...r }),
                        "purchase-options": (r) => (0, t.jsx)(bu, { ...r }),
                        "purchase-options-dlc": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "game-purchase-dlc",
                            children: (0, t.jsx)($u, { ...r, appid: e }),
                          }),
                        "purchase-options-dependent-dlc": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "dlc-dependency",
                            children: (0, t.jsx)(Xu, { ...r }),
                          }),
                        "summary-bar-top": (r) => (0, t.jsx)(em, { ...r }),
                        "features-section": (r) =>
                          (0, t.jsx)(Gm, { ...r, appid: e }),
                        "about-this-game": () => (0, t.jsx)(mm, { appid: e }),
                        "page-sections": () => (0, t.jsx)(Bm, { appid: e }),
                        "legal-notice": () => (0, t.jsx)(Mm, { appid: e }),
                        "press-reviews": () => (0, t.jsx)(Tm, { appid: e }),
                        "ai-disclosure": () => (0, t.jsx)(Lm, { appid: e }),
                        "mature-content-description": () =>
                          (0, t.jsx)(zm, { appid: e }),
                        "music-album-details": (r) =>
                          (0, t.jsx)(ig, { ...r, appid: e }),
                        "interest-buttons": (r) => (0, t.jsx)(pg, { appid: e }),
                        "add-to-wishlist": (r) =>
                          (0, t.jsx)(Yr, { ...r, color: "storegreen" }),
                        "recommendation-reasons": (r) =>
                          (0, t.jsx)(Qg, { ...r, appid: e }),
                        "friend-ownership": (r) =>
                          (0, t.jsx)(bp, { ...r, appid: e }),
                        "referring-curator-review": (r) =>
                          (0, t.jsx)(Ep, { ...r }),
                        "game-rating-section": () =>
                          (0, t.jsx)(O0, { appid: e }),
                        achievements: (r) =>
                          (0, t.jsx)(xh, {
                            appid: r.parent_appid ?? e,
                            dlcappid: r.dlcappid,
                          }),
                        "early-access": (r) =>
                          (0, t.jsx)(ym, { ...r, appid: e }),
                        "ownership-banner": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "owned-game",
                            children: (0, t.jsx)(F0, { ...r, appid: e }),
                          }),
                        "store-awards": () => (0, t.jsx)(kf, { appid: e }),
                        "points-shop-items": (r) => (0, t.jsx)(Hf, { ...r }),
                        "item-shop-items": (r) => (0, t.jsx)(eh, { ...r }),
                        "links-and-info": () => (0, t.jsx)(Eh, { appid: e }),
                        "write-review": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "owned-game",
                            children: (0, t.jsx)(Af, { ...r, appid: e }),
                          }),
                      },
                    }),
                    (0, t.jsx)(Ns.X, {
                      omitFocusNavTreeBridge: !0,
                      config: {
                        "review-award": () => (0, t.jsx)(yl.Ay, {}),
                        "broadcast-embed": (r) =>
                          (0, t.jsx)(Nh, { ...s, appid: r.appid }),
                        "store-sidebar-accessibility-info": (r) =>
                          (0, t.jsx)(Dh, { features: r }),
                        "store-sidebar-controller-support-info": (r) =>
                          (0, t.jsx)(Ni, { ...r }),
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }
        function Vo(s) {
          const { children: e } = s,
            [n, r] = m.useState(!1);
          return n
            ? e
            : (0, t.jsx)(Ns.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-gameinterest-cache": (a) =>
                    (0, t.jsx)(Nl, { ...a, markReady: () => r(!0) }),
                },
              });
        }
        function Qo(s) {
          const { children: e } = s,
            [n, r] = m.useState(!1);
          return n
            ? e
            : (0, t.jsx)(Ns.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-store-browse-cache": (a) =>
                    (0, t.jsx)(lm, { ...a, markReady: () => r(!0) }),
                },
              });
        }
      },
      93237: (j) => {
        j.exports = {
          "duration-app-launch": "800ms",
          Icon: "M5YgSyrfvCXXY_XYhYzcl",
          AchievementIconWrapper: "_1DmdUWkRKPlUYGtbBrrRtx",
          RareAchievementIconGlowContainerRoot: "_1R1QQtfmrxNkfIGlKSdDqG",
          RareAchievementIconGlowContainer: "kt0NXHlg2kFjVkiN_2eEL",
          rotate: "_1ovVdJrqKKpglnX8FYej3J",
          RareAchievementNoAnimation: "_1mSBKtmFFZvwBLtxBOMwak",
          RareAchievementIconGlow: "_3vFmYitX2pXuOenxR0blk8",
          IconGlow: "_2BCoqu4wd4ehkJkelVhjb3",
          HiddenLabel: "_1smYxH70zcX0D3CUQDwF3o",
          BackgroundAnimation: "_2XvhZ8yFczR-W7gwjaWoPT",
          "ItemFocusAnim-darkerGrey-nocolor": "NK0YaI2_mwagRH7-tm_GE",
          "ItemFocusAnim-darkerGrey": "_1HU-Kl32lDEq7yT3ba8R5G",
          "ItemFocusAnim-darkGreySettings": "_3PM-EU4OtOaw12xVeiCzRL",
          "ItemFocusAnim-darkGrey": "_1EXXhQ3MOk6cW2xYESY_2i",
          "ItemFocusAnim-grey": "_2V88aGECYldq8tqX286rzp",
          "ItemFocusAnim-translucent-white-10": "_9lQAMImHGe5qClr8AL2Vc",
          "ItemFocusAnim-translucent-white-20": "_3I_vGf7ujHONdHYkGitG6t",
          "ItemFocusAnimBorder-darkGrey": "YU4V8GFJ50LIlOS68c6Wc",
          "ItemFocusAnim-green": "_1qBrpfK0gqYyjGTNuC0FHo",
          focusAnimation: "_1vLld9YwBtNMfxoDxGo2Z4",
          hoverAnimation: "_3JxsbmkLDkwKiYvrnnqOtd",
        };
      },
      89611: (j) => {
        j.exports = {
          ObjectFit: "_NIZ2fYFBu6WSnEE1H6i3",
          ObjectPosition: "_3OZ4rrlKzwAYOKP9HdqUrq",
        };
      },
      24089: (j) => {
        j.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      8833: (j) => {
        j.exports = {
          Separator: "_2v8lnOhHPKk5DrlAD0yAwc",
          "Size-1": "HA_T1szVWGIw7_cDibhei",
          "Size-2": "oSgUz2qE-NgHuOm4wt_OC",
          "Size-3": "f9Ra4JmQiBJz_dBLijs_x",
          "Size-4": "_1zkUYDDyfzPgesBbGmMsxP",
        };
      },
      75180: (j) => {
        j.exports = {
          Grid: "_2IVd64AHN6R428cgcPqW7M",
          Display: "_2PUyyAEGuZenuwES7VJvQO",
          Columns: "_16FZUyKiH6Z7trthKypJwf",
          Rows: "_2QdiX1hDsJmlkrHmcCOMbV",
          AutoColumns: "Cr7YIMQn6_lDRU4-3BR8b",
          AutoRows: "_3kyzvGnYVLT0DW6nzP9n18",
          AutoFlow: "_3AvZKfpfaIQbfczVRBASsX",
          Areas: "_1-yfCTWkj4tOFfb3EKXx6N",
          Flow: "_1yUwWGTk4IX0IhdJiKfFBf",
          AlignContent: "_2Tglp6488nVBhU976Llfpe",
          JustifyContent: "TT1_g1XWXbbLgxOPIpczV",
          AlignItems: "_1ve3GjJA-d6MfYcIiXdqz0",
          JustifyItems: "_2LsmJGVn3g0GHmBPNWVn5T",
          Gap: "c0C2uHpDLCegllhH1rM3M",
        };
      },
      39049: (j) => {
        j.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      66575: (j) => {
        j.exports = {
          GameRating: "dIVKtZR3FPk--WsTHPpCg",
          Title: "g6OWaWhTs7-jMnb_ipVdD",
          Banned: "_2OBX7mi9MwO3wh8vz69RW_",
          RequiredAge: "_3ixbRnhEXoSAFMMOxMR7kP",
          Icon: "_3NX32L22YZdobMQdeHDTRz",
          DescriptorText: "_3x1L_MQDZD6RKFHPJQDmCN",
          AllAges: "_2VePhLetNEJD1gctFnUgIC",
        };
      },
      58123: (j) => {
        j.exports = {
          SaleTechPriceGrid: "_14x0A0cAhaV-g8Od_xGbRL",
          LowestRecentPrice: "yLlRefh-UYhYZLE0_k-BK",
          FinalPrice: "_3P_1WcsVP8GJKQ8olprKQ2",
        };
      },
      88208: (j) => {
        j.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      5598: (j) => {
        j.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      9246: (j) => {
        j.exports = {
          narrowWidth: "500px",
          AboutThisGame: "zeZyN-4SGkKN1ukmy4_Ns",
          Header: "_2bGVPSkxnJDt2vN54TTfNK",
        };
      },
      56680: (j) => {
        j.exports = { WishlistModalOverride: "_3V4Y44VzkkQWUAtDh6jQfA" };
      },
      8611: (j) => {
        j.exports = {
          narrowWidth: "500px",
          AutoCollapsePanel: "_2OFBKij25NOweLoQKnH-Hl",
          Contents: "_3z2f7_LIqrKVFzXn-nSN98",
          Collapsed: "_2EgdWaUHP8QhQdix9MlF0d",
          Expanded: "_35-z7zCVOx1yWKf8cJjZkH",
          ReadMore: "_1qDLg0KVwgnZmMwUt99Egn",
          ReadMoreBorderPulse: "_4w9-SNzzdsOMsBG-Ztqf4",
        };
      },
      78747: (j) => {
        j.exports = {
          Container: "_2fN9Ufmh18msZ2F2Tvk4xy",
          Review: "GjOrllO2lWUDh-q5xW-yh",
          Video: "_1B_treg9z5S0DYtv4B2RDc",
          VideoThumbnail: "_3mf5Rtv6HYXZVTxqOYQbBn",
          PlayOverlay: "_1qClaf6FsIipDDUZRsUUbZ",
          PlayIcon: "_2pX0wr8m0s0gCZdHf1uABw",
          DetailRight: "_3glB4FwLdnWk0HbYsZu2CW",
          NoVideo: "_1YdBZgEGPw811XZZnFZf6p",
          Blurb: "_1xWSWeWA0WhhtjcjOw1SKJ",
          Notes: "_2GDWQy36nGG2HVC8I2cHWJ",
          BlurbText: "_2A6WzqPZVha8D0cLveWr_2",
          CuratorReceived: "_2JfTBx-oL3rgrWp-Mcceah",
          Avatar: "_2STaox80L0TUAyTTWvgg7K",
          CuratorInfo: "WDMiZwGT09DlTY2Zolj4H",
          ReviewTitle: "_3Gf4l7NBeeqbvtQVCV1JR4",
          Recommended: "luHN4D2sNDLnLyxeBlF6S",
          NotRecommended: "MScyX4kNlmotUkn4yfT87",
          Informational: "_3xT11pNcMt5vQZZryBo89j",
          Attribution: "Ae6CVnStJmXj4P1nm4fyH",
          ReviewDate: "_1-xxEVmOFH_ALirCqnOMnk",
          ReviewText: "_1bxDLybmzg3qlRHA0uPpgw",
          ActionButtonContainer: "_2DQYZmNg65M853z4QxNcEm",
          ActionButton: "_38k1l9_8MwKGpdKbFVO0iR",
        };
      },
      399: (j) => {
        j.exports = {
          TopPlayedBannerCtn: "_3m4H3O5OzhRFzeMBr1GiJh",
          DeckLogo: "_2fWPD8Bedv6c-yWTvZgAqn",
          BannerTitle: "R1EIDJDmlv3wymunXxGRz",
          BannerRightContent: "_3xmin8LWu9-cWEzsA9HEqJ",
          BannerHeader: "_2qmB_riG0azA3gECMHzEs_",
          BannerGameText: "VTRpu0RD7FA2Cn1UIp_Sn",
          Adventurer: "_2Vfzito2cEHtvOnl6hWD2t",
          Anime: "_1ms_oh1o4LBbEJqlW8N4RN",
          Apocalypse: "_2ba_EyebFU2kLncHcEzoDD",
          Astronaut: "W2X9qKmJY1fAkIM7GsolJ",
          Beach: "_2_LFdeCE0gMxtEUKki5NqO",
          Bed: "_1oByLIlDSo2XnZICLfSwvI",
          Bus: "OB7zhBm37vzrd_8riRWex",
          BusStop: "_2rd1Qm-OWFA2YmwiW-AghQ",
          Campfire: "fWKU1FqjXbYwqp1oB_xBs",
          Car: "GeAKpVY8Ba6-QT7tznVks",
          City: "_2QdugEdfMAb6V79yJPUR9L",
          Family: "_1g6v39jh2MnE5vuJnDagye",
          Farmer: "_3HFHolp6BQ7uMIedbyxc7D",
          Knight: "_2O7EV4jX-WO2knwBjeJz_D",
          Miner: "_13chpvw7DnNOsWqu92qK7_",
          Porch: "_3M4GVoRT9lg9yBm6y1dCSi",
          Robot: "_2RASj4ZnI-VHE5mRp8zKoB",
          Superhero: "_2HvlKfWJXw_ynFe07XKdY8",
          Woodsman: "_1CL5Wdh_nHnOYZvnjVA8YD",
          Zombies: "_3Ox405Kuu5XWIbPA9UvtBS",
        };
      },
      72723: (j) => {
        j.exports = {
          Body: "gWQvQ7aZkfTUnQOpDv4Kf",
          Capsules: "_1vjLJiRQDnGVGagJgrX2vw",
          Item: "_2WnGgbEVDGWA6Aiw-Iac2P",
          CalloutRow: "_2wSV8GFu39c1jHvjlHefEk",
          Callout: "_38aaH3e_WuX02rED-F5LmP",
          Link: "_3r5JsPI6ThzHIlTKWEG3hE",
          Separator: "_3P74cVQ7H470Sa83yRrh9a",
          ActionGroup: "_2-u-jSAp9SDeNep-55FcIH",
          Total: "_2b_TYMpDt3KAMX5DUL-a60",
        };
      },
      26666: (j) => {
        j.exports = {
          PackBody: "_1zq333d3pW7338j8MOxfoG",
          PackInLibrary: "_1-sgh5Na-U3TZmO_toUckA",
          PackCapsulesCtn: "_2jS1JS0vHcRTtKK5vN9bGo",
          PackCapsules: "CfSj_bx6zkyciRhJhRV4c",
          PackCapsulesCollapsed: "_3BI6mqK_SNTj5MBr8unOIZ",
          PackCapsule: "_3Cmt3xhzt5m1iqRlGl85t2",
          PackActionGroup: "_1_rYPVtMNifGny-euMweMD",
        };
      },
      16071: (j) => {
        j.exports = {
          Row: "_3ZALGXUTUz9dMhpygZfEdz",
          FlagInLibrary: "_3J48uHl9Qq29G8SehTatYH",
          FlagOnWishlist: "_32GtArPK5vie6wQkr_eb7v",
          FlagInCart: "K1EJQRP74k3RqoneQCEf0",
          FlagIgnored: "_2_0lJhNfAjXG-HPV-9zVAu",
          Price: "_17AaRdslMVuhHBhcGgPgku",
          Highlight: "fHbnLbbM5MIuAK3uVlGNu",
          Name: "_2yxFkEsqp_Q09rVOSLXhE5",
          HighlightReason: "UyursQIO7t9_SSLgITA19",
          Pill: "_3aNRifG-b3UQH_dr4ksC-T",
          Footer: "_1dVpIbJBuAfOZVuTI3NAbh",
          PartialList: "_3EpqTNpUJjZtEVKKKl3j82",
          AddAllToCart: "_19v2LelCK8HYDasOcWgZXu",
          Revealed: "_3q1MdA6e49037eOZQKOiAq",
          DLCRowReveal: "_3K-29pm9jNOERms32B8gs7",
        };
      },
      38404: (j) => {
        j.exports = {
          EarlyAccess: "_1T_V-LxtA8jew8eiZAQrDD",
          LeavingEarlyAccess: "_2rqsrOwTXLhlSthqDd-y0q",
          Banner: "_2YvNHzQ1VSnCS0ReE6v9T-",
          Title: "_3_95-MF8UOtlX2WqBSCPKN",
          Desc: "qt-OB_c0QQpC8k9v0X_dP",
          Details: "_2UGCx9L9_8NyGSgDyiuyLT",
          Warn: "_1GwZ7imQJcMFj_OCNlAY0n",
          Stale: "_1_3oFMPoQlBsbOcivPi9_d",
          StaleDevs: "TdPVzAhAirPmDB4nB3Cnx",
          DevsSay: "_3wEJCC6E8v86rS7edXsnmn",
          Question: "_1CZg_6pRD4X5aFvbD3VXN5",
          Answer: "_3lCa8UpT82vkN-BV_hD_CH",
          Link: "_29rMxnVxsbWIDWSxuA9idP",
        };
      },
      55367: (j) => {
        j.exports = {
          CategorySection: "_2LrShr7IWhwfZHCuws5N_O",
          CategoryLinks: "_3vOT4NU0o9mYCU_6o_CCRh",
          SearchLink: "_3-Crx2dI9tgqfo1yOT0jw8",
          FeatureString: "_2OKLR5HZU6R8HIQRFgvQBC",
          IconContainer: "_2prv4ehi70tjwqV7eeUpNn",
          Icon: "_15-uJ3AkgzMBpkybqwjiKt",
          LearningAbout: "pi0uqQekyrRHnJCaUyg1u",
          ThirdPartyNotice: "_3IUbntWc11AYm240qy6cLU",
          Row: "hgTWadPUVdT2y17u5wU7Y",
          Anticheat: "_1diznsEx0RUvdMbTwROVEu",
          Name: "_261S1NxSb_IbVaNg77Y9i5",
          BootProtection: "_1SiKZVlI9CdyQnLvyTUYLy",
          ThirdPartyAccount: "_1oaAmtSoqPhwLiGjQ0Y3OG",
          Type: "_1qNe_uLNeOV6BKlQ09jU3n",
        };
      },
      77614: (j) => {
        j.exports = {
          FriendAvatarLink: "_1HwFByD2tVkgQjdeo3upUL",
          Details: "_3pLLJpVOHHWcI5UvltWXQZ",
          Name: "_1MsiMQXdRUXrfqSEZ7ewHM",
          Playtime: "RmetILTrNzddKrz3r4CGf",
        };
      },
      16836: (j) => {
        j.exports = {
          narrowWidth: "500px",
          FriendOwnership: "q5QNi4yaj2QV4U77xNSKp",
          FriendList: "_1jkvh5RzUyV-afkmRZBsEt",
          WithNames: "_1YludsZff-JSeiUJGTaBFP",
        };
      },
      20338: (j) => {
        j.exports = {
          storeNarrowResponsiveWidth: "910px",
          TheaterDialog: "xunB9e_XJHY-ooP2zNKag",
          TheaterModeHeader: "_17YJmMg813A6ympHsbwM7n",
          TheaterModeFooter: "_2469TwTWqAicsI1RnlvsCU",
          TheaterModeFrame: "_35w3v2QgvaAyQ5US4OJOMN",
          Center: "_1nooJM8SlOrumMla-n5kcg",
          Right: "_124rcqdHDS-7ZiS4Ug15rj",
          SkeletonViewArea: "_2Jk5sZuh6Yam81wQzpBUWj",
          TheaterMode: "_1_fv9P3XnAj9M8zRjBUsm0",
          ItemViewArea: "_33i4zSWeCfsTaa25tHu5Us",
          FullscreenArrow: "_258hIVgneRO0dUbgnPZh_R",
          Visible: "_2--1QTPdJLonnu6CEnIlNX",
          Next: "fpXUftvcJkKb5pMG7ctH0",
          Previous: "_1h__Z4jtufgzUAJJ5y1c1v",
          ViewedItem: "_2KIVa7T6PMqAVvVKkwdVZO",
          Active: "_2CZHqKcmYmjWbdMK4aidRV",
          Screenshot: "_2zBrte9SWvr4lSb3lAkNpR",
          PageEmbedded: "TunqbQieNpnpnbQo2LG9Q",
          Controls: "_2h-RE4j4pbuPMtOjZ_fCyr",
        };
      },
      69131: (j) => {
        j.exports = {
          StripSkeleton: "_3-9sYm9MJfEc7DUv7-tqG2",
          TheaterMode: "_1l7ZtmzPX6TqB7rvA1wdUR",
          Items: "_2Y9cdZVnoEU6uCzgX9P8gO",
          Scrollbar: "_3uF_Wfs589dYv9BQRlFmZt",
          Strip: "_3CdIWRo2e9D_FxVHjVII7d",
          StripItems: "ZpjLn9D4rTIVnM4axYSoG",
          Item: "_2Ose8zPg3MlKQQeG9nwv24",
          PlayIcon: "_2qzM1XTf6NXdHvCDD9D-PF",
          Active: "_2uCL56lGO9iUUcLEtE83zG",
          StripScrollbar: "_2Z-YccLz9coJD6SBV13Fya",
          Arrow: "_2lIBEOcXRC3KKhDamcV9t",
          Track: "_2SBCUqLfy4PgWdonAHX_fR",
          Thumb: "_3DXmyv2Yx-lnmLz03GryEd",
        };
      },
      19813: (j) => {
        j.exports = {
          TheaterDialog: "_1cR7UuAEyt152HSNWylbqz",
          FocusRingRoot: "_3zXPOFGaYWCD3fd-ESi70A",
          FocusRingClip: "_2jZfIoMOoZQx6kdcgBhMHa",
          GamepadCarousel: "PYe6PtelQzh2UB7OtpWMk",
          CarouselItem: "_3ulAzvZbXfVEZatmwdipsk",
          StillPoster: "_3pCSQuZSNLXT9AhGtOXpNb",
          VideoStarted: "_1lbow7a3gRkR7fjSzCyrXr",
          Poster: "_3ExPGBI8XGCQSuFfQ6JAlj",
          Icon: "qcq_UlIfBHLqkTw-IcrR8",
          TitleCard: "_3HXfy0jxwE_OWJIKKyQFUE",
          Bottom: "_1QDEDk1q1y-jG5E4UV5-rC",
          SingleFileTrailer: "_3i1CkfhnBQSj5NuMV9PxnF",
          Screenshot: "p0NZiXp9agvT1BeWoCNDK",
          DashTrailer: "_1B_rAEDcFM9o79CoGmnUgM",
          BottomRow: "_3ZLxtge6-gw9pSzVXTf4gd",
          WishlistButton: "_23N7SSBmU_2S4o8Kc8NBEg",
          StarIcon: "_3LKNblFkXFm-hTnW4lMeOQ",
          ButtonIcon: "FP1PcTBe4kKmycVNKGtk3",
        };
      },
      19218: (j) => {
        j.exports = {
          WidestChildContainer: "_3YUWXt-ylyufqMm-YAliva",
          Hidden: "_29niryxpei49tSjYOBokyK",
        };
      },
      30820: (j) => {
        j.exports = {
          Item: "_2YfN55cMXVU9OD0d3_LoX3",
          ItemImage: "_2Zh_TIIvdD8EtU6ZxtELog",
          Price: "_1Fz-4Scga6rZOdvvmk2jLV",
        };
      },
      45200: (j) => {
        j.exports = { LegalNotice: "_2bOEuokOOajSeGl2yZEcPh" };
      },
      35177: (j) => {
        j.exports = {
          LinksAndInfo: "_3TuBg7_-ESlXR8VdekZAh6",
          MoreLinks: "_38qMxU84U3MdKhwOyNRvBh",
          LinkRow: "_3Fsj47byOWjgdvPZrMt79B",
          SocialIcon: "_2MvdxngdrJtnwX501aUgFu",
          ExternalIcon: "_2WUly4aWb_9foEZI0ARnK1",
        };
      },
      72390: (j) => {
        j.exports = {
          Score: "_3KFgbk3IzIHdQyWbx3ixQd",
          High: "_2gwFIDqCXQrEFHQkkMylvp",
          Medium: "_1WRij-yZeVQrXpyB2BQ5Hu",
          Low: "_20XeCHY1vgYRARXPiXK8qr",
          ExternalIcon: "_2_11-nL5KwLaw57DKAUUxk",
        };
      },
      76985: (j) => {
        j.exports = {
          narrowWidth: "500px",
          TrackListContainer: "_1B94J6blto63JooX8xE8x2",
          DiscTabs: "_1f6LeASDnCawGhXbVgpGbN",
          TrackList: "_21qq2GkE5LyRbZDBkOQ1li",
          TrackTable: "_23UelU4wgZXygL_sXDYvsg",
          Number: "_3thPgGlKH6Yk_mzgsffxqm",
          Name: "_3uE097OXGUs1NHySOUIIvS",
          Length: "_2X2HpO9BwpkWRjK97-LN0",
          Odd: "_2lXiCmpwORaq53wIqXcIGO",
        };
      },
      95036: (j) => {
        j.exports = {
          AppList: "_3WieBjkVb28rpePKxyn3gl",
          AppText: "sqjdG_fjedZUmCmzyHdpN",
          InLibrary: "PIsyQ6ew7BEmrOpzzJKCT",
          AppIcon: "_1zJQxJZsmaRcsnMKVsj1SD",
          AppImages: "_2cKkqSc2Aw1kr_8SzTKYNF",
          PlatformIcons: "Wd0ssUN-E1g_6nF5cApwN",
          PlatformIcon: "_2_NmZjBVcuMKTZkfsRP_HD",
          DiscountAndPrice: "_2ooDkAkePuzL0kjqCaU2lR",
        };
      },
      54652: (j) => {
        j.exports = { PurchaseOptionBanner: "_1P2U635xpdOLT2_aa1xwdL" };
      },
      21763: (j) => {
        j.exports = {
          PurchaseOption: "_3TUpv9-O4TIdg6P4Fx3oE7",
          Green: "PnUl8lQhMsTJfCeDt3Hea",
          OnlyChild: "_1Cty2Al1wcwqrIfgzp797A",
          AllowSingleLine: "zw6LBxJeRCbByX-rRxjyh",
          AllowTwoColumn: "_2AYML2I4RE2b74cxTDrgs",
          LeftColumn: "_2TQm9gAofDprradamqfdnX",
          DebugInfo: "_2CZQTTB4EFxu3TE_6mM47o",
          FocusRing: "_1flB_uKuLjatwxoY8KvUUG",
        };
      },
      97393: (j) => {
        j.exports = {
          PlatformIcons: "_34fO3Y9HSHm3JfPdMRIf8m",
          PlatformIcon: "_27rt4wNpnea7jUH3nWwj8m",
        };
      },
      59869: (j) => {
        j.exports = { MenuItem: "_3VWkkleXCrqxmjyoSCylnk" };
      },
      80974: (j) => {
        j.exports = {
          InLibraryRow: "_1Ea1bwlHmxO1UmYTEQ8jHC",
          InLibraryFlag: "_2GveL49aC8sm8Mey1StYth",
          InLibrarySVG: "_2HPdYtyoJJ6hsAHw3jTQ10",
          Actions: "_2vmUZW0F1kvoznIng92EOn",
        };
      },
      14844: (j) => {
        j.exports = {
          PageSections: "_1_PU6_24UNZMD-aymVilmB",
          PageSection: "_2WpiheNBkhzJpmxQ4Arawu",
          Header: "y5728HUyiI5XdCDBm5D7A",
          Banner: "_3hkPxq8NpEEOtbG7MPXNUy",
        };
      },
      30452: (j) => {
        j.exports = {
          ItemImage: "_2emVfokDB6oT4pOU15fVVR",
          ProfileBackground: "_vaAGc8YOYW7s9yJPKtHf",
        };
      },
      6876: (j) => {
        j.exports = {
          ThumbIcon: "_2lDikjo0mk970SwUm3DRTK",
          Down: "_1Cwc3y07Is4gEGD1Q0zKc_",
          CommentIcon: "_2obrbR9xy_xows-ok2qmxn",
        };
      },
      18574: (j) => {
        j.exports = {
          CarouselPaddingTop: "8px",
          CarouselPaddingBottom: "8px",
          PurchaseOptionDisplay: "_2zQCVD-7iZA3eShAcWuSrv",
          PurchaseOptionCarouselWrapper: "_2FFRq4AxO47tckosaUvn2X",
          NoCarousel: "_18-XQUf8L7zxxacjLnq08M",
          Single: "_1i8lZsm1WSza_LBo1riVvc",
          PurchaseOptionsCarousel: "_149hLCvHEvVVEn7fORfG75",
          PurchaseOptionWrapper: "_1F2jbNP9IHRfKonl_3baY8",
        };
      },
      77774: (j) => {
        j.exports = {
          ComingSoon: "VcfhtxgxhXCS5YBzd4O22",
          OffsitePrice: "_3nVt7tQlJcd-SJe7k_lDmO",
          Content: "yN2IR7l0MpF7rTD6dlS9f",
          Reminder: "_2KJX1jAw_ha_T3Dv2bDULi",
          Note: "rM8RXPAb9DnacUnfXKjkg",
          Preload: "_2uqsForJwTJzUiCcKC6WK7",
          PreloadActions: "_8FtJtmmrluBTGIheOirY_",
        };
      },
      23413: (j) => {
        j.exports = { AppList: "_1MVRGLawsCpcXLFlFkKAGL" };
      },
      60993: (j) => {
        j.exports = {
          narrowWidth: "500px",
          RecommendationReasonsDisplay: "_8A-vhpEBdS-qVF5Jl9jc7",
          ReviewScore: "DpGN2-UG7sEXIZDAb2xtu",
          Positive: "_1kiOvqf3wN3kBFxMVI8w-3",
          Negative: "_1UTMsJhG80MMvkig6Pw7UN",
        };
      },
      54629: (j) => {
        j.exports = {
          AppList: "_12s81WYtM0B0CmDPB6BMY0",
          AppIconAndName: "_3CcmNvL8ajAAtVfsoFxFRA",
          AppIcon: "_1abKISd0PdmRu72s9yPT6D",
          AppName: "_2VU-DDzaxFtQJqLuyn0IQw",
        };
      },
      2699: (j) => {
        j.exports = { AvatarList: "fIVYEi9n1QY4vaQuxZYW0" };
      },
      13290: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Reason: "_2m2v9tWbf72NndX7vCQd3D",
          TopLine: "_1-A6rmFS2woZVY0AjEpaRx",
          Icon: "_2DPsFVf6FeqLONYXI_xame",
          Positive: "_2JQ3YzNKEfGoIo7Y4JIPZo",
          Negative: "_3vjAexY4vrU7H4bRPWQS1P",
          Additional: "A9r5gdP2l607_aZQG4U0f",
          Divider: "QsaD3B8iBvo8FI0s8Heyb",
        };
      },
      57102: (j) => {
        j.exports = {
          TagList: "_3jV1ymbnCcg8o3qq78ndN7",
          Tag: "gctfUSqAf4-wM1_s7LW7C",
        };
      },
      74049: (j) => {
        j.exports = {
          VerdictIcon: "_9yuiPD5NCU4QYi8jzKFrC",
          VerdictIconDown: "_2j8Acce2gU2Mnn4slpUyTf",
        };
      },
      94255: (j) => {
        j.exports = {
          ShopLink: "lqD2vDqW515szC9Dt3o8c",
          Items: "pge6cRE3xuT4D-kvcijJs",
          ActivateLabel: "Ywd6FXH3HxWEfSO_4XhD",
          Link: "_2773Feh3LQ2SD5dtpRj6hJ",
          AllText: "IfnLtAVfojeH3V-6ObQjr",
          Narrow: "_1ElroLhDfZVa0RFIGapb2J",
          Wide: "_3wGfw-n0Vvme1W7TMRVn1I",
          ShowLink: "_1VS2woF-3sJBcdv8ku8V7m",
          OverlayLink: "_9c2z0an8oHdeFIpJYVdD6",
          InlineLink: "_3qVPPRLyJLnqCVDKgRBYMz",
          ResponsiveLink: "V1oPnW4SHTQZyfLtIOACA",
          Text: "_1VPalkyDcngLWmtdDU2UOT",
          Arrow: "_2UhU5Y9TVx7gCVaf863aKB",
        };
      },
      75995: (j) => {
        j.exports = {
          SteamAwards: "jJURdXW1ChOFN-_p287Zm",
          Banner: "FIGm-_qZMzF3jFUHQ3WnL",
          Titles: "_2J_cQuvocvg37gIlzurEay",
          Winner: "n_444AQvZuBuGzXn2ekfZ",
          Category: "_3kIk6XVA93BAg1PpnlC8jR",
          Year: "jlMMBNsV2V8eRl6Kr0Vsn",
          Year2023: "_3QOYUCrBHECSTWOJukosMs",
          Year2024: "_2TAHqCxVB487j7ILyr5mt3",
          Year2025: "_23ICoTwOCxBIpOwj40sp4h",
        };
      },
      48338: (j) => {
        j.exports = { StoreAwards: "_1CixVKuNHvP6aAZqdbx6nN" };
      },
      3471: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Summary: "_3Prm5m5vhL6ZyDzq9BAi-Q",
          FeatureList: "_3Vfkk-MdImFuKEOrcb0-iS",
          CategoryIcon: "_3q4P9LQHRxDb5N6xxg2cno",
          FeatureNameContainer: "_22m8Q03ftyieJoZUjjJh7f",
          GroupLabel: "_3B6ryPkScWm0fGLpTRaOdy",
          FeatureGroupItems: "_3pZio2UegeDHK5If5lsACR",
          InfoRow: "MebJlVvjledfLjBzNnZks",
          FeatureName: "_2XVo6DmEk_3H8El012J6n3",
          Details: "_3i5pyKjdWnRPqCqWMAmwAb",
          ImageContainer: "_2hLfFwbFsdutlEoG1YjlJe",
          TextBox: "_2_4UfjDA56JkBQwKFByppO",
          Open: "_3qssZq9veZ21NuSSKhTJzE",
          Closed: "HymTK4fzKIl6TGUAtolY6",
          Image: "_33C0hhqH__tmabqGo9QM7O",
          LanguageGrid: "r1YWhYsuFs6pCiaVudl7_",
          LanguageTable: "_1n3a9ye5GfFJ8UdeJ_lC3x",
          LanguageName: "_1gw_w8O9ZchSa2H7_sKPn8",
          CheckColumn: "lPImL9ec29fzNjpS8eeK",
          IconColumn: "_3a5h4jO6SE2kOxAYQfL9Fo",
          SmallIcon: "_2f_urgKOdrn6b3U0a-jFtr",
          Name: "_1J6g7KRhXGw5v-ypP0JKr1",
          Preferred: "_1oX4_5EeXRAXfEE_XiMdjI",
          ShowAll: "_2XP4Qg7E45wuX1whgAsXdH",
          Legend: "_3-IKyLDYxOmAynwPHDVNBL",
          LegendIconContainer: "_2LWUNzwOXwiI1D7TCBxdmE",
          LegendIcon: "_33w2I_6YeeKbxCFtG37Hwh",
        };
      },
      33001: (j) => {
        j.exports = {
          narrowWidth: "500px",
          StorePageBBCode: "_3n5Cn3P3AZI_zLOe5_jB9D",
          StoreImage: "L_7jPXkXscN-QxB458CKV",
          StoreVideo: "_1SedSl74BXCZ_7ixbPl5ml",
        };
      },
      48205: (j) => {
        j.exports = {
          SummaryBarTop: "_1Som9GnszokLGAScqhSozy",
          SummaryBarSection: "_1eIF6oOHrg65kqvbTZmsnv",
          SteamDeckCompat: "_3q5iA4c82x-s_zPm2_mCo6",
          SteamDeckCompatContent: "_3qJR5P57v1Vom-xKZtX_qF",
          HWCompatWrapper: "U0BM13LMuE54MZPv298tt",
          UserTags: "lNpjDNeYU0mE_mITujuVJ",
          Tags: "A_YEuhEOff4v5HceIOAPP",
          Title: "Iuddf6nrTCmOY1Cgf_Gw_",
        };
      },
      31518: (j) => {
        j.exports = {
          CategoriesMenuOption: "_2-cvnCNnFqBG5u89enudpK",
          Label: "KldL9MJqWdVCahi3zvX-E",
          HeaderCtn: "_3WNoErKGw4jngFeVPfTZfs",
        };
      },
      37520: (j) => {
        j.exports = {
          DialogContent: "_16pXKCOoRIbFwtZHgqjB8K",
          SearchForm: "WKTuaTjd0YaeJa49cFaSk",
          AddCategoryBtnCtn: "_2iyGkBsDUSp94uk2MlLz1W",
          Visible: "_2MUWoUxUqeFYQh8spy5bpH",
          SearchInput: "_3MO9bYl8-oPkXVO9nu_FXh",
          CategorySelectorCtn: "dGWKt0BhpSa4efl8jRzwR",
          ListHeader: "Y4Cx2WnIKvFCo_RLEflGd",
          DialogCategoryCtn: "_1lH7WZP40yb1SOyXWbcjOH",
          Suggested: "_1ma6_Ey6CqTCDCkq0tqrH4",
          MaxCategoriesMessage: "_223Zevm4T9O8RGEnzI5jHT",
          Buttons: "_2_jN6aSsudj0rOSKRlnwP9",
        };
      },
      46146: (j) => {
        j.exports = {
          wishlistCategoryMaxDisplayChars: "30",
          CategoriesCtn: "_1Ua4366mxFvXUSFTfIlJ-i",
          CategoryListHeader: "_3Ra2jK42XFbrJlIPtsmMfC",
          CategoryList: "_1FrjJkMKzXxdevx_oYK2Nx",
          Multiline: "_16SkCu-YheGIHn8_WtMVnd",
          ForceDefaultSize: "wxjYffVQAVCuubF0aydb5",
          Small: "Tj_sAx3peeMFFwrrnIjIK",
          CategoryBtn: "_1c0u5zo_wZGsAM08nfEEKu",
          NotActionable: "ySn3WlbDgR3ay1P7i3gjT",
          CategoryName: "_1QX11E_2wBgWuzEO7M7ps9",
          Focused: "_2BMRaClxLpIT5YJoDcejhm",
          Selected: "_2vVKhV_YC031wyUrFu6vJx",
          Removable: "_2rdKi5D2dn1dWLtySZS1w7",
          CategorySettingsBtn: "KA8f-sx_XEMnp78-pwZgl",
        };
      },
      6019: (j) => {
        j.exports = {
          TileContainer: "_3YSNlqOERJPDvATbhSyba4",
          TileTitleContainer: "huv5kmY_qRW6CUhP41AX4",
          TileTitleInnerContainer: "_3SemwneNsiLL2pOP4TMon4",
          TileTitle: "_3VhToXcFT_z0HLnw5z1X2d",
          TileActionButton: "NxUN-s-MoparNLrvqVXsN",
          TileSubtitle: "_2FwWgtYbin1N6QcDJJEU3v",
          TileActionContainer: "_1AC_XZBw0R_ud0pPAJ1Nln",
          TileActionInnerContainer: "_2H9PUu43H_69AuO6gTZVdC",
          TileActionInner: "_3Fxxrw6yvbcJc-MzPwHIpB",
          TileActionInnerTitle: "zB1xwvSCbLzyQMcJvBafw",
          TileActionInnerText: "-piyES0-cnJFXEv4BGexr",
        };
      },
      12037: (j) => {
        j.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
          BackgroundAnimation: "_295HzH0_Gg7fchG1zO9Km7",
          "ItemFocusAnim-darkerGrey-nocolor": "_291aUneSnsR7SSD43BPEYt",
          "ItemFocusAnim-darkerGrey": "_3T-aeBZd_novjXZhPEqJ_L",
          "ItemFocusAnim-darkGreySettings": "ekd5ku98aKtUXOuTnlUpj",
          "ItemFocusAnim-darkGrey": "peNld_fsioxlGFxQfdd8I",
          "ItemFocusAnim-grey": "_1433gddOHXCko3qPvXFRFS",
          "ItemFocusAnim-translucent-white-10": "_3ZEmb3nXVV6Jl3vO3gd3n2",
          "ItemFocusAnim-translucent-white-20": "EoCuk2lmX0KUPR7Ja5J0J",
          "ItemFocusAnimBorder-darkGrey": "_3FtKchinLpLv8OXrbvS81w",
          "ItemFocusAnim-green": "_23vh8vhEvEmJ5bnq2YZfx8",
          focusAnimation: "wTWp1KqP_zaAfiOc2ovCo",
          hoverAnimation: "_2knkM4Dk-kiPNpW81PgE0Y",
        };
      },
      97824: (j) => {
        j.exports = {
          OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
          OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
          ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
          BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
          BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
          BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
          BannerButton: "_1jso7z80FWGn42k1HP0_cf",
        };
      },
      27510: (j) => {
        j.exports = {
          "duration-app-launch": "800ms",
          PurchaseNoticeContainer: "_2wT0yS1pvmL0ILuaiLHaBb",
          RightHandImage: "_3G-YXeWc1jffse8M8ct7hJ",
          PurchaseNoticeLabel: "dTa5uAAOq-wFRgQQG7xRm",
          PurchaseNoticeImageContainer: "_3Q2RgkhEvzbM10OBqMeTDB",
          VRSupported: "iqWk_VV3jdvFbRFaBkWRB",
          PurchaseNoticeImage: "_19Tk4I5-EL-sVXsUaa3hwU",
          Tilt: "_3dAAfHHQ8xq74OLmQXo9V4",
          VROnly: "_11BzgaR-a1UCE-aOC3bMCD",
          BackgroundAnimation: "_1J1jrrETaG-3_8wMEeqpxY",
          "ItemFocusAnim-darkerGrey-nocolor": "_3yvzhClP6mJaghIH0GHKiv",
          "ItemFocusAnim-darkerGrey": "_1czfyTnV7yzFQJdFsTmDJT",
          "ItemFocusAnim-darkGreySettings": "_20J2LUfIRwm4TI5vyu-UFE",
          "ItemFocusAnim-darkGrey": "_1_qHMTE8sRRjCMuxLoZMl2",
          "ItemFocusAnim-grey": "jagchSyBiPamV4PALsowV",
          "ItemFocusAnim-translucent-white-10": "_3ZVEkEzGePMK1PBQ_GpIb1",
          "ItemFocusAnim-translucent-white-20": "_38eVNkJEvCSuIwBUyo7Qrg",
          "ItemFocusAnimBorder-darkGrey": "_2C7zuRFt6F6RcgTOiWBVnr",
          "ItemFocusAnim-green": "_1IMTjdceyCiJjpowdAaHgY",
          focusAnimation: "_1tLo_FTRTZsAztlpw36eHl",
          hoverAnimation: "_3oGieUcvOTZppk7m3PHA6L",
        };
      },
      63404: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Details: "_8DSX9d1ihrMSeZUFC9elD",
          Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
          FeatureList: "TwihVkmmqI5XLg6P4fpwF",
          CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
          FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
          GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
          FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
          InfoRow: "_1RmibngWLogcFmO93kGFgq",
          FeatureName: "ny6hWVK6ii05H200KRhds",
          ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
          InfoLink: "_2xmH7agKi37v9kwFHi093S",
        };
      },
      17479: (j) => {
        j.exports = {
          narrowWidth: "500px",
          ReleaseDateInfoCtn: "_3_BM0Yr1nZHLRCU-YScHph",
          GameEditCtn: "_2atDY79LoAg6W2I3f_ghoe",
          ReleaseDateContent: "_3EqL95FAclb4_KUCViyIy",
          EditButton: "_1nt4AvPVzCcmifUL2j41GY",
          Spacer: "D6yaJy1vHTj3skoSwQCmn",
          Top: "_17TBmwVnz8B0fYk9NMgjcC",
          Bottom: "_1mdhhjdhefzfINtpGJDw_F",
          EditButtonIcon: "_23n7mGKR9t2rn_appk4hc4",
          LabelField: "_1yV1XMUdZdavVgSZ6SzXKj",
          Label: "_2aDfpXF8ktFHq439q_1vAi",
          BigField: "_3K2oJx5qEZyMkC2O7Ib77p",
          Set: "_1CXRFvJ5iqKqlENSWgeHPP",
          DescText: "_3FFbGIjpM4z0O1HfqwwsvR",
          StatusText: "jBW2mrF7D6RVhT2u_ZRXB",
          StartWizardButton: "_1hwFIOidJj1HaD2_cI4NRD",
          ControllerSupportLevelString: "_1mfBI5XbiaKU9vS5WkJALu",
          InfoRow: "_2xZaMR-NKc0LbkeM50cZq8",
          LocSection: "_3KAysk4dlhWETa6ixz7V2j",
          HighlightText: "_2Qr-aCeNvCUkoGKh3ikniD",
          GamepadRequired: "xAMFa9akLaRN7hfkTC8_h",
          Personalized: "_1g3WgidGN68CDX4XQPGnl6",
          HighlightRow: "N97okiqePUqGpdeNrIxUU",
          LocString: "_3FBEGAfvLQj4qYjstmZAPE",
          ImgSection: "dxuI55RF56-dzbuXjj2W0",
          SmallerSVG: "_1LWvkVSCiVeG4Yf5uxtQ28",
          BiggerSVG: "WRiytnKTtULWCkwFVJoTx",
          PreviewContainer: "_13bOrUeolqp9EyK3or-cLt",
          StoreSidebarContainer: "_1CTHwmZmi5YE4kovZH_UIl",
          PurchaseNoticeContainer: "_166hsSkQYxKraMJIx7td91",
          PurchaseNoticeImage: "_3UK9OHyZ3r9rA55mgsnZPD",
          NoticeContainer: "_2IS5rvIlv3ARam8O7b_-po",
          ControllerRequiredImage: "_3YEJ5NoOg1YObev3TXdMi",
          Tilt: "_1NEHd7t-JVZYdk68QMEph-",
          ToolTipControl: "_3vt5rw82YhkhWtu5ld9QeP",
          ToolTipContainer: "_3PRdiJdKKfTnwLnTfbCkEz",
        };
      },
      51249: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Header: "_1QLD0WY-y0hqefed0ZhMn1",
          FullWidth: "xCXUyx3dF-dUDB7Y3lQp0",
          CarouselContentsRow: "_2CT-9HYp0yLUhxQviGsEM",
          WithFollowSection: "_2qwt8I2HnbOSGvdebzv4hf",
          CreatorHomeWithItems: "XIDYByW4BEOm-YiOiwGmO",
          WithFollowBtn: "Md5hrkaRH5SlzG0VFNLCQ",
          Carousel: "_3FF8OOtLO0K4fsjePly_rQ",
          Background: "_2Tqj7EzRCeIvjCq0R1MZiy",
          AvatarBackground: "_3SJGdY8UrEOW9-M8zAiXEi",
          ClanInfoRow: "_1KPIgTd9QjHihuus7qFfvw",
          ButtonContainer: "_3o1Ri_nyL6GsPbTQZGSZcT",
          CarouselFollowButton: "_33J1_MYWJVjXbCkBFCNr6f",
          ClanName: "_1l0-iEDSNo_iZ95BUT31hW",
          ClanAvatarImage: "PO1KWbUEvLt8ZVYRTAvMt",
          CarouselFollowSection: "_3-Zh-Ypvsn0buzyWGzuOQf",
          ClanInfoColumn: "fL1BVr1TCO7p3NcU6YlxG",
          CreatorHomeWithoutItems: "_24bEdzyRcz_FKDUqulljpX",
          ClanFollowTitle: "cSNCliWjnECzm1QAZPjDw",
          ClanFollowButtonContainer: "_2CipbQE9-jPKtQxmGJxtAs",
          FollowButton: "sAZjP8hrS9narmNgqgbXf",
        };
      },
      94846: (j) => {
        j.exports = {
          narrowWidth: "500px",
          ParentWidgetContainer: "_2fynndXXlBKZiRaoG9GuDP",
          ParentCapsuleImageContainer: "mcjC8_8ivZdyhU3QKlFrN",
          ParentCapsuleImage: "_2Ti5cIvl7SlIoK7eSIapbL",
          GameName: "_2xz5bttITZV5JH17r1qZsG",
          AppDetails: "IaIxKAMKgbunAgg62ymgi",
          PriceContainer: "_2i6LXaKqXiO0KV4Im0Fw-0",
          AddToWishlistButton: "RccYVBGN6ikWjuKE_Ba6N",
        };
      },
      1205: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Header: "kR_xyFf2ghgC-Jexsw_5v",
          FullWidth: "_263kQddRJk-a3OP3ANz0Bv",
          StoreItemsCarousel: "_2BG1JKMgeqn_cr0rbRhRNA",
          StorePageCarousel: "_1wsWr6qsx_k-ElMmSpGcf",
          Title: "_2BGZunVy7Z0-h18owewCzo",
        };
      },
      89524: (j) => {
        j.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          strScrollSnapCarouselItemHeight: "168px",
          Carousel: "jGiY7rrZh0o9qrh7XNnZU",
          Capsule: "_292IWiCTro5jiTmIxiDfyc",
          Small: "_1mQ-hKJYGkL9gG76spf6uy",
          TwoWide: "_25IMXSN3XeXOPiu-sYHV1U",
          Placeholder: "_1tX6f_kWb07D_qLWgL7-Ah",
          SeeAllLink: "_1SnxJyZ5foWgNRCNLmKm6H",
          BackgroundAnimation: "_1upvVPGAs4gPDPuPdiwYLw",
          "ItemFocusAnim-darkerGrey-nocolor": "HZYxQObJqyV14ZPiEV6Lk",
          "ItemFocusAnim-darkerGrey": "_2ezINEgZ6JsrAsAeqd9me7",
          "ItemFocusAnim-darkGreySettings": "_3hMFH9HQiviY-7U9Fku-Bk",
          "ItemFocusAnim-darkGrey": "_1X6dhTonzVQgrOwVCmKMAA",
          "ItemFocusAnim-grey": "_10lr_URcMaBKxQoDCDSiW9",
          "ItemFocusAnim-translucent-white-10": "_2qAvXvRSJ5YY0wBBIwBCVs",
          "ItemFocusAnim-translucent-white-20": "_1jA2vfdCnoLEOAQXduMla",
          "ItemFocusAnimBorder-darkGrey": "_24pyz7i5duUDYEkH6dcM8a",
          "ItemFocusAnim-green": "_1Z9fl4e9G4PQnLxyIHXNKG",
          focusAnimation: "_268HCaPK9gD6A2Mw_o7sqP",
          hoverAnimation: "DbNTwkzqEh5siXLRNvICD",
        };
      },
    },
  ]);
})();
