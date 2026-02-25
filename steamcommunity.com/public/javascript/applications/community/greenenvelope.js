/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [976],
  {
    29553: (e) => {
      e.exports = {
        NotificationsMenu: "_3EPagkYPxulGbe-5invUhK",
        NotificationsMenuEntriesContainer: "m0H4PhlsBcw0NzlQje7q",
        NotificationsMenuScrollable: "_2hgxpK_sWS7mDF66uPetpF",
        MenuScrollbarHidden: "_2Qeur5RWXHnW-xneBJUfH-",
        NotificationHeader: "_1Uh_y1atXoMOUxGyUQK8vC",
        ResponsiveViewAll: "_2q-LyEsEZpxFZBbqO07xgp",
        AllNotificationsTitle: "-Dpw5WXg2gjckpFAkP_lg",
        AllNotificationsButton: "_1OH7OiFxIJo5Y7Z4Z6U6iO",
        NotificationsButton: "_1jW5_Ycv6jGKu28A1OSIQK",
        SVGNotifications: "_13fwmIK8Ajo0qndUS5zb7E",
        Grey: "_34A9kjlnmgfUWSmr16VjXE",
        Disabled: "_3h1sV2qrp20U37VwC47pM2",
        Green: "_2Hpe0_DGY0TBz45Lg0zUr9",
        AnimateBell: "_34o7mvTYzowbNAllqYUQuJ",
        NotificationBellAnimation: "_3W6ngOzFfcJJpftaQ5t9bk",
        NotificationBellUvula: "xpAr9gP3YAkKomrGUivf8",
        EmptyNotificationsCtn: "_2a4xLIvDI3rmLxVfLMQFTz",
        EmptyNotificationsTitle: "_2SIA4NMfduV_HWDptv6cAK",
        EmptyNotificationsBody: "EpEznkfiKxcqI9p52OmRx",
      };
    },
    24830: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          GreenEnvelope: () => U,
          default: () => L,
          useSteamNotifications: () => A,
        });
      var n = i(7850),
        o = i(22837),
        s = i(65946),
        r = i(90626),
        l = i(68950),
        c = i(60011),
        a = i(23809),
        d = i(88997),
        u = i(88080),
        m = i(4869),
        f = i(12155),
        _ = i(52038),
        h = i(61859),
        p = i(30470),
        v = i(84811),
        N = i(29553),
        g = i.n(N),
        b = i(16264),
        y = i(60383);
      const T = new u.cE(),
        U = (0, v.Nr)(function (e) {
          const { bResponsiveHeader: t, notifications: i } = e;
          r.useEffect(() => {
            i && !T.m_bLoaded && T.ProcessNewNotificationPayload(i);
          }, [i]);
          const s = (0, a.KV)();
          (0, r.useEffect)(() => {
            T.setTransport(s),
              (window.RefreshSteamNotifications = () =>
                (async function (e) {
                  let t = null;
                  try {
                    t = await (0, u.tM)(
                      e,
                      p.iA.steamid,
                      (0, o.sf)(p.TS.LANGUAGE),
                      void 0,
                      !1,
                      !1,
                    );
                  } catch (e) {}
                  t && T.ProcessNewNotificationPayload(t);
                })(s));
          }, [s]);
          const l = A();
          return t
            ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(j, {}), (0, n.jsx)(B, {})],
              })
            : (0, n.jsx)(M, { nTotalUnviewed: l.nUnviewed });
        });
      function A() {
        return (0, s.q3)(() => ({
          notifications: T.m_rgNotificationRollups,
          summary: T.m_summary,
          loaded: T.m_bLoaded,
          nUnviewed: T.m_nUnviewed,
        }));
      }
      function w() {
        const e = A(),
          t = (0, l.LH)(),
          { data: i } = (0, c.S0)(t),
          n = (0, c.BM)(),
          o = null == i ? void 0 : i.settings;
        return e.notifications.filter(
          (e) => !(0, u.jb)(e.type, o, n) && !(0, u.XT)(e.item),
        );
      }
      function M(e) {
        const { nTotalUnviewed: t } = e,
          i = r.useRef(null),
          o = w(),
          [s, l] = r.useState(g().AnimateBell);
        r.useEffect(() => {
          i.current ||
            ((i.current = (0, d.lX)(
              (0, n.jsx)(S, { popupRef: i }),
              document.getElementById("green_envelope_menu_root"),
              {
                bPreferPopLeft: !0,
                bOverlapHorizontal: !0,
                strClassName: "GreenEnvelopeMenu",
              },
            )),
            i.current.Hide());
          const e = document.getElementById("header_notification_link");
          e && (e.style.cssText = "background-color: rgba(0,0,0,0)"),
            window.setTimeout(() => l(null), 2e3);
        }, []);
        const c = r.useCallback(
          (e) => {
            var t;
            !e &&
              (null === (t = i.current) || void 0 === t ? void 0 : t.visible) &&
              i.current.Hide();
          },
          [i],
        );
        return (0, n.jsx)(y.J, {
          trigger: "repeated",
          onVisibilityChange: c,
          children: (0, n.jsx)("button", {
            onClick: () => {
              var e, t;
              if (
                !(null === (e = i.current) || void 0 === e ? void 0 : e.visible)
              ) {
                null === (t = i.current) || void 0 === t || t.Show();
                -1 != o.findIndex((e) => !e.item.viewed) &&
                  T.MarkAllItemsViewed();
              }
            },
            id: "green_envelope_menu_root",
            className: (0, _.A)(
              g().NotificationsButton,
              t ? g().Green : g().Grey,
              s,
            ),
            children: (0, n.jsx)(m.$0s, {
              className: g().SVGNotifications,
              "aria-label": (0, h.we)("#NotificationsMenu_Title"),
            }),
          }),
        });
      }
      const S = (e) => {
          var t;
          const { popupRef: i } = e,
            o = r.useRef(null),
            [s, l] = r.useState(!1);
          r.useEffect(() => {
            var e, t;
            l(
              null != o.current &&
                (null === (e = o.current) || void 0 === e
                  ? void 0
                  : e.scrollHeight) >
                  (null === (t = o.current) || void 0 === t
                    ? void 0
                    : t.clientHeight),
            );
          }, [
            null === (t = o.current) || void 0 === t ? void 0 : t.scrollHeight,
            s,
          ]);
          const c = s ? void 0 : g().MenuScrollbarHidden;
          return (0, n.jsxs)("div", {
            className: g().NotificationsMenu,
            onClick: () => {
              var e;
              return null === (e = null == i ? void 0 : i.current) ||
                void 0 === e
                ? void 0
                : e.Hide();
            },
            children: [
              (0, n.jsx)(x, {}),
              (0, n.jsxs)("div", {
                className: (0, _.A)(g().NotificationsMenuScrollable, c),
                ref: o,
                children: [
                  (0, n.jsx)(j, {}),
                  (0, n.jsx)(I, {}),
                  (0, n.jsx)(C, {}),
                ],
              }),
            ],
          });
        },
        x = () => {
          const e = `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/notifications`;
          return (0, n.jsxs)("div", {
            className: (0, _.A)(g().NotificationHeader),
            children: [
              (0, n.jsx)("div", {
                className: g().AllNotificationsTitle,
                children: (0, h.we)("#NotificationsMenu_Title"),
              }),
              (0, n.jsx)("a", {
                href: e,
                children: (0, n.jsx)("div", {
                  className: g().AllNotificationsButton,
                  children: (0, h.we)("#NotificationsMenu_ViewAll"),
                }),
              }),
            ],
          });
        },
        B = () => {
          const e = `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/notifications`;
          return (0, n.jsx)("div", {
            className: (0, _.A)(g().NotificationHeader, g().ResponsiveViewAll),
            children: (0, n.jsx)("a", {
              href: e,
              children: (0, n.jsx)("div", {
                className: g().AllNotificationsButton,
                children: (0, h.we)("#NotificationsMenu_ViewAll"),
              }),
            }),
          });
        };
      function E(e, t, i) {
        t.read ||
          (i && 0 != i.button && 1 != i.button) ||
          !t.notification_id ||
          T.MarkItemRead(t.notification_id),
          e();
      }
      function I() {
        const e = w();
        return 0 == e.length
          ? null
          : (0, n.jsx)("div", {
              className: g().NotificationsMenuEntriesContainer,
              children: e.map((e, t) =>
                (0, n.jsx)(
                  b.R1,
                  { rollup: e, onNotificationClick: E, uimode: 3, location: 3 },
                  t,
                ),
              ),
            });
      }
      const k = [
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/inventory/#pending_gifts`,
          countItem: "pending_gifts",
          icon: f.pD,
          strLocToken: "#Notification_NewGiftsPinned_Body",
          feature: 1,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/home/invites`,
          countItem: "pending_invites",
          icon: f.sdo,
          strLocToken: "#Notification_FriendInvitePinned_Body",
          feature: 4,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/notifications#comments`,
          countItem: "comments",
          icon: f.MwB,
          strLocToken: "#Notification_NewCommentPinned_Body",
          feature: 2,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/inventory`,
          countItem: "inventory_items",
          icon: f.rI_,
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          feature: 3,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/tradeoffers`,
          countItem: "trade_offers",
          icon: f.h20,
          strLocToken: "#Notification_NewTradeOffersPinned_Body",
          feature: 6,
        },
        {
          fnUrl: () =>
            `${p.TS.COMMUNITY_BASE_URL}profiles/${p.iA.steamid}/gamenotifications`,
          countItem: "async_game_updates",
          icon: f.wC1,
          strLocToken: "#Notification_NewAsyncGamePinned_Body",
        },
        {
          fnUrl: () => `${p.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
          countItem: "moderator_messages",
          icon: m.hJ4,
          strLocToken: "#Notification_NewModeratorMessagePinned_Body",
          feature: 2,
        },
        {
          fnUrl: () => `${p.TS.HELP_BASE_URL}wizard/HelpRequests`,
          countItem: "help_request_replies",
          icon: f.Cv4,
          strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
        },
        {
          fnUrl: () =>
            `${p.TS.STORE_BASE_URL}account/familymanagement/join?ft=${p.iA.steamid}`,
          countItem: "family_invites",
          icon: f.Qte,
          strLocToken: "#Notification_FamilyInvitePinned_Body",
        },
      ];
      function j() {
        const e = A();
        return (0, n.jsx)(n.Fragment, {
          children: k.map((t) =>
            (0, n.jsx)(
              b.QR,
              {
                url: t.fnUrl(),
                count: e.summary[t.countItem],
                icon: t.icon,
                strLocToken: t.strLocToken,
                eFeature: t.feature,
              },
              t.countItem,
            ),
          ),
        });
      }
      function C() {
        return (0, n.jsxs)("div", {
          className: g().EmptyNotificationsCtn,
          children: [
            (0, n.jsx)("div", {
              className: g().EmptyNotificationsTitle,
              children: (0, h.we)("#NotificationsList_EmptyTitle_New"),
            }),
            (0, n.jsx)("div", {
              className: g().EmptyNotificationsBody,
              children: (0, h.we)("#NotificationsList_EmptyBody"),
            }),
          ],
        });
      }
      const L = U;
    },
    60383: (e, t, i) => {
      "use strict";
      i.d(t, { J: () => c });
      var n = i(34629),
        o = i(7850),
        s = i(90626),
        r = i(56011),
        l = i(73745);
      class c extends s.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = s.createRef()),
            (this.m_elTracked = null),
            (this.m_bPreviouslyIntersecting = !1);
        }
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
        }
        GetBoundingClientRect() {
          return this.m_refElement.current
            ? this.m_refElement.current.getBoundingClientRect()
            : null;
        }
        DestroyObserver() {
          this.m_observer &&
            (this.m_observer.disconnect(),
            (this.m_observer = null),
            (this.m_elTracked = null));
        }
        componentWillUnmount() {
          this.DestroyObserver();
        }
        componentDidMount() {
          this.UpdateObserver(null);
        }
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            (e.rootMargin != this.m_observer.rootMargin ||
              e.thresholds != this.m_observer.thresholds) &&
            this.DestroyObserver();
          let t = this.m_refElement.current;
          if (
            (this.m_observer &&
              t != this.m_elTracked &&
              (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              this.props.thresholds && (e.threshold = this.props.thresholds),
              (this.m_observer = (0, l.md)(t, this.OnIntersection, e));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return r.Kf(e, (e) => {
            const t = this.props.horizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(c.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, t) {
          let i = !1;
          for (const t of e)
            if (t.isIntersecting) {
              i = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != i &&
            ((this.m_bPreviouslyIntersecting = i),
            this.props.onVisibilityChange && this.props.onVisibilityChange(i),
            i && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let {
            onVisibilityChange: e,
            rootMargin: t,
            trigger: i,
            horizontal: n,
            ...s
          } = this.props;
          return (0, o.jsx)("div", {
            ref: this.m_refElement,
            ...s,
            children: this.props.children,
          });
        }
      }
      (0, n.Cg)([l.oI], c.prototype, "OnIntersection", null);
    },
  },
]);
