/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6200],
  {
    59722: (e) => {
      e.exports = {
        Hover: "_1lo3nIamSX1TzzE4TlhFXA",
        Link: "_1ds3uh7ntoekPm635F2Ziv",
        LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
      };
    },
    42714: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => s });
      var o = n(26205);
      function s(e, t, n, s) {
        let r,
          i = [];
        for (; (r = t.match(o.O)); ) {
          r.index > 0 && i.push(e.text(t.substring(0, r.index)));
          const l = (0, o.S)(r[0]),
            a = s && s(l);
          a && "default" !== a
            ? "remove" !== a && i.push(a)
            : i.push(e.text(r[0], [n.create({ href: l })])),
            (t = t.substring(r.index + r[0].length));
        }
        if (0 != i.length) return t.length && i.push(e.text(t)), i;
      }
    },
    28106: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => h });
      var o = n(7850),
        s = n(57053),
        r = n(52893),
        i = n(90626),
        l = n(61859),
        a = n(17558),
        c = n(22145),
        d = n(59722),
        u = n(42714);
      const h = i.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: l,
            onClickURL: d = p,
          } = e,
          h = i.useRef(d);
        h.current = d;
        const [f, g] = i.useState(),
          [v, w] = i.useState(),
          [P, _] = i.useState(),
          [x, y] = (0, a.E)(l),
          R = i.useMemo(
            () =>
              new r.k_({
                props: {
                  handleClickOn(e, n, o, s, r, i) {
                    if (i && (r.ctrlKey || 1 == r.button)) {
                      const e = o
                        .resolve(n - s)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          h.current(e.attrs.href, r.view),
                          r.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  handleKeyDown: (e, t) =>
                    !(
                      "k" != t.key ||
                      (!t.metaKey && !t.ctrlKey) ||
                      t.shiftKey ||
                      t.altKey
                    ) && (x(e), !0),
                  clipboardTextParser(e, o, r, i) {
                    const a = (0, u.F)(l, e, t, n);
                    return a && new s.Ji(s.FK.from(a), o.start(), o.end());
                  },
                  handlePaste(e, o, r) {
                    let i = [];
                    if (
                      (r.content.descendants((e, o) => {
                        if (e.isText) {
                          const s = (0, u.F)(l, e.text, t, n);
                          s && i.push({ node: e, pos: o, rgNodes: s });
                        }
                      }),
                      !i.length)
                    )
                      return !1;
                    let a = e.state.tr;
                    a.selection.empty || a.deleteSelection();
                    let c = a.selection.from,
                      d = 0;
                    for (const e of i) {
                      const { node: t, pos: n, rgNodes: o } = e,
                        i = r.content.cut(d, n).append(s.FK.from(o));
                      a.insert(c, i), (c += i.size + 2), (d = n + t.nodeSize);
                    }
                    return (
                      a.insert(c, r.content.cut(d)),
                      a.scrollIntoView(),
                      e.dispatch(a),
                      !0
                    );
                  },
                  handleDOMEvents: {
                    mouseover: (e, t) => {
                      for (
                        let e = t.target;
                        e && e != t.currentTarget;
                        e = e.parentElement
                      )
                        if ("A" == e.nodeName && "getBoundingClientRect" in e) {
                          const t = e.getBoundingClientRect();
                          return (
                            g(t.left + t.width / 2), w(t.bottom + 2), void _(e)
                          );
                        }
                      _(void 0);
                    },
                    mouseleave: (e, t) => (_(void 0), !1),
                  },
                },
              }),
            [t, x, n, l],
          );
        (0, c.c$)(R);
        let k = null;
        return (
          P &&
            f &&
            v &&
            (k = (0, o.jsx)(m, {
              top: v,
              left: f,
              href: P.getAttribute("href"),
            })),
          (0, o.jsxs)(o.Fragment, { children: [k, y] })
        );
      });
      function m(e) {
        const { top: t, left: n, href: s } = e,
          [r, a] = i.useState(0),
          c = i.useRef(null);
        i.useLayoutEffect(() => {
          a(c.current.getBoundingClientRect().width);
        }, [t, n, s]);
        const u = { top: `${t}px`, left: `${Math.max(n - r / 2, 12)}px` };
        return (0, o.jsxs)("div", {
          className: d.Hover,
          style: u,
          ref: c,
          children: [
            (0, o.jsx)("div", { className: d.Link, children: s }),
            (0, o.jsx)("div", {
              className: d.LinkHelp,
              children: (0, l.we)("#UserGameNotes_ClickToOpenLink"),
            }),
          ],
        });
      }
      function p(e, t) {
        t.open(e);
      }
    },
    69956: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => h, U: () => c });
      var o = n(7850),
        s = n(91986),
        r = n(52893),
        i = n(90626),
        l = n(72739),
        a = n(22145);
      const c = i.memo(function (e) {
        const { specs: t } = e,
          [n, s] = i.useState([]),
          l = i.useRef(0),
          c = i.useCallback(
            (e) => (
              s((t) => [...t, { id: l.current++, nodeView: e }]),
              () => s((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          h = i.useMemo(() => {
            const e = {};
            return (
              t
                .filter(Boolean)
                .forEach(
                  (t) => (e[t.type.name] = (e, n, o) => new u(t, e, n, o, c)),
                ),
              new r.k_({ props: { nodeViews: e } })
            );
          }, [t, c]);
        return (
          (0, a.c$)(h),
          n.map(({ id: e, nodeView: t }) => (0, o.jsx)(d, { nodeView: t }, e))
        );
      });
      function d(e) {
        const {
            element: t,
            spec: n,
            getProps: o,
            onPropsChanged: s,
            actions: r,
            isSelected: a,
          } = e.nodeView,
          [c, d] = i.useReducer((e) => e + 1, 0);
        return (
          i.useEffect(() => s.Register(d).Unregister, [s, d]),
          l.createPortal(
            i.createElement(n.component, { ...o(), selected: a(), ...r }),
            t,
          )
        );
      }
      class u {
        constructor(e, t, n, o, r) {
          this.node = t;
          const i = n.dom.ownerDocument.createElement(
            e.type.isInline ? "span" : "div",
          );
          this.dom = i;
          const { selection: l } = n.state;
          this.selected = o() >= l.from && o() + t.nodeSize <= l.to;
          const a = (e) => {
              const s = e(n.state.tr, t, o());
              s && n.dispatch(s);
            },
            c = {
              update: a,
              setAttrs: (e, t) => a((n, o, s) => n.setNodeMarkup(s, t, e)),
              removeNode: () => a((e, t, n) => e.delete(n, n + t.nodeSize)),
              focusView: () => {
                window.setTimeout(() => n.focus(), 1);
              },
            },
            d = new s.l();
          (this.destroy = r({
            element: i,
            spec: e,
            getProps: () => e.readProps(this.node),
            isSelected: () => this.selected,
            onPropsChanged: d,
            actions: c,
          })),
            (this.onPropsChanged = d.Dispatch.bind(d));
        }
        update(e, t, n) {
          return (
            e.type == this.node.type &&
            ((this.node = e), this.onPropsChanged(), !0)
          );
        }
        selectNode() {
          (this.selected = !0), this.onPropsChanged();
        }
        deselectNode() {
          (this.selected = !1), this.onPropsChanged();
        }
      }
      function h(e) {
        return (t, n, o) => t.replaceWith(o, o + n.nodeSize, e);
      }
    },
    86807: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => i });
      var o = n(7850),
        s = n(90626),
        r = n(72739);
      function i(e) {
        const {
            id: t,
            role: n,
            visible: i = !0,
            className: l,
            keepMounted: a = !1,
            expandDirection: c = "height",
            msAnimationDuration: d = 250,
            children: u,
          } = e,
          {
            style: h,
            active: m,
            refDiv: p,
          } = (function (e, t = "height", n = 250) {
            const o = s.useRef(null),
              i = s.useRef(!0),
              [l, a] = s.useState("idle"),
              [c, d] = s.useState(e ? {} : { [t]: "0px", overflow: "hidden" }),
              [u, h] = s.useState(e);
            s.useLayoutEffect(() => {
              i.current || a("start"), e && h(e);
            }, [e]),
              s.useLayoutEffect(
                () => (
                  (i.current = !1),
                  () => {
                    i.current = !0;
                  }
                ),
                [],
              ),
              s.useLayoutEffect(() => {
                const n = o.current,
                  s = "height" == t ? "scrollHeight" : "scrollWidth",
                  i = () => {
                    r.unstable_batchedUpdates(() => {
                      d(e ? {} : { [t]: "0px", overflow: "hidden" }),
                        a("idle"),
                        h(e);
                    });
                  };
                if ("start" == l) {
                  const o = n[s];
                  0 == o
                    ? i()
                    : (d((n) => ({
                        [t]: e ? "0px" : `${o}px`,
                        ...n,
                        overflow: "hidden",
                      })),
                      a("active"));
                } else if ("active" == l) {
                  n.scrollTop;
                  const o = n[s];
                  return (
                    d({ overflow: "hidden", [t]: e ? `${o}px` : "0px" }),
                    n.addEventListener("transitionend", i),
                    () => {
                      n.removeEventListener("transitionend", i);
                    }
                  );
                }
              }, [l, e]);
            const m = { ...c, transition: `${t} ${n}ms` };
            return { style: m, active: u, refDiv: o };
          })(i, c, d);
        return i || m || a
          ? (0, o.jsx)("div", {
              id: t,
              role: n,
              className: l,
              ref: p,
              style: h,
              inert: !i,
              children: u,
            })
          : null;
      }
    },
    71696: (e, t, n) => {
      "use strict";
      n.d(t, { Xv: () => w, pw: () => P });
      var o = n(7850),
        s = n(81393),
        r = n(22145),
        i = n(52893),
        l = n(29287),
        a = n(90626);
      var c = n(72739),
        d = n(78395),
        u = n(21869),
        h = n(22797),
        m = n(6144),
        p = n(61859),
        f = n(27650),
        g = n(64753),
        v = n(73309);
      function w(e) {
        const {
            children: t,
            ProcessFileUpload: n,
            FetchImageURL: s,
            bAllowImageHotLinking: r = !1,
          } = e,
          [i] = a.useState(() => ({ manager: new y(n, s, r) })),
          { manager: l } = i;
        return (
          l.SetProps(n, s, r),
          (0, o.jsxs)(R.Provider, {
            value: i,
            children: [
              (0, o.jsx)(U, { manager: l }),
              (0, o.jsx)(L, { manager: l, children: t }),
            ],
          })
        );
      }
      const P = a.memo(function (e) {
        const { nodeType: t } = e,
          n = k(),
          {
            placeholderElements: s,
            createPlaceholder: c,
            replacePlaceholder: d,
          } = (function (e, t = "PlaceholderPlugin") {
            const [n, o] = a.useState([]),
              [s] = a.useState(
                () =>
                  new i.k_({
                    key: new i.hs(t),
                    state: {
                      init: () => l.zF.empty,
                      apply(t, n) {
                        n = n.map(t.mapping, t.doc);
                        const s = t.getMeta(this) || [];
                        for (const r of s)
                          if (null == r ? void 0 : r.add) {
                            const { id: s, data: i } = r.add,
                              a = (t, n) => {
                                const r = document.createElement(e);
                                return (
                                  o((e) => [
                                    ...e,
                                    { id: s, element: r, data: i },
                                  ]),
                                  r
                                );
                              },
                              c = (e) => {
                                o((t) => t.filter((t) => t.element != e));
                              },
                              d = l.NZ.widget(r.add.pos, a, {
                                id: s,
                                destroy: c,
                              });
                            n = n.add(t.doc, [d]);
                          } else
                            (null == r ? void 0 : r.remove) &&
                              (n = n.remove(
                                n.find(
                                  void 0,
                                  void 0,
                                  (e) => e.id == r.remove.id,
                                ),
                              ));
                        return n;
                      },
                    },
                    props: {
                      decorations(e) {
                        return this.getState(e);
                      },
                    },
                  }),
              );
            (0, r.c$)(s);
            const c = (0, r.Hd)(),
              d = a.useRef(0),
              u = a.useCallback(
                (e, n, o) => {
                  const r = `${t}_${d.current++}`;
                  let i = o || c.state.tr;
                  void 0 === n &&
                    (i.selection.empty || i.deleteSelection(),
                    (n = i.selection.from));
                  const l = (null == o ? void 0 : o.getMeta(s)) || [];
                  return (
                    i.setMeta(s, [...l, { add: { id: r, pos: n, data: e } }]),
                    o || c.dispatch(i),
                    r
                  );
                },
                [s, t, c],
              ),
              h = a.useCallback(
                (e) => {
                  const t = s.getState(c.state),
                    n =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == n ? void 0 : n.length) ? n[0].from : void 0;
                },
                [c, s],
              ),
              m = a.useCallback(
                (e, t) => {
                  const n = h(e);
                  return (
                    !!n &&
                    (t
                      ? c.dispatch(
                          c.state.tr
                            .replaceWith(n, n, t)
                            .setMeta(s, [{ remove: { id: e } }]),
                        )
                      : c.dispatch(
                          c.state.tr.setMeta(s, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [s, h, c],
              );
            return {
              placeholderElements: n,
              createPlaceholder: u,
              findPlaceholder: h,
              replacePlaceholder: m,
            };
          })("span", "FileUploadPlaceholder");
        !(function (e, t) {
          (0, r.c$)(
            a.useMemo(
              () =>
                new i.k_({
                  props: {
                    handlePaste(n, o, s) {
                      if (e.BAllowImageHotLinking()) return !1;
                      const r = [];
                      if (
                        (s.content.descendants((e, n) => {
                          e.type == t && r.push({ url: e.attrs.src, pos: n });
                        }),
                        r.length)
                      ) {
                        let t = n.state.tr;
                        t.selection.empty || t.deleteSelection();
                        let o = t.selection.from,
                          i = 0;
                        for (const n of r) {
                          const r = s.content.cut(i, n.pos - 1);
                          t.insert(o, r),
                            (o += r.size),
                            e.QueueUploadFileByURL(n.url, o, t),
                            (i = n.pos + 1);
                        }
                        return (
                          t.insert(o, s.content.cut(i)),
                          t.scrollIntoView(),
                          n.dispatch(t),
                          !0
                        );
                      }
                    },
                    handleDOMEvents: {
                      paste(t, n) {
                        var o, s;
                        if (
                          (null ===
                            (s =
                              null === (o = n.clipboardData) || void 0 === o
                                ? void 0
                                : o.files) || void 0 === s
                            ? void 0
                            : s.length) > 0
                        ) {
                          n.preventDefault();
                          for (const t of n.clipboardData.files)
                            e.UploadFile(t);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [t, e],
            ),
          );
        })(n, t);
        const u = (0, r.Hd)();
        return (
          a.useEffect(() => n.RegisterEditor(u, c, d), [n, u, c, d]),
          (0, o.jsx)(o.Fragment, {
            children: s.map(({ id: e, element: t, data: n }) =>
              (0, o.jsx)(x, { element: t, data: n }, e),
            ),
          })
        );
      });
      class _ extends Error {
        constructor(e) {
          super(e);
        }
      }
      function x(e) {
        const { element: t, data: n } = e,
          s = "file" in n ? n.file : void 0,
          r = a.useMemo(() => s && URL.createObjectURL(s), [s]),
          i = "url" in n ? n.url : r,
          l = s.type.startsWith("video/");
        return c.createPortal(
          (0, o.jsxs)("span", {
            className: v.FileUploadPlaceholder,
            children: [
              (0, o.jsx)("div", {
                className: v.ThrobberCtn,
                children: (0, o.jsxs)("div", {
                  className: v.ThrobberRow,
                  children: [
                    (0, o.jsx)("div", {
                      className: v.Throbber,
                      children: (0, o.jsx)(h.t, {
                        size: "medium",
                        position: "center",
                      }),
                    }),
                    (0, p.we)("#Prosemirror_FileUpload_Uploading"),
                  ],
                }),
              }),
              !l && (0, o.jsx)("img", { src: i, className: v.PendingImage }),
              l &&
                (0, o.jsx)("video", {
                  src: i,
                  className: v.PendingImage,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  autoPlay: !0,
                }),
            ],
          }),
          t,
        );
      }
      class y {
        constructor(e, t, n) {
          (this.m_errors = (0, m.Jc)([])),
            (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = n);
        }
        SetProps(e, t, n) {
          (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = n),
            (0, s.wT)(
              !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
              "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
            );
        }
        RegisterEditor(e, t, n) {
          return (
            (0, s.wT)(!this.m_view, "Duplicate registration"),
            (this.m_view = e),
            (this.m_fnCreatePlaceholder = t),
            (this.m_fnReplacePlaceholder = n),
            () => {
              this.m_view == e &&
                this.m_fnCreatePlaceholder == t &&
                this.m_fnReplacePlaceholder == n &&
                ((this.m_view = void 0),
                (this.m_fnCreatePlaceholder = void 0),
                (this.m_fnReplacePlaceholder = void 0));
            }
          );
        }
        AddError(e) {
          this.m_errors.Set([...this.m_errors.Value, e]);
        }
        GetErrors() {
          return this.m_errors;
        }
        ClearErrors() {
          this.m_errors.Set([]);
        }
        GetViewPosition(e, t) {
          var n;
          const o =
            null === (n = this.m_view) || void 0 === n
              ? void 0
              : n.posAtCoords({ left: e, top: t });
          return null == o ? void 0 : o.pos;
        }
        async UploadFile(e, t) {
          (this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
            this.AddError("No editor registered to handle file upload");
          const n = this.m_fnCreatePlaceholder({ file: e }, t);
          return this.ProcessFile(e, n);
        }
        BAllowImageHotLinking() {
          return this.m_bAllowImageHotLinking;
        }
        QueueUploadFileByURL(e, t, n) {
          if (
            ((this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
              this.AddError("No editor registered to handle file upload"),
            !this.m_fnFetchImageURL)
          )
            return void console.warn(
              "The file upload manager does not have a way to fetch image URLs, so we cannot accept pasted <img> tags.",
            );
          console.log(`QueueUploadFileByURL: ${e} at pos ${t}`);
          const o = this.m_fnCreatePlaceholder({ url: e }, t, n);
          this.FetchURLAndProcess(e, o);
        }
        async FetchURLAndProcess(e, t) {
          var n;
          try {
            const o = new URL(e),
              s = await this.m_fnFetchImageURL(e),
              r = new File(
                [s],
                decodeURIComponent(
                  (null === (n = o.pathname) || void 0 === n
                    ? void 0
                    : n.replace(/^.*\//, "")) || "image",
                ),
                { type: s.type },
              );
            await this.ProcessFile(r, t);
          } catch (n) {
            this.AddError(`Unable to process URL: ${e}`),
              this.m_fnReplacePlaceholder(t);
          }
        }
        async ProcessFile(e, t) {
          let n;
          try {
            console.log(`Processing file upload: "${e.name}"`),
              (n = await this.m_fnProcessFileUpload(e));
          } catch (e) {
            e instanceof _
              ? this.AddError(e.message)
              : this.AddError(`Error proccessing file upload: ${e}`);
          }
          n
            ? this.m_fnReplacePlaceholder(t, n)
            : this.m_fnReplacePlaceholder(t);
        }
      }
      const R = a.createContext(void 0);
      function k() {
        return a.useContext(R).manager;
      }
      const U = a.memo(function (e) {
        const { manager: t } = e,
          n = (0, g.gc)(t.GetErrors());
        return n.length
          ? (0, o.jsx)(u.E, {
              active: !0,
              children: (0, o.jsx)(d.o0, {
                bAlertDialog: !0,
                strTitle: (0, p.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  (0, o.jsx)("div", { children: e }, t),
                ),
                strOKButtonText: (0, p.we)("#Button_OK"),
                onOK: () => t.ClearErrors(),
                onCancel: () => t.ClearErrors(),
              }),
            })
          : null;
      });
      function L(e) {
        const { manager: t, children: n } = e,
          o = a.useCallback(
            (e, n) => {
              for (const o of e)
                t.UploadFile(o, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [s, r] = (0, f.hk)(o);
        return a.cloneElement(n, { ...s, ...n.props });
      }
    },
  },
]);
