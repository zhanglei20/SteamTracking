/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [32455],
    {
      55298: (ee, ze, i) => {
        "use strict";
        i.d(ze, { YA: () => R, p: () => D, qh: () => $ });
        var e = i(72604),
          p = i(20194),
          a = i(41735),
          fe = i.n(a),
          O = i(3166);
        function $() {
          const se = (0, p.I)({
            queryKey: ["useValveAccounts"],
            queryFn: async () => {
              const pe = `${O.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
                Y = await fe().get(pe);
              return Y?.status == 200 && Y.data?.success == e.R
                ? Y.data.admins
                : (console.error("ValveAccounts:", Y?.status), []);
            },
          });
          return se.isLoading ? null : se.data;
        }
        function D(se) {
          return $()?.find((Y) => Y.id == se);
        }
        function R(se, pe) {
          return se
            .getQueryData(["useValveAccounts"])
            ?.find((Pe) => Pe.id === pe);
        }
      },
      69787: (ee, ze, i) => {
        "use strict";
        i.d(ze, { Dx: () => p, Un: () => a, cn: () => fe });
        var e = i(90626);
        const p = (0, e.createContext)(null),
          a = () => (0, e.useContext)(p);
        function fe(O, $) {
          return O ? O + "?t=" + $ : null;
        }
      },
      91916: (ee, ze, i) => {
        "use strict";
        i.d(ze, {
          MY: () => Pe,
          UA: () => re,
          Yd: () => I,
          qG: () => ae,
          rN: () => me,
          vh: () => Ve,
        });
        var e = i(41735),
          p = i.n(e),
          a = i(90626),
          fe = i(99412),
          O = i(72604),
          $ = i(34592),
          D = i(3166),
          R = i(27066),
          se = Object.defineProperty,
          pe = Object.getOwnPropertyDescriptor,
          Y = (S, E, k, v) => {
            for (
              var z = v > 1 ? void 0 : v ? pe(E, k) : E, K = S.length - 1, N;
              K >= 0;
              K--
            )
              (N = S[K]) && (z = (v ? N(E, k, z) : N(z)) || z);
            return v && z && se(E, k, z), z;
          };
        function Pe() {
          return D.TS.EUNIVERSE == fe.Rv ? 12 : 1;
        }
        const Se = class xn {
          m_mapOptInToPartners = new Map();
          m_mapPromises = new Map();
          GetPartnerInfo(E) {
            return this.m_mapOptInToPartners.get(E);
          }
          BHasPartnerInfoLoad(E) {
            return this.m_mapOptInToPartners.has(E);
          }
          async FindPartnerByName(E) {
            return (
              this.m_mapPromises.has(E) ||
                this.m_mapPromises.set(E, this.InternalFindPartnerByName(E)),
              this.m_mapPromises.get(E)
            );
          }
          async InternalFindPartnerByName(E) {
            const k = new Array();
            try {
              const v = D.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
                z = {
                  sessionid: (0, D.KC)(),
                  searchtext: E,
                  origin: self.origin,
                },
                K = await p().get(v, { params: z });
              K?.status == 200 && K?.data?.success == O.R
                ? K.data.publishers.forEach((N) => {
                    const B = {
                      partnerid: N.publisherid,
                      name: N.publishername,
                      partner_url:
                        D.TS.PARTNER_BASE_URL +
                        `pub/publisher/${N.publisherid}/`,
                      contacts: N.contacts,
                    };
                    this.m_mapOptInToPartners.set(N.publisherid, B), k.push(B);
                  })
                : console.log(
                    `CPartnerInfoStore.FindPartnerByName failed with status ${K?.status} eresult ${K?.data?.success} and msg ${K?.data?.msg}`,
                  );
            } catch (v) {
              const z = (0, $.H)(v);
              console.error(
                "CPartnerInfoStore.FindPartnerByName failed add: " +
                  z.strErrorMsg,
                z,
              );
            }
            return k;
          }
          async LoadPartnerInfo(E) {
            if (this.m_mapOptInToPartners.has(E))
              return this.m_mapOptInToPartners.get(E);
            const k = await this.FindPartnerByName("" + E);
            return (
              this.BHasPartnerInfoLoad(E) ||
                this.m_mapOptInToPartners.set(E, null),
              this.m_mapOptInToPartners.get(E)
            );
          }
          async LoadMultiplePartnerInfo(E) {
            if (!E || E.length == 0) return [];
            const k = E.filter((v) => !this.m_mapOptInToPartners.has(v));
            return (
              k.length > 0 && (await this.FindPartnerByName("" + k.join(","))),
              E.map((v) => this.m_mapOptInToPartners.get(v)).filter(Boolean)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              xn.s_Singleton || (xn.s_Singleton = new xn()), xn.s_Singleton
            );
          }
          constructor() {
            let E = JSON.parse(
              JSON.stringify((0, D.Tc)("partner_info", "application_config")),
            );
            this.ValidateStoreDefault(E) &&
              E.forEach((k) => this.m_mapOptInToPartners.set(k.partnerid, k));
          }
          ValidateStoreDefault(E) {
            const k = E;
            return k &&
              Array.isArray(k) &&
              k.length > 0 &&
              typeof k[0] == "object"
              ? typeof k[0].partnerid == "number" &&
                  typeof k[0].name == "string"
              : !1;
          }
        };
        Y([R.o], Se.prototype, "FindPartnerByName", 1);
        let He = Se;
        function Ve(S) {
          const [E, k] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              !E &&
                S?.length > 0 &&
                He.Get()
                  .LoadMultiplePartnerInfo(S)
                  .then(() => k(!0));
            }, [S, E]),
            E
          );
        }
        function re(S) {
          const [E, k] = a.useState(() => He.Get().GetPartnerInfo(S));
          return (
            a.useEffect(() => {
              !He.Get().BHasPartnerInfoLoad(S) && S > 0
                ? He.Get()
                    .LoadPartnerInfo(S)
                    .then((v) => k(v))
                : He.Get().BHasPartnerInfoLoad(S) &&
                  E?.partnerid != S &&
                  k(He.Get().GetPartnerInfo(S));
            }, [S, E]),
            [E]
          );
        }
        function me() {
          return { fnFindPartnerByName: He.Get().FindPartnerByName };
        }
        function I(S) {
          return He.Get().GetPartnerInfo(S);
        }
        function ae(S) {
          return He.Get().LoadPartnerInfo(S);
        }
      },
      2272: (ee, ze, i) => {
        "use strict";
        i.d(ze, { AS: () => P, KZ: () => ce, c$: () => _e });
        var e = i(7850),
          p = i(99412),
          a = i(41635),
          fe = i(86048),
          O = i(64868),
          $ = i(51614),
          D = i(69787),
          R = i(34604),
          se = i(28410),
          pe = i(90626),
          Y = i(51746),
          Pe = i(75806),
          Se = i(58534),
          He = i(25792),
          Ve = i(48127),
          re = i(249),
          me = i(1880),
          I = i(69168),
          ae = i(88003),
          S = i(83085),
          E = i(50660),
          k = i(36118),
          v = i(85599),
          z = i(71421),
          K = i(36707),
          N = i(82734),
          B = i(18210),
          Ee = i(82363),
          L = i(43104),
          G = i.n(L),
          w = i(14295),
          W = i(17616),
          b = i(2259),
          A = i(3166);
        function P(ve) {
          const {
              src: Ae,
              inLink: we,
              setAttrs: ue,
              focusView: Oe,
              removeNode: Be,
              activeLanguage: ke,
              allowAnimations: Ze,
              mapValues: et,
              fnUpdateDocument: _t,
              selected: nt,
            } = ve,
            [Ke, Qe] = (0, fe.OP)(),
            [tt, rt] = (0, fe.OP)(),
            qe = (0, O.DF)(Ke || tt, 250),
            [kt, mt, Je] = (0, O.uD)(),
            Gt = (0, se.FD)(),
            Rt = pe.useCallback(() => {
              Oe(), Je();
            }, [Oe, Je]),
            Ft = pe.useMemo(
              () =>
                Gt.find(
                  (It) => (0, R.q3)(It).toLowerCase() === Ae.toLowerCase(),
                ),
              [Ae, Gt],
            ),
            Qt = Ft ? (0, R.q3)(Ft) : null,
            {
              elLocalizedImageGroupDialog: ft,
              elLocalizedImageGroupControl: fs,
            } = H(Ft, ke, Oe),
            it = (0, D.Un)(),
            Tt = (It) => {
              const ns = It.currentTarget;
              ns.paused ? ns.play() : ns.pause();
            };
          let Ye;
          if (Ft) {
            const It = (0, R.IP)(Ft, Ze, ke);
            if (It) {
              const ns = (0, R.Bv)(Ft, ke),
                xs = (0, K.A)(L.ExtraAssetImg, nt && L.Selected);
              Ye =
                It.usage == R.nO
                  ? (0, e.jsx)(
                      "video",
                      {
                        className: xs,
                        src: (0, D.cn)(It.url, it),
                        title: Qt,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        onClick: Tt,
                      },
                      Qt,
                    )
                  : (0, e.jsx)(
                      "img",
                      {
                        className: xs,
                        src: (0, D.cn)(It.url, it),
                        alt: ns,
                        title: Qt,
                      },
                      Qt,
                    );
            } else
              Ye = (0, e.jsx)("span", {
                className: L.ExtraAssetError,
                children: (0, B.we)(
                  "#StoreAdmin_GameDescription_MissingImageLanguage",
                  Ae,
                ),
              });
          } else
            Ye = (0, e.jsx)("span", {
              className: L.ExtraAssetError,
              children: (0, B.we)(
                "#StoreAdmin_GameDescription_MissingImage",
                Ae,
              ),
            });
          const Vt = (It, ns) => {
              if (ns) {
                const xs = new Map();
                for (const [on, ks] of et) {
                  const Ws = new RegExp(`${Qt}(?!\\w)`, "g"),
                    Ls = ks.Value.replace(Ws, `${It}`);
                  xs.set(on, Ls);
                }
                _t(xs);
              } else ue({ src: It });
            },
            [Ps, ss] = pe.useState(0),
            [Ms, rn] = pe.useState(0),
            Ht = (0, b.wY)((It) =>
              ss(It.target.offsetLeft + It.borderBoxSize[0].inlineSize),
            ),
            Cn = (0, b.wY)((It) => rn(It.borderBoxSize[0].inlineSize)),
            zs = Ms + 16 >= Ps,
            an = zs ? Ps : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              kt &&
                (0, e.jsx)(De, {
                  editAsset: Qt,
                  bReplace: !0,
                  onAssetSelected: Vt,
                  hideModal: Rt,
                }),
              ft,
              (0, e.jsxs)("div", {
                ref: Ht,
                className: (0, K.A)({
                  [L.ExtraAssetImgTag]: !0,
                  [L.ExtraAssetControlsContainer]: !0,
                  [L.Hovered]: qe,
                  [L.InDeprecatedLink]: we,
                }),
                title: "",
                ...Qe,
                children: [
                  we && (0, e.jsx)(X, {}),
                  (0, e.jsxs)("div", {
                    ref: Cn,
                    className: (0, K.A)(
                      L.ExtraAssetControls,
                      zs && L.SmallImage,
                    ),
                    style: { left: an },
                    ...rt,
                    children: [
                      fs,
                      (0, e.jsx)(E.ff, {
                        onClick: mt,
                        tooltip: (0, B.we)(
                          "#StoreAdmin_GameDescription_ReplaceImage",
                        ),
                        children: (0, e.jsx)(re.ffu, {}),
                      }),
                      (0, e.jsx)(E.ff, {
                        onClick: Be,
                        tooltip: (0, B.we)(
                          "#StoreAdmin_GameDescription_RemoveImage",
                        ),
                        children: (0, e.jsx)(k.X, {}),
                      }),
                    ],
                  }),
                  Ye,
                ],
              }),
            ],
          });
        }
        function H(ve, Ae, we) {
          const [ue, Oe, Be] = (0, O.uD)(),
            ke = pe.useCallback(() => {
              we?.(), Be();
            }, [we, Be]);
          let Ze, et;
          return (
            (0, R.pN)(ve)
              ? ((Ze =
                  ue &&
                  (0, e.jsx)(Me, {
                    selectedAsset: ve,
                    hideModal: ke,
                    activeLanguage: Ae,
                  })),
                (et = (0, e.jsx)(E.ff, {
                  onClick: Oe,
                  tooltip: (0, B.we)(
                    "#StoreAdmin_GameDescription_EditImageDetails",
                  ),
                  children: (0, e.jsx)(k.vCk, { className: "SVGIcon_Button" }),
                })))
              : (0, R.i$)(ve) &&
                (et = (0, e.jsx)(E.ff, {
                  onClick: () => {},
                  tooltip: (0, B.we)(
                    "#StoreAdmin_GameDescription_EditImageDetails_Legacy",
                  ),
                  children: (0, e.jsx)(k.R2D, {}),
                })),
            {
              elLocalizedImageGroupDialog: Ze,
              elLocalizedImageGroupControl: et,
            }
          );
        }
        function X() {
          return (0, e.jsx)("span", {
            className: L.ImageLinkDisabledWarning,
            children: (0, e.jsx)("span", {
              className: L.TopBar,
              children: (0, e.jsx)(z.Gq, {
                toolTipContent: (0, B.we)(
                  "#StoreAdmin_GameDescription_ImageLinkDisabled_Description",
                ),
                children: (0, e.jsx)("span", {
                  className: L.TopBarContent,
                  children: "Disabled",
                }),
              }),
            }),
          });
        }
        function ce(ve) {
          const { nodeType: Ae } = ve,
            { view: we } = (0, E.wU)(),
            [ue, Oe, Be] = (0, O.uD)(),
            ke = pe.useCallback(() => {
              Be(), we.focus();
            }, [Be, we]),
            Ze = pe.useCallback(
              (et) => {
                we.dispatch(
                  we.state.tr.insert(
                    we.state.selection.to,
                    Ae.createChecked({ src: et }),
                  ),
                ),
                  ke();
              },
              [we, Ae, ke],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              ue && (0, e.jsx)(De, { onAssetSelected: Ze, hideModal: ke }),
              (0, e.jsx)(E.ff, {
                onClick: Oe,
                toggled: ue,
                tooltip: "#StoreAdmin_GameDescription_InsertImage",
                children: (0, e.jsx)(re._V3, {}),
              }),
            ],
          });
        }
        function De(ve) {
          const {
              editAsset: Ae,
              bReplace: we,
              onAssetSelected: ue,
              hideModal: Oe,
            } = ve,
            Be = (0, se.FD)(!0),
            [ke, Ze] = pe.useState(Ae),
            [et, _t] = (0, S.Y0)(Oe, R.SG),
            [nt, Ke] = pe.useState(!1),
            [Qe, tt] = pe.useState(""),
            rt = pe.useCallback(
              (qe, kt) => {
                qe && (ue(qe, kt), Oe());
              },
              [ue, Oe],
            );
          return (0, e.jsxs)(I.E, {
            active: !0,
            children: [
              et,
              (0, e.jsx)(ae.x_, {
                onEscKeypress: Oe,
                children: (0, e.jsxs)(Se.U9, {
                  classNameContent: L.ExtraAssetDialogContent,
                  children: [
                    (0, e.jsx)(Se.Y9, {
                      children: (0, B.we)(
                        "#StoreAdmin_GameDescription_SelectImage",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: L.ExtraAssetsDialogDescription,
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, B.we)(
                            "#StoreAdmin_GameDescription_ExistingImages",
                          ),
                        }),
                        (0, e.jsxs)("div", {
                          className: L.UploadButtonContainer,
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, B.we)(
                                "#StoreAdmin_ExtraAssetUpload_UploadNew",
                              ),
                            }),
                            (0, e.jsx)(Se.jn, {
                              className: L.UploadButton,
                              onClick: _t,
                              children: (0, B.we)(
                                "#StoreAdmin_ExtraAssetUpload_BrowseForFile",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: L.ExtraAssetSearch,
                      children: (0, e.jsx)(Se.pd, {
                        type: "text",
                        value: Qe,
                        bShowClearAction: !0,
                        onChange: (qe) => tt(qe.currentTarget.value || ""),
                        placeholder: (0, B.we)(
                          "#StoreAdmin_ExtraAssetUpload_SearchPlaceholder",
                        ),
                      }),
                    }),
                    (0, e.jsx)(Se.nB, {
                      className: L.ExtraAssetsGridDialog,
                      children: (0, e.jsx)("div", {
                        className: (0, K.A)(
                          L.ExtraAssetsGrid,
                          L.ExtraAssetsChooser,
                        ),
                        children: Be.filter((qe) =>
                          (0, R.q3)(qe).includes(Qe),
                        ).map((qe) =>
                          (0, e.jsx)(
                            xe,
                            {
                              extraAsset: qe,
                              onSelectAsset: Ze,
                              onChooseAsset: (kt) => rt(kt, nt),
                              selected: (0, R.q3)(qe) == ke,
                            },
                            (0, R.q3)(qe),
                          ),
                        ),
                      }),
                    }),
                    (0, e.jsxs)(Se.wi, {
                      children: [
                        we &&
                          (0, e.jsx)(Se.Yh, {
                            className: L.ReplaceAllCheck,
                            checked: nt,
                            onChange: Ke,
                            label: (0, B.we)(
                              "#StoreAdmin_ExtraAssetUpload_ReplaceAll",
                            ),
                            tooltip: (0, B.we)(
                              "#StoreAdmin_ExtraAssetUpload_ReplaceAll_ttip",
                            ),
                          }),
                        (0, e.jsx)(Se.CB, {
                          onCancel: Oe,
                          onOK: (qe) => {
                            qe.preventDefault(), rt(ke, nt);
                          },
                          bOKDisabled: !ke,
                          strOKText: (0, B.we)(
                            "#StoreAdmin_GameDescription_UseThisImage",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function xe(ve) {
          const {
              extraAsset: Ae,
              onSelectAsset: we,
              onChooseAsset: ue,
              selected: Oe,
            } = ve,
            Be = pe.useRef(null),
            ke = (0, R.q3)(Ae);
          return (
            pe.useLayoutEffect(() => {
              Oe &&
                Be.current?.scrollIntoView({
                  block: "nearest",
                  inline: "nearest",
                });
            }, []),
            (0, e.jsx)("div", {
              ref: Be,
              className: (0, K.A)(L.ExtraAssetChoice, Oe && L.Selected),
              title: ke,
              onClick: (Ze) => we(ke),
              onDoubleClick: (Ze) => ue(ke),
              children: (0, e.jsx)(Te, { extraAsset: Ae, controls: !1 }),
            })
          );
        }
        function Me(ve) {
          const { selectedAsset: Ae, activeLanguage: we, hideModal: ue } = ve;
          if ((ie(!Ae, ue), !!Ae))
            return (0, e.jsx)(I.E, {
              active: !0,
              children: (0, e.jsx)(ae.x_, {
                onEscKeypress: ue,
                children: (0, e.jsxs)(Se.U9, {
                  classNameContent: L.LocalizeAssetDialogContent,
                  children: [
                    (0, e.jsx)(Se.Y9, {
                      children: (0, B.we)(
                        "#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Title",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: L.LocalizeAssetsDialogDescription,
                      children: (0, e.jsx)("div", {
                        children: (0, B.we)(
                          "#StoreAdmin_ExtraAssetUpload_LocalizeAsset_Desc",
                        ),
                      }),
                    }),
                    (0, e.jsxs)(Se.nB, {
                      children: [
                        (0, e.jsx)(le, { onlyExtraAsset: Ae }),
                        (0, e.jsx)(He.tH, {
                          children: (0, e.jsx)(F, {
                            extraAsset: Ae,
                            activeLanguage: we,
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsx)(Se.wi, {
                      children: (0, e.jsx)(Se.jn, {
                        onClick: ue,
                        children: (0, B.we)("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              }),
            });
        }
        function F(ve) {
          const { extraAsset: Ae, activeLanguage: we } = ve,
            ue = (0, R.wN)(Ae),
            Oe = (0, D.Un)(),
            Be = pe.useCallback(
              (Ke) => (0, D.cn)((0, R.IP)(Ae, !0, Ke)?.url, Oe),
              [Ae, Oe],
            ),
            [ke, Ze] = pe.useState(void 0),
            [et, _t, nt] = (0, O.uD)();
          return ue
            ? (0, e.jsxs)("div", {
                children: [
                  et &&
                    (0, e.jsx)(We, {
                      extraAsset: Ae,
                      deleteLang: ke,
                      hideModal: nt,
                    }),
                  (0, e.jsx)(Pe.z, {
                    rgAssetLangs: ue,
                    initialLang: we,
                    showDeleteAll: !1,
                    imageClassname: L.DisplayLocImage,
                    fnGetAssetUrl: Be,
                    fnDeletAssetLang: (Ke) => {
                      Ze(Ke), _t();
                    },
                    fnDeleteAllAssets: () => {
                      Ze(void 0), _t();
                    },
                  }),
                ],
              })
            : null;
        }
        function ie(ve, Ae) {
          pe.useEffect(() => {
            ve && Ae();
          }, [ve, Ae]);
        }
        function _e(ve) {
          const { asset_mtime: Ae, assets_list: we } = ve,
            ue = new Map(we),
            Oe = (0, se.FD)(!0),
            Be = pe.useMemo(() => a.WD(Oe.filter(R.pN), R.K7), [Oe]),
            ke = pe.useMemo(
              () =>
                Oe.filter(R.pN).map((rt) => ({
                  key: (0, R.K7)(rt),
                  caption: (0, R.K7)(rt),
                  mapAltText: rt.alt_text,
                })),
              [Oe],
            ),
            Ze = (0, W.gU)(),
            [et, _t, nt] = (0, O.uD)(),
            { mutateAsync: Ke, isPending: Qe } = Ie(),
            tt = async (rt, qe) =>
              (await Ke({ strExtraAssetFileName: rt, mapAltText: qe })) !== !1;
          return (0, e.jsxs)(D.Dx.Provider, {
            value: Ae,
            children: [
              et &&
                (0, e.jsx)(Ee.B, {
                  entries: ke,
                  isLoading: !1,
                  hideModal: nt,
                  mutateAltTextAsync: tt,
                  isMutatePending: Qe,
                  fnGetImage: (rt, qe) =>
                    (0, e.jsx)(Te, {
                      extraAsset: Be.get(rt),
                      caption: !1,
                      controls: !1,
                      primaryLanguage: qe,
                      mapAssetsList: ue,
                    }),
                }),
              Oe.some(R.pN) &&
                (0, e.jsxs)("div", {
                  className: L.AltTextBtn,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, B.we)("#StoreAdmin_CustomImages_Title"),
                    }),
                    (0, e.jsx)(Se.jn, {
                      onClick: _t,
                      children: (0, B.we)("#StoreAdmin_EditAltText_Button"),
                    }),
                  ],
                }),
              (0, e.jsx)("div", {
                className: L.ExtraAssetsPageList,
                children: (0, e.jsx)("div", {
                  className: L.ExtraAssetsGrid,
                  children: [...Oe].map((rt) =>
                    (0, e.jsx)(
                      Te,
                      {
                        extraAsset: rt,
                        primaryLanguage: Ze,
                        mapAssetsList: ue,
                      },
                      (0, R.q3)(rt),
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(le, {}),
            ],
          });
        }
        function le(ve) {
          const { onlyExtraAsset: Ae } = ve,
            we = (0, se.Y7)(),
            ue = (0, w.L)(),
            Oe = (Ke) => {
              const Qe = Ke
                ? [...Ke].reverse().find((tt) => tt.bSuccess)?.uploadResult
                : null;
              Qe && we(Qe);
            },
            Be = (0, se.FD)(),
            ke = pe.useMemo(() => Be.filter(R.pN), [Be]),
            Ze = be(ke);
          pe.useEffect(() => {
            const Ke = (Qe) => ({
              baseFilename: (0, R.K7)(Qe),
              languages: (0, R.i$)(Qe) ? [p.Bhc] : (0, R.wN)(Qe),
            });
            ue.SetExistingAssetGroups(ke.map(Ke), Ze),
              ue.SetOnlyAssetGroup(Ae ? Ke(Ae) : null);
          }, [ue, ke, Ae, Ze]);
          const et = oe(Ae),
            { rgRealmList: _t } = (0, se.aJ)();
          let nt;
          return (
            Ae && !et
              ? (nt = (0, B.we)(
                  "#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalNoSize",
                ))
              : Ae && et
                ? (nt = (0, B.we)(
                    "#StoreAdmin_ExtraAssetUpload_Instructions_AdditionalWithSize",
                    et.width,
                    et.height,
                  ))
                : (nt = (0, B.we)(
                    "#StoreAdmin_ExtraAssetUpload_Instructions_Base",
                  )),
            (0, e.jsx)("div", {
              children: (0, e.jsx)(Ve.O9, {
                imageUploader: ue,
                rgRealmList: _t,
                fnUploadComplete: Oe,
                elOverrideDragAndDropText: nt,
                elAdditonalButtons: (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: L.InstructionsForLocAssets,
                    children: (0, B.we)(
                      "#StoreAdmin_ExtraAssetUpload_Instructions_Note",
                    ),
                  }),
                }),
              }),
            })
          );
        }
        function be(ve) {
          const [Ae, we] = pe.useState(void 0),
            ue = (0, D.Un)();
          return (
            pe.useEffect(() => {
              const Oe = ve.map(async (Be) => {
                let ke = (0, R.IP)(Be, !1, p.xPp);
                return (
                  ke || (ke = (0, R.IP)(Be, !0, p.xPp)),
                  (0, Y.II)(
                    await (0, Y.S2)((0, D.cn)(ke?.url, ue), ke?.usage == R.nO),
                  )
                );
              });
              Promise.all(Oe).then(we);
            }, [ve, ue]),
            Ae
          );
        }
        function oe(ve) {
          const Ae = pe.useMemo(() => (ve ? [ve] : []), [ve]),
            we = be(Ae);
          return we?.length > 0 ? we[0] : void 0;
        }
        function Te(ve) {
          const {
              extraAsset: Ae,
              caption: we = !0,
              controls: ue = !0,
              primaryLanguage: Oe,
              mapAssetsList: Be,
            } = ve,
            ke = pe.useRef(void 0),
            Ze = (0, fe.BZ)(ke),
            [et, _t, nt] = (0, O.uD)(),
            Ke = (0, D.Un)(),
            Qe = (0, R.q3)(Ae);
          let tt;
          if ((0, R.i$)(Ae)) {
            const it = (0, R.IP)(Ae, !1);
            tt = it ? [it] : [];
          } else {
            const it = Oe == p.ZLm ? p.NFp : p.Bhc,
              Tt = (0, R.wN)(Ae).sort((Ye, Vt) => he(Oe, it, Ye, Vt));
            tt = Array.from({ length: Math.min(3, Tt.length) }).map((Ye, Vt) =>
              (0, R.IP)(Ae, Vt == 0, Tt[Vt]),
            );
          }
          const rt = () => {
              window.open((0, D.cn)(tt[0]?.url, Ke));
            },
            qe = () => (0, N.OG)(Qe),
            kt = (0, se.TQ)(),
            {
              elLocalizedImageGroupDialog: mt,
              elLocalizedImageGroupControl: Je,
            } = H(Ae, null, null),
            Gt = (it) => {
              const Tt = it.currentTarget;
              Tt.paused ? Tt.play() : Tt.pause();
            },
            Rt = Be
              ? Array.from(Be).reduce(
                  (it, [Tt, Ye]) => (Ye.includes(Qe) ? [...it, Tt] : it),
                  [],
                )
              : [],
            Ft = 3,
            Qt = new Intl.ListFormat(B.pf.GetPreferredLocales(), {
              style: "long",
              type: "conjunction",
            }),
            ft = Rt.map((it) => (0, B.we)("#Language_" + it)),
            fs =
              Rt.length <= 3
                ? Qt.format(ft)
                : Qt.format([
                    ...ft.slice(0, Ft - 1),
                    (0, B.we)(
                      "#StoreAdmin_GameDescription_AssetsInUseOthers",
                      Rt.length - Ft + 1,
                    ),
                  ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              mt,
              (0, e.jsxs)("div", {
                ref: ke,
                className: (0, K.A)(
                  L.ExtraAssetStack,
                  L.ExtraAssetControlsContainer,
                  Ze && L.Hovered,
                ),
                title: Qe,
                children: [
                  et && (0, e.jsx)(We, { extraAsset: Ae, hideModal: nt }),
                  ue &&
                    (0, e.jsxs)("div", {
                      className: L.ExtraAssetControls,
                      title: "",
                      children: [
                        Je,
                        (0, e.jsx)(E.ff, {
                          onClick: rt,
                          tooltip: (0, B.we)(
                            "#StoreAdmin_GameDescription_OpenInNewWindow",
                          ),
                          children: (0, e.jsx)(re.glU, {}),
                        }),
                        !kt &&
                          (0, e.jsx)(E.ff, {
                            onClick: qe,
                            tooltip: (0, B.we)(
                              "#StoreAdmin_GameDescription_CopyNameToClipboard",
                            ),
                            children: (0, e.jsx)(re.QRo, {}),
                          }),
                        Rt.length == 0 &&
                          (0, e.jsx)(E.ff, {
                            onClick: _t,
                            tooltip: (0, B.we)(
                              "#StoreAdmin_GameDescription_DeleteAsset",
                            ),
                            children: (0, e.jsx)(k.X, {}),
                          }),
                        Rt.length > 0 &&
                          (0, e.jsx)(E.ff, {
                            onClick: () => {},
                            tooltip: (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, B.we)(
                                  "#StoreAdmin_GameDescription_AssetsInUse1",
                                  fs,
                                ),
                                (0, e.jsx)("br", {}),
                                (0, e.jsx)("br", {}),
                                (0, B.we)(
                                  "#StoreAdmin_GameDescription_AssetsInUse2",
                                ),
                              ],
                            }),
                            children: Rt.length,
                          }),
                      ],
                    }),
                  (0, e.jsx)("div", {
                    className: L.StackedImageCtn,
                    children: tt.map((it, Tt) =>
                      it.usage == R.nO
                        ? (0, e.jsx)(
                            "video",
                            {
                              className: (0, K.A)(
                                L.StackedImage,
                                L[`Image-${Tt}`],
                              ),
                              src: it.url + "?t=" + Ke,
                              onDoubleClick: ue ? rt : void 0,
                              muted: !0,
                              loop: !0,
                              playsInline: !0,
                              autoPlay: !0,
                              onClick: Gt,
                            },
                            it.url + Tt,
                          )
                        : (0, e.jsx)(
                            "img",
                            {
                              className: (0, K.A)(
                                L.StackedImage,
                                L[`Image-${Tt}`],
                              ),
                              src: it.url + "?t=" + Ke,
                              onDoubleClick: ue ? rt : void 0,
                            },
                            it.url + Tt,
                          ),
                    ),
                  }),
                  we &&
                    (0, e.jsx)("div", {
                      className: L.ExtraAssetName,
                      children: (0, R.K7)(Ae),
                    }),
                ],
              }),
            ],
          });
        }
        function he(ve, Ae, we, ue) {
          if (ve != null) {
            if (we == ve && ue != ve) return -1;
            if (we != ve && ue == ve) return 1;
            if (we == Ae && ue != Ae) return -1;
            if (we != Ae && ue == Ae) return 1;
          }
          return we - ue;
        }
        function We(ve) {
          const { extraAsset: Ae, deleteLang: we, hideModal: ue } = ve,
            { mutate: Oe, isPending: Be, isSuccess: ke } = Ue(),
            Ze = Be || ke;
          return (
            pe.useEffect(() => {
              ke && ue();
            }, [ke, ue]),
            (0, e.jsx)(I.E, {
              active: !0,
              children: (0, e.jsx)(me.o0, {
                onOK: () => Oe({ extraAsset: Ae, eLang: we }),
                bOKDisabled: Ze,
                strOKButtonText: (0, B.we)(
                  "#StoreAdmin_GameDescription_DeleteAsset",
                ),
                strTitle: (0, B.we)("#StoreAdmin_GameDescription_DeleteAsset"),
                strDescription: Ze
                  ? (0, e.jsx)(v.t, { position: "center", size: "medium" })
                  : (0, B.we)(
                      "#StoreAdmin_GameDescription_DeleteAsset_Confirm",
                    ),
                onCancel: ue,
              }),
            })
          );
        }
        function Ue() {
          const ve = (0, se.Z3)("ajaxmodifyextraassets"),
            Ae = (0, se.Y7)();
          return (0, $.n)({
            mutationFn: async ({ extraAsset: we, eLang: ue }) => {
              const Oe = new FormData();
              Oe.append("sessionid", (0, A.KC)()),
                Oe.append("action", "delete"),
                Oe.append("name", (0, R.K7)(we)),
                (0, R.pN)(we) &&
                  ue != null &&
                  ue != p.xPp &&
                  Oe.append("lang", (0, p.LgB)(ue));
              const Be = await fetch(ve, { method: "post", body: Oe }),
                ke = await Be.json();
              if (!Be.ok) throw ke.errors?.join(" ") || "Error deleting asset";
              return ke;
            },
            onSuccess: (we) => {
              Ae(we.rgExtraAssets);
            },
            onError: (we) => {
              console.error(
                (0, B.we)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof we == "string" ? we : we.message,
                ),
              );
            },
          });
        }
        function Ie() {
          const ve = (0, se.Z3)("ajaxmodifyextraassets"),
            Ae = (0, se.Y7)();
          return (0, $.n)({
            mutationFn: async ({
              strExtraAssetFileName: ue,
              mapAltText: Oe,
            }) => {
              if (!ue || !Oe) return !1;
              const Be = new FormData();
              Be.append("sessionid", (0, A.KC)()),
                Be.append("action", "alt_text"),
                Be.append("name", ue),
                Be.append(
                  "alt_text",
                  JSON.stringify(
                    Object.entries(Oe).map(([et, _t]) => ({
                      lang: et,
                      text: _t,
                    })),
                  ),
                );
              const ke = await fetch(ve, { method: "post", body: Be }),
                Ze = await ke.json();
              if (!ke.ok) throw Ze.errors?.join(" ") || "Error deleting asset";
              return Ze;
            },
            onSuccess: (ue) => {
              ue !== !1 && Ae(ue.rgExtraAssets);
            },
            onError: (ue) => {
              console.error(
                (0, B.we)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof ue == "string" ? ue : ue.message,
                ),
              );
            },
          });
        }
      },
      14295: (ee, ze, i) => {
        "use strict";
        i.d(ze, { L: () => w });
        var e = i(90626),
          p = i(99412),
          a = i(14947),
          fe = i(3166),
          O = i(72849),
          $ = i(25279),
          D = i(9472),
          R = i(51746),
          se = i(18210),
          pe = i(38410),
          Y = i(11243),
          Pe = i(19730),
          Se = Object.defineProperty,
          He = Object.getOwnPropertyDescriptor,
          Ve = (W, b, A, P) => {
            for (
              var H = P > 1 ? void 0 : P ? He(b, A) : b, X = W.length - 1, ce;
              X >= 0;
              X--
            )
              (ce = W[X]) && (H = (P ? ce(b, A, H) : ce(H)) || H);
            return P && H && Se(b, A, H), H;
          };
        class re extends D.q {
          m_bLockedToSpecificAsset;
          m_fnGetImageOptions;
          m_nMaxFileSize;
          m_rgCurrentImageOptionKey = void 0;
          constructor(b, A, P, H, X, ce, De) {
            const xe = (0, R.II)(ce);
            super(P, H, X, ce.src, xe),
              (0, a.Gn)(this),
              (this.m_bLockedToSpecificAsset = b),
              (this.m_fnGetImageOptions = A),
              (this.m_nMaxFileSize = De);
          }
          IsValidAssetType(b, A) {
            const P = this.GetCurrentImageOption(),
              H = P?.width ?? 0,
              X = P?.height ?? 0,
              ce = A && A != this.fileType,
              De = this.IsFileTypeSupported(this.fileType),
              xe = this.BIsVideo() ? 1 : 0,
              Me =
                H > 0 && X > 0
                  ? Math.abs(this.width - H) <= xe &&
                    Math.abs(this.height - X) <= xe
                  : !0,
              F = P?.bMismatchedNewSizes;
            let ie = "";
            De
              ? ce
                ? (ie = (0, se.we)(
                    "#ImageUpload_InvalidFormat",
                    (0, R.EG)(A) ?? "",
                  ))
                : P?.groupName.trim().length > 0
                  ? this.file.size > this.m_nMaxFileSize &&
                    (ie = (0, se.we)(
                      "#ImageUpload_ExceedsMaxFileSize",
                      (0, Pe.dm)(this.m_nMaxFileSize),
                    ))
                  : (ie = (0, se.we)("#ImageUpload_EmptyBaseName"))
              : (ie = (0, se.we)("#ImageUpload_InvalidFormatSelected"));
            const _e = [],
              le = [];
            return (
              !Me && P
                ? le.push(
                    (0, se.we)("#ImageUpload_InvalidResolution", P.groupName),
                  )
                : F &&
                  P &&
                  le.push(
                    (0, se.we)(
                      "#ImageUpload_MismatchedResolution",
                      P.groupName,
                    ),
                  ),
              (P?.rgExistingLanguages?.length ?? 0) > 1 &&
                this.language &&
                P?.rgExistingLanguages.includes(this.language) &&
                _e.push(
                  (0, se.we)(
                    "#ImageUpload_ReplaceLanguage",
                    (0, se.we)("#Language_" + (0, p.LgB)(this.language)),
                  ),
                ),
              {
                error: ie,
                messages: _e,
                warnings: le,
                needsCrop: !1,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BIsOriginalMinimumDimensions(b) {
            return !0;
          }
          FileTypeMatchesImageTypes(b) {
            return !0;
          }
          BIsVideo() {
            return $.Ho.includes(this.fileType);
          }
          BSupportsLanguages() {
            return !0;
          }
          GetResizeDimension() {}
          get ImageOptions() {
            const b = this.filename.lastIndexOf("."),
              A = b != -1 ? this.filename.slice(0, b) : this.filename,
              P = this.m_fnGetImageOptions();
            return (
              this.m_bLockedToSpecificAsset ||
                P.find((H) => H.groupName == A) ||
                P.push({
                  sKey: A,
                  fnGetLabelText: () => A,
                  width: this.width,
                  height: this.height,
                  bEnforceDimensions: !1,
                  groupName: A,
                  bMismatchedNewSizes: !1,
                  rgExistingLanguages: [],
                }),
              P
            );
          }
          GetCurrentImageOptionKey() {
            return this.m_rgCurrentImageOptionKey;
          }
          GetCurrentImageOption() {
            const b = this.m_fnGetImageOptions();
            if (this.m_rgCurrentImageOptionKey)
              return b.find((H) => H.sKey == this.m_rgCurrentImageOptionKey);
            const A = b.find(
              (P) =>
                P.groupName == (0, pe.jj)(this.filename, p.xPp).baseFilename,
            );
            if (A) return A;
            if (b.length == 1) return b[0];
          }
          SetCurrentImageOption(b) {
            this.m_rgCurrentImageOptionKey = b?.sKey;
          }
          GetImageOptionLabel() {
            return e.createElement(
              "span",
              null,
              (0, se.we)("#ImageUpload_ImageGroup"),
              e.createElement(Y.o, {
                tooltip: (0, se.we)("#ImageUpload_ImageGroup_ttip"),
              }),
            );
          }
          IsFileTypeSupported(b) {
            switch (b) {
              case O.bg.iS:
              case O.bg.dU:
              case O.bg.wD:
              case O.bg.CK:
              case O.bg.nn:
              case O.bg.pJ:
                return !0;
              default:
                return !1;
            }
          }
        }
        Ve([a.sH], re.prototype, "m_rgCurrentImageOptionKey", 2),
          Ve([a.EW], re.prototype, "ImageOptions", 1),
          Ve([a.XI], re.prototype, "SetCurrentImageOption", 1);
        var me = i(41735),
          I = i.n(me),
          ae = i(28410),
          S = i(7742),
          E = i(72604),
          k = i(41635),
          v = i(71742),
          z = i(27066),
          K = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          B = (W, b, A, P) => {
            for (
              var H = P > 1 ? void 0 : P ? N(b, A) : b, X = W.length - 1, ce;
              X >= 0;
              X--
            )
              (ce = W[X]) && (H = (P ? ce(b, A, H) : ce(H)) || H);
            return P && H && K(b, A, H), H;
          };
        const Ee = 100 * 1024 * 1024,
          L = 6 * 1024 * 1024;
        class G extends pe.ss {
          m_cancel = void 0;
          m_urls;
          m_regexInvalidFilenameCharacters;
          m_filesToUpload = a.sH.array();
          m_onlyAssetGroup = void 0;
          m_rgExistingAssetGroups = void 0;
          m_rgImageSizes = void 0;
          constructor(b, A) {
            super(),
              (0, a.Gn)(this),
              (this.m_urls = b),
              (this.m_regexInvalidFilenameCharacters = A);
          }
          GetErrorsFromErrorResponse(b) {
            let A;
            const P = b?.response?.data?.errors;
            return (
              P
                ? (A = [
                    ...P.map((H, X) =>
                      e.createElement("span", { key: `error${X}` }, H),
                    ),
                    P?.length > 0
                      ? e.createElement("br", { key: "br" })
                      : void 0,
                    e.createElement(
                      "a",
                      {
                        href: "https://partner.steamgames.com/doc/store/page/assets#error",
                        key: "a",
                      },
                      (0, se.we)(
                        "#StoreAdmin_ExtraAssetUpload_UnknownUploadFailure",
                      ),
                    ),
                  ])
                : console.error(
                    "CExtraAssetsImageUploader.UploadSingleImage failed with unknown error",
                    b,
                  ),
              A
            );
          }
          GetUploadImages() {
            return this.m_filesToUpload;
          }
          ClearImages() {
            this.m_filesToUpload = a.sH.array();
          }
          DeleteUploadImage(b) {
            const A = this.m_filesToUpload.findIndex(
              (P) => b.file == P.file && b.uploadTime == P.uploadTime,
            );
            A >= 0 &&
              (this.m_filesToUpload.splice(A, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]));
          }
          SetExistingAssetGroups(b, A) {
            (this.m_rgExistingAssetGroups = b), (this.m_rgImageSizes = A);
          }
          SetOnlyAssetGroup(b) {
            this.m_onlyAssetGroup = b;
          }
          async AddImageForLanguage(b, A) {
            if ((0, R.aL)(b.type) || (0, R.Uz)(b.type)) {
              const P = await (0, R.zB)(b, (0, R.Uz)(b.type));
              if (P) {
                const H = b.name
                    .toLowerCase()
                    .replace(this.m_regexInvalidFilenameCharacters, "_"),
                  X = new re(
                    !this.m_onlyAssetGroup,
                    () => this.GetImageOptions(),
                    b,
                    H,
                    A,
                    P,
                    Ee,
                  );
                return (
                  (this.m_filesToUpload = [...this.m_filesToUpload, X]), !0
                );
              }
            } else
              console.error(
                "AddImageForLanguage failed to determine file type, not image, video or subtitle",
                b,
                b.type,
              );
            return !1;
          }
          async UploadAllImages(b, A) {
            this.m_cancel = I().CancelToken.source();
            const P = 4,
              H = 300 * 1e3,
              X = (0, pe.$l)(this.GetUploadImages(), b, A),
              ce = X.map(
                (be) => be.GetCurrentImageOption()?.groupName ?? be.filename,
              );
            let De = 0;
            const xe = new Map(),
              Me = new Map();
            let F = 0;
            const ie = async () => {
              for (; F < X.length; ) {
                const be = F++,
                  oe = X[be],
                  Te = ce[be];
                (oe.status = "uploading"), De++;
                try {
                  const he = await this.StartImageUpload(
                    oe,
                    Te,
                    this.m_cancel.token,
                  );
                  if (he.bSuccess) {
                    const We = (0, S.x0)();
                    xe.set(he.nRequestId, (Ie) => We.resolve(Ie));
                    const Ue = new Promise((Ie, ve) =>
                      setTimeout(() => ve(), H),
                    );
                    try {
                      const Ie = await Promise.race([Ue, We.promise]);
                      Me.set(he.nRequestId, {
                        bSuccess: Ie == E.R,
                        uploadImage: oe,
                        strGroupName: Te,
                        elErrorMessage:
                          Ie == E.R
                            ? void 0
                            : (0, se.we)("#MediaConvert_InternalError"),
                      });
                    } catch {
                      Me.set(he.nRequestId, {
                        bSuccess: !1,
                        uploadImage: oe,
                        strGroupName: Te,
                        elErrorMessage: (0, se.we)(
                          "#StoreAdmin_ExtraAssetUpload_Timeout",
                        ),
                      });
                    } finally {
                      xe.delete(he.nRequestId);
                    }
                  } else
                    _e.push({ bSuccess: !1, image: oe, uploadResult: [] }),
                      (oe.status = he.bSuccess ? "success" : "failed"),
                      (oe.message =
                        !he.bSuccess && he.elErrorMessage
                          ? he.elErrorMessage
                          : "");
                } finally {
                  De--;
                }
              }
            };
            Array.from({ length: Math.floor(P) }, () => ie());
            const _e = [];
            for (;;) {
              if (xe.size > 0) {
                const oe = Array.from(xe.keys()),
                  { bSuccess: Te, rgStatus: he } = await this.CheckUploadStatus(
                    oe,
                    this.m_cancel.token,
                  );
                if (Te) {
                  for (const [We, Ue] of k.qQ(oe, he))
                    if (Ue != E._9) {
                      const Ie = xe.get(We);
                      xe.delete(We), Ie?.(Ue);
                    }
                }
              }
              const be = new Map(Me);
              Me.clear();
              for (const [
                oe,
                {
                  bSuccess: Te,
                  uploadImage: he,
                  strGroupName: We,
                  elErrorMessage: Ue,
                },
              ] of be) {
                if (!Te) {
                  (he.status = "failed"),
                    (he.message = Ue),
                    _e.push({ bSuccess: !1, image: he, uploadResult: [] });
                  continue;
                }
                const Ie = await this.CompleteUpload(
                  oe,
                  We,
                  he.language,
                  this.m_cancel.token,
                );
                (he.status = Ie.bSuccess ? "success" : "failed"),
                  (he.message = Ie.bSuccess ? "" : Ie.elErrorMessage),
                  _e.push({
                    bSuccess: Ie.bSuccess,
                    image: he,
                    uploadResult: [],
                  });
              }
              if (F >= X.length && De == 0 && Me.size == 0) break;
              this.m_cancel.token.throwIfRequested(), await (0, S.yI)(1e3);
            }
            const { rgExtraAssets: le } = await this.GetExtraAssets(
              this.m_cancel.token,
            );
            return (
              _e
                .filter((be) => be.bSuccess)
                .forEach((be) => (be.uploadResult = le)),
              _e
            );
          }
          async StartImageUpload(b, A, P) {
            let H;
            if (b.file.size > L) {
              const X = new FormData();
              X.append("sessionid", (0, fe.KC)()),
                X.append("name", A),
                X.append("file_size", "" + b.file.size);
              const ce = await this.MakePost(
                this.m_urls.strGetUploadUrlForAsset,
                X,
                { "Content-Type": "multipart/form-data" },
                "GetUploadUrl",
                P,
              );
              if (!ce.bSuccess) return ce;
              H = ce.data;
              const De = (0, R.N1)(
                { "Content-Type": "application/octet-stream" },
                H.headers_for_upload,
              );
              if (
                !(await I()
                  .put(H.upload_url, b.file, { headers: De, cancelToken: P })
                  .then((Me) => Me.status == 200 || Me.status == 201)
                  .catch(() => !1))
              )
                return (
                  console.warn(
                    "CExtraAssetsImageUploader put to CDNStorage url failed",
                    H.upload_url,
                  ),
                  { bSuccess: !1 }
                );
            }
            {
              const X = new FormData();
              X.append("sessionid", (0, fe.KC)()),
                X.append("asset_type", "extra_asset_v2"),
                X.append("name", A),
                H
                  ? X.append("temp_file_id", H.temp_file_id)
                  : X.append("file", b.file);
              const ce = await this.MakePost(
                this.m_urls.strBeginConvert,
                X,
                { "Content-Type": "multipart/form-data" },
                "BeginUploadUrl",
                P,
              );
              if (!ce.bSuccess) return ce;
              const De = ce.data.request_id;
              return (
                (b.status = "processing"), { bSuccess: !0, nRequestId: De }
              );
            }
          }
          async CheckUploadStatus(b, A) {
            const P = new FormData();
            P.append("sessionid", (0, fe.KC)()),
              P.append("request_ids", b.join(","));
            const H = await this.MakePost(
              this.m_urls.strCheckConvertStatus,
              P,
              void 0,
              "CheckUploadStatus",
              A,
            );
            return H.bSuccess ? { bSuccess: !0, rgStatus: H.data.status } : H;
          }
          async CompleteUpload(b, A, P, H) {
            const X = new FormData();
            X.append("sessionid", (0, fe.KC)()),
              X.append("request_id", b.toString()),
              X.append("name", A),
              X.append("asset_type", "extra_asset_v2"),
              P != p.xPp && X.append("language", (0, p.LgB)(P));
            const ce = await this.MakePost(
              this.m_urls.strCompleteConvert,
              X,
              void 0,
              "CompleteUpload",
              H,
            );
            return ce.bSuccess
              ? ((0, v.wT)(
                  ce.data?.complete,
                  "CompleteUpload shouldn't be run until all uploads are complete",
                ),
                { bSuccess: !0 })
              : ce;
          }
          async GetExtraAssets(b) {
            const A = new FormData();
            A.append("sessionid", (0, fe.KC)());
            const P = await this.MakePost(
              this.m_urls.strGetExtraAssets,
              A,
              void 0,
              "GetExtraAssets",
              b,
            );
            return P.bSuccess
              ? { bSuccess: !0, rgExtraAssets: P.data?.rgExtraAssets }
              : P;
          }
          async MakePost(b, A, P, H, X) {
            let ce;
            try {
              const De = await I().post(b, A, {
                withCredentials: !0,
                headers: P,
                cancelToken: X,
              });
              if (De.status == 200 && typeof De.data == "object") ce = De.data;
              else
                return (
                  console.warn(`CExtraAssetsImageUploader ${H} failed`, b),
                  { bSuccess: !1 }
                );
            } catch (De) {
              const xe = this.GetErrorsFromErrorResponse(De);
              return (
                console.warn(`CExtraAssetsImageUploader ${H} failed`, b, xe),
                { bSuccess: !1, elErrorMessage: xe }
              );
            }
            return { bSuccess: !0, data: ce };
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, se.we)("#ImageUpload_CancelRequest"));
          }
          GetImageOptions() {
            const b = (F, ie, _e, le, be, oe) => ({
                baseFilename: F,
                language: ie,
                bNew: _e,
                size: { width: le, height: be },
                fileSize: oe,
              }),
              A = [];
            for (const F of this.m_filesToUpload.filter(
              (ie) => ie.status == "pending" || (0, D.o)(ie.status),
            ))
              if (this.m_onlyAssetGroup)
                A.push(
                  b(
                    this.m_onlyAssetGroup.baseFilename,
                    F.language ?? p.Bhc,
                    !0,
                    F.width,
                    F.height,
                    F.file.size,
                  ),
                );
              else {
                const ie = (0, pe.jj)(F.filename).baseFilename,
                  _e = F.GetCurrentImageOptionKey() ?? ie;
                A.push(
                  b(
                    _e,
                    F.language ?? p.Bhc,
                    !0,
                    F.width,
                    F.height,
                    F.file.size,
                  ),
                ),
                  _e != ie &&
                    A.push(b(ie, p.xPp, !0, F.width, F.height, F.file.size));
              }
            const P = (F, ie) =>
              F.languages.map((_e) =>
                b(F.baseFilename, _e, !1, ie?.width ?? 0, ie?.height ?? 0, 0),
              );
            let H = this.m_rgExistingAssetGroups ?? [],
              X = this.m_rgImageSizes ?? [];
            if (this.m_onlyAssetGroup) {
              const F = H.findIndex(
                (ie) => ie.baseFilename == this.m_onlyAssetGroup.baseFilename,
              );
              (0, v.wT)(
                F != -1,
                "onlyAssetGroup isn't in the existing assets list",
              ),
                (H = [H[F]]),
                (X = [X[F]]);
            }
            const ce = k.qQ(H, X).flatMap(([F, ie]) => P(F, ie)),
              xe = A.concat(ce).reduce((F, ie) => {
                const _e = F.get(ie.baseFilename) ?? [];
                return _e.push(ie), F.set(ie.baseFilename, _e), F;
              }, new Map()),
              Me = [];
            for (const F of xe.keys()) {
              const ie = xe.get(F).filter((Ie) => Ie.language != p.xPp),
                _e = new Set(ie.map((Ie) => Ie.language)).size,
                le =
                  _e > 1
                    ? (0, se.Yp)(
                        "#StoreAdmin_ExtraAssetUpload_LocalizeGroup",
                        _e,
                        F,
                      )
                    : F,
                be = new Map();
              for (let Ie of ie
                .filter((ve) => !ve.bNew)
                .concat(ie.filter((ve) => ve.bNew)))
                be.set(Ie.language, Ie);
              const oe = Array.from(be.values()).filter((Ie) => !Ie.bNew),
                Te = oe.length > 0 ? oe[0].size : void 0,
                he = ie.filter((Ie) => Ie.bNew).at(0)?.size,
                We = ie
                  .filter((Ie) => Ie.bNew)
                  .some(
                    (Ie) =>
                      Ie.size.width != he.width || Ie.size.height != he.height,
                  ),
                Ue = {
                  sKey: F,
                  fnGetLabelText: () => le,
                  width: Te?.width ?? 0,
                  height: Te?.height ?? 0,
                  bEnforceDimensions: !1,
                  groupName: F,
                  bMismatchedNewSizes: We,
                  rgExistingLanguages: ie
                    .filter((Ie) => !Ie.bNew)
                    .map((Ie) => Ie.language),
                };
              Me.push(Ue);
            }
            return (
              Me.sort((F, ie) =>
                F.sKey < ie.sKey ? -1 : F.sKey > ie.sKey ? 1 : 0,
              ),
              Me
            );
          }
        }
        B([a.sH], G.prototype, "m_filesToUpload", 2),
          B([a.sH], G.prototype, "m_onlyAssetGroup", 2),
          B([a.sH], G.prototype, "m_rgExistingAssetGroups", 2),
          B([a.sH], G.prototype, "m_rgImageSizes", 2),
          B([z.o], G.prototype, "GetUploadImages", 1),
          B([z.o], G.prototype, "ClearImages", 1),
          B([z.o], G.prototype, "DeleteUploadImage", 1),
          B([a.XI], G.prototype, "SetExistingAssetGroups", 1),
          B([a.XI], G.prototype, "SetOnlyAssetGroup", 1),
          B([z.o], G.prototype, "AddImageForLanguage", 1);
        function w() {
          const W = (0, ae.Z3)("ajaxgetextraassets"),
            b = (0, ae.Z3)("ajaxgetuploadurlforasset"),
            A = (0, ae.Z3)("ajaxbeginconvertassetasync"),
            P = (0, ae.Z3)("ajaxcheckconvertassetsstatus"),
            H = (0, ae.Z3)("ajaxtrytocompleteconvertasset"),
            X = e.useMemo(
              () => ({
                strGetExtraAssets: W,
                strGetUploadUrlForAsset: b,
                strBeginConvert: A,
                strCheckConvertStatus: P,
                strCompleteConvert: H,
              }),
              [W, b, A, P, H],
            ),
            { regexInvalidFilenameCharacters: ce } = (0, ae.L4)();
          return e.useMemo(() => new G(X, ce), [X, ce]);
        }
      },
      34604: (ee, ze, i) => {
        "use strict";
        i.d(ze, {
          Bv: () => Se,
          FZ: () => Y,
          IP: () => Pe,
          K7: () => Ve,
          SG: () => me,
          TQ: () => re,
          ar: () => R,
          i$: () => O,
          nO: () => fe,
          pN: () => $,
          q3: () => D,
          wN: () => He,
        });
        var e = i(99412),
          p = i(69787);
        const a = 0,
          fe = 1;
        function O(I) {
          return I && !$(I);
        }
        function $(I) {
          return I && "extra_asset_name" in I;
        }
        function D(I) {
          if (I) return O(I) ? I.name : I.extra_asset_name;
        }
        function R(I, ae) {
          if (!I?.encodings) return null;
          if (I.encodings.some((k) => k.extension.startsWith("poster."))) {
            let k;
            if (
              (ae
                ? ((k = I.encodings.find(
                    (v) => !v.extension.startsWith("poster."),
                  )),
                  document
                    .createElement("video")
                    .canPlayType("video/webm;codecs=vp9") &&
                    (k = I.encodings?.find((v) => v.extension === "webm") ?? k))
                : (k = I.encodings.find((v) =>
                    v.extension.startsWith("poster."),
                  )),
              k)
            )
              return { url: k.url, usage: se(k.extension) };
          }
          const E = I.encodings[0];
          return E ? { url: E.url, usage: se(E.extension) } : null;
        }
        function se(I) {
          switch (I) {
            case "mp4":
            case "webm":
              return fe;
          }
          return a;
        }
        function pe(I, ae) {
          if (!I || Object.keys(I).length == 0) return null;
          if (Object.keys(I).length == 1) return Object.values(I).at(0);
          let S = I[(0, e.LgB)(ae)];
          if (S) return S;
          const E = ae == e.ZLm ? e.NFp : e.Bhc;
          return (S = I[(0, e.LgB)(E)]), S || (ae == e.xPp ? I[0] : null);
        }
        function Y(I, ae = e.Bhc, S = 0) {
          const E = Pe(I, !1, ae);
          return E ? (0, p.cn)(E.url, S) : null;
        }
        function Pe(I, ae, S = e.Bhc) {
          if (!I) return;
          if (O(I)) return { url: I.url, usage: a };
          const E = pe(I.images, S);
          return E ? R(E, ae) : null;
        }
        function Se(I, ae = e.Bhc) {
          return I ? (O(I) ? I.name : I.alt_text?.[(0, e.LgB)(ae)]) : void 0;
        }
        function He(I) {
          return (
            (I?.images && Object.keys(I.images).map((ae) => (0, e.sfN)(ae))) ??
            []
          );
        }
        function Ve(I) {
          return I
            ? (O(I) ? I.name : I.extra_asset_name).replace(
                /^\{STEAM_APP_IMAGE\}\/extras\//,
                "",
              )
            : void 0;
        }
        function re(I) {
          return `{STEAM_APP_IMAGE}/extras/${I}`;
        }
        const me =
          "image/png, image/jpeg, image/gif, image/webp, video/mp4, video/webm";
      },
      17616: (ee, ze, i) => {
        "use strict";
        i.d(ze, { KC: () => re, eE: () => v, gU: () => k, jy: () => Ve });
        var e = i(7850),
          p = i(90626),
          a = i(58534),
          fe = i(8323),
          O = i(36707),
          $ = i(86048),
          D = i(64868),
          R = i(98609),
          se = i(97982),
          pe = i.n(se),
          Y = i(99412),
          Pe = i(50109);
        const Se = "v_StoreAdminLanguageChange",
          He = p.createContext(void 0);
        function Ve(z) {
          const [K, N] = p.useState(),
            B = p.useMemo(
              () => ({ strActiveLanguage: K, setActiveLanguage: N }),
              [K],
            );
          return (
            p.useEffect(() => {
              K &&
                window.LocChangeControlsToLanguage &&
                window.LocChangeControlsToLanguage(K);
            }, [K]),
            (0, $.l6)(
              window,
              Se,
              p.useCallback((Ee) => {
                Ee.detail.strLanguage && N(Ee.detail.strLanguage);
              }, []),
            ),
            (0, e.jsx)(He.Provider, { value: B, children: z.children })
          );
        }
        function re(z, K, N, B) {
          const Ee = p.useMemo(() => Array.from(z.keys()), [z]),
            [L] = p.useState(() => {
              const X = new Map(K);
              return new Map(Ee.map((ce) => [ce, (0, fe.Jc)(X.get(ce) || "")]));
            }),
            G = p.useContext(He),
            [w, W] = p.useState(() => E(L.size ? L : z)),
            b = G?.strActiveLanguage ?? w,
            A = p.useCallback(
              (X) => {
                G?.setActiveLanguage(X), W(X);
              },
              [G],
            ),
            P = (0, e.jsx)(me, {
              mapLanguages: z,
              mapValues: L,
              strActiveLanguage: b,
              setActiveLanguage: A,
            }),
            H =
              !!(N && B) &&
              (0, e.jsx)(ae, {
                rgLanguages: Ee,
                mapValues: L,
                namePrefix: N,
                rgPath: B,
              });
          return {
            strActiveLanguage: b,
            mapValues: L,
            rctLanguageSelect: P,
            rgLanguages: Ee.map(Y.sfN),
            rctHiddenInputs: H,
            setActiveLanguage: A,
          };
        }
        function me(z) {
          const {
              mapLanguages: K,
              mapValues: N,
              strActiveLanguage: B,
              setActiveLanguage: Ee,
            } = z,
            L = p.useMemo(() => {
              let w = [];
              return (
                K.forEach((W, b) => {
                  w.push({
                    data: b,
                    label: (0, e.jsx)(I, {
                      strLocLanguage: W,
                      value: N.get(b),
                    }),
                  });
                }),
                w
              );
            }, [K, N]),
            G = p.useCallback((w) => Ee(w.data), [Ee]);
          return (0, e.jsx)(a.m, {
            strClassName: se.LanguageSelect,
            onChange: G,
            selectedOption: B,
            rgOptions: L,
          });
        }
        function I(z) {
          const { strLocLanguage: K, value: N } = z,
            [B, Ee] = p.useState(() => !!N?.Value?.trim()),
            L = p.useCallback((G) => Ee(!!G.trim()), []);
          return (
            (0, D.x2)(N, L),
            p.useEffect(() => L(N.Value), [L, N]),
            (0, e.jsx)("span", {
              className: (0, O.A)(se.LanguageOption, B && se.HasValue),
              children: K,
            })
          );
        }
        function ae(z) {
          const { rgLanguages: K, mapValues: N, namePrefix: B, rgPath: Ee } = z;
          return K.map((L) =>
            (0, e.jsx)(
              S,
              { language: L, value: N.get(L), namePrefix: B, rgPath: Ee },
              L,
            ),
          );
        }
        const S = p.memo(function (K) {
          const { language: N, value: B, namePrefix: Ee, rgPath: L } = K,
            G = (0, D.gc)(B) || "",
            w = Ee + [...L, N].map((W) => `[${W}]`).join("");
          return (0, e.jsx)("input", { type: "hidden", name: w, value: G });
        });
        function E(z) {
          return z.has(R.TS.LANGUAGE)
            ? R.TS.LANGUAGE
            : z.has("english")
              ? "english"
              : z.keys().next().value;
        }
        function k() {
          const z = p.useContext(He);
          return (0, Y.sfN)(z?.strActiveLanguage, Y.Bhc);
        }
        function v(z) {
          const {
              strActiveLanguage: K,
              mapValues: N,
              rctLanguageSelect: B,
              setActiveLanguage: Ee,
            } = re(z, [], null, null),
            L = (0, Y.sfN)(K, Y.Bhc);
          return (
            p.useEffect(() => {
              Pe.O.Get().SetCurEditLanguage(L);
            }, [L]),
            (0, D.hL)(Pe.O.Get().GetCallback(), (G) => Ee((0, Y.LgB)(G))),
            {
              strActiveLanguage: K,
              eActiveLang: L,
              rctLanguageSelect: B,
              mapValues: N,
            }
          );
        }
      },
      5859: (ee, ze, i) => {
        "use strict";
        i.r(ze), i.d(ze, { StoreAppPageHeader: () => Gs, default: () => Zn });
        var e = i(7850),
          p = i(38585),
          a = i(64868),
          fe = i(98724),
          O = i(52893),
          $ = i(8145),
          D = i(57053),
          R = i(71742);
        class se {
          m_nodes = [];
          m_schema;
          m_bConvertNewlinesToBR;
          m_fnProcessText;
          constructor(u, h, y) {
            (this.m_schema = u),
              (this.m_bConvertNewlinesToBR = h?.bConvertNewlinesToBR ?? !1);
            const j = y && "mark" in y;
            this.m_fnProcessText = j ? void 0 : h?.fnProcessText;
          }
          AppendText(u, h) {
            u.length &&
              (this.m_bConvertNewlinesToBR
                ? this.m_nodes.push(...this.GenerateBreaksForNewlines(u))
                : this.m_nodes.push(...this.TextNode(u)));
          }
          AppendNode(u) {
            this.m_nodes.push(u);
          }
          GetElements() {
            return this.m_nodes;
          }
          GenerateBreaksForNewlines(u) {
            const h = [];
            let y = 0;
            for (
              let j = u.indexOf(
                `
`,
                y,
              );
              j !== -1;
              j = u.indexOf(
                `
`,
                y,
              )
            )
              y != j && h.push(...this.TextNode(u.substring(y, j))),
                h.push(this.m_schema.nodes.hard_break.createChecked()),
                (y = j + 1);
            return y < u.length && h.push(...this.TextNode(u.substring(y))), h;
          }
          TextNode(u) {
            const h = this.m_fnProcessText && this.m_fnProcessText(u);
            return h || [this.m_schema.text(u)];
          }
        }
        function pe(m) {
          return m
            .filter((u) => u.isText)
            .map((u) => u.text)
            .join();
        }
        function Y(m) {
          let u = "";
          return (
            m.descendants((h) => {
              h.isText && (u += h.text);
            }),
            u
          );
        }
        class Pe extends $.Al {
          m_schemaConfig;
          m_mapPMBBNodes = new Map();
          m_bUseBackslashEscapes;
          constructor(u, h) {
            super(u.bbcode_dictionary, (y) => {
              const j = y?.tag && u.bbcode_dictionary.get(y.tag);
              return new se(
                u.pm_schema,
                h,
                j && "Constructor" in j ? j.Constructor : void 0,
              );
            }),
              (this.m_schemaConfig = u),
              (this.m_bUseBackslashEscapes = h?.bUseBackslashEscapes ?? !0),
              this.m_schemaConfig.bbcode_dictionary.forEach((y) => {
                "node" in y.Constructor &&
                  this.m_mapPMBBNodes.set(
                    y.Constructor.node.name,
                    y.Constructor,
                  );
              });
          }
          get schema() {
            return this.m_schemaConfig.pm_schema;
          }
          ParseBBCode(u) {
            const h = this.Parse(
              u,
              this.BBNodeToPMNode.bind(this),
              this.m_bUseBackslashEscapes,
            );
            return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
              {},
              this.ConvertLineBreaksToParagraphs(D.FK.fromArray(h)),
            );
          }
          TryCreateNode(u, h, y) {
            let j = D.FK.from(h),
              V;
            if (
              !u.node.validContent(j) &&
              (u.node.isInline ||
                (j = D.FK.from(
                  h.filter((M) =>
                    M.isText && M.text.match(/^\s*$/)
                      ? !1
                      : !(
                          M.type == this.schema.nodes.hard_break &&
                          !u.node.validContent(D.FK.from(M))
                        ),
                  ),
                )),
              !u.node.validContent(j))
            ) {
              const M = u.acceptNode;
              V = [];
              let J = [],
                te = !1,
                q = !1;
              for (let ge = 0; ge < j.childCount; ge++) {
                const je = j.child(ge),
                  de = D.FK.from(je),
                  Ce = u.node.validContent(de);
                !q && (Ce || M?.validContent(de))
                  ? (Ce || (te = !0), J.push(je))
                  : ((q = !0), V.push(je));
              }
              if ((console.assert(!te || !!M), te && M)) {
                M.isBlock &&
                  J.length > 1 &&
                  J[J.length - 1].type == this.schema.nodes.hard_break &&
                  (J = J.slice(0, -1));
                const ge = this.m_mapPMBBNodes.get(M.name);
                (0, R.wT)(
                  ge,
                  `Indicated acceptNode type ${M.name} for ${u.node.name} missing`,
                );
                let je;
                try {
                  ge
                    ? (je = this.TryCreateNode(ge, J, void 0))
                    : (je = M.createChecked(void 0, J));
                } catch (de) {
                  console.error(de), (je = []), (V = [...J, ...V]);
                }
                j = D.FK.from(je);
              } else j = D.FK.from(J);
            }
            try {
              const M =
                u.node.createAndFill(y, j) || u.node.createChecked(y, j);
              return V ? [M, ...V] : M;
            } catch {
              return (
                (0, R.wT)(
                  !1,
                  `Invalid content for node type ${u.node.name}, removing and promoting children.`,
                ),
                h
              );
            }
          }
          BBNodeToPMNode(u, h, ...y) {
            let j = u.BBArgsToAttrs ? u.BBArgsToAttrs(h.args || {}) : void 0;
            try {
              if (
                ("convertContentToAttr" in u &&
                  u.convertContentToAttr &&
                  ((!j || !j[u.convertContentToAttr]) &&
                    (j = { ...(j || {}), [u.convertContentToAttr]: pe(y) }),
                  "node" in u && (y = [])),
                "node" in u)
              )
                return this.TryCreateNode(u, y, j);
              {
                const V = u.mark.create(j);
                return y.map((M) => this.RecursivelyApplyMark(M, V));
              }
            } catch (V) {
              return (
                console.error(`Error parsing [${h.tagname}] tag: ${V}`, V), []
              );
            }
          }
          RecursivelyApplyMark(u, h) {
            if (u.isText || u.type.allowsMarkType(h.type))
              return u.mark([...u.marks, h]);
            {
              const y = [];
              return (
                u.descendants(
                  (j) => (y.push(this.RecursivelyApplyMark(j, h)), !1),
                ),
                u.type.create(u.attrs, y, u.marks)
              );
            }
          }
          ConvertLineBreaksToParagraphs(u) {
            const h = new Map(),
              y = this.m_schemaConfig.pm_schema;
            this.m_mapPMBBNodes.forEach((M) => {
              M.acceptNode && h.set(M.acceptNode.name, M.node);
            });
            const j = [],
              V = {
                nodes: [],
                nodeType: void 0,
                reset() {
                  (this.nodes = []), (this.nodeType = void 0);
                },
                accumulate(M, J) {
                  return (
                    this.nodeType && M != this.nodeType && this.emit(),
                    (this.nodeType = M),
                    this.nodes.push(J),
                    !0
                  );
                },
                emit(M = !1) {
                  const J = this.nodeType || (M ? y.nodes.paragraph : void 0);
                  J && (j.push(J.createChecked({}, this.nodes)), this.reset());
                },
              };
            return (
              u.forEach((M) => {
                const J = M.type == y.nodes.hard_break,
                  te = D.FK.from(M);
                if (J || y.topNodeType.validContent(te)) {
                  const q = J && V.nodes.length > 0;
                  V.emit(),
                    J
                      ? q || j.push(y.nodes.paragraph.createChecked())
                      : j.push(M);
                } else {
                  let q;
                  if (
                    (y.nodes.paragraph.validContent(te)
                      ? (q = y.nodes.paragraph)
                      : (q = h.get(M.type.name)),
                    q)
                  )
                    V.accumulate(q, M);
                  else {
                    (0, R.wT)(
                      !1,
                      `Couldn't accept ${M.type.name} at root of document, converting to paragraph`,
                    );
                    const ge = Y(M);
                    ge && V.accumulate(y.nodes.paragraph, y.text(ge));
                  }
                }
              }),
              (V.nodes.length || !j.length) && V.emit(!0),
              D.FK.from(j)
            );
          }
        }
        function Se(m, u, h) {
          const y = {
            schema: u.pm_schema,
            config: u.pm_to_bbcode_config,
            bUseBackslashEscapes: h?.bUseBackslashEscapes ?? !0,
          };
          return He(y, m, [], !1);
        }
        function He(m, u, h, y) {
          const { schema: j, config: V } = m;
          let M = u.marks,
            J = "";
          const te = V.mapNodes.get(u.type),
            { tag: q, args: ge } = I(te, u);
          q == "emoticon"
            ? (J += ":")
            : q && (J += (0, $.CS)(q, ge, te?.bVerbatimArgs));
          const je = y || !!te?.bVerbatimContent;
          let de = !1;
          return (
            u.content.forEach((Ce) => {
              if (
                (([J, M] = re(V, M, Ce.marks, J)),
                ([J, M] = me(V, M, Ce.marks, J)),
                Ce.type.isText)
              ) {
                const Le = Ce.text || "";
                J += je || !m.bUseBackslashEscapes ? Le : (0, $.vE)(Le);
              } else if (Ce.type == j.nodes.hard_break)
                J += `
`;
              else {
                const Le = Ve(V, Ce);
                Le &&
                  de &&
                  (J += `
`),
                  (J += He(m, Ce, M, je)),
                  (de = Le);
                return;
              }
              de = !1;
            }),
            ([J] = re(V, M, h, J)),
            q == "emoticon" ? (J += ":") : q && (J += (0, $.op)(q)),
            J
          );
        }
        function Ve(m, u) {
          return u.type.isBlock && !I(m.mapNodes.get(u.type), u).tag;
        }
        function re(m, u, h, y) {
          const j = [];
          for (const M of u) h.indexOf(M) === -1 && j.push(M);
          if (!j.length) return [y, u];
          const V = u.slice();
          for (
            ;
            j.length &&
            ((0, R.wT)(V.length, "no marks left to close"), !!V.length);
          ) {
            const M = V.pop(),
              J = m.mapMarks.get(M.type),
              { tag: te } = ae(J, M);
            y += (0, $.op)(te);
            const q = j.indexOf(M);
            q != -1 && j.splice(q, 1);
          }
          return [y, V];
        }
        function me(m, u, h, y) {
          let j;
          for (const V of h)
            if (u.indexOf(V) === -1) {
              j || (j = u.slice());
              const M = m.mapMarks.get(V.type);
              if (((0, R.wT)(M, "mark missing bbtag"), M)) {
                j.push(V);
                const { args: J, tag: te } = ae(M, V);
                y += (0, $.CS)(te, J);
              }
            }
          return [y, j ?? u];
        }
        function I(m, u) {
          if (m && m.AttrsToBBArgs) {
            const { tag: h = m.tag, args: y = {} } = m.AttrsToBBArgs(
              u.attrs,
              u,
            );
            return { tag: h, args: y };
          }
          return { tag: m?.tag, args: {} };
        }
        function ae(m, u) {
          if (m && m.AttrsToBBArgs) {
            const { tag: h = m.tag, args: y = {} } = m.AttrsToBBArgs(
              u.attrs,
              u,
            );
            return { tag: h, args: y };
          }
          return { tag: m?.tag, args: {} };
        }
        const S = new O.hs("CProseMirrorState - OnChange");
        class E {
          m_bbcode;
          m_currentDoc;
          m_bHasUncomittedChanges = !1;
          m_schemaConfig;
          m_bbcodeParser;
          m_bUseBackslashEscapes;
          m_onStateChangedCallbacks = new p.l();
          m_fnCommitChanges;
          m_view;
          m_state;
          constructor(u, h, y, j) {
            const { parser: V, bUseBackslashEscapes: M = !0 } = j ?? {};
            (this.m_schemaConfig = u),
              (this.m_bUseBackslashEscapes = M),
              (this.m_bbcodeParser = new Pe(u, {
                ...V,
                bUseBackslashEscapes: M,
              })),
              (this.m_bbcode = h),
              (this.m_fnCommitChanges = y),
              (this.m_state = this.ConstructState());
          }
          CommitChanges() {
            this.m_currentDoc &&
              this.m_bHasUncomittedChanges &&
              ((this.m_bbcode = Se(this.m_currentDoc, this.m_schemaConfig, {
                bUseBackslashEscapes: this.m_bUseBackslashEscapes,
              })),
              this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
              (this.m_bHasUncomittedChanges = !1));
          }
          BHasUncomittedChanges() {
            return this.m_bHasUncomittedChanges;
          }
          UpdateState(u) {
            const h = u(this.m_view?.state.tr || this.m_state.tr);
            !h ||
              !h.docChanged ||
              (this.m_view
                ? this.m_view.dispatch(h)
                : (this.m_state = this.m_state.apply(h)));
          }
          get state() {
            return this.m_state;
          }
          get schemaConfig() {
            return this.m_schemaConfig;
          }
          get bbcodeParser() {
            return this.m_bbcodeParser;
          }
          get OnStateChangedCallbacks() {
            return this.m_onStateChangedCallbacks;
          }
          ConstructState() {
            const u = new O.k_({
                key: S,
                view: (y) => (
                  console.assert(!this.m_view),
                  (this.m_view = y),
                  {
                    update: (j, V) => this.OnStateChange(V, j.state),
                    destroy: () => (this.m_view = void 0),
                  }
                ),
              }),
              h = [(0, fe.b6)(), u];
            return O.$t.create({
              schema: this.m_schemaConfig.pm_schema,
              doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
              plugins: h,
            });
          }
          InstallPlugin(u) {
            const h = this.m_view ? this.m_view.state : this.m_state;
            return (
              h.plugins.includes(u) ||
                ((this.m_state = h.reconfigure({ plugins: [...h.plugins, u] })),
                this.m_view?.updateState(this.m_state)),
              () => {
                const y = this.m_view ? this.m_view.state : this.m_state;
                (this.m_state = y.reconfigure({
                  plugins: y.plugins.filter((j) => j != u),
                })),
                  this.m_view?.updateState(this.m_state);
              }
            );
          }
          OnStateChange(u, h) {
            (this.m_state = h),
              u.doc &&
                u.doc != h.doc &&
                ((this.m_currentDoc = h.doc),
                (this.m_bHasUncomittedChanges = !0),
                this.m_onStateChangedCallbacks.Dispatch(
                  this.m_currentDoc,
                  u.doc,
                ));
          }
          ReplaceDocument(u) {
            this.m_bbcode != u &&
              this.UpdateState((h) => {
                this.m_bbcode = u;
                const y = this.m_bbcodeParser.ParseBBCode(u);
                return (
                  (h = this.m_state.tr
                    .replaceWith(0, this.m_state.doc.content.size, y)
                    .scrollIntoView()),
                  h
                );
              });
          }
        }
        function k(m, u) {
          (0, a.hL)(m?.OnStateChangedCallbacks, u);
        }
        var v = i(90626);
        function z(m, u) {
          const { msAutosaveTimeout: h = 1e3, msMaxInterval: y = h * 10 } =
              u || {},
            [j, V] = v.useState(!1),
            M = v.useRef(0);
          return (
            k(
              m,
              v.useCallback(() => {
                (M.current = performance.now()), V(!0);
              }, []),
            ),
            v.useEffect(() => {
              if (!j || !m) return;
              const J = performance.now(),
                te = (ge = !1) => {
                  q = void 0;
                  const je = performance.now(),
                    de = je - M.current;
                  ge || de >= h || je - J >= y
                    ? (console.log("Committing changes"),
                      m.CommitChanges(),
                      V(!1))
                    : (q = window.setTimeout(te, h - de));
                };
              let q = window.setTimeout(te, h);
              return () => {
                q && (window.clearTimeout(q), te(!0));
              };
            }, [j, m, h, y]),
            { bDirty: j }
          );
        }
        var K = i(72739),
          N = i(74685);
        const B = v.memo(function (u) {
          const { specs: h } = u,
            [y, j] = v.useState([]),
            V = v.useRef(0),
            M = v.useCallback(
              (te) => (
                j((q) => [...q, { id: V.current++, nodeView: te }]),
                () => j((q) => q.filter((ge) => ge.nodeView != te))
              ),
              [],
            ),
            J = v.useMemo(() => {
              const te = {};
              return (
                h
                  .filter(Boolean)
                  .forEach(
                    (q) =>
                      (te[q.type.name] = (ge, je, de) =>
                        new L(q, ge, je, de, M)),
                  ),
                new O.k_({ props: { nodeViews: te } })
              );
            }, [h, M]);
          return (
            (0, N.c$)(J),
            y.map(({ id: te, nodeView: q }) =>
              (0, e.jsx)(Ee, { nodeView: q }, te),
            )
          );
        });
        function Ee(m) {
          const {
              element: u,
              spec: h,
              getProps: y,
              onPropsChanged: j,
              actions: V,
              isSelected: M,
            } = m.nodeView,
            [J, te] = v.useReducer((q) => q + 1, 0);
          return (
            v.useEffect(() => j.Register(te).Unregister, [j, te]),
            K.createPortal(
              v.createElement(h.component, { ...y(), selected: M(), ...V }),
              u,
            )
          );
        }
        class L {
          dom;
          contentDOM;
          onPropsChanged;
          node;
          selected;
          reactHost;
          destroy;
          constructor(u, h, y, j, V) {
            this.node = h;
            const M = y.dom.ownerDocument,
              J = M.createElement(u.type.isInline ? "span" : "div");
            this.dom = J;
            let te = J;
            u.bEditableContent &&
              ((te = this.reactHost =
                M.createElement(u.type.isInline ? "span" : "div")),
              (te.contentEditable = "false"),
              J.appendChild(te),
              (this.contentDOM = M.createElement(
                u.type.inlineContent ? "span" : "div",
              )),
              J.appendChild(this.contentDOM));
            const { selection: q } = y.state;
            this.selected = j() >= q.from && j() + h.nodeSize <= q.to;
            const ge = (Ce) => {
                const Le = Ce(y.state.tr, h, j());
                Le && y.dispatch(Le);
              },
              je = {
                update: ge,
                setAttrs: (Ce, Le) =>
                  ge((ut, gt, xt) => ut.setNodeMarkup(xt, Le, Ce)),
                removeNode: () =>
                  ge((Ce, Le, ut) => Ce.delete(ut, ut + Le.nodeSize)),
                focusView: () => {
                  window.setTimeout(() => y.focus(), 1);
                },
              },
              de = new p.l();
            (this.destroy = V({
              element: te,
              spec: u,
              getProps: () => u.readProps(this.node),
              isSelected: () => this.selected,
              onPropsChanged: de,
              actions: je,
            })),
              (this.onPropsChanged = de.Dispatch.bind(de));
          }
          update(u, h, y) {
            return u.type != this.node.type
              ? !1
              : ((this.node = u), this.onPropsChanged(), !0);
          }
          ignoreMutation(u) {
            return this.contentDOM && this.contentDOM.contains(u.target)
              ? !1
              : this.reactHost
                ? !0
                : u.type != "selection";
          }
          stopEvent(u) {
            return !!this.reactHost && this.reactHost.contains(u.target);
          }
          selectNode() {
            (this.selected = !0), this.onPropsChanged();
          }
          deselectNode() {
            (this.selected = !1), this.onPropsChanged();
          }
        }
        function G(m) {
          return (u, h, y) => u.replaceWith(y, y + h.nodeSize, m);
        }
        var w = i(2272),
          W = i(34604),
          b = i(28410),
          A = i(83085),
          P = i(19298),
          H = i(52951),
          X = i(74875),
          ce = i(29287),
          De = i(74827),
          xe = i(25792),
          Me = i(33645),
          F = i.n(Me),
          ie = i(38539),
          _e = i(4188),
          le = i(36707),
          be = i(29950);
        function oe(m, u, h = 0) {
          return () => [m, { class: u }, h];
        }
        function Te(m, u, h = 0) {
          return [m, { class: u }, h];
        }
        function he(m, u) {
          return () => [
            u,
            { class: F().PreservedUnsupportedTag },
            ["span", { class: F().Tag }, `[${m}]`],
            ["span", 0],
            ["span", { class: F().Tag }, `[/${m}]`],
          ];
        }
        function We(m) {
          return {
            tag: `h${m}`,
            BBArgsToAttrs: (u) => ({ level: m, align: u.align || "left" }),
            AttrsToBBArgs: (u) => {
              let h = { tag: `h${u.level}`, args: {} };
              return (
                u.align &&
                  u.align != "left" &&
                  h.args &&
                  (h.args.align = u.align),
                h
              );
            },
          };
        }
        function Ue(m) {
          return {
            tag: `h${m}`,
            getAttrs(u) {
              return { level: m, align: u.style.textAlign || "left" };
            },
          };
        }
        const Ie = {
            paragraph: {
              attrs: { align: { default: "left" } },
              content: "inline*",
              group: "block",
              parseDOM: [
                {
                  tag: "p",
                  getAttrs(m) {
                    return { align: m.style.textAlign || "left" };
                  },
                },
              ],
              toDOM(m) {
                const u = { class: (0, le.A)("pm_paragraph", F().Paragraph) };
                return (
                  m.attrs.align &&
                    m.attrs.align != "left" &&
                    (u.style = `text-align: ${m.attrs.align}`),
                  ["p", u, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (m) => ({ align: m.align }),
                AttrsToBBArgs: (m) => {
                  let u = { args: {} };
                  return (
                    m.align && m.align != "left" && (u.args.align = m.align), u
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(Ue),
              toDOM(m) {
                const u = {
                  class:
                    `BB_Header${m.attrs.level} ` +
                    F()[`Header${m.attrs.level}`],
                };
                return (
                  m.attrs.align &&
                    m.attrs.align != "left" &&
                    (u.style = `text-align: ${m.attrs.align}`),
                  ["h" + m.attrs.level, u, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(We),
            },
            image: {
              inline: !0,
              attrs: {
                src: {},
                alt: { default: null },
                title: { default: null },
                style: { default: void 0 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "img[src]",
                  getAttrs(m) {
                    return {
                      src: m.getAttribute("src"),
                      title: m.getAttribute("title"),
                      alt: m.getAttribute("alt"),
                      style: m.getAttribute("style"),
                    };
                  },
                },
              ],
              toDOM(m) {
                const { src: u, alt: h, title: y, style: j } = m.attrs;
                return [
                  "img",
                  {
                    src: (0, be.J)(u),
                    alt: h,
                    title: y,
                    class: (0, le.A)(F().Image, {
                      [F().Image_Inline]: j === "inline",
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (m) => ({
                  src: m.src,
                  style: m.style ?? void 0,
                }),
                AttrsToBBArgs: (m) => ({
                  args: { src: m.src, ...(m.style ? { style: m.style } : {}) },
                }),
                convertContentToAttr: "src",
              },
            },
            video: {
              inline: !0,
              attrs: {
                webm: { default: "" },
                mp4: { default: "" },
                poster: { default: "" },
                autoplay: { default: !0 },
                controls: { default: !1 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "video",
                  getAttrs(m) {
                    if (m.tagName !== "video") return;
                    const u = m;
                    let h = "",
                      y = "";
                    for (const j of u.querySelectorAll("source"))
                      j.type == "video/mp4"
                        ? (h = j.src)
                        : j.type == "video/webm" && (y = j.src);
                    return {
                      mp4: h,
                      webm: y,
                      poster: u.poster || "",
                      autoplay: !!u.autoplay,
                      controls: !!u.controls,
                    };
                  },
                },
              ],
              toDOM(m) {
                const {
                    webm: u,
                    mp4: h,
                    poster: y,
                    autoplay: j,
                    controls: V,
                  } = m.attrs,
                  M = [];
                return (
                  u &&
                    M.push([
                      "source",
                      { src: (0, be.J)(u), type: "video/webm" },
                    ]),
                  h &&
                    M.push([
                      "source",
                      { src: (0, be.J)(h), type: "video/mp4" },
                    ]),
                  [
                    "video",
                    {
                      poster: (0, be.J)(y),
                      autoPlay: !!j,
                      controls: !!V,
                      loop: !V && !!j,
                    },
                    ...M,
                  ]
                );
              },
              bbCode: {
                tag: "video",
                BBArgsToAttrs: (m) => ({
                  webm: m.webm,
                  mp4: m.mp4,
                  poster: m.poster,
                  autoplay: m.autoplay == "true",
                  controls: m.controls == "true",
                }),
                AttrsToBBArgs: (m) => ({
                  args: {
                    webm: m.webm || "",
                    mp4: m.mp4 || "",
                    poster: m.poster || "",
                    autoplay: m.autoplay ? "true" : "false",
                    controls: m.controls ? "true" : "false",
                  },
                }),
              },
            },
            bullet_list: {
              ..._e.fF,
              content: "list_item+",
              group: "block",
              toDOM: oe("ul", F().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ..._e.o8,
              content: "list_item+",
              group: "block",
              toDOM: oe("ol", F().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ..._e.Aw,
              content: "paragraph block*",
              toDOM: oe("li", F().ListItem),
              bbCode: { tag: "*", autocloses: !0 },
            },
            code_block: {
              content: "inline*",
              marks: "",
              group: "block",
              code: !0,
              defining: !0,
              parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
              toDOM() {
                return [
                  "pre",
                  { class: F().CodeBlock },
                  ["code", { class: F().Code }, 0],
                ];
              },
              bbCode: { tag: "code" },
            },
          },
          ve = {
            strong: {
              parseDOM: [
                { tag: "strong" },
                {
                  tag: "b",
                  getAttrs: (m) => m.style.fontWeight != "normal" && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (m) => m.type.name == "strong",
                },
                {
                  style: "font-weight",
                  getAttrs: (m) => /^(bold(er)?|[5-9]\d{2,})$/.test(m) && null,
                },
              ],
              toDOM: oe("b", (0, le.A)("BB_Bold", F().Bold)),
              bbCode: { tag: "b" },
            },
            italic: {
              parseDOM: [
                { tag: "i" },
                { tag: "em" },
                { style: "font-style=italic" },
                {
                  style: "font-style=normal",
                  clearMark: (m) => m.type.name == "em",
                },
              ],
              toDOM: oe("i", (0, le.A)("BB_Italic", F().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: oe("u", (0, le.A)("BB_Underline", F().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: oe("span", (0, le.A)("BB_Strike", F().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: oe("code", (0, le.A)("BB_Code", F().Code)),
              bbCode: { tag: "c" },
            },
            link: {
              attrs: { href: {}, title: { default: null } },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs(m) {
                    return {
                      href: (0, be.J)(m.getAttribute("href") ?? ""),
                      title: m.getAttribute("title"),
                    };
                  },
                },
              ],
              toDOM(m) {
                const { href: u, title: h } = m.attrs;
                return [
                  "a",
                  { href: (0, be.J)(u), title: h, class: "BB_Link" },
                  0,
                ];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (m) => ({ href: m[""] }),
                AttrsToBBArgs: (m) => ({ args: { "": m.href } }),
                convertContentToAttr: "href",
              },
            },
          },
          Ae = { nodes: Ie, marks: ve },
          Oe = {
            node: {},
            marks: {
              color: {
                attrs: { color: {} },
                parseDOM: [{ style: "color", getAttrs: (m) => ({ color: m }) }],
                toDOM(m) {
                  return [
                    "span",
                    {
                      style: `color: ${m.attrs.color}`,
                      class: (0, le.A)("BB_Color", F().Color),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "color",
                  BBArgsToAttrs: (m) => ({ color: m[""] }),
                  AttrsToBBArgs: (m) => ({ args: { "": m.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
              bgcolor: {
                attrs: { color: {} },
                parseDOM: [
                  { style: "bgcolor", getAttrs: (m) => ({ color: m }) },
                ],
                toDOM(m) {
                  return [
                    "span",
                    {
                      style: `background-color: ${m.attrs.color}`,
                      class: (0, le.A)("BB_BGColor", F().BGColor),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "bgcolor",
                  BBArgsToAttrs: (m) => ({ color: m[""] }),
                  AttrsToBBArgs: (m) => ({ args: { "": m.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
            },
          },
          Be = { NoBorder: "noborder", EqualCells: "equalcells" },
          ke = ie.of({
            tableGroup: "block",
            cellContent: "paragraph block*",
            cellAttributes: {
              class: {
                default: F().TableCell,
                setDOMAttr: (m, u) => {
                  u.class = m;
                },
              },
            },
          }),
          Ze = {
            BBArgsToAttrs: (m) => {
              const u = {};
              return (
                m.colspan && (u.colspan = parseInt(m.colspan)),
                m.rowspan && (u.rowspan = parseInt(m.rowspan)),
                m.colwidth &&
                  (u.colwidth = m.colwidth.split(",").map((h) => parseInt(h))),
                u
              );
            },
            AttrsToBBArgs: (m) => {
              const u = {};
              return (
                m.colspan &&
                  m.colspan != 1 &&
                  (u.colspan = m.colspan.toString()),
                m.rowspan &&
                  m.rowspan != 1 &&
                  (u.rowspan = m.rowspan.toString()),
                m.colwidth && (u.colwidth = m.colwidth.join(",")),
                { args: u }
              );
            },
          },
          et = {
            table: {
              ...ke.table,
              toDOM: (m) =>
                Te(
                  "table",
                  (0, le.A)(
                    F().Table,
                    m.attrs.noborder && F().NoBorder,
                    m.attrs.equalcells && F().EqualCells,
                  ),
                  ["tbody", 0],
                ),
              attrs: {
                [Be.NoBorder]: { default: !1 },
                [Be.EqualCells]: { default: !0 },
              },
              bbCode: {
                tag: "table",
                BBArgsToAttrs: (m) => ({
                  noborder: !!m.noborder,
                  equalcells: !!m.equalcells,
                }),
                AttrsToBBArgs: (m, u) => {
                  const h = {};
                  m.noborder && (h.noborder = "1"),
                    m.equalcells && (h.equalcells = "1");
                  const y = u.child(0);
                  if (y) {
                    let j = [];
                    for (let V = 0; V < y.childCount; V++) {
                      const M = y.child(V).attrs;
                      M.colwidth ? j.push(...M.colwidth) : j.push(void 0);
                    }
                    h.colwidth = j.join(",");
                  }
                  return { args: h };
                },
              },
            },
            table_row: {
              ...ke.table_row,
              toDOM: oe("tr", F().TableRow),
              bbCode: { tag: "tr" },
            },
            table_cell: { ...ke.table_cell, bbCode: { ...Ze, tag: "td" } },
            table_header: { ...ke.table_header, bbCode: { ...Ze, tag: "th" } },
          },
          _t = v.memo(function (u) {
            const { schema: h } = u,
              y = !!("table" in h.nodes && h.nodes.table.spec.tableRole);
            return (
              (0, N.c$)(
                v.useMemo(() => (y ? ie.AL({ View: nt }) : void 0), [y]),
              ),
              (0, N.c$)(v.useMemo(() => (y ? ie.LF() : void 0), [y])),
              null
            );
          });
        class nt extends ie.Qg {
          constructor(u, h) {
            super(u, h), this.SetTableClass(u);
          }
          update(u) {
            return super.update(u) ? (this.SetTableClass(u), !0) : !1;
          }
          SetTableClass(u) {
            this.table.className = (0, le.A)(
              F().Table,
              u.attrs[Be.NoBorder] && F().NoBorder,
              u.attrs[Be.EqualCells] && F().EqualCells,
            );
          }
        }
        var Ke = i(18210),
          Qe = i(54963),
          tt = i(73309);
        const rt = (0, xe.Nr)(function (u) {
          const {
              pmState: h,
              className: y,
              refOnUpdate: j,
              refView: V,
              bSpellcheckEnabled: M = !0,
              bSingleLine: J,
              panelProps: te,
              children: q,
            } = u,
            [ge, je] = v.useState(),
            [de, Ce] = v.useState();
          v.useEffect(() => {
            !h || !ge || Ce(new ce.Lz(ge, { state: h.state }));
          }, [h, ge]),
            v.useEffect(() => () => de?.destroy(), [de]),
            (0, Qe.D5)(V, de);
          const { refDiv: Le, onActivate: ut, onGamepadDirection: gt } = qe(de),
            xt = (0, Qe.Ue)(Le, je);
          if (!h) return null;
          const { schemaConfig: wt, bbcodeParser: dt } = h;
          return (0, e.jsxs)(N.Ot, {
            view: de,
            pmState: h,
            children: [
              (0, e.jsx)(
                P.Z,
                {
                  className: (0, le.A)({
                    ["" + y]: !!y,
                    [tt.Container]: !0,
                    [tt.SingleLine]: !!J,
                  }),
                  ref: xt,
                  spellCheck: M,
                  focusable: !0,
                  onActivate: ut,
                  onOKActionDescription: (0, Ke.we)("#UserGameNotes_Edit"),
                  onGamepadDirection: gt,
                  ...te,
                },
                `editordiv_${M}`,
              ),
              (0, e.jsx)(N.KF, {
                refOnUpdate: j,
                schema: wt.pm_schema,
                bSingleLine: J,
              }),
              (0, e.jsx)(kt, { parser: dt, schema: wt.pm_schema }),
              (0, e.jsx)(_t, { schema: wt.pm_schema }),
              q,
            ],
          });
        });
        function qe(m) {
          const u = v.useRef(null),
            h = (0, X.FN)(),
            y = v.useCallback(() => {
              if ((h.ShowVirtualKeyboard(), !m)) return;
              if (!m.hasFocus()) {
                m.focus();
                let J = m.dom.childNodes,
                  te = u.current?.scrollTop ?? 0;
                for (let q = 0; q < J.length; ++q) {
                  let ge = J[q],
                    je = ge.offsetTop;
                  if (je !== void 0 && je >= te) {
                    let de = ge.getBoundingClientRect();
                    (0, De.bQ)(m, de.left, de.top);
                    break;
                  }
                }
              }
            }, [h, m]),
            j = v.useCallback((M) => M.currentTarget == M.target, []),
            V = (0, H.ak)(u, void 0, void 0, j);
          return { refDiv: u, onActivate: y, onGamepadDirection: V };
        }
        const kt = v.memo(function (u) {
          const { parser: h, schema: y } = u;
          return (
            (0, N.c$)(
              v.useMemo(
                () =>
                  new O.k_({
                    props: {
                      transformPasted: (j, V) => mt(h, y.nodes.hard_break, j),
                    },
                  }),
                [h, y],
              ),
            ),
            null
          );
        });
        function mt(m, u, h) {
          let y = !1;
          if (
            (h.content.forEach((V) => {
              V.type == u && (y = !0);
            }),
            !y)
          )
            return h;
          const j = m.ConvertLineBreaksToParagraphs(h.content);
          return D.Ji.maxOpen(j);
        }
        var Je = i(249),
          Gt = i(58534),
          Rt = i(2801),
          Ft = i(88003);
        function Qt(m) {
          const {
              closeModal: u,
              strTitle: h,
              onOK: y,
              strOKText: j,
              onCancel: V,
              strCancelText: M,
              bOKDisabled: J,
              bCancelDisabled: te,
              strClassNameContent: q = "GenericFormDialog",
              children: ge,
            } = m,
            je = v.useCallback(() => {
              V && V(), u();
            }, [V, u]),
            de = te ? () => {} : je;
          return (0, e.jsx)(Ft.x_, {
            onEscKeypress: de,
            children: (0, e.jsxs)(Gt.U9, {
              onSubmit: y,
              classNameContent: q,
              children: [
                (0, e.jsx)(Gt.Y9, { children: h }),
                ge,
                (0, e.jsx)(Gt.wi, {
                  children: (0, e.jsx)(Gt.CB, {
                    strOKText: j,
                    bOKDisabled: J,
                    onCancel: de,
                    strCancelText: M,
                    bCancelDisabled: te,
                  }),
                }),
              ],
            }),
          });
        }
        function ft(m, u) {
          const [h, y] = React.useState(void 0),
            j = React.useCallback(
              (te) => {
                const q = te.state.selection;
                let ge = "",
                  je = "",
                  { from: de, to: Ce } = q;
                const Le = FindMarkAtPosition(te.state, m.marks.link, q.$from),
                  ut = !!Le;
                Le
                  ? ((je = Le.mark.attrs.href),
                    q.empty
                      ? ((ge = Le.slice.content.textBetween(
                          0,
                          Le.slice.content.size,
                        )),
                        (de = Le.from),
                        (Ce = Le.to))
                      : ((de = Math.max(Le.from, q.from)),
                        (Ce = Math.min(Le.to, q.to)),
                        (ge = Le.slice.content.textBetween(
                          de - Le.from,
                          Ce - Le.from,
                        ))))
                  : te.state.selection.empty ||
                    ((ge = te.state.doc.cut(
                      te.state.selection.from,
                      te.state.selection.to,
                    ).textContent),
                    ge.match(/^https?:\/\//) && (je = ge));
                let gt = {};
                if (u)
                  for (const xt in u) {
                    const wt = u[xt],
                      dt = Le ? wt.fnReadValue(Le.mark) : wt.defaultValue;
                    gt[xt] = dt;
                  }
                y({
                  view: te,
                  strLinkText: ge,
                  strLinkHref: je,
                  bIsUpdate: ut,
                  addtlAttrs: u,
                  addtlAttrsValues: gt,
                  from: de,
                  to: Ce,
                });
              },
              [m.marks.link, u],
            ),
            V = h?.view,
            M = React.useCallback(() => {
              window.setTimeout(() => V.focus(), 1), y(void 0);
            }, [V]),
            J =
              h &&
              jsx(SimpleModal, {
                active: !0,
                children: jsx(fs, { schema: m, closeModal: M, ...h }),
              });
          return [j, J];
        }
        const fs = v.memo(function (u) {
          const {
              schema: h,
              strLinkText: y,
              strLinkHref: j,
              bIsUpdate: V,
              addtlAttrs: M,
              addtlAttrsValues: J,
              closeModal: te,
              view: q,
              from: ge,
              to: je,
            } = u,
            [de, Ce] = v.useState(y),
            [Le, ut] = v.useState(j),
            gt = v.useRef(null),
            xt = v.useRef(null),
            [wt, dt] = v.useState(J),
            Ut = () => {
              let Lt = q.state.tr;
              const ds = { href: Le };
              for (const Ss in wt) ds[Ss] = wt[Ss];
              const cn = h.marks.link?.create(ds),
                ms = h.text(de || Le, [cn]);
              try {
                (Lt = Lt.replaceRangeWith(ge, je, ms)),
                  (Lt = Lt.setSelection(
                    O.U3.create(Lt.doc, ge + ms.nodeSize, ge + ms.nodeSize),
                  )),
                  q.dispatch(Lt);
              } catch (Ss) {
                console.error("Error during link insertion", Ss);
              }
              te();
            };
          v.useLayoutEffect(() => {
            gt.current?.value?.length
              ? xt.current?.value?.length
                ? (gt.current.Focus(), gt.current.element.select())
                : xt.current.Focus()
              : gt.current?.Focus();
          }, []);
          const Ot = V
              ? (0, Ke.we)("#FormattingToolbar_EditLink")
              : (0, Ke.we)("#FormattingToolbar_InsertLink"),
            zt = V
              ? (0, Ke.we)("#Button_Save")
              : (0, Ke.we)("#FormattingToolbar_InsertLink");
          return (0, e.jsxs)(Qt, {
            onOK: Ut,
            closeModal: te,
            strTitle: Ot,
            strOKText: zt,
            bOKDisabled: Le.length == 0,
            children: [
              (0, e.jsx)(Gt.pd, {
                ref: gt,
                value: de,
                onChange: (Lt) => Ce(Lt.currentTarget.value),
                label: (0, Ke.we)("#FormattingToolbar_LinkText"),
              }),
              (0, e.jsx)(Gt.pd, {
                ref: xt,
                value: Le,
                placeholder: "https://",
                onChange: (Lt) => ut(Lt.currentTarget.value),
                label: (0, Ke.we)("#FormattingToolbar_LinkAddress"),
                mustBeURL: !0,
              }),
              M && (0, e.jsx)(it, { addtlAttrs: M, values: wt, setValues: dt }),
            ],
          });
        });
        function it(m) {
          const { addtlAttrs: u, values: h, setValues: y } = m;
          return (0, e.jsx)(e.Fragment, {
            children: Object.keys(u).map((j) =>
              (0, e.jsx)(
                Tt,
                {
                  attrName: j,
                  fnRender: u[j].fnRenderEditor,
                  value: h[j],
                  setValues: y,
                },
                j,
              ),
            ),
          });
        }
        const Tt = v.memo(function (u) {
          const { attrName: h, fnRender: y, value: j, setValues: V } = u,
            M = v.useCallback((J) => V((te) => ({ ...te, [h]: J })), [h, V]);
          return y(j, M);
        });
        var Ye = i(50660);
        function Vt(m) {
          const { schema: u, addtlAttrs: h, children: y } = m,
            { callbacks: j, view: V } = useToolbarContext(),
            [M, J] = React.useState(() => IsMarkActive(V.state, u.marks.link)),
            te = React.useCallback(
              (je) => J(IsMarkActive(je.state, u.marks.link)),
              [u],
            );
          useCallbackList(j, te);
          const [q, ge] = useInsertLinkModal(u, h);
          return jsxs(Fragment, {
            children: [
              ge,
              jsx(ToggleButton, {
                onClick: () => q(V),
                toggled: M,
                tooltip: "#FormattingToolbar_InsertLink",
                keyboardShortcut: "Mod-k",
                children: y,
              }),
            ],
          });
        }
        var Ps = i(98609),
          ss = i(47604),
          Ms = i(28922),
          rn = i(61024);
        function Ht(m, u, h) {
          const [y, j] = v.useState(void 0),
            V = v.useRef(null),
            M = v.useCallback(
              (q) => {
                V.current = q;
                const { state: ge } = q,
                  je = ge.selection;
                let { from: de, to: Ce, empty: Le } = je;
                const ut = u ? m.marks.color : m.marks.bgcolor;
                let gt = "",
                  xt = "";
                const wt = Le ? je.$from : ge.doc.resolve(de),
                  dt = (0, De.vn)(ge, ut, wt),
                  Ut = !!dt;
                Ut
                  ? ((gt = dt.mark.attrs.color),
                    Le
                      ? ((xt = dt.slice.content.textBetween(
                          0,
                          dt.slice.content.size,
                        )),
                        (de = dt.from),
                        (Ce = dt.to))
                      : ((de = Math.max(dt.from, de)),
                        (Ce = Math.min(dt.to, Ce)),
                        (xt = dt.slice.content.textBetween(
                          de - dt.from,
                          Ce - dt.from,
                        ))))
                  : Le || (xt = ge.doc.cut(de, Ce).textContent);
                let Ot = {};
                if (h)
                  for (const zt in h) {
                    const Lt = h[zt],
                      ds = dt ? Lt.fnReadValue(dt.mark) : Lt.defaultValue;
                    Ot[zt] = ds;
                  }
                j({
                  viewRef: V,
                  strColor: gt,
                  strTargetText: xt,
                  bIsUpdate: Ut,
                  addtlAttrs: h,
                  addtlAttrsValues: Ot,
                  from: de,
                  to: Ce,
                });
              },
              [h, u, m.marks.bgcolor, m.marks.color],
            ),
            J = v.useCallback(() => {
              const q = V.current;
              window.setTimeout(() => {
                q && !q.isDestroyed && q.focus();
              }, 1),
                j(void 0);
            }, []),
            te =
              y &&
              (0, e.jsx)(Rt.EN, {
                active: !0,
                children: (0, e.jsx)(an, {
                  schema: m,
                  bColor: u,
                  closeModal: J,
                  ...y,
                }),
              });
          return [M, te];
        }
        function Cn(m) {
          if (m.startsWith("rgb")) {
            const u = m.match(/\d+/g);
            if (!u || u.length < 3) return "#000000";
            const [h, y, j] = u.map(Number);
            return (
              "#" +
              [h, y, j]
                .map((V) => {
                  const M = V.toString(16);
                  return M.length === 1 ? "0" + M : M;
                })
                .join("")
            );
          }
          return m;
        }
        function zs(m) {
          const u = m.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
          );
          if (u) {
            let [, h, y, j, V] = u;
            const M = parseInt(h, 10),
              J = parseInt(y, 10),
              te = parseInt(j, 10);
            return `#${((1 << 24) + (M << 16) + (J << 8) + te).toString(16).slice(1)}`;
          }
          return "#7e3232";
        }
        const an = v.memo(function (u) {
          const {
              schema: h,
              strColor: y,
              bIsUpdate: j,
              strTargetText: V,
              bColor: M,
              addtlAttrs: J,
              addtlAttrsValues: te,
              closeModal: q,
              viewRef: ge,
              from: je,
              to: de,
            } = u,
            [Ce, Le] = v.useState(y),
            ut = v.useRef(null),
            [gt, xt] = v.useState(te),
            wt = v.useCallback(() => {
              try {
                const Ot = ge.current;
                if (!Ot || Ot.isDestroyed) {
                  console.warn(
                    "Editor view is destroyed; skipping color insert",
                  );
                  return;
                }
                const { state: zt, dispatch: Lt } = Ot,
                  ds = M ? h.marks.color : h.marks.bgcolor;
                if (!ds) {
                  console.log("debug: no markType");
                  return;
                }
                if (!Ce || !/^#[0-9a-fA-F]{6}$/.test(Ce)) {
                  console.log("debug: invalid color text: " + Ce);
                  return;
                }
                const cn = Math.max(0, Math.min(je, zt.doc.content.size)),
                  ms = Math.max(0, Math.min(de, zt.doc.content.size));
                if (cn > ms) {
                  console.error("Invalid selection range:", je, de);
                  return;
                }
                const Ss = ds.create({ color: Ce, ...gt });
                let rs = zt.tr;
                je === de
                  ? (rs = rs.addStoredMark(Ss))
                  : ((rs = rs.removeMark(je, de, ds)),
                    (rs = rs.addMark(je, de, Ss)),
                    (rs = rs.setSelection(O.U3.create(rs.doc, de)))),
                  Lt(rs.scrollIntoView());
              } catch (Ot) {
                console.error(Ot);
              } finally {
                requestAnimationFrame(() => q());
              }
            }, [gt, M, q, Ce, je, h.marks.bgcolor, h.marks.color, de, ge]);
          v.useLayoutEffect(() => {
            ut.current?.value?.length
              ? ut.current.focus()
              : ut.current?.focus();
          }, []);
          const dt = (0, Ke.we)(
              M ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
            ),
            Ut = j
              ? (0, Ke.we)("#Button_Save")
              : (0, Ke.we)(
                  M ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
                );
          return (0, e.jsxs)(ss.s, {
            onClose: q,
            strTitle: dt,
            children: [
              (0, e.jsx)(Ms.s, {
                color: Ce,
                disableAlpha: !0,
                onChange: (Ot) => Le(zs(Ot)),
              }),
              (0, e.jsx)(rn.M, {
                strOKLabel: Ut,
                strCancelLabel: (0, Ke.we)("#Button_Cancel"),
                onOK: () => {
                  Ce && Ce.length > 0 && wt();
                },
                onClose: q,
              }),
            ],
          });
        });
        function It(m) {
          const { schema: u, bColor: h, addtlAttrs: y, children: j } = m,
            { callbacks: V, view: M } = (0, Ye.wU)(),
            [J, te] = v.useState(() =>
              (0, De.Cd)(M.state, h ? u.marks.color : u.marks.bgcolor),
            ),
            q = v.useCallback(
              (de) =>
                te((0, De.Cd)(de.state, h ? u.marks.color : u.marks.bgcolor)),
              [h, u],
            );
          (0, Qe.hL)(V, q);
          const [ge, je] = Ht(u, h, y);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              je,
              (0, e.jsx)(Ye.ff, {
                onClick: () => ge(M),
                toggled: J,
                tooltip: h
                  ? "#FormattingToolbar_Color"
                  : "#FormattingToolbar_BgColor",
                children: j,
              }),
            ],
          });
        }
        function ns() {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ye.cQ, {
                tooltip: "#FormattingToolbar_Undo",
                keyboardShortcut: "Mod-z",
                command: fe.tN,
                children: (0, e.jsx)(Je.VnB, {}),
              }),
              (0, e.jsx)(Ye.cQ, {
                tooltip: "#FormattingToolbar_Redo",
                keyboardShortcut:
                  Ps.TS.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
                command: fe.ZS,
                children: (0, e.jsx)(Je.Bal, {}),
              }),
            ],
          });
        }
        function xs(m) {
          const { schema: u } = m;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ye.GY, {
                tooltip: "#FormattingToolbar_Bold",
                keyboardShortcut: "Mod-b",
                mark: u.marks.strong,
                children: (0, e.jsx)(Je.l4n, {}),
              }),
              (0, e.jsx)(Ye.GY, {
                tooltip: "#FormattingToolbar_Italic",
                keyboardShortcut: "Mod-i",
                mark: u.marks.italic,
                children: (0, e.jsx)(Je.UKJ, {}),
              }),
              (0, e.jsx)(Ye.GY, {
                tooltip: "#FormattingToolbar_Underline",
                keyboardShortcut: "Mod-u",
                mark: u.marks.underline,
                children: (0, e.jsx)(Je.Gj3, {}),
              }),
              "strike" in u.marks &&
                (0, e.jsx)(Ye.GY, {
                  tooltip: "#FormattingToolbar_Strike",
                  keyboardShortcut: "Mod-Shift-x",
                  mark: u.marks.strike,
                  children: (0, e.jsx)(Je.tI4, {}),
                }),
              "code" in u.marks &&
                (0, e.jsx)(Ye.GY, {
                  tooltip: "#FormattingToolbar_InlineCode",
                  keyboardShortcut: "Ctrl-Shift-c",
                  mark: u.marks.code,
                  children: (0, e.jsx)(Je.bmT, {}),
                }),
              "color" in u.marks &&
                (0, e.jsx)(It, {
                  schema: u,
                  bColor: !0,
                  children: (0, e.jsx)(Je.r7n, {}),
                }),
              "bgcolor" in u.marks &&
                (0, e.jsx)(It, {
                  schema: u,
                  bColor: !1,
                  children: (0, e.jsx)(Je.FId, {}),
                }),
            ],
          });
        }
        function on(m) {
          const { schema: u } = m;
          return (0, e.jsx)(Ye.u3, {
            tooltip: "#FormattingToolbar_Paragraph",
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: u.nodes.paragraph,
            children: (0, e.jsx)(Je.iYj, {}),
          });
        }
        function ks(m) {
          const { nodeTypes: u, attrs: h, children: y, ...j } = m,
            { callbacks: V, view: M } = (0, Ye.wU)(),
            [J, te] = v.useState(() => (0, De.Ce)(M.state, u, h)),
            q = v.useCallback((de) => te((0, De.Ce)(de.state, u, h)), [u, h]);
          (0, Qe.hL)(V, q);
          const ge = v.useMemo(() => (0, De.c4)(u, h ?? {}), [u, h]),
            je = !!J;
          return (0, e.jsx)(Ye.cQ, {
            ...j,
            command: ge,
            toggled: je,
            children: y,
          });
        }
        function Ws(m) {
          const { schema: u } = m;
          let h = u.nodes.paragraph,
            y = u.nodes.heading;
          const j = v.useMemo(() => [h, y], [h, y]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ks, {
                tooltip: "#FormattingToolbar_AlignLeft",
                keyboardShortcut: "Ctrl-Shift-L",
                nodeTypes: j,
                attrs: { align: "left" },
                children: (0, e.jsx)(Je.K6w, {}),
              }),
              (0, e.jsx)(ks, {
                tooltip: "#FormattingToolbar_AlignCenter",
                keyboardShortcut: "Ctrl-Shift-E",
                nodeTypes: j,
                attrs: { align: "center" },
                children: (0, e.jsx)(Je.q8c, {}),
              }),
              (0, e.jsx)(ks, {
                tooltip: "#FormattingToolbar_AlignRight",
                keyboardShortcut: "Ctrl-Shift-R",
                nodeTypes: j,
                attrs: { align: "right" },
                children: (0, e.jsx)(Je.dWO, {}),
              }),
            ],
          });
        }
        function Ls(m) {
          const { schema: u, maxLevel: h = 1, levels: y } = m,
            j = h + y - 1;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              h <= 1 &&
                (0, e.jsx)(Ye.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel1",
                  keyboardShortcut: "Ctrl-Shift-1",
                  nodeType: u.nodes.heading,
                  attrs: { level: 1 },
                  children: (0, e.jsx)(Je.jRw, {}),
                }),
              h <= 2 &&
                j >= 2 &&
                (0, e.jsx)(Ye.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel2",
                  keyboardShortcut: "Ctrl-Shift-2",
                  nodeType: u.nodes.heading,
                  attrs: { level: 2 },
                  children: (0, e.jsx)(Je.qOW, {}),
                }),
              h <= 3 &&
                j >= 3 &&
                (0, e.jsx)(Ye.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel3",
                  keyboardShortcut: "Ctrl-Shift-3",
                  nodeType: u.nodes.heading,
                  attrs: { level: 3 },
                  children: (0, e.jsx)(Je.x7X, {}),
                }),
              h <= 4 &&
                j >= 4 &&
                (0, e.jsx)(Ye.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel4",
                  keyboardShortcut: "Ctrl-Shift-4",
                  nodeType: u.nodes.heading,
                  attrs: { level: 4 },
                  children: (0, e.jsx)(Je.qzO, {}),
                }),
              h <= 5 &&
                j >= 5 &&
                (0, e.jsx)(Ye.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel5",
                  keyboardShortcut: "Ctrl-Shift-5",
                  nodeType: u.nodes.heading,
                  attrs: { level: 5 },
                  children: (0, e.jsx)(Je.jXA, {}),
                }),
            ],
          });
        }
        function Wn(m) {
          const { schema: u, showIndentButtonsAsNeeded: h = !1 } = m,
            { callbacks: y, view: j } = (0, Ye.wU)(),
            { bullet_list: V, ordered_list: M, list_item: J } = u.nodes,
            te = v.useMemo(() => _e.T2(J), [J]),
            q = v.useMemo(() => _e.$B(J), [J]),
            [ge, je] = v.useState(() => te(j.state) || q(j.state));
          return (
            (0, Qe.hL)(
              y,
              v.useCallback(
                (de) => {
                  je(te(de.state) || q(de.state));
                },
                [te, q],
              ),
            ),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(ln, {
                  tooltip: "#FormattingToolbar_BulletedList",
                  keyboardShortcut: "Ctrl-Shift-8",
                  list_type: V,
                  list_item: J,
                  children: (0, e.jsx)(Je.JPq, {}),
                }),
                M &&
                  (0, e.jsx)(ln, {
                    tooltip: "#FormattingToolbar_OrderedList",
                    keyboardShortcut: "Ctrl-Shift-7",
                    list_type: M,
                    list_item: J,
                    children: (0, e.jsx)(Je.jE0, {}),
                  }),
                (!h || ge) &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(Ye.cQ, {
                        tooltip: "#FormattingToolbar_OutdentList",
                        keyboardShortcut: "Mod-[",
                        command: te,
                        children: (0, e.jsx)(Je.LSz, {}),
                      }),
                      (0, e.jsx)(Ye.cQ, {
                        tooltip: "#FormattingToolbar_IndentList",
                        keyboardShortcut: "Mod-[",
                        command: q,
                        children: (0, e.jsx)(Je.ycU, {}),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function ln(m) {
          const { list_type: u, list_item: h, children: y, ...j } = m,
            { callbacks: V, view: M } = (0, Ye.wU)(),
            J = v.useCallback((de) => (0, De.wt)(de.state, u) !== void 0, [u]),
            [te, q] = v.useState(() => J(M)),
            ge = v.useMemo(() => _e.Sd(u), [u]),
            je = v.useMemo(() => _e.T2(h), [h]);
          return (
            (0, Qe.hL)(
              V,
              v.useCallback(
                (de) => {
                  q(J(de));
                },
                [J],
              ),
            ),
            (0, e.jsx)(Ye.cQ, {
              ...j,
              toggled: te,
              command: te ? je : ge,
              children: y,
            })
          );
        }
        function jr(m) {
          const { schema: u, addtlAttrs: h } = m;
          return jsx(LinkMarkButton, {
            schema: u,
            addtlAttrs: h,
            children: jsx(GamepadUISVG.TextLink, {}),
          });
        }
        function bn(m) {
          const { bSpellcheckEnabled: u, setSpellcheckEnabled: h } = m;
          return jsx(ToggleButton, {
            tooltip: u
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: u,
            onClick: () => h(!u),
            children: jsx(GamepadUISVG.SpellCheck, {}),
          });
        }
        class Kt {
          m_ProseMirrorSchema;
          m_mapBBCodeDictionary = new Map();
          m_PMToBBCodeConfig = { mapNodes: new Map(), mapMarks: new Map() };
          get pm_schema() {
            return this.m_ProseMirrorSchema;
          }
          get bbcode_dictionary() {
            return this.m_mapBBCodeDictionary;
          }
          get pm_to_bbcode_config() {
            return this.m_PMToBBCodeConfig;
          }
          ConvertAttrToBBCodeArgs(u, h) {
            const y = this.m_PMToBBCodeConfig.mapNodes.get(u.type);
            return y && y.AttrsToBBArgs ? y.AttrsToBBArgs(h, u).args || {} : {};
          }
          constructor(u, h) {
            const y = {
                doc: { content: "block+" },
                text: { group: "inline" },
                hard_break: {
                  inline: !0,
                  group: "inline",
                  selectable: !1,
                  linebreakReplacement: !0,
                  parseDOM: [{ tag: "br" }],
                  toDOM() {
                    return ["br"];
                  },
                },
              },
              j = new Map(),
              V = new Map(),
              M = h ? new Set(h) : void 0;
            for (const te in u.nodes) {
              const { bbCode: q, ...ge } = u.nodes[te],
                je = ps(q, M);
              je && ((y[te] = ge), j.set(te, je));
            }
            const J = {};
            for (const te in u.marks) {
              const { bbCode: q, ...ge } = u.marks[te];
              (!M || M.has(q.tag)) && ((J[te] = ge), V.set(te, q));
            }
            (this.m_ProseMirrorSchema = new D.Sj({ nodes: y, marks: J })),
              j.forEach((te, q) => {
                const ge = this.m_ProseMirrorSchema.nodes[q],
                  je = u.nodes[q],
                  de = Array.isArray(te) ? te : [te];
                let Ce;
                je.content == "list_item+"
                  ? (Ce = this.m_ProseMirrorSchema.nodes.list_item)
                  : je.content?.indexOf("paragraph") != -1 &&
                    (Ce = this.m_ProseMirrorSchema.nodes.paragraph),
                  de.forEach(
                    ({
                      tag: wt,
                      BBArgsToAttrs: dt,
                      AttrsToBBArgs: Ut,
                      convertContentToAttr: Ot,
                      bVerbatimArgs: zt,
                      bVerbatimContent: Lt,
                      ...ds
                    }) => {
                      this.m_mapBBCodeDictionary.set(wt, {
                        Constructor: {
                          node: ge,
                          BBArgsToAttrs: dt,
                          convertContentToAttr: Ot,
                          acceptNode: Ce,
                        },
                        skipFollowingNewline: !0,
                        ...ds,
                      });
                    },
                  );
                const {
                  tag: Le,
                  AttrsToBBArgs: ut,
                  bVerbatimArgs: gt,
                  bVerbatimContent: xt,
                } = de[0];
                this.m_PMToBBCodeConfig.mapNodes.set(ge, {
                  tag: Le,
                  AttrsToBBArgs: ut,
                  bVerbatimArgs: gt,
                  bVerbatimContent: xt,
                });
              }),
              V.forEach((te, q) => {
                const ge = this.m_ProseMirrorSchema.marks[q],
                  { tag: je, BBArgsToAttrs: de, AttrsToBBArgs: Ce, ...Le } = te;
                this.m_mapBBCodeDictionary.set(je, {
                  Constructor: { mark: ge, BBArgsToAttrs: de },
                  ...Le,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(ge, {
                    tag: je,
                    AttrsToBBArgs: Ce,
                  });
              });
          }
        }
        function ps(m, u) {
          if (u)
            if (Array.isArray(m)) {
              const h = m.filter((y) => u.has(y.tag));
              return h.length > 0 ? h : void 0;
            } else return u.has(m.tag) ? m : void 0;
          else return m;
        }
        const {
            paragraph: Gn,
            heading: $t,
            bullet_list: Yt,
            list_item: Vn,
            image: An,
          } = Ae.nodes,
          {
            strong: vn,
            italic: Kn,
            underline: $n,
            link: yn,
            strike: Yn,
          } = Ae.marks;
        function Xn(m) {
          return new Kt({
            nodes: {
              paragraph: Gn,
              heading: {
                ...$t,
                attrs: { level: { default: 2 }, align: { default: "left" } },
                parseDOM: [1, 2, 3, 4, 5, 6]
                  .map((u) => ({
                    tag: `h${u}`,
                    getAttrs(h) {
                      return { level: 2, align: h.style.textAlign || "left" };
                    },
                  }))
                  .concat(
                    [1, 2, 3, 4, 5, 6].map((u) => ({
                      tag: `span[data-ccp-parastyle="heading ${u}"]`,
                      getAttrs(h) {
                        return { level: 2, align: h.style.textAlign || "left" };
                      },
                    })),
                  ),
                bbCode: [2].map(We),
              },
              bullet_list: Yt,
              list_item: Vn,
              image: { ...An, toDOM: (u) => ["img", { src: m(u.attrs.src) }] },
              table: {
                content: "tr+",
                group: "block",
                toDOM: he("table", "div"),
                bbCode: { tag: "table" },
              },
              tr: {
                content: "(th | td)+",
                toDOM: he("tr", "div"),
                bbCode: { tag: "tr" },
              },
              th: {
                content: "paragraph block*",
                toDOM: he("th", "span"),
                bbCode: { tag: "th" },
              },
              td: {
                content: "paragraph block*",
                toDOM: he("td", "span"),
                bbCode: { tag: "td" },
              },
            },
            marks: {
              strong: vn,
              italic: Kn,
              underline: $n,
              strike: Yn,
              link: {
                ...yn,
                toDOM: (u, h) => [
                  "a",
                  {
                    ...yn.toDOM(u, h)[1],
                    title: (0, Ke.we)(
                      "#StoreAdmin_GameDescription_LinksDisabled",
                    ),
                  },
                  0,
                ],
                parseDOM: void 0,
              },
            },
          });
        }
        var Qn = i(8323),
          Jn = i(40365),
          st = i(80968),
          Bs = i(99412);
        const Ns = new Qn.lu(),
          Pr = { parser: { bConvertNewlinesToBR: !0 } };
        function Zn(m) {
          const {
              language: u,
              languages: h,
              rctToolbarControls: y,
              mapValues: j,
              editorType: V,
              rctAboveEditor: M,
            } = m,
            J = j.get(u),
            [te, q] = v.useState(),
            ge = v.useRef(void 0),
            je = nr((0, Bs.sfN)(u)),
            [de] = v.useState(() => new Map()),
            Ce = v.useCallback(
              (Ut) => {
                de.has(Ut) ||
                  de.set(Ut, new E(je, Ut.Value, (Ot) => Ut.Set(Ot), Pr));
              },
              [je, de],
            ),
            [Le, ut] = v.useState();
          v.useEffect(() => {
            Ce(J), ut(de.get(J));
          }, [je, de, Ce, J]);
          const gt = (0, a.gc)(J);
          v.useEffect(() => {
            de.get(J).ReplaceDocument(gt);
          }, [J, gt, de]),
            z(Le, { msAutosaveTimeout: 5e3 }),
            v.useEffect(() => {
              window.DisableTooltipMutationObserver &&
                window.DisableTooltipMutationObserver(),
                (window.PHPReactPreSubmitCallbacks = Ns);
            }, []),
            (0, a.hL)(Ns, () => Le?.CommitChanges()),
            v.useEffect(() => {
              ge.current && ge.current();
            }, [te, J]);
          const xt = (0, Bs.sfN)(u),
            wt = V != "awards",
            dt = v.useCallback((Ut) => qn(Le, j, Ce, Ut), [Ce, j, Le]);
          return (0, e.jsx)(er, {
            imageNodeType: je.pm_schema.nodes.image,
            activeLanguage: xt,
            languages: h,
            children: (0, e.jsx)(sr, {
              editorType: V,
              view: te,
              refUpdateToolbar: ge,
              rctToolbarControls: y,
              schema: je.pm_schema,
              rctAboveEditor: M,
              children: (0, e.jsx)(rt, {
                panelProps: {
                  lang: (0, Ke.d$)(u),
                  onBlur: () => Le?.CommitChanges(),
                },
                className: st.EditorPanel,
                pmState: Le,
                refOnUpdate: ge,
                refView: q,
                children: (0, e.jsx)(or, {
                  schema: je,
                  activeLanguage: xt,
                  mapValues: j,
                  allowAnimations: wt,
                  updateDocument: dt,
                }),
              }),
            }),
          });
        }
        function qn(m, u, h, y) {
          m?.CommitChanges();
          for (const [j, V] of y) {
            const M = u.get(j);
            M && M.Value != V && (h(M), M.Set(V));
          }
        }
        function er(m) {
          const {
              imageNodeType: u,
              activeLanguage: h,
              languages: y,
              children: j,
            } = m,
            V = (0, b.cz)(),
            M = v.useCallback(
              (te) => {
                let q,
                  ge = new Promise((de, Ce) => {
                    q = {
                      file: te,
                      onComplete: (Le) => {
                        de(u.createChecked({ src: Le }));
                      },
                      onCancel: () => de(void 0),
                      activeLanguage: h,
                      languages: y,
                    };
                  });
                const je = V(q);
                return ge.finally(() => je()), ge;
              },
              [u, V, h, y],
            ),
            J = v.useCallback(async (te) => {
              const q = new URL(
                `${Ps.TS.PARTNER_BASE_URL}gfxproxy/externalgfx/`,
              );
              return (
                q.searchParams.append("url", te),
                await (await fetch(q, { method: "GET" })).blob()
              );
            }, []);
          return (0, e.jsx)(A.Xv, {
            ProcessFileUpload: M,
            FetchImageURL: J,
            children: (0, e.jsxs)("div", { children: ["	", j] }),
          });
        }
        var tr = ((m) => (
          (m[(m.k_PreviewDesktop = 1)] = "k_PreviewDesktop"),
          (m[(m.k_PreviewMobile = 2)] = "k_PreviewMobile"),
          (m[(m.k_PreviewGamepad = 3)] = "k_PreviewGamepad"),
          m
        ))(tr || {});
        function sr(m) {
          const {
              editorType: u,
              view: h,
              refUpdateToolbar: y,
              rctToolbarControls: j,
              schema: V,
              children: M,
              rctAboveEditor: J,
            } = m,
            [te, q] = v.useState(!1),
            [ge, je] = v.useState(1),
            de = v.useCallback(
              (ut) =>
                ut.borderBoxSize.length > 0 &&
                q(ut.borderBoxSize[0].blockSize > 300),
              [],
            ),
            Ce = (0, Jn.wY)(de),
            Le = u === "awards" && ge === 3;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(rr, {
                view: h,
                refUpdateToolbar: y,
                sticky: te,
                rctToolbarControls: j,
                schema: V,
                ePreviewMode: ge,
                setPreviewMode: je,
              }),
              (0, e.jsxs)("div", {
                className: (0, le.A)({
                  [st.AboutTheGameArea]: !0,
                  [st.PreviewDesktop]: ge === 1,
                  [st.PreviewMobile]: ge === 2,
                  [st.PreviewGamepad]: ge === 3,
                  [st.Awards]: u === "awards",
                }),
                ref: Ce,
                children: [
                  J,
                  Le &&
                    (0, e.jsx)("div", {
                      className: st.PreviewInfo,
                      children: (0, Ke.we)(
                        "#StoreAdmin_GameDescription_Awards_Gamepad_Unsupported",
                      ),
                    }),
                  M,
                ],
              }),
            ],
          });
        }
        function Gs(m) {
          return (0, e.jsxs)("h2", {
            className: st.StoreAppPageHeader,
            children: [
              m.children,
              (0, e.jsx)("div", { className: st.GradientRule }),
            ],
          });
        }
        function nr(m) {
          const u = (0, b.FD)(),
            h = v.useRef(u);
          h.current = u;
          const y = v.useRef(m);
          y.current = m;
          const j = v.useRef(void 0);
          if (!j.current) {
            const V = (M) => {
              const J = h.current.find((q) => (0, W.q3)(q) === M);
              return (0, W.IP)(J, !0, y.current)?.url;
            };
            j.current = Xn(V);
          }
          return j.current;
        }
        function rr(m) {
          const {
            view: u,
            refUpdateToolbar: h,
            rctToolbarControls: y,
            schema: j,
            sticky: V,
            ePreviewMode: M,
            setPreviewMode: J,
          } = m;
          return (0, e.jsxs)(Ye.bI, {
            refUpdateToolbar: h,
            view: u,
            children: [
              (0, e.jsxs)(Ye.Ez, {
                className: (0, le.A)(
                  st.GameDescriptionEditorToolbar,
                  V && st.Sticky,
                ),
                children: [
                  (0, e.jsx)(ns, {}),
                  (0, e.jsx)(Ye.XQ, {}),
                  (0, e.jsx)(xs, { schema: j }),
                  (0, e.jsx)(Ye.XQ, {}),
                  (0, e.jsx)(on, { schema: j }),
                  (0, e.jsx)(Ls, { schema: j, maxLevel: 2, levels: 1 }),
                  (0, e.jsx)(Ye.XQ, {}),
                  (0, e.jsx)(Wn, { schema: j, showIndentButtonsAsNeeded: !0 }),
                  "image" in j.nodes &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(Ye.XQ, {}),
                        (0, e.jsx)(w.KZ, { nodeType: j.nodes.image }),
                      ],
                    }),
                  (0, e.jsx)(Ye.XQ, {}),
                  (0, e.jsx)(Ws, { schema: j }),
                  (0, e.jsx)(Ye.XQ, {}),
                  (0, e.jsx)(Ye.hK, {}),
                  y,
                ],
              }),
              (0, e.jsx)(ar, { ePreviewMode: M, setPreviewMode: J }),
            ],
          });
        }
        function ar(m) {
          const { ePreviewMode: u, setPreviewMode: h } = m;
          return (0, e.jsxs)("div", {
            className: st.PreviewModeCtn,
            children: [
              (0, e.jsx)("div", {
                className: st.PreviewModeTitle,
                children: (0, Ke.we)("#StoreAdmin_GameDescription_PreviewMode"),
              }),
              (0, e.jsx)("div", {
                className: (0, le.A)(st.PreviewItem, {
                  [st.SelectedPreview]: u === 1,
                }),
                onClick: () => h(1),
                children: (0, Ke.we)(
                  "#StoreAdmin_GameDescription_PreviewMode_Deskop",
                ),
              }),
              (0, e.jsx)("div", {
                className: (0, le.A)(st.PreviewItem, {
                  [st.SelectedPreview]: u === 2,
                }),
                onClick: () => h(2),
                children: (0, Ke.we)(
                  "#StoreAdmin_GameDescription_PreviewMode_Mobile",
                ),
              }),
              (0, e.jsx)("div", {
                className: (0, le.A)(st.PreviewItem, {
                  [st.SelectedPreview]: u === 3,
                }),
                onClick: () => h(3),
                children: (0, Ke.we)(
                  "#StoreAdmin_GameDescription_PreviewMode_Gamepad",
                ),
              }),
            ],
          });
        }
        function or(m) {
          const {
              schema: u,
              activeLanguage: h,
              mapValues: y,
              allowAnimations: j,
              updateDocument: V,
            } = m,
            M = v.useMemo(
              () => [
                {
                  type: u.pm_schema.nodes.image,
                  component: w.AS,
                  readProps: (J) => ({
                    src: J.attrs.src,
                    inLink: J.marks.some(
                      (te) => te.type == u.pm_schema.marks.link,
                    ),
                    activeLanguage: h,
                    mapValues: y,
                    allowAnimations: j,
                    fnUpdateDocument: V,
                  }),
                },
              ],
              [u, h, j, y, V],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(B, { specs: M }),
              (0, e.jsx)(A.pw, { nodeType: u.pm_schema.nodes.image }),
            ],
          });
        }
      },
      82363: (ee, ze, i) => {
        "use strict";
        i.d(ze, { B: () => re });
        var e = i(7850),
          p = i(90626),
          a = i(58534),
          fe = i(28410),
          O = i(69168),
          $ = i(88003),
          D = i(85599),
          R = i(36707),
          se = i(18210),
          pe = i(64868),
          Y = i(27539),
          Pe = i.n(Y),
          Se = i(99412),
          He = i(14947),
          Ve = i(17616);
        function re(S) {
          const {
              hideModal: E,
              entries: k,
              isLoading: v,
              fnRefetch: z,
              mutateAltTextAsync: K,
              isMutatePending: N,
              fnGetImage: B,
            } = S,
            { bAppHasSteamChinaToolsEnabled: Ee } = (0, fe.aJ)(),
            L = p.useMemo(() => (0, se.O9)(Ee), [Ee]),
            {
              strActiveLanguage: G,
              eActiveLang: w,
              rctLanguageSelect: W,
              mapValues: b,
            } = (0, Ve.eE)(L),
            [A, P] = p.useState(new Map()),
            [H, X] = p.useState(new Map());
          p.useEffect(() => {
            const oe = new Map(),
              Te = new Map();
            for (const he of k)
              oe.set(he.key, structuredClone(he)),
                Te.set(he.key, structuredClone(he));
            P(oe), X(Te);
          }, [k]);
          const ce = p.useCallback(() => {
            for (const oe of L.keys()) {
              const Te = Array.from(A.values()).some(
                (he) => he.mapAltText && oe in he.mapAltText,
              );
              b.get(oe).Set(Te ? "yes" : "");
            }
          }, [b, A, L]);
          p.useEffect(() => ce(), [ce]);
          const De = (0, pe.CH)(),
            xe = (oe) => A.get(oe)?.mapAltText?.[G] ?? "",
            Me = (oe, Te) => {
              let he = A.get(oe);
              he || ((he = {}), A.set(oe, he)),
                he.mapAltText || (he.mapAltText = {}),
                Te.trim().length > 0
                  ? (he.mapAltText[G] = Te)
                  : delete he.mapAltText[G],
                ce(),
                De();
            },
            F = He.sH.set(),
            ie = async () => {
              try {
                F.clear();
                for (const [oe, Te] of A.entries()) {
                  if (I(Te.mapAltText, H.get(oe).mapAltText)) continue;
                  const he = { ...Te.mapAltText };
                  for (const Ue of Object.keys(H.get(oe).mapAltText ?? {}))
                    Ue in Te.mapAltText || (he[Ue] = "");
                  (await K(oe, he)) ? H.set(oe, { ...Te }) : F.add(oe);
                }
                z?.(), F.size == 0 && E();
              } catch (oe) {
                console.error("Some mutations failed", oe);
              }
            },
            _e = N || v,
            le = () => {
              _e || E();
            },
            be = Array.from(A.values()).some((oe) => oe.caption != null);
          return (0, e.jsx)(O.E, {
            active: !0,
            children: (0, e.jsx)($.x_, {
              onEscKeypress: le,
              bDisableBackgroundDismiss: _e,
              children: (0, e.jsxs)(a.U9, {
                classNameContent: Y.AltTextDialogContent,
                children: [
                  (0, e.jsx)(a.Y9, {
                    children: (0, se.we)("#StoreAdmin_EditAltText_Title"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Y.AltTextDialogDescription,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, se.we)(
                              "#StoreAdmin_EditAltText_Desc",
                            ),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, se.we)(
                              "#StoreAdmin_EditAltText_Desc2",
                            ),
                          }),
                        ],
                      }),
                      W,
                    ],
                  }),
                  (0, e.jsxs)(a.nB, {
                    children: [
                      (0, e.jsxs)("table", {
                        className: (0, R.A)(Y.AltTextGrid),
                        children: [
                          (0, e.jsx)("thead", {
                            className: (0, R.A)(Y.AltTextHeader),
                            children: (0, e.jsxs)("tr", {
                              children: [
                                (0, e.jsx)("th", {
                                  className: (0, R.A)(Y.AltTextImage),
                                }),
                                be &&
                                  (0, e.jsx)("th", {
                                    className: (0, R.A)(Y.AltTextName),
                                    children: (0, se.we)(
                                      "#StoreAdmin_EditAltText_ColAssetName",
                                    ),
                                  }),
                                (0, e.jsx)("th", {
                                  className: (0, R.A)(Y.AltTextInput),
                                  children: (0, se.we)(
                                    "#StoreAdmin_EditAltText_ColAltText",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("tbody", {
                            children:
                              !_e &&
                              Array.from(A.values()).map((oe) =>
                                (0, e.jsx)(
                                  me,
                                  {
                                    lang: w,
                                    caption: oe.caption,
                                    image: B(oe.key, w),
                                    altText: xe(oe.key),
                                    setAltText: (Te) => Me(oe.key, Te),
                                    failedMutate: F.has(oe.key),
                                    showCaptionColumn: be,
                                  },
                                  `${oe.key}-${w}`,
                                ),
                              ),
                          }),
                        ],
                      }),
                      _e && (0, e.jsx)(D.t, {}),
                    ],
                  }),
                  (0, e.jsxs)(a.wi, {
                    children: [
                      F.size > 0 &&
                        (0, e.jsx)("div", {
                          className: Y.AltTextMutateFailed,
                          children: (0, se.we)(
                            "#StoreAdmin_EditAltText_MutateFailed",
                          ),
                        }),
                      (0, e.jsx)(a.CB, {
                        onCancel: le,
                        onOK: (oe) => {
                          oe.preventDefault(), ie();
                        },
                        bOKDisabled: _e || ae(A, H),
                        bCancelDisabled: _e,
                        strOKText: (0, se.we)("#StoreAdmin_EditAltText_Save"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function me(S) {
          const {
              lang: E,
              image: k,
              caption: v,
              altText: z,
              setAltText: K,
              failedMutate: N,
              showCaptionColumn: B,
            } = S,
            [Ee, L] = p.useState(z),
            G = Ee === "#decorative-only",
            [w, W] = p.useState(G ? "" : z),
            b = (A, P) => {
              L(A), K(A), P || W(A);
            };
          return (0, e.jsxs)("tr", {
            className: Y.AltTextRow,
            children: [
              (0, e.jsx)("td", { className: Y.AltTextImage, children: k }),
              B &&
                (0, e.jsxs)("td", {
                  className: Y.AltTextName,
                  children: [
                    v,
                    N &&
                      (0, e.jsx)("div", {
                        className: Y.AltTextFailed,
                        children: (0, se.we)(
                          "#StoreAdmin_EditAltText_EntryMutateFailed",
                        ),
                      }),
                  ],
                }),
              (0, e.jsxs)("td", {
                className: Y.AltTextInput,
                children: [
                  (0, e.jsx)(a.pd, {
                    type: "text",
                    placeholder: G
                      ? (0, se.we)(
                          "#StoreAdmin_EditAltText_PlaceholderDecorative",
                        )
                      : (0, se.we)(
                          "#StoreAdmin_EditAltText_Placeholder",
                          (0, se.we)(`#Language_${(0, Se.LgB)(E)}`),
                        ),
                    value: G ? "" : Ee,
                    onChange: (A) => b(A.target.value, !1),
                    disabled: G,
                  }),
                  (0, e.jsx)(a.Yh, {
                    checked: G,
                    onChange: (A) => b(A ? "#decorative-only" : w, !0),
                    label: (0, se.we)("#StoreAdmin_EditAltText_Presentational"),
                    tooltip: (0, se.we)(
                      "#StoreAdmin_EditAltText_Presentational_ttip",
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function I(S, E) {
          const k = S ? Object.keys(S) : [],
            v = E ? Object.keys(E) : [];
          return k.length !== v.length ? !1 : k.every((z) => S[z] === E[z]);
        }
        function ae(S, E) {
          if (S.size !== E.size) return !1;
          for (const [k, v] of S) {
            const z = E.get(k);
            if (!z || !I(v.mapAltText, z.mapAltText)) return !1;
          }
          return !0;
        }
      },
      28410: (ee, ze, i) => {
        "use strict";
        i.d(ze, {
          _M: () => w,
          aJ: () => De,
          FD: () => b,
          L4: () => A,
          Z3: () => P,
          cz: () => X,
          TQ: () => xe,
          gg: () => Me,
          Y7: () => ce,
        });
        var e = i(7850),
          p = i(32093),
          a = i(71742),
          fe = i(34604),
          O = i(90626),
          $ = i(58534),
          D = i(22633),
          R = i(1880),
          se = i(69168),
          pe = i(85599),
          Y = i(36707),
          Pe = i(18210),
          Se = i(76349),
          He = i(64868),
          Ve = i(38410),
          re = i(99412),
          me = i(48127),
          I = i(69787),
          ae = i(14295);
        function S(le) {
          const { rgUploads: be } = le,
            oe = O.useMemo(() => new Set(), []),
            Te = be.findIndex(({ id: Ie }) => !oe.has(Ie)),
            he = (0, He.CH)(),
            We = (Ie) => {
              oe.add(Ie), he();
            },
            Ue = (Ie) => {
              oe.delete(Ie), he();
            };
          return be.map(({ id: Ie, upload: ve }, Ae) =>
            (0, e.jsx)(
              E,
              {
                active: Ae == Te,
                upload: ve,
                fnUploadPrepared: () => We(Ie),
                fnUploadComplete: () => Ue(Ie),
              },
              Ie,
            ),
          );
        }
        function E(le) {
          const {
              upload: be,
              active: oe,
              fnUploadPrepared: Te,
              fnUploadComplete: he,
            } = le,
            [We, Ue] = O.useState(!1),
            [Ie, ve] = O.useState(void 0);
          O.useEffect(() => {
            oe &&
              (N(be.file) ||
                ve(
                  (0, Pe.we)(
                    "#StoreAdmin_UploadError_UnsupportedFileType",
                    be.file.name,
                  ),
                )),
              Ue(oe);
          }, [oe, be]);
          const [Ae, we] = O.useState(!1),
            ue = (0, ae.L)(),
            Oe = ce(),
            Be = async (ke, Ze) => {
              Te(), we(!0);
              try {
                if (!(await ue.AddImageForLanguage(be.file, Ze))) {
                  ve((0, Pe.we)("#StoreAdmin_UploadError_UnableToGetFileInfo"));
                  return;
                }
                const nt = (await ue.UploadAllImages())[0];
                if (!nt || !nt.bSuccess) {
                  ve(
                    nt?.image?.message
                      ? (0, Pe.PP)(
                          "#StoreAdmin_UploadError_Generic",
                          nt.image.message,
                        )
                      : (0, Pe.we)("#StoreAdmin_UploadError_Unknown"),
                  );
                  return;
                }
                Oe(nt.uploadResult), be.onComplete((0, fe.TQ)(ke));
              } finally {
                we(!1), he();
              }
            };
          return We
            ? Ie
              ? (0, e.jsx)(se.E, {
                  active: !0,
                  children: (0, e.jsx)(R.o0, {
                    bAlertDialog: !0,
                    strTitle: (0, Pe.we)("#Error_Generic"),
                    strDescription: Ie,
                    strOKButtonText: (0, Pe.we)("#Button_OK"),
                    closeModal: () => be.onCancel(),
                  }),
                })
              : (0, e.jsx)(k, { upload: be, isUploading: Ae, doUpload: Be })
            : null;
        }
        function k(le) {
          const { upload: be, isUploading: oe, doUpload: Te } = le,
            { file: he, onCancel: We } = be,
            { rgExtraAssets: Ue, regexInvalidFilenameCharacters: Ie } = A(),
            ve = O.useCallback(
              (mt) => mt?.replace(Ie, "_").toLowerCase() ?? "",
              [Ie],
            ),
            { baseFilename: Ae, language: we } = (0, Ve.jj)(he.name, re.xPp),
            [ue, Oe] = O.useState(() => ve(Ae)),
            Be = O.useMemo(() => ve(ue), [ue, ve]),
            ke = (0, me.Gr)(be.languages),
            Ze = Ee(
              ke.map((mt) => mt.data),
              we,
              be.activeLanguage,
            ),
            [et, _t] = O.useState(Ze),
            [nt, Ke] = O.useState(void 0),
            Qe = he.name;
          O.useEffect(() => {
            Ke(() => {
              if (!Be) return;
              const { baseFilename: mt } = (0, Ve.jj)(Be),
                Je = Ue.find((Rt) => (0, fe.K7)(Rt) == mt);
              return Je
                ? (0, fe.i$)(Je)
                  ? Je
                  : Je.images?.[(0, re.LgB)(et)]
                : void 0;
            });
          }, [Qe, Be, Ue, et]);
          const tt = K(Be) && !oe ? () => Te(Be, et) : void 0,
            rt = (mt) => {
              mt.preventDefault(), tt && tt();
            },
            qe = O.useCallback(() => {
              be.onComplete((0, fe.TQ)(Be));
            }, [be, Be]),
            kt = nt
              ? (0, Pe.we)("#StoreAdmin_ExtraAssetUpload_UploadAndReplace")
              : (0, Pe.we)("#Button_Upload");
          return (0, e.jsx)(D.mt, {
            active: !0,
            onDismiss: We,
            className: Se.UploadModal,
            children: (0, e.jsxs)($.U9, {
              onSubmit: rt,
              children: [
                (0, e.jsx)($.Y9, {
                  children: (0, Pe.we)(
                    "#StoreAdmin_ExtraAssetUpload_UploadNew",
                  ),
                }),
                (0, e.jsxs)($.nB, {
                  children: [
                    (0, e.jsx)(v, {
                      file: he,
                      isVideo: B(he),
                      duplicate: nt,
                      bShowThrobber: oe,
                      onUseDuplicate: qe,
                    }),
                    (0, e.jsx)(z, {
                      name: ue,
                      validatedName: Be,
                      setName: Oe,
                      disabled: oe,
                    }),
                    ke.length > 1 &&
                      (0, e.jsx)($.m, {
                        rgOptions: ke,
                        selectedOption: et,
                        onChange: (mt) => _t(mt.data),
                      }),
                  ],
                }),
                (0, e.jsx)($.wi, {
                  children: (0, e.jsx)($.CB, {
                    onOK: tt,
                    strOKText: kt,
                    bOKDisabled: !tt,
                    onCancel: We,
                  }),
                }),
              ],
            }),
          });
        }
        function v(le) {
          const {
              file: be,
              isVideo: oe,
              duplicate: Te,
              bShowThrobber: he,
              onUseDuplicate: We,
            } = le,
            Ue = O.useMemo(() => URL.createObjectURL(be), [be]),
            Ie = (0, I.Un)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              Te &&
                (0, e.jsx)("div", {
                  className: Se.DuplicateMessage,
                  children: (0, Pe.we)(
                    "#StoreAdmin_ExtraAssetUpload_FileNameInuse",
                  ),
                }),
              (0, e.jsxs)("div", {
                className: (0, Y.A)(Se.SideBySideComparison, he && Se.Loading),
                children: [
                  he &&
                    (0, e.jsx)("div", {
                      className: Se.ThrobberContainer,
                      children: (0, e.jsx)(pe.t, {
                        position: "center",
                        size: "xlarge",
                      }),
                    }),
                  Te &&
                    (0, e.jsxs)("div", {
                      className: (0, Y.A)(
                        Se.ImgPreviewContainer,
                        Se.DuplicatePreview,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: Se.ImageLabel,
                          children: (0, Pe.we)(
                            "#StoreAdmin_ExtraAssetUpload_Original",
                          ),
                        }),
                        (0, e.jsx)("img", {
                          src:
                            "name" in Te
                              ? (0, fe.FZ)(Te, re.Bhc, Ie)
                              : (0, I.cn)((0, fe.ar)(Te, !1)?.url, Ie),
                          className: Se.ImgPreview,
                        }),
                      ],
                    }),
                  (0, e.jsxs)("div", {
                    className: Se.ImgPreviewContainer,
                    children: [
                      Te &&
                        (0, e.jsx)("div", {
                          className: Se.ImageLabel,
                          children: (0, Pe.we)(
                            "#StoreAdmin_ExtraAssetUpload_Replacement",
                          ),
                        }),
                      !oe &&
                        (0, e.jsx)("img", {
                          src: Ue,
                          className: Se.ImgPreview,
                        }),
                      oe &&
                        (0, e.jsx)("video", {
                          src: Ue,
                          className: Se.ImgPreview,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          autoPlay: !0,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function z(le) {
          const { name: be, setName: oe, validatedName: Te, disabled: he } = le,
            We = O.useCallback((Ue) => Ue && Ue.element.select(), []);
          return (0, e.jsx)("div", {
            children: (0, e.jsx)($.pd, {
              value: be,
              onChange: (Ue) => oe(Ue.currentTarget.value),
              label: (0, Pe.we)("#StoreAdmin_ExtraAssetUpload_EnterAName"),
              ref: We,
              disabled: he,
              description: (0, Pe.PP)(
                "#StoreAdmin_ExtraAssetUpload_WillBeSavedAsFilename",
                (0, e.jsx)("b", { children: Te }),
              ),
            }),
          });
        }
        function K(le) {
          return le && le.length > 0;
        }
        function N(le) {
          switch (le.type) {
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
        }
        function B(le) {
          return le.type.startsWith("video/");
        }
        function Ee(le, be, oe) {
          return le?.length == 1 ? le[0] : be != re.xPp ? be : oe;
        }
        var L = i(17616),
          G = i(67705);
        function w(le) {
          const { children: be } = le,
            [oe, Te] = O.useState([]),
            he = O.useRef(0),
            We = O.useCallback(
              (Ue) => (
                Te((Ie) => [...Ie, { upload: Ue, id: he.current++ }]),
                () => Te((Ie) => Ie.filter((ve) => ve.upload != Ue))
              ),
              [],
            );
          return (0, e.jsx)(W, {
            queueExtraAssetUpload: We,
            children: (0, e.jsx)(_e, {
              children: (0, e.jsxs)(L.jy, {
                children: [(0, e.jsx)(S, { rgUploads: oe }), be],
              }),
            }),
          });
        }
        function W(le) {
          const { children: be, queueExtraAssetUpload: oe } = le,
            [Te, he] = O.useState(void 0),
            [We, Ue] = O.useState([]),
            [Ie, ve] = O.useState(!1);
          O.useEffect(() => {
            let ue = (0, G.Tc)("rgGamePageConfig", "application_config");
            ue ||
              (console.error(
                "Missing config data for game edit page - some components may not work",
              ),
              (ue = {
                rgExtraAssetsData: {
                  rgExtraAssets: [],
                  rgInvalidFilenameCharacters: [],
                },
                strGameControllerURLFormat: "",
                bAppHasSteamChinaToolsEnabled: !1,
              })),
              he(ue),
              Ue(ue.rgExtraAssetsData.rgExtraAssets),
              ve(ue.bAppHasSteamChinaToolsEnabled);
          }, []);
          const Ae = O.useMemo(() => {
              if (Te)
                return (
                  Te.rgExtraAssetsData.rgInvalidFilenameCharacters.forEach(
                    (ue) =>
                      (0, a.wT)(
                        ue.length == 1,
                        `Expected single-character replacements, "${ue} is not`,
                      ),
                  ),
                  new RegExp(
                    `[${Te.rgExtraAssetsData.rgInvalidFilenameCharacters.map((ue) => `\\${ue}`)}]`,
                    "g",
                  )
                );
            }, [Te]),
            we = O.useMemo(
              () => ({
                rgExtraAssetsData: {
                  rgExtraAssets: We,
                  regexInvalidFilenameCharacters: Ae,
                },
                strGameControllerURLFormat: Te?.strGameControllerURLFormat,
                queueExtraAssetUpload: oe,
                onExtraAssetsUpdated: Ue,
                storeItemID: Te?.nStoreItemID,
                eStoreItemType: Te?.eStoreItemType,
                bAppHasSteamChinaToolsEnabled: Ie,
              }),
              [Te, We, Ae, oe, Ie],
            );
          return Te ? (0, e.jsx)(F, { value: we, children: be }) : null;
        }
        function b(le = !1) {
          const be = O.useContext(F).rgExtraAssetsData.rgExtraAssets;
          return O.useMemo(() => (le ? [...be].reverse() : be), [be, le]);
        }
        function A() {
          return O.useContext(F).rgExtraAssetsData;
        }
        function P(le) {
          return O.useContext(F).strGameControllerURLFormat.replace(
            ":method:",
            le,
          );
        }
        function H() {
          const le = React.useContext(F);
          return { type: le.eStoreItemType, id: le.storeItemID };
        }
        function X() {
          return O.useContext(F).queueExtraAssetUpload;
        }
        function ce() {
          return O.useContext(F).onExtraAssetsUpdated;
        }
        function De() {
          const le = O.useContext(F),
            be = O.useMemo(
              () =>
                le.bAppHasSteamChinaToolsEnabled
                  ? [p.TU.k_ESteamRealmGlobal, p.TU.k_ESteamRealmChina]
                  : [p.TU.k_ESteamRealmGlobal],
              [le.bAppHasSteamChinaToolsEnabled],
            );
          return {
            bAppHasSteamChinaToolsEnabled: le.bAppHasSteamChinaToolsEnabled,
            rgRealmList: be,
          };
        }
        function xe() {
          return O.useContext(ie).bUseRichEditor;
        }
        function Me() {
          return O.useContext(ie).setUseRichEditor;
        }
        const F = O.createContext(void 0),
          ie = O.createContext(void 0);
        function _e(le) {
          const be = "storeEditorDisableRichEditor",
            [oe, Te] = O.useState(() => !localStorage.getItem(be)),
            he = O.useCallback((Ue) => {
              Ue ? localStorage.removeItem(be) : localStorage.setItem(be, "1"),
                Te(Ue);
            }, []),
            We = O.useMemo(
              () => ({ bUseRichEditor: oe, setUseRichEditor: he }),
              [oe, he],
            );
          return (0, e.jsx)(ie.Provider, { value: We, children: le.children });
        }
      },
      39795: (ee, ze, i) => {
        "use strict";
        i.r(ze), i.d(ze, { default: () => Oc });
        var e = i(7850),
          p = i(90626),
          a = i(18210),
          fe = i(93763),
          O = i(36118),
          $ = i(17479),
          D = i(36707),
          R = i(249),
          se = i(53906),
          pe = i(71421),
          Y = i(3166);
        function Pe(s) {
          const t = s.strSecondaryCategory
              ? `${Y.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}%2C${s.strSecondaryCategory}`
              : `${Y.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}`,
            n = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, D.A)(
                    $.ImgSection,
                    s.bHightlightRow && $.HighlightRow,
                    s.bHighlightGPRequired && $.GamepadRequired,
                  ),
                  children: s.tagImage,
                }),
                (0, e.jsxs)("div", {
                  className: (0, D.A)(
                    $.LocSection,
                    s.bHighlightText && $.HighlightText,
                    s.bHightlightRow && $.HighlightRow,
                    s.bHighlightGPRequired && $.GamepadRequired,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, D.A)(
                        $.LocString,
                        s.bHighlightText && $.HighlightText,
                        s.bHightlightRow && $.HighlightRow,
                        s.bHighlightGPRequired && $.GamepadRequired,
                        s.bPersonalized && $.Personalized,
                      ),
                      children: (0, a.we)(s.strLocalizationToken),
                    }),
                    s.strTooltipString &&
                      (0, e.jsx)(pe.he, {
                        toolTipContent: (0, a.we)(s.strTooltipString),
                        className: $.ToolTipContainer,
                        children: (0, e.jsx)("span", {
                          className: $.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return s.strCategory
            ? (0, e.jsx)("a", { href: t, className: $.InfoRow, children: n })
            : (0, e.jsx)("div", { className: $.InfoRow, children: n });
        }
        function Se(s) {
          return (0, e.jsx)("div", {
            className: $.PreviewContainer,
            children: (0, e.jsx)(I, { bPreview: !0, ...s }),
          });
        }
        function He(s) {
          return jsx(Fragment, {
            children:
              (s.bPartialXboxControllerSupport ||
                s.bFullXboxControllerSupport) &&
              jsx("div", {
                className: styles.StoreSidebarContainer,
                children: jsx(I, { ...s }),
              }),
          });
        }
        function Ve() {
          return (0, e.jsx)(Pe, {
            tagImage: (0, e.jsx)(R.Moo, {
              className: (0, D.A)($.Tilt, $.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function re() {
          return (0, e.jsxs)("div", {
            className: (0, D.A)($.PurchaseNoticeContainer),
            children: [
              (0, e.jsx)(R.Kz1, {
                className: (0, D.A)($.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)($.PurchaseNoticeLabel),
                children: (0, a.we)(
                  "#Store_ControllerSupport_GamepadPreferred",
                ),
              }),
            ],
          });
        }
        function me(s) {
          const { bNoKeyboardSupport: t, bGamepadPreferred: n } = s;
          return (0, e.jsxs)("div", {
            className: (0, D.A)($.NoticeContainer),
            children: [t && (0, e.jsx)(Ve, {}), n && !t && (0, e.jsx)(re, {})],
          });
        }
        function I(s) {
          const {
            bControllerSupportWizardComplete: t,
            bPS4ControllerSupport: n,
            bPS5ControllerSupport: r,
            bPS4ControllerBTSupport: o,
            bPS5ControllerBTSupport: l,
            bFullXboxControllerSupport: c,
            bPartialXboxControllerSupport: d,
            bSteamInputAPISupport: g,
            bHasOther: x,
            bHasPS4: f,
            bHasPS5: _,
            bHasXbox: C,
            bPreview: T,
          } = s;
          let U = [];
          if (n && r && o && l) {
            const ye = (0, e.jsx)(R.pcV, {
                className: $.SmallerSVG,
                controllerType: se._X,
                partial: !c,
                role: "presentation",
              }),
              ne = f || _;
            U.push(
              (0, e.jsx)(
                Pe,
                {
                  tagImage: ye,
                  strLocalizationToken: ne
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: ne,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (n) {
              const ye = (0, e.jsx)(R.pcV, {
                className: $.SmallerSVG,
                controllerType: se._X,
                partial: !c,
                role: "presentation",
              });
              o
                ? U.push(
                    (0, e.jsx)(
                      Pe,
                      {
                        tagImage: ye,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: f,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : U.push(
                    (0, e.jsx)(
                      Pe,
                      {
                        tagImage: ye,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: f,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (r) {
              const ye = (0, e.jsx)(R.pcV, {
                className: $.SmallerSVG,
                controllerType: se.HD,
                partial: !c,
                role: "presentation",
              });
              l
                ? U.push(
                    (0, e.jsx)(
                      Pe,
                      {
                        tagImage: ye,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: _,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : U.push(
                    (0, e.jsx)(
                      Pe,
                      {
                        tagImage: ye,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS5_USB_Personalized"
                          : "#Store_ControllerSupport_PS5_USB",
                        bPersonalized: _,
                        strCategory: "57",
                      },
                      "5",
                    ),
                  );
            }
          }
          return (0, e.jsx)(e.Fragment, {
            children:
              (d || c) &&
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: $.ControllerSupportLevelString,
                    children: (0, a.we)(
                      c
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, e.jsx)(Pe, {
                    tagImage: (0, e.jsx)(R.pcV, {
                      className: $.SmallerSVG,
                      controllerType: se.Oh,
                      partial: !c,
                      role: "presentation",
                    }),
                    strLocalizationToken: C
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: C,
                    strCategory: "18",
                  }),
                  U,
                  g &&
                    (0, e.jsx)(Pe, {
                      tagImage: (0, e.jsx)(R.kdM, {
                        className: $.BiggerSVG,
                        bGreyOutRightSide: !c,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!T && !t) || (!g && x && !C)) &&
                    (0, e.jsx)(Pe, {
                      tagImage: (0, e.jsx)(R.vet, {
                        className: $.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        x || f || _
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: x || f || _,
                    }),
                  (0, e.jsx)(me, { ...s }),
                ],
              }),
          });
        }
        const ae = null;
        var S = i(58534),
          E = i(2801),
          k = i(31623);
        function v(s, t) {
          const n = document.getElementById(s);
          n && n.setAttribute("value", t ? "true" : "");
        }
        async function z(s) {
          v("gamepadsupport_input_1", s.bPartialXboxControllerSupport),
            v("gamepadsupport_input_2", s.bFullXboxControllerSupport),
            v("controllersupport_input_3", s.bPS4ControllerSupport),
            v("controllersupport_input_4", s.bPS4ControllerBTSupport),
            v("controllersupport_input_5", s.bPS5ControllerSupport),
            v("controllersupport_input_6", s.bPS5ControllerBTSupport),
            v("controllersupport_input_7", s.bSteamInputAPISupport),
            v("controllersupport_input_8", s.bNoKeyboardSupport),
            v("controllersupport_input_8_input", s.bNoKeyboardSupport),
            v("controllersupport_input_9", s.bGamepadPreferred),
            v("controllersupport_input_10", !0);
          const t = document.getElementById("submitBtn");
          t && t.click();
        }
        var K = ((s) => (
          (s[(s.k_eMouseKBOnly = 0)] = "k_eMouseKBOnly"),
          (s[(s.k_eGamepadAndMouse = 1)] = "k_eGamepadAndMouse"),
          (s[(s.k_eGamepadPreferred = 2)] = "k_eGamepadPreferred"),
          (s[(s.k_eGamepadRequired = 3)] = "k_eGamepadRequired"),
          s
        ))(K || {});
        function N(s) {
          const {
              nPageNum: t,
              currentValues: n,
              setCurrentValues: r,
              setSkipToEnd: o,
            } = s,
            l = [
              {
                id: 0,
                locString: "#ControllerSupportModal_PgOne_MouseKBOnly",
                settings: {
                  bFullXboxControllerSupport: !1,
                  bPartialXboxControllerSupport: !1,
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                  bSteamInputAPISupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !1,
                },
                bSkipToEnd: !0,
              },
              {
                id: 1,
                locString: "#ControllerSupportModal_PgOne_GamepadAndMouse",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !1,
                },
              },
              {
                id: 2,
                locString: "#ControllerSupportModal_PgOne_GamepadPreferred",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !1,
                  bGamepadPreferred: !0,
                },
              },
              {
                id: 3,
                locString: "#ControllerSupportModal_PgOne_GamepadRequired",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                  bNoKeyboardSupport: !0,
                  bGamepadPreferred: !1,
                },
              },
            ],
            c = () =>
              n.bNoKeyboardSupport
                ? 3
                : n.bGamepadPreferred
                  ? 2
                  : n.bFullXboxControllerSupport ||
                      n.bPartialXboxControllerSupport
                    ? 1
                    : 0,
            d = c(),
            g = (_) => {
              const C = l.find((T) => T.id == _);
              r({ ...n, ...C?.settings }), o(C.bSkipToEnd ?? !1);
            };
          p.useEffect(() => {
            d == 0 && o(!0);
          }, [d, o]);
          const x = (0, e.jsx)("div", {
              children: (0, e.jsx)(S.zW, {
                labelId: null,
                value: c(),
                onChange: g,
                children: l.map((_) =>
                  (0, e.jsxs)(
                    S.a,
                    {
                      value: _.id,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, D.A)(
                            k.RadioButton,
                            d == _.id && k.Selected,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: k.OptionLabel,
                          children: (0, a.we)(_.locString),
                        }),
                      ],
                    },
                    _.id,
                  ),
                ),
              }),
            }),
            f = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgOne_Instructions",
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgOne_Instructions_VR",
                  ),
                }),
              ],
            });
          return (0, e.jsx)(X, {
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgOne_Header",
            strInstructionsToken: f,
            strQuestionToken: "#ControllerSupportModal_PgOne_Question",
            leftColumnContent: x,
          });
        }
        var B = ((s) => (
          (s[(s.k_eFullXboxControllerSupport = 0)] =
            "k_eFullXboxControllerSupport"),
          (s[(s.k_ePartialXboxControllerSupport = 1)] =
            "k_ePartialXboxControllerSupport"),
          s
        ))(B || {});
        function Ee(s) {
          const {
              nPageNum: t,
              currentValues: n,
              setCurrentValues: r,
              setSkipToEnd: o,
            } = s,
            l = p.useMemo(
              () => [
                {
                  id: 0,
                  locString: "#ControllerSupportModal_PgTwo_FullController",
                  settings: {
                    bFullXboxControllerSupport: !0,
                    bPartialXboxControllerSupport: !1,
                  },
                  bSkipToEnd: !1,
                },
                {
                  id: 1,
                  locString: "#ControllerSupportModal_PgTwo_PartialController",
                  settings: {
                    bFullXboxControllerSupport: !1,
                    bPartialXboxControllerSupport: !0,
                  },
                },
              ],
              [],
            ),
            c = p.useCallback(
              () => (n.bFullXboxControllerSupport ? 0 : 1),
              [n],
            ),
            d = p.useCallback(
              (_) => {
                const C = l.find((T) => T.id == _);
                r({ ...n, ...C?.settings }), o(C.bSkipToEnd ?? !1);
              },
              [n, l, r, o],
            ),
            g = c(),
            x = (0, e.jsx)("div", {
              children: (0, e.jsx)(S.zW, {
                labelId: null,
                value: c(),
                onChange: d,
                children: l.map((_) =>
                  (0, e.jsxs)(
                    S.a,
                    {
                      value: _.id,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, D.A)(
                            k.RadioButton,
                            g == _.id && k.Selected,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: k.OptionLabel,
                          children: (0, a.we)(_.locString),
                        }),
                      ],
                    },
                    _.id,
                  ),
                ),
              }),
            }),
            f = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgTwo_Instructions",
                  ),
                }),
                (0, e.jsxs)("ol", {
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt1",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgThree_Instructions_pt1",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt4",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgTwo_Instructions_pt5",
                      ),
                    }),
                  ],
                }),
              ],
            });
          return (0, e.jsx)(X, {
            stepIMG: (0, e.jsx)(R.xIk, { type: "xbox" }),
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgTwo_Header",
            strInstructionsToken: f,
            strQuestionToken: "#ControllerSupportModal_PgTwo_Question",
            leftColumnContent: x,
          });
        }
        function L(s) {
          const { nPageNum: t, currentValues: n, setCurrentValues: r } = s,
            o = [
              {
                id: 0,
                locString: "#ControllerSupportModal_PgThree_Ps4",
                settings: { bPS4ControllerSupport: !0 },
                invertedSettings: {
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                },
                bValue: n.bPS4ControllerSupport,
              },
              {
                id: 1,
                locString: "#ControllerSupportModal_PgThree_Ps4BT",
                settings: {
                  bPS4ControllerBTSupport: !0,
                  bPS4ControllerSupport: !0,
                },
                invertedSettings: { bPS4ControllerBTSupport: !1 },
                bValue: n.bPS4ControllerBTSupport,
              },
              {
                id: 2,
                locString: "#ControllerSupportModal_PgThree_Ps5",
                settings: { bPS5ControllerSupport: !0 },
                invertedSettings: {
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                },
                bValue: n.bPS5ControllerSupport,
              },
              {
                id: 3,
                locString: "#ControllerSupportModal_PgThree_Ps5BT",
                settings: {
                  bPS5ControllerBTSupport: !0,
                  bPS5ControllerSupport: !0,
                },
                invertedSettings: { bPS5ControllerBTSupport: !1 },
                bValue: n.bPS5ControllerBTSupport,
              },
              {
                id: 4,
                locString: "#ControllerSupportModal_PgThree_None",
                settings: {
                  bPS4ControllerSupport: !1,
                  bPS4ControllerBTSupport: !1,
                  bPS5ControllerSupport: !1,
                  bPS5ControllerBTSupport: !1,
                },
                invertedSettings: { bPS4ControllerSupport: !0 },
                bValue:
                  !n.bPS4ControllerSupport &&
                  !n.bPS4ControllerBTSupport &&
                  !n.bPS5ControllerSupport &&
                  !n.bPS5ControllerBTSupport,
              },
            ],
            l = (g) => {
              r({ ...n, ...g });
            },
            c = (0, e.jsx)("div", {
              children: o.map((g) =>
                (0, e.jsx)(
                  S.Yh,
                  {
                    checked: g.bValue,
                    onChange: (x) => l(x ? g.settings : g.invertedSettings),
                    label: (0, a.we)(g.locString),
                  },
                  g.id,
                ),
              ),
            }),
            d = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgThree_Instructions",
                  ),
                }),
                (0, e.jsx)("ol", {
                  children: (0, e.jsx)("li", {
                    children: (0, a.we)(
                      "#ControllerSupportModal_PgThree_Instructions_pt1",
                    ),
                  }),
                }),
                (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#ControllerSupportModal_PgThree_Instructions_note",
                    (0, e.jsx)("span", { style: { fontWeight: "bold" } }),
                  ),
                }),
              ],
            });
          return (0, e.jsx)(X, {
            stepIMG: (0, e.jsx)(R.xIk, { type: "ps4" }),
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgThree_Header",
            strInstructionsToken: d,
            strQuestionToken: "#ControllerSupportModal_PgThree_Question",
            leftColumnContent: c,
          });
        }
        var G = ((s) => (
          (s[(s.k_eSteamInputAPISupport = 0)] = "k_eSteamInputAPISupport"),
          (s[(s.k_eNoSteamInputAPISupport = 1)] = "k_eNoSteamInputAPISupport"),
          s
        ))(G || {});
        function w(s) {
          const {
              nPageNum: t,
              currentValues: n,
              setCurrentValues: r,
              setSkipToEnd: o,
            } = s,
            l = [
              {
                id: 0,
                locString: "#ControllerSupportModal_PgFour_SIAPI",
                settings: { bSteamInputAPISupport: !0 },
                bSkipToEnd: !1,
              },
              {
                id: 1,
                locString: "#ControllerSupportModal_PgFour_NoSIAPI",
                settings: { bSteamInputAPISupport: !1 },
                bSkipToEnd: !1,
              },
            ],
            c = () => (n.bSteamInputAPISupport ? 0 : 1),
            d = (_) => {
              const C = l.find((T) => T.id == _);
              r({ ...n, ...C?.settings }), o(C.bSkipToEnd ?? !1);
            },
            g = c(),
            x = (0, e.jsx)("div", {
              children: (0, e.jsx)(S.zW, {
                labelId: null,
                value: g,
                onChange: d,
                classNames: k.RadioGroup,
                children: l.map((_) =>
                  (0, e.jsxs)(
                    S.a,
                    {
                      value: _.id,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, D.A)(
                            k.RadioButton,
                            g == _.id && k.Selected,
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: k.OptionLabel,
                          children: (0, a.we)(_.locString),
                        }),
                      ],
                    },
                    _.id,
                  ),
                ),
              }),
            }),
            f = (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgFour_Instructions",
                  ),
                }),
                (0, e.jsxs)("ol", {
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgFour_Instructions_pt1",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgFour_Instructions_pt2",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, a.we)(
                        "#ControllerSupportModal_PgFour_Instructions_pt3",
                      ),
                    }),
                  ],
                }),
                (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#ControllerSupportModal_PgFour_Instructions_note",
                  ),
                }),
              ],
            });
          return (0, e.jsx)(X, {
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", t + 1),
            strStepSubHeaderToken: "#ControllerSupportModal_PgFour_Header",
            strInstructionsToken: f,
            strQuestionToken: "#ControllerSupportModal_PgFour_Question",
            leftColumnContent: x,
          });
        }
        function W(s) {
          const { currentValues: t } = s,
            n = (0, e.jsx)("div", {
              children:
                (t.bFullXboxControllerSupport ||
                  t.bPartialXboxControllerSupport) &&
                (0, e.jsx)(Se, { ...s.currentValues }),
            }),
            r =
              t.bFullXboxControllerSupport || t.bPartialXboxControllerSupport
                ? "#ControllerSupportModal_PgFive_Question"
                : "#ControllerSupportModal_PgFive_QuestionNoController";
          return (0, e.jsx)(X, {
            strStepName: (0, a.we)("#ControllerSupportModal_StepString", 5),
            strStepSubHeaderToken: "#ControllerSupportModal_PgFive_Header",
            strInstructionsToken: void 0,
            strQuestionToken: r,
            leftColumnContent: n,
          });
        }
        function b(s) {
          const { appid: t, onClose: n, onCommit: r, params: o } = s,
            [l, c] = p.useState(o),
            [d, g] = p.useState(o),
            [x, f] = p.useState(!1),
            _ = 5,
            [C, T] = p.useState(0),
            U = p.useCallback(() => {
              z(d), r(!1);
            }, [r, d]),
            ye = () => {
              g(l);
              let $e = C - 1;
              x && C == 4 && ($e = 0), T($e);
            },
            ne = () => {
              c(d), T(x ? _ - 1 : C + 1);
            };
          let Q;
          switch (C) {
            default:
            case 0: {
              Q = (0, e.jsx)(N, {
                nPageNum: C,
                currentValues: d,
                setCurrentValues: g,
                setSkipToEnd: f,
              });
              break;
            }
            case 1:
              Q = (0, e.jsx)(Ee, {
                nPageNum: C,
                currentValues: d,
                setCurrentValues: g,
                setSkipToEnd: f,
              });
              break;
            case 2:
              Q = (0, e.jsx)(L, {
                nPageNum: C,
                currentValues: d,
                setCurrentValues: g,
                setSkipToEnd: f,
              });
              break;
            case 3:
              Q = (0, e.jsx)(w, {
                nPageNum: C,
                currentValues: d,
                setCurrentValues: g,
                setSkipToEnd: f,
              });
              break;
            case 4:
              Q = (0, e.jsx)(W, { currentValues: d });
              break;
          }
          const Fe = (0, e.jsx)(H, {
              nPageIdx: C,
              nPages: _,
              strHeaderText: (0, a.we)("#ControllerSupportModal_Title"),
            }),
            Re = C == _ - 1;
          return (0, e.jsx)(A.Provider, {
            value: d,
            children: (0, e.jsx)(ce, {
              fnNext: Re ? () => U() : ne,
              fnBack: C > 0 ? ye : n,
              header: Fe,
              strOkButtonLabel: Re ? "Save and Exit" : "Next",
              children: Q,
            }),
          });
        }
        const A = p.createContext(null);
        function P() {
          return React.useContext(A);
        }
        function H(s) {
          const { nPages: t, nPageIdx: n, strHeaderText: r } = s,
            o = (100 * (n + 1)) / (t + 1);
          return (0, e.jsxs)("div", {
            className: (0, D.A)(k.ModalHeader),
            children: [
              !1,
              (0, e.jsx)("div", {
                className: k.WizardTitle,
                children: (0, a.we)(r),
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(
                  k.ProgressBar,
                  n == t - 1 && k.ProgressBarComplete,
                ),
                children:
                  n < t - 1 &&
                  (0, e.jsx)("div", {
                    className: (0, D.A)(k.ProgressBarFillComponent),
                    style: { width: o + "%" },
                  }),
              }),
            ],
          });
        }
        const X = p.memo(function (t) {
          const {
            strStepName: n,
            strStepSubHeaderToken: r,
            stepIMG: o,
            strInstructionsToken: l,
            strQuestionToken: c,
            leftColumnContent: d,
            rightColumnContent: g,
          } = t;
          return (0, e.jsxs)("div", {
            className: k.WizardContainer,
            children: [
              (0, e.jsxs)("div", {
                className: k.StepRow,
                children: [
                  o &&
                    (0, e.jsxs)("div", {
                      className: k.StepImgContainer,
                      children: [" ", o, " "],
                    }),
                  (0, e.jsxs)("div", {
                    className: k.StepLabel,
                    children: [n, (0, e.jsx)(S.iK, { children: (0, a.we)(r) })],
                  }),
                ],
              }),
              l &&
                (0, e.jsx)("div", {
                  className: k.StepInstruction,
                  children: l,
                }),
              (0, e.jsx)("div", {
                className: k.ControlsQuestion,
                children: (0, a.oW)(
                  c,
                  (0, e.jsx)("span", { style: { fontWeight: "bold" } }),
                ),
              }),
              (0, e.jsxs)(S.dR, {
                children: [
                  (0, e.jsx)(S.VP, { children: d }),
                  (0, e.jsx)(S.VP, { children: g }),
                ],
              }),
            ],
          });
        });
        function ce(s) {
          const {
            fnNext: t,
            fnBack: n,
            children: r,
            header: o,
            strOkButtonLabel: l,
          } = s;
          return (0, e.jsxs)(E.mt, {
            active: !0,
            className: k.ControllerWizardModal,
            children: [
              o,
              (0, e.jsx)(S.nB, { className: k.WizardBody, children: r }),
              (0, e.jsx)(S.CB, {
                className: k.WizardButtons,
                bCancelDisabled: !n,
                onCancel: n,
                strCancelText: "Back",
                onOK: t,
                strOKText: l,
              }),
            ],
          });
        }
        function De(s) {
          const { unAppID: t } = s,
            [n, r] = p.useState(!1),
            o = p.useCallback(() => r(!0), []),
            l = p.useCallback(() => r(!1), []),
            c =
              s.bControllerSupportWizardComplete &&
              (s.bFullXboxControllerSupport || s.bPartialXboxControllerSupport);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              n &&
                (0, e.jsx)(b, { appid: t, onClose: l, onCommit: l, params: s }),
              (0, e.jsxs)(S.nB, {
                children: [
                  (0, e.jsx)("div", {
                    className: fe.DescText,
                    children: (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_Desc",
                    ),
                  }),
                  s.bControllerSupportWizardComplete &&
                    (0, e.jsx)("div", {
                      className: fe.DescText,
                      children: (0, a.we)(
                        "#App_Landing_ControllerSupport_WizardPrompt_CustomerView",
                      ),
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, D.A)(fe.ReleaseDateInfoCtn),
                children: [
                  (0, e.jsxs)("div", {
                    className: fe.ReleaseDateContent,
                    children: [
                      !s.bControllerSupportWizardComplete &&
                        (0, e.jsx)(xe, { onClick: o }),
                      s.bControllerSupportWizardComplete &&
                        !c &&
                        (0, e.jsx)(Me, { onClick: o }),
                      s.bControllerSupportWizardComplete &&
                        c &&
                        (0, e.jsx)(Se, { ...s }),
                    ],
                  }),
                  s.bControllerSupportWizardComplete &&
                    c &&
                    (0, e.jsxs)("div", {
                      className: fe.EditButton,
                      onClick: o,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, D.A)(fe.Spacer, fe.Top),
                        }),
                        (0, e.jsx)("div", {
                          className: fe.EditButtonIcon,
                          children: (0, e.jsx)(O.ffu, {}),
                        }),
                        (0, e.jsx)("div", {
                          className: (0, D.A)(fe.Spacer, fe.Bottom),
                        }),
                      ],
                    }),
                ],
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("div", {
                className: fe.DescText,
                children: (0, a.we)(
                  "#App_Landing_ControllerSupport_WizardPrompt_Upcoming",
                ),
              }),
            ],
          });
        }
        function xe(s) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)(S.nB, {
              children: [
                (0, e.jsx)(S.a3, {
                  children: (0, e.jsx)("div", {
                    className: fe.StatusText,
                    children: (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_StatusNotStarted",
                    ),
                  }),
                }),
                (0, e.jsxs)(S.jn, {
                  className: fe.StartWizardButton,
                  onClick: s.onClick,
                  children: [
                    " ",
                    (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
                    ),
                    " ",
                  ],
                }),
              ],
            }),
          });
        }
        function Me(s) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)(S.nB, {
              children: [
                (0, e.jsx)(S.a3, {
                  children: (0, e.jsx)("div", {
                    className: fe.StatusText,
                    children: (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_StatusNoController",
                    ),
                  }),
                }),
                (0, e.jsxs)(S.$n, {
                  className: fe.StartWizardButton,
                  onClick: s.onClick,
                  children: [
                    " ",
                    (0, a.we)(
                      "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
                    ),
                    " ",
                  ],
                }),
              ],
            }),
          });
        }
        var F = i(17616),
          ie = i(50660),
          _e = i(64868),
          le = i(18938),
          be = i(97982);
        function oe(s) {
          const { language: t, rctToolbarControls: n, mapValues: r } = s,
            o = r.get(t),
            l = p.createRef();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Te, {
                refTextArea: l,
                value: o,
                rctToolbarControls: n,
              }),
              (0, e.jsx)(We, { language: t, value: o, refTextArea: l }),
            ],
          });
        }
        function Te(s) {
          const { refTextArea: t, value: n, rctToolbarControls: r } = s,
            o = p.useCallback(
              (c, d) => {
                Ue(t.current, n, c, d);
              },
              [t, n],
            ),
            l = p.useCallback(
              (c, d) => {
                Ue(t.current, n, c, d, (g) =>
                  g.replace(
                    /(\r\n|\n|\r)/gm,
                    `\r
[*]`,
                  ),
                );
              },
              [t, n],
            );
          return (0, e.jsxs)(ie.Ez, {
            children: [
              (0, e.jsx)(he, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_Bold"),
                start: "[b]",
                end: "[/b]",
                children: (0, e.jsx)(R.l4n, {}),
              }),
              (0, e.jsx)(he, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_Italic"),
                start: "[i]",
                end: "[/i]",
                children: (0, e.jsx)(R.UKJ, {}),
              }),
              (0, e.jsx)(he, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_Underline"),
                start: "[u]",
                end: "[/u]",
                children: (0, e.jsx)(R.Gj3, {}),
              }),
              (0, e.jsx)(ie.XQ, {}),
              (0, e.jsx)(he, {
                fnInsertText: l,
                tooltip: (0, a.we)("#FormattingToolbar_BulletedList"),
                start: "[list][*]",
                end: "[/list]",
                children: (0, e.jsx)(R.JPq, {}),
              }),
              (0, e.jsx)(he, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_HeadingLevel2"),
                start: "[h2]",
                end: "[/h2]",
                children: (0, e.jsx)(R.qOW, {}),
              }),
              (0, e.jsx)(ie.XQ, {}),
              (0, e.jsx)(he, {
                fnInsertText: o,
                tooltip: (0, a.we)("#FormattingToolbar_InsertLink"),
                start: "[url]",
                end: "[/url]",
                children: (0, e.jsx)(R.YqK, {}),
              }),
              (0, e.jsx)(he, {
                fnInsertText: o,
                tooltip: (0, a.we)("#EventEditor_InsertImage"),
                start: "[img]",
                end: "[/img]",
                children: (0, e.jsx)(R._V3, {}),
              }),
              (0, e.jsx)(ie.hK, {}),
              r,
            ],
          });
        }
        function he(s) {
          const {
            fnInsertText: t,
            tooltip: n,
            start: r,
            end: o,
            children: l,
          } = s;
          return (0, e.jsx)(ie.ff, {
            onClick: () => t(r, o),
            tooltip: n,
            children: l,
          });
        }
        function We(s) {
          const { language: t, value: n, refTextArea: r } = s,
            o = p.useCallback((d) => n.Set(d.currentTarget.value), [n]),
            l = (0, _e.gc)(n),
            c = p.useCallback(
              (d) => {
                (0, le.cZ)(r, d?.textarea);
              },
              [r],
            );
          return (0, e.jsx)(S.Cl, {
            className: be.TextArea,
            ref: c,
            nMinHeight: 96,
            value: l,
            onChange: o,
            lang: (0, a.d$)(t),
          });
        }
        function Ue(s, t, n, r, o) {
          if (s.selectionStart || s.selectionStart === 0) {
            const l = s.selectionStart,
              c = s.selectionEnd,
              d = s.value.substring(0, l),
              g = s.value.substring(l, c),
              x = s.value.substring(c, s.value.length),
              f = o ? o(g) : g,
              _ = f.length - g.length,
              C = s.scrollTop;
            Ie(t, d + n + f + r + x, () => {
              s.focus(),
                (s.selectionStart = l + n.length),
                (s.selectionEnd = c + n.length + _),
                (s.scrollTop = C);
            });
          } else Ie(t, s.value + n + " " + r, () => s.focus());
        }
        function Ie(s, t, n) {
          s.Set(t), window.setTimeout(n, 1);
        }
        var ve = i(28410),
          Ae = i(5859),
          we = i(25792),
          ue = i(99412),
          Oe = i(69787);
        const Be = p.lazy(() => Promise.resolve().then(i.bind(i, 5859)));
        function ke(s) {
          const {
              rgLanguages: t,
              value: n,
              strNamePrefix: r,
              rgPath: o,
              editorType: l,
              asset_mtime: c,
            } = s,
            d = p.useMemo(() => new Map(t), [t]),
            g = p.useMemo(() => Array.from(d.keys()).map(ue.sfN), [d]),
            {
              strActiveLanguage: x,
              mapValues: f,
              rctLanguageSelect: _,
              rctHiddenInputs: C,
            } = (0, F.KC)(d, n, r, o),
            T = Ze(),
            U = (0, ve.TQ)(),
            ye =
              l == "aboutthegame"
                ? (0, e.jsx)(Ae.StoreAppPageHeader, {
                    children: (0, a.we)(
                      "#StoreAdmin_GameDescription_AboutThisGame",
                    ),
                  })
                : void 0;
          return (0, e.jsxs)("div", {
            className: be.LocTextAreaContainer,
            children: [
              l == "aboutthegame" && (0, e.jsx)(et, {}),
              l == "aboutthegame" && !U && (0, e.jsx)(_t, {}),
              (0, e.jsxs)(
                we.tH,
                {
                  children: [
                    " ",
                    (0, e.jsx)(p.Suspense, {
                      fallback: null,
                      children: (0, e.jsx)(Oe.Dx.Provider, {
                        value: c,
                        children: (0, e.jsx)(T, {
                          language: x,
                          mapValues: f,
                          languages: g,
                          rctToolbarControls: _,
                          editorType: l,
                          rctAboveEditor: ye,
                        }),
                      }),
                    }),
                  ],
                },
                U ? "richeditor" : "bbcode",
              ),
              C,
            ],
          });
        }
        function Ze() {
          return (0, ve.TQ)() ? Be : oe;
        }
        function et() {
          const s = (0, ve.TQ)(),
            t = (0, ve.gg)();
          return (0, e.jsx)(S.Yh, {
            style: { width: "fit-content" },
            checked: s,
            label: (0, a.we)("#StoreAdmin_GameDescription_UseRichEditor"),
            onChange: t,
          });
        }
        function _t() {
          return (0, e.jsxs)("div", {
            children: [
              (0, a.PP)(
                "#StoreAdmin_GameDescription_PlainEditorImageInstructions1",
                (0, e.jsx)(R.QRo, { className: "inline_svg" }),
              ),
              (0, e.jsx)("br", {}),
              (0, a.we)(
                "#StoreAdmin_GameDescription_PlainEditorImageInstructions2",
              ),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
            ],
          });
        }
        var nt = i(2272),
          Ke = i(65596),
          Qe = i(65620),
          tt = i(92757),
          rt = i(96135),
          qe = i(72609),
          kt = i(77411),
          mt = i(76559),
          Je = i(813),
          Gt = i(16512),
          Rt = i(63854),
          Ft = ((s) => (
            (s[(s.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (s[(s.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            s
          ))(Ft || {}),
          Qt = i(10142),
          ft = i(84676),
          fs = i(31172),
          it = i(95695),
          Tt = i.n(it),
          Ye = i(45247),
          Vt = i(91512),
          Ps = i(21418),
          ss = i(85599),
          Ms = i(41635),
          rn = i(19042),
          Ht = i.n(rn);
        function Cn(s) {
          const { rgCreatorHomes: t, groupvanityinfo: n } = s,
            [r, o] = (0, p.useState)(!0);
          return (
            (0, p.useEffect)(() => {
              n
                ? (async () => (await Je.ac.AddGroupVanities(n), o(!1)))()
                : o(!1);
            }, [n]),
            r
              ? null
              : (0, e.jsxs)(we.tH, {
                  children: [
                    (0, e.jsxs)("div", {
                      className: "instructions",
                      children: [
                        (0, e.jsxs)("h2", {
                          children: [
                            (0, a.we)("#Create_Home_Title"),
                            " ",
                            (0, e.jsx)("span", {
                              className: "small",
                              children: (0, e.jsx)("a", {
                                href: `${qe.TS.STORE_BASE_URL}news/group/4145017/view/4578559379959234050`,
                                target: "_blank",
                                children: (0, a.we)(
                                  "#AssetRequest_General_SeeDocs",
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("hr", {}),
                        !t || t.length == 0
                          ? (0, e.jsx)("div", {
                              className: Ht().PageSelect,
                              children: (0, a.oW)(
                                "#Create_Home_None",
                                (0, e.jsx)("a", {
                                  href: `${qe.TS.PARTNER_BASE_URL}doc/store/creator_homepage`,
                                  target: "_blank",
                                }),
                                (0, e.jsx)("a", {
                                  href: `${qe.TS.PARTNER_BASE_URL}doc/store/franchise_pages`,
                                  target: "_blank",
                                }),
                              ),
                            })
                          : (0, e.jsx)(an, { ...s, baseGameAppID: s.appid }),
                      ],
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("br", {}),
                  ],
                })
          );
        }
        function zs(s, t) {
          if (s >= t) return [];
          const n = [];
          for (let r = s; r < t; r++) n.push(r);
          return n;
        }
        function an(s) {
          const {
              rgCreatorHomes: t,
              oInputFeatured: n,
              creatorNames: r,
              baseGameAppID: o,
            } = s,
            [l, c] = (0, p.useState)(() => {
              if (n) return n;
              for (const x of r.rgFrachises) {
                const f = t.find((_) => _.linkname == x);
                if (f)
                  return {
                    clan_account_id: new mt.b(f.clan_steamid).GetAccountID(),
                    sort_order: "salesrank",
                    featured_appids: void 0,
                  };
              }
              return { clan_account_id: 0 };
            }),
            d = (0, p.useCallback)(
              (x, f) => {
                l.clan_account_id == Ft.k_CreatorHomeAll
                  ? c({
                      ...l,
                      featured_appids: [...(l.featured_appids || []), f],
                      featured_creator_clan_account_id: [
                        ...(l.featured_creator_clan_account_id || []),
                        x,
                      ],
                    })
                  : c({
                      ...l,
                      featured_appids: [...(l.featured_appids || []), f],
                    });
              },
              [l],
            ),
            g = (0, p.useMemo)(() => {
              if (l.clan_account_id == Ft.k_CreatorHomeAll) {
                const x = new Set();
                t.forEach((_) =>
                  x.add(new mt.b(_.clan_steamid).GetAccountID()),
                );
                const f = new Array();
                return (
                  x.forEach((_) => {
                    const C = Je.ac.GetClanInfoByClanAccountID(_);
                    f.push({
                      name: C?.group_name || "" + _,
                      key: "clanid" + _,
                      contents: (0, e.jsx)(we.tH, {
                        children: (0, e.jsx)(ln, {
                          creatorHomeClanAccountID: _,
                          fnAddAppToFeaturedAppList: d,
                          baseGameAppID: o,
                          rgFeaturedList: l.featured_appids,
                        }),
                      }),
                    });
                  }),
                  f
                );
              }
              return null;
            }, [o, d, l.clan_account_id, l.featured_appids, t]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { children: (0, a.we)("#Create_Home_Desc") }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("div", {
                className: it.EventEditorTextTitle,
                children: (0, a.we)("#Create_Home_SelectedSource"),
              }),
              (0, e.jsx)(Wn, {
                rgCreatorHomes: t,
                oFeatured: l,
                fnSetFeatured: c,
              }),
              (0, e.jsx)("div", {
                style: { display: "flex", flexDirection: "column" },
                className: it.EventDefaultRowContainer,
                children: l.clan_account_id
                  ? (0, e.jsx)(e.Fragment, {
                      children:
                        l.clan_account_id > 0
                          ? (0, e.jsx)(ln, {
                              creatorHomeClanAccountID: l.clan_account_id,
                              fnAddAppToFeaturedAppList: d,
                              baseGameAppID: o,
                              rgFeaturedList: l.featured_appids,
                            })
                          : (0, e.jsx)(Ps.V, { tabs: g }),
                    })
                  : (0, e.jsx)("span", {
                      children: (0, a.we)("#Create_Home_Selected_None"),
                    }),
              }),
              (0, e.jsxs)("div", {
                className: Ht().SelectedSource,
                children: [
                  !!(
                    l.clan_account_id ||
                    l.featured_creator_clan_account_id?.length > 0
                  ) &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(on, {
                          rgFeaturedList: l.featured_appids,
                          strFeaturedFirstAppToken: l.featured_first_app_token,
                          rgFeaturedClanList:
                            l.featured_creator_clan_account_id,
                          fnSetFeatureAppAndClans: (x, f, _) => {
                            c({
                              ...l,
                              featured_appids: x,
                              featured_creator_clan_account_id: f,
                              featured_first_app_token: _,
                            });
                          },
                        }),
                        (0, e.jsx)(jr, { oFeatured: l, fnSetFeatured: c }),
                      ],
                    }),
                  (0, e.jsx)(It, { oFeatured: l }),
                ],
              }),
            ],
          });
        }
        function It(s) {
          const { oFeatured: t } = s,
            [n, r] = (0, p.useState)(() => t?.featured_appids?.length || 0);
          (0, p.useEffect)(() => {
            n < (t?.featured_appids?.length || 0) &&
              r(t.featured_appids.length);
          }, [t, n]);
          const o = zs(t?.featured_appids?.length || 0, n),
            l =
              !t?.featured_first_app_token ||
              t?.featured_first_app_token == "#Featured_App_None";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("input", {
                type: "hidden",
                name: "app[featured_creator_home][clan_account_id]",
                value: t?.clan_account_id || 0,
              }),
              (0, e.jsx)(
                "input",
                {
                  type: "hidden",
                  name: "app[featured_creator_home][featured_first_app_token]",
                  value: l ? void 0 : t?.featured_first_app_token,
                },
                l ? "empty" : "feating",
              ),
              t?.clan_account_id
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: "app[featured_creator_home][sort_order]",
                        value: t.sort_order || "salesrank",
                      }),
                      t.featured_appids?.map((c, d) =>
                        (0, e.jsxs)(
                          p.Fragment,
                          {
                            children: [
                              (0, e.jsx)("input", {
                                type: "hidden",
                                name: `app[featured_creator_home][featured_appids][${d}]`,
                                value: c,
                              }),
                              (0, e.jsx)("input", {
                                type: "hidden",
                                name: `app[featured_creator_home][featured_creator_clan_account_id][${d}]`,
                                value: t.featured_creator_clan_account_id?.[d],
                              }),
                            ],
                          },
                          "app" + c,
                        ),
                      ),
                    ],
                  })
                : (0, e.jsx)("input", {
                    type: "hidden",
                    name: "app[featured_creator_home][sort_order]",
                    value: void 0,
                  }),
              o.map((c) =>
                (0, e.jsxs)(
                  p.Fragment,
                  {
                    children: [
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[featured_creator_home][featured_appids][${c}]`,
                        value: void 0,
                      }),
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[featured_creator_home][featured_creator_clan_account_id][${c}]`,
                        value: void 0,
                      }),
                    ],
                  },
                  "nullinput" + c,
                ),
              ),
            ],
          });
        }
        const ns = { include_assets: !0, include_release: !0 };
        function xs(s) {
          const {
              creatorHomeClanAccountID: t,
              rgFeaturedList: n,
              fnAddAppToFeaturedAppList: r,
              baseGameAppID: o,
            } = s,
            l = (0, Rt.a)(),
            [c, d] = (0, p.useState)(null),
            g = (0, Gt.id)(l, t, !0),
            x = (0, ft.zX)(g, ns),
            f = (0, p.useMemo)(
              () =>
                x != ft.Sq && g
                  ? g
                      .filter((_) => _ != o)
                      .map((_) => {
                        const C = Qt.A.Get().GetApp(_);
                        return {
                          value: _,
                          label: `${C ? C.GetName() : ""} (Appid: ${_})`,
                        };
                      })
                  : [],
              [g, x, o],
            );
          return !g || x == ft.Sq
            ? (0, e.jsx)(ss.t, { size: "small", string: (0, a.we)("#Loading") })
            : (0, e.jsxs)("div", {
                className: Ht().ManualFeatures,
                children: [
                  (0, e.jsx)("div", {
                    className: "DialogLabel",
                    children: (0, a.we)("#Create_Home_ManuallyFeature"),
                  }),
                  (0, e.jsx)("div", {
                    children: (0, a.we)("#Create_Home_Select_App_Desc"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Ht().FeatureSelectItemCtn,
                    children: [
                      (0, e.jsx)(kt.Ay, {
                        className: "react-select-container",
                        classNamePrefix: "react-select",
                        isSearchable: !0,
                        isMulti: !1,
                        placeholder: (0, a.we)("#Create_Home_Select_App"),
                        options: f,
                        value: f.find((_) => _.value === c),
                        onChange: (_) => d(_.value),
                        controlShouldRenderValue: !!c,
                      }),
                      (0, e.jsx)(S.jn, {
                        disabled: !c,
                        onClick: () => {
                          (!n || n.findIndex((_) => _ === c) == -1) && r(t, c),
                            d(null);
                        },
                        children: (0, a.we)("#Create_Home_Add_App"),
                      }),
                    ],
                  }),
                ],
              });
        }
        function on(s) {
          const {
            rgFeaturedList: t,
            rgFeaturedClanList: n,
            fnSetFeatureAppAndClans: r,
            strFeaturedFirstAppToken: o,
          } = s;
          return (0, e.jsxs)("div", {
            className: Ht().ManualFeatures,
            children: [
              (0, e.jsx)("div", {
                className: "DialogLabel",
                children: (0, a.we)("#Create_Home_App_Featured"),
              }),
              (0, e.jsxs)("div", {
                style: { display: "flex", flexDirection: "column" },
                className: it.EventDefaultRowContainer,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, a.we)("#Create_Home_App_Featured_Desc"),
                  }),
                  !t || t.length == 0
                    ? (0, e.jsx)("div", {
                        children: (0, a.we)("#Create_Home_No_Featured"),
                      })
                    : (0, e.jsx)(Vt.A, {
                        items: t || [],
                        render: (l, c) =>
                          (0, e.jsx)(
                            Ws,
                            {
                              appid: l,
                              creatorClanID: n?.[c],
                              elEditor:
                                c == 0
                                  ? (0, e.jsx)(ks, {
                                      strFeaturedFirstAppToken: o,
                                      fnSetFeaturedFirstAppToken: (d) =>
                                        r(t, n, d),
                                    })
                                  : void 0,
                            },
                            "row" + l,
                          ),
                        onDelete: (l) => {
                          const c = [...t];
                          c.splice(l, 1);
                          let d;
                          n && ((d = [...n]), d.splice(l, 1)), r(c, d, o);
                        },
                        onMove: (l, c) => {
                          const d = [...t];
                          (0, Ms.yY)(d, l, c);
                          let g;
                          n && ((g = [...n]), (0, Ms.yY)(g, l, c)), r(d, g, o);
                        },
                      }),
                ],
              }),
            ],
          });
        }
        function ks(s) {
          const { strFeaturedFirstAppToken: t, fnSetFeaturedFirstAppToken: n } =
              s,
            r = (0, p.useMemo)(() => {
              const o = new Array();
              return (
                o.push({ label: (0, a.we)("#Featured_App_None"), data: null }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_Next"),
                  data: "#Featured_App_Reason_Next",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_Franchise"),
                  data: "#Featured_App_Reason_Franchise",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_Similar"),
                  data: "#Featured_App_Reason_Similar",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_Upcoming"),
                  data: "#Featured_App_Reason_Upcoming",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_YouMight"),
                  data: "#Featured_App_Reason_YouMight",
                }),
                o.push({
                  label: (0, a.we)("#Featured_App_Reason_LatestEdition"),
                  data: "#Featured_App_Reason_LatestEdition",
                }),
                o
              );
            }, []);
          return (0, e.jsx)("div", {
            className: Ht().PageSelect,
            children: (0, e.jsx)(S.m, {
              label: (0, a.we)("#Featured_App_Name"),
              tooltip: (0, a.we)("#Featured_App_Tooltip"),
              rgOptions: r,
              selectedOption: t || null,
              onChange: (o) => {
                n(o.data);
              },
            }),
          });
        }
        function Ws(s) {
          const { appid: t, elEditor: n, creatorClanID: r } = s,
            [o] = (0, ft.t7)(t, ns),
            l = (0, p.useMemo)(() => ({ id: t, type: "game" }), [t]),
            c = (0, p.useMemo)(() => Ls(r), [r]);
          return (0, e.jsxs)("div", {
            className: Ht().AppRowCtn,
            children: [
              o
                ? (0, e.jsx)("div", {
                    className: Ht().CapsuleCtn,
                    children: (0, e.jsx)(Ye.W, {
                      capsule: l,
                      imageType: "header",
                      bShowParentApp: !1,
                      bHideStoreHover: !0,
                      bPreferAssetWithoutOverride: !1,
                    }),
                  })
                : (0, e.jsxs)("div", {
                    className: Ht().MissingCapsuleCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, a.we)("#Create_Home_Missing_Capsule"),
                      }),
                      (0, e.jsxs)("div", { children: ["appid: (", t, ")"] }),
                    ],
                  }),
              !!c &&
                (0, e.jsxs)("div", {
                  className: Ht().CreatorHomeCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, a.we)("#Create_Home_App_FeaturedSource"),
                    }),
                    (0, e.jsx)(fs.hA, {
                      creatorID: c,
                      bShowTagline: !1,
                      bHideCreatorType: !0,
                      bSmallFormat: !0,
                      bHideFollowButton: !0,
                    }),
                  ],
                }),
              n,
            ],
          });
        }
        function Ls(s) {
          return s
            ? {
                name:
                  Je.ac.GetClanInfoByClanAccountID(s)?.group_name || `(${s})`,
                clan_account_id: s,
                type: "developer",
              }
            : null;
        }
        function Wn(s) {
          const { rgCreatorHomes: t, oFeatured: n, fnSetFeatured: r } = s,
            o = (0, p.useMemo)(() => {
              const l = new Set();
              t.forEach((d) => l.add(new mt.b(d.clan_steamid).GetAccountID()));
              const c = new Array();
              return (
                c.push({
                  label: (0, a.we)("#Create_Home_None_Selected"),
                  data: Ft.k_CreatorHomeNone,
                  tooltip: (0, a.we)("#Create_Home_None_Selected_ttip"),
                }),
                l.forEach((d) => {
                  const g = Je.ac.GetClanInfoByClanAccountID(d);
                  c.push({ label: g?.group_name || `(${d})`, data: d });
                }),
                c.length > 2 &&
                  c.push({
                    label: (0, a.we)("#Create_Home_All_Creators") + " (?)",
                    data: Ft.k_CreatorHomeAll,
                    tooltip: (0, a.we)("#Create_Home_All_Creators_ttip"),
                  }),
                c
              );
            }, [t]);
          return (0, e.jsx)("div", {
            className: Ht().PageSelect,
            children: (0, e.jsx)(S.m, {
              rgOptions: o,
              selectedOption: n?.clan_account_id || 0,
              onChange: (l) => {
                l.data != n?.clan_account_id &&
                  r({
                    clan_account_id: l.data,
                    featured_appids: void 0,
                    featured_creator_clan_account_id: void 0,
                    sort_order: "salesrank",
                  });
              },
            }),
          });
        }
        function ln(s) {
          const { creatorHomeClanAccountID: t } = s,
            [n, r] = (0, p.useState)(() => Ls(t));
          return (
            (0, p.useEffect)(() => {
              n?.clan_account_id != t && r(Ls(t));
            }, [t, n?.clan_account_id]),
            (0, e.jsxs)("div", {
              className: Ht().SelectedSource,
              children: [
                (0, e.jsx)(fs.hA, {
                  creatorID: n,
                  bShowTagline: !0,
                  bHideCreatorType: !0,
                  bSmallFormat: !0,
                  bHideFollowButton: !0,
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)(xs, { ...s }),
              ],
            })
          );
        }
        function jr(s) {
          const { oFeatured: t, fnSetFeatured: n } = s;
          return (0, e.jsxs)(S.G5, {
            children: [
              (0, e.jsx)("br", {}),
              (0, e.jsx)("div", {
                className: "DialogLabel",
                children: (0, a.we)("#Create_Home_SortBy"),
              }),
              (0, e.jsxs)("div", {
                style: { display: "flex", flexDirection: "column" },
                className: it.EventDefaultRowContainer,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, a.we)("#Create_Home_SortBy_Desc"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Ht().SortOptionsCtn,
                    children: [
                      (0, e.jsx)(S.Od, {
                        checked: t.sort_order == "salesrank",
                        controlled: !0,
                        onChange: (r) =>
                          r && n({ ...t, sort_order: "salesrank" }),
                        label: (0, a.we)("#Create_Home_SortBy_Sales"),
                        tooltip: (0, a.we)("#Create_Home_SortBy_Sales_ttip"),
                      }),
                      (0, e.jsx)(S.Od, {
                        checked: t.sort_order == "releasedate",
                        controlled: !0,
                        onChange: (r) =>
                          r && n({ ...t, sort_order: "releasedate" }),
                        label: (0, a.we)("#Create_Home_SortBy_Release"),
                        tooltip: (0, a.we)("#Create_Home_SortBy_Release_ttip"),
                      }),
                      (0, e.jsx)(S.Od, {
                        checked: t.sort_order == "tags",
                        controlled: !0,
                        onChange: (r) => r && n({ ...t, sort_order: "tags" }),
                        label: (0, a.we)("#Create_Home_SortBy_Tag"),
                        tooltip: (0, a.we)("#Create_Home_SortBy_Tag_ttip"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var bn = i(71742),
          Kt = i(72604),
          ps = i(20194),
          Gn = i(41735),
          $t = i.n(Gn),
          Yt = i(67705);
        function Vn(s) {
          const { data: t, isLoading: n } = (0, ps.I)({
            queryKey: ["useAppDLCListPartnerSite", s],
            queryFn: async () => {
              const r = `${qe.TS.PARTNER_BASE_URL}apps/ajaxgetdlc`,
                o = { appid: s, sessionid: (0, Yt.KC)() },
                l = await $t().get(r, { params: o });
              if (l?.data?.success != Kt.R)
                throw (
                  "Fail to load DLC list for appid " +
                  s +
                  " with error: " +
                  l?.data?.message
                );
              return l.data.dlcids || [];
            },
            enabled: !!s,
          });
          return n ? null : t;
        }
        var An = i(61266),
          vn = i(69515);
        function Kn(s) {
          const { rgDLCSettings: t, parentAppID: n, dlcAppID: r } = s,
            [o, l] = (0, p.useState)(() => t);
          return (0, e.jsxs)(An.m, {
            children: [
              (0, e.jsx)("h2", {
                children: (0, a.we)("#DLC_Dependency_Title"),
              }),
              (0, e.jsx)("hr", {}),
              (0, e.jsx)("p", { children: (0, a.we)("#DLC_Dependency_Desc") }),
              (0, e.jsx)(Jn, {
                parentAppID: n,
                dlcAppID: r,
                fnSelectedDLCAppID: (c) => {
                  o.findIndex((d) => d.dlc_appid == c) == -1 &&
                    l([...o, { dlc_appid: c, config: "dlc_required" }]);
                },
              }),
              (0, e.jsx)(Yn, { rgDLCInfo: o, fnSetDLCInfo: l }),
              (0, e.jsx)($n, { rgDLCInfo: o }),
            ],
          });
        }
        function $n(s) {
          const { rgDLCInfo: t } = s,
            [n, r] = (0, p.useState)(() => t?.length || 0);
          (0, p.useEffect)(() => {
            t?.length > n && r(t.length);
          }, [n, t]);
          const o = (0, p.useMemo)(() => {
            const l = new Array();
            for (let c = t.length || 0; c < n; ++c)
              l.push(
                (0, e.jsx)(
                  "input",
                  {
                    type: "hidden",
                    name: `app[dlc_dependency][${c}]`,
                    value: void 0,
                  },
                  "dependancy_del" + c,
                ),
              );
            return l;
          }, [n, t]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              t?.map((l, c) =>
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[dlc_dependency][${c}][dlc_appid]`,
                        value: l.dlc_appid,
                      }),
                      (0, e.jsx)("input", {
                        type: "hidden",
                        name: `app[dlc_dependency][${c}][config]`,
                        value: l.config,
                      }),
                    ],
                  },
                  "dependency_input" + l.dlc_appid + "_" + c,
                ),
              ),
              o,
            ],
          });
        }
        const yn = { include_assets: !0, include_release: !0 };
        function Yn(s) {
          const { rgDLCInfo: t, fnSetDLCInfo: n } = s;
          return (0, e.jsx)(Vt.A, {
            items: t,
            render: (r, o) =>
              (0, e.jsx)(
                Qn,
                {
                  dependency: r,
                  index: o,
                  fnSetDLCInfo: (l) => {
                    const c = [...t];
                    (0, bn.wT)(
                      c[o].dlc_appid == l.dlc_appid,
                      "AppID don't match, what gives",
                    ),
                      console.log(),
                      (c[o].config = l.config),
                      n(c);
                  },
                },
                "row" + r.dlc_appid,
              ),
            onDelete: (r) => {
              const o = [...t];
              o.splice(r, 1), n(o);
            },
            onReorder: (r) => n([...r]),
          });
        }
        const Xn = [
          {
            label: (0, a.we)("#DLC_Dependency_Require"),
            tooltip: (0, a.we)("#DLC_Dependency_Require_ttip"),
            data: "dlc_required",
          },
          {
            label: (0, a.we)("#DLC_Dependency_Recommended"),
            tooltip: (0, a.we)("#DLC_Dependency_Recommended_ttip"),
            data: "dlc_recommended",
          },
        ];
        function Qn(s) {
          const { dependency: t, fnSetDLCInfo: n } = s;
          return (0, e.jsx)(Ws, {
            appid: t.dlc_appid,
            elEditor: (0, e.jsx)("div", {
              className: vn.RelationshipType,
              children: (0, e.jsx)(S.m, {
                label: (0, a.we)("#DLC_Dependency_Relationship"),
                rgOptions: Xn,
                selectedOption: t.config,
                onChange: (r) => {
                  if (t.config != r.data) {
                    const o = { ...t };
                    (o.config = r.data), n(o);
                  }
                },
              }),
            }),
          });
        }
        function Jn(s) {
          const { parentAppID: t, fnSelectedDLCAppID: n, dlcAppID: r } = s,
            [o, l] = (0, p.useState)(null),
            c = Vn(t),
            d = (0, ft.zX)(c, yn),
            g = (0, p.useMemo)(
              () =>
                d != ft.Sq && c
                  ? c
                      .filter((x) => x != r)
                      .map((x) => {
                        const f = Qt.A.Get().GetApp(x);
                        return {
                          value: x,
                          label: `${f ? f.GetName() : ""} (Appid: ${x})`,
                        };
                      })
                  : [],
              [d, c, r],
            );
          return !c || d == ft.Sq
            ? (0, e.jsx)(ss.t, { size: "small", string: (0, a.we)("#Loading") })
            : (0, e.jsxs)("div", {
                className: vn.SelectorRow,
                children: [
                  (0, e.jsx)(kt.Ay, {
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isSearchable: !0,
                    isMulti: !1,
                    placeholder: (0, a.we)("#Create_Home_Select_App"),
                    options: g,
                    value: g.find((x) => x.value === o),
                    onChange: (x) => l(x.value),
                  }),
                  (0, e.jsx)(S.$n, {
                    disabled: !o,
                    onClick: () => {
                      n(o), l(void 0);
                    },
                    children: (0, a.we)("#DLC_Dependency_Select"),
                  }),
                ],
              });
        }
        var st = i(71714),
          Bs = i(88003),
          Ns = i(82734);
        const Pr = 0,
          Zn = 1,
          qn = 2,
          er = 3,
          tr = 4,
          sr = 5;
        var Gs = i(3367),
          nr = i(16119);
        function rr(s) {
          const { rgDLC: t, parentappid: n } = s,
            [r, o] = p.useState(t ? [...t] : []),
            [l, c] = p.useState([]);
          p.useEffect(() => {
            o(s?.rgDLC ? [...s.rgDLC] : []);
          }, [s]);
          const d = (_) => {
            const C = [...r];
            (C[_].bDeleted = !0), o(C);
          };
          p.useEffect(() => {
            const _ = Array();
            let C = 0;
            for (
              r.forEach((T) => {
                T.bDeleted ||
                  (_.push(
                    p.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${C}][appid]`,
                      value: T.appid,
                    }),
                  ),
                  _.push(
                    p.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${C}][itemid]`,
                      value: T.itemid,
                    }),
                  ),
                  _.push(
                    p.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${C}][highlight]`,
                      value: C == 0 && T.highlight ? T.highlight : "",
                    }),
                  ),
                  _.push(
                    p.createElement("input", {
                      type: "hidden",
                      name: `app[related_items][dlc][${C}][highlight_reason]`,
                      value:
                        C == 0 && T.highlight_reason ? T.highlight_reason : "",
                    }),
                  ),
                  C++);
              });
              C < t.length;
            ) {
              let T = p.createElement("input", {
                type: "hidden",
                name: `app[related_items][dlc][${C}]`,
                value: "",
              });
              _.push(T), C++;
            }
            c(_);
          }, [t.length, r]);
          const g = (_, C) => {
              if (isNaN(_) || isNaN(C)) return;
              const T = [...r];
              T.splice(C, 0, T.splice(_, 1)[0]), o(T);
            },
            x = (_, C) => {
              const T = [...r];
              (T[_].highlight = C.highlight),
                (T[_].highlight_reason = C.highlight_reason),
                o(T);
            },
            f = (0, e.jsx)(S.$n, {
              className: st.AddDLCButton,
              onClick: (_) =>
                (0, Bs.pg)(
                  (0, e.jsx)(ar, {
                    rgDLCItems: r,
                    parentAppID: n,
                    onSelected: (C, T, U, ye) => {
                      const ne = { itemid: "" + T, appid: "" + C, name: U },
                        Q = ye ? [ne, ...r] : [...r, ne];
                      o(Q);
                    },
                  }),
                  (0, Ns.uX)(_),
                ),
              children: (0, a.we)("#StoreAdmin_Add_DLC") + "...",
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              f,
              (0, e.jsx)(Vt.A, {
                items: r,
                onDelete: (_) => d(_),
                onMove: (_, C) => g(_, C),
                render: (_, C) =>
                  (0, e.jsx)(
                    or,
                    { item: _, index: C, fnUpdateHighlight: x },
                    _?.itemid ?? _?.appid,
                  ),
              }),
              ...l,
            ],
          });
        }
        function ar(s) {
          const {
              closeModal: t,
              rgDLCItems: n,
              onSelected: r,
              parentAppID: o,
            } = s,
            l = Gs.c6.qI,
            [c, d] = p.useState(null),
            g = (_, C) => {
              d({ appid: _, itemid: C });
            },
            [x] = (0, ft.G6)(c?.appid, l, {
              include_basic_info: !0,
              include_assets: !0,
            }),
            f = p.useCallback(
              (_) => {
                r(c?.appid, c?.itemid, x?.GetName(), _);
              },
              [c, r, x],
            );
          return (0, e.jsxs)(E.eV, {
            title: (0, a.we)("#StoreAdmin_Add_DLC"),
            closeModal: t,
            className: st.AddDLCDialog,
            children: [
              (0, e.jsx)(S.nB, {
                children: (0, e.jsxs)("div", {
                  className: st.AppSelectCtn,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, a.we)("#StoreAdmin_Add_DLC_Desc"),
                    }),
                    (0, e.jsx)(nr.h, {
                      fnSetItemID: g,
                      itemType: l,
                      fnFilterID: (_) =>
                        n.findIndex((C) => parseInt(C.appid) == _) == -1,
                      bIncludeRetired: !1,
                      bOnlyDLC: !0,
                      rgParentAppIDs: [o],
                      bRunQueryOnLoad: !0,
                    }),
                    !!c?.appid &&
                      (0, e.jsxs)("div", {
                        className: st.DLCDisplayContainer,
                        children: [
                          (0, e.jsx)("div", {
                            children: x?.GetName()
                              ? x.GetName() + " (" + x.GetID() + ")"
                              : c.appid,
                          }),
                          (0, e.jsx)("img", {
                            src:
                              x?.GetAssets().GetSmallCapsuleURL() ||
                              x?.GetAssets().GetHeaderURL(),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, e.jsxs)(S.wi, {
                className: st.AddDLCFooter,
                children: [
                  (0, e.jsx)(S.jn, {
                    disabled: !c,
                    onClick: () => {
                      f(!0), t && t();
                    },
                    children: (0, a.we)("#StoreAdmin_Add_To_Top"),
                  }),
                  (0, e.jsx)(S.$n, {
                    disabled: !c,
                    onClick: () => {
                      f(!1), t && t();
                    },
                    children: (0, a.we)("#StoreAdmin_Add_To_Bottom"),
                  }),
                  (0, e.jsx)(S.$n, {
                    onClick: () => {
                      t && t();
                    },
                    children: (0, a.we)("#Button_Cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function or(s) {
          const { item: t, index: n, fnUpdateHighlight: r } = s,
            o = !t.bRetired && !t.bUnlisted,
            l = n == 0 && o,
            c = p.useMemo(
              () => [
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_NoneSelected"),
                  data: "",
                },
                { label: (0, a.we)("#StoreAdmin_Highlight_New"), data: Zn },
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_ComingSoon"),
                  data: qn,
                },
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_PlayerFavorite"),
                  data: er,
                },
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_Recommended"),
                  data: tr,
                },
                {
                  label: (0, a.we)("#StoreAdmin_Highlight_NewPlayer"),
                  data: sr,
                },
              ],
              [],
            ),
            d = () => {
              (t.highlight = !t.highlight), r(n, t);
            },
            g = (f) => {
              (t.highlight_reason = f.data), r(n, t);
            };
          if (!t) return null;
          const x = (0, D.A)(
            st.DLCItem,
            t.bDeleted && st.DLCItemDeleted,
            !o && st.DLCItemNotHighlightEligible,
          );
          return (0, e.jsxs)("div", {
            className: x,
            children: [
              (0, e.jsx)("a", {
                href: Y.TS.PARTNER_BASE_URL + "apps/landing/" + t.appid,
                children: t.name || t.appid,
              }),
              t.bRetired &&
                (0, e.jsxs)("span", {
                  className: st.LabelNotHighlightEligible,
                  children: ["(", (0, a.we)("#StoreAdmin_Retired"), ")"],
                }),
              !t.bRetired &&
                t.bUnlisted &&
                (0, e.jsxs)("span", {
                  className: st.LabelNotHighlightEligible,
                  children: ["(", (0, a.we)("#StoreAdmin_Unlisted"), ")"],
                }),
              l &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(S.Yh, {
                      className: st.Highlight,
                      checked: t.highlight,
                      onClick: d,
                      label: (0, a.we)("#StoreAdmin_Highlight_Checkbox"),
                    }),
                    t.highlight &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            className: st.HighlightDropDownLabel,
                            children: (0, a.we)("#StoreAdmin_Highlight_Reason"),
                          }),
                          (0, e.jsx)("div", {
                            className: st.HighlightDropDown,
                            children: (0, e.jsx)(S.ZU, {
                              rgOptions: c,
                              onChange: g,
                              selectedOption: t.highlight_reason
                                ? parseInt("" + t.highlight_reason)
                                : "",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          });
        }
        var m = i(30935);
        function u(s) {
          const { rgPinnedBundles: t, rgEnabledBundles: n } = s,
            [r, o] = (0, p.useState)(t),
            l = n.filter(
              (c) => r.findIndex((d) => d.bundleid === c.bundleid) === -1,
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(y, {
                pinnedBundles: r,
                unpinnedBundles: l,
                setPinnedBundles: o,
              }),
              (0, e.jsx)(h, {
                pinnedBundles: r,
                nInitialPinnedBundles: t.length,
              }),
            ],
          });
        }
        function h(s) {
          const { pinnedBundles: t, nInitialPinnedBundles: n } = s;
          let r = 0,
            o = [];
          for (; r < Math.max(n, t.length); ) {
            if (r < t.length) {
              const l = t[r];
              o.push({ index: r, value: l.bundleid });
            } else o.push({ index: r, value: "" });
            r++;
          }
          return (0, e.jsx)("div", {
            className: m.PinnedBundlesHiddenInputs,
            children: o.map((l) =>
              (0, e.jsx)(
                "input",
                {
                  type: "hidden",
                  name: `app[pinned_bundles][${l.index}]`,
                  value: l.value,
                },
                l.index,
              ),
            ),
          });
        }
        function y(s) {
          const {
              pinnedBundles: t,
              unpinnedBundles: n,
              setPinnedBundles: r,
            } = s,
            o = (d) => {
              const g = [...t];
              g.splice(d, 1), r(g);
            },
            l = (d, g) => {
              const x = new Array(...t),
                [f] = x.splice(d, 1);
              x.splice(g, 0, f), r(x);
            },
            c = (d) => {
              const g = n.find((f) => f.bundleid === d.value);
              if (g === void 0) return;
              const x = t.concat([g]);
              r(x);
            };
          return (0, e.jsxs)("div", {
            className: m.PinnedBundlesEditor,
            children: [
              (0, e.jsx)(j, { unpinnedBundles: n, onChange: c }),
              (0, e.jsx)(V, { pinnedBundles: t, onDelete: o, onMove: l }),
            ],
          });
        }
        function j(s) {
          const { unpinnedBundles: t, onChange: n } = s,
            r = t.map((o) => ({ value: o.bundleid, label: o.name }));
          return (0, e.jsx)(kt.Ay, {
            className: "react-select-container",
            classNamePrefix: "react-select",
            isSearchable: !0,
            isMulti: !1,
            placeholder: (0, a.we)("#PinnedBundles_Placeholder"),
            options: r,
            onChange: n,
            controlShouldRenderValue: !1,
            noOptionsMessage: () => (0, a.we)("#PinnedBundles_NoOptions"),
          });
        }
        function V(s) {
          const { pinnedBundles: t, onDelete: n, onMove: r } = s;
          if (t.length === 0)
            return (0, e.jsx)("div", {
              className: m.EmptyPinnedBundleList,
              children: (0, a.we)("#PinnedBundles_NoPinnedBundles"),
            });
          const o = (l, c) =>
            (0, e.jsx)("div", {
              className: m.PinnedBundleRow,
              children: (0, e.jsxs)("a", {
                href: `${Y.TS.PARTNER_BASE_URL}bundles/view/${l.bundleid}`,
                children: [l.name, " (", l.bundleid, ")"],
              }),
            });
          return (0, e.jsx)(Vt.A, {
            items: t,
            onDelete: n,
            onMove: r,
            render: o,
          });
        }
        var M = i(93357);
        function J() {
          const s = new Map();
          return (
            (0, Yt.Tc)("current_prices", "application_config").forEach((n) => {
              s.set(n.packageid, n);
            }),
            s
          );
        }
        function te() {
          const [s, t] = (0, p.useState)(() => J());
          return s;
        }
        var q = i(54806),
          ge = i(58632),
          je = i.n(ge),
          de = i(34592),
          Ce = i(98609);
        const Le = 20,
          ut = 900 * 1e3,
          gt = "PackagePriceChanges",
          xt = new Map();
        async function wt(s) {
          const t = { packageids: s.join(",") },
            n = await $t().get(
              `${Ce.TS.PARTNER_BASE_URL}pricing/admin/packagepricechanges`,
              { params: t, withCredentials: !0 },
            );
          if (!n || n.status != 200 || n.data?.success != Kt.R)
            throw `Load package price changes failed ${((0, de.H))(n).strErrorMsg}`;
          const r = new Map();
          return (
            n.data.packages?.forEach((o) => r.set(o.packageid, o)),
            s.map(
              (o) =>
                r.get(o) || { packageid: o, total_changes: 0, changes: [] },
            )
          );
        }
        const dt = new (je())((s) => wt(s), { cache: !1, maxBatchSize: Le });
        function Ut(s, t) {
          const n = new Map();
          return (
            t.forEach((r, o) => {
              r.data
                ? n.set(r.data.packageid, r.data)
                : r.isError &&
                  n.set(s[o], { packageid: s[o], bLoadFailed: !0 });
            }),
            n.size > 0 ? n : xt
          );
        }
        function Ot(s) {
          const t = (0, p.useMemo)(
              () => Array.from(new Set(s)).filter(Boolean),
              [s],
            ),
            n = (0, p.useCallback)((r) => Ut(t, r), [t]);
          return (0, q.E)({
            queries: t.map((r) => ({
              queryKey: [gt, r],
              queryFn: () => dt.load(r),
              staleTime: ut,
              retry: 1,
            })),
            combine: n,
          });
        }
        class zt {
          m_mapPackageToPartners = new Map();
          GetMap() {
            return this.m_mapPackageToPartners;
          }
          static s_Singleton;
          static Get() {
            return (
              zt.s_Singleton ||
                ((zt.s_Singleton = new zt()), zt.s_Singleton.Init()),
              zt.s_Singleton
            );
          }
          constructor() {}
          Init() {
            (0, Yt.Tc)(
              "package_to_paid_partners",
              "application_config",
            ).forEach((n) => {
              this.m_mapPackageToPartners.has(n.packageid) ||
                this.m_mapPackageToPartners.set(n.packageid, new Array()),
                this.m_mapPackageToPartners.get(n.packageid).push(n.partnerid);
            });
          }
        }
        function Lt() {
          const [s, t] = (0, p.useState)(() => zt.Get().GetMap());
          return s;
        }
        function ds(s) {
          const t = Lt();
          return useMemo(() => {
            if (s) {
              const n = new Set();
              return (
                s.forEach((r) => {
                  if (t.has(r)) {
                    const o = t.get(r);
                    o.length <= 3 && o.forEach((l) => n.add(l));
                  }
                }),
                Array.from(n.values())
              );
            }
            return [];
          }, [s, t]);
        }
        var cn = i(8323),
          ms = i(54963),
          Ss = Object.defineProperty,
          rs = Object.getOwnPropertyDescriptor,
          ir = (s, t, n, r) => {
            for (
              var o = r > 1 ? void 0 : r ? rs(t, n) : t, l = s.length - 1, c;
              l >= 0;
              l--
            )
              (c = s[l]) && (o = (r ? c(t, n, o) : c(o)) || o);
            return r && o && Ss(t, n, o), o;
          };
        const jn = class Sn {
          m_rgMapProposal = new Map();
          m_nTotalItems = 0;
          m_proposalAddRemoveCallback = new cn.lu();
          GetProposals() {
            return Array.from(this.m_rgMapProposal.values());
          }
          GetProposalListChange() {
            return this.m_proposalAddRemoveCallback;
          }
          async LoadMoreProposal() {
            return (
              this.m_proposalAddRemoveCallback.Dispatch(this.GetProposals()), !1
            );
          }
          async RejectProposal(t, n, r) {
            let o = null;
            try {
              const l = new FormData();
              l.append("sessionid", (0, Yt.KC)()),
                l.append("packageid", "" + t),
                l.append("json", "1"),
                l.append("reason_code", n.join(",") || ""),
                l.append("email_message", r);
              const c = `${Ce.TS.PARTNER_BASE_URL}packages/rejectpricing`,
                d = await $t().post(c, l, { withCredentials: !0 });
              if (d.status == 200 && d.data?.success == Kt.R)
                return (
                  console.log(
                    `Proposal for package ${t} successfully rejected`,
                  ),
                  this.m_rgMapProposal.delete(t),
                  this.m_proposalAddRemoveCallback.Dispatch(
                    this.GetProposals(),
                  ),
                  !0
                );
              o = (0, de.H)(d);
            } catch (l) {
              o = (0, de.H)(l);
            }
            return (
              console.error(
                "CPriceProposalReviewRequiredStore::RejectProposal failed with " +
                  o.strErrorMsg,
                o,
              ),
              !1
            );
          }
          async AcceptProposal(t, n, r) {
            let o = null;
            try {
              const l = new FormData();
              l.append("sessionid", (0, Yt.KC)()),
                l.append("packageid", "" + t),
                l.append("json", "1"),
                l.append("proposalkey", "" + r),
                l.append("partner_will_publish", n ? "1" : "0");
              const c = `${Ce.TS.PARTNER_BASE_URL}packages/approvepricing`,
                d = await $t().post(c, l, { withCredentials: !0 });
              if (d.status == 200 && d.data?.success == Kt.R)
                return (
                  console.log(
                    `Proposal for package ${t} successfully accepted`,
                    d.data.output,
                  ),
                  this.m_rgMapProposal.delete(t),
                  this.m_proposalAddRemoveCallback.Dispatch(
                    this.GetProposals(),
                  ),
                  null
                );
              if (((o = (0, de.H)(d)), d?.data?.output))
                return (
                  console.log(
                    "CPriceProposalReviewRequiredStore::AcceptProposal message information:",
                    d.data.output,
                    o.strErrorMsg,
                  ),
                  d.data.output
                );
            } catch (l) {
              o = (0, de.H)(l);
            }
            return (
              console.error(
                "CPriceProposalReviewRequiredStore::AcceptProposal failed with " +
                  o.strErrorMsg,
                o,
              ),
              "generic failure"
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Sn.s_Singleton || (Sn.s_Singleton = new Sn()), Sn.s_Singleton
            );
          }
          constructor() {
            const t = (0, Yt.Tc)("proposed_prices", "application_config");
            this.ValidateInputDefault(t) &&
              t.forEach((n) => this.m_rgMapProposal.set(n.packageid, n)),
              (this.m_nTotalItems = (0, Yt.Tc)(
                "total_proposed_prices",
                "application_config",
              ));
          }
          ValidateInputDefault(t) {
            const n = t;
            return n && Array.isArray(n) && n.length > 0 && n[0].packageid > 0;
          }
        };
        ir([ms.oI], jn.prototype, "LoadMoreProposal", 1),
          ir([ms.oI], jn.prototype, "RejectProposal", 1),
          ir([ms.oI], jn.prototype, "AcceptProposal", 1);
        let dn = jn;
        function Ya() {
          const [s, t] = (0, p.useState)(() => dn.Get().GetProposals());
          return (0, ms.hL)(dn.Get().GetProposalListChange(), t), s;
        }
        function Er() {
          return {
            fnLoadMoreProposal: dn.Get().LoadMoreProposal,
            fnRejectProposal: dn.Get().RejectProposal,
            fnAcceptProposal: dn.Get().AcceptProposal,
          };
        }
        var Xa = i(45737),
          Pn = i.n(Xa),
          Qa = i(179),
          Mt = i(34104),
          us = i(33220),
          Dr = i(12932);
        const En = { include_release: !0 };
        var Tr = ((s) => (
          (s[(s.None = 0)] = "None"),
          (s[(s.Approved = 1)] = "Approved"),
          (s[(s.Rejected_CountryPricing = 2)] = "Rejected_CountryPricing"),
          (s[(s.Rejected_ExceedsMaxPrice = 3)] = "Rejected_ExceedsMaxPrice"),
          (s[(s.Rejected_PriceIncreaseTooHigh = 4)] =
            "Rejected_PriceIncreaseTooHigh"),
          (s[(s.Rejected_NoGuidelineMatch = 5)] = "Rejected_NoGuidelineMatch"),
          (s[(s.Rejected_MissingCurrencies = 6)] =
            "Rejected_MissingCurrencies"),
          (s[(s.Rejected_MissingRegions = 7)] = "Rejected_MissingRegions"),
          s
        ))(Tr || {});
        const Ja = {
          0: "None",
          1: "Auto-Approvable",
          2: "Contains Country-Override Pricing",
          3: "Exceeds Max Auto-Approvable Price",
          4: "Prices Above Guidance Thresholds",
          5: "No Guideline Match",
          6: "Missing Currencies",
          7: "Missing Regions",
        };
        var Ir = i(31069),
          Jt = i(3301),
          as = i(90247);
        const Dn = (0, Mt.yv)(),
          Wc = (0, Mt.X5)(),
          Tn = (0, as.R$)();
        function wr(s) {
          const t = new Array();
          return (
            Dn.forEach((n) => {
              s.proposed_prices.base_amounts.some(
                (r) => r.amount.currency_code == n,
              ) || t.push((0, us.M1)(n));
            }),
            Tn.forEach((n) => {
              const r = (0, Jt.de)(n);
              s.proposed_prices.region_amounts.some((o) => o.name == r) ||
                t.push((0, Jt.k8)(n));
            }),
            t
          );
        }
        function Za(s) {
          const t = new Array();
          return (
            s.proposed_prices.base_amounts.forEach((n) => {
              Dn.includes(n.amount.currency_code) ||
                (console.log(
                  "Unexpected currency code: " + n.amount.currency_code,
                  n,
                ),
                t.push(
                  `Currency Code: "${n.amount.currency_code}" with price in cents ${n.amount.amount}`,
                ));
            }),
            s.proposed_prices.region_amounts.forEach((n) => {
              Tn.includes((0, Jt.uF)(n.name.toUpperCase())) ||
                (console.log(
                  `Unexpected region code: ${n.name} and currency code ${n.amount.currency_code} with price in cents ${n.amount.amount}`,
                ),
                t.push(n.name));
            }),
            t
          );
        }
        function Mr(s, t, n) {
          if (t) {
            const r = (0, Jt.k8)(t);
            return s?.current_costs?.region_amounts?.find((o) => o.region == r)
              ?.amount.amount;
          }
          return s?.current_costs?.base_amounts?.find(
            (r) => r.currency_code == n,
          )?.amount;
        }
        function kr(s, t, n, r, o, l) {
          r.price * Ir.Ur < t.amount.amount
            ? o.push({
                strCurrency: n
                  ? (0, Jt.k8)(n)
                  : (0, us.pd)(t.amount.currency_code),
                nAmountCents: t.amount.amount,
                nPercent: Math.floor((t.amount.amount / r.price) * 100) - 100,
                nProposedPrice: t.amount.amount,
                nGuidancePrice: r.price,
                nOriginalPrice: Mr(s, n, t.amount.currency_code),
              })
            : r.price * Ir.yk > t.amount.amount &&
              l.push({
                strCurrency: n
                  ? (0, Jt.k8)(n)
                  : (0, us.pd)(t.amount.currency_code),
                nAmountCents: t.amount.amount,
                nPercent: 100 - Math.floor((t.amount.amount / r.price) * 100),
                nProposedPrice: t.amount.amount,
                nGuidancePrice: r.price,
                nOriginalPrice: Mr(s, n, t.amount.currency_code),
              });
        }
        function Lr(s, t, n, r) {
          const o = new Array(),
            l = new Array(),
            c = t.get(r.packageid);
          return (
            r.proposed_prices.base_amounts.map((d) => {
              const g =
                n.GetRecommendPrice(s, d.amount.currency_code) ||
                n.GetScaledRecommendedPrice(s, d.amount.currency_code);
              kr(c, d, null, g, o, l);
            }),
            r.proposed_prices.region_amounts.map((d) => {
              const g = (0, Jt.uF)(d.name),
                x =
                  n.GetRecommendPrice(s, Mt.CS, g) ||
                  n.GetScaledRecommendedPrice(s, Mt.CS, g);
              kr(c, d, g, x, o, l);
            }),
            {
              rgAboveThreshold: o.sort((d, g) => g.nPercent - d.nPercent),
              rgBelowThreshold: l.sort((d, g) => g.nPercent - d.nPercent),
            }
          );
        }
        function Br(s) {
          const t = Math.floor(Date.now() / 1e3);
          return s.BIsReleased() && s.GetReleaseDateRTime() + 720 * 60 * 60 > t;
        }
        var Ge = i(2897),
          Nr = i(91916),
          un = i(59490),
          In = i(1706),
          pt = i(15348);
        const qa = 720 * 60 * 60;
        function eo(s) {
          const { packageID: t, priceChanges: n } = s,
            r = n?.changes?.[0];
          return (0, e.jsxs)("div", {
            className: pt.PriceChangeSummary,
            children: [
              (0, e.jsx)(to, { priceChanges: n }),
              (0, e.jsx)("a", {
                href: `${Ce.TS.PARTNER_BASE_URL}packages/pricehistory/${t}`,
                target: "_blank",
                rel: "noreferrer",
                children: "Show Package Price History",
              }),
              !!r && (0, e.jsx)(so, { priceChanges: n }),
            ],
          });
        }
        function to(s) {
          const { priceChanges: t } = s;
          if (!t)
            return (0, e.jsx)("div", {
              className: pt.Pending,
              children: "Looking up published price changes...",
            });
          if (t.bLoadFailed)
            return (0, e.jsx)("div", {
              className: pt.LoadFailed,
              children: "Could not load published price changes",
            });
          const n = t.changes?.[0];
          if (!n)
            return (0, e.jsx)("div", {
              className: pt.Pending,
              children: "No previously published price change",
            });
          const r = Date.now() / 1e3 - n.time < qa;
          return (0, e.jsx)(pe.m9, {
            toolTipContent: (0, e.jsx)(no, { priceChanges: t }),
            direction: "right",
            nDelayShowMS: 150,
            children: (0, e.jsxs)("div", {
              className: (0, D.A)(pt.LastChange, r && pt.RecentChange),
              children: [
                "Price last published ",
                (0, a.TW)(n.time),
                " (",
                (0, a.Nm)(n.time),
                ")",
              ],
            }),
          });
        }
        function so(s) {
          const { priceChanges: t } = s,
            n = t.total_changes || 0;
          return (0, e.jsxs)("div", {
            className: pt.ChangeCount,
            children: [
              n,
              " published price ",
              n == 1 ? "change" : "changes",
              " total",
            ],
          });
        }
        function no(s) {
          const { priceChanges: t } = s,
            n = t.changes || [];
          return (0, e.jsxs)("div", {
            className: pt.PriceChangeToolTip,
            children: [
              (0, e.jsx)("div", {
                className: pt.ToolTipTitle,
                children: "Recent published price changes",
              }),
              (0, e.jsxs)("table", {
                className: pt.ChangeTable,
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      className: pt.ChangeHeader,
                      children: [
                        (0, e.jsx)("th", { children: "Published" }),
                        (0, e.jsx)("th", { children: "USD" }),
                        (0, e.jsx)("th", { children: "Change" }),
                        (0, e.jsx)("th", { children: "Currencies" }),
                        (0, e.jsx)("th", { children: "By" }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: n.map((r, o) =>
                      (0, e.jsx)(ro, { change: r }, `${r.time}_${o}`),
                    ),
                  }),
                ],
              }),
              t.total_changes > n.length &&
                (0, e.jsxs)("div", {
                  className: pt.ToolTipFooter,
                  children: [
                    "Showing the last ",
                    n.length,
                    " of ",
                    t.total_changes,
                    " published changes",
                  ],
                }),
              (0, e.jsx)("div", {
                className: pt.ToolTipFooter,
                children:
                  "Open the package price history for the full per-currency detail.",
              }),
            ],
          });
        }
        function ro(s) {
          const { change: t } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("tr", {
                className: pt.ChangeRow,
                children: [
                  (0, e.jsxs)("td", {
                    children: [
                      (0, a.TW)(t.time),
                      (0, e.jsx)("div", {
                        className: pt.TimeSince,
                        children: (0, a.Nm)(t.time),
                      }),
                    ],
                  }),
                  (0, e.jsx)("td", {
                    className: pt.Price,
                    children: t.usd_amount
                      ? (0, In.x)(t.usd_amount, Mt.CS)
                      : "--",
                  }),
                  (0, e.jsx)("td", { children: (0, e.jsx)(ao, { change: t }) }),
                  (0, e.jsxs)("td", {
                    className: pt.Currencies,
                    children: [
                      t.currency_count || 0,
                      !!t.country_count &&
                        (0, e.jsxs)("span", {
                          children: [" +", t.country_count, " country"],
                        }),
                    ],
                  }),
                  (0, e.jsx)("td", {
                    children: (0, e.jsx)(un.p, { accountID: t.account }),
                  }),
                ],
              }),
              !!t.notes &&
                (0, e.jsx)("tr", {
                  className: pt.ChangeRow,
                  children: (0, e.jsx)("td", {
                    className: pt.Notes,
                    colSpan: 5,
                    children: t.notes,
                  }),
                }),
            ],
          });
        }
        function ao(s) {
          const { change: t } = s;
          if (!t.usd_amount)
            return (0, e.jsx)("span", {
              className: pt.NoChange,
              children: "no USD price",
            });
          if (t.first_published)
            return (0, e.jsx)("span", {
              className: pt.FirstPrice,
              children: "first published price",
            });
          if (!t.usd_previous)
            return (0, e.jsx)("span", {
              className: pt.NoChange,
              children: "previous USD price unknown",
            });
          if (t.usd_amount == t.usd_previous)
            return (0, e.jsx)("span", {
              className: pt.NoChange,
              children: "USD unchanged",
            });
          const n = t.usd_amount > t.usd_previous,
            r = Math.round(
              ((t.usd_amount - t.usd_previous) / t.usd_previous) * 100,
            );
          return (0, e.jsxs)("span", {
            className: n ? pt.Increase : pt.Decrease,
            children: [
              n ? "\u25B2" : "\u25BC",
              " ",
              Math.abs(r),
              "% from ",
              (0, In.x)(t.usd_previous, Mt.CS),
            ],
          });
        }
        var Es = i(73191),
          Or = i(14358);
        function oo(s) {
          const { proposal: t, mapCurrentPrices: n, oGuideline: r } = s,
            { fnAcceptProposal: o } = Er(),
            [l, c] = (0, p.useState)(!1),
            [d, g] = (0, p.useState)(null),
            [x] = (0, ft.Gg)(t.packageid, En);
          return l
            ? (0, e.jsx)("div", {
                children: (0, e.jsx)(ss.t, {
                  string: "Accepting",
                  size: "small",
                  position: "center",
                }),
              })
            : (0, e.jsxs)("div", {
                className: Or.ActionsCtn,
                children: [
                  (0, e.jsxs)(S.$n, {
                    onClick: async () => {
                      c(!0),
                        o(t.packageid, t.partner_will_publish, t.proposal_key)
                          .then(g)
                          .finally(() => c(!1));
                    },
                    children: ["Publish Proposal ", d ? " (FORCE)" : ""],
                  }),
                  !!d &&
                    (0, e.jsxs)("div", {
                      children: [
                        "Publish failed with: ",
                        d,
                        ", publish again to bypass check",
                      ],
                    }),
                  (0, e.jsx)(S.$n, {
                    onClick: (f) => {
                      const _ = new Array();
                      wr(t).length > 0 && _.push("currency_missing");
                      const C = t.proposed_prices.base_amounts.find(
                          (U) => U.amount.currency_code == Mt.CS,
                        )?.amount.amount,
                        T = Lr(C, n, r, t);
                      (T.rgAboveThreshold.length > 0 ||
                        T.rgBelowThreshold.length > 0) &&
                        _.push("out_of_guideline"),
                        x && Br(x) && _.push("within_30_days"),
                        (0, Bs.pg)(
                          (0, e.jsx)(io, { proposal: t, errors: _ }),
                          (0, Ns.uX)(f),
                        );
                    },
                    children: "Reject...",
                  }),
                ],
              });
        }
        const Rr = new Map([
          ["within_30_days", "Within 30 Days of Release"],
          ["currency_missing", "Missing one or more currency"],
          ["out_of_guideline", "One or more currency out of expected range"],
        ]);
        function io(s) {
          const { proposal: t, closeModal: n, errors: r } = s,
            [o, l] = (0, p.useState)(() => r),
            [c, d] = (0, p.useState)(""),
            { fnRejectProposal: g } = Er(),
            x = `Reject pricing proposal for package ${t.packageid}`,
            f = (0, Es.vs)();
          return f.bLoading
            ? (0, e.jsx)(Es.Hh, { state: f, strDialogTitle: x, closeModal: n })
            : (0, e.jsxs)(E.o0, {
                strTitle: x,
                strDescription:
                  "Select the appropriate reasons for rejecting this price proposal. Each will surface to the user in the reject email.",
                bDisableBackgroundDismiss: !0,
                onCancel: n,
                onOK: () => {
                  f.fnSetLoading(!0),
                    g(t.packageid, o, c)
                      .then((_) => {
                        _
                          ? f.fnSetSuccess(!0)
                          : (f.fnSetError(!0),
                            f.fnSetStrError(
                              "Failed to reject; check console for details",
                            ));
                      })
                      .catch((_) => {
                        f.fnSetError(!0),
                          f.fnSetStrError(
                            "Failed to reject; check console for details",
                          );
                      });
                },
                children: [
                  (0, e.jsx)(S.JU, { children: "Rejection type:" }),
                  Array.from(Rr.keys()).map((_) =>
                    (0, e.jsx)(
                      S.Yh,
                      {
                        checked: o.includes(_),
                        onChange: (C) => {
                          const T = o.filter((U) => U != _);
                          C && T.push(_), l(T);
                        },
                        label: Rr.get(_),
                      },
                      "check" + _,
                    ),
                  ),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)(S.JU, {
                    children:
                      "Optionally include custom message text in rejection email",
                  }),
                  (0, e.jsx)("textarea", {
                    onChange: (_) => d(_.target.value),
                    value: c,
                    className: Or.NotesField,
                  }),
                ],
              });
        }
        var bt = i(23708),
          Wt = i(80613),
          ht = i.n(Wt),
          Z = i(75245),
          Vs = i(35038);
        const Gc = 0,
          Vc = 1,
          Kc = 3,
          $c = 4,
          Yc = 5,
          Xc = 6,
          Qc = 7,
          Jc = 8,
          Zc = 9,
          qc = 10,
          ed = 11,
          td = 12,
          sd = 13,
          nd = 14,
          rd = 15,
          ad = 16,
          od = 17,
          id = 18,
          ld = 19,
          cd = 20,
          dd = 21,
          ud = 22,
          pd = 23,
          md = 24,
          gd = 25,
          hd = 26,
          _d = 27,
          fd = 28,
          xd = 29,
          Sd = 30,
          Cd = 31,
          bd = 32,
          Ad = 33,
          vd = 34,
          yd = 35,
          jd = 36,
          Pd = 37,
          Ed = 38,
          Dd = 39,
          Td = 40,
          Id = 41,
          wd = 42,
          Md = 43,
          kd = 44,
          Ld = 45,
          Bd = 46,
          Nd = 47,
          Od = 48,
          Rd = 49,
          Fd = 50,
          Hd = 51,
          Ud = 52,
          zd = 53,
          Wd = 54,
          Fr = 55,
          Gd = 56,
          Vd = 57,
          Kd = 58,
          $d = 59,
          Yd = 60,
          Xd = 61,
          Qd = 62,
          Jd = 63,
          Zd = 64,
          qd = 65,
          eu = 66,
          tu = 67,
          su = 68,
          nu = 69,
          ru = 70,
          au = 71,
          ou = 72,
          iu = 73,
          lu = 74,
          cu = 75,
          du = 76,
          uu = 77,
          pu = 78,
          mu = 79,
          gu = 80,
          hu = 81,
          _u = 82,
          fu = 83,
          xu = 84,
          Su = 85,
          Cu = 86,
          bu = 87,
          Au = 88,
          vu = 89,
          yu = 90,
          ju = 91,
          Pu = 92,
          Eu = 93,
          Du = 94,
          Tu = 95,
          Iu = 96,
          wu = 97,
          Mu = 98,
          ku = 99,
          Lu = 100,
          Bu = 101,
          Nu = 102,
          Ou = 103,
          Ru = 104,
          Fu = 105,
          Hu = 106,
          Uu = 107,
          zu = 108,
          Wu = 109,
          Gu = 110,
          Vu = 111,
          Ku = 112,
          $u = 113,
          Yu = 0,
          Xu = 101,
          Qu = 102,
          Ju = 103,
          Zu = 104,
          qu = 105,
          ep = 106,
          tp = 107,
          sp = 108,
          np = 109,
          rp = 110,
          ap = 111,
          op = 112,
          ip = 113,
          lp = 114,
          cp = 115,
          dp = 116,
          up = 117,
          pp = 118,
          mp = 119,
          gp = 120,
          hp = 121,
          _p = 122,
          fp = 123,
          xp = 124,
          Sp = 125,
          Cp = 126,
          bp = 127,
          Ap = 128,
          vp = 129,
          yp = 130,
          jp = 131,
          Pp = 132,
          Ep = 133,
          Dp = 134,
          Tp = 201,
          Ip = 202,
          wp = 203,
          Mp = 204,
          kp = 205,
          Lp = 206,
          Bp = 207,
          Np = 208,
          Op = 209,
          Rp = 210,
          Fp = 211,
          Hp = 212,
          Up = 213,
          zp = 214,
          Wp = 215,
          Gp = 216,
          Vp = 217,
          Kp = 301,
          $p = 302,
          Yp = 303,
          Xp = 304,
          Qp = 305,
          Jp = 306,
          Zp = 307,
          qp = 308,
          em = 320,
          tm = 321,
          sm = 350,
          nm = 351,
          rm = 352,
          am = 353,
          om = 354,
          im = 355,
          lm = 356,
          cm = 360,
          dm = 361,
          um = 362,
          pm = 363,
          mm = 364,
          gm = 365,
          hm = 370,
          _m = 371,
          fm = 372,
          xm = 373,
          Sm = 374,
          Cm = 375,
          bm = 376,
          Am = 380,
          vm = 381,
          ym = 401,
          jm = 402,
          Pm = 403,
          Em = 404,
          Dm = 405,
          Tm = 406,
          Im = 407,
          wm = 408,
          Mm = 409,
          km = 410,
          Lm = 411,
          Bm = 412,
          Nm = 413,
          Om = 414,
          Rm = 415,
          Fm = 416,
          Hm = 417,
          Um = 418,
          zm = 419,
          Wm = 501,
          Gm = 601,
          Vm = 602,
          Km = 603,
          $m = 701,
          Ym = 702,
          Xm = 703,
          Qm = 704,
          Jm = 705,
          Zm = 706,
          qm = 707,
          eg = 708,
          tg = 709,
          sg = 801,
          ng = 802,
          rg = 803,
          ag = 804,
          og = 805,
          ig = 806,
          lg = 807,
          cg = 808,
          dg = 809,
          ug = 810,
          pg = 811,
          mg = 812,
          gg = 813,
          hg = 814,
          _g = 815,
          fg = 816,
          xg = 901,
          Sg = 902,
          Cg = 903,
          bg = 904,
          Ag = 905,
          vg = 906,
          yg = 907,
          jg = 908,
          Pg = 909,
          Eg = 910,
          Dg = 911,
          Tg = 912,
          Ig = 913,
          wg = 914,
          Mg = 915,
          kg = 916,
          Lg = 917,
          Bg = 918,
          Ng = 919,
          Hr = 920,
          Og = 921,
          Rg = 922,
          Fg = 923,
          Hg = 924,
          Ug = 925,
          zg = 926,
          Wg = 927,
          Gg = 928,
          Vg = 929,
          Kg = 930,
          $g = 931,
          Yg = 932,
          Xg = 933,
          Qg = 934,
          Jg = 935,
          Zg = 936,
          qg = 937,
          eh = 938,
          th = 939,
          sh = 940,
          nh = 941,
          rh = 942,
          ah = 943,
          oh = 944,
          ih = 945,
          lh = 1001,
          ch = 1002,
          dh = 1003,
          uh = 1004,
          ph = 1005,
          mh = 1006,
          gh = 1007,
          hh = 1101,
          _h = 1201,
          fh = 1202,
          xh = 1203,
          Sh = 1301,
          Ch = 1500,
          bh = 1600,
          Ah = 1650,
          vh = 1700,
          yh = 1701,
          jh = 1702,
          Ph = 1703;
        function Eh(s) {
          return "unknown EHelpRequestType ( " + s + " )";
        }
        function Dh(s) {
          return "unknown EHelpRequestState ( " + s + " )";
        }
        function Th(s) {
          return "unknown EHelpRequestReviewState ( " + s + " )";
        }
        function Ih(s) {
          return "unknown EHelpRequestStatsRollupInterval ( " + s + " )";
        }
        function wh(s) {
          return "unknown EHelpRequestStatsResponderType ( " + s + " )";
        }
        function Mh(s) {
          return "unknown EHelpIssue ( " + s + " )";
        }
        function kh(s) {
          return "unknown EHelpRequestEscalationLevel ( " + s + " )";
        }
        function Lh(s) {
          return "unknown EHelpRequestMsgType ( " + s + " )";
        }
        function Bh(s) {
          return "unknown EHelpRequestAction ( " + s + " )";
        }
        function Nh(s) {
          return "unknown EHelpRequestSortOrder ( " + s + " )";
        }
        function Oh(s) {
          return "unknown EHelpRequestPOPType ( " + s + " )";
        }
        function Rh(s) {
          return "unknown EAnnouncementPlacement ( " + s + " )";
        }
        function Fh(s) {
          return "unknown ETickerCategoryLanguageRule ( " + s + " )";
        }
        function Hh(s) {
          return "unknown EPreapprovalResolution ( " + s + " )";
        }
        function Uh(s) {
          return "unknown EHelpRequestFeedbackCategory ( " + s + " )";
        }
        function zh(s) {
          return "unknown EHelpRequestFeedbackTargetType ( " + s + " )";
        }
        function Wh(s) {
          return "unknown EFeedbackState ( " + s + " )";
        }
        function Gh(s) {
          return "unknown ESupportActionSource ( " + s + " )";
        }
        function Vh(s) {
          return "unknown ERefundSupportAction ( " + s + " )";
        }
        class At extends Wt.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              At.prototype.quicktext_id || Z.Sg(At.M()),
              Wt.Message.initialize(this, t, 0, -1, [6, 10, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: Z.qM.readUint32,
                      bw: Z.gp.writeUint32,
                    },
                    requires_update: {
                      n: 2,
                      br: Z.qM.readBool,
                      bw: Z.gp.writeBool,
                    },
                    title: { n: 3, br: Z.qM.readString, bw: Z.gp.writeString },
                    hidden: { n: 4, br: Z.qM.readBool, bw: Z.gp.writeBool },
                    approved: { n: 5, br: Z.qM.readBool, bw: Z.gp.writeBool },
                    help_request_types: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: Z.qM.readUint32,
                      pbr: Z.qM.readPackedUint32,
                      bw: Z.gp.writeRepeatedUint32,
                    },
                    content: { n: 7, c: St },
                    button_text: {
                      n: 8,
                      br: Z.qM.readString,
                      bw: Z.gp.writeString,
                    },
                    replacement: {
                      n: 9,
                      br: Z.qM.readBool,
                      bw: Z.gp.writeBool,
                    },
                    payment_methods: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: Z.qM.readUint32,
                      pbr: Z.qM.readPackedUint32,
                      bw: Z.gp.writeRepeatedUint32,
                    },
                    appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: Z.qM.readUint32,
                      pbr: Z.qM.readPackedUint32,
                      bw: Z.gp.writeRepeatedUint32,
                    },
                    escalation_level: {
                      n: 12,
                      br: Z.qM.readEnum,
                      bw: Z.gp.writeEnum,
                    },
                    partner_only: {
                      n: 13,
                      br: Z.qM.readBool,
                      bw: Z.gp.writeBool,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = Z.w0(At.M())), At.sm_mbf;
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, n) {
            return Z.BT(At.M(), t, n);
          }
          static fromObject(t) {
            return Z.Uq(At.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (ht().BinaryReader)(t),
              r = new At();
            return At.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Z.zj(At.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (ht().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Z.i0(At.M(), t, n);
          }
          serializeBase64String() {
            var t = new (ht().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        }
        class St extends Wt.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              St.prototype.content || Z.Sg(St.M()),
              Wt.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    content: {
                      n: 1,
                      br: Z.qM.readString,
                      bw: Z.gp.writeString,
                    },
                    major_revision: {
                      n: 2,
                      br: Z.qM.readUint32,
                      bw: Z.gp.writeUint32,
                    },
                    minor_revision: {
                      n: 3,
                      br: Z.qM.readUint32,
                      bw: Z.gp.writeUint32,
                    },
                    author: { n: 4, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                    last_update: {
                      n: 5,
                      br: Z.qM.readUint32,
                      bw: Z.gp.writeUint32,
                    },
                    language: { n: 6, br: Z.qM.readInt32, bw: Z.gp.writeInt32 },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = Z.w0(St.M())), St.sm_mbf;
          }
          toObject(t = !1) {
            return St.toObject(t, this);
          }
          static toObject(t, n) {
            return Z.BT(St.M(), t, n);
          }
          static fromObject(t) {
            return Z.Uq(St.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (ht().BinaryReader)(t),
              r = new St();
            return St.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Z.zj(St.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (ht().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Z.i0(St.M(), t, n);
          }
          serializeBase64String() {
            var t = new (ht().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        }
        class vt extends Wt.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              vt.prototype.quicktext_id || Z.Sg(vt.M()),
              Wt.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: Z.qM.readUint32,
                      bw: Z.gp.writeUint32,
                    },
                    language: {
                      n: 2,
                      br: Z.qM.readString,
                      bw: Z.gp.writeString,
                    },
                    from_sql: { n: 3, br: Z.qM.readBool, bw: Z.gp.writeBool },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = Z.w0(vt.M())), vt.sm_mbf;
          }
          toObject(t = !1) {
            return vt.toObject(t, this);
          }
          static toObject(t, n) {
            return Z.BT(vt.M(), t, n);
          }
          static fromObject(t) {
            return Z.Uq(vt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (ht().BinaryReader)(t),
              r = new vt();
            return vt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Z.zj(vt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (ht().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Z.i0(vt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (ht().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        }
        class yt extends Wt.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              yt.prototype.quicktext || Z.Sg(yt.M()),
              Wt.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    quicktext: { n: 1, c: At },
                    english_reference: { n: 2, c: St },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = Z.w0(yt.M())), yt.sm_mbf;
          }
          toObject(t = !1) {
            return yt.toObject(t, this);
          }
          static toObject(t, n) {
            return Z.BT(yt.M(), t, n);
          }
          static fromObject(t) {
            return Z.Uq(yt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (ht().BinaryReader)(t),
              r = new yt();
            return yt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Z.zj(yt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (ht().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Z.i0(yt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (ht().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        }
        class jt extends Wt.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.appid || Z.Sg(jt.M()),
              Wt.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    appid: { n: 1, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                    log_type: {
                      n: 2,
                      br: Z.qM.readString,
                      bw: Z.gp.writeString,
                    },
                    version_string: {
                      n: 3,
                      br: Z.qM.readString,
                      bw: Z.gp.writeString,
                    },
                    log_contents: {
                      n: 4,
                      br: Z.qM.readString,
                      bw: Z.gp.writeString,
                    },
                    request_id: {
                      n: 5,
                      br: Z.qM.readUint64String,
                      bw: Z.gp.writeUint64String,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = Z.w0(jt.M())), jt.sm_mbf;
          }
          toObject(t = !1) {
            return jt.toObject(t, this);
          }
          static toObject(t, n) {
            return Z.BT(jt.M(), t, n);
          }
          static fromObject(t) {
            return Z.Uq(jt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (ht().BinaryReader)(t),
              r = new jt();
            return jt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Z.zj(jt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (ht().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Z.i0(jt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (ht().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        }
        class Pt extends Wt.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Pt.prototype.id || Z.Sg(Pt.M()),
              Wt.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    id: {
                      n: 1,
                      br: Z.qM.readUint64String,
                      bw: Z.gp.writeUint64String,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = Z.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(t = !1) {
            return Pt.toObject(t, this);
          }
          static toObject(t, n) {
            return Z.BT(Pt.M(), t, n);
          }
          static fromObject(t) {
            return Z.Uq(Pt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (ht().BinaryReader)(t),
              r = new Pt();
            return Pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Z.zj(Pt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (ht().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Z.i0(Pt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (ht().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        }
        class Et extends Wt.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.appid || Z.Sg(Et.M()),
              Wt.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    appid: { n: 1, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = Z.w0(Et.M())), Et.sm_mbf;
          }
          toObject(t = !1) {
            return Et.toObject(t, this);
          }
          static toObject(t, n) {
            return Z.BT(Et.M(), t, n);
          }
          static fromObject(t) {
            return Z.Uq(Et.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (ht().BinaryReader)(t),
              r = new Et();
            return Et.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Z.zj(Et.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (ht().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Z.i0(Et.M(), t, n);
          }
          serializeBase64String() {
            var t = new (ht().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        }
        class Dt extends Wt.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Dt.prototype.request_id || Z.Sg(Dt.M()),
              Wt.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    request_id: {
                      n: 1,
                      br: Z.qM.readUint64String,
                      bw: Z.gp.writeUint64String,
                    },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = Z.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(t = !1) {
            return Dt.toObject(t, this);
          }
          static toObject(t, n) {
            return Z.BT(Dt.M(), t, n);
          }
          static fromObject(t) {
            return Z.Uq(Dt.M(), t);
          }
          static deserializeBinary(t) {
            let n = new (ht().BinaryReader)(t),
              r = new Dt();
            return Dt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(t, n) {
            return Z.zj(Dt.MBF(), t, n);
          }
          serializeBinary() {
            var t = new (ht().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, n) {
            Z.i0(Dt.M(), t, n);
          }
          serializeBase64String() {
            var t = new (ht().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        }
        var Ur;
        ((s) => {
          function t(n, r, o) {
            return n.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, Vs.I8)(vt, r, o),
              yt,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.GetQuickText = t;
        })(Ur || (Ur = {}));
        var zr;
        ((s) => {
          function t(r, o, l) {
            return r.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, Vs.I8)(jt, o, l),
              Pt,
              { ePrivilege: 1 },
            );
          }
          s.UploadUserApplicationLog = t;
          function n(r, o, l) {
            return r.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, Vs.I8)(Et, o, l),
              Dt,
              { ePrivilege: 1 },
            );
          }
          s.GetApplicationLogDemand = n;
        })(zr || (zr = {}));
        var lo = i(75233),
          Os = i(51614);
        function co(s, t, n) {
          return (0, ps.I)({
            queryKey: ["PartnerTickets", s, t, n],
            queryFn: async () => {
              const r = { nPublisherId: s, eHelpIssue: t, eHelpRequestType: n };
              return (
                await $t().get(
                  `${Ce.TS.PARTNER_BASE_URL}admin/ajaxfetchsupportticketforpartner`,
                  { params: r, withCredentials: !0 },
                )
              ).data.tickets;
            },
          });
        }
        function uo(s, t, n, r, o) {
          const l = (0, lo.jE)();
          return (0, Os.n)({
            mutationFn: async (c) => {
              o.fnSetLoading(!0);
              const d = new FormData();
              d.append("help_issue", "" + n),
                d.append("help_request_type", "" + r),
                d.append("appid", "" + c.appid),
                d.append("initial_text", c.strRequestTitle),
                d.append("issue_text", c.strRequestBody),
                d.append("sessionid", (0, Yt.KC)()),
                d.append("steamid", s),
                d.append("publisherid_selected", "" + t);
              const g = await $t().post(
                `${Ce.TS.PARTNER_BASE_URL}admin/ajaxcreatesupportticketforrequest/`,
                d,
              );
              if (g?.data?.success != Kt.R)
                throw (
                  (g?.data?.message && o.fnSetStrError(g?.data?.message),
                  g?.data?.message || "create ticket failed generic")
                );
            },
            onSuccess() {
              o.fnSetSuccess(!0);
            },
            onError() {
              o.fnSetError(!0);
            },
            onSettled() {
              l.invalidateQueries({ queryKey: ["PartnerTickets", t, n, r] });
            },
          });
        }
        var wn = i(56330),
          Wr = i.n(wn),
          po = i(77428),
          mo = i.n(po),
          go = i(55298);
        function ho(s) {
          const { partnerID: t, setTicketCount: n } = s,
            { data: r } = co(t, Hr, Fr),
            [o, l] = (0, p.useState)(2);
          return (
            (0, p.useEffect)(() => {
              r?.length > 0 && n(r?.length);
            }, [r, n]),
            !r || r.length == 0
              ? null
              : (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("br", {}),
                    (0, e.jsxs)("h3", {
                      children: ["Tickets ", r.length, ":"],
                    }),
                    r
                      .slice(0, o)
                      .map((c) =>
                        (0, e.jsx)(fo, { helpReq: c }, c.help_requestid),
                      ),
                    o < r.length &&
                      (0, e.jsxs)("a", {
                        href: "#",
                        onClick: () => l(r.length),
                        children: ["Show all ", r.length, " Tickets"],
                      }),
                  ],
                })
          );
        }
        function _o(s) {
          return s.startsWith("HT") && s.length === 14
            ? `${s.slice(0, 2)}-${s.slice(2, 6)}-${s.slice(6, 10)}-${s.slice(10)}`
            : s;
        }
        function fo(s) {
          const { helpReq: t } = s,
            n = (0, go.qh)();
          return n
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, D.A)({
                      [mo().ValveAccountTicket]:
                        n.findIndex((r) => r.id === t.accountid) >= 0,
                    }),
                    children: [
                      n.findIndex((r) => r.id == t.assigned_agent_accountid) >=
                      0
                        ? (0, e.jsxs)(e.Fragment, {
                            children: [
                              "Owned By: ",
                              (0, e.jsx)(un.p, {
                                accountID: t.assigned_agent_accountid,
                              }),
                              ",",
                            ],
                          })
                        : (0, e.jsxs)(e.Fragment, {
                            children: [
                              "Created by: ",
                              (0, e.jsx)(un.p, { accountID: t.accountid }),
                              ",",
                            ],
                          }),
                      "Created on ",
                      (0, a.TW)(t.time_created),
                    ],
                  }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("p", { children: t.issue_text }),
                  (0, e.jsx)("div", {}),
                  !!(
                    t.time_last_response &&
                    t.time_last_response > t.time_created
                  ) &&
                    (0, e.jsxs)("div", {
                      children: [
                        "Last Update ",
                        (0, a.TW)(t.time_last_response),
                      ],
                    }),
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("a", {
                    href: `${Ce.TS.HELP_BASE_URL}en/ticketmaster/ticket/${_o(t.reference_code)}`,
                    target: "_blank",
                    children: "Open Ticket",
                  }),
                ],
              })
            : (0, e.jsx)(ss.t, { size: "small" });
        }
        function xo(s) {
          const {
              nAccountIDProposer: t,
              packageID: n,
              mapPartnerPaidByPackage: r,
            } = s,
            o = r.get(n);
          return o
            ? (0, e.jsx)(S.$n, {
                onClick: (l) =>
                  (0, Bs.pg)(
                    (0, e.jsx)(So, {
                      nAccountIDProposer: t,
                      packageID: n,
                      partnerID: o[0],
                    }),
                    (0, Ns.uX)(l),
                  ),
                children: "Create Ticket",
              })
            : (0, e.jsx)("div", {
                className: wn.WarningStylesBackground,
                children:
                  "Warning: Package isn't associated with a partner... Cannot create ticket",
              });
        }
        const Gr = {};
        function So(s) {
          const {
              partnerID: t,
              packageID: n,
              closeModal: r,
              nAccountIDProposer: o,
            } = s,
            [l] = (0, Nr.UA)(t),
            [c] = (0, ft.Gg)(n, Gr),
            d = (0, p.useMemo)(
              () => mt.b.InitFromAccountID(o).ConvertTo64BitString(),
              [o],
            ),
            [g, x] = (0, p.useState)(() => c?.GetAppID() || 0),
            [f] = (0, ft.t7)(g, Gr),
            [_, C] = (0, p.useState)(`Question about pricing for package ${n}`),
            [T, U] = (0, p.useState)("");
          (0, p.useEffect)(() => {
            c && g == 0 && x(c.GetAppID());
          }, [c, g]);
          const ye = (0, Es.vs)(),
            ne = uo(d, t, Hr, Fr, ye);
          return ye.bLoading
            ? (0, e.jsx)(Es.Hh, {
                state: ye,
                strDialogTitle: "Create Ticket for Partner",
                closeModal: r,
              })
            : (0, e.jsxs)(E.o0, {
                strTitle: "Create Ticket for Partner",
                strDescription: `Create a pricing ticket for partner ${l?.name} (${t}) for Package ${n}. App ${f?.GetName() || ""} with ${g}. Please update ticket title and body`,
                bOKDisabled: !g || _.trim().length == 0 || T.trim().length == 0,
                onOK: () =>
                  ne.mutate({
                    appid: g,
                    strRequestTitle: _,
                    strRequestBody: T,
                  }),
                bAllowFullSize: !0,
                onCancel: r,
                bDisableBackgroundDismiss: T.trim().length > 0,
                children: [
                  (0, e.jsx)(S.pd, {
                    type: "text",
                    label: "Ticket Title",
                    placeholder: "Enter Ticket Title",
                    value: _,
                    onChange: (Q) => C(Q.currentTarget.value || ""),
                  }),
                  (0, e.jsx)(S.JU, { children: "Enter Ticket Body" }),
                  (0, e.jsx)("textarea", {
                    value: T,
                    onChange: (Q) => U(Q.currentTarget.value),
                    cols: 80,
                    rows: 20,
                  }),
                  (0, e.jsx)(S.pd, {
                    type: "number",
                    label: "AppID to Associate with Ticket",
                    value: g,
                    onChange: (Q) =>
                      x(Number.parseInt(Q.currentTarget.value) || 0),
                  }),
                ],
              });
        }
        var Co = i(84346);
        function Vr(s) {
          const {
              proposal: t,
              mapPartnerPaidByPackage: n,
              mapPriceChanges: r,
            } = s,
            [o] = (0, ft.Gg)(t.packageid, En),
            [l] = (0, ft.Gg)(o?.GetIncludedAppIDsOrSelf()?.[0], En),
            c = `${Ce.TS.PARTNER_BASE_URL}store/packagelanding/${t.packageid}`;
          return (0, e.jsxs)("div", {
            className: (0, D.A)(bt.PackageInfoColumn, Ge.PackageInfoColumn),
            children: [
              (0, e.jsxs)("div", {
                className: bt.PackageName,
                children: [
                  o
                    ? (0, e.jsxs)("span", {
                        children: [
                          (0, e.jsx)("a", { href: c, children: o.GetName() }),
                          " ",
                          `(${t.packageid})`,
                        ],
                      })
                    : (0, e.jsx)("a", {
                        href: c,
                        children: `Package ${t.packageid}`,
                      }),
                  l?.GetAppType() == Gs.uE._i &&
                    (0, e.jsx)("span", { children: " (DLC)" }),
                  l?.GetAppType() == Gs.uE.RA &&
                    (0, e.jsx)("span", { children: " (MOD)" }),
                  l?.GetAppType() == Gs.uE.Hk &&
                    (0, e.jsx)("span", { children: " (HARDWARE)" }),
                ],
              }),
              (0, e.jsx)("div", {
                className: bt.ReleaseDate,
                children:
                  o && o.BIsVisible()
                    ? "Release On: " +
                      (o.GetReleaseDateRTime()
                        ? (0, a.TW)(o.GetReleaseDateRTime())
                        : " No Release date")
                    : "Store Visibility: Hidden",
              }),
              (0, e.jsx)(eo, {
                packageID: t.packageid,
                priceChanges: r.get(t.packageid),
              }),
              (0, e.jsx)("div", {
                className: bt.SubmissionBy,
                children: (0, e.jsx)(un.p, { accountID: t.account }),
              }),
              (0, e.jsx)(oo, { ...s }),
              (0, e.jsx)(xo, {
                nAccountIDProposer: t.account_proposer,
                packageID: t.packageid,
                mapPartnerPaidByPackage: n,
              }),
              (0, e.jsx)(bo, {
                packageID: t.packageid,
                mapPartnerPaidByPackage: n,
              }),
            ],
          });
        }
        function bo(s) {
          const { packageID: t, mapPartnerPaidByPackage: n } = s,
            r = n.get(t);
          return r
            ? (0, e.jsx)("div", {
                children: r.map((o) =>
                  (0, e.jsx)(Ao, { partnerID: o }, "partner" + o),
                ),
              })
            : null;
        }
        function Ao(s) {
          const { partnerID: t } = s,
            [n] = (0, Nr.UA)(t);
          return n
            ? (0, e.jsxs)("a", {
                href: `${Ce.TS.PARTNER_BASE_URL}admin/reviewpricesubmissions/?publisherID=${n.partnerid}`,
                children: [n.name, " (", n.partnerid, ")"],
              })
            : null;
        }
        function Kr(s) {
          const { amountInCents: t, className: n } = s;
          return t
            ? (0, e.jsx)("div", { className: n, children: os(t) })
            : (0, e.jsx)("div", { className: n });
        }
        function os(s) {
          return s
            ? (s / 100).toLocaleString((0, Co.J)(), {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : "";
        }
        function $r(s) {
          return (0, e.jsx)("thead", {
            children: (0, e.jsxs)("tr", {
              children: [
                Dn.map((t) =>
                  (0, e.jsx)(
                    "td",
                    {
                      children: (0, e.jsx)(pe.he, {
                        toolTipContent: (0, us.Ug)(t),
                        children: (0, us.M1)(t),
                      }),
                    },
                    "header" + t,
                  ),
                ),
                Tn.map((t) =>
                  (0, e.jsx)(
                    "td",
                    {
                      children: (0, e.jsx)(pe.he, {
                        toolTipContent: (0, Jt.j4)(t),
                        children: (0, Jt.de)(t),
                      }),
                    },
                    "header_region" + t,
                  ),
                ),
              ],
            }),
          });
        }
        function Yr(s) {
          const { proposal: t, oGuideline: n, mapCurrentPrices: r } = s,
            o = r.get(t.packageid),
            l = t.proposed_prices.base_amounts.find(
              (c) => c.amount.currency_code == Mt.CS,
            )?.amount.amount;
          return (0, e.jsxs)("tr", {
            children: [
              Dn.map((c) => {
                const d =
                  n.GetRecommendPrice(l, c) ||
                  n.GetScaledRecommendedPrice(l, c);
                return (0, e.jsx)(
                  vo,
                  { eCurrencyCode: c, proposal: t, curPrice: o, guidePrice: d },
                  t.packageid + "-" + c,
                );
              }),
              Tn.map((c) => {
                const d = (0, Jt.bS)(c),
                  g =
                    n.GetRecommendPrice(l, d, c) ||
                    n.GetScaledRecommendedPrice(l, d, c);
                return (0, e.jsx)(
                  yo,
                  {
                    eCurrencyCode: d,
                    eRegionCode: c,
                    proposal: t,
                    curPrice: o,
                    guidePrice: g,
                  },
                  t.packageid + "-" + c,
                );
              }),
            ],
          });
        }
        function vo(s) {
          const {
              eCurrencyCode: t,
              curPrice: n,
              proposal: r,
              guidePrice: o,
            } = s,
            l = r.proposed_prices.base_amounts.find(
              (d) => d.amount.currency_code == t,
            ),
            c = n?.current_costs?.base_amounts.find(
              (d) => d.currency_code == t,
            );
          return (0, e.jsx)(Xr, {
            proposed: l,
            originalAmount: c,
            guidePrice: o,
          });
        }
        function yo(s) {
          const { eRegionCode: t, curPrice: n, proposal: r, guidePrice: o } = s,
            l = (0, Jt.de)(t),
            c = r.proposed_prices.region_amounts.find((g) => g.name == l),
            d = n?.current_costs?.region_amounts.find((g) => g.region == l);
          return (0, e.jsx)(Xr, {
            proposed: c,
            originalAmount: d?.amount,
            guidePrice: o,
          });
        }
        function Xr(s) {
          const { proposed: t, originalAmount: n, guidePrice: r } = s;
          let o, l;
          if (t)
            if (r && r.price > t.amount.amount) {
              o = bt.outofmatrixlower;
              const c = os(r.price),
                d = Math.floor(100 - (t.amount.amount / r.price) * 100);
              l = `Suggested price ${c} - ${d}% \u25BC`;
            } else if (r && r.price < t.amount.amount) {
              o = bt.outofmatrix;
              const c = os(r.price),
                d = Math.floor((t.amount.amount / r.price) * 100 - 100);
              l = `Suggested price ${c} - ${d}% \u25B2`;
            } else
              n
                ? n.amount > t.amount.amount
                  ? (o = bt.priceChangedLower)
                  : n.amount < t.amount.amount && (o = bt.priceChangedHigher)
                : (o = bt.priceChangedNew);
          return (0, e.jsxs)("td", {
            className: bt.FullCurrencyColumn,
            children: [
              (0, e.jsx)(pe.he, {
                toolTipContent: l,
                children: (0, e.jsx)(Kr, {
                  className: o,
                  amountInCents: t?.amount.amount,
                }),
              }),
              n?.amount != t?.amount.amount &&
                (0, e.jsx)(Kr, { amountInCents: n?.amount }),
              !n && (0, e.jsx)("div", { children: "--" }),
            ],
          });
        }
        const jo = 2e4;
        function Po(s) {
          const {
              rgProposals: t,
              oGuideline: n,
              mapCurrentPrices: r,
              mapPartnerPaidByPackage: o,
              mapPriceChanges: l,
            } = s,
            [c, d] = (0, p.useState)(!1),
            [g, x] = (0, p.useState)(!0);
          return (0, e.jsxs)("div", {
            className: (0, D.A)(Ge.PriceDeltaCtn),
            children: [
              (0, e.jsxs)(Dr.qx, {
                title: "Reasons Auto-Publish is blocked",
                children: [
                  (0, e.jsx)("p", {
                    children:
                      "This page will surface the reason why the package did not auto-publish and may require work to correct",
                  }),
                  (0, e.jsxs)("ol", {
                    className: Ge.Legend,
                    children: [
                      (0, e.jsx)("li", {
                        className: Ge.Missing,
                        children: "Missing Currencies",
                      }),
                      (0, e.jsx)("li", {
                        className: Ge.Outside,
                        children:
                          "Outside of acceptable threshold (more than 125% above or 50% below the guideline)",
                      }),
                      (0, e.jsx)("li", {
                        className: Ge.CustomUsd,
                        children:
                          "USD Price doesn't match any guideline price point",
                      }),
                      (0, e.jsx)("li", {
                        className: Ge.AboveAutoPublish,
                        children: "USD Price above 200$ USD",
                      }),
                      (0, e.jsx)("li", {
                        className: Ge.CloseToLaunch,
                        children:
                          "Raising Price during 30 days during launch window",
                      }),
                      (0, e.jsx)("li", {
                        className: Ge.CountrySpecific,
                        children: "Has Country specific pricing",
                      }),
                    ],
                  }),
                  (0, e.jsxs)("p", {
                    children: [
                      "You can filter the list by choosing ",
                      (0, e.jsx)("a", {
                        href: `${Ce.TS.PARTNER_BASE_URL}admin/reviewpricesubmissions/?myPartners=1`,
                        children: "my partners",
                      }),
                      " view",
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(S.Yh, {
                label: "Show All Price Comparison Rows",
                tooltip:
                  "Displays the price comparison rows for all of the section below.",
                checked: c,
                onChange: d,
              }),
              (0, e.jsx)(S.Yh, {
                label: "Show Prices with Open Tickets",
                tooltip:
                  "Displays the price comparison rows for those with open tickets against them.",
                checked: g,
                onChange: x,
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(Ge.RowCtn),
                children: (0, e.jsx)("div", {
                  className: Ge.PackageInfoColumn,
                  children: "Package Info",
                }),
              }),
              t.map((f) =>
                (0, e.jsx)(
                  "div",
                  {
                    children: (0, e.jsx)(Eo, {
                      oGuideline: n,
                      proposal: f,
                      mapCurrentPrices: r,
                      mapPartnerPaidByPackage: o,
                      mapPriceChanges: l,
                      bForceShowComparisonRows: c,
                      bShowWithOpenTickets: g,
                    }),
                  },
                  "delta_" + f.packageid,
                ),
              ),
            ],
          });
        }
        function Eo(s) {
          const { bShowWithOpenTickets: t } = s,
            [n, r] = (0, p.useState)(0);
          return n > 0 && !t
            ? null
            : (0, e.jsxs)("div", {
                className: Ge.ProposalCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ge.RowCtn,
                    children: [
                      (0, e.jsx)(Vr, { ...s }),
                      (0, e.jsx)(Do, { ...s, setOpenTicketCount: r }),
                      (0, e.jsx)(Bo, { ...s }),
                    ],
                  }),
                  (0, e.jsx)(Oo, { ...s }),
                ],
              });
        }
        function Do(s) {
          const { proposal: t, setOpenTicketCount: n } = s,
            r = s.mapPartnerPaidByPackage.get(t.packageid)?.[0] || 0;
          return (0, e.jsxs)("div", {
            className: Ge.FailuresCtn,
            children: [
              (0, e.jsx)(To, { ...s }),
              (0, e.jsx)("div", {
                className: Ge.SectionHeader,
                children: "Web Auto-Approval Checks",
              }),
              (0, e.jsx)(wo, { ...s }),
              (0, e.jsx)(Mo, { ...s }),
              (0, e.jsx)(No, { ...s }),
              (0, e.jsx)(ko, { ...s }),
              (0, e.jsx)(Io, { ...s }),
              (0, e.jsx)(ho, { partnerID: r, setTicketCount: n }),
            ],
          });
        }
        function To(s) {
          const { proposal: t } = s,
            n = t.auto_approval_state || Tr.None,
            r = Ja[n] || `Unknown (${n})`;
          return (0, e.jsxs)("div", {
            className: Ge.AutoApprovalCtn,
            children: [
              (0, e.jsx)("div", {
                className: Ge.SectionHeader,
                children: "Server Auto-Approval Checks",
              }),
              (0, e.jsx)("div", { className: Ge.Title, children: r }),
              !!t.auto_approval_notes &&
                (0, e.jsxs)("div", {
                  className: Ge.Notes,
                  children: ["- ", t.auto_approval_notes],
                }),
            ],
          });
        }
        function Io(s) {
          const { proposal: t, mapCurrentPrices: n } = s,
            r = t.proposed_prices.base_amounts.find(
              (l) => l.amount.currency_code == Mt.CS,
            )?.amount.amount,
            o = n
              .get(t.packageid)
              ?.current_costs.base_amounts.find(
                (l) => l.currency_code == Mt.CS,
              )?.amount;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              r > jo &&
                (0, e.jsxs)("div", {
                  className: Ge.AboveAutoPublish,
                  children: [
                    "USD Price $",
                    os(r),
                    " is above $200 USD Threshold",
                  ],
                }),
              !!(o && r > 2 * o) &&
                (0, e.jsxs)("div", {
                  className: Ge.AboveAutoPublish,
                  children: [
                    "USD price $",
                    os(r),
                    " is more than twice existing USD Price $",
                    os(o),
                  ],
                }),
            ],
          });
        }
        function wo(s) {
          const { proposal: t } = s,
            n = (0, p.useMemo)(() => wr(t), [t]);
          return n?.length > 0
            ? (0, e.jsxs)("div", {
                className: Ge.MissingCurrency,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ge.Title,
                    children: ["Missing ", n.length, " currencies: "],
                  }),
                  n.map(us.t_).join(", "),
                ],
              })
            : null;
        }
        function Mo(s) {
          const { proposal: t } = s,
            n = (0, p.useMemo)(() => Za(t), [t]);
          return n?.length > 0
            ? (0, e.jsxs)("div", {
                className: Ge.MissingCurrency,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ge.Title,
                    children: ["Unexpected ", n.length, " currencies: "],
                  }),
                  n.join(", "),
                ],
              })
            : null;
        }
        function ko(s) {
          const { proposal: t, oGuideline: n } = s,
            r = t.proposed_prices.base_amounts.find(
              (l) => l.amount.currency_code == Mt.CS,
            )?.amount.amount,
            o = n.GetRecommendPrice(r, Mt.CS);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !o &&
                (0, e.jsxs)("div", {
                  className: Ge.MatrixGap,
                  children: [
                    "$",
                    os(r),
                    " USD Price doesn't align with any matrix price point. Will compare proposal to scaled guideline.",
                  ],
                }),
              (0, e.jsx)(Lo, { ...s, USDPriceCents: r }),
            ],
          });
        }
        function Qr(s) {
          const { thresholdData: t, strDirection: n } = s;
          let r = null;
          return (
            t.nOriginalPrice == t.nProposedPrice && (r = Ge.EqualPrices),
            (0, e.jsxs)("tr", {
              className: Ge.ThresholdRow,
              children: [
                (0, e.jsx)("td", {
                  className: Ge.CurrencyName,
                  children: t.strCurrency,
                }),
                (0, e.jsx)("td", {
                  className: (0, D.A)(Ge.OriginalPrice, r),
                  children: t.nOriginalPrice ? `${os(t.nOriginalPrice)}` : "--",
                }),
                (0, e.jsx)("td", {
                  className: (0, D.A)(Ge.ProposedPrice, r),
                  children: `${os(t.nProposedPrice)}`,
                }),
                (0, e.jsx)("td", {
                  className: Ge.RecommendedPrice,
                  children: `${os(t.nGuidancePrice)}`,
                }),
                (0, e.jsx)("td", {
                  className: Ge.PercentDiff,
                  children: `${t.nPercent}% ${n}`,
                }),
              ],
            })
          );
        }
        function Jr(s) {
          const { strGuidanceMessage: t, strDirection: n } = s;
          return (0, e.jsxs)("thead", {
            children: [
              (0, e.jsx)("tr", {
                children: (0, e.jsxs)("td", {
                  colSpan: 5,
                  className: (0, D.A)(
                    Ge.WarningTitle,
                    n == "above" ? Ge.WarningAbove : Ge.WarningBelow,
                  ),
                  children: [
                    (0, e.jsx)("b", {
                      children: n == "above" ? "\u25B2" : "\u25BC",
                    }),
                    " ",
                    t,
                  ],
                }),
              }),
              (0, e.jsxs)("tr", {
                className: (0, D.A)(Ge.ThresholdRow, Ge.ThresholdHeader),
                children: [
                  (0, e.jsx)("td", {
                    className: Ge.CurrencyName,
                    children: "Currency",
                  }),
                  (0, e.jsx)("td", {
                    className: Ge.OriginalPrice,
                    children: "Current",
                  }),
                  (0, e.jsx)("td", {
                    className: Ge.ProposedPrice,
                    children: "Proposed",
                  }),
                  (0, e.jsx)("td", {
                    className: Ge.RecommendedPrice,
                    children: "Recommended",
                  }),
                  (0, e.jsx)("td", {
                    className: Ge.PercentDiff,
                    children: "% diff",
                  }),
                ],
              }),
            ],
          });
        }
        function Lo(s) {
          const {
              proposal: t,
              oGuideline: n,
              USDPriceCents: r,
              mapCurrentPrices: o,
            } = s,
            { rgAboveThreshold: l, rgBelowThreshold: c } = (0, p.useMemo)(
              () => Lr(r, o, n, t),
              [r, o, n, t],
            );
          if (l.length > 0 || c.length > 0) {
            const d = os(r);
            return (0, e.jsxs)("div", {
              className: Ge.CurrencyWarningsCtn,
              children: [
                l.length > 0 &&
                  (0, e.jsxs)("table", {
                    className: Ge.ThresholdMiniTable,
                    children: [
                      (0, e.jsx)(Jr, {
                        strGuidanceMessage: `${l.length} currencies above guidance threshold for USD $ ${d}`,
                        strDirection: "above",
                      }),
                      (0, e.jsx)("tbody", {
                        children: l.map((g) =>
                          (0, e.jsx)(
                            Qr,
                            { thresholdData: g, strDirection: "\u25B2" },
                            t.packageid + "_" + g.strCurrency,
                          ),
                        ),
                      }),
                    ],
                  }),
                c.length > 0 &&
                  (0, e.jsxs)("table", {
                    className: Ge.ThresholdMiniTable,
                    children: [
                      (0, e.jsx)(Jr, {
                        strGuidanceMessage: `${c.length} currencies below guidance threshold for USD $ ${d}`,
                        strDirection: "below",
                      }),
                      (0, e.jsx)("tbody", {
                        children: c.map((g) =>
                          (0, e.jsx)(
                            Qr,
                            { thresholdData: g, strDirection: "\u25BC" },
                            t.packageid + "_" + g.strCurrency,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            });
          }
          return null;
        }
        function Bo(s) {
          const { proposal: t } = s;
          return t.proposed_prices.country_amounts?.length > 0
            ? (0, e.jsxs)("div", {
                children: [
                  "Package has Country price overrides for Countries:",
                  t.proposed_prices.country_amounts
                    .map((n) => n.name)
                    .join(","),
                ],
              })
            : null;
        }
        function No(s) {
          const { proposal: t } = s,
            [n] = (0, ft.Gg)(t.packageid, En);
          return n && Br(n)
            ? (0, e.jsxs)("div", {
                className: Ge.ReleaseDateCallout,
                children: [
                  "This game released less than 30 days ago, on ",
                  (0, a.TW)(n.GetReleaseDateRTime()),
                ],
              })
            : null;
        }
        function Oo(s) {
          const { bForceShowComparisonRows: t } = s,
            [n, r] = (0, p.useState)(!1);
          return !n && !t
            ? (0, e.jsx)(S.Yh, {
                label: "Show Price Comparison Row",
                onChange: () => r(!0),
              })
            : (0, e.jsxs)("div", {
                className: (0, D.A)(bt.FullCurrencyTable),
                children: [(0, e.jsx)($r, {}), (0, e.jsx)(Yr, { ...s })],
              });
        }
        function Ro(s) {
          const {
            rgProposals: t,
            oGuideline: n,
            mapCurrentPrices: r,
            mapPartnerPaidByPackage: o,
            mapPriceChanges: l,
          } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(zo, {}),
              (0, e.jsx)(Fo, { oGuideline: n }),
              (0, e.jsx)("hr", {}),
              (0, e.jsx)("hr", {}),
              t.map((c) =>
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(Ho, {
                        oGuideline: n,
                        proposal: c,
                        mapCurrentPrices: r,
                        mapPartnerPaidByPackage: o,
                        mapPriceChanges: l,
                      }),
                    ],
                  },
                  c.packageid,
                ),
              ),
            ],
          });
        }
        function Fo(s) {
          return (0, e.jsxs)("div", {
            className: (0, D.A)(bt.RowCtn, bt.CurrencyHeaderRow),
            children: [
              (0, e.jsx)("div", {
                className: bt.PackageInfoColumn,
                children: "Package Info",
              }),
              (0, e.jsx)($r, {}),
            ],
          });
        }
        function Ho(s) {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: bt.RowCtn,
                children: [(0, e.jsx)(Vr, { ...s }), (0, e.jsx)(Yr, { ...s })],
              }),
              (0, e.jsx)(Uo, { ...s }),
            ],
          });
        }
        function Uo(s) {
          const { proposal: t } = s,
            n = t.proposed_prices.country_amounts;
          return n?.length > 0
            ? (0, e.jsxs)("div", {
                className: bt.RowCtn,
                children: [
                  (0, e.jsx)("div", { children: "^^^^" }),
                  n.map((r) =>
                    (0, e.jsxs)(
                      "div",
                      {
                        children: [
                          r.name,
                          "/",
                          (0, us.pd)(r.amount.currency_code),
                          " @ ",
                          os(r.account),
                        ],
                      },
                      `country_${t.packageid}_${r.amount.currency_code}`,
                    ),
                  ),
                ],
              })
            : null;
        }
        function zo(s) {
          return (0, e.jsx)(Dr.qx, {
            title: "Legend",
            tooltip: "Explains the color scheme per proposed pricing color",
            bStartMinimized: !0,
            children: (0, e.jsxs)("div", {
              className: bt.pricingLegend,
              children: [
                (0, e.jsx)("div", {
                  className: bt.priceChangedLower,
                  children: "Price Decreases",
                }),
                (0, e.jsx)("div", {
                  className: bt.priceChangedHigher,
                  children: "Price Increases",
                }),
                (0, e.jsx)("div", {
                  className: bt.priceChangedNew,
                  children: "Price is New",
                }),
                (0, e.jsx)("div", {
                  className: bt.outofmatrix,
                  children:
                    "Price is higher than guideline. Mouseover to see suggested price.",
                }),
                (0, e.jsx)("div", {
                  className: bt.outofmatrixlower,
                  children:
                    "Price is lower than guideline. Mouseover to see suggested price.",
                }),
              ],
            }),
          });
        }
        function Wo(s) {
          const [t] = (0, p.useState)(
              () => (0, Yt.Tc)("filter_name", "application_config") || "",
            ),
            n = Ya(),
            r = (0, M.cT)(),
            o = te(),
            l = Lt(),
            c = (0, p.useMemo)(() => n.map((C) => C.packageid), [n]),
            d = Ot(c),
            [g, x] = (0, Qa.QD)("tab", "delta");
          if (!r)
            return (0, e.jsx)(ss.t, { string: "Loading Pricing Guidelines" });
          const f = (C) => x(C.key),
            _ = [
              {
                name: "Price Delta",
                key: "delta",
                contents: (0, e.jsx)(we.tH, {
                  children: (0, e.jsx)(Po, {
                    rgProposals: n,
                    oGuideline: r,
                    mapCurrentPrices: o,
                    mapPartnerPaidByPackage: l,
                    mapPriceChanges: d,
                  }),
                }),
                onClick: f,
              },
              {
                name: "Submissions Raw Table",
                key: "raw",
                contents: (0, e.jsx)(we.tH, {
                  children: (0, e.jsx)(Ro, {
                    rgProposals: n,
                    oGuideline: r,
                    mapCurrentPrices: o,
                    mapPartnerPaidByPackage: l,
                    mapPriceChanges: d,
                  }),
                }),
                onClick: f,
              },
            ];
          return (0, e.jsx)(An.m, {
            children: (0, e.jsx)(we.tH, {
              children: (0, e.jsxs)("div", {
                className: (0, D.A)(Pn().AdminPageCtn, Pn().WidePageCtn),
                children: [
                  (0, e.jsx)("h1", {
                    children: "Package Prices Submissions Reviews",
                  }),
                  (0, e.jsx)("p", { children: t }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)(Ps.V, { tabs: _, startingTab: g }),
                ],
              }),
            }),
          });
        }
        var Mn = i(55409),
          Zt = i(60351),
          Xt = i(68031),
          Ne = i(15252),
          kn = i(12204),
          Ks = i(95994),
          Go = i(30241),
          Ln = i(75083),
          Zr = i(57152),
          Vo = i(7125),
          qr = i(8928),
          lr = i(69289),
          ea = i(8833);
        function Ko(s) {
          const { orientation: t = "horizontal", size: n = "1", ...r } = s;
          return (0, e.jsx)("div", {
            role: "separator",
            "aria-orientation": t,
            ...(0, lr.mz)({ ...r, size: n, className: ea.Separator }, $o),
          });
        }
        const $o = [
          ...qr.L,
          { prop: "size", className: (s) => ea[`Size-${s}`], responsive: !0 },
          {
            prop: "color",
            cssProperty: (s) => ["--separator-color", (0, lr.w7)(s)],
          },
        ];
        var is = i(1880),
          Cs = i(69168),
          bs = i(11243);
        const ta = 10,
          Yo = "orange-9 20%",
          Xo = {
            background: "rgb( from var(--color-orange-9) r g b / 20% )",
            padding: "0 4px",
          },
          sa = 1,
          na = 1;
        function ra(s, t) {
          return `${s}|${t}`;
        }
        function aa(s, t) {
          const n = new Map(),
            r = (o, l) => {
              const c = ra(o, l);
              let d = n.get(c);
              return (
                d ||
                  ((d = {
                    eCurrencyCode: o,
                    eRegionCode: l,
                    mapAmounts: new Map(),
                  }),
                  n.set(c, d)),
                d.mapAmounts
              );
            };
          for (const o of s) {
            if (t !== void 0 && o.convert_method !== t) continue;
            const l = Number(o.usd_price);
            for (const c of o.currency_prices ?? [])
              r(c.currency_code, as.YS).set(l, Number(c.price));
            for (const c of o.region_prices ?? [])
              r(c.currency_code, c.region_code).set(l, Number(c.price));
          }
          return n;
        }
        function Qo(s, t, n, r) {
          const o = [],
            l = new Set([...s.keys(), ...t.keys()]);
          for (const c of l) {
            const d = s.get(c),
              g = t.get(c),
              { eCurrencyCode: x, eRegionCode: f } = d ?? g,
              _ = new Set([
                ...(d?.mapAmounts.keys() ?? []),
                ...(g?.mapAmounts.keys() ?? []),
              ]),
              C = [];
            let T = 0;
            for (const Re of [..._].sort(($e, ts) => $e - ts)) {
              const $e = d?.mapAmounts.get(Re),
                ts = g?.mapAmounts.get(Re);
              if ($e === void 0 || ts === void 0 || $e === 0) {
                T++;
                continue;
              }
              C.push({
                nUSDPricepoint: Re,
                nExistingAmount: $e,
                nStagedAmount: ts,
                flPercentDiff: ((ts - $e) / $e) * 100,
              });
            }
            const U = Nn(n, x),
              ye = Nn(r, x),
              ne = C.map((Re) => Jo(Re, U, ye)).filter((Re) => Re !== null),
              Q = oa(C, (Re) => Re.nExistingAmount, U),
              Fe = oa(C, (Re) => Re.nStagedAmount, ye);
            o.push({
              eCurrencyCode: x,
              eRegionCode: f,
              rgPricepointDiffs: C,
              nSkippedPricepoints: T,
              flAvgPercentDiff: C.length
                ? C.reduce((Re, $e) => Re + $e.flPercentDiff, 0) / C.length
                : null,
              flAvgPercentDiffUSD: ne.length
                ? ne.reduce((Re, $e) => Re + $e, 0) / ne.length
                : null,
              nPricepointsIncreasing: C.filter(
                (Re) => Re.nStagedAmount > Re.nExistingAmount,
              ).length,
              nPricepointsDecreasing: C.filter(
                (Re) => Re.nStagedAmount < Re.nExistingAmount,
              ).length,
              nPricepointsUnchanged: C.filter(
                (Re) => Re.nStagedAmount === Re.nExistingAmount,
              ).length,
              flAvgUSDDiscountExisting: Q,
              flAvgUSDDiscountStaged: Fe,
              flAvgUSDDiscountChange: Q === null || Fe === null ? null : Fe - Q,
            });
          }
          return (
            o.sort((c, d) => {
              const g = ia(c.eRegionCode),
                x = ia(d.eRegionCode);
              return (c.eRegionCode === as.YS) != (d.eRegionCode === as.YS)
                ? c.eRegionCode === as.YS
                  ? -1
                  : 1
                : g.localeCompare(x) ||
                    (0, us.M1)(c.eCurrencyCode).localeCompare(
                      (0, us.M1)(d.eCurrencyCode),
                    );
            }),
            o
          );
        }
        function oa(s, t, n) {
          return n === null || s.length === 0
            ? null
            : s.reduce((o, l) => o + cr(t(l), n, l.nUSDPricepoint), 0) /
                s.length;
        }
        function cr(s, t, n) {
          return (1 - (s * t) / n) * 100;
        }
        function Jo(s, t, n) {
          if (t === null || n === null) return null;
          const r = Math.round(s.nExistingAmount * t);
          return r ? ((Math.round(s.nStagedAmount * n) - r) / r) * 100 : null;
        }
        function Bn(s) {
          return s.rgPricepointDiffs.length === 0
            ? null
            : s.nPricepointsIncreasing > s.nPricepointsDecreasing &&
                s.nPricepointsIncreasing > s.nPricepointsUnchanged
              ? "increasing"
              : s.nPricepointsDecreasing > s.nPricepointsIncreasing &&
                  s.nPricepointsDecreasing > s.nPricepointsUnchanged
                ? "decreasing"
                : "unchanged";
        }
        function dr(s, t) {
          return (
            s.flAvgPercentDiff !== null && Math.abs(s.flAvgPercentDiff) > t
          );
        }
        function ia(s) {
          return s === as.YS ? "None" : (0, Jt.de)(s);
        }
        function la(s) {
          return s.eRegionCode === as.YS
            ? (0, us.M1)(s.eCurrencyCode)
            : (0, Jt.de)(s.eRegionCode);
        }
        function ca(s) {
          return s.eRegionCode === as.YS
            ? (0, us.Ug)(s.eCurrencyCode)
            : (0, Jt.j4)(s.eRegionCode);
        }
        const da = [
            {
              eColumn: "currency",
              strLabel: `Currency/Region
Abbreviation`,
              bNumeric: !1,
            },
            {
              eColumn: "name",
              strLabel: `Currency/Region
Name`,
              bNumeric: !1,
            },
            {
              eColumn: "region",
              strLabel: "Region",
              bNumeric: !1,
              strTooltip:
                "Is this a region? Regions are priced in USD, not local currency",
            },
            {
              eColumn: "movement",
              strLabel: "Movement",
              bNumeric: !1,
              strTooltip:
                "Of the supported pricepoints for this entry, which direction did the majority move in (increasing, decreasing, unchanged)",
            },
            {
              eColumn: "avgPercentDiff",
              strLabel: `Avg % Difference
(Local Pricing)`,
              bNumeric: !0,
              strTooltip: `The difference the customer will see.

 What is the average percentage change between the existing pricing guideline and the staged pricing guideline`,
            },
            {
              eColumn: "avgPercentDiffUSD",
              strLabel: `Avg % Difference USD
(Existing vs Staged Amounts)`,
              bNumeric: !0,
            },
            {
              eColumn: "increasing",
              strLabel: `Pricepoints
Increasing`,
              bNumeric: !0,
              strTooltip:
                "How many of the supported pricepoints increased with the staged amounts",
            },
            {
              eColumn: "decreasing",
              strLabel: `Pricepoints
Decreasing`,
              bNumeric: !0,
              strTooltip:
                "How many of the supported pricepoints decreased with the staged amounts",
            },
            {
              eColumn: "unchanged",
              strLabel: `Pricepoints
Unchanged`,
              bNumeric: !0,
              strTooltip:
                "How many of the supported pricepoints were unchanged with the staged amounts",
            },
            {
              eColumn: "avgDiscountExisting",
              strLabel: `Avg USD Discount
(Existing)`,
              bNumeric: !0,
            },
            {
              eColumn: "avgDiscountStaged",
              strLabel: `Avg USD Discount
(Staged)`,
              bNumeric: !0,
              strTooltip: `The average discount from the USD pricepoints for staged values.

This discount is calculated using the CURRENT fx rate 

 Eg.'How do we relate to USD if we ship the staged pricing today'`,
            },
            {
              eColumn: "avgDiscountChange",
              strLabel: `Avg USD Discount
Change`,
              bNumeric: !0,
              strTooltip: `The change from Existing to Staged USD Discounts.

Eg. "do we discount more or less from USD with the staged set of pricing". 

Positive is less discount, negative is more discount.`,
            },
          ],
          Zo = new Map([
            ["increasing", 1],
            ["unchanged", 0],
            ["decreasing", -1],
          ]),
          pn = { fontVariantNumeric: "tabular-nums" },
          qo = { whiteSpace: "pre-line" },
          ua = { color: "#c7821a" },
          ei = { visibility: "hidden" },
          Rs = { listStyleType: "disc" };
        function pa(s, t) {
          switch (t) {
            case "currency":
              return la(s);
            case "name":
              return ca(s);
            case "region":
              return s.eRegionCode === as.YS ? 0 : 1;
            case "movement":
              return Zo.get(Bn(s)) ?? null;
            case "avgPercentDiff":
              return s.flAvgPercentDiff;
            case "avgPercentDiffUSD":
              return s.flAvgPercentDiffUSD;
            case "increasing":
              return s.nPricepointsIncreasing;
            case "decreasing":
              return s.nPricepointsDecreasing;
            case "unchanged":
              return s.nPricepointsUnchanged;
            case "avgDiscountExisting":
              return s.flAvgUSDDiscountExisting;
            case "avgDiscountStaged":
              return s.flAvgUSDDiscountStaged;
            case "avgDiscountChange":
              return s.flAvgUSDDiscountChange;
          }
        }
        function ti(s, t, n) {
          return [...s].sort((r, o) => {
            const l = pa(r, t),
              c = pa(o, t);
            if (l === null || c === null)
              return (l === null ? 1 : 0) - (c === null ? 1 : 0);
            const d = typeof l == "string" ? l.localeCompare(c) : l - c;
            return n ? d : -d;
          });
        }
        function lt(s) {
          return (0, e.jsx)(Zt.az, { paddingY: "1", paddingX: "2", ...s });
        }
        function si(s) {
          const {
              column: t,
              eSortColumn: n,
              bAscending: r,
              OnClick: o,
              strTooltip: l,
            } = s,
            c = t.eColumn === n;
          return (0, e.jsx)(lt, {
            background: "dull-9 20%",
            textAlign: t.bNumeric ? "end" : "start",
            onClick: () => o(t.eColumn),
            style: { cursor: "pointer", userSelect: "none" },
            children: (0, e.jsxs)(Xt.s, {
              direction: "column",
              justify: "between",
              height: "100%",
              children: [
                (0, e.jsxs)(Ne.EY, {
                  contrast: c ? "title" : "subtitle",
                  whiteSpace: "pre-line",
                  children: [
                    t.strLabel,
                    c &&
                      (0, e.jsx)(kn.V, {
                        direction: r ? "up" : "down",
                        marginStart: "1",
                      }),
                  ],
                }),
                l &&
                  (0, e.jsx)(Zt.az, {
                    textAlign: "end",
                    children: (0, e.jsx)(bs.o, {
                      small: !0,
                      tooltip: (0, e.jsx)("span", { style: qo, children: l }),
                    }),
                  }),
              ],
            }),
          });
        }
        function ur(s) {
          const { flPercent: t, strTooltip: n } = s;
          if (t === null)
            return (0, e.jsx)(lt, {
              textAlign: "end",
              children: (0, e.jsx)(Ne.EY, {
                contrast: "note",
                children: "\u2014",
              }),
            });
          const r = t < 0 ? "text-error" : t > 0 ? "text-success" : "text-body",
            o = t > 0 ? "+" : "";
          return (0, e.jsx)(lt, {
            textAlign: "end",
            children: (0, e.jsxs)(Ne.EY, {
              color: r,
              style: pn,
              children: [
                o,
                t.toFixed(1),
                "%",
                n && (0, e.jsx)(bs.o, { small: !0, tooltip: n }),
              ],
            }),
          });
        }
        function ni(s) {
          const { eMovement: t } = s;
          return t === "increasing"
            ? (0, e.jsx)(lt, {
                textAlign: "center",
                children: (0, e.jsx)(Ne.EY, {
                  color: "text-success",
                  children: (0, e.jsx)(kn.V, { direction: "up" }),
                }),
              })
            : t === "decreasing"
              ? (0, e.jsx)(lt, {
                  textAlign: "center",
                  children: (0, e.jsx)(Ne.EY, {
                    color: "text-error",
                    children: (0, e.jsx)(kn.V, { direction: "down" }),
                  }),
                })
              : t === "unchanged"
                ? (0, e.jsx)(lt, {
                    textAlign: "center",
                    children: (0, e.jsx)(Ne.EY, {
                      color: "text-body",
                      children: "\u2013",
                    }),
                  })
                : (0, e.jsx)(lt, {});
        }
        function pr(s) {
          return (0, e.jsx)(lt, {
            textAlign: "end",
            children: (0, e.jsx)(Ne.EY, { style: pn, children: s.nCount }),
          });
        }
        function $s(s) {
          const { flPercent: t, bStarred: n } = s;
          return t === null
            ? (0, e.jsx)(lt, {
                textAlign: "end",
                children: (0, e.jsx)(Ne.EY, {
                  contrast: "note",
                  children: "\u2014",
                }),
              })
            : (0, e.jsx)(lt, {
                textAlign: "end",
                children: (0, e.jsxs)(Ne.EY, {
                  color: "text-body",
                  contrast: "body",
                  style: pn,
                  children: [t.toFixed(1), "%", n && "*"],
                }),
              });
        }
        function Nn(s, t) {
          if (t === Mt.CS) return 1;
          const n = s?.rates[t];
          return n || null;
        }
        function mn(s) {
          const { nAmount: t, eCurrencyCode: n, bBold: r } = s;
          return t === null
            ? (0, e.jsx)(lt, {
                textAlign: "end",
                children: (0, e.jsx)(Ne.EY, {
                  contrast: "note",
                  children: "\u2014",
                }),
              })
            : (0, e.jsx)(lt, {
                textAlign: "end",
                children: (0, e.jsx)(Ne.EY, {
                  weight: r ? "heavy" : void 0,
                  style: pn,
                  children: (0, In.x)(t, n),
                }),
              });
        }
        function ma(s) {
          const { nDifference: t, eCurrencyCode: n } = s;
          if (t === null)
            return (0, e.jsx)(lt, {
              textAlign: "end",
              children: (0, e.jsx)(Ne.EY, {
                contrast: "note",
                children: "\u2014",
              }),
            });
          const r = t < 0 ? "text-error" : t > 0 ? "text-success" : "text-body",
            o = t > 0 ? "+" : "";
          return (0, e.jsx)(lt, {
            textAlign: "end",
            children: (0, e.jsxs)(Ne.EY, {
              color: r,
              style: pn,
              children: [o, (0, In.x)(t, n)],
            }),
          });
        }
        function Fs(s) {
          return new Date(s * 1e3).toISOString().slice(0, 10);
        }
        function ri(s) {
          const {
              row: t,
              bExpanded: n,
              OnToggle: r,
              launchFXRates: o,
              currentFXRates: l,
              strLaunchTooltip: c,
              flSignificantPercentDiff: d,
              bNearCNYDiscount: g,
            } = s,
            x = Nn(o, t.eCurrencyCode),
            f = Nn(l, t.eCurrencyCode),
            _ = dr(t, d);
          let C;
          return (
            t.flAvgPercentDiff !== null &&
              t.flAvgPercentDiffUSD !== null &&
              Math.abs(t.flAvgPercentDiff) > sa &&
              Math.abs(t.flAvgPercentDiffUSD) > sa &&
              (t.flAvgPercentDiff > 0 && t.flAvgPercentDiffUSD < 0
                ? (C =
                    "Currency FX rates decreased more than local pricing multipliers increased")
                : t.flAvgPercentDiff < 0 &&
                  t.flAvgPercentDiffUSD > 0 &&
                  (C =
                    "Currency FX rates increased more than local pricing multipliers decreased")),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)(Ks.x, {
                  columns: "subgrid",
                  gridColumn: "1 / -1",
                  alignItems: "center",
                  background: _ ? Yo : "dull-9 10%",
                  onClick: r,
                  style: { cursor: "pointer" },
                  children: [
                    (0, e.jsx)(lt, {
                      children: (0, e.jsxs)(Ne.EY, {
                        whiteSpace: "nowrap",
                        children: [
                          (0, e.jsx)(kn.V, {
                            direction: n ? "down" : "right",
                            marginEnd: "1",
                          }),
                          la(t),
                        ],
                      }),
                    }),
                    (0, e.jsx)(lt, {
                      children: (0, e.jsx)(Ne.EY, {
                        whiteSpace: "nowrap",
                        children: ca(t),
                      }),
                    }),
                    (0, e.jsx)(lt, {
                      textAlign: "center",
                      children:
                        t.eRegionCode !== as.YS &&
                        (0, e.jsx)(Go.i, { size: "4" }),
                    }),
                    (0, e.jsx)(ni, { eMovement: Bn(t) }),
                    (0, e.jsx)(ur, { flPercent: t.flAvgPercentDiff }),
                    (0, e.jsx)(ur, {
                      flPercent: t.flAvgPercentDiffUSD,
                      strTooltip: C,
                    }),
                    (0, e.jsx)(pr, { nCount: t.nPricepointsIncreasing }),
                    (0, e.jsx)(pr, { nCount: t.nPricepointsDecreasing }),
                    (0, e.jsx)(pr, { nCount: t.nPricepointsUnchanged }),
                    (0, e.jsx)($s, { flPercent: t.flAvgUSDDiscountExisting }),
                    (0, e.jsx)($s, {
                      flPercent: t.flAvgUSDDiscountStaged,
                      bStarred: g,
                    }),
                    (0, e.jsx)($s, { flPercent: t.flAvgUSDDiscountChange }),
                  ],
                }),
                n &&
                  (0, e.jsx)(Zt.az, {
                    gridColumn: "1 / -1",
                    paddingStart: "6",
                    paddingBottom: "2",
                    children: (0, e.jsxs)(Ks.x, {
                      columns: "repeat( 11, max-content )",
                      gap: "1",
                      children: [
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsx)(Ne.EY, {
                            contrast: "subtitle",
                            children: "USD Pricepoint",
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsx)(Ne.EY, {
                            contrast: "subtitle",
                            children: "Existing",
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsx)(Ne.EY, {
                            contrast: "subtitle",
                            children: "Staged",
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsx)(Ne.EY, {
                            contrast: "subtitle",
                            children: "Difference",
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsx)(Ne.EY, {
                            contrast: "subtitle",
                            children: "% Difference",
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsx)(Ne.EY, {
                            contrast: "subtitle",
                            children: "Existing (USD)",
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsx)(Ne.EY, {
                            contrast: "subtitle",
                            children: "Staged (USD)",
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsx)(Ne.EY, {
                            contrast: "subtitle",
                            children: "Difference (USD)",
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsxs)(Ne.EY, {
                            contrast: "subtitle",
                            whiteSpace: "nowrap",
                            children: [
                              "USD Discount (Existing, At Launch)",
                              o &&
                                (0, e.jsx)(bs.o, {
                                  small: !0,
                                  tooltip: `USD @ ${Fs(o.rt_date)}`,
                                }),
                            ],
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsxs)(Ne.EY, {
                            contrast: "subtitle",
                            whiteSpace: "nowrap",
                            children: [
                              "USD Discount (Staged)",
                              l &&
                                (0, e.jsx)(bs.o, {
                                  small: !0,
                                  tooltip: `USD @ ${Fs(l.rt_date)}`,
                                }),
                            ],
                          }),
                        }),
                        (0, e.jsx)(lt, {
                          textAlign: "end",
                          children: (0, e.jsx)(Ne.EY, {
                            contrast: "subtitle",
                            children: "USD Discount Change",
                          }),
                        }),
                        t.rgPricepointDiffs.map((T) => {
                          const U =
                              f === null
                                ? null
                                : Math.round(T.nExistingAmount * f),
                            ye =
                              f === null
                                ? null
                                : Math.round(T.nStagedAmount * f),
                            ne = U === null || ye === null ? null : ye - U,
                            Q =
                              x === null
                                ? null
                                : cr(T.nExistingAmount, x, T.nUSDPricepoint),
                            Fe =
                              f === null
                                ? null
                                : cr(T.nStagedAmount, f, T.nUSDPricepoint);
                          return (0, e.jsxs)(
                            Ks.x,
                            {
                              columns: "subgrid",
                              gridColumn: "1 / -1",
                              alignItems: "center",
                              background: "dull-9 10%",
                              children: [
                                (0, e.jsx)(mn, {
                                  nAmount: T.nUSDPricepoint,
                                  eCurrencyCode: Mt.CS,
                                  bBold: !0,
                                }),
                                (0, e.jsx)(mn, {
                                  nAmount: T.nExistingAmount,
                                  eCurrencyCode: t.eCurrencyCode,
                                }),
                                (0, e.jsx)(mn, {
                                  nAmount: T.nStagedAmount,
                                  eCurrencyCode: t.eCurrencyCode,
                                }),
                                (0, e.jsx)(ma, {
                                  nDifference:
                                    T.nStagedAmount - T.nExistingAmount,
                                  eCurrencyCode: t.eCurrencyCode,
                                }),
                                (0, e.jsx)(ur, { flPercent: T.flPercentDiff }),
                                (0, e.jsx)(mn, {
                                  nAmount: U,
                                  eCurrencyCode: Mt.CS,
                                }),
                                (0, e.jsx)(mn, {
                                  nAmount: ye,
                                  eCurrencyCode: Mt.CS,
                                }),
                                (0, e.jsx)(ma, {
                                  nDifference: ne,
                                  eCurrencyCode: Mt.CS,
                                }),
                                (0, e.jsx)($s, { flPercent: Q }),
                                (0, e.jsx)($s, { flPercent: Fe }),
                                (0, e.jsx)($s, {
                                  flPercent:
                                    Q === null || Fe === null ? null : Fe - Q,
                                }),
                              ],
                            },
                            T.nUSDPricepoint,
                          );
                        }),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function ai(s) {
          const {
            rgRows: t,
            flSignificantPercentDiff: n,
            eTableFilter: r,
            OnToggleFilter: o,
          } = s;
          let l = 0,
            c = 0,
            d = 0,
            g = 0,
            x = 0;
          for (const _ of t) {
            const C = Bn(_);
            C === "increasing"
              ? (l++, dr(_, n) && c++)
              : C === "decreasing"
                ? (g++, dr(_, n) && x++)
                : C === "unchanged" && d++;
          }
          const f = [
            { eMovement: "increasing", nCount: l, nShaded: c },
            { eMovement: "unchanged", nCount: d, nShaded: 0 },
            { eMovement: "decreasing", nCount: g, nShaded: x },
          ];
          return (0, e.jsx)(Ks.x, {
            columns: "max-content max-content",
            alignItems: "center",
            gapX: "2",
            gapY: "1",
            marginTop: "2",
            children: f.map((_) =>
              (0, e.jsxs)(
                p.Fragment,
                {
                  children: [
                    (0, e.jsxs)(Ne.EY, {
                      children: [
                        "Currencies/Regions ",
                        _.eMovement,
                        ": ",
                        _.nCount,
                        (0, e.jsxs)("span", {
                          style: _.nShaded > 0 ? void 0 : ei,
                          children: [
                            " (",
                            (0, e.jsxs)("span", {
                              style: ua,
                              children: [_.nShaded, " significantly"],
                            }),
                            ")",
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)(Zt.az, {
                      children:
                        _.nCount > 0 &&
                        (0, e.jsxs)(Ln.$, {
                          size: "1",
                          variant: "outline",
                          onClick: () => o(_.eMovement),
                          children: [
                            r === _.eMovement ? "Hide" : "Show",
                            " ",
                            _.eMovement,
                          ],
                        }),
                    }),
                  ],
                },
                _.eMovement,
              ),
            ),
          });
        }
        function oi(s) {
          const {
              strTitle: t,
              rgRows: n,
              launchFXRates: r,
              currentFXRates: o,
              flSignificantPercentDiff: l,
              bCompareToCNY: c,
            } = s,
            d =
              r && o
                ? `Compares the staged pricing at current FX rates (${Fs(o.rt_date)}) against the existing pricing at launch FX rates (${Fs(r.rt_date)})`
                : void 0,
            g = r
              ? `The average discount from the USD pricepoints for this existing values.

This is calculated using the PRIOR fx rate (${Fs(r.rt_date)})

Eg. 'How did we relate to USD when we shipped this pricing'`
              : void 0,
            x = new Map([
              ["avgPercentDiffUSD", d],
              ["avgDiscountExisting", g],
            ]),
            [f, _] = (0, p.useState)("avgPercentDiff"),
            [C, T] = (0, p.useState)(!1),
            U = (ct) => {
              T(ct === f ? !C : !0), _(ct);
            },
            [ye, ne] = (0, p.useState)(null),
            [Q, Fe] = (0, p.useState)(null),
            Re = (ct) => Fe(ct === Q ? null : ct),
            $e = Q === "all" ? n : n.filter((ct) => Bn(ct) === Q),
            ts = n.reduce((ct, Is) => ct + Is.nSkippedPricepoints, 0),
            Us = c
              ? (n.find(
                  (ct) =>
                    ct.eCurrencyCode === Mt.C6 && ct.eRegionCode === as.YS,
                )?.flAvgUSDDiscountStaged ?? null)
              : null;
          return (0, e.jsxs)(Zt.az, {
            marginTop: "4",
            children: [
              (0, e.jsxs)(Xt.s, {
                align: "center",
                gap: "4",
                children: [
                  (0, e.jsx)(Zr.D, { level: "3", children: t }),
                  (0, e.jsx)(Ln.$, {
                    size: "1",
                    variant: "outline",
                    onClick: () => Re("all"),
                    children: Q === "all" ? "Hide all" : "Show all",
                  }),
                ],
              }),
              (0, e.jsx)(ai, {
                rgRows: n,
                flSignificantPercentDiff: l,
                eTableFilter: Q,
                OnToggleFilter: Re,
              }),
              Q !== null &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("br", {}),
                    (0, e.jsxs)("ul", {
                      children: [
                        (0, e.jsxs)(Ne.EY, {
                          as: "li",
                          size: "3",
                          style: Rs,
                          children: [
                            (0, e.jsx)("span", {
                              style: Xo,
                              children: "Orange shaded rows",
                            }),
                            " flag an average movement of greater than +/-",
                            l,
                            "% in local currency amounts",
                          ],
                        }),
                        Us !== null &&
                          (0, e.jsxs)(Ne.EY, {
                            as: "li",
                            size: "3",
                            style: Rs,
                            children: [
                              "* - Staged USD Discount is within +/-",
                              na,
                              "% of China's discount (",
                              Us.toFixed(1),
                              "%)",
                            ],
                          }),
                      ],
                    }),
                    (0, e.jsxs)(Ks.x, {
                      columns: `repeat( ${da.length}, max-content )`,
                      gap: "1",
                      alignContent: "center",
                      marginTop: "3",
                      children: [
                        da.map((ct) =>
                          (0, e.jsx)(
                            si,
                            {
                              column: ct,
                              eSortColumn: f,
                              bAscending: C,
                              OnClick: U,
                              strTooltip: x.get(ct.eColumn) ?? ct.strTooltip,
                            },
                            ct.eColumn,
                          ),
                        ),
                        ti($e, f, C).map((ct) => {
                          const Is = ra(ct.eCurrencyCode, ct.eRegionCode),
                            _s =
                              Us !== null &&
                              ct.flAvgUSDDiscountStaged !== null &&
                              ct.eCurrencyCode !== Mt.C6 &&
                              Math.abs(ct.flAvgUSDDiscountStaged - Us) <= na;
                          return (0, e.jsx)(
                            ri,
                            {
                              row: ct,
                              bExpanded: Is === ye,
                              OnToggle: () => ne(Is === ye ? null : Is),
                              launchFXRates: r,
                              currentFXRates: o,
                              strLaunchTooltip: d,
                              flSignificantPercentDiff: l,
                              bNearCNYDiscount: _s,
                            },
                            Is,
                          );
                        }),
                      ],
                    }),
                    (0, e.jsxs)(Ne.EY, {
                      as: "div",
                      contrast: "note",
                      marginTop: "2",
                      children: [
                        ts,
                        " currency / pricepoint pairs were priced on only one side and are not included above.",
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function ii(s) {
          const { currentFXRates: t, latestPricingMultiplierSet: n } = s,
            [r, o, l] = (0, _e.uD)(),
            [c, d] = (0, p.useState)(null),
            [g, x] = (0, p.useState)(null),
            f = async () => {
              if (!t || !n) return;
              const _ = new FormData();
              _.append("sessionid", (0, Y.KC)()),
                _.append(
                  "pricing_multiplier_id",
                  String(n.pricing_multiplier_id),
                ),
                _.append("rt_date_fx", String(t.rt_date));
              try {
                const C = await $t().post(
                  `${Y.TS.PARTNER_BASE_URL}admin/ajaxstagenewpricingguidelines/`,
                  _,
                );
                C.data.success === Kt.R
                  ? (x(null), d(C.data.rows_written))
                  : x(`Staging failed, EResult ${C.data.success}`);
              } catch {
                x("Staging failed, the request did not complete");
              }
            };
          return (0, e.jsxs)(Zt.az, {
            marginTop: "6",
            children: [
              (0, e.jsx)(Ln.$, {
                onClick: o,
                disabled: !t || !n,
                children: "Stage New Pricing",
              }),
              !t &&
                (0, e.jsx)(Ne.EY, {
                  as: "div",
                  contrast: "note",
                  marginTop: "2",
                  children: "No FX rates are available to stage with",
                }),
              !n &&
                (0, e.jsx)(Ne.EY, {
                  as: "div",
                  contrast: "note",
                  marginTop: "2",
                  children:
                    "No pricing multiplier set is available to stage with",
                }),
              g &&
                (0, e.jsx)(Ne.EY, { as: "div", marginTop: "2", children: g }),
              (0, e.jsx)(Cs.E, {
                active: r,
                children: (0, e.jsx)(is.o0, {
                  strTitle: "Stage New Pricing",
                  onOK: f,
                  closeModal: l,
                  strDescription:
                    "Generate new staged pricing for every pricing method using the following values?",
                  children: (0, e.jsxs)("ul", {
                    children: [
                      (0, e.jsxs)("li", {
                        style: Rs,
                        children: ["Exchange Rate Date: ", t && Fs(t.rt_date)],
                      }),
                      (0, e.jsxs)("li", {
                        style: Rs,
                        children: [
                          "Pricing Multiplier ID: ",
                          n?.pricing_multiplier_id,
                        ],
                      }),
                      (0, e.jsxs)("li", {
                        style: Rs,
                        children: [
                          "Pricing Multiplier Date: ",
                          n && Fs(n.rt_date_source),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, e.jsx)(Cs.E, {
                active: c !== null,
                children: (0, e.jsx)(is.o0, {
                  strTitle: "New Pricing Staged",
                  strDescription: `Staged ${c} rows. Reload the page to compare them.`,
                  bAlertDialog: !0,
                  bHideCloseIcon: !0,
                  bDisableBackgroundDismiss: !0,
                  strOKButtonText: "Reload Page",
                  onOK: () => window.location.reload(),
                }),
              }),
            ],
          });
        }
        const li = {
          [Mn.Y5.KC]: "Purchasing Power Conversion",
          [Mn.Y5.bA]: "Exchange-rate Conversion",
          [Mn.Y5.lZ]: "Multi-variable conversion",
        };
        function ci(s) {
          const t = (0, p.useMemo)(
              () =>
                (0, Yt.Tc)("current_fx_rates", "application_config") ?? null,
              [],
            ),
            n = (0, p.useMemo)(
              () =>
                (0, Yt.Tc)(
                  "latest_pricing_multiplier_set",
                  "application_config",
                ) ?? null,
              [],
            ),
            [r, o] = (0, p.useState)(String(ta)),
            l = Number(r),
            c = r.trim() !== "" && l >= 0 && l <= 100,
            d = c ? l : ta,
            g = (0, p.useMemo)(() => {
              const x =
                (0, Yt.Tc)("existing_price_points", "application_config") ?? [];
              return (
                (0, Yt.Tc)("pricing_methods", "application_config") ?? []
              ).map((_) => {
                const C = _.launch_fx_rates ?? null,
                  T = Qo(
                    aa(x, _.convert_method),
                    aa(_.staged_price_points ?? []),
                    C,
                    t,
                  ).filter(
                    (U) =>
                      !(U.eCurrencyCode === Mt.CS && U.eRegionCode === as.YS),
                  );
                return {
                  eConvertMethod: _.convert_method,
                  rgRows: T,
                  launchFXRates: C,
                };
              });
            }, [t]);
          return (0, e.jsxs)("div", {
            className: Pn().AdminPageCtn,
            children: [
              (0, e.jsx)("br", {}),
              (0, e.jsx)("h2", {
                className: Pn().ValveOnlyTitle,
                children: "Package Pricing Guideline Comparison",
              }),
              (0, e.jsxs)("ul", {
                children: [
                  (0, e.jsx)(Ne.EY, {
                    as: "li",
                    size: "3",
                    style: Rs,
                    children:
                      "This page shows staged package pricing guidelines against the currently live package pricing guidelines, per USD pricepoint.",
                  }),
                  (0, e.jsxs)(Ne.EY, {
                    as: "li",
                    size: "3",
                    style: Rs,
                    children: [
                      (0, e.jsx)("span", {
                        style: ua,
                        children: "Significant movement",
                      }),
                      ": Currencies or regions moving more than +/-",
                      (0, e.jsx)(Zt.az, {
                        display: "inline-block",
                        width: "48px",
                        marginX: "1",
                        children: (0, e.jsx)(Vo.k, {
                          size: "1",
                          variant: "underline",
                          inputMode: "decimal",
                          value: r,
                          onTextChange: o,
                          status: c ? void 0 : "error",
                        }),
                      }),
                      "% in local currency amounts",
                    ],
                  }),
                ],
              }),
              g.map((x, f) =>
                (0, e.jsxs)(
                  p.Fragment,
                  {
                    children: [
                      f > 0 && (0, e.jsx)(Ko, { size: "4", marginY: "6" }),
                      (0, e.jsx)(oi, {
                        strTitle: li[x.eConvertMethod] ?? "Unknown",
                        rgRows: x.rgRows,
                        launchFXRates: x.launchFXRates,
                        currentFXRates: t,
                        flSignificantPercentDiff: d,
                        bCompareToCNY: x.eConvertMethod === Mn.Y5.lZ,
                      }),
                    ],
                  },
                  x.eConvertMethod,
                ),
              ),
              (0, e.jsx)(ii, {
                currentFXRates: t,
                latestPricingMultiplierSet: n,
              }),
            ],
          });
        }
        var at = i(26673),
          ga = i(83516);
        const Ys = "0",
          Xs = "1",
          Qs = "2",
          As = "3",
          vs = "4";
        function ha(s) {
          return (
            !!s && Object.values(s).some((t) => t && t.trim().length !== 0)
          );
        }
        function Js(s) {
          switch (s.kind) {
            case Ys:
              return (0, a.we)(
                "#StoreAdmin_PurchaseOptionsOrder_InvalidKindError",
              );
            case As:
              return ha(s.header)
                ? null
                : (0, a.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingHeaderError",
                  );
            case Xs:
              return s.package_id
                ? null
                : (0, a.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingPackageError",
                  );
            case Qs:
              return s.bundle_id
                ? null
                : (0, a.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingBundleError",
                  );
            case vs:
              return ha(s.dropdown_title)
                ? !s.dropdown_items || s.dropdown_items.length < 2
                  ? (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_MissingDropdownItemsError",
                    )
                  : null
                : (0, a.we)(
                    "#StoreAdmin_PurchaseOptionsOrder_MissingDropdownTitleError",
                  );
          }
        }
        const Ds = (0, p.createContext)(null);
        function di(s, t) {
          if (s.length === 0) return !1;
          for (const n of s)
            switch (n.kind) {
              case Qs:
                return !1;
              case As:
                continue;
              case Ys:
                return !1;
              case Xs:
                return t.includes(n.package_id);
              case vs:
                return (
                  n.dropdown_items &&
                  n.dropdown_items.length > 0 &&
                  n.dropdown_items[0].kind === "package" &&
                  t.includes(n.dropdown_items[0].package_id)
                );
            }
          return !1;
        }
        function ui(s) {
          const {
              appid: t,
              rgBaseGamePackageIds: n,
              rgAllBundles: r,
              rgAllPackages: o,
              rgValidLanguages: l,
            } = s,
            [c, d] = (0, p.useState)(s.bManualPurchaseOptionsOrder),
            [g, x] = (0, p.useState)(s.rgPurchaseOptionsOrder),
            [f, _] = (0, p.useMemo)(() => {
              const ne = new Set(),
                Q = new Set();
              for (const $e of g)
                switch ($e.kind) {
                  case Xs:
                    Q.add($e.package_id);
                    break;
                  case Qs:
                    ne.add($e.bundle_id && $e.bundle_id);
                    break;
                  case vs:
                    for (const ts of $e.dropdown_items ?? [])
                      Q.add(ts.package_id);
                    break;
                }
              const Fe = o
                  .filter(($e) => !Q.has($e.packageid))
                  .map(($e) => ({
                    value: $e.packageid,
                    label: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      $e.name,
                      $e.packageid,
                    ),
                  })),
                Re = r
                  .filter(($e) => !ne.has($e.bundleid))
                  .map(($e) => ({
                    value: $e.bundleid,
                    label: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      $e.name,
                      $e.bundleid,
                    ),
                  }));
              return [Fe, Re];
            }, [r, o, g]),
            C = (0, p.useMemo)(
              () =>
                l.map((ne) => {
                  const Q = (0, a.we)(`#Language_${ne}`);
                  return { value: ne, label: Q };
                }),
              [l],
            ),
            T = n.length === 0 || di(g, n),
            U = g.some((ne) => Js(ne) !== null) || !T,
            ye = {
              appid: t,
              rgUnusedBundles: _,
              rgUnusedPackages: f,
              rgValidLanguages: C,
              bHasErrors: U,
              rgAllPackages: o,
              rgAllBundles: r,
            };
          return (0, e.jsxs)("div", {
            className: at.PurchaseOptionsOrderEditor,
            children: [
              (0, e.jsx)("h2", {
                children: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Title"),
              }),
              (0, e.jsx)("p", {
                children: (0, a.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_Description",
                ),
              }),
              (0, e.jsxs)("div", {
                className: at.PurchaseOptionsManualToggleCtn,
                children: [
                  (0, e.jsx)(ga._H, { value: c, onChange: (ne) => d(ne) }),
                  (0, e.jsx)("div", {
                    className: at.Label,
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_ToggleLabel",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: "app[purchase_options_order][method]",
                    value: c ? "manual" : "original",
                  }),
                ],
              }),
              (0, e.jsxs)(Ds.Provider, {
                value: ye,
                children: [
                  c &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !T &&
                          (0, e.jsxs)("div", {
                            className: at.PurchaseOptionError,
                            children: [
                              (0, e.jsx)(R.Q9b, { className: at.Exclamation }),
                              (0, a.we)(
                                "#StoreAdmin_PurchaseOptionsOrder_FirstItemMustBeBaseGame",
                              ),
                              "\xA0 ",
                              n.join(", "),
                            ],
                          }),
                        (0, e.jsx)(Ci, {
                          appid: s.appid,
                          items: g,
                          setItems: x,
                          component: gi,
                          noItemsPlaceholder: (0, e.jsx)("p", {
                            className: at.NoPurchaseOptions,
                            children: (0, a.we)(
                              "#StoreAdmin_PurchaseOptionsOrder_NoPurchaseOptionsPlaceholder",
                            ),
                          }),
                          emptyItem: () => ({ kind: Ys }),
                          addText: (0, a.we)(
                            "#StoreAdmin_PurchaseOptionsOrder_Add",
                          ),
                        }),
                      ],
                    }),
                  (0, e.jsx)(pi, {
                    rgOptions: g,
                    rgOriginalOptions: s.rgPurchaseOptionsOrder,
                  }),
                ],
              }),
            ],
          });
        }
        function pi(s) {
          const { rgOptions: t, rgOriginalOptions: n } = s;
          if ((0, p.useContext)(Ds).bHasErrors) return null;
          const o = [];
          for (let l = 0; l < Math.max(t.length, n.length); l++)
            l < t.length
              ? o.push(
                  (0, e.jsx)(
                    "div",
                    {
                      children: (0, e.jsx)(mi, {
                        option: t[l],
                        originalOption: n[l] ?? null,
                        index: l,
                      }),
                    },
                    l,
                  ),
                )
              : o.push(
                  (0, e.jsx)(
                    "input",
                    {
                      type: "hidden",
                      name: `app[purchase_options_order][order][${l}]`,
                      value: "",
                    },
                    l,
                  ),
                );
          return (0, e.jsx)(e.Fragment, { children: o });
        }
        function mi(s) {
          const { option: t, originalOption: n, index: r } = s,
            o = `app[purchase_options_order][order][${r}]`;
          if (
            (0, p.useContext)(Ds).bHasErrors ||
            !n ||
            (t.kind === n.kind && t.kind !== vs && t.kind !== As)
          )
            return null;
          if (t.kind === vs && n.kind === vs) {
            let c = [];
            if (t.dropdown_items.length < n.dropdown_items.length)
              for (
                let d = t.dropdown_items.length;
                d < n.dropdown_items.length;
                d++
              )
                c.push(
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: `${o}[dropdown_items][${d}]`,
                    value: "",
                  }),
                );
            for (const [d, g] of Object.entries(n.dropdown_title ?? {}))
              g.trim().length !== 0 &&
                ((t.dropdown_title && t.dropdown_title[d].trim().length > 0) ||
                  c.push(
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `${o}[dropdown_title][${d}]`,
                      value: "",
                    }),
                  ));
            for (const [d, g] of Object.entries(n.description ?? {}))
              g.trim().length !== 0 &&
                ((t.description && t.description[d].trim().length > 0) ||
                  c.push(
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `${o}[description][${d}]`,
                      value: "",
                    }),
                  ));
            return (0, e.jsx)(e.Fragment, { children: c });
          }
          if (t.kind === As && n.kind === As) {
            let c = [];
            for (const [d, g] of Object.entries(n.header ?? {}))
              g.trim().length !== 0 &&
                ((t.header && t.header[d].trim().length > 0) ||
                  c.push(
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `${o}[header][${d}]`,
                      value: "",
                    }),
                  ));
            return (0, e.jsx)(e.Fragment, { children: c });
          }
          switch (n.kind) {
            case Xs:
              return (0, e.jsx)("input", {
                type: "hidden",
                name: `${o}[package_id]`,
                value: "",
              });
            case Qs:
              return (0, e.jsx)("input", {
                type: "hidden",
                name: `${o}[bundle_id]`,
                value: "",
              });
            case As:
              return (0, e.jsx)("input", {
                type: "hidden",
                name: `${o}[header]`,
                value: "",
              });
            case vs:
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: `${o}[dropdown_title]`,
                    value: "",
                  }),
                  (0, e.jsx)("input", {
                    type: "hidden",
                    name: `${o}[description]`,
                    value: "",
                  }),
                  n.dropdown_items?.map((c, d) =>
                    (0, e.jsx)(
                      "input",
                      {
                        type: "hidden",
                        name: `${o}[dropdown_items][${d}]`,
                        value: "",
                      },
                      d,
                    ),
                  ),
                ],
              });
            case Ys:
              return null;
          }
        }
        function gi(s) {
          const { index: t, item: n, setItem: r, removeItem: o } = s,
            l = (0, p.useContext)(Ds),
            c = (x) => {
              let f = structuredClone(n);
              (f.kind = x.target.value), r(f);
            },
            d = [
              {
                value: Xs,
                label: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Package"),
              },
              {
                value: Qs,
                label: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Bundle"),
              },
              {
                value: As,
                label: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Header"),
              },
              {
                value: vs,
                label: (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Dropdown"),
              },
            ];
          let g;
          switch (n.kind) {
            case Ys:
              g = (0, e.jsx)(hi, { item: n, index: t });
              break;
            case Xs:
              g = (0, e.jsx)(_i, { item: n, setItem: r, index: t });
              break;
            case Qs:
              g = (0, e.jsx)(fi, { item: n, setItem: r, index: t });
              break;
            case As:
              g = (0, e.jsx)(xi, { item: n, setItem: r, index: t });
              break;
            case vs:
              g = (0, e.jsx)(Si, { item: n, setItem: r, index: t });
              break;
          }
          return (0, e.jsxs)("div", {
            className: at.PurchaseOption,
            children: [
              !l.bHasErrors &&
                (0, e.jsx)("input", {
                  type: "hidden",
                  name: `app[purchase_options_order][order][${t}][kind]`,
                  value: n.kind,
                }),
              (0, e.jsxs)("div", {
                className: at.PurchaseOptionFirstLine,
                children: [
                  (0, e.jsxs)("select", {
                    onChange: c,
                    value: n.kind,
                    children: [
                      (0, e.jsx)("option", { hidden: !0, value: Ys }),
                      d.map((x, f) =>
                        (0, e.jsx)(
                          "option",
                          { value: x.value, children: x.label },
                          f,
                        ),
                      ),
                    ],
                  }),
                  (0, e.jsx)("a", {
                    className: at.RemovePurchaseOption,
                    onClick: o,
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_Remove",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: at.PurchaseOptionDetails,
                children: g,
              }),
            ],
          });
        }
        function gn(s) {
          return s.message === null
            ? null
            : (0, e.jsxs)("div", {
                className: at.PurchaseOptionError,
                children: [
                  (0, e.jsx)(R.Q9b, { className: at.Exclamation }),
                  s.message,
                ],
              });
        }
        function hi(s) {
          const t = Js(s.item);
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)(gn, { message: t }),
          });
        }
        function _i(s) {
          const { item: t, index: n, setItem: r } = s,
            o = (0, p.useContext)(Ds),
            l = (g) => {
              const x = structuredClone(t);
              (x.package_id = g.value), r(x);
            },
            c = o.rgAllPackages.find((g) => g.packageid === t.package_id),
            d = {
              value: t.package_id,
              label: c
                ? c.name
                : (0, a.we)("#StoreAdmin_PurchaseOptionsOrder_Loading"),
            };
          return (0, e.jsxs)("div", {
            className: at.PackageOption,
            children: [
              (0, e.jsx)(gn, { message: Js(t) }),
              (0, e.jsx)(kt.Ay, {
                className: "react-select-container",
                classNamePrefix: "react-select",
                isSearchable: !0,
                isMulti: !1,
                name: o.bHasErrors
                  ? void 0
                  : `app[purchase_options_order][order][${n}][package_id]`,
                placeholder: (0, a.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder",
                ),
                options: o.rgUnusedPackages,
                value: d,
                onChange: l,
              }),
            ],
          });
        }
        function fi(s) {
          const t = (0, p.useContext)(Ds),
            { item: n, setItem: r, index: o } = s,
            l = (d) => {
              const g = structuredClone(n);
              (g.bundle_id = d.value), r(g);
            };
          let c;
          if (n.bundle_id) {
            const d = t.rgAllBundles.find((g) => g.bundleid === n.bundle_id);
            c = {
              value: n.bundle_id,
              label: (0, a.we)(
                "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                d.name,
                n.bundle_id,
              ),
            };
          }
          return (0, e.jsxs)("div", {
            className: at.BundleOption,
            children: [
              (0, e.jsx)(gn, { message: Js(n) }),
              (0, e.jsx)(kt.Ay, {
                className: "react-select-container",
                classNamePrefix: "react-select",
                isSearchable: !0,
                isMulti: !1,
                value: c,
                name: t.bHasErrors
                  ? void 0
                  : `app[purchase_options_order][order][${o}][bundle_id]`,
                placeholder: (0, a.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_BundlePlaceholder",
                ),
                options: t.rgUnusedBundles,
                onChange: l,
              }),
            ],
          });
        }
        function xi(s) {
          const t = (0, p.useContext)(Ds),
            { index: n, item: r, setItem: o } = s,
            [l, c] = (0, p.useState)("english"),
            d = (r.header && r.header[l]) || "",
            g = (f) => {
              const _ = f.target.value;
              let C = structuredClone(r);
              C.header === void 0 && (C.header = {}), (C.header[l] = _), o(C);
            },
            x = (f) => {
              const _ = f.target.value;
              c(_);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(gn, { message: Js(r) }),
              (0, e.jsxs)("div", {
                className: at.PurchaseOptionHeader,
                children: [
                  (0, e.jsx)("input", {
                    type: "hidden",
                    value: As,
                    name: `app[purchase_options_order][order][${n}][kind]`,
                  }),
                  (0, e.jsx)("input", {
                    type: "text",
                    onInput: g,
                    value: d,
                    name: `app[purchase_options_order][order][${n}][header][${l}]`,
                    className: at.HeaderText,
                    placeholder: "Header text",
                  }),
                  t.rgValidLanguages.map((f, _) =>
                    f.value === l
                      ? null
                      : r.header && r.header[f.value]
                        ? (0, e.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: `app[purchase_options_order][order][${n}][header][${f.value}]`,
                              value: r.header[f.value],
                            },
                            _,
                          )
                        : null,
                  ),
                  (0, e.jsx)("select", {
                    value: l,
                    onChange: x,
                    className: at.HeaderLanguage,
                    children: t.rgValidLanguages.map((f, _) =>
                      (0, e.jsx)(
                        "option",
                        { value: f.value, children: f.label },
                        _,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Si(s) {
          const t = (0, p.useContext)(Ds),
            { item: n, setItem: r, index: o } = s,
            [l, c] = (0, p.useState)("english"),
            [d, g] = (0, p.useState)("english"),
            x = (ne) => {
              const Q = structuredClone(n);
              Q.dropdown_title || (Q.dropdown_title = {}),
                (Q.dropdown_title[l] = ne.target.value),
                r(Q);
            },
            f = (ne) => {
              const Q = structuredClone(n);
              Q.description || (Q.description = {}),
                (Q.description[d] = ne.target.value),
                r(Q);
            },
            _ = (ne) => {
              const Q = structuredClone(n);
              Q.dropdown_items || (Q.dropdown_items = []);
              let Fe = { kind: "package", package_id: ne.value[1] };
              Q.dropdown_items.push(Fe), r(Q);
            },
            C = t.rgUnusedPackages.map((ne) => ({
              value: ["package", ne.value],
              label: ne.label,
            })),
            T = (ne) => {
              if (ne.package_id) {
                const Q = t.rgAllPackages.find(
                  (Fe) => Fe.packageid === ne.package_id,
                );
                return (0, e.jsx)("div", {
                  className: at.DropdownOptionRow,
                  children: (0, e.jsx)("a", {
                    href: `${Y.TS.PARTNER_BASE_URL}store/packagelanding/${ne.package_id}`,
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      Q.name,
                      ne.package_id,
                    ),
                  }),
                });
              } else if (ne.bundle_id) {
                const Q = t.rgAllBundles.find(
                  (Fe) => Fe.bundleid === ne.bundle_id,
                );
                return (0, e.jsx)("div", {
                  className: at.DropdownOptionRow,
                  children: (0, e.jsx)("a", {
                    href: `${Y.TS.PARTNER_BASE_URL}bundles/view/${ne.bundle_id}`,
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_NameWithId",
                      Q.name,
                      ne.bundle_id,
                    ),
                  }),
                });
              } else return null;
            },
            U = (ne) => {
              const Q = structuredClone(n);
              Q.dropdown_items || (Q.dropdown_items = []),
                Q.dropdown_items.splice(ne, 1),
                r(Q);
            },
            ye = (ne, Q) => {
              const Fe = structuredClone(n);
              Fe.dropdown_items || (Fe.dropdown_items = []);
              const [Re] = Fe.dropdown_items.splice(ne, 1);
              Fe.dropdown_items.splice(Q, 0, Re), r(Fe);
            };
          return (0, e.jsxs)("div", {
            className: at.DropdownOption,
            children: [
              (0, e.jsx)(gn, { message: Js(n) }),
              (0, e.jsxs)("div", {
                className: at.TitleLine,
                children: [
                  (0, e.jsx)("label", {
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownTitleLabel",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    type: "text",
                    className: at.TitleInput,
                    name: `app[purchase_options_order][order][${o}][dropdown_title][${l}]`,
                    value: (n.dropdown_title && n.dropdown_title[l]) || "",
                    placeholder: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownTitlePlaceholder",
                    ),
                    onChange: x,
                  }),
                  t.rgValidLanguages.map((ne, Q) =>
                    ne.value === l
                      ? null
                      : n.dropdown_title &&
                          n.dropdown_title[ne.value] &&
                          n.dropdown_title[ne.value].trim().length > 0
                        ? (0, e.jsx)(
                            "input",
                            {
                              type: "hidden",
                              name: `app[purchase_options_order][order][${o}][dropdown_title][${ne.value}]`,
                              value: n.dropdown_title[ne.value],
                            },
                            Q,
                          )
                        : null,
                  ),
                  (0, e.jsx)("select", {
                    value: l,
                    onChange: (ne) => c(ne.target.value),
                    className: at.HeaderLanguage,
                    children: t.rgValidLanguages.map((ne, Q) =>
                      (0, e.jsx)(
                        "option",
                        { value: ne.value, children: ne.label },
                        Q,
                      ),
                    ),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: at.DescriptionLine,
                children: [
                  (0, e.jsx)("label", {
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionLabel",
                    ),
                  }),
                  (0, e.jsx)("select", {
                    value: d,
                    onChange: (ne) => g(ne.target.value),
                    className: at.HeaderLanguage,
                    children: t.rgValidLanguages.map((ne, Q) =>
                      (0, e.jsx)(
                        "option",
                        { value: ne.value, children: ne.label },
                        Q,
                      ),
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                type: "text",
                className: at.DescriptionInput,
                name: `app[purchase_options_order][order][${o}][description][${d}]`,
                value: (n.description && n.description[d]) || "",
                onChange: f,
                placeholder: (0, a.we)(
                  "#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionPlaceholder",
                ),
              }),
              t.rgValidLanguages.map((ne, Q) =>
                ne.value === d
                  ? null
                  : n.description &&
                      n.description[ne.value] &&
                      n.description[ne.value].trim().length > 0
                    ? (0, e.jsx)(
                        "input",
                        {
                          type: "hidden",
                          name: `app[purchase_options_order][order][${o}][description][${ne.value}]`,
                          value: n.description[ne.value],
                        },
                        Q,
                      )
                    : null,
              ),
              (0, e.jsxs)("div", {
                className: at.DropdownItemsCtn,
                children: [
                  (0, e.jsx)("label", {
                    children: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_DropdownItemsLabel",
                    ),
                  }),
                  (0, e.jsx)(kt.Ay, {
                    className: "react-select-container",
                    classNamePrefix: "react-select",
                    isSearchable: !0,
                    isMulti: !1,
                    placeholder: (0, a.we)(
                      "#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder",
                    ),
                    options: C,
                    onChange: _,
                    controlShouldRenderValue: !1,
                  }),
                  (0, e.jsx)(Vt.A, {
                    render: T,
                    onDelete: U,
                    onMove: ye,
                    items: n.dropdown_items ?? [],
                  }),
                  (n.dropdown_items ?? []).map((ne, Q) =>
                    (0, e.jsxs)(
                      "div",
                      {
                        children: [
                          (0, e.jsx)("input", {
                            type: "hidden",
                            name: `app[purchase_options_order][order][${o}][dropdown_items][${Q}][kind]`,
                            value: "package",
                          }),
                          (0, e.jsx)("input", {
                            type: "hidden",
                            name: `app[purchase_options_order][order][${o}][dropdown_items][${Q}][package_id]`,
                            value: ne.package_id,
                          }),
                        ],
                      },
                      Q,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
        function Ci(s) {
          const {
              items: t,
              setItems: n,
              component: r,
              emptyItem: o,
              noItemsPlaceholder: l,
              addText: c,
            } = s,
            d = (C) => () => {
              if (C === 0) return;
              let T = [...t];
              const [U] = T.splice(C, 1);
              T.splice(C - 1, 0, U), n(T);
            },
            g = (C) => () => {
              if (C === t.length - 1) return;
              let T = [...t];
              const [U] = T.splice(C, 1);
              T.splice(C + 1, 0, U), n(T);
            },
            x = () => (n(t.concat([o()])), !1),
            f = (C) => (T) => {
              let U = [...t];
              (U[C] = T), n(U);
            },
            _ = (C) => () => {
              let T = [...t];
              T.splice(C, 1), n(T);
            };
          return (0, e.jsxs)("div", {
            className: at.ReorderableListWithArrows,
            children: [
              t.length > 0 &&
                t.map((C, T) =>
                  (0, e.jsx)(
                    bi,
                    {
                      index: T,
                      item: C,
                      setItem: f(T),
                      removeItem: _(T),
                      component: r,
                      moveUp: d(T),
                      moveDown: g(T),
                    },
                    "reorderable-" + T,
                  ),
                ),
              t.length === 0 && l,
              (0, e.jsx)("a", { onClick: x, children: c }),
            ],
          });
        }
        function bi(s) {
          const {
            index: t,
            item: n,
            setItem: r,
            moveUp: o,
            moveDown: l,
            removeItem: c,
          } = s;
          return (0, e.jsxs)("div", {
            className: at.ReorderableListElement,
            children: [
              (0, e.jsxs)("div", {
                className: at.ReorderableListUpAndDownCtn,
                children: [
                  (0, e.jsx)("div", { onClick: () => o(), children: "\u25B2" }),
                  (0, e.jsx)("div", { onClick: () => l(), children: "\u25BC" }),
                ],
              }),
              (0, e.jsx)("div", {
                className: at.ReorderableListElementContents,
                children: (0, e.jsx)(s.component, {
                  index: t,
                  item: n,
                  setItem: r,
                  removeItem: c,
                }),
              }),
            ],
          });
        }
        var Zs = i(78699),
          mr = i(7582),
          _a = i(24806),
          qs = i(32093),
          On = i(50109),
          Ai = i(43308),
          vi = i(72865),
          yi = i(83482),
          ji = i(1431),
          gr = i.n(ji);
        const Pi = { include_assets: !0, include_basic_info: !0 };
        function Ei(s) {
          const { appid: t } = s,
            [n] = (0, ft.t7)(t, Pi),
            r = (0, vi.n9)();
          return !n || !t
            ? null
            : (0, e.jsx)("div", {
                className: gr().StoreItemCtn,
                children: (0, e.jsx)("div", {
                  className: gr().StoreItemRow,
                  children: (0, e.jsxs)("a", {
                    href: (0, yi.wJ)(n.GetStorePageURL(), r),
                    children: [
                      (0, e.jsx)("img", {
                        src: n.GetAssets().GetSmallCapsuleURL(),
                      }),
                      (0, e.jsxs)("div", {
                        className: gr().StoreItemDescription,
                        children: [n.GetShortDescription(), " "],
                      }),
                    ],
                  }),
                }),
              });
        }
        function fa(s) {
          const {
              text: t,
              placeholderToken: n,
              kvName: r,
              onChangeText: o,
              bOnlyDisplay: l,
              rgRealms: c,
              className: d,
            } = s,
            g = (0, On.E)(),
            x = a.A0.GetLanguageListForRealms(c),
            f = new Array();
          r &&
            x.forEach((C) => {
              f.push(
                (0, e.jsx)(
                  "input",
                  {
                    type: "hidden",
                    name: `${r}[${(0, ue.LgB)(C, "english")}]`,
                    value: (0, Zs.VX)(t, C),
                  },
                  r + "_" + C,
                ),
              );
            });
          const _ = (0, Zs.VX)(t, g) || "";
          return (0, e.jsxs)("div", {
            className: d,
            children: [
              l
                ? (0, e.jsx)("div", {
                    children: _ || (0, e.jsx)("i", { children: n }),
                  })
                : (0, e.jsx)("input", {
                    type: "text",
                    placeholder: (0, a.we)(n || "#KVInputBox_Default"),
                    value: _,
                    onChange: (C) => o(C.currentTarget.value, g),
                  }),
              f,
            ],
          });
        }
        var xa = i(35102),
          Di = i(36500),
          en = i.n(Di),
          Ti = i(64442),
          Ct = i.n(Ti),
          Ii = i(14947);
        class ys {
          m_mapAppIDToDLCs = new Map();
          m_mapAppIDToSoundTracks = new Map();
          m_mapPromise = new Map();
          GetDLCForAppID(t) {
            return this.m_mapAppIDToDLCs.get(t);
          }
          GetSoundTracksForAppID(t) {
            return this.m_mapAppIDToSoundTracks.get(t);
          }
          async LoadDLCAndSoundTracksForAppID(t, n) {
            return (
              this.m_mapPromise.has(t) ||
                this.m_mapPromise.set(
                  t,
                  this.InternalLoadDLCAndSoundTracksForAppID(t, n),
                ),
              this.m_mapPromise.get(t)
            );
          }
          async InternalLoadDLCAndSoundTracksForAppID(t, n) {
            if (!this.m_mapAppIDToDLCs.has(t) && t != 0)
              try {
                let r = {
                    origin: self.origin,
                    cc: Y.TS.COUNTRY || "US",
                    l: Y.TS.LANGUAGE,
                  },
                  o = "";
                (0, Y.yK)() == "partner"
                  ? (o = `${Y.TS.PARTNER_BASE_URL}seasonpass/ajaxgetreleasedorupcomingdlc?parentappid=${t}`)
                  : (o = Y.TS.STORE_BASE_URL + "dlc/" + t + "/ajaxgetdlclist");
                let l = await $t().get(o, { params: r, cancelToken: n?.token }),
                  c = Array();
                l.data.dlcs &&
                  l.data.dlcs.forEach((d) => {
                    c.push({
                      appid: d.appid,
                      name: d.name,
                      is_released_somewhere: !!d.is_released_somewhere,
                    });
                  }),
                  this.m_mapAppIDToDLCs.set(t, c),
                  (c = Array()),
                  l.data.soundtracks &&
                    l.data.soundtracks.forEach((d) => {
                      c.push({
                        appid: d.appid,
                        name: d.name,
                        is_released_somewhere: !!d.is_released_somewhere,
                      });
                    }),
                  this.m_mapAppIDToSoundTracks.set(t, c);
              } catch (r) {
                const o = (0, de.H)(r);
                console.error(
                  "LoadDLCAndSoundTracksForAppID for appid: " +
                    t +
                    " hit: " +
                    o.strErrorMsg,
                  o,
                );
              }
            return {
              dlcs: this.m_mapAppIDToDLCs.has(t)
                ? this.m_mapAppIDToDLCs.get(t)
                : [],
              soundtracks: this.m_mapAppIDToSoundTracks.has(t)
                ? this.m_mapAppIDToSoundTracks.get(t)
                : [],
            };
          }
          static s_Singleton;
          static Get() {
            return (
              ys.s_Singleton || (ys.s_Singleton = new ys()), ys.s_Singleton
            );
          }
          constructor() {
            (0, Ii.Gn)(this);
          }
        }
        function hr(s) {
          const [t, n] = (0, p.useState)(s),
            [r, o] = (0, p.useState)(ys.Get().GetDLCForAppID(t));
          return (
            (0, p.useEffect)(() => {
              s &&
                (s != t || !r) &&
                ys
                  .Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    o(l.dlcs), n(s);
                  });
            }, [t, s, r]),
            r
          );
        }
        function wi(s) {
          const [t, n] = (0, p.useState)(s),
            [r, o] = (0, p.useState)(ys.Get().GetSoundTracksForAppID(t));
          return (
            (0, p.useEffect)(() => {
              s &&
                (s != t || !r) &&
                ys
                  .Get()
                  .LoadDLCAndSoundTracksForAppID(t, null)
                  .then((l) => {
                    o(l.soundtracks), n(s);
                  });
            }, [t, s, r]),
            r
          );
        }
        function Kh(s) {
          const t = hr(s);
          return useMemo(
            () => t?.filter((r) => !!r.is_released_somewhere) || null,
            [t],
          );
        }
        function $h(s) {
          const t = hr(s);
          return useMemo(
            () => t?.filter((r) => !r.is_released_somewhere) || null,
            [t],
          );
        }
        function _r(s) {
          const {
              appid: t,
              setAppID: n,
              rgExcludeAppIDs: r,
              seasonPassID: o,
              bOnlyShowReleaseDLC: l,
              strLocalizedLabel: c,
              strLocalizedTooltip: d,
              fnResetAppID: g,
            } = s,
            x = hr(o.parentAppID),
            f = wi(o.parentAppID),
            _ = (0, p.useMemo)(
              () => [
                ...(x?.filter((U) => !l || !!U.is_released_somewhere) || []),
                ...(f?.filter((U) => !l || !!U.is_released_somewhere) || []),
              ],
              [x, f, l],
            ),
            C = (0, p.useMemo)(
              () => _?.filter((U) => !r || !r.includes(U.appid)),
              [_, r],
            ),
            T = (0, p.useMemo)(
              () =>
                C
                  ? C.map((U) => ({
                      label: (0, e.jsx)(ki, { appInfo: U }),
                      data: U.appid,
                    }))
                  : [],
              [C],
            );
          return C
            ? T.length == 0 && l
              ? (0, e.jsx)("div", {
                  className: (0, D.A)(wn.ErrorStylesWithIcon, "ErrorCtn"),
                  children: (0, a.we)("#SeasonPass_NoDLC"),
                })
              : (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(S.m, {
                      label: c || (0, a.we)("#SeasonPass_ShipDLC"),
                      tooltip: d || (0, a.we)("#SeasonPass_ShipDLC_ttip"),
                      selectedOption: t,
                      onChange: (U) => n(U.data),
                      rgOptions: T,
                    }),
                    !!(t && g) &&
                      (0, e.jsx)(S.$n, {
                        onClick: g,
                        children: (0, a.we)(
                          "#SeasonPass_CustomerComingSoonDLC_clear",
                        ),
                      }),
                  ],
                })
            : (0, e.jsx)(ss.t, {
                size: "small",
                position: "center",
                string: (0, a.we)("#Loading"),
              });
        }
        const Mi = { include_release: !0 };
        function ki(s) {
          const { appInfo: t } = s,
            [n] = (0, ft.t7)(t.appid, Mi);
          return n
            ? (0, e.jsxs)("span", {
                children: [
                  t.name,
                  " - (",
                  n.BIsComingSoon()
                    ? (0, a.we)("#SeasonPass_Customer_ComingSoon_Mark")
                    : (0, a.TW)(n.GetReleaseDateRTime()),
                  ")",
                ],
              })
            : (0, e.jsx)("span", { children: t.name });
        }
        function Sa(s) {
          const {
              mileStone: t,
              index: n,
              bCreate: r,
              bAppHasSteamChinaToolsEnabled: o,
              rgShippedMilestoneIDs: l,
            } = s,
            [c, d, g] = (0, _e.uD)(),
            x = p.useMemo(() => (0, a.O9)(o), [o]),
            f = p.useMemo(
              () => (0, Zs.mn)(t?.milestone_desc || { english: "" }),
              [t?.milestone_desc],
            ),
            _ = p.useMemo(
              () => ["seasonpass", "commitments", "" + n, "milestone_desc"],
              [n],
            ),
            C = (0, F.KC)(x, f, "app", r ? void 0 : _);
          return (
            (0, p.useEffect)(() => {
              if (c) {
                const T = (0, ue.sfN)(C.strActiveLanguage, ue.Bhc);
                On.O.Get().SetCurEditLanguage(T);
              }
            }, [C.strActiveLanguage, c]),
            (0, _e.hL)(On.O.Get().GetCallback(), (T) => {
              C.setActiveLanguage((0, ue.LgB)(T));
            }),
            (0, e.jsxs)("div", {
              className: (0, D.A)(Ct().EditBtn, en().BtnCtn),
              children: [
                c && (0, e.jsx)(Li, { hideModal: g, bCreate: r, ...s, ...C }),
                !r && C.rctHiddenInputs,
                (0, e.jsxs)(S.$n, {
                  onClick: d,
                  children: [
                    (0, a.we)(r ? "#SeasonPass_ItemNew" : "#Button_Edit"),
                    r &&
                      (0, e.jsx)(bs.o, {
                        tooltip: (0, a.we)("#SeasonPass_ItemNew_desc"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function Li(s) {
          const {
              hideModal: t,
              seasonPassID: n,
              mileStone: r,
              milestoneID: o,
              onSave: l,
              strActiveLanguage: c,
              rgLanguages: d,
              rctLanguageSelect: g,
              mapValues: x,
              bAppHasSteamChinaToolsEnabled: f,
              bCreate: _,
              rgShippedMilestoneIDs: C,
            } = s,
            T = (0, mr.f1)(),
            [U, ye] = (0, p.useState)(r?.internal_desc || ""),
            [ne, Q] = (0, p.useState)(r?.expected_delivery || T + 1440 * 60),
            [Fe, Re] = (0, p.useState)(r?.display_format || "date_quarter"),
            [$e, ts] = (0, p.useState)(r?.localized_title || { english: "" }),
            [Us] = (0, p.useState)(r?.milestone_desc || {}),
            [ct, Is] = (0, p.useState)(r?.coming_soon_appid),
            [_s, Rc] = (0, p.useState)(!!r?.backfilled_release),
            Ka = (0, p.useRef)(void 0),
            [Fc, Hc] = (0, p.useState)(!1),
            Uc = (0, p.useMemo)(
              () =>
                f
                  ? [qs.TU.k_ESteamRealmGlobal, qs.TU.k_ESteamRealmChina]
                  : [qs.TU.k_ESteamRealmGlobal],
              [f],
            ),
            zc = (0, a.we)(r ? "#SeasonPass_Update" : "#SeasonPass_Create"),
            $a = C?.includes(o);
          return (0, e.jsx)(Cs.E, {
            active: !0,
            children: (0, e.jsx)(is.o0, {
              strTitle: zc,
              strDescription: (0, a.we)("#SeasonPass_Create_desc"),
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strOKButtonText: (0, a.we)(
                r ? "#Button_Update" : "#Button_Create",
              ),
              bOKDisabled: $e.english.length < 3,
              onOK: () => {
                const ws = {};
                x.forEach((cs, yr) => {
                  ws[yr] = cs.Value;
                }),
                  l({
                    milestone_id: o,
                    internal_desc: U,
                    expected_delivery: ne,
                    submit_time: T,
                    submit_accountid: qe.iA.accountid,
                    display_format: Fe,
                    localized_title: $e,
                    milestone_desc: ws,
                    milestone_image: void 0,
                    backfilled_release: _s,
                    coming_soon_appid: ct,
                  }),
                  _ && x.forEach((cs, yr) => x.get(yr).Set("")),
                  t();
              },
              onCancel: () => {
                x.forEach((ws, cs) => {
                  Us?.[cs] ? x.get(cs).Set(Us[cs]) : x.get(cs).Set("");
                }),
                  t();
              },
              children: (0, e.jsxs)("div", {
                className: Ct().EditMilestoneDialog,
                children: [
                  (0, e.jsxs)("h3", {
                    children: [
                      (0, a.we)("#SeasonPass_CustomerTitle"),
                      (0, e.jsx)("span", {
                        className: "DialogInputRequirementLabel",
                        children: (0, a.we)("#Steamworks_Generic_Required"),
                      }),
                    ],
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.we)("#SeasonPass_CustomerSubtitle"),
                  }),
                  (0, e.jsx)(fa, {
                    text: $e,
                    className: Ct().MilestoneTitleField,
                    onChangeText: (ws, cs) => {
                      (0, Zs.pV)($e, cs, ws), ts({ ...$e });
                    },
                    kvName: void 0,
                    rgRealms: Uc,
                  }),
                  (0, e.jsxs)("h3", {
                    children: [
                      (0, a.we)("#SeasonPass_CustomerDescription_Title"),
                      (0, e.jsx)("span", {
                        className: "DialogInputRequirementLabel",
                        children: (0, a.we)("#Steamworks_Generic_Required"),
                      }),
                    ],
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.we)(
                      "#SeasonPass_CustomerDescription_Subtitle",
                    ),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.we)(
                      "#SeasonPass_CustomerDescription_Images",
                    ),
                  }),
                  (0, e.jsx)(Ae.default, {
                    language: c,
                    languages: d,
                    editorType: "milestone",
                    rctToolbarControls: g,
                    mapValues: x,
                    rctAboveEditor: (0, e.jsx)(Ei, {
                      appid: r?.completed_appid || ct,
                    }),
                  }),
                  !$a &&
                    (0, e.jsx)(_r, {
                      appid: ct,
                      setAppID: Is,
                      rgExcludeAppIDs: null,
                      seasonPassID: n,
                      strLocalizedLabel: (0, a.we)(
                        "#SeasonPass_CustomerComingSoonDLC",
                      ),
                      strLocalizedTooltip: (0, a.we)(
                        "#SeasonPass_CustomerComingSoonDLC_ttip",
                      ),
                    }),
                  !$a &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsxs)("div", {
                          className: Ct().DatePickerRow,
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsx)("h3", {
                                  children: (0, a.we)(
                                    _s
                                      ? "#SeasonPass_Backfill_date"
                                      : "#SeasonPass_Delivery",
                                  ),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, a.we)(
                                    _s
                                      ? "#SeasonPass_Backfill_date_ttip"
                                      : "#SeasonPass_Delivery_ttip",
                                  ),
                                }),
                                (0, e.jsx)(Ai.K, {
                                  nEarliestTime: _s ? 0 : T,
                                  fnGetTimeToUpdate: () => ne,
                                  fnSetTimeToUpdate: Q,
                                  fnIsValidDateTime: () =>
                                    _s ? ne < T : T < ne,
                                  strInvalidDateTimeLocalizedMsg: _s
                                    ? (0, a.we)(
                                        "#SeasonPass_BackFill_invalid_date",
                                      )
                                    : void 0,
                                }),
                              ],
                            }),
                            !_s &&
                              (0, e.jsxs)("div", {
                                children: [
                                  (0, e.jsx)("h3", {
                                    children: (0, a.we)(
                                      "#SeasonPass_CustomerDisplay",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    children: (0, a.we)(
                                      "#SeasonPass_CustomerDisplay_ttip",
                                    ),
                                  }),
                                  (0, e.jsx)(xa.Ll, {
                                    value: Fe,
                                    onChange: Re,
                                    rgComingSoonOptionOverride: xa.ut,
                                    rtSteamReleaseDate: ne,
                                    bExpandedDisplay: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, e.jsx)(S.Yh, {
                          ref: Ka,
                          label: (0, a.we)("#SeasonPass_Backfill_check"),
                          tooltip: (0, a.we)("#SeasonPass_Backfill_check_ttip"),
                          onChange: (ws) => {
                            let cs = !(!ws && ne < T);
                            Hc(!cs),
                              cs ? Rc(ws) : Ka.current.SetChecked(!0, !1);
                          },
                          checked: _s,
                        }),
                        Fc &&
                          (0, e.jsx)("div", {
                            className: wn.WarningStylesWithIcon,
                            children: (0, a.we)("#SeasonPass_Backfill_warning"),
                          }),
                      ],
                    }),
                  (0, e.jsx)("br", {}),
                ],
              }),
            }),
          });
        }
        var Bi = i(11512),
          Ni = i(92264);
        function Oi(s) {
          const { milestoneID: t, rgPublishedMilestoneIDs: n, onDelete: r } = s,
            [o, l, c] = (0, _e.uD)();
          return !n || n?.includes(t)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, D.A)(Ct().EditBtn, en().BtnCtn),
                children: [
                  (0, e.jsx)(Cs.E, {
                    active: o,
                    children: (0, e.jsx)(is.o0, {
                      strTitle: (0, a.we)("#Button_Delete"),
                      strDescription: (0, a.we)("#Dialog_AreYouSure"),
                      onOK: r,
                      bDestructiveWarning: !0,
                      bDisableBackgroundDismiss: !1,
                      closeModal: c,
                    }),
                  }),
                  (0, e.jsx)(S.$n, {
                    onClick: l,
                    children: (0, a.we)("#Button_Delete"),
                  }),
                ],
              });
        }
        var Ca = i(42415);
        function Ri(s) {
          const {
              hideModal: t,
              inputMilestone: n,
              setCurrentMilestone: r,
              seasonPassID: o,
              rgExcludedAppIDs: l,
            } = s,
            c = !n.completed_appid,
            d = !n.completed_event_gid,
            [g, x] = (0, p.useState)(null),
            [f, _] = (0, p.useState)(null);
          return (0, e.jsx)(Cs.E, {
            active: !0,
            children: (0, e.jsxs)(is.o0, {
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strTitle: (0, a.we)("#SeasonPass_PostShipLink"),
              strDescription: (0, a.we)("#SeasonPass_PostShipLink_Desc"),
              closeModal: t,
              bOKDisabled: !g && !f,
              onOK: () => {
                const C = { ...n };
                c && g && (C.completed_appid = g),
                  d && f && (C.completed_event_gid = f),
                  r(C);
              },
              children: [
                c &&
                  (0, e.jsxs)("div", {
                    className: Ct().OptionDetails,
                    children: [
                      (0, e.jsx)(S.JU, {
                        children: (0, a.we)("#SeasonPass_UpdateLaunch_dlc"),
                      }),
                      (0, e.jsx)(_r, {
                        appid: g,
                        setAppID: x,
                        rgExcludeAppIDs: l,
                        seasonPassID: o,
                        bOnlyShowReleaseDLC: !0,
                      }),
                    ],
                  }),
                d &&
                  (0, e.jsxs)("div", {
                    className: Ct().OptionDetails,
                    children: [
                      (0, e.jsxs)(S.JU, {
                        children: [
                          (0, a.we)("#SeasonPass_UpdateLaunch_update"),
                          (0, e.jsx)(bs.o, {
                            tooltip: (0, a.we)("#SeasonPass_AddLaunchEvent"),
                          }),
                        ],
                      }),
                      (0, e.jsx)(Ca.q, {
                        appid: o.parentAppID,
                        selectedEventGID: f,
                        fnSetUpdateEvent: (C, T) => _(T),
                        bFilterOutDrafts: !0,
                      }),
                      !!qe.iA.is_support &&
                        (0, e.jsx)("div", {
                          className: Tt().ValveOnlyBackground,
                          children: (0, e.jsxs)("div", {
                            children: ["Selected GID: ", f],
                          }),
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
        const Fi = { include_release: !0, include_included_items: !0 };
        function Hi(s) {
          const {
              inputMilestone: t,
              setCurrentMilestone: n,
              seasonPassID: r,
              rgAllMilestones: o,
              index: l,
              rgShippedMilestoneIDs: c,
            } = s,
            [d] = (0, ft.t7)(t.completed_appid, Fi),
            [g, x, f] = (0, _e.uD)(),
            [_, C, T] = (0, _e.uD)(),
            U = !!c.includes(t.milestone_id),
            ye = !!(U && (!t.completed_appid || !t.completed_event_gid));
          return (0, e.jsxs)("div", {
            className: Ct().StatusRow,
            children: [
              !!U &&
                (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: Ct().CheckMark,
                    children: "\u2713",
                  }),
                }),
              !!t.completed_appid &&
                (0, e.jsxs)("a", {
                  href: `${Ce.TS.STORE_BASE_URL}app/${t.completed_appid}`,
                  target: "_blank",
                  children: [d?.GetName() || "", " (", t.completed_appid, ")"],
                }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${l}][completed_appid]`,
                value: t.completed_appid ? t.completed_appid : "",
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${l}][completed_event_gid]`,
                value: t.completed_event_gid ? "" + t.completed_event_gid : "",
              }),
              !!t.completed_event_gid &&
                (0, e.jsx)("a", {
                  href: `${Ce.TS.STORE_BASE_URL}news/app/${r.parentAppID}/view/${t.completed_event_gid}`,
                  target: "_blank",
                  children: (0, a.we)("#SeasonPass_ViewLaunchEvent"),
                }),
              !U &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    g &&
                      (0, e.jsx)(Ui, {
                        inputMilestone: t,
                        setCurrentMilestone: n,
                        rgExcludedAppIDs: ba(o, r, t.milestone_id),
                        seasonPassID: r,
                        hideModal: f,
                      }),
                    (0, e.jsx)(S.$n, {
                      onClick: x,
                      children: (0, a.we)(
                        t.completed_appid ||
                          t.completed_event_gid ||
                          t.backfilled_release
                          ? "#SeasonPass_UpdateLaunch_Edit"
                          : "#SeasonPass_UpdateLaunch",
                      ),
                    }),
                  ],
                }),
              !!ye &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    _ &&
                      (0, e.jsx)(Ri, {
                        setCurrentMilestone: n,
                        inputMilestone: t,
                        hideModal: T,
                        rgExcludedAppIDs: ba(o, r, t.milestone_id),
                        seasonPassID: r,
                      }),
                    (0, e.jsx)(pe.Gq, {
                      toolTipContent: (0, a.we)(
                        "#SeasonPass_PostShipLink_Button_ttip",
                      ),
                      children: (0, e.jsxs)(S.$n, {
                        onClick: C,
                        children: [
                          (0, a.we)("#SeasonPass_PostShipLink_Button"),
                          (0, e.jsx)(bs.o, { tooltip: void 0 }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function ba(s, t, n) {
          const r = new Array();
          return (
            r.push(t.dlcAppID),
            s.forEach((o) => {
              o.milestone_id != n &&
                o.completed_appid &&
                r.push(o.completed_appid);
            }),
            r
          );
        }
        function Ui(s) {
          const {
              hideModal: t,
              inputMilestone: n,
              setCurrentMilestone: r,
              seasonPassID: o,
              rgExcludedAppIDs: l,
            } = s,
            [c, d] = (0, p.useState)(n.completed_appid),
            [g, x] = (0, p.useState)(n.completed_event_gid),
            [f, _] = (0, p.useState)(() => !!n.completed_appid),
            [C, T] = (0, p.useState)(!!n.completed_event_gid);
          return (0, e.jsx)(Cs.E, {
            active: !0,
            children: (0, e.jsx)(is.o0, {
              bAllowFullSize: !0,
              bDisableBackgroundDismiss: !0,
              strTitle: (0, a.PP)(
                "#SeasonPass_UpdateLaunch_title",
                n.localized_title?.[Ce.TS.LANGUAGE] ||
                  n.localized_title?.english,
              ),
              strDescription: (0, a.we)(
                n.backfilled_release
                  ? "#SeasonPass_UpdateLaunch_desc_backfill"
                  : "#SeasonPass_UpdateLaunch_desc",
              ),
              closeModal: t,
              bOKDisabled: f && !c,
              onOK: () => {
                r({ ...n, completed_appid: c, completed_event_gid: g });
              },
              children: (0, e.jsxs)("div", {
                className: (0, D.A)(Ct().ShippingTheMilestone),
                children: [
                  (0, e.jsx)("div", {
                    className: (0, D.A)(Ct().ShippingType),
                    children: (0, e.jsxs)(S.G5, {
                      children: [
                        (0, e.jsx)(S.lr, {
                          children: (0, a.we)(
                            "#SeasonPass_UpdateLaunch_radio_label",
                          ),
                        }),
                        (0, e.jsx)(S.Od, {
                          checked: !f,
                          onChange: (U) => U && _(!1),
                          label: (0, a.we)(
                            "#SeasonPass_UpdateLaunch_radio_label_1",
                          ),
                        }),
                        (0, e.jsx)(S.Od, {
                          checked: f,
                          onChange: (U) => U && _(!0),
                          label: (0, a.we)(
                            "#SeasonPass_UpdateLaunch_radio_label_2",
                          ),
                          tooltip: (0, a.we)(
                            "#SeasonPass_UpdateLaunch_radio_label_2_ttip",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)("br", {}),
                  !!(!f || C) &&
                    (0, e.jsxs)("div", {
                      className: Ct().OptionDetails,
                      children: [
                        (0, e.jsxs)(S.JU, {
                          children: [
                            (0, a.we)("#SeasonPass_UpdateLaunch_update"),
                            (0, e.jsx)(bs.o, {
                              tooltip: (0, a.we)("#SeasonPass_AddLaunchEvent"),
                            }),
                          ],
                        }),
                        (0, e.jsx)(Ca.q, {
                          appid: o.parentAppID,
                          selectedEventGID: g,
                          fnSetUpdateEvent: (U, ye) => x(ye),
                          bFilterOutDrafts: !0,
                        }),
                        !!qe.iA.is_support &&
                          (0, e.jsx)("div", {
                            className: Tt().ValveOnlyBackground,
                            children: (0, e.jsxs)("div", {
                              children: ["Selected GID: ", g],
                            }),
                          }),
                      ],
                    }),
                  f &&
                    (0, e.jsxs)("div", {
                      className: Ct().OptionDetails,
                      children: [
                        (0, e.jsx)(S.JU, {
                          children: (0, a.we)("#SeasonPass_UpdateLaunch_dlc"),
                        }),
                        (0, e.jsx)(_r, {
                          appid: c,
                          setAppID: d,
                          rgExcludeAppIDs: l,
                          seasonPassID: o,
                          bOnlyShowReleaseDLC: !0,
                          fnResetAppID: () => {
                            _(!1), d(void 0);
                          },
                        }),
                      ],
                    }),
                  f &&
                    !C &&
                    (0, e.jsx)("div", {
                      className: Ct().OptionDetails,
                      children: (0, e.jsx)(S.Yh, {
                        label: (0, a.we)("#SeaosnPass_OptionalEvents"),
                        checked: C,
                        onChange: (U) => T(U),
                      }),
                    }),
                ],
              }),
            }),
          });
        }
        function zi(s) {
          const {
            seasonPassData: t,
            seasonPassID: n,
            rgPublishedMilestoneIDs: r,
            bAppHasSteamChinaToolsEnabled: o,
            fnDeleteMilestoneByID: l,
            rgShippedMilestoneIDs: c,
          } = s;
          return (0, e.jsxs)("div", {
            className: Ct().MilestoneTable,
            children: [
              (0, e.jsx)(S.JU, {
                children: (0, a.we)("#SeasonPass_Milestone_table"),
              }),
              (0, e.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", {
                          children: (0, a.we)("#SeasonPass_Milestone_Title"),
                        }),
                        (0, e.jsx)("th", {}),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: t?.commitments?.map((d, g) =>
                      (0, e.jsx)(
                        Wi,
                        {
                          inputMilestone: d,
                          index: g,
                          seasonPassID: n,
                          rgAllMilestones: t.commitments,
                          bAppHasSteamChinaToolsEnabled: o,
                          rgPublishedMilestoneIDs: r,
                          rgShippedMilestoneIDs: c,
                          fnDeleteMilestone: () => l(d.milestone_id),
                        },
                        "row" + d.milestone_id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Aa(s) {
          const { milestone: t, index: n } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][milestone_id]`,
                value: t ? t.milestone_id : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][internal_desc]`,
                value: t ? t.internal_desc : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][submit_time]`,
                value: t ? t.submit_time : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][submit_accountid]`,
                value: t ? t.submit_accountid : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][expected_delivery]`,
                value: t ? t.expected_delivery : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][display_format]`,
                value: t ? t.display_format : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][backfilled_release]`,
                value: t ? String(!!t.backfilled_release) : void 0,
              }),
              (0, e.jsx)("input", {
                type: "hidden",
                name: `app[seasonpass][commitments][${n}][coming_soon_appid]`,
                value: t ? t.coming_soon_appid : void 0,
              }),
              !t &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `app[seasonpass][commitments][${n}][localized_title]`,
                      value: void 0,
                    }),
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: `app[seasonpass][commitments][${n}][milestone_desc]`,
                      value: void 0,
                    }),
                  ],
                }),
            ],
          });
        }
        function Wi(s) {
          const {
              inputMilestone: t,
              index: n,
              seasonPassID: r,
              rgAllMilestones: o,
              bAppHasSteamChinaToolsEnabled: l,
              rgPublishedMilestoneIDs: c,
              fnDeleteMilestone: d,
              rgShippedMilestoneIDs: g,
            } = s,
            [x, f] = (0, p.useState)(t),
            _ = (0, mr.sB)(),
            C = !!g.includes(x.milestone_id),
            T = !C && x.expected_delivery < _,
            U = (0, p.useMemo)(
              () =>
                l
                  ? [qs.TU.k_ESteamRealmGlobal, qs.TU.k_ESteamRealmChina]
                  : [qs.TU.k_ESteamRealmGlobal],
              [l],
            ),
            ye = (0, On.E)(),
            ne = a.A0.GetELanguageFallback(ye);
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: (0, D.A)({
                    [Ct().TitlePreviewRow]: !0,
                    [Ct().Shipped]: C,
                  }),
                  children: [
                    (0, e.jsx)(Aa, { milestone: x, index: n }),
                    (0, e.jsx)(fa, {
                      text: x.localized_title,
                      className: Ct().Title,
                      onChangeText: null,
                      kvName: `app[seasonpass][commitments][${n}][localized_title]`,
                      bOnlyDisplay: !0,
                      placeholderToken: (0, a.we)(
                        "#SeasonPass_NoLang_Fallback",
                        (0, a.we)("#Language_" + (0, ue.LgB)(ye)),
                        (0, a.we)("#Language_" + (0, ue.LgB)(ne)),
                      ),
                      rgRealms: U,
                    }),
                    C
                      ? (0, e.jsx)("div", {
                          className: (0, D.A)(Ct().Date, Ct().Released),
                          children: (0, a.we)("#SeasonPass_Released"),
                        })
                      : (0, e.jsx)(e.Fragment, {
                          children: x?.backfilled_release
                            ? (0, e.jsx)("div", {
                                className: Ct().PublishReminder,
                                children: (0, a.we)(
                                  "#SeasonPass_Backfill_require_publish",
                                ),
                              })
                            : (0, e.jsxs)("div", {
                                className: (0, D.A)(Ct().Date),
                                children: [
                                  (0, e.jsxs)(pe.he, {
                                    toolTipContent:
                                      (0, a.we)("#SeasonPass_Delivery") +
                                      ": " +
                                      (0, a.TW)(x.expected_delivery) +
                                      " @ " +
                                      (0, Ni.KC)(x.expected_delivery),
                                    children: [
                                      (0, a.we)("#SeasonPass_Coming"),
                                      (0, e.jsx)("br", {}),
                                      (0, Bi.M)(
                                        x.display_format,
                                        x.expected_delivery,
                                        null,
                                        !0,
                                      ),
                                    ],
                                  }),
                                  T &&
                                    (0, e.jsx)("div", {
                                      className: (0, D.A)(
                                        T ? Wr().ErrorStylesWithIcon : void 0,
                                      ),
                                      children: (0, a.we)(
                                        "#SeasonPass_PassDueNote",
                                      ),
                                    }),
                                ],
                              }),
                        }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: Ct().BtnCtn,
                  children: [
                    (0, e.jsx)(Hi, {
                      inputMilestone: x,
                      setCurrentMilestone: f,
                      seasonPassID: r,
                      rgAllMilestones: o,
                      index: n,
                      rgShippedMilestoneIDs: g,
                    }),
                    (0, e.jsx)(Sa, {
                      milestoneID: x.milestone_id,
                      mileStone: x,
                      onSave: f,
                      index: n,
                      bAppHasSteamChinaToolsEnabled: l,
                      rgShippedMilestoneIDs: g,
                      seasonPassID: r,
                    }),
                    (0, e.jsx)(Oi, {
                      milestoneID: x.milestone_id,
                      onDelete: d,
                      rgPublishedMilestoneIDs: c,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function Gi(s) {
          const {
              seasonPassID: t,
              seasonPassData: n,
              rgPublishedMilestoneIDs: r,
              rgShippedMilestoneIDs: o,
            } = s,
            [l, c] = (0, p.useState)(n || { commitments: [] }),
            { bAppHasSteamChinaToolsEnabled: d } = (0, ve.aJ)(),
            [g, x] = (0, p.useState)(n?.commitments?.length || 0),
            f = (0, p.useMemo)(() => {
              let T = 0;
              do T = Math.floor(Math.random() * 9e4) + 1e4;
              while (
                l?.commitments?.findIndex((U) => U.milestone_id == T) >= 0
              );
              return T;
            }, [l]),
            _ = (0, p.useCallback)(
              (T) =>
                !!l.commitments?.some(
                  (U) =>
                    (0, Zs.nU)(U.localized_title, T) ||
                    (0, Zs.nU)(U.milestone_desc, T),
                ),
              [l.commitments],
            ),
            C = [];
          if (g > l.commitments?.length)
            for (let T = l.commitments?.length; T < g; T++)
              C.push((0, e.jsx)(Aa, { index: T, milestone: null }, T));
          return (0, e.jsxs)("div", {
            className: en().EditorCtn,
            children: [
              (0, e.jsx)(_a.yk, { fnLangHasData: _ }),
              (0, e.jsx)(Vi, {
                seasonPassID: t,
                nNextMilestoneID: f,
                index: l?.commitments?.length || 0,
                fnAppendSeasonPass: (T) => {
                  c({ ...l, commitments: [...(l.commitments || []), T] }),
                    x(
                      Math.max(g, l.commitments ? l.commitments.length + 1 : 1),
                    );
                },
                bAppHasSteamChinaToolsEnabled: d,
                rgShippedMilestoneIDs: o,
              }),
              (0, e.jsx)(Ki, { seasonPassData: l, rgShippedMilestoneIDs: o }),
              (0, e.jsx)(zi, {
                seasonPassID: t,
                seasonPassData: l,
                bAppHasSteamChinaToolsEnabled: d,
                rgPublishedMilestoneIDs: r,
                rgShippedMilestoneIDs: o,
                fnDeleteMilestoneByID: (T) => {
                  const U = l.commitments.findIndex(
                    (ye) => ye.milestone_id == T,
                  );
                  U >= 0 &&
                    (l.commitments.splice(U, 1),
                    c({ ...l, commitments: [...l.commitments] }));
                },
              }),
              C,
              !!qe.iA.is_support &&
                (0, e.jsx)("div", {
                  className: Tt().ValveOnlyBackground,
                  children: (0, e.jsx)(S.$n, {
                    onClick: (T) =>
                      (0, Bs.pg)(
                        (0, e.jsx)(is.o0, {
                          strTitle: "Clear?",
                          strDescription: "Are you sure?",
                          onOK: () => c({ commitments: [] }),
                        }),
                        (0, Ns.uX)(T),
                      ),
                    children: "(VO) Clear All Milestones (in memory)",
                  }),
                }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
            ],
          });
        }
        function Vi(s) {
          const {
            seasonPassID: t,
            fnAppendSeasonPass: n,
            nNextMilestoneID: r,
            index: o,
            bAppHasSteamChinaToolsEnabled: l,
            rgShippedMilestoneIDs: c,
          } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, D.A)("instructions"),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, D.A)("title2"),
                    children: [
                      (0, a.we)("#SeasonPass_Title"),
                      " ",
                      (0, e.jsx)("span", {
                        className: "small",
                        children: (0, e.jsx)("a", {
                          href: `${Ce.TS.PARTNER_BASE_URL}doc/store/seasonpass`,
                          target: "_blank",
                          children: (0, a.we)("#AssetRequest_General_SeeDocs"),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("br", { style: { clear: "left" } }),
                  (0, e.jsx)("div", { className: "grayRule", children: " " }),
                  (0, e.jsxs)("div", {
                    className: "instructions_table",
                    children: [
                      (0, e.jsxs)("div", {
                        className: "instructions_table_row",
                        children: [
                          (0, e.jsx)("div", {
                            className: "instructions_table_cell left",
                            children: (0, e.jsx)("strong", {
                              children: (0, a.we)(
                                "#Appmgmg_Generic_Title_Overview",
                              ),
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: "instructions_table_cell",
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, a.we)("#SeasonPass_Desc"),
                              }),
                              (0, e.jsx)("p", {
                                children: (0, a.we)("#SeasonPass_Desc2"),
                              }),
                              (0, e.jsx)("p", {
                                children: (0, a.we)("#SeasonPass_Desc3"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: "instructions_table_row",
                        children: [
                          (0, e.jsx)("div", {
                            className: "instructions_table_cell left",
                            children: (0, e.jsx)("strong", {
                              children: (0, a.we)(
                                "#Appmgmg_Generic_Title_Releasing",
                              ),
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: "instructions_table_cell",
                            children: (0, e.jsxs)("p", {
                              children: [
                                " ",
                                (0, a.oW)(
                                  "#SeasonPass_Desc_Releasing",
                                  (0, e.jsx)("a", {
                                    href: `${Ce.TS.PARTNER_BASE_URL}doc/store/seasonpass#release`,
                                    target: "_blank",
                                  }),
                                ),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: en().CreationButtonRow,
                children: [
                  (0, e.jsx)("span", {
                    className: en().LangBox,
                    children: (0, e.jsx)(_a.iN, {}),
                  }),
                  (0, e.jsx)("div", {
                    className: en().MilestoneButton,
                    children: (0, e.jsx)(Sa, {
                      onSave: n,
                      milestoneID: r,
                      index: o,
                      bCreate: !0,
                      bAppHasSteamChinaToolsEnabled: l,
                      rgShippedMilestoneIDs: c,
                      seasonPassID: t,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Ki(s) {
          const { seasonPassData: t, rgShippedMilestoneIDs: n } = s,
            r = (0, mr.sB)(),
            [o, l, c] = (0, p.useMemo)(() => {
              const d =
                  t?.commitments?.filter(
                    (f) => !f.completed_time && !n.includes(f.milestone_id),
                  ) || [],
                g = d.filter(
                  (f) =>
                    f.expected_delivery < r + 10080 * 60 &&
                    !f.backfilled_release,
                ),
                x = d.filter(
                  (f) => f.expected_delivery < r && !f.backfilled_release,
                );
              return [d.length > 0, g.length > 0, x.length > 0];
            }, [t, r, n]);
          return o
            ? (0, e.jsx)(e.Fragment, {
                children:
                  c &&
                  (0, e.jsx)("div", {
                    className: Wr().ErrorStylesWithIcon,
                    children: (0, a.we)("#SeasonPass_PassDue"),
                  }),
              })
            : null;
        }
        var tn = i(47534),
          fr = i(24660);
        function $i(s) {
          const { rgSocialMedia: t } = s,
            [n, r] = p.useState(t ? [...t] : []),
            [o, l] = p.useState(n.length),
            c = p.useCallback(
              (d) => {
                d.length > o && l(d.length), r(d);
              },
              [o],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(Yi, { ...s, rgSocialMediaItems: n, fnSetItems: c }),
              (0, e.jsx)(qi, { items: n, maxSeen: o }),
            ],
          });
        }
        function Yi(s) {
          const {
              rgSocialMediaItems: t,
              fnSetItems: n,
              rgSupportedSocialMediaTypes: r,
              rgValidationData: o,
            } = s,
            l = p.useMemo(
              () =>
                r
                  .filter(
                    (f) =>
                      t.findIndex((_) => _.type === f.type) === -1 ||
                      f.type === "qq" ||
                      f.type === "qqlink",
                  )
                  .map((f) => ({
                    label: (0, a.we)(`#StoreAdmin_SocialMedia_Type_${f.type}`),
                    data: f.type,
                  }))
                  .sort((f, _) => (f.label < _.label ? -1 : 1)),
              [r, t],
            ),
            c = (f) => {
              let _ = t.slice();
              _.splice(f, 1), n(_);
            },
            d = (f, _) => {
              let C = t.slice();
              (0, Ms.yY)(C, f, _), n(C);
            },
            g = (f, _) => {
              const C = t.map((T, U) => (U === f ? { ...T, link: _ } : T));
              n(C);
            },
            x = (f) => {
              let _ = t.slice();
              _.push({ type: f, link: "" }), n(_);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Xi, { options: l, onAddLink: x }),
              (0, e.jsx)(Vt.A, {
                items: t,
                onDelete: c,
                onMove: d,
                render: (f, _) =>
                  (0, e.jsx)(
                    Ji,
                    {
                      item: f,
                      onUpdateLink: (C) => g(_, C),
                      validationData: o[f.type],
                    },
                    f.type,
                  ),
              }),
            ],
          });
        }
        function Xi(s) {
          const { options: t, onAddLink: n } = s,
            r = (o) => {
              const l = o.data;
              l && n(l);
            };
          return (0, e.jsx)("div", {
            className: tn.AddLinkDropDown,
            children: (0, e.jsx)(S.ZU, {
              strDefaultLabel: (0, a.we)("#StoreAdmin_SocialMedia_Add"),
              controlled: !0,
              rgOptions: t,
              onChange: r,
              selectedOption: null,
            }),
          });
        }
        function Qi(s, t) {
          let n = !0,
            r = "";
          return (
            t.prefix
              ? (s.type === "mastodon"
                  ? (r = (0, a.we)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      t.prefix.join(", "),
                    ))
                  : (r = (0, a.we)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      t.prefix.join(", "),
                    )),
                s.link &&
                  ((n = !1),
                  t.prefix.forEach((o) => {
                    s.link.startsWith(o) && (n = !0);
                  })))
              : t.number
                ? ((r = (0, a.we)("#StoreAdmin_SocialMedia_ValidationNumber")),
                  s.link && (n = /^\d+$/.test(s.link)))
                : t.text
                  ? (r = (0, a.we)("#StoreAdmin_SocialMedia_ValidationText"))
                  : t.regex &&
                    s.type === "tumblr" &&
                    (r = (0, a.we)("#StoreAdmin_SocialMedia_ValidationTumblr")),
            { bValid: n, strTooltip: r }
          );
        }
        function Ji(s) {
          const { item: t, onUpdateLink: n, validationData: r } = s;
          let o;
          r.number
            ? (o = (0, a.we)("#StoreAdmin_SocialMedia_EnterNumber"))
            : r.text
              ? (o = (0, a.we)("#StoreAdmin_SocialMedia_EnterName"))
              : (o = (0, a.we)("#StoreAdmin_SocialMedia_EnterLink"));
          const { bValid: l, strTooltip: c } = Qi(t, r);
          return (0, e.jsxs)("div", {
            className: tn.SocialMediaRow,
            children: [
              (0, e.jsx)("div", {
                className: tn.SocialMediaType,
                children: (0, a.we)(`#StoreAdmin_SocialMedia_Type_${t.type}`),
              }),
              (0, e.jsx)(fr.BA, {
                className: tn.SocialMediaLink,
                type: "text",
                value: t.link,
                placeholder: o,
                onChange: (d) => n(d.target.value),
              }),
              c &&
                (0, e.jsx)(pe.he, {
                  className: tn.SocialMediaTooltip,
                  toolTipContent: c,
                  children: "(?)",
                }),
              !l &&
                (0, e.jsx)("div", {
                  className: tn.ValidationError,
                  children: c,
                }),
            ],
          });
        }
        function Zi(s, t) {
          let n = Array(),
            r = 0;
          for (
            s.forEach((o) => {
              o.link &&
                (n.push(
                  p.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${r}][type]`,
                    value: o.type,
                  }),
                ),
                n.push(
                  p.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${r}][link]`,
                    value: o.link,
                  }),
                ),
                r++);
            });
            r < t;
          )
            n.push(
              p.createElement("input", {
                type: "hidden",
                name: `app[content][ordered_social_links][${r}]`,
                value: "",
              }),
            ),
              r++;
          return (
            [
              "discord_server",
              "youtube",
              "facebook",
              "twitter",
              "twitch",
            ].forEach((o) => {
              n.push(
                p.createElement("input", {
                  type: "hidden",
                  name: `app[content][links][${o}]`,
                  value: "",
                }),
              );
            }),
            n
          );
        }
        function qi(s) {
          const { items: t, maxSeen: n } = s,
            r = p.useMemo(() => Zi(t, n), [t, n]);
          return (0, e.jsxs)(e.Fragment, { children: [...r] });
        }
        var ls = i(23256);
        function el(s) {
          const {
              rgAntiCheatData: t,
              rgSupportedAntiCheatOptions: n,
              rgLanguages: r,
              rgSupportedAntiCheatBootProtections: o,
            } = s,
            l = p.useMemo(() => new Map(r), [r]),
            c = (0, p.useMemo)(
              () =>
                Object.entries(n).map(([Q, Fe]) => ({
                  label: (0, a.we)(`#StoreAdmin_AntiCheat_Type_${Q}`),
                  data: Q,
                })),
              [n],
            ),
            d = (Q) => {
              Q.data &&
                (x(Q.data),
                Q.data !== "none" &&
                  Q.data !== "unspecified" &&
                  Q.data !== "other" &&
                  _(n[Q.data].kernel));
            },
            [g, x] = (0, p.useState)(t.type),
            [f, _] = (0, p.useState)(t.kernel),
            [C, T] = (0, p.useState)(t.uninstall),
            [U, ye] = (0, p.useState)(t.bootprotect),
            ne = g !== "none" && g !== "unspecified";
          return (0, e.jsxs)("div", {
            className: "section",
            id: "anti_cheat",
            children: [
              (0, e.jsx)("h2", {
                children: (0, a.we)("#StoreAdmin_AntiCheat_Header"),
              }),
              (0, e.jsx)("div", { className: "grayRule" }),
              (0, e.jsx)("p", {
                children: (0, a.we)("#StoreAdmin_AntiCheat_Description"),
              }),
              (0, e.jsx)("p", {
                children: (0, a.we)("#StoreAdmin_AntiCheat_Description2"),
              }),
              (0, e.jsx)(hn, {
                label: (0, a.we)("#StoreAdmin_AntiCheat_ServiceLabel"),
                children: (0, e.jsx)(nl, {
                  options: c,
                  selectedOption: g,
                  onSelectionChanged: d,
                }),
              }),
              g === "other" &&
                (0, e.jsx)(rl, { values: t.otherNameLoc, mapLanguages: l }),
              ne && (0, e.jsx)(al, { checked: f, onChange: _ }),
              ne && f && (0, e.jsx)(ol, { checked: C, onChange: T }),
              ne &&
                (0, e.jsx)(ll, { supported: o, currentValue: U, onChange: ye }),
              (0, e.jsx)(dl, {
                selectedOption: g !== "unspecified" ? g : "",
                kernelMode: ne ? f : !1,
                uninstallsCompletely: ne && f ? C : !1,
                bootProtection: U != "none" ? U : "",
              }),
            ],
          });
        }
        function hn(s) {
          const { label: t, children: n } = s;
          return (0, e.jsxs)("div", {
            className: "formrow flexRow",
            children: [
              t
                ? (0, e.jsx)("div", { className: "formlabel", children: t })
                : (0, e.jsx)("div", {
                    className: "formlabel",
                    children: "\xA0",
                  }),
              (0, e.jsx)("div", {
                className: "formdata settingsBlock",
                children: (0, e.jsx)("div", { className: "left", children: n }),
              }),
            ],
          });
        }
        function tl(s) {
          const { children: t } = s;
          return (0, e.jsx)("div", {
            className: ls.FormRowIndent,
            children: t,
          });
        }
        function sl(s) {
          const { children: t } = s;
          return (0, e.jsx)("div", {
            className: ls.FormRowHeader,
            children: t,
          });
        }
        function nl(s) {
          const { options: t, selectedOption: n, onSelectionChanged: r } = s;
          return (0, e.jsx)("div", {
            className: ls.AntiCheatDropDown,
            children: (0, e.jsx)(S.ZU, {
              controlled: !0,
              rgOptions: t,
              onChange: r,
              selectedOption: n,
            }),
          });
        }
        function rl(s) {
          const { values: t, mapLanguages: n } = s,
            {
              strActiveLanguage: r,
              mapValues: o,
              rctLanguageSelect: l,
              rctHiddenInputs: c,
            } = (0, F.KC)(n, t, "app", ["game", "3panticheat", "othernameloc"]),
            d = o.get(r),
            g = (0, _e.gc)(d);
          return (0, e.jsxs)(hn, {
            children: [
              (0, e.jsx)("div", {
                className: ls.LanguageSelector,
                children: l,
              }),
              (0, e.jsx)(S.pd, {
                className: ls.OtherSerivceName,
                type: "text",
                value: g,
                placeholder: "Enter the service name",
                onChange: (x) => d.Set(x.target.value),
                maxLength: 256,
              }),
              c,
            ],
          });
        }
        function al(s) {
          const { checked: t, onChange: n } = s;
          return (0, e.jsxs)(hn, {
            children: [
              (0, e.jsx)(S.Yh, {
                className: (0, D.A)(ls.KernelMode, ls.CheckboxLabel),
                label: (0, a.we)("#StoreAdmin_AntiCheat_KernelModeLabel"),
                checked: t,
                onChange: n,
              }),
              (0, e.jsx)("div", {
                className: ls.CheckboxDescription,
                children: (0, a.we)(
                  "#StoreAdmin_AntiCheat_KernelModelDescription_Other",
                ),
              }),
            ],
          });
        }
        function ol(s) {
          const { checked: t, onChange: n } = s;
          return (0, e.jsxs)(hn, {
            children: [
              (0, e.jsx)(S.Yh, {
                className: ls.CheckboxLabel,
                label: (0, a.we)(
                  "#StoreAdmin_AntiCheat_UninstallCompletelyLabel",
                ),
                checked: t,
                onChange: n,
              }),
              (0, e.jsx)("div", {
                className: ls.CheckboxDescription,
                children: (0, a.we)(
                  "#StoreAdmin_AntiCheat_UninstallCompletelyDescription",
                ),
              }),
            ],
          });
        }
        function il(s) {
          return s == "none"
            ? (0, a.we)("#StoreAdmin_AntiCheat_BootProtection_None")
            : s == "secureboot_tpm2"
              ? (0, a.we)("#StoreAdmin_AntiCheat_BootProtection_SecureBootTPM2")
              : s;
        }
        function ll(s) {
          const { supported: t, currentValue: n, onChange: r } = s;
          if (t.length == 0) return null;
          let o = t.map((d) => ({ label: il(d), data: d })),
            l = t.find((d) => d == n) ? n : t[0];
          const c = (d) => {
            d.data && r(d.data);
          };
          return (0, e.jsx)(hn, {
            children: (0, e.jsxs)(tl, {
              children: [
                (0, e.jsxs)(sl, {
                  children: [
                    (0, a.we)("#StoreAdmin_AntiCheat_BootProtectionLabel"),
                    " ",
                  ],
                }),
                (0, e.jsx)("div", {
                  className: ls.FormRowDescription,
                  children: (0, a.we)(
                    "#StoreAdmin_AntiCheat_BootProtectionDescription",
                  ),
                }),
                (0, e.jsx)("div", {
                  className: ls.AntiCheatDropDown,
                  children: (0, e.jsx)(S.ZU, {
                    controlled: !0,
                    rgOptions: o,
                    onChange: c,
                    selectedOption: l,
                  }),
                }),
              ],
            }),
          });
        }
        function cl(s, t, n, r) {
          let o = Array();
          return (
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][type]",
                value: s,
              }),
            ),
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][kernel]",
                value: t ? "1" : "",
              }),
            ),
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][uninst]",
                value: n ? "1" : "",
              }),
            ),
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][othername]",
                value: "",
              }),
            ),
            o.push(
              p.createElement("input", {
                type: "hidden",
                name: "app[game][3panticheat][bootprotect]",
                value: r,
              }),
            ),
            o
          );
        }
        function dl(s) {
          const {
              selectedOption: t,
              kernelMode: n,
              uninstallsCompletely: r,
              bootProtection: o,
            } = s,
            l = p.useMemo(() => cl(t, n, r, o), [t, n, r, o]);
          return (0, e.jsxs)(e.Fragment, { children: [...l] });
        }
        var gs = i(30041),
          xr = i(22633);
        function ul(s) {
          const [t, n] = p.useState(s),
            r = (g, x) => {
              let f = [...t];
              (f[g] = x), n(f);
            },
            o = (g) => {
              let x = [...t];
              x.splice(g, 1), n(x);
            };
          return {
            items: t,
            setItem: r,
            deleteItem: o,
            appendItem: (g) => {
              n(t.concat([g]));
            },
            moveItem: (g, x) => {
              let f = [...t],
                _ = t[g];
              g < x
                ? (f.splice(x + 1, 0, _), f.splice(g, 1))
                : (f.splice(g, 1), f.splice(x, 0, _)),
                n(f);
            },
            getState: (g) => ({
              item: t[g],
              setItem: (x) => r(g, x),
              deleteItem: () => o(g),
            }),
          };
        }
        function pl(s) {
          const [t, n] = p.useState(!1);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(xr.mt, {
                active: t,
                onDismiss: () => n(!1),
                children: (0, e.jsx)(gl, {
                  originalItems: s.rgItems,
                  onDismiss: () => n(!1),
                  packageid: s.packageid,
                }),
              }),
              (0, e.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      className: "tr heading",
                      children: [
                        (0, e.jsx)("th", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_TableHeader_Name",
                          ),
                        }),
                        (0, e.jsx)("th", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_TableHeader_Visible",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsxs)("tbody", {
                    children: [
                      s.rgItems.length === 0 &&
                        (0, e.jsx)("tr", {
                          children: (0, e.jsx)("td", {
                            colSpan: 2,
                            children: (0, a.we)(
                              "#StoreAdmin_NonAppContent_NoNonAppItems",
                            ),
                          }),
                        }),
                      s.rgItems.length > 0 &&
                        s.rgItems.map((r, o) =>
                          (0, e.jsx)(ml, { item: r, language: s.language }, o),
                        ),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)("button", {
                  className: (0, D.A)("btnv6_blue_hoverfade btn_small"),
                  onClick: () => n(!0),
                  children: (0, e.jsx)("span", {
                    children: (0, a.we)("#StoreAdmin_NonAppContent_Edit"),
                  }),
                }),
              }),
            ],
          });
        }
        function ml(s) {
          const { item: t, language: n } = s;
          let r = (0, a.we)("#StoreAdmin_NonAppContent_MissingLanguage");
          t.localized_title &&
            (r =
              t.localized_title[n] ??
              t.localized_title.english ??
              (0, a.we)("#StoreAdmin_NonAppContent_MissingLanguage"));
          let o = (0, a.we)("#StoreAdmin_NonAppContent_MissingLanguage");
          return (
            t.localized_description &&
              (o =
                t.localized_description[n] ??
                t.localized_description.english ??
                (0, a.we)("#StoreAdmin_NonAppContent_MissingLanguage")),
            (0, e.jsxs)("tr", {
              className: "tr highlightHover",
              children: [
                (0, e.jsx)("td", { className: "td", children: r }),
                (0, e.jsx)("td", {
                  className: "td",
                  children: (0, a.we)(
                    t.visible === "1"
                      ? "#StoreAdmin_NonAppContent_Editor_Yes"
                      : "#StoreAdmin_NonAppContent_Editor_No",
                  ),
                }),
              ],
            })
          );
        }
        function gl(s) {
          const { originalItems: t, packageid: n, onDismiss: r } = s,
            o = [];
          for (const ye of t)
            o.push({
              localized_title: ye.localized_title ?? {},
              localized_description: ye.localized_description ?? {},
              visible: ye.visible,
            });
          const l = ul(o),
            [c, d] = p.useState("editor"),
            [g, x] = p.useState(null),
            f = () => {
              l.appendItem({
                localized_title: {},
                localized_description: {},
                visible: "0",
              });
            },
            _ = _l(n),
            C = async () => {
              d("throbber"),
                await _.mutateAsync(l.items)
                  .then((ye) => {
                    ye.success !== 1
                      ? x(ye.errors[0] || "Unknown error")
                      : x(null);
                  })
                  .catch((ye) => {
                    throw (x(ye.message), ye);
                  })
                  .finally(() => {
                    d("message");
                  });
            },
            T = () => {
              d("editor"), r();
            },
            U = () => {
              window.location.reload();
            };
          return c === "editor"
            ? (0, e.jsxs)("div", {
                className: gs.NonAppContentsEditor,
                children: [
                  (0, e.jsx)("h1", {
                    children: (0, a.we)(
                      "#StoreAdmin_NonAppContent_Editor_Header",
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    className: gs.NonAppContentsEditorScrollArea,
                    children: [
                      l.items.length > 0 &&
                        (0, e.jsx)(Vt.A, {
                          onMove: l.moveItem,
                          rowClassName: gs.ItemEditorRow,
                          items: l.items,
                          render: (ye, ne) =>
                            (0, e.jsx)(hl, { state: l.getState(ne) }),
                          onDelete: l.deleteItem,
                        }),
                      l.items.length === 0 &&
                        (0, e.jsx)("div", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_NoNonAppItems",
                            (0, a.we)(
                              "#StoreAdmin_NonAppContent_Editor_AddItemButton",
                            ),
                          ),
                        }),
                      (0, e.jsx)("button", {
                        className: (0, D.A)(
                          "btn_green_white_innerfade",
                          gs.AddItemButton,
                        ),
                        onClick: f,
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_AddItemButton",
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: gs.EditorButtons,
                    children: [
                      (0, e.jsx)("button", {
                        className: "btn_green_white_innerfade",
                        onClick: C,
                        children: (0, a.we)("#StoreAdmin_NonAppContent_Save"),
                      }),
                      (0, e.jsx)("button", {
                        onClick: T,
                        children: (0, a.we)("#StoreAdmin_NonAppContent_Cancel"),
                      }),
                    ],
                  }),
                ],
              })
            : c === "throbber"
              ? (0, e.jsx)(ss.t, { size: "large" })
              : g === null
                ? (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("h1", {
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Header",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description",
                        ),
                      }),
                      (0, e.jsx)("button", {
                        onClick: U,
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_OK",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("h1", {
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_Error_Header",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_Error_Description",
                        ),
                      }),
                      (0, e.jsx)("p", { children: g }),
                      (0, e.jsx)("button", {
                        onClick: U,
                        children: (0, a.we)(
                          "#StoreAdmin_NonAppContent_Editor_OK",
                        ),
                      }),
                    ],
                  });
        }
        function hl(s) {
          const { state: t } = s,
            { item: n, setItem: r, deleteItem: o } = t,
            [l, c] = p.useState("english"),
            d = (0, a.O9)(!1),
            g = (U) => {
              c(U.target.value);
            },
            x = (U) => {
              (n.localized_title[l] = U.target.value), r(n);
            },
            f = (U) => {
              (n.localized_description[l] = U.target.value), r(n);
            },
            _ = (U) => {
              (n.visible = U ? "1" : "0"), r(n);
            };
          let C = "";
          n.localized_title &&
            n.localized_title[l] &&
            (C = n.localized_title[l]);
          let T = "";
          return (
            n.localized_description &&
              n.localized_description[l] &&
              (T = n.localized_description[l]),
            (0, e.jsxs)("div", {
              className: gs.ItemEditorRowContents,
              children: [
                (0, e.jsxs)("div", {
                  className: gs.ItemEditorRowNameAndLanguageEditor,
                  children: [
                    (0, e.jsx)("input", {
                      className: gs.InputTitle,
                      type: "text",
                      placeholder: (0, a.we)(
                        "#StoreAdmin_NonAppContent_Editor_TitlePlaceholder",
                      ),
                      value: C,
                      onChange: x,
                      maxLength: 120,
                    }),
                    (0, e.jsx)("select", {
                      onChange: g,
                      children: (0, a.vR)(d, (U, ye) =>
                        (0, e.jsx)("option", { value: ye, children: U }, ye),
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: gs.ItemEditorRowVisibleToggle,
                  children: [
                    (0, e.jsx)(ga._H, {
                      value: n.visible === "1",
                      onChange: _,
                    }),
                    " ",
                    (0, e.jsx)("span", {
                      children: (0, a.we)(
                        "#StoreAdmin_NonAppContent_Editor_Visible",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: gs.ItemEditorRowDescriptionEditor,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, a.we)(
                        "#StoreAdmin_NonAppContent_Editor_Description",
                      ),
                    }),
                    (0, e.jsx)("textarea", {
                      placeholder: (0, a.we)(
                        "#StoreAdmin_NonAppContent_Editor_DescriptionPlaceholder",
                      ),
                      maxLength: 300,
                      rows: 5,
                      onChange: f,
                      value: T,
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function _l(s) {
          return (0, Os.n)({
            mutationKey: ["save_nonapp_contents", s],
            mutationFn: async (t) => {
              const n = new FormData();
              n.append("sessionid", (0, Y.KC)());
              const r = "nonapp_contents";
              for (let x = 0; x < t.length; x++) {
                const f = t[x];
                for (const _ of Object.keys(f.localized_title ?? []))
                  n.append(
                    `${r}[${x}][localized_title][${_}]`,
                    f.localized_title[_],
                  );
                for (const _ of Object.keys(f.localized_description ?? []))
                  n.append(
                    `${r}[${x}][localized_description][${_}]`,
                    f.localized_description[_],
                  );
                n.append(`${r}[${x}][visible]`, f.visible);
              }
              t.length === 0 && n.append(r, "");
              const o = `${Y.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${s}`,
                l = await $t().post(o, n);
              if (l.status !== 200) return l.data;
              if (l.data.success != 1) throw l.data;
              const c = new FormData();
              c.append("sessionid", (0, Y.KC)()),
                c.append("changenotes", "Change non-app items in package");
              const d = `${Y.TS.PARTNER_BASE_URL}admin/store/packagepublish/${s}`,
                g = await $t().post(d, c);
              if (g.status !== 200) return g.data;
              if (l.data.success != 1) throw l.data;
              return { success: 1, errors: [] };
            },
          });
        }
        var fl = i(36671),
          qt = i.n(fl);
        function xl(s) {
          const { packageid: t } = s,
            [n, r] = p.useState(s.bShowCapsuleArt),
            [o, l] = p.useState(s.bHideItemPrefixes),
            [c, d] = p.useState(null),
            g = Sl(t),
            [x, f] = p.useState(null),
            _ = (Q) => {
              d("edit");
            },
            C = (Q) => {
              r(Q.target.checked);
            },
            T = (Q) => {
              l(Q.target.checked);
            },
            U = () => {
              r(s.bShowCapsuleArt), d(null);
            },
            ye = async () => {
              d("working"),
                await g
                  .mutateAsync({ bShowCapsuleArt: n, bHideItemPrefix: o })
                  .then((Q) => {
                    Q.success !== 1
                      ? f(Q.errors[0] || "Unknown error")
                      : f(null);
                  })
                  .catch((Q) => {
                    throw (f(Q.message), Q);
                  })
                  .finally(() => {
                    d("message");
                  });
            },
            ne = () => {
              window.location.reload();
            };
          return (0, e.jsxs)("div", {
            className: qt().PackagePurchaseDisplayContainer,
            children: [
              (0, e.jsxs)(xr.mt, {
                active: c !== null,
                onDismiss: U,
                children: [
                  c === "edit" &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        !s.bHideShowCapsuleCheckbox &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, a.we)(
                                  "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                                ),
                              }),
                              (0, e.jsxs)("label", {
                                children: [
                                  (0, e.jsx)("input", {
                                    type: "checkbox",
                                    checked: n,
                                    onChange: C,
                                  }),
                                  (0, e.jsx)("span", {
                                    className: qt().checkbox_label,
                                    children: (0, a.we)(
                                      "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, e.jsx)("p", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_HidePrefix_Description",
                          ),
                        }),
                        (0, e.jsxs)("label", {
                          children: [
                            (0, e.jsx)("input", {
                              type: "checkbox",
                              checked: o,
                              onChange: T,
                            }),
                            (0, e.jsx)("span", {
                              className: qt().checkbox_label,
                              children: (0, a.we)(
                                "#StoreAdmin_EditPackageDisplay_HidePrefix_Label",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: qt().PackagePurchaseDisplayButtonBar,
                          children: [
                            (0, e.jsx)("button", {
                              className: "btn_green_white_innerfade btn_medium",
                              onClick: ye,
                              disabled:
                                n === s.bShowCapsuleArt &&
                                o === s.bHideItemPrefixes,
                              children: (0, a.we)(
                                "#StoreAdmin_ShowCapsuleArt_SaveAndPublish",
                              ),
                            }),
                            (0, e.jsx)("button", {
                              className: "btnv6_blue_hoverfade btn_medium",
                              onClick: U,
                              children: (0, a.we)(
                                "#StoreAdmin_ShowCapsuleArt_Cancel",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  c === "working" &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, e.jsx)(ss.t, { size: "large" }),
                      ],
                    }),
                  c === "message" &&
                    x === null &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description",
                          ),
                        }),
                        (0, e.jsx)("button", {
                          onClick: ne,
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_OK",
                          ),
                        }),
                      ],
                    }),
                  c === "message" &&
                    x !== null &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_Header",
                          ),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_Error_Description",
                          ),
                        }),
                        (0, e.jsx)("p", { children: x }),
                        (0, e.jsx)("button", {
                          onClick: ne,
                          children: (0, a.we)(
                            "#StoreAdmin_NonAppContent_Editor_OK",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              !s.bHideShowCapsuleCheckbox &&
                (0, e.jsxs)("div", {
                  className: qt().PackagePurchaseDisplayCheckOption,
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      className: qt().PackagePurchaseDisplayCheckbox,
                      checked: n,
                      onChange: _,
                    }),
                    (0, e.jsx)(pe.Gq, {
                      toolTipContent: (0, a.we)(
                        "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                      ),
                      children: (0, e.jsxs)("div", {
                        className: qt().PackagePurchaseDisplayLabel,
                        children: [
                          (0, e.jsx)("span", {
                            children: (0, a.we)(
                              "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                            ),
                          }),
                          " (?)",
                        ],
                      }),
                    }),
                  ],
                }),
              s.bHideShowCapsuleCheckbox &&
                (0, e.jsxs)("div", {
                  className: qt().PackagePurchaseDisplayCheckOption,
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      className: qt().PackagePurchaseDisplayCheckbox,
                      checked: n,
                      disabled: !0,
                    }),
                    (0, e.jsx)(pe.Gq, {
                      toolTipContent: (0, a.we)(
                        "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description",
                      ),
                      children: (0, e.jsxs)("div", {
                        className: qt().PackagePurchaseDisplayLabel,
                        children: [
                          (0, e.jsx)("span", {
                            children: (0, a.we)(
                              "#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label",
                            ),
                          }),
                          " (?)",
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)("span", {
                            children: (0, a.we)(
                              "#StoreAdmin_EditPackageDisplay_UseEditStorePackage",
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: qt().PackagePurchaseDisplayCheckOption,
                children: [
                  (0, e.jsx)("input", {
                    type: "checkbox",
                    className: qt().PackagePurchaseDisplayCheckbox,
                    checked: o,
                    onChange: _,
                  }),
                  (0, e.jsx)(pe.Gq, {
                    toolTipContent: (0, a.we)(
                      "#StoreAdmin_EditPackageDisplay_HidePrefix_Description",
                    ),
                    children: (0, e.jsxs)("div", {
                      className: qt().PackagePurchaseDisplayLabel,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, a.we)(
                            "#StoreAdmin_EditPackageDisplay_HidePrefix_Label",
                          ),
                        }),
                        " (?)",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Sl(s) {
          return (0, Os.n)({
            mutationKey: ["save_show_capsule_art_toggle", s],
            mutationFn: async (t) => {
              const n = new FormData();
              n.append("sessionid", (0, Y.KC)()),
                n.append(
                  "show_capsule_art_in_purchase_option",
                  t.bShowCapsuleArt ? "1" : "0",
                ),
                n.append(
                  "hide_shared_prefix_on_items",
                  t.bHideItemPrefix ? "1" : "0",
                );
              const r = `${Y.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${s}`,
                o = await $t().post(r, n);
              if (o.status !== 200) return o.data;
              if (o.data.success != 1) throw o.data;
              const l = new FormData();
              l.append("sessionid", (0, Y.KC)()),
                l.append(
                  "changenotes",
                  "Configure package purchase display options.",
                ),
                l.append("packages[0]", "" + s);
              const c = `${Y.TS.PARTNER_BASE_URL}store/ajaxpublishpackages`,
                d = await $t().post(c, l);
              if (d.status !== 200) return d.data;
              if (o.data.success != 1) throw o.data;
              return { success: 1, errors: [] };
            },
          });
        }
        var Hs = i(72671),
          Cl = i(29757),
          bl = i(53107);
        function Sr(s) {
          const [t, n] = (0, p.useState)([]),
            [r, o] = (0, p.useState)(!1),
            { itemid: l, apptype: c, altasset: d, altpostfix: g } = s;
          (0, p.useEffect)(
            () => (
              (window.ShowImageConfirmationDialog = (_) => {
                n(_), o(!0);
              }),
              () => {
                delete window.ShowImageConfirmationDialog;
              }
            ),
            [],
          );
          const x = () => {
              o(!1);
            },
            f = p.useCallback(() => {
              window.SubmitImageUpload(l, c, d, g, !0), x();
            }, [d, g, c, l]);
          return (0, e.jsx)(we.tH, {
            children: (0, e.jsx)(Cs.E, {
              active: r,
              children: (0, e.jsx)(Al, {
                rgImages: t,
                fnOnSuccess: f,
                fnCloseDialog: x,
              }),
            }),
          });
        }
        function va(s) {
          let t = [];
          switch (s) {
            case "Small Capsule":
              t = ["LegibleLogo", "NoAdditionalText"];
              break;
            case "Main Capsule":
              t = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Package Header":
            case "Header Capsule":
              t = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Library Capsule":
            case "Vertical Capsule":
            case "Library Header":
              t = ["OneThirdLogo", "NoAdditionalText"];
              break;
            case "Library Hero":
              t = ["NoLogo"];
              break;
            case "Library Logo":
              t = ["TransparentBG", "NoAdditionalText"];
              break;
            default:
              (0, bn.wT)(!1, `Unknown uploaded image provided: ${s}`);
          }
          return t;
        }
        function Al(s) {
          const { rgImages: t, fnOnSuccess: n, fnCloseDialog: r } = s,
            [o, l] = (0, p.useState)({}),
            c = (0, p.useCallback)(
              (x, f, _) => l({ ...o, [x]: { ...o[x], [f]: _ } }),
              [o],
            );
          let d = !0;
          t.forEach((x) => {
            va(x.image_def.name).forEach((_) => {
              if (!o[x.image_def.name] || !o[x.image_def.name][_]) {
                d = !1;
                return;
              }
            });
          });
          const g = t.map((x) =>
            (0, e.jsx)(vl, { image: x, onCheckboxChange: c }, x.image_def.name),
          );
          return (0, e.jsxs)(is.o0, {
            className: Hs.ImageConfirmationDialog,
            strTitle: (0, a.we)(
              "#StoreAdmin_GraphicalAssets_ConfirmDialog_Title",
            ),
            bOKDisabled: !d,
            closeModal: r,
            strOKButtonText: (0, a.we)(
              "#StoreAdmin_GraphicalAssets_ConfirmDialog_ConfirmBtn",
            ),
            onOK: n,
            bDestructiveWarning: !d,
            bDisableBackgroundDismiss: !0,
            children: [
              (0, e.jsx)("div", {
                className: Hs.ConfirmationDescription,
                children: (0, a.oW)(
                  "#StoreAdmin_GraphicalAssets_ConfirmDialog_Desc",
                  (0, e.jsx)(bl.uU, {
                    href: `${qe.TS.PARTNER_BASE_URL}doc/store/assets/rules`,
                  }),
                ),
              }),
              g,
            ],
          });
        }
        function vl(s) {
          const { image: t, onCheckboxChange: n } = s,
            r = va(t.image_def.name);
          let o = [];
          for (const l of r)
            o.push(
              (0, e.jsx)(
                Cl.Yh,
                {
                  onChange: (c) => n(t.image_def.name, l, c),
                  label: (0, a.we)(
                    `#StoreAdmin_GraphicalAssets_ConfirmDialog_${l}`,
                  ),
                },
                `${t.image_def.name}_Checkbox_${l}`,
              ),
            );
          return (0, e.jsxs)("div", {
            className: Hs.ImageTypeConfirmationCtn,
            children: [
              (0, e.jsx)("div", {
                className: Hs.ImageTitle,
                children: t.image_def.name,
              }),
              (0, e.jsx)("div", {
                className: Hs.ImageCtn,
                children: (0, e.jsx)("img", {
                  className: Hs.ImageSrc,
                  src: t.image_src,
                }),
              }),
              (0, e.jsx)("div", { className: Hs.ImageCheckboxes, children: o }),
            ],
          });
        }
        var sn = i(64407),
          ya = i(92441);
        const yl = "usePartnerActiveCreatorClans";
        function ja(s, t) {
          return (0, ya.j)({
            queryKey: [yl, s],
            queryFn: async () => {
              const n = Vs.w.Init(sn.fD);
              n.Body().set_partnerid(s);
              let r;
              try {
                r = await sn.w5.GetDevPagesForPartner(t, n);
              } catch (o) {
                throw (
                  (console.error(
                    `usePartnerActiveCreatorClans on PartnerID ${s} request failed`,
                    o,
                  ),
                  o)
                );
              }
              if (r.GetEResult() == Kt.R)
                return r
                  .Body()
                  .results()
                  .map((o) => o.toObject());
              throw (
                (console.error(
                  `usePartnerActiveCreatorClans on PartnerID ${s} failed with EResult: ${r.GetEResult()}`,
                ),
                new Error(
                  `GetDevPagesForPartner answered EResult ${r.GetEResult()}`,
                ))
              );
            },
            enabled: s > 0,
          });
        }
        function Yh(s) {
          const t = usePromotionTransport(),
            n = useQuery(ja(s, t));
          return n.isLoading ? null : (n.data ?? []);
        }
        const Pa = "useCreatorHomeClanLinksByApp";
        function Ea(s) {
          const t = (0, Rt.a)(),
            n = (0, ps.I)({
              queryKey: [Pa, s],
              queryFn: async () => {
                const r = Vs.w.Init(sn.iz);
                r.Body().set_appid(s);
                const o = await sn.w5.GetDevPageLinks(t, r);
                return o.GetEResult() == Kt.R
                  ? o
                      .Body()
                      .links()
                      .map((l) => l.toObject())
                  : (console.error(
                      `useCreatorHomeClanLinksByApp on AppID ${s} failed with ${o.GetEResult()}`,
                    ),
                    []);
              },
              enabled: s > 0,
            });
          return n.isLoading ? null : n.data;
        }
        async function jl(s) {
          const t = `${Ce.TS.PARTNER_BASE_URL}apps/creatorhomelinkroles?clanids=${s.join(",")}`,
            n = await fetch(t, { credentials: "include" });
          if (!n.ok) throw new Error(`${t} answered ${n.status}`);
          const r = await n.json();
          if (r.success != Kt.R)
            throw new Error(r.msg || `EResult ${r.success}`);
          return r.verdicts ?? [];
        }
        const Pl = "useCreatorHomeFranchiseVerdict";
        function El(s, t, n) {
          return (0, ps.I)({
            queryKey: [Pl, s],
            queryFn: async () =>
              (await jl([s])).find((o) => o.clan_account_id === s) ?? null,
            initialData: n,
            enabled: t && s > 0,
            staleTime: 1 / 0,
          });
        }
        var Dl = i(39376),
          Da = i(33654),
          Rn = i(40562),
          Tl = i(40497);
        function Il(s, t, n) {
          const r = Ta();
          return (0, Os.n)({
            mutationFn: async ({ clanAccountID: o, bReuseExistingClan: l }) => {
              const c = mt.b.InitFromClanID(o),
                d = {
                  appid: t,
                  remove: !1,
                  update_json_only: !1,
                  skip_clan_permissions: l,
                  partner_id: s,
                  link: {
                    appid: t,
                    clan_steamid: c.ConvertTo64BitString(),
                    relation: Rn.VY.wQ,
                    linkname: n,
                    json: null,
                  },
                };
              return await r.mutateAsync(d);
            },
          });
        }
        function wl(s, t, n) {
          const r = Ta();
          return (0, Os.n)({
            mutationFn: async () => {
              const o = mt.b.InitFromClanID(t),
                l = {
                  appid: s,
                  remove: !0,
                  update_json_only: !1,
                  link: {
                    appid: s,
                    clan_steamid: o.ConvertTo64BitString(),
                    relation: Rn.VY.wQ,
                    linkname: n,
                    json: null,
                  },
                };
              return await r.mutateAsync(l);
            },
          });
        }
        function Ta() {
          const s = (0, Rt.a)();
          return (0, Os.n)({
            mutationFn: async (t) => {
              const n = Vs.w.Init(sn.dC);
              n.Body().set_appid(t.appid),
                n.Body().set_remove(t.remove),
                n.Body().set_update_json_only(t.update_json_only),
                n.Body().set_skip_clan_permissions(t.skip_clan_permissions),
                n.Body().set_partner_id(t.partner_id),
                n.Body().link().set_appid(t.link.appid),
                n.Body().link().set_clan_steamid(t.link.clan_steamid),
                n.Body().link().set_relation(t.link.relation),
                n.Body().link().set_linkname(t.link.linkname),
                n.Body().link().set_json(t.link.json);
              const r = await sn.w5.SetDevPageLink(s, n);
              return r.GetEResult() == Kt.R
                ? (Tl.L.invalidateQueries({ queryKey: [Pa, t.appid] }), !0)
                : (console.error(
                    `useSetDevPageLink on AppID ${t.appid} failed with ${r.GetEResult()}`,
                  ),
                  !1);
            },
          });
        }
        function Ia(s) {
          const [t, n, r] = (0, _e.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(S.$n, {
                onClick: n,
                children: (0, a.we)("#Button_Unlink"),
              }),
              (0, e.jsx)(Cs.E, {
                active: t,
                children: (0, e.jsx)(Ml, { ...s, closeModal: r }),
              }),
            ],
          });
        }
        function Ml(s) {
          const {
              pageLink: t,
              clanAccountID: n,
              clanName: r,
              closeModal: o,
            } = s,
            l = wl(t.appid, n, t.linkname),
            c = (0, Es.vs)();
          return c.bLoading
            ? (0, e.jsx)(Es.Hh, {
                state: c,
                strDialogTitle: (0, a.we)("#Button_Unlink"),
                closeModal: o,
              })
            : (0, e.jsx)(is.o0, {
                onCancel: o,
                strTitle: (0, a.we)("#Button_Unlink"),
                strDescription: (0, a.we)(
                  "#AppLanding_Creator_UnlinkDesc",
                  r || n,
                  t.linkname,
                ),
                onOK: () => {
                  c.fnSetLoading(!0),
                    l
                      .mutateAsync()
                      .then((d) => {
                        d
                          ? (c.fnSetStrSuccess(
                              (0, a.we)("#EventDisplay_Share_Success"),
                            ),
                            c.fnSetSuccess(!0))
                          : (c.fnSetStrError(
                              (0, a.we)("#Error_ErrorCommunicatingWithNetwork"),
                            ),
                            c.fnSetError(!0));
                      })
                      .catch((d) => {
                        c.fnSetStrError(
                          (0, a.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                          c.fnSetError(!0),
                          console.error(
                            `unlinking failed appid ${t.appid} with error ${((0, de.H))(d).strErrorMsg} `,
                          );
                      });
                },
                children: (0, e.jsx)(Ne.EY, {
                  as: "p",
                  size: "2",
                  children: (0, a.we)("#Dialog_AreYouSure"),
                }),
              });
        }
        var kl = i(30533),
          _n = i.n(kl),
          nn = i(58952),
          wa = i(86668);
        const Ll = "useClanLinkableForMeViaCreatorHome";
        function Ma() {
          return (0, ya.j)({
            queryKey: [Ll, Ce.iA.accountid],
            queryFn: async () => {
              const s = `${Ce.TS.PARTNER_BASE_URL}creatorhome/ajaxgetgroupsforuser`,
                t = { sessionid: (0, Y.KC)() };
              let n;
              try {
                n = await $t().get(s, { params: t });
              } catch (r) {
                const { strErrorMsg: o, errorCode: l } = (0, de.H)(r);
                throw (
                  (console.error(
                    `useClanLinkableForMeViaCreatorHome: request failed, EResult ${l}: ${o}`,
                    r,
                  ),
                  r)
                );
              }
              if (n?.status == 200 && n.data?.success == Kt.R)
                return n.data.rgClanAccountIDs ?? [];
              throw (
                (console.error(
                  `useClanLinkableForMeViaCreatorHome: status ${n?.status}, EResult ${n?.data?.success}`,
                ),
                new Error(
                  `ajaxgetgroupsforuser answered EResult ${n?.data?.success}`,
                ))
              );
            },
            enabled: Ce.iA.logged_in,
          });
        }
        function Xh() {
          const s = useQuery(Ma());
          return s.isLoading ? null : (s.data ?? []);
        }
        var Bl = i(63251),
          ka = i.n(Bl);
        function Nl(s) {
          const { nAppID: t, nPartnerID: n } = s,
            [r, o, l] = (0, _e.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(S.$n, {
                onClick: o,
                children: (0, a.we)("#Button_Link"),
              }),
              (0, e.jsx)(Cs.E, {
                active: r,
                children: (0, e.jsx)(Fl, { closeModal: l, ...s }),
              }),
            ],
          });
        }
        const Ol = [],
          Rl = [];
        function Fl(s) {
          const { nAppID: t, nPartnerID: n, linkname: r, closeModal: o } = s,
            l = Il(n, t, r),
            [c, d] = (0, p.useState)(null),
            g = (0, Rt.a)(),
            x = n > 0,
            f = (0, ps.I)(ja(n, g)),
            _ = f.data ?? Ol,
            C = (0, ps.I)(Ma()),
            T = C.data ?? Rl;
          (0, p.useEffect)(() => {
            x ||
              console.warn(
                `LinkDialog: no partner for app ${t} (got ${n}), offering only the groups the user owns or officers`,
              ),
              Ce.iA.logged_in ||
                console.warn(
                  "LinkDialog: UserConfig says signed out, so the groups the user owns or officers were not requested",
                );
          }, [x, t, n]);
          const { rgClanChoices: U, setExistingLinks: ye } = (0,
            p.useMemo)(() => {
              const Fe = new Set(_.map(($e) => $e.clan_accountid)),
                Re = new Set([...T, ...Fe]);
              return { rgClanChoices: Array.from(Re), setExistingLinks: Fe };
            }, [_, T]),
            ne = (0, nn.WM)({
              rgOptions: U,
              selectedValue: c,
              onSelectionChange: d,
            }),
            Q = (0, Es.vs)();
          return f.isLoading || C.isLoading
            ? (0, e.jsx)(is.o0, {
                strTitle: (0, a.we)("#Button_Link"),
                bAlertDialog: !0,
                closeModal: o,
                children: (0, e.jsxs)(Xt.s, {
                  align: "center",
                  gap: "2",
                  children: [
                    (0, e.jsx)(wa.k, { size: "1" }),
                    (0, e.jsx)(Ne.EY, {
                      size: "2",
                      contrast: "description",
                      children: (0, a.we)("#Loading"),
                    }),
                  ],
                }),
              })
            : f.isError || C.isError
              ? (0, e.jsx)(is.o0, {
                  strTitle: (0, a.we)("#Button_Link"),
                  bAlertDialog: !0,
                  closeModal: o,
                  children: (0, e.jsx)(Ne.EY, {
                    as: "p",
                    size: "2",
                    color: "text-error",
                    children: (0, a.we)("#AppLanding_Creator_Linking_Failed"),
                  }),
                })
              : Q.bLoading
                ? (0, e.jsx)(Es.Hh, {
                    state: Q,
                    strDialogTitle: (0, a.we)("#Button_Link"),
                    closeModal: o,
                  })
                : (0, e.jsx)(is.o0, {
                    onCancel: o,
                    bAllowFullSize: !0,
                    strTitle: (0, a.we)("#AppLAnding_Creator_LinkingTitle", r),
                    strDescription: (0, a.we)(
                      "#AppLAnding_Creator_LinkingDesc",
                      r,
                    ),
                    bOKDisabled: !c,
                    onOK: async () => {
                      Q.fnSetLoading(!0);
                      const Fe = {
                        clanAccountID: c,
                        bReuseExistingClan: ye.has(c),
                      };
                      await l
                        .mutateAsync(Fe)
                        .then((Re) => {
                          Re
                            ? (Q.fnSetStrSuccess(
                                (0, a.we)("#EventDisplay_Share_Success"),
                              ),
                              Q.fnSetSuccess(!0))
                            : (Q.fnSetStrError(
                                (0, a.we)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              ),
                              Q.fnSetError(!0));
                        })
                        .catch((Re) => {
                          Q.fnSetStrError(
                            (0, a.we)("#Error_ErrorCommunicatingWithNetwork"),
                          ),
                            Q.fnSetError(!0),
                            console.error(
                              `linking failed appid ${t} with error ${((0, de.H))(Re).strErrorMsg} `,
                            );
                        });
                    },
                    children: (0, e.jsxs)(Xt.s, {
                      direction: "column",
                      gap: "3",
                      children: [
                        (0, e.jsx)(Ne.EY, {
                          as: "p",
                          size: "2",
                          children: (0, a.we)(
                            "#AppLanding_Creator_LinkingNote",
                          ),
                        }),
                        !x &&
                          (0, e.jsx)(Ne.EY, {
                            as: "p",
                            size: "2",
                            contrast: "description",
                            children: (0, a.we)(
                              "#AppLanding_Creator_Linking_NoPartner",
                            ),
                          }),
                        U.length == 0
                          ? (0, e.jsx)(Ne.EY, {
                              as: "p",
                              size: "2",
                              contrast: "description",
                              children: (0, a.we)(
                                "#AppLanding_Creator_Linking_NoOptions",
                              ),
                            })
                          : (0, e.jsx)("div", {
                              className: ka().DropDown,
                              children: (0, e.jsxs)(nn.l6.Root, {
                                state: ne,
                                size: "2",
                                popoverWidth: "target",
                                children: [
                                  (0, e.jsx)(nn.l6.Trigger, {
                                    children: c
                                      ? (0, e.jsx)(La, {
                                          clanAccountID: c,
                                          bExistingLink: ye.has(c),
                                        })
                                      : (0, e.jsx)(nn.l6.Placeholder, {
                                          children: (0, a.we)(
                                            "#AppLanding_Creator_Choice",
                                          ),
                                        }),
                                  }),
                                  (0, e.jsx)(nn.l6.Options, {
                                    children: U.map((Fe) =>
                                      (0, e.jsx)(
                                        nn.l6.Option,
                                        {
                                          value: Fe,
                                          children: (0, e.jsx)(La, {
                                            clanAccountID: Fe,
                                            bExistingLink: ye.has(Fe),
                                          }),
                                        },
                                        Fe,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                      ],
                    }),
                  });
        }
        function La(s) {
          const { clanAccountID: t, bExistingLink: n } = s,
            [r, o] = (0, Je.TB)(t),
            l = o ? o.group_name + `(${t})` : "" + t;
          return (0, e.jsx)(pe.Gq, {
            toolTipContent: n
              ? (0, a.we)("#AppLanding_Creator_Existing")
              : void 0,
            children: (0, e.jsxs)(Xt.s, {
              align: "center",
              gap: "2",
              wrap: "nowrap",
              children: [
                (0, e.jsx)("img", {
                  className: ka().Avatar,
                  src: o?.avatar_full_url,
                }),
                (0, e.jsxs)(Ne.EY, {
                  size: "2",
                  truncate: !0,
                  children: [l, " ", n ? "*" : ""],
                }),
              ],
            }),
          });
        }
        var Hl = i(62178);
        function Ul(s) {
          const {
              nAppID: t,
              nPrimaryPartnerID: n,
              strName: r,
              strKvTargetName: o,
              rgConflictClanAccountIDs: l,
              rgCatalogVerdicts: c,
              bCheckCatalogRoles: d,
              rgNameMustMatchLinks: g,
              strMatchKey: x,
            } = s,
            [f, _] = (0, p.useState)(() => r),
            C = Gl(t, n),
            U = Ea(t)?.find(
              (Fe) =>
                Fe.linkname.trim().toLocaleLowerCase() ==
                r.trim().toLocaleLowerCase(),
            ),
            ye = (0, p.useMemo)(
              () => (U ? new mt.b(U.clan_steamid).GetAccountID() : 0),
              [U],
            ),
            { data: ne } = El(
              ye,
              !!d,
              c?.find((Fe) => Fe.clan_account_id === ye),
            ),
            Q = (0, p.useMemo)(() => {
              if (!U) return null;
              if (l?.includes(ye))
                return (0, a.we)("#AppLanding_Creator_FranchiseSameAsDevPub");
              if (ne?.franchise_links_suppressed)
                return (0, a.we)(
                  "#AppLanding_Creator_FranchiseIsDevPubElsewhere",
                );
              const Fe = g?.filter((Re) => Re.clanAccountID === ye);
              return Fe?.length && !Fe.some((Re) => Re.strMatchKey === x)
                ? (0, a.we)("#AppLanding_Creator_DeveloperNameMismatch")
                : null;
            }, [U, ye, l, ne, g, x]);
          return (0, e.jsxs)(Xt.s, {
            align: "start",
            gap: "2",
            wrap: "nowrap",
            className: _n().Ctn,
            children: [
              (0, e.jsx)(pe.Gq, {
                toolTipContent: U && (0, a.we)("#AppLanding_CreatorLocked"),
                children: (0, e.jsx)("input", {
                  type: "text",
                  size: 30,
                  value: f,
                  onChange: (Fe) => {
                    U || _(Fe.currentTarget.value || "");
                  },
                }),
              }),
              (0, e.jsx)("input", {
                name: o,
                type: "hidden",
                value: f,
                onChange: () => {},
              }),
              !!(U && r?.toLocaleLowerCase() === f?.toLocaleLowerCase()) &&
                (0, e.jsx)(Wl, {
                  pageLink: U,
                  strKvTargetName: o,
                  strLinkIssue: Q,
                }),
              !U &&
                f?.trim().length > 0 &&
                (0, e.jsx)(Nl, {
                  nPartnerID: C,
                  nAppID: t,
                  linkname: f.trim(),
                }),
              f?.toLocaleLowerCase() !== r?.toLocaleLowerCase() &&
                (0, e.jsx)(Ne.EY, {
                  size: "2",
                  contrast: "description",
                  marginTop: "2",
                  children: (0, a.we)("#AppLanding_Creator_SaveRequires"),
                }),
            ],
          });
        }
        const zl = { direction: "right", style: { minWidth: "350px" } };
        function Cr(s, t) {
          const n = (0, p.useMemo)(
              () => new mt.b(s.clan_steamid).GetAccountID(),
              [s],
            ),
            { creatorHome: r } = (0, Gt.FV)(n),
            [o, l] = (0, Je.TB)(n),
            c = (0, p.useMemo)(() => {
              let g = "developer";
              return (
                t.includes("[publisher")
                  ? (g = "publisher")
                  : t.includes("[franchise") && (g = "franchise"),
                { clan_account_id: n, name: l?.group_name, type: g }
              );
            }, [n, t, l]),
            d = r?.GetCreatorHomeURL(c.type);
          return { clanAccountID: n, clanInfo: l, strURL: d };
        }
        function Wl(s) {
          const { pageLink: t, strKvTargetName: n, strLinkIssue: r } = s,
            { clanAccountID: o, clanInfo: l, strURL: c } = Cr(t, n);
          return (0, e.jsxs)(Xt.s, {
            justify: "between",
            align: "start",
            gap: "2",
            wrap: "nowrap",
            flexGrow: "1",
            children: [
              (0, e.jsxs)(Xt.s, {
                direction: "column",
                children: [
                  (0, e.jsxs)(Xt.s, {
                    align: "center",
                    gap: "2",
                    wrap: "nowrap",
                    className: (0, D.A)(
                      _n().CreatorCtn,
                      r && _n().CreatorCtnError,
                    ),
                    children: [
                      !!r &&
                        (0, e.jsx)(Ne.EY, {
                          color: "text-error",
                          weight: "heavy",
                          children: "\u2716",
                        }),
                      (0, a.PP)(
                        "#AppLanding_CreatorLinked",
                        (0, e.jsx)(br, {
                          clanAccountID: o,
                          strURL: c,
                          clanInfo: l,
                        }),
                      ),
                    ],
                  }),
                  !!r &&
                    (0, e.jsx)(Ne.EY, {
                      as: "p",
                      size: "2",
                      color: "text-error",
                      marginLeft: "3",
                      marginTop: "1",
                      children: r,
                    }),
                ],
              }),
              (0, e.jsx)(Ia, {
                pageLink: t,
                clanAccountID: o,
                clanName: l?.group_name || "" + o,
              }),
            ],
          });
        }
        function br(s) {
          const { clanAccountID: t, clanInfo: n, strURL: r } = s,
            o = n?.group_name || "" + t;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Da.iN, { href: r, target: "_blank", children: o }),
              (0, e.jsx)(Hl.JU, {
                className: _n().HoverCtn,
                hoverProps: zl,
                hoverContent: (0, e.jsx)(fs.ux, { clanInfo: n }),
                children: (0, e.jsx)(Da.iN, {
                  href: r,
                  target: "_blank",
                  children: (0, e.jsx)("img", {
                    className: _n().Avatar,
                    src: n?.avatar_full_url,
                  }),
                }),
              }),
            ],
          });
        }
        function Gl(s, t) {
          const [n, r] = (0, p.useState)(() => (t > 0 ? t : null)),
            o = (0, Dl.O4)(n > 0 ? null : s);
          return (
            (0, p.useEffect)(() => {
              n ||
                !o ||
                (o.length > 0
                  ? r(o[0].partner_id)
                  : console.warn(
                      `Creator home linking: the page gave no primary partner (${t}) and nobody is paid for app ${s}, so creator homes linked on other games cannot be offered`,
                    ));
            }, [o, n, s, t]),
            n
          );
        }
        var Vl = i(82363);
        function Kl(s) {
          const [t, n, r] = (0, _e.uD)(),
            { rgScreenshots: o, refetch: l, isFetching: c } = $l(t),
            { mutateAsync: d, isPending: g } = Yl(),
            x = p.useMemo(
              () =>
                o?.map((C, T) => ({ key: T, mapAltText: C.alt_text })) ?? [],
              [o],
            ),
            f = async (C, T) => (await d({ nIndex: C, mapAltText: T })) !== !1,
            _ = (C, T) => {
              const U = (0, ue.LgB)(T),
                ye = (0, ue.LgB)(T == ue.ZLm ? ue.NFp : ue.Bhc);
              return U in o[C].urls
                ? o[C].urls[U]
                : ye in o[C].urls
                  ? o[C].urls[ye]
                  : null;
            };
          return (0, e.jsxs)("div", {
            children: [
              t &&
                (0, e.jsx)(Vl.B, {
                  entries: x,
                  isLoading: c || g,
                  hideModal: r,
                  fnRefetch: l,
                  mutateAltTextAsync: f,
                  isMutatePending: g,
                  fnGetImage: (C, T) => (0, e.jsx)("img", { src: _(C, T) }),
                }),
              (0, e.jsx)(S.$n, {
                onClick: n,
                children: (0, a.we)("#StoreAdmin_EditAltText_Button"),
              }),
            ],
          });
        }
        function $l(s) {
          const t = (0, ve.Z3)("screenshots"),
            {
              data: n,
              refetch: r,
              isFetching: o,
            } = (0, ps.I)({
              queryKey: ["StoreAppScreenshots", t],
              queryFn: async () => {
                const l = await fetch(t);
                try {
                  return await l.json();
                } catch {
                  return null;
                }
              },
              enabled: s,
              refetchOnMount: "always",
              staleTime: 0,
            });
          return { rgScreenshots: n, refetch: r, isFetching: o };
        }
        function Yl() {
          const s = (0, ve.Z3)("quickupdateajax");
          return (0, Os.n)({
            mutationFn: async ({ nIndex: t, mapAltText: n }) => {
              if (t == null || !n) return !1;
              const r = new FormData();
              r.append("sessionid", (0, Y.KC)());
              for (const [c, d] of Object.entries(n))
                r.append(`app[assets][screenshots][${t}][alt_text][${c}]`, d);
              const o = await fetch(s, { method: "post", body: r }),
                l = await o.json();
              if (!o.ok) throw "Error modifying screenshot";
              return l;
            },
            onError: (t) => {
              console.error(
                (0, a.we)(
                  "#StoreAdmin_UploadError_Generic",
                  typeof t == "string" ? t : t.message,
                ),
              );
            },
          });
        }
        var Xl = i(72611),
          Ba = i.n(Xl);
        function Ql(s) {
          const {
              nAppID: t,
              rgAllCreatorHomeNames: n,
              nPrimaryPartnerID: r,
            } = s,
            o = Ea(t),
            l = (0, p.useMemo)(
              () =>
                o
                  ? o
                      .filter(
                        (c) =>
                          !n.some(
                            (d) =>
                              c.linkname.trim().toLocaleLowerCase() ==
                              d.trim().toLocaleLowerCase(),
                          ),
                      )
                      .sort((c, d) =>
                        c.linkname.localeCompare(d.linkname, void 0, {
                          sensitivity: "base",
                        }),
                      )
                  : [],
              [o, n],
            );
          return l.length == 0
            ? null
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h3", {
                    children: (0, a.we)("#AppLinding_Creator_Broken"),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.we)("#AppLinding_Creator_Broken_desc"),
                  }),
                  l.map((c) =>
                    (0, e.jsx)(Jl, { pageLink: c }, "dp_" + c.linkname),
                  ),
                ],
              });
        }
        function Jl(s) {
          const { pageLink: t } = s,
            { clanAccountID: n, clanInfo: r, strURL: o } = Cr(t, "developer");
          return (0, e.jsxs)("div", {
            className: Ba().CreatorNameCtn,
            children: [
              (0, e.jsx)(Ia, {
                pageLink: t,
                clanAccountID: n,
                clanName: r?.group_name || "" + n,
              }),
              (0, e.jsx)("div", {
                className: Ba().CreatorCtn,
                children: (0, a.PP)(
                  "#AppLanding_Creator_Broken_Link",
                  (0, e.jsx)(e.Fragment, { children: t.linkname }),
                  (0, e.jsx)(br, { clanAccountID: n, strURL: o, clanInfo: r }),
                ),
              }),
            ],
          });
        }
        var Fn = i(60394);
        function Zl(s) {
          return (0, e.jsxs)(Hn.Root, {
            ...s,
            children: [(0, e.jsx)(Hn.Track, {}), (0, e.jsx)(Hn.Handle, {})],
          });
        }
        function ql(s) {
          const { value: t, onChange: n, size: r = "2", color: o, ref: l } = s,
            c = (d) => {
              (d.key === " " || d.key === "Enter") &&
                (n(!t), d.preventDefault(), d.stopPropagation());
            };
          return (0, e.jsx)(Zt.az, {
            ref: l,
            role: "switch",
            "aria-checked": !!t,
            onClick: () => n(!t),
            onKeyDown: c,
            tabIndex: 0,
            "data-accent-color": o,
            ...(0, lr.mz)({ size: r, className: Fn.Root }, sc),
            children: s.children,
          });
        }
        function ec(s) {
          return (0, e.jsx)("div", { className: Fn.Track, ...s });
        }
        function tc(s) {
          return (0, e.jsx)("div", { className: Fn.Handle, ...s });
        }
        const Hn = Object.assign(Zl, { Root: ql, Track: ec, Handle: tc }),
          sc = [
            ...qr.L,
            { prop: "size", className: (s) => Fn[`Size-${s}`], responsive: !0 },
          ];
        class Na extends Error {
          eResult;
          constructor(t, n) {
            super(n), (this.eResult = t);
          }
        }
        async function nc(s) {
          const t = `${Ce.TS.PARTNER_BASE_URL}apps/creatorhomelinkhistory?appid=${s}`,
            n = await fetch(t, { credentials: "include" });
          if (!n.ok) throw new Error(`${t} answered ${n.status}`);
          const r = await n.json();
          if (r.success != Kt.R)
            throw new Na(r.success, r.msg || `EResult ${r.success}`);
          return r.entries ?? [];
        }
        const rc = "useCreatorHomeLinkHistory";
        function ac(s, t) {
          return (0, ps.I)({
            queryKey: [rc, s],
            queryFn: () => nc(s),
            enabled: t && s > 0,
            staleTime: 1 / 0,
          });
        }
        var js = i(9469);
        function oc(s) {
          const { nAppID: t } = s,
            [n, r] = (0, p.useState)(!1);
          return (0, e.jsxs)(Zt.az, {
            marginTop: "5",
            children: [
              (0, e.jsxs)(Xt.s, {
                align: "center",
                gap: "4",
                children: [
                  (0, e.jsx)(Zr.D, {
                    level: "3",
                    children: (0, a.we)("#AppLanding_Creator_History"),
                  }),
                  (0, e.jsx)(Ln.$, {
                    size: "1",
                    variant: "outline",
                    onClick: () => r(!n),
                    children: (0, a.we)(
                      n
                        ? "#AppLanding_Creator_History_Hide"
                        : "#AppLanding_Creator_History_Show",
                    ),
                  }),
                ],
              }),
              n && (0, e.jsx)(ic, { nAppID: t }),
            ],
          });
        }
        function ic(s) {
          const { nAppID: t } = s,
            n = ac(t, !0),
            [r, o] = (0, p.useState)(!1),
            l = (0, p.useMemo)(() => [...(n.data ?? [])].reverse(), [n.data]),
            c = (0, p.useMemo)(
              () => (r ? l.filter((d) => !!d.is_active) : l),
              [l, r],
            );
          if (n.isLoading)
            return (0, e.jsxs)(Xt.s, {
              align: "center",
              gap: "2",
              marginTop: "3",
              children: [
                (0, e.jsx)(wa.k, { size: "1" }),
                (0, e.jsx)(Ne.EY, {
                  size: "2",
                  contrast: "description",
                  children: (0, a.we)("#AppLanding_Creator_History_Loading"),
                }),
              ],
            });
          if (n.isError) {
            const d = n.error instanceof Na && n.error.eResult == Kt.sW;
            return (0, e.jsx)(Ne.EY, {
              as: "p",
              size: "2",
              color: "text-error",
              marginTop: "3",
              children: (0, a.we)(
                d
                  ? "#AppLanding_Creator_History_Denied"
                  : "#AppLanding_Creator_History_Failed",
              ),
            });
          }
          return l.length == 0
            ? (0, e.jsx)(Ne.EY, {
                as: "p",
                size: "2",
                contrast: "description",
                marginTop: "3",
                children: (0, a.we)("#AppLanding_Creator_History_Empty"),
              })
            : (0, e.jsxs)(Xt.s, {
                direction: "column",
                gap: "3",
                marginTop: "3",
                children: [
                  (0, e.jsxs)(Xt.s, {
                    align: "center",
                    gap: "2",
                    children: [
                      (0, e.jsx)(Hn, { size: "1", value: r, onChange: o }),
                      (0, e.jsx)(Ne.EY, {
                        size: "2",
                        children: (0, a.we)(
                          "#AppLanding_Creator_History_HideRemoved",
                        ),
                      }),
                    ],
                  }),
                  c.length == 0
                    ? (0, e.jsx)(Ne.EY, {
                        as: "p",
                        size: "2",
                        contrast: "description",
                        children: (0, a.we)(
                          "#AppLanding_Creator_History_NoneActive",
                        ),
                      })
                    : (0, e.jsxs)(Ks.x, {
                        columns: "minmax(140px, 1fr) 2fr 2fr 2fr",
                        gapX: "4",
                        alignItems: "center",
                        className: js.HistoryGrid,
                        children: [
                          (0, e.jsx)(Un, {
                            strToken: "#AppLanding_Creator_History_Name",
                          }),
                          (0, e.jsx)(Un, {
                            strToken: "#AppLanding_Creator_History_CreatorHome",
                          }),
                          (0, e.jsx)(Un, {
                            strToken: "#AppLanding_Creator_History_Linked",
                          }),
                          (0, e.jsx)(Un, {
                            strToken: "#AppLanding_Creator_History_Status",
                          }),
                          c.map((d, g) =>
                            (0, e.jsx)(
                              lc,
                              { entry: d },
                              `${d.link?.clan_steamid}_${d.link?.linkname}_${d.time_created}_${g}`,
                            ),
                          ),
                        ],
                      }),
                ],
              });
        }
        function Un(s) {
          return (0, e.jsx)(Zt.az, {
            paddingY: "1",
            className: js.HeaderCell,
            children: (0, e.jsx)(Ne.EY, {
              size: "1",
              contrast: "description",
              whiteSpace: "nowrap",
              children: (0, a.we)(s.strToken),
            }),
          });
        }
        function lc(s) {
          const { entry: t } = s,
            n = t.link ?? {},
            r =
              n.relation == Rn.VY.kF
                ? "game[publishers]"
                : n.relation == Rn.VY.XU
                  ? "game[franchises]"
                  : "game[developers]",
            { clanAccountID: o, clanInfo: l, strURL: c } = Cr(n, r),
            d = !!t.is_active,
            g = d ? void 0 : "description";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Zt.az, {
                paddingY: "2",
                className: js.Cell,
                children: (0, e.jsx)(Ne.EY, {
                  size: "2",
                  contrast: g,
                  whiteSpace: "nowrap",
                  className: (0, D.A)(!d && js.RemovedName),
                  children: n.linkname,
                }),
              }),
              (0, e.jsx)(Zt.az, {
                paddingY: "2",
                className: js.Cell,
                children: (0, e.jsx)(Xt.s, {
                  align: "center",
                  gap: "2",
                  wrap: "nowrap",
                  className: js.CreatorCtn,
                  children: (0, e.jsx)(br, {
                    clanAccountID: o,
                    strURL: c,
                    clanInfo: l,
                  }),
                }),
              }),
              (0, e.jsx)(Zt.az, {
                paddingY: "2",
                className: js.Cell,
                children: (0, e.jsx)(Ne.EY, {
                  size: "2",
                  contrast: g,
                  children: (0, a.PP)(
                    "#AppLanding_Creator_History_ByOn",
                    (0, e.jsx)(Oa, { accountID: t.created_by_accountid }),
                    (0, e.jsx)(e.Fragment, { children: Ra(t.time_created) }),
                  ),
                }),
              }),
              (0, e.jsx)(Zt.az, {
                paddingY: "2",
                className: js.Cell,
                children: (0, e.jsx)(Ne.EY, {
                  size: "2",
                  contrast: g,
                  children: d
                    ? (0, a.we)("#AppLanding_Creator_History_Active")
                    : (0, a.PP)(
                        "#AppLanding_Creator_History_RemovedByOn",
                        (0, e.jsx)(Oa, { accountID: t.updated_by_accountid }),
                        (0, e.jsx)(e.Fragment, {
                          children: Ra(t.time_modified),
                        }),
                      ),
                }),
              }),
            ],
          });
        }
        function Oa(s) {
          const { accountID: t } = s;
          return (t ?? 0) > 0
            ? (0, e.jsx)(Xt.s, {
                inline: !0,
                align: "center",
                className: js.AccountName,
                children: (0, e.jsx)(un.p, { accountID: t }),
              })
            : (0, e.jsx)(e.Fragment, {
                children: (0, a.we)(
                  "#AppLanding_Creator_History_UnknownAccount",
                ),
              });
        }
        function Ra(s) {
          return (s ?? 0) > 0 ? (0, a.TW)(s) : "";
        }
        var cc = i(64916),
          dc = i(63404),
          es = i.n(dc);
        const uc = {
            bAccessibilityDifficultyLevels:
              "#Accessibility_Feature_AdjustableDifficulty",
            bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
            bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
            bAccessibilityBackgroundVolumeControls:
              "#Accessibility_Feature_CustomVolumeControls",
            bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
            bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
            bAccessibilityResizableUI:
              "#Accessibility_Feature_AdjustableTextSize",
            bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
            bAccessibilityColorAlternatives:
              "#Accessibility_Feature_ColorAlternatives",
            bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
            bAccessibilityKeyboardOnlyOption:
              "#Accessibility_Feature_KeyboardOnlyOption",
            bAccessibilityMouseOnlyOption:
              "#Accessibility_Feature_MouseOnlyOption",
            bAccessibilityTouchOnlyOption:
              "#Accessibility_Feature_TouchOnlyOption",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "#Accessibility_Feature_WithoutQuickTimeEvents",
            bAccessibilityChatTexttoSpeech:
              "#Accessibility_Feature_TextToSpeech",
            bAccessibilityChatSpeechtoText:
              "#Accessibility_Feature_SpeechToText",
            bAccessibilityPlayableAtYourOwnPace:
              "#Accessibility_Feature_PlayableAtYourOwnPace",
            bAccessibilityPlayableWithoutVision:
              "#Accessibility_Feature_PlayableWithoutVision",
            bAccessibilityContrastControls:
              "#Accessibility_Feature_ContrastControls",
          },
          pc = {
            bAccessibilityDifficultyLevels: "adjustable_difficulty",
            bAccessibilitySaveAnytime: "save_anytime",
            bAccessibilityNarratedMenus: "narrated_game_menus",
            bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
            bAccessibilityStereoSound: "stereo_sound",
            bAccessibilitySurroundSound: "surround_sound",
            bAccessibilityResizableUI: "adjustable_text_size",
            bAccessibilitySubtitles: "subtitle_options",
            bAccessibilityColorAlternatives: "color_alternatives",
            bAccessibilityCameraComfort: "camera_comfort",
            bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
            bAccessibilityMouseOnlyOption: "mouse_only_option",
            bAccessibilityTouchOnlyOption: "touch_only_option",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "playable_without_timed_input",
            bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
            bAccessibilityChatSpeechtoText: "chat_speech_to_text",
            bAccessibilityPlayableAtYourOwnPace: "playable_at_your_own_pace",
            bAccessibilityPlayableWithoutVision: "playable_without_vision",
            bAccessibilityContrastControls: "contrast_controls",
          };
        var mc = ((s) => (
          (s.Gameplay = "gameplay"),
          (s.Visual = "visual"),
          (s.Audio = "audio"),
          (s.Input = "input"),
          s
        ))(mc || {});
        const gc = {
            bAccessibilityDifficultyLevels: "gameplay",
            bAccessibilitySaveAnytime: "gameplay",
            bAccessibilityNarratedMenus: "audio",
            bAccessibilityBackgroundVolumeControls: "audio",
            bAccessibilityStereoSound: "audio",
            bAccessibilitySurroundSound: "audio",
            bAccessibilityResizableUI: "visual",
            bAccessibilitySubtitles: "visual",
            bAccessibilityColorAlternatives: "visual",
            bAccessibilityCameraComfort: "visual",
            bAccessibilityPlayableWithoutVision: "visual",
            bAccessibilityContrastControls: "visual",
            bAccessibilityKeyboardOnlyOption: "input",
            bAccessibilityMouseOnlyOption: "input",
            bAccessibilityTouchOnlyOption: "input",
            bAccessibilityPlayableWithoutQuicktimeEvents: "input",
            bAccessibilityChatTexttoSpeech: "input",
            bAccessibilityChatSpeechtoText: "input",
            bAccessibilityPlayableAtYourOwnPace: "input",
          },
          hc = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function Qh(s) {
          return {
            bAccessibilityResizableUI: s.includes(
              k_EStoreCategoryAccessibilityResizableUI,
            ),
            bAccessibilitySubtitles: s.includes(
              k_EStoreCategoryAccessibilitySubtitles,
            ),
            bAccessibilityColorAlternatives: s.includes(
              k_EStoreCategoryAccessibilityColorAlternatives,
            ),
            bAccessibilityCameraComfort: s.includes(
              k_EStoreCategoryAccessibilityCameraComfort,
            ),
            bAccessibilityBackgroundVolumeControls: s.includes(
              k_EStoreCategoryAccessibilityBackgroundVolumeControls,
            ),
            bAccessibilityStereoSound: s.includes(
              k_EStoreCategoryAccessibilityStereoSound,
            ),
            bAccessibilitySurroundSound: s.includes(
              k_EStoreCategoryAccessibilitySurroundSound,
            ),
            bAccessibilityNarratedMenus: s.includes(
              k_EStoreCategoryAccessibilityNarratedMenus,
            ),
            bAccessibilityChatSpeechtoText: s.includes(
              k_EStoreCategoryAccessibilityChatSpeechtoText,
            ),
            bAccessibilityChatTexttoSpeech: s.includes(
              k_EStoreCategoryAccessibilityChatTexttoSpeech,
            ),
            bAccessibilityPlayableWithoutQuicktimeEvents: s.includes(
              k_EStoreCategoryAccessibilityPlayableWithoutQuicktimeEvents,
            ),
            bAccessibilityKeyboardOnlyOption: s.includes(
              k_EStoreCategoryAccessibilityKeyboardOnlyOption,
            ),
            bAccessibilityMouseOnlyOption: s.includes(
              k_EStoreCategoryAccessibilityMouseOnlyOption,
            ),
            bAccessibilityTouchOnlyOption: s.includes(
              k_EStoreCategoryAccessibilityTouchOnlyOption,
            ),
            bAccessibilityDifficultyLevels: s.includes(
              k_EStoreCategoryAccessibilityDifficultyLevels,
            ),
            bAccessibilitySaveAnytime: s.includes(
              k_EStoreCategoryAccessibilitySaveAnytime,
            ),
            bAccessibilityPlayableAtYourOwnPace: s.includes(
              k_EStoreCategoryAccessibilityPlayableAtYourOwnPace,
            ),
            bAccessibilityPlayableWithoutVision: s.includes(
              k_EStoreCategoryAccessibilityPlayableWithoutVision,
            ),
            bAccessibilityContrastControls: s.includes(
              k_EStoreCategoryAccessibilityContrastControls,
            ),
          };
        }
        function _c(s) {
          const [t, n] = (0, p.useState)(s.initialOpen ?? !1),
            r = p.useId(),
            o = Object.entries(s.features)
              .filter(([d, g]) => g)
              .map(([d]) => d);
          if (o.length === 0) return null;
          const l = {};
          o.forEach((d) => {
            const g = gc[d];
            (l[g] ??= []), l[g].push(d);
          });
          const c = Object.keys(l).length > 1;
          return (0, e.jsxs)("details", {
            className: es().Details,
            open: t,
            onToggle: (d) => n(d.currentTarget.open),
            children: [
              (0, e.jsxs)(fr.f_, {
                className: es().Summary,
                children: [
                  (0, e.jsx)("div", {
                    className: es().ImageContainer,
                    children: (0, e.jsx)(fc, {
                      className: es().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, e.jsxs)("span", {
                    className: es().FeatureNameContainer,
                    id: r,
                    children: [
                      (0, e.jsx)("span", {
                        className: es().FeatureName,
                        children: t
                          ? (0, a.we)("#AccessibilityFeatures")
                          : (0, a.we)(
                              "#AccessibilityFeaturesWithCount",
                              o.length,
                            ),
                      }),
                      (0, e.jsx)("a", {
                        className: es().InfoLink,
                        href: `${Y.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("ul", {
                className: es().FeatureList,
                "aria-labelledby": r,
                children: [
                  c &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        l.gameplay &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(zn, {
                              group: "gameplay",
                              features: l.gameplay,
                              open: t,
                            }),
                          }),
                        l.visual &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(zn, {
                              group: "visual",
                              features: l.visual,
                              open: t,
                            }),
                          }),
                        l.audio &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(zn, {
                              group: "audio",
                              features: l.audio,
                              open: t,
                            }),
                          }),
                        l.input &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(zn, {
                              group: "input",
                              features: l.input,
                              open: t,
                            }),
                          }),
                      ],
                    }),
                  !c &&
                    o.map((d) =>
                      (0, e.jsx)(
                        "li",
                        { children: (0, e.jsx)(Fa, { feature: d, open: t }) },
                        d,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function fc(s) {
          return (0, e.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ...s,
            children: [
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
                fillRule: "evenodd",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
                fillRule: "evenodd",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
                fillRule: "evenodd",
              }),
            ],
          });
        }
        function zn(s) {
          const t = p.useId();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: es().GroupLabel,
                id: t,
                children: (0, a.we)(hc[s.group]),
              }),
              (0, e.jsx)("ul", {
                className: es().FeatureGroupItems,
                "aria-labelledby": t,
                children: s.features.map((n) =>
                  (0, e.jsx)(
                    "li",
                    { children: (0, e.jsx)(Fa, { feature: n, open: s.open }) },
                    n,
                  ),
                ),
              }),
            ],
          });
        }
        function Fa(s) {
          return (0, e.jsx)(fr.Ii, {
            href: `${Y.TS.STORE_BASE_URL}category/${pc[s.feature]}`,
            className: es().InfoRow,
            focusable: s.open,
            children: (0, e.jsx)("span", {
              className: es().FeatureNameContainer,
              children: (0, e.jsx)("span", {
                className: es().FeatureName,
                children: (0, a.we)(uc[s.feature]),
              }),
            }),
          });
        }
        var Xe = i(77127);
        function xc() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Gameplay",
                ),
              }),
              (0, e.jsxs)("div", {
                className: Xe.Instructions,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_WizardPrompt_Desc",
                    ),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, a.oW)(
                      "#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Instructions",
                      (0, e.jsx)("a", {
                        href: `${Y.TS.PARTNER_BASE_URL}doc/accessibility_features#gameplay`,
                        target: "_blank",
                      }),
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Question",
                ),
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc",
                ),
                id: "bAccessibilityDifficultyLevels",
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc",
                ),
                id: "bAccessibilitySaveAnytime",
              }),
            ],
          });
        }
        function Sc() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Instructions",
                    (0, e.jsx)("a", {
                      href: "https://learn.microsoft.com/windows/win32/winauto/entry-uiauto-win32",
                      target: "_blank",
                    }),
                    (0, e.jsx)("a", {
                      href: `${Y.TS.PARTNER_BASE_URL}doc/accessibility_features#narrated_menus`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Question",
                ),
              }),
              (0, e.jsx)(fn, {
                labelId: n,
                options: [
                  {
                    id: "yes",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Yes",
                    ),
                  },
                  {
                    id: "no",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (s.bAccessibilityNarratedMenus) return "yes";
                  if (s.bAccessibilityNarratedMenus === !1) return "no";
                },
                fnSetValues: (r) => {
                  r === "yes" && t("bAccessibilityNarratedMenus", !0),
                    r === "no" && t("bAccessibilityNarratedMenus", !1);
                },
              }),
            ],
          });
        }
        function Ha() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Instructions",
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Question",
                ),
              }),
              (0, e.jsx)(fn, {
                labelId: n,
                options: [
                  {
                    id: "yes",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Yes",
                    ),
                  },
                  {
                    id: "no",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (s.bAccessibilityPlayableWithoutVision) return "yes";
                  if (s.bAccessibilityPlayableWithoutVision === !1) return "no";
                },
                fnSetValues: (r) => {
                  r === "yes" && t("bAccessibilityPlayableWithoutVision", !0),
                    r === "no" && t("bAccessibilityPlayableWithoutVision", !1);
                },
              }),
            ],
          });
        }
        function Cc() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Instructions",
                    (0, e.jsx)("a", {
                      href: `${Y.TS.PARTNER_BASE_URL}doc/accessibility_features#volume_controls`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Question",
                ),
              }),
              (0, e.jsx)(fn, {
                labelId: n,
                options: [
                  {
                    id: "yes",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Yes",
                    ),
                  },
                  {
                    id: "no",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_No",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (s.bAccessibilityBackgroundVolumeControls) return "yes";
                  if (s.bAccessibilityBackgroundVolumeControls === !1)
                    return "no";
                },
                fnSetValues: (r) => {
                  r === "yes" &&
                    t("bAccessibilityBackgroundVolumeControls", !0),
                    r === "no" &&
                      t("bAccessibilityBackgroundVolumeControls", !1);
                },
              }),
            ],
          });
        }
        function bc() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Instructions",
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Question",
                ),
              }),
              (0, e.jsx)(fn, {
                labelId: n,
                options: [
                  {
                    id: "surround",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_SurroundSound",
                    ),
                  },
                  {
                    id: "stereo",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_StereoSound",
                    ),
                  },
                  {
                    id: "none",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_None",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () =>
                  s.bAccessibilitySurroundSound
                    ? "surround"
                    : s.bAccessibilityStereoSound
                      ? "stereo"
                      : "none",
                fnSetValues: (r) => {
                  r === "surround" &&
                    (t("bAccessibilitySurroundSound", !0),
                    t("bAccessibilityStereoSound", !0)),
                    r === "stereo" &&
                      (t("bAccessibilitySurroundSound", !1),
                      t("bAccessibilityStereoSound", !0)),
                    r === "none" &&
                      (t("bAccessibilitySurroundSound", !1),
                      t("bAccessibilityStereoSound", !1));
                },
              }),
            ],
          });
        }
        function Ua() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Visual",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Visual_Instructions",
                    (0, e.jsx)("a", {
                      href: `${Y.TS.PARTNER_BASE_URL}doc/accessibility_features#visual_recommendations`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Visual_Question",
                ),
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc",
                ),
                id: "bAccessibilityResizableUI",
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc",
                ),
                id: "bAccessibilitySubtitles",
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc",
                ),
                id: "bAccessibilityColorAlternatives",
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc",
                ),
                id: "bAccessibilityContrastControls",
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc",
                ),
                id: "bAccessibilityCameraComfort",
              }),
            ],
          });
        }
        function Ac() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Input",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Input_Instructions",
                    (0, e.jsx)("a", {
                      href: `${Y.TS.PARTNER_BASE_URL}doc/accessibility_features#input_recommendations`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Input_Question",
                ),
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc",
                ),
                id: "bAccessibilityKeyboardOnlyOption",
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc",
                ),
                id: "bAccessibilityMouseOnlyOption",
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc",
                ),
                id: "bAccessibilityTouchOnlyOption",
              }),
            ],
          });
        }
        function za() {
          const { currentValues: s, fnSetValue: t } = Ts(),
            n = p.useId();
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Instructions",
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                id: n,
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Question",
                ),
              }),
              (0, e.jsx)(fn, {
                labelId: n,
                options: [
                  {
                    id: "no",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_No",
                    ),
                  },
                  {
                    id: "playable_without_quick_time_events",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoQTE",
                    ),
                  },
                  {
                    id: "playable_at_your_own_pace",
                    name: (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoTimedInput",
                    ),
                  },
                ],
                fnCalculateSelectedOption: () => {
                  if (s.bAccessibilityPlayableAtYourOwnPace)
                    return "playable_at_your_own_pace";
                  if (s.bAccessibilityPlayableWithoutQuicktimeEvents)
                    return "playable_without_quick_time_events";
                  if (
                    s.bAccessibilityPlayableAtYourOwnPace === !1 &&
                    s.bAccessibilityPlayableWithoutQuicktimeEvents === !1
                  )
                    return "no";
                },
                fnSetValues: (r) => {
                  r === "playable_at_your_own_pace" &&
                    (t("bAccessibilityPlayableAtYourOwnPace", !0),
                    t("bAccessibilityPlayableWithoutQuicktimeEvents", !0)),
                    r === "playable_without_quick_time_events" &&
                      (t("bAccessibilityPlayableAtYourOwnPace", !1),
                      t("bAccessibilityPlayableWithoutQuicktimeEvents", !0)),
                    r === "no" &&
                      (t("bAccessibilityPlayableAtYourOwnPace", !1),
                      t("bAccessibilityPlayableWithoutQuicktimeEvents", !1));
                },
              }),
            ],
          });
        }
        function vc() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.oW)(
                    "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Instructions",
                    (0, e.jsx)("a", {
                      href: `${Y.TS.PARTNER_BASE_URL}doc/accessibility_features#tts`,
                      target: "_blank",
                    }),
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: Xe.Question,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Question",
                ),
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc",
                ),
                id: "bAccessibilityChatTexttoSpeech",
              }),
              (0, e.jsx)(ot, {
                name: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText",
                ),
                description: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc",
                ),
                id: "bAccessibilityChatSpeechtoText",
              }),
            ],
          });
        }
        function Ar() {
          return (0, e.jsxs)("div", {
            className: Xe.WizardContainer,
            children: [
              (0, e.jsx)(hs, {
                subtitle: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Summary",
                ),
              }),
              (0, e.jsx)("div", {
                className: Xe.Instructions,
                children: (0, e.jsx)("p", {
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_Wizard_Summary_Instructions",
                  ),
                }),
              }),
              (0, e.jsxs)(S.dR, {
                children: [
                  (0, e.jsxs)(S.VP, {
                    children: [
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc",
                        ),
                        id: "bAccessibilityDifficultyLevels",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc",
                        ),
                        id: "bAccessibilitySaveAnytime",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls_Desc",
                        ),
                        id: "bAccessibilityBackgroundVolumeControls",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus_Desc",
                        ),
                        id: "bAccessibilityNarratedMenus",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound_Desc",
                        ),
                        id: "bAccessibilityStereoSound",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound_Desc",
                        ),
                        id: "bAccessibilitySurroundSound",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc",
                        ),
                        id: "bAccessibilityResizableUI",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc",
                        ),
                        id: "bAccessibilitySubtitles",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc",
                        ),
                        id: "bAccessibilityColorAlternatives",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc",
                        ),
                        id: "bAccessibilityContrastControls",
                      }),
                    ],
                  }),
                  (0, e.jsxs)(S.VP, {
                    children: [
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc",
                        ),
                        id: "bAccessibilityCameraComfort",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision_Desc",
                        ),
                        id: "bAccessibilityPlayableWithoutVision",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc",
                        ),
                        id: "bAccessibilityKeyboardOnlyOption",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc",
                        ),
                        id: "bAccessibilityMouseOnlyOption",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc",
                        ),
                        id: "bAccessibilityTouchOnlyOption",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents_Desc",
                        ),
                        id: "bAccessibilityPlayableWithoutQuicktimeEvents",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace_Desc",
                        ),
                        id: "bAccessibilityPlayableAtYourOwnPace",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc",
                        ),
                        id: "bAccessibilityChatTexttoSpeech",
                      }),
                      (0, e.jsx)(ot, {
                        name: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText",
                        ),
                        description: (0, a.we)(
                          "#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc",
                        ),
                        id: "bAccessibilityChatSpeechtoText",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        const Wa = { 2: [Ha, Ua, za] },
          Ga = 2;
        function yc(s, t, n, r) {
          return (0, p.useMemo)(() => {
            if (s) return [Ar];
            if (!r)
              return [
                xc,
                Sc,
                Ha,
                Cc,
                bc,
                Ua,
                Ac,
                za,
                t ? vc : void 0,
                Ar,
              ].filter((l) => !!l);
            const o = new Set();
            for (let l = n + 1; l <= Ga; l++)
              if (l in Wa) for (const c of Wa[l]) o.add(c);
            return [...o, Ar];
          }, [s, t, n, r]);
        }
        const Va = p.createContext(void 0);
        function Ts() {
          return p.useContext(Va);
        }
        function jc(s) {
          const t = p.useMemo(
            () => ({
              currentValues: s.currentValues,
              fnSetValue: s.fnSetValue,
              nPageIndex: s.nPageIndex,
              bEditMode: s.bEditMode,
            }),
            [s.currentValues, s.fnSetValue, s.nPageIndex, s.bEditMode],
          );
          return (0, e.jsx)(Va.Provider, { value: t, children: s.children });
        }
        function Pc(s) {
          const {
              close: t,
              features: n,
              editMode: r,
              changedMode: o,
              isMultiplayer: l,
              nLastVersionCompleted: c,
            } = s,
            [d, g] = (0, p.useState)(0),
            x = yc(
              r,
              l ||
                n.bAccessibilityChatSpeechtoText ||
                n.bAccessibilityChatTexttoSpeech,
              c,
              o,
            ),
            [f, _] = p.useState(n),
            C = () => g((Re) => Re - 1),
            T = () => g((Re) => Re + 1);
          let U = C;
          d === 0 && (U = t);
          let ye = T,
            ne = (0, a.we)("#Wizard_NextButton");
          d === x.length - 1 &&
            ((ye = () => {
              Dc(f), t();
            }),
            (ne = (0, a.we)("#Wizard_SaveAndExitButton")));
          const Q = (Re, $e) => {
              _((ts) => ({ ...ts, [Re]: $e }));
            },
            Fe = x[d];
          return (0, e.jsxs)(xr.mt, {
            active: !0,
            className: Xe.WizardModal,
            children: [
              (0, e.jsxs)(jc, {
                fnSetValue: Q,
                currentValues: f,
                nPageIndex: d,
                bEditMode: r,
                children: [
                  (0, e.jsx)(Ec, { nPages: x.length }),
                  (0, e.jsx)(S.nB, {
                    className: Xe.WizardBody,
                    children: (0, e.jsx)(Fe, {}),
                  }),
                ],
              }),
              (0, e.jsx)(S.CB, {
                className: Xe.WizardButtons,
                onCancel: U,
                strCancelText: (0, a.we)("#Wizard_BackButton"),
                onOK: ye,
                strOKText: ne,
              }),
            ],
          });
        }
        function Ec(s) {
          const { nPages: t } = s,
            { nPageIndex: n } = Ts(),
            r = (100 * (n + 1)) / (t + 1);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                className: Xe.WizardTitle,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_Wizard_Title",
                ),
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(
                  Xe.ProgressBar,
                  n == t - 1 && Xe.ProgressBarComplete,
                ),
                children:
                  n < t - 1 &&
                  (0, e.jsx)("div", {
                    className: (0, D.A)(Xe.ProgressBarFillComponent),
                    style: { width: r + "%" },
                  }),
              }),
            ],
          });
        }
        function hs(s) {
          const { nPageIndex: t, bEditMode: n } = Ts();
          return n
            ? null
            : (0, e.jsx)("div", {
                className: Xe.StepRow,
                children: (0, e.jsxs)("div", {
                  className: Xe.StepLabel,
                  children: [
                    (0, a.we)("#Wizard_StepNumber", t + 1),
                    s.subtitle && (0, e.jsx)(S.iK, { children: s.subtitle }),
                  ],
                }),
              });
        }
        function ot(s) {
          const { currentValues: t, fnSetValue: n } = Ts();
          return (0, e.jsx)(S.Yh, {
            label: (0, e.jsxs)("div", {
              className: Xe.CheckboxComplexLabel,
              children: [
                (0, e.jsxs)("span", {
                  children: [
                    s.name,
                    " ",
                    s.tooltip &&
                      (0, e.jsx)(bs.o, {
                        customTooltip: !0,
                        tooltip: (0, e.jsx)(pe.zQ, {
                          className: Xe.WizardTooltip,
                          children: s.tooltip,
                        }),
                      }),
                  ],
                }),
                (0, e.jsx)("p", { children: s.description }),
              ],
            }),
            checked: t[s.id],
            onChange: (r) => n(s.id, r),
          });
        }
        function fn(s) {
          const t = s.fnCalculateSelectedOption();
          return (0, e.jsx)(S.zW, {
            labelId: s.labelId,
            value: t,
            onChange: s.fnSetValues,
            children: s.options.map((n) =>
              (0, e.jsxs)(
                S.a,
                {
                  value: n.id,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, D.A)(
                        Xe.RadioButton,
                        t == n.id && Xe.Selected,
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: Xe.OptionLabel,
                      children: (0, a.we)(n.name),
                    }),
                  ],
                },
                n.id,
              ),
            ),
          });
        }
        function Bt(s, t) {
          const n = document.querySelector(
            `[name="app[classification][category][category_${s}]"]`,
          );
          (0, bn.wT)(n, "Missing category input for", s),
            n && n.setAttribute("value", t ? "true" : "");
        }
        function Dc(s) {
          Bt(64, s.bAccessibilityResizableUI),
            Bt(65, s.bAccessibilitySubtitles),
            Bt(66, s.bAccessibilityColorAlternatives),
            Bt(67, s.bAccessibilityCameraComfort),
            Bt(68, s.bAccessibilityBackgroundVolumeControls),
            Bt(69, s.bAccessibilityStereoSound),
            Bt(70, s.bAccessibilitySurroundSound),
            Bt(71, s.bAccessibilityNarratedMenus),
            Bt(72, s.bAccessibilityChatSpeechtoText),
            Bt(73, s.bAccessibilityChatTexttoSpeech),
            Bt(74, s.bAccessibilityPlayableWithoutQuicktimeEvents),
            Bt(75, s.bAccessibilityKeyboardOnlyOption),
            Bt(76, s.bAccessibilityMouseOnlyOption),
            Bt(77, s.bAccessibilityTouchOnlyOption),
            Bt(78, s.bAccessibilityDifficultyLevels),
            Bt(79, s.bAccessibilitySaveAnytime),
            Bt(80, s.bAccessibilityPlayableAtYourOwnPace),
            Bt(81, s.bAccessibilityPlayableWithoutVision),
            Bt(82, s.bAccessibilityContrastControls),
            document
              .querySelector('[name="app[content][accessibilitywizard][v1]"]')
              ?.setAttribute("value", "true"),
            document
              .querySelector('[name="app[content][accessibilitywizard][v2]"]')
              ?.setAttribute("value", "true");
          const t = document.getElementById("submitBtn");
          t && t.click();
        }
        var Tc = i(70019),
          Nt = i.n(Tc),
          Ic = ((s) => (
            (s[(s.Closed = 0)] = "Closed"),
            (s[(s.Wizard = 1)] = "Wizard"),
            (s[(s.Edit = 2)] = "Edit"),
            (s[(s.Changed = 3)] = "Changed"),
            s
          ))(Ic || {});
        function wc(s) {
          const {
              isMultiplayer: t,
              bWizardCompleted: n,
              nLastVersionCompleted: r,
              ...o
            } = s,
            l = Object.entries(o).some(
              ([g, x]) => g.startsWith("bAccessibility") && x,
            ),
            [c, d] = p.useState(0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              c !== 0 &&
                (0, e.jsx)(Pc, {
                  editMode: c === 2,
                  changedMode: c === 3,
                  close: () => d(0),
                  features: o,
                  isMultiplayer: t,
                  nLastVersionCompleted: r,
                }),
              (0, e.jsx)(Mc, {
                bWizardCompleted: n,
                nLastVersionCompleted: r,
                bHasAnyAccessibilityFeatures: l,
                setModalState: d,
                features: s,
              }),
            ],
          });
        }
        function Mc(s) {
          const {
            bHasAnyAccessibilityFeatures: t,
            bWizardCompleted: n,
            nLastVersionCompleted: r,
            setModalState: o,
            features: l,
          } = s;
          return t || n
            ? (0, e.jsx)(Lc, {
                bHasAnyAccessibilityFeatures: t,
                onEdit: () => o(2),
                onStart: () => o(1),
                onChanged: () => o(3),
                features: l,
                nLastVersionCompleted: r,
              })
            : (0, e.jsx)(kc, { onStart: () => o(1) });
        }
        function kc(s) {
          return (0, e.jsxs)(S.nB, {
            children: [
              (0, e.jsx)(S.a3, {
                className: Nt().AccessibilityFeatureDescription,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_WizardPrompt_Desc",
                ),
              }),
              (0, e.jsx)(S.jn, {
                className: Nt().StartWizardButton,
                onClick: s.onStart,
                children: (0, a.we)(
                  "#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton",
                ),
              }),
            ],
          });
        }
        function Lc(s) {
          return (0, e.jsxs)(S.nB, {
            children: [
              (0, e.jsx)(S.a3, {
                className: Nt().AccessibilityFeatureDescription,
                children: s.bHasAnyAccessibilityFeatures
                  ? (0, a.we)("#App_Landing_AccessibilityFeatures_Summary")
                  : (0, a.we)(
                      "#App_Landing_AccessibilityFeatures_Summary_NoFeatures",
                    ),
              }),
              s.bHasAnyAccessibilityFeatures &&
                (0, e.jsx)(Bc, { features: s.features, onEdit: s.onEdit }),
              (0, e.jsx)("div", {
                className: Nt().ButtonRow,
                children: (0, e.jsx)(S.jn, {
                  className: Nt().StartWizardButton,
                  onClick: s.onStart,
                  children: (0, a.we)(
                    "#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton",
                  ),
                }),
              }),
              Ga > s.nLastVersionCompleted &&
                (0, e.jsxs)("div", {
                  className: Nt().Updates,
                  children: [
                    (0, e.jsx)("div", {
                      className: Nt().NewBugContainer,
                      children: (0, e.jsx)("span", {
                        className: Nt().New,
                        children: (0, a.we)("#Callout_NEW"),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("p", {
                          children: (0, a.we)(
                            "#App_Landing_AccessibilityFeatures_WizardPrompt_Update_Desc",
                          ),
                        }),
                        (0, e.jsxs)("div", {
                          className: Nt().UpdateButtonContainer,
                          children: [
                            (0, e.jsx)(S.jn, {
                              className: Nt().UpdatesWizardButton,
                              onClick: s.onChanged,
                              children: (0, a.we)(
                                "#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              children: (0, a.we)(
                                "#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton_Desc",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function Bc(s) {
          return (0, e.jsxs)("div", {
            className: Nt().AccessibilityFeatureInfoCtn,
            children: [
              (0, e.jsx)("div", {
                className: Nt().AccessibilityFeatureContent,
                children: (0, e.jsx)("div", {
                  className: Nt().PreviewContainer,
                  children: (0, e.jsx)(_c, {
                    features: s.features,
                    initialOpen: !0,
                  }),
                }),
              }),
              (0, e.jsxs)("div", {
                className: Nt().EditButton,
                onClick: s.onEdit,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, D.A)(Nt().Spacer, Nt().Top),
                  }),
                  (0, e.jsx)("div", {
                    className: Nt().EditButtonIcon,
                    children: (0, e.jsx)(O.ffu, {}),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, D.A)(Nt().Spacer, Nt().Bottom),
                  }),
                ],
              }),
            ],
          });
        }
        var vr = i(82791),
          Nc = i(90783);
        function Oc(s) {
          return (0, e.jsxs)(tt.dO, {
            children: [
              (0, e.jsx)(tt.qh, {
                path: Qe.bI.GameEdit(`:action(${Qe.a3.join("|")})`, ":itemid"),
                children: (0, e.jsx)(ve._M, {
                  children: (0, e.jsx)(rt.X, {
                    config: {
                      "storeadmin-releasedateinfo": (t) =>
                        (0, e.jsx)(Ke.M, { bIsGameEdit: !0, ...t }),
                      "storeadmin-controllersupportinfo": (t) =>
                        (0, e.jsx)(De, { ...t }),
                      "storeadmin-app-description-editor": (t) =>
                        (0, e.jsx)(ke, { ...t }),
                      "storeadmin-app-extraassetslist": (t) =>
                        (0, e.jsx)(nt.c$, { ...t }),
                      "storeadmin-season-pass-survey": (t) =>
                        (0, e.jsx)(Gi, { ...t }),
                      "storeadmin-creator-home-display-edit": (t) =>
                        (0, e.jsx)(Cn, { ...t }),
                      "storeadmin-dlc-edit": (t) => (0, e.jsx)(rr, { ...t }),
                      "storeadmin-dlc-dependancy-edit": (t) =>
                        (0, e.jsx)(Kn, { ...t }),
                      "storeadmin-social-media-edit": (t) =>
                        (0, e.jsx)($i, { ...t }),
                      "storeadmin-anticheat-edit": (t) =>
                        (0, e.jsx)(el, { ...t }),
                      "storeadmin-graphicalassets-confirmdialog": (t) =>
                        (0, e.jsx)(Sr, { ...t }),
                      "storeadmin-pinnedbundles-edit": (t) =>
                        (0, e.jsx)(u, { ...t }),
                      "storeadmin-purchaseoptionsorder-edit": (t) =>
                        (0, e.jsx)(ui, { ...t }),
                      "storeadmin-accessibilityfeatures": (t) =>
                        (0, e.jsx)(wc, { ...t }),
                      "storeadmin-creator-home-edit": (t) =>
                        (0, e.jsx)(Ul, { ...t }),
                      "storeadmin-app-screenshot-alttext": (t) =>
                        (0, e.jsx)(Kl, { ...t }),
                      "storeadmin-creator-home-fixup": (t) =>
                        (0, e.jsx)(Ql, { ...t }),
                      "storeadmin-creator-home-link-history": (t) =>
                        (0, e.jsx)(oc, { ...t }),
                      "storeadmin-editions-editor": (t) =>
                        (0, e.jsx)(cc.H, { ...t }),
                    },
                  }),
                }),
              }),
              (0, e.jsx)(tt.qh, {
                path: Qe.bI.PackageEdit(
                  `:action(${Qe._h.join("|")})`,
                  ":itemid",
                ),
                children: (0, e.jsx)(rt.X, {
                  config: {
                    "storeadmin-graphicalassets-confirmdialog": (t) =>
                      (0, e.jsx)(Sr, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(tt.qh, {
                path: Qe.bI.BundleEdit(
                  `:action(${Qe.Cg.join("|")})`,
                  ":itemid",
                ),
                children: (0, e.jsx)(rt.X, {
                  config: {
                    "storeadmin-graphicalassets-confirmdialog": (t) =>
                      (0, e.jsx)(Sr, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(tt.qh, {
                path: Qe.bI.ReviewPriceProposals(),
                component: Wo,
              }),
              (0, e.jsx)(tt.qh, {
                path: Qe.bI.PackagePricingComparison(),
                component: ci,
              }),
              (0, e.jsx)(tt.qh, {
                path: Qe.bI.PackageLanding(":packageid"),
                children: (0, e.jsx)(rt.X, {
                  config: {
                    "packagelanding-nonappcontents-edit": (t) =>
                      (0, e.jsx)(pl, { ...t }),
                    "packagelanding-packagepurchasedisplay": (t) =>
                      (0, e.jsx)(xl, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(tt.qh, {
                path: Qe.bI.FrontPageEdit(":clusterid"),
                children: (0, e.jsx)(rt.X, {
                  config: {
                    "storeadmin-colors": (t) => (0, e.jsx)(vr.Y, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(tt.qh, {
                path: Qe.bI.FrontPageSteamChinaEdit(":clusterid"),
                children: (0, e.jsx)(rt.X, {
                  config: {
                    "storeadmin-colors": (t) => (0, e.jsx)(vr.Y, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(tt.qh, {
                path: Qe.bI.ContentHubEditor(":suffix", ":clusterid"),
                children: (0, e.jsx)(rt.X, {
                  config: {
                    "storeadmin-colors": (t) => (0, e.jsx)(vr.Y, { ...t }),
                  },
                }),
              }),
              (0, e.jsx)(tt.qh, { component: Nc.a }),
            ],
          });
        }
      },
      58952: (ee, ze, i) => {
        "use strict";
        i.d(ze, { WM: () => E, l6: () => N, uh: () => G });
        var e = i(7850),
          p = i(90626),
          a = i(92142),
          fe = i(86946),
          O = i(12204),
          $ = i(15252),
          D = i(63029),
          R = i(76854),
          se = i(39790),
          pe = i(85367),
          Y = i(68031),
          Pe = i(80549),
          Se = i(58017),
          He = i(64415);
        function Ve(b) {
          const {
              children: A,
              state: P,
              placement: H = "bottom-end",
              popoverWidth: X = "dropdown",
              popoverMaxHeight: ce,
              popoverPresentation: De,
              popoverLabel: xe,
              ...Me
            } = b,
            [F, ie] = (0, p.useState)(null),
            [_e, le] = (0, p.useState)(null),
            be = (0, p.useMemo)(
              () =>
                P.rgOptions.findIndex((We) =>
                  P.multiselect
                    ? P.selectedValue.includes(We)
                    : We === P.selectedValue,
                ),
              [P.selectedValue, P.rgOptions, P.multiselect],
            ),
            oe = (0, p.useRef)(null),
            Te = {
              ...P,
              ...Me,
              focusedValue: F,
              onFocusChange: ie,
              refPopover: oe,
              popoverLabel: xe,
              setOpen: (We) => {
                We && ie(P.multiselect ? P.selectedValue[0] : P.selectedValue),
                  P.setOpen(We);
              },
              focusedIndex: _e,
              onFocusedIndexChange: le,
            },
            he = (0, a.T)({
              open: P.bOpen,
              onOpenChange: P.setOpen,
              width: X,
              maxHeight: ce,
              placement: H,
              presentation: De,
              selectedIndex: be,
              setSelectedIndex: (We) =>
                P.onItemSelectionChange(P.rgOptions[We]),
              activeIndex: _e,
              setActiveIndex: le,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, e.jsx)(w.Provider, {
            value: Te,
            children: (0, e.jsx)(a.k.Root, { state: he, children: A }),
          });
        }
        function re(b) {
          const { refPopover: A, popoverLabel: P } = W("<Select.Options>");
          return (0, e.jsx)(a.k.Positioner, {
            ref: A,
            label: P,
            children: b.children,
          });
        }
        function me(b) {
          const { value: A, children: P, disabled: H, ...X } = b,
            {
              onItemSelectionChange: ce,
              multiselect: De,
              selectedValue: xe,
              maxSelected: Me,
            } = W("<SelectTrigger>"),
            F = typeof A == "string" ? A : void 0;
          let ie = !1,
            _e = !1;
          De
            ? ((ie = Array.isArray(xe) && xe.includes(A)),
              (_e = !!Me && Array.isArray(xe) && xe.length >= Me))
            : (ie = A === xe);
          const le = H || (_e && !ie);
          return (0, e.jsxs)(a.k.Item, {
            label: F,
            onSelect: () => ce(A),
            selected: ie,
            disabled: le,
            ...X,
            children: [
              De &&
                (0, e.jsxs)(Y.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)(pe.S, { checked: ie, variant: "dark" }),
                    P,
                  ],
                }),
              !De && P,
            ],
          });
        }
        function I(b) {
          const { children: A, render: P } = b,
            {
              bOpen: H,
              setOpen: X,
              selectedValue: ce,
              variant: De,
              size: xe,
              radius: Me,
              status: F,
              rgOptions: ie,
              multiselect: _e,
              onClear: le,
              focusedValue: be,
              onFocusChange: oe,
              onSelectionChange: Te,
              clearable: he,
              focusedIndex: We,
              onItemSelectionChange: Ue,
              onFocusedIndexChange: Ie,
              refPopover: ve,
              popoverLabel: Ae,
              placeholder: we,
              maxSelected: ue,
              ...Oe
            } = W("<SelectTrigger>"),
            Be = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => X(!H),
              children: A,
            },
            ke = _e ? Array.isArray(ce) && ce.length > 0 : !!ce,
            Ze = ke && he,
            et = Ze
              ? (0, e.jsx)(D.g, { onClick: le, cursor: "pointer", hitSlop: !0 })
              : (0, e.jsx)(O.V, {}),
            _t = Ze
              ? {
                  onSecondaryButton: le,
                  actionDescriptionMap: {
                    [He.pR.SECONDARY]: Se.T.Localize("#Clear"),
                  },
                }
              : void 0,
            nt = (0, Pe.f)("Select", De),
            Ke = (0, e.jsx)(fe.j, {
              afterContent: et,
              variant: nt,
              size: xe,
              radius: Me,
              status: F,
              hasValue: ke,
              tabIndex: 0,
              cursor: "pointer",
              navProps: _t,
              ...Oe,
            }),
            Qe = (0, R.Q)(P, Ke, Be, void 0);
          return (0, e.jsx)(a.k.Anchor, { children: Qe });
        }
        function ae(b) {
          return (0, e.jsx)($.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: b.children,
          });
        }
        function S(b) {
          return (0, e.jsx)($.EY, {
            contrast: "description",
            truncate: !0,
            children: b.children,
          });
        }
        function E(b) {
          return k(b, !1);
        }
        function k(b, A) {
          const { onSelectionChange: P, selectedValue: H, ...X } = b,
            [ce, De] = (0, p.useState)(!1),
            xe = (0, p.useCallback)(
              (ie) => {
                P(ie), A || De(!1);
              },
              [P, A],
            ),
            Me = (0, p.useCallback)(
              (ie) => {
                xe(A ? [] : null), ie?.stopPropagation(), ie?.preventDefault();
              },
              [xe, A],
            ),
            F = (0, p.useCallback)(
              (ie) => {
                if (!A) xe(ie);
                else {
                  const _e = H,
                    le = _e.indexOf(ie);
                  if (le === -1) xe(_e.concat(ie));
                  else return xe(_e.slice(0, le).concat(_e.slice(le + 1)));
                }
              },
              [xe, H, A],
            );
          return {
            onSelectionChange: xe,
            onItemSelectionChange: F,
            onClear: Me,
            bOpen: ce,
            setOpen: De,
            multiselect: A,
            selectedValue: H,
            ...X,
          };
        }
        const v = {
          Root: Ve,
          Option: me,
          Options: re,
          Trigger: I,
          Value: ae,
          Placeholder: S,
        };
        function z(b) {
          return typeof b == "string"
            ? b
            : typeof b == "number"
              ? b.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  b,
                ),
                "");
        }
        function K(b) {
          const {
              selectedValue: A,
              onSelectionChange: P,
              options: H,
              placeholder: X,
              getOptionLabel: ce = z,
              ...De
            } = b,
            xe = E({
              onSelectionChange: P,
              selectedValue: A,
              rgOptions: H,
              placeholder: X,
            }),
            Me = A != null,
            F = Me ? ce(A) : "";
          return (0, e.jsxs)(N.Root, {
            state: xe,
            ...De,
            children: [
              (0, e.jsxs)(N.Trigger, {
                children: [
                  Me && (0, e.jsx)(N.Value, { children: F }),
                  !Me && (0, e.jsx)(N.Placeholder, { children: X }),
                ],
              }),
              (0, e.jsx)(N.Options, {
                children: xe.rgOptions.map((ie, _e) =>
                  (0, e.jsx)(N.Option, { value: ie, children: ce(ie) }, _e),
                ),
              }),
            ],
          });
        }
        const N = Object.assign(K, v);
        function B(b) {
          return k(b, !0);
        }
        const Ee = v;
        function L(b) {
          const {
              selectedValue: A,
              onSelectionChange: P,
              options: H,
              placeholder: X,
              getOptionLabel: ce = z,
              maxSelected: De,
              ...xe
            } = b,
            Me = B({
              onSelectionChange: P,
              selectedValue: A,
              rgOptions: H,
              placeholder: X,
              maxSelected: De,
            }),
            F = Array.isArray(A) && A.length > 0;
          let ie = "";
          if (F) {
            const _e = A.map((le) => ce(le));
            "ListFormat" in Intl
              ? (ie = new Intl.ListFormat((0, se.ZO)().strISOCode).format(_e))
              : (ie = _e.join(", "));
          }
          return (0, e.jsxs)(G.Root, {
            state: Me,
            ...xe,
            children: [
              (0, e.jsxs)(G.Trigger, {
                children: [
                  F && (0, e.jsx)(G.Value, { children: ie }),
                  !F && (0, e.jsx)(G.Placeholder, { children: X }),
                ],
              }),
              (0, e.jsx)(G.Options, {
                children: Me.rgOptions.map((_e, le) =>
                  (0, e.jsx)(G.Option, { value: _e, children: ce(_e) }, le),
                ),
              }),
            ],
          });
        }
        const G = Object.assign(L, Ee),
          w = (0, p.createContext)(null);
        function W(b) {
          const A = (0, p.useContext)(w);
          return A || console.error(`${b} must be used within a <Select>!`), A;
        }
      },
      95994: (ee, ze, i) => {
        "use strict";
        i.d(ze, { x: () => pe });
        var e = i(7850),
          p = i(70182),
          a = i(64238),
          fe = i.n(a),
          O = i(8928),
          $ = i(69289),
          D = i(75180),
          R = i.n(D),
          se = i(3166);
        function pe(Pe) {
          const {
              as: Se = "div",
              ref: He,
              focusable: Ve,
              navProps: re,
              ...me
            } = Pe,
            I = (0, se.Qn)(),
            ae = (0, $.mz)({ ...me, className: fe()(D.Grid, Pe.className) }, Y),
            S = Ve ?? re?.focusable ?? !!me.onClick,
            E = (0, e.jsx)(Se, { ref: He, ...ae });
          return I
            ? (0, e.jsx)(p.J, {
                "flow-children": "grid",
                ...(re || {}),
                focusable: S,
                children: E,
              })
            : E;
        }
        const Y = [
          ...O.h,
          {
            prop: "display",
            responsive: !0,
            className: D.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: D.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: D.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: D.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: D.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: D.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: D.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: D.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: D.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: D.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: D.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: D.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: D.Gap,
            cssProperty: (Pe) => ["--grid-gap", `var(--spacing-${Pe})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: D.Gap,
            cssProperty: (Pe) => ["--grid-gap-x", `var(--spacing-${Pe})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: D.Gap,
            cssProperty: (Pe) => ["--grid-gap-y", `var(--spacing-${Pe})`],
          },
        ];
      },
      57152: (ee, ze, i) => {
        "use strict";
        i.d(ze, { D: () => Se });
        var e = i(7850),
          p = i(39049),
          a = i(8928),
          fe = i(15252),
          O = i(69289),
          $ = i(90626);
        function D(re) {
          const { depth: me } = useContext(R);
          return jsx(R.Provider, {
            value: { depth: me + 1 },
            children: jsx(Box, { ...re }),
          });
        }
        const R = $.createContext({ depth: 0 });
        function se() {
          return (0, $.useContext)(R).depth;
        }
        var pe = i(3877),
          Y = i(64238),
          Pe = i.n(Y);
        function Se(re) {
          const { level: me = "auto", className: I, color: ae } = re,
            S = se(),
            E = Ve(me, S);
          return (0, e.jsx)(E, {
            ...(0, O.mz)(
              { ...re, className: Pe()((0, pe.T)(), p.Heading, I) },
              He,
            ),
          });
        }
        const He = [
          ...fe.U6,
          ...a.L,
          {
            prop: "size",
            responsive: !0,
            className: (re) => p[`HeadingSize-${re}`],
          },
        ];
        function Ve(re, me) {
          if (re === "auto" && me === 0) return "h1";
          const I = re === "auto" ? me.toString() : re;
          return /^[1-6]$/.test(I)
            ? "h" + I
            : re === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${I}".`,
                ),
                "h1");
        }
      },
      74685: (ee, ze, i) => {
        "use strict";
        i.d(ze, { KF: () => k, Ot: () => E, c$: () => v, Hd: () => z });
        var e = i(7850),
          p = i(12362),
          a = i(15024),
          fe = i(7502),
          O = i(52893),
          $ = i(90626),
          D = i(98724),
          R = i(79216),
          se = i(4188),
          pe = i(74827);
        function Y(K) {
          const { nodes: N, marks: B } = K,
            Ee = (0, p.st)(
              p.I$,
              (G, w) => (
                w &&
                  w(
                    G.tr
                      .replaceSelectionWith(N.hard_break.createChecked())
                      .scrollIntoView(),
                  ),
                !0
              ),
            ),
            L = {
              "Mod-z": D.tN,
              "Mod-y": D.ZS,
              "Shift-Mod-z": D.ZS,
              Backspace: R.dv,
              Escape: p.hy,
              "Mod-Enter": Ee,
              "Shift-Enter": Ee,
              "Mod-b": (0, p.wh)(B.strong),
              "Mod-i": (0, p.wh)(B.italic),
              "Mod-u": (0, p.wh)(B.underline),
              "Mod-Shift-x": (0, p.wh)(B.strike),
              "Ctrl-Shift-s": (0, p.wh)(B.strike),
              Enter: (0, se.wn)(N.list_item),
              "Mod-[": (0, se.T2)(N.list_item),
              "Mod-]": (0, se.$B)(N.list_item),
              "Ctrl-Shift-1": (0, p.y_)(N.heading, { level: 1 }),
              "Ctrl-Shift-2": (0, p.y_)(N.heading, { level: 2 }),
              "Ctrl-Shift-3": (0, p.y_)(N.heading, { level: 3 }),
              "Ctrl-Shift-4": (0, p.y_)(N.heading, { level: 4 }),
              "Ctrl-Shift-5": (0, p.y_)(N.heading, { level: 5 }),
              "Ctrl-Shift-7": (0, p.y_)(N.ordered_list),
              "Ctrl-Shift-8": (0, p.y_)(N.bullet_list),
              "Ctrl-Shift-0": (0, p.y_)(N.paragraph),
            };
          return (
            B.code && (L["Ctrl-Shift-c"] = (0, p.wh)(B.code)),
            N.code_block && (L["Alt-Ctrl-Shift-c"] = (0, p.y_)(N.code_block)),
            N.horizontal_rule &&
              (L["Mod-_"] = (G, w) => (
                w &&
                  w(
                    G.tr
                      .replaceSelectionWith(N.horizontal_rule.create())
                      .scrollIntoView(),
                  ),
                !0
              )),
            (0, fe.w)(L)
          );
        }
        function Pe(K, N) {
          return new R.fV(K, (B, Ee, L, G) =>
            B.tr.replaceWith(L, G, N.create()),
          );
        }
        function Se(K) {
          const { nodes: N, marks: B } = K;
          return (0, R.sM)({
            rules: [
              (0, R.tG)(
                /^(\d+)\.\s$/,
                N.ordered_list,
                (Ee) => ({ order: parseInt(Ee[1]) }),
                (Ee, L) => L.childCount + L.attrs.order == parseInt(Ee[1]),
              ),
              (0, R.tG)(/^\s*([-+*])\s$/, N.bullet_list),
              (0, pe.OX)(/(?<!\w)\*([^*]+)\*/, B.strong),
              (0, pe.OX)(/(?<!\w)_([^_]+)_/, B.italic),
              (0, pe.OX)(/(?<!\w)~([^~]+)~/, B.strike),
              (0, pe.OX)(/(?<!\w)`([^`]+)`/, B.code),
              (0, R.JJ)(/^```$/, N.code_block),
              (0, R.JJ)(/^(#{1,5})\s$/, N.heading, (Ee) => ({
                level: Ee[1].length,
              })),
              N.horizontal_rule && Pe(/^(\*\*\*|---|___)$/, N.horizontal_rule),
            ].filter(Boolean),
          });
        }
        var He = i(45772),
          Ve = i(74763);
        const re = new O.k_({
            props: {
              handlePaste(K, N, B) {
                const Ee = N.clipboardData
                  ?.getData("text/plain")
                  .replace(/\n/g, " ");
                if (Ee) {
                  const L = K.state.tr.insertText(Ee);
                  K.dispatch(L);
                }
                return !0;
              },
            },
          }),
          me = {
            Enter: () => !0,
            "Shift-Enter": () => !0,
            "Mod-Enter": () => !0,
          };
        function I(K) {
          return new Plugin({
            filterTransaction(N, B) {
              return N.doc.textContent.length <= K;
            },
          });
        }
        function ae(K) {
          const { nMaxChars: N } = K;
          return (
            useInstallPlugin(useMemo(() => I(N), [N])), jsx(React.Fragment, {})
          );
        }
        const S = $.createContext(void 0);
        function E(K) {
          const { view: N, pmState: B, children: Ee } = K,
            L = $.useMemo(() => ({ view: N, pmState: B }), [N, B]);
          return (0, e.jsx)(S.Provider, { value: L, children: Ee });
        }
        const k = $.memo(function (N) {
          const { schema: B, refOnUpdate: Ee, bSingleLine: L } = N;
          return (
            v(
              $.useMemo(
                () =>
                  Ee &&
                  new O.k_({
                    view: (G) => ({
                      update: (...w) => Ee.current && Ee.current(...w),
                    }),
                  }),
                [Ee],
              ),
            ),
            v($.useMemo(() => (0, fe.w)(L ? me : {}), [L])),
            v(L ? re : void 0),
            v($.useMemo(() => (0, a.z)(), [])),
            v($.useMemo(() => Y(B), [B])),
            v($.useMemo(() => (0, fe.w)(p.RV), [])),
            v($.useMemo(() => Se(B), [B])),
            null
          );
        });
        function v(K) {
          const { pmState: N } = $.useContext(S);
          $.useEffect(() => {
            if (!(!N || !K)) return N.InstallPlugin(K);
          }, [K, N]);
        }
        function z() {
          return $.useContext(S)?.view;
        }
      },
      74827: (ee, ze, i) => {
        "use strict";
        i.d(ze, {
          Cd: () => O,
          Ce: () => se,
          OX: () => He,
          bQ: () => Ve,
          c4: () => Se,
          gj: () => R,
          vn: () => $,
          wt: () => Y,
        });
        var e = i(79216),
          p = i(52893);
        function a(re, me) {
          const I = re.state;
          if (!re.state.plugins.includes(me)) {
            const ae = [...re.state.plugins, me];
            re.updateState(I.reconfigure({ plugins: ae }));
          }
        }
        function fe(re, me) {
          if (!re.isDestroyed) {
            const I = re.state,
              ae = I.plugins.filter((S) => S !== me);
            re.updateState(I.reconfigure({ plugins: ae }));
          }
        }
        function O(re, me) {
          const { from: I, $from: ae, to: S, empty: E } = re.selection;
          return E
            ? !!me.isInSet(re.storedMarks || ae.marks())
            : re.doc.rangeHasMark(I, S, me);
        }
        function $(re, me, I) {
          const { parent: ae } = I,
            S = ae.childAfter(I.parentOffset),
            E = S.node?.marks.find((B) => B.type == me);
          if (!E) return;
          let k = I.index() - 1,
            v = I.start() + S.offset;
          for (; k >= 0 && E.isInSet(ae.child(k).marks); )
            (v -= ae.child(k).nodeSize), (k -= 1);
          let z = I.index() + 1,
            K = I.start() + S.offset + S.node.nodeSize;
          for (; z < ae.childCount && E.isInSet(ae.child(z).marks); )
            (K += ae.child(z).nodeSize), (z += 1);
          const N = re.doc.slice(v, K);
          return { from: v, to: K, slice: N, mark: E };
        }
        function D(re, me, I) {
          if (re.type !== me) return !1;
          if (I === void 0) return !0;
          for (const ae in I) if (I[ae] !== re.attrs[ae]) return !1;
          return !0;
        }
        function R(re, me, I) {
          let { $from: ae, to: S } = re.selection;
          for (let E = ae.depth; E > 0; E--) {
            if (S > ae.end(E)) return !1;
            const k = ae.node(E);
            if (D(k, me, I)) return !0;
          }
          return !1;
        }
        function se(re, me, I) {
          for (let ae of me) if (R(re, ae, I)) return ae;
          return null;
        }
        function pe(re, me, I) {
          const { $from: ae, to: S } = re.selection;
          for (let E = ae.sharedDepth(S); E > 0; E--) {
            const k = ae.node(E);
            if (k.type === me) return !!k.attrs[I];
          }
          return !1;
        }
        function Y(re, me, I) {
          const { $from: ae, to: S } = re.selection;
          for (let E = ae.sharedDepth(S); E > 0; E--) {
            const k = ae.node(E);
            if (I === void 0 ? k.type === me : k.hasMarkup(me, I))
              return ae.before(E);
          }
        }
        function Pe(re, me) {
          return (I, ae) => {
            const S = Y(I, re);
            if (S === void 0) return !1;
            if (ae) {
              const E = I.doc.nodeAt(S);
              if ((console.assert(!!E), !E)) return !1;
              ae(I.tr.setNodeMarkup(S, re, { ...E.attrs, [me]: !E.attrs[me] }));
            }
            return !0;
          };
        }
        function Se(re, me) {
          return (I, ae) => {
            const { $from: S } = I.selection;
            let E = null,
              k = 0;
            for (let v = S.depth; v > 0; v--) {
              const z = S.node(v);
              if (re.includes(z.type)) {
                (E = z), (k = S.before(v));
                break;
              }
            }
            return E
              ? (ae && ae(I.tr.setNodeMarkup(k, E.type, { ...E.attrs, ...me })),
                !0)
              : !1;
          };
        }
        function He(re, me, I = {}) {
          return new e.fV(re, (ae, S, E, k) => {
            const v = I instanceof Function ? I(S) : I,
              z = ae.tr;
            if (S[1]) {
              const K = E + S[0].indexOf(S[1]),
                N = K + S[1].length;
              N < k && z.delete(N, k),
                K > E && z.delete(E, K),
                (k = E + S[1].length);
            }
            return z.addMark(E, k, me.create(v)), z.removeStoredMark(me), z;
          });
        }
        function Ve(re, me, I) {
          const ae = { left: me, top: I },
            S = re.posAtCoords(ae);
          if (S?.pos) {
            const E = re.state.doc.resolve(S.pos);
            re.dispatch(re.state.tr.setSelection(p.U3.near(E)));
          }
        }
      },
      47604: (ee, ze, i) => {
        "use strict";
        i.d(ze, { s: () => se });
        var e = i(7850),
          p = i(19298),
          a = i(64238),
          fe = i.n(a),
          O = i(36118),
          $ = i(76962),
          D = i(83217),
          R = i.n(D);
        function se(pe) {
          const {
            onClose: Y,
            className: Pe,
            navID: Se,
            children: He,
            strTitle: Ve,
            wideMode: re,
            ...me
          } = pe;
          return (0, e.jsx)($.y, {
            onClose: Y,
            navID: Se ?? "SimpleModalDialog",
            ...me,
            children: (0, e.jsxs)("div", {
              className: fe()(Pe, R().SimpleModalDialog, re && R().WideMode),
              children: [
                " ",
                (0, e.jsxs)(p.Z, {
                  className: R().SimpleModalDialogHeader,
                  children: [
                    Ve &&
                      (0, e.jsx)("h2", {
                        className: R().SimpleModalDialogTitle,
                        children: Ve,
                      }),
                    (0, e.jsx)("button", {
                      onClick: (I) => (Y("xclick"), I.preventDefault(), !1),
                      className: R().XButton,
                      children: (0, e.jsx)(O.tmm, {}),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: R().SimpleModalContentCtn,
                  children: He,
                }),
              ],
            }),
          });
        }
      },
      63854: (ee, ze, i) => {
        "use strict";
        i.d(ze, { a: () => D, z: () => $ });
        var e = i(71742),
          p = i(13018),
          a = i(60298),
          fe = i(98609),
          O = i(67705);
        class $ {
          m_steamInterface;
          GetPromotionTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              $.s_Singleton ||
                (($.s_Singleton = new $()), $.s_Singleton.Init()),
              $.s_Singleton
            );
          }
          Init() {
            const se = (0, O.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            (0, e.wT)(!!se, "require promotion_operation_token"),
              (this.m_steamInterface = (0, a.p)(
                new p.D(fe.TS.WEBAPI_BASE_URL, se),
              ));
          }
        }
        function D() {
          return $.Get().GetPromotionTransport().GetServiceTransport();
        }
      },
      54407: (ee, ze, i) => {
        "use strict";
        i.d(ze, { B3: () => k, CF: () => v, KM: () => me, KT: () => E });
        var e = i(41735),
          p = i.n(e),
          a = i(58632),
          fe = i.n(a),
          O = i(90626),
          $ = i(20194),
          D = i(75233),
          R = i(72604),
          se = i(76559),
          pe = i(34592),
          Y = i(3166),
          Pe = i(35038),
          Se = i(27386),
          He = i(68312),
          Ve = i(40497);
        const re = "nicknames";
        function me(z) {
          const K = (0, He.KV)(),
            { data: N, isLoading: B } = (0, $.I)({
              queryKey: [re],
              queryFn: async () => {
                const Ee = new Map();
                if (Y.iA.logged_in) {
                  const L = Pe.w.Init(Se.w_T),
                    w = (await Se.xtC.GetNicknameList(K, L)).Body().toObject();
                  w?.nicknames &&
                    w.nicknames.length > 0 &&
                    w.nicknames.forEach((W) => {
                      W.accountid &&
                        W.nickname &&
                        Ee.set(W.accountid, W.nickname);
                    });
                }
                return Ee;
              },
            });
          return N ? N.get(z) : null;
        }
        async function I(z) {
          if (!z || z.length == 0) return [];
          const K =
            (0, Y.yK)() == "community"
              ? Y.TS.COMMUNITY_BASE_URL
              : Y.TS.STORE_BASE_URL;
          if (z.length == 1) {
            const N = { accountid: z[0], origin: self.origin },
              B = await p().get(`${K}actions/ajaxgetavatarpersona`, {
                params: N,
              });
            if (
              !B ||
              B.status != 200 ||
              B.data?.success != R.R ||
              !B.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, pe.H))(B).strErrorMsg}`;
            return [B.data.userinfo];
          } else {
            const N = { accountids: z.join(","), origin: self.origin },
              B = await p().get(`${K}actions/ajaxgetmultiavatarpersona`, {
                params: N,
              });
            if (
              !B ||
              B.status != 200 ||
              B.data?.success != R.R ||
              !B.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, pe.H))(B).strErrorMsg}`;
            const Ee = new Map();
            return (
              B.data.userinfos.forEach((L) =>
                Ee.set(new se.b(L.steamid).GetAccountID(), L),
              ),
              z.map((L) => Ee.get(L))
            );
          }
        }
        const ae = new (fe())((z) => I(z), { cache: !1 }),
          S = "avatarandpersonas";
        function E(z) {
          const { data: K, isLoading: N } = (0, $.I)({
            queryKey: [S, z],
            queryFn: () => ae.load(z),
          });
          return [K, N];
        }
        function k(z) {
          const K = (0, D.jE)(),
            { data: N, isLoading: B } = (0, $.I)({
              queryKey: [S, z],
              queryFn: async () => {
                const L = await ae.loadMany(z);
                return (
                  L.forEach((G) => {
                    if (G instanceof Error) return;
                    const w = [S, new se.b(G.steamid).GetAccountID()];
                    K.setQueryData(w, G);
                  }),
                  L
                );
              },
              enabled: z?.length > 0,
            }),
            Ee = (0, O.useMemo)(() => {
              const L = new Array();
              return (
                N?.forEach((G) => {
                  G instanceof Error || L.push(G);
                }),
                L
              );
            }, [N]);
          return B ? null : Ee;
        }
        function v(z) {
          return Ve.L.getQueryData([S, z]);
        }
      },
      24806: (ee, ze, i) => {
        "use strict";
        i.d(ze, { Ng: () => I, iN: () => ae, yk: () => S });
        var e = i(7850),
          p = i(75844),
          a = i(65946),
          fe = i(90626),
          O = i(99412),
          $ = i(32093),
          D = i(50109),
          R = i(95695),
          se = i.n(R),
          pe = i(36707),
          Y = i(18210),
          Pe = i(92264),
          Se = i(54963),
          He = i(71421),
          Ve = Object.defineProperty,
          re = Object.getOwnPropertyDescriptor,
          me = (E, k, v, z) => {
            for (
              var K = z > 1 ? void 0 : z ? re(k, v) : k, N = E.length - 1, B;
              N >= 0;
              N--
            )
              (B = E[N]) && (K = (z ? B(k, v, K) : B(K)) || K);
            return z && K && Ve(k, v, K), K;
          };
        let I = class extends fe.Component {
          GenerateLanguageOptions() {
            let E = [];
            const {
              fnFilterLanguage: k,
              fnLangHasData: v,
              fnLastUpdateRTime: z,
              fnIsLangSupported: K,
            } = this.props;
            this.props.bAllowUnsetOption &&
              E.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: O.xPp,
                    children: (0, Y.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let N = new Array();
            const B = this.props.realms || [$.TU.k_ESteamRealmGlobal];
            for (const L of Y.A0.GetLanguageListForRealms(B)) {
              if (k && !k(L)) continue;
              const G = (0, O.LgB)(L),
                w = (0, Y.we)("#Language_" + G),
                W = !!(K && K(L));
              N.push({ eLang: L, sLocName: w, bSupported: W });
            }
            N.sort((L, G) =>
              L.bSupported != G.bSupported
                ? L.bSupported
                  ? -1
                  : 1
                : L.sLocName.localeCompare(G.sLocName),
            );
            let Ee = !1;
            for (const L of N) {
              L.bSupported != Ee &&
                (E.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: se().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, Y.we)(
                        L.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    L.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Ee = L.bSupported));
              const G = v && v(L.eLang),
                w = z && z(L.eLang);
              let W = L.sLocName;
              w &&
                w !== 0 &&
                ((W += " "),
                (W += (0, Y.we)(
                  "#Language_Last_Update",
                  (0, Y.$z)(w) +
                    " @ " +
                    (0, Pe.KC)(w, { bForce24HourClock: !1 }),
                ))),
                E.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: L.eLang,
                      className: (0, pe.A)(
                        { [se().LanguageWithContent]: G },
                        L.bSupported
                          ? se().SupportedLanguage
                          : se().UnsupportedLanguage,
                      ),
                      children: W,
                    },
                    "langpicker" + L.eLang + (G ? "_hasdata" : ""),
                  ),
                );
            }
            return E;
          }
          OnLanguageChange(E) {
            const { fnOnLanguageChanged: k, selectedLang: v } = this.props;
            let z = Number.parseInt(E.currentTarget.value);
            z != v && k && k(z);
          }
          render() {
            const { selectedLang: E, bDisabled: k, strTooltip: v } = this.props;
            let z = this.GenerateLanguageOptions();
            return (0, e.jsx)(He.he, {
              toolTipContent: v,
              children: (0, e.jsx)("select", {
                value: E,
                onChange: this.OnLanguageChange,
                disabled: k,
                children: z,
              }),
            });
          }
        };
        me([Se.oI], I.prototype, "OnLanguageChange", 1), (I = me([p.PA], I));
        function ae(E) {
          const [k, v] = (0, a.q3)(() => [
            D.O.Get().GetHasLocalizationContext(),
            D.O.Get().GetCurEditLanguage(),
          ]);
          return (0, e.jsx)(I, {
            selectedLang: v,
            fnLangHasData: D.O.Get().BHasLanguageData,
            fnOnLanguageChanged: D.O.Get().SetCurEditLanguage,
            bDisabled: !k,
            strTooltip: k
              ? void 0
              : (0, Y.we)("#Localization_EditorNotInFocus"),
          });
        }
        function S(E) {
          const { fnLangHasData: k } = E;
          fe.useEffect(
            () => (
              D.O.Get().SetHasLocalizationContext(!0),
              () => D.O.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const v = (0, a.q3)(() => {
            const z = [];
            for (let K = O.Bhc; K < O.bP9; ++K) z[K] = !!(k && k(K));
            return z;
          });
          return (
            fe.useEffect(() => D.O.Get().SetHasLanguage(v), [v]),
            (0, e.jsx)(e.Fragment, {})
          );
        }
      },
      83085: (ee, ze, i) => {
        "use strict";
        i.d(ze, { Xv: () => I, pw: () => ae, Y0: () => S });
        var e = i(7850),
          p = i(71742),
          a = i(74432),
          fe = i(74685),
          O = i(52893),
          $ = i(29287),
          D = i(90626);
        function R(G, w = "PlaceholderPlugin") {
          const [W, b] = D.useState([]),
            [A] = D.useState(
              () =>
                new O.k_({
                  key: new O.hs(w),
                  state: {
                    init() {
                      return $.zF.empty;
                    },
                    apply(xe, Me) {
                      Me = Me.map(xe.mapping, xe.doc);
                      const F = xe.getMeta(this) || [];
                      for (const ie of F)
                        if (ie?.add) {
                          const { id: _e, data: le } = ie.add,
                            be = (he, We) => {
                              const Ue = document.createElement(G);
                              return (
                                b((Ie) => [
                                  ...Ie,
                                  { id: _e, element: Ue, data: le },
                                ]),
                                Ue
                              );
                            },
                            oe = (he) => {
                              b((We) => We.filter((Ue) => Ue.element != he));
                            },
                            Te = $.NZ.widget(ie.add.pos, be, {
                              id: _e,
                              destroy: oe,
                            });
                          Me = Me.add(xe.doc, [Te]);
                        } else
                          ie?.remove &&
                            (Me = Me.remove(
                              Me.find(
                                void 0,
                                void 0,
                                (_e) => _e.id == ie.remove.id,
                              ),
                            ));
                      return Me;
                    },
                  },
                  props: {
                    decorations(xe) {
                      return this.getState(xe);
                    },
                  },
                }),
            );
          (0, fe.c$)(A);
          const P = (0, fe.Hd)(),
            H = D.useRef(0),
            X = D.useCallback(
              (xe, Me, F) => {
                const ie = `${w}_${H.current++}`;
                let _e = F || P.state.tr;
                Me === void 0 &&
                  (_e.selection.empty || _e.deleteSelection(),
                  (Me = _e.selection.from));
                const le = F?.getMeta(A) || [];
                return (
                  _e.setMeta(A, [
                    ...le,
                    { add: { id: ie, pos: Me, data: xe } },
                  ]),
                  F || P.dispatch(_e),
                  ie
                );
              },
              [A, w, P],
            ),
            ce = D.useCallback(
              (xe) => {
                const F = A.getState(P.state)?.find(
                  void 0,
                  void 0,
                  (ie) => ie.id == xe,
                );
                return F?.length ? F[0].from : void 0;
              },
              [P, A],
            ),
            De = D.useCallback(
              (xe, Me) => {
                const F = ce(xe);
                return F
                  ? (Me
                      ? P.dispatch(
                          P.state.tr
                            .replaceWith(F, F, Me)
                            .setMeta(A, [{ remove: { id: xe } }]),
                        )
                      : P.dispatch(
                          P.state.tr.setMeta(A, [{ remove: { id: xe } }]),
                        ),
                    !0)
                  : !1;
              },
              [A, ce, P],
            );
          return {
            placeholderElements: W,
            createPlaceholder: X,
            findPlaceholder: ce,
            replacePlaceholder: De,
          };
        }
        var se = i(72739),
          pe = i(1880),
          Y = i(69168),
          Pe = i(85599),
          Se = i(8323),
          He = i(18210),
          Ve = i(95603),
          re = i(64868),
          me = i(73309);
        function I(G) {
          const {
              children: w,
              ProcessFileUpload: W,
              FetchImageURL: b,
              bAllowImageHotLinking: A = !1,
            } = G,
            [P] = D.useState(() => ({ manager: new v(W, b, A) })),
            { manager: H } = P;
          return (
            H.SetProps(W, b, A),
            (0, e.jsxs)(K.Provider, {
              value: P,
              children: [
                (0, e.jsx)(B, { manager: H }),
                (0, e.jsx)(Ee, { manager: H, children: w }),
              ],
            })
          );
        }
        const ae = D.memo(function (w) {
          const { nodeType: W } = w,
            b = N(),
            {
              placeholderElements: A,
              createPlaceholder: P,
              replacePlaceholder: H,
            } = R("span", "FileUploadPlaceholder");
          L(b, W);
          const X = (0, fe.Hd)();
          return (
            D.useEffect(() => b.RegisterEditor(X, P, H), [b, X, P, H]),
            (0, e.jsx)(e.Fragment, {
              children: A.map(({ id: ce, element: De, data: xe }) =>
                (0, e.jsx)(k, { element: De, data: xe }, ce),
              ),
            })
          );
        });
        function S(G, w) {
          const W = N(),
            b = D.useCallback(
              (A) => {
                for (const P of A) W.UploadFile(P);
                G && G();
              },
              [W, G],
            );
          return (0, Ve.Ss)(b, { multiple: !0, accept: w });
        }
        class E extends Error {
          constructor(w) {
            super(w);
          }
        }
        function k(G) {
          const { element: w, data: W } = G,
            b = "file" in W ? W.file : void 0,
            A = D.useMemo(() => b && URL.createObjectURL(b), [b]),
            P = "url" in W ? W.url : A,
            H = b?.type.startsWith("video/");
          return se.createPortal(
            (0, e.jsxs)("span", {
              className: me.FileUploadPlaceholder,
              children: [
                (0, e.jsx)("div", {
                  className: me.ThrobberCtn,
                  children: (0, e.jsxs)("div", {
                    className: me.ThrobberRow,
                    children: [
                      (0, e.jsx)("div", {
                        className: me.Throbber,
                        children: (0, e.jsx)(Pe.t, {
                          size: "medium",
                          position: "center",
                        }),
                      }),
                      (0, He.we)("#Prosemirror_FileUpload_Uploading"),
                    ],
                  }),
                }),
                !H && (0, e.jsx)("img", { src: P, className: me.PendingImage }),
                H &&
                  (0, e.jsx)("video", {
                    src: P,
                    className: me.PendingImage,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    autoPlay: !0,
                  }),
              ],
            }),
            w,
          );
        }
        class v {
          m_fnProcessFileUpload;
          m_fnFetchImageURL;
          m_bAllowImageHotLinking;
          m_errors = (0, Se.Jc)([]);
          m_view;
          m_fnCreatePlaceholder;
          m_fnReplacePlaceholder;
          constructor(w, W, b) {
            (this.m_fnProcessFileUpload = w),
              (this.m_fnFetchImageURL = W),
              (this.m_bAllowImageHotLinking = b);
          }
          SetProps(w, W, b) {
            (this.m_fnProcessFileUpload = w),
              (this.m_fnFetchImageURL = W),
              (this.m_bAllowImageHotLinking = b),
              (0, p.wT)(
                !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
                "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
              );
          }
          RegisterEditor(w, W, b) {
            return (
              (0, p.wT)(!this.m_view, "Duplicate registration"),
              (this.m_view = w),
              (this.m_fnCreatePlaceholder = W),
              (this.m_fnReplacePlaceholder = b),
              () => {
                this.m_view == w &&
                  this.m_fnCreatePlaceholder == W &&
                  this.m_fnReplacePlaceholder == b &&
                  ((this.m_view = void 0),
                  (this.m_fnCreatePlaceholder = void 0),
                  (this.m_fnReplacePlaceholder = void 0));
              }
            );
          }
          AddError(w) {
            this.m_errors.Set([...this.m_errors.Value, w]);
          }
          GetErrors() {
            return this.m_errors;
          }
          ClearErrors() {
            this.m_errors.Set([]);
          }
          GetViewPosition(w, W) {
            return this.m_view?.posAtCoords({ left: w, top: W })?.pos;
          }
          async UploadFile(w, W) {
            (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
              this.AddError(
                "Upload File: No editor registered to handle file upload",
              );
            const b = this.m_fnCreatePlaceholder({ file: w }, W);
            return this.ProcessFile(w, b);
          }
          BAllowImageHotLinking() {
            return this.m_bAllowImageHotLinking;
          }
          QueueUploadFileByURL(w, W, b) {
            if (
              ((!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
                this.AddError(
                  "QueueUploadFile: No editor registered to handle file upload",
                ),
              console.log(`QueueUploadFileByURL: ${w} at pos ${W}`),
              w.startsWith("data:"))
            ) {
              const A = this.m_fnCreatePlaceholder({ url: w }, W, b);
              return this.ProcessDataURL(w, A), !0;
            } else if (this.m_fnFetchImageURL) {
              const A = this.m_fnCreatePlaceholder({ url: w }, W, b);
              return this.FetchURLAndProcess(w, A), !0;
            } else
              return (
                (0, p.wT)(
                  this.m_bAllowImageHotLinking,
                  "A URL was posted but we don't have a fnFetchImageURL to process it",
                ),
                !1
              );
          }
          async ProcessDataURL(w, W) {
            const [b, A] = w.split(","),
              P = b.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
            if (!P || P.groups.encoding != "base64") {
              this.AddError(`Unable to data URL, unexpected format: ${b}`);
              return;
            }
            const H = P?.groups.mimetype,
              X = z(H);
            if (!X) {
              this.AddError(`Unsupported MIME type for image: ${H}`);
              return;
            }
            const ce = atob(A),
              De = new Uint8Array(ce.length);
            for (let F = 0; F < ce.length; F++) De[F] = ce.charCodeAt(F);
            const xe = await a.C(De.buffer),
              Me = new File([De], `upload_${xe}.${X}`, { type: H });
            await this.ProcessFile(Me, W);
          }
          async FetchURLAndProcess(w, W) {
            try {
              const b = new URL(w),
                A = await this.m_fnFetchImageURL(w),
                P = new File(
                  [A],
                  decodeURIComponent(
                    b.pathname?.replace(/^.*\//, "") || "image",
                  ),
                  { type: A.type },
                );
              await this.ProcessFile(P, W);
            } catch {
              this.AddError(`Unable to process URL: ${w}`),
                this.m_fnReplacePlaceholder(W);
            }
          }
          async ProcessFile(w, W) {
            let b;
            try {
              console.log(`Processing file upload: "${w.name}"`),
                (b = await this.m_fnProcessFileUpload(w));
            } catch (A) {
              A instanceof E
                ? this.AddError(A.message)
                : this.AddError(`Error proccessing file upload: ${A}`);
            }
            b
              ? this.m_fnReplacePlaceholder(W, b)
              : this.m_fnReplacePlaceholder(W);
          }
        }
        function z(G) {
          switch (G) {
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
        }
        const K = D.createContext(void 0);
        function N() {
          return D.useContext(K).manager;
        }
        const B = D.memo(function (w) {
          const { manager: W } = w,
            b = (0, re.gc)(W.GetErrors());
          return b.length
            ? (0, e.jsx)(Y.E, {
                active: !0,
                children: (0, e.jsx)(pe.o0, {
                  bAlertDialog: !0,
                  strTitle: (0, He.we)("#Error_Generic"),
                  strDescription: b.map((A, P) =>
                    (0, e.jsx)("div", { children: A }, P),
                  ),
                  strOKButtonText: (0, He.we)("#Button_OK"),
                  onOK: () => W.ClearErrors(),
                  onCancel: () => W.ClearErrors(),
                }),
              })
            : null;
        });
        function Ee(G) {
          const { manager: w, children: W } = G,
            b = D.useCallback(
              (H, X) => {
                for (const ce of H)
                  w.UploadFile(ce, w.GetViewPosition(X.clientX, X.clientY));
              },
              [w],
            ),
            [A, P] = (0, Ve.hk)(b);
          return D.cloneElement(W, { ...A, ...W.props });
        }
        function L(G, w) {
          (0, fe.c$)(
            D.useMemo(
              () =>
                new O.k_({
                  props: {
                    handlePaste(W, b, A) {
                      const P = [];
                      if (
                        (A.content.descendants((H, X) => {
                          if (H.type == w) {
                            const ce = H.attrs.src;
                            (ce.startsWith("data:") ||
                              !G.BAllowImageHotLinking()) &&
                              P.push({ url: ce, pos: X });
                          }
                        }),
                        P.length)
                      ) {
                        let H = W.state.tr;
                        H.selection.empty || H.deleteSelection();
                        let X = H.selection.from,
                          ce = 0;
                        for (const De of P) {
                          const xe = A.content.cut(ce, De.pos - 1);
                          H.insert(X, xe),
                            (X += xe.size),
                            G.QueueUploadFileByURL(De.url, X, H),
                            (ce = De.pos + 1);
                        }
                        return (
                          H.insert(X, A.content.cut(ce)),
                          H.scrollIntoView(),
                          W.dispatch(H),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(W, b) {
                        if (b.clipboardData?.files?.length > 0) {
                          b.preventDefault();
                          for (const A of b.clipboardData.files)
                            G.UploadFile(A);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [w, G],
            ),
          );
        }
      },
      50660: (ee, ze, i) => {
        "use strict";
        i.d(ze, {
          Ez: () => S,
          GY: () => k,
          XQ: () => I,
          bI: () => re,
          cQ: () => v,
          ff: () => z,
          hK: () => ae,
          u3: () => E,
          wU: () => Ve,
        });
        var e = i(7850),
          p = i(19298),
          a = i(74827),
          fe = i(12362),
          O = i(90626),
          $ = i(58534),
          D = i(71421),
          R = i(8323),
          se = i(36707),
          pe = i(18210),
          Y = i(54963),
          Pe = i(98609),
          Se = i(73309),
          He = i.n(Se);
        const Ve = () => O.useContext(me);
        function re(G) {
          const { view: w, refUpdateToolbar: W, children: b } = G,
            A = O.useRef(void 0);
          A.current || (A.current = new R.lu());
          const P = A.current;
          O.useEffect(
            () => (
              (0, Y.cZ)(W, () => P.Dispatch(w)), () => (0, Y.cZ)(W, void 0)
            ),
            [P, w, W],
          );
          const H = O.useMemo(() => ({ callbacks: P, view: w }), [P, w]);
          return w ? (0, e.jsx)(me.Provider, { value: H, children: b }) : null;
        }
        const me = O.createContext(void 0);
        function I() {
          return (0, e.jsx)("div", { className: Se.Gap });
        }
        function ae() {
          return (0, e.jsx)("div", { className: Se.Spacer });
        }
        function S(G) {
          return (0, e.jsx)("div", {
            className: (0, se.A)(G.className, Se.ToolbarRowOverflowContainer),
            children: (0, e.jsx)(p.Z, {
              className: Se.ToolbarRow,
              "flow-children": "row",
              children: G.children,
            }),
          });
        }
        function E(G) {
          const { nodeType: w, attrs: W, children: b, ...A } = G,
            { callbacks: P, view: H } = Ve(),
            [X, ce] = O.useState(() => (0, a.gj)(H.state, w, W)),
            De = O.useCallback((Me) => ce((0, a.gj)(Me.state, w, W)), [w, W]);
          (0, Y.hL)(P, De);
          const xe = O.useMemo(() => fe.y_(w, W), [W, w]);
          return (0, e.jsx)(v, { ...A, command: xe, toggled: X, children: b });
        }
        function k(G) {
          const { mark: w, children: W, ...b } = G,
            { callbacks: A, view: P } = Ve(),
            [H, X] = O.useState(() => (0, a.Cd)(P.state, w)),
            ce = O.useCallback((xe) => X((0, a.Cd)(xe.state, w)), [w]);
          (0, Y.hL)(A, ce);
          const De = O.useMemo(() => fe.wh(w), [w]);
          return (0, e.jsx)(v, { ...b, command: De, toggled: H, children: W });
        }
        function v(G) {
          const { command: w, toggled: W, children: b, ...A } = G,
            { view: P, callbacks: H } = Ve(),
            [X, ce] = O.useState(() => w(P.state));
          (0, Y.hL)(
            H,
            O.useCallback((xe) => ce(w(xe.state)), [w]),
          ),
            O.useEffect(() => ce(w(P.state)), [w, P]);
          const De = !X && !W;
          return (0, e.jsx)(K, {
            ...A,
            children: (0, e.jsx)($.$n, {
              className: (0, se.A)(Se.CommandButton, W && Se.Toggled),
              onMouseDown: (xe) => {
                xe.preventDefault(), w(P.state, P.dispatch, P);
              },
              disabled: De,
              focusable: !De,
              children: b,
            }),
          });
        }
        function z(G) {
          const {
            onClick: w,
            toggled: W,
            disabled: b,
            children: A,
            className: P,
            ...H
          } = G;
          return (0, e.jsx)(K, {
            ...H,
            children: (0, e.jsx)($.$n, {
              className: (0, se.A)(Se.CommandButton, W && Se.Toggled, P),
              onMouseDown: (X) => {
                X.button === 0 && (X.preventDefault(), w(X));
              },
              disabled: b === !0,
              children: A,
            }),
          });
        }
        function K(G) {
          const { tooltip: w, keyboardShortcut: W, children: b } = G;
          if (!w) return b;
          const A = W ? (0, e.jsx)(N, { tooltip: w, keyboardShortcut: W }) : w;
          return (0, e.jsx)(D.Gq, {
            toolTipContent: A,
            direction: "bottom",
            children: b,
          });
        }
        function N(G) {
          const { tooltip: w, keyboardShortcut: W } = G;
          return (0, e.jsxs)("div", {
            className: Se.TooltipWithShortcut,
            children: [
              (0, e.jsx)("div", {
                children: typeof w == "string" ? (0, pe.we)(w) : w,
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsx)(B, { keyboardShortcut: W }),
              }),
            ],
          });
        }
        function B(G) {
          const { keyboardShortcut: w } = G,
            W = w.split("-"),
            b = W.pop() ?? "";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              W.map((A, P) =>
                (0, e.jsxs)(
                  O.Fragment,
                  {
                    children: [
                      (0, e.jsx)(Ee, {
                        children: (0, e.jsx)(L, { modifier: A }),
                      }),
                      " + ",
                    ],
                  },
                  P,
                ),
              ),
              (0, e.jsx)(Ee, { children: b.toUpperCase() }),
            ],
          });
        }
        function Ee(G) {
          return (0, e.jsx)("span", {
            className: Se.KeyCap,
            children: G.children,
          });
        }
        function L(G) {
          const { modifier: w } = G;
          switch (w) {
            case "Mod":
              return Pe.TS.PLATFORM == "macos" ? "\u2318" : "Ctrl";
            case "Shift":
              return Pe.TS.PLATFORM == "macos", "Shift";
            case "Ctrl":
              return Pe.TS.PLATFORM == "macos" ? "Control" : "Ctrl";
            case "Alt":
              return Pe.TS.PLATFORM == "macos" ? "Option" : "Alt";
          }
          return null;
        }
      },
      12932: (ee, ze, i) => {
        "use strict";
        i.d(ze, { AQ: () => He, pn: () => re, qx: () => Ve });
        var e = i(7850),
          p = i(58534),
          a = i(18210),
          fe = i(36118),
          O = i(90626),
          $ = i(36707),
          D = i(95695),
          R = i.n(D),
          se = i(25792),
          pe = i(64734),
          Y = i.n(pe),
          Pe = i(65946),
          Se = i(11243);
        function He(me) {
          const {
              title: I,
              tooltip: ae,
              getMinimized: S,
              toggleMinimized: E,
              className: k,
              children: v,
              elAdditionalButtons: z,
            } = me,
            K = (0, Pe.q3)(() => S());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, $.A)(
                  k,
                  pe.SectionTitleHeader,
                  pe.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, $.A)(
                      D.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [I, !!ae && (0, e.jsx)(Se.o, { tooltip: ae })],
                  }),
                  (0, e.jsxs)("div", {
                    className: pe.SectionTitleButtons,
                    children: [
                      z,
                      (0, e.jsx)(re, { bIsMinimized: K, fnToggleMinimize: E }),
                    ],
                  }),
                ],
              }),
              !K && (0, e.jsx)(se.tH, { children: v }),
            ],
          });
        }
        function Ve(me) {
          const [I, ae] = O.useState(!!me.bStartMinimized);
          return (0, e.jsx)(He, {
            ...me,
            getMinimized: () => I,
            toggleMinimized: () => ae(!I),
            children: me.children,
          });
        }
        function re(me) {
          const { bIsMinimized: I, fnToggleMinimize: ae } = me,
            S = I ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(p.$n, {
            "data-tooltip-text": (0, a.we)(S),
            onClick: ae,
            children: me.bIsMinimized
              ? (0, e.jsx)(fe.hz4, {})
              : (0, e.jsx)(fe.Xjb, {}),
          });
        }
      },
      77127: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          ProgressBar: "_2H35Exdt_TEmnht61LT9o",
          ProgressBarComplete: "ch7u6iAsb2ympJBJjGMoi",
          ProgressBarFillComponent: "_3i0WE7KIdK23MdG8F-EDns",
          WizardModal: "_16ywt-UaM5pXRZAZ59hFqb",
          GameName: "_11vp-bH8bgBrQCbqtuK439",
          WizardButtons: "_3dsdpW7Qfs3LWOkzgMJJhJ",
          WizardContainer: "_2wuBak_ecUSy1__ByQUkLA",
          WizardTitle: "_1_VaMIoHomh0nkSL5a0OfP",
          StepRow: "CggdGMWnkepTgIdPa8qF0",
          StepLabel: "_2zme0St18-D_jyf9u4x71k",
          RadioButton: "_11VhNInHVvEffMe2vf2Gg9",
          Selected: "QEXaA3fx7EU29BoZu31SA",
          OptionLabel: "_3QKLY00ZQqv8hxmvbGg8-6",
          CheckboxComplexLabel: "_15L6_SM-oLsYhwZf6E6Ii9",
          Question: "_17VRokV9gQrl4MOm03kxGV",
          Instructions: "_2N-j8qfNmHJEMMz1pXbdvC",
          WizardTooltip: "_2RXE_aA8kQtPJymKYYSMAl",
          BackgroundAnimation: "C8N8hRwMeVp1tGShuVkOh",
          "ItemFocusAnim-darkerGrey-nocolor": "_3OSHg17hDa1n_a1p8YV6NJ",
          "ItemFocusAnim-darkerGrey": "_3vw4cd5iGVZPXAkYQdwc1O",
          "ItemFocusAnim-darkGreySettings": "_35jKmGtukgtSVCv-o2sAWJ",
          "ItemFocusAnim-darkGrey": "_2p57_OuvuARn5uJAZrKT9D",
          "ItemFocusAnim-grey": "_1IsFUDfyU05AFfhOv9ZaFq",
          "ItemFocusAnim-translucent-white-10": "_1-27hJIgX5EtEpiO8ruDs1",
          "ItemFocusAnim-translucent-white-20": "Hy84D3TIRbj_PA180MPvA",
          "ItemFocusAnimBorder-darkGrey": "WijGZOjm_kfdR-fupsAlg",
          "ItemFocusAnim-green": "_16nOxlLQEWjquxC-Yr4mAY",
          focusAnimation: "_1IV9IFCrYGSzJ9sS2CXScW",
          hoverAnimation: "_1UU6b6HTIjjrWrTkpCewNw",
        };
      },
      70019: (ee) => {
        ee.exports = {
          AccessibilityFeatureDescription: "k6qQ5DLbV9P6dfFuuQpnR",
          AccessibilityFeatureInfoCtn: "Jwl4gCBBBKG2avQH1KE4f",
          GameEditCtn: "Jafw2l9EIfZgvxXAq7oSs",
          AccessibilityFeatureContent: "_2O3bOye9ePb-fkhbamPamK",
          EditButton: "_1aweU2y3d4e3510d3nNqjP",
          Spacer: "_2H1h4op2he4A9SRW-5xU9A",
          Top: "_3YANuSYfijJQ5Jq5-sUfaQ",
          Bottom: "_3U8po-ZE4D_KXUQ32LJT0c",
          EditButtonIcon: "_2t7TJZb12JsMs-PxroqLQ9",
          StartWizardButton: "_1VzLAfLRNEbppzyyYS8ueA",
          ButtonRow: "_1L2BTYNuiNzNkV3fxuFZ4A",
          PreviewContainer: "_1z9Dg4jsYlNummQKgczgWN",
          Updates: "cCbxuWUtmnc8zsLas0fCR",
          UpdateButtonContainer: "oQ2jrb8UigZeb9afK7uuf",
          NewBugContainer: "_2lvnBM3dEA_54CApZ1werw",
          New: "_2M8-7e6mSLUYg6EP9U-fr-",
          UpdatesWizardButton: "_2b8NFL_UzE4xC7a-M9SXbC",
        };
      },
      31623: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          ControllerWizardModal: "_2M4zwA7Ac68En7AUUHEpuK",
          GameName: "_1wayRCM9VO944GbqtTisWi",
          WizardButtons: "ja88t0u0UmDMjZ2vKEXyg",
          WizardContainer: "_1j_e5epqt09WxhZOjyi9D1",
          WizardBody: "_2Agdmn90d9rLK0COHBJ9Ya",
          Column: "_35X7XjU8DZ2H27V0SBSAoo",
          ColumnLabel: "_3xAxLUcHgDWrN3L54mLJYv",
          ReleaseColumnFooter: "_3qIJUe57BhaB_-fSLUg9Hx",
          ColumnContent: "upSjacqUkxiBsrt6N42gC",
          BlueNote: "_3FlXrEk2woo6dOboR90dCn",
          PublishNowWarning: "GSVWx_w2LMo3SAhwSgY-n",
          ErrorBox: "_1h88U0C26maKtvTHQw0f4Z",
          HTMLErrorBoxAppear: "XREUsZ2A3RyF2E-vQKQwp",
          CloudConflictModalContent: "Qq753teqS-0zB67wi3MP5",
          DialogChoiceDescription: "_37mGYoLJCV-kP2sFOgvZhh",
          RadioButton: "_1Cqgv4c_2wNORC7k0gp6O0",
          Selected: "_1iGfirXEzQZDHkJVHJCe25",
          OptionLabel: "_1CKHmXyuOvgsgsfZWRwdkk",
          ProgressBar: "_2FcBzeH5LVz2CQQWk-coqU",
          ProgressBarComplete: "_231x-l7fB13puyRZJDW46L",
          ProgressBarFillComponent: "a63k2U08nK9HrNLtO-4xe",
          WizardTitle: "_3acfYDihepdLalPwwfH_1O",
          StepRow: "_4NsQgqhsg7-hwuKwFSkt1",
          StepLabel: "_3Q7KPqZcxMH4I4NbiI4ZLQ",
          StepImgContainer: "_27_A1alE6d3sduux3CAyY_",
          StepInstruction: "T9eBinyQ2hCY8oy4WO8g9",
          ControlsQuestion: "_86lVB7cXYqg7s4LChbRyM",
          BackgroundAnimation: "_25lkDWhF0bwre6OQT8g7w0",
          "ItemFocusAnim-darkerGrey-nocolor": "_2UZY54l1AJ5zxBJhmYf490",
          "ItemFocusAnim-darkerGrey": "hlnkWGoujK0WgKsCnBOcK",
          "ItemFocusAnim-darkGreySettings": "_3uPCzxcRrrgoi-gsTfxgRQ",
          "ItemFocusAnim-darkGrey": "_2u7cTUci-zR4zqevKlTsfz",
          "ItemFocusAnim-grey": "_3PcMUvLdjJe0fnIkVlDHNa",
          "ItemFocusAnim-translucent-white-10": "_1uSV29xzSfh0VWP4fBLSwy",
          "ItemFocusAnim-translucent-white-20": "_3513-n6v2aZcqIN2F_qPf_",
          "ItemFocusAnimBorder-darkGrey": "_13L0noPDezrKNjkT3uxNet",
          "ItemFocusAnim-green": "_2LoYY8XGA4qLFMRZw7KUHR",
          focusAnimation: "uwLjAG7MPbb5kNpkfltgX",
          hoverAnimation: "_25AiV9rkMnY1kH88BkJPaW",
        };
      },
      93763: (ee) => {
        ee.exports = {
          ReleaseDateInfoCtn: "_2ocuoWlOpeAh97xq7WrkIM",
          GameEditCtn: "_2o3d5bRhxhkhFeFhW8godg",
          ReleaseDateContent: "_14jgI2A7iky0kJHGTv5bRH",
          EditButton: "_1FeuJt2eGQs_Rst-XDLFm4",
          Spacer: "_1kzzU_wSbmdyI7oLSsyg-u",
          Top: "_3M26MlsJeORKy1BwxAXZum",
          Bottom: "_1qVhcuP_Q7ETKhqOIF-6nf",
          EditButtonIcon: "_1EzMvfRFX_4r0BoWZP0nDJ",
          LabelField: "_15-FOPma_SgLfRiaMDz00K",
          Label: "TlwzuMCaMLu_NamMk-aqI",
          BigField: "_1q70c9TQOGTE8nIj0PZzFs",
          Set: "_462we5kglLCfOmKOQ-yFJ",
          DescText: "_1DrWiEkEcbt3HstR0OiF2H",
          StatusText: "_3j0F2jA1hGH2uFa5CQJUU1",
          StartWizardButton: "_3aJmqkMNOKlgJpR8MjiixB",
          ControllerSupportLevelString: "_29_hhzfHe7mcOGymGIBMk8",
          InfoRow: "_2EuSdla3Jwg3xI_Dgo_qHu",
          LocSection: "glzO-PzgvCa6Skefap3ex",
          HighlightRow: "_1o45fKVcOJe0ZqBEGcY7iq",
          HighlightRowRed: "_1hL1r05CyflWZetU6qrC1c",
          LocString: "_29T_Phs4gpEQr5w3liXu9f",
          HighlightText: "_3r2CUk5i9BqNQMQQQUrr0D",
          ImgSection: "_2iy3BWZdA1i5GxeKdEXw5h",
          ImgContainer: "_3fVMxj4lcjRb2Ig3TUcYBP",
          PreviewContainer: "_1WiJc86Iy8Vg1PQk6AofW4",
        };
      },
      72611: (ee) => {
        ee.exports = {
          CreatorNameCtn: "_38XTY1uRQtSGN-NA3nbbGg",
          CreatorCtn: "_2Z2NpZBAp01VIPZcHEkMvW",
          HoverCtn: "-TMA8muDrEsq9vwMsGs8Z",
        };
      },
      19042: (ee) => {
        ee.exports = {
          CapsuleCtn: "c-RZpHTXb06OJeUNz4WEW",
          MissingCapsuleCtn: "_364X0fngRQGCfxG4VyRk_D",
          AppRowCtn: "_2VXPIaz6YEo5TPJqSn_yE5",
          PageSelect: "_12MnhNSqHX_n83jqCGQrF-",
          ManualFeatures: "_1WxdPIk2Wp9e2_EPCvDXs0",
          SortOptionsCtn: "_1sM7lJwWxP9zl748WJgn_8",
          CreatorHomeCtn: "d77JrwhwWgQ2752O6hs9q",
          FeatureSelectItemCtn: "_3gmDKxSYF9DEWwP-L7l_W6",
        };
      },
      63251: (ee) => {
        ee.exports = {
          DropDown: "_2bdfWkqeuk3tQIDuq_G7QG",
          Avatar: "-Fm68k4tG1jrT2Jfr0gbx",
        };
      },
      9469: (ee) => {
        ee.exports = {
          HistoryGrid: "EH94izUwGG4SSkACVZ7n5",
          HeaderCell: "_1nob8WR16zyBYIFa_CPw9w",
          Cell: "_2bC2EU989i01V1yWopneL4",
          RemovedName: "_21vm-4CtlXT411r74VWNJt",
          CreatorCtn: "_1DBwksWf73G37fIH0UHspV",
          HoverCtn: "_2US6IgYcvN2X4Qs1NwBHtI",
          AccountName: "_1jlLyRHa7jxq6iv3XYaicN",
        };
      },
      30533: (ee) => {
        ee.exports = {
          Ctn: "_1ZAQLoxm9d3f6xrGzbfNqv",
          CreatorCtn: "_3E1g0g32lII6LOwFavs-pL",
          HoverCtn: "_2BgPwOwyt6_vzsU2JpcvFM",
          Avatar: "_2aKMBhqBnmiLCGD_hcZSx3",
          CreatorCtnError: "tN8iKI_k1ulzwyVVkMZ_d",
        };
      },
      69515: (ee) => {
        ee.exports = {
          SelectorRow: "_2gPHlYO9IsXSVwCXObPaQe",
          RelationshipType: "_2Rm9HP6ML30Cji08Vj2td2",
        };
      },
      71714: (ee) => {
        ee.exports = {
          DLCItem: "_1sgY-MVMUccmrZgX7D5bAw",
          Highlight: "tsusJIGDyi0szvTLG_58g",
          DeleteDLCItem: "_3W4Twu_YWCADotnJq1XNad",
          HighlightDropDownLabel: "_1ydvIIXwFV5dgYKnwBTgR4",
          HighlightDropDown: "_1ipl4yg58fGYR0_j3G2nLH",
          DLCItemDeleted: "_3NI0dNLBy2votX-G41EHUK",
          DLCItemNotHighlightEligible: "_2tZBwJXOOBOJ0g1pDXTXcg",
          LabelNotHighlightEligible: "_1mAhoxKDY4ru5NgKwHsibi",
          AddDLCDialog: "_3QmO_KfxjsLCYJ3Km0vtXg",
          AddDLCFooter: "_20wuD-AQWC90hxbP9iGsQu",
          AppSelectCtn: "_32YZCQQ7Pe-_dwX6LIf3pl",
          DLCDisplayContainer: "_3cg2WBZbQuwOGVBJr4DDWz",
          AddDLCButton: "_2p7IttiJElSQxs_diHKzci",
        };
      },
      43104: (ee) => {
        ee.exports = {
          ExtraAssetImgTag: "_2JQ4QGd4mIBR58A-9bDHdq",
          ExtraAssetError: "_4aB4b9buM8DFxojRymZ_5",
          ExtraAssetImg: "_1W2-3_i4cuGzBmocT-ZAk5",
          Selected: "QRTy6qng-IEOMiXMxwVtY",
          "extra-asset-blink": "_2D6wlj_wFTjjLOi2f7N1tq",
          InDeprecatedLink: "sakeS4kMEd2FGp4Da4Xrt",
          ExtraAssetControlsContainer: "_3-tWPanUj6QJND7dPTlrgc",
          ExtraAssetControls: "_3LTnCSzSad_SJbC1nruDT8",
          SmallImage: "_3AYhN4DOm37hwrJw5_EKNa",
          ImageLinkDisabledWarning: "_2oUv4hHSs2-8LXtBPcyRRy",
          TopBar: "_1WOD0JTMh8GPXMSA_p8BNb",
          TopBarContent: "_1nOxfVQISFWWwmO7v_u77O",
          Hovered: "_2h_sqCtLa_VIfPxPT1ojpD",
          ExtraAssetDialogContent: "_2zFGXU_GHLOWey5_sOi8kq",
          ExtraAssetsDialogDescription: "_11Ohp1dBE7FzghG4yzgqoA",
          UploadButtonContainer: "_31BKf0Ts8oSM_mv61BOp2G",
          UploadButton: "_35DNlmVRsyVbi56Xf_jj9A",
          StandaloneUploadButton: "NK3X0iAqHHQskiywniNiD",
          ExtraAssetsGridDialog: "aaxZ2xZ0gE7RMvrheWWmj",
          ExtraAssetSearch: "_33MsM-ZTqbPsW8e03kSUKY",
          ExtraAssetsGrid: "_2Uzyt8kZcr-0KU1aoTkiuj",
          ExtraAssetsPageList: "_39FaN2oioTXV-lkAOG0jfE",
          ExtraAssetsChooser: "_12hVxV1z_asvDHFqo9ScMk",
          ExtraAssetChoice: "_13xCWTST4J-cgOyz6kwfIJ",
          ExtraAssetStack: "doWjXy-F7LwBxlzCUBAGC",
          AltTextBtn: "_1JdiJTPLBYcAxWzLqjYV5P",
          StackedImageCtn: "_3gElE6VZJ9uU4-RaFC8Ra8",
          StackedImage: "_2hABNX3YzXj9JYRLANr-hg",
          "Image-0": "_3cPT5-4vXp4iE6v0qwHc23",
          "Image-1": "_2BP4s6zHDy_5HIqCoVQqIg",
          "Image-2": "y5NNNiOOneEJF6_a7pq8O",
          ExtraAssetName: "_1v6uTQuGLshmZKWXULJOSr",
          InstructionsForLocAssets: "_1SZZIXmXR7Rw30KxYPB-tJ",
          LocalizeAssetDialogContent: "_1yX-VOaM5vG__71wYRKXpF",
          DisplayLocImage: "_3DKy0FBx7VieVYhRL6ykCt",
          LocalizeAssetsDialogDescription: "_2AS-5DvwKtFXZy1pWhENnE",
          LocalizedAssetMain: "RzrYxmOI_AsfjKkcxy234",
          LanguageColumn: "_2TmGHFx_V1QDQrc-3q_8-f",
          LanguageWarning: "qpAjL-lahF8IHh9Nd93Ff",
          LocalizeAssetImage: "_1AS4JMOtff-hCq2TVtvwG0",
          Large: "_3CEcLwkihaLGNenomwOCbk",
          LocalizeAssetKeyImage: "_3Ec8F-CYK-STI2Vqw-I5ml",
          LocalizedAssetCtn: "_2m5BQtwFQfI-w9rxOgxzzT",
          LocalizeAssetItem: "_2Si9uGdC2JFc48CXIZ4T1N",
          img: "_2LTUOhg1K-ZG-zE8KHXEbA",
          Name: "lGJk6OffakeBbm9rvukuH",
          LocalizedAssetUploadWarning: "_26-vmpZD8b_p2ApFLrcji8",
          LocalizedAssetUploadButton: "FrlNPlPwQkjgzk604bAC4",
        };
      },
      76349: (ee) => {
        ee.exports = {
          SideBySideComparison: "_22Yf4CsBMkYFBcTEBh4ifm",
          ThrobberContainer: "_1ohypTL81epoo-2xTCJp8M",
          Loading: "_1rTERXdhbmJz94-Cb07emK",
          ImgPreviewContainer: "_15tW0aE5WXrWrGgguKGlWn",
          ImgPreview: "xUnBDVbIvtL7vyAS4rn2t",
          DuplicatePreview: "_14-dbrekvOWYS09OPByyHh",
        };
      },
      97982: (ee) => {
        ee.exports = {
          LocTextAreaContainer: "_3oZ2A8CpTx8VWK_eJhZYh",
          LanguageSelect: "_26sgpEoBg_73b96Dm9zA__",
          LanguageOption: "_3-BbOrMwYQUVRDtsxZto7i",
          HasValue: "AX8gskcTCWl_aI-UYAJAf",
          TextArea: "_374NqqdR-vuq2spxuRXCB9",
        };
      },
      80968: (ee) => {
        ee.exports = {
          EditorPanel: "_2SgPxDudv7oRkzlHsNm4_O",
          AboutTheGameArea: "_3EAE8BxFPnb_g0Ct5b4QzW",
          Awards: "_26nsky_SK1122q1xYQ0VZu",
          PreviewDesktop: "_3bpOE-B9MDag6KQR0eBkuM",
          PreviewMobile: "_2WpGoEdbqT778yiAcOF1LI",
          GradientRule: "_1dK_q5EmTZgebmJeCzHq1s",
          PreviewGamepad: "_2m49NX6vFS6SVkkvgmwGY0",
          StoreAppPageHeader: "_1aQY7Yz23XDN0N4IVctriG",
          PreviewModeCtn: "_3j8IamPUv5fQG3BCS5x5g5",
          PreviewModeTitle: "_1xyaZdEQi0iZWRnsgSmNsE",
          PreviewItem: "uX4wgaxy3MACLqRDZkAQT",
          SelectedPreview: "_3GPQSHrcPD7sKpOP2Ne8E3",
          PreviewInfo: "_2SAasZGqd4LlNB-qPiE38o",
          GameDescriptionEditorToolbar: "_14dow-GSmyLacYWBXCNV1l",
          Sticky: "_2YccUEt5UoKig0cAk4W6DK",
        };
      },
      27539: (ee) => {
        ee.exports = {
          AltTextDialogContent: "FSO6VV5iXmPANFhTj7Bzp",
          AltTextDialogDescription: "VsXbYkSe5CrbxkE5GhQfI",
          AltTextGrid: "_1DSTal-SoqU7Zf0nk0FmRl",
          AltTextHeader: "DxwrrF6sruBZ-N_Q98dP9",
          AltTextImage: "_3_3Dqx1hIyrpPPlER58SWu",
          AltTextName: "iIe8caS0kpCFy1oLCOUCE",
          AltTextInput: "_160Whafs351qmmXz5c-5_b",
          AltTextRow: "_1okAG3zavPs6wvi1wP1-tW",
          AltTextFailed: "_3Az0YOAE-dFfsOyEkDyEoR",
          AltTextMutateFailed: "tyh1ewxCBrVfWQeIlU505",
        };
      },
      23256: (ee) => {
        ee.exports = {
          AntiCheatDropDown: "_1Ein4m5qBonpTJl1GbVcV_",
          OtherSerivceName: "_2wW0IMGaGmFIjizuMml3mB",
          KernelMode: "iAq_jMg3JrFT_qjIU6gSL",
          CheckboxLabel: "XRMda0yOh0NFnSf3EVLP1",
          CheckboxDescription: "_10omFg-YbEQjz9R0VzeuSC",
          LanguageSelector: "_2aIJUMbzwAYBpQHVa8E2Pg",
          FormRowIndent: "_2NE-O2O0DHfvjzxSZ2fmDO",
          FormRowHeader: "_2uZk1PvTdbBPuMfDFzAGNW",
          FormRowDescription: "_3pHVbh8Pxwbpxlxeej0oG3",
        };
      },
      72671: (ee) => {
        ee.exports = {
          ImageConfirmationDialog: "_2Dn55ck2zVwRbA9GNFu_yZ",
          ConfirmationDescription: "_3JFBzNNPRVAejRvp2bu5hF",
          ImageTypeConfirmationCtn: "_3C-PQ-bC6JWcozpVTRwYuU",
          ImageTitle: "_1Hb-MsBU3Ssa4GqbaZQNkc",
          ImageCtn: "kbtD90I1ou1gx_xO8tcXC",
          ImageSrc: "_1Md62ii5C2Q4QaiqWoEdhf",
          ImageCheckboxes: "_3eo-7msJ5jV20gub1qOBn",
        };
      },
      30041: (ee) => {
        ee.exports = {
          NonAppContentsEditor: "_1WoYFMMlYaGcrH1OlNAeb6",
          AddItemButton: "_1xbvS9FSWE8T43H5V6tnLs",
          NonAppContentsEditorScrollArea: "_1dJujt1qEcM8WgH2bsRGtX",
          EditorButtons: "_1WySz_wiyGNuQgIN2UIHuR",
          ItemEditorRow: "_1xiTQEBFDACW6ssXe_rkaa",
          ItemEditorRowContents: "_2oGxJ3wpmY3NkzAlmhzPeu",
          ItemEditorRowNameAndLanguageEditor: "_2QqnI_s10DOvb-HPBd-QeA",
          ItemEditorRowVisibleToggle: "_1NH9ZOrC3ltObbXnTj7Wn0",
          ItemEditorRowDescriptionEditor: "L9MKw629aEVZfhOrL8HFX",
        };
      },
      36671: (ee) => {
        ee.exports = {
          PackagePurchaseDisplayContainer: "_1pD-mB7FB4bkfagrMUC9cD",
          PackagePurchaseDisplayButtonBar: "_1XFrrNb_d41kTB7sg9Q_EQ",
          PackagePurchaseDisplayCheckOption: "uXkDV0VRgXEoAuNG58Fzd",
          PackagePurchaseDisplayArtLabel: "_2yayatEjpsnHa5NQ9oPlic",
          checkbox_label: "_1AiEeUD__3Hwc4fhAmw9o4",
        };
      },
      30935: (ee) => {
        ee.exports = { EmptyPinnedBundleList: "_1iAXEFHnXUjh793_HsWLka" };
      },
      15348: (ee) => {
        ee.exports = {
          PriceChangeSummary: "_378al6U3fz_xo26XB9TSaC",
          Pending: "_9BqgpQmpdILuSOBqbvGmK",
          LoadFailed: "_34U8ZCDShWlVmzkBSW2w1J",
          LastChange: "_2l-Xyo8VbJ2d3XET3FSMDA",
          RecentChange: "_396joK-7sdGrUxSlkMFOSC",
          ChangeCount: "oj-LqimPIvXVMzu4i_Srk",
          PriceChangeToolTip: "_1ju10cCVVFddbi9j4GydW7",
          ToolTipTitle: "_3xk6dJPcAPoyNGwRBsSLYI",
          ToolTipFooter: "_2lvPhgL4d8BhTp9kzGmqJ9",
          ChangeTable: "_1KVZXL9V7gdtPB4judbmZT",
          ChangeHeader: "Tgry6kDtqoo8oLIhLwRlk",
          ChangeRow: "_1OZc-hjI5dkOl7-5ULCXgQ",
          TimeSince: "_1kFp7JsD4NPIjtLyWXzHd_",
          Price: "pCW6qPXp-OAuvel2qwIcT",
          Currencies: "_3xGwebW9ut7kgLyLjTcBpx",
          Notes: "_3SUWUxCuHwN3dYEIbtAbja",
          Increase: "_3hxpTm3SvfgEuBOwXHA3lD",
          Decrease: "wU80squkMRYFMGxr9CTrZ",
          NoChange: "yUgWUJgZHovMaAGLLtLA_",
          FirstPrice: "_24W_O9CqcOeCKh_efWoYl9",
        };
      },
      14358: (ee) => {
        ee.exports = {
          RadioButtons: "_1o8PeYV1JEHw28jdq0-cZs",
          ActionsCtn: "_3tmYmIJendBOkxYfR5pMSJ",
          NotesField: "hmIKAOq3IUq5OZJGCGodY",
        };
      },
      77428: (ee) => {
        ee.exports = { ValveAccountTicket: "_1gAPWjNZ0dtQiyMfDmxtd" };
      },
      2897: (ee) => {
        ee.exports = {
          PriceDeltaCtn: "FR0Jbt4UFGpCZeakQYuXa",
          PackageInfoColumn: "_1sw3lFWbKOrwVBjyMmIVFE",
          ProposalCtn: "_2aZ0dHJvCBWY-dISFYuHx7",
          RowCtn: "_3Fj4_LN49SJ2FIDkn5Ar_x",
          InlineDiv: "_19_mEBDtOirVDKNF0sbPMT",
          FailuresCtn: "_1Z31Ten-n1dAC5fhblKIfC",
          MatrixGap: "_3vOjxVYu8bLFNAaHbstgFp",
          Legend: "_14hkGjE6JlGYtfCi24GIcv",
          Missing: "_1Prze41qAKK3Yf2ywGaP4x",
          Outside: "gYYAD-UX0KTtpP8A7wose",
          CustomUsd: "Ru7OVKpEg2-4T6i2fJPVP",
          MissingCurrency: "_1aHJaADVcfWKEoJd3rHyzS",
          Title: "_3vH34cEyQM0jTB1rtzMc19",
          SectionHeader: "_2GhfKAafoa5Z1PGwOg6ju9",
          AutoApprovalCtn: "_1-7oBBbh-eUUB7iskMHyxE",
          Notes: "_1y1kejSOqm-cFSP1HxSL_s",
          CurrencyWarningsCtn: "_2H_McBAV-1DEhfPhYqmTG8",
          AboveAutoPublish: "_18NNA8ajB8j6lCIlkk8_uk",
          ThresholdMiniTable: "_1Qz3SUdF4Z2HAIlSWPA08n",
          WarningTitle: "_1jnFS4SBVwvvKVzrE6v9ly",
          WarningAbove: "_2QdKNR-tKnTQ9LEnQ8bVV-",
          WarningBelow: "_1Yk633c4Lzb0M0bpPNgg7e",
          ThresholdRow: "_1WR81oD47ZQYIwkubRtLJ0",
          ThresholdHeader: "IROvk26OnXM-2kx4vbPtO",
          CurrencyName: "_1ErxFwG9fg34T9vaBCjMyh",
          EqualPrices: "_3tHg_ZoTA9Y-7U0t2Cxfyx",
          OriginalPrice: "_2oPTCoNk1ZzEt4AhH3P2D-",
          ProposedPrice: "mbBO-p8uSR3ZCnGWTrGpO",
          RecommendedPrice: "_30pJDSHiHiCXSW4SNk0nnP",
          PercentDiff: "_1d_jmwlFfcaSfpvHzyFrhM",
          ReleaseDateCallout: "_1Xzwu7hrwrG-4QWc1zMbsx",
        };
      },
      23708: (ee) => {
        ee.exports = {
          RowCtn: "_2Kb5slnuUjyEZh0EM01mpa",
          CurrencyHeaderRow: "_1MTZXU0O3Ez0HuYIUZ7DRL",
          priceChangedNew: "_3omSD7bzihAQsvjW816OTH",
          priceChangedHigher: "kPaeu3zbh3qS1FSWF0PXM",
          priceChangedLower: "ExSF3NJhFrNmaalRumcyU",
          outofmatrix: "_1v_REU9nI-QU5hVkmSREZ2",
          pricingerror: "_1flav3IaDWEjl67mhiTjtL",
          outofmatrixlower: "_1yBYLNIGGvEetpwa3M9DVx",
          pricingLegend: "_31Qzh5kyW8c3aceh-aaOLD",
          PackageInfoColumn: "_1v90IxHlEuTMEzzaQS4DkY",
          PackageName: "_3Ry84c5vN70mLVtPYtg6sv",
          Column: "_3yvRGn0SGj1ZMfxDBlsunE",
          SubmissionBy: "_1OTJ0XMxu7F_2yNy3A2qKA",
          MissingReleaseDate: "_2smrPeVLLyicNuwt3hgBAd",
          FullCurrencyColumn: "_1VlWukpBKxbYmmlJrC6r5m",
        };
      },
      26673: (ee) => {
        ee.exports = {
          ReorderableListWithArrows: "j49UFcs3c3QniMgfBfbUC",
          ReorderableListElement: "_1ziKQJEFC5xIspudN0mQWr",
          ReorderableListUpAndDownCtn: "_117rbiRaxL2gx6MMmEAfbw",
          ReorderableListElementContents: "QKoy-F4c1lg1WVGHxrLPo",
          PurchaseOption: "_2svu-POqLeuRkmBTgwfmiS",
          PurchaseOptionFirstLine: "_3tZOw-_UErk1L8tZXBjBlc",
          RemovePurchaseOption: "_2_34o9MpxAxSaACc_87Gki",
          PurchaseOptionDetails: "_1fKMWxi9ifFxXkEqUGVwzK",
          PurchaseOptionHeader: "_2YRHmK-lnhG05fMug_YyNZ",
          HeaderText: "_1kHpaHBh_NR1YhLy8EhFi7",
          PurchaseOptionsOrderEditor: "_2XMlI9jS0J1yB1LCS0c1SU",
          PurchaseOptionsManualToggleCtn: "_3_8N_22yAQCd1zvyNKqfht",
          NoPurchaseOptions: "HXFLodBVYcS6nS9eLv0HH",
          PurchaseOptionError: "_3RSMcw9mJDbrvzPfuNnhcB",
          Exclamation: "_3MdVQ7CJpuGgd3bkTFABRm",
          PackageOption: "vuttoObFteUS46kZgAGlL",
          DropdownOption: "jMf54NQ9Nyft2Si8tbZhL",
          TitleLine: "_4P8QXdBrnelSxwtLHVLOE",
          TitleInput: "_2hzGnHNQA7JBBJz0jCHV2-",
          DescriptionLine: "_3XNwKrWW3qelYLfsIgwHx1",
          DescriptionInput: "ZQb6AVSuWych63E6kWW5F",
          DropdownItemsCtn: "_1tiRg0IxiQHqYoCUkNxKWQ",
        };
      },
      36500: (ee) => {
        ee.exports = {
          EditorCtn: "_3qyd9aiwL32kAuGY_Rhzm0",
          HeaderCtn: "_2SsIaBHCvUU5Hyt5uQxA_p",
          Row: "wscFtfHuH_NvN1lnfHM6i",
          MilestoneButton: "_1qXO7rz_wCXLWRo_houCbh",
          BtnCtn: "ZrIN9N9KK84LosHTnHAal",
          LangBox: "oHsool0rU2gYfVTjIVrGt",
          CreationButtonRow: "BsMGgRExOtnnHfrfRMeJ7",
        };
      },
      64442: (ee) => {
        ee.exports = {
          BtnCtn: "_15Uzhk19FXMyjsNEpD2w__",
          MilestoneTable: "_32pGw8RvFp8N1tj1ZZFD3V",
          Date: "_3eoKJfAU5YNpujekRJ29Lt",
          Released: "aiYALRtbutTsqpA3EVxIS",
          EditBtn: "_3GPoiDQhG2AWZ8zqnefzZt",
          StatusRow: "hs6Pa5T0Gbw8pd9VpJNAs",
          CheckMark: "_2gpgDFHrtGUVaBKuGQRQfZ",
          EditMilestoneDialog: "_1b7pp2idI0It1Wtbh4K5Ck",
          ShippingTheMilestone: "_1ujBS0HyFpqMeEUdjrLrMr",
          ShippingType: "pXgsjv7B10bT5brNV7MFz",
          MilestoneTitleField: "_2J6DntV8BgxcP9CSCueNZu",
          OptionDetails: "_3IQkWWzfVA9kOWtxTMekyW",
          DatePickerRow: "_3ZMVdS_YE75SaKzbxL0ifx",
          TitlePreviewRow: "_82lvRm6zNUSuia5C-0KVb",
          Shipped: "_1jDNm9kCJcNIl38lakfF51",
          PublishReminder: "_1FnrHyPuXP7yRZRvgoNvLi",
        };
      },
      8833: (ee) => {
        ee.exports = {
          Separator: "_2v8lnOhHPKk5DrlAD0yAwc",
          "Size-1": "HA_T1szVWGIw7_cDibhei",
          "Size-2": "oSgUz2qE-NgHuOm4wt_OC",
          "Size-3": "f9Ra4JmQiBJz_dBLijs_x",
          "Size-4": "_1zkUYDDyfzPgesBbGmMsxP",
        };
      },
      60394: (ee) => {
        ee.exports = {
          Root: "_3i_h6xYLxqWT-wquwrB4P8",
          "Size-1": "_2BS49hUFyqY2YQ3X6Am-Oe",
          "Size-2": "_3GAcWYWoOxZKAt2NY-d-M-",
          "Size-3": "q85ksguLIHUIA6Z5aWE2b",
          Track: "wCPKWvwCOuo-4mHzhEcBW",
          Handle: "_14qr0P2xMoRiEbcekixcZh",
        };
      },
      75180: (ee) => {
        ee.exports = {
          Grid: "_2IVd64AHN6R428cgcPqW7M",
          Display: "_2PUyyAEGuZenuwES7VJvQO",
          Columns: "_16FZUyKiH6Z7trthKypJwf",
          Rows: "_2QdiX1hDsJmlkrHmcCOMbV",
          AutoColumns: "Cr7YIMQn6_lDRU4-3BR8b",
          AutoRows: "_3kyzvGnYVLT0DW6nzP9n18",
          AutoFlow: "_3AvZKfpfaIQbfczVRBASsX",
          Areas: "_1-yfCTWkj4tOFfb3EKXx6N",
          Flow: "_1yUwWGTk4IX0IhdJiKfFBf",
          AlignContent: "_2Tglp6488nVBhU976Llfpe",
          JustifyContent: "TT1_g1XWXbbLgxOPIpczV",
          AlignItems: "_1ve3GjJA-d6MfYcIiXdqz0",
          JustifyItems: "_2LsmJGVn3g0GHmBPNWVn5T",
          Gap: "c0C2uHpDLCegllhH1rM3M",
        };
      },
      39049: (ee) => {
        ee.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      83217: (ee) => {
        ee.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      47534: (ee) => {
        ee.exports = {
          SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
          SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
          SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
          SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
          ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
          AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
        };
      },
      73309: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          Container: "_30v-6zb_axOypIUr5VRHE1",
          SingleLine: "_2i9qH2AM6Wg5660Tkf_fTt",
          ToolbarRowOverflowContainer: "nXEH21nf47u2OH7BjQKei",
          ToolbarRow: "LCeIT0gmFTY8fdfaVgk4j",
          Gap: "_19z0fjj7o0n9vAjVjvYZNU",
          Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
          CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
          Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
          FileUploadPlaceholder: "_2P-FBc3tZWGeeBFplDSb9g",
          ThrobberCtn: "_3QpIkO3kkVZmnulwmiZRHH",
          ThrobberRow: "VIY8ZV4g4NpEMnF-_pHOh",
          Throbber: "_12t6JmDCFT6MqtNVrSi5NJ",
          PendingImage: "_2HezQYTfmFfdRmuB8l9QPI",
          FileUploadDragDrop: "_1WRaNQqBKcUp67ntgoyEeQ",
          FileUploadDropFilesMessage: "I2CE9X_I0GBNYbJf7VYBg",
          TooltipWithShortcut: "zT2msZmm-jBeLe4Dt7smo",
          KeyCap: "_3mZEV9CXrIn4FITvJk3Xy-",
          BackgroundAnimation: "_32I7Uh1ZWySd7VGW50f5IC",
          "ItemFocusAnim-darkerGrey-nocolor": "_3dzJEyM6opBkmIeARAGlYr",
          "ItemFocusAnim-darkerGrey": "_2dbsn-sR5AlFKEgCU0FBbT",
          "ItemFocusAnim-darkGreySettings": "_2gCU5HJBuDk1vxRMJhwFGE",
          "ItemFocusAnim-darkGrey": "_39KmlfhlZwkINJt9fdyKbw",
          "ItemFocusAnim-grey": "_1X5Siupo5N_ZVuGesoYV0t",
          "ItemFocusAnim-translucent-white-10": "_3aZcpOjRI-YzMZmhCRiFjd",
          "ItemFocusAnim-translucent-white-20": "_310j_Q-iB-at4-cmQSi1Mt",
          "ItemFocusAnimBorder-darkGrey": "_38WlDUfHs-IiaRcWKFpWyA",
          "ItemFocusAnim-green": "_3Hq7gKwAuHvmYuBWXBx8mC",
          focusAnimation: "_1k4kLxHBHs5edlnWmN-Cos",
          hoverAnimation: "_3OZh2Bm4JsNC3bNfskysCA",
        };
      },
      1431: (ee) => {
        ee.exports = {
          StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
          StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
          StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
        };
      },
      63404: (ee) => {
        ee.exports = {
          narrowWidth: "500px",
          Details: "_8DSX9d1ihrMSeZUFC9elD",
          Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
          FeatureList: "TwihVkmmqI5XLg6P4fpwF",
          CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
          FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
          GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
          FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
          InfoRow: "_1RmibngWLogcFmO93kGFgq",
          FeatureName: "ny6hWVK6ii05H200KRhds",
          ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
          InfoLink: "_2xmH7agKi37v9kwFHi093S",
        };
      },
      17479: (ee) => {
        ee.exports = {
          narrowWidth: "500px",
          ReleaseDateInfoCtn: "_3_BM0Yr1nZHLRCU-YScHph",
          GameEditCtn: "_2atDY79LoAg6W2I3f_ghoe",
          ReleaseDateContent: "_3EqL95FAclb4_KUCViyIy",
          EditButton: "_1nt4AvPVzCcmifUL2j41GY",
          Spacer: "D6yaJy1vHTj3skoSwQCmn",
          Top: "_17TBmwVnz8B0fYk9NMgjcC",
          Bottom: "_1mdhhjdhefzfINtpGJDw_F",
          EditButtonIcon: "_23n7mGKR9t2rn_appk4hc4",
          LabelField: "_1yV1XMUdZdavVgSZ6SzXKj",
          Label: "_2aDfpXF8ktFHq439q_1vAi",
          BigField: "_3K2oJx5qEZyMkC2O7Ib77p",
          Set: "_1CXRFvJ5iqKqlENSWgeHPP",
          DescText: "_3FFbGIjpM4z0O1HfqwwsvR",
          StatusText: "jBW2mrF7D6RVhT2u_ZRXB",
          StartWizardButton: "_1hwFIOidJj1HaD2_cI4NRD",
          ControllerSupportLevelString: "_1mfBI5XbiaKU9vS5WkJALu",
          InfoRow: "_2xZaMR-NKc0LbkeM50cZq8",
          LocSection: "_3KAysk4dlhWETa6ixz7V2j",
          HighlightText: "_2Qr-aCeNvCUkoGKh3ikniD",
          GamepadRequired: "xAMFa9akLaRN7hfkTC8_h",
          Personalized: "_1g3WgidGN68CDX4XQPGnl6",
          HighlightRow: "N97okiqePUqGpdeNrIxUU",
          LocString: "_3FBEGAfvLQj4qYjstmZAPE",
          ImgSection: "dxuI55RF56-dzbuXjj2W0",
          SmallerSVG: "_1LWvkVSCiVeG4Yf5uxtQ28",
          BiggerSVG: "WRiytnKTtULWCkwFVJoTx",
          PreviewContainer: "_13bOrUeolqp9EyK3or-cLt",
          StoreSidebarContainer: "_1CTHwmZmi5YE4kovZH_UIl",
          PurchaseNoticeContainer: "_166hsSkQYxKraMJIx7td91",
          PurchaseNoticeImage: "_3UK9OHyZ3r9rA55mgsnZPD",
          NoticeContainer: "_2IS5rvIlv3ARam8O7b_-po",
          ControllerRequiredImage: "_3YEJ5NoOg1YObev3TXdMi",
          Tilt: "_1NEHd7t-JVZYdk68QMEph-",
          ToolTipControl: "_3vt5rw82YhkhWtu5ld9QeP",
          ToolTipContainer: "_3PRdiJdKKfTnwLnTfbCkEz",
        };
      },
      64734: (ee) => {
        ee.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();
