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
    45476: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          BroadcastEmbeddablePopoutHeader: () => ue,
          default: () => ie,
        });
      var s = a(34629),
        n = a(41735),
        r = a.n(n),
        o = a(75844),
        i = a(65946),
        l = a(90626),
        c = a(39606),
        d = a(72224),
        m = a(55963),
        p = a(55263),
        u = a(18654),
        h = a(94095),
        A = a(37076),
        E = a(60014),
        _ = a(22797),
        N = a(52038),
        S = a(78327),
        g = a(43087),
        b = a.n(g);
      const C = (0, o.PA)((e) => {
        const { appid: t } = e,
          a = (0, E.n9)(),
          s = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [n, r] = (0, p.t7)(t, s.current);
        let o = (0, N.A)(
            b().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          i = b().StoreSaleWidgetImage_mini,
          c = b().StoreSaleImage_mini;
        if (!n && 2 != r)
          return l.createElement(
            "div",
            { className: o },
            l.createElement(_.t, { size: "medium" }),
          );
        if (2 == r || !n.GetName())
          return l.createElement("div", {
            className: u.StoreSaleWidgetEmptyContainer,
          });
        const d = 8 != n.GetAppType(),
          g = (0, m.wJ)(n.GetStorePageURL(!0), a);
        return l.createElement(
          "div",
          { className: o },
          l.createElement(
            "div",
            { className: u.Actions },
            l.createElement(
              "a",
              { href: g, target: S.TS.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                A.j,
                { type: "app", id: t },
                l.createElement(
                  "div",
                  { className: i },
                  l.createElement("img", {
                    className: c,
                    src: n.GetAssets().GetSmallCapsuleURL(),
                  }),
                ),
              ),
            ),
          ),
          l.createElement(
            "div",
            { className: u.StoreSaleBroadcastWidgetRight },
            l.createElement(
              "div",
              { className: u.Actions },
              l.createElement(
                "a",
                { href: g, target: S.TS.IN_CLIENT ? void 0 : "_blank" },
                l.createElement(
                  A.j,
                  { type: "app", id: t },
                  l.createElement(
                    "div",
                    {
                      className: (0, N.A)(
                        u.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                    },
                    n.GetName(),
                  ),
                ),
              ),
            ),
            l.createElement(
              "div",
              { className: u.StoreSaleWidgetRelease },
              n.GetFormattedSteamReleaseDate(),
            ),
            Boolean(d) &&
              l.createElement(h.wD, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              }),
          ),
        );
      });
      var I = a(22837);
      function D() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var w = a(60727),
        v = a(54728),
        M = a(34010),
        y = a(69300),
        T = a(13952),
        B = a(94011),
        L = a(26296),
        f = a(96236),
        j = a(12155),
        U = a(32754),
        G = a(61859),
        k = a(82227),
        P = a(73745),
        x = a(17720),
        O = a(67165),
        z = a(53120),
        R = a.n(z);
      const V = (0, o.PA)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          s = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = (0, l.useRef)(null),
          [o, i] = (0, l.useState)(
            t ? O.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = r().CancelToken.source();
            n.current = e.cancel;
            return (
              (async () => {
                const t = x.b.InitFromClanID(a),
                  s = await O.pF.LoadCreatorHome(t, !1, e);
                e.token.reason || i(s);
              })(),
              () => {
                n.current && n.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          s || !o || !o.BIsLoaded())
        )
          return null;
        const c =
          S.TS.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.createElement(
          "div",
          { className: R().item_drop_ctn },
          l.createElement(
            "div",
            null,
            (0, G.we)(
              o.GetName().length > 0
                ? t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                  0
                  ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                  : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                : t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                    0
                  ? "#SalePage_WatchForDrop_Hours_Developer"
                  : "#SalePage_WatchForDrop_Minutes_Developer",
              t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                ? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
              o.GetName(),
            ),
            Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
              l.createElement(
                "a",
                { href: c, target: S.TS.IN_CLIENT ? "" : "_blank" },
                (0, G.we)("#SalePage_WatchForDrop_LearnMore"),
              ),
          ),
        );
      });
      var F = a(95695),
        W = a.n(F),
        H = a(96715),
        Q = a(10886),
        J = a(19654),
        Y = a(3209),
        Z = a(9154),
        K = a(51272),
        X = a(14256),
        q = a.n(X);
      function $(e) {
        const { steamid: t, closeModal: a } = e;
        return l.createElement(
          Z.o0,
          {
            strDescription: "",
            strTitle: (0, G.we)("#Button_Share"),
            onCancel: a,
            onOK: a,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
          },
          l.createElement(ee, { steamid: t }),
          l.createElement(te, { steamid: t }),
        );
      }
      function ee(e) {
        const { steamid: t } = e,
          a = (function (e) {
            const t = S.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e;
            return {
              strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: t + "?site=twitter",
              strRedditUrl: t + "?site=reddit",
            };
          })(t);
        return l.createElement(
          "div",
          { className: (0, N.A)(W().FlexRowContainer, q().share_controls_ctn) },
          l.createElement(
            U.he,
            { toolTipContent: (0, G.we)("#EventDisplay_Share_OnFaceBook") },
            l.createElement(
              K.uU,
              { href: a.strFacebookUrl, className: q().ShareBtn },
              l.createElement("img", {
                className: (0, N.A)(W().Button),
                src: Q.A,
              }),
            ),
          ),
          l.createElement(
            U.he,
            { toolTipContent: (0, G.we)("#EventDisplay_Share_OnTwitter") },
            l.createElement(
              K.uU,
              { href: a.strTwitterUrl, className: q().ShareBtn },
              l.createElement("img", {
                className: (0, N.A)(W().Button),
                src: Y.A,
              }),
            ),
          ),
          l.createElement(
            U.he,
            { toolTipContent: (0, G.we)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              K.uU,
              { href: a.strRedditUrl, className: q().ShareBtn },
              l.createElement("img", {
                className: (0, N.A)(W().Button),
                src: J.A,
              }),
            ),
          ),
        );
      }
      function te(e) {
        const { steamid: t } = e,
          a = l.createRef(),
          [s, n] = l.useState(""),
          r = l.createRef(),
          o = l.useCallback(
            (e) => {
              a.current &&
                a.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(a.current.value)
                  .then((e) => {
                    n((0, G.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n((0, G.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          i = S.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            {
              className: (0, N.A)(W().FlexRowContainer, q().linkField),
              onClick: o,
            },
            l.createElement(
              "span",
              { className: q().LinkInputLabel },
              (0, G.we)("#EventDisplay_Share_Link"),
            ),
            l.createElement("textarea", {
              className: q().LinkInput,
              ref: a,
              value: i,
              readOnly: !0,
            }),
            Boolean(document.queryCommandSupported("copy")) &&
              l.createElement(
                U.he,
                { toolTipContent: (0, G.we)("#ToolTip_CopyLinkToClipboard") },
                l.createElement(
                  "div",
                  { className: (0, N.A)(W().Button, W().Icon, q().LinkButton) },
                  l.createElement("img", {
                    className: q().ClipboardIcon,
                    src: H.A,
                  }),
                ),
              ),
          ),
          l.createElement("div", { ref: r, className: q().ClipboardText }, s),
        );
      }
      var ae = a(56011),
        se = a(738),
        ne = a(29268),
        re = a(23338);
      const oe = {
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
            broadcasterAccountID: 1532096361,
          },
        ],
      };
      function ie(e) {
        return (function () {
          const e = (0, S.Qn)();
          return !(0, S.Y2)() && !e;
        })()
          ? l.createElement(le, { ...e })
          : null;
      }
      let le = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = r().CancelToken.source()),
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
          await M.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !M.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: M.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? M.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : M.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              M.j
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
          let e = M.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = v.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, M.U7)(a, t ? 2 : 3, e.snr),
            t && D() && D().AddEvent(1005),
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
                M.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              M.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            M.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await M.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = M.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await M.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const s = M.j.Get().GetConcurrentStreams(this.props) > 1;
          let n = v.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            r = l.createElement(pe, {
              key: "right" + n,
              ImgUrl: e.right_panel,
            }),
            o = l.createElement(pe, { key: "left" + n, ImgUrl: e.left_panel });
          if (n < 11) {
            const t = w.l.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((r = l.createElement(C, {
                key: "mini" + e.accountid,
                appid: n,
              })),
              (a.bRightPanelArtworkOrEmpty = !1)),
            s && !t
              ? ((a.leftPanel = l.createElement(Ae, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + n,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (a.rightPanel = r))
              : t
                ? ((a.leftPanel = l.createElement("div", null)),
                  (a.rightPanel = l.createElement(Ne, {
                    stream: e,
                    orientation: "rightside",
                  })),
                  (a.bRightPanelArtworkOrEmpty = !1))
                : ((a.leftPanel = o), (a.rightPanel = r)),
            a
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0), D() && D().AddEvent(1004));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = M.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === M.j.Get().GetChatVisibility();
            const {
              event: a,
              language: s,
              fnRenderBroadcastContext: n,
            } = this.props;
            a &&
              (e = {
                ...e,
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  s || (0, I.sf)(S.TS.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  s || (0, I.sf)(S.TS.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(s || (0, I.sf)(S.TS.LANGUAGE)),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              });
            let r = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = M.j.Get().GetConcurrentStreams(this.props) > 1;
            const c = () => {
              var t, a;
              e.nAppIDVOD && this.PlayNextNonVOD(),
                null === (a = (t = this.props).fnOnVideoEnd) ||
                  void 0 === a ||
                  a.call(t);
            };
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                "div",
                {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                },
                l.createElement(
                  "div",
                  {
                    className: (0, N.A)({
                      [R().bordered_container]: !0,
                      [R().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, N.A)(
                        R().bordered_title,
                        "bordered_title_trgt",
                      ),
                    },
                    l.createElement(B.K, null),
                    l.createElement("div", { className: R().streamTitle }, o),
                    l.createElement(
                      "div",
                      { className: R().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement(
                          U.he,
                          {
                            toolTipContent: (0, G.we)(
                              "#StoreBroadcast_Change_store_Broadcast_settings",
                            ),
                          },
                          l.createElement("div", {
                            className: R().broadcast_settings_icon,
                            onClick: () =>
                              window.open(
                                `${S.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                              ),
                          }),
                        ),
                      l.createElement(
                        U.he,
                        {
                          toolTipContent: (0, G.we)(
                            "#StoreBroadcast_Hide_Tooltip",
                          ),
                        },
                        l.createElement("div", {
                          className: this.state.bExpanded
                            ? R().bordered_corner_expanded
                            : R().bordered_corner_shrinked,
                          onClick: this.ToggleBroadcastExpandShrink,
                        }),
                      ),
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.createElement(
                        "div",
                        { className: R().bordered_subtitle },
                        e.gamedata_subtitle,
                      ),
                  ),
                  Boolean(this.state.bExpanded) &&
                    l.createElement(
                      "div",
                      {
                        className: (0, N.A)({
                          [R().container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: i,
                          broadcast_right_panel_simple:
                            r.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: { ...this.state.innerStyle },
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      l.createElement(
                        "div",
                        { className: R().LeftPanelCtn },
                        r.leftPanel,
                      ),
                      l.createElement(ce, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: n,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      l.createElement(
                        "div",
                        { className: R().RightPanelCtn },
                        r.rightPanel,
                      ),
                      Boolean(this.state.bExpanded) &&
                        l.createElement(me, {
                          stream: e,
                          bMultistream: i,
                          chatAnnouncementGivewayGID: r.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        }),
                    ),
                ),
                Boolean(
                  a && a.jsondata && a.jsondata.broadcast_item_drops_enabled,
                ) && l.createElement(V, { event: a }),
                l.createElement("div", { className: R().clear_div }),
              ),
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, s.Cg)([P.oI], le.prototype, "ToggleBroadcastExpandShrink", null),
        (0, s.Cg)([P.oI], le.prototype, "OnShrinkTransitionEnd", null),
        (0, s.Cg)([P.oI], le.prototype, "onStreamSelect", null),
        (0, s.Cg)([P.oI], le.prototype, "PlayNextNonVOD", null),
        (le = (0, s.Cg)([o.PA], le));
      class ce extends l.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = v.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, M.U7)(e, 7, this.props.stream.snr),
            D() && D().AddEvent(1006),
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
          return l.createElement(
            "div",
            { className: R().wrapper },
            l.createElement(
              re.j,
              {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (e) => {
                  e.isIntersecting || this.OnLeave();
                },
                className: (0, N.A)({
                  [R().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [R().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
              },
              l.createElement(
                "div",
                {
                  className: this.state.bPopout
                    ? R().broadcast_floating
                    : R().video_container,
                },
                this.state.bPopout &&
                  l.createElement(ue, {
                    steamIDBroadcast: this.props.stream.steamid,
                    OnPreventPopup: this.CloseBroadcastPopup,
                  }),
                l.createElement(
                  "div",
                  { className: R().BroadcastPlayerContainer },
                  l.createElement(d.default, {
                    steamIDBroadcast: this.props.stream.steamid,
                    watchLocation: 6,
                    bStartMuted: this.props.bStartMuted,
                    fnRenderBroadcastContext:
                      this.props.fnRenderBroadcastContext,
                    fnOnVideoEnd: this.props.fnOnVideoEnd,
                    nAppIDVOD: this.props.stream.nAppIDVOD,
                  }),
                ),
              ),
            ),
          );
        }
      }
      function de(e) {
        const { stream: t } = e,
          [a] = (0, i.q3)(() => [t.steamid]),
          s = v.es.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = oe.list.find(
            (e) =>
              e.appid == s &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (n) {
          let e = n.url;
          return (
            (S.TS.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            l.createElement(
              "a",
              { href: e },
              (0, G.we)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            )
          );
        }
        {
          const e = S.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            U.he,
            {
              toolTipContent: (0, G.we)("#BroadcastWatch_View_Broadcast_Page"),
            },
            l.createElement(
              "a",
              { href: e, className: R().external_link },
              l.createElement(j.GrD, null),
            ),
          );
        }
      }
      (0, s.Cg)([P.oI], ce.prototype, "CloseBroadcastPopup", null),
        (0, s.Cg)([P.oI], ce.prototype, "OnEnter", null),
        (0, s.Cg)([P.oI], ce.prototype, "OnLeave", null);
      let me = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = v.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, M.U7)(
            t,
            "show" === M.j.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr,
          ),
            M.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = v.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, M.U7)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = "remove" != M.j.Get().GetChatVisibility(),
            t = "hide" === M.j.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            s = a;
          Number.parseInt(
            "" +
              v.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return l.createElement(
            "div",
            { className: (0, N.A)(R().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, N.A)(R().viewer_count, "viewer_count") },
              " ",
            ),
            l.createElement(
              "div",
              { className: (0, N.A)(R().viewer_links, "viewer_links") },
              Boolean(e && !t && this.props.bMultistream) &&
                l.createElement(
                  "div",
                  { className: R().chat_link },
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: R().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, G.we)("#sale_three_section_show_streams"),
                  ),
                ),
              e &&
                l.createElement(
                  "div",
                  { className: R().chat_link },
                  l.createElement(j.ROZ, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: R().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, G.we)(
                      t
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat",
                    ),
                  ),
                ),
              s &&
                l.createElement(
                  "div",
                  { className: R().chat_link },
                  l.createElement(j.SYj, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: R().ChatToggle,
                      onClick: (e) =>
                        (0, se.pg)(
                          l.createElement($, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, ae.uX)(e),
                        ),
                    },
                    (0, G.we)("#Broadcast_ShareBroadcast"),
                  ),
                ),
              l.createElement(
                U.he,
                {
                  toolTipContent: (0, G.we)(
                    "#StoreBroadcast_Change_store_Broadcast_settings",
                  ),
                },
                l.createElement(
                  "a",
                  {
                    href:
                      S.TS.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: S.TS.IN_CLIENT ? void 0 : "_blank",
                    className: R().settings_link,
                  },
                  l.createElement(j.wB_, null),
                ),
              ),
              a && l.createElement(de, { ...this.props }),
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(ne.V, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              }),
          );
        }
      };
      (0, s.Cg)([P.oI], me.prototype, "OnToggleChat", null),
        (0, s.Cg)([P.oI], me.prototype, "onWatchBroadcastPage", null),
        (me = (0, s.Cg)([o.PA], me));
      class pe extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.createElement(
            "div",
            { className: R().SidePanelBackground },
            e &&
              l.createElement("img", {
                className: R().side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.createElement("div", { className: R().side_panels }),
          );
        }
      }
      const ue = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let a = v.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        a = a != v.fO ? a : 0;
        const [s] = (0, p.t7)(a, {});
        return l.createElement(
          "div",
          { className: [R().PopOutVideoTitleBar, R().NoSeslect].join(" ") },
          Boolean(s)
            ? l.createElement(
                A.u,
                { type: "app", id: a, className: R().PopOutVideoTitleText },
                (0, G.we)("#StoreBroadcast_Detault_popout_Title"),
              )
            : l.createElement(
                "div",
                { className: R().PopOutVideoTitleText },
                (0, G.we)("#StoreBroadcast_Detault_popout_Title"),
              ),
          l.createElement(
            U.he,
            {
              toolTipContent: (0, G.we)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
            },
            l.createElement(
              "button",
              {
                className: R().PopOutVideoCloseButton,
                onClick: e.OnPreventPopup,
              },
              l.createElement(j.X, null),
            ),
          ),
        );
      });
      function he(e, t) {
        var a;
        const s = v.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = T.A.Get().GetApp(s);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(R().strStreamIconCapsuleArtHeight)
          : parseInt(R().strStreamIconScreenshotArtHeight);
      }
      function Ae(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: s,
            bShowCapsuleArt: n,
            broadcastEmbedContext: r,
          } = e,
          o = (0, l.useRef)(void 0),
          i = (0, l.useMemo)(() => {
            const e = M.j
              .Get()
              .GetStreams(r)
              .filter((e) => !s || s(e));
            return (0, M.MU)(e), e;
          }, [r, s]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => v.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              T.A.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += he(n, a);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [i, n, t.accountid, o]),
          l.createElement(
            "div",
            {
              ref: o,
              className: (0, N.A)({
                [R().side_panels]: !0,
                side_panels: !0,
                [R().multistream]: !0,
                [R().scrollingstreams]: i.length > 3,
              }),
            },
            l.createElement(
              "div",
              { className: R().MultiStreamCtn },
              i.map((e) => {
                var s;
                return l.createElement(Ee, {
                  key:
                    null !== (s = e.accountid) && void 0 !== s ? s : e.steamid,
                  stream: e,
                  bSelected: t.accountid == e.accountid,
                  onStreamSelect: a,
                  bShowCapsuleArt: n,
                });
              }),
            ),
          )
        );
      }
      function Ee(e) {
        var t;
        const {
          onStreamSelect: a,
          bSelected: s,
          stream: n,
          bShowCapsuleArt: r,
        } = e;
        let o = (0, i.q3)(
          () => v.es.GetOrCreateBroadcastInfo(n.steamid).m_nAppID,
        );
        o = o != v.fO ? o : 0;
        const [c] = (0, p.t7)(
          null !== (t = n.nAppIDVOD) && void 0 !== t ? t : o,
          { include_assets: !0 },
        );
        if (!(0, M.fn)(n)) return null;
        const d = r && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + n.viewer_count),
          u = !Number.isNaN(m),
          h = !!n.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, N.A)({
              [R().stream_icon_and_viewer_container]: !0,
              [R().stream_featured]:
                n.current_selection_priority == y.mY.k_eFeatured,
              [R().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            A.j,
            { type: "app", id: o, hoverClassName: R().StreamCapsule },
            l.createElement(
              f.K,
              {
                className: R().stream_icon_container,
                onClick: () => a && a(n),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(_e, {
                strThumbnail: n.thumbnail_http_address,
                bSelected: s,
                strCapsuleArtURL: d,
              }),
              s && l.createElement("div", { className: R().stream_icon_arrow }),
            ),
          ),
          l.createElement(
            "div",
            { className: (0, N.A)(R().viewer_count, !u && R().vod_title) },
            u
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(j.y_e, null),
                  l.createElement(
                    "div",
                    { className: R().ViewerNum },
                    (0, k.Dq)(m),
                  ),
                )
              : h,
          ),
        );
      }
      function _e(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: s } = e,
          n = s ? R().stream_icon_selected : R().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, N.A)(n, R().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(L.o, {
              className: (0, N.A)(n, R().stream_icon_show_on_hover),
              srcs: e,
            }),
          );
        }
        return l.createElement("img", { className: n, src: a });
      }
      function Ne(e) {
        const { stream: t, orientation: a } = e,
          s = "below" == a,
          [n, r] = (0, i.q3)(() => {
            var e;
            return [
              v.es.GetBroadcast(t.steamid),
              null === (e = v.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, i.q3)(() => t.steamid);
        return n
          ? l.createElement(
              "div",
              {
                className: (0, N.A)({
                  [R().chat_below_container]: s,
                  [R().chat_rightside_container]: !s,
                  [R().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: R().ChatContainer },
                l.createElement(c.I, {
                  emoticonStore: M.MX,
                  watchLocation: 6,
                  steamID: o,
                  broadcastID: r,
                }),
              ),
            )
          : null;
      }
    },
    96715: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      const s =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      const s =
        a.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
