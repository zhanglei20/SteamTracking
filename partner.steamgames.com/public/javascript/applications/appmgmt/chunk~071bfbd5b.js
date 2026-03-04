/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6627],
  {
    47911: (e, t, a) => {
      a.d(t, { Z: () => i });
      var n = a(42475);
      const r = {};
      (r.arabic = () => a.e(3710).then(a.t.bind(a, 8476, 19))),
        (r.brazilian = () => a.e(6562).then(a.t.bind(a, 99574, 19))),
        (r.bulgarian = () => a.e(1449).then(a.t.bind(a, 43789, 19))),
        (r.czech = () => a.e(7591).then(a.t.bind(a, 815, 19))),
        (r.danish = () => a.e(6523).then(a.t.bind(a, 4289, 19))),
        (r.dutch = () => a.e(5110).then(a.t.bind(a, 54978, 19))),
        (r.english = () => a.e(2256).then(a.t.bind(a, 33800, 19))),
        (r.finnish = () => a.e(6031).then(a.t.bind(a, 3907, 19))),
        (r.french = () => a.e(5018).then(a.t.bind(a, 45040, 19))),
        (r.german = () => a.e(6208).then(a.t.bind(a, 94750, 19))),
        (r.greek = () => a.e(9712).then(a.t.bind(a, 69668, 19))),
        (r.hungarian = () => a.e(6165).then(a.t.bind(a, 45233, 19))),
        (r.indonesian = () => a.e(8306).then(a.t.bind(a, 90200, 19))),
        (r.italian = () => a.e(1531).then(a.t.bind(a, 31864, 19))),
        (r.japanese = () => a.e(1973).then(a.t.bind(a, 7263, 19))),
        (r.koreana = () => a.e(7539).then(a.t.bind(a, 30295, 19))),
        (r.latam = () => a.e(2435).then(a.t.bind(a, 50559, 19))),
        (r.norwegian = () => a.e(2320).then(a.t.bind(a, 86512, 19))),
        (r.polish = () => a.e(8967).then(a.t.bind(a, 52889, 19))),
        (r.portuguese = () => a.e(6239).then(a.t.bind(a, 72269, 19))),
        (r.romanian = () => a.e(2749).then(a.t.bind(a, 34419, 19))),
        (r.russian = () => a.e(8025).then(a.t.bind(a, 75777, 19))),
        (r.sc_schinese = () => a.e(9027).then(a.t.bind(a, 23723, 19))),
        (r.schinese = () => a.e(7786).then(a.t.bind(a, 85436, 19))),
        (r.spanish = () => a.e(2632).then(a.t.bind(a, 76736, 19))),
        (r.swedish = () => a.e(1225).then(a.t.bind(a, 94625, 19))),
        (r.tchinese = () => a.e(5241).then(a.t.bind(a, 15191, 19))),
        (r.thai = () => a.e(976).then(a.t.bind(a, 4230, 19))),
        (r.turkish = () => a.e(9152).then(a.t.bind(a, 34792, 19))),
        (r.ukrainian = () => a.e(2954).then(a.t.bind(a, 27246, 19))),
        (r.vietnamese = () => a.e(6149).then(a.t.bind(a, 59863, 19)));
      const i = (0, n.l)(async function (e) {
        if (r[e]) return r[e]();
      });
    },
    88241: (e, t, a) => {
      a.d(t, { Z: () => c, dV: () => _.d, rO: () => u });
      var n = a(34629),
        r = a(14947),
        i = a(31561),
        s = a(51006),
        o = a(61859),
        m = a(78327),
        _ = a(85044);
      function u(e) {
        let t = "offline";
        return (
          e &&
            (e.is_ingame
              ? (t = "ingame")
              : e.m_broadcastAccountId
                ? (t = "watchingbroadcast")
                : e.is_online && (t = "online"),
            e.is_awayOrSnooze && (t += " awayOrSnooze")),
          t
        );
      }
      class c {
        m_steamid;
        m_bInitialized = !1;
        m_ePersonaState = 0;
        m_unGamePlayedAppID = 0;
        m_gameid = "0";
        m_unPersonaStateFlags = 0;
        m_strPlayerName = "";
        m_strAvatarHash = _.d;
        m_strAccountName = "";
        m_rtLastSeenOnline = 0;
        m_strGameExtraInfo = "";
        m_unGameServerIP = 0;
        m_unGameServerPort = 0;
        m_game_lobby_id = "";
        m_bPlayerNamePending = !1;
        m_bAvatarPending = !1;
        m_broadcastId = void 0;
        m_broadcastAccountId = void 0;
        m_broadcastAppId = void 0;
        m_broadcastViewerCount = void 0;
        m_strBroadcastTitle = void 0;
        m_bCommunityBanned = void 0;
        m_eGamingDeviceType = 0;
        m_mapRichPresence = r.sH.map();
        m_bNameInitialized = !1;
        m_bStatusInitialized = !1;
        m_strProfileURL = void 0;
        constructor(e) {
          (0, r.Gn)(this), (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            this.m_mapRichPresence.clear(),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0),
            (this.m_eGamingDeviceType = 0);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        GetSteamIDAsString() {
          return this.m_steamid.ConvertTo64BitString();
        }
        get is_online() {
          return 0 != this.m_ePersonaState && 7 != this.m_ePersonaState;
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          return !!(2 & (this.m_unPersonaStateFlags ?? 0));
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return null != this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return 3 == this.m_ePersonaState || 4 == this.m_ePersonaState;
        }
        HasStateFlag(e) {
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & e);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          0 != this.m_ePersonaState && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(4);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
              ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            s.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
        }
        HasCurrentGameRichPresence() {
          return this.m_mapRichPresence.has("steam_display");
        }
        HasRichPresenceForViewGameInfo() {
          return !!(
            this.m_mapRichPresence.has("status") ||
            this.m_mapRichPresence.has("connect") ||
            this.m_mapRichPresence.has("connect_private")
          );
        }
        GetCurrentGameRichPresence() {
          if (this.HasCurrentGameRichPresence()) {
            let e = s.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return (0, o.we)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetCurrentGameStatus() {
          return (
            this.GetCurrentGameRichPresence() ||
            this.m_mapRichPresence.get("status") ||
            ""
          );
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const a = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.we)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!m.TS.IN_MOBILE || e <= 60) && (0, i.tB)(e);
          let t = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.we)("#PersonaStateLastSeen_JustNow")
            : (0, o.we)("#PersonaStateLastSeen", (0, o.Hq)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return (0, o.we)("#PersonaStateOnline");
            case 2:
              return (0, o.we)("#PersonaStateBusy");
            case 3:
              return (0, o.we)("#PersonaStateAway");
            case 4:
              return (0, o.we)("#PersonaStateSnooze");
            case 5:
              return (0, o.we)("#PersonaStateLookingToTrade");
            case 6:
              return (0, o.we)("#PersonaStateLookingToPlay");
            default:
              return "";
          }
        }
        get has_public_party_beacon() {
          return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
        }
        get player_group() {
          return this.m_mapRichPresence.has("steam_player_group")
            ? this.m_mapRichPresence.get("steam_player_group")
            : "";
        }
        get player_group_size() {
          return this.m_mapRichPresence.has("steam_player_group_size")
            ? Number.parseInt(
                this.m_mapRichPresence.get("steam_player_group_size"),
              )
            : 0;
        }
        get online_state() {
          return this.is_online
            ? this.is_ingame
              ? "in-game"
              : this.m_broadcastAccountId
                ? "watchingbroadcast"
                : "online"
            : "offline";
        }
        BHasAvatarSet() {
          return this.m_strAvatarHash != _.d;
        }
        get avatar_url() {
          return (0, _.t)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, _.t)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, _.t)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, a) {
          if (t.has_public_party_beacon) {
            if (!a.has_public_party_beacon) return -1;
          } else {
            if (a.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!a.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!a.is_awayOrSnooze) return 1;
              } else if (a.is_awayOrSnooze) return -1;
            } else if (a.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!a.is_online) return -1;
          } else if (a.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!a.is_awayOrSnooze) return 1;
            } else if (a.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${m.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${m.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, n.Cg)([r.sH], c.prototype, "m_bInitialized", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_ePersonaState", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_unGamePlayedAppID", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_gameid", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_unPersonaStateFlags", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_strPlayerName", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_strAvatarHash", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_strAccountName", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_rtLastSeenOnline", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_strGameExtraInfo", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_unGameServerIP", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_unGameServerPort", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_game_lobby_id", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_bPlayerNamePending", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_bAvatarPending", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_broadcastId", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_broadcastAccountId", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_broadcastAppId", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_broadcastViewerCount", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_strBroadcastTitle", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_bCommunityBanned", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_eGamingDeviceType", void 0),
        (0, n.Cg)([r.sH], c.prototype, "m_bNameInitialized", void 0);
    },
    14336: (e, t, a) => {
      a.d(t, { z0: () => y, DW: () => b, js: () => p, hW: () => g });
      var n = a(90626),
        r = a(20194),
        i = a(54806),
        s = a(23809),
        o = a(44654),
        m = a(88241),
        _ = a(17720),
        u = a(7860),
        c = a(37735),
        d = a(58632),
        h = a.n(d);
      function l(e, t) {
        return new (h())(
          async (t) => {
            const a = [...t],
              n = await c.xt.GetPlayerLinkDetails(e, { steamids: a }),
              r = new Map();
            return (
              n
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  r.set(t.public_data.steamid, t);
                }),
              a.map((e) => r.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function p(e) {
        const t = (0, s.KV)(),
          a = n.useContext(P);
        return (0, r.I)(f(a, t, e));
      }
      function g(e) {
        const t = n.useRef(void 0),
          a = p(e);
        return a.data
          ? a
          : (t.current ||
              (t.current = new m.Z(
                "string" == typeof e ? new _.b(e) : _.b.InitFromAccountID(e),
              )),
            { ...a, data: t.current });
      }
      function b(e) {
        const t = (0, s.KV)(),
          a = n.useContext(P);
        return (0, i.E)({ queries: e.map((e) => f(a, t, e)) });
      }
      function y(e) {
        return u.L.getQueryData(["PlayerSummary", e]);
      }
      const P = n.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return (v ??= l(e));
          })(t).load(_.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let a = new m.Z(e);
            const n = t?.public_data,
              r = t?.private_data;
            (a.m_bInitialized = !!t),
              (a.m_ePersonaState = r?.persona_state ?? 0),
              (a.m_strAvatarHash = n?.sha_digest_avatar
                ? (0, o.Kx)(n.sha_digest_avatar)
                : m.dV),
              (a.m_strPlayerName = n?.persona_name ?? e.ConvertTo64BitString()),
              (a.m_strAccountName = r?.account_name),
              r?.persona_state_flags &&
                (a.m_unPersonaStateFlags = r?.persona_state_flags);
            r?.game_id && (a.m_gameid = r?.game_id);
            r?.game_server_ip_address &&
              (a.m_unGameServerIP = r?.game_server_ip_address);
            r?.lobby_steam_id && (a.m_game_lobby_id = r?.lobby_steam_id);
            r?.game_extra_info && (a.m_strGameExtraInfo = r?.game_extra_info);
            n?.profile_url && (a.m_strProfileURL = n.profile_url);
            return a;
          })(_.b.InitFromAccountID(e), a);
        },
      });
      function f(e, t, a) {
        const n = "string" == typeof a ? new _.b(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", n],
          queryFn: () => e.loadPersonaState(n, t),
          enabled: !!n,
        };
      }
      let v;
    },
  },
]);
