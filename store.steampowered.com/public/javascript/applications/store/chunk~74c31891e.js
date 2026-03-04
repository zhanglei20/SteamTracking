/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2287],
  {
    32545: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
        FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
        FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
      };
    },
    10026: (e) => {
      e.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
    },
    18657: (e) => {
      e.exports = {
        BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
        isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
      };
    },
    29868: (e) => {
      e.exports = {
        countdownCtn: "GWWacIf04lQysYMFJma0A",
        Closed: "ATX_xEE69rX8wVxQvONEx",
        CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
        CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
        CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
        LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
        Throbber: "bEkRtFmRUW_smWksM-k9g",
        WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
        WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
        WinnerText: "chkuqox_QD6U5ID_AHTLk",
      };
    },
    9202: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        storeMenuResponsiveModeWidth: "730px",
        narrowWidth: "500px",
        SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
        WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
        BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
      };
    },
    94057: (e, n, t) => {
      "use strict";
      t.d(n, { w: () => p });
      var o = t(34629),
        s = t(41735),
        r = t.n(s),
        a = t(14947),
        i = t(65946),
        l = t(90626),
        c = t(6419),
        u = t(6144),
        d = t(84933),
        _ = t(78327);
      class g {
        constructor() {
          (0, a.Gn)(this);
        }
        giveaway_id = void 0;
        seconds_until_drawing = void 0;
        rtime_start = void 0;
        rtime_end = void 0;
        closed = void 0;
        winner_count = void 0;
        BIsValid() {
          return void 0 !== this.giveaway_id && null !== this.giveaway_id;
        }
        BStarted() {
          return (
            this.BIsValid() &&
            (this.seconds_until_drawing >= 0 || this.winner_count > 0)
          );
        }
        clone() {
          const e = new g();
          return (
            (e.giveaway_id = this.giveaway_id),
            (e.seconds_until_drawing = this.seconds_until_drawing),
            (e.rtime_start = this.rtime_start),
            (e.rtime_end = this.rtime_end),
            (e.closed = this.closed),
            (e.winner_count = this.winner_count),
            e
          );
        }
      }
      (0, o.Cg)([a.sH], g.prototype, "giveaway_id", void 0),
        (0, o.Cg)([a.sH], g.prototype, "seconds_until_drawing", void 0),
        (0, o.Cg)([a.sH], g.prototype, "rtime_start", void 0),
        (0, o.Cg)([a.sH], g.prototype, "rtime_end", void 0),
        (0, o.Cg)([a.sH], g.prototype, "closed", void 0),
        (0, o.Cg)([a.sH], g.prototype, "winner_count", void 0);
      class w {
        constructor() {
          (0, a.Gn)(this);
        }
        m_mapGiveawayIDToNextDrawInfo = new Map();
        m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
        m_bLoadedFromConfig = !1;
        m_mapNextDrawChangeCallback = new Map();
        GetKey(e, n) {
          return e + "_" + n;
        }
        GetInfoByInstance(e, n) {
          return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
            this.GetKey(e, n),
          );
        }
        GetNextDrawChangeCallback(e) {
          return (
            this.m_mapNextDrawChangeCallback.has(e) ||
              this.m_mapNextDrawChangeCallback.set(e, new u.lu()),
            this.m_mapNextDrawChangeCallback.get(e)
          );
        }
        CopyToGiveaway(e, n) {
          n.closed != e.closed && (n.closed = e.closed),
            n.giveaway_id != e.giveaway_id && (n.giveaway_id = e.giveaway_id),
            n.rtime_start != e.rtime_start && (n.rtime_start = e.rtime_start),
            n.rtime_end != e.rtime_end && (n.rtime_end = e.rtime_end),
            n.winner_count != e.winner_count &&
              (n.winner_count = e.winner_count),
            n.seconds_until_drawing != e.seconds_until_drawing &&
              (n.seconds_until_drawing = e.seconds_until_drawing);
        }
        async ReloadGiveaway(e, n) {
          if (!e) return null;
          let t = _.TS.STORE_BASE_URL + "prizes/nextdraw/" + e,
            o = null,
            s = { origin: self.origin };
          return (
            (o = await r().get(t, { params: s })),
            (0, a.h5)(() => {
              if (
                (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                  this.m_mapGiveawayIDToNextDrawInfo.set(e, new g()),
                this.CopyToGiveaway(
                  o.data,
                  this.m_mapGiveawayIDToNextDrawInfo.get(e),
                ),
                void 0 !== n)
              ) {
                const t = this.GetKey(e, n);
                this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(t) ||
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(t, new g()),
                  this.CopyToGiveaway(
                    o.data,
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(t),
                  );
              }
            }),
            this.GetNextDrawChangeCallback(e).Dispatch(
              this.m_mapGiveawayIDToNextDrawInfo.get(e),
            ),
            this.m_mapGiveawayIDToNextDrawInfo.get(e)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            w.s_Singleton ||
              ((w.s_Singleton = new w()),
              w.s_Singleton.Init(),
              "dev" == _.TS.WEB_UNIVERSE &&
                (window.g_GiveawayStore = w.s_Singleton)),
            w.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, _.Tc)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let n = new g();
              this.CopyToGiveaway(e, n),
                this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, n);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
      }
      (0, o.Cg)([a.sH], w.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, o.Cg)([a.XI], w.prototype, "CopyToGiveaway", null);
      class m {
        m_intervalID;
        m_intervalCountDownID;
        static s_GlobalInstance = 0;
        m_myInstanceNumber = 0;
        constructor() {
          (this.m_myInstanceNumber = m.s_GlobalInstance),
            (m.s_GlobalInstance += 1);
        }
        ClearRefreshInterval() {
          this.m_intervalID &&
            (window.clearInterval(this.m_intervalID),
            (this.m_intervalID = void 0));
        }
        ClearCountDown() {
          this.m_intervalCountDownID &&
            (window.clearInterval(this.m_intervalCountDownID),
            (this.m_intervalCountDownID = void 0));
        }
        SetupRefreshDataInterval(e, n) {
          if ((this.ClearRefreshInterval(), !e.closed)) {
            let t =
              e.seconds_until_drawing <= 0 && 0 == e.winner_count ? 6e4 : 5e3;
            this.m_intervalID = window.setInterval(n, t);
          }
        }
        SetupCountDown(e, n) {
          e > 0 && (this.m_intervalCountDownID = window.setInterval(n, 1e3));
        }
      }
      function v(e, n) {
        const t = w.Get().GetInfoByInstance(e, n.m_myInstanceNumber);
        (t.seconds_until_drawing -= 1),
          0 == t.seconds_until_drawing && n.ClearCountDown();
      }
      function p(e) {
        const [n] = (0, l.useState)(new m()),
          t = (0, d.CH)();
        (0, l.useEffect)(
          () => (
            w
              .Get()
              .ReloadGiveaway(e, n.m_myInstanceNumber)
              .then((o) => {
                n.SetupRefreshDataInterval(o, () =>
                  (function (e, n) {
                    const t = w
                      .Get()
                      .GetInfoByInstance(e, n.m_myInstanceNumber);
                    t &&
                      t.BIsValid() &&
                      t.seconds_until_drawing <= 0 &&
                      !t.closed &&
                      (n.ClearCountDown(),
                      w
                        .Get()
                        .ReloadGiveaway(e, n.m_myInstanceNumber)
                        .then((t) => {
                          n.SetupCountDown(t.seconds_until_drawing, () =>
                            v(e, n),
                          );
                        }));
                  })(e, n),
                ),
                  n.SetupCountDown(o.seconds_until_drawing, () => v(e, n)),
                  t();
              }),
            () => {
              n.ClearRefreshInterval(), n.ClearCountDown();
            }
          ),
          [n, e, t],
        );
        const o = w.Get().GetInfoByInstance(e, n.m_myInstanceNumber),
          [s, r, a] = (0, i.q3)(() => [
            o?.winner_count,
            o?.closed,
            o?.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !o || null == o.giveaway_id || !o.BStarted() || void 0 === s,
          winner_count: s,
          closed: r,
          seconds_until_drawing: a,
        };
      }
      (0, o.Cg)([c.o], m.prototype, "ClearRefreshInterval", null),
        (0, o.Cg)([c.o], m.prototype, "ClearCountDown", null),
        (0, o.Cg)([c.o], m.prototype, "SetupRefreshDataInterval", null),
        (0, o.Cg)([c.o], m.prototype, "SetupCountDown", null);
    },
    90609: (e, n, t) => {
      "use strict";
      t.d(n, { d: () => $e });
      var o = t(19367),
        s = t(90626),
        r = t(72034),
        a = t(51006),
        i = t(60746),
        l = t(6379),
        c = t(61859),
        u = t(78327),
        d = t(7850),
        _ = t(59952),
        g = t(41735),
        w = t.n(g),
        m = t(68797);
      class v {
        m_counts = null;
        m_promise;
        GetCounts() {
          return this.m_counts;
        }
        async LoadCounts() {
          return Boolean(this.m_counts)
            ? this.m_counts
            : (this.m_promise || (this.m_promise = this.LoadInternalCount()),
              this.m_promise);
        }
        async LoadInternalCount() {
          let e = null;
          try {
            const n =
                u.TS.STORE_BASE_URL + "saleaction/ajaxgetuserdeckcompatcounts",
              t = await w().get(n, {});
            if (200 == t?.status && 1 == t.data?.success && t.data?.counts)
              return (this.m_counts = t.data.counts), this.m_counts;
            e = (0, m.H)(t);
          } catch (n) {
            e = (0, m.H)(n);
          }
          return (
            console.error(
              "CDeckCompCountStore.LoadInternalCount failed: " + e?.strErrorMsg,
              e,
            ),
            null
          );
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            v.s_globalSingletonStore ||
              ((v.s_globalSingletonStore = new v()),
              ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = v.s_globalSingletonStore)),
            v.s_globalSingletonStore
          );
        }
        constructor() {
          if (document.getElementById("application_config")) {
            let e = (0, u.Tc)("deckcompatcount", "application_config");
            v.ValidateListCompat(e) && (this.m_counts = e);
          }
        }
        static ValidateListCompat(e) {
          const n = e;
          return (
            n &&
            "number" == typeof n.verified &&
            "number" == typeof n.unsupported &&
            "number" == typeof n.playable
          );
        }
      }
      var p = t(85320),
        h = t(56631),
        I = t(35400),
        f = t(6878),
        y = t(84811),
        D = t(22797),
        C = t(77291),
        x = t(19267),
        b = t(8527),
        j = t(62490);
      const N = s.Fragment;
      function S(e) {
        const {
            reservationPackageID: n,
            event: t,
            depositPackageID: o,
            bIsPreview: r,
            psuLessPackageID: a,
            strOutOfStockOverride: i,
            strDeliveryOverride: l,
            bDeliveryOverrideOnlyIfOutOfStock: u,
          } = e,
          _ = (0, x.DR)(n),
          g = (0, x.DR)(a),
          w = (0, s.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + n,
                reservation_package: n,
                deposit_package: o,
                localized_reservation_desc: (0, j.$Y)([], 31, null),
                localized_out_of_stock_override: (0, j.$Y)(
                  [i || null],
                  31,
                  null,
                ),
                localized_delivery_override_desc: (0, j.$Y)(
                  [l || null],
                  31,
                  null,
                ),
                override_delivery_only_out_of_stock: Boolean(u),
                psu_less_package: a,
              },
            ],
            [n, o, i, l, u, a],
          );
        if (!_ || (a && !g))
          return (0, d.jsx)(D.t, {
            string: (0, c.we)("#Loading"),
            size: "small",
            position: "center",
          });
        const m = !b.iA.logged_in || !_.account_restricted_from_purchasing;
        return (0, d.jsxs)(y.tH, {
          children: [
            (0, d.jsx)(s.Suspense, {
              fallback: null,
              children: (0, d.jsx)(N, { bIsPreview: r, rgReservationDef: w }),
            }),
            Boolean(_.allow_purchase_in_country) &&
              (0, d.jsxs)("div", {
                className: w[0].unique_id,
                children: [
                  (0, d.jsx)(C.bk, {
                    reservationDef: w[0],
                    hardwareDetail: _,
                    bPSULessModel: !1,
                  }),
                  m &&
                    (0, d.jsx)(C.pc, {
                      event: t,
                      reservationDef: w[0],
                      hardwareDetail: _,
                    }),
                  Boolean(g?.allow_purchase_in_country) &&
                    (0, d.jsx)(C.bk, {
                      reservationDef: w[0],
                      hardwareDetail: g,
                      bPSULessModel: !0,
                    }),
                ],
              }),
          ],
        });
      }
      var B = t(28188),
        G = t(60014),
        k = t(55963),
        T = t(73371),
        L = t.n(T),
        E = t(52038),
        O = t(94636),
        F = t(20446),
        A = t(9202),
        M = t.n(A),
        W = t(35380);
      function P(e) {
        const { appid: n, color: t, bgcolor: o } = e,
          s = (0, G.n9)(),
          r = (0, W.$5)(n),
          a = (0, k.L3)(s);
        return (0, d.jsx)("div", {
          className: M().WishlistHoverCtn,
          children: (0, d.jsx)(O.E, {
            snr: a,
            id: r,
            classOverride: (0, E.A)(
              L().WishlistButtonNotTop,
              M().BBCodeWishlistButton,
              "WishlistButton",
            ),
            styleOverride: { color: t, backgroundColor: o },
          }),
        });
      }
      function R(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, F.O)(e.args.color, "black"),
          o = (0, F.O)(e.args.bgcolor, "white");
        return (0, d.jsx)(P, { appid: n, color: t, bgcolor: o });
      }
      var H = t(10026),
        $ = t.n(H),
        q = t(76217),
        U = t(68009),
        V = t(1062),
        z = t(12155),
        K = t(4434),
        Q = t(84547),
        X = t(32545),
        Z = t.n(X);
      function Y(e) {
        const { appID: n, classOverride: t, styleOverride: o } = e,
          [r, a] = (0, s.useState)(!1),
          i = (0, K.m)("GameHoverFollowButton"),
          { elDialogElement: l, fnShowLogonDialog: _ } = (0, Q.E)(),
          g = (0, U.Fh)(n),
          { mutateAsync: w } = (0, V.L)(n, !g, void 0);
        return (0, d.jsxs)(q.Z, {
          className: (0, E.A)(Z().FollowButton, t),
          onClick: async (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              u.iA.logged_in
                ? (a(!0), await w(), i.token.reason || a(!1))
                : _();
          },
          style: o,
          children: [
            g ? (0, d.jsx)(z.pPV, {}) : (0, d.jsx)(z.c9e, {}),
            (0, d.jsx)("div", {
              className: (0, E.A)(
                Z().FollowButtonText,
                r && Z().FollowLoadingText,
                "FollowGameButton",
              ),
              children: (0, c.we)(
                g ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
              ),
            }),
            l,
          ],
        });
      }
      function J(e) {
        const { appid: n, color: t, bgcolor: o } = e;
        (0, G.n9)();
        return (0, d.jsx)(Y, {
          appID: n,
          classOverride: (0, E.A)(
            L().FollowGameButtonNotTop,
            $().BBCodeFollowButton,
          ),
          styleOverride: { color: t, backgroundColor: o },
        });
      }
      function ee(e) {
        const n = Number(e.args.appid);
        if (!n) return null;
        const t = (0, F.O)(e.args.color, "black"),
          o = (0, F.O)(e.args.bgcolor, "white");
        return (0, d.jsx)(J, { appid: n, color: t, bgcolor: o });
      }
      var ne = t(94057),
        te = t(29868),
        oe = t(6083);
      function se(e) {
        return e < 10 ? "0" + e : e;
      }
      function re(e) {
        const { giveawayid: n } = e,
          t = (0, ne.w)(n),
          {
            bLoadingGiveawayInfo: o,
            winner_count: r,
            closed: a,
            seconds_until_drawing: i,
          } = t;
        return o
          ? null
          : (0, d.jsxs)("div", {
              className: te.countdownCtn,
              children: [
                Boolean(a) &&
                  (0, d.jsx)("div", {
                    className: te.Closed,
                    children:
                      r > 0
                        ? (0, c.we)("#Giveaway_Closed", (0, oe.D)(r))
                        : (0, c.we)("#Giveaway_Closed_NoWinnerInfo"),
                  }),
                Boolean(!a) &&
                  (0, d.jsxs)(s.Fragment, {
                    children: [
                      Boolean(i <= 0)
                        ? (0, d.jsxs)("div", {
                            className: te.Throbber,
                            children: [
                              (0, d.jsx)(D.t, { size: "small" }),
                              (0, d.jsx)("div", {
                                children: (0, c.we)("#Giveaway_RandomDraw"),
                              }),
                            ],
                          })
                        : (0, d.jsxs)("div", {
                            className: te.CountDownCtn,
                            children: [
                              (0, d.jsx)("div", {
                                className: te.CountDownTime,
                                children:
                                  se(Math.floor(i / 60)) + ":" + se(i % 60),
                              }),
                              (0, d.jsxs)("div", {
                                className: te.CountDownText,
                                children: [
                                  (0, c.we)("#Giveaway_CountDown2"),
                                  " ",
                                  (0, c.we)("#Giveaway_KeepWatching"),
                                ],
                              }),
                            ],
                          }),
                      Boolean(r > 0) &&
                        (0, d.jsxs)("div", {
                          className: te.WinnerInfo,
                          children: [
                            (0, d.jsx)("div", {
                              className: te.WinnerCount,
                              children: (0, oe.D)(r),
                            }),
                            (0, d.jsx)("div", {
                              className: te.WinnerText,
                              children: (0, c.we)("#Giveaway_Congratulation"),
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            });
      }
      var ae = t(10962),
        ie = t(39733),
        le = t(53835),
        ce = t(82477),
        ue = t(92757),
        de = t(39256),
        _e = t(99487),
        ge = t(7193),
        we = t(39199),
        me = t(96971),
        ve = t(50832),
        pe = t(40353);
      function he(e) {
        const { eventModel: n, nEventBadgeID: t } = e,
          o = (0, ie.fy)(t);
        if (o?.level > 0) {
          let e = o.level;
          if (n?.BHasSaleEnabled()) {
            const o = n.GetSaleSectionsByType("badge_progress");
            if (1 == o?.length) {
              const s = o[0].badge_progress;
              if (s?.event_badgeid == t && s?.granted_by_discovery_queue) {
                const t = s.levels[s.levels.length - 1].level;
                return (0, d.jsx)(Ie, {
                  eventModel: n,
                  nBadgeLevel: e,
                  nMaxLevel: t,
                });
              }
            }
          }
          return (0, d.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, oe.D)(e),
          });
        }
        return null;
      }
      function Ie(e) {
        const { eventModel: n, nBadgeLevel: t, nMaxLevel: o } = e,
          r = s.useMemo(() => {
            const e = n
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return e?.length > 0 ? e[0] : null;
          }, [n]),
          { storePageFilter: a, eStoreDiscoveryQueueType: i } = s.useMemo(
            () => (0, ge.lx)(n, r),
            [n, r],
          ),
          l = (0, we.Uf)(i, a),
          c = Math.min(t + l, o);
        return (0, d.jsx)("span", {
          className: "DisplayBadgeProgress",
          children: (0, oe.D)(c),
        });
      }
      function fe(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, _.j$)(e.args, "eventid"));
        return u.iA.logged_in && t
          ? (0, d.jsx)(he, { nEventBadgeID: t, eventModel: n })
          : null;
      }
      function ye(e) {
        const { nDoorIndex: n, children: t } = e,
          o = (0, I.OM)(n),
          { fnOpenDoor: r } = (0, I.OC)(),
          [a, i] = s.useState(!1),
          [l, _] = s.useState(!1);
        return (0, d.jsx)(le.$n, {
          disabled: o,
          onClick: (e) => {
            a ||
              (u.iA.logged_in
                ? (i(!0),
                  r(n, !0, null, !1)
                    .then((e) => {
                      e || _(!0), i(!1);
                    })
                    .catch(() => {
                      _(!0), i(!1);
                    }))
                : (0, ce.vg)());
          },
          children: Boolean(l)
            ? (0, d.jsx)("div", {
                children: (0, c.we)("#GrantAwardError_Busy"),
              })
            : (0, d.jsxs)(d.Fragment, {
                children: [
                  Boolean(a) && (0, d.jsx)(D.t, { size: "small" }),
                  Boolean(o) && (0, d.jsx)(z.Jlk, {}),
                  t,
                ],
              }),
        });
      }
      function De(e) {
        const n = Number.parseInt((0, _.j$)(e.args)) || 0;
        return n >= 0 && n < 32
          ? (0, d.jsx)(ye, { nDoorIndex: n, children: e.children })
          : null;
      }
      const Ce = (0, ue.y)(ve.H);
      function xe(e) {
        const n = Number.parseInt((0, _.j$)(e.args)),
          { event: t, showErrorInfo: o } = e.context;
        if (n) {
          const s = t?.jsondata?.sale_sections?.findIndex(
            (e) => e.unique_id == n,
          );
          if (s >= 0) {
            const n = t.GetDayIndexFromEventStart();
            return (0, d.jsx)(me.Cs, {
              location: o ? 2 : 0,
              children: (0, d.jsx)(Ce, {
                event: t,
                section: t.jsondata.sale_sections[s],
                activeTab: new _e.y(null, n),
                language: e.language,
                nSaleDayIndex: n,
                promotionName: "",
                appVisibilityTracker: null,
                ePreviewMode: o
                  ? pe.S.EPreviewMode_Enabled
                  : pe.S.EPreviewMode_Disabled,
              }),
            });
          }
          if (o)
            return (0, d.jsxs)("div", {
              className: de.ErrorDiv,
              children: ["Error could not find sale section ", n],
            });
        }
        return null;
      }
      var be = t(30894),
        je = t(18657),
        Ne = t.n(je),
        Se = t(18638);
      function Be(e) {
        const { clanAccountID: n, color: t, bgcolor: o } = e;
        (0, be.L2)();
        const [r, a] = s.useState(!1);
        return (0, d.jsx)("div", {
          className: (0, E.A)(Ne().BBCodeFollowButton, r && Ne().isHovered),
          onMouseEnter: () => a(!0),
          onMouseLeave: () => a(!1),
          children: (0, d.jsx)(Se.Q, {
            nCreatorAccountID: n,
            classOverride: L().FollowGameButtonNotTop,
            styleOverride: { color: t, backgroundColor: o },
            followType: "group",
          }),
        });
      }
      function Ge(e) {
        const { event: n } = e.context,
          t = Number(e.args.groupid) || n.clanSteamID.GetAccountID();
        if (!t) return null;
        const o = (0, F.O)(e.args.color, "black"),
          s = (0, F.O)(e.args.bgcolor, "white");
        return (0, d.jsx)(Be, { clanAccountID: t, color: o, bgcolor: s });
      }
      let ke = null;
      function Te(e) {
        const { event: n } = e.context,
          t = Number.parseInt((0, _.j$)(e.args, "appid")),
          o = Number.parseInt((0, _.j$)(e.args, "itemdefid")),
          s = Number.parseInt((0, _.j$)(e.args, "maxquantity")),
          r = (0, _.j$)(e.args, "calltoaction");
        return (0, h.gS)(t, o)
          ? (0, d.jsx)(B.f, {
              language: e.language,
              clanAccountID: n.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: t, nItemDefID: o, max_quantity: s },
              strCallToAction: r,
            })
          : (0, d.jsx)(D.t, {
              size: "small",
              position: "center",
              string: (0, c.we)("#Loading"),
            });
      }
      function Le(e) {
        const n = (function () {
          const [e, n] = s.useState(v.Get().GetCounts());
          return (
            s.useEffect(() => {
              e || v.Get().LoadCounts().then(n);
            }, []),
            e
          );
        })();
        if (!n) return (0, d.jsx)(D.t, { size: "small" });
        const t = Number.parseInt((0, _.j$)(e.args));
        let o = n.verified;
        switch (t) {
          case 2:
            o = n.playable;
            break;
          case 1:
            o = n.unsupported;
        }
        return (0, d.jsx)("span", { children: (0, oe.D)(Number(o)) });
      }
      function Ee(e) {
        const n = (0, p.j)("library");
        if (!n) return (0, d.jsx)(D.t, { size: "small" });
        const t = Number.parseInt((0, _.j$)(e.args));
        let o = n.verifiedList?.length || 0;
        switch (t) {
          case 2:
            o = n.playableList?.length || 0;
            break;
          case 1:
            o = n.unsupportedList?.length || 0;
            break;
          case 0:
            o = n.unknownList?.length || 0;
        }
        return (0, d.jsx)("span", { children: (0, oe.D)(Number(o)) });
      }
      function Oe(e) {
        const n = Number.parseInt((0, _.j$)(e.args)),
          t =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, _.j$)(e.args, "hide")));
        return n >= 0
          ? (0, d.jsx)(Fe, { nDoorIndex: n, bHide: t, children: e.children })
          : null;
      }
      function Fe(e) {
        const { nDoorIndex: n, bHide: t, children: o } = e,
          s = (0, I.OM)(n);
        return null == s
          ? null
          : (s && !t) || (!s && t)
            ? (0, d.jsx)(d.Fragment, { children: e.children })
            : null;
      }
      function Ae(e) {
        if (u.iA.logged_in) {
          const n = Number.parseInt((0, _.j$)(e.args)),
            t = Number.parseInt((0, _.j$)(e.args, "mod"));
          if (t > 0 && n < t && u.iA.accountid % t == n) return e.children;
        }
        return null;
      }
      function Me(e) {
        const n = (0, _.j$)(e.args);
        return n?.trim().length > 0
          ? (0, d.jsx)("div", { className: n.trim(), children: e.children })
          : (0, d.jsx)(d.Fragment, { children: e.children });
      }
      function We(e) {
        return (0, d.jsx)("span", {
          className: f.LocalizeBlock,
          children: (0, c.oW)(
            e.children,
            (0, d.jsx)("b", {}),
            (0, d.jsx)("b", {}),
            (0, d.jsx)("b", {}),
            (0, d.jsx)("b", {}),
          ),
        });
      }
      function Pe(e) {
        let n = (0, _.j$)(e.args);
        return n
          ? (0, d.jsx)(re, { giveawayid: n })
          : (0, d.jsx)(s.Fragment, {});
      }
      function Re(e) {
        const { event: n, showErrorInfo: t } = e.context,
          o = Number.parseInt((0, _.j$)(e.args));
        if (o) {
          const t = Number.parseInt((0, _.j$)(e.args, "depositpackageid")),
            s = Number.parseInt((0, _.j$)(e.args, "psulesspackageid")),
            r = (0, _.j$)(e.args, "out_of_stock_override"),
            a = (0, _.j$)(e.args, "delivery_override"),
            i = (0, _.j$)(e.args, "delivery_override_out_of_stock");
          return (0, d.jsx)(S, {
            reservationPackageID: o,
            event: n,
            depositPackageID: t,
            psuLessPackageID: s,
            strOutOfStockOverride: r,
            strDeliveryOverride: i || a,
            bDeliveryOverrideOnlyIfOutOfStock: Boolean(i),
          });
        }
        return (0, d.jsx)(d.Fragment, {});
      }
      var He = t(32337);
      function $e(e) {
        const { bSalePage: n } = e,
          [t, d] = s.useState(i.KN.IsInitialized());
        return (
          s.useEffect(() => {
            a.Vw.Init(new r.D(u.TS.WEBAPI_BASE_URL)),
              l.O3.Init(),
              n &&
                He.us.AddDictionary(
                  (null == ke &&
                    (ke = new Map([
                      [
                        "itemdef",
                        {
                          Constructor: Te,
                          autocloses: !1,
                          skipInternalNewline: !0,
                          allowWrapTextForCopying: !0,
                        },
                      ],
                      ["wishlist", { Constructor: R, autocloses: !1 }],
                      ["followgame", { Constructor: ee, autocloses: !1 }],
                      ["followgroup", { Constructor: Ge, autocloses: !1 }],
                      ["deckcompatcount", { Constructor: Le, autocloses: !1 }],
                      [
                        "deckcompatuserlibrarycount",
                        { Constructor: Ee, autocloses: !1 },
                      ],
                      ["giveawayinfo", { Constructor: Pe, autocloses: !1 }],
                      ["price", { Constructor: ae.zD, autocloses: !1 }],
                      ["pricesavings", { Constructor: ae.y7, autocloses: !1 }],
                      [
                        "eventdoorvisibility",
                        { Constructor: Oe, autocloses: !1 },
                      ],
                      ["chooseaccount", { Constructor: Ae, autocloses: !1 }],
                      [
                        "badgecurrentlevel",
                        { Constructor: fe, autocloses: !1 },
                      ],
                      ["optindoorquest", { Constructor: De, autocloses: !1 }],
                      ["classname", { Constructor: Me, autocloses: !1 }],
                      ["localize", { Constructor: We, autocloses: !1 }],
                      ["salesection", { Constructor: xe, autocloses: !1 }],
                      [
                        "reservationbutton",
                        { Constructor: Re, autocloses: !1 },
                      ],
                    ])),
                  ke),
                ),
              i.KN.InitGlobal().then(() => d(!0));
          }, [n]),
          s.useEffect(() => {
            const e = (0, c.l4)();
            e && o.locale(e);
          }, []),
          t ? e.children : null
        );
      }
    },
  },
]);
