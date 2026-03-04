/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8843],
  {
    97824: (e) => {
      e.exports = {
        OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
        OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
        ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
        BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
        BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
        BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
        BannerButton: "_1jso7z80FWGn42k1HP0_cf",
      };
    },
    62381: (e, n, t) => {
      "use strict";
      t.d(n, { W: () => r });
      var s = t(30470);
      let i = { success: !0, result: 1 };
      class o {
        m_mapWaitingCallbacks = new Map();
        m_socket;
        m_iCallSeq = 1;
        m_bReady = !1;
        m_bClientConnectionFailed = !1;
        m_bSecurityException = !1;
        m_promiseConnect;
        m_ClientInfo = {
          ulVersion: "",
          bFriendsUIEnabled: !1,
          unAccountID: 0,
          rgSupportedMessages: [],
        };
        constructor() {}
        get ClientInfo() {
          return this.m_ClientInfo;
        }
        get ready() {
          return this.m_bReady;
        }
        get browser_supported() {
          return !this.m_bSecurityException;
        }
        get connected_to_client() {
          return !!this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
        }
        SendMsgAndAwaitResponse(e) {
          return new Promise((n, t) => {
            let s = this.m_iCallSeq++;
            this.BSendMsg(e, s)
              ? this.m_mapWaitingCallbacks.set(s, {
                  iSeq: s,
                  fnCallback: n,
                  fnError: t,
                })
              : t();
          });
        }
        BSendMsg(e, n) {
          if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
            return !1;
          let t = Object.assign({}, e, {
            universe: s.TS.EUNIVERSE,
            accountid: s.iA.accountid,
          });
          void 0 !== n && (t.sequenceid = n);
          try {
            return this.m_socket.send(JSON.stringify(t)), !0;
          } catch (e) {
            return !1;
          }
        }
        OnSocketMessage(e) {
          try {
            let n = JSON.parse(e.data);
            if (n.sequenceid) {
              let e = this.m_mapWaitingCallbacks.get(n.sequenceid);
              if (e)
                return (
                  this.m_mapWaitingCallbacks.delete(n.sequenceid),
                  void e.fnCallback(n)
                );
            }
          } catch (e) {
            console.error("exception parsing response", e);
          }
        }
        Connect() {
          if (this.m_bReady && this.m_socket?.readyState === WebSocket.OPEN)
            return Promise.resolve();
          if (this.m_promiseConnect) return this.m_promiseConnect;
          let e = new Promise((e, n) => {
            try {
              this.m_socket = new WebSocket(
                "ws://127.0.0.1:27060/clientsocket/",
              );
            } catch (e) {
              return (this.m_bSecurityException = !0), void n(e);
            }
            (this.m_socket.onerror = (e) => {
              n();
            }),
              (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
              (this.m_socket.onopen = () => {
                this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                  .then((t) => {
                    1 == t.success
                      ? ((this.m_ClientInfo.ulVersion = t.clientversion),
                        (this.m_ClientInfo.bFriendsUIEnabled = !!t.friendsui),
                        (this.m_ClientInfo.unAccountID = t.accountid),
                        t.supported_messages &&
                          (this.m_ClientInfo.rgSupportedMessages =
                            t.supported_messages),
                        e())
                      : n();
                  })
                  .catch(n);
              });
          });
          return (
            (this.m_promiseConnect = e),
            this.m_promiseConnect
              .then(() => {
                (this.m_bReady = !0), (this.m_promiseConnect = void 0);
              })
              .catch(() => {
                (this.m_bClientConnectionFailed = !0),
                  (this.m_promiseConnect = void 0);
              }),
            this.m_promiseConnect
          );
        }
      }
      let r = new (class {
        m_connection = new o();
        FailureResult(e = 2) {
          let n = { success: !1, result: e };
          return (
            this.m_connection &&
              !this.m_connection.browser_supported &&
              (n.browser_unsupported = !0),
            this.m_connection &&
              !this.m_connection.connected_to_client &&
              (n.connect_failed = !0),
            7 == e && (n.call_unsupported = !0),
            n
          );
        }
        BClientConnected() {
          return this.m_connection.Connect().then(
            () => i,
            () => this.FailureResult(),
          );
        }
        BClientConnectedAndSupportsMessage(e) {
          return this.m_connection
            .Connect()
            .then(() => this.BClientSupportsMessage(e))
            .catch(() => !1);
        }
        BClientSupportsMessage(e) {
          return (
            !(
              !this.m_connection.connected_to_client || !this.m_connection.ready
            ) &&
            -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
          );
        }
        OpenFriendChatDialog(e) {
          let n = { message: "ShowFriendChatDialog", steamid: e };
          return this.GenericEResultCall(n);
        }
        OpenChatRoomGroupDialog(e, n) {
          let t = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
          return n && (t.chat_room_id = n), this.GenericEResultCall(t);
        }
        ShowChatRoomGroupInvite(e, n = !0) {
          let t = { message: "ShowChatRoomGroupInvite", invite_code: e };
          return this.GenericEResultCall(t, n);
        }
        m_mapCacheSubscribedApp = new Map();
        BIsSubscribedApp(e) {
          if (this.m_mapCacheSubscribedApp.has(e))
            return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
          let n = { message: "IsSubscribedApp", appid: e };
          return this.GenericEResultCall(n, !0).then((n) => {
            if (n.connect_failed) return;
            let t = 1 == n.result;
            return this.m_mapCacheSubscribedApp.set(e, t), t;
          });
        }
        OpenFriendsDialog() {
          return this.GenericEResultCall({ message: "OpenFriendsDialog" });
        }
        OpenSteamURL(e, n = !1) {
          let t = { message: "OpenSteamURL", url: e };
          return this.GenericEResultCall(t, n);
        }
        BClientAccountMatches() {
          return (
            !s.iA.logged_in ||
            s.iA.accountid == this.m_connection.ClientInfo.unAccountID
          );
        }
        GenericEResultCall(e, n = !1) {
          return this.m_connection
            .Connect()
            .then(() =>
              n && !this.BClientAccountMatches()
                ? { success: !1, result: 19, account_mismatch: !0 }
                : this.m_connection
                    .SendMsgAndAwaitResponse(e)
                    .then((e) =>
                      1 === e.success ? i : this.FailureResult(e.success),
                    ),
            )
            .catch(() => this.FailureResult());
        }
      })();
      window.ClientConnectionAPI = r;
    },
    71009: (e, n, t) => {
      "use strict";
      t.r(n),
        t.d(n, {
          OpenInDesktopClient: () => m,
          default: () => d,
          useOpenWebInSteamClient: () => p,
        });
      var s = t(7850),
        i = t(90626),
        o = t(30470),
        r = t(84811),
        c = t(62381),
        a = t(97824),
        l = t(78327),
        u = t(2627),
        h = t(61859);
      const m = (0, r.Nr)(function (e) {
        const { fnOpenInSteamClient: n } = p();
        return (0, s.jsx)("div", {
          className: a.OpenInBannerContainer,
          children: (0, s.jsxs)("div", {
            className: a.OpenInBannerContent,
            children: [
              (0, s.jsx)("div", {
                className: a.BannerButtonContainer,
                children: (0, s.jsx)("div", {
                  onClick: n,
                  className: a.BannerButton,
                  children: (0, h.we)("#OpenInDesktopAppBanner_OpenAppButton"),
                }),
              }),
              (0, s.jsx)("div", {
                className: a.BannerMessage,
                children: (0, s.jsxs)("div", {
                  className: a.BannerTitle,
                  children: [
                    (0, s.jsx)("b", {
                      children: (0, h.we)(
                        "#OpenInDesktopAppBanner_NotSignedIn",
                      ),
                    }),
                    (0, s.jsx)("br", {}),
                    (0, h.we)("#OpenInDesktopAppBanner_Body"),
                  ],
                }),
              }),
            ],
          }),
        });
      });
      function p() {
        const [e, n] = i.useState(22);
        i.useEffect(() => {
          o.TS.IN_CLIENT ||
            o.TS.IN_MOBILE ||
            o.TS.IN_MOBILE_WEBVIEW ||
            c.W.BClientConnectedAndSupportsMessage("OpenSteamURL").then((e) => {
              n(e ? 1 : 2);
            });
        }, []);
        const t = i.useCallback(() => {
          let n = `${(0, l.yl)()}//openurl/`;
          const t = (0, u.VY)("browserid");
          if (t) {
            const e = new URL(window.location.href),
              s = new URLSearchParams(e.search);
            s.set("utm_bid", t),
              (n += e.origin + e.pathname + "?" + s.toString() + e.hash);
          } else n += window.location.href;
          1 == e ? c.W.OpenSteamURL(n) : (window.location.href = n);
        }, [e]);
        return { eClientConnectedState: e, fnOpenInSteamClient: t };
      }
      const d = m;
    },
  },
]);
