/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1677],
  {
    56420: (e) => {
      e.exports = {
        SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
        SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
        none: "T3Fb5KTXwIHM2B-ThTvEs",
        Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
        Large: "_3BESV4eFnr4EnaSaJSdk6T",
        Dim: "rpZ9bKyFXYvNQvgtKn5GV",
        Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
        Z2: "VmQTOrz5MPOWte5C9K7YS",
        Z3: "_29mtadjX8N6pRn5TX1nA0o",
        hoverParent: "_3-8cByP2koYzHwgZqjvFA",
        animating: "_2rXc7hLg6bohWZ-JpRcYEB",
        Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
      };
    },
    18828: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
        threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
        blocked: "VTxPkslK1CSpKNFMgKg7d",
        richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
        playerName: "nOdcT-MoOaXGePXLyPe0H",
        playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
        EllipsisName: "_1valFgvEGxquAi_2IrAKqO",
        DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
        playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
        richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
        gameName: "_1cB0qtF0paHWWyj1XNcnbG",
        NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
        twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
        DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
        partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
        hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
        compactView: "_3bbRZyUiK-bfc5Qov6xukI",
        noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
        gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
        PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
      };
    },
    70342: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
        MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
        SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
        VRIcon: "_368tz9TSOLGiG2mNMLScMz",
      };
    },
    34181: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => j, D: () => h });
      var i = r(34629),
        s = r(7850),
        a = r(90626),
        n = r(75844),
        c = r(61859),
        o = r(22837),
        l = r(10622),
        m = r(52038),
        u = r(56420),
        d = r.n(u);
      let g = class extends a.Component {
        static get hoverClass() {
          return d().hoverParent;
        }
        render() {
          const {
            persona: e,
            animating: t,
            className: r,
            size: i,
            dim: a,
            ...n
          } = this.props;
          let c = "";
          return (
            "medium" == i ? (c = d().Medium) : "large" == i && (c = d().Large),
            (0, s.jsxs)("div", {
              className: (0, m.A)(
                d().SnoozeContainer,
                e.online_state,
                r,
                t && d().animating,
                c,
                a && d().Dim,
              ),
              ...n,
              children: [
                (0, s.jsx)("div", {
                  "data-text": "Z",
                  className: (0, m.A)(d().SnoozeZ, d().Z1),
                  children: "Z",
                }),
                (0, s.jsx)("div", {
                  "data-text": "Z",
                  className: (0, m.A)(d().SnoozeZ, d().Z2),
                  children: "Z",
                }),
                (0, s.jsx)("div", {
                  "data-text": "Z",
                  className: (0, m.A)(d().SnoozeZ, d().Z3),
                  children: "Z",
                }),
              ],
            })
          );
        }
      };
      g = (0, i.Cg)([n.PA], g);
      var B = r(12155),
        y = r(70342),
        M = r.n(y),
        f = r(97232);
      const b = (0, n.PA)((e) => {
        const { persona: t, className: r, ...i } = e;
        if (!t) return null;
        if (!t.is_online) return null;
        const n = t.HasStateFlag(512),
          o = t.HasStateFlag(2048),
          u = 544 == t.m_eGamingDeviceType,
          d = 545 == t.m_eGamingDeviceType,
          g = !u && !d && !o && t.HasStateFlag(1024);
        return (0, s.jsxs)(a.Fragment, {
          children: [
            n &&
              (0, s.jsx)("div", {
                className: (0, m.A)(
                  r,
                  M().PersonaStatusIcon,
                  M().MobilePhoneIcon,
                  (0, l.rO)(t),
                ),
                title: (0, c.we)("#Platform_Hint_Mobile"),
                ...i,
                children: (0, s.jsx)(f.rf, {}),
              }),
            o &&
              (0, s.jsx)("div", {
                className: (0, m.A)(
                  r,
                  M().PersonaStatusIcon,
                  M().VRIcon,
                  (0, l.rO)(t),
                ),
                title: (0, c.we)("#Platform_Hint_VR"),
                ...i,
                children: (0, s.jsx)(B.MUh, {}),
              }),
            g &&
              (0, s.jsx)("div", {
                className: (0, m.A)(
                  r,
                  M().PersonaStatusIcon,
                  M().BigPictureIcon,
                  (0, l.rO)(t),
                ),
                title: (0, c.we)("#Platform_Hint_BigPicture"),
                ...i,
                children: (0, s.jsx)(B.bPr, {}),
              }),
            u &&
              (0, s.jsx)("div", {
                className: (0, m.A)(
                  r,
                  M().PersonaStatusIcon,
                  M().SteamDeckIcon,
                  (0, l.rO)(t),
                ),
                title: (0, c.we)("#Platform_Hint_SteamDeck"),
                ...i,
                children: (0, s.jsx)(B.DQe, {}),
              }),
            d &&
              (0, s.jsx)("div", {
                className: (0, m.A)(
                  r,
                  M().PersonaStatusIcon,
                  M().SteamDeckIcon,
                  (0, l.rO)(t),
                ),
                title: (0, c.we)("#Platform_Hint_LegionGoS"),
                ...i,
                children: (0, s.jsx)(B.DQe, {}),
              }),
          ],
        });
      });
      var _ = r(18828),
        p = r.n(_),
        z = r(78327);
      function w(e) {
        return (0, s.jsxs)(a.Fragment, {
          children: [
            (0, s.jsx)("span", {
              className: p().partyBeaconJoin,
              children: (0, c.we)("#User_WantsToPlay"),
            }),
            " – ",
            e.persona.GetCurrentGameName(),
          ],
        });
      }
      let h = class extends a.Component {
        render() {
          const {
            className: e,
            onContextMenu: t,
            persona: r,
            eFriendRelationship: i,
            bIsSelf: a,
            bParenthesizeNicknames: n,
            strNickname: u,
            bCompactView: d,
            bHideGameName: y,
            bHideEnhancedRichPresenceLabel: M,
            bHideSnooze: f,
            bHideStatus: _,
            renderStatus: h,
            renderRichPresence: j,
            bHidePersona: F,
            bDNDSet: S,
            bHasPartyBeacon: v,
            bHasGamePrivacy: N,
            bNoMask: R,
            bEllipsisName: I,
            ...x
          } = this.props;
          let W = null,
            O = null,
            P = null,
            C = [
              e,
              p().personaNameAndStatusLabel,
              (0, l.rO)(r),
              d && p().compactView,
              R && p().NoMask,
            ];
          v || r.has_public_party_beacon
            ? (O = (0, s.jsx)(w, { persona: r }))
            : (0, o.aP)(i)
              ? ((O = (0, c.we)("#PersonaStateBlocked")), C.push(p().blocked))
              : r.is_ingame
                ? ((O =
                    !r.is_in_nonsteam_game || a || (0, o.S$)(i)
                      ? r.GetCurrentGameName()
                      : (0, c.we)("#PersonaStateInNonSteamGame")),
                  a || F
                    ? a &&
                      r.is_awayOrSnooze &&
                      (P = (0, c.we)("#PersonaStateAway"))
                    : (P = r.GetCurrentGameRichPresence()))
                : r.m_broadcastAccountId &&
                  (O = (0, c.we)("#PersonaStateWatchingBroadcast")),
            O || (O = r.GetLocalizedOnlineStatus()),
            h && (O = h());
          let T = !F && !f;
          !1 === f && (T = !0),
            r.is_awayOrSnooze && T && (W = (0, s.jsx)(g, { persona: r }));
          let L = null;
          t
            ? (L = (0, s.jsx)("div", {
                className: "ContextMenuButton",
                onClick: t,
                children: (0, s.jsx)(B.GB9, {}),
              }))
            : C.push(p().noContextMenu),
            F && C.push(p().hidePersona),
            j && (P = j()),
            (!y && P) || C.push(p().twoLine);
          const G = !r.is_ingame && !_,
            q = !M && P,
            k = O && (!y || !q),
            A = (0, o.ID)(z.TS.LAUNCHER_TYPE);
          let U = u && !n,
            D = U ? u : r.m_strPlayerName,
            H = !F && (k || G) && q;
          return (0, s.jsxs)("div", {
            ...x,
            className: (0, m.A)(...C),
            onContextMenu: t,
            children: [
              (0, s.jsxs)("div", {
                className: (0, m.A)(p().statusAndName, H && p().threeLines),
                children: [
                  (0, s.jsxs)("div", {
                    className: (0, m.A)(p().playerName, I && p().EllipsisName),
                    children: [
                      D || " ",
                      n &&
                        u &&
                        (0, s.jsxs)("span", {
                          className: p().playerNickname,
                          children: ["(", u, ")"],
                        }),
                    ],
                  }),
                  S &&
                    (0, s.jsx)("div", {
                      className: p().DNDContainer,
                      title: (0, c.we)("#User_ToggleDoNotDisturb"),
                      children: (0, s.jsx)(B.Aj0, {}),
                    }),
                  U &&
                    (0, s.jsx)("span", {
                      className: p().playerNicknameBracket,
                      title: (0, c.we)("#isNickname"),
                      children: " *",
                    }),
                  (0, s.jsx)(b, { persona: r }),
                  W,
                  (r.m_bPlayerNamePending || r.m_bAvatarPending) &&
                    A &&
                    (0, s.jsx)("div", {
                      className: p().PendingPersona,
                      title: (0, c.we)("#SteamChina_PendingPersonaName"),
                      children: (0, s.jsx)(B.zD7, {}),
                    }),
                  L,
                ],
              }),
              !F &&
                (0, s.jsxs)("div", {
                  className: p().richPresenceContainer,
                  children: [
                    (k || G) &&
                      (0, s.jsxs)("div", {
                        className: (0, m.A)(
                          p().gameName,
                          H && p().threeLines,
                          p().richPresenceLabel,
                          "no-drag",
                        ),
                        children: [
                          N &&
                            (0, s.jsx)("div", {
                              className: p().gameIsPrivateIcon,
                              title: (0, c.we)("#User_GameInfoHidden"),
                              children: (0, s.jsx)(B.jZl, {}),
                            }),
                          O,
                        ],
                      }),
                    q &&
                      (0, s.jsxs)("div", {
                        className: (0, m.A)(p().richPresenceLabel, "no-drag"),
                        children: [P, " "],
                      }),
                  ],
                }),
            ],
          });
        }
      };
      h = (0, i.Cg)([n.PA], h);
      const j = (0, n.PA)((e) => {
        const {
          persona: t,
          bParenthesizeNicknames: r,
          strNickname: i,
          bIgnorePersonaStatus: a,
          bDisableColoring: n,
          className: c,
          ...o
        } = e;
        let u = i && !r ? i : t.m_strPlayerName;
        return (0, s.jsx)("span", {
          ...o,
          className: (0, m.A)(c, n && p().DisableColoring, !a && (0, l.rO)(t)),
          children: (0, s.jsxs)("span", {
            className: p().playerName,
            children: [
              u || " ",
              r &&
                i &&
                (0, s.jsxs)("span", {
                  className: p().playerNickname,
                  children: ["(", i, ")"],
                }),
            ],
          }),
        });
      });
    },
    26505: (e, t, r) => {
      "use strict";
      r.d(t, {
        M8: () => P,
        d0: () => R,
        Dv: () => I,
        Nd: () => L,
        EW: () => W,
      });
      var i,
        s,
        a = r(68950),
        n = r(23809),
        c = r(75233),
        o = r(80902),
        l = r(56545),
        m = r(17720),
        u = r(80613),
        d = r.n(u),
        g = r(89068);
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      class B extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.bincremental || g.Sg(B.M()),
            u.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  bincremental: { n: 1, br: g.qM.readBool, bw: g.gp.writeBool },
                  friends: { n: 2, c: y, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = g.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class y extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.ulfriendid || g.Sg(y.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = g.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      class M extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.groupid || g.Sg(M.M()),
            u.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  groupid: { n: 1, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  name: { n: 2, br: g.qM.readString, bw: g.gp.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: g.qM.readUint32,
                    pbr: g.qM.readPackedUint32,
                    bw: g.gp.writeRepeatedUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = g.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class f extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Request";
        }
      }
      class b extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.categories || g.Sg(b.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { categories: { n: 1, c: M, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = g.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class _ extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.accountid || g.Sg(_.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  accountid: {
                    n: 1,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  clanid: { n: 2, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = g.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class p extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Request";
        }
      }
      class z extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.favorites || g.Sg(z.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { favorites: { n: 1, c: _, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = g.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class w extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.favorites || g.Sg(w.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { favorites: { n: 1, c: _, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = g.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Request";
        }
      }
      class h extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class j extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.favorites || g.Sg(j.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { favorites: { n: 1, c: _, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = g.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class F extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class S extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.friendslist || g.Sg(S.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = { proto: S, fields: { friendslist: { n: 1, c: B } } }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = g.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", (0, l.I8)(f, t), b, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, l.I8)(F, t),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", (0, l.I8)(p, t), z, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", (0, l.I8)(w, t), h, {
              ePrivilege: 1,
            });
          });
      })(i || (i = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: j,
          };
        })(s || (s = {}));
      var v = r(37735),
        N = r(14336);
      function R(e) {
        const t = (0, n.KV)(),
          r = (0, a.LH)(),
          i = (0, N.tb)(),
          s = (0, c.jE)();
        let l = { loadNicknames: !1, loadFavorites: !1, ...e };
        return (0, o.I)({
          queryKey: ["FriendsList", r, l],
          queryFn: async () => {
            const e = s.fetchQuery(x(t, r)),
              a = l.loadNicknames ? s.fetchQuery(O(t, r)) : void 0,
              n = l.loadFavorites ? s.fetchQuery(C(t, r)) : void 0,
              c = await e,
              o = new Map(c.map((e) => [e, s.fetchQuery((0, N.mK)(i, t, e))]));
            let u;
            if (a) {
              const e = (await a).nicknames;
              u = new Map(e.map((e) => [e.accountid, e.nickname]));
            }
            const d = new Set(await (n ?? Promise.resolve([])));
            return (
              await Promise.all(
                c.map(async (e) => {
                  const t = new m.b(e).GetAccountID(),
                    r = { accountid: t, persona: await o.get(e) };
                  return (
                    d.has(t) && (r.is_favorite = !0),
                    u && u.has(t) && (r.nickname = u.get(t)),
                    r
                  );
                }),
              )
            ).filter((e) => !!e.persona);
          },
          staleTime: 12e4,
        });
      }
      function I() {
        const e = (0, n.KV)(),
          t = (0, a.LH)();
        return (0, o.I)(x(e, t));
      }
      function x(e, t) {
        return {
          queryKey: ["GetFriendsList", t],
          queryFn: async () => {
            const t = l.w.Init(F),
              r = await i.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new m.b(e.ulfriendid());
                return (
                  (3 == e.efriendrelationship() ||
                    6 == e.efriendrelationship()) &&
                  t.BIsIndividualAccount()
                );
              })
              .map((e) => e.ulfriendid());
          },
        };
      }
      function W() {
        const e = (0, n.KV)(),
          t = (0, a.LH)();
        return (0, o.I)({
          queryKey: ["GetIgnoredAccounts", t],
          queryFn: async () => {
            const t = l.w.Init(F),
              r = await i.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new m.b(e.ulfriendid());
                return (
                  (5 == e.efriendrelationship() ||
                    6 == e.efriendrelationship()) &&
                  t.BIsIndividualAccount()
                );
              })
              .map((e) => e.ulfriendid());
          },
        });
      }
      function O(e, t) {
        return {
          queryKey: ["GetFriendNicknameList", t],
          queryFn: async () => {
            const t = l.w.Init(v.dN);
            return (await v.xt.GetNicknameList(e, t)).Body().toObject();
          },
        };
      }
      function P(e = {}) {
        return (function (e = {}) {
          const t = (0, n.KV)(),
            r = (0, a.LH)();
          return (0, o.I)({ ...O(t, r), ...e });
        })({
          ...e,
          select: (e) =>
            new Map(e.nicknames.map((e) => [e.accountid, e.nickname])),
        });
      }
      function C(e, t) {
        return {
          queryKey: ["GetFriendFavorites", t],
          queryFn: async () => {
            const t = l.w.Init(p),
              r = (await i.GetFavorites(e, t)).Body().toObject();
            return r.favorites
              ?.filter((e) => e.accountid)
              .map((e) => e.accountid);
          },
        };
      }
      async function T(e, t) {
        const r = l.w.Init(v.tl);
        r.Body().set_appid(t);
        const i = await v.xt.GetFriendsGameplayInfo(e, r);
        return (
          i.BSuccess() ||
            console.warn(`Failed to get gameplay info: ${i.GetEResult()}`),
          i.Body().toObject()
        );
      }
      function L(e, t = {}) {
        const r = (0, n.KV)(),
          i = (0, a.LH)();
        return (0, o.I)({
          queryKey: [`GameplayInfo_${i}_${e}`],
          queryFn: async () => await T(r, e),
          ...t,
        });
      }
    },
    97232: (e, t, r) => {
      "use strict";
      r.d(t, { Jl: () => c, nl: () => l, rf: () => o });
      var i = r(7850),
        s = r(12155),
        a = r(4869),
        n = r(78327);
      function c(e) {
        return (0, n.Qn)()
          ? (0, i.jsx)(a.MGO, { ...e })
          : (0, i.jsx)(s.Jlk, { ...e });
      }
      function o() {
        return (0, i.jsx)(s.rfv, {});
      }
      function l() {
        return (0, n.Qn)() ? (0, i.jsx)(a.nl, {}) : (0, i.jsx)(s.jZW, {});
      }
    },
  },
]);
