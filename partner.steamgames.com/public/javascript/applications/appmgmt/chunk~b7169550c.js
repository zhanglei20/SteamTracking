/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    33645: (e) => {
      e.exports = {
        Bold: "_3cln317VYhwhE1fSeMCG48",
        Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
        Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
        TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
        Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
        Answer: "syKgzmlrcUIJHIBfWsn4h",
        Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
        Header2: "_6-VR2WCBCDupCcUN5INQM",
        Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
        Header4: "_3VHY5vmO07MFpoOgTB9eOi",
        Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
        CenterSpan: "zCnp-VELUMybbfxOD-ze9",
        SmallText: "WBzrd438Bd8Z3J-j_iglW",
        Underline: "GrhFWtBdrSZP611s1UqqT",
        Strike: "_3pK7sh9FYdigMXxcUVI4DY",
        Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
        Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
        SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
        DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
        BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
        QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
        PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
        Code: "_2ODaX8lO7DKLKke76c2Wya",
        CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
        List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
        OrderedList: "DojPxwyYpx3hwuPIaJPCq",
        ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
        HR: "-xPK0REpludHjRG8xQfih",
        Table: "_2CAsiFd9UHbUOqzd0e7ioe",
        NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
        TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
        TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
        EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
        ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
        ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
        EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
        ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
        ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
        LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
        Image: "_3K0NuxYUYncdQ-cNK7udMn",
        PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
        Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
        CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
        CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
      };
    },
    83164: (e) => {
      e.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
    },
    35050: (e) => {
      e.exports = { bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD" };
    },
    39449: (e) => {
      e.exports = {
        PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
        PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
        PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
        ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
        ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
        Disabled: "_1a_f8VY56CtjgePDRTaC-W",
      };
    },
    58855: (e) => {
      e.exports = { CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA" };
    },
    67523: (e) => {
      e.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
    },
    21038: (e) => {
      e.exports = {
        PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
        SVG: "_3Mns5ZEBThi10kv9zwdCRr",
      };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    98019: (e, t, n) => {
      "use strict";
      n.d(t, { YA: () => l, p: () => c, qh: () => i });
      var a = n(20194),
        r = n(41735),
        s = n.n(r),
        o = n(78327);
      function i() {
        const e = (0, a.I)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const e = `${o.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              t = await s().get(e);
            return 200 == t?.status && 1 == t.data?.success
              ? t.data.admins
              : (console.error("ValveAccounts:", t?.status), []);
          },
        });
        return e.isLoading ? null : e.data;
      }
      function c(e) {
        const t = i();
        return t?.find((t) => t.id == e);
      }
      function l(e, t) {
        const n = e.getQueryData(["useValveAccounts"]);
        return n?.find((e) => e.id === t);
      }
    },
    32179: (e, t, n) => {
      "use strict";
      n.d(t, {
        MY: () => u,
        UA: () => m,
        Yd: () => f,
        qG: () => _,
        rN: () => g,
        vh: () => p,
      });
      var a = n(34629),
        r = n(41735),
        s = n.n(r),
        o = n(90626),
        i = n(68797),
        c = n(78327),
        l = n(6419);
      function u() {
        return 2 == c.TS.EUNIVERSE ? 12 : 1;
      }
      class d {
        m_mapOptInToPartners = new Map();
        m_mapPromises = new Map();
        GetPartnerInfo(e) {
          return this.m_mapOptInToPartners.get(e);
        }
        BHasPartnerInfoLoad(e) {
          return this.m_mapOptInToPartners.has(e);
        }
        async FindPartnerByName(e) {
          return (
            this.m_mapPromises.has(e) ||
              this.m_mapPromises.set(e, this.InternalFindPartnerByName(e)),
            this.m_mapPromises.get(e)
          );
        }
        async InternalFindPartnerByName(e) {
          const t = new Array();
          try {
            const n = c.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              a = {
                sessionid: c.TS.SESSIONID,
                searchtext: e,
                origin: self.origin,
              },
              r = await s().get(n, { params: a });
            200 == r?.status && 1 == r?.data?.success
              ? r.data.publishers.forEach((e) => {
                  const n = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      c.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, n), t.push(n);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${r?.status} eresult ${r?.data?.success} and msg ${r?.data?.msg}`,
                );
          } catch (e) {
            const t = (0, i.H)(e);
            console.error(
              "CPartnerInfoStore.FindPartnerByName failed add: " +
                t.strErrorMsg,
              t,
            );
          }
          return t;
        }
        async LoadPartnerInfo(e) {
          if (this.m_mapOptInToPartners.has(e))
            return this.m_mapOptInToPartners.get(e);
          await this.FindPartnerByName("" + e);
          return (
            this.BHasPartnerInfoLoad(e) ||
              this.m_mapOptInToPartners.set(e, null),
            this.m_mapOptInToPartners.get(e)
          );
        }
        async LoadMultiplePartnerInfo(e) {
          if (!e || 0 == e.length) return [];
          const t = e.filter((e) => !this.m_mapOptInToPartners.has(e));
          return (
            t.length > 0 && (await this.FindPartnerByName("" + t.join(","))),
            e.map((e) => this.m_mapOptInToPartners.get(e)).filter(Boolean)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        constructor() {
          let e = JSON.parse(
            JSON.stringify((0, c.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(e) &&
            (e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e)),
            "dev" == c.TS.WEB_UNIVERSE &&
              console.log("DEV_DEUBG: CPartnerInfoStore::constructor", e));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].partnerid &&
            "string" == typeof t[0].name
          );
        }
      }
      function p(e) {
        const [t, n] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              d
                .Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => n(!0));
          }, [e, t]),
          t
        );
      }
      function m(e) {
        const [t, n] = o.useState(() => d.Get().GetPartnerInfo(e));
        return (
          o.useEffect(() => {
            !d.Get().BHasPartnerInfoLoad(e) && e > 0
              ? d
                  .Get()
                  .LoadPartnerInfo(e)
                  .then((e) => n(e))
              : d.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                n(d.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function g() {
        return { fnFindPartnerByName: d.Get().FindPartnerByName };
      }
      function f(e) {
        return d.Get().GetPartnerInfo(e);
      }
      function _(e) {
        return d.Get().LoadPartnerInfo(e);
      }
      (0, a.Cg)([l.o], d.prototype, "FindPartnerByName", null);
    },
    95742: (e, t, n) => {
      "use strict";
      n.d(t, { Al: () => a, CS: () => r, op: () => i, vE: () => c });
      class a {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !0) {
          const a = (function (e, t) {
            const n = [];
            let a = { type: 0, text: "" },
              r = !1,
              s = !1,
              o = !1;
            for (let i = 0; i < e.length; i++) {
              const c = e[i];
              switch (a.type) {
                case 0:
                  "[" == c
                    ? ((a.type = 2), (s = !0))
                    : ((a.type = 1), "\\" == c && t ? (r = !r) : (a.text += c));
                  break;
                case 2:
                case 3:
                  if ("/" == c && s) (a.type = 3), (a.text = ""), (s = !1);
                  else if ("[" != c || r)
                    if ("]" != c || r)
                      "\\" == c && t
                        ? ((a.text += c), (r = !r), (s = !1))
                        : ((a.text += c), (r = !1), (s = !1));
                    else {
                      const e =
                          2 == a.type &&
                          "noparse" == a.text?.toLocaleLowerCase(),
                        t =
                          3 == a.type &&
                          "noparse" == a.text?.toLocaleLowerCase();
                      s || (o && !t)
                        ? ((a = u(a)), (a.text += c))
                        : e
                          ? (o = !0)
                          : t && (o = !1),
                        (a = l(n, a)),
                        (s = !1);
                    }
                  else (a = l(n, u(a), 2)), (s = !0);
                  break;
                case 1:
                  "[" != c || r
                    ? "\\" == c && t
                      ? (r && (a.text += c), (r = !r))
                      : ((a.text += c), (r = !1))
                    : ((a = l(n, a, 2)), (s = !0));
              }
            }
            0 != a.type &&
              (2 == a.type || 3 == a.type
                ? n.push(u(a))
                : n.push({ type: a.type, text: a.text ?? "" }));
            return n;
          })(e || "", n);
          return this.Parse_BuildElements(a, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const a = [],
            r = () => (a.length < 1 ? void 0 : a[a.length - 1]),
            s = this.m_dictComponents,
            o = (e) => !(!e.tag || !s.get(e.tag)?.autocloses);
          let i = !1,
            c = !0;
          const l = (e, a) => {
            let r = a.text.toLowerCase();
            if (e && e.node.tag === r && s.get(e.node.tag)) {
              const a = s.get(e.node.tag),
                r = {
                  tagname: e.node.tag,
                  args: e.node.args,
                  rawargs: e.node.rawargs,
                },
                o = t(a.Constructor, r, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(o)
                  ? o.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(o),
                (i = !!a.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + a.text + "]", !1),
                (n = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = i ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, c), (i = !1);
              } else if (2 == e.type) {
                const t = s.get(e.tag);
                if (t) {
                  const o = r();
                  if (void 0 !== o) {
                    const t = s.get(o.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === o.node.tag &&
                      l(a.pop(), o.node);
                  }
                  a.push({ accumulator: n, node: e, bWrapTextForCopying: c }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (i = !!t.skipInternalNewline),
                    (c = t.allowWrapTextForCopying ?? !1);
                } else n.AppendText("[" + e.text + "]", 0 == a.length);
              } else if (3 == e.type) {
                let t = e.text.toLowerCase();
                for (; r() && r().node.tag !== t && o(r().node); ) {
                  const e = a.pop();
                  l(e, e.node);
                }
                if (r()?.node.tag == t) {
                  const t = a.pop();
                  l(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == a.length);
              }
            });
            a.length > 0;
          ) {
            const e = a.pop();
            l(e, e.node);
          }
          return n.GetElements();
        }
      }
      function r(e, t) {
        let n = "[" + e;
        t?.[""] && (n += `=${s("" + t[""])}`);
        for (const e in t) "" !== e && (n += ` ${o(e)}=${s("" + t[e])}`);
        return (n += "]"), n;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function o(e) {
        return e.replace(/(\\| |\])/g, "\\$1");
      }
      function i(e) {
        return `[/${e}]`;
      }
      function c(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function l(e, t, n = 0) {
        const { type: a, text: r = "" } = t;
        if (2 == a) {
          let t = r.indexOf("=");
          const n = r.indexOf(" ");
          let s, o;
          -1 != n && (-1 == t || n < t) && (t = n);
          let i = "";
          t > 0
            ? ((s = r.substr(0, t).toLocaleLowerCase()),
              (i = r.substr(t)),
              (o = (function (e) {
                if (!e || e.length < 1) return {};
                const t = {};
                let n = "",
                  a = "",
                  r = 0,
                  s = 0;
                "=" == e[0] && (r = 2);
                let o = !1;
                for (s++; s < e.length; s++) {
                  const i = e[s];
                  let c = !0,
                    l = !1;
                  switch (r) {
                    case 0:
                      if ("=" == i) return {};
                      if (" " == i) continue;
                      r = 1;
                      break;
                    case 1:
                      ("=" != i && " " != i) ||
                        o ||
                        (" " == i ? ((r = 0), (l = !0)) : (r = 2), (c = !1));
                      break;
                    case 2:
                      " " == i
                        ? ((r = 0), (c = !1), (l = !0))
                        : '"' == i
                          ? ((r = 4), (c = !1))
                          : (r = 3);
                      break;
                    case 3:
                    case 4:
                      ((" " == i && 4 != r && !o) ||
                        ('"' == i && 4 == r && !o)) &&
                        ((r = 0), (c = !1), (l = !0));
                  }
                  if (c)
                    if ("\\" != i || o)
                      if (((o = !1), 1 == r)) n += i;
                      else {
                        if (3 != r && 4 != r)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + r,
                          );
                        a += i;
                      }
                    else o = !0;
                  l && ((t[n] = a), (n = ""), (a = ""));
                }
                0 != r && (t[n] = a);
                return t;
              })(i)))
            : ((o = {}), (s = r.toLocaleLowerCase())),
            e.push({ type: a, text: r, tag: s, args: o, rawargs: i });
        } else 0 != a && e.push({ type: a, text: r });
        return { type: n, text: "" };
      }
      function u(e) {
        let t = "";
        return (
          3 == e.type ? (t = "[/") : 2 == e.type && (t = "["),
          { type: 1, text: t + (e.text ?? "") }
        );
      }
    },
    40236: (e, t, n) => {
      "use strict";
      n.d(t, { OO: () => c, wY: () => i });
      var a = n(90626),
        r = n(8871),
        s = n(81393);
      function o(e, t) {
        return (0, r.QS)(
          (n) => {
            if (!n) return;
            const a = t(n.ownerDocument.defaultView, (t) => {
              e(t[0]);
            });
            return a.observe(n), () => a.unobserve(n);
          },
          [e, t],
        );
      }
      function i(e) {
        return o(
          e,
          a.useCallback(
            (e, t) =>
              e.ResizeObserver
                ? new e.ResizeObserver(t)
                : ((0, s.wT)(!1, "ResizeObserver is not available"),
                  {
                    observe: () => {},
                    unobserve: () => {},
                    disconnect: () => {},
                  }),
            [],
          ),
        );
      }
      function c(e, t) {
        const n = a.useRef(void 0);
        return (function (e, t) {
          return o(
            e,
            a.useCallback((e, n) => new e.IntersectionObserver(n, t), [t]),
          );
        })((t) => {
          !n.current && t.isIntersecting && e.onEnter?.(t),
            n.current && !t.isIntersecting && e.onLeave?.(t),
            e.onIntersectionChange?.(t),
            (n.current = t.isIntersecting);
        }, t);
      }
    },
    78588: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => m });
      var a = n(74812),
        r = n(90626),
        s = n(8893),
        o = n(90717),
        i = n(26296),
        c = n(52038),
        l = n(61859),
        u = n(22797),
        d = n(18654),
        p = n.n(d);
      function m(e) {
        const { id: t, imageType: n, bPreferAssetWithoutOverride: d } = e,
          { storeItemAsset: m, storeItemDefaultInfo: g } = (0, a.q)(t, n, d);
        if (void 0 === m || !g)
          return r.createElement(u.t, {
            size: "small",
            position: "center",
            string: (0, l.we)("#Loading"),
          });
        if (null == m) return null;
        if ("library" === n || "vertical" == n)
          return r.createElement(s.G, {
            id: t,
            bPreferAssetWithoutOverride: d,
          });
        let f,
          _,
          h = (0, o.N)(m, "header" === n),
          E = "";
        if ("main" === n)
          (f = p().mainCapsuleImgWidth),
            (_ = p().mainCapsuleImgHeight),
            (E = p().MainCapsuleImageContainer);
        else
          (f = p().headerCapsuleImgWidth),
            (_ = p().headerCapsuleImgHeight),
            (E = p().HeaderCapsuleImageContainer);
        return r.createElement(
          "div",
          { className: (0, c.A)(E, "CapsuleImageCtn") },
          r.createElement(i.o, {
            lazyLoad: !0,
            srcs: h,
            className: (0, c.A)(p().CapsuleImage),
            width: f,
            height: _,
            alt: g.name,
          }),
        );
      }
    },
    90717: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => s, N: () => r });
      var a = n(42834);
      function r(e, t) {
        let n = [];
        return (
          e &&
            (function (e, t, n) {
              n
                ? e.push((0, a.b0)(t, "header"), (0, a.b0)(t, "main_capsule"))
                : e.push((0, a.b0)(t, "main_capsule"), (0, a.b0)(t, "header"));
            })(n, e, t),
          n.filter((e) => !!e)
        );
      }
      function s(e, t) {
        return {
          strStoreVerticalURL: (0, a.b0)(e, "hero_capsule"),
          strLibraryVerticalURL: (0, a.b0)(e, "library_capsule"),
        };
      }
    },
    8893: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => m });
      var a = n(74812),
        r = n(90626),
        s = n(18654),
        o = n.n(s),
        i = n(26296),
        c = n(52038),
        l = n(78327),
        u = n(90717),
        d = n(83164),
        p = n.n(d);
      function m(e) {
        const { id: t, bPreferLibrary: n, bPreferAssetWithoutOverride: s } = e,
          { storeItemDefaultInfo: d, storeItemAsset: m } = (0, a.q)(
            t,
            "vertical",
            s,
          ),
          [g, f] = r.useState(0);
        if (!d || !m)
          return r.createElement("div", {
            className: o().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: _, strLibraryVerticalURL: h } = (0, u.M)(
          m,
          d,
        );
        if (_ && (!n || !h))
          return r.createElement(
            "div",
            {
              className: (0, c.A)(
                o().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
            },
            r.createElement("img", {
              src: _,
              className: o().CapsuleImage,
              alt: d.name,
            }),
            Boolean(4 == d.type) &&
              r.createElement("img", {
                className: p().CornerSash,
                src: `${l.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                alt: "DLC",
              }),
          );
        if (h)
          return r.createElement(
            "div",
            {
              className: (0, c.A)(
                o().LibraryFallbackAssetImageContainer,
                o().VerticalCapsule,
                n ? o().ForceLibrarySizing : "",
              ),
            },
            r.createElement("div", {
              className: o().FallbackBackground,
              style: { backgroundImage: `url(${h})` },
            }),
            r.createElement("img", {
              src: h,
              className: o().CapsuleImage,
              alt: d.name,
            }),
          );
        const E = (0, u.N)(m, !0),
          b = E.length - 1,
          S = (e) => {
            const t = E.indexOf(e);
            t >= b && t < E.length - 1 && f(t + 1);
          };
        if (g < E.length) {
          const e = E[g];
          return r.createElement(
            "div",
            { className: o().LibraryFallbackAssetImageContainer },
            r.createElement("div", {
              className: o().FallbackBackground,
              style: { backgroundImage: `url(${e})` },
            }),
            r.createElement(i.o, {
              lazyLoad: !0,
              srcs: E,
              className: o().CapsuleImage,
              alt: d.name,
              onImageError: S,
            }),
          );
        }
        return r.createElement("div", {
          className: o().HeroCapsuleImageContainer,
        });
      }
    },
    20433: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => p, u: () => m });
      var a = n(90626),
        r = n(45699),
        s = n(55963),
        o = n(60014),
        i = n(49411),
        c = n(61336),
        l = n(52541),
        u = n(8527);
      n(78327);
      function d(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function p(e) {
        const {
            id: t,
            hoverClassName: n,
            fnGetIDOverride: r,
            fnHoverState: s,
            children: o,
          } = e,
          i = a.useRef(null),
          c = a.useCallback(
            (e) => {
              const n = d(t);
              n &&
                (s && s(!0),
                window.GameHover &&
                  window.GameHover(r ? r() : i.current, e, "global_hover", {
                    type: n,
                    id: (0, l.G$)(t).id,
                    v6: 1,
                  }));
            },
            [s, r, t],
          ),
          u = a.useCallback(
            (e) => {
              d(t) &&
                (s && e.relatedTarget && s(!1),
                window.HideGameHover &&
                  window.HideGameHover(r ? r() : i.current, e, "global_hover"));
            },
            [t, s, r],
          );
        return a.createElement(
          "div",
          {
            ref: i,
            className: n,
            onMouseEnter: c,
            onMouseLeave: u,
            onFocus: c,
            onBlur: u,
          },
          o,
        );
      }
      function m(e) {
        const {
            id: t,
            strExtraParams: n,
            fnOnClickOverride: m,
            strOverrideURL: g,
          } = e,
          f = (0, o.n9)(),
          _ = (0, i.w)(),
          h = (0, c.NT)(
            g ||
              (t && "creatorid" in t
                ? (0, s.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, l.G$))(t).id}${n ? `?${n}` : ""}`,
                    f,
                    _,
                  )
                : (0, s.It)(
                    `${u.TS.STORE_BASE_URL}${d(t)}/${((0, l.G$))(t).id}${n ? `?${n}` : ""}`,
                    f,
                    _,
                  )),
          );
        return a.createElement(
          p,
          { ...e },
          a.createElement(
            r.Ii,
            {
              className: e.className,
              href: m ? void 0 : h,
              target: u.TS.IN_CLIENT || m ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: m,
            },
            e.children,
          ),
        );
      }
    },
    74812: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => s });
      var a = n(81393),
        r = n(39777);
      function s(e, t, n = !1) {
        const { data: s } = (0, r.J$)(e),
          { data: o } = (0, r.lv)(e, n);
        let i;
        s &&
          1 == s.included_appids?.length &&
          !(function (e, t) {
            if (!e) return !1;
            switch (t) {
              case "header":
                return !!e.header;
              case "main":
                return !!e.main_capsule;
              case "vertical":
              case "library":
                return !!e.hero_capsule || !!e.library_capsule;
              default:
                return (0, a.z_)(t, `Unhandled imageType: ${t}`), !1;
            }
          })(o, t) &&
          s.item_type &&
          [1, 2].includes(s.item_type) &&
          (i = { appid: s.included_appids[0] });
        const { data: c } = (0, r.J$)(i),
          { data: l } = (0, r.lv)(i, n),
          u = c?.visible ? c : s;
        return { storeItemAsset: c?.visible ? l : o, storeItemDefaultInfo: u };
      }
    },
    75515: (e, t, n) => {
      "use strict";
      n.d(t, { PH: () => u, TT: () => s, h7: () => d, mY: () => l });
      var a = n(34629),
        r = n(14947);
      class s {
        constructor() {
          (0, r.Gn)(this);
        }
        accountid;
        steamid;
        appid;
        hub_popular;
        popular;
        relay_broadcast_id;
        rowversion;
        thumbnail_http_address;
        nAppIDVOD;
        title = void 0;
        viewer_count = void 0;
        whitelist_rank;
        gamedata_subtitle = void 0;
        store_title;
        left_panel;
        right_panel;
        snr;
        broadcast_chat_visibility;
        default_selection_priority = l.k_eGeneral;
        current_selection_priority = l.k_eGeneral;
      }
      (0, a.Cg)([r.sH], s.prototype, "title", void 0),
        (0, a.Cg)([r.sH], s.prototype, "viewer_count", void 0),
        (0, a.Cg)([r.sH], s.prototype, "gamedata_subtitle", void 0),
        (0, a.Cg)([r.sH], s.prototype, "current_selection_priority", void 0);
      const o = "primary",
        i = "featured",
        c = "default_featured";
      var l;
      function u(e) {
        switch (e) {
          case o:
            return l.k_ePrimary;
          case i:
            return l.k_eFeatured;
          case c:
            return l.k_eDefaultFeatured;
          default:
            return l.k_eGeneral;
        }
      }
      function d(e) {
        const t = e;
        return (
          !!(
            t &&
            "number" == typeof t.success &&
            t.filtered &&
            Array.isArray(t.filtered) &&
            t.broadcast_chat_visibility
          ) &&
          (0 == t.filtered.length || "string" == typeof t.filtered[0].accountid)
        );
      }
      !(function (e) {
        (e[(e.k_ePrimary = 3)] = "k_ePrimary"),
          (e[(e.k_eFeatured = 2)] = "k_eFeatured"),
          (e[(e.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (e[(e.k_eGeneral = 0)] = "k_eGeneral");
      })(l || (l = {}));
    },
    42834: (e, t, n) => {
      "use strict";
      n.d(t, { b0: () => s, bu: () => o });
      var a = n(8527),
        r = n(81393);
      function s(e, t) {
        if (e[t]) {
          if ("community_icon" == t) {
            const n = e.asset_url_format
              .replace(/^steam\//, "images/")
              .replace("${FILENAME}", `${e[t]}.jpg`)
              .replace(/\?.*$/, "");
            return `${a.TS.MEDIA_CDN_COMMUNITY_URL}${n}`;
          }
          {
            const n = e.asset_url_format.replace("${FILENAME}", e[t]);
            return `${a.TS.STORE_ITEM_BASE_URL}${n}`;
          }
        }
      }
      function o(e, t = "full") {
        let n = "";
        switch (t) {
          case "thumb":
            n = ".116x65";
            break;
          case "600x338":
            n = ".600x338";
            break;
          case "1920x1080":
            n = ".1920x1080";
            break;
          case "full":
            n = "";
            break;
          default:
            (0, r.z_)(t, `Invalid size: ${t}`);
        }
        return (
          a.TS.STORE_ITEM_BASE_URL + e.filename.replace(/\.[^.*]$/, `${n}$&`)
        );
      }
    },
    29379: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => c });
      var a = n(60014),
        r = n(90626);
      const s = r.createContext({
        AddImpression: () => {
          console.log("Impression Tracking not enabled");
        },
        BIsValid: () => !1,
      });
      var o = n(30600),
        i = n(8871);
      function c(e) {
        const { appID: t, feature: n, depth: c, children: l } = e,
          u = (0, a.ru)(n, c),
          d = r.useContext(s),
          [p, m] = r.useState(void 0),
          g = r.useCallback(
            (e) => {
              e.isIntersecting &&
                m((e) =>
                  e?.appID == t && e?.snr == u ? e : { appID: t, snr: u },
                );
            },
            [t, u],
          );
        (0, r.useEffect)(() => {
          p && null != p.appID && d.AddImpression(p.appID, p.snr);
        }, [d, p]);
        const f = (0, o.BL)(g),
          _ = t && (!p || (p.appID != t && p.snr != u)),
          h = (0, i.Ue)(l.props.ref, _ ? f : void 0);
        return r.cloneElement(l, { ref: h });
      }
    },
    71420: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => s });
      var a = n(8527),
        r = n(62349);
      function s(e, t = !1) {
        if (e)
          return t && (0, r.J)(e)
            ? `${a.TS.STORE_BASE_URL}app/${((0, r.S))(e)[0]}`
            : `${a.TS.STORE_BASE_URL}${e.store_url_path}`;
      }
    },
    63556: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => p, O: () => d });
      var a = n(34629),
        r = n(14947),
        s = n(65946),
        o = n(22837),
        i = n(62490),
        c = n(6419),
        l = n(78327),
        u = n(91986);
      class d {
        m_eCurLang = (0, o.sf)(l.TS.LANGUAGE);
        m_rgHasData = (0, i.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new u.l();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(e) {
          return (
            this.m_eCurLang != e &&
            ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
          );
        }
        SetHasLanguage(e) {
          e.forEach((e, t) => {
            this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
          });
        }
        BHasLanguageData(e) {
          return this.m_rgHasData[e];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(e) {
          e != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = e);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            d.s_globalSingletonStore ||
              ((d.s_globalSingletonStore = new d()),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.DUS = d.s_globalSingletonStore)),
            d.s_globalSingletonStore
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
      }
      function p() {
        return (0, s.q3)(() => d.Get().GetCurEditLanguage());
      }
      (0, a.Cg)([r.sH], d.prototype, "m_eCurLang", void 0),
        (0, a.Cg)([r.sH], d.prototype, "m_rgHasData", void 0),
        (0, a.Cg)([r.sH], d.prototype, "m_bHasLocalizationContext", void 0),
        (0, a.Cg)([c.o], d.prototype, "GetCurEditLanguage", null),
        (0, a.Cg)([c.o], d.prototype, "SetCurEditLanguage", null),
        (0, a.Cg)([r.XI.bound], d.prototype, "SetHasLanguage", null),
        (0, a.Cg)([c.o], d.prototype, "BHasLanguageData", null);
    },
    96001: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => c, z: () => i });
      var a = n(81393),
        r = n(96059),
        s = n(30470),
        o = n(24484);
      class i {
        m_steamInterface;
        GetPromotionTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            i.s_Singleton || ((i.s_Singleton = new i()), i.s_Singleton.Init()),
            i.s_Singleton
          );
        }
        Init() {
          const e = (0, o.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, a.wT)(Boolean(e), "require promotion_operation_token"),
            (this.m_steamInterface = new r.D(s.TS.WEBAPI_BASE_URL, e));
        }
      }
      function c() {
        return i.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    11577: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => l });
      var a = n(90626),
        r = n(96059),
        s = n(16021),
        o = n(81393),
        i = n(78327),
        c = n(63664);
      function l(e) {
        const [t, n] = (0, a.useState)(!1),
          [l] = (0, a.useState)(() =>
            (function () {
              const e = (0, i.Tc)(
                "partnerbrowse_webapi_token",
                "application_config",
              );
              (0, o.wT)(Boolean(e), "require partnerbrowse_webapi_token");
              const t = new r.D(i.TS.WEBAPI_BASE_URL, e);
              ("dev" != i.TS.WEB_UNIVERSE && "beta" != i.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: Initializing CStoreItemCache with access token",
                  e,
                );
              return t;
            })(),
          ),
          u = (0, a.useMemo)(
            () => ({
              country: i.TS.COUNTRY,
              language: i.TS.LANGUAGE,
              bUsePartnerAPI: !0,
            }),
            [],
          );
        return (
          (0, a.useEffect)(
            () => (
              n(!0),
              (function (e) {
                return s.A.Initialize(
                  e.GetServiceTransport(),
                  i.iA.is_partner_member,
                );
              })(l)
            ),
            [l],
          ),
          t
            ? (0, a.createElement)(c.V3, {
                context: u,
                serviceTransportOverride: l.GetServiceTransport(),
                children: e.children,
              })
            : null
        );
      }
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => v, CF: () => I, KM: () => E, KT: () => y });
      var a = n(41735),
        r = n.n(a),
        s = n(58632),
        o = n.n(s),
        i = n(90626),
        c = n(20194),
        l = n(75233),
        u = n(17720),
        d = n(68797),
        p = n(78327),
        m = n(56545),
        g = n(37735),
        f = n(23809),
        _ = n(7860);
      const h = "nicknames";
      function E(e) {
        const t = (0, f.KV)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [h],
            queryFn: async () => {
              const e = new Map();
              if (p.iA.logged_in) {
                const n = m.w.Init(g.dN),
                  a = (await g.xt.GetNicknameList(t, n)).Body().toObject();
                a?.nicknames &&
                  a.nicknames.length > 0 &&
                  a.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const b = new (o())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, p.yK)()
                  ? p.TS.COMMUNITY_BASE_URL
                  : p.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(a).strErrorMsg}`;
                return [a.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(a).strErrorMsg}`;
                const s = new Map();
                return (
                  a.data.userinfos.forEach((e) =>
                    s.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        S = "avatarandpersonas";
      function y(e) {
        const { data: t, isLoading: n } = (0, c.I)({
          queryKey: [S, e],
          queryFn: () => b.load(e),
        });
        return [t, n];
      }
      function v(e) {
        const t = (0, l.jE)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [S, e],
            queryFn: async () => {
              const n = await b.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [S, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          r = (0, i.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return a ? null : r;
      }
      function I(e) {
        return _.L.getQueryData([S, e]);
      }
    },
    1909: (e, t, n) => {
      "use strict";
      n.d(t, { Ng: () => h, iN: () => E, yk: () => b });
      var a = n(34629),
        r = n(75844),
        s = n(65946),
        o = n(90626),
        i = n(22837),
        c = n(2160),
        l = n(63556),
        u = n(95695),
        d = n.n(u),
        p = n(52038),
        m = n(61859),
        g = n(91675),
        f = n(73745),
        _ = n(32754);
      let h = class extends o.Component {
        GenerateLanguageOptions() {
          let e = [];
          const {
            fnFilterLanguage: t,
            fnLangHasData: n,
            fnLastUpdateRTime: a,
            fnIsLangSupported: r,
          } = this.props;
          this.props.bAllowUnsetOption &&
            e.push(
              o.createElement(
                "option",
                { key: "langpicker_unset", value: -1 },
                (0, m.we)("#language_selection_none"),
              ),
            );
          let s = new Array();
          const l = this.props.realms || [c.TU.k_ESteamRealmGlobal];
          for (const e of m.A0.GetLanguageListForRealms(l)) {
            if (t && !t(e)) continue;
            const n = (0, i.Lg)(e),
              a = (0, m.we)("#Language_" + n),
              o = Boolean(r) && r(e);
            s.push({ eLang: e, sLocName: a, bSupported: o });
          }
          s.sort((e, t) =>
            e.bSupported != t.bSupported
              ? e.bSupported
                ? -1
                : 1
              : e.sLocName.localeCompare(t.sLocName),
          );
          let u = !1;
          for (const t of s) {
            t.bSupported != u &&
              (e.push(
                o.createElement(
                  "option",
                  {
                    key: t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: d().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, m.we)(
                    t.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (u = t.bSupported));
            const r = n && n(t.eLang),
              s = a && a(t.eLang);
            let i = t.sLocName;
            s &&
              0 !== s &&
              ((i += " "),
              (i += (0, m.we)(
                "#Language_Last_Update",
                (0, m.$z)(s) + " @ " + (0, g.KC)(s, { bForce24HourClock: !1 }),
              ))),
              e.push(
                o.createElement(
                  "option",
                  {
                    key: "langpicker" + t.eLang + (r ? "_hasdata" : ""),
                    value: t.eLang,
                    className: (0, p.A)(
                      { [d().LanguageWithContent]: r },
                      t.bSupported
                        ? d().SupportedLanguage
                        : d().UnsupportedLanguage,
                    ),
                  },
                  i,
                ),
              );
          }
          return e;
        }
        OnLanguageChange(e) {
          const { fnOnLanguageChanged: t, selectedLang: n } = this.props;
          let a = Number.parseInt(e.currentTarget.value);
          a != n && t && t(a);
        }
        render() {
          const { selectedLang: e, bDisabled: t, strTooltip: n } = this.props;
          let a = this.GenerateLanguageOptions();
          return o.createElement(
            _.he,
            { toolTipContent: n },
            o.createElement(
              "select",
              { value: e, onChange: this.OnLanguageChange, disabled: t },
              a,
            ),
          );
        }
      };
      function E(e) {
        const [t, n] = (0, s.q3)(() => [
          l.O.Get().GetHasLocalizationContext(),
          l.O.Get().GetCurEditLanguage(),
        ]);
        return o.createElement(h, {
          selectedLang: n,
          fnLangHasData: l.O.Get().BHasLanguageData,
          fnOnLanguageChanged: l.O.Get().SetCurEditLanguage,
          bDisabled: !t,
          strTooltip: t ? void 0 : (0, m.we)("#Localization_EditorNotInFocus"),
        });
      }
      function b(e) {
        const { fnLangHasData: t } = e;
        o.useEffect(
          () => (
            l.O.Get().SetHasLocalizationContext(!0),
            () => l.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const n = (0, s.q3)(() => {
          const e = [];
          for (let n = 0; n < 31; ++n) e[n] = t && t(n);
          return e;
        });
        return (
          o.useEffect(() => l.O.Get().SetHasLanguage(n), [n]),
          o.createElement(o.Fragment, null)
        );
      }
      (0, a.Cg)([f.oI], h.prototype, "OnLanguageChange", null),
        (h = (0, a.Cg)([r.PA], h));
    },
    94011: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => o });
      var a = n(90626),
        r = n(61859),
        s = n(35050);
      function o() {
        return a.createElement(
          "div",
          { className: s.bordered_live_stream_icon },
          (0, r.we)("#home_page_live_broadcast"),
        );
      }
    },
    88961: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => y });
      var a = n(8527),
        r = n(20194),
        s = n(75233),
        o = n(24484),
        i = n(75515);
      var c = n(63664),
        l = n(39777),
        u = (n(35380), n(90626));
      function d() {
        return (0, r.I)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const e = await (async function () {
              let e = (0, o.Tc)(
                "broadcast_available_for_page",
                "application_config",
              );
              if ((0, i.h7)(e)) {
                const t = new Set();
                return (
                  e.filtered.forEach((e) => {
                    e.appid && t.add(e.appid);
                  }),
                  Array.from(t)
                );
              }
              return [];
            })();
            return new Set(e);
          },
        });
      }
      var p = n(58918),
        m = n(17376);
      const g =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var f = n(18654),
        _ = n.n(f),
        h = n(12155),
        E = n(52038),
        b = n(61859),
        S = n(94011);
      function y(e) {
        const { appids: t, hide_status_banners: n, show_early_access: r } = e,
          { data: o } = (0, p.$Y)(),
          { data: i } = (0, m.F0)(),
          f = t.length > 0 && t.every((e) => o && o.has(e)),
          y = t.length > 0 && t.every((e) => i && i.has(e)),
          I = (function (e) {
            const { data: t } = d(),
              [n, a] = (0, u.useState)(!1),
              r = (0, s.jE)(),
              o = (0, c.eG)();
            return (
              (0, u.useEffect)(() => {
                if (!e || 0 == e.length || !t) return a(!1);
                (async () => {
                  const n = await Promise.all(
                    e.map((e) => r.fetchQuery((0, l.us)(o, { appid: e }))),
                  );
                  a(
                    n.some(
                      (e) =>
                        (e && e.appid && t.has(e.appid)) ||
                        (e?.related_items?.parent_appid &&
                          t.has(e.related_items.parent_appid)),
                    ),
                  );
                })();
              }, [e, o, r, t]),
              n
            );
          })(t),
          C = f && !n,
          L = y && !n,
          A = !n && r;
        return u.createElement(
          "div",
          { className: (0, E.A)(_().CapsuleDecorators, "CapsuleDecorators") },
          C &&
            u.createElement(
              "span",
              { className: (0, E.A)(_().Banner, _().Blue) },
              u.createElement("img", {
                src: (0, a.YJ)(g),
                className: _().LinesImg,
              }),
              (0, b.we)("#Sale_InLibrary"),
            ),
          L &&
            u.createElement(
              "span",
              { className: _().Banner },
              u.createElement(h.qnF, { className: _().LinesImg }),
              (0, b.we)("#Sale_OnWishlist"),
            ),
          A && !C && !L && u.createElement(v, { appids: t }),
          I && u.createElement(S.K, null),
        );
      }
      function v(e) {
        const { appids: t } = e,
          n = (function (e) {
            const [t, n] = (0, u.useState)(!1),
              a = (0, s.jE)(),
              r = (0, c.eG)();
            return (
              (0, u.useEffect)(() => {
                if (!e || 0 == e.length) return n(!1);
                (async () => {
                  const t = await Promise.all(
                    e.map((e) => a.fetchQuery((0, l.us)(r, { appid: e }))),
                  );
                  n(t.some((e) => e && e.is_early_access));
                })();
              }, [e, r, a]),
              t
            );
          })(t);
        return n
          ? u.createElement(
              "span",
              { className: (0, E.A)(_().Banner, _().EarlyAccessGradient) },
              (0, b.we)("#Sale_EarlyAccess"),
            )
          : null;
      }
    },
    72860: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u });
      var a = n(71420),
        r = n(55963),
        s = n(70300),
        o = n(81393),
        i = n(56011),
        c = n(61859),
        l = n(61336);
      function u(e, t, n, u, d, p) {
        if (!n) return;
        if (!(0, s.nz)(e.item_type))
          return void (0, o.wT)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + e.item_type,
          );
        const m = (0, r.wJ)(`${(0, a._)(e, u)}${d ? `?${d}` : ""}`, t);
        return {
          onClick: (e) => {
            let t = (0, i.uX)(e) || window;
            p
              ? p(e)
              : m.startsWith("steam://") || (t.location.href = (0, l.NT)(m));
          },
          onOKActionDescription: (0, c.we)("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    70300: (e, t, n) => {
      "use strict";
      n.d(t, { nz: () => i, oj: () => c, qr: () => o });
      var a = n(90626),
        r = n(81886),
        s = n(29379);
      function o(e) {
        return "bundle" == e
          ? "bundle"
          : "sub" == e
            ? "sub"
            : ((0, r.fp)(e), "app");
      }
      function i(e) {
        return 2 == e ? "bundle" : 1 == e ? "sub" : "app";
      }
      const c = (e) => {
        const { appid: t } = e,
          n = a.createElement(
            "div",
            { className: "ImpressionTrackedElement" },
            e.children,
          );
        return t ? a.createElement(s.A, { appID: t }, n) : n;
      };
    },
    36814: (e, t, n) => {
      "use strict";
      n.d(t, { XC: () => d });
      var a = n(90626),
        r = n(12155),
        s = n(52038);
      n(13871);
      function o(e, t, n, r) {
        a.useEffect(() => {
          const a = (a) => {
            a.key === e &&
              (t(a), n && a.preventDefault(), r && a.stopPropagation());
          };
          return (
            document.addEventListener("keydown", a),
            () => document.removeEventListener("keydown", a)
          );
        }, [e, t, n, r]);
      }
      var i = n(9154),
        c = n(39449),
        l = n.n(c),
        u = n(61859);
      function d() {
        const [e, t] = a.useState(void 0),
          n = a.useCallback(() => t(void 0), []),
          r = a.createElement(
            i.EN,
            { active: void 0 !== e },
            a.createElement(p, { closeModal: n, rgImageURL: e }),
          );
        return [t, r];
      }
      function p(e) {
        const { closeModal: t, rgImageURL: n } = e,
          [r, s] = a.useState(0),
          o = n?.length ?? 0,
          c = a.useCallback(() => {
            s(0 == r ? o - 1 : r - 1);
          }, [r, o]),
          d = a.useCallback(() => {
            s(n && r + 1 >= o ? 0 : r + 1);
          }, [r, n, o]);
        return a.createElement(
          i.eV,
          {
            title: (0, u.we)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: t,
            bHideCloseIcon: !0,
            modalClassName: l().PopupScreenshotModal,
          },
          a.createElement(m, {
            index: r,
            numElements: n?.length || 0,
            fnForward: d,
            fnBackwards: c,
            fnClose: t,
            bCircular: !0,
          }),
          a.createElement(
            "div",
            { className: l().PopupScreenshotContainer },
            a.createElement("img", {
              className: l().PopupScreenshot,
              src: n?.[r],
            }),
          ),
        );
      }
      function m(e) {
        const {
          index: t,
          numElements: n,
          fnForward: i,
          fnBackwards: c,
          fnClose: u,
          bCircular: d,
        } = e;
        o("ArrowLeft", () => c?.(), !0, !0),
          o("Left", () => c?.(), !0, !0),
          o("ArrowRight", () => i?.(), !0, !0),
          o("Right", () => i?.(), !0, !0),
          o("Escape", () => u && u(), !0, !0),
          o("Esc", () => u && u(), !0, !0);
        let p = n > 1;
        return a.createElement(
          "div",
          { className: l().ButtonCtn },
          p &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "div",
                {
                  className: (0, s.A)(
                    l().ButtonIcon,
                    0 !== t || d ? null : l().Disabled,
                  ),
                  onClick: c,
                },
                a.createElement(r.V5W, { angle: 270 }),
              ),
              a.createElement(
                "div",
                {
                  className: (0, s.A)(
                    l().ButtonIcon,
                    t !== n - 1 || d ? null : l().Disabled,
                  ),
                  onClick: i,
                },
                a.createElement(r.V5W, { angle: 90 }),
              ),
            ),
          a.createElement(
            "div",
            { className: l().ButtonIcon, onClick: u },
            a.createElement(r.X, null),
          ),
        );
      }
    },
    54492: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => l });
      var a = n(39777),
        r = n(90626),
        s = n(91822),
        o = n(52038),
        i = n(78327),
        c = n(58855);
      function l(e) {
        const { bAllowOutsideOfDeck: t } = e;
        return (0, i.Qn)() || t ? r.createElement(u, { ...e }) : null;
      }
      function u(e) {
        const { className: t, id: n } = e,
          i = (0, a.qI)(n),
          [l, u] = (0, s.FD)();
        let d = "unknown";
        if (2 == u)
          switch (i.data?.steam_os_compat_category) {
            case 2:
              d = "steamoscompatible";
              break;
            case 1:
              d = "steamosunsupported";
              break;
            case 0:
              d = "steamosunknown";
          }
        else
          switch (i.data?.steam_deck_compat_category) {
            case 3:
              d = "verified";
              break;
            case 2:
              d = "playable";
              break;
            case 1:
              d = "unsupported";
          }
        return r.createElement("div", {
          className: (0, o.A)(c.CompatIcon, "ds_steam_deck_compat", d, t),
        });
      }
    },
    26296: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => c, o: () => i });
      var a = n(90626),
        r = n(61859),
        s = n(67523),
        o = n(41951);
      function i(e) {
        const {
            className: t,
            srcs: n,
            lazyLoad: r,
            width: s,
            height: o,
            alt: i,
            crossOrigin: c,
          } = e,
          [l, u] = a.useState(n.length),
          [d, p] = a.useState(0);
        a.useEffect(() => {
          l != n.length && (u(n.length), p(0));
        }, [l, n.length]);
        const m = a.useCallback(() => {
          e.onImageError && e.onImageError(e.srcs[d]),
            d + 1 < e.srcs.length && p(d + 1);
        }, [d, e]);
        return 0 == n.length
          ? null
          : a.createElement("img", {
              className: t,
              src: n[d],
              crossOrigin: c,
              onError: m,
              loading: r ? "lazy" : void 0,
              width: s,
              height: o,
              alt: i,
            });
      }
      function c(e) {
        const [t, n] = a.useState(!1),
          {
            className: i,
            src: c,
            lazyLoad: l,
            width: u,
            height: d,
            alt: p,
            crossOrigin: m,
          } = e;
        return t
          ? a.createElement(
              "div",
              { className: s.ErrorDiv },
              a.createElement("p", null, (0, r.we)("#Image_ErrorTitle", c)),
              a.createElement(
                "ul",
                null,
                a.createElement("li", null, (0, r.we)("#Image_Error_msg1")),
              ),
              a.createElement("p", null, (0, r.we)("#Image_Error_suggestion")),
            )
          : a.createElement(o.o, {
              className: i,
              src: c,
              onError: () => n(!0),
              crossOrigin: m,
              loading: l ? "lazy" : void 0,
              width: u,
              height: d,
              alt: p,
            });
      }
    },
    41951: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => p });
      var a = n(90626),
        r = n(12155),
        s = n(52038),
        o = n(36814),
        i = n(10224),
        c = n(21038);
      const l = 1.3,
        u = 3,
        d = 256;
      function p(e) {
        const [t, n] = (0, a.useState)(!1),
          [p, m] = (0, a.useState)({
            naturalWidth: 0,
            naturalHeight: 0,
            displayWidth: 0,
            displayHeight: 0,
          }),
          g = (0, a.useRef)(null),
          [f, _] = (0, o.XC)();
        return (
          (0, a.useEffect)(() => {
            if (
              p.naturalWidth > p.displayWidth * l &&
              p.naturalHeight > p.displayHeight * l &&
              p.naturalWidth > d
            ) {
              p.naturalWidth / p.naturalHeight < u && n(!0);
            }
          }, [p]),
          t
            ? a.createElement(
                "span",
                { className: c.PreviewCtn },
                _,
                a.createElement(
                  "span",
                  { className: c.SVG },
                  a.createElement(r.YNO, null),
                ),
                a.createElement("img", {
                  ...e,
                  className: (0, s.A)({
                    ...(e.className && { [e.className]: !0 }),
                  }),
                  onClick: (t) => {
                    e.src && f([e.src]);
                  },
                }),
              )
            : a.createElement("img", {
                ...e,
                ref: g,
                onLoad: (e) => {
                  if (!e.currentTarget.closest("a") && !(0, i.c5)()) {
                    const {
                      naturalWidth: t,
                      naturalHeight: n,
                      width: a,
                      height: r,
                    } = e.currentTarget;
                    m({
                      naturalWidth: t,
                      naturalHeight: n,
                      displayWidth: a,
                      displayHeight: r,
                    });
                  }
                },
              })
        );
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => m, pn: () => f, qx: () => g });
      var a = n(16676),
        r = n(61859),
        s = n(12155),
        o = n(90626),
        i = n(52038),
        c = n(95695),
        l = n(84811),
        u = n(64734),
        d = n(65946),
        p = n(26408);
      function m(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: a,
            toggleMinimized: r,
            className: s,
            children: m,
            elAdditionalButtons: g,
          } = e,
          _ = (0, d.q3)(() => a());
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            {
              className: (0, i.A)(
                s,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            o.createElement(
              "div",
              {
                className: (0, i.A)(
                  c.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && o.createElement(p.o, { tooltip: n }),
            ),
            o.createElement(
              "div",
              { className: u.SectionTitleButtons },
              g,
              o.createElement(f, { bIsMinimized: _, fnToggleMinimize: r }),
            ),
          ),
          !_ && o.createElement(l.tH, null, m),
        );
      }
      function g(e) {
        const [t, n] = o.useState(Boolean(e.bStartMinimized));
        return o.createElement(
          m,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function f(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          i = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return o.createElement(
          a.$n,
          { "data-tooltip-text": (0, r.we)(i), onClick: n },
          e.bIsMinimized
            ? o.createElement(s.hz4, null)
            : o.createElement(s.Xjb, null),
        );
      }
    },
  },
]);
