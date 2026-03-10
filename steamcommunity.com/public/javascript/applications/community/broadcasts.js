/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2079],
  {
    17337: (e) => {
      e.exports = {
        SubSection: "_3Ac4zk8HfCBpJcfDHwJwfg",
        Header: "_2vrXB5mprkP7EUv5iR8us3",
        AppSummaryWidgetCtn: "_35ozIX3OQwwAVHZP2bRufO",
      };
    },
    98371: (e) => {
      e.exports = {
        BroadcastPage: "_3IVNUsV5MmxvVS3iAXgvah",
        ChatAndVideoContainer: "_3T2XhjHO-dGHFcW8wuOjPy",
        PlayerContainer: "_1YtbIC-J77gSgwSKsT5fi6",
        ControlCtn: "_3NMuAFkwI2iBEQ0Xc65_vU",
        ControlsTitle: "_2gpZbx7qR5ehVb4ZyjSePO",
        TitleInput: "_2hXPK8xeIJv-TaWiO-axvZ",
        Options: "_1zp3YgxRk_19JEyx47Y3i0",
        StopCtn: "_3swF91W-Cz8khVEz54YOq_",
        GameInfoCtn: "_4stlZwCqqseNCH-QLOQER",
        GameInfo: "_3LaZv8YHg2VjZ_HhcZ7bpk",
        GameAboutTitleCtn: "_3CMlOE34UtaORvJyHk5EGa",
        GameAboutTitle: "_2RJzuglNdpYTXg51KXQnOn",
        RelatedEvents: "_2RjLr7PFg6CZiul6cV6z_I",
        DebugCtn: "FKW0z5NevNCuD5xXlFgY5",
      };
    },
    46699: (e) => {
      e.exports = {
        ProfileCtn: "_qonROBlfDEqgHmEnTXf3",
        GameAndOptionsCtn: "Qo4I3mYF0bFBK2epQsXG2",
        GameAndViewersCtn: "XQo2J9u8ebB9kBJWDwPNW",
        BroadcastTitleCtn: "_1R6Q5E3iChq6o6-dvC9wVB",
        StreamDetailsCtn: "_11FAt4TX08YfslIrMg2DVM",
        ViewerCount: "_2skQ1ea4HbEWoM-0eRZQJ2",
        BroadcastUserActionsCtn: "_1MeMBOgHJbg6D0H83lpxWS",
        GameCapsule: "_1oJMxM2S4G0iIY4g7hHqVh",
      };
    },
    30593: (e) => {
      e.exports = { AdminControls: "_3KL0bXxikaWzpb1AY27eH0" };
    },
    16971: (e) => {
      e.exports = {
        AvatarCtn: "_3n3n08bcnphB_5qaSwJDyQ",
        NameAndProps: "_3PljhCwFW7qZ0qu22k7frk",
      };
    },
    35261: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => xe });
      var a = s(7850),
        r = (s(64641), s(90626)),
        n = s(92757),
        i = s(97058),
        o = s(41735),
        d = s.n(o),
        c = s(34629),
        l = s(14947),
        u = s(17720),
        m = s(54728),
        h = s(68797),
        _ = s(78327);
      class p {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null),
            (0, l.Gn)(this);
        }
        GetBroadcasterSteamID() {
          return this.m_steamid;
        }
        GetDebugInfo() {
          return this.m_curDebugInfo;
        }
        BShowOnlyVideo() {
          return this.m_bShowOnlyVideo;
        }
        BShowOnlyChat() {
          return this.m_bShowOnlyChat;
        }
        BShowInIframe() {
          return this.m_bShowOnlyChat || this.m_bShowOnlyVideo;
        }
        async LoadBroadcastDebugInfo(e) {
          let t = _.TS.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
            s = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              origin: self.origin,
            };
          try {
            let a = await d().get(t, {
              params: s,
              withCredentials: !0,
              cancelToken: e ? e.token : void 0,
            });
            if (e && e.token.reason) return null;
            if (a && 200 == a.status && a.data && 1 == a.data.success)
              return (this.m_curDebugInfo = a.data), this.m_curDebugInfo;
          } catch (e) {
            let t = (0, h.H)(e);
            console.error("LoadBroadcastDebugInfo: Failed " + t.strErrorMsg, t);
          }
          return null;
        }
        async UpdateBroadcastSettings(e, t, s) {
          let a = _.TS.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
            r = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              matchid: e,
              title: t,
              sessionid: _.TS.SESSIONID,
            };
          try {
            let e = await d().get(a, {
              params: r,
              withCredentials: !0,
              cancelToken: s ? s.token : void 0,
            });
            if (s && s.token.reason) return !1;
            if (e && 200 == e.status && e.data && 1 == e.data.success) {
              const e = m.es.GetOrCreateBroadcastInfo(
                this.m_steamid.ConvertTo64BitString(),
              );
              return (
                e &&
                  (0, l.h5)(() => {
                    e.m_strTitle = t;
                  }),
                !0
              );
            }
          } catch (e) {
            let t = (0, h.H)(e);
            console.error(
              "UpdateBroadcastSettings: Failed " + t.strErrorMsg,
              t,
            );
          }
          return !1;
        }
        async StopBroadcast(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            s = m.es.GetBroadcast(t);
          let a = _.TS.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
            r = {
              steamid: t,
              broadcastid: s ? s.m_ulBroadcastID : null,
              sessionid: _.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "StopBroadcast",
            a,
            r,
            e,
          );
        }
        async SetBroadcasterRestrictions(e, t, s) {
          const a = this.m_steamid.ConvertTo64BitString(),
            r = m.es.GetBroadcast(a);
          let n = _.TS.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
            i = {
              steamid: a,
              broadcastid: r ? r.m_ulBroadcastID : null,
              type: e,
              days: t,
              sessionid: _.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetBroadcasterRestrictions",
            n,
            i,
            s,
          );
        }
        async SetUnBannable(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            s = m.es.GetBroadcast(t);
          let a = _.TS.COMMUNITY_BASE_URL + "broadcast/unban",
            r = {
              steamid: t,
              broadcastid: s ? s.m_ulBroadcastID : null,
              sessionid: _.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetUnBannable",
            a,
            r,
            e,
          );
        }
        async SendUserReportOnBroadcast(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            s = m.es.GetBroadcast(t);
          let a = _.TS.COMMUNITY_BASE_URL + "broadcast/report",
            r = {
              steamid: t,
              broadcastid: s ? s.m_ulBroadcastID : null,
              description: e,
              sessionid: _.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SendUserReportOnBroadcast",
            a,
            r,
            null,
          );
        }
        async InternalSendSimpleGetRequest(e, t, s, a) {
          try {
            let e = await d().get(t, {
              params: s,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
            if (a && a.token.reason) return !1;
            if (e && 200 == e.status && e.data && 1 == e.data.success)
              return !0;
          } catch (t) {
            let s = (0, h.H)(t);
            console.error(
              `CCommunityBroadcastStore:${e}: Failed ` + s.strErrorMsg,
              s,
            );
          }
          return !1;
        }
        static Get() {
          return (
            p.s_Singleton || ((p.s_Singleton = new p()), p.s_Singleton.Init()),
            p.s_Singleton
          );
        }
        Init() {
          let e = (0, _.Tc)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new u.b(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      (0, c.Cg)([l.sH], p.prototype, "m_curDebugInfo", void 0);
      var S = s(75844),
        v = s(39606),
        x = s(72224),
        j = s(53120),
        g = s.n(j),
        B = s(34010),
        C = s(4796),
        b = s(68255),
        f = s(84811),
        w = s(35685),
        I = s(95034),
        y = s(95695),
        D = s.n(y),
        T = s(41399),
        N = s(9154),
        A = s(738),
        O = s(52038),
        k = s(56011),
        G = s(61859),
        R = s(14932),
        E = s(76684),
        U = s(82227),
        M = s(17337);
      const H = (e) => {
          const t = (0, r.useRef)(null),
            [s, n] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              [],
            ),
            (0, a.jsx)(f.tH, {
              children: (0, a.jsxs)("div", {
                className: (0, O.A)(M.Container),
                children: [
                  (0, a.jsx)("div", {
                    className: M.Controls,
                    children: (0, a.jsx)(b.$n, {
                      onClick: async () => {
                        t.current && t.current();
                        const e = d().CancelToken.source();
                        (t.current = e.cancel),
                          n(await p.Get().LoadBroadcastDebugInfo(e));
                      },
                      children: "(VO) Load Debug Info",
                    }),
                  }),
                  (0, a.jsx)(f.tH, { children: (0, a.jsx)(P, { info: s }) }),
                ],
              }),
            })
          );
        },
        P = (e) => {
          var t;
          const { info: s } = e,
            [n, i] = (0, r.useState)(!1);
          if (!s) return null;
          const o = p.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            d = m.es.GetBroadcast(o);
          return (0, a.jsxs)("div", {
            className: M.DisplaySection,
            children: [
              Boolean(s.last_error_result && 1 != s.last_error_result) &&
                (0, a.jsxs)("div", {
                  className: M.SubSection,
                  children: [
                    (0, a.jsx)("div", {
                      className: M.Header,
                      children: "Error",
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        "EResult: ",
                        s.last_error_result,
                        ", occurred ",
                        s.last_error_time,
                        " - ",
                        (0, a.jsx)(E.K4, {
                          dateAndTime: s.last_error_time,
                          bSingleLine: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              (0, a.jsxs)("div", {
                className: M.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: M.Header,
                    children: "Broadcast Setup",
                  }),
                  (0, a.jsxs)("div", {
                    children: ["Broadcaster: ", s.steam_id, ", SteamID: ", o],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Directory Server: ",
                      s.directory_server,
                      ", SessionID: ",
                      s.broadcast_id,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Ingester Server: ",
                      s.relay_server,
                      ", UploadID: ",
                      s.upload_id,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["Origin Server: ", s.origin_server],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Chat Server: ",
                      s.chat_server,
                      ", chat_id: ",
                      s.chat_id,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["Transcoder Server : ", s.transcode_server],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: M.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: M.Header,
                    children: "Ingester Info",
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Client: ",
                      s.remote_address,
                      " ",
                      Boolean(s.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Video Config: ",
                      s.upload_height,
                      "x",
                      s.upload_width,
                      "@",
                      s.upload_fps,
                      ", ",
                      s.upload_bandwidth,
                      " kbps ",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Audio Config: ",
                      s.upload_audio_channels,
                      "x",
                      s.upload_audio_samplerate,
                      "Hz, ",
                      s.upload_audio_bitrate / 1e3,
                      " kbps ",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Upload Stats: ",
                      s.upload_avg_fps,
                      " FPS, ",
                      s.upload_avg_bandwidth,
                      " kbps, ",
                      s.upload_avg_key_interval,
                      " msec key frame interval",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Upload Totals: ",
                      s.upload_total_frames_received,
                      " video frames,  ",
                      Math.round(
                        (s.upload_current_video_pts -
                          s.upload_first_video_pts) /
                          s.upload_video_timescale,
                      ),
                      " seconds ( ",
                      (0, U.dm)(s.upload_total_bytes_uploaded || 0, 1),
                      " ) ",
                    ],
                  }),
                ],
              }),
              Boolean(s.transcode_server) &&
                (0, a.jsxs)("div", {
                  className: M.SubSection,
                  children: [
                    (0, a.jsx)("div", {
                      className: M.Header,
                      children: "Transcoder Info",
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        "Decoder ( ",
                        s.upload_height,
                        "x",
                        s.upload_width,
                        "@",
                        s.upload_fps,
                        ", ",
                        s.upload_bandwidth,
                        " kbps ) :  ",
                        s.transcoder_frames_to_decode,
                        " queued,  ",
                        s.transcoder_frames_total_decoded,
                        " decoded",
                      ],
                    }),
                    s.transcoder_streams.map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          children: [
                            "Encoder ",
                            e.representation_id,
                            " ( ",
                            e.height,
                            "x",
                            e.width,
                            "@",
                            e.fps,
                            " ",
                            e.bitrate,
                            " kbps ) : ",
                            e.frames_to_encode,
                            " queued, ",
                            e.frames_total_encoded,
                            " encoded",
                          ],
                        },
                        e.representation_id,
                      ),
                    ),
                  ],
                }),
              (0, a.jsxs)("div", {
                className: M.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: M.Header,
                    children: "Origin Info",
                  }),
                  null === (t = null == s ? void 0 : s.origin_video_streams) ||
                  void 0 === t
                    ? void 0
                    : t.map((e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            children: [
                              "Video Stream ",
                              e.representation_id,
                              " ( ",
                              e.height,
                              "x",
                              e.width,
                              "@",
                              e.fps,
                              " ",
                              e.bitrate,
                              " kbps ) :  ",
                              e.num_frames_queued,
                              " frames queued,  ",
                              e.num_segments_received,
                              " segments received,  ",
                              2 * e.num_segments_cached,
                              " seconds cached ( ",
                              (0, U.dm)(e.memory_used, 2),
                              " )",
                            ],
                          },
                          e.representation_id,
                        ),
                      ),
                  "Audio Stream ",
                  s.origin_audio_stream.representation_id,
                  " ( ",
                  s.upload_audio_channels,
                  "x",
                  s.upload_audio_samplerate,
                  "Hz, ",
                  s.upload_audio_bitrate / 1e3,
                  " kbps ) :  ",
                  s.origin_audio_stream.num_frames_queued,
                  " frames queued,  ",
                  s.origin_audio_stream.num_segments_received,
                  " segments received,  ",
                  2 * s.origin_audio_stream.num_segments_cached,
                  " seconds cached ( ",
                  (0, U.dm)(s.origin_audio_stream.memory_used, 2),
                  " )",
                ],
              }),
              (0, a.jsxs)("div", {
                className: M.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: M.Header,
                    children: "Viewer Info",
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Viewers: ",
                      s.current_viewers,
                      " current (",
                      s.current_anon_viewers,
                      " anonymous), ",
                      s.total_unique_viewers,
                      " total unique, ",
                      s.max_concurrent_viewers,
                      " max concurrent",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Average time watched: ",
                      s.average_watch_duration,
                      " seconds",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Last Minute: ",
                      s.added_viewers_last_minute,
                      " watch requests, ",
                      s.rejected_viewers_last_minute,
                      " rejected",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["Restrictions: ", s.restriction],
                  }),
                  (0, a.jsx)("div", { children: s.extra_viewer_info }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: M.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: M.Header,
                    children: "Settings",
                  }),
                  (0, a.jsxs)("div", {
                    children: ["is replay? ", s.is_replay],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "is replay local file? ",
                      s.is_replay_local_file,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["is replay clip? ", s.is_replay_clip],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["is capturing VOD? ", s.is_capturing_vod],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "is white listed for store streaming? ",
                      s.is_whitelisted,
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: M.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: M.Header,
                    children: "App Info",
                  }),
                  (0, a.jsxs)("div", { children: ["appid: ", s.app_id] }),
                  (0, a.jsxs)("div", { children: ["app name: ", s.app_name] }),
                  (0, a.jsxs)("div", {
                    children: ["broadcast title: ", s.title],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["thumbnail: ", s.thumbnail_url],
                  }),
                  Boolean(s.thumbnail_url) &&
                    (0, a.jsx)("img", { src: s.thumbnail_url }),
                  Boolean(s.app_id && s.app_id > 0) &&
                    (0, a.jsx)("div", {
                      className: M.AppSummaryWidgetCtn,
                      children: (0, a.jsx)(T.p, {
                        id: s.app_id,
                        type: "game",
                        bPreferAssetWithoutOverride: !1,
                      }),
                    }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: M.SubSection,
                children: [
                  (0, a.jsx)("div", {
                    className: M.Header,
                    children: "Manifest Information",
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      "Heartbeat Interval: ",
                      d.m_data.heartbeat_interval,
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["DASH MPEG Url: ", d.m_data.url],
                  }),
                  (0, a.jsxs)("div", {
                    children: ["HLS Url: ", d.m_data.hls_url],
                  }),
                ],
              }),
              (0, a.jsx)(b.$n, {
                onClick: () => i(!n),
                children: "Toggle Raw Data",
              }),
              Boolean(n) &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: M.SubSection,
                      children: (0, a.jsx)(R.G, { data: s }),
                    }),
                    (0, a.jsx)("div", {
                      className: M.SubSection,
                      children: (0, a.jsx)(R.G, {
                        data: (null == d ? void 0 : d.m_data) || "",
                      }),
                    }),
                  ],
                }),
            ],
          });
        };
      var V = s(98371),
        L = s(1035),
        q = s(41471),
        F = s(16971);
      const Y = (e) => {
        const t = e.steamid.GetAccountID(),
          { data: s } = (0, q.hW)(t);
        return (0, a.jsxs)("div", {
          className: F.AvatarCtn,
          children: [
            (0, a.jsx)("a", {
              href: s.GetCommunityProfileURL(),
              "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
              children: (0, a.jsx)(L.i8, {
                persona: s,
                size: e.size,
                statusPosition: "bottom",
              }),
            }),
            (0, a.jsxs)("div", {
              className: F.NameAndProps,
              children: [
                Boolean(e.bShowName) &&
                  (0, a.jsx)("a", {
                    href: s.GetCommunityProfileURL(),
                    "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                    children: s.m_strProfileURL,
                  }),
                e.children,
              ],
            }),
          ],
        });
      };
      var X = s(65946),
        W = s(55263),
        $ = s(82477),
        z = s(12155),
        K = s(51272),
        Q = s(61336),
        J = s(46699),
        Z = s(32754),
        ee = s(6083);
      function te(e) {
        const { broadcasterSteamID: t } = e,
          s = t.ConvertTo64BitString(),
          [r, n] = (0, X.q3)(() => {
            const e = m.es.GetOrCreateBroadcastInfo(s);
            let t = e.m_nAppID != m.fO ? e.m_nAppID : 0;
            return [e.m_nViewerCount, t];
          }),
          [i] = (0, W.t7)(n, { include_assets: !0 });
        let o = null == i ? void 0 : i.GetAssets().GetMainCapsuleURL(),
          d = o && o.length > 0;
        return (0, a.jsx)(f.tH, {
          children: (0, a.jsxs)("div", {
            className: J.ProfileCtn,
            children: [
              d &&
                (0, a.jsx)("a", {
                  className: J.GameCapsule,
                  href: (0, Q.k2)(
                    (null == i ? void 0 : i.GetStorePageURL()) ||
                      _.TS.STORE_BASE_URL + "app/" + n,
                  ),
                  children: (0, a.jsx)("img", { src: o }),
                }),
              (0, a.jsxs)("div", {
                className: J.StreamDetailsCtn,
                children: [
                  (0, a.jsxs)("div", {
                    className: J.GameAndOptionsCtn,
                    children: [
                      (0, a.jsxs)("div", {
                        className: J.GameAndViewersCtn,
                        children: [
                          (0, a.jsx)(se, { broadcasterSteamID: t }),
                          (0, a.jsx)("div", {
                            className: J.ViewerCount,
                            children: (0, G.Yp)(
                              "#Broadcast_ViewerCount",
                              (0, ee.D)(r),
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)(ae, { broadcasterSteamID: t }),
                    ],
                  }),
                  (0, a.jsx)(Y, { steamid: t, size: "Medium", bShowName: !0 }),
                ],
              }),
            ],
          }),
        });
      }
      const se = (0, S.PA)((e) => {
          const { broadcasterSteamID: t } = e,
            s = t.ConvertTo64BitString(),
            [r, n] = (0, X.q3)(() => {
              const e = m.es.GetOrCreateBroadcastInfo(s);
              let t = e.m_nAppID != m.fO ? e.m_nAppID : 0;
              return [e.m_strAppTitle, t];
            }),
            [i] = (0, W.t7)(n, { include_assets: !0 });
          return (0, a.jsxs)("div", {
            className: J.BroadcastTitleCtn,
            children: [
              (0, G.we)("#Broadcast_Playing"),
              (0, a.jsx)("a", {
                href: (0, Q.k2)(
                  (null == i ? void 0 : i.GetStorePageURL()) ||
                    _.TS.STORE_BASE_URL + "app/" + n,
                ),
                children: Boolean(r) ? r : null == i ? void 0 : i.GetName(),
              }),
              Boolean((null == r ? void 0 : r.length) > 0) &&
                (0, a.jsxs)("span", { children: [" - ", r] }),
            ],
          });
        }),
        ae = (0, S.PA)((e) => {
          const { broadcasterSteamID: t } = e;
          t.ConvertTo64BitString();
          return (0, a.jsxs)("div", {
            className: J.BroadcastUserActionsCtn,
            children: [
              Boolean(
                _.iA.steamid != e.broadcasterSteamID.ConvertTo64BitString(),
              ) &&
                (0, a.jsx)(b.$n, {
                  onClick: (e) => {
                    _.iA.logged_in
                      ? (0, A.pg)(
                          (0, a.jsx)(re, { broadcasterSteamID: t }),
                          (0, k.uX)(e),
                        )
                      : (0, A.pg)(
                          (0, a.jsx)(N.o0, {
                            strTitle: (0, G.we)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, G.we)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, G.we)("#MobileLogin_SignIn"),
                            onOK: () => (0, $.vg)(),
                          }),
                          (0, k.uX)(e),
                        );
                  },
                  children: (0, a.jsx)(Z.he, {
                    toolTipContent: (0, G.we)("#Broadcast_User_Report_ttip"),
                    children: (0, a.jsx)(z.lNU, {}),
                  }),
                }),
              (0, a.jsx)(b.$n, {
                onClick: (e) =>
                  (0, K.EP)(
                    e,
                    "https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8",
                  ),
                children: (0, a.jsx)(Z.he, {
                  toolTipContent: (0, G.we)("#Broadcast_User_FAQ_ttip"),
                  children: (0, a.jsx)(z.$$j, {}),
                }),
              }),
            ],
          });
        }),
        re = (e) => {
          const [t, s] = (0, r.useState)("");
          return (0, a.jsx)(N.o0, {
            strTitle: (0, G.we)("#Broadcast_ReportItem_Title"),
            strDescription: (0, G.we)("#Broadcast_ReportItem_Description"),
            onCancel: e.closeModal,
            bOKDisabled: 0 == t.trim().length,
            onOK: async () => {
              await p.Get().SendUserReportOnBroadcast(t),
                e.closeModal && e.closeModal();
            },
            children: (0, a.jsx)("textarea", {
              value: t,
              onChange: (e) => s(e.currentTarget.value),
              rows: 10,
              cols: 80,
            }),
          });
        };
      var ne = s(30593),
        ie = s(22797);
      const oe = (e) => {
          if (!_.iA.is_support) return null;
          const t = (t, s) => {
              (0, A.pg)(
                (0, a.jsx)(de, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: s,
                }),
                (0, k.uX)(t),
              );
            },
            s =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return (0, a.jsxs)("div", {
            className: (0, O.A)(ne.AdminControls, D().ValveOnlyBackground),
            children: [
              (0, a.jsx)("div", { children: "(VO) Support Tools" }),
              (0, a.jsx)(b.$n, {
                onClick: (e) => t(e, "frontpage"),
                children: "Remove from Front Page",
              }),
              (0, a.jsx)(b.$n, {
                onClick: (e) => t(e, "ban"),
                children: "Ban from Broadcasting",
              }),
              (0, a.jsx)(b.$n, {
                onClick: (t) => {
                  (0, A.pg)(
                    (0, a.jsx)(ce, { steamid: e.broadcastSteamID }),
                    (0, k.uX)(t),
                  );
                },
                children: "Make Unbannable",
              }),
              (0, a.jsx)(b.$n, {
                onClick: (e) => (0, K.EP)(e, s),
                children: "Go to Support Page",
              }),
            ],
          });
        },
        de = (0, S.PA)((e) => {
          const { broadcastSteamID: t, strAction: s } = e,
            [n, i] = (0, r.useState)(1),
            [o, c] = (0, r.useState)(!1),
            [l, u] = (0, r.useState)(!1),
            [m, h] = (0, r.useState)(!1),
            _ = (0, r.useRef)(null);
          (0, r.useEffect)(
            () => () => {
              _.current && _.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const S = () => e.closeModal && e.closeModal();
          return (0, a.jsx)(f.tH, {
            children: (0, a.jsx)(N.x_, {
              onEscKeypress: S,
              children: (0, a.jsxs)(b.UC, {
                children: [
                  (0, a.jsx)(b.Y9, {
                    children:
                      "frontpage" == s
                        ? "Remove Broadcast From Front Page"
                        : "Ban from Broadcasting",
                  }),
                  (0, a.jsx)(b.nB, {
                    children: (0, a.jsxs)(b.a3, {
                      children: [
                        (0, a.jsx)("p", {
                          children:
                            "frontpage" == s
                              ? "How long should we prevent the broadcast from appearing in community or store?"
                              : "How long should we prevent the user from Broadcast at all on Steam?",
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)(b.m, {
                              rgOptions: [
                                { label: "1 Day", data: 1 },
                                { label: "1 Week", data: 7 },
                                { label: "1 Month", data: 30 },
                                { label: "6 Months", data: 180 },
                                { label: "1 Year", data: 365 },
                              ],
                              selectedOption: n,
                              onChange: (e) => i(e.data),
                            }),
                            Boolean(o) && (0, a.jsx)(ie.t, {}),
                            Boolean(l) &&
                              (0, a.jsx)("div", {
                                children: m
                                  ? "Successfully Completed Request"
                                  : "Failed to complete request, check browser console and/or try again later",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(b.wi, {
                    children: l
                      ? (0, a.jsx)(b.jn, {
                          onClick: S,
                          children: (0, G.we)("#Button_Dismiss"),
                        })
                      : (0, a.jsxs)(b.dR, {
                          children: [
                            (0, a.jsx)(b.$n, {
                              onClick: S,
                              children: (0, G.we)("#Button_Cancel"),
                            }),
                            (0, a.jsx)(b.jn, {
                              onClick: async () => {
                                c(!0);
                                try {
                                  _.current && _.current();
                                  const e = d().CancelToken.source();
                                  _.current = e.cancel;
                                  let t = await p
                                    .Get()
                                    .SetBroadcasterRestrictions(s, n, e);
                                  e.token.reason || (t = !0);
                                } finally {
                                  c(!1), u(!0), h(false);
                                }
                              },
                              children: (0, G.we)("#Button_Confirm"),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          });
        }),
        ce = (e) => {
          const [t, s] = (0, r.useState)(!1),
            [n, i] = (0, r.useState)(!1),
            [o, c] = (0, r.useState)(!1),
            l = (0, r.useRef)(null);
          (0, r.useEffect)(
            () => () => {
              l.current && l.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const u = () => e.closeModal && e.closeModal();
          return (0, a.jsx)(f.tH, {
            children: (0, a.jsx)(N.x_, {
              onEscKeypress: u,
              children: (0, a.jsxs)(b.UC, {
                children: [
                  (0, a.jsx)(b.Y9, { children: "Make Broadcast Unbannable" }),
                  (0, a.jsx)(b.nB, {
                    children: (0, a.jsxs)(b.a3, {
                      children: [
                        (0, a.jsx)("p", {
                          children:
                            "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            Boolean(t) && (0, a.jsx)(ie.t, {}),
                            Boolean(n) &&
                              (0, a.jsx)("div", {
                                children: o
                                  ? "Successfully Set Unbannable"
                                  : "Failed to make Unbannable",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(b.wi, {
                    children: n
                      ? (0, a.jsx)(b.jn, {
                          onClick: u,
                          children: (0, G.we)("#Button_Dismiss"),
                        })
                      : (0, a.jsxs)(b.dR, {
                          children: [
                            (0, a.jsx)(b.$n, {
                              onClick: u,
                              children: (0, G.we)("#Button_Cancel"),
                            }),
                            (0, a.jsx)(b.jn, {
                              onClick: async () => {
                                s(!0);
                                let e = !1;
                                try {
                                  l.current && l.current();
                                  const t = d().CancelToken.source();
                                  (l.current = t.cancel),
                                    (e = await p.Get().SetUnBannable(t));
                                } finally {
                                  s(!1), i(!0), c(e);
                                }
                              },
                              children: (0, G.we)("#Button_Confirm"),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          });
        };
      var le = s(26408),
        ue = s(25888);
      const me = (0, S.PA)((e) => {
        const t = p.Get().GetBroadcasterSteamID(),
          s = null == t ? void 0 : t.ConvertTo64BitString(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, _.Tc)("ewatchlocation", "application_config") || 5,
            );
            return e;
          })(),
          [i, o] = (0, I.QD)("muted", !0),
          d = m.es.GetBroadcast(s),
          c = m.es.GetOrCreateBroadcastInfo(s);
        return s
          ? (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)("div", {
                className: (0, O.A)(V.BroadcastPage),
                children: [
                  (0, a.jsxs)("div", {
                    className: (0, O.A)(g().BroadcastAndChat),
                    children: [
                      Boolean(!p.Get().BShowOnlyChat()) &&
                        (0, a.jsx)(f.tH, {
                          children: (0, a.jsx)("div", {
                            className: (0, O.A)(g().wrapper),
                            children: (0, a.jsx)("div", {
                              className: (0, O.A)({
                                [g().video_placeholder]: !0,
                                video_placeholder_trgt: !0,
                                [g().NoChat]: p.Get().BShowOnlyVideo(),
                              }),
                              children: (0, a.jsx)("div", {
                                className: g().BroadcastPlayerContainer,
                                children: (0, a.jsx)(f.tH, {
                                  children: (0, a.jsx)(x.default, {
                                    steamIDBroadcast: s,
                                    watchLocation: n,
                                    bStartMuted: i,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      Boolean(!p.Get().BShowOnlyVideo()) &&
                        (0, a.jsx)("div", {
                          className: g().detail_chat_ctn,
                          children: (0, a.jsx)("div", {
                            className: g().ChatContainer,
                            children: (0, a.jsx)(f.tH, {
                              children: (0, a.jsx)(v.I, {
                                emoticonStore: B.MX,
                                watchLocation: 6,
                                steamID: s,
                                broadcastID: d ? d.m_ulBroadcastID : void 0,
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                  Boolean(!p.Get().BShowInIframe()) &&
                    (0, a.jsx)(_e, { broadcasterSteamID: t, broadcastInfo: c }),
                ],
              }),
            })
          : null;
      });
      function he(e) {
        return 0 != e && e != m.fO;
      }
      const _e = (0, S.PA)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: s } = e,
            [n, i] = (0, r.useState)(null);
          let o = s.m_nAppID;
          return (
            (0, r.useEffect)(() => {
              he(o) &&
                (async () => {
                  let e = await C.ac.LoadOGGClanInfoForAppID(o);
                  i(e);
                })();
            }, [o]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(te, { broadcasterSteamID: t }),
                (0, a.jsx)(pe, { steamid: t }),
                Boolean(_.iA.is_support) &&
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(oe, { broadcastSteamID: t }),
                      (0, a.jsx)("div", {
                        className: (0, O.A)(
                          D().ValveOnlyBackground,
                          V.DebugCtn,
                        ),
                        children: (0, a.jsx)(H, {}),
                      }),
                    ],
                  }),
                he(o) &&
                  (0, a.jsxs)("div", {
                    className: V.GameInfoCtn,
                    children: [
                      (0, a.jsxs)("div", {
                        className: V.GameAboutTitleCtn,
                        children: [
                          (0, a.jsxs)("div", {
                            className: V.GameAboutTitle,
                            children: [
                              " ",
                              (0, G.we)("#Broadcast_About_Game"),
                              " ",
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: D().EventSectionSpacer,
                            children: " ",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: V.GameInfo,
                        children: (0, a.jsx)(T.p, {
                          id: Number.parseInt(s.m_strAppId),
                          type: "game",
                          bPreferAssetWithoutOverride: !1,
                        }),
                      }),
                    ],
                  }),
                Boolean(n) &&
                  (0, a.jsx)("div", {
                    className: V.RelatedEvents,
                    children: (0, a.jsx)(w.rN, {
                      clanAccountID: n.clanAccountID,
                      trackingLocation: 6,
                      partnerEventStore: ue.Av,
                      bViewAllShowInfiniteScroll: !0,
                    }),
                  }),
              ],
            })
          );
        }),
        pe = (0, S.PA)((e) => {
          const t = (0, r.useRef)(null);
          let s = m.es.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString(),
          );
          const [n, i] = (0, r.useState)(s.m_strTitle),
            [o, c] = (0, r.useState)(""),
            [l, u] = (0, r.useState)(null);
          if (
            ((0, r.useEffect)(
              () => (
                i(s.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [s.m_strTitle],
            ),
            _.iA.accountid != e.steamid.GetAccountID())
          )
            return null;
          return (0, a.jsxs)("div", {
            className: V.ControlCtn,
            children: [
              (0, a.jsx)("div", {
                className: V.ControlsTitle,
                children: (0, G.we)("#Broadcaster_Control_title"),
              }),
              (0, a.jsxs)("div", {
                className: V.TitleInput,
                children: [
                  (0, a.jsxs)("div", {
                    className: V.Options,
                    children: [
                      (0, a.jsx)(b.pd, {
                        type: "text",
                        label: (0, G.we)("#Broadcast_title_title"),
                        onChange: (e) => i(e.currentTarget.value || ""),
                        placeholder: (0, G.we)("#Broadcast_title_placeholder"),
                        value: n,
                      }),
                      (0, a.jsx)(b.pd, {
                        type: "text",
                        label: (0, G.we)("#Broadcast_Control_matchid"),
                        onChange: (e) => c(e.currentTarget.value || ""),
                        value: o,
                      }),
                      (0, a.jsxs)(b.$n, {
                        onClick: async () => {
                          t.current && t.current();
                          const e = d().CancelToken.source();
                          t.current = e.cancel;
                          let s = await p
                            .Get()
                            .UpdateBroadcastSettings(o, n, e);
                          e.token.reason ||
                            u(
                              (0, G.we)(
                                s
                                  ? "#Broadcast_Control_Success"
                                  : "#Broadcast_Control_Failure",
                              ),
                            );
                        },
                        children: [
                          (0, G.we)("#Broadcast_save_changes"),
                          (0, a.jsx)(le.o, {
                            tooltip: (0, G.we)("#Broadcast_save_title_ttip"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: V.StopCtn,
                    children: [
                      (0, a.jsx)(b.$n, {
                        onClick: (e) => {
                          (0, A.pg)(
                            (0, a.jsx)(N.o0, {
                              strTitle: (0, G.we)(
                                "#Broadcast_Control_StopBroadcast",
                              ),
                              strDescription: (0, G.we)(
                                "#EventEditor_GenericAreYouSure",
                              ),
                              onOK: async () => {
                                t.current && t.current();
                                const e = d().CancelToken.source();
                                t.current = e.cancel;
                                let s = await p.Get().StopBroadcast(e);
                                e.token.reason ||
                                  u(
                                    (0, G.we)(
                                      s
                                        ? "#Broadcast_Control_StopSuccess"
                                        : "#Broadcast_Control_StopFailure",
                                    ),
                                  );
                              },
                            }),
                            (0, k.uX)(e),
                          );
                        },
                        children: (0, G.we)("#Broadcast_Control_StopBroadcast"),
                      }),
                      Boolean(l) && (0, a.jsx)("div", { children: l }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      var Se = s(60746);
      let ve = { BroadcastWatch: (e) => `/broadcast/(watch|watchnew)/${e}` };
      function xe(e) {
        const [t, s] = r.useState(!0);
        return (
          (0, r.useEffect)(() => {
            t && Se.KN.InitGlobal().then(() => s(!1));
          }, [t]),
          t
            ? (0, a.jsx)(ie.t, {
                string: (0, G.we)("#Loading"),
                position: "center",
                size: "medium",
              })
            : (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)(n.dO, {
                  children: [
                    (0, a.jsx)(n.qh, {
                      path: ve.BroadcastWatch(":steamid_or_user_vanity"),
                      render: (e) =>
                        (0, a.jsx)(me, {
                          strSteamID: e.match.params.steamid_or_user_vanity,
                        }),
                    }),
                    (0, a.jsx)(n.qh, { component: i.a }),
                  ],
                }),
              })
        );
      }
    },
  },
]);
