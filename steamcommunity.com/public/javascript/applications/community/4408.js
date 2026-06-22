/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4408],
  {
    15843: (e) => {
      e.exports = {
        TOCLink: "_2bD720Zjxza1mHMOZ6URrU",
        LearnMoreLink: "_2njnWu1if_8cDnjWtpuBMQ",
      };
    },
    64408: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, { ShuffleActions: () => b, default: () => f });
      var t = n(7850),
        o = n(52908),
        s = n(8527),
        r = n(78686),
        i = n(5309),
        l = n(65946),
        c = n(90626),
        d = n(78603),
        _ = n(32754),
        u = n(52038),
        v = n(61859),
        m = n(67936),
        h = n(53807),
        g = n(73694),
        k = n(84547),
        x = n(23601),
        L = n(18899),
        R = n(52865),
        j = n(15843),
        p = n.n(j);
      function f(e) {
        var a;
        const {
            hardwareDetail: n,
            reservationAdvancedSettings: _,
            storeItemReleaseInfo: x,
            bShuffleInProgress: L,
            bHasSomeReservation: R,
          } = e,
          [j, f] = (0, l.q3)(() => [
            null == _ ? void 0 : _.collection_rtime_end,
            null == _ ? void 0 : _.collection_time_learn_more_url,
          ]),
          [S, P] = (0, c.useState)({}),
          C = (0, c.useCallback)(
            (e) => {
              P((a) => ({ ...a, [n.packageid]: e }));
            },
            [n],
          ),
          z = (0, i.VM)(x);
        if (L)
          return (0, t.jsxs)("div", {
            className: (0, u.A)(d.expecteddate_str),
            children: [
              m.F5.Localize(
                R
                  ? "#Reservation_Pool_InProgress_Joined"
                  : "#Reservation_Pool_InProgress_NotJoined",
              ),
              f &&
                (0, t.jsx)("a", {
                  className: p().LearnMoreLink,
                  href: f,
                  children: r.Z.Localize("#Button_Learn"),
                }),
            ],
          });
        const F = (0, h.k)(n.reservation_state),
          N = !!_ && !!_.collection_time_term_and_conditions_url,
          A = null !== (a = S[n.packageid]) && void 0 !== a ? a : !N;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: (0, u.A)(d.expecteddate_str),
              children: [
                m.F5.LocalizeReact(
                  "#Reservation_InPool_Message",
                  j ? (0, t.jsx)(g.m, { rtime: j }) : z,
                ),
                f &&
                  (0, t.jsx)("a", {
                    className: p().LearnMoreLink,
                    href: f,
                    children: r.Z.Localize("#Button_Learn"),
                  }),
              ],
            }),
            N &&
              (0, t.jsx)(
                o.S,
                {
                  checked: A || F,
                  onChange: C,
                  "data-checkbox": "",
                  disabled: F,
                  children: (0, v.oW)(
                    m.F5.Localize("#Reservation_JoinPool_Terms"),
                    (0, t.jsx)("a", {
                      href: _.collection_time_term_and_conditions_url,
                      className: p().TOCLink,
                      onClick: (e) => e.stopPropagation(),
                    }),
                  ),
                },
                n.packageid,
              ),
            s.iA.logged_in
              ? (0, t.jsx)(b, {
                  hardwareDetail: n,
                  bUserAcceptedTerms: !N || A,
                  onLeaveShuffleList: () => C(!1),
                })
              : (0, t.jsx)("div", {
                  className: (0, u.A)(d.reserverow),
                  children: (0, t.jsx)(k.vU, {
                    label: m.F5.Localize("#Reservation_Pool_NotSignedIn"),
                    strDialogDesc: m.F5.Localize(
                      "#Reservation_Pool_NotSignedIn_Desc",
                    ),
                  }),
                }),
          ],
        });
      }
      function b(e) {
        const {
          hardwareDetail: a,
          bUserAcceptedTerms: n,
          onLeaveShuffleList: o,
        } = e;
        switch (a.reservation_state) {
          case h.G.k_EPurchaseReservationState_NotReserved:
          case h.G.k_EPurchaseReservationState_Consumed:
          case h.G.k_EPurchaseReservationState_Cancelled:
            return (0, t.jsx)(_.Gq, {
              toolTipContent: n
                ? void 0
                : m.F5.Localize("#Reservation_JoinPool_ClickTerms"),
              children: (0, t.jsx)(x.R, {
                bInputDisabled: !n,
                packageid: a.packageid,
                label: m.F5.Localize("#Reservation_JoinPool"),
              }),
            });
          case h.G.k_EPurchaseReservationState_Reserved:
          case h.G.k_EPurchaseReservationState_Allocated:
          default:
            return (0, t.jsx)(L.p, {
              packageid: a.packageid,
              strAction: m.F5.Localize("#Reservation_Cancel_Pool"),
              strDesc: m.F5.Localize("#Reservation_Cancel_Pool_Desc"),
              onCancelSucceeded: o,
            });
          case h.G.k_EPurchaseReservationState_UnavailableRegion:
            return (0, t.jsx)(R.b, {});
        }
      }
    },
    73694: (e, a, n) => {
      "use strict";
      n.d(a, { R: () => c, m: () => l });
      var t = n(7850),
        o = n(20187),
        s = n(48906),
        r = n(76684),
        i = n(26408);
      function l(e) {
        const { rtime: a } = e;
        return a ? (0, t.jsx)(r.K4, { dateAndTime: a, bSingleLine: !0 }) : null;
      }
      function c(e) {
        const { rtime: a, onValueChange: n, label: r, tooltip: c } = e;
        let d;
        return (
          a > 0 && (d = (0, t.jsx)(l, { rtime: a })),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(o.EY, {
                children: [r, c && (0, t.jsx)(i.o, { tooltip: c })],
              }),
              (0, t.jsx)(s.I, {
                value: a,
                valueToString: (e) => e.toString(),
                valueFromString: (e) => Number.parseInt(e),
                clearable: !1,
                onValueChange: (e) => {
                  n(Number(e));
                },
                afterContent: d,
              }),
            ],
          })
        );
      }
    },
  },
]);
