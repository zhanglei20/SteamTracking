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
    82477: (e, t, n) => {
      "use strict";
      n.d(t, { Cg: () => u, pZ: () => p, vg: () => E });
      var a = n(90626),
        s = n(738),
        r = n(61859),
        i = n(78327),
        l = n(97436),
        o = n(72034),
        c = n(28240),
        m = n(51706);
      function d(e) {
        return a.createElement(
          s.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          a.createElement(f, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function u(e) {
        const { redirectURL: t = window.location.href } = e;
        return a.createElement(
          m.EN,
          { active: !0 },
          a.createElement(d, { redirectURL: t }),
        );
      }
      function E() {
        (0, s.pg)(
          a.createElement(d, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, r.we)("#Login_SignInTitle") },
        );
      }
      function p(e, t) {
        (0, s.pg)(
          a.createElement(d, {
            ownerWin: window,
            redirectURL: e,
            guestOption: t,
          }),
          window,
          { strTitle: (0, r.we)("#Login_SignInTitle") },
        );
      }
      function f(e) {
        const { redirectURL: t, guestOption: n } = e,
          [s] = (0, a.useState)(
            new o.D(i.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [r, m] = (0, a.useState)(!1);
        return a.createElement(
          "div",
          null,
          r
            ? a.createElement(l.Fn, null)
            : a.createElement(
                l.YN,
                {
                  autoFocus: !0,
                  transport: s,
                  platform: 2,
                  onComplete: (e) => {
                    e == c.wI.k_PrimaryDomainFail
                      ? m(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                n && a.createElement(l.Mk, { redirectURL: t }),
              ),
        );
      }
    },
    51706: (e, t, n) => {
      "use strict";
      n.d(t, {
        mt: () => c,
        Qs: () => f,
        o0: () => v.o0,
        eV: () => g.eV,
        KG: () => v.KG,
        Ee: () => v.Ee,
        x_: () => i.x_,
        of: () => m,
        pY: () => v.pY,
        EN: () => r.E,
      });
      var a = n(90626),
        s = n(53835),
        r = n(21869),
        i = n(2654),
        l =
          (n(72739),
          n(48902),
          n(60155),
          n(25118),
          n(84933),
          n(52745),
          n(13871),
          n(78327));
      n(28460);
      function o(e) {
        const { labelledBy: t } = e || {},
          [n, s] = a.useState(void 0);
        return {
          headerId: t || n,
          context: a.useMemo(() => ({ setHeaderId: s }), []),
        };
      }
      function c(e) {
        const {
            active: t,
            onDismiss: n,
            className: l,
            modalClassName: c,
            children: m,
            ...d
          } = e,
          { headerId: u, context: E } = o({ labelledBy: e["aria-labelledby"] });
        return a.createElement(
          s.t6.Provider,
          { value: E },
          a.createElement(
            r.E,
            { active: t },
            a.createElement(
              i.x_,
              { onEscKeypress: n, className: c },
              a.createElement(
                s.UC,
                { role: "dialog", "aria-labelledby": u, className: l, ...d },
                m,
              ),
            ),
          ),
        );
      }
      function m(e) {
        const { className: t, children: n } = e;
        return a.createElement(
          r.E,
          { active: !0 },
          a.createElement("div", { className: t }, n),
        );
      }
      n(81194);
      var d = n(85585),
        u = n(7445),
        E = n(76217),
        p = n(88843);
      function f(e) {
        const { children: t, navID: n, closeModal: s } = e,
          r = a.createRef(),
          i = (e) => (e.stopPropagation(), e.preventDefault(), !0);
        return (0, l.Qn)() && !l.TS.IN_STEAMUI
          ? a.createElement(
              d.B2,
              {
                navID: n,
                navTreeRef: r,
                onCancelButton: s,
                className: p.GamepadOnlyModalWrapper,
              },
              a.createElement(
                u.q,
                null,
                a.createElement(
                  E.Z,
                  {
                    className: p.GamepadOnlyPanelWrapper,
                    onGamepadDirection: i,
                    focusableIfEmpty: !0,
                  },
                  t,
                ),
              ),
            )
          : a.createElement(a.Fragment, null, t);
      }
      var v = n(78395),
        g = n(10411);
      n(76222);
    },
    40917: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => B });
      var a = n(90626),
        s = n(9054),
        r = n.n(s),
        i = n(92757),
        l = n(23809),
        o = n(41762),
        c = n(58632),
        m = n.n(c),
        d = n(80902),
        u = n(56545),
        E = n(37403),
        p = n(30470),
        f = n(22837);
      let v;
      const g = 864e5;
      function N(e) {
        return `appinfo_${e}_${p.TS.LANGUAGE}`;
      }
      function S(e) {
        return Boolean(e && Date.now() - e.timeCached < g);
      }
      function h(e) {
        const t = (0, l.KV)(),
          n = (0, l.rX)();
        return (0, d.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                v ||
                  (v = new (m())(
                    async (n) => {
                      const a = new Map();
                      (await Promise.all(n.map((e) => t.GetObject(N(e)))))
                        .filter(S)
                        .forEach(({ value: e }) => a.set(e.appid, e));
                      const s = n.slice().filter((e) => !a.has(e));
                      if (s.length) {
                        const n = u.w.Init(E._z);
                        n.Body().set_language((0, f.sf)(p.TS.LANGUAGE)),
                          n.Body().set_appids(s);
                        const r = await E.BE.GetApps(e, n);
                        if (1 != r.GetEResult()) throw r.GetErrorMessage();
                        r.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(N(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              a.set(e.appid, e);
                          });
                      }
                      return n.map((e) => a.get(e));
                    },
                    { cache: !1 },
                  )),
                v
              );
            })(t, n).load(e),
          staleTime: g,
          enabled: !!e,
        }).data;
      }
      var _ = n(79908),
        w = n(61859),
        I = n(82477),
        y = n(53835),
        b = n(22797),
        L = n(78327);
      function C(e) {
        return `?joinsessionid=${e}`;
      }
      function U(e) {
        return a.createElement(
          y.$n,
          {
            className: r().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${e.steamAppId}` + C(e.sessionID)),
          },
          e.children,
        );
      }
      function A(e) {
        const t = (0, _.Vc)(),
          n = (0, l.KV)();
        return t.isSuccess
          ? t.data?.sessions?.length > 0
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  y.JU,
                  { className: r().AvailableSessionsText },
                  "Available Steam Sessions:",
                ),
                a.createElement(
                  "div",
                  { className: r().SessionList },
                  t.data?.sessions.map((t) =>
                    a.createElement(
                      "div",
                      { className: r().Session, key: t.client_instanceid },
                      a.createElement(
                        "div",
                        { className: r().MachineName },
                        t.machine_name,
                      ),
                      a.createElement(
                        "div",
                        { className: r().OsName },
                        t.os_name,
                      ),
                      a.createElement(
                        y.$n,
                        {
                          className: r().JoinSessionButton,
                          onClick: () =>
                            (0, _.o6)(
                              n,
                              t.client_instanceid,
                              e.steamAppId,
                              C(e.sessionID),
                            ),
                        },
                        "Launch Game",
                      ),
                    ),
                  ),
                ),
              )
            : a.createElement(
                "div",
                { className: r().Error },
                "No logged in sessions",
              )
          : t.isFetching || t.isRefetching
            ? a.createElement(b.t, null)
            : a.createElement(
                "div",
                { className: r().Error },
                "Error ",
                t.error.message,
              );
      }
      function D(e) {
        const t = h(e.steamAppId);
        return t
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "div",
                { className: r().Header },
                "Join Game Session",
              ),
              a.createElement(
                "div",
                { className: r().Explanation },
                "You've been invited to join a game! Click below to launch ",
                t.friendly_name || t.name,
                " on Steam and start playing.",
              ),
              a.createElement(
                "div",
                { className: r().SessionInfoCtr },
                a.createElement("iframe", { src: e.sessionLiveDataUrl }),
              ),
              L.TS.IN_CLIENT
                ? a.createElement(
                    "div",
                    { className: r().SectionCtr },
                    a.createElement(U, { ...e }, "Launch Game"),
                  )
                : a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      "div",
                      { className: r().SectionCtr },
                      L.iA.logged_in
                        ? a.createElement(A, { ...e })
                        : a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                              y.JU,
                              null,
                              "Login to join on another device",
                            ),
                            a.createElement(
                              y.$n,
                              { onClick: I.vg },
                              (0, w.we)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !L.TS.IN_MOBILE_WEBVIEW &&
                      a.createElement(
                        "div",
                        { className: r().SectionCtr },
                        a.createElement(y.JU, null, "Or launch on this PC"),
                        a.createElement(U, { ...e }, "Launch Game Here"),
                      ),
                  ),
            )
          : a.createElement(b.t, null);
      }
      function B() {
        const e = (0, L.Tc)("multiplayersession_join", "application_config"),
          t = new URLSearchParams((0, i.zy)().search).get("jws"),
          { header: n, body: s } = (0, o.I3)(t) || { header: {}, body: {} };
        let { steamAppId: l } = s;
        const c = s[e.jws_sessionid_key],
          m = s[e.jws_livedata_url_key];
        return (
          "string" == typeof l && (l = parseInt(l)),
          a.createElement(
            "div",
            { className: r().JoinApp },
            l && m && m
              ? a.createElement(D, {
                  steamAppId: l,
                  sessionLiveDataUrl: m,
                  sessionID: c,
                })
              : a.createElement("div", null, "Invalid session link"),
            " ",
          )
        );
      }
    },
  },
]);
