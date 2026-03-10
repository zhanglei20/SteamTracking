/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5714],
  {
    75113: (e, t, n) => {
      n.d(t, {
        Bw: () => h,
        EX: () => f,
        Hx: () => G,
        JP: () => y,
        LJ: () => I,
        OG: () => $,
        PH: () => a,
        T7: () => C,
        qT: () => P,
        tj: () => U,
        yh: () => D,
      });
      var a,
        r = n(7850),
        o = n(90626),
        i = n(92757),
        s = n(62641),
        u = n(45699),
        c = n(81393),
        m = n(78327),
        l = n(16180),
        d = n(55963),
        _ = n(61336),
        p = n(60014),
        w = n(26161),
        k = n(55263),
        v = n(61859);
      !(function (e) {
        (e.k_eView = "view"),
          (e.k_eViewWebSiteHub = "websitehub"),
          (e.k_eCommunityView = "communityview"),
          (e.k_eCommunityEdit = "edit"),
          (e.k_eCommunityEditBroadcast = "editBroadcast"),
          (e.k_eCommunityAdminPage = "admin"),
          (e.k_eCommunityPublish = "publish"),
          (e.k_eCommunityMigrate = "migrate"),
          (e.k_eCommunityPreview = "preview"),
          (e.k_eCommunityPreviewSale = "previewsale"),
          (e.k_eCommunityAnnouncementHub = "community_announcehub"),
          (e.k_eStoreView = "storeview"),
          (e.k_eStoreNewsHub = "newshub"),
          (e.k_eStoreOwnerPage = "store"),
          (e.k_eStoreSalePage = "sale"),
          (e.k_eStoreUsersNewsHub = "usernewshub");
      })(a || (a = {}));
      const S =
        /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
      function b(e, t) {
        if (!t) return !1;
        const n = "store" === (0, m.yK)(),
          r = (function (e) {
            const t = e.match(S);
            return t?.[1];
          })(window.location.href),
          o = n && "news" == r,
          i = 36 == t.GetEventType(),
          s = "community" === (0, m.yK)(),
          u = t.appid ? "games" : "groups",
          l =
            s &&
            u == r &&
            ((t.appid && t.appid === m.UF.APPID) ||
              (!t.appid &&
                t.clanSteamID.GetAccountID() === m.UF.CLANACCOUNTID));
        switch (e) {
          case a.k_eView:
            return l || o;
          case a.k_eCommunityView:
          case a.k_eCommunityEdit:
          case a.k_eCommunityEditBroadcast:
          case a.k_eCommunityPublish:
          case a.k_eCommunityMigrate:
          case a.k_eCommunityPreview:
          case a.k_eCommunityPreviewSale:
          case a.k_eCommunityAnnouncementHub:
            return l;
          case a.k_eCommunityAdminPage:
            return !i && l;
          case a.k_eViewWebSiteHub:
            return l || o;
          case a.k_eStoreView:
          case a.k_eStoreNewsHub:
          case a.k_eStoreOwnerPage:
          case a.k_eStoreUsersNewsHub:
            return o;
          case a.k_eStoreSalePage:
            return !1;
          default:
            return (0, c.wT)(!1, "Unknown route specified for link: " + e), !1;
        }
      }
      function y(e) {
        const t =
          m.TS.COMMUNITY_BASE_URL +
          "gid/" +
          e.clanSteamID.ConvertTo64BitString() +
          "/announcements/share/" +
          e.AnnouncementGID;
        return {
          strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
          strTwitterUrl: t + "?site=twitter",
          strRedditUrl: t + "?site=reddit",
        };
      }
      function f(e) {
        return A(e, a.k_eStoreSalePage, "absolute");
      }
      function C(e) {
        return A(e, a.k_eStoreView, "absolute");
      }
      function g(e, t, n) {
        if (n)
          return (
            (e ? "/games/" + m.UF.VANITY_ID : "/groups/" + m.UF.VANITY_ID) + "/"
          );
        const a = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return m.TS.COMMUNITY_BASE_URL + a + "/";
      }
      function I() {
        return "news";
      }
      function A(e, t, n) {
        const [a] = (0, k.t7)(e?.appid, { include_basic_info: !0 });
        if (e) return D(e, a, t, n);
      }
      function D(e, t, n, r) {
        const o = "relative" === r,
          i = "community" === (0, m.yK)(),
          u = o ? "/" : m.TS.STORE_BASE_URL,
          l = g(e.appid, e.clanSteamID, o);
        n === a.k_eView
          ? (n = i ? a.k_eCommunityView : a.k_eStoreView)
          : n === a.k_eViewWebSiteHub &&
            (n = i ? a.k_eCommunityAnnouncementHub : a.k_eStoreNewsHub);
        const d = e.GID ? e.GID : "",
          _ = e.AnnouncementGID ? e.AnnouncementGID : "",
          p =
            e.BIsOGGEvent() &&
            e.appid &&
            t &&
            e.BHasSaleUpdateLandingPageVanity(),
          k = 36 == e.GetEventType();
        switch (n) {
          case a.k_eCommunityPublish:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + _
                : "partnerevents/publish/" + d + "?tab=publishing")
            );
          case a.k_eCommunityEdit:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + _
                : "partnerevents/edit/" + d)
            );
          case a.k_eCommunityEditBroadcast:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + _
                : "partnerevents/edit/" + d) +
              "?tab=broadcast"
            );
          case a.k_eCommunityMigrate:
            return l + "partnerevents/migrate_announcement/" + _;
          case a.k_eCommunityPreview:
            return k
              ? l + "partnerevents/previewsale/" + d
              : l +
                  (e.bOldAnnouncement
                    ? "partnerevents/preview_old_announcement/" + _
                    : "partnerevents/preview/" + d);
          case a.k_eCommunityPreviewSale:
            return l + "partnerevents/previewsale/" + d;
          case a.k_eCommunityAdminPage:
            return k
              ? `${u}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
              : l + "partnerevents";
          case a.k_eCommunityAnnouncementHub:
            return l + "announcements";
          case a.k_eStoreNewsHub:
            return (
              u +
              `news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}`
            );
          case a.k_eStoreOwnerPage:
            return (
              u +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case a.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? e.clanSteamID.GetAccountID() == s.wv
                ? `${u}charts/topnewreleases/${e.jsondata.sale_vanity_id}`
                : e.clanSteamID.GetAccountID() == s.yT
                  ? `${u}charts/bestofyear/${e.jsondata.sale_vanity_id}`
                  : p
                    ? `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`
                    : k
                      ? `${u}curator/${e.clanSteamID.GetAccountID()}`
                      : u +
                        (e.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath
                          ? "sale/"
                          : "curator/" +
                            e.clanSteamID.GetAccountID() +
                            "/sale/") +
                        e.jsondata.sale_vanity_id
              : u;
          case a.k_eCommunityView:
            return l + "announcements/detail/" + _;
          case a.k_eStoreView:
            if (e.clanSteamID.GetAccountID() == (0, w.H)())
              return `${m.TS.STORE_BASE_URL}meetsteam/${d}`;
            if (p)
              return `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`;
            if (k) return `${u}curator/${e.clanSteamID.GetAccountID()}`;
            return `${u}news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}/${e.bOldAnnouncement ? `old_view/${_}` : `view/${d}`}`;
          case a.k_eStoreUsersNewsHub:
            return `${u}news/`;
          default:
            return (0, c.wT)(!1, "Unknown route specified for link"), "";
        }
      }
      function h(e, t, n) {
        return A(
          e,
          t,
          "forceAbsolute" === n || !b(t, e) ? "absolute" : "relative",
        );
      }
      function P(e, t, n, a) {
        return D(
          e,
          t,
          n,
          "forceAbsolute" === a || !b(n, e) ? "absolute" : "relative",
        );
      }
      function $(e) {
        const { eventModel: t, route: n, bPopup: a = !0 } = e,
          s = b(n, t),
          u = A(t, n, s ? "relative" : "absolute");
        return (
          o.useEffect(() => {
            a ? window.open(u) : window.location.assign(u);
          }, [a, u]),
          s ? (0, r.jsx)(i.rd, { push: !0, to: u }) : null
        );
      }
      function G(e, t, n) {
        const a = g(e, t, !1);
        return "admin" === n ? a + "partnerevents" : "";
      }
      function U(e) {
        const { eventModel: t, preferredFocus: n } = e,
          { bCanUseLink: s } = o.useContext(l.I),
          c = (0, p.n9)(),
          m = (0, i.W6)(),
          w = s && b(e.route, t),
          k = A(t, e.route, w ? "relative" : "absolute"),
          S = !w && k ? (0, _.NT)(k) : k,
          y = w || !S ? S : (0, d.wJ)(S, c),
          f = A(t, a.k_eViewWebSiteHub, "absolute"),
          C = Boolean(e.route != a.k_eViewWebSiteHub)
            ? (0, v.we)("#EventBrowse_MoreEventsBtn")
            : "",
          g = o.useCallback(() => {
            f && window.location.assign(f);
          }, [f]);
        return t
          ? w
            ? (0, r.jsx)(u.Ii, {
                style: e.style,
                className: e.className,
                href: m.createHref({ pathname: y }),
                onClick: (t) => {
                  e.onClick?.(t), m.push(y), t.preventDefault();
                },
                onOptionsActionDescription: C,
                onOptionsButton: C ? g : void 0,
                preferredFocus: n,
                children: e.children,
              })
            : (0, r.jsx)(u.Ii, {
                href: y,
                style: e.style,
                className: e.className,
                onClick: e.onClick,
                preferredFocus: n,
                onOptionsActionDescription: C,
                onOptionsButton: C ? g : void 0,
                children: e.children,
              })
          : null;
      }
    },
  },
]);
