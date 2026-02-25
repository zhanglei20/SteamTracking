/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4298],
  {
    31718: (e) => {
      e.exports = {
        FancyTableRow: "_36QJs1BZ3so19Xl2es3ihH",
        ExpandableRow: "g86xV6xEGOZ54uRvK3oQ4",
        FancyTableHeader: "_2mHaS291U0AFO1q99AVdLy",
        StickyHeader: "_4y4yrbyr89wNqTGLp049k",
        FancyTableCell: "_3m5AH2HSnsvjImS7uUpvxv",
        SortButton: "_2xr81ssapVQO5aalcANmCk",
        ColumnHeader: "_2XdcqH-eLWVp_qatDebc6J",
        ResizeHandle: "USh_UNRX22s8Wml0mCY3M",
        PrevResizeHandle: "_3wzyEuMO8BdQHAkXnneNRR",
        SortIndicator: "_6z0ftV9RCqbZFmC4EOzYZ",
        GroupExpandIndicator: "_3I86V1lT4xbDJ6FDjMIaMq",
        RowGroup: "_uckWydn-lyPGWjFKZ4Tm",
      };
    },
    66051: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => y });
      var r = n(7850),
        o = n(8871),
        i = n(67796),
        l = n(16666),
        s = n(92148),
        a = n(59366),
        c = n(64238),
        u = n.n(c),
        d = n(90626),
        m = n(31718),
        g = n.n(m),
        f = n(76217),
        h = n(23310),
        p = n(94104);
      const v = d.memo(function (e) {
        const {
            virtualizer: t,
            bDynamic: n,
            idx: o,
            rowGap: i,
            renderItem: l,
          } = e,
          s = d.useCallback(
            (e, n, r) => (t.scrollToIndex(o, { align: "center" }), !0),
            [t, o],
          );
        return (0, r.jsx)(f.Z, {
          ref: n ? t.measureElement : void 0,
          "data-index": o,
          fnScrollIntoViewHandler: s,
          scrollIntoViewWhenChildFocused: "force",
          style: { width: "100%", paddingBottom: i },
          children: l(o),
        });
      });
      d.forwardRef(function (e, t) {
        const {
            nRows: n,
            nItemHeight: i,
            nRowGap: l,
            overscan: s,
            renderItem: a,
            bDynamic: c,
            measureElement: u,
            className: m,
            forceVirtualizeType: g,
            initialOffset: h,
            onOffsetChange: v,
            ...b
          } = e,
          [C, z] = (0, d.useState)(g),
          [S, R] = d.useState(),
          [E, H] = d.useState(),
          y = d.useCallback(
            (e) => {
              if (!e || "window" == g) return;
              const t = (0, p._f)(e, "y");
              (0, d.startTransition)(() => {
                R(t || void 0),
                  H(e.offsetTop),
                  g || z(t ? "element" : "window");
              });
            },
            [g],
          ),
          I = (0, o.Ue)(y, t),
          T = {
            nRows: n,
            nItemHeight: i,
            nRowGap: l,
            overscan: s,
            renderItem: a,
            bDynamic: c,
            measureElement: u,
            forceVirtualizeType: g,
            initialOffset: h,
            onOffsetChange: v,
          };
        return (0, r.jsx)(f.Z, {
          className: m,
          ref: I,
          ...b,
          children: (0, r.jsxs)(d.Suspense, {
            children: [
              "element" === C &&
                (0, r.jsx)(w, { ...T, nScrollMargin: E || 0, elScrollable: S }),
              "window" === C && (0, r.jsx)(x, { ...T, nScrollMargin: E }),
            ],
          }),
        });
      });
      function x(e) {
        const {
            nScrollMargin: t,
            nRows: n,
            nItemHeight: o,
            nRowGap: i = 10,
            overscan: l = 6,
            initialOffset: a,
            onOffsetChange: c,
            measureElement: u,
          } = e,
          m = o + i,
          g = (0, s.XW)({
            count: n,
            scrollMargin: t,
            estimateSize: d.useCallback(() => m, [m]),
            measureElement: u,
            overscan: l,
            initialOffset: a,
            initialRect: void 0,
            observeElementOffset: z,
            observeElementRect: S,
            onChange(e, t) {
              c?.(e.scrollOffset);
            },
          });
        return (
          d.useEffect(() => {
            (0, d.startTransition)(() => {
              g.measure();
            });
          }, [g, m]),
          (0, r.jsx)(b, { ...e, virtualizer: g })
        );
      }
      function w(e) {
        const {
            nRows: t,
            nScrollMargin: n,
            elScrollable: o,
            nItemHeight: i,
            nRowGap: l = 10,
            overscan: a = 6,
            initialOffset: c,
            onOffsetChange: u,
            measureElement: m,
          } = e,
          g = i + l,
          f = (0, s.Te)({
            count: t,
            scrollMargin: n - (o?.offsetTop || 0),
            getScrollElement: () => o,
            estimateSize: d.useCallback(() => g, [g]),
            measureElement: m,
            overscan: a,
            initialRect: o ? void 0 : { height: 1e3, width: 1e3 },
            initialOffset: c,
            observeElementOffset: z,
            observeElementRect: R,
            onChange(e, t) {
              u?.(e.scrollOffset);
            },
          });
        return (
          d.useEffect(() => {
            (0, d.startTransition)(() => {
              f.measure();
            });
          }, [f, g]),
          (0, r.jsx)(b, { ...e, virtualizer: f })
        );
      }
      function b(e) {
        const { virtualizer: t, nRowGap: n, renderItem: o, bDynamic: i } = e,
          l = t.getVirtualItems(),
          s = l.length ? l[0].start - t.options.scrollMargin : 0,
          a = Math.max(0, t.getTotalSize());
        return (0, r.jsx)(f.Z, {
          "flow-children": "column",
          navEntryPreferPosition: h.iU.MAINTAIN_Y,
          style: { height: `${a}px`, width: "100%", position: "relative" },
          children: (0, r.jsx)("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY( ${s}px )`,
            },
            children: l.map((e) =>
              (0, r.jsx)(
                v,
                {
                  virtualizer: t,
                  bDynamic: i,
                  idx: e.index,
                  rowGap: n,
                  renderItem: o,
                },
                e.key,
              ),
            ),
          }),
        });
      }
      function C(e) {
        return (...t) => {
          queueMicrotask(() => {
            (0, d.startTransition)(() => {
              e(...t);
            });
          });
        };
      }
      function z(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        let r;
        r = C(
          "scrollX" in n
            ? (r) => t(n[e.options.horizontal ? "scrollX" : "scrollY"], r)
            : (r) => t(n[e.options.horizontal ? "scrollLeft" : "scrollTop"], r),
        );
        const o = () => r(!0),
          i = () => r(!1);
        return (
          i(),
          n.addEventListener("scroll", o, { passive: !0 }),
          n.addEventListener("scrollend", i, { passive: !0 }),
          () => {
            n.removeEventListener("scroll", o),
              n.removeEventListener("scrollend", i);
          }
        );
      }
      function S(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const r = C(() => t({ width: n.innerWidth, height: n.innerHeight }));
        return (
          r(),
          n.addEventListener("resize", r, { passive: !0 }),
          () => {
            n.removeEventListener("resize", r);
          }
        );
      }
      function R(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const r = C((e) =>
          t({ width: Math.round(e.width), height: Math.round(e.height) }),
        );
        r(n.getBoundingClientRect());
        const o = n.ownerDocument.defaultView;
        if (!o?.ResizeObserver) return () => {};
        const i = new o.ResizeObserver((e) => {
          e[0]?.borderBoxSize[0]
            ? r({
                width: e[0].borderBoxSize[0].inlineSize,
                height: e[0].borderBoxSize[0].blockSize,
              })
            : r(n.getBoundingClientRect());
        });
        return (
          i.observe(n, { box: "border-box" }),
          () => {
            i.unobserve(n);
          }
        );
      }
      const E = d.createContext(void 0);
      function H(e) {
        const { table: t, setColumnSizeOverride: n } = e,
          o = (0, d.useRef)(t);
        o.current = t;
        const i = (0, d.useMemo)(
          () => ({ table: o.current, setColumnSizeOverride: n }),
          [n],
        );
        return (0, r.jsx)(E.Provider, { value: i, children: e.children });
      }
      const y = d.forwardRef(function (e, t) {
        const {
            data: n,
            columns: o,
            className: c,
            width: u,
            height: m,
            nScrollMargin: g,
            nItemHeight: f,
            nHeaderHeight: h,
            overscan: p = 6,
            stickyHeader: v,
            getRowKey: x,
            initialSorting: w,
            initialColumnFilters: b,
            initialGrouping: C,
            initialExpanded: E,
            initialColumnPinning: y,
            initialColumnVisibility: I,
            onGroupingChange: F,
            onVisibleRowsChange: V,
            renderGroup: k,
            virtualizeType: O = "element",
          } = e,
          D = (0, d.useRef)(null),
          [M, G] = (0, d.useState)({}),
          [N, P] = (0, d.useState)({}),
          $ = o.map((e) =>
            "accessorKey" in e
              ? { ...e, filterFn: M[e.accessorKey] ?? e.filterFn }
              : e,
          ),
          _ = $.map((e) => {
            let t = N[e.id];
            return (
              void 0 === t && "accessorKey" in e && (t = N[e.accessorKey]),
              (t ??= e.size),
              { ...e, size: t }
            );
          }),
          B = (0, i.N4)({
            data: n,
            columns: _,
            defaultColumn: { minSize: 60, maxSize: 800 },
            initialState: {
              sorting: w,
              grouping: C ?? [],
              expanded: E,
              columnPinning: y ?? {},
              columnFilters: b,
              columnVisibility: I,
            },
            getCoreRowModel: (0, l.HT)(),
            getSortedRowModel: (0, l.h5)(),
            getFilteredRowModel: (0, l.hM)(),
            getGroupedRowModel: (0, l.cU)(),
            columnResizeMode: "onChange",
          }),
          { rows: L, flatRows: A } = B.getRowModel(),
          K = L.flatMap((e) => (e.getIsExpanded() ? [e, ...e.subRows] : e)),
          W = B.getState().grouping;
        (0, d.useEffect)(() => {
          F?.(W);
        }, [F, W]),
          (0, d.useEffect)(() => {
            V?.(K);
          }, [V, K.length]);
        const X = (0, s.Te)({
            count: K.length,
            scrollMargin: g,
            getScrollElement: d.useCallback(
              () => ("element" === O ? ee.current : window),
              [O],
            ),
            scrollToFn: (e, t, n) =>
              "window" === O ? (0, a.e8)(e, t, n) : (0, a.Ox)(e, t, n),
            estimateSize: d.useCallback(() => f, [f]),
            overscan: p,
            initialRect: void 0,
            observeElementOffset: z,
            observeElementRect: (e, t) => ("window" === O ? S(e, t) : R(e, t)),
            getItemKey(e) {
              const t = K[e];
              return `${t.parentId ?? ""}${x(e, t.original)}`;
            },
          }),
          Z = (0, d.useRef)(0),
          q = d.useMemo(() => {
            const e = B.getFlatHeaders(),
              t = {};
            for (let n = 0; n < e.length; n++) {
              const r = e[n];
              (t[`--header-${r.id}-size`] = `${r.getSize()}px`),
                (t[`--col-${r.column.id}-size`] = `${r.column.getSize()}px`);
            }
            return (Z.current += 1), t;
          }, [B.getState().columnSizingInfo, B.getState().columnSizing, o]);
        d.useEffect(() => {
          (0, d.startTransition)(() => {
            X.measure();
          });
        }, [X, f]);
        const U = X.getVirtualItems(),
          Y = U[0]?.start ?? 0,
          Q = X.getTotalSize(),
          J = (0, s.Te)({
            estimateSize: (e) =>
              K[0]?.getVisibleCells()[e].column.getSize() ?? 0,
            count: K[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: d.useCallback(
              () => ("element" === O ? ee.current : window),
              [O],
            ),
            scrollToFn: (e, t, n) =>
              "window" === O ? (0, a.e8)(e, t, n) : (0, a.Ox)(e, t, n),
            rangeExtractor(e) {
              const t = K[0]?.getVisibleCells() ?? [],
                n = new Set((0, a.vp)(e));
              return (
                t.forEach((e, t) => {
                  e.column.getIsPinned() && n.add(t);
                }),
                Array.from(n).sort((e, t) => e - t)
              );
            },
            observeElementOffset: z,
            observeElementRect: (e, t) => ("window" === O ? S(e, t) : R(e, t)),
          });
        (0, d.useEffect)(() => {
          J.measure();
        }, [Z.current]),
          (0, d.useImperativeHandle)(
            t,
            () => ({
              getData: () => A.map((e) => e.original),
              getVisibleRows: () => K,
              getState: B.getState,
              getColumns: B.getAllColumns,
              getColumnDefs: () => $,
              setColumnFilters: B.setColumnFilters,
              resetColumnFilters: B.resetColumnFilters,
              setColumnFilterFnOverride: G,
              getColumnFilterFnOverride: () => M,
              getContainerElement: () => ee.current,
              getTableElement: () => D.current,
              scrollToColumn(e, t) {
                J.scrollToIndex(e.getIndex(), t);
              },
            }),
            [
              A,
              K,
              B.setColumnFilters,
              B.resetColumnFilters,
              B.getState,
              B.getAllColumns,
              M,
              $,
              J,
            ],
          );
        const ee = (0, d.useRef)(null),
          te = v ? (h ?? 0) : 0;
        let ne = 0;
        const re = K[0]?.getVisibleCells(),
          oe = J.getVirtualItems(),
          ie = oe[oe.length - 1]?.end;
        for (const e of oe) {
          const t = re[e.index];
          t?.column.getIsPinned() && (ne += e.size);
        }
        return (0, r.jsx)(H, {
          table: B,
          setColumnSizeOverride: P,
          children: (0, r.jsx)("div", {
            className: c,
            ref: ee,
            style: {
              width: u,
              height: m,
              overflow: "element" === O ? "auto" : void 0,
              maxWidth: "fit-content",
              scrollPadding: `${te}px 0 0 ${ne}px`,
            },
            children: (0, r.jsxs)("div", {
              role: "table",
              ref: D,
              "aria-rowcount": n.length,
              style: {
                minHeight: Q,
                width: B.getTotalSize(),
                "--virtualPos": `${Y}px`,
                ...q,
              },
              children: [
                B.getHeaderGroups().map((e) =>
                  (0, r.jsx)(
                    T,
                    { group: e, sticky: v, nHeaderHeight: h },
                    e.id,
                  ),
                ),
                U.map((e) =>
                  (0, r.jsx)(
                    j,
                    {
                      row: K[e.index],
                      size: e.size,
                      rowVirtualizer: J,
                      index: e.index,
                      measureRef: X.measureElement,
                      scrollContainerRef: ee,
                      nItemHeight: f,
                      renderGroup: k,
                      rowEnd: ie,
                    },
                    e.key,
                  ),
                ),
              ],
            }),
          }),
        });
      });
      function I(e) {
        const t = e.getIsPinned();
        return {
          borderRight:
            "left" === t && e.getIsLastColumn("left")
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          borderLeft:
            "right" === t && e.getIsFirstColumn("right")
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          left: "left" === t ? `${e.getStart("left")}px` : void 0,
          right: "right" === t ? `${e.getAfter("right")}px` : void 0,
          position: t ? "sticky" : "relative",
          minWidth: e.getSize(),
          zIndex: t ? 1 : 0,
        };
      }
      function T(e) {
        const { group: t, sticky: n, nHeaderHeight: o } = e;
        return (0, r.jsx)("div", {
          role: "row",
          className: u()(
            g().FancyTableRow,
            g().FancyTableHeader,
            n && g().StickyHeader,
          ),
          children: t.headers.map((e, n) => {
            const i = t.headers[n - 1],
              l = {},
              s = e.column.getIsSorted();
            s &&
              !e.column.columnDef.meta?.bDisableSortButton &&
              (l["aria-sort"] = "asc" === s ? "ascending" : "descending");
            let a = "div";
            return (
              e.column.getCanSort() &&
                !e.column.columnDef.meta?.bDisableSortButton &&
                ((a = "button"),
                (l.onClick = e.column.getToggleSortingHandler())),
              e.column.columnDef.meta?.strHeaderTooltip &&
                (l.title = e.column.columnDef.meta?.strHeaderTooltip),
              (0, r.jsx)(
                k,
                {
                  header: e,
                  prevHeader: i,
                  HeaderElement: a,
                  nHeaderHeight: o,
                  sortDirection: s,
                  conditionalProps: l,
                },
                e.id,
              )
            );
          }),
        });
      }
      const j = d.memo(function (e) {
        const {
          row: t,
          size: n,
          rowVirtualizer: o,
          measureRef: i,
          index: l,
          nItemHeight: s,
          renderGroup: a,
        } = e;
        return (0, r.jsx)("div", {
          role: "row",
          className: u()(
            g().FancyTableRow,
            t.getCanExpand() && g().ExpandableRow,
          ),
          style: {
            minHeight: t.getCanExpand() ? void 0 : `${n}px`,
            transform: "translateY(var(--virtualPos))",
          },
          "data-even": l % 2 == 0,
          "data-index": l,
          ref: i,
          children: (0, r.jsx)(F, {
            row: t,
            rowVirtualizer: o,
            nItemHeight: s,
            renderGroup: a,
          }),
        });
      });
      function F(e) {
        const { row: t, rowVirtualizer: n, renderGroup: o } = e;
        if (t.getCanExpand()) {
          const e = o ?? (() => t.groupingValue);
          return (0, r.jsxs)("button", {
            className: g().RowGroup,
            "aria-expanded": t.getIsExpanded(),
            onClick: t.getToggleExpandedHandler(),
            children: [
              (0, r.jsx)("div", { className: g().GroupExpandIndicator }),
              e(t),
            ],
          });
        }
        const i = n.getVirtualItems(),
          l = t.getVisibleCells();
        let s,
          a = 0;
        return (0, r.jsx)(r.Fragment, {
          children: i.map((e) => {
            const t = l[e.index],
              o = t.column.getIsPinned();
            return (
              o ? (a += e.size) : void 0 === s && (s = e.start),
              (0, r.jsx)(
                O,
                {
                  cell: t,
                  rowVirtualizer: n,
                  index: e.index,
                  transform: o ? void 0 : `translateX(${s - a}px)`,
                },
                t.id,
              )
            );
          }),
        });
      }
      function V(e, t) {
        const n = (0, d.useContext)(E),
          r = e.columnDef.meta?.bGrowToFit,
          o = e.id,
          i = r ? e.getSize() : 0,
          l = e.getIsSorted();
        (0, d.useLayoutEffect)(() => {
          if (!r) return;
          if (!t.current) return;
          const e = t.current?.scrollWidth;
          if (!e) return;
          const l = t.current.getBoundingClientRect().width,
            s = window.getComputedStyle(t.current);
          let a = e;
          if (e > l) {
            if (s.paddingLeft) {
              let e = parseInt(s.paddingLeft);
              isNaN(e) || (a += e);
            }
            if (s.paddingRight) {
              let e = parseInt(s.paddingRight);
              isNaN(e) || (a += e);
            }
          }
          a > i &&
            n.setColumnSizeOverride((e) => (e[o] > a ? e : { ...e, [o]: a }));
        }, [r, o, n, i, t, l]);
      }
      function k(e) {
        const {
            header: t,
            prevHeader: n,
            HeaderElement: o,
            nHeaderHeight: l,
            sortDirection: s,
            conditionalProps: a,
          } = e,
          c = (0, d.useRef)(null);
        return (
          V(t.column, c),
          (0, r.jsxs)(
            o,
            {
              role: "columnheader",
              ref: c,
              "data-pinned": !!t.column.getIsPinned(),
              className: u()(
                g().ColumnHeader,
                "button" === o && g().SortButton,
                t.column.columnDef.meta?.headerClassname,
              ),
              style: {
                width: `var(--header-${t.id}-size)`,
                height: void 0 !== l ? `${l}px` : void 0,
                ...I(t.column),
              },
              ...a,
              children: [
                n?.column.getCanResize() &&
                  (0, r.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => n.column.resetSize(),
                    onMouseDown: n.getResizeHandler(),
                    onTouchStart: n.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: u()(g().ResizeHandle, g().PrevResizeHandle),
                  }),
                t.isPlaceholder
                  ? null
                  : (0, i.Kv)(t.column.columnDef.header, t.getContext()),
                s &&
                  !t.column.columnDef.meta?.bDisableSortButton &&
                  (0, r.jsx)("div", { className: g().SortIndicator }),
                t.column.getCanResize() &&
                  (0, r.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => t.column.resetSize(),
                    onMouseDown: t.getResizeHandler(),
                    onTouchStart: t.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: u()(
                      g().ResizeHandle,
                      t.column.getIsResizing() && g().IsResizing,
                    ),
                  }),
              ],
            },
            t.id,
          )
        );
      }
      function O(e) {
        const { cell: t, rowVirtualizer: n, index: i, transform: l } = e,
          s = d.useRef(null),
          a = (0, o.XB)(s, n.measure);
        return (
          V(t.column, s),
          (0, r.jsx)("div", {
            className: u()(
              g().FancyTableCell,
              t.column.columnDef.meta?.cellClassname,
            ),
            "data-index": i,
            "data-table-column-id": t.column.id,
            ref: a,
            style: {
              width: `var(--col-${t.column.id}-size)`,
              transform: l,
              ...I(t.column),
            },
            children: (0, r.jsx)(D, {
              CellComponent: t.column.columnDef.cell,
              context: t.getContext(),
            }),
          })
        );
      }
      const D = d.memo(
        function (e) {
          return (0, i.Kv)(e.CellComponent, e.context);
        },
        (e, t) => e.context.getValue() === t.context.getValue(),
      );
    },
  },
]);
