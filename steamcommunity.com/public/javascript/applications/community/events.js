/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4268],
  {
    34418: (t) => {
      t.exports = {
        "duration-app-launch": "800ms",
        Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
        StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
        SectionButtonCtn: "_1HP0yfVUrZ-TPBYhiQkye2",
        SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
        EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
        LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
        LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
        LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
      };
    },
    16053: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => T });
      var a = n(90626),
        o = n(7850),
        s = n(43527),
        i = n(6503);
      const r = (t) =>
        (0, a.createElement)(i.Io, {
          ...t,
          key: t.match.params.oldAnnouncementGID,
          bClearDirty: !0,
          bPreview: !1,
          bPreventRedirect: !0,
        });
      var l = n(92757),
        d = n(96059),
        c = n(51006),
        p = n(60746),
        h = n(91254),
        u = n(3919),
        v = (n(64641), n(97058)),
        m = n(78327),
        _ = n(34629),
        w = n(75844),
        S = n(73745),
        I = n(8107),
        E = n(22797),
        D = n(4796),
        L = n(61859),
        g = n(14947);
      let f = class extends a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bShowModal: !1,
              bLoadedLandingState: this.props.bPreventDismiss,
            });
        }
        componentDidMount() {
          this.props.bPreventDismiss
            ? this.LoadAppAndFirstEvent()
            : (window.fnPartnerEvent_ShowInfiniteScroll = (t, e) => {
                this.setState({ bShowModal: !0, appid: t, announcementGID: e });
              });
        }
        async LoadAppAndFirstEvent() {
          var t;
          const e = (0, m.Tc)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let n;
          e && "string" == typeof e && (n = e);
          const a = window.location.href.startsWith(
              m.TS.COMMUNITY_BASE_URL + "groups",
            ),
            o = a
              ? await D.ac.LoadOGGClanInfoForGroupVanity(
                  this.props.match.params.appid_or_vanity_str,
                )
              : await D.ac.LoadOGGClanInfoForIdentifier(
                  this.props.match.params.appid_or_vanity_str,
                );
          if ((console.log("output: ", (0, g.HO)(o), a), o))
            if (o.partner_events_enabled) {
              const e = await h.O3.LoadAdjacentPartnerEventsByAnnouncement(
                n,
                o.clanSteamID,
                o.appid,
                3,
                3,
              );
              this.setState({
                bLoadedLandingState: !1,
                bShowModal: !0,
                appid: o.appid,
                clanSteamID: o.clanSteamID,
                announcementGID:
                  null === (t = null == e ? void 0 : e[0]) || void 0 === t
                    ? void 0
                    : t.AnnouncementGID,
              });
            } else this.setState({ bLoadedLandingState: !1 });
          else
            console.error(
              "EventInfiniteScrollLanding: failed to load clan info for " +
                this.props.match.params.appid_or_vanity_str,
            ),
              this.setState({ bLoadedLandingState: !1 });
        }
        HideModal() {
          this.props.bPreventDismiss || this.setState({ bShowModal: !1 });
        }
        render() {
          const { bPreventDismiss: t } = this.props;
          return this.state.bShowModal
            ? (0, o.jsx)(I.N, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: h.O3,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: t,
              })
            : this.state.bLoadedLandingState
              ? (0, o.jsx)(E.t, { string: (0, L.we)("#Loading") })
              : (0, o.jsx)("div", {});
        }
      };
      (0, _.Cg)([S.oI], f.prototype, "HideModal", null),
        (f = (0, _.Cg)([w.PA], f));
      var b = n(45699),
        G = n(76217),
        M = n(23310),
        x = n(55563),
        C = n(35685),
        j = n(12155),
        k = n(34418);
      class B extends a.Component {
        constructor(t) {
          super(t),
            (this.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            });
          const e = (0, x.v)("EventWebRowEmbed");
          if (this.ValidateStoreDefault(e)) {
            (this.state.bPreLoaded = e.bPreLoaded),
              (this.state.announcementGIDList = e.announcementGIDList),
              (this.state.last_update_event = e.last_update_event),
              (this.state.events = []),
              this.state.announcementGIDList.forEach((t) => {
                const e = h.O3.GetClanEventFromAnnouncementGID(t);
                e && this.state.events.push(e);
              });
            const t = new URLSearchParams(window.location.search),
              n = null == t ? void 0 : t.get("emgid");
            if (n) {
              const t = this.state.events.find((t) => t.GID === n);
              t &&
                ((this.state.modalInitialEvent = t),
                (this.state.bShowModal = !0));
            }
          }
        }
        async componentDidMount() {
          const {
            appid: t,
            event_customization: e,
            partnerEventStore: n,
            trackingLocation: a,
          } = this.props;
          if (!this.state.bPreLoaded) {
            const o = await n.LoadAdjacentPartnerEvents(null, null, t, 0, 2, e);
            if ((this.setState({ events: o }), a && o && o.length > 0)) {
              const t = p.KN.Get().GetTracker();
              this.state.events
                .filter((t) => t.BIsPartnerEvent())
                .forEach((e) =>
                  t.MarkEventShown(e.GID, e.clanSteamID.GetAccountID(), a),
                ),
                t.Flush();
            }
          }
          window.fnPartnerEvent_ShowInfiniteScroll = (t, e) => {
            this.setState({
              bShowModal: !0,
              announcementGID: e,
              modalInitialEvent: void 0,
            });
          };
        }
        ValidateStoreDefault(t) {
          const e = t;
          return (
            !(!e || "object" != typeof e) &&
            void 0 !== e.bPreLoaded && "boolean" == typeof e.bPreLoaded &&
            Array.isArray(e.announcementGIDList)
          );
        }
        ShowModal(t) {
          const { trackingLocation: e } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: t,
            announcementGID: void 0,
          });
          const n = p.KN.Get().GetTracker();
          t &&
            t.BIsPartnerEvent() &&
            n.MarkEventRead(t.GID, t.clanSteamID.GetAccountID(), e) &&
            n.Flush();
        }
        ShowLatestUpdateModal() {
          const {
              event_gid: t,
              announcement_gid: e,
              clan_account_id: n,
            } = this.state.last_update_event,
            { trackingLocation: a } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: void 0,
            announcementGID: e,
          });
          const o = p.KN.Get().GetTracker();
          t && o.MarkEventRead(t, n, a) && o.Flush();
        }
        CloseModal() {
          this.setState({ bShowModal: !1, modalInitialEvent: null });
        }
        BHasLastUpdateEvent() {
          var t;
          return Boolean(
            null === (t = this.state.last_update_event) || void 0 === t
              ? void 0
              : t.rtime,
          );
        }
        BShouldShowLastUpdateEvent() {
          const { last_update_event: t, events: e } = this.state;
          return (
            !(
              !this.BHasLastUpdateEvent() ||
              !(null == t ? void 0 : t.announcement_gid)
            ) && !(null == e ? void 0 : e.length)
          );
        }
        render() {
          var t, e, n;
          const a = this.state.events,
            s = window.screen.width <= 500 ? 1 : 2,
            i = Boolean(null == a ? void 0 : a.length),
            r = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: d } = this.props;
          return (0, o.jsxs)(b.ml, {
            className: d,
            children: [
              this.state.bShowModal &&
                (0, o.jsx)(P, {
                  ...this.props,
                  announcementGID:
                    this.state.announcementGID ||
                    (null === (t = this.state.modalInitialEvent) || void 0 === t
                      ? void 0
                      : t.AnnouncementGID),
                  eventModel: this.state.modalInitialEvent,
                  closeModal: this.CloseModal,
                }),
              i &&
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("h2", {
                      children: (0, L.we)("#EventBrowse_RecentEvents"),
                    }),
                    !(null === (e = this.context) || void 0 === e
                      ? void 0
                      : e.IN_GAMEPADUI) &&
                      (0, o.jsx)("div", {
                        className: k.SectionButtonCtn,
                        children: this.props.bViewAllShowInfiniteScroll
                          ? (0, o.jsx)(b.ml, {
                              className: k.SectionButton,
                              onClick: () => this.ShowModal(a[0]),
                              children: (0, L.we)("#EventBrowse_MoreEventsBtn"),
                            })
                          : (0, o.jsx)(u.tj, {
                              eventModel: a[0],
                              route: u.PH.k_eViewWebSiteHub,
                              className: k.SectionButton,
                              children: (0, L.we)("#EventBrowse_MoreEventsBtn"),
                            }),
                      }),
                    (0, o.jsx)("div", {
                      className: k.EventsSummariesCtn,
                      children: a.slice(0, s).map((t) => {
                        const e =
                          1 === a.length && window.screen.width > 500
                            ? C.kH
                            : C.uY;
                        return (0, o.jsx)(
                          e,
                          {
                            event: t,
                            onClick: (e) => {
                              this.ShowModal(t),
                                e.stopPropagation(),
                                e.preventDefault();
                            },
                          },
                          t.GID,
                        );
                      }),
                    }),
                  ],
                }),
              Boolean(r && l) &&
                (0, o.jsx)(U, {
                  nUpdateTime: this.state.last_update_event.rtime,
                  announcementGID: l,
                  onClick: this.ShowLatestUpdateModal,
                }),
              Boolean(
                r &&
                  !l &&
                  !(null === (n = this.context) || void 0 === n
                    ? void 0
                    : n.IN_GAMEPADUI),
              ) &&
                (0, o.jsx)(A, {
                  nUpdateTime: this.state.last_update_event.rtime,
                  onClick: this.ShowLatestUpdateModal,
                }),
            ],
          });
        }
      }
      function P(t) {
        const {
            appid: e,
            partnerEventStore: n,
            trackingLocation: a,
            announcementGID: s,
            eventModel: i,
            closeModal: r,
          } = t,
          l = (0, m.Qn)();
        return (0, o.jsx)(I.N, {
          className: l ? void 0 : k.StoreHeaderAdjust,
          eventClassName: l ? k.GamePadUIWidthAdjust : void 0,
          appid: e,
          trackingLocation: a,
          announcementGID: s,
          partnerEventStore: n,
          eventModel: i,
          closeModal: r,
        });
      }
      function A(t) {
        return (0, o.jsxs)("div", {
          className: k.LatestUpdateButtonCtn,
          children: [
            (0, o.jsx)("div", {
              className: k.LatestUpdateIcon,
              children: (0, o.jsx)(j.UTF, { role: "presentation" }),
            }),
            (0, o.jsx)(b.ml, {
              className: k.LatestUpdateButton,
              onClick: t.onClick,
              children: (0, L.we)(
                "#EventBrowse_LatestUpdateTime_Button",
                (0, L._l)(t.nUpdateTime),
              ),
            }),
          ],
        });
      }
      function U(t) {
        const { nUpdateTime: e, announcementGID: n, onClick: a } = t,
          s = n ? h.O3.GetClanEventFromAnnouncementGID(n) : null,
          i = (t) => {
            null == a || a(), t.stopPropagation(), t.preventDefault();
          },
          r = window.screen.width > 500 ? C.kH : C.uY;
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsx)("h2", {
              children: (0, L.we)("#EventBrowse_LastUpdateDate", (0, L._l)(e)),
            }),
            (0, o.jsx)("div", {
              className: k.SectionButtonCtn,
              children: (0, o.jsx)("div", {
                className: k.SectionButton,
                onClick: i,
                children: (0, L.we)("#EventBrowse_ViewLatestUpdate"),
              }),
            }),
            Boolean(s) &&
              (0, o.jsx)(G.Z, {
                className: k.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: M.iU.PREFERRED_CHILD,
                children: (0, o.jsx)(r, { event: s, onClick: i }),
              }),
          ],
        });
      }
      (B.contextType = m.QO),
        (0, _.Cg)([S.oI], B.prototype, "ShowModal", null),
        (0, _.Cg)([S.oI], B.prototype, "ShowLatestUpdateModal", null),
        (0, _.Cg)([S.oI], B.prototype, "CloseModal", null);
      var y = n(25918),
        N = n(44165);
      class H extends a.Component {
        render() {
          const { appid: t } = this.props;
          let e = N.HD.GetTimeNowWithOverrideAsDate(),
            n = new Date(e.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return (0, o.jsx)("div", {
            className:
              "detailBox altFooter greenlight_home_box section announcements_row",
            children: (0, o.jsx)(B, {
              appid: t,
              partnerEventStore: y.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: k.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            }),
          });
        }
      }
      function T(t) {
        const [e, n] = a.useState(!0);
        return (
          a.useEffect(() => {
            c.Vw.Init(new d.D(m.TS.WEBAPI_BASE_URL)),
              h.O3.Init(),
              Promise.all([p.KN.InitGlobal()]).then(() => n(!1));
          }, []),
          e
            ? null
            : (0, o.jsx)(u.IQ.Provider, {
                value: { bCanUseLink: !0 },
                children: (0, o.jsxs)(l.dO, {
                  children: [
                    (0, o.jsx)(l.qh, {
                      exact: !0,
                      path: s.g5.ViewEventDetails(
                        ":appid_or_vanity_str",
                        ":oldAnnouncementGID(\\d+)",
                      ),
                      render: (t) => (0, o.jsx)(r, { ...t }),
                    }),
                    (0, o.jsx)(l.qh, {
                      exact: !0,
                      path: s.g5.Listing(":appid_or_vanity_str"),
                      render: (t) =>
                        (0, o.jsx)(
                          f,
                          { ...t, bPreventDismiss: !0, trackingLocation: 6 },
                          "InfScroll_NoDismissApp_" + t.match.params.appid,
                        ),
                    }),
                    (0, o.jsx)(l.qh, {
                      exact: !0,
                      path: s.g5.WorkshopHub(":appid(\\d+)"),
                      render: (t) =>
                        (0, a.createElement)(H, {
                          ...t,
                          appid: +t.match.params.appid,
                          key: "Workshop" + t.match.params.appid,
                        }),
                    }),
                    (0, o.jsx)(l.qh, {
                      path: s.g5.AppHub(":appid"),
                      render: (t) =>
                        (0, a.createElement)(f, {
                          ...t,
                          key: "InfScroll_App_" + t.match.params.appid,
                          trackingLocation: 6,
                        }),
                    }),
                    (0, o.jsx)(l.qh, {
                      path: s.g5.GroupHub(":group_vanity"),
                      render: (t) =>
                        (0, a.createElement)(f, {
                          ...t,
                          key: "InfScroll_App_" + t.match.params.group_vanity,
                          trackingLocation: 6,
                        }),
                    }),
                    (0, o.jsx)(l.qh, { component: v.a }),
                  ],
                }),
              })
        );
      }
    },
  },
]);
