/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [583],
  {
    87100: (e) => {
      e.exports = {
        CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
        CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
      };
    },
    58317: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => u });
      var r = o(7850),
        i = o(90626),
        n = o(6336),
        s = o(87100),
        c = o(4869);
      function u(e) {
        const [t, o] = (0, i.useState)(!1),
          u = (0, i.useRef)(null),
          a = (0, i.useMemo)(
            () =>
              (e.bPrefixCurrentURL ? window.location.href.split("#")[0] : "") +
              e.text,
            [e.text, e.bPrefixCurrentURL],
          );
        return (0, r.jsx)("span", {
          children: (0, r.jsxs)("button", {
            onClick: (e) => (
              o(!0),
              e.stopPropagation(),
              navigator.clipboard.writeText(a),
              setTimeout(() => o(!1), 1e3),
              !1
            ),
            className: s.CopyButton,
            ref: u,
            title: a,
            children: [
              t &&
                u.current &&
                (0, r.jsx)(n.g, {
                  target: u.current,
                  direction: "bottom",
                  children: (0, r.jsx)("div", {
                    className: s.CopiedNotice,
                    children: "Copied.",
                  }),
                }),
              (0, r.jsx)(c.cKB, {}),
            ],
          }),
        });
      }
    },
  },
]);
