/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6966],
  {
    9211: (e) => {
      e.exports = { LoginContainer: "_2vAS_iK_bJ7iv_7pRL7Zdk" };
    },
    42144: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => l });
      var r = t(7850),
        o = t(90626),
        i = t(97436),
        s = t(96059),
        a = t(78327),
        c = t(28240),
        u = t(9211);
      function l(e) {
        const { redirectUrl: n = a.TS.COMMUNITY_BASE_URL } = e,
          [t] = (0, o.useState)(
            new s.D(a.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [l, m] = (0, o.useState)(!1);
        return (0, r.jsx)("div", {
          className: u.LoginContainer,
          children: l
            ? (0, r.jsx)(i.Fn, {})
            : (0, r.jsx)(i.YN, {
                autoFocus: !0,
                transport: t,
                platform: 2,
                onComplete: (e) => {
                  e == c.wI.k_PrimaryDomainFail
                    ? m(!0)
                    : window.location.assign(n);
                },
                redirectUrl: n,
              }),
        });
      }
    },
  },
]);
