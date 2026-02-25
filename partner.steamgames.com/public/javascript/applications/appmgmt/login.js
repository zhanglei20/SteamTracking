/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6966],
  {
    90023: (e, o, r) => {
      r.r(o), r.d(o, { default: () => c });
      var t = r(7850),
        n = r(90626),
        i = r(738),
        s = r(9154),
        a = r(97436),
        l = r(96059),
        p = r(78327),
        u = r(28240);
      function c() {
        return (
          (0, n.useEffect)(
            () => (
              (window.g_ShowLoginDialog = (e) =>
                (0, i.pg)((0, t.jsx)(d, { redirectUrl: e }), window, {
                  popupWidth: 700,
                  popupHeight: 440,
                })),
              () => {
                delete window.g_ShowLoginDialog;
              }
            ),
            [],
          ),
          null
        );
      }
      function d(e) {
        const { redirectUrl: o = p.TS.PARTNER_BASE_URL, closeModal: r } = e,
          i = (0, n.useRef)(
            new l.D(p.TS.WEBAPI_BASE_URL).GetServiceTransport(),
          ).current,
          [c, d] = (0, n.useState)(!1);
        return (0, t.jsx)(s.x_, {
          onEscKeypress: r,
          hideTopBar: !0,
          bDisableBackgroundDismiss: !0,
          children: c
            ? (0, t.jsx)(a.Fn, {})
            : (0, t.jsx)(a.YN, {
                platform: 2,
                transport: i,
                onComplete: (e) => {
                  e == u.wI.k_PrimaryDomainFail
                    ? d(!0)
                    : window.location.assign(o);
                },
                autoFocus: !0,
                theme: "modal",
                redirectUrl: o,
              }),
        });
      }
    },
  },
]);
