/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3164],
  {
    20803: (e) => {
      e.exports = {
        narrowWidth: "500px",
        RoleIcon: "_1uvKF_UbD6VhnVdaRkXhbu",
        ProfileLink: "_2oSTSohQ1CZIgVn7E6_0Ft",
        MeBadge: "_2W_HQa5Rhf-hHITgV5H0bu",
        PlayerName: "AdQYbMq7HHJ3Jgljib9UX",
        RoleAndIcon: "_3VzCnvA_1SxskuCqmZkkHA",
        RoleName: "_3C9nRrwzQk9qHlJx6NaXDI",
        FamilyErrorDisplay: "egC2pffk2Ff-wvlnEHOqf",
        FamilyMemberStatus: "bMHOg1F_hCL_s5erx4pWC",
        FamilyMemberRow: "_2LyGIHuQ8SFKb5T262YUvg",
        InfoRow: "_3TgL3aJ2hUdLP2stFZ2wZv",
        InvitePending: "_1IeeH6Qo58UdaFJ3hkLMzs",
        ExpandRowButton: "_3Qa1urRRWR4tjkBSNaO8Wi",
        Selected: "r0ToHd0tmv46GM00Lr0a_",
      };
    },
    66372: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_1xIt8XUBQEbK-xSRQhbtW0",
        PurchaseRequestBanner: "_-0ewDwG8C2PYKGJDqSP40",
      };
    },
    91721: (e) => {
      e.exports = {
        PurchaseRequestInfoPage: "_2vUK2Ij_I2rOkqw9wZ2Diy",
        Header: "kw7cBqn_8NJ4l9R4nkZXE",
        ButtonContainer: "_2TQ_WuHwPbieu3aZfxn2TN",
        PrimaryButton: "_2-7r0qbPMo9ML9sGFiKwq6",
      };
    },
    75048: (e, n, a) => {
      "use strict";
      a.d(n, {
        co: () => w,
        ff: () => P,
        iM: () => j,
        iV: () => _,
        pC: () => q,
      });
      var t = a(7850),
        s = a(90626),
        r = a(20803),
        i = a(12155),
        o = a(56283),
        c = a(61859),
        u = a(52038),
        l = a(1035),
        d = a(17720),
        m = a(14860),
        f = a(14336),
        h = a(68950),
        p = a(26505),
        g = a(34181),
        x = a(83137);
      a(51272), a(30470);
      function y(e) {
        return (0, t.jsx)(i.d1w, {});
      }
      function I(e) {
        return (0, t.jsx)(i.Bir, {});
      }
      function j(e) {
        return (0, t.jsx)("div", {
          className: (0, u.A)(r.RoleIcon, e.className),
          children: 2 == e.role ? (0, t.jsx)(I, {}) : (0, t.jsx)(y, {}),
        });
      }
      function _(e) {
        const { steamid: n } = e,
          a = (0, f.js)(n),
          s = (0, p.M8)(),
          i = (0, x.T)(),
          o = s.data?.get(new d.b(n).GetAccountID()),
          c = i.data?.preferences().parenthesize_nicknames();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            a.data?.m_strPlayerName || " ",
            " ",
            c &&
              o &&
              (0, t.jsxs)("span", {
                className: r.playerNickname,
                children: ["(", o, ")"],
              }),
          ],
        });
      }
      function R(e) {
        const { role: n, persona: a, isSelf: s } = e;
        let i = e.size || "Large";
        const o = (0, p.M8)(),
          u = (0, x.T)(),
          d = o.data?.get(a.GetAccountID()),
          m = u.data?.preferences().parenthesize_nicknames();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: r.ProfileLink,
              children: [
                (0, t.jsx)(l.i8, {
                  className: r.Avatar,
                  persona: a,
                  size: i,
                  statusPosition: "right",
                }),
                (0, t.jsx)(g.D, {
                  className: r.PlayerName,
                  bIsSelf: s,
                  bHideStatus: !1,
                  bHidePersona: !1,
                  bParenthesizeNicknames: m,
                  bCompactView: !1,
                  persona: a,
                  strNickname: d,
                  eFriendRelationship: 3,
                  bEllipsisName: !0,
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: r.RoleAndIcon,
              children: [
                (0, t.jsx)(j, { className: r.ProfileRoleIcon, role: n }),
                (0, t.jsx)("div", {
                  className: r.RoleName,
                  children: (0, c.we)(`#FamilyManagement_Role_${n}`),
                }),
              ],
            }),
          ],
        });
      }
      function q(e) {
        const n = (0, s.useContext)(m.IN);
        return n.errorMessage
          ? (0, t.jsx)("div", {
              className: r.FamilyErrorDisplay,
              children: n.errorMessage,
            })
          : null;
      }
      function P(e) {
        const { persona: n, role: a, invitePending: s } = e,
          i = (0, h.LH)() == n.GetSteamIDAsString();
        return (0, t.jsxs)("div", {
          className: r.FamilyMemberStatus,
          children: [
            (0, t.jsx)(R, { role: a, persona: n, isSelf: i }),
            s &&
              (0, t.jsx)("div", {
                className: r.InvitePending,
                children: (0, c.we)("#FamilyManagement_InvitePending"),
              }),
            i &&
              (0, t.jsx)("span", {
                className: r.MeBadge,
                children: (0, c.we)("#FamilyManagement_Me"),
              }),
          ],
        });
      }
      function w(e) {
        const { bExpanded: n, setExpanded: a } = e;
        return (0, t.jsx)(o.wl, {
          className: (0, u.A)(r.ExpandRowButton, n && r.Selected),
          onClick: () => a(!n),
          children: (0, t.jsx)(i.b8_, { direction: "down" }),
        });
      }
    },
    27144: (e, n, a) => {
      "use strict";
      a.d(n, { B3: () => _, KM: () => x, KT: () => j });
      var t = a(41735),
        s = a.n(t),
        r = a(58632),
        i = a.n(r),
        o = a(90626),
        c = a(80902),
        u = a(75233),
        l = a(17720),
        d = a(68797),
        m = a(78327),
        f = a(56545),
        h = a(37735),
        p = a(23809);
      const g = "nicknames";
      function x(e) {
        const n = (0, p.KV)(),
          { data: a, isLoading: t } = (0, c.I)({
            queryKey: [g],
            queryFn: async () => {
              const e = new Map();
              if (m.iA.logged_in) {
                const a = f.w.Init(h.dN),
                  t = (await h.xt.GetNicknameList(n, a)).Body().toObject();
                t?.nicknames &&
                  t.nicknames.length > 0 &&
                  t.nicknames.forEach((n) => {
                    e.set(n.accountid, n.nickname);
                  });
              }
              return e;
            },
          });
        return a ? a.get(e) : null;
      }
      const y = new (i())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const n =
                "community" == (0, m.yK)()
                  ? m.TS.COMMUNITY_BASE_URL
                  : m.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const a = { accountid: e[0], origin: self.origin },
                  t = await s().get(`${n}actions/ajaxgetavatarpersona`, {
                    params: a,
                  });
                if (
                  !t ||
                  200 != t.status ||
                  1 != t.data?.success ||
                  !t.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(t).strErrorMsg}`;
                return [t.data.userinfo];
              }
              {
                const a = { accountids: e.join(","), origin: self.origin },
                  t = await s().get(`${n}actions/ajaxgetmultiavatarpersona`, {
                    params: a,
                  });
                if (
                  !t ||
                  200 != t.status ||
                  1 != t.data?.success ||
                  !t.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(t).strErrorMsg}`;
                const r = new Map();
                return (
                  t.data.userinfos.forEach((e) =>
                    r.set(new l.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => r.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        I = "avatarandpersonas";
      function j(e) {
        const { data: n, isLoading: a } = (0, c.I)({
          queryKey: [I, e],
          queryFn: () => y.load(e),
        });
        return [n, a];
      }
      function _(e) {
        const n = (0, u.jE)(),
          { data: a, isLoading: t } = (0, c.I)({
            queryKey: [I, e],
            queryFn: async () => {
              const a = await y.loadMany(e);
              return (
                a.forEach((e) => {
                  const a = [I, new l.b(e.steamid).GetAccountID()];
                  n.setQueryData(a, e);
                }),
                a
              );
            },
            enabled: e?.length > 0,
          }),
          s = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              a?.forEach((n) => {
                n instanceof Error || e.push(n);
              }),
              e
            );
          }, [a]);
        return t ? null : s;
      }
    },
    83137: (e, n, a) => {
      "use strict";
      a.d(n, { T: () => o });
      var t = a(56545),
        s = a(37735),
        r = a(80902),
        i = a(23809);
      function o() {
        const e = (0, i.KV)();
        return (0, r.I)(
          (function (e) {
            return {
              queryKey: ["communitypreferences"],
              queryFn: async () => {
                const n = t.w.Init(s.tz),
                  a = await s.xt.GetCommunityPreferences(e, n);
                if (1 != a.GetEResult())
                  throw new Error(
                    `Error from GetCommunityPreferences: ${a.GetEResult()} ${a.GetErrorMessage()}`,
                  );
                return a.Body();
              },
              staleTime: 3e5,
            };
          })(e),
        );
      }
    },
    13164: (e, n, a) => {
      "use strict";
      a.r(n),
        a.d(n, { PurchaseRequestSimpleInfoPage: () => D, default: () => q });
      var t = a(7850),
        s = a(12229),
        r = a(93676),
        i = a(43830),
        o = a(90626),
        c = a(75233),
        u = a(68950),
        l = a(14860),
        d = a(75048),
        m = a(17720),
        f = a(27144),
        h = a(56283),
        p = a(22797),
        g = a(61859),
        x = a(30470),
        y = a(66372);
      function I(e) {
        const { familyGroupID: n } = e,
          a = (0, l.Hs)(n),
          s = (0, l.BO)(n),
          r = s.data?.requests()?.length;
        if (!r) return null;
        const i = (0, g.Yp)("#PurchaseRequestBanner_PendingRequest", r);
        return (0, t.jsx)("div", {
          className: y.PurchaseRequestBanner,
          children: (0, g.PP)(
            "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
            (0, t.jsx)("a", {
              href:
                x.TS.STORE_BASE_URL + "account/familymanagement?tab=requests",
              children: i,
            }),
            (0, t.jsx)("span", { children: a.data?.name() }),
          ),
        });
      }
      var j = a(91721),
        _ = a.n(j),
        R = a(10953);
      function q(e) {
        const { familyGroupID: n, requestID: a } = e,
          [d, m] = o.useState(),
          f = (0, l.Qn)(n, a),
          h = (0, R.useInitCartLocalization)(),
          p = (0, u.LH)(),
          g = (0, c.jE)(),
          x = f.data;
        return (
          (0, o.useEffect)(() => {
            if (x) {
              const e = {
                  type: "request",
                  gid: x.gidshoppingcart,
                  requestID: x.request_id,
                },
                n = (0, i.Vh)();
              n?.requestcartgid === e.gid &&
                n.requestcart &&
                (0, r.LN)(g, e, (0, s.qS)(n.requestcart)),
                m(e);
            }
          }, [x, g]),
          f.isError
            ? (0, t.jsx)(P, { familyGroupID: n })
            : f.isLoading || !h || (x && !d)
              ? (0, t.jsx)(w, {})
              : x
                ? x.is_completed
                  ? (0, t.jsx)(v, { familyGroupID: n })
                  : x.requester_steamid === p
                    ? (0, t.jsx)(k, { familyGroupID: n })
                    : (0, t.jsx)(E, { request: x, cartID: d })
                : (0, t.jsx)(N, { familyGroupID: n })
        );
      }
      function P(e) {
        const { familyGroupID: n } = e;
        return (0, t.jsx)(D, {
          familyGroupID: n,
          headerLocToken: "#PurchaseRequest_RequestErrorHeader",
        });
      }
      function w() {
        return (0, t.jsx)("div", {
          className: _().PurchaseRequestInfoPage,
          children: (0, t.jsx)(p.t, { size: "medium", msDelayAppear: 300 }),
        });
      }
      function N(e) {
        const { familyGroupID: n } = e;
        return (0, t.jsx)(D, {
          familyGroupID: n,
          headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
        });
      }
      function v(e) {
        const { familyGroupID: n } = e;
        return (0, t.jsx)(D, {
          familyGroupID: n,
          headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
        });
      }
      function k(e) {
        const { familyGroupID: n } = e;
        return (0, t.jsx)(D, {
          familyGroupID: n,
          headerLocToken: "#PurchaseRequest_RequestPendingHeader",
          infoLocToken: "#PurchaseRequest_RequestPendingInfo",
        });
      }
      function D(e) {
        const { familyGroupID: n, headerLocToken: a, infoLocToken: s } = e,
          [r, i] = o.useState(null);
        return (0, t.jsx)("div", {
          className: _().PurchaseRequestInfoPage,
          children: (0, t.jsxs)(l.IN.Provider, {
            value: { errorMessage: r, setErrorMessage: i },
            children: [
              (0, t.jsx)("div", {
                className: _().Header,
                children: (0, g.we)(a),
              }),
              (0, t.jsx)(d.pC, {}),
              (0, t.jsx)(I, { familyGroupID: n }),
              !!s &&
                (0, t.jsx)("div", {
                  className: _().Info,
                  children: (0, g.we)(s),
                }),
              (0, t.jsx)("div", {
                className: _().ButtonContainer,
                children: (0, t.jsx)(h.jn, {
                  className: _().PrimaryButton,
                  onClick: () => {
                    window.location.assign(x.TS.STORE_BASE_URL);
                  },
                  children: (0, g.we)("#PurchaseRequested_ReturnToStore"),
                }),
              }),
            ],
          }),
        });
      }
      function E(e) {
        const { request: n, cartID: a } = e,
          s = new m.b(n.requester_steamid).GetAccountID(),
          [r] = (0, f.KT)(s),
          [i, c] = o.useState({ accountid_giftee: s }),
          u = o.useRef(() => {}).current,
          l = (0, g.we)("#Cart_PurchaseRequestTitle", r?.persona_name);
        return (0, t.jsx)(R.BaseCartPage, {
          cartID: a,
          step: "gifts",
          onStepChange: u,
          title: l,
          cartWideGiftInfo: i,
          onCartWideGiftInfoChange: c,
        });
      }
    },
  },
]);
