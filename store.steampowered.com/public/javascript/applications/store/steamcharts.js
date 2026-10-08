/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [2414],
    {
      50109: (F, we, r) => {
        "use strict";
        r.d(we, { E: () => te, O: () => J });
        var e = r(14947),
          z = r(65946),
          Z = r(99412),
          le = r(41635),
          re = r(27066),
          ne = r(3166),
          pe = r(38585),
          V = Object.defineProperty,
          j = Object.getOwnPropertyDescriptor,
          x = (A, T, k, N) => {
            for (
              var $ = N > 1 ? void 0 : N ? j(T, k) : T, Ee = A.length - 1, Y;
              Ee >= 0;
              Ee--
            )
              (Y = A[Ee]) && ($ = (N ? Y(T, k, $) : Y($)) || $);
            return N && $ && V(T, k, $), $;
          };
        const Q = class qt {
          m_eCurLang = (0, Z.sfN)(ne.TS.LANGUAGE);
          m_rgHasData = (0, le.$Y)([], Z.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new pe.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(T) {
            return this.m_eCurLang != T
              ? ((this.m_eCurLang = T), this.GetCallback().Dispatch(T), !0)
              : !1;
          }
          SetHasLanguage(T) {
            T.forEach((k, N) => {
              this.m_rgHasData[N] != k && (this.m_rgHasData[N] = k);
            });
          }
          BHasLanguageData(T) {
            return this.m_rgHasData[T];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(T) {
            T != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = T);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              qt.s_globalSingletonStore ||
                (qt.s_globalSingletonStore = new qt()),
              qt.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        x([e.sH], Q.prototype, "m_eCurLang", 2),
          x([e.sH], Q.prototype, "m_rgHasData", 2),
          x([e.sH], Q.prototype, "m_bHasLocalizationContext", 2),
          x([re.o], Q.prototype, "GetCurEditLanguage", 1),
          x([re.o], Q.prototype, "SetCurEditLanguage", 1),
          x([e.XI.bound], Q.prototype, "SetHasLanguage", 1),
          x([re.o], Q.prototype, "BHasLanguageData", 1);
        let J = Q;
        function te() {
          return (0, z.q3)(() => J.Get().GetCurEditLanguage());
        }
      },
      21042: (F, we, r) => {
        "use strict";
        r.d(we, { Sm: () => pe, U: () => re, r3: () => j });
        var e = r(99412),
          z = r(72609),
          Z = r(73259),
          le = r(76559);
        function re(x, Q, J, te) {
          const A = new Z.lh();
          return (
            (A.type = Q),
            (A.clanSteamID = new le.b(x, z.TS.EUNIVERSE, e.P3F, 0)),
            (A.GID = "fakeevent_" + ne++),
            (A.visibility_state = Z.zv.k_EEventStateUnlisted),
            (A.visibilityStartTime = te - 1),
            (A.jsondata.bSaleEnabled = !0),
            (A.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (A.jsondata.sale_vanity_id = J),
            (A.jsondata.sale_header_offset = 0),
            (A.jsondata.sale_header_disable_top_margin = !1),
            A
          );
        }
        let ne = 1234;
        function pe(x, Q) {
          return {
            unique_id: ne++,
            capsules: [],
            events: [],
            links: [],
            section_type: x,
            localized_label: [],
            default_label: Q,
          };
        }
        const V = "socialcontent_";
        function j() {
          return {
            platforms: [
              { label: Z.Zf.Steam, checked: !0 },
              { label: Z.Zf.Facebook, checked: !0 },
              { label: Z.Zf.Twitter, checked: !0 },
              { label: Z.Zf.Reddit, checked: !0 },
            ],
            doorsEnabled: !1,
            content_options: [
              {
                unique_id: V + Math.floor(Math.random() * 1e6),
                door: void 0,
                twitter_card: Z.jR.SummaryLargeImage,
                localized_option_fields: {
                  localized_header: [],
                  title: [],
                  description: [],
                  image: [],
                },
              },
            ],
          };
        }
      },
      55436: (F, we, r) => {
        "use strict";
        r.d(we, { r: () => te, z: () => Q });
        var e = r(7850),
          z = r(90626),
          Z = r(16412),
          le = r(25792),
          re = r(96538),
          ne = r(18210),
          pe = r(85599),
          V = r(17618),
          j = r.n(V),
          x = r(53424);
        const Q = (A) => {
            const { clanSteamID: T, fnImageSelectCallBack: k } = A,
              [N, $] = (0, z.useState)(""),
              Ee = (0, x.mr)(A.clanSteamID.GetAccountID()),
              Y = () => A.closeModal && A.closeModal(),
              ce = x.pU.GetFilteredClanImages(T, N),
              be = (ve) => {
                k(ve), Y();
              };
            return (0, e.jsx)(le.tH, {
              children: (0, e.jsx)(re.x_, {
                onEscKeypress: Y,
                children: (0, e.jsxs)(Z.UC, {
                  children: [
                    (0, e.jsx)(Z.Y9, {
                      children: (0, ne.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(Z.nB, {
                      children: (0, e.jsxs)(Z.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, ne.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(Z.pd, {
                            placeholder: (0, ne.we)("#ClanImageChooser_Search"),
                            value: N,
                            onChange: (ve) => $(ve.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: V.ImagesOuterContainer,
                            children: Ee
                              ? (0, e.jsx)(pe.t, {
                                  size: "medium",
                                  string: (0, ne.we)("#Loading"),
                                })
                              : ce.length > 0
                                ? ce.map((ve) =>
                                    (0, e.jsx)(
                                      J,
                                      {
                                        clanImage: ve,
                                        searchStringHilight: N,
                                        fnImageClick: be,
                                      },
                                      "ci" + ve.image_hash,
                                    ),
                                  )
                                : N.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, ne.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, ne.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(Z.wi, {
                      children: (0, e.jsx)(Z.$n, {
                        onClick: Y,
                        children: (0, ne.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          J = (A) => {
            const { clanImage: T, searchStringHilight: k, fnImageClick: N } = A;
            let $ = T.file_name ? T.file_name : "",
              Ee = te(k, $, String(T.imageid), V.Hilight);
            return (0, e.jsxs)("div", {
              className: V.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: V.Image,
                  style: { backgroundImage: `url( '${T.thumb_url}' )` },
                  onDoubleClick: () => N(T),
                }),
                (0, e.jsx)("div", {
                  className: V.ImageFilename,
                  title: $,
                  children: Ee,
                }),
              ],
            });
          };
        function te(A, T, k, N) {
          let $ = [];
          if (A.length > 0) {
            let Ee = T.toLocaleLowerCase();
            for (let Y = 0; Y < T.length; ) {
              let ce = Ee.indexOf(A, Y);
              if (ce < 0) {
                $.push(
                  (0, e.jsx)(
                    "span",
                    { children: T.substring(Y) },
                    k + "_" + String(Y),
                  ),
                );
                break;
              } else
                Y < ce &&
                  $.push(
                    (0, e.jsx)(
                      "span",
                      { children: T.substring(Y, ce) },
                      k + "_" + String(Y),
                    ),
                  ),
                  $.push(
                    (0, e.jsx)(
                      "span",
                      { className: N, children: T.substr(ce, A.length) },
                      k + "_" + String(Y),
                    ),
                  ),
                  (Y = ce + A.length);
            }
          } else $.push((0, e.jsx)("span", { children: T }, k + "_null"));
          return $;
        }
      },
      24806: (F, we, r) => {
        "use strict";
        r.d(we, { Ng: () => N });
        var e = r(7850),
          z = r(75844),
          Z = r(90626),
          le = r(99412),
          re = r(32093),
          ne = r(50109),
          pe = r(95695),
          V = r.n(pe),
          j = r(36707),
          x = r(18210),
          Q = r(92264),
          J = r(30096),
          te = r(71421),
          A = Object.defineProperty,
          T = Object.getOwnPropertyDescriptor,
          k = (Y, ce, be, ve) => {
            for (
              var M = ve > 1 ? void 0 : ve ? T(ce, be) : ce,
                ee = Y.length - 1,
                q;
              ee >= 0;
              ee--
            )
              (q = Y[ee]) && (M = (ve ? q(ce, be, M) : q(M)) || M);
            return ve && M && A(ce, be, M), M;
          };
        let N = class extends Z.Component {
          GenerateLanguageOptions() {
            let Y = [];
            const {
              fnFilterLanguage: ce,
              fnLangHasData: be,
              fnLastUpdateRTime: ve,
              fnIsLangSupported: M,
            } = this.props;
            this.props.bAllowUnsetOption &&
              Y.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: le.xPp,
                    children: (0, x.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let ee = new Array();
            const q = this.props.realms || [re.TU.k_ESteamRealmGlobal];
            for (const oe of x.A0.GetLanguageListForRealms(q)) {
              if (ce && !ce(oe)) continue;
              const je = (0, le.LgB)(oe),
                c = (0, x.we)("#Language_" + je),
                Be = !!(M && M(oe));
              ee.push({ eLang: oe, sLocName: c, bSupported: Be });
            }
            ee.sort((oe, je) =>
              oe.bSupported != je.bSupported
                ? oe.bSupported
                  ? -1
                  : 1
                : oe.sLocName.localeCompare(je.sLocName),
            );
            let _e = !1;
            for (const oe of ee) {
              oe.bSupported != _e &&
                (Y.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: V().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, x.we)(
                        oe.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    oe.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (_e = oe.bSupported));
              const je = be && be(oe.eLang),
                c = ve && ve(oe.eLang);
              let Be = oe.sLocName;
              c &&
                c !== 0 &&
                ((Be += " "),
                (Be += (0, x.we)(
                  "#Language_Last_Update",
                  (0, x.$z)(c) +
                    " @ " +
                    (0, Q.KC)(c, { bForce24HourClock: !1 }),
                ))),
                Y.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: oe.eLang,
                      className: (0, j.A)(
                        { [V().LanguageWithContent]: je },
                        oe.bSupported
                          ? V().SupportedLanguage
                          : V().UnsupportedLanguage,
                      ),
                      children: Be,
                    },
                    "langpicker" + oe.eLang + (je ? "_hasdata" : ""),
                  ),
                );
            }
            return Y;
          }
          OnLanguageChange(Y) {
            const { fnOnLanguageChanged: ce, selectedLang: be } = this.props;
            let ve = Number.parseInt(Y.currentTarget.value);
            ve != be && ce && ce(ve);
          }
          render() {
            const {
              selectedLang: Y,
              bDisabled: ce,
              strTooltip: be,
            } = this.props;
            let ve = this.GenerateLanguageOptions();
            return (0, e.jsx)(te.he, {
              toolTipContent: be,
              children: (0, e.jsx)("select", {
                value: Y,
                onChange: this.OnLanguageChange,
                disabled: ce,
                children: ve,
              }),
            });
          }
        };
        k([J.oI], N.prototype, "OnLanguageChange", 1), (N = k([z.PA], N));
        function $(Y) {
          const [ce, be] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(N, {
            selectedLang: be,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !ce,
            strTooltip: ce
              ? void 0
              : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function Ee(Y) {
          const { fnLangHasData: ce } = Y;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const be = useObserver(() => {
            const ve = [];
            for (let M = k_ELanguage_English; M < k_ELanguage_MAX; ++M)
              ve[M] = !!(ce && ce(M));
            return ve;
          });
          return (
            React.useEffect(
              () => CEditorLocStore.Get().SetHasLanguage(be),
              [be],
            ),
            jsx(Fragment, {})
          );
        }
      },
      25679: (F, we, r) => {
        "use strict";
        r.d(we, { _: () => as });
        var e = r(7850),
          z = r(99412),
          Z = r(19298),
          le = r(20169),
          re = r(28604),
          ne = r(36631),
          pe = r(64387);
        function V(s) {
          const { strURL: t } = s;
          return t
            ? (0, e.jsx)("div", {
                className: pe.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var j = r(65946),
          x = r(90626),
          Q = r(73259),
          J = r(25792),
          te = r(52393),
          A = r.n(te),
          T = r(95695),
          k = r.n(T),
          N = r(36707),
          $ = r(3166),
          Ee = r(82054),
          Y = r(68266);
        function ce(s) {
          const { event: t, bIsPreview: a } = s;
          let o = t.jsondata.sale_background_video_webm,
            i = t.jsondata.sale_background_video_mp4;
          return i || o
            ? (0, e.jsx)(J.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, N.A)(
                    A().SaleBackground,
                    A()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    A().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: a
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    o && (0, e.jsx)("source", { src: o, type: "video/webm" }),
                    i &&
                      !$.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: i, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function be(s) {
          const { event: t, language: a, children: o, bIsPreview: i } = s,
            l = x.useRef(null),
            u = (0, Y.m0)(t, "sale_header", a),
            [v] = (0, j.q3)(() => [t.jsondata.sale_sub_menu]);
          x.useEffect(() => {
            if (!u) return;
            const C = new Image();
            (C.onload = () => {
              const y = (100 * C.width) / 950 + "%";
              l.current && l.current.style.setProperty("--background-scale", y);
            }),
              (C.src = u);
          }, [u]);
          const p = t.jsondata.sale_sections?.some(
              (C) => C.section_type === "contenthubmaincarousel",
            ),
            I =
              t.jsondata.item_source_type === Q.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                p),
            _ = u ? `url(${u})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              v
                ? (0, e.jsx)(Ee.j, {
                    event: t,
                    language: a,
                    bIsPreview: i,
                    subMenu: v,
                    styleVariation: Ee.g.k_SubMenu,
                  })
                : (0, e.jsx)(V, { strURL: u }),
              (0, e.jsx)("div", {
                className: (0, N.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: I,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, N.A)(
                    A()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    A().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: t.jsondata.sale_background_color,
                  },
                  ref: l,
                  children: [
                    u && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, N.A)(
                            k().SalePageBackground,
                            k().BackgroundImage,
                            k().Blur,
                          ),
                          src: u,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, N.A)(
                            k().SalePageBackground,
                            k().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: _,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(ce, { event: t, bIsPreview: i }),
                    (0, e.jsx)(e.Fragment, { children: o }),
                  ],
                }),
              }),
            ],
          });
        }
        var ve = r(26589),
          M = r(39905),
          ee = r(50909),
          q = r.n(ee);
        function _e(s) {
          const { eventModel: t } = s,
            { data: a } = (0, ve.hM)(t.clanSteamID.GetAccountID());
          if (
            !a ||
            (!a.can_edit && !a.support_user) ||
            (0, $.yK)() == "community"
          )
            return;
          const o = t.GetAllTags(),
            i = [];
          if (
            (o.includes("hide_store") &&
              i.push(
                M.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            o.includes("mod_hide_store") &&
              a.support_user &&
              i.push(M.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              o.includes("contenthub") &&
              i.push(
                M.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && i.length == 0))
          )
            return (0, e.jsx)("div", {
              className: q().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: q().WarningText,
                      children: M.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  i.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: q().WarningText,
                      children: [
                        M.Z.LocalizePlural(
                          "#Sale_SaleEventIsHidden_Reason",
                          i.length,
                        ),
                        (0, e.jsx)("ul", {
                          children: i.map((l) =>
                            (0, e.jsx)("li", { children: l }, l),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            });
        }
        var oe = r(76789),
          je = r.n(oe),
          c = r(18210);
        function Be(s) {
          const { eventModel: t, language: a } = s,
            [o, i] = (0, j.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, a),
            ]);
          return i && i?.length > 0
            ? o
              ? (0, e.jsx)("a", {
                  className: je().SalePageLogoCtn,
                  href: $.TS.STORE_BASE_URL + o,
                  children: (0, e.jsx)(He, { ...s }),
                })
              : (0, e.jsx)("div", {
                  className: (0, N.A)(je().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(He, { ...s }),
                })
            : null;
        }
        function He(s) {
          const { eventModel: t, language: a } = s,
            o = (0, Y.m0)(t, "sale_logo", a);
          return (0, e.jsx)("img", { src: o, alt: "logo" });
        }
        var Ne = r(72865),
          tt = r(71347),
          ct = r.n(tt),
          dt = r(53107);
        function ht(s) {
          const { rgPresenters: t } = s;
          if (!t || t.length == 0) return null;
          const a = (0, z.sfN)($.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, N.A)(
                  ct().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: M.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(at, { presentor: t[0], lang: a }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, N.A)(
                  ct().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: M.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((o, i) =>
                      (0, e.jsxs)(
                        x.Fragment,
                        {
                          children: [
                            (0, e.jsx)(at, { presentor: o, lang: a }),
                            t.length > 2 && ", ",
                          ],
                        },
                        o.url,
                      ),
                    ),
                  (0, e.jsx)(at, { presentor: t[t.length - 1], lang: a }),
                ),
              });
        }
        function at(s) {
          const { presentor: t, lang: a } = s,
            o = (0, Ne.aL)(t.url);
          return (0, e.jsx)(dt.uU, {
            href: o,
            bUseLinkFilter: !0,
            className: ct().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, a),
          });
        }
        var Ge = r(60480),
          pt = r(92757),
          D = r(18994),
          se = r(56412),
          ut = r(86515),
          We = r(39153),
          Ct = r(61478);
        function ke(s) {
          const { event: t, broadcastEmbedContext: a } = s,
            o = !!t?.jsondata?.broadcast_display_wide_player,
            i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(Ct.B, {
                event: t,
                broadcastEmbedContext: a,
                bWideBroadcastDisplay: o,
                bWideBroadcastPermitChat: i,
              }),
          });
        }
        var Oe = r(85671);
        function Ye(s) {
          const {
            event: t,
            fnOnChangeDayIndex: a,
            addtionalAdminButtons: o,
          } = s;
          return (0, e.jsx)(Oe.g, {
            eventModel: t,
            fnOnUpdateSaleDayIndex: a,
            addtionalAdminButtons: o,
            bSupportsSticky: !0,
          });
        }
        var qe = r(179),
          Ze = r(50109),
          gt = r(30096),
          ft = r(98609),
          Lt = r(57673);
        const Tt = new Map();
        function ja(s, t) {
          const a = s.findIndex((o) => o.section_type === "tabs");
          if (a >= 0 && t !== void 0) {
            const o = s[a],
              i = o.tabs?.findIndex((l) => l.unique_id === t);
            if (i !== void 0 && i >= 0 && o.tabs)
              return {
                selectedTabBackgroundDef: o.tabs[i].tab_background_img_groups,
                nTabSaleSectionIndex: a,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function ea(s, t, a) {
          const o = new Map(),
            i = new Map(),
            l = new Map();
          let u,
            v,
            p = 0;
          const { selectedTabBackgroundDef: I, nTabSaleSectionIndex: _ } = ja(
            t,
            a,
          );
          if (s?.enabled) {
            const C = s.groups?.length;
            if (
              (s.groups?.forEach((S, y) => {
                if (p >= t.length || t[p].section_type == "tabs") return;
                const G = new Array();
                for (
                  let L = 0;
                  L < (S?.num_sections || 0) &&
                  p < t.length &&
                  t[p].section_type != "tabs";
                  ++L, ++p
                ) {
                  const W = t[p].unique_id;
                  G.push(W),
                    i.set(W, S.background_id),
                    L === 0 && l.set(W, S.background_id);
                }
                if (
                  (o.set(S.background_id, {
                    nBackgroundGroupID: S.background_id,
                    sectionUniqueIDs: G,
                    nSaleSectionLastIndex: p - 1,
                    nUniqueIDNextSaleSection:
                      p < t.length && (_ === void 0 || p < _)
                        ? t[p].unique_id
                        : void 0,
                  }),
                  y + 1 == C && s.last_group_until_cover_section_until_end)
                )
                  for (
                    let L = p;
                    L < t.length &&
                    (!I || !I.enabled || L < _) &&
                    !(t[L].section_type == "tabs" && I?.enabled);
                    ++L
                  ) {
                    const W = t[L].unique_id;
                    i.set(W, S.background_id);
                  }
              }),
              p < t.length && (_ === void 0 || p < _) && (u = t[p].unique_id),
              I?.enabled && _ !== void 0)
            ) {
              let S = _;
              const y = I.groups.length;
              for (
                I.groups.forEach((G, O) => {
                  if (S >= t.length) return;
                  const L = new Array();
                  for (
                    let R = 0;
                    R < G.num_sections && S < t.length;
                    ++R, ++S
                  ) {
                    const X = t[S],
                      me = X.unique_id;
                    (0, Lt.bF)(a, X)
                      ? (L.push(me),
                        i.set(me, G.background_id),
                        R === 0 && l.set(me, G.background_id))
                      : --R;
                  }
                  let B = S;
                  for (; B < t.length && !(0, Lt.bF)(a, t[B]); ) B += 1;
                  if (
                    (o.set(G.background_id, {
                      nBackgroundGroupID: G.background_id,
                      sectionUniqueIDs: L,
                      nSaleSectionLastIndex: S - 1,
                      nUniqueIDNextSaleSection:
                        B < t.length ? t[B].unique_id : void 0,
                    }),
                    O + 1 == y && I.last_group_until_cover_section_until_end)
                  )
                    for (let R = S; R < t.length; ++R) {
                      const X = t[R];
                      if (X.section_type == "tabs" && I?.enabled) break;
                      (0, Lt.bF)(a, X) && i.set(X.unique_id, G.background_id);
                    }
                });
                S < t.length && !(0, Lt.bF)(a, t[S]);
              )
                S++;
              S < t.length && (v = t[S].unique_id);
            }
          } else t?.length > 0 && (u = t[0].unique_id);
          return {
            mapGroupToSections: o,
            nFirstSaleSectionIDWithoutGroup: u,
            mapSectionToGroup: i,
            mapFirstSectionToGroup: l,
            selectedTabBackgroundDef: I,
            nTabSaleSectionIndex: _,
            nFirstTabSectionIDWithoutGroup: v,
          };
        }
        var Ce = r(29630),
          ye = r(68434),
          de = r(15181),
          Pt = r(41635),
          nt = r(81416);
        function ta(s, t, a, o) {
          let l = s.jsondata.sale_background_img_groups.groups.find(
            (u) => u.background_id === t.groupID,
          );
          return (
            !l &&
              o >= 0 &&
              (l = s
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((p) => p.unique_id == o)
                ?.tab_background_img_groups?.groups?.find(
                  (p) => p.background_id == t.groupID,
                )),
            (0, e.jsx)(
              aa,
              {
                eventModel: s,
                displayDef: l,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  l &&
                  l.randomize_section_order &&
                  a !== nt.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(Ca, {
                        clanEventGID: s.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Ca(s) {
          const { clanEventGID: t, elSaleSections: a } = s,
            [o, i] = (0, ye.M)(`sale_section_seed_${t}`, (0, de.m)());
          if (!a || a.length === 0) return null;
          if (a.length > 1 && o !== void 0) {
            const l = (0, de.A)(o);
            return (0, e.jsx)(e.Fragment, { children: Pt.fW(a, 0, l) });
          }
          return (0, e.jsx)(e.Fragment, { children: a });
        }
        function aa(s) {
          const {
              displayDef: t,
              children: a,
              eventModel: o,
              derivedGroupInfo: i,
            } = s,
            l = (0, Ze.E)(),
            u = x.useCallback(
              (y, G) => {
                Tt.set(i.nBackgroundGroupID, G);
              },
              [i],
            ),
            v = (0, gt.w6)(u);
          if (!a || (Array.isArray(a) && a.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: a });
          let p;
          if (t.localized_background_art) {
            const y = (0, z.LgB)(l),
              G =
                y in t.localized_background_art
                  ? y
                  : c.A0.GetLanguageFallback(ft.TS.LANGUAGE),
              O = t.localized_background_art[G];
            O && (p = Ce.zU.GenerateURLFromHashAndExt(o.clanSteamID, O));
          }
          let I = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              I += "to bottom,";
              break;
            case "left-to-right":
              I += "to right,";
              break;
            case "top-left-to-bottom-right":
              I += "to bottom right,";
              break;
            case "single-color":
              I = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((I += " " + t.background_color1),
              (I += ", " + t.background_color2),
              (I += ")"))
            : (I = null);
          const _ =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            C = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            S = {
              backgroundImage: I ? `url(${p}), ${I}` : `url(${p})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: C ? t.position_setting : void 0,
              backgroundColor: _ ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: v,
            style: S,
            id: "background_group_" + t.background_id,
            children: a,
          });
        }
        var zt = r(9807),
          vt = r(4720),
          st = r(64641),
          na = r.n(st),
          Re = r(85599);
        function Xa(s) {
          return typeof s == "string" || typeof s == "number"
            ? s
            : JSON.stringify(s);
        }
        class sa {
          Keyify = (t) => Xa(t);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(t) {
            return this.m_mapVisible.has(this.Keyify(t));
          }
          SortKey(t, a) {
            const o = this.m_mapVisible.get(this.Keyify(t)) || 0,
              i = this.m_mapVisible.get(this.Keyify(a)) || 0;
            return o - i;
          }
          BMarkAppVisibile(t, a) {
            const o = this.EnsureOwnerSetExists(t),
              i = this.Keyify(a);
            return (
              o.add(i),
              this.IsAlreadyVisible(a)
                ? (this.m_mapVisible.set(
                    i,
                    (this.m_mapVisible.get(i) ?? 0) + 1,
                  ),
                  !1)
                : (this.m_mapVisible.set(i, 1), !0)
            );
          }
          BMarkAppNotVisible(t, a) {
            if (!this.IsAlreadyVisible(a)) return !1;
            const o = this.EnsureOwnerSetExists(t),
              i = this.Keyify(a);
            return o.has(i) ? (this.DecrementAppVisibility(i), !0) : !1;
          }
          MarkAllAppsNotVisible(t) {
            this.m_mapOwners.has(t) &&
              (this.m_mapOwners
                .get(t)
                .forEach(this.DecrementAppVisibility.bind(this)),
              this.m_mapOwners.delete(t));
          }
          EnsureOwnerSetExists(t) {
            let a = this.m_mapOwners.get(t);
            return (
              a ||
                (this.m_mapOwners.set(t, new Set()),
                (a = this.m_mapOwners.get(t))),
              a
            );
          }
          DecrementAppVisibility(t) {
            const a = (this.m_mapVisible.get(t) ?? 0) - 1;
            a > 0 ? this.m_mapVisible.set(t, a) : this.m_mapVisible.delete(t);
          }
        }
        var xt = r(71742),
          Ea = r(53113),
          Et = r(90405);
        function Me(s, t) {
          return s
            ? t
              ? !!s.valve_admin
              : !!(s.valve_admin || s.support_user)
            : !1;
        }
        function Ht(s, t) {
          const a = !!(s && s.BIsClanAccount()),
            { data: o } = (0, ve.hM)(a ? s.GetAccountID() : 0);
          return a && Me(o, t);
        }
        function ra(s) {
          const { clanSteamID: t, id: a } = s;
          return Ht(t, s.requireAdmin)
            ? (0, e.jsx)("div", {
                id: a,
                className: (0, N.A)(
                  s.className,
                  s.requireAdmin
                    ? T.ValveOnlyAdminBackground
                    : T.ValveOnlyBackground,
                ),
                children: s.children,
              })
            : null;
        }
        var ae = r(16412),
          Ie = r(96538),
          Ve = r(88003),
          yt = r(12932),
          Nt = r(46777),
          oa = r(77495),
          ia = r(16346),
          ya = r(61257),
          la = r(56718),
          mt = r(71421),
          Aa = r(27828),
          kt = r.n(Aa);
        function wa(s) {
          return `rgba(${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}, ${s.rgb.a})`;
        }
        function ca(s) {
          const t = parseInt(s.slice(1), 16),
            a = (t >> 16) & 255,
            o = (t >> 8) & 255,
            i = t & 255;
          return `rgba(${a}, ${o}, ${i}, 1)`;
        }
        function Da(s) {
          const { color: t, onChange: a, strTitle: o, disableAlpha: i } = s,
            [l, u] = (0, x.useState)(() => t || "rgba(255, 255, 255, 1)"),
            v = (0, x.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(M.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const _ = (await new window.EyeDropper().open()).sRGBHex,
                  C = ca(_);
                u(C), a(C);
              } catch (p) {
                console.warn(M.Z.Localize("#Sale_EyeDropperFailed"), p);
              }
            }, [a]);
          return (0, e.jsxs)("div", {
            className: kt().ColorPickerDialog,
            children: [
              !!o && (0, e.jsx)(ae.JU, { children: o }),
              (0, e.jsx)(ya.xk, {
                onChange: (p) => {
                  const I = wa(p);
                  u(I), a(I);
                },
                color: l,
                disableAlpha: i,
                className: kt().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: kt().EyeDropperCtn,
                children: (0, e.jsx)(mt.Gq, {
                  toolTipContent: M.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(ae.$n, {
                    className: kt().EyeDropperBtn,
                    onClick: v,
                    children: (0, e.jsx)(la.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function Se(s) {
          const {
              color: t,
              onChange: a,
              onRequestClose: o,
              disableAlpha: i,
              strTitle: l,
            } = s,
            u = (0, x.useRef)(null);
          return (
            (0, x.useEffect)(() => {
              const v = u.current?.ownerDocument ?? document,
                p = (_) => {
                  u.current && !u.current.contains(_.target) && o();
                },
                I = (_) => {
                  _.key === "Escape" && o();
                };
              return (
                v.addEventListener("pointerdown", p, !0),
                v.addEventListener("keydown", I, !0),
                () => {
                  v.removeEventListener("pointerdown", p, !0),
                    v.removeEventListener("keydown", I, !0);
                }
              );
            }, [o]),
            (0, e.jsx)("div", {
              ref: u,
              children: (0, e.jsx)(Da, {
                color: t,
                disableAlpha: i,
                strTitle: l ?? M.Z.Localize("#Button_Color"),
                onChange: a,
              }),
            })
          );
        }
        function It() {
          return {
            openColorPicker: (0, x.useCallback)((t, a) => {
              let o = null;
              const i = () => o?.Hide();
              o = (0, ia.lX)(
                (0, e.jsx)(Se, {
                  color: a.color,
                  disableAlpha: a.disableAlpha,
                  strTitle: a.strTitle,
                  onChange: a.onChange,
                  onRequestClose: i,
                }),
                t,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
        var Sa = r(13447),
          Xe = r.n(Sa),
          Gt = r(32190),
          Ot = r.n(Gt),
          Qe = r(76559),
          Wt = r(75909),
          Ue = r(53424),
          da = r(72604),
          bt = r(41735),
          At = r.n(bt),
          Rt = r(14947),
          rt = r(9046),
          Ba = Object.defineProperty,
          Ma = Object.getOwnPropertyDescriptor,
          Yt = (s, t, a, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Ma(t, a) : t, l = s.length - 1, u;
              l >= 0;
              l--
            )
              (u = s[l]) && (i = (o ? u(t, a, i) : u(i)) || i);
            return o && i && Ba(t, a, i), i;
          };
        const Ut = class ln {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, Rt.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, a, o, i) {
            let l =
                $.TS.COMMUNITY_BASE_URL +
                "gid/" +
                a.ConvertTo64BitString() +
                "/hasclanimagefile",
              u = { image_hash_and_ext: o, lang: "" + i };
            return (
              (await At().get(l, { params: u, cancelToken: t && t.token })).data
                .success == da.R
            );
          }
          SetPrimaryImageForImageGroup(t, a) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != t.imageid ||
              a != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: t,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = a),
              (this.m_curLocImageGroup.localized_images = (0, Pt.$Y)(
                this.m_curLocImageGroup.localized_images,
                z.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            return this.m_curLocImageGroup?.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(t, a) {
            if (this.m_curLocImageGroup) {
              let o = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[a]
                ? this.m_curLocImageGroup.localized_images[a]
                : Ce.zU.GenerateURLFromHashAndExt(
                    t,
                    Ce.zU.GetHashAndExt(o) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const a = this.m_curLocImageGroup.primaryImage,
              o = Qe.b.InitFromClanID(a.clanAccountID),
              i = Ce.zU.GetHashAndExt(a) ?? "",
              l = [];
            for (let v = z.Bhc; v < z.bP9; ++v)
              l.push(ln.BDoesClanImageFileExistsOnCDNOrOrigin(t, o, i, v));
            const u = await Promise.all(l);
            (0, Rt.h5)(() => {
              for (let v = z.Bhc; v < z.bP9; ++v)
                u[v] &&
                  (this.m_curLocImageGroup.localized_images[v] =
                    Ce.zU.GenerateURLFromHashAndExtAndLang(
                      o,
                      i,
                      rt.wI.full,
                      v,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, a, o) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = o
                ? Ce.zU.GenerateURLFromHashAndExtAndLang(
                    a,
                    o,
                    rt.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, a) {
            if (!this.m_curLocImageGroup) return;
            let o = this.m_curLocImageGroup.primaryImage;
            if (o?.image_hash == t) {
              const i = Qe.b.InitFromClanID(o.clanAccountID),
                l = Ce.zU.GetHashAndExt(o);
              l &&
                (this.m_curLocImageGroup.localized_images[a] =
                  Ce.zU.GenerateURLFromHashAndExtAndLang(
                    i,
                    l,
                    rt.wI.full,
                    a,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
            }
          }
          GetAllLocalizedGroupImages() {
            return (
              (this.m_curLocImageGroup &&
                this.m_curLocImageGroup.localized_images) ||
              []
            );
          }
          GetAllLocalizedGroupImageHashAndExts() {
            return this.GetAllLocalizedGroupImages()
              .filter(Boolean)
              .map((o) => Ce.zU.GetHashAndExtFromURL(o));
          }
        };
        Yt([Rt.sH], Ut.prototype, "m_curLocImageGroup", 2);
        let ua = Ut;
        const Fe = new ua();
        var ot = r(38410),
          Ft = r(34592),
          ga = r(75844),
          et = r(32093),
          Vt = r(72849),
          La = r(64),
          Ta = r(72739),
          wt = r(82734);
        function Pa(s, t) {
          const a = x.useRef(void 0),
            o = x.useCallback(
              (u) => {
                u.currentTarget.files.length > 0 &&
                  (s(u.currentTarget.files), (u.currentTarget.value = ""));
              },
              [s],
            ),
            i = x.useCallback(() => a.current.click(), []);
          return [
            Ta.createPortal(
              (0, e.jsx)("form", {
                onSubmit: Dt,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...t,
                  type: "file",
                  ref: a,
                  onChange: o,
                }),
              }),
              window.document.body,
            ),
            i,
          ];
        }
        function ma(s) {
          const [t, a] = x.useState(!1),
            o = x.useCallback((p) => {
              ((p.dataTransfer.files && p.dataTransfer.files[0]) ||
                (p.dataTransfer.types && p.dataTransfer.types[0] == "Files")) &&
                a(!0);
            }, []),
            i = x.useCallback((p) => {
              wt.NO(p) && a(!1);
            }, []),
            l = x.useCallback(() => a(!1), []),
            u = t ? Dt : void 0,
            v = x.useCallback(
              (p) => {
                p.dataTransfer.files?.length &&
                  (s(p.dataTransfer.files, p),
                  p.preventDefault(),
                  p.stopPropagation()),
                  a(!1);
              },
              [s],
            );
          return [
            {
              onDragEnter: o,
              onDragLeave: i,
              onDragEnd: l,
              onDragOver: u,
              onDrop: v,
            },
            t,
          ];
        }
        async function Na(s, t = 1e3) {
          return await new Promise((a, o) => {
            const i = new Image();
            (i.src = s),
              (i.onload = () => a("success")),
              (i.onerror = () => a("error")),
              t > 0 && window.setTimeout(() => a("timeout"), t);
          });
        }
        function Dt(s) {
          s.preventDefault();
        }
        function Ja(s) {
          switch (s.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const t = s.name.match(/(?<=\.)[^.]+$/);
              return t ? t[0] : void 0;
          }
        }
        var Kt = r(71647),
          _t = r.n(Kt);
        function ka(s) {
          const {
              onDropFiles: t,
              renderDesciption: a,
              elAdditonalButtons: o,
              elOverrideDragAndDropText: i,
            } = s,
            [l, u] = ma(t),
            [v, p] = Pa(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...l,
            className: (0, N.A)(
              u ? _t().DragAndDropContainerDragging : _t().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!a && a(),
              (0, e.jsx)("div", {
                children: i || (0, c.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: _t().ImageUploadBar,
                children: [
                  v,
                  (0, e.jsxs)("label", {
                    onClick: p,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, c.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: _t().SelectImageButton,
                        children: (0, c.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              o,
              s.children,
            ],
          });
        }
        var St = r(36118),
          Ga = r(21254),
          Oa = r(27344),
          Pe = r.n(Oa),
          ha = r(9472);
        function Zt(s) {
          const {
              imageUploader: t,
              fnUploadComplete: a,
              elOverrideDragAndDropText: o,
              forceResolution: i,
              elAdditonalButtons: l,
              rgRealmList: u,
            } = s,
            [v, p] = (0, j.q3)(() => [
              t.GetUploadImages(),
              Ze.O.Get().GetCurEditLanguage(),
            ]),
            I = x.useCallback(
              async (S) => {
                let y = Array.from(S),
                  G = !0;
                for (let O = 0; O < y.length; O++) {
                  const L = y[O],
                    { language: B } = (0, ot.jj)(L?.name, p);
                  try {
                    const W = (0, ot.PD)(B, p, u);
                    (G = await t.AddImageForLanguage(L, W)),
                      G ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            O +
                            " file=" +
                            L.name,
                        ),
                        (0, Ve.pg)(
                          (0, e.jsx)(Ie.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              L.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (W) {
                    let R = (0, Ft.H)(W);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + R.strErrorMsg,
                      R,
                    ),
                      (0, Ve.pg)(
                        (0, e.jsx)(Ie.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            R.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return G;
              },
              [p, t, u],
            ),
            _ = x.useMemo(
              () =>
                l instanceof Array
                  ? l
                  : [
                      (0, e.jsx)(
                        x.Fragment,
                        { children: l },
                        "elAdditonalButtons",
                      ),
                    ],
              [l],
            );
          (0, j.q3)(() =>
            v.map((S) => ({ a: S.GetCurrentImageOption(), b: S.language })),
          );
          const C = async () => {
            const S = await t.UploadAllImages(i);
            a?.(S);
          };
          return (0, e.jsxs)(ka, {
            onDropFiles: I,
            elAdditonalButtons: _,
            elOverrideDragAndDropText: o,
            children: [
              (0, e.jsx)(x.Fragment, {
                children: (0, e.jsx)("div", {
                  className: Pe().UploadPreviewCtn,
                  children: v.map((S) =>
                    (0, e.jsx)(
                      pa,
                      {
                        asset: S,
                        forceResolution: i,
                        fnOnRemove: () => t.DeleteUploadImage(S),
                        languageRealms: u,
                      },
                      "arttabupload_" + S.filename + "_" + S.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Ra, { imageUploader: t, fnOnUploadImageRequested: C }),
            ],
          });
        }
        function Ra(s) {
          const { imageUploader: t, fnOnUploadImageRequested: a } = s,
            [o] = (0, j.q3)(() => [t.GetUploadImages()]),
            i = o.some((u) => u.status == "pending"),
            l = o.some(
              (u) =>
                u.status == "waiting" ||
                u.status == "uploading" ||
                u.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: Pe().UploadPreviewButtonsCtn,
            children: [
              !!o.length &&
                (0, e.jsx)(ae.$n, {
                  style: { margin: "8px" },
                  onClick: a,
                  disabled: !i,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!o.length &&
                (0, e.jsx)(ae.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: l,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function $a(s, t, a, o, i) {
          let l = new Array();
          return (
            s.GetUploadImages().forEach((u) => {
              l.push(
                jsx(
                  pa,
                  {
                    asset: u,
                    forceResolution: a,
                    forceFileType: o,
                    fnOnRemove: () => s.DeleteUploadImage(u),
                    languageRealms: i,
                  },
                  t + u.file + "_" + u.uploadTime,
                ),
              );
            }),
            l
          );
        }
        const pa = (0, ga.PA)(Ua);
        function Ua(s) {
          const t = (y) => {
              if (y instanceof La.M7) {
                y.ResetImage();
                const G = window,
                  O = (0, e.jsx)(Ga.q, {
                    ownerWin: G,
                    uploadFile: y,
                    forceResolution: s.forceResolution,
                    fileType: s.forceFileType || Vt.bg.dU,
                  });
                (0, Ve.HT)(O, G, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  y.fileType,
                  JSON.stringify(y.GetCurrentImageOption()),
                );
            },
            { asset: a, fnOnRemove: o, languageRealms: i } = s,
            l = a.ImageOptions?.map((y) => {
              let G = y?.fnGetLabelText(),
                O;
              y.bEnforceDimensions && (G += ` - ${y.width}x${y.height}`),
                y.bDeprecated &&
                  ((G += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (O = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let L;
              return (
                (a.BIsOriginalMinimumDimensions(y) &&
                  a.FileTypeMatchesImageTypes(y)) ||
                  (L = Pe().ImageDimensionTooSmall),
                { label: G, data: y, strOptionClass: L, tooltip: O }
              );
            }).filter((y) => !y.data.bHiddenFromDropdown),
            u = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            v = a.BSupportsLanguages()
              ? jt(
                  c.A0.GetLanguageListForRealms(
                    i ?? [et.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            p = a.IsValidAssetType(s.forceResolution, s.forceFileType),
            I = a.status == "pending";
          let _ = u[a.status];
          a.status == "pending" &&
            (p.needsCrop
              ? (_ = (0, c.we)("#ImageUpload_NeedsCrop"))
              : p.error && (_ = (0, c.we)("#ImageUpload_Invalid")));
          let C;
          const S = a.GetCurrentImageOption();
          return (
            S && (C = l?.find((y) => y.data.sKey == S.sKey)?.data),
            C || (C = l?.[0]?.data),
            (0, e.jsxs)("div", {
              className: Pe().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: Pe().UploadPreviewDelete,
                  onClick: () => o(a),
                  children: (0, e.jsx)(St.sED, {}),
                }),
                (0, e.jsx)(Fa, { asset: a }),
                v &&
                  (0, e.jsx)(ae.m, {
                    strDropDownClassName: k().DropDownScroll,
                    rgOptions: v,
                    selectedOption: a.language,
                    onChange: (y) => (a.language = y.data),
                    disabled: !I,
                  }),
                l &&
                  l?.length > 1 &&
                  (0, e.jsx)(ae.m, {
                    label: a.GetImageOptionLabel(),
                    rgOptions: l,
                    selectedOption: C,
                    onChange: (y) => a.SetCurrentImageOption(y.data),
                    disabled: !I,
                  }),
                I &&
                  p.warnings?.map((y, G) =>
                    (0, e.jsx)(
                      "div",
                      { className: Pe().UploadPreviewWarning, children: y },
                      `warning${G}`,
                    ),
                  ),
                I &&
                  p.messages?.map((y, G) =>
                    (0, e.jsx)(
                      "div",
                      { className: Pe().UploadPreviewMessage, children: y },
                      `message${G}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, N.A)({
                    [k().FlexColumnContainer]: !0,
                    [Pe().UploadPreviewError]: a.status == "failed",
                  }),
                  children: [
                    _,
                    (0, ha.o)(a.status) &&
                      (0, e.jsx)("div", {
                        className: na().FlexCenter,
                        children: (0, e.jsx)(Re.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Pe().UploadPreviewError,
                  children: a.message,
                }),
                I &&
                  p.error &&
                  (0, e.jsx)("div", {
                    className: Pe().UploadPreviewError,
                    children: p.error,
                  }),
                I &&
                  p.needsCrop &&
                  (0, e.jsx)(ae.jn, {
                    onClick: () => t(a),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function Fa(s) {
          const { asset: t } = s;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: Pe().PreviewImgCtn,
                onClick: (a) =>
                  (0, Ve.pg)((0, e.jsx)(za, { asset: t }), (0, wt.uX)(a)),
                children: [
                  (0, e.jsxs)("span", {
                    className: Pe().PreviewImgInfo,
                    children: [t.width, " x ", t.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: t.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: Pe().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: Pe().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function za(s) {
          const { asset: t, closeModal: a } = s;
          return (0, e.jsx)(Ie.o0, {
            bAlertDialog: !0,
            closeModal: a,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: t.dataUrl }),
            }),
          });
        }
        function jt(s) {
          const t = [],
            a = new Array();
          for (const o of s) {
            if (o == z.X51) continue;
            const i = (0, c.we)("#Language_" + (0, z.LgB)(o));
            a.push({ label: i, data: o });
          }
          return (
            a.sort((o, i) => o.label.localeCompare(i.label)),
            a.forEach((o) => t.push({ label: o.label, data: o.data })),
            a
          );
        }
        var Bt = ((s) => (
          (s[(s.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (s[(s.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (s[(s.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (s[(s.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          s
        ))(Bt || {});
        function fa(s, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(s)}`
            : `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetHashAndExt(s)}`;
        }
        function qa(s, t, a) {
          let o = "";
          const i = fa(t);
          if (a == 4)
            (o = "[video webm="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (o += i),
              (o += " mp4="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (o += i),
              (o += " autoplay=true controls=false][/video]");
          else if (a == 2) o = "[img]" + i + "[/img]";
          else {
            const l = fa(t, !0);
            o = "[url=" + i + "][img]" + l + "[/img][/url]";
          }
          s.InsertText(o);
        }
        var Qt = r(55436),
          Ha = r(53732),
          ue = r.n(Ha),
          va = r(49460);
        function Wa(s) {
          const { fnSetImageSearch: t } = s,
            a = (0, x.useRef)(null);
          return (0, e.jsx)("div", {
            className: va.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: a,
              className: va.SearchInput,
              type: "text",
              placeholder: (0, c.we)("#ImagePicker_Search"),
              onChange: (o) => t(o.currentTarget.value),
              onKeyDown: (o) => {
                o.key == "Escape" &&
                  (t(""), a.current && (a.current.value = ""));
              },
            }),
          });
        }
        const Ya = x.memo(function (t) {
          const {
            fileNameSearch: a,
            clanAccountID: o,
            imageInsertCallBack: i,
            fnOnExpandImage: l,
            showImageActions: u = !0,
            InternalOpenLocalizeImageGroup: v,
          } = t;
          return (0, e.jsx)(m, {
            clanAccountID: o,
            fileNameSearch: a,
            children: (p, I) =>
              p.map((_) =>
                (0, e.jsx)(
                  d,
                  {
                    clanImage: _,
                    searchStringHilight: I,
                    imageInsertCallBack: i,
                    showImageActions: u,
                    fnOnOpenLocalizedImageGroup: v,
                    OnImageClick: l,
                  },
                  _.imageid,
                ),
              ),
          });
        });
        function m(s) {
          const { clanAccountID: t, fileNameSearch: a, children: o } = s,
            i = (0, Ue.n9)(t),
            l = a.trim().toLowerCase() || "",
            u = Ue.pU.GetFilteredClanImagesList(i, l);
          if (u.length == 0) {
            const v = Qe.b.InitFromClanID(t);
            let p = Ue.pU.GetLoadState(v);
            return p && p.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: ue().ResultNotification,
                    children:
                      l.length > 0
                        ? (0, c.we)("#ImagePicker_EmptySearch")
                        : (0, c.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : p && p.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: ue().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", p.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: ue().ResultNotification,
                      children: (0, c.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return o(u, l);
        }
        function n(s) {
          const {
            clanAccountID: t,
            fileNameSearch: a,
            onImageSelected: o,
            selectedItem: i,
          } = s;
          return jsx(m, {
            clanAccountID: t,
            fileNameSearch: a,
            children: (l) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: l.map((u) =>
                  jsx(
                    f,
                    { clanImage: u, selected: u == i, onImageSelected: o },
                    u.imageid,
                  ),
                ),
              }),
          });
        }
        function d(s) {
          const {
              clanImage: t,
              searchStringHilight: a,
              imageInsertCallBack: o,
              OnImageClick: i,
              showImageActions: l,
              fnOnOpenLocalizedImageGroup: u,
            } = s,
            [v, p] = x.useState(!1),
            I = () => o(t, Bt.k_eInsertFullImage),
            _ = () => o(t, Bt.k_eInsertVideo),
            C = () => o(t, Bt.k_eInsertThumbnail),
            S = (xe) => {
              t.url &&
                (xe.dataTransfer.setData("text", t.url),
                Ue.pU.GetClanImageDragListener().forEach((Te) => {
                  let $e = Qe.b.InitFromClanID(t.clanAccountID);
                  Te($e, !0);
                }));
            },
            y = (xe) => {
              t.url &&
                Ue.pU.GetClanImageDragListener().forEach((Te) => {
                  let $e = Qe.b.InitFromClanID(t.clanAccountID);
                  Te($e, !1);
                });
            },
            G = (xe) => {
              (0, Ve.pg)(
                (0, e.jsx)(Ie.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: L,
                  onCancel: B,
                  closeModal: B,
                  children: (0, e.jsxs)(x.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, c.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, wt.uX)(xe) ?? window,
              );
            },
            O = (xe) => {
              console.log("ClanImageWrapper on delete error: " + xe),
                (0, Ve.pg)(
                  (0, e.jsx)(Ie.KG, {
                    strTitle: (0, c.we)("#Error_FailureNotice"),
                    strDescription: (0, c.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: xe }),
                  }),
                  window,
                );
            },
            L = () => {
              p(!0);
              let xe = Qe.b.InitFromClanID(t.clanAccountID);
              Ue.pU
                .DeleteClanImage(xe, t)
                .then((Te) => {
                  Te.success != da.R && O((0, Ft.H)(Te).strErrorMsg), p(!1);
                })
                .catch((Te) => {
                  O((0, Ft.H)(Te).strErrorMsg), p(!1);
                }),
                B();
            },
            B = () => {},
            W = () => {
              i && i(t);
            },
            R = t.file_name ? t.file_name : "",
            X = (0, Qt.r)(a, R, String(t.imageid), ue().Hilight),
            me = Ce.zU.BIsClanImageVideo(t),
            he = l && !v && !me,
            Ae = l && !v && !me,
            Je = l && !v && me,
            fe = l && !v && !me;
          return (0, e.jsx)(Et.K, {
            placeholderHeight: "100vh",
            className: ue().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: ue().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: ue().ImageWrapper,
                  style: {
                    backgroundImage: me ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: S,
                  onDragEnd: y,
                  onDoubleClick: I,
                  onClick: W,
                  children: (0, e.jsx)(h, {
                    clanImage: t,
                    className: ue().VideoBackground,
                  }),
                }),
                he &&
                  (0, e.jsx)("span", {
                    className: ue().Full,
                    onClick: I,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                v &&
                  (0, e.jsx)(Re.t, {
                    size: "medium",
                    className: ue().FloatingThrobber,
                  }),
                Ae &&
                  (0, e.jsx)("span", {
                    className: ue().Thumb,
                    onClick: C,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                fe &&
                  u &&
                  (0, e.jsx)(g, {
                    bDeleting: v,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: u,
                  }),
                Je &&
                  (0, e.jsx)("span", {
                    className: ue().Full,
                    onClick: _,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !v &&
                  (0, e.jsx)("span", {
                    className: ue().Delete,
                    onClick: G,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: ue().ImageWrapperFilename,
                  title: R,
                  children: X,
                }),
              ],
            }),
          });
        }
        function g(s) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: a,
              bDeleting: o,
            } = s,
            { data: i } = (0, ve.hM)(t.clanAccountID);
          return o || !i?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, N.A)(ue().Localized, k().ValveOnlyBackground),
                onClick: () => a?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function h(s) {
          const { clanImage: t, className: a } = s;
          return Ce.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: a,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == Vt.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function f(s) {
          const { clanImage: t, onImageSelected: a, selected: o } = s;
          return jsxs("div", {
            className: classnames(
              styles.ClanImageGridItem,
              o && styles.Selected,
            ),
            onClick: () => a(t, !1),
            onDoubleClick: () => a(t, !0),
            title: t.file_name,
            children: [
              jsx("div", {
                className: styles.ImgCtn,
                children: ClanImageUtils.BIsClanImageVideo(t)
                  ? jsx(h, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function b(s) {
          const { clanSteamID: t, closeModal: a, OnClanImageSelected: o } = s,
            i = x.useCallback(
              (v, p) => {
                o?.(v, p), a?.();
              },
              [o, a],
            ),
            [l, u] = x.useState("");
          return (0, e.jsxs)(Ie.o0, {
            strTitle: (0, c.we)("#ImagePicker_Images"),
            strDescription: (0, c.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: a,
            onCancel: a,
            children: [
              (0, e.jsx)(Wa, { fnSetImageSearch: u }),
              (0, e.jsx)(Ya, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: l,
                imageInsertCallBack: i,
                showImageActions: !1,
              }),
            ],
          });
        }
        function E(s) {
          const { clanSteamID: t, OnClanImageSelected: a } = s;
          return (0, e.jsxs)("div", {
            className: _t().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, c.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: _t().SelectImageButton,
                    children: (0, c.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (o) => {
                  (0, Ve.pg)(
                    (0, e.jsx)(b, { clanSteamID: t, OnClanImageSelected: a }),
                    (0, wt.uX)(o) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function w(s) {
          const {
              clanSteamID: t,
              rgSupportArtwork: a,
              localizedPrimaryImage: o,
              bAllowPreviousClanImageSelection: i,
              fnSetImageURL: l,
              rgRealmList: u,
            } = s,
            [v] = (0, j.q3)(() => [Ze.O.Get().GetCurEditLanguage()]),
            p = (0, Wt.zO)(t, a, o),
            I = s.uploaderOverride || p,
            [_, C] = x.useState(!1),
            S = x.useCallback(
              async (O, L) => {
                if (!_) {
                  C(!0);
                  try {
                    const { language: B } = (0, ot.jj)(O.file_name ?? "", v),
                      W = (0, ot.PD)(B, v, u);
                    await I.AddExistingClanImage(O, W);
                  } catch (B) {
                    let W = (0, Ft.H)(B);
                    console.error("AddExistingClanImage: " + W.strErrorMsg, W),
                      (0, Ve.pg)(
                        (0, e.jsx)(Ie.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            W.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  C(!1);
                }
              },
              [_, I, v, u],
            ),
            y = x.useMemo(
              () =>
                i
                  ? [
                      [
                        (0, e.jsx)(
                          E,
                          { clanSteamID: t, OnClanImageSelected: S },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [S, i, t],
            ),
            G = (O) => {
              for (const L of O) {
                const B = L.uploadResult;
                if (B?.origimagehash) {
                  const W = (0, ot.PD)(B.language, v, u);
                  Fe.AddLocalizeImageUploaded(B.origimagehash, W);
                } else {
                  const W = Ue.pU.GetClanImageByImageHash(
                      t,
                      B?.image_hash ?? "",
                    ),
                    R = L.image.GetCurrentImageOption();
                  if (W && R) {
                    const X = (0, ot.PD)(L.image.language, v, u);
                    l(R.artworkType, W, X);
                  }
                }
              }
            };
          return (0, e.jsx)(Zt, {
            ...s,
            imageUploader: I,
            rgRealmList: u,
            elAdditonalButtons: _
              ? [
                  (0, e.jsx)(
                    Re.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, c.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : y,
            fnUploadComplete: G,
          });
        }
        var H = r(25279),
          P = r(84676),
          U = r(25359),
          K = r.n(U),
          ge = r(24806);
        function ie(s) {
          const {
              clanImage: t,
              closeModal: a,
              lang: o,
              fnOnArtworkLangChange: i,
              realms: l,
              fnLangHasData: u,
            } = s,
            [v, p] = (0, x.useState)(o),
            I = Qe.b.InitFromClanID(t.clanAccountID),
            _ = (0, j.q3)(() =>
              Ce.zU.GenerateURLFromHashAndExt(I, Ce.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(Ie.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => i?.(t, o, v),
            onCancel: a,
            closeModal: a,
            children: (0, e.jsxs)("div", {
              className: (0, N.A)(k().FlexColumnContainer, K().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: K().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: K().ArtworkPreview,
                    src: _,
                  }),
                }),
                (0, e.jsx)(ge.Ng, {
                  selectedLang: v,
                  fnLangHasData: u,
                  fnOnLanguageChanged: p,
                  realms: l,
                }),
              ],
            }),
          });
        }
        var De = r(56330);
        function Ke(s) {
          if (!s) return s;
          const t = s.lastIndexOf(".");
          return t === -1 ? s : s.substring(0, t);
        }
        var xa = r(58483),
          Va = r(82385),
          cn = r(94520),
          dn = r(95174),
          un = r(9709),
          Ka = r(64868),
          gn = r(44894);
        const mn =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var hn = r(11243);
        function pn(s) {
          const {
            clanSteamID: t,
            fnGetImageHash: a,
            fnLangHasData: o,
            fnOnRemoveImage: i,
          } = s;
          (0, Ue.mr)(t.GetAccountID());
          const l = x.useMemo(() => {
              let I = new Array();
              const _ = c.A0.GetLanguageListForRealms([
                et.TU.k_ESteamRealmGlobal,
                et.TU.k_ESteamRealmChina,
              ]);
              for (const C of _) {
                const S = a(C);
                if (S) {
                  const y = (0, z.LgB)(C),
                    G = (0, c.we)("#Language_" + y);
                  I.push({ lang: C, strLang: y, locLang: G, imgHash: S });
                }
              }
              return (
                (I = I.sort((C, S) =>
                  C.locLang > S.locLang ? 1 : C.locLang < S.locLang ? -1 : 0,
                )),
                I
              );
            }, [a]),
            [u, v, p] = (0, Ka.uD)();
          return (0, e.jsxs)("div", {
            className: K().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: K().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: K().LanguageListContainer,
                children: l.map((I) =>
                  (0, e.jsx)(
                    fn,
                    { langData: I, ...s },
                    "lang_select_" + t.GetAccountID() + " " + I.strLang,
                  ),
                ),
              }),
              !!i &&
                (0, e.jsxs)(ae.$n, {
                  onClick: v,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(hn.o, {
                      tooltip: (0, c.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(Ie.EN, {
                active: u,
                children: (0, e.jsx)(Ie.o0, {
                  strTitle: (0, c.we)("#Dialog_AreYouSure"),
                  strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: p,
                  onOK: () => {
                    for (let I = 0; I < z.bP9; I++) o && i && o(I) && i(I);
                  },
                }),
              }),
            ],
          });
        }
        function fn(s) {
          const {
              clanSteamID: t,
              langData: a,
              langOverride: o,
              fnOnLanguagePreviewChange: i,
              fnOnArtworkLangChange: l,
              fnOnRemoveImage: u,
            } = s,
            [v, p] = (0, j.q3)(() => {
              const I = Ue.pU.GetClanImageByImageHash(t, a.imgHash);
              let _ = "";
              I &&
                (_ = Ce.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  Ce.zU.GetHashAndExt(I),
                  rt.wI.full,
                  a.lang,
                ));
              let C = K().LanguageSelectorSelected;
              return (
                o != a.lang &&
                  (C = a.imgHash
                    ? K().LanguageSelector
                    : K().LanguageSelectorNoData),
                [_, C]
              );
            });
          return (0, e.jsxs)("div", {
            id: a.strLang,
            className: K().LanguageContainer,
            onClick: (I) => {
              let _ = (0, z.sfN)(I.currentTarget.id);
              i(_);
            },
            children: [
              (0, e.jsx)("div", { className: p, children: a.locLang }),
              (0, e.jsxs)("span", {
                className: K().LanguageOptions,
                children: [
                  !!v &&
                    (0, e.jsx)("a", {
                      href: v,
                      target: "_blank",
                      children: (0, e.jsx)(mt.he, {
                        toolTipContent: (0, c.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: St.YNO(),
                      }),
                    }),
                  !!l && (0, e.jsx)(vn, { ...s }),
                  !!u && (0, e.jsx)(xn, { fnOnRemoveImage: u, langData: a }),
                ],
              }),
            ],
          });
        }
        function vn(s) {
          const {
              clanSteamID: t,
              langData: a,
              fnOnArtworkLangChange: o,
              fnGetImageHash: i,
              fnLangHasData: l,
              realms: u,
            } = s,
            [v, p, I] = (0, Ka.uD)(),
            _ = (0, j.q3)(() => {
              const C = i(a.lang);
              return (
                (0, xt.wT)(
                  !C || !C.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + C,
                ),
                Ue.pU.GetClanImageByImageHash(t, C)
              );
            });
          if (!_) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(mt.he, {
                toolTipContent: (0, c.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: mn,
                  onClick: () => p(),
                }),
              }),
              (0, e.jsx)(J.tH, {
                children: (0, e.jsx)(Ie.EN, {
                  active: v,
                  children: (0, e.jsx)(ie, {
                    clanImage: _,
                    lang: a.lang,
                    fnOnArtworkLangChange: o,
                    fnLangHasData: l,
                    realms: u,
                    closeModal: I,
                  }),
                }),
              }),
            ],
          });
        }
        function xn(s) {
          const { fnOnRemoveImage: t, langData: a } = s,
            [o, i, l] = (0, Ka.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(mt.he, {
                toolTipContent: (0, c.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: gn.A,
                  onClick: i,
                }),
              }),
              (0, e.jsx)(J.tH, {
                children: (0, e.jsx)(Ie.EN, {
                  active: o,
                  children: (0, e.jsx)(Ie.o0, {
                    strTitle: (0, c.we)("#selectimage_remove_image"),
                    strDescription: (0, c.we)(
                      "#selectimage_remove_details",
                      (0, c.we)("#Language_" + (0, z.LgB)(a.lang)),
                    ),
                    onOK: () => {
                      t(a.lang);
                    },
                    closeModal: l,
                  }),
                }),
              }),
            ],
          });
        }
        var Za = r(13465),
          In = r(21659),
          bn = r(15496),
          ze = r.n(bn),
          _n = r(88812);
        function jn(s) {
          const {
              event: t,
              spotlightURLOverride: a,
              fnHandleOpenEvent: o,
              fnImageFailureCallback: i,
              fnFilterImageURLsForKnownFailures: l,
              langOverride: u,
            } = s,
            v = (0, In.c5)(),
            p = x.useCallback(
              (B) => {
                B.preventDefault(), o && o(t);
              },
              [t, o],
            ),
            I = u || (0, z.sfN)($.TS.LANGUAGE),
            [_, C, S] = (0, j.q3)(() => [
              t.GetSummaryWithFallback(I),
              t.GetNameWithFallback(I),
              t.BShowLibrarySpotlightText(),
            ]);
          let y = "spotlight",
            G = rt.wI.spotlight_main;
          (t.appid == 2434320 || $.TS.EUNIVERSE == z.Rv) &&
            ((y = v
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (G = rt.wI.full));
          let O =
            (0, _n.WC)(a !== void 0 ? void 0 : t, y, I, G) ??
            (a !== void 0 ? [a] : []);
          l && O && (O = l(O));
          const L = _.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(x.Fragment, {
            children: (0, e.jsx)("div", {
              className: ze().MajorEvent_Ctn,
              ref: s.containerRef,
              children: (0, e.jsxs)(Z.Z, {
                className: (0, N.A)(
                  ze().AppDetailsSpotlightContainer,
                  ze().MajorEventContainer,
                ),
                onActivate: p,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: ze().MajorEventBackground,
                    children: (0, e.jsx)(Za.c, {
                      className: ze().MajorEventImageBackgroundBlur,
                      rgSources: O,
                      onIncrementalError: (B, W, R) => i && i(W),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: ze().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(Za.c, {
                        className: ze().MajorEventImage,
                        rgSources: O,
                        onIncrementalError: (B, W, R) => i && i(W),
                      }),
                      (0, e.jsx)("div", {
                        className: ze().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: ze().MajoreEventImageContentContainer,
                        children:
                          S &&
                          (0, e.jsxs)("div", {
                            className: ze().MajorEventContent,
                            children: [
                              (0, e.jsx)(Za.c, {
                                className: ze().MajorEventSpotlightBackground,
                                rgSources: O,
                                onIncrementalError: (B, W, R) => i && i(W),
                              }),
                              (0, e.jsxs)("div", {
                                className: ze().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: ze().MajorEventTitle,
                                    children: C,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: ze().MajorEventSummary,
                                    children: L,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: ze().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Cn = r(79949),
          Le = r.n(Cn);
        function En(s) {
          const {
              langOverride: t,
              artworkType: a,
              fnOnLanguagePreviewChange: o,
              clanSteamID: i,
              eventModel: l,
              partnerEventStore: u,
              fnOnRemoveImage: v,
              fnOnArtworkLangChange: p,
              realms: I,
              fnLangHasData: _,
              fnGetImageHashAndExt: C,
            } = s,
            S = C(a, t),
            y = S
              ? Ce.zU.GenerateURLFromHashAndExtAndLang(i, S, rt.wI.full, t)
              : "",
            [G] = (0, j.q3)(() => [Bn(a, C)]);
          return G == 0
            ? (0, e.jsxs)("div", {
                className: K().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(en, {
                      imgURL:
                        $.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: l,
                    }),
                  a === "background" &&
                    (0, e.jsx)(tn, {
                      imgURL:
                        $.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: l,
                      partnerEventStore: u,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(a) &&
                    (0, e.jsx)(yn, {
                      langOverride: t,
                      artworkType: a,
                      eventModel: l,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, c.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: K().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(en, {
                      imgURL: y,
                      eventModel: l,
                      langOverride: t,
                    }),
                  a === "background" &&
                    (0, e.jsx)(tn, {
                      imgURL: y,
                      lang: t,
                      eventModel: l,
                      partnerEventStore: u,
                    }),
                  a === "spotlight" &&
                    (0, e.jsx)(Ia, { imgURL: y, event: l, lang: t }),
                  a === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Ia, { imgURL: y, event: l, lang: t }),
                  a === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Ia, { imgURL: y, event: l, lang: t }),
                  (a === "broadcast_left" || a === "broadcast_right") &&
                    (0, e.jsx)(wn, {
                      imgURL: y,
                      side: a === "broadcast_right" ? "right" : "left",
                    }),
                  a === "sale_header" && (0, e.jsx)(Dn, { imgURL: y }),
                  a === "sale_overlay" && (0, e.jsx)(Sn, { imgURL: y }),
                  rt.pb.includes(a) &&
                    (0, e.jsx)("img", {
                      className: un.PreviewImg,
                      src:
                        Fe.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
                    }),
                  a === "product_banner" && (0, e.jsx)(Xt, { imgURL: y }),
                  a === "product_mobile_banner" &&
                    (0, e.jsx)(Xt, { imgURL: y }),
                  a === "sale_logo" && (0, e.jsx)(Xt, { imgURL: y }),
                  a === "bestofyear_banner" && (0, e.jsx)(Xt, { imgURL: y }),
                  a === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(Xt, { imgURL: y }),
                  (0, e.jsx)(pn, {
                    langOverride: t,
                    clanSteamID: i,
                    fnOnLanguagePreviewChange: o,
                    fnOnRemoveImage: v,
                    fnOnArtworkLangChange: p,
                    realms: I,
                    fnLangHasData: _,
                    fnGetImageHash: (O) => Ke(C(a, O) ?? ""),
                  }),
                ],
              });
        }
        function us(s) {
          const { artworkType: t } = s,
            a = ArtworkTypeMap[t];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + t),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [a.width, " X ", a.height],
              }),
            ],
          });
        }
        function yn(s) {
          const { artworkType: t, langOverride: a, eventModel: o } = s,
            i = H.Fj[t],
            l = x.useMemo(
              () =>
                An(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${i.width} X ${i.height}`,
                ),
              [i.height, i.width, t],
            );
          return (0, e.jsx)(Ia, { lang: a, imgURL: l, event: o });
        }
        function An(s, t) {
          const i = document.createElement("canvas");
          (i.width = 780), (i.height = 200);
          const l = i.getContext("2d"),
            u = 20;
          for (let I = 0; I < 200; I += u)
            for (let _ = 0; _ < 780; _ += u)
              (l.fillStyle =
                (_ / u + I / u) % 2 === 0 ? "#a405e3ff" : "#000000"),
                l.fillRect(_, I, u, u);
          const v = l.createLinearGradient(0, 0, 780, 0);
          v.addColorStop(0, "rgba(32,32,32,0.8)"),
            v.addColorStop(1, "rgba(60,60,60,0.8)"),
            (l.fillStyle = v),
            l.fillRect(0, 0, 780, 200);
          const p = l.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            p.addColorStop(0, "rgba(0,0,0,0)"),
            p.addColorStop(1, "rgba(0,0,0,0.6)"),
            (l.fillStyle = p),
            l.fillRect(0, 0, 780, 200),
            (l.fillStyle = "#fff"),
            (l.font = "32px Arial"),
            (l.textAlign = "center"),
            (l.textBaseline = "middle"),
            l.fillText(s, 780 / 2, 200 / 2 - 20),
            t &&
              ((l.font = "18px Arial"), l.fillText(t, 780 / 2, 200 / 2 + 25)),
            i.toDataURL("image/png")
          );
        }
        function en(s) {
          const { imgURL: t, eventModel: a, langOverride: o } = s,
            i = (0, Ze.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(dn.u, {
              event: a,
              imageURLOverride: t,
              langOverride: o ?? i,
            }),
          });
        }
        function tn(s) {
          const { lang: t, eventModel: a, partnerEventStore: o } = s,
            i = (0, xa.LJ)(),
            [l, u, v, p, I] = (0, j.q3)(() => [
              a.GetNameWithFallback(t),
              a.GetDescriptionWithFallback(t),
              a.GetSubTitleWithLanguageFallback(t),
              a.type,
              a.AnnouncementGID,
            ]);
          let _ = u
            ? (0, e.jsx)(cn.fh, {
                text: u || "",
                showErrorInfo: !1,
                event: a,
                languageOverride: Ze.O.Get().GetCurEditLanguage(),
              })
            : (0, c.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Le().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Le().ExampleSectionTitle,
                children: (0, c.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, N.A)(
                  Le().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: Le().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: Le().MainImageCtn,
                      children: (0, e.jsx)("img", { src: s.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: Le().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: Le().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Le().TextTitle,
                            children:
                              l ||
                              (0, c.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Le().TextSubTitle,
                            children:
                              v ||
                              (0, c.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: Le().TextBody,
                            children: _,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              p != z.Fwr &&
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Le().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Le().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, N.A)(
                        Le().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Le().DetailExample2,
                        children: (0, e.jsx)(
                          Va.He,
                          {
                            event: a,
                            emoticonStore: i,
                            partnerEventStore: o,
                            headerClassnames: "editor",
                            langOverride: t,
                            bDisableBroadcastPlayer: !0,
                          },
                          I,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const Ia = (s) => {
            const [t] = (0, P.t7)(s.event.appid, { include_assets: !0 });
            if (!t) return null;
            const a = t.GetName(),
              o = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Le().SpotlightExample,
              children: (0, e.jsx)(jn, {
                event: s.event,
                strDisplayName: a ?? "",
                gameIconUrl: o,
                spotlightURLOverride: s.imgURL,
                langOverride: s.lang,
              }),
            });
          },
          wn = (s) => {
            const t = [
              (0, e.jsx)("img", { src: s.imgURL }, "img"),
              (0, e.jsx)("div", { className: K().BroadcastPreview }, "video"),
            ];
            return (
              s.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Le().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          Dn = (s) =>
            (0, e.jsx)("div", {
              className: Le().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          Sn = (s) =>
            (0, e.jsx)("div", {
              className: Le().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          Xt = (s) =>
            (0, e.jsx)("div", {
              className: Le().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            });
        function Bn(s, t) {
          let a = 0;
          for (let o = z.Bhc; o < z.bP9; ++o)
            (t(s, o)?.length ?? 0) > 0 && (a += 1);
          return a;
        }
        var Mn = Object.defineProperty,
          Ln = Object.getOwnPropertyDescriptor,
          an = (s, t, a, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Ln(t, a) : t, l = s.length - 1, u;
              l >= 0;
              l--
            )
              (u = s[l]) && (i = (o ? u(t, a, i) : u(i)) || i);
            return o && i && Mn(t, a, i), i;
          };
        const Tn =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Pn = ((s) => (
          (s[(s.k_None = 0)] = "k_None"),
          (s[(s.k_Suggested = 1)] = "k_Suggested"),
          (s[(s.k_Required = 2)] = "k_Required"),
          (s[(s.k_Requested = 3)] = "k_Requested"),
          s
        ))(Pn || {});
        function Nn(s) {
          const {
              artworkType: t,
              headerHint: a,
              appid: o,
              fnToggleMinimize: i,
              realms: l,
              eventModel: u,
              fnLangHasData: v,
              fnGetImageHashAndExt: p,
              fnSetImageURL: I,
              partnerEventStore: _,
            } = s,
            [C] = (0, P.t7)(o, { include_assets: !0 }),
            [S, y] = (0, j.q3)(() => [
              u?.GetEventType(),
              u?.BHasTag("vo_marketing_message"),
            ]),
            G = S == z.ajI;
          let O = null;
          a === 2
            ? (O = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : a === 1
              ? (O = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : a === 3 &&
                (O = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let L = null;
          t === "capsule"
            ? G
              ? (L = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (L = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!y &&
                      (0, e.jsxs)("div", {
                        className: K().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${$.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, c.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (L = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, c.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, c.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (L = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (L = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, c.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, c.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (L = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (L = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: k().EventElementRequired,
                              children: (0, c.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, c.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, c.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : t === "hero"
                        ? C &&
                          (L = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !C.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: De.ErrorStylesBackground,
                                  children: (0, c.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : t === "localized_image_group" ||
                            t === "link_capsule" ||
                            t === "sale_section_title" ||
                            t === "schedule_track_art" ||
                            t === "localized_background_art"
                          ? (L = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Tn,
                                      target: $.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, c.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (L = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: k().EventElementOptional,
                                    children: (0, c.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, c.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, c.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (L = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: k().EventElementOptional,
                                      children: (0, c.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, c.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, c.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, c.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (L = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (L = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: k().EventElementOptional,
                                          children: (0, c.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (L = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: k().EventElementRequired,
                                          children: (0, c.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const B = H.Fj[s.artworkType].width,
            W = H.Fj[s.artworkType].height;
          return (0, e.jsxs)("div", {
            id: s.id,
            className: K().ArtworkSelectorContainer,
            children: [
              !!s.title &&
                (0, e.jsxs)("div", {
                  className: K().Title,
                  onDoubleClick: i,
                  children: [
                    s.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    O,
                    i &&
                      (0, e.jsx)(ae.$n, {
                        onClick: i,
                        children: (0, e.jsx)(mt.he, {
                          toolTipContent: (0, c.we)(
                            s.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: s.bIsMinimized
                            ? (0, e.jsx)(St.hz4, {})
                            : (0, e.jsx)(St.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !s.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, N.A)(K().SelectImageBlock, K().Tips),
                  children: [
                    L,
                    !!(B && W) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, c.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, c.PP)(
                            "#selectimage_tip1",
                            (0, H.qj)(B),
                            (0, H.qj)(W),
                          ),
                        ],
                      }),
                    !!s.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: De.WarningStylesWithIcon,
                          children: s.strWarning,
                        }),
                      }),
                    s.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    s.elAdditionalControls,
                    !!s.fnRemoveAllArtwork &&
                      (0, e.jsx)(ae.$n, {
                        onClick: (R) => {
                          (0, Ve.pg)(
                            (0, e.jsx)(kn, {
                              fnRemoveAllArtwork: s.fnRemoveAllArtwork,
                            }),
                            (0, wt.uX)(R) ?? window,
                          );
                        },
                        children: (0, c.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !s.bIsMinimized &&
                (0, e.jsx)(Gn, {
                  clanSteamID: s.clanSteamID,
                  title: s.title ?? "",
                  eventModel: u,
                  artworkType: s.artworkType,
                  realms: l,
                  appid: o,
                  fnGetImageHashAndExt: p,
                  fnSetImageURL: I,
                  fnLangHasData: v,
                  partnerEventStore: _,
                }),
            ],
          });
        }
        function kn(s) {
          const { fnRemoveAllArtwork: t, closeModal: a } = s;
          return (0, e.jsx)(Ie.o0, {
            strTitle: (0, c.we)("#Sale_RemoveAll"),
            strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), a?.();
            },
            onCancel: a,
          });
        }
        function Gn(s) {
          const {
              artworkType: t,
              realms: a,
              clanSteamID: o,
              fnLangHasData: i,
              fnGetImageHashAndExt: l,
              fnSetImageURL: u,
              eventModel: v,
              appid: p,
              partnerEventStore: I,
            } = s,
            _ = t === "localized_image_group",
            [C, S] = x.useState((0, Ze.E)()),
            [y, G] = x.useState(new Array()),
            O = x.useCallback(
              (B, W, R) => {
                let X = [];
                y.find((he) => he.clanImage.imageid == B.imageid)
                  ? (X = y.map((he) =>
                      he.clanImage.imageid == B.imageid
                        ? { clanImage: B, lang: W }
                        : he,
                    ))
                  : R && (X = y.concat({ clanImage: B, lang: W })),
                  G(X);
              },
              [y],
            ),
            L = x.useCallback(
              (B, W, R) => {
                (0, Rt.h5)(() => {
                  Ke(l(t, W) ?? "") == B.image_hash && u(t, null, W),
                    u(t, B, R),
                    O(B, R, !1);
                });
              },
              [l, t, u, O],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(ae.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${$.TS.PARTNER_BASE_URL}admin/game/editbyappid/${p}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(ba, {
                    list: y,
                    fnOnArtworkLanguageChange: L,
                    realms: a,
                    fnLangHasData: i,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, N.A)(
                        K().SelectImageBlock,
                        K().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(En, {
                        eventModel: v,
                        clanSteamID: o,
                        fnOnLanguagePreviewChange: (B) => {
                          B != C && S(B);
                        },
                        langOverride: C,
                        fnOnArtworkLangChange: _ ? null : L,
                        artworkType: t,
                        fnOnRemoveImage: _ ? null : (B) => u(t, null, B),
                        realms: a,
                        fnLangHasData: i,
                        fnGetImageHashAndExt: l,
                        partnerEventStore: I,
                      }),
                    }),
                  }),
                ],
              });
        }
        let ba = class extends x.Component {
          ShowLangChangeDialog(s, t) {
            const {
              fnOnArtworkLanguageChange: a,
              realms: o,
              fnLangHasData: i,
            } = this.props;
            (0, Ve.pg)(
              (0, e.jsx)(ie, {
                clanImage: s,
                lang: t,
                fnOnArtworkLangChange: a,
                fnLangHasData: i,
                realms: o,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let s = new Array();
            const { list: t } = this.props;
            return (
              t.forEach((a) => {
                const { clanImage: o, lang: i } = a;
                let l = (0, c.we)("#Language_" + (0, z.LgB)(i));
                s.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: k().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping",
                            o.file_name ?? "",
                            l,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(o, i),
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + a.clanImage.imageid + "_" + i,
                  ),
                );
              }),
              s
            );
          }
          render() {
            const { list: s } = this.props;
            if (!s || s.length == 0) return (0, e.jsx)("div", {});
            let t = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: K().UploadSuccess,
              children: t,
            });
          }
        };
        an([gt.oI], ba.prototype, "ShowLangChangeDialog", 1),
          (ba = an([ga.PA], ba));
        var On = r(6658);
        function Rn(s) {
          const {
              clanSteamID: t,
              appid: a,
              eventModel: o,
              realms: i,
              loc_images: l,
              artworkType: u,
              fnLangHasData: v,
              closeModal: p,
              fnSetImageURL: I,
              partnerEventStore: _,
            } = s,
            [C, S] = (0, x.useState)(!1),
            y = (0, Wt.zO)(t, u),
            G = t.GetAccountID(),
            [O] = (0, j.q3)(() => [
              y.GetFilesToUpload().length - y.GetCompletedFiles(),
            ]);
          (0, x.useEffect)(() => {
            S(!1),
              Fe.ClearImageGroup(),
              l?.forEach((R, X) => {
                const me = Qe.b.InitFromClanID(G);
                if (Fe.GetAllLocalizedGroupImages().length == 0) {
                  const he = R && Ce.zU.GetHashFromHashAndExt(R),
                    Ae = he && Ue.pU.GetClanImageByImageHash(me, he);
                  Ae && Fe.SetPrimaryImageForImageGroup(Ae, u);
                }
                Fe.SetLocalizedImageGroupAtLang(X, me, R ?? null);
              }),
              S(!0);
          }, [l, G, u]);
          const L = (0, x.useCallback)(
              (R, X, me = z.Bhc) => {
                const he = Qe.b.InitFromClanID(G),
                  Ae = Ce.zU.GetHashAndExt(X ?? null);
                if (Fe.GetAllLocalizedGroupImages().length == 0) {
                  const Je = Ae && Ce.zU.GetHashFromHashAndExt(Ae),
                    fe = Je && Ue.pU.GetClanImageByImageHash(he, Je);
                  fe && Fe.SetPrimaryImageForImageGroup(fe, R);
                }
                Fe.SetLocalizedImageGroupAtLang(me, he, Ae);
              },
              [G],
            ),
            B = (0, x.useCallback)((R, X) => {
              const he =
                Fe.GetLocalizedImageGroupForEdit()?.localized_images[X];
              return he && he.split("/").pop();
            }, []),
            W = () => {
              const R = Fe.GetLocalizedImageGroupForEdit();
              for (let X = z.Bhc; X < z.bP9; ++X) {
                const me = R?.localized_images[X];
                if (me) {
                  const he = me.split("/").pop() || "";
                  I(
                    u,
                    {
                      image_hash: Ke(he),
                      clanAccountID: G,
                      file_type: (0, On.yh)(he) ?? Vt.bg.w3,
                      imageid: 0,
                    },
                    X,
                  );
                } else I(u, null, X);
              }
              Fe.ClearImageGroup(), s.onOK ? s.onOK() : p?.();
            };
          return (0, e.jsxs)(Ie.o0, {
            onCancel: p,
            closeModal: p,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, N.A)(De.NotTooWideModal, De.ImageManageDialog),
            strTitle: s.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: s.strLocalizedDescription,
            bOKDisabled: O > 0,
            onOK: W,
            strOKButtonText:
              O > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              C
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(w, {
                        clanSteamID: t,
                        rgSupportArtwork: [u],
                        fnSetImageURL: L,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: i ?? [],
                        uploaderOverride: y,
                      }),
                      (0, e.jsx)(Nn, {
                        clanSteamID: t,
                        eventModel: o,
                        artworkType: u,
                        title: null,
                        appid: a,
                        realms: i,
                        fnRemoveAllArtwork: () => Fe.ClearImageGroup(),
                        fnSetImageURL: L,
                        fnGetImageHashAndExt: B,
                        fnLangHasData: v,
                        partnerEventStore: _,
                      }),
                    ],
                  })
                : (0, e.jsx)(Re.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
                  }),
              s.children,
            ],
          });
        }
        function Un(s) {
          const { setting: t, fnUpdateSetting: a, label: o } = s,
            i = x.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ae.JU, {
                children: o || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(ae.m, {
                strDropDownClassName: T.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "no-repeat",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var Fn = r(94381);
        function zn(s) {
          const {
              closeModal: t,
              imgGroup: a,
              fnUpdateImageGroup: o,
              eventModel: i,
            } = s,
            { openColorPicker: l } = It(),
            [u, v] = (0, x.useState)(() => a),
            [p, I, _, C, S, y, G, O] = (0, j.q3)(() => [
              u.repeat_setting,
              u.scaling_setting,
              u.background_color1,
              u.background_color2,
              u.gradient_setting,
              u.position_setting,
              i.GetIncludedRealmList(),
              u.randomize_section_order,
            ]),
            [L] = (0, x.useState)(() => Hn(u.localized_background_art ?? {}));
          return (0, e.jsxs)(Rn, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: i.appid,
            eventModel: i,
            clanSteamID: i.clanSteamID,
            closeModal: t,
            partnerEventStore: oa.O3,
            artworkType: "localized_background_art",
            realms: G,
            loc_images: L,
            fnLangHasData: (B) => !!L[B],
            fnGetImageHash: (B, W) => L[W],
            fnSetImageURL: async (B, W, R) => {
              v((X) => {
                const me = { ...X.localized_background_art },
                  he = Ce.zU.GetHashAndExt(W);
                return (
                  he ? (me[(0, z.LgB)(R)] = he) : delete me[(0, z.LgB)(R)],
                  { ...X, localized_background_art: me }
                );
              });
            },
            onOK: () => {
              v((B) => (o(B), t && setTimeout(t, 1), { ...B }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Xe().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Xe().ImageOptions,
                    children: [
                      (0, e.jsx)(Un, {
                        setting: p,
                        fnUpdateSetting: (B) => {
                          v(
                            B !== "no-repeat"
                              ? {
                                  ...u,
                                  repeat_setting: B,
                                  scaling_setting: "auto",
                                }
                              : { ...u, repeat_setting: B },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(Wn, {
                        scaling_setting: I ?? "contain",
                        disable: p !== "no-repeat",
                        fnUpdateSetting: (B) => v({ ...u, scaling_setting: B }),
                      }),
                      I != "cover" &&
                        (0, e.jsx)(Vn, {
                          position_settings: y,
                          fnUpdateSetting: (B) =>
                            v({ ...u, position_setting: B }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Xe().ColorOptions,
                    children: [
                      (0, e.jsx)(ae.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Ot().ColorCtn,
                        children: [
                          (0, e.jsx)(ae.$n, {
                            style: { backgroundColor: _ },
                            onClick: (B) =>
                              l(B, {
                                color: _ ?? "",
                                onChange: (W) =>
                                  v({ ...u, background_color1: W }),
                              }),
                            children: (0, c.we)(
                              _ === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(ae.$n, {
                            onClick: () =>
                              v({ ...u, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Xe().SwapColorsCtn,
                        children: (0, e.jsx)(ae.$n, {
                          onClick: () =>
                            v({
                              ...u,
                              background_color1: C,
                              background_color2: _,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      S !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Ot().ColorCtn,
                          children: [
                            (0, e.jsx)(ae.$n, {
                              style: { backgroundColor: C },
                              onClick: (B) =>
                                l(B, {
                                  color: C ?? "",
                                  onChange: (W) =>
                                    v({ ...u, background_color2: W }),
                                }),
                              children: (0, c.we)(
                                C === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(ae.$n, {
                              onClick: () =>
                                v({ ...u, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(Yn, {
                        gradient: S ?? "top-to-bottom",
                        fnUpdateSetting: (B) =>
                          v({ ...u, gradient_setting: B }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(ra, {
                clanSteamID: i.clanSteamID,
                children: (0, e.jsx)(Fn.S, {
                  checked: !!O,
                  onChange: (B) => {
                    u.randomize_section_order = B;
                  },
                  children: (0, c.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function Hn(s) {
          const t = Pt.$Y([], z.bP9, null);
          for (const a in s) {
            const o = (0, z.sfN)(a);
            o != z.xPp && (t[o] = s[a]);
          }
          return t;
        }
        function Wn(s) {
          const {
              scaling_setting: t,
              fnUpdateSetting: a,
              label: o,
              disable: i,
            } = s,
            l = x.useMemo(() => {
              const u = [];
              return (
                u.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                u.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                u.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                u
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ae.JU, {
                children: o || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(ae.m, {
                strDropDownClassName: T.DropDownScroll,
                disabled: i,
                rgOptions: l,
                selectedOption: t || "cover",
                onChange: (u) => a(u.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Yn(s) {
          const { gradient: t, fnUpdateSetting: a, label: o } = s,
            i = x.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ae.JU, {
                children: o || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(ae.m, {
                strDropDownClassName: T.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "top-to-bottom",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Vn(s) {
          const { position_settings: t, fnUpdateSetting: a, label: o } = s,
            i = x.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ae.JU, {
                children: o || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(ae.m, {
                strDropDownClassName: T.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "unset",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Kn(s) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: a,
              fnSetBackgroundImgGroupEditMode: o,
              bShowAsValveOnly: i,
            } = s,
            [l, u] = (0, x.useState)(t.BIsBackgroundImageEnabled()),
            [v, p, I] = (0, gt.uD)(),
            _ = (0, j.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, N.A)(Xe().Ctn, i && T.ValveOnlyBackground),
            children: (0, e.jsxs)(J.tH, {
              children: [
                (0, e.jsx)(ae.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: l,
                  onChange: (C) => {
                    u(C), t.SetBackgroundImageEnabled(C);
                  },
                }),
                l
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(ae.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: a,
                          onChange: o,
                        }),
                        (0, e.jsx)(ae.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: _,
                          onChange: (C) =>
                            t.SetSalePageLastCoverSectionUntilEnd(C),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(ae.$n, {
                          onClick: p,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(Ie.EN, {
                          active: v,
                          children: (0, e.jsx)(Ie.o0, {
                            strTitle: (0, c.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, c.we)(
                              "#BackgroundGroups_ClearAllSettings_Desc",
                            ),
                            bDestructiveWarning: !0,
                            onOK: () => {
                              t.ClearAllBackgroundImageGroupSettings(), u(!1);
                            },
                            closeModal: I,
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("p", {
                      children: (0, c.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${ft.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, c.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const Qa = x.forwardRef(function (t, a) {
          const {
              imgGroupDerivedMapping: o,
              backgroundImageEditModel: i,
              groupIndex: l,
              imgGroup: u,
              eventModel: v,
              nTabIndex: p,
            } = t,
            I = (0, Ze.E)(),
            [_, C, S, y] = (0, j.q3)(() => [
              u && o.mapGroupToSections.get(u.background_id),
              (u &&
                o.mapGroupToSections.get(u.background_id)?.sectionUniqueIDs) ??
                [],
              p != null
                ? i?.GetTabLastCoverSectionUntilEnd(p)
                : i?.GetSalePageLastCoverSectionUntilEnd(),
              p != null ? i?.GetTabGroupCount(p) : i?.GetSalePageGroupCount(),
            ]),
            G = S && l + 1 === y,
            [O, L, B] = (0, gt.uD)(),
            [W, R, X] = (0, gt.uD)();
          let me;
          _?.nUniqueIDNextSaleSection &&
            (me = (0, Nt.h_)(
              ne.HY,
              i.GetSaleSectionByID(_?.nUniqueIDNextSaleSection),
              I,
              v,
              _.nSaleSectionLastIndex + 1,
            ));
          let he;
          if (_ && C?.length > 1) {
            const Ae = C[C.length - 1];
            he = (0, Nt.h_)(
              ne.HY,
              i?.GetSaleSectionByID(Ae),
              I,
              v,
              _.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(yt.qx, {
            bStartMinimized: !1,
            title: (0, c.we)(
              p != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              l + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: a,
              children: [
                (0, e.jsx)(ae.$n, {
                  onClick: L,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(Ie.EN, {
                  active: O,
                  children: (0, e.jsx)(zn, {
                    imgGroup: u,
                    closeModal: B,
                    eventModel: v,
                    fnUpdateImageGroup: (Ae) =>
                      p != null
                        ? i.SetTabBackgroundGroup(p, l, Ae)
                        : i.SetSalePageBackgroundGroup(l, Ae),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: Xe().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    C.map((Ae) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, Nt.h_)(
                            ne.W3,
                            i.GetSaleSectionByID(Ae),
                            I,
                            v,
                            i.GetSaleSectionIndexByID(Ae, !0),
                          ),
                        },
                        "li_" + Ae,
                      ),
                    ),
                    !!G &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!he &&
                  (0, e.jsx)(ae.$n, {
                    onClick: () =>
                      p != null
                        ? i.SetTabBackgroundGroup(p, l, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          })
                        : i.SetSalePageBackgroundGroup(l, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Reduce", he),
                  }),
                !!me &&
                  (0, e.jsx)(ae.$n, {
                    onClick: () =>
                      p != null
                        ? i.SetTabBackgroundGroup(p, l, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          })
                        : i.SetSalePageBackgroundGroup(l, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Extend", me),
                  }),
                l > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(ae.$n, {
                        onClick: R,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(Ie.EN, {
                        active: W,
                        children: (0, e.jsx)(Ie.o0, {
                          strTitle: (0, c.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, c.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            p != null
                              ? i.RemoveTabBackgroundGroup(p, l)
                              : i.RemoveSalePageBackgroundGroup(l),
                          closeModal: X,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function Zn(s) {
          const { backgroundImageEditModel: t, nTabID: a } = s;
          return (0, e.jsx)("div", {
            className: Xe().CtnEditor,
            children: (0, e.jsx)(ae.$n, {
              onClick: (o) =>
                a !== void 0 && a >= 0
                  ? t?.AddTabBackgroundGroup(a)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, c.we)(
                a !== void 0 && a >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function Qn(s) {
          const {
              nTabID: t,
              nSectionUniqueID: a,
              salePageBackgroundDerivedConfig: o,
              backgroundImageEditModel: i,
            } = s,
            l = o.mapFirstSectionToGroup.get(a);
          return a == o.nFirstSaleSectionIDWithoutGroup ||
            a == o.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(Zn, { backgroundImageEditModel: i, nTabID: t })
            : l
              ? (0, e.jsx)(Xn, { ...s, groupID: l })
              : null;
        }
        function Xn(s) {
          const {
              groupID: t,
              nTabID: a,
              salePageBackgroundDerivedConfig: o,
              backgroundImageEditModel: i,
            } = s,
            l =
              a && a >= 0
                ? o.selectedTabBackgroundDef.groups
                : i.GetSalePageGroupDefinition().groups,
            u = l.findIndex((O) => O.background_id === t),
            v = l[u],
            [p, I] = (0, x.useState)(!1);
          (0, x.useEffect)(() => {
            if (!p) return;
            const O = (0, Ve.pg)(
              (0, e.jsx)(Ie.o0, {
                bAlertDialog: !0,
                closeModal: () => I(!1),
                children: (0, e.jsx)(Qa, {
                  backgroundImageEditModel: i,
                  groupIndex: u,
                  imgGroup: v,
                  imgGroupDerivedMapping: o,
                  eventModel: i.GetEventModel(),
                  nTabIndex: a,
                }),
              }),
              window,
            );
            return () => {
              O.then((L) => L.Close());
            };
          }, [p, i, v, u, a, o]);
          const _ = (0, j.q3)(() => Tt.get(t)),
            [C, S] = (0, x.useState)(null),
            y = x.useCallback((O, L) => {
              S(L);
            }, []),
            G = (0, gt.w6)(y);
          return (0, e.jsxs)("div", {
            className: Xe().CtnEditor,
            ref: G,
            children: [
              !!(_ && C && C > _) &&
                (0, e.jsx)(ae.$n, {
                  onClick: (O) => I(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Qa, {
                backgroundImageEditModel: i,
                groupIndex: u,
                imgGroup: v,
                imgGroupDerivedMapping: o,
                eventModel: i.GetEventModel(),
                nTabIndex: a,
              }),
            ],
          });
        }
        var Jn = r(81557),
          nn = r.n(Jn);
        function $n(s) {
          const { imgGroupDerivedMapping: t } = s,
            [a, o] = (0, x.useState)(!1);
          (0, x.useEffect)(() => {
            if (!a) return;
            const _ = (0, Ve.pg)(
              (0, e.jsx)(Ie.o0, {
                bAlertDialog: !0,
                closeModal: () => o(!1),
                children: (0, e.jsx)(sn, { ...s }),
              }),
              window,
            );
            return () => {
              _.then((C) => C.Close());
            };
          }, [a, s]);
          const i = (0, j.q3)(() => {
              const _ = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (_) {
                const C = t.mapGroupToSections.get(_);
                if (C) return Tt.get(C?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [l, u] = (0, x.useState)(null),
            v = x.useCallback((_, C) => {
              u(C);
            }, []),
            p = (0, gt.w6)(v),
            I = !!(i >= 0 && l && l > i);
          return (0, e.jsxs)("div", {
            className: (0, N.A)(Xe().CtnEditor, nn().TabCtn),
            ref: p,
            children: [
              I &&
                (0, e.jsx)(ae.$n, {
                  onClick: (_) => o(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(sn, { ...s }),
            ],
          });
        }
        function sn(s) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: a,
              nTabID: o,
            } = s,
            [i, l] = (0, x.useState)(null),
            [u, v, p, I] = (0, j.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(o),
              t?.BIsTabEnabled(o),
              a.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(J.tH, {
            children: [
              (0, e.jsx)(ae.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: v,
                onChange: (_) => {
                  if (
                    ((0, xt.wT)(t, "edit model mising"),
                    (0, xt.wT)(o !== void 0, "tab setting missing"),
                    o !== void 0 && t)
                  ) {
                    const C = t.SetTabEnabled(o, _);
                    (0, xt.wT)(
                      !!C,
                      `Failed to create model TabID ${o}backgroundModel`,
                    ),
                      l(C);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${o}.`,
                    );
                },
              }),
              !!v &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(ae.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: u,
                      onChange: (_) => t.SetTabLastCoverSectionUntilEnd(o, _),
                    }),
                    (0, e.jsx)(Qa, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (p || i)?.groups[0],
                      imgGroupDerivedMapping: a,
                      eventModel: I,
                      nTabIndex: o,
                      classNameHeader: nn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var Jt = r(85692);
        function qn(s) {
          const { nSectionID: t, children: a } = s,
            [o, i] = x.useState(!1),
            [l, u] = x.useState(!1);
          x.useEffect(() => {
            Jt.TU.Get().SetMouseOverSection(t, o);
          }, [t, o]);
          const v = (0, j.q3)(() => Jt.TU.Get().GetMouseOverSectionID()),
            p = t && t == v,
            I = () => Jt.TU.Get().JumpToSection(t),
            _ = x.useRef(null);
          return (
            (0, Jt.lM)((C) =>
              t != C ? !1 : (_.current?.scrollIntoView(), u(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: _,
              className: (0, N.A)({
                [A().SaleSectionLivePreview]: !0,
                [A().Hover]: !!p,
                [A().JumpedTo]: !!l,
              }),
              onAnimationEnd: () => u(!1),
              onMouseEnter: () => i(!0),
              onMouseLeave: () => i(!1),
              children: [
                o &&
                  (0, e.jsx)(mt.Gq, {
                    toolTipContent: (0, c.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: A().JumpToButton,
                      onClick: I,
                      children: (0, e.jsx)(St.ffu, {}),
                    }),
                  }),
                a,
              ],
            })
          );
        }
        var es = r(79519),
          ts = r(20557);
        function as(s) {
          const {
              promotionName: t,
              eventModel: a,
              bIsPreview: o,
              language: i,
              backgroundImageEditModel: l,
              addtionalAdminButtons: u,
              bDynamicallyCreatedSale: v,
            } = s,
            [p, I] = x.useState(a?.GetDayIndexFromEventStart()),
            [_, C] = x.useState(null),
            S = (0, j.q3)(() => a.jsondata.sale_header_disable_top_margin),
            y = ns(a, p, (0, ts.TC)(!!o)),
            [G, O] = (0, x.useState)(!1);
          x.useEffect(() => {
            if (
              a.jsondata.sale_custom_css &&
              !_ &&
              o &&
              a.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, $.yK)() == "community"
            ) {
              const me = document.getElementsByTagName("HEAD")[0],
                he = document.createElement("style");
              (he.innerText = (0, Ea.L$)(a.jsondata.sale_custom_css)),
                C(he),
                me.appendChild(he);
            }
            const X = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, xt.wT)(
                X.length <= 1,
                "Must have at most one react_landing_background",
              ),
              X.length >= 1 && (X[0].style.backgroundImage = ""),
              () => {
                _ && (_.remove(), C(null));
              }
            );
          }, [a, _, o]);
          const L = a?.jsondata,
            B = x.useMemo(
              () => ({
                promotionName: t,
                clanid: Number($.UF.CLANACCOUNTID),
                nAppIDVOD: Number(L?.broadcast_preroll_vod_appid),
                event: a,
                bIsPreview: o,
                language: i,
                accountIDs: o ? L?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  L?.broadcast_chat_announcement_giveaway,
              }),
              [o, a, L, i, t],
            ),
            W = (0, j.q3)(() => l?.BIsBackgroundImageEnabled() ?? !1),
            R = Ht(a?.clanSteamID);
          if (!a || p === void 0)
            return (0, e.jsx)("div", {
              className: na().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(Re.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const X =
                a.jsondata.localized_sale_logo &&
                a.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              me = a.BUsesContentHubForItemSource(),
              he = a
                .GetSaleSections()
                .some((lt) => lt.section_type === "contenthubtitle"),
              Ae = me && he;
            let Je,
              fe = !0;
            X
              ? (Je = 0)
              : a.BUsesContentHubForItemSource()
                ? (Je = 20)
                : a.GetEventType() == z.ajI
                  ? ((Je = 0), (fe = !1))
                  : (Je = a.jsondata.sale_header_offset || 0);
            const xe = fe && a.jsondata.sale_header_offset === 530,
              $e = !ut.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  a.GetContentHubType(),
                  a.GetContentHubCategory(),
                  a.GetContentHubTag(),
                ),
              Mt = o
                ? !G && l?.BIsBackgroundImageEnabled()
                  ? nt.S.EPreviewMode_EditBackground
                  : nt.S.EPreviewMode_Enabled
                : nt.S.EPreviewMode_Disabled,
              it = W || a.GetEventType() != z.ajI,
              $t = me ? le.Yo.NoTransform : le.Yo.NoTransformSparseContent,
              _a = (0, N.A)(
                A().SaleOuterContainer,
                S && A().SaleOuterTopMargin,
                xe && A().SaleNewSizing,
                A()[`CustomStyle_${a.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                X && A().SalePageLogoSet,
                Ae && A().ContentHub,
              );
            return (0, e.jsx)(J.tH, {
              children: (0, e.jsx)(re.EU, {
                eventModel: a,
                language: i,
                children: (0, e.jsx)(ne.Cs, {
                  location: o ? ne.HY : ne.bs,
                  children: (0, e.jsxs)(be, {
                    event: a,
                    language: i,
                    bIsPreview: !!o,
                    children: [
                      $e && (0, e.jsx)(re.Sn, {}),
                      (0, e.jsx)(_e, { eventModel: a }),
                      !!l &&
                        (it || R) &&
                        (0, e.jsx)(Kn, {
                          backgroundImageEditModel: l,
                          bBackgroundImgGroupEditMode: G,
                          fnSetBackgroundImgGroupEditMode: O,
                          bShowAsValveOnly: !it,
                        }),
                      (0, e.jsxs)(Z.Z, {
                        style: Ae ? void 0 : { marginTop: `${Je || 0}px` },
                        className: _a,
                        scrollIntoViewType: $t,
                        children: [
                          (0, e.jsx)(Be, { eventModel: a, language: i }),
                          (0, e.jsx)(ht, {
                            rgPresenters: a.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(ke, {
                            event: a,
                            broadcastEmbedContext: B,
                          }),
                          (0, e.jsx)(rs, {
                            ePreviewMode: Mt,
                            event: a,
                            backgroundImageEditModel: l,
                            language: i,
                            promotionName: t,
                            nSaleDayIndex: p,
                            broadcastEmbedContext: B,
                            selectedTab: y,
                            tagSelection: y?.GetTagSelection(),
                          }),
                          !v &&
                            (0, e.jsx)(Ye, {
                              event: a,
                              addtionalAdminButtons: u,
                              fnOnChangeDayIndex: (lt) => {
                                lt != p &&
                                  ((a.m_overrideCurrentDay = lt), I(lt));
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }
        }
        function ns(s, t, a) {
          const [o] = (0, qe.QD)(D.jD, void 0),
            [i] = (0, qe.QD)(se.dk, void 0),
            [l] = (0, qe.QD)(se.NV, void 0),
            u = x.useMemo(() => {
              const C = s
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((S) => !S.hide);
              if (C && C.length > 0) {
                let S = o > 0 ? C.find((G) => G.unique_id == o) : void 0;
                S || (S = C[0]);
                const y = S === C[0];
                return { selTab: S, bIsDefaultTab: y };
              }
            }, [s, o]),
            v = (0, se.U9)((0, se.XL)(i, l), u?.selTab.tab_tag_filter, a),
            p = v?.strParentKey,
            I = v?.strChildKey;
          return x.useMemo(() => {
            if (!u) return;
            let _;
            p && (_ = { strParentKey: p, strChildKey: I });
            const C =
              s.jsondata.sale_opt_in_page_name ||
              s.jsondata.prune_list_optin_name;
            return new vt.y(u.selTab, t, u.bIsDefaultTab, _, C);
          }, [s, t, u, p, I]);
        }
        function rn() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function ss(s) {
          const {
              event: t,
              language: a,
              nSaleDayIndex: o,
              ePreviewMode: i,
              selectedTab: l,
              backgroundImageEditModel: u,
            } = s,
            [v, p] = x.useState((0, D.rp)()),
            I = x.useMemo(() => new sa(), []),
            _ = x.useCallback(() => p((0, D.rp)()), []);
          x.useEffect(
            () => (
              window.addEventListener("resize", _),
              () => window.removeEventListener("resize", _)
            ),
            [_],
          ),
            x.useEffect(() => {
              let fe = "";
              const xe = () => {
                  const $e = rn();
                  if ($e && $e != fe) {
                    const Mt = document.getElementById($e);
                    Mt && ((fe = $e), Mt.scrollIntoView({ block: "start" }));
                  }
                },
                Te = setTimeout(() => xe(), 150);
              return (
                window.addEventListener("hashchange", xe),
                () => {
                  clearTimeout(Te),
                    window.removeEventListener("hashchange", xe);
                }
              );
            }, []);
          const C = (0, pt.W6)(),
            S = (fe, xe) => {
              (0, qe.ip)(C, { ...(xe || {}), [D.jD]: fe.toString() });
            },
            [y, G] = (0, qe.QD)("controller"),
            [O, L] = (0, j.q3)(() => {
              const fe =
                  Ge.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                xe = t.GetSaleSectionIncludingFooterSections(fe);
              return [
                ea(
                  t.jsondata.sale_background_img_groups,
                  xe,
                  l && l.GetActiveTabUniqueID(),
                ),
                xe,
              ];
            });
          let B = !1;
          const W = new vt.y(void 0, o),
            R = [{ elements: [], activeTab: W }];
          let X = null;
          const me = (0, $.Qn)(),
            he = (0, Jt.ty)(),
            Ae = x.useMemo(() => {
              const fe = rn();
              if (!fe) return;
              const xe = L.findIndex((Te) => Te.section_anchor === fe);
              return xe > -1 ? xe : void 0;
            }, [L]);
          L.forEach((fe, xe) => {
            const Te = R[R.length - 1].activeTab;
            if (Te && !Te.ShouldShowSection(fe)) return;
            const $e = ut.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              Mt = v && !$e && !t.jsondata.content_hub_restricted_width;
            let it = (0, nt.I)(fe, i, t, a, me);
            if (it === void 0) return;
            if (!it)
              if ((0, zt.su)(fe) && !$.iA.logged_in)
                B ||
                  ((it = (0, e.jsx)(zt.CC, {
                    section: fe,
                    event: t,
                    language: a,
                  })),
                  (B = !0));
              else {
                const cs = fe.diable_tab_id_filtering
                  ? new vt.y(void 0, Te && Te.GetSaleDay())
                  : Te;
                fe.section_type == "tabs" &&
                  fe.tabs?.some(
                    (ds) => ds.unique_id == l?.GetActiveTabUniqueID(),
                  ) &&
                  R.push({ activeTab: l, elements: [] }),
                  (it = (0, e.jsx)(es.H, {
                    ...s,
                    section: fe,
                    activeTab: cs,
                    appVisibilityTracker: I,
                    selectedTab: l,
                    setTabUniqueIDQueryParam: S,
                    expanded: Mt,
                    controllerCategory: y,
                    setControllerCategory: G,
                  }));
              }
            he &&
              (it = (0, e.jsx)(qn, { nSectionID: fe.unique_id, children: it }));
            const $t = R && R.length && R[R.length - 1];
            let _a = (0, e.jsx)(
              ls,
              {
                section: fe,
                nActiveTabID:
                  $t && $t.activeTab && $t.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: xe,
                ePreviewMode: i,
                salePageBackgroundDerivedConfig: O,
                backgroundImageEditModel: u,
                bExpanded: Mt,
                children: (0, e.jsx)(Et._, {
                  enabled: !Ae || xe > Ae,
                  children: it,
                }),
              },
              "SaleSectionIndex_" + fe.unique_id + "_" + xe,
            );
            const lt = O.mapSectionToGroup.get(fe.unique_id);
            X &&
              X.groupID != lt &&
              (R[R.length - 1].elements.push(
                ta(t, X, i, l && l?.GetActiveTabUniqueID()),
              ),
              (X = null)),
              lt
                ? (X ||
                    (X = {
                      groupID: lt,
                      elSaleSections: [],
                      derivedGroupInfo: O.mapGroupToSections.get(lt),
                    }),
                  X.elSaleSections.push(_a))
                : R[R.length - 1].elements.push(_a);
          }),
            X &&
              (R[R.length - 1].elements.push(
                ta(t, X, i, l && l?.GetActiveTabUniqueID()),
              ),
              (X = null));
          const Je = R.map((fe, xe) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, N.A)(
                  A().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: fe.elements,
              },
              "TabSection_" + xe,
            ),
          );
          return (0, e.jsx)(Z.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Je,
          });
        }
        const rs = (0, pt.y)(ss);
        function os(s) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: a,
            children: o,
          } = s;
          return t && a != null
            ? (0, e.jsx)(is, {
                visibility_by_door_index_state: t,
                door_index_visibility: a,
                children: o,
              })
            : (0, e.jsx)(e.Fragment, { children: o });
        }
        function is(s) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: a,
              children: o,
            } = s,
            i = (0, We.OM)(a);
          return (t == "hide_when_open_door_index" && i) ||
            (t == "show_when_open_door_index" && !i)
            ? null
            : (0, e.jsx)(e.Fragment, { children: o });
        }
        function on({ children: s, onChange: t }) {
          const a = x.useRef(null);
          return (
            (0, x.useEffect)(() => {
              t(!!x.Children.toArray(s).filter(Boolean).length);
            }, [s, t]),
            s
          );
        }
        function ls(s) {
          const {
              section: t,
              saleSectionIndex: a,
              nActiveTabID: o,
              ePreviewMode: i,
              salePageBackgroundDerivedConfig: l,
              backgroundImageEditModel: u,
              bExpanded: v,
              children: p,
            } = s,
            I = t.section_anchor ? t.section_anchor : D.mj + (t.unique_id || a),
            _ = t.section_type != "tabs",
            [C, S] = (0, x.useState)(!0);
          return C
            ? (0, e.jsx)(J.tH, {
                children: (0, e.jsx)(os, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: _
                    ? (0, e.jsx)(Z.Z, {
                        navKey: I,
                        id: I,
                        className: (0, N.A)({
                          [A().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: v,
                          [t.single_item_style || ""]: !0,
                          [A().SaleSectionBackgroundImageGroupEdit]:
                            i == nt.S.EPreviewMode_EditBackground,
                          [A().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          i === nt.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  p,
                                  (0, e.jsx)(Qn, {
                                    nSectionUniqueID: t.unique_id || a,
                                    nTabID: o,
                                    salePageBackgroundDerivedConfig: l,
                                    backgroundImageEditModel: u,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(on, { onChange: S, children: p }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          i === nt.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: I,
                                className: (0, N.A)({
                                  [A().SaleSectionCtn]: !0,
                                  [A().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [A().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  p,
                                  (0, e.jsx)($n, {
                                    backgroundImageEditModel: u,
                                    nTabID: o,
                                    imgGroupDerivedMapping: l,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(on, { onChange: S, children: p }),
                      }),
                }),
              })
            : null;
        }
      },
      4370: (F, we, r) => {
        "use strict";
        r.d(we, { A: () => ne, X: () => pe });
        var e = r(7850),
          z = r(17083),
          Z = r(24660);
        function le(V) {
          return !!(V.metaKey || V.altKey || V.ctrlKey || V.shiftKey);
        }
        function re(V) {
          const { navigate: j, onClick: x, ...Q } = V,
            { target: J } = Q,
            te = (A) => {
              try {
                x && x(A);
              } catch (T) {
                throw (A.preventDefault(), T);
              }
              !A.defaultPrevented &&
                A.button === 0 &&
                (!J || J === "_self") &&
                !le(A) &&
                (A.preventDefault(), j());
            };
          return (0, e.jsx)(Z.Ii, { ...Q, onClick: te });
        }
        function ne(V) {
          return (0, e.jsx)(z.k2, { component: re, ...V });
        }
        function pe(V) {
          return (0, e.jsx)(z.N_, { component: re, ...V });
        }
      },
      12932: (F, we, r) => {
        "use strict";
        r.d(we, { qx: () => T });
        var e = r(7850),
          z = r(16412),
          Z = r(18210),
          le = r(36118),
          re = r(90626),
          ne = r(36707),
          pe = r(95695),
          V = r.n(pe),
          j = r(25792),
          x = r(64734),
          Q = r.n(x),
          J = r(65946),
          te = r(11243);
        function A(N) {
          const {
              title: $,
              tooltip: Ee,
              getMinimized: Y,
              toggleMinimized: ce,
              className: be,
              children: ve,
              elAdditionalButtons: M,
            } = N,
            ee = (0, J.q3)(() => Y());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, ne.A)(
                  be,
                  x.SectionTitleHeader,
                  x.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, ne.A)(
                      pe.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [$, !!Ee && (0, e.jsx)(te.o, { tooltip: Ee })],
                  }),
                  (0, e.jsxs)("div", {
                    className: x.SectionTitleButtons,
                    children: [
                      M,
                      (0, e.jsx)(k, { bIsMinimized: ee, fnToggleMinimize: ce }),
                    ],
                  }),
                ],
              }),
              !ee && (0, e.jsx)(j.tH, { children: ve }),
            ],
          });
        }
        function T(N) {
          const [$, Ee] = re.useState(!!N.bStartMinimized);
          return (0, e.jsx)(A, {
            ...N,
            getMinimized: () => $,
            toggleMinimized: () => Ee(!$),
            children: N.children,
          });
        }
        function k(N) {
          const { bIsMinimized: $, fnToggleMinimize: Ee } = N,
            Y = $ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(z.$n, {
            "data-tooltip-text": (0, Z.we)(Y),
            onClick: Ee,
            children: N.bIsMinimized
              ? (0, e.jsx)(le.hz4, {})
              : (0, e.jsx)(le.Xjb, {}),
          });
        }
      },
      27638: (F, we, r) => {
        "use strict";
        r.d(we, { Y: () => Z });
        var e = r(90626);
        function z(le) {
          const { title: re, bodyClassName: ne, children: pe } = le;
          return (
            React.useEffect(() => {
              const V = document.title;
              return (
                (document.title = re),
                () => {
                  document.title = V;
                }
              );
            }, [re]),
            Z(ne),
            pe
          );
        }
        function Z(le) {
          e.useEffect(() => {
            if (!le) return;
            const re = [];
            for (const ne of le.split(/ /))
              document.body.classList.contains(ne) || re.push(ne);
            return (
              document.body.classList.add(...re),
              () => document.body.classList.remove(...re)
            );
          }, [le]);
        }
      },
      6479: (F, we, r) => {
        "use strict";
        r.r(we), r.d(we, { SteamChartsRoutes: () => ue, default: () => Wa });
        var e = r(7850),
          z = r(58732),
          Z = r(80902),
          le = r(99412),
          re = r(72604),
          ne = r(35038),
          pe = r(80613),
          V = r.n(pe),
          j = r(75245),
          x = r(78192);
        class Q extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              Q.prototype.country_code || j.Sg(Q.M()),
              pe.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    country_code: {
                      n: 1,
                      br: j.qM.readString,
                      bw: j.gp.writeString,
                    },
                    context: { n: 2, c: x.TS },
                    data_request: { n: 3, c: x.gn },
                    start_date: {
                      n: 4,
                      br: j.qM.readUint32,
                      bw: j.gp.writeUint32,
                    },
                    page_start: {
                      n: 5,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                    page_count: {
                      n: 6,
                      d: 20,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = j.w0(Q.M())), Q.sm_mbf;
          }
          toObject(n = !1) {
            return Q.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(Q.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(Q.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (V().BinaryReader)(n),
              g = new Q();
            return Q.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(Q.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (V().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(Q.M(), n, d);
          }
          serializeBase64String() {
            var n = new (V().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Request";
          }
        }
        class J extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              J.prototype.start_date || j.Sg(J.M()),
              pe.Message.initialize(this, n, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    start_date: {
                      n: 1,
                      br: j.qM.readUint32,
                      bw: j.gp.writeUint32,
                    },
                    ranks: { n: 2, c: te, r: !0, q: !0 },
                    next_page_start: {
                      n: 3,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = j.w0(J.M())), J.sm_mbf;
          }
          toObject(n = !1) {
            return J.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(J.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(J.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (V().BinaryReader)(n),
              g = new J();
            return J.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(J.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (V().BinaryWriter)();
            return J.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(J.M(), n, d);
          }
          serializeBase64String() {
            var n = new (V().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response";
          }
        }
        class te extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              te.prototype.rank || j.Sg(te.M()),
              pe.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    rank: { n: 1, br: j.qM.readInt32, bw: j.gp.writeInt32 },
                    appid: { n: 2, br: j.qM.readInt32, bw: j.gp.writeInt32 },
                    item: { n: 3, c: x.vB },
                    last_week_rank: {
                      n: 4,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                    consecutive_weeks: {
                      n: 5,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                    first_top100: {
                      n: 6,
                      br: j.qM.readBool,
                      bw: j.gp.writeBool,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = j.w0(te.M())), te.sm_mbf;
          }
          toObject(n = !1) {
            return te.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(te.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(te.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (V().BinaryReader)(n),
              g = new te();
            return te.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(te.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (V().BinaryWriter)();
            return te.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(te.M(), n, d);
          }
          serializeBase64String() {
            var n = new (V().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank";
          }
        }
        class A extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              A.prototype.language || j.Sg(A.M()),
              pe.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    language: {
                      n: 1,
                      br: j.qM.readString,
                      bw: j.gp.writeString,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = j.w0(A.M())), A.sm_mbf;
          }
          toObject(n = !1) {
            return A.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(A.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(A.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (V().BinaryReader)(n),
              g = new A();
            return A.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(A.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (V().BinaryWriter)();
            return A.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(A.M(), n, d);
          }
          serializeBase64String() {
            var n = new (V().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Request";
          }
        }
        class T extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              T.prototype.countries || j.Sg(T.M()),
              pe.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: { countries: { n: 1, c: k, r: !0, q: !0 } },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = j.w0(T.M())), T.sm_mbf;
          }
          toObject(n = !1) {
            return T.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(T.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(T.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (V().BinaryReader)(n),
              g = new T();
            return T.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(T.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (V().BinaryWriter)();
            return T.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(T.M(), n, d);
          }
          serializeBase64String() {
            var n = new (V().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response";
          }
        }
        class k extends pe.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              k.prototype.country_code || j.Sg(k.M()),
              pe.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    country_code: {
                      n: 1,
                      br: j.qM.readString,
                      bw: j.gp.writeString,
                    },
                    name: { n: 2, br: j.qM.readString, bw: j.gp.writeString },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = j.w0(k.M())), k.sm_mbf;
          }
          toObject(n = !1) {
            return k.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(k.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(k.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (V().BinaryReader)(n),
              g = new k();
            return k.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(k.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (V().BinaryWriter)();
            return k.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(k.M(), n, d);
          }
          serializeBase64String() {
            var n = new (V().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response_Country";
          }
        }
        var N;
        ((m) => {
          function n(g, h, f) {
            return g.SendMsg(
              "StoreTopSellers.GetWeeklyTopSellers#1",
              (0, ne.I8)(Q, h, f),
              J,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetWeeklyTopSellers = n;
          function d(g, h, f) {
            return g.SendMsg(
              "StoreTopSellers.GetCountryList#1",
              (0, ne.I8)(A, h, f),
              T,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetCountryList = d;
        })(N || (N = {}));
        var $ = r(84192),
          Ee = r(71742),
          Y = r(3166);
        const ce = 20;
        class be {
          m_WebAPI;
          m_Storage;
          m_promiseInitialize;
          m_rtCurrentWeek;
          constructor(n, d) {
            (this.m_WebAPI = n), (this.m_Storage = d);
          }
          async Initialize(n) {
            return (
              this.m_promiseInitialize ||
                (this.m_promiseInitialize = new Promise((d, g) => {
                  let h;
                  (Y.TS.EUNIVERSE == le.Rv || Y.TS.EUNIVERSE == le.CII) &&
                    (h = 1539068400),
                    this.LoadCountryList()
                      .then(() =>
                        this.LoadCurrentWeekStart(h, n).then((f) => {
                          (this.m_rtCurrentWeek = f), d();
                        }),
                      )
                      .catch(g);
                })),
              this.m_promiseInitialize
            );
          }
          m_rgCountryList;
          static k_nCountryListMaxCacheTime = 1e3 * 60 * 60 * 24;
          async LoadCountryList() {
            if (!this.m_rgCountryList) {
              const n = "TopSellersCountryList_" + Y.TS.LANGUAGE;
              if (
                ((this.m_rgCountryList = await this.m_Storage.GetObject(n)),
                !this.m_rgCountryList ||
                  this.m_rgCountryList.dtTimeStored +
                    be.k_nCountryListMaxCacheTime <
                    Date.now())
              ) {
                const d = ne.w.Init(A);
                d.Body().set_language(Y.TS.LANGUAGE);
                const g = await N.GetCountryList(
                  this.m_WebAPI.GetServiceTransport(),
                  d,
                );
                if (g.GetEResult() == re.R) {
                  let h = g
                    .Body()
                    .countries()
                    .map((f) => f.toObject());
                  h.sort((f, b) => (f.name < b.name ? -1 : 1)),
                    (this.m_rgCountryList = {
                      rgCountryCodes: h,
                      dtTimeStored: Date.now(),
                    }),
                    this.m_Storage.StoreObject(n, this.m_rgCountryList);
                } else
                  this.m_rgCountryList = {
                    rgCountryCodes: [
                      { country_code: "US", name: "United States" },
                    ],
                    dtTimeStored: 0,
                  };
              }
            }
            return this.m_rgCountryList;
          }
          BIsValidTopSellersCountry(n) {
            return !!this.ValidateCountryCode(n);
          }
          ValidateCountryCode(n) {
            return (
              (0, Ee.wT)(
                this.m_rgCountryList,
                "Country list should already be loaded",
              ),
              this.m_rgCountryList.rgCountryCodes.find(
                (d) => d.country_code == n,
              )
                ? n
                : ""
            );
          }
          GetCurrentWeek() {
            return this.m_rtCurrentWeek;
          }
          async LoadCurrentWeekStart(n, d) {
            const g = this.ValidateCountryCode(d);
            let h = ne.w.Init(Q);
            (0, $.rV)(h),
              (0, $.Bn)(h, ht),
              g && h.Body().set_country_code(g),
              n && h.Body().set_start_date(n),
              h.Body().set_page_count(ce);
            let f = await N.GetWeeklyTopSellers(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              h,
            );
            if (f.GetEResult() != re.R) throw "error loading top sellers";
            return f.Body().start_date();
          }
        }
        const ve = "TopSellers";
        function M(m, n) {
          const { data: d } = (0, Z.I)({
            queryKey: [ve, "Initialization"],
            queryFn: () =>
              m
                .Initialize(n)
                .then(() => ({
                  rtCurrentWeek: m.GetCurrentWeek(),
                  bCountryListInitialized: !0,
                })),
            staleTime: 1 / 0,
          });
          return d || { rtCurrentWeek: void 0, bCountryListInitialized: !1 };
        }
        var ee = r(19619),
          q = r(79809);
        function _e(m) {
          let n = 50;
          return (
            m < 2009 ? (n = 5) : m < 2014 ? (n = 10) : m < 2018 && (n = 25), n
          );
        }
        class oe {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopMonthlyReleases(n, d) {
            let g = ne.w.Init(q.GM);
            const h = new Date(n, d, 15);
            g.Body().set_rtime_month(Math.floor(h.getTime() / 1e3)),
              g.Body().set_include_dlc(!0);
            const f = _e(n);
            g.Body().set_top_results_limit(f);
            let b = await q.ZG.GetMonthTopAppReleases(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              g,
            );
            if (b.GetEResult() != re.R) {
              if (b.GetEResult() == re.S7) return { bSQLError: !0 };
              if (b.GetEResult() == re.p) return {};
              throw "error loading top releases";
            }
            return b.Body().toObject();
          }
        }
        const je = "useMonthlyTopRelease";
        function c(m, n, d) {
          const { data: g } = (0, Z.I)({
            queryKey: [je, n, d],
            queryFn: () => m.LoadTopMonthlyReleases(n, d),
          });
          return g;
        }
        var Be = r(72609);
        class He {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopYearlyReleases(n) {
            let d = ne.w.Init(q.FN);
            const g = new Date(n, 1, 15);
            d.Body().set_rtime_year(Math.floor(g.getTime() / 1e3)),
              d.Body().set_include_dlc(!0);
            const h =
              (Be.iA.is_support, this.m_WebAPI.GetAnonymousServiceTransport());
            let f = await q.ZG.GetYearTopAppReleases(h, d);
            if (f.GetEResult() != re.R) {
              if (f.GetEResult() == re.S7) return { bSQLError: !0 };
              if (f.GetEResult() == re.p) return {};
              throw "error loading top releases";
            }
            const b = f.Body().toObject();
            return Be.iA.is_support && b.top_app_list.length == 0, b;
          }
        }
        function Ne() {
          const m = {
              top_app_list: [],
              top_combined_app_and_dlc_releases: [],
              top_dlc_releases: [],
            },
            n = [
              EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
              EAppNewReleaseRank.k_EAppNewReleaseRank_Gold,
              EAppNewReleaseRank.k_EAppNewReleaseRank_Silver,
              EAppNewReleaseRank.k_EAppNewReleaseRank_Bronze,
            ],
            d = [
              {
                appid: 400,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_Sellers,
              },
              {
                appid: 440,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_Played,
              },
              {
                appid: 620,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_SteamDeck_Played,
              },
              {
                appid: 583950,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_Controller_Played,
              },
              {
                appid: 546560,
                app_release_rank:
                  EAppNewReleaseRank.k_EAppNewReleaseRank_Platinum,
                type: EAppTopRankType.k_EAppTopType_VR_Played,
              },
            ];
          for (const h of d)
            for (const f of n)
              m.top_app_list.push({ ...h, app_release_rank: f }),
                m.top_app_list.push({ ...h, appid: 730, app_release_rank: f }),
                m.top_app_list.push({ ...h, appid: 540, app_release_rank: f });
          const g = Math.round(new Date().getTime() / 1e3);
          for (const h of n)
            m.top_combined_app_and_dlc_releases.push(
              { appid: 400, app_release_rank: h, rtime_release: g },
              { appid: 440, app_release_rank: h, rtime_release: g },
              { appid: 620, app_release_rank: h, rtime_release: g },
              { appid: 583950, app_release_rank: h, rtime_release: g },
            );
          return m;
        }
        const tt = "useYearlyTopRelease";
        function ct(m, n) {
          const { data: d } = (0, Z.I)({
            queryKey: [tt, n],
            queryFn: () => m.LoadTopYearlyReleases(n),
          });
          return d;
        }
        class dt {
          m_DynamicUserStore;
          m_TopSellersStore;
          m_TopMonthlyReleasesStore;
          m_TopYearlyReleasesStore;
          m_WebAPI;
          async Initialize(n, d) {
            (this.m_WebAPI = n),
              (this.m_TopSellersStore = new be(this.m_WebAPI, d)),
              (this.m_TopMonthlyReleasesStore = new oe(this.m_WebAPI)),
              (this.m_TopYearlyReleasesStore = new He(this.m_WebAPI)),
              (this.m_DynamicUserStore = await ee.Fm.Get().HintLoad());
          }
          get TopSellersStore() {
            return this.m_TopSellersStore;
          }
          get TopMonthlyReleasesStore() {
            return this.m_TopMonthlyReleasesStore;
          }
          get TopYearlyReleasesStore() {
            return this.m_TopYearlyReleasesStore;
          }
          get DynamicUserStore() {
            return this.m_DynamicUserStore;
          }
        }
        const ht = {
          include_basic_info: !0,
          include_assets: !0,
          include_trailers: !0,
          include_release: !0,
          include_reviews: !0,
          include_platforms: !0,
          include_screenshots: !0,
          include_tag_count: 20,
        };
        var at = r(89921),
          Ge = r.n(at),
          pt = r(74812),
          D = r.n(pt),
          se = r(90626),
          ut = r(24805),
          We = r(7582),
          Ct = r(29057),
          ke = r(10142),
          Oe = r(84676),
          Ye = r(36118),
          qe = r(92298),
          Ze = r.n(qe),
          gt = r(19367),
          ft = r.n(gt),
          Lt = r(16346),
          Tt = r(34360),
          ja = r(95863),
          ea = r.n(ja),
          Ce = r(71421),
          ye = r(36707),
          de = r(18210),
          Pt = r(92264);
        function nt(m) {
          const { toolTipContent: n } = m,
            d = ta({ ...m });
          return (0, e.jsx)(Ce.Gq, {
            toolTipContent: n,
            children: (0, e.jsx)("div", {
              className: (0, ye.A)(ea().CalendarBtn),
              onClick: (g) =>
                d(g, { bDisableMouseOverlay: !0, bAlwaysOnTop: !0 }),
              children: (0, e.jsx)(Ye.VvS, { color: "#c6d4df" }),
            }),
          });
        }
        function ta(m) {
          return (0, se.useCallback)(
            (d, g) => {
              const h = (0, e.jsx)(Ca, { ...m });
              (0, Lt.lX)(h, d, g);
            },
            [m],
          );
        }
        function Ca(m) {
          const { value: n, fnOnUpdate: d, minDate: g, maxDate: h } = m,
            f = (0, se.useRef)(void 0),
            b = (0, se.useRef)(null),
            E = (0, se.useCallback)(
              (P) => {
                const U = ft().unix(g),
                  K = ft().unix(h);
                return (
                  P.isSameOrAfter(U, "month") && P.isSameOrBefore(K, "month")
                );
              },
              [g, h],
            ),
            w = (0, se.useCallback)(
              (P) => {
                d(P.unix()), f.current.Hide();
              },
              [d],
            ),
            H = (0, se.useMemo)(() => {
              if (!ft().locales().includes("YearMonthPickerContextMenu")) {
                const P = Array.from({ length: 12 }, (K, ge) =>
                    (0, de.Gj)(new Date(2020, ge, 1)),
                  ),
                  U = Array.from({ length: 12 }, (K, ge) =>
                    (0, Pt.oL)(new Date(2020, ge, 1)),
                  );
                ft().defineLocale("YearMonthPickerContextMenu", {
                  months: P,
                  monthsShort: U,
                });
              }
              return ft()().clone().locale("YearMonthPickerContextMenu");
            }, []);
          return (0, e.jsx)(Tt.tz, {
            refInstance: f,
            children: (0, e.jsx)(Tt.kt, {
              onSelected: () => {},
              className: ea().PickerContainer,
              children: (0, e.jsx)("div", {
                onClick: (P) => {
                  P.preventDefault(), P.stopPropagation();
                },
                children: (0, e.jsx)(Ze(), {
                  ref: b,
                  value: H,
                  onChange: w,
                  dateFormat: "YYYY-MM",
                  timeFormat: !1,
                  closeOnSelect: !0,
                  isValidDate: E,
                  input: !1,
                  locale: "YearMonthPickerContextMenu",
                }),
              }),
            }),
          });
        }
        var aa = r(31032),
          zt = r(47515),
          vt = r(85599),
          st = r(41672),
          na = r(27221),
          Re = r.n(na);
        const Xa = 25;
        function sa(m) {
          const {
              rgAppIDs: n,
              children: d,
              nMonth: g,
              bTallCapsule: h,
              bBlurCapsules: f,
            } = m,
            b = (0, se.useMemo)(() => {
              let E = 0,
                w = [...n];
              for (; w.length < 25; ) w.push(n[E % n.length]), E++;
              return w.map((H) => ke.A.Get().GetApp(H)).filter(Boolean);
            }, [n]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, ye.A)({
                  [Re().ImagesCtn]: !0,
                  [Re().TallCapsules]: h,
                  [Re().BlurCapsules]: f,
                  [Re().AnnualChart]: !g,
                }),
                children: (0, e.jsx)("div", {
                  className: Re().AllImagesCtn,
                  children: (0, e.jsx)("div", {
                    className: Re().AllImages,
                    children: (0, e.jsx)("div", {
                      className: (0, ye.A)({
                        [Re().ImageTint]: !0,
                        [`Month${g}`]: !0,
                        [Re().Wide2]: b.length <= 10,
                        [Re().Wide3]: b.length <= 20,
                      }),
                      children: b.map((E, w) =>
                        h
                          ? (0, e.jsx)(
                              "img",
                              { src: E.GetAssets().GetHeroCapsuleURL() },
                              "bg_" + E.GetAppID() + "+" + w,
                            )
                          : (0, e.jsx)(
                              "img",
                              { src: E.GetAssets().GetHeaderURL() },
                              "bg_" + E.GetAppID() + "+" + w,
                            ),
                      ),
                    }),
                  }),
                }),
              }),
              d,
            ],
          });
        }
        function xt(m) {
          const n = m > 1e12,
            d = new Date(n ? m : m * 1e3),
            g = {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            },
            h = new Intl.DateTimeFormat("en-US", g).format(d),
            f = new Date(
              d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
            ),
            b = f.getMonth(),
            E = f.getFullYear(),
            w = f.getDate(),
            H = f.getHours();
          let P, U;
          for (
            w > 15 || (w === 15 && H >= 10) ? (P = b - 1) : (P = b - 2);
            P < 0;
          )
            (P += 12), (U = (U ?? E) - 1);
          U = U ?? E;
          const K = new Date(Date.UTC(U, P, 15, 17, 0));
          return Math.floor(K.getTime() / 1e3);
        }
        function Ea(m) {
          const [n, d] = m.split("_");
          let g = parseInt(d, 10),
            f = {
              january: 0,
              february: 1,
              march: 2,
              april: 3,
              may: 4,
              june: 5,
              july: 6,
              august: 7,
              september: 8,
              october: 9,
              november: 10,
              december: 11,
            }[n.toLowerCase()];
          if (f === void 0) return { dtMidMonth: null, dtTestMonth: null };
          let b = f,
            E = g;
          return (
            f == 11 ? ((b = 0), (E += 1)) : (b += 1),
            { dtMidMonth: new Date(g, f, 15), dtTestMonth: new Date(E, b, 15) }
          );
        }
        function Et(m, n) {
          const d = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
          ];
          if (n < 0 || n > 11)
            throw new Error("Invalid month index. Must be between 0 and 11.");
          return `${d[n]}_${m}`;
        }
        var Me = r(21042),
          Ht = r(56330),
          ra = r(25679),
          ae = r(98609),
          Ie = r(41635),
          Ve = r(87853),
          yt = r.n(Ve);
        function Nt(m) {
          let n = yt().PlatinumSection;
          switch (m) {
            case q.s4.NH:
              n = yt().GoldSection;
              break;
            case q.s4.U1:
              n = yt().SilverSection;
              break;
            case q.s4.DB:
              n = yt().BronzeSection;
              break;
          }
          return n;
        }
        function oa(m, n, d, g, h, f, b, E) {
          n?.length > 25 &&
            m.jsondata.sale_sections.push({
              ...(0, Me.Sm)("items", "#Sale_default_label_148"),
              capsules: n.map((w) => ({
                id: w,
                type: g.has(w) ? "dlc" : "game",
              })),
              capsules_per_row_array: [1],
              show_as_carousel: !1,
              carousel_rows: 1,
              single_item_style: "library",
              use_random_order: !0,
              cap_section_content: !1,
              cap_section_row_count: n.length,
              disable_background: !0,
              enable_faceted_browsing: !0,
              min_capsule_matches_for_facet_values: 5,
              max_facet_values_for_facet: 5,
              facet_sort_order: 1,
              cap_item_count: 0,
              facets: d,
              show_on_tabs: f ? [f] : void 0,
              prefer_assets_without_overrides: h,
              show_deck_compability_details: !!b,
              show_as_demos: !!E,
              prefer_demo_store_page: !!E,
            });
        }
        function ia(m, n, d, g, h, f, b, E) {
          if (ae.iA.logged_in) {
            const w = ee.Fm.Get(),
              H = n.filter((U) => w.BIsGameWishlisted(U));
            H?.length > 0 &&
              m.jsondata.sale_sections.push({
                ...(0, Me.Sm)("items", "#Sale_OnWishlist"),
                capsules: H.map((U) => ({
                  id: U,
                  type: g.has(U) ? "dlc" : "game",
                })),
                capsules_per_row_array: H.length < 3 ? [2] : [5],
                carousel_rows: 1,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array: H.length < 3 ? ["grid"] : ["tall"],
                random_from_entire_set: !0,
                show_on_tabs: f ? [f] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!b,
                show_as_demos: !!E,
                prefer_demo_store_page: !!E,
              });
            const P = n.filter(
              (U) => w.BIsGameRecommended(U) && !w.BIsGameIgnored(U),
            );
            if (P?.length > 0) {
              const U = P.length;
              m.jsondata.sale_sections.push({
                ...(0, Me.Sm)("items", "#Sale_default_label_RecommendedForYou"),
                capsules: P.map((K) => ({
                  id: K,
                  type: g.has(K) ? "dlc" : "game",
                })),
                capsules_per_row_array: U == 2 ? [2] : [3, 2],
                carousel_rows: 2,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array:
                  U == 2 ? ["grid"] : ["tall", "grid"],
                show_on_tabs: f ? [f] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!b,
                show_as_demos: !!E,
                prefer_demo_store_page: !!E,
              });
            }
            if (!E) {
              const U = d.filter((K) => {
                if (!w.BIsGameOwned(K)) {
                  const ge = ke.A.Get().GetApp(K);
                  return w.BIsGameOwned(ge.GetParentAppID());
                }
                return !1;
              });
              U.length > 0 &&
                m.jsondata.sale_sections.push({
                  ...(0, Me.Sm)("dlc_for_you", "#Sale_default_label_246"),
                  capsules: U.map((K) => ({ id: K, type: "dlc" })),
                  dlc_for_you_data: {
                    group_by_parent_app: !0,
                    hide_dlc_stats: !0,
                    parent_app_page_size: 5,
                    hide_dlc_grouping: !0,
                  },
                  capsules_per_row_array: [3],
                  show_as_carousel: !0,
                  disable_background: !0,
                  show_on_tabs: f ? [f] : void 0,
                  prefer_assets_without_overrides: h,
                });
            }
          }
        }
        function ya(m, n) {
          const d = ee.Fm.Get(),
            g = [],
            h = [],
            f = [],
            b = [],
            E = [];
          for (const w of m)
            d.BIsGameIgnored(w) ||
              (d.BIsGameRecommended(w)
                ? g.push(w)
                : d.BIsGameWishlisted(w)
                  ? h.push(w)
                  : n[1]?.includes(w)
                    ? f.push(w)
                    : n[2]?.includes(w)
                      ? b.push(w)
                      : E.push(w));
          return [
            ...(0, Ie.fW)(g),
            ...(0, Ie.fW)(h),
            ...(0, Ie.fW)(f),
            ...(0, Ie.fW)(b),
            ...(0, Ie.fW)(E),
          ];
        }
        function la(m, n, d, g, h, f, b, E) {
          m.jsondata.sale_sections.push({
            ...(0, Me.Sm)("trailercarousel", ""),
            capsules: ya(n, d).map((w) => ({
              id: w,
              type: g.has(w) ? "dlc" : "game",
            })),
            use_random_order: !1,
            disable_background: !0,
            trailer_carousel_auto_advance_msec: 1e4,
            show_on_tabs: f ? [f] : void 0,
            prefer_assets_without_overrides: h,
            show_deck_compability_details: !!b,
            show_as_demos: !!E,
            prefer_demo_store_page: !!E,
          });
        }
        var mt = r(50974);
        function Aa(m, n, d, g, h) {
          const f = (0, Me.U)(mt.wv, le.DRF, m, (0, We.sB)()),
            b = !1,
            E = [...h, ...d],
            w = new Set(h);
          if (
            ((f.jsondata.sale_sections = []),
            d.length > 9 && la(f, d, g, w, b),
            d?.length > 25)
          )
            for (let H in g) {
              const P = g[H];
              f.jsondata.sale_sections.push({
                ...(0, Me.Sm)("items", "#SteamCharts_Monthly_Rank_" + H),
                capsules: P.map((U) => ({
                  id: U,
                  type: w.has(U) ? "dlc" : "game",
                })),
                capsules_per_row_array: [4],
                capsule_style_per_row_array: H == "1" ? ["tall"] : ["grid"],
                show_as_carousel: !1,
                use_random_order: !0,
                border_width: 1,
                default_subtitle:
                  "#SteamCharts_Monthly_Rank_" + H + "_subtitle",
                sale_section_classname: Nt(Number.parseInt(H)),
                prefer_assets_without_overrides: b,
              });
            }
          else {
            const H = Object.values(d).flat();
            f.jsondata.sale_sections.push({
              ...(0, Me.Sm)("items", "#SteamCharts_Monthly_Rank_All"),
              capsules: H.map((P) => ({
                id: P,
                type: w.has(P) ? "dlc" : "game",
              })),
              capsules_per_row_array:
                d?.length > 9 ? (d?.length > 15 ? [3] : [2]) : [1],
              single_item_style: d?.length < 9 ? "library" : "bordered",
              show_as_carousel: !1,
              use_random_order: !0,
              sale_section_classname: yt().AllTiers,
              prefer_assets_without_overrides: b,
            });
          }
          return (
            ia(f, E, h, w, b),
            oa(f, d, n, w, b),
            f.jsondata.sale_sections.push({
              ...(0, Me.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, Me.r3)(),
            }),
            f
          );
        }
        function kt(m, n, d, g, h) {
          const { data: f } = (0, Z.I)({
            queryKey: ["useMonthEventModel", m],
            queryFn: () => {
              try {
                return Aa(m, n, d, g, h);
              } catch (b) {
                return (
                  console.error(`Montly new release: ${m} failed: `, b), null
                );
              }
            },
          });
          return f;
        }
        function wa(m) {
          const {
              rgFilteredDLCsAppIDs: n,
              rgFilteredCombinedAppsAndDLC: d,
              promotionName: g,
              rgFilteredAppIDByTier: h,
              facets: f,
            } = m,
            b = kt(g, f, d, h, n),
            E = (0, le.sfN)(ae.TS.LANGUAGE);
          return b
            ? (0, e.jsx)(ra._, {
                eventModel: b,
                language: E,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : b === null
              ? (0, e.jsx)("div", {
                  className: Ht.ErrorStylesWithIcon,
                  children: (0, de.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(vt.t, {
                  string: (0, de.we)("#Loading"),
                  position: "center",
                });
        }
        function ca(m, n, d, g) {
          (0, se.useEffect)(() => {
            if (m == null && g != Oe.Sq && d) {
              const h = Da(d);
              h?.length > 0
                ? ke.A.Get()
                    .HintLoadStoreApps(h, ut.Xh)
                    .then(() => n(h))
                : n([]);
            }
          }, [g, d, m, n]);
        }
        function Da(m) {
          const n = ee.Fm.Get(),
            d = m
              .filter((g) => {
                if (!n.BIsGameOwned(g)) {
                  const h = ke.A.Get().GetApp(g);
                  return (
                    h && h.BIsVisible() && n.BIsGameOwned(h.GetParentAppID())
                  );
                }
                return !1;
              })
              .map((g) => ke.A.Get().GetApp(g).GetParentAppID())
              .filter(Boolean);
          return Array.from(new Set(d));
        }
        var Se = r(19298),
          It = r(92757);
        const Sa = ["topnewreleases", "bestofyear"];
        function Xe(m) {
          return m.split(/[?#]/)[0];
        }
        function Gt(m) {
          const n = Xe(m);
          return n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n;
        }
        function Ot(m) {
          if (!m) return !1;
          const n = z.B.SteamCharts(),
            d = Xe(m);
          if (Gt(d) == Gt(n)) return !0;
          if (!d.startsWith(n)) return !1;
          const g = d.slice(n.length).split("/")[0];
          return !Sa.includes(g);
        }
        function Qe() {
          const m = (0, It.W6)();
          return se.useCallback(
            (n, d) => {
              if (Ot(n)) {
                d?.bReplace
                  ? window.location.replace(n)
                  : window.location.assign(n);
                return;
              }
              d?.bReplace ? m.replace(n, d?.state) : m.push(n, d?.state);
            },
            [m],
          );
        }
        var Wt = r(24660),
          Ue = r(4370);
        function da(m, n) {
          const d = Gt(window.location.pathname),
            g = Gt(m);
          return n ? d == g : d == g || d.startsWith(g + "/");
        }
        function bt(m) {
          const {
              to: n,
              exact: d,
              activeClassName: g,
              className: h,
              children: f,
              ...b
            } = m,
            E = typeof n == "string" ? n : void 0;
          return Ot(E)
            ? (0, e.jsx)(Wt.Ii, {
                href: E,
                className: (0, ye.A)(h, da(E, !!d) ? g : void 0),
                ...b,
                children: f,
              })
            : (0, e.jsx)(Ue.A, {
                to: n,
                exact: d,
                activeClassName: g,
                className: h,
                ...b,
                children: f,
              });
        }
        function At(m) {
          const { to: n, children: d, ...g } = m,
            h = typeof n == "string" ? n : void 0;
          return Ot(h)
            ? (0, e.jsx)(Wt.Ii, { href: h, ...g, children: d })
            : (0, e.jsx)(Ue.X, { to: n, ...g, children: d });
        }
        function Rt(m) {
          const { salePageName: n, TopMonthlyReleasesStore: d } = m,
            g = (0, We.f1)(),
            { dtMidMonth: h, dtTestMonth: f } = Ea(n);
          return !h ||
            Math.floor(f.getTime() / 1e3) > g ||
            h.getFullYear() < Ut ||
            (h.getFullYear() == Ut && h.getMonth() < ua)
            ? (0, e.jsx)("div", {
                children: (0, de.we)(
                  "#DateTimePicker_Fallback_Invalid_DateTime",
                ),
              })
            : (0, e.jsx)(Ma, {
                TopMonthlyReleasesStore: d,
                nMonth: h.getMonth(),
                nYear: h.getFullYear(),
                promotionName: n,
              });
        }
        const rt = { ...ut.Xh, apply_user_filters: !0 };
        function Ba(m, n, d, g) {
          const h = c(m, n, d),
            f = (0, se.useMemo)(
              () =>
                h
                  ? Array.from(
                      new Set([
                        ...(h.top_dlc_releases?.map((P) => P.appid) || []),
                        ...(h.top_combined_app_and_dlc_releases?.map(
                          (P) => P.appid,
                        ) || []),
                      ]),
                    )
                  : (g && g(null), []),
              [h, g],
            ),
            b = (0, Oe.zX)(f, rt),
            E = (0, se.useMemo)(
              () =>
                !h || b == Oe.Sq
                  ? []
                  : h.top_dlc_releases
                      ?.filter((P) => !ke.A.Get().BIsAppMissing(P.appid))
                      .map((P) => P.appid),
              [h, b],
            ),
            { rgFilteredCombinedAppsAndDLC: w, rgFilteredAppIDByTier: H } = (0,
            se.useMemo)(() => {
              if (!h || b == Oe.Sq)
                return {
                  rgFilteredCombinedAppsAndDLC: [],
                  rgFilteredAppIDByTier: [],
                };
              const P = h?.top_combined_app_and_dlc_releases || [],
                U = [];
              return {
                rgFilteredCombinedAppsAndDLC: P.filter(
                  (ge) => !ke.A.Get().BIsAppMissing(ge.appid),
                ).map((ge) => {
                  const ie = ge.app_release_rank;
                  return U[ie] || (U[ie] = []), U[ie].push(ge.appid), ge.appid;
                }),
                rgFilteredAppIDByTier: U,
              };
            }, [b, h]);
          return {
            rgAppIDs: f,
            rgMonthlyReleases: h,
            rgFilteredAppIDByTier: H,
            rgFilteredCombinedAppsAndDLC: w,
            rgFilteredDLCsAppIDs: E,
            loadState: b,
          };
        }
        function Ma(m) {
          const {
              TopMonthlyReleasesStore: n,
              nYear: d,
              nMonth: g,
              promotionName: h,
            } = m,
            [f, b] = (0, se.useState)(null),
            [E, w] = (0, se.useState)(null),
            {
              rgAppIDs: H,
              rgMonthlyReleases: P,
              rgFilteredAppIDByTier: U,
              rgFilteredCombinedAppsAndDLC: K,
              rgFilteredDLCsAppIDs: ge,
              loadState: ie,
            } = Ba(n, d, g);
          return (
            (0, se.useEffect)(() => {
              f ||
                (0, Ct.$R)({ bForceFeatureTagForFullController: !1 }).then(b);
            }, [f]),
            ca(E, w, ge, ie),
            !P || ie == Oe.Sq || !f || E == null || !H
              ? (0, e.jsxs)(Se.Z, {
                  className: Ge().ChartPage,
                  children: [
                    (0, e.jsx)(ot, { nMonth: g, nYear: d }),
                    (0, e.jsx)(vt.t, {
                      string: (0, de.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : H.length == 0
                ? (0, e.jsxs)(Se.Z, {
                    className: Ge().ChartPage,
                    children: [
                      (0, e.jsx)(ot, { nMonth: g, nYear: d }),
                      (0, e.jsx)("div", {
                        className: Ge().NoticeBox,
                        children: (0, de.we)(
                          P.bSQLError
                            ? "#Error_ErrorCommunicatingWithNetwork"
                            : "#SteamCharts_NewMonth_NoRelease",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(Se.Z, {
                    className: Ge().ChartPage,
                    children: [
                      (0, e.jsx)(sa, {
                        rgAppIDs: K,
                        nMonth: g,
                        bBlurCapsules: !0,
                        children: (0, e.jsx)(ot, { nMonth: g, nYear: d }),
                      }),
                      (0, e.jsx)(wa, {
                        promotionName: h,
                        rgFilteredCombinedAppsAndDLC: K,
                        rgFilteredAppIDByTier: U,
                        rgFilteredDLCsAppIDs: ge,
                        facets: f,
                      }),
                    ],
                  })
          );
        }
        function Yt(m, n) {
          return (0, de.we)(
            "#SteamCharts_Monthly_Title_wMonthAndYear",
            (0, de.we)("#Sale_Reservation_MonthNoun_" + (m + 1)),
            n,
          );
        }
        const Ut = 2003,
          ua = 8,
          Fe = 1063584e3;
        function ot(m) {
          const { nMonth: n, nYear: d } = m,
            g = Qe(),
            h = (0, aa.yk)() || (0, zt.tx)(window),
            f = (0, We.f1)(),
            b = n > 0 ? d : d - 1,
            E = n > 0 ? n - 1 : 11,
            w = Et(b, E),
            H = d > Ut || n > ua,
            P = n < 11 ? d : d + 1,
            U = n < 11 ? n + 1 : 0,
            K = Et(P, U),
            ge = new Date(U == 11 ? d + 1 : d, U == 11 ? 0 : U + 1, 15),
            ie = Math.floor(ge.getTime() / 1e3) < f,
            De = (0, se.useCallback)(
              (Ke) => {
                h.active_modal ||
                  (Ke && ie
                    ? g(ue.TopNewReleases(K))
                    : !Ke && H && g(ue.TopNewReleases(w)));
              },
              [h.active_modal, ie, H, g, K, w],
            );
          return (
            (0, st.E)("ArrowLeft", () => De(!1), !0, !0),
            (0, st.E)("Left", () => De(!1), !0, !0),
            (0, st.E)("ArrowRight", () => De(!0), !0, !0),
            (0, st.E)("Right", () => De(!0), !0, !0),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, ye.A)(D().HeaderCtn, D().WithSubtitle),
                  children: (0, e.jsx)("h1", { children: Yt(n, d) }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, ye.A)(D().PageSubtitle),
                  children: [
                    (0, de.we)("#SteamCharts_Monthly_SubTitle", _e(d)),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("span", {
                      children: (0, de.we)(
                        "#SteamCharts_Monthly_PublishSchedule",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)(Se.Z, {
                  className: (0, ye.A)(D().ChartRangeCtn),
                  children: [
                    (0, e.jsx)(Ce.Gq, {
                      toolTipContent: Yt(E, b),
                      children: (0, e.jsx)("div", {
                        className: (0, ye.A)({
                          [D().ChartNavCtn]: !0,
                          [D().Disabled]: !H,
                        }),
                        children: H
                          ? (0, e.jsx)(At, {
                              to: H ? ue.TopNewReleases(w) : void 0,
                              className: D().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: D().ChartNavPrev,
                                children: "\xA0",
                              }),
                            })
                          : (0, e.jsx)("div", {
                              className: D().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: D().ChartNavPrev,
                                children: "\xA0",
                              }),
                            }),
                      }),
                    }),
                    (0, e.jsx)(Ce.Gq, {
                      toolTipContent: Yt(U, P),
                      children: (0, e.jsx)("div", {
                        className: (0, ye.A)({
                          [D().ChartNavCtn]: !0,
                          [D().Disabled]: !ie,
                        }),
                        children: ie
                          ? (0, e.jsx)(At, {
                              to: ue.TopNewReleases(K),
                              className: D().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: D().ChartNavNext,
                                children: "\xA0",
                              }),
                            })
                          : (0, e.jsx)("div", {
                              className: D().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: D().ChartNavNext,
                                children: "\xA0",
                              }),
                            }),
                      }),
                    }),
                    (0, e.jsx)(nt, {
                      toolTipContent: (0, de.we)(
                        "#SteamCharts_Monthly_Calendar",
                      ),
                      minDate: Fe,
                      maxDate: xt(f),
                      value: Math.floor(
                        new Date(d, n, 15, 12, 0, 0).getTime() / 1e3,
                      ),
                      fnOnUpdate: (Ke) => {
                        const xa = new Date(Ke * 1e3),
                          Va = Et(xa.getFullYear(), xa.getMonth());
                        g(ue.TopNewReleases(Va));
                      },
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Ft(m) {
          if (!m) return "";
          const n = new Date(m * 1e3);
          return `${n.getUTCFullYear()}-${n.getUTCMonth() + 1}-${n.getUTCDate()}`;
        }
        function ga(m) {
          return m || "global";
        }
        var et = r(25792),
          Vt = r(27638),
          La = r(77187),
          Ta = r(65946);
        const wt = 2,
          Pa = 60,
          ma = 2022;
        function Na(m, n) {
          const d = new Date(m * 1e3),
            g = "America/Los_Angeles",
            h = Number(
              new Intl.DateTimeFormat("en-US", {
                timeZone: g,
                year: "numeric",
              }).format(d),
            ),
            b =
              new Date(
                new Intl.DateTimeFormat("en-US", {
                  timeZone: g,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                  .formatToParts(new Date(Date.UTC(h, 11, 31)))
                  .reduce((E, w) => ((E[w.type] = w.value), E), {}).year +
                  "-12-31T10:00:00",
              ).getTime() -
              n * 24 * 60 * 60 * 1e3;
          return d.getTime() >= b;
        }
        function Dt(m, n, d) {
          const g = n * 1e3,
            f = new Date(g).getUTCFullYear();
          return (
            m >= ma &&
            m < f + 1 &&
            (m != f || (d && ae.iA.is_support && Na(n, Pa)) || Na(n, wt))
          );
        }
        function Ja(m, n) {
          const d = new Date().getUTCFullYear(),
            g = [];
          for (let h = d, f = 0; h >= ma && f < n; h--, f++)
            Dt(h, m, !1) ? g.push(h) : f--;
          return g;
        }
        var Kt = r(22275);
        function _t(m) {
          const {
            TopSellersStore: n,
            TopMonthlyReleasesStore: d,
            DynamicUserStore: g,
            children: h,
          } = m;
          (0, Vt.Y)(D().SteamChartsPage);
          const f = ka(g);
          let b = se.useMemo(() => ({ content_descriptors_excluded: f }), [f]);
          const E = se.useRef(null);
          return (
            se.useEffect(() => {
              E.current && E.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsxs)(Se.Z, {
              className: D().SteamChartsRootPanel,
              navRef: E,
              children: [
                (0, e.jsx)("div", {
                  className: D().SteamChartsRootPosition,
                  children: (0, e.jsx)("div", {
                    className: D().AlignWithMenu,
                    children: (0, e.jsxs)(Se.Z, {
                      className: D().SteamChartsMenu,
                      children: [
                        (0, e.jsx)(Se.Z, {
                          className: D().MenuGroup,
                          children: (0, e.jsx)("div", {
                            className: D().MenuLinks,
                            children: (0, e.jsxs)(bt, {
                              to: ue.Overview(),
                              exact: !0,
                              activeClassName: D().ActiveLink,
                              children: [
                                (0, e.jsx)("span", {
                                  className: (0, ye.A)(D().MenuItemIcon),
                                  children: (0, e.jsx)(Ye.ww0, {}),
                                }),
                                (0, de.we)("#SteamCharts_Menu_Overview"),
                              ],
                            }),
                          }),
                        }),
                        (0, e.jsx)(et.tH, { children: (0, e.jsx)(St, {}) }),
                        (0, e.jsx)(et.tH, {
                          children: (0, e.jsx)(Ga, { TopSellersStore: n }),
                        }),
                        (0, e.jsx)(et.tH, {
                          children: (0, e.jsx)(Oa, {
                            TopMonthlyReleasesStore: d,
                          }),
                        }),
                        (0, e.jsx)(et.tH, { children: (0, e.jsx)(Pe, {}) }),
                      ],
                    }),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, ye.A)(
                    D().SteamChartsShell,
                    "SteamChartsShell",
                  ),
                  children: (0, e.jsx)("div", {
                    className: D().SteamChartsContent,
                    children: (0, e.jsx)(La.E2, {
                      defaultOptions: b,
                      children: (0, e.jsx)(et.tH, { children: h }),
                    }),
                  }),
                }),
              ],
            })
          );
        }
        function ka(m) {
          return (0, Ta.q3)(() => m.ExcludedContentDescriptor);
        }
        function St() {
          return (0, e.jsxs)(Se.Z, {
            className: D().MenuGroup,
            children: [
              (0, e.jsx)("div", {
                className: D().MenuHeader,
                children: (0, de.we)("#SteamCharts_Menu_LiveCharts"),
              }),
              (0, e.jsxs)(Se.Z, {
                className: D().MenuLinks,
                children: [
                  (0, e.jsxs)(bt, {
                    className: D().MenuItemIcon,
                    to: ue.TopSelling(Y.TS.COUNTRY),
                    activeClassName: D().ActiveLink,
                    children: [
                      (0, e.jsx)(Ye.t1X, {}),
                      (0, de.we)("#SteamCharts_Menu_TopSelling"),
                    ],
                  }),
                  (0, e.jsxs)(bt, {
                    className: D().MenuItemIcon,
                    to: ue.MostPlayed(),
                    activeClassName: D().ActiveLink,
                    children: [
                      (0, e.jsx)(Ye.N3h, {}),
                      (0, de.we)("#SteamCharts_Menu_MostPlayed"),
                    ],
                  }),
                  (0, e.jsxs)(bt, {
                    className: D().MenuItemIcon,
                    to: ue.MostPlayedOnSteamDeck(),
                    activeClassName: D().ActiveLink,
                    children: [
                      (0, e.jsx)(Ye.lRD, {}),
                      (0, de.we)("#SteamCharts_Menu_MostPlayedOnDeck"),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Ga(m) {
          const { TopSellersStore: n } = m,
            { rtCurrentWeek: d, bCountryListInitialized: g } = M(
              n,
              Y.TS.COUNTRY,
            );
          if (!d || !g) return null;
          const h = ga(
            n.BIsValidTopSellersCountry(Y.TS.COUNTRY) ? Y.TS.COUNTRY : "",
          );
          let f = [];
          for (let b = 0; b < 3; b++) {
            const E = d - b * 60 * 60 * 24 * 7;
            f.push(
              (0, e.jsxs)(
                bt,
                {
                  to: ue.TopSellers(h, Ft(E)),
                  activeClassName: D().ActiveLink,
                  fnCanTakeFocus: Kt.Nw,
                  children: [
                    (0, e.jsx)("span", {
                      className: (0, ye.A)(D().MenuItemIcon),
                      children: (0, e.jsx)(Ye.VvS, { color: "#C3D3D8" }),
                    }),
                    (0, de.$z)(E, { timeZone: "UTC" }),
                  ],
                },
                E,
              ),
            );
          }
          return (0, e.jsxs)(Se.Z, {
            className: (0, ye.A)(D().MenuGroup, D().Weekly),
            children: [
              (0, e.jsx)("div", {
                className: D().MenuHeader,
                children: (0, de.we)("#SteamCharts_Menu_WeeklyCharts"),
              }),
              (0, e.jsx)(Se.Z, { className: D().MenuLinks, children: f }),
            ],
          });
        }
        function Oa(m) {
          const n = (0, We.f1)(),
            d = xt(n),
            g = [d, d - 720 * 60 * 60, d - 1440 * 60 * 60];
          return (0, e.jsxs)(Se.Z, {
            className: (0, ye.A)(D().MenuGroup, D().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: D().MenuHeader,
                children: (0, de.we)("#SteamCharts_Menu_MonthlyCharts"),
              }),
              (0, e.jsx)(Se.Z, {
                className: D().MenuLinks,
                children: g.map((h) => {
                  const f = new Date(h * 1e3),
                    b = Et(f.getFullYear(), f.getMonth()),
                    E = ue.TopNewReleases(b),
                    w = window.location.pathname === E;
                  return (0, e.jsxs)(
                    bt,
                    {
                      className: w ? D().ActiveLink : "",
                      to: E,
                      fnCanTakeFocus: Kt.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, ye.A)(D().MenuItemIcon),
                          children: (0, e.jsx)(Ye.VvS, { color: "#C3D3D8" }),
                        }),
                        (0, Pt.CC)(h),
                      ],
                    },
                    "month_" + h,
                  );
                }),
              }),
            ],
          });
        }
        function Pe(m) {
          const n = (0, We.f1)(),
            d = (0, se.useMemo)(() => Ja(n, 3), [n]);
          return (0, e.jsxs)(Se.Z, {
            className: (0, ye.A)(D().MenuGroup, D().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: D().MenuHeader,
                children: (0, de.we)("#SteamCharts_Menu_YearlyCharts"),
              }),
              (0, e.jsx)(Se.Z, {
                className: D().MenuLinks,
                children: d.map((g) => {
                  const h = ue.BestOfYear("" + g),
                    f = window.location.pathname === h;
                  return (0, e.jsxs)(
                    At,
                    {
                      className: (0, ye.A)(f ? D().ActiveLink : ""),
                      to: h,
                      fnCanTakeFocus: Kt.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, ye.A)(D().MenuItemIcon),
                          children: (0, e.jsx)(Ye.VvS, { color: "#C3D3D8" }),
                        }),
                        g,
                      ],
                    },
                    g,
                  );
                }),
              }),
            ],
          });
        }
        var ha = r(68312),
          Zt = r(51079),
          Ra = r(179);
        function $a(m, n, d) {
          const g = (0, Me.U)(mt.yT, le.DRF, "" + m, (0, We.sB)()),
            h = !0,
            f = { ...(0, Me.Sm)("tabs", ""), tabs: [] };
          return (
            d.forEach((b, E) => {
              f.tabs.push({
                unique_id: E + 1,
                default_label: b.strTabTitleToken,
                localized_label: [],
                capsules: [],
              });
            }),
            (g.jsondata.sale_sections = [f]),
            d.forEach((b, E) => {
              const {
                  rgFilteredCombinedAppsAndDLC: w,
                  rgFilteredAppIDByTier: H,
                  rgFilteredDLCsAppIDs: P,
                } = b,
                U = new Set(P),
                K = [...P, ...w];
              g.jsondata.sale_sections.push({
                ...(0, Me.Sm)("text_section", ""),
                text_section_contents: [
                  (0, de.we)(b.strTabSubTitleToken, m, m + 1),
                ],
                show_on_tabs: [E + 1],
                show_deck_compability_details: !!b.bShowDeckCompat,
                prefer_assets_without_overrides: h,
              });
              for (let ge in H) {
                const ie = H[ge];
                g.jsondata.sale_sections.push({
                  ...(0, Me.Sm)("items", "#SteamCharts_Yearly_Rank_" + ge),
                  capsules: ie.map((De) => ({
                    id: De,
                    type: U.has(De) ? "dlc" : "game",
                  })),
                  capsules_per_row_array:
                    ge == "3" ? [4] : ge == "0" ? [4] : [3],
                  capsule_style_per_row_array: ge == "0" ? ["tall"] : ["grid"],
                  show_as_carousel: !1,
                  use_random_order: !0,
                  border_width: 1,
                  default_subtitle:
                    "#SteamCharts_Yearly_Rank_" + ge + "_subtitle",
                  show_on_tabs: [f.tabs[E].unique_id],
                  sale_section_classname: Nt(Number.parseInt(ge)),
                  prefer_assets_without_overrides: h,
                  show_deck_compability_details: !!b.bShowDeckCompat,
                  show_as_demos: !!b.bShowDemoInfo,
                  prefer_demo_store_page: !!b.bShowDemoInfo,
                });
              }
              ia(
                g,
                K,
                P,
                U,
                h,
                f.tabs[E].unique_id,
                !!b.bShowDeckCompat,
                !!b.bShowDemoInfo,
              ),
                la(
                  g,
                  w,
                  H,
                  U,
                  h,
                  f.tabs[E].unique_id,
                  !!b.bShowDeckCompat,
                  !!b.bShowDemoInfo,
                ),
                oa(
                  g,
                  w,
                  n,
                  U,
                  h,
                  f.tabs[E].unique_id,
                  !!b.bShowDeckCompat,
                  !!b.bShowDemoInfo,
                );
            }),
            g.jsondata.sale_sections.push({
              ...(0, Me.Sm)("text_section", ""),
              text_section_contents: [
                (0, de.we)("#SteamCharts_Yearly_FAQ") +
                  `
[url=${ae.TS.HELP_BASE_URL}faqs/view/6C17-2BC1-2A01-9B76]${(0, de.we)("#SteamCharts_Yearly_FAQ_link")}[/url]`,
              ],
            }),
            g.jsondata.sale_sections.push({
              ...(0, Me.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, Me.r3)(),
            }),
            g
          );
        }
        function pa(m, n, d) {
          const { data: g } = (0, Z.I)({
            queryKey: ["useYearEventModel", m],
            queryFn: () => {
              try {
                return $a(m, n, d);
              } catch (h) {
                return (
                  console.error(`Yearly new release: ${m} failed: `, h), null
                );
              }
            },
          });
          return g;
        }
        function Ua(m) {
          const { rgTabsData: n, nYear: d, facets: g } = m,
            h = pa(d, g, n),
            f = (0, le.sfN)(ae.TS.LANGUAGE);
          return h
            ? (0, e.jsx)(ra._, {
                eventModel: h,
                language: f,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : h === null
              ? (0, e.jsx)("div", {
                  className: Ht.ErrorStylesWithIcon,
                  children: (0, de.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(vt.t, {
                  string: (0, de.we)("#Loading"),
                  position: "center",
                });
        }
        function Fa(m) {
          const { salePageName: n, TopYearlyReleasesStore: d } = m,
            g = (0, We.f1)(),
            h = Number.parseInt(n),
            f = Qe();
          return Dt(h, g, !0)
            ? (0, e.jsx)(qa, { nYear: h, TopYearlyReleasesStore: d })
            : (f(ue.Overview(), { bReplace: !0 }),
              (0, e.jsx)("div", {
                children: (0, de.we)("#SteamCharts_Yearly_Unavailable"),
              }));
        }
        const za = {
          ...ut.Xh,
          apply_user_filters: !0,
          include_assets_without_overrides: !0,
        };
        function jt(m, n, d, g) {
          const h = g?.filter((w) => w.type == m),
            f = [],
            b = [],
            E = h
              ?.filter((w) => !ke.A.Get().BIsAppMissing(w.appid))
              .map((w) => {
                let H = w.app_release_rank;
                return (
                  H == q.s4.xE && (H = 0),
                  f[H] || (f[H] = []),
                  f[H].push(w.appid),
                  ke.A.Get().GetApp(w.appid)?.GetAppType() == x.uE._i &&
                    b.push(w.appid),
                  w.appid
                );
              });
          return {
            strTabTitleToken: n,
            strTabSubTitleToken: d,
            rgFilteredCombinedAppsAndDLC: E,
            rgFilteredAppIDByTier: f,
            rgFilteredDLCsAppIDs: b,
          };
        }
        function Bt(m, n) {
          const d = m + 1,
            g = new Date(Date.UTC(d, 0, n, 1, 0, 0)),
            h = new Intl.DateTimeFormat("en-US", {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: !1,
            }).formatToParts(g),
            f = (E) => Number(h.find((w) => w.type === E).value),
            b = Date.UTC(
              f("year"),
              f("month") - 1,
              f("day"),
              f("hour"),
              f("minute"),
              f("second"),
            );
          return Math.floor(b / 1e3);
        }
        function fa(m, n, d) {
          const g = (0, We.f1)(),
            h = g < Bt(n, 1),
            f = g < Bt(n, 15),
            b = ct(m, n),
            E = (0, se.useMemo)(
              () =>
                b
                  ? Array.from(
                      new Set([
                        ...(b.top_dlc_releases?.map((P) => P.appid) || []),
                        ...(b.top_combined_app_and_dlc_releases?.map(
                          (P) => P.appid,
                        ) || []),
                        ...(b.top_app_list?.map((P) => P.appid) || []),
                      ]),
                    )
                  : (d && d(null), []),
              [b, d],
            ),
            w = (0, Oe.zX)(E, za),
            H = (0, se.useMemo)(() => {
              if (!b || w == Oe.Sq) return [];
              const P = b?.top_combined_app_and_dlc_releases || [],
                U = [],
                K = P.filter((De) => !ke.A.Get().BIsAppMissing(De.appid)).map(
                  (De) => {
                    let Ke = De.app_release_rank;
                    return (
                      Ke == q.s4.xE && (Ke = 0),
                      U[Ke] || (U[Ke] = []),
                      U[Ke].push(De.appid),
                      De.appid
                    );
                  },
                );
              let ge = [
                  {
                    strTabTitleToken: "#SteamCharts_Yearly_Tab_NewReleases",
                    strTabSubTitleToken: f
                      ? "#SteamCharts_Yearly_Tab_NewReleases_desc_pre"
                      : "#SteamCharts_Yearly_Tab_NewReleases_desc",
                    rgFilteredDLCsAppIDs:
                      b.top_dlc_releases
                        ?.filter((De) => !ke.A.Get().BIsAppMissing(De.appid))
                        .map((De) => De.appid) || [],
                    rgFilteredCombinedAppsAndDLC: K,
                    rgFilteredAppIDByTier: U,
                  },
                ],
                ie = jt(
                  q.Cm.Hm,
                  "#SteamCharts_Yearly_Tab_TopSellers",
                  h
                    ? "#SteamCharts_Yearly_Tab_TopSellers_desc_pre"
                    : "#SteamCharts_Yearly_Tab_TopSellers_desc",
                  b.top_app_list,
                );
              return (
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 && ge.push(ie),
                (ie = jt(
                  q.Cm.UM,
                  "#SteamCharts_Yearly_Tab_MostPlayed",
                  "#SteamCharts_Yearly_Tab_MostPlayed_desc",
                  b.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 && ge.push(ie),
                (ie = jt(
                  q.Cm.IJ,
                  "#SteamCharts_Yearly_Tab_SteamDeck",
                  "#SteamCharts_Yearly_Tab_SteamDeck_desc",
                  b.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((ie.bShowDeckCompat = !0), ge.push(ie)),
                (ie = jt(
                  q.Cm.lu,
                  "#SteamCharts_Yearly_Tab_Controller",
                  "#SteamCharts_Yearly_Tab_Controller_desc",
                  b.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 && ge.push(ie),
                (ie = jt(
                  q.Cm.$L,
                  "#SteamCharts_Yearly_Tab_VR",
                  "#SteamCharts_Yearly_Tab_VR_desc",
                  b.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 && ge.push(ie),
                (ie = jt(
                  q.Cm.e,
                  "#SteamCharts_Yearly_Tab_Demo",
                  "#SteamCharts_Yearly_Tab_Demo_desc",
                  b.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((ie.bShowDemoInfo = !0), ge.push(ie)),
                ge
              );
            }, [b, w, h, f]);
          return {
            rgAppIDs: E,
            rgYearlyReleases: b,
            rgTabsData: H,
            loadState: w,
          };
        }
        function qa(m) {
          const { nYear: n, TopYearlyReleasesStore: d } = m,
            [g, h] = (0, se.useState)(null),
            [f, b] = (0, se.useState)(null),
            {
              rgAppIDs: E,
              rgYearlyReleases: w,
              rgTabsData: H,
              loadState: P,
            } = fa(d, n);
          return (
            (0, se.useEffect)(() => {
              f ||
                (0, Ct.$R)({ bForceFeatureTagForFullController: !1 }).then(b);
            }, [f]),
            ca(g, h, H?.[0]?.rgFilteredDLCsAppIDs, P),
            !w || P == Oe.Sq || !f || g == null || !E
              ? (0, e.jsxs)(Se.Z, {
                  className: Ge().ChartPage,
                  children: [
                    (0, e.jsx)(Qt, { nYear: n }),
                    (0, e.jsx)(vt.t, {
                      string: (0, de.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : E.length == 0
                ? (0, e.jsxs)(Se.Z, {
                    className: Ge().ChartPage,
                    children: [
                      (0, e.jsx)(Qt, { nYear: n }),
                      (0, e.jsx)("div", {
                        className: Ge().NoticeBox,
                        children: (0, de.we)(
                          "#Error_ErrorCommunicatingWithNetwork",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(Se.Z, {
                    className: Ge().ChartPage,
                    children: [
                      (0, e.jsx)(sa, {
                        rgAppIDs: H[0].rgFilteredCombinedAppsAndDLC,
                        bTallCapsule: !0,
                        bBlurCapsules: !1,
                        children: (0, e.jsx)(Qt, { nYear: n }),
                      }),
                      (0, e.jsx)(Ua, { facets: f, nYear: n, rgTabsData: H }),
                    ],
                  })
          );
        }
        function Qt(m) {
          const { nYear: n } = m,
            d = Qe(),
            g = (0, We.f1)(),
            [h] = (0, Ra.QD)("tab", 1),
            f = n + 1,
            b = Dt(f, g, !0),
            E = n - 1,
            w = Dt(E, g, !0),
            H = (0, aa.yk)() || (0, zt.tx)(window),
            P = (0, se.useCallback)(
              (K) => {
                H.active_modal ||
                  (K && b
                    ? d(ue.BestOfYear("" + f))
                    : !K && w && d(ue.BestOfYear("" + E)));
              },
              [H.active_modal, b, w, d, f, E],
            );
          (0, st.E)("ArrowLeft", () => P(!1), !0, !0),
            (0, st.E)("Left", () => P(!1), !0, !0),
            (0, st.E)("ArrowRight", () => P(!0), !0, !0),
            (0, st.E)("Right", () => P(!0), !0, !0);
          const U = h != 1 ? `?tab=${h}` : "";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: D().YearlyHeaderCtn,
                children: [
                  (0, e.jsx)("svg", {
                    viewBox: "0 0 100 100",
                    className: D().Triangle,
                    children: (0, e.jsx)("polygon", {
                      points: "50,35 100,100 0,100",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, ye.A)(D().HeaderCtn, D().WithSubtitle),
                    children: (0, e.jsx)("h1", {
                      children: (0, de.we)("#SteamCharts_Yearly_Title", n),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, ye.A)(D().PageSubtitle),
                    children: [
                      (0, de.we)("#SteamCharts_Yearly_SubTitle", 100),
                      (0, e.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)(Se.Z, {
                className: (0, ye.A)(D().ChartRangeCtn, D().AnnualChart),
                children: [
                  (0, e.jsx)(Ce.Gq, {
                    toolTipContent: (0, de.we)("#SteamCharts_Yearly_Title", E),
                    children: (0, e.jsx)("div", {
                      className: (0, ye.A)({
                        [D().ChartNavCtn]: !0,
                        [D().Disabled]: !w,
                      }),
                      children: w
                        ? (0, e.jsx)(At, {
                            to: ue.BestOfYear("" + E) + U,
                            className: D().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: D().ChartNavPrev,
                              children: "\xA0",
                            }),
                          })
                        : (0, e.jsx)("div", {
                            className: D().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: D().ChartNavPrev,
                              children: "\xA0",
                            }),
                          }),
                    }),
                  }),
                  (0, e.jsx)(Ce.Gq, {
                    toolTipContent: (0, de.we)("#SteamCharts_Yearly_Title", f),
                    children: (0, e.jsx)("div", {
                      className: (0, ye.A)({
                        [D().ChartNavCtn]: !0,
                        [D().Disabled]: !b,
                      }),
                      children: b
                        ? (0, e.jsx)(At, {
                            to: ue.BestOfYear("" + f) + U,
                            className: D().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: D().ChartNavNext,
                              children: "\xA0",
                            }),
                          })
                        : (0, e.jsx)("div", {
                            className: D().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: D().ChartNavNext,
                              children: "\xA0",
                            }),
                          }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        var Ha = r(90783);
        const ue = {
          Overview: () => `${z.B.SteamCharts()}`,
          MostPlayed: () => `${z.B.SteamCharts()}mostplayed`,
          MostPlayedOnSteamDeck: (m) =>
            `${z.B.SteamCharts()}steamdecktopplayed${m ? "/" + m : ""}`,
          TopSelling: (m) => `${z.B.SteamCharts()}topselling/${m}`,
          TopSellers: (m, n) =>
            `${z.B.SteamCharts()}topsellers/${m}${n ? "/" + n : ""}`,
          TopNewReleases: (m) => `${z.B.SteamCharts()}topnewreleases/${m}`,
          BestOfYear: (m) => `${z.B.SteamCharts()}bestofyear/${m}`,
        };
        async function va(m, n) {
          const d = new dt();
          return await d.Initialize(m, n), d;
        }
        function Wa(m) {
          const [n, d] = (0, se.useState)(void 0),
            g = (0, ha.TR)(),
            h = (0, ha.rX)();
          if (
            ((0, se.useEffect)(() => {
              va(g, h).then((P) => d(P));
            }, [g, h]),
            !n)
          )
            return null;
          const f = ue,
            {
              TopSellersStore: b,
              DynamicUserStore: E,
              TopMonthlyReleasesStore: w,
              TopYearlyReleasesStore: H,
            } = n;
          return (0, e.jsxs)(_t, {
            TopSellersStore: b,
            DynamicUserStore: E,
            TopMonthlyReleasesStore: w,
            children: [
              (0, e.jsx)(Ya, {}),
              (0, e.jsx)(Zt.Ay, {
                domain: "store.steampowered.com",
                controller: "steamcharts",
                children: (0, e.jsx)(se.Suspense, {
                  fallback: null,
                  children: (0, e.jsxs)(It.dO, {
                    children: [
                      (0, e.jsx)(It.qh, {
                        path: `${f.TopNewReleases(":salePagename")}`,
                        render: (P) => {
                          const {
                            match: {
                              params: { salePagename: U },
                            },
                          } = P;
                          return (0, e.jsx)(Zt.Ay, {
                            method: "monthlytopreleases",
                            children: (0, e.jsx)(et.tH, {
                              children: (0, e.jsx)(Rt, {
                                salePageName: U,
                                TopMonthlyReleasesStore: w,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(It.qh, {
                        path: `${f.BestOfYear(":salePagename")}`,
                        render: (P) => {
                          const {
                            match: {
                              params: { salePagename: U },
                            },
                          } = P;
                          return (0, e.jsx)(Zt.Ay, {
                            method: "bestofyear",
                            children: (0, e.jsx)(et.tH, {
                              children: (0, e.jsx)(Fa, {
                                salePageName: U,
                                TopYearlyReleasesStore: H,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(It.qh, { children: (0, e.jsx)(Ha.a, {}) }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function Ya() {
          const { pathname: m } = (0, It.zy)();
          return (
            se.useEffect(() => {
              typeof window.ScrollToTopStoreMobileAware < "u"
                ? window.ScrollToTopStoreMobileAware()
                : window.scrollTo(0, 0);
            }, [m]),
            null
          );
        }
      },
      50909: (F) => {
        F.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SalePageLogoCtn: "_3Rukhd1HqXzPiBrK5hwPT-",
          BackgroundAnimation: "_1xc_h6g1jbrfqXQXHDA2eY",
          "ItemFocusAnim-darkerGrey-nocolor": "_32Qiunpe7Bq8tRMP7zANIV",
          "ItemFocusAnim-darkerGrey": "_1jLvKsCp-1NNukUKFcJBiF",
          "ItemFocusAnim-darkGreySettings": "_2oonpIg6GiNC1fFwAuTeY1",
          "ItemFocusAnim-darkGrey": "_25MzDFkbrWeDNWxcpYDDqL",
          "ItemFocusAnim-grey": "_24xCtEhvscRzLJyaNWLeUa",
          "ItemFocusAnim-translucent-white-10": "_191r_XeIDZJjVtYMrw4vZN",
          "ItemFocusAnim-translucent-white-20": "_3PT6d0B4zsV60BfrKuIA1r",
          "ItemFocusAnimBorder-darkGrey": "_1Z9KMCmIY9huHpqwfwRypj",
          "ItemFocusAnim-green": "_1WZWN5W96O7pMURRF2eleh",
          focusAnimation: "_2hRoGMM5UsM8oeV-txHPNu",
          hoverAnimation: "_1YMbPvrOkuzyOJDFmv_N8s",
        };
      },
      71347: (F) => {
        F.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (F) => {
        F.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (F) => {
        F.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      95863: (F) => {
        F.exports = {
          narrowWidth: "500px",
          CalendarBtn: "_6LCq5awwJWbT0WLusE-as",
          PickerContainer: "_3YV5gmu_9QoN0IYGWX7N0E",
        };
      },
      17618: (F) => {
        F.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      32190: (F) => {
        F.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (F) => {
        F.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (F) => {
        F.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (F) => {
        F.exports = {
          ImageWrapperContainer: "_2or51Nzh1oEwvdNjKQ1XsS",
          ImageWrapper: "_34WcpEIVKr8Z72GaesGoR4",
          VideoBackground: "_3IizOeZqT1lZaoPEmdVxG",
          ImageWrapperFilename: "_3_vYFjDjTuDvhsL10XO9BU",
          ResultNotification: "_1X95b1CVvEsEa5dfoR5Pfv",
          ErrorCode: "_-7Alg3skQ6oFTYIpKTHsI",
          Hilight: "_3lBJMYeg4_hihNl0QTX1Qi",
          ImageButton: "_2MUWDtjaZWaMDdJaQr4o5a",
          Thumb: "_3M02zvAfoMwX5XlzlvFkc3",
          Full: "_1RN-YKVciU9zYHOYX6OV0",
          Delete: "_1X87fLS_CT0g2Vu5-fClUZ",
          FloatingThrobber: "_2EHZ15YQSAK_T5SCxVobtG",
          Localized: "_3FFrtt5Of4jP9unTFjYiHs",
          ClanImageGrid: "_3J5Yc20Wkz7gjSxxWcHst",
          ClanImageGridItem: "_1vXdD6QZTKcjYoRTOAuOeX",
          Selected: "_3JVN2Ta1MlQnuMnqPo0XR8",
          ImgCtn: "_248ADrw9QzPyhcxjqlaykT",
          Name: "TzsVI0_4scOG258SCeyqz",
        };
      },
      9709: (F) => {
        F.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (F) => {
        F.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (F) => {
        F.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (F) => {
        F.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      25359: (F) => {
        F.exports = {
          EventEditorArtworkCtn: "_3etoSeNgIJIJoQjVvKBkdK",
          ArtworkPreview: "_1fBG8S7L5v1-Ll8UMASqW5",
          EventEditorArtworkBarContainer: "TLT1tvLtG6-1EdFGwToo1",
          EventEditorButton: "_2EbfH5kGhG6VdMYM0aSFsw",
          EventEditorInputPaneTopRow: "_3loSsH7QVVzJW4dbA_k8pH",
          EventCoverImageCtn: "vcULy1uwr1V-xetzQ3t5_",
          DragTarget: "_2qaqHaHt0FsJ5g6E50Rpbn",
          DragOnTopOfMe: "_1-0mEm0at-4Czr10kmQ82K",
          EventEditorArtworkTextCtn: "wbzVx6PSPvY3jxjmybwT7",
          EventEditorDragTargetArea: "_352Z7ynHHExwu7pbLG0mi3",
          EventEditorArtworkTitle: "_1BtkzIs3COLhdqubhPqTJa",
          EventEditorArtworkSubTitle: "_3NsjbDpfSxc8ZHhYE5TuTv",
          EventEditorArtworkResolution: "pScoegXLiCfPTrVdDHgRc",
          ReassignCtn: "_2kzxUHYwRnfLZc2qUJp54m",
          ImagePreviewContainer: "_4M__i4jyU9-VJE6K30Rat",
          NoneSet: "csDC3rD7ooQ8gGXZhh594",
          TitleSafePreview: "_2Gel5eBC4smzhCMPJN4poX",
          TitleSafeCaption: "_2oU3ulhvWy8BrTtr-wLTHL",
          LanguageSelector: "_33sdnBObDSgcIemY_8d188",
          LanguageSelectorSelected: "_35iac6gVYl3NbfLM5oGhAp",
          LanguageSelectorNoData: "_2MrExNFgrVVmzV4_XxWk7m",
          LanguageContainer: "_1GqYxNpFolOmvCXZZ5SqS9",
          LanguageOptions: "_1OF4inXEccSHpEi-94BNyB",
          LanguageListContainer: "_2NKwVWWJzUopyzUpm5K8PU",
          SelectImageContainerTopRow: "_33RDQ6gt9hW0N3baDbAfnl",
          SelectImageContainerBottomRow: "_3Mstp8zLfqhPc0yqJGve2N",
          TextTitle: "_1b_OxtjP85MZc-IlQfnnHR",
          TextSubTitle: "EqzVNygGbzsiBalSQOtWy",
          SelectImageEqualColumns: "Qz0mmjcnBMcs99N6fgVCv",
          SelectImageBlock: "X_wtWeV0nNEF-9Rz0wZRL",
          MainPreviewBlock: "_3kAV8hXf4G70C4tDE8HDjI",
          Tips: "_2jAkKq9D5KKOH2cgMu59yN",
          ExamplesCtn: "WiG3FOkzY58mDmTzVy40z",
          SelectImageExampleImg: "_3Lcquzc_EacniSS2QxdUHx",
          SelectImageLanguagesCtn: "_27huHYrHSwivfUIglfRube",
          SelectImageTitle: "lJEQ6yKHtjwXClD4NVqUY",
          ArtworkSelectorContainer: "_2dxWXru9IFUHuJgzC9_WwQ",
          Title: "_2HiqsrLG8k4zf4raXVygUP",
          SaleHeaderExampleCtn: "_2Nwi2WWTWdc4JkMEiHDFFK",
          SaleHeaderExampleCol: "_2s4zAjRHJabF47kK9uxCY6",
          BroadcastPreview: "_3NxzN3dNq98rjVdkyQ9QIH",
          AssetExampleSpotlightCtn: "_29B1UOzVRMVZSd22IyP43x",
          BackgroundConfigCtn: "_3SVRvFP-sXikNXmksKkDQ7",
          OptionCtn: "_2XnObldRTEs5T4Sswyv5Fo",
          ButtonRow: "_2W9rAanKV4V6A7Exx4sWGF",
          BackgroundColorBtn: "_2YD-avez2pqO4MJHAO5_v0",
          BackgroundColorResetBtn: "baRhk4ouyxcNfo_um5C76",
          UploadSuccess: "inXVzuN-asDe-A5jnsvvV",
          HighlightBox: "_3qTodEPOW76BNBFtgX0AUa",
        };
      },
      79949: (F) => {
        F.exports = {
          MultipleExampleContainer: "_3HrpHSdcqC7wp8s07bOS2l",
          ExampleSectionTitle: "MxxIR01BbdH_tAWmTbjoz",
          DetailPageExample: "_3Mi3a8sT7hZn6-L_TPm3gr",
          DetailExample: "TYQJH_hhcEuSRvl75g6GA",
          DetailExample2: "HQAziOChjZK2M_cKTNA8",
          MainImageCtn: "_1mRJSs13tWFRJ55fG6WrK8",
          ExampleBodyPosition: "_2wNW_eWECTcvaYU7AYXXY2",
          ExampleContentCtn: "_2bAs9Bkh1K8PYVhcLLerfA",
          TextTitle: "_3fulSVNkgCeQyqxT0FjHOp",
          TextSubTitle: "_3ThX6fPp7MJY_TrTP_RCRY",
          TextBody: "_2nG13rbAd05OnozWt7nQWL",
          SpotlightExample: "_3KsBV1q-e0ZnxgK9GdUiON",
          ExampleSpacer: "oAEZygc5smKi6PjD-981",
          BroadcastPreviewContainer: "_3aLcrZxS4I4KVtUF0BdHds",
          SaleHeaderPreviewContainer: "GORXZE3lrdjE-QiVxXceW",
        };
      },
      15496: (F) => {
        F.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          ReadMoreLink: "_2mvgc6dpEDHRJlTWhGDz7h",
          MajorEventContainer: "dVJB2r43CGIAgr-Xtt4P3",
          MajorEventImageContainer: "_1PkTBeZJVs3WI8US0zffEx",
          MajorEventImage: "_25fL1JQcG1kh_9L5danMxc",
          BottomShadow: "_1ueE9cjv0hzERo311Gr6qL",
          MajoreEventImageContentContainer: "_3mREW5LJ_7jyeol7BtXcym",
          MajorEventImageTemplate: "lQR9_4nAXfydIY7zwOzSF",
          MajorEventBackground: "_388IuJImOHcpIL9kvqJdet",
          MajorEventImageBackgroundBlur: "_3sVs6YBElnuTON_cY_6ne5",
          MajorEventHeader: "_1HL2nt3zhHJo3RkMzmD-Gb",
          PartnerEventLargeImage_Title: "bYwbk-ycz_n2JnQgyrgDx",
          EventType: "_3zVyXPaFJl95Q5qnxtDpuB",
          GameIconAndName: "IltgR1LrH0neRnKq0TLxy",
          GameIcon: "_3Dkj3XaiQV2I1d2m-RRA_L",
          MajorEventSpotlightBackground: "_1ahePoGx6gPXhapzZw2L21",
          MajorEventContent: "_2nr7NuawYs9NhC8OUkY0fK",
          MajorEventTextCtn: "Ojdg2vBD3O1oroxYVU2zB",
          MajorEventTitle: "nEBZT02OOnxIbyIl9Dk44",
          MajorEventSummary: "HPngOFPPykmeXFSxcC1Zv",
          MajorEvent_Ctn: "_2_kU7nUB6wwDu-LsbQZmNc",
          AppDetailsSpotlightContainer: "_1zDJ1bfFg-UkuAluUAoGKj",
          BackgroundAnimation: "_2zmvTGYcnxB2bhgSNFXnSi",
          "ItemFocusAnim-darkerGrey-nocolor": "_2DCLV3hUeBViGvq3yTsiQE",
          "ItemFocusAnim-darkerGrey": "_1iMoXsAEHqrsXXcoaw1SIy",
          "ItemFocusAnim-darkGreySettings": "_23bSFoV4nDLAGl_G32zEdY",
          "ItemFocusAnim-darkGrey": "_1_Uo-zxJJlBTZyvRjgeG4_",
          "ItemFocusAnim-grey": "_3AjpDoqzZuBj6F7fMiO2Q-",
          "ItemFocusAnim-translucent-white-10": "_3PpKBwmAjZpmyTB-ooDvNd",
          "ItemFocusAnim-translucent-white-20": "_2k5z_bdbdZRy3o_pIFzFBF",
          "ItemFocusAnimBorder-darkGrey": "DuzyT2w758OaPfDpfQkO6",
          "ItemFocusAnim-green": "kF7es13166bQnCHSRaw6l",
          focusAnimation: "_3lfKCkcI6nWWMWFgLOGbyh",
          hoverAnimation: "_24fZDwdgB8kUq2hGCnbx88",
        };
      },
      64734: (F) => {
        F.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      89921: (F) => {
        F.exports = {
          ChartPage: "_1A7NagdRz58_o8HPHMa3eE",
          NoticeBox: "Wz_vOPow_bEtEb4cgCPEi",
        };
      },
      27221: (F) => {
        F.exports = {
          narrowWidth: "500px",
          ImagesCtn: "_3C3Hy1Ldb_j8FpXikuio9T",
          BlurCapsules: "ZhjPEOG0gzrTqrcqmNZsY",
          AllImages: "_1DF4gfqbWS61FaehmUYkuU",
          AnnualChart: "RLK6pXS_oOr0O7-PifqTy",
          ImageTint: "_1uXifcwYEEZepZq9GX0pf0",
          AllImagesCtn: "Y8NVLbtTPQh9gVfG4V_tl",
          FadeInTiles: "_3HscHWkOLtsK-kzGBMVI2Y",
          TallCapsules: "_3KtoWhNtwhnMPl7e0OxGBj",
          Wide2: "_11TDFqeudgrq4D6KFL1Hs3",
        };
      },
      87853: (F) => {
        F.exports = {
          PlatinumSection: "_2M6w2tE1mq1K57VNXnkzkT",
          GoldSection: "_2XQYX2jtslkhZFeU8dsDIp",
          SilverSection: "_2KzJEuTfwQGu9Qw4v4HY7R",
          BronzeSection: "aAu4zZKXrAiL6gzPT_bZG",
          AllTiers: "_3MBqFIUsuhw30AtrWEE_mX",
        };
      },
      74812: (F) => {
        F.exports = {
          SteamChartsPage: "_2aYDMWWN9bAVaHmPfFHXWA",
          SteamChartsRootPanel: "_3GQ1HSHen1-JyKYkhmWt9a",
          SteamChartsShell: "_2rArjHHk-sJxtm0AQK-ifY",
          SteamChartsContent: "_2uKyXTgmlwRhfDB9pAKD76",
          PageSubtitle: "_3wxTKWJdN8vIdXKlu-ZHZX",
          TopDeckSubtitle: "_1l72-mnPYU9Ton0UyCrTgL",
          HeaderCtn: "_1kLTg9HHfMgVo8gDstT8uR",
          WithSubtitle: "_kbFJdSwEh7bc98Yq_gZ2",
          YearlyHeaderCtn: "_23MzHKxNYqVS4XAaaE8YQK",
          Triangle: "_3022w3NEiudslTNnPMWd8Z",
          SteamChartsRootPosition: "_2tAk2uCRwLsaOcFMF0VAr9",
          AlignWithMenu: "_2-hIBICcMkAAkFzWEvp5uM",
          SteamChartsMenu: "KSZ9hmL_XbHI_tlSUQylO",
          SteamLogo: "_3qWYYrOe1bQhTJwm0zc4E3",
          MenuGroup: "_2X7eT07iC6SQRu_uj4Web3",
          Weekly: "jC5Vq_nM-w0wUMREt340Y",
          MenuLinks: "Lj-O1sumeRPMtyePxydGf",
          Monthly: "_2mbn0MybOi1zQDV9iYg5X-",
          MenuHeader: "_19bojcj07vGvbhrAJ4T55c",
          ActiveLink: "_3kEWJGuSEOp09T1ZND24zk",
          ChartRangeCtn: "wLFBOAfa7yijnxFGxj9xs",
          AnnualChart: "_2HgYqWURygpji4_HPSk_sw",
          ChartRangeText: "vlHd8EhkUPvzcN2Xn4Y0j",
          ShortDate: "_2AQqwf9WZKu7d8zUGYJ5VR",
          LongDate: "_1V5zBbE55eaOW2YYdG-bDd",
          ChartNavCtn: "_1tUsAmcZXj8lDhFYLPtWSX",
          ChartNavHitArea: "_1PJCAo5GkI9HNCJX88goY5",
          Disabled: "_2VVBwS-S1js1QLzT90jv1S",
          ChartNavPrev: "PFs4U4cBAxm-GI1zMSV7q",
          ChartNavNext: "_27ASBphHd61RCZhLfsKIZ5",
        };
      },
      17083: (F, we, r) => {
        "use strict";
        r.d(we, { N_: () => k, k2: () => be });
        var e = r(92757),
          z = r(42891),
          Z = r(90626),
          le = r(29248),
          re = r(58584),
          ne = r(81115),
          pe = r(68841),
          V = (function (M) {
            (0, z.A)(ee, M);
            function ee() {
              for (
                var _e, oe = arguments.length, je = new Array(oe), c = 0;
                c < oe;
                c++
              )
                je[c] = arguments[c];
              return (
                (_e = M.call.apply(M, [this].concat(je)) || this),
                (_e.history = (0, le.zR)(_e.props)),
                _e
              );
            }
            var q = ee.prototype;
            return (
              (q.render = function () {
                return Z.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              ee
            );
          })(Z.Component),
          j = (function (M) {
            (0, z.A)(ee, M);
            function ee() {
              for (
                var _e, oe = arguments.length, je = new Array(oe), c = 0;
                c < oe;
                c++
              )
                je[c] = arguments[c];
              return (
                (_e = M.call.apply(M, [this].concat(je)) || this),
                (_e.history = (0, le.TM)(_e.props)),
                _e
              );
            }
            var q = ee.prototype;
            return (
              (q.render = function () {
                return Z.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              ee
            );
          })(Z.Component),
          x = function (ee, q) {
            return typeof ee == "function" ? ee(q) : ee;
          },
          Q = function (ee, q) {
            return typeof ee == "string" ? (0, le.yJ)(ee, null, null, q) : ee;
          },
          J = function (ee) {
            return ee;
          },
          te = Z.forwardRef;
        typeof te > "u" && (te = J);
        function A(M) {
          return !!(M.metaKey || M.altKey || M.ctrlKey || M.shiftKey);
        }
        var T = te(function (M, ee) {
            var q = M.innerRef,
              _e = M.navigate,
              oe = M.onClick,
              je = (0, ne.A)(M, ["innerRef", "navigate", "onClick"]),
              c = je.target,
              Be = (0, re.A)({}, je, {
                onClick: function (Ne) {
                  try {
                    oe && oe(Ne);
                  } catch (tt) {
                    throw (Ne.preventDefault(), tt);
                  }
                  !Ne.defaultPrevented &&
                    Ne.button === 0 &&
                    (!c || c === "_self") &&
                    !A(Ne) &&
                    (Ne.preventDefault(), _e());
                },
              });
            return (
              J !== te ? (Be.ref = ee || q) : (Be.ref = q),
              Z.createElement("a", Be)
            );
          }),
          k = te(function (M, ee) {
            var q = M.component,
              _e = q === void 0 ? T : q,
              oe = M.replace,
              je = M.to,
              c = M.innerRef,
              Be = (0, ne.A)(M, ["component", "replace", "to", "innerRef"]);
            return Z.createElement(e.XZ.Consumer, null, function (He) {
              He || (0, pe.A)(!1);
              var Ne = He.history,
                tt = Q(x(je, He.location), He.location),
                ct = tt ? Ne.createHref(tt) : "",
                dt = (0, re.A)({}, Be, {
                  href: ct,
                  navigate: function () {
                    var at = x(je, He.location),
                      Ge = (0, le.AO)(He.location) === (0, le.AO)(Q(at)),
                      pt = oe || Ge ? Ne.replace : Ne.push;
                    pt(at);
                  },
                });
              return (
                J !== te ? (dt.ref = ee || c) : (dt.innerRef = c),
                Z.createElement(_e, dt)
              );
            });
          });
        if (0) var N, $;
        var Ee = function (ee) {
            return ee;
          },
          Y = Z.forwardRef;
        typeof Y > "u" && (Y = Ee);
        function ce() {
          for (var M = arguments.length, ee = new Array(M), q = 0; q < M; q++)
            ee[q] = arguments[q];
          return ee
            .filter(function (_e) {
              return _e;
            })
            .join(" ");
        }
        var be = Y(function (M, ee) {
          var q = M["aria-current"],
            _e = q === void 0 ? "page" : q,
            oe = M.activeClassName,
            je = oe === void 0 ? "active" : oe,
            c = M.activeStyle,
            Be = M.className,
            He = M.exact,
            Ne = M.isActive,
            tt = M.location,
            ct = M.sensitive,
            dt = M.strict,
            ht = M.style,
            at = M.to,
            Ge = M.innerRef,
            pt = (0, ne.A)(M, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return Z.createElement(e.XZ.Consumer, null, function (D) {
            D || (0, pe.A)(!1);
            var se = tt || D.location,
              ut = Q(x(at, se), se),
              We = ut.pathname,
              Ct = We && We.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              ke = Ct
                ? (0, e.B6)(se.pathname, {
                    path: Ct,
                    exact: He,
                    sensitive: ct,
                    strict: dt,
                  })
                : null,
              Oe = !!(Ne ? Ne(ke, se) : ke),
              Ye = typeof Be == "function" ? Be(Oe) : Be,
              qe = typeof ht == "function" ? ht(Oe) : ht;
            Oe && ((Ye = ce(Ye, je)), (qe = (0, re.A)({}, qe, c)));
            var Ze = (0, re.A)(
              {
                "aria-current": (Oe && _e) || null,
                className: Ye,
                style: qe,
                to: ut,
              },
              pt,
            );
            return (
              Ee !== Y ? (Ze.ref = ee || Ge) : (Ze.innerRef = Ge),
              Z.createElement(k, Ze)
            );
          });
        });
        if (0) var ve;
      },
      44894: (F, we, r) => {
        "use strict";
        r.d(we, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
