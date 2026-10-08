/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [8248],
    {
      94381: (g, C, e) => {
        "use strict";
        e.d(C, { S: () => d });
        var t = e(7850),
          u = e(68031),
          m = e(31857);
        function i(s) {
          return (0, t.jsx)(m.I, {
            ...s,
            viewBox: 16,
            children: (0, t.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var v = e(21895),
          o = e(64238),
          f = e.n(o),
          j = e(80549);
        function d(s) {
          const {
              checked: c,
              onChange: n,
              disabled: r,
              children: p,
              ref: D,
              variant: _,
              color: E,
              align: y = "center",
              icon: O,
              ...I
            } = s,
            B = c === "indeterminate",
            R = O ?? (B ? l : i),
            P = () => {
              r || (n && n(B ? !0 : !c));
            },
            a = (L) => {
              r ||
                (L.key === " " &&
                  (P(), L.preventDefault(), L.stopPropagation()));
            },
            T = (0, j.f)("Checkbox", _);
          return (0, t.jsxs)(u.s, {
            align: y,
            ref: D,
            role: "checkbox",
            "aria-checked": B ? "mixed" : c,
            "data-state": h(c),
            className: f()(v.Root, v[`Variant-${T}`], r && v.Disabled),
            onClick: P,
            tabIndex: 0,
            onKeyDown: a,
            cursor: "default",
            "aria-disabled": r,
            "data-accent-color": E,
            ...I,
            children: [
              (0, t.jsx)("div", {
                className: v.Checkbox,
                children: c && (0, t.jsx)(R, { className: v.Icon }),
              }),
              p,
            ],
          });
        }
        function h(s) {
          return s === "indeterminate" ? s : s ? "checked" : "unchecked";
        }
        function l(s) {
          return (0, t.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      86946: (g, C, e) => {
        "use strict";
        e.d(C, { j: () => h, w: () => l });
        var t = e(7850),
          u = e(64238),
          m = e.n(u),
          i = e(38878),
          v = e.n(i),
          o = e(60351),
          f = e(68031),
          j = e(8928),
          d = e(69289);
        function h(s) {
          const {
              children: c,
              beforeContent: n,
              afterContent: r,
              hasValue: p,
              ...D
            } = s,
            _ = l(D);
          return (0, t.jsxs)(f.s, {
            ..._,
            align: "center",
            "data-has-value": !!p,
            minWidth: "0",
            children: [
              n && (0, t.jsx)(f.s, { paddingRight: "2", children: n }),
              (0, t.jsx)(o.az, { flexGrow: "1", minWidth: "0", children: c }),
              r && (0, t.jsx)(f.s, { paddingLeft: "2", children: r }),
            ],
          });
        }
        function l(s) {
          const {
              variant: c = "basic",
              size: n = "2",
              radius: r,
              focusable: p = !0,
              hoverable: D = !0,
              clickable: _ = !0,
              disabled: E,
              className: y,
              status: O,
              ...I
            } = s,
            B = c === "underline" ? "none" : r;
          return (0, d.mz)(
            {
              ...I,
              radius: B,
              "data-status": O,
              className: m()(
                i.ControlBox,
                p && !E && i.Focusable,
                D && !E && i.Hoverable,
                _ && !E && i.Clickable,
                E && i.Disabled,
                i[`Variant-${c}`],
                i[`Size-${n}`],
                y,
              ),
            },
            j.h,
          );
        }
      },
      31857: (g, C, e) => {
        "use strict";
        e.d(C, { I: () => o });
        var t = e(7850),
          u = e(69289),
          m = e(8928),
          i = e(16619),
          v = e.n(i);
        function o(l) {
          return (0, t.jsx)("svg", { ...d(l) });
        }
        const f = [
          ...m.L,
          {
            prop: "size",
            responsive: !0,
            className: (l) => i[`IconSize-${l}`],
          },
          {
            prop: "color",
            className: i.Color,
            cssProperty: (l) => ["--icon-color", j(l)],
          },
          {
            prop: "hitSlop",
            className: i.HitSlop,
            cssProperty: (l) => [
              "--hit-slop-custom",
              typeof l == "string" ? l : "",
            ],
          },
          m.h.find(({ prop: l }) => l === "cursor"),
        ];
        function j(l) {
          return !l || l[0] === "#" ? l : (0, u.w7)(l);
        }
        function d(l) {
          const { viewBox: s, ...c } = l,
            r = { className: c.size ? void 0 : i.IconSizeDefault, ...c };
          return s && (r.viewBox = h(s)), (0, u.mz)(r, f);
        }
        function h(l) {
          if (l)
            return typeof l == "number"
              ? `0 0 ${l} ${l}`
              : typeof l == "string"
                ? l
                : `0 0 ${l.width} ${l.height}`;
        }
      },
      76854: (g, C, e) => {
        "use strict";
        e.d(C, { Q: () => m });
        var t = e(90626);
        function u(i, v, o) {
          return typeof i == "function" ? i(v, o) : t.cloneElement(i, v);
        }
        function m(i, v, o, f) {
          return u(i || v, o, f);
        }
      },
      15252: (g, C, e) => {
        "use strict";
        e.d(C, { Ae: () => l, EY: () => d, U6: () => h });
        var t = e(7850),
          u = e(1039),
          m = e(69289),
          i = e(8928),
          v = e(64238),
          o = e.n(v),
          f = e(65274),
          j = e.n(f);
        function d(s) {
          const { as: c = "span", ref: n, className: r, ...p } = s,
            D = c;
          return (0, t.jsx)(D, {
            ref: n,
            ...(0, m.mz)({ ...p, className: o()(f.Text, r) }, l),
          });
        }
        const h = [
            {
              prop: "weight",
              responsive: !0,
              className: f.TextWeight,
              cssProperty: (s) => ["--text-weight", `var(--font-weight-${s})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: f.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (s, c, n) => [
                "--text-color",
                (0, m.To)(s, (0, u.I)(c.contrast, n) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (s, c, n) => [
                "--text-color",
                (0, m.To)((0, u.I)(c.color, n) ?? "text-body", s),
              ],
            },
            { prop: "truncate", className: f.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: f.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: f.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          l = [
            ...h,
            ...i.L,
            {
              prop: "size",
              responsive: !0,
              className: (s) => f[`TextSize-${s}`],
            },
          ];
      },
      86336: (g, C, e) => {
        "use strict";
        e.d(C, { W: () => l, Y: () => d });
        var t = e(7850),
          u = e(50122),
          m = e.n(u),
          i = e(15252),
          v = e(69289),
          o = e(24660),
          f = e(70182),
          j = e(3166);
        function d(s) {
          const { underline: c = "auto", focusable: n, navProps: r, ...p } = s,
            D = (0, j.Qn)(),
            _ = n ?? r?.focusable ?? !!p.href,
            E = (0, v.mz)({ ...p, underline: c, className: u.TextLink }, h);
          return D && (_ || r)
            ? (0, t.jsx)(o.Ii, { ...E, ...(r || {}), focusable: _ })
            : (0, t.jsx)("a", { ...E });
        }
        const h = [
          ...i.Ae,
          { prop: "underline", className: (s) => u[`Underline-${s}`] },
        ];
        function l(s) {
          const { underline: c = "auto", focusable: n, navProps: r, ...p } = s,
            D = (0, j.Qn)(),
            _ = n ?? r?.focusable ?? !!p.onClick,
            E = (0, t.jsx)("span", {
              role: "button",
              ...(0, v.mz)(
                { ...p, underline: c, className: u.TextLinkButton },
                h,
              ),
            });
          return D && (_ || r)
            ? (0, t.jsx)(f.J, { ...(r || {}), focusable: _, children: E })
            : E;
        }
      },
      15860: (g, C, e) => {
        "use strict";
        e.d(C, { L: () => o, c: () => v });
        var t = e(27386),
          u = e(76617),
          m = e(58632),
          i = e.n(m);
        function v(f, j) {
          return new (i())(
            async (d) => {
              const h = [...d],
                l = await t.xtC.GetPlayerLinkDetails(f, { steamids: h }),
                s = new Map();
              return (
                l
                  .Body()
                  .accounts()
                  .forEach((c) => {
                    const n = c.toObject();
                    s.set(n.public_data.steamid, n);
                  }),
                h.map((c) => s.get(c) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...j },
          );
        }
        function o(f) {
          return (0, u.V)("PlayerLinkDetails", () => v(f));
        }
      },
      85978: (g, C, e) => {
        "use strict";
        e.d(C, { jn: () => h });
        var t = e(72609),
          u = e(68312),
          m = e(20117),
          i = e(80902),
          v = e(15860);
        const o = 1;
        function f(s) {
          return (
            delete s?.private_data?.account_name,
            delete s?.public_data?.account_flags,
            delete s?.public_data?.ban_expires_time,
            delete s?.public_data?.privacy_state,
            s?.public_data?.profile_state !== o && delete s?.private_data,
            s
          );
        }
        function j(s) {
          return ["PlayerLinkDetails", s];
        }
        function d(s, c) {
          const n =
            typeof c == "number"
              ? m.b2.InitFromAccountID(c, t.TS.EUNIVERSE).ConvertTo64BitString()
              : c;
          return {
            queryKey: j(n),
            queryFn: async () => {
              if (n) {
                const r = await s.load(n);
                return f(r);
              }
              return null;
            },
            enabled: !!n,
          };
        }
        function h(s) {
          const c = (0, u.KV)(),
            n = (0, v.L)(c);
          return (0, i.I)(d(n, s));
        }
        function l(s, c) {
          c.forEach((n) => {
            n?.public_data?.steamid &&
              s.setQueryData(j(n.public_data.steamid), n);
          });
        }
      },
      45826: (g, C, e) => {
        "use strict";
        e.d(C, { m: () => v });
        var t = e(7850),
          u = e(24660),
          m = e(72609),
          i = e(32093);
        function v(o) {
          const { href: f, children: j, bAllowFocuseableAnchor: d, ...h } = o;
          return m.TS.EREALM === i.TU.k_ESteamRealmChina
            ? (0, t.jsx)("div", { ...h, children: j })
            : d
              ? (0, t.jsx)(u.Ii, { href: f, ...h, children: j })
              : (0, t.jsx)("a", { href: f, ...h, children: j });
        }
      },
      47610: (g, C, e) => {
        "use strict";
        e.d(C, { oo: () => s, Zi: () => r, DR: () => l, Mk: () => c });
        var t = e(68312),
          u = e(76617),
          m = e(80902),
          i = e(54806),
          v = e(58632),
          o = e.n(v),
          f = e(35038),
          j = e(78192),
          d = e(84192);
        async function h(_, E) {
          const y = f.w.Init(j.eW);
          y.Body().set_context((0, d.hS)(!1)),
            E.forEach((I) => y.Body().add_packageid(I));
          const O = await j.$4.GetHardwareItems(_, y);
          return O.BSuccess()
            ? O.Body()
                .details()
                .map((I) => I.toObject())
            : (console.error(
                `GetHardareDetails failed on packages: ${E.join(",")}`,
              ),
              null);
        }
        function l(_) {
          const E = (0, t.KV)(),
            y = p(E);
          return (0, m.I)(n(y, _));
        }
        var s = ((_) => (
          (_[(_.k_Loading = 0)] = "k_Loading"),
          (_[(_.k_LoadSuccess = 1)] = "k_LoadSuccess"),
          (_[(_.k_LoadFailure = 2)] = "k_LoadFailure"),
          _
        ))(s || {});
        function c(_) {
          const E = (0, t.KV)(),
            y = p(E),
            O = (0, i.E)({
              queries: _.map((a) => ({ ...n(y, a), enabled: _.length > 0 })),
            }),
            I = O.some((a) => a.isLoading),
            B = O.some((a) => a.isError || a.data === null);
          let R,
            P = 0;
          return (
            B
              ? ((R = null), (P = 2))
              : I
                ? ((R = void 0), (P = 0))
                : ((R = O.map((a) => a.data)), (P = 1)),
            { rgHardwareDetails: R, eHardwareLoadingState: P }
          );
        }
        function n(_, E) {
          return {
            queryKey: r(E),
            queryFn: async () => _.load(E),
            enabled: !!E,
          };
        }
        function r(_) {
          return ["hardwaredetail", _];
        }
        function p(_) {
          return (0, u.V)("HardwareDetailLoader", () => D(_));
        }
        function D(_) {
          return new (o())(async (E) => {
            const y = await h(_, E),
              O = new Map();
            return (
              y &&
                y.forEach((I) => {
                  I.packageid && O.set(I.packageid, I);
                }),
              E.map((I) => O.get(I) || null)
            );
          });
        }
      },
      57646: (g, C, e) => {
        "use strict";
        e.d(C, { _w: () => d, eF: () => l, hJ: () => c, kb: () => h });
        var t = e(7850),
          u = e(40358),
          m = e(36118),
          i = e(36707),
          v = e(18126),
          o = e.n(v),
          f = ((n) => (
            (n.k_eBlock = "block"),
            (n.k_eFinal = "final"),
            (n.k_eOriginal = "original"),
            (n.k_eReservation = "reservation"),
            n
          ))(f || {});
        const j = Object.values(f);
        function d(n) {
          return j.find((r) => r === n);
        }
        function h(n) {
          switch (n.display_style) {
            case "final":
              return n.formatted_final_price
                ? (0, t.jsx)("span", { children: n.formatted_final_price })
                : null;
            case "original": {
              const _ = n.formatted_orig_price || n.formatted_final_price;
              return _ ? (0, t.jsx)("span", { children: _ }) : null;
            }
            default:
          }
          const r = n.display_style == "reservation",
            p = n.bHideDiscountPercentForCompliance,
            D = n.className == "bbcode_price";
          return (0, t.jsxs)("span", {
            className: (0, i.A)({
              [o().StoreSalePriceWidget]: !0,
              [n.className ?? ""]: !!n.className,
              [o().StoreSaleReservationPrice]: r,
            }),
            children: [
              !!(n.discount_percent && !p) &&
                (0, t.jsx)("span", {
                  className: (0, i.A)(
                    o().StoreSaleDiscountBox,
                    "StoreSaleDiscountBox",
                    n.bDiscountFromCoupon && o().FromCoupon,
                  ),
                  children: `-${n.discount_percent}%`,
                }),
              !!(n.discount_percent && p) &&
                (0, t.jsx)("div", {
                  className: (0, i.A)({
                    [o().DiscountIconCtn]: !0,
                    bbcode_price_discount: D,
                  }),
                  children: (0, t.jsx)(m.XH_, {}),
                }),
              !!n.formatted_final_price &&
                (n.discount_percent && n.formatted_orig_price
                  ? (0, t.jsxs)("div", {
                      className: (0, i.A)({
                        [o().StoreSaleDiscountedPriceCtn]: !0,
                        bbcode_price_ctn: D,
                      }),
                      children: [
                        (0, t.jsx)("div", {
                          className: (0, i.A)({
                            [o().StoreOriginalPrice]: !0,
                            StoreOriginalPrice: !0,
                            bbcode_price_orig: D,
                          }),
                          children: n.formatted_orig_price,
                        }),
                        (0, t.jsx)("div", {
                          className: (0, i.A)({
                            [o().StoreSalePriceBox]: !0,
                            bbcode_price_box: D,
                            [o().StoreSaleReservationPriceBox]: r,
                            bbcode_price_final: D,
                          }),
                          children: n.formatted_final_price,
                        }),
                      ],
                    })
                  : (0, t.jsx)("div", {
                      className: (0, i.A)({
                        [o().StoreSalePriceBox]: !0,
                        bbcode_price_box: D,
                        [o().StoreSaleReservationPriceBox]: r,
                        bbcode_price_final: D,
                      }),
                      children: n.formatted_final_price,
                    })),
            ],
          });
        }
        function l(n) {
          const { data: r } = (0, u.Q_)({ packageid: n.packageID });
          return r
            ? (0, t.jsx)(h, {
                formatted_final_price: r.formatted_final_price,
                formatted_orig_price: r.formatted_original_price,
                discount_percent: r.discount_pct,
                bHideDiscountPercentForCompliance:
                  r.hide_discount_pct_for_compliance,
                display_style: n.display_style,
                className: "bbcode_price",
              })
            : null;
        }
        function s(n, r) {
          return !n?.final_price_in_cents || !r?.final_price_in_cents
            ? void 0
            : (
                100 *
                (1 -
                  Number.parseInt(n.final_price_in_cents) /
                    Number.parseInt(r.final_price_in_cents))
              ).toFixed(0) + "%";
        }
        function c(n) {
          const { data: r } = (0, u.Q_)({ packageid: n.packageID }),
            { data: p } = (0, u.Q_)({ packageid: n.compareID }),
            D = s(r, p);
          return D === void 0
            ? null
            : (0, t.jsx)("span", {
                className: o().StorePriceSavings,
                children: D,
              });
        }
      },
      76617: (g, C, e) => {
        "use strict";
        e.d(C, { V: () => j });
        function t(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        }
        function u(d) {
          if (!t(d)) return !1;
          const h = d.constructor;
          if (typeof h > "u") return !0;
          const l = h.prototype;
          return !(
            !t(l) || !Object.prototype.hasOwnProperty.call(l, "isPrototypeOf")
          );
        }
        function m(...d) {
          return JSON.stringify(d, (h, l) => {
            if (u(l)) {
              const s = {};
              return (
                Object.keys(l)
                  .sort()
                  .forEach((c) => {
                    s[c] = l[c];
                  }),
                s
              );
            }
            return l;
          });
        }
        var i = e(90626),
          v = e(7850);
        const o = (0, i.createContext)({ instances: {}, factories: {} });
        function f(d) {
          const { name: h, fnFactory: l, children: s } = d,
            c = React.useContext(o),
            [n] = useState({}),
            r = useMemo(
              () => ({
                instances: n,
                factories: { ...c.factories, [h]: l },
                parent: c,
              }),
              [n, h, c],
            );
          return jsx(o.Provider, { value: r, children: s });
        }
        function j(d, h) {
          const l = (0, i.useContext)(o),
            s = typeof d == "string" ? d : m(...d);
          let c = l;
          for (; c; ) {
            if (s in c.instances) return c.instances[s];
            if (s in c.factories) break;
            c = c.parent;
          }
          const r = (c?.factories[s] ?? h)();
          return ((c ?? l).instances[s] = r), r;
        }
      },
      7582: (g, C, e) => {
        "use strict";
        e.d(C, { HD: () => j, f1: () => n, s4: () => r, sB: () => c });
        var t = e(19367),
          u = e.n(t),
          m = e(90626),
          i = e(59432),
          v = e(47689),
          o = e(77291);
        class f {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, i.mm)();
          }
          set nOverrideDateNow(D) {
            (0, i.ai)(D);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, i.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, i.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, i.mm)();
          }
          ParseDevOverrides(D) {
            if (!D || D.length == 0) return;
            new URLSearchParams(D[0] == "?" ? D.substring(1) : D).has("t");
          }
        }
        const j = new f();
        (0, o.V)("g_EventCalendarDevFeatures", j);
        function d(p = 1) {
          const [D, _] = React.useState(() => s()),
            E = useCancelTokenSource("useTimeNowWithOverride"),
            y = React.useCallback(() => {
              E.token.reason || _(s());
            }, []);
          return (
            React.useEffect(() => {
              const O = 1e3 * p,
                I = Date.now() % O,
                B = O - I,
                R = window.setTimeout(y, B);
              return () => {
                window.clearTimeout(R);
              };
            }, [D, p, y]),
            D
          );
        }
        const l = Math.floor(new Date().getTime() / 1e3);
        function s() {
          const p = Math.floor(Date.now() / 1e3);
          return j.nOverrideDateNow ? j.nOverrideDateNow + (p - l) : p;
        }
        function c() {
          return j.nOverrideDateNow ?? l;
        }
        function n() {
          return m.useMemo(() => c(), []);
        }
        function r() {
          return m.useMemo(() => j.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      19681: (g, C, e) => {
        "use strict";
        e.d(C, { l: () => u });
        var t = e(98609);
        function u(m, i) {
          if (!(!m?.asset_url_format || typeof m[i] != "string"))
            return (
              t.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              m.asset_url_format.replace("${FILENAME}", m[i])
            );
        }
      },
      2668: (g, C, e) => {
        "use strict";
        e.d(C, { Li: () => E, ue: () => O });
        var t = e(7850),
          u = e(19298),
          m = e(10349),
          i = e(19681),
          v = e(76532),
          o = e.n(v),
          f = e(23627),
          j = e(95995),
          d = e(36118),
          h = e(72865),
          l = e(53107),
          s = e(36707),
          c = e(18210),
          n = e(98609),
          r = e(18714),
          p = e.n(r),
          D = e(40358),
          _ = e(68094);
        function E(P) {
          const { spotlight: a } = P,
            T = (0, h.aL)(a.url, "spotlight");
          return (0, t.jsx)(j.A, {
            appID: a.item?.type == "app" ? a.item.id : void 0,
            feature: "spotlight",
            children: (0, t.jsxs)(u.Z, {
              className: r.SpotlightCtn,
              onOKButton: () => {
                window.location.href = T;
              },
              children: [
                (0, t.jsxs)("div", {
                  className: r.SpotlightImageCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, s.A)(
                        v.CapsuleDecorators,
                        r.CapsuleDecorators,
                      ),
                      children: a.has_live_broadcast && (0, t.jsx)(f.K, {}),
                    }),
                    a.open_in_new_window
                      ? (0, t.jsx)(l.uU, {
                          href: T,
                          children: (0, t.jsx)("img", {
                            src: a.image_url,
                            alt: a.title,
                          }),
                        })
                      : (0, t.jsx)("a", {
                          href: T,
                          children: (0, t.jsx)("img", {
                            src: a.image_url,
                            alt: a.title,
                          }),
                        }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: r.SpotlightTextCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: r.SpotlightTitle,
                      children: a.title,
                    }),
                    (0, t.jsx)("div", {
                      className: r.SpotlightBody,
                      children: a.body,
                    }),
                    (0, t.jsx)("div", {
                      className: r.BottomBarPriceInfo,
                      children: (0, t.jsx)(B, {
                        discountBlock: a.discount_block,
                        bIsSalePage: a.is_sale_page,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function y(P) {
          const { spotlight: a } = P,
            T = a.associated_item,
            L = {
              is_weeklong_deals: a.spotlight_template == "weeklong_deals",
              url: a.spotlight_link_url,
              image_url: Config.MEDIA_CDN_URL + a.asset_url,
              title: a.spotlight_title,
              body: a.spotlight_body,
              ...R(T),
            };
          if (
            (!L.url && T && (L.url = Config.STORE_BASE_URL + T.store_url_path),
            a.spotlight_body?.indexOf("%1$s") !== -1)
          ) {
            let z;
            T?.best_purchase_option?.active_discounts?.length
              ? (z = new Date(
                  T.best_purchase_option.active_discounts[0].discount_end_date *
                    1e3,
                ))
              : a.end_date && (z = new Date(a.end_date * 1e3)),
              z &&
                (L.body = a.spotlight_body?.replace(
                  "%1$s",
                  z.toLocaleTimeString(
                    LocalizationManager.GetPreferredLocales(),
                    {
                      hour: "numeric",
                      minute: "2-digit",
                      month: "short",
                      day: "numeric",
                    },
                  ),
                ));
          }
          return jsx(E, { spotlight: L });
        }
        function O(P) {
          const { dailyDeal: a } = P,
            T = (0, h.aL)(a.target, "daily-deal"),
            L = (0, m.SW)(a.item?.type ?? "application"),
            z = (0, D.J$)((0, _.Jz)({ item_type: L, id: a.item?.id }));
          return (0, t.jsx)(j.A, {
            appID: a.item?.type == "app" ? a.item.id : void 0,
            feature: "daily-deal",
            children: (0, t.jsxs)(u.Z, {
              className: r.DailyDealCtn,
              onOKButton: () => {
                window.location.href = T;
              },
              children: [
                (0, t.jsx)("div", {
                  className: r.DailyDealImageCtn,
                  children: (0, t.jsx)("a", {
                    href: T,
                    children: (0, t.jsx)("img", {
                      src: a.image,
                      alt: z.data?.name,
                    }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: r.DailyDealTextCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: r.DailyDealDesc,
                      children: a.desc,
                    }),
                    (0, t.jsx)(B, {
                      discountBlock: a.discount_block,
                      bIsSalePage: a.is_sale_page,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function I(P) {
          const {
              dailyDeal: { item: a },
            } = P,
            T = {
              end_date:
                a?.best_purchase_option?.active_discounts?.[0]
                  ?.discount_end_date,
              target: Config.STORE_BASE_URL + a?.store_url_path,
              image: BuildStoreAssetURL(a?.assets, "header"),
              ...R(a),
            };
          return jsx(O, { dailyDeal: T });
        }
        const B = (P) => {
          const { discountBlock: a, bIsSalePage: T } = P;
          if (!a) return null;
          const L = a.hide_discount_percent_for_compliance;
          return T
            ? a.discount_max == null || a.discount_max <= 0
              ? null
              : a.discount_min == null || a.discount_min <= 0
                ? (0, t.jsx)("div", {
                    className: (0, s.A)(
                      o().StoreSalePriceWidgetContainer,
                      o().Discounted,
                    ),
                    children: (0, t.jsxs)("div", {
                      className: o().StoreSaleDiscountBox,
                      children: ["Up to -", a.discount_max, "%"],
                    }),
                  })
                : L
                  ? (0, t.jsx)("div", {
                      className: o().DiscountIconCtn,
                      children: (0, t.jsx)(d.XH_, {}),
                    })
                  : (0, t.jsx)("div", {
                      className: (0, s.A)(
                        o().StoreSalePriceWidgetContainer,
                        o().Discounted,
                      ),
                      children:
                        a.discount_min === a.discount_max
                          ? (0, t.jsxs)("div", {
                              className: o().StoreSaleDiscountBox,
                              children: [a.discount_min, "%"],
                            })
                          : (0, t.jsxs)("div", {
                              className: o().StoreSaleDiscountBox,
                              children: [
                                a.discount_min,
                                " - ",
                                a.discount_max,
                                "%",
                              ],
                            }),
                    })
            : a.final_price == null || a.final_price === ""
              ? null
              : a.bundle_discount != null && a.bundle_discount > 0 && !L
                ? (0, t.jsx)("div", {
                    className: r.DiscountBlock,
                    children: (0, t.jsxs)("div", {
                      className: r.DiscountPercent,
                      children: ["-", a.bundle_discount, "%"],
                    }),
                  })
                : a.discount_percent != null && a.discount_percent > 0
                  ? L
                    ? (0, t.jsxs)("div", {
                        className: (0, s.A)(
                          o().StoreSalePriceWidgetContainer,
                          o().Discounted,
                        ),
                        children: [
                          (0, t.jsx)("div", {
                            className: o().DiscountIconCtn,
                            children: (0, t.jsx)(d.XH_, {}),
                          }),
                          (0, t.jsx)("div", {
                            className: o().StoreSaleDiscountedPriceCtn,
                            children: (0, t.jsx)("div", {
                              className: o().StoreSalePriceBox,
                              children: a.final_price,
                            }),
                          }),
                        ],
                      })
                    : (0, t.jsxs)("div", {
                        className: (0, s.A)(
                          o().StoreSalePriceWidgetContainer,
                          o().Discounted,
                        ),
                        children: [
                          (0, t.jsxs)("div", {
                            className: o().StoreSaleDiscountBox,
                            children: [a.discount_percent, "%"],
                          }),
                          (0, t.jsxs)("div", {
                            className: o().StoreSaleDiscountedPriceCtn,
                            children: [
                              (0, t.jsx)("div", {
                                className: o().StoreOriginalPrice,
                                children: a.orig_price,
                              }),
                              (0, t.jsx)("div", {
                                className: o().StoreSalePriceBox,
                                children: a.final_price,
                              }),
                            ],
                          }),
                        ],
                      })
                  : (0, t.jsx)("div", {
                      className: (0, s.A)(o().StoreSalePriceWidgetContainer),
                      children: (0, t.jsx)("div", {
                        className: o().StoreSaleDiscountedPriceCtn,
                        children: (0, t.jsx)("div", {
                          className: o().StoreSalePriceBox,
                          children: a.final_price,
                        }),
                      }),
                    });
        };
        function R(P) {
          return P
            ? {
                item: {
                  type: ConvertEStoreItemTypeToString(P.item_type),
                  id: P.id,
                },
                discount_block: {
                  orig_price: P.best_purchase_option?.formatted_original_price,
                  final_price: P.best_purchase_option?.formatted_final_price,
                  discount_percent: P.best_purchase_option?.discount_pct,
                  hide_discount_percent_for_compliance:
                    P.best_purchase_option?.hide_discount_pct_for_compliance,
                },
              }
            : {};
        }
      },
      13784: (g, C, e) => {
        "use strict";
        e.d(C, { hA: () => H, LG: () => Y });
        var t = e(7850),
          u = e(10985),
          m = e(24660),
          i = e(79083),
          v = e(40358),
          o = e(29522),
          f = e(90626),
          j = e(99371),
          d = e.n(j),
          h = e(19298),
          l = e(95695),
          s = e.n(l),
          c = e(51079),
          n = e(45826),
          r = e(36707),
          p = e(18210),
          D = e(19730),
          _ = e(53113);
        function E(M) {
          const {
            strURL: x,
            strName: A,
            strAvatarURL: S,
            nFollowers: N,
            strCreatorType: U,
            strTagLine: W,
            strMemberListURL: K,
            followButton: b,
            bSmallFormat: F,
            bMinimalDisplay: k,
          } = M;
          return (0, t.jsx)(c.Ay, {
            feature: "salecreatorhome",
            children: (0, t.jsxs)(h.Z, {
              className: (0, r.A)(
                d().DevSummaryCtn,
                F ? d().SmallFormat : d().LargeFormat,
                k ? d().MinimalDisplay : "",
              ),
              "flow-children": "row",
              children: [
                !!U &&
                  (0, t.jsx)("span", { className: d().Title, children: U }),
                (0, t.jsxs)("div", {
                  className: d().DevSummaryWidgetCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: d().DevSummaryBackground,
                      style: { backgroundImage: `url(${S} )` },
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, r.A)(d().DevSummaryContent),
                      children: [
                        (0, t.jsxs)("div", {
                          className: s().FlexRowContainer,
                          children: [
                            (0, t.jsx)(n.m, {
                              href: (0, _.k2)(x),
                              className: d().AvatarLink,
                              bAllowFocuseableAnchor: !0,
                              children: (0, t.jsx)("img", {
                                className: (0, r.A)(d().Avatar, "Avatar_Trgt"),
                                src: S,
                                alt: "",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: (0, r.A)(
                                s().FlexColumnContainer,
                                d().CreatorDescCtn,
                              ),
                              children: [
                                (0, t.jsxs)("div", {
                                  className: (0, r.A)(
                                    d().CreatorTitleCtn,
                                    s().FlexColumnContainer,
                                  ),
                                  children: [
                                    (0, t.jsx)(n.m, {
                                      href: (0, _.k2)(x),
                                      className: d().CreatorNameName,
                                      children: A,
                                    }),
                                    !!W &&
                                      (0, t.jsx)("div", {
                                        className: (0, r.A)(
                                          s().FlexColumnContainer,
                                          d().CreatorTagline,
                                        ),
                                        children: W,
                                      }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: (0, r.A)({
                                    [s().FlexColumnContainer]: F,
                                    [s().FlexRowContainer]: !F,
                                    [d().SocialFollowersCtn]: !0,
                                  }),
                                  children: (0, t.jsxs)("div", {
                                    className: (0, r.A)(d().FollowBtnCtn),
                                    children: [
                                      b,
                                      (0, t.jsxs)("div", {
                                        className: (0, r.A)({
                                          [d().Followers]: !0,
                                        }),
                                        children: [
                                          (0, t.jsx)("span", {
                                            children: (0, p.we)(
                                              "#CreatorHome_JustFollowers",
                                            ),
                                          }),
                                          (0, t.jsx)("span", {
                                            className: d().FollowerCount,
                                            children: (0, D.Dq)(N),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !!K &&
                          (0, t.jsx)("a", {
                            href: K,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: d().MembersListLink,
                            children: (0, p.we)("#ClanMembershipList"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var y = e(72147),
          O = e(85599),
          I = e(29780),
          B = e.n(I);
        function R(M) {
          const { data: x, isPending: A } = (0, v.wl)(
            M ? { appid: M } : void 0,
          );
          return f.useMemo(() => {
            if (!M) return [];
            if (!x) return A ? void 0 : [];
            const S = [],
              N = new Set(),
              U = [
                ["developer", (0, o.Qm)(x.developers)],
                ["publisher", (0, o.Qm)(x.publishers)],
                ["franchise", (0, o.Qm)(x.franchises)],
              ];
            for (const [W, K] of U)
              for (const b of K)
                N.has(b) ||
                  (N.add(b),
                  S.push({ appid: M, name: "", clan_account_id: b, type: W }));
            return S;
          }, [M, x, A]);
        }
        function P(M) {
          const { rgCreators: x, renderCreator: A } = M,
            [S, N] = f.useState(0);
          if (!x.length) return null;
          if (x.length == 1)
            return (0, t.jsx)(t.Fragment, { children: A(x[0]) });
          const U = S % x.length;
          return (0, t.jsxs)("div", {
            className: B().CreatorCarouselCtn,
            children: [
              A(x[U]),
              (0, t.jsx)("div", {
                className: B().CreatorCarouselCrumbs,
                children: x.map((W, K) =>
                  (0, t.jsx)(
                    m.ml,
                    {
                      className: B().CreatorCarouselCrumb,
                      onClick: () => N(K),
                      "aria-label": L(W.type),
                      children: (0, t.jsx)(i.U, { bIsActive: K == U }),
                    },
                    W.clan_account_id,
                  ),
                ),
              }),
            ],
          });
        }
        function a(M) {
          const { creatorID: x, bSmallFormat: A } = M,
            { data: S } = (0, u.A5)(x.clan_account_id);
          return S
            ? (0, t.jsx)(E, {
                strURL: (0, u.LO)(S, x.type),
                strName: S.name ?? "",
                strAvatarURL: S.avatar_url_full_size ?? "",
                nFollowers: S.followers ?? 0,
                strCreatorType: L(x.type),
                followButton: (0, t.jsx)(y.of, {
                  clanAccountID: x.clan_account_id,
                  followType: "creatorhome",
                }),
                bSmallFormat: A,
              })
            : null;
        }
        function T(M) {
          const { appid: x, bSmallFormat: A, renderCreator: S } = M,
            N = R(x);
          return N
            ? (0, t.jsx)(P, {
                rgCreators: N,
                renderCreator:
                  S ??
                  ((U) => (0, t.jsx)(a, { creatorID: U, bSmallFormat: A })),
              })
            : (0, t.jsx)("div", {
                className: d().DevSummaryWidgetCtn,
                children: (0, t.jsx)(O.t, {}),
              });
        }
        function L(M) {
          switch (M) {
            case "publisher":
              return (0, p.we)("#CreatorHome_PublishedBy");
            case "franchise":
              return (0, p.we)("#CreatorHome_InFranchise");
          }
          return (0, p.we)("#CreatorHome_DevelopedBy");
        }
        var z = e(60480),
          G = e(19619),
          V = e(3166),
          w = e(25792);
        function H(M) {
          const {
              creatorID: x,
              bShowTagline: A,
              bHideCreatorType: S,
              bSmallFormat: N,
              bHideFollowButton: U,
              bAddLinkToMemberList: W,
              bMinimalDisplay: K,
            } = M,
            { creatorHome: b, isFetching: F } = (0, z.FV)(x.clan_account_id),
            [k] = (0, G.L2)();
          return k || (!b && F)
            ? (0, t.jsx)("div", {
                className: d().DevSummaryWidgetCtn,
                children: (0, t.jsx)(O.t, {
                  string: (0, p.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              })
            : b
              ? (0, t.jsx)(w.tH, {
                  children: (0, t.jsx)(E, {
                    strURL: b.GetCreatorHomeURL(x.type),
                    strName: b.GetName(),
                    strAvatarURL: b.GetAvatarURLFullSize(),
                    nFollowers: b.GetNumFollowers(),
                    strCreatorType: S ? void 0 : L(x.type),
                    strTagLine: A ? b.GetTagLine() : void 0,
                    strMemberListURL: W
                      ? V.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        b.GetClanSteamID().ConvertTo64BitString() +
                        "/members/"
                      : void 0,
                    followButton: U
                      ? void 0
                      : (0, t.jsx)(y.of, {
                          clanAccountID: x.clan_account_id,
                          creatorID: x,
                        }),
                    bSmallFormat: N,
                    bMinimalDisplay: K,
                  }),
                })
              : null;
        }
        function Y(M) {
          const { appid: x, bSmallFormat: A } = M;
          return (0, t.jsx)(w.tH, {
            children: (0, t.jsx)(T, {
              appid: x,
              bSmallFormat: A,
              renderCreator: (S) =>
                (0, t.jsx)(H, { creatorID: S, bSmallFormat: A }),
            }),
          });
        }
        function Z(M) {
          const { clanInfo: x, bAddLinkToMemberList: A } = M;
          if (
            (AssertMsg(
              x && x.clanAccountID,
              "CuratorHoverContent expect clanInfo, not supplied",
            ),
            !x)
          )
            return null;
          const S = {
            clan_account_id: x.clanAccountID,
            name: x.group_name,
            type: "developer",
          };
          return jsx("div", {
            className: creatorstyle.CuratorHoverCtn,
            children: jsx(H, {
              creatorID: S,
              bSmallFormat: !0,
              bShowTagline: !0,
              bHideCreatorType: !0,
              bAddLinkToMemberList: A,
            }),
          });
        }
      },
      69736: (g, C, e) => {
        "use strict";
        e.d(C, { x: () => u });
        var t = e(18210);
        function u(m) {
          return (0, t.we)(
            "#Hardware_ShippingEstimate_Range",
            m.estimated_delivery_soonest_business_days ?? 0,
            m.estimated_delivery_latest_business_days ?? 0,
          );
        }
      },
      21895: (g) => {
        g.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      38878: (g) => {
        g.exports = {
          "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
          "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
          "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
          "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
          Focusable: "_1cd-wdIp5lIWsydAxII-vY",
          "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
          "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
          "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
          "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
          "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
          ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
          Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
          Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
          Disabled: "_2I6xXve3oCxh8fra7SWTnq",
          "Size-1": "_2e1xlPghh48rkP13ydQOPb",
          "Size-2": "B7HtDxiiORArIRcBR9kVB",
        };
      },
      16619: (g) => {
        g.exports = {
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
      65274: (g) => {
        g.exports = {
          Text: "f6hU22EA7Z8peFWZVBJU",
          Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
          "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
          "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
          "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
          "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
          "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
          "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
          "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
          "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
          "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
          TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
          TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
          LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
          WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
        };
      },
      50122: (g) => {
        g.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      29780: (g) => {
        g.exports = {
          CreatorCarouselCtn: "_1qnKWf93kKH8YgFapmbXoG",
          CreatorCarouselCrumbs: "_2AiKsp4m6yMqM2eYITyM9P",
          CreatorCarouselCrumb: "_3YJS96Hy8atWoeFJxFOkKu",
        };
      },
      18126: (g) => {
        g.exports = {
          StoreSalePriceWidget: "_2-McVXIMf_N62bUl92jzfB",
          StoreSaleDiscountedPriceCtn: "_1_P7Dmzd6trtJ9KdCsm-Nk",
          StoreSalePriceBox: "_2Ddt9rJYO847UxQG9pUQiI",
          StoreSaleReservationPriceBox: "_2EisNLmBrsT1g7ArYp9HU6",
          StoreSaleDiscountBox: "_1W5KL6SFFSmWCA-_9poz6t",
          FromCoupon: "_2GpdhLpPsPUodknhaYhTa3",
          StoreOriginalPrice: "_2z2Ba4q2zi5jWk2QF17G2c",
        };
      },
      18714: (g) => {
        g.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          MainCarousel: "_3SWsMT4_EVVsmPbanjlEy4",
          FeatureCtn: "_10K5p_DOyGW-WttCA1UwuC",
          StoreSection: "OyJ48UmHDKl9fN7ue4oPF",
          SectionTitle: "_2RnIwgy025bixjWk2UTw40",
          SectionDescription: "nVpbhpPkgrAwu1ZjFf7-B",
          SectionTitleCtn: "_3LagaO9m29xPGnO2YwpQnq",
          SpotlightsColumn: "_2Y2C1oQ7JEMkq2AoDp_S0A",
          SpecialsItem: "_1txjwTLoJcqr0tBIHfKXTG",
          SpotlightCtn: "_10ZMM-6TwuIxLIDYNo11cI",
          SpotlightImageCtn: "_1bl_5_eovS3fDHK3GbmixH",
          CapsuleDecorators: "_2kI35iD_oF1-ul1amEDSsK",
          SpotlightTextCtn: "_1clRj5v7vU3Cuj7x9c3ZNZ",
          SpotlightTitle: "_2egM2GG5RaDSQYVNWlMHat",
          SpotlightBody: "_1ls2pcPp4wzuE2mXhMudcd",
          SpotlightWeeklongTextCtn: "_3oM7Hgank9qu0ZtiIqT4Ti",
          SpotlightItemCount: "MsDhVPTMNn95Jd3XWTPQR",
          BottomBarPriceInfo: "w6OMUI_I9oVaxDOwRzRrh",
          BroadcastPage: "_2wLdHFCsbh4BfZ6kvvpRyL",
          BroadcastCtn: "_1D6ilQYGn-cYI2fhTAjSzD",
          BroadcastImageCtn: "cIETZLGVM0l5WCskcyNy2",
          BroadcastVideoThumbnail: "_39GHoC1PY5ctRSLAksxgN2",
          BroadcastPlayIcon: "_39krE1gLBTakOzuK41yZBD",
          BroadcastTextCtn: "_14UDZIeZXOLeUPaEDmYrfn",
          BroadcastName: "_3mq3Uyxqjh000D4-OJ9PiI",
          BroadcastDesc: "_3jIzvnoNk4DzmB7w3vl3dz",
          DailyDealCtn: "_3pSANczPET1GBWiNfM8ZEZ",
          DailyDealImageCtn: "pNmm6ej3gbZJbTFnF34Bb",
          DailyDealTextCtn: "_1tG1_bqddtY0lm02Wf4X9T",
          DailyDealDesc: "_21_xVixMh0-rRqUGdGxbEg",
          ContentHubTakeoverCtn: "_2NgkNEEvdNAueuTkHH4V0S",
          TweaksMenu: "_3N0H151KuH7D3iNrbRNL3D",
          MenuTitle: "_1qcGKxEKb2AANDw4iXQ0kF",
          MenuOptions: "_2BNKaMvGCPl8BE2y48Zyu2",
          BackgroundAnimation: "_26VKCvvlOekXO3gQ4lt52K",
          "ItemFocusAnim-darkerGrey-nocolor": "_3wTkpIb4XE7F7ZZDUXHgm_",
          "ItemFocusAnim-darkerGrey": "_2JTxWE9ODcqL4KEwAQsSC5",
          "ItemFocusAnim-darkGreySettings": "_1t6voKc6Z9o4Tv6RxMOxKZ",
          "ItemFocusAnim-darkGrey": "_3hNDwFLzATB9Rlsqzdi0SL",
          "ItemFocusAnim-grey": "DO3pGo-5_dzvOUiQSw2fW",
          "ItemFocusAnim-translucent-white-10": "_1yAke0XKqQ2OeiVkyNRJPm",
          "ItemFocusAnim-translucent-white-20": "_3HsFu62m74Ss4hGpugGIY",
          "ItemFocusAnimBorder-darkGrey": "_2rbzbmBTlYOt4Kd3V_AurK",
          "ItemFocusAnim-green": "_2ha4PsCJYLF62a1zUQzOkG",
          focusAnimation: "yX4eIfH38xAjJpSzr9zFe",
          hoverAnimation: "ib5aU4OmCxpvW7mx1Gkl7",
        };
      },
      61738: (g, C, e) => {
        var t = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function u(i) {
          var v = m(i);
          return e(v);
        }
        function m(i) {
          if (!e.o(t, i)) {
            var v = new Error("Cannot find module '" + i + "'");
            throw ((v.code = "MODULE_NOT_FOUND"), v);
          }
          return t[i];
        }
        (u.keys = function () {
          return Object.keys(t);
        }),
          (u.resolve = m),
          (g.exports = u),
          (u.id = 61738);
      },
    },
  ]);
})();
