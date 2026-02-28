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
          const a = (0, o.S)(r[0]),
            l = s && s(a);
          l && "default" !== l
            ? "remove" !== l && i.push(l)
            : i.push(e.text(r[0], [n.create({ href: a })])),
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
        a = n(61859),
        l = n(17558),
        c = n(22145),
        d = n(59722),
        u = n(42714);
      const h = i.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: n,
            schema: a,
            onClickURL: d = p,
          } = e,
          h = i.useRef(d);
        h.current = d;
        const [f, g] = i.useState(),
          [v, w] = i.useState(),
          [P, _] = i.useState(),
          [y, x] = (0, l.E)(a),
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
                    ) && (y(e), !0),
                  clipboardTextParser(e, o, r, i) {
                    const l = (0, u.F)(a, e, t, n);
                    return l && new s.Ji(s.FK.from(l), o.start(), o.end());
                  },
                  handlePaste(e, o, r) {
                    let i = [];
                    if (
                      (r.content.descendants((e, o) => {
                        if (e.isText) {
                          const s = (0, u.F)(a, e.text, t, n);
                          s && i.push({ node: e, pos: o, rgNodes: s });
                        }
                      }),
                      !i.length)
                    )
                      return !1;
                    let l = e.state.tr;
                    l.selection.empty || l.deleteSelection();
                    let c = l.selection.from,
                      d = 0;
                    for (const e of i) {
                      const { node: t, pos: n, rgNodes: o } = e,
                        i = r.content.cut(d, n).append(s.FK.from(o));
                      l.insert(c, i), (c += i.size + 2), (d = n + t.nodeSize);
                    }
                    return (
                      l.insert(c, r.content.cut(d)),
                      l.scrollIntoView(),
                      e.dispatch(l),
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
            [t, y, n, a],
          );
        (0, c.c$)(R);
        let U = null;
        return (
          P &&
            f &&
            v &&
            (U = (0, o.jsx)(m, {
              top: v,
              left: f,
              href: P.getAttribute("href"),
            })),
          (0, o.jsxs)(o.Fragment, { children: [U, x] })
        );
      });
      function m(e) {
        const { top: t, left: n, href: s } = e,
          [r, l] = i.useState(0),
          c = i.useRef(null);
        i.useLayoutEffect(() => {
          l(c.current.getBoundingClientRect().width);
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
              children: (0, a.we)("#UserGameNotes_ClickToOpenLink"),
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
        a = n(72739),
        l = n(22145);
      const c = i.memo(function (e) {
        const { specs: t } = e,
          [n, s] = i.useState([]),
          a = i.useRef(0),
          c = i.useCallback(
            (e) => (
              s((t) => [...t, { id: a.current++, nodeView: e }]),
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
          (0, l.c$)(h),
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
            isSelected: l,
          } = e.nodeView,
          [c, d] = i.useReducer((e) => e + 1, 0);
        return (
          i.useEffect(() => s.Register(d).Unregister, [s, d]),
          a.createPortal(
            i.createElement(n.component, { ...o(), selected: l(), ...r }),
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
          const { selection: a } = n.state;
          this.selected = o() >= a.from && o() + t.nodeSize <= a.to;
          const l = (e) => {
              const s = e(n.state.tr, t, o());
              s && n.dispatch(s);
            },
            c = {
              update: l,
              setAttrs: (e, t) => l((n, o, s) => n.setNodeMarkup(s, t, e)),
              removeNode: () => l((e, t, n) => e.delete(n, n + t.nodeSize)),
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
            className: a,
            keepMounted: l = !1,
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
              [a, l] = s.useState("idle"),
              [c, d] = s.useState(e ? {} : { [t]: "0px", overflow: "hidden" }),
              [u, h] = s.useState(e);
            s.useLayoutEffect(() => {
              i.current || l("start"), e && h(e);
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
                        l("idle"),
                        h(e);
                    });
                  };
                if ("start" == a) {
                  const o = n[s];
                  0 == o
                    ? i()
                    : (d((n) => ({
                        [t]: e ? "0px" : `${o}px`,
                        ...n,
                        overflow: "hidden",
                      })),
                      l("active"));
                } else if ("active" == a) {
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
              }, [a, e]);
            const m = { ...c, transition: `${t} ${n}ms` };
            return { style: m, active: u, refDiv: o };
          })(i, c, d);
        return i || m || l
          ? (0, o.jsx)("div", {
              id: t,
              role: n,
              className: a,
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
      n.d(t, { Xv: () => P, pw: () => _ });
      var o = n(7850),
        s = n(81393),
        r = n(20737),
        i = n(22145),
        a = n(52893),
        l = n(29287),
        c = n(90626);
      var d = n(72739),
        u = n(78395),
        h = n(21869),
        m = n(22797),
        p = n(6144),
        f = n(61859),
        g = n(27650),
        v = n(64753),
        w = n(73309);
      function P(e) {
        const {
            children: t,
            ProcessFileUpload: n,
            FetchImageURL: s,
            bAllowImageHotLinking: r = !1,
          } = e,
          [i] = c.useState(() => ({ manager: new R(n, s, r) })),
          { manager: a } = i;
        return (
          a.SetProps(n, s, r),
          (0, o.jsxs)(U.Provider, {
            value: i,
            children: [
              (0, o.jsx)(L, { manager: a }),
              (0, o.jsx)(k, { manager: a, children: t }),
            ],
          })
        );
      }
      const _ = c.memo(function (e) {
        const { nodeType: t } = e,
          n = b(),
          {
            placeholderElements: s,
            createPlaceholder: r,
            replacePlaceholder: d,
          } = (function (e, t = "PlaceholderPlugin") {
            const [n, o] = c.useState([]),
              [s] = c.useState(
                () =>
                  new a.k_({
                    key: new a.hs(t),
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
            (0, i.c$)(s);
            const r = (0, i.Hd)(),
              d = c.useRef(0),
              u = c.useCallback(
                (e, n, o) => {
                  const i = `${t}_${d.current++}`;
                  let a = o || r.state.tr;
                  void 0 === n &&
                    (a.selection.empty || a.deleteSelection(),
                    (n = a.selection.from));
                  const l = (null == o ? void 0 : o.getMeta(s)) || [];
                  return (
                    a.setMeta(s, [...l, { add: { id: i, pos: n, data: e } }]),
                    o || r.dispatch(a),
                    i
                  );
                },
                [s, t, r],
              ),
              h = c.useCallback(
                (e) => {
                  const t = s.getState(r.state),
                    n =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == n ? void 0 : n.length) ? n[0].from : void 0;
                },
                [r, s],
              ),
              m = c.useCallback(
                (e, t) => {
                  const n = h(e);
                  return (
                    !!n &&
                    (t
                      ? r.dispatch(
                          r.state.tr
                            .replaceWith(n, n, t)
                            .setMeta(s, [{ remove: { id: e } }]),
                        )
                      : r.dispatch(
                          r.state.tr.setMeta(s, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [s, h, r],
              );
            return {
              placeholderElements: n,
              createPlaceholder: u,
              findPlaceholder: h,
              replacePlaceholder: m,
            };
          })("span", "FileUploadPlaceholder");
        !(function (e, t) {
          (0, i.c$)(
            c.useMemo(
              () =>
                new a.k_({
                  props: {
                    handlePaste(n, o, s) {
                      const r = [];
                      if (
                        (s.content.descendants((n, o) => {
                          if (n.type == t) {
                            const t = n.attrs.src;
                            (!t.startsWith("data:") &&
                              e.BAllowImageHotLinking()) ||
                              r.push({ url: t, pos: o });
                          }
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
                      return !1;
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
        const u = (0, i.Hd)();
        return (
          c.useEffect(() => n.RegisterEditor(u, r, d), [n, u, r, d]),
          (0, o.jsx)(o.Fragment, {
            children: s.map(({ id: e, element: t, data: n }) =>
              (0, o.jsx)(x, { element: t, data: n }, e),
            ),
          })
        );
      });
      class y extends Error {
        constructor(e) {
          super(e);
        }
      }
      function x(e) {
        const { element: t, data: n } = e,
          s = "file" in n ? n.file : void 0,
          r = c.useMemo(() => s && URL.createObjectURL(s), [s]),
          i = "url" in n ? n.url : r,
          a = null == s ? void 0 : s.type.startsWith("video/");
        return d.createPortal(
          (0, o.jsxs)("span", {
            className: w.FileUploadPlaceholder,
            children: [
              (0, o.jsx)("div", {
                className: w.ThrobberCtn,
                children: (0, o.jsxs)("div", {
                  className: w.ThrobberRow,
                  children: [
                    (0, o.jsx)("div", {
                      className: w.Throbber,
                      children: (0, o.jsx)(m.t, {
                        size: "medium",
                        position: "center",
                      }),
                    }),
                    (0, f.we)("#Prosemirror_FileUpload_Uploading"),
                  ],
                }),
              }),
              !a && (0, o.jsx)("img", { src: i, className: w.PendingImage }),
              a &&
                (0, o.jsx)("video", {
                  src: i,
                  className: w.PendingImage,
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
      class R {
        constructor(e, t, n) {
          (this.m_errors = (0, p.Jc)([])),
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
            console.log(`QueueUploadFileByURL: ${e} at pos ${t}`),
            e.startsWith("data:"))
          ) {
            const o = this.m_fnCreatePlaceholder({ url: e }, t, n);
            return this.ProcessDataURL(e, o), !0;
          }
          if (this.m_fnFetchImageURL) {
            const o = this.m_fnCreatePlaceholder({ url: e }, t, n);
            return this.FetchURLAndProcess(e, o), !0;
          }
          return (
            (0, s.wT)(
              this.m_bAllowImageHotLinking,
              "A URL was posted but we don't have a fnFetchImageURL to process it",
            ),
            !1
          );
        }
        async ProcessDataURL(e, t) {
          const [n, o] = e.split(","),
            s = n.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
          if (!s || "base64" != s.groups.encoding)
            return void this.AddError(
              `Unable to data URL, unexpected format: ${n}`,
            );
          const i = null == s ? void 0 : s.groups.mimetype,
            a = (function (e) {
              switch (e) {
                case "image/jpeg":
                  return "jpg";
                case "image/png":
                  return "png";
                case "image/gif":
                  return "gif";
                case "image/webp":
                  return "webp";
                case "video/mp4":
                  return "mp4";
                case "video/webm":
                  return "webm";
                default:
                  return;
              }
            })(i);
          if (!a)
            return void this.AddError(`Unsupported MIME type for image: ${i}`);
          const l = atob(o),
            c = new Uint8Array(l.length);
          for (let e = 0; e < l.length; e++) c[e] = l.charCodeAt(e);
          const d = await r.C(c.buffer),
            u = new File([c], `upload_${d}.${a}`, { type: i });
          await this.ProcessFile(u, t);
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
            e instanceof y
              ? this.AddError(e.message)
              : this.AddError(`Error proccessing file upload: ${e}`);
          }
          n
            ? this.m_fnReplacePlaceholder(t, n)
            : this.m_fnReplacePlaceholder(t);
        }
      }
      const U = c.createContext(void 0);
      function b() {
        return c.useContext(U).manager;
      }
      const L = c.memo(function (e) {
        const { manager: t } = e,
          n = (0, v.gc)(t.GetErrors());
        return n.length
          ? (0, o.jsx)(h.E, {
              active: !0,
              children: (0, o.jsx)(u.o0, {
                bAlertDialog: !0,
                strTitle: (0, f.we)("#Error_Generic"),
                strDescription: n.map((e, t) =>
                  (0, o.jsx)("div", { children: e }, t),
                ),
                strOKButtonText: (0, f.we)("#Button_OK"),
                onOK: () => t.ClearErrors(),
                onCancel: () => t.ClearErrors(),
              }),
            })
          : null;
      });
      function k(e) {
        const { manager: t, children: n } = e,
          o = c.useCallback(
            (e, n) => {
              for (const o of e)
                t.UploadFile(o, t.GetViewPosition(n.clientX, n.clientY));
            },
            [t],
          ),
          [s, r] = (0, g.hk)(o);
        return c.cloneElement(n, { ...s, ...n.props });
      }
    },
  },
]);
