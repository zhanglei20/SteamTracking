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
    16569: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => u });
      var s = a(81115),
        n = a(58584),
        r = a(59913),
        i = a(42891),
        o = a(90626),
        l = a(28679);
      function c(e, t) {
        var a = Object.create(null);
        return (
          e &&
            o.Children.map(e, function (e) {
              return e;
            }).forEach(function (e) {
              a[e.key] = (function (e) {
                return t && (0, o.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          a
        );
      }
      function d(e, t, a) {
        return null != a[t] ? a[t] : e.props[t];
      }
      function p(e, t, a) {
        var s = c(e.children),
          n = (function (e, t) {
            function a(a) {
              return a in t ? t[a] : e[a];
            }
            (e = e || {}), (t = t || {});
            var s,
              n = Object.create(null),
              r = [];
            for (var i in e)
              i in t ? r.length && ((n[i] = r), (r = [])) : r.push(i);
            var o = {};
            for (var l in t) {
              if (n[l])
                for (s = 0; s < n[l].length; s++) {
                  var c = n[l][s];
                  o[n[l][s]] = a(c);
                }
              o[l] = a(l);
            }
            for (s = 0; s < r.length; s++) o[r[s]] = a(r[s]);
            return o;
          })(t, s);
        return (
          Object.keys(n).forEach(function (r) {
            var i = n[r];
            if ((0, o.isValidElement)(i)) {
              var l = r in t,
                c = r in s,
                p = t[r],
                h = (0, o.isValidElement)(p) && !p.props.in;
              !c || (l && !h)
                ? c || !l || h
                  ? c &&
                    l &&
                    (0, o.isValidElement)(p) &&
                    (n[r] = (0, o.cloneElement)(i, {
                      onExited: a.bind(null, i),
                      in: p.props.in,
                      exit: d(i, "exit", e),
                      enter: d(i, "enter", e),
                    }))
                  : (n[r] = (0, o.cloneElement)(i, { in: !1 }))
                : (n[r] = (0, o.cloneElement)(i, {
                    onExited: a.bind(null, i),
                    in: !0,
                    exit: d(i, "exit", e),
                    enter: d(i, "enter", e),
                  }));
            }
          }),
          n
        );
      }
      var h =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        m = (function (e) {
          function t(t, a) {
            var s,
              n = (s = e.call(this, t, a) || this).handleExited.bind(
                (0, r.A)(s),
              );
            return (
              (s.state = {
                contextValue: { isMounting: !0 },
                handleExited: n,
                firstRender: !0,
              }),
              s
            );
          }
          (0, i.A)(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (a.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var a,
                s,
                n = t.children,
                r = t.handleExited;
              return {
                children: t.firstRender
                  ? ((a = e),
                    (s = r),
                    c(a.children, function (e) {
                      return (0, o.cloneElement)(e, {
                        onExited: s.bind(null, e),
                        in: !0,
                        appear: d(e, "appear", a),
                        enter: d(e, "enter", a),
                        exit: d(e, "exit", a),
                      });
                    }))
                  : p(e, n, r),
                firstRender: !1,
              };
            }),
            (a.handleExited = function (e, t) {
              var a = c(this.props.children);
              e.key in a ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var a = (0, n.A)({}, t.children);
                    return delete a[e.key], { children: a };
                  }));
            }),
            (a.render = function () {
              var e = this.props,
                t = e.component,
                a = e.childFactory,
                n = (0, s.A)(e, ["component", "childFactory"]),
                r = this.state.contextValue,
                i = h(this.state.children).map(a);
              return (
                delete n.appear,
                delete n.enter,
                delete n.exit,
                null === t
                  ? o.createElement(l.A.Provider, { value: r }, i)
                  : o.createElement(
                      l.A.Provider,
                      { value: r },
                      o.createElement(t, n, i),
                    )
              );
            }),
            t
          );
        })(o.Component);
      (m.propTypes = {}),
        (m.defaultProps = {
          component: "div",
          childFactory: function (e) {
            return e;
          },
        });
      const u = m;
    },
    45476: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          BroadcastEmbeddablePopoutHeader: () => ge,
          default: () => me,
        });
      var s = a(34629),
        n = a(7850),
        r = a(41735),
        i = a.n(r),
        o = a(75844),
        l = a(65946),
        c = a(90626),
        d = a(39606),
        p = a(72224),
        h = a(55963),
        m = a(55263),
        u = a(18654),
        A = a(94095),
        _ = a(20433),
        j = a(60014),
        x = a(22797),
        g = a(52038),
        S = a(78327),
        N = a(43087),
        b = a.n(N),
        C = a(35380),
        v = a(39777),
        I = a(71420),
        w = a(42834),
        D = a(5309);
      const M = (0, o.PA)((e) => {
        const { appid: t } = e,
          a = (0, j.n9)(),
          s = (0, c.useRef)({ include_assets: !0, include_release: !0 }),
          r = (0, C.$5)(t),
          { data: i } = (0, v.J$)(r),
          { data: o } = (0, v.lv)(r),
          { data: l } = (0, v.by)(r),
          [d, p] = (0, m.t7)(t, s.current);
        let N = (0, g.A)(
            b().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          M = b().StoreSaleWidgetImage_mini,
          y = b().StoreSaleImage_mini;
        if (null == i)
          return (0, n.jsx)("div", {
            className: N,
            children: (0, n.jsx)(x.t, { size: "medium" }),
          });
        if (null == i || !i.name)
          return (0, n.jsx)("div", {
            className: u.StoreSaleWidgetEmptyContainer,
          });
        const E = 8 != i.type,
          f = (0, h.wJ)((0, I._)(i), a);
        return (0, n.jsxs)("div", {
          className: N,
          children: [
            (0, n.jsx)("a", {
              href: f,
              target: S.TS.IN_CLIENT ? void 0 : "_blank",
              children: (0, n.jsx)(_.j, {
                id: r,
                children: (0, n.jsx)("div", {
                  className: M,
                  children:
                    o &&
                    (0, n.jsx)("img", {
                      className: y,
                      src: (0, w.b0)(o, "small_capsule"),
                      alt: i.name,
                    }),
                }),
              }),
            }),
            (0, n.jsxs)("div", {
              className: u.StoreSaleBroadcastWidgetRight,
              children: [
                (0, n.jsx)("a", {
                  href: f,
                  target: S.TS.IN_CLIENT ? void 0 : "_blank",
                  children: (0, n.jsx)(_.j, {
                    id: r,
                    children: (0, n.jsx)("div", {
                      className: (0, g.A)(
                        u.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                      children: i.name,
                    }),
                  }),
                }),
                l &&
                  (0, n.jsx)("div", {
                    className: u.StoreSaleWidgetRelease,
                    children: (0, D.CC)(l),
                  }),
                Boolean(E) && (0, n.jsx)(A.w, { id: r, bShowDemoButton: !0 }),
              ],
            }),
          ],
        });
      });
      var y = a(22837);
      function E() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var f = a(60727),
        T = a(54728),
        B = a(34010),
        L = a(16021),
        P = a(94011),
        U = a(26296),
        k = a(96236),
        O = a(12155),
        G = a(32754),
        z = a(61859),
        R = a(82227),
        V = a(73745),
        F = a(17720),
        W = a(8092),
        H = a(53120),
        Q = a.n(H);
      const J = (0, o.PA)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          s = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          r = (0, c.useRef)(null),
          [o, l] = (0, c.useState)(
            t ? W.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, c.useEffect)(() => {
            const e = i().CancelToken.source();
            r.current = e.cancel;
            return (
              (async () => {
                const t = F.b.InitFromClanID(a),
                  s = await W.pF.LoadCreatorHome(t, !1, e);
                e.token.reason || l(s);
              })(),
              () => {
                r.current && r.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          s || !o || !o.BIsLoaded())
        )
          return null;
        const d =
          S.TS.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return (0, n.jsx)("div", {
          className: Q().item_drop_ctn,
          children: (0, n.jsxs)("div", {
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
                (0, n.jsx)("a", {
                  href: d,
                  target: S.TS.IN_CLIENT ? "" : "_blank",
                  children: (0, z.we)("#SalePage_WatchForDrop_LearnMore"),
                }),
            ],
          }),
        });
      });
      var Y = a(95695),
        Z = a.n(Y),
        K = a(96715),
        X = a(10886),
        q = a(19654),
        $ = a(3209),
        ee = a(9154),
        te = a(51272),
        ae = a(14256),
        se = a.n(ae);
      function ne(e) {
        const { steamid: t, closeModal: a } = e;
        return (0, n.jsxs)(ee.o0, {
          strDescription: "",
          strTitle: (0, z.we)("#Button_Share"),
          onCancel: a,
          onOK: a,
          bAlertDialog: !0,
          modalClassName: "EventDisplay_Share_Dialog",
          children: [
            (0, n.jsx)(re, { steamid: t }),
            (0, n.jsx)(ie, { steamid: t }),
          ],
        });
      }
      function re(e) {
        const { steamid: t } = e,
          a = (function (e) {
            const t = S.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e;
            return {
              strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: t + "?site=twitter",
              strRedditUrl: t + "?site=reddit",
            };
          })(t);
        return (0, n.jsxs)("div", {
          className: (0, g.A)(Z().FlexRowContainer, se().share_controls_ctn),
          children: [
            (0, n.jsx)(G.he, {
              toolTipContent: (0, z.we)("#EventDisplay_Share_OnFaceBook"),
              children: (0, n.jsx)(te.uU, {
                href: a.strFacebookUrl,
                className: se().ShareBtn,
                children: (0, n.jsx)("img", {
                  className: (0, g.A)(Z().Button),
                  src: X.A,
                }),
              }),
            }),
            (0, n.jsx)(G.he, {
              toolTipContent: (0, z.we)("#EventDisplay_Share_OnTwitter"),
              children: (0, n.jsx)(te.uU, {
                href: a.strTwitterUrl,
                className: se().ShareBtn,
                children: (0, n.jsx)("img", {
                  className: (0, g.A)(Z().Button),
                  src: $.A,
                }),
              }),
            }),
            (0, n.jsx)(G.he, {
              toolTipContent: (0, z.we)("#EventDisplay_Share_OnReddit"),
              children: (0, n.jsx)(te.uU, {
                href: a.strRedditUrl,
                className: se().ShareBtn,
                children: (0, n.jsx)("img", {
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
          a = c.createRef(),
          [s, r] = c.useState(""),
          i = c.createRef(),
          o = c.useCallback(
            (e) => {
              a.current &&
                a.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(a.current.value)
                  .then((e) => {
                    r((0, z.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    r((0, z.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          l = S.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: (0, g.A)(Z().FlexRowContainer, se().linkField),
              onClick: o,
              children: [
                (0, n.jsx)("span", {
                  className: se().LinkInputLabel,
                  children: (0, z.we)("#EventDisplay_Share_Link"),
                }),
                (0, n.jsx)("textarea", {
                  className: se().LinkInput,
                  ref: a,
                  value: l,
                  readOnly: !0,
                }),
                Boolean(document.queryCommandSupported("copy")) &&
                  (0, n.jsx)(G.he, {
                    toolTipContent: (0, z.we)("#ToolTip_CopyLinkToClipboard"),
                    children: (0, n.jsx)("div", {
                      className: (0, g.A)(
                        Z().Button,
                        Z().Icon,
                        se().LinkButton,
                      ),
                      children: (0, n.jsx)("img", {
                        className: se().ClipboardIcon,
                        src: K.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              ref: i,
              className: se().ClipboardText,
              children: s,
            }),
          ],
        });
      }
      var oe = a(56011),
        le = a(738),
        ce = a(29268),
        de = a(23338),
        pe = a(75515);
      const he = {
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
      function me(e) {
        return (function () {
          const e = (0, S.Qn)();
          return !(0, S.Y2)() && !e;
        })()
          ? (0, n.jsx)(ue, { ...e })
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
          await B.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !B.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: B.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? B.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : B.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              B.j
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
          let e = B.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = T.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, B.U7)(a, t ? 2 : 3, e.snr),
            t && E() && E().AddEvent(1005),
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
                B.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              B.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            B.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await B.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = B.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await B.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const s = B.j.Get().GetConcurrentStreams(this.props) > 1;
          let r = T.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            i = (0, n.jsx)(xe, { ImgUrl: e.right_panel }, "right" + r),
            o = (0, n.jsx)(xe, { ImgUrl: e.left_panel }, "left" + r);
          if (r < 11) {
            const t = f.l.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (r = t[0]);
          }
          return (
            !(
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
              r >= 11
            ) ||
              (this.props.event &&
                this.props.event.jsondata.broadcast_force_banner) ||
              ((i = (0, n.jsx)(M, { appid: r }, "mini" + e.accountid)),
              (a.bRightPanelArtworkOrEmpty = !1)),
            s && !t
              ? ((a.leftPanel = (0, n.jsx)(
                  Ne,
                  {
                    broadcastEmbedContext: this.props,
                    curStream: e,
                    onStreamSelect: this.onStreamSelect,
                    fnFilterStreams: this.props.fnFilterStreams,
                    bShowCapsuleArt: this.props.bShowCapsuleArt,
                  },
                  "selector" + r,
                )),
                (a.rightPanel = i))
              : t
                ? ((a.leftPanel = (0, n.jsx)("div", {})),
                  (a.rightPanel = (0, n.jsx)(ve, {
                    stream: e,
                    orientation: "rightside",
                  })),
                  (a.bRightPanelArtworkOrEmpty = !1))
                : ((a.leftPanel = o), (a.rightPanel = i)),
            a
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0), E() && E().AddEvent(1004));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = B.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === B.j.Get().GetChatVisibility();
            const {
              event: a,
              language: s,
              fnRenderBroadcastContext: r,
            } = this.props;
            a &&
              (e = {
                ...e,
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  s || (0, y.sf)(S.TS.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  s || (0, y.sf)(S.TS.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(s || (0, y.sf)(S.TS.LANGUAGE)),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              });
            let i = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              l = B.j.Get().GetConcurrentStreams(this.props) > 1;
            const d = () => {
              var t, a;
              e.nAppIDVOD && this.PlayNextNonVOD(),
                null === (a = (t = this.props).fnOnVideoEnd) ||
                  void 0 === a ||
                  a.call(t);
            };
            return (0, n.jsx)(c.Fragment, {
              children: (0, n.jsxs)("div", {
                className: "broadcast_embed_top_ctn_trgt",
                style: this.state.style,
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, g.A)({
                      [Q().bordered_container]: !0,
                      [Q().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, g.A)(
                          Q().bordered_title,
                          "bordered_title_trgt",
                        ),
                        children: [
                          (0, n.jsx)(P.K, {}),
                          (0, n.jsx)("div", {
                            className: Q().streamTitle,
                            children: o,
                          }),
                          (0, n.jsxs)("div", {
                            className: Q().bordered_corner_container,
                            children: [
                              Boolean(!this.state.bExpanded) &&
                                (0, n.jsx)(G.he, {
                                  toolTipContent: (0, z.we)(
                                    "#StoreBroadcast_Change_store_Broadcast_settings",
                                  ),
                                  children: (0, n.jsx)("div", {
                                    className: Q().broadcast_settings_icon,
                                    onClick: () =>
                                      window.open(
                                        `${S.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                      ),
                                  }),
                                }),
                              (0, n.jsx)(G.he, {
                                toolTipContent: (0, z.we)(
                                  "#StoreBroadcast_Hide_Tooltip",
                                ),
                                children: (0, n.jsx)("div", {
                                  className: this.state.bExpanded
                                    ? Q().bordered_corner_expanded
                                    : Q().bordered_corner_shrinked,
                                  onClick: this.ToggleBroadcastExpandShrink,
                                }),
                              }),
                            ],
                          }),
                          Boolean(e.gamedata_subtitle) &&
                            (0, n.jsx)("div", {
                              className: Q().bordered_subtitle,
                              children: e.gamedata_subtitle,
                            }),
                        ],
                      }),
                      Boolean(this.state.bExpanded) &&
                        (0, n.jsxs)("div", {
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
                            (0, n.jsx)("div", {
                              className: Q().LeftPanelCtn,
                              children: i.leftPanel,
                            }),
                            (0, n.jsx)(Ae, {
                              stream: e,
                              bStartMuted: this.state.bStartMuted,
                              fnRenderBroadcastContext: r,
                              fnOnVideoEnd: d,
                              bWidePlayer: this.props.bWidePlayer,
                            }),
                            (0, n.jsx)("div", {
                              className: Q().RightPanelCtn,
                              children: i.rightPanel,
                            }),
                            Boolean(this.state.bExpanded) &&
                              (0, n.jsx)(je, {
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
                    a && a.jsondata && a.jsondata.broadcast_item_drops_enabled,
                  ) && (0, n.jsx)(J, { event: a }),
                  (0, n.jsx)("div", { className: Q().clear_div }),
                ],
              }),
            });
          }
          return (0, n.jsx)("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, s.Cg)([V.oI], ue.prototype, "ToggleBroadcastExpandShrink", null),
        (0, s.Cg)([V.oI], ue.prototype, "OnShrinkTransitionEnd", null),
        (0, s.Cg)([V.oI], ue.prototype, "onStreamSelect", null),
        (0, s.Cg)([V.oI], ue.prototype, "PlayNextNonVOD", null),
        (ue = (0, s.Cg)([o.PA], ue));
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
          const e = T.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, B.U7)(e, 7, this.props.stream.snr),
            E() && E().AddEvent(1006),
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
          return (0, n.jsx)("div", {
            className: Q().wrapper,
            children: (0, n.jsx)(de.j, {
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
              children: (0, n.jsxs)("div", {
                className: this.state.bPopout
                  ? Q().broadcast_floating
                  : Q().video_container,
                children: [
                  this.state.bPopout &&
                    (0, n.jsx)(ge, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  (0, n.jsx)("div", {
                    className: Q().BroadcastPlayerContainer,
                    children: (0, n.jsx)(p.default, {
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
          [a] = (0, l.q3)(() => [t.steamid]),
          s = T.es.GetOrCreateBroadcastInfo(a).m_nAppID,
          r = he.list.find(
            (e) =>
              e.appid == s &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (r) {
          let e = r.url;
          return (
            (S.TS.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            (0, n.jsx)("a", {
              href: e,
              children: (0, z.we)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            })
          );
        }
        {
          const e = S.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return (0, n.jsx)(G.he, {
            toolTipContent: (0, z.we)("#BroadcastWatch_View_Broadcast_Page"),
            children: (0, n.jsx)("a", {
              href: e,
              className: Q().external_link,
              children: (0, n.jsx)(O.GrD, {}),
            }),
          });
        }
      }
      (0, s.Cg)([V.oI], Ae.prototype, "CloseBroadcastPopup", null),
        (0, s.Cg)([V.oI], Ae.prototype, "OnEnter", null),
        (0, s.Cg)([V.oI], Ae.prototype, "OnLeave", null);
      let je = class extends c.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = T.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, B.U7)(
            t,
            "show" === B.j.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr,
          ),
            B.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = T.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, B.U7)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = "remove" != B.j.Get().GetChatVisibility(),
            t = "hide" === B.j.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            s = a;
          let r = Number.parseInt(
            "" +
              T.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return (0, n.jsxs)("div", {
            className: (0, g.A)(Q().viewer_bar, "viewer_bar"),
            children: [
              (0, n.jsxs)("div", {
                className: (0, g.A)(Q().viewer_count, "viewer_count"),
                children: [(0, n.jsx)(O.y_e, {}), (0, R.Dq)(r)],
              }),
              (0, n.jsxs)("div", {
                className: (0, g.A)(Q().viewer_links, "viewer_links"),
                children: [
                  Boolean(e && !t && this.props.bMultistream) &&
                    (0, n.jsx)("div", {
                      className: Q().chat_link,
                      children: (0, n.jsx)("a", {
                        href: "#",
                        className: Q().ChatToggle,
                        onClick: this.OnToggleChat,
                        children: (0, z.we)("#sale_three_section_show_streams"),
                      }),
                    }),
                  e &&
                    (0, n.jsxs)("div", {
                      className: Q().chat_link,
                      children: [
                        (0, n.jsx)(O.ROZ, {}),
                        (0, n.jsx)("a", {
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
                  s &&
                    (0, n.jsxs)("div", {
                      className: Q().chat_link,
                      children: [
                        (0, n.jsx)(O.SYj, {}),
                        (0, n.jsx)("a", {
                          href: "#",
                          className: Q().ChatToggle,
                          onClick: (e) =>
                            (0, le.pg)(
                              (0, n.jsx)(ne, {
                                steamid: this.props.stream.steamid,
                              }),
                              (0, oe.uX)(e),
                            ),
                          children: (0, z.we)("#Broadcast_ShareBroadcast"),
                        }),
                      ],
                    }),
                  (0, n.jsx)(G.he, {
                    toolTipContent: (0, z.we)(
                      "#StoreBroadcast_Change_store_Broadcast_settings",
                    ),
                    children: (0, n.jsx)("a", {
                      href:
                        S.TS.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: S.TS.IN_CLIENT ? void 0 : "_blank",
                      className: Q().settings_link,
                      children: (0, n.jsx)(O.wB_, {}),
                    }),
                  }),
                  a && (0, n.jsx)(_e, { ...this.props }),
                ],
              }),
              Boolean(this.props.chatAnnouncementGivewayGID) &&
                (0, n.jsx)(ce.V, {
                  gidGiveaway: this.props.chatAnnouncementGivewayGID,
                  stream: this.props.stream,
                }),
            ],
          });
        }
      };
      (0, s.Cg)([V.oI], je.prototype, "OnToggleChat", null),
        (0, s.Cg)([V.oI], je.prototype, "onWatchBroadcastPage", null),
        (je = (0, s.Cg)([o.PA], je));
      class xe extends c.Component {
        render() {
          let e = this.props.ImgUrl;
          return (0, n.jsxs)("div", {
            className: Q().SidePanelBackground,
            children: [
              e &&
                (0, n.jsx)("img", {
                  className: Q().side_panels,
                  src: this.props.ImgUrl,
                }),
              !e && (0, n.jsx)("div", { className: Q().side_panels }),
            ],
          });
        }
      }
      const ge = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let a = T.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        a = a != T.fO ? a : 0;
        const s = (0, C.$5)(a),
          { data: r } = (0, v.J$)(s);
        return (0, n.jsxs)("div", {
          className: [Q().PopOutVideoTitleBar, Q().NoSeslect].join(" "),
          children: [
            Boolean(r)
              ? (0, n.jsx)(_.u, {
                  id: s,
                  className: Q().PopOutVideoTitleText,
                  children: (0, z.we)("#StoreBroadcast_Detault_popout_Title"),
                })
              : (0, n.jsx)("div", {
                  className: Q().PopOutVideoTitleText,
                  children: (0, z.we)("#StoreBroadcast_Detault_popout_Title"),
                }),
            (0, n.jsx)(G.he, {
              toolTipContent: (0, z.we)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              children: (0, n.jsx)("button", {
                className: Q().PopOutVideoCloseButton,
                onClick: e.OnPreventPopup,
                children: (0, n.jsx)(O.X, {}),
              }),
            }),
          ],
        });
      });
      function Se(e, t) {
        var a;
        const s = T.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = L.A.Get().GetApp(s);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(Q().strStreamIconCapsuleArtHeight)
          : parseInt(Q().strStreamIconScreenshotArtHeight);
      }
      function Ne(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: s,
            bShowCapsuleArt: r,
            broadcastEmbedContext: i,
          } = e,
          o = (0, c.useRef)(void 0),
          l = (0, c.useMemo)(() => {
            const e = B.j
              .Get()
              .GetStreams(i)
              .filter((e) => !s || s(e));
            return (0, B.MU)(e), e;
          }, [i, s]);
        return (
          (0, c.useEffect)(() => {
            if (o && o.current) {
              const e = l
                .map((e) => T.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              L.A.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of l) {
                      if (t.accountid == a.accountid) break;
                      e += Se(r, a);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [l, r, t.accountid, o]),
          (0, n.jsx)("div", {
            ref: o,
            className: (0, g.A)({
              [Q().side_panels]: !0,
              side_panels: !0,
              [Q().multistream]: !0,
              [Q().scrollingstreams]: l.length > 3,
            }),
            children: (0, n.jsx)("div", {
              className: Q().MultiStreamCtn,
              children: l.map((e) => {
                var s;
                return (0, n.jsx)(
                  be,
                  {
                    stream: e,
                    bSelected: t.accountid == e.accountid,
                    onStreamSelect: a,
                    bShowCapsuleArt: r,
                  },
                  null !== (s = e.accountid) && void 0 !== s ? s : e.steamid,
                );
              }),
            }),
          })
        );
      }
      function be(e) {
        const {
          onStreamSelect: t,
          bSelected: a,
          stream: s,
          bShowCapsuleArt: r,
        } = e;
        let i = (0, l.q3)(
          () => T.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID,
        );
        i = i != T.fO ? i : 0;
        const o = (0, C.$5)(i),
          { data: c } = (0, v.J$)(o),
          { data: d } = (0, v.lv)(o);
        if (!(0, B.fn)(s)) return null;
        const p = r && d && (0, w.b0)(d, "header"),
          h = Number.parseInt("" + s.viewer_count),
          m = !Number.isNaN(h),
          u = !!s.nAppIDVOD && (null == c ? void 0 : c.name);
        return (0, n.jsxs)("div", {
          className: (0, g.A)({
            [Q().stream_icon_and_viewer_container]: !0,
            [Q().stream_featured]:
              s.current_selection_priority == pe.mY.k_eFeatured,
            [Q().display_capsule_art]: Boolean(p),
          }),
          children: [
            (0, n.jsx)(_.j, {
              id: o,
              hoverClassName: Q().StreamCapsule,
              children: (0, n.jsx)(k.K, {
                className: (0, g.A)(
                  Q().stream_icon_container,
                  a && Q().stream_selected,
                ),
                onClick: () => t && t(s),
                rootMargin: "100px 0px 100px 0px",
                children: (0, n.jsx)(Ce, {
                  strThumbnail: s.thumbnail_http_address,
                  bSelected: a,
                  strCapsuleArtURL: p,
                }),
              }),
            }),
            (0, n.jsx)("div", {
              className: (0, g.A)(Q().viewer_count, !m && Q().vod_title),
              children: m
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(O.y_e, {}),
                      (0, n.jsx)("div", {
                        className: Q().ViewerNum,
                        children: (0, R.Dq)(h),
                      }),
                    ],
                  })
                : u,
            }),
          ],
        });
      }
      function Ce(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: s } = e,
          r = s ? Q().stream_icon_selected : Q().stream_icon;
        if (t) {
          const e = [t];
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("img", {
                className: (0, g.A)(r, Q().stream_icon_hide_on_hover),
                src: t,
              }),
              (0, n.jsx)(U.o, {
                className: (0, g.A)(r, Q().stream_icon_show_on_hover),
                srcs: e,
              }),
            ],
          });
        }
        return (0, n.jsx)("img", { className: r, src: a });
      }
      function ve(e) {
        const { stream: t, orientation: a } = e,
          s = "below" == a,
          [r, i] = (0, l.q3)(() => {
            var e;
            return [
              T.es.GetBroadcast(t.steamid),
              null === (e = T.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, l.q3)(() => t.steamid);
        return r
          ? (0, n.jsx)("div", {
              className: (0, g.A)({
                [Q().chat_below_container]: s,
                [Q().chat_rightside_container]: !s,
                [Q().store_chat_ctn]: !0,
              }),
              children: (0, n.jsx)("div", {
                className: Q().ChatContainer,
                children: (0, n.jsx)(d.I, {
                  emoticonStore: B.MX,
                  watchLocation: 6,
                  steamID: o,
                  broadcastID: i,
                }),
              }),
            })
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
    59913: (e, t, a) => {
      "use strict";
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      a.d(t, { A: () => s });
    },
  },
]);
