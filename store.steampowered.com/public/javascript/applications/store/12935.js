/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [12935],
    {
      84909: (U, J, a) => {
        "use strict";
        a.d(J, { AM: () => F, Pr: () => g });
        var e = a(7850),
          S = a(90626),
          j = a(73788),
          y = a(8083),
          x = a(94621),
          V = a(18938),
          _ = a(24660),
          z = a(38566),
          Q = a(54130),
          R = a(71742),
          d = a(64238),
          W = a.n(d),
          X = a(3877),
          ie = a(3166),
          ee = a(28020);
        const K = (0, S.createContext)(null);
        function C(h) {
          const { children: P, ...A } = h,
            G = u(A);
          return (0, e.jsx)(K.Provider, { value: G, children: P });
        }
        function L(h) {
          const { children: P } = h,
            A = S.Children.only(P),
            G = (0, S.useContext)(K);
          return A
            ? G
              ? (0, S.cloneElement)(A, {
                  ...G.getReferenceProps(A.props),
                  ref: (0, V.XB)(A.props.ref, G.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function N(h) {
          const { children: P, className: A, ref: G, label: b } = h,
            H = (0, S.useContext)(K),
            Y = (0, j.SV)([G, H?.floating.refs.setFloating]);
          if (!H)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!H.open) return null;
          let $ = S.Children.only(P),
            ae = S.Fragment;
          return (
            $.type == F.FocusManager &&
              (($ = S.Children.only($.props.children)), (ae = te)),
            (0, e.jsx)(ae, {
              children: (0, e.jsx)(ee.HF, {
                presentation: H.presentation,
                sizing: H.sizing,
                floatingRef: Y,
                floatingProps: H.getFloatingProps(),
                floatingStyles: H.floating.floatingStyles,
                referenceElement: H.floating.elements.domReference,
                className: W()((0, X.T)(), A),
                label: b,
                children: $,
              }),
            })
          );
        }
        function te(h) {
          return (0, ie.Qn)()
            ? (0, e.jsx)(T, { ...h })
            : (0, e.jsx)(r, { ...h });
        }
        function T(h) {
          const { children: P } = h,
            A = (0, S.useContext)(K);
          (0, R.wT)(
            !!A,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const G = () => A.floating.context.onOpenChange(!1),
            b = S.useRef(void 0);
          return (
            (0, _.O7)(b, !0, !0),
            (0, e.jsx)(z.D6, {
              navID: "Popover",
              onCancelButton: G,
              modal: !0,
              navTreeRef: b,
              children: (0, e.jsx)("div", {
                style: { display: "contents" },
                children: (0, e.jsx)(Q.q, { children: P }),
              }),
            })
          );
        }
        function r(h) {
          const { children: P } = h,
            A = (0, S.useContext)(K);
          return (
            (0, R.wT)(
              !!A,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, e.jsx)(j.s3, {
              context: A.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: P,
            })
          );
        }
        function u(h) {
          const {
            open: P,
            interactions: A = {},
            width: G,
            maxHeight: b,
            gutter: H,
            scroll: Y,
          } = h;
          let $ = P;
          const ae = (0, ee.Pr)(h.presentation),
            Z = g(h, $, ae),
            me = { enabled: !!A.click },
            ue = typeof A.click == "function" ? A.click(me) : me,
            fe = (0, j.kp)(Z.context, ue),
            Ce = { enabled: !!A.focus },
            pe = typeof A.focus == "function" ? A.focus(Ce) : Ce,
            he = (0, j.iQ)(Z.context, pe),
            Ae = { handleClose: (0, j.iB)() },
            ve = typeof A.hover == "function" ? A.hover(Ae) : Ae,
            De = (0, j.Mk)(Z.context, { enabled: !!A.hover, ...ve }),
            ce = (0, j.s9)(Z.context),
            { getFloatingProps: xe, getReferenceProps: _e } = (0, j.bv)([
              fe,
              he,
              De,
              ce,
            ]);
          return {
            floating: Z,
            getFloatingProps: xe,
            getReferenceProps: _e,
            open: $,
            presentation: ae,
            sizing: { width: G, maxHeight: b, gutter: H, scroll: Y },
          };
        }
        function g(h, P, A) {
          const { onOpenChange: G, placement: b } = h,
            H = A === "anchor";
          return (0, j.we)({
            open: P,
            onOpenChange: G,
            middleware: H ? I(h) : [],
            whileElementsMounted: H ? y.ll : void 0,
            placement: b && typeof b == "object" ? b.initial : b,
            strategy: "fixed",
            platform: {
              ...y.iD,
              getOffsetParent: (Y) => Y?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function I(h) {
          const { gutter: P = 0, placement: A } = h,
            G = [],
            b = A && typeof A == "object";
          return (
            b && A.offset
              ? G.push((0, x.cY)(A.offset))
              : (!b || A.offset === void 0) && G.push((0, x.cY)(2)),
            b && A.flip
              ? G.push((0, x.UU)(A.flip))
              : (!b || A.flip === void 0) && G.push((0, x.UU)()),
            b && A.shift
              ? G.push((0, x.BN)(A.shift))
              : (!b || A.shift === void 0) && G.push((0, x.BN)()),
            G.push(
              (0, x.Ej)({
                apply: (H) => {
                  const { rects: Y, elements: $, availableHeight: ae } = H,
                    Z = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((h.scroll && (Z.overflowY = "auto"), h.width)) {
                    case "target": {
                      Z.width = `${Y.reference.width}px`;
                      break;
                    }
                    case "content": {
                      Z.width = `${Y.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let ue = Y.reference.width;
                      Y.floating.width > ue &&
                        ue < 200 &&
                        (ue = Y.floating.width),
                        (Z.width = `${ue}px`);
                    }
                  }
                  typeof h.width == "function" &&
                    (Z.width = h.width({
                      unContentWidth: Y.floating.width,
                      unTargetWidth: Y.reference.width,
                    }));
                  const me =
                    typeof P == "number" ? `${P}px` : `var(--spacing-${P})`;
                  typeof h.maxHeight == "function"
                    ? (Z.maxHeight = h.maxHeight({
                        unAvailableHeight: ae,
                        gutter: me,
                      }))
                    : typeof h.maxHeight == "number"
                      ? (Z.maxHeight = `min( calc( ${ae}px - ${me} ), ${h.maxHeight}px )`)
                      : typeof P == "number"
                        ? (Z.maxHeight = `${ae - P}px`)
                        : (Z.maxHeight = `calc( ${ae}px - var(--spacing-${P}) )`),
                    Object.assign($.floating.style, Z),
                    $.floating.style.setProperty(
                      "--popover-max-height",
                      Z.maxHeight,
                    );
                },
              }),
            ),
            G
          );
        }
        const F = { Root: C, Anchor: L, Positioner: N, FocusManager: te };
      },
      12204: (U, J, a) => {
        "use strict";
        a.d(J, { V: () => y });
        var e = a(7850),
          S = a(31857);
        const j = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function y(x) {
          const { direction: V = "down" } = x,
            _ = j[V];
          return (0, e.jsx)(S.I, {
            ...x,
            viewBox: 20,
            children: (0, e.jsx)("path", {
              transform: _,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      59432: (U, J, a) => {
        "use strict";
        a.d(J, { Gw: () => x, Lk: () => V, ai: () => y, mm: () => j });
        var e = a(14947);
        const S = e.sH.box(void 0);
        function j() {
          return S.get();
        }
        function y(_) {
          (0, e.h5)(() => S.set(_));
        }
        function x() {
          const _ = S.get();
          return _ || Math.floor(Date.now() / 1e3);
        }
        function V() {
          const _ = S.get();
          return _ ? new Date(_ * 1e3) : new Date();
        }
      },
      79083: (U, J, a) => {
        "use strict";
        a.d(J, { m: () => x, U: () => V });
        var e = a(7850),
          S = a(36118),
          j = ((_) => (
            (_.k_ECutArrowStyle = "single"),
            (_.k_EDoubleArrowStyle = "double"),
            (_.k_EThickChevron = "chevron"),
            (_.k_EFilledArrow = "filled"),
            (_.k_EPointyArrow = "pointy"),
            _
          ))(j || {}),
          y = ((_) => (
            (_.k_EPillCrumb = "pill"),
            (_.k_ECircularCrumb = "circle"),
            (_.k_ESquareCrumb = "square"),
            _
          ))(y || {});
        function x(_) {
          const { arrowFill: z, arrowStyle: Q, direction: R } = _;
          switch (Q) {
            default:
            case j.k_ECutArrowStyle: {
              const d = R == "right" ? 0 : 180;
              return (0, e.jsx)(S.uMb, {
                fill: z || "white",
                role: "presentation",
                angle: d,
              });
            }
            case j.k_EDoubleArrowStyle: {
              const d = R == "right" ? 180 : 0;
              return (0, e.jsx)(S.F2T, {
                fill: z || "white",
                role: "presentation",
                angle: d,
              });
            }
            case j.k_EThickChevron: {
              const d = R == "right" ? 0 : 180;
              return (0, e.jsx)(S.l8x, {
                fill: z || "white",
                role: "presentation",
                angle: d,
              });
            }
            case j.k_EFilledArrow: {
              const d = R == "right" ? 90 : 270;
              return (0, e.jsx)(S.V5W, {
                fill: z || "white",
                role: "presentation",
                angle: d,
              });
            }
            case j.k_EPointyArrow:
              return (0, e.jsx)(S.L0X, {
                fill: z || "white",
                role: "presentation",
                direction: R || "left",
              });
          }
        }
        function V(_) {
          const {
              bIsActive: z,
              breadcrumbActiveColor: Q,
              breadcrumbColor: R,
              breadcrumbStyle: d,
            } = _,
            W = z ? Q || "#FFFFFF" : R || "#606974";
          switch (d) {
            default:
            case y.k_EPillCrumb:
              return (0, e.jsx)(S.IGf, { fill: W, role: "presentation" });
            case y.k_ECircularCrumb:
              return (0, e.jsx)(S.az8, { fill: W, role: "presentation" });
            case y.k_ESquareCrumb:
              return (0, e.jsx)(S.koA, { fill: W, role: "presentation" });
          }
        }
      },
      46943: (U, J, a) => {
        "use strict";
        a.d(J, { Ul: () => L, xz: () => T, $Y: () => te, i8: () => N });
        var e = a(7850),
          S = a(90626),
          j = a(75844),
          y = a(5858),
          x = a(36707),
          V = a(3166),
          _ = a(13465);
        const z =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          Q =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          R =
            a.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var d = a(43047),
          W = a.n(d),
          X = a(71742),
          ie = Object.defineProperty,
          ee = Object.getOwnPropertyDescriptor,
          K = (r, u, g, I) => {
            for (
              var F = I > 1 ? void 0 : I ? ee(u, g) : u, h = r.length - 1, P;
              h >= 0;
              h--
            )
              (P = r[h]) && (F = (I ? P(u, g, F) : P(F)) || F);
            return I && F && ie(u, g, F), F;
          };
        function C(r) {
          switch (r) {
            case "X-Small":
            case "Small":
              return z;
            case "Medium":
            case "MediumLarge":
              return Q;
            case "Large":
            case "X-Large":
            case "FillArea":
              return R;
            default:
              return (0, X.z_)(r, `Unhandled size ${r}`), Q;
          }
        }
        const L = S.memo(function (u) {
          const {
              strAvatarURL: g,
              size: I = "Medium",
              className: F,
              statusStyle: h,
              statusPosition: P,
              children: A,
              ...G
            } = u,
            b = S.useMemo(() => {
              const H = [];
              return g && H.push(g), H.push(C(I)), H;
            }, [g, I]);
          return (0, e.jsxs)("div", {
            className: (0, x.A)(
              W().avatarHolder,
              "avatarHolder",
              "no-drag",
              I,
              F,
            ),
            ...G,
            children: [
              (0, e.jsx)("div", {
                className: (0, x.A)(W().avatarStatus, "avatarStatus", P),
                style: h,
              }),
              (0, e.jsx)(_.c, {
                className: (0, x.A)(W().avatar, "avatar"),
                rgSources: b,
                draggable: !1,
              }),
              A,
            ],
          });
        });
        let N = class extends S.Component {
          render() {
            const {
              persona: r,
              size: u = "Medium",
              animatedAvatar: g,
              className: I,
              strBackupAvatarURL: F,
              ...h
            } = this.props;
            let P = "";
            return (
              g && g.image_small && g.image_small.length != 0
                ? (P = V.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + g.image_small)
                : r
                  ? ((P = r.avatar_url_medium),
                    u == "Small" || u == "X-Small"
                      ? (P = r.avatar_url)
                      : (u == "Large" || u == "X-Large" || u == "FillArea") &&
                        (P = r.avatar_url_full))
                  : F && (P = F),
              (0, e.jsx)(L, {
                strAvatarURL: P,
                size: u,
                className: (0, x.A)((0, y.rO)(r), I),
                ...h,
              })
            );
          }
        };
        N = K([j.PA], N);
        const te = (0, j.PA)((r) => {
          const {
            profileItem: u,
            className: g,
            bDisableAnimation: I,
            ...F
          } = r;
          if (!u || !u.image_small || u.image_small.length == 0) return null;
          let h = I ? u.image_large : u.image_small;
          return (
            h || (h = u.image_small),
            h.startsWith("https://") ||
              (h = V.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + h),
            (0, e.jsx)("div", {
              className: (0, x.A)(W().avatarFrame, g, "avatarFrame"),
              ...F,
              children: (0, e.jsx)("img", {
                className: W().avatarFrameImg,
                src: h,
              }),
            })
          );
        });
        let T = class extends S.Component {
          m_timer;
          constructor(r) {
            super(r),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let r = 0;
            switch (this.props.loopDuration) {
              case "Short":
                r = 2500;
                break;
              case "Medium":
                r = 5e3;
                break;
              case "Long":
                r = 1e4;
                break;
            }
            r != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                r,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(r) {
            this.props.loopDuration != r.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != r.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: r,
              animatedAvatar: u,
              avatarFrame: g,
              children: I,
              style: F,
              bLimitProfileFrameAnimationTime: h,
              bParentHovered: P,
              ...A
            } = this.props;
            A.onClick && (F = { ...F, cursor: "pointer" });
            const G = this.state.bAnimate ? (u ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(N, {
                animatedAvatar: G,
                ...A,
                children: [
                  I,
                  (0, e.jsx)(te, {
                    profileItem: g ?? null,
                    bDisableAnimation: h && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        T = K([j.PA], T);
      },
      35098: (U, J, a) => {
        "use strict";
        a.d(J, { DW: () => W, js: () => R, mK: () => C, tb: () => K });
        var e = a(90626),
          S = a(80902),
          j = a(54806),
          y = a(99412),
          x = a(68312),
          V = a(15369),
          _ = a(5858),
          z = a(76559),
          Q = a(15860);
        function R(T) {
          const r = (0, x.KV)(),
            u = e.useContext(ee);
          return (0, S.I)(C(u, r, T));
        }
        function d(T) {
          const r = React.useRef(void 0),
            u = R(T);
          return u.data
            ? u
            : (r.current ||
                (r.current = new CPersonaStateImpl(
                  typeof T == "string"
                    ? new CSteamID(T)
                    : CSteamID.InitFromAccountID(T),
                )),
              { ...u, data: r.current });
        }
        function W(T) {
          const r = (0, x.KV)(),
            u = e.useContext(ee);
          return (0, j.E)({ queries: T.map((g) => C(u, r, g)) });
        }
        function X(T) {
          return ReactQueryClient.getQueryData(["PlayerSummary", T]);
        }
        function ie(T) {
          const { loadPersonaState: r, children: u } = T,
            g = React.useMemo(() => ({ loadPersonaState: r }), [r]);
          return React.createElement(ee.Provider, { value: g }, u);
        }
        const ee = e.createContext({
          loadPersonaState: async (T, r) => {
            if (T == null) return null;
            const u = await N(r).load(
              z.b.InitFromAccountID(T).ConvertTo64BitString(),
            );
            return te(z.b.InitFromAccountID(T), u);
          },
        });
        function K() {
          return e.useContext(ee);
        }
        function C(T, r, u) {
          const g = typeof u == "string" ? new z.b(u).GetAccountID() : u;
          return {
            queryKey: ["PlayerSummary", g],
            queryFn: () => T.loadPersonaState(g, r),
            enabled: !!g,
          };
        }
        let L;
        function N(T) {
          return (L ??= (0, Q.c)(T));
        }
        function te(T, r) {
          let u = new _.Z(T);
          const g = r?.public_data,
            I = r?.private_data;
          return (
            (u.m_bInitialized = !!r),
            (u.m_ePersonaState = I?.persona_state ?? y.cU3),
            (u.m_strAvatarHash = g?.sha_digest_avatar
              ? (0, V.Kx)(g.sha_digest_avatar)
              : _.dV),
            (u.m_strPlayerName = g?.persona_name ?? T.ConvertTo64BitString()),
            (u.m_strAccountName = I?.account_name),
            I?.persona_state_flags &&
              (u.m_unPersonaStateFlags = I?.persona_state_flags),
            I?.game_id && (u.m_gameid = I?.game_id),
            I?.game_server_ip_address &&
              (u.m_unGameServerIP = I?.game_server_ip_address),
            I?.lobby_steam_id && (u.m_game_lobby_id = I?.lobby_steam_id),
            I?.game_extra_info && (u.m_strGameExtraInfo = I?.game_extra_info),
            g?.profile_url && (u.m_strProfileURL = g.profile_url),
            u
          );
        }
      },
      84676: (U, J, a) => {
        "use strict";
        a.d(J, {
          G6: () => W,
          Gg: () => ee,
          Ow: () => ie,
          Sq: () => Q,
          YM: () => T,
          eR: () => R,
          ik: () => d,
          mZ: () => K,
          t7: () => X,
          zX: () => L,
        });
        var e = a(41735),
          S = a.n(e),
          j = a(90626),
          y = a(72604),
          x = a(78192),
          V = a(30096),
          _ = a(10142);
        function z(r, u, g = !0) {
          const I = g
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            F = g || CStoreItemCache.Get().BHasStoreItem(r, u, I) ? r : null,
            [h, P] = W(F, u, I),
            [A, G] = useState(null),
            [b, H] = W(A, u, I);
          useEffect(() => {
            h?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              G(h.GetParentAppID());
          }, [h]);
          let Y = h?.GetShortDescription()
            ? StripBBCodeTags(h.GetShortDescription())
            : "";
          (!Y || Y.length === 0) &&
            b &&
            (Y = b?.GetShortDescription()
              ? StripBBCodeTags(b.GetShortDescription())
              : "");
          const $ = P == d && (!A || H == d);
          return [Y, $];
        }
        const Q = 1,
          R = 2,
          d = 3;
        function W(r, u, g, I) {
          const F = (0, j.useRef)(void 0),
            h = (0, j.useRef)(void 0),
            P = (0, V.CH)();
          F.current = r;
          const [A, G] = (0, j.useState)(void 0),
            {
              include_assets: b,
              include_release: H,
              include_platforms: Y,
              include_all_purchase_options: $,
              include_screenshots: ae,
              include_trailers: Z,
              include_ratings: me,
              include_tag_count: ue,
              include_reviews: fe,
              include_basic_info: Ce,
              include_supported_languages: pe,
              include_full_description: he,
              include_included_items: Ae,
              include_assets_without_overrides: ve,
              apply_user_filters: De,
              include_links: ce,
              include_extra_details: xe,
              include_optin_registration_tags: _e,
            } = g;
          if (
            ((0, j.useEffect)(() => {
              const Ie = {
                include_assets: b,
                include_release: H,
                include_platforms: Y,
                include_all_purchase_options: $,
                include_screenshots: ae,
                include_trailers: Z,
                include_ratings: me,
                include_tag_count: ue,
                include_reviews: fe,
                include_basic_info: Ce,
                include_supported_languages: pe,
                include_full_description: he,
                include_included_items: Ae,
                include_assets_without_overrides: ve,
                apply_user_filters: De,
                include_links: ce,
                include_extra_details: xe,
                include_optin_registration_tags: _e,
              };
              let Ee = null;
              return (
                !r ||
                  r < 0 ||
                  _.A.Get().BHasStoreItem(r, u, Ie) ||
                  (A !== void 0 && I && I == h.current) ||
                  (I !== h.current && (G(void 0), (h.current = I)),
                  (Ee = S().CancelToken.source()),
                  _.A.Get()
                    .QueueStoreItemRequest(r, u, Ie)
                    .then((ke) => {
                      !Ee?.token.reason && F.current === r && G(ke == y.R), P();
                    })),
                () => Ee?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              r,
              u,
              I,
              A,
              b,
              H,
              Y,
              $,
              ae,
              Z,
              me,
              ue,
              fe,
              Ce,
              pe,
              he,
              Ae,
              ve,
              De,
              ce,
              xe,
              _e,
              P,
            ]),
            !r)
          )
            return [null, R];
          if (A === !1) return [void 0, R];
          if (_.A.Get().BIsStoreItemMissing(r, u)) return [void 0, R];
          if (!_.A.Get().BHasStoreItem(r, u, g)) return [void 0, Q];
          const Se = _.A.Get().GetStoreItemWithLegacyVisibilityCheck(r, u);
          return Se ? [Se, d] : [null, R];
        }
        function X(r, u, g) {
          return W(r, x.c6.qI, u, g);
        }
        function ie(r, u, g) {
          return W(r, x.c6.xO, u, g);
        }
        function ee(r, u, g) {
          return W(r, x.c6.RD, u, g);
        }
        function K(r, u, g) {
          const [I, F] = W(r, u, g);
          let h;
          I?.GetStoreItemType() == x.c6.RD &&
            !I.GetAssets()?.GetHeaderURL() &&
            I?.GetIncludedAppIDs().length == 1 &&
            (h = I.GetIncludedAppIDs()[0]);
          const [P, A] = X(h, g);
          return h && P?.BIsVisible() ? [P, A] : [I, F];
        }
        function C(r, u, g, I) {
          const F = (0, V.CH)(),
            {
              include_assets: h,
              include_release: P,
              include_platforms: A,
              include_all_purchase_options: G,
              include_screenshots: b,
              include_trailers: H,
              include_ratings: Y,
              include_tag_count: $,
              include_reviews: ae,
              include_basic_info: Z,
              include_supported_languages: me,
              include_full_description: ue,
              include_included_items: fe,
              include_assets_without_overrides: Ce,
              apply_user_filters: pe,
              include_links: he,
              include_extra_details: Ae,
              include_optin_registration_tags: ve,
            } = g;
          return (
            (0, j.useEffect)(() => {
              if (!r || r.length == 0) return;
              const ce = {
                  include_assets: h,
                  include_release: P,
                  include_platforms: A,
                  include_all_purchase_options: G,
                  include_screenshots: b,
                  include_trailers: H,
                  include_ratings: Y,
                  include_tag_count: $,
                  include_reviews: ae,
                  include_basic_info: Z,
                  include_supported_languages: me,
                  include_full_description: ue,
                  include_included_items: fe,
                  include_assets_without_overrides: Ce,
                  apply_user_filters: pe,
                  include_links: he,
                  include_extra_details: Ae,
                  include_optin_registration_tags: ve,
                },
                xe = r.filter(
                  (Ie) =>
                    !(
                      _.A.Get().BHasStoreItem(Ie, u, ce) ||
                      _.A.Get().BIsStoreItemMissing(Ie, u)
                    ),
                );
              if (xe.length == 0) return;
              const _e = S().CancelToken.source(),
                Se = xe.map((Ie) => _.A.Get().QueueStoreItemRequest(Ie, u, ce));
              return (
                Promise.all(Se).then(() => {
                  _e.token.reason || F();
                }),
                () => _e.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              r,
              u,
              I,
              F,
              h,
              P,
              A,
              G,
              b,
              H,
              Y,
              $,
              ae,
              Z,
              me,
              ue,
              fe,
              Ce,
              pe,
              he,
              Ae,
              ve,
            ]),
            r
              ? r.every(
                  (ce) =>
                    _.A.Get().BHasStoreItem(ce, u, g) ||
                    _.A.Get().BIsStoreItemMissing(ce, u),
                )
                ? r.every((ce) =>
                    _.A.Get().GetStoreItemWithLegacyVisibilityCheck(ce, u),
                  )
                  ? d
                  : R
                : Q
              : R
          );
        }
        function L(r, u, g) {
          return C(r, x.c6.qI, u, g);
        }
        function N(r, u, g) {
          return C(r, EStoreItemType.k_EStoreItemType_Bundle, u, g);
        }
        function te(r, u, g) {
          return C(r, EStoreItemType.k_EStoreItemType_Package, u, g);
        }
        function T() {
          j.useEffect(
            () => (
              _.A.Get().SetReturnUnavailableItems(!0),
              () => _.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      86390: (U, J, a) => {
        "use strict";
        a.d(J, { Cg: () => W, pZ: () => ie, vg: () => X });
        var e = a(7850),
          S = a(90626),
          j = a(88003),
          y = a(18210),
          x = a(3166),
          V = a(34004),
          _ = a(6740),
          z = a(3685),
          Q = a(8059),
          R = a(96538);
        function d(K) {
          return (0, e.jsx)(j.x_, {
            onEscKeypress: K.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(ee, {
              redirectURL: K.redirectURL,
              guestOption: K.guestOption,
            }),
          });
        }
        function W(K) {
          const { redirectURL: C = window.location.href } = K;
          return (0, e.jsx)(R.EN, {
            active: !0,
            children: (0, e.jsx)(d, { redirectURL: C }),
          });
        }
        function X() {
          (0, j.pg)(
            (0, e.jsx)(d, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, y.we)("#Login_SignInTitle") },
          );
        }
        function ie(K, C) {
          (0, j.pg)(
            (0, e.jsx)(d, { ownerWin: window, redirectURL: K, guestOption: C }),
            window,
            { strTitle: (0, y.we)("#Login_SignInTitle") },
          );
        }
        function ee(K) {
          const { redirectURL: C, guestOption: L } = K,
            [N] = (0, S.useState)(
              new z.D(x.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [te, T] = (0, S.useState)(!1),
            r = (u) => {
              u == Q.wI.k_PrimaryDomainFail ? T(!0) : window.location.assign(C);
            };
          return (0, e.jsx)("div", {
            children: te
              ? (0, e.jsx)(V.Fn, {})
              : (0, e.jsx)(V.YN, {
                  autoFocus: !0,
                  transport: N,
                  platform: _.SS.tS,
                  onComplete: r,
                  redirectUrl: C,
                  theme: "modal",
                  children: L && (0, e.jsx)(V.Mk, { redirectURL: C }),
                }),
          });
        }
      },
      13465: (U, J, a) => {
        "use strict";
        a.d(J, { c: () => j });
        var e = a(7850),
          S = a(90626);
        function j(y) {
          const {
              rgSources: x,
              onIncrementalError: V,
              onError: _,
              strAltText: z,
              ref: Q,
              ...R
            } = y,
            [d, W] = S.useState(0),
            X = S.useMemo(() => JSON.stringify(x), [x]),
            [ie, ee] = S.useState(X);
          ie != X && (ee(X), W(0));
          const K = S.useMemo(() => {
              let N = "";
              return (
                x && x.length > d && (N = x[d]),
                N ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    y,
                    d,
                  ),
                  (N =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                N
              );
            }, [x, d, y]),
            C = S.useCallback(
              (N) => {
                V?.(N, x[d], d);
                const te = d + 1;
                te >= x.length && _ && _(N), te < x.length && W(te);
              },
              [d, _, V, x],
            ),
            L = S.useRef(null);
          return (
            S.useImperativeHandle(
              Q,
              () => ({ imgRef: L, nSourceIndex: d, nSourceLength: x.length }),
              [L, d, x],
            ),
            S.useEffect(() => {
              const N = L.current;
              N?.complete && N.naturalWidth == 0 && (N.src = N.src);
            }, []),
            (0, e.jsx)("img", { ref: L, ...R, src: K, onError: C, alt: z }, ie)
          );
        }
      },
      23366: (U, J, a) => {
        "use strict";
        a.d(J, {
          F$: () => K,
          Mn: () => ie,
          S0: () => ee,
          Vh: () => R,
          zJ: () => W,
        });
        var e = a(48366),
          S = a(78280),
          j = a(87913),
          y = a(72604),
          x = a(2289),
          V = a(80902),
          _ = a(4874),
          z = a(98609),
          Q = a(67705);
        function R() {
          return (0, Q.Fd)("cart_config", "application_config");
        }
        function d() {
          return ["shopping_cart", "sale_drop_progress"];
        }
        function W() {
          return (0, V.I)({
            queryKey: d(),
            queryFn: async () => {
              const L = await (
                await fetch(`${z.TS.STORE_BASE_URL}cart/ajaxsaledropprogress`)
              ).json();
              return (
                L.eresult !== y.R &&
                  console.error("Failed to load sale drop progress"),
                L
              );
            },
            enabled: z.iA.logged_in,
          });
        }
        function X(C) {
          return (0, e.c2)(C) || (0, e.kx)(C);
        }
        var ie = ((C) => (
          (C[(C.k_ECanRequest = 0)] = "k_ECanRequest"),
          (C[(C.k_EIsNotChild = 1)] = "k_EIsNotChild"),
          (C[(C.k_EInvalidCartType = 2)] = "k_EInvalidCartType"),
          (C[(C.k_ENonGiftableItemPresent = 3)] = "k_ENonGiftableItemPresent"),
          C
        ))(ie || {});
        function ee() {
          const C = (0, S.j4)(),
            L = (0, _.vo)(),
            N = (0, j.g7)(),
            te = L.isSuccess && L.data.role() == x.PQ.sf,
            T = N.data?.cart_items.some((u) => !u.can_purchase_as_gift);
          let r = 0;
          return te ? (X(C) ? T && (r = 3) : (r = 2)) : (r = 1), [r === 0, r];
        }
        function K() {
          const C = (0, S.j4)(),
            L = (0, _.vo)();
          return L.isSuccess && L.data.role() == x.PQ.s && (0, e.uU)(C);
        }
      },
      49311: (U, J, a) => {
        "use strict";
        a.r(J),
          a.d(J, {
            BaseCartPage: () => et,
            default: () => xs,
            useInitCartLocalization: () => bt,
          });
        var e = a(7850),
          S = a(63088),
          j = a(78280),
          y = a(19298),
          x = a(78192),
          V = a(56925),
          _ = a(64238),
          z = a.n(_),
          Q = a(9843),
          R = a(87913),
          d = a(90626),
          W = a(92757),
          X = a(4874),
          ie = a(67529),
          ee = a(10142),
          K = a(84676),
          C = a(16412),
          L = a(25792),
          N = a(86390),
          te = a(51079),
          T = a(85599),
          r = a(18210),
          u = a(98609),
          g = a(36707),
          I = a(34633);
        function F(n) {
          return (0, e.jsx)("div", {
            className: (0, g.A)(I.CartCard, n.className),
            children: n.children,
          });
        }
        var h = a(23366),
          P = a(32093),
          A = a(98972);
        function G(n) {
          const { cart: t } = n,
            s = b(t);
          if (
            !t ||
            !u.iA.logged_in ||
            !s ||
            (0, P.nA)(u.TS.EREALM) ||
            !s.strSaleName
          )
            return null;
          const {
              cEarned: i,
              pctProgress: o,
              rgPrepurchaseApps: l,
              strFormattedSpendPerDrop: c,
              strSaleName: m,
            } = s,
            f = i > 0,
            p = (0, e.jsx)("div", {
              className: A.Explanation,
              children: (0, r.we)("#Cart_SaleCardDrops_Explanation", m),
            });
          return (0, e.jsxs)(F, {
            className: A.TradingCardContainer,
            children: [
              f &&
                (0, e.jsx)("div", {
                  className: A.EarnedMessage,
                  children: (0, r.Yp)(
                    "#Cart_SaleCardDrops_EarnedMessage",
                    i,
                    m,
                  ),
                }),
              !f && p,
              (0, e.jsxs)("div", {
                className: A.ProgressSection,
                children: [
                  (0, e.jsx)("div", {
                    children: (0, r.we)("#Cart_SaleCardDrops_ProgressLabel"),
                  }),
                  (0, e.jsx)(H, { value: o }),
                  (0, e.jsxs)("div", {
                    className: A.Right,
                    children: [
                      "(",
                      (0, r.we)("#Cart_SaleCardDrops_CardCost", c),
                      ")",
                    ],
                  }),
                ],
              }),
              f && p,
              l.length > 0 &&
                (0, e.jsxs)("div", {
                  className: A.IneligbleList,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, r.we)(
                        "#Cart_SaleCardDrops_PrepurchaseIneligible",
                        m,
                      ),
                    }),
                    (0, e.jsx)("ul", {
                      children: l.map((D) =>
                        (0, e.jsx)("li", { children: D }, D),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function b(n) {
          const t = (0, h.zJ)();
          if (!n || !t.isSuccess || !t.data?.sale_name) return null;
          const s = new Set();
          let i = 0;
          for (const M of n.cart_items)
            M.subtotal && (i += parseInt(M.subtotal.amount_in_cents));
          const {
              sale_name: o,
              spend_earned_for_next_drop: l,
              spend_needed_for_next_drop: c,
              formatted_spend_per_drop: m,
            } = t.data,
            f = i + l,
            p = Math.floor(f / c),
            D = Math.floor((100 * (f % c)) / c);
          return {
            cEarned: p,
            pctProgress: D,
            strFormattedSpendPerDrop: m,
            rgPrepurchaseApps: Array.from(s),
            strSaleName: o,
          };
        }
        function H(n) {
          const { value: t } = n,
            s = Math.min(100, Math.max(0, t));
          return (0, e.jsx)("div", {
            className: A.ProgressRail,
            children: (0, e.jsx)("div", {
              className: A.Progress,
              style: { width: `${s}%` },
            }),
          });
        }
        var Y = a(20169),
          $ = a(10349),
          ae = a(2668),
          Z = a(96117),
          me = a(15437);
        function ue(n, t = !0) {
          return (0, me.FY)(
            {
              bIncludeDailyDeals: !0,
              nIncludeTopNSpecials: 8,
              spotlightLocation: { location: "cart" },
              rgAdditionalRecommendationIDs: n,
            },
            { include_assets: !0, include_release: !0 },
            t,
          );
        }
        var fe = a(50169),
          Ce = a(45803),
          pe = a.n(Ce),
          he = a(40358),
          Ae = a(13784),
          ve = a(30096);
        function De() {
          const n = (0, ve.CH)();
          return (
            d.useEffect(
              () => (
                window.addEventListener("resize", n),
                () => window.removeEventListener("resize", n)
              ),
              [n],
            ),
            window.innerWidth < parseInt(I.strMaxCartPartResponsiveWidth)
          );
        }
        function ce(n) {
          const { bMinimalDisplay: t } = n,
            s = De();
          return (s && t) || (!s && !t) ? null : (0, e.jsx)(xe, { ...n });
        }
        function xe(n) {
          const { cart: t, bMinimalDisplay: s } = n,
            i = _e(t),
            o = (0, d.useMemo)(() => {
              const l = new Set(
                [
                  ...(i?.developers || []),
                  ...(i?.publishers || []),
                  ...(i?.franchises || []),
                ]
                  .filter((c) => !!c && !!c.creator_clan_account_id)
                  .map((c) => c.creator_clan_account_id),
              );
              return Array.from(l);
            }, [i]);
          return o.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: pe().CartCreatorCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: pe().Title,
                    children: (0, r.we)("#Cart_FollowCreator_title"),
                  }),
                  (0, e.jsx)("div", {
                    className: pe().Description,
                    children: (0, r.we)("#Cart_FollowCreator_desc"),
                  }),
                  (0, e.jsx)("br", {}),
                  o.map((l) =>
                    (0, e.jsx)(
                      Ae.hA,
                      {
                        creatorID: {
                          name: "",
                          clan_account_id: l,
                          type: "developer",
                        },
                        bHideCreatorType: !0,
                        bSmallFormat: !0,
                        bMinimalDisplay: s,
                      },
                      "creat" + l,
                    ),
                  ),
                ],
              });
        }
        function _e(n) {
          const [t, s] = (0, d.useState)(null),
            i = (0, d.useMemo)(
              () =>
                n?.line_items?.length == 1 && n.line_items[0].packageid
                  ? { packageid: n.line_items[0].packageid }
                  : void 0,
              [n],
            ),
            { data: o } = (0, he.U2)(i);
          (0, d.useEffect)(() => {
            const m = o?.type;
            m == x.uE.HT
              ? s(o.id)
              : (m == x.uE._i || m == x.uE.Ov) &&
                s(o.related_items?.parent_appid);
          }, [o?.id, o?.related_items?.parent_appid, o?.type]);
          const l = (0, d.useMemo)(() => (t ? { appid: t } : void 0), [t]),
            { data: c } = (0, he.wl)(l);
          return c;
        }
        function Se(n, t = []) {
          return t.filter(({ item_id: s, item: i }) =>
            s
              ? n[s.appid]
                ? !1
                : i?.appid
                  ? !n[i?.appid]
                  : i?.included_appids
                    ? i.included_appids.every((o) => !n[o])
                    : !0
              : !0,
          );
        }
        function Ie(n) {
          const { cart: t, validatedCart: s } = n,
            [i, o] = d.useState(void 0),
            l = (s?.cart_items || []).reduce(
              (v, w) => v.concat(w.store_item.included_appids),
              [],
            );
          d.useEffect(() => {
            i === void 0 &&
              t &&
              o(
                t?.line_items.map((v) =>
                  v.packageid
                    ? { packageid: v.packageid }
                    : { bundleid: v.bundleid },
                ),
              );
          }, [i, t]);
          const c = ue(i, i !== void 0);
          if (c.isError) return null;
          const m = l.reduce((v, w) => ((v[w] = !0), v), {}),
            f = Se(m, c.data?.purchase_recommendations),
            p = Se(m, c.data?.specials),
            D = Se(m, c.data?.daily_deals),
            M = Se(m, c.data?.spotlights);
          return (0, e.jsxs)("div", {
            className: fe.CartUpsellArea,
            children: [
              (0, e.jsx)("div", {
                className: fe.CartUpsellTitle,
                children: (0, r.we)("#Recommendations_Header"),
              }),
              f?.length > 3
                ? (0, e.jsx)(Ee, {
                    type: "recommended",
                    data: f,
                    isLoaded: !c.isLoading,
                  })
                : (0, e.jsx)(Ee, {
                    type: "specials",
                    data: p,
                    isLoaded: !c.isLoading,
                  }),
              (0, e.jsx)(ce, { cart: t, bMinimalDisplay: !1 }),
            ],
          });
        }
        function Ee(n) {
          const { data: t, isLoaded: s, type: i } = n;
          return !t && s
            ? null
            : (0, e.jsx)(te.Ay, {
                feature: `upsell-${i}`,
                children: (0, e.jsx)(Ve, {
                  className: (0, g.A)(fe.Specials),
                  children: t
                    ?.slice(0, 3)
                    .map(({ item_id: o, item: l }) =>
                      (0, e.jsx)(ke, { item_id: o, item: l }, (0, $.wD)(o)),
                    ),
                }),
              });
        }
        function ke(n) {
          const { item: t } = n;
          return (0, e.jsx)(Z.W, {
            capsule: { id: t.id, type: (0, $._4)(t.item_type, t.type) },
            imageType: "header",
            onlyOneDiscountPct: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function ks(n) {
          const { data: t, isLoaded: s } = n;
          return !t && s
            ? null
            : jsx(Ve, {
                className: classnames(styles.DailyDeals, !s && styles.Loading),
                children: t
                  ?.slice(0, 2)
                  .map((i) =>
                    jsx(
                      FeaturedItemDailyDeal,
                      { dailyDeal: i },
                      StoreItemIDToString(i.item_id),
                    ),
                  ),
              });
        }
        function Vs(n) {
          const { data: t, isLoaded: s } = n,
            i = React.useMemo(
              () =>
                t
                  ?.filter((o) => o.spotlight_template != "weeklong_deals")
                  .slice(0, 2),
              [t],
            );
          return !i && s
            ? null
            : jsx(Ve, {
                className: classnames(styles.Spotlights, !s && styles.Loading),
                children: i.map((o) =>
                  jsx(
                    FeaturedItemSpotlight,
                    { spotlight: o },
                    o.item_id
                      ? StoreItemIDToString(o.item_id)
                      : o.spotlight_title,
                  ),
                ),
              });
        }
        function Ve(n) {
          const { className: t, children: s } = n;
          return (0, e.jsx)(y.Z, {
            "flow-children": "row",
            navEntryPreferPosition: Y.iU.MAINTAIN_X,
            className: (0, g.A)(fe.UpsellRow, t),
            children: s,
          });
        }
        var ze = a(8892),
          Ge = a(68031),
          ot = a(60351),
          lt = a(15252),
          ct = a(86336),
          Pe = a(79485),
          Ht = a(38580),
          Ye = a(2289),
          Qt = a(86519),
          ut = a(42993),
          kt = a(20117),
          dt = a(35038),
          mt = a(19563),
          ft = a(80902),
          gt = a(68312),
          Vt = a(5858),
          pt = a(76559),
          zt = a(58612),
          be = a(35098),
          ye = a(3166);
        function Yt(n, t) {
          const s = Zt(n),
            i = (0, zt.d0)({ loadFavorites: !0, loadNicknames: !0 }),
            o = s?.data?.ownership_info[0]?.friend_ownership,
            l = d.useMemo(
              () => new Map(o && o.map((f) => [f.accountid, f])),
              [o],
            ),
            c = d.useMemo(() => new Set(t), [t]);
          if (s.isLoading || i.isLoading) return { isLoading: !0 };
          if (s.isError || i.isError) return { isError: !0 };
          const m = i.data.map((f, p) => {
            const D = l.get(f.accountid) || {
              already_owns: !1,
              wishes_for: !1,
            };
            return { ...f, ownership: D };
          });
          return (
            m.sort((f, p) => {
              const D = c.has(f.accountid),
                M = c.has(p.accountid);
              if (D != M) return D ? -1 : 1;
              if (f.is_favorite != p.is_favorite) return f.is_favorite ? -1 : 1;
              if (f.ownership.wishes_for) {
                if (!p.ownership.wishes_for) return -1;
              } else if (p.ownership.wishes_for) return 1;
              const v = f.ownership.partial_wishes_for?.length ?? 0,
                w = p.ownership.partial_wishes_for?.length ?? 0;
              if (v != w) return w - v;
              if (f.ownership.already_owns) {
                if (!p.ownership.already_owns) return 1;
              } else if (p.ownership.already_owns) return -1;
              const re = f.ownership.partial_owns_appids?.length ?? 0,
                q = p.ownership.partial_owns_appids?.length ?? 0;
              if (re != q) return re - q;
              if (v > 0) {
                const k = f.ownership.partial_wishes_for.reduce(
                    (se, le) => se ^ le,
                    0,
                  ),
                  ne = p.ownership.partial_wishes_for.reduce(
                    (se, le) => se ^ le,
                    0,
                  );
                if (k != ne) return k - ne;
              }
              if (re > 0) {
                const k = f.ownership.partial_owns_appids.reduce(
                    (se, le) => se ^ le,
                    0,
                  ),
                  ne = p.ownership.partial_owns_appids.reduce(
                    (se, le) => se ^ le,
                    0,
                  );
                if (k != ne) return k - ne;
              }
              return f.persona.m_strPlayerName.localeCompare(
                p.persona.m_strPlayerName,
              );
            }),
            { rgFriendsForGifting: m }
          );
        }
        function Zt(n) {
          const t = (0, gt.KV)(),
            s = (0, $.Je)(n.id, n.item_type);
          return (0, ft.I)({
            queryKey: ["FriendOwnershipForGifting", s],
            queryFn: async () => {
              const i = dt.w.Init(mt.HM);
              i.Body().set_item_ids([x.O4.fromObject(s)]);
              const o = await mt._o.GetFriendOwnershipForGifting(t, i);
              if (!o.BSuccess()) throw o.GetEResult();
              return o.Body().toObject();
            },
          });
        }
        function Ze(n) {
          const t = (0, ut.LH)(),
            s = (0, be.js)(n.gift_info?.accountid_giftee),
            i = d.useMemo(
              () =>
                (0, ye.Fd)("giftee_player_summaries", "application_config") ??
                [],
              [],
            );
          if (!n.gift_info?.accountid_giftee || s.isLoading) return null;
          if (s.data?.m_bInitialized || t) return s.data;
          const o = i.find((c) => c.accountid === n.gift_info.accountid_giftee);
          if (!o) return null;
          let l = new Vt.Z(pt.b.InitFromAccountID(o.accountid));
          return (
            (l.m_strAvatarHash = o.avatarHash),
            (l.m_strPlayerName = o.playerName),
            (l.m_bInitialized = !0),
            l
          );
        }
        var Jt = a(92298),
          ht = a.n(Jt),
          Xt = a(44894),
          Ct = a(7582),
          $t = a(95695),
          Je = a.n($t),
          qt = a(71421),
          en = a(12916),
          ge = a.n(en),
          tn = a(87937),
          oe = a.n(tn);
        const At = "hh:mm a",
          Xe = "HH:mm";
        function nn(n) {
          const {
            nLatestTime: t,
            nEarliestTime: s,
            fnGetTimeToUpdate: i,
            onError: o,
            strAlsoShowTimeZone: l,
            disabled: c,
            bNoDefaultDate: m,
            className: f,
            strDescToolTip: p,
            strDescription: D,
            bShowTimeZone: M,
            strInvalidDateTimeLocalizedMsg: v,
            fnIsValidDateTime: w,
            bWeekdaysOnly: re,
            fnSetTimeToUpdate: q,
            bForce24HourFormat: k,
            bAllowClear: ne,
          } = n;
          let se = an() || k ? Xe : At;
          const le = i(),
            [tt, Re] = d.useState(le > 0 ? oe()(le * 1e3) : null),
            [Ne, Bs] = d.useState(0),
            [nt, st] = d.useState(),
            [it, at] = d.useState(),
            Gs = on(nt, it, v, w, o),
            Ut = !o && Gs;
          let rt;
          if (t && s && t == s && s > Ct.HD.GetTimeNowWithOverride()) {
            const O = oe().unix(s);
            (rt = {
              hours: { max: O.hour(), min: O.hour(), step: 0 },
              minutes: { max: O.minute(), min: O.minute(), step: 0 },
              seconds: { max: O.seconds(), min: O.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (se = Xe);
          }
          let Wt;
          !le && s && !m && (Wt = oe().unix(s));
          const Kt = oe().tz.guess(),
            Os = oe().unix(le).tz(Kt),
            Be = !!l && Kt != l && oe().unix(le).tz(l),
            Ls = (O) => {
              if (c) return;
              at(null);
              const He = i(),
                je = oe().unix(He || Ct.HD.GetTimeNowWithOverride());
              (O = O.clone()),
                O.hour(je.hour()),
                O.minute(je.minute()),
                O.second(0),
                q(O.unix()),
                Re(O);
            },
            {
              fnOnInput: Fs,
              fnOnInputBlur: ws,
              fnOnChange: Ns,
            } = vt(xt, Ls, at),
            bs = (O) => {
              if (c) return;
              st(null);
              let He = i(),
                je = 0;
              if (!He)
                je =
                  oe().unix(s).hour(0).second(0).minutes(0).unix() +
                  3600 * O.hour() +
                  60 * O.minutes();
              else {
                const Qe = oe().unix(He);
                (O = O.clone()),
                  O.year(Qe.year()),
                  O.month(Qe.month()),
                  O.date(Qe.date()),
                  (je = O.unix());
              }
              q(je), Re(oe().unix(je));
            },
            {
              fnOnInput: Us,
              fnOnInputBlur: Ws,
              fnOnChange: Ks,
            } = vt(_t, bs, st),
            Hs = () => {
              c || (q(0), Re(null), at(null), st(null), Bs((O) => O + 1));
            },
            Qs = ne && !c && le > 0;
          return (0, e.jsxs)("div", {
            className: (0, g.A)(ge().EventTimeSection, f),
            children: [
              (0, e.jsxs)("div", {
                className: (0, g.A)(ge().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(qt.he, {
                    toolTipContent: p,
                    direction: "top",
                    children: !!D && (0, e.jsx)("span", { children: D }),
                  }),
                  Ut &&
                    (0, e.jsxs)("span", {
                      className: ge().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: Xt.A }), Ut],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: Je().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, g.A)(Je().InputBorder, ge().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        ht(),
                        {
                          onChange: Ns,
                          timeFormat: !1,
                          value: it ?? tt,
                          isValidDate: (O) => !c && rn(s, t, re, O),
                          initialValue: Wt,
                          inputProps: {
                            placeholder: (0, r.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, g.A)(
                              ge().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: c,
                            onChange: (O) => Fs(O.currentTarget.value),
                            onBlur: (O) => ws(O.currentTarget.value),
                          },
                        },
                        "date" + Ne,
                      ),
                      !!Be &&
                        (0, e.jsx)("div", {
                          className: ge().PacificTimeHint,
                          children: Be.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, g.A)(Je().InputBorder, ge().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        ht(),
                        {
                          onChange: Ks,
                          dateFormat: !1,
                          timeFormat: se,
                          timeConstraints: rt,
                          value: nt ?? tt,
                          inputProps: {
                            placeholder: (0, r.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, g.A)(
                              ge().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: c,
                            onChange: (O) => Us(O.currentTarget.value),
                            onBlur: (O) => Ws(O.currentTarget.value),
                          },
                        },
                        "time" + Ne,
                      ),
                      !!Be &&
                        (0, e.jsx)("div", {
                          className: ge().PacificTimeHint,
                          children: Be.format("LT"),
                        }),
                    ],
                  }),
                  M &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: ge().TimeZone,
                          children: Os.zoneAbbr(),
                        }),
                        !!Be &&
                          (0, e.jsx)("div", {
                            className: ge().TimeZone,
                            children: Be.zoneAbbr(),
                          }),
                      ],
                    }),
                  Qs &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: ge().ClearButton,
                      onClick: Hs,
                      children: (0, r.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!rt &&
                (0, e.jsx)("div", {
                  children: (0, r.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function vt(n, t, s) {
          const [i, o] = d.useState(!1);
          return {
            fnOnInput: (f) => {
              s(f), o(!0);
            },
            fnOnInputBlur: (f) => {
              if (i) {
                const p = n(f);
                p.isValid() && t(p);
              }
              o(!1);
            },
            fnOnChange: (f) => {
              if (!i)
                if (typeof f == "string") {
                  const p = n(f);
                  p.isValid() && t(p);
                } else t(f);
            },
          };
        }
        function sn() {
          const t = oe()("2025-01-14").format("L").split(/[-/.]/),
            s = t.indexOf("14");
          return t.indexOf("01") < s;
        }
        function an() {
          return oe()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function xt(n) {
          return oe()(n, sn() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function _t(n) {
          return oe()(n, [At, Xe], !1);
        }
        function rn(n, t, s, i) {
          const o = oe().unix(n).hour(0).seconds(0).minute(0);
          let l = i.unix() >= o.unix();
          if (l && t && t >= n) {
            const c = oe().unix(t).hour(23).minute(59).seconds(59);
            l = i.unix() <= c.unix();
          }
          return (
            l && s && (i.weekday() == 0 || i.weekday() == 6) && (l = !1), l
          );
        }
        function on(n, t, s, i, o) {
          const l = i && i(),
            c = t && !xt(t).isValid(),
            m = n && !_t(n).isValid(),
            f = m || c || typeof l == "string" || l === !1;
          let p = null;
          return (
            f &&
              ((p = (0, r.we)(
                s || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              m
                ? (p = (0, r.we)("#DateTimePicker_Time_CannotParse"))
                : c
                  ? (p = (0, r.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof l == "string" && (p = l)),
            d.useEffect(() => {
              o && o(p);
            }, [p, o]),
            p
          );
        }
        var ln = a(36174),
          cn = a(83934),
          E = a.n(cn);
        const un = d.memo(function (t) {
          const { scheduledTime: s, onScheduledTimeChange: i } = t,
            [o, l] = d.useState(null),
            c = s > 0,
            m = () => {
              i(0);
            },
            f = () => {
              s || i(Date.now() / 1e3);
            };
          return (0, e.jsxs)(Fe, {
            children: [
              (0, e.jsx)(Te, {
                children: (0, r.we)("#Cart_GiftDelivery_Label"),
              }),
              (0, e.jsx)(Rt, {
                children: (0, e.jsx)(C.Od, {
                  controlled: !0,
                  checked: !c,
                  onChange: (p) => p && m(),
                  label: (0, r.we)("#Cart_GiftDelivery_Now"),
                }),
              }),
              (0, e.jsxs)(Rt, {
                children: [
                  (0, e.jsx)(C.Od, {
                    controlled: !0,
                    checked: c,
                    onChange: (p) => p && f(),
                    label: (0, r.we)("#Cart_GiftDelivery_ScheduleDelivery"),
                  }),
                  (0, e.jsx)("div", { style: { clear: "both" } }),
                  o &&
                    (0, e.jsx)("div", {
                      className: E().ScheduleError,
                      children: o,
                    }),
                  c &&
                    (0, e.jsx)(L.tH, {
                      children: (0, e.jsx)(dn, {
                        scheduledTime: s,
                        onScheduledTimeChange: i,
                        setScheduledError: l,
                      }),
                    }),
                ],
              }),
            ],
          });
        });
        function dn(n) {
          const {
            scheduledTime: t,
            onScheduledTimeChange: s,
            setScheduledError: i,
          } = n;
          if ((0, ye.Qn)())
            return (0, e.jsx)(fn, {
              scheduledTime: t,
              onScheduledTimeChange: s,
              setScheduledError: i,
            });
          {
            const l = () => St(t);
            return (0, e.jsx)(nn, {
              bShowTimeZone: !0,
              className: E().GiftDatePicker,
              nEarliestTime: Date.now() / 1e3,
              fnGetTimeToUpdate: () => t,
              fnSetTimeToUpdate: s,
              fnIsValidDateTime: l,
              onError: i,
            });
          }
        }
        function St(n) {
          const t = Date.now() / 1e3 + ln.Kp.PerYear,
            s = new Date(null, null, null, 0, 0, 0, 0).getTime() / 1e3;
          return n > t
            ? (0, r.we)("#Cart_GiftScheduleError_TooFar")
            : n < s
              ? (0, r.we)("#Cart_GiftScheduleError_InvalidDate")
              : !0;
        }
        function mn(n, t) {
          let s = n.getHours(),
            i = n.getMinutes();
          return (
            t && (s > 12 ? (s -= 12) : s == 0 && (s = 12)),
            `${s}:${i < 10 ? "0" : ""}${i}`
          );
        }
        function fn(n) {
          const {
              scheduledTime: t,
              onScheduledTimeChange: s,
              setScheduledError: i,
            } = n,
            o = d.useMemo(() => {
              const ne = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                hour: "numeric",
              });
              return (
                ne.resolvedOptions().hour12 ||
                ne.resolvedOptions().hourCycle == "h12"
              );
            }, []),
            l = new Date(t * 1e3),
            [c, m] = (0, d.useState)(l.getMonth()),
            [f, p] = (0, d.useState)(l.getDate()),
            [D, M] = (0, d.useState)(l.getFullYear()),
            [v, w] = (0, d.useState)(() => mn(l, o)),
            [re, q] = (0, d.useState)(l.getHours() >= 12 ? "PM" : "AM");
          d.useEffect(() => {
            let ne = v.match(/^\s*([012]?[0-9]):([0-9]{2})\s*/);
            if (!ne) return;
            let se = parseInt(ne[1]);
            const le = parseInt(ne[2]);
            o &&
              (re == "PM" && se < 12
                ? (se += 12)
                : re == "AM" && se == 12 && (se = 0));
            const Re = new Date(D, c, f, se, le, 0, 0).getTime() / 1e3,
              Ne = St(Re);
            Ne === !0 ? (i(null), s(Re)) : i(Ne);
          }, [D, c, f, v, re, o, s, i]);
          const k = ye.TS.COUNTRY == "US" && ye.TS.LANGUAGE == "english";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(C.Xp, {
                className: E().GamepadTimePickerRow,
                children: [
                  k && (0, e.jsx)(It, { month: c, setMonth: m }),
                  (0, e.jsx)(pn, { year: D, month: c, day: f, setDay: p }),
                  !k && (0, e.jsx)(It, { month: c, setMonth: m }),
                  (0, e.jsx)(gn, { year: D, setYear: M }),
                ],
              }),
              (0, e.jsxs)(C.Xp, {
                className: E().GamepadTimePickerRow,
                children: [
                  (0, e.jsx)(C.pd, {
                    value: v,
                    onChange: (ne) => w(ne.currentTarget.value),
                  }),
                  o && (0, e.jsx)(hn, { strAMPM: re, setAMPM: q }),
                  (0, e.jsx)(C.VP, {
                    className: E().TimezoneDisplay,
                    children: (0, e.jsx)(L.tH, {
                      children: (0, e.jsx)(Cn, {}),
                    }),
                  }),
                  !o && (0, e.jsx)(C.VP, { children: "\xA0" }),
                ],
              }),
            ],
          });
        }
        function gn(n) {
          const { year: t, setYear: s } = n,
            i = d.useMemo(() => {
              const o = new Date(),
                l = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                  year: "numeric",
                });
              return [o.getFullYear(), o.getFullYear() + 1].map((c) => ({
                label: l.format(new Date(c, 0, 1)),
                data: c,
              }));
            }, []);
          return (0, e.jsx)(C.m, {
            selectedOption: t,
            onChange: (o) => s(o.data),
            rgOptions: i,
          });
        }
        function It(n) {
          const { month: t, setMonth: s } = n,
            i = d.useMemo(() => {
              const o = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                month: "short",
              });
              return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((l) => ({
                label: o.format(new Date(null, l)),
                data: l,
              }));
            }, []);
          return (0, e.jsx)(C.m, {
            selectedOption: t,
            onChange: (o) => s(o.data),
            rgOptions: i,
          });
        }
        function pn(n) {
          const { year: t, month: s, day: i, setDay: o } = n,
            l = d.useMemo(() => {
              const c = new Date(t, s + 1, 0).getDate(),
                m = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                  day: "numeric",
                });
              let f = [];
              for (let p = 1; p <= c; p++)
                f.push({ label: m.format(new Date(null, null, p)), data: p });
              return f;
            }, [s, t]);
          return (0, e.jsx)(C.m, {
            selectedOption: i,
            onChange: (c) => o(c.data),
            rgOptions: l,
          });
        }
        function hn(n) {
          const { strAMPM: t, setAMPM: s } = n,
            i = d.useMemo(() => {
              const o = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                  hour: "numeric",
                  hour12: !0,
                }),
                l =
                  o
                    .formatToParts(new Date(null, null, null, 5))
                    .find((m) => m.type == "dayPeriod")?.value || "AM",
                c =
                  o
                    .formatToParts(new Date(null, null, null, 17))
                    .find((m) => m.type == "dayPeriod")?.value || "PM";
              return [
                { label: l, data: "AM" },
                { label: c, data: "PM" },
              ];
            }, []);
          return (0, e.jsx)(C.m, {
            selectedOption: t,
            onChange: (o) => s(o.data),
            rgOptions: i,
          });
        }
        function Cn() {
          const n = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
            timeZoneName: "short",
          })
            .formatToParts()
            .find((t) => t.type == "timeZoneName");
          return (0, e.jsx)(e.Fragment, { children: n ? n.value : "" });
        }
        var Oe = a(46943),
          Le = a(53080);
        function An(n) {
          const { lineItem: t } = n,
            { data: s } = (0, Q.UI)(),
            i = d.useMemo(() => {
              let m = [];
              for (const f of s?.line_items ?? [])
                f.line_item_id === t.line_item_id ||
                  !f.flags?.is_gift ||
                  !f.gift_info ||
                  m.push(f);
              return m;
            }, [s?.line_items, t.line_item_id]),
            { mutate: o } = (0, Pe.C)(),
            l = (m) => {
              o({
                lineItemID: t.line_item_id,
                lineItemFlags: t.flags,
                giftInfo: { ...(m.gift_info ?? {}) },
              });
            },
            c = (0, Le.WM)({
              rgOptions: i,
              selectedValue: null,
              onSelectionChange: l,
            });
          return i.length < 1
            ? null
            : (0, e.jsx)(ot.az, {
                flexGrow: "0",
                children: (0, e.jsxs)(Le.l6.Root, {
                  state: c,
                  children: [
                    (0, e.jsx)(Le.l6.Trigger, {
                      children: (0, e.jsx)(lt.EY, {
                        children: (0, r.we)(
                          "#Cart_Gifting_CopyGiftOptionsFrom",
                        ),
                      }),
                    }),
                    (0, e.jsx)(Le.l6.Options, {
                      children: i.map((m, f) =>
                        (0, e.jsx)(
                          Le.l6.Option,
                          {
                            value: m,
                            children: (0, e.jsx)(vn, { lineItem: m }),
                          },
                          f,
                        ),
                      ),
                    }),
                  ],
                }),
              });
        }
        function vn(n) {
          const { lineItem: t } = n,
            s = t.bundleid ? x.c6.xO : x.c6.RD,
            [i] = (0, K.mZ)(t.bundleid ? t.bundleid : t.packageid, s, {
              include_basic_info: !0,
            }),
            o = Ze(t),
            l = o?.m_strPlayerName ?? t.gift_info?.email_giftee;
          if (!i || !l) return null;
          const c = o
            ? (0, e.jsx)(Oe.i8, {
                size: "X-Small",
                statusPosition: "none",
                persona: o,
              })
            : (0, e.jsx)(e.Fragment, {});
          return (0, e.jsxs)(Ge.s, {
            minWidth: "0",
            align: "center",
            justify: "between",
            gap: "4",
            maxWidth: "600px",
            children: [
              (0, e.jsx)("div", { children: i.GetName() }),
              (0, e.jsxs)(Ge.s, {
                gap: "1",
                align: "center",
                children: [c, l],
              }),
            ],
          });
        }
        var xn = a(7967),
          _n = a(5827),
          Sn = a(54806),
          In = a(93125),
          Dt = a(96538);
        function Dn(n) {
          const {
            storeItem: t,
            lineItem: s,
            bShowGiftRecipientModal: i,
            fnOnDismiss: o,
            highlightedAccountIDs: l,
          } = n;
          return (0, e.jsx)(Dt.mt, {
            className: E().GiftRecipientPickerModal,
            active: i,
            onDismiss: o,
            children: (0, e.jsx)(Pn, {
              onDismiss: o,
              lineItem: s,
              storeItem: t,
              highlightedAccountIDs: l ?? [],
            }),
          });
        }
        const Pn = d.memo(function (t) {
          const { storeItem: s, highlightedAccountIDs: i, ...o } = t,
            { rgFriendsForGifting: l, isLoading: c, isError: m } = Yt(s, i),
            f = (0, be.DW)(i),
            p = d.useMemo(() => {
              const D = new Map(
                f
                  .filter((v) => !!v.data)
                  .map((v) => [v.data.GetAccountID(), v.data]),
              );
              for (const v of l ?? []) D.delete(v.accountid);
              let M = [];
              for (const v of D.values())
                M.push({
                  accountid: v.GetAccountID(),
                  persona: v,
                  ownership: { already_owns: !1, wishes_for: !1 },
                });
              return l && M.push(...l), M;
            }, [l, f]);
          return (0, e.jsx)(jn, {
            ...o,
            rgAccountsForGifting: p,
            isLoading: c,
            isError: m,
          });
        });
        function jn(n) {
          const {
              lineItem: t,
              onDismiss: s,
              rgAccountsForGifting: i,
              isLoading: o,
              isError: l,
            } = n,
            c = (0, Pe.C)(),
            [m, f] = d.useState(""),
            p = d.useMemo(() => {
              if (!i) return [];
              const v = m.toLocaleLowerCase();
              return v.length < 1
                ? i
                : i.filter(
                    (w) =>
                      !!(
                        w.persona.m_strPlayerName
                          .toLocaleLowerCase()
                          .indexOf(v) > -1 ||
                        (w.nickname &&
                          w.nickname.toLocaleLowerCase().indexOf(v) > -1)
                      ),
                  );
            }, [m, i]),
            D = t.gift_info?.accountid_giftee,
            M = (v) => {
              if (v) {
                const w = new pt.b(v);
                w.BIsValid() &&
                  c.mutate({
                    lineItemID: t.line_item_id,
                    lineItemFlags: t.flags,
                    giftInfo: {
                      ...(t.gift_info ?? {}),
                      accountid_giftee: w && w.GetAccountID(),
                    },
                  });
              }
              s();
            };
          return l
            ? (0, e.jsx)(Pt, {
                children: (0, e.jsx)("div", {
                  className: E().LoadingError,
                  children: (0, r.we)("#Cart_GiftRecipientModal_IssueLoading"),
                }),
              })
            : (0, e.jsxs)(Pt, {
                loading: o,
                children: [
                  (0, e.jsx)(En, { value: m, onChange: f }),
                  (0, e.jsx)(yn, {
                    children: p.map((v) =>
                      (0, e.jsx)(
                        Tn,
                        {
                          selected: v.accountid === D,
                          onSelect: M,
                          ownership: v.ownership,
                          persona: v.persona,
                          nickname: v.nickname,
                        },
                        v.accountid,
                      ),
                    ),
                  }),
                ],
              });
        }
        function Pt(n) {
          const { loading: t, children: s } = n;
          return (0, e.jsxs)(y.Z, {
            className: E().GiftRecipientPickerFormCtn,
            children: [
              (0, e.jsx)("div", {
                className: E().FormTitle,
                children: (0, r.we)("#Cart_GiftRecipientModal_Title"),
              }),
              t && (0, e.jsx)(T.t, { position: "center", size: "large" }),
              !t && s,
            ],
          });
        }
        function En(n) {
          const { value: t, onChange: s } = n;
          return (0, e.jsx)(C.pd, {
            autoFocus: !0,
            bShowClearAction: !0,
            className: E().GiftFriendsInput,
            placeholder: (0, r.we)("#Cart_GiftRecipientModal_Placeholder"),
            value: t,
            onChange: (i) => s(i.currentTarget.value),
          });
        }
        function yn(n) {
          return (0, e.jsx)(xn.MS, { className: E().GiftFriendsListCtn, ...n });
        }
        function Tn(n) {
          const {
              selected: t,
              onSelect: s,
              nickname: i,
              persona: o,
              ownership: l,
            } = n,
            c = l.already_owns,
            m = d.useCallback(() => {
              c || s(o.m_steamid.ConvertTo64BitString());
            }, [c, s, o]);
          return (0, e.jsxs)(y.Z, {
            className: (0, g.A)(
              E().GiftPickerFriendBlock,
              t && E().Selected,
              c && E().Disabled,
            ),
            focusClassName: E().Focused,
            noFocusRing: !0,
            onActivate: m,
            children: [
              (0, e.jsx)(Oe.i8, {
                className: E().FriendAvatar,
                statusPosition: "right",
                persona: o,
              }),
              (0, e.jsx)(In.A, {
                bParenthesizeNicknames: !0,
                strNickname: i,
                persona: o,
                className: E().PersonaName,
              }),
              (0, e.jsxs)("div", {
                className: E().FriendsGiftLabel,
                children: [
                  (0, e.jsx)(Mn, { ownership: l }),
                  (0, e.jsx)(Rn, { ownership: l }),
                ],
              }),
            ],
          });
        }
        function Mn(n) {
          const { ownership: t } = n,
            { already_owns: s, partial_owns_appids: i } = t;
          return s
            ? (0, e.jsx)("div", {
                className: (0, g.A)(E().OwnsGame),
                children: (0, r.we)("#Cart_GiftRecipientModal_OwnsGameLabel"),
              })
            : i && i.length > 0
              ? (0, e.jsx)("div", {
                  className: (0, g.A)(E().OwnsGame),
                  children: (0, r.PP)(
                    "#Cart_GiftRecipientModal_PartialOwnsLabel",
                    (0, e.jsx)(jt, { rgAppList: i }),
                  ),
                })
              : null;
        }
        function Rn(n) {
          const { ownership: t } = n,
            { already_owns: s, wishes_for: i, partial_wishes_for: o } = t;
          return s
            ? null
            : i
              ? (0, e.jsx)("div", {
                  className: (0, g.A)(E().OnWishlist),
                  children: (0, r.we)("#Cart_GiftRecipientModal_OnWishlist"),
                })
              : o && o.length > 0
                ? (0, e.jsx)("div", {
                    className: (0, g.A)(E().OnWishlist),
                    children: (0, r.PP)(
                      "#Cart_GiftRecipientModal_PartialWishlistLabel",
                      (0, e.jsx)(jt, { rgAppList: o }),
                    ),
                  })
                : null;
        }
        function jt(n) {
          const { rgAppList: t } = n,
            s = (0, _n.eG)(),
            i = d.useMemo(
              () =>
                Array.from(new Set(t))
                  .slice(0, 6)
                  .map((c) => (0, he.us)(s, { appid: c })),
              [s, t],
            ),
            o = (0, Sn.E)({ queries: i }),
            l = [];
          for (const c of o)
            if (!(!c.data || !c.data.name)) {
              if (l.length >= 3) break;
              l.push(
                (0, e.jsxs)(e.Fragment, {
                  children: [l.length ? ", " : "", c.data.name],
                }),
              );
            }
          return l;
        }
        function Bn(n) {
          const { giftInfo: t, onChange: s } = n,
            i = (0, be.js)(t.accountid_giftee);
          return i.data
            ? (0, e.jsxs)(Tt, {
                children: [
                  (0, e.jsxs)(Mt, {
                    children: [
                      (0, e.jsx)(Te, {
                        children: (0, r.we)("#Cart_PurchaseFor_Label"),
                      }),
                      (0, e.jsx)("a", {
                        href: i.data.GetCommunityProfileURL(),
                        target: "_blank",
                        children: (0, e.jsx)(Oe.i8, {
                          className: E().FriendAvatar,
                          statusPosition: "right",
                          persona: i.data,
                        }),
                      }),
                      i.data.m_strPlayerName,
                    ],
                  }),
                  (0, e.jsx)(Qn, { giftInfo: t, onChange: s }),
                ],
              })
            : null;
        }
        function Gn(n) {
          const { lineItem: t } = n;
          return (0, e.jsxs)(Tt, {
            children: [
              (0, e.jsx)(Un, { ...n }),
              (0, e.jsx)(Hn, { lineItem: t }),
              (0, e.jsx)(Vn, {
                gifteeAccountID: t.gift_info?.accountid_giftee,
              }),
            ],
          });
        }
        function On(n) {
          return u.iA.logged_in
            ? null
            : (0, e.jsx)("div", {
                className: E().SignInLink,
                children: (0, e.jsx)(ze.$, {
                  onClick: () => (0, N.vg)(),
                  children: (0, r.we)("#Cart_Gifting_SignInForFriends"),
                }),
              });
        }
        function Ln(n) {
          const { lineItem: t, storeItem: s } = n,
            [i, o] = d.useState(!1),
            { data: l } = (0, Q.UI)(),
            c = d.useMemo(() => {
              if (!l?.line_items) return [];
              let m = new Set();
              for (const f of l.line_items)
                f.line_item_id !== t.line_item_id &&
                  f.gift_info?.accountid_giftee &&
                  m.add(f.gift_info.accountid_giftee);
              return [...m];
            }, [l?.line_items, t.line_item_id]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              u.iA.logged_in &&
                (0, e.jsx)(ze.$, {
                  onClick: () => o(!0),
                  children: (0, r.we)("#Cart_SelectRecipient"),
                }),
              i &&
                (0, e.jsx)(Dn, {
                  bShowGiftRecipientModal: i,
                  fnOnDismiss: () => o(!1),
                  lineItem: t,
                  storeItem: s,
                  highlightedAccountIDs: c,
                }),
            ],
          });
        }
        function Fn(n) {
          const { lineItem: t, onClick: s } = n,
            { mutate: i } = (0, Pe.C)(),
            o = d.useCallback(() => {
              i({
                lineItemID: t.line_item_id,
                lineItemFlags: t.flags,
                giftInfo: { ...t.gift_info, email_giftee: "" },
              }),
                s();
            }, [i, t, s]);
          return (0, e.jsx)(ze.$, {
            color: "dull",
            onClick: o,
            children: (0, r.we)("#Cart_EnterRecipientEmail"),
          });
        }
        function wn(n) {
          const { lineItem: t } = n,
            s = Ze(t);
          return s
            ? (0, e.jsxs)(Ge.s, {
                align: "center",
                children: [
                  (0, e.jsx)("a", {
                    href: s.GetCommunityProfileURL(),
                    target: "_blank",
                    children: (0, e.jsx)(Oe.i8, {
                      className: E().FriendAvatar,
                      statusPosition: "right",
                      persona: s,
                    }),
                  }),
                  s.m_strPlayerName,
                ],
              })
            : null;
        }
        function Nn(n) {
          const { lineItem: t } = n,
            s = t.gift_info?.email_giftee,
            { mutate: i } = (0, Pe.C)(),
            [o, l, c] = (0, Qt.M)(s, 1e3);
          return (
            (0, d.useEffect)(() => {
              if (!l || l == t.gift_info?.email_giftee) return;
              let m = t.gift_info ? { ...t.gift_info } : {};
              (m.email_giftee = l),
                (m.time_scheduled_send = 0),
                i({
                  lineItemID: t.line_item_id,
                  lineItemFlags: t.flags,
                  giftInfo: m,
                });
            }, [i, t, l]),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: E().GiftEmailInput,
                  children: (0, e.jsx)(C.pd, {
                    label: " ",
                    mustBeEmail: !0,
                    value: o,
                    onChange: (m) => c(m.target.value),
                    maxChars: kn,
                  }),
                }),
                (0, e.jsxs)("ul", {
                  className: E().GiftEmailWarnings,
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, r.we)("#Cart_GiftDeliveryEmail_Warning1"),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, r.we)(
                        "#Cart_GiftDeliveryEmail_Warning2",
                        u.iA.country_code,
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var bn = ((n) => (
          (n[(n.NoRecipientSelected = 0)] = "NoRecipientSelected"),
          (n[(n.AccountSelected = 1)] = "AccountSelected"),
          (n[(n.EmailSelected = 2)] = "EmailSelected"),
          n
        ))(bn || {});
        function Un(n) {
          const { lineItem: t } = n,
            [s, i] = d.useState(!1),
            o = d.useMemo(
              () =>
                t.gift_info?.accountid_giftee
                  ? 1
                  : s || t.gift_info?.email_giftee
                    ? 2
                    : 0,
              [t, s],
            ),
            { mutate: l } = (0, Pe.C)(),
            c = d.useCallback(() => {
              let m = t.gift_info ? { ...t.gift_info } : {};
              (m.accountid_giftee = null),
                (m.email_giftee = null),
                i(!1),
                l({
                  lineItemID: t.line_item_id,
                  lineItemFlags: t.flags,
                  giftInfo: m,
                });
            }, [l, t]);
          return (0, e.jsxs)(Fe, {
            children: [
              (0, e.jsx)("div", { className: E().GiftFormDivider }),
              (0, e.jsxs)(Ge.s, {
                justify: "between",
                gap: "3",
                direction: { initial: "column-reverse", md: "row" },
                marginBottom: "2",
                children: [
                  (0, e.jsxs)(Mt, {
                    children: [
                      (0, e.jsx)(Te, {
                        fullWidth: o === 2,
                        children:
                          o == 2
                            ? (0, r.we)("#Cart_GiftRecipientEmail_Label")
                            : (0, r.we)("#Cart_GiftRecipient_Label"),
                      }),
                      o == 1 && (0, e.jsx)(wn, { lineItem: t }),
                      o == 0 &&
                        (0, e.jsx)(Wn, { onEmailRecipient: () => i(!0), ...n }),
                      o != 0 &&
                        (0, e.jsxs)(Ue, {
                          onClick: c,
                          children: [
                            "(",
                            o == 2
                              ? (0, r.we)("#Cart_EditGiftDelivery")
                              : (0, r.we)("#Cart_Edit"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                  (0, e.jsx)(An, { lineItem: t }),
                ],
              }),
              (0, e.jsx)("div", {
                children: o == 2 && (0, e.jsx)(Nn, { ...n }),
              }),
              o == 1 && (0, e.jsx)(Kn, { lineItem: t }),
            ],
          });
        }
        function Wn(n) {
          const { onEmailRecipient: t, ...s } = n;
          return (0, e.jsxs)(Ge.s, {
            align: "center",
            gap: "2",
            marginStart: "2",
            wrap: "wrap",
            children: [
              (0, e.jsx)(Ln, { ...s }),
              (0, e.jsx)(Fn, { onClick: t, ...s }),
              (0, e.jsx)(On, {}),
            ],
          });
        }
        function Kn(n) {
          const { lineItem: t } = n,
            s = Ze(t),
            { data: i } = (0, Ht.Dv)(),
            o = d.useMemo(
              () => !i || i.includes(s?.GetSteamIDAsString()),
              [i, s],
            );
          return !s || o
            ? null
            : (0, e.jsx)(ot.az, {
                marginTop: "3",
                className: E().GiftNonFriendWarning,
                children: (0, e.jsxs)(lt.EY, {
                  size: "3",
                  color: "amber-9",
                  children: [
                    u.iA.logged_in &&
                      (0, r.PP)(
                        "#Cart_Warning_GiftToNonFriend_Named",
                        (0, e.jsx)(ct.Y, {
                          target: "_blank",
                          href: s.GetCommunityProfileURL(),
                          children: s.m_strPlayerName,
                        }),
                      ),
                    !u.iA.logged_in &&
                      (0, r.oW)(
                        "#Cart_Warning_GiftToAccount_LoggedOut_Actionable",
                        (0, e.jsx)(ct.W, {
                          color: "text-light",
                          contrast: "title",
                          onClick: () => (0, N.vg)(),
                        }),
                      ),
                  ],
                }),
              });
        }
        function Hn(n) {
          const { lineItem: t } = n,
            [s, i] = d.useState(t.gift_info?.gift_message?.message || ""),
            o = d.useRef(s),
            [l, c] = d.useState(t.gift_info?.gift_message?.signature || ""),
            m = d.useRef(l),
            [f, p] = d.useState(t.gift_info?.time_scheduled_send),
            D = d.useRef(f),
            M = d.useCallback((k) => {
              (v.current = !0), p(Math.floor(k));
            }, []),
            v = d.useRef(!1);
          d.useEffect(() => {
            v.current ||
              ((D.current = t.gift_info?.time_scheduled_send),
              (o.current = t.gift_info?.gift_message?.message || ""),
              (m.current = t.gift_info?.gift_message?.signature || ""),
              p(D.current),
              i(o.current),
              c(m.current));
          }, [t.gift_info]);
          const w = (0, ve._g)(3e3),
            { mutate: re } = (0, Pe.C)(),
            q = d.useCallback(
              (k) => {
                w(() => {
                  v.current &&
                    (re({
                      lineItemID: t.line_item_id,
                      lineItemFlags: t.flags,
                      giftInfo: k,
                    }),
                    (v.current = !1));
                });
              },
              [re, t.line_item_id, t.flags, w],
            );
          return (
            (0, d.useEffect)(() => {
              (D.current != f || o.current != s || m.current != l) &&
                (q({
                  accountid_giftee: t.gift_info?.accountid_giftee,
                  email_giftee: t.gift_info?.email_giftee,
                  gift_message: { message: s, signature: l },
                  time_scheduled_send: f,
                }),
                (D.current = f),
                (o.current = s),
                (m.current = l));
            }, [s, l, f, q, t.gift_info]),
            (0, e.jsx)(yt, {
              id: t.line_item_id,
              message: s,
              onMessageChange: (k) => {
                (v.current = !0), i(k);
              },
              signature: l,
              onSignatureChange: (k) => {
                (v.current = !0), c(k);
              },
              scheduledTime: f,
              onScheduledTimeChange: M,
              bShowScheduledTime:
                !t.gift_info?.email_giftee || t.gift_info?.email_giftee == "",
            })
          );
        }
        function Qn(n) {
          const { giftInfo: t, onChange: s } = n;
          return (0, e.jsx)(yt, {
            id: "cart",
            message: t.gift_message?.message || "",
            onMessageChange: (i) =>
              s({ ...t, gift_message: { ...t.gift_message, message: i } }),
            signature: t.gift_message?.signature || "",
            onSignatureChange: (i) =>
              s({ ...t, gift_message: { ...t.gift_message, signature: i } }),
            scheduledTime: t.time_scheduled_send,
            onScheduledTimeChange: (i) => s({ ...t, time_scheduled_send: i }),
            bShowScheduledTime: !t?.email_giftee || t?.email_giftee == "",
          });
        }
        const Et = 160,
          kn = 330;
        function yt(n) {
          const {
              id: t,
              message: s,
              onMessageChange: i,
              signature: o,
              onSignatureChange: l,
              bShowScheduledTime: c,
              scheduledTime: m,
              onScheduledTimeChange: f,
              onBlur: p,
            } = n,
            D = (0, ut.LH)(),
            M = Et - s.length,
            [v, w] = d.useState(!1),
            re = v || o?.length > 0 || !D,
            { data: q } = (0, be.js)(u.iA.accountid);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(Fe, {
                children: [
                  (0, e.jsx)(Te, {
                    fullWidth: !0,
                    children: (0, r.PP)(
                      "#Cart_GiftDelivery_Body",
                      (0, e.jsx)("span", {
                        className: M <= 0 ? E().RedText : null,
                        children: M,
                      }),
                    ),
                  }),
                  (0, e.jsx)(C.Cl, {
                    nMinHeight: 50,
                    className: E().GiftNoteInput,
                    value: s,
                    onBlur: p,
                    onChange: (k) => i(k.target.value),
                  }),
                ],
              }),
              !!D &&
                (0, e.jsx)(Fe, {
                  children: (0, e.jsxs)("div", {
                    className: E().GiftFormRecipient,
                    children: [
                      (0, e.jsx)(Te, {
                        children: (0, r.we)("#Cart_GiftDelivery_From"),
                      }),
                      (0, e.jsx)(Oe.i8, {
                        className: E().FriendAvatar,
                        statusPosition: "right",
                        persona: q,
                      }),
                      " ",
                      q?.m_strPlayerName || "",
                      !re &&
                        (0, e.jsxs)(Ue, {
                          onClick: () => w(!0),
                          children: [
                            "(",
                            (0, r.we)("#Cart_GiftDelivery_AddSignature"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                }),
              re &&
                (0, e.jsxs)(Fe, {
                  children: [
                    (0, e.jsx)(Te, {
                      fullWidth: !0,
                      children: (0, r.we)("#Cart_GiftDelivery_Signature"),
                    }),
                    (0, e.jsx)(C.pd, {
                      value: o,
                      className: E().GiftSignatureInput,
                      onChange: (k) => l(k.target.value),
                      onBlur: p,
                      maxChars: Et,
                    }),
                  ],
                }),
              c &&
                (0, e.jsx)(un, { scheduledTime: m, onScheduledTimeChange: f }),
            ],
          });
        }
        function Tt(n) {
          return (0, e.jsx)("div", {
            className: E().GiftFormCtn,
            children: n.children,
          });
        }
        function Fe(n) {
          return (0, e.jsx)("div", {
            className: E().GiftFormSection,
            children: n.children,
          });
        }
        function Mt(n) {
          return (0, e.jsx)("div", {
            className: E().GiftFormRecipient,
            children: n.children,
          });
        }
        function Rt(n) {
          return (0, e.jsx)("div", {
            className: E().GiftRadioRow,
            children: n.children,
          });
        }
        function Te(n) {
          const { fullWidth: t } = n;
          return (0, e.jsx)("div", {
            className: z()(E().FormTextLabel, t && E().FullWidth),
            children: n.children,
          });
        }
        function Ue(n) {
          return (0, e.jsx)(y.Z, {
            onActivate: n.onClick,
            children: n.children,
            className: E().LinkButton,
          });
        }
        function Vn(n) {
          const { gifteeAccountID: t } = n,
            { isLoading: s, data: i } = (0, X.vo)(!0);
          if (s || i.is_not_member_of_any_group() || i.role() === Ye.PQ.sf)
            return null;
          const o = kt.b2
            .InitFromAccountID(t, u.TS.EUNIVERSE)
            .ConvertTo64BitString();
          return i
            .family_group()
            .members()
            .some((c) => c.steamid() === o && c.role() === Ye.PQ.sf)
            ? (0, e.jsxs)("div", {
                className: E().FamilyGiftNotice,
                children: [" ", (0, r.we)("#Cart_FamilyGift_Notice")],
              })
            : null;
        }
        var we = a(48366),
          zn = a(48201),
          Bt = a(58162),
          We = a(99412),
          Gt = a(71742),
          Yn = a(58732),
          $e = a(72609),
          Me = a(60659);
        function Zn() {
          const n = (0, j.j4)(),
            [t] = (0, Me.fg)(),
            s = `${$e.TS.STORE_CHECKOUT_BASE_URL}checkout/`;
          if ((0, we.c2)(n)) return `${s}?accountcart=1`;
          if ((0, we.sb)(n)) return `${s}?gidreplay=${n.gid}`;
          {
            const i = new URLSearchParams();
            return (
              i.append("cart", n.gid ?? ""),
              t?.accountid_giftee &&
                (i.append("purchasetype", "gift"),
                i.append("bIsGift", "1"),
                i.append("giftInfo", encodeURIComponent(JSON.stringify(t)))),
              `${s}?${i.toString()}`
            );
          }
        }
        var Ot = a(29392);
        function Jn() {
          return ["shopping_cart", "relevant_coupons"];
        }
        async function Xn(n) {
          const t = dt.w.Init(Ot.wi);
          t.Body().set_language((0, We.sfN)($e.TS.LANGUAGE));
          const s = await Ot.t8.GetRelevantCoupons(n, t);
          return s.BIsValid()
            ? s.Body().toObject()
            : (console.error("Failed to load relevant coupons"), {});
        }
        function $n() {
          const n = (0, gt.KV)();
          return (0, ft.I)({
            queryKey: Jn(),
            queryFn: async () =>
              ((await Xn(n)).line_items ?? []).reduce(
                (s, i) => (
                  i.line_item_id && (s[i.line_item_id] = i.coupons ?? []), s
                ),
                {},
              ),
            enabled: $e.iA.logged_in,
            placeholderData: () => ({}),
          });
        }
        var de = a(50829),
          qn = a(75975);
        function es(n) {
          const {
              lineItem: t,
              storeItem: s,
              couponApplied: i,
              availableCoupons: o,
            } = n,
            [{ bDialogActive: l, strDialogTitle: c }, m] = d.useState({
              bDialogActive: !1,
            }),
            f = () =>
              m({
                bDialogActive: !0,
                strDialogTitle: (0, r.we)(
                  i ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
                ),
              }),
            p = (0, Pe.C)(),
            D = (M) => {
              p.mutate({
                lineItemID: t.line_item_id,
                giftInfo: t.gift_info,
                lineItemFlags: { ...t.flags },
                gidCoupon: M,
              });
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ts, {
                couponApplied: i,
                numAvailable: o.length,
                onModifyClick: f,
              }),
              (0, e.jsx)(ss, {
                active: l,
                title: c || (0, r.we)("#Cart_CouponModify_Add"),
                packageName: s.name,
                onRequestClose: () => m({ bDialogActive: !1 }),
                couponApplied: i,
                availableCoupons: o,
                onCouponChange: D,
              }),
            ],
          });
        }
        function ts(n) {
          const { couponApplied: t, numAvailable: s, onModifyClick: i } = n,
            o = (0, r.we)(
              t ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
            );
          return (0, e.jsx)("div", {
            className: de.CouponPickerRowGlow,
            children: (0, e.jsxs)("div", {
              className: de.CouponPickerRow,
              children: [
                t ? (0, e.jsx)(ns, { ...t }) : null,
                (0, e.jsx)(qe, {
                  children: (0, r.Yp)("#Cart_CouponAvailability", s),
                }),
                (0, e.jsx)("div", {
                  className: de.ModifyLink,
                  children: (0, e.jsx)(Ue, { onClick: i, children: o }),
                }),
              ],
            }),
          });
        }
        function ns(n) {
          const { large_icon_url: t, title: s } = n;
          return (0, e.jsx)("img", {
            className: de.CouponRepresentation,
            src: t,
            title: s,
          });
        }
        function ss(n) {
          const {
              active: t,
              onRequestClose: s,
              packageName: i,
              title: o,
              couponApplied: l,
              availableCoupons: c,
              onCouponChange: m,
            } = n,
            [f, p] = d.useState(l?.gidcoupon || ""),
            D = () => {
              s(), m(f || We.kFb);
            };
          return (0, e.jsxs)(Dt.mt, {
            active: t,
            onDismiss: s,
            children: [
              (0, e.jsx)(C.Y9, { children: o }),
              (0, e.jsx)(C.a3, {
                children: (0, r.PP)(
                  "#Cart_SelectCouponToApply",
                  (0, e.jsx)("span", {
                    className: de.PackageName,
                    children: i,
                  }),
                ),
              }),
              (0, e.jsx)(is, {
                availableCoupons: c,
                couponApplied: l?.gidcoupon,
                couponSelected: f,
                onSelectedChange: p,
              }),
              (0, e.jsx)(C.CB, {
                onCancel: s,
                onOK: D,
                strOKText: (0, r.we)("#Button_Done"),
              }),
            ],
          });
        }
        function is(n) {
          const {
              availableCoupons: t,
              couponApplied: s,
              couponSelected: i,
              onSelectedChange: o,
            } = n,
            { data: l } = (0, R.g7)(),
            c = (l?.cart_items || []).map((m) => m.coupon_applied?.gidcoupon);
          return (0, e.jsx)("div", {
            className: de.CouponListContainer,
            children: t.map((m) =>
              (0, e.jsx)(
                as,
                {
                  ...m,
                  applied: s === m.gidcoupon,
                  selected: i === m.gidcoupon,
                  inUse: c.includes(m.gidcoupon),
                  onSelected: (f) => o(f ? m.gidcoupon : ""),
                },
                m.gidcoupon,
              ),
            ),
          });
        }
        function as(n) {
          const {
              applied: t,
              inUse: s,
              selected: i,
              large_icon_url: o,
              title: l,
              discount_pct: c,
              onSelected: m,
            } = n,
            f = !t && s,
            p = f ? void 0 : () => m(!i);
          return (0, e.jsxs)("div", {
            className: (0, g.A)(de.CouponListItem, f && de.Disabled),
            onClick: p,
            children: [
              (0, e.jsx)(rs, { checked: i, hidden: f }),
              (0, e.jsx)("img", { src: o, title: l, className: de.Image }),
              (0, e.jsxs)("div", {
                className: de.Info,
                children: [
                  t &&
                    (0, e.jsx)(qe, {
                      children: (0, r.we)("#Cart_Coupons_Applied"),
                    }),
                  f &&
                    (0, e.jsx)(qe, {
                      children: (0, r.we)("#Cart_Coupons_InUse"),
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: de.Discount,
                children: ["-", c, "%"],
              }),
            ],
          });
        }
        function qe(n) {
          return (0, e.jsx)("div", {
            className: de.CouponInfoText,
            children: n.children,
          });
        }
        function rs(n) {
          const { checked: t, hidden: s } = n;
          return (0, e.jsx)("div", {
            className: (0, g.A)(de.Checkbox, s && de.Hidden),
            children: t && (0, e.jsx)(qn.Jl, {}),
          });
        }
        var Ke = a(2165),
          os = a(71460),
          ls = a.n(os),
          cs = a(11543),
          B = a.n(cs);
        function us() {
          const [n, t] = d.useState(null);
          return (
            d.useEffect(() => {
              t((0, h.Vh)()?.rgUserCountryOptions);
            }, []),
            n
              ? (0, e.jsxs)("div", {
                  className: (0, g.A)(
                    B().EstimatedTotalFlex,
                    ls().UserCountrySelector,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: B().CartLabelText,
                      children: (0, r.we)("#Cart_UserCountrySelector"),
                    }),
                    (0, e.jsx)("div", {
                      className: B().CartValueText,
                      children: (0, e.jsx)(ds, { rgCountryOptions: n }),
                    }),
                  ],
                })
              : null
          );
        }
        function ds(n) {
          const { rgCountryOptions: t } = n,
            [s, i] = d.useState(u.TS.COUNTRY),
            o = d.useMemo(
              () => Object.keys(t).map((c) => ({ label: t[c], data: c })),
              [t],
            ),
            l = d.useCallback((c) => {
              c.data != u.TS.COUNTRY &&
                PresentCountryCurrencyChangeDialog(c.data == "help"),
                i(c.data);
            }, []);
          return (0, e.jsx)(C.m, {
            selectedOption: s,
            onChange: l,
            rgOptions: o,
            contextMenuPositionOptions: { bMatchWidth: !1 },
          });
        }
        function ms(n) {
          const { children: t } = n;
          return (0, e.jsx)(fs, { children: t });
        }
        function fs(n) {
          const { children: t } = n,
            s = (0, Q.UI)(),
            { data: i } = $n(),
            o = s.isLoading || !s.data,
            l = (0, ye.Qn)(),
            [c, m] = (0, Me.fg)(),
            { sortedLineItems: f, bCartIncludesGifts: p } = d.useMemo(() => {
              const v = s?.data?.line_items || [],
                w = v.some((q) => q.flags?.is_gift);
              return {
                sortedLineItems: v.sort((q, k) => {
                  const ne = q.bundleid ?? q.packageid,
                    se = k.bundleid ?? k.packageid;
                  return q.time_added == k.time_added
                    ? ne < se
                      ? 1
                      : -1
                    : q.time_added < k.time_added
                      ? 1
                      : -1;
                }),
                bCartIncludesGifts: w,
              };
            }, [s?.data?.line_items]),
            D = (v) =>
              (0, e.jsx)(gs, {
                ...v,
                availableCoupons: (i && i[v.lineItem.line_item_id]) || [],
              }),
            { data: M } = (0, R.g7)();
          return (0, e.jsxs)(Ke.wW, {
            validateCart: M,
            eDisplayType: Ke.WA.k_ECartDisplayType_FullPage,
            children: [
              (0, e.jsx)(Ke.ZZ, {}),
              (0, e.jsxs)(y.Z, {
                className: B().ShoppingCartCtn,
                children: [
                  (0, e.jsxs)(y.Z, {
                    className: B().ShoppingCartLeftCol,
                    children: [
                      o && (0, e.jsx)(Bt.UD, {}),
                      !!c &&
                        !!m &&
                        (0, e.jsx)(L.tH, {
                          children: (0, e.jsx)(F, {
                            children: (0, e.jsx)(Bn, {
                              giftInfo: c,
                              onChange: m,
                            }),
                          }),
                        }),
                      (0, e.jsx)(L.tH, {
                        children: (0, e.jsx)(zn.p, {
                          lineItems: f,
                          cartValidation: M,
                          renderLineItem: D,
                        }),
                      }),
                      (0, e.jsx)(Ke.LP, { validateCart: M }),
                      !l &&
                        (0, e.jsxs)("div", {
                          className: B().ResponsiveShoppingCartSummary,
                          children: [
                            (0, e.jsx)(Lt, {
                              bCartIncludesGifts: p,
                              strEstimatedTotal:
                                M?.estimated_totals?.subtotal.formatted_amount,
                            }),
                            (0, e.jsx)(Nt, {}),
                          ],
                        }),
                      t &&
                        t({
                          cart: s.data,
                          validatedCart: M,
                          bCartIncludesGifts: p,
                        }),
                    ],
                  }),
                  (0, e.jsx)(y.Z, {
                    className: (0, g.A)(
                      B().ShoppingCartRightCol,
                      f?.length <= 2 && B().SmallCart,
                    ),
                    children: (0, e.jsxs)("div", {
                      className: B().CartRightColStickyCtn,
                      children: [
                        (0, e.jsx)(Lt, {
                          bCartIncludesGifts: p,
                          strEstimatedTotal:
                            M?.estimated_totals?.subtotal.formatted_amount,
                        }),
                        (0, e.jsx)(Nt, {}),
                        (0, e.jsx)(ce, { cart: s.data, bMinimalDisplay: !0 }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function gs(n) {
          const {
              lineItem: t,
              storeItem: s,
              validatedItem: i,
              availableCoupons: o,
              children: l,
            } = n,
            [c] = (0, Me.Ez)(),
            m = c === "gifts" && !!t.flags.is_gift,
            f = !!o.length;
          return (0, e.jsxs)(y.Z, {
            children: [
              (0, e.jsxs)(Bt.Rz, {
                children: [
                  l,
                  m && (0, e.jsx)(Gn, { storeItem: s, lineItem: t }),
                ],
              }),
              f &&
                (0, e.jsx)(es, {
                  storeItem: s,
                  lineItem: t,
                  couponApplied: i?.coupon_applied,
                  availableCoupons: o,
                }),
            ],
          });
        }
        const Lt = (0, L.Nr)(function (t) {
          const { strEstimatedTotal: s, bCartIncludesGifts: i } = t,
            { bButtonDisabled: o, nextStep: l, bGuestAvailable: c } = Ft(i);
          return (0, e.jsxs)("div", {
            className: B().CartSummaryCtn,
            children: [
              (0, e.jsx)(L.tH, { children: (0, e.jsx)(us, {}) }),
              (0, e.jsxs)("div", {
                className: (0, g.A)(
                  B().EstimatedTotalFlex,
                  B().SummaryMarginBottom,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: B().CartLabelText,
                    children: (0, r.we)("#Cart_EstimatedTotal"),
                  }),
                  (0, e.jsx)("div", {
                    className: B().CartValueText,
                    children: s,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, g.A)(B().CartNoteText, B().SummaryMarginBottom),
                children: (0, r.we)("#Cart_Note_SalesTax"),
              }),
              (0, e.jsxs)(L.wC, {
                children: [
                  (0, e.jsx)(wt, {
                    bDisabled: o,
                    nextStep: l,
                    bGuestOption: c,
                  }),
                  (0, e.jsx)(As, { disabled: o || i }),
                  (0, e.jsx)(hs, { bDisabled: o }),
                ],
              }),
            ],
          });
        });
        function Ft(n) {
          const t = (0, Q.UI)(),
            s = (0, R.g7)(),
            i = s.isSuccess && s.data.cart_items.every((w) => !w.errors),
            [o, l] = (0, Me.Ez)(),
            c = (0, we.EJ)(),
            m = (0, R.p2)(s.data),
            p = (0, R.MT)(s.data) || m,
            D =
              t.isSuccess &&
              t.data.line_items.some(
                (w) =>
                  w.flags?.is_gift &&
                  !w.gift_info?.accountid_giftee &&
                  (!w.gift_info?.email_giftee ||
                    !C.pd.validateEmail(w.gift_info?.email_giftee)),
              );
          let M =
            u.iA.logged_in &&
            ((o === "initial" && !n && !i) ||
              (t.isSuccess && t.data.line_items.length == 0));
          M = M || (o === "gifts" && (!i || D));
          let v;
          return (
            n && o == "initial" && !c
              ? (v = "gifts")
              : u.iA.logged_in
                ? (v = "checkout")
                : (v = "login"),
            { bButtonDisabled: M, nextStep: v, bGuestAvailable: p }
          );
        }
        function ps(n) {
          const {
            bButtonDisabled: t,
            nextStep: s,
            bGuestAvailable: i,
          } = Ft(n.bCartIncludesGifts);
          return (0, e.jsx)(wt, { bDisabled: t, nextStep: s, bGuestOption: i });
        }
        function wt(n) {
          const { bDisabled: t, nextStep: s, bGuestOption: i } = n,
            o = Zn(),
            l = (0, W.W6)(),
            [c, m] = (0, Me.Ez)(),
            f = (0, j.j4)();
          let p = We.kFb;
          (0, we.kx)(f) && (p = f.gid);
          const D = () => {
              switch (s) {
                case "login":
                  if (p != We.kFb && i) {
                    const w =
                      u.TS.STORE_CHECKOUT_BASE_URL +
                      "checkout?purchasetype=self&cart=" +
                      p;
                    (0, N.pZ)(w, i);
                  } else (0, N.vg)();
                  break;
                case "gifts":
                  m("gifts"), l.push(Yn.B.ShoppingCartGifts());
                  break;
                case "checkout":
                  location.href = o;
                  break;
                default:
                  (0, Gt.z_)(s, "unhandled step");
              }
            },
            M = Cs(s),
            v = (0, g.A)(
              B().CartSummaryBtn,
              B().SummaryMarginBottom,
              B().Button,
            );
          return (0, e.jsx)(C.jn, {
            disabled: t,
            className: v,
            onClick: D,
            children: M,
          });
        }
        function Nt() {
          const n = `${u.TS.STORE_BASE_URL}subscriber_agreement/`;
          return (0, e.jsxs)(y.Z, {
            className: B().LicenseContextCtn,
            children: [
              (0, e.jsx)("img", {
                src: `${u.TS.IMG_URL}/checkout/computer.png`,
                alt: "",
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("div", {
                    className: B().LicenseTitle,
                    children: (0, r.we)("#Cart_LicenseContextTitle"),
                  }),
                  (0, e.jsx)("div", {
                    className: B().LicenseLink,
                    children: (0, r.PP)(
                      "#Cart_LicenseContextLink",
                      (0, e.jsx)("a", {
                        href: n,
                        children: (0, r.we)("#Cart_LicenseContextSSA"),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function hs(n) {
          const { bDisabled: t } = n,
            s = (0, X.vo)(),
            i = (0, we.sI)(),
            o = (0, h.F$)(),
            l = (0, X.Ke)(s.data?.family_groupid(), i, Ye.IG.DP),
            c = () => {
              l.mutate(void 0, {
                onSuccess: () => {
                  location.href = `${u.TS.STORE_BASE_URL}account/familymanagement?tab=requests`;
                },
              });
            };
          return o
            ? (0, e.jsx)(C.$n, {
                disabled: t,
                className: (0, g.A)(
                  B().CartSummaryBtn,
                  B().SummaryMarginBottom,
                ),
                onClick: c,
                children: (0, r.we)("#Cart_DeclinePurchaseRequest"),
              })
            : null;
        }
        function Cs(n) {
          return n == "login"
            ? (0, r.we)("#Cart_ContinueButton_Payment")
            : n == "gifts"
              ? (0, r.we)("#Cart_ContinueButton_Gifts")
              : n == "checkout"
                ? (0, r.we)("#Cart_ContinueButton_Payment")
                : ((0, Gt.z_)(n, "unhandled step"), "");
        }
        function As(n) {
          const { disabled: t } = n,
            i = (0, X.vo)().data?.family_groupid(),
            o = (0, X.Yc)(i, u.iA.country_code),
            [l, c] = (0, h.S0)(),
            [m, f] = d.useState(!1),
            p = () => {
              !t &&
                !m &&
                (f(!0),
                o.mutate(void 0, {
                  onSuccess: () => {
                    window.location.assign((0, X.Vo)(i));
                  },
                }));
            };
          return !l && c != h.Mn.k_ENonGiftableItemPresent
            ? null
            : (0, e.jsxs)("div", {
                className: (0, g.A)(
                  B().RequestPurchaseCtn,
                  B().SummaryMarginBottom,
                ),
                children: [
                  (0, e.jsx)(C.jn, {
                    disabled: t || m || !l,
                    className: (0, g.A)(B().CartSummaryBtn),
                    onClick: p,
                    children: (0, r.we)("#Cart_RequestPurchase"),
                  }),
                  l &&
                    (0, e.jsx)("div", {
                      children: (0, r.we)("#Cart_RequestPurchaseExplanation"),
                    }),
                  c === h.Mn.k_ENonGiftableItemPresent &&
                    (0, e.jsx)("div", {
                      children: (0, r.we)(
                        "#Cart_RequestPurchaseNonGiftableItems",
                      ),
                    }),
                ],
              });
        }
        var vs = a(32593);
        function xs(n) {
          const t = bt(),
            s = Ts();
          (0, K.YM)();
          let i = null;
          return (
            t
              ? s.type == "replay"
                ? (i = (0, e.jsx)(Is, { cartID: s }))
                : (i = (0, e.jsx)(Ss, { cartID: s, ...n }))
              : (i = (0, e.jsx)("div", {
                  className: z()(B().ShoppingCartPage, B().CartPagePlaceholder),
                  children: (0, e.jsx)(T.t, {
                    position: "center",
                    msDelayAppear: 250,
                  }),
                })),
            (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(_s, {}), i] })
          );
        }
        function _s() {
          return (0, V.Pt)(), (0, X.vo)(), null;
        }
        function Ss(n) {
          const { cartID: t, initialStep: s = "initial" } = n,
            [i, o] = d.useState(s),
            c = (0, Q.UI)()?.data?.line_items.length || 0,
            m = Ps(i, c);
          return (0, e.jsx)(et, {
            cartID: t,
            title: m,
            step: i,
            onStepChange: o,
            children: ({ cart: f, validatedCart: p, bCartIncludesGifts: D }) =>
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(L.tH, {
                    children: (0, e.jsx)(Ms, {
                      isCartEmpty: !f || f.line_items.length === 0,
                      cart: p,
                      bCartIncludesGifts: D,
                    }),
                  }),
                  (0, e.jsx)(L.tH, {
                    children: (0, e.jsx)(Ie, { cart: f, validatedCart: p }),
                  }),
                ],
              }),
          });
        }
        function Is(n) {
          const { cartID: t } = n;
          return u.iA.logged_in
            ? (0, e.jsx)(et, {
                cartID: t,
                title: (0, r.we)("#Cart_Replay_SavedCart"),
                step: "initial",
                onStepChange: () => {},
                children: () =>
                  (0, e.jsx)(F, {
                    children: (0, r.we)("#Cart_Replay_Instructions", 72),
                  }),
              })
            : (0, e.jsx)(N.Cg, {});
        }
        function et(n) {
          const {
              children: t,
              cartID: s,
              title: i,
              step: o,
              onStepChange: l,
              ...c
            } = n,
            m = d.useRef(null);
          return (
            d.useEffect(() => {
              m.current && m.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(te.Ay, {
              controller: "cart",
              method: "display",
              submethod: o,
              children: (0, e.jsxs)(Me.iZ, {
                cartID: s,
                step: o,
                setStep: l,
                ...c,
                children: [
                  (0, e.jsx)(Es, {}),
                  (0, e.jsxs)(y.Z, {
                    className: B().ShoppingCartPage,
                    navRef: m,
                    children: [
                      (0, e.jsx)(Ds, { step: o, title: i }),
                      (0, e.jsx)("div", {
                        className: B().ShoppingCartHeader,
                        children: i,
                      }),
                      (0, e.jsx)(ms, { children: t }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function Ds(n) {
          const { step: t, title: s } = n,
            i = js(t);
          return (0, ye.Qn)()
            ? null
            : (0, e.jsxs)("div", {
                className: B().ShoppingCartBreadcrumbs,
                children: [
                  (0, e.jsx)("a", {
                    href: u.TS.STORE_BASE_URL,
                    children: (0, r.we)("#Cart_Bradcrumb_Home"),
                  }),
                  " ",
                  i,
                  " ",
                  (0, e.jsxs)("span", {
                    className: B().CurrentBreadcrumb,
                    children: ["> ", s],
                  }),
                ],
              });
        }
        function bt() {
          const [n, t] = d.useState(!1);
          return (
            d.useEffect(() => {
              n || (0, vs.U)().then(() => t(!0));
            }, [n]),
            n
          );
        }
        function Ps(n, t) {
          return n === "gifts"
            ? (0, r.we)("#Cart_GiftOptions")
            : t > 0
              ? (0, r.Yp)("#Cart_YourShoppingCartLineItems", t)
              : (0, r.we)("#Cart_YourShoppingCart");
        }
        function js(n) {
          return n === "gifts"
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  "> ",
                  (0, e.jsx)("a", {
                    href: u.TS.STORE_BASE_URL + "cart",
                    children: (0, r.we)("#Cart_YourShoppingCart"),
                  }),
                ],
              })
            : null;
        }
        function Es(n) {
          const t = ys();
          return (0, e.jsx)("div", {
            className: B().BackgroundImage,
            style: t ? { backgroundImage: `url("${t}")` } : null,
          });
        }
        function ys() {
          const n = d.useRef(""),
            t = (0, Q.UI)(),
            { data: s } = (0, R.g7)(),
            i = !n.current;
          let o = ie.sc,
            l = x.c6.Ep;
          if (i && s !== void 0) {
            const m = t.data?.line_items || [],
              f = m.length
                ? m.reduce((p, D) => (p.time_added > D.time_added ? p : D))
                : null;
            (o = f?.bundleid || f?.packageid || ie.sc),
              (l = o === f?.bundleid ? x.c6.xO : x.c6.RD);
          }
          const [c] = (0, K.G6)(o, l, R.xz);
          if (c && i) {
            const m = ee.A.Get(),
              f = c.GetIncludedAppIDs();
            for (const p of f) {
              const D = m.GetApp(p);
              if (!D) continue;
              const M = D.GetAssets().GetPageBackgroundURL();
              if (M) {
                n.current = M;
                break;
              }
            }
          }
          return n.current;
        }
        function Ts() {
          const n = (0, W.zy)();
          return (0, d.useMemo)(
            () =>
              (0, j.VF)(
                new URLSearchParams(n.search).get("gidreplay") ?? void 0,
              ),
            [n.search],
          );
        }
        function Ms(n) {
          const { isCartEmpty: t, cart: s, bCartIncludesGifts: i } = n,
            o = () => (window.location.href = u.TS.STORE_BASE_URL);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !t && (0, e.jsx)(G, { cart: s }),
              (0, e.jsxs)(y.Z, {
                "flow-children": "row",
                className: B().CartFooter,
                children: [
                  (0, e.jsxs)("div", {
                    className: B().NavButtons,
                    children: [
                      (0, e.jsx)(C.$n, {
                        onClick: o,
                        className: B().Button,
                        children: (0, r.we)("#Cart_ContinueShopping"),
                      }),
                      (0, e.jsx)(ps, { bCartIncludesGifts: i }),
                    ],
                  }),
                  !t && (0, e.jsx)(Rs, {}),
                ],
              }),
            ],
          });
        }
        function Rs() {
          const n = (0, S.Z)(),
            t = () => n.mutate();
          return (0, e.jsx)(Ue, {
            onClick: t,
            children: (0, r.we)("#Cart_RemoveAll"),
          });
        }
      },
      34633: (U) => {
        U.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "tVR7nCVynuzImpvF9viMI",
        };
      },
      43047: (U) => {
        U.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      12916: (U) => {
        U.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
          InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
          TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
          TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
          TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
          EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
          EndRound: "jwuNowbLB28M6nkqFkF_C",
          VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
          VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
          EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
          DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
        };
      },
      45803: (U) => {
        U.exports = {
          CartCreatorCtn: "_2HG7VOroS8aHSg-W3fPyTt",
          Title: "_307GrwtjhKkXh5dUC5KjUv",
          Description: "_3YGQuryhG_j0UPSIaC_7ul",
        };
      },
      98972: (U) => {
        U.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_3s8SimT1ZQwPeXXdDFPQLK",
          TradingCardContainer: "_2haWAmlu7TDqdL95bf4G8g",
          EarnedMessage: "_2p5xYmfnLWerjNkmBDfZXp",
          Right: "_18eO4-XadW5jmTpgdATkSz",
          ProgressSection: "_2M_5i3fmNkCv4pCoMmk1Os",
          Progress: "lf5WnbH_ohSVbUnvd3Nf2",
          ProgressRail: "_3TjWhPYAqbU3Hrzm6Iq6il",
          IneligbleList: "_1r6njhPeny9XyTQKt2-__7",
        };
      },
      50169: (U) => {
        U.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "qp08vFwlN2mRCsja6T_-g",
          CartUpsellArea: "_2rkDlHZ2yi-tFtDk4-CC4U",
          CartUpsellTitle: "_2dxsG5kVzdAeX8R0mGOiV8",
          UpsellRow: "_24yiwSg4qoT0NRBSlWoUXw",
          Specials: "_2-sCaPlOkBP6wsNVrDNHvZ",
          Loading: "pUmkjugwizSD0CopYMP1P",
          DailyDeals: "rpifv8i-Dj8KDO5qKGvWG",
          Spotlights: "udcFpqnwSDcMv_byU2oQc",
        };
      },
      50829: (U) => {
        U.exports = {
          CouponPickerRowGlow: "_2ETXQ6ojtTNSbACqQ2o0Yv",
          CouponPickerRow: "_3wfeHGptWCHP2ctMNwtAr8",
          ModifyLink: "_3JmdOP-Eoam3irQDjytJ9V",
          CouponRepresentation: "_1_LYYN59DADLVYtqwZYjSm",
          PackageName: "_3L1DF5dTgbrn6BlQIgv8c-",
          CouponListContainer: "ir0tpMmQQazulD77PH8DZ",
          CouponListItem: "_3pw4q_MAfhjbHBkGJVrYyz",
          Disabled: "_1GFD8zuMK_JuYQUQhOo4zz",
          Image: "_2gY_V_NV2khWDAjW5A9Nmd",
          Info: "_1Je1cc8-t1TZpSr6VwGwbN",
          Discount: "_3KPbt6pUHnz1M3cEORSHvV",
          CouponInfoText: "FicMnlG4nr7BEujcPpbGp",
          Checkbox: "_265qJZDbyz2JxqvT15KpRr",
          Hidden: "_21w270Ne6__P31083H0FFV",
        };
      },
      83934: (U) => {
        U.exports = {
          GiftFormDivider: "_1mAU7zkVivAPGFPI3maedz",
          GiftFormSection: "_1tguxhk732P4gi865oLjSE",
          SignInLink: "_3PPF6YhUS0OHDhePQ8H8GV",
          FormTextLabel: "_1TulC_KnETCU3Ks4Y1hQ70",
          FullWidth: "_1NKGWg4uzU98wSFcgJ4tz1",
          FormTitle: "NYKHMrCLjXgs0HgP8G8ei",
          RedText: "_1Ja8Ra-vrBec1_MVpbvrL",
          GiftNoteInput: "_3wPcWGmcqJzbUXHRTPYsXa",
          GiftRecipientPickerModal: "_3R_gixvbcQCJxxRTmCvpJw",
          GiftFriendsListCtn: "_321Woxp4ONn3k90_NLayE0",
          GiftRecipientPickerFormCtn: "_2SDa5ofHp4X7qHQE540cIS",
          GiftFriendsInput: "_1OuNJQWR-7lSdtgyJf69uF",
          GiftRecipientSaveBtn: "_18bhpboMEhi47IMCRQt-2s",
          GiftPickerFriendBlock: "_3qPIR-iXdtj8oUzr8cH1Ey",
          FriendAvatar: "_1AeyMd0eAcDoRyiR0KkOwC",
          Focused: "_11n414df5ioq8YLpNJuHpM",
          Disabled: "_3jwhGaqW0tVwkzg9eXjJWZ",
          Selected: "_1Wx7OLK94f5EXTrnc8MqUs",
          PersonaName: "_1ki9msaNQoGECm27Yz5YGX",
          FriendsGiftLabel: "_3FPeG6FVHnapQP5UKhrMvC",
          OwnsGame: "YK5pj3LG0Q81ZMKdO9Mcc",
          OnWishlist: "_28yZdTwE0gz4jOV6olyg7F",
          GiftFormRecipient: "_2bnjZDtqxcOZI3eITR0MuL",
          LinkButton: "_12zYFuKO2U-1QfeVxlGfwF",
          GiftDatePicker: "VZsqgN_QGXQcRsD6OgscT",
          ScheduleGiftBtn: "_3gADDjjeuuq4YHM8O1IeiQ",
          GiftScheduleIcon: "_742UkQg_TM_Sdf4w5Ye2a",
          GiftRadioLabel: "_3IlfjNwkM2GwzkZyD0llva",
          GiftRadioRow: "RMDo0KSLaIgeffA12m9Ln",
          GiftSignatureInput: "_3tP7DCVH8b-Vyu5ig2fTAk",
          ScheduleError: "_3y4BqvBTwDLWUl1TCNqWp9",
          LoadingError: "_35a12Zg31sBh2Lj4ClSTRz",
          GamepadTimePickerRow: "_2EZzsNeqqWMVcuzawVZc56",
          TimezoneDisplay: "_1zgxnwJ3wM_SzElTI5DOyw",
          FamilyGiftNotice: "_1B5Eew-T7ehFeKRYrle_-l",
          GiftNonFriendWarning: "_2RHycas9bwPdkNJ4QSaMnr",
          GiftEmailInput: "vsYKgPb-InpQZyJ4AoP2m",
          GiftEmailWarnings: "_37q9WvJ0H38LXVjg2BQI1w",
        };
      },
      11543: (U) => {
        U.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_2w0ZEap3hR1c0K0_DxJDdN",
          ShoppingCartPage: "_22xtsolKcQit92o-LBeRWD",
          CartCheckboxNoMargin: "_1S9a0tZYJv0d4x3-DrxbuS",
          CartPagePlaceholder: "_3Hr6r9HTC7jT51-4vf_X8B",
          ShoppingCartHeader: "bCGAC51za6R_thjPd7_vw",
          ShoppingCartCtn: "_1jqUY_WcPgZnIOE-d9x7wc",
          ShoppingCartLeftCol: "_17GFdSD2pc0BquZk5cejg8",
          ShoppingCartRightCol: "_3HIve50RR17shqpJqmrUps",
          LoadingThrobber: "eDdFpOTz0O9U7xBshZJUx",
          CartRightColStickyCtn: "_1bCdGv5zX6cYDovFfcBfdg",
          CartSummaryCtn: "_2bIzQo07mxubFvscA8RIA8",
          EstimatedTotalFlex: "_2DjadWLFH3keW9rGWZKxSk",
          SummaryMarginBottom: "qV80oahDZsbXiS6lIDLND",
          LicenseContextCtn: "jY9l4aHTdQLHeTWfPonTr",
          LicenseTitle: "p8XFGmprI4snkQjm11Pf2",
          LicenseLink: "_2Wg3oyIvxKKM_o6q7rXdc5",
          ResponsiveShoppingCartSummary: "dpVdC9qAMjdzrN7VWFria",
          RequestPurchaseCtn: "_2jup-7OkSAzTBG-K9r9OCX",
          CartNoteText: "_31DQWsrdb_9oV-vMOaaPqI",
          CartLabelText: "_3ayrhzEm-T_IRhWeQ4HFxr",
          CartValueText: "_2WLaY5TxjBGVyuWe_6KS3N",
          ShoppingCartBreadcrumbs: "_2FKdJT3nRLNX_ue4Zj-qdK",
          CurrentBreadcrumb: "_3TtUDn-J9j6rkwHqjT-i4Y",
          CartFooter: "_1Sdz1qnoKoD9eEPpC340Yj",
          NavButtons: "pp99Du2IR2EJ9UsjKcrRQ",
          Button: "_1rk1xUIAHMcMMDm4jz3MOM",
          CartSummaryBtn: "_1OKOHubCISYxpyNw0_nSgh",
          BetaNotice: "_1DTyDw3G0f4gmhjAvr_MGb",
          Text: "I4Bz94kh1lGOH1KrPzxzk",
          BackgroundImage: "FaiD8bJRAZ-HoNo0VvLOO",
        };
      },
      71460: (U) => {
        U.exports = { UserCountrySelector: "_1G8JdfmCwhonn-pZk-tfwP" };
      },
      44894: (U, J, a) => {
        "use strict";
        a.d(J, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
