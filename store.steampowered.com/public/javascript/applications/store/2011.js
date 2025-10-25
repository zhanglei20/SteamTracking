/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2011],
  {
    33924: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
        OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
        OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
        OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
        OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
        OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
        OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
        MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
        HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
        OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
        OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
        UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
        OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
        PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
        EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
        EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
        EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
        HorizontalEvent: "_1ruRSreC31IK4kUGUcSRDK",
        HorizontalSummary: "_2bTWamVtbFnHovwqhlrxiV",
        HorizontalTitle: "B9-wlbaW3NhZ3FQPArnkW",
        HorizontalDescriptionCtn: "_3CQtWw7qMAWImOwd8J5xHi",
        HorizontalDescription: "_2hPZwxDYhaY3SllhjeFqb_",
        AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
        CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
        AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
        AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
        AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
      };
    },
    91291: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
        TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
        TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
        Reason: "_2h0GKAYcXRP10ryZHFn79d",
        StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
      };
    },
    14336: (e, t, a) => {
      "use strict";
      a.d(t, { mK: () => v, DW: () => b, js: () => _, tb: () => h });
      var n = a(90626),
        r = a(20194),
        o = a(54806),
        l = a(23809),
        s = a(44654),
        i = a(10622),
        c = a(17720),
        m = a(37735),
        u = a(58632),
        p = a.n(u);
      function d(e, t) {
        return new (p())(
          async (t) => {
            const a = [...t],
              n = await m.xt.GetPlayerLinkDetails(e, { steamids: a }),
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
      function _(e) {
        const t = (0, l.KV)(),
          a = n.useContext(E);
        return (0, r.I)(v(a, t, e));
      }
      function b(e) {
        const t = (0, l.KV)(),
          a = n.useContext(E);
        return (0, o.E)({ queries: e.map((e) => v(a, t, e)) });
      }
      const E = n.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return (C ??= d(e));
          })(t).load(c.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let a = new i.Z(e);
            const n = t?.public_data,
              r = t?.private_data;
            (a.m_bInitialized = !!t),
              (a.m_ePersonaState = r?.persona_state ?? 0),
              (a.m_strAvatarHash = n?.sha_digest_avatar
                ? (0, s.Kx)(n.sha_digest_avatar)
                : i.dV),
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
          })(c.b.InitFromAccountID(e), a);
        },
      });
      function h() {
        return n.useContext(E);
      }
      function v(e, t, a) {
        const n = "string" == typeof a ? new c.b(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", n],
          queryFn: () => e.loadPersonaState(n, t),
          enabled: !!n,
        };
      }
      let C;
    },
    32541: (e, t, a) => {
      "use strict";
      a.d(t, { LG: () => f, hA: () => S });
      var n = a(90626),
        r = a(76217),
        o = a(67165),
        l = a(30894),
        s = a(55263),
        i = a(17289),
        c = a(52038),
        m = a(61859),
        u = a(82227),
        p = a(61336),
        d = a(78327),
        _ = a(84811),
        b = a(32630),
        E = a(22797),
        h = a(56524),
        v = a(48838),
        C = a(95695);
      function S(e) {
        const {
            creatorID: t,
            bShowTagline: a,
            bHideCreatorType: s,
            bSmallFormat: S,
            bHideFollowButton: f,
            bAddLinkToMemberList: g,
            bMinimalDisplay: y,
          } = e,
          { creatorHome: A } = (0, o.FV)(t.clan_account_id),
          [w] = (0, l.L2)();
        if (w || !A)
          return n.createElement(
            "div",
            { className: h.DevSummaryWidgetCtn },
            n.createElement(E.t, {
              string: (0, m.we)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const D = t.type,
          I =
            "developer" == t.type
              ? (0, m.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, m.we)("#CreatorHome_PublishedBy")
                : (0, m.we)("#CreatorHome_InFranchise"),
          P = A.GetCreatorHomeURL(D),
          N = A.GetNumFollowers();
        return n.createElement(
          _.tH,
          null,
          n.createElement(
            b.Ay,
            { feature: "salecreatorhome" },
            n.createElement(
              r.Z,
              {
                className: (0, c.A)(
                  h.DevSummaryCtn,
                  S ? h.SmallFormat : h.LargeFormat,
                  y ? h.MinimalDisplay : "",
                ),
                "flow-children": "row",
              },
              !s && n.createElement("span", { className: h.Title }, I),
              n.createElement(
                "div",
                { className: h.DevSummaryWidgetCtn },
                n.createElement("div", {
                  className: h.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${A.GetAvatarURLFullSize()} )`,
                  },
                }),
                n.createElement(
                  "div",
                  { className: (0, c.A)(h.DevSummaryContent) },
                  n.createElement(
                    "div",
                    { className: C.FlexRowContainer },
                    n.createElement(
                      i.m,
                      {
                        href: (0, p.k2)(P),
                        className: h.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      n.createElement("img", {
                        className: (0, c.A)(h.Avatar, "Avatar_Trgt"),
                        src: A.GetAvatarURLFullSize(),
                      }),
                    ),
                    n.createElement(
                      "div",
                      {
                        className: (0, c.A)(
                          C.FlexColumnContainer,
                          h.CreatorDescCtn,
                        ),
                      },
                      n.createElement(
                        "div",
                        {
                          className: (0, c.A)(
                            h.CreatorTitleCtn,
                            C.FlexColumnContainer,
                          ),
                        },
                        n.createElement(
                          i.m,
                          { href: (0, p.k2)(P), className: h.CreatorNameName },
                          A.GetName(),
                        ),
                        Boolean(a) &&
                          n.createElement(
                            "div",
                            {
                              className: (0, c.A)(
                                C.FlexColumnContainer,
                                h.CreatorTagline,
                              ),
                            },
                            A.GetTagLine(),
                          ),
                      ),
                      n.createElement(
                        "div",
                        {
                          className: (0, c.A)({
                            [C.FlexColumnContainer]: S,
                            [C.FlexRowContainer]: !S,
                            [h.SocialFollowersCtn]: !0,
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: (0, c.A)(h.FollowBtnCtn) },
                          Boolean(!f) &&
                            n.createElement(v.of, {
                              clanAccountID: t.clan_account_id,
                              creatorID: t,
                            }),
                          n.createElement(
                            "div",
                            { className: (0, c.A)({ [h.Followers]: !0 }) },
                            n.createElement(
                              "span",
                              null,
                              (0, m.we)("#CreatorHome_JustFollowers"),
                            ),
                            n.createElement(
                              "span",
                              { className: h.FollowerCount },
                              (0, u.Dq)(N),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(g) &&
                    n.createElement(
                      "a",
                      {
                        href:
                          d.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          A.GetClanSteamID().ConvertTo64BitString() +
                          "/members/",
                        target: "_blank",
                        className: h.MembersListLink,
                      },
                      (0, m.we)("#ClanMembershipList"),
                    ),
                ),
              ),
            ),
          ),
        );
      }
      function f(e) {
        const { appid: t, bSmallFormat: a } = e,
          [r] = (0, s.t7)(t, { include_basic_info: !0 });
        if (!t) return null;
        if (!r)
          return n.createElement(
            "div",
            { className: h.DevSummaryWidgetCtn },
            n.createElement(E.t, null),
          );
        let o;
        const l = r.GetAllDeveloperCreatorClans();
        if (l?.length > 0)
          o = { appid: t, name: "", clan_account_id: l[0], type: "developer" };
        else {
          const e = r.GetAllPublisherCreatorClans();
          if (e?.length > 0)
            o = {
              appid: t,
              name: "",
              clan_account_id: e[0],
              type: "publisher",
            };
          else {
            const e = r.GetAllFranchiseCreatorClans();
            e?.length > 0 &&
              (o = {
                appid: t,
                name: "",
                clan_account_id: e[0],
                type: "franchise",
              });
          }
        }
        return o
          ? n.createElement(
              _.tH,
              null,
              n.createElement(S, { creatorID: o, bSmallFormat: a }),
            )
          : null;
      }
    },
    46416: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => G, W: () => x });
      var n = a(90626),
        r = a(57876),
        o = a(45699),
        l = a(76217),
        s = a(23310),
        i = a(55963),
        c = a(30894),
        m = a(62792),
        u = a(55263),
        p = a(33924),
        d = a(26101),
        _ = a(45359),
        b = a(18654),
        E = a.n(b),
        h = a(3661),
        v = a(37346),
        C = a(72860),
        S = a(70300),
        f = a(47235),
        g = a(37076),
        y = a(54492),
        A = a(60014),
        w = a(52038),
        D = a(61859),
        I = a(61336),
        P = a(78327),
        N = a(91291),
        T = a.n(N),
        H = a(99956),
        F = a(49411);
      const G = "capsule_index_";
      function x(e) {
        const {
            capsule: t,
            bShowParentApp: a,
            elElementToAppendToHover: o,
            index: i,
            navKey: c,
            bHideStoreHover: p,
            onlyOneDiscountPct: _,
            bPreferDemoStorePage: b,
            bShowEarlyAccessBanner: h,
          } = e,
          [v, C] = n.useState(!1),
          [f] = (0, u.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          [g] = (0, u.t7)(a && f?.GetParentAppID(), r.Xh);
        if (!f) return null;
        const y = Boolean(g),
          A = n.createElement(L, {
            ...e,
            strExtraParams: e.strExtraParams,
            info: t,
            bIsHovered: v,
            bHasParentAppToDisplay: y,
            onlyOneDiscountPct: _,
            bShowEarlyAccessBanner: h,
          });
        return n.createElement(
          l.Z,
          {
            className: (0, w.A)({
              [E().OuterCapsuleContainer]: !0,
              [G + i]: 0 == i,
            }),
            navEntryPreferPosition: s.iU.PREFERRED_CHILD,
            navKey: c,
          },
          n.createElement(
            S.oj,
            { appid: f.GetAppID() },
            Boolean(p)
              ? n.createElement(
                  "div",
                  { onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) },
                  A,
                )
              : n.createElement(
                  d.Qf,
                  {
                    className: E().CapsuleContainer,
                    item: t,
                    elElementToAppend: e.elElementToAppendToHover,
                    bShowDemoButton: e.bShowDemoButton,
                    bPreferDemoStorePage: e.bPreferDemoStorePage,
                    bShowDeckCompatibilityDialog:
                      e.bShowDeckCompatibilityDialog,
                    bHidePrice: e.bHidePrice,
                    bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                    strExtraParams: e.strExtraParams,
                    nCreatorAccountID: e.creatorAccountID,
                    nWidthMultiplier: e.nWidthMultiplier,
                    bShowIgnoreButton: e.bShowIgnoreButton,
                  },
                  A,
                ),
            Boolean(o) && n.createElement(n.Fragment, null, o),
          ),
          y &&
            n.createElement(B, {
              strExtraParams: e.strExtraParams,
              parentStoreItem: g,
              childAppType: f.GetAppType(),
              bPreferDemoStorePage: b,
            }),
        );
      }
      function B(e) {
        const {
            strExtraParams: t,
            parentStoreItem: a,
            childAppType: l,
            bPreferDemoStorePage: s,
          } = e,
          i = (0, A.n9)(),
          c = (0, P.Qn)();
        return n.createElement(
          o.ml,
          { className: E().CapsuleParentInfo, ...(0, C.S)(a, i, c, s, t) },
          n.createElement(
            S.oj,
            { appid: a.GetAppID() },
            n.createElement(
              "div",
              { className: E().ParentType },
              (0, D.we)(
                11 == l
                  ? "#SalePage_ParentApp_SoundTrack"
                  : "#SalePage_ParentApp_DLC",
              ),
            ),
            n.createElement(
              g.u,
              { type: "app", id: a.GetAppID(), strExtraParams: t },
              n.createElement("img", {
                loading: "lazy",
                className: p.AppCapsuleImage,
                alt: a.GetName(),
                src: a.GetAssets().GetSmallCapsuleURL(),
                ...(0, r.Jw)(),
              }),
            ),
          ),
        );
      }
      function L(e) {
        const {
            info: t,
            bHideStatusBanners: a,
            strExtraParams: l,
            index: s,
            imageType: c,
            bHasParentAppToDisplay: p,
            bIsHovered: d,
            strDoubleCapsuleMessage: b,
            bPreferDemoStorePage: E,
            bShowEarlyAccessBanner: C,
          } = e,
          [S] = (0, u.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          f = (0, A.n9)(),
          g = (0, F.w)(),
          D = (0, n.useMemo)(() => S?.GetIncludedAppIDsOrSelf(), [S]);
        if (!S) return null;
        const P = (0, I.NT)(
          (0, i.It)(`${S.GetStorePageURL(E)}${l ? `?${l}` : ""}`, f, g),
        );
        let N;
        "overrideNavigation" in t &&
          (N = (e) => (
            t.overrideNavigation(e), e.preventDefault(), e.stopPropagation(), !1
          ));
        const G = Boolean(b);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "div",
            { className: (0, w.A)({ [T().TwoWidthCtn]: G }) },
            n.createElement(
              o.Ii,
              {
                href: N ? null : P,
                style: { display: "block", cursor: "pointer" },
                className: (0, w.A)({ [T().TwoWidthCapsule]: G }),
                preferredFocus: p,
                onClick: N,
              },
              n.createElement(v.V, {
                appids: D,
                hide_status_banners: a,
                show_early_access: e.bShowEarlyAccessBanner,
              }),
              "none" != c && n.createElement(_.aU, { imageType: c, info: t }),
              n.createElement(y.J, { storeItem: S }),
              Boolean(d) && n.createElement(h.m, { appInfo: t }),
            ),
            G &&
              n.createElement(
                "div",
                {
                  className: (0, w.A)(T().TwoWidthSideInfo, "TwoWidthSideInfo"),
                },
                n.createElement("div", { className: T().Reason }, b),
                n.createElement(
                  "div",
                  { className: T().StoreSaleItemRelease },
                  n.createElement(
                    "span",
                    null,
                    S.GetFormattedSteamReleaseDate(),
                  ),
                ),
                n.createElement(H.n, {
                  bHideTitle: !0,
                  rgTagIDs: S.GetTagIDs(),
                  instanceNum: s,
                }),
              ),
          ),
          n.createElement(W, { ...e }),
        );
      }
      function W(e) {
        const {
            info: t,
            bHidePriceIfOwned: a,
            bHideStatusBanners: o,
            bUseSubscriptionLayout: l,
            elElementToAppendToHover: s,
            bHidePrice: i,
            bHidePlatforms: p,
            creatorAccountID: d,
            bIsHovered: b,
            onlyOneDiscountPct: E,
            strDoubleCapsuleMessage: h,
          } = e,
          [v] = (0, u.G6)(t.id, (0, m.SW)(t.type), r.Xh),
          C =
            v &&
            v?.GetIncludedAppIDsOrSelf().length > 0 &&
            v?.GetIncludedAppIDsOrSelf().every((e) => c.Fm.Get().BOwnsApp(e)),
          S = C && !o;
        if (l && 0 == v?.GetStoreItemType())
          return n.createElement(f.E, { appid: v.GetAppID(), bIsMuted: b });
        if (s) return null;
        const g = C && a,
          y = S;
        return n.createElement(_.qn, {
          info: t,
          bShowAsMuted: y,
          bHidePrice: i,
          bShowInLibraryInsteadOfPrice: g,
          bHidePlatforms: p,
          creatorAccountID: d,
          bShowName: e.bShowName,
          onlyOneDiscountPct: E,
          bShowWishlistButton: Boolean(h),
        });
      }
    },
    17289: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => l });
      var n = a(45699),
        r = a(90626),
        o = a(78327);
      function l(e) {
        const { href: t, children: a, bAllowFocuseableAnchor: l, ...s } = e;
        return (0, o.Y2)()
          ? r.createElement("div", { ...s }, a)
          : l
            ? r.createElement(n.Ii, { href: t, ...s }, a)
            : r.createElement("a", { href: t, ...s }, a);
      }
    },
  },
]);
