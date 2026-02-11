/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8590],
  {
    88152: (e) => {
      e.exports = {
        NewPrice: "_3xrKIJ4u3oGwIbDNHLiE3U",
        HigherPrice: "rdMe4z7G3RiS3aOmPBXjp",
        LowerPrice: "HFkBG6GEWlzLQZ3MWCZfy",
      };
    },
    74521: (e, r, o) => {
      "use strict";
      o.r(r), o.d(r, { default: () => W });
      var n = o(90626),
        t = o(92757);
      let s = { PriceEdit: (e) => `/packages/pricing/${e}` };
      var c = o(97058),
        i = o(6813),
        a = o(16666),
        l = o(66051),
        d = o(42475);
      const b = {};
      (b.arabic = () => o.e(9919).then(o.t.bind(o, 19919, 19))),
        (b.brazilian = () => o.e(2067).then(o.t.bind(o, 42067, 19))),
        (b.bulgarian = () => o.e(1420).then(o.t.bind(o, 81420, 19))),
        (b.czech = () => o.e(7898).then(o.t.bind(o, 87898, 19))),
        (b.danish = () => o.e(6366).then(o.t.bind(o, 56366, 19))),
        (b.dutch = () => o.e(6835).then(o.t.bind(o, 66835, 19))),
        (b.english = () => o.e(5265).then(o.t.bind(o, 35265, 19))),
        (b.finnish = () => o.e(9942).then(o.t.bind(o, 69942, 19))),
        (b.french = () => o.e(5687).then(o.t.bind(o, 5687, 19))),
        (b.german = () => o.e(1741).then(o.t.bind(o, 21741, 19))),
        (b.greek = () => o.e(761).then(o.t.bind(o, 20761, 19))),
        (b.hungarian = () => o.e(2928).then(o.t.bind(o, 82928, 19))),
        (b.indonesian = () => o.e(379).then(o.t.bind(o, 10379, 19))),
        (b.italian = () => o.e(1721).then(o.t.bind(o, 61721, 19))),
        (b.japanese = () => o.e(6480).then(o.t.bind(o, 26480, 19))),
        (b.koreana = () => o.e(210).then(o.t.bind(o, 210, 19))),
        (b.latam = () => o.e(7850).then(o.t.bind(o, 77850, 19))),
        (b.norwegian = () => o.e(1141).then(o.t.bind(o, 73522, 19))),
        (b.polish = () => o.e(2066).then(o.t.bind(o, 82066, 19))),
        (b.portuguese = () => o.e(3458).then(o.t.bind(o, 23458, 19))),
        (b.romanian = () => o.e(124).then(o.t.bind(o, 124, 19))),
        (b.russian = () => o.e(1356).then(o.t.bind(o, 71356, 19))),
        (b.schinese = () => o.e(4943).then(o.t.bind(o, 64943, 19))),
        (b.spanish = () => o.e(4553).then(o.t.bind(o, 54553, 19))),
        (b.swedish = () => o.e(2808).then(o.t.bind(o, 42808, 19))),
        (b.tchinese = () => o.e(4212).then(o.t.bind(o, 44212, 19))),
        (b.thai = () => o.e(5793).then(o.t.bind(o, 15793, 19))),
        (b.turkish = () => o.e(8441).then(o.t.bind(o, 48441, 19))),
        (b.ukrainian = () => o.e(5875).then(o.t.bind(o, 95875, 19))),
        (b.vietnamese = () => o.e(5696).then(o.t.bind(o, 55696, 19)));
      const u = (0, d.l)(async function (e) {
        if (b[e]) return b[e]();
      });
      var y = o(87864),
        S = o(72255),
        C = o(88267),
        m = o(29848),
        h = o(48174),
        p = o(83800);
      const g = {};
      (g.arabic = () => o.e(898).then(o.t.bind(o, 10898, 19))),
        (g.brazilian = () => o.e(8916).then(o.t.bind(o, 68916, 19))),
        (g.bulgarian = () => o.e(5603).then(o.t.bind(o, 25603, 19))),
        (g.czech = () => o.e(3697).then(o.t.bind(o, 3697, 19))),
        (g.danish = () => o.e(9875).then(o.t.bind(o, 89875, 19))),
        (g.dutch = () => o.e(8156).then(o.t.bind(o, 18156, 19))),
        (g.english = () => o.e(8314).then(o.t.bind(o, 98314, 19))),
        (g.finnish = () => o.e(8881).then(o.t.bind(o, 98881, 19))),
        (g.french = () => o.e(5162).then(o.t.bind(o, 5162, 19))),
        (g.german = () => o.e(9044).then(o.t.bind(o, 29044, 19))),
        (g.greek = () => o.e(3462).then(o.t.bind(o, 83462, 19))),
        (g.hungarian = () => o.e(7855).then(o.t.bind(o, 97855, 19))),
        (g.indonesian = () => o.e(4726).then(o.t.bind(o, 44726, 19))),
        (g.italian = () => o.e(1762).then(o.t.bind(o, 1762, 19))),
        (g.japanese = () => o.e(9181).then(o.t.bind(o, 29181, 19))),
        (g.koreana = () => o.e(5629).then(o.t.bind(o, 85629, 19))),
        (g.latam = () => o.e(9493).then(o.t.bind(o, 69493, 19))),
        (g.norwegian = () => o.e(8982).then(o.t.bind(o, 8982, 19))),
        (g.polish = () => o.e(5091).then(o.t.bind(o, 75091, 19))),
        (g.portuguese = () => o.e(3615).then(o.t.bind(o, 3615, 19))),
        (g.romanian = () => o.e(3357).then(o.t.bind(o, 53357, 19))),
        (g.russian = () => o.e(7671).then(o.t.bind(o, 47671, 19))),
        (g.schinese = () => o.e(3022).then(o.t.bind(o, 33022, 19))),
        (g.spanish = () => o.e(8434).then(o.t.bind(o, 18434, 19))),
        (g.swedish = () => o.e(4859).then(o.t.bind(o, 14859, 19))),
        (g.tchinese = () => o.e(7061).then(o.t.bind(o, 17061, 19))),
        (g.thai = () => o.e(7624).then(o.t.bind(o, 57624, 19))),
        (g.turkish = () => o.e(3898).then(o.t.bind(o, 83898, 19))),
        (g.ukrainian = () => o.e(1916).then(o.t.bind(o, 1916, 19))),
        (g.vietnamese = () => o.e(8573).then(o.t.bind(o, 68573, 19)));
      const E = (0, d.l)(async function (e) {
        if (g[e]) return g[e]();
      });
      var f = o(26408);
      function k(e) {
        return (
          (r = e.getValue()),
          E.Localize(`#CurrencyCodeDescription_${(0, S.M1)(r)}`)
        );
        var r;
      }
      function _(e) {
        const r = e.getValue(),
          o = (0, S.mG)(r),
          t = E.Localize(`#Region_Pricing_Tooltip_${o}`);
        return n.createElement(
          "span",
          null,
          o,
          " ",
          n.createElement(f.o, { tooltip: t }),
        );
      }
      var P = o(87700),
        A = o(17084),
        I = o(81393),
        R = o(52038),
        D = o(61859),
        w = o(30470),
        F = o(88152),
        v = o.n(F);
      const U = (0, a.FB)();
      function O(e) {
        const { packageID: r } = e,
          o = (0, h.cT)(),
          {
            rgCurrencyRows: t,
            rgRegionRows: s,
            rgCountryOverrideRows: c,
            bHasPriceProposal: i,
          } = (function (e, r) {
            const o = (0, P.Bb)();
            return (0, n.useMemo)(() => {
              let n = new Array(),
                t = new Array(),
                s = new Array(),
                c = !1;
              if (e) {
                const i = (0, S.pd)(C.AI.k_ECurrencyCodeUSD),
                  a = (0, A.Dl)(r, i) || (0, A.Oc)(r, i) || (0, A.mv)(r, i);
                for (
                  let t = C.AI.k_ECurrencyCodeUSD;
                  t < C.AI.k_ECurrencyCodeMax;
                  ++t
                ) {
                  if (!e.BIsSupportCurrencyAndOrRegion(t)) continue;
                  const s = (0, S.pd)(t).toUpperCase(),
                    i = (0, A.Oc)(r, s);
                  n.push({
                    eCurrencyCode: t,
                    eRegionCode: void 0,
                    strCountryOverride: void 0,
                    nPublishedPrice: (0, A.mv)(r, s),
                    nProposedPrice: i,
                    nLocalPrice: (0, A.Dl)(r, s),
                    nSuggestedPrice: e.GetScaledRecommendedPrice(
                      a,
                      t,
                      void 0,
                      o,
                    ).price,
                  }),
                    (c ||= i > 0);
                }
                for (
                  let n = m.R.k_ERegionCodeCIS;
                  n < m.R.k_ERegionCodeMax;
                  ++n
                ) {
                  if (
                    !e.BIsSupportCurrencyAndOrRegion(C.AI.k_ECurrencyCodeUSD, n)
                  )
                    continue;
                  const s = (0, S.pd)(C.AI.k_ECurrencyCodeUSD, n).toUpperCase(),
                    i = (0, A.Oc)(r, s);
                  t.push({
                    eCurrencyCode: C.AI.k_ECurrencyCodeUSD,
                    eRegionCode: n,
                    strCountryOverride: void 0,
                    nPublishedPrice: (0, A.mv)(r, s),
                    nProposedPrice: i,
                    nLocalPrice: (0, A.Dl)(r, s),
                    nSuggestedPrice: e.GetScaledRecommendedPrice(
                      a,
                      C.AI.k_ECurrencyCodeUSD,
                      n,
                      o,
                    ).price,
                  }),
                    (c ||= i > 0);
                }
                const l = (0, A.Y2)(r);
                l.length > 0 &&
                  l.forEach((e) => {
                    const o = (0, S.ei)(e.slice(0, 3)),
                      n = e.slice(4, 6),
                      t = (0, S.rt)(n);
                    (0, I.wT)(
                      o == t,
                      `Unexpected currency ${o} for country ${n} when expecting ${t} `,
                    );
                    const i = (0, A.Oc)(r, e);
                    s.push({
                      eCurrencyCode: o,
                      eRegionCode: void 0,
                      strCountryOverride: n,
                      nPublishedPrice: (0, A.oL)(r, e),
                      nProposedPrice: i,
                      nLocalPrice: (0, A.Dl)(r, e),
                      nSuggestedPrice: void 0,
                    }),
                      (c ||= i > 0);
                  });
              }
              return {
                rgCurrencyRows: n,
                rgRegionRows: t,
                rgCountryOverrideRows: s,
                bHasPriceProposal: c,
              };
            }, [e, r, o]);
          })(o, Number.parseInt(r)),
          a = [
            U.accessor("nPublishedPrice", {
              header: (0, D.we)("#PackagePricing_Col_CurPrice"),
              cell: x,
            }),
            U.accessor("nProposedPrice", {
              header: (0, D.we)("#PackagePricing_Col_Proposal"),
              cell: i ? M : $,
            }),
          ];
        return "dev" !== w.TS.WEB_UNIVERSE || 0 == t.length || 0 == s.length
          ? null
          : n.createElement(
              n.Fragment,
              null,
              n.createElement(p.J, null),
              n.createElement(l.k, {
                data: t,
                columns: [
                  U.accessor("eCurrencyCode", {
                    header: (0, D.we)("#PackagePricing_Col_Currency"),
                    cell: k,
                  }),
                  ...a,
                ],
                getRowKey: (e, r) => `${r.eCurrencyCode}`,
                nItemHeight: 20,
              }),
              n.createElement(l.k, {
                data: s,
                columns: [
                  U.accessor("eRegionCode", {
                    header: (0, D.we)("#PackagePricing_Col_Region"),
                    cell: _,
                  }),
                  U.accessor("eCurrencyCode", {
                    header: (0, D.we)("#PackagePricing_Col_Currency"),
                    cell: k,
                  }),
                  ...a,
                ],
                getRowKey: (e, r) => `${r.eRegionCode}`,
                nItemHeight: 20,
              }),
              c.length > 0 &&
                n.createElement(l.k, {
                  data: c,
                  columns: [
                    U.accessor("strCountryOverride", {
                      header: (0, D.we)("#PackagePricing_Col_Country"),
                      cell: T,
                    }),
                    U.accessor("eCurrencyCode", {
                      header: (0, D.we)("#PackagePricing_Col_Currency"),
                      cell: k,
                    }),
                    ...a,
                  ],
                  getRowKey: (e, r) => `${r.strCountryOverride}`,
                  nItemHeight: 20,
                }),
            );
      }
      function x(e) {
        return -1 != e.getValue() && e.getValue()
          ? (0, y.x)(e.getValue(), e.row.original.eCurrencyCode)
          : "--";
      }
      function M(e) {
        const r = e.row.original;
        if (-1 == r.nProposedPrice || !r.nProposedPrice) return "--";
        const o = !r.nPublishedPrice;
        return n.createElement(
          "span",
          {
            className: (0, R.A)({
              [v().NewPrice]: o,
              [v().HigherPrice]: !o && r.nProposedPrice > r.nPublishedPrice,
              [v().LowerPrice]: !o && r.nProposedPrice < r.nPublishedPrice,
            }),
          },
          (0, y.x)(r.nProposedPrice, r.eCurrencyCode),
        );
      }
      function $(e) {
        return n.createElement("div", null);
      }
      function T(e) {
        return (
          (r = e.row.original.strCountryOverride),
          u.Localize(`#Steam_Country_${r}`)
        );
        var r;
      }
      function W(e) {
        return n.createElement(
          t.dO,
          null,
          n.createElement(
            P.jY,
            null,
            n.createElement(
              t.qh,
              { path: s.PriceEdit(":packageid") },
              n.createElement(i.X, {
                config: {
                  "packageadmin-price-editor": (e) =>
                    n.createElement(O, { ...e }),
                },
              }),
            ),
            n.createElement(t.qh, { component: c.a }),
          ),
        );
      }
    },
    87864: (e, r, o) => {
      "use strict";
      o.d(r, { x: () => c });
      var n = o(88267);
      const t = {
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
        s = {
          strSymbol: "",
          bSuffixSymbol: !1,
          bSpaceForSymbol: !1,
          bWholeUnitsOnly: !1,
          eCurrency: n.AI.k_ECurrencyCodeInvalid,
          strDecimalSymbol: ".",
          strThousandsSeparator: ",",
        };
      function c(e, r) {
        const o = (function (e) {
            return { ...s, ...t[e], eCurrency: e };
          })(r),
          {
            strSymbol: n,
            bSuffixSymbol: c,
            bSpaceForSymbol: i,
            bWholeUnitsOnly: a,
            strDecimalSymbol: l,
            strThousandsSeparator: d,
          } = o,
          b = e < 0,
          u = a && e % 100 == 0;
        b && (e = -e);
        const y = [];
        for (let r = 0; r < 2; r++)
          u || y.push(e % 10), (e = Math.floor(e / 10));
        !u && l && y.push(l);
        let S = 0;
        do {
          S++ % 3 == 0 && S > 2 && d && y.push(d),
            y.push(e % 10),
            (e = Math.floor(e / 10));
        } while (e > 0);
        const C = y.reverse().join(""),
          m = i ? " " : "",
          h = b ? "-" : "";
        return c ? `${h}${C}${m}${n}` : `${h}${n}${m}${C}`;
      }
    },
    83800: (e, r, o) => {
      "use strict";
      o.d(r, { J: () => n });
      o(90626);
      const n = (e) => null;
    },
    68797: (e, r, o) => {
      "use strict";
      o.d(r, { H: () => c });
      var n = o(41735),
        t = o.n(n),
        s = o(56545);
      function c(e) {
        if (t().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof s.w)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
  },
]);
