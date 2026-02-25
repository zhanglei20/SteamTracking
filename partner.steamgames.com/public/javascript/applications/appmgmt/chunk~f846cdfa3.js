/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4017],
  {
    40139: (e) => {
      e.exports = { profile_color_preview: "_2VqhO10AlkJOsh7sPoqPcp" };
    },
    93542: (e) => {
      e.exports = {
        EditionPickerHr: "_2N7bWzRE2_6yMlW8HoWwKL",
        NeedToPublishNotification: "_1YyjMfNhBo6lWsvunbhkmG",
        EditionsEditorRow: "_1kVAFKlQN-iaGJNQM64lbU",
        ImageProvided: "_3acPE1-7PEV9Fv1BIkpb1d",
        PublishReminder: "_2bw5Zr8a6ik4-NIjVgcZSn",
        TaskDone: "_3cgXyLkVbKXYv6hxcrj0P9",
        EditionsEditorContents: "WKVcCeIwShQXxr0XjInT9",
        ErrorList: "_34AP-LqjTCmVO7oQmBRksn",
        ErrorListItems: "_3OPqG7OUgCU252R-DdB0Qj",
        EditionsEditorDialogButtons: "zHZhZ_cYU43MhqpRkvAuR",
        EditionPicker: "N1f8Ye9Eude7K2vJSL7AZ",
        EditionPickerFilterBox: "WLQyL6JRweNM6PHgWKRaB",
        HiddenColor: "_1YtkUWpJ0G7lnnX5bj8X7_",
        ReleasedColor: "_1_2YmmBAHhhpvApS2NQe-r",
        PrepurchaseColor: "_2o-Djga-h_lkGoTFS-PjlF",
        BetaColor: "_29O7AlK2wwhmKjrCxAPIRk",
        EditionsEditorSaveStatus: "_21ABdLhAaZ1KIV7osV-RYV",
        LocalizedImageSelector: "_1K9mhqXjo6xi6qVHMBwcTQ",
        Header: "_3oC7Qb8-E-MF_hxZKzOPyQ",
        UploadedImageOption: "_2F05QhQ_9_rf7qryFDLsh6",
        ExistsImageOption: "_2DTeKovr7g8Z4rrBjVNTZb",
        MissingImageOption: "_29pcde0Q7kd7ClgWo9w5NB",
        ImageDropPane: "_1RWj0soRG2Y-mtoq_nOEe3",
        DragAndDropDescriptionWithImage: "_3-2d6qJPYFImAjNB825gPq",
        DragAndDropDescriptionWithoutImage: "_2FAmjUnpcILnVdO29vdLn6",
        DeleteLink: "D_kqKamsBe39qbMqcuino",
        ErrorBox: "_20-2lEQLGnc64V46i5khL-",
        AltTextArea: "_20wBVZiv8PNqku4mQTONkN",
      };
    },
    46595: (e) => {
      e.exports = {
        ReleaseDateInfoCtn: "_2mHXbGuTlraXe_Q1JYKmJZ",
        GameEditCtn: "_2JigUHOJ_OTCRjbohXgz9q",
        ReleaseDateContent: "AVZgMOcgNdb95embDq8g1",
        EditButton: "_1R5w2idIf5H3xZh7C6ObQL",
        Spacer: "_3TcEpA8cfRVBTd8q_vvFWu",
        Top: "kNcnUbYODwtyQ3AZp_VUM",
        Bottom: "_2TBzK4oRpgLv5hHxtojPq5",
        EditButtonIcon: "_22a0aPwQVuTJx58YZQWYBd",
        LabelField: "_1olrpCNFeNf7UfruKHLVhY",
        Label: "M3h38e4KnwYsDvQP72dg0",
        BigField: "_4jS-jBGyvj3mr8jkJ46Gc",
        Set: "eEhAf6mE-OR6VCf4eHEkC",
      };
    },
    51780: (e) => {
      e.exports = {
        ReleaseDateModal: "RKE7g5McLhANBdiTzm-ai",
        ReleaseDateRequestBody: "_32CdqVuKRqrf1SR8Hday6v",
        Column: "_gUUe9JABsRpGmdkooO11",
        ColumnLabel: "xebmA68ybtGEgyG_oVMM0",
        ReleaseColumnFooter: "_3egfk1DBae-OZSZtcwrDDq",
        ColumnContent: "eZhskcRU_Ejw5kmSBLRTU",
        BlueNote: "_1iIVgx9LfomTs6Ycj6qYgV",
        PublishNowWarning: "_2-dra08qCgH_F_0T756AwP",
        ErrorBox: "_27JIJRbunDgYqS_xDV7Xha",
        HTMLErrorBoxAppear: "bXT6nAG7o3DqMjoZ_zWJ",
      };
    },
    92528: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => l });
      var a = n(7850),
        i = n(90626),
        s = n(64046),
        r = n(88997),
        o = n(40139),
        d = n.n(o);
      function l(e) {
        const { rgGameProfileColorDefs: t } = e,
          n = t.map((e) =>
            (0, a.jsxs)(
              "div",
              {
                className: "form_row_flex",
                children: [
                  (0, a.jsxs)("div", {
                    className: "form_label_flex",
                    children: ["*", e.strProfileColorLabel],
                  }),
                  (0, a.jsx)("div", {
                    className: "form_data_flex",
                    children: p(e),
                  }),
                ],
              },
              e.strProfileColorKey,
            ),
          );
        return (0, a.jsx)("div", {
          className: d().profile_colors_ctn,
          children: n,
        });
      }
      function c(e) {
        const t = e.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
        if (!t) return null;
        const [, n, a, i] = t;
        return `${n},${a},${i}`;
      }
      function p(e) {
        const { strKVPrepend: t, bWriteAsRGBOnly: n } = e;
        let [o, l] = i.useState(e.strCurrentColor);
        const p = i.useRef(void 0);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("input", {
              ref: p,
              type: "text",
              name: `${t || "item[profile_colors]"}[${e.strProfileColorKey}]`,
              onChange: () => {
                l(p.current.value);
              },
              placeholder: n ? "255,255,255" : "rgba(255, 255, 255, .5)",
              size: 20,
              value: n ? c(o) : o,
              readOnly: !0,
            }),
            (0, a.jsx)("div", {
              className: d().profile_color_preview,
              style: { backgroundColor: `${o}` },
              onClick: (e) => {
                (0, r.lX)(
                  (0, a.jsx)(s.s, {
                    onChange: (e) => {
                      l(e);
                    },
                    color: o,
                    disableAlpha: n,
                  }),
                  e,
                  { bDisablePopTop: !0 },
                );
              },
            }),
          ],
        });
      }
    },
    35863: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => j });
      var a = n(7850),
        i = n(90626),
        s = n(93542),
        r = n(61859),
        o = n(21869),
        d = n(10411),
        l = n(52038),
        c = n(51614),
        p = n(41735),
        m = n.n(p),
        _ = n(22797),
        g = n(78327),
        h = n(12155);
      const u = 748,
        x = 896;
      class E {
        rgSet = new Set();
        constructor(e) {
          for (const t of e) this.rgSet.add(JSON.stringify(t));
        }
        has(e) {
          const t = JSON.stringify(e);
          return this.rgSet.has(t);
        }
        add(e) {
          const t = JSON.stringify(e);
          return this.rgSet.add(t), this;
        }
        delete(e) {
          const t = JSON.stringify(e);
          return this.rgSet.delete(t);
        }
        get size() {
          return this.rgSet.size;
        }
        *[Symbol.iterator]() {
          for (const e of this.rgSet) yield JSON.parse(e);
        }
      }
      function j(e) {
        const [t, n] = (0, i.useState)("closed"),
          p = e.rgEditions,
          [u, x] = (0, i.useState)(new E(p)),
          j = new Map();
        for (const t of Object.keys(e.rgEditionsComparisonGraphics))
          j.set(t, e.rgEditionsComparisonGraphics[t]);
        const [S, A] = (0, i.useState)(() => {
            const t = new Map();
            for (const n of Object.keys(e.rgEditionsAltText))
              t.set(n, e.rgEditionsAltText[n]);
            return t;
          }),
          [C, D] = (0, i.useState)(j),
          w = Object.keys(e.rgEditionsComparisonGraphics).length > 0,
          R = (function (e, t) {
            return (0, c.n)({
              mutationFn: async (n) => {
                const {
                    rgEditionsToSave: a,
                    rgGraphicsToDelete: i,
                    mapGraphicsToUpload: s,
                    mapAltText: r,
                  } = n,
                  o = new FormData();
                o.append("sessionid", g.TS.SESSIONID);
                const d = Math.max(t.length, a.length);
                for (let e = 0; e < d; e++)
                  e >= a.length
                    ? (o.append(
                        `app[related_items][editions][${e}][packageid]`,
                        "",
                      ),
                      o.append(
                        `app[related_items][editions][${e}][bundleid]`,
                        "",
                      ))
                    : a[e].packageid
                      ? (o.append(
                          `app[related_items][editions][${e}][packageid]`,
                          "" + a[e].packageid,
                        ),
                        o.append(
                          `app[related_items][editions][${e}][bundleid]`,
                          "",
                        ))
                      : a[e].bundleid
                        ? (o.append(
                            `app[related_items][editions][${e}][packageid]`,
                            "",
                          ),
                          o.append(
                            `app[related_items][editions][${e}][bundleid]`,
                            "" + a[e].bundleid,
                          ))
                        : console.log(
                            "Tried to save an edition with neither packageid or bundleid.",
                          );
                s.forEach((e, t) => {
                  o.append(
                    `edition_comparison|edition_comparision|assets|edition_comparison|image|${t}`,
                    e,
                  );
                });
                for (const e of i)
                  o.append(`app[assets][edition_comparison][image][${e}]`, "");
                r.forEach((e, t) => {
                  o.append(
                    `app[assets][edition_comparison][image_alt_text][${t}]`,
                    e,
                  );
                });
                const l = `${g.TS.PARTNER_BASE_URL}admin/game/quickupdateajax/${e}`;
                return m().post(l, o);
              },
            });
          })(e.nItemId, p),
          v = new Map();
        for (const t of e.rgCandidates) v.set(t.nId, t);
        let N = null;
        if (
          u.size > 0 &&
          -1 !== e.nBasePackageId &&
          !u.has({ packageid: e.nBasePackageId })
        ) {
          const t = e.rgCandidates.find((t) => t.nId === e.nBasePackageId);
          N = (0, r.we)(
            "#StoreAdmin_EditEditions_MustIncludeCheapestBasePageError",
            t?.strName,
            e.nBasePackageId,
          );
        }
        const k = i.useId();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o.E, {
              active: "editor" === t || "alert" === t,
              children: (0, a.jsxs)(d.eV, {
                "aria-labelledby": k,
                closeModal: () => n("closed"),
                children: [
                  "editor" === t &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)("div", {
                          className: s.EditionsEditorContents,
                          children: [
                            (0, a.jsx)("h2", {
                              id: k,
                              children: (0, r.we)(
                                "#StoreAdmin_EditEditions_DialogTitle",
                              ),
                            }),
                            R.isPending && (0, a.jsx)(_.t, {}),
                            !R.isPending &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  null !== N &&
                                    (0, a.jsxs)("div", {
                                      className: s.ErrorBox,
                                      children: [
                                        (0, a.jsx)(h.X, {}),
                                        (0, a.jsx)("div", { children: N }),
                                      ],
                                    }),
                                  (0, a.jsx)(b, {
                                    rgEditions: u,
                                    rgCandidates: e.rgCandidates,
                                    setEditions: x,
                                  }),
                                  (0, a.jsx)("div", {
                                    className: s.EditionPickerHr,
                                  }),
                                  (0, a.jsx)(f, {
                                    mapOriginalImages: j,
                                    mapImages: C,
                                    setImages: D,
                                    mapAltText: S,
                                    setAltText: A,
                                    bAppHasSteamChinaToolsEnabled:
                                      e.bAppHasSteamChinaToolsEnabled,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: s.EditionsEditorDialogButtons,
                          children: [
                            (0, a.jsx)("button", {
                              className: "btn_green_white_innerfade",
                              disabled: null !== N,
                              onClick: async () => {
                                const e = new Map();
                                C.forEach((t, n) => {
                                  t instanceof File && e.set(n, t);
                                });
                                const t = [];
                                j.forEach((e, n) => {
                                  C.has(n) || t.push(n);
                                }),
                                  R.mutate({
                                    rgEditionsToSave: Array.from(u),
                                    mapGraphicsToUpload: e,
                                    mapAltText: S,
                                    rgGraphicsToDelete: t,
                                  }),
                                  n("alert");
                              },
                              children: (0, r.we)(
                                "#StoreAdmin_EditEditions_SaveButton",
                              ),
                            }),
                            (0, a.jsx)("button", {
                              onClick: () => {
                                x(new E(p)), n("closed");
                              },
                              children: (0, r.we)(
                                "#StoreAdmin_EditEditions_CancelButton",
                              ),
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: s.NeedToPublishNotification,
                          children: (0, r.oW)(
                            "#StoreAdmin_EditEditions_NeedToPublishNotice",
                            (0, a.jsx)("a", {
                              target: "_blank",
                              href: `${g.TS.PARTNER_BASE_URL}admin/game/edit/${e.nItemId}?activetab=tab_publish`,
                            }),
                          ),
                        }),
                      ],
                    }),
                  "alert" === t &&
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)("div", {
                        className: s.EditionEditorContents,
                        children: [
                          (0, a.jsx)("h2", {
                            children: (0, r.we)(
                              "#StoreAdmin_EditEditions_SavingTitle",
                            ),
                          }),
                          (0, a.jsxs)("div", {
                            className: s.EditionsEditorSaveStatus,
                            children: [
                              R.isPending &&
                                (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(_.t, {}),
                                    " ",
                                    (0, r.we)(
                                      "#StoreAdmin_EditEditions_Saving",
                                    ),
                                  ],
                                }),
                              !R.isPending &&
                                (0, a.jsx)("span", {
                                  children: (0, r.we)(
                                    "#StoreAdmin_EditEditions_Saved",
                                  ),
                                }),
                            ],
                          }),
                          (0, a.jsx)("span", {
                            className: s.PublishReminder,
                            children: (0, r.oW)(
                              "#StoreAdmin_EditEditions_NeedToPublishAlert",
                              (0, a.jsx)("a", {
                                target: "_blank",
                                href: `${g.TS.PARTNER_BASE_URL}admin/game/edit/${e.nItemId}?activetab=tab_publish`,
                              }),
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: s.EditionsEditorDialogButtons,
                            children: (0, a.jsx)("button", {
                              onClick: () => {
                                n("refreshing"), window.location.reload();
                              },
                              children: (0, r.we)(
                                "#StoreAdmin_EditEditions_OK",
                              ),
                            }),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
            (e.rgCandidates.length > 1 || e.rgEditions.length > 0) &&
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)("div", {
                  className: (0, l.A)(
                    s.EditionsEditorRow,
                    w && s.ImageProvided,
                  ),
                  children: [
                    "closed" === t &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("button", {
                            className: s.OpenEditorButton,
                            onClick: () => n("editor"),
                            children: (0, r.we)(
                              "#StoreAdmin_EditEditions_ManageEditionsButton",
                            ),
                          }),
                          u?.size > 0
                            ? (0, a.jsx)("span", {
                                children: (0, r.we)(
                                  "#StoreAdmin_EditEditions_ManageEditionsDescription",
                                  u.size,
                                ),
                              })
                            : (0, a.jsx)("span", {
                                children: (0, r.we)(
                                  "#StoreAdmin_EditEditions_GroupEditionsDescription",
                                ),
                              }),
                          (0, a.jsx)("span", {
                            children: w
                              ? (0, a.jsx)("span", {
                                  className: (0, l.A)(
                                    s.TaskDone,
                                    "icon_check_green",
                                  ),
                                  children: (0, r.we)(
                                    "#StoreAdmin_EditEditions_ManageEditions_HasComparisonGraphic",
                                  ),
                                })
                              : (0, r.we)(
                                  "#StoreAdmin_EditEditions_ManageEditions_NoComparisonGraphic",
                                ),
                          }),
                        ],
                      }),
                    "refreshing" === t &&
                      (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(_.t, { size: "small" }),
                      }),
                  ],
                }),
              }),
          ],
        });
      }
      const S = (e) =>
        "bundle" === e.eType ? { bundleid: e.nId } : { packageid: e.nId };
      function b(e) {
        const { rgEditions: t, rgCandidates: n, setEditions: o } = e,
          d = new Map();
        for (const t of e.rgCandidates) d.set(t.nId, t);
        const [c, p] = (0, i.useState)(""),
          m = n.filter(
            (e) => -1 !== e.strName.toLowerCase().indexOf(c.toLowerCase()),
          );
        return (0, a.jsxs)("div", {
          className: s.EditionPicker,
          children: [
            (0, a.jsx)("p", {
              children: (0, r.oW)(
                "#StoreAdmin_EditEditions_GroupEditionsIntro",
                (0, a.jsx)("a", {
                  target: "_blank",
                  href: `${g.TS.PARTNER_BASE_URL}doc/store/manageeditions`,
                }),
              ),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("h3", {
              children: (0, r.we)("#StoreAdmin_EditEditions_StepNumber1"),
            }),
            (0, a.jsx)("p", {
              children: (0, r.we)(
                "#StoreAdmin_EditEditions_SelectEditionsDescription",
              ),
            }),
            (0, a.jsx)("div", {
              className: s.EditionPickerFilterBox,
              children: (0, a.jsx)("input", {
                type: "text",
                placeholder: (0, r.we)(
                  "#StoreAdmin_EditEditions_FilterDescription",
                ),
                value: c,
                onChange: (e) => {
                  const t = e.target.value;
                  p(t);
                },
              }),
            }),
            (0, a.jsxs)("table", {
              children: [
                (0, a.jsx)("thead", {
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsx)("td", {
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_ColumnEdition",
                        ),
                      }),
                      (0, a.jsx)("td", {
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_ColumnPackageTitle",
                        ),
                      }),
                      (0, a.jsx)("td", {
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_ColumnState",
                        ),
                      }),
                      (0, a.jsx)("td", {
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_ColumnPrice",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("tbody", {
                  children: m.map((e) => {
                    const n = t.has(S(e));
                    let i = s.HiddenColor;
                    return (
                      "Released" === e.strReleaseState
                        ? (i = s.ReleasedColor)
                        : "Prepurchase" === e.strReleaseState
                          ? (i = s.PrepurchaseColor)
                          : "Beta" === e.strReleaseState && (i = s.BetaColor),
                      (0, a.jsxs)(
                        "tr",
                        {
                          className: (0, l.A)(i, s.EditionPickerRow),
                          children: [
                            (0, a.jsx)("td", {
                              children: (0, a.jsx)("input", {
                                type: "checkbox",
                                onChange:
                                  ((r = e.eType),
                                  (d = e.nId),
                                  (e) => {
                                    const n = new E(t);
                                    e.target.checked
                                      ? n.add(
                                          "package" === r
                                            ? { packageid: d }
                                            : { bundleid: d },
                                        )
                                      : n.delete(
                                          "package" === r
                                            ? { packageid: d }
                                            : { bundleid: d },
                                        ),
                                      o(n);
                                  }),
                                checked: n,
                              }),
                            }),
                            (0, a.jsx)("td", { children: e.strName }),
                            (0, a.jsx)("td", {
                              children: e.strLocalizedReleaseState,
                            }),
                            (0, a.jsx)("td", {
                              dangerouslySetInnerHTML: { __html: e.strPricing },
                            }),
                          ],
                        },
                        e.nId,
                      )
                    );
                    var r, d;
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function f(e) {
        const {
            mapOriginalImages: t,
            mapImages: n,
            setImages: o,
            mapAltText: d,
            setAltText: l,
            bAppHasSteamChinaToolsEnabled: c,
          } = e,
          [p, m] = (0, i.useState)(null),
          _ = (0, r.O9)(e.bAppHasSteamChinaToolsEnabled),
          [g, E] = (0, i.useState)("english"),
          j = (0, i.useRef)(null);
        let S = null,
          b = "missing";
        if (n.has(g)) {
          const e = n.get(g);
          e instanceof File
            ? ((S = URL.createObjectURL(e)), (b = "uploaded"))
            : ((S = e), (b = "exists"));
        }
        const f = (e) =>
          n.has(e) && n.get(e) instanceof File
            ? s.UploadedImageOption
            : n.has(e)
              ? s.ExistsImageOption
              : s.MissingImageOption;
        return (0, a.jsxs)("div", {
          className: s.LocalizedImageSelector,
          children: [
            (0, a.jsx)("h3", {
              children: (0, r.we)("#StoreAdmin_EditEditions_StepNumber2"),
            }),
            (0, a.jsx)("p", {
              children: (0, r.we)(
                "#StoreAdmin_EditEditions_UploadComparisonGraphicsDescription",
                u,
                x,
              ),
            }),
            (0, a.jsxs)("div", {
              className: s.Header,
              children: [
                (0, a.jsx)("input", {
                  type: "file",
                  ref: j,
                  onChange: async (e) => {
                    if (e.target.files && e.target.files[0]) {
                      const t = e.target.files[0],
                        a = await createImageBitmap(t);
                      if (a.width !== u || a.height !== x)
                        return void m(
                          (0, r.we)(
                            "#StoreAdmin_EditEditions_ImageSizeError",
                            u,
                            x,
                            a.width,
                            a.height,
                          ),
                        );
                      const i = new Map(n);
                      i.set(g, t), o(i), m(null);
                    }
                  },
                  style: { display: "none" },
                }),
                (0, a.jsx)("select", {
                  onChange: (e) => {
                    E(e.target.value), m(null);
                  },
                  className: f(g),
                  children: (0, r.vR)(_, (e, t) =>
                    (0, a.jsx)(
                      "option",
                      { value: t, className: f(t), children: e },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            (0, a.jsx)("p", {
              className: s.ErrorBox,
              children:
                null !== p &&
                (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(h.X, {}), p] }),
            }),
            (0, a.jsx)("div", {
              className: s.ImageDropPane,
              onClick: () => j.current?.click(),
              onDragOver: (e) => e.preventDefault(),
              onDrop: async (e) => {
                if (
                  (e.preventDefault(),
                  e.dataTransfer.files && e.dataTransfer.files[0])
                ) {
                  const t = e.dataTransfer.files[0],
                    a = await createImageBitmap(t);
                  if (a.width !== u || a.height !== x)
                    return void m(
                      (0, r.we)(
                        "#StoreAdmin_EditEditions_ImageSizeError",
                        u,
                        x,
                        a.width,
                        a.height,
                      ),
                    );
                  const i = new Map(n);
                  i.set(g, t), o(i), m(null);
                }
              },
              children: S
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: s.DragAndDropDescriptionWithImage,
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_DragAndDropToReplace",
                        ),
                      }),
                      (0, a.jsx)("img", { src: S }),
                      (0, a.jsx)("div", {
                        className: s.DeleteLink,
                        children: (0, a.jsx)("a", {
                          onClick: () => {
                            if (n.has(g)) {
                              const e = new Map(n);
                              e.delete(g), o(e), m(null);
                            }
                          },
                          children: (0, r.we)(
                            "#StoreAdmin_EditEditions_Delete",
                          ),
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)("div", {
                    className: s.DragAndDropDescriptionWithoutImage,
                    children: (0, r.we)(
                      "#StoreAdmin_EditEditions_DragAndDropHere",
                    ),
                  }),
            }),
            (0, a.jsx)("h3", {
              children: (0, r.we)("#StoreAdmin_EditEditions_StepNumber3"),
            }),
            (0, a.jsx)("label", {
              htmlFor: "altTextArea",
              children: (0, a.jsx)("p", {
                children: (0, r.we)(
                  "#StoreAdmin_EditEditions_AltTextDescription",
                ),
              }),
            }),
            (0, a.jsx)("textarea", {
              id: "altTextArea",
              className: s.AltTextArea,
              onChange: (e) => {
                const t = new Map(d);
                t.set(g, e.target.value), l(t);
              },
              value: d.get(g) ?? "",
            }),
          ],
        });
      }
    },
    39679: (e, t, n) => {
      "use strict";
      n.d(t, { Ll: () => c, ut: () => l });
      var a = n(7850),
        i = n(90626),
        s = n(63369),
        r = n(16676),
        o = n(61859);
      const d = [
          "date_full",
          "date_month",
          "date_quarter",
          "date_year",
          "text_comingsoon",
          "text_tba",
        ],
        l = ["date_full", "date_month", "date_quarter"];
      function c(e) {
        const {
            rtSteamReleaseDate: t,
            value: n,
            onChange: l,
            rgComingSoonOptionOverride: c,
            bExpandedDisplay: p,
          } = e,
          m = !!t,
          _ = i.useMemo(
            () =>
              (c || d).map((e) => ({
                label: (0, s.M)(e, t, null, p),
                data: e,
              })),
            [t, c, p],
          ),
          g = i.useCallback(
            (e) => {
              l(e.data);
            },
            [l],
          ),
          h = t
            ? (0, o.we)("#GameEdit_ComingSoon_SelectAnOption")
            : (0, o.we)("#App_Landing_NoDateSelected");
        return (0, a.jsx)(r.ZU, {
          disabled: !m,
          strDefaultLabel: h,
          rgOptions: _,
          selectedOption: m ? n : null,
          onChange: g,
        });
      }
    },
    67045: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => O });
      var a = n(7850),
        i = n(90626),
        s = n(63369),
        r = n(61859),
        o = n(91675),
        d = n(46595),
        l = n(12155),
        c = n(41735),
        p = n.n(c),
        m = n(70986),
        _ = n(20194),
        g = n(16676),
        h = n(99637),
        u = n(9154),
        x = n(22797),
        E = n(7860),
        j = n(61336),
        S = n(78327),
        b = n(39679),
        f = n(51780);
      function A(e) {
        const { appid: t, onClose: n, onCommit: s } = e,
          [o, d] = i.useState(null),
          {
            data: l,
            isLoading: c,
            isLoadingError: m,
          } = (function (e) {
            return (0, _.I)({
              queryKey: ["ReleaseRequest", e],
              queryFn: async () => {
                const t = await p().get(
                  `${S.TS.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${e}`,
                );
                if ("string" == typeof t.data)
                  throw "Error loading release status";
                return { appid: e, ...t?.data };
              },
            });
          })(t),
          g = "prerelease" == l?.strReleaseState,
          h = i.useCallback(
            (e, n) => {
              E.L.invalidateQueries({ queryKey: ["ReleaseRequest", t] }),
                s(e, n, g);
            },
            [t, s, g],
          );
        let u = (0, a.jsx)(w, { setOnOKButton: d, onCommit: h });
        return (
          m
            ? (u = (0, a.jsx)(R, {
                strError: (0, r.we)("#Error_ErrorCommunicatingWithNetwork"),
              }))
            : (!c && l) || (u = (0, a.jsx)(x.t, {})),
          (0, a.jsx)(C.Provider, {
            value: l,
            children: (0, a.jsx)(N, {
              fnSubmit: o,
              fnCloseModal: n,
              children: u,
            }),
          })
        );
      }
      const C = i.createContext(null);
      function D() {
        return i.useContext(C);
      }
      const w = i.memo(function (e) {
        const {
            appid: t,
            bCanUpdateComingSoonDate: n,
            rtReleaseDate: s,
            strComingSoonDisplay: o,
          } = D(),
          { setOnOKButton: d, onCommit: l } = e,
          [c, m] = i.useState(s),
          [_, h] = i.useState(o || void 0),
          [u, x] = i.useState("none"),
          [E, A] = i.useState(),
          C = i.useCallback((e) => {
            A(e), x("none");
          }, []),
          w = i.useCallback(() => {
            if (c)
              if (_) {
                x("submitting"), A(null);
                (async function (e) {
                  const {
                      unAppID: t,
                      rtReleaseDate: n,
                      strComingSoonDisplay: a,
                    } = e,
                    i = `${S.TS.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${t}`,
                    s = new FormData();
                  s.append("sessionid", S.TS.SESSIONID),
                    n && s.append("release_date", n.toString());
                  s.append("coming_soon_display", a);
                  const o = await p().post(i, s);
                  if (!o.data || 1 != o.data.success)
                    throw (0, r.we)(
                      "#Error_Description",
                      o.data?.success,
                      o.data?.error_message || "unknown",
                    );
                })({
                  unAppID: t,
                  rtReleaseDate: n ? c : null,
                  strComingSoonDisplay: _,
                })
                  .then(() => {
                    x("refreshing"), l(c, _);
                  })
                  .catch((e) => {
                    C(e);
                  });
              } else
                C(
                  (0, r.we)("#App_Landing_ReleaseDate_Error_ComingSoonDisplay"),
                );
            else C((0, r.we)("#App_Landing_ReleaseDate_Error_NoDate"));
          }, [t, c, _, n, l, C]);
        return (
          i.useEffect(() => {
            d("none" == u ? () => w : null);
          }, [w, n, u, d]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              E && (0, a.jsx)(R, { strError: E }),
              (0, a.jsx)(v, {}),
              (0, a.jsxs)(g.dR, {
                children: [
                  (0, a.jsxs)(k, {
                    label: (0, r.we)("#App_Landing_IntendedReleaseDateTitle"),
                    children: [
                      (0, a.jsx)(T, { rtSelectedDate: c, setSelectedDate: m }),
                      (0, a.jsx)(P, {}),
                    ],
                  }),
                  (0, a.jsxs)(k, {
                    label: (0, r.we)("#App_Landing_PublicDateDisplayTitle"),
                    children: [
                      (0, a.jsx)(b.Ll, {
                        rtSteamReleaseDate: c,
                        value: _,
                        onChange: h,
                      }),
                      (0, a.jsx)("p", {
                        children: (0, r.we)(
                          "#App_Landing_ReleaseDateStorePage",
                        ),
                      }),
                      (0, a.jsx)("p", {
                        children: (0, r.we)(
                          "#App_Landing_ReleaseDateStoreListing",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: f.ReleaseColumnFooter,
                children: (0, r.oW)(
                  "#App_Landing_NeedHelpWithReleaseDates",
                  (0, a.jsx)("a", {
                    target: "_blank",
                    href: `${S.TS.PARTNER_BASE_URL}doc/store/coming_soon`,
                  }),
                  (0, a.jsx)("a", {
                    target: "_blank",
                    href: `${(0, j.GX)()}wizard/HelpWithPublishing`,
                  }),
                ),
              }),
              (0, a.jsx)(L, {}),
            ],
          })
        );
      });
      function R(e) {
        const { strError: t } = e;
        return (0, a.jsx)("div", { className: f.ErrorBox, children: t });
      }
      function v() {
        const {
          bIsComingSoon: e,
          bIsStorePageReviewed: t,
          bIsWaitingForBuildReview: n,
          bIsFirstSelfPublishingApp: i,
          rtEarliestDate: s,
        } = D();
        return e && t
          ? n
            ? (0, a.jsx)(I, {
                children: (0, r.we)(
                  "#App_Landing_Release_EarliestDate_BuildReview",
                ),
              })
            : (0, a.jsx)(I, {
                children: (0, r.we)(
                  "#App_Landing_Release_EarliestDate",
                  (0, r.$z)(s),
                ),
              })
          : i
            ? (0, a.jsx)(I, {
                children: (0, r.we)(
                  "#App_Landing_Release_EarliestDate_TwoWeeks30Days",
                ),
              })
            : (0, a.jsx)(I, {
                children: (0, r.we)(
                  "#App_Landing_Release_EarliestDate_TwoWeeks",
                ),
              });
      }
      function N(e) {
        const { fnCloseModal: t, fnSubmit: n, children: i } = e,
          { bCanUpdateComingSoonDate: s } = D() || {
            bCanUpdateComingSoonDate: !0,
          };
        return (0, a.jsxs)(u.mt, {
          active: !0,
          className: f.ReleaseDateModal,
          onDismiss: t,
          children: [
            (0, a.jsx)(g.Y9, {
              children: (0, r.we)(
                s
                  ? "#App_Landing_Set_Release_Date"
                  : "#App_Landing_Change_Release_Date",
              ),
            }),
            (0, a.jsx)(g.nB, {
              className: f.ReleaseDateRequestBody,
              children: i,
            }),
            (0, a.jsx)(g.CB, {
              bOKDisabled: !n,
              onCancel: t,
              strCancelText: (0, r.we)("#App_Landing_Requested_Date_Cancel"),
              onOK: n,
              strOKText: (0, r.we)("#App_Landing_Requested_Date_Update"),
            }),
          ],
        });
      }
      function k(e) {
        const { label: t, children: n } = e;
        return (0, a.jsxs)(g.VP, {
          className: f.Column,
          children: [
            (0, a.jsxs)("div", {
              className: f.ColumnLabel,
              children: [t, ":"],
            }),
            (0, a.jsx)("div", { className: f.ColumnContent, children: n }),
          ],
        });
      }
      function T(e) {
        const { rtSelectedDate: t, setSelectedDate: n } = e,
          { bCanUpdateComingSoonDate: i, rtEarliestDate: s } = D();
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(h.K, {
            bWeekdaysOnly: !0,
            bNoDefaultDate: !0,
            disabled: !i,
            nEarliestTime: s,
            fnGetTimeToUpdate: () => t,
            fnSetTimeToUpdate: n,
            className: f.DatePicker,
            bShowTimeZone: !0,
            strAlsoShowTimeZone: m.o,
          }),
        });
      }
      function P(e) {
        const { bCanUpdateComingSoonDate: t, rtReleaseDate: n } = D();
        return t
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("p", {
                  children: (0, r.we)(
                    "#App_Landing_Set_Release_Date_SetIntended",
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, r.we)("#App_Landing_Set_Release_Date_Weekends"),
                }),
                (0, a.jsx)("p", {
                  children: (0, r.we)(
                    "#App_Landing_Set_Release_Date_PacificTime",
                  ),
                }),
              ],
            })
          : (0, a.jsx)("p", {
              children: (0, r.oW)(
                (0, r.we)(
                  "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc",
                  (0, r.$z)(n),
                ),
                (0, a.jsx)("a", {
                  href: `${(0, j.GX)()}wizard/HelpWithPublishing?issueid=905`,
                }),
              ),
            });
      }
      function I(e) {
        return (0, a.jsx)("span", {
          className: f.BlueNote,
          children: e.children,
        });
      }
      function L(e) {
        const {
          rtEarliestDate: t,
          strReleaseState: n,
          bCanUpdateComingSoonDate: i,
        } = D();
        return "prerelease" != n || i
          ? null
          : (0, a.jsx)("div", {
              className: f.PublishNowWarning,
              children: (0, r.we)(
                "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note",
                (0, r.$z)(t),
              ),
            });
      }
      var B = n(52038),
        y = n(96409);
      function O(e) {
        const {
            bIsGameEdit: t,
            unAppID: n,
            rgEarliestAdvancedAccessDate: o,
          } = e,
          [c, p] = i.useState(e.rtReleaseDate),
          [m, _] = i.useState(e.strComingSoonDisplay),
          [g, h] = i.useState(!1),
          [u, x] = i.useState(!1),
          E = i.useCallback(() => h(!0), []),
          j = i.useCallback(() => h(!1), []),
          S = i.useCallback((e, t, n) => {
            p(e), _(t), h(!1), n && x(!0);
          }, []);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            g && (0, a.jsx)(A, { appid: n, onClose: j, onCommit: S }),
            u &&
              (0, a.jsx)($, {
                appid: n,
                bIsGameEdit: t,
                closeModal: () => x(!1),
              }),
            (0, a.jsxs)("div", {
              className: (0, B.A)(d.ReleaseDateInfoCtn, t && d.GameEditCtn),
              children: [
                (0, a.jsxs)("div", {
                  className: d.ReleaseDateContent,
                  children: [
                    (0, a.jsx)(M, {
                      label: (0, r.we)("#App_Landing_SpecifiedReleaseDate"),
                      children: (0, a.jsx)(F, { rtReleaseDate: c }),
                    }),
                    (0, a.jsx)(M, {
                      label: (0, r.we)("#App_Landing_CustomersSeeReleaseDate"),
                      children: (0, a.jsx)("div", {
                        className: (0, B.A)(d.BigField, m ? d.Set : d.Unset),
                        children: m
                          ? (0, s.M)(m, c)
                          : (0, r.we)("#App_Landing_UnsetReleaseDate"),
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: d.EditButton,
                  onClick: E,
                  children: [
                    (0, a.jsx)("div", { className: (0, B.A)(d.Spacer, d.Top) }),
                    (0, a.jsx)("div", {
                      className: d.EditButtonIcon,
                      children: (0, a.jsx)(l.ffu, {}),
                    }),
                    (0, a.jsx)("div", {
                      className: (0, B.A)(d.Spacer, d.Bottom),
                    }),
                  ],
                }),
              ],
            }),
            1e3 * o > new Date().getTime() &&
              (0, a.jsx)(M, {
                label: (0, r.we)("#App_Landing_EarliestAdvancedAccessDate"),
                children: (0, a.jsx)(F, { rtReleaseDate: o }),
              }),
          ],
        });
      }
      function F(e) {
        const { rtReleaseDate: t } = e;
        return t
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: (0, B.A)(d.BigField, d.Set),
                  children: (0, r.$z)(t),
                }),
                (0, a.jsx)("div", {
                  className: (0, B.A)(d.SubField, d.Set),
                  children: (0, o.KC)(t, {}, { timeZoneName: "short" }),
                }),
              ],
            })
          : (0, a.jsx)("div", {
              className: (0, B.A)(d.BigField, d.Unset),
              children: (0, r.we)("#App_Landing_UnsetReleaseDate"),
            });
      }
      function M(e) {
        return (0, a.jsxs)("div", {
          className: d.LabelField,
          children: [
            (0, a.jsx)("div", { className: d.Label, children: e.label }),
            e.children,
          ],
        });
      }
      function $(e) {
        const { appid: t, bIsGameEdit: n, closeModal: s } = e,
          o = i.useCallback(() => {
            n
              ? (window.TabSelect("tab_publish"), window.scrollTo(0, 0))
              : (window.location.href =
                  y.bI.GameEditByAppID(t.toString()) +
                  "?activetab=tab_publish"),
              s();
          }, [t, n, s]);
        return (0, a.jsx)(u.EN, {
          active: !0,
          children: (0, a.jsx)(u.o0, {
            strTitle: (0, r.we)("#App_Landing_ReleaseDate_ChangesSaved"),
            strDescription: (0, r.we)(
              "#App_Landing_Release_PublishStorePrompt",
            ),
            strOKButtonText: (0, r.we)("#App_Landing_Release_PrepareToPublish"),
            onOK: o,
            strCancelButtonText: (0, r.we)("#Button_OK"),
            closeModal: s,
          }),
        });
      }
    },
    96409: (e, t, n) => {
      "use strict";
      n.d(t, { Cg: () => r, _h: () => s, a3: () => i, bI: () => a });
      let a = {
        GameEdit: (e, t) => `/admin/game/${e}/${t}`,
        PackageEdit: (e, t) => `/admin/store/${e}/${t}`,
        BundleEdit: (e, t) => `/bundles/${e}/${t}`,
        GameEditByAppID: (e) => `/admin/game/editbyappid/${e}`,
        ReviewPriceProposals: () => "/admin/reviewpricesubmissions/",
        PackageLanding: (e) => `/store/packagelanding/${e}`,
        FrontPageEdit: (e) => `/admin/store/pageclusteredit/frontpage/${e}`,
        FrontPageSteamChinaEdit: (e) =>
          `/admin/store/pageclusteredit/frontpage_china/${e}`,
        ContentHubEditor: (e, t) =>
          `/admin/store/pageclusteredit/content_hub_${t}/${e}`,
      };
      const i = ["edit", "diff", "revert", "prepare", "publish"],
        s = [
          "package",
          "packagesave",
          "packagediff",
          "packagerevert",
          "packageprepare",
          "packagepublish",
        ],
        r = ["view", "preparestore", "revertstore", "savestore", "publish"];
    },
  },
]);
