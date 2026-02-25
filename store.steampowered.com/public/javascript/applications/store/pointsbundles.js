/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8685],
  {
    26590: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Discount: "_3f4n8BFj3ADB61_06XxXfH",
        ShellHeader: "kOC36pdxn9Y3RbFW9Pe4k",
        ShellHeaderFlex: "_3Bs_x4ZJUDXcmcyBIijrY7",
        RewardsPointsCount: "_1XPtbpsI-RZd1JlAozJWI0",
        ShellHeaderBrandName: "_2fDrebx2asA6sXZwEpyywx",
        Shell: "_2ZfecHo99JCqJlsQwW-w_T",
        ShellScrollParent: "_1Qkju8DkEDxfJrSRSvE60X",
        SvgOverrideColor: "_29EuRXgJWKVF34WrLKbeKZ",
        ItemHoverZIndex: "_3gUO3mSjDbNfpuoquiKUX1",
        ActionButton: "_1YLE2s8b1gx2r4hkbxPUis",
        Icon: "_1QoZDC36mteVbqJk1wDSZn",
        PrimaryRedeemButton: "_2nL0cu9XFkFybVcp4CGFCO",
        CheckmarkCircle: "_2UpnBAYN6126aTJs1u2ojE",
        AlreadyOwned: "_3KGvDFZrr40lqc2M9wEJfI",
        AlreadyOwnedText: "_1E4uc1RzsRkpvfk6DwwdMp",
      };
    },
    91855: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => j });
      var r = n(7850),
        s = n(92757),
        l = n(43527),
        o = n(75844),
        a = n(22580),
        i = n(54279),
        d = n(59707),
        c = n(99428),
        u = n(61859),
        x = n(63927),
        m = n(87873),
        f = n(32150),
        p = n(12711),
        _ = n(26590),
        h = n(52038),
        w = n(6519);
      const j = (0, o.PA)((e) => {
          const { bundleid: t } = e.match.params,
            n = parseInt(t),
            o = (0, r.jsx)(s.rd, { to: l.B.LoyaltyStore() });
          if (isNaN(n)) return o;
          const [i] = a.DZ.Get().GetRewardDefinitions(n);
          return i
            ? 5 !== i.type && 6 !== i.type
              ? o
              : (0, r.jsx)(b, { bundle: i })
            : null;
        }),
        b = (0, o.PA)((e) => {
          const { bundle: t } = e,
            n = a.DZ.Get().GetBundleOfferForUser(t);
          return (0, r.jsx)(i.jy, {
            children: (0, r.jsxs)(c.az, {
              paddingY: "xlarge",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [
                (0, r.jsx)(k, { bundle: t, offer: n }),
                0 === n.point_cost
                  ? (0, r.jsx)(g, { className: _.PrimaryRedeemButton })
                  : (0, r.jsx)(d.gs, {
                      cost: n.point_cost,
                      discount: n.discount,
                      originalCost: n.original_point_cost,
                      className: _.PrimaryRedeemButton,
                      onClick: (e) => (0, d.U$)(e, t),
                    }),
                (0, r.jsx)(C, { offer: n }),
              ],
            }),
          });
        }),
        k = (0, o.PA)(({ bundle: e, offer: t }) => {
          const n = (0, x.g)(e),
            s = (0, u.we)("#RewardBundle_OfferDescription", t.discount);
          return (0, r.jsx)(c.az, {
            paddingBottom: "xlarge",
            children: (0, r.jsx)(i.Ch, { title: n, subtitle: s }),
          });
        }),
        g = ({ className: e }) =>
          (0, r.jsxs)("div", {
            className: (0, h.A)(e, _.AlreadyOwned),
            children: [
              (0, r.jsx)(w.wK, { className: _.CheckmarkCircle }),
              (0, r.jsx)("span", {
                className: _.AlreadyOwnedText,
                children: (0, u.we)("#Redeem_BundleItemOwned"),
              }),
            ],
          }),
        C = (0, o.PA)((e) => {
          const { offer: t } = e;
          return (0, r.jsx)(m.Gq, {
            title: (0, u.we)("#RewardBundle_BundleContentsSection_Title"),
            children: (0, r.jsx)(f.n, {
              getItems: (e, n) => ({
                rewards: t.items.slice(e, n),
                bLoadingMore: !1,
                cTotalMatching: t.items.length,
                cMaxToReturn: t.items.length,
              }),
              renderItem: (e) =>
                (0, r.jsx)(
                  p.Fo,
                  {
                    definition: e,
                    purchaseable: !1,
                    onClick: (t) => (0, d.iZ)(t, e),
                  },
                  e.defid,
                ),
            }),
          });
        });
    },
  },
]);
