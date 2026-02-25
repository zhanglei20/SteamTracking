/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9517],
  {
    43087: (e) => {
      e.exports = {
        StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
        Action: "_2Xpw9--lhL-kpt-lUannE1",
        WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
        StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
        StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
        StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
      };
    },
    45476: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          BroadcastEmbeddablePopoutHeader: () => ge,
          default: () => he,
        });
      var a = s(34629),
        r = s(7850),
        n = s(41735),
        i = s.n(n),
        o = s(75844),
        l = s(65946),
        c = s(90626),
        d = s(39606),
        p = s(72224),
        m = s(55963),
        h = s(55263),
        u = s(18654),
        A = s(94095),
        _ = s(20433),
        j = s(60014),
        S = s(22797),
        g = s(52038),
        N = s(78327),
        x = s(43087),
        b = s.n(x),
        C = s(35380),
        I = s(39777),
        w = s(71420),
        D = s(42834),
        M = s(5309);
      const v = (0, o.PA)((e) => {
        const { appid: t } = e,
          s = (0, j.n9)(),
          a = (0, c.useRef)({ include_assets: !0, include_release: !0 }),
          n = (0, C.$5)(t),
          { data: i } = (0, I.J$)(n),
          { data: o } = (0, I.lv)(n),
          { data: l } = (0, I.by)(n),
          [d, p] = (0, h.t7)(t, a.current);
        let x = (0, g.A)(
            b().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          v = b().StoreSaleWidgetImage_mini,
          y = b().StoreSaleImage_mini;
        if (null == i)
          return (0, r.jsx)("div", {
            className: x,
            children: (0, r.jsx)(S.t, { size: "medium" }),
          });
        if (null == i || !i.name)
          return (0, r.jsx)("div", {
            className: u.StoreSaleWidgetEmptyContainer,
          });
        const T = 8 != i.type,
          B = (0, m.wJ)((0, w._)(i), s);
        return (0, r.jsxs)("div", {
          className: x,
          children: [
            (0, r.jsx)("a", {
              href: B,
              target: N.TS.IN_CLIENT ? void 0 : "_blank",
              children: (0, r.jsx)(_.j, {
                id: n,
                children: (0, r.jsx)("div", {
                  className: v,
                  children:
                    o &&
                    (0, r.jsx)("img", {
                      className: y,
                      src: (0, D.b0)(o, "small_capsule"),
                      alt: i.name,
                    }),
                }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: u.StoreSaleBroadcastWidgetRight,
              children: [
                (0, r.jsx)("a", {
                  href: B,
                  target: N.TS.IN_CLIENT ? void 0 : "_blank",
                  children: (0, r.jsx)(_.j, {
                    id: n,
                    children: (0, r.jsx)("div", {
                      className: (0, g.A)(
                        u.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                      children: i.name,
                    }),
                  }),
                }),
                l &&
                  (0, r.jsx)("div", {
                    className: u.StoreSaleWidgetRelease,
                    children: (0, M.CC)(l),
                  }),
                Boolean(T) && (0, r.jsx)(A.w, { id: n, bShowDemoButton: !0 }),
              ],
            }),
          ],
        });
      });
      var y = s(22837);
      function T() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var B = s(60727),
        L = s(54728),
        E = s(34010),
        f = s(16021),
        U = s(94011),
        P = s(26296),
        k = s(96236),
        G = s(12155),
        O = s(32754),
        z = s(61859),
        R = s(82227),
        V = s(73745),
        F = s(17720),
        W = s(8092),
        H = s(53120),
        Q = s.n(H);
      const J = (0, o.PA)((e) => {
        const { event: t } = e,
          s = t.clanSteamID.GetAccountID(),
          a = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = (0, c.useRef)(null),
          [o, l] = (0, c.useState)(
            t ? W.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, c.useEffect)(() => {
            const e = i().CancelToken.source();
            n.current = e.cancel;
            return (
              (async () => {
                const t = F.b.InitFromClanID(s),
                  a = await W.pF.LoadCreatorHome(t, !1, e);
                e.token.reason || l(a);
              })(),
              () => {
                n.current && n.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [s]),
          a || !o || !o.BIsLoaded())
        )
          return null;
        const d =
          N.TS.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return (0, r.jsx)("div", {
          className: Q().item_drop_ctn,
          children: (0, r.jsxs)("div", {
            children: [
              (0, z.we)(
                o.GetName().length > 0
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                      60 ==
                    0
                    ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                    : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                    ? "#SalePage_WatchForDrop_Hours_Developer"
                    : "#SalePage_WatchForDrop_Minutes_Developer",
                t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
                o.GetName(),
              ),
              Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
                (0, r.jsx)("a", {
                  href: d,
                  target: N.TS.IN_CLIENT ? "" : "_blank",
                  children: (0, z.we)("#SalePage_WatchForDrop_LearnMore"),
                }),
            ],
          }),
        });
      });
      var Y = s(95695),
        Z = s.n(Y),
        K = s(96715),
        X = s(10886),
        q = s(19654),
        $ = s(3209),
        ee = s(9154),
        te = s(51272),
        se = s(14256),
        ae = s.n(se);
      function re(e) {
        const { steamid: t, closeModal: s } = e;
        return (0, r.jsxs)(ee.o0, {
          strDescription: "",
          strTitle: (0, z.we)("#Button_Share"),
          onCancel: s,
          onOK: s,
          bAlertDialog: !0,
          modalClassName: "EventDisplay_Share_Dialog",
          children: [
            (0, r.jsx)(ne, { steamid: t }),
            (0, r.jsx)(ie, { steamid: t }),
          ],
        });
      }
      function ne(e) {
        const { steamid: t } = e,
          s = (function (e) {
            const t = N.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e;
            return {
              strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: t + "?site=twitter",
              strRedditUrl: t + "?site=reddit",
            };
          })(t);
        return (0, r.jsxs)("div", {
          className: (0, g.A)(Z().FlexRowContainer, ae().share_controls_ctn),
          children: [
            (0, r.jsx)(O.he, {
              toolTipContent: (0, z.we)("#EventDisplay_Share_OnFaceBook"),
              children: (0, r.jsx)(te.uU, {
                href: s.strFacebookUrl,
                className: ae().ShareBtn,
                children: (0, r.jsx)("img", {
                  className: (0, g.A)(Z().Button),
                  src: X.A,
                }),
              }),
            }),
            (0, r.jsx)(O.he, {
              toolTipContent: (0, z.we)("#EventDisplay_Share_OnTwitter"),
              children: (0, r.jsx)(te.uU, {
                href: s.strTwitterUrl,
                className: ae().ShareBtn,
                children: (0, r.jsx)("img", {
                  className: (0, g.A)(Z().Button),
                  src: $.A,
                }),
              }),
            }),
            (0, r.jsx)(O.he, {
              toolTipContent: (0, z.we)("#EventDisplay_Share_OnReddit"),
              children: (0, r.jsx)(te.uU, {
                href: s.strRedditUrl,
                className: ae().ShareBtn,
                children: (0, r.jsx)("img", {
                  className: (0, g.A)(Z().Button),
                  src: q.A,
                }),
              }),
            }),
          ],
        });
      }
      function ie(e) {
        const { steamid: t } = e,
          s = c.createRef(),
          [a, n] = c.useState(""),
          i = c.createRef(),
          o = c.useCallback(
            (e) => {
              s.current &&
                s.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(s.current.value)
                  .then((e) => {
                    n((0, z.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n((0, z.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [s],
          ),
          l = N.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)("div", {
              className: (0, g.A)(Z().FlexRowContainer, ae().linkField),
              onClick: o,
              children: [
                (0, r.jsx)("span", {
                  className: ae().LinkInputLabel,
                  children: (0, z.we)("#EventDisplay_Share_Link"),
                }),
                (0, r.jsx)("textarea", {
                  className: ae().LinkInput,
                  ref: s,
                  value: l,
                  readOnly: !0,
                }),
                Boolean(document.queryCommandSupported("copy")) &&
                  (0, r.jsx)(O.he, {
                    toolTipContent: (0, z.we)("#ToolTip_CopyLinkToClipboard"),
                    children: (0, r.jsx)("div", {
                      className: (0, g.A)(
                        Z().Button,
                        Z().Icon,
                        ae().LinkButton,
                      ),
                      children: (0, r.jsx)("img", {
                        className: ae().ClipboardIcon,
                        src: K.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, r.jsx)("div", {
              ref: i,
              className: ae().ClipboardText,
              children: a,
            }),
          ],
        });
      }
      var oe = s(56011),
        le = s(738),
        ce = s(29268),
        de = s(23338),
        pe = s(75515);
      const me = {
        list: [
          { appid: 444090, url: "https://steam.tv/paladins" },
          { appid: 386360, url: "https://steam.tv/smite" },
          { appid: 813820, url: "https://steam.tv/realmroyale" },
          {
            appid: 583950,
            url: "https://steam.tv/artifact",
            broadcasterAccountID: 912972716,
          },
          {
            appid: 570,
            url: "https://steam.tv/dota",
            broadcasterAccountID: 238221269,
          },
          {
            appid: 1025790,
            url: "https://steam.tv/steamawards",
            broadcasterAccountID: 934427243,
          },
          {
            appid: 730,
            url: "https://steam.tv/csgo",
            broadcasterAccountID: 911609735,
          },
        ],
      };
      function he(e) {
        return (function () {
          const e = (0, N.Qn)();
          return !(0, N.Y2)() && !e;
        })()
          ? (0, r.jsx)(ue, { ...e })
          : null;
      }
      let ue = class extends c.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = i().CancelToken.source()),
            (this.m_bMarkedUsabilitySeen = !1),
            (this.state = {
              bShowPopoutHeader: !1,
              bExpanded: !1,
              bLoadingPreference: !0,
              style: {
                maxHeight: "0vh",
                overflow: "hidden",
                transition: "max-height 1s ease-in-out",
              },
              innerStyle: {
                maxHeight: "0vh",
                overflow: "hidden",
                transition: "max-height 1s ease-in-out",
              },
              bStartMuted: !0,
            });
        }
        async componentDidMount() {
          await E.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !E.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: E.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? E.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : E.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              E.j
                .Get()
                .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
            window.setTimeout(() => {
              this.m_cancelSignal.token.reason ||
                this.setState({
                  style: { ...this.state.style, maxHeight: "100vh" },
                });
            }, 10);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let e = E.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            s = L.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, E.U7)(s, t ? 2 : 3, e.snr),
            t && T() && T().AddEvent(1005),
            window.setTimeout(
              () =>
                this.setState({
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: t ? "0vh" : "100vh",
                  },
                }),
              10,
            ),
            t ||
              this.setState({ bExpanded: !this.state.bExpanded }, () =>
                E.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              E.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            E.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await E.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = E.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await E.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let s = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return s;
          const a = E.j.Get().GetConcurrentStreams(this.props) > 1;
          let n = L.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            i = (0, r.jsx)(Se, { ImgUrl: e.right_panel }, "right" + n),
            o = (0, r.jsx)(Se, { ImgUrl: e.left_panel }, "left" + n);
          if (n < 11) {
            const t = B.l.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (n = t[0]);
          }
          return (
            !(
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
              n >= 11
            ) ||
              (this.props.event &&
                this.props.event.jsondata.broadcast_force_banner) ||
              ((i = (0, r.jsx)(v, { appid: n }, "mini" + e.accountid)),
              (s.bRightPanelArtworkOrEmpty = !1)),
            a && !t
              ? ((s.leftPanel = (0, r.jsx)(
                  xe,
                  {
                    broadcastEmbedContext: this.props,
                    curStream: e,
                    onStreamSelect: this.onStreamSelect,
                    fnFilterStreams: this.props.fnFilterStreams,
                    bShowCapsuleArt: this.props.bShowCapsuleArt,
                  },
                  "selector" + n,
                )),
                (s.rightPanel = i))
              : t
                ? ((s.leftPanel = (0, r.jsx)("div", {})),
                  (s.rightPanel = (0, r.jsx)(Ie, {
                    stream: e,
                    orientation: "rightside",
                  })),
                  (s.bRightPanelArtworkOrEmpty = !1))
                : ((s.leftPanel = o), (s.rightPanel = i)),
            s
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0), T() && T().AddEvent(1004));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = E.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === E.j.Get().GetChatVisibility();
            const {
              event: s,
              language: a,
              fnRenderBroadcastContext: n,
            } = this.props;
            s &&
              (e = {
                ...e,
                left_panel: s.GetImageURL(
                  "broadcast_left",
                  a || (0, y.sf)(N.TS.LANGUAGE),
                ),
                right_panel: s.GetImageURL(
                  "broadcast_right",
                  a || (0, y.sf)(N.TS.LANGUAGE),
                ),
                store_title: s.GetBroadcastTitle(a || (0, y.sf)(N.TS.LANGUAGE)),
                broadcast_chat_visibility: s.GetBroadcastChatVisibility(),
              });
            let i = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              l = E.j.Get().GetConcurrentStreams(this.props) > 1;
            const d = () => {
              var t, s;
              e.nAppIDVOD && this.PlayNextNonVOD(),
                null === (s = (t = this.props).fnOnVideoEnd) ||
                  void 0 === s ||
                  s.call(t);
            };
            return (0, r.jsx)(c.Fragment, {
              children: (0, r.jsxs)("div", {
                className: "broadcast_embed_top_ctn_trgt",
                style: this.state.style,
                children: [
                  (0, r.jsxs)("div", {
                    className: (0, g.A)({
                      [Q().bordered_container]: !0,
                      [Q().Event]: Boolean(s),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                    children: [
                      (0, r.jsxs)("div", {
                        className: (0, g.A)(
                          Q().bordered_title,
                          "bordered_title_trgt",
                        ),
                        children: [
                          (0, r.jsx)(U.K, {}),
                          (0, r.jsx)("div", {
                            className: Q().streamTitle,
                            children: o,
                          }),
                          (0, r.jsxs)("div", {
                            className: Q().bordered_corner_container,
                            children: [
                              Boolean(!this.state.bExpanded) &&
                                (0, r.jsx)(O.he, {
                                  toolTipContent: (0, z.we)(
                                    "#StoreBroadcast_Change_store_Broadcast_settings",
                                  ),
                                  children: (0, r.jsx)("div", {
                                    className: Q().broadcast_settings_icon,
                                    onClick: () =>
                                      window.open(
                                        `${N.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                      ),
                                  }),
                                }),
                              (0, r.jsx)(O.he, {
                                toolTipContent: (0, z.we)(
                                  "#StoreBroadcast_Hide_Tooltip",
                                ),
                                children: (0, r.jsx)("div", {
                                  className: this.state.bExpanded
                                    ? Q().bordered_corner_expanded
                                    : Q().bordered_corner_shrinked,
                                  onClick: this.ToggleBroadcastExpandShrink,
                                }),
                              }),
                            ],
                          }),
                          Boolean(e.gamedata_subtitle) &&
                            (0, r.jsx)("div", {
                              className: Q().bordered_subtitle,
                              children: e.gamedata_subtitle,
                            }),
                        ],
                      }),
                      Boolean(this.state.bExpanded) &&
                        (0, r.jsxs)("div", {
                          className: (0, g.A)({
                            [Q().container]: !0,
                            embeddable_ctn_trgt: !0,
                            multistream: l,
                            broadcast_right_panel_simple:
                              i.bRightPanelArtworkOrEmpty,
                            broadcast_chat_expanded: t,
                          }),
                          style: { ...this.state.innerStyle },
                          onTransitionEnd: this.OnShrinkTransitionEnd,
                          children: [
                            (0, r.jsx)("div", {
                              className: Q().LeftPanelCtn,
                              children: i.leftPanel,
                            }),
                            (0, r.jsx)(Ae, {
                              stream: e,
                              bStartMuted: this.state.bStartMuted,
                              fnRenderBroadcastContext: n,
                              fnOnVideoEnd: d,
                              bWidePlayer: this.props.bWidePlayer,
                            }),
                            (0, r.jsx)("div", {
                              className: Q().RightPanelCtn,
                              children: i.rightPanel,
                            }),
                            Boolean(this.state.bExpanded) &&
                              (0, r.jsx)(je, {
                                stream: e,
                                bMultistream: l,
                                chatAnnouncementGivewayGID: i.rightPanel
                                  ? void 0
                                  : this.props.chat_announcement_giveaway,
                              }),
                          ],
                        }),
                    ],
                  }),
                  Boolean(
                    s && s.jsondata && s.jsondata.broadcast_item_drops_enabled,
                  ) && (0, r.jsx)(J, { event: s }),
                  (0, r.jsx)("div", { className: Q().clear_div }),
                ],
              }),
            });
          }
          return (0, r.jsx)("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, a.Cg)([V.oI], ue.prototype, "ToggleBroadcastExpandShrink", null),
        (0, a.Cg)([V.oI], ue.prototype, "OnShrinkTransitionEnd", null),
        (0, a.Cg)([V.oI], ue.prototype, "onStreamSelect", null),
        (0, a.Cg)([V.oI], ue.prototype, "PlayNextNonVOD", null),
        (ue = (0, a.Cg)([o.PA], ue));
      class Ae extends c.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = c.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = L.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, E.U7)(e, 7, this.props.stream.snr),
            T() && T().AddEvent(1006),
            this.setState({ bPopout: !1, bPreventPopup: !0 });
        }
        OnEnter() {
          !this.state.bPreventPopup &&
            this.state.bPopout &&
            this.setState({ bPopout: !1 });
        }
        OnLeave() {
          this.state.bPreventPopup ||
            this.state.bPopout ||
            this.setState({ bPopout: !0 });
        }
        render() {
          return (0, r.jsx)("div", {
            className: Q().wrapper,
            children: (0, r.jsx)(de.j, {
              onEnter: this.OnEnter,
              onLeave: this.OnLeave,
              onIntersectionChange: (e) => {
                e.isIntersecting || this.OnLeave();
              },
              className: (0, g.A)({
                [Q().video_placeholder]: !0,
                video_placeholder_trgt: !0,
                [Q().WidePlayer]: this.props.bWidePlayer,
              }),
              ref: this.m_iVideoContainerRef,
              children: (0, r.jsxs)("div", {
                className: this.state.bPopout
                  ? Q().broadcast_floating
                  : Q().video_container,
                children: [
                  this.state.bPopout &&
                    (0, r.jsx)(ge, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  (0, r.jsx)("div", {
                    className: Q().BroadcastPlayerContainer,
                    children: (0, r.jsx)(p.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation: 6,
                      bStartMuted: this.props.bStartMuted,
                      fnRenderBroadcastContext:
                        this.props.fnRenderBroadcastContext,
                      fnOnVideoEnd: this.props.fnOnVideoEnd,
                      nAppIDVOD: this.props.stream.nAppIDVOD,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
      }
      function _e(e) {
        const { stream: t } = e,
          [s] = (0, l.q3)(() => [t.steamid]),
          a = L.es.GetOrCreateBroadcastInfo(s).m_nAppID,
          n = me.list.find(
            (e) =>
              e.appid == a &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (n) {
          let e = n.url;
          return (
            (N.TS.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            (0, r.jsx)("a", {
              href: e,
              children: (0, z.we)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            })
          );
        }
        {
          const e = N.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + s;
          return (0, r.jsx)(O.he, {
            toolTipContent: (0, z.we)("#BroadcastWatch_View_Broadcast_Page"),
            children: (0, r.jsx)("a", {
              href: e,
              className: Q().external_link,
              children: (0, r.jsx)(G.GrD, {}),
            }),
          });
        }
      }
      (0, a.Cg)([V.oI], Ae.prototype, "CloseBroadcastPopup", null),
        (0, a.Cg)([V.oI], Ae.prototype, "OnEnter", null),
        (0, a.Cg)([V.oI], Ae.prototype, "OnLeave", null);
      let je = class extends c.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = L.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, E.U7)(
            t,
            "show" === E.j.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr,
          ),
            E.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = L.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, E.U7)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = "remove" != E.j.Get().GetChatVisibility(),
            t = "hide" === E.j.Get().GetChatVisibility(),
            s = !this.props.stream.nAppIDVOD,
            a = s;
          let n = Number.parseInt(
            "" +
              L.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return (0, r.jsxs)("div", {
            className: (0, g.A)(Q().viewer_bar, "viewer_bar"),
            children: [
              (0, r.jsxs)("div", {
                className: (0, g.A)(Q().viewer_count, "viewer_count"),
                children: [(0, r.jsx)(G.y_e, {}), (0, R.Dq)(n)],
              }),
              (0, r.jsxs)("div", {
                className: (0, g.A)(Q().viewer_links, "viewer_links"),
                children: [
                  Boolean(e && !t && this.props.bMultistream) &&
                    (0, r.jsx)("div", {
                      className: Q().chat_link,
                      children: (0, r.jsx)("a", {
                        href: "#",
                        className: Q().ChatToggle,
                        onClick: this.OnToggleChat,
                        children: (0, z.we)("#sale_three_section_show_streams"),
                      }),
                    }),
                  e &&
                    (0, r.jsxs)("div", {
                      className: Q().chat_link,
                      children: [
                        (0, r.jsx)(G.ROZ, {}),
                        (0, r.jsx)("a", {
                          href: "#",
                          className: Q().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, z.we)(
                            t
                              ? "#sale_three_section_show_chat"
                              : "#sale_three_section_hide_chat",
                          ),
                        }),
                      ],
                    }),
                  a &&
                    (0, r.jsxs)("div", {
                      className: Q().chat_link,
                      children: [
                        (0, r.jsx)(G.SYj, {}),
                        (0, r.jsx)("a", {
                          href: "#",
                          className: Q().ChatToggle,
                          onClick: (e) =>
                            (0, le.pg)(
                              (0, r.jsx)(re, {
                                steamid: this.props.stream.steamid,
                              }),
                              (0, oe.uX)(e),
                            ),
                          children: (0, z.we)("#Broadcast_ShareBroadcast"),
                        }),
                      ],
                    }),
                  (0, r.jsx)(O.he, {
                    toolTipContent: (0, z.we)(
                      "#StoreBroadcast_Change_store_Broadcast_settings",
                    ),
                    children: (0, r.jsx)("a", {
                      href:
                        N.TS.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: N.TS.IN_CLIENT ? void 0 : "_blank",
                      className: Q().settings_link,
                      children: (0, r.jsx)(G.wB_, {}),
                    }),
                  }),
                  s && (0, r.jsx)(_e, { ...this.props }),
                ],
              }),
              Boolean(this.props.chatAnnouncementGivewayGID) &&
                (0, r.jsx)(ce.V, {
                  gidGiveaway: this.props.chatAnnouncementGivewayGID,
                  stream: this.props.stream,
                }),
            ],
          });
        }
      };
      (0, a.Cg)([V.oI], je.prototype, "OnToggleChat", null),
        (0, a.Cg)([V.oI], je.prototype, "onWatchBroadcastPage", null),
        (je = (0, a.Cg)([o.PA], je));
      class Se extends c.Component {
        render() {
          let e = this.props.ImgUrl;
          return (0, r.jsxs)("div", {
            className: Q().SidePanelBackground,
            children: [
              e &&
                (0, r.jsx)("img", {
                  className: Q().side_panels,
                  src: this.props.ImgUrl,
                }),
              !e && (0, r.jsx)("div", { className: Q().side_panels }),
            ],
          });
        }
      }
      const ge = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let s = L.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        s = s != L.fO ? s : 0;
        const a = (0, C.$5)(s),
          { data: n } = (0, I.J$)(a);
        return (0, r.jsxs)("div", {
          className: [Q().PopOutVideoTitleBar, Q().NoSeslect].join(" "),
          children: [
            Boolean(n)
              ? (0, r.jsx)(_.u, {
                  id: a,
                  className: Q().PopOutVideoTitleText,
                  children: (0, z.we)("#StoreBroadcast_Detault_popout_Title"),
                })
              : (0, r.jsx)("div", {
                  className: Q().PopOutVideoTitleText,
                  children: (0, z.we)("#StoreBroadcast_Detault_popout_Title"),
                }),
            (0, r.jsx)(O.he, {
              toolTipContent: (0, z.we)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              children: (0, r.jsx)("button", {
                className: Q().PopOutVideoCloseButton,
                onClick: e.OnPreventPopup,
                children: (0, r.jsx)(G.X, {}),
              }),
            }),
          ],
        });
      });
      function Ne(e, t) {
        var s;
        const a = L.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          r = f.A.Get().GetApp(a);
        return e &&
          (null === (s = null == r ? void 0 : r.GetAssets()) || void 0 === s
            ? void 0
            : s.GetHeaderURL())
          ? parseInt(Q().strStreamIconCapsuleArtHeight)
          : parseInt(Q().strStreamIconScreenshotArtHeight);
      }
      function xe(e) {
        const {
            curStream: t,
            onStreamSelect: s,
            fnFilterStreams: a,
            bShowCapsuleArt: n,
            broadcastEmbedContext: i,
          } = e,
          o = (0, c.useRef)(void 0),
          l = (0, c.useMemo)(() => {
            const e = E.j
              .Get()
              .GetStreams(i)
              .filter((e) => !a || a(e));
            return (0, E.MU)(e), e;
          }, [i, a]);
        return (
          (0, c.useEffect)(() => {
            if (o && o.current) {
              const e = l
                .map((e) => L.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              f.A.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const s of l) {
                      if (t.accountid == s.accountid) break;
                      e += Ne(n, s);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [l, n, t.accountid, o]),
          (0, r.jsx)("div", {
            ref: o,
            className: (0, g.A)({
              [Q().side_panels]: !0,
              side_panels: !0,
              [Q().multistream]: !0,
              [Q().scrollingstreams]: l.length > 3,
            }),
            children: (0, r.jsx)("div", {
              className: Q().MultiStreamCtn,
              children: l.map((e) => {
                var a;
                return (0, r.jsx)(
                  be,
                  {
                    stream: e,
                    bSelected: t.accountid == e.accountid,
                    onStreamSelect: s,
                    bShowCapsuleArt: n,
                  },
                  null !== (a = e.accountid) && void 0 !== a ? a : e.steamid,
                );
              }),
            }),
          })
        );
      }
      function be(e) {
        const {
          onStreamSelect: t,
          bSelected: s,
          stream: a,
          bShowCapsuleArt: n,
        } = e;
        let i = (0, l.q3)(
          () => L.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID,
        );
        i = i != L.fO ? i : 0;
        const o = (0, C.$5)(i),
          { data: c } = (0, I.J$)(o),
          { data: d } = (0, I.lv)(o);
        if (!(0, E.fn)(a)) return null;
        const p = n && d && (0, D.b0)(d, "header"),
          m = Number.parseInt("" + a.viewer_count),
          h = !Number.isNaN(m),
          u = !!a.nAppIDVOD && (null == c ? void 0 : c.name);
        return (0, r.jsxs)("div", {
          className: (0, g.A)({
            [Q().stream_icon_and_viewer_container]: !0,
            [Q().stream_featured]:
              a.current_selection_priority == pe.mY.k_eFeatured,
            [Q().display_capsule_art]: Boolean(p),
          }),
          children: [
            (0, r.jsx)(_.j, {
              id: o,
              hoverClassName: Q().StreamCapsule,
              children: (0, r.jsx)(k.K, {
                className: (0, g.A)(
                  Q().stream_icon_container,
                  s && Q().stream_selected,
                ),
                onClick: () => t && t(a),
                rootMargin: "100px 0px 100px 0px",
                children: (0, r.jsx)(Ce, {
                  strThumbnail: a.thumbnail_http_address,
                  bSelected: s,
                  strCapsuleArtURL: p,
                }),
              }),
            }),
            (0, r.jsx)("div", {
              className: (0, g.A)(Q().viewer_count, !h && Q().vod_title),
              children: h
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(G.y_e, {}),
                      (0, r.jsx)("div", {
                        className: Q().ViewerNum,
                        children: (0, R.Dq)(m),
                      }),
                    ],
                  })
                : u,
            }),
          ],
        });
      }
      function Ce(e) {
        const { strCapsuleArtURL: t, strThumbnail: s, bSelected: a } = e,
          n = a ? Q().stream_icon_selected : Q().stream_icon;
        if (t) {
          const e = [t];
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("img", {
                className: (0, g.A)(n, Q().stream_icon_hide_on_hover),
                src: t,
              }),
              (0, r.jsx)(P.o, {
                className: (0, g.A)(n, Q().stream_icon_show_on_hover),
                srcs: e,
              }),
            ],
          });
        }
        return (0, r.jsx)("img", { className: n, src: s });
      }
      function Ie(e) {
        const { stream: t, orientation: s } = e,
          a = "below" == s,
          [n, i] = (0, l.q3)(() => {
            var e;
            return [
              L.es.GetBroadcast(t.steamid),
              null === (e = L.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, l.q3)(() => t.steamid);
        return n
          ? (0, r.jsx)("div", {
              className: (0, g.A)({
                [Q().chat_below_container]: a,
                [Q().chat_rightside_container]: !a,
                [Q().store_chat_ctn]: !0,
              }),
              children: (0, r.jsx)("div", {
                className: Q().ChatContainer,
                children: (0, r.jsx)(d.I, {
                  emoticonStore: E.MX,
                  watchLocation: 6,
                  steamID: o,
                  broadcastID: i,
                }),
              }),
            })
          : null;
      }
    },
    96715: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        s.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
