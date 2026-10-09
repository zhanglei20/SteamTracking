/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [59352],
    {
      55298: (ae, R, a) => {
        "use strict";
        a.d(R, { YA: () => P, p: () => v, qh: () => t });
        var y = a(72604),
          L = a(20194),
          c = a(41735),
          f = a.n(c),
          i = a(3166);
        function t() {
          const z = (0, L.I)({
            queryKey: ["useValveAccounts"],
            queryFn: async () => {
              const w = `${i.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
                S = await f().get(w);
              return S?.status == 200 && S.data?.success == y.R
                ? S.data.admins
                : (console.error("ValveAccounts:", S?.status), []);
            },
          });
          return z.isLoading ? null : z.data;
        }
        function v(z) {
          return t()?.find((S) => S.id == z);
        }
        function P(z, w) {
          return z.getQueryData(["useValveAccounts"])?.find((T) => T.id === w);
        }
      },
      65532: (ae, R, a) => {
        "use strict";
        a.d(R, { DP: () => t, Gb: () => i, iS: () => P, sM: () => v });
        var y = a(7850),
          L = a(78430),
          c = a.n(L),
          f = a(24642);
        function i(z) {
          const w = z.getValue();
          return w?.length > 0
            ? (0, y.jsx)(t, { text: w, regExp: /\r\n|\r|\n/ })
            : "";
        }
        function t(z) {
          const { text: w, regExp: S } = z;
          if (!w) return (0, y.jsx)(y.Fragment, {});
          const T = w.split(S);
          return (0, y.jsx)("div", {
            className: c().FeedbackText,
            children: T.map((g, K) =>
              (0, y.jsxs)(
                "span",
                { children: [g, K < T.length - 1 && (0, y.jsx)("br", {})] },
                K,
              ),
            ),
          });
        }
        function v(z) {
          return Number.parseInt(z.getValue()) ? "yes" : "no";
        }
        function P(z) {
          const w = Number.parseInt(z.getValue());
          return (0, f.D)(w);
        }
      },
      40299: (ae, R, a) => {
        "use strict";
        a.d(R, { K: () => L });
        var y = a(22880);
        function L(c, f, i) {
          const t = [],
            v = i.map((P) => P.header);
          t.push(v);
          for (const P of f) {
            const z = [];
            for (const w of i) {
              const S = P[w.accessorKey];
              z.push(S != null ? S.toString() : "");
            }
            t.push(z);
          }
          y.g.WriteCSVToFile(t, c);
        }
      },
      91916: (ae, R, a) => {
        "use strict";
        a.d(R, {
          MY: () => T,
          UA: () => $,
          Yd: () => A,
          qG: () => U,
          rN: () => Z,
          vh: () => _,
        });
        var y = a(41735),
          L = a.n(y),
          c = a(90626),
          f = a(99412),
          i = a(72604),
          t = a(34592),
          v = a(3166),
          P = a(27066),
          z = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          S = (G, j, x, E) => {
            for (
              var I = E > 1 ? void 0 : E ? w(j, x) : j, m = G.length - 1, O;
              m >= 0;
              m--
            )
              (O = G[m]) && (I = (E ? O(j, x, I) : O(I)) || I);
            return E && I && z(j, x, I), I;
          };
        function T() {
          return v.TS.EUNIVERSE == f.Rv ? 12 : 1;
        }
        const g = class ze {
          m_mapOptInToPartners = new Map();
          m_mapPromises = new Map();
          GetPartnerInfo(j) {
            return this.m_mapOptInToPartners.get(j);
          }
          BHasPartnerInfoLoad(j) {
            return this.m_mapOptInToPartners.has(j);
          }
          async FindPartnerByName(j) {
            return (
              this.m_mapPromises.has(j) ||
                this.m_mapPromises.set(j, this.InternalFindPartnerByName(j)),
              this.m_mapPromises.get(j)
            );
          }
          async InternalFindPartnerByName(j) {
            const x = new Array();
            try {
              const E = v.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
                I = {
                  sessionid: (0, v.KC)(),
                  searchtext: j,
                  origin: self.origin,
                },
                m = await L().get(E, { params: I });
              m?.status == 200 && m?.data?.success == i.R
                ? m.data.publishers.forEach((O) => {
                    const p = {
                      partnerid: O.publisherid,
                      name: O.publishername,
                      partner_url:
                        v.TS.PARTNER_BASE_URL +
                        `pub/publisher/${O.publisherid}/`,
                      contacts: O.contacts,
                    };
                    this.m_mapOptInToPartners.set(O.publisherid, p), x.push(p);
                  })
                : console.log(
                    `CPartnerInfoStore.FindPartnerByName failed with status ${m?.status} eresult ${m?.data?.success} and msg ${m?.data?.msg}`,
                  );
            } catch (E) {
              const I = (0, t.H)(E);
              console.error(
                "CPartnerInfoStore.FindPartnerByName failed add: " +
                  I.strErrorMsg,
                I,
              );
            }
            return x;
          }
          async LoadPartnerInfo(j) {
            if (this.m_mapOptInToPartners.has(j))
              return this.m_mapOptInToPartners.get(j);
            const x = await this.FindPartnerByName("" + j);
            return (
              this.BHasPartnerInfoLoad(j) ||
                this.m_mapOptInToPartners.set(j, null),
              this.m_mapOptInToPartners.get(j)
            );
          }
          async LoadMultiplePartnerInfo(j) {
            if (!j || j.length == 0) return [];
            const x = j.filter((E) => !this.m_mapOptInToPartners.has(E));
            return (
              x.length > 0 && (await this.FindPartnerByName("" + x.join(","))),
              j.map((E) => this.m_mapOptInToPartners.get(E)).filter(Boolean)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              ze.s_Singleton || (ze.s_Singleton = new ze()), ze.s_Singleton
            );
          }
          constructor() {
            let j = JSON.parse(
              JSON.stringify((0, v.Tc)("partner_info", "application_config")),
            );
            this.ValidateStoreDefault(j) &&
              j.forEach((x) => this.m_mapOptInToPartners.set(x.partnerid, x));
          }
          ValidateStoreDefault(j) {
            const x = j;
            return x &&
              Array.isArray(x) &&
              x.length > 0 &&
              typeof x[0] == "object"
              ? typeof x[0].partnerid == "number" &&
                  typeof x[0].name == "string"
              : !1;
          }
        };
        S([P.o], g.prototype, "FindPartnerByName", 1);
        let K = g;
        function _(G) {
          const [j, x] = (0, c.useState)(!1);
          return (
            (0, c.useEffect)(() => {
              !j &&
                G?.length > 0 &&
                K.Get()
                  .LoadMultiplePartnerInfo(G)
                  .then(() => x(!0));
            }, [G, j]),
            j
          );
        }
        function $(G) {
          const [j, x] = c.useState(() => K.Get().GetPartnerInfo(G));
          return (
            c.useEffect(() => {
              !K.Get().BHasPartnerInfoLoad(G) && G > 0
                ? K.Get()
                    .LoadPartnerInfo(G)
                    .then((E) => x(E))
                : K.Get().BHasPartnerInfoLoad(G) &&
                  j?.partnerid != G &&
                  x(K.Get().GetPartnerInfo(G));
            }, [G, j]),
            [j]
          );
        }
        function Z() {
          return { fnFindPartnerByName: K.Get().FindPartnerByName };
        }
        function A(G) {
          return K.Get().GetPartnerInfo(G);
        }
        function U(G) {
          return K.Get().LoadPartnerInfo(G);
        }
      },
      40772: (ae, R, a) => {
        "use strict";
        a.d(R, {
          Gl: () => K,
          N6: () => _,
          PQ: () => g,
          Z4: () => $,
          fI: () => Z,
        });
        var y = a(41735),
          L = a.n(y),
          c = a(90626),
          f = a(20194),
          i = a(75233),
          t = a(72604),
          v = a(3166),
          P = a(20117),
          z = a(41635);
        class w {
          m_mapPartnerToContactInfo = new Map();
          m_mapPromisePartnerLoading = new Map();
          async FetchValvePartnerContacts(U) {
            const G =
                v.TS.PARTNER_BASE_URL + "actions/ajaxgetpartnervalvecontacts",
              j = { sessionid: (0, v.KC)(), strPartnerIDs: U.join(",") },
              x = await L().get(G, { params: j, withCredentials: !0 });
            return x?.status == 200 && x?.data.success == t.R
              ? (x.data.contacts.forEach((E) => {
                  this.m_mapPartnerToContactInfo.has(E.partnerid) ||
                    this.m_mapPartnerToContactInfo.set(E.partnerid, []),
                    this.m_mapPartnerToContactInfo.get(E.partnerid).push(E);
                }),
                x.data.contacts)
              : [];
          }
          async LoadValvePartnerContact(U) {
            return U
              ? this.m_mapPartnerToContactInfo.has(U)
                ? this.m_mapPartnerToContactInfo.get(U)
                : (this.m_mapPromisePartnerLoading.has(U) ||
                    this.m_mapPromisePartnerLoading.set(
                      U,
                      this.InternalLoadValvePartnerContact(U),
                    ),
                  this.m_mapPromisePartnerLoading.get(U))
              : [];
          }
          async InternalLoadValvePartnerContact(U) {
            return this.FetchValvePartnerContacts([U]);
          }
          async InternalLoadMultiplePartnerContact(U) {
            return this.FetchValvePartnerContacts(U);
          }
          GetPartnerContact(U) {
            return this.m_mapPartnerToContactInfo.get(U);
          }
          GetPartnerContactAccountsByFilter(U, G, j) {
            const x = this.m_mapPartnerToContactInfo.get(U);
            if (x?.length > 0) {
              const E = x
                .filter((I) => !I.appid || I.appid == G)
                .filter(
                  (I) =>
                    !j ||
                    j == "any" ||
                    (j == "business" && I.is_business_contact) ||
                    (j == "tech" && I.is_tech_contact),
                )
                .map((I) => new P.b2(I.steamid).GetAccountID());
              return z.Ew(E);
            }
            return [];
          }
          static s_Singleton;
          static Get() {
            return (
              w.s_Singleton ||
                ((w.s_Singleton = new w()), w.s_Singleton.Init()),
              w.s_Singleton
            );
          }
          Init() {
            const U = (0, v.Fd)(
              "partner_valve_contact_list",
              "application_config",
            );
            U &&
              U.forEach((G) => {
                this.m_mapPartnerToContactInfo.has(G.partnerid)
                  ? this.m_mapPartnerToContactInfo.get(G.partnerid).push(G)
                  : this.m_mapPartnerToContactInfo.set(G.partnerid, [G]);
              });
          }
        }
        function S(A) {
          return ["PartnerValveContactByPartnerID", A];
        }
        function T(A) {
          const { data: U, isLoading: G } = (0, f.I)({
            queryKey: S(A),
            queryFn: async () => w.Get().LoadValvePartnerContact(A),
          });
          return G ? null : U;
        }
        function g(A, U) {
          return A.prefetchQuery({
            queryKey: S(U),
            queryFn: async () => w.Get().LoadValvePartnerContact(U),
          });
        }
        function K(A) {
          return w.Get().GetPartnerContact(A);
        }
        function _(A, U, G) {
          return w.Get().GetPartnerContactAccountsByFilter(A, U, G);
        }
        function $(A, U, G) {
          const [j, x] = (0, c.useState)(null),
            E = T(A);
          return (
            (0, c.useEffect)(() => {
              E && x(w.Get().GetPartnerContactAccountsByFilter(A, U, G));
            }, [E, U, G, A]),
            j
          );
        }
        function Z(A) {
          const U = (0, i.jE)();
          return (0, f.I)({
            queryKey: ["multiloadpartnerconatact", ...(A || [])],
            queryFn: async () => {
              const G = await w.Get().InternalLoadMultiplePartnerContact(A);
              return (
                A.forEach((j) => {
                  const x = G.filter((E) => E.partnerid == j);
                  U.setQueryData(S(j), x);
                }),
                G
              );
            },
            enabled: !!(A && A.length > 0),
          });
        }
      },
      25518: (ae, R, a) => {
        "use strict";
        a.d(R, { Kl: () => y, Yj: () => z, iH: () => L, zV: () => w });
        const y = [
            "p",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "smalltext",
            "b",
            "u",
            "hr",
            "i",
            "emoticon",
            "dynamiclink",
            "img",
            "strike",
            "spoiler",
            "noparse",
            "url",
            "list",
            "olist",
            "*",
            "quote",
            "pullquote",
            "code",
            "table",
            "tr",
            "td",
            "th",
            "carousel",
            "previewyoutube",
            "looping_media",
            "roomeffect",
            "sticker",
            "price",
            "pricesavings",
            "trailer",
            "speaker",
            "doclink",
            "video",
            "vod",
            "youtubeorvideo",
            "giveawayeligible",
            "claimitem",
            "packagepurchaseable",
            "actiondialog",
            "uploadfilebutton",
            "docimg",
            "meetsteamsessiongroup",
            "meetsteamscheduleview",
            "center",
            "c",
            "expand",
            "remindme",
            "calendarevent",
            "color",
            "bgcolor",
            "userpolls",
          ],
          L = [
            "h1",
            "h2",
            "h3",
            "b",
            "u",
            "i",
            "strike",
            "spoiler",
            "noparse",
            "url",
          ],
          c = [
            "img",
            "carousel",
            "previewyoutube",
            "looping_media",
            "roomeffect",
            "video",
            "vod",
            "trailer",
            "youtubeorvideo",
            "docimg",
          ],
          f = y.filter((S) => !c.includes(S)),
          i = null;
        function t(S) {
          const { bIncludeMedia: T = !1, bIncludeValveOnly: g = !1 } = S,
            K = new Set();
          return (
            T || c.forEach((_) => K.add(_)),
            g || i.forEach((_) => K.add(_)),
            y.filter((_) => !K.has(_))
          );
        }
        let v;
        function P(S) {
          return S
            ? S.map((T) => (T == "*" ? "\\*" : T)).join("|")
            : (v || (v = P(y)), v);
        }
        function z(S, T = null, g = " ") {
          const K = new RegExp(
            "\\[(" + P(T) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
            "gi",
          );
          return S.replace(K, g);
        }
        function w(S, T = null, g = "") {
          const K = "\\[\\/?(?:" + P(T) + "){1,}.*?]";
          return S.replace(new RegExp(K, "gi"), g);
        }
      },
      29630: (ae, R, a) => {
        "use strict";
        a.d(R, { zU: () => I, z5: () => j });
        var y = a(38340),
          L = a(9046),
          c = a(99412),
          f = a(72604),
          i = a(7742),
          t = a(72849),
          v = a(76559),
          P = a(71742),
          z = a(34592),
          w = a(51746),
          S = a(72609),
          T = a(7850),
          g = a(90626);
        function K(m, O) {
          return `${m}/${O}`;
        }
        const _ = {},
          $ = g.createContext(_);
        function Z(m) {
          const { resolutions: O, children: p } = m;
          return jsx($.Provider, { value: O, children: p });
        }
        function A() {
          return g.useContext($);
        }
        const U = new RegExp(
          `${y.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function G(m) {
          const O = [],
            p = new Set();
          for (const b of m.matchAll(U)) {
            const M = Number.parseInt(b[1]),
              C = b[2],
              X = K(M, C);
            M > 0 &&
              !p.has(X) &&
              (p.add(X), O.push({ clanAccountID: M, hashAndExt: C }));
          }
          return O;
        }
        function j(m, O, p = 0) {
          const b = A();
          return E(m, O, p, b);
        }
        async function x(m, O, p = 0) {
          return E(m, O, p);
        }
        function E(m, O, p = 0, b) {
          if (!m || m.length == 0) return null;
          if (m?.startsWith(y.lw)) return I.ReplacementTokenToClanImageURL(m);
          if (m?.startsWith(y.eg)) {
            const M = I.GetBaseURL(),
              C = m.substring(y.eg.length + 1),
              X = parseInt(C.substring(0, C.indexOf("/"))),
              te = C.substring(C.indexOf("/") + 1),
              Y = I.GenerateURLFromHashAndExt(X, te);
            if (b?.[K(X, te)] === !1) return Y;
            const u = I.GetLocalizedClanImageFileNames(te, O).map(
              (d) => M + X + "/" + d + "?t=" + p,
            );
            return u.push(Y), u;
          }
          return m;
        }
        const I = {
          GetBaseURL() {
            return `${S.TS.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${S.TS.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(m) {
            return (
              (m = m.replace(y.lw, this.GetBaseURL())),
              m.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(m) {
            const p =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                m,
              );
            return p?.groups
              ? [p.groups.filename, parseInt(p.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(m) {
            return (
              (m.file_type != null ? (0, w.EG)(m.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(m) {
            return m ? m.image_hash + this.GetExtensionString(m) : null;
          },
          GetThumbHashAndExt(m) {
            return m ? m.thumbnail_hash + this.GetExtensionString(m) : null;
          },
          GetHashFromHashAndExt(m) {
            let O = m.substring(m.lastIndexOf("."));
            return m.substring(0, m.length - O.length);
          },
          GetExtStringFromHashAndExt(m) {
            return m.substring(m.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(m, O) {
            if (O == null) return [];
            const p = this.GetHashFromHashAndExt(m),
              b = this.GetExtStringFromHashAndExt(m),
              M = [p + "/" + (0, c.LgB)(O) + b];
            return (
              O == c.Pn1 && M.push(p + "/" + (0, c.x6o)((0, c.LgB)(O)) + b), M
            );
          },
          GenerateURLFromHashAndExt(m, O, p = L.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              m,
              O,
              p,
              c.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(m, O, p = L.wI.full, b, M) {
            m instanceof v.b && (m = m.GetAccountID());
            let C = this.GetBaseURL();
            const X = b != null && b != c.xPp;
            if (p == L.wI.full && !X) return C + m + "/" + O;
            {
              let te = O.substring(O.lastIndexOf(".")),
                Y = O.substring(0, O.length - te.length);
              return !X || b == c.Bhc || M != "localized_image_group"
                ? C + m + "/" + Y + p + te
                : C + m + "/" + Y + "/" + (0, c.x6o)((0, c.LgB)(b)) + te;
            }
          },
          GetHashAndExtFromURL(m) {
            let O = this.GetBaseURL();
            return !m?.startsWith(O) ||
              ((m = m.substring(O.length)), m.indexOf("/") == -1)
              ? null
              : ((m = m.substring(m.indexOf("/") + 1)), m);
          },
          GenerateEditableURLFromHashAndExt(m, O, p) {
            let b =
              S.TS.COMMUNITY_BASE_URL +
              "gid/" +
              m.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              O;
            return p && (b += "&lang=" + p), b;
          },
          GetMimeType(m) {
            return (0, w.ab)(m);
          },
          async AsyncGetImageResolution(m, O, p, b, M) {
            const C = O + this.GetExtensionString({ file_type: p }),
              X = this.GenerateEditableURLFromHashAndExt(m, C);
            return await this.AsyncGetImageResolutionInternal(X, b, M);
          },
          async AsyncGetImageResolutionInternal(m, O, p) {
            const b = (0, i.x0)();
            let M = new Image();
            (M.crossOrigin = "anonymous"),
              (M.onerror = (Y) => {
                const u = { success: f.zi };
                p ||
                  ((u.err_msg =
                    "Load fail on url " +
                    m +
                    " with error: " +
                    (0, z.H)(Y).strErrorMsg),
                  console.error(u.err_msg)),
                  (u.success = f.zi),
                  b.resolve(u);
              }),
              (M.onload = () => {
                const Y = { success: f.zi };
                if (
                  ((Y.width = M.width),
                  (Y.height = M.height),
                  !(M.width > 0) || !(M.height > 0))
                ) {
                  (0, P.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + m,
                  ),
                    (Y.err_msg = "No resolution reported for url " + m),
                    b.resolve(Y);
                  return;
                }
                (Y.success = f.R), b.resolve(Y);
              }),
              (M.src = m),
              O.token.promise.catch(() => {
                (M.onload = () => {}),
                  (M.onerror = () => {}),
                  b.resolve({ success: f.e9 });
              });
            let C;
            const X = new Promise((Y, u) => {
              C = setTimeout(() => u(), 1e4);
            });
            let te;
            try {
              te = await Promise.race([X, b.promise]);
            } catch {
              te = { success: f._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(C);
            }
            return te;
          },
          BIsClanImageVideo(m) {
            return m.file_type == t.bg.nn || m.file_type == t.bg.pJ;
          },
        };
      },
      9046: (ae, R, a) => {
        "use strict";
        a.d(R, { pb: () => c, wI: () => L });
        class y {
          imageid;
          image_hash;
          thumbnail_hash;
          file_type;
          file_name;
          clanAccountID;
          url;
          thumb_url;
          uploaded_time;
          loc_group_id;
        }
        var L = ((f) => (
          (f.full = ""),
          (f.background_main = "_960x311"),
          (f.background_mini = "_480x156"),
          (f.capsule_main = "_400x225"),
          (f.spotlight_main = "_1054x230"),
          f
        ))(L || {});
        const c = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
      },
      54357: (ae, R, a) => {
        "use strict";
        a.d(R, { B: () => z });
        var y = a(7850),
          L = a(90626);
        function c(S) {
          const [T, g] = useState(!1);
          return (
            useEffect(() => {
              startTransition(() => g(!0));
            }, []),
            jsx(f.Provider, { value: T, children: S.children })
          );
        }
        const f = (0, L.createContext)(!1);
        function i() {
          return (0, L.useContext)(f);
        }
        const t = Intl.DateTimeFormat().resolvedOptions().timeZone,
          v =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((S) => S.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          P = v && decodeURIComponent(v);
        function z() {
          return i() ? t : (P ?? t);
        }
        function w() {
          "document" in globalThis &&
            (document.cookie = `timezoneName=${t};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        w();
      },
      64165: (ae, R, a) => {
        "use strict";
        a.d(R, { n: () => L, s: () => c });
        var y = a(50974);
        function L(f, i, t) {
          return f == y.wv
            ? `charts/topnewreleases/${i}`
            : f == y.yT
              ? `charts/bestofyear/${i}`
              : t
                ? `sale/${i}`
                : `curator/${f}/sale/${i}`;
        }
        function c(f, i) {
          return L(f, "", i).startsWith("curator/");
        }
      },
      16369: (ae, R, a) => {
        "use strict";
        a.d(R, { H: () => c });
        var y = a(99412),
          L = a(72609);
        const c = () => (L.TS.EUNIVERSE === y.Rv ? 2581 : 45267781);
      },
      69909: (ae, R, a) => {
        "use strict";
        a.d(R, {
          Lc: () => G,
          Mr: () => O,
          _t: () => x,
          ee: () => A,
          hh: () => w,
          mG: () => _,
          my: () => T,
          rF: () => I,
        });
        var y = a(16936),
          L = a(54357),
          c = a(20194),
          f = a(16369),
          i = a(36174),
          t = a(65946),
          v = a(92264),
          P = a(87937),
          z = a.n(P);
        const w = "America/Los_Angeles";
        function S(p, b) {
          return {
            queryKey: g(p, b),
            queryFn: () => (0, y.t3)(b),
            enabled: (0, f.H)() == p,
            staleTime: i.Kp.PerMinute * 10,
          };
        }
        function T(p, b) {
          return (0, c.I)(S(p, b));
        }
        const g = (p, b) => ["useMeetSteamGetAvailability", p, b];
        function K(p, b, M) {
          return {
            queryKey: $(p, b, M),
            queryFn: async () => {
              const C = await (0, y.vd)(b);
              return C ? JSON.parse(C) : {};
            },
            enabled: (0, f.H)() == p && !!M,
          };
        }
        function _(p, b, M) {
          return (0, c.I)(K(p, b, M));
        }
        const $ = (p, b, M) => ["useMeetSteamGetRegistrationDetails", p, b, M];
        function Z(p) {
          return {
            queryKey: ["MeetSteamRegistrantInfo", p],
            queryFn: () => (0, y.Nc)(),
            enabled: !!p,
            staleTime: i.Kp.PerMinute * 10,
          };
        }
        function A(p) {
          return (0, c.I)(Z(p));
        }
        function U(p, b) {
          return {
            queryKey: ["useMeetSteamQRCode", p, b],
            queryFn: () => (0, y.EI)(p, b),
            enabled: !!b && !0,
            staleTime: i.Kp.PerMinute * 10,
          };
        }
        function G(p, b) {
          return (0, c.I)(U(p, b)).data?.qrcode;
        }
        function j(p, b = Intl.DateTimeFormat().resolvedOptions().timeZone) {
          return p.location_type === "in_person"
            ? (p.in_person_time_zone ?? w)
            : b;
        }
        function x(p) {
          const b = (0, L.B)();
          return (0, t.q3)(() => ({
            rtime_start: p.rtime_start,
            rtime_end: p.rtime_end,
            sDisplayTimeZone: j(p, b),
          }));
        }
        function E(p, b) {
          const M = z().unix(p),
            X = z().unix(p).tz(b).utcOffset() - M.utcOffset();
          return new Date((p + X * 60) * 1e3);
        }
        function I(p, b) {
          const M = E(p, b),
            C = new Date();
          return M.getFullYear() == C.getFullYear()
            ? (0, v.$w)(M)
            : (0, v._9)(M);
        }
        function m(p, b) {
          const M = moment.unix(p),
            X = moment.unix(p).tz(b).utcOffset() - M.utcOffset();
          return LocalizeRTimeToHourAndMinutes(p + X * 60);
        }
        function O(p, b, M, C) {
          const X = z().unix(p),
            Y = z().unix(p).tz(M).utcOffset() - X.utcOffset(),
            u = z().unix(b),
            d = z().unix(b).tz(M),
            h = d.utcOffset() - u.utcOffset();
          return (
            (0, v.Vx)(p + Y * 60, b + h * 60, !0) +
            (C ? "" : " " + d.format("z"))
          );
        }
      },
      16936: (ae, R, a) => {
        "use strict";
        a.d(R, {
          t3: () => z,
          EI: () => g,
          Nc: () => T,
          vd: () => S,
          _V: () => w,
          kR: () => K,
        });
        var y = a(72609);
        const L = "meetsteam/availability",
          c = "meetsteam/registrations",
          f = "meetsteam/registrationdetails",
          i = "meetsteam/updateregistration",
          t = "meetsteam/registrantinfo",
          v = "meetsteam/attendance_qrcode";
        async function P(_, $) {
          const Z = new URL(y.TS.STORE_BASE_URL + _);
          for (const [U, G] of Object.entries($)) Z.searchParams.set(U, G);
          const A = await fetch(Z, { credentials: "include" });
          if (!A.ok) throw new Error(`${Z} answered ${A.status}`);
          return await A.json();
        }
        async function z(_) {
          return (await P(L, { gid: _ })).availability ?? [];
        }
        async function w(_) {
          return (await P(c, { gid: _ })).registrations ?? [];
        }
        async function S(_) {
          return (await P(f, { gid: _ })).strJSONData ?? "";
        }
        async function T() {
          return (
            (await P(t, {})).info ?? { realname: "", email: "", partners: [] }
          );
        }
        async function g(_, $) {
          return await P(v, { gid: _, accountid: String($) });
        }
        async function K(_) {
          const $ = y.TS.STORE_BASE_URL + i,
            Z = new URLSearchParams({
              gid: _.gid,
              group_id: String(_.group_id),
              session_id: String(_.session_id),
              guest_count: String(_.guest_count),
              jsondata: _.jsondata,
              skip_email: _.skip_email ? "1" : "0",
            }),
            A = await fetch($, {
              method: "POST",
              credentials: "include",
              body: Z,
            });
          if (!A.ok) throw new Error(`${$} answered ${A.status}`);
          return (await A.json()).success;
        }
      },
      34041: (ae, R, a) => {
        "use strict";
        a.d(R, {
          Dp: () => n,
          wz: () => W,
          qX: () => H,
          cD: () => de,
          yX: () => pe,
          Q5: () => y,
          Ji: () => c,
          Xs: () => L,
          AH: () => Ke,
          zF: () => Re,
        });
        var y = {};
        a.r(y), a.d(y, { qZ: () => P });
        var L = {};
        a.r(L), a.d(L, { bV: () => tt });
        var c = {};
        a.r(c), a.d(c, { mP: () => He });
        var f = a(80613),
          i = a.n(f),
          t = a(75245),
          v = a(35038);
        const P = 0,
          z = 50,
          w = 51,
          S = 52,
          T = 53,
          g = 54,
          K = 55,
          _ = 56,
          $ = 57,
          Z = 58,
          A = 59,
          U = 60,
          G = 61,
          j = 62,
          x = 63,
          E = 64,
          I = 65,
          m = 66,
          O = 67,
          p = 68,
          b = 69,
          M = 70,
          C = 71,
          X = 72,
          te = 73,
          Y = 74,
          u = 75,
          d = 76,
          h = 77,
          B = 78,
          k = 79,
          J = 80,
          F = 81,
          N = 82,
          re = 83,
          ne = 90,
          q = 91,
          ee = 92,
          se = 93,
          ie = 94,
          De = 95,
          je = 96,
          st = 97,
          it = 98,
          $e = 99,
          ot = 100,
          lt = 101,
          Qe = 110,
          Ae = 111,
          ct = 112,
          ut = 113,
          xe = 114,
          Fe = 115,
          We = 116,
          Ue = 117,
          Ye = 118,
          Je = 119,
          dt = 120,
          mt = 130,
          gt = 131,
          ht = 132,
          _t = 133,
          Xe = 134,
          we = 135,
          ft = 136,
          Ze = 137,
          Ge = 138,
          Ne = 139,
          Ve = 140,
          qe = 0,
          pt = 1,
          et = 2,
          tt = 3,
          Ce = 0,
          yt = 1,
          vt = 2,
          ke = 3,
          He = 4,
          rt = 5,
          Et = 6,
          at = 7;
        function Bt(Ie) {
          return "unknown ESteamAwardVoteCategoryID ( " + Ie + " )";
        }
        function nt(Ie) {
          return "unknown EVoteDefinitionFlag ( " + Ie + " )";
        }
        function bt(Ie) {
          return "unknown ESteamAwardsNominationSource ( " + Ie + " )";
        }
        class ye extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.voteid || t.Sg(ye.M()),
              f.Message.initialize(this, e, 0, -1, [5, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    voteid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    active: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    start_time: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_time: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    app_discounts: { n: 5, c: ue, r: !0, q: !0 },
                    grouped_vote_options: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    groups: { n: 7, c: ge, r: !0, q: !0 },
                    internal_name: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    localization: { n: 9, c: he },
                    reveal_time: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    release_date_min: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    winner_appid: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    flag: { n: 13, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    release_date_max: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    item_type: {
                      n: 15,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
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
          static toObject(e, s) {
            return t.BT(ye.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ye();
            return ye.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ye.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ye.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition";
          }
        }
        class ue extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.appid || t.Sg(ue.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    discount: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ue.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ue();
            return ue.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ue.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ue.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_AppDefinition";
          }
        }
        class ge extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.groupid || t.Sg(ge.M()),
              f.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    groupid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    group_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    app_discounts: { n: 3, c: ue, r: !0, q: !0 },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ge.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ge();
            return ge.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ge.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ge.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_GroupDefinition";
          }
        }
        class he extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.title || t.Sg(he.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    title: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    title_linebreak: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    title_award: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    award_description: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
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
          static toObject(e, s) {
            return t.BT(he.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new he();
            return he.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(he.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(he.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_Localization";
          }
        }
        class de extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.language || t.Sg(de.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    language: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sale_appid: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(de.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new de();
            return de.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(de.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(de.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Request";
          }
        }
        class _e extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.votes || t.Sg(_e.M()),
              f.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    votes: { n: 1, c: ye, r: !0, q: !0 },
                    labor_of_love_winners: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
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
          static toObject(e, s) {
            return t.BT(_e.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new _e();
            return _e.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(_e.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(_e.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Response";
          }
        }
        class me extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.voteid || t.Sg(me.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    voteid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    communityitemid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = t.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(me.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new me();
            return me.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(me.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(me.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamAwardsUserVote";
          }
        }
        class H extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.sale_appid || t.Sg(H.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    sale_appid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(H.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new H();
            return H.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(H.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(H.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Request";
          }
        }
        class fe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.user_votes || t.Sg(fe.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: { user_votes: { n: 1, c: me, r: !0, q: !0 } },
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
          static toObject(e, s) {
            return t.BT(fe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new fe();
            return fe.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(fe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(fe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Response";
          }
        }
        class pe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.voteid || t.Sg(pe.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    voteid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    sale_appid: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
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
          static toObject(e, s) {
            return t.BT(pe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new pe();
            return pe.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(pe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(pe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Request";
          }
        }
        class o extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              o.prototype.user_votes || t.Sg(o.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: { user_votes: { n: 1, c: me, r: !0, q: !0 } },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = t.w0(o.M())), o.sm_mbf;
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(o.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(o.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new o();
            return o.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(o.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(o.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Response";
          }
        }
        class r extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              r.prototype.category_id || t.Sg(r.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              r.sm_m ||
                (r.sm_m = {
                  proto: r,
                  fields: {
                    category_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    last_updated: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              r.sm_m
            );
          }
          static MBF() {
            return r.sm_mbf || (r.sm_mbf = t.w0(r.M())), r.sm_mbf;
          }
          toObject(e = !1) {
            return r.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(r.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(r.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new r();
            return r.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(r.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(r.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              r.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwardsNomination";
          }
        }
        class n extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return n.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new n();
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new n();
            return n.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Request";
          }
        }
        class l extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              l.prototype.nominations || t.Sg(l.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: { nominations: { n: 1, c: r, r: !0, q: !0 } },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = t.w0(l.M())), l.sm_mbf;
          }
          toObject(e = !1) {
            return l.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(l.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(l.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new l();
            return l.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(l.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(l.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Response";
          }
        }
        class D extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.steamid || t.Sg(D.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    code: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(D.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new D();
            return D.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(D.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(D.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetOtherUserNominations_Request";
          }
        }
        class W extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.category_id || t.Sg(W.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    category_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    nominated_id: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    source: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
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
          static toObject(e, s) {
            return t.BT(W.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new W();
            return W.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(W.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(W.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Request";
          }
        }
        class V extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.nominations || t.Sg(V.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: { nominations: { n: 1, c: r, r: !0, q: !0 } },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(V.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new V();
            return V.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(V.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(V.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Response";
          }
        }
        class oe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.category_id || t.Sg(oe.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    category_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
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
          static toObject(e, s) {
            return t.BT(oe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new oe();
            return oe.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(oe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(oe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Request";
          }
        }
        class le extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.played_app || t.Sg(le.M()),
              f.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    played_app: { n: 1, c: ce, r: !0, q: !0 },
                    suggested_events: { n: 2, c: ve, r: !0, q: !0 },
                    suggested_apps: { n: 3, c: Ee, r: !0, q: !0 },
                    debug_query: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(le.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new le();
            return le.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(le.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(le.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response";
          }
        }
        class ce extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.appid || t.Sg(ce.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    playtime: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = t.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ce.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ce();
            return ce.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ce.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ce.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
          }
        }
        class ve extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.clanid || t.Sg(ve.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    clanid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    event_gid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
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
          static toObject(e, s) {
            return t.BT(ve.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new ve();
            return ve.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ve.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ve.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
          }
        }
        class Ee extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.appid || t.Sg(Ee.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
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
          static toObject(e, s) {
            return t.BT(Ee.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new Ee();
            return Ee.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ee.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ee.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
          }
        }
        class Be extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.generate_new || t.Sg(Be.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    generate_new: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Be.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new Be();
            return Be.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Be.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Be.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Request";
          }
        }
        class be extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.code || t.Sg(be.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    code: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
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
          static toObject(e, s) {
            return t.BT(be.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (i().BinaryReader)(e),
              Q = new be();
            return be.deserializeBinaryFromReader(Q, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(be.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(be.M(), e, s);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Response";
          }
        }
        var Re;
        ((Ie) => {
          function e(Se, Le, Me) {
            return Se.SendMsg(
              "StoreSales.GetVoteDefinitions#1",
              (0, v.I8)(de, Le, Me),
              _e,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          Ie.GetVoteDefinitions = e;
          function s(Se, Le, Me) {
            return Se.SendMsg(
              "StoreSales.SetVote#1",
              (0, v.I8)(pe, Le, Me),
              o,
              { ePrivilege: 1 },
            );
          }
          Ie.SetVote = s;
          function Q(Se, Le, Me) {
            return Se.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, v.I8)(H, Le, Me),
              fe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ie.GetUserVotes = Q;
        })(Re || (Re = {}));
        var Ke;
        ((Ie) => {
          function e(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, v.I8)(n, Te, Pe),
              l,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ie.GetUserNominations = e;
          function s(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.GetOtherUserNominations#1",
              (0, v.I8)(D, Te, Pe),
              l,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          Ie.GetOtherUserNominations = s;
          function Q(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.Nominate#1",
              (0, v.I8)(W, Te, Pe),
              V,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ie.Nominate = Q;
          function Se(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.GetNominationRecommendations#1",
              (0, v.I8)(oe, Te, Pe),
              le,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ie.GetNominationRecommendations = Se;
          function Le(Me, Te, Pe) {
            return Me.SendMsg(
              "SteamAwards.GetNominationShareLink#1",
              (0, v.I8)(Be, Te, Pe),
              be,
              { ePrivilege: 1 },
            );
          }
          Ie.GetNominationShareLink = Le;
        })(Ke || (Ke = {}));
      },
      39829: (ae, R, a) => {
        "use strict";
        a.d(R, { Wn: () => v, a4: () => T });
        var y = a(33902),
          L = a(90626),
          c = a(73259);
        const f = "100% 0px 100% 0px",
          i = "SaleSection_",
          t = "tab",
          v = 940,
          P = 1920;
        function z() {
          return window.innerWidth ?? P;
        }
        function w() {
          return z() >= v;
        }
        function S() {
          const _ = (0, y.d)(),
            [$, Z] = (0, L.useState)(() => z());
          return (
            (0, L.useEffect)(() => {
              const A = () => {
                Z(z());
              };
              return (
                A(),
                window.addEventListener("resize", A),
                () => window.removeEventListener("resize", A)
              );
            }, []),
            $
          );
        }
        function T(_ = v) {
          return S() >= _;
        }
        function g(_) {
          const $ = S(),
            Z = $ >= v,
            A = GetSectionTypeLayoutSizes(_);
          return Z
            ? { nMaxCapsulesPerRow: A.nMaxItemsPerRow, bScreenIsWide: Z }
            : {
                nMaxCapsulesPerRow: Math.min(
                  Math.max(Math.floor($ / A.nItemMinimumWidth), 1),
                  A.nMaxItemsPerRow,
                ),
                bScreenIsWide: Z,
              };
        }
        function K(_) {
          const $ = GetSectionTypeLayoutSizes(_);
          return w()
            ? $.nMaxItemsPerRow
            : Math.min(
                Math.max(
                  Math.floor(window.innerWidth / $.nItemMinimumWidth),
                  1,
                ),
                $.nMaxItemsPerRow,
              );
        }
      },
      38340: (ae, R, a) => {
        "use strict";
        a.d(R, { eg: () => L, lw: () => y });
        const y = "{STEAM_CLAN_IMAGE}",
          L = "{STEAM_CLAN_LOC_IMAGE}",
          c = "{STEAM_APP_IMAGE}";
      },
      73259: (ae, R, a) => {
        "use strict";
        a.d(R, {
          CU: () => Ge,
          ye: () => we,
          DJ: () => ke,
          G6: () => et,
          zv: () => Ae,
          IS: () => Ue,
          GE: () => Fe,
          yX: () => We,
          w: () => Ce,
          EE: () => xe,
          lh: () => fe,
          Pm: () => Ne,
          qR: () => Xe,
          dm: () => rt,
          DU: () => se,
          cB: () => He,
        });
        var y = a(25518),
          L = a(32093),
          c = a(99412),
          f = a(34041),
          i = a(14947);
        const t = null,
          v = {
            bBroadcastEnabled: !1,
            broadcastChatSetting: "hide",
            default_broadcast_title: "#Broadcast_default_title_dev",
            localized_broadcast_title: new Array(c.bP9),
            localized_broadcast_left_image: new Array(c.bP9),
            localized_broadcast_right_image: new Array(c.bP9),
            broadcast_whitelist: [],
          };
        var P = a(76559),
          z = a(29630),
          w = a(9046),
          S = a(50974),
          T = a(59432),
          g = a(64165),
          K = a(71742),
          _ = a(18210),
          $ = a(13854),
          Z = a(71684),
          A = a(48473),
          U = a(36174),
          G = a(27066),
          j = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          E = (o, r, n, l) => {
            for (
              var D = l > 1 ? void 0 : l ? x(r, n) : r, W = o.length - 1, V;
              W >= 0;
              W--
            )
              (V = o[W]) && (D = (l ? V(r, n, D) : V(D)) || D);
            return l && D && j(r, n, D), D;
          };
        const I = null,
          m = { bScheduleEnabled: !1, scheduleEntries: [] },
          O = {
            localized_name: [],
            type: "broadcast",
            delta_from_event_start_seconds: 0,
            duration_seconds: 3600,
          };
        class p {
          m_eventModel;
          constructor(r) {
            this.m_eventModel = r;
          }
          BHasScheduleEnabled() {
            return this.m_eventModel.jsondata.bScheduleEnabled;
          }
          GetScheduleEntries() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries
              : [];
          }
          GetScheduleEntriesCount() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries.length
              : 0;
          }
        }
        class b {
          m_eventModel;
          m_entry;
          constructor(r, n) {
            (this.m_eventModel = r), (this.m_entry = n);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }
        E([G.o], b.prototype, "GetEventStartTime", 1);
        const M = 1e4,
          C = 99999;
        function X() {
          return Math.floor(M + Math.random() * (C - M + 1));
        }
        var te = a(18994),
          Y = a(72609),
          u = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          h = (o, r, n, l) => {
            for (
              var D = l > 1 ? void 0 : l ? d(r, n) : r, W = o.length - 1, V;
              W >= 0;
              W--
            )
              (V = o[W]) && (D = (l ? V(r, n, D) : V(D)) || D);
            return l && D && u(r, n, D), D;
          };
        const B = [
          c.u0,
          c.zeJ,
          c.Fa4,
          c.Aav,
          c.SRb,
          c.zA,
          c.y6,
          c.hGl,
          c.WNR,
          c.pIh,
          c.izQ,
          c.uYK,
          c.f4X,
          c.zcX,
          c.yhO,
        ];
        function k(o) {
          return (
            B.some((r) => r == o.GetEventType()) &&
            !o.BHasTag("steam_award_nomination_request") &&
            !o.BHasTag("curator")
          );
        }
        const J = [c.HRy, c.LOv, c.HFK];
        function F(o) {
          return !J.some((r) => r == o.GetEventType()) && !o.BHasTag("curator");
        }
        const N = [c.Fwr, c.HFK];
        function re(o) {
          return !N.some((r) => r == o.GetEventType()) && !o.BHasTag("curator");
        }
        const ne = [
            c.L0X,
            c.KDJ,
            c.HRy,
            c.C$4,
            c.zA,
            c.y6,
            c.hGl,
            c.pIh,
            c.izQ,
            c.I5b,
            c.LOv,
            c.WNR,
          ],
          q = new Set(ne);
        function ee(o) {
          return !!o.endTime && q.has(o.type);
        }
        const se = 593110,
          ie = 766,
          De = 221410,
          je = 1675200,
          st = 4165890,
          it = [se, ie, De],
          $e = [c.Fwr, c.HFK];
        function ot(o) {
          return (
            !$e.some((r) => r == o.GetEventType()) && !o.BHasTag("curator")
          );
        }
        function lt(o, r = GetEventRTimeNow()) {
          const n = 60 * Seconds.PerDay;
          return (
            o.BIsVisibleEvent(r) &&
            o.BIsOGGEvent() &&
            (o.rtime32_last_modified ?? 0) > r - n &&
            !Qe(o)
          );
        }
        function Qe(o) {
          return (
            o.BHasTag("mod_reviewed") && !o.BHasTag("mod_require_rereview")
          );
        }
        var Ae = ((o) => (
          (o[(o.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (o[(o.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (o[(o.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (o[(o.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted"),
          o
        ))(Ae || {});
        function ct(o) {
          switch (o) {
            case "links":
              return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
            case "itemdef":
              return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
            case "contenthubspecials":
              return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
            default:
              return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
          }
        }
        const ut = "bordered";
        var xe = ((o) => (
            (o[(o.k_EStoreFilterClauseTypeOr = 0)] =
              "k_EStoreFilterClauseTypeOr"),
            (o[(o.k_EStoreFilterClauseTypeAnd = 1)] =
              "k_EStoreFilterClauseTypeAnd"),
            (o[(o.k_EStoreFilterClauseTypeStoreTag = 2)] =
              "k_EStoreFilterClauseTypeStoreTag"),
            (o[(o.k_EStoreFilterClauseTypeFeatureTag = 3)] =
              "k_EStoreFilterClauseTypeFeatureTag"),
            (o[(o.k_EStoreFilterClauseTypeLanguage = 4)] =
              "k_EStoreFilterClauseTypeLanguage"),
            (o[(o.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
              "k_EStoreFilterClauseTypeContentDescriptor"),
            (o[(o.k_EStoreFilterClauseTypePrice = 6)] =
              "k_EStoreFilterClauseTypePrice"),
            (o[(o.k_EStoreFilterClauseTypeAppType = 7)] =
              "k_EStoreFilterClauseTypeAppType"),
            (o[(o.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
              "k_EStoreFilterClauseTypeOptInRegistrationTag"),
            o
          ))(xe || {}),
          Fe = ((o) => (
            (o[(o.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (o[(o.k_ELanguage = 1)] = "k_ELanguage"),
            (o[(o.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (o[(o.k_EUserPreference = 3)] = "k_EUserPreference"),
            (o[(o.k_EPrice = 4)] = "k_EPrice"),
            (o[(o.k_EAppType = 5)] = "k_EAppType"),
            o
          ))(Fe || {}),
          We = ((o) => (
            (o[(o.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (o[(o.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (o[(o.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems"),
            o
          ))(We || {}),
          Ue = ((o) => (
            (o[(o.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (o[(o.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (o[(o.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually"),
            o
          ))(Ue || {}),
          Ye = ((o) => (
            (o.Steam = "Steam"),
            (o.Facebook = "Facebook"),
            (o.Twitter = "Twitter"),
            (o.Reddit = "Reddit"),
            o
          ))(Ye || {}),
          Je = ((o) => (
            (o.Summary = "summary"),
            (o.SummaryLargeImage = "summary_large_image"),
            o
          ))(Je || {});
        const dt = null;
        function mt(o) {
          return o && !!o.show_as_carousel && !o.enable_faceted_browsing;
        }
        function gt(o) {
          return o.carousel_rows || 1;
        }
        function ht(o) {
          return o.cap_item_count || 0;
        }
        function _t(o) {
          return o.cap_section_row_count && o.cap_section_row_count > 0
            ? o.cap_section_row_count
            : o.section_type == "trailercarousel"
              ? 1
              : o.cap_section_content
                ? 4
                : 0;
        }
        function Xe(o) {
          return o?.store_filter ? JSON.stringify(o.store_filter) : void 0;
        }
        function we(o) {
          switch (o) {
            case "items":
            case "trailercarousel":
            case "crosspromotesalepage":
            case "creator_list":
            case "calendar":
              return !0;
          }
          return !1;
        }
        function ft(o) {
          switch (o) {
            case "items":
            case "crosspromotesalepage":
            case "creator_list":
              return !0;
          }
          return !1;
        }
        function Ze(o) {
          switch (o) {
            case "items":
            case "trailercarousel":
            case "crosspromotesalepage":
            case "creator_list":
            case "calendar":
            case "events":
            case "sale_events":
            case "contenthubspecials":
              return !0;
          }
          return !1;
        }
        function Ge(o, r = !1) {
          return !o || !Ze(o.section_type)
            ? !1
            : r
              ? o.sale_tag_filter?.clauses?.length
                ? !0
                : !!o.smart_section
              : !!o.smart_section && o.smart_section_type != null;
        }
        function Ne(o) {
          return Ge(o) ? o?.smart_section_type : void 0;
        }
        function Ve(o) {
          return (
            (o.jsondata.sale_ml_recommender_delay_hours &&
              (o.startTime ?? 0) +
                o.jsondata.sale_ml_recommender_delay_hours * Seconds.PerHour -
                new Date().getTime() / 1e3) ??
            0
          );
        }
        function qe(o, r, n) {
          return !o.BIsNextFest() || !we(r.section_type)
            ? !1
            : n == EExplorationMode.Random
              ? !0
              : Ve(o) > 0;
        }
        function pt(o, r, n) {
          return !!(r.use_random_order || qe(o, r, n));
        }
        const et = {
            capsules: [],
            events: [],
            links: [],
            localized_label: new Array(c.bP9),
            localized_label_image: new Array(c.bP9),
            default_label: "#Sale_default_label",
            section_type: "unselected_empty",
          },
          tt = { internal_type: "subscription_pricing" };
        var Ce = ((o) => (
          (o[(o.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (o[(o.k_EContentHub = 1)] = "k_EContentHub"),
          o
        ))(Ce || {});
        function yt(o) {
          return {
            arrowFill: o?.sale_carousel_arrow_color,
            arrowStyle: o?.sale_carousel_arrow_style,
            breadcrumbActiveColor: o?.sale_carousel_active_breadcrumb_color,
            breadcrumbColor: o?.sale_carousel_breadcrumb_color,
            breadcrumbStyle: o?.sale_carousel_breadcrumb_style,
          };
        }
        function vt(o, r, n) {
          (r.library_spotlight = void 0),
            r.email_setting &&
              ((r.email_setting.locked = void 0),
              (r.email_setting.force_feature_id = void 0)),
            (r.steam_award_category_suggestion = void 0),
            (r.steam_award_category_voteids = void 0),
            (r.action_end_time = void 0),
            (r.ownership_requirement_info = void 0),
            (r.sale_use_subscription_layout = void 0),
            (r.app_right_requirement_info = void 0),
            (r.clone_from_event_gid = n),
            (r.clone_from_sale_enabled = r.bSaleEnabled),
            (r.bSaleEnabled = o == k_EClanEventType_CreatorHome),
            (r.sale_discount_event_id = void 0),
            (r.valve_access_log = []),
            (r.bInvisibleGameOptIn = void 0),
            (r.rt_migrated_time = void 0),
            (r.optin_tagid || r.sale_opt_in_page_name) &&
              ((r.tagged_items = void 0),
              (r.tagged_item_filter = void 0),
              (r.auto_item_tags = void 0)),
            (r.optin_prune_tagid = void 0),
            (r.optin_tagid = void 0),
            (r.sale_opt_in_page_name = void 0),
            (r.prune_list_optin_name = void 0),
            (r.optin_only = void 0),
            (r.child_demo_appid_for_repost = void 0),
            (r.sale_vanity_id = void 0),
            (r.sale_update_landing_page_vanity_id = void 0),
            (r.automatically_push_updated_source = void 0),
            (r.country_restriction = void 0);
        }
        const ke = {
            localized_subtitle: new Array(c.bP9),
            localized_summary: new Array(c.bP9),
            localized_title_image: new Array(c.bP9),
            localized_capsule_image: new Array(c.bP9),
            bSaleEnabled: !1,
            sale_show_creator: !1,
            sale_sections: [],
            sale_browsemore_text: "",
            sale_browsemore_url: "",
            sale_browsemore_color: "",
            sale_browsemore_bgcolor: "",
            localized_sale_header: new Array(c.bP9),
            localized_sale_overlay: new Array(c.bP9),
            localized_sale_product_banner: new Array(c.bP9),
            localized_sale_product_mobile_banner: new Array(c.bP9),
            localized_sale_logo: new Array(c.bP9),
            sale_font: "",
            sale_background_color: "",
            sale_header_offset: 530,
            referenced_appids: [],
            ...v,
            ...m,
          },
          He = "old_announce_",
          rt = 80,
          Et = 120,
          at = 180,
          Bt = "hide_from_events_and_discount",
          nt = [
            "workshop",
            "patchnotes",
            "contenthub",
            "skip_megaphone",
            "curator",
            "curator_group_members",
            "curator_public",
            "audience_followers",
            "enable_steam_china",
            "disable_steam_global",
            "adult_only_content",
            "stablechannel",
            "betachannel",
            "previewchannel",
          ],
          bt = null,
          ye = null,
          ue = [c.HRy, c.LOv, c.HFK],
          ge = [
            c.L0X,
            c.KDJ,
            c.HRy,
            c.C$4,
            c.zA,
            c.y6,
            c.hGl,
            c.pIh,
            c.izQ,
            c.I5b,
            c.LOv,
            c.WNR,
          ],
          he = [L.TU.k_ESteamRealmGlobal],
          de = [L.TU.k_ESteamRealmChina],
          _e = [L.TU.k_ESteamRealmGlobal, L.TU.k_ESteamRealmChina],
          me = [],
          H = class Oe {
            constructor() {
              (0, i.Gn)(this);
            }
            GID = void 0;
            AnnouncementGID = void 0;
            clanSteamID = new P.b();
            forumTopicGID = void 0;
            clanSteamIDOriginal = void 0;
            type = c.DRF;
            appid = 0;
            name = new Map();
            description = new Map();
            timestamp_loc_updated = new Map();
            createTime = void 0;
            startTime = void 0;
            endTime = void 0;
            visibilityStartTime = void 0;
            visibilityEndTime = void 0;
            m_nBuildID = void 0;
            m_strBuildBranch = void 0;
            postTime = void 0;
            visibility_state = 0;
            broadcaster = void 0;
            jsondata = ke;
            nCommentCount = 0;
            nVotesUp = 0;
            nVotesDown = 0;
            comment_type;
            gidfeature;
            gidfeature2;
            featured_app_tagid;
            bOldAnnouncement = !1;
            announcementClanSteamID = void 0;
            loadedAllLanguages = !1;
            bLoaded = !1;
            deleteInProgress = !1;
            vecTags = new Array();
            creator_steamid;
            last_update_steamid = void 0;
            rtime32_last_modified = void 0;
            rtime32_last_solr_search_col_updated = void 0;
            rtime32_last_local_modification = void 0;
            rtime32_moderator_reviewed = void 0;
            video_preview_type = void 0;
            video_preview_id = void 0;
            has_live_stream;
            live_stream_viewer_count;
            m_overrideCurrentDay = void 0;
            fnGetLocalizedGroupImages;
            BIsPartnerEvent() {
              return !this.bOldAnnouncement && !!this.GID;
            }
            static FromJSON(r) {
              let n = new Oe(),
                l = JSON.parse(r);
              return (
                Object.assign(n, l),
                (n.name = new Map(l.name)),
                (n.description = new Map(l.description)),
                (n.vecTags = [...(l.vecTags ?? l.tags ?? [])]),
                (n.clanSteamID = new P.b(l.clanSteamID)),
                (0, K.wT)(
                  n.clanSteamID && n.clanSteamID.BIsValid(),
                  "Invalid Clan SteamID: " +
                    n.clanSteamID.ConvertTo64BitString(),
                ),
                l.broadcaster &&
                  ((n.broadcaster = new P.b(l.broadcaster)),
                  (0, K.wT)(
                    n.broadcaster && n.broadcaster.BIsValid(),
                    "Invalid Broadcast SteamID: " +
                      n.broadcaster.ConvertTo64BitString(),
                  )),
                n
              );
            }
            static FromCClanEventData(r, n) {
              let l = new Oe();
              (l.GID = r.gid),
                (l.clanSteamID = new P.b(r.clan_steamid)),
                l.name.set(n, r.event_name ?? ""),
                (l.type = r.event_type),
                (l.appid = r.appid ?? 0),
                (l.startTime = r.rtime32_start_time),
                (l.endTime = r.rtime32_end_time),
                (l.nCommentCount = r.comment_count ?? 0),
                (l.creator_steamid = r.creator_steamid),
                (l.last_update_steamid = r.last_update_steamid),
                (l.jsondata = JSON.parse(r.jsondata ?? "{}")),
                (l.rtime32_last_local_modification = r.rtime32_last_modified),
                r.published
                  ? r.hidden
                    ? (l.visibility_state = r.unlisted ? 3 : 1)
                    : (l.visibility_state = 2)
                  : (l.visibility_state = 0),
                (l.createTime = r.rtime_created),
                (l.m_nBuildID = r.build_id),
                (l.m_strBuildBranch = r.build_branch),
                (l.visibilityStartTime = r.rtime32_visibility_start),
                (l.visibilityEndTime = r.rtime32_visibility_end),
                (l.rtime32_moderator_reviewed = r.rtime_mod_reviewed),
                (l.featured_app_tagid = r.featured_app_tagid),
                r.broadcaster_accountid &&
                  (l.broadcaster = P.b.InitFromAccountID(
                    r.broadcaster_accountid,
                  )),
                (l.AnnouncementGID = r.announcement_body?.gid ?? "0");
              const D = r.clan_steamid_original;
              return (
                D
                  ? (l.clanSteamIDOriginal = new P.b(D))
                  : r.announcement_body?.clanid &&
                    (l.clanSteamIDOriginal = P.b.InitFromClanID(
                      Number(r.announcement_body.clanid),
                    )),
                (l.postTime = r.announcement_body?.posttime),
                (l.forumTopicGID = r.forum_topic_id),
                l.name.set(n, r.announcement_body?.headline ?? ""),
                l.description.set(n, r.announcement_body?.body ?? ""),
                (l.nCommentCount = r.comment_count ?? 0),
                (l.vecTags = [...(r.announcement_body?.tags ?? [])]),
                (l.forumTopicGID = r.announcement_body?.forum_topic_id),
                (l.nVotesUp = r.announcement_body?.voteupcount ?? 0),
                (l.nVotesDown = r.announcement_body?.votedowncount ?? 0),
                l
              );
            }
            toJSON(r) {
              let n = new Object();
              return (
                Object.assign(n, this),
                (n.name = Array.from(this.name)),
                (n.description = Array.from(this.description)),
                (n.vecTags = Array.from(this.vecTags)),
                (n.tags = n.vecTags),
                (n.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
                this.broadcaster &&
                  (n.broadcaster = this.broadcaster.ConvertTo64BitString()),
                n
              );
            }
            clone(r = !1) {
              let n = new Oe();
              if (
                ((n.GID = this.GID),
                (n.AnnouncementGID = this.AnnouncementGID),
                (n.clanSteamID = this.clanSteamID),
                (n.clanSteamIDOriginal = this.clanSteamIDOriginal),
                (n.bOldAnnouncement = this.bOldAnnouncement),
                (n.nCommentCount = this.nCommentCount),
                (n.nVotesUp = this.nVotesUp),
                (n.nVotesDown = this.nVotesDown),
                (n.forumTopicGID = this.forumTopicGID),
                (n.comment_type = this.comment_type),
                (n.gidfeature = this.gidfeature),
                (n.gidfeature2 = this.gidfeature2),
                (n.featured_app_tagid = this.featured_app_tagid),
                (n.creator_steamid = this.creator_steamid),
                (n.last_update_steamid = this.last_update_steamid),
                (n.rtime32_last_modified = this.rtime32_last_modified),
                (n.rtime32_last_solr_search_col_updated =
                  this.rtime32_last_solr_search_col_updated),
                (n.rtime32_moderator_reviewed =
                  this.rtime32_moderator_reviewed),
                (n.type = this.type),
                (n.appid = this.appid),
                (n.name = new Map()),
                this.name.forEach((l, D) => {
                  n.name.set(D, l);
                }),
                (n.description = new Map()),
                this.description.forEach((l, D) => {
                  n.description.set(D, l);
                }),
                (n.timestamp_loc_updated = new Map()),
                this.timestamp_loc_updated.forEach((l, D) => {
                  n.timestamp_loc_updated.set(D, l);
                }),
                (n.createTime = this.createTime ?? 0),
                (n.startTime = this.startTime),
                (n.endTime = this.endTime),
                (n.visibilityStartTime = this.visibilityStartTime),
                (n.visibilityEndTime = this.visibilityEndTime),
                (n.postTime = this.postTime),
                (n.visibility_state = this.visibility_state),
                (n.loadedAllLanguages = this.loadedAllLanguages),
                (n.bLoaded = this.bLoaded),
                (n.broadcaster = this.broadcaster
                  ? new P.b(this.broadcaster.ConvertTo64BitString())
                  : void 0),
                (n.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
                (n.vecTags = new Array()),
                r
                  ? ((n.m_nBuildID = this.m_nBuildID),
                    (n.m_strBuildBranch = this.m_strBuildBranch),
                    this.vecTags.forEach((l) => n.vecTags.push(l)))
                  : this.vecTags.forEach((l) => {
                      nt.includes(l) && n.vecTags.push(l);
                    }),
                n.jsondata.email_setting)
              ) {
                let l = 100;
                for (let D of n.jsondata.email_setting.sections)
                  D.unique_id || ((D.unique_id = `email_section_${l}`), l++);
              }
              return n;
            }
            GetLastReferencedSaleDayFromCapsules(r, n) {
              let l = n;
              return (
                r?.forEach((D) => {
                  D.visibility_index !== void 0 &&
                    (l =
                      l === void 0
                        ? D.visibility_index
                        : Math.max(l, D.visibility_index));
                }),
                l
              );
            }
            GetLastReferencedSaleDay() {
              let r;
              for (const n of this.GetSaleSections())
                if (n.section_type === "tabs") {
                  if ((n.tabs?.length ?? 0) > 0)
                    for (const l of n.tabs ?? [])
                      r = this.GetLastReferencedSaleDayFromCapsules(
                        l.capsules,
                        r,
                      );
                } else
                  r = this.GetLastReferencedSaleDayFromCapsules(n.capsules, r);
              return (
                (this.jsondata.sale_num_headers ?? 0) > 1 &&
                  (r == null || r < (this.jsondata.sale_num_headers ?? 0)) &&
                  (r = this.jsondata.sale_num_headers),
                r
              );
            }
            GetDayIndexFromEventStart(r = (0, T.Gw)()) {
              let n = 0;
              this.startTime !== void 0 &&
                r >= this.startTime &&
                (n = Math.floor((r - this.startTime) / (3600 * 24))),
                this.m_overrideCurrentDay !== void 0 &&
                  this.m_overrideCurrentDay >= 0 &&
                  (n = this.m_overrideCurrentDay);
              const l = this.GetLastReferencedSaleDay() || 0;
              return Math.min(n, l);
            }
            GetNameWithFallback(r) {
              const n = _.A0.GetELanguageFallback(r);
              return this.name.get(r) || this.name.get(n);
            }
            BInRealmGlobal() {
              return !this.BHasTag("disable_steam_global");
            }
            BInRealmChina() {
              return this.BHasTag("enable_steam_china");
            }
            BIsLanguageValidForRealms(r) {
              return !!(
                (this.BInRealmGlobal() &&
                  _.A0.IsELanguageValidInRealm(r, L.TU.k_ESteamRealmGlobal)) ||
                (this.BInRealmChina() &&
                  _.A0.IsELanguageValidInRealm(r, L.TU.k_ESteamRealmChina))
              );
            }
            GetImgArray(r) {
              let n = [];
              if (
                ((r === "background" || r == "localized_title_image") &&
                  (n = this.jsondata.localized_title_image),
                r === "capsule")
              )
                n = this.jsondata.localized_capsule_image;
              else if (r === "spotlight")
                n = this.jsondata.localized_spotlight_image;
              else if (r === "email_full" || r === "email_centered")
                n = this.jsondata.email_setting
                  ? this.jsondata.email_setting.sections[0].localized_image
                  : [];
              else if (r === "broadcast_left")
                n = this.jsondata.localized_broadcast_left_image;
              else if (r === "broadcast_right")
                n = this.jsondata.localized_broadcast_right_image;
              else if (r === "sale_header")
                if ((this.jsondata.sale_num_headers ?? 0) > 1) {
                  const l = Math.min(
                    (this.jsondata.sale_num_headers ?? 0) - 1,
                    this.GetDayIndexFromEventStart(),
                  );
                  n = this.jsondata.localized_per_day_sales_header?.[l];
                } else n = this.jsondata.localized_sale_header;
              else
                r === "sale_logo"
                  ? (n = this.jsondata.localized_sale_logo)
                  : r === "sale_overlay"
                    ? (n = this.jsondata.localized_sale_overlay)
                    : w.pb.includes(r)
                      ? (n = this.fnGetLocalizedGroupImages?.())
                      : r === "product_banner"
                        ? (n = this.jsondata.localized_sale_product_banner)
                        : r === "product_mobile_banner"
                          ? (n =
                              this.jsondata
                                .localized_sale_product_mobile_banner)
                          : r === "bestofyear_banner"
                            ? (n = this.jsondata.localized_bestofyear_banner)
                            : r === "bestofyear_banner_mobile"
                              ? (n =
                                  this.jsondata
                                    .localized_bestofyear_banner_mobile)
                              : r === "localized_store_app_spotlight"
                                ? (n =
                                    this.jsondata.localized_store_app_spotlight)
                                : r ===
                                    "localized_store_app_spotlight_mobile" &&
                                  (n =
                                    this.jsondata
                                      .localized_store_app_spotlight_mobile);
              return n;
            }
            GetImageURL(r, n = c.Bhc, l = w.wI.full) {
              const D = this.GetImgArray(r),
                W = D && D.length > n && D[n] != null;
              return W && D[n]?.startsWith("http")
                ? D[n]
                : W
                  ? z.zU.GenerateURLFromHashAndExt(
                      this.clanSteamID,
                      D[n] ?? "",
                      l,
                    )
                  : void 0;
            }
            GetImageHash(r, n = c.Bhc) {
              let l = this.GetImgArray(r);
              return l && l.length > n && l[n] != null
                ? l[n].substr(0, l[n].length - 4)
                : null;
            }
            GetImageHashAndExt(r, n = c.Bhc) {
              let l = this.GetImgArray(r);
              return l && l.length > n && l[n] != null ? l[n] : null;
            }
            BHasSomeImage(r) {
              let n = this.GetImgArray(r);
              return !!n && n.some((l) => l != null && l.length > 0);
            }
            BHasImage(r, n) {
              let l = this.GetImgArray(r);
              return !!l && l.length > n && l[n] != null;
            }
            BHasAnnouncementGID() {
              return (
                this.AnnouncementGID !== null &&
                this.AnnouncementGID !== void 0 &&
                this.AnnouncementGID.length > 1
              );
            }
            GetAnnouncementGID() {
              return this.AnnouncementGID;
            }
            BHasForumTopicGID() {
              return (
                this.forumTopicGID !== null &&
                this.forumTopicGID !== void 0 &&
                this.forumTopicGID.length > 1
              );
            }
            GetForumTopicURL(r) {
              return this.BHasForumTopicGID()
                ? this.appid
                  ? Y.TS.COMMUNITY_BASE_URL +
                    "app/" +
                    this.appid +
                    "/eventcomments/" +
                    this.forumTopicGID
                  : r
                    ? Y.TS.COMMUNITY_BASE_URL +
                      "groups/" +
                      r +
                      "/eventcomments/" +
                      this.forumTopicGID
                    : Y.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.clanSteamID.ConvertTo64BitString() +
                      "/eventcomments/" +
                      this.forumTopicGID
                : "";
            }
            GetDiscussionURL(r) {
              return this.BHasForumTopicGID()
                ? this.GetForumTopicURL(r)
                : this.GetLegacyAnnouncementCommentsURL();
            }
            GetLegacyAnnouncementCommentsURL() {
              const r = this.clanSteamIDOriginal ?? this.clanSteamID;
              return !this.BHasAnnouncementGID() || !r || !r.BIsValid()
                ? ""
                : Y.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    r.ConvertTo64BitString() +
                    "/announcements/old_detail/" +
                    this.AnnouncementGID;
            }
            BIsEventInFuture(r = (0, T.Gw)()) {
              return r < (this.startTime ?? 0);
            }
            BHasEventEnded(r = (0, T.Gw)()) {
              return (this.endTime ?? 0) < r;
            }
            UpdateVoteCount(r, n) {
              r == "up"
                ? (this.nVotesUp = (0, $.OQ)(
                    this.nVotesUp + n,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ))
                : r == "down" &&
                  (this.nVotesDown = (0, $.OQ)(
                    this.nVotesDown + n,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ));
            }
            GetImageFromBeginningOfDescription(r, n) {
              let l = this.GetDescriptionWithFallback(r);
              if (l) {
                let D = l.indexOf("[img]");
                if (D !== -1 && D < n) {
                  D += 5;
                  let W = l.indexOf("[/img]", D);
                  if (W != -1) {
                    let V = l.substring(D, W).trim();
                    if (V.length != 0)
                      return z.zU.ReplacementTokenToClanImageURL(V);
                  }
                }
              }
              return null;
            }
            GetAppIDOrReferenceAppID() {
              return this.appid
                ? this.appid
                : this.jsondata?.referenced_appids?.[0];
            }
            BImageNeedScreenshotFallback(r, n) {
              let l = this.GetImageURL(r, n);
              if (!l || l.length == 0) {
                const D = _.A0.GetELanguageFallback(n);
                n != D && (l = this.GetImageURL(r, D));
              }
              return !l || l.length == 0;
            }
            GetDescriptionWithFallback(r) {
              const n = _.A0.GetELanguageFallback(r);
              return this.description.get(r) || this.description.get(n);
            }
            BIsImageSafeForAllAges(r, n, l = {}) {
              const D = _.A0.GetELanguageFallback(n);
              return (
                this.GetImageURL(r, n) != null ||
                (n != D && this.GetImageURL(r, D) != null) ||
                (this.appid && l.bAppHasAgeSafeScreenshots) ||
                (!this.appid &&
                  l.clanInfo &&
                  ((l.clanInfo.is_creator_home && !l.clanInfo.is_ogg) ||
                    l.clanInfo.is_curator))
              );
            }
            BIsVisibleEvent(r = (0, T.Gw)()) {
              let n = Math.floor(r);
              return (
                this.visibility_state == 3 ||
                (this.visibility_state == 2 &&
                  n > (this.visibilityStartTime ?? 0) &&
                  ((this.visibilityEndTime ?? 0) < 10 ||
                    n < (this.visibilityEndTime ?? 0)))
              );
            }
            BIsStagedEvent() {
              return this.visibility_state == 1;
            }
            BIsUnlistedEvent() {
              return this.visibility_state == 3;
            }
            GetStartTimeAndDateUnixSeconds() {
              return this.startTime ?? 0;
            }
            GetEndTimeAndDateUnixSeconds() {
              return this.endTime ?? 0;
            }
            GetPostTimeAndDateUnixSeconds() {
              return this.postTime ?? 0;
            }
            GetVisibilityStartTimeAndDateUnixSeconds() {
              return this.visibilityStartTime ?? 0;
            }
            BIsEventActionEnabled(r = (0, T.Gw)()) {
              return (
                !!this.jsondata.action_end_time &&
                (this.jsondata.action_end_time > r ||
                  (this.jsondata.action_end_time == 1575396e3 &&
                    1606845600 > r))
              );
            }
            BHasSubTitle(r) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                r >= this.jsondata.localized_subtitle.length
              )
                return !1;
              let n = this.jsondata.localized_subtitle[r];
              return n != null && n != "";
            }
            GetSubTitle(r) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                r >= this.jsondata.localized_subtitle.length
              )
                return "";
              let n = this.jsondata.localized_subtitle[r];
              return n || "";
            }
            GetSubTitleWithLanguageFallback(r) {
              return this.jsondata
                ? _.NT.GetWithFallback(this.jsondata.localized_subtitle, r)
                : "";
            }
            GetSubTitleWithSummaryFallback(r) {
              return (
                _.NT.GetWithFallback(this.jsondata?.localized_subtitle, r) ||
                Oe.GenerateSummaryFromText(this.GetDescriptionWithFallback(r))
              );
            }
            GetSummaryWithFallback(r, n) {
              return (
                _.NT.GetWithFallback(this.jsondata?.localized_summary, r) ||
                Oe.GenerateSummaryFromText(
                  this.GetDescriptionWithFallback(r),
                  n,
                )
              );
            }
            GetSummary(r) {
              return _.NT.Get(this.jsondata?.localized_summary ?? [], r);
            }
            BHasSummary(r) {
              return !!this.GetSummary(r);
            }
            static GenerateSummaryFromText(r, n) {
              return !r || r.trim().length == 0
                ? ""
                : ((r = (0, y.Yj)(r, [
                    "img",
                    "h1",
                    "h2",
                    "h3",
                    "spoiler",
                    "table",
                    "previewyoutube",
                    "looping_media",
                    "roomeffect",
                    "sticker",
                  ])),
                  (r = (0, y.zV)(r, ["p"], " ")),
                  (r = (0, y.zV)(r)),
                  (r = (0, A.aX)(r)),
                  (0, A.bC)(r, n || at));
            }
            BHasTag(r) {
              return this.vecTags.indexOf(r) != -1;
            }
            BHasTagStartingWith(r) {
              return this.vecTags.some((n) => n?.startsWith(r));
            }
            BIsOGGEvent() {
              return !!this.appid && this.appid > 0;
            }
            BShowLibrarySpotlight(r) {
              if (!r) return !!this.jsondata.library_spotlight;
              if (!this.jsondata.library_spotlight || ue.includes(this.type))
                return !1;
              const n = new Date().getTime() / 1e3;
              return !(
                (ge.includes(this.type) && this.endTime && n > this.endTime) ||
                (this.startTime && n > this.startTime + U.Kp.PerDay * 60)
              );
            }
            BShowLibrarySpotlightText() {
              return !!this.jsondata.library_spotlight_text;
            }
            BHasBroadcastEnabled() {
              return !!this.jsondata.bBroadcastEnabled;
            }
            BEventCanShowBroadcastWidget(r, n = (0, T.Gw)()) {
              if (this.jsondata.bSaleEnabled)
                return this.BHasBroadcastEnabled();
              const l = this.endTime ? this.endTime : n + 3600;
              return (
                this.BHasBroadcastEnabled() &&
                !!this.jsondata.broadcast_whitelist &&
                this.jsondata.broadcast_whitelist.length > 0 &&
                (r || ((this.startTime ?? 0) - 600 <= n && n < l))
              );
            }
            BHasBroadcastForceBanner() {
              return !!this.jsondata.broadcast_force_banner;
            }
            BSaleShowBroadcastAtTopOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (n) => n.section_type == "broadcast",
                )
              );
            }
            BSaleShowCuratorRecommendationAtBottomOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (n) => n.section_type == "curator_recommendation",
                )
              );
            }
            GetBroadcastChatVisibility() {
              return this.jsondata.broadcastChatSetting || "hide";
            }
            GetBroadcastTitle(r) {
              return (
                _.NT.GetWithFallback(
                  this.jsondata.localized_broadcast_title,
                  r,
                ) ||
                (0, _.we)(
                  this.jsondata.default_broadcast_title ??
                    "#Broadcast_default_title_dev",
                )
              );
            }
            GetBroadcastWhitelist() {
              return this.jsondata.broadcast_whitelist ?? [];
            }
            GetBroadcastWhitelistAsSteamIDs() {
              return (
                this.jsondata.broadcast_whitelist?.map((r) =>
                  P.b.InitFromAccountID(r).ConvertTo64BitString(),
                ) ?? []
              );
            }
            BIsBroadcastAccountIDWhiteListed(r) {
              return (this.jsondata.broadcast_whitelist || []).includes(
                Number(r),
              );
            }
            BHasSaleEnabled() {
              return !!this.jsondata.bSaleEnabled;
            }
            BHasSaleVanity() {
              return (
                !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id
              );
            }
            GetSaleVanity() {
              return this.jsondata.sale_vanity_id ?? "";
            }
            BHasSaleUpdateLandingPageVanity() {
              return (
                !!this.jsondata.bSaleEnabled &&
                !!this.jsondata.sale_update_landing_page_vanity_id
              );
            }
            GetSaleUpdateLandingPageVanity() {
              return this.jsondata.sale_update_landing_page_vanity_id ?? "";
            }
            GetSaleURL(r) {
              if (!this.jsondata.bSaleEnabled) return null;
              if (this.jsondata.sale_update_landing_page_vanity_id)
                return (
                  Y.TS.STORE_BASE_URL +
                  `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
                );
              if (!this.jsondata.sale_vanity_id)
                return (
                  Y.TS.STORE_BASE_URL +
                  "newshub/" +
                  (this.appid
                    ? "app/" + this.appid
                    : "group/" + this.clanSteamID.GetAccountID()) +
                  "/view/" +
                  this.GID
                );
              if (this.BUsesContentHubForItemSource()) {
                const W = this.jsondata.source_content_hub;
                return W
                  ? typeof W == "string"
                    ? Y.TS.STORE_BASE_URL + "category/" + W
                    : W.type == "category"
                      ? Y.TS.STORE_BASE_URL + "category/" + W.category
                      : W.type == "tags"
                        ? Y.TS.STORE_BASE_URL +
                          "tags/" +
                          ((0, _.l4)() || "en") +
                          "/" +
                          W.tagid
                        : W.type == "freetoplay"
                          ? Y.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                          : W.type == "earlyaccess"
                            ? Y.TS.STORE_BASE_URL + "genre/Early%20Access/"
                            : Y.TS.STORE_BASE_URL + W.type
                  : Y.TS.STORE_BASE_URL +
                      "sale/" +
                      this.jsondata.sale_vanity_id;
              }
              const n = this.clanSteamID.GetAccountID(),
                l =
                  !!this.jsondata
                    .sale_vanity_id_valve_approved_for_sale_subpath,
                D = this.GetSaleVanity();
              return r && (0, g.s)(n, l)
                ? r + "sale/" + D
                : Y.TS.STORE_BASE_URL + (0, g.n)(n, D, l);
            }
            BHasEmailEnabled() {
              return (
                !!this.jsondata.email_setting &&
                this.jsondata.email_setting.bEnable
              );
            }
            GetSaleSections() {
              return this.jsondata.sale_sections ?? [];
            }
            GenerateDynamicSaleSections(r, n, l, D, W, V) {
              const oe = [],
                le = {
                  section_type: "unselected_empty",
                  capsules: [],
                  events: [],
                  links: [],
                  localized_label: [],
                  default_label: "",
                };
              let ce = C + 10;
              return (
                r &&
                  oe.push({
                    ...le,
                    section_type: "footer_self_creator_home",
                    unique_id: ce++,
                    curator_clan_id: this.clanSteamID.GetAccountID(),
                  }),
                n &&
                  oe.push({
                    ...le,
                    section_type: "footer_browse_more",
                    unique_id: ce++,
                  }),
                D &&
                  oe.push(
                    this.GenerateDynamicCreatorHomeItemBrowserSection(
                      ce++,
                      le,
                      V,
                    ),
                  ),
                l &&
                  oe.push({
                    ...le,
                    section_type: "footer_default_social_share",
                    unique_id: ce++,
                  }),
                W &&
                  oe.push({
                    ...le,
                    section_type: "nextfest_header",
                    unique_id: ce++,
                  }),
                oe
              );
            }
            GetSaleSectionIncludingFooterSections(r = 0) {
              const n = this.jsondata?.sale_show_creator,
                l = this.jsondata.sale_browse_more_button,
                D =
                  this.GetSaleSectionsByType("social_share").length == 0 &&
                  !this.jsondata.sale_default_social_media_disabled,
                W = this.GetEventType() == c.ajI,
                V = this.BShowNextFestHeader(!0);
              return n || l || D || W || V
                ? [
                    ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, V, r),
                    ...this.GetSaleSections(),
                    ...this.GenerateDynamicSaleSections(!!n, !!l, D, W, !1, r),
                  ]
                : this.GetSaleSections();
            }
            GetSaleSectionByID(r, n = 0) {
              return r > C
                ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, n).find(
                    (D) => D.unique_id == r,
                  )
                : this.jsondata.sale_sections?.find((l) => l.unique_id == r);
            }
            GetSaleSectionCount() {
              return this.jsondata.sale_sections?.length ?? 0;
            }
            GetSaleSectionsByType(r) {
              return (
                this.jsondata.sale_sections?.filter(
                  (n) => n.section_type == r,
                ) ?? []
              );
            }
            GetLastUpdateTime() {
              return this.rtime32_last_modified ?? 0;
            }
            GetLastUpdaterSteamIDStr() {
              return this.last_update_steamid ?? "";
            }
            GetSaleSectionFirstMatchByType(r) {
              const n = this.jsondata.sale_sections?.length ?? 0;
              if (n != 0) {
                for (let l = 0; l < n; ++l)
                  if (this.jsondata.sale_sections[l].section_type === r)
                    return this.jsondata.sale_sections[l];
              }
            }
            static AccumulateCapsuleListIDs(r, n, l, D) {
              r &&
                r.forEach((W) => {
                  W &&
                    W.type &&
                    n.has(W.type) &&
                    (!D || D(W.id)) &&
                    l.add(W.id);
                });
            }
            GetSaleItemOfType(r, n) {
              if (!this.jsondata.sale_sections) return new Set();
              const l = new Set(r),
                D = new Set();
              return (
                (0, K.wT)(
                  !this.jsondata.bOptimizedForSize,
                  "Cannot find all items in optimized json",
                ),
                this.jsondata.bOptimizedForSize,
                this.jsondata.tagged_items?.forEach((W) => {
                  Oe.AccumulateCapsuleListIDs([W.capsule], l, D, n);
                }),
                this.jsondata.sale_sections.forEach((W) => {
                  if (we(W.section_type))
                    Oe.AccumulateCapsuleListIDs(W.capsules, l, D, n);
                  else if (W.section_type === "tabs" && W.tabs)
                    for (const V of W.tabs)
                      Oe.AccumulateCapsuleListIDs(V.capsules, l, D, n);
                }),
                D
              );
            }
            GetSaleItemCountOfType(r, n) {
              return this.GetSaleItemOfType(r, n).size;
            }
            GetSaleFeaturedAppsCount(r) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music"],
                r,
              );
            }
            GetSaleFeaturedAppsAndDemosCount(r) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                r,
              );
            }
            GetSaleFeaturedBundlesCount(r) {
              return this.GetSaleItemCountOfType(["bundle"], r);
            }
            GetSaleFeaturedPackagesCount(r) {
              return this.GetSaleItemCountOfType(["sub"], r);
            }
            GetSaleFeaturedApps(r) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music"],
                r,
              );
            }
            GetSaleFeaturedAppsAndDemos(r) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                r,
              );
            }
            GetSaleFeaturedBundles(r) {
              return this.GetSaleItemOfType(["bundle"], r);
            }
            GetSaleFeaturedPackages(r) {
              return this.GetSaleItemOfType(["sub"], r);
            }
            GetTaggedItems() {
              return this.jsondata.tagged_items || [];
            }
            BHasScheduleEnabled() {
              return this.jsondata.bScheduleEnabled;
            }
            GetEventType() {
              return this.type;
            }
            GetEventTypeAsString() {
              return (0, Z.rG)(this.type);
            }
            GetCategoryAsString(r) {
              return this.BHasTag("steam_award_nomination_request")
                ? (0, _.we)("#PartnerEvent_SteamAwardNominations")
                : this.BHasTag("steam_award_vote_request")
                  ? (0, _.we)("#PartnerEvent_SteamAwardVoteRequest")
                  : this.BHasTag("steam_game_festival_artist_statement")
                    ? (0, _.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                    : this.BHasTag("steam_game_festival_office_hour")
                      ? (0, _.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                      : this.BHasTag("steam_game_festival_broadcast") ||
                          (this.BHasTagStartingWith("sale_nextfest_") &&
                            this.type == c.KDJ)
                        ? (0, _.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                        : this.BHasTag("vo_marketing_message") && r
                          ? (0, _.we)("#PartnerEvent_MM_MajorUpdate")
                          : this.GetEventTypeAsString();
            }
            GetAllTags() {
              return this.vecTags;
            }
            BMatchesAllTags(r) {
              let n = !0;
              return (
                r?.forEach((l) => {
                  this.vecTags.includes(l) || (n = !1);
                }),
                n
              );
            }
            BAllowedSteamStoreSpotlight() {
              return !!this.jsondata.store_spotlight;
            }
            BHasLibaryHomeSpotlight() {
              return !!this.jsondata.library_home_spotlight;
            }
            BHasSaleProductBanners() {
              return (
                !!this.jsondata.bSaleEnabled &&
                (this.BHasSomeImage("product_banner") ||
                  this.BHasSomeImage("product_banner_override"))
              );
            }
            GetSteamAwardCategory() {
              return this.jsondata.steam_award_category_suggestion ?? f.Q5.qZ;
            }
            GetSteamAwardNomineeCategories() {
              return this.jsondata.steam_award_category_voteids ?? [];
            }
            BIsLockedToGameOwners() {
              return !!this.jsondata.ownership_requirement_info
                ?.bLockedToAppOwners;
            }
            GetRequiredAppIDs() {
              return this.jsondata.ownership_requirement_info
                ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
                : [];
            }
            GetRequiredPackageIDs() {
              return this.jsondata.ownership_requirement_info
                ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
                : [];
            }
            BUseSubscriptionLayout() {
              return !!this.jsondata.sale_use_subscription_layout;
            }
            BIsLockedToPartnerAppRights() {
              return !!this.jsondata.app_right_requirement_info
                ?.bLockedToPartnerAppRights;
            }
            GetRequiredPartnerAppRights() {
              return this.jsondata.app_right_requirement_info;
            }
            GetValveAccessLog() {
              return Array.isArray(this.jsondata.valve_access_log)
                ? this.jsondata.valve_access_log
                : [];
            }
            BUsesContentHubForItemSource() {
              return (
                this.jsondata.item_source_type === 1 &&
                !!this.jsondata.source_content_hub
              );
            }
            GetContentHubType() {
              if (this.BUsesContentHubForItemSource())
                return this.jsondata.source_content_hub == null
                  ? "games"
                  : typeof this.jsondata.source_content_hub == "string"
                    ? "category"
                    : this.jsondata.source_content_hub.type;
            }
            GetContentHubCategory() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? this.jsondata.source_content_hub
                  : this.jsondata.source_content_hub.category;
            }
            GetContentHubTag() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? 0
                  : this.jsondata.source_content_hub.tagid;
            }
            GetContentHub() {
              return typeof this.jsondata.source_content_hub == "string"
                ? {
                    type: "category",
                    category: this.jsondata.source_content_hub,
                  }
                : this.jsondata.source_content_hub;
            }
            BContentHubDiscountedOnly() {
              return !!this.jsondata.content_hub_discounted_only;
            }
            BIsBackgroundImageGroupingEnabled() {
              return !!this.jsondata.sale_background_img_groups?.enabled;
            }
            GetSalePageGroupDefinition() {
              return this.jsondata.sale_background_img_groups;
            }
            GetSalePageBackgroundImageGroupCount() {
              return this.jsondata.sale_background_img_groups?.enabled
                ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
                : 0;
            }
            GetAllSalePageGroups() {
              return this.jsondata.sale_background_img_groups?.enabled
                ? this.jsondata.sale_background_img_groups.groups
                : [];
            }
            GetSalePageBackgroundGroup(r) {
              return this.jsondata.sale_background_img_groups?.enabled
                ? this.jsondata.sale_background_img_groups.groups?.[r]
                : void 0;
            }
            GetIncludedRealmList() {
              const r = this.BInRealmGlobal(),
                n = this.BInRealmChina();
              return (
                (0, K.wT)(
                  r || n,
                  `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
                ),
                r && n ? _e : r ? he : n ? de : me
              );
            }
            BIsValidForRealm(r) {
              return this.GetIncludedRealmList().includes(r);
            }
            BIsNextFest(r = !1) {
              const n = "nextfest",
                l = this.jsondata.sale_vanity_id?.toLowerCase(),
                D = new P.b(this.clanSteamID).GetAccountID();
              return !(
                !l ||
                D != S.GU ||
                !l.startsWith(n) ||
                (r && (l.endsWith("preview") || l.endsWith("press")))
              );
            }
            BShowNextFestHeader(r) {
              return r && Y.iA.is_valve_email
                ? this.BIsNextFest(!1)
                : this.BIsNextFest(!0) &&
                    !!this.startTime &&
                    this.startTime > new Date("2026-03-01").getTime() / 1e3;
            }
            GenerateDynamicCreatorHomeItemBrowserSection(r, n, l) {
              const W = l >= 7;
              return {
                ...n,
                section_type: "sale_item_browser",
                unique_id: r,
                item_browse_section_data: {
                  enable_search: !0,
                  tabs: [
                    "all_released",
                    "popularpurchased",
                    "all_upcoming",
                    "discounted",
                  ],
                  prefer_assets_without_overrides: !1,
                },
                prefer_assets_without_overrides: !1,
                enable_faceted_browsing: W,
                min_capsule_matches_for_facet_values: 5,
                max_facet_values_for_facet: 5,
                background_gradient_top: "#0000006b",
                background_gradient_bottom: "#0000006b",
                facet_sort_order: 1,
                cap_item_count: 24,
                show_more_count: 48,
                facet_auto_generate_options: {
                  only_facets: [
                    { loc_token: "#App_Taxonomy_Survey_QSuperGenreTitle" },
                    {
                      loc_token: "#AppTypeLabelTitle",
                      only_values: [
                        "#AppTypeLabel_game",
                        "#AppTypeLabel_dlc",
                        "#AppTypeLabel_demo",
                        "#AppTypeLabel_music",
                      ],
                      initially_selected_values: ["#AppTypeLabel_game"],
                    },
                    { loc_token: "#Sale_Preferences" },
                  ],
                  initially_expanded_facets: [
                    "#AppTypeLabelTitle",
                    "#App_Taxonomy_Survey_QSuperGenreTitle",
                  ],
                  prioritized_facets: [
                    "#AppTypeLabelTitle",
                    "#App_Taxonomy_Survey_QSuperGenreTitle",
                  ],
                },
              };
            }
          };
        h([i.sH], H.prototype, "GID", 2),
          h([i.sH], H.prototype, "AnnouncementGID", 2),
          h([i.sH], H.prototype, "forumTopicGID", 2),
          h([i.sH], H.prototype, "type", 2),
          h([i.sH], H.prototype, "appid", 2),
          h([i.sH], H.prototype, "name", 2),
          h([i.sH], H.prototype, "description", 2),
          h([i.sH], H.prototype, "timestamp_loc_updated", 2),
          h([i.sH], H.prototype, "startTime", 2),
          h([i.sH], H.prototype, "endTime", 2),
          h([i.sH], H.prototype, "visibilityStartTime", 2),
          h([i.sH], H.prototype, "visibilityEndTime", 2),
          h([i.sH], H.prototype, "m_nBuildID", 2),
          h([i.sH], H.prototype, "m_strBuildBranch", 2),
          h([i.sH], H.prototype, "postTime", 2),
          h([i.sH], H.prototype, "visibility_state", 2),
          h([i.sH], H.prototype, "broadcaster", 2),
          h([i.sH], H.prototype, "jsondata", 2),
          h([i.sH], H.prototype, "nCommentCount", 2),
          h([i.sH], H.prototype, "nVotesUp", 2),
          h([i.sH], H.prototype, "nVotesDown", 2),
          h([i.sH], H.prototype, "bOldAnnouncement", 2),
          h([i.sH], H.prototype, "announcementClanSteamID", 2),
          h([i.sH], H.prototype, "loadedAllLanguages", 2),
          h([i.sH], H.prototype, "bLoaded", 2),
          h([i.sH], H.prototype, "deleteInProgress", 2),
          h([i.sH], H.prototype, "vecTags", 2),
          h([i.sH], H.prototype, "last_update_steamid", 2),
          h([i.sH], H.prototype, "rtime32_last_modified", 2),
          h([i.sH], H.prototype, "rtime32_last_solr_search_col_updated", 2),
          h([i.sH], H.prototype, "rtime32_last_local_modification", 2),
          h([i.sH], H.prototype, "rtime32_moderator_reviewed", 2),
          h([i.sH], H.prototype, "video_preview_type", 2),
          h([i.sH], H.prototype, "video_preview_id", 2),
          h([i.sH], H.prototype, "m_overrideCurrentDay", 2);
        let fe = H;
        function pe(o) {
          if (o) return o?.replace(/[()]/g, "\\$&");
        }
      },
      48421: (ae, R, a) => {
        "use strict";
        a.d(R, { B9: () => Z, PB: () => $, RR: () => _, hE: () => G });
        var y = a(90626),
          L = a(72604),
          c = a(65804),
          f = a(47689),
          i = a(76559),
          t = a(3166),
          v = a(69561),
          P = a(20194),
          z = a(18210),
          w = a(41735),
          S = a.n(w),
          T = a(34592);
        function g(E) {
          return useObserver(() => [E.m_nBuildID, E.m_strBuildBranch]);
        }
        function K(E, I = 0, m) {
          const [O, p] = useState(
              g_PartnerEventStore.GetClanEventFromAnnouncementGID(E),
            ),
            b = useCancelTokenSource("usePartnerEventByAnnouncementGID");
          return (
            useEffect(() => {
              if (O?.AnnouncementGID != E) {
                g_PartnerEventStore.Init();
                const M = new CSteamID(CommunityConfig.CLANSTEAMID);
                g_PartnerEventStore
                  .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(M, E, I, m)
                  .then((C) => {
                    C && !b.token.reason && p(C);
                  });
              }
            }, [E, I, m, O, b]),
            O
          );
        }
        function _(E) {
          const [I, m] = (0, y.useState)(() => c.O3.GetClanEventModel(E)),
            O = (0, f.m)("usePartnerEventByEventGID");
          return (
            (0, y.useEffect)(() => {
              E &&
                I?.GID != E &&
                (c.O3.Init(),
                c.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  [E],
                  [],
                  O,
                ).then((p) => {
                  p?.length == 1 && p[0].GID == E && !O.token.reason && m(p[0]);
                }));
            }, [E, I, O]),
            I
          );
        }
        function $(E) {
          const I = (0, f.m)("usePreloadPartnerEventsByEventGID"),
            m = (0, P.I)({
              queryKey: ["PreloadPartnerEventsByEventGID"],
              queryFn: () => (
                c.O3.Init(),
                c.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  E,
                  [],
                  I,
                )
              ),
            });
          return { bIsLoading: m.isLoading, events: m.data };
        }
        function Z(E, I, m) {
          const [O, p] = (0, y.useState)(
              I ? c.O3.GetClanEventModel(I) : void 0,
            ),
            [b, M] = (0, y.useState)(!!E && !!I),
            [C, X] = (0, y.useState)(),
            [te, Y] = (0, y.useState)(L.R),
            u = (0, f.m)("usePartnerEventByClanAccountAndEventGID");
          return (
            (0, y.useEffect)(() => {
              (async () => {
                try {
                  if (O?.GID != I && I && E) {
                    c.O3.Init();
                    const h = i.b.InitFromClanID(E);
                    let B;
                    try {
                      B =
                        await c.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                          h,
                          I,
                          0,
                          m,
                        );
                    } catch (k) {
                      X(k?.response?.data?.err_msg),
                        Y(k?.response?.data?.success || L.zi);
                    }
                    u.token.reason || p(B);
                  }
                } finally {
                  M(!1);
                }
              })();
            }, [E, I, O, m, u]),
            { eventModel: O, bLoading: b, sErrorMessage: C, eResult: te }
          );
        }
        function A(E, I = []) {
          const [m, O] = useState(void 0),
            p = useCancelTokenSource("useLatestPatchNoteForApp");
          return (
            useEffect(() => {
              E &&
                (!m || m?.appid != E) &&
                (g_PartnerEventStore.Init(),
                g_PartnerEventStore
                  .LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    E,
                    0,
                    1,
                    { require_tags: ["patchnotes", ...I] },
                    p,
                  )
                  .then((b) => {
                    b?.length && !p.token.reason && O(b[0]);
                  }));
            }, [E, p, I, m]),
            m
          );
        }
        function U(E, I = []) {
          const m = useCancelTokenSource("useLatestPatchNoteForSource"),
            O = typeof E == "number" ? E : k_nAppIdInvalid,
            p = typeof E == "object" ? E : void 0,
            b = useCallback(async () => {
              if (!I?.length) return null;
              g_PartnerEventStore.Init();
              const C = await g_PartnerEventStore.LoadAdjacentPartnerEvents(
                void 0,
                p,
                O,
                0,
                1,
                { require_tags: ["patchnotes", ...I] },
                m,
              );
              return C?.length ? C[0] : null;
            }, [O, m, p, I]),
            M = ["LatestPatchNote2", O, p, I, m];
          return useQuery({ queryKey: M, queryFn: b });
        }
        function G(E) {
          let I = "" + E;
          const m = z.A0.GetELanguageFallback(E);
          return E != m && (I += "_" + m), I;
        }
        async function j(E, I, m, O) {
          const p = new Array(),
            b = {
              clan_accountid: E ? E.GetAccountID() : void 0,
              gidevent: I,
              count_before: 0,
              count_after: m,
              lang_list: G(PchLanguageToELanguage(Config.LANGUAGE)),
              origin: self.origin,
              only_summaries: !0,
            },
            M = Config.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/",
            C = await axios.get(M, { params: b, cancelToken: O?.token });
          if (C?.data?.success == k_EResultOK) {
            const X = I == null ? C.data.events : C.data.events.slice(1);
            for (let te of X)
              !te.gid || !((te.jsondata?.length ?? 0) > 0) || p.push(te);
          } else {
            const X = GetMsgAndErrorCodeFromResponse(C?.data);
            throw (
              (console.error(
                "LoadAdjacentPartnerEvents Success but empty response: clanAccount:" +
                  (E ? E.GetAccountID() : 0) +
                  " " +
                  X.strErrorMsg,
                X,
              ),
              C?.data)
            );
          }
          return p;
        }
        function x(E, I, m) {
          const {
            data: O,
            error: p,
            fetchNextPage: b,
            hasNextPage: M,
            isFetching: C,
            isFetchingNextPage: X,
            status: te,
            refetch: Y,
          } = useInfiniteQuery({
            queryKey: ["ClanEventSummaries", E, I],
            queryFn: ({ pageParam: u }) => j(E, u, I, m),
            initialPageParam: void 0,
            getNextPageParam: (u) =>
              u.length > 0 ? u[u.length - 1].gid : void 0,
          });
          return {
            rgClanEventData: O,
            bHasNextPage: M,
            fnFetchNextPage: b,
            bIsFetching: C,
            bIsFetchingNextPage: X,
            clanEventSummaryStatus: te,
            clanEventSummaryLoadError: p,
            fnRefetch: Y,
          };
        }
      },
      38884: (ae, R, a) => {
        "use strict";
        a.d(R, { E0: () => z, oE: () => w });
        var y = a(71742),
          L = a(3166),
          c = a(76559),
          f = a(73259),
          i = a(34592),
          t = a(99412),
          v = a(41635);
        function P(S) {
          return (
            (S.gid == null || S.gid == null || S.gid == "0") &&
            !!S.announcement_body &&
            S.announcement_body.gid != "0"
          );
        }
        function z(S) {
          return P(S) ? f.cB + S.announcement_body?.gid : S.gid;
        }
        function w(S, T) {
          let g = new f.lh();
          if (
            ((g.clanSteamID = S),
            (0, y.wT)(
              g.clanSteamID && g.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                g.clanSteamID.ConvertTo64BitString() +
                " " +
                L.TS.EUNIVERSE,
            ),
            (g.GID = z(T)),
            (g.bOldAnnouncement = P(T)),
            (g.appid = T.appid ?? 0),
            (g.createTime = T.rtime_created),
            (g.startTime = T.rtime32_start_time),
            (g.endTime = T.rtime32_end_time),
            (g.visibilityStartTime = T.rtime32_visibility_start),
            (g.visibilityEndTime = T.rtime32_visibility_end),
            (g.loadedAllLanguages = !1),
            (g.type = T.event_type ?? t.DRF),
            (g.nVotesUp = T.votes_up ?? 0),
            (g.nVotesDown = T.votes_down ?? 0),
            (g.comment_type = T.comment_type),
            (g.gidfeature = T.gidfeature),
            (g.gidfeature2 = T.gidfeature2),
            (g.featured_app_tagid = T.featured_app_tagid),
            (g.vecTags = new Array()),
            (g.creator_steamid = T.creator_steamid),
            (g.last_update_steamid = T.last_update_steamid),
            (g.rtime32_last_modified = T.rtime32_last_modified),
            (g.rtime32_moderator_reviewed = T.rtime_mod_reviewed),
            (g.video_preview_type = T.video_preview_type),
            (g.video_preview_id = T.video_preview_id),
            (g.has_live_stream = T.has_live_stream),
            (g.live_stream_viewer_count = T.live_stream_viewer_count),
            (g.m_nBuildID = T.build_id),
            (g.m_strBuildBranch = T.build_branch),
            T.announcement_body)
          ) {
            let _ = T.announcement_body;
            (g.AnnouncementGID = _.gid),
              g.name.set(_.language, _.headline),
              g.description.set(_.language, _.body),
              g.timestamp_loc_updated.clear(),
              (g.forumTopicGID = _.forum_topic_id),
              (g.nCommentCount = _.commentcount),
              (g.postTime = _.posttime),
              g.bOldAnnouncement && !_.hidden && (g.startTime = _.posttime),
              (g.announcementClanSteamID = new c.b(_.clanid)),
              _.tags &&
                _.tags.length > 0 &&
                _.tags.forEach(($) => g.vecTags.push($)),
              !g.rtime32_last_solr_search_col_updated &&
                g.rtime32_last_modified &&
                ((g.rtime32_last_solr_search_col_updated =
                  g.rtime32_last_modified),
                (g.rtime32_last_modified = _.updatetime));
          } else
            (g.AnnouncementGID = "0"),
              (g.forumTopicGID = T.forum_topic_id),
              g.name.clear(),
              g.description.clear(),
              g.timestamp_loc_updated.clear(),
              (g.postTime = T.rtime32_start_time),
              (g.nCommentCount = T.comment_count ?? 0),
              g.name.set(t.Bhc, T.event_name ?? ""),
              g.description.set(t.Bhc, T.event_notes ?? "");
          T.broadcaster_accountid &&
            (g.broadcaster = new c.b(T.broadcaster_accountid));
          const K = f.DJ;
          try {
            g.jsondata = {
              ...K,
              ...(T.jsondata ? JSON.parse(T.jsondata) : void 0),
            };
          } catch (_) {
            const $ = (0, i.H)(_);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  $.strErrorMsg,
                $,
              ),
              _)
            );
          }
          if (
            ((g.jsondata.localized_capsule_image = (0, v.$Y)(
              g.jsondata.localized_capsule_image || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_title_image = (0, v.$Y)(
              g.jsondata.localized_title_image || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_subtitle = (0, v.$Y)(
              g.jsondata.localized_subtitle || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_summary = (0, v.$Y)(
              g.jsondata.localized_summary || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_broadcast_title = (0, v.$Y)(
              g.jsondata.localized_broadcast_title || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_broadcast_left_image = (0, v.$Y)(
              g.jsondata.localized_broadcast_left_image || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_broadcast_right_image = (0, v.$Y)(
              g.jsondata.localized_broadcast_right_image || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_header = (0, v.$Y)(
              g.jsondata.localized_sale_header || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_overlay = (0, v.$Y)(
              g.jsondata.localized_sale_overlay || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_product_banner = (0, v.$Y)(
              g.jsondata.localized_sale_product_banner || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_product_mobile_banner = (0, v.$Y)(
              g.jsondata.localized_sale_product_mobile_banner || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_logo = (0, v.$Y)(
              g.jsondata.localized_sale_logo || [],
              t.bP9,
              null,
            )),
            g.jsondata.sale_num_headers !== void 0 &&
              g.jsondata.localized_per_day_sales_header)
          )
            for (let _ = 0; _ < g.jsondata.sale_num_headers; ++_)
              g.jsondata.localized_per_day_sales_header[_] = (0, v.$Y)(
                g.jsondata.localized_per_day_sales_header[_],
                t.bP9,
                null,
              );
          return (
            g.jsondata.sale_sections &&
              g.jsondata.sale_sections.forEach((_, $) => {
                _.localized_label &&
                  (_.localized_label = (0, v.$Y)(
                    _.localized_label,
                    t.bP9,
                    null,
                  )),
                  _.section_type === "trailercarousel" &&
                    (_.show_as_carousel = !1),
                  (g.jsondata.sale_sections[$] = { ...f.G6, ..._ });
              }),
            g.jsondata.email_setting &&
              g.jsondata.email_setting.sections &&
              g.jsondata.email_setting.sections.forEach((_) => {
                _.localized_headline !== void 0 &&
                  _.localized_headline !== null &&
                  (_.localized_headline = (0, v.$Y)(
                    _.localized_headline,
                    t.bP9,
                    null,
                  )),
                  _.localized_body !== void 0 &&
                    _.localized_body !== null &&
                    (_.localized_body = (0, v.$Y)(
                      _.localized_body,
                      t.bP9,
                      null,
                    )),
                  _.localized_image !== void 0 &&
                    _.localized_image !== null &&
                    (_.localized_image = (0, v.$Y)(
                      _.localized_image,
                      t.bP9,
                      null,
                    ));
              }),
            g.jsondata.localized_title_image.forEach((_, $) => {
              if (_ != null && _.substr(0, 4) == "http") {
                let Z = _.lastIndexOf("/"),
                  A = _.substr(Z + 1);
                g.jsondata.localized_title_image[$] = A;
              }
            }),
            (g.bLoaded = !0),
            T.published
              ? T.unlisted
                ? (g.visibility_state = f.zv.k_EEventStateUnlisted)
                : T.hidden
                  ? (g.visibility_state = f.zv.k_EEventStateStaged)
                  : (g.visibility_state = f.zv.k_EEventStateVisible)
              : (g.visibility_state = f.zv.k_EEventStateUnpublished),
            g
          );
        }
      },
      18994: (ae, R, a) => {
        "use strict";
        a.d(R, { Wn: () => y.Wn, a4: () => y.a4 });
        var y = a(39829);
        const L = "exploration";
        var c = ((t) => ((t.Random = "r"), (t.Personalized = "p"), t))(c || {});
        function f(t) {
          switch (t) {
            case k_EControllerType_XBoxOneController:
              return k_EStoreCategoryFullController;
            case k_EControllerType_PS4Controller:
              return k_EStoreCategoryPS4Controller;
            case k_EControllerType_PS5Controller:
              return k_EStoreCategoryPS5Controller;
            case k_EControllerType_SteamController:
              return k_EStoreCategorySteamInputAPI;
            default:
              return;
          }
        }
        function i(t) {
          switch (t) {
            case k_EStoreCategoryFullController:
              return k_EControllerType_XBoxOneController;
            case k_EStoreCategoryPS4Controller:
              return k_EControllerType_PS4Controller;
            case k_EStoreCategoryPS5Controller:
              return k_EControllerType_PS5Controller;
            default:
              return;
          }
        }
      },
      65804: (ae, R, a) => {
        "use strict";
        a.d(R, { ZQ: () => b, O3: () => M, dB: () => X, CO: () => te });
        var y = a(41735),
          L = a.n(y),
          c = a(14947),
          f = a(31561),
          i = a(99412),
          t = a(72604),
          v = a(73259),
          P = a(76559);
        function z(Y) {
          return window.StoreDefaults ? window.StoreDefaults[Y] : void 0;
        }
        var w = a(41635),
          S = a(71742),
          T = a(34592),
          g = a(8323),
          K = a(48473),
          _ = a(3166),
          $ = a(90626),
          Z = a(54963),
          A = a(48421),
          U = a(38884),
          G = a(77291),
          j = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          E = (Y, u, d, h) => {
            for (
              var B = h > 1 ? void 0 : h ? x(u, d) : u, k = Y.length - 1, J;
              k >= 0;
              k--
            )
              (J = Y[k]) && (B = (h ? J(u, d, B) : J(B)) || B);
            return h && B && j(u, d, B), B;
          };
        const I = null;
        class m {
          appid;
          date;
          can_play;
          playtime;
          announcementid;
          constructor(u) {
            (0, S.wT)(
              typeof u.appid == "number",
              "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
            ),
              (this.appid = u.appid),
              (this.date = u.date),
              (this.can_play = u.can_play),
              (this.playtime = u.playtime),
              (this.announcementid = u.announcementid);
          }
        }
        const O = null,
          p = null;
        class b {
          constructor(u = !1) {
            (0, c.Gn)(this), (this.m_bOnlySummary = u);
          }
          m_bOnlySummary = !1;
          m_mapExistingEvents = new Map();
          m_mapEventUpdateCallback = new Map();
          m_mapAnnouncementBodyToEvent = new Map();
          m_mapClanToGIDs = new Map();
          m_mapAppIDToGIDs = new Map();
          m_mapAdjacentAnnouncementGIDs = new Map();
          m_mapUpdatedApps = new Map();
          m_tsUpdatedAppsQueryTime = 0;
          m_rgQueuedEventsClanIDs = new Array();
          m_rgQueuedEventsUniqueIDs = new Array();
          m_rgQueuedEventsForEditFlags = new Array();
          m_QueuedEventTimeout = new g.LU();
          m_PendingInfoPromise;
          m_PendingInfoResolve;
          m_bLoadedFromConfig = !1;
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let u = z("PartnerEventStore");
              this.ValidateStoreDefault(u) &&
                u.forEach((B) => {
                  if (B) {
                    let k = new P.b(B.clan_steamid);
                    const J = this.InsertEventModelFromClanEventData(k, B);
                    B.announcement_body &&
                      this.m_mapExistingEvents.set(
                        v.cB + B.announcement_body.gid,
                        J,
                      );
                  }
                });
              let d = (0, _.Fd)("partnereventstore", "application_config");
              this.ValidateStoreDefault(d) &&
                d.forEach((B) => {
                  if (B) {
                    let k = new P.b(B.clan_steamid);
                    const J = this.InsertEventModelFromClanEventData(k, B);
                    B.announcement_body &&
                      !this.m_mapExistingEvents.has(
                        v.cB + B.announcement_body.gid,
                      ) &&
                      this.m_mapExistingEvents.set(
                        v.cB + B.announcement_body.gid,
                        J,
                      );
                  }
                });
              let h = (0, _.Fd)("partnereventadjacents", "application_config");
              this.ValidateAdjacentEvent(h) &&
                h.forEach((B) => {
                  B &&
                    this.m_mapAdjacentAnnouncementGIDs.set(
                      B.announcementGID,
                      B.adjacents,
                    );
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          ValidateStoreDefault(u) {
            const d = u;
            return d &&
              Array.isArray(d) &&
              d.length > 0 &&
              d[0] &&
              typeof d[0] == "object"
              ? typeof d[0].gid == "string" ||
                  (typeof d[0].announcement_body == "object" &&
                    typeof d[0].announcement_body.gid == "string")
              : !1;
          }
          ValidateAdjacentEvent(u) {
            const d = u;
            return d &&
              Array.isArray(d) &&
              d.length > 0 &&
              typeof d[0] == "object"
              ? typeof d[0].announcementGID == "string" &&
                  Array.isArray(d[0].adjacents) &&
                  (d[0].adjacents.length == 0 ||
                    typeof d[0].adjacents[0] == "string")
              : !1;
          }
          GetPartnerEventChangeCallback(u) {
            let d = this.m_mapEventUpdateCallback.get(u);
            return (
              d ||
                (this.m_mapEventUpdateCallback.set(u, new g.lu()),
                (d = this.m_mapEventUpdateCallback.get(u))),
              d
            );
          }
          GetClanEventGIDs(u) {
            let d = this.m_mapClanToGIDs.get(u.GetAccountID());
            return d || [];
          }
          GetClanEventGIDsForApp(u) {
            let d = this.m_mapAppIDToGIDs.get(u);
            return d || [];
          }
          GetClanEventModel(u) {
            return this.m_mapExistingEvents.get(u);
          }
          BHasClanEventModel(u) {
            return this.m_mapExistingEvents.has(u);
          }
          BHasClanAnnouncementGID(u) {
            if (this.m_mapAnnouncementBodyToEvent.has(u)) {
              const d = this.m_mapAnnouncementBodyToEvent.get(u);
              return !!d && this.BHasClanEventModel(d);
            }
            return !1;
          }
          GetClanEventGIDFromAnnouncementGID(u) {
            return this.m_mapAnnouncementBodyToEvent.get(u);
          }
          GetClanEventFromAnnouncementGID(u) {
            const d = this.m_mapAnnouncementBodyToEvent.get(u);
            return d ? this.m_mapExistingEvents.get(d) : void 0;
          }
          DefaultEventSortFunction(u, d) {
            return u.startTime == d.startTime
              ? (0, K.kd)(u.GID ?? "", d.GID ?? "")
              : (d.startTime ?? 0) - (u.startTime ?? 0);
          }
          RegisterClanEvents(u) {
            if (u)
              for (const d of u) {
                const h = (0, U.E0)(d);
                if (!this.m_mapExistingEvents.has(h)) {
                  const B = new P.b(d.clan_steamid);
                  this.InsertEventModelFromClanEventData(B, d);
                }
              }
          }
          GetRankedClanEvents(u, d) {
            let h = [],
              B = u
                ? this.GetClanEventGIDs(u)
                : d
                  ? this.GetClanEventGIDsForApp(d)
                  : void 0;
            if (!B || B.length == 0) return h;
            for (let k of B) {
              let J = this.GetClanEventModel(k);
              J && h.push(J);
            }
            return h.sort(this.DefaultEventSortFunction), h;
          }
          InsertEventModelFromClanEventData(u, d) {
            const h = (0, U.oE)(u, d);
            return (
              this.InsertUniqueEventGID(u.GetAccountID(), h.appid, h.GID),
              this.m_mapExistingEvents.set(h.GID, h),
              h.AnnouncementGID &&
                h.AnnouncementGID.length > 1 &&
                this.m_mapAnnouncementBodyToEvent.set(h.AnnouncementGID, h.GID),
              h
            );
          }
          HelperInitializeNumSalesHeaderArray(u) {
            if ((u.jsondata.sale_num_headers ?? 0) > 1) {
              u.jsondata.localized_per_day_sales_header = [];
              for (let d = 0; d < (u.jsondata.sale_num_headers ?? 0); ++d)
                u.jsondata.localized_per_day_sales_header.push(
                  (0, w.$Y)([], i.bP9, null),
                );
              u.m_overrideCurrentDay = 0;
            } else u.m_overrideCurrentDay = void 0;
          }
          GetAllClanEvents(u) {
            let d = new Array();
            return (
              this.m_mapClanToGIDs.has(u.GetAccountID()) &&
                this.m_mapClanToGIDs.get(u.GetAccountID()).forEach((h) => {
                  let B = this.m_mapExistingEvents.get(h);
                  B && d.push(B);
                }),
              d
            );
          }
          async QueueLoadPartnerEvent(u, d, h) {
            if (this.m_mapExistingEvents.has(d)) return;
            this.m_rgQueuedEventsClanIDs.push(u),
              this.m_rgQueuedEventsUniqueIDs.push(d),
              this.m_rgQueuedEventsForEditFlags.push(!!h),
              this.m_PendingInfoPromise ||
                (this.m_PendingInfoPromise = new Promise(
                  (F) => (this.m_PendingInfoResolve = F),
                ));
            const B = this.m_PendingInfoPromise,
              k = () => {
                const F = this.m_PendingInfoResolve,
                  N = this.m_rgQueuedEventsClanIDs,
                  re = this.m_rgQueuedEventsUniqueIDs,
                  ne = this.m_rgQueuedEventsForEditFlags;
                (this.m_PendingInfoPromise = void 0),
                  (this.m_rgQueuedEventsClanIDs = new Array()),
                  (this.m_rgQueuedEventsUniqueIDs = new Array()),
                  (this.m_rgQueuedEventsForEditFlags = new Array()),
                  this.InternalLoadPartnerEventList(N, re, ne).then(() =>
                    F?.(),
                  );
              };
            return (
              this.m_rgQueuedEventsClanIDs.length >= 30
                ? (this.m_QueuedEventTimeout.Cancel(), k())
                : this.m_QueuedEventTimeout.IsScheduled() ||
                  this.m_QueuedEventTimeout.Schedule(50, k),
              B
            );
          }
          async InternalLoadPartnerEventList(u, d, h) {
            let B = h.some((N) => N);
            const k =
                _.TS.STORE_BASE_URL +
                (B
                  ? "events/ajaxgeteventdetailsforedit/"
                  : "events/ajaxgeteventdetails/"),
              J = (0, A.hE)((0, i.sfN)(_.TS.LANGUAGE)),
              F = {
                clanid_list: u.join(","),
                uniqueid_list: d.join(","),
                lang_list: J,
                origin: self.origin,
              };
            try {
              const N = await L().get(k, { params: F, withCredentials: B });
              this.RegisterClanEvents(N.data.events);
            } catch (N) {
              let re = (0, T.H)(N);
              console.error("GetEventDetails hit error " + re.strErrorMsg, re);
            }
          }
          async LoadAdjacentPartnerEvents(u, d, h, B, k, J, F) {
            return this.InternalLoadAdjacentPartnerEvents(
              u,
              void 0,
              d,
              h,
              B,
              k,
              J,
              F,
            );
          }
          async LoadAdjacentPartnerEventsByAnnouncement(u, d, h, B, k, J, F) {
            return this.InternalLoadAdjacentPartnerEvents(
              void 0,
              u,
              d,
              h,
              B,
              k,
              J,
              F,
            );
          }
          async LoadAdjacentPartnerEventsByEvent(u, d, h, B, k, J, F) {
            const N = d || u.clanSteamID;
            return u.bOldAnnouncement
              ? this.InternalLoadAdjacentPartnerEvents(
                  void 0,
                  u.AnnouncementGID,
                  N,
                  h,
                  B,
                  k,
                  J,
                  F,
                )
              : this.InternalLoadAdjacentPartnerEvents(
                  u.GID,
                  u.AnnouncementGID,
                  N,
                  h,
                  B,
                  k,
                  J,
                  F,
                );
          }
          async InternalLoadAdjacentPartnerEvents(u, d, h, B, k, J, F, N) {
            let re = new Array();
            if (!d || !this.m_mapAdjacentAnnouncementGIDs.has(d)) {
              let ne =
                _.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
              const q = (0, A.hE)((0, i.sfN)(_.TS.LANGUAGE));
              F?.only_summaries &&
                !this.m_bOnlySummary &&
                ((0, S.wT)(
                  this.m_bOnlySummary,
                  "Only Summary: Incorrect parameter passed in, unsetting",
                ),
                (F.only_summaries = void 0));
              let ee = {
                clan_accountid: h ? h.GetAccountID() : void 0,
                appid: B,
                count_before: k,
                count_after: J,
                gidevent: u,
                gidannouncement: d,
                lang_list: q,
                rtime_oldestevent: F ? F.rtime_oldestevent : void 0,
                require_tags:
                  F && F.require_tags ? F.require_tags.join(",") : void 0,
                exclude_tags:
                  F && F.exclude_tags ? F.exclude_tags.join(",") : void 0,
                require_no_tags: F ? F.require_no_tags : void 0,
                event_type_filter:
                  F && F.event_type_filter
                    ? F.event_type_filter.join(",")
                    : void 0,
                exclude_event_types:
                  F && F.exclude_event_types
                    ? F.exclude_event_types.join(",")
                    : void 0,
                only_summaries: F && !!F.only_summaries,
                origin: self.origin,
              };
              try {
                let se = await L().get(ne, {
                  params: ee,
                  cancelToken: N?.token,
                });
                if (se?.data?.success == t.R)
                  (0, c.h5)(() => {
                    for (let ie of se.data.events) {
                      let De = (0, U.E0)(ie);
                      if (!this.m_mapExistingEvents.has(De)) {
                        let je = new P.b(ie.clan_steamid);
                        this.InsertEventModelFromClanEventData(h || je, ie);
                      }
                      re.push(this.m_mapExistingEvents.get(De));
                    }
                    if (re.length == 0) {
                      if (u && this.BHasClanEventModel(u))
                        this.m_mapExistingEvents.get(u) &&
                          re.push(this.m_mapExistingEvents.get(u));
                      else if (d && this.BHasClanAnnouncementGID(d)) {
                        const ie = this.GetClanEventFromAnnouncementGID(d);
                        ie && re.push(ie);
                      }
                    }
                  });
                else {
                  let ie = (0, T.H)(se?.data);
                  console.error(
                    "LoadAdjacentPartnerEvents Success but empty response:" +
                      B +
                      " clanAccount:" +
                      (h ? h.GetAccountID() : 0) +
                      " " +
                      ie.strErrorMsg,
                    ie,
                  );
                }
              } catch (se) {
                let ie = (0, T.H)(se);
                ie.errorCode != t.e9 &&
                  console.error(
                    "LoadAdjacentPartnerEvents hit error on appid:" +
                      B +
                      " clanAccount:" +
                      (h ? h.GetAccountID() : 0) +
                      " " +
                      ie.strErrorMsg,
                    ie,
                  );
              }
            } else {
              let ne = this.m_mapAdjacentAnnouncementGIDs.get(d),
                q = new Array();
              ne?.forEach((ee) => {
                if (this.m_mapAnnouncementBodyToEvent.has(ee)) {
                  let se = this.m_mapAnnouncementBodyToEvent.get(ee);
                  se &&
                    this.m_mapExistingEvents.get(se) &&
                    re.push(this.m_mapExistingEvents.get(se));
                } else q.push(ee);
              }),
                q.length > 0 &&
                  (
                    await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                      void 0,
                      q,
                      N,
                    )
                  ).forEach((se) => re.push(se));
            }
            return re;
          }
          async LoadPartnerEventsPageable(u, d, h = 0, B = 0, k) {
            let J = new Array(),
              F = _.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
              N = {
                clan_accountid: u ? u.GetAccountID() : void 0,
                appid: d,
                offset: h,
                count: B,
                l: _.TS.LANGUAGE,
                origin: self.origin,
                exclude_tags: k && k.length > 0 ? k?.join(",") : void 0,
              };
            try {
              let re = await L().get(F, { params: N });
              (0, c.h5)(() => {
                for (let ne of re.data.events) {
                  let q = (0, U.E0)(ne);
                  if (!this.m_mapExistingEvents.has(q)) {
                    let ee = new P.b(ne.clan_steamid);
                    this.InsertEventModelFromClanEventData(ee, ne);
                  }
                  J.push(this.m_mapExistingEvents.get(q));
                }
              });
            } catch (re) {
              console.error(
                "LoadClanEventInDateRange hit error " +
                  (0, T.H)(re).strErrorMsg,
              );
            }
            return J;
          }
          async GetBestEventsForCurrentUser(u, d, h) {
            let B = new Array(),
              k = {
                l: _.TS.LANGUAGE,
                include_steam_blog: !0,
                filter_to_played_within_days: u,
                include_only_game_updates: d,
              },
              J = _.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
              F = await L().get(J, {
                params: k,
                withCredentials: !0,
                cancelToken: h ? h.token : void 0,
              });
            if (!F.data?.events) {
              let N = F.data?.err_msg || "";
              throw new Error(
                `GetBestEventsForCurrentUser request failed (${N})`,
              );
            }
            return (
              (0, c.h5)(() => {
                for (let N of F.data.events) {
                  let re = (0, U.E0)(N);
                  if (!this.m_mapExistingEvents.has(re)) {
                    let q = new P.b(N.clan_steamid);
                    this.InsertEventModelFromClanEventData(q, N);
                  }
                  let ne = {
                    nAppPriority: N.nAppPriority,
                    bPossibleTakeOver: N.bPossibleTakeOver,
                    event: this.m_mapExistingEvents.get(re),
                  };
                  B.push(ne);
                }
              }),
              B
            );
          }
          async LoadImportantEventsAroundToday(u, d, h, B, k, J) {
            let F = new Array(),
              N = new Array();
            N.push({ priority: 0, appids: d }),
              h && N.push({ priority: 1, appids: h }),
              B && N.push({ priority: 2, appids: B });
            let re = {
                count: u,
                strAppIDPriority: JSON.stringify({ prioritized_apps: N }),
                filterToEventTypes: J ? J.toString() : "",
                l: _.TS.LANGUAGE,
              },
              ne = _.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
              q = await L().get(ne, {
                params: re,
                withCredentials: !0,
                cancelToken: k.token,
              });
            return (
              (0, c.h5)(() => {
                for (let ee of q.data.events) {
                  let se = (0, U.E0)(ee);
                  if (!this.m_mapExistingEvents.has(se)) {
                    let ie = new P.b(ee.clan_steamid);
                    this.InsertEventModelFromClanEventData(ie, ee);
                  }
                  F.push(this.m_mapExistingEvents.get(se));
                }
              }),
              F
            );
          }
          InsertUniqueEventGID(u, d, h) {
            let B = this.m_mapClanToGIDs.get(u);
            B ||
              (this.m_mapClanToGIDs.set(u, new Array()),
              (B = this.m_mapClanToGIDs.get(u)));
            let k = this.m_mapAppIDToGIDs.get(d);
            k ||
              (this.m_mapAppIDToGIDs.set(d, new Array()),
              (k = this.m_mapAppIDToGIDs.get(d))),
              B.indexOf(h) == -1 && (B.push(h), k.push(h));
          }
          ResetModel() {}
          async DeleteClanEvent(u, d) {
            this.m_mapExistingEvents.has(d) &&
              (this.m_mapExistingEvents.get(d).deleteInProgress = !0);
            let h = new URLSearchParams();
            h.append("sessionid", (0, _.KC)()),
              h.append("bDelete", "1"),
              h.append("gid", d);
            const B = await L().post(
              _.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                u.ConvertTo64BitString() +
                "/ajaxcreateupdatedeletepartnerevents/",
              h,
            );
            return this.RemoveGIDFromList(u, d), B.data;
          }
          RemoveGIDFromList(u, d) {
            if (
              (this.m_mapExistingEvents.delete(d),
              this.m_mapClanToGIDs.has(u.GetAccountID()))
            ) {
              let h = this.m_mapClanToGIDs.get(u.GetAccountID()),
                B = h.indexOf(d);
              B >= 0 && h.splice(B, 1);
            }
          }
          FlushEventFromCache(u, d) {
            if (
              (u &&
                this.m_mapExistingEvents.has(u) &&
                (d || (d = this.m_mapExistingEvents.get(u).AnnouncementGID),
                this.m_mapExistingEvents.delete(u)),
              d &&
                (this.m_mapExistingEvents.has(v.cB + d) &&
                  this.m_mapExistingEvents.delete(v.cB + d),
                this.m_mapAnnouncementBodyToEvent.has(d)))
            ) {
              const h = this.m_mapAnnouncementBodyToEvent.get(d);
              h &&
                this.m_mapExistingEvents.has(h) &&
                this.m_mapExistingEvents.delete(h),
                this.m_mapAnnouncementBodyToEvent.delete(d);
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            u,
            d,
            h,
            B,
            k,
            J = !1,
          ) {
            let F = (0, A.hE)(J ? i.Bhc : (0, i.sfN)(_.TS.LANGUAGE)),
              N = {
                appid: d,
                clan_accountid: u ? u.GetAccountID() : void 0,
                announcement_gid: B,
                event_gid: h,
                lang_list: F,
                last_modified_time: k || 0,
                origin: self.origin,
                for_edit: J,
                only_summary: this.m_bOnlySummary,
              },
              re = null,
              ne = null;
            if (J) {
              const q = (0, _.yK)();
              q === "community"
                ? ((ne = _.TS.COMMUNITY_BASE_URL),
                  (ne += u ? "gid/" + u.ConvertTo64BitString() : "ogg/" + d),
                  (ne += "/"))
                : q === "partner"
                  ? (ne = _.TS.PARTNER_BASE_URL + "sales/")
                  : (ne = _.TS.STORE_BASE_URL + "events/"),
                (ne += "ajaxgetpartnereventforedit"),
                (re = { params: N, withCredentials: !0 });
            } else
              (ne = _.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
                (re = { params: N, withCredentials: !1 });
            try {
              let q = await L().get(ne, re);
              if (q.data.success !== t.R) return;
              let ee = q.data.event,
                se = (0, U.E0)(ee);
              if (
                !this.m_mapExistingEvents.has(se) ||
                (this.m_mapExistingEvents.get(se).rtime32_last_modified ?? 0) <
                  (ee.rtime32_last_modified ?? 0) ||
                (this.m_mapExistingEvents.get(se).rtime32_moderator_reviewed ??
                  0) < (ee.rtime_mod_reviewed ?? 0)
              ) {
                (0, S.wT)(
                  ee.clan_steamid,
                  "ClanSteamID is missing from data we received",
                );
                let ie = new P.b(ee.clan_steamid);
                this.InsertEventModelFromClanEventData(ie, ee);
              }
              return this.m_mapExistingEvents.get(se);
            } catch {
              return;
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            u,
            d,
            h,
            B,
            k,
            J,
          ) {
            if (h && this.m_mapExistingEvents.has(h))
              return this.m_mapExistingEvents.get(h);
            if (B) {
              if (this.m_mapExistingEvents.has(v.cB + B))
                return this.m_mapExistingEvents.get(v.cB + B);
              if (this.m_mapAnnouncementBodyToEvent.has(B)) {
                const F = this.m_mapAnnouncementBodyToEvent.get(B);
                if (F && this.m_mapExistingEvents.has(F))
                  return this.m_mapExistingEvents.get(F);
              }
            }
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              u,
              d,
              h,
              B,
              k,
              J,
            );
          }
          async LoadPartnerEventFromAnnoucementGID(u, d, h, B) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              u,
              void 0,
              d,
              h,
              B,
            );
          }
          async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(u, d, h, B) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              u,
              void 0,
              void 0,
              d,
              h,
              B,
            );
          }
          async LoadPartnerEventFromClanEventGID(u, d, h, B) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              u,
              d,
              void 0,
              h,
              B,
            );
          }
          async LoadPartnerEventFromClanEventGIDAndClanSteamID(u, d, h, B) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              u,
              void 0,
              d,
              void 0,
              h,
              B,
            );
          }
          async LoadPartnerEventGeneric(u, d, h, B, k) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              u,
              d,
              h,
              B,
              k,
            );
          }
          async LoadHiddenPartnerEvent(u, d) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              u,
              void 0,
              d,
              void 0,
              0,
              !0,
            );
          }
          async LoadHiddenPartnerEventByAnnouncementGID(u, d) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              u,
              void 0,
              void 0,
              d,
              0,
              !0,
            );
          }
          async HintLoadImportantUpdates() {
            const d = (0, f.tB)(36e5);
            if (d != this.m_tsUpdatedAppsQueryTime) {
              this.m_tsUpdatedAppsQueryTime = d;
              const h = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
                B = _.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
                k = await L().get(B, { params: h, withCredentials: !0 });
              k.data.apps &&
                k.data.apps.length > 0 &&
                (0, c.h5)(() => {
                  const J = new Map(
                    k.data.apps?.map((F) => [F.appid, new m(F)]),
                  );
                  this.m_mapUpdatedApps = J;
                });
            }
            return this.m_mapUpdatedApps;
          }
          GetAppImportantUpdate(u) {
            return (
              this.HintLoadImportantUpdates().catch((d) => {
                console.log("UpdatedApps failed to load: ", d.response?.data);
              }),
              this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(u)
            );
          }
          async LoadClanEventLocalizationFromAnnouncementGID(u, d) {
            let h =
              _.TS.COMMUNITY_BASE_URL +
              "gid/" +
              u.ConvertTo64BitString() +
              "/announcements/ajaxgetlocalization/" +
              d;
            return (await L().get(h)).data.localization;
          }
          async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(u, d, h) {
            const B = new Array(),
              k = _.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
              J = (0, A.hE)((0, i.sfN)(_.TS.LANGUAGE));
            let F = null,
              N = null;
            if (u) {
              let q = new Array();
              u.forEach((ee) => {
                this.m_mapExistingEvents.has(ee)
                  ? B.push(this.m_mapExistingEvents.get(ee))
                  : q.push(ee);
              }),
                q.sort(),
                (F = q);
            }
            if (d) {
              let q = new Array();
              d.forEach((ee) => {
                if (
                  this.m_mapAnnouncementBodyToEvent.has(ee) &&
                  this.m_mapAnnouncementBodyToEvent.get(ee) &&
                  this.m_mapExistingEvents.has(
                    this.m_mapAnnouncementBodyToEvent.get(ee),
                  )
                ) {
                  let se = this.m_mapAnnouncementBodyToEvent.get(ee);
                  if (se) {
                    const ie = this.m_mapExistingEvents.get(se);
                    ie && B.push(ie);
                  }
                } else q.push(ee);
              }),
                q.sort(),
                (N = q);
            }
            if (!F && !N) return B;
            const re = new Array(),
              ne = 100;
            for (; (F?.length ?? 0) > 0 || (N?.length ?? 0) > 0; ) {
              let q = {
                event_gids:
                  (F?.length ?? 0) > 0 ? F?.splice(0, ne).join(",") : void 0,
                announcement_gids:
                  (N?.length ?? 0) > 0 ? N?.splice(0, ne).join(",") : void 0,
                lang_list: J,
                origin: self.origin,
              };
              re.push(
                L().get(k, { params: q, cancelToken: h ? h.token : void 0 }),
              );
            }
            try {
              const q = await Promise.all([...re]);
              let ee = 0;
              (0, c.h5)(() =>
                q.forEach((se) => {
                  if (se && se.data && se.data.events)
                    for (let ie of se.data.events) {
                      let De = (0, U.E0)(ie);
                      if (!this.m_mapExistingEvents.has(De)) {
                        let je = new P.b(ie.clan_steamid);
                        this.InsertEventModelFromClanEventData(je, ie);
                      }
                      B.push(this.m_mapExistingEvents.get(De));
                    }
                  else {
                    const ie = (0, T.H)(se);
                    console.error(
                      "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                        ie.strErrorMsg,
                      ie,
                    );
                  }
                  ee += 1;
                }),
              );
            } catch (q) {
              const ee = (0, T.H)(q);
              console.error(
                "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                  ee.strErrorMsg,
                ee,
              );
            }
            return B;
          }
          async SavePartnerEventSaleAssets(u, d, h, B) {
            let k = null;
            if (!this.m_mapExistingEvents.has(d)) return !1;
            try {
              const J = `${_.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${u}`,
                F = new FormData();
              F.append("sessionid", (0, _.KC)()),
                F.append("gidclanevent", d),
                F.append("json", JSON.stringify(h)),
                F.append("pageStyles", JSON.stringify(B));
              const N = await L().post(J, F, { withCredentials: !0 });
              if (N?.data?.success == t.R) {
                const re = this.m_mapExistingEvents.get(d);
                if (re && re.jsondata) {
                  for (const ne in h)
                    if (h.hasOwnProperty(ne) && h[ne]) {
                      const q = ne,
                        ee = h[q];
                      ee !== void 0 && q !== void 0 && (re.jsondata[q] = ee);
                    }
                }
                return this.GetPartnerEventChangeCallback(d).Dispatch(re), !0;
              }
              k = (0, T.H)(N);
            } catch (J) {
              k = (0, T.H)(J);
            }
            return (
              console.error(
                "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                  k?.strErrorMsg,
                k,
              ),
              !1
            );
          }
          BIsSummaryOnlyStore() {
            return this.m_bOnlySummary;
          }
        }
        E([c.sH], b.prototype, "m_mapExistingEvents", 2),
          E([c.sH], b.prototype, "m_mapAnnouncementBodyToEvent", 2),
          E([c.sH], b.prototype, "m_mapClanToGIDs", 2),
          E([c.sH], b.prototype, "m_mapAppIDToGIDs", 2),
          E([c.sH], b.prototype, "m_mapUpdatedApps", 2),
          E([c.XI], b.prototype, "Init", 1),
          E([Z.oI], b.prototype, "GetPartnerEventChangeCallback", 1),
          E([c.XI], b.prototype, "RegisterClanEvents", 1),
          E([c.XI], b.prototype, "InsertEventModelFromClanEventData", 1),
          E([c.XI], b.prototype, "DeleteClanEvent", 1),
          E([c.XI], b.prototype, "RemoveGIDFromList", 1),
          E([c.XI], b.prototype, "FlushEventFromCache", 1),
          E([Z.oI], b.prototype, "SavePartnerEventSaleAssets", 1);
        const M = new b();
        (0, G.V)("g_PartnerEventStore", M);
        const C = new b(!0);
        (0, G.V)("g_PartnerEventSummaryStore", C);
        function X(Y, u, d = !1) {
          const [h, B] = (0, $.useState)(() => M.GetClanEventModel(u)),
            [k, J] = (0, $.useState)(!0),
            F = (0, $.useMemo)(() => P.b.InitFromClanID(Y), [Y]);
          return (
            (0, $.useEffect)(() => {
              !h &&
                Y > 0 &&
                (M.Init(),
                M.LoadPartnerEventFromClanEventGIDAndClanSteamID(F, u, 0, d)
                  .then(B)
                  .finally(() => J(!1)));
            }, [F, u, h, Y, d]),
            (0, Z.hL)(d ? M.GetPartnerEventChangeCallback(u) : void 0, B),
            { eventModel: h, bLoading: k }
          );
        }
        function te() {
          return { fnSaveSaleAssets: M.SavePartnerEventSaleAssets };
        }
      },
      63854: (ae, R, a) => {
        "use strict";
        a.d(R, { a: () => v, z: () => t });
        var y = a(71742),
          L = a(13018),
          c = a(60298),
          f = a(98609),
          i = a(67705);
        class t {
          m_steamInterface;
          GetPromotionTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              t.s_Singleton ||
                ((t.s_Singleton = new t()), t.s_Singleton.Init()),
              t.s_Singleton
            );
          }
          Init() {
            const z = (0, i.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            (0, y.wT)(!!z, "require promotion_operation_token"),
              (this.m_steamInterface = (0, c.p)(
                new L.D(f.TS.WEBAPI_BASE_URL, z),
              ));
          }
        }
        function v() {
          return t.Get().GetPromotionTransport().GetServiceTransport();
        }
      },
      54407: (ae, R, a) => {
        "use strict";
        a.d(R, { B3: () => x, CF: () => E, KM: () => Z, KT: () => j });
        var y = a(41735),
          L = a.n(y),
          c = a(58632),
          f = a.n(c),
          i = a(90626),
          t = a(20194),
          v = a(75233),
          P = a(72604),
          z = a(76559),
          w = a(34592),
          S = a(3166),
          T = a(35038),
          g = a(27386),
          K = a(68312),
          _ = a(40497);
        const $ = "nicknames";
        function Z(I) {
          const m = (0, K.KV)(),
            { data: O, isLoading: p } = (0, t.I)({
              queryKey: [$],
              queryFn: async () => {
                const b = new Map();
                if (S.iA.logged_in) {
                  const M = T.w.Init(g.w_T),
                    X = (await g.xtC.GetNicknameList(m, M)).Body().toObject();
                  X?.nicknames &&
                    X.nicknames.length > 0 &&
                    X.nicknames.forEach((te) => {
                      te.accountid &&
                        te.nickname &&
                        b.set(te.accountid, te.nickname);
                    });
                }
                return b;
              },
            });
          return O ? O.get(I) : null;
        }
        async function A(I) {
          if (!I || I.length == 0) return [];
          const m =
            (0, S.yK)() == "community"
              ? S.TS.COMMUNITY_BASE_URL
              : S.TS.STORE_BASE_URL;
          if (I.length == 1) {
            const O = { accountid: I[0], origin: self.origin },
              p = await L().get(`${m}actions/ajaxgetavatarpersona`, {
                params: O,
              });
            if (
              !p ||
              p.status != 200 ||
              p.data?.success != P.R ||
              !p.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, w.H))(p).strErrorMsg}`;
            return [p.data.userinfo];
          } else {
            const O = { accountids: I.join(","), origin: self.origin },
              p = await L().get(`${m}actions/ajaxgetmultiavatarpersona`, {
                params: O,
              });
            if (
              !p ||
              p.status != 200 ||
              p.data?.success != P.R ||
              !p.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, w.H))(p).strErrorMsg}`;
            const b = new Map();
            return (
              p.data.userinfos.forEach((M) =>
                b.set(new z.b(M.steamid).GetAccountID(), M),
              ),
              I.map((M) => b.get(M))
            );
          }
        }
        const U = new (f())((I) => A(I), { cache: !1 }),
          G = "avatarandpersonas";
        function j(I) {
          const { data: m, isLoading: O } = (0, t.I)({
            queryKey: [G, I],
            queryFn: () => U.load(I),
          });
          return [m, O];
        }
        function x(I) {
          const m = (0, v.jE)(),
            { data: O, isLoading: p } = (0, t.I)({
              queryKey: [G, I],
              queryFn: async () => {
                const M = await U.loadMany(I);
                return (
                  M.forEach((C) => {
                    if (C instanceof Error) return;
                    const X = [G, new z.b(C.steamid).GetAccountID()];
                    m.setQueryData(X, C);
                  }),
                  M
                );
              },
              enabled: I?.length > 0,
            }),
            b = (0, i.useMemo)(() => {
              const M = new Array();
              return (
                O?.forEach((C) => {
                  C instanceof Error || M.push(C);
                }),
                M
              );
            }, [O]);
          return p ? null : b;
        }
        function E(I) {
          return _.L.getQueryData([G, I]);
        }
      },
      19324: (ae, R, a) => {
        "use strict";
        a.d(R, { S: () => w, c: () => z });
        var y = a(72604),
          L = a(41735),
          c = a.n(L),
          f = a(20194),
          i = a(34592),
          t = a(98609),
          v = a(3166);
        async function P(S) {
          const T = { accountid: S, origin: self.origin };
          let g = `${t.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
          (0, v.yK)() == "partner" &&
            (g = `${t.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
          const K = await c().get(g, { params: T, withCredentials: !0 });
          if (
            !K ||
            K.status != 200 ||
            K.data?.success != y.R ||
            !K.data?.partners
          )
            throw `Load single user partner info failed ${((0, i.H))(K).strErrorMsg}`;
          return K.data.partners;
        }
        function z(S) {
          const { data: T, isLoading: g } = (0, f.I)({
            queryKey: ["PartnerInfoList", S],
            queryFn: () => P(S),
          });
          return g ? null : T;
        }
        function w(S, T) {
          return z(S)?.find((K) => K.partnerid === T);
        }
      },
      24806: (ae, R, a) => {
        "use strict";
        a.d(R, { Ng: () => A, iN: () => U, yk: () => G });
        var y = a(7850),
          L = a(75844),
          c = a(65946),
          f = a(90626),
          i = a(99412),
          t = a(32093),
          v = a(50109),
          P = a(95695),
          z = a.n(P),
          w = a(36707),
          S = a(18210),
          T = a(92264),
          g = a(54963),
          K = a(71421),
          _ = Object.defineProperty,
          $ = Object.getOwnPropertyDescriptor,
          Z = (j, x, E, I) => {
            for (
              var m = I > 1 ? void 0 : I ? $(x, E) : x, O = j.length - 1, p;
              O >= 0;
              O--
            )
              (p = j[O]) && (m = (I ? p(x, E, m) : p(m)) || m);
            return I && m && _(x, E, m), m;
          };
        let A = class extends f.Component {
          GenerateLanguageOptions() {
            let j = [];
            const {
              fnFilterLanguage: x,
              fnLangHasData: E,
              fnLastUpdateRTime: I,
              fnIsLangSupported: m,
            } = this.props;
            this.props.bAllowUnsetOption &&
              j.push(
                (0, y.jsx)(
                  "option",
                  {
                    value: i.xPp,
                    children: (0, S.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let O = new Array();
            const p = this.props.realms || [t.TU.k_ESteamRealmGlobal];
            for (const M of S.A0.GetLanguageListForRealms(p)) {
              if (x && !x(M)) continue;
              const C = (0, i.LgB)(M),
                X = (0, S.we)("#Language_" + C),
                te = !!(m && m(M));
              O.push({ eLang: M, sLocName: X, bSupported: te });
            }
            O.sort((M, C) =>
              M.bSupported != C.bSupported
                ? M.bSupported
                  ? -1
                  : 1
                : M.sLocName.localeCompare(C.sLocName),
            );
            let b = !1;
            for (const M of O) {
              M.bSupported != b &&
                (j.push(
                  (0, y.jsx)(
                    "option",
                    {
                      className: z().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, S.we)(
                        M.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    M.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (b = M.bSupported));
              const C = E && E(M.eLang),
                X = I && I(M.eLang);
              let te = M.sLocName;
              X &&
                X !== 0 &&
                ((te += " "),
                (te += (0, S.we)(
                  "#Language_Last_Update",
                  (0, S.$z)(X) +
                    " @ " +
                    (0, T.KC)(X, { bForce24HourClock: !1 }),
                ))),
                j.push(
                  (0, y.jsx)(
                    "option",
                    {
                      value: M.eLang,
                      className: (0, w.A)(
                        { [z().LanguageWithContent]: C },
                        M.bSupported
                          ? z().SupportedLanguage
                          : z().UnsupportedLanguage,
                      ),
                      children: te,
                    },
                    "langpicker" + M.eLang + (C ? "_hasdata" : ""),
                  ),
                );
            }
            return j;
          }
          OnLanguageChange(j) {
            const { fnOnLanguageChanged: x, selectedLang: E } = this.props;
            let I = Number.parseInt(j.currentTarget.value);
            I != E && x && x(I);
          }
          render() {
            const { selectedLang: j, bDisabled: x, strTooltip: E } = this.props;
            let I = this.GenerateLanguageOptions();
            return (0, y.jsx)(K.he, {
              toolTipContent: E,
              children: (0, y.jsx)("select", {
                value: j,
                onChange: this.OnLanguageChange,
                disabled: x,
                children: I,
              }),
            });
          }
        };
        Z([g.oI], A.prototype, "OnLanguageChange", 1), (A = Z([L.PA], A));
        function U(j) {
          const [x, E] = (0, c.q3)(() => [
            v.O.Get().GetHasLocalizationContext(),
            v.O.Get().GetCurEditLanguage(),
          ]);
          return (0, y.jsx)(A, {
            selectedLang: E,
            fnLangHasData: v.O.Get().BHasLanguageData,
            fnOnLanguageChanged: v.O.Get().SetCurEditLanguage,
            bDisabled: !x,
            strTooltip: x
              ? void 0
              : (0, S.we)("#Localization_EditorNotInFocus"),
          });
        }
        function G(j) {
          const { fnLangHasData: x } = j;
          f.useEffect(
            () => (
              v.O.Get().SetHasLocalizationContext(!0),
              () => v.O.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const E = (0, c.q3)(() => {
            const I = [];
            for (let m = i.Bhc; m < i.bP9; ++m) I[m] = !!(x && x(m));
            return I;
          });
          return (
            f.useEffect(() => v.O.Get().SetHasLanguage(E), [E]),
            (0, y.jsx)(y.Fragment, {})
          );
        }
      },
      12932: (ae, R, a) => {
        "use strict";
        a.d(R, { AQ: () => K, pn: () => $, qx: () => _ });
        var y = a(7850),
          L = a(58534),
          c = a(18210),
          f = a(36118),
          i = a(90626),
          t = a(36707),
          v = a(95695),
          P = a.n(v),
          z = a(25792),
          w = a(64734),
          S = a.n(w),
          T = a(65946),
          g = a(11243);
        function K(Z) {
          const {
              title: A,
              tooltip: U,
              getMinimized: G,
              toggleMinimized: j,
              className: x,
              children: E,
              elAdditionalButtons: I,
            } = Z,
            m = (0, T.q3)(() => G());
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)("div", {
                className: (0, t.A)(
                  x,
                  w.SectionTitleHeader,
                  w.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, y.jsxs)("div", {
                    className: (0, t.A)(
                      v.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [A, !!U && (0, y.jsx)(g.o, { tooltip: U })],
                  }),
                  (0, y.jsxs)("div", {
                    className: w.SectionTitleButtons,
                    children: [
                      I,
                      (0, y.jsx)($, { bIsMinimized: m, fnToggleMinimize: j }),
                    ],
                  }),
                ],
              }),
              !m && (0, y.jsx)(z.tH, { children: E }),
            ],
          });
        }
        function _(Z) {
          const [A, U] = i.useState(!!Z.bStartMinimized);
          return (0, y.jsx)(K, {
            ...Z,
            getMinimized: () => A,
            toggleMinimized: () => U(!A),
            children: Z.children,
          });
        }
        function $(Z) {
          const { bIsMinimized: A, fnToggleMinimize: U } = Z,
            G = A ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, y.jsx)(L.$n, {
            "data-tooltip-text": (0, c.we)(G),
            onClick: U,
            children: Z.bIsMinimized
              ? (0, y.jsx)(f.hz4, {})
              : (0, y.jsx)(f.Xjb, {}),
          });
        }
      },
      41502: (ae, R, a) => {
        "use strict";
        a.d(R, { J2: () => L, bv: () => f, kO: () => c, xi: () => y });
        function y(i) {
          const t = new Date(i.getTime());
          return t.setHours(0, 0, 0, 0), t;
        }
        function L(i) {
          const t = new Date(i.getTime());
          return t.setDate(1), t.setHours(0, 0, 0, 0), t;
        }
        function c(i, t) {
          const v = new Date(i);
          return v.setDate(i.getDate() + t), v;
        }
        function f(i, t) {
          return i.reduce((v, P) => {
            const z = t(P),
              w = Math.floor(z.getTime() / 1e3),
              S = v.get(w) || [];
            return v.set(w, [...S, P]), v;
          }, new Map());
        }
      },
      22880: (ae, R, a) => {
        "use strict";
        a.d(R, { g: () => c });
        var y = a(40323),
          L = a.n(y);
        class c {
          static ParseCSVFile(i, t) {
            return new Promise((v, P) => {
              const w = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: v,
                error: (S) => P({ errors: [S] }),
                transformHeader: t,
              };
              L().parse(i, w);
            });
          }
          static ReadFile(i) {
            return new Promise((t, v) => {
              const P = new FileReader();
              (P.onload = () => t(P.result ?? "")), P.readAsText(i);
            });
          }
          static WriteFile(i, t) {
            let v = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(i, t);
            else {
              const P = window.URL.createObjectURL(i);
              v.href = P;
            }
            v.setAttribute("download", t), v.click();
            try {
              document.removeChild(v);
            } catch {}
          }
          static WriteCSVToFile(i, t, v, P) {
            const z = P
                ? L().unparse({ fields: P, data: i }, { header: !0 })
                : L().unparse(i, { header: !0 }),
              w = v == !0 ? ["\uFEFF" + z] : [z];
            c.WriteFile(new Blob(w, { type: "text/csv:charset=utf-8;" }), t);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(i, t) {
            const v = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let P =
              "<" +
              v() +
              'xml version="1.0" encoding="UTF-8" ' +
              v() +
              `>
`;
            (P += new XMLSerializer().serializeToString(i)),
              c.WriteFile(
                new Blob([P], { type: "application/xml:charset=utf-8;" }),
                t,
              );
          }
        }
      },
      71684: (ae, R, a) => {
        "use strict";
        a.d(R, { JS: () => f, rG: () => v });
        var y = a(99412),
          L = a(39905);
        function c(P) {
          return P !== k_EClanEventType_NewsEvent;
        }
        function f(P) {
          switch (P) {
            case y.Aqr:
            case y.I5b:
            case y.jO6:
            case y.Y3j:
            case y.Bb7:
            case y.TiP:
            case y.EPt:
            case y.E3D:
            case y.L0X:
            case y.KDJ:
            case y.Fa4:
            case y.Aav:
            case y.SRb:
            case y.HRy:
            case y.C$4:
            case y.zA:
            case y.y6:
            case y.hGl:
            case y.WNR:
            case y.pIh:
            case y.izQ:
            case y.LOv:
            case y.zcX:
            case y.DRF:
            case y.HFK:
              return !0;
          }
          return !1;
        }
        function i(P, z) {
          return !(
            P == k_EClanEventType_SmallUpdateEvent ||
            P == k_EClanEventType_CreatorHome ||
            (z && z.indexOf("curator") != -1)
          );
        }
        function t(P) {
          return [
            k_EClanEventType_MajorUpdateEvent,
            k_EClanEventType_GameReleaseEvent,
            k_EClanEventType_DLCReleaseEvent,
            k_EClanEventType_SeasonRelease,
          ].includes(P);
        }
        function v(P) {
          let z = "#PartnerEvent_" + P,
            w = L.Z.Localize(z);
          return w != z ? w : L.Z.Localize("#PartnerEvent_Other");
        }
      },
      78430: (ae) => {
        ae.exports = { FeedbackText: "_1xRt0l_W6ami9_cnLrxvfj" };
      },
      64734: (ae) => {
        ae.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();
