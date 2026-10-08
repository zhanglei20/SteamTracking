/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [35871],
    {
      64457: (G, V, s) => {
        "use strict";
        s.d(V, { PE: () => J, Yg: () => D, _t: () => I, gO: () => k });
        var e = s(7850),
          M = s(21721),
          l = s(25046),
          j = s(40358),
          y = s(68094),
          u = s(41032),
          _ = s(90626),
          g = s(62571),
          N = s(40426),
          R = s(36118),
          U = s(36707),
          W = s(18210),
          x = s(72609),
          w = s(96538),
          K = s(85599),
          ae = s(64271),
          B = s(48963),
          O = s.n(B),
          $ = s(50573);
        function D(A) {
          const { id: v, bPopOutTrailerPlayback: c } = A,
            { data: t } = (0, j.Yo)(v),
            { data: i } = (0, j.j4)(v),
            { data: m } = (0, j.J$)(v),
            [h, p] = (0, _.useState)(!1),
            [b, P] = (0, _.useState)(!1),
            F = (0, u.dy)(),
            Y = t?.highlights?.filter((q) => !F || q.all_ages),
            T = Y && Y?.length > 0 ? Y[0] : void 0,
            z = _.useCallback(() => {
              T && (c ? P(!0) : p((q) => !q));
            }, [T, c]);
          if (!m)
            return (0, e.jsx)("div", {
              className: (0, U.A)(O().HilightGrid, O().MediaContainer),
              children: (0, e.jsx)(K.t, { size: "medium" }),
            });
          const Q = T
            ? (0, e.jsx)(L, {
                trailer: T,
                bPlayVideo: h,
                fnTogglePlayTrailer: z,
              })
            : null;
          return !T &&
            !(i && i.all_ages_screenshots && i.all_ages_screenshots.length > 0)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, U.A)(O().HilightGrid, O().MediaContainer),
                children: [
                  (0, e.jsx)(I, {
                    elFeaturedInCenter: Q,
                    storeItemScreenshots: i,
                    trailer: T,
                    id: v,
                    name: m.name || "",
                  }),
                  c
                    ? (0, e.jsx)(J, {
                        id: v,
                        bShowModal: b,
                        hideModal: () => P(!1),
                      })
                    : (0, e.jsx)(H, {
                        name: m.name || "",
                        trailer: T,
                        bPlayVideo: h,
                        fnTogglePlayTrailer: z,
                        bControls: !0,
                      }),
                ],
              });
        }
        function I(A) {
          const {
              elFeaturedInCenter: v,
              id: c,
              name: t,
              trailer: i,
              storeItemScreenshots: m,
              featureElementclassName: h,
              bUseTrailerAsFirstThumb: p,
              bNoScreenShotModals: b,
            } = A,
            [P, F] = _.useState(void 0),
            [Y, T] = (0, N.XC)(),
            z = (0, u.dy)(),
            Q = (0, _.useRef)(null),
            [q, Te] = (0, _.useState)(0);
          if (!c) return null;
          const ie = v || (P !== void 0 && P !== -1) ? P : 0,
            me = new Array(),
            de = new Array();
          p &&
            i &&
            (me.push(
              (0, e.jsx)(
                L,
                {
                  trailer: i,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => F(0),
                  onMouseLeave: () => {
                    const oe = Q.current;
                    oe && Te(oe.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            de.push(
              (0, e.jsx)(
                H,
                {
                  ref: Q,
                  name: t,
                  trailer: i,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: q,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const ve = (
            z ? m?.all_ages_screenshots : m?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (ve?.forEach((oe, le) => {
              if ((v || le > 0) && me.length < 3) {
                const ce = (0, M.bu)(oe, "thumb"),
                  je = (0, M.bu)(oe, "600x338"),
                  Ee = me.length;
                me.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, U.A)({
                        [O().ThumbnailCtn]: !0,
                        [O().ThumbnialClickable]: !b,
                      }),
                      onMouseEnter: () => F(Ee),
                      children: b
                        ? (0, e.jsx)("img", { src: ce, alt: t })
                        : (0, e.jsx)("button", {
                            type: "button",
                            className: O().ThumbnailButton,
                            onClick: () => {
                              const he = [...(ve || [])];
                              if (he.length > 0) {
                                for (let _e = 0; _e < le; ++_e) {
                                  const Ae = he.shift();
                                  Ae && he.push(Ae);
                                }
                                Y(he.map((_e) => (0, M.bu)(_e, "full")));
                              }
                            },
                            children: (0, e.jsx)("img", { src: ce, alt: t }),
                          }),
                    },
                    le + "_small_" + ce,
                  ),
                ),
                  de.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: O().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: je, alt: t }),
                      },
                      le + "_big_" + ce,
                    ),
                  );
              }
            }),
            !v && (!de || de.length == 0))
          )
            return null;
          const ue = me.slice(0, 3),
            Me = Array.from({ length: Math.max(0, 3 - ue.length) });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              T,
              (0, e.jsx)("div", {
                className: h || O().MainMediaCtn,
                children:
                  v && (ie === -1 || ie === void 0)
                    ? (0, e.jsx)(e.Fragment, { children: v })
                    : (0, e.jsx)(e.Fragment, {
                        children: ie !== void 0 && de[ie],
                      }),
              }),
              ue.length > 0 &&
                (0, e.jsxs)("div", {
                  className: O().ScreenshotThumbnailRow,
                  onMouseLeave: () => F(-1),
                  children: [
                    ue,
                    Me.map((oe, le) =>
                      (0, e.jsx)(
                        "div",
                        { className: O().ThumbnailCtn },
                        `app_${(0, y.ER)(c)}_${le}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function H(A) {
          const {
            ref: v,
            name: c,
            trailer: t,
            bControls: i,
            bPlayVideo: m,
            fnTogglePlayTrailer: h,
            startTime: p,
          } = A;
          if (
            ((0, _.useEffect)(() => {
              const P = v?.current;
              if (p != null && p > 0 && P) {
                const F = () => {
                  P.currentTime = p || 0;
                };
                return (
                  P.addEventListener("loadedmetadata", F),
                  () => {
                    P.removeEventListener("loadedmetadata", F);
                  }
                );
              }
            }, [v, p]),
            !t)
          )
            return null;
          let b = (0, U.A)(O().VideoLargeContainer, m && O().videoPlaying);
          return (0, e.jsxs)("div", {
            className: b,
            onClick: h,
            role: "presentation",
            children: [
              (0, e.jsx)($.hj, {
                name: c,
                trailerCategory: t.trailer_category,
                trailerDisplay: $.g,
                mouseOver: !1,
              }),
              !!(m && t.microtrailer) &&
                (0, e.jsx)("video", {
                  className: O().VideoLarge,
                  ref: v,
                  controls: i,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: p != null && p > 0 ? void 0 : t.screenshot_full,
                  children: t.microtrailer?.map((P) =>
                    x.TS.IN_CLIENT && P.type == "video/mp4"
                      ? null
                      : (0, e.jsx)(
                          "source",
                          { src: (0, l.M4)(t, P.filename || ""), type: P.type },
                          P.filename,
                        ),
                  ),
                }),
              i &&
                (0, e.jsx)("button", {
                  type: "button",
                  className: O().CloseButton,
                  "aria-label": (0, W.we)("#Button_Close"),
                  children: (0, e.jsx)(R.sED, {}),
                }),
            ],
          });
        }
        function J(A) {
          return A.bShowModal ? (0, e.jsx)(S, { ...A }) : null;
        }
        function S(A) {
          const { id: v, bShowModal: c, trailerBaseID: t, hideModal: i } = A,
            { data: m } = (0, j.J$)(v),
            h = (0, l.kB)(v),
            p = (0, _.useMemo)(() => {
              if (!(!h || h.length == 0)) {
                if (t) {
                  const Q = h.find((q) => q.trailer_base_id == t);
                  if (Q) return Q;
                }
                return h[0];
              }
            }, [h, t]),
            b = _.useId(),
            P = _.useId(),
            {
              rgDashTrailers: F,
              rgHlsTrailers: Y,
              strCaptionManufest: T,
              strScreenshot: z,
            } = (0, _.useMemo)(() => {
              if (!p)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: Q, rgHlsTrailers: q } = (0, l.hg)(p);
              return {
                rgDashTrailers: Q,
                rgHlsTrailers: q,
                strCaptionManufest: (0, l.Wv)(p),
                strScreenshot: (0, l.hl)(p),
              };
            }, [p]);
          return !p || !p.adaptive_trailers || F.length == 0
            ? null
            : (0, e.jsx)(w.EN, {
                active: c,
                children: (0, e.jsxs)(w.eV, {
                  "aria-labelledby": (0, g.q)(b, P),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: i,
                  children: [
                    (0, e.jsx)("div", {
                      className: O().VideoPopupContainers,
                      children: (0, e.jsx)(ae.P, {
                        dashManifests: F,
                        hlsManifest: Y[0] || "",
                        screenshot: z,
                        altText: p.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: T,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      id: b,
                      style: { display: "none" },
                      children: m?.name || "",
                    }),
                    (0, e.jsx)("div", {
                      id: P,
                      style: { display: "none" },
                      children: p.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function k(A) {
          const { appid: v, trailerBaseID: c, bShowModal: t, hideModal: i } = A,
            m = (0, _.useMemo)(() => ({ appid: v }), [v]);
          return (0, e.jsx)(J, {
            id: m,
            trailerBaseID: c,
            bShowModal: t,
            hideModal: i,
          });
        }
        function L(A) {
          const {
            trailer: v,
            fnTogglePlayTrailer: c,
            bPlayVideo: t,
            onMouseEnter: i,
            onMouseLeave: m,
          } = A;
          return (0, e.jsxs)("div", {
            className: (0, U.A)({
              [O().VideoThumbnail]: !t,
              [O().videoPlaying]: t,
              [O().ThumbnailCtn]: !0,
            }),
            onClick: c,
            onMouseEnter: i,
            onMouseLeave: m,
            role: "presentation",
            children: [
              (0, e.jsx)("img", { src: (0, l.hl)(v), alt: v.trailer_name }),
              (0, e.jsx)("button", {
                type: "button",
                className: O().VideoPlayButton,
                "aria-label": (0, W.we)("#Playback_Play_Tooltip"),
                children: (0, e.jsx)(R.jGG, {}),
              }),
            ],
          });
        }
      },
      97743: (G, V, s) => {
        "use strict";
        s.d(V, {
          $I: () => J,
          AP: () => v,
          Nt: () => B,
          XW: () => k,
          dr: () => A,
          fL: () => H,
          rT: () => D,
        });
        var e = s(80902),
          M = s(90626),
          l = s(99412),
          j = s(72604),
          y = s(35038),
          u = s(86174),
          _ = s(3166),
          g = s(84192),
          N = s(68094),
          R = s(5827),
          U = s(71742),
          W = s(14947),
          x = s(18210),
          w = Object.defineProperty,
          K = Object.getOwnPropertyDescriptor,
          ae = (c, t, i, m) => {
            for (
              var h = m > 1 ? void 0 : m ? K(t, i) : t, p = c.length - 1, b;
              p >= 0;
              p--
            )
              (b = c[p]) && (h = (m ? b(t, i, h) : b(h)) || h);
            return m && h && w(t, i, h), h;
          };
        class B {
          m_SteamInterface;
          m_SteamInterfacePromotions;
          m_setMessagesSeen = new Set();
          static sm_DefaultDataRequest = {
            include_release: !0,
            include_assets: !0,
          };
          constructor(t) {
            this.m_SteamInterface = t;
          }
          static sm_Instance;
          static Init(t) {
            B.sm_Instance = new B(t);
          }
          SetSteamInterfacePromotions(t) {
            this.m_SteamInterfacePromotions = t;
          }
          static Get() {
            return (
              (0, U.wT)(
                B.sm_Instance,
                "MarketingMessages store not initialized",
              ),
              B.sm_Instance
            );
          }
          async GetMessageList(t, i = !1) {
            if (!_.iA.logged_in) return [];
            const m = y.w.Init(u.LK);
            m.Body().set_country_code(_.TS.COUNTRY),
              m.Body().set_elanguage((0, l.sfN)(_.TS.LANGUAGE)),
              m.Body().set_client_package_version(t.nClientPackageVersion),
              m.Body().set_operating_system(t.eOSType),
              i && m.Body().set_include_seen_messages(!0),
              (0, g.rV)(m),
              (0, g.Bn)(m, B.sm_DefaultDataRequest);
            const h = await u.EO.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              m,
            );
            if (h.GetEResult() != j.R)
              throw `Error loading marketing messages: ${h.GetEResult()}`;
            if (i)
              for (const p of h.Body().messages())
                p.already_seen() &&
                  this.m_setMessagesSeen.add(p.message().gid());
            return h.Body().messages();
          }
          async GetSingleMessage(t, i) {
            const m = y.w.Init(u.e6);
            m.Body().set_gid(t),
              (0, g.rV)(m),
              (0, g.Bn)(m, B.sm_DefaultDataRequest);
            let h;
            if (
              (i || _.iA.logged_in
                ? (h = await u.EO.GetDisplayMarketingMessageForUser(
                    this.m_SteamInterface.GetServiceTransport(),
                    m,
                  ))
                : (h = await u.EO.GetDisplayMarketingMessage(
                    this.m_SteamInterface.GetAnonymousServiceTransport(),
                    m,
                  )),
              h.GetEResult() != j.R)
            )
              throw `Error loading marketing messages: ${h.GetEResult()}`;
            return h.Body().message();
          }
          MarkMessageSeen(t, i, m) {
            if (this.m_setMessagesSeen.has(t)) return;
            const h = y.w.Init(u.S4);
            h.Body().set_gid(t),
              h.Body().set_display_index(i),
              h.Body().set_template_type(m),
              u.EO.MarkMessageSeen(
                this.m_SteamInterface.GetServiceTransport(),
                h,
              ),
              this.m_setMessagesSeen.add(t);
          }
          BIsMessageSeen(t) {
            return this.m_setMessagesSeen.has(t);
          }
        }
        function O(c) {
          if (!c) return null;
          try {
            const t = JSON.parse(c);
            return (
              t.use_additional_fields &&
                (t.use_additional_fields =
                  t.use_additional_fields === "true" ||
                  t.use_additional_fields === 1),
              t.use_custom_legal_text &&
                (t.use_custom_legal_text =
                  t.use_custom_legal_text === "true" ||
                  t.use_custom_legal_text === 1),
              t.last_asset_mtime &&
                (t.last_asset_mtime = parseInt(t.last_asset_mtime)),
              (t.ll_image = t.ll_image || {}),
              t
            );
          } catch {}
          return null;
        }
        function $(c) {
          return `\xA9 ${new Date().getFullYear()} Valve Corporation${c ? " and " + c : ""}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
        }
        class D {
          m_message;
          m_templateVars = void 0;
          m_associatedItemKey;
          m_rgRecommendedAppIDs;
          m_nSaleItemCount;
          constructor(t) {
            (0, W.Gn)(this),
              (this.m_message = t),
              (this.m_templateVars = O(t.template_vars_json()));
            const i = t.associated_item(!1);
            (this.m_associatedItemKey = i
              ? (0, N.Jz)({ item_type: i.item_type(), id: i.id() })
              : void 0),
              (this.m_rgRecommendedAppIDs = t
                .recommended_items()
                .map((m) => m.appid())
                .filter(Boolean)),
              (this.m_nSaleItemCount = t.sale_item_count());
          }
          get id() {
            return this.m_message.gid();
          }
          GetType() {
            return this.m_message.type();
          }
          static GetTypeAsLocalizedString(t) {
            switch (t) {
              case u.D4.QJ:
                return (0, x.we)("#spotlight_weekend_deal");
              case u.D4.xl:
                return (0, x.we)("#spotlight_midweek_madness");
              case u.D4.Sk:
                return (0, x.we)("#spotlight_daily_deal");
              case u.D4.OD:
                return (0, x.we)("#msg_available_everywhere");
              case u.D4.RV:
                return (0, x.we)("#msg_new_game");
              case u.D4.IT:
                return (0, x.we)("#msg_prepurchase_now");
              case u.D4.T9:
                return (0, x.we)("#msg_play_now");
              case u.D4.QY:
                return (0, x.we)("#label_pre_load_now");
              case u.D4.W8:
                return (0, x.we)("#label_just_updated");
              case u.D4.eV:
                return (0, x.we)("#label_new_dlc_available");
              case u.D4.SK:
                return (0, x.we)("#label_free_weekend");
              case u.D4.eH:
                return (0, x.we)("#msg_on_sale_now");
              case u.D4.k6:
                return (0, x.we)("#msg_play_beta_now");
            }
            return null;
          }
          GetTemplateType() {
            return this.m_message.template_type();
          }
          GetTemplateTypeForReporting() {
            if (
              this.GetTemplateVars().custom_display &&
              this.GetTemplateVars().custom_display.startsWith("replay")
            )
              return u.rj.TO;
            switch (this.GetTemplateVars().custom_display) {
              case "dlc_override":
                return u.rj.k2;
              case "mm_auto_render":
                return u.rj.H;
              case "partner_event":
                return u.rj.GS;
              case "featured_video":
                return u.rj.CT;
            }
            return u.rj.BA;
          }
          GetTemplateVars() {
            return this.m_templateVars;
          }
          GetLocalizedAltText(t) {
            return (
              this.m_templateVars?.localized_alt_text?.[t] ||
              this.m_templateVars?.localized_alt_text?.[
                x.A0.GetELanguageFallback(t)
              ] ||
              void 0
            );
          }
          GetTemplateImage() {
            let t = this.m_templateVars.ll_image[_.TS.LANGUAGE],
              i = (0, l.sfN)(_.TS.LANGUAGE);
            return (
              !t &&
                _.TS.LANGUAGE == (0, l.LgB)(l.FHN) &&
                ((t = this.m_templateVars.ll_image.LATAM), (i = l.FHN)),
              t || ((t = this.m_templateVars.ll_image.english), (i = l.Bhc)),
              [t?.path, i]
            );
          }
          GetTemplateBackgroundImage() {
            let t = this.m_templateVars.background[_.TS.LANGUAGE],
              i = (0, l.sfN)(_.TS.LANGUAGE);
            return (
              t || ((t = this.m_templateVars.background.english), (i = l.Bhc)),
              [t?.path, i]
            );
          }
          GetFeaturedVideoMP4URL() {
            return this.m_templateVars.featured_video_mp4;
          }
          GetFeaturedVideoWebMURL() {
            return this.m_templateVars.featured_video_webm;
          }
          GetFeaturedVideoAutoPlay() {
            return this.m_templateVars.featured_video_autoplay;
          }
          GetFeaturedVideoLoop() {
            return this.m_templateVars.featured_video_loop;
          }
          GetPosterImage() {
            let t = this.m_templateVars.poster[_.TS.LANGUAGE],
              i = (0, l.sfN)(_.TS.LANGUAGE);
            return (
              t || ((t = this.m_templateVars.poster.english), (i = l.Bhc)),
              [t?.path, i]
            );
          }
          GetSubtitleObj() {
            return this.m_templateVars.subtitles;
          }
          GetDLCAppIDs() {
            return this.m_templateVars.additional_featuring
              .filter((t) => !!t.appid)
              .map((t) => t.appid);
          }
          GetAutoRenderWithoutAssetOverrides() {
            return !!this.m_templateVars.autorender_assets_without_overrides;
          }
          GetGID() {
            return this.m_message.gid();
          }
          SetDLCAppIDOverride(t) {
            (this.m_templateVars.additional_featuring = t.map((i) => ({
              appid: i,
            }))),
              (this.m_templateVars.custom_display = "dlc_override");
          }
          GetRecommendedAppIDs() {
            return this.m_rgRecommendedAppIDs;
          }
          GetSaleItemCount() {
            return this.m_nSaleItemCount;
          }
          SetRecommendedAppIDsOverride(t) {
            this.m_rgRecommendedAppIDs = t;
          }
          OverrideCustomText(t) {
            this.m_templateVars.button_text_custom = t;
          }
          OverrideURL(t) {
            this.m_templateVars.linkurl = t;
          }
          BHasTemplateAnimatedAssets() {
            return this.m_templateVars.has_animated_assets;
          }
          BHasTemplateAnimatedAssetForLanguage(t) {
            const i = (0, l.LgB)(t);
            return !!this.m_templateVars.mp4[i];
          }
          GetTemplateWebM(t) {
            const i = (0, l.LgB)(t);
            return this.m_templateVars.webm[i]?.path;
          }
          GetTemplateWebMWithFallback(t) {
            const i = (0, l.LgB)(t);
            if (this.m_templateVars.webm[i]?.path)
              return [this.m_templateVars.webm[i].path, t];
            const m = x.A0.GetELanguageFallback(t),
              h = (0, l.LgB)(m);
            return [this.m_templateVars.webm[h]?.path, m];
          }
          GetTemplateMP4(t) {
            const i = (0, l.LgB)(t);
            return this.m_templateVars.mp4[i]?.path;
          }
          GetTemplateMP4WithFallback(t) {
            const i = (0, l.LgB)(t);
            if (this.m_templateVars.mp4[i]?.path)
              return [this.m_templateVars.mp4[i].path, t];
            const m = x.A0.GetELanguageFallback(t),
              h = (0, l.LgB)(m);
            return [this.m_templateVars.mp4[h]?.path, m];
          }
          GetLegalHTML() {
            return this.GetTemplateVars().use_custom_legal_text
              ? this.GetTemplateVars().custom_legal_text
              : $(this.GetTemplateVars().partner);
          }
          get associated_item_key() {
            return this.m_associatedItemKey;
          }
          get associated_item_appid() {
            return this.m_message.associated_item(!1)?.appid();
          }
          GetAssociatedItemProto() {
            return this.m_message.associated_item(!1);
          }
        }
        ae([W.sH], D.prototype, "m_templateVars", 2);
        const I = "^(replay)([0-9]{4})";
        function H(c) {
          return c.match(I)?.[2];
        }
        function J(c) {
          if (c) {
            const t = c.match(I);
            return t?.[2] && !isNaN(Number(t?.[2]));
          }
          return !1;
        }
        function S(c) {
          return c == "mm_auto_render";
        }
        function k(c, t, i) {
          const { bIncludeSeenMessages: m, ...h } = t,
            {
              data: p,
              isLoading: b,
              isError: P,
            } = (0, e.I)({
              queryKey: [
                "MarketingMessages",
                "List",
                h,
                { bIncludeSeenMessages: !!m },
              ],
              queryFn: () => c.GetMessageList(h, m),
              ...i,
            }),
            F = M.useMemo(() => p?.map((z) => new D(z.message())), [p]),
            Y = (0, R.cv)(),
            T = M.useRef(new Set());
          return (
            Y &&
              F?.forEach((z) => {
                if (T.current.has(z.id)) return;
                const Q = z.GetAssociatedItemProto();
                Q && (Y(Q, B.sm_DefaultDataRequest), T.current.add(z.id));
              }),
            { rgMessages: b ? null : F, isError: P }
          );
        }
        function L(c, t, i) {
          const m = i?.enabled !== !1,
            { data: h } = useQuery({
              queryKey: ["MarketingMessages", "ClientParameters"],
              queryFn: async () => ({
                eOSType: await SteamClient.System.GetOSType(),
                nClientPackageVersion: GetClientPackageVersion(),
              }),
              enabled: m,
            });
          return k(c, { ...h, ...t }, { ...i, enabled: !!h && m });
        }
        function A(c, t, i) {
          const { data: m, isError: h } = (0, e.I)({
              queryKey: [
                "MarketingMessages",
                i ? "SinglePreivew" : "Single",
                t,
              ],
              queryFn: () => c.GetSingleMessage(t, i),
              enabled: !!t,
            }),
            p = M.useMemo(() => {
              if (m) {
                const F = new D(m);
                if (i) {
                  const Y = (0, _.Tc)(
                    "marketingmessage_preview_config",
                    "application_config",
                  );
                  Y?.dlc_appid_overrides?.length > 0 &&
                    F.SetDLCAppIDOverride(Y.dlc_appid_overrides),
                    Y?.recommended_appid_overrides?.length > 0 &&
                      F.SetRecommendedAppIDsOverride(
                        Y.recommended_appid_overrides,
                      );
                }
                return F;
              }
            }, [m, i]),
            b = (0, R.cv)(),
            P = M.useRef(new Set());
          if (b && p && !P.current.has(p.id)) {
            const F = p.GetAssociatedItemProto();
            F && (b(F, B.sm_DefaultDataRequest), P.current.add(p.id));
          }
          return { message: p, isError: h };
        }
        function v(c, t, i, m, h) {
          const p = y.w.Init(u.cX);
          p.Body().set_gid(t),
            p.Body().set_display_index(i),
            p.Body().set_template_type(m),
            p.Body().set_click_location(h),
            u.EO.MarkMessageClicked(c, p);
        }
      },
      32738: (G, V, s) => {
        "use strict";
        s.d(V, { NZ: () => _, g1: () => g, ho: () => u });
        var e = s(7850),
          M = s(90626),
          l = s(44930),
          j = s(3166);
        const y = M.createContext({ setLegalText: void 0 });
        function u() {
          return !!M.useContext(y).setLegalText;
        }
        function _() {
          return M.useContext(y).setLegalText || function (U) {};
        }
        function g(R) {
          const [U, W] = M.useState(),
            x = (0, l.Dp)("BrowserView.RegisterForMessageFromParent"),
            w = (0, j.Qn)(),
            K = M.useMemo(
              () => ({ setLegalText: x && !w ? W : void 0 }),
              [x, W, w],
            );
          return (0, e.jsxs)(y.Provider, {
            value: K,
            children: [x && (0, e.jsx)(N, { strLegalText: U }), R.children],
          });
        }
        function N(R) {
          const { strLegalText: U } = R,
            W = M.useRef(void 0);
          return (
            M.useEffect(() => {
              (W.current = U),
                SteamClient.BrowserView.PostMessageToParent(
                  "MarketingMessageLegal",
                  U || "",
                );
            }, [U]),
            M.useEffect(
              () =>
                SteamClient.BrowserView.RegisterForMessageFromParent((x) => {
                  x == "MarketingMessageDialogReady" &&
                    SteamClient.BrowserView.PostMessageToParent(
                      "MarketingMessageLegal",
                      W.current,
                    );
                }).unregister,
              [],
            ),
            null
          );
        }
      },
      27638: (G, V, s) => {
        "use strict";
        s.d(V, { Y: () => l });
        var e = s(90626);
        function M(j) {
          const { title: y, bodyClassName: u, children: _ } = j;
          return (
            React.useEffect(() => {
              const g = document.title;
              return (
                (document.title = y),
                () => {
                  document.title = g;
                }
              );
            }, [y]),
            l(u),
            _
          );
        }
        function l(j) {
          e.useEffect(() => {
            if (!j) return;
            const y = [];
            for (const u of j.split(/ /))
              document.body.classList.contains(u) || y.push(u);
            return (
              document.body.classList.add(...y),
              () => document.body.classList.remove(...y)
            );
          }, [j]);
        }
      },
      8736: (G, V, s) => {
        "use strict";
        s.d(V, { l: () => M });
        var e = s(18210);
        function M(l, j = "#Played_", y = !1) {
          if (l >= 120) {
            let u = l / 60;
            u = Math.round(u * 10) / 10;
            let _ = e.pf.GetPreferredLocales(),
              g = u.toLocaleString(_, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              });
            return (0, e.we)(j + "Hours", g);
          } else
            return y && l == 1
              ? (0, e.we)(j + "Minute", l)
              : (0, e.we)(j + "Minutes", l);
        }
      },
      9519: (G, V, s) => {
        "use strict";
        s.d(V, { q: () => j });
        var e = s(90626),
          M = s(30096);
        const l = 2e4;
        function j(y) {
          const u = (0, e.useRef)(!1),
            _ = (0, e.useRef)(null),
            g = (0, e.useCallback)(() => {
              _.current = setTimeout(() => {
                y.current &&
                  !y.current.paused &&
                  (y.current.pause(), (u.current = !0));
              }, l);
            }, [y]),
            N = (0, e.useCallback)(() => {
              _.current && (clearTimeout(_.current), (_.current = null)),
                y.current && u.current && (y.current.play(), (u.current = !1));
            }, [y]);
          (0, M.l6)(window, "blur", g), (0, M.l6)(window, "focus", N);
        }
      },
      53617: (G, V, s) => {
        "use strict";
        s.d(V, { FS: () => J, WN: () => H, lS: () => $, xf: () => I });
        var e = s(80902),
          M = s(35038),
          l = s(68312),
          j = s(67529),
          y = s(27386),
          u = s(98609),
          _ = s(3166),
          g = s(82734),
          N = s(90626),
          R = s(68094),
          U = s(40358),
          W = s(47875),
          x = s(72865),
          w = s(10349),
          K = s(97743),
          ae = s(94344),
          B = s(86174),
          O = s(70537);
        function $(S) {
          const k = (0, l.KV)();
          let L = (0, e.I)({
            queryKey: ["useGamePlaytimeInfo", S],
            queryFn: async () => D(S, k),
            enabled: !!(S && S != j.sc),
          });
          return L.isSuccess ? L.data : null;
        }
        async function D(S, k) {
          const L = M.w.Init(y.G9h);
          L.Body().set_steamid(u.iA.steamid),
            L.Body().set_appids_filter([S]),
            L.Body().set_include_played_free_games(!0),
            L.Body().set_language(u.TS.LANGUAGE);
          const A = await y.xtC.GetOwnedGames(k, L);
          return A.Body().games().length > 0
            ? A.Body().games()[0].toObject()
            : {};
        }
        function I(S) {
          return (0, _.Y2)() && S?.startsWith("https://store.steampowered.com/")
            ? S.replace("https://store.steampowered.com/", u.TS.STORE_BASE_URL)
            : S;
        }
        function H(S, k, L = !1) {
          let A = (0, l.KV)(),
            v = (0, ae.J)(),
            c = (0, O.Ng)();
          c = c !== null ? c + 1 : 0;
          let t;
          k == B.cU.wY
            ? (t = "image")
            : k == B.cU.xe
              ? (t = "button")
              : k == B.cU.FQ
                ? (t = "dlc_capsule")
                : k == B.cU.vx
                  ? (t = "header_area")
                  : k == B.cU.C1
                    ? (t = "game_capsule")
                    : k == B.cU.vm && (t = "partner_event");
          let i = (0, x.aL)(I(S), t);
          return (
            L && (i = S),
            i.startsWith("steam://") || (i = `steam://openurl/${i}`),
            (0, N.useCallback)(
              (h) => {
                (0, K.AP)(A, v.id, c, v.GetTemplateTypeForReporting(), k);
                let p = (0, g.uX)(h);
                p.location.href = i;
              },
              [i, A, v, c, k],
            )
          );
        }
        function J(S, k, L) {
          const A = (0, R.Jz)({ item_type: (0, w.SW)(k), id: S }),
            { data: v } = (0, U.J$)(A);
          return H((0, W._)(v) ?? u.TS.STORE_BASE_URL, L);
        }
      },
      94344: (G, V, s) => {
        "use strict";
        s.d(V, { Q: () => _s, J: () => se });
        var e = s(7850),
          M = s(99412),
          l = s(90626),
          j = s(97743),
          y = s(32738),
          u = s(3166),
          _ = s(32858),
          g = s(72865),
          N = s(53617),
          R = s(19298),
          U = s(48421),
          W = s(24179),
          x = s(98609);
        function w(o, a, n, r) {
          if (!r || !r.path) return null;
          const d = n ? "?t=" + n : "";
          return r.path.startsWith("images")
            ? `${x.TS.MEDIA_CDN_URL}steam/marketing/${o}/${r.path}${d}`
            : `${x.TS.BASE_URL_SHARED_CDN}store_item_assets/mm/${o}/${a}/${r.path}${d}`;
        }
        var K = s(30096),
          ae = s(9519);
        function B(o) {
          const { path: a, message: n, eLanguage: r, ...d } = o,
            f = n.GetTemplateVars()?.last_asset_mtime,
            E = w(n.id, r, f, { type: "file", path: a }),
            C = n.GetLocalizedAltText(r);
          return (0, e.jsx)("img", { alt: C, ...d, src: E });
        }
        function O(o) {
          const { message: a, mp4Path: n, webmPath: r, language: d, ...f } = o,
            E = a.GetTemplateVars()?.last_asset_mtime,
            C = w(a.id, d, E, { type: "file", path: r }),
            X = w(a.id, d, E, { type: "file", path: n }),
            Z = (0, l.useRef)(null);
          (0, ae.q)(Z);
          const te = (0, l.useRef)(!1),
            ne = (0, l.useCallback)(() => {
              Z.current &&
                (document.visibilityState === "visible"
                  ? te.current && (Z.current.play(), (te.current = !1))
                  : Z.current.paused || (Z.current.pause(), (te.current = !0)));
            }, []);
          return (
            (0, K.l6)(document, "visibilitychange", ne),
            (0, l.useEffect)(() => ne(), [ne]),
            (0, e.jsxs)("video", {
              ...f,
              ref: Z,
              children: [
                (0, e.jsx)("source", { src: C, type: "video/webm" }),
                (0, e.jsx)("source", { src: X, type: "video/mp4" }),
              ],
            })
          );
        }
        var $ = s(51079),
          D = s(36707),
          I = s(18210),
          H = s(720),
          J = s.n(H),
          S = s(24660),
          k = s(71742),
          L = s(86174),
          A = s(11996),
          v = s(54528),
          c = s(65946),
          t = s(40358),
          i = s(21721),
          m = s(47875),
          h = s(72838),
          p = s(48357),
          b = s(61431),
          P = s(96117),
          F = s(25792),
          Y = s(8736),
          T = s(22329);
        function z(o) {
          return (0, e.jsx)("div", {
            className: T.All,
            children: (0, e.jsx)("div", {
              className: T.MessageContent,
              children: o.children,
            }),
          });
        }
        function Q(o) {
          return (0, e.jsx)("div", {
            className: T.MessageBody,
            children: o.children,
          });
        }
        function q(o) {
          const { isBackgroundBlur: a, bOverrideUseBackgroundImage: n } = o,
            r = se(),
            d = (0, N.WN)(r.GetTemplateVars().linkurl, L.cU.wY),
            [f, E] = n ? r.GetTemplateBackgroundImage() : r.GetTemplateImage();
          return (0, e.jsx)(R.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: (0, D.A)(T.MessageImage, a && T.IsBlur),
            onActivate: d,
            children: f && (0, e.jsx)(B, { message: r, path: f, eLanguage: E }),
          });
        }
        function Te(o) {
          const { fnOnClick: a } = o,
            n = se(),
            r = (0, M.sfN)(u.TS.LANGUAGE),
            [d, f] = n.GetTemplateMP4WithFallback(r),
            [E, C] = n.GetTemplateWebMWithFallback(r);
          return (
            (0, k.wT)(
              f == C,
              `GameAnimatedImageViaVideo mismatch fallback languages eLang ${r} mp4 ${f} webm ${C}`,
            ),
            (0, e.jsx)("div", {
              className: T.VideoImageContainer,
              children: (0, e.jsx)(R.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, D.A)(T.MessageImage),
                onActivate: a,
                children: (0, e.jsx)(O, {
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                  loop: !0,
                  mp4Path: d,
                  message: n,
                  webmPath: E,
                  language: u.TS.IN_CLIENT ? C : f,
                }),
              }),
            })
          );
        }
        function ie(o) {
          const { id: a } = o,
            { data: n } = (0, t.lv)(a),
            r = n ? (0, i.b0)(n, "main_capsule") : void 0;
          return r ? (0, e.jsx)(me, { strImageURL: r }) : null;
        }
        function me(o) {
          return (0, e.jsx)("div", {
            className: (0, D.A)(T.MessageImage, T.GameImage, T.IsBlur),
            children: (0, e.jsx)("img", { src: o.strImageURL }),
          });
        }
        function de(o) {
          const { strType: a, strTitle: n, bSmallTitle: r } = o;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", { className: T.EventType, children: a }),
              (0, e.jsx)("div", {
                className: (0, D.A)(T.EventTitle, r && T.SmallTitle),
                children: n,
              }),
            ],
          });
        }
        function ve(o) {
          const { id: a, bPreview: n, bPreferAssetWithoutOverride: r } = o,
            { data: d } = (0, t.J$)(a),
            f = d?.appid,
            E = (0, u.Qn)(),
            { bIsOwned: C } = (0, W.ZJ)(a),
            X = (0, v.bB)(f),
            Z = (0, A.Fh)(f),
            te = (0, N.lS)(f ?? 0),
            ne = (0, l.useMemo)(
              () =>
                n && (!te?.playtime_forever || !te?.rtime_last_played)
                  ? {
                      playtime_forever: 300,
                      rtime_last_played:
                        Math.floor(Date.now() / 1e3) - 7200 * 60,
                    }
                  : te,
              [te, n],
            );
          let pe = "steam://openurl/" + ((0, m._)(d) ?? "");
          C &&
            f &&
            (E
              ? (pe = `steam://open/games/details/${f}`)
              : (pe = `steam://nav/games/details/${f}`));
          const xe = (0, N.WN)(pe, L.cU.vx, C);
          return (0, e.jsxs)("div", {
            className: T.BaseCtn,
            children: [
              (0, e.jsx)(S.Ii, {
                className: T.CapsuleCtn,
                onClick: xe,
                children: (0, e.jsx)(h.G, {
                  id: a,
                  bPreferLibrary: !0,
                  bPreferAssetWithoutOverride: r,
                }),
              }),
              (0, e.jsxs)("div", {
                className: T.DescCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: T.GameNameCtn,
                    children: (0, e.jsx)(S.Ii, {
                      className: T.GameName,
                      onClick: xe,
                      children: d?.name,
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: T.LibraryDetails,
                    children: [
                      (0, e.jsx)(S.Ii, {
                        onClick: xe,
                        className: (0, D.A)(T.Button, T.ViewInLibrary),
                        children: (0, I.we)(
                          C
                            ? "#EventDisplay_ViewInLibrary"
                            : "#EventDisplay_ViewStorePage",
                        ),
                      }),
                      !C &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsxs)("div", {
                            className: T.PlayDetailCtn,
                            children: [
                              X &&
                                (0, e.jsx)("span", {
                                  children: (0, I.we)(
                                    "#EventDisplay_OnWishlist",
                                  ),
                                }),
                              !X &&
                                Z &&
                                (0, e.jsx)("span", {
                                  children: (0, I.we)("#EventDisplay_Follow"),
                                }),
                            ],
                          }),
                        }),
                      C &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            !!ne?.rtime_last_played &&
                              (0, e.jsxs)("div", {
                                className: T.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, I.we)(
                                      "#MarketingMessages_DLC_lastplayed",
                                    ),
                                  }),
                                  (0, I._l)(ne.rtime_last_played),
                                ],
                              }),
                            !!ne?.playtime_forever &&
                              (0, e.jsxs)("div", {
                                className: T.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, I.we)(
                                      "#MarketingMessages_DLC_hours",
                                    ),
                                  }),
                                  (0, Y.l)(ne.playtime_forever),
                                ],
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
        function ue(o) {
          const a = se(),
            n = (0, N.WN)(a.GetTemplateVars().linkurl, L.cU.xe);
          return (0, e.jsx)(Me, {
            bHidePrice: o.bHidePrice,
            fnOnClickButton: n,
          });
        }
        function Me(o) {
          const { bHidePrice: a, fnOnClickButton: n } = o,
            r = se(),
            d = !0,
            [f, E] = (0, c.q3)(() => [
              r.GetTemplateVars().button_text_custom ||
                r.GetTemplateVars().button_text,
              !!r.GetTemplateVars().hide_price,
            ]),
            C = !!(a || E);
          return (0, e.jsxs)("div", {
            className: (0, D.A)(T.MessageFooter, !d && T.NoButton),
            children: [
              (0, e.jsxs)("div", {
                className: T.ButtonAndPriceCtn,
                children: [
                  d &&
                    (0, e.jsx)(R.Z, {
                      focusable: !0,
                      noFocusRing: !0,
                      className: T.Btn,
                      onActivate: n,
                      children: f,
                    }),
                  !C && (0, e.jsx)(F.tH, { children: (0, e.jsx)(oe, {}) }),
                ],
              }),
              (0, e.jsx)(le, {}),
            ],
          });
        }
        function oe() {
          const a = se().associated_item_key,
            { data: n } = (0, t.Q_)(a);
          return !n || !n.formatted_final_price
            ? (0, e.jsx)("div", { className: T.NoPrice })
            : (0, e.jsx)("div", {
                className: T.MessagePriceCtn,
                children: (0, e.jsx)(p.NF, { id: a, bHidePrePurchase: !0 }),
              });
        }
        function le(o) {
          const a = se();
          return (0, y.ho)()
            ? null
            : (0, e.jsx)("div", {
                className: T.Legal,
                dangerouslySetInnerHTML: { __html: a.GetLegalHTML() },
              });
        }
        function ce(o) {
          const { id: a, type: n, eClickLocation: r } = o,
            d = (0, N.FS)(a, n, r);
          return (0, e.jsx)(b.p, {
            id: a,
            type: n,
            fnOnClickOverride: d,
            bIsMarketingMessage: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function je(o) {
          const { capsule: a, imageType: n } = o;
          return (
            (a.overrideNavigation = (0, N.FS)(a.id, a.type, L.cU.FQ)),
            (0, e.jsx)(P.W, {
              capsule: a,
              imageType: n,
              bShowParentApp: !1,
              bHideStoreHover: !0,
              bPreferAssetWithoutOverride: !1,
            })
          );
        }
        var Ee = s(94162);
        function he(o) {
          const a = se();
          let n = a.GetTemplateVars().update_event_clan_accountid,
            r = a.GetTemplateVars().update_event_gid;
          const {
            eventModel: d,
            bLoading: f,
            sErrorMessage: E,
          } = (0, U.B9)(n, r, o);
          return { message: a, eventModel: d };
        }
        function _e(o) {
          const { bPreview: a, bUseAnimated: n } = o,
            { message: r, eventModel: d } = he(a),
            { data: f } = (0, t.J$)(r.associated_item_key),
            E = (0, m._)(f) ?? "",
            C = Pe(d, E, L.cU.wY),
            X = Pe(d, E, L.cU.xe);
          return (0, e.jsx)($.Ay, {
            submethod: "partner_event",
            children: (0, e.jsxs)(z, {
              children: [
                (0, e.jsx)(ie, { id: r.associated_item_key }),
                (0, e.jsxs)(Q, {
                  children: [
                    (0, e.jsx)(ve, {
                      id: r.associated_item_key,
                      bPreview: a,
                      bPreferAssetWithoutOverride: !1,
                    }),
                    (0, e.jsx)(Ae, {
                      message: r,
                      eventModel: d,
                      fnOnClickButton: C,
                      bUseAnimated: n,
                    }),
                  ],
                }),
                (0, e.jsx)(Me, { bHidePrice: !0, fnOnClickButton: X }),
              ],
            }),
          });
        }
        function Ae(o) {
          const {
              message: a,
              fnOnClickButton: n,
              eventModel: r,
              bUseAnimated: d,
            } = o,
            [f, E] = a.GetTemplateImage(),
            C = (0, M.sfN)(x.TS.LANGUAGE);
          return (0, e.jsxs)("div", {
            className: J().UpdateEventCtn,
            children: [
              (0, e.jsx)(de, {
                strType: (0, I.we)("#MarketingMessages_MajorUpdate"),
                strTitle: r?.GetNameWithFallback(C),
              }),
              (0, e.jsxs)(R.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, D.A)(J().EventImage),
                onActivate: n,
                children: [
                  f &&
                    !d &&
                    (0, e.jsx)(B, { message: a, path: f, eLanguage: E }),
                  d && (0, e.jsx)(Te, { fnOnClick: n }),
                ],
              }),
            ],
          });
        }
        function Pe(o, a, n) {
          let r = (0, W.S6)(o?.appid),
            d = (0, g.aL)((0, N.xf)(a), "partner_event");
          if (o?.BIsVisibleEvent() && r && o.BIsValidForRealm(x.TS.EREALM)) {
            const C = (0, Ee.MP)();
            x.TS.IN_CLIENT && (C > 1726604483 || C == 0)
              ? (a = `steam://open/library/event/${o.appid}|${o.GID}`)
              : ((a = `${x.TS.STORE_BASE_URL}news/app/${o.appid}?emclan=${o.clanSteamID.ConvertTo64BitString()}&emgid=${o.GID}`),
                x.TS.IN_CLIENT && (a = `steam://openurl/${a}`));
          } else
            (a = d),
              o && (a += `${d.includes("?") ? "&" : "?"}emgid=${o.GID}`),
              x.TS.IN_CLIENT && (a = `steam://openurl/${a}`);
          return (0, N.WN)(a, n, !0);
        }
        var Ge = s(41735),
          Ne = s.n(Ge),
          Ue = s(80902),
          Fe = s(72604),
          ke = s(67529);
        function Ve(o) {
          const {
            isLoading: a,
            isError: n,
            data: r,
          } = (0, Ue.I)({
            queryKey: ["useDLCHubCount", o],
            queryFn: async () => We(o),
            enabled: !!(o && o != ke.sc),
          });
          return a || n ? null : r;
        }
        async function We(o) {
          const a = `${x.TS.STORE_BASE_URL}dlc/${o}/ajaxgetdlccount`,
            n = { origin: self.origin },
            r = await Ne().get(a, { params: n, withCredentials: !1 });
          if (r.status !== 200 || r.data.success !== Fe.R)
            throw new Error(
              `FetchDLCCount failed: status == ${r.status}, eresult == ${r.data?.success}, err_msg == ${r.data?.err_msg}`,
            );
          return r.data.count;
        }
        var ee = s(16205);
        function we(o) {
          const { bPreview: a } = o,
            n = se(),
            r = (0, l.useMemo)(
              () => n.GetDLCAppIDs().map((f) => ({ id: f, type: "game" })),
              [n],
            ),
            d = Ve(n.associated_item_appid);
          return (
            (0, l.useEffect)(() => {
              if (n) {
                const f = d
                  ? (0, I.Yp)("#MarketingMessages_See_Count_Items", d)
                  : (0, I.we)("#MarketingMessages_See_All_Items");
                n.OverrideCustomText(f),
                  n.OverrideURL(
                    `${x.TS.STORE_BASE_URL}dlc/${n.associated_item_appid}`,
                  );
              }
            }, [n, d]),
            (0, e.jsx)($.Ay, {
              submethod: "dlc_override",
              children: (0, e.jsxs)(z, {
                children: [
                  (0, e.jsx)(ie, { id: n.associated_item_key }),
                  (0, e.jsxs)(Q, {
                    children: [
                      (0, e.jsx)(ve, {
                        id: n.associated_item_key,
                        bPreview: a,
                        bPreferAssetWithoutOverride: !1,
                      }),
                      (0, e.jsx)(Ke, {
                        rgDLCSaleCapsules: r,
                        messageType: n.GetType(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(ue, { bHidePrice: !0 }),
                ],
              }),
            })
          );
        }
        function Ie(o) {
          const { messageType: a, itemCount: n } = o,
            r = j.rT.GetTypeAsLocalizedString(a);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !!r && (0, e.jsx)("div", { className: ee.Type, children: r }),
              n == 1
                ? (0, e.jsx)(Le, {
                    strDesc: (0, I.we)("#MarketingMessages_DLC_desc_singular"),
                  })
                : (0, e.jsx)(Le, {
                    strDesc: (0, I.we)("#MarketingMessages_DLC_desc"),
                  }),
            ],
          });
        }
        function Ke(o) {
          const { rgDLCSaleCapsules: a, messageType: n } = o;
          return a.length >= 4
            ? (0, e.jsx)(He, {
                rgSaleCapsules: a,
                children: (0, e.jsx)(Ie, { messageType: n }),
              })
            : a.length >= 3
              ? (0, e.jsxs)("div", {
                  className: ee.DlcCtn,
                  children: [
                    (0, e.jsx)(Ie, { messageType: n }),
                    (0, e.jsx)("div", {
                      className: ee.OneItemRow,
                      children: (0, e.jsx)(ce, {
                        id: a[0].id,
                        type: a[0].type,
                        eClickLocation: L.cU.FQ,
                      }),
                    }),
                    (0, e.jsx)(Ce, { first: a[1], second: a[2] }),
                  ],
                })
              : a.length >= 2
                ? (0, e.jsxs)("div", {
                    className: ee.DlcCtn,
                    children: [
                      (0, e.jsx)(Ie, { messageType: n }),
                      (0, e.jsx)("div", {
                        className: ee.OneItemRow,
                        children: (0, e.jsx)(ce, {
                          id: a[0].id,
                          type: a[0].type,
                          eClickLocation: L.cU.FQ,
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: ee.OneItemRow,
                        children: (0, e.jsx)(ce, {
                          id: a[1].id,
                          type: a[1].type,
                          eClickLocation: L.cU.FQ,
                        }),
                      }),
                    ],
                  })
                : a.length >= 1
                  ? (0, e.jsxs)("div", {
                      className: ee.DlcCtn,
                      children: [
                        (0, e.jsx)(Ie, { messageType: n, itemCount: a.length }),
                        (0, e.jsx)("div", {
                          className: ee.OneBigItem,
                          children: (0, e.jsx)(je, {
                            capsule: a[0],
                            imageType: "main",
                          }),
                        }),
                      ],
                    })
                  : null;
        }
        function He(o) {
          const { rgSaleCapsules: a, children: n } = o;
          return (0, e.jsxs)("div", {
            className: ee.DlcCtn,
            children: [
              n,
              (0, e.jsx)(Ce, { first: a[0], second: a[1] }),
              (0, e.jsx)(Ce, { first: a[2], second: a[3] }),
            ],
          });
        }
        function Le(o) {
          return (0, e.jsx)("div", {
            className: ee.DealDesc,
            children: o.strDesc,
          });
        }
        function Ce(o) {
          const { first: a, second: n } = o;
          return (0, e.jsxs)("div", {
            className: ee.TwoCapsuleRow,
            children: [
              (0, e.jsx)("div", {
                className: ee.DlcCtn,
                children: (0, e.jsx)(je, { capsule: a, imageType: "header" }),
              }),
              (0, e.jsx)("div", {
                className: ee.DlcCtn,
                children: (0, e.jsx)(je, { capsule: n, imageType: "header" }),
              }),
            ],
          });
        }
        var ze = s(36118),
          Be = s(53113),
          De = s(31343);
        function Qe(o) {
          const a = se(),
            [n, r] = (0, l.useState)(() => a.GetFeaturedVideoAutoPlay()),
            d = (0, l.useRef)(null);
          (0, ae.q)(d);
          const f = (0, N.WN)(a.GetTemplateVars().linkurl, L.cU.wY),
            E = (0, u.Qn)();
          return (0, e.jsx)(R.Z, {
            focusable: !0,
            noFocusRing: !0,
            onActivate: (C) =>
              !E && a.GetFeaturedVideoAutoPlay() ? f(C) : r(!0),
            className: De.PosterCtn,
            children: n
              ? (0, e.jsxs)("video", {
                  controls: !a.GetFeaturedVideoLoop(),
                  ref: d,
                  muted: !0,
                  autoPlay: !0,
                  className: De.Video,
                  loop: a.GetFeaturedVideoLoop(),
                  crossOrigin: "anonymous",
                  children: [
                    (0, e.jsx)("source", {
                      src: (0, Be.L$)(a.GetFeaturedVideoWebMURL()),
                      type: "video/webm",
                    }),
                    !x.TS.IN_CLIENT &&
                      (0, e.jsx)("source", {
                        src: (0, Be.L$)(a.GetFeaturedVideoMP4URL()),
                        type: "video/mp4",
                      }),
                    (0, e.jsx)($e, { message: a }),
                  ],
                })
              : (0, e.jsx)(Ye, { message: a }),
          });
        }
        function Ye(o) {
          const { message: a } = o,
            n = a.GetTemplateVars()?.last_asset_mtime,
            [r, d] = a.GetPosterImage(),
            f = w(a.id, d, n, { type: "file", path: r });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("img", { src: f, className: De.Poster }),
              (0, e.jsx)(ze.IOc, {}),
            ],
          });
        }
        function $e(o) {
          const { message: a } = o,
            n = (0, l.useMemo)(() => {
              const r = a.GetSubtitleObj(),
                d = a.GetTemplateVars()?.last_asset_mtime,
                f = new Array();
              for (let E = M.Bhc; E < M.bP9; ++E) {
                if (!I.A0.IsELanguageValidInRealm(E, x.TS.EREALM)) continue;
                const C = (0, M.LgB)(E);
                if (r && r[C]) {
                  const X = r[C].path,
                    Z = w(a.id, E, d, { type: "file", path: X });
                  f.push(
                    (0, e.jsx)(
                      "track",
                      {
                        src: Z,
                        kind: "subtitles",
                        srcLang: (0, M.wwZ)(E),
                        default: x.TS.LANGUAGE == C,
                        label: (0, I.we)(
                          "#language_selection_" + (0, M.LgB)(E),
                        ),
                      },
                      a.id + " " + E,
                    ),
                  );
                }
              }
              return f;
            }, [a]);
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function Je(o) {
          const { bLowBandwidthMode: a } = o,
            n = se(),
            r = !a && n.GetTemplateVars().custom_display === "featured_video";
          return (0, e.jsx)($.Ay, {
            children: (0, e.jsxs)(z, {
              children: [
                (0, e.jsx)(q, {
                  isBackgroundBlur: !0,
                  bOverrideUseBackgroundImage: r,
                }),
                (0, e.jsxs)(Q, {
                  children: [
                    (0, e.jsx)(q, { bOverrideUseBackgroundImage: r }),
                    !!r && (0, e.jsx)(Qe, {}),
                  ],
                }),
                (0, e.jsx)(ue, {}),
              ],
            }),
          });
        }
        function Ze(o) {
          const a = se(),
            n = (0, N.WN)(a.GetTemplateVars().linkurl, L.cU.vm);
          return (0, e.jsx)($.Ay, {
            children: (0, e.jsxs)(z, {
              children: [
                (0, e.jsx)(q, { isBackgroundBlur: !0 }),
                (0, e.jsx)(Q, { children: (0, e.jsx)(Te, { fnOnClick: n }) }),
                (0, e.jsx)(ue, {}),
              ],
            }),
          });
        }
        var Oe = s(87937),
          Xe = s(86048),
          qe = s(41188),
          es = s(64457),
          ss = s(48963),
          re = s.n(ss),
          ts = s(25046),
          as = s(85599),
          ns = s(76532),
          ye = s.n(ns),
          rs = s(71421),
          is = s(67705);
        function os(o) {
          const { id: a } = o,
            { data: n } = (0, t.J$)(a),
            r = (0, l.useMemo)(() => {
              if (!n) return [];
              const d =
                n.categories?.supported_player_categoryids?.slice(0, 1) || [];
              return (
                n.categories?.feature_categoryids?.forEach((f) => d.push(f)),
                n.categories?.controller_categoryids?.forEach((f) => d.push(f)),
                n.categories?.supported_player_categoryids
                  ?.slice(1)
                  .forEach((f) => d.push(f)),
                d
              );
            }, [n]);
          return !r || r.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: (0, D.A)(ye().SaleTagBlockCtn, "SaleTagBlockCtn"),
                children:
                  r?.length > 0
                    ? (0, e.jsx)("div", {
                        className: (0, D.A)(ye().TagBox, ye().Categories),
                        children: r.map((d) =>
                          (0, e.jsx)(ls, { categoryID: d }, "cat_" + d),
                        ),
                      })
                    : (0, e.jsx)("div", {
                        children: (0, I.we)("#Broadcast_None"),
                      }),
              });
        }
        class fe {
          m_rgCategories;
          constructor() {
            this.m_rgCategories = (0, is.Tc)(
              "feature_categories",
              "application_config",
            );
          }
          static g_Self = null;
          static Get() {
            return fe.g_Self || (fe.g_Self = new fe()), fe.g_Self;
          }
        }
        function ls(o) {
          const { categoryID: a } = o,
            n = fe.Get().m_rgCategories.find((r) => r.categoryid == a);
          return n
            ? (0, e.jsx)("div", {
                className: ye().Category,
                children: (0, e.jsx)(rs.he, {
                  toolTipContent: n.name,
                  children: (0, e.jsx)("div", {
                    className: ye().CategoryIcon,
                    style: {
                      background: `url(${x.TS.STORE_CDN_URL}/public/images/${n.image_path}) no-repeat center center/cover`,
                    },
                  }),
                }),
              })
            : null;
        }
        function cs(o) {
          const {
              id: a,
              fnOnClickButton: n,
              bLowBandwidthMode: r,
              bUseAssetWithoutOverride: d,
            } = o,
            { data: f } = (0, t.j4)(a),
            { data: E } = (0, t.J$)(a),
            C = (0, ts.kB)(a);
          return !f || !E
            ? (0, e.jsx)("div", {
                className: (0, D.A)(re().HilightGrid, re().MediaContainerMM),
                children: (0, e.jsx)(as.t, { size: "medium" }),
              })
            : (0, e.jsx)("div", {
                className: (0, D.A)(re().HilightGrid, re().MediaContainerMM),
                children: (0, e.jsx)(es._t, {
                  id: a,
                  elFeaturedInCenter: (0, e.jsx)(ms, {
                    id: a,
                    bUseAssetWithoutOverride: !!d,
                    fnOnClickButton: n,
                  }),
                  trailer: C && C.length > 0 ? C[0] : void 0,
                  storeItemScreenshots: f,
                  bUseTrailerAsFirstThumb: !r,
                  bNoScreenShotModals: !0,
                  name: E.name || "",
                }),
              });
        }
        function ms(o) {
          const { id: a, fnOnClickButton: n, bUseAssetWithoutOverride: r } = o,
            [, d] = (0, Xe.OP)(),
            { data: f } = (0, t.lv)(a, r),
            { data: E } = (0, t.J$)(a),
            { data: C } = (0, t.wl)(a),
            { data: X } = (0, t.xz)(a);
          if (!f || !C || !E) return null;
          const Z = (0, i.b0)(f, "main_capsule");
          return (0, e.jsxs)(R.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: re().MainCapsuleWithHover,
            ...d,
            onActivate: n,
            children: [
              (0, e.jsx)("img", {
                className: re().MainCapsule,
                src: Z,
                alt: E.name || "",
              }),
              (0, e.jsxs)("div", {
                className: re().AppDetails,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, D.A)(re().GameName),
                    children: E.name || "",
                  }),
                  (0, e.jsxs)("div", {
                    className: re().ShortDesc,
                    children: [C.short_description, " "],
                  }),
                  (0, e.jsx)(qe.n, {
                    rgTagIDs: X
                      ? X.slice(0, 10).map((te) => te.tagid || 0)
                      : [],
                    instanceNum: 0,
                    bLargeText: !0,
                    bHideTitle: !0,
                    bNoStoreLinks: !0,
                  }),
                  (0, e.jsx)(os, { id: a }),
                ],
              }),
            ],
          });
        }
        var ds = s(6698),
          us = s(92264),
          ge = s(92609),
          Se = s(179);
        function gs(o) {
          const { bPreview: a, bLowBandwidthMode: n } = o,
            r = se(),
            d = (0, N.WN)(r.GetTemplateVars().linkurl, L.cU.C1),
            f = r.associated_item_key;
          return (0, e.jsx)($.Ay, {
            submethod: "mm-auto-render",
            children: (0, e.jsxs)(z, {
              children: [
                (0, e.jsx)(ie, { id: f }),
                (0, e.jsx)(Q, {
                  children: (0, e.jsxs)("div", {
                    className: ge.AutoRenderContents,
                    children: [
                      (0, e.jsxs)("div", {
                        className: ge.TitleContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: ge.TypeTitle,
                            children: j.rT.GetTypeAsLocalizedString(
                              r.GetType(),
                            ),
                          }),
                          (0, e.jsx)(hs, { message: r, id: f }),
                        ],
                      }),
                      (0, e.jsx)(ds.oj, {
                        appid: r.associated_item_appid,
                        children: (0, e.jsx)(cs, {
                          id: f,
                          fnOnClickButton: d,
                          bLowBandwidthMode: n,
                          bUseAssetWithoutOverride:
                            r.GetAutoRenderWithoutAssetOverrides(),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)(Me, {
                  bHidePrice: r.GetTemplateVars().hide_price,
                  fnOnClickButton: d,
                }),
              ],
            }),
          });
        }
        function hs(o) {
          const { message: a, id: n } = o,
            { data: r } = (0, t.J$)(n),
            d = r?.free_weekend,
            [f] = (0, Se.QD)("timezone"),
            [E] = (0, Se.QD)("locale");
          if (a.GetType() == L.D4.SK) {
            if (d?.text)
              return (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: d.text,
              });
            if (d?.end_time) {
              E && I.pf.SetPreferredLocales([E]);
              const Z = f || Intl.DateTimeFormat().resolvedOptions().timeZone,
                te = d.end_time,
                ne = Oe.unix(te).tz(Z),
                pe = ne.format("z"),
                xe = pe.match(/^-?\d/)
                  ? `UTC${Oe.unix(te).tz(Z).format("Z").replace(":00", "")}`
                  : pe,
                be = (0, us.P0)(ne.unix(), !1, xe, f);
              return (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: (0, I.we)("#msg_free_play_until", be),
              });
            } else
              return (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: (0, I.we)("#msg_free_play_weekend"),
              });
          }
          const X = a.GetTemplateVars()?.autorender_subtitle_token;
          return X
            ? (0, e.jsx)("div", {
                className: ge.TypeSubTitle,
                children: (0, I.we)(X),
              })
            : null;
        }
        const Re = l.createContext(null);
        function se() {
          return l.useContext(Re);
        }
        function _s(o) {
          const { message: a, preview: n } = o,
            r = o.active !== !1,
            d = (0, y.NZ)();
          return (
            l.useEffect(() => {
              r && d(a.GetLegalHTML());
            }, [r, a, d]),
            (0, e.jsx)(Re.Provider, {
              value: a,
              children: (0, e.jsx)(l.Suspense, {
                fallback: null,
                children: (0, e.jsx)(ps, { message: a, active: r, preview: n }),
              }),
            })
          );
        }
        const fs = l.lazy(() =>
          Promise.all([s.e(75976), s.e(8287)]).then(s.bind(s, 72795)),
        );
        function ps(o) {
          const { message: a, active: n, preview: r } = o,
            d = (0, M.sfN)(u.TS.LANGUAGE),
            { bLowBandwidthMode: f } = (0, _.ri)();
          if (
            (0, j.$I)(a.GetTemplateVars().custom_display || "") &&
            u.iA.logged_in
          ) {
            const C = Number(
              (0, j.fL)(a.GetTemplateVars().custom_display || ""),
            );
            return isNaN(C) ? null : (0, e.jsx)(fs, { active: n, year: C });
          }
          switch (a.GetTemplateVars().custom_display) {
            case "dlc_override":
              return (0, e.jsx)(we, { bPreview: r });
            case "partner_event":
              return (0, e.jsx)(_e, {
                bPreview: r,
                bUseAnimated: (0, _.vn)(a, d, f),
              });
            case "mm_auto_render":
              return (0, e.jsx)(gs, { bPreview: r, bLowBandwidthMode: f });
          }
          return a.GetTemplateType() === "image"
            ? (0, _.vn)(a, d, f)
              ? (0, e.jsx)(Ze, {})
              : (0, e.jsx)(Je, { bLowBandwidthMode: f })
            : null;
        }
      },
      70537: (G, V, s) => {
        "use strict";
        s.d(V, { Mf: () => $, Ng: () => O, eI: () => J });
        var e = s(7850),
          M = s(97743),
          l = s(90626),
          j = s(92757),
          y = s(16412),
          u = s(18210),
          _ = s(32858),
          g = s(84121),
          N = s.n(g),
          R = s(36118),
          U = s(36707),
          W = s(90740),
          x = s(27638),
          w = s(85599),
          K = s(94344);
        const ae = 8,
          B = l.createContext(null);
        function O() {
          return l.useContext(B);
        }
        function $(A) {
          const { MarketingMessagesStore: v } = A,
            c = (0, _.ri)(),
            { rgMessages: t, isError: i } = (0, M.XW)(v, c),
            [m, h] = l.useState(!1),
            [p, b] = l.useState(0);
          (0, x.Y)(g.MarketingMessagePage);
          const P = (0, j.W6)();
          if (
            (l.useEffect(() => {
              t &&
                !t.length &&
                !i &&
                (c.bIncludeSeenMessages
                  ? h(!0)
                  : P.replace({
                      ...P.location,
                      search: (0, _.GY)({ ...c, bIncludeSeenMessages: !0 }),
                    }));
            }, [t, c, P, i]),
            i)
          )
            return (0, e.jsx)(S, {
              children: (0, u.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (m)
            return (0, e.jsx)(S, {
              children: (0, u.we)("#MarketingMessages_NoneAvailable"),
            });
          const F = c.bIncludeSeenMessages ? t : t?.slice(0, ae);
          return (0, e.jsxs)("div", {
            className: g.MessageListPage,
            children: [
              (0, e.jsx)("div", {
                className: g.MessageListScroll,
                children: (0, e.jsx)(D, {
                  MarketingMessagesStore: v,
                  rgMessages: F,
                  iActiveMessage: p,
                }),
              }),
              (0, e.jsx)(I, {
                cMessages: F?.length,
                iMessage: p,
                setMessage: b,
              }),
            ],
          });
        }
        function D(A) {
          const {
            MarketingMessagesStore: v,
            rgMessages: c,
            iActiveMessage: t,
          } = A;
          return c
            ? (0, e.jsx)("div", {
                className: g.MessageListContainer,
                children: c?.map((i, m) =>
                  (0, e.jsx)(
                    L,
                    {
                      displayIndex: m,
                      message: i,
                      MarketingMessagesStore: v,
                      active: m == t,
                      next: m == t + 1 || m == t - 1,
                    },
                    i.id,
                  ),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, U.A)(g.MessageListContainer, g.Loading),
                children: (0, e.jsx)(w.t, {
                  size: "xxlarge",
                  msDelayAppear: 500,
                }),
              });
        }
        function I(A) {
          const { cMessages: v, iMessage: c, setMessage: t } = A,
            i = l.useCallback(() => t(c - 1), [t, c]),
            m = l.useCallback(() => t(c + 1), [t, c]),
            h = [];
          for (let P = 0; P < v; P++)
            h.push(
              (0, e.jsx)(H, { active: P == c, iMessage: P, setMessage: t }, P),
            );
          const p = c > 0 ? i : void 0,
            b = c < v - 1 ? m : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", { className: g.CarouselSpacer }),
              (0, e.jsx)("div", {
                className: g.CarouselBar,
                children: (0, e.jsxs)("div", {
                  className: g.Content,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, U.A)(g.LeftArrow, p && g.Active),
                      onClick: p,
                      children: (0, e.jsx)(R.l8x, { angle: 180 }),
                    }),
                    (0, e.jsx)("div", { className: g.Spacer }),
                    (0, e.jsx)("div", {
                      className: g.PipContainer,
                      children: (0, e.jsx)("div", {
                        className: g.Pips,
                        children: h,
                      }),
                    }),
                    (0, e.jsx)("div", { className: g.Spacer }),
                    (0, e.jsx)("div", {
                      className: (0, U.A)(g.LeftArrow, b && g.Active),
                      onClick: b,
                      children: (0, e.jsx)(R.l8x, { angle: 0 }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function H(A) {
          const { active: v, iMessage: c, setMessage: t } = A,
            i = l.useCallback(() => t(c), [t, c]);
          return (0, e.jsx)("div", {
            className: (0, U.A)(g.Pip, v && g.Active),
            onClick: i,
          });
        }
        function J(A) {
          const { MarketingMessagesStore: v, preview: c } = A,
            t = (0, j.W5)(),
            { message: i, isError: m } = (0, M.dr)(v, t.params.messageid, c);
          return (
            (0, x.Y)(g.MarketingMessagePage),
            m
              ? (0, e.jsx)(S, {
                  children: (0, u.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : t.params.messageid
                ? i
                  ? (0, e.jsx)(K.Q, { message: i, preview: c })
                  : null
                : (0, e.jsx)(S, {
                    children: (0, u.we)("#MarketingMessages_NoneAvailable"),
                  })
          );
        }
        function S(A) {
          return (0, e.jsxs)(y.UC, {
            style: { maxWidth: "400px", margin: "0 auto" },
            children: [
              (0, e.jsxs)(y.Y9, {
                children: [(0, u.we)("#Error_Generic"), " "],
              }),
              (0, e.jsx)(y.nB, { children: A.children }),
            ],
          });
        }
        function k(A, v, c) {
          l.useEffect(() => {
            v &&
              A.MarkMessageSeen(v.id, c + 1, v.GetTemplateTypeForReporting());
          }, [v, A, c]);
        }
        function L(A) {
          const {
              message: v,
              MarketingMessagesStore: c,
              active: t,
              next: i,
              displayIndex: m,
            } = A,
            h = l.useRef(void 0),
            p = l.useRef(t || i);
          if ((k(c, t ? v : null, m), (t || i) && (p.current = !0), !p.current))
            return null;
          let b = {
            enter: g.Enter,
            enterActive: g.EnterActive,
            enterDone: g.EnterDone,
            exit: g.Exit,
            exitActive: g.ExitActive,
            exitDone: g.ExitDone,
          };
          return (0, e.jsx)(W.A, {
            in: t,
            nodeRef: h,
            classNames: b,
            timeout: 300,
            mountOnEnter: !i,
            unmountOnExit: !i,
            children: (0, e.jsx)(B.Provider, {
              value: m,
              children: (0, e.jsx)("div", {
                className: (0, U.A)(g.MessageWrapper, t && g.Active),
                ref: h,
                children: (0, e.jsx)(K.Q, { message: v, active: t }),
              }),
            }),
          });
        }
      },
      32858: (G, V, s) => {
        "use strict";
        s.d(V, { GY: () => y, ri: () => j, vn: () => u });
        var e = s(90626),
          M = s(92757),
          l = s(18210);
        function j() {
          const _ = (0, M.zy)();
          return e.useMemo(() => {
            const g = new URLSearchParams(_.search);
            return {
              bIncludeSeenMessages: !!g.get("include_seen"),
              nClientPackageVersion: parseInt(
                g.get("client_package_version") || "0",
              ),
              eOSType: parseInt(g.get("os_type") || "0"),
              bLowBandwidthMode: !!g.get("low_bandwidth"),
            };
          }, [_.search]);
        }
        function y(_) {
          const g = new URLSearchParams();
          return (
            _.bIncludeSeenMessages && g.append("include_seen", "1"),
            _.nClientPackageVersion &&
              g.append(
                "client_package_version",
                _.nClientPackageVersion.toString(),
              ),
            _.eOSType && g.append("os_type", _.eOSType.toString()),
            _.bLowBandwidthMode && g.append("low_bandwidth", "1"),
            g.toString()
          );
        }
        function u(_, g, N) {
          if (!N && _.BHasTemplateAnimatedAssets()) {
            const R = l.A0.GetELanguageFallback(g);
            return (
              _.BHasTemplateAnimatedAssetForLanguage(g) ||
              _.BHasTemplateAnimatedAssetForLanguage(R)
            );
          }
          return !1;
        }
      },
      35330: (G, V, s) => {
        "use strict";
        s.r(V), s.d(V, { MarketingMessageRoutes: () => K, default: () => ae });
        var e = s(7850),
          M = s(58732),
          l = s(90626),
          j = s(92757),
          y = s(67705);
        const u = l.createContext({ prioritized_list: !1 });
        function _(D) {
          const [I, H] = l.useState(),
            J = (0, j.zy)(),
            S = l.useMemo(() => {
              const k = new URLSearchParams(J.search);
              return {};
            }, [J.search]);
          return (
            l.useEffect(() => {
              const k = (0, y.Tc)(
                "marketingmessage_config",
                "application_config",
              );
              H({});
            }, [S]),
            I
              ? (0, e.jsxs)(u.Provider, {
                  value: I,
                  children: [D.children, " "],
                })
              : null
          );
        }
        var g = s(70537),
          N = s(68312),
          R = s(3685),
          U = s(97743),
          W = s(32738),
          x = s(51079),
          w = s(3166);
        const K = {
          List: () => `${M.B.MarketingMessages()}list/`,
          Message: (D) => `${M.B.MarketingMessages()}${D}`,
          MessagePreview: (D) => `${M.B.MarketingMessages()}preview/${D}`,
        };
        function ae(D) {
          const I = $();
          return I
            ? (0, e.jsx)(x.Ay, {
                domain: "store.steampowered.com",
                controller: "message",
                method: "default",
                children: (0, e.jsx)(_, {
                  children: (0, e.jsx)(W.g1, {
                    children: (0, e.jsxs)(j.dO, {
                      children: [
                        (0, e.jsx)(j.qh, {
                          path: `${K.List()}`,
                          children: (0, e.jsx)(g.Mf, {
                            MarketingMessagesStore: I,
                          }),
                        }),
                        (0, e.jsx)(j.qh, {
                          path: `${K.MessagePreview(":messageid")}`,
                          children: (0, e.jsx)(g.eI, {
                            MarketingMessagesStore: I,
                            preview: !0,
                          }),
                        }),
                        (0, e.jsx)(j.qh, {
                          path: `${K.Message(":messageid")}`,
                          children: (0, e.jsx)(g.eI, {
                            MarketingMessagesStore: I,
                          }),
                        }),
                        (0, e.jsx)(j.qh, {
                          children: (0, e.jsx)(j.rd, { to: `${K.List()}` }),
                        }),
                      ],
                    }),
                  }),
                }),
              })
            : null;
        }
        let B;
        function O(D) {
          if (!B) {
            const I = (0, w.Tc)(
              "marketingmessage_config",
              "application_config",
            );
            if (((B = new U.Nt(D)), I?.promotion_operation_token)) {
              const H = new R.D(
                w.TS.WEBAPI_BASE_URL,
                I.promotion_operation_token,
              );
              B.SetSteamInterfacePromotions(H);
            }
          }
          return B;
        }
        function $() {
          const [D, I] = l.useState(null),
            H = (0, N.TR)();
          return (
            l.useEffect(() => {
              D || I(O(H));
            }, [D, H]),
            D
          );
        }
      },
      48963: (G) => {
        G.exports = {
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
      84121: (G) => {
        G.exports = {
          MarketingMessagePage: "_1HVoKfdcaouK3kHKX2kH5t",
          MessageListPage: "_1N7O3VXbkpN2z55HsSDZsi",
          MessageListScroll: "_2RW7G8Bi-8k-29anQh8Ie8",
          CarouselBar: "O7VJKyPtoS7TXCr6mrwCr",
          Content: "_1qtg3ASXX4ClYiTHPq9Tkl",
          LeftArrow: "_3ZyZUkBq73dLvZ6zKdM9PQ",
          RightArrow: "_2WuPusSmjw_B4rfkgb-NV8",
          Active: "cwA5j4AsP5OB7WjWuOlFv",
          Spacer: "COvXCP3wZxk_s1ho7e3WO",
          PipContainer: "_3ASpk2zuTuDhIXKorFGF_L",
          Pips: "_1rpuGJtVR-xrddd9ui6IWu",
          Pip: "ZQrtMhZB1tpkd2bgBXyIF",
          MessageListContainer: "_33cf4TnmCK5XdTjanW9bVf",
          Loading: "_1xSKZdDmIvXYCmFif6fSAq",
          MessageWrapper: "_152h7KWYvm_9hIyzRzh8kl",
          Enter: "DZICERQkVmyCBP2E-PwlH",
          EnterActive: "RU-xm1VaMHf9H7o1TFkVO",
          EnterDone: "_3AP2YQ_mKZF-H78sMt3rKC",
          Exit: "_2xmDIRYN5Pu_eHRMjWop63",
          ExitActive: "_32DFHj9NmyNtEK-3K3nKuX",
          ExitDone: "_3cFXRpyI9jrZ2qCySg3fiT",
        };
      },
      92609: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          AutoRenderContents: "_1H1L2spV-tto6AJmQMSfsA",
          TitleContainer: "_2iA76-Eh1ID-HXFGGR5BoH",
          TypeTitle: "klzItvORTtJ0Eeg8ArDrN",
          TypeSubTitle: "QPZq6bu7lf50YpRKZgPCc",
          BackgroundAnimation: "_13qwvch-5kbKbOaRivhMXc",
          "ItemFocusAnim-darkerGrey-nocolor": "_3DNhNNrE4iKRi60PdXWepo",
          "ItemFocusAnim-darkerGrey": "_15lW83rYVxUKmbx_X2Huiw",
          "ItemFocusAnim-darkGreySettings": "_2-gDTKZjm9Ajq5sJ9tSPUR",
          "ItemFocusAnim-darkGrey": "_3HGF0obZAs6s2bNbYpM7qW",
          "ItemFocusAnim-grey": "_3YpbyrBpBdoe0gBRw1Hbqx",
          "ItemFocusAnim-translucent-white-10": "_30y8LayXh8jUHdaxQlL0ZS",
          "ItemFocusAnim-translucent-white-20": "_27U6YkfThQDFTGvax-gmlu",
          "ItemFocusAnimBorder-darkGrey": "_2JbY6SYVtLg0XfAcDsFaMR",
          "ItemFocusAnim-green": "_3976kBFFMdgKDnNELLMM6G",
          focusAnimation: "SzNeb_49-6eaLunS7L3C",
          hoverAnimation: "_1ji7N9JSTyeK_qtueFlYQi",
        };
      },
      720: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          UpdateEventCtn: "_3ICxVDu3-Bkx9aqyLehGGP",
          EventImage: "zDfA0bzAjCUkfaQx_KvS7",
          BackgroundAnimation: "OTs9Tg4QxhQ0Y_QNGDDt9",
          "ItemFocusAnim-darkerGrey-nocolor": "_1NdRyUGS8v6vgPO4so1xTw",
          "ItemFocusAnim-darkerGrey": "_2pygTjxugmVCyf_AACiIV9",
          "ItemFocusAnim-darkGreySettings": "_2k7FRzOjQym6IuES_SDcJs",
          "ItemFocusAnim-darkGrey": "_3znWC1DynbIfoAl5wwBaoo",
          "ItemFocusAnim-grey": "_2oa-LIlworjV0-bg_CQfoy",
          "ItemFocusAnim-translucent-white-10": "i9BFCko5sTUsKunkoSgIG",
          "ItemFocusAnim-translucent-white-20": "_2XDvVDTKofCXGIqRPg15Bt",
          "ItemFocusAnimBorder-darkGrey": "_3rZ3pu0VIsvlLePQQSHFLd",
          "ItemFocusAnim-green": "_2vAKcsXEpb9snlDyeK82te",
          focusAnimation: "_2I7fW0qyN3vk4sB9-UXHBH",
          hoverAnimation: "_1TlYxkxN-WZNFNjoM2t3Ha",
        };
      },
      16205: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          BackgroundImage: "_3vQ5a1hrg4SbTU1Uw3351z",
          DlcCtn: "_3H7i0ChQjoGWieNRcKmYea",
          Type: "HmoaKPBZvHxysTOtEt6I_",
          DealDesc: "_3fPQtBXFQwL3xrK4zmpmyq",
          OneItemRow: "_6a9d-uI8VyQTmWHS3vFI-",
          OneBigItem: "_2lKQioAzojICHeg5SX6fhc",
          TwoCapsuleRow: "_1s9-9e_1KjO0xTTJNj-KuT",
          BackgroundAnimation: "MAJyK9QcMypCZbMYmoLHu",
          "ItemFocusAnim-darkerGrey-nocolor": "_2IE90ljBHRp1SITs86XIYT",
          "ItemFocusAnim-darkerGrey": "_3Izi4xp4tar8pwj5nAAAJx",
          "ItemFocusAnim-darkGreySettings": "_1AXb9HQ7EwT6k-c4TWuD6b",
          "ItemFocusAnim-darkGrey": "_17XlJo9wQvFGnl_mC2sDDP",
          "ItemFocusAnim-grey": "_2_GD3bdKzrHkm2Ldb6tVut",
          "ItemFocusAnim-translucent-white-10": "_31VDSRuwtIPGNRsMsAiiuS",
          "ItemFocusAnim-translucent-white-20": "RpA2APZ8BdkDDu88M1t99",
          "ItemFocusAnimBorder-darkGrey": "_1JoYgnM2uNiTB2PbeAfe-S",
          "ItemFocusAnim-green": "_2cI4C5AH9C-VNLXQyhLoZE",
          focusAnimation: "_1kz2gc1Q6nZYfgugTIMxpo",
          hoverAnimation: "_2Kc7YeIDyVeYMtcdglCErh",
        };
      },
      31343: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          PosterCtn: "_24bJJZ8-xr8Et4DVUrr17J",
          Poster: "_3LbyxomxMvYMy7cLThkkIf",
          Video: "_2bH_Jxh-T2YFCPBCW_pvQB",
          BackgroundAnimation: "fmJwkjLpps2lTYiDhuZaS",
          "ItemFocusAnim-darkerGrey-nocolor": "_3P7eXvQeL41e2U1Dlf-o3y",
          "ItemFocusAnim-darkerGrey": "_1ox1csOfGebwxpQWCIrD8r",
          "ItemFocusAnim-darkGreySettings": "_1edLKf573MLIIzXMGDJQuk",
          "ItemFocusAnim-darkGrey": "_20nB-hQDWUFRiLXleHcpCi",
          "ItemFocusAnim-grey": "_3izRpxwl4_d_Vxa1pgYMiA",
          "ItemFocusAnim-translucent-white-10": "_1hhQO02787EOl9eQ9AMGYY",
          "ItemFocusAnim-translucent-white-20": "Y9TgOYN31D-9Nr_0YqCTN",
          "ItemFocusAnimBorder-darkGrey": "_3vZR4wYNZIWMbiwF5nGGUP",
          "ItemFocusAnim-green": "_1rcnmgd1hOIPA9f3ngfevA",
          focusAnimation: "_3uCspaHoybU11f9AiHQU-o",
          hoverAnimation: "fLko22pxQFa4_xcoc8AEf",
        };
      },
      22329: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          All: "_1Ihp0wKLvNYkePQe0VrHnC",
          MessageFooter: "_3t5WMbFCdjhi0jY_LsEmHU",
          ButtonAndPriceCtn: "_1ZbewdWkMfyxa_PdVDMoDU",
          Legal: "_2_eDs58X0eEznR-ukDC_qt",
          NoButton: "_3IuUvJa9v9WI7_4WCI8-5t",
          Btn: "_3J3L60oPKSSmfBrQoNzGka",
          MessagePriceCtn: "_2g5STEIbDalv8hDLrPF3f-",
          Price: "G3m3RKwAqO-NG8_dvnifU",
          NoPrice: "_3fIuqvgfN6oD_bvpdHWEl8",
          PriceReal: "_14BApLFAAyKDCTSv-FU3cM",
          PriceRealShort: "_1E4sfQ48HHNa1aVRVPso3t",
          PriceRegular: "lhwy7sGWsQ0H-qiGzBfVO",
          Strike: "_3zM6T8KcphlmjOBnyqYGi0",
          MessageContent: "_2OxhXhvrpr4BL-kq6s7Eov",
          IsBlur: "_1M-oJo6Qwi_taE9-LcUQXw",
          MessageBody: "yNkHDKSU1gO-i7O8pRwGb",
          MessageImage: "_3R5wv6ya3QU6VH7qq2819z",
          VideoImageContainer: "_2yR5YNB4D48KDMaHJC7ELs",
          GameImage: "_1YhdlZrF81fOxpD5J2tD7o",
          EventType: "_1kBtSqsFkkixOn9MlYuuTa",
          EventTitle: "_2WtqvOJO09bKKgVvJYV_7q",
          SmallTitle: "M0i1HNwFwWUb2fshnV5cu",
          BaseCtn: "_6Tfttc004NhLDjbTDS9PC",
          CapsuleCtn: "bSrl3b6Qz1HKSithRsqvM",
          DescCtn: "_20PKe9KJTJC5SAbLi4Dy-Y",
          GameNameCtn: "kgQI2KVBs-Y3neqiTpbvQ",
          GameName: "QFFkjL-A27JtOIgIqO5dH",
          LibraryDetails: "_1ddC4grHqe7uggEE2cihEv",
          Button: "_2T5KnJO7YB00MG9YIyfImx",
          ViewInLibrary: "_3he9kmZ7_zW9VD6jkZAb1N",
          PlayDetailCtn: "J3BmO963EVK__A5VRDAQM",
          TextTop: "_3eCgYrG63hATLNUS2prQdu",
          TextBottom: "_3-KPIEC01O5ncvCQdfuTum",
          ButtonContainer: "_10sC9pDV-gUZWLDMtbWFpZ",
          BackgroundAnimation: "iazxtC_6xsy3ZAlQoiLly",
          "ItemFocusAnim-darkerGrey-nocolor": "_2cB4L3LYRmW8ZPhM1KmIiK",
          "ItemFocusAnim-darkerGrey": "ydW4ABxqu6OYOVnY28tB8",
          "ItemFocusAnim-darkGreySettings": "_4i8hDH1Gg-f_tUZZ4Zp5",
          "ItemFocusAnim-darkGrey": "_2IeQuqKv4kC7vVDREUnVXJ",
          "ItemFocusAnim-grey": "X3U1lQ94969mdo-OyDB4r",
          "ItemFocusAnim-translucent-white-10": "_3I9H7g6vFex4f-XocVTj-X",
          "ItemFocusAnim-translucent-white-20": "_2_i92FJitTDXOf5j2qHIAl",
          "ItemFocusAnimBorder-darkGrey": "_3ptMvwESzMu4HLigXQtQOm",
          "ItemFocusAnim-green": "jkn_IZFEGtZHxdFRc6KON",
          focusAnimation: "_38aC9CNFSq3FVlwkvehRI-",
          hoverAnimation: "_2a2hzvLCbR64ODBqWR_ARQ",
        };
      },
      61738: (G, V, s) => {
        var e = {
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
        function M(j) {
          var y = l(j);
          return s(y);
        }
        function l(j) {
          if (!s.o(e, j)) {
            var y = new Error("Cannot find module '" + j + "'");
            throw ((y.code = "MODULE_NOT_FOUND"), y);
          }
          return e[j];
        }
        (M.keys = function () {
          return Object.keys(e);
        }),
          (M.resolve = l),
          (G.exports = M),
          (M.id = 61738);
      },
    },
  ]);
})();
