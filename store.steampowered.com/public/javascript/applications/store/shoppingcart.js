/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [62965],
  {
    64908: (e, t, n) => {
      n.r(t), n.d(t, { ShoppingCartErrorModal: () => b, default: () => G });
      var i = n(7850),
        a = n(83392),
        r = n(20187),
        s = n(53965),
        l = n(13904),
        c = n(79443),
        o = n(76217),
        d = n(2551),
        u = n(23809),
        m = n(80902),
        f = n(75233),
        _ = n(51614);
      const h = "giftee-hint",
        C = 600;
      var g = n(60014),
        p = n(41515),
        j = n(90626),
        w = n(1035),
        x = n(31292),
        E = n(14336),
        v = n(56283),
        D = n(74568),
        y = n(61859),
        I = n(30470),
        N = n(48980),
        M = n(11543),
        k = n.n(M),
        S = n(53534),
        A = n(8527);
      function G(e) {
        const { closeCart: t, lineItemIDs: n, replacedPackageIDs: a } = e,
          r = (0, p.UI)(),
          { data: s } = (0, p.g7)(),
          l = j.useMemo(
            () =>
              r.data && n && 0 !== n.length
                ? r.data.line_items.filter((e) => n.includes(e.line_item_id))
                : null,
            [n, r.data],
          ),
          c = (0, g.aL)(I.TS.STORE_BASE_URL + "cart");
        if (
          (j.useEffect(() => {
            r.isSuccess && l && 0 === l.length && t();
          }, [r, l, t]),
          !l)
        )
          return null;
        const d = a?.length > 0;
        return (0, i.jsx)(S.wW, {
          validateCart: s,
          eDisplayType: S.WA.k_ECartDisplayType_Modal,
          children: (0, i.jsxs)(D.mt, {
            active: !0,
            className: k().ShoppingCartModal,
            onDismiss: t,
            children: [
              (0, i.jsx)("div", {
                className: k().ShoppingCartHeader,
                children: (0, y.we)(
                  d ? "#Cart_UpdatedYourCart" : "#Cart_AddedToYourCart",
                ),
              }),
              (0, i.jsx)(N.pf, { lineItems: l, cartValidation: s }),
              (0, i.jsx)(B, { lineItems: l, cartValidation: s }),
              (0, i.jsxs)(o.Z, {
                className: k().ShoppingCartModalBtns,
                children: [
                  (0, i.jsx)(v.$n, {
                    onClick: t,
                    children: (0, y.we)("#Cart_ContinueShopping"),
                  }),
                  (0, i.jsx)(v.jn, {
                    className: k().OpenCartBtn,
                    onClick: () => (window.location.href = c),
                    children: (0, y.we)(
                      "#Cart_ViewMyCart",
                      r.data?.line_items.length,
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function b(e) {
        const { active: t, result: n, onDismiss: a } = e;
        return (0, i.jsxs)(D.mt, {
          active: t,
          onDismiss: a,
          children: [
            (0, i.jsx)(v.Y9, { children: (0, y.we)("#Error_Generic") }),
            (0, i.jsxs)("div", {
              className: k().ErrorModalContent,
              children: [
                (0, i.jsx)("div", {
                  className: k().ErrorModalMessage,
                  children: (0, y.we)("#Cart_ErrorUpdating"),
                }),
                (0, i.jsx)("div", {
                  className: k().ErrorModalCode,
                  children: n ? (0, y.we)("#Cart_ErrorCode", n) : "",
                }),
                (0, i.jsx)("div", {
                  className: k().ErrorModalBottom,
                  children: (0, i.jsx)(v.$n, {
                    onClick: a,
                    children: (0, y.we)("#Button_Close"),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function B(e) {
        const { cartValidation: t, lineItems: n } = e,
          o = j.useRef(!1),
          [g, p] = j.useState(!1),
          { data: v } = (function () {
            const e = (0, u.rX)();
            return (0, m.I)({
              queryKey: [h],
              queryFn: async () => {
                const t = await e.GetObject(h);
                return t
                  ? t.rtCreated < Date.now() / 1e3 - C
                    ? (await e.RemoveObject(h), null)
                    : t.nGifteeAccountID
                  : null;
              },
            });
          })(),
          { data: D } = (0, E.js)(v),
          I = (0, c.EJ)(),
          N = (function () {
            const e = (0, f.jE)(),
              t = (0, u.rX)();
            return (0, _.n)({
              mutationFn: async (e) => {
                e
                  ? await t.StoreObject(h, {
                      nGifteeAccountID: e,
                      rtCreated: Date.now() / 1e3,
                    })
                  : await t.RemoveObject(h);
              },
              onMutate: async (t) => {
                await e.cancelQueries({ queryKey: [h] });
                let n = null;
                t && (n = { nGifteeAccountID: t, rtCreated: Date.now() / 1e3 }),
                  e.setQueryData([h], n);
              },
            });
          })(),
          M = (0, l.C)();
        let S = A.iA.logged_in && !g && !!v && !!D && !I && !!t?.cart_items;
        if (S) {
          const e = new Map(t.cart_items.map((e) => [e.line_item_id, e]));
          S = !!n.find(
            (t) =>
              !t.gift_info?.accountid_giftee &&
              !!e.get(t.line_item_id)?.can_purchase_as_gift,
          );
        }
        if (
          (j.useEffect(() => {
            S &&
              !o.current &&
              ((0, x.D)()?.AddEvent(d.Xm.K4), (o.current = !0));
          }, [S]),
          !S)
        )
          return null;
        const G = (0, i.jsxs)("a", {
          href: D.GetCommunityProfileURL(),
          target: "_blank",
          children: [
            (0, i.jsx)(w.i8, {
              size: "X-Small",
              statusPosition: "right",
              persona: D,
            }),
            (0, i.jsx)("div", {
              className: k().PersonaName,
              children: D.m_strPlayerName,
            }),
          ],
        });
        return (0, i.jsxs)(a.s, {
          className: k().GifteeHintCtn,
          align: "center",
          gap: "3",
          direction: "row",
          children: [
            (0, i.jsx)(r.EY, {
              as: "div",
              align: "center",
              className: k().GifteeHint,
              children: (0, y.PP)("#Cart_GifteeHint_Wishlist", G),
            }),
            (0, i.jsxs)(a.s, {
              gap: "2",
              direction: "row",
              align: "center",
              children: [
                (0, i.jsx)(s.$, {
                  size: "1",
                  color: "dull",
                  onClick: () => {
                    (0, x.D)()?.AddEvent(d.Xm.En), N.mutate(null);
                  },
                  children: (0, y.we)("#Button_No"),
                }),
                (0, i.jsx)(s.$, {
                  size: "1",
                  onClick: () => {
                    for (const e of n)
                      M.mutate({
                        lineItemID: e.line_item_id,
                        lineItemFlags: { is_gift: !0 },
                        giftInfo: { ...e.gift_info, accountid_giftee: v },
                        gidCoupon: e.gidcoupon_applied,
                      });
                    N.mutate(v), p(!0), (0, x.D)()?.AddEvent(d.Xm.xh);
                  },
                  children: (0, y.we)("#Button_Yes"),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
