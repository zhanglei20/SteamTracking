/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7819],
  {
    42919: (e) => {
      e.exports = {
        PageOuterContainer: "A1molY3lA3epFeiK9C18X",
        LocalizedHeaderImg: "_2ef14902HuOYwW9X2ZmOBM",
        LocalizedHeaderMobileImg: "_3NX2aMrxYB2eC6k0FEticr",
        PageInnerBG: "dkYvUoJVKlaSYTRR6wZ0Y",
        PageInnerContent: "_20TiAcFAkd9np-ptymBKRe",
        GenreListContainer: "_17we18AIwvK4bFfGQbI41U",
        HeaderContainer: "_1gPQkVavA-LOCR3b-IKcB",
        HeaderPrefix: "_3hjBUHcKMn2idQO_5Ia3Ni",
        GenreTitle: "_25hmlvprjx7XlKaIdRsG5R",
        ListHeader: "jZV6eX02cAULi9JfIksaR",
        HeaderIntro: "_3STDK2l490h73KtHqWLkGJ",
        HeaderDesc: "_3EetibYgOfZgSMouAZUzKU",
        Wallpapers: "_3j1mtlKbdtWmEOO73SxFWN",
        Noto: "_1S5tjVuHYHJscKClAwWb3a",
        GenreContainer: "_2JuP7L8n3icg43_wS3FIDg",
        GenreSubheader: "_1hagULjKLFtESNF4z9sB9L",
        LeftColumn: "_1BzJCbD0qCE8mwDfA1lNfI",
        RightColumn: "_2l_lu9q_KJ01uSoJhMsuJw",
        GenreStory: "_3cVcC0BAT4OHbZZRjAzEc_",
        StickerPreview: "_1AsdNRYXgqD4kbyiL5LH_I",
        Unclaimed: "oT-hELNuFFfKlmFqvx9ue",
        CompletedSummaryText: "_24Z9tBamfDCSidYyUWNqm5",
        TheEnd: "_2b58zwoq3jyRstHU3eN1vE",
        BadgeContainer: "_2wlN6Tx0UyAVdkbjCArjGC",
        BadgeName: "_3EwgFn4j6yiTeoyPFFiSiX",
        SubHeader: "-Ej5OKTtQyBuAYsE_uEuK",
        BadgeText: "_2Vbv_zIpsBEFgfzIdLjSgB",
        BadgeDesc: "_37uOV7jr2jliYKlTRPhfzR",
        BadgeImg: "x74En7wZjtpuyro1DP82z",
        BadgeLink: "_2qaiZlONpv3PnKbKbYqHD6",
        FrameExample: "_1q5L20SehgaXZx9TmYSfHV",
        Badge_51: "_1iE6US6GTFPFroJXMBgnja",
        Badge_52: "_2tJdQHqm8mz8o-cKuEc9zk",
        Badge_53: "_2kvVuCP6Ia4K8Nfeo55a_Z",
        Badge_54: "_2VzkL8Wl9rKj2WlN-9xcix",
        Badge_55: "_11CXt5o0CnU3swZRXwFmgp",
        Column: "_1TnJ8vhRS0DBDf6on8h4zW",
      };
    },
    90444: (e, r, t) => {
      "use strict";
      t.d(r, {
        E4: () => h,
        PB: () => N,
        PU: () => P,
        VZ: () => p,
        _l: () => n,
        cZ: () => c,
        iG: () => g,
        ib: () => l,
        x4: () => d,
      });
      var m = t(34629),
        _ = t(41735),
        o = t.n(_),
        s = t(14947),
        a = t(90626),
        S = t(68797),
        u = t(78327);
      class i {
        m_mapGenreToStickerResponse = new Map();
        m_eStoryBadgeGranted = 0;
        m_strLocalizedStoryHeader;
        m_strLocalizedStoryHeaderMobile;
        static s_Singleton;
        static Get() {
          return i.s_Singleton || (i.s_Singleton = new i()), i.s_Singleton;
        }
        constructor() {
          (0, s.Gn)(this),
            "dev" == u.TS.WEB_UNIVERSE && (window.g_SummerSale2021Store = this);
          const e = (0, u.Tc)("summerstory", "application_config");
          if (e) {
            if (e.story_choices) {
              const r = e.story_choices;
              r.sort((e, r) => e.time_chosen - r.time_chosen),
                r.forEach((e) => {
                  this.m_mapGenreToStickerResponse.set(e.genre, e);
                });
            }
            e.badge_granted && (this.m_eStoryBadgeGranted = e.badge_granted),
              e.header && (this.m_strLocalizedStoryHeader = e.header),
              e.header_mobile &&
                (this.m_strLocalizedStoryHeaderMobile = e.header_mobile);
          }
        }
        GetStoryBadgeGranted() {
          return this.m_eStoryBadgeGranted;
        }
        GetLocalizedStoryHeader() {
          return this.m_strLocalizedStoryHeader;
        }
        GetLocalizedStoryHeaderMobile() {
          return this.m_strLocalizedStoryHeaderMobile;
        }
        GetAllGenreChoices() {
          return this.m_mapGenreToStickerResponse;
        }
        GetClaimForGenre(e) {
          return this.m_mapGenreToStickerResponse.get(e);
        }
        async LoadClaimForGenre(e, r) {
          if (this.m_mapGenreToStickerResponse.has(e)) return;
          if (!u.iA.logged_in) return;
          this.m_mapGenreToStickerResponse.set(e, {});
          let t = null;
          try {
            const m = await o().get(
              u.TS.STORE_BASE_URL + "promotion/ajaxhasclaimedgenresticker",
              { params: { genre: e }, cancelToken: r?.token },
            );
            if (200 == m?.status && 1 == m.data?.success && m.data?.results) {
              const r = m.data.results;
              return void this.m_mapGenreToStickerResponse.set(e, r);
            }
            t = { response: m };
          } catch (e) {
            t = e;
          }
          const m = (0, S.H)(t);
          console.error("Could not check claim on genre", e, m.strErrorMsg, m);
        }
        async MakeClaimForGenre(e, r, t) {
          if (!u.iA.logged_in) return 21;
          const m = new FormData();
          m.append("genre", e.toString()),
            m.append("choice", r.toString()),
            m.append("sessionid", u.TS.SESSIONID);
          let _ = null;
          try {
            const s = await o().post(
              u.TS.STORE_BASE_URL + "promotion/ajaxclaimstickerforgenre",
              m,
              { withCredentials: !0, cancelToken: t?.token },
            );
            if (200 == s?.status && 1 == s.data?.success && s.data?.results) {
              const t = s.data.results,
                m = this.m_mapGenreToStickerResponse.get(e);
              return (
                (m.choice = r),
                (m.sticker_def = t.claimed_sticker_def),
                (m.has_completed_story = t.has_completed_story),
                s.data.success
              );
            }
            _ = { response: s };
          } catch (e) {
            _ = e;
          }
          const s = (0, S.H)(_);
          return (
            console.error("Could not make claim on genre", e, s.strErrorMsg, s),
            _?.data?.success || 2
          );
        }
      }
      function n() {
        return i.Get().GetStoryBadgeGranted();
      }
      function c() {
        return i.Get().GetLocalizedStoryHeader();
      }
      function l() {
        return i.Get().GetLocalizedStoryHeaderMobile();
      }
      function g() {
        return i.Get().GetAllGenreChoices();
      }
      function d(e) {
        const r = a.useRef(null);
        a.useEffect(() => {
          const e = o().CancelToken.source();
          return (r.current = e), () => e.cancel("useGenreClaim: unmounting");
        }, []),
          i.Get().LoadClaimForGenre(e, r.current);
        return [
          i.Get().GetClaimForGenre(e),
          async (t) => {
            await i.Get().MakeClaimForGenre(e, t, r.current);
          },
        ];
      }
      (0, m.Cg)([s.sH], i.prototype, "m_mapGenreToStickerResponse", void 0),
        (0, m.Cg)([s.sH], i.prototype, "m_eStoryBadgeGranted", void 0);
      const y = 1658760;
      function P(e) {
        const [r] = d(e);
        return r?.sticker_def
          ? `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${y}/${r.sticker_def.item_image_small}`
          : null;
      }
      function p(e) {
        return !e || e >= B.length ? null : B[e];
      }
      function h() {
        return B.slice(1);
      }
      const B = [
        null,
        {
          eGenre: 1,
          strPageTitle: "#Summer21_Story_Action_Title",
          strPageNumber: "#Summer21_Story_Action_Pg",
          strPageText: "#Summer21_Story_Action_Intro",
          strOptionA: "#Summer21_Story_Action_Choice1",
          strPageNumberA: "#Summer21_Story_Action_Outcome1_Pg",
          strResultA: "#Summer21_Story_Action_Outcome1",
          strOptionB: "#Summer21_Story_Action_Choice2",
          strPageNumberB: "#Summer21_Story_Action_Outcome2_Pg",
          strResultB: "#Summer21_Story_Action_Outcome2",
          strSalePage: "summer2021_action",
          strBackgroundColor: "#c5483f",
          strGenreName: "#Summer21_Story_Action_Genre",
        },
        {
          eGenre: 2,
          strPageTitle: "#Summer21_Story_Adventure_Title",
          strPageNumber: "#Summer21_Story_Adventure_Pg",
          strPageText: "#Summer21_Story_Adventure_Intro",
          strOptionA: "#Summer21_Story_Adventure_Choice1",
          strPageNumberA: "#Summer21_Story_Adventure_Outcome1_Pg",
          strResultA: "#Summer21_Story_Adventure_Outcome1",
          strOptionB: "#Summer21_Story_Adventure_Choice2",
          strPageNumberB: "#Summer21_Story_Adventure_Outcome2_Pg",
          strResultB: "#Summer21_Story_Adventure_Outcome2",
          strSalePage: "summer2021_adventure_casual",
          strBackgroundColor: "#657F5B",
          strGenreName: "#Summer21_Story_Adventure_Genre",
        },
        {
          eGenre: 3,
          strPageTitle: "#Summer21_Story_RPG_Title",
          strPageNumber: "#Summer21_Story_RPG_Pg",
          strPageText: "#Summer21_Story_RPG_Intro",
          strOptionA: "#Summer21_Story_RPG_Choice1",
          strPageNumberA: "#Summer21_Story_RPG_Outcome1_Pg",
          strResultA: "#Summer21_Story_RPG_Outcome1",
          strOptionB: "#Summer21_Story_RPG_Choice2",
          strPageNumberB: "#Summer21_Story_RPG_Outcome2_Pg",
          strResultB: "#Summer21_Story_RPG_Outcome2",
          strSalePage: "summer2021_rpg",
          strBackgroundColor: "#bf673b",
          strGenreName: "#Summer21_Story_RPG_Genre",
        },
        {
          eGenre: 4,
          strPageTitle: "#Summer21_Story_Strategy_Title",
          strPageNumber: "#Summer21_Story_Strategy_Pg",
          strPageText: "#Summer21_Story_Strategy_Intro",
          strOptionA: "#Summer21_Story_Strategy_Choice1",
          strPageNumberA: "#Summer21_Story_Strategy_Outcome1_Pg",
          strResultA: "#Summer21_Story_Strategy_Outcome1",
          strOptionB: "#Summer21_Story_Strategy_Choice2",
          strPageNumberB: "#Summer21_Story_Strategy_Outcome2_Pg",
          strResultB: "#Summer21_Story_Strategy_Outcome2",
          strSalePage: "summer2021_strategy",
          strBackgroundColor: "#E3B343",
          strGenreName: "#Summer21_Story_Strategy_Genre",
        },
        {
          eGenre: 5,
          strPageTitle: "#Summer21_Story_Sim_Title",
          strPageNumber: "#Summer21_Story_Sim_Pg",
          strPageText: "#Summer21_Story_Sim_Intro",
          strOptionA: "#Summer21_Story_Sim_Choice1",
          strPageNumberA: "#Summer21_Story_Sim_Outcome1_Pg",
          strResultA: "#Summer21_Story_Sim_Outcome1",
          strOptionB: "#Summer21_Story_Sim_Choice2",
          strPageNumberB: "#Summer21_Story_Sim_Outcome2_Pg",
          strResultB: "#Summer21_Story_Sim_Outcome2",
          strSalePage: "summer2021_simulation",
          strBackgroundColor: "#437882",
          strGenreName: "#Summer21_Story_Sim_Genre",
        },
        {
          eGenre: 6,
          strPageTitle: "#Summer21_Story_Sports_Title",
          strPageNumber: "#Summer21_Story_Sports_Pg",
          strPageText: "#Summer21_Story_Sports_Intro",
          strOptionA: "#Summer21_Story_Sports_Choice1",
          strPageNumberA: "#Summer21_Story_Sports_Outcome1_Pg",
          strResultA: "#Summer21_Story_Sports_Outcome1",
          strOptionB: "#Summer21_Story_Sports_Choice2",
          strPageNumberB: "#Summer21_Story_Sports_Outcome2_Pg",
          strResultB: "#Summer21_Story_Sports_Outcome2",
          strSalePage: "summer2021_sports_racing",
          strBackgroundColor: "#E3B343",
          strGenreName: "#Summer21_Story_Sports_Genre",
        },
        {
          eGenre: 7,
          strPageTitle: "#Summer21_Story_Horror_Title",
          strPageNumber: "#Summer21_Story_Horror_Pg",
          strPageText: "#Summer21_Story_Horror_Intro",
          strOptionA: "#Summer21_Story_Horror_Choice1",
          strPageNumberA: "#Summer21_Story_Horror_Outcome1_Pg",
          strResultA: "#Summer21_Story_Horror_Outcome1",
          strOptionB: "#Summer21_Story_Horror_Choice2",
          strPageNumberB: "#Summer21_Story_Horror_Outcome2_Pg",
          strResultB: "#Summer21_Story_Horror_Outcome2",
          strSalePage: "summer2021_horror",
          strBackgroundColor: "#657F5B",
          strGenreName: "#Summer21_Story_Horror_Genre",
        },
        {
          eGenre: 8,
          strPageTitle: "#Summer21_Story_Survival_Title",
          strPageNumber: "#Summer21_Story_Survival_Pg",
          strPageText: "#Summer21_Story_Survival_Intro",
          strOptionA: "#Summer21_Story_Survival_Choice1",
          strPageNumberA: "#Summer21_Story_Survival_Outcome1_Pg",
          strResultA: "#Summer21_Story_Survival_Outcome1",
          strOptionB: "#Summer21_Story_Survival_Choice2",
          strPageNumberB: "#Summer21_Story_Survival_Outcome2_Pg",
          strResultB: "#Summer21_Story_Survival_Outcome2",
          strSalePage: "summer2021_survival",
          strBackgroundColor: "#bf673b",
          strGenreName: "#Summer21_Story_Survival_Genre",
        },
        {
          eGenre: 9,
          strPageTitle: "#Summer21_Story_Open_Title",
          strPageNumber: "#Summer21_Story_Open_Pg",
          strPageText: "#Summer21_Story_Open_Intro",
          strOptionA: "#Summer21_Story_Open_Choice1",
          strPageNumberA: "#Summer21_Story_Open_Outcome1_Pg",
          strResultA: "#Summer21_Story_Open_Outcome1",
          strOptionB: "#Summer21_Story_Open_Choice2",
          strPageNumberB: "#Summer21_Story_Open_Outcome2_Pg",
          strResultB: "#Summer21_Story_Open_Outcome2",
          strSalePage: "summer2021_open_world",
          strBackgroundColor: "#657F5B",
          strGenreName: "#Summer21_Story_Open_Genre",
        },
        {
          eGenre: 10,
          strPageTitle: "#Summer21_Story_SciFi_Title",
          strPageNumber: "#Summer21_Story_SciFi_Pg",
          strPageText: "#Summer21_Story_SciFi_Intro",
          strOptionA: "#Summer21_Story_SciFi_Choice1",
          strPageNumberA: "#Summer21_Story_SciFi_Outcome1_Pg",
          strResultA: "#Summer21_Story_SciFi_Outcome1",
          strOptionB: "#Summer21_Story_SciFi_Choice2",
          strPageNumberB: "#Summer21_Story_SciFi_Outcome2_Pg",
          strResultB: "#Summer21_Story_SciFi_Outcome2",
          strSalePage: "summer2021_scifi",
          strBackgroundColor: "#986280",
          strGenreName: "#Summer21_Story_SciFi_Genre",
        },
        {
          eGenre: 11,
          strPageTitle: "#Summer21_Story_Mystery_Title",
          strPageNumber: "#Summer21_Story_Mystery_Pg",
          strPageText: "#Summer21_Story_Mystery_Intro",
          strOptionA: "#Summer21_Story_Mystery_Choice1",
          strPageNumberA: "#Summer21_Story_Mystery_Outcome1_Pg",
          strResultA: "#Summer21_Story_Mystery_Outcome1",
          strOptionB: "#Summer21_Story_Mystery_Choice2",
          strPageNumberB: "#Summer21_Story_Mystery_Outcome2_Pg",
          strResultB: "#Summer21_Story_Mystery_Outcome2",
          strSalePage: "summer2021_mystery",
          strBackgroundColor: "#B24939",
          strGenreName: "#Summer21_Story_Mystery_Genre",
        },
        {
          eGenre: 12,
          strPageTitle: "#Summer21_Story_Space_Title",
          strPageNumber: "#Summer21_Story_Space_Pg",
          strPageText: "#Summer21_Story_Space_Intro",
          strOptionA: "#Summer21_Story_Space_Choice1",
          strPageNumberA: "#Summer21_Story_Space_Outcome1_Pg",
          strResultA: "#Summer21_Story_Space_Outcome1",
          strOptionB: "#Summer21_Story_Space_Choice2",
          strPageNumberB: "#Summer21_Story_Space_Outcome2_Pg",
          strResultB: "#Summer21_Story_Space_Outcome2",
          strSalePage: "summer2021_space",
          strBackgroundColor: "#437882",
          strGenreName: "#Summer21_Story_Space_Genre",
        },
        {
          eGenre: 13,
          strPageTitle: "#Summer21_Story_Roguelike_Title",
          strPageNumber: "#Summer21_Story_Roguelike_Pg",
          strPageText: "#Summer21_Story_Roguelike_Intro",
          strOptionA: "#Summer21_Story_Roguelike_Choice1",
          strPageNumberA: "#Summer21_Story_Roguelike_Outcome1_Pg",
          strResultA: "#Summer21_Story_Roguelike_Outcome1",
          strOptionB: "#Summer21_Story_Roguelike_Choice2",
          strPageNumberB: "#Summer21_Story_Roguelike_Outcome2_Pg",
          strResultB: "#Summer21_Story_Roguelike_Outcome2",
          strSalePage: "summer2021_roguelike",
          strBackgroundColor: "#B24939",
          strGenreName: "#Summer21_Story_Roguelike_Genre",
        },
        {
          eGenre: 14,
          strPageTitle: "#Summer21_Story_Anime_Title",
          strPageNumber: "#Summer21_Story_Anime_Pg",
          strPageText: "#Summer21_Story_Anime_Intro",
          strOptionA: "#Summer21_Story_Anime_Choice1",
          strPageNumberA: "#Summer21_Story_Anime_Outcome1_Pg",
          strResultA: "#Summer21_Story_Anime_Outcome1",
          strOptionB: "#Summer21_Story_Anime_Choice2",
          strPageNumberB: "#Summer21_Story_Anime_Outcome2_Pg",
          strResultB: "#Summer21_Story_Anime_Outcome2",
          strSalePage: "summer2021_anime",
          strBackgroundColor: "#986280",
          strGenreName: "#Summer21_Story_Anime_Genre",
        },
      ];
      function N() {
        a.useEffect(() => {
          const e = document.createElement("link");
          (e.rel = "stylesheet"),
            (e.href =
              "https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP&family=Noto+Serif+KR&family=Noto+Serif+SC:wght@500&family=Noto+Serif+TC&family=Jomhuria&&family=Big+Shoulders+Display:wght@800&display=swap"),
            document.head.appendChild(e);
        }, []);
      }
    },
    90428: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => u });
      var m = t(7850),
        _ = t(90444),
        o = t(52038),
        s = t(61859),
        a = t(78327),
        S = t(42919);
      const u = () => {
          (0, _.PB)();
          const e = (0, _.iG)(),
            r = (0, _.E4)(),
            t = (0, _.cZ)(),
            u = (0, _.ib)(),
            c = [],
            l = [];
          r.forEach((r) => {
            const t = r.eGenre,
              _ = a.TS.STORE_BASE_URL + "sale/" + r.strSalePage;
            let o = (0, s.PP)(
              "#Summer_21_Story_Enter",
              (0, m.jsx)("span", { children: (0, s.we)(r.strGenreName) }),
            );
            if (e.has(t)) {
              let s = "";
              1 == e.get(t).choice
                ? (s = r.strResultA + "_Summary")
                : 2 == e.get(t).choice && (s = r.strResultB + "_Summary"),
                c.push(
                  (0, m.jsx)(
                    n,
                    {
                      strSubheader: o,
                      bClaimed: !0,
                      strBackgroundColor: r.strBackgroundColor,
                      eGenre: r.eGenre,
                      strTitle: r.strPageTitle,
                      strSaleURL: _,
                      strSummary: s,
                    },
                    t,
                  ),
                );
            } else {
              let e = "";
              l.length || (e = "next"),
                l.push(
                  (0, m.jsx)(
                    n,
                    {
                      strID: e,
                      strSubheader: o,
                      strBackgroundColor: "#7C5F5A",
                      bClaimed: !1,
                      eGenre: r.eGenre,
                      strTitle: r.strPageTitle,
                      strSaleURL: _,
                      strSummary: "#Summer_21_Story_Next_Intro",
                    },
                    t,
                  ),
                );
            }
          });
          let g = c.concat(l);
          return (0, m.jsx)("div", {
            className: (0, o.A)(S.PageOuterContainer, a.TS.LANGUAGE),
            children: (0, m.jsxs)("div", {
              className: S.PageInnerContainer,
              children: [
                (0, m.jsxs)("a", {
                  href: a.TS.STORE_BASE_URL,
                  children: [
                    t &&
                      (0, m.jsx)("img", {
                        className: S.LocalizedHeaderImg,
                        src: t,
                      }),
                    u &&
                      (0, m.jsx)("img", {
                        className: S.LocalizedHeaderMobileImg,
                        src: u,
                      }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: S.PageInnerBG,
                  children: [
                    (0, m.jsxs)("div", {
                      className: S.PageInnerContent,
                      children: [
                        (0, m.jsxs)("div", {
                          className: S.HeaderContainer,
                          children: [
                            (0, m.jsx)("div", {
                              className: S.HeaderPrefix,
                              children: (0, s.we)(
                                "#Summer_21_Overview_Title_Prefix",
                              ),
                            }),
                            (0, s.we)("#Summer_21_Overview_Title"),
                          ],
                        }),
                        (0, m.jsx)("div", {
                          className: (0, o.A)(S.HeaderDesc, S.Noto),
                          children: (0, s.we)(
                            "#Summer_21_Overview_Description1",
                          ),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, o.A)(S.HeaderDesc, S.Noto),
                          children: (0, s.we)(
                            "#Summer_21_Overview_Description3",
                          ),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, o.A)(S.HeaderDesc, S.Noto),
                          children: (0, s.we)(
                            "#Summer_21_Overview_Description4",
                          ),
                        }),
                        (0, m.jsxs)("a", {
                          id: "wallpapers",
                          href:
                            a.TS.MEDIA_CDN_URL +
                            "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                          className: (0, o.A)(
                            S.HeaderDesc,
                            S.Noto,
                            S.Wallpapers,
                          ),
                          children: [
                            "*",
                            (0, s.we)("#Summer21_Story_DownloadWallpaper"),
                          ],
                        }),
                        (0, m.jsx)("div", {
                          className: (0, o.A)(S.HeaderIntro, S.Noto),
                          children: (0, s.we)(
                            "#Summer_21_Overview_Description2",
                          ),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, o.A)(S.HeaderIntro, S.Noto),
                          children: (0, s.we)("#Summer_21_Story_Intro"),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, o.A)(S.ListHeader, S.Noto),
                          children: (0, s.we)("#Summer_21_Story_Next"),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, o.A)(S.GenreListContainer),
                          children: g,
                        }),
                      ],
                    }),
                    (0, m.jsx)(i, {}),
                  ],
                }),
              ],
            }),
          });
        },
        i = (e) => {
          const r = (0, _._l)();
          let t;
          if (51 == r)
            t = {
              badge_name: "#Summer21_Badge_Outcome1_Title",
              badge_desc: "#Summer21_Badge_Outcome1_Description",
              badge_class: S.Badge_51,
            };
          else if (52 == r)
            t = {
              badge_name: "#Summer21_Badge_Outcome2_Title",
              badge_desc: "#Summer21_Badge_Outcome2_Description",
              badge_class: S.Badge_52,
            };
          else if (53 == r)
            t = {
              badge_name: "#Summer21_Badge_Outcome3_Title",
              badge_desc: "#Summer21_Badge_Outcome3_Description",
              badge_class: S.Badge_53,
            };
          else if (54 == r)
            t = {
              badge_name: "#Summer21_Badge_Outcome4_Title",
              badge_desc: "#Summer21_Badge_Outcome4_Description",
              badge_class: S.Badge_54,
            };
          else {
            if (55 != r) return null;
            t = {
              badge_name: "#Summer21_Badge_Outcome5_Title",
              badge_desc: "#Summer21_Badge_Outcome5_Description",
              badge_class: S.Badge_55,
            };
          }
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)("div", {
                className: (0, o.A)(
                  S.HeaderDesc,
                  S.Noto,
                  S.CompletedSummaryText,
                ),
                children: (0, s.we)("#Summer21_Badge_Unlocked_Description"),
              }),
              (0, m.jsxs)("div", {
                id: "badge",
                className: (0, o.A)(S.BadgeContainer, S.Noto),
                children: [
                  (0, m.jsxs)("div", {
                    className: S.Column,
                    children: [
                      (0, m.jsx)("div", {
                        className: S.SubHeader,
                        children: (0, s.we)("#Summer21_Badge_Prelude"),
                      }),
                      (0, m.jsx)("div", {
                        className: S.BadgeName,
                        children: (0, s.we)(t.badge_name),
                      }),
                      (0, m.jsx)("div", {
                        className: S.BadgeDesc,
                        children: (0, s.we)(t.badge_desc),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: S.Column,
                    children: [
                      (0, m.jsx)("a", {
                        className: (0, o.A)(S.BadgeImg, t.badge_class),
                        href: a.TS.COMMUNITY_BASE_URL + "my/badges/" + r,
                      }),
                      (0, m.jsx)("div", {
                        className: S.BadgeText,
                        children: (0, s.we)("#Summer21_Badge_Congrats1"),
                      }),
                      (0, m.jsx)("div", {
                        className: S.BadgeText,
                        children: (0, s.we)("#Summer21_Badge_Congrats2"),
                      }),
                      (0, m.jsx)("a", {
                        className: S.BadgeLink,
                        href: a.TS.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                        children: (0, s.we)("#Summer21_Badge_View"),
                      }),
                      (0, m.jsx)("a", {
                        className: S.FrameExample,
                        href: a.TS.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)("div", {
                className: (0, o.A)(S.TheEnd, S.Noto),
                children: (0, s.we)("#Summer21_Story_End"),
              }),
            ],
          });
        },
        n = (e) => {
          const r = (0, _.PU)(e.eGenre);
          return (0, m.jsxs)("a", {
            id: e.strID,
            href: e.strSaleURL,
            style: { backgroundColor: `${e.strBackgroundColor}` },
            className: (0, o.A)(S.GenreContainer, S.Claimed),
            children: [
              (0, m.jsxs)("div", {
                className: S.LeftColumn,
                children: [
                  (0, m.jsx)("div", {
                    className: (0, o.A)(S.GenreSubheader, S.Noto),
                    children: e.strSubheader,
                  }),
                  (0, m.jsx)("div", {
                    className: S.GenreTitle,
                    children: (0, s.we)(e.strTitle),
                  }),
                  (0, m.jsx)("div", {
                    className: (0, o.A)(S.GenreStory, S.Noto),
                    children: (0, s.we)(e.strSummary),
                  }),
                ],
              }),
              (0, m.jsxs)("div", {
                className: S.RightColumn,
                children: [
                  r &&
                    (0, m.jsx)("div", {
                      className: S.StickerPreview,
                      style: { backgroundImage: `url(${r})` },
                    }),
                  !e.bClaimed &&
                    (0, m.jsx)("div", {
                      className: (0, o.A)(S.StickerPreview, S.Unclaimed),
                    }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
