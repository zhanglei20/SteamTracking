/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4268],
  {
    58962: (e) => {
      e.exports = {
        BuildNoteCtn: "cZP-58cHflQCLG6CHvwKG",
        SplitPanel: "_2TINcVLR2kmBWAVOOtG0cF",
        DescriptionPanel: "_2N1THxFjyQb75AY6b7SpZX",
        RightPanel: "EN_YgGmWh95hbxn-2pmD5",
        BuildTitle: "_-2I9CETSXyA66SWcV5iEv",
        BuildSubTitle: "_2lG_bxKnQtJIUYWD19KGoy",
        InfoText: "_3-WB4tkYQI0EftRXikEI4t",
        EditTopBar: "bJHHP4182a1PZlP-rurGN",
        LangPicker: "_1P7AcuhlijPijxLhFPngFp",
        EditTitle: "_2o-fIjMrt8xP5BFnQuwu_p",
        SubmitButtonCtn: "Vj8rXBuNz4JT-2Y8QgK36",
        BBCodeEditor: "_2gIbttbPBWi6pXxhPzfmD5",
        ErrorMsg: "_2yUUHPTbyDbnoX2gCflGh-",
        SteamChinaMsg: "_3EFpCoez_gInT6uBoW-MLR",
        PreviewHeader: "_3GODeMU9hr5NrqreP7TL3E",
        SubmitPanel: "_2WB1wNg29mL3fTTeWX9HJU",
        SubmitThrobber: "_2rWSmSZSQLbv7D2bBBc6PO",
        SuccessPanel: "_3jQwVKtYzS0V9pBPwJTUW6",
        ViewEventButton: "_3zUBg8T8MJnKb-eS1s3sK6",
        FailedPanel: "_1H8COg73O0FBzdyTrSg2pu",
        FailedText: "pu4VYcHm6vt6RCeDA73L0",
        FailedButton: "soZLp0uToUv-yRJFwckG9",
      };
    },
    76483: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => G });
      var i = n(7850),
        a = n(41735),
        s = n.n(a),
        r = n(90626),
        l = n(22837),
        o = n(2160),
        d = n(4807),
        c = n(17720),
        u = n(68033),
        h = n(6205),
        g = n(16676),
        m = n(84811),
        p = n(63232),
        _ = n(1909),
        S = n(25228),
        B = n(9154),
        x = n(738),
        f = n(22797),
        P = n(62490),
        j = n(52038),
        w = n(61859),
        N = n(87669),
        v = n(68797),
        T = n(78327),
        b = n(58962);
      function L(e, t, n) {
        const i = e && e.length > n ? [...e] : (0, P.$Y)(e || [], n + 1, "");
        return (i[n] = t), i;
      }
      function E(e, t) {
        return (e && e.length > t && e[t]) || "";
      }
      function C(e, t) {
        let n = !1,
          i = !1;
        for (let a = 0; a < 31; a++) {
          const s = E(e, a).trim(),
            r = E(t, a).trim();
          if (!s && !r) continue;
          const o = (0, w.we)("#Language_" + (0, l.Lg)(a));
          if (((n = !0), !s))
            return (0, w.we)("#BuildNotes_Error_MissingTitle", o);
          if (!r) return (0, w.we)("#BuildNotes_Error_MissingDescription", o);
          if (s.length > d.dm)
            return (0, w.we)("#BuildNotes_Error_TitleTooLong", o);
          if (r.length > 32768)
            return (0, w.we)("#BuildNotes_Error_DescriptionTooLong", o);
          0 === a && (i = !0);
        }
        return n
          ? i
            ? null
            : (0, w.we)("#BuildNotes_Error_NoEnglishProvided")
          : (0, w.we)("#BuildNotes_Error_NoLanguagesProvided");
      }
      class D {
        m_nBuildVersion;
        m_bSteamChina;
        m_strBuildBranch;
        static s_Singleton;
        static Get() {
          return (
            this.s_Singleton ||
              ((this.s_Singleton = new D()), this.s_Singleton.Init()),
            this.s_Singleton
          );
        }
        Init() {
          const e = (0, T.Tc)("build_notes", "application_config");
          (this.m_nBuildVersion = e?.build_version || 0),
            (this.m_bSteamChina = e?.steam_china || !1),
            (this.m_strBuildBranch = e?.build_branch || ""),
            (this.m_strBuildBranch = this.m_strBuildBranch
              .trim()
              .toLocaleLowerCase()),
            "default" === this.m_strBuildBranch && (this.m_strBuildBranch = "");
        }
        GetPostedBuildVersion() {
          return this.m_nBuildVersion;
        }
        BShouldShowPatchNotesEditor() {
          return this.GetPostedBuildVersion() > 0;
        }
        BCanSubmitSteamChinaPatchNotes() {
          return this.m_bSteamChina;
        }
        GetBuildBranch() {
          return this.m_strBuildBranch;
        }
      }
      function G(e) {
        const [t, n] = r.useState(0),
          [a, l] = r.useState(null),
          [u, h] = r.useState(null),
          [p, _] = r.useState(null),
          [S, B] = r.useState("editing"),
          [x, f] = r.useState(null);
        if (!D.Get().BShouldShowPatchNotesEditor()) return null;
        const P = (e) => n(e),
          j = (e) => Boolean(E(a, e) || E(u, e)),
          N = D.Get().BCanSubmitSteamChinaPatchNotes()
            ? [o.TU.k_ESteamRealmChina, o.TU.k_ESteamRealmGlobal]
            : [o.TU.k_ESteamRealmGlobal],
          G = C(a, u),
          U =
            T.TS.COMMUNITY_BASE_URL +
            "ogg/" +
            e.appId +
            "/partnerevents/create/";
        return (0, i.jsxs)(m.tH, {
          children: [
            (0, i.jsxs)("div", {
              className: b.BuildNoteCtn,
              children: [
                (0, i.jsx)("div", {
                  className: b.BuildTitle,
                  children: (0, w.we)(
                    "#BuildNotes_Title",
                    D.Get().GetPostedBuildVersion(),
                    D.Get().GetBuildBranch() || "default",
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: b.SplitPanel,
                  children: [
                    (0, i.jsxs)("div", {
                      className: b.DescriptionPanel,
                      children: [
                        (0, i.jsx)("div", {
                          className: b.BuildSubTitle,
                          children: (0, w.we)("#BuildNotes_SubTitle"),
                        }),
                        (0, i.jsx)("div", {
                          className: b.InfoText,
                          children: (0, w.we)("#BuildNotes_Desc1"),
                        }),
                        (0, i.jsx)("div", {
                          className: b.InfoText,
                          children: (0, w.PP)("#BuildNotes_Desc2"),
                        }),
                        (0, i.jsx)("a", {
                          href: U,
                          children: (0, i.jsx)(g.$n, {
                            children: (0, w.we)("#BuildNotes_OpenFullEditor"),
                          }),
                        }),
                      ],
                    }),
                    "editing" === S &&
                      (0, i.jsx)(I, {
                        sError: G,
                        eLanguage: t,
                        realms: N,
                        fnHasLanguage: j,
                        fnSetLanguage: P,
                        fnGetTitle: (e) => E(a, e),
                        fnSetTitle: (e, t) => l(L(a, t, e)),
                        fnGetDescription: (e) => E(u, e),
                        fnSetDescription: (e, t) => h(L(u, t, e)),
                        fnOnPreviewEvent: () =>
                          _(
                            (function (e, t) {
                              let n = new d.lh();
                              (n.GID = "PreviewPartnerEventRow_0"),
                                (n.clanSteamID = new c.b(T.iA.steamid)),
                                (n.postTime = Date.now() / 1e3),
                                (n.startTime = Date.now() / 1e3),
                                (n.type = 12);
                              for (let i = 0; i < 31; i++)
                                n.name.set(i, E(e, i)),
                                  n.description.set(i, E(t, i));
                              return n;
                            })(a, u),
                          ),
                        fnApplyLoc: (e, t) => {
                          const n = new Array();
                          let i = a,
                            s = u;
                          for (const a of t) {
                            const t = e.GetLocalization("Title", a) || "",
                              r = e.GetLocalization("Description", a) || "";
                            (t || r) && n.push(a),
                              t && (i = L(i, t, a)),
                              r && (s = L(s, r, a));
                          }
                          return l(i), h(s), n;
                        },
                      }),
                    "submitting" === S && (0, i.jsx)(O, {}),
                    "failed" === S &&
                      (0, i.jsx)(R, { fnOnReturnToEditor: () => B("editing") }),
                    "submitted" === S &&
                      (0, i.jsx)(A, { appId: e.appId, eventGid: x }),
                  ],
                }),
              ],
            }),
            Boolean(p && "editing" === S) &&
              (0, i.jsx)(y, {
                event: p,
                eLanguage: t,
                realms: N,
                fnOnClose: () => _(null),
                fnOnSubmitEvent: async () => {
                  _(null), B("submitting");
                  const t = await (async function (e, t, n) {
                    if (C(t, n)) return null;
                    const i = Boolean(E(t, 29).trim()),
                      a = new FormData();
                    a.append("sessionid", T.TS.SESSIONID),
                      a.append("appid", "" + e),
                      a.append("post_steam_china", "" + i),
                      a.append("titles", JSON.stringify(t)),
                      a.append("descriptions", JSON.stringify(n)),
                      a.append(
                        "build_id",
                        "" + D.Get().GetPostedBuildVersion(),
                      ),
                      a.append("build_branch", D.Get().GetBuildBranch());
                    const r =
                      T.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxpublishpatchnotes";
                    try {
                      const e = await s().post(r, a, { withCredentials: !0 });
                      if (1 == e?.data?.success) return e.data;
                      console.error(
                        "buildpatchnotes: OnSubmitCreateEvent error code  " +
                          e?.data?.success +
                          " msg: " +
                          e?.data?.msg,
                      );
                    } catch (e) {
                      const t = (0, v.H)(e);
                      console.error(
                        "buildpatchnotes: OnSubmitCreateEvent " + t.strErrorMsg,
                        t,
                      );
                    }
                    return null;
                  })(e.appId, a, u);
                  t
                    ? (f(t.clan_event_gid),
                      (function () {
                        const e = new URLSearchParams(window.location.search);
                        e.delete("submittedbuild"), e.delete("buildbranch");
                        const t = e.toString(),
                          n =
                            window.location.origin +
                            window.location.pathname +
                            (t ? "?" + t : "") +
                            window.location.hash;
                        window.history.replaceState({}, "", n);
                      })(),
                      B("submitted"))
                    : B("failed");
                },
                fnHasLanguage: j,
                fnSetLanguage: P,
              }),
          ],
        });
      }
      const I = (e) => {
          const {
            sError: t,
            eLanguage: n,
            realms: a,
            fnHasLanguage: s,
            fnSetLanguage: r,
            fnGetTitle: l,
            fnSetTitle: c,
            fnGetDescription: m,
            fnSetDescription: p,
            fnOnPreviewEvent: B,
            fnApplyLoc: f,
          } = e;
          let P = "";
          if (a.includes(o.TU.k_ESteamRealmChina)) {
            const e = "" !== l(29).trim();
            P = (0, w.we)(
              e
                ? "#BuildNotes_SteamChina_Provided"
                : "#BuildNotes_SteamChina_NotProvided",
            );
          }
          return (0, i.jsxs)("div", {
            className: b.RightPanel,
            children: [
              (0, i.jsxs)("div", {
                className: b.EditTopBar,
                children: [
                  (0, i.jsx)("div", {
                    className: b.EditTitle,
                    children: (0, w.we)("#BuildNotes_PatchnotesTitle"),
                  }),
                  (0, i.jsxs)("div", {
                    className: b.LangPicker,
                    children: [
                      (0, i.jsx)(g.$n, {
                        onClick: () => {
                          const e = new N.G(),
                            t = (0, w.we)("#BuildNotes_SampleTitle"),
                            n = (0, w.we)("#BuildNotes_SampleDescription");
                          for (let i = 0; i < 31; i++)
                            e.SetLocalization("Title", i, t),
                              e.SetLocalization("Description", i, n);
                          (0, x.pg)(
                            (0, i.jsx)(S.zZ, {
                              sampleLocData: e,
                              sampleFilename: "patchnote_loc_sample",
                              fnOnImportLocData: f,
                            }),
                            window,
                          );
                        },
                        children: (0, w.we)("#BuildNotes_ImportLocalization"),
                      }),
                      (0, i.jsx)(_.Ng, {
                        selectedLang: n,
                        fnOnLanguageChanged: r,
                        fnLangHasData: s,
                        realms: a,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(g.pd, {
                value: l(n),
                placeholder: (0, w.we)("#BuildNotes_TitlePlaceholder"),
                onChange: (e) => c(n, e.currentTarget.value),
                maxLength: d.dm,
              }),
              (0, i.jsx)("div", {
                className: b.EditTitle,
                children: (0, w.we)("#BuildNotes_PatchnotesDesc"),
              }),
              (0, i.jsx)(h.I, {
                fnGetCurText: () => m(n),
                fnOnTextChange: (e) => p(n, e.currentTarget.value),
                fnSetText: (e) => p(n, e),
                strPlaceholder: (0, w.we)("#BuildNotes_DescPlaceholder"),
                emoticonStore: u.A,
                bSupportHTMLImport: !0,
                showFormatHelp: "PartnerEvents",
                classNameForTextArea: b.BBCodeEditor,
              }),
              (0, i.jsxs)("div", {
                className: b.SubmitButtonCtn,
                children: [
                  !Boolean(t) &&
                    (0, i.jsx)(g.jn, {
                      onClick: B,
                      children: (0, w.we)("#BuildNotes_Preview"),
                    }),
                  Boolean(t) &&
                    (0, i.jsx)("div", { className: b.ErrorMsg, children: t }),
                  Boolean(!t && P) &&
                    (0, i.jsx)("div", {
                      className: b.SteamChinaMsg,
                      children: P,
                    }),
                ],
              }),
            ],
          });
        },
        y = (e) => {
          const {
            event: t,
            eLanguage: n,
            realms: a,
            fnOnClose: s,
            fnOnSubmitEvent: r,
            fnHasLanguage: l,
            fnSetLanguage: o,
          } = e;
          return (0, i.jsxs)(B.of, {
            children: [
              (0, i.jsxs)("div", {
                className: b.PreviewHeader,
                children: [
                  (0, i.jsx)(_.Ng, {
                    selectedLang: n,
                    fnOnLanguageChanged: o,
                    fnFilterLanguage: l,
                    realms: a,
                  }),
                  (0, i.jsxs)("div", {
                    className: b.SubmitButtonCtn,
                    children: [
                      (0, i.jsx)(g.$n, {
                        onClick: s,
                        children: (0, w.we)("#BuildNotes_Close"),
                      }),
                      (0, i.jsx)(g.jn, {
                        onClick: r,
                        children: (0, w.we)("#BuildNotes_PostNotes"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                children: (0, i.jsx)(p.H, {
                  event: t,
                  fnClose: s,
                  langOverride: n,
                  isPreview: !0,
                }),
              }),
            ],
          });
        },
        O = (e) =>
          (0, i.jsxs)("div", {
            className: (0, j.A)(b.RightPanel, b.SubmitPanel),
            children: [
              (0, i.jsx)(f.t, { className: b.SubmitThrobber }),
              (0, i.jsx)("div", {
                className: b.SubmitText,
                children: (0, w.we)("#BuildNotes_Submitting"),
              }),
            ],
          }),
        R = (e) =>
          (0, i.jsxs)("div", {
            className: (0, j.A)(b.RightPanel, b.FailedPanel),
            children: [
              (0, i.jsx)("div", {
                className: b.FailedText,
                children: (0, w.we)("#BuildNotes_FailedDescription"),
              }),
              (0, i.jsx)("div", {
                className: b.FailedButton,
                children: (0, i.jsx)(g.$n, {
                  onClick: e.fnOnReturnToEditor,
                  children: (0, w.we)("#BuildNotes_ReturnToEditor"),
                }),
              }),
            ],
          }),
        A = (e) => {
          const { appId: t, eventGid: n } = e,
            a = `${T.TS.STORE_BASE_URL}news/app/${t}/view/${n}`;
          return (0, i.jsxs)("div", {
            className: (0, j.A)(b.RightPanel, b.SuccessPanel),
            children: [
              (0, i.jsx)("div", {
                className: b.SuccessText,
                children: (0, w.we)("#BuildNotes_Success"),
              }),
              (0, i.jsx)("a", {
                href: a,
                className: b.ViewEventButton,
                children: (0, i.jsx)(g.$n, {
                  children: (0, w.we)("#BuildNotes_ViewPublished"),
                }),
              }),
            ],
          });
        };
    },
    90197: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { SaleRoutes: () => B, default: () => x });
      var i = n(7850),
        a = n(97058),
        s = n(43527),
        r = n(17083),
        l = n(92757),
        o = n(14932),
        d = n(78327);
      class c {
        static s_PageStore;
        m_mapSalePage = new Map();
        m_rgUnmigratedSalesPage = new Array();
        GetUnmigratedSalesPages() {
          return this.m_rgUnmigratedSalesPage;
        }
        GetAllSalePages() {
          return Array.from(this.m_mapSalePage.values());
        }
        GetPageByID(e) {
          return this.m_mapSalePage.get(e);
        }
        static Get() {
          return (
            c.s_PageStore || ((c.s_PageStore = new c()), c.s_PageStore.Init()),
            c.s_PageStore
          );
        }
        Init() {
          let e = (0, d.Tc)("old_sale_pages", "application_config");
          this.ValidateStoreDefault(e) &&
            e.forEach((e) => {
              this.m_mapSalePage.set(e.pageid, e),
                e.migrated_clan_account_id ||
                  this.m_rgUnmigratedSalesPage.push(e);
            });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) && "string" == typeof t[0].pageid
          );
        }
      }
      var u = n(76684),
        h = n(22797),
        g = n(14446);
      function m(e) {
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("h2", { children: "Unmigrated Sales Pages" }),
            (0, i.jsx)("hr", {}),
            c
              .Get()
              .GetUnmigratedSalesPages()
              .map((e) => (0, i.jsx)(p, { pageid: e.pageid }, e.pageid)),
          ],
        });
      }
      function p(e) {
        let t = c.Get().GetPageByID(e.pageid);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("div", { children: t.pageid }),
            (0, i.jsx)(r.N_, {
              to: B.SaleMigrationPageDebug(t.pageid),
              children: "Debug Data",
            }),
          ],
        });
      }
      function _(e) {
        const { pageid: t } = e,
          n = c.Get().GetPageByID(t),
          a = (0, g.gS)(n.accountid);
        return a
          ? (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(r.N_, {
                  to: B.SaleMigrationTool(),
                  children: "< Return to Migration Toolset",
                }),
                (0, i.jsxs)("h2", { children: ["Debug: ", e.pageid] }),
                (0, i.jsx)("hr", {}),
                (0, i.jsxs)("div", { children: ["Name: ", n.display_name] }),
                (0, i.jsxs)("div", {
                  children: ["Creator: ", n.accountid, " - ", a.persona],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    "Last Modified: ",
                    n.last_modified,
                    Boolean(0 != n.last_modified) &&
                      (0, i.jsx)(u.K4, {
                        dateAndTime: n.last_modified,
                        bSingleLine: !0,
                      }),
                  ],
                }),
                (0, i.jsx)("h1", { children: "Sale Page Body Raw" }),
                (0, i.jsx)(o.G, { data: n }),
              ],
            })
          : (0, i.jsx)(h.t, { string: "Loading User Info" });
      }
      var S = n(34667);
      const B = {
        SaleDashboardView: () => "/(dashboard)?/",
        SaleMigrationTool: () => "/migration/",
        SaleMigrationPageDebug: (e) => `/migration/debug/${e}/`,
      };
      function x(e) {
        return (0, i.jsx)(r.Kd, {
          basename: (0, s.C)() + "sales/",
          children: (0, i.jsxs)(l.dO, {
            children: [
              (0, i.jsx)(l.qh, {
                exact: !0,
                path: s.B.DiagData(),
                render: (e) =>
                  (0, i.jsx)(o.z, { ...e, strConfigID: "application_config" }),
              }),
              (0, i.jsx)(l.qh, {
                exact: !0,
                path: B.SaleDashboardView(),
                component: S.h,
              }),
              (0, i.jsx)(l.qh, {
                exact: !0,
                path: B.SaleMigrationTool(),
                component: m,
              }),
              (0, i.jsx)(l.qh, {
                exact: !0,
                path: B.SaleMigrationPageDebug(":pageid"),
                render: (e) => (0, i.jsx)(_, { pageid: e.match.params.pageid }),
              }),
              (0, i.jsx)(l.qh, { component: a.a }),
            ],
          }),
        });
      }
    },
  },
]);
