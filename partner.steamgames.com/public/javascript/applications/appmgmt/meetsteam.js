/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    30565: (e) => {
      e.exports = {
        EventList: "_3iKeBOMuwqPC87BLxvCKll",
        EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
        EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
        Title: "_1bLTz07sQnRA0DjTpjXCza",
        StartDate: "_6accgtG1qR7tHFL1wnO58",
        TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
        ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
        CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
        CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
        Full: "ndEhtgivpXhCilYDnAAVe",
        MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
        MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
      };
    },
    34283: (e) => {
      e.exports = { ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_" };
    },
    85761: (e) => {
      e.exports = {
        Ctn: "_8n9wPNrWDu91tlwBW9bHt",
        Indicator: "_355XkH0xfIpJF1YsMX7I7k",
        EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
        EmailField: "_1E-g4exFlAQhvXDqspYTR0",
        RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
        RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
      };
    },
    13038: (e) => {
      e.exports = {
        Ctn: "_1olTwzPkPjzL36u0WgyDG0",
        Indicator: "_3d0cYrmQzzda_P3DQ994kX",
      };
    },
    30603: (e) => {
      e.exports = {
        ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
        Table: "_2JSoC65mCQdxh-B_srjUjf",
      };
    },
    36637: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => tn, default: () => nn });
      var a = n(43527),
        r = n(90626),
        l = n(17083),
        s = n(92757),
        i = n(11577),
        c = n(14932),
        o = n(97058),
        u = n(84811),
        m = n(95695),
        d = n.n(m),
        E = n(38135),
        g = n(45737),
        p = n.n(g),
        h = n(24484),
        _ = n(56545),
        v = n(85737),
        f = n(64753),
        S = n(20194),
        y = n(75233),
        I = n(41735),
        w = n.n(I),
        D = n(17720),
        A = n(78327),
        b = n(32179),
        C = n(21711);
      function N() {
        const [e] = r.useState(() =>
          (0, A.Tc)("events_list", "application_config"),
        );
        return e;
      }
      function T(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function M(e) {
        const t = `${A.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: A.TS.SESSIONID, partnerid: e },
          a = await w().get(t, { params: n });
        return a?.data?.data;
      }
      function B(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function P(e, t, n) {
        return (0, S.I)({
          queryKey: ["useMeetSteamGetAllRegistration", t, n],
          queryFn: async () => {
            const n = _.w.Init(v.q3);
            n.Body().set_clan_event_gid(t);
            const a = await v.ZK.GetRegistrations(e, n);
            return a.BSuccess()
              ? a
                  .Body()
                  .registrations()
                  .map((e) => e.toObject())
              : [];
          },
          enabled: null != t && 0 != n,
        });
      }
      var k = n(38390),
        R = n(50304),
        L = n(96001),
        G = n(16676),
        F = n(26161),
        O = n(78395),
        x = n(21869),
        $ = n(22797),
        z = n(26408),
        U = n(52038),
        j = n(61859),
        q = n(91675),
        Y = n(30470),
        W = n(30565),
        K = n.n(W),
        H = n(34283),
        V = n.n(H),
        J = n(68797),
        Q = n(9161),
        Z = n(65689),
        X = n(81393),
        ee = n(96059);
      class te {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            te.s_Singleton ||
              ((te.s_Singleton = new te()), te.s_Singleton.Init()),
            te.s_Singleton
          );
        }
        Init() {
          const e = (0, h.Tc)("store_feature_token", "application_config");
          (0, X.wT)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new ee.D(Y.TS.WEBAPI_BASE_URL, e));
        }
      }
      function ne() {
        return te.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      function ae(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null),
          [c, o] = r.useState(0),
          [u, d] = r.useState(""),
          [E, g] = r.useState(""),
          [p, h] = r.useState(!1),
          _ = ne(),
          v = (0, S.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, c],
            queryFn: async () => {
              const e = {
                  steamid: D.b.InitFromAccountID(c).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await Z.Nl.GetUserActionData(_, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(n) && c > 0,
          });
        r.useEffect(() => {
          v.isLoading ||
            (v.isSuccess &&
              (d(v.data.partner_id ? v.data.partner_id.toString() : ""),
              g(v.data.email_override ?? ""),
              h(v.data.allow_registration_if_full ?? !1)));
        }, [v.isLoading, v.isSuccess, v.data]);
        return r.createElement(
          O.o0,
          {
            strTitle: "Invite User",
            bOKDisabled: !c || a || v.isLoading,
            onOK: async () => {
              l(!0);
              const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
                a = await ie(
                  n,
                  [
                    {
                      nAccountID: c,
                      nPartnerID: e,
                      strEmailOverride: E,
                      bAllowRegistrationIfFull: p,
                    },
                  ],
                  !0,
                ),
                r = a && 1 == a.success;
              r || i("We hit error during invite, check console: " + a?.msg),
                l(!1),
                v.refetch(),
                r && t();
            },
            onCancel: t,
          },
          Boolean(s) &&
            r.createElement("div", { className: m.ErrorStylesWithIcon }, s),
          !a &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement(G.pd, {
                type: "number",
                label: "Account ID",
                onChange: (e) => o(Number.parseInt(e.currentTarget.value)),
                value: c,
              }),
              0 != c &&
                !v.isLoading &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(G.pd, {
                    type: "number",
                    label: "Partner ID (optional)",
                    onChange: (e) => d(e.currentTarget.value),
                    value: u,
                  }),
                  r.createElement(G.pd, {
                    type: "text",
                    label: "Email override (optional)",
                    onChange: (e) => g(e.currentTarget.value.trim()),
                    value: E,
                  }),
                  r.createElement(G.Yh, {
                    controlled: !0,
                    checked: p,
                    onChange: h,
                    label: "Allow if registration is full",
                  }),
                ),
            ),
          a &&
            r.createElement($.t, {
              size: "small",
              position: "center",
              string: (0, j.we)("#Saving"),
            }),
          v.isLoading &&
            r.createElement($.t, {
              size: "small",
              position: "center",
              string: (0, j.we)("#Loading"),
            }),
        );
      }
      function re(e) {
        const { hideModal: t, gid: n } = e,
          [a, l] = (0, r.useState)(null),
          [s, i] = (0, r.useState)(!1),
          [c, o] = (0, r.useState)(null),
          [u, d] = (0, r.useState)(null),
          [E, g] = (0, r.useState)(null);
        return r.createElement(
          O.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !a || 0 == a.length || null != u,
            strCancelButtonText: null !== u ? "Close" : "Cancel",
            onOK: async () => {
              i(!0);
              const e = await ie(n, a, !1);
              1 == e?.success
                ? (d(e.rgInvitedAccounts.length), g(e.rgSkippedAccounts.length))
                : o("We hit error during invite, check console: " + e?.msg),
                i(!1);
            },
            onCancel: () => {
              d(null), g(null), i(!1), l(null), t();
            },
          },
          Boolean(c) &&
            r.createElement("div", { className: m.ErrorStylesWithIcon }, c),
          null != u &&
            r.createElement(
              "div",
              null,
              "Invited ",
              u.toLocaleString(),
              " accounts, skipped previously invited ",
              E.toLocaleString(),
            ),
          s &&
            r.createElement($.t, {
              size: "small",
              position: "center",
              string: (0, j.we)("#Saving"),
            }),
          null == a
            ? r.createElement(se, { setInvites: l })
            : r.createElement(le, { rgInvites: a }),
        );
      }
      function le(e) {
        const { rgInvites: t } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("div", null, "Total Invites Parsed: ", t.length, " "),
          r.createElement(
            "table",
            null,
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null, "AccountID"),
                r.createElement("th", null, "PartnerID"),
                r.createElement("th", null, "Email Override"),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              t.map((e, t) =>
                r.createElement(
                  "tr",
                  { key: "invite" + e.nAccountID + "_" + t },
                  r.createElement("td", null, e.nAccountID),
                  r.createElement("td", null, e.nPartnerID),
                  r.createElement("td", null, e.strEmailOverride),
                ),
              ),
            ),
          ),
        );
      }
      function se(e) {
        const { setInvites: t } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            null,
            "Format for CSV File, please use the template below:",
          ),
          r.createElement(
            "ul",
            null,
            r.createElement(
              "li",
              null,
              r.createElement("b", null, "nAccountID"),
              " - required, 32-bit integer value, not the 64-bit steam id",
            ),
            r.createElement(
              "li",
              null,
              r.createElement("b", null, "nPartnerID"),
              " - (preferred for biz contact)",
            ),
            r.createElement(
              "li",
              null,
              r.createElement("b", null, "strOverrideEmail"),
              " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
            ),
          ),
          r.createElement("br", null),
          r.createElement(
            "a",
            {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation();
                const t = [];
                t.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                  t.push(["388445686", "1", "adils@valvesoftware.com"]);
                Q.g.WriteCSVToFile(t, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          r.createElement("br", null),
          r.createElement("br", null),
          r.createElement(
            G.$n,
            null,
            r.createElement(
              "label",
              {
                className: V().ImportButtonLabel,
                htmlFor: "import-discount-input",
              },
              "Choose CSV File",
              r.createElement("input", {
                id: "import-discount-input",
                type: "file",
                style: { display: "none" },
                onChange: async (e) => {
                  if (e.target.files.length >= 1) {
                    const n = e.target.files[0],
                      a = await Q.g.ParseCSVFile(n);
                    if (a?.data) {
                      const e = new Array();
                      a.data.forEach((t) => {
                        if (t.nAccountID) {
                          const n = {
                            nAccountID: Number.parseInt(t.nAccountID),
                          };
                          t.nPartnerID &&
                            (n.nPartnerID = Number.parseInt(t.nPartnerID)),
                            t.strEmailOverride &&
                              (n.strEmailOverride = t.strEmailOverride),
                            e.push(n);
                        }
                      }),
                        t(e);
                    }
                  }
                },
              }),
            ),
          ),
        );
      }
      async function ie(e, t, n) {
        const a = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          l = t.map((e) => e.strEmailOverride).join(","),
          s = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let i = new FormData();
        i.append("sessionid", Y.TS.SESSIONID),
          i.append("gid", e),
          i.append("accounts", a),
          i.append("partnerids", r),
          i.append("emailoverride", l),
          i.append("allowregistrationiffull", s),
          i.append("forceupdate", n ? "1" : "0");
        const c = `${Y.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await w().post(c, i, { withCredentials: !0 });
          if (1 != e?.data?.success) {
            let t = (0, J.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, J.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var ce = n(16666),
        oe = n(66051),
        ue = n(54806),
        me = n(58632),
        de = n.n(me);
      function Ee(e) {
        const t = ne(),
          n = r.useContext(pe),
          a = (0, S.I)(he(n, t, e));
        return a.isLoading ? null : a.data;
      }
      function ge(e) {
        const t = ne(),
          n = r.useContext(pe);
        return (0, ue.E)({ queries: e.map((e) => he(n, t, e)) });
      }
      const pe = r.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            _e ||
              (_e = new (de())(
                async (t) => {
                  const n = _.w.Init(Z.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(6);
                  const a = await Z.Nl.GetMultipleUserActionData(e, n);
                  if (!a.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${a.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    a
                      .Body()
                      .entries()
                      .forEach((e) => {
                        try {
                          const t = JSON.parse(e.jsondata());
                          if (!("steamid" in t) || !t.steamid) {
                            t.steamid = e.steamid();
                            const n = new D.b(t.steamid);
                            t.accountid = n.GetAccountID();
                          }
                          const n = e.gid();
                          return (
                            r.has(n) ? r.get(n).push(t) : r.set(n, [t]), [t]
                          );
                        } catch (t) {
                          throw `Failed to parse GetMultipleUserActionData with details: ${e.steamid()}`;
                        }
                      }),
                    t.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              ));
            return _e;
          })(e).load(t),
      });
      function he(e, t, n) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", n],
          queryFn: () => e.loadMeetSteamAllRegistration(t, n),
          enabled: !!n,
        };
      }
      let _e;
      var ve = n(7860);
      function fe(e, t) {
        const n = (0, L.a)(),
          a = r.useContext(ye),
          l = (0, S.I)(Ie(a, n, e, t));
        return l.isLoading ? null : l.data;
      }
      function Se(e, t) {
        return ve.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const ye = r.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            we ||
              (we = new (de())(
                async (t) => {
                  const n = _.w.Init(v.g9);
                  n.Body().set_accountids(t.map((e) => e.accountID)),
                    n.Body().set_partnerids(t.map((e) => e.partnerID));
                  const a = await v.ZK.GetBatchPartnerEmailAndName(e, n);
                  if (!a.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${a.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    a
                      .Body()
                      .info()
                      .forEach((e) => {
                        r.set(
                          e.accountid() + "_" + e.partnerid(),
                          e.toObject(),
                        );
                      }),
                    t.map((e) => r.get(e.accountID + "_" + e.partnerID) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return we;
          })(e).load({ accountID: t, partnerID: n }),
      });
      function Ie(e, t, n, a) {
        return {
          queryKey: ["PartnerEmailAndName", n, a],
          queryFn: () => e.loadPartnerEmailAndName(t, n, a),
          enabled: !!n || !!a,
        };
      }
      let we;
      function De(e) {
        const { rgEventGIDs: t } = e,
          [n, a, l] = (0, f.uD)(),
          [s, i] = (0, r.useState)(null);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, " | "),
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Analyse Top Partner Coverage",
          ),
          r.createElement(
            x.E,
            { active: n },
            r.createElement(
              u.tH,
              null,
              r.createElement(
                O.o0,
                {
                  closeModal: l,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == s)
                  ? r.createElement(Me, { rgEventGIDs: t, fnSelectedEvents: i })
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(Te, { rgGidMeetSteamEvents: s }),
                      r.createElement(
                        G.$n,
                        { onClick: () => i(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const Ae = (0, ce.FB)();
      function be(e) {
        return (
          (e = e?.filter(
            (t, n) =>
              0 == n || !e.slice(0, n).some((e) => e.accountid == t.accountid),
          )),
          e
            ?.map(
              (e) =>
                e.name ||
                Se(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function Ce(e) {
        return be(e.cell.getValue());
      }
      function Ne(e, t) {
        const n = ge(t),
          [a, l, s] = (0, r.useMemo)(() => {
            if (n.filter((e) => !e.isLoading).length != n.length)
              return [null, [], []];
            const t = new Map(),
              a = new Set(e),
              r = new Map();
            n.forEach((e) =>
              e.data.forEach((e) => {
                if (
                  a.has(e.partner_id) &&
                  (r.has(e.partner_id)
                    ? r.get(e.partner_id).push(e)
                    : r.set(e.partner_id, [e]),
                  !e.name)
                ) {
                  const n = e.accountid;
                  t.set(`${n}_${e.partner_id}`, {
                    accountID: n,
                    partnerID: e.partner_id,
                  });
                }
              }),
            );
            const l = Array.from(t.values());
            return [r, l.map((e) => e.accountID), l.map((e) => e.partnerID)];
          }, [n, e]),
          i = (function (e, t) {
            const n = (0, L.a)(),
              a = r.useContext(ye);
            return (0, ue.E)({ queries: e.map((e, r) => Ie(a, n, e, t[r])) });
          })(l, s);
        return i.filter((e) => !e.isLoading).length == i.length ? a : null;
      }
      function Te(e) {
        const { rgGidMeetSteamEvents: t } = e,
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          a = (0, b.vh)(n),
          l = Ne(n, t),
          s = (0, r.useMemo)(() => {
            if (!a || !l) return null;
            const e = [];
            return (
              n.forEach((t) => {
                const n = l.get(t);
                e.push({
                  partner_id: t,
                  partner_name: (0, b.Yd)(t)?.name || "Unknown",
                  invitations:
                    n?.filter(
                      (e) =>
                        e.invited &&
                        !Object.keys(e).some((e) =>
                          e.startsWith("registration_emailed"),
                        ),
                    ) || [],
                  registrations:
                    n?.filter((e) =>
                      Object.keys(e).some((e) =>
                        e.startsWith("registration_emailed"),
                      ),
                    ) || [],
                });
              }),
              e
            );
          }, [a, l, n]),
          i = (0, r.useMemo)(
            () => [
              Ae.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Ae.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              Ae.accessor("invitations", {
                header: "Invitations",
                cell: Ce,
                size: 300,
              }),
              Ae.accessor("registrations", {
                header: "Registered to Attend",
                cell: Ce,
                size: 300,
              }),
            ],
            [],
          );
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(G.JU, null, "Partner Analysis"),
          Boolean(s)
            ? r.createElement(
                u.tH,
                null,
                r.createElement(oe.k, {
                  columns: i,
                  data: s,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: n.length,
                }),
                r.createElement("br", null),
                r.createElement(
                  G.$n,
                  {
                    id: "download-csv",
                    onClick: function () {
                      const e = [],
                        t = [];
                      for (const e of i) t.push(e.header);
                      e.push(t);
                      for (const t of s) {
                        const n = [];
                        for (const e of i) {
                          const a = t[e.accessorKey];
                          n.push(
                            "invitations" == e.accessorKey ||
                              "registrations" == e.accessorKey
                              ? be(a)
                              : a.toString(),
                          );
                        }
                        e.push(n);
                      }
                      Q.g.WriteCSVToFile(e, "partneranalysis.csv");
                    },
                    style: { width: "120px" },
                  },
                  "Download CSV",
                ),
              )
            : r.createElement($.t, {
                string: (0, j.we)("#Loading"),
                position: "center",
              }),
        );
      }
      function Me(e) {
        const { rgEventGIDs: t, fnSelectedEvents: n } = e,
          [a, l] = (0, r.useState)([]);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(G.JU, null, "Choose Events"),
          t.map((e) =>
            r.createElement(Be, {
              key: e,
              gidClanEvent: e,
              rgSelected: a,
              fnSetSelected: l,
            }),
          ),
          r.createElement(
            G.$n,
            { disabled: 0 == a.length, onClick: () => n(a) },
            "Continue",
          ),
        );
      }
      function Be(e) {
        const { gidClanEvent: t, rgSelected: n, fnSetSelected: a } = e,
          l = (0, k.RR)(t).GetNameWithFallback(0);
        return r.createElement(G.Yh, {
          label: l,
          checked: n.includes(t),
          onChange: (e) => {
            const r = n.indexOf(t),
              l = Boolean(r >= 0);
            e && !l
              ? a([...n, t])
              : !e && l && a([...n.slice(0, r), ...n.slice(r + 1)]);
          },
        });
      }
      var Pe = n(30603),
        ke = n.n(Pe),
        Re = n(29233);
      function Le(e) {
        const { hideModal: t, gid: n } = e,
          a = Ee(n),
          l = (0, y.jE)(),
          [s, i] = (0, r.useMemo)(
            () =>
              a
                ? [a.length, a.filter((e) => !e.invitation_emailed).length]
                : [0, 0],
            [a],
          );
        return r.createElement(
          O.o0,
          {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: t,
            strDescription:
              "This will show the users we have invited and their status. As well as individual who were just sent the registration page on their own.",
            strTitle: "Invitation And Registration Status",
          },
          !a &&
            r.createElement($.t, {
              size: "medium",
              position: "center",
              string: (0, j.we)("#Loading"),
            }),
          a &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement("div", null, "There are ", s, " registrations."),
              i > 0 &&
                r.createElement(
                  G.$n,
                  {
                    onClick: async () => {
                      await (async function (e, t) {
                        let n = new FormData();
                        n.append("sessionid", Y.TS.SESSIONID),
                          n.append("gid", t);
                        const a = `${Y.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                        try {
                          const r = await w().post(a, n, {
                            withCredentials: !0,
                          });
                          if (1 != r?.data?.success) {
                            let e = (0, J.H)(r);
                            console.error(
                              "AsyncSendInviteEmails error: " + e.strErrorMsg,
                              e,
                            );
                          }
                          return (
                            e.invalidateQueries({
                              queryKey: [
                                "useMeetSteamAllRegistrationStatus",
                                t,
                              ],
                            }),
                            r?.data
                          );
                        } catch (e) {
                          let t = (0, J.H)(e);
                          console.error(
                            "AsyncSendInviteEmails error: " + t.strErrorMsg,
                            t,
                          );
                        }
                        return null;
                      })(l, n);
                    },
                  },
                  i,
                  " Invites To Sent. Send now?",
                ),
              r.createElement(
                "table",
                null,
                r.createElement(
                  "thead",
                  null,
                  r.createElement(
                    "tr",
                    null,
                    r.createElement("th", null, "SteamID"),
                    r.createElement("th", null, "Name"),
                    r.createElement("th", null, "invited"),
                    r.createElement("th", null, "Invite Emailed"),
                    r.createElement("th", null, "Partner"),
                    r.createElement("th", null, "Email Override"),
                  ),
                ),
                r.createElement(
                  "tbody",
                  null,
                  a?.map((e) =>
                    r.createElement(Ge, {
                      key: "regentry_" + e.steamid,
                      reg: e,
                    }),
                  ),
                ),
              ),
            ),
        );
      }
      function Ge(e) {
        const { reg: t } = e,
          [n] = (0, b.UA)(t.partner_id);
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.steamid),
          r.createElement("td", null, t.name),
          r.createElement("td", null, Boolean(t.invited) ? "YES" : ""),
          r.createElement(
            "td",
            null,
            Boolean(t.invitation_emailed) ? "YES" : "",
          ),
          r.createElement("td", null, n?.name, " (", t.partner_id, ")"),
          r.createElement("td", null, t.email_override),
        );
      }
      function Fe(e) {
        const { hideModal: t, gid: n, title: a, group: l, session: s } = e,
          i = (0, L.a)(),
          c = Ee(n),
          o = P(i, n, l?.group_id),
          [u, m] = (0, r.useMemo)(() => {
            const e = o?.data?.filter((e) => e.session_id == s.id),
              t = new Map(),
              n = new Map();
            return (
              e?.forEach((e) => {
                const a = new Re.b2(e.steamid).GetAccountID();
                if ((t.set(a, e), e.jsondata)) {
                  const t = JSON.parse(e.jsondata);
                  t.pre_event_partner_questions &&
                    n.set(a, t.pre_event_partner_questions);
                }
              }),
              [t, n]
            );
          }, [s, o]),
          d = c?.filter((e) => u.has(new Re.b2(e.steamid).GetAccountID()));
        return r.createElement(
          O.o0,
          {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: t,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
          },
          r.createElement(
            "div",
            { className: ke().ExportToCSV },
            r.createElement(
              "a",
              {
                onClick: () =>
                  (function (e, t, n, a, r) {
                    const l = [],
                      s = [
                        "SteamID",
                        "Name",
                        "Invited",
                        "Partner",
                        "Email Override",
                        "Guest Count",
                        "Reg Confirmation Email Sent",
                      ];
                    e.ask_registration_question && s.push("Pre Reg Answer");
                    l.push(s),
                      n.forEach((t) => {
                        const n = [],
                          s = t.partner_id ? (0, b.Yd)(t.partner_id) : void 0;
                        n.push("" + t.steamid),
                          n.push(t.name),
                          n.push(t.invited ? "YES" : ""),
                          n.push(s ? `${s?.name} (${t.partner_id})` : ""),
                          n.push(t.email_override),
                          n.push(
                            "" +
                              (t.guests_registered
                                ? t.guests_registered - 1
                                : 0),
                          );
                        const i = new Re.b2(t.steamid);
                        if (a.has(i.GetAccountID())) {
                          const e = Oe(a.get(i.GetAccountID()), t);
                          if (e) {
                            const t = new Date(1e3 * e)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            n.push(t);
                          } else n.push("");
                        } else n.push("");
                        if (e.ask_registration_question) {
                          const t = r
                            .get(i.GetAccountID())
                            ?.find((t) => t.group_id == e.group_id);
                          t && n.push(t.question);
                        }
                        l.push(n);
                        for (let e = 0; e < t.guest_names?.length; e++) {
                          const n = [];
                          n.push("(guest)"),
                            n.push(t.guest_names[e]),
                            l.push(n);
                        }
                      });
                    const i =
                      "meetsteam_" +
                      t.replace(/[ <>:"/\\|?*\x00-\x1F]/g, "_") +
                      ".csv";
                    Q.g.WriteCSVToFile(l, i);
                  })(l, a, d, u, m),
              },
              "Export to CSV",
            ),
          ),
          r.createElement(
            "table",
            { className: ke().Table },
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null, "SteamID"),
                r.createElement("th", null, "Name"),
                r.createElement("th", null, "Invited"),
                r.createElement("th", null, "Partner"),
                r.createElement("th", null, "Email Override"),
                r.createElement(
                  "th",
                  null,
                  "Guest Count ",
                  r.createElement(z.o, {
                    tooltip:
                      "Additional guests, doesn't include main registrant",
                  }),
                ),
                r.createElement("th", null, "Reg Confirm Email Sent"),
                l.ask_registration_question &&
                  r.createElement("th", null, "Answer"),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              d?.flatMap((e) => {
                const t = new Re.b2(e.steamid).GetAccountID(),
                  n = [
                    r.createElement(xe, {
                      key: "regrow" + e.steamid,
                      group: l,
                      regInfo: u.get(t),
                      inviteInfo: e,
                      preRegQuestions: m.get(t),
                    }),
                  ];
                for (let t = 0; t < e.guest_names?.length; t++)
                  n.push(
                    r.createElement($e, {
                      key: "regguestrow" + e.steamid + "_" + t,
                      guestName: e.guest_names[t],
                    }),
                  );
                return n;
              }),
            ),
          ),
        );
      }
      function Oe(e, t) {
        const n = `registration_emailed_${e.group_id}_${e.session_id}`;
        let a = null;
        return n in t && (a = t[n]), a;
      }
      function xe(e) {
        const { inviteInfo: t, regInfo: n, group: a, preRegQuestions: l } = e,
          [s] = (0, b.UA)(t.partner_id),
          i = Oe(n, t);
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.steamid),
          r.createElement("td", null, t.name),
          r.createElement("td", null, Boolean(t.invited) ? "YES" : ""),
          r.createElement(
            "td",
            null,
            (s?.name ?? t.game) ? `Game: ${t.game}` : "",
            " ",
            t.partner_id ? `(${t.partner_id})` : "",
          ),
          r.createElement("td", null, t.email_override),
          r.createElement(
            "td",
            null,
            n.guests_registered ? n.guests_registered - 1 : 0,
          ),
          r.createElement("td", null, i ? (0, j.TW)(i) : ""),
          a.ask_registration_question &&
            r.createElement(
              "td",
              null,
              l?.find((e) => e.group_id == a.group_id)?.question || "",
            ),
        );
      }
      function $e(e) {
        const { guestName: t } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, "(guest)"),
          r.createElement("td", null, t),
        );
      }
      var ze = n(2516);
      function Ue(e) {
        const { rgEventGIDs: t } = e,
          [n, a, l] = (0, f.uD)(),
          [s, i] = (0, r.useState)(null);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, " | "),
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Show Registration Across Events",
          ),
          r.createElement(
            x.E,
            { active: n },
            r.createElement(
              u.tH,
              null,
              r.createElement(
                O.o0,
                {
                  closeModal: l,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == s)
                  ? r.createElement(Me, { rgEventGIDs: t, fnSelectedEvents: i })
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(qe, { rgGidMeetSteamEvents: s }),
                      r.createElement(
                        G.$n,
                        { onClick: () => i(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const je = (0, ce.FB)();
      function qe(e) {
        const { rgGidMeetSteamEvents: t } = e,
          { rgAllRegistrations: n, rgPartnerIDs: a } = (function (e) {
            const t = ge(e),
              [n, a] = (0, r.useMemo)(() => {
                if (t.filter((e) => !e.isLoading).length != t.length)
                  return [null, null];
                const e = new Array(),
                  n = new Set();
                return (
                  t.forEach((t) => {
                    t.data.forEach((t) => {
                      t.guests_registered > 0 &&
                        (e.push(t), t.partner_id && n.add(t.partner_id));
                    });
                  }),
                  [Array.from(n), e]
                );
              }, [t]);
            return { rgAllRegistrations: a, rgPartnerIDs: n };
          })(t),
          l = (0, b.vh)(a),
          s = (0, r.useMemo)(() => {
            if (!l || !n) return null;
            const e = [];
            return (
              n.forEach((t) => {
                (0, b.Yd)(t.partner_id);
                e.push({
                  partner_id: t.partner_id ? "" + t.partner_id : "",
                  partner_name: (0, b.Yd)(t.partner_id)?.name || "Unknown",
                  name: t.name,
                  accountid: t.accountid,
                  email: t.email_override,
                  guest_registrated: t.guests_registered - 1,
                  guest_names:
                    t.guest_names?.length > 0 ? t.guest_names.join(",") : "",
                });
              }),
              e
            );
          }, [l, n]),
          i = (0, r.useMemo)(
            () => [
              je.accessor("name", { header: "Name", size: 200 }),
              je.accessor("accountid", { header: "Account ID", size: 150 }),
              je.accessor("email", { header: "Email", size: 150 }),
              je.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              je.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              je.accessor("partner_id", { header: "Partner ID", size: 100 }),
              je.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
            ],
            [],
          );
        return l && a && s
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(G.JU, null, "Registations"),
              Boolean(s)
                ? r.createElement(
                    u.tH,
                    null,
                    r.createElement(oe.k, {
                      columns: i,
                      data: s,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: a.length,
                    }),
                    r.createElement("br", null),
                    r.createElement(
                      G.$n,
                      {
                        id: "download-csv",
                        onClick: () =>
                          (0, ze.K)(
                            "registrationdump.csv",
                            s,
                            i.map((e) => ({
                              accessorKey: e.accessorKey,
                              header:
                                "string" == typeof e.header
                                  ? e.header
                                  : (e.accessorKey ?? ""),
                            })),
                          ),
                        style: { width: "120px" },
                      },
                      "Download CSV",
                    ),
                  )
                : r.createElement($.t, {
                    string: (0, j.we)("#Loading"),
                    position: "center",
                  }),
            )
          : r.createElement($.t, { string: (0, j.we)("#Loading") });
      }
      var Ye = n(65);
      function We(e) {
        const t = Ke();
        return r.createElement(
          "div",
          null,
          r.createElement(
            "ol",
            null,
            Array.from(t.entries()).map(([e, t]) =>
              r.createElement(
                "li",
                { key: e },
                r.createElement(
                  "a",
                  {
                    href: `${A.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
                    target: "_blank",
                  },
                  t,
                ),
              ),
            ),
          ),
        );
      }
      function Ke() {
        const [e] = (0, r.useState)(() => {
          const e = (0, A.Tc)("survey_list", "application_config") || {},
            t = new Map();
          for (const n of Object.keys(e)) t.set(n, e[n]);
          return t;
        });
        return e;
      }
      var He = n(95034),
        Ve = n(85383),
        Je = n(19367),
        Qe = n.n(Je);
      function Ze(e) {
        const t = D.b.InitFromClanID((0, F.H)()),
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          [a, l] = (0, He.QD)("showpastevents", !1),
          { bIsLoading: s, events: i } = (0, k.PB)(n),
          c = r.useMemo(() => {
            if (!i) return null;
            const e =
                a && i
                  ? [...i]
                  : i?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = Array.from(
                (0, Ye.bv)(e, (e) => (0, Ye.J2)(new Date(1e3 * e.startTime))),
              );
            return t?.sort((e) => -e[0]), t;
          }, [i, a]);
        return s
          ? r.createElement($.t, null)
          : c
            ? r.createElement(
                "div",
                null,
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "a",
                    {
                      href: `${Y.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                    },
                    "Open Meet Steam Event Dashboard",
                  ),
                  r.createElement(De, { rgEventGIDs: n }),
                  r.createElement(Ue, { rgEventGIDs: n }),
                ),
                r.createElement(G.Yh, {
                  checked: a,
                  onChange: l,
                  label: "Show Past Events",
                }),
                r.createElement("hr", null),
                c.map((e) =>
                  r.createElement(Xe, {
                    key: e[0],
                    month: new Date(1e3 * e[0]),
                    events: e[1],
                  }),
                ),
              )
            : null;
      }
      function Xe(e) {
        const { month: t, events: n } = e,
          a = r.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
          l = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return r.createElement(
          "div",
          null,
          r.createElement("div", { className: K().MonthTitle }, l),
          r.createElement(
            "div",
            { className: K().MonthEvents },
            a.map((e) => r.createElement(et, { oEvent: e, key: e.GID })),
          ),
        );
      }
      function et(e) {
        const { oEvent: t } = e,
          n = t.GID,
          a = D.b.InitFromClanID((0, F.H)()),
          l = (0, L.a)(),
          s = (0, R.my)(l, (0, F.H)(), n),
          i = s.isSuccess ? s.data : null,
          c = t.GetNameWithFallback(0),
          o = (0, r.useMemo)(() => {
            const e = new Array();
            return (
              t.jsondata.meet_steam_groups?.forEach((t) => {
                t.sessions.forEach((n, a) => {
                  e.push({ group: t, session: n, firstSession: 0 == a });
                });
              }),
              e
            );
          }, [t.jsondata.meet_steam_groups]);
        return r.createElement(
          "div",
          { className: K().EventRow },
          r.createElement(
            "div",
            { className: K().EventMainDetails },
            r.createElement(
              "div",
              { className: K().TitleLine },
              r.createElement("div", { className: K().Title }, c),
              r.createElement(
                "div",
                { className: K().StartDate },
                (0, j.TW)(t?.startTime),
              ),
            ),
            r.createElement(
              "div",
              { className: K().ActionLine },
              r.createElement(
                "div",
                null,
                r.createElement(
                  "a",
                  {
                    href: `${Y.TS.COMMUNITY_BASE_URL}gid/${a.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                  },
                  "Edit",
                ),
              ),
              r.createElement(
                "div",
                null,
                " | ",
                r.createElement(
                  "a",
                  { href: `${Y.TS.STORE_BASE_URL}meetsteam/${n}` },
                  "View",
                ),
              ),
              Boolean(
                t.BIsUnlistedEvent() &&
                  t.jsondata.meet_steam_groups?.length > 0,
              ) &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(lt, { gid: n }),
                  " | ",
                  r.createElement(
                    "a",
                    {
                      href: `${Y.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${Y.iA.accountid}`,
                    },
                    "QR Page",
                  ),
                  " | ",
                  r.createElement(
                    "a",
                    {
                      href: `${Y.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                    },
                    "Attendance List",
                  ),
                  r.createElement(tt, { gid: n }),
                  r.createElement(at, { gid: n }),
                  r.createElement(nt, { gid: n }),
                  r.createElement(rt, { gid: n }),
                ),
            ),
          ),
          r.createElement(
            "div",
            null,
            r.createElement(
              "table",
              { className: "landingTable" },
              r.createElement(
                "thead",
                null,
                r.createElement(
                  "tr",
                  null,
                  r.createElement("th", null, "Group"),
                  r.createElement("th", null, "Session Start"),
                  r.createElement("th", null, "Session Duration"),
                  r.createElement("th", null, "Seats"),
                  r.createElement(
                    "th",
                    { style: { width: "50px" } },
                    "Registered",
                  ),
                  r.createElement("th", { style: { width: "50px" } }, "Guests"),
                  r.createElement(
                    "th",
                    { style: { width: "100px" } },
                    "Details",
                  ),
                ),
              ),
              r.createElement(
                "tbody",
                null,
                r.createElement(
                  "tr",
                  null,
                  Boolean(o.length > 0)
                    ? r.createElement(st, {
                        key: o[0].session.id,
                        gid: n,
                        group: o[0].group,
                        session: o[0].session,
                        rgAvailability: i,
                      })
                    : r.createElement(
                        r.Fragment,
                        null,
                        r.createElement("td", null, "None"),
                        r.createElement("td", null),
                        r.createElement("td", null),
                        r.createElement("td", null),
                        r.createElement("td", null),
                        r.createElement("td", null),
                      ),
                  r.createElement(
                    "td",
                    null,
                    !Boolean(
                      t?.BIsUnlistedEvent() &&
                        t.jsondata.meet_steam_groups?.length > 0,
                    ) &&
                      r.createElement(
                        "div",
                        null,
                        "Invite Disabled. Event need to publish into Unlisted State",
                      ),
                  ),
                ),
                o
                  .filter((e, t) => t > 0)
                  .map((e) =>
                    r.createElement(
                      "tr",
                      { key: e.session.id },
                      r.createElement(st, {
                        group: e.group,
                        gid: n,
                        session: e.session,
                        rgAvailability: i,
                        firstSession: e.firstSession,
                      }),
                    ),
                  ),
              ),
            ),
          ),
        );
      }
      function tt(e) {
        const { gid: t } = e,
          n = Ke();
        return Array.from(n.keys()).includes(t)
          ? r.createElement(
              r.Fragment,
              null,
              " | ",
              r.createElement(
                "a",
                { href: `${Y.TS.PARTNER_BASE_URL}meetsteam/survey/${t}` },
                "Survey",
              ),
            )
          : null;
      }
      function nt(e) {
        const { gid: t } = e,
          [n, a, l] = (0, f.uD)();
        return r.createElement(
          "div",
          null,
          " | ",
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Invite via CSV",
            r.createElement(z.o, {
              tooltip:
                "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
            }),
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              x.E,
              { active: n },
              r.createElement(re, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function at(e) {
        const { gid: t } = e,
          [n, a, l] = (0, f.uD)();
        return r.createElement(
          "div",
          null,
          " | ",
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Invite",
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              x.E,
              { active: n },
              r.createElement(ae, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function rt(e) {
        const { gid: t } = e,
          [n, a, l] = (0, f.uD)();
        return r.createElement(
          "div",
          null,
          " | ",
          r.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), a();
              },
            },
            "Show Invites",
          ),
          r.createElement(
            u.tH,
            null,
            r.createElement(
              x.E,
              { active: n },
              r.createElement(Le, { hideModal: l, gid: t }),
            ),
          ),
        );
      }
      function lt(e) {
        const { gid: t } = e,
          n = (0, L.a)(),
          [a, l] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null);
        return r.createElement(
          "div",
          null,
          " | ",
          r.createElement(
            "a",
            {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation(), l(!0);
                const a = await (async function (e, t) {
                  const n = _.w.Init(v.VI),
                    a = D.b.InitFromClanID((0, F.H)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(a.ConvertTo64BitString());
                  const r = await v.ZK.TestFireEmails(e, n);
                  return console.log("test fire", r), r.GetEResult();
                })(n, t);
                i(a);
              },
            },
            "Email Self",
          ),
          r.createElement(
            x.E,
            { active: a },
            r.createElement(
              O.o0,
              {
                bAlertDialog: !0,
                strTitle: "Test Emails",
                closeModal: () => {
                  l(!1), i(null);
                },
                onOK: () => {},
              },
              r.createElement(
                "div",
                null,
                "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
              ),
              Boolean(null == s) &&
                r.createElement($.t, { string: (0, j.we)("#Loading") }),
              Boolean(1 == s) &&
                r.createElement("div", null, "Test Emails Sent"),
              Boolean(s && 1 != s) &&
                r.createElement(
                  "div",
                  null,
                  "Email Failed to Send. Check console",
                ),
            ),
          ),
        );
      }
      function st(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: a,
            session: l,
            firstSession: s = !0,
          } = e,
          i = j.NT.GetWithFallback(n?.localized_session_title, 0),
          c = j.NT.GetWithFallback(n?.localized_session_description, 0),
          o = j.NT.GetWithFallback(n?.localized_intended_audience, 0),
          m = a?.find((e) => e.group_id == n.group_id && e.session_id == l.id),
          [d, E, g] = (0, f.uD)(),
          p = P((0, L.a)(), t, n?.group_id);
        let h = Math.min((m?.guest_count / l.max_capacity) * 100, 100),
          _ = m?.guest_count > 0 ? `${h}%` : "0%",
          v = m?.guest_count >= l.max_capacity;
        const S = Intl.DateTimeFormat().resolvedOptions().timeZone,
          y =
            "in_person" === l.location_type
              ? (l.in_person_time_zone ?? Ve.hh)
              : S;
        return r.createElement(
          r.Fragment,
          null,
          s && Boolean(n)
            ? r.createElement(
                "td",
                null,
                i,
                r.createElement(z.o, { tooltip: c }),
                Boolean(o) && r.createElement("div", null, o),
              )
            : r.createElement("td", null),
          r.createElement(
            "td",
            null,
            r.createElement(
              "span",
              null,
              (function (e, t) {
                const n = Qe().unix(e),
                  a = Qe().unix(e).tz(t),
                  r = a.utcOffset() - n.utcOffset(),
                  l = new Date(1e3 * (e + 60 * r)),
                  s = new Date();
                return `${l.getFullYear() == s.getFullYear() ? ((0, q.$w))(l, !1, !1) : ((0, q._9))(l, !1, !1)} ${(0, q.KC)(e + 60 * r)} ${a.format("z")}`;
              })(l.rtime_start, y),
            ),
          ),
          r.createElement("td", null, (0, q.IH)(l.rtime_end - l.rtime_start)),
          r.createElement(
            "td",
            null,
            m?.guest_count || 0,
            " / ",
            l.max_capacity,
            r.createElement("br", null),
            r.createElement(
              "div",
              { className: K().CapacityBarMax },
              r.createElement("div", {
                className: (0, U.A)(K().CapacityBarCurrent, v ? K().Full : ""),
                style: { width: _ },
              }),
            ),
          ),
          r.createElement(
            "td",
            null,
            p.isSuccess &&
              r.createElement(
                r.Fragment,
                null,
                p.data?.filter((e) => e.session_id == l.id).length,
              ),
          ),
          r.createElement(
            "td",
            null,
            p.isSuccess &&
              r.createElement(
                r.Fragment,
                null,
                p.data
                  ?.filter((e) => e.session_id == l.id)
                  .reduce((e, t) => e + t.guests_registered - 1, 0),
              ),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(G.$n, { onClick: E }, "Details"),
            r.createElement(
              u.tH,
              null,
              r.createElement(
                x.E,
                { active: d },
                r.createElement(Fe, {
                  gid: t,
                  title: i,
                  group: n,
                  session: l,
                  hideModal: g,
                }),
              ),
            ),
          ),
        );
      }
      var it = n(22837),
        ct = n(14336),
        ot = n(55263),
        ut = n(29863),
        mt = n(48479),
        dt = n(82097),
        Et = n(98019);
      function gt(e) {
        const t = N(),
          n = (function () {
            const [e] = (0, r.useState)(() =>
              (0, h.Tc)("interest_results", "application_config"),
            );
            return (0, r.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [a, l] = (0, r.useState)(""),
          s = A.TS.PARTNER_BASE_URL + "meetsteam/2025",
          i = (0, r.useMemo)(() => {
            const e = new Map();
            return (
              n.forEach((t) => {
                t.results?.attending?.forEach((t) => {
                  e.has(t) ? e.set(t, e.get(t) + 1) : e.set(t, 1);
                });
              }),
              e
            );
          }, [n]);
        return r.createElement(
          "div",
          { className: K().EventList },
          r.createElement(G.pd, {
            type: "text",
            value: a,
            onChange: (e) => l(e.currentTarget.value.trim()),
            label: "Filter",
          }),
          r.createElement(
            "div",
            null,
            "Total Survey Responses: ",
            (n?.length || 0).toLocaleString(),
          ),
          r.createElement(
            "div",
            null,
            "Link to partner-facing survey: ",
            r.createElement("a", { href: s }, s),
          ),
          t
            .filter(
              (e) => 0 == a.length || e.name.includes(a) || e.id.includes(a),
            )
            .map((e) =>
              r.createElement(pt, {
                key: e.id,
                conf: e,
                nInterestCount: i.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          r.createElement(Dt, { rgSurveyInterest: n }),
        );
      }
      function pt(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: a } = e;
        return r.createElement(
          mt.qx,
          {
            title: `${t.name} in ${t.place} around ${t.time}: Interest: ${n.toLocaleString()}`,
            bStartMinimized: !0,
          },
          r.createElement(_t, { conf: t, rgSurveyInterest: a }),
        );
      }
      function ht(e) {
        if ("number" == typeof e) return e;
        const t = e.slice(-1).toUpperCase(),
          n = parseFloat(e.slice(0, -1));
        switch (t) {
          case "K":
            return 1e3 * n;
          case "M":
            return 1e6 * n;
          case "B":
            return 1e9 * n;
          default:
            return parseFloat(e);
        }
      }
      function _t(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, r.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          ),
          l = (0, Et.qh)(),
          { bComplete: s, nCount: i } = (function (e) {
            const [t, n] = (0, r.useState)(!1),
              [a, l] = (0, r.useState)(0),
              s = (0, y.jE)();
            return (
              (0, r.useEffect)(() => {
                (async () => {
                  let t = 0;
                  for (const n of e) {
                    const e = n.results.partner_id;
                    new D.b(n.steamid).GetAccountID(),
                      await Promise.all([
                        (0, b.qG)(e),
                        s.prefetchQuery({
                          queryKey: T(e),
                          queryFn: async () => M(e),
                        }),
                        (0, C.PQ)(s, e),
                      ]),
                      ++t,
                      l(t);
                  }
                  n(!0);
                })();
              }, [s, e]),
              { bComplete: t, nCount: a }
            );
          })(a);
        return s
          ? l?.length
            ? a && 0 != a.length
              ? r.createElement(vt, { conf: t, rgSurveyInterest: a })
              : r.createElement("div", null, "No users with interest")
            : r.createElement($.t, {
                position: "center",
                string: "Loading Valve Account info (this shouldn't take long)",
              })
          : r.createElement($.t, {
              position: "center",
              string: `Loading ${i} of ${a.length}`,
            });
      }
      function vt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          a = (0, y.jE)();
        return r.createElement(
          "div",
          null,
          r.createElement(
            G.$n,
            {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Valve Partner Contacts",
                  "Email Override",
                  "Account Name",
                  "Name",
                  "Have you met steam",
                  "Survey Time",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Best AppID Name",
                  "Long Term Sales Rank",
                ]),
                  n.forEach((t) => {
                    const n = [],
                      r = new Re.b2(t.steamid);
                    n.push("" + r.GetAccountID());
                    const l = (0, ct.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    n.push("" + s);
                    const i = (0, C.N6)(s).map(
                      (e) => (0, Et.YA)(a, e)?.displayName || "" + e,
                    );
                    n.push(i.join("|"));
                    const c = t.results.email_override || "";
                    n.push("" + c),
                      n.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const o = Se(r.GetAccountID(), s);
                    if (
                      (n.push(o ? o.realname : ""),
                      n.push(t.results.have_you_met_steam ? "yes" : "no"),
                      t.results.submit_time)
                    ) {
                      const e = t.results.submit_time,
                        a = new Date(1e3 * e)
                          .toISOString()
                          .replace("T", " ")
                          .split(".")[0];
                      n.push(a);
                    } else n.push("");
                    n.push("" + t.results.attending?.length),
                      n.push(t.results.country_code),
                      n.push(
                        t.results.preferred_language
                          ? (0, it.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const u = (0, b.Yd)(s);
                    n.push(u ? u.name : "");
                    const m = B(a, s);
                    m
                      ? (n.push("" + ht(m.strGrossUSD)),
                        n.push("" + m.nBestAppID),
                        n.push(dt.A.Get().GetApp(m.nBestAppID)?.GetName()),
                        n.push("" + m.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const r = t.name.replace(" ", "_") + "_conference_interest.csv";
                Q.g.WriteCSVToFile(e, r);
              },
            },
            "Export to CSV",
          ),
          r.createElement(
            "table",
            { className: "landingTable" },
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null, "Name and Email"),
                r.createElement("th", null, "Have you met steam?"),
                r.createElement("th", null, "Partner"),
                r.createElement("th", null, "Valve Contacts"),
                r.createElement("th", null, "Partner Revenue"),
                r.createElement("th", null, "Biggest Game"),
                r.createElement("th", null, "Long Term Sales Rank"),
                r.createElement("th", null, "Attending count?"),
                r.createElement("th", null, "Alt Language"),
                r.createElement("th", null, "Country"),
                r.createElement("th", null, "Submit Survey Time"),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              n.map((e) =>
                r.createElement(ft, {
                  key: t.id + "_" + e.steamid,
                  strsteamid: e.steamid,
                  partnerID: e.results.partner_id,
                  registration: e.results,
                }),
              ),
            ),
          ),
        );
      }
      function ft(e) {
        const { partnerID: t, registration: n } = e;
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, r.createElement(St, { ...e })),
          r.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          r.createElement(yt, { nPartnerID: t }),
          r.createElement("td", null, n.attending.length),
          r.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, it.Lg)(n.preferred_language)
              : "",
          ),
          r.createElement("td", null, n.country_code),
          r.createElement("td", null, (0, j.TW)(n.submit_time)),
        );
      }
      function St(e) {
        const { strsteamid: t, partnerID: n, registration: a } = e,
          l = (0, ct.hW)(t),
          s = fe(new Re.b2(t).GetAccountID(), n),
          i = s?.realname || l.data?.m_strPlayerName;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("span", null, i),
          r.createElement("br", null),
          r.createElement("span", null, a.email_override || s?.email),
        );
      }
      function yt(e) {
        const { nPartnerID: t } = e,
          [n] = (0, b.UA)(t),
          a = (function (e) {
            const t = (0, S.I)({
              queryKey: T(e),
              queryFn: async () => M(e),
              enabled: Boolean(e),
            });
            return t.isLoading ? null : t.data;
          })(t),
          l = (0, C.Z4)(t),
          s = (0, y.jE)();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("td", null, n ? n?.name + ` (${t})` : t),
          r.createElement(
            "td",
            null,
            l?.map((e) => (0, Et.YA)(s, e)?.displayName || "" + e).join(","),
          ),
          r.createElement("td", null, "$", a?.strGrossUSD),
          r.createElement(
            "td",
            null,
            a?.nBestAppID > 0
              ? r.createElement(wt, { appid: a?.nBestAppID })
              : "N/A",
          ),
          r.createElement("td", null, a?.nBestAppLongTermSalesRank),
        );
      }
      const It = {};
      function wt(e) {
        const { appid: t } = e,
          [n] = (0, ot.t7)(t, It),
          a = (0, r.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return r.createElement(
          ut.Qf,
          { item: a },
          r.createElement("span", null, n?.GetName() || t),
        );
      }
      function Dt(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, y.jE)(),
          a =
            ((0, Et.qh)(),
            (0, r.useMemo)(
              () =>
                t.filter((e) =>
                  Boolean(e.results?.suggestion?.trim().length > 0),
                ),
              [t],
            ));
        return r.createElement(
          mt.qx,
          {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
          },
          r.createElement(
            G.$n,
            {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Email Override",
                  "Account Name",
                  "name",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Long Term Sales Rank",
                  "Suggestion",
                ]),
                  a.forEach((t) => {
                    const a = [],
                      r = new Re.b2(t.steamid);
                    a.push("" + r.GetAccountID());
                    const l = (0, ct.z0)(r.GetAccountID()),
                      s = t.results.partner_id;
                    a.push("" + s);
                    const i = t.results.email_override || "";
                    a.push("" + i),
                      a.push(l?.m_strPlayerName ? l.m_strPlayerName : "");
                    const c = Se(r.GetAccountID(), s);
                    a.push(c ? c.realname : ""),
                      a.push("" + t.results.attending?.length),
                      a.push(t.results.country_code),
                      a.push(
                        t.results.preferred_language
                          ? (0, it.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const o = (0, b.Yd)(s);
                    a.push(o ? o.name : "");
                    const u = B(n, s);
                    u
                      ? (a.push("" + ht(u.strGrossUSD)),
                        a.push("" + u.nBestAppID),
                        a.push("" + u.nBestAppLongTermSalesRank))
                      : (a.push(""), a.push(""), a.push("")),
                      a.push(t.results.suggestion),
                      e.push(a);
                  });
                Q.g.WriteCSVToFile(e, "suggestsion.csv");
              },
            },
            "Export to CSV (wait until the table populates fully)",
          ),
          r.createElement(
            "table",
            { className: "landingTable" },
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null, "Name and Email"),
                r.createElement("th", null, "Partner"),
                r.createElement("th", null, "Valve Contacts"),
                r.createElement("th", null, "Partner Revenue"),
                r.createElement("th", null, "Biggest Game"),
                r.createElement("th", null, "Long Term Sales Rank"),
                r.createElement("th", null, "Suggestions"),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              a.map((e) =>
                r.createElement(At, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function At(e) {
        const { survey: t } = e;
        new Re.b2(t.steamid);
        return r.createElement(
          "tr",
          null,
          r.createElement(
            "td",
            null,
            r.createElement(St, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          r.createElement(yt, { nPartnerID: t.results.partner_id }),
          r.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      const bt = r.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            Nt ||
              (Nt = new (de())(
                async (e) => {
                  const t = `${A.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = {
                      sessionid: A.TS.SESSIONID,
                      strAccountIDs: e.join(","),
                    },
                    a = await w().get(t, { params: n, withCredentials: !0 });
                  if (!a || 200 != a?.status || 1 != a?.data?.success)
                    throw `Failed to load app to user email and langs: ${((0, J.H))(a).strErrorMsg}`;
                  const r = new Map();
                  return (
                    a.data.users.forEach((e) => {
                      const t = new D.b(e.steamid);
                      r.set(t.GetAccountID(), e);
                    }),
                    e.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return Nt;
          })().load(e),
      });
      function Ct(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let Nt;
      var Tt = n(73745);
      function Mt(e) {
        const t = (0, L.a)(),
          n = (0, Et.qh)(),
          a = (function (e) {
            const t = (0, S.I)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const t = _.w.Init(v.Rl),
                  n = new Date();
                n.setFullYear(n.getFullYear() - 2),
                  t.Body().set_rt_oldest_date(0);
                const a = await v.ZK.GetSaleEventOrganizers(e, t);
                return a.BSuccess()
                  ? a
                      .Body()
                      .info()
                      .map((e) => e.toObject())
                  : [];
              },
            });
            return t.isLoading ? null : t.data;
          })(t),
          l = (0, r.useMemo)(() => {
            if (!a || !n) return null;
            const e = new Set(n.map((e) => e.id));
            return a
              .filter((t) => !e.has(t.accountid))
              .sort(
                (e, t) => t.clan_event_gids?.length - e.clan_event_gids.length,
              );
          }, [a, n]);
        return l
          ? r.createElement(
              "div",
              null,
              r.createElement(
                G.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      l.forEach((t) => {
                        const n = (0, ct.z0)(t.accountid),
                          a =
                            ((r = t.accountid),
                            ve.L.getQueryData(["UserEmailAndLangs", r]));
                        var r;
                        e.push([
                          n?.m_strPlayerName || "",
                          "" + t.accountid,
                          a?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString(),
                        ]);
                      });
                    Q.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                },
                "CSV Export",
                r.createElement(z.o, {
                  tooltip: "Wait until the page finishes loading before export",
                }),
              ),
              r.createElement(
                "table",
                null,
                r.createElement(
                  "thead",
                  null,
                  r.createElement(
                    "tr",
                    null,
                    r.createElement("th", null, "User"),
                    r.createElement("th", null, "Email"),
                    r.createElement("th", null, "Events"),
                  ),
                ),
                r.createElement(
                  "tbody",
                  null,
                  l.map((e) =>
                    r.createElement(Bt, { key: e.accountid, organizer: e }),
                  ),
                ),
              ),
            )
          : r.createElement($.t, {
              string: (0, j.we)("#Loading"),
              size: "medium",
            });
      }
      function Bt(e) {
        const { organizer: t } = e,
          n = (0, r.useMemo)(
            () => D.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          a = (0, ct.hW)(n),
          l = (function (e) {
            const t = r.useContext(bt);
            return (0, S.I)(Ct(t, e));
          })(t.accountid),
          s = a.data?.m_strPlayerName || "";
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, s, " (", t.accountid, ")"),
          r.createElement("td", null, l?.data?.email_address),
          r.createElement(
            "td",
            null,
            r.createElement(Pt, {
              name: s,
              rgClanEventGIDs: t.clan_event_gids,
            }),
          ),
        );
      }
      function Pt(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [a, l, s] = (0, Tt.uD)();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            G.$n,
            { onClick: l },
            "See ",
            n.length.toLocaleString(),
            " Events",
          ),
          r.createElement(
            x.E,
            { active: a },
            r.createElement(
              O.o0,
              { bAlertDialog: !0, closeModal: s, strTitle: `${t}'s Events` },
              n.map((e) => r.createElement(kt, { gid: e, key: e })),
            ),
          ),
        );
      }
      function kt(e) {
        const { gid: t } = e,
          n = (0, k.RR)(t);
        return n
          ? r.createElement(
              "a",
              {
                href: `${Y.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                target: "_blank",
              },
              r.createElement("div", null, n.GetNameWithFallback(0)),
              r.createElement("img", { src: n.GetImageURL("capsule", 0) }),
            )
          : r.createElement("div", null, "Loading ", t);
      }
      function Rt(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: r.createElement(u.tH, null, r.createElement(gt, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: r.createElement(u.tH, null, r.createElement(Ze, null)),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: r.createElement(u.tH, null, r.createElement(Mt, null)),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: r.createElement(u.tH, null, r.createElement(We, null)),
              onClick: t,
            },
          ];
        return r.createElement(
          "div",
          { className: p().AdminPageCtn },
          r.createElement(
            "div",
            { className: p().PageTitle },
            "Meet Steam Admin Dashboard ",
            (0, h.Fd)("current_year", "application_config"),
          ),
          r.createElement("hr", null),
          r.createElement(E.V, { tabs: n }),
          r.createElement("div", { className: d().ClearThings }),
          r.createElement("br", null),
        );
      }
      var Lt = n(65946),
        Gt = n(79645),
        Ft = n(1909),
        Ot = n(56330),
        xt = n(85761),
        $t = n.n(xt);
      function zt(e) {
        const t = (function () {
            const [e] = (0, r.useState)(() =>
              (0, A.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: a } = (0, ct.js)(A.iA.accountid),
          [l, s] = (0, r.useState)(!1),
          [i, c] = (0, r.useState)(!1),
          [o, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !a || a.m_bPlayerNamePending
            ? r.createElement($.t, {
                size: "medium",
                position: "center",
                string: (0, j.we)("#Loading"),
              })
            : r.createElement(
                "div",
                { className: (0, U.A)(p().AdminPageCtn, $t().Ctn) },
                r.createElement(
                  "div",
                  { className: p().PageTitle },
                  (0, j.we)("#MeetSteam_MainTitle"),
                ),
                r.createElement("hr", null),
                r.createElement(
                  "div",
                  { className: p().ColumnCtn },
                  r.createElement(
                    "div",
                    { className: p().LeftCol },
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(
                        "h1",
                        null,
                        " ",
                        (0, j.PP)(
                          "#MeetSteam_Intro",
                          a.m_strPlayerName,
                          r.createElement("br", null),
                        ),
                      ),
                      r.createElement(
                        "p",
                        { className: p().IntroText },
                        (0, j.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(jt, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: p().SectionCtn },
                      r.createElement(Ut, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: (0, U.A)(p().SectionCtn, p().ActionBar) },
                      r.createElement(
                        G.jn,
                        {
                          onClick: async () => {
                            c(!0), s(!1), u(!1);
                            const e = `${A.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", A.TS.SESSIONID),
                              t.append("registrationJson", JSON.stringify(m));
                            try {
                              const n = await w().post(e, t, {
                                withCredentials: !0,
                              });
                              1 != n.data.success
                                ? (console.error(
                                    "MeetSteamLanding failed " + n.data.success,
                                  ),
                                  s(!0))
                                : u(!0);
                            } catch (e) {
                              console.error(
                                "MeetSteamLanding failed caught",
                                e,
                              );
                            }
                            c(!1);
                          },
                        },
                        (0, j.we)("#Button_Submit"),
                      ),
                      i &&
                        r.createElement($.t, {
                          size: "medium",
                          position: "center",
                          string: (0, j.we)("#Saving"),
                        }),
                      o &&
                        r.createElement(
                          "div",
                          null,
                          (0, j.we)("#Button_Saved"),
                        ),
                      l &&
                        r.createElement(
                          "div",
                          { className: Ot.ErrorStylesWithIcon },
                          (0, j.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : r.createElement(
              "div",
              { className: $t().Ctn },
              (0, j.we)("#MeetSteam_closed"),
            );
      }
      function Ut(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = N();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h1", null, (0, j.we)("#MeetSteam_Events_Interest")),
          r.createElement(
            "p",
            null,
            (0, j.PP)("#MeetSteam_Events_title", "2025"),
          ),
          r.createElement(
            "p",
            null,
            r.createElement("span", { className: $t().Indicator }, "*"),
            " ",
            (0, j.PP)("#MeetSteam_Events_desc"),
          ),
          r.createElement(
            "table",
            null,
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null),
                r.createElement("th", null),
                r.createElement("th", null),
                r.createElement("th", null),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              a.map((e) =>
                r.createElement(
                  "tr",
                  { key: e.id },
                  r.createElement(
                    "td",
                    null,
                    e.attending
                      ? r.createElement(
                          "span",
                          { className: $t().Indicator },
                          "*",
                        )
                      : "",
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement("div", null, e.name),
                    r.createElement("div", null, e.place),
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement("div", null, e.time),
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement(G.Yh, {
                      checked: t.attending?.includes(e.id),
                      onChange: (a) => {
                        let r = t.attending ? [...t.attending] : [];
                        a && !r.includes(e.id)
                          ? (r.push(e.id), n({ ...t, attending: r }))
                          : !a &&
                            r.includes(e.id) &&
                            (r.splice(r.indexOf(e.id), 1),
                            n({ ...t, attending: r }));
                      },
                      tooltip: (0, j.we)("#MeetSteam_attend_ttip"),
                    }),
                  ),
                ),
              ),
            ),
          ),
          r.createElement("br", null),
          r.createElement(G.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, j.we)("#MeetSteam_others"),
          }),
        );
      }
      function jt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          a = (0, ct.js)(A.iA.accountid),
          l = (function (e) {
            const t = (function () {
                const [e] = (0, r.useState)(
                  () =>
                    (0, A.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, r.useState)(() =>
                  (0, A.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              a = fe(A.iA.accountid, e != n ? e : null);
            return e == n ? t : a?.email;
          })(t?.partner_id),
          [s, i] = (0, r.useState)(() =>
            Boolean((t.email_override && t.email_override != l) || !l),
          ),
          [c, o, u] = (0, Lt.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return a.data
          ? r.createElement(
              "div",
              null,
              r.createElement("h1", null, (0, j.we)("#MeetSteam_You")),
              r.createElement("p", null, (0, j.we)("#MeetSteam_You_Desc")),
              r.createElement(qt, {
                nPartnerID: t.partner_id,
                label: (0, j.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              r.createElement(
                "div",
                { className: $t().EmailInfoRow },
                r.createElement(
                  "div",
                  { className: $t().EmailField },
                  r.createElement(G.pd, {
                    type: "string",
                    label: (0, j.we)("#MeetSteam_You_Email"),
                    disabled: !s,
                    value: t.email_override || l || "",
                    placeholder: (0, j.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !s &&
                  r.createElement(G.Yh, {
                    checked: s,
                    onChange: i,
                    label: (0, j.we)("#MeetSteam_You_Update"),
                    tooltip: (0, j.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              r.createElement(G.JU, null, (0, j.we)("#MeetSteam_NeverMet")),
              r.createElement(G.Yh, {
                label: (0, j.we)("#MeetSteam_NeverMetNo"),
                checked: c,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              r.createElement(
                G.JU,
                null,
                (0, j.we)("#MeetSteam_CapabableEnglish"),
              ),
              r.createElement(
                "div",
                { className: $t().RadioButtonCtn },
                r.createElement(G.Od, {
                  className: $t().RadioButtons,
                  checked: !o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, j.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                r.createElement(G.Od, {
                  className: $t().RadioButtons,
                  checked: o,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, it.sf)(A.TS.LANGUAGE),
                    }),
                  label: (0, j.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              o &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("br", null),
                  r.createElement(
                    G.JU,
                    null,
                    (0, j.we)("#MeetSteam_LanguagePref"),
                  ),
                  r.createElement(Ft.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, j.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : r.createElement($.t, {
              size: "medium",
              position: "center",
              string: (0, j.we)("#Loading"),
            });
      }
      function qt(e) {
        const { nPartnerID: t, setPartnerID: n, label: a } = e,
          l = (0, Gt.c)(A.iA.accountid);
        if (!l)
          return r.createElement($.t, {
            size: "small",
            position: "center",
            string: (0, j.we)("#Loading"),
          });
        if (1 == l.length) return null;
        const s = [];
        return (
          l.forEach((e) =>
            s.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          r.createElement(G.m, {
            layout: "inline",
            label: a,
            rgOptions: s,
            selectedOption: t,
            onChange: (e) => {
              n(e.data);
            },
          })
        );
      }
      var Yt = n(20587),
        Wt = n(13038),
        Kt = n.n(Wt);
      function Ht(e) {
        const { data: t } = (0, ct.js)(A.iA.accountid),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("survey_event_name", "application_config") || "",
            );
            return e;
          })(),
          a = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("survey_data", "application_config") || "",
            );
            return e;
          })(),
          [l, i] = (0, r.useState)(() => a || ""),
          { surveyGID: c } = (0, s.g)(),
          [o, u] = (0, r.useState)(!1),
          [m, d] = (0, r.useState)(!1),
          [E, g] = (0, r.useState)(!1);
        return !t || t.m_bPlayerNamePending
          ? r.createElement($.t, {
              size: "medium",
              position: "center",
              string: (0, j.we)("#Loading"),
            })
          : r.createElement(
              "div",
              { className: (0, U.A)(p().AdminPageCtn, Kt().Ctn) },
              r.createElement(
                "div",
                { className: p().PageTitle },
                (0, j.we)("#MeetSteam_PostSurvey_Title", n),
              ),
              r.createElement("hr", null),
              r.createElement(
                "div",
                { className: p().ColumnCtn },
                r.createElement(
                  "div",
                  { className: p().LeftCol },
                  r.createElement(
                    "div",
                    { className: p().SectionCtn },
                    r.createElement(
                      "div",
                      null,
                      (0, j.we)("#MeetSteam_PostSurvey_Question"),
                    ),
                    r.createElement("textarea", {
                      rows: 10,
                      onChange: (e) => i(e.currentTarget.value),
                      value: l,
                      autoFocus: !0,
                    }),
                  ),
                  r.createElement(
                    "div",
                    { className: (0, U.A)(p().SectionCtn, p().ActionBar) },
                    r.createElement(
                      G.jn,
                      {
                        onClick: async () => {
                          d(!0), u(!1), g(!1);
                          const e = `${A.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${c}`,
                            t = new FormData();
                          t.append("gid", c),
                            t.append("sessionid", A.TS.SESSIONID);
                          let n = {
                            gid: c,
                            simple_response: l,
                            submit_time: Math.floor(new Date().getTime() / 1e3),
                          };
                          t.append("surveyjson", JSON.stringify(n));
                          try {
                            const n = await w().post(e, t, {
                              withCredentials: !0,
                            });
                            1 != n.data.success
                              ? (console.error(
                                  "MeetSteamLanding failed " + n.data.success,
                                ),
                                u(!0))
                              : g(!0);
                          } catch (e) {
                            console.error("MeetSteamLanding failed caught", e);
                          }
                          d(!1);
                        },
                      },
                      (0, j.we)("#Button_Submit"),
                    ),
                    m &&
                      r.createElement($.t, {
                        size: "medium",
                        position: "center",
                        string: (0, j.we)("#Saving"),
                      }),
                    E &&
                      r.createElement("div", null, (0, j.we)("#Button_Saved")),
                    o &&
                      r.createElement(
                        "div",
                        { className: Ot.ErrorStylesWithIcon },
                        (0, j.we)("#Error_ErrorCommunicatingWithNetwork"),
                      ),
                  ),
                ),
              ),
            );
      }
      var Vt = n(27144),
        Jt = n(5695);
      function Qt(e) {
        const t = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("event_gids", "application_config") || [],
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, r.useState)(
              () => (0, A.Tc)("survey_results", "application_config") || [],
            );
            return e;
          })(),
          a = (function () {
            const e = (function () {
              const [e] = (0, r.useState)(() => {
                const e = new Map(),
                  t =
                    (0, A.Tc)("registration_by_gid", "application_config") ||
                    {};
                for (const n in t) {
                  const a = t[n];
                  e.set(n, a);
                }
                return e;
              });
              return e;
            })();
            return (0, r.useMemo)(() => {
              const t = new Map();
              return (
                e.forEach((e, n) => {
                  e.forEach((e) => {
                    const a = new D.b(e.steamid);
                    t.has(a.GetAccountID()) || t.set(a.GetAccountID(), []),
                      (e.gidEvent = n),
                      t.get(a.GetAccountID()).push(e);
                  });
                }),
                t
              );
            }, [e]);
          })(),
          { surveyGID: l } = (0, s.g)(),
          { bIsLoading: i, events: c } = (0, k.PB)(t),
          [o, u] = (0, r.useMemo)(
            () => [
              n
                .map((e) => {
                  const t = new D.b(e.steamid);
                  if (a.has(t.GetAccountID())) {
                    const e = a.get(t.GetAccountID());
                    return JSON.parse(e[0].jsondata).partner_id;
                  }
                  return null;
                })
                .filter(Boolean),
              n.map((e) => new D.b(e.steamid).GetAccountID()),
            ],
            [a, n],
          ),
          m = (0, b.vh)(o),
          d = (0, Vt.B3)(u);
        return !i && m && d
          ? r.createElement(Xt, {
              rgSurveyResults: n,
              mapAccountsToReg: a,
              meetSteamEvents: c,
            })
          : r.createElement($.t, {
              string: "Loading Event, Partner and User Info",
            });
      }
      const Zt = (0, ce.FB)();
      function Xt(e) {
        const {
            rgSurveyResults: t,
            mapAccountsToReg: n,
            meetSteamEvents: a,
          } = e,
          l = (0, r.useMemo)(() => {
            if (!t) return null;
            const e = new Map();
            a.forEach((t) => e.set(t.GID, t));
            const r = [];
            return (
              t.forEach((t) => {
                const a = JSON.parse(t.jsondata),
                  l = new D.b(t.steamid);
                let s = {
                  feedback: a.simple_response,
                  accountid: l.GetAccountID(),
                };
                if (n.has(l.GetAccountID())) {
                  const t = n.get(l.GetAccountID()),
                    a = JSON.parse(t[0].jsondata);
                  (s.partner_id = a.partner_id),
                    (s.email = a.email_override),
                    (s.name = a.name),
                    (s.registrations = "");
                  const r = (0, b.Yd)(a.partner_id);
                  r && (s.partner_name = r.name),
                    t.forEach((t) => {
                      const n = e.get(t.gidEvent);
                      if (n) {
                        const e = n.jsondata.meet_steam_groups.find(
                          (e) => e.group_id === t.group_id,
                        ).localized_session_title[0];
                        s.registrations.length > 0 && (s.registrations += "|"),
                          (s.registrations += e);
                      }
                    });
                } else {
                  const e = (0, Vt.CF)(l.GetAccountID());
                  e && (s.name = e.persona_name);
                }
                r.push(s);
              }),
              r
            );
          }, [n, a, t]),
          s = (0, r.useMemo)(
            () => [
              Zt.accessor("name", { header: "Name", size: 150 }),
              Zt.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: Jt.Gb,
              }),
              Zt.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: en,
              }),
              Zt.accessor("accountid", { header: "Account ID", size: 150 }),
              Zt.accessor("email", { header: "Email", size: 150 }),
              Zt.accessor("partner_name", {
                header: "Partner Name",
                size: 200,
              }),
            ],
            [],
          );
        return l
          ? r.createElement(
              u.tH,
              null,
              r.createElement(
                "div",
                { className: p().AdminPageCtn },
                r.createElement(
                  "div",
                  { className: p().PageTitle },
                  "Survey Results",
                ),
                r.createElement("hr", null),
                r.createElement(
                  G.$n,
                  {
                    id: "download-csv",
                    onClick: () =>
                      (0, ze.K)(
                        "meetsteam_survey_results.csv",
                        l,
                        s.map((e) => ({
                          accessorKey: e.accessorKey,
                          header:
                            "string" == typeof e.header
                              ? e.header
                              : (e.accessorKey ?? ""),
                        })),
                      ),
                    style: { width: "120px" },
                  },
                  "Download CSV",
                ),
                r.createElement("br", null),
                r.createElement(oe.k, {
                  columns: s,
                  data: l,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: l.length,
                }),
              ),
            )
          : r.createElement($.t, { string: (0, j.we)("#Loading") });
      }
      function en(e) {
        const t = e.getValue();
        return t?.length > 0
          ? r.createElement(Jt.DP, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      const tn = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function nn(e) {
        return (
          (0, r.useEffect)(() => {
            Yt.O3.Init();
          }, []),
          r.createElement(
            i.m,
            null,
            r.createElement(
              l.Kd,
              { basename: (0, a.C)() + "meetsteam/" },
              r.createElement(
                s.dO,
                null,
                r.createElement(s.qh, {
                  exact: !0,
                  path: a.B.DiagData(),
                  render: (e) =>
                    r.createElement(c.z, {
                      ...e,
                      strConfigID: "application_config",
                    }),
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: tn.AdminDashboard(),
                  component: Rt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: tn.YearlySurvery(":year(\\d+)"),
                  component: zt,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: tn.PostEventSurvey(":surveyGID(\\d+)"),
                  component: Ht,
                }),
                r.createElement(s.qh, {
                  exact: !0,
                  path: tn.PostEventSurveyResults(":surveyGID(\\d+)"),
                  component: Qt,
                }),
                r.createElement(s.qh, { component: o.a }),
              ),
            ),
          )
        );
      }
    },
  },
]);
