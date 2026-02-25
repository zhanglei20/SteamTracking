/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5068],
  {
    9054: (e) => {
      e.exports = {
        narrowWidth: "500px",
        JoinApp: "_27LPt-4kZ0Y0j9DNG19rsN",
        SessionInfoCtr: "z4yEIu1D7pKZ9BNib5lIq",
        SectionCtr: "_3pJz3d4_3A43Jh7D44SUlm",
        JoinSessionButton: "oFMSJB00CTFnfT-758yts",
        SessionList: "_25Du_Z4_ooVhqUEkiYSqxt",
        Session: "zNbRzxK68u4bzfA0OyV0I",
        MachineName: "EOLg7Cdie5CHJUEGL6-CB",
        OsName: "S5bNzjo6KMcWWn6Ms9QuY",
        AvailableSessionsText: "_1NtbtSr3XzLpXPC3ugtzr9",
        Header: "_239fSrbkMDKdFJQsaOV8MW",
        Explanation: "_1isyHy9nKabM8wUFKUu-lm",
      };
    },
    82477: (e, s, n) => {
      "use strict";
      n.d(s, { Cg: () => m, pZ: () => j, vg: () => p });
      var i = n(7850),
        t = n(90626),
        a = n(738),
        o = n(61859),
        r = n(78327),
        c = n(97436),
        l = n(72034),
        d = n(28240),
        u = n(51706);
      function h(e) {
        return (0, i.jsx)(a.x_, {
          onEscKeypress: e.closeModal,
          bDisableBackgroundDismiss: !0,
          children: (0, i.jsx)(x, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        });
      }
      function m(e) {
        const { redirectURL: s = window.location.href } = e;
        return (0, i.jsx)(u.EN, {
          active: !0,
          children: (0, i.jsx)(h, { redirectURL: s }),
        });
      }
      function p() {
        (0, a.pg)(
          (0, i.jsx)(h, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function j(e, s) {
        (0, a.pg)(
          (0, i.jsx)(h, { ownerWin: window, redirectURL: e, guestOption: s }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function x(e) {
        const { redirectURL: s, guestOption: n } = e,
          [a] = (0, t.useState)(
            new l.D(r.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [o, u] = (0, t.useState)(!1);
        return (0, i.jsx)("div", {
          children: o
            ? (0, i.jsx)(c.Fn, {})
            : (0, i.jsx)(c.YN, {
                autoFocus: !0,
                transport: a,
                platform: 2,
                onComplete: (e) => {
                  e == d.wI.k_PrimaryDomainFail
                    ? u(!0)
                    : window.location.assign(s);
                },
                redirectUrl: s,
                theme: "modal",
                children: n && (0, i.jsx)(c.Mk, { redirectURL: s }),
              }),
        });
      }
    },
    40917: (e, s, n) => {
      "use strict";
      n.r(s), n.d(s, { default: () => A });
      var i = n(7850),
        t = n(9054),
        a = n.n(t),
        o = n(92757),
        r = n(23809),
        c = n(41762),
        l = n(58632),
        d = n.n(l),
        u = n(80902),
        h = n(56545),
        m = n(37403),
        p = n(30470),
        j = n(22837);
      let x;
      const g = 864e5;
      function f(e) {
        return `appinfo_${e}_${p.TS.LANGUAGE}`;
      }
      function w(e) {
        return Boolean(e && Date.now() - e.timeCached < g);
      }
      function S(e) {
        const s = (0, r.KV)(),
          n = (0, r.rX)();
        return (0, u.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, s) {
              return (
                x ||
                  (x = new (d())(
                    async (n) => {
                      const i = new Map();
                      (await Promise.all(n.map((e) => s.GetObject(f(e)))))
                        .filter(w)
                        .forEach(({ value: e }) => i.set(e.appid, e));
                      const t = n.slice().filter((e) => !i.has(e));
                      if (t.length) {
                        const n = h.w.Init(m._z);
                        n.Body().set_language((0, j.sf)(p.TS.LANGUAGE)),
                          n.Body().set_appids(t);
                        const a = await m.BE.GetApps(e, n);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            s.StoreObject(f(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              i.set(e.appid, e);
                          });
                      }
                      return n.map((e) => i.get(e));
                    },
                    { cache: !1 },
                  )),
                x
              );
            })(s, n).load(e),
          staleTime: g,
          enabled: !!e,
        }).data;
      }
      var _ = n(79908),
        v = n(61859),
        N = n(82477),
        L = n(53835),
        I = n(22797),
        y = n(78327);
      function E(e) {
        return `?joinsessionid=${e}`;
      }
      function C(e) {
        return (0, i.jsx)(L.$n, {
          className: a().JoinSessionButton,
          onClick: () =>
            (window.location.href =
              `steam://launch/${e.steamAppId}` + E(e.sessionID)),
          children: e.children,
        });
      }
      function U(e) {
        const s = (0, _.Vc)(),
          n = (0, r.KV)();
        return s.isSuccess
          ? s.data?.sessions?.length > 0
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(L.JU, {
                    className: a().AvailableSessionsText,
                    children: "Available Steam Sessions:",
                  }),
                  (0, i.jsx)("div", {
                    className: a().SessionList,
                    children: s.data?.sessions.map((s) =>
                      (0, i.jsxs)(
                        "div",
                        {
                          className: a().Session,
                          children: [
                            (0, i.jsx)("div", {
                              className: a().MachineName,
                              children: s.machine_name,
                            }),
                            (0, i.jsx)("div", {
                              className: a().OsName,
                              children: s.os_name,
                            }),
                            (0, i.jsx)(L.$n, {
                              className: a().JoinSessionButton,
                              onClick: () =>
                                (0, _.o6)(
                                  n,
                                  s.client_instanceid,
                                  e.steamAppId,
                                  E(e.sessionID),
                                ),
                              children: "Launch Game",
                            }),
                          ],
                        },
                        s.client_instanceid,
                      ),
                    ),
                  }),
                ],
              })
            : (0, i.jsx)("div", {
                className: a().Error,
                children: "No logged in sessions",
              })
          : s.isFetching || s.isRefetching
            ? (0, i.jsx)(I.t, {})
            : (0, i.jsxs)("div", {
                className: a().Error,
                children: ["Error ", s.error.message],
              });
      }
      function b(e) {
        const s = S(e.steamAppId);
        return s
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: a().Header,
                  children: "Join Game Session",
                }),
                (0, i.jsxs)("div", {
                  className: a().Explanation,
                  children: [
                    "You've been invited to join a game! Click below to launch ",
                    s.friendly_name || s.name,
                    " on Steam and start playing.",
                  ],
                }),
                (0, i.jsx)("div", {
                  className: a().SessionInfoCtr,
                  children: (0, i.jsx)("iframe", { src: e.sessionLiveDataUrl }),
                }),
                y.TS.IN_CLIENT
                  ? (0, i.jsx)("div", {
                      className: a().SectionCtr,
                      children: (0, i.jsx)(C, {
                        ...e,
                        children: "Launch Game",
                      }),
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: a().SectionCtr,
                          children: y.iA.logged_in
                            ? (0, i.jsx)(U, { ...e })
                            : (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(L.JU, {
                                    children: "Login to join on another device",
                                  }),
                                  (0, i.jsx)(L.$n, {
                                    onClick: N.vg,
                                    children: (0, v.we)("#Login_SignIn"),
                                  }),
                                ],
                              }),
                        }),
                        !y.TS.IN_MOBILE_WEBVIEW &&
                          (0, i.jsxs)("div", {
                            className: a().SectionCtr,
                            children: [
                              (0, i.jsx)(L.JU, {
                                children: "Or launch on this PC",
                              }),
                              (0, i.jsx)(C, {
                                ...e,
                                children: "Launch Game Here",
                              }),
                            ],
                          }),
                      ],
                    }),
              ],
            })
          : (0, i.jsx)(I.t, {});
      }
      function A() {
        const e = (0, y.Tc)("multiplayersession_join", "application_config"),
          s = new URLSearchParams((0, o.zy)().search).get("jws"),
          { header: n, body: t } = (0, c.I3)(s) || { header: {}, body: {} };
        let { steamAppId: r } = t;
        const l = t[e.jws_sessionid_key],
          d = t[e.jws_livedata_url_key];
        return (
          "string" == typeof r && (r = parseInt(r)),
          (0, i.jsxs)("div", {
            className: a().JoinApp,
            children: [
              r && d && d
                ? (0, i.jsx)(b, {
                    steamAppId: r,
                    sessionLiveDataUrl: d,
                    sessionID: l,
                  })
                : (0, i.jsx)("div", { children: "Invalid session link" }),
              " ",
            ],
          })
        );
      }
    },
  },
]);
