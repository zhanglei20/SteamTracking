/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4268],
  {
    34418: (e) => {
      e.exports = {
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
    5901: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => F });
      var a = n(90626),
        o = n(7850),
        s = n(43527),
        i = n(6503);
      const r = (e) =>
        (0, a.createElement)(i.Io, {
          ...e,
          key: e.match.params.oldAnnouncementGID,
          bClearDirty: !0,
          bPreview: !1,
          bPreventRedirect: !0,
        });
      var c = n(92757),
        l = n(96059),
        d = n(51006),
        p = n(60746),
        u = n(91254),
        m = n(3919),
        h = (n(64641), n(97058)),
        v = n(78327),
        w = n(34629),
        S = n(75844),
        _ = n(73745),
        f = n(8107),
        I = n(22797),
        E = n(4796),
        g = n(61859),
        D = n(14947);
      let L = class extends a.Component {
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
            : (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
                this.setState({ bShowModal: !0, appid: e, announcementGID: t });
              });
        }
        async LoadAppAndFirstEvent() {
          var e;
          const t = (0, v.Tc)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let n;
          t && "string" == typeof t && (n = t);
          const a = window.location.href.startsWith(
              v.TS.COMMUNITY_BASE_URL + "groups",
            ),
            o = a
              ? await E.ac.LoadOGGClanInfoForGroupVanity(
                  this.props.match.params.appid_or_vanity_str,
                )
              : await E.ac.LoadOGGClanInfoForIdentifier(
                  this.props.match.params.appid_or_vanity_str,
                );
          if ((console.log("output: ", (0, D.HO)(o), a), o))
            if (o.partner_events_enabled) {
              const t = await u.O3.LoadAdjacentPartnerEventsByAnnouncement(
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
                  null === (e = null == t ? void 0 : t[0]) || void 0 === e
                    ? void 0
                    : e.AnnouncementGID,
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
          const { bPreventDismiss: e } = this.props;
          return this.state.bShowModal
            ? (0, o.jsx)(f.N, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: u.O3,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
              ? (0, o.jsx)(I.t, { string: (0, g.we)("#Loading") })
              : (0, o.jsx)("div", {});
        }
      };
      (0, w.Cg)([_.oI], L.prototype, "HideModal", null),
        (L = (0, w.Cg)([S.PA], L));
      var b = n(45699),
        x = n(76217),
        C = n(23310);
      function j(e, t) {
        const n = (function () {
            const [e, t] = (0, a.useState)(location.search);
            return (
              (0, a.useEffect)(() => {
                function e(e) {
                  "urlchange" === e.data && t(location.search);
                }
                return (
                  window.addEventListener("message", e),
                  () => {
                    window.removeEventListener("message", e);
                  }
                );
              }, []),
              e
            );
          })(),
          o = (0, a.useMemo)(() => {
            const a = new URLSearchParams(n.substring(1)).get(e);
            return null != a
              ? null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== a)
                  : t.constructor(a)
                : a
              : t;
          }, [e, t, n]),
          [s, i] = (0, a.useState)(o),
          r = a.useCallback(
            (t, o = !1) => {
              const s = new URLSearchParams(n.substring(1));
              if (null != t) {
                if (s.get(e) == t) return;
                s.set(e, String(t));
              } else {
                if (!s.has(e)) return;
                s.delete(e);
              }
              o
                ? history.replaceState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${s}`),
                  )
                : history.pushState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${s}`),
                  ),
                (0, a.startTransition)(() => {
                  i(t), window.postMessage("urlchange");
                });
            },
            [e, n],
          );
        return [s, r];
      }
      var G = n(55563),
        k = n(35685),
        P = n(12155),
        A = n(9154),
        y = n(34418);
      function M(e) {
        const {
            appid: t,
            event_customization: n,
            partnerEventStore: s,
            trackingLocation: i,
            strClassName: r,
            bViewAllShowInfiniteScroll: c,
          } = e,
          [l, d] = (0, a.useState)(null),
          [h, w, S] = (0, _.uD)(),
          [f, I] = (0, a.useState)(null),
          [E, D] = (0, a.useState)([]),
          [L, x] = (0, a.useState)(void 0),
          [C, P] = (0, a.useState)(null),
          [M] = j("emgid", void 0),
          T = (0, a.useCallback)(() => {
            I(null), S();
          }, [S]),
          H = (0, a.useCallback)(
            (e) => {
              if (i && e && e.BIsPartnerEvent()) {
                const t = p.KN.Get().GetTracker();
                t.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), i) &&
                  t.Flush();
              }
              I(e), x(void 0), w();
            },
            [i, w],
          ),
          R = (0, a.useCallback)(() => {
            const { event_gid: e, announcement_gid: t, clan_account_id: n } = C,
              a = p.KN.Get().GetTracker();
            i && e && a.MarkEventRead(e, n, i) && a.Flush(), x(t), I(null), w();
          }, [C, w, i]);
        (0, a.useEffect)(() => {
          const e = (0, G.v)("EventWebRowEmbed");
          let a = !1;
          if (
            (function (e) {
              const t = e;
              if (t && "object" == typeof t)
                return (
                  void 0 !== t.bPreLoaded &&
                  "boolean" == typeof t.bPreLoaded &&
                  Array.isArray(t.announcementGIDList)
                );
              return !1;
            })(e)
          ) {
            (a = e.bPreLoaded),
              D(e.announcementGIDList),
              P(e.last_update_event);
            const t = [];
            if (
              (e.announcementGIDList.forEach((e) => {
                const n = u.O3.GetClanEventFromAnnouncementGID(e);
                n && t.push(n);
              }),
              d(t),
              M)
            ) {
              const e = t.find((e) => e.GID === M);
              e && H(e);
            }
          }
          if (!a) {
            (async () => {
              const e = await s.LoadAdjacentPartnerEvents(
                void 0,
                void 0,
                t,
                0,
                2,
                n,
              );
              if ((d(e), i && e && e.length > 0)) {
                const t = p.KN.Get().GetTracker();
                e
                  .filter((e) => e.BIsPartnerEvent())
                  .forEach((e) =>
                    t.MarkEventShown(e.GID, e.clanSteamID.GetAccountID(), i),
                  ),
                  t.Flush();
              }
            })();
          }
        }, [t, M, n, H, s, i]),
          (0, a.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
                x(t), I(null), x(t), w();
              }),
              () => {
                window.fnPartnerEvent_ShowInfiniteScroll &&
                  delete window.fnPartnerEvent_ShowInfiniteScroll;
              }
            ),
            [w],
          );
        const F = !!C && !!C.rtime,
          O =
            F && !!C.announcement_gid && (!l || 0 == l.length)
              ? C.announcement_gid
              : void 0,
          q = window.screen.width <= 500 ? 1 : 2;
        return (0, o.jsxs)(b.ml, {
          className: r,
          children: [
            (0, o.jsx)(A.EN, {
              active: h,
              children: (0, o.jsx)(B, {
                ...e,
                announcementGID: L || (null == f ? void 0 : f.AnnouncementGID),
                eventModel: f,
                closeModal: T,
              }),
            }),
            !!l &&
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)("h2", {
                    children: (0, g.we)("#EventBrowse_RecentEvents"),
                  }),
                  !v.TS.IN_GAMEPADUI &&
                    !!l &&
                    (0, o.jsx)("div", {
                      className: y.SectionButtonCtn,
                      children: c
                        ? (0, o.jsx)(b.ml, {
                            className: y.SectionButton,
                            onClick: () => H(l[0]),
                            children: (0, g.we)("#EventBrowse_MoreEventsBtn"),
                          })
                        : (0, o.jsx)(m.tj, {
                            eventModel: l[0],
                            route: m.PH.k_eViewWebSiteHub,
                            className: y.SectionButton,
                            children: (0, g.we)("#EventBrowse_MoreEventsBtn"),
                          }),
                    }),
                  (0, o.jsx)("div", {
                    className: y.EventsSummariesCtn,
                    children: l.slice(0, q).map((e) => {
                      const t =
                        1 === l.length && window.screen.width > 500
                          ? k.kH
                          : k.uY;
                      return (0, o.jsx)(
                        t,
                        {
                          event: e,
                          onClick: (t) => {
                            H(e), t.stopPropagation(), t.preventDefault();
                          },
                        },
                        e.GID,
                      );
                    }),
                  }),
                ],
              }),
            F &&
              !!O &&
              (0, o.jsx)(U, {
                nUpdateTime: C.rtime,
                announcementGID: O,
                onClick: R,
              }),
            F &&
              !O &&
              !v.TS.IN_GAMEPADUI &&
              (0, o.jsx)(N, { nUpdateTime: C.rtime, onClick: R }),
          ],
        });
      }
      function B(e) {
        const {
            appid: t,
            partnerEventStore: n,
            trackingLocation: a,
            announcementGID: s,
            eventModel: i,
            closeModal: r,
          } = e,
          c = (0, v.Qn)();
        return (0, o.jsx)(f.N, {
          className: c ? void 0 : y.StoreHeaderAdjust,
          eventClassName: c ? y.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: s,
          partnerEventStore: n,
          eventModel: i,
          closeModal: r,
        });
      }
      function N(e) {
        return (0, o.jsxs)("div", {
          className: y.LatestUpdateButtonCtn,
          children: [
            (0, o.jsx)("div", {
              className: y.LatestUpdateIcon,
              children: (0, o.jsx)(P.UTF, { role: "presentation" }),
            }),
            (0, o.jsx)(b.ml, {
              className: y.LatestUpdateButton,
              onClick: e.onClick,
              children: (0, g.we)(
                "#EventBrowse_LatestUpdateTime_Button",
                (0, g._l)(e.nUpdateTime),
              ),
            }),
          ],
        });
      }
      function U(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          s = n ? u.O3.GetClanEventFromAnnouncementGID(n) : null,
          i = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          },
          r = window.screen.width > 500 ? k.kH : k.uY;
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsx)("h2", {
              children: (0, g.we)("#EventBrowse_LastUpdateDate", (0, g._l)(t)),
            }),
            (0, o.jsx)("div", {
              className: y.SectionButtonCtn,
              children: (0, o.jsx)("div", {
                className: y.SectionButton,
                onClick: i,
                children: (0, g.we)("#EventBrowse_ViewLatestUpdate"),
              }),
            }),
            !!s &&
              (0, o.jsx)(x.Z, {
                className: y.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: C.iU.PREFERRED_CHILD,
                children: (0, o.jsx)(r, { event: s, onClick: i }),
              }),
          ],
        });
      }
      var T = n(25918),
        H = n(44165);
      class R extends a.Component {
        render() {
          const { appid: e } = this.props;
          let t = H.HD.GetTimeNowWithOverrideAsDate(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return (0, o.jsx)("div", {
            className:
              "detailBox altFooter greenlight_home_box section announcements_row",
            children: (0, o.jsx)(M, {
              appid: e,
              partnerEventStore: T.mh,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: y.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            }),
          });
        }
      }
      function F(e) {
        const [t, n] = a.useState(!0);
        return (
          a.useEffect(() => {
            d.Vw.Init(new l.D(v.TS.WEBAPI_BASE_URL)),
              u.O3.Init(),
              Promise.all([p.KN.InitGlobal()]).then(() => n(!1));
          }, []),
          t
            ? null
            : (0, o.jsx)(m.IQ.Provider, {
                value: { bCanUseLink: !0 },
                children: (0, o.jsxs)(c.dO, {
                  children: [
                    (0, o.jsx)(c.qh, {
                      exact: !0,
                      path: s.g5.ViewEventDetails(
                        ":appid_or_vanity_str",
                        ":oldAnnouncementGID(\\d+)",
                      ),
                      render: (e) => (0, o.jsx)(r, { ...e }),
                    }),
                    (0, o.jsx)(c.qh, {
                      exact: !0,
                      path: s.g5.Listing(":appid_or_vanity_str"),
                      render: (e) =>
                        (0, o.jsx)(
                          L,
                          { ...e, bPreventDismiss: !0, trackingLocation: 6 },
                          "InfScroll_NoDismissApp_" + e.match.params.appid,
                        ),
                    }),
                    (0, o.jsx)(c.qh, {
                      exact: !0,
                      path: s.g5.WorkshopHub(":appid(\\d+)"),
                      render: (e) =>
                        (0, a.createElement)(R, {
                          ...e,
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        }),
                    }),
                    (0, o.jsx)(c.qh, {
                      path: s.g5.AppHub(":appid"),
                      render: (e) =>
                        (0, a.createElement)(L, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: 6,
                        }),
                    }),
                    (0, o.jsx)(c.qh, {
                      path: s.g5.GroupHub(":group_vanity"),
                      render: (e) =>
                        (0, a.createElement)(L, {
                          ...e,
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: 6,
                        }),
                    }),
                    (0, o.jsx)(c.qh, { component: h.a }),
                  ],
                }),
              })
        );
      }
    },
  },
]);
