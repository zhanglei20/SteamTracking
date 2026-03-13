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
        s = n(45699),
        u = n(81393),
        c = n(78327),
        m = n(16180),
        l = n(55963),
        d = n(61336),
        _ = n(60014),
        p = n(26161),
        w = n(55263),
        k = n(61859),
        v = n(27939);
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
        const n = "store" === (0, c.yK)(),
          r = (function (e) {
            const t = e.match(S);
            return t?.[1];
          })(window.location.href),
          o = n && "news" == r,
          i = 36 == t.GetEventType(),
          s = "community" === (0, c.yK)(),
          m = t.appid ? "games" : "groups",
          l =
            s &&
            m == r &&
            ((t.appid && t.appid === c.UF.APPID) ||
              (!t.appid &&
                t.clanSteamID.GetAccountID() === c.UF.CLANACCOUNTID));
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
            return (0, u.wT)(!1, "Unknown route specified for link: " + e), !1;
        }
      }
      function y(e) {
        const t =
          c.TS.COMMUNITY_BASE_URL +
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
            (e ? "/games/" + c.UF.VANITY_ID : "/groups/" + c.UF.VANITY_ID) + "/"
          );
        const a = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return c.TS.COMMUNITY_BASE_URL + a + "/";
      }
      function I() {
        return "news";
      }
      function A(e, t, n) {
        const [a] = (0, w.t7)(e?.appid, { include_basic_info: !0 });
        if (e) return D(e, a, t, n);
      }
      function D(e, t, n, r) {
        const o = "relative" === r,
          i = "community" === (0, c.yK)(),
          s = o ? "/" : c.TS.STORE_BASE_URL,
          m = g(e.appid, e.clanSteamID, o);
        n === a.k_eView
          ? (n = i ? a.k_eCommunityView : a.k_eStoreView)
          : n === a.k_eViewWebSiteHub &&
            (n = i ? a.k_eCommunityAnnouncementHub : a.k_eStoreNewsHub);
        const l = e.GID ? e.GID : "",
          d = e.AnnouncementGID ? e.AnnouncementGID : "",
          _ =
            e.BIsOGGEvent() &&
            e.appid &&
            t &&
            e.BHasSaleUpdateLandingPageVanity(),
          w = 36 == e.GetEventType();
        switch (n) {
          case a.k_eCommunityPublish:
            return (
              m +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + d
                : "partnerevents/publish/" + l + "?tab=publishing")
            );
          case a.k_eCommunityEdit:
            return (
              m +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + d
                : "partnerevents/edit/" + l)
            );
          case a.k_eCommunityEditBroadcast:
            return (
              m +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + d
                : "partnerevents/edit/" + l) +
              "?tab=broadcast"
            );
          case a.k_eCommunityMigrate:
            return m + "partnerevents/migrate_announcement/" + d;
          case a.k_eCommunityPreview:
            return w
              ? m + "partnerevents/previewsale/" + l
              : m +
                  (e.bOldAnnouncement
                    ? "partnerevents/preview_old_announcement/" + d
                    : "partnerevents/preview/" + l);
          case a.k_eCommunityPreviewSale:
            return m + "partnerevents/previewsale/" + l;
          case a.k_eCommunityAdminPage:
            return w
              ? `${s}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
              : m + "partnerevents";
          case a.k_eCommunityAnnouncementHub:
            return m + "announcements";
          case a.k_eStoreNewsHub:
            return (
              s +
              `news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}`
            );
          case a.k_eStoreOwnerPage:
            return (
              s +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case a.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? e.clanSteamID.GetAccountID() == v.wv
                ? `${s}charts/topnewreleases/${e.jsondata.sale_vanity_id}`
                : e.clanSteamID.GetAccountID() == v.yT
                  ? `${s}charts/bestofyear/${e.jsondata.sale_vanity_id}`
                  : _
                    ? `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`
                    : w
                      ? `${s}curator/${e.clanSteamID.GetAccountID()}`
                      : s +
                        (e.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath
                          ? "sale/"
                          : "curator/" +
                            e.clanSteamID.GetAccountID() +
                            "/sale/") +
                        e.jsondata.sale_vanity_id
              : s;
          case a.k_eCommunityView:
            return m + "announcements/detail/" + d;
          case a.k_eStoreView:
            if (e.clanSteamID.GetAccountID() == (0, p.H)())
              return `${c.TS.STORE_BASE_URL}meetsteam/${l}`;
            if (_)
              return `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`;
            if (w) return `${s}curator/${e.clanSteamID.GetAccountID()}`;
            return `${s}news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}/${e.bOldAnnouncement ? `old_view/${d}` : `view/${l}`}`;
          case a.k_eStoreUsersNewsHub:
            return `${s}news/`;
          default:
            return (0, u.wT)(!1, "Unknown route specified for link"), "";
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
          { bCanUseLink: u } = o.useContext(m.I),
          c = (0, _.n9)(),
          p = (0, i.W6)(),
          w = u && b(e.route, t),
          v = A(t, e.route, w ? "relative" : "absolute"),
          S = !w && v ? (0, d.NT)(v) : v,
          y = w || !S ? S : (0, l.wJ)(S, c),
          f = A(t, a.k_eViewWebSiteHub, "absolute"),
          C = Boolean(e.route != a.k_eViewWebSiteHub)
            ? (0, k.we)("#EventBrowse_MoreEventsBtn")
            : "",
          g = o.useCallback(() => {
            f && window.location.assign(f);
          }, [f]);
        return t
          ? w
            ? (0, r.jsx)(s.Ii, {
                style: e.style,
                className: e.className,
                href: p.createHref({ pathname: y }),
                onClick: (t) => {
                  e.onClick?.(t), p.push(y), t.preventDefault();
                },
                onOptionsActionDescription: C,
                onOptionsButton: C ? g : void 0,
                preferredFocus: n,
                children: e.children,
              })
            : (0, r.jsx)(s.Ii, {
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
