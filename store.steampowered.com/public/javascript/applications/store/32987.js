/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [32987],
  {
    48890: (e) => {
      e.exports = { Message: "_3HjyI3Ki1r4_VdBwvJgaQb" };
    },
    32987: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => v });
      var i = a(7850),
        t = a(8527),
        o = a(65946),
        l = a(67936),
        n = a(53807),
        r = a(48890),
        c = a.n(r),
        _ = a(35380),
        d = a(39777);
      function v(e) {
        const {
            rgPackageTuples: s,
            rgHardwareDetails: a,
            selectedProduct: r,
          } = e,
          [v, u, g, m] = (0, o.q3)(() => [
            a?.some((e) => e.collection_time_active),
            a?.some(
              (e) =>
                e.collection_time_active && e.collection_time_active < t.TS.NOW,
            ),
            s.length,
            a?.find((e) => (0, n.k)(e.reservation_state)),
          ]),
          N = (0, _.oc)(m?.packageid),
          { data: h } = (0, d.J$)(N);
        if (!a) return null;
        if (v)
          return u
            ? (0, i.jsx)("div", {
                className: c().Message,
                children: m
                  ? l.F5.Localize("#Reservation_InPool_NoDate")
                  : l.F5.Localize("#Reservation_Pool_Closed"),
              })
            : (0, i.jsx)("div", {
                className: c().Message,
                children: m
                  ? l.F5.Localize("#Reservation_InPool_NoDate")
                  : l.F5.Localize("#Reserationn_NoListJoined", g),
              });
        const k = m && (0, n.k)(m.reservation_state),
          p = (k && m?.position_is_waitlist) || (!k && m?.position_is_waitlist),
          R = h?.name;
        return p && R && k
          ? (0, i.jsx)("div", {
              className: c().Message,
              children: l.F5.Localize(
                "#Reservation_In_Waitlist_WithName_NoDate",
                R,
              ),
            })
          : R && k
            ? (0, i.jsx)("div", {
                className: c().Message,
                children: l.F5.Localize(
                  "#Reservation_OnRegularReserveForModel",
                  R,
                ),
              })
            : null;
      }
    },
  },
]);
