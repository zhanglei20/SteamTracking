/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6893],
  {
    68e3: (t) => {
      t.exports = {
        narrowWidth: "500px",
        notificationRowHeight: "72px",
        NotificationPageCtn: "_2DCeN21MQJGwVpPCXcT2QJ",
        NotificationsBody: "_35hlMprL--UdgfHJGuGnJR",
        NotificationsHeader: "_1bLYafVT6_4DisbgdimwXc",
        NotificationsHeaderTitle: "_39iFFMnPRQXd5IL6PGoOcn",
        NotificationsHeaderUnread: "_3iXuG9K_6ttnP8gOhOR7Iv",
        NotificationListCtn: "_1cj-7JmCC_IQ4ZdxxUo43Q",
        NotificationsList: "KG3qM6Y1DpK-afn15yeaT",
        AllNotificationsRowCtn: "_3Y-y3pAcXpqgpuUTLQkz86",
        NotificationFiltersCtn: "_1uSw_aqus0W7yb3vT9_-22",
        EmptyNotifications: "_3t24BJeKfB-KBIct4_UuX8",
        EmptyNotificationsTitle: "_uGFLI7t_2emsn37l93hZ",
        EmptyNotificationsBody: "_3Iomc0Ep9lyBB_QNlE8p4n",
        SettingsButtons: "_3B7mJdJw-FhqV6l5q-IFO_",
        SettingsTooltip: "_3ZlbZ5ev0L-hcx-z4JItgd",
        MarkAllReadButton: "_37UjwIEFODwKdnz3d90mdF",
        SettingsButton: "T8q00Eg6Sx2u-N2ySzMrg",
        SettingsImg: "_1XXJX0-wXgz7O3Bd0qimBX",
        SettingsFiltersTitle: "_4T-jWhXP-AWt4AatyamIk",
        SettingsFilters: "_1YDIAzUAWf7ueOLgHLbGeF",
        FilterCheckbox: "_2C4dM9ELcMmtBLz8SavLK4",
        ResetButton: "_3Z8otCycVht4XocANv_EPb",
        CommentIcon: "o_I3vYqgbLhw7c8iXVwb3",
        CommentFilterCtn: "-GWy_nsP_d9rJnCNgx8NK",
        AdvancedCommentFilters: "irq6koPKVmtQ5H7U8EAoA",
        Expanded: "_2hRRl_cNi9X4Veh7FeK-F4",
        CommentRadioGroup: "_2_xVHbSZ7fCv3LUz-THkR5",
        Expander: "MjW-ILAVK028V2xI8eCfW",
        NotificationActions: "_3R-McPl3j1ANvRa0U9reMV",
      };
    },
    32664: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => W });
      var s,
        n = i(7850),
        o = i(90626),
        r = i(88080),
        a = i(78327),
        c = i(30470),
        l = i(12155),
        d = i(22837),
        m = i(23809),
        h = i(68255),
        f = i(61859),
        p = i(68e3),
        u = i.n(p),
        y = i(34629),
        _ = i(14947),
        N = i(65946),
        F = i(68950),
        g = i(25489),
        x = i(60011);
      !(function (t) {
        (t[(t.k_All = 0)] = "k_All"),
          (t[(t.k_Owned = 1)] = "k_Owned"),
          (t[(t.k_Subscribed = 2)] = "k_Subscribed");
      })(s || (s = {}));
      class C {
        constructor() {
          (this.rgFilterState = new Map()),
            (this.commentFilter = {
              type: s.k_All,
              setItemTypes: new Set([]),
              fnFilter: () => !0,
            }),
            (this.k_rgFilterCheckboxes = [
              {
                type: 3,
                display: (0, f.we)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              {
                type: 8,
                display: (0, f.we)("#NotificationsFilters_Wishlist"),
                hash: "wishlist",
              },
              {
                type: 5,
                display: (0, f.we)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: 2,
                display: (0, f.we)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: 4,
                display: (0, f.we)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: 12,
                display: (0, f.we)("#NotificationsFilters_AsyncGame"),
                hash: "asyncgame",
              },
              {
                type: 11,
                display: (0, f.we)("#NotificationsFilters_HelpRequest"),
                hash: "help",
              },
              {
                type: 9,
                display: (0, f.we)("#NotificationsFilters_TradeOffer"),
                hash: "trade",
              },
              {
                type: 10,
                display: (0, f.we)("#NotificationsFilters_General"),
                hash: "general",
              },
            ]),
            (this.k_rgCommentFilters = [
              {
                type: s.k_All,
                display: (0, f.we)("#NotificationsList_CommentFilters_All"),
                fnFilter: () => !0,
              },
              {
                type: s.k_Owned,
                display: (0, f.we)(
                  "#NotificationsList_CommentFilters_YourItems",
                ),
                fnFilter: this.IsCommentOwned,
              },
              {
                type: s.k_Subscribed,
                display: (0, f.we)(
                  "#NotificationsList_CommentFilters_Subscribed",
                ),
                fnFilter: this.IsCommentSubscribed,
              },
            ]),
            (0, _.Gn)(this);
        }
        IsCommentOwned(t, e) {
          return t.bis_owner || t.owner_steam_id.ConvertTo64BitString() == e;
        }
        IsCommentSubscribed(t, e) {
          return t.bsubscribed;
        }
        ProcessHash(t) {
          if (
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear(),
            t)
          ) {
            t.split(",").forEach((t) => {
              const e = this.k_rgFilterCheckboxes.findIndex((e) => e.hash == t);
              -1 !== e
                ? this.rgFilterState.set(this.k_rgFilterCheckboxes[e].type, !0)
                : (0, g.TT)(t) &&
                  this.rgFilterState.has(3) &&
                  this.commentFilter.setItemTypes.add(parseInt(t));
            });
          }
        }
        SetFilter(t, e, i) {
          i &&
            (this.rgFilterState.clear(),
            this.commentFilter.setItemTypes.clear()),
            t &&
              (this.rgFilterState.set(t, e),
              3 != t || e || this.commentFilter.setItemTypes.clear()),
            this.UpdateLocationHash();
        }
        SetCommentFilter(t) {
          var e;
          (this.commentFilter = t),
            (this.commentFilter.fnFilter =
              null ===
                (e = this.k_rgCommentFilters.find((e) => e.type == t.type)) ||
              void 0 === e
                ? void 0
                : e.fnFilter),
            this.UpdateLocationHash();
        }
        UpdateLocationHash() {
          let t = "";
          this.rgFilterState.forEach((e, i) => {
            var s;
            e &&
              (t +=
                (t ? "," : "") +
                (null ===
                  (s = this.k_rgFilterCheckboxes.find((t) => t.type == i)) ||
                void 0 === s
                  ? void 0
                  : s.hash));
          }),
            this.rgFilterState.has(3) &&
              this.commentFilter.setItemTypes.forEach(
                (e) => (t += (t ? "," : "") + e),
              ),
            window.history.pushState(
              {},
              null,
              window.location.pathname + (t ? "#" + t : ""),
            );
        }
      }
      function w() {
        (0, N.q3)(() => [...b.rgFilterState]);
        let t = 0;
        return (
          b.rgFilterState.forEach((e) => {
            t += e ? 1 : 0;
          }),
          { numActive: t, filters: b.rgFilterState }
        );
      }
      function k() {
        return (0, N.q3)(() => b.commentFilter);
      }
      function j() {
        return o.useMemo(() => {
          const t = new Map();
          for (const e of v.m_rgNotificationRollups.filter(
            (t) => 3 == t.type,
          )) {
            const i = (0, r.bP)(e);
            t.set(i.comment_type, 1 + (t.get(i.comment_type) || 0));
          }
          return t;
        }, []);
      }
      function S() {
        const { numActive: t, filters: e } = w(),
          i = k(),
          n = (0, F.LH)(),
          { settings: o } = (0, x.S0)(n).data,
          a = (0, x.BM)();
        return (
          (0, N.q3)(() => (0, r.PI)(v.m_summary)),
          v.m_rgNotificationRollups.filter((c) => {
            if (t && !e.get(c.type)) return !1;
            if ((0, r.jb)(c.type, o, a)) return !1;
            if (
              t &&
              3 == c.type &&
              (i.type != s.k_All || i.setItemTypes.size > 0)
            ) {
              const t = (0, r.bP)(c);
              let e = !i.fnFilter || i.fnFilter(t, n);
              return (
                i.setItemTypes.size > 0 &&
                  !i.setItemTypes.has(t.comment_type) &&
                  (e = !1),
                e
              );
            }
            return !0;
          })
        );
      }
      (0, y.Cg)([_.sH], C.prototype, "rgFilterState", void 0),
        (0, y.Cg)([_.sH], C.prototype, "commentFilter", void 0);
      const b = new C(),
        v = new r.cE();
      var I = i(76217),
        T = i(73745),
        A = i(52038),
        L = i(16264),
        E = i(32630),
        R = i(45699);
      function B(t) {
        const { hash: e } = t;
        (0, o.useEffect)(() => {
          b.ProcessHash(e);
        }, [e]);
        const i = (0, m.KV)();
        (0, o.useEffect)(() => {
          v.setTransport(i), v.m_nUnviewed > 0 && v.MarkAllItemsViewed();
        }, [i]);
        const s = (0, a.Tc)("notifications", "application_config");
        return (
          v.ProcessNewNotificationPayload(s),
          v.m_rgNotificationRollups.length
            ? (0, n.jsx)(n.Fragment, {
                children: (0, n.jsxs)("div", {
                  className: u().NotificationPageCtn,
                  children: [
                    (0, n.jsxs)("div", {
                      className: u().NotificationsHeader,
                      children: [
                        (0, n.jsx)("span", {
                          className: u().NotificationsHeaderTitle,
                          children: (0, f.we)("#NotificationsList_Header"),
                        }),
                        (0, n.jsx)(H, {}),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: u().NotificationsBody,
                      children: [
                        (0, n.jsx)("div", {
                          className: u().NotificationListCtn,
                          children: (0, n.jsx)(M, {}),
                        }),
                        (0, n.jsxs)("div", {
                          className: u().NotificationFiltersCtn,
                          children: [
                            (0, n.jsx)(O, {}),
                            (0, n.jsx)("div", {
                              className: u().NotificationActions,
                              children: (0, n.jsx)(R.Ii, {
                                href: "/my/moderatormessages",
                                children: (0, f.we)("#CommunityActivity"),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, n.jsx)("div", {
                className: u().NotificationPageCtn,
                children: (0, n.jsx)(P, {}),
              })
        );
      }
      function H() {
        const t = (function () {
            const t = S(),
              e = (0, r.V8)();
            return (
              t.map((t) => {
                var i;
                t.item.hidden ||
                  (0, r.kE)(
                    e,
                    t.type,
                    null === (i = t.rgunread) || void 0 === i
                      ? void 0
                      : i.length,
                  );
              }),
              (0, r.PI)(e)
            );
          })(),
          e = (0, f.we)("#NotificationsList_Unread", t);
        return (0, n.jsx)("span", {
          className: u().NotificationsHeaderUnread,
          children: e,
        });
      }
      function M() {
        const t = S();
        return (0, n.jsx)(I.Z, {
          className: u().NotificationsList,
          children: t.map((t, e) => (0, n.jsx)(K, { rollup: t }, e)),
        });
      }
      function P() {
        return (0, n.jsxs)(I.Z, {
          className: u().EmptyNotifications,
          children: [
            (0, n.jsx)(I.Z, {
              className: u().EmptyNotificationsTitle,
              children: (0, f.we)("#NotificationsList_EmptyTitle"),
            }),
            (0, n.jsx)(I.Z, {
              className: u().EmptyNotificationsBody,
              children: (0, f.we)("#NotificationsList_EmptyBody"),
            }),
          ],
        });
      }
      function O() {
        const t = S(),
          e = o.useMemo(() => {
            const t = new Map();
            for (const e of v.m_rgNotificationRollups)
              t.set(e.type, 1 + (t.get(e.type) || 0));
            return t;
          }, []);
        return (0, n.jsxs)("div", {
          className: u().NotificationsFilterCtn,
          children: [
            (0, n.jsxs)("div", {
              className: u().SettingsButtons,
              children: [
                (0, n.jsx)("div", {
                  className: u().SettingsTooltip,
                  children: (0, n.jsx)(h.$n, {
                    className: u().MarkAllReadButton,
                    onClick: () => v.MarkAllItemsRead(t),
                    children: (0, f.we)("#NotificationsList_MarkAllRead"),
                  }),
                }),
                (0, n.jsxs)(h.$n, {
                  className: u().SettingsButton,
                  onClick: () =>
                    window.location.assign(
                      `${c.TS.STORE_BASE_URL}account/notificationsettings`,
                    ),
                  children: [
                    (0, n.jsx)(l.wB_, { className: u().SettingsImg }),
                    (0, f.we)("#NotificationsList_Settings"),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: u().SettingsFiltersTitle,
              children: (0, f.we)("#NotificationsList_FilterTo"),
            }),
            (0, n.jsx)("div", {
              className: u().SettingsFilters,
              children: b.k_rgFilterCheckboxes
                .filter((t) => e.has(t.type))
                .map((t) => (0, n.jsx)(U, { filterOptions: t }, t.type)),
            }),
            (0, n.jsx)(h.$n, {
              className: u().ResetButton,
              onClick: () => b.SetFilter(null, !1, !0),
              children: (0, f.we)("#NotificationsList_Reset"),
            }),
          ],
        });
      }
      function U(t) {
        const { filterOptions: e } = t,
          { filters: i } = w();
        return 3 == e.type
          ? (0, n.jsx)(V, { filterOptions: e, checked: i.get(e.type) })
          : (0, n.jsx)(
              h.Yh,
              {
                className: u().FilterCheckbox,
                label: e.display,
                checked: i.get(e.type),
                onChange: (t) => b.SetFilter(e.type, t),
              },
              e.type,
            );
      }
      function q(t) {
        const { threadType: e } = t,
          i = k();
        return (0, n.jsx)(h.Yh, {
          className: u().AdvancedCommentFilterCheckbox,
          label: (0, f.we)("#CommentThreadType_" + e),
          checked: i.setItemTypes.has(e),
          onChange: (t) => {
            t
              ? (i.setItemTypes.add(Number(e)),
                b.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }))
              : (i.setItemTypes.delete(Number(e)),
                b.SetCommentFilter({
                  type: i.type,
                  setItemTypes: i.setItemTypes,
                }));
          },
        });
      }
      function X(t) {
        const { className: e } = t,
          i = j();
        return (0, n.jsx)("div", {
          className: (0, A.A)(u().AdvancedCommentFilters, e),
          children: Array.from(i.keys()).map((t) =>
            (0, n.jsx)(q, { threadType: t }, t),
          ),
        });
      }
      function G(t) {
        const { expanded: e, children: i } = t,
          [s, r] = (0, o.useState)(void 0),
          a = (0, T.wY)((t) => {
            const e = t.target;
            r(e.scrollHeight);
          });
        return (0, n.jsx)("div", {
          className: (0, A.A)(u().Expander, u().Expanded),
          style: { height: e ? s : 0 },
          children: (0, n.jsx)("div", { ref: a, children: i }),
        });
      }
      function V(t) {
        const { filterOptions: e, checked: i } = t,
          s = (function () {
            const t = (0, F.LH)();
            return o.useMemo(() => {
              const e = new Map();
              for (const i of b.k_rgCommentFilters)
                for (const s of v.m_rgNotificationRollups.filter(
                  (t) => 3 == t.type,
                )) {
                  const n = (0, r.bP)(s);
                  i.fnFilter(n, t) && e.set(i.type, 1 + (e.get(i.type) || 0));
                }
              return e;
            }, [t]);
          })(),
          a = j(),
          c = s.size > 2,
          l = a.size > 1,
          d = c || l;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(
              h.Yh,
              {
                className: u().FilterCheckbox,
                label: e.display,
                checked: i,
                onChange: (t) => {
                  b.SetFilter(e.type, t);
                },
              },
              e.type,
            ),
            d &&
              (0, n.jsx)("div", {
                className: (0, A.A)(u().CommentFilterCtn, i && u().Expanded),
                children: (0, n.jsx)(G, {
                  expanded: i,
                  children: (0, n.jsx)("div", {
                    className: u().CommentFilters,
                    children: l && (0, n.jsx)(X, { className: u().Expanded }),
                  }),
                }),
              }),
          ],
        });
      }
      function z(t, e, i) {
        e.read ||
          (i && 0 != i.button && 1 != i.button) ||
          v.MarkItemRead(e.notification_id),
          t();
      }
      function K(t) {
        const { rollup: e } = t;
        (0, N.q3)(() => e.item.hidden);
        const [i, s] = o.useState(!1),
          a = (0, T.BL)(
            (0, o.useCallback)((t) => {
              t.isIntersecting && s(!0);
            }, []),
            { rootMargin: "600px" },
          ),
          c = (0, o.useCallback)(() => {
            v.MarkItemHidden(e.item.notification_id);
          }, [e.item.notification_id]);
        if (e.item.hidden) return null;
        if (e.item.hidden && 5 == e.type) {
          const t = (0, r.bP)(e);
          if ((0, d.aP)(t.state) || 1 == t.state) return null;
        }
        const l = (0, L.Rd)(e.type);
        return l
          ? (0, n.jsx)(E.Ay, {
              controller: "notification",
              method: (0, d.fL)(3),
              submethod: (0, d.ey)(4),
              children: (0, n.jsx)(J, {
                ref: a,
                children:
                  i &&
                  (0, n.jsx)(l, {
                    rollup: e,
                    onNotificationClick: z,
                    onHide: c,
                    location: 4,
                    uimode: 3,
                  }),
              }),
            })
          : null;
      }
      const J = o.forwardRef((t, e) =>
        (0, n.jsx)("div", {
          className: u().AllNotificationsRowCtn,
          ref: e,
          children: t.children,
        }),
      );
      function W(t) {
        let e = t.location.hash;
        return (
          e && e.startsWith("#") && (e = e.slice(1)), (0, n.jsx)(B, { hash: e })
        );
      }
    },
  },
]);
