/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [50762],
    {
      26589: (ge, de, r) => {
        "use strict";
        r.d(de, { gg: () => U, hM: () => _ });
        var n = r(72609),
          x = r(75233),
          a = r(80902),
          s = r(67705),
          t = r(76559),
          v = r(3166);
        function L(S, h) {
          return {
            clanid: S,
            appid: h,
            can_edit: !1,
            owns_app: !1,
            event_followed: [],
            event_followed_flags: [],
            event_ignored: [],
            follows_app: !1,
            valve_admin: !1,
            support_user: !1,
            limited_user: !0,
          };
        }
        function k(S, h) {
          return !h || !(S.support_user || S.valve_admin)
            ? S
            : { ...S, can_edit: !0, support_user: !1, valve_admin: !1 };
        }
        async function F(S, h, D) {
          const g = (0, s.Bu)(),
            o = (0, s.Fd)("partnereventpermissions", "application_config");
          if (N(o)) {
            const p = o.find((b) => b.clanid == S);
            if (p) {
              let { success: b, warn_msg: V, err_msg: ne, ...se } = p;
              return k(se, g);
            }
          }
          if (n.iA.logged_in) {
            const p = t.b.InitFromClanID(S);
            let b = `${n.TS.COMMUNITY_BASE_URL}gid/${p.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
            (0, v.yK)() == "partner"
              ? (b = `${n.TS.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${S}`)
              : (0, v.yK)() == "store" &&
                (b = `${n.TS.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${S}`);
            const V = await fetch(b, { method: "GET", credentials: "include" });
            if (V.status == 200) {
              const ne = await V.json();
              if (ne) {
                let { success: se, warn_msg: J, err_msg: H, ...c } = ne;
                return k(c, g);
              }
            }
          }
          return L(S, void 0);
        }
        function N(S) {
          const h = S;
          return h &&
            Array.isArray(h) &&
            h.length > 0 &&
            typeof h[0] == "object"
            ? typeof h[0].clanid == "number" && typeof h[0].appid == "number"
            : !1;
        }
        var T = r(68312);
        function _(S) {
          const h = (0, x.jE)(),
            D = (0, T.KV)();
          return (0, a.I)(U(S, h, D));
        }
        function U(S, h, D) {
          return {
            queryKey: O(S),
            queryFn: async () => await F(S, h, D),
            enabled: !!S,
          };
        }
        function O(S) {
          return ["useEventUserPermissions", n.iA.accountid, S];
        }
      },
      3946: (ge, de, r) => {
        "use strict";
        r.d(de, { V: () => a });
        var n = r(7850),
          x = r(72080);
        function a(s) {
          return (0, n.jsxs)("a", {
            href: s.strURL,
            className: x.gg.Box,
            "data-modal-content-sizetofit": !!s.bSizeToFit,
            "data-appid": s.appid,
            "data-publishedfileid": s.publishedfileid,
            children: [
              (0, n.jsx)(x.KN, { strURL: s.strPreviewURL }),
              (0, n.jsxs)(x.J7, {
                children: [
                  (0, n.jsx)(x.bv, { children: s.strTitle }),
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)("span", {
                      className: x.gg.Type,
                      children: s.strType,
                    }),
                  }),
                  s.author && (0, n.jsx)(x.zN, { children: s.author }),
                  (0, n.jsx)(x.AT, { children: s.strDescription }),
                ],
              }),
            ],
          });
        }
      },
      54357: (ge, de, r) => {
        "use strict";
        r.d(de, { B: () => F });
        var n = r(7850),
          x = r(90626);
        function a(T) {
          const [_, U] = useState(!1);
          return (
            useEffect(() => {
              window.SSR && (window.SSR.hydrated = !0),
                startTransition(() => U(!0));
            }, []),
            jsx(s.Provider, { value: _, children: T.children })
          );
        }
        const s = (0, x.createContext)(!1);
        function t() {
          return (0, x.useContext)(s);
        }
        const v = Intl.DateTimeFormat().resolvedOptions().timeZone,
          L =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((T) => T.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          k = L && decodeURIComponent(L);
        function F() {
          return t() ? v : (k ?? v);
        }
        function N() {
          "document" in globalThis &&
            (document.cookie = `timezoneName=${v};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        N();
      },
      69596: (ge, de, r) => {
        "use strict";
        r.d(de, { O: () => a });
        const n =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function x(s) {
          return s ? n.test(s.trim()) : !1;
        }
        function a(s, t) {
          return x(s) ? s : t;
        }
      },
      11547: (ge, de, r) => {
        "use strict";
        r.d(de, { H: () => Fe, k: () => je });
        var n = r(7850),
          x = r(29950),
          a = r(29630),
          s = r(68941),
          t = r(70187),
          v = r(1917),
          L = r(24660),
          k = r(72609),
          F = r(86722),
          N = r(6878),
          T = r.n(N),
          _ = r(53107),
          U = r(36707),
          O = r(53113),
          S = r(69596),
          h = r(35265);
        function D(B) {
          switch (B) {
            case "button":
              return (0, U.A)(T().LinkButton, "LinkButton");
            case "pill":
              return (0, U.A)(T().LinkPill, "LinkPill");
            default:
              return (0, U.A)(T().Link, "Link");
          }
        }
        function g(B, ee, ye) {
          let Me = "";
          return (
            B == "button" && ee && (Me += `background-color: ${ee};`),
            B == "pill" && ye && (Me += `color: ${ye};`),
            Me.length == 0 ? void 0 : Me
          );
        }
        function o(B, ee, ye) {
          let Me;
          return (
            (B == "button" || B == "pill") &&
              ee &&
              (Me = { backgroundColor: ee }),
            (B == "button" || B == "pill") &&
              ye &&
              (Me = { ...(Me ?? {}), color: ye }),
            Me
          );
        }
        function p(B, ee) {
          const ye = (
            typeof B == "string"
              ? B
              : Array.isArray(B) && B.length == 1 && typeof B[0] == "string"
                ? B[0]
                : void 0
          )?.trim();
          return !ye || !ee ? !0 : ye != ee.trim();
        }
        function b(B) {
          let ee = (0, x.J)((0, t.j$)(B.args) || (0, t.j$)(B.args, "href"));
          const ye = (0, t.j$)(B.args, "style"),
            Me = (0, t.j$)(B.args, "id"),
            Je = (0, S.O)(
              (0, t.j$)(B.args, "buttoncolor") || (0, t.j$)(B.args, "bgcolor"),
              void 0,
            ),
            $e = (0, S.O)(
              (0, t.j$)(B.args, "labelcolor") || (0, t.j$)(B.args, "color"),
              void 0,
            ),
            P = D(ye),
            Y = B.context.event,
            ve = (0, a.z5)(ee, B.language, Y?.rtime32_last_modified),
            De = (0, h.W7)(p(B.children, ee) ? "" : (ee ?? ""));
          if (De && ee) return De.fnBBComponent(ee, { event: B.context.event });
          if (ve === void 0 || ve == null) return B.children || "";
          typeof ve == "string" ? (ee = ve) : (ee = ve[1]);
          const we = o(ye, Je, $e);
          return typeof ee == "string" && ee.length > 0 && ee[0] == "#"
            ? (0, n.jsx)(L.Ii, {
                className: P,
                href: ee,
                style: we,
                children: B.children,
              })
            : ee == "steam://settings/account"
              ? (0, n.jsx)(_.uU, {
                  className: P,
                  href: "steam://settings/account",
                  children: B.children,
                })
              : (0, n.jsx)(F.d$, {
                  className: P,
                  url: ee,
                  event: B.context.event,
                  id: Me,
                  style: we,
                  children: B.children,
                });
        }
        function V(B) {
          const ee = (0, t.j$)(B.args, "href"),
            ye = (0, h.W7)(ee);
          return ye
            ? ye.fnBBComponent(ee, { event: B.context.event })
            : (0, n.jsx)(b, { ...B });
        }
        var ne = r(25046),
          se = r(29522),
          J = r(40358),
          H = r(64271),
          c = r(90626),
          m = r(67523),
          f = r.n(m),
          E = r(36118),
          $ = r(18210),
          z = r(85599),
          w = r(89767),
          I = r.n(w),
          q = r(64457),
          G = r(48963),
          C = r.n(G),
          pe = ((B) => (
            (B.k_TrailerAsButton = "button"),
            (B.k_TrailerAsPill = "pill"),
            (B.k_TrailerAsFull = "full"),
            (B.k_TrailerAsPoster = "poster"),
            (B.k_TrailerAsMicro = "micro"),
            B
          ))(pe || {});
        const M = /\bappid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function fe(B, ee) {
          const ye = new Set();
          for (const Me of B.matchAll(/\[trailer\b([^\]]*)\]/gi)) {
            const Je = M.exec(Me[1] ?? ""),
              $e = Je ? Number.parseInt(Je[1] ?? Je[2] ?? Je[3] ?? "") : ee;
            $e && ye.add($e);
          }
          return Array.from(ye);
        }
        function W(B) {
          const {
              embedStyle: ee,
              appid: ye,
              color: Me,
              bgcolor: Je,
              children: $e,
              trailerBaseID: P,
              subtitles: Y,
            } = B,
            [ve, De] = (0, c.useState)(!1),
            we = (0, c.useMemo)(() => ({ appid: ye }), [ye]);
          switch (ee) {
            case "button":
            case "pill":
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("button", {
                    type: "button",
                    className: (0, U.A)({
                      [I().Pill]: ee == "pill",
                      [I().Button]: ee == "button",
                    }),
                    onClick: () => De(!0),
                    style: { color: Me, backgroundColor: Je },
                    children: [
                      (0, n.jsx)(E.jGG, {}),
                      $e || (0, $.we)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, n.jsx)(q.PE, {
                    id: we,
                    bShowModal: ve,
                    trailerBaseID: P,
                    hideModal: () => De(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, n.jsx)(re, { ...B });
          }
        }
        function re(B) {
          const { appid: ee, trailerBaseID: ye } = B,
            Me = (0, se.$5)(ee),
            { data: Je } = (0, J.J$)(Me),
            [$e, P] = (0, c.useState)(() =>
              !ee || !ye ? (0, $.we)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            Y = (0, ne.kB)(Me),
            ve = (0, c.useMemo)(
              () => (Y ? Y.find((De) => De.trailer_base_id === ye) : null),
              [Y, ye],
            );
          return (
            (0, c.useEffect)(() => {
              Je?.unvailable_for_country_restriction &&
                P((0, $.we)("#TrailerPlayer_CouldNotLoad", ee, ye)),
                Y &&
                  !ve &&
                  P(
                    (0, $.we)(
                      "#TrailerPlayer_CouldNotLoad",
                      B.appid,
                      B.trailerBaseID,
                    ),
                  );
            }, [
              ee,
              B.appid,
              B.trailerBaseID,
              Je?.unvailable_for_country_restriction,
              ye,
              ve,
              Y,
            ]),
            $e
              ? B.bIsPreviewMode
                ? (0, n.jsx)("div", { className: f().ErrorDiv, children: $e })
                : null
              : ve
                ? (0, n.jsx)(he, { trailerToPlay: ve })
                : (0, n.jsx)(z.t, {
                    string: (0, $.we)("#Loading"),
                    size: "small",
                  })
          );
        }
        function he(B) {
          const { trailerToPlay: ee } = B,
            {
              rgDashTrailers: ye,
              rgHlsTrailers: Me,
              strCaptionManufest: Je,
            } = (0, c.useMemo)(() => {
              const { rgDashTrailers: $e, rgHlsTrailers: P } = (0, ne.hg)(ee),
                Y = (0, ne.Wv)(ee);
              return {
                rgDashTrailers: $e,
                rgHlsTrailers: P,
                strCaptionManufest: Y,
              };
            }, [ee]);
          return ye?.length == 0
            ? null
            : (0, n.jsx)("div", {
                className: C().VideoPopupContainers,
                children: (0, n.jsx)(H.P, {
                  dashManifests: ye || [],
                  hlsManifest: (Me.length > 0 && Me?.[0]) || "",
                  screenshot: (0, ne.hl)(ee),
                  altText: ee.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: Je,
                }),
              });
        }
        var be = r(34736),
          Le = r(39239),
          Ne = r(13465),
          Re = r(80150),
          Pe = r(18994),
          Ie = r(3166),
          Q = r(68538);
        function ue(B) {
          const ee = (0, Ie.Qn)(),
            ye = (0, Pe.a4)(Pe.Wn),
            Me =
              String((0, t.j$)(B.args, "autoadvance")).toLowerCase() === "true";
          return (0, n.jsx)(Q.F, {
            hideArrows: !ye,
            hidePips: ee,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: ye,
            bAutoAdvance: Me,
            className: T().ScreenshotCarousel,
            children: B.children,
          });
        }
        var K = r(37501),
          me = r.n(K),
          ae = r(1123);
        function Ee(B) {
          const { strURL: ee, children: ye } = B;
          return (
            typeof ee == "string"
              ? !(0, O.ZF)(ee)
              : ee.some((Je) => !(0, O.ZF)(Je))
          )
            ? (0, n.jsx)(Se, { children: ye })
            : (0, n.jsx)(n.Fragment, { children: ye });
        }
        function Se(B) {
          const { children: ee } = B;
          return (0, ae.Ey)()
            ? (0, n.jsx)(n.Fragment, { children: ee })
            : (0, n.jsx)("div", {
                className: me().ImageBlocked,
                children: (0, $.oW)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, n.jsx)("a", {
                    href: k.TS.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var te = r(33645),
          oe = r.n(te);
        let xe = null;
        function je() {
          return (
            xe == null &&
              (xe = new Map([
                ["url", { Constructor: b, autocloses: !1 }],
                ["dynamiclink", { Constructor: V, autocloses: !1 }],
                [
                  "h1",
                  {
                    Constructor: t.Tu(t.Zb, T().Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: t.Tu(t.Sz, T().Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: t.Tu(t.ZS, T().Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  { Constructor: t.Tu(t.Pk, T().BlockQuote), autocloses: !1 },
                ],
                [
                  "list",
                  {
                    Constructor: t.B8,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: t._J,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: t.ck,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: t.It,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                ["img", { Constructor: Te, autocloses: !1 }],
                ["previewyoutube", { Constructor: v.gH, autocloses: !1 }],
                ["looping_media", { Constructor: s.$A, autocloses: !1 }],
                ["video", { Constructor: s.UT, autocloses: !1 }],
                ["youtubeorvideo", { Constructor: v.Eo, autocloses: !1 }],
                ["trailer", { Constructor: ke, autocloses: !1 }],
                [
                  "speaker",
                  {
                    Constructor: ze,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["docimg", { Constructor: Ge, autocloses: !1 }],
                ["carousel", { Constructor: ue, autocloses: !1 }],
              ])),
            xe
          );
        }
        function Te(B) {
          const { showErrorInfo: ee, event: ye } = B.context;
          let Me = (0, t.j$)(B.args, "src") || B.children?.toString();
          Me || (Me = (0, t.j$)(B.args)), (Me = (0, x.J)(Me ?? "") || void 0);
          const Je = (0, t.j$)(B.args, "style") === "inline",
            $e = (0, a.z5)(Me, B.language, ye?.rtime32_last_modified);
          if ($e == null) return null;
          if (typeof $e == "string") {
            Me = $e;
            let P;
            return (
              (P = !(0, O.ZF)(Me)),
              ye?.BHasTag("auto_rssfeed") && (P = !1),
              ee
                ? (0, n.jsx)(Le.i, {
                    className: (0, U.A)({ [oe().Image_Inline]: Je }),
                    src: Me,
                    crossOrigin: P ? "anonymous" : void 0,
                  })
                : ((Me = (0, O.L$)(Me)),
                  (0, n.jsx)(Ee, {
                    strURL: Me,
                    children: (0, n.jsx)(Re.o, {
                      className: (0, U.A)({ [oe().Image_Inline]: Je }),
                      src: Me,
                      crossOrigin: P ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, n.jsx)(Ee, {
              strURL: $e,
              children: (0, n.jsx)(Ne.c, { rgSources: $e }),
            });
        }
        function Ge(B) {
          const ee = (0, t.j$)(B.args);
          if (ee == null || ee == null || ee.length == 0) return "";
          const ye = B.children?.toString(),
            Me = new Array();
          return (
            Me.push(
              `${k.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${k.TS.LANGUAGE}/${ee}`,
            ),
            k.TS.LANGUAGE != "english" &&
              Me.push(
                `${k.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${ee}`,
              ),
            (0, n.jsx)(Ne.c, { rgSources: Me, alt: ye })
          );
        }
        function ke(B) {
          const ee = Fe(B.args, "appid", B.context.event?.appid ?? 0),
            ye = Fe(B.args, "trailerid", 0);
          let Me =
            (0, t.j$)(B.args, "style")?.toLocaleLowerCase() ??
            pe.k_TrailerAsFull;
          Me = Object.values(pe).includes(Me) ? Me : pe.k_TrailerAsFull;
          const Je = (0, S.O)(B.args.color, "black"),
            $e = (0, S.O)(B.args.bgcolor, "white"),
            P = (0, s.g4)(B.args);
          return (0, n.jsx)(W, {
            appid: ee,
            trailerBaseID: ye,
            bIsPreviewMode: B.context.showErrorInfo,
            embedStyle: Me,
            color: Je,
            bgcolor: $e,
            subtitles: P.rgVideoTracks,
            children: B.children,
          });
        }
        function ze(B) {
          const ee = (0, t.j$)(B.args, "name"),
            ye = (0, t.j$)(B.args, "title"),
            Me = (0, t.j$)(B.args, "company"),
            Je = (0, t.j$)(B.args, "photo");
          return B.context.bShowShortSpeakerInfo
            ? (0, n.jsx)(be.S8, {
                name: ee,
                title: ye,
                company: Me,
                photo: Je,
                bio: B.children,
              })
            : (0, n.jsx)(be.$k, {
                name: ee,
                title: ye,
                company: Me,
                photo: Je,
                bio: B.children,
              });
        }
        function Fe(B, ee, ye) {
          const Me = (0, t.j$)(B, ee);
          return Me === void 0 || Me == null ? ye : Number.parseInt(Me);
        }
      },
      1683: (ge, de, r) => {
        "use strict";
        r.d(de, { d3: () => ne, Zn: () => se });
        var n = r(7850),
          x = r(33770),
          a = r(7487),
          s = r(72609),
          t = r(90626),
          v = r(70187),
          L = r(86722),
          k = r(39414),
          F = r(38340),
          N = r(96197),
          T = r(53113);
        class _ extends a.K0 {
          m_LinkFilter = k.O;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(c, m, f, E) {
            super(c),
              (this.m_parentNode = m),
              (this.m_mapHostToComponent = f),
              (this.m_globalStoreLink = E);
          }
          AppendText(c, m = !1) {
            let f = c;
            if (
              (m || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let E = this.m_LinkFilter.exec(f);
              for (; E; ) {
                if (E.index > 0) {
                  let w = E.input.substring(0, E.index);
                  super.AppendText(w, m);
                }
                let $ = E[0],
                  z = !1;
                if (this.m_mapHostToComponent) {
                  for (let w = 0; w < this.m_mapHostToComponent.length; ++w)
                    if (this.m_mapHostToComponent[w].urlRegExp.exec($)) {
                      (z = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[w].fnBBComponent(
                            $,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                z || super.AppendNode((0, L.Pm)($)),
                  (f = E.input.substring(E.index + $.length)),
                  (E = this.m_LinkFilter.exec(f));
              }
            }
            f.length > 0 && super.AppendText(f, m);
          }
        }
        const U = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class O extends a.K0 {
          m_EmoteRegex = new RegExp(U);
          AppendText(c, m = !1) {
            let f = c;
            if (c.length >= 3) {
              let E = this.m_EmoteRegex.exec(f);
              for (; E; ) {
                if (E.index > 0) {
                  let z = E.input.substring(0, E.index);
                  super.AppendText(z, m);
                }
                let $ = E[1];
                super.AppendNode(t.createElement(N.n, { emoticon: $ }, [])),
                  (f = E.input.substring(E.index + $.length + 2)),
                  (E = this.m_EmoteRegex.exec(f));
              }
            }
            f.length > 0 && super.AppendText(f, m);
          }
        }
        class S extends a.K0 {
          m_parentNode = void 0;
          constructor(c, m) {
            super(c), (this.m_parentNode = m);
          }
          AppendText(c, m = !1) {
            let f = c;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              !h(f) &&
              (f = (0, T.L$)(f)),
              super.AppendText(f, m);
          }
        }
        function h(H) {
          const c = H.trim();
          return c.startsWith(F.lw) || c.startsWith(F.eg);
        }
        var D = r(11547),
          g = r(35265);
        let o = null;
        function p() {
          return (
            o == null &&
              (o = new Map([
                ...Array.from(v.W4.entries()),
                ...Array.from((0, D.k)().entries()),
              ])),
            o
          );
        }
        const b = t.createContext(null);
        function V() {
          return t.useContext(b) ?? p();
        }
        function ne(H) {
          const c = V(),
            m = t.useMemo(
              () =>
                new Map([
                  ...Array.from(c.entries()),
                  ...Array.from(H.dictionary.entries()),
                ]),
              [c, H.dictionary],
            );
          return (0, n.jsx)(b.Provider, { value: m, children: H.children });
        }
        function se(H) {
          const {
              text: c,
              languageOverride: m,
              event: f,
              showErrorInfo: E,
              bShowShortSpeakerInfo: $,
            } = H,
            z = (0, g.m$)(),
            w = t.useCallback(
              (G) =>
                new S(
                  new O(new _(new a.OJ(new a.R8()), G, z, { event: f })),
                  G,
                ),
              [f, z],
            ),
            I = V();
          return t
            .useMemo(() => new x.B(I, w, m || s.TS.LANGUAGE), [I, w, m])
            .ParseBBCode(c, {
              showErrorInfo: E,
              event: f,
              bShowShortSpeakerInfo: $,
              bbcode: c,
            });
        }
        function J(H) {
          const {
              strTag: c,
              args: m,
              rawargs: f,
              language: E = PchLanguageToELanguage(Config.LANGUAGE),
              children: $,
              ...z
            } = H,
            w = V().get(c);
          return w
            ? jsx(w.Constructor, {
                context: z,
                tagname: c,
                args: m,
                language: E,
                rawargs: f,
                children: $,
              })
            : jsxs(Fragment, { children: [`[${c}]`, $, `[/${c}]`] });
        }
      },
      35265: (ge, de, r) => {
        "use strict";
        r.d(de, { m$: () => dt, W7: () => It });
        var n = r(7850),
          x = r(32093),
          a = r(72609),
          s = r(88743),
          t = r(40358),
          v = r(90626),
          L = r(86722),
          k = r(6878),
          F = r.n(k),
          N = r(36118),
          T = r(36707),
          _ = r(87949),
          U = r(55483),
          O = r(10985),
          S = r(99412),
          h = r(47797),
          D = r(76559);
        const g =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          o =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
          p = [g, o],
          b =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
        function V(Z, X) {
          const ie = new RegExp(Z).exec(X);
          if (!ie || ie.length <= 3) return;
          const Oe = ie[3];
          if (Oe)
            switch (ie[1]) {
              case "gid":
                return { eventGID: Oe, strClanSteamID64: ie[2] };
              case "group":
                return { eventGID: Oe, clanAccountID: Number.parseInt(ie[2]) };
              case "groups":
                return { eventGID: Oe, strGroupVanity: ie[2] };
              default:
                return isNaN(+ie[2])
                  ? { eventGID: Oe, strOGGVanity: ie[2] }
                  : { eventGID: Oe, appid: Number(ie[2]) };
            }
        }
        function ne(Z) {
          for (const X of p) {
            const ie = V(X, Z);
            if (ie) return ie;
          }
        }
        function se(Z) {
          const X = [],
            ie = new Set(),
            Oe = [
              ...p.map((Ae) => ({ regExp: Ae, bAnnouncement: !1 })),
              { regExp: b, bAnnouncement: !0 },
            ];
          for (const { regExp: Ae, bAnnouncement: Ye } of Oe)
            for (const _e of Z.matchAll(new RegExp(Ae, "gi"))) {
              const nt = V(Ae, _e[0]);
              nt &&
                !ie.has(`${Ye ? "A" : "E"}${nt.eventGID}`) &&
                (ie.add(`${Ye ? "A" : "E"}${nt.eventGID}`),
                X.push({ link: nt, bAnnouncement: Ye }));
            }
          return X;
        }
        var J = r(9046),
          H = r(72080),
          c = r(29522),
          m = r(85599),
          f = r(18210),
          E = r(13465),
          $ = r(56492),
          z = r(88812),
          w = r(39654);
        function I({ clanSteamID: Z, strVanity: X, strGroupVanity: ie }) {
          const Oe = X !== void 0 || ie !== void 0,
            { data: Ae, isPending: Ye } = (0, U.W$)(
              Oe ? (X ?? ie ?? "") : "",
              X !== void 0 ? "store" : "group",
            );
          if (!Oe) return Z?.GetAccountID();
          if (!Ye) return Ae?.clanAccountID ?? null;
        }
        function q(Z) {
          const { appid: X, announcementGID: ie, eventGID: Oe, strURL: Ae } = Z,
            Ye = I(Z),
            _e = Ye === null,
            nt = Ye != null,
            {
              data: it,
              isPending: Dt,
              isError: Yt,
            } = (0, w.vE)(
              _e
                ? void 0
                : {
                    clanAccountID: nt ? Ye : void 0,
                    appid: X,
                    eventGID: Oe,
                    announcementGID: ie,
                  },
            ),
            Zt = (0, c.$5)(X || it?.appid || void 0),
            { data: He } = (0, t.J$)(Zt);
          if (_e || Yt || it === null) return (0, L.Pm)(Ae);
          if (Dt || !it) return (0, n.jsx)(m.t, {});
          const e = (0, S.sfN)(a.TS.LANGUAGE),
            i = it.GetNameWithFallback(e),
            A = it.GetSubTitleWithSummaryFallback(e),
            Xt = He?.name,
            en = (0, f.TW)(it.GetStartTimeAndDateUnixSeconds());
          return (0, n.jsxs)($.tj, {
            eventModel: it,
            route: $.PH.k_eView,
            className: H.gg.Box,
            "data-modal-content-sizetofit": !0,
            "data-appid": X,
            children: [
              (0, n.jsx)(G, { ...Z, event: it }),
              (0, n.jsxs)(H.J7, {
                children: [
                  (0, n.jsxs)(H.zN, {
                    children: [
                      (0, f.we)(
                        it.type == S.uYK
                          ? "#EventDisplay_Share_Announcement"
                          : "#EventDisplay_Share_Event",
                        Xt ?? "",
                      ),
                      (0, n.jsx)(H.MG, { children: en }),
                    ],
                  }),
                  (0, n.jsx)(H.bv, {
                    children: (0, n.jsx)("div", {
                      className: H.gg.Type,
                      children: i,
                    }),
                  }),
                  (0, n.jsx)(H.AT, { children: A }),
                ],
              }),
            ],
          });
        }
        function G(Z) {
          const {
            event: X,
            fnFilterImageURLsForKnownFailures: ie,
            fnImageFailureCallback: Oe,
          } = Z;
          let Ae = (0, S.sfN)(a.TS.LANGUAGE),
            Ye = (0, z.WC)(X, "capsule", Ae, J.wI.capsule_main) ?? [];
          return (
            Ye && ie && (Ye = ie(Ye)),
            (0, n.jsx)(E.c, {
              className: H.gg.Preview,
              rgSources: Ye ?? [],
              onIncrementalError: (_e, nt, it) => Oe && Oe(nt),
            })
          );
        }
        var C = r(10349),
          pe = r(53113);
        const M =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          fe = ["store.steampowered.com", "store.steamchina.com"],
          W = ["steampowered.com", "steamcommunity.com"],
          re = ["steamchina.com"],
          he = ["steam.dev", "valve.org"];
        function be(Z, X) {
          return X.some((ie) => Z == ie || Z.endsWith(`.${ie}`));
        }
        function Le(Z) {
          const X = (0, pe.wm)(Z).toLocaleLowerCase(),
            ie = (0, pe.wm)(a.TS.STORE_BASE_URL).toLocaleLowerCase(),
            Oe = (0, pe.wm)(a.TS.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return X == ie || X == Oe
            ? !0
            : fe.includes(ie)
              ? be(X, be(ie, re) ? re : W)
              : be(X, [...W, ...re, ...he]);
        }
        function Ne(Z) {
          if (Le(Z)) return Re(Z);
        }
        function Re(Z) {
          const X = new RegExp(M).exec(Z);
          if (!X || X.length <= 2) return;
          const ie = X[1].toLowerCase(),
            Oe = Number(X[2]);
          if (!(!(Oe > 0) || !(0, C.nB)(ie)))
            return {
              id: Oe,
              strItemType: ie,
              storeItemKey:
                ie == "sub"
                  ? { packageid: Oe }
                  : ie == "bundle"
                    ? { bundleid: Oe }
                    : { appid: Oe },
            };
        }
        function Pe(Z) {
          const X = [],
            ie = new Set();
          for (const Oe of Z.matchAll(new RegExp(M, "gi"))) {
            const Ae = Re(Oe[0]);
            Ae &&
              !ie.has(`${Ae.strItemType}/${Ae.id}`) &&
              (ie.add(`${Ae.strItemType}/${Ae.id}`), X.push(Ae));
          }
          return X;
        }
        function Ie(Z) {
          return (
            !!Z && (Z.GetEventType() == S.ajI || Z.GetEventType() == S.HRy)
          );
        }
        function Q(Z) {
          const X = Ie(Z),
            ie = X ? Z.clanSteamID.GetAccountID() : void 0,
            { data: Oe, isLoading: Ae } = (0, U.TB)(ie),
            { data: Ye, isLoading: _e } = (0, O.A5)(ie);
          if (!X) return null;
          if (!(Ae || _e))
            return !Ye || !Oe || !(0, h.Ns)(Z, Oe) ? null : (Ye.appids ?? []);
        }
        function ue(Z, X) {
          return Z === null
            ? !0
            : X.length > 0 && X.every((ie) => Z.includes(ie));
        }
        function K(Z, X) {
          const ie = Q(X);
          if (Z.appid === void 0) return !0;
          if (!(Z.appid > 0)) return !1;
          if (ie !== void 0) return ue(ie, [Z.appid]);
        }
        function me({ link: Z, strURL: X, eventModel: ie, bAnnouncement: Oe }) {
          const Ae = K(Z, ie);
          if (Ae === void 0) return null;
          if (!Ae) return (0, L.Pm)(X, ie);
          const Ye =
            Z.strClanSteamID64 !== void 0
              ? new D.b(Z.strClanSteamID64)
              : Z.clanAccountID !== void 0
                ? D.b.InitFromClanID(Z.clanAccountID)
                : void 0;
          return (0, n.jsx)(q, {
            appid: Z.appid,
            clanSteamID: Ye,
            strVanity: Z.strOGGVanity,
            strGroupVanity: Z.strGroupVanity,
            eventGID: Oe ? void 0 : Z.eventGID,
            announcementGID: Oe ? Z.eventGID : void 0,
            strURL: X,
          });
        }
        function ae(Z, X, ie, Oe = !1) {
          if (Le(X)) {
            const Ae = V(Z, X);
            if (Ae)
              return (0, n.jsx)(me, {
                link: Ae,
                strURL: X,
                eventModel: ie?.event,
                bAnnouncement: Oe,
              });
          }
          return (0, L.Pm)(X, ie?.event);
        }
        function Ee(Z, X) {
          return ae(o, Z, X);
        }
        function Se(Z, X) {
          return ae(g, Z, X);
        }
        function te(Z, X) {
          return ae(b, Z, X, !0);
        }
        const oe = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
        function xe(Z) {
          if (!oe.test(Z)) return;
          const X = Z.split("?");
          if (X.length == 2)
            return new URLSearchParams(X[1]).get("id") ?? void 0;
        }
        var je = r(3946),
          Te = r(13854),
          Ge = r(374);
        function ke(Z) {
          const { sharedFileID: X } = Z,
            { data: ie } = (0, Ge.oK)(X),
            Oe = a.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=",
            Ae = ie ?? {
              sharedfileid: X,
              title: (0, f.we)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: Oe + X,
            },
            Ye = (0, Te.TG)(Ae.url) ? Oe + Ae.url : Ae.url;
          let _e = Ae.personnaname !== void 0 && Ae.personnaname.length > 0;
          return (0, n.jsx)(je.V, {
            strURL: Ye,
            strTitle: Ae.title,
            strPreviewURL: Ae.previewurl,
            strType: Ae.type,
            strDescription: Ae.description,
            author:
              _e &&
              (0, f.PP)(
                "#EventEditor_Author",
                (0, n.jsx)(H.mZ, { children: Ae.personnaname }),
              ),
            publishedfileid: X,
            appid: Ae.appid,
            bSizeToFit: Ae.bSizeToFit,
          });
        }
        var ze = r(80902),
          Fe = r(32651),
          B = r.n(Fe);
        const ee = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
        function ye(Z) {
          const X = new Set();
          for (const ie of Z.matchAll(new RegExp(ee, "gi")))
            ie[1] && X.add(ie[1]);
          return Array.from(X);
        }
        function Me(Z) {
          return ["sketchfab_oembed", Z];
        }
        function Je(Z) {
          return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(Z)}`;
        }
        function $e(Z) {
          return {
            queryKey: Me(Z),
            queryFn: async () => {
              const X = await fetch(Je(Z));
              if (X.status === 404) return null;
              if (!X.ok)
                throw new Error(`sketchfab oembed returned ${X.status}`);
              return await X.json();
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function P(Z) {
          return (0, ze.I)($e(Z));
        }
        function Y(Z) {
          const { modelID: X } = Z,
            [ie, Oe] = v.useState(!0),
            { data: Ae } = P(X);
          if (ie) {
            const Ye = () => Oe(!1),
              _e = (nt) => {
                (nt.key === "Enter" || nt.key === " ") &&
                  (nt.preventDefault(), Ye());
              };
            return (0, n.jsxs)("div", {
              className: B().dynamiclink_box,
              role: "button",
              tabIndex: 0,
              onClick: Ye,
              onKeyDown: _e,
              children: [
                Ae?.thumbnail_url &&
                  (0, n.jsx)("img", {
                    className: B().dynamiclink_preview,
                    src: Ae.thumbnail_url,
                    alt: Ae.title,
                  }),
                (0, n.jsx)("img", {
                  className: B().sketchfab_play_overlay_image,
                  alt: "",
                }),
                (0, n.jsxs)("div", {
                  className: B().dynamiclink_content,
                  children: [
                    (0, n.jsxs)("div", {
                      className: B().dynamiclink_name,
                      children: [
                        (0, n.jsx)("span", {
                          className: B().dynamiclink_type,
                          children: (0, f.we)("#EventDisplay_Sketchfab"),
                        }),
                        Ae?.title &&
                          (0, n.jsxs)("div", { children: [Ae.title, "\xA0"] }),
                      ],
                    }),
                    Ae?.author_name &&
                      (0, n.jsx)("div", {
                        className: B().dynamiclink_author,
                        children: Ae.author_name,
                      }),
                  ],
                }),
              ],
            });
          }
          return (0, n.jsx)("div", {
            className: B().sketchfabmodelembedded,
            children: (0, n.jsx)("iframe", {
              className: B().sketchfabmodelembedded,
              title: Ae?.title ?? X,
              src: `https://sketchfab.com/models/${encodeURIComponent(X)}/embed?autostart=1`,
              frameBorder: 0,
              allowFullScreen: !0,
            }),
          });
        }
        const ve =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        function De(Z) {
          const X = ve.exec(Z),
            ie = X ? Number(X[1]) : 0;
          return ie > 0 ? ie : void 0;
        }
        function we(Z) {
          return Le(Z) ? De(Z) : void 0;
        }
        function Qe(Z) {
          const X = new Set();
          for (const ie of Z.matchAll(new RegExp(k_LinkRegex, "g"))) {
            const Oe = De(ie[0]);
            Oe && X.add(Oe);
          }
          return Array.from(X);
        }
        var Ce = r(31774),
          ut = r(71421),
          tt = r(33998),
          Mt = r.n(tt);
        function et(Z) {
          const { defid: X } = Z,
            ie = (0, Ce.wk)(X);
          if (!ie || !ie.community_item_data) return null;
          const Oe = ie.appid,
            Ae = ie.community_item_data.item_image_large,
            Ye = `${a.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${Oe}/${Ae}`;
          return (0, n.jsx)("div", {
            className: Mt().Ctn,
            children: (0, n.jsx)(ut.he, {
              toolTipContent: ie.community_item_data.item_description,
              children: (0, n.jsx)("img", {
                src: Ye,
                alt: ie.community_item_data.item_title,
              }),
            }),
          });
        }
        var lt = r(43597);
        const yt = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          Wt = /twitter\.com\/(\w+)(\/?)$/i,
          ht = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          ct = /twitch\.tv\/(\w+)(\/?)$/i,
          qe =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
        function st() {
          return a.TS.EREALM === x.TU.k_ESteamRealmChina;
        }
        const at = new Map();
        function dt() {
          const Z = a.TS.EREALM;
          let X = at.get(Z);
          return (
            X ||
              (st()
                ? (X = [
                    { urlRegExp: new RegExp(M), fnBBComponent: Ve },
                    { urlRegExp: new RegExp(g), fnBBComponent: Se },
                    { urlRegExp: new RegExp(o), fnBBComponent: Ee },
                    { urlRegExp: new RegExp(b), fnBBComponent: te },
                    { urlRegExp: new RegExp(qe), fnBBComponent: Nt },
                  ])
                : (X = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: lt.j6,
                    },
                    { urlRegExp: new RegExp(oe), fnBBComponent: Rt },
                    { urlRegExp: new RegExp(M), fnBBComponent: Ve },
                    { urlRegExp: new RegExp(g), fnBBComponent: Se },
                    { urlRegExp: new RegExp(o), fnBBComponent: Ee },
                    { urlRegExp: new RegExp(b), fnBBComponent: te },
                    { urlRegExp: new RegExp(yt), fnBBComponent: bt },
                    { urlRegExp: new RegExp(ee), fnBBComponent: pt },
                    { urlRegExp: new RegExp(Wt), fnBBComponent: kt },
                    { urlRegExp: new RegExp(ht), fnBBComponent: St },
                    { urlRegExp: new RegExp(ct), fnBBComponent: jt },
                    { urlRegExp: new RegExp(qe), fnBBComponent: Nt },
                    { urlRegExp: new RegExp(ve), fnBBComponent: xt },
                  ]),
              at.set(Z, X)),
            X
          );
        }
        function Et(Z) {
          return dt().find((X) => !!X.urlRegExp.exec(Z));
        }
        function It(Z) {
          return v.useMemo(() => Et(Z), [Z]);
        }
        function bt(Z, X) {
          if (st()) return null;
          const ie = new RegExp(yt).exec(Z);
          if (ie && ie.length > 1) {
            const Oe = ie[1];
            if (Oe?.length > 0) {
              let Ae =
                "https://medal.tv/clip/" +
                Oe +
                "/?autoplay=0&donate=0" +
                (X && X.event ? "&steamappid=" + X.event.appid : "");
              return (0, n.jsx)("iframe", {
                className: F().MedalTVWidget,
                src: Ae,
                title: Oe,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, L.Pm)(Z, X?.event);
        }
        function pt(Z, X) {
          let ie = new RegExp(ee).exec(Z);
          if (ie && ie.length > 1) {
            let Oe = ie[1];
            if (Oe && Oe.length > 1) return (0, n.jsx)(Y, { modelID: Oe });
          }
          return (0, L.Pm)(Z, X?.event);
        }
        function Rt(Z, X) {
          const ie = xe(Z);
          return ie !== void 0
            ? (0, n.jsx)(ke, { sharedFileID: ie })
            : (0, L.Pm)(Z, X?.event);
        }
        function Ve(Z, X) {
          const ie = Ne(Z);
          return ie
            ? (0, n.jsx)(Gt, {
                eventModel: X?.event,
                inputID: ie.id,
                inputType: ie.strItemType,
                fallbackUrl: Z,
              })
            : (0, L.Pm)(Z, X?.event);
        }
        function Gt(Z) {
          const {
              inputID: X,
              inputType: ie,
              eventModel: Oe,
              fallbackUrl: Ae,
            } = Z,
            Ye = (0, s.dE)(X, ie),
            { data: _e } = (0, t.J$)(Ye),
            nt = Q(Oe);
          let it;
          if (nt === null) it = !0;
          else if (nt && _e) {
            const Dt = _e.appid ? [_e.appid] : (_e.included_appids ?? []);
            it = ue(nt, Dt);
          }
          return it === void 0
            ? null
            : it
              ? (0, n.jsx)(_.e, {
                  id: X,
                  inputType: ie,
                  bApplyUserContentPref: !0,
                })
              : (0, L.Pm)(Ae, Oe);
        }
        function xt(Z, X) {
          const ie = we(Z);
          return ie
            ? (0, n.jsx)("div", {
                className: (0, T.A)(F().LoyaltyRewardCtn),
                children: (0, n.jsx)(et, { defid: ie, url: Z }),
              })
            : (0, L.Pm)(Z, X?.event);
        }
        function kt(Z, X) {
          return st() ? null : wt(Z, (0, n.jsx)(N.KKS, {}), "@", X);
        }
        function St(Z, X) {
          return st() ? null : wt(Z, (0, n.jsx)(N.KKS, {}), "#", X);
        }
        function jt(Z, X) {
          return st() ? null : wt(Z, (0, n.jsx)(N.qcc, {}), void 0, X);
        }
        function Nt(Z, X) {
          return wt(Z, (0, n.jsx)(N.Qte, {}), void 0, X);
        }
        function wt(Z, X, ie, Oe) {
          let Ae;
          const Ye = Z.endsWith("/") ? Z.length - 1 : Z.length,
            _e = Z.lastIndexOf("/", Ye - 1);
          _e != -1 && _e + 1 < Z.length && (Ae = Z.substring(_e + 1, Ye)),
            ie && Ae && (Ae = ie + Ae);
          const nt = (0, L.Pm)(Z, Oe?.event, Ae ?? Z);
          return (0, n.jsxs)("div", {
            className: F().SocialLink,
            children: [
              (0, n.jsx)("div", { className: F().SocialIcon, children: X }),
              nt,
            ],
          });
        }
      },
      39654: (ge, de, r) => {
        "use strict";
        r.d(de, { vE: () => S });
        var n = r(72604),
          x = r(99412),
          a = r(72609),
          s = r(80902),
          t = r(38884),
          v = r(76559),
          L = r(18210);
        const k = "events/ajaxgetpartnerevent";
        function F(h) {
          const D = L.A0.GetELanguageFallback(h);
          return h != D ? `${h}_${D}` : `${h}`;
        }
        function N(h) {
          return h ? (0, t.oE)(new v.b(h.clanSteamID64), h.event) : null;
        }
        async function T(h, D) {
          const g = new URLSearchParams();
          h.clanAccountID && g.set("clan_accountid", String(h.clanAccountID)),
            h.appid && g.set("appid", String(h.appid)),
            h.eventGID && g.set("event_gid", h.eventGID),
            h.announcementGID && g.set("announcement_gid", h.announcementGID),
            g.set("lang_list", F(D)),
            g.set("last_modified_time", "0"),
            g.set("origin", window.location.origin);
          const o = a.TS.STORE_BASE_URL + k + "?" + g.toString(),
            p = await fetch(o);
          if (!p.ok) throw new Error(`${o} answered ${p.status}`);
          const b = await p.json();
          return b.success !== n.R || !b.event?.clan_steamid
            ? null
            : { clanSteamID64: b.event.clan_steamid, event: b.event };
        }
        function _(h, D) {
          return [
            "LinkedPartnerEvent",
            h.clanAccountID,
            h.appid,
            h.eventGID,
            h.announcementGID,
            D,
          ];
        }
        function U(h) {
          return (
            !!h &&
            (!!h.clanAccountID || !!h.appid) &&
            (!!h.eventGID || !!h.announcementGID)
          );
        }
        function O(h, D) {
          const g = U(h);
          return {
            queryKey: _(h ?? {}, D),
            queryFn: () => T(h ?? {}, D),
            select: N,
            enabled: g,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function S(h) {
          const D = (0, x.sfN)(a.TS.LANGUAGE);
          return (0, s.I)(O(h, D));
        }
      },
      56492: (ge, de, r) => {
        "use strict";
        r.d(de, {
          Bw: () => I,
          EX: () => se,
          Hx: () => C,
          JP: () => ne,
          LJ: () => f,
          OG: () => G,
          PH: () => o,
          T7: () => H,
          sY: () => E,
          tj: () => pe,
          yh: () => w,
        });
        var n = r(7850),
          x = r(50974),
          a = r(99412),
          s = r(24660),
          t = r(72865),
          v = r(90626),
          L = r(92757),
          k = r(83482),
          F = r(16369),
          N = r(10303),
          T = r(64165),
          _ = r(71742),
          U = r(53113),
          O = r(3166),
          S = r(72609),
          h = r(39905),
          D = r(47875),
          g = r(40358),
          o = ((M) => (
            (M.k_eView = "view"),
            (M.k_eViewWebSiteHub = "websitehub"),
            (M.k_eCommunityView = "communityview"),
            (M.k_eCommunityEdit = "edit"),
            (M.k_eCommunityEditBroadcast = "editBroadcast"),
            (M.k_eCommunityAdminPage = "admin"),
            (M.k_eCommunityPublish = "publish"),
            (M.k_eCommunityMigrate = "migrate"),
            (M.k_eCommunityPreview = "preview"),
            (M.k_eCommunityPreviewSale = "previewsale"),
            (M.k_eCommunityAnnouncementHub = "community_announcehub"),
            (M.k_eStoreView = "storeview"),
            (M.k_eStoreNewsHub = "newshub"),
            (M.k_eStoreOwnerPage = "store"),
            (M.k_eStoreSalePage = "sale"),
            (M.k_eStoreHardwarePreview = "hardwarepreview"),
            (M.k_eStoreUsersNewsHub = "usernewshub"),
            M
          ))(o || {});
        const p =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function b(M) {
          return M.match(p)?.[1];
        }
        function V(M, fe) {
          if (!fe) return !1;
          const W = !0,
            re = b(window.location.href),
            he = W && re == "news",
            be = fe.GetEventType() == a.ajI,
            Le = !1,
            Ne = fe.appid ? "games" : "groups",
            Re =
              Le &&
              Ne == re &&
              ((fe.appid && fe.appid === O.UF.APPID) ||
                (!fe.appid &&
                  fe.clanSteamID.GetAccountID() === O.UF.CLANACCOUNTID));
          switch (M) {
            case "view":
              return Re || (he && !E());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return Re;
            case "admin":
              return be ? !1 : Re;
            case "websitehub":
              return Re || he;
            case "storeview":
              return he && !E();
            case "newshub":
            case "store":
            case "usernewshub":
              return he;
            case "sale":
              return !1;
            case "hardwarepreview":
              return !1;
            default:
              return (
                (0, _.wT)(!1, "Unknown route specified for link: " + M), !1
              );
          }
        }
        function ne(M) {
          const fe =
            S.TS.COMMUNITY_BASE_URL +
            "gid/" +
            M.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            M.AnnouncementGID;
          return {
            strFacebookUrl: fe + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: fe + "?site=twitter",
            strRedditUrl: fe + "?site=reddit",
          };
        }
        function se(M) {
          return z(M, "sale", "absolute");
        }
        function J(M, fe) {
          return w(M, fe, "sale", "absolute");
        }
        function H(M) {
          return z(M, "storeview", "absolute");
        }
        function c(M, fe) {
          return w(M, fe, "storeview", "absolute");
        }
        function m(M, fe, W) {
          if (W)
            return (
              (M ? "/games/" + O.UF.VANITY_ID : "/groups/" + O.UF.VANITY_ID) +
              "/"
            );
          const re = M ? "ogg/" + M : "gid/" + fe.ConvertTo64BitString();
          return S.TS.COMMUNITY_BASE_URL + re + "/";
        }
        function f() {
          return "news";
        }
        function E() {
          return !1;
        }
        function $(M) {
          return M.clanSteamID.GetAccountID() === x.gt && !1;
        }
        function z(M, fe, W) {
          const { data: re } = (0, g.J$)(
            M?.appid ? { appid: M.appid } : void 0,
          );
          if (M) return w(M, re, fe, W);
        }
        function w(M, fe, W, re) {
          const he = re === "relative",
            be = !1,
            Le = he ? "/" : S.TS.STORE_BASE_URL,
            Ne = m(M.appid, M.clanSteamID, he);
          W === "view"
            ? (W = be ? "communityview" : "storeview")
            : W === "websitehub" &&
              (W = be ? "community_announcehub" : "newshub");
          const Re = M.GID ? M.GID : "",
            Pe = M.AnnouncementGID ? M.AnnouncementGID : "",
            Ie =
              M.BIsOGGEvent() &&
              M.appid &&
              fe &&
              M.BHasSaleUpdateLandingPageVanity(),
            Q = M.GetEventType() == a.ajI;
          switch (W) {
            case "publish":
              return (
                Ne +
                (M.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Pe
                  : "partnerevents/publish/" + Re + "?tab=publishing")
              );
            case "edit":
              return (
                Ne +
                (M.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Pe
                  : "partnerevents/edit/" + Re)
              );
            case "editBroadcast":
              return (
                Ne +
                (M.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Pe
                  : "partnerevents/edit/" + Re) +
                "?tab=broadcast"
              );
            case "migrate":
              return Ne + "partnerevents/migrate_announcement/" + Pe;
            case "preview":
              return Q
                ? Ne + "partnerevents/previewsale/" + Re
                : Ne +
                    (M.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + Pe
                      : "partnerevents/preview/" + Re);
            case "previewsale":
              return Ne + "partnerevents/previewsale/" + Re;
            case "admin":
              return Q
                ? `${Le}curator/${M.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : Ne + "partnerevents";
            case "community_announcehub":
              return Ne + "announcements";
            case "newshub": {
              const ue = M.appid
                ? `app/${M.appid}`
                : `group/${M.clanSteamID.GetAccountID()}`;
              return Le + `${f()}/${ue}`;
            }
            case "store":
              return (
                Le +
                (M.appid
                  ? "app/" + M.appid
                  : "curator/" + M.clanSteamID.GetAccountID())
              );
            case "sale":
              return M.jsondata.bSaleEnabled
                ? Ie
                  ? `${(0, D._)(fe)}/${M.GetSaleUpdateLandingPageVanity()}`
                  : Q
                    ? `${Le}curator/${M.clanSteamID.GetAccountID()}`
                    : Le +
                      (0, T.n)(
                        M.clanSteamID.GetAccountID(),
                        M.GetSaleVanity(),
                        !!M.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath,
                      )
                : Le;
            case "hardwarepreview":
              return $(M) ? `${Le}hardware_v2/${Pe}?beta=1` : Le;
            case "communityview":
              return Ne + "announcements/detail/" + Pe;
            case "storeview": {
              if (M.clanSteamID.GetAccountID() == (0, F.H)())
                return `${S.TS.STORE_BASE_URL}meetsteam/${Re}`;
              if (Ie)
                return `${(0, D._)(fe)}/${M.GetSaleUpdateLandingPageVanity()}`;
              if (Q) return `${Le}curator/${M.clanSteamID.GetAccountID()}`;
              {
                const ue = M.appid
                    ? `app/${M.appid}`
                    : `group/${M.clanSteamID.GetAccountID()}`,
                  K = E() ? "view_v2" : "view",
                  me = M.bOldAnnouncement ? `old_view/${Pe}` : `${K}/${Re}`;
                return `${Le}${f()}/${ue}/${me}`;
              }
            }
            case "usernewshub":
              return `${Le}${f()}/`;
            default:
              return (0, _.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function I(M, fe, W) {
          const re = W === "forceAbsolute" || !V(fe, M);
          return z(M, fe, re ? "absolute" : "relative");
        }
        function q(M, fe, W, re) {
          const he = re === "forceAbsolute" || !V(W, M);
          return w(M, fe, W, he ? "absolute" : "relative");
        }
        function G(M) {
          const { eventModel: fe, route: W, bPopup: re = !0 } = M,
            he = V(W, fe),
            be = z(fe, W, he ? "relative" : "absolute");
          return (
            v.useEffect(() => {
              be && (re ? window.open(be) : window.location.assign(be));
            }, [re, be]),
            he && be ? (0, n.jsx)(L.rd, { push: !0, to: be }) : null
          );
        }
        function C(M, fe, W) {
          const re = m(M, fe, !1);
          return W === "admin" ? re + "partnerevents" : "";
        }
        function pe(M) {
          const { eventModel: fe, preferredFocus: W } = M,
            { bCanUseLink: re } = v.useContext(N.I),
            he = (0, t.n9)(),
            be = (0, L.W6)(),
            Le = re && V(M.route, fe),
            Ne = z(fe, M.route, Le ? "relative" : "absolute"),
            Re = !Le && Ne ? (0, U.NT)(Ne) : Ne,
            Pe = Le || !Re ? Re : (0, k.wJ)(Re, he),
            Ie = z(fe, "websitehub", "absolute"),
            Q =
              M.route != "websitehub"
                ? h.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            ue = v.useCallback(() => {
              Ie && window.location.assign(Ie);
            }, [Ie]);
          return fe
            ? Le
              ? (0, n.jsx)(s.Ii, {
                  style: M.style,
                  className: M.className,
                  href: be.createHref({ pathname: Pe }),
                  onClick: (K) => {
                    Pe && (M.onClick?.(K), be.push(Pe), K.preventDefault());
                  },
                  onOptionsActionDescription: Q,
                  onOptionsButton: Q ? ue : void 0,
                  preferredFocus: W,
                  children: M.children,
                })
              : (0, n.jsx)(s.Ii, {
                  href: Pe,
                  style: M.style,
                  className: M.className,
                  onClick: M.onClick,
                  preferredFocus: W,
                  onOptionsActionDescription: Q,
                  onOptionsButton: Q ? ue : void 0,
                  children: M.children,
                })
            : null;
        }
      },
      32606: (ge, de, r) => {
        "use strict";
        r.d(de, { O: () => F, j: () => k });
        var n = r(7850),
          x = r(65946),
          a = r(18057),
          s = r(36707),
          t = r(71684),
          v = r(38182),
          L = r.n(v);
        function k(N) {
          const {
              event: T,
              className: _,
              nOverrideStartTime: U,
              nOverrideEndTime: O,
            } = N,
            S = N.stylesmodule ? { ...L(), ...N.stylesmodule } : L(),
            [h, D, g] = (0, x.q3)(() => [
              U ||
                (T.bOldAnnouncement
                  ? T.postTime
                  : T.GetStartTimeAndDateUnixSeconds()),
              O || T.GetEndTimeAndDateUnixSeconds(),
              T.type,
            ]),
            o = !(0, t.JS)(g);
          return (0, n.jsx)("div", {
            className: (0, s.A)(S.EventDetailTimeInfo, _),
            children: (0, n.jsx)(a.v9, {
              startDateAndTime: h,
              endDateAndTime: D,
              bHideEndTime: o,
              stylesmodule: S,
            }),
          });
        }
        function F(N) {
          const {
              id: T,
              event: _,
              className: U,
              dateRangeLayout: O = "horizontal",
            } = N,
            [S, h, D] = (0, x.q3)(() => [
              _.GetStartTimeAndDateUnixSeconds(),
              _.GetEndTimeAndDateUnixSeconds(),
              _.type,
            ]),
            g = {};
          return (
            O == "vertical" &&
              (g.ShortDateRange = L().VerticalLocalDateAndTime),
            (0, n.jsx)("div", {
              id: T,
              className: (0, s.A)(L().EventDetailTimeInfo, U),
              children: (0, n.jsx)(a.u1, {
                startDateAndTime: S,
                endDateAndTime: h,
                bHideEndTime: !(0, t.JS)(D),
                stylesmodule: g,
              }),
            })
          );
        }
      },
      87949: (ge, de, r) => {
        "use strict";
        r.d(de, { e: () => T });
        var n = r(7850),
          x = r(78192),
          a = r(72609),
          s = r(40358),
          t = r(88743),
          v = r(61431),
          L = r(36707),
          k = r(18210),
          F = r(20881),
          N = r.n(F);
        function T(_) {
          const { inputType: U, id: O, bApplyUserContentPref: S } = _,
            h = U == "bundle" ? "bundle" : U == "sub" ? "sub" : "game",
            D = (0, t.zl)(O, h),
            { data: g } = (0, s.J$)(D),
            { data: o, isPending: p } = (0, s.Ij)(S ? D : void 0);
          if (!g) return null;
          if (S) {
            if (p) return null;
            if (o?.filter_failure == x.hQ.Zy || o?.filter_failure == x.hQ.ir) {
              let b = "#StoreCapsule_App_Excluded";
              switch (U) {
                case "sub":
                  b = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  b = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, n.jsx)("div", {
                className: (0, L.A)(
                  N().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, k.oW)(
                  b,
                  (0, n.jsx)("a", {
                    href: a.TS.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, n.jsx)("div", {
            className: (0, L.A)(N().AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, n.jsx)(v.p, {
              id: O,
              type: h,
              bShowDemoButton: g.type == x.uE.ue,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
      },
      42277: (ge, de, r) => {
        "use strict";
        r.d(de, { KL: () => F, mc: () => N });
        var n = r(72604),
          x = r(72609),
          a = r(75233),
          s = r(80902),
          t = r(51614),
          v = r(83028);
        function L(T, _) {
          return ["GetClanAnnouncementVoteForUser", _, T];
        }
        function k(T) {
          return T == "up" ? 1 : T == "down" ? -1 : 0;
        }
        function F(T, _, U, O) {
          const S = (0, a.jE)(),
            h = L(T, x.iA.accountid),
            { data: D } = (0, s.I)({
              queryKey: h,
              queryFn: async () => await U.GetMyEventVote(T),
              initialData: O?.initialVote,
              enabled: !!T && !!x.iA.accountid && (O?.bAsk ?? !0),
              staleTime: 1 / 0,
              gcTime: 1 / 0,
            }),
            { mutate: g } = (0, t.n)({
              mutationFn: async (p) => {
                const b = await U.RateEvent(T, _, p);
                if (b != n.R)
                  throw new Error(`RateClanAnnouncement failed with ${b}`);
              },
              onMutate: (p) => S.setQueryData(h, p),
              onError: () => S.invalidateQueries({ queryKey: h }),
            });
          return {
            myVote: D,
            Vote: (p) => {
              !T || p == D || g(p);
            },
          };
        }
        function N(T, _) {
          if (T.length == 0) return;
          const U = _ ?? (0, v.X)("SetMyEventVotes");
          U &&
            T.forEach((O) =>
              U.setQueryData(L(O.gidAnnouncement, x.iA.accountid), O.vote),
            );
        }
      },
      80684: (ge, de, r) => {
        "use strict";
        r.d(de, { _: () => T });
        var n = r(7850),
          x = r(5827),
          a = r(40358),
          s = r(47875),
          t = r(54806),
          v = r(65946),
          L = r(1683),
          k = r(18210),
          F = r(98462),
          N = r.n(F);
        function T(_) {
          const { event: U } = _,
            O = (0, v.q3)(() => U.jsondata?.referenced_appids || []),
            S = (0, x.eG)(),
            h = (0, t.E)({
              queries: O.map((o) => (0, a.us)(S, { appid: o })),
              combine: (o) => ({
                bLoaded: o.every((p) => !p.isPending),
                data: o.map((p) => p.data),
              }),
            });
          if (!O.length || !h.bLoaded) return null;
          const D = h.data
              .flatMap((o) =>
                o?.store_url_path && o?.name
                  ? [`[url="${(0, s._)(o)}"]${o.name}[/url]`]
                  : [],
              )
              .join((0, k.we)("#EventDisplay_ReferencedApps_Joiner")),
            g = (0, k.Yp)("#EventDisplay_ReferencedApps", O.length, D);
          return (0, n.jsx)("div", {
            className: N().ReferencedApps,
            children: (0, n.jsx)(L.Zn, { text: g, event: U }),
          });
        }
      },
      88812: (ge, de, r) => {
        "use strict";
        r.d(de, { WC: () => k });
        var n = r(9046),
          x = r(5827),
          a = r(75233),
          s = r(80902),
          t = r(71742),
          v = r(68266),
          L = r(85741);
        function k(T, _, U, O, S) {
          const h = (0, a.jE)(),
            D = (0, x.eG)();
          return (0, s.I)(N(h, D, T, _, U, O, S)).data ?? void 0;
        }
        function F(T, _, U, O, S) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            T?.GID,
            _,
            U,
            O,
            S,
          ];
        }
        function N(T, _, U, O, S, h, D) {
          return {
            queryKey: F(U, O, S, h, D),
            enabled: U && !!U.GID,
            queryFn: async () => {
              if (!U) return null;
              let g = new Array();
              if (!U.BImageNeedScreenshotFallback(O, S)) {
                const o = await T.ensureQueryData((0, v.lx)(T, _, U, O, S, h));
                if ((o && g.push(o), h != n.wI.full)) {
                  const p = await T.ensureQueryData(
                    (0, v.lx)(T, _, U, O, S, n.wI.full),
                  );
                  p && g.push(p);
                }
              }
              if (!D)
                try {
                  const o = await T.ensureQueryData((0, L.dO)(T, _, U));
                  o && g.push(o);
                } catch (o) {
                  if (
                    ((0, t.wT)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${U?.GID} from clan ${U?.clanSteamID.GetAccountID()}`,
                    ),
                    g.length == 0)
                  )
                    throw o;
                }
              return g;
            },
          };
        }
      },
      68266: (ge, de, r) => {
        "use strict";
        r.d(de, { lx: () => O, m0: () => _ });
        var n = r(9046),
          x = r(55483),
          a = r(72609),
          s = r(21721),
          t = r(5827),
          v = r(40358),
          L = r(75233),
          k = r(80902),
          F = r(18210),
          N = r(53113),
          T = r(85741);
        function _(h, D, g, o = n.wI.full, p = !0) {
          const b = (0, L.jE)(),
            V = (0, t.eG)();
          return (0, k.I)(O(b, V, h, D, g, o, p)).data ?? void 0;
        }
        function U(h, D, g, o = n.wI.full, p = !0) {
          return ["useEventImageURLWithFallback", h?.GID, D, g, o, p];
        }
        function O(h, D, g, o, p, b = n.wI.full, V = !0) {
          return {
            queryKey: U(g, o, p, b, V),
            enabled: !!g?.GID,
            initialData: () => S(g, o, p, b, V),
            queryFn: async () => {
              if (!g) return null;
              let ne = S(g, o, p, b, V);
              if (ne) return ne;
              const se = await h.ensureQueryData(
                (0, x.ec)(g.clanSteamID.GetAccountID(), h),
              );
              if (o == "capsule") {
                let H = g.appid;
                if (
                  !H &&
                  se &&
                  ((se.is_creator_home && !se.is_ogg) || se.is_curator)
                )
                  if (g.jsondata?.referenced_appids?.length)
                    H = g.jsondata.referenced_appids[0];
                  else return se.avatar_full_url ?? null;
                const c = await h.ensureQueryData((0, v.AQ)(D, { appid: H }));
                return c
                  ? ((0, s.b0)(c, "main_capsule") ?? null)
                  : se?.avatar_full_url
                    ? se.avatar_full_url
                    : `${a.TS.STORE_ITEM_BASE_URL}steam/apps/${H}/header.jpg`;
              }
              return o == "background" &&
                se &&
                ((se.is_creator_home && !se.is_ogg) || se.is_curator)
                ? (se.creator_page_bg_url ?? null)
                : await h.ensureQueryData((0, T.dO)(h, D, g));
            },
          };
        }
        function S(h, D, g, o = n.wI.full, p = !0) {
          if (!h) return;
          const b = h.GetImageURL(D, g, o);
          if (b && b.trim().length > 0) return b;
          const V = F.A0.GetELanguageFallback(g);
          if (g != V) {
            const se = h.GetImageURL(D, V, o);
            if (se && se.trim().length > 0) return se;
          }
          if (D == "capsule") {
            let se = h.GetImageFromBeginningOfDescription(g, Number.MAX_VALUE);
            if (se && (p || (0, N.ZF)(se))) return se;
          }
        }
      },
      85741: (ge, de, r) => {
        "use strict";
        r.d(de, { Mg: () => k, dO: () => F });
        var n = r(55483),
          x = r(99412),
          a = r(72609),
          s = r(5827),
          t = r(40358),
          v = r(75233),
          L = r(80902);
        function k(T) {
          const _ = (0, v.jE)(),
            U = (0, s.eG)();
          return (0, L.I)(F(_, U, T)).data ?? void 0;
        }
        function F(T, _, U) {
          return {
            queryKey: N(U),
            enabled: !!U?.GID,
            queryFn: async () => {
              if (!U) return null;
              const O = U.appid
                  ? await T.ensureQueryData((0, t.OE)(_, { appid: U.appid }))
                  : null,
                S = await T.ensureQueryData(
                  (0, n.ec)(U.clanSteamID.GetAccountID(), T),
                );
              if (U.appid)
                if (O) {
                  if (
                    O.all_ages_screenshots &&
                    O.all_ages_screenshots.length > 0
                  ) {
                    let h = Number(
                      U.bOldAnnouncement
                        ? U.AnnouncementGID
                        : U.GID == null
                          ? 0
                          : U.GID,
                    );
                    return (
                      (h = h % O.all_ages_screenshots.length),
                      `${a.TS.STORE_ITEM_BASE_URL}${O.all_ages_screenshots[h].filename}`
                    );
                  }
                } else return "";
              return U.GetEventType() != x.ajI &&
                S &&
                ((S.is_creator_home && !S.is_ogg) || S.is_curator)
                ? (S.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function N(T) {
          return ["useFallbackArtworkScreenshot", T?.GID];
        }
      },
      28515: (ge, de, r) => {
        "use strict";
        r.d(de, { n: () => v });
        var n = r(7850),
          x = r(90626),
          a = r(59432);
        const s = x.createContext(void 0);
        function t(L) {
          const [k, F] = React.useState(L.rtServerNow),
            N = !!L.bHoldSeed;
          return (
            React.useEffect(() => {
              N || F(void 0);
            }, [N]),
            jsx(s.Provider, { value: k, children: L.children })
          );
        }
        function v() {
          return x.useContext(s) ?? (0, a.Gw)();
        }
      },
      90533: (ge, de, r) => {
        "use strict";
        r.d(de, { Eg: () => k, m4: () => S, EG: () => O, fm: () => g });
        var n = r(61639),
          x = r(75233),
          a = r(51614),
          s = r(90626),
          t = r(3166);
        async function v(o, p) {
          const b = new URLSearchParams();
          b.append("page_action", String(o)),
            b.append("snr", t.TS.SNR),
            b.append("uint_data", String(p)),
            b.append("str_data", L());
          try {
            await fetch(
              t.TS.STORE_BASE_URL + "events/ajaxreportnewshubstats/",
              { method: "POST", body: b },
            );
          } catch {}
        }
        function L() {
          if (t.TS.IN_CLIENT) return "steam";
          const o = navigator.userAgent;
          return /iPhone|iPad|iPod/i.test(o) ||
            (/Macintosh/i.test(o) && /Safari/i.test(o))
            ? "ios"
            : /Android/i.test(o)
              ? "android"
              : "";
        }
        var k = ((o) => (
          (o[(o.k_eDiscussions = 0)] = "k_eDiscussions"),
          (o[(o.k_eThumbsUp = 1)] = "k_eThumbsUp"),
          (o[(o.k_eClickThrough = 2)] = "k_eClickThrough"),
          (o[(o.k_eMuted = 3)] = "k_eMuted"),
          (o[(o.k_ePlayedVideo = 4)] = "k_ePlayedVideo"),
          (o[(o.k_eReminder_Opened = 5)] = "k_eReminder_Opened"),
          (o[(o.k_eReminder_MobilePush = 6)] = "k_eReminder_MobilePush"),
          (o[(o.k_eReminder_Email = 7)] = "k_eReminder_Email"),
          (o[(o.k_eReminder_CalendarApple = 8)] = "k_eReminder_CalendarApple"),
          (o[(o.k_eReminder_CalendarGoogle = 9)] =
            "k_eReminder_CalendarGoogle"),
          (o[(o.k_eReminder_CalendarOutlook = 10)] =
            "k_eReminder_CalendarOutlook"),
          (o[(o.k_eReminder_EmailUnverified = 11)] =
            "k_eReminder_EmailUnverified"),
          (o[(o.k_eReminder_MobilePushMissing = 12)] =
            "k_eReminder_MobilePushMissing"),
          o
        ))(k || {});
        const F = {
          nFutureViewedIndex: 0,
          nPastViewedIndex: 0,
          nLastRecordedFilter: 0,
        };
        function N() {
          return ["EventCalendarTrackingProgress"];
        }
        function T(o) {
          return o.getQueryData(N()) ?? F;
        }
        function _(o, p) {
          o.setQueryDefaults(N(), { staleTime: 1 / 0, gcTime: 1 / 0 }),
            o.setQueryData(N(), (b) => ({ ...(b ?? F), ...p }));
        }
        function U(o, p, b) {
          return clearTimeout(o), setTimeout(b, p);
        }
        function O(o) {
          v(n.Mc.ej, o);
        }
        function S(o, p) {
          const V = U(T(o).schFilter, 1e3, () => {
            p != T(o).nLastRecordedFilter &&
              (_(o, { nLastRecordedFilter: p }), v(n.Mc.Ms, p));
          });
          _(o, { schFilter: V });
        }
        function h(o, p, b, V) {
          let ne = 0,
            se = 0,
            J,
            H;
          for (const z of b) {
            const w = z.start_time > V;
            if ((z.unique_id == p && ((J = se), (H = z)), w)) ne++;
            else if (J !== void 0) break;
            se++;
          }
          if (J === void 0 || !H) return;
          const c = 500,
            m = T(o);
          if (J < ne) {
            const z = ne - J;
            if (m.nFutureViewedIndex >= z) return;
            const w = U(m.schFuture, c, () => {
              const I =
                Math.min(z, 4095) |
                (Math.min(ne, 255) << 12) |
                (Math.min(D(V), 2047) << 20);
              v(n.Mc.R, I);
            });
            _(o, { nFutureViewedIndex: z, schFuture: w });
            return;
          }
          const f = J - ne;
          if (m.nPastViewedIndex >= f) return;
          const E = Math.floor((V - H.start_time) / (24 * 3600)),
            $ = U(m.schPast, c, () => {
              const z =
                Math.min(f, 4095) |
                (Math.min(E, 255) << 12) |
                (Math.min(D(V), 2047) << 20);
              v(n.Mc.mZ, z);
            });
          _(o, { nPastViewedIndex: f, schPast: $ });
        }
        function D(o) {
          return Math.max(0, Math.floor(Date.now() / 1e3 - o));
        }
        function g() {
          const o = (0, x.jE)(),
            { mutate: p } = (0, a.n)({
              mutationFn: async (b) => {
                switch (b.type) {
                  case "interaction":
                    O(b.interaction);
                    break;
                  case "filter-change":
                    S(o, b.nFilterBitMask);
                    break;
                  case "event-viewed":
                    h(o, b.gidEvent, b.rgItemsInView, b.rtCalendarInit);
                    break;
                }
              },
            });
          return s.useMemo(
            () => ({
              RecordInteraction: (b) =>
                p({ type: "interaction", interaction: b }),
              RecordFilterChange: (b) =>
                p({ type: "filter-change", nFilterBitMask: b }),
              RecordEventViewed: (b, V, ne) =>
                p({
                  type: "event-viewed",
                  gidEvent: b,
                  rgItemsInView: V,
                  rtCalendarInit: ne,
                }),
            }),
            [p],
          );
        }
      },
      16369: (ge, de, r) => {
        "use strict";
        r.d(de, { H: () => a });
        var n = r(99412),
          x = r(72609);
        const a = () => (x.TS.EUNIVERSE === n.Rv ? 2581 : 45267781);
      },
      69909: (ge, de, r) => {
        "use strict";
        r.d(de, {
          Lc: () => p,
          Mr: () => H,
          Sk: () => b,
          Ue: () => ne,
          _t: () => V,
          ee: () => g,
          hh: () => N,
          mG: () => S,
          my: () => _,
          rF: () => se,
          us: () => J,
        });
        var n = r(16936),
          x = r(54357),
          a = r(80902),
          s = r(16369),
          t = r(36174),
          v = r(65946),
          L = r(92264),
          k = r(87937),
          F = r.n(k);
        const N = "America/Los_Angeles";
        function T(c, m) {
          return {
            queryKey: U(c, m),
            queryFn: () => (0, n.t3)(m),
            enabled: (0, s.H)() == c,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function _(c, m) {
          return (0, a.I)(T(c, m));
        }
        const U = (c, m) => ["useMeetSteamGetAvailability", c, m];
        function O(c, m, f) {
          return {
            queryKey: h(c, m, f),
            queryFn: async () => {
              const E = await (0, n.vd)(m);
              return E ? JSON.parse(E) : {};
            },
            enabled: (0, s.H)() == c && !!f,
          };
        }
        function S(c, m, f) {
          return (0, a.I)(O(c, m, f));
        }
        const h = (c, m, f) => ["useMeetSteamGetRegistrationDetails", c, m, f];
        function D(c) {
          return {
            queryKey: ["MeetSteamRegistrantInfo", c],
            queryFn: () => (0, n.Nc)(),
            enabled: !!c,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function g(c) {
          return (0, a.I)(D(c));
        }
        function o(c, m) {
          return {
            queryKey: ["useMeetSteamQRCode", c, m],
            queryFn: () => (0, n.EI)(c, m),
            enabled: !!m && !0,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function p(c, m) {
          return (0, a.I)(o(c, m)).data?.qrcode;
        }
        function b(c, m = Intl.DateTimeFormat().resolvedOptions().timeZone) {
          return c.location_type === "in_person"
            ? (c.in_person_time_zone ?? N)
            : m;
        }
        function V(c) {
          const m = (0, x.B)();
          return (0, v.q3)(() => ({
            rtime_start: c.rtime_start,
            rtime_end: c.rtime_end,
            sDisplayTimeZone: b(c, m),
          }));
        }
        function ne(c, m) {
          const f = F().unix(c),
            $ = F().unix(c).tz(m).utcOffset() - f.utcOffset();
          return new Date((c + $ * 60) * 1e3);
        }
        function se(c, m) {
          const f = ne(c, m),
            E = new Date();
          return f.getFullYear() == E.getFullYear()
            ? (0, L.$w)(f)
            : (0, L._9)(f);
        }
        function J(c, m) {
          const f = F().unix(c),
            $ = F().unix(c).tz(m).utcOffset() - f.utcOffset();
          return (0, L.KC)(c + $ * 60);
        }
        function H(c, m, f, E) {
          const $ = F().unix(c),
            w = F().unix(c).tz(f).utcOffset() - $.utcOffset(),
            I = F().unix(m),
            q = F().unix(m).tz(f),
            G = q.utcOffset() - I.utcOffset();
          return (
            (0, L.Vx)(c + w * 60, m + G * 60, !0) +
            (E ? "" : " " + q.format("z"))
          );
        }
      },
      5191: (ge, de, r) => {
        "use strict";
        r.d(de, { j: () => ae });
        var n = r(7850),
          x = r(55483),
          a = r(29522),
          s = r(40358),
          t = r(90533),
          v = r(72609),
          L = r(89926),
          k = r(28515),
          F = r(99412),
          N = r(64868),
          T = r(90626),
          _ = r(16346),
          U = r(40650),
          O = r(16412),
          S = r(18057),
          h = r(96538),
          D = r(36118),
          g = r(85599),
          o = r(71421),
          p = r(36707),
          b = r(18210),
          V = r(36174),
          ne = r(53113),
          se = r(6878),
          J = r.n(se),
          H = r(95695),
          c = r(56492),
          m = r(42937);
        function f(te) {
          return (
            (te.bHasVerifiedEmail && te.bFollowsByEmail) ||
            (te.bHasPushNotification && te.bFollowsByPush)
          );
        }
        function E(te) {
          const {
              eventModel: oe,
              rtNow: xe,
              notifyState: je,
              bOnlyShowIcon: Te,
              renderPanel: Ge,
              onRequestSignIn: ke,
              bSignedIn: ze,
              onTrack: Fe,
            } = te,
            [B, ee] = T.useState(!1),
            ye = T.useRef(null),
            Me = T.useRef(null),
            Je = T.useCallback(() => {
              Me.current?.Hide(), ee(!1);
            }, []),
            $e = () => {
              const we = {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bDisablePopTop: !0,
                bMatchWidth: !0,
                strClassName: (0, p.A)(
                  m.ReminderDialog,
                  m.ReminderOptions,
                  U.contextMenu,
                ),
              };
              (Me.current = (0, _.lX)(Ge(Je), ye.current, we)),
                Me.current.SetOnHideCallback(Je),
                ee(!0),
                Fe?.("opened");
            },
            P = (we) => {
              if (!ze) {
                ke?.();
                return;
              }
              B ? Je() : $e(), we.stopPropagation(), we.preventDefault();
            },
            Y = Te && !B,
            ve = f(je);
          return (oe.startTime !== void 0 && oe.startTime < xe) ||
            oe.BIsUnlistedEvent()
            ? null
            : (0, n.jsxs)("div", {
                className: (0, p.A)({
                  [m.ReminderCheckBox]: !0,
                  [J().ReminderCtn]: !0,
                  [m.IconMode]: Y,
                  [m.TextMode]: !Y,
                  ReminderSet: ve,
                  RemindMeWidget: !0,
                }),
                onClick: P,
                ref: ye,
                children: [
                  ve &&
                    (0, n.jsx)("div", {
                      className: m.RemindCheck,
                      children: (0, n.jsx)(D.Jlk, {}),
                    }),
                  Y &&
                    (0, n.jsx)("div", {
                      className: m.RemindBell,
                      children: (0, n.jsx)(D.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: m.ReminderDefault,
                    children: (0, b.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: m.ReminderOptions }),
                ],
              });
        }
        function $(te) {
          const {
              eventModel: oe,
              lang: xe,
              rtNow: je,
              notifyState: Te,
              bShowStartTime: Ge,
              bExpandLeft: ke,
              bOnlyShowIcon: ze,
              strCalendarEventTitle: Fe,
              onChangeNotify: B,
              onTrack: ee,
              fnHidePanel: ye,
            } = te,
            [Me, Je] = T.useState(!1),
            [$e, P] = T.useState(void 0),
            [Y, ve, De] = (0, N.uD)(),
            we = async (qe, st) => {
              if (!(!oe.GID || oe.GID == F.kFb)) {
                Je(!0);
                try {
                  await B(qe, st),
                    qe && ee?.(st == "email" ? "notify-email" : "notify-push");
                } catch (at) {
                  P(at instanceof Error ? at.message : String(at)), ve();
                }
                Je(!1);
              }
            },
            Qe = oe.jsondata.bSaleEnabled
              ? c.PH.k_eStoreSalePage
              : c.PH.k_eStoreView,
            Ce = (0, c.Bw)(oe, Qe, "forceAbsolute"),
            ut = () => {
              let qe = oe.GetSubTitleWithLanguageFallback(xe);
              qe = qe
                ? `${qe}


`
                : "";
              const st = oe.GetSummaryWithFallback(xe);
              return `${qe}${st}

${Ce}`;
            },
            tt = () => {
              const qe = encodeURIComponent(Fe),
                st = encodeURIComponent(ut()),
                at = oe.GetStartTimeAndDateUnixSeconds(),
                dt = z(at),
                Et = oe.GetEndTimeAndDateUnixSeconds() || at + V.Kp.PerHour,
                It = z(Et),
                bt =
                  (v.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                  `https://calendar.google.com/calendar/r/eventedit?text=${qe}&details=${st}&dates=${dt}/${It}`;
              return (0, ne.k2)(bt);
            },
            Mt = (qe) => {
              const st = oe.appid
                  ? "app/" + oe.appid
                  : "group/" + oe.clanSteamID.GetAccountID(),
                at = "l=" + (0, F.LgB)(xe);
              return `${v.TS.STORE_BASE_URL}${(0, c.LJ)()}/download/${st}/${qe}/${oe.GID}?${at}`;
            },
            {
              bHasVerifiedEmail: et,
              bHasPushNotification: lt,
              bFollowsByEmail: yt,
              bFollowsByPush: Wt,
            } = Te,
            ht = !1,
            ct = Ge && oe.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("div", {
                className: (0, p.A)(
                  m.ReminderCheckBox,
                  ze ? m.IconMode : m.TextMode,
                  "RemindMeWidget",
                ),
                onClick: ye,
                children: [
                  f(Te) &&
                    (0, n.jsx)("div", {
                      className: m.RemindCheck,
                      children: (0, n.jsx)(D.Jlk, {}),
                    }),
                  ze &&
                    (0, n.jsx)("div", {
                      className: m.RemindBell,
                      children: (0, n.jsx)(D.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: m.ReminderDefault,
                    children: (0, b.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: m.ReminderOpennedOptions }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: (0, p.A)(
                  m.FlexColumnContainer,
                  m.ReminderBackground,
                  ke && m.ReminderExpandsLeft,
                ),
                children: [
                  Me &&
                    (0, n.jsx)(g.t, {
                      className: m.RpcThrobber,
                      size: "xlarge",
                      position: "center",
                    }),
                  ct &&
                    (0, n.jsx)("div", {
                      className: m.FullStartTime,
                      children: (0, b.PP)(
                        "#EventDisplay_EventUpcoming_WithDateAndTime",
                        (0, b.TW)(
                          ct,
                          (0, V.Ct)(new Date(ct * 1e3), new Date(je * 1e3)),
                        ),
                        (0, S.yi)(ct, !0),
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: m.ReminderOptionsHeader,
                    children: (0, b.we)(
                      "#EventDisplay_Reminder_GetNotification_Via",
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, p.A)(m.ReminderOption, !et && m.Unverified),
                    children: [
                      (0, n.jsx)(o.he, {
                        className: m.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, b.we)(
                          et
                            ? "#EventReminder_NotifyByEmail_ttip"
                            : "#EventReminder_NotifyByEmail_Missing",
                        ),
                        children: (0, n.jsx)(O.Yh, {
                          label: (0, b.we)("#EventDisplay_Reminder_ViaEmail"),
                          disabled: !et,
                          checked: yt,
                          onChange: (qe) => we(qe, "email"),
                        }),
                      }),
                      !et &&
                        (0, n.jsx)("div", {
                          className: H.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: v.TS.STORE_BASE_URL + "account/",
                            target: v.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => ee?.("email-unverified"),
                            children: (0, b.we)(
                              "#EventReminder_NotifyByEmail_Missing_Add",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, p.A)(m.ReminderOption, !lt && m.Unverified),
                    children: [
                      (0, n.jsx)(o.he, {
                        className: m.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, b.we)(
                          lt
                            ? "#EventReminder_NotifyByMobile_ttip"
                            : "#EventReminder_NotifyByMobile_Missing",
                        ),
                        children: (0, n.jsx)(O.Yh, {
                          label: (0, b.we)(
                            "#EventDisplay_Reminder_ViaMobileApp",
                          ),
                          disabled: !lt,
                          checked: Wt,
                          onChange: (qe) => we(qe, "push"),
                        }),
                      }),
                      !lt &&
                        (0, n.jsx)("div", {
                          className: H.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: v.TS.STORE_BASE_URL + "mobile/?show=steamapp",
                            target: v.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => ee?.("push-missing"),
                            children: (0, b.we)(
                              "#EventReminder_NotifyByMobile_Install",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)(T.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: m.ReminderOptionsHeader,
                        children: (0, b.we)(
                          "#EventDisplay_Reminder_AddToCalendar",
                        ),
                      }),
                      (0, n.jsxs)("div", {
                        className: m.ReminderCalendarOptions,
                        children: [
                          (0, n.jsx)("a", {
                            className: m.ReminderOption,
                            href: Mt("ics"),
                            onClick: () => ee?.("calendar-apple"),
                            children: (0, b.we)(
                              "#EventDisplay_Reminder_AppleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: m.ReminderOption,
                            target: v.TS.IN_CLIENT ? void 0 : "_blank",
                            href: tt(),
                            onClick: () => ee?.("calendar-google"),
                            children: (0, b.we)(
                              "#EventDisplay_Reminder_GoogleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: m.ReminderOption,
                            href: Mt("outlook"),
                            onClick: () => ee?.("calendar-outlook"),
                            children: (0, b.we)(
                              "#EventDisplay_Reminder_OutlookCalendar_Short",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  ht &&
                    (0, n.jsx)("div", {
                      className: (0, p.A)(m.ReminderSettings, m.ReminderOption),
                      children: (0, b.we)("#EventDisplay_Reminder_Preferences"),
                    }),
                ],
              }),
              (0, n.jsx)(h.EN, {
                active: Y,
                children: (0, n.jsx)(h.KG, {
                  strTitle: (0, b.we)(
                    "#EventDisplay_Reminder_FollowEvent_Error",
                  ),
                  strDescription: (0, b.we)(
                    "#EventDisplay_Reminder_FollowEvent_ErrorDesc",
                  ),
                  closeModal: De,
                  children: $e,
                }),
              }),
            ],
          });
        }
        function z(te) {
          return new Date(te * 1e3)
            .toISOString()
            .replace(/[-:]/g, "")
            .replace(/\.\d{3}Z$/, "Z");
        }
        var w = r(26589),
          I = r(68312),
          q = r(75233),
          G = r(80902),
          C = r(76559),
          pe = r(67705),
          M = ((te) => (
            (te[(te.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (te[(te.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (te[(te.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
            te
          ))(M || {});
        const fe = "notificationaction/usercontactmethods";
        async function W() {
          const te = v.TS.STORE_BASE_URL + fe,
            oe = await fetch(te, { credentials: "include" });
          if (!oe.ok) throw new Error(`${te} answered ${oe.status}`);
          return await oe.json();
        }
        const re = { bHasValidatedEmail: !1, bHasPushNotification: !1 };
        function he() {
          const { data: te } = (0, G.I)(Le());
          return te ?? re;
        }
        function be(te) {
          return ["useUserContactMethods", te];
        }
        function Le() {
          return {
            queryKey: be(v.iA.accountid),
            queryFn: W,
            enabled: !!v.iA.logged_in,
            initialData: () => {
              const te = (0, pe.Fd)("notificationstore", "application_config");
              return Re(te) ? Ne(te) : void 0;
            },
          };
        }
        function Ne(te) {
          return {
            bHasValidatedEmail: !!te.email_validated,
            bHasPushNotification: (te.mobile_device_count ?? 0) > 0,
          };
        }
        function Re(te) {
          const oe = te;
          return (
            !!oe &&
            typeof oe == "object" &&
            typeof oe.mobile_device_count == "number"
          );
        }
        function Pe(te, oe) {
          const xe = (0, q.jE)(),
            je = (0, I.KV)(),
            { data: Te } = (0, G.I)((0, w.gg)(te, xe, je)),
            Ge = he(),
            ke = Q(Te, oe);
          return {
            bHasVerifiedEmail: Ge.bHasValidatedEmail,
            bHasPushNotification: Ge.bHasPushNotification,
            bFollowsByEmail: (ke & M.k_ENotifyFlagByEmail) != 0,
            bFollowsByPush: (ke & M.k_ENotifyFlagByPush) != 0,
          };
        }
        function Ie(te, oe) {
          const xe = (0, q.jE)(),
            je = (0, I.KV)(),
            Te = (0, w.gg)(te, xe, je);
          return async (Ge, ke) => {
            if (!oe) return;
            const ze = xe.getQueryData(Te.queryKey),
              Fe =
                ke == "email" ? M.k_ENotifyFlagByEmail : M.k_ENotifyFlagByPush,
              B = Q(ze, oe),
              ee = Ge ? B | Fe : B & ~Fe;
            await ue(te, oe, ee),
              await xe.invalidateQueries({ queryKey: Te.queryKey });
          };
        }
        function Q(te, oe) {
          const xe = oe ? (te?.event_followed?.indexOf(oe) ?? -1) : -1;
          return xe == -1 ? 0 : (te?.event_followed_flags?.[xe] ?? 0);
        }
        async function ue(te, oe, xe) {
          const je = xe == 0,
            Ge = `${`${v.TS.STORE_BASE_URL}events/`}${je ? "unfolloworunignoreevent" : "followorignoreevent"}`,
            ke = new URLSearchParams();
          ke.append("sessionid", (0, pe.KC)()),
            ke.append("ignore", "false"),
            ke.append("gid", oe),
            ke.append("notification_flag", "" + xe),
            ke.append("clan_accountid", "" + te);
          const ze = await fetch(Ge, {
            method: "POST",
            body: ke,
            credentials: "include",
          });
          if (!ze.ok) throw new Error(`${Ge} answered ${ze.status}`);
        }
        function K(te) {
          const { eventModel: oe, bOnlyShowIcon: xe, onTrack: je } = te,
            Te = (0, k.n)(),
            Ge = Pe(oe.clanSteamID.GetAccountID(), oe.GID),
            { elDialogElement: ke, fnShowLogonDialog: ze } = (0, L.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(E, {
                eventModel: oe,
                rtNow: Te,
                notifyState: Ge,
                bOnlyShowIcon: xe,
                bSignedIn: !!v.iA.logged_in || v.TS.IN_CLIENT,
                onRequestSignIn: ze,
                onTrack: je,
                renderPanel: (Fe) =>
                  (0, n.jsx)(me, { ...te, rtNow: Te, fnHidePanel: Fe }),
              }),
              ke,
            ],
          });
        }
        function me(te) {
          const {
              eventModel: oe,
              lang: xe,
              strHubName: je,
              bShowStartTime: Te,
              bExpandLeft: Ge,
              bOnlyShowIcon: ke,
              onTrack: ze,
              rtNow: Fe,
              fnHidePanel: B,
            } = te,
            ee = oe.clanSteamID.GetAccountID(),
            ye = Pe(ee, oe.GID),
            Me = Ie(ee, oe.GID),
            Je = oe.GetNameWithFallback(xe) ?? "",
            $e = je ? `${je}: ${Je}` : Je;
          return (0, n.jsx)($, {
            eventModel: oe,
            lang: xe,
            rtNow: Fe,
            notifyState: ye,
            strCalendarEventTitle: $e,
            bShowStartTime: Te,
            bExpandLeft: Ge,
            bOnlyShowIcon: ke,
            onChangeNotify: Me,
            onTrack: ze,
            fnHidePanel: B,
          });
        }
        function ae(te) {
          const {
              eventModel: oe,
              lang: xe,
              bShowStartTime: je,
              bExpandLeft: Te,
              bOnlyShowIcon: Ge,
            } = te,
            ke = (0, t.fm)(),
            ze = Ee(oe);
          return (0, n.jsx)(K, {
            eventModel: oe,
            lang: xe,
            strHubName: ze,
            bShowStartTime: je,
            bExpandLeft: Te,
            bOnlyShowIcon: Ge,
            onTrack: (Fe) => ke.RecordInteraction(Se[Fe]),
          });
        }
        function Ee(te) {
          const oe = te.appid || void 0,
            xe = (0, a.$5)(oe),
            { data: je } = (0, s.J$)(xe),
            { data: Te } = (0, x.TB)(
              oe ? void 0 : te.clanSteamID.GetAccountID(),
            );
          return (oe ? je?.name : Te?.group_name) || void 0;
        }
        const Se = {
          opened: t.Eg.k_eReminder_Opened,
          "notify-email": t.Eg.k_eReminder_Email,
          "notify-push": t.Eg.k_eReminder_MobilePush,
          "email-unverified": t.Eg.k_eReminder_EmailUnverified,
          "push-missing": t.Eg.k_eReminder_MobilePushMissing,
          "calendar-apple": t.Eg.k_eReminder_CalendarApple,
          "calendar-google": t.Eg.k_eReminder_CalendarGoogle,
          "calendar-outlook": t.Eg.k_eReminder_CalendarOutlook,
        };
      },
      91778: (ge, de, r) => {
        "use strict";
        r.d(de, { k: () => t });
        var n = r(7850),
          x = r(90626),
          a = r(69168);
        const s = x.lazy(() =>
          Promise.all([
            r.e(5858),
            r.e(58612),
            r.e(98028),
            r.e(8319),
            r.e(34178),
            r.e(98656),
          ])
            .then(r.bind(r, 21637))
            .then((v) => ({ default: v.ShareEventDialogBody })),
        );
        function t(v) {
          const { bActive: L, ...k } = v;
          return (0, n.jsx)(a.E, {
            active: L,
            children: (0, n.jsx)(x.Suspense, {
              fallback: null,
              children: (0, n.jsx)(s, { ...k }),
            }),
          });
        }
      },
      73644: (ge, de, r) => {
        "use strict";
        r.d(de, {
          D1: () => ne,
          Nk: () => o,
          k6: () => m,
          lS: () => D,
          lz: () => p,
        });
        var n = r(7850),
          x = r(32093),
          a = r(78192),
          s = r(72609),
          t = r(40358),
          v = r(90626),
          L = r(95695),
          k = r.n(L),
          F = r(36118),
          N = r(71421),
          T = r(36707),
          _ = r(18210),
          U = r(53113),
          O = r(19890),
          S = r.n(O),
          h = r(4515);
        function D(f) {
          const { appid: E } = f;
          return (0, n.jsx)("div", {
            className: S().AppSocialLinksCtn,
            children: (0, n.jsx)(g, { appid: E }),
          });
        }
        function g(f) {
          const { appid: E } = f,
            { data: $ } = (0, t.bg)({ appid: E });
          return !$ || $.length == 0
            ? null
            : (0, n.jsx)(b, {
                strTitle: (0, _.we)("#EventDisplay_SocialTitle"),
                id: "" + E,
                rgSocialMedia: $,
              });
        }
        function o(f) {
          return (0, v.useMemo)(
            () =>
              f
                ? f.map((E) => {
                    const $ = (0, h.v)(E.type);
                    return $ == a.jL.EK || $ == a.jL.Or
                      ? { link_type: $, text: E.link }
                      : { link_type: $, url: E.link };
                  })
                : [],
            [f],
          );
        }
        function p(f) {
          const { gidClanEvent: E, rgSocial: $, bIsCreatorHomeEvent: z } = f,
            w = o($);
          if (w.length == 0) return null;
          const I = z
            ? (0, _.we)("#EventDisplay_Sale_SocialTitle_Dev")
            : (0, _.we)("#EventDisplay_Sale_SocialTitle");
          return (0, n.jsx)(b, { strTitle: I, id: E, rgSocialMedia: w });
        }
        function b(f) {
          const { strTitle: E, id: $, rgSocialMedia: z } = f;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: (0, T.A)(
                  k().EventEditorTextTitle,
                  "EventEditorTextTitle",
                ),
                children: E,
              }),
              (0, n.jsx)(ne, { id: $, rgSocialMedia: z }),
            ],
          });
        }
        const V = [
          a.jL.EK,
          a.jL.$3,
          a.jL.M0,
          a.jL.Ow,
          a.jL.Ib,
          a.jL.qe,
          a.jL.Lk,
        ];
        function ne(f) {
          const { id: E, rgSocialMedia: $, className: z } = f,
            w = s.TS.EREALM === x.TU.k_ESteamRealmChina;
          return (0, n.jsx)("div", {
            className: (0, T.A)(S().AppSocialLinks, z),
            children: $.filter(
              (I) => !w || V.includes(I.link_type || a.jL.I0),
            ).map((I) =>
              I.url
                ? (0, n.jsx)(
                    se,
                    { social: I },
                    "app_social_link_" + E + "_" + I.link_type,
                  )
                : (0, n.jsx)(
                    J,
                    { social: I },
                    "app_social_text_" + E + "_" + I.link_type + "_" + I.text,
                  ),
            ),
          });
        }
        function se(f) {
          const { social: E } = f;
          return E.url
            ? (0, n.jsx)("a", {
                href: (0, U.NT)(E.url, !0),
                target: s.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, n.jsx)(N.he, {
                  toolTipContent: E.url,
                  children: (0, n.jsx)(H, { social: E }),
                }),
              })
            : null;
        }
        function J(f) {
          const { social: E } = f;
          return (0, n.jsxs)("div", {
            className: S().AppSocialLinkWithText,
            children: [
              (0, n.jsx)(N.he, {
                toolTipContent: E.text,
                children: (0, n.jsx)(H, { social: E }),
              }),
              (0, n.jsx)("div", {
                className: S().AppSocialText,
                children: E.text,
              }),
            ],
          });
        }
        function H(f) {
          const { social: E } = f;
          return (0, n.jsx)(m, {
            linkType: E.link_type || a.jL.I0,
            className: S().AppSocialLinkIcon,
          });
        }
        const c = {
          [a.jL.lQ]: F.agV,
          [a.jL.GO]: F.ZnA,
          [a.jL.jG]: F.oy,
          [a.jL.F7]: F.ofN,
          [a.jL.Eb]: F.Bki,
          [a.jL.EK]: F.$vK,
          [a.jL.M0]: F.$vK,
          [a.jL.$3]: F.$vK,
          [a.jL.a$]: F.OSJ,
          [a.jL.Ow]: F.nm_,
          [a.jL.Ib]: F.tIO,
          [a.jL.uw]: F.Vt2,
          [a.jL.sP]: F.Vgk,
          [a.jL.u5]: F.VSd,
          [a.jL.db]: F.ccb,
          [a.jL.Yu]: F.rNt,
          [a.jL.JN]: F.g$j,
          [a.jL.EM]: F.BQz,
          [a.jL.Or]: F.jdP,
          [a.jL.qe]: F.bKN,
          [a.jL.H5]: F.sDU,
          [a.jL.Xm]: F.MbF,
          [a.jL.DB]: F.emH,
          [a.jL.Lk]: F.Yoo,
        };
        function m(f) {
          const { linkType: E, ...$ } = f,
            z = c[E];
          return z ? (0, n.jsx)(z, { ...$ }) : null;
        }
      },
      4515: (ge, de, r) => {
        "use strict";
        r.d(de, { X: () => t, v: () => a });
        var n = r(78192);
        const x = {
          discord_server: n.jL.Eb,
          youtube: n.jL.lQ,
          facebook: n.jL.GO,
          twitter: n.jL.jG,
          twitch: n.jL.F7,
          reddit: n.jL.uw,
          instagram: n.jL.sP,
          tumblr: n.jL.u5,
          qq: n.jL.EK,
          qqlink: n.jL.M0,
          qqchannel: n.jL.$3,
          bilibili: n.jL.Ow,
          weibo: n.jL.Ib,
          wechat: n.jL.Or,
          tieba: n.jL.db,
          tiktok: n.jL.Yu,
          douyin: n.jL.qe,
          bluesky: n.jL.H5,
          mastodon: n.jL.Xm,
          threads: n.jL.DB,
          vk: n.jL.a$,
          telegram: n.jL.JN,
          linkedin: n.jL.EM,
          rednote: n.jL.Lk,
        };
        function a(v) {
          return x[v] ?? n.jL.I0;
        }
        const s = new Map(Object.entries(x).map(([v, L]) => [L, v]));
        function t(v) {
          return s.get(v);
        }
      },
      16936: (ge, de, r) => {
        "use strict";
        r.d(de, {
          t3: () => F,
          EI: () => U,
          Nc: () => _,
          vd: () => T,
          _V: () => N,
          kR: () => O,
        });
        var n = r(72609);
        const x = "meetsteam/availability",
          a = "meetsteam/registrations",
          s = "meetsteam/registrationdetails",
          t = "meetsteam/updateregistration",
          v = "meetsteam/registrantinfo",
          L = "meetsteam/attendance_qrcode";
        async function k(S, h) {
          const D = new URL(n.TS.STORE_BASE_URL + S);
          for (const [o, p] of Object.entries(h)) D.searchParams.set(o, p);
          const g = await fetch(D, { credentials: "include" });
          if (!g.ok) throw new Error(`${D} answered ${g.status}`);
          return await g.json();
        }
        async function F(S) {
          return (await k(x, { gid: S })).availability ?? [];
        }
        async function N(S) {
          return (await k(a, { gid: S })).registrations ?? [];
        }
        async function T(S) {
          return (await k(s, { gid: S })).strJSONData ?? "";
        }
        async function _() {
          return (
            (await k(v, {})).info ?? { realname: "", email: "", partners: [] }
          );
        }
        async function U(S, h) {
          return await k(L, { gid: S, accountid: String(h) });
        }
        async function O(S) {
          const h = n.TS.STORE_BASE_URL + t,
            D = new URLSearchParams({
              gid: S.gid,
              group_id: String(S.group_id),
              session_id: String(S.session_id),
              guest_count: String(S.guest_count),
              jsondata: S.jsondata,
              skip_email: S.skip_email ? "1" : "0",
            }),
            g = await fetch(h, {
              method: "POST",
              credentials: "include",
              body: D,
            });
          if (!g.ok) throw new Error(`${h} answered ${g.status}`);
          return (await g.json()).success;
        }
      },
      90711: (ge, de, r) => {
        "use strict";
        r.d(de, {
          DK: () => Yt,
          hW: () => Me,
          Lw: () => Fe,
          ku: () => $e,
          Mn: () => ee,
          sW: () => x,
          nn: () => n,
        });
        var n = {};
        r.r(n), r.d(n, { Tq: () => F, TC: () => g, fe: () => S });
        var x = {};
        r.r(x), r.d(x, { rx: () => J, XP: () => H });
        var a = r(80613),
          s = r.n(a),
          t = r(75245),
          v = r(35038);
        const L = 0,
          k = 1,
          F = 0,
          N = 1,
          T = 2,
          _ = 3,
          U = 4,
          O = 5,
          S = 6,
          h = 7,
          D = 8,
          g = 9,
          o = 10,
          p = 11,
          b = 12,
          V = 13,
          ne = 14,
          se = 15,
          J = 0,
          H = 1,
          c = 2;
        function m(He) {
          return "unknown EBroadcastChatPermission ( " + He + " )";
        }
        function f(He) {
          return "unknown EBroadcastWatchLocation ( " + He + " )";
        }
        function E(He) {
          return "unknown EBroadcastChatBan ( " + He + " )";
        }
        function $(He) {
          return "unknown EBroadcastRestriction ( " + He + " )";
        }
        class z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.permission || t.Sg(z.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    cellid: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    rtmp_token: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    thumbnail_upload: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    sysid: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    allow_webrtc: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = t.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(z.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new z();
            return z.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(z.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(z.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class w extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.broadcast_id || t.Sg(w.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_upload_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_interval_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    heartbeat_interval_seconds: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = t.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(w.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new w();
            return w.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(w.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(w.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Response";
          }
        }
        class I extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.broadcast_id || t.Sg(I.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = t.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(I.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new I();
            return I.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(I.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(I.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Request";
          }
        }
        class q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new q();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new q();
            return q.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class G extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.broadcast_id || t.Sg(G.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    cellid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    as_rtmp: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    delay_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtmp_token: {
                      n: 5,
                      d: "0",
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    upload_ip_address: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                    sysid: { n: 8, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(G.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new G();
            return G.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(G.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(G.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class C extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.upload_token || t.Sg(C.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    enable_replay: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    http_address: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = t.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(C.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new C();
            return C.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(C.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(C.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.broadcast_id || t.Sg(pe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_token: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    http_address: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    heartbeat_interval_seconds: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_rtmp: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(pe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new pe();
            return pe.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(pe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(pe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastUploadStarted_Notification";
          }
        }
        class M extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.steamid || t.Sg(M.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = t.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(M.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new M();
            return M.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(M.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(M.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Request";
          }
        }
        class fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.gameid || t.Sg(fe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    gameid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_publisher: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    thumbnail_url: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_uploading: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    duration: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 12, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_capturing_vod: {
                      n: 13,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_store_whitelisted: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = t.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(fe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new fe();
            return fe.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(fe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(fe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Response";
          }
        }
        class W extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.steamid || t.Sg(W.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(W.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new W();
            return W.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(W.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(W.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Request";
          }
        }
        class re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.thumbnail_url || t.Sg(re.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    thumbnail_url: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    duration: { n: 4, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(re.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new re();
            return re.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(re.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(re.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Response";
          }
        }
        class he extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.steamid || t.Sg(he.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    existing_broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_cell: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    watch_location: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    is_webrtc: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(he.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new he();
            return he.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(he.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(he.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class be extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.response || t.Sg(be.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    response: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    mpd_url: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    gameid: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 8, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    viewer_token: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    hls_m3u8_master_url: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    heartbeat_interval: {
                      n: 12,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    thumbnail_url: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_webrtc: { n: 14, br: t.qM.readBool, bw: t.gp.writeBool },
                    webrtc_session_id: {
                      n: 15,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_offer_sdp: {
                      n: 16,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    webrtc_turn_server: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 18, br: t.qM.readBool, bw: t.gp.writeBool },
                    duration: {
                      n: 19,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    cdn_auth_url_parameters: {
                      n: 20,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(be.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new be();
            return be.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(be.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(be.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function Le(He) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            He +
            " )"
          );
        }
        class Ne extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.steamid || t.Sg(Ne.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    representation: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = t.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ne.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Ne();
            return Ne.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ne.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ne.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class Re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.steamid || t.Sg(Re.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = t.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Re.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Re();
            return Re.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Re.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Re.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class Pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.steamid || t.Sg(Pe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    approval_response: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Pe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Pe();
            return Pe.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Pe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Pe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class Ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.success || t.Sg(Ie.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    success: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ie.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Ie();
            return Ie.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ie.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ie.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class Q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.permission || t.Sg(Q.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    game_data_config: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Q.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Q();
            return Q.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Q.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Q.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Request";
          }
        }
        class ue extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new ue();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ue();
            return ue.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Response";
          }
        }
        class K extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.steamid || t.Sg(K.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    state: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(K.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new K();
            return K.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(K.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(K.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function me(He) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            He +
            " )"
          );
        }
        class ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.broadcast_id || t.Sg(ae.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ae.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ae();
            return ae.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ae.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ae.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class Ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.broadcast_id || t.Sg(Ee.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_relay_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    too_many_poor_uploads: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ee.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Ee();
            return Ee.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ee.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ee.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class Se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.broadcast_id || t.Sg(Se.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Se.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Se();
            return Se.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Se.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Se.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              te.prototype.broadcast_id || t.Sg(te.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = t.w0(te.M())), te.sm_mbf;
          }
          toObject(e = !1) {
            return te.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(te.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(te.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new te();
            return te.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(te.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(te.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.broadcast_channel_id || t.Sg(oe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_channel_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_channel_avatar: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(oe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new oe();
            return oe.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class xe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.thumbnail_upload_token || t.Sg(xe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    thumbnail_upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_data: {
                      n: 3,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    thumbnail_width: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = t.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(xe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new xe();
            return xe.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(xe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(xe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class je extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.broadcast_upload_id || t.Sg(je.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    broadcast_upload_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = t.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(je.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new je();
            return je.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(je.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(je.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class Te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.broadcaster_steamid || t.Sg(Te.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Te.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Te();
            return Te.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Te.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Te.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class Ge extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.broadcast_id || t.Sg(Ge.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = t.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ge.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Ge();
            return Ge.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ge.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ge.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
          }
        }
        class ke extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.steamid || t.Sg(ke.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_ip: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_cell: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = t.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ke.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ke();
            return ke.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ke.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ke.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class ze extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.chat_id || t.Sg(ze.M()),
              a.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ze.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ze();
            return ze.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ze.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ze.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class Fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.chat_id || t.Sg(Fe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    message: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    instance_id: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    country_code: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = t.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Fe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Fe();
            return Fe.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Fe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Fe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class B extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.persona_name || t.Sg(B.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    persona_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    in_game: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    result: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    cooldown_time_seconds: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = t.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(B.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new B();
            return B.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(B.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(B.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.chat_id || t.Sg(ee.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ee.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ee();
            return ee.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ee.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ee.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.result || t.Sg(ye.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    result: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    chat_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ye.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ye();
            return ye.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ye.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ye.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class Me extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.chat_id || t.Sg(Me.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    muted: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Me.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Me();
            return Me.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Me.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Me.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class Je extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Je();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Je();
            return Je.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class $e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.chat_id || t.Sg($e.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = t.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT($e.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new $e();
            return $e.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj($e.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0($e.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Request";
          }
        }
        class P extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new P();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new P();
            return P.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class Y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.chat_id || t.Sg(Y.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Y.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Y();
            return Y.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Y.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Y.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.persona_names || t.Sg(ve.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: { persona_names: { n: 1, c: De, r: !0, q: !0 } },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ve.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ve();
            return ve.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ve.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ve.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class De extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.steam_id || t.Sg(De.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    steam_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    persona: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(De.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new De();
            return De.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(De.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(De.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
          }
        }
        class we extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.steamid || t.Sg(we.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    first_segment: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_segments: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    clip_description: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = t.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(we.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new we();
            return we.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(we.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(we.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class Qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.broadcast_clip_id || t.Sg(Qe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = t.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Qe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Qe();
            return Qe.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Qe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Qe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Response";
          }
        }
        class Ce extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.broadcast_clip_id || t.Sg(Ce.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = t.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ce.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Ce();
            return Ce.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ce.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ce.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Request";
          }
        }
        class ut extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new ut();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ut();
            return ut.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Response";
          }
        }
        class tt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.broadcast_clip_id || t.Sg(tt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    start_time: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_time: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(tt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new tt();
            return tt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(tt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(tt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Request";
          }
        }
        class Mt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Mt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Mt();
            return Mt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.broadcast_clip_id || t.Sg(et.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(et.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new et();
            return et.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(et.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(et.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class lt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.broadcast_clip_id || t.Sg(lt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    video_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    accountid_broadcaster: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    accountid_clipmaker: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    start_time: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_milliseconds: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = t.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(lt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new lt();
            return lt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(lt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(lt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Response";
          }
        }
        class yt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.broadcast_permission || t.Sg(yt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    update_token: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    broadcast_delay: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 6,
                      d: L,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 8,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 12,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = t.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(yt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new yt();
            return yt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(yt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(yt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Request";
          }
        }
        class Wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Wt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Wt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Wt();
            return Wt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Response";
          }
        }
        class ht extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.ip || t.Sg(ht.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    ip: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = t.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ht.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ht();
            return ht.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ht.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ht.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class ct extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.broadcast_permission || t.Sg(ct.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    rtmp_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rtmp_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_delay: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 7,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 9,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 12,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = t.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ct.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ct();
            return ct.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ct.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ct.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.row_limit || t.Sg(qe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    row_limit: {
                      n: 1,
                      d: 100,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    start_time: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    session_id: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(qe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new qe();
            return qe.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(qe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(qe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class st extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.upload_stats || t.Sg(st.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: { upload_stats: { n: 1, c: at, r: !0, q: !0 } },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = t.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(st.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new st();
            return st.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(st.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(st.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class at extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.upload_result || t.Sg(at.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    upload_result: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_stopped: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    seconds_uploaded: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    max_viewers: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_x: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    avg_bandwidth: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_bytes: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    total_unique_viewers: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_seconds_watched: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_started: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 13,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    local_address: {
                      n: 14,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    remote_address: {
                      n: 15,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    frames_per_second: {
                      n: 16,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    num_representations: {
                      n: 17,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    app_name: {
                      n: 18,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 19, br: t.qM.readBool, bw: t.gp.writeBool },
                    session_id: {
                      n: 20,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = t.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(at.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new at();
            return at.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(at.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(at.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.upload_id || t.Sg(dt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    upload_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = t.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(dt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new dt();
            return dt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(dt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(dt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class Et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.viewer_stats || t.Sg(Et.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    viewer_stats: { n: 1, c: It, r: !0, q: !0 },
                    country_stats: { n: 2, c: bt, r: !0, q: !0 },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = t.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Et.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Et();
            return Et.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Et.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Et.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class It extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.time || t.Sg(It.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = t.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(It.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new It();
            return It.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(It.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(It.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.country_code || t.Sg(bt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    country_code: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = t.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(bt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new bt();
            return bt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(bt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(bt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class pt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.webrtc_session_id || t.Sg(pt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    started: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    offer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    resolution_x: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    fps: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = t.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(pt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new pt();
            return pt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(pt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(pt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Request";
          }
        }
        class Rt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Rt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Rt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Rt();
            return Rt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class Ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.webrtc_session_id || t.Sg(Ve.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = t.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ve.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Ve();
            return Ve.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ve.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ve.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class Gt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Gt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Gt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Gt();
            return Gt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class xt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.broadcaster_steamid || t.Sg(xt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = t.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(xt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new xt();
            return xt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(xt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(xt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Request";
          }
        }
        class kt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return kt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new kt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new kt();
            return kt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class St extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.sdp_mid || t.Sg(St.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    sdp_mid: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sdp_mline_index: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    candidate: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = t.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(St.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new St();
            return St.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(St.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(St.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTC_Candidate";
          }
        }
        class jt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.webrtc_session_id || t.Sg(jt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 2, c: St },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = t.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(jt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new jt();
            return jt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(jt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(jt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Request";
          }
        }
        class Nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Nt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Nt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Nt();
            return Nt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Response";
          }
        }
        class wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wt.prototype.broadcaster_steamid || t.Sg(wt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: St },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = t.w0(wt.M())), wt.sm_mbf;
          }
          toObject(e = !1) {
            return wt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(wt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(wt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new wt();
            return wt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(wt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(wt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
          }
        }
        class Z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Z();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Z();
            return Z.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class X extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.broadcaster_steamid || t.Sg(X.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate_generation: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(X.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new X();
            return X.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(X.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(X.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.candidate_generation || t.Sg(ie.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    candidate_generation: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    candidates: { n: 2, c: St, r: !0, q: !0 },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ie.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new ie();
            return ie.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ie.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ie.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class Oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.broadcast_session_id || t.Sg(Oe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = t.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Oe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Oe();
            return Oe.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class Ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.cellid || t.Sg(Ae.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    cellid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ae.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Ae();
            return Ae.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ae.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ae.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class Ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.turn_server || t.Sg(Ye.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    turn_server: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = t.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ye.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Ye();
            return Ye.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ye.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ye.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Response";
          }
        }
        class _e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.broadcast_session_id || t.Sg(_e.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    turn_server: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(_e.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new _e();
            return _e.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(_e.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(_e.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.broadcast_session_id || t.Sg(nt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = t.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(nt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new nt();
            return nt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(nt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(nt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class it extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.broadcast_session_id || t.Sg(it.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = t.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(it.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new it();
            return it.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(it.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(it.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class Dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Dt.prototype.broadcast_session_id || t.Sg(Dt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: St },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = t.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(e = !1) {
            return Dt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Dt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Dt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              A = new Dt();
            return Dt.deserializeBinaryFromReader(A, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Dt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Dt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var Yt;
        ((He) => {
          function e(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, v.I8)(z, Be, Ue),
              w,
              { ePrivilege: 1 },
            );
          }
          He.BeginBroadcastSession = e;
          function i(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, v.I8)(I, Be, Ue),
              q,
              { ePrivilege: 1 },
            );
          }
          He.EndBroadcastSession = i;
          function A(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, v.I8)(G, Be, Ue),
              C,
              { ePrivilege: 1 },
            );
          }
          He.StartBroadcastUpload = A;
          function Xt(We, Be) {
            return We.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, v.I8)(je, Be),
              { ePrivilege: 1 },
            );
          }
          He.NotifyBroadcastUploadStop = Xt;
          function en(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, v.I8)(he, Be, Ue),
              be,
              { ePrivilege: 2 },
            );
          }
          He.WatchBroadcast = en;
          function rn(We, Be) {
            return We.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, v.I8)(Ne, Be),
              { ePrivilege: 2 },
            );
          }
          He.HeartbeatBroadcast = rn;
          function un(We, Be) {
            return We.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, v.I8)(Re, Be),
              { ePrivilege: 2 },
            );
          }
          He.StopWatchingBroadcast = un;
          function cn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, v.I8)(M, Be, Ue),
              fe,
              { ePrivilege: 2 },
            );
          }
          He.GetBroadcastStatus = cn;
          function dn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, v.I8)(W, Be, Ue),
              re,
              { ePrivilege: 2 },
            );
          }
          He.GetBroadcastThumbnail = dn;
          function gn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, v.I8)(Pe, Be, Ue),
              Ie,
              { ePrivilege: 1 },
            );
          }
          He.InviteToBroadcast = gn;
          function fn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, v.I8)(Q, Be, Ue),
              ue,
              { ePrivilege: 1 },
            );
          }
          He.SendBroadcastStateToServer = fn;
          function zn(We, Be) {
            return We.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, v.I8)(Ge, Be),
              { ePrivilege: 1 },
            );
          }
          He.NotifyBroadcastSessionHeartbeat = zn;
          function Ct(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, v.I8)(ke, Be, Ue),
              ze,
              { ePrivilege: 2 },
            );
          }
          He.GetBroadcastChatInfo = Ct;
          function yn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, v.I8)(Fe, Be, Ue),
              B,
              { ePrivilege: 3 },
            );
          }
          He.PostChatMessage = yn;
          function vn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, v.I8)(ee, Be, Ue),
              ye,
              { ePrivilege: 1 },
            );
          }
          He.UpdateChatMessageFlair = vn;
          function Tt(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, v.I8)(Me, Be, Ue),
              Je,
              { ePrivilege: 3 },
            );
          }
          He.MuteBroadcastChatUser = Tt;
          function hn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, v.I8)($e, Be, Ue),
              P,
              { ePrivilege: 3 },
            );
          }
          He.RemoveUserChatText = hn;
          function sn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, v.I8)(Y, Be, Ue),
              ve,
              { ePrivilege: 1 },
            );
          }
          He.GetBroadcastChatUserNames = sn;
          function tn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, v.I8)(we, Be, Ue),
              Qe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.StartBuildClip = tn;
          function an(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, v.I8)(Ce, Be, Ue),
              ut,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetBuildClipStatus = an;
          function pn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, v.I8)(tt, Be, Ue),
              Mt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.SetClipDetails = pn;
          function Vt(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, v.I8)(et, Be, Ue),
              lt,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetClipDetails = Vt;
          function qt(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, v.I8)(yt, Be, Ue),
              Wt,
              { ePrivilege: 1 },
            );
          }
          He.SetRTMPInfo = qt;
          function _t(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, v.I8)(ht, Be, Ue),
              ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          He.GetRTMPInfo = _t;
          function Mn(We, Be) {
            return We.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, v.I8)(_e, Be),
              { ePrivilege: 1 },
            );
          }
          He.NotifyWebRTCHaveTURNServer = Mn;
          function ln(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, v.I8)(pt, Be, Ue),
              Rt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCStartResult = ln;
          function En(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, v.I8)(Ve, Be, Ue),
              Gt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCStopped = En;
          function bn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, v.I8)(xt, Be, Ue),
              kt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCSetAnswer = bn;
          function Sn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, v.I8)(Ae, Be, Ue),
              Ye,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCLookupTURNServer = Sn;
          function wn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, v.I8)(jt, Be, Ue),
              Nt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCAddHostCandidate = wn;
          function Dn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, v.I8)(wt, Be, Ue),
              Z,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCAddViewerCandidate = Dn;
          function nn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, v.I8)(X, Be, Ue),
              ie,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCGetHostCandidates = nn;
          function In(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, v.I8)(qe, Be, Ue),
              st,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetBroadcastUploadStats = In;
          function xn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, v.I8)(dt, Be, Ue),
              Et,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetBroadcastViewerStats = xn;
        })(Yt || (Yt = {}));
        var Zt;
        ((He) => {
          (He.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: K,
          }),
            (He.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: ae,
            }),
            (He.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: pe,
            }),
            (He.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: Ee,
            }),
            (He.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: Se,
            }),
            (He.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: Te,
            }),
            (He.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: te,
            }),
            (He.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: oe,
            }),
            (He.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: xe,
            }),
            (He.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: Oe,
            }),
            (He.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: nt,
            }),
            (He.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: it,
            }),
            (He.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: Dt,
            });
        })(Zt || (Zt = {}));
      },
      61639: (ge, de, r) => {
        "use strict";
        r.d(de, { Mc: () => n });
        var n = {};
        r.r(n),
          r.d(n, {
            Ms: () => V,
            n6: () => U,
            U6: () => k,
            kz: () => T,
            ej: () => J,
            R: () => se,
            mZ: () => ne,
            Is: () => S,
            B_: () => F,
            bW: () => N,
            iy: () => L,
          });
        var x = r(80613),
          a = r.n(x),
          s = r(75245),
          t = r(35038);
        const v = 0,
          L = 1,
          k = 2,
          F = 3,
          N = 4,
          T = 5,
          _ = 6,
          U = 7,
          O = 8,
          S = 9,
          h = 10,
          D = 11,
          g = 12,
          o = 13,
          p = 14,
          b = 15,
          V = 16,
          ne = 17,
          se = 18,
          J = 19;
        function H(q) {
          return "unknown EProductPageAction ( " + q + " )";
        }
        function c(q) {
          return "unknown EProductViewAction ( " + q + " )";
        }
        function m(q) {
          return "unknown EProductImpressionFromClientType ( " + q + " )";
        }
        function f(q) {
          return "unknown ETrackedEmailType ( " + q + " )";
        }
        function E(q) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + q + " )"
          );
        }
        function $(q) {
          return "unknown EUnifedProductInteractionActions ( " + q + " )";
        }
        class z extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(G = null) {
            super(),
              z.prototype.impressions || s.Sg(z.M()),
              x.Message.initialize(this, G, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: { impressions: { n: 1, c: w, r: !0, q: !0 } },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = s.w0(z.M())), z.sm_mbf;
          }
          toObject(G = !1) {
            return z.toObject(G, this);
          }
          static toObject(G, C) {
            return s.BT(z.M(), G, C);
          }
          static fromObject(G) {
            return s.Uq(z.M(), G);
          }
          static deserializeBinary(G) {
            let C = new (a().BinaryReader)(G),
              pe = new z();
            return z.deserializeBinaryFromReader(pe, C);
          }
          static deserializeBinaryFromReader(G, C) {
            return s.zj(z.MBF(), G, C);
          }
          serializeBinary() {
            var G = new (a().BinaryWriter)();
            return z.serializeBinaryToWriter(this, G), G.getResultBuffer();
          }
          static serializeBinaryToWriter(G, C) {
            s.i0(z.M(), G, C);
          }
          serializeBase64String() {
            var G = new (a().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, G), G.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class w extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(G = null) {
            super(),
              w.prototype.type || s.Sg(w.M()),
              x.Message.initialize(this, G, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    type: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                    appid: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    num_impressions: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
          }
          toObject(G = !1) {
            return w.toObject(G, this);
          }
          static toObject(G, C) {
            return s.BT(w.M(), G, C);
          }
          static fromObject(G) {
            return s.Uq(w.M(), G);
          }
          static deserializeBinary(G) {
            let C = new (a().BinaryReader)(G),
              pe = new w();
            return w.deserializeBinaryFromReader(pe, C);
          }
          static deserializeBinaryFromReader(G, C) {
            return s.zj(w.MBF(), G, C);
          }
          serializeBinary() {
            var G = new (a().BinaryWriter)();
            return w.serializeBinaryToWriter(this, G), G.getResultBuffer();
          }
          static serializeBinaryToWriter(G, C) {
            s.i0(w.M(), G, C);
          }
          serializeBase64String() {
            var G = new (a().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, G), G.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var I;
        ((q) => {
          function G(C, pe) {
            return C.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, t.I8)(z, pe),
              { ePrivilege: 1 },
            );
          }
          q.ReportProductImpressionsFromClient = G;
        })(I || (I = {}));
      },
      36631: (ge, de, r) => {
        "use strict";
        r.d(de, {
          Ay: () => L,
          Cs: () => N,
          HN: () => O,
          HY: () => t,
          LD: () => F,
          MU: () => U,
          W3: () => v,
          bs: () => a,
          uF: () => s,
          yD: () => T,
        });
        var n = r(7850),
          x = r(90626);
        const a = 0,
          s = 1,
          t = 2,
          v = 3,
          L = 4,
          k = { eLocation: a },
          F = x.createContext(k);
        function N(S) {
          const { children: h, location: D } = S;
          return (0, n.jsx)(F.Provider, {
            value: { ...k, eLocation: D ?? a },
            children: h,
          });
        }
        function T() {
          return x.useContext(F);
        }
        function _() {
          return T().eLocation == s;
        }
        function U() {
          return T().eLocation == t;
        }
        function O() {
          const S = T();
          return S.eLocation == t || S.eLocation == s;
        }
      },
      92799: (ge, de, r) => {
        "use strict";
        r.d(de, { m: () => o });
        var n = r(7850),
          x = r(23386),
          a = r(24660),
          s = r(64868),
          t = r(72609),
          v = r(90626),
          L = r(16412),
          k = r(73191),
          F = r(69168),
          N = r(36118),
          T = r(85599),
          _ = r(36707),
          U = r(18210),
          O = r(6881),
          S = r(4105),
          h = r(94253),
          D = r(74187),
          g = r.n(D);
        function o(se) {
          const J = (0, h.Oz)(),
            { bLoading: H } = J,
            { className: c, bPreviewMode: m, rewardType: f } = se,
            [E, $, z] = (0, s.uD)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(L.$n, {
                className: (0, _.A)("CSSClaimItemButton", c),
                onClick: () => {
                  J.bCanClaimNewItem
                    ? $()
                    : m &&
                      ($(),
                      console.log(
                        "Show dialog for debugging, since already claimed: ",
                        J,
                      ));
                },
                disabled: H,
                children: H
                  ? (0, n.jsx)(T.t, {
                      string: (0, U.we)("#Loading"),
                      size: "small",
                    })
                  : (0, n.jsx)(p, { claimState: J }),
              }),
              (0, n.jsx)(F.E, {
                active: E,
                children: (0, n.jsx)(b, { rewardType: f, closeModal: z }),
              }),
            ],
          });
        }
        function p(se) {
          const { claimState: J, strButtonOverride: H, rewardType: c } = se;
          if (J.bAlreadyClaimedCurrentItem)
            return (0, n.jsxs)("div", {
              className: (0, _.A)(D.CheckMark, "CSSClaimedState"),
              children: [
                (0, n.jsx)(N.Jlk, {}),
                (0, n.jsxs)("span", {
                  children: [
                    " ",
                    H || (0, U.we)("#Sale_ClaimableReward_AlreadyClaimed"),
                  ],
                }),
              ],
            });
          let m = (0, U.we)("#Sale_ClaimableReward_generic");
          switch (J?.community_item_class || c) {
            case x.Ed:
              m = (0, U.we)("#Sale_ClaimableReward_sticker");
              break;
            case x.jE:
              m = (0, U.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case x.xw:
              m = (0, U.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)("span", {
            className: "CSSUnclaimedState",
            children: m,
          });
        }
        function b(se) {
          const { closeModal: J, rewardType: H } = se,
            { fnClaimItem: c } = (0, h.CC)(),
            m = (0, k.vs)(),
            [f, E] = v.useState(null);
          v.useEffect(() => {
            m.bLoading ||
              (m.fnSetLoading(!0),
              c()
                .then((w) => {
                  if ((E(w), w.appid)) {
                    let I = (0, U.we)(
                      "#Sale_ClaimableReward_completed_generic",
                    );
                    const q = f?.community_item_class || H;
                    switch (q) {
                      case x.Ed:
                        I = (0, U.we)(
                          "#Sale_ClaimableReward_completed_sticker",
                        );
                        break;
                      case x.jE:
                        I = (0, U.we)(
                          "#Sale_ClaimableReward_completed_profilemodifier",
                        );
                        break;
                      case x.xw:
                        I = (0, U.we)(
                          "#Sale_ClaimableReward_completed_animatedavatar",
                        );
                        break;
                    }
                    m.fnSetStrSuccess("   "),
                      m.fnSetElSuccess(
                        (0, n.jsxs)("div", {
                          className: D.DialogCtn,
                          children: [
                            (0, n.jsx)("span", { children: I }),
                            (0, n.jsx)(V, {
                              appid: w.appid,
                              community_item_type: w.community_item_type,
                              rewardType: q,
                            }),
                          ],
                        }),
                      );
                  } else
                    m.fnSetStrError((0, U.we)("#Sale_ClaimableReward_Busy"));
                })
                .catch(() =>
                  m.fnSetStrError((0, U.we)("#Sale_ClaimableReward_Busy")),
                ));
          }, [f?.community_item_class, m, c, H]);
          let $ = (0, U.we)("#Sale_ClaimableReward_generic");
          switch (f?.community_item_class || H) {
            case x.Ed:
              $ = (0, U.we)("#Sale_ClaimableReward_sticker");
              break;
            case x.jE:
              $ = (0, U.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case x.xw:
              $ = (0, U.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)(k.Hh, {
            state: m,
            strDialogTitle: $,
            closeModal: J,
          });
        }
        function V(se) {
          const { appid: J, community_item_type: H, rewardType: c } = se;
          return !J || !H
            ? null
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(S.f8, { appid: J, community_item_type: H }),
                  c == x.jE &&
                    (0, n.jsx)(ne, { appid: J, community_item_type: H }),
                ],
              });
        }
        function ne(se) {
          const { appid: J, community_item_type: H } = se,
            c = (0, O.fw)(J),
            { mutate: m, isSuccess: f } = (0, h.t5)();
          if (!c) return null;
          const E = c.find(($) => $.item_type == H);
          return E
            ? (0, n.jsxs)("div", {
                className: D.EquipCtn,
                children: [
                  f
                    ? (0, n.jsx)("div", {
                        children: (0, U.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply_success",
                        ),
                      })
                    : (0, n.jsx)(L.$n, {
                        onClick: () => m(E),
                        children: (0, U.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply",
                        ),
                      }),
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}`,
                    children: (0, U.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/edit/goldenprofile`,
                    children: (0, U.we)(
                      "#Sale_ClaimableReward_profilemodifier_choose",
                    ),
                  }),
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}`,
                    children: (0, U.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              });
        }
      },
      11587: (ge, de, r) => {
        "use strict";
        r.d(de, { Qg: () => h, h3: () => S });
        var n = r(72609),
          x = r(80902),
          a = r(75233),
          s = r(51614),
          t = r(90626),
          v = r(72604);
        const L = "saleaction/giveawayregistration",
          k = "saleaction/creategiveawayregistration";
        async function F(D) {
          const g = n.TS.STORE_BASE_URL + L + "?name=" + encodeURIComponent(D),
            o = await fetch(g, { credentials: "include" });
          return await T("GetUserGiveawayRegistration", D, g, o);
        }
        async function N(D) {
          const g = n.TS.STORE_BASE_URL + k,
            o = await fetch(g, {
              method: "POST",
              credentials: "include",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ name: D }),
            });
          return await T("UpdateUserGiveawayRegistration", D, g, o);
        }
        async function T(D, g, o, p) {
          if (!p.ok) throw new Error(o + " answered " + p.status);
          const b = await p.json();
          if (b?.success == v.R && b.registration) return b.registration;
          throw new Error(D + " on " + g + " answered " + b?.success);
        }
        const _ = { registered: !1 };
        function U(D, g) {
          return ["sale", "giveawayregistration", D, g];
        }
        function O(D, g) {
          return {
            queryKey: U(D, g),
            queryFn: () => F(D),
            enabled: !!D,
            retry: !1,
          };
        }
        function S(D) {
          const { data: g, isError: o } = (0, x.I)(O(D, n.iA.accountid));
          return o ? _ : g;
        }
        function h() {
          const D = (0, a.jE)(),
            { mutateAsync: g } = (0, s.n)({
              mutationFn: N,
              onSuccess: (p, b) => D.setQueryData(U(b, n.iA.accountid), p),
            });
          return {
            fnCreateRegistration: (0, t.useCallback)(
              async (p) => {
                try {
                  return await g(p);
                } catch (b) {
                  return (
                    console.error(
                      "Registering for giveaway " + p + " failed",
                      b,
                    ),
                    _
                  );
                }
              },
              [g],
            ),
          };
        }
      },
      31774: (ge, de, r) => {
        "use strict";
        r.d(de, { $O: () => D, wk: () => h });
        var n = r(80902),
          x = r(75233),
          a = r(90626),
          s = r(72609),
          t = r(48491),
          v = r(49288);
        async function L(g, o) {
          const { rgDefIDs: p, strCategory: b, itemClass: V } = o,
            ne = await v.a9.QueryRewardItems(g, {
              definitionids: p,
              community_item_classes: V ? [V] : void 0,
              filter_match_any_category_tags: b ? [b] : void 0,
            });
          if (!ne.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + ne.GetEResult(),
            );
          return ne.Body().toObject().definitions ?? [];
        }
        let k;
        function F() {
          return (
            k || (k = new t.D(s.TS.WEBAPI_BASE_URL)), k.GetServiceTransport()
          );
        }
        async function N(g) {
          return L(F(), g);
        }
        const T = 3600 * 1e3;
        function _(g) {
          return ["LoyaltyRewardDef", g];
        }
        function U(g, o) {
          return ["LoyaltyRewardDefsByCategoryAndClass", g, o];
        }
        function O(g) {
          return {
            queryKey: _(g),
            queryFn: async () => {
              const o = await N({ rgDefIDs: [g] }),
                p = o.length == 1 ? o[0] : void 0;
              if (!p)
                throw new Error(
                  `Asked for point shop item ${g} and got ${o.length} items back, wanted exactly one.`,
                );
              return p;
            },
            enabled: g > 0,
            staleTime: T,
            retry: !1,
          };
        }
        function S(g, o) {
          return {
            queryKey: U(g, o),
            queryFn: () => N({ strCategory: g, itemClass: o }),
            enabled: !!(g && o),
            staleTime: T,
            retry: !1,
          };
        }
        function h(g) {
          const { data: o } = (0, n.I)(O(g));
          return o;
        }
        function D(g, o) {
          const p = (0, x.jE)(),
            { data: b } = (0, n.I)(S(g, o));
          return (
            (0, a.useEffect)(() => {
              b?.forEach((V) => {
                V.defid !== void 0 && p.setQueryData(_(V.defid), V);
              });
            }, [b, p]),
            b
          );
        }
      },
      6881: (ge, de, r) => {
        "use strict";
        r.d(de, { _u: () => m, fw: () => p, p1: () => b, Km: () => V });
        var n = r(80902),
          x = r(75233),
          a = r(51614),
          s = r(90626),
          t = r(72609),
          v = r(33828),
          L = r(48491),
          k = r(67705),
          F = r(72604),
          N = r(31224);
        async function T(f, E) {
          const $ = await N.uy.GetCommunityInventory(f, { filter_appids: [E] });
          if ($.GetEResult() != F.R)
            throw new Error(
              "Quest.GetCommunityInventory on app " +
                E +
                " answered " +
                $.GetEResult(),
            );
          return $.Body().toObject().items ?? [];
        }
        let _;
        function U() {
          if (!_) {
            const f = (0, k.Fd)("read_inventory_token", "application_config");
            _ = f ? new L.D(t.TS.WEBAPI_BASE_URL, f) : (0, v.P)();
          }
          return _.GetServiceTransport();
        }
        async function O(f) {
          return T(U(), f);
        }
        const S = 3 * 1e3,
          h = 5 * 1e3,
          D = 15 * 1e3;
        function g(f) {
          return ["QuestCommunityInventory", f];
        }
        function o(f) {
          return {
            queryKey: g(f),
            queryFn: () => O(f),
            enabled: !!f,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function p(f) {
          const { data: E } = (0, n.I)(o(f));
          return E;
        }
        function b(f, E) {
          const $ = p(f);
          return {
            communityItem: (0, s.useMemo)(
              () => $?.find((w) => w.appid == f && w.item_type == E),
              [$, f, E],
            ),
            bLoaded: $ != null,
          };
        }
        function V() {
          const f = (0, x.jE)();
          return (0, a.n)({
            mutationFn: (E) => se(f, E.appid, E.fnBHasExpectedItems),
          });
        }
        const ne = new WeakMap();
        function se(f, E, $) {
          if (!E || $(f.getQueryData(g(E)) ?? [])) return Promise.resolve();
          let z = ne.get(f);
          z || ((z = new Map()), ne.set(f, z));
          let w = z.get(E);
          return (
            w || ((w = J(f, E, $).finally(() => z?.delete(E))), z.set(E, w)), w
          );
        }
        async function J(f, E, $) {
          const z = [0, S, H()];
          for (const w of z) {
            w > 0 && (await c(w));
            let I;
            try {
              (I = await O(E)), f.setQueryData(g(E), I);
            } catch (q) {
              console.error(
                "Re-reading the community inventory for app " + E + " failed",
                q,
              );
            }
            if ($(I ?? [])) return;
          }
        }
        function H() {
          return h + Math.floor(Math.random() * (D - h));
        }
        function c(f) {
          return new Promise((E) => setTimeout(E, f));
        }
        function m(f, E, $) {
          f.setQueryData(g(E), $);
        }
      },
      4105: (ge, de, r) => {
        "use strict";
        r.d(de, { Zx: () => V, f8: () => b });
        var n = r(7850),
          x = r(65946),
          a = r(23386),
          s = r(85599),
          t = r(18210),
          v = r(72609),
          L = r(56330),
          k = r(80902),
          F = r(90626),
          N = r(72604);
        const T = "minigamev2/itemdefs",
          _ = "appid",
          U = "editor";
        function O() {
          return (typeof self < "u" ? self.origin + "/" : "") ===
            v.TS.STORE_BASE_URL
            ? v.TS.STORE_BASE_URL
            : v.TS.COMMUNITY_BASE_URL;
        }
        async function S(ne, se) {
          if (!ne) return [];
          const J = new URLSearchParams({ [_]: String(ne), l: v.TS.LANGUAGE });
          se && J.set(U, "1");
          const H = `${O()}${T}?${J}`,
            c = await fetch(H, { credentials: se ? "include" : "same-origin" });
          if (!c.ok) throw new Error(`${H} answered ${c.status}`);
          const m = await c.json();
          if (m?.success == N.R && m.item_definitions)
            return m.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              ne +
              " answered " +
              m?.success,
          );
        }
        function h(ne, se) {
          return ["MinigameCommunityItemDefs", ne, !!se];
        }
        function D(ne, se) {
          return {
            queryKey: h(ne, se),
            queryFn: () => S(ne, se),
            enabled: !!ne,
            retry: !1,
          };
        }
        function g(ne, se) {
          const { data: J } = (0, k.I)(D(ne, se));
          return J;
        }
        function o(ne, se, J) {
          const H = g(ne, J);
          return (0, F.useMemo)(
            () =>
              H?.find(
                (c) => (J || c.active) && c.appid == ne && c.item_type == se,
              ),
            [H, ne, se, J],
          );
        }
        function p(ne) {
          const {
            appid: se,
            item_image_small: J,
            item_image_large: H,
            item_movie_mp4: c,
            item_movie_webm: m,
            item_title: f,
          } = ne;
          if (c && m) {
            const E = `${v.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${se}/${J}`,
              $ = `${v.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${se}/${m}`,
              z = `${v.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${se}/${c}`;
            return (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: E,
                playsInline: !0,
                className: ne.videoClassName,
                children: [
                  (0, n.jsx)("source", { src: $, type: "video/webm" }),
                  !v.TS.IN_CLIENT &&
                    (0, n.jsx)("source", { src: z, type: "video/mp4" }),
                ],
              }),
            });
          } else {
            const E = `${v.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${se}/${J || H}`;
            return (0, n.jsx)("img", {
              className: ne.className,
              src: E,
              alt: f,
            });
          }
        }
        function b(ne) {
          const { appid: se, community_item_type: J, bForEdit: H } = ne,
            c = o(se, J, H),
            m =
              c && !c.active
                ? (0, n.jsx)("div", {
                    className: L.WarningStylesBackground,
                    children: (0, t.we)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return c
            ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(p, { ...c }), m],
              })
            : (0, n.jsx)(s.t, { size: "small", string: (0, t.we)("#Loading") });
        }
        function V(ne) {
          const { section: se, rewardDef: J, language: H } = ne,
            c = o(J.appid ?? 0, J.community_item_type ?? 0),
            [m] = (0, x.q3)(() => [!!se.rewards?.show_reward_item_name]);
          let f;
          switch (J.community_class) {
            case a.xi:
            case a.xw:
              f = `${v.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case a.u8:
              f = `${v.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case a.sU:
            case a.jE:
              f = `${v.TS.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case a.zs:
              f = `${v.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case a.Ed:
              f = `${v.TS.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, n.jsxs)("a", {
            href: f,
            children: [
              (0, n.jsx)(b, {
                appid: J.appid ?? 0,
                community_item_type: J.community_item_type ?? 0,
              }),
              !!m && (0, n.jsx)("span", { children: c?.item_name }),
            ],
          });
        }
      },
      94253: (ge, de, r) => {
        "use strict";
        r.d(de, {
          t5: () => w,
          os: () => fe,
          Qt: () => C,
          CC: () => z,
          Oz: () => $,
          lu: () => I,
        });
        var n = r(23386),
          x = r(72609),
          a = r(68312),
          s = r(75233),
          t = r(80902),
          v = r(51614),
          L = r(90626),
          k = r(33828),
          F = r(48491),
          N = r(67705),
          T = r(72604),
          _ = r(31224),
          U = r(7112);
        const O = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        async function S(W, re) {
          const he = await U.Qm.CanClaimItem(W, { language: re });
          if (he.GetEResult() != T.R)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + he.GetEResult(),
            );
          const be = he.Body().toObject(),
            Le = be.reward_item?.defid ? be.reward_item : void 0;
          return {
            bCanClaimNewItem: !!be.can_claim,
            bAlreadyClaimedCurrentItem: !!Le,
            appid: Le?.appid,
            community_item_type: Le?.community_item_type,
            community_item_class: Le?.community_item_class,
            rtNextClaimTime:
              (be.next_claim_time ?? 0) > 0 ? be.next_claim_time : void 0,
          };
        }
        async function h(W, re) {
          const he = await U.Qm.ClaimItem(W, { language: re });
          if (he.GetEResult() == T.Ze) return S(W, re);
          if (he.GetEResult() != T.R)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + he.GetEResult(),
            );
          const be = he.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: be?.appid,
            community_item_type: be?.community_item_type,
            community_item_class: be?.community_item_class,
            rtNextClaimTime:
              (he.Body().next_claim_time() ?? 0) > 0
                ? he.Body().next_claim_time()
                : void 0,
          };
        }
        async function D(W, re) {
          const he = await _.uy.ActivateProfileModifierItem(W, {
            communityitemid: re.communityitemid,
            appid: re.appid,
            activate: !0,
          });
          if (he.GetEResult() != T.R)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + he.GetEResult(),
            );
          return he.GetEResult();
        }
        async function g(W, re, he, be) {
          return (
            await U.Qm.GetCurrentDefinition(W, {
              sale_def_type: re,
              language: he,
              include_community_item_def: be,
            })
          )
            .Body()
            .toObject();
        }
        async function o(W, re, he, be) {
          return (
            await U.Qm.GetClaimedSaleRewards(W, {
              sale_def_type: re,
              language: he,
              include_community_item_def: be,
            })
          )
            .Body()
            .toObject();
        }
        let p;
        function b() {
          if (!p) {
            const W = (0, N.Fd)("loyalty_webapi_token", "application_config");
            p = W ? new F.D(x.TS.WEBAPI_BASE_URL, W) : (0, k.P)();
          }
          return p.GetServiceTransport();
        }
        async function V(W) {
          return S(b(), W);
        }
        async function ne(W) {
          return h(b(), W);
        }
        async function se(W) {
          return D(b(), W);
        }
        const J = 300 * 1e3;
        let H = !1,
          c = null;
        const m = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: n.Ed,
        };
        function f(W) {
          return ["SaleItemCanClaim", W];
        }
        function E(W) {
          return {
            queryKey: f(W),
            queryFn: () => V(W),
            enabled: !H,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function $() {
          const W = x.TS.LANGUAGE,
            re = (0, s.jE)(),
            { data: he, isLoading: be } = (0, t.I)(E(W)),
            Le = he?.rtNextClaimTime;
          return (
            (0, L.useEffect)(() => {
              let Ne = 0;
              if (Le) {
                const Re = () => {
                  const Pe = Le * 1e3 - Date.now();
                  if (Pe <= 0) {
                    re.invalidateQueries({ queryKey: f(W) });
                    return;
                  }
                  Ne = window.setTimeout(Re, Pe > J ? Pe / 2 : Pe);
                };
                Re();
              }
              return () => window.clearTimeout(Ne);
            }, [Le, W, re]),
            { ...(he ?? O), bLoading: be }
          );
        }
        function z() {
          const W = (0, s.jE)(),
            { mutateAsync: re } = (0, v.n)({
              mutationFn: () => {
                if (c) {
                  const be = c;
                  return (c = null), Promise.resolve(be);
                }
                return H
                  ? Promise.resolve(W.getQueryData(f(x.TS.LANGUAGE)) ?? O)
                  : ne(x.TS.LANGUAGE);
              },
              onSuccess: (be) => W.setQueryData(f(x.TS.LANGUAGE), be),
            });
          return { fnClaimItem: (0, L.useCallback)(() => re(), [re]) };
        }
        function w() {
          return (0, v.n)({ mutationFn: (W) => se(W) });
        }
        function I() {
          const W = (0, s.jE)();
          return {
            fnSetClaimState: (0, L.useCallback)(
              (he) => {
                (H = !0),
                  (c = he.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ...m,
                      }
                    : null),
                  W.setQueryData(f(x.TS.LANGUAGE), he);
              },
              [W],
            ),
          };
        }
        function q(W, re, he) {
          return ["SaleRewardsGetDefinition", W, re, he];
        }
        function G(W, re, he, be) {
          return {
            queryKey: q(re, he, be),
            queryFn: () => g(W, re, he, be),
            staleTime: 1 / 0,
          };
        }
        function C(W, re, he) {
          const be = (0, a.KV)();
          return (0, t.I)(G(be, W, re, he));
        }
        function pe(W, re, he, be) {
          return ["GetClaimedSaleRewards", W, re, !!he, be];
        }
        function M(W, re, he, be, Le) {
          return {
            queryKey: pe(re, he, be, Le),
            queryFn: () => o(W, re, he, be),
            staleTime: 1 / 0,
          };
        }
        function fe(W, re, he, be) {
          const Le = (0, a.KV)();
          return (0, t.I)(M(Le, W, re, he, be));
        }
      },
      86959: (ge, de, r) => {
        "use strict";
        r.d(de, { Fk: () => a, rz: () => k });
        var n = r(53113),
          x = r(72609);
        function a(g, o) {
          return !o || o.startsWith("https://") || o.startsWith("http://")
            ? o
            : `${x.TS.CLAN_CDN_ASSET_URL}images/clan/${g}/${o}`;
        }
        function s(g, o, p) {
          return !o || IsHttpOrHttps(o) ? o : `${p}images/clan/${g}/${o}`;
        }
        const t = "poster",
          v = `${t}.avif`,
          L = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
        function k(g) {
          const o = g.video_webm_src || g.video_mp4_src;
          if (!o || g.image?.includes(`.${t}.`)) return g.image;
          const p = L.exec(o);
          return p ? `${p[1]}.${v}` : g.image;
        }
        const F = 0.01,
          N = 100,
          T = 4,
          _ = null,
          U = 0.005;
        function O(g, o) {
          if (!(!g || !o || g <= 0 || o <= 0)) return S(g / o);
        }
        function S(g) {
          if (!g || !Number.isFinite(g) || g < F || g > N) return;
          const o = Math.pow(10, T);
          return Math.round(g * o) / o;
        }
        function h(g) {
          const o = g.trim();
          if (!o) return;
          const p = /^(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)$/i.exec(o);
          if (p) return O(parseFloat(p[1]), parseFloat(p[2]));
          if (/^\d+(?:\.\d+)?$/.test(o)) return S(parseFloat(o));
        }
        function D(g) {
          const o = _.find(([p, b]) => Math.abs(g - p / b) < U);
          return o ? `${o[0]}:${o[1]}` : String(g);
        }
      },
      47797: (ge, de, r) => {
        "use strict";
        r.d(de, { Ns: () => a });
        var n = r(99412);
        const x = 1778623200;
        function a(v, L) {
          let k = !1;
          return (
            v && v.GetEventType() == n.ajI
              ? (k = !0)
              : v && L && L.is_creator_home && (k = s(v, L)),
            k
          );
        }
        function s(v, L) {
          return !!L && !!L.is_creator_home && (v.createTime ?? 0) > x;
        }
        function t(v) {
          const L = useClanInfoByAccountID(v.clanSteamID.GetAccountID());
          return a(v, L.data);
        }
      },
      64457: (ge, de, r) => {
        "use strict";
        r.d(de, { PE: () => ne, Yg: () => p, _t: () => b, gO: () => J });
        var n = r(7850),
          x = r(21721),
          a = r(25046),
          s = r(40358),
          t = r(68094),
          v = r(41032),
          L = r(90626),
          k = r(62571),
          F = r(40426),
          N = r(36118),
          T = r(36707),
          _ = r(18210),
          U = r(72609),
          O = r(96538),
          S = r(85599),
          h = r(64271),
          D = r(48963),
          g = r.n(D),
          o = r(50573);
        function p(c) {
          const { id: m, bPopOutTrailerPlayback: f } = c,
            { data: E } = (0, s.Yo)(m),
            { data: $ } = (0, s.j4)(m),
            { data: z } = (0, s.J$)(m),
            [w, I] = (0, L.useState)(!1),
            [q, G] = (0, L.useState)(!1),
            C = (0, v.dy)(),
            pe = E?.highlights?.filter((re) => !C || re.all_ages),
            M = pe && pe?.length > 0 ? pe[0] : void 0,
            fe = L.useCallback(() => {
              M && (f ? G(!0) : I((re) => !re));
            }, [M, f]);
          if (!z)
            return (0, n.jsx)("div", {
              className: (0, T.A)(g().HilightGrid, g().MediaContainer),
              children: (0, n.jsx)(S.t, { size: "medium" }),
            });
          const W = M
            ? (0, n.jsx)(H, {
                trailer: M,
                bPlayVideo: w,
                fnTogglePlayTrailer: fe,
              })
            : null;
          return !M &&
            !($ && $.all_ages_screenshots && $.all_ages_screenshots.length > 0)
            ? null
            : (0, n.jsxs)("div", {
                className: (0, T.A)(g().HilightGrid, g().MediaContainer),
                children: [
                  (0, n.jsx)(b, {
                    elFeaturedInCenter: W,
                    storeItemScreenshots: $,
                    trailer: M,
                    id: m,
                    name: z.name || "",
                  }),
                  f
                    ? (0, n.jsx)(ne, {
                        id: m,
                        bShowModal: q,
                        hideModal: () => G(!1),
                      })
                    : (0, n.jsx)(V, {
                        name: z.name || "",
                        trailer: M,
                        bPlayVideo: w,
                        fnTogglePlayTrailer: fe,
                        bControls: !0,
                      }),
                ],
              });
        }
        function b(c) {
          const {
              elFeaturedInCenter: m,
              id: f,
              name: E,
              trailer: $,
              storeItemScreenshots: z,
              featureElementclassName: w,
              bUseTrailerAsFirstThumb: I,
              bNoScreenShotModals: q,
            } = c,
            [G, C] = L.useState(void 0),
            [pe, M] = (0, F.XC)(),
            fe = (0, v.dy)(),
            W = (0, L.useRef)(null),
            [re, he] = (0, L.useState)(0);
          if (!f) return null;
          const be = m || (G !== void 0 && G !== -1) ? G : 0,
            Le = new Array(),
            Ne = new Array();
          I &&
            $ &&
            (Le.push(
              (0, n.jsx)(
                H,
                {
                  trailer: $,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => C(0),
                  onMouseLeave: () => {
                    const Q = W.current;
                    Q && he(Q.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            Ne.push(
              (0, n.jsx)(
                V,
                {
                  ref: W,
                  name: E,
                  trailer: $,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: re,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const Re = (
            fe ? z?.all_ages_screenshots : z?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (Re?.forEach((Q, ue) => {
              if ((m || ue > 0) && Le.length < 3) {
                const K = (0, x.bu)(Q, "thumb"),
                  me = (0, x.bu)(Q, "600x338"),
                  ae = Le.length;
                Le.push(
                  (0, n.jsx)(
                    "div",
                    {
                      className: (0, T.A)({
                        [g().ThumbnailCtn]: !0,
                        [g().ThumbnialClickable]: !q,
                      }),
                      onMouseEnter: () => C(ae),
                      children: q
                        ? (0, n.jsx)("img", { src: K, alt: E })
                        : (0, n.jsx)("button", {
                            type: "button",
                            className: g().ThumbnailButton,
                            onClick: () => {
                              const Ee = [...(Re || [])];
                              if (Ee.length > 0) {
                                for (let Se = 0; Se < ue; ++Se) {
                                  const te = Ee.shift();
                                  te && Ee.push(te);
                                }
                                pe(Ee.map((Se) => (0, x.bu)(Se, "full")));
                              }
                            },
                            children: (0, n.jsx)("img", { src: K, alt: E }),
                          }),
                    },
                    ue + "_small_" + K,
                  ),
                ),
                  Ne.push(
                    (0, n.jsx)(
                      "div",
                      {
                        className: g().ScreenshotDisplayCtn,
                        children: (0, n.jsx)("img", { src: me, alt: E }),
                      },
                      ue + "_big_" + K,
                    ),
                  );
              }
            }),
            !m && (!Ne || Ne.length == 0))
          )
            return null;
          const Pe = Le.slice(0, 3),
            Ie = Array.from({ length: Math.max(0, 3 - Pe.length) });
          return (0, n.jsxs)(n.Fragment, {
            children: [
              M,
              (0, n.jsx)("div", {
                className: w || g().MainMediaCtn,
                children:
                  m && (be === -1 || be === void 0)
                    ? (0, n.jsx)(n.Fragment, { children: m })
                    : (0, n.jsx)(n.Fragment, {
                        children: be !== void 0 && Ne[be],
                      }),
              }),
              Pe.length > 0 &&
                (0, n.jsxs)("div", {
                  className: g().ScreenshotThumbnailRow,
                  onMouseLeave: () => C(-1),
                  children: [
                    Pe,
                    Ie.map((Q, ue) =>
                      (0, n.jsx)(
                        "div",
                        { className: g().ThumbnailCtn },
                        `app_${(0, t.ER)(f)}_${ue}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function V(c) {
          const {
            ref: m,
            name: f,
            trailer: E,
            bControls: $,
            bPlayVideo: z,
            fnTogglePlayTrailer: w,
            startTime: I,
          } = c;
          if (
            ((0, L.useEffect)(() => {
              const G = m?.current;
              if (I != null && I > 0 && G) {
                const C = () => {
                  G.currentTime = I || 0;
                };
                return (
                  G.addEventListener("loadedmetadata", C),
                  () => {
                    G.removeEventListener("loadedmetadata", C);
                  }
                );
              }
            }, [m, I]),
            !E)
          )
            return null;
          let q = (0, T.A)(g().VideoLargeContainer, z && g().videoPlaying);
          return (0, n.jsxs)("div", {
            className: q,
            onClick: w,
            role: "presentation",
            children: [
              (0, n.jsx)(o.hj, {
                name: f,
                trailerCategory: E.trailer_category,
                trailerDisplay: o.g,
                mouseOver: !1,
              }),
              !!(z && E.microtrailer) &&
                (0, n.jsx)("video", {
                  className: g().VideoLarge,
                  ref: m,
                  controls: $,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: I != null && I > 0 ? void 0 : E.screenshot_full,
                  children: E.microtrailer?.map((G) =>
                    U.TS.IN_CLIENT && G.type == "video/mp4"
                      ? null
                      : (0, n.jsx)(
                          "source",
                          { src: (0, a.M4)(E, G.filename || ""), type: G.type },
                          G.filename,
                        ),
                  ),
                }),
              $ &&
                (0, n.jsx)("button", {
                  type: "button",
                  className: g().CloseButton,
                  "aria-label": (0, _.we)("#Button_Close"),
                  children: (0, n.jsx)(N.sED, {}),
                }),
            ],
          });
        }
        function ne(c) {
          return c.bShowModal ? (0, n.jsx)(se, { ...c }) : null;
        }
        function se(c) {
          const { id: m, bShowModal: f, trailerBaseID: E, hideModal: $ } = c,
            { data: z } = (0, s.J$)(m),
            w = (0, a.kB)(m),
            I = (0, L.useMemo)(() => {
              if (!(!w || w.length == 0)) {
                if (E) {
                  const W = w.find((re) => re.trailer_base_id == E);
                  if (W) return W;
                }
                return w[0];
              }
            }, [w, E]),
            q = L.useId(),
            G = L.useId(),
            {
              rgDashTrailers: C,
              rgHlsTrailers: pe,
              strCaptionManufest: M,
              strScreenshot: fe,
            } = (0, L.useMemo)(() => {
              if (!I)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: W, rgHlsTrailers: re } = (0, a.hg)(I);
              return {
                rgDashTrailers: W,
                rgHlsTrailers: re,
                strCaptionManufest: (0, a.Wv)(I),
                strScreenshot: (0, a.hl)(I),
              };
            }, [I]);
          return !I || !I.adaptive_trailers || C.length == 0
            ? null
            : (0, n.jsx)(O.EN, {
                active: f,
                children: (0, n.jsxs)(O.eV, {
                  "aria-labelledby": (0, k.q)(q, G),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: $,
                  children: [
                    (0, n.jsx)("div", {
                      className: g().VideoPopupContainers,
                      children: (0, n.jsx)(h.P, {
                        dashManifests: C,
                        hlsManifest: pe[0] || "",
                        screenshot: fe,
                        altText: I.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: M,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      id: q,
                      style: { display: "none" },
                      children: z?.name || "",
                    }),
                    (0, n.jsx)("div", {
                      id: G,
                      style: { display: "none" },
                      children: I.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function J(c) {
          const { appid: m, trailerBaseID: f, bShowModal: E, hideModal: $ } = c,
            z = (0, L.useMemo)(() => ({ appid: m }), [m]);
          return (0, n.jsx)(ne, {
            id: z,
            trailerBaseID: f,
            bShowModal: E,
            hideModal: $,
          });
        }
        function H(c) {
          const {
            trailer: m,
            fnTogglePlayTrailer: f,
            bPlayVideo: E,
            onMouseEnter: $,
            onMouseLeave: z,
          } = c;
          return (0, n.jsxs)("div", {
            className: (0, T.A)({
              [g().VideoThumbnail]: !E,
              [g().videoPlaying]: E,
              [g().ThumbnailCtn]: !0,
            }),
            onClick: f,
            onMouseEnter: $,
            onMouseLeave: z,
            role: "presentation",
            children: [
              (0, n.jsx)("img", { src: (0, a.hl)(m), alt: m.trailer_name }),
              (0, n.jsx)("button", {
                type: "button",
                className: g().VideoPlayButton,
                "aria-label": (0, _.we)("#Playback_Play_Tooltip"),
                children: (0, n.jsx)(N.jGG, {}),
              }),
            ],
          });
        }
      },
      76945: (ge, de, r) => {
        "use strict";
        r.d(de, {
          $G: () => J,
          Hu: () => S,
          TY: () => O,
          VV: () => w,
          Xx: () => z,
          aS: () => m,
          bs: () => T,
          m1: () => h,
          sK: () => p,
          xh: () => _,
        });
        var n = r(72604),
          x = r(34041),
          a = r(72609),
          s = r(75233),
          t = r(80902),
          v = r(51614),
          L = r(19367),
          k = r.n(L);
        const F = k()("2026-11-23T09:30:00-08:00").unix(),
          N = k()("2026-11-30T10:00:00-08:00").unix(),
          T = "store/promo/steamawards2025/";
        function _() {
          return 2025;
        }
        function U(I) {
          return `${Config.MEDIA_CDN_URL}store/promo/${I}`;
        }
        const O = "#173471",
          S = "#ee6c5d",
          h = "#FFFFFF",
          D = k()("2026-12-17T09:30:00-08:00").unix(),
          g = k()("2027-01-02T10:00:00-08:00").unix(),
          o = { 2023: 2640290, 2024: 3334340, 2025: 4147080, 2026: 5350740 },
          p = 4147080,
          b = 2215130;
        function V(I) {
          switch (I) {
            case 2023:
            case 2024:
            case 2025:
              return !0;
            case 2026:
              return !1;
          }
          return !1;
        }
        function ne(I) {
          return I >= F && I < N;
        }
        function se(I) {
          return I >= F;
        }
        function J(I, q, G, C) {
          const pe = ne(C),
            M = f(I, q),
            fe = f(I, G);
          if (!(!M.length && !fe.length))
            return {
              nomination: M.length
                ? { rgCategories: M, bNominationsLive: pe }
                : void 0,
              vote: fe.length
                ? { rgCategories: fe, bNominationsLive: pe }
                : void 0,
            };
        }
        function H(I) {
          return I >= D && I < g;
        }
        function c(I) {
          return I >= g;
        }
        function m(I) {
          return I > 0;
        }
        function f(I, q) {
          const G = [];
          for (const C of q.filter(m)) {
            const pe = I.find((M) => M.voteid == C);
            pe?.localization?.title &&
              G.push({
                eCategoryID: C,
                strTitle: pe.localization.title,
                strDescription: pe.localization.award_description ?? "",
                bLaborOfLove: pe.flag == x.Xs.bV,
              });
          }
          return G;
        }
        function E(I) {
          return ["SteamAwards.GetUserNominations", I];
        }
        function $(I) {
          return ["StoreSales.GetUserVotes", I, p];
        }
        function z(I, q) {
          const G = (0, s.jE)(),
            C = E(a.iA.accountid),
            { data: pe, isPending: M } = (0, t.I)({
              queryKey: C,
              queryFn: async () => await q.GetMySteamAwardNominations(),
              enabled: !!a.iA.accountid,
            }),
            { mutate: fe } = (0, v.n)({
              mutationFn: async (W) => {
                const re = await q.NominateForSteamAward(W, I);
                if (re != n.R)
                  throw new Error(`SteamAwards.Nominate failed with ${re}`);
              },
              onMutate: (W) =>
                G.setQueryData(C, (re) => [
                  ...(re ?? []).filter((he) => he.category_id != I),
                  { category_id: I, appid: W },
                ]),
              onError: () => G.invalidateQueries({ queryKey: C }),
            });
          return {
            unNominatedAppID: pe?.find((W) => W.category_id == I)?.appid,
            bAnswered: pe != null || !a.iA.accountid || !M,
            Nominate: fe,
          };
        }
        function w(I, q) {
          const G = (0, s.jE)(),
            C = $(a.iA.accountid),
            { data: pe, isPending: M } = (0, t.I)({
              queryKey: C,
              queryFn: async () => await q.GetMySteamAwardVotes(),
              enabled: !!a.iA.accountid,
            }),
            { mutate: fe } = (0, v.n)({
              mutationFn: async (W) => {
                const re = await q.SetSteamAwardVote(W, I);
                if (re != n.R)
                  throw new Error(`StoreSales.SetVote failed with ${re}`);
              },
              onMutate: (W) =>
                G.setQueryData(C, (re) => [
                  ...(re ?? []).filter((he) => he.voteid != I),
                  { voteid: I, appid: W },
                ]),
              onError: () => G.invalidateQueries({ queryKey: C }),
            });
          return {
            unVotedAppID: pe?.find((W) => W.voteid == I)?.appid,
            bAnswered: pe != null || !a.iA.accountid || !M,
            Vote: fe,
          };
        }
      },
      91354: (ge, de, r) => {
        "use strict";
        r.d(de, { c: () => k });
        var n = r(7850),
          x = r(64238),
          a = r.n(x),
          s = r(16412),
          t = r(36118),
          v = r(89206),
          L = r.n(v);
        function k(F) {
          const { bExpanded: N, setExpanded: T } = F;
          return (0, n.jsx)(s.wl, {
            className: a()(v.ExpandRowButton, N && v.Selected),
            onClick: () => T(!N),
            children: (0, n.jsx)(t.b8_, { direction: "down" }),
          });
        }
      },
      9032: (ge, de, r) => {
        "use strict";
        r.d(de, { uj: () => v, fB: () => L });
        var n = r(80902),
          x = r(72604),
          a = r(72609);
        async function s(k, F) {
          const N = a.TS.STORE_BASE_URL + "video/details/" + k + "/0",
            T = await fetch(N, { credentials: "include", signal: F });
          if (!T.ok) throw new Error(N + " answered " + T.status);
          const _ = await T.json();
          if (_?.success != x.R && _?.success != "ready")
            throw new Error(
              "video/details on " + k + " answered " + _?.success,
            );
          return { appid: k, video_url: _.video_url, bookmark: _.bookmark };
        }
        function t(k) {
          return ["video", "vod", k];
        }
        function v(k) {
          return {
            queryKey: t(k),
            queryFn: ({ signal: F }) => s(k, F),
            retry: !1,
          };
        }
        function L(k) {
          const { data: F, isPending: N } = (0, n.I)(v(k));
          return { vodInfo: F, bLoading: N };
        }
      },
      813: (ge, de, r) => {
        "use strict";
        r.d(de, { $5: () => b, TB: () => p, ac: () => g });
        var n = r(40497),
          x = r(75233),
          a = r(14947),
          s = r(90626),
          t = r(76559),
          v = r(71742),
          L = r(3166),
          k = r(60480),
          F = r(33512),
          N = r(55483),
          T = r(77291);
        const _ = new WeakSet();
        function U(c = n.L) {
          if (typeof window > "u" || typeof document > "u" || _.has(c)) return;
          const m = (0, L.Fd)("groupvanityinfo", "application_config");
          (m === void 0 && document.readyState != "complete") ||
            (_.add(c), O(m) && (0, N.aA)(c, m));
        }
        function O(c) {
          const m = c;
          return m &&
            Array.isArray(m) &&
            m.length > 0 &&
            typeof m[0] == "object"
            ? typeof m[0].clanAccountID == "number" &&
                (typeof m[0].appid == "number" ||
                  typeof m[0].vanity_url == "string")
            : !1;
        }
        function S(c) {
          return typeof c == "string" ? parseInt(c) : c;
        }
        function h(c) {
          return typeof c == "string" ? Number.parseInt(c) : c;
        }
        class D {
          m_queryClient = n.L;
          m_boxCacheVersion = a.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            U(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((m) => {
                  (m?.type != "added" &&
                    m?.type != "updated" &&
                    m?.type != "removed") ||
                    ((0, N.yT)(m.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, a.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(m) {
            this.LazyInit(), O(m) && (0, N.aA)(this.m_queryClient, m);
          }
          BHasClanInfoLoaded(m) {
            return (
              (0, v.wT)(
                m.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, v.wT)(
                m.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(m.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(m) {
            return !!(0, N.Gt)(h(m), this.ReadCache());
          }
          RegisterClanData(m) {
            this.LazyInit(), (0, N.aA)(this.m_queryClient, m);
          }
          async LoadOGGClanInfoForAppID(m) {
            return (
              this.LazyInit(),
              (m = S(m)),
              (0, v.wT)(
                m != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              m == 0 ? null : (0, N.AB)(m, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(m) {
            return this.LazyInit(), (0, N.Rc)(m, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(m) {
            return this.LazyInit(), (0, N.Rc)(m, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(m) {
            return this.LoadClanInfoForClanAccountID(m.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(m) {
            return this.LazyInit(), (0, N.MR)(h(m), this.m_queryClient);
          }
          GetOGGClanInfo(m) {
            const f = this.ReadCache();
            return typeof m == "string" ? (0, N.fy)(m, f) : (0, N.ko)(m, f);
          }
          GetClanSteamIDForAppID(m) {
            const f = (0, N.ko)(S(m), this.ReadCache());
            return f ? t.b.InitFromClanID(f.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(m) {
            return (0, N.ko)(S(m), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(m) {
            return (0, N.Gt)(m.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(m) {
            return this.BHasClanInfoLoadedByAccountID(m);
          }
          GetClanMemberCount(m) {
            return (0, N.ko)(S(m), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(m) {
            return (
              (0, v.wT)(
                !!m,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, N.Gt)(h(m), this.ReadCache())
            );
          }
          GetCreatorStoreURL(m) {
            let f = k.pF.GetCreatorHome(m);
            if (f) return f.GetCreatorHomeURL("developer");
            let E = this.GetClanInfoByClanAccountID(m.GetAccountID());
            return (
              L.TS.COMMUNITY_BASE_URL +
              (E.vanity_url
                ? "groups/" + E.vanity_url
                : "gid/" + m.ConvertTo64BitString())
            );
          }
        }
        const g = new D();
        (0, T.V)("g_ClanStore", g);
        function o() {
          const c = (0, x.jE)();
          return U(c), c;
        }
        function p(c) {
          o();
          const { data: m, isPending: f } = (0, N.TB)(c ? h(c) : void 0);
          return [!!c && f, m ?? void 0];
        }
        function b(c) {
          const m = o();
          (0, s.useEffect)(() => {
            c &&
              (0, N.MR)(h(c), m).catch((f) =>
                console.error(`Failed to hint load clan info ${c}`, f),
              );
          }, [c, m]);
        }
        function V(c) {
          return o(), useClanInfoByVanityQuery(c).data ?? null;
        }
        function ne(c) {
          o();
          const m = c ? S(c) : void 0,
            { data: f, isPending: E } = useClanInfoByAppIDQuery(m);
          return { bLoadingClanInfo: !!m && E, clanInfo: f ?? null };
        }
        function se(c, m) {
          if (c.BIsOGGEvent()) return { bVisible: !1 };
          if (c.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (c.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            c.jsondata.clone_from_event_gid &&
            c.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (c.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const E = g_CreatorHomeStore.GetCreatorHome(c.clanSteamID);
          return E &&
            E.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : m
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function J(c, m) {
          return c.BIsOGGEvent()
            ? c.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : m
                  ? c.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function H(c) {
          return c.BIsOGGEvent()
            ? { bVisible: !1 }
            : c.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : c.BHasSaleEnabled()
                ? { bVisible: !0 }
                : c.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      53025: (ge, de, r) => {
        "use strict";
        r.d(de, { $: () => L });
        var n = r(41735),
          x = r.n(n),
          a = r(3166),
          s = r(77495),
          t = r(73259),
          v = r(72604);
        class L extends s.ZQ {
          async DeleteOldAnnouncement(F, N) {
            let T = new URLSearchParams();
            T.append("sessionid", (0, a.KC)());
            let _ =
                a.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                F.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                N,
              U = await x().post(_, T);
            if (U.data.success != v.R) throw U.data;
            return this.RemoveGIDFromList(F, t.cB + N), U.data;
          }
          static sm_Instance;
          static sm_SummaryInstance;
          static Get() {
            return (
              L.sm_Instance ||
                ((L.sm_Instance = new L()), L.sm_Instance.Init()),
              L.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              L.sm_SummaryInstance ||
                ((L.sm_SummaryInstance = new L(!0)),
                L.sm_SummaryInstance.Init()),
              L.sm_SummaryInstance
            );
          }
        }
      },
      76035: (ge, de, r) => {
        "use strict";
        r.d(de, {
          $d: () => q,
          AD: () => J,
          CF: () => Ie,
          Fq: () => V,
          Jo: () => H,
          Mn: () => Ne,
          N2: () => I,
          PV: () => Pe,
          QS: () => be,
          RE: () => se,
          Ri: () => b,
          Vz: () => f,
          ZB: () => he,
          _C: () => W,
          a8: () => Le,
          cO: () => m,
          ed: () => $,
          jT: () => z,
          kr: () => c,
          lE: () => C,
          np: () => fe,
          rv: () => re,
        });
        var n = r(72604),
          x = r(32093),
          a = r(35038),
          s = r(27386),
          t = r(34041),
          v = r(80902),
          L = r(75233),
          k = r(51614),
          F = r(68312),
          N = r(98609),
          T = r(67705),
          _ = r(19619),
          U = r(41735),
          O = r.n(U),
          S = r(75779),
          h = r(90626),
          D = r(31224),
          g = r(76945);
        const o = 2640290,
          p = 3334340,
          b = g.sK,
          V = 2215130;
        let ne;
        function se() {
          return (
            ne || (ne = (0, T.Fd)("steam_awards_config", "application_config")),
            ne
          );
        }
        const J = h.createContext(null);
        function H(Q) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardDefs_${Q}`],
            queryFn: async () => {
              const K = a.w.Init(t.cD);
              return (
                K.Body().set_sale_appid(Q),
                K.Body().set_language(N.TS.LANGUAGE),
                (await t.zF.GetVoteDefinitions(ue, K)).Body().toObject()
              );
            },
            initialData: () => se()?.definitions,
            enabled: Q > 0,
          });
        }
        async function c(Q) {
          const ue = a.w.Init(t.Dp);
          return (
            (await t.AH.GetUserNominations(Q, ue)).Body().toObject()
              ?.nominations ?? []
          );
        }
        function m() {
          const Q = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardNominations_${N.iA.accountid}`],
            queryFn: () => c(Q),
            initialData: () => se()?.user_nominations?.nominations,
            enabled: N.iA.logged_in,
          });
        }
        function f(Q) {
          const ue = m();
          return ue.isLoading
            ? { bLoadingNominationForCategory: !0 }
            : {
                currentNomination: ue.data?.find((K) => K.category_id == Q),
                bLoadingNominationForCategory: !1,
              };
        }
        function E() {
          return [`SteamAwardBadgeProgress_${N.iA.accountid}`];
        }
        function $(Q) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: E(),
            queryFn: async () => {
              const K = a.w.Init(s.jng);
              return (
                K.Body().set_badgeid(Q),
                K.Body().set_steamid(N.iA.steamid),
                (await s.xtC.GetCommunityBadgeProgress(ue, K)).Body().toObject()
              );
            },
            initialData: () => se()?.badge_progress,
            enabled: N.iA.logged_in,
          });
        }
        function z(Q) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardSuggestions_${Q}`],
            queryFn: async () => {
              const K = a.w.Init(t.$N);
              return (
                K.Body().set_category_id(Q),
                (await t.AH.GetNominationRecommendations(ue, K))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
          });
        }
        function w(Q, ue) {
          Q.setQueryData([`SteamAwardNominations_${N.iA.accountid}`], ue);
        }
        async function I(Q, ue, K, me) {
          const ae = a.w.Init(t.wz);
          ae.Body().set_category_id(K),
            ae.Body().set_source(me),
            ae.Body().set_nominated_id(ue);
          const Ee = await t.AH.Nominate(Q, ae);
          return (
            Ee.BSuccess() ||
              console.warn(`Failed to nominate app: ${Ee.GetEResult()}`),
            [Ee.GetEResult(), Ee.Body().toObject()]
          );
        }
        function q(Q, ue, K, me, ae) {
          const Ee = (0, F.KV)(),
            Se = (0, L.jE)();
          return (0, k.n)({
            mutationFn: () => I(Ee, Q, ue, K),
            onSuccess: ([te, oe]) => {
              te == n.R
                ? (w(Se, oe.nominations),
                  window.setTimeout(
                    () => Se.invalidateQueries({ queryKey: E() }),
                    1e3,
                  ),
                  ae && ae())
                : me && me(te);
            },
            onError: () => {
              me && me();
            },
          });
        }
        async function G(Q, ue, K) {
          let me = {
            cc: N.TS.COUNTRY,
            l: N.TS.LANGUAGE,
            realm: x.TU.k_ESteamRealmGlobal,
            origin: self.origin,
            f: "jsonfull",
            term: Q.replace(" ", "+"),
            require_type: "game",
            is_released_somewhere: 1,
            excluded_tags: _.Fm.Get().GetExcludedTagsSortedByID(),
            excluded_content_descriptors: _.Fm.Get().ExcludedContentDescriptor,
            excluded_apps: K,
          };
          ue.release_date_max &&
            (me.release_date_max = new Date(
              ue.release_date_max * 1e3,
            ).toISOString()),
            ue.release_date_min &&
              (me.release_date_min = new Date(
                ue.release_date_min * 1e3,
              ).toISOString()),
            ue.flag == t.Xs.O8 && (me.vrsupport = 1),
            ue.flag == t.Xs.x1 &&
              (me.steam_deck_compat_categories = [S.YX, S.sd, S.I2]);
          const ae = `${N.TS.STORE_BASE_URL}search/suggest`;
          return (
            (await O().get(ae, { params: me, withCredentials: !0 })).data ?? []
          );
        }
        function C(Q, ue, K) {
          return (0, v.I)({
            queryKey: [Q, ue.voteid, K],
            queryFn: () => G(Q, ue, K),
            staleTime: 1 / 0,
          });
        }
        function pe() {
          const Q = m();
          return Q.data ? Q.data.map((ue) => ue.appid) : [];
        }
        async function M(Q, ue) {
          const K = a.w.Init(t.CX);
          K.Body().set_generate_new(ue);
          const me = await t.AH.GetNominationShareLink(Q, K);
          return (
            me.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${me.GetEResult()}`,
              ),
            [me.GetEResult(), me.Body().toObject()]
          );
        }
        function fe() {
          const Q = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`GetNominationShareLink_${N.iA.accountid}`],
            queryFn: async () => M(Q, !1),
            initialData: () => [n.R, se()?.share_link],
            staleTime: 1 / 0,
            enabled: N.iA.logged_in,
          });
        }
        function W() {
          const Q = (0, F.KV)(),
            ue = (0, L.jE)();
          return (0, k.n)({
            mutationFn: () => M(Q, !0),
            onSuccess: ([K, me]) => {
              K == n.R &&
                ue.setQueryData(
                  [`GetNominationShareLink_${N.iA.accountid}`],
                  [K, me],
                );
            },
          });
        }
        async function re(Q, ue, K, me) {
          const ae = a.w.Init(t.yX);
          ae.Body().set_voteid(K),
            ae.Body().set_appid(ue),
            ae.Body().set_sale_appid(me);
          const Ee = await t.zF.SetVote(Q, ae);
          return (
            Ee.BSuccess() ||
              console.warn(
                `Failed to set vote for app (${ue}): ${Ee.GetEResult()}`,
              ),
            [Ee.GetEResult(), Ee.Body().toObject()]
          );
        }
        function he(Q, ue, K) {
          const me = (0, F.KV)(),
            ae = (0, L.jE)();
          return (0, k.n)({
            mutationFn: () => re(me, Q, ue, K),
            onSuccess: ([Ee, Se]) => {
              Ee == n.R &&
                ae.setQueryData(
                  [`SteamAwardUserVotes_${N.iA.accountid}`],
                  Se.user_votes,
                );
            },
          });
        }
        async function be(Q, ue) {
          const K = a.w.Init(t.qX);
          K.Body().set_sale_appid(ue);
          const me = await t.zF.GetUserVotes(Q, K);
          return (
            me.BSuccess() ||
              console.warn(`Failed to get votes for user: ${me.GetEResult()}`),
            me.Body().toObject()?.user_votes
          );
        }
        function Le(Q) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardUserVotes_${N.iA.accountid}`],
            queryFn: () => be(ue, Q),
            initialData: () => se()?.user_votes,
            enabled: N.iA.logged_in,
          });
        }
        function Ne(Q, ue) {
          const K = Le(Q);
          return (0, h.useMemo)(
            () => K.data?.find((me) => me.voteid == ue)?.appid,
            [ue, K.data],
          );
        }
        function Re(Q) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardItemDefs_${Q}`],
            queryFn: async () => {
              const K = a.w.Init(D.RG);
              return (
                K.Body().set_appid(Q),
                K.Body().set_language(N.TS.LANGUAGE),
                (await D.uy.GetCommunityItemDefinitions(ue, K))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
            initialData: () => se()?.item_definitions,
          });
        }
        function Pe(Q, ue) {
          const K = Re(Q),
            me = H(Q);
          if (!K.data || !me.data) return null;
          const ae = me.data.votes.find((Ee) => Ee.voteid == ue);
          return K.data.item_definitions?.find(
            (Ee) => Ee.item_type == ae.item_type,
          );
        }
        function Ie() {
          return h.useContext(J).yearStyles;
        }
      },
      73191: (ge, de, r) => {
        "use strict";
        r.d(de, { Hh: () => N, vs: () => k });
        var n = r(7850),
          x = r(90626),
          a = r(96538),
          s = r(56330),
          t = r.n(s),
          v = r(18210),
          L = r(85599);
        function k(T) {
          const [_, U] = (0, x.useState)(() => !!T),
            [O, S] = (0, x.useState)(!1),
            [h, D] = (0, x.useState)(!1),
            [g, o] = (0, x.useState)(null),
            [p, b] = (0, x.useState)(null),
            [V, ne] = (0, x.useState)(null),
            [se, J] = (0, x.useState)(null),
            [H, c] = (0, x.useState)(null);
          return {
            bLoading: _,
            bError: O,
            bSuccess: h,
            strError: g,
            strSuccess: p,
            elSuccess: se,
            elError: V,
            strThrobber: H,
            fnSetLoading: U,
            fnSetError: S,
            fnSetSuccess: D,
            fnSetStrError: o,
            fnSetStrSuccess: b,
            fnSetElSuccess: J,
            fnSetElError: ne,
            fnSetThrobber: c,
          };
        }
        function F(T, _) {
          _ != k_EResultOK ? T.fnSetError(!0) : T.fnSetSuccess(!0);
        }
        function N(T) {
          const {
              strDialogTitle: _,
              state: U,
              closeModal: O,
              strThrobber: S,
            } = T,
            {
              bLoading: h,
              bError: D,
              bSuccess: g,
              strError: o,
              strSuccess: p,
              elSuccess: b,
              elError: V,
              strThrobber: ne,
            } = U;
          return D || o || V
            ? (0, n.jsxs)(a.o0, {
                strTitle: _,
                bAlertDialog: !0,
                closeModal: O,
                className: s.SuccessErrorDialog,
                children: [
                  !!o &&
                    (0, n.jsx)("div", {
                      className: s.ErrorStylesWithIcon,
                      children:
                        o || (0, v.we)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!V && V,
                ],
              })
            : g || p || b
              ? (0, n.jsx)(a.o0, {
                  strTitle: _,
                  strDescription: p || (0, v.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: O,
                  className: s.SuccessErrorDialog,
                  children: (0, n.jsx)(n.Fragment, { children: !!b && b }),
                })
              : (0, n.jsx)(a.o0, {
                  strTitle: _,
                  className: s.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, n.jsx)(L.t, {
                    string: S || ne || (0, v.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                });
        }
      },
      82385: (ge, de, r) => {
        "use strict";
        r.d(de, { AD: () => Fe, He: () => ee });
        var n = r(7850),
          x = r(14947),
          a = r(75844),
          s = r(90626),
          t = r(99412),
          v = r(41301),
          L = r(19298),
          k = r(72849),
          F = r(9046),
          N = r(32606),
          T = r(813),
          _ = r(7582),
          U = r(34360),
          O = r(31117),
          S = r(94520),
          h = r(98144),
          D = r(90316),
          g = r.n(D),
          o = r(95695),
          p = r.n(o),
          b = r(13465),
          V = r(36118),
          ne = r(85599),
          se = r(53107),
          J = r(5552),
          H = r(71742),
          c = r(8323),
          m = r(36707),
          f = r(82734),
          E = r(18210),
          $ = r(30096),
          z = r(53113),
          w = r(3166),
          I = r(17009),
          q = r.n(I),
          G = r(90537),
          C = r(56492),
          pe = r(88812),
          M = r(42184),
          fe = r(5191),
          W = r(80684),
          re = r(7967),
          he = r(76559),
          be = r(60480),
          Le = r(84676);
        function Ne(P) {
          const { bOn: Y } = P;
          return jsx("div", {
            className: Y ? sharedstyles.OnIndicator : sharedstyles.OffIndicator,
            children: Localize(Y ? "#Dialog_On" : "#Dialog_Off"),
          });
        }
        function Re(P) {
          return CommunityConfig.IS_CREATOR_HOME
            ? jsx(Pe, { identifier: P.identifier })
            : CommunityConfig.IS_CURATOR
              ? jsx(Ie, { identifier: P.identifier })
              : jsx(Q, { identifier: P.identifier });
        }
        function Pe(P) {
          const Y = new CSteamID(CommunityConfig.CLANSTEAMID),
            { creatorHome: ve } = useCreatorHome(Y.GetAccountID());
          return !ve || !ve.BIsLoaded()
            ? null
            : jsx(ue, {
                strURL: NavLink(ve.GetCreatorHomeURL("developer")),
                strImgUrl: ve.GetAvatarURLFullSize(),
                strName: ve.GetName(),
              });
        }
        function Ie(P) {
          const Y = useClanInfoByVanity(CommunityConfig.VANITY_ID);
          return Y
            ? jsx(ue, {
                strURL: NavLink(
                  Config.COMMUNITY_BASE_URL +
                    "groups/" +
                    CommunityConfig.VANITY_ID,
                ),
                strImgUrl: Y.avatar_full_url,
                strName: Y.group_name,
              })
            : null;
        }
        function Q(P) {
          const [Y] = useStoreItemCacheApp(CommunityConfig.APPID, {
            include_assets: !0,
            include_release: !0,
          });
          return Y
            ? jsx(ue, {
                strURL: NavLink(Y.GetStorePageURL()),
                strImgUrl: Y.GetAssets().GetSmallCapsuleURL(),
                strName: Y.GetName(),
              })
            : null;
        }
        function ue(P) {
          const { strURL: Y, strImgUrl: ve, strName: De } = P;
          return jsx("div", {
            className: sharedstyles.EventDashboardAppCtn,
            children: jsx("div", {
              className: sharedstyles.AppTitle,
              children: jsxs("a", {
                href: Y,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: [jsx("img", { src: ve }), De],
              }),
            }),
          });
        }
        function K(P) {
          const { children: Y } = P;
          return (0, w.Qn)() && !w.TS.IN_STEAMUI
            ? (0, n.jsx)(re.Qg, {
                className: o.GamepadOnlyScrollPanel,
                children: Y,
              })
            : (0, n.jsx)(n.Fragment, { children: Y });
        }
        var me = r(79590),
          ae = r(73644),
          Ee = r(41032),
          Se = r(37589),
          te = r(20169),
          oe = Object.defineProperty,
          xe = Object.getOwnPropertyDescriptor,
          je = (P, Y, ve, De) => {
            for (
              var we = De > 1 ? void 0 : De ? xe(Y, ve) : Y,
                Qe = P.length - 1,
                Ce;
              Qe >= 0;
              Qe--
            )
              (Ce = P[Qe]) && (we = (De ? Ce(Y, ve, we) : Ce(we)) || we);
            return De && we && oe(Y, ve, we), we;
          };
        const Te = 56,
          Ge = 136,
          ke = s.lazy(() =>
            Promise.all([
              r.e(36597),
              r.e(56589),
              r.e(85599),
              r.e(33512),
              r.e(94781),
              r.e(18307),
              r.e(8892),
              r.e(80702),
              r.e(48355),
              r.e(36786),
              r.e(55050),
              r.e(60480),
              r.e(60839),
              r.e(14632),
              r.e(54409),
              r.e(73810),
              r.e(49968),
              r.e(34004),
              r.e(11095),
              r.e(14867),
              r.e(8319),
              r.e(10177),
              r.e(68396),
            ]).then(r.bind(r, 2422)),
          );
        function ze(P) {
          const [Y, ve] = (0, Le.t7)(P.appid, { include_assets: !0 }),
            [De, we] = (0, T.TB)(P.clanID);
          let Qe = "";
          return (
            P.appid
              ? (Qe = Y?.GetAssets()?.GetCommunityIconURL() || "")
              : P.clanID && (Qe = we ? we.avatar_full_url : ""),
            (0, n.jsx)("div", {
              className: (0, m.A)(q().ScrollButton, q().GameArt, q().AnimIn),
              onClick: P.onAppIconClick,
              children: !!Qe && (0, n.jsx)("img", { src: Qe }),
            })
          );
        }
        let Fe = class extends s.Component {
          m_loader = null;
          m_refPage = s.createRef();
          m_refContent = s.createRef();
          m_refScroll = s.createRef();
          m_refScrollAnchor = s.createRef();
          m_scrollAnimation = null;
          m_nTouchStartClientY;
          m_nPreviousRenderCount = 0;
          m_nCurrentRenderCount = 0;
          constructor(P) {
            super(P),
              !this.props.bShowOnlyInitialEvent &&
                this.props.initialEvent &&
                ((this.m_loader = new $e(this.props.partnerEventStore)),
                this.m_loader.InitAroundEvent(
                  this.props.initialEvent,
                  this.props.additionalParams,
                ));
          }
          FindCurrentlyViewedEventIndex() {
            if (!this.m_refContent.current || !this.m_refScroll.current)
              return -1;
            let Y = this.m_refContent.current.children,
              ve = this.GetScrollTopForComparison();
            for (let De = 0; De < Y.length; De++) {
              let we = Y[De],
                Qe = we.offsetTop,
                Ce = Qe + we.clientHeight;
              if (Qe <= ve && Ce > ve) return De;
            }
            return -1;
          }
          GetPaddingTop() {
            return this.props.showAppHeader ? Ge : Te;
          }
          GetScrollTopForComparison() {
            return Math.ceil(
              this.m_refScroll.current.scrollTop + this.GetPaddingTop() + 24,
            );
          }
          ScrollToEvent(P) {
            let Y = this.m_refContent.current;
            if (!Y || P < 0 || P >= Y.children.length || this.m_scrollAnimation)
              return;
            let ve = Y.children[P].offsetTop - this.GetPaddingTop();
            this.ScrollToOffset(ve);
          }
          ScrollToOffset(P) {
            let Y = this.m_refScroll.current;
            if (!Y) return;
            let ve = {
              msDuration: 500,
              timing: "cubic-in-out",
              onComplete: this.OnScrollComplete,
            };
            (this.m_scrollAnimation = new J.JV(Y, { scrollTop: P }, ve)),
              this.m_scrollAnimation.Start();
          }
          ScrollToBottom() {
            this.m_refScroll.current &&
              this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
          }
          ScrollToNextEvent() {
            let P = this.m_loader.GetEvents(),
              Y = this.FindCurrentlyViewedEventIndex() + 1;
            if (Y >= P.length) {
              this.ScrollToBottom();
              return;
            }
            this.ScrollToEvent(Y),
              Y == P.length - 1 && this.m_loader.LoadMoreAtEnd();
          }
          ScrollToPrevEvent() {
            let P = this.FindCurrentlyViewedEventIndex(),
              Y = P - 1;
            if (Y < 0) {
              this.ScrollToOffset(0);
              return;
            }
            let ve = this.m_refContent.current;
            if (ve) {
              let De = ve.children[P],
                we = De.offsetTop,
                Qe = we + De.clientHeight,
                Ce = this.GetScrollTopForComparison();
              (Ce = Ce - (Qe - we) * 0.3), we <= Ce && (Y = P);
            }
            this.ScrollToEvent(Y);
          }
          OnScrollComplete() {
            this.m_scrollAnimation = null;
          }
          Close() {
            if (this.props.closeModal) {
              this.props.closeModal();
              return;
            }
          }
          OnBackgroundClick(P) {
            P.currentTarget == P.target && this.Close();
          }
          OnKeyDown(P) {
            P.keyCode == v.zV && this.Close();
          }
          OnScroll(P) {
            if (this.props.bShowOnlyInitialEvent) return;
            let Y = this.m_refScroll.current;
            if (!Y) return;
            let ve = Y.clientHeight;
            Y.scrollHeight - (Y.scrollTop + ve) <= ve &&
              this.m_loader.LoadMoreAtEnd(),
              Y.scrollTop <= ve && this.m_loader.LoadMoreAtBeginning();
          }
          getSnapshotBeforeUpdate(P) {
            let Y = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
            if (
              ((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !Y)
            )
              return null;
            let ve = this.m_refScroll.current;
            if (!ve || !this.m_refScrollAnchor.current) return null;
            let De = this.m_refScrollAnchor.current.GetDOM();
            return De ? De.offsetTop - ve.scrollTop : null;
          }
          OnTouchStart(P) {
            P.touches.length == 1 &&
              (this.m_nTouchStartClientY = P.touches[0].clientY);
          }
          OnTouchMove(P) {
            if (!this.m_refScroll.current || P.touches.length == 0) return;
            const Y = this.m_nTouchStartClientY - P.touches[0].clientY;
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(P, Y);
          }
          OnWheel(P) {
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(P, P.deltaY);
          }
          SuppressUnwantedScrollEventsBecauseSafariIsDumb(P, Y) {
            const ve =
                f.kD(P.target) && f.id(this.m_refScroll.current, P.target),
              De = Y < 0 && this.m_refScroll.current.scrollTop < 1,
              we =
                this.m_refScroll.current.scrollHeight -
                  this.m_refScroll.current.scrollTop <=
                this.m_refScroll.current.clientHeight,
              Qe = Y > 0 && we;
            (!ve || De || Qe) && P.cancelable && P.preventDefault();
          }
          SetGlobalHeaderHidden(P) {
            const Y = document.getElementsByClassName("responsive_header");
            (0, H.wT)(Y.length <= 1, "Must have at most one responsive_header"),
              Y.length >= 1 && (Y[0].style.display = P ? "none" : null);
          }
          SetFooterPinnedToBottom(P) {
            const Y = document.getElementById("footer");
            Y && (Y.style.position = P ? "absolute" : null);
          }
          componentDidMount() {
            const P = this.m_refScroll.current;
            P && !f.id(P, P.ownerDocument.activeElement) && P.focus();
            const Y = this.m_refPage.current;
            Y &&
              (Y.addEventListener("touchstart", this.OnTouchStart),
              Y.addEventListener("touchmove", this.OnTouchMove, {
                passive: !1,
              }),
              Y.addEventListener("wheel", this.OnWheel, { passive: !1 })),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
              this.SetFooterPinnedToBottom(!0);
          }
          componentDidUpdate(P, Y, ve) {
            if (ve !== null) {
              let De = this.m_refScroll.current;
              De && !f.id(De, De.ownerDocument.activeElement) && De.focus();
              let we = this.m_refScrollAnchor.current
                ? this.m_refScrollAnchor.current.GetDOM()
                : null;
              we && (De.scrollTop = we.offsetTop - ve);
            }
          }
          componentWillUnmount() {
            const P = this.m_refPage.current;
            P &&
              (P.removeEventListener("touchstart", this.OnTouchStart),
              P.removeEventListener("touchmove", this.OnTouchMove),
              P.removeEventListener("wheel", this.OnWheel)),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
              this.SetFooterPinnedToBottom(!1);
          }
          render() {
            const { initialEvent: P, bShowOnlyInitialEvent: Y } = this.props,
              ve = !P,
              De = ve ? [] : Y ? [P] : this.m_loader.GetEvents(),
              we = [];
            let Qe = this.props.appid,
              Ce = this.props.clanSteamID?.GetAccountID();
            for (const ut of De) {
              const tt = ut.GID == this.props.initialEvent.GID,
                Mt = tt;
              we.push(
                (0, n.jsx)(
                  ee,
                  {
                    ref: tt ? this.m_refScrollAnchor : null,
                    event: ut,
                    emoticonStore: this.props.emoticonStore,
                    partnerEventStore: this.props.partnerEventStore,
                    disableReadTracking: tt,
                    fnFilterImageURLsForKnownFailures:
                      this.props.fnFilterImageURLsForKnownFailures,
                    fnImageFailureCallback: this.props.fnImageFailureCallback,
                    bDisableBroadcastPlayer: !Mt,
                    className: this.props.eventClassName,
                  },
                  ut.GID,
                ),
              ),
                Qe == null && (Qe = ut.appid),
                Ce == null && (Ce = ut.clanSteamID.GetAccountID());
            }
            return (
              (this.m_nCurrentRenderCount = we.length),
              (0, n.jsxs)(L.Z, {
                onCancelButton: this.props.closeModal,
                className: q().AppPartnerEventsPage,
                ref: this.m_refPage,
                children: [
                  this.props.showAppHeader &&
                    (0, n.jsx)(M.v, { appId: Qe, clanId: Ce }),
                  (0, n.jsx)(L.Z, {
                    className: (0, m.A)(
                      q().AppPartnerEventsBody,
                      q().EndlessScroll,
                    ),
                    ref: this.m_refScroll,
                    onScroll: this.OnScroll,
                    onClick: this.OnBackgroundClick,
                    tabIndex: -1,
                    onKeyDown: this.OnKeyDown,
                    scrollIntoViewType: te.Yo.NoTransformSparseContent,
                    children: ve
                      ? (0, n.jsx)("div", {
                          className: q().NoEvents,
                          children: (0, E.we)("#EventDisplay_NoEventsToSee"),
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              className: (0, m.A)(
                                q().ControlSection,
                                !this.props.onAppIconClick && q().NoGameLink,
                                Y && q().NoScrollArrows,
                              ),
                              children: (0, n.jsx)("div", {
                                className: q().ControlSectionWidth,
                                children: (0, n.jsxs)("div", {
                                  className: q().ControlSectionRightSide,
                                  children: [
                                    !!this.props.closeModal &&
                                      (0, n.jsx)("div", {
                                        className: (0, m.A)(
                                          q().CloseButton,
                                          q().AnimIn,
                                        ),
                                        onClick: this.Close,
                                        children: (0, n.jsx)(V.sED, {}),
                                      }),
                                    !Y &&
                                      (0, n.jsx)("div", {
                                        className: (0, m.A)(
                                          q().ScrollButton,
                                          q().Up,
                                          q().AnimIn,
                                        ),
                                        onClick: this.ScrollToPrevEvent,
                                        children: (0, n.jsx)(V.V5W, {
                                          angle: 0,
                                        }),
                                      }),
                                    !Y &&
                                      (0, n.jsx)("div", {
                                        className: (0, m.A)(
                                          q().ScrollButton,
                                          q().Down,
                                          q().AnimIn,
                                        ),
                                        onClick: this.ScrollToNextEvent,
                                        children: (0, n.jsx)(V.V5W, {
                                          angle: 180,
                                        }),
                                      }),
                                    this.props.onAppIconClick &&
                                      (0, n.jsx)(ze, {
                                        appid: Qe,
                                        clanID: Ce,
                                        onAppIconClick:
                                          this.props.onAppIconClick,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            !Y &&
                              (0, n.jsx)(B, {
                                loader: this.m_loader,
                                location: "top",
                              }),
                            (0, n.jsx)("div", {
                              ref: this.m_refContent,
                              className: (0, m.A)(
                                q().AppPartnerEventsContainer,
                                !this.props.onAppIconClick && q().NoGameLink,
                              ),
                              children: we,
                            }),
                            !Y &&
                              (0, n.jsx)(B, {
                                loader: this.m_loader,
                                location: "bottom",
                              }),
                          ],
                        }),
                  }),
                ],
              })
            );
          }
        };
        je([$.oI], Fe.prototype, "ScrollToNextEvent", 1),
          je([$.oI], Fe.prototype, "ScrollToPrevEvent", 1),
          je([$.oI], Fe.prototype, "OnScrollComplete", 1),
          je([$.oI], Fe.prototype, "Close", 1),
          je([$.oI], Fe.prototype, "OnBackgroundClick", 1),
          je([$.oI], Fe.prototype, "OnKeyDown", 1),
          je([$.oI], Fe.prototype, "OnScroll", 1),
          je([$.oI], Fe.prototype, "OnTouchStart", 1),
          je([$.oI], Fe.prototype, "OnTouchMove", 1),
          je([$.oI], Fe.prototype, "OnWheel", 1),
          (Fe = je([a.PA], Fe));
        const B = (0, a.PA)((P) => {
            let Y = P.loader.GetNewerState(),
              ve = P.loader.GetOlderState();
            return Y == 2 && ve == 2
              ? null
              : (P.location == "top" ? Y : ve) == 2
                ? (0, n.jsx)("div", {
                    className: q().DirectionState,
                    children: (0, n.jsx)(ne.t, {
                      position: "center",
                      string: (0, E.we)("#Loading"),
                    }),
                  })
                : null;
          }),
          ee = s.forwardRef(function (Y, ve) {
            const De = (0, w.Qn)(),
              [we, Qe] = (0, Le.t7)(Y.event.appid, { include_assets: !0 }),
              Ce = (0, Ee.Zj)(Y.event.appid),
              ut = (0, G.Y)();
            return (0, n.jsx)(ye, {
              ref: ve,
              ...Y,
              bInGamepadUI: De,
              bShouldMaskImages: Ce,
              storeItem: we,
              tracker: ut,
            });
          });
        let ye = class extends s.Component {
          m_refContent = s.createRef();
          m_sendReadInfo = new c.LU();
          m_bSentRead = !1;
          OnEnterVisible() {
            if (this.m_bSentRead || this.m_sendReadInfo.IsScheduled()) return;
            const P = 750,
              Y = () => {
                this.props.tracker.RecordEventRead(this.props.event, k.Tc.ot),
                  (this.m_bSentRead = !0);
              };
            this.m_sendReadInfo.Schedule(P, Y);
          }
          OnLeaveVisible() {
            this.m_sendReadInfo.Cancel();
          }
          GetDOM() {
            return this.m_refContent.current;
          }
          render() {
            const {
                event: P,
                langOverride: Y,
                partnerEventStore: ve,
                emoticonStore: De,
                className: we,
                additionalTypeAndDateElement: Qe,
                headerClassnames: Ce,
                isPreview: ut,
                bShouldMaskImages: tt,
                storeItem: Mt,
              } = this.props,
              et = Y || (0, t.sfN)(w.TS.LANGUAGE),
              lt = P.GetDescriptionWithFallback(et) || "",
              yt = Ce,
              Wt = "300px",
              ht = P.GetCategoryAsString(),
              ct = P.type;
            let qe = "";
            if (P.appid) qe = Mt?.GetName() || "";
            else if (P.clanSteamID) {
              const dt = T.ac.GetClanInfoByClanAccountID(
                P.clanSteamID.GetAccountID(),
              );
              qe = dt ? dt.group_name : "";
            }
            const st = _.HD.GetTimeNowWithOverride(),
              at =
                ct !== t.uYK && st < P.GetStartTimeAndDateUnixSeconds() && !ut;
            return (0, n.jsx)(K, {
              children: (0, n.jsxs)("div", {
                ref: this.m_refContent,
                className: (0, m.A)(
                  we,
                  q().PartnerEvent,
                  g().InLibraryView,
                  yt == "editor" ? g().InEditor : "",
                ),
                children: [
                  (0, n.jsx)(Me, { ...this.props, eLanguage: et }),
                  (0, n.jsx)("div", {
                    className: g().LibraryEventTitleContainer,
                    children: (0, n.jsxs)("div", {
                      className: g().EventDetailTitleContainer,
                      children: [
                        this.props.headerElement,
                        (0, n.jsxs)("div", {
                          className: (0, m.A)(
                            q().EventTypeAndTimeRow,
                            at && q().WithReminder,
                          ),
                          children: [
                            (0, n.jsxs)("div", {
                              className: q().TimeandPostedBy,
                              children: [
                                (0, n.jsx)("span", {
                                  className: q().EventType,
                                  children: ht,
                                }),
                                (0, n.jsxs)("span", {
                                  className: q().PostedBy,
                                  children: [
                                    " ",
                                    (0, E.we)("#EventDisplay_PostedBy"),
                                    qe,
                                    " ",
                                  ],
                                }),
                                (0, n.jsx)(N.O, {
                                  event: P,
                                  className: g().EventDetailTimeInfo,
                                }),
                              ],
                            }),
                            at &&
                              !ut &&
                              (0, n.jsx)("div", {
                                className: q().ReminderContainer,
                                children: (0, n.jsx)(fe.j, {
                                  eventModel: P,
                                  lang: et,
                                  bExpandLeft: !0,
                                }),
                              }),
                            !ut && Qe,
                          ],
                        }),
                        !this.props.disableReadTracking &&
                          !ut &&
                          (0, n.jsx)(Se.Y, {
                            onEnter: this.OnEnterVisible,
                            onLeave: this.OnLeaveVisible,
                            options: { rootMargin: `0px 0px -${Wt} 0px` },
                          }),
                        this.props.bInGamepadUI
                          ? (0, n.jsx)("div", {
                              className: g().EventDetailTitle,
                              children: P.GetNameWithFallback(et),
                            })
                          : (0, n.jsx)(C.tj, {
                              eventModel: P,
                              route: C.PH.k_eView,
                              className: g().EventDetailTitle,
                              children: P.GetNameWithFallback(et),
                            }),
                        P.BHasSubTitle(et) &&
                          (0, n.jsx)("div", {
                            className: (0, m.A)(
                              g().EventDetailsSubTitle,
                              q().LibraryViewSubtitle,
                            ),
                            children: P.GetSubTitle(et),
                          }),
                        (0, n.jsx)("div", {
                          className: g().EventDetailUserType,
                        }),
                      ],
                    }),
                  }),
                  !!(
                    P.BEventCanShowBroadcastWidget() &&
                    !this.props.bDisableBroadcastPlayer
                  ) &&
                    (0, n.jsx)("div", {
                      className: g().EventBroadcastCtn,
                      children: (0, n.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, n.jsx)(ke, { event: this.props.event }),
                      }),
                    }),
                  P.BHasTag("steam_award_nomination_request") &&
                    (0, n.jsx)(h.EventDisplaySteamAwardNomination, {
                      event: P,
                      lang: et,
                    }),
                  P.BHasTag("steam_award_vote_request") &&
                    (0, n.jsx)(h.WinterSaleSteamAwardVoteWrapper, {
                      appID: P.appid,
                      bIsEventActionEnabled: P.BIsEventActionEnabled(),
                      voteCategories: P.GetSteamAwardNomineeCategories(),
                    }),
                  (0, n.jsxs)("div", {
                    className: g().LibraryEventBodyContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, m.A)(
                          g().EventDetailsBody,
                          q().EventDetailsBody,
                          tt && g().MaskImages,
                        ),
                        onContextMenu: w.TS.IN_CLIENT ? U.aE : void 0,
                        children: [
                          (0, n.jsx)(S.fh, { text: lt, event: P }),
                          (0, n.jsx)("span", { className: p().Clear }),
                        ],
                      }),
                      (0, n.jsx)(W._, { event: this.props.event }),
                      !!P.jsondata.read_more_link &&
                        (0, n.jsx)("div", {
                          className: (0, m.A)(q().ReadMoreCnt),
                          children: (0, n.jsx)(se.uU, {
                            className: (0, m.A)(p().Button),
                            href: P.jsondata.read_more_link,
                            children: (0, E.we)(
                              "#EventEmail_Button_ClickForMoreDetails",
                            ),
                          }),
                        }),
                      !!(
                        P.jsondata.bSaleEnabled && P.jsondata.sale_vanity_id
                      ) &&
                        (0, n.jsxs)("div", {
                          className: (0, m.A)(q().ReadMoreCnt),
                          children: [
                            (0, n.jsx)(me.m, { gidEvent: P.GID }),
                            (0, n.jsx)("a", {
                              className: (0, m.A)(p().Button, "LinkButton"),
                              href: (0, z.k2)((0, be.n4)(P)),
                              children: (0, E.we)(
                                "#Event_Button_VisitSalePage",
                              ),
                            }),
                          ],
                        }),
                      (0, n.jsx)(ae.lS, { appid: P.appid }),
                    ],
                  }),
                  !ut && (0, n.jsx)(O.F, { eventModel: P, emoticonStore: De }),
                ],
              }),
            });
          }
        };
        je([$.oI], ye.prototype, "OnEnterVisible", 1),
          je([$.oI], ye.prototype, "OnLeaveVisible", 1),
          (ye = je([a.PA], ye));
        function Me(P) {
          const {
              event: Y,
              fnFilterImageURLsForKnownFailures: ve,
              fnImageFailureCallback: De,
              eLanguage: we,
              bShouldMaskImages: Qe,
            } = P,
            Ce = Y.BImageNeedScreenshotFallback("background", we),
            ut = Y.type;
          let tt = (0, pe.WC)(Y, "background", we, F.wI.background_main, !Ce);
          return (
            ve && tt && (tt = ve(tt)),
            (0, n.jsxs)(n.Fragment, {
              children: [
                ut != t.Fwr &&
                  !Ce &&
                  (0, n.jsx)(b.c, {
                    className: (0, m.A)(
                      g().EventCoverImageBackground,
                      Qe && g().MaskImages,
                    ),
                    rgSources: tt,
                    onIncrementalError: (Mt, et, lt) => De && De(et),
                  }),
                tt &&
                  tt.length > 0 &&
                  (0, n.jsx)(b.c, {
                    className: g().EventBackgroundBlur,
                    rgSources: tt,
                    onIncrementalError: (Mt, et, lt) => De && De(et),
                  }),
              ],
            })
          );
        }
        var Je = ((P) => (
          (P[(P.Idle = 1)] = "Idle"),
          (P[(P.Loading = 2)] = "Loading"),
          (P[(P.EndOfContent = 3)] = "EndOfContent"),
          P
        ))(Je || {});
        class $e {
          k_nMaxPerDirection = 3;
          m_nAppID = 0;
          m_clanSteamID;
          m_partnerEventStore;
          m_additionalParams;
          m_rgEvents = [];
          m_eOlderDirection = 1;
          m_eNewerDirection = 1;
          constructor(Y) {
            (0, x.Gn)(this), (this.m_partnerEventStore = Y);
          }
          GetEvents() {
            return this.m_rgEvents;
          }
          GetAppID() {
            return this.m_nAppID;
          }
          GetOlderState() {
            return this.m_eOlderDirection;
          }
          GetNewerState() {
            return this.m_eNewerDirection;
          }
          async InitAroundEvent(Y, ve) {
            const De = this.m_partnerEventStore;
            (this.m_nAppID = Y.appid),
              (this.m_clanSteamID = Y.clanSteamID),
              (this.m_rgEvents = []),
              (this.m_eOlderDirection = 2),
              (this.m_eNewerDirection = 2),
              (this.m_additionalParams = ve),
              this.m_rgEvents.push(Y);
            let we = null;
            try {
              we = await De.LoadAdjacentPartnerEventsByEvent(
                Y,
                this.m_clanSteamID,
                this.m_nAppID,
                this.k_nMaxPerDirection,
                this.k_nMaxPerDirection,
                this.m_additionalParams,
              );
            } catch {}
            (0, x.h5)(() => {
              if (!we || we.length == 0) {
                (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
                return;
              }
              let Qe = we.findIndex((tt) => tt.GID == Y.GID),
                Ce = Qe,
                ut = Qe >= 0 ? we.length - Qe - 1 : 0;
              (this.m_eNewerDirection = Ce >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_eOlderDirection =
                  ut >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_rgEvents = we);
            });
          }
          async LoadMoreAtEnd() {
            if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let Y = this.m_rgEvents[this.m_rgEvents.length - 1];
            this.m_eOlderDirection = 2;
            let ve = null;
            try {
              ve =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  Y,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  0,
                  this.k_nMaxPerDirection,
                  this.m_additionalParams,
                );
            } catch {}
            (0, x.h5)(() => {
              if (!ve) {
                this.m_eOlderDirection = 1;
                return;
              }
              const De = new Set(this.m_rgEvents.map((we) => we.GID));
              for (let we of ve)
                De.has(we.GID) || (this.m_rgEvents.push(we), De.add(we.GID));
              this.m_eOlderDirection =
                ve.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
          async LoadMoreAtBeginning() {
            if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let Y = this.m_rgEvents[0];
            this.m_eNewerDirection = 2;
            let ve = null;
            try {
              ve =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  Y,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  this.k_nMaxPerDirection,
                  0,
                );
            } catch {}
            (0, x.h5)(() => {
              if (!ve) {
                this.m_eNewerDirection = 1;
                return;
              }
              const De = new Set(this.m_rgEvents.map((we) => we.GID));
              for (let we of ve.reverse())
                De.has(we.GID) || (this.m_rgEvents.unshift(we), De.add(we.GID));
              this.m_eNewerDirection =
                ve.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
        }
        je([x.sH.shallow], $e.prototype, "m_rgEvents", 2),
          je([x.sH], $e.prototype, "m_eOlderDirection", 2),
          je([x.sH], $e.prototype, "m_eNewerDirection", 2);
      },
      33752: (ge, de, r) => {
        "use strict";
        r.d(de, { W: () => $ });
        var n = r(7850),
          x = r(26589),
          a = r(40358),
          s = r(75844),
          t = r(90626),
          v = r(76559),
          L = r(813),
          k = r(19619),
          F = r(10142),
          N = r(16412),
          T = r(36118),
          _ = r(53107),
          U = r(47689),
          O = r(36707),
          S = r(18210),
          h = r(53113),
          D = r(3166),
          g = r(17009),
          o = r.n(g),
          p = r(80702),
          b = r(95414),
          V = r(73259);
        function ne(z) {
          const {
              appId: w,
              clanId: I,
              strCapsuleUrl: q,
              strGroupTitle: G,
              strExtraBannerGroupStyle: C,
              actions: pe,
            } = z,
            M = w !== V.DU,
            fe = t.useMemo(() => (w ? { appid: w } : { creatorid: I }), [w, I]),
            W = (0, n.jsx)("img", { className: o().AppBannerLogo, src: q });
          return (0, D.Qn)()
            ? null
            : (0, n.jsxs)("div", {
                className: o().AppBannerCtn,
                children: [
                  (0, n.jsx)("div", {
                    className: o().AppBannerBackground,
                    style: { backgroundImage: `url(${q})` },
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, O.A)(o().AppBannerGroup, C),
                    children: [
                      M
                        ? w
                          ? (0, n.jsx)(p.Q, {
                              id: fe,
                              className: o().AppBannerLogoCtn,
                              hoverProps: {
                                direction: "overlay",
                                style: { minWidth: "320px" },
                              },
                              children: W,
                            })
                          : (0, n.jsx)(b.u, {
                              id: fe,
                              hoverClassName: o().AppBannerLogoCtn,
                              children: W,
                            })
                        : (0, n.jsxs)("div", {
                            className: o().AppBannerLogoCtn,
                            children: [W, " "],
                          }),
                      (0, n.jsxs)("div", {
                        className: o().AppBannerTitle,
                        children: [
                          G,
                          (0, n.jsx)("div", {
                            className: o().NewsHubSubTitle,
                            children: (0, S.we)(
                              "#EventDisplay_NewsHubSubtitle",
                            ),
                          }),
                        ],
                      }),
                      M &&
                        (0, n.jsx)("div", {
                          className: o().AppBannerLinks,
                          children: pe,
                        }),
                    ],
                  }),
                ],
              });
        }
        function se(z) {
          const { appid: w, clanAccountID: I } = z,
            q = React.useMemo(() => (w ? { appid: w } : void 0), [w]),
            { data: G } = useStoreItemDefaultInfo(q),
            { data: C } = useStoreItemAssets(q),
            { data: pe } = useClanInfoByAccountID(w ? void 0 : I),
            { bIsOwned: M } = useIsStoreItemOwned(q),
            fe = w
              ? C
                ? StoreAssetURL(C, "header")
                : void 0
              : pe?.avatar_full_url,
            W = w ? G?.name : pe?.group_name;
          return jsx(ne, {
            appId: w ?? 0,
            clanId: I,
            strCapsuleUrl: fe,
            strGroupTitle: W,
            strExtraBannerGroupStyle: w ? void 0 : styles.ClanBanner,
            actions: jsxs(Fragment, {
              children: [
                !!(w && !M) &&
                  jsx("div", {
                    className: styles.HeaderWishlistButton,
                    children: jsx(WishlistButton, {
                      appid: w,
                      bIsFree: !!G?.is_free,
                      bIsComingSoon: !!G?.is_coming_soon,
                      className: classnames(
                        styles.ActionButton,
                        styles.WishlistBtnShort,
                      ),
                    }),
                  }),
                jsx("div", {
                  className: styles.HeaderFollowButton,
                  children: w
                    ? jsx(AppFollowButton, {
                        appid: w,
                        className: styles.HeaderButtonDark,
                      })
                    : jsx(CuratorFollowButton, {
                        clanAccountID: I,
                        className: styles.HeaderButtonDark,
                      }),
                }),
              ],
            }),
          });
        }
        var J = r(56492),
          H = r(72147),
          c = r(64774);
        function m(z, w) {
          const [I, q] = (0, t.useState)({}),
            G = (0, U.m)("useEventHeaderData");
          return (
            (0, t.useEffect)(() => {
              if (z)
                F.A.Get()
                  .QueueAppRequest(z, {
                    include_assets: !0,
                    include_screenshots: !0,
                  })
                  .then(() => {
                    const C = F.A.Get().GetApp(z);
                    C &&
                      !G?.token?.reason &&
                      q({
                        strCapsuleUrl: C.GetAssets().GetHeaderURL(),
                        strGroupTitle: C.GetName(),
                        strStoreURL:
                          (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          C.GetStorePageURL(),
                        strCommunityURL:
                          (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          C.GetCommunityPageURL(),
                        strForumURL:
                          (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          C.GetCommunityDiscussionForumsURL(),
                      });
                  });
              else if (w) {
                const C = v.b.InitFromClanID(w);
                L.ac.LoadClanInfoForClanSteamID(C).then((pe) => {
                  G?.token?.reason ||
                    q({
                      strCapsuleUrl: pe.avatar_full_url,
                      strGroupTitle: pe.group_name,
                      strStoreURL:
                        (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        D.TS.STORE_BASE_URL +
                        "curator/" +
                        w +
                        "/",
                      strCommunityURL:
                        (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        D.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        C.ConvertTo64BitString(),
                      strExtraBannerGroupStyle: o().ClanBanner,
                    });
                });
              }
            }, [z, G?.token?.reason, w]),
            I
          );
        }
        const f = {};
        function E(z) {
          const { appId: w, clanId: I, bShowRSSFeed: q } = z,
            { strStoreURL: G, strCommunityURL: C, strForumURL: pe } = m(w, I),
            M = (0, D.Y2)(),
            fe =
              D.TS.STORE_BASE_URL +
              "feeds/" +
              (0, J.LJ)() +
              (w ? "/app/" + w : "/group/" + I) +
              "/?cc=" +
              D.TS.COUNTRY +
              "&l=" +
              D.TS.LANGUAGE,
            { data: W } = (0, x.hM)(I),
            re = !!(W?.can_edit || W?.support_user),
            he = k.Fm.Get().BOwnsApp(w),
            be = (0, t.useMemo)(() => {
              const Le = [];
              return (
                D.TS.IN_CLIENT &&
                  he &&
                  Le.push({
                    label: (0, S.we)("#EventDisplay_ViewInLibrary_ExtraShort"),
                    data: "steam://nav/games/details/" + w,
                  }),
                Le.push({
                  label: (0, S.we)("#EventDisplay_ViewStorePage_ExtraShort"),
                  data: (0, h.k2)(G),
                }),
                M ||
                  (Le.push({
                    label: (0, S.we)(
                      "#EventDisplay_ViewCommunityPage_ExtraShort",
                    ),
                    data: (0, h.k2)(C),
                  }),
                  pe &&
                    Le.push({
                      label: (0, S.we)("#EventDisplay_ViewForum_ExtraShort"),
                      data: (0, h.k2)(pe),
                    }),
                  q &&
                    Le.push({
                      label: (0, n.jsxs)("div", {
                        className: o().RssRow,
                        children: [
                          (0, n.jsx)(T.ZPc, {}),
                          (0, S.we)("#EventDisplay_RSSFeed_ExtraShort"),
                        ],
                      }),
                      data: fe,
                    })),
                re &&
                  Le.push({
                    label: (0, S.we)("#EventDisplay_Admin_ExtraShort"),
                    data: (0, J.Hx)(w, v.b.InitFromClanID(I), "admin"),
                  }),
                Le
              );
            }, [he, G, M, re, C, pe, q, fe, w, I]);
          return (0, n.jsx)(N.m, {
            strDefaultLabel: (0, S.we)(
              "#EventDisplay_LinksDropDown_ExtraShort",
            ),
            strClassName: o().AppBannerLinkDD,
            strDropDownButtonClassName: o().AppBannerLinkDDButton,
            strDropDownMenuCtnClass: o().AppBannerLinkDDContainer,
            contextMenuPositionOptions: { bMatchWidth: !1 },
            arrowClassName: o().DDButtonArrow,
            rgOptions: be,
            onChange: (Le, Ne, Re) => (0, _.EP)(Re, Le.data),
          });
        }
        const $ = (0, s.PA)((z) => {
          const { appId: w, clanId: I } = z,
            {
              strCapsuleUrl: q,
              strGroupTitle: G,
              strExtraBannerGroupStyle: C,
            } = m(w, I),
            pe = (0, t.useMemo)(
              () => (w ? { appid: w } : { creatorid: I }),
              [w, I],
            ),
            { data: M } = (0, a.J$)(pe),
            fe = k.Fm.Get().BOwnsApp(w);
          return (0, n.jsx)(ne, {
            appId: w,
            clanId: I,
            strCapsuleUrl: q,
            strGroupTitle: G,
            strExtraBannerGroupStyle: C,
            actions: (0, n.jsxs)(n.Fragment, {
              children: [
                !!(!fe && w) &&
                  (0, n.jsx)("div", {
                    className: o().HeaderWishlistButton,
                    children: (0, n.jsx)(c._, {
                      appid: w,
                      bIsFree: !!M?.is_free,
                      bIsComingSoon: !!M?.is_coming_soon,
                      className: (0, O.A)(
                        o().ActionButton,
                        o().WishlistBtnShort,
                      ),
                    }),
                  }),
                (0, n.jsx)("div", {
                  className: o().HeaderFollowButton,
                  children: w
                    ? (0, n.jsx)(H.do, {
                        appid: w,
                        className: o().HeaderButtonDark,
                      })
                    : (0, n.jsx)(H.of, {
                        clanAccountID: I,
                        className: o().HeaderButtonDark,
                      }),
                }),
                (0, n.jsx)(E, { ...z }),
              ],
            }),
          });
        });
      },
      91424: (ge, de, r) => {
        "use strict";
        r.d(de, { H: () => D, Y: () => h });
        var n = r(7850),
          x = r(75844),
          a = r(90626),
          s = r(53025),
          t = r(77495),
          v = r(58483),
          L = r(82385),
          k = r(88003),
          F = r(30096),
          N = r(19332),
          T = r.n(N),
          _ = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          O = (g, o, p, b) => {
            for (
              var V = b > 1 ? void 0 : b ? U(o, p) : o, ne = g.length - 1, se;
              ne >= 0;
              ne--
            )
              (se = g[ne]) && (V = (b ? se(o, p, V) : se(V)) || V);
            return b && V && _(o, p, V), V;
          };
        function S(g) {
          const { event: o, closeModal: p } = g,
            b = (0, v.LJ)();
          return (0, n.jsx)(L.AD, {
            initialEvent: o,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: t.O3,
            emoticonStore: b,
            showAppHeader: !0,
            closeModal: p,
          });
        }
        function h(g, o) {
          (0, k.pg)((0, n.jsx)(S, { event: g }), o);
        }
        let D = class extends a.Component {
          m_refFocus = a.createRef();
          componentDidMount() {
            this.props.fnClose &&
              (document.addEventListener("keydown", this.escFunction, !1),
              this.m_refFocus.current && this.m_refFocus.current.focus());
          }
          componentWillUnmount() {
            this.props.fnClose &&
              document.removeEventListener("keydown", this.escFunction, !1);
          }
          escFunction(g) {
            const { fnClose: o } = this.props;
            g.keyCode === 27 && o && o();
          }
          OnBackgroundClick(g) {
            g.currentTarget == g.target && this.props.fnClose();
          }
          render() {
            const { event: g, langOverride: o, isPreview: p } = this.props;
            return (0, n.jsx)("div", {
              ref: this.m_refFocus,
              className: N.Main,
              onClick: this.OnBackgroundClick,
              children: (0, n.jsx)(v.sU, {
                children: (b) =>
                  (0, n.jsx)(
                    L.He,
                    {
                      event: g,
                      emoticonStore: b,
                      partnerEventStore: s.$.Get(),
                      langOverride: o,
                      isPreview: p,
                      bDisableBroadcastPlayer: !1,
                    },
                    g.GID,
                  ),
              }),
            });
          }
        };
        O([F.oI], D.prototype, "escFunction", 1),
          O([F.oI], D.prototype, "OnBackgroundClick", 1),
          (D = O([x.PA], D));
      },
      31117: (ge, de, r) => {
        "use strict";
        r.d(de, { W: () => Ne, F: () => Re });
        var n = r(7850),
          x = r(19298),
          a = r(65946),
          s = r(813),
          t = r(41735),
          v = r.n(t),
          L = r(14947),
          k = r(72604),
          F = r(34592),
          N = r(3166),
          T = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          U = (Pe, Ie, Q, ue) => {
            for (
              var K = ue > 1 ? void 0 : ue ? _(Ie, Q) : Ie,
                me = Pe.length - 1,
                ae;
              me >= 0;
              me--
            )
              (ae = Pe[me]) && (K = (ue ? ae(Ie, Q, K) : ae(K)) || K);
            return ue && K && T(Ie, Q, K), K;
          };
        const O = class Jt {
          constructor() {
            (0, L.Gn)(this);
          }
          m_mapClanReposted = new Set();
          m_mapSourceEventGIDToPostedClans = new Map();
          static s_EventRepost;
          static Get() {
            return (
              Jt.s_EventRepost ||
                ((Jt.s_EventRepost = new Jt()), Jt.s_EventRepost.Initialize()),
              Jt.s_EventRepost
            );
          }
          static ValidateRepostData(Ie) {
            const Q = Ie;
            return Q &&
              Q.repost_clan_account_ids &&
              Array.isArray(Q.repost_clan_account_ids) &&
              Q.repost_clan_account_ids.length > 0
              ? typeof Q.repost_clan_account_ids[0] == "number"
              : !1;
          }
          Initialize() {
            if (document.getElementById("application_config")) {
              let Ie = (0, N.Tc)("repostcontrols", "application_config");
              Jt.ValidateRepostData(Ie) &&
                Ie.repost_clan_account_ids.forEach((Q) =>
                  this.m_mapClanReposted.add(Q),
                );
            }
          }
          BCanRepostPartnerEvent() {
            return this.m_mapClanReposted.size > 0;
          }
          GetRepostClanAccountID() {
            return Array.from(this.m_mapClanReposted);
          }
          async LoadClansAlreadyRepostedTo(Ie, Q, ue) {
            if (this.m_mapSourceEventGIDToPostedClans.has(Q))
              return this.m_mapSourceEventGIDToPostedClans.get(Q);
            const K = N.TS.STORE_BASE_URL + "events/ajaxgetrepostedevent",
              me = {
                sessionid: (0, N.KC)(),
                source_clan_accountid: Ie.GetAccountID(),
                source_event_gid: Q,
              };
            try {
              const ae = await v().get(K, {
                params: me,
                withCredentials: !0,
                cancelToken: ue?.token,
              });
              if (ae?.data?.success == k.R)
                return (
                  this.m_mapSourceEventGIDToPostedClans.set(
                    Q,
                    ae.data.repost_clan_accountid || [],
                  ),
                  ae.data.repost_clan_accountid
                );
              console.error(
                "GetRepostClanAccountID: failed " +
                  ae?.data?.success +
                  " and msg: " +
                  ae?.data?.msg,
              );
            } catch (ae) {
              const Ee = (0, F.H)(ae);
              console.error(
                "GetRepostClanAccountID: fail repost with " + Ee.strErrorMsg,
                Ee,
              );
            }
            return new Array();
          }
          async RepostEvent(Ie, Q, ue, K, me) {
            const ae = N.TS.STORE_BASE_URL + "events/ajaxrepostevent",
              Ee = new FormData();
            Ee.append("sessionid", (0, N.KC)()),
              Ee.append("source_clan_accountid", "" + Ie.GetAccountID()),
              Ee.append("source_event_gid", "" + Q),
              Ee.append("repost_clan_accountid", "" + ue.GetAccountID()),
              Ee.append("add", "" + K);
            try {
              let Se = await v().post(ae, Ee, {
                withCredentials: !0,
                cancelToken: me?.token,
              });
              if (Se?.data?.success == k.R && Se.data.repost_gid) {
                this.m_mapSourceEventGIDToPostedClans.has(Q) ||
                  this.m_mapSourceEventGIDToPostedClans.set(Q, []);
                const te = this.m_mapSourceEventGIDToPostedClans
                  .get(Q)
                  .findIndex((oe) => ue.GetAccountID() == oe);
                return (
                  K && te == -1
                    ? this.m_mapSourceEventGIDToPostedClans
                        .get(Q)
                        .push(ue.GetAccountID())
                    : !K &&
                      te !== -1 &&
                      this.m_mapSourceEventGIDToPostedClans
                        .get(Q)
                        .splice(te, 1),
                  Se.data.repost_gid
                );
              } else
                console.error(
                  "RepostEvent: failed " +
                    Se?.data?.success +
                    " and msg: " +
                    Se?.data?.msg,
                );
            } catch (Se) {
              const te = (0, F.H)(Se);
              console.error(
                "RepostEvent: fail repost with " + te.strErrorMsg,
                te,
              );
            }
            return null;
          }
        };
        U([L.sH], O.prototype, "m_mapClanReposted", 2);
        let S = O;
        var h = r(95695),
          D = r.n(h),
          g = r(47875),
          o = r(88003),
          p = r(36707),
          b = r(82734),
          V = r(18210),
          ne = r(13854),
          se = r(53113),
          J = r(96538),
          H = r(14256),
          c = r.n(H),
          m = r(64868),
          f = r(36118),
          E = r(56492),
          $ = r(91778);
        function z(Pe) {
          const { eventModel: Ie, emoticonStore: Q } = Pe,
            [ue, K, me] = (0, m.uD)(),
            ae = (0, E.T7)(Ie);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(x.Z, {
                focusable: !0,
                className: (0, p.A)(D().Button, D().Icon, c().DiscussionButton),
                onActivate: K,
                children: [
                  (0, n.jsx)(f.SYj, { className: c().ShareIcon }),
                  (0, n.jsx)("span", {
                    className: c().DiscussionButtonText,
                    children: (0, V.we)("#Button_Share"),
                  }),
                ],
              }),
              (0, n.jsx)($.k, {
                eventModel: Ie,
                strEventLink: ae ?? "",
                bActive: ue,
                closeModal: me,
                emoticonStore: Q,
              }),
            ],
          });
        }
        var w = r(68988),
          I = r(85385),
          q = r(75844),
          G = r(90626),
          C = r(76559),
          pe = r(16412),
          M = r(25792),
          fe = r(85599);
        const W = (0, q.PA)((Pe) => {
          const { eventModel: Ie } = Pe,
            [Q, ue] = (0, G.useState)(!0),
            [K, me] = (0, G.useState)(new Set()),
            [ae, Ee] = (0, G.useState)(new Set()),
            [Se, te] = (0, G.useState)(new Set()),
            [oe, xe] = (0, G.useState)(null),
            [je, Te] = (0, G.useState)(null),
            Ge = (0, G.useRef)(null);
          (0, G.useEffect)(
            () => (
              Q &&
                (async () => {
                  const Fe = v().CancelToken.source();
                  Ge.current = Fe.cancel;
                  const B = S.Get().LoadClansAlreadyRepostedTo(
                    Ie.clanSteamID,
                    Ie.GID,
                    Fe,
                  );
                  B.then((ye) => {
                    const Me = new Set();
                    ye.forEach((Je) => Me.add(Je)), me(Me);
                  });
                  let ee = new Array();
                  ee.push(B),
                    S.Get()
                      .GetRepostClanAccountID()
                      .forEach((ye) => {
                        const Me = C.b.InitFromClanID(ye);
                        ee.push(s.ac.LoadClanInfoForClanSteamID(Me));
                      }),
                    await Promise.all(ee),
                    ue(!1);
                })(),
              () => Ge.current && Ge.current()
            ),
            [Q, Ie.GID, Ie.clanSteamID],
          );
          const ke = new Array();
          return (
            S.Get()
              .GetRepostClanAccountID()
              .forEach((ze) => {
                const Fe = s.ac.GetClanInfoByClanAccountID(ze);
                if (Fe && ze != Ie.clanSteamID.GetAccountID()) {
                  const B = K.has(ze),
                    ee = ae.has(ze) || (B && !Se.has(ze));
                  ke.push(
                    (0, n.jsx)(
                      pe.Yh,
                      {
                        label: B
                          ? (0, V.we)(
                              "#EventRepost_Dialog_Existing",
                              Fe.group_name,
                            )
                          : Fe.group_name,
                        checked: ee,
                        disabled: oe !== null,
                        onChange: (ye) => {
                          K.has(ze)
                            ? (ye ? Se.delete(ze) : Se.add(ze), te(new Set(Se)))
                            : (ye ? ae.add(ze) : ae.delete(ze),
                              Ee(new Set(ae)));
                        },
                      },
                      "checkbox" + ze,
                    ),
                  );
                }
              }),
            (0, n.jsx)(M.tH, {
              children: (0, n.jsx)(J.x_, {
                onEscKeypress: () => Pe.closeModal && Pe.closeModal(),
                children: (0, n.jsxs)(pe.UC, {
                  children: [
                    (0, n.jsx)(pe.Y9, {
                      children: (0, V.we)("#EventRepost_Dialog_Title"),
                    }),
                    (0, n.jsxs)(pe.nB, {
                      children: [
                        (0, n.jsx)(pe.a3, {
                          children: (0, V.we)("#EventRepost_Dialog_Desc"),
                        }),
                        Q
                          ? (0, n.jsx)(fe.t, { string: (0, V.we)("#Loading") })
                          : (0, n.jsx)("div", { children: ke }),
                        !!(ae.size || Se.size) &&
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("span", {
                                children: (0, V.we)(
                                  "#EventRepost_Dialog_Action_Desc",
                                ),
                              }),
                              (0, n.jsxs)("ul", {
                                children: [
                                  !!ae.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, V.we)(
                                        "#EventRepost_Dialog_Action_Add",
                                        ae.size,
                                      ),
                                    }),
                                  !!Se.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, V.we)(
                                        "#EventRepost_Dialog_Action_Remove",
                                        Se.size,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        !!oe && (0, n.jsx)("div", { children: oe }),
                        !!je && (0, n.jsx)("div", { children: je }),
                      ],
                    }),
                    (0, n.jsx)(pe.wi, {
                      children: (0, n.jsx)(pe.CB, {
                        onCancel: () => Pe.closeModal && Pe.closeModal(),
                        strOKText: (0, V.we)("#EventRepost_Dialog_OK"),
                        bOKDisabled:
                          (ae.size == 0 && Se.size == 0) ||
                          oe !== null ||
                          je !== null,
                        onOK: async () => {
                          Ge.current && Ge.current();
                          const ze = v().CancelToken.source();
                          Ge.current = ze.cancel;
                          const Fe = ae.size + Se.size;
                          let B = 1;
                          xe((0, V.we)("#EventRepost_Dialog_Progress", B, Fe));
                          for (const ee of Array.from(ae)) {
                            const ye = C.b.InitFromClanID(ee);
                            if (
                              await S.Get().RepostEvent(
                                Ie.clanSteamID,
                                Ie.GID,
                                ye,
                                !0,
                                ze,
                              )
                            )
                              xe(
                                (0, V.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++B,
                                  Fe,
                                ),
                              );
                            else {
                              Te((0, V.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          for (const ee of Array.from(Se)) {
                            const ye = C.b.InitFromClanID(ee);
                            if (
                              await S.Get().RepostEvent(
                                Ie.clanSteamID,
                                Ie.GID,
                                ye,
                                !1,
                                ze,
                              )
                            )
                              xe(
                                (0, V.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++B,
                                  Fe,
                                ),
                              );
                            else {
                              Te((0, V.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          Te((0, V.we)("#EventRepost_Dialog_ResultSuccess"));
                        },
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        });
        var re = r(24660),
          he = r(19730);
        function be(Pe) {
          const {
            nVoteCount: Ie,
            nCommentCount: Q,
            myVote: ue,
            onVote: K,
            strDiscussionURL: me,
            onDiscussionUnavailable: ae,
            bShowDiscussion: Ee,
            repost: Se,
            share: te,
          } = Pe;
          return (0, n.jsxs)(x.Z, {
            className: c().Container,
            "flow-children": "row",
            focusable: !1,
            children: [
              (0, n.jsxs)("div", {
                className: c().InnerContainer,
                children: [
                  (0, n.jsxs)("div", {
                    className: c().VoteContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: c().VoteCount,
                        children: [
                          (0, n.jsx)(f.bfp, {
                            className: c().VoteUpStaticIcon,
                          }),
                          (0, he.Dq)(Ie),
                        ],
                      }),
                      (0, n.jsxs)(x.Z, {
                        focusable: !0,
                        className: (0, p.A)(
                          D().Button,
                          D().Icon,
                          c().DiscussionButton,
                          ue == "up" ? c().VoteButtonSelected : "",
                        ),
                        onActivate: () => K("up"),
                        children: [
                          (0, n.jsx)(f.bfp, {
                            className:
                              ue == "up"
                                ? c().VoteUpSelectedIcon
                                : c().VoteUpIcon,
                          }),
                          (0, n.jsx)("span", {
                            className: c().DiscussionButtonText,
                            children: (0, V.we)("#Button_RateUp"),
                          }),
                        ],
                      }),
                      (0, n.jsx)(x.Z, {
                        focusable: !0,
                        className: (0, p.A)(
                          D().Button,
                          D().Icon,
                          c().DiscussionButton,
                          ue == "down" ? c().VoteButtonSelected : "",
                        ),
                        onActivate: () => K("down"),
                        "aria-label": (0, V.we)("#Button_RateDown"),
                        children: (0, n.jsx)(f.bfp, {
                          className:
                            ue == "down"
                              ? c().VoteDownSelectedIcon
                              : c().VoteDownIcon,
                        }),
                      }),
                    ],
                  }),
                  Ee &&
                    (0, n.jsx)(Le, {
                      commentCount: Q,
                      discussionURL: me,
                      gotoDiscussion: ae,
                    }),
                  Se,
                ],
              }),
              te &&
                (0, n.jsx)("div", {
                  className: c().ShareContainer,
                  children: te,
                }),
            ],
          });
        }
        function Le(Pe) {
          const { commentCount: Ie, discussionURL: Q, gotoDiscussion: ue } = Pe;
          return (0, n.jsxs)("div", {
            className: c().DiscussContainer,
            children: [
              (0, n.jsxs)("div", {
                className: c().DiscussionCount,
                children: [(0, n.jsx)(f.ROZ, {}), (0, he.Dq)(Ie)],
              }),
              Q &&
                (0, n.jsx)(re.Ii, {
                  href: (0, se.k2)(Q),
                  children: (0, n.jsxs)("div", {
                    className: (0, p.A)(
                      D().Button,
                      D().Icon,
                      c().DiscussionButton,
                    ),
                    children: [
                      (0, n.jsx)(f.ROZ, {}),
                      (0, n.jsx)("span", {
                        className: c().DiscussionButtonText,
                        children: (0, V.we)("#Button_Discuss"),
                      }),
                    ],
                  }),
                }),
              !Q &&
                (0, n.jsxs)(x.Z, {
                  focusable: !0,
                  onActivate: ue,
                  className: (0, p.A)(
                    D().Button,
                    D().Icon,
                    c().DiscussionButton,
                  ),
                  children: [
                    (0, n.jsx)(f.ROZ, {}),
                    (0, n.jsx)("span", {
                      className: c().DiscussionButtonText,
                      children: (0, V.we)("#Button_Discuss"),
                    }),
                  ],
                }),
            ],
          });
        }
        function Ne() {
          return N.iA.logged_in
            ? N.iA.is_limited
              ? ((0, o.pg)((0, n.jsx)(I.g, {}), window), !1)
              : !0
            : (N.TS.IN_CLIENT
                ? console.log(
                    "EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : (0, o.pg)(
                    (0, n.jsx)(J.o0, {
                      strTitle: (0, V.we)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: (0, V.we)(
                        "#EventDisplay_Share_NotLoggedIn_Description",
                      ),
                      strOKButtonText: (0, V.we)("#MobileLogin_SignIn"),
                      onOK: () => (0, g.l)(),
                    }),
                    window,
                  ),
              !1);
        }
        function Re(Pe) {
          const { eventModel: Ie, emoticonStore: Q } = Pe,
            ue = (0, N.Qn)(),
            { myVote: K, Vote: me } = (0, w.C)(Ie),
            ae = (ze) => {
              Ne() && K !== void 0 && me(ze);
            },
            [, Ee] = (0, s.TB)(Ie.clanSteamID.GetAccountID()),
            Se = (ze) => {
              (0, o.pg)(
                (0, n.jsx)(J.KG, {
                  strDescription: (0, V.we)(
                    "#EventDisplay_Share_CommentMigrationInProcess",
                  ),
                }),
                (0, b.uX)(ze),
              );
            },
            te = (ze) => {
              (0, o.pg)((0, n.jsx)(W, { eventModel: Ie }), (0, b.uX)(ze));
            },
            [oe, xe, je, Te] = (0, a.q3)(() => [
              (0, ne.OQ)(
                Ie.nVotesUp - Ie.nVotesDown,
                0,
                Number.MAX_SAFE_INTEGER,
              ),
              (0, se.NT)(Ie.GetDiscussionURL(Ee?.vanity_url)),
              Ie.BIsUnlistedEvent(),
              Ie.nCommentCount,
            ]),
            Ge = (0, N.Y2)(),
            ke = N.iA.logged_in && S.Get().BCanRepostPartnerEvent();
          return (0, n.jsx)(be, {
            nVoteCount: oe,
            nCommentCount: Te,
            myVote: K ?? void 0,
            onVote: ae,
            strDiscussionURL: xe,
            onDiscussionUnavailable: Se,
            bShowDiscussion: !Ge && !je,
            repost:
              ke &&
              (0, n.jsx)("div", {
                className: c().VoteContainer,
                children: (0, n.jsx)(x.Z, {
                  focusable: !0,
                  className: (0, p.A)(
                    D().Button,
                    D().Icon,
                    c().DiscussionButton,
                    K == "down" ? c().VoteButtonSelected : "",
                  ),
                  onActivate: te,
                  children: (0, V.we)("#EventRepost_Dialog_Title"),
                }),
              }),
            share: !ue && (0, n.jsx)(z, { eventModel: Ie, emoticonStore: Q }),
          });
        }
      },
      94520: (ge, de, r) => {
        "use strict";
        r.d(de, { zj: () => Tn, d3: () => pt.d3, fh: () => wr });
        var n = r(7850),
          x = r(5191),
          a = r(70187),
          s = r(39256),
          t = r(18210),
          v = r(39654);
        function L(u) {
          const { MissingEventFallback: l } = u,
            { event: d, showErrorInfo: y } = u.context,
            j = (0, a.j$)(u.args),
            R = !!j && j != d?.GID,
            { data: le, isPending: ce } = (0, v.vE)(
              R && d
                ? { clanAccountID: d.clanSteamID.GetAccountID(), eventGID: j }
                : void 0,
            );
          if (!R)
            return d
              ? (0, n.jsx)(x.j, { eventModel: d, lang: u.language })
              : null;
          if (d) {
            if (le)
              return (0, n.jsx)(x.j, { eventModel: le, lang: u.language });
            if (ce) return null;
          }
          return l
            ? (0, n.jsx)(l, {
                eventGID: j,
                lang: u.language,
                bShowErrorInfo: !!y,
              })
            : y
              ? (0, n.jsx)(k, { eventGID: j })
              : null;
        }
        function k({ eventGID: u }) {
          return (0, n.jsx)("div", {
            className: s.ErrorDiv,
            children: (0, t.we)("#EventDidplay_Reminder_EventNotVisible", u),
          });
        }
        function F(u) {
          return /\[remindme\b/i.test(u);
        }
        function N(u) {
          const l = new Set();
          for (const d of u.matchAll(/\[remindme=(\d+)\]/gi)) l.add(d[1]);
          return [...l];
        }
        var T = r(48421);
        const _ = new Map([["remindme", { Constructor: U, autocloses: !1 }]]);
        function U(u) {
          return (0, n.jsx)(L, { ...u, MissingEventFallback: O });
        }
        function O({ eventGID: u, lang: l, bShowErrorInfo: d }) {
          const y = (0, T.RR)(u);
          return y
            ? (0, n.jsx)(x.j, { eventModel: y, lang: l })
            : d
              ? (0, n.jsx)(k, { eventGID: u })
              : null;
        }
        var S = r(64868),
          h = r(72609),
          D = r(11587),
          g = r(89926),
          o = r(90626),
          p = r(16412),
          b = r(96538),
          V = r(69168),
          ne = r(85599);
        function se(u) {
          if (u === "GameAwardDrop2022") {
            const l = (0, D.h3)(u),
              d = (0, D.Qg)();
            return l
              ? l.registered
                ? {
                    bInitialState: !1,
                    bSuccessState: l.eligible,
                    bFailedState: !l.eligible,
                    fnAction: l.eligible
                      ? void 0
                      : async () => {
                          await d.fnCreateRegistration(u);
                        },
                  }
                : {
                    bInitialState: !0,
                    fnAction: async () => {
                      await d.fnCreateRegistration(u);
                    },
                  }
              : { bInitialState: !0 };
          }
          return { bInitialState: !0 };
        }
        function J(u) {
          const l = (0, a.j$)(u.args, "action"),
            d = (0, a.j$)(u.args, "initialToken"),
            y = (0, a.j$)(u.args, "successToken"),
            j = (0, a.j$)(u.args, "failToken"),
            R = se(l),
            { elDialogElement: le, fnShowLogonDialog: ce } = (0, g.l)(),
            [Ke, Xe, rt] = (0, S.uD)();
          return !l || !d || !y || !j
            ? u.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children:
                    "Failed to provide all tokens. Dialog will not appear",
                })
              : null
            : !h.iA.logged_in && l != "test" && l != "nologinrequired"
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(p.$n, {
                      className: "CSSActionDialogButton",
                      onClick: ce,
                      children: (0, t.we)("#Login_SignIn"),
                    }),
                    le,
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)(p.$n, {
                      className: "CSSActionDialogButton",
                      onClick: Xe,
                      children: [
                        !!R.bInitialState && (0, t.we)(d),
                        !!R.bSuccessState && (0, t.we)(y),
                        !!R.bFailedState && (0, t.we)(j),
                      ],
                    }),
                    (0, n.jsx)(V.E, {
                      active: Ke,
                      children: (0, n.jsx)(H, {
                        strAction: l,
                        strInitialToken: d,
                        strSuccessToken: y,
                        strFailToken: j,
                        closeModal: rt,
                        children: u.children,
                      }),
                    }),
                  ],
                });
        }
        function H(u) {
          const {
              strAction: l,
              children: d,
              closeModal: y,
              strInitialToken: j,
              strSuccessToken: R,
              strFailToken: le,
            } = u,
            ce = se(l),
            [Ke, Xe] = o.useState(!!ce.fnAction),
            rt = o.useRef(!1);
          o.useEffect(() => {
            !ce.fnAction ||
              rt.current ||
              ((rt.current = !0), Xe(!0), ce.fnAction().finally(() => Xe(!1)));
          }, [ce]);
          const Ze = o.useId();
          return (0, n.jsxs)(b.eV, {
            bDisableBackgroundDismiss: !0,
            closeModal: y,
            onCancel: y,
            className: "CSSActionDialogDialog",
            "aria-labelledby": Ze,
            children: [
              (0, n.jsxs)(p.Y9, {
                id: Ze,
                children: [
                  !!ce.bInitialState && (0, t.we)(j),
                  !!ce.bSuccessState && (0, t.we)(R),
                  !!ce.bFailedState && (0, t.we)(le),
                ],
              }),
              (0, n.jsx)(p.nB, {
                children: (0, n.jsx)(p.a3, {
                  children: Ke
                    ? (0, n.jsx)(ne.t, {
                        size: "medium",
                        position: "center",
                        string: (0, t.we)("#Loading"),
                      })
                    : d,
                }),
              }),
            ],
          });
        }
        var c = r(23386),
          m = r(92799);
        function f(u) {
          const l = !!u.context.showErrorInfo,
            { elDialogElement: d, fnShowLogonDialog: y } = (0, g.l)();
          if (!h.iA.logged_in)
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.$n, {
                  onClick: y,
                  className: "CSSClaimItemLoginButton",
                  children: (0, t.we)("#Sale_ClaimableReward_Login"),
                }),
                d,
              ],
            });
          const j = (0, a.j$)(u.args, "type");
          let R;
          if (j)
            switch (j) {
              case "profilemodifier":
                R = c.jE;
                break;
              case "sticker":
                R = c.Ed;
                break;
            }
          return (0, n.jsx)(m.m, { bPreviewMode: l, rewardType: R });
        }
        function E(u) {
          return /\[claimitem\b/i.test(u);
        }
        function $(u) {
          const l = (0, a.j$)(u.args, "name"),
            d =
              ((0, a.j$)(u.args, "visible") || "false").toLowerCase() ===
              "true",
            y = (0, D.h3)(l);
          return l
            ? !y || !y.registered
              ? null
              : (y.eligible && d) || (!y.eligible && !d)
                ? (0, n.jsx)(n.Fragment, { children: u.children })
                : null
            : u.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children: "Failed to provide giveaway name",
                })
              : null;
        }
        const z = /\bname\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function w(u) {
          const l = new Set();
          for (const d of u.matchAll(/\[giveawayeligible\b([^\]]*)\]/gi)) {
            const y = z.exec(d[1] ?? ""),
              j = y?.[1] ?? y?.[2] ?? y?.[3];
            j && l.add(j);
          }
          return Array.from(l);
        }
        var I = r(99412),
          q = r(86048);
        function G(u, l) {
          const d = o.useCallback(
            (y) => {
              y.preventDefault(), (y.returnValue = l);
            },
            [l],
          );
          (0, q.l6)(window, "beforeunload", u ? d : void 0),
            o.useEffect(() => {
              if (!u || !window.navigation) return;
              const y = (j) => {
                (j.navigationType != "push" &&
                  j.navigationType != "traverse") ||
                  j.hashChange ||
                  j.downloadRequest !== null ||
                  !j.cancelable ||
                  window.confirm(l) ||
                  j.preventDefault();
              };
              return (
                window.navigation.addEventListener("navigate", y),
                () => window.navigation.removeEventListener("navigate", y)
              );
            }, [u, l]);
        }
        var C = r(65946),
          pe = r(87937),
          M = r.n(pe),
          fe = r(91354),
          W = r(69909),
          re = r(72604),
          he = r(16936),
          be = r(80902),
          Le = r(75233),
          Ne = r(51614),
          Re = r(16369);
        const Pe = 0,
          Ie = 1,
          Q = 2,
          ue = 3,
          K = new Map(),
          me = "",
          ae = 0;
        function Ee(u, l) {
          return ["MeetSteamRegistrations", u, l];
        }
        function Se(u, l) {
          return ["MeetSteamSelections", u, l];
        }
        function te(u) {
          return {
            queryKey: Ee(u?.gidClanEvent ?? me, u?.userAccountID ?? ae),
            queryFn: async () => {
              if (!u) return K;
              const l = await (0, he._V)(u.gidClanEvent),
                d = new Map();
              return (
                l.forEach((y) => {
                  const j = {
                    ...y,
                    regmodel: y.jsondata ? JSON.parse(y.jsondata) : void 0,
                  };
                  j.group_id === void 0 ||
                    j.session_id === void 0 ||
                    d.set(j.group_id, j);
                }),
                d
              );
            },
            enabled:
              !!u && (0, Re.H)() == u?.clanAccountID && !!u?.userAccountID,
          };
        }
        function oe(u, l) {
          return {
            queryKey: Se(u, l),
            queryFn: () => null,
            initialData: null,
            staleTime: 1 / 0,
            gcTime: 1 / 0,
          };
        }
        const xe = o.createContext(void 0);
        function je(u) {
          const {
              clanAccountID: l,
              gidClanEvent: d,
              userAccountID: y,
              children: j,
            } = u,
            R = o.useMemo(
              () => ({ clanAccountID: l, gidClanEvent: d, userAccountID: y }),
              [l, d, y],
            );
          return (0, n.jsx)(xe.Provider, { value: R, children: j });
        }
        function Te() {
          const u = o.useContext(xe),
            l = (0, be.I)(te(u)),
            d = (0, be.I)(oe(u?.gidClanEvent ?? me, u?.userAccountID ?? ae)),
            y = l.data ?? K;
          return o.useMemo(
            () => ({
              registrations: y,
              selections: d.data ?? Ge(y),
              bLoading: l.isFetching,
            }),
            [y, d.data, l.isFetching],
          );
        }
        function Ge(u) {
          const l = new Map();
          return (
            u.forEach((d, y) => {
              d.session_id !== void 0 && l.set(y, d.session_id);
            }),
            l
          );
        }
        function ke(u, l) {
          return l === void 0 ? void 0 : u.selections.get(l);
        }
        function ze(u) {
          return Array.from(u.selections.keys());
        }
        function Fe(u, l, d) {
          if (l === void 0 || d === void 0) return Pe;
          const y = u.registrations.get(l)?.session_id == d,
            j = u.selections.get(l) == d;
          return y && j ? Ie : !y && j ? Q : y && !j ? ue : Pe;
        }
        function B(u, l, d) {
          if (l === void 0 || d === void 0) return !1;
          const y = !!u.registrations.get(l),
            j = u.selections.get(l) == d,
            R = u.registrations.get(l)?.session_id == u.selections.get(l);
          return y && !j && R;
        }
        function ee(u, l) {
          return l === void 0 ? void 0 : u.registrations.get(l)?.session_id;
        }
        function ye(u) {
          return u.selections.size == 0 && u.registrations.size == 0
            ? !1
            : u.selections.size != u.registrations.size ||
                !Array.from(u.selections.entries()).every(
                  (l) => u.registrations.get(l[0])?.session_id == l[1],
                );
        }
        function Me(u) {
          return Array.from(u.selections.entries()).some((l) => {
            const d = u.registrations.get(l[0]);
            return !d || d.session_id != l[1];
          });
        }
        function Je(u) {
          return u.registrations.size > 0;
        }
        function $e() {
          return Te().bLoading;
        }
        function P() {
          return ye(Te());
        }
        function Y() {
          return Je(Te());
        }
        function ve(u, l) {
          const d = Te();
          return we(d, u, l);
        }
        function De(u, l) {
          const d = Te();
          return we(
            d,
            u.filter((y) => !!y.ask_registration_question),
            l,
          );
        }
        function we(u, l, d) {
          return l
            .filter((y) => y.sessions.some((j) => Fe(u, y.group_id, j.id) == d))
            .map((y) => y.group_id)
            .filter((y) => y !== void 0);
        }
        function Qe(u, l, d, y) {
          d !== void 0 &&
            u.setQueryData(Se(l.gidClanEvent, l.userAccountID), (j) => {
              const R =
                  u.getQueryData(Ee(l.gidClanEvent, l.userAccountID)) ?? K,
                le = new Map(j ?? Ge(R));
              return y !== void 0 && y > 0 ? le.set(d, y) : le.delete(d), le;
            });
        }
        function Ce() {
          const u = o.useContext(xe),
            l = (0, Le.jE)(),
            d = Te();
          return o.useCallback(
            (y, j) => {
              if (!u) return;
              const R = ke(d, y) == j;
              Qe(l, u, y, R ? void 0 : j);
            },
            [u, l, d],
          );
        }
        function ut() {
          const u = o.useContext(xe),
            l = (0, Le.jE)(),
            d = Te(),
            { mutateAsync: y } = (0, Ne.n)({
              mutationFn: async (j) => {
                if (!u) return !1;
                const R = Object.fromEntries(
                    Object.entries(j).filter(
                      ([Ke]) => !Ke.startsWith("registration_emailed_"),
                    ),
                  ),
                  le = [];
                for (const [Ke, Xe] of d.selections)
                  le.push({
                    gid: u.gidClanEvent,
                    group_id: Ke,
                    session_id: Xe,
                    guest_count: j.guests_registered ?? 1,
                    jsondata: JSON.stringify(R),
                    skip_email: !1,
                  });
                for (const Ke of d.registrations.keys())
                  d.selections.has(Ke) ||
                    le.push({
                      gid: u.gidClanEvent,
                      group_id: Ke,
                      session_id: 0,
                      guest_count: 0,
                      jsondata: JSON.stringify({}),
                      skip_email: !1,
                    });
                let ce = !0;
                for (let Ke = 0; Ke < le.length; Ke++) {
                  const Xe = await (0, he.kR)({
                    ...le[Ke],
                    skip_email: Ke != le.length - 1,
                  });
                  ce = ce && Xe == re.R;
                }
                return (
                  l.setQueryData(Se(u.gidClanEvent, u.userAccountID), null),
                  await l.invalidateQueries({
                    queryKey: Ee(u.gidClanEvent, u.userAccountID),
                  }),
                  ce
                );
              },
            });
          return y;
        }
        var tt = r(71421),
          Mt = r(36707),
          et = r(92264),
          lt = r(36631),
          yt = r(84346),
          Wt = r(54357);
        const ht =
            /(?<!\\)\[(meetsteamsessiongroup|meetsteamscheduleview)\b([^\]]*)\]/gi,
          ct = /\b(?:group_id|schedule_id)\s*=\s*"?(\d+)/i;
        function qe(u) {
          const l = [];
          for (const d of u.matchAll(ht))
            l.push({
              strTag: d[1].toLowerCase(),
              nID: Number(ct.exec(d[2])?.[1] ?? 0),
            });
          return l;
        }
        function st(u) {
          return qe(u).length > 0;
        }
        function at(u, l) {
          return u === void 0
            ? !0
            : qe(u).find((y) => y.strTag == "meetsteamsessiongroup")?.nID == l;
        }
        function dt(u, l, d) {
          if (u === void 0) return !0;
          const y = qe(u),
            j = y[y.length - 1];
          return j?.strTag == l && j.nID == d;
        }
        const Et = o.createContext(null);
        function It(u) {
          return jsx(Et.Provider, {
            value: u.nVisibilityID ?? null,
            children: u.children,
          });
        }
        function bt() {
          return o.useContext(Et);
        }
        var pt = r(1683),
          Rt = r(93507),
          Ve = r.n(Rt),
          Gt = r(41635);
        const xt = [];
        function kt(u) {
          const {
              eventModel: l,
              fnConfirm: d,
              fnHideModal: y,
              nMaxPerTeam: j,
              bAddingOrChangingSessions: R,
            } = u,
            le = (0, I.sfN)(h.TS.LANGUAGE),
            [ce, Ke] = o.useState({}),
            [Xe, rt] = o.useState(!1),
            Ze = o.useCallback(
              (ft) => {
                Ke({ ...ce, ...ft });
              },
              [ce],
            ),
            gt = (0, W.mG)(
              l.clanSteamID.GetAccountID(),
              l.GID ?? "",
              h.iA.accountid,
            ),
            { data: Ft } = (0, W.ee)(h.iA.accountid),
            Lt = Ft?.realname ?? "",
            vt = Ft?.email ?? "",
            ot = Ft?.partners ?? xt,
            [At, zt] = o.useState(void 0),
            [mt, Pt] = o.useState(void 0),
            Ht = o.useMemo(() => {
              const ft = [];
              return (
                mt == null &&
                  ft.push({
                    data: void 0,
                    label: (0, t.we)("#MeetSteam_ChoosePartner"),
                  }),
                ft.push(
                  ...ot.map((Ot, Qt) => ({
                    data: Ot.partnerid,
                    label: Ot.partner_name,
                  })),
                ),
                ft.push({
                  data: 0,
                  label: (0, t.we)("#MeetSteam_ChoosePartnerOther"),
                }),
                ft
              );
            }, [ot, mt]);
          o.useEffect(() => {
            if (!gt.isSuccess) return;
            const ft = ot.find((Qt) => Qt.partnerid == gt.data.partner_id),
              Ot = gt.data.partner_id === 0 ? 0 : ft?.partnerid;
            Pt(Ot), zt(Ot), Ke(gt.data);
          }, [gt.isSuccess, gt.data, ot]);
          const Bt = ot?.length > 0,
            Ut = !Bt || mt != null,
            $t = Ut && mt === 0;
          o.useEffect(() => {
            if (mt == At || (zt(mt), !Bt || !Ut)) return;
            let ft;
            const Ot = ot.find((Qt) => Qt.partnerid == mt);
            $t || !Ot
              ? (ft = {
                  name: vt?.length > 0 ? Lt : void 0,
                  email_override: vt?.length > 0 ? vt : void 0,
                  partner_id: 0,
                })
              : (ft = {
                  name:
                    Ot.partneruserrealname?.length > 0
                      ? Ot.partneruserrealname
                      : void 0,
                  company:
                    Ot.partner_name?.length > 0 ? Ot.partner_name : void 0,
                  email_override:
                    Ot.partneruseremail?.length > 0
                      ? Ot.partneruseremail
                      : void 0,
                  partner_id: Ot.partnerid,
                }),
              Object.values(ft).some((Qt) => Qt != null) && Ze(St(ft));
          }, [Ut, $t, Bt, mt, At, ot, vt, Lt, Ze]);
          const mn = gt.isLoading || Xe,
            Fn = R
              ? (0, t.we)(
                  "#MeetSteam_Register_title",
                  l.GetNameWithFallback(le) ?? "",
                )
              : (0, t.we)("#MeetSteam_Unregister_title"),
            Ln =
              !R ||
              (Ut &&
                !!ce.name &&
                (!ce.guest_names ||
                  ce.guest_names.every((ft) => ft.length > 0)) &&
                !!ce.email_override &&
                !!ce.company);
          return (0, n.jsxs)(b.EN, {
            active: !0,
            children: [
              mn &&
                (0, n.jsx)(b.eV, {
                  "aria-label": Xe
                    ? (0, t.we)("#Saving")
                    : (0, t.we)("#Loading"),
                  bOKDisabled: !0,
                  bHideCloseIcon: !0,
                  onCancel: () => !1,
                  children: (0, n.jsx)(ne.t, {
                    size: "medium",
                    position: "center",
                    string: Xe ? (0, t.we)("#Saving") : (0, t.we)("#Loading"),
                  }),
                }),
              !mn &&
                (0, n.jsx)(b.o0, {
                  strTitle: Fn,
                  onCancel: y,
                  bOKDisabled: !Ln,
                  onOK: async () => {
                    rt(!0), await d(ce), rt(!1), gt.refetch(), y();
                  },
                  children:
                    R &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          children: (0, t.we)("#MeetSteam_Reg_Intro"),
                        }),
                        (0, n.jsx)("br", {}),
                        Bt &&
                          (0, n.jsx)(p.m, {
                            label: (0, t.we)("#MeetSteam_Reg_Preset"),
                            tooltip: (0, t.we)("#MeetSteam_Reg_Preset_ttip"),
                            rgOptions: Ht,
                            selectedOption: mt,
                            onChange: (ft) => Pt(ft.data),
                          }),
                        Ut &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(p.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Name"),
                                value: ce.name || "",
                                onChange: (ft) =>
                                  Ze({ name: ft.currentTarget.value }),
                              }),
                              (0, n.jsx)(p.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Email"),
                                value: ce.email_override || "",
                                mustBeEmail: !0,
                                onChange: (ft) =>
                                  Ze({
                                    email_override: ft.currentTarget.value,
                                  }),
                              }),
                              (0, n.jsx)(p.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Company"),
                                value: ce.company || "",
                                onChange: (ft) =>
                                  Ze({ company: ft.currentTarget.value }),
                              }),
                              (0, n.jsx)(p.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Game"),
                                value: ce.game || "",
                                onChange: (ft) =>
                                  Ze({ game: ft.currentTarget.value }),
                              }),
                              j > 0 &&
                                (0, n.jsx)(p.m, {
                                  label: (0, t.we)("#MeetSteam_Reg_GuestCount"),
                                  tooltip: (0, t.we)(
                                    "#MeetSteam_Reg_GuestCount_ttip",
                                  ),
                                  rgOptions: Array.from({ length: j + 1 }).map(
                                    (ft, Ot) => ({ data: Ot, label: Ot }),
                                  ),
                                  selectedOption:
                                    (ce.guests_registered ?? 1) - 1,
                                  onChange: (ft) => {
                                    const Ot = ce.guest_names ?? [];
                                    Ze({
                                      guests_registered: ft.data + 1,
                                      guest_names:
                                        Ot.length > ft.data
                                          ? Ot.slice(0, ft.data)
                                          : Gt.$Y(Ot, ft.data, ""),
                                    });
                                  },
                                }),
                              (ce.guests_registered ?? 0) > 1 &&
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      children: (0, t.we)(
                                        "#MeetSteam_Reg_Others",
                                      ),
                                    }),
                                    (0, n.jsx)("br", {}),
                                    (ce.guest_names ?? []).map((ft, Ot) =>
                                      (0, n.jsx)(
                                        p.pd,
                                        {
                                          type: "text",
                                          label: (0, t.we)(
                                            "#MeetSteam_Reg_Others_name",
                                          ),
                                          value: ft,
                                          onChange: (Qt) => {
                                            const kn = [
                                              ...(ce.guest_names ?? []),
                                            ];
                                            (kn[Ot] = Qt.currentTarget.value),
                                              Ze({ guest_names: kn });
                                          },
                                        },
                                        "guesname_" + Ot,
                                      ),
                                    ),
                                  ],
                                }),
                              (0, n.jsx)(jt, {
                                eventModel: l,
                                oReg: ce,
                                fnUpdateRegistration: Ze,
                              }),
                            ],
                          }),
                      ],
                    }),
                }),
            ],
          });
        }
        function St(u) {
          return Object.fromEntries(
            Object.entries(u).filter(([l, d]) => d !== void 0),
          );
        }
        function jt(u) {
          const { eventModel: l, oReg: d, fnUpdateRegistration: y } = u,
            j = De(l.jsondata.meet_steam_groups ?? [], Q);
          return !j || j.length == 0
            ? null
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h3", {
                    children: (0, t.we)("#MeetSteam_Reg_Question_title"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, t.we)("#MeetSteam_Reg_Question_desc"),
                  }),
                  j.map((R) => {
                    const le = l.jsondata.meet_steam_groups?.find(
                      (ce) => ce.group_id == R,
                    );
                    return le
                      ? (0, n.jsx)(
                          Nt,
                          {
                            groupInfo: le,
                            oReg: d,
                            fnUpdateText: (ce) => {
                              let Ke = d.pre_event_partner_questions
                                  ? [...d.pre_event_partner_questions]
                                  : [],
                                Xe = Ke.findIndex((rt) => rt.group_id == R);
                              Xe < 0
                                ? Ke.push({ group_id: R, question: ce })
                                : (Ke[Xe] = { group_id: R, question: ce }),
                                y({ pre_event_partner_questions: Ke });
                            },
                          },
                          "groupquestion" + R,
                        )
                      : null;
                  }),
                ],
              });
        }
        function Nt(u) {
          const { fnUpdateText: l, groupInfo: d, oReg: y } = u,
            j = (0, I.sfN)(h.TS.LANGUAGE),
            [R, le] = (0, C.q3)(() => [
              t.NT.GetWithFallback(d.localized_session_title, j) ?? "",
              y.pre_event_partner_questions?.find(
                (ce) => ce.group_id == d.group_id,
              )?.question || "",
            ]);
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(p.JU, { children: R }),
              (0, n.jsx)("div", {
                className: "DialogInput_Wrapper",
                children: (0, n.jsx)("textarea", {
                  value: le,
                  className: (0, Mt.A)(
                    "DialogTextInputBase",
                    "_DialogInputContainer",
                  ),
                  cols: 80,
                  rows: 3,
                  placeholder: (0, t.we)("#MeetSteam_Reg_Question_placeholder"),
                  onChange: (ce) => l(ce.currentTarget.value),
                }),
              }),
            ],
          });
        }
        function wt(u) {
          const l = u.context.event,
            d = u.context.showErrorInfo,
            y = (0, a.j$)(u.args, "group_id"),
            j = Number.parseInt(y),
            R = (0, C.q3)(() => Dt(l, j));
          if (!R || !l)
            return d
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session group id ", j],
                })
              : null;
          if (l.clanSteamID.GetAccountID() != (0, Re.H)())
            return d
              ? (0, n.jsx)("div", { children: "Only support on special group" })
              : null;
          const le = at(u.context.bbcode, j),
            ce = dt(u.context.bbcode, "meetsteamsessiongroup", j);
          return (0, n.jsxs)(je, {
            clanAccountID: l.clanSteamID.GetAccountID(),
            gidClanEvent: l.GID ?? "",
            userAccountID: h.iA.accountid,
            children: [
              le && (0, n.jsx)(Z, { eventModel: l }),
              (0, n.jsx)(ie, { groupData: R, eventModel: l }),
              (0, n.jsx)(it, { eventModel: l, bIsLast: ce }),
            ],
          });
        }
        function Z(u) {
          const { eventModel: l } = u;
          return Y()
            ? (0, n.jsx)(X, { eventModel: l, accountID: h.iA.accountid })
            : null;
        }
        function X(u) {
          const { eventModel: l, accountID: d } = u,
            y = (0, W.Lc)(l.GID ?? "", d);
          return (0, n.jsx)("div", {
            children:
              !!y &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    children: (0, t.we)("#MeetSteam_QR_CheckIn"),
                  }),
                  (0, n.jsx)("img", { src: y, alt: "" }),
                ],
              }),
          });
        }
        function ie(u) {
          const { groupData: l, eventModel: d } = u,
            y = (0, lt.MU)(),
            j = bt(),
            R = $e(),
            le = (0, W.my)(d.clanSteamID.GetAccountID(), d.GID ?? ""),
            ce = (0, o.useMemo)(
              () =>
                l?.sessions &&
                [...l.sessions].sort(
                  (mt, Pt) => (mt.rtime_start ?? 0) - (Pt.rtime_start ?? 0),
                ),
              [l?.sessions],
            ),
            { elLogInDialog: Ke, fnRequireLogIn: Xe } = Zt(),
            rt = Te(),
            Ze = (0, C.q3)(() =>
              ce?.reduce(
                (mt, Pt) => mt.set(Pt.id ?? 0, Fe(rt, l.group_id, Pt.id)),
                new Map(),
              ),
            ),
            gt = Ce(),
            Ft = (0, W.mG)(
              d.clanSteamID.GetAccountID(),
              d.GID ?? "",
              h.iA.accountid,
            ),
            Lt = Ft.isSuccess && !!Ft.data.allow_registration_if_full,
            vt = le.data;
          if (le.isError)
            return (0, n.jsx)("div", {
              children: (0, t.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (!vt || (R && h.iA.accountid))
            return (0, n.jsx)(ne.t, {
              size: "medium",
              position: "center",
              string: (0, t.we)("#Loading"),
            });
          const ot = (mt) => gt(l.group_id, mt),
            At = l.group_visibility_tokens ?? [],
            zt = j !== null && At.includes(j);
          return At.length > 0 && !zt && !y
            ? null
            : (0, n.jsxs)(Oe, {
                groupData: l,
                children: [
                  ce?.map((mt, Pt) => {
                    const Ht = vt.find(
                        ($t) =>
                          $t.group_id === l.group_id && $t.session_id === mt.id,
                      ),
                      Bt = Ze?.get(mt.id ?? 0),
                      Ut = Pt + 1 < ce.length;
                    return (0, n.jsxs)(
                      o.Fragment,
                      {
                        children: [
                          (0, n.jsx)("div", {
                            className: Ve().SessionColumnCtn,
                            children: (0, n.jsx)(Ye, {
                              sessionData: mt,
                              onClick: () => Xe(() => ot(mt.id)),
                              nGuestReservations: Ht?.guest_count || 0,
                              eRegistrationStatus: Bt,
                              bAllowedToRegisterIfFull: Lt,
                            }),
                          }),
                          Ut && (0, n.jsx)(nt, {}),
                        ],
                      },
                      "timecol_" + l.group_id + "_" + mt.id,
                    );
                  }),
                  Ke,
                ],
              });
        }
        function Oe(u) {
          const { groupData: l, children: d } = u,
            y = (0, I.sfN)(h.TS.LANGUAGE),
            j = t.NT.GetWithFallback(l?.localized_session_title, y),
            R = t.NT.GetWithFallback(l?.localized_session_description, y),
            le = t.NT.GetWithFallback(l?.localized_intended_audience, y),
            ce = t.NT.GetWithFallback(l?.localized_sesssion_faq, y),
            Ke = (0, lt.MU)(),
            [Xe, rt] = (0, o.useState)(!1);
          return l
            ? (0, n.jsxs)("div", {
                className: (0, Mt.A)({
                  [Ve().Ctn]: !0,
                  [Ve().CtnRegistered]: !1,
                  [Ve().VisibilityOverride]:
                    Ke && (l.group_visibility_tokens?.length ?? 0) > 0,
                }),
                children: [
                  !!j &&
                    (0, n.jsx)("div", {
                      className: Ve().SessionTitle,
                      children: j,
                    }),
                  !!R &&
                    (0, n.jsx)("div", {
                      className: Ve().SessionDesc,
                      children: R,
                    }),
                  !!le &&
                    (0, n.jsx)("div", {
                      className: Ve().SessionAudience,
                      children: (0, t.we)(
                        "#MeetSteam_Session_Audience",
                        le ?? "",
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: Ve().SessionOptions,
                    children: d,
                  }),
                  !!ce &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("div", {
                          className: Ve().ExpanderRow,
                          children: [
                            (0, n.jsx)(fe.c, {
                              bExpanded: Xe,
                              setExpanded: rt,
                            }),
                            (0, n.jsx)("div", {
                              children: (0, t.we)("#MeetSteam_FAQ"),
                            }),
                          ],
                        }),
                        Xe &&
                          (0, n.jsx)("div", {
                            className: Ve().FAQDisplay,
                            children: (0, n.jsx)(pt.Zn, { text: ce ?? "" }),
                          }),
                      ],
                    }),
                ],
              })
            : null;
        }
        function Ae(u, l, d, y) {
          const j = d || (u === Pe && l > 0) || u === Ie || u === Q || u === ue;
          let R = null,
            le = null;
          return (
            u == Ie
              ? ((R = (0, t.we)("#MeetSteam_Registered")),
                (le = Ve().Registered))
              : u == Q
                ? ((R = (0, t.we)("#MeetSteam_Registering")),
                  (le = Ve().Registering))
                : u == ue
                  ? ((R = (0, t.we)("#MeetSteam_Unegistering")),
                    (le = Ve().Unregistering))
                  : y &&
                    ((R = (0, t.we)("#MeetSteam_Already")),
                    (le = Ve().RegisteredElsewhere)),
            { bEnabled: j, strStatusClass: le, strStatusToken: R }
          );
        }
        function Ye(u) {
          const {
              sessionData: l,
              onClick: d,
              nGuestReservations: y,
              eRegistrationStatus: j = Pe,
              bAllowedToRegisterIfFull: R,
            } = u,
            le = (0, C.q3)(() => l.max_capacity ?? 0),
            ce = Math.max(0, le - (y || 0)),
            {
              strStatusClass: Ke,
              strStatusToken: Xe,
              bEnabled: rt,
            } = Ae(j, ce, !!R),
            {
              sDisplayTimeZone: Ze,
              rtime_start: gt,
              rtime_end: Ft,
            } = (0, W._t)(l),
            Lt = (0, W.rF)(gt ?? 0, Ze),
            vt = (0, W.Mr)(gt ?? 0, Ft ?? 0, Ze);
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: (0, Mt.A)(Ve().SessionInstance, Ke),
              children: [
                (0, n.jsx)("div", {
                  className: Ve().StatusText,
                  children: (0, n.jsx)("span", { children: Xe }),
                }),
                (0, n.jsxs)("button", {
                  className: (0, Mt.A)(Ve().Button, Ve().Background),
                  disabled: !rt,
                  onClick: d,
                  children: [
                    (0, n.jsx)("div", { className: Ve().Title, children: Lt }),
                    (0, n.jsx)("div", {
                      className: Ve().TimeFrame,
                      children: vt,
                    }),
                  ],
                }),
                (0, n.jsx)(_e, {
                  nAvailableSpace: ce,
                  bAllowedToRegisterIfFull: R,
                }),
              ],
            }),
          });
        }
        function _e(u) {
          const { nAvailableSpace: l, bAllowedToRegisterIfFull: d } = u;
          return (0, n.jsx)(n.Fragment, {
            children:
              d ||
              (0, n.jsxs)(n.Fragment, {
                children: [
                  " ",
                  l < 1
                    ? (0, n.jsx)("div", {
                        className: Ve().SoldOut,
                        children: (0, t.we)("#MeetSteam_SoldOut"),
                      })
                    : (0, n.jsx)("div", {
                        className: Ve().MaxSize,
                        children: (0, t.Yp)(
                          "#MeetSteam_Spot",
                          l.toLocaleString((0, yt.J)()),
                        ),
                      }),
                  " ",
                ],
              }),
          });
        }
        function nt() {
          return (0, n.jsx)("div", {
            className: Ve().InstanceDivider,
            children: "\u25C6",
          });
        }
        function it(u) {
          const { eventModel: l, bIsLast: d } = u,
            [y, j] = o.useState(!1),
            [R, le] = o.useState(!1),
            ce = (0, W.my)(l.clanSteamID.GetAccountID(), l.GID ?? ""),
            [Ke, Xe, rt] = (0, S.uD)(),
            { elLogInDialog: Ze, fnRequireLogIn: gt } = Zt(),
            Ft = ut(),
            Lt = async (Bt) => {
              j(!0), (await Ft(Bt)) || Xe(), ce.refetch(), j(!1);
            },
            vt = $e(),
            ot = y || vt,
            At = P(),
            zt = Te(),
            mt = Me(zt),
            Pt = Je(zt),
            Ht = (0, C.q3)(() =>
              ze(zt).reduce((Bt, Ut) => {
                const $t = Dt(l, Ut),
                  mn = ke(zt, $t?.group_id),
                  Fn =
                    $t?.sessions?.find((Ln) => Ln.id == mn)?.max_per_team ?? 0;
                return Math.max(Bt, Fn);
              }, 1),
            );
          return (
            G(At, (0, t.we)("#EventEditor_UnsavedChanges")),
            (0, n.jsxs)("div", {
              className: (0, Mt.A)(
                Ve().CompleteRegistrationCtn,
                d && At && Ve().Visible,
              ),
              children: [
                (0, n.jsx)("p", {
                  children: Pt
                    ? (0, t.we)("#MeetSteam_UpdateRegistration_Desc")
                    : (0, t.we)("#MeetSteam_CompleteRegistration_Desc"),
                }),
                d &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      !ot &&
                        (0, n.jsx)(p.jn, {
                          disabled: !At,
                          onClick: () => gt(() => le(!0)),
                          children: Pt
                            ? (0, t.we)("#MeetSteam_UpdateRegistration")
                            : (0, t.we)("#MeetSteam_CompleteRegistration"),
                        }),
                      ot &&
                        (0, n.jsx)(ne.t, {
                          size: "small",
                          position: "center",
                          string: (0, t.we)("#Saving"),
                        }),
                      R &&
                        (0, n.jsx)(kt, {
                          eventModel: l,
                          fnConfirm: Lt,
                          fnHideModal: () => le(!1),
                          nMaxPerTeam: Ht,
                          bAddingOrChangingSessions: mt,
                        }),
                      Ke &&
                        (0, n.jsx)(b.EN, {
                          active: !0,
                          children: (0, n.jsx)(b.Ee, {
                            strTitle: (0, t.we)("#Error_Generic"),
                            strDescription: (0, t.we)(
                              "#MeetSteam_RegistrationFailed",
                            ),
                            closeModal: rt,
                          }),
                        }),
                      Ze,
                    ],
                  }),
              ],
            })
          );
        }
        function Dt(u, l) {
          return (u?.jsondata?.meet_steam_groups || [])?.find(
            (y) => y.group_id == l,
          );
        }
        function Yt(u, l) {
          return (u?.jsondata?.meet_steam_schedules || [])?.find(
            (y) => y.schedule_id == l,
          );
        }
        function Zt() {
          const { elDialogElement: u, fnShowLogonDialog: l } = (0, g.l)(
            (0, t.we)("#EventDisplay_Share_NotLoggedIn_Description"),
          );
          return {
            elLogInDialog: u,
            fnRequireLogIn: (y) => {
              h.iA.logged_in ? y() : l();
            },
          };
        }
        function He(u) {
          const l = u.context.event,
            d = u.context.showErrorInfo,
            y = (0, a.j$)(u.args, "schedule_id"),
            j = Number.parseInt(y),
            R = (0, C.q3)(() => Yt(l, j));
          if (!R || !l)
            return d
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session schedule id ", j],
                })
              : null;
          if (l.clanSteamID.GetAccountID() != (0, Re.H)())
            return d
              ? (0, n.jsx)("div", { children: "Only support on special group" })
              : null;
          const le = dt(u.context.bbcode, "meetsteamscheduleview", j);
          return (0, n.jsxs)(je, {
            clanAccountID: l.clanSteamID.GetAccountID(),
            gidClanEvent: l.GID ?? "",
            userAccountID: h.iA.accountid,
            children: [
              (0, n.jsx)(e, { scheduleData: R, eventModel: l }),
              (0, n.jsx)(it, { eventModel: l, bIsLast: le }),
            ],
          });
        }
        function e(u) {
          const { eventModel: l } = u,
            d = Ce(),
            y = $e(),
            j = (0, W.my)(l.clanSteamID.GetAccountID(), l.GID ?? ""),
            R = (0, W.mG)(
              l.clanSteamID.GetAccountID(),
              l.GID ?? "",
              h.iA.accountid,
            ),
            le = j.data;
          return j.isError
            ? (0, n.jsx)("div", {
                children: (0, t.we)("#Error_ErrorCommunicatingWithNetwork"),
              })
            : !le || (y && h.iA.accountid)
              ? (0, n.jsx)(ne.t, {
                  size: "medium",
                  position: "center",
                  string: (0, t.we)("#Loading"),
                })
              : (0, n.jsx)(i, {
                  ...u,
                  fnOnClick: d,
                  rgAvailability: le,
                  bAllowedToRegisterIfFull: R.data?.allow_registration_if_full,
                });
        }
        function i(u) {
          const {
              eventModel: l,
              scheduleData: d,
              bAllowedToRegisterIfFull: y,
              fnOnClick: j,
              rgAvailability: R,
            } = u,
            le = (0, lt.HN)(),
            ce = bt(),
            Ke = (0, Wt.B)(),
            [Xe, rt, Ze] = (0, C.q3)(() => [
              l.jsondata.meet_steam_groups,
              d.in_person_time_zone ?? W.hh,
              d.location_type,
            ]),
            [gt, Ft, Lt] = (0, o.useMemo)(() => {
              if (!Xe) return [new Map(), new Map(), new Array()];
              const vt = new Map(),
                ot = new Map();
              for (const At of Xe) {
                const zt = At.group_visibility_tokens ?? [],
                  mt = ce !== null && zt.includes(ce);
                if (!(zt.length > 0 && !mt && !le))
                  for (const Pt of At.sessions) {
                    const Bt = (
                      Ze == "in_person"
                        ? M()
                            .unix(Pt.rtime_start ?? 0)
                            .tz(rt)
                        : M()
                            .unix(Pt.rtime_start ?? 0)
                            .tz(Ke)
                    ).format("YYYY-MM-DD");
                    let Ut = vt.get(Bt);
                    Ut || ((Ut = []), vt.set(Bt, Ut)),
                      Ut.push({ group: At, session: Pt });
                  }
              }
              for (const At of d.session_breaks || []) {
                const mt = (
                  Ze == "in_person"
                    ? M()
                        .unix(At.rtime_start ?? 0)
                        .tz(rt)
                    : M()
                        .unix(At.rtime_start ?? 0)
                        .tz(Ke)
                ).format("YYYY-MM-DD");
                let Pt = ot.get(mt);
                Pt || ((Pt = []), ot.set(mt, Pt)), Pt.push(At);
              }
              for (const At of vt.values())
                At.sort(
                  (zt, mt) =>
                    (zt.session.rtime_start ?? 0) -
                    (mt.session.rtime_start ?? 0),
                );
              return [vt, ot, Array.from(vt.keys()).sort()];
            }, [Xe, ce, le, Ze, rt, Ke, d.session_breaks]);
          return Xe
            ? (0, n.jsx)(n.Fragment, {
                children: Lt.map((vt) => {
                  const ot = gt.get(vt);
                  return (0, n.jsx)(
                    "div",
                    {
                      className: Ve().SingleDayCtn,
                      children: (0, n.jsx)(A, {
                        scheduleData: d,
                        bAllowedToRegisterIfFull: !!y,
                        fnOnClick: j,
                        rgDayGroupSessions: ot ?? [],
                        rgBreakSessions: Ft.get(vt) || [],
                        rgAvailability: R ?? [],
                      }),
                    },
                    "day_" + vt,
                  );
                }),
              })
            : (0, n.jsx)("div", {
                children: "No Meet Steam Events; please create some first.",
              });
        }
        function A(u) {
          const {
              scheduleData: l,
              rgDayGroupSessions: d,
              rgBreakSessions: y,
              bAllowedToRegisterIfFull: j,
              fnOnClick: R,
              rgAvailability: le,
            } = u,
            ce = (0, o.useMemo)(() => {
              const Ze = [];
              for (const gt of d)
                Ze.length == 0 ||
                Ze[Ze.length - 1][0].session.rtime_start !=
                  gt.session.rtime_start
                  ? Ze.push([gt])
                  : Ze[Ze.length - 1].push(gt);
              return Ze;
            }, [d]),
            { sDisplayTimeZone: Ke, rtime_start: Xe } = (0, W._t)(d[0].session),
            rt = (0, W.rF)(Xe ?? 0, Ke);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("h2", {
                className: Ve().ScheduleTopDate,
                children: rt,
              }),
              y
                .filter(
                  (Ze) =>
                    (Ze.rtime_end ?? 0) <= (ce[0][0].session.rtime_start ?? 0),
                )
                .map((Ze) =>
                  (0, n.jsx)(
                    Xt,
                    { scheduleData: l, breakSession: Ze },
                    `breaks_${l.schedule_id}_${Ze.break_id}`,
                  ),
                ),
              ce.map((Ze, gt) => {
                let Ft = [];
                if (gt + 1 < ce.length) {
                  const Lt = Ze[0].session.rtime_start ?? 0,
                    vt = ce[gt + 1][0].session.rtime_end ?? 0;
                  Ft = y.filter(
                    (ot) =>
                      Lt < (ot.rtime_start ?? 0) && (ot.rtime_end ?? 0) < vt,
                  );
                }
                return (0, n.jsxs)(
                  o.Fragment,
                  {
                    children: [
                      (0, n.jsx)(en, {
                        bAllowedToRegisterIfFull: j,
                        fnOnClick: R,
                        scheduleData: l,
                        rgSlotSessions: Ze,
                        rgAvailability: le,
                      }),
                      Ft.map((Lt) =>
                        (0, n.jsx)(
                          Xt,
                          { scheduleData: l, breakSession: Lt },
                          `breaks_${l.schedule_id}_${Lt.break_id}`,
                        ),
                      ),
                    ],
                  },
                  "start_" + Ze[0].session.rtime_start,
                );
              }),
              y
                .filter(
                  (Ze) =>
                    (Ze.rtime_start ?? 0) >=
                    (ce[ce.length - 1][0].session.rtime_end ?? 0),
                )
                .map((Ze) =>
                  (0, n.jsx)(
                    Xt,
                    { scheduleData: l, breakSession: Ze },
                    `breaks_${l.schedule_id}_${Ze.break_id}`,
                  ),
                ),
            ],
          });
        }
        function Xt(u) {
          const { scheduleData: l, breakSession: d } = u,
            y = (0, I.sfN)(h.TS.LANGUAGE),
            j = (0, C.q3)(
              () =>
                t.NT.GetWithFallback(d.localized_break_description, y) ?? "",
            ),
            R = (0, C.q3)(() => ({
              rtime_start: d.rtime_start,
              rtime_end: d.rtime_end,
              location_type: l.location_type,
              in_person_time_zone: l.in_person_time_zone,
            }));
          return (0, n.jsxs)("div", {
            className: Ve().ScheduleRow,
            children: [
              (0, n.jsx)(rn, { session: R }),
              (0, n.jsx)("div", { children: j }),
            ],
          });
        }
        function en(u) {
          const {
            scheduleData: l,
            rgSlotSessions: d,
            bAllowedToRegisterIfFull: y,
            fnOnClick: j,
            rgAvailability: R,
          } = u;
          return (0, n.jsxs)("div", {
            className: Ve().ScheduleRow,
            children: [
              (0, n.jsx)(rn, { session: d[0].session }),
              (0, n.jsx)("div", {
                className: Ve().ScheduleSessionsColumn,
                children: d.map((le) =>
                  (0, n.jsx)(
                    un,
                    {
                      bAllowedToRegisterIfFull: y,
                      fnOnClick: j,
                      session: le,
                      rgAvailability: R,
                    },
                    `entry_${le.group.group_id}_${le.session.id}`,
                  ),
                ),
              }),
            ],
          });
        }
        function rn(u) {
          const { session: l } = u,
            {
              sDisplayTimeZone: d,
              rtime_start: y,
              rtime_end: j,
            } = (0, W._t)(l),
            R = (0, W.rF)(y ?? 0, d),
            le = (0, W.Mr)(y ?? 0, j ?? 0, d);
          return (0, n.jsxs)("div", {
            className: Ve().ScheduleTimeColumn,
            children: [
              (0, n.jsx)("div", { children: le }),
              (0, n.jsx)("div", { className: Ve().Timezone, children: R }),
            ],
          });
        }
        function un(u) {
          const {
              session: l,
              bAllowedToRegisterIfFull: d,
              fnOnClick: y,
              rgAvailability: j,
            } = u,
            R = (0, I.sfN)(h.TS.LANGUAGE),
            [le, ce, Ke, Xe] = (0, C.q3)(() => [
              t.NT.GetWithFallback(l.group.localized_session_title, R) ?? "",
              t.NT.GetWithFallback(l.group.localized_intended_audience, R) ??
                "",
              t.NT.GetWithFallback(l.group.localized_sesssion_faq, R) ?? "",
              t.NT.GetWithFallback(l.group.localized_session_description, R) ??
                "",
            ]),
            [rt, Ze, gt] = (0, S.uD)(!1),
            Ft = Te(),
            [Lt, vt, ot] = (0, C.q3)(() => [
              Fe(Ft, l.group.group_id, l.session.id),
              B(Ft, l.group.group_id, l.session.id),
              ee(Ft, l.group.group_id),
            ]),
            At = j?.find(
              (Ut) =>
                Ut.group_id === l.group.group_id &&
                Ut.session_id === l.session.id,
            )?.guest_count,
            zt = Math.max(0, (l.session.max_capacity ?? 0) - (At || 0)),
            {
              strStatusClass: mt,
              strStatusToken: Pt,
              bEnabled: Ht,
            } = Ae(Lt, zt, d, vt),
            Bt =
              vt && ot
                ? l.group.sessions.find((Ut) => Ut.id == ot)?.rtime_start
                : void 0;
          return (0, n.jsx)(tt.Gq, {
            toolTipContent: Bt
              ? (0, t.we)(
                  "#MeetSteam_AlreadyReg",
                  (0, et.TW)(Bt),
                  (0, et.KC)(Bt),
                )
              : void 0,
            children: (0, n.jsxs)("div", {
              className: (0, Mt.A)(Ve().SessionInstance, mt),
              children: [
                (0, n.jsx)("div", {
                  className: Ve().StatusText,
                  children: (0, n.jsx)("span", { children: Pt }),
                }),
                (0, n.jsxs)("div", {
                  className: Ve().Background,
                  children: [
                    (0, n.jsx)("div", {
                      className: Ve().SessionTitle,
                      children: le,
                    }),
                    ce &&
                      (0, n.jsx)("div", {
                        className: Ve().SessionAudience,
                        children: (0, t.we)("#MeetSteam_Session_Audience", ce),
                      }),
                    (0, n.jsx)("button", {
                      type: "button",
                      className: Ve().SessionInfoLink,
                      onClick: Ze,
                      children: (0, t.we)("#MeetSteam_Session_Details"),
                    }),
                    (0, n.jsx)("div", {
                      className: Ve().ScheduleActionRow,
                      children: (0, n.jsx)(p.$n, {
                        onClick: () => {
                          y && y(l.group.group_id, l.session.id);
                        },
                        disabled: !Ht,
                        children: (0, t.we)(
                          Lt == Ie ? "#Button_Unselect" : "#Button_Select",
                        ),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(_e, {
                  nAvailableSpace: zt,
                  bAllowedToRegisterIfFull: d,
                }),
                (0, n.jsx)(b.EN, {
                  active: rt,
                  children: (0, n.jsxs)(b.o0, {
                    strTitle: le,
                    bAlertDialog: !0,
                    bAllowFullSize: !0,
                    closeModal: gt,
                    children: [
                      (0, n.jsx)("div", { children: ce }),
                      (0, n.jsx)("div", { children: Xe }),
                      !!Ke &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              children: (0, t.we)("#MeetSteam_FAQ"),
                            }),
                            (0, n.jsx)(pt.Zn, { text: Ke }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        var cn = r(29522),
          dn = r(40358);
        function gn(u) {
          const l = Number.parseInt((0, a.j$)(u.args, "id")) || 0,
            d =
              ((0, a.j$)(u.args, "visible") || "false").toLowerCase() ===
              "true",
            y = u.context.showErrorInfo,
            j = (0, cn.oc)(l),
            { data: R, isPending: le } = (0, dn.J$)(j);
          if (!l)
            return y
              ? (0, n.jsx)("div", { children: "Error: PackageID Not Set" })
              : null;
          if (le) return null;
          const ce =
            R?.success == re.R
              ? !!(R.visible && R.best_purchase_option)
              : !R?.unvailable_for_country_restriction;
          return (!ce && !d) || (ce && d)
            ? (0, n.jsx)(n.Fragment, { children: u.children })
            : null;
        }
        const fn = /\bid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function zn(u) {
          const l = new Set();
          for (const d of u.matchAll(/\[packagepurchaseable\b([^\]]*)\]/gi)) {
            const y = fn.exec(d[1] ?? ""),
              j = Number.parseInt(y?.[1] ?? y?.[2] ?? y?.[3] ?? "");
            j && l.add(j);
          }
          return Array.from(l);
        }
        var Ct = r(50974),
          yn = r(41735),
          vn = r.n(yn),
          Tt = r(14947),
          hn = r(71742),
          sn = r(67705);
        const tn = 0,
          an = 1,
          pn = 2,
          Vt = 3,
          qt = 4,
          _t = 5,
          Mn = 6,
          ln = 7;
        function En() {
          const u = {
            exportFn: void 0,
            file: void 0,
            dataURL: void 0,
            uploadFileName: "",
            displayFileName: void 0,
            sha1: "",
            hmac: "",
            timestamp: 0,
            imageWidth: 0,
            imageHeight: 0,
            fileInfo: void 0,
            uploadInfo: void 0,
            eUploadState: tn,
            uploadProgress: 0,
            strErrorDescription: void 0,
          };
          return (0, Tt.l_)(u, {
            exportFn: !1,
            file: Tt.sH.ref,
            uploadFileName: !1,
            displayFileName: !1,
            sha1: !1,
            hmac: !1,
            timestamp: !1,
            fileInfo: !1,
            uploadInfo: !1,
          });
        }
        class bn {
          m_Callbacks;
          m_fileUploadProps = En();
          m_onComplete;
          constructor(l) {
            (0, Tt.Gn)(this, {
              SetUploadFileError: Tt.XI,
              StartFileExportToUpload: Tt.XI,
              SetImageFileToUpload: Tt.XI,
              SetOtherFileToUpload: Tt.XI,
              SetFileToUpload: Tt.XI,
              RetryFileUpload: Tt.XI,
              BeginFileUpload: Tt.XI,
              DoFileUpload: Tt.XI,
              CommitFileUpload: Tt.XI,
              ClearFileUploadError: Tt.XI,
              Reset: Tt.XI,
            }),
              (this.m_Callbacks = l);
          }
          get file_upload_props() {
            return this.m_fileUploadProps;
          }
          get file_upload_data_url() {
            return this.m_fileUploadProps.dataURL;
          }
          get file() {
            return this.m_fileUploadProps.file;
          }
          LogFileUploadMessage(l) {
            this.m_Callbacks.LogFileUploadMessage &&
              this.m_Callbacks.LogFileUploadMessage(l);
          }
          SetUploadFileError(l, d) {
            (this.m_fileUploadProps.eUploadState = l),
              (this.m_fileUploadProps.strErrorDescription = d),
              (this.m_fileUploadProps.displayFileName = void 0);
          }
          async StartFileExportToUpload(l, d = {}) {
            const { displayFilename: y, info: j, onComplete: R } = d;
            (this.m_fileUploadProps.eUploadState = ln),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_onComplete = R),
              (this.m_fileUploadProps.fileInfo = j),
              this.SetFileToUpload(l),
              (this.m_fileUploadProps.displayFileName = y);
          }
          async SetImageFileToUpload(l, d = {}) {
            const { processor: y = Sn, info: j } = d;
            if (!l) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = j;
            const R = this.m_Callbacks.GetFileNameOverride?.() ?? l.name;
            if (l.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                qt,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  R,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let le = [
                "jpg",
                "jpeg",
                "png",
                "gif",
                "webm",
                "mpg",
                "mp4",
                "mpeg",
                "ogv",
                "webp",
                "avif",
              ],
              ce = l.name.split(".").pop()?.toLowerCase() ?? "";
            if (le.indexOf(ce) == -1) {
              let Xe = ce || R;
              this.SetUploadFileError(
                _t,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatUploadFileTypeNotSupported",
                  Xe,
                ),
              );
              return;
            }
            const Ke = await y(l);
            this.SetFileToUpload(Ke.file),
              (this.m_fileUploadProps.imageHeight = Ke.height),
              (this.m_fileUploadProps.imageWidth = Ke.width);
          }
          async SetOtherFileToUpload(l, d = {}) {
            if (!l) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = d.info;
            const y = this.m_Callbacks.GetFileNameOverride?.() ?? l.name;
            if (l.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                qt,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  y,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let j = ["zip"],
              R = l.name.split(".").pop()?.toLowerCase() ?? "";
            if (j.indexOf(R) == -1) {
              let le = R || y;
              this.SetUploadFileError(
                _t,
                (0, t.we)("#Chat_Settings_Error_FileTypeNotZip", le),
              );
              return;
            }
            this.SetFileToUpload(l);
          }
          SetFileToUpload(l) {
            if (
              ((this.m_fileUploadProps.file = void 0),
              (this.m_fileUploadProps.dataURL = void 0),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.sha1 = ""),
              (this.m_fileUploadProps.imageWidth = 0),
              (this.m_fileUploadProps.imageHeight = 0),
              (this.m_fileUploadProps.displayFileName = void 0),
              !l)
            ) {
              this.m_fileUploadProps.eUploadState = tn;
              return;
            }
            let d = "";
            if (typeof l == "function")
              (this.m_fileUploadProps.file = void 0),
                (this.m_fileUploadProps.exportFn = l);
            else {
              (this.m_fileUploadProps.file = l),
                (this.m_fileUploadProps.exportFn = void 0);
              try {
                d = URL.createObjectURL(l);
              } catch (j) {
                console.error(`Failed to created object URL from file: ${j}`);
              }
              (this.m_fileUploadProps.displayFileName =
                this.m_fileUploadProps.file.name),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() +
                  "_" +
                  this.m_fileUploadProps.file.name);
            }
            this.m_fileUploadProps.eUploadState = an;
            let y = "";
            for (; y.length < 40; )
              y += Math.floor(Math.random() * 16).toString(16);
            (this.m_fileUploadProps.dataURL = d),
              (this.m_fileUploadProps.sha1 = y),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.timestamp = 0);
          }
          async RetryFileUpload() {
            return this.BeginFileUpload();
          }
          async BeginFileUpload(l) {
            if (
              ((this.m_fileUploadProps.uploadProgress = 0),
              this.m_fileUploadProps.exportFn)
            ) {
              this.m_fileUploadProps.eUploadState = ln;
              const { eResult: j, file: R } =
                await this.m_fileUploadProps.exportFn((le) => {
                  (0, Tt.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = le * 0.5;
                  });
                });
              if (j != re.R || !R)
                return (
                  this.SetUploadFileError(
                    Vt,
                    (0, t.we)("#Chat_Settings_Error_ExportFailed"),
                  ),
                  new Response()
                );
              (this.m_fileUploadProps.file = R),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() + "_" + R.name);
            }
            let d = this.m_fileUploadProps.file;
            if (!d)
              throw (
                ((0, hn.wT)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload",
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = pn),
              (this.m_fileUploadProps.uploadInfo = l);
            let y = new FormData();
            y.append("sessionid", (0, sn.KC)()),
              y.append("l", h.TS.LANGUAGE),
              y.append("file_size", d.size.toString()),
              y.append("file_name", this.m_fileUploadProps.uploadFileName),
              y.append("file_sha", this.m_fileUploadProps.sha1),
              y.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              y.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              y.append("file_type", d.type),
              this.m_Callbacks.PopulateBeginFileUploadFormData &&
                this.m_Callbacks.PopulateBeginFileUploadFormData(
                  y,
                  this.file_upload_props.uploadInfo,
                  this.file_upload_props.fileInfo,
                );
            try {
              let j = await fetch(
                  this.m_Callbacks.GetBeginFileUploadURL() +
                    `?l=${h.TS.LANGUAGE}`,
                  { method: "POST", body: y, credentials: "include" },
                ),
                R;
              try {
                R = await j.json();
              } catch {}
              if (!j.ok) {
                let le = "";
                throw (
                  ((0, Tt.h5)(() => {
                    (this.m_fileUploadProps.eUploadState = Vt),
                      this.LogFileUploadMessage(j),
                      R?.message
                        ? (le = R?.message)
                        : (le = (0, t.we)("#Chat_Settings_Error_ServerError")),
                      (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                        "#Chat_Upload_ErrorStart",
                        le,
                      ));
                  }),
                  le)
                );
              }
              if (!R || !R.result) throw new Error();
              return (
                (this.m_fileUploadProps.timestamp = R.timestamp),
                (this.m_fileUploadProps.hmac = R.hmac),
                this.DoFileUpload(R.result, d)
              );
            } catch (j) {
              let R = j || (0, t.we)("#ConnectionTrouble_FailedToConnect");
              throw (
                ((0, Tt.h5)(() => {
                  (this.m_fileUploadProps.eUploadState = Vt),
                    (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                      "#Chat_Upload_ErrorStart",
                      R,
                    ));
                }),
                R)
              );
            }
          }
          async DoFileUpload(l, d) {
            let y = l.use_https ? "https://" : "http://";
            y += l.url_host + l.url_path;
            const j = {};
            for (const le of l.request_headers) {
              if (
                le.name.toLowerCase() == "content-length" ||
                le.name.toLowerCase() == "host"
              )
                continue;
              let ce = le.name;
              ce.toLowerCase() === "content-type" && (ce = "Content-Type"),
                (j[ce] = le.value);
            }
            let R = {
              onUploadProgress: (le) => {
                const ce = !!this.m_fileUploadProps.exportFn,
                  Ke = ce ? 50 : 0,
                  Xe = ce ? 50 : 100,
                  rt = Ke + (le.loaded / le.total) * Xe;
                rt > this.m_fileUploadProps.uploadProgress &&
                  (0, Tt.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = rt;
                  });
              },
              headers: j,
              transformRequest: [(le) => le],
            };
            try {
              return (
                await vn().put(y, d, R), this.CommitFileUpload(!0, l.ugcid, d)
              );
            } catch (le) {
              throw (
                (this.LogFileUploadMessage(le.response),
                (0, Tt.h5)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                    "#Chat_Upload_ErrorCloud",
                  )),
                    (this.m_fileUploadProps.eUploadState = Vt),
                    (this.m_fileUploadProps.uploadProgress = 0);
                }),
                this.CommitFileUpload(!1, l.ugcid, d),
                this.m_fileUploadProps.strErrorDescription)
              );
            }
          }
          async CommitFileUpload(l, d, y) {
            let j = this.m_fileUploadProps.sha1,
              R = new FormData();
            R.append("sessionid", (0, sn.KC)()),
              R.append("l", h.TS.LANGUAGE),
              R.append("file_name", this.m_fileUploadProps.uploadFileName),
              R.append("file_sha", j),
              R.append("success", l ? "1" : "0"),
              R.append("ugcid", d),
              R.append("file_type", y.type),
              R.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              R.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              R.append(
                "timestamp",
                this.m_fileUploadProps.timestamp.toString(),
              ),
              R.append("hmac", this.m_fileUploadProps.hmac),
              this.m_Callbacks.PopulateCommitFileUploadFormData(
                R,
                this.file_upload_props.uploadInfo,
                this.file_upload_props.fileInfo,
              );
            try {
              let le = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
                method: "POST",
                body: R,
                credentials: "include",
              });
              return (
                l
                  ? ((this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = Mn),
                    this.m_onComplete && this.m_onComplete(re.R, y.size))
                  : ((this.m_fileUploadProps.eUploadState = Vt),
                    this.m_onComplete && this.m_onComplete(re.zi, y.size)),
                le
              );
            } catch (le) {
              if (!l) return;
              let ce = "";
              throw (
                ((0, Tt.h5)(() => {
                  if (
                    (this.LogFileUploadMessage(le),
                    (this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = Vt),
                    le.response)
                  ) {
                    let Ke = le.response.data,
                      Xe = le.response.status,
                      rt = Ke && Ke.success;
                    Ke.message
                      ? (ce = Ke.message)
                      : (ce = (0, t.we)("#Chat_Settings_Error_ServerError"));
                  } else ce = (0, t.we)("#ConnectionTrouble_FailedToConnect");
                  (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${ce}`),
                    this.m_onComplete && this.m_onComplete(re.zi, y.size);
                }),
                ce)
              );
            }
          }
          ClearFileUploadError() {
            (this.m_fileUploadProps.eUploadState != Vt &&
              this.m_fileUploadProps.eUploadState != qt &&
              this.m_fileUploadProps.eUploadState != _t) ||
              this.Reset();
          }
          Reset() {
            this.SetFileToUpload(void 0);
          }
        }
        function Sn(u) {
          return new Promise((l) => {
            let d = new FileReader();
            (d.onload = () => {
              let y = u,
                j = d.result,
                R = wn(j),
                le = new Blob([R], { type: u.type });
              if (le) {
                let ce = le;
                (ce.lastModifiedDate = new Date(u.lastModified)),
                  (ce.name = u.name),
                  (y = ce);
              }
              if (u.type.indexOf("image") == 0) {
                let ce = new Image();
                (ce.src = URL.createObjectURL(u)),
                  (ce.onload = (Ke) => {
                    l({ file: y, width: ce.width, height: ce.height });
                  });
              } else l({ file: y, width: 0, height: 0 });
            }),
              d.readAsArrayBuffer(u);
          });
        }
        function wn(u) {
          let l = new DataView(u),
            d = 0,
            y = 0,
            j = [],
            R = 0;
          if (l.getUint16(d) == 65496) {
            d += 2;
            let le = l.getUint16(d);
            for (d += 2; d < l.byteLength && d < 131072; ) {
              if (le == 65505)
                (j[R] = { recess: y, offset: d - 2 }),
                  (y = d + l.getUint16(d)),
                  R++;
              else if (le == 65498) break;
              (d += l.getUint16(d)), (le = l.getUint16(d)), (d += 2);
            }
            let ce = u.byteLength - y;
            if (
              (j.forEach((Xe) => {
                ce += Xe.offset - Xe.recess;
              }),
              ce === u.byteLength)
            )
              return u;
            const Ke = new Uint8Array(ce);
            if (j.length > 0) {
              let Xe = 0;
              j.forEach((rt) => {
                let Ze = rt.offset - rt.recess;
                Ke.set(new Uint8Array(u.slice(rt.recess, rt.offset)), Xe),
                  (Xe += Ze);
              }),
                Ke.set(new Uint8Array(u.slice(y)), Xe);
            }
            return Ke.buffer;
          }
          return u;
        }
        var Dn = r(24660),
          nn = r(36118),
          In = r(39362),
          xn = r.n(In);
        function We(u) {
          const { fileUploadManager: l } = u,
            d = (0, o.useRef)(null);
          return (0, n.jsxs)("div", {
            className: xn().Ctn,
            children: [
              (0, n.jsx)("input", {
                type: "file",
                accept: ".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4",
                style: { display: "none" },
                name: "fileupload",
                ref: d,
                onChange: (y) => {
                  const j = y.currentTarget.files;
                  j?.length &&
                    (l.SetImageFileToUpload(j[0]),
                    (y.currentTarget.value = ""));
                },
              }),
              (0, n.jsx)(Dn.fu, {
                type: "button",
                title: (0, t.we)("#Button_Upload"),
                onOKActionDescription: (0, t.we)("#Button_Upload"),
                onClick: () => d.current?.click(),
                children: (0, n.jsx)(nn.xv8, {}),
              }),
            ],
          });
        }
        var Be = r(71714),
          Ue = r.n(Be);
        function Vn(u) {
          const { fileUploadManager: l } = u,
            d = (0, C.q3)(() => l.file_upload_props.eUploadState);
          return d == an
            ? (0, n.jsx)(Hn, { fileUploadManager: l })
            : d == Vt || d == _t || d == qt
              ? (0, n.jsx)(Qn, { fileUploadManager: l })
              : d != tn
                ? (0, n.jsx)($n, { fileUploadManager: l })
                : null;
        }
        function Hn(u) {
          const { fileUploadManager: l } = u,
            d = l.file;
          return d
            ? (0, n.jsxs)("div", {
                className: Ue().UploadPreviewContainer,
                children: [
                  d.type.indexOf("image") != -1 &&
                    (0, n.jsx)("img", {
                      className: Ue().UploadPreview,
                      src: l.file_upload_data_url,
                    }),
                  d.type.indexOf("video") != -1 && (0, n.jsx)(nn.CeX, {}),
                  (0, n.jsxs)("div", {
                    className: Ue().FileUploadFileName,
                    children: ["'", d.name, "'"],
                  }),
                  (0, n.jsx)("div", {
                    className: Ue().FileUploadCancel,
                    onClick: () => l.Reset(),
                    children: (0, n.jsx)(nn.sED, {}),
                  }),
                  (0, n.jsx)(p.jn, {
                    className: Ue().FileUploadBtn,
                    onClick: async () => {
                      await l.BeginFileUpload(), l.Reset();
                    },
                    children: (0, t.we)("#Button_Upload"),
                  }),
                ],
              })
            : null;
        }
        function $n(u) {
          const { fileUploadManager: l } = u,
            [d, y, j] = (0, C.q3)(() => [
              l.file_upload_props.file,
              l.file_upload_props.displayFileName,
              l.file_upload_props.uploadProgress,
            ]),
            R = d ? (0, t.we)("#Uploading_Item", y ?? "") : "",
            le = { width: j + "%" };
          return (0, n.jsxs)("div", {
            className: Ue().FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: Ue().FileUploadProgressName,
                children: R,
              }),
              (0, n.jsx)("div", {
                className: (0, Mt.A)(
                  Ue().FileUploadProgressBarContainer,
                  "DialogProgressBar_ProgressBarContainer",
                ),
                children: (0, n.jsx)("div", {
                  className: "DialogProgressBar_Value",
                  style: le,
                }),
              }),
            ],
          });
        }
        function Qn(u) {
          const { fileUploadManager: l } = u,
            [d, y, j] = (0, C.q3)(() => [
              l.file_upload_props.strErrorDescription,
              l.file_upload_props.displayFileName,
              l.file_upload_props.eUploadState,
            ]),
            R = y ? (0, t.we)("#Uploading_Item", y) : "",
            le = d || (0, t.we)("#Chat_Upload_ErrorCloud");
          return (0, n.jsxs)("div", {
            className: Ue().FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: Ue().FileUploadProgressName,
                children: R,
              }),
              (0, n.jsx)("div", {
                className: Ue().FileUploadErrorDescription,
                children: le,
              }),
              (0, n.jsx)("div", {
                className: Ue().FileUploadActions,
                children: (0, n.jsxs)(p.dR, {
                  className: "DialogLayout_NoMinWidth",
                  children: [
                    j == Vt &&
                      (0, n.jsx)(p.jn, {
                        onClick: async () => {
                          await l.RetryFileUpload(), l.Reset();
                        },
                        children: (0, t.we)("#Chat_Upload_ErrorAction_Retry"),
                      }),
                    (0, n.jsx)(p.$n, {
                      onClick: () => l.ClearFileUploadError(),
                      children: (0, t.we)("#Chat_Upload_ErrorAction_Close"),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var jn = r(25792);
        function Yn(u) {
          const { showErrorInfo: l, event: d } = u.context,
            y = d?.clanSteamID.GetAccountID() ?? 0;
          return y == Ct.GU ||
            y == Ct.bv ||
            (h.TS.EUNIVERSE == I.Rv && y == Ct.mW) ||
            (h.TS.EUNIVERSE == I.wLO && y == Ct.Kd)
            ? (0, n.jsx)(jn.tH, {
                children: (0, n.jsx)(Zn, { clanAccountID: y }),
              })
            : l
              ? (0, n.jsx)("div", {
                  children: (0, t.we)("#CloudUpload_NotSupport"),
                })
              : null;
        }
        function Zn(u) {
          const { clanAccountID: l } = u,
            [d] = o.useState(() => new bn(Xn(l)));
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(We, { fileUploadManager: d }),
              (0, n.jsx)(Vn, { fileUploadManager: d }),
            ],
          });
        }
        function Xn(u) {
          return {
            PopulateBeginFileUploadFormData: (l) => {
              l.append("clan_account_id", "" + u);
            },
            PopulateCommitFileUploadFormData: (l) => {
              l.append("clan_account_id", "" + u);
            },
            GetBeginFileUploadURL: () =>
              h.TS.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
            GetCommitFileUploadURL: () =>
              h.TS.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
            LogFileUploadMessage: (l) => {
              console.log("UploadFileButton: ", l);
            },
            GetMaxFileSizeMB: () => 100,
          };
        }
        var Jn = r(86336),
          Cn = r(24642),
          qn = r(16114);
        function Un(u, l, d) {
          const y = _n(u, l);
          return (0, o.useMemo)(() => {
            const j = y.results.find((R) => d == R.unique_id);
            return {
              bLoading: y.bLoading,
              success: y.success,
              userPollData: j,
              error_message: y.error_message,
              userPollSubmitData: y.userPollSubmitData,
            };
          }, [y, d]);
        }
        function _n(u, l) {
          const d = (0, be.I)({
            queryKey: on(u, l),
            queryFn: async () => {
              const j = await (
                await fetch(Bn(u, l, !1), {
                  method: "GET",
                  credentials: "include",
                })
              ).json();
              return Wn(j);
            },
            placeholderData: {
              results: [],
              success: re.S7,
              bLoading: !0,
              userPollSubmitData: { user_poll_option_votes: [] },
            },
          });
          return d.data
            ? d.data
            : {
                results: [],
                success: re.S7,
                bLoading: !0,
                userPollSubmitData: { user_poll_option_votes: [] },
              };
        }
        function er(u, l) {
          const d = (0, Le.jE)();
          return (0, Ne.n)({
            mutationKey: [
              "useSetPartnerEventCastVoteUserPoll",
              u.GetAccountID(),
              l,
            ],
            mutationFn: async (y) => {
              const j = { votes: y.votes },
                R = await fetch(Bn(u, l, !0), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(j),
                  credentials: "include",
                });
              if (!R.ok) throw new Error(`Server returned ${R.status}`);
              return await R.json();
            },
            onSuccess: (y, j) => {
              if (y.success == re.R) d.setQueryData(on(u, l), () => Wn(y));
              else {
                const R = d.getQueryData(on(u, l));
                if (R) {
                  const le = {
                    ...R,
                    success: y.success,
                    error_message: y.error_message,
                  };
                  d.setQueryData(on(u, l), () => le);
                }
              }
            },
          });
        }
        function Wn(u) {
          return {
            ...u,
            bLoading: !1,
            userPollSubmitData: {
              user_poll_option_votes: u.results
                .map((l) => l.voted_option_id)
                .reduce((l, d) => l.concat(d), []),
            },
          };
        }
        function on(u, l) {
          return tr(u.ConvertTo64BitString(), l);
        }
        function tr(u, l) {
          return ["usePartnerEventUserPoll", u, l];
        }
        function Bn(u, l, d) {
          return `${h.TS.COMMUNITY_BASE_URL}partnerevents/${u.ConvertTo64BitString()}/userpoll/${l}/${d ? "ajaxcastvote" : "ajaxloaddata"}/?origin=${encodeURIComponent(location.origin)}`;
        }
        const nr = 1440 * 60;
        function Nn(u, l) {
          let d = 0;
          return (
            l.poll_end_time
              ? (d = l.poll_end_time)
              : (d =
                  (u.rtime32_visibility_start ?? u.rtime32_start_time ?? 0) +
                  (l.poll_end_days_since_start || nr)),
            d
          );
        }
        function rr(u, l) {
          return Nn(u, l) < Math.floor(Date.now() / 1e3);
        }
        var Dr = r(98609);
        const Ir = null;
        function xr(u) {
          return `${Config.COMMUNITY_BASE_URL}mediaconvert/ajaxgroupconvert/${u.ConvertTo64BitString()}`;
        }
        var Kn = ((u) => (
            (u.k_EPollResult_NotVisible = "not_visible"),
            (u.k_EPollResult_Visible_After_Vote = "after_vote"),
            (u.k_EPollResult_Visible_After_End = "after_end"),
            (u.k_EPollResult_Visible_After_Vote_Or_End = "after_vote_or_end"),
            (u.k_EPollResult_Visible_On_Demand = "on_demand"),
            u
          ))(Kn || {}),
          ir = ((u) => (
            (u.k_EPollVoter_AnyUser = "any_user"),
            (u.k_EPollVoter_UserGameInLibrary = "user_game_in_library"),
            (u.k_EPollVoter_MinPlayTime = "min_play_time"),
            (u.k_EPollVoter_MemberOfGroup = "member_of_group"),
            u
          ))(ir || {}),
          sr = r(76559),
          ar = r(28515),
          Rn = r(56330),
          lr = r(86959),
          or = r(6365),
          Kt = r.n(or);
        function mr(u) {
          const l = u.context.event,
            d = u.context.showErrorInfo,
            y = (0, a.j$)(u.args, "poll_id"),
            j = Number.parseInt(y),
            R = (0, C.q3)(() => ur(l, j));
          if (!R || !l)
            return d
              ? (0, n.jsx)("div", {
                  className: Rn.ErrorStylesWithIcon,
                  children: (0, t.we)("#UserPolls_Editor_FailToFindModel", j),
                })
              : null;
          const le = (0, I.sfN)(h.TS.LANGUAGE);
          return (0, n.jsx)(jn.tH, {
            children: (0, n.jsx)(cr, {
              userPollDef: R,
              lang: le,
              eventModel: l,
            }),
          });
        }
        function ur(u, l) {
          return (
            (u?.jsondata?.user_polls || [])?.find((y) => y.poll_id == l) || null
          );
        }
        function cr(u) {
          const { eventModel: l, userPollDef: d, lang: y } = u,
            { userPollData: j, ...R } = Un(
              l.clanSteamID,
              l.GID || "0",
              d.poll_id,
            ),
            le = !!(R.error_message && R.error_message?.length > 0),
            ce = er(l.clanSteamID, l.GID || "0"),
            [Ke, Xe] = (0, o.useState)(void 0),
            [rt, Ze] = (0, o.useState)(!1),
            [gt, Ft] = (0, o.useState)(!1),
            Lt = j?.option_results && j?.option_results.length > 0,
            vt = ((j && j.voted_option_id?.length) || 0) > 0;
          return (
            (0, o.useEffect)(() => {
              !gt &&
                d.results_visibility_settings != Kn.k_EPollResult_NotVisible &&
                Lt &&
                (rr(
                  {
                    rtime32_visibility_start:
                      l.GetVisibilityStartTimeAndDateUnixSeconds(),
                    rtime32_start_time: l.GetStartTimeAndDateUnixSeconds(),
                  },
                  d,
                ) ||
                  vt) &&
                Ft(!0);
            }, [Lt, vt, gt, l, d]),
            (0, n.jsxs)(dr, {
              ...u,
              children: [
                d.options?.map((ot) => {
                  const At = j?.option_results.find(
                      (mt) => mt.unique_id == ot.option_id,
                    ),
                    zt =
                      j?.voted_option_id.includes(ot.option_id || 0) ||
                      Ke === ot.option_id;
                  return (0, n.jsx)(
                    gr,
                    {
                      lang: y,
                      pollOptionDef: ot,
                      bSelected: zt,
                      nPercentage: gt ? At?.percent : void 0,
                      onClick: () => Xe(ot.option_id),
                      bDisableSelection:
                        R.bLoading || !j?.vote_permitted || le || rt || vt,
                    },
                    "polloption" + ot.option_id,
                  );
                }),
                !!Ke &&
                  (0, n.jsx)(p.$n, {
                    onClick: async () => {
                      if (
                        !R.userPollSubmitData.user_poll_option_votes.includes(
                          Ke,
                        )
                      ) {
                        Ze(!0);
                        const ot = {
                          user_poll_option_votes: [
                            ...R.userPollSubmitData.user_poll_option_votes,
                          ],
                        };
                        ot.user_poll_option_votes.push(Ke),
                          await ce.mutateAsync({ votes: ot }),
                          Xe(void 0),
                          Ze(!1);
                      }
                    },
                    children: (0, t.we)("#Button_Submit"),
                  }),
                (rt || R.bLoading) &&
                  (0, n.jsx)(ne.t, {
                    size: "small",
                    position: "center",
                    string: R.bLoading ? (0, t.we)("#Loading") : void 0,
                  }),
                Lt &&
                  !vt &&
                  !gt &&
                  (0, n.jsx)(Jn.W, {
                    onClick: () => Ft(!0),
                    children: (0, t.we)("#UserPolls_JustSeeResults"),
                  }),
                le &&
                  (0, n.jsx)("div", {
                    className: Rn.ErrorStylesWithIcon,
                    children: R.error_message,
                  }),
              ],
            })
          );
        }
        function dr(u) {
          const { userPollDef: l, lang: d, eventModel: y, children: j } = u,
            R = (0, ar.n)(),
            [le, ce] = (0, C.q3)(() => [
              t.NT.GetWithFallback(l.localized_poll_description, d),
              l.user_poll_background,
            ]);
          let Ke;
          const Xe = y.clanSteamID.GetAccountID();
          ce &&
            (Ke = {
              backgroundImage: `url('${(0, lr.Fk)(Xe, ce)}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            });
          const rt = (0, o.useMemo)(() => sr.b.InitFromClanID(Xe), [Xe]),
            { userPollData: Ze } = Un(rt, y.GID || "0", l.poll_id),
            gt = Nn(
              {
                rtime32_visibility_start:
                  y.GetVisibilityStartTimeAndDateUnixSeconds(),
                rtime32_start_time: y.GetStartTimeAndDateUnixSeconds(),
              },
              l,
            );
          return (0, n.jsx)("div", {
            className: Kt().PollBackground,
            style: Ke,
            children: (0, n.jsxs)("div", {
              className: Kt().PollContainer,
              children: [
                (0, n.jsx)("div", {
                  className: Kt().PollQuestion,
                  children: le,
                }),
                (0, n.jsx)("div", { className: Kt().PollOptions, children: j }),
                (0, n.jsxs)("div", {
                  className: Kt().PollStatus,
                  children: [
                    (0, n.jsx)("div", {
                      children: (0, t.Yp)(
                        "#UserPolls_status_N_Votes",
                        (0, Cn.D)(Ze?.total_votes || 0),
                      ),
                    }),
                    Ze?.display_message
                      ? (0, n.jsx)("div", { children: Ze?.display_message })
                      : (0, n.jsx)("div", {
                          children: (0, t.PP)(
                            "#UserPolls_status_N_TimeRemaining",
                            (0, qn.R2)(gt - R),
                          ),
                        }),
                  ],
                }),
              ],
            }),
          });
        }
        function gr(u) {
          const {
              pollOptionDef: l,
              onClick: d,
              lang: y,
              bDisableSelection: j,
              bSelected: R,
              nPercentage: le,
            } = u,
            [ce] = (0, C.q3)(() => [
              t.NT.GetWithFallback(l.localized_option, y),
            ]),
            Ke = Math.round((le ?? 0) * 100),
            Xe = !j && !!d;
          return (0, n.jsxs)("div", {
            className: (0, Mt.A)({
              [Kt().PollOption]: !0,
              [Kt().Selected]: R,
              [Kt().Disabled]: j,
            }),
            role: "button",
            "aria-pressed": !!R,
            "aria-disabled": !!j,
            tabIndex: Xe ? 0 : void 0,
            onClick: Xe ? d : void 0,
            onKeyDown: Xe
              ? (rt) => {
                  (rt.key === "Enter" || rt.key === " ") &&
                    (rt.preventDefault(), d?.());
                }
              : void 0,
            children: [
              (0, n.jsx)("div", { className: Kt().BackgroundBar }),
              (0, n.jsx)("div", {
                className: Kt().ForegroundBar,
                style: { width: `${Ke}%` },
              }),
              (0, n.jsxs)("div", {
                className: Kt().ContentRow,
                children: [
                  (0, n.jsx)("div", { className: Kt().PollVoteIcon }),
                  le !== void 0 &&
                    (0, n.jsxs)("div", {
                      className: Kt().PctText,
                      children: [Ke, "%"],
                    }),
                  (0, n.jsx)("span", {
                    className: Kt().OptionText,
                    children: ce,
                  }),
                ],
              }),
            ],
          });
        }
        function jr(u) {
          return /\[userpolls\b/i.test(u);
        }
        var fr = r(90711),
          yr = r(30364);
        function vr(u) {
          const { dynamicImport: l, fallback: d, ...y } = u,
            [j] = (0, o.useState)(() =>
              o.lazy(async () => ({ default: await l() })),
            );
          return (0, n.jsx)(yr.f, {
            fallback: d,
            children: (0, n.jsx)(o.Suspense, {
              fallback: d,
              children: (0, n.jsx)(j, { ...y }),
            }),
          });
        }
        var hr = r(9032),
          pr = r(11547),
          Mr = r(1491);
        const Er = (u) => {
          const { vodInfo: l, bLoading: d } = (0, hr.fB)(u.appid);
          return !l && u.bPreviewMode
            ? (0, n.jsx)("div", {
                children: (0, t.we)(
                  d ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
                  u.appid,
                ),
              })
            : (0, n.jsx)("div", {
                className: Mr.BroadcastCtn,
                children: (0, n.jsx)(jn.tH, {
                  children: (0, n.jsx)(vr, {
                    dynamicImport: async () =>
                      (
                        await Promise.all([
                          r.e(36597),
                          r.e(56589),
                          r.e(85599),
                          r.e(33512),
                          r.e(94781),
                          r.e(18307),
                          r.e(8892),
                          r.e(80702),
                          r.e(48355),
                          r.e(36786),
                          r.e(55050),
                          r.e(60480),
                          r.e(60839),
                          r.e(14632),
                          r.e(54409),
                          r.e(73810),
                          r.e(49968),
                          r.e(34004),
                          r.e(11095),
                          r.e(14867),
                          r.e(8319),
                          r.e(10177),
                          r.e(68396),
                        ]).then(r.bind(r, 7132))
                      ).default,
                    nAppIDVOD: u.appid,
                    watchLocation: fr.nn.TC,
                    bStartPaused: !0,
                  }),
                }),
              });
        };
        function Ar(u) {
          const l = new Set();
          for (const d of u.matchAll(/\[vod\b([^\]]*)\]/gi)) {
            const y = k_BBCodeAppIDArgRegExp.exec(d[1] ?? ""),
              j = y ? Number.parseInt(y[1] ?? y[2] ?? y[3] ?? "") : 0;
            j && l.add(j);
          }
          return Array.from(l);
        }
        function br(u) {
          const l = (0, pr.H)(u.args, "appid", 0);
          return (0, n.jsx)(Er, {
            appid: l,
            bPreviewMode: !!u.context.showErrorInfo,
          });
        }
        let An = null;
        function Sr() {
          return (
            An == null &&
              (An = new Map([
                ["remindme", { Constructor: L, autocloses: !1 }],
                ["vod", { Constructor: br, autocloses: !1 }],
                ["giveawayeligible", { Constructor: $, autocloses: !1 }],
                ["claimitem", { Constructor: f, autocloses: !0 }],
                ["packagepurchaseable", { Constructor: gn, autocloses: !1 }],
                ["actiondialog", { Constructor: J, autocloses: !1 }],
                ["uploadfilebutton", { Constructor: Yn, autocloses: !0 }],
                ["userpolls", { Constructor: mr, autocloses: !1 }],
                ["meetsteamsessiongroup", { Constructor: wt, autocloses: !1 }],
                ["meetsteamscheduleview", { Constructor: He, autocloses: !1 }],
              ])),
            An
          );
        }
        let On = null;
        function Gn() {
          return (
            On == null &&
              (On = new Map([
                ...Array.from(Sr().entries()),
                ...Array.from(_.entries()),
              ])),
            On
          );
        }
        let Pn = null;
        function Or() {
          return (
            Pn == null &&
              (Pn = new Map([
                ...Array.from(GetEventBBCodeDisplayDictionary().entries()),
                ...Array.from(Gn().entries()),
              ])),
            Pn
          );
        }
        function wr(u) {
          return (0, n.jsx)(Tn, { children: (0, n.jsx)(pt.Zn, { ...u }) });
        }
        function Pr(u) {
          return jsx(Tn, { children: jsx(EventBBDisplayElement, { ...u }) });
        }
        function Tn(u) {
          return (0, n.jsx)(pt.d3, { dictionary: Gn(), children: u.children });
        }
      },
      42184: (ge, de, r) => {
        "use strict";
        r.d(de, { v: () => v });
        var n = r(7850),
          x = r(33752),
          a = r(36707),
          s = r(17009),
          t = r.n(s);
        function v(L) {
          return (0, n.jsx)("div", {
            className: (0, a.A)(
              t().AppPartnerEventsBanner,
              "AppPartnerEventsBanner",
            ),
            children: (0, n.jsx)(x.W, { ...L }),
          });
        }
      },
      68988: (ge, de, r) => {
        "use strict";
        r.d(de, { C: () => S });
        var n = r(42277),
          x = r(72604),
          a = r(72609);
        const s = "partnereventaction/myvote",
          t = "partnereventaction/rateevent";
        async function v(p) {
          const b = a.TS.STORE_BASE_URL + s + "?gid=" + encodeURIComponent(p),
            V = await fetch(b, { credentials: "include" });
          if (!V.ok) throw new Error(`${b} answered ${V.status}`);
          return (await V.json()).vote ?? null;
        }
        async function L(p, b, V) {
          const ne = a.TS.STORE_BASE_URL + t,
            se = {
              gid: p,
              clanaccountid: String(b),
              voteup: V == "up" ? "1" : "0",
            },
            J = await fetch(ne, {
              method: "POST",
              credentials: "include",
              body: new URLSearchParams(se),
            });
          if (!J.ok) throw new Error(`${ne} answered ${J.status}`);
          return (await J.json()).success ?? x.zi;
        }
        const k = { GetMyEventVote: v, RateEvent: L };
        var F = r(72849),
          N = r(68312),
          T = r(90626),
          _ = r(71742),
          U = r(67705);
        let O;
        function S(p, b) {
          const V = p?.AnnouncementGID,
            ne = p?.clanSteamID.GetAccountID() ?? 0,
            se = h(),
            { myVote: J, Vote: H } = (0, n.KL)(V, ne, se, {
              initialVote: o(V),
              ...b,
            });
          return {
            myVote: J,
            Vote: (m) => {
              !p ||
                !V ||
                m == J ||
                (J && p.UpdateVoteCount(J, -1), p.UpdateVoteCount(m, 1), H(m));
            },
          };
        }
        function h() {
          const { useActiveCMInterface: p } = (0, N.tc)(),
            b = (0, N.KV)(),
            V = !!p;
          return T.useMemo(
            () =>
              V
                ? {
                    GetMyEventVote: async (ne) => await D(b, ne),
                    RateEvent: async (ne, se, J) => await g(b, ne, se, J),
                  }
                : k,
            [V, b],
          );
        }
        async function D(p, b) {
          if (!p) return null;
          const V = await F.BE.GetClanAnnouncementVoteForUser(p, {
            announcementid: b,
          });
          return V.BSuccess()
            ? V.Body().voted_up()
              ? "up"
              : V.Body().voted_down()
                ? "down"
                : null
            : null;
        }
        async function g(p, b, V, ne) {
          return p
            ? (
                await F.BE.RateClanAnnouncement(p, {
                  announcementid: b,
                  vote_up: ne == "up",
                  clan_accountid: V,
                })
              ).GetEResult()
            : x.Dy;
        }
        function o(p) {
          if (typeof window > "u") {
            (0, _.wT)(!1, "GetVoteFromPageConfig is browser only");
            return;
          }
          return (
            O ||
              ((O = new Map()),
              (0, U.Fd)("uservotes", "application_config")?.forEach((V) => {
                V.clanAnnouncementGID &&
                  O.set(
                    V.clanAnnouncementGID,
                    V.voted_up ? "up" : V.voted_down ? "down" : null,
                  );
              })),
            p ? O.get(p) : void 0
          );
        }
      },
      98144: (ge, de, r) => {
        "use strict";
        r.r(de),
          r.d(de, {
            EventDisplaySteamAwardNomination: () => Ie,
            UserEligibleToNominateOrVote: () => he,
            WinterSaleSteamAwardVoteWrapper: () => Q,
            default: () => ue,
          });
        var n = r(7850),
          x = r(72604),
          a = r(99412),
          s = r(76945),
          t = r(64868),
          v = r(72609),
          L = r(89926),
          k = r(39905),
          F = r(40358),
          N = r(21721),
          T = r(1880),
          _ = r(69168),
          U = r(12247),
          O = r.n(U),
          S = r(95695),
          h = r.n(S),
          D = r(85599),
          g = r(36707);
        function o(K) {
          return `${v.TS.MEDIA_CDN_URL}${s.bs}${K}`;
        }
        function p(K) {
          const {
              strMainTitle: me,
              subtitle: ae,
              headerText: Ee,
              headerContent: Se,
              children: te,
              footer: oe,
            } = K,
            xe = {
              backgroundColor: s.TY,
              backgroundImage: `url( ${o("header_notrophy.webp")} )`,
              color: s.m1,
            };
          return (0, n.jsxs)("div", {
            style: xe,
            className: (0, g.A)(O().SteamAwardContainer, h().PartnerEventFont),
            children: [
              (0, n.jsxs)("div", {
                className: O().SteamAwardHeader,
                children: [
                  (0, n.jsx)("img", {
                    className: O().SteamAwardHeaderImage,
                    src: o("trophy_220.png?v=1"),
                    alt: "",
                  }),
                  (0, n.jsxs)("div", {
                    className: O().SteamAwardMainCtn,
                    children: [
                      (0, n.jsx)("div", {
                        className: O().SteamAwardMainTitle,
                        children: me,
                      }),
                      ae,
                      (0, n.jsx)("div", {
                        className: O().SteamAwardHeaderText,
                        children: Ee,
                      }),
                      Se,
                    ],
                  }),
                ],
              }),
              te,
              !!oe &&
                (0, n.jsx)("div", {
                  className: O().SteamAwardLinkToNominationPage,
                  children: oe,
                }),
            ],
          });
        }
        function b(K) {
          return `${v.TS.STORE_BASE_URL}steamawards/${K ? "nominations/" : ""}`;
        }
        function V() {
          return (0, n.jsx)(D.t, {
            className: O().SteamAwardContainer,
            size: "medium",
            position: "center",
            string: k.Z.Localize("#Loading"),
          });
        }
        function ne(K) {
          const { elDialogElement: me, fnShowLogonDialog: ae } = (0, L.l)(),
            [Ee, Se, te] = (0, t.uD)();
          return {
            elDialogElement: (0, n.jsxs)(n.Fragment, {
              children: [
                me,
                (0, n.jsx)(_.E, {
                  active: Ee,
                  children: (0, n.jsx)(se, { bVote: K, closeModal: te }),
                }),
              ],
            }),
            BCanTakeAction: () =>
              v.iA.logged_in ? (v.iA.is_limited ? (Se(), !1) : !0) : (ae(), !1),
          };
        }
        function se(K) {
          const { bVote: me, closeModal: ae } = K;
          return (0, n.jsx)(T.o0, {
            strTitle: k.Z.Localize("#Informational_Message"),
            onCancel: ae,
            onOK: ae,
            bAlertDialog: !0,
            children: (0, n.jsx)("div", {
              children: k.Z.LocalizeReact(
                me
                  ? "#SteamAward_Vote_LimitedAccount"
                  : "#SteamAward_Nominate_LimitedAccount",
                (0, n.jsx)("a", {
                  href: `${v.TS.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
                  target: v.TS.IN_CLIENT ? void 0 : "_blank",
                  rel: "noreferrer",
                  children: k.Z.Localize("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        }
        function J(K) {
          const {
              strLocTokenInfix: me,
              unCurrentAppID: ae,
              unNewAppID: Ee,
              fnOnConfirm: Se,
              closeModal: te,
            } = K,
            { data: oe } = (0, F.J$)({ appid: ae }),
            { data: xe } = (0, F.J$)({ appid: Ee }),
            { data: je } = (0, F.lv)({ appid: ae }),
            { data: Te } = (0, F.lv)({ appid: Ee }),
            Ge = je ? (0, N.b0)(je, "small_capsule") : void 0,
            ke = Te ? (0, N.b0)(Te, "small_capsule") : void 0;
          return (0, n.jsx)(T.o0, {
            modalClassName: O().SteamAwardConflictModal,
            strTitle: k.Z.Localize(
              me == "Vote"
                ? "#SteamAward_VoteConflictWarning_Title"
                : "#SteamAward_NominationConflictWarning_Title",
            ),
            closeModal: te,
            onOK: Se,
            onCancel: te,
            children: (0, n.jsxs)("div", {
              className: O().ConflictBody,
              children: [
                k.Z.LocalizeReact(
                  me == "Vote"
                    ? "#SteamAward_VoteConflictWarning_Explanation"
                    : "#SteamAward_NominationConflictWarning_Explanation",
                  (0, n.jsx)("span", {
                    className: O().SteamAwardModalGameTitle,
                    children: oe?.name,
                  }),
                  (0, n.jsx)("span", {
                    className: O().SteamAwardModalGameTitle,
                    children: xe?.name,
                  }),
                ),
                Ge && ke
                  ? (0, n.jsxs)("div", {
                      className: O().NominationSwitchCtn,
                      children: [
                        (0, n.jsx)("img", { src: Ge, alt: "" }),
                        "\u2192",
                        (0, n.jsx)("img", { src: ke, alt: "" }),
                      ],
                    })
                  : (0, n.jsx)(D.t, {
                      size: "small",
                      position: "center",
                      string: k.Z.Localize("#Loading"),
                    }),
              ],
            }),
          });
        }
        var H = r(16412),
          c = r(53113);
        function m(K) {
          const {
              unAppID: me,
              widget: ae,
              actions: Ee,
              bNominationsOpen: Se,
            } = K,
            te = ae.rgCategories[0],
            { data: oe } = (0, F.J$)({ appid: me }),
            {
              unNominatedAppID: xe,
              bAnswered: je,
              Nominate: Te,
            } = (0, s.Xx)(te.eCategoryID, Ee),
            { elDialogElement: Ge, BCanTakeAction: ke } = ne(!1),
            [ze, Fe, B] = (0, t.uD)();
          if (!ae.bNominationsLive) return null;
          if (!je) return (0, n.jsx)(V, {});
          const ee = (0, c.NT)(b(!0)),
            ye = xe == me,
            Me = ae.rgCategories.length == 1,
            Je = Se && !te.bLaborOfLove,
            $e = (P) => {
              if (!(!P || !ke())) {
                if (xe && xe != me) {
                  Fe();
                  return;
                }
                Te(me);
              }
            };
          return (0, n.jsxs)(p, {
            strMainTitle: k.Z.Localize("#SteamAwards_EventMainTitle"),
            subtitle: (0, n.jsxs)("div", {
              className: O().SteamAwardSubTitle,
              children: [
                Se
                  ? k.Z.Localize("#SteamAwards_EventCallToAction")
                  : k.Z.Localize(
                      "#SteamAwards_EventVotingDateTeaser",
                      (0, s.xh)(),
                    ),
                Se &&
                  (0, n.jsxs)("a", {
                    href: ee,
                    className: O().SteamAwardLearnMore,
                    children: [
                      "(",
                      k.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ],
                  }),
              ],
            }),
            headerText: Se
              ? Me
                ? k.Z.Localize(
                    "#SteamAwards_EventNominateGamePrompt_Long",
                    oe?.name ?? "",
                  )
                : (0, n.jsx)("a", {
                    className: O().LinkText,
                    href: ee,
                    children: k.Z.Localize(
                      "#SteamAwards_EventNominateGamePrompt_NoCategory",
                      oe?.name ?? "",
                    ),
                  })
              : k.Z.Localize("#SteamAwards_Event_NominationsClosed"),
            footer:
              Je &&
              (0, n.jsx)("a", {
                href: ee,
                children: k.Z.Localize(
                  "#SteamAwards_EventNominationAlternativeLinkText",
                ),
              }),
            children: [
              !!(Me && (Se || ye)) &&
                (0, n.jsx)("div", {
                  className: (0, g.A)(
                    O().SteamAwardNominationWidget,
                    O().SteamAwardVoteWidget,
                  ),
                  children: (0, n.jsxs)("div", {
                    className: O().NominateCtn,
                    children: [
                      (0, n.jsx)("div", {
                        style: { background: s.Hu },
                        className: (0, g.A)(
                          O().SteamAwardNominateButton,
                          ye && O().Nominated,
                        ),
                        children: (0, n.jsx)(H.Yh, {
                          controlled: !0,
                          className: (0, g.A)(
                            O().SteamAwardVoteCheckBox,
                            ye && O().Nominated,
                          ),
                          checked: ye,
                          onChange: $e,
                          disabled: ye,
                          color: "#FFFFFF",
                          highlightColor: "white",
                          label: (0, n.jsx)("div", {
                            className: O().SteamAwardCategoryTitle,
                            children: k.Z.Localize(
                              ye
                                ? "#SteamAwards_NominateWidget_CTA_PastTense"
                                : "#SteamAwards_NominateWidget_CTA",
                              te.strTitle,
                            ),
                          }),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: O().SteamAwardCategoryDesc,
                        children: te.strDescription,
                      }),
                    ],
                  }),
                }),
              Ge,
              (0, n.jsx)(_.E, {
                active: ze,
                children: (0, n.jsx)(J, {
                  strLocTokenInfix: "Nomination",
                  unCurrentAppID: xe,
                  unNewAppID: me,
                  fnOnConfirm: () => Te(me),
                  closeModal: B,
                }),
              }),
            ],
          });
        }
        function f(K) {
          const {
              unAppID: me,
              widget: ae,
              actions: Ee,
              bVotesOpen: Se,
              bHideCategoryDescriptions: te,
            } = K,
            { data: oe } = (0, F.J$)({ appid: me }),
            xe = (0, c.NT)(b(!1));
          return (0, n.jsx)(p, {
            strMainTitle: k.Z.Localize("#SteamAwards_EventMainTitleCombined"),
            headerText: Se
              ? k.Z.Localize(
                  "#SteamAwards_EventVoteForGamePrompt",
                  oe?.name ?? "",
                )
              : (0, n.jsx)("a", {
                  href: xe,
                  className: O().LinkText,
                  children: k.Z.Localize("#SteamAwards_Event_VotesClosed"),
                }),
            headerContent: (0, n.jsx)("div", {
              className: O().AwardCategoriesCtn,
              children: ae.rgCategories.map((je) =>
                (0, n.jsx)(
                  E,
                  {
                    unAppID: me,
                    category: je,
                    actions: Ee,
                    bVotesOpen: Se,
                    bHideDescription: te,
                  },
                  je.eCategoryID,
                ),
              ),
            }),
            footer: (0, n.jsx)("a", {
              href: xe,
              children: k.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
            }),
          });
        }
        function E(K) {
          const {
              unAppID: me,
              category: ae,
              actions: Ee,
              bVotesOpen: Se,
              bHideDescription: te,
            } = K,
            {
              unVotedAppID: oe,
              bAnswered: xe,
              Vote: je,
            } = (0, s.VV)(ae.eCategoryID, Ee),
            { elDialogElement: Te, BCanTakeAction: Ge } = ne(!0),
            [ke, ze, Fe] = (0, t.uD)(),
            B = oe == me;
          if (!Se && !B) return null;
          const ee = () => {
            if (!(!xe || !Ge())) {
              if (oe && oe != me) {
                ze();
                return;
              }
              je(me);
            }
          };
          return (0, n.jsxs)("div", {
            style: { backgroundColor: s.Hu },
            className: O().SteamAwardVoteWidget,
            children: [
              (0, n.jsxs)("div", {
                className: O().SteamAwardVoteButtonArea,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, g.A)(
                      O().SteamAwardCategoryTitle,
                      O().VotingTitle,
                    ),
                    children: ae.strTitle,
                  }),
                  !te &&
                    (0, n.jsx)("div", {
                      className: O().SteamAwardCategoryDesc,
                      children: ae.strDescription,
                    }),
                  B
                    ? (0, n.jsx)("button", {
                        className: O().SteamAwardVoteButtonSubmitted,
                        children: (0, n.jsx)("span", {
                          className: O().SteamAwardVoteButtonText,
                          children: k.Z.Localize(
                            "#SteamAward_VoteButton_VotedText",
                          ),
                        }),
                      })
                    : (0, n.jsx)("button", {
                        className: O().SteamAwardVoteButton,
                        onClick: ee,
                        children: (0, n.jsx)("span", {
                          className: O().SteamAwardVoteButtonText,
                          children: k.Z.Localize(
                            "#SteamAward_VoteButton_PromptText",
                          ),
                        }),
                      }),
                ],
              }),
              Te,
              (0, n.jsx)(_.E, {
                active: ke,
                children: (0, n.jsx)(J, {
                  strLocTokenInfix: "Vote",
                  unCurrentAppID: oe,
                  unNewAppID: me,
                  fnOnConfirm: () => je(me),
                  closeModal: Fe,
                }),
              }),
            ],
          });
        }
        var $ = r(68312),
          z = r(34041),
          w = r(65946),
          I = r(90626),
          q = r(76035),
          G = r(28515),
          C = r(18210),
          pe = r(3166),
          M = r(96538),
          fe = r(88003),
          W = r(85385),
          re = r(47875);
        function he(K) {
          return pe.iA.logged_in
            ? pe.iA.is_limited
              ? ((0, fe.pg)(
                  (0, n.jsx)(W.g, {
                    strTokenOverride: K
                      ? "#SteamAward_Vote_LimitedAccount"
                      : "#SteamAward_Nominate_LimitedAccount",
                  }),
                  window,
                ),
                !1)
              : !0
            : ((0, fe.pg)(
                (0, n.jsx)(M.o0, {
                  strTitle: (0, C.we)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: (0, C.we)(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: (0, C.we)("#MobileLogin_SignIn"),
                  onOK: re.l,
                }),
                window,
              ),
              !1);
        }
        function be(K) {
          const me = (0, $.KV)();
          return (0, I.useMemo)(
            () => ({
              GetMySteamAwardNominations: () => (0, q.kr)(me),
              NominateForSteamAward: async (ae, Ee) => {
                if (K) return x.R;
                const [Se] = await (0, q.N2)(me, ae, Ee, z.Ji.mP);
                return Se;
              },
              GetMySteamAwardVotes: () => (0, q.QS)(me, s.sK),
              SetSteamAwardVote: async (ae, Ee) => {
                if (K) return x.R;
                const [Se] = await (0, q.rv)(me, ae, Ee, s.sK);
                return Se;
              },
            }),
            [me, K],
          );
        }
        const Le = [];
        function Ne(K, me, ae) {
          const Ee = K.some(s.aS) || me.some(s.aS),
            Se = (0, q.Jo)(Ee ? s.sK : void 0);
          return Ee
            ? Se.data
              ? {
                  widgets: (0, s.$G)(Se.data.votes ?? [], K, me, ae),
                  bLoading: !1,
                }
              : { bLoading: Se.isPending }
            : { bLoading: !1 };
        }
        function Re(K, me) {
          return me ? { ...K, bNominationsLive: !0 } : K;
        }
        function Pe(K) {
          return !!K && pe.TS.EUNIVERSE == a.wLO;
        }
        function Ie(K) {
          const { event: me, previewMode: ae } = K,
            [Ee, Se] = (0, w.q3)(() => [me.GetSteamAwardCategory(), me.appid]),
            te = (0, G.n)(),
            { widgets: oe, bLoading: xe } = Ne([Ee], Le, te),
            je = be(Pe(ae));
          if (xe) return (0, n.jsx)(V, {});
          if (!oe?.nomination) return null;
          const Te =
            me.BIsEventActionEnabled(te) ||
            te < me.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsx)(m, {
            unAppID: Se,
            actions: je,
            widget: Re(oe.nomination, !!ae),
            bNominationsOpen: Te,
          });
        }
        function Q(K) {
          const {
              appID: me,
              voteCategories: ae,
              bIsEventActionEnabled: Ee,
              previewMode: Se,
              bRenderFromStorePage: te,
            } = K,
            oe = (0, G.n)(),
            { widgets: xe, bLoading: je } = Ne(Le, ae ?? Le, oe),
            Te = be(Pe(Se));
          return je
            ? (0, n.jsx)(V, {})
            : xe?.vote
              ? (0, n.jsx)(f, {
                  unAppID: me,
                  widget: xe.vote,
                  actions: Te,
                  bVotesOpen: Ee || !!Se,
                  bHideCategoryDescriptions: te,
                })
              : null;
        }
        function ue(K) {
          const me = (0, pe.Tc)(
            "steamwawards",
            "application_config",
          )?.votecategories;
          return me
            ? (0, n.jsx)(Q, {
                appID: K.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: me,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${K.appID}`,
              ),
              null);
        }
      },
      79590: (ge, de, r) => {
        "use strict";
        r.d(de, { m: () => O });
        var n = r(7850),
          x = r(99412),
          a = r(90626),
          s = r(48421),
          t = r(36707),
          v = r(18210),
          L = r(53113),
          k = r(72609),
          F = r(20193),
          N = r(29630),
          T = r(60480);
        function _(S) {
          const { gidEvent: h } = S,
            D = usePartnerEventByEventGID(h);
          return D
            ? jsx(U, {
                event: D,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(D) ?? ""),
              })
            : null;
        }
        function U(S) {
          const { event: h, lang: D, href: g } = S,
            [o, p] = (0, a.useMemo)(() => {
              const b = h.jsondata.localized_sale_product_banner,
                V = h.jsondata.localized_sale_product_mobile_banner;
              if (b?.length && V?.length) {
                const ne = v.NT.GetWithFallback(b, D),
                  se = v.NT.GetWithFallback(V, D);
                if (ne?.length && se?.length)
                  return [
                    N.zU.GenerateURLFromHashAndExt(h.clanSteamID, ne),
                    N.zU.GenerateURLFromHashAndExt(h.clanSteamID, se),
                  ];
              }
              return [void 0, void 0];
            }, [h, D]);
          return !o?.length || !p?.length
            ? null
            : (0, n.jsxs)("a", {
                href: g,
                className: F.Link,
                children: [
                  (0, n.jsx)("img", {
                    src: o,
                    className: (0, t.A)(F.Banner, F.Big),
                  }),
                  (0, n.jsx)("img", {
                    src: p,
                    className: (0, t.A)(F.Banner, F.Mobile),
                  }),
                ],
              });
        }
        function O(S) {
          const { gidEvent: h } = S,
            D = (0, s.RR)(h);
          return D
            ? (0, n.jsx)(U, {
                event: D,
                lang: (0, x.sfN)(k.TS.LANGUAGE),
                href: (0, L.k2)((0, T.n4)(D) ?? ""),
              })
            : null;
        }
      },
      18057: (ge, de, r) => {
        "use strict";
        r.d(de, {
          K4: () => o,
          gS: () => p,
          pg: () => S,
          u1: () => V,
          v9: () => b,
          yi: () => h,
        });
        var n = r(7850),
          x = r(90626),
          a = r(71421),
          s = r(18210),
          t = r(75844),
          v = r(36707),
          L = r(36174),
          k = r(55351),
          F = r.n(k),
          N = r(7582),
          T = r(28515),
          _ = r(54357),
          U = r(87937),
          O = r.n(U);
        function S(J, H) {
          const m = H ?? O().tz.guess(),
            f = O().unix(J).tz(m),
            E = (0, s.l4)();
          return E && f.locale(E), f.format("LT");
        }
        function h(J, H, c) {
          const f = c ?? O().tz.guess(),
            E = O().unix(J).tz(f),
            $ = (0, s.l4)();
          return (
            $ && E.locale($),
            (0, n.jsxs)(x.Fragment, {
              children: [
                E.format("LT"),
                H
                  ? (0, n.jsx)(a.Gq, {
                      toolTipContent: E.format("Z") + ", " + f,
                      children: (0, n.jsxs)("span", {
                        children: ["\xA0", E.zoneAbbr()],
                      }),
                    })
                  : null,
              ],
            })
          );
        }
        function D(J, H, c) {
          return (0, s.TW)(J, {
            weekday: "short",
            year: c ? void 0 : "numeric",
            timeZone: H,
          });
        }
        function g(J, H, c, m) {
          return O().unix(J).tz(c).isSame(O().unix(H).tz(c), m);
        }
        const o = (0, t.PA)((J) => {
            const {
                dateAndTime: H,
                bSingleLine: c,
                bOnlyTime: m,
                bOnlyDate: f,
              } = J,
              E = (0, _.B)(),
              $ = !m && !!H,
              z = !f && !!H,
              w = $ && D(H, E),
              I = J.stylesmodule ? { ...F(), ...J.stylesmodule } : F();
            return c
              ? (0, n.jsxs)("span", {
                  className: m || f ? I.DateAndTimeInline : I.DateAndTime,
                  children: [
                    $ && w,
                    $ && z ? (0, n.jsx)("span", { children: "\xA0" }) : void 0,
                    !!(H && z) && h(H, z, E),
                  ],
                })
              : (0, n.jsxs)("div", {
                  className: I.DateAndTime,
                  children: [
                    $ &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: I.LocalizedDate,
                            children: w,
                          }),
                          " ",
                          (0, n.jsx)("span", {
                            className: I.At,
                            children: (0, s.we)(
                              "#EventDisplay_DateAndTimeCombiner",
                            ),
                          }),
                        ],
                      }),
                    (0, n.jsx)("div", {
                      className: I.LocalizedTime,
                      children: !!(H && z) && h(H, z, E),
                    }),
                  ],
                });
          }),
          p = (J) => {
            const H = (0, n.jsx)("div", {
              className: J.stylesmodule?.DateToolTip,
              children: (0, n.jsx)(o, {
                dateAndTime: J.rtFullDate,
                bSingleLine: !0,
                stylesmodule: J.stylesmodule,
              }),
            });
            return (0, n.jsx)(a.m9, {
              toolTipContent: H,
              direction: "top",
              className: J.className,
              bTopmost: !0,
              children: J.children,
            });
          },
          b = (0, t.PA)((J) => {
            const { startDateAndTime: H, endDateAndTime: c = 0 } = J,
              m = J.stylesmodule ? { ...F(), ...J.stylesmodule } : F(),
              f = (0, _.B)(),
              E = (0, T.n)(),
              $ =
                J.bHideEndTime ||
                J.endDateAndTime == null ||
                J.endDateAndTime < 1;
            if (H == null || H == 0)
              return (0, n.jsxs)("div", {
                className: m.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: m.RightSideTitles,
                    children: (0, s.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, s.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            if ($)
              return (0, n.jsxs)("div", {
                className: m.StartDate,
                children: [
                  (0, n.jsxs)("div", {
                    className: m.RightSideTitles,
                    children: [
                      (0, s.we)(
                        H < E
                          ? "#EventDisplay_TimeInPast"
                          : "#EventDisplay_TimeUpcoming",
                      ),
                      "\xA0",
                    ],
                  }),
                  (0, n.jsx)(o, { stylesmodule: m, dateAndTime: H }),
                ],
              });
            const z = H <= E && E <= c,
              w = g(H, c, f, "day");
            return (0, n.jsxs)("div", {
              className: m.MultiDateAndTime,
              children: [
                (0, n.jsxs)("div", {
                  className: m.StartDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: m.RightSideTitles,
                      children: (0, s.we)(
                        H >= E
                          ? "#EventDisplay_TimeBeginsOn"
                          : c >= E
                            ? "#EventDisplay_TimeBeginsOn_Past"
                            : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past",
                      ),
                    }),
                    (0, n.jsx)(o, {
                      stylesmodule: m,
                      bSingleLine: !0,
                      dateAndTime: H,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: m.EndDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: m.RightSideTitles,
                      children: (0, s.we)(
                        c < E
                          ? "#EventDisplay_TimeEndsOn_Past"
                          : "#EventDisplay_TimeEndsOn",
                      ),
                    }),
                    (0, n.jsx)(o, {
                      stylesmodule: m,
                      bSingleLine: !0,
                      bOnlyTime: w,
                      dateAndTime: c,
                    }),
                  ],
                }),
                z &&
                  (0, n.jsx)("span", {
                    className: m.ActiveEvent,
                    children: (0, n.jsx)("span", {
                      className: (0, v.A)(
                        m.RightSideTitles,
                        m.ActiveEventCallOut,
                      ),
                      children: (0, s.we)("#Time_Now"),
                    }),
                  }),
              ],
            });
          }),
          V = (0, t.PA)((J) => {
            const {
                startDateAndTime: H,
                endDateAndTime: c,
                bHideEndTime: m,
              } = J,
              f = J.stylesmodule ? { ...F(), ...J.stylesmodule } : F(),
              E = (0, _.B)(),
              $ = (0, T.n)();
            if (H == null || H == 0)
              return (0, n.jsxs)("div", {
                className: f.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: f.RightSideTitles,
                    children: (0, s.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, s.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            const z = g(H, $, E, "year"),
              w = (0, n.jsx)("div", {
                className: f.ShortDateAndTime,
                children: D(H, E, z),
              });
            let I = (0, n.jsxs)(p, {
              rtFullDate: H,
              stylesmodule: f,
              children: [
                (0, n.jsx)("div", {
                  className: f.RightSideTitles,
                  children: (0, s.we)(
                    H < $
                      ? "#EventDisplay_TimeInPast"
                      : "#EventDisplay_TimeUpcoming",
                  ),
                }),
                w,
              ],
            });
            if (
              ($ < H &&
                H < $ + L.Kp.PerWeek &&
                (I = (0, n.jsx)(p, {
                  rtFullDate: H,
                  stylesmodule: f,
                  children: (0, n.jsx)("div", {
                    className: f.RightSideTitles,
                    children: (0, s.PP)(
                      "#EventDisplay_EventUpcoming_WithDateAndTime",
                      w,
                      (0, n.jsxs)("div", {
                        className: f.ShortDateAndTime,
                        children: [h(H, !1, E), " "],
                      }),
                    ),
                  }),
                })),
              m || c == null || c < 1)
            )
              return I;
            const q = H <= $ && $ <= c;
            q &&
              (I = (0, n.jsx)(p, {
                rtFullDate: H,
                className: f.ActiveEvent,
                stylesmodule: f,
                children: (0, n.jsx)("span", {
                  className: f.ActiveEventCallOut,
                  children: (0, s.we)("#Time_Now"),
                }),
              }));
            let G = null;
            const C = q ? c - $ : c - H;
            if (C <= L.Kp.PerDay) {
              const M = (0, n.jsx)("div", {
                className: f.ShortDateAndTime,
                children: (0, s.Hq)(C, !0),
              });
              c < $
                ? (G = (0, n.jsxs)("div", {
                    className: f.RightSideTitles,
                    children: [(0, s.we)("#EventDisplay_TimeEndsOn_Ran"), M],
                  }))
                : (G = (0, n.jsx)("div", {
                    className: f.RightSideTitles,
                    children: (0, s.PP)(
                      q
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      M,
                    ),
                  }));
            } else {
              const M = g(c, $, E, "year");
              G = (0, n.jsxs)(x.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: f.RightSideTitles,
                    children: (0, s.we)(
                      c < $
                        ? "#EventDisplay_TimeEndsOn_Past"
                        : "#EventDisplay_TimeEndsOn",
                    ),
                  }),
                  (0, n.jsx)("div", {
                    className: f.ShortDateAndTime,
                    children: D(c, E, M),
                  }),
                ],
              });
            }
            const pe = (0, n.jsx)(p, {
              rtFullDate: c,
              stylesmodule: f,
              children: G,
            });
            return (0, n.jsxs)("div", {
              className: f.ShortDateRange,
              children: [I, pe],
            });
          });
        function ne(J, H, c) {
          const m = g_EventCalendarDevFeatures.GetTimeNowWithOverrideAsDate(),
            f = new Date(J * 1e3),
            E = new Date(H * 1e3),
            $ = m.getFullYear() == f.getFullYear(),
            z = m.getFullYear() == E.getFullYear(),
            w = f.getFullYear() == E.getFullYear(),
            I = w && f.getMonth() == E.getMonth(),
            q = I && f.getDate() == E.getDate(),
            G = {
              day: "numeric",
              month: c ?? "long",
              year: $ ? void 0 : "numeric",
            },
            C = f.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              G,
            );
          if (q) return C;
          {
            const pe = {
                day: "numeric",
                month: I && z ? void 0 : (c ?? "long"),
                year: w ? void 0 : "numeric",
              },
              M = E.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                pe,
              );
            return C + " - " + M;
          }
        }
        function se(J) {
          const {
            rtStartDate: H,
            rtEndDate: c,
            strMonthFormat: m,
            className: f,
          } = J;
          return jsxs("div", { className: f, children: [ne(H, c, m), " "] });
        }
      },
      32651: (ge) => {
        ge.exports = {
          sketchfab_play_overlay_image: "_2WGPdoLu3Mok312NPs4DC_",
          sketchfabmodelembedded: "_14FKhrcp5aEfuZXW03a6au",
          dynamiclink_box: "la-zlY3wcco-_OyUTXmWM",
          dynamiclink_preview: "B_zezwCTpciygxrjvmXNV",
          dynamiclink_content: "ZTL8kcUkjRh3Jhqb-3UG5",
          dynamiclink_name: "FZ02D3gsewSiEX4HnmBN-",
          dynamiclink_type: "_2vy-XuvOjtS-m9dMXarnp_",
          dynamiclink_author: "_11n3JjqH-AfIdduU-GuPbA",
        };
      },
      89767: (ge) => {
        ge.exports = {
          Pill: "_1LHHH9LxL4_OV0jcL9EZ7I",
          Button: "_3ECnEY2jSbeonbMSe3SQif",
        };
      },
      37501: (ge) => {
        ge.exports = { ImageBlocked: "_21Qmyw5l-_fHfVvaYXgIrm" };
      },
      33998: (ge) => {
        ge.exports = { Ctn: "_1BsM1CkjnMDPzj027r1TEC" };
      },
      93507: (ge) => {
        ge.exports = {
          Ctn: "_3NIqIo6tGlpqtfGjHpyLie",
          VisibilityOverride: "_3pcYsTE5HL27MtO86WYmme",
          CtnRegistered: "_1VB65QYhIgMFp2q1ZP6J7m",
          SessionTitle: "_1OTRg9MwZ-gXnTlzsAk3eo",
          SessionDesc: "p3KQHdRiob_3hxCpLh0uq",
          SessionAudience: "_2uhzVmwMkXjVFDHkkGZHH2",
          SessionInfoLink: "_3p8YtOkGirN939Ea_jXZxt",
          SessionOptions: "_2wVsMqm6JJCnwCY17iSy8e",
          InstanceDivider: "gl2vdc67LNUjjtiXqPFH7",
          SessionColumnCtn: "_2f1ChYzzL2olk2rc26ryZd",
          SessionInstance: "_2Ds0oFNiqwjLbUIXS3vtza",
          Background: "_7eGMMwFRbr4j5BfzKni4",
          Button: "_3GG-T1DiWDj3SFj3OxHvqk",
          Title: "FASRtKtyZqBG0qYF-Z9jC",
          TimeFrame: "_1Bghmlop5OeD8yo0vgWZfi",
          MaxSize: "K4pWcOihhDvMT-fDws-VV",
          SoldOut: "rgGd8Am1rg1mz_kxvEGH6",
          Max: "_1yjWYrgU1bUzf5NayfQasE",
          Day: "_1nveS3mgrR2b1IS8eMMbyB",
          Time: "_2yvFwPbCS-ANZl7acURIx_",
          Registering: "_83qj5S18JG9HmEKI9Wmc7",
          Registered: "_2qabIqTzYkEcr3iJYDlZzc",
          RegisteredElsewhere: "_3aHc8KtKOQ-SwqTYJIuDb8",
          Unregistering: "_275cqznDlVXIWbEw8_PnF3",
          StatusText: "_2GDjx_pi9_pnifIUoqsaGc",
          CompleteRegistrationCtn: "_1GysEsKJ5GLzadr9CREzKu",
          Visible: "NxuVWv-dDPNw29fHP7030",
          "confirm-panel-intro": "_3Fo1c-SNWhknOr2k_l8u3g",
          ExpanderRow: "_7dh50vSyIAlY2RiPYghM_",
          FAQDisplay: "_2b79ASKFdOZ6byYhNUAt_f",
          SingleDayCtn: "_35p36HiLyvDBzAUK1o3rJu",
          ScheduleTopDate: "_1zgdCPTGowHjI64yMQ0SIX",
          ScheduleRow: "_3qt63DpwOZeaHX-5Ma_gTC",
          ScheduleTimeColumn: "_1nL-IL0bfiLvA7Xt_OXHH6",
          Timezone: "_11w6YvEmWuRgFvbXV-ewap",
          ScheduleSessionsColumn: "_1EgCyIh4WiJJ6qFQPgDCU4",
          ScheduleActionRow: "_2bw3ivGwUkjG31I4_kwk7r",
        };
      },
      6365: (ge) => {
        ge.exports = {
          PollBackground: "_2r_t3AhqjpzUxObM0vLPwL",
          PollContainer: "_3hHnAsj2GNM_j1UZvYD5mi",
          PollQuestion: "_3jEARWe0zZetd6h8KP6kCo",
          PollOptions: "_1M3TJW3OFn6kL8Y2NegE1Q",
          PollOption: "_1qcuI6mCt5_qtvFIRZYFUl",
          Selected: "_1tGKmiNT8kR1M3BFlWcG1j",
          PollVoteIcon: "_1dpuVtT-fBprfWUYwIYVf9",
          Disabled: "FNR2rMnaJDHSxS8QcOw3Z",
          ContentRow: "_2y19ohgg-3iLZIuV1Pt627",
          BackgroundBar: "_2R8BCMr1cgNzCrRd3tkNNb",
          ForegroundBar: "OSxkpWT-ORYpJSdW2JZMm",
          PctText: "MU9BomtVv8bCuqosNmbo",
          OptionText: "_2MjpgTcoK-yty8ZkBXirNL",
          PollStatus: "tpwoVtxSkk230qksahSCn",
        };
      },
      1491: (ge) => {
        ge.exports = { BroadcastCtn: "b2Fu47WqOo1P0imbAoSy1" };
      },
      38182: (ge) => {
        ge.exports = {
          narrowWidth: "500px",
          EventDetailTimeInfo: "xBUZ1jJ4rafFpeTqBLFXy",
          StartDate: "_3fnIGWmHQRS3H57PR7Qm0V",
          EndDate: "_27ujtr5AsAF4_qa1HEifF4",
          MultiDateAndTime: "_130Qkcrkkg7Ygi1ksNJVM",
          RightSideTitles: "_34vtF4hGMg7lb2WZUbe8ie",
          DateAndTime: "zLuUcDh0YJONQX3MssuAu",
          VerticalLocalDateAndTime: "MT8Ri2dV3bsGLkpXTvoVG",
        };
      },
      20881: (ge) => {
        ge.exports = { AppSummaryWidgetCtn: "s-ezVsX8n5lz8y_Nljmv2" };
      },
      20193: (ge) => {
        ge.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      98462: (ge) => {
        ge.exports = { ReferencedApps: "_1aDVPEAcrxRDEyIXlfcBMG" };
      },
      42937: (ge) => {
        ge.exports = {
          FlexColumnContainer: "rh8dmsOr2EWCLPlwnCFIJ",
          FullStartTime: "_2hYSOJf-lN9ud36C3VZ8e9",
          ReminderDialog: "_1wuYdqboukc5kNT3-44sfX",
          ReminderOptions: "_2QnQmTwVmvRwL6o4ysTPBQ",
          ReminderBackground: "_13UwIiuzRz_qEbDAVBW-t-",
          ReminderExpandsLeft: "_1-ZywREdsd3bg4EdYP0XeG",
          ReminderOption: "_1x4NpiMrsiBt6sYz1zzHIc",
          Unverified: "X5LUdUZjlvYo4k6czlifb",
          CheckboxWrapper: "xpjXUWiD1HYf5bLjnpEMH",
          ReminderCheckBox: "kPLmwYMHgDUHl1qO252N2",
          IconMode: "_12XV43l_Qpg43IzyNzxR2O",
          RemindBell: "_2HlM-E-WiSOionA9tu8HB1",
          RemindCheck: "_2JziNs1TXz_ViAio_L0hFY",
          ReminderDefault: "_3NwTBeStn8IpEP8Zg2jIF6",
          TextMode: "_1zPOQ2nBel9G46FV8P-KA-",
          ReminderCheck: "_1eDuCf0wTgvblQ_etRjP06",
          ReminderOpennedOptions: "zwAlLjqNWaKW-8d69n0KK",
          ReminderOptionsHeader: "-EdAjT_iIqwrdjsZlHLXt",
          ReminderCalendarOptions: "_2fcTGlG_bOzJAhswx6vIIz",
          ReminderSettings: "_3Pr4BoHW3n0OD8XPdtzVAW",
          ReminderNotes: "_2mOFOyTA2w0vN-SOWZNXwi",
          RpcThrobber: "_2Aby7dwRv-eMDWo3OwH59",
        };
      },
      19890: (ge) => {
        ge.exports = {
          AppSocialLinksCtn: "JlFZxFyO0IOSiYmJt-NlE",
          AppSocialLinks: "_1SBP3NCWhesT_T7Zncoe_x",
          AppSocialLinkIcon: "_2p4QK5FnPikdfXUGvhz-rj",
          AppSocialLinkWithText: "_1pCGa1Dqa9xwEjXFCTbeaB",
          AppSocialText: "V88BDse5RqlvrzYpxlgFS",
        };
      },
      74187: (ge) => {
        ge.exports = {
          CheckMark: "_3QpozFqH35lAw0VLMCSzjT",
          DialogCtn: "_1Bzbk55gxuoPniZQJkoTjn",
          EquipCtn: "_2_ZLb7Wk-U4cDrBvFBE7b5",
        };
      },
      48963: (ge) => {
        ge.exports = {
          "duration-app-launch": "800ms",
          strMediumWidth: "800px",
          strMaxMobileWidth: "600px",
          MediaContainer: "_17AnAUol6F9ESSlAVOkOR-",
          MediaContainerMM: "_1Tu2CrBa6Z3v2u5ysIVCgY",
          ScreenshotThumbnailRow: "_3wPvOiq2zq3UJa_V5yq1BU",
          HilightGrid: "afMTFv3mQcpX11KsRQBFe",
          MainMediaCtn: "_2aKn0S9zGN4Xj9bwODcL4q",
          VideoThumbnail: "_2GhyyIvyUNXt2pBSQ23xKP",
          ScreenshotDisplayCtn: "_2syrNfuweRm7tMaHtnsLIS",
          MainCapsuleWithHover: "_20P19pxcCCC_Er1aQHk0wG",
          MainCapsule: "_27-W3skVjYBfNp6t1cTtnj",
          AppDetails: "_3YbIHh6FwfB9zQVNU18OSy",
          GameName: "_2aMRa54ScYF_qLXc6-dsRN",
          ShortDesc: "_10C6v9rot6kwBCcXpZVENg",
          ThumbnialClickable: "_1RTH8HUO6crMdjXdJjz_-U",
          ThumbnailCtn: "_2s3nR6hnRPmnLN1kr5khr-",
          ThumbnailButton: "_1WQUuWkffHs6P77xq6DMhs",
          videoPlaying: "_1_yxluHJLi2TiNbG5b2KYk",
          VideoPlayButton: "KqB15I24fyQtJzf6XANUI",
          VideoLargeContainer: "_3n_2JdJT5wZ8s9KG2vtLYz",
          CloseButton: "_2dgOJd4j8-hJA92PrLWqZT",
          VideoPopupContainers: "_1_L84gO810flUzqiuUkG7H",
          VideoLarge: "_3AL75Io6tlvBgexvKuaPG0",
          BackgroundAnimation: "_2YqbTh9tmcEZ5Jnz39bkD9",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Z_byUU724LC7VmBpwzXvB",
          "ItemFocusAnim-darkerGrey": "_79YB3jhA36yeyMiLstJi",
          "ItemFocusAnim-darkGreySettings": "_1lSn5OE1oc5-oQjPkjBIYj",
          "ItemFocusAnim-darkGrey": "CFIUukdHjcI69ga9Z8nTA",
          "ItemFocusAnim-grey": "_3rAbB1f0HQs0x4Hqa5CdEA",
          "ItemFocusAnim-translucent-white-10": "_9gKqKsdvXOoawIPGtFkRF",
          "ItemFocusAnim-translucent-white-20": "_3zG2IKWY48X67SEt1vSIhf",
          "ItemFocusAnimBorder-darkGrey": "_1etJfunIGxvr5ni3LVgo74",
          "ItemFocusAnim-green": "_2y66jXVD5R6zd5LqMTWYVl",
          focusAnimation: "rfbikUhNdMJp8YaaOMaCW",
          hoverAnimation: "_2kGcR5txA30fIqTtD8sBNS",
        };
      },
      89206: (ge) => {
        ge.exports = {
          narrowWidth: "500px",
          ExpandRowButton: "r6FhuuUn6dvEsEckchXo5",
          Selected: "wOEL5nQgChVeJX_0DwcXg",
        };
      },
      39362: (ge) => {
        ge.exports = { Ctn: "_1xGaMOW4aakB5uwqOCT3nI" };
      },
      71714: (ge) => {
        ge.exports = {
          UploadPreviewContainer: "CCBFyy2uP4GNSQGfe2T1L",
          SVGIcon_Video: "_2Fs53eUCdV8xsO83Jc40DH",
          UploadPreview: "_1cXUbzBtV9qFc_63x_j2F2",
          FileUploadFileName: "_21dZgGfG0xtybuVTE6nCv0",
          FileUploadCancel: "rFDt7lDfNBv3BUjppBm9i",
          SVGIcon_X_Line: "_1H7hrp21ukrcZyCAzv9Oc1",
          FileUploadBtn: "_2FFH3ZhSGGItb8Z61CSGfe",
          FileUploadProgressContainer: "_1UobbffXVmx8rwsOHYeNb5",
          FileUploadProgressBarContainer: "tFbvGbecHSHr8P3EdINV-",
          FileUploadProgressName: "_288RbRaiLR6h9q5sWoD2eC",
        };
      },
      17009: (ge) => {
        ge.exports = {
          "duration-app-launch": "800ms",
          AppPartnerEventsPage: "_3CJsgSK-y815Zeoe6bz6dh",
          AppPartnerEventsBanner: "_1HRiMtg_SGUiOa-NXDzZl7",
          AppBannerLinks: "D1bMmHTycpEqG4Sp3VVvH",
          ControlSection: "_2pA5CW91XQQDfo6yZEdPd-",
          NoGameLink: "_2GfPecEDgnR6mwX3ysETT_",
          AppPartnerEventsBody: "_1XLRr8eh1ip-E17C8Jzrmc",
          AppBannerGroup: "qexk-JocS7jjDM31IcGZn",
          NoEvents: "_2xyx9hjeMa2Faf2k3WjG3C",
          AppBannerCtn: "wavRtSPqcvhar0kUHlKoJ",
          AppBannerBackground: "_3RHFoIvdUHn0fp8G8M258k",
          ClanBanner: "_161DWg8AuVjniVd_UE888G",
          TallBanner: "KBixgrFRi1J3OB43f1p8X",
          WideBanner: "_1hl09rgUVOJUMhgC33L7eo",
          AppBannerTitle: "_1iqjH40fN4Diar-d-rLbR5",
          NewsHubSubTitle: "_3tf3bdmBO0Ji0rv8PH-ZXz",
          AppBannerLogoCtn: "_2EV_WNLGjRLNX824mfis9O",
          AppBannerLogo: "dGGTg8iH8Z_d_p6nPFFlM",
          HeaderButtonDark: "_1sDn2dLVB1pIeh5UP4EOVT",
          HeaderFollowButton: "_1tnk5F-ooFjGdvCzXLwtmf",
          HeaderWishlistButton: "_371yXVkVSnacHxz1fMmGpT",
          AppBannerLink: "_3YomsTzhdiLRcSZkF8JtB8",
          AppBannerRSSLink: "_1HeKH4JMsCDXmXP3XD7C6t",
          AppBannerLinkDD: "_1afFDl3n1RB22K4gFglar",
          AppBannerLinkDDButton: "S9cqDrgEIhtUE6pU3-2iQ",
          DDButtonArrow: "_3URBCM-OKlL3sg0hORPS01",
          AppBannerLinkDDContainer: "_2cjCliV2mnVX6dlRRce-fD",
          WishlistBtnShort: "_3WcW8PJCSEWwVA6qJ-RUOF",
          RssRow: "_2pyH3D6qw0sOXhrtoYqCVL",
          AppPartnerEventsContainer: "_3GCEyyVil-cCS-8hoI2Zo1",
          PartnerEvent: "_1KsYSVzmvIfRivBTcx-_GE",
          LibraryViewSubtitle: "_1rbgKYHeRvzrIyqHCzaLIr",
          EventDetailsBody: "_3NW5vEM9HgfQrgR4W-Xy_s",
          NoScrollArrows: "_39hJ8cxSdqeE3ZR01bJLab",
          ControlSectionWidth: "_3yfs7fc5WEv6F9tPG4yq4g",
          ControlSectionRightSide: "_2tSyrRxMCRWK6K09JErgI_",
          GameArt: "_2a5oSdTIcFV3c3ymUNsu6l",
          ScrollButton: "_1t_97P9KMsEBaPq9y-6OUl",
          Up: "_3vBD2B7lrr6iXm8dGe71lI",
          Down: "_3VePRhMGWFsbGaZjSNXJjV",
          CloseButton: "_1_vCR1dPfyJ7_yukwDqblf",
          AnimIn: "_240i58XQ0w78YFrd_p-9UY",
          transitionIn: "_2jG5NuuER4JaHKuO9nA4KF",
          ClickableBG: "_308EDBzQTS8OgAxwxfq2UB",
          DirectionState: "Bv96jkkYqxrnA7xfPskjD",
          EventTypeAndTimeRow: "_3bWTO29arCCJ6PBGRZ7fRy",
          WithReminder: "_1C5DvpeSKLvf8M8uAdi50W",
          TimeandPostedBy: "_2WwG2r8yZuu2EMJgFTQZp8",
          EventType: "Udzrpqr8534T5DvVZveNP",
          PostedBy: "_2VqeQaZVaUkkEWaiLkmqmT",
          ReminderContainer: "_3Vf2MkZ_LWIoNVv36RwJtO",
          ReadMoreCnt: "_1YmaiDiNhC33cL5DKj05KQ",
          BackgroundAnimation: "_2-llXPi4w88rsWfJFYSLHB",
          "ItemFocusAnim-darkerGrey-nocolor": "_2eejrtSFYCSnzH8C6-WC3a",
          "ItemFocusAnim-darkerGrey": "oMlqiiSY2Eqr2ln_FmAg4",
          "ItemFocusAnim-darkGreySettings": "AcW48fP-EnfyD8bO6anBj",
          "ItemFocusAnim-darkGrey": "_3lAc02j3vPGIoXryYyGTZR",
          "ItemFocusAnim-grey": "_388VkzVpUFRuQ1HZEymCy",
          "ItemFocusAnim-translucent-white-10": "tK-6xcUa6TrN9X1V5zj25",
          "ItemFocusAnim-translucent-white-20": "_1UaaS_yXA7SqNdxVDXCD9W",
          "ItemFocusAnimBorder-darkGrey": "_1V7Z378RTDEmk3dXXGXsQa",
          "ItemFocusAnim-green": "_2ldXxMP_HINQZvEbjgDdbf",
          focusAnimation: "_3zr66n761wV-ZHFKw_Yvbn",
          hoverAnimation: "_1MvZ2haWg8XTcl8VHKnoS0",
        };
      },
      19332: (ge) => {
        ge.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
      },
      14256: (ge) => {
        ge.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      6878: (ge) => {
        ge.exports = {
          Header1: "SPYFj8pCLpNmnuQJEDobC",
          Header2: "QuKtTJ4LCPUlQeWYfLNyX",
          Header3: "_3s7cUqglDds9wzcWb7OLz6",
          Link: "_29bMZB6BOQfTQ_3za-w60I",
          LinkHost: "_16eO9LHnJuheylkB3Fdrpn",
          LinkButton: "_2HnDgHQT_3ehcs4WgskKG5",
          LinkPill: "_3nRRZ1AKPWQnyWTcT1RDt9",
          UnorderedList: "_2FoSxA1yCqpvxdOJnu8N8Z",
          OrderedList: "vV4IwOV-RuzelptiRQ_ZS",
          StoreWidget: "_36Y-loIMvxDKY9RIVxecCp",
          MedalTVWidget: "_1j2vixiqbbe8GqxA-cmlhA",
          LoyaltyRewardCtn: "_14p7R6qC1Kkyg4Qal1UJZu",
          SaleSectionCtn: "_39HWXhhjsbML7K9sme9ItV",
          SaleTextCtn: "_2Tqq0UDtuHw6otaE2Ww46g",
          ReminderCtn: "_25AZkxZYa3ROp8PHchCq-k",
          BlockQuote: "_2cY7bYMGmnuPPhM3aMQMfa",
          SocialLink: "_2LAnc-M7XILk5D72Qy7V6q",
          SocialIcon: "dDjYNUHT-jcb_B0VGK6CP",
          LocalizeBlock: "_1oBceu_yGnJHhqsA8fmA7P",
          CheckMark: "_24AtTon5otxGQGBY3P6ATR",
          ScreenshotCarousel: "_3uA0hv9La9Do6XtRycM0RX",
        };
      },
      12247: (ge) => {
        ge.exports = {
          SteamAwardContainer: "_3n6v2rFCMX3yWMfZrlCn6g",
          InLibraryView: "pqLczqVU9TDbWz5pl3Dhl",
          SVGIcon_DialogCheck: "_3ccByQfkFeqPu_u0ZEuu2b",
          SteamAwardHeader: "_2jgrTr2L4JVpD3vsEejL4u",
          SteamAwardHeaderImage: "_lRFQTx2beRUJL_3ltFfr",
          SteamAwardMainCtn: "_1uGju6QeFG7khpqA7DOs0-",
          SteamAwardMainTitle: "_161Ybvvo7TQ80J6yOfcxC5",
          SteamAwardSubTitle: "Sxxelbb28sRAaDXPxgcHP",
          SteamAwardLearnMore: "VQlY6MEAqF6Wsflo-Q4Wz",
          BottomRight: "zr64QF0O74AQ9RMG-dGnw",
          SteamAwardHeaderText: "_2mrzKOE-ejrZezNROw3GcQ",
          LinkText: "_2x4pgJBF4vbwBJ4KH2VOHG",
          SteamAwardVoteWidget: "khWz0kU5EooSG60KYdU1K",
          SteamAwardVotePrompt: "H5jrPn7OY-0ToSesPTrI6",
          SteamAwardCategoryTitle: "JVE9ORqYtUCERl3y2i7_X",
          VotingTitle: "_32ZmvScTqfRjiW9XXgyqR2",
          SteamAwardCategoryDesc: "_1V-8WYatw7PvjVj9hsAptM",
          SteamAwardVoteButtonArea: "_1v9LHwNb9fLu4yXs5L0jjz",
          SteamAwardVoteButton: "cTcgISesI0T2M-9yed2AU",
          SteamAwardVoteButtonText: "_247y340DSkN1t7QC8tUkFx",
          SteamAwardVoteButtonSubmitted: "_1ouD4mct3_CdBoy_lzVyFJ",
          NominateCtn: "_1SKPLx2FBvP9iC-lJHTkKQ",
          SteamAwardNominateButton: "_1uxCjZZ940xsM0idye1IP-",
          Nominated: "_1No9r92B3LLgMOaSMSC9vE",
          SteamAwardNominationWidget: "_38gTf-DsRc7bVnxxQXxT3B",
          SteamAwardLinkToNominationPage: "_3p83sGhSP-hikRKwITXId-",
          SteamAwardVoteCheckBox: "_1G4MUqubjzDize874UIeYh",
          SteamAwardModalGameTitle: "_15lc0ft7pgAlFXYbgePb-8",
          ExpiredEventHeader: "_3O3XsKT-SiMNsMqyidMLvS",
          AwardCategoriesCtn: "_2u4z7OT5MqNj-6wojCGnsr",
          SteamAwardConflictModal: "_2Xqc9FL9PfCQl8Fo8d7I_L",
          ConflictBody: "_3WKl_XpHUMGcIm4cNhlc_W",
          NominationSwitchCtn: "r9nDOvHWyABfkiiurnMwl",
        };
      },
      56330: (ge) => {
        ge.exports = {
          ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
          ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
          ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
          ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
          ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
          WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
          WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
          WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
          WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
          Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
          WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
          InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
          InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
          InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
          InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
          Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
          NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
          ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
          SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
        };
      },
      90316: (ge) => {
        ge.exports = {
          narrowWidth: "500px",
          EventDetailsPageContainer: "_2Ptras-ZC31rwdT6pD-t0a",
          StickyPageBarColumn: "_2aUTuHeHvSh1O3J73MAMmQ",
          EventNotPublicBar: "_214UHKV-VeP2IhhsZ2LVcn",
          UnpublishedDataBar: "j-JOpd1RiQoelltUAkGGx",
          EventNotPublicBarTitle: "acDtTp9VueGVdAapPDLxy",
          UnpublishedDataBarTitle: "l7Y1p6I1nHpnwDPjA-a3t",
          EventNotPublicBarDetail: "_1fbHYCMO42X_XiaPzyCcQk",
          UnpublishedDataBarDetail: "_3130s6Y2hpKUIZucKqpnwE",
          EventBackgroundBlurCtn: "_32nPM5nI8cmMdkvRnsUcq",
          EventBackgroundBlur: "stsss-bTNuazY8FYtvTOX",
          DetailArtworkAgeAppropriate: "_1p_lsRZvAYiGSonqGbCnrp",
          DetailArtworkAgeNotAppropriate: "_3x5pK4kfX6SQEKh9iSj3H-",
          EventCoverImageBlr: "_3xNobHnL6L5HNoDQf8AHUo",
          EventBodyCtn: "_3o4SVY-lALGHvkOPxiClcu",
          EventBodyPosition: "_3lIxPlLiNjLik6YIM8DKpk",
          EventBody: "_3aht--c1L66YvvpY-Il67f",
          EventBroadcastCtn: "_1Ph1iFKAgY5MbG0BLSObbI",
          EventColumns: "_1PEIfuF8koQapWSDE4ixM8",
          EventCoverImageCtn: "FZiaqIAvLKRo2ye9j3cq0",
          NoTitleArtwork: "_3Y40JAThJ65ZCkZaMsdrGm",
          ScreenshotInsteadOfCover: "_2r6un4LwM4IZjQFRprhIL3",
          EventCoverImage: "_17G2yhjdc_ZmGlMv-L-S05",
          EventCoverImageBackground: "_2-IygC3-t05_RYwPl6Fkgt",
          InLibraryView: "_3_SEiDNs-lzwV7cTF6gcgt",
          InEditor: "_2YuATTfMo6qZqsst8azM2p",
          MaskImages: "_2DmRfvoCf1m6HLz3w6uKPl",
          EventCoverImageFuzz: "_2EWL0Txuk_th1gh-UxYPPx",
          LibraryEventTitleContainer: "ZHAfj0MPg1zDLXRnCzSsx",
          CoverImageGradient: "_1_x4oDqLbWfiaDp5HQ2yA8",
          EventDetailTitleImg: "_1RA5eG1kXW89QB1SG3mq04",
          EventDetailTitleDesc: "_3Ej2uoApLQ756OReRtcQ2f",
          EventDetailsSticky: "_3IxVZE9uydjh3cA9kmtnk7",
          EventDetailUserType: "_3phfIcOe_STA7hSoFfIxlE",
          EventDetailGameCallToAction: "JOkXFrkqayZ-Pg2Fr46Ho",
          EventDetailTimeInfo: "_2KsEbGy9kiSDeQpcqEc9DG",
          EventDetailsDescription: "_2orfVuUro8BNFNNhRfGk4n",
          EventDetailsBody: "A_A2B6fTn_MPLlGCmsLtd",
          EventDetailsGame: "_1JqXpZvEA66lA79AoE1A4i",
          EventDetailsAvatar: "_2U_20VMsLlLdv66vI22zJg",
          GameActions: "bGROTLQdP5BDMIzo0cL9T",
          ActionButton: "_26-KZHJ9fTyRZHH2c2H6Y2",
          Ownership: "_2VkXpaIdUFw9YfZ7NOSuZO",
          EventDetailsType: "_2u9c-A3-fBObro9MTIQ1os",
          EventDetailTitle: "TqEPC9bhvVpZ1rb3Z8Mbd",
          EventDetailTitleContainer: "_3z2NYCkFizMu4fMvWTIBUG",
          EventDetailsSubTitle: "_20f2sKS2M7PlPSnPCinT26",
          EventDescriptionRichField: "_1dV0eemBulIeNuwlrxbJA_",
          ToolBar: "zMpwi4v_VKAJy80GriVLg",
          EventDescriptionContainer: "_2-t9DuSXZ-g32FrXvXuRfC",
          EventDescriptionArea: "_3UMJE2bBtqZcj2w_S-n8o4",
          LibraryEventBodyContainer: "_32mHvRSmD7AVK9OIOPlaFu",
          "lang_zh-cn": "_2oAxPvOHyVkOcOFbH-ROOn",
          lang_ko: "_36n2d0WrYP7qNfJaBDPBzE",
          lang_ja: "-TO1bNNGYVahD_n4sJP5r",
          "lang_zh-tw": "_3lwKp3Y9WtjxoKIhneSXGJ",
          RightSideTitles: "efy3k8RozzxfFidgbdfZZ",
          DisplayAdminPanel_Title: "_1lmj3YadvgLSNGiTrVsnnT",
          AppSummaryCtn: "Wk21cv1qcYBOF2PSAOfb-",
          AppSummaryWidgetTitleCtn: "jJFfoBi2WDn1ym8KCLfLr",
          Title: "_2gsoDhNzhAXpECJk2aM94W",
          AppSummaryWidgetCtn: "_2jRJR7Vuvy9GStGxMc06AQ",
          DisplayAdminPanel: "XshNh8OHVlOoxz_Yj0fkc",
          Sticky: "_3mQwJy8e1PrRXgZq-rfYHL",
          DisplayAdminPanelMarker: "_3oBRxSIrR4NU_SUyHm24oc",
          DisplayAdminPanelClose: "_1D7XHqTP4JUViNgnjIQ9qx",
          Locked: "_1uXh_NDjzcbWYSUJnopy8Z",
          DisplayAdminPanel_ctn: "_1SQm1cGP42xfEdQhin6L40",
          DisplayAdminPanel_TopSpacer: "_3yTv-i_5aQ3b13xZpESEk-",
          DisplayAdminPanel_Spacer: "_6pX37H30C0s-x4mIFjxUX",
          AdminButton: "_1J0n9Gp8bS7Mha2SNQSwXP",
          EditorStatsCtn: "e2BAgiTc6P_7haFD_YWzs",
          VisibilityNote: "_1G3X_jfMgGX1nzeOAvPZNG",
          EditorStatsRow: "_2SecokIlleKz0K30ieApg5",
          SteamBlog: "_1rafn02Kz4HF1-3xfmuaR0",
          VO: "_1-pFh2QlJBUeqmXrWcbTQQ",
          LunarNewYearOpenEnvelopeVideoDialog: "_1-SzihnWiO-8bBYWJ-TS-4",
          Container: "_1dcfd1Jxk-yCCdG0k1eyG-",
          Column: "_3o_dPHiTf_pT5uP0TuTE2V",
          VideoBox: "KAf3yvFJr1ynRXT8aqd3s",
          CoinText: "_14dU2UGt1PmbFzm_3MFVsw",
          Visible: "_2bKyVv-GvmJOHaKOyny5tE",
          LunarNewYearOpenEnvelopeVideo: "_2JgvPxvGXJvSckj2hqob0v",
          StoryHeader: "uJBQiPn1x-EafTRgDg6M4",
          StorySubHeader: "hl9GlxJvvzMyW_nSZzClV",
          StoryText: "_1vUbVy_chcUkci3kdPrSUf",
          StoryPicture: "_1ovBW-Uq5McD_BCBZTM_9a",
          CheckBackText: "_3FFfw7Avb_USRJcepkNLAO",
          DancingRat: "_3gJiVpOab5ooTJ9VkQZVJL",
          Links: "_2U9E5YNMewy5F336yikcMG",
          MarketLink: "_19WRlHb-r_EpFcgEtFL8iV",
          MarketLinkhover: "Q7KDk8kBk01MxhM_KZoqt",
          ReadMoreCnt: "_1L8MouFdSBwf8mcqLtAIPu",
        };
      },
      39256: (ge) => {
        ge.exports = { ErrorDiv: "XeZExtCZ_zIcbkPRCqsnV" };
      },
      55351: (ge) => {
        ge.exports = {
          DateAndTime: "_2V6GLdiU4guy4ND3n4Usgg",
          DateAndTimeInline: "HZ6b2d4r4EFnT_1BeU5vo",
          At: "Fn5EUtWkwSAw_gbbiySKN",
          ActiveEvent: "rT7EkJjqw27KBB7HxAAWk",
          ActiveEventCallOut: "_2pJftSRjT_UngZZ4BJimwg",
          RightSideTitles: "_4LAnPYKRPeF-QDReu_VGm",
          DateToolTip: "_2E5LHvnVEF3dSVV3wrDflm",
          ShortDateAndTime: "MBkkhT4wei3tWetnWbiqn",
          ShortDateRange: "_3CN6I3krBRNzD7kCuKQ_w7",
        };
      },
    },
  ]);
})();
